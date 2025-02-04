import { WalletModalProps } from '@cosmos-kit/core';
import { ClearRounded } from '@mui/icons-material';
import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { FontOpenSans } from 'src/constants';
import { useCosmosChains } from 'src/states/wallets/cosmos-blockchain/hooks/useCosmosChains';
import BoxGroupByChains from './common/BoxGroupByChains/BoxGroupByChains';
import { IconATOM, IconBNB, IconETH, IconINJ, IconORAI, IconOSMO, IconSOL, IconTRX, SvgComponent } from 'crypto-token-icon';
import ConnectCosmosNetwork from './ConnectCosmosNetwork/ConnectCosmosNetwork';
import ConnectEvmNetwork from './ConnectEvmNetwork/ConnectEvmNetwork';
import ConnectTronNetwork from './ConnectTronNetwork/ConnectTronNetwork';
import ConnectSolanaNetwork from './ConnectSolanaNetwork/ConnectSolanaNetwork';
import { ReactNode, useState } from 'react';
import TabSelectChain from './common/TabSelectChain/TabSelectChain';
import TabReponsive from '../TabReponsive/TabReponsive';

type TTabConnect = {
    id: number;
    title: string;
    chainIcons: SvgComponent[];
};
const tabs: { content: ReactNode; hoverContent: ReactNode }[] = [
    {
        hoverContent: (
            <Box>
                <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Supported Cosmos ecosystem</Typography>
                <Box sx={{ display: 'flex', placeItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <IconORAI />
                    <IconINJ />
                    <IconOSMO />
                    <IconATOM />
                </Box>
            </Box>
        ),
        content: <TabSelectChain chainIcon={[IconORAI, IconINJ, IconOSMO, IconATOM]} title="Cosmos" />,
    },
    {
        hoverContent: (
            <Box>
                <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Supported Tron ecosystem</Typography>
                <Box sx={{ display: 'flex', placeItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <IconTRX />
                </Box>
            </Box>
        ),
        content: <TabSelectChain chainIcon={[IconTRX]} title="Tron" />,
    },
    {
        hoverContent: (
            <Box>
                <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Supported Solana ecosystem</Typography>
                <Box sx={{ display: 'flex', placeItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <IconSOL />
                </Box>
            </Box>
        ),
        content: <TabSelectChain chainIcon={[IconSOL]} title="Solana" />,
    },
    {
        hoverContent: (
            <Box>
                <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Supported EVM ecosystem</Typography>
                <Box sx={{ display: 'flex', placeItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <IconBNB />
                    <IconETH />
                </Box>
            </Box>
        ),
        content: <TabSelectChain chainIcon={[IconBNB, IconETH]} title="EVM" />,
    },
];

export default function ModalConnectWallet({ isOpen, setOpen, walletRepo }: WalletModalProps) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const onCloseModal = () => {
        setOpen(false);
    };

    const renderViewWallets = () => {
        switch (activeTab) {
            case 0:
                return <>{walletRepo ? <ConnectCosmosNetwork currentWallet={walletRepo.current} walletsAppSupport={walletRepo.wallets} title="Connect to Cosmos ecosystem" /> : null}</>;
            case 1:
                return <ConnectTronNetwork />;
            case 2:
                return <ConnectSolanaNetwork />;
            case 3:
                return <ConnectEvmNetwork title="Connect to EVM ecosystem" />;
        }
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
                    '.MuiDialogContent-root': {
                        '::-webkit-scrollbar': {
                            height: '8px' /* height of horizontal scrollbar ← You're missing this */,
                            width: '8px' /* width of vertical scrollbar */,
                        },
                        '::-webkit-scrollbar-track': {
                            borderRadius: 0,
                            background: 'transparent',
                        },

                        '::-webkit-scrollbar-thumb': {
                            borderRadius: 4,
                            background: '#bebebe',
                            cursor: 'pointer',
                            '&:hover': {
                                background: '#d3d3d3',
                            },
                        },
                    },
                },
            }}
        >
            <DialogTitle sx={{ borderBottom: '1px solid #E3E3E3' }}>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h6" color={'text.secondary'} sx={{ fontWeight: 600, color: 'black', fontFamily: FontOpenSans }}>
                        Connect to Orchai
                    </Typography>

                    <ClearRounded sx={{ ml: 'auto', cursor: 'pointer', fontSize: '25px' }} onClick={onCloseModal} />
                </Box>
            </DialogTitle>
            <DialogContent sx={{ p: { xs: 1, sm: 2 } }}>
                <TabReponsive activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} numberViewTab={1} downBreakpoints="xsm" />
                <Box sx={{ mt: 2, borderRadius: '16px', p: '16px', background: 'linear-gradient(142deg, #F6FFF8 0%, #F3FFE9 35%, #FDEFFF 65%, #F9F6FF 100%)' }}>{renderViewWallets()}</Box>
            </DialogContent>
        </Dialog>
    );
}
