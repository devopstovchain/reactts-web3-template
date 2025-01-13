import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { mapNameToInfoTron, TERC20TokenTron, TTronToken } from 'src/constants/tokenInfo/tron/mapNameToInfo';
import { queryClientTron } from '../configs';
import { BN, DEC } from 'src/utils';
import { trxTokenTron } from 'src/constants/tokenInfo/tron/tokenInfo';
import { TokenName } from 'crypto-token-icon';
import { multiCallV1 } from 'orchai-combinator-tron-simulation-v1';
import { abiERC20Mock } from 'src/constants/contracts/tron/abis/ERC20Mock';
import { tronNetwork } from '../networks';
import { TTVMContractAds } from 'src/constants/contract-address/tron/types';
import BigNumber from 'bignumber.js';

export default function useTronQueryBalance(addressQuery: TTVMContractAds) {
    const balanceTokenTRX = useFetchNativeTokenTRX(addressQuery.base58, TokenName.TRX);
    const erc20 = useFetchERC20TokenTron(addressQuery);

    return {
        native: {
            [TokenName.TRX]: { balance: balanceTokenTRX.data || BN(0), isLoading: balanceTokenTRX.isLoading, isRefetching: balanceTokenTRX.isRefetching, refresh: balanceTokenTRX.refetch },
        },
        erc20,
    };
}

function useFetchNativeTokenTRX(addressQuery: string, token: TTronToken) {
    return useQuery({
        queryKey: ['tron', 'balanceToken', 'native', addressQuery, token],
        queryFn: async () => {
            if (queryClientTron && addressQuery !== '') {
                const response = await queryClientTron.trx.getBalance(addressQuery);
                console.log(response);
                return BN(response).div(DEC(trxTokenTron.decimals));
            }
            return BN(0);
        },
        enabled: !!queryClientTron,
        staleTime: 1000 * 60 * 5,
    });
}

function useFetchERC20TokenTron(addressQuery: TTVMContractAds) {
    return useQuery({
        queryKey: ['tron', 'balanceToken', 'ERC20', addressQuery],
        queryFn: async () => {
            const listNameToken: TERC20TokenTron[] = [
                TokenName.BTC,
                TokenName.BTT,
                TokenName.BUSD,
                TokenName.ETH,
                TokenName.ETHOLD,
                TokenName.HT,
                TokenName.HTX,
                TokenName.JST,
                TokenName.LTC,
                TokenName.NFT,
                TokenName.STRX,
                TokenName.SUN,
                // 'SUNOLD',
                TokenName.TUSD,
                TokenName.USDC,
                TokenName.USDD,
                TokenName.USDJ,
                TokenName.USDT,
                TokenName.WBTC,
                TokenName.WBTT,
                TokenName.WETH,
                TokenName.WIN,
                TokenName.STUSDT,
                TokenName.WTRX,
                TokenName.wstUSDT,
            ];

            if (addressQuery.hex == '') {
                const response: Record<TERC20TokenTron, BigNumber> = {} as Record<TERC20TokenTron, BigNumber>;
                for (let i = 0; i < listNameToken.length; i++) {
                    response[listNameToken[i]] = BN(0);
                }
                return response;
            }

            const listQuery = listNameToken.map((tokenName) => {
                return {
                    address: mapNameToInfoTron[tokenName].address,
                    name: 'balanceOf',
                    params: [addressQuery.hex],
                };
            });
            const response = await multiCallV1(abiERC20Mock, listQuery, tronNetwork.id);
            console.log('cccccccc', response);

            const allBalances = response.map((item: any, index: number) => {
                const bal = BN(item).div(DEC(mapNameToInfoTron[listNameToken[index]].decimals));
                return bal;
            });

            const res: Record<TERC20TokenTron, BigNumber> = {} as Record<TERC20TokenTron, BigNumber>;

            for (let i = 0; i < listNameToken.length; i++) {
                res[listNameToken[i]] = BN(allBalances[i]);
            }
            console.log(res);
            return res;
        },
        staleTime: 1000 * 60 * 5,
    });
}
