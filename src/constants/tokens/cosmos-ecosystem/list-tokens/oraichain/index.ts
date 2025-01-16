import { TokenName } from 'crypto-token-icon';
import { OraichainTokenInfo } from './OraichainTokenInfo';

export const oraiOraichain = new OraichainTokenInfo({
    prettyName: 'Oraichain',
    symbol: TokenName.ORAI,
    decimals: 6,
    assetInfo: { native_token: { denom: 'orai' } },
    isNative: true,
    coingeckoId: 'oraichain-token',
});
