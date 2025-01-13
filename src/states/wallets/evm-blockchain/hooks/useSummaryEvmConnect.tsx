import React from 'react';
import { TEvmNetworkId } from '../types';
import { useAccount } from 'wagmi';
import { Chain } from 'viem';
import { bsc, mainnet } from 'viem/chains';
import { chainIcon } from '../../constants/chainIcon';
import { walletIcon } from '../../constants/walletIcon';
import { SummaryConnectInfo } from '../../types';

const chainInfo: Record<TEvmNetworkId, Chain> = {
    1: mainnet,
    56: bsc,
};

export default function useSummaryEvmConnect(chainId: TEvmNetworkId): SummaryConnectInfo {
    const { address, connector, status } = useAccount();

    return {
        address: address || '',
        chainId: chainId + '',
        chainIcon: chainIcon[chainId],
        chainName: chainInfo[chainId].name,
        status: status == 'connected' ? 'Connected' : status == 'disconnected' ? 'Disconnected' : 'Connecting',
        walletIcon: connector ? walletIcon[connector.id] || connector.icon : undefined,
        walletName: connector?.name || '',
        accountName: '',
        disconnect: () => connector?.disconnect(),
    };
}
