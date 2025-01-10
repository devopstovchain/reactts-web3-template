import { atomWithStorage } from 'jotai/utils';
import { THEME_MODE } from './types';
import { atom } from 'jotai';
import { createTheme, responsiveFontSizes } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { getWalletThemeConfig, getWalletThemedComponent } from './configs/walletTheme';
import { getSmartWalletThemeConfig, getSmartWalletThemedComponent } from './configs/smartwalletTheme';

export const themeMode = atomWithStorage<THEME_MODE>('theme', 'light');

export const walletThemeConfig = atom((get) => {
    const mode = get(themeMode);
    const _t = createTheme(getWalletThemeConfig(mode));
    return responsiveFontSizes(deepmerge(_t, getWalletThemedComponent(_t)));
});

export const smartwalletThemeConfig = atom((get) => {
    const mode = get(themeMode);
    const _t = createTheme(getSmartWalletThemeConfig(mode));
    return responsiveFontSizes(deepmerge(_t, getSmartWalletThemedComponent(_t, mode)));
});
