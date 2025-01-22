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

export const atomOraichain = new OraichainTokenInfo({
    prettyName: 'Cosmos Hub',
    symbol: TokenName.ATOM,
    decimals: 6,
    assetInfo: { native_token: { denom: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78' } },
    isNative: true,
    coingeckoId: 'cosmos',
});

export const osmoOraichain = new OraichainTokenInfo({
    prettyName: 'Osmosis',
    symbol: TokenName.OSMO,
    decimals: 6,
    assetInfo: { native_token: { denom: 'ibc/9C4DCD21B48231D0BC2AC3D1B74A864746B37E4292694C93C617324250D002FC' } },
    isNative: true,
    coingeckoId: 'osmosis',
});

export const ntmpiOraichain = new OraichainTokenInfo({
    prettyName: 'Neutaro',
    symbol: TokenName.NTMPI,
    decimals: 6,
    assetInfo: { native_token: { denom: 'ibc/576B1D63E401B6A9A071C78A1D1316D016EC9333D2FEB14AD503FAC4B8731CD1' } },
    isNative: true,
    coingeckoId: 'neutaro',
});

export const tonOraichain = new OraichainTokenInfo({
    prettyName: 'Ton',
    symbol: TokenName.TON,
    decimals: 9,
    assetInfo: { native_token: { denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton' } },
    isNative: true,
    coingeckoId: 'the-open-network',
});

export const btcOraichain = new OraichainTokenInfo({
    prettyName: 'Bitcoin',
    symbol: TokenName.BTC,
    decimals: 14,
    assetInfo: { native_token: { denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/obtc' } },
    isNative: true,
    coingeckoId: 'bitcoin',
});

export const airiOraichain = new OraichainTokenInfo({
    prettyName: 'aiRight',
    symbol: TokenName.AIRI,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg' } },
    isNative: false,
    coingeckoId: 'airight',
});

export const oraiXOraichain = new OraichainTokenInfo({
    prettyName: 'OraiDEX',
    symbol: TokenName.ORAIX,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge' } },
    isNative: false,
    coingeckoId: 'oraidex',
});

export const usdtOraichain = new OraichainTokenInfo({
    prettyName: 'Tether',
    symbol: TokenName.USDT,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh' } },
    isNative: false,
    coingeckoId: 'tether',
});

export const aUSDTOraichain = new OraichainTokenInfo({
    prettyName: 'aUSDT',
    symbol: TokenName.aUSDT,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1gjdmce2cfu2ld7cw0p9p7mkmssnry4zhwz3tmsmah435pkdv9qkqg2n7qm' } },
    isNative: false,
    coingeckoId: '',
});

export const sORAIOraichain = new OraichainTokenInfo({
    prettyName: 'sORAI',
    symbol: TokenName.sORAI,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1w9ee6szd3fgatyz7v78rktekuqjntfeszh9azuz8drz9nl0yuzwqm26v23' } },
    isNative: false,
    coingeckoId: '',
});

export const scORAIOraichain = new OraichainTokenInfo({
    prettyName: 'Staking Compound ORAI',
    symbol: TokenName.scORAI,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp' } },
    isNative: false,
    coingeckoId: 'scorai',
});

export const scATOMOraichain = new OraichainTokenInfo({
    prettyName: 'scATOM',
    symbol: TokenName.scATOM,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq' } },
    isNative: false,
    coingeckoId: '',
});

export const stOSMOOraichain = new OraichainTokenInfo({
    prettyName: 'stOSMO',
    symbol: TokenName.stOSMO,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1d2e02yn3h382ajsqjuz0xlc8qvv5d320m2walmcnfsc406azk9vqf639fa' } },
    isNative: false,
    coingeckoId: '',
});

export const scOSMOOraichain = new OraichainTokenInfo({
    prettyName: 'scOSMO',
    symbol: TokenName.scOSMO,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1yqjzns8k266gdt49wg38r3s7s7gc593m8d5jhaz4wq4u8u8gwjnsrfqp7p' } },
    isNative: false,
    coingeckoId: '',
});

export const kwtOraichain = new OraichainTokenInfo({
    prettyName: 'Kawaii',
    symbol: TokenName.KWT,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5' } },
    isNative: false,
    coingeckoId: 'kawaii-islands',
});

export const milkyOraichain = new OraichainTokenInfo({
    prettyName: 'Milky Token',
    symbol: TokenName.MILKY,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw' } },
    isNative: false,
    coingeckoId: 'milky-token',
});

export const usdcOraichain = new OraichainTokenInfo({
    prettyName: 'USD Coin',
    symbol: TokenName.USDC,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd' } },
    isNative: false,
    coingeckoId: 'usd-coin',
});

export const wTRXOraichain = new OraichainTokenInfo({
    prettyName: 'Wrapped TRON',
    symbol: TokenName.WTRX,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0' } },
    isNative: false,
    coingeckoId: 'tron',
});

export const injOraichain = new OraichainTokenInfo({
    prettyName: 'Injective',
    symbol: TokenName.INJ,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49' } },
    isNative: false,
    coingeckoId: 'injective-protocol',
});

export const scINJOraichain = new OraichainTokenInfo({
    prettyName: 'scINJ',
    symbol: TokenName.scINJ,
    decimals: 18,
    assetInfo: { token: { contract_addr: 'orai1zxakds5v5v0ed8v6xchjz3ttdx5f2qpftts8uc7mupl97s65g09sczvvqc' } },
    isNative: false,
    coingeckoId: '',
});

export const ochOraichain = new OraichainTokenInfo({
    prettyName: 'Orchai',
    symbol: TokenName.OCH,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q' } },
    isNative: false,
    coingeckoId: 'och',
});

export const wethOraichain = new OraichainTokenInfo({
    prettyName: 'Wrapped Ether',
    symbol: TokenName.WETH,
    decimals: 6,
    assetInfo: { token: { contract_addr: 'orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez' } },
    isNative: false,
    coingeckoId: 'weth',
});
