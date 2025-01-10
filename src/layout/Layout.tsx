import { Box } from '@mui/material';
import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import Content from './content/Content';
import { ToastNotifier } from 'src/components/ToastNotifier/ToastNotifier';
import ProviderEVM from 'src/components/ProviderEVM/ProviderEVM';

export default function Layout() {
    return (
        <ProviderEVM>
            <Sidebar />
            <Header />
            <Content />
            <ToastNotifier />
        </ProviderEVM>
    );
}
