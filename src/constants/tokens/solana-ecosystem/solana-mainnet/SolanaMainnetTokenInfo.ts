import { TokenName } from 'crypto-token-icon';
import { SolanaEcosystemTokenInfo } from '../SolanaEcosystemTokenInfo';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export class SolanaMainnetTokenInfo extends SolanaEcosystemTokenInfo {
    constructor(input: { prettyName: string; symbol: TokenName; decimals: number; address: string; coingeckoId?: string }) {
        super({
            prettyName: input.prettyName,
            symbol: input.symbol,
            decimals: input.decimals,
            address: input.address,
            network: { id: WalletAdapterNetwork.Mainnet, name: 'Solana' },
            isNative: false,
            coingeckoId: input.coingeckoId,
        });
    }
}
