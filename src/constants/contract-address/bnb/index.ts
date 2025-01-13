import { HexAddress } from 'src/global.config';

export const ctrAdsBNB = {
    BNB: '0xbnb' as HexAddress,
    DAI: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3' as HexAddress,
    USDC: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d' as HexAddress,
    USDT: '0x55d398326f99059ff775485246999027b3197955' as HexAddress,
    ETH: '0x2170ed0880ac9a755fd29b2688956bd959f933f8' as HexAddress,
    BTCB: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c' as HexAddress,
    BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56' as HexAddress,
    WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c' as HexAddress,
    scORAI: '0x82097b2D51E28801c833d49426574EfB4CFd0Bf2' as HexAddress,
    ORAI: '0xa325ad6d9c92b55a3fc5ad7e412b1518f96441c0' as HexAddress,
    ATOM: '0x0Eb3a705fc54725037CC9e008bDede697f62F335' as HexAddress,
    INJ: '0xa2B726B1145A4773F68593CF171187d8EBe4d495' as HexAddress,
};

export type TKeyBNBContract = keyof typeof ctrAdsBNB;
