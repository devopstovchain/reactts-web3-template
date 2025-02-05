import { useQuery } from '@tanstack/react-query';
import { getPriceTokens } from '../services/api'; // ! Replace this with your own service
import { TokenName } from 'crypto-token-icon';

// ! This is a custom hook that fetches the price of all tokens
export default function useQueryAllTokensPrice() {
    return useQuery({
        queryKey: ['allTokensPrice'],
        queryFn: async () =>
            getPriceTokens([
                TokenName.AIRI,
                TokenName.ATOM,
                TokenName.BNB,
                TokenName.BTC,
                TokenName.ETH,
                TokenName.INJ,
                TokenName.KWT,
                TokenName.MILKY,
                TokenName.NTMPI,
                TokenName.OCH,
                TokenName.ORAI,
                TokenName.ORAIX,
                TokenName.OSMO,
                TokenName.USDC,
                TokenName.scORAI,
                TokenName.USDT,
                TokenName.WBNB,
                TokenName.WETH,
                TokenName.WTRX,
                TokenName.TON,
                TokenName.ION,
                TokenName.TIA,
                TokenName.sORAI,
                TokenName.scORAI,
                TokenName.scATOM,
                TokenName.scINJ,
                TokenName.scOSMO,
                TokenName.stATOM,
                TokenName.stOSMO,
                TokenName.BTC,
                TokenName.ORAIX,
                TokenName.OCH,
                TokenName.ATOM,
                TokenName.USDT,
                TokenName.aUSDT,
                TokenName.INJ,
                TokenName.ORAI,
                TokenName.NTMPI,
                TokenName.OSMO,
                TokenName.TRX,
                TokenName.SOL,
                TokenName.TRUMP,
                TokenName.AI16Z,
                TokenName.WSOL,
                TokenName.LEE,
                TokenName.GNRT,
                TokenName.MAX,
                TokenName.RACKS,
            ]),

        staleTime: 1000 * 60,
    });
}
