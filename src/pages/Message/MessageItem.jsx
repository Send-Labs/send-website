import React, { useEffect } from 'react'
import { Button, Card, InputNumber, Input } from 'antd';
import { Menu, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../less/Message.less';

export default function MessageItem(props) {

  const {checked}=props;
  // useEffect(()=>{

  // },)
  return (
    <div className='msg_overflow_hidden msg_shrink_0'>
      <div className={`msg_flex msg_items_center msg_cursor_pointer msg_select_none msg_border_b msg_bg_subtle_hover ${checked&&'msg_bg_subtle_night'} msg-py-2 msg-px-4`}>
        <div className='msg_flex'>
          <div className='msg_flex msg_bg_neutral_900 msg-rounded-full msg-w-14 msg-h-14 msg_items_center msg-justify-center'>
            <div className='msg-text-lg'>
              <div className='msg-xs'>Send</div>
            </div>
          </div>
        </div>
        <div className='msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate'>
          <div className='msg-truncate msg-flex-col msg-max-w-full'>
            <div>
              <div>22</div>
            </div>
            <div className='msg-truncate'>
              <div className='msg-truncate'><span style={{display:'inline-block',minWidth:'20px',height:'20px',borderRadius:'10px',textAlign:'center',background:'gray',padding:'0 3px'}}>221</span>222222222222222222222</div>
            </div>
          </div>
          <div className='msg_flex'>
           <span className="msg-opacity-30">11:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
