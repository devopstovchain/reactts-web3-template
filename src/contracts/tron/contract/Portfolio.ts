import BigNumber from 'bignumber.js';
import { ContractAbstract } from './ContractAbstract';
import { abiPortfolio } from '../abis/Portfolio';
import { TVMNetworkId } from 'src/states/wallets/tron-blockchain/types';
import { TTVMContractAds } from 'src/constants/contract-address/tron/types';

export class ContractPortfolio extends ContractAbstract {
    constructor(chainConnected: TVMNetworkId, addressContract: TTVMContractAds, userAddress: TTVMContractAds) {
        super(chainConnected, abiPortfolio, addressContract, userAddress);
    }

    async enterMarkets(cTokens: string[]) {
        if (!this.userAddress) throw Error('User address is required when init class ContractPortfolio!');
        const data = await this.publicTronWeb.transactionBuilder.triggerSmartContract(
            this.addressContract.base58,
            'enterMarkets(address[])',
            { feeLimit: 10000000000 },
            [{ type: 'address[]', value: cTokens }],
            this.userAddress.base58
        );
        return data.transaction;
    }

    async exitMarket(cToken: string) {
        if (!this.userAddress) throw Error('User address is required when init class ContractPortfolio!');
        const data = await this.publicTronWeb.transactionBuilder.triggerSmartContract(
            this.addressContract.base58,
            'exitMarket(address)',
            { feeLimit: 10000000000 },
            [{ type: 'address', value: cToken }],
            this.userAddress.base58
        );
        return data.transaction;
    }
}
