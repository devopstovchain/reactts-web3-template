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

export const ochTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Orchai',
    address: '',
    address58: '',
    decimals: 6,
    addressJL: '',
    addressJL58: '',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.OCH,
    coingeckoId: 'och',
});

export const wtrxTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Wrapped TRON',
    address: '0x891cdb91d149f23B1a45D9c5Ca78a88d0cB44C18',
    address58: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
    decimals: 6,
    addressJL: '',
    addressJL58: '',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.WTRX,
    coingeckoId: 'tron',
});

export const btcTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Bitcoin',
    address: '0x84716914C0fDf7110A44030d04D0C4923504D9CC',
    address58: 'TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9',
    decimals: 8,
    addressJL: '0x7513102BC947f138B88F4BcC6acF73AcB8D4D087',
    addressJL58: 'TLeEu311Cbw63BcmMHDgDLu7fnk9fqGcqT',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.BTC,
    coingeckoId: 'bitcoin',
});

export const nftTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Bitcoin',
    address: '0x3Dfe637B2b9aE4190A458B5F3EfC1969afE27819',
    address58: 'TFczxzPhnThNSqr5by8tvxsdCFRRz6cPNq',
    decimals: 6,
    addressJL: '0x40262ab2a177fb3fc6d2709A816dB3b1A10BC78E',
    addressJL58: 'TFpPyDCKvNFgos3g3WVsAqMrdqhB81JXHE',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.NFT,
    coingeckoId: 'bitcoin',
});

export const sunTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'SUN',
    address: '0xb4A428ab7092c2f1395f376cE297033B3bB446C1',
    address58: 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S',
    decimals: 18,
    addressJL: '0x94A7a1e585A77E2eDFd834005BE9F545Fe1f3C97',
    addressJL58: 'TPXDpkg9e3eZzxqxAUyke9S4z4pGJBJw9e',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.SUN,
    coingeckoId: 'sun-token',
});

export const sunoldTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'SUNOLD',
    address: '0x6b5151320359Ec18b08607c70a3b7439Af626aa3',
    address58: 'TKkeiboTkxXKJpbmVFbv4a8ov5rAfRDMf9',
    decimals: 18,
    addressJL: '0x4434BECA3Ac7D96E2b4eeF1974CF9bDdCb7A328B',
    addressJL58: 'TGBr8uh9jBVHJhhkwSJvQN2ZAKzVkxDmno',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.SUNOLD,
});

export const usdcTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'USD Coin',
    address: '0x3487b63D30B5B2C87fb7fFa8bcfADE38EAaC1abe',
    address58: 'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8',
    decimals: 6,
    addressJL: '0x88bb336C70A33FE2506240a19826C2aD487AE6d8',
    addressJL58: 'TNSBA6KvSvMoTqQcEgpVK7VhHT3z7wifxy',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.SUNOLD,
    coingeckoId: 'usd-coin',
});

export const bttTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'BitTorrent',
    address: '0x032017411f4663B317fE77C257d28D5cD1b26e3D',
    address58: 'TAFjULxiVgT4qWk6UZwjqwZXTSaGaqnVp4',
    decimals: 6,
    addressJL: '0xcC1d948F9397dB4c047de179eB74Ca013529022A',
    addressJL58: 'TUaUHU9Dy8x5yNi1pKnFYqHWojot61Jfto',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.BTT,
    coingeckoId: 'bittorrent',
});

export const wbtcTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Wrapped Bitcoin',
    address: '0xefc230e125C24dE35f6290AFCAfa28d50b436536',
    address58: 'TXpw8XeWYeTUd4quDskoUqeQPowRh4jY65',
    decimals: 8,
    addressJL: '',
    addressJL58: '',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.WBTC,
    coingeckoId: 'wrapped-bitcoin',
});

export const etholdTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'ETHOLD',
    address: '0x53908308f4AA220FB10d778B5D1B34489cd6eDfc',
    address58: 'THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF',
    decimals: 18,
    addressJL: '0xa60befaf69b18090b762A83177F09831773967ea',
    addressJL58: 'TR7BUFRQeq1w5jAZf1FKx85SHuX6PfMqsV',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.ETHOLD,
});

export const wethTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Wrapped Ether',
    address: '0xeC51bAF14488eC651270ccc409Afda2818AF74F2',
    address58: 'TXWkP3jLBqRGojUih1ShzNyDaN5Csnebok',
    decimals: 18,
    addressJL: '',
    addressJL58: '',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.WETH,
    coingeckoId: 'weth',
});

export const wbttTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Wrapped BTT',
    address: '0x6A6337aE47A09AeA0BBd4FaeB23cA94349c7b774',
    address58: 'TKfjV9RNKJJCqPvBtK8L7Knykh7DNWvnYt',
    decimals: 6,
    addressJL: '0xCbA95c5726a36046503570496E2C5a457Ed7c008',
    addressJL58: 'TUY54PVeH6WCcYCd6ZXXoBDsHytN9V5PXt',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.WBTT,
    coingeckoId: 'wrapped-btt-tron',
});

export const jstTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'JUST',
    address: '0x18FD0626DAF3Af02389AEf3ED87dB9C33F638ffa',
    address58: 'TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9',
    decimals: 18,
    addressJL: '0xE03473f8720297d9bf887f2D7E4eC2EFc70c3460',
    addressJL58: 'TWQhCXaWz4eHK4Kd1ErSDHjMFPoPc9czts',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.JST,
    coingeckoId: 'just',
});

