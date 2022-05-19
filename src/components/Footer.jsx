import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='footerTop'>
            <span>Powered by Send Finance</span>
        </div>
        <div className='footerMid'></div>
        <div className='footerBot'>
            <label >Contact Support</label>
            <label style={{marginLeft: '24px'}}>Terms of Service</label>
            <label style={{marginLeft: '24px'}}>Migrate Liquidity from Pre-upgrade Pools</label>
        </div>
    </footer>
  )
}
