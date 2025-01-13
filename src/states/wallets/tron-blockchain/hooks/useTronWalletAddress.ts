import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { convertBase58StringToAddress } from 'orchai-combinator-tron-simulation-v1';
import { TTVMContractAds } from 'src/constants/contract-address/tron/types';

export default function useTronWalletAddress(): TTVMContractAds {
    const { address } = useWallet();

    return {
        base58: address || '',
        hex: address ? convertBase58StringToAddress(address) : '',
    };
}
