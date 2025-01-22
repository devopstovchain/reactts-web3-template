import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { TSolanaNetworkId } from './types';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export const solNetworkIds: Record<TSolanaNetworkId, WalletAdapterNetwork> = {
    sol_devnet: WalletAdapterNetwork.Devnet,
    sol_testnet: WalletAdapterNetwork.Testnet,
    sol_mainnet: WalletAdapterNetwork.Mainnet,
};

export const SYSTEM_PROGRAM_ID = new PublicKey('11111111111111111111111111111111'); // địa chỉ thu phí

const rpcMainnet = 'https://newest-divine-pond.solana-mainnet.quiknode.pro/ace3e94f4bfa2e41f2118a6d8e18a727fb8c537d/';
const rpcMainnetOrai = 'https://solana-rpc.distilled.ai/?api-key=75b54b97-4e6a-4c43-8055-6416aedefc54';
const rpc2 = 'https://solana-woker.distilled.ai';
const rpcDevnet = clusterApiUrl('devnet');

export const solNetworkSelect = WalletAdapterNetwork.Mainnet;
export const publicClientSol = new Connection(rpc2, 'confirmed');
