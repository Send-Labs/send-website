import React from 'react'
import {Button} from 'antd'
import '../pages/less/PoolCard.less'
import Usdt from '../assets/USDT.svg'
import Ethereum from '../assets/ethereum-eth-logo.png'
import { Link } from 'react-router-dom'
export default function PoolCard() {

  return (
    <div id='poolCard'>
      <Link to='/farm'>
        <Button className='cardBtn' >
          
          <div className='mainCard'>
            <div className='cardLeft'>
              <div className='icon'>
                <img src={Usdt}></img>
              </div>
              {/* <label>Token</label> */}
              <div className='tokenName'>USDT</div>
              <label>Wallet Balance</label>
              <div className='walletBalance'>-</div>
            </div>
            <div className='cardRight'>
              <div className='chain'>
              <span style={{background:'grey',borderRadius:'0.25rem',fontSize:'10px'}}><img src={Ethereum} style={{width:'12px',height:'12px '}}/>Ethereum</span>
              </div>
              {/* <label>Liquidity</label> */}
              
              <div className='liquidityNum'>$111M</div>
              <label>Volume(24h)</label>
              <div className='volumeNum'>620.5</div>
            </div>
          </div>
        </Button>
      </Link>
    </div>    
  )
}
