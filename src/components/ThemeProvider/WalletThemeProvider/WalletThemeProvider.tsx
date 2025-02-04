import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import BaseChartStyle from 'src/states/themes/chart';
import { useThemeConfigValue } from 'src/states/themes/hooks';

export function WalletThemeProvider({ children }: { children: ReactNode }) {
    const themeConfig = useThemeConfigValue('wallet');
    return (
        <ThemeProvider theme={themeConfig}>
            <CssBaseline />
            <BaseChartStyle />
            {children}
        </ThemeProvider>
    );
}
