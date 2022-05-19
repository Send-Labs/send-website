import React from 'react'
import '../pages/less/DropdownBigTop.less'
import Ethereum from '../assets/ethereum-eth-logo.png'
export default function DropdownBig() {
  return (
    <div class="box">
        <select>
            <option><span><img src={Ethereum} style={{width:'16px',height:'16px'}}/>Ethereum</span></option>
            <option>BNB Chain</option>
            <option>Arbitrum</option>
        </select>
    </div>
  )
}
