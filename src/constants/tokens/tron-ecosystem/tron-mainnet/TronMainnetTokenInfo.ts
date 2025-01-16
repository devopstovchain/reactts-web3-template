import { TokenName } from 'crypto-token-icon';
import { TronEcosystemTokenInfo } from '../TronEcosystemTokenInfo';

export class TronMainnetTokenInfo extends TronEcosystemTokenInfo {
    constructor(input: {
        prettyName: string;
        symbol: TokenName;
        decimals: number;
        address: string;
        address58: string;
        addressJL: string;
        addressJL58: string;
        decimalsJL: number;
        isNative: boolean;
        coingeckoId?: string;
    }) {
        super({
            prettyName: input.prettyName,
            symbol: input.symbol,
            decimals: input.decimals,
            address: input.address,
            address58: input.address58,
            addressJL: input.addressJL,
            addressJL58: input.addressJL58,
            decimalsJL: input.decimalsJL,
            network: { id: '0x2b6653dc', name: 'Tron network' },
            isNative: input.isNative,
            coingeckoId: input.coingeckoId,
        });
    }
}
