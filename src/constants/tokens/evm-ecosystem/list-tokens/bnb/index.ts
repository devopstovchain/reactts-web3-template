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

export const daiBSC = new BSCTokenInfo({
    address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    decimals: 18,
    symbol: TokenName.DAI,
    prettyName: 'DAI',
    isNative: false,
    coingeckoId: 'dai',
});

export const usdtBSC = new BSCTokenInfo({
    address: '0x55d398326f99059ff775485246999027b3197955',
    decimals: 18,
    symbol: TokenName.USDT,
    prettyName: 'Tether',
    isNative: false,
    coingeckoId: 'tether',
});

export const ethBSC = new BSCTokenInfo({
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    decimals: 18,
    symbol: TokenName.ETH,
    prettyName: 'Ethereum',
    isNative: false,
    coingeckoId: 'ethereum',
});

export const btcbBSC = new BSCTokenInfo({
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    decimals: 18,
    symbol: TokenName.BTCB,
    prettyName: 'Bitcoin BEP2',
    isNative: false,
});

export const busdBSC = new BSCTokenInfo({
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    decimals: 18,
    symbol: TokenName.BUSD,
    prettyName: 'Binance USD',
    isNative: false,
    coingeckoId: 'binance-usd',
});

export const wbnbBSC = new BSCTokenInfo({
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    decimals: 18,
    symbol: TokenName.WBNB,
    prettyName: 'Wrapped BNB',
    isNative: false,
    coingeckoId: 'wbnb',
});

export const scORAIBSC = new BSCTokenInfo({
    address: '0x82097b2D51E28801c833d49426574EfB4CFd0Bf2',
    decimals: 18,
    symbol: TokenName.scORAI,
    prettyName: 'Staking Compound ORAI',
    isNative: false,
    coingeckoId: 'scorai',
});

export const oraiBSC = new BSCTokenInfo({
    address: '0xa325ad6d9c92b55a3fc5ad7e412b1518f96441c0',
    decimals: 18,
    symbol: TokenName.ORAI,
    prettyName: 'Oraichain',
    isNative: false,
    coingeckoId: 'oraichain-token',
});

export const atomBSC = new BSCTokenInfo({
    address: '0x0Eb3a705fc54725037CC9e008bDede697f62F335',
    decimals: 18,
    symbol: TokenName.ATOM,
    prettyName: 'Cosmos Hub',
    isNative: false,
    coingeckoId: 'cosmos',
});

export const injBSC = new BSCTokenInfo({
    address: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
    decimals: 18,
    symbol: TokenName.INJ,
    prettyName: 'Injective',
    isNative: false,
    coingeckoId: 'injective-protocol',
});
