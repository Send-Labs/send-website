import React from 'react'
import '../pages/less/DropdownSmall.less'
export default function DropdownSmall() {
  return (
    <span class="custom-dropdown small">
        <select>
            <option>USDC</option>
            <option>USDT</option>  
            <option>BUSD</option>

        </select>
    </span>
  )
}
