import React from 'react'
import { Button, Card ,Select, InputNumber} from 'antd';
import { Menu, Space } from 'antd';
import { RetweetOutlined , SettingOutlined,DownOutlined,SwapOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import DropdownSmall from '../components/DropdownSmall';
import DropdownSmallBot from '../components/DropdownSmallBot';
import DropdownBigTop from '../components/DropdownBigTop';
import DropdownBigBot from '../components/DropdownBigBot';
// import Dropdown from '../components/Dropdown';
import './less/Transfer.less'

export default function Transfer() {
  const {Option} = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
        <div id='cardBody'>
            <Card className='mainCard' bordered={false} style={{marginTop: '45px', borderRadius: '16px',background: 'rgb(35, 37, 48)',} }>
                <div className='transferItemTop'>
                  <div className='transferItemTopLeft'>
                    <label style={{color : 'white'}}>From</label>
                    {/* <Select defaultValue="Ethereum Mainnet" style={{ width: 200 }} onChange={handleChange} dropdownStyle={{background: 'black',color: 'white'}} className='selectStyle'>
                      <Option value="Ethereum Mainnet">Ethereum Mainnet</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select> */}
                    {/* <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                      </Select> */}
                      <DropdownBigTop/>
                      <DropdownSmall/>
                      {/* <Dropdown></Dropdown> */}
                  </div>
                  <div className='transferItemTopRight'>
                  <Link to=''><SettingOutlined style={{color : 'white'}}/></Link>
                  </div>
                </div>
                <Card style={{padding: '15px 0px',background: 'rgb(23, 23, 26)',marginTop: '8px',borderRadius: '16px',border: 'none'}}>
                  <div className='inside'>
                    <div className='topLine'>
                      <label className='labelStyle'>Send:</label>
                      
                    </div>
                    <div className='botLine'>
                      <InputNumber min={0.0}  max={10} defaultValue={0.0} bordered={false} style={{color : 'white'}}/>

                    </div>
                  </div>
                </Card>
                <div className='turnBtn'>
                  <Button className='turnAround' style={{fontSize:'20px'}} ><SwapOutlined rotate={90} style={{color : 'white'}}/></Button>
                </div>
                <div className='transferItemTop'>
                  <div className='transferItemTopLeft'>
                    <label style={{color : 'white'}}>To</label>
                    {/* <Select defaultValue="Ethereum Mainnet" style={{ width: 200 ,}} onChange={handleChange} dropdownStyle={{background: 'black',color: 'white'}} dropdownClassName="dropStyle">
                      <Option value="Ethereum Mainnet">Ethereum Mainnet</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select> */}
                    <DropdownBigBot />
                    <DropdownSmallBot/>
                    </div>
                    <div className='transferItemTopRight'>
                    
                  </div>
                </div>
                <Card style={{padding: '15px 0px',background: 'rgb(23, 23, 26)',marginTop: '8px',borderRadius: '16px',border: 'none'}}>
                  <div className='topLine'>
                    <label className='labelStyle'>Receive (estimated):</label>
                  </div>
                  <div className='botLine'>
                    <InputNumber min={0.0}  max={10} defaultValue={0.0} bordered={false} style={{color : 'white'}}/>
                  </div>
                </Card>
                <div className='error'></div>
                <Button type='primary' size='large' className='cardButton'>Connect Wallet</Button>
            </Card>
        </div>
    </div>
  )
}
