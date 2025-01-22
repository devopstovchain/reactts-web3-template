import { TVMNetworkId } from 'src/states/wallets/tron-blockchain/types';
import { abiMulticall } from '../abis/Multicall';
import { ContractAbstract } from './ContractAbstract';
import { TTVMContractAds } from 'src/constants/contract-address/tron/types';

export class ContractMulticall extends ContractAbstract {
    constructor(chainConnected: TVMNetworkId, addressContract: TTVMContractAds, userAddress: TTVMContractAds) {
        super(chainConnected, abiMulticall, addressContract, userAddress);
    }
}
