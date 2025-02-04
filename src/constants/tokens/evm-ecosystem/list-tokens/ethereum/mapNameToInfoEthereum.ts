import { TokenName } from 'crypto-token-icon';
import { atomEthereum, bnbEthereum, btcbEthereum, busdEthereum, daiEthereum, ethEthereum, injEthereum, oraiEthereum, scORAIEthereum, usdcEthereum, usdtEthereum, wbnbEthereum } from '.';

export const mapNameToInfoEthereum = {
    [TokenName.BNB]: bnbEthereum,
    [TokenName.USDC]: usdcEthereum,
    [TokenName.DAI]: daiEthereum,
    [TokenName.USDT]: usdtEthereum,
    [TokenName.ETH]: ethEthereum,
    [TokenName.BTCB]: btcbEthereum,
    [TokenName.BUSD]: busdEthereum,
    [TokenName.WBNB]: wbnbEthereum,
    [TokenName.scORAI]: scORAIEthereum,
    [TokenName.ORAI]: oraiEthereum,
    [TokenName.ATOM]: atomEthereum,
    [TokenName.INJ]: injEthereum,
};

export type TEthereumToken = keyof typeof mapNameToInfoEthereum;

export const findTokenNameBSC: Record<string, TEthereumToken> = {
    [bnbEthereum.address]: TokenName.BNB,
    [usdcEthereum.address]: TokenName.USDC,
    [daiEthereum.address]: TokenName.DAI,
    [usdtEthereum.address]: TokenName.USDT,
    [ethEthereum.address]: TokenName.ETH,
    [btcbEthereum.address]: TokenName.BTCB,
    [busdEthereum.address]: TokenName.BUSD,
    [wbnbEthereum.address]: TokenName.WBNB,
    [scORAIEthereum.address]: TokenName.scORAI,
    [oraiEthereum.address]: TokenName.ORAI,
    [atomEthereum.address]: TokenName.ATOM,
    [injEthereum.address]: TokenName.INJ,
};
