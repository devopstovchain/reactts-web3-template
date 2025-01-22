import { useWallet } from '@solana/wallet-adapter-react';
import { IconSOL } from 'crypto-token-icon';
import React from 'react';
import { TSolanaNetworkId } from '../types';
import { SummaryConnectInfo } from '../../types';
import { walletIcon } from '../../constants/walletIcon';

export default function useSummarySolanaConnect(): SummaryConnectInfo {
    const { publicKey, wallet, disconnect } = useWallet();
    // console.log('wallet', wallet);
    return {
        address: publicKey?.toString() || '',
        chainId: TSolanaNetworkId.sol_devnet as string,
        chainIcon: IconSOL,
        chainName: 'Solana',
        status: wallet ? (wallet.adapter.connecting ? 'Connecting' : wallet.adapter.connected ? 'Connected' : 'Disconnected') : 'Disconnected',
        walletIcon: wallet ? walletIcon[wallet.adapter.name] || wallet.adapter.icon : undefined,
        walletName: wallet?.adapter.name || '',
        accountName: '',
        disconnect: () => disconnect(),
    };
}
