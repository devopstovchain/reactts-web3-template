export const abiCompoundStaking = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint8',
                name: 'version',
                type: 'uint8',
            },
        ],
        name: 'Initialized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Paused',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Unpaused',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'token',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'WithdrawalStuckAmount',
        type: 'event',
    },
    {
        inputs: [],
        name: 'Orchai',
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
                internalType: 'address',
                name: '_recipient',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: '_trigger',
                type: 'bool',
            },
        ],
        name: 'claim',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'contractBalance',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'distributor',
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
        inputs: [],
        name: 'epoch',
        outputs: [
            {
                internalType: 'uint256',
                name: 'length',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'number',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'end',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'distribute',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_recipient',
                type: 'address',
            },
        ],
        name: 'getClaimableAmount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_depositor',
                type: 'address',
            },
        ],
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'deposit',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'gons',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'expiry',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'lock',
                        type: 'bool',
                    },
                ],
                internalType: 'struct OrchaiStaking.Claim',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
        ],
        name: 'giveLockBonus',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'index',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_Orchai',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_sOrchai',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_onBehalfStaker',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_epochLength',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_firstEpochNumber',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_firstEpochTime',
                type: 'uint256',
            },
        ],
        name: 'initialize',
        outputs: [],
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
        name: 'isOnBehalfStaker',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'locker',
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
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paused',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'rebase',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
        ],
        name: 'returnLockBonus',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'sOrchai',
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
                internalType: 'enum OrchaiStaking.CONTRACTS',
                name: '_contract',
                type: 'uint8',
            },
            {
                internalType: 'address',
                name: '_address',
                type: 'address',
            },
        ],
        name: 'setContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_sOrchai',
                type: 'address',
            },
        ],
        name: 'setEpoch',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_Orchai',
                type: 'address',
            },
        ],
        name: 'setOrchaiAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_sOrchai',
                type: 'address',
            },
        ],
        name: 'setStakedOrchaiAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'enum OrchaiStaking.EPOCH_PARAMETER',
                name: '_parameter',
                type: 'uint8',
            },
            {
                internalType: 'uint256',
                name: '_input',
                type: 'uint256',
            },
        ],
        name: 'setStakingParameter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_warmupPeriod',
                type: 'uint256',
            },
        ],
        name: 'setWarmup',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_recipient',
                type: 'address',
            },
        ],
        name: 'stake',
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
        inputs: [],
        name: 'toggleDepositLock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_onBehalfStaker',
                type: 'address',
            },
        ],
        name: 'toggleOnBehalfStaker',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalBonus',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unpauseContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'warmupContract',
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
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'warmupInfo',
        outputs: [
            {
                internalType: 'uint256',
                name: 'deposit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'gons',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'expiry',
                type: 'uint256',
            },
            {
                internalType: 'bool',
                name: 'lock',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'warmupPeriod',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_token',
                type: 'address',
            },
        ],
        name: 'withdrawStuckAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
] as const;
