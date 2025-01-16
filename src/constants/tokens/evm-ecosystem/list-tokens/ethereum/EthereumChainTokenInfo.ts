import { TokenName } from 'crypto-token-icon';
import { EvmTokenInfo } from '../../EvmTokenInfo';

export class EthereumChainTokenInfo extends EvmTokenInfo {
    constructor(input: { prettyName: string; symbol: TokenName; decimals: number; address: string; isNative: boolean; coingeckoId?: string }) {
        super({
            prettyName: input.prettyName,
            symbol: input.symbol,
            decimals: input.decimals,
            address: input.address,
            network: { id: 1, name: 'Ethereum' },
            isNative: input.isNative,
            coingeckoId: input.coingeckoId,
        });
    }
}
