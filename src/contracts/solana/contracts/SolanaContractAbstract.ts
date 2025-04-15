import { AnchorProvider, Idl, Program } from '@project-serum/anchor';
import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { WalletContextState } from '@solana/wallet-adapter-react';

import { ComputeBudgetProgram, PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js';
import { publicClientSol } from 'src/states/wallets/solana-blockchain/configs';
import { sleep } from 'src/utils';

export abstract class SolanaContractAbstract<IDL extends Idl> {
    public provider: AnchorProvider;
    public program: Program<IDL>;
    public walletContext: WalletContextState;

    constructor(walletContext: WalletContextState, programId: PublicKey, idl: IDL) {
        this.provider = new AnchorProvider(publicClientSol, walletContext as any, { preflightCommitment: 'finalized' });
        this.walletContext = walletContext;
        this.program = new Program(idl, programId, this.provider);
        this.walletContext = walletContext;
    }

    setfeeGas(gas: number) {
        return ComputeBudgetProgram.setComputeUnitPrice({
            microLamports: gas,
        });
    }

    async awaitConfirmTransaction(signature: string) {
        const latestBlockHash = await publicClientSol.getLatestBlockhash();

        await publicClientSol.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: signature,
        });
        await sleep(600);
    }

    async sendTransaction(transaction: Transaction | VersionedTransaction, options?: SendTransactionOptions) {
        if (transaction instanceof VersionedTransaction) {
            const simulate = await publicClientSol.simulateTransaction(transaction);
            console.log('Simulation:', simulate);
            if (simulate.value.err) {
                throw new Error('Simulate error: ' + simulate.value.err.toString());
            }
        }
        if (this.walletContext.wallet?.adapter.name === 'Phantom') {
            console.log('Phantom wallet detected');
            const provider = window?.phantom?.solana;
            if (transaction instanceof Transaction) {
                if (!this.walletContext.publicKey) {
                    throw new Error('Wallet not connected!');
                }
                transaction.feePayer = this.walletContext.publicKey;
                transaction.recentBlockhash = (await publicClientSol.getLatestBlockhash()).blockhash;
            }
            const { signature } = await provider?.signAndSendTransaction(transaction);
            console.log('Signature:', signature);
            await this.awaitConfirmTransaction(signature);
            return signature;
        }

        const signature = await this.walletContext.sendTransaction(transaction, publicClientSol, { maxRetries: 1000 * 60, preflightCommitment: 'finalized', ...options });
        await this.awaitConfirmTransaction(signature);

        return signature;
    }
}
