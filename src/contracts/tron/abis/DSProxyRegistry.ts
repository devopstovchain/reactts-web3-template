export const abiDSProxyRegistry = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'factory_',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'build',
        outputs: [
            {
                internalType: 'address payable',
                name: 'proxy',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'buildProxy',
        outputs: [
            {
                internalType: 'address payable',
                name: 'proxy',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'proxies',
        outputs: [
            {
                internalType: 'contract DSProxy',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
] as const;
