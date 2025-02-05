import { Button, ButtonProps } from '@mui/material';
import { IconLoading2 } from 'src/assets/icons/IconLoading2';

type Props = {
    loading?: boolean;
    textLoading?: string;
} & ButtonProps;

export default function ButtonLoading({ loading, textLoading, ...muiButtonProps }: Props) {
    return (
        <Button {...muiButtonProps} startIcon={loading ? <IconLoading2 /> : muiButtonProps.startIcon} disabled={loading || muiButtonProps.disabled}>
            {loading ? textLoading || 'Executing...' : muiButtonProps.children}
        </Button>
    );
}
