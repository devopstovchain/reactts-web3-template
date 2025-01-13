import { TronWeb } from 'tronweb';
import { tronNetwork, tronNileNetwork } from './networks';
import { TronLinkAdapter } from '@tronweb3/tronwallet-adapter-tronlink';
import { OkxWalletAdapter } from '@tronweb3/tronwallet-adapter-okxwallet';
import { LedgerAdapter } from '@tronweb3/tronwallet-adapter-ledger';
import { BybitWalletAdapter } from '@tronweb3/tronwallet-adapter-bybit';
import { FoxWalletAdapter } from '@tronweb3/tronwallet-adapter-foxwallet';
import { BitKeepAdapter } from '@tronweb3/tronwallet-adapter-bitkeep';
import { TTronNetworkInfo, TVMNetworkId } from './types';

export const queryClientTron = new TronWeb({
    fullHost: tronNetwork.rpc,
    privateKey: '815DB4D82AE5C6DB0409CB295DD5C28E6BC16417E235A55DB85B9D9B194EC4DD',
});

export const queryClientTronNile = new TronWeb({
    fullHost: tronNileNetwork.rpc,
    privateKey: '815DB4D82AE5C6DB0409CB295DD5C28E6BC16417E235A55DB85B9D9B194EC4DD',
});

export const queryClient: Record<TVMNetworkId, TronWeb> = {
    nile: queryClientTronNile,
    tron: queryClientTron,
};

export const mapNameNetworkToInfo: Record<TVMNetworkId, TTronNetworkInfo> = {
    nile: tronNileNetwork,
    tron: tronNetwork,
};

export const adapters = [
    new TronLinkAdapter(),
    new LedgerAdapter({ accountNumber: 2 }),
    new BitKeepAdapter(),
    new OkxWalletAdapter(),
    new BybitWalletAdapter(),
    new FoxWalletAdapter(),
    // new WalletConnectAdapter({
    //     network: 'Mainnet',
    //     options: {
    //         customStoragePrefix: 'tron',
    //         relayUrl: 'wss://relay.walletconnect.com',
    //         projectId: '349c73495596fe0938c2557979bddc8c',
    //         metadata: {
    //             url: 'https://app.orchai.io/',
    //             description: 'Orchai App',
    //             icons: ['https://app.orchai.io/favicon.ico'],
    //             name: 'Orchai',
    //         },
    //     },
    //     web3ModalConfig: {
    //         themeVariables: {
    //             '--wcm-z-index': '1400',
    //         },
    //     },
    // }),
];
