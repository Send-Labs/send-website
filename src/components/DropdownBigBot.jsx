import React from 'react'
import '../pages/less/DropdownBigBot.less'
import USDC from '../assets/usd-coin-usdc-logo.png'
export default function DropdownBig() {
  return (
    <div class="box_bot">
        <select>
            <option><img src={USDC} style={{width:'10px',height:'10px'}}/>Ethereum</option>
            <option>BNB Chain</option>
            <option>Arbitrum</option>
        </select>
    </div>
  )
}
