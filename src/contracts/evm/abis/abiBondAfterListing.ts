export const abiBondAfterListing = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'deposit',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'payout',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'expires',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nativePrice',
                type: 'uint256',
            },
        ],
        name: 'BondCreated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'priceInUSD',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'internalPrice',
                type: 'uint256',
            },
        ],
        name: 'BondPriceChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'recipient',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'payout',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'remaining',
                type: 'uint256',
            },
        ],
        name: 'BondRedeemed',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'initialBCV',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newBCV',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'adjustment',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'addition',
                type: 'bool',
            },
        ],
        name: 'ControlVariableAdjustment',
        type: 'event',
    },
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
                name: '',
                type: 'address',
            },
        ],
        name: 'bondInfo',
        outputs: [
            {
                internalType: 'uint256',
                name: 'totalBought',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'payout',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'vesting',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'lastBlock',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'pricePaid',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'bondPrice',
        outputs: [
            {
                internalType: 'uint256',
                name: 'price_',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'bondPriceInUSD',
        outputs: [
            {
                internalType: 'uint256',
                name: 'price_',
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
                internalType: 'uint256',
                name: '_maxPrice',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_depositor',
                type: 'address',
            },
        ],
        name: 'deposit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_depositer',
                type: 'address',
            },
        ],
        name: 'getBondInfo',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'totalBought',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'payout',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'vesting',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'lastBlock',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'pricePaid',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct OrchaiBondDepository.Bond',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getOrchaiPrice',
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
        ],
        name: 'getPayout',
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
        name: 'getPayoutRate',
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
        name: 'getWithdrawableAmount',
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
                name: '_principle',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_tokenPrice',
                type: 'address',
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
                internalType: 'uint256',
                name: '_buyingTimeStart',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_buyingTime',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_vestingTerm',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_maxPayout',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_maxDebt',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_discountRatio',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_minimumOrchai',
                type: 'uint256',
            },
        ],
        name: 'initializeBondTerms',
        outputs: [],
        stateMutability: 'nonpayable',
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
        inputs: [
            {
                internalType: 'address',
                name: '_depositor',
                type: 'address',
            },
        ],
        name: 'percentVestedFor',
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
        name: 'policy',
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
        name: 'principle',
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
        name: 'pullPolicy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newPolicy_',
                type: 'address',
            },
        ],
        name: 'pushPolicy',
        outputs: [],
        stateMutability: 'nonpayable',
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
        name: 'redeem',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renouncePolicy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'enum OrchaiBondDepository.PARAMETER',
                name: '_parameter',
                type: 'uint8',
            },
            {
                internalType: 'uint256',
                name: '_input',
                type: 'uint256',
            },
        ],
        name: 'setBondTerms',
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
                name: '_principle',
                type: 'address',
            },
        ],
        name: 'setPrincipleAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_staking',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: '_helper',
                type: 'bool',
            },
        ],
        name: 'setStaking',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_tokenPrice',
                type: 'address',
            },
        ],
        name: 'setTokenPriceAddress',
        outputs: [],
        stateMutability: 'nonpayable',
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
        name: 'stake',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'staking',
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
        name: 'stakingHelper',
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
        name: 'terms',
        outputs: [
            {
                internalType: 'uint256',
                name: 'buyingTimeStart',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'buyingTime',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'vestingTerm',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'maxPayout',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'maxDebt',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'discountRatio',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'minimumOrchai',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'tokenPrice',
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
        name: 'totalDebt',
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
        name: 'unpauseContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'useHelper',
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
