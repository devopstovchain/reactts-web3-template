import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import React from 'react';
import { sleep } from 'tronweb/utils';
import { queryClient } from '../configs';
import { TVMNetworkId } from '../types';

export default function usePostTransaction() {
    const { address, wallet } = useWallet();

    async function postTransaction(tx: any, network: TVMNetworkId = 'tron') {
        if (!address) {
            throw Error('You have not connected to your wallet yet!');
        }
        const signedTrx = await wallet?.adapter?.signTransaction(tx);

        const receipt = await queryClient[network].trx.sendRawTransaction(signedTrx as any);
        console.log(receipt);
        let count = 0;
        while (count <= 10) {
            await sleep(1000);
            const response = await queryClient[network].trx.getTransaction(signedTrx.txID);
            console.log({ count, response });
            if ((response as any)?.ret[0].contractRet == 'SUCCESS') {
                return response;
            }
            if (count >= 9) {
                throw Error(`Transaction failed! ${(response as any)?.ret[0].contractRet}`);
            }
            count++;
        }
    }

    return { postTransaction };
}
