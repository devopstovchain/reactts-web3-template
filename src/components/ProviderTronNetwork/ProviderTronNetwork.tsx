import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { adapters } from 'src/states/wallets/tron-blockchain/configs';

export default function ProviderTronNetwork({ children }: { children: React.ReactNode }) {
    // const adapters = useMemo(() => {
    //     const tronLinkAdapter = new TronLinkAdapter();
    //     const walletConnectAdapter = new WalletConnectAdapter({
    //         network: 'Mainnet',
    //         options: {
    //             relayUrl: 'wss://relay.walletconnect.com',
    //             projectId: '349c73495596fe0938c2557979bddc8c',
    //             metadata: {
    //                 url: 'https://app.orchai.io/',
    //                 description: 'Orchai App',
    //                 icons: ['https://app.orchai.io/favicon.ico'],
    //                 name: 'Orchai',
    //             },
    //         },
    //         web3ModalConfig: {
    //             themeVariables: {
    //                 '--wcm-z-index': '1400',
    //             },
    //         },
    //     });
    //     const ledger = new LedgerAdapter({ accountNumber: 2 });
    //     const bitKeepAdapter = new BitKeepAdapter();
    //     const tokenPocketAdapter = new TokenPocketAdapter();
    //     const okxwalletAdapter = new OkxWalletAdapter();
    //     return [tronLinkAdapter, bitKeepAdapter, tokenPocketAdapter, okxwalletAdapter, walletConnectAdapter, ledger];
    // }, []);
    const onAccountsChanged = useCallback((curAddr: string, preAddr?: string) => {
        console.log('new address is: ', curAddr, ' previous address is: ', preAddr);
    }, []);

    function onError(e: WalletError) {
        if (e instanceof WalletNotFoundError) {
            toast.error(e.message);
        } else if (e instanceof WalletDisconnectedError) {
            toast.error(e.message);
        } else {
            console.error(e);
            if (e.message === 'The user rejected connection.') {
                localStorage.removeItem('tronAdapterName');
            }
            toast.error(e.message);
        }
    }

    return (
        <WalletProvider
            adapters={adapters}
            onError={onError}
            onAccountsChanged={onAccountsChanged}
            onConnect={(address) => {
                console.log('connnected', address);
            }}
            // onAdapterChanged={(adapter) => {
            //     console.log('adapter changed', adapter);
            // }}
        >
            {children}
        </WalletProvider>
    );
}
