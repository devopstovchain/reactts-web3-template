import React from 'react';
import { TSolanaTokenMainnet } from 'src/constants/tokenInfo/solana/mapNameToInfo';
import useFetchAllSolTokenBalances from './useFetchAllSolTokenBalances';
import { TokenName } from 'crypto-token-icon';
import { BN } from 'src/utils';

export default function useSolanaBalanceToken(address: string, tokenName: TSolanaTokenMainnet) {
    const { allSlpTokenBalances, native } = useFetchAllSolTokenBalances(address);
    if (tokenName === TokenName.SOL) {
        return native.SOL;
    }

    return {
        balance: allSlpTokenBalances.data?.[tokenName] || BN(0),
        isLoading: allSlpTokenBalances.isLoading,
        isRefetching: allSlpTokenBalances.isFetching,
        refetch: allSlpTokenBalances.refetch,
    };
}

export const useSolanaBalanceTokens = (userAddress: string, tokens: TSolanaTokenMainnet[]) => {
    const { allSlpTokenBalances, native } = useFetchAllSolTokenBalances(userAddress);
    return tokens.map((token) => {
        if (token === TokenName.SOL) {
            return native.SOL;
        } else {
            return {
                balance: allSlpTokenBalances.data?.[token] || BN(0),
                isLoading: allSlpTokenBalances.isLoading,
                isRefetching: allSlpTokenBalances.isFetching,
                refetch: allSlpTokenBalances.refetch,
            };
        }
    });
};
