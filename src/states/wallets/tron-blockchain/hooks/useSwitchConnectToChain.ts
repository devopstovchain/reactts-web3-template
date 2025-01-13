import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { TVMNetworkId } from '../types';
import { mapNameNetworkToInfo } from '../configs';
import { detectMobile } from 'src/utils';

export default function useSwitchConnectToChain() {
    const { wallet } = useWallet();
    async function switchConnectToChain(typeChain: TVMNetworkId) {
        if (detectMobile()) return;
        await wallet?.adapter?.switchChain(mapNameNetworkToInfo[typeChain].id);
    }
    return {
        switchConnectToChain,
    };
}
