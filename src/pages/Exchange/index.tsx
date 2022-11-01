// import yayJpg from '@/assets/yay.jpg';
import { connect, FormattedMessage } from 'umi';
import { useModel } from 'umi';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect, useState } from 'react';
import TokenInput from '@/components/TokenInput';
import { SettingOutlined, SwapOutlined } from '@ant-design/icons';
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
  const onSelectTokenCurrent = (item) => {
    // setR1(item);
    setVisible(false);
  };
  return (
    <div style={{ padding: '50px 0' }} className='flex flex-center'>
      <div className='flex flex-column gap-5' style={{ width: '375px', backgroundColor: 'rgba(32, 33, 33, 0.8)', padding: '1.25rem', border: '1px solid #2f343e', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
        <div className='flex flex-between gap-2'>
          <span>Exchange</span>
          <span><SettingOutlined /></span>
        </div>
        <TokenInput selectToken={() => { setVisible(true); }} title="From" />
        <div style={{ textAlign: 'center' }}>
          <SwapOutlined rotate={90} style={{ color: 'white' }} />
        </div>
        <TokenInput selectToken={() => { setVisible(true); }} title="To" choose/>
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
        <Button>Connect</Button>
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
                  <img src={item.icon} />
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>0</p>
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