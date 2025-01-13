import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { WalletModalProps, WalletStatus } from '@cosmos-kit/core';
import { ClearRounded } from '@mui/icons-material';
import { FontOpenSans } from 'src/constants';

export default function ModalConnectWallet({ isOpen, setOpen, walletRepo }: WalletModalProps) {
    const onCloseModal = () => {
        setOpen(false);
    };
    return (
        <Dialog
            onClose={onCloseModal}
            fullWidth
            maxWidth={'sm'}
            open={isOpen}
            sx={{
                '.MuiDialog-container .MuiPaper-root': {
                    margin: 0,
                    width: '100%',
                    borderRadius: '16px',
                },
            }}
        >
            <DialogTitle>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h6" color={'text.secondary'} sx={{ fontWeight: 600, color: 'black', fontFamily: FontOpenSans }}>
                        Connect to Orchai
                    </Typography>

                    <ClearRounded sx={{ ml: 'auto', cursor: 'pointer', fontSize: '25px' }} onClick={onCloseModal} />
                </Box>
            </DialogTitle>
            <DialogContent sx={{ p: { xs: 1, sm: 2 } }}>
                <Box>{/* any ui hear */}</Box>
            </DialogContent>
        </Dialog>
    );
}
