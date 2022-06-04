import React from 'react'
import { Button, Card ,Select,Breadcrumb, Input} from 'antd';
import Usdt from '../assets/USDT.svg'
//import Ethereum from '../assets/ethereum-eth-logo.svg'
import '../pages/less/FarmAndPool.less'
import { Link } from 'react-router-dom';
export default function FarmAndPool() {
  return (
    <div>
        <div className='farmCardBody'>
            <Breadcrumb separator=">">
                <Breadcrumb.Item><Link to='/pool'>Pool</Link></Breadcrumb.Item>
                <Breadcrumb.Item href="">USDT</Breadcrumb.Item>
                <Breadcrumb.Item ><Link to='/farm'>Farms</Link></Breadcrumb.Item>
                <Breadcrumb.Item>USDT</Breadcrumb.Item>
            </Breadcrumb>
            <Card className='farmCard' bordered={false} style={{borderRadius: '16px',background: '#202121',width:'100%',} }>
                <div className='farmCardTop'>
                    <span style={{color : '#9F9E9F'}}>USDT</span>
                    <div className='right'>
                        <span style={{background:'grey',borderRadius:'0.25rem',fontSize:'10px',color:'#202121'}}><img  style={{width:'12px',height:'12px',}}/>Ethereum</span>
                    </div>
                </div>
                <span style={{color:'#9F9E9F'}}>Total Amount</span>
                <Input className='amountInput' prefix={<img src={Usdt} style={{width:'16px'}}></img>} suffix={<button className='suffixBtn'>max</button>}></Input>
                <Button type='primary' size='large' className='farmBtn'>Connect Wallet</Button>
            </Card>
        </div>
    </div>
  )
}
