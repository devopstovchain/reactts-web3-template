export const abiMulticall = [
    {
        inputs: [
            {
                internalType: 'bytes[]',
                name: 'data',
                type: 'bytes[]',
            },
        ],
        name: 'multicall',
        outputs: [
            {
                internalType: 'bytes[]',
                name: 'results',
                type: 'bytes[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
] as const;
