import { chainIcon } from '../../constants/chainIcon';
import { walletIcon } from '../../constants/walletIcon';
import { SummaryConnectInfo } from '../../types';
import { TCosmosNetworkId } from '../types';
import { useCosmosChain } from './useCosmosChain';

export default function useSummaryCosmosConnect(chainId: TCosmosNetworkId): SummaryConnectInfo {
    const { address, chain, status, wallet, chainWallet, disconnect } = useCosmosChain(chainId);

    return {
        address: address || '',
        chainId: chain.chain_id,
        chainIcon: chainIcon[chainId],
        chainName: chain.pretty_name || chain.chain_name,
        status: status,
        walletIcon: wallet ? walletIcon[wallet.name] || wallet.logo?.toString() : undefined,
        walletName: wallet?.prettyName || '',
        accountName: chainWallet?.username || '',
        disconnect: () => disconnect({ walletconnect: { removeAllPairings: true } }),
    };
}
