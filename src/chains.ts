import type { AddEthereumChainParameter } from '@web3-react/types'

const BNB: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'BNB',
  symbol: 'BNB',
  decimals: 18,
}
const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'ETH',
  symbol: 'ETH',
  decimals: 18,
}
const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
}

const CELO: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Celo',
  symbol: 'CELO',
  decimals: 18,
}

interface BasicChainInformation {
  urls: string[]
  name: string
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency']
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId]
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    }
  } else {
    return chainId
  }
}

const getInfuraUrlFor = (network: string) =>
  process.env.infuraKey ? `https://${network}.infura.io/v3/${process.env.infuraKey}` : undefined
const getAlchemyUrlFor = (network: string) =>
  process.env.alchemyKey ? `https://${network}.alchemyapi.io/v2/${process.env.alchemyKey}` : undefined

type ChainConfig = { [chainId: number]: BasicChainInformation | ExtendedChainInformation }

export const MAINNET_CHAINS: ChainConfig = {
  // 1: {
  //   urls: [getInfuraUrlFor('mainnet'), getAlchemyUrlFor('eth-mainnet'), 'https://cloudflare-eth.com'].filter(Boolean),
  //   name: 'Ethereum',
  //   icon:'/eth.svg'
  // },
  56: {
    urls: ['https://bsc-dataseed.binance.org'],
    name: 'BNB Chain',
    nativeCurrency: BNB,
    blockExplorerUrls: ['https://arbiscan.io'],
    icon:'/bnb.svg',id:56
  },
  // 137: {
  //   icon:'/polygon.svg',
  //   urls: [getInfuraUrlFor('polygon-mainnet'), 'https://polygon-rpc.com'].filter(Boolean),
  //   name: 'Polygon Mainnet',
  //   nativeCurrency: MATIC,
  //   blockExplorerUrls: ['https://polygonscan.com'],
  // },
  42161: {
    id:42161,
    icon:'/arb.svg',
    urls: ['https://endpoints.omniatech.io/v1/arbitrum/one/public'],
    name: 'Arbitrum',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://arbiscan.io'],
  },
}

export const TESTNET_CHAINS: ChainConfig = {
  5: {
    urls: [getInfuraUrlFor('goerli')].filter(Boolean),
    name: 'Görli',
  },
  420: {
    urls: [getInfuraUrlFor('optimism-goerli'), 'https://goerli.optimism.io'].filter(Boolean),
    name: 'Optimism Goerli',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://goerli-explorer.optimism.io'],
  },
  421613: {
    urls: [getInfuraUrlFor('arbitrum-goerli'), 'https://goerli-rollup.arbitrum.io/rpc'].filter(Boolean),
    name: 'Arbitrum Goerli',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://testnet.arbiscan.io'],
  },
  80001: {
    urls: [getInfuraUrlFor('polygon-mumbai')].filter(Boolean),
    name: 'Polygon Mumbai',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
  44787: {
    urls: ['https://alfajores-forno.celo-testnet.org'],
    name: 'Celo Alfajores',
    nativeCurrency: CELO,
    blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org'],
  },
}

export const CHAINS: ChainConfig = {
  ...MAINNET_CHAINS,
  // ...TESTNET_CHAINS,
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs
    }

    return accumulator
  },
  {}
)
