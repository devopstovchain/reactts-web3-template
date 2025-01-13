import { assets, chains } from 'chain-registry';
import { TCosmosNetworkId } from './types';
import { ctrAdsOraichain } from 'src/constants/contract-address/oraichain';

export const cosmoshubInfo = chains[41];
export const injectiveInfo = chains[78];
export const oraichainInfo = chains[125];
export const osmosisInfo = chains[126];

export const chainInfoCosmos: Record<TCosmosNetworkId, (typeof chains)[number]> = {
    cosmoshub: cosmoshubInfo,
    injective: injectiveInfo,
    oraichain: oraichainInfo,
    osmosis: osmosisInfo,
};

export const assetCosmosHub = assets[41];
export const assetInjective = assets[78];
export const assetOraichain = assets[125];
export const assetOsmosis = assets[126];

export const assetInfoCosmos: Record<TCosmosNetworkId, (typeof assets)[number]> = {
    cosmoshub: assetCosmosHub,
    injective: assetInjective,
    oraichain: assetOraichain,
    osmosis: assetOsmosis,
};

export const rpcCosmos: Record<TCosmosNetworkId, string[]> = {
    cosmoshub: ['https://rpc.cosmos.directory/cosmoshub'],
    injective: ['https://rpc.cosmos.directory/injective'],
    oraichain: ['https://rpc.orai.io', 'https://rpc.cosmos.directory/oraichain'],
    osmosis: ['https://rpc.cosmos.directory/osmosis', 'https://rpc.osmosis.zone'],
};

export const contractMulticallCosmos: Record<TCosmosNetworkId, string> = {
    cosmoshub: '',
    injective: '',
    oraichain: ctrAdsOraichain.MULTICALL,
    osmosis: '',
};

export const cosmosScanUrl: Record<TCosmosNetworkId, string> = {
    oraichain: 'https://scan.orai.io/txs/',
    cosmoshub: '',
    injective: '',
    osmosis: '',
};

export const blockPerYear: Record<TCosmosNetworkId, number> = {
    oraichain: 37101176,
    cosmoshub: 0,
    injective: 0,
    osmosis: 0,
};
