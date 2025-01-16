import { TokenName } from 'crypto-token-icon';
import { TronMainnetTokenInfo } from './TronMainnetTokenInfo';

export const trxTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Tron',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // address fake
    address58: '',
    decimals: 6,
    addressJL: '0x2C7c9963111905d29eB8Da37d28b0F53A7bB5c28',
    addressJL58: 'TE2RzoSV3wFK99w6J9UnnZ4vLfXYoxvRwP',
    decimalsJL: 8,
    isNative: true,
    symbol: TokenName.TRX,
    coingeckoId: 'tron',
});
