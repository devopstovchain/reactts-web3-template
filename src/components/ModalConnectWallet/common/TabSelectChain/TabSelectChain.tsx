import { Box, Typography } from '@mui/material';
import { SvgComponent } from 'crypto-token-icon';

export default function TabSelectChain({ chainIcon, title }: { chainIcon: SvgComponent[]; title: string }) {
    return (
        <Box sx={{ display: 'flex', placeItems: 'center', gap: 0.5 }}>
            <Box sx={{ display: 'flex', position: 'relative', placeItems: 'center', whiteSpace: 'nowrap' }}>
                {chainIcon.map((Icon, index) => {
                    return (
                        <Box key={index} sx={{ height: '20px' }}>
                            {index == 0 ? <Icon sx={{ zIndex: 1, fontSize: '20px' }} /> : <Icon sx={{ ml: -1.1, zIndex: 0, fontSize: '20px' }} />}
                        </Box>
                    );
                })}
            </Box>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#09120E' }}>{title}</Typography>
        </Box>
    );
}
