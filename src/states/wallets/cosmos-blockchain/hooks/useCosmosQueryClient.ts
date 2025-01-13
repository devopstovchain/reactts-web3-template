import { TCosmosNetworkId } from '../types';
import { useQuery } from '@tanstack/react-query';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { rpcCosmos } from '../configs';

export default function useCosmosQueryClient(chainId: TCosmosNetworkId, clientNumber: 1 | 2 | 3 | 4 | 5) {
    return useQuery({
        queryKey: ['cosmosClient', chainId, clientNumber],
        queryFn: async () => {
            return await SigningCosmWasmClient.connect(rpcCosmos[chainId][clientNumber - 1] || rpcCosmos[chainId][0]);
        },
        staleTime: Infinity,
    });
}
