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
        this.provider = new AnchorProvider(publicClientSol, walletContext as any, { preflightCommitment: 'confirmed' });
        this.walletContext = walletContext;
        this.program = new Program(idl, programId, this.provider);
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
        const signature = await this.walletContext.sendTransaction(transaction, publicClientSol, { maxRetries: 1000 * 60, preflightCommitment: 'finalized', ...options });
        await this.awaitConfirmTransaction(signature);

        return signature;
    }
}
