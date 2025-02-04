import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import { FontOpenSans } from 'src/constants';

export default function ButtonCustom(props: ButtonProps) {
    return (
        <Button
            className="button"
            variant="text"
            size="small"
            {...props}
            sx={{
                color: 'text.secondary',
                fontFamily: FontOpenSans,
                borderRadius: '22px',
                boxShadow: 'none',
                textTransform: 'capitalize',
                ...props.sx,
            }}
        >
            {props.children}
        </Button>
    );
}
