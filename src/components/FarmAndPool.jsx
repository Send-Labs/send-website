import React from 'react'
import { Button, Card ,Select,Breadcrumb, Input} from 'antd';
import Usdt from '../assets/USDT.svg'
import Ethereum from '../assets/ETH-01.svg'
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
            <Card className='farmCard' bordered={false} style={{borderRadius: '16px',background: '#202121',width:'100%',height:'600px'} }>
                <div className='farmCardTop'>
                    <span style={{color : '#9F9E9F'}}>USDT</span>
                    <div className='right'>
                        <div style={{background:'grey',borderRadius:'0.25rem',fontSize:'10px',color:'#202121',width:'110%'}}><img src={Ethereum} style={{width:'12px',height:'12px',marginBottom:'3%',marginLeft:'3%'}}/>Ethereum</div>
                    </div>
                </div>
                <span style={{color:'#9F9E9F'}}>Total Amount</span>
                <Input className='amountInput' prefix={<img src={Usdt} style={{width:'16px'}}></img>} suffix={<button className='suffixBtn'>max</button>}></Input>
                <div className='poolBelow' style={{marginTop:'10%',height:'60%'}}>
                    <div className='blackPlace'>
                        <span className='belowLeft'>Pooled Token</span>
                        <div className='belowRight'><img></img>0.00usdc</div>
                    </div>
                    <div className='greyPlace'>
                        <span className='belowLeft'>LPT Available</span>
                        <div></div>
                    </div>
                    <div className='blackPlace'>
                        <span className='belowLeft'>LPT Farming</span>
                        <div className='belowRight'></div>
                    </div>
                    <div className='greyPlace'>
                        <span className='belowLeft'>Share of Pool</span>
                        <div className='belowRight'>0.00%</div>
                    </div>
                    <div className='blackPlace'>
                        <span className='belowLeft'>Volume (24h)</span>
                        <div className='belowRight'>$1,905,291.75</div>
                    </div>
                    <div className='greyPlace'>
                        <span className='belowLeft'>Liquidity</span>
                        <div className='belowRight'></div>
                    </div>
                </div>
                <Button type='primary' size='large' className='farmBtn'>Connect Wallet</Button>
            </Card>
        </div>
    </div>
  )
}
