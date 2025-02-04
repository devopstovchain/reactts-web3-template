import { Box } from '@mui/material';

export default function TabMenuItem3({ isActive, onClick, children }: { isActive: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <Box
            sx={{
                px: 1,
                pb: 0.8,
                position: 'relative',
                cursor: 'pointer',
                '&:before': isActive
                    ? {
                          content: "''",
                          position: 'absolute',
                          bottom: '-1px',
                          left: 0,
                          height: '4px',
                          width: '100%',
                          background: 'linear-gradient(99deg, #0AE16B 0%, #8EFFC7 60.15%, #40FF96 100%)',
                          borderRadius: '16px 16px 0px 0px',
                      }
                    : {},
            }}
        >
            <Box
                sx={{
                    px: 1.5,
                    borderRadius: '16px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    placeItems: 'center',
                    background: isActive ? 'linear-gradient(99deg, rgba(10, 225, 107, 0.32) 0%, rgba(142, 255, 199, 0.32) 60.15%, rgba(64, 255, 150, 0.32) 100%)' : '',
                }}
                component={'div'}
                onClick={onClick}
            >
                {children}
            </Box>
        </Box>
    );
}
