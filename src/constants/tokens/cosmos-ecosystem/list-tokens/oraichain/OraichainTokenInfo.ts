import { TokenName } from 'crypto-token-icon';
import { CosmosTokenInfo } from '../../CosmosTokenInfo';

export class OraichainTokenInfo extends CosmosTokenInfo {
    constructor(input: { prettyName: string; symbol: TokenName; decimals: number; assetInfo: { native_token: { denom: string } }; isNative: boolean; coingeckoId: string }) {
        super({
            prettyName: input.prettyName,
            symbol: input.symbol,
            decimals: input.decimals,
            assetInfo: input.assetInfo,
            network: { id: 'Oraichain', name: 'Oraichain' },
            isNative: input.isNative,
            coingeckoId: input.coingeckoId,
        });
    }
}
