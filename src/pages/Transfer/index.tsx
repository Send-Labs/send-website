// import yayJpg from '@/assets/yay.jpg';
import { connect } from 'umi';
import { useEffect, useState, useContext } from 'react';
import TokenInput from '@/components/TokenInput';
import { SettingOutlined, ArrowDownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { getTokenList } from '@/constants';
import { Button, Drawer, Tooltip, Input, Switch } from 'antd';
import ButtonGroup from '@/components/SendButtonGroup';
import { hooks } from '@/connectors/metaMask'
import WalletProvider from "@/layouts/WalletProvider";
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

import { CHAINS } from '@/chains'

import styles from './index.less';
const HomePage = (props: any) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState();
  const [direction, setDirection] = useState(0);
  const [visibleSetting, setVisibleSetting] = useState(false);
  const chainId = useChainId()
  const { currentChain, switchChain } = useContext(WalletProvider)!;
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
    if(direction==0){
      switchChain(item.id);
    }
    else{
      setCurrentToChain(item);
    }
  };
  const [open, setOpen] = useState(false);
  const chainList = [
    // {
    //   'name': 'Ethereum',
    //   'icon': '/eth.svg'
    // },
    {
      'id':56,
      'name': 'BNB Chain',
      'icon': '/bnb.svg'
    },
    // {
    //   'name': 'Polygon',
    //   'icon': '/polygon.svg'
    // },
    {
      'id':42161,
      'name': 'Arbitrum',
      'icon': '/arb.svg'
    }
  ];
  const [currentToToken, setCurrentToToken] = useState(getTokenList(null)[0]);
  const [currentToChain, setCurrentToChain] = useState(chainList[1]);
  const [currentFromToken, setCurrentFromToken] = useState(getTokenList(null)[0]);
  const [currentFromChain, setCurrentFromChain] = useState(chainList[1]);
  const accounts = useAccounts()
  const provider = useProvider()

  useEffect(() => {
    setCurrentFromChain(CHAINS[chainId || 56]);
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
  const handleSwitchChain = () => {
    setCurrentFromChain(currentToChain);
    setCurrentToToken(currentFromChain);
    switchChain(currentToChain.id)
  }
  return (
    <div style={{ padding: '50px 0' }} className='flex flex-center'>
      <div className='flex flex-column gap-5' style={{ width: '375px', backgroundColor: '#1c1b1b', padding: '1.25rem', border: '1px solid #2f343e', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
        <div className='flex flex-between flex-align-center' style={{ marginBottom: '15px' }}>
          <span>Mode{currentChain}</span>

          {/* 先隐藏 */}
          {/* <div style={{ cursor: 'pointer' }} onClick={() => setVisibleSetting(true)}><SettingOutlined /></div> */}
          <div style={{ marginRight: '-10px' }}>
            <ButtonGroup value='FlashBridge' onSelect={() => { }}>
              <ButtonGroup.Item value="FlashBridge">FlashBridge</ButtonGroup.Item>
              <ButtonGroup.Item value="zkBridge">zkBridge</ButtonGroup.Item>
            </ButtonGroup>
          </div>
        </div>

        <TokenInput
          key="ti1"
          defaultValue={value}
          onChange={(v: any) => setValue(v)}
          max
          currentChain={currentFromChain}
          currentToken={currentFromToken}
          selectToken={() => { setVisible(true); }}
          selectChain={() => { setOpen(true);setDirection(0); }}
          title="From"
          // desc={`Balance: 0 ${currentFromToken?.name}`}
          choose
          chooseToken />
        <div onClick={handleSwitchChain} style={{ textAlign: 'center' }}>
          <div className='swap-hover'>
            <ArrowDownOutlined style={{ color: '#ffffff' }} />
          </div>
        </div>
        <TokenInput
          key="ti2"
          defaultValue={value}
          onChange={(v: any) => setValue(v)}
          currentChain={currentToChain}
          currentToken={currentToToken}
          selectToken={() => { setVisible(true); }}
          selectChain={() => { setOpen(true);setDirection(1); }}
          title="To"
          desc={value && `Expect to receive:${value} ${currentToToken?.name}`}
          choose />
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
        <Button style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} type='primary' className='topConnect'>{chainId && 'Confirm' || 'Connect Wallet'}</Button>
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