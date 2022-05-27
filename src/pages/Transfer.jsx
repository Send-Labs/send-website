import React from 'react'
import { Button, Card ,Select, InputNumber, Input} from 'antd';
import { Menu, Space } from 'antd';
import { CloseOutlined , SettingOutlined,DownOutlined,SwapOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import DropdownSmall from '../components/DropdownSmall';
import DropdownSmallBot from '../components/DropdownSmallBot';
import DropdownBigTop from '../components/DropdownBigTop';
import DropdownBigBot from '../components/DropdownBigBot';
import './less/Transfer.less'

export default function Transfer() {
  const {Option} = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  };
  const advancedshow = function(){
    var advance = document.getElementsByClassName('advanceCard');
    console.log(advance)
    advance[0].style.visibility = 'visible';
  };
  const advancedhidden = function(){
    var advance = document.getElementsByClassName('advanceCard')
    advance[0].style.visibility = 'hidden';
  };
  const advanceInputChange = function () {
    var advanceinputchange = document.getElementsByClassName('advanceInput');
    console.log(advanceinputchange[0]);
    advanceinputchange[0].value = 0.1 ;
  };
  return (
    <div>
        <div id='cardBody'>
            <Card className='mainCard' bordered={false} style={{marginTop: '45px', borderRadius: '16px',background: '#202121',} }>
                <div className='transferItemTop'>
                  <div className='transferItemTopLeft'>
                    <label style={{color : 'white'}}>From</label>
                      <DropdownBigTop/>
                      <DropdownSmall/>
                  </div>
                  <div className='transferItemTopRight'>
                  <Button  onClick={advancedshow} type="link" icon={<SettingOutlined style={{color : 'white'}} />} ></Button>
                  </div>
                </div>
                <Card style={{padding: '15px 0px',background: 'rgb(23, 23, 26)',marginTop: '8px',borderRadius: '16px',border: 'none'}}>
                  <div className='inside'>
                    <div className='topLine'>
                      <label className='labelStyle'>Send:</label>
                      
                    </div>
                    <div className='botLine'>
                      <InputNumber min={0.0}  max={10} defaultValue={0.0} bordered={false} style={{color : 'white'}}/>

                    </div>
                  </div>
                </Card>
                <div className='turnBtn'>
                  <Button className='turnAround' style={{fontSize:'20px'}} ><SwapOutlined rotate={90} style={{color : 'white'}}/></Button>
                </div>
                <div className='transferItemTop'>
                  <div className='transferItemTopLeft'>
                    <label style={{color : 'white'}}>To</label>
                    <DropdownBigBot />
                    <DropdownSmallBot/>
                    </div>
                    <div className='transferItemTopRight'>
                    
                  </div>
                </div>
                <Card style={{padding: '15px 0px',background: 'rgb(23, 23, 26)',marginTop: '8px',borderRadius: '16px',border: 'none'}}>
                  <div className='topLine'>
                    <label className='labelStyle'>Receive (estimated):</label>
                  </div>
                  <div className='botLine'>
                    <InputNumber min={0.0}  max={10} defaultValue={0.0} bordered={false} style={{color : 'white'}}/>
                  </div>
                </Card>
                <div className='error'></div>
                <Button type='primary' size='large' className='cardButton'>Connect Wallet</Button>
            </Card>
            <Card className='advanceCard' bordered={false} style={{borderRadius: '16px',background: '#202121',visibility: 'hidden',position:'absolute',top:'0',width:'100%',height:'517px',} }>
              <div className='advanceTop' style={{transform:'none',transition:'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms'}}>
                <span style={{color:'white',fontSize:'16px'}}>Slippage tolerance</span>
                <Button  onClick={advancedhidden} type="link" icon={<CloseOutlined style={{color : 'white'}}/>} ></Button>
              </div>
              <hr style={{border:'0',backgroundColor:'#757575',height:'1px'}}/>
              <div className='advanceBody'>
                <div className='advanceButton'>
                  <Button onClick={advanceInputChange} style={{width:'64px'}}>0.1%</Button>
                  <Button onClick={advanceInputChange} className='advanceBtn' style={{width:'64px'}}>0.5%</Button>
                  <Button onClick={advanceInputChange} className='advanceBtn' style={{width:'64px'}}>1%</Button>
                </div>
                <Input suffix="%" className='advanceInput' defaultValue={0}></Input>
              </div>
            </Card>
        </div>
    </div>
  )
}
