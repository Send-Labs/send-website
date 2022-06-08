import React from 'react'
import {Button} from 'antd'
import '../pages/less/PoolCard.less'
import Usdt from '../assets/USDT.svg'
import Ethereum from '../assets/ETH-01.svg'
import { Link } from 'react-router-dom'
export default function PoolCard() {

  return (
    <div id='poolCard'>
      <Link to='/farm'>
        <Button className='cardBtn' >
          
          <div className='mainCard'>
            <div className='cardTop'>
              <div className='topLeft'>
                <div className='icon'>
                  <img src={Usdt}></img>
                </div>
                {/* <label>Token</label> */}
                <div className='tokenName'>USDT</div>
              </div>
              <div className='chain'>
              <div style={{background:'grey',borderRadius:'0.25rem',fontSize:'10px',width:'110%'}}><img src={Ethereum} style={{width:'12px',height:'12px',marginBottom:'3%',marginLeft:'3%'}} alt=''/>Ethereum</div>
              </div>

            </div>
            <div className='cardBottom'>
              <div className='bot'>
                <div className='liquidityNum'>$111M</div>
                <label>Liquidity</label>
              </div>
              <div className='bot'>
                <div className='volumeNum'>620.5</div>
                <label>Volume</label>
              </div>
              <div className='bot'>
                <div className='walletBalance'>-</div>
                <label>Wallet Balance</label>
              </div>
            </div>
          </div>
        </Button>
      </Link>
    </div>    
  )
}
