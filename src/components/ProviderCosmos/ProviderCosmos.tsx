import React from 'react';
import { ChainProvider } from '@cosmos-kit/react-lite';
import { wallets as keplrWallet } from '@cosmos-kit/keplr';
import { wallets as metaMaskWallet } from '@cosmos-kit/cosmos-extension-metamask';
import { wallets as owalletWallet } from '@cosmos-kit/owallet';
import { wallets as leapWallet } from '@cosmos-kit/leap';
import { ProjectID_WalletConnect } from 'src/constants';
import { assetCosmosHub, assetInjective, assetOraichain, assetOsmosis, cosmoshubInfo, injectiveInfo, oraichainInfo, osmosisInfo } from 'src/states/wallets/cosmos-blockchain/configs';
import { Chain } from '@chain-registry/types';
import { GasPrice } from '@cosmjs/stargate';
import ModalConnectWallet from './ModalConnectWallet/ModalConnectWallet';

export default function ProviderCosmos({ children }: { children: React.ReactNode }) {
    // useEffect(() => {
    //     console.log(chains);
    //     // console.log({ assets, chains });
    //     for (let i = 0; i < chains.length; i++) {
    //         if (['oraichain', 'injective', 'osmosis', 'cosmoshub'].includes(chains[i].chain_name)) {
    //             console.log('Chain', i, chains[i]);
    //         }
    //     }
    // for (let i = 0; i < assets.length; i++) {
    //     if (['oraichain', 'injective', 'osmosis', 'cosmoshub'].includes(assets[i].chain_name)) {
    //         console.log('Asset', i, assets[i]);
    //     }
    // }
    // }, []);
    return (
        <ChainProvider
            wallets={[
                keplrWallet[0],
                owalletWallet[0],
                leapWallet[0],
                metaMaskWallet[0],
                // keplrWallet[1], leapWallet[1]
            ]}
            chains={[oraichainInfo, osmosisInfo, cosmoshubInfo, injectiveInfo]}
            assetLists={[assetCosmosHub, assetOraichain, assetInjective, assetOsmosis]}
            signerOptions={{
                signingCosmwasm: (chain) => {
                    return {
                        // gasPrice:{ amount: Decimal.fromUserInput('0.001', 6) as any, denom: chain.daemon_name },
                        gasPrice: GasPrice.fromString('0.001' + (chain as Chain).fees?.fee_tokens[0].denom),
                    };
                },
                preferredSignType: () => {
                    return 'amino';
                },
            }}
            walletConnectOptions={{ signClient: { projectId: ProjectID_WalletConnect } }}
            walletModal={ModalConnectWallet}
            sessionOptions={{ duration: 1000 * 60 * 60 * 24 }}
            throwErrors={true}
        >
            {children}
        </ChainProvider>
    );
}
