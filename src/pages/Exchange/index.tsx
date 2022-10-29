// import yayJpg from '@/assets/yay.jpg';
import { connect, FormattedMessage } from 'umi';
import { useModel } from 'umi';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect } from 'react';
import TokenInput from '@/components/TokenInput';
import { SettingOutlined, SwapOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const HomePage = (props: any) => {
  const { library, deactivate, chainId, account, active, activate } = useWeb3React();
  const injected = new InjectedConnector({
    supportedChainIds: [97, 56],
  });
  useEffect(() => {
    activate(injected, (error) => {

    });
  }, []);
  return (
    <div style={{padding:'50px 0'}} className='flex flex-center'>
  <div className='flex flex-column gap-5' style={{ width: '375px', backgroundColor: 'rgba(32, 33, 33, 0.8)', padding: '1.25rem', border: '1px solid #2f343e', borderRadius: '1rem' }}>
      <div className='flex flex-between gap-2'>
        <span>Exchange</span>
        <span><SettingOutlined /></span>
      </div>
      <TokenInput />
      <div style={{ textAlign: 'center' }}>
        <SwapOutlined rotate={90} style={{ color: 'white' }} />
      </div>
      <TokenInput />
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
    </div>
    </div>
  
  );
}

export default connect(({ count }: any) => ({
  count,
}))(HomePage);