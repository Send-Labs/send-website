import React from 'react'
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined} from '@ant-design/icons';
import cbridge from '../assets/cbridge.png'
import sendFinance from '../assets/Send-Logo.svg'
import Tabs from './Tabs';


export default function Header() {
    const menu = (
        <Menu
          items={[
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="" style={{color :'white'}}>
                  Docs
                </a>
              ),
            },
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="" style={{color :'white'}}>
                  FAQ
                </a>
              ),
            },
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="" style={{color :'white',}}>
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
          className="menu" style={{textAlign:'center',backgroundColor:'rgb(35, 37, 48)',borderRadius:'12px'}} />
      );
  return (
    <header>
            
                <div className='left'>
                    <img src={sendFinance} className='topImage' ></img>
                    {/* <Button className='btn'>1</Button>
                    <Button className='btn'>1</Button>
                    <Button className='btn'>1</Button> */}
                </div>
                
                <div className='mid'>
                  <Tabs></Tabs>
                </div>
                <div className='right'>
                  <Button type='primary' className='topConnect' style={{borderRadius:'12px',marginTop:'3px'}}>Connect Wallet</Button>
                  <Dropdown overlay={menu} placement="bottomRight"  overlayClassName='dropdown'>
                      <Button className='topBotton'><EllipsisOutlined style={{color : 'white' , fontSize : '25px',marginTop:'-8px'}}/></Button>
                  </Dropdown>
                </div>
    </header>
  )
}