(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[170],{64622:function(W,T,t){"use strict";t.d(T,{A:function(){return v}});var v=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"sourceChainId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"targetChainId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"transferId",type:"uint256"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"CrosschainTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"DebtRecorded",type:"event"},{anonymous:!1,inputs:[],name:"FeeChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"depositor",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenDeposited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensWithdrawn",type:"event"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"_transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"chainIds",type:"uint256[]"},{internalType:"uint256[]",name:"fees",type:"uint256[]"}],name:"batchSetChainFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"chainFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"chainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"feeDenominator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeNumerator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"address",name:"token",type:"address"}],name:"getDebt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"receiveCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"sendCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"targetChainId",type:"uint256"},{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"sendToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"numerator",type:"uint256"},{internalType:"uint256",name:"denominator",type:"uint256"}],name:"setSendFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"sourceChainId",type:"uint256"},{internalType:"uint256",name:"transferId",type:"uint256"},{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"withdrawAllTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"withdrawDebt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawNative",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]},59749:function(W,T,t){"use strict";t.d(T,{RP:function(){return a},ns:function(){return z},zG:function(){return n}});var v=t(97857),u=t.n(v),M={name:"BNB",symbol:"BNB",decimals:18},m={name:"ETH",symbol:"ETH",decimals:18};function j(d){return!!d.nativeCurrency}function a(d){var l=n[d];return j(l)?{chainId:d,chainName:l.name,nativeCurrency:l.nativeCurrency,rpcUrls:l.urls,blockExplorerUrls:l.blockExplorerUrls}:d}var c={56:{urls:["https://bsc-dataseed.binance.org"],name:"BNB Chain",nativeCurrency:M,blockExplorerUrls:["https://bscscan.com/"],icon:"/bnb.svg",id:56},42161:{id:42161,icon:"/arb.svg",urls:["https://arb1.arbitrum.io/rpc"],name:"Arbitrum One",nativeCurrency:m,blockExplorerUrls:["https://arbiscan.io/"]},1:{id:1,icon:"/eth.svg",urls:["https://ethereum.publicnode.com"],name:"Ethereum",nativeCurrency:m,blockExplorerUrls:["https://etherscan.io/"]},8453:{id:8453,icon:"/base.svg",urls:["https://base.meowrpc.com"],name:"Base",nativeCurrency:m,blockExplorerUrls:["https://basescan.org/"]},300:{id:300,icon:"/optimism.png",urls:["https://arb1.arbitrum.io/rpc"],name:"Optimism",nativeCurrency:m,blockExplorerUrls:["https://arbiscan.io/"]}},n=u()({},c),z=Object.keys(n).reduce(function(d,l){var h=n[Number(l)].urls;return h.length&&(d[Number(l)]=h),d},{})},20825:function(W,T,t){"use strict";t.d(T,{O:function(){return z},P:function(){return d}});var v=t(5574),u=t.n(v),M=t(77985),m=t.n(M),j=t(94299),a=t.n(j),c=(0,M.initializeConnector)(function(l){return new j.MetaMask({actions:l})}),n=u()(c,2),z=n[0],d=n[1]},78764:function(W,T,t){"use strict";t.d(T,{M$:function(){return j},_b:function(){return m},ei:function(){return u},qz:function(){return M}});var v={deployer:"0x0754f7fc90f842a6ace8b6ec89e4edadeb2a9ba5",usdc:"0xf7d7eaf3d6d3ab5a81514309f16395a37af6e6bc",eth:"0xb2b07ac6e3513d4e94b1c9c32057eadce1381bf0",matic:"0xe927ab3a717b5f4b17cae4a7879904f9de728161",oracle:"0xc94777b9a10cebe85c2f91972deb176cde86e027",swap:"0xec4eeebd0b2ea356ae30b0d613b16eaa8ac01c27",addressProvider:"0xe44278ace07452e45373d93e458a00aded87ad8a",mainPool:"0x07b18069e6d06ed9f3e6dd604ef63fecda2865fc",ethUsdcPool:"0xe7ac4b2f2def09d5b64a4b20c43c3f4b8b67d87d",usdcStrategy:"0x1ca45e58a067b770ff0f03dcb7f4c3d075d1c814",ethStrategy:"0x4853f4cf2274def143d58a2068f62c52c8aa59a2",maticStrategy:"0xfa3e8a1f76429e5e1ba107dfe95ca66a8fd53c92",mainPoolConfigurator:"0xcd2b058bf079ce75a1deaa6f5e7eb6d3cd66802c",flashLoanReceiver:"0x0997205e3415fd3b3694650f1bfb2a9804c409ef",dataProvider:"0x131bbaaa298ba663a507c283a3817f0aa9c4a76a"},u=function(c){return v[c]},M=function(c){var n={56:"0x55d398326f99059fF775485246999027B3197955",42161:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"};return n[c]},m=function(c){var n={56:"0x04fEfd2cCAD9782174Bc2aD81ba76432e06e3B5a",42161:"0x6Bc39f8de47fE6aBFB05f55E0F6b216c5F3cbd00"};return n[c]},j=function(c){var n={56:"https://bscscan.com/",42161:"https://arbiscan.io/"};return n[c]}},67937:function(W,T,t){"use strict";t.d(T,{AR:function(){return c},Gm:function(){return a},HJ:function(){return l},LP:function(){return h}});var v=t(78764),u=[{name:"Polygon",img:"/polygon.svg",id:80001,checked:!1},{name:"Arbitrum",img:"/art.png",id:69,checked:!1},{name:"HardHat",img:"/polygon.svg",id:31337,checked:!1},{name:"Ganache",img:"/polygon.svg",id:1337,checked:!1}],M=80001,m=function(){return u},j=function(){return u.find(function(E){return E.id==M})},a={"main pool":{id:1,address:(0,v.ei)("mainPool")},"eth-usdc pool":{id:2,address:(0,v.ei)("ethUsdcPool")}},c=function(E){return a[E].address},n=[{key:"5",name:"USDT",address:(0,v.ei)("usdc"),decimals:6,icon:"/usdt.svg",pools:["main pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],z=[{key:"2",name:"MATIC",address:"0x1Df2FAa18c6D0EAa5CE77feEC82AF5e7ae03D56e",decimals:18,pools:["main pool","eth-usdc pool"],icon:"/matic.svg"},{key:"3",name:"ETH",address:"0x632e32C4003B6e71DA94eD5D05ED15044F97Bf7a",decimals:18,icon:"/eth.svg",pools:["main pool","eth-usdc pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],d=[{key:"3",name:"ETH",icon:"/eth.svg",pools:["main pool"]},{key:"4",name:"USDC",icon:"/usdc.svg",pools:["main pool"]}],l=function(E){return{69:d,80001:n,31337:n,1337:z}[E||M]},h=function(E,ae){var X=l(E);return X.find(function(Q){return Q.name==ae})},e=function(E,ae){var X=l(E);return X.find(function(Q){return Q.address==ae})}},25543:function(W,T,t){"use strict";var v=t(67294),u=(0,v.createContext)(null);T.Z=u},93595:function(W,T,t){"use strict";t.r(T),t.d(T,{default:function(){return Tt}});var v=t(15009),u=t.n(v),M=t(99289),m=t.n(M),j=t(5574),a=t.n(j),c=t(22974),n=t(67294),z=t(80882),d=t(19515),l={input:"input___nfMJ_",tokenlist:"tokenlist___ArGAq",item:"item___QVP7y"},h={button:"button___VhKC6",primary:"primary___EjeYI"},e=t(85893);function U(i){var r=i.title,p=i.desc,x=i.choose,A=i.maxValue,b=i.selectToken,g=i.selectChain,D=i.currentToken,N=i.currentChain,le=i.max,F=i.chooseToken,ee=i.onMax,H=i.defaultValue,K=i.onChange,se=i.simple,te=(0,n.useState)(!1),de=a()(te,2),pe=de[0],I=de[1],ce=(0,n.useState)(!0),ye=a()(ce,2),ie=ye[0],$=ye[1],me=(0,n.useState)(!1),fe=a()(me,2),ve=fe[0],he=fe[1],Se=(0,n.useState)(H),be=a()(Se,2),re=be[0],L=be[1],ke=(0,n.useState)(H),ge=a()(ke,2),Ae=ge[0],_e=ge[1],Te=function(){ee&&ee(),L(A),K(A)};return(0,n.useEffect)(function(){!ve&&L((0,d.vL)(H)),_e(H)},[H]),(0,e.jsxs)("div",{className:"text-gray-4 flex flex-column gap-2",children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("div",{children:r}),!se&&(0,e.jsxs)("div",{className:"flex flex-align-center gap-2 fw-bold ".concat(x&&"token-hover"),children:[(0,e.jsx)("img",{src:N==null?void 0:N.icon,width:"16"}),x&&(0,e.jsxs)("div",{onClick:g,style:{fontSize:"14px"},children:[N==null?void 0:N.name," ",(0,e.jsx)(z.Z,{style:{fontSize:"12px"}})]})||(0,e.jsxs)("div",{children:[N==null?void 0:N.name," "]})]})]}),(0,e.jsxs)("div",{className:"".concat(l.input," flex flex-column gap-2"),style:{border:pe&&"1px solid #ff5c28"||"1px solid rgba(0,0,0,0)"},children:[(0,e.jsxs)("div",{className:" flex flex-between  gap-2",children:[!se&&(0,e.jsxs)("div",{style:{padding:"1px 8px"},className:"flex flex-align-center gap-2 fw-bold ".concat(F&&"token-hover"),onClick:F&&b,children:[(0,e.jsx)("img",{src:D==null?void 0:D.icon,width:"25"}),(0,e.jsx)("span",{children:D==null?void 0:D.name}),F&&(0,e.jsx)(z.Z,{})]}),!se&&(0,e.jsx)("input",{value:re,onChange:function(G){L(G.target.value),K(G.target.value)},onFocus:function(){return I(!0)},onBlur:function(){return I(!1)},placeholder:"0.0",className:"flex-auto",style:{fontSize:"20px",width:"100%",color:"#fff",fontWeight:"bold"}})||(0,e.jsxs)(e.Fragment,{children:[" ",(0,e.jsx)("div",{style:{flex:1},children:(0,e.jsx)("input",{value:re,onChange:function(G){L(G.target.value),K(G.target.value)},onFocus:function(){I(!0),L(H),$(!1),he(!0)},onBlur:function(){he(!1),I(!1),L((0,d.vL)(H)),$(!0)},placeholder:"Enter the address to receive the tokens",style:{fontSize:ie&&"14px"||"12px",width:"100%",textAlign:"left",color:"#fff"}})}),ie&&(0,e.jsx)("div",{className:"".concat(h.button," ").concat(h.primary),onClick:function(){K("")},children:"Edit"})]})]}),p&&(0,e.jsxs)("div",{className:"flex flex-between  gap-2",children:[(0,e.jsx)("div",{children:p}),le&&(0,e.jsx)("span",{className:"max",onClick:Te,children:"Max"})]})]})]})}var E=t(77171),ae=t(2068),X=t(45605),Q=t(67937),nt=t(13448),Ce=t(77939),at=t(71577),je=t(63463),Oe=t(37620),st=Object.defineProperty,Be=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,Pe=(i,r,p)=>r in i?st(i,r,{enumerable:!0,configurable:!0,writable:!0,value:p}):i[r]=p,ut=(i,r)=>{for(var p in r||(r={}))it.call(r,p)&&Pe(i,p,r[p]);if(Be)for(var p of Be(r))rt.call(r,p)&&Pe(i,p,r[p]);return i};const ot=i=>n.createElement("svg",ut({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48,role:"img"},i),n.createElement("path",{d:"M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"}));var Zt="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0zNzgtMjQ2IDE1NC00NzBsNDMtNDMgMTgxIDE4MSAzODQtMzg0IDQzIDQzLTQyNyA0MjdaIi8+PC9zdmc+",Le=function(r){var p=r.children,x=r.onSelect,A=r.value,b=(0,n.useState)(A||null),g=a()(b,2),D=g[0],N=g[1],le=function(ee){N(ee),x&&x(ee)};return(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:n.Children.map(p,function(F){return n.cloneElement(F,{onSelect:le,selected:F.props.value===D})})})},lt=function(r){var p=r.children,x=r.onSelect,A=r.selected,b=r.disabled,g=r.value;return(0,e.jsx)("div",{onClick:function(){return!b&&x&&x(g)},className:"".concat(h.button," ").concat(A&&h.primary),style:{marginRight:"10px"},children:(0,e.jsxs)("div",{children:[A&&(0,e.jsx)(ot,{}),"  ",p]})})};Le.Item=lt;var B=Le,q=t(20825),dt=t(34339),pt=t(25543),oe=t(64146),ze=t(35553),ct=t(21046),Ue=t(38483),R=t(78764),yt=t(59749),we=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"BlockPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"BlockReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_blockedUser","type":"address"},{"indexed":false,"internalType":"uint256","name":"_balance","type":"uint256"}],"name":"DestroyedBlockedFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"NewPrivilegedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"RemovedPrivilegedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_trustedDeFiContract","type":"address"}],"name":"addPrivilegedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addToBlockedList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blockedUser","type":"address"}],"name":"destroyBlockedFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_l2Gateway","type":"address"},{"internalType":"address","name":"_l1Counterpart","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTrusted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l2Gateway","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_destination","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeFromBlockedList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_trustedDeFiContract","type":"address"}],"name":"removePrivilegedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),mt=t(64622),ft=t(6154),vt="https://movie.jdd001.top",Re=ft.Z.create({baseURL:vt,timeout:1e4}),ht=function(){var i=m()(u()().mark(function r(p){var x;return u()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,Re.get(p);case 3:return x=b.sent,b.abrupt("return",x.data);case 7:throw b.prev=7,b.t0=b.catch(0),b.t0;case 10:case"end":return b.stop()}},r,null,[[0,7]])}));return function(p){return i.apply(this,arguments)}}(),bt=function(){var i=m()(u()().mark(function r(p,x){var A;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,Re.post(p,x);case 3:return A=g.sent,g.abrupt("return",A.data);case 7:throw g.prev=7,g.t0=g.catch(0),g.t0;case 10:case"end":return g.stop()}},r,null,[[0,7]])}));return function(p,x){return i.apply(this,arguments)}}(),P={h100:"h100___hE_b0",title:"title___wSlJR",tokenlist:"tokenlist___NSozx",item:"item___ruSGv"},gt=function(r){var p=nt.Z.useNotification(),x=a()(p,2),A=x[0],b=x[1],g=q.P.useChainId,D=q.P.useAccounts,N=q.P.useIsActivating,le=q.P.useIsActive,F=q.P.useProvider,ee=q.P.useENSNames,H=(0,n.useState)(!1),K=a()(H,2),se=K[0],te=K[1],de=(0,n.useState)(""),pe=a()(de,2),I=pe[0],ce=pe[1],ye=(0,n.useState)(""),ie=a()(ye,2),$=ie[0],me=ie[1],fe=(0,n.useState)(),ve=a()(fe,2),he=ve[0],Se=ve[1],be=(0,n.useState)(),re=a()(be,2),L=re[0],ke=re[1],ge=(0,n.useState)(0),Ae=a()(ge,2),_e=Ae[0],Te=Ae[1],Z=(0,n.useState)(!1),G=a()(Z,2),xt=G[0],Mt=G[1],Ct=(0,n.useState)(0),Fe=a()(Ct,2),He=Fe[0],Ze=Fe[1],w=g(),Ve=(0,n.useContext)(pt.Z),Vt=Ve.currentChain,We=Ve.switchChain,jt=function(){te(!1)},wt=function(o){te(!1),Pt(o),It(o)},St=function(o){xe(!1),_e==0?We(o.id):Je(o)},kt=(0,n.useState)(!1),Ge=a()(kt,2),At=Ge[0],xe=Ge[1],_t=(0,n.useState)(!1),Ye=a()(_t,2),Nt=Ye[0],Et=Ye[1],Ne=[{id:56,name:"BNB Chain",icon:"/bnb.svg"},{id:42161,name:"Arbitrum One",icon:"/arb.svg"},{id:1,icon:"/eth.svg",name:"Ethereum"},{id:8453,icon:"/base.svg",name:"Base"},{id:300,icon:"/optimism.png",name:"Optimism"}],Qe={56:{name:"BNB Chain",icon:"/bnb.svg"},42161:{name:"Arbitrum One",icon:"/arb.svg"},1:{icon:"/eth.svg",name:"Ethereum"},8453:{icon:"/base.svg",name:"Base"},300:{icon:"/optimism.png",name:"Optimism"}},Dt=(0,n.useState)((0,Q.HJ)(null)[0]),Ke=a()(Dt,2),ue=Ke[0],It=Ke[1],Ot=(0,n.useState)(Ne[1]),$e=a()(Ot,2),V=$e[0],Je=$e[1],Bt=(0,n.useState)((0,Q.HJ)(null)[0]),Xe=a()(Bt,2),Me=Xe[0],Pt=Xe[1],Lt=(0,n.useState)(Ne[1]),qe=a()(Lt,2),Ee=qe[0],et=qe[1],O=D(),ne=F();(0,n.useEffect)(function(){et(yt.zG[w||56]),me(O&&O[0]||"")},[w]),(0,n.useEffect)(function(){if(!!(0,R._b)(w)&&ne&&O!==null&&O!==void 0&&O.length){tt(O[0]),Rt(),Se(new oe.CH((0,R._b)(w),mt.A,ne==null?void 0:ne.getSigner()));var s=new oe.CH((0,R.qz)(w),we,ne);s.balanceOf(O[0]).then(function(o){var f=ze.formatUnits(o,w==56?18:6)*1;ke(f.toFixed(6))}).catch(function(o){console.error("Failed to fetch USDT balance:",o)})}},[ne,O]);var zt=function(){debugger;et(V),Je(Ee),We(V.id)};function Ut(){return De.apply(this,arguments)}function De(){return De=m()(u()().mark(function s(){var o,f,S,k,Y,y,J,_;return u()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return o=new Ue.Q(window.ethereum),f=(0,R.qz)(w),S=(0,R._b)(w),k=o.getSigner(),C.next=6,k.getAddress();case 6:Y=C.sent,y=new oe.CH(f,we,k);debugger;return C.next=11,y.approve(S,ct.Bz);case 11:return J=C.sent,C.next=14,J.wait();case 14:_=C.sent,Ze(.1),console.log("Transaction hash:",_.transactionHash),console.log("Transaction receipt:",_);case 18:case"end":return C.stop()}},s)})),De.apply(this,arguments)}function Rt(){return Ie.apply(this,arguments)}function Ie(){return Ie=m()(u()().mark(function s(){var o,f,S,k,Y,y;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return o=new Ue.Q(window.ethereum),f=O[0],S=(0,R._b)(w),k=(0,R.qz)(w),Y=new oe.CH(k,we,o),_.next=7,Y.allowance(f,S);case 7:y=_.sent,Ze(y.toString());case 9:case"end":return _.stop()}},s)})),Ie.apply(this,arguments)}var Ft=function(){var s=m()(u()().mark(function o(f){var S,k;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return S={address:O[0],from:Ee.id,fromScan:f,to:V.id,toScan:$,token:"USDT",amount:I,mode:"1",status:"1"},y.next=3,bt("/api/transferHistory",S);case 3:k=y.sent,tt(O[0]);case 5:case"end":return y.stop()}},o)}));return function(f){return s.apply(this,arguments)}}(),tt=function(){var s=m()(u()().mark(function o(f){var S,k;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,ht("/api/transferHistory?address="+f);case 2:S=y.sent,k=r.dispatch,k({type:"history/updateData",payload:{data:S.data}});case 5:case"end":return y.stop()}},o)}));return function(f){return s.apply(this,arguments)}}();return(0,e.jsxs)("div",{style:{padding:"50px 0"},className:"flex flex-center",children:[b,(0,e.jsxs)("div",{className:"flex flex-column gap-4",style:{width:"375px",backgroundColor:"#1c1b1b",padding:"1.25rem",border:"1px solid #2f343e",borderRadius:"1rem",position:"relative",overflow:"hidden"},children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginBottom:"15px"},children:[(0,e.jsx)("span",{children:"Mode"}),(0,e.jsx)("div",{style:{marginRight:"-10px"},children:(0,e.jsxs)(B,{value:"FlashBridge",onSelect:function(){},children:[(0,e.jsx)(B.Item,{value:"FlashBridge",children:"FlashBridge"}),(0,e.jsx)(B.Item,{disabled:!0,value:"zkBridge",children:"zkBridge"})]})})]}),(0,e.jsx)(Ce.Z,{open:Nt,placement:"right",title:"10 USDT At Most in the Small-Amount Mainnet",children:(0,e.jsx)(U,{defaultValue:I,onChange:function(o){ce(o),Et(o>=10)},max:!0,currentChain:Ee,currentToken:Me,selectToken:function(){te(!0)},selectChain:function(){xe(!0),Te(0)},title:"From",maxValue:L,desc:L>=0&&"Balance: ".concat(L," ").concat(Me==null?void 0:Me.name),choose:!0,chooseToken:!0},"ti1")}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)("div",{className:"swap-hover",onClick:zt,children:(0,e.jsx)(E.Z,{style:{color:"#ffffff"}})})}),(0,e.jsx)(U,{defaultValue:I,onChange:function(o){return ce(o)},currentChain:V,currentToken:ue,selectToken:function(){te(!0)},selectChain:function(){xe(!0),Te(1)},title:"To",desc:I&&"Expect to receive: ".concat(I," ").concat(ue==null?void 0:ue.name),choose:!0},"ti2"),(0,e.jsx)(U,{simple:!0,defaultValue:$,onChange:function(o){return me(o)},currentChain:V,currentToken:ue,title:"Recipient Address",choose:!0},"ti3"),(0,e.jsx)(at.Z,{disabled:!0,onClick:m()(u()().mark(function s(){return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(w){f.next=2;break}return f.abrupt("return");case 2:if(He!=0){f.next=5;break}return Ut(),f.abrupt("return");case 5:he.sendToken(V.id,(0,R.qz)(w),$,ze.parseUnits(I,w==56?18:6)).then(function(){var S=m()(u()().mark(function k(Y){var y,J,_;return u()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Y.wait();case 2:y=C.sent,console.log("sendResult",y),y.status==1&&(Ft(y.transactionHash),A.info({icon:(0,e.jsx)(ae.Z,{}),message:"Done",description:(0,e.jsx)("a",{target:"_blank",href:"".concat((0,R.M$)(V.id),"/address/").concat($,"#tokentxns"),className:P.tokenlist,children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[(0,e.jsx)("img",{src:(J=Qe[V.id])===null||J===void 0?void 0:J.icon,style:{width:"24px"}}),(0,e.jsx)("p",{style:{margin:0},children:(_=Qe[V.id])===null||_===void 0?void 0:_.name}),(0,e.jsx)(dt.r,{width:24,fill:"#fff"})]})}),placement:"topRight",duration:30}));case 5:case"end":return C.stop()}},k)}));return function(k){return S.apply(this,arguments)}}()).catch(function(S){});case 6:case"end":return f.stop()}},s)})),style:{overflow:"hidden",textOverflow:"ellipsis",borderRadius:"30px",padding:"8px 26px",height:"auto"},type:"primary",children:w&&(He==0&&"Approve"||"Confirm")||"Connect Wallet"}),(0,e.jsxs)(je.Z,{title:"Select Token",className:P.h100,placement:"bottom",onClose:jt,open:se,getContainer:!1,maskClosable:!1,style:{position:"absolute"},children:[(0,e.jsxs)("div",{className:P.title,children:[(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Token Name"})}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Balance"})})]}),(0,e.jsx)("hr",{}),(0,e.jsx)("div",{className:P.tokenlist,children:(0,Q.HJ)(null).map(function(s){return(0,e.jsxs)("div",{className:P.item,onClick:function(){return wt(s)},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:s.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:s.name})]}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"0"})})]})})})]}),(0,e.jsx)(je.Z,{title:"Select  Chain",className:P.h100,placement:"bottom",onClose:function(){return xe(!1)},open:At,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsx)("div",{className:P.tokenlist,children:Ne.map(function(s){return(0,e.jsx)("div",{className:P.item,onClick:function(){return St(s)},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:s.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:s.name})]})})})})}),(0,e.jsx)(je.Z,{title:"Advanced Settings",className:P.h100,placement:"bottom",onClose:function(){return Mt(!1)},open:xt,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsxs)("div",{className:P.tokenlist,children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("span",{children:" Gas on destination chain"}),(0,e.jsx)(Ce.Z,{title:"The default amount allows you to perform a couple of transactions (e.g. Approve and Swap). Once you approve the transfer in your wallet, the transaction gas amount will be higher than a regular transaction as this includes the selected amount of destination gas to be sent.",children:(0,e.jsx)(X.Z,{})})]}),"111111",(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(B,{value:"none",onSelect:function(){},children:[(0,e.jsx)(B.Item,{value:"none",children:"None"}),(0,e.jsx)(B.Item,{value:"default",children:"Default"})]}),(0,e.jsx)(Oe.Z,{style:{marginTop:"20px"},placeholder:"0.0",prefix:(0,e.jsx)("span",{children:(0,e.jsx)("img",{src:"/eth.svg",style:{marginRight:"5px",width:"20px"}})}),suffix:(0,e.jsx)("span",{children:"Max"})}),(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginTop:"30px"},children:[(0,e.jsx)("span",{children:" Slippage tolerance"}),(0,e.jsx)(Ce.Z,{title:"Your transaction will revert if the price changes unfavorably by more than this percentage",children:(0,e.jsx)(X.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(B,{value:"0.1",onSelect:function(){},children:[(0,e.jsx)(B.Item,{value:"0.1",children:"0.1%"}),(0,e.jsx)(B.Item,{value:"0.5",children:"0.5%"}),(0,e.jsx)(B.Item,{value:"1.0",children:"1.0%"})]}),(0,e.jsx)(Oe.Z,{style:{marginTop:"20px"},placeholder:"0.0",suffix:(0,e.jsx)("span",{children:"%"})})]})})]})]})},Tt=(0,c.connect)(function(i){var r=i.history;return{history:r}})(gt)},19515:function(W,T,t){"use strict";t.d(T,{f_:function(){return u},vL:function(){return m}});var v=t(35553),u=function(a,c){if(a!=null)return v.formatUnits(a,c)},M=function(a,c){return ethers.utils.parseUnits("".concat(a),c)},m=function(a){if(!a||a.length<=10)return a;var c=a.slice(0,6),n=a.slice(-4);return"".concat(c,"...").concat(n)}},34339:function(W,T,t){"use strict";t.d(T,{r:function(){return n}});var v=t(67294),u=Object.defineProperty,M=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,a=(d,l,h)=>l in d?u(d,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):d[l]=h,c=(d,l)=>{for(var h in l||(l={}))m.call(l,h)&&a(d,h,l[h]);if(M)for(var h of M(l))j.call(l,h)&&a(d,h,l[h]);return d};const n=d=>v.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48,role:"img"},d),v.createElement("path",{d:"M215.384-160q-23.057 0-39.221-16.163Q160-192.327 160-215.384v-529.232q0-23.057 16.163-39.221Q192.327-800 215.384-800h224.385v30.769H215.384q-9.23 0-16.923 7.692-7.692 7.693-7.692 16.923v529.232q0 9.23 7.692 16.923 7.693 7.692 16.923 7.692h529.232q9.23 0 16.923-7.692 7.692-7.693 7.692-16.923v-224.385H800v224.385q0 23.057-16.163 39.221Q767.673-160 744.616-160H215.384Zm171.231-204.384-22-22.231 382.616-382.616H541.308V-800H800v258.692h-30.769V-747L386.615-364.384Z"}));var z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0yMTUuMzg0LTE2MHEtMjMuMDU3IDAtMzkuMjIxLTE2LjE2M1ExNjAtMTkyLjMyNyAxNjAtMjE1LjM4NHYtNTI5LjIzMnEwLTIzLjA1NyAxNi4xNjMtMzkuMjIxUTE5Mi4zMjctODAwIDIxNS4zODQtODAwaDIyNC4zODV2MzAuNzY5SDIxNS4zODRxLTkuMjMgMC0xNi45MjMgNy42OTItNy42OTIgNy42OTMtNy42OTIgMTYuOTIzdjUyOS4yMzJxMCA5LjIzIDcuNjkyIDE2LjkyMyA3LjY5MyA3LjY5MiAxNi45MjMgNy42OTJoNTI5LjIzMnE5LjIzIDAgMTYuOTIzLTcuNjkyIDcuNjkyLTcuNjkzIDcuNjkyLTE2LjkyM3YtMjI0LjM4NUg4MDB2MjI0LjM4NXEwIDIzLjA1Ny0xNi4xNjMgMzkuMjIxUTc2Ny42NzMtMTYwIDc0NC42MTYtMTYwSDIxNS4zODRabTE3MS4yMzEtMjA0LjM4NC0yMi0yMi4yMzEgMzgyLjYxNi0zODIuNjE2SDU0MS4zMDhWLTgwMEg4MDB2MjU4LjY5MmgtMzAuNzY5Vi03NDdMMzg2LjYxNS0zNjQuMzg0WiIvPjwvc3ZnPg=="},88677:function(){},62808:function(){}}]);