export const winTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'WINkLink',
    address: '0x74472E7D35395A6b5add427EEcB7F4B62AD2b071',
    address58: 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7',
    decimals: 6,
    addressJL: '0xAC456571aC5A383b77C65D9Fdcd66D8aC2ed62bB',
    addressJL58: 'TRg6MnpsFXc82ymUPgf5qbj59ibxiEDWvv',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.WIN,
    coingeckoId: 'wink',
});

export const usdtTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Tether',
    address: '0xa614f803B6FD780986A42c78Ec9c7f77e6DeD13C',
    address58: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    decimals: 6,
    addressJL: '0xea09611b57e89d67FBB33A516eB90508Ca95a3e5',
    addressJL58: 'TXJgMdjVX5dKiQaUi9QobwNxtSQaFqccvd',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.USDT,
    coingeckoId: 'tether',
});

export const usdjTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'USDJ',
    address: '0x834295921A488D9d42b4b3021ED1a3C39fB0f03e',
    address58: 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT',
    decimals: 18,
    addressJL: '0x6eF7C4870977C6a2543b0E8cF4F659AF883C96Dc',
    addressJL58: 'TL5x9MtSnDy537FXKx53yAaHRRNdg9TkkA',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.USDJ,
});

export const tusdTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'TrueUSD',
    address: '0xcEbDE71077b830B958C8da17bcddeeB85D0BCf25',
    address58: 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4',
    decimals: 18,
    addressJL: '0xB5B1A24c3067f985ac2da2F6BcE0FA685Bf8eC06',
    addressJL58: 'TSXv71Fy5XdL3Rh2QfBoUu3NAaM4sMif8R',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.TUSD,
    coingeckoId: 'true-usd',
});

export const ltcTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Litecoin',
    address: '0xa54Bd6077B2eb012d92D9563Ff15d2199D8123DE',
    address58: 'TR3DLthpnDdCGabhVDbD3VMsiJoCXY3bZd',
    decimals: 8,
    addressJL: '',
    addressJL58: '',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.LTC,
    coingeckoId: 'litecoin',
});

export const htTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Huobi Token',
    address: '0x2C036253e0c053188c621B81b7Cd40A99b828400',
    address58: 'TDyvndWuvX5xTBwHPYJi7J3Yq8pq8yh62h',
    decimals: 18,
    addressJL: '',
    addressJL58: '',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.HT,
    coingeckoId: 'huobi-token',
});

export const usddTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'USDD',
    address: '0x94F24E992cA04B49C6f2a2753076Ef8938eD4daa',
    address58: 'TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn',
    decimals: 18,
    addressJL: '0xE7F8A90ede3d84c7c0166BD84A4635E4675aCcfC',
    addressJL58: 'TX7kybeP6UwTBRHLNPYmswFESHfyjm9bAS',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.USDD,
    coingeckoId: 'usdd',
});

export const strxTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'StrikeX',
    address: '0xC64E69ACdE1c7b16C2a3efCdbbdAA96c3644C2b3',
    address58: 'TU3kjFuhtEo42tsCBtfYUAZxoqQ4yuSLQ5',
    decimals: 18,
    addressJL: '0x5C78c77bbAD44c3EBD2088E6B7b5D5f01Bb0a8F5',
    addressJL58: 'TJQ9rbVe9ei3nNtyGgBL22Fuu2xYjZaLAQ',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.STRX,
    coingeckoId: 'strikecoin',
});

export const ethTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Ethereum',
    address: '0xA7A572F6d8b4ca291b9353cF26580ABed74f3e31',
    address58: 'TRFe3hT5oYhjSZ6f3ji5FJ7YCfrkWnHRvh',
    decimals: 18,
    addressJL: '0xDDCBbCb2F17Db034fC970fBD87ffa7Da51bebbfC',
    addressJL58: 'TWBxQMb6RD3qmkXUXpNwVCYbL8SHNreru6',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.ETH,
    coingeckoId: 'ethereum',
});

export const stUSDTTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Staked USDT',
    address: '0xc291F808eE3Bc3dAd2A28e9D4D3C84d9a7d7CaEd',
    address58: 'TThzxNRLrW2Brp9DcTQU8i4Wd9udCWEdZ3',
    decimals: 18,
    addressJL: '',
    addressJL58: '',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.STUSDT,
    coingeckoId: 'staked-usdt',
});

export const htxTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'HTX DAO',
    address: '0xca0303E8b9A738121777116DcEA419Fe524F271A',
    address58: 'TUPM7K8REVzD2UdV4R5fe5M8XbnR2DdoJ6',
    decimals: 18,
    addressJL: '',
    addressJL58: '',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.HTX,
    coingeckoId: 'htx-dao',
});

export const wstUSDTTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Wrapped Staked USDT',
    address: '0x4A7832A4C51dFbC423CF562cFCd534B88fFD4624',
    address58: 'TGkxzkDKyMeq2T7edKnyjZoFypyzjkkssq',
    decimals: 18,
    addressJL: '0x22163f4926c1B7e1d22dBbC76FBEF7F54d364d87',
    addressJL58: 'TD5SdLw5scR6mXgyMK2xKrFJpauDjpKqrW',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.wstUSDT,
    coingeckoId: 'wrapped-staked-usdt',
});

export const busdTronMainnet = new TronMainnetTokenInfo({
    prettyName: 'Binance USD',
    address: '0x83c91BfDE3e6D130E286A3722F171ae49fb25047',
    address58: 'TMz2SWatiAtZVVcH2ebpsbVtYwUPT9EdjH',
    decimals: 18,
    addressJL: '0x71169CC742905196D4ae1b6330e5366B5459A3dC',
    addressJL58: 'TLHASseQymmpGQdfAyNjkMXFTJh8nzR2x2',
    decimalsJL: 8,
    isNative: false,
    symbol: TokenName.BUSD,
    coingeckoId: 'binance-usd',
});
