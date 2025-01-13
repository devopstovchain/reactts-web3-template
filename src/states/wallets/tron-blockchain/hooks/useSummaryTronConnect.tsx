import { SummaryConnectInfo } from '../../types';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { tronNetwork } from '../networks';
import { IconTRX } from 'crypto-token-icon';
import { walletIcon } from '../../constants/walletIcon';

export default function useSummaryTronConnect(): SummaryConnectInfo {
    const { address, wallet, connecting, disconnect } = useWallet();
    // console.log('wallet', wallet);
    return {
        address: address || '',
        chainId: tronNetwork.id,
        chainIcon: IconTRX,
        chainName: 'Tron',
        status: wallet ? (connecting ? 'Connecting' : wallet.adapter.state) : 'Disconnected',
        walletIcon: wallet ? walletIcon[wallet.adapter.name] || wallet.adapter.icon : undefined,
        walletName: wallet?.adapter.name || '',
        accountName: '',
        disconnect: () => disconnect(),
    };
}
