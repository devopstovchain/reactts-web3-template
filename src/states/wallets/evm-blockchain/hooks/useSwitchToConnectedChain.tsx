import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { useActiveChainToViewValue } from '../../hooks';

export default function useSwitchToConnectedChain() {
    const { chainId } = useAccount();
    const chainIdConnected = useChainId();
    const idActiveOnView = useActiveChainToViewValue();
    const { switchChainAsync } = useSwitchChain();

    async function switchToChainConnected() {
        if (idActiveOnView == 1 || idActiveOnView == 56) {
            if (chainId != chainIdConnected) {
                await switchChainAsync({ chainId: chainIdConnected });
            }
        }
    }

    return {
        chainIdOnWallet: chainId,
        chainIdConnected,
        switchToChainConnected,
    };
}
