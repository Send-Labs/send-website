(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[170],{59749:function(W,g,n){"use strict";n.d(g,{RP:function(){return a},ns:function(){return F},zG:function(){return t}});var b=n(97857),u=n.n(b),j={name:"BNB",symbol:"BNB",decimals:18},v={name:"ETH",symbol:"ETH",decimals:18};function M(x){return!!x.nativeCurrency}function a(x){var h=t[x];return M(h)?{chainId:x,chainName:h.name,nativeCurrency:h.nativeCurrency,rpcUrls:h.urls,blockExplorerUrls:h.blockExplorerUrls}:x}var p={56:{urls:["https://bsc-dataseed.binance.org"],name:"BNB Chain",nativeCurrency:j,blockExplorerUrls:["https://bscscan.com/"],icon:"/bnb.svg",id:56},42161:{id:42161,icon:"/arb.svg",urls:["https://arb1.arbitrum.io/rpc"],name:"Arbitrum One",nativeCurrency:v,blockExplorerUrls:["https://arbiscan.io/"]}},t=u()({},p),F=Object.keys(t).reduce(function(x,h){var P=t[Number(h)].urls;return P.length&&(x[Number(h)]=P),x},{})},20825:function(W,g,n){"use strict";n.d(g,{O:function(){return F},P:function(){return x}});var b=n(5574),u=n.n(b),j=n(77985),v=n.n(j),M=n(94299),a=n.n(M),p=(0,j.initializeConnector)(function(h){return new M.MetaMask({actions:h})}),t=u()(p,2),F=t[0],x=t[1]},78764:function(W,g,n){"use strict";n.d(g,{M$:function(){return M},_b:function(){return v},ei:function(){return u},qz:function(){return j}});var b={deployer:"0x0754f7fc90f842a6ace8b6ec89e4edadeb2a9ba5",usdc:"0xf7d7eaf3d6d3ab5a81514309f16395a37af6e6bc",eth:"0xb2b07ac6e3513d4e94b1c9c32057eadce1381bf0",matic:"0xe927ab3a717b5f4b17cae4a7879904f9de728161",oracle:"0xc94777b9a10cebe85c2f91972deb176cde86e027",swap:"0xec4eeebd0b2ea356ae30b0d613b16eaa8ac01c27",addressProvider:"0xe44278ace07452e45373d93e458a00aded87ad8a",mainPool:"0x07b18069e6d06ed9f3e6dd604ef63fecda2865fc",ethUsdcPool:"0xe7ac4b2f2def09d5b64a4b20c43c3f4b8b67d87d",usdcStrategy:"0x1ca45e58a067b770ff0f03dcb7f4c3d075d1c814",ethStrategy:"0x4853f4cf2274def143d58a2068f62c52c8aa59a2",maticStrategy:"0xfa3e8a1f76429e5e1ba107dfe95ca66a8fd53c92",mainPoolConfigurator:"0xcd2b058bf079ce75a1deaa6f5e7eb6d3cd66802c",flashLoanReceiver:"0x0997205e3415fd3b3694650f1bfb2a9804c409ef",dataProvider:"0x131bbaaa298ba663a507c283a3817f0aa9c4a76a"},u=function(p){return b[p]},j=function(p){var t={56:"0x55d398326f99059fF775485246999027B3197955",42161:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"};return t[p]},v=function(p){var t={56:"0x162C7EC514Cd835AC3760A3B234d9f9228279029",42161:"0x839837fAC18314924Ee292BfAB4b8bCA81D11864"};return t[p]},M=function(p){var t={56:"https://bscscan.com/",42161:"https://arbiscan.io/"};return t[p]}},67937:function(W,g,n){"use strict";n.d(g,{AR:function(){return p},Gm:function(){return a},HJ:function(){return h},LP:function(){return P}});var b=n(78764),u=[{name:"Polygon",img:"/polygon.svg",id:80001,checked:!1},{name:"Arbitrum",img:"/art.png",id:69,checked:!1},{name:"HardHat",img:"/polygon.svg",id:31337,checked:!1},{name:"Ganache",img:"/polygon.svg",id:1337,checked:!1}],j=80001,v=function(){return u},M=function(){return u.find(function(E){return E.id==j})},a={"main pool":{id:1,address:(0,b.ei)("mainPool")},"eth-usdc pool":{id:2,address:(0,b.ei)("ethUsdcPool")}},p=function(E){return a[E].address},t=[{key:"5",name:"USDT",address:(0,b.ei)("usdc"),decimals:6,icon:"/usdt.svg",pools:["main pool"]}],F=[{key:"2",name:"MATIC",address:"0x1Df2FAa18c6D0EAa5CE77feEC82AF5e7ae03D56e",decimals:18,pools:["main pool","eth-usdc pool"],icon:"/matic.svg"},{key:"3",name:"ETH",address:"0x632e32C4003B6e71DA94eD5D05ED15044F97Bf7a",decimals:18,icon:"/eth.svg",pools:["main pool","eth-usdc pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],x=[{key:"3",name:"ETH",icon:"/eth.svg",pools:["main pool"]},{key:"4",name:"USDC",icon:"/usdc.svg",pools:["main pool"]}],h=function(E){return{69:x,80001:t,31337:t,1337:F}[E||j]},P=function(E,K){var G=h(E);return G.find(function(ee){return ee.name==K})},e=function(E,K){var G=h(E);return G.find(function(ee){return ee.address==K})}},25543:function(W,g,n){"use strict";var b=n(67294),u=(0,b.createContext)(null);g.Z=u},70634:function(W,g,n){"use strict";n.r(g),n.d(g,{default:function(){return ln}});var b=n(15009),u=n.n(b),j=n(99289),v=n.n(j),M=n(5574),a=n.n(M),p=n(22974),t=n(67294),F=n(80882),x=n(19515),h={input:"input___nfMJ_",tokenlist:"tokenlist___ArGAq",item:"item___QVP7y"},P={button:"button___VhKC6",primary:"primary___EjeYI"},e=n(85893);function O(r){var i=r.title,l=r.desc,f=r.choose,S=r.maxValue,y=r.selectToken,m=r.selectChain,N=r.currentToken,_=r.currentChain,ie=r.max,R=r.chooseToken,Q=r.onMax,ne=r.defaultValue,J=r.onChange,te=r.simple,Y=(0,t.useState)(!1),ue=a()(Y,2),oe=ue[0],A=ue[1],le=(0,t.useState)(ne),de=a()(le,2),ae=de[0],D=de[1],pe=function(){Q&&Q(),D(S),J(S)};return(0,t.useEffect)(function(){D((0,x.vL)(ne))},[ne]),(0,e.jsxs)("div",{className:"text-gray-4 flex flex-column gap-2",children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("div",{children:i}),!te&&(0,e.jsxs)("div",{className:"flex flex-align-center gap-2 fw-bold ".concat(f&&"token-hover"),children:[(0,e.jsx)("img",{src:_==null?void 0:_.icon,width:"16"}),f&&(0,e.jsxs)("div",{onClick:m,style:{fontSize:"14px"},children:[_==null?void 0:_.name," ",(0,e.jsx)(F.Z,{style:{fontSize:"12px"}})]})||(0,e.jsxs)("div",{children:[_==null?void 0:_.name," "]})]})]}),(0,e.jsxs)("div",{className:"".concat(h.input," flex flex-column gap-2"),style:{border:oe&&"1px solid #ff5c28"||"1px solid rgba(0,0,0,0)"},children:[(0,e.jsxs)("div",{className:" flex flex-between  gap-2",children:[!te&&(0,e.jsxs)("div",{style:{padding:"1px 8px"},className:"flex flex-align-center gap-2 fw-bold ".concat(R&&"token-hover"),onClick:R&&y,children:[(0,e.jsx)("img",{src:N==null?void 0:N.icon,width:"25"}),(0,e.jsx)("span",{children:N==null?void 0:N.name}),R&&(0,e.jsx)(F.Z,{})]}),!te&&(0,e.jsx)("input",{value:ae,onChange:function(H){D(H.target.value),J(H.target.value)},onFocus:function(){return A(!0)},onBlur:function(){return A(!1)},placeholder:"0.0",className:"flex-auto",style:{fontSize:"20px",width:"100%",color:"#fff",fontWeight:"bold"}})||(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{value:ae,onChange:function(H){D(H.target.value),J(H.target.value)},onFocus:function(){return A(!0)},onBlur:function(){A(!1)},placeholder:"Enter the address to receive the tokens",style:{fontSize:"14px",width:"100%",textAlign:"left",color:"#fff"}}),(0,e.jsx)("div",{className:"".concat(P.button," ").concat(P.primary),onClick:function(){D("")},children:"Edit"})]})]}),l&&(0,e.jsxs)("div",{className:"flex flex-between  gap-2",children:[(0,e.jsx)("div",{children:l}),ie&&(0,e.jsx)("span",{className:"max",onClick:pe,children:"Max"})]})]})]})}var E=n(77171),K=n(45605),G=n(67937),ee=n(13448),We=n(71577),fe=n(63463),we=n(77939),Se=n(37620),Ke=Object.defineProperty,ke=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,je=(r,i,l)=>i in r?Ke(r,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[i]=l,Je=(r,i)=>{for(var l in i||(i={}))$e.call(i,l)&&je(r,l,i[l]);if(ke)for(var l of ke(i))Qe.call(i,l)&&je(r,l,i[l]);return r};const Ye=r=>t.createElement("svg",Je({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48,role:"img"},r),t.createElement("path",{d:"M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"}));var In="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0zNzgtMjQ2IDE1NC00NzBsNDMtNDMgMTgxIDE4MSAzODQtMzg0IDQzIDQzLTQyNyA0MjdaIi8+PC9zdmc+",Me=function(i){var l=i.children,f=i.onSelect,S=i.value,y=(0,t.useState)(S||null),m=a()(y,2),N=m[0],_=m[1],ie=function(Q){_(Q),f&&f(Q)};return(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:t.Children.map(l,function(R){return t.cloneElement(R,{onSelect:ie,selected:R.props.value===N})})})},Xe=function(i){var l=i.children,f=i.onSelect,S=i.selected,y=i.value;return(0,e.jsx)("div",{onClick:function(){return f&&f(y)},className:"".concat(P.button," ").concat(S&&P.primary),style:{marginRight:"10px"},children:(0,e.jsxs)("div",{children:[S&&(0,e.jsx)(Ye,{}),"  ",l]})})};Me.Item=Xe;var B=Me,$=n(20825),qe=n(25543),re=n(64146),_e=n(35553),en=n(21046),Ae=n(38483),nn=n(59749),ve=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"BlockPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"BlockReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_blockedUser","type":"address"},{"indexed":false,"internalType":"uint256","name":"_balance","type":"uint256"}],"name":"DestroyedBlockedFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"NewPrivilegedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"RemovedPrivilegedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_trustedDeFiContract","type":"address"}],"name":"addPrivilegedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addToBlockedList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blockedUser","type":"address"}],"name":"destroyBlockedFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_l2Gateway","type":"address"},{"internalType":"address","name":"_l1Counterpart","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTrusted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l2Gateway","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_destination","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeFromBlockedList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_trustedDeFiContract","type":"address"}],"name":"removePrivilegedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),tn=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"sourceChainId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"targetChainId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"transferId",type:"uint256"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"CrosschainTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"DebtRecorded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"depositor",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenDeposited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensWithdrawn",type:"event"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"_transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"chainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"address",name:"token",type:"address"}],name:"getDebt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"sendCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"targetChainId",type:"uint256"},{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"sendToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"sourceChainId",type:"uint256"},{internalType:"uint256",name:"transferId",type:"uint256"},{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"withdrawAllTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"withdrawDebt",outputs:[],stateMutability:"nonpayable",type:"function"}],an=n(6154),sn="",Ee=an.Z.create({baseURL:sn,timeout:1e4}),rn=function(){var r=v()(u()().mark(function i(l){var f;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.prev=0,y.next=3,Ee.get(l);case 3:return f=y.sent,y.abrupt("return",f.data);case 7:throw y.prev=7,y.t0=y.catch(0),y.t0;case 10:case"end":return y.stop()}},i,null,[[0,7]])}));return function(l){return r.apply(this,arguments)}}(),un=function(){var r=v()(u()().mark(function i(l,f){var S;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,m.next=3,Ee.post(l,f);case 3:return S=m.sent,m.abrupt("return",S.data);case 7:throw m.prev=7,m.t0=m.catch(0),m.t0;case 10:case"end":return m.stop()}},i,null,[[0,7]])}));return function(l,f){return r.apply(this,arguments)}}(),V=n(78764),I={h100:"h100___hE_b0",title:"title___wSlJR",tokenlist:"tokenlist___NSozx",item:"item___ruSGv"},on=function(i){var l=ee.Z.useNotification(),f=a()(l,2),S=f[0],y=f[1],m=$.P.useChainId,N=$.P.useAccounts,_=$.P.useIsActivating,ie=$.P.useIsActive,R=$.P.useProvider,Q=$.P.useENSNames,ne=(0,t.useState)(!1),J=a()(ne,2),te=J[0],Y=J[1],ue=(0,t.useState)(""),oe=a()(ue,2),A=oe[0],le=oe[1],de=(0,t.useState)(""),ae=a()(de,2),D=ae[0],pe=ae[1],U=(0,t.useState)(),H=a()(U,2),dn=H[0],pn=H[1],cn=(0,t.useState)(),De=a()(cn,2),he=De[0],yn=De[1],mn=(0,t.useState)(0),Be=a()(mn,2),fn=Be[0],Ne=Be[1],vn=(0,t.useState)(!1),Pe=a()(vn,2),hn=Pe[0],bn=Pe[1],Tn=(0,t.useState)(0),Oe=a()(Tn,2),be=Oe[0],Ie=Oe[1],k=m(),Re=(0,t.useContext)(qe.Z),Rn=Re.currentChain,Ue=Re.switchChain,gn=function(){Y(!1)},xn=function(o){Y(!1),An(o),jn(o)},Cn=function(o){ce(!1),fn==0?Ue(o.id):He(o)},wn=(0,t.useState)(!1),Le=a()(wn,2),Sn=Le[0],ce=Le[1],Te=[{id:56,name:"BNB Chain",icon:"/bnb.svg"},{id:42161,name:"Arbitrum One",icon:"/arb.svg"}],kn=(0,t.useState)((0,G.HJ)(null)[0]),ze=a()(kn,2),se=ze[0],jn=ze[1],Mn=(0,t.useState)(Te[1]),Fe=a()(Mn,2),X=Fe[0],He=Fe[1],_n=(0,t.useState)((0,G.HJ)(null)[0]),Ze=a()(_n,2),ye=Ze[0],An=Ze[1],En=(0,t.useState)(Te[1]),Ge=a()(En,2),ge=Ge[0],Ve=Ge[1],L=N(),q=R();(0,t.useEffect)(function(){Ve(nn.zG[k||56]),pe(L&&L[0]||"")},[k]),(0,t.useEffect)(function(){if(q&&L!==null&&L!==void 0&&L.length){On(L[0]),Nn(),pn(new re.CH((0,V._b)(k),tn,q==null?void 0:q.getSigner()));var s=new re.CH((0,V.qz)(k),ve,q);s.balanceOf(L[0]).then(function(o){var c=_e.formatUnits(o,k==56?18:6)*1;yn(c.toFixed(6))}).catch(function(o){console.error("Failed to fetch USDT balance:",o)})}},[q,L]);var Dn=function(){debugger;Ve(X),He(ge),Ue(X.id)};function Bn(){return xe.apply(this,arguments)}function xe(){return xe=v()(u()().mark(function s(){var o,c,C,w,Z,d,me,T;return u()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:debugger;return o=new Ae.Q(window.ethereum),c=(0,V.qz)(k),C=(0,V._b)(k),w=o.getSigner(),z.next=7,w.getAddress();case 7:Z=z.sent,d=new re.CH(c,ve,w);debugger;return z.next=12,d.approve(C,en.Bz);case 12:return me=z.sent,z.next=15,me.wait();case 15:T=z.sent,Ie(.1),console.log("Transaction hash:",T.transactionHash),console.log("Transaction receipt:",T);case 19:case"end":return z.stop()}},s)})),xe.apply(this,arguments)}function Nn(){return Ce.apply(this,arguments)}function Ce(){return Ce=v()(u()().mark(function s(){var o,c,C,w,Z,d;return u()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return o=new Ae.Q(window.ethereum),c=L[0],C=(0,V._b)(k),w=(0,V.qz)(k),Z=new re.CH(w,ve,o),T.next=7,Z.allowance(c,C);case 7:d=T.sent,Ie(d.toString());case 9:case"end":return T.stop()}},s)})),Ce.apply(this,arguments)}var Pn=function(){var s=v()(u()().mark(function o(c){var C,w;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return C={address:D,from:ge.id,fromScan:c,to:X.id,toScan:D,token:"USDT",amount:A,mode:"1",status:"1"},d.next=3,un("/api/transferHistory",C);case 3:w=d.sent;debugger;case 5:case"end":return d.stop()}},o)}));return function(c){return s.apply(this,arguments)}}(),On=function(){var s=v()(u()().mark(function o(c){var C,w;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,rn("/api/transferHistory?address="+c);case 2:C=d.sent,w=i.dispatch,w({type:"history/updateData",payload:{data:C.data}});case 5:case"end":return d.stop()}},o)}));return function(c){return s.apply(this,arguments)}}();return(0,e.jsxs)("div",{style:{padding:"50px 0"},className:"flex flex-center",children:[y,(0,e.jsxs)("div",{className:"flex flex-column gap-4",style:{width:"375px",backgroundColor:"#1c1b1b",padding:"1.25rem",border:"1px solid #2f343e",borderRadius:"1rem",position:"relative",overflow:"hidden"},children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginBottom:"15px"},children:[(0,e.jsx)("span",{children:"Mode"}),(0,e.jsx)("div",{style:{marginRight:"-10px"},children:(0,e.jsxs)(B,{value:"FlashBridge",onSelect:function(){},children:[(0,e.jsx)(B.Item,{value:"FlashBridge",children:"FlashBridge"}),(0,e.jsx)(B.Item,{value:"zkBridge",children:"zkBridge"})]})})]}),(0,e.jsx)(O,{defaultValue:A,onChange:function(o){return le(o)},max:!0,currentChain:ge,currentToken:ye,selectToken:function(){Y(!0)},selectChain:function(){ce(!0),Ne(0)},title:"From",maxValue:he,desc:he>=0&&"Balance: ".concat(he," ").concat(ye==null?void 0:ye.name),choose:!0,chooseToken:!0},"ti1"),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)("div",{className:"swap-hover",onClick:Dn,children:(0,e.jsx)(E.Z,{style:{color:"#ffffff"}})})}),(0,e.jsx)(O,{defaultValue:A,onChange:function(o){return le(o)},currentChain:X,currentToken:se,selectToken:function(){Y(!0)},selectChain:function(){ce(!0),Ne(1)},title:"To",desc:A&&"Expect to receive: ".concat(A," ").concat(se==null?void 0:se.name),choose:!0},"ti2"),(0,e.jsx)(O,{simple:!0,defaultValue:D,onChange:function(o){return pe(D)},currentChain:X,currentToken:se,title:"Recipient Address",choose:!0},"ti3"),(0,e.jsx)(We.Z,{disabled:A==""&&be!=0,onClick:v()(u()().mark(function s(){return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(k){c.next=2;break}return c.abrupt("return");case 2:if(be!=0){c.next=5;break}return Bn(),c.abrupt("return");case 5:dn.sendToken(X.id,(0,V.qz)(k),D,_e.parseUnits(A,k==56?18:6)).then(function(){var C=v()(u()().mark(function w(Z){var d;return u()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Z.wait();case 2:d=T.sent,console.log("sendResult",d),d.status==1&&(Pn(d.transactionHash),S.info({message:"Send Successful!",placement:"topRight"}));case 5:case"end":return T.stop()}},w)}));return function(w){return C.apply(this,arguments)}}()).catch(function(C){});case 6:case"end":return c.stop()}},s)})),style:{overflow:"hidden",textOverflow:"ellipsis"},type:"primary",className:"topConnect",children:k&&(be==0&&"Approve"||"Confirm")||"Connect Wallet"}),(0,e.jsxs)(fe.Z,{title:"Select Token",className:I.h100,placement:"bottom",onClose:gn,open:te,getContainer:!1,maskClosable:!1,style:{position:"absolute"},children:[(0,e.jsxs)("div",{className:I.title,children:[(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Token Name"})}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Balance"})})]}),(0,e.jsx)("hr",{}),(0,e.jsx)("div",{className:I.tokenlist,children:(0,G.HJ)(null).map(function(s){return(0,e.jsxs)("div",{className:I.item,onClick:function(){return xn(s)},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:s.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:s.name})]}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"0"})})]})})})]}),(0,e.jsx)(fe.Z,{title:"Select  Chain",className:I.h100,placement:"bottom",onClose:function(){return ce(!1)},open:Sn,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsx)("div",{className:I.tokenlist,children:Te.map(function(s){return(0,e.jsx)("div",{className:I.item,onClick:function(){return Cn(s)},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:s.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:s.name})]})})})})}),(0,e.jsx)(fe.Z,{title:"Advanced Settings",className:I.h100,placement:"bottom",onClose:function(){return bn(!1)},open:hn,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsxs)("div",{className:I.tokenlist,children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("span",{children:" Gas on destination chain"}),(0,e.jsx)(we.Z,{title:"The default amount allows you to perform a couple of transactions (e.g. Approve and Swap). Once you approve the transfer in your wallet, the transaction gas amount will be higher than a regular transaction as this includes the selected amount of destination gas to be sent.",children:(0,e.jsx)(K.Z,{})})]}),"111111",(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(B,{value:"none",onSelect:function(){},children:[(0,e.jsx)(B.Item,{value:"none",children:"None"}),(0,e.jsx)(B.Item,{value:"default",children:"Default"})]}),(0,e.jsx)(Se.Z,{style:{marginTop:"20px"},placeholder:"0.0",prefix:(0,e.jsx)("span",{children:(0,e.jsx)("img",{src:"/eth.svg",style:{marginRight:"5px",width:"20px"}})}),suffix:(0,e.jsx)("span",{children:"Max"})}),(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginTop:"30px"},children:[(0,e.jsx)("span",{children:" Slippage tolerance"}),(0,e.jsx)(we.Z,{title:"Your transaction will revert if the price changes unfavorably by more than this percentage",children:(0,e.jsx)(K.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(B,{value:"0.1",onSelect:function(){},children:[(0,e.jsx)(B.Item,{value:"0.1",children:"0.1%"}),(0,e.jsx)(B.Item,{value:"0.5",children:"0.5%"}),(0,e.jsx)(B.Item,{value:"1.0",children:"1.0%"})]}),(0,e.jsx)(Se.Z,{style:{marginTop:"20px"},placeholder:"0.0",suffix:(0,e.jsx)("span",{children:"%"})})]})})]})]})},ln=(0,p.connect)(function(r){var i=r.history;return{history:i}})(on)},19515:function(W,g,n){"use strict";n.d(g,{f_:function(){return u},vL:function(){return v}});var b=n(35553),u=function(a,p){if(a!=null)return b.formatUnits(a,p)},j=function(a,p){return ethers.utils.parseUnits("".concat(a),p)},v=function(a){if(a.length<=10)return a;var p=a.slice(0,6),t=a.slice(-4);return"".concat(p,"...").concat(t)}},88677:function(){},62808:function(){}}]);
