import React from 'react'
import {Button} from 'antd'
import './index.less'
import Usdt from '@/assets/USDT.svg'
import Ethereum from '@/assets/ETH-01.svg';
import Arbitrum from '@/assets/Arbitrum-01.svg';
import Fox from '@/assets/fox-logo-01-01.svg';
import Polygon from '@/assets/polygon-matic-logo.svg';
import { Link } from 'react-router-dom'
export default function PoolCard(props) {
const {index,chain}=props;
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
                <div className='tokenName'>{index>2&&'USDT'||'USDC'}</div>
              </div>
              <div className='chain'>
              <div style={{background:'#5966F3',borderRadius:'2px',fontSize:'10px',minWidth:'75px',padding:'0 10px'}}>{chain}</div>
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
