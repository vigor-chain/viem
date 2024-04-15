import { defineChain } from '../../utils/chain/defineChain.js'

export const vrc = /*#__PURE__*/ defineChain({
  id: 56,
  name: 'Vigor Chain',
  nativeCurrency: {
    decimals: 18,
    name: 'Vigor Coin',
    symbol: 'VTC',
  },
  rpcUrls: {
    default: { http: ['https://rpc-dataseed1.vigorscan.com'] },
  },
  blockExplorers: {
    default: {
      name: 'VigorScan',
      url: 'https://vigorscan.com',
      apiUrl: 'https://vigorscan.com/api',
    },
  },
  contracts: {
    multicall3: {
      address: '0xA1ec3E42435e0d44e696b08A7Afb74d3aBdF4FCe',
      blockCreated: 906244,
    },
  },
})
