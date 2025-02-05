import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import { IconLoading } from 'src/assets/icons/IconLoading';

export default function BoxSuspense({ children }: { children: React.ReactNode }) {
    return (
        <Suspense
            fallback={
                <Box pt={6}>
                    <IconLoading sx={{ fontSize: '110px' }} />
                </Box>
            }
        >
            {children}
        </Suspense>
    );
}
