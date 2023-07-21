import React, { useEffect, useState } from 'react'
import { Menu, Dropdown, Button, Divider, Space, Modal, Table } from 'antd';
import { CloseOutlined, EllipsisOutlined, HistoryOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import cbridge from '../assets/cbridge.png'
import sendFinance from '@/assets/Send-Logo.svg'
import Tabs from './Tabs';
import { hooks } from '@/connectors/metaMask'
import MetaMaskCard from "../MetaMaskCard";
import { hideMiddleChars } from "@/utils";
import { getBlockExplorerUrls } from "@/constants/addresses";
import './index.less'
import { connect } from 'umi';

 function Header(props:any) {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="" style={{ color: 'white' }}>
              Docs
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="" style={{ color: 'white' }}>
              FAQ
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="" style={{ color: 'white', }}>
              3rd menu item
            </a>
          ),
        },
        // {
        //     label: (
        //       <Button type='primary' style={{borderRadius:'12px'}}>Connect Wallet</Button>
        //     ),
        //   }
      ]}
      className="menu" style={{ textAlign: 'center', backgroundColor: 'rgb(35, 37, 48)', borderRadius: '12px' }} />
  );
  const [historyOpen, setHistoryOpen] = useState(false);
  const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text:string) => <a>{hideMiddleChars(text)}</a>,
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
      render: (text:string,data:any) => <a target='_black' href={getBlockExplorerUrls(text)+'tx/'+data.fromScan} style={{display:'flex',alignItems:'center',gap:'5px'}}><img width={16} src={text=="56"&&"/bnb.svg"||"/arb.svg"}/>{text=="56"&&'BNB Chain'||'Arbitrum One'}</a>,
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
      render: (text:string,data:any) =>  <a target='_black' href={`${getBlockExplorerUrls(text)}address/${data.toScan}#tokentxns`} style={{display:'flex',alignItems:'center',gap:'5px'}}><img width={16} src={text=="56"&&"/bnb.svg"||"/arb.svg"}/>{text=="56"&&'BNB Chain'||'Arbitrum One'}</a>,
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
      render: (text:string) =>  <span style={{display:'flex',alignItems:'center',gap:'5px'}}><img width={16} src={"/usdt.svg"}/>{text}</span>
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Mode',
      dataIndex: 'mode',
      key: 'mode',
      render:()=>'FlashBridge'
    },
    {
      title: 'Time',
      dataIndex: 'cratetime',
      key: 'time',
      render:(text:string)=>dayjs(text).format('YYYY-MM-DD HH:ss:mm')
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text:string) => 'done'
    },
  ];
  const data = [
    {
      key: '1',
      address:'0xeba...89e1',
      from: 'BNB Chain',
      to: 'Arbitrum',
      token: 'USDT',
      amount: '1.0000',
      mode: 'Flashbridge',
      time: '2023-06-27 00:00:00',
      status: 'Success',
    },
    {
      key: '2',
      address:'0xeba...89e1',
      from: 'BNB Chain',
      to: 'Arbitrum',
      token: 'USDT',
      amount: '1.0000',
      mode: 'Flashbridge',
      time: '2023-06-27 00:00:00',
      status: 'Success',
    },
    {
      key: '3',
      address:'0xeba...89e1',
      from: 'BNB Chain',
      to: 'Arbitrum',
      token: 'USDT',
      amount: '1.0000',
      mode: 'Flashbridge',
      time: '2023-06-27 00:00:00',
      status: 'Success',
    },
  ];
  const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks
  const chainId = useChainId();
  useEffect(()=>{
    console.log('propsprops',props);
  });
  return (
    <header style={{ padding: '0 30px' }}>

      <div className='left' style={{ display: 'flex', alignItems: 'center', width: '200px' }}>
        <img src={sendFinance} className='topImage' ></img>
        {/* <Button className='btn'>1</Button>
                    <Button className='btn'>1</Button>
                    <Button className='btn'>1</Button> */}
      </div>

      <div className='mid' style={{ display: 'flex', alignItems: 'center' }}>
        <Tabs></Tabs>
      </div>
      <div className='right' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {chainId && <Button onClick={() => setHistoryOpen(true)} style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} type='primary' className='topConnect'>
          <HistoryOutlined /> History
        </Button>}
        <MetaMaskCard />
        {/* <Button type='primary' className='topConnect'>Connect Wallet</Button> */}

      </div>
      <Modal width={1000} open={historyOpen} onCancel={() => setHistoryOpen(false)} footer={null} closeIcon={<CloseOutlined style={{ color: '#fff' }} />}>
        <Table pagination={false} columns={columns} dataSource={props.history.data} />
      </Modal>
    </header >
  )
}


export default connect(({ history }: any) => ({
  history,
}))(Header);
