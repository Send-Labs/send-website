import React from 'react'
import { Table } from 'antd'
import '../pages/less/YourPools.less'
import Ethereum from '../assets/ethereum-eth-logo.png'
import USDC from '../assets/usd-coin-usdc-logo.png'
import BUSD from '../assets/binance-usd-busd-logo.png'
export default function YourPools() {
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' ,},
        { title: 'Network', dataIndex: 'network', key: 'network' ,},
        // { title: 'Your Liquidity', dataIndex: 'yourLiquitidy', key: 'yourLiquitidy' ,},
        { title: 'Pool Share', dataIndex: 'poolshare', key: 'poolshare', },
        { title: 'Liquidity', dataIndex: 'liquidity', key: 'liquidity' ,},
        { title: 'Your Pool Tokens', dataIndex: 'yourpooltokens', key: 'yourpooltokens' ,},
        { title: 'Pooled Tokens', dataIndex: 'pooledtoken', key: 'pooledtoken' ,},
        { title: 'Volume(24h)', dataIndex: 'volumeday', key: 'volumeday' ,},
        // { title: 'APY', dataIndex: 'apy', key: 'apy', },
        // {
        //   title: 'Action',
        //   dataIndex: '',
        //   key: 'x',
        //   render: () => <a>Delete</a>,
        // },
      ];
      
      const data = [
        {
          key: 1,
        //   name: <span><img src={USDC} style={{width:'32px',height:'32px ',marginRight:'3px'}}/>USDC</span> ,
        //   network:<span style={{background:'grey',height:'32px',borderRadius:'0.25rem',fontSize:'10px',}}><img src={Ethereum} style={{width:'12px',height:'12px '}}/>Ethereum</span>,
        //   liquidity:'---',
        //   volume:'---'
        //   chain: ,
        //   yourliquidity:,

        },
        // {
        //   key: 2,
        // //   name:<span><img src={BUSD} style={{width:'32px',height:'32px ',marginRight:'3px'}}/>BUSD</span>,
        // //   network:<span style={{background:'grey',height:'32px',borderRadius:'0.25rem',fontSize:'10px',}}><img src={Ethereum} style={{width:'12px',height:'12px '}}/>Ethereum</span>,
        // },
        // {
        //   key: 3,

        // },
        // {
        //   key: 4,
        // },
      ];
  return (
    <div id='poolTable'>
            <Table
            columns={columns}
            pagination={false}
            // expandable={{
            // expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
            // rowExpandable: record => record.name !== 'Not Expandable',
            // }}
            dataSource={data}

        />
    </div>
  )
}
