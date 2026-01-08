

export const cryptoOptions = [
    { value: 'btc', label: 'Bitcoin' },
    { value: 'eth', label: 'Ethereum' },
    { value: 'xrp', label: 'XRP' },
    { value: 'sol', label: 'Solana' },
    { value: 'usdt', label: 'USDT (Tether)' },
    { value: 'trx', label: 'Tron (TRX)' },
]

export type NetworkOption = {
    coinName: string;
    networkName: string;
    networkValue: string;
    address: string;
    memo?: string;
}

export const adminWallets: Record<string, NetworkOption[]> = {
    btc: [
        {
            coinName: 'Bitcoin',
            networkName: 'Bitcoin (BTC)',
            networkValue: 'btc-mainnet',
            address: 'bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
    ],
    eth: [
        {
            coinName: 'Ethereum',
            networkName: 'Ethereum (ERC20)',
            networkValue: 'eth-erc20',
            address: '0x1234567890123456789012345678901234567890'
        },
        {
            coinName: 'Ethereum',
            networkName: 'BNB Smart Chain (BEP20)',
            networkValue: 'eth-bep20',
            address: '0x0987654321098765432109876543210987654321'
        }
    ],
    xrp: [
        {
            coinName: 'XRP',
            networkName: 'XRP Ledger',
            networkValue: 'xrp-mainnet',
            address: 'rXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            memo: '123456789'
        }
    ],
    sol: [
        {
            coinName: 'Solana',
            networkName: 'Solana (SOL)',
            networkValue: 'sol-mainnet',
            address: 'SoLxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
    ],
    usdt: [
        {
            coinName: 'USDT',
            networkName: 'Ethereum (ERC20)',
            networkValue: 'usdt-erc20',
            address: '0x1234567890123456789012345678901234567890'
        },
        {
            coinName: 'USDT',
            networkName: 'Tron (TRC20)',
            networkValue: 'usdt-trc20',
            address: 'Txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
            coinName: 'USDT',
            networkName: 'TON',
            networkValue: 'usdt-ton',
            address: 'EQxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
            coinName: 'USDT',
            networkName: 'Solana (SOL)',
            networkValue: 'usdt-sol',
            address: 'SoLxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
    ],
    trx: [
         {
            coinName: 'Tron',
            networkName: 'Tron (TRC20)',
            networkValue: 'trx-trc20',
            address: 'Tyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
        }
    ]
};


export const getNetworksForCoin = (coin: string): NetworkOption[] => {
    return adminWallets[coin] || [];
}
