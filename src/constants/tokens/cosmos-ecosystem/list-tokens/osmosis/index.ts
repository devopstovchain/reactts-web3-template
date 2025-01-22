import { TokenName } from 'crypto-token-icon';
import { OsmosisTokenInfo } from './OsmosisTokenInfo';

export const osmoOsmosis = new OsmosisTokenInfo({
    prettyName: 'Osmosis',
    symbol: TokenName.OSMO,
    decimals: 6,
    assetInfo: { native_token: { denom: 'uosmo' } },
    isNative: true,
    coingeckoId: 'osmosis',
});

export const usdcOsmosis = new OsmosisTokenInfo({
    prettyName: 'USD Coin',
    symbol: TokenName.USDC,
    decimals: 6,
    assetInfo: { native_token: { denom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4' } },
    isNative: true,
    coingeckoId: 'usd-coin',
});

export const injOsmosis = new OsmosisTokenInfo({
    prettyName: 'Injective',
    symbol: TokenName.INJ,
    decimals: 18,
    assetInfo: { native_token: { denom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273' } },
    isNative: true,
    coingeckoId: 'injective-protocol',
});

export const atomOsmosis = new OsmosisTokenInfo({
    prettyName: 'Cosmos Hub',
    symbol: TokenName.ATOM,
    decimals: 6,
    assetInfo: { native_token: { denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2' } },
    isNative: true,
    coingeckoId: 'cosmos',
});

export const tiaOsmosis = new OsmosisTokenInfo({
    prettyName: 'Celestia',
    symbol: TokenName.TIA,
    decimals: 6,
    assetInfo: { native_token: { denom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877' } },
    isNative: true,
    coingeckoId: 'celestia',
});
