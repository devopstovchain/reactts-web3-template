import { TokenName } from 'crypto-token-icon';
import { BSCTokenInfo } from './BSCTokenInfo';

export const bnbBSC = new BSCTokenInfo({
    address: '0xbnb',
    decimals: 18,
    symbol: TokenName.BNB,
    prettyName: 'Binance Coin',
    isNative: true,
    coingeckoId: 'binancecoin',
});

export const usdcBSC = new BSCTokenInfo({
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    decimals: 6,
    symbol: TokenName.USDC,
    prettyName: 'USD Coin',
    isNative: false,
    coingeckoId: 'usd-coin',
});
