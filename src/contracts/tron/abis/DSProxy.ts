export const abiDSProxy = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_cacheAddr',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: true,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes4',
                name: 'sig',
                type: 'bytes4',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'guy',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'foo',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'bar',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'wad',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'fax',
                type: 'bytes',
            },
        ],
        name: 'LogNote',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'authority',
                type: 'address',
            },
        ],
        name: 'LogSetAuthority',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'LogSetOwner',
        type: 'event',
    },
    {
        inputs: [],
        name: 'authority',
        outputs: [
            {
                internalType: 'contract DSAuthority',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'cache',
        outputs: [
            {
                internalType: 'contract DSProxyCache',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_target',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'execute',
        outputs: [
            {
                internalType: 'bytes',
                name: 'response',
                type: 'bytes',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_code',
                type: 'bytes',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'executeBycode',
        outputs: [
            {
                internalType: 'address',
                name: 'target',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: 'response',
                type: 'bytes',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'contract DSAuthority',
                name: 'authority_',
                type: 'address',
            },
        ],
        name: 'setAuthority',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_cacheAddr',
                type: 'address',
            },
        ],
        name: 'setCache',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner_',
                type: 'address',
            },
        ],
        name: 'setOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        stateMutability: 'payable',
        type: 'receive',
    },
] as const;
