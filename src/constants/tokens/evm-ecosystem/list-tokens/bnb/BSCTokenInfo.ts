import { TokenName } from 'crypto-token-icon';
import { EvmTokenInfo } from '../../EvmTokenInfo';

export class BSCTokenInfo extends EvmTokenInfo {
    constructor(input: { prettyName: string; symbol: TokenName; decimals: number; address: string; isNative: boolean; coingeckoId?: string }) {
        super({
            prettyName: input.prettyName,
            symbol: input.symbol,
            decimals: input.decimals,
            address: input.address,
            network: { id: 56, name: 'Binance Smart Chain' },
            isNative: input.isNative,
            coingeckoId: input.coingeckoId,
        });
    }
}
