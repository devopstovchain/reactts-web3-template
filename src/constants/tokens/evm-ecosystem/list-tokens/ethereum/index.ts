import { TokenName } from 'crypto-token-icon';
import { EthereumChainTokenInfo } from './EthereumChainTokenInfo';

export const ethEthereum = new EthereumChainTokenInfo({
    address: '0xeth',
    decimals: 18,
    symbol: TokenName.ETH,
    prettyName: 'Ethereum',
    isNative: true,
    coingeckoId: 'ethereum',
});

export const daiEthereum = new EthereumChainTokenInfo({
    address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    decimals: 18,
    symbol: TokenName.DAI,
    prettyName: 'DAI',
    isNative: false,
    coingeckoId: 'dai',
});

export const usdcEthereum = new EthereumChainTokenInfo({
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    decimals: 18,
    symbol: TokenName.USDC,
    prettyName: 'USD Coin',
    isNative: false,
    coingeckoId: 'usd-coin',
});

export const usdtEthereum = new EthereumChainTokenInfo({
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
    symbol: TokenName.USDT,
    prettyName: 'Tether',
    isNative: false,
    coingeckoId: 'tether',
});

export const btcbEthereum = new EthereumChainTokenInfo({
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    decimals: 18,
    symbol: TokenName.BTCB,
    prettyName: 'Bitcoin BEP2',
    isNative: false,
});

export const busdEthereum = new EthereumChainTokenInfo({
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    decimals: 18,
    symbol: TokenName.BUSD,
    prettyName: 'Binance USD',
    isNative: false,
    coingeckoId: 'binance-usd',
});

export const wbnbEthereum = new EthereumChainTokenInfo({
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    decimals: 18,
    symbol: TokenName.WBNB,
    prettyName: 'Wrapped BNB',
    isNative: false,
    coingeckoId: 'wbnb',
});

export const scORAIEthereum = new EthereumChainTokenInfo({
    address: '0xEC66D61F47b9411c900B367556D77810Ec2e253D',
    decimals: 18,
    symbol: TokenName.scORAI,
    prettyName: 'Staking Compound ORAI',
    isNative: false,
    coingeckoId: 'scorai',
});

export const oraiEthereum = new EthereumChainTokenInfo({
    address: '0x4c11249814f11b9346808179cf06e71ac328c1b5',
    decimals: 18,
    symbol: TokenName.ORAI,
    prettyName: 'Oraichain',
    isNative: false,
    coingeckoId: 'oraichain-token',
});

export const atomEthereum = new EthereumChainTokenInfo({
    address: '0x0Eb3a705fc54725037CC9e008bDede697f62F335',
    decimals: 18,
    symbol: TokenName.ATOM,
    prettyName: 'Cosmos Hub',
    isNative: false,
    coingeckoId: 'cosmos',
});

export const injEthereum = new EthereumChainTokenInfo({
    address: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
    decimals: 18,
    symbol: TokenName.INJ,
    prettyName: 'Injective',
    isNative: false,
    coingeckoId: 'injective-protocol',
});

export const bnbEthereum = new EthereumChainTokenInfo({
    address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    decimals: 18,
    symbol: TokenName.BNB,
    prettyName: 'Binance Coin',
    isNative: false,
    coingeckoId: 'binancecoin',
});
