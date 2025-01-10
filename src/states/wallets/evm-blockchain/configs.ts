import { ProjectID_WalletConnect } from 'src/constants';
import { createClient, http } from 'viem';
import { bsc, mainnet } from 'viem/chains';
import { createConfig } from 'wagmi';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';

export const configEVM = createConfig({
    chains: [mainnet, bsc],
    connectors: [
        metaMask(),
        walletConnect({
            customStoragePrefix: 'wagmi',
            projectId: '3028c148986d3af6ab81520e99f52f17',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
                url: 'https://app.orchai.io/',
                description: 'Orchai App',
                icons: ['https://app.orchai.io/favicon.ico'],
                name: 'Orchai',
            },
            showQrModal: true,
            qrModalOptions: {
                themeVariables: {
                    '--wcm-z-index': '1400',
                },
            },
        }),
        injected({ target: { id: 'app.owallet', name: 'OWallet', provider: window.eth_owallet } }),
    ],
    transports: {
        [mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
        [bsc.id]: http(),
    },
});
