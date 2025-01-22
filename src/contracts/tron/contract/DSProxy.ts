import BigNumber from 'bignumber.js';
import { abiDSProxy } from '../abis/DSProxy';
import { ContractAbstract } from './ContractAbstract';
import { TVMNetworkId } from 'src/states/wallets/tron-blockchain/types';
import { TTVMContractAds } from 'src/constants/contract-address/tron/types';

export class ContractDSProxy extends ContractAbstract {
    constructor(chainConnected: TVMNetworkId, addressContract: TTVMContractAds, userAddress: TTVMContractAds) {
        super(chainConnected, abiDSProxy, addressContract, userAddress);
    }

    async executeRecipe({ fund, data, targetAddress }: { fund: BigNumber; data: any; targetAddress: string }) {
        if (!this.userAddress.hex) throw Error('User address is required when init class ContractDSProxy!');

        const response = await this.publicTronWeb.transactionBuilder.triggerSmartContract(
            this.addressContract.base58,
            'execute(address,bytes)',
            { feeLimit: 1000000000, callValue: Number(fund.toFixed(0)) },
            [
                { type: 'address', value: targetAddress },
                { type: 'bytes', value: data },
            ],
            this.userAddress.base58
        );

        return response.transaction;
    }
}
