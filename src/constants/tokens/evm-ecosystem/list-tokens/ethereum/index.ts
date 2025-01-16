import { TokenName } from 'crypto-token-icon';
import { EthereumChainTokenInfo } from './EthereumChainTokenInfo';

export const ethEthereum = new EthereumChainTokenInfo({
    address: '0xeth',
    decimals: 18,
    symbol: TokenName.ETH,
    prettyName: 'Ethereum',
    isNative: true,
    coingeckoId: 'ethereum',
});
