// import yayJpg from '@/assets/yay.jpg';
import { connect } from 'umi';
import { useEffect, useState, useContext } from 'react';
import TokenInput from '@/components/TokenInput';
import { SettingOutlined, ArrowDownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { getTokenList } from '@/constants';
import { Button, Drawer, Tooltip, Input } from 'antd';
import ButtonGroup from '@/components/SendButtonGroup';
import { hooks } from '@/connectors/metaMask'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

import { CHAINS } from '@/chains'

import styles from './index.less';
const HomePage = (props: any) => {
  const [visible, setVisible] = useState(false);
  const[value,setValue]=useState(2);
  const [visibleSetting, setVisibleSetting] = useState(false);
  const chainId = useChainId()

  const onClose = () => {
    setVisible(false);
  };
  const onSelectTokenCurrent = (item: any) => {
    setVisible(false);
    setCurrentFromToken(item);
    setCurrentToToken(item);
  };
  const onSelectChainCurrent = (item: any) => {
    setOpen(false);
    setCurrentToChain(item);
  };
  const [open, setOpen] = useState(false);
  const chainList = [
    // {
    //   'name': 'Ethereum',
    //   'icon': '/eth.svg'
    // },
    {
      'name': 'BNB Chain',
      'icon': '/bnb.svg'
    },
    // {
    //   'name': 'Polygon',
    //   'icon': '/polygon.svg'
    // },
    {
      'name': 'Arbitrum',
      'icon': '/arb.svg'
    }
  ];
  const [currentToToken, setCurrentToToken] = useState(getTokenList(null)[0]);
  const [currentToChain, setCurrentToChain] = useState(chainList[0]);
  const [currentFromToken, setCurrentFromToken] = useState(getTokenList(null)[0]);
  const [currentFromChain, setCurrentFromChain] = useState({});
  const accounts = useAccounts()
  const provider = useProvider()

  useEffect(() => {
    setCurrentFromChain(CHAINS[chainId]);
    console.log('accounts', accounts);
  }, [chainId]);
  useEffect(() => {
    if (provider && accounts?.length) {
      let stale = false

      void Promise.all(accounts.map((account) => provider.getBalance(account))).then((balances) => {
        if (stale) return
        debugger;
        // setBalances(balances)
      })

      return () => {
        stale = true
        // setBalances(undefined)
      }
    }
  }, [provider, accounts])
  const setSelectFrom=()=>{}
  return (
    <div style={{ padding: '50px 0' }} className='flex flex-center'>
      <div className='flex flex-column gap-5' style={{ width: '375px', backgroundColor: '#1c1b1b', padding: '1.25rem', border: '1px solid #2f343e', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
        <div className='flex flex-between gap-2'>
          <span>Transfer</span>
          {/* 先隐藏 */}
          {/* <div style={{ cursor: 'pointer' }} onClick={() => setVisibleSetting(true)}><SettingOutlined /></div> */}
        </div>
        <TokenInput defaultValue={value} onChange={(v:any)=>setValue(v)} chooseToken max currentChain={currentFromChain} currentToken={currentFromToken} selectToken={() => { setVisible(true); setSelectFrom(true); }} title="From" />
        <div style={{ textAlign: 'center' }}>
          <div className='swap-hover'>
            <ArrowDownOutlined style={{ color: '#ffffff' }} />
          </div>
        </div>
        <TokenInput defaultValue={value} onChange={(v:any)=>setValue(v)} currentChain={currentToChain} currentToken={currentToToken} selectToken={() => { setVisible(true); setSelectFrom(false); }} selectChain={() => { setOpen(true); setSelectFrom(false); }} title="To" choose />
        {/* <div>
          <div className='flex flex-between gap-2'>
            <div>Rate</div>
            <div>-</div>
          </div>
          <div className='flex flex-between gap-2'>
            <div>Slippage</div>
            <div>-</div>
          </div>
          <div className='flex flex-between gap-2'>
            <div>Gas Estimate</div>
            <div>-</div>
          </div>
        </div> */}
        <Button style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} type='primary' className='topConnect'>{chainId&&'Confirm'||'Connect Wallet'}</Button>
        <Drawer
          title="Select Token"
          className={styles.h100}
          placement="bottom"
          onClose={onClose}
          visible={visible}
          getContainer={false}
          maskClosable={false}
          // closeIcon={false}
          style={{ position: 'absolute' }}
        >
          <div className={styles.title}>
            <div>
              <p>Token Name</p>
            </div>
            <div>
              <p>Balance</p>
            </div>
          </div>
          <hr />

          <div className={styles.tokenlist}>
            {getTokenList(null).map((item) => (
              <div
                className={styles.item}
                onClick={() => onSelectTokenCurrent(item)}
              >
                <div>
                  <img src={item.icon} style={{ marginRight: '15px' }} />
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>0</p>
                </div>
              </div>
            ))}
          </div>
        </Drawer>
        <Drawer
          title="Select  Chain"
          className={styles.h100}
          placement="bottom"
          onClose={() => setOpen(false)}
          visible={open}
          getContainer={false}
          maskClosable={false}
          // closeIcon={false}
          style={{ position: 'absolute' }}
          bodyStyle={{ paddingTop: '0' }}
        >
          <div className={styles.tokenlist}>
            {chainList.map((item) => (
              <div
                className={styles.item}
                onClick={() => onSelectChainCurrent(item)}
              >
                <div>
                  <img src={item.icon} style={{ marginRight: '15px' }} />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Drawer>
        <Drawer
          title="Advanced Settings"
          className={styles.h100}
          placement="bottom"
          onClose={() => setVisibleSetting(false)}
          visible={visibleSetting}
          getContainer={false}
          maskClosable={false}
          // closeIcon={false}
          style={{ position: 'absolute' }}
          bodyStyle={{ paddingTop: '0' }}
        >
          <div className={styles.tokenlist}>
            <div className='flex flex-between flex-align-center'>
              <span> Gas on destination chain</span>
              <Tooltip title="The default amount allows you to perform a couple of transactions (e.g. Approve and Swap). Once you approve the transfer in your wallet, the transaction gas amount will be higher than a regular transaction as this includes the selected amount of destination gas to be sent.">
                <InfoCircleOutlined />
              </Tooltip>
            </div>
            <hr style={{ background: '#323232', margin: '10px 0px 20px 0px' }} />
            <ButtonGroup value='none' onSelect={() => { }}>
              <ButtonGroup.Item value='none'>None</ButtonGroup.Item>
              <ButtonGroup.Item value="default">Default</ButtonGroup.Item>
            </ButtonGroup>
            <Input
              style={{ marginTop: '20px' }}
              placeholder="0.0"
              prefix={<span><img src='/eth.svg' style={{ marginRight: '5px', width: '20px' }} /></span>}
              suffix={<span>Max</span>}
            />
            <div className='flex flex-between flex-align-center' style={{ marginTop: '30px' }}><span> Slippage tolerance</span>
              <Tooltip title="Your transaction will revert if the price changes unfavorably by more than this percentage">
                <InfoCircleOutlined />
              </Tooltip></div>
            <hr style={{ background: '#323232', margin: '10px 0px 20px 0px' }} />

            <ButtonGroup value='0.1' onSelect={() => { }}>
              <ButtonGroup.Item value="0.1">0.1%</ButtonGroup.Item>
              <ButtonGroup.Item value="0.5">0.5%</ButtonGroup.Item>
              <ButtonGroup.Item value="1.0">1.0%</ButtonGroup.Item>
            </ButtonGroup>
            <Input
              style={{ marginTop: '20px' }}
              placeholder="0.0"
              suffix={<span>%</span>}
            />
          </div>
        </Drawer>
      </div>

    </div>

  );
}

export default connect(({ count }: any) => ({
  count,
}))(HomePage);