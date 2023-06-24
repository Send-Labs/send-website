import type { Web3ReactHooks } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import { useCallback, useEffect, useState, useContext } from 'react'
import WalletProvider from "./WalletProvider";
import { CHAINS, getAddChainParameters } from '../chains'
import './index.less';
function ChainSelect({
  activeChainId,
  switchChain,
  chainIds,
}: {
  activeChainId: number
  switchChain: (chainId: number) => void
  chainIds: number[]
}) {
  return (
    <>
      {chainIds.map((chainId) => (
        <div className='network' key={chainId} onClick={() => { switchChain(Number(chainId)) }}>
          <img src={CHAINS[chainId]?.icon} style={{ marginRight: '15px', width: '30px' }} />
          {CHAINS[chainId]?.name ?? chainId}
        </div>
      ))}
    </>

  )
}

export function ConnectWithSelect({
  connector,
  activeChainId,
  chainIds = Object.keys(CHAINS).map(Number),
  isActivating,
  isActive,
  error,
  setError,
}: {
  connector: MetaMask
  activeChainId: ReturnType<Web3ReactHooks['useChainId']>
  chainIds?: ReturnType<Web3ReactHooks['useChainId']>[]
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
  error: Error | undefined
  setError: (error: Error | undefined) => void
}) {
  const [desiredChainId, setDesiredChainId] = useState<number>(undefined)
  const { currentChain } = useContext(WalletProvider);
  /**
   * When user connects eagerly (`desiredChainId` is undefined) or to the default chain (`desiredChainId` is -1),
   * update the `desiredChainId` value so that <select /> has the right selection.
   */
  useEffect(() => {
    if (activeChainId && (!desiredChainId || desiredChainId === -1)) {
      setDesiredChainId(activeChainId)
    }
  }, [desiredChainId, activeChainId])

  const switchChain = useCallback(
    async (desiredChainId: number) => {
      setDesiredChainId(desiredChainId)
      debugger;
      try {
        if (
          // If we're already connected to the desired chain, return
          desiredChainId === activeChainId ||
          // If they want to connect to the default chain and we're already connected, return
          (desiredChainId === -1 && activeChainId !== undefined)
        ) {
          setError(undefined)
          return
        }


        await connector.activate(getAddChainParameters(desiredChainId))

        setError(undefined)
      } catch (error) {
        setError(error)
      }
    },
    [connector, activeChainId, setError]
  )
  useEffect(() => {
    if (currentChain != -1) {
      switchChain(currentChain);
    }
    // alert(currentChain)
  },[currentChain]);
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(28, 27, 27)',
      border: ' 1px solid rgb(47, 52, 62)',
      borderRadius: '5px'
    }}>
      <ChainSelect activeChainId={desiredChainId} switchChain={switchChain} chainIds={chainIds} />
    </div>
  )
}
