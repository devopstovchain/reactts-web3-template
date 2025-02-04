import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { AdapterState } from '@tronweb3/tronwallet-abstract-adapter';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import React, { useMemo } from 'react';
import BoxOptionWallet, { sizeWalletIcon, TWalletStatus } from '../common/BoxOptionWallet/BoxOptionWallet';
import ButtonCustom from '../common/ButtonCustom/ButtonCustom';
import { IconLoading } from 'src/assets/icons/IconLoading';

export default function ConnectTronNetwork() {
    const { wallets, select, disconnect, address, connecting } = useWallet();
    const walletsList = useMemo(
        () => [...wallets.filter((wallet: any) => wallet.state !== AdapterState.NotFound), ...wallets.filter((wallet: any) => wallet.state === AdapterState.NotFound)],
        [wallets]
    );
    // console.log(wallet);

    return (
        <Box>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, mb: 0.5 }}>Connect to Tron ecosystem</Typography>
            {connecting && (
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
            {walletsList.map((wallet, index) => {
                // console.log(wallet);
                let status: TWalletStatus = 'Disconnected';
                let button;

                switch (wallet.state) {
                    case AdapterState.NotFound:
                        status = 'NotInstalled';
                        button = <ButtonCustom onClick={() => window.open(wallet.adapter.url, '_blank')}>Install</ButtonCustom>;
                        break;
                    case AdapterState.Connected:
                        status = 'Connected';
                        button = (
                            <ButtonCustom
                                color="error"
                                variant="contained"
                                sx={{ color: 'white', opacity: '1!important' }}
                                onClick={async () => {
                                    await disconnect(), await wallet.adapter.disconnect();
                                }}
                            >
                                Disconnect
                            </ButtonCustom>
                        );
                        break;
                    case AdapterState.Loading:
                        status = 'Connecting';
                        button = <ButtonCustom>Connecting...</ButtonCustom>;
                        break;
                    case AdapterState.Disconnect:
                        status = 'Disconnected';
                        button = address ? (
                            <ButtonCustom
                                sx={{}}
                                onClick={async () => {
                                    await disconnect();
                                    select(wallet.adapter.name);
                                }}
                            >
                                Switch
                            </ButtonCustom>
                        ) : (
                            <ButtonCustom
                                sx={{}}
                                onClick={async () => {
                                    await disconnect();
                                    select(wallet.adapter.name);
                                }}
                            >
                                Connect
                            </ButtonCustom>
                        );
                        break;
                }
                if (wallet.adapter.connecting) {
                    status = 'Connecting';
                    button = <ButtonCustom sx={{ bgcolor: '#4CADD3' }}>Connecting...</ButtonCustom>;
                }
                return (
                    <Box key={wallet.adapter.name + index + status} sx={{ mb: 1 }}>
                        <BoxOptionWallet
                            key={wallet.adapter.name + index + status}
                            name={wallet.adapter.name}
                            icon={{
                                key: wallet.adapter.name,
                                replaceUrl: wallet.adapter.icon,
                            }}
                            status={status}
                            isConnected={wallet.adapter.connected}
                            buttonF={button}
                        />
                    </Box>
                );
            })}
        </Box>
    );
}
