import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { TEvmNetworkId } from '../types';

export default function useSwitchToConnectedChain() {
    const { chainId } = useAccount(); // chainId from wallet
    const chainIdConnected = useChainId(); // chainId from provider
    const { switchChainAsync } = useSwitchChain();

    async function switchToChainConnected(idSwitchTo?: TEvmNetworkId) {
        const idTarget = idSwitchTo || chainIdConnected;
        if (chainId !== idTarget) {
            await switchChainAsync({ chainId: idTarget });
        }
    }

    return {
        chainIdOnWallet: chainId,
        chainIdConnected,
        switchToChainConnected,
    };
}
