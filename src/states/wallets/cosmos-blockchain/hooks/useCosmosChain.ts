import { useChain } from '@cosmos-kit/react-lite';
import { TCosmosNetworkId } from '../types';

export const useCosmosChain = (chain: TCosmosNetworkId) => useChain(chain, true);
