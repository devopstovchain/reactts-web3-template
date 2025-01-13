import React from 'react';
import { useCosmosChain } from './useCosmosChain';
import { TCosmosNetworkId } from '../types';
import { useQuery } from '@tanstack/react-query';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { chainInfoCosmos, rpcCosmos } from '../configs';
import { Decimal } from '@cosmjs/math';

export default function useCosmosSigningClient(chainId: TCosmosNetworkId, clientNumber: 1 | 2 | 3 | 4 | 5) {
    const { address, getOfflineSignerAmino } = useCosmosChain(chainId);
    return useQuery({
        queryKey: ['cosmosClient', address, chainId, clientNumber],
        // queryFn: getSigningCosmWasmClient,
        queryFn: async () => {
            const offlineAmino = getOfflineSignerAmino();
            const signerClient = await SigningCosmWasmClient.connectWithSigner(rpcCosmos[chainId][clientNumber - 1] || rpcCosmos[chainId][0], offlineAmino, {
                gasPrice: { amount: Decimal.fromUserInput('0.001', 6) as any, denom: chainInfoCosmos[chainId].fees!.fee_tokens[0].denom },
            });
            return signerClient;
        },
        enabled: !!address,
        staleTime: Infinity,
    });
}
