import { configEVM } from './configs';

declare module 'wagmi' {
    interface Register {
        config: typeof configEVM;
    }
}

export type TEvmNetworkId = (typeof configEVM)['chains'][number]['id'];

export type TEvmAddress = `0x${string}`;
