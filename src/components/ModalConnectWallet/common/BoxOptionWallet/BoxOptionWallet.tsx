import { Box, Typography } from '@mui/material';
import { SvgComponent } from 'crypto-token-icon';
import React, { ReactNode } from 'react';
import { FontOpenSans } from 'src/constants';
import { walletIcon } from 'src/constants/walletIcon';

export const sizeWalletIcon = '32px';
export type TWalletStatus = 'Connected' | 'Disconnected' | 'Connecting' | 'Loading' | 'Disconnecting' | 'NotFound' | 'NotInstalled' | 'NotExist' | 'Rejected' | 'Error';

export const walletStatusViews: Record<TWalletStatus, ReactNode> = {
    Connected: (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component={'span'} sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: '#118715', mr: 0.5, display: 'inline-block' }}></Box>
            <Typography sx={{ fontSize: '12px', color: '#118715', fontFamily: FontOpenSans }}>Connected</Typography>
        </Box>
    ),
    Connecting: <Typography sx={{ fontSize: '12px', color: '#616161', fontFamily: FontOpenSans }}>Connecting...</Typography>,
    Loading: <Typography sx={{ fontSize: '12px', color: '#616161', fontFamily: FontOpenSans }}>Connecting...</Typography>,
    Disconnected: <Typography sx={{ fontSize: '12px', color: '#616161', fontFamily: FontOpenSans }}>Disconnected</Typography>,
    Disconnecting: <Typography sx={{ fontSize: '12px', color: '#616161', fontFamily: FontOpenSans }}>Disconnecting...</Typography>,
    NotInstalled: <Typography sx={{ fontSize: '12px', color: '#616161', fontFamily: FontOpenSans }}>Not Installed</Typography>,
    NotExist: <Typography sx={{ fontSize: '12px', color: '#616161', fontFamily: FontOpenSans }}>Not Installed</Typography>,
    NotFound: <Typography sx={{ fontSize: '12px', color: '#616161', fontFamily: FontOpenSans }}>Not Installed</Typography>,
    Rejected: <Typography sx={{ fontSize: '12px', color: 'error.main', fontFamily: FontOpenSans }}>Rejected</Typography>,
    Error: <Typography sx={{ fontSize: '12px', color: 'error.main', fontFamily: FontOpenSans }}>Error:</Typography>,
};

export default function BoxOptionWallet({
    icon,
    buttonF,
    name,
    status,
    mb,
    isConnected,
    textError,
}: {
    isConnected: boolean;
    icon: { key: string; replaceUrl: string };
    name: string;
    status: TWalletStatus;
    buttonF: React.ReactNode;
    textError?: string;
    mb?: number;
}) {
    let Icon = walletIcon[icon.key] || null;

    return (
        <Box
            sx={{
                opacity: status == 'NotInstalled' ? 0.25 : 1,
                borderRadius: '16px',
                border: isConnected ? '1px solid #63FDB0' : '',
                background: isConnected ? 'linear-gradient(99deg, rgba(10, 225, 107, 0.24) 0%, rgba(142, 255, 199, 0.24) 60.15%, rgba(64, 255, 150, 0.24) 100%)' : '#fff',
                padding: '4px 6px',
                display: 'flex',
                gap: 1,
                placeItems: 'center',
                transition: 'opacity 0.3s',
                '& .button': { opacity: 0, transition: 'opacity 0.3s, background-color 0.3s, color 0.3s' },
                '&:hover': { opacity: 1, '& .button': { opacity: 1, bgcolor: '#4CADD3', color: 'white' } },
                // boxShadow: 1,
            }}
            mb={mb}
        >
            {Icon ? (
                <Icon sx={{ fontSize: sizeWalletIcon, borderRadius: '10px' }} />
            ) : (
                <img src={icon.replaceUrl} style={{ width: sizeWalletIcon, height: sizeWalletIcon, borderRadius: '10px' }}></img>
            )}
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: isConnected ? 700 : 600, color: '', fontFamily: FontOpenSans, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {name}
                </Typography>
                <Box display={'flex'} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {walletStatusViews[status]}
                    {status == 'Error' && <Typography sx={{ fontSize: '12px', color: 'error.main', fontFamily: FontOpenSans, ml: 1 }}>{textError || 'Unknow'}</Typography>}
                </Box>
            </Box>
            <Box ml="auto">{buttonF}</Box>
        </Box>
    );
}
