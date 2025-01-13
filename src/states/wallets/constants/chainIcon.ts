import { IconATOM, IconBSC, IconETH, IconINJ, IconORAI, IconOSMO, IconTRX, SvgComponent } from 'crypto-token-icon';
import { TAppChainId } from 'src/states/wallets/types';

export const chainIcon: Record<TAppChainId, SvgComponent> = {
    '1': IconETH,
    '56': IconBSC,
    cosmoshub: IconATOM,
    injective: IconINJ,
    oraichain: IconORAI,
    osmosis: IconOSMO,
    // tron: IconTRX,
};
