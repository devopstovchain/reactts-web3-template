import { TTVMContractAds } from './types';

export const ctrAdsTronGrid = {
    MULTICALL: { base58: 'TGXuuKAb4bnrn137u39EKbYzKNXvdCes98', hex: '0x480035371eC62A4E5E99b5F68cEa65CaF3b719FC' } as TTVMContractAds,
    CROSS_LENDING_MONEY_MARKET_ADDRESS: { base58: 'TAwKtVZmqNptZQGDtdCCMgTCe5Hq7Sav7C', hex: '0x0A9d0aEC6E5fbdb6688d3DC8C8f1c8DfC6111778' } as TTVMContractAds,
};

export type TKeyTronGridContract = keyof typeof ctrAdsTronGrid;
