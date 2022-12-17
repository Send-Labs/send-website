// import yayJpg from '@/assets/yay.jpg';
import { connect, FormattedMessage } from 'umi';
import { useModel } from 'umi';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect, useState } from 'react';
import TokenInput from '@/components/TokenInput';
import { SettingOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { getNetworks, getTokenList, pools, getToken } from '@/constants';
import { Button, Drawer } from 'antd';
import styles from './index.less';
const HomePage = (props: any) => {
  const { library, deactivate, chainId, account, active, activate } = useWeb3React();
  const injected = new InjectedConnector({
    supportedChainIds: [97, 56],
  });
  useEffect(() => {
    activate(injected, (error) => {

    });

  }, []);
  const [visible, setVisible] = useState(false);
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
    {
      'symbol': 'Ethereum',
      'icon': '/eth.svg'
    },
    {
      'symbol': 'BNB Chain',
      'icon': '/bnb.svg'
    },
    {
      'symbol': 'Polygon',
      'icon': '/polygon.svg'
    },
    {
      'symbol': 'Optimism',
      'icon': '/optimism.png'
    }
  ];
  const [currentToToken, setCurrentToToken] = useState(getTokenList(null)[0]);
  const [currentToChain, setCurrentToChain] = useState(chainList[0]);
  const [currentFromToken, setCurrentFromToken] = useState(getTokenList(null)[0]);
  const [currentFromChain, setCurrentFromChain] = useState(chainList[1]);
  const [selectFrom, setSelectFrom] = useState(true);

  return (
    <div style={{ padding: '50px 0' }} className='flex flex-center'>
      <div className='flex flex-column gap-5' style={{ width: '375px', backgroundColor: 'rgba(32, 33, 33, 0.8)', padding: '1.25rem', border: '1px solid #2f343e', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
        <div className='flex flex-between gap-2'>
          <span>Transfer</span>
          <span><SettingOutlined /></span>
        </div>
        <TokenInput chooseToken max currentChain={currentFromChain} currentToken={currentFromToken} selectToken={() => { setVisible(true); setSelectFrom(true); }} title="From" />
        <div style={{ textAlign: 'center' }}>
          <div className='swap-hover'>
            <ArrowDownOutlined style={{ color: '#ffffff' }} />
          </div>
        </div>
        <TokenInput currentChain={currentToChain} currentToken={currentToToken} selectToken={() => { setVisible(true); setSelectFrom(false); }} selectChain={() => { setOpen(true); setSelectFrom(false); }} title="To" choose />
        <div>
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
        </div>
        <Button className='wbtn' style={{ marginTop: '-10px', height: 'auto', padding: '8px 0' }}>Connect Wallet</Button>
        <Drawer
          title="Select a Token"
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
          title="Select Target Chain"
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
                  <p>{item.symbol}</p>
                </div>
              </div>
            ))}
          </div>
        </Drawer>
      </div>

    </div>

  );
}

export default connect(({ count }: any) => ({
  count,
}))(HomePage);