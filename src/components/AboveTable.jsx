import React from 'react'
import MutiChoose from './MutiToken'
import { Tabs } from 'antd'
export default function AboveTable() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <div className='aboveTable'>
      <div className='leftPart'>
      
      </div>
      <div className='rightPart'>
        {/* <MutiChoose></MutiChoose> */}
      </div>

    </div>
  )
}
