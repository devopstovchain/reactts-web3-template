import { useChain, useChains } from '@cosmos-kit/react-lite';
import { TCosmosNetworkId } from '../types';

export const useCosmosChains = <T extends TCosmosNetworkId>(arrChainName: T[], sync?: boolean) => useChains(arrChainName, sync) as Record<T, ReturnType<typeof useChain>>;
