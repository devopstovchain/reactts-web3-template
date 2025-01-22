import { convertBase58StringToAddress, convertTronHexAddressToAddress } from 'orchai-combinator-tron-simulation-v1';
import { abiDSProxyRegistry } from '../abis/DSProxyRegistry';
import { ContractAbstract } from './ContractAbstract';
import { TVMNetworkId } from 'src/states/wallets/tron-blockchain/types';
import { TTVMContractAds } from 'src/constants/contract-address/tron/types';
import { ctrAdsTronGrid } from 'src/constants/contract-address/tron';

export class ContractDSProxyRegistry extends ContractAbstract {
    constructor(chainConnected: TVMNetworkId, userAddress: TTVMContractAds) {
        super(chainConnected, abiDSProxyRegistry, ctrAdsTronGrid.DSProxyRegistry, userAddress);
    }

    async getSmartWallet() {
        if (!this.userAddress.base58) throw Error('User address is required when init class!');
        const response = await this.publicContract.proxies(this.userAddress.base58).call();
        return convertTronHexAddressToAddress(response + '');
    }

    async createSmartWallet() {
        if (!this.userAddress.base58) throw Error('User address is required when init class!');

        const data = await this.publicTronWeb.transactionBuilder.triggerSmartContract(
            this.addressContract.base58,
            'build(address)',
            { feeLimit: 1000000000, callValue: 0 },
            [{ type: 'address', value: this.userAddress.base58 }],
            this.userAddress.base58
        );

        return data.transaction;
    }
}
