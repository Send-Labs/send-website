import React from 'react'
import { Button } from 'antd'
import { RedoOutlined } from '@ant-design/icons'
import './less/Pool.less'
import PoolCard from '../components/PoolCard'
import PoolTable from '../components/PoolTable'
import AboveTable from '../components/AboveTable'
import { Tabs } from 'antd'
import MutiToken from '../components/MutiToken'
import MutiChoose from '../components/MutiChoose'
import YourPools from '../components/YourPools'
export default function Pool() {
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }
    const mutiChoose=<div style={{display : 'flex',}}><MutiChoose></MutiChoose></div>;
  return (
    <div id='pool'>
        <div className='headShow'>
            <div className='headLeft'>
                {/* <label style={{color : 'white',fontSize : '18px'}}>Your Liquidity Overview</label> */}
            </div>
            <div className='headRight'>
                {/* <Button shape='circle' ><RedoOutlined /></Button> */}
            </div>
        </div>
        {/* <Button type='primary' className='connectBtn' style={{marginTop:'20px'}}>Connect Wallet</Button> */}
        <div className='cardShow'>
            <PoolCard></PoolCard>
            <PoolCard></PoolCard>
            <PoolCard></PoolCard>
            <PoolCard></PoolCard>
            <PoolCard></PoolCard>
            <PoolCard></PoolCard>
            <PoolCard></PoolCard>
            <PoolCard></PoolCard>
        </div>
        <div className='aboveTable'>
            <AboveTable></AboveTable>
        </div>
        <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={mutiChoose}> 
            <TabPane tab="All Pools" key="1">
                <div className='talbeShow'>
                    <PoolTable></PoolTable>
                </div>
            </TabPane>
            <TabPane tab="Your Pools" key="2">
            <div>
                <YourPools></YourPools>
            </div>
            </TabPane>
        </Tabs>

    </div>
  )
}
