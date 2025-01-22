import { Contract, TronWeb } from 'tronweb';
import { ContractAbiInterface } from 'node_modules/tronweb/lib/esm/types/ABI';
import { TVMNetworkId } from 'src/states/wallets/tron-blockchain/types';
import { queryClient } from 'src/states/wallets/tron-blockchain/configs';
import { TTVMContractAds } from 'src/constants/contract-address/tron/types';

export class ContractAbstract {
    abi: ContractAbiInterface;
    addressContract: TTVMContractAds;
    chainConnected: TVMNetworkId;
    publicTronWeb: TronWeb;
    publicContract: Contract;
    userAddress: TTVMContractAds;

    constructor(chainConnected: TVMNetworkId, abi: ContractAbiInterface, addressContract: TTVMContractAds, userAddress?: TTVMContractAds) {
        this.abi = abi;
        this.addressContract = addressContract;
        this.chainConnected = chainConnected;
        this.publicTronWeb = queryClient[chainConnected];
        this.publicContract = queryClient[chainConnected].contract(abi, addressContract.base58);
        this.userAddress = userAddress || { base58: '', hex: '' };
    }
}
