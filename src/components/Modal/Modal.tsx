import { ClearRounded } from '@mui/icons-material';
import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useModalFunction, useModalValue } from 'src/states/modal/hooks';

export function Modal() {
    const modal = useModalValue();
    const dispatch = useModalFunction();
    return (
        <Dialog fullWidth maxWidth={modal.modalProps?.maxWidth || 'xsm'} open={modal.open} {...modal.modalProps}>
            <DialogTitle>
                <Box sx={{ display: 'flex' }}>
                    {typeof modal.title == 'string' ? (
                        <Typography variant="h6" color={'text.primary'}>
                            {modal.title}
                        </Typography>
                    ) : (
                        modal.title
                    )}
                    <ClearRounded sx={{ ml: 'auto', cursor: 'pointer', fontSize: '25px' }} onClick={() => dispatch({ type: 'closeModal' })} />
                </Box>
            </DialogTitle>
            <DialogContent>{modal.content}</DialogContent>
        </Dialog>
    );
}
