import React, { useEffect } from 'react'
import { Button, Card , InputNumber, Input} from 'antd';
import { Menu, Space } from 'antd';
import { CloseOutlined , SettingOutlined,DownOutlined,SwapOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import './less/Transfer.less';
import USDT from '../assets/USDT.svg'
export default function Transfer() {
  
  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // };
  const USD = <img src={USDT} style={{width: '16px',marginTop:'-3px'}}></img>;
  const advancedshow = function(){
    var advance = document.getElementsByClassName('advanceCard');
    console.log(advance)
    advance[0].style.visibility = 'visible';
    advance[0].style.opacity = 1;
    
  };
  const advancedhidden = function(){
    var advance = document.getElementsByClassName('advanceCard')
    advance[0].style.visibility = 'hidden';
  };
  const networkhidden = function (){
    var advance = document.getElementsByClassName('networkselectCard')
    advance[0].style.visibility = 'hidden';
  }
  const tokenhidden = function (){
    var advance = document.getElementsByClassName('tokenselectCard')
    advance[0].style.visibility = 'hidden';
  }
  const advanceInputChange = function () {
    var advanceinputchange = document.getElementsByClassName('advanceInput');
    console.log(advanceinputchange[0]);
    advanceinputchange[0].value = 0.1 ;
  };
  const openDrop = function (){
    
  }
  // useEffect(()=>{

  // },)
  return (
    <div>
        <div id='cardBody'>
            <Card className='mainCard' bordered={false} style={{marginTop: '45px', borderRadius: '16px',background: '#202121',} }>
              <div className='transferTop'>
                <Button  onClick={advancedshow} type="link" icon={<SettingOutlined style={{color : 'white'}} />} ></Button>
              </div>
                <div className='transferItemTop'>
                  <div className='transferItemTopLeft'>
                    <label style={{color : 'white'}}>From</label>

                    <div className='selectAll'>
                      <Button className='networkSelect' style={{height:'100%',width:'200px'}} onClick={()=>{var advance = document.getElementsByClassName('networkselectCard');
                        advance[0].style.visibility = 'visible';}}>
                          <span style={{marginLeft:'-120px',color:'#999999'}}>Network</span>
                          <div className='networkShow'>
                            <div className='leftPart'>
                              <span style={{marginRight:'5px'}}>{USD}</span>
                              <span style={{marginTop:'10px'}}>Select</span>
                            </div>
                          <DownOutlined style={{fontsize:'16px',marginLeft:'5px',color:'#FBFBFC',marginTop:'13px'}}/>
                          </div>
                      </Button>

                      <Button className='tokenSelect' style={{height:'100%',width:'150px'}} onClick={()=>{var advance = document.getElementsByClassName('tokenselectCard');
                        advance[0].style.visibility = 'visible';}}>
                        <span style={{marginLeft:'-80px',color:'#999999'}}>Token</span>
                        <div className='tokenShow'>
                          <div className='leftPart'>
                            <span style={{marginRight:'5px'}}>{USD}</span>
                            <span>Select</span>
                          </div>
                          <DownOutlined style={{fontsize:'16px',marginLeft:'5px',color:'#FBFBFC',marginTop:'13px'}}/>
                        </div>
                      </Button>

                      <Button className='address' style={{height:'100%',width:'100px'}} >
                        <span style={{marginLeft:'-20px ',color:'#999999'}}>Address</span>
                        <div className='addressShow'>
                          <span>00000</span>
                        </div>
                      </Button>
                    </div>




                  </div>
                  <div className='transferItemTopRight'>
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
                    <label style={{color : 'white',marginRight:'12px'}}>To</label>
                    <div className='selectAll'>
                      <Button className='networkSelect' style={{height:'100%',width:'200px'}} onClick={()=>{var advance = document.getElementsByClassName('networkselectCard');
                        advance[0].style.visibility = 'visible';}}>
                          <span style={{marginLeft:'-120px',color:'#999999'}}>Network</span>
                          <div className='networkShow'>
                            <div className='leftPart'>
                              <span style={{marginRight:'5px'}}>{USD}</span>
                              <span style={{marginTop:'10px'}}>Select</span>
                            </div>
                          <DownOutlined style={{fontsize:'16px',marginLeft:'5px',color:'#FBFBFC',marginTop:'13px'}}/>
                          </div>
                      </Button>

                      <Button className='tokenSelect' style={{height:'100%',width:'150px'}}>
                        <span style={{marginLeft:'-80px',color:'#999999'}}>Token</span>
                        <div className='tokenShow'>
                          <div className='leftPart'>
                            <span style={{marginRight:'5px'}}>{USD}</span>
                            <span>Select</span>
                          </div>
                          <DownOutlined style={{fontsize:'16px',marginLeft:'5px',color:'#FBFBFC',marginTop:'13px'}}/>
                        </div>
                      </Button>
                      <Button className='address' style={{height:'100%',width:'100px'}} onClick={()=>{}}>
                        <span style={{marginLeft:'-20px ',color:'#999999'}}>Address</span>
                        <div className='addressShow'>
                          <span>00000</span>
                        </div>
                      </Button>
                    </div>
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
            <Card className='advanceCard' bordered={false} style={{visibility: 'hidden'} }>
              <div className='advanceTop' style={{transform:'none',transition:'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms'}} >
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

            <Card className='networkselectCard' bordered={false} style={{borderRadius: '16px',background: '#202121',width:'100%',height:'517px',} }>
              <div className='advanceTop' style={{transform:'none',transition:'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms'}}>
                <span style={{color:'white',fontSize:'16px'}}>Select a Network</span>
                <Button  onClick={networkhidden} type="link" icon={<CloseOutlined style={{color : 'white'}}/>} ></Button>
              </div>
              <span style={{color:'#999999'}}>Network Name</span>
              <hr style={{border:'0',backgroundColor:'#757575',height:'1px'}}/>
              <div className='networkBtn'>
                <Button className='networkSel'>
                  {USD}
                  <span style={{marginLeft:'5px'}}>Etherenum</span>
                  </Button>
                  <Button className='networkSel'>
                  {USD}
                  <span style={{marginLeft:'5px'}}>BNB Chain</span>
                  </Button>
                  <Button className='networkSel'>
                  {USD}
                  <span style={{marginLeft:'5px'}}>Matic</span>
                  </Button>
                  <Button className='networkSel'>
                  {USD}
                  <span style={{marginLeft:'5px'}}>Arbitrum</span>
                  </Button>
              </div>
 
              
            </Card>

            <Card className='tokenselectCard' bordered={false} style={{borderRadius: '16px',background: '#202121',width:'100%',height:'517px',} }>
              <div className='advanceTop' style={{transform:'none',transition:'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms'}}>
                <span style={{color:'white',fontSize:'16px'}}>Select a Token</span>
                <Button  onClick={tokenhidden} type="link" icon={<CloseOutlined style={{color : 'white'}}/>} ></Button>
              </div>
              <span style={{color:'#999999'}}>Token Name</span>
              <hr style={{border:'0',backgroundColor:'#757575',height:'1px'}}/>
              
              <div className='tokenBtn'>
                <Button className='tokenSel'>
                  {USD}
                  <span style={{marginLeft:'5px'}}>USDT</span>
                  </Button>
                  <Button className='tokenSel'>
                  {USD}
                  <span style={{marginLeft:'5px'}}>USDC</span>
                  </Button>
                  <Button className='tokenSel'>
                  {USD}
                  <span style={{marginLeft:'5px'}}>STG</span>
                  </Button>
              </div>
 
            </Card>
        </div>
    </div>
  )
}
