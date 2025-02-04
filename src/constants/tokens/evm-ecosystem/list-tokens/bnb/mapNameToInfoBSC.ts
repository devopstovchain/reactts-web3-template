import { TokenName } from 'crypto-token-icon';
import { atomBSC, bnbBSC, btcbBSC, busdBSC, daiBSC, ethBSC, injBSC, oraiBSC, scORAIBSC, usdcBSC, usdtBSC, wbnbBSC } from '.';

export const mapNameToInfoBSC = {
    [TokenName.BNB]: bnbBSC,
    [TokenName.USDC]: usdcBSC,
    [TokenName.DAI]: daiBSC,
    [TokenName.USDT]: usdtBSC,
    [TokenName.ETH]: ethBSC,
    [TokenName.BTCB]: btcbBSC,
    [TokenName.BUSD]: busdBSC,
    [TokenName.WBNB]: wbnbBSC,
    [TokenName.scORAI]: scORAIBSC,
    [TokenName.ORAI]: oraiBSC,
    [TokenName.ATOM]: atomBSC,
    [TokenName.INJ]: injBSC,
};

export type TBSCToken = keyof typeof mapNameToInfoBSC;

export const findTokenNameBSC: Record<string, TBSCToken> = {
    [bnbBSC.address]: TokenName.BNB,
    [usdcBSC.address]: TokenName.USDC,
    [daiBSC.address]: TokenName.DAI,
    [usdtBSC.address]: TokenName.USDT,
    [ethBSC.address]: TokenName.ETH,
    [btcbBSC.address]: TokenName.BTCB,
    [busdBSC.address]: TokenName.BUSD,
    [wbnbBSC.address]: TokenName.WBNB,
    [scORAIBSC.address]: TokenName.scORAI,
    [oraiBSC.address]: TokenName.ORAI,
    [atomBSC.address]: TokenName.ATOM,
    [injBSC.address]: TokenName.INJ,
};
