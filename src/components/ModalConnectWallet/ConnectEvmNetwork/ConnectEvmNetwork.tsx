import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { Connector, useAccount, useConnect, useConnectors, useDisconnect } from 'wagmi';
import BoxOptionWallet, { sizeWalletIcon, TWalletStatus } from '../common/BoxOptionWallet/BoxOptionWallet';
import { walletIcon } from 'src/constants/walletIcon';
import ButtonCustom from '../common/ButtonCustom/ButtonCustom';
import { toast } from 'react-toastify';
import { FontOpenSans } from 'src/constants';
import { IconLoading } from 'src/assets/icons/IconLoading';

export default function ConnectEvmNetwork({ title }: { title: string }) {
    const { connectAsync, connectors, isPending } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { connector, address } = useAccount();

    // console.log(connectors);

    async function connect(wallet: Connector) {
        try {
            await disconnectAsync({ connector: wallet });
            if (wallet.id == 'app.owallet') {
                if (!window.owallet) {
                    throw new Error('OWallet not found!');
                }
                await window.owallet?.enable('0x01');
            }
            await connectAsync({ connector: wallet });
            // console.log('Connected');
        } catch (e) {
            console.log(e);
            toast.error((e as Error).message);
        }
    }

    async function disconnect(wallet: Connector) {
        try {
            await disconnectAsync({ connector: wallet });
        } catch (e) {
            console.log(e);
            toast.error((e as Error).message);
        }
    }

    return (
        <Box>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, mb: 0.5 }}>{title}</Typography>
            {isPending && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderRadius: '16px',
                        display: 'flex',
                        placeItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        background: 'rgb(255 255 255 / 12%)',
                        zIndex: 1,
                        backdropFilter: 'blur(2px)',
                    }}
                >
                    <IconLoading sx={{ fontSize: '100px' }} />
                </Box>
            )}
            {connectors.map((wallet, index) => {
                let button = <ButtonCustom onClick={() => connect(wallet)}>{address ? 'Switch' : 'Connect'}</ButtonCustom>;

                let status: TWalletStatus = 'Disconnected';
                if (connector?.id === wallet.id) {
                    status = 'Connected';
                    button = (
                        <ButtonCustom variant="contained" sx={{ color: 'white', opacity: '1!important' }} color="error" onClick={() => disconnect(wallet)}>
                            Disconnect
                        </ButtonCustom>
                    );
                }
                if (isPending && wallet.id === connector?.id) {
                    status = 'Connecting';
                }

                return (
                    <Box key={index + wallet.uid} sx={{ mb: 1 }}>
                        <BoxOptionWallet
                            icon={{
                                key: wallet.id,
                                replaceUrl: wallet.icon || '',
                            }}
                            name={wallet.name}
                            status={status}
                            buttonF={button}
                            isConnected={status == 'Connected'}
                        />
                    </Box>
                );
            })}
        </Box>
    );
}
