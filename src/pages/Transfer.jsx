import React, { useEffect } from 'react'
import { Button, Card , InputNumber, Input} from 'antd';
import { Menu, Space } from 'antd';
import { CloseOutlined , SettingOutlined,DownOutlined,SwapOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import './less/Transfer.less';
import Usdt from '../assets/USDT.svg'
//import {ReactComponent as Ether} from "../assets/ethereum-eth-logo.svg"
import Usdc from '../assets/usd-coin-usdc-logo.svg'
import Bnb from '../assets/bnb-logo.svg'
import Eth from '../assets/ETH-01.svg'
import Fox from '../assets/fox-logo-01-01.svg'
import Arb from '../assets/Arbitrum-01.svg'
import Opt from '../assets/Optimism.svg'
import Poly from '../assets/polygon-matic-logo.svg'
export default function Transfer() {
  
  const USDT = <img src={Usdt} style={{width: '16px',marginTop:'-3px'}}></img>;
  const USDC = <img src={Usdc} style={{width: '16px',marginTop:'-3px'}}></img>;
  const ETH = <span style={{borderRadius:'99px',background:'#757575',marginBottom:'5px'}}><img src={Eth} style={{width: '30px',height:'30px',borderRadius:'99px',marginBottom:'3px'}}></img></span>
  const BNB = <span style={{borderRadius:'99px',}}><img src={Bnb} style={{width: '30px',height:'30px',marginBottom:'3px',borderRadius:'99px'}}></img></span>
  const OPT = <span style={{borderRadius:'99px',}}><img src={Opt} style={{width: '30px',height:'30px',marginBottom:'3px',borderRadius:'99px'}}></img></span>
  const ARB = <span style={{borderRadius:'99px',}}><img src={Arb} style={{width: '30px',height:'30px',marginBottom:'3px',borderRadius:'99px'}}></img></span>
  const POLY = <span style={{borderRadius:'99px',}}><img src={Poly} style={{width: '25px',height:'25px',marginBottom:'3px',borderRadius:'99px',background:'white'}}></img></span>
  const FOX = <span style={{borderRadius:'99px',}}><img src={Fox} style={{width: '30px',height:'30px',marginBottom:'3px',borderRadius:'99px'}}></img></span>
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
            <Card className='mainCard' bordered={false} style={{marginTop: '45px', borderRadius: '16px',background: 'rgb(32, 33, 33)',} }>
              <div className='transferTop'>
                <Button  onClick={advancedshow} type="link" icon={<SettingOutlined style={{color : 'white'}} />} ></Button>
              </div>
              <label style={{color : 'white'}}>From</label>
                <div className='transferItemTop'>
                  <div className='transferItemTopLeft' style={{width:'100%'}}>
                    

                    <div className='selectAll' style={{width:'100%',height:'100%'}}>
                      <Button className='networkSelect' style={{height:'100%',width:'120%'}} onClick={()=>{var advance = document.getElementsByClassName('networkselectCard');
                        advance[0].style.visibility = 'visible';}}>
                          <span style={{marginRight:'80%',color:'#999999'}}>Network</span>
                          <div className='networkShow'>
                            <div className='leftPart'>
                              <span style={{marginRight:'5px'}}>{USDT}</span>
                              <span style={{marginTop:'10px',fontSize:'16px',color:'white'}}>Select</span>
                            </div>
                          <DownOutlined style={{fontsize:'16px',marginLeft:'5px',color:'#FBFBFC',marginTop:'13px'}}/>
                          </div>
                      </Button>

                      <Button className='tokenSelect' style={{height:'100%',width:'100%'}} onClick={()=>{var advance = document.getElementsByClassName('tokenselectCard');
                        advance[0].style.visibility = 'visible';}}>
                        <span style={{marginRight:'80%',color:'#999999',}}>Token</span>
                        <div className='tokenShow'>
                          <div className='leftPart'>
                            <span style={{marginRight:'5px',}}>{USDT}</span>
                            <span style={{fontSize:'16px',color:'white'}}>Select</span>
                          </div>
                          <DownOutlined style={{fontsize:'16px',marginLeft:'5px',color:'#FBFBFC',marginTop:'13px'}}/>
                        </div>
                      </Button>

                      {/* <Button className='address' style={{height:'100%',width:'100%'}} >
                        <span style={{marginRight:'43%',color:'#999999'}}>Address</span>
                        <div className='addressShow'>
                          <span style={{color:'white',}}>0xCed5...c87f</span>
                        </div>
                      </Button> */}
                    </div>




                  </div>
                  <div className='transferItemTopRight'>
                  </div>
                </div>
                <Card style={{padding: '0px 0px',background: '#040000',marginTop: '8px',borderRadius: '8px',border: 'none'}}>
                  <div className='inside'>
                    <div className='topLine'>
                      <label className='labelStyle' style={{marginTop:'5px',marginBottom:'-5px'}}>Send</label>
                      
                    </div>
                    <div className='botLine'>
                      <Input defaultValue={0.0} bordered={false} style={{color : 'white',background:'#040000',paddingBottom:'10px',paddingTop:'10px'}} className='sendInput' />

                    </div>
                  </div>
                </Card>
                <div className='turnBtn'>
                  <Button className='turnAround' style={{fontSize:'20px'}} ><SwapOutlined rotate={90} style={{color : 'white'}}/></Button>
                </div>
                <label style={{color : 'white',marginRight:'12px'}}>To</label>
                <div className='transferItemTop' style={{width:'100%',height:'100%'}}>
                <div className='transferItemTopLeft' style={{width:'100%'}}>
                  <div className='selectAll' style={{width:'100%',height:'100%'}}>
                      <Button className='networkSelect' style={{height:'100%',width:'150%'}} onClick={()=>{var advance = document.getElementsByClassName('networkselectCard');
                        advance[0].style.visibility = 'visible';}}>
                          <span style={{marginRight:'80%',color:'#999999'}}>Network</span>
                          <div className='networkShow'>
                            <div className='leftPart'>
                              <span style={{marginRight:'5px'}}>{USDT}</span>
                              <span style={{marginTop:'10px',fontSize:'16px',color:'white'}}>Select</span>
                            </div>
                          <DownOutlined style={{fontsize:'16px',marginLeft:'5px',color:'#FBFBFC',marginTop:'13px'}}/>
                          </div>
                      </Button>

                      <Button className='tokenSelect' style={{height:'100%',width:'100%'}} onClick={()=>{var advance = document.getElementsByClassName('tokenselectCard');
                        advance[0].style.visibility = 'visible';}}>
                        <span style={{marginRight:'80%',color:'#999999',}}>Token</span>
                        <div className='tokenShow'>
                          <div className='leftPart'>
                            <span style={{marginRight:'5px',}}>{USDT}</span>
                            <span style={{fontSize:'16px',color:'white'}}>Select</span>
                          </div>
                          <DownOutlined style={{fontsize:'16px',marginLeft:'5px',color:'#FBFBFC',marginTop:'13px'}}/>
                        </div>
                      </Button>

                      <Button className='address' style={{height:'100%',width:'100%'}} >
                        <span style={{color:'#999999',marginRight:'43%'}}>Address</span>
                        <div className='addressShow'>
                          <span style={{color:'white',}}>0xCed5...c87f</span>
                        </div>
                      </Button>
                    </div>
                  
                    <div className='transferItemTopRight'>
                    
                  </div>
                
                </div>
                </div>
                <Card style={{padding: '0px 0px',background: '#040000',marginTop: '8px',borderRadius: '8px',border: 'none'}}>
                  <div className='inside'>
                    <div className='topLine'>
                      <label className='labelStyle' style={{marginTop:'5px',marginBottom:'-5px'}}>Receive</label>
                      
                    </div>
                    <div className='botLine'>
                      <Input defaultValue={0.0} bordered={false} style={{color : 'white',background:'#040000',paddingBottom:'10px',paddingTop:'10px'}} className='sendInput' />

                    </div>
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
                <Input csuffix="%" className='advanceInput' defaultValue={0} ></Input>
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
                  <div>
                  {ETH}
                  <span style={{marginLeft:'5px',fontSize:'16px'}}>Ethereum</span>
                  </div>
                  </Button>
                  <Button className='networkSel'>
                  {BNB}
                  <span style={{marginLeft:'5px',fontSize:'16px'}}>BNB Chain</span>
                  </Button>
                  <Button className='networkSel'>
                  {POLY}
                  <span style={{marginLeft:'5px',fontSize:'16px'}}>Polygon</span>
                  </Button>
                  <Button className='networkSel'>
                  {ARB}
                  <span style={{marginLeft:'5px',fontSize:'16px'}}>Arbitrum</span>
                  </Button>
                  <Button className='networkSel'>
                  {FOX}
                  <span style={{marginLeft:'5px',fontSize:'16px'}}>Fox</span>
                  </Button>
                  <Button className='networkSel'>
                  {OPT}
                  <span style={{marginLeft:'5px',fontSize:'16px'}}>Optimism</span>
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
                  {USDT}
                  <span style={{marginLeft:'5px'}}>USDT</span>
                  </Button>
                  <Button className='tokenSel'>
                  {USDC}
                  <span style={{marginLeft:'5px'}}>USDC</span>
                  </Button>
                  <Button className='tokenSel'>
                  {}
                  <span style={{marginLeft:'5px'}}>BUSD</span>
                  </Button>
              </div>
 
            </Card>
        </div>
    </div>
  )
}
