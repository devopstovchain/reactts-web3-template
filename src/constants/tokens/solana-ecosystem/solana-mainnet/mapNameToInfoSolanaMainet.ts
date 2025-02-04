import { TokenName } from 'crypto-token-icon';
import { ai16zTokenSolana, maxTokenSolana, solTokenSolana, trumpTokenSolana, wsolTokenSolana } from '.';

export const mapNameToInfoSolanaMainet = {
    [TokenName.SOL]: solTokenSolana,
    [TokenName.WSOL]: wsolTokenSolana,
    [TokenName.TRUMP]: trumpTokenSolana,
    [TokenName.MAX]: maxTokenSolana,
    [TokenName.AI16Z]: ai16zTokenSolana,
};

export type TSolanaMainetToken = keyof typeof mapNameToInfoSolanaMainet;

export const findTokenNameOsmosis: Record<string, TSolanaMainetToken> = {
    [solTokenSolana.address]: TokenName.SOL,
    [wsolTokenSolana.address]: TokenName.WSOL,
    [trumpTokenSolana.address]: TokenName.TRUMP,
    [maxTokenSolana.address]: TokenName.MAX,
    [ai16zTokenSolana.address]: TokenName.AI16Z,
};
