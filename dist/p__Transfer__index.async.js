(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[170],{59749:function(V,f,n){"use strict";n.d(f,{RP:function(){return t},ns:function(){return I},zG:function(){return a}});var c=n(97857),u=n.n(c),x={name:"BNB",symbol:"BNB",decimals:18},T={name:"ETH",symbol:"ETH",decimals:18};function h(v){return!!v.nativeCurrency}function t(v){var p=a[v];return h(p)?{chainId:v,chainName:p.name,nativeCurrency:p.nativeCurrency,rpcUrls:p.urls,blockExplorerUrls:p.blockExplorerUrls}:v}var d={56:{urls:["https://bsc-dataseed.binance.org"],name:"BNB Chain",nativeCurrency:x,blockExplorerUrls:["https://bscscan.com/"],icon:"/bnb.svg",id:56},42161:{id:42161,icon:"/arb.svg",urls:["https://arb1.arbitrum.io/rpc"],name:"Arbitrum One",nativeCurrency:T,blockExplorerUrls:["https://arbiscan.io/"]}},a=u()({},d),I=Object.keys(a).reduce(function(v,p){var z=a[Number(p)].urls;return z.length&&(v[Number(p)]=z),v},{})},20825:function(V,f,n){"use strict";n.d(f,{O:function(){return I},P:function(){return v}});var c=n(5574),u=n.n(c),x=n(77985),T=n.n(x),h=n(94299),t=n.n(h),d=(0,x.initializeConnector)(function(p){return new h.MetaMask({actions:p})}),a=u()(d,2),I=a[0],v=a[1]},78764:function(V,f,n){"use strict";n.d(f,{_b:function(){return T},ei:function(){return u},qz:function(){return x}});var c={deployer:"0x0754f7fc90f842a6ace8b6ec89e4edadeb2a9ba5",usdc:"0xf7d7eaf3d6d3ab5a81514309f16395a37af6e6bc",eth:"0xb2b07ac6e3513d4e94b1c9c32057eadce1381bf0",matic:"0xe927ab3a717b5f4b17cae4a7879904f9de728161",oracle:"0xc94777b9a10cebe85c2f91972deb176cde86e027",swap:"0xec4eeebd0b2ea356ae30b0d613b16eaa8ac01c27",addressProvider:"0xe44278ace07452e45373d93e458a00aded87ad8a",mainPool:"0x07b18069e6d06ed9f3e6dd604ef63fecda2865fc",ethUsdcPool:"0xe7ac4b2f2def09d5b64a4b20c43c3f4b8b67d87d",usdcStrategy:"0x1ca45e58a067b770ff0f03dcb7f4c3d075d1c814",ethStrategy:"0x4853f4cf2274def143d58a2068f62c52c8aa59a2",maticStrategy:"0xfa3e8a1f76429e5e1ba107dfe95ca66a8fd53c92",mainPoolConfigurator:"0xcd2b058bf079ce75a1deaa6f5e7eb6d3cd66802c",flashLoanReceiver:"0x0997205e3415fd3b3694650f1bfb2a9804c409ef",dataProvider:"0x131bbaaa298ba663a507c283a3817f0aa9c4a76a"},u=function(t){return c[t]},x=function(t){var d={56:"0x55d398326f99059fF775485246999027B3197955",42161:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"};return d[t]},T=function(t){var d={56:"0x162C7EC514Cd835AC3760A3B234d9f9228279029",42161:"0x839837fAC18314924Ee292BfAB4b8bCA81D11864"};return d[t]}},67937:function(V,f,n){"use strict";n.d(f,{AR:function(){return d},Gm:function(){return t},HJ:function(){return p},LP:function(){return z}});var c=n(78764),u=[{name:"Polygon",img:"/polygon.svg",id:80001,checked:!1},{name:"Arbitrum",img:"/art.png",id:69,checked:!1},{name:"HardHat",img:"/polygon.svg",id:31337,checked:!1},{name:"Ganache",img:"/polygon.svg",id:1337,checked:!1}],x=80001,T=function(){return u},h=function(){return u.find(function(C){return C.id==x})},t={"main pool":{id:1,address:(0,c.ei)("mainPool")},"eth-usdc pool":{id:2,address:(0,c.ei)("ethUsdcPool")}},d=function(C){return t[C].address},a=[{key:"5",name:"USDT",address:(0,c.ei)("usdc"),decimals:6,icon:"/usdt.svg",pools:["main pool"]}],I=[{key:"2",name:"MATIC",address:"0x1Df2FAa18c6D0EAa5CE77feEC82AF5e7ae03D56e",decimals:18,pools:["main pool","eth-usdc pool"],icon:"/matic.svg"},{key:"3",name:"ETH",address:"0x632e32C4003B6e71DA94eD5D05ED15044F97Bf7a",decimals:18,icon:"/eth.svg",pools:["main pool","eth-usdc pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],v=[{key:"3",name:"ETH",icon:"/eth.svg",pools:["main pool"]},{key:"4",name:"USDC",icon:"/usdc.svg",pools:["main pool"]}],p=function(C){return{69:v,80001:a,31337:a,1337:I}[C||x]},z=function(C,W){var L=p(C);return L.find(function(q){return q.name==W})},e=function(C,W){var L=p(C);return L.find(function(q){return q.address==W})}},25543:function(V,f,n){"use strict";var c=n(67294),u=(0,c.createContext)(null);f.Z=u},76691:function(V,f,n){"use strict";n.r(f),n.d(f,{default:function(){return an}});var c=n(15009),u=n.n(c),x=n(99289),T=n.n(x),h=n(5574),t=n.n(h),d=n(22974),a=n(67294),I=n(80882),v=n(19515),p={input:"input___nfMJ_",tokenlist:"tokenlist___ArGAq",item:"item___QVP7y"},z=n(71577),e=n(85893);function M(i){var r=i.title,l=i.desc,S=i.choose,_=i.maxValue,Z=i.selectToken,G=i.selectChain,w=i.currentToken,g=i.currentChain,re=i.max,E=i.chooseToken,Q=i.onMax,ee=i.defaultValue,J=i.onChange,ne=i.simple,$=(0,a.useState)(!1),oe=t()($,2),ue=oe[0],j=oe[1],le=(0,a.useState)(ee),de=t()(le,2),te=de[0],P=de[1],pe=function(){Q&&Q(),P(_),J(_)};return(0,a.useEffect)(function(){P((0,v.vL)(ee))},[ee]),(0,e.jsxs)("div",{className:"text-gray-4 flex flex-column gap-2",children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("div",{children:r}),!ne&&(0,e.jsxs)("div",{className:"flex flex-align-center gap-2 fw-bold ".concat(S&&"token-hover"),children:[(0,e.jsx)("img",{src:g==null?void 0:g.icon,width:"16"}),S&&(0,e.jsxs)("div",{onClick:G,style:{fontSize:"14px"},children:[g==null?void 0:g.name," ",(0,e.jsx)(I.Z,{style:{fontSize:"12px"}})]})||(0,e.jsxs)("div",{children:[g==null?void 0:g.name," "]})]})]}),(0,e.jsxs)("div",{className:"".concat(p.input," flex flex-column gap-2"),style:{border:ue&&"1px solid #ff5c28"||"1px solid rgba(0,0,0,0)"},children:[(0,e.jsxs)("div",{className:" flex flex-between  gap-2",children:[!ne&&(0,e.jsxs)("div",{style:{padding:"1px 8px"},className:"flex flex-align-center gap-2 fw-bold ".concat(E&&"token-hover"),onClick:E&&Z,children:[(0,e.jsx)("img",{src:w==null?void 0:w.icon,width:"25"}),(0,e.jsx)("span",{children:w==null?void 0:w.name}),E&&(0,e.jsx)(I.Z,{})]}),!ne&&(0,e.jsx)("input",{value:te,onChange:function(R){P(R.target.value),J(R.target.value)},onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},placeholder:"0.0",className:"flex-auto",style:{fontSize:"20px",width:"100%",color:"#fff",fontWeight:"bold"}})||(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{value:te,onChange:function(R){P(R.target.value),J(R.target.value)},onFocus:function(){return j(!0)},onBlur:function(){j(!1)},placeholder:"Enter the address to receive the tokens",style:{fontSize:"14px",width:"100%",color:"#fff"}}),(0,e.jsx)(z.Z,{style:{padding:"0 5px",lineHeight:"unset",height:"unset"},onClick:function(){P("")},children:"Edit"})]})]}),l&&(0,e.jsxs)("div",{className:"flex flex-between  gap-2",children:[(0,e.jsx)("div",{children:l}),re&&(0,e.jsx)("span",{className:"max",onClick:pe,children:"Max"})]})]})]})}var C=n(77171),W=n(45605),L=n(67937),q=n(11588),fe=n(63463),Ce=n(77939),Se=n(37620),We=Object.defineProperty,_e=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,je=(i,r,l)=>r in i?We(i,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[r]=l,Je=(i,r)=>{for(var l in r||(r={}))Ke.call(r,l)&&je(i,l,r[l]);if(_e)for(var l of _e(r))Qe.call(r,l)&&je(i,l,r[l]);return i};const $e=i=>a.createElement("svg",Je({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48,role:"img"},i),a.createElement("path",{d:"M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"}));var An="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0zNzgtMjQ2IDE1NC00NzBsNDMtNDMgMTgxIDE4MSAzODQtMzg0IDQzIDQzLTQyNyA0MjdaIi8+PC9zdmc+",ke={button:"button___VhKC6",primary:"primary___EjeYI"},we=function(r){var l=r.children,S=r.onSelect,_=r.value,Z=(0,a.useState)(_||null),G=t()(Z,2),w=G[0],g=G[1],re=function(Q){g(Q),S&&S(Q)};return(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:a.Children.map(l,function(E){return a.cloneElement(E,{onSelect:re,selected:E.props.value===w})})})},Ye=function(r){var l=r.children,S=r.onSelect,_=r.selected,Z=r.value;return(0,e.jsx)("div",{onClick:function(){return S&&S(Z)},className:"".concat(ke.button," ").concat(_&&ke.primary),style:{marginRight:"10px"},children:(0,e.jsxs)("div",{children:[_&&(0,e.jsx)($e,{}),"  ",l]})})};we.Item=Ye;var k=we,K=n(20825),Xe=n(25543),ie=n(64146),Me=n(35553),qe=n(21046),Ae=n(38483),en=n(59749),ve=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"BlockPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"BlockReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_blockedUser","type":"address"},{"indexed":false,"internalType":"uint256","name":"_balance","type":"uint256"}],"name":"DestroyedBlockedFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"NewPrivilegedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"RemovedPrivilegedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_trustedDeFiContract","type":"address"}],"name":"addPrivilegedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addToBlockedList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blockedUser","type":"address"}],"name":"destroyBlockedFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_l2Gateway","type":"address"},{"internalType":"address","name":"_l1Counterpart","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTrusted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l2Gateway","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_destination","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeFromBlockedList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_trustedDeFiContract","type":"address"}],"name":"removePrivilegedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),nn=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"sourceChainId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"targetChainId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"transferId",type:"uint256"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"CrosschainTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"DebtRecorded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"depositor",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenDeposited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensWithdrawn",type:"event"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"_transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"chainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"address",name:"token",type:"address"}],name:"getDebt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"sendCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"targetChainId",type:"uint256"},{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"sendToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"sourceChainId",type:"uint256"},{internalType:"uint256",name:"transferId",type:"uint256"},{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"withdrawAllTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"withdrawDebt",outputs:[],stateMutability:"nonpayable",type:"function"}],H=n(78764),A={h100:"h100___hE_b0",title:"title___wSlJR",tokenlist:"tokenlist___NSozx",item:"item___ruSGv"},tn=function(r){var l=q.ZP.useMessage(),S=t()(l,2),_=S[0],Z=S[1],G=K.P.useChainId,w=K.P.useAccounts,g=K.P.useIsActivating,re=K.P.useIsActive,E=K.P.useProvider,Q=K.P.useENSNames,ee=(0,a.useState)(!1),J=t()(ee,2),ne=J[0],$=J[1],oe=(0,a.useState)(""),ue=t()(oe,2),j=ue[0],le=ue[1],de=(0,a.useState)(""),te=t()(de,2),P=te[0],pe=te[1],B=(0,a.useState)(),R=t()(B,2),sn=R[0],rn=R[1],on=(0,a.useState)(),Ee=t()(on,2),he=Ee[0],un=Ee[1],ln=(0,a.useState)(0),Pe=t()(ln,2),dn=Pe[0],Be=Pe[1],pn=(0,a.useState)(!1),De=t()(pn,2),cn=De[0],yn=De[1],mn=(0,a.useState)(0),Ne=t()(mn,2),be=Ne[0],Oe=Ne[1],b=G(),Ie=(0,a.useContext)(Xe.Z),En=Ie.currentChain,Re=Ie.switchChain,fn=function(){$(!1)},vn=function(o){$(!1),_n(o),gn(o)},hn=function(o){ce(!1),dn==0?Re(o.id):Le(o)},bn=(0,a.useState)(!1),Ue=t()(bn,2),xn=Ue[0],ce=Ue[1],xe=[{id:56,name:"BNB Chain",icon:"/bnb.svg"},{id:42161,name:"Arbitrum One",icon:"/arb.svg"}],Tn=(0,a.useState)((0,L.HJ)(null)[0]),Fe=t()(Tn,2),ae=Fe[0],gn=Fe[1],Cn=(0,a.useState)(xe[1]),ze=t()(Cn,2),se=ze[0],Le=ze[1],Sn=(0,a.useState)((0,L.HJ)(null)[0]),He=t()(Sn,2),ye=He[0],_n=He[1],jn=(0,a.useState)(xe[1]),Ze=t()(jn,2),Ge=Ze[0],Ve=Ze[1],U=w(),Y=E();(0,a.useEffect)(function(){Ve(en.zG[b||56]),pe(U&&U[0]||"")},[b]),(0,a.useEffect)(function(){if(Y&&U!==null&&U!==void 0&&U.length){Mn(),rn(new ie.CH((0,H._b)(b),nn,Y==null?void 0:Y.getSigner()));var s=new ie.CH((0,H.qz)(b),ve,Y);s.balanceOf(U[0]).then(function(o){var y=Me.formatUnits(o,b==56?18:6)*1;un(y.toFixed(6))}).catch(function(o){console.error("Failed to fetch USDT balance:",o)})}},[Y,U]);var kn=function(){debugger;Ve(se),Le(Ge),Re(se.id)};function wn(){return Te.apply(this,arguments)}function Te(){return Te=T()(u()().mark(function s(){var o,y,F,D,X,N,me,m;return u()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:debugger;return o=new Ae.Q(window.ethereum),y=(0,H.qz)(b),F=(0,H._b)(b),D=o.getSigner(),O.next=7,D.getAddress();case 7:X=O.sent,N=new ie.CH(y,ve,D);debugger;return O.next=12,N.approve(F,qe.Bz);case 12:return me=O.sent,O.next=15,me.wait();case 15:m=O.sent,Oe(.1),console.log("Transaction hash:",m.transactionHash),console.log("Transaction receipt:",m);case 19:case"end":return O.stop()}},s)})),Te.apply(this,arguments)}function Mn(){return ge.apply(this,arguments)}function ge(){return ge=T()(u()().mark(function s(){var o,y,F,D,X,N;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return o=new Ae.Q(window.ethereum),y=U[0],F=(0,H._b)(b),D=(0,H.qz)(b),X=new ie.CH(D,ve,o),m.next=7,X.allowance(y,F);case 7:N=m.sent,Oe(N.toString());case 9:case"end":return m.stop()}},s)})),ge.apply(this,arguments)}return(0,e.jsxs)("div",{style:{padding:"50px 0"},className:"flex flex-center",children:[Z,(0,e.jsxs)("div",{className:"flex flex-column gap-4",style:{width:"375px",backgroundColor:"#1c1b1b",padding:"1.25rem",border:"1px solid #2f343e",borderRadius:"1rem",position:"relative",overflow:"hidden"},children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginBottom:"15px"},children:[(0,e.jsx)("span",{children:"Mode"}),(0,e.jsx)("div",{style:{marginRight:"-10px"},children:(0,e.jsxs)(k,{value:"FlashBridge",onSelect:function(){},children:[(0,e.jsx)(k.Item,{value:"FlashBridge",children:"FlashBridge"}),(0,e.jsx)(k.Item,{value:"zkBridge",children:"zkBridge"})]})})]}),(0,e.jsx)(M,{defaultValue:j,onChange:function(o){return le(o)},max:!0,currentChain:Ge,currentToken:ye,selectToken:function(){$(!0)},selectChain:function(){ce(!0),Be(0)},title:"From",maxValue:he,desc:he>=0&&"Balance: ".concat(he," ").concat(ye==null?void 0:ye.name),choose:!0,chooseToken:!0},"ti1"),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)("div",{className:"swap-hover",onClick:kn,children:(0,e.jsx)(C.Z,{style:{color:"#ffffff"}})})}),(0,e.jsx)(M,{defaultValue:j,onChange:function(o){return le(o)},currentChain:se,currentToken:ae,selectToken:function(){$(!0)},selectChain:function(){ce(!0),Be(1)},title:"To",desc:j&&"Expect to receive: ".concat(j," ").concat(ae==null?void 0:ae.name),choose:!0},"ti2"),(0,e.jsx)(M,{simple:!0,defaultValue:P,onChange:function(o){return pe(P)},currentChain:se,currentToken:ae,title:"Recipient Address",choose:!0},"ti3"),(0,e.jsx)(z.Z,{disabled:j==""&&be!=0,onClick:T()(u()().mark(function s(){return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(b){y.next=2;break}return y.abrupt("return");case 2:if(be!=0){y.next=5;break}return wn(),y.abrupt("return");case 5:debugger;sn.sendToken(se.id,(0,H.qz)(b),P,Me.parseUnits(j,b==56?18:6)).then(function(){var F=T()(u()().mark(function D(X){var N;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return _.success("Send SuccessFul!"),m.next=3,X.wait();case 3:N=m.sent,console.log("sendResult",N),N.status==1&&_.info("Send Successful!");case 6:case"end":return m.stop()}},D)}));return function(D){return F.apply(this,arguments)}}()).catch(function(F){return _.info("Send Fail!")});case 7:case"end":return y.stop()}},s)})),style:{overflow:"hidden",textOverflow:"ellipsis"},type:"primary",className:"topConnect",children:b&&(be==0&&"Approve"||"Confirm")||"Connect Wallet"}),(0,e.jsxs)(fe.Z,{title:"Select Token",className:A.h100,placement:"bottom",onClose:fn,open:ne,getContainer:!1,maskClosable:!1,style:{position:"absolute"},children:[(0,e.jsxs)("div",{className:A.title,children:[(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Token Name"})}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Balance"})})]}),(0,e.jsx)("hr",{}),(0,e.jsx)("div",{className:A.tokenlist,children:(0,L.HJ)(null).map(function(s){return(0,e.jsxs)("div",{className:A.item,onClick:function(){return vn(s)},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:s.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:s.name})]}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"0"})})]})})})]}),(0,e.jsx)(fe.Z,{title:"Select  Chain",className:A.h100,placement:"bottom",onClose:function(){return ce(!1)},open:xn,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsx)("div",{className:A.tokenlist,children:xe.map(function(s){return(0,e.jsx)("div",{className:A.item,onClick:function(){return hn(s)},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:s.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:s.name})]})})})})}),(0,e.jsx)(fe.Z,{title:"Advanced Settings",className:A.h100,placement:"bottom",onClose:function(){return yn(!1)},open:cn,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsxs)("div",{className:A.tokenlist,children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("span",{children:" Gas on destination chain"}),(0,e.jsx)(Ce.Z,{title:"The default amount allows you to perform a couple of transactions (e.g. Approve and Swap). Once you approve the transfer in your wallet, the transaction gas amount will be higher than a regular transaction as this includes the selected amount of destination gas to be sent.",children:(0,e.jsx)(W.Z,{})})]}),"111111",(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(k,{value:"none",onSelect:function(){},children:[(0,e.jsx)(k.Item,{value:"none",children:"None"}),(0,e.jsx)(k.Item,{value:"default",children:"Default"})]}),(0,e.jsx)(Se.Z,{style:{marginTop:"20px"},placeholder:"0.0",prefix:(0,e.jsx)("span",{children:(0,e.jsx)("img",{src:"/eth.svg",style:{marginRight:"5px",width:"20px"}})}),suffix:(0,e.jsx)("span",{children:"Max"})}),(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginTop:"30px"},children:[(0,e.jsx)("span",{children:" Slippage tolerance"}),(0,e.jsx)(Ce.Z,{title:"Your transaction will revert if the price changes unfavorably by more than this percentage",children:(0,e.jsx)(W.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(k,{value:"0.1",onSelect:function(){},children:[(0,e.jsx)(k.Item,{value:"0.1",children:"0.1%"}),(0,e.jsx)(k.Item,{value:"0.5",children:"0.5%"}),(0,e.jsx)(k.Item,{value:"1.0",children:"1.0%"})]}),(0,e.jsx)(Se.Z,{style:{marginTop:"20px"},placeholder:"0.0",suffix:(0,e.jsx)("span",{children:"%"})})]})})]})]})},an=(0,d.connect)(function(i){var r=i.count;return{count:r}})(tn)},19515:function(V,f,n){"use strict";n.d(f,{f_:function(){return u},vL:function(){return T}});var c=n(35553),u=function(t,d){if(t!=null)return c.formatUnits(t,d)},x=function(t,d){return ethers.utils.parseUnits("".concat(t),d)},T=function(t){if(t.length<=10)return t;var d=t.slice(0,6),a=t.slice(-4);return"".concat(d,"...").concat(a)}},88677:function(){},62808:function(){}}]);
