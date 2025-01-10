import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { configEVM } from 'src/states/wallets/evm-blockchain/configs';
import { WagmiProvider } from 'wagmi';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function ProviderEVM({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={configEVM}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </WagmiProvider>
    );
}
