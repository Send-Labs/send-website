import React from 'react'
import { Menu, Dropdown, Button,Divider,Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import cbridge from '../assets/cbridge.png'
import sendFinance from '@/assets/Send-Logo.svg'
import Tabs from './Tabs';
import MetaMaskCard from "../MetaMaskCard";

import './index.less'

export default function Header() {
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
      <div className='right'>
       <MetaMaskCard />
          {/* <Button type='primary' className='topConnect'>Connect Wallet</Button> */}

      </div>
    </header >
  )
}
