import { Box, Typography, Grid2 as Grid } from '@mui/material';
import { ChainWalletBase, MainWalletBase, WalletStatus } from '@cosmos-kit/core';
import BoxOptionWallet, { sizeWalletIcon, TWalletStatus } from '../common/BoxOptionWallet/BoxOptionWallet';
import { FontOpenSans } from 'src/constants';
import ButtonCustom from '../common/ButtonCustom/ButtonCustom';
import { toast } from 'react-toastify';
import { walletIcon } from 'src/constants/walletIcon';

export default function ConnectCosmosNetwork({ walletsAppSupport, currentWallet, title }: { walletsAppSupport: ChainWalletBase[]; currentWallet?: ChainWalletBase; title: string }) {
    async function connect(wallet: ChainWalletBase) {
        try {
            await currentWallet?.disconnect(true);
            await wallet.connect(true);
            // console.log('Connected');
        } catch (e) {
            console.log(e);
            toast.error((e as Error).message);
        }
    }
    async function disconnect(wallet: ChainWalletBase) {
        try {
            await wallet.disconnect(true, { walletconnect: { removeAllPairings: true } });
        } catch (e) {
            console.log(e);
            toast.error((e as Error).message);
        }
    }
    return (
        <Box>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, mb: 0.5 }}>{title}</Typography>
            <Box>
                {walletsAppSupport.map((wallet, index) => {
                    // console.log(wallet);
                    let button;
                    let status: TWalletStatus = 'Disconnected';
                    let textError = '';

                    switch (wallet.walletStatus) {
                        case WalletStatus.Disconnected:
                            // console.log(wallet?.walletInfo);
                            button = <ButtonCustom onClick={() => connect(wallet)}>{currentWallet?.isDone ? 'Switch' : 'Connect'}</ButtonCustom>;
                            status = 'Disconnected';
                            break;
                        case WalletStatus.NotExist:
                            button = <ButtonCustom>Install</ButtonCustom>;
                            status = 'NotInstalled';
                            break;
                        case WalletStatus.Connected:
                            button = (
                                <ButtonCustom variant="contained" sx={{ color: 'white', opacity: '1!important' }} color="error" onClick={() => disconnect(wallet)}>
                                    Disconnect
                                </ButtonCustom>
                            );
                            status = 'Connected';
                            break;
                        case WalletStatus.Connecting:
                            button = <ButtonCustom>Connecting...</ButtonCustom>;
                            status = 'Connecting';
                            break;
                        case WalletStatus.Error:
                            button = (
                                <ButtonCustom sx={{ bgcolor: '#4CADD3' }} onClick={() => connect(wallet)}>
                                    Reconnect
                                </ButtonCustom>
                            );
                            status = 'Error';
                            textError = wallet.message;
                            break;
                        case WalletStatus.Rejected:
                            button = (
                                <ButtonCustom sx={{ bgcolor: '#4CADD3' }} onClick={() => connect(wallet)}>
                                    Reconnect
                                </ButtonCustom>
                            );
                            status = 'Rejected';
                    }
                    return (
                        <Box key={index + wallet.walletStatus} sx={{ mb: 1 }}>
                            <BoxOptionWallet
                                isConnected={wallet.walletStatus === WalletStatus.Connected}
                                icon={{
                                    key: wallet.walletInfo.name,
                                    replaceUrl: wallet.walletInfo.logo?.toString() || '',
                                }}
                                name={wallet.walletPrettyName}
                                buttonF={button}
                                status={status}
                                textError={textError}
                            />
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
