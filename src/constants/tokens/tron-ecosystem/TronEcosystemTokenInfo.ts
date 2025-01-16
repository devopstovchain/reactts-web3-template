import { TokenName } from 'crypto-token-icon';
import { BaseTokenInfo } from '../BaseTokenInfo';

export class TronEcosystemTokenInfo extends BaseTokenInfo {
    address58: string;
    addressJL: string;
    addressJL58: string;
    decimalsJL: number;
    constructor(input: {
        prettyName: string;
        symbol: TokenName;
        decimals: number;
        address: string;
        address58: string;
        addressJL: string;
        addressJL58: string;
        decimalsJL: number;
        network: { id: string | number; name: string };
        isNative: boolean;
        coingeckoId?: string;
    }) {
        super(input.prettyName, input.symbol, input.decimals, input.address, input.network, input.isNative, input.coingeckoId);
        this.address58 = input.address58;
        this.addressJL = input.addressJL;
        this.addressJL58 = input.addressJL58;
        this.decimalsJL = input.decimalsJL;
    }
}
