import { HexAddress } from 'src/global.config';

export const ctrAdsEthereum = {
    ETH: '0xeth' as HexAddress,
    DAI: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3' as HexAddress,
    USDC: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d' as HexAddress,
    USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7' as HexAddress,
    BTCB: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c' as HexAddress,
    BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56' as HexAddress,
    WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c' as HexAddress,
    scORAI: '0xEC66D61F47b9411c900B367556D77810Ec2e253D' as HexAddress,
    ATOM: '0x0Eb3a705fc54725037CC9e008bDede697f62F335' as HexAddress,
    INJ: '0xa2B726B1145A4773F68593CF171187d8EBe4d495' as HexAddress,
    ORAI: '0x4c11249814f11b9346808179cf06e71ac328c1b5',
    BNB: '0xbnb01' as HexAddress,
    STAKING_ORAI: '0x04471C1A8D9E89017191672B59115c07a446BD6A' as HexAddress,
};

export type TKeyEthereumContract = keyof typeof ctrAdsEthereum;
