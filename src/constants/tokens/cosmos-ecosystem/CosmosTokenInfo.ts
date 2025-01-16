import { TokenName } from 'crypto-token-icon';
import { BaseTokenInfo } from '../BaseTokenInfo';

export type CosmosAssetInfo = { native_token: { denom: string } } | { token: { contract_addr: string } };

export class CosmosTokenInfo extends BaseTokenInfo {
    public asset: CosmosAssetInfo;
    constructor(input: {
        prettyName: string;
        symbol: TokenName;
        decimals: number;
        assetInfo: CosmosAssetInfo;
        network: { id: string | number; name: string };
        isNative: boolean;
        coingeckoId?: string;
    }) {
        const address = 'native_token' in input.assetInfo ? input.assetInfo.native_token.denom : input.assetInfo.token.contract_addr;
        super(input.prettyName, input.symbol, input.decimals, address, input.network, input.isNative, input.coingeckoId);
        this.asset = input.assetInfo;
    }
}
