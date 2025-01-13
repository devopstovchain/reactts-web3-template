import { SvgComponent } from 'crypto-token-icon';
import { TEvmNetworkId } from './evm-blockchain/types';
import { TCosmosNetworkId } from './cosmos-blockchain/types';

export type TWalletStatus = 'Connected' | 'Disconnected' | 'Connecting' | 'Loading' | 'Disconnecting' | 'NotFound' | 'NotInstalled' | 'NotExist' | 'Rejected' | 'Error';

export type TAppChainId = TEvmNetworkId | TCosmosNetworkId;

export type SummaryConnectInfo = {
    chainId: string;
    chainName: string;
    chainIcon: SvgComponent;
    address: string;
    accountName: string;
    status: TWalletStatus;
    walletName: string;
    walletIcon?: SvgComponent | string;
    disconnect: () => void;
};
