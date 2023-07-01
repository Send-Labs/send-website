import { connect } from 'umi';
import { useEffect, useState, useContext } from 'react';
import TokenInput from '@/components/TokenInput';
import { SettingOutlined, ArrowDownOutlined, InfoCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { getTokenList } from '@/constants';
import { Button, Drawer, Tooltip, Input, Switch, Modal, Table, Tag, Space } from 'antd';
import ButtonGroup from '@/components/SendButtonGroup';
import { hooks } from '@/connectors/metaMask'
import WalletProvider from "@/layouts/WalletProvider";
import { ethers } from 'ethers';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract } from '@ethersproject/contracts';
import { CHAINS } from '@/chains'
import USDTABI from '@/abis/USDTARB.json'
import {SEND_CONTRACT_ABI} from '@/abis/SEND'
import { getUsdtContractAddr, getSendContractAddr } from '@/constants/addresses'
import styles from './index.less';
const HomePage = (props: any) => {
  const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState();
  const [sendContract, setSendContract] = useState<any>()
  const [balance, setBalance] = useState();
  const [direction, setDirection] = useState(0);
  const [visibleSetting, setVisibleSetting] = useState(false);
  const [allowance, setAllowance] = useState(0);
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
    if (direction == 0) {
      switchChain(item.id);
    }
    else {
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
      'id': 56,
      'name': 'BNB Chain',
      'icon': '/bnb.svg'
    },
    // {
    //   'name': 'Polygon',
    //   'icon': '/polygon.svg'
    // },
    {
      'id': 42161,
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
      // approveToken();
      checkApproval();
      setSendContract(new ethers.Contract(getSendContractAddr(chainId), SEND_CONTRACT_ABI, provider?.getSigner()));
      const usdtContract = new ethers.Contract(getUsdtContractAddr(chainId), USDTABI, provider);
      usdtContract.balanceOf(accounts[0]).then(balance => {
        setBalance(ethers.utils.formatUnits(balance, 6));
      }).catch(error => {
        console.error('Failed to fetch USDT balance:', error);
      });
    }
  }, [provider, accounts])
  const handleSwitchChain = () => {
    debugger;
    setCurrentFromChain(currentToChain);
    setCurrentToChain(currentFromChain);
    switchChain(currentToChain.id)
  }
  async function approveToken() {
    debugger;
    // 获取 MetaMask 提供的以太坊提供程序
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // 代币合约地址和目标地址
    const tokenContractAddress = getUsdtContractAddr(chainId);
    const targetAddress = getSendContractAddr(chainId);

    // 获取当前 MetaMask 账户
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();

    // 创建代币合约实例
    const tokenContract = new ethers.Contract(tokenContractAddress, USDTABI, signer);
    debugger
    // 构建 approve 函数的交易对象
    const approveTx = await tokenContract.approve(targetAddress, ethers.constants.MaxUint256);

    // 发送交易并等待确认
    const approveTxResponse = await approveTx.wait();

    console.log('Transaction hash:', approveTxResponse.transactionHash);
    console.log('Transaction receipt:', approveTxResponse);
  }
  async function checkApproval() {
    // 连接到以太坊网络
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // 设置要查询的地址和代币合约地址
    const ownerAddress = accounts[0];
    const spenderAddress = getSendContractAddr(chainId);
    const tokenContractAddress = getUsdtContractAddr(chainId);


    // 创建代币合约实例
    const tokenContract = new ethers.Contract(tokenContractAddress, USDTABI, provider);

    // 调用 allowance 函数查询已授权的代币数量
    const allowance = await tokenContract.allowance(ownerAddress, spenderAddress);

    setAllowance(allowance.toString());
  }

  return (
    <div style={{ padding: '50px 0' }} className='flex flex-center'>
      <div className='flex flex-column gap-5' style={{ width: '375px', backgroundColor: '#1c1b1b', padding: '1.25rem', border: '1px solid #2f343e', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
        <div className='flex flex-between flex-align-center' style={{ marginBottom: '15px' }}>
          <span>Mode</span>

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
          selectChain={() => { setOpen(true); setDirection(0); }}
          title="From"
          maxValue={balance}
          desc={balance >= 0 && `Balance: ${balance} ${currentFromToken?.name}`}
          choose
          chooseToken />
        <div style={{ textAlign: 'center' }}>
          <div className='swap-hover' onClick={handleSwitchChain}>
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
          selectChain={() => { setOpen(true); setDirection(1); }}
          title="To"
          desc={value&&`Expect to receive: ${value} ${currentToToken?.name}`}
          choose />
        <Button onClick={async() => {
          if (!chainId) {
            return;
          }
          if (allowance == 0) {
            approveToken();
            return;
          }
          debugger;
          // console.log('ethers.BigNumber.from(value).toBigInt()',ethers.BigNumber.from(""+value).toBigInt());
          sendContract.sendToken(currentToChain.id, getUsdtContractAddr(chainId), accounts[0],BigNumber.from(value*1000000).toString()).then(data=>{
            debugger;
          }).catch(err => console.log(err, 'sendToken'));
        //  const result=await 
        //   console.log(result);
       }} style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} type='primary' className='topConnect'>{chainId && (allowance == 0 && 'Approve' || 'Confirm') || 'Connect Wallet'}</Button>
        <Drawer
          title="Select Token"
          className={styles.h100}
          placement="bottom"
          onClose={onClose}
          open={visible}
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
          open={open}
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
          open={visibleSetting}
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
            </div>111111
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