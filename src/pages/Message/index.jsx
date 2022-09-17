import React, { useEffect, useState } from 'react'
import { Button, Card, InputNumber, Input, Divider, Switch } from 'antd';
import { Menu, Space } from 'antd';
import { EditOutlined, SettingOutlined, PlusOutlined, ArrowLeftOutlined, MessageOutlined, UnlockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../less/Message.less';
import MessageItem from './MessageItem';
import DetailItem from './DetailItem';
import HeadImg from './HeadImg';

export default function Message() {

  const [action, setAction] = useState(0);
  // useEffect(()=>{

  // },)
  return (
    <div>
      <div className='message'>
        <div className='msg_main' >
          <div className='friendlist msg_flex msg_flex_col'>
            <div className='header msg_flex msg_flex_between msg_items_center msg_border_b'>
              <div>Message</div>
              <div onClick={() => setAction(0)}><EditOutlined /></div>
            </div>
            <div className='msg_list'>
              <MessageItem checked />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
            </div>
          </div>
          <div className='msgdetails msg-w-full msg_flex msg_flex_col'>
            {/* 新建聊天 */}
            {
              action == 0 && <>
                <div className='header msg_flex msg_flex_between msg_items_center msg_border_b'>
                  <div onClick={() => setAction(1)}><ArrowLeftOutlined />&nbsp;&nbsp;&nbsp;&nbsp;Send Message</div>
                </div>
                <div className='msg-max-w-sm'>
                  <h1 className='msg-mt-8 msg-mb-4'>Create thread</h1>
                  <p>Enter recipient address</p>
                  <Input style={{ color: 'white', background: '#040000', height: '50px' }} />
                  <p className='mst-opacity-50 msg-font-base'>Link twitter twitter.cardinal.so and domain naming.bonfida.org</p>
                  <Divider className='mst-opacity-50' style={{ background: '#ffffff' }} />
                  <div className='msg_flex msg_flex_between msg_bg_subtle_night msg-py-3 msg-px-4 msg-rounded-2xl'>
                    <span><MessageOutlined />&nbsp;&nbsp;Off-chain</span>
                    <Switch />

                  </div>
                  <br />
                  <div className='msg_flex msg_flex_between msg_bg_subtle_night msg-py-3 msg-px-4 msg-rounded-2xl'>
                    <span><UnlockOutlined />&nbsp;&nbsp;Unencrypted</span>
                    <Switch />

                  </div>
                  <br />
                  <Button type='primary' size='large' className='cardButton'>Create thread</Button>
                </div>
              </>
            }
            {/* 聊天记录 */}
            {
              action == 1 && <>
                <div className='header msg_flex msg_flex_between msg_items_center msg_border_b'>
                  <HeadImg />
                  <div><SettingOutlined /></div>
                </div>
                <div className='detail_list msg_flex msg-flex-col-reverse'>
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem self/>
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem /><DetailItem self/><DetailItem self/><DetailItem self/><DetailItem self/>
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                </div>
                <div style={{ padding: '10px' }}>
                  <Input style={{ color: 'white', background: '#040000' }} className='sendInput' suffix={
                    <PlusOutlined style={{ color: '#ffffff' }} />
                  } />
                  <p>0/100</p>
                </div>
              </>
            }

          </div>
        </div>
      </div>
    </div>
  )
}
