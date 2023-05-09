import type { Web3ReactHooks } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import { Button, Dropdown } from "antd";

import { getName } from '../utils/utils'
import { Accounts } from './Accounts'
import { Chain } from './Chain'
import { CHAINS } from '../chains'
import { ConnectWithSelect } from './ConnectWithSelect'
import { Status } from './Status'

interface Props {
  connector: MetaMask
  activeChainId: ReturnType<Web3ReactHooks['useChainId']>
  chainIds?: ReturnType<Web3ReactHooks['useChainId']>[]
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
  error: Error | undefined
  setError: (error: Error | undefined) => void
  ENSNames: ReturnType<Web3ReactHooks['useENSNames']>
  provider?: ReturnType<Web3ReactHooks['useProvider']>
  accounts?: string[]
}

export function Card({
  connector,
  activeChainId,
  chainIds,
  isActivating,
  isActive,
  error,
  setError,
  ENSNames,
  accounts,
  provider,
}: Props) {
  const hideMiddleChars = (str: string) => {
    if (str.length <= 10) {
      return str;
    } else {
      const startChars = str.slice(0, 6);
      const endChars = str.slice(-4);
      return `${startChars}...${endChars}`;
    }
  }
  return (
    <div style={{ zIndex: 1 }}
    >
      <Dropdown
        trigger={['click']}
        placement="bottomRight"
        dropdownRender={() => (
          <ConnectWithSelect
            connector={connector}
            activeChainId={activeChainId}
            chainIds={chainIds}
            isActivating={isActivating}
            isActive={isActive}
            error={error}
            setError={setError}
          />
        )}
      >
        <Button style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} type='primary' className='topConnect'>
          {accounts?.length > 0 && <>
            <img src={CHAINS[activeChainId]?.icon} style={{ marginRight: '10px', width: '25px' }}></img>
            {hideMiddleChars(accounts[0])}
          </> || 'Connect Wallet'}
        </Button>
      </Dropdown>

      {/* <b>{getName(connector)}</b>
      <div style={{ marginBottom: '1rem' }}>
        <Status isActivating={isActivating} isActive={isActive} error={error} />
      </div>
      <Chain chainId={activeChainId} />
      <div style={{ marginBottom: '1rem' }}>
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div> */}

    </div>
  )
}
