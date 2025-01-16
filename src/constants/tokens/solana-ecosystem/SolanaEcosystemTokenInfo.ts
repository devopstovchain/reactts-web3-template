import { TokenName } from 'crypto-token-icon';
import { BaseTokenInfo } from '../BaseTokenInfo';

export class SolanaEcosystemTokenInfo extends BaseTokenInfo {
    constructor(input: { prettyName: string; symbol: TokenName; decimals: number; address: string; network: { id: string | number; name: string }; isNative: boolean; coingeckoId?: string }) {
        super(input.prettyName, input.symbol, input.decimals, input.address, input.network, input.isNative, input.coingeckoId);
    }
}
