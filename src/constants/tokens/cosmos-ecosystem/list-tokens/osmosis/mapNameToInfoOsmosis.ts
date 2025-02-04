import { TokenName } from 'crypto-token-icon';
import { atomOsmosis, injOsmosis, osmoOsmosis, tiaOsmosis, usdcOsmosis } from '.';

export const mapNameToInfoOsmosis = {
    [TokenName.OSMO]: osmoOsmosis,
    [TokenName.USDC]: usdcOsmosis,
    [TokenName.INJ]: injOsmosis,
    [TokenName.ATOM]: atomOsmosis,
    [TokenName.TIA]: tiaOsmosis,
};

export type TOsmosisToken = keyof typeof mapNameToInfoOsmosis;

export const findTokenNameOsmosis: Record<string, TOsmosisToken> = {
    [osmoOsmosis.address]: TokenName.OSMO,
    [usdcOsmosis.address]: TokenName.USDC,
    [injOsmosis.address]: TokenName.INJ,
    [atomOsmosis.address]: TokenName.ATOM,
    [tiaOsmosis.address]: TokenName.TIA,
};
