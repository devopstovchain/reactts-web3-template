import { TVMNetworkId } from 'src/states/wallets/tron-blockchain/types';
import { abiERC20Mock } from '../abis/ERC20Mock';

import { ContractAbstract } from './ContractAbstract';
import { TTVMContractAds } from 'src/constants/contract-address/tron/types';

export class ContractERC20Mock extends ContractAbstract {
    constructor(chainConnected: TVMNetworkId, addressContract: TTVMContractAds, userAddress: TTVMContractAds) {
        super(chainConnected, abiERC20Mock, addressContract, userAddress);
    }

    async balanceOf(addressQuery?: string) {
        const address = addressQuery || this.userAddress.base58;
        const response = await this.publicContract.balanceOf(address).call();
        return this.publicTronWeb.toDecimal(response);
    }

    async allowance(spender: string, owner?: string) {
        const addressOwner = owner || this.userAddress.base58;
        const response = await this.publicContract.allowance(addressOwner, spender).call();
        return this.publicTronWeb.toDecimal(response);
    }

    async approve(spender: string, amount: string) {
        if (!this.userAddress.base58) throw Error('User address is required when init class ContractERC20Mock!');
        const data = await this.publicTronWeb.transactionBuilder.triggerSmartContract(
            this.addressContract.base58,
            'approve(address,uint256)',
            { feeLimit: 10000000000 },
            [
                { type: 'address', value: spender },
                { type: 'uint256', value: amount },
            ],
            this.userAddress.base58
        );
        return data.transaction;
    }
}
