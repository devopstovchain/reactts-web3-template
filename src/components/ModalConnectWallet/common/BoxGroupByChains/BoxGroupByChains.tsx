import { Box, SxProps, Typography } from '@mui/material';
import { SvgComponent } from 'crypto-token-icon';
import React from 'react';
import { FontOpenSans } from 'src/constants';

export default function BoxGroupByChains({ children, chainIcon, sx, title }: { children: React.ReactNode; chainIcon: SvgComponent[]; sx?: SxProps; title?: string }) {
    return (
        <Box sx={{ borderRadius: '16px', background: 'linear-gradient(142deg, #F6FFF8 0%, #F3FFE9 35%, #FDEFFF 65%, #F9F6FF 100%)', p: 1, ...sx }}>
            <Typography textAlign={'left'} mb={1} sx={{ fontSize: '14px', fontWeight: '600', fontFamily: FontOpenSans }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', mb: 2, gap: 1 }}>
                {chainIcon.map((Icon, index) => (
                    <Icon key={index} sx={{ fontSize: '25px' }} />
                ))}
            </Box>
            <Box>{children}</Box>
        </Box>
    );
}
