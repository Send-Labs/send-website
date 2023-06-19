(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[170],{59749:function(F,v,n){"use strict";n.d(v,{RP:function(){return e},ns:function(){return L},zG:function(){return y}});var m=n(97857),o=n.n(m),f={name:"Ether",symbol:"ETH",decimals:18},a={name:"Matic",symbol:"MATIC",decimals:18},j={name:"Celo",symbol:"CELO",decimals:18};function S(s){return!!s.nativeCurrency}function e(s){var t=y[s];return S(t)?{chainId:s,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:t.urls,blockExplorerUrls:t.blockExplorerUrls}:s}var d=function(t){return{NODE_ENV:"production",PUBLIC_PATH:"/"}.infuraKey?"https://".concat(t,".infura.io/v3/").concat({NODE_ENV:"production",PUBLIC_PATH:"/"}.infuraKey):void 0},T=function(t){return{NODE_ENV:"production",PUBLIC_PATH:"/"}.alchemyKey?"https://".concat(t,".alchemyapi.io/v2/").concat({NODE_ENV:"production",PUBLIC_PATH:"/"}.alchemyKey):void 0},k={56:{urls:["https://bsc-dataseed.binance.org"],name:"BNB Chain",nativeCurrency:f,blockExplorerUrls:["https://arbiscan.io"],icon:"/bnb.svg"},42161:{icon:"/arbitrum.svg",urls:[d("arbitrum-goerli"),"https://endpoints.omniatech.io/v1/arbitrum/one/public"].filter(Boolean),name:"Arbitrum",nativeCurrency:f,blockExplorerUrls:["https://testnet.arbiscan.io"]}},_={5:{urls:[d("goerli")].filter(Boolean),name:"G\xF6rli"},420:{urls:[d("optimism-goerli"),"https://goerli.optimism.io"].filter(Boolean),name:"Optimism Goerli",nativeCurrency:f,blockExplorerUrls:["https://goerli-explorer.optimism.io"]},421613:{urls:[d("arbitrum-goerli"),"https://goerli-rollup.arbitrum.io/rpc"].filter(Boolean),name:"Arbitrum Goerli",nativeCurrency:f,blockExplorerUrls:["https://testnet.arbiscan.io"]},80001:{urls:[d("polygon-mumbai")].filter(Boolean),name:"Polygon Mumbai",nativeCurrency:a,blockExplorerUrls:["https://mumbai.polygonscan.com"]},44787:{urls:["https://alfajores-forno.celo-testnet.org"],name:"Celo Alfajores",nativeCurrency:j,blockExplorerUrls:["https://alfajores-blockscout.celo-testnet.org"]}},y=o()({},k),L=Object.keys(y).reduce(function(s,t){var h=y[Number(t)].urls;return h.length&&(s[Number(t)]=h),s},{})},20825:function(F,v,n){"use strict";n.d(v,{O:function(){return T},P:function(){return k}});var m=n(5574),o=n.n(m),f=n(77985),a=n.n(f),j=n(94299),S=n.n(j),e=(0,f.initializeConnector)(function(_){return new j.MetaMask({actions:_})}),d=o()(e,2),T=d[0],k=d[1]},78764:function(F,v,n){"use strict";n.d(v,{e:function(){return o}});var m={deployer:"0x0754f7fc90f842a6ace8b6ec89e4edadeb2a9ba5",usdc:"0xf7d7eaf3d6d3ab5a81514309f16395a37af6e6bc",eth:"0xb2b07ac6e3513d4e94b1c9c32057eadce1381bf0",matic:"0xe927ab3a717b5f4b17cae4a7879904f9de728161",oracle:"0xc94777b9a10cebe85c2f91972deb176cde86e027",swap:"0xec4eeebd0b2ea356ae30b0d613b16eaa8ac01c27",addressProvider:"0xe44278ace07452e45373d93e458a00aded87ad8a",mainPool:"0x07b18069e6d06ed9f3e6dd604ef63fecda2865fc",ethUsdcPool:"0xe7ac4b2f2def09d5b64a4b20c43c3f4b8b67d87d",usdcStrategy:"0x1ca45e58a067b770ff0f03dcb7f4c3d075d1c814",ethStrategy:"0x4853f4cf2274def143d58a2068f62c52c8aa59a2",maticStrategy:"0xfa3e8a1f76429e5e1ba107dfe95ca66a8fd53c92",mainPoolConfigurator:"0xcd2b058bf079ce75a1deaa6f5e7eb6d3cd66802c",flashLoanReceiver:"0x0997205e3415fd3b3694650f1bfb2a9804c409ef",dataProvider:"0x131bbaaa298ba663a507c283a3817f0aa9c4a76a"},o=function(a){return m[a]}},67937:function(F,v,n){"use strict";n.d(v,{AR:function(){return e},Gm:function(){return S},HJ:function(){return _},LP:function(){return y}});var m=n(78764),o=[{name:"Polygon",img:"/polygon.svg",id:80001,checked:!1},{name:"Arbitrum",img:"/art.png",id:69,checked:!1},{name:"HardHat",img:"/polygon.svg",id:31337,checked:!1},{name:"Ganache",img:"/polygon.svg",id:1337,checked:!1}],f=80001,a=function(){return o},j=function(){return o.find(function(t){return t.id==f})},S={"main pool":{id:1,address:(0,m.e)("mainPool")},"eth-usdc pool":{id:2,address:(0,m.e)("ethUsdcPool")}},e=function(t){return S[t].address},d=[{key:"5",name:"USDT",address:(0,m.e)("usdc"),decimals:6,icon:"/usdt.svg",pools:["main pool"]}],T=[{key:"2",name:"MATIC",address:"0x1Df2FAa18c6D0EAa5CE77feEC82AF5e7ae03D56e",decimals:18,pools:["main pool","eth-usdc pool"],icon:"/matic.svg"},{key:"3",name:"ETH",address:"0x632e32C4003B6e71DA94eD5D05ED15044F97Bf7a",decimals:18,icon:"/eth.svg",pools:["main pool","eth-usdc pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],k=[{key:"3",name:"ETH",icon:"/eth.svg",pools:["main pool"]},{key:"4",name:"USDC",icon:"/usdc.svg",pools:["main pool"]}],_=function(t){return{69:k,80001:d,31337:d,1337:T}[t||f]},y=function(t,h){var I=_(t);return I.find(function(E){return E.name==h})},L=function(t,h){var I=_(t);return I.find(function(E){return E.address==h})}},21912:function(F,v,n){"use strict";n.r(v),n.d(v,{default:function(){return ie}});var m=n(5574),o=n.n(m),f=n(22974),a=n(67294),j=n(80882),S={input:"input___nfMJ_",tokenlist:"tokenlist___ArGAq",item:"item___QVP7y"},e=n(85893);function d(i){var c=i.title,x=i.choose,p=i.selectToken,P=i.selectChain,l=i.currentToken,u=i.currentChain,w=i.max,N=i.chooseToken,B=i.onMax,b=(0,a.useState)(!1),D=o()(b,2),W=D[0],G=D[1],V=(0,a.useState)(""),R=o()(V,2),z=R[0],M=R[1],Z=function(){B&&B(),M("0.9506")};return(0,e.jsxs)("div",{className:"text-gray-4 flex flex-column gap-2",children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("div",{children:c}),(0,e.jsxs)("div",{className:"flex flex-align-center gap-2 fw-bold ".concat(x&&"token-hover"),children:[(0,e.jsx)("img",{src:u==null?void 0:u.icon,width:"16"}),x&&(0,e.jsxs)("div",{onClick:P,children:[u==null?void 0:u.name," ",(0,e.jsx)(j.Z,{})]})||(0,e.jsxs)("div",{children:[u==null?void 0:u.name," "]})]})]}),(0,e.jsxs)("div",{className:"".concat(S.input," flex flex-column gap-2"),style:{border:W&&"1px solid #ff5c28"||"1px solid rgba(0,0,0,0)"},children:[(0,e.jsxs)("div",{className:" flex flex-between  gap-2",children:[(0,e.jsxs)("div",{style:{padding:"1px 8px"},className:"flex flex-align-center gap-2 fw-bold ".concat(N&&"token-hover"),onClick:N&&p,children:[(0,e.jsx)("img",{src:l==null?void 0:l.icon,width:"25"}),(0,e.jsx)("span",{children:l==null?void 0:l.name}),N&&(0,e.jsx)(j.Z,{})]}),(0,e.jsx)("input",{value:z,onChange:function(K){return M(K.target.value)},onFocus:function(){return G(!0)},onBlur:function(){return G(!1)},placeholder:"0.0",className:"flex-auto",style:{fontSize:"20px",width:"100%",color:"#fff",fontWeight:"bold"}})]}),(0,e.jsxs)("div",{className:"flex flex-between  gap-2",children:[(0,e.jsxs)("div",{children:["Expect to receive: 0.9506 ",l==null?void 0:l.name]}),w&&(0,e.jsx)("span",{className:"max",onClick:Z,children:"Max"})]})]})]})}var T=n(1413),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},_=k,y=n(42135),L=function(c,x){return a.createElement(y.Z,(0,T.Z)((0,T.Z)({},c),{},{ref:x,icon:_}))};L.displayName="ArrowDownOutlined";var s=a.forwardRef(L),t=n(45605),h=n(67937),I=n(71577),E=n(63463),Y=n(77939),X=n(37620),$=function(c){var x=c.children,p=c.onSelect,P=c.value,l=(0,a.useState)(P||null),u=o()(l,2),w=u[0],N=u[1],B=function(D){N(D),p&&p(D)};return(0,e.jsx)("div",{children:a.Children.map(x,function(b){return a.cloneElement(b,{onSelect:B,selected:b.props.value===w})})})},te=function(c){var x=c.children,p=c.onSelect,P=c.selected,l=c.value;return(0,e.jsx)(I.Z,{onClick:function(){return p&&p(l)},type:P?"primary":"default",style:{marginRight:"10px"},children:x})};$.Item=te;var A=$,O=n(20825),ae=n(59749),g={h100:"h100___hE_b0",title:"title___wSlJR",tokenlist:"tokenlist___NSozx",item:"item___ruSGv"},re=O.P.useChainId,oe=O.P.useAccounts,Ce=O.P.useIsActivating,je=O.P.useIsActive,se=O.P.useProvider,_e=O.P.useENSNames,le=function(c){var x=(0,a.useState)(!1),p=o()(x,2),P=p[0],l=p[1],u=(0,a.useState)(!1),w=o()(u,2),N=w[0],B=w[1],b=re(),D=function(){l(!1)},W=function(C){l(!1),xe(C),ue(C)},G=function(C){M(!1),me(C)},V=(0,a.useState)(!1),R=o()(V,2),z=R[0],M=R[1],Z=[{name:"BNB Chain",icon:"/bnb.svg"},{name:"Arbitrum",icon:"/arb.svg"}],H=(0,a.useState)((0,h.HJ)(null)[0]),K=o()(H,2),ce=K[0],ue=K[1],de=(0,a.useState)(Z[0]),q=o()(de,2),fe=q[0],me=q[1],ve=(0,a.useState)((0,h.HJ)(null)[0]),ee=o()(ve,2),he=ee[0],xe=ee[1],pe=(0,a.useState)({}),ne=o()(pe,2),ge=ne[0],be=ne[1],U=oe(),J=se();(0,a.useEffect)(function(){be(ae.zG[b]),console.log("accounts",U)},[b]),(0,a.useEffect)(function(){if(J&&U!==null&&U!==void 0&&U.length){var r=!1;return Promise.all(U.map(function(C){return J.getBalance(C)})).then(function(C){if(!r)debugger}),function(){r=!0}}},[J,U]);var Q=function(){};return(0,e.jsx)("div",{style:{padding:"50px 0"},className:"flex flex-center",children:(0,e.jsxs)("div",{className:"flex flex-column gap-5",style:{width:"375px",backgroundColor:"#1c1b1b",padding:"1.25rem",border:"1px solid #2f343e",borderRadius:"1rem",position:"relative",overflow:"hidden"},children:[(0,e.jsx)("div",{className:"flex flex-between gap-2",children:(0,e.jsx)("span",{children:"Transfer"})}),(0,e.jsx)(d,{chooseToken:!0,max:!0,currentChain:ge,currentToken:he,selectToken:function(){l(!0),Q(!0)},title:"From"}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)("div",{className:"swap-hover",children:(0,e.jsx)(s,{style:{color:"#ffffff"}})})}),(0,e.jsx)(d,{currentChain:fe,currentToken:ce,selectToken:function(){l(!0),Q(!1)},selectChain:function(){M(!0),Q(!1)},title:"To",choose:!0}),(0,e.jsx)(I.Z,{style:{overflow:"hidden",textOverflow:"ellipsis"},type:"primary",className:"topConnect",children:b&&"Confirm"||"Connect Wallet"}),(0,e.jsxs)(E.Z,{title:"Select Token",className:g.h100,placement:"bottom",onClose:D,visible:P,getContainer:!1,maskClosable:!1,style:{position:"absolute"},children:[(0,e.jsxs)("div",{className:g.title,children:[(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Token Name"})}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Balance"})})]}),(0,e.jsx)("hr",{}),(0,e.jsx)("div",{className:g.tokenlist,children:(0,h.HJ)(null).map(function(r){return(0,e.jsxs)("div",{className:g.item,onClick:function(){return W(r)},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:r.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:r.name})]}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"0"})})]})})})]}),(0,e.jsx)(E.Z,{title:"Select  Chain",className:g.h100,placement:"bottom",onClose:function(){return M(!1)},visible:z,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsx)("div",{className:g.tokenlist,children:Z.map(function(r){return(0,e.jsx)("div",{className:g.item,onClick:function(){return G(r)},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:r.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:r.name})]})})})})}),(0,e.jsx)(E.Z,{title:"Advanced Settings",className:g.h100,placement:"bottom",onClose:function(){return B(!1)},visible:N,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsxs)("div",{className:g.tokenlist,children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("span",{children:" Gas on destination chain"}),(0,e.jsx)(Y.Z,{title:"The default amount allows you to perform a couple of transactions (e.g. Approve and Swap). Once you approve the transfer in your wallet, the transaction gas amount will be higher than a regular transaction as this includes the selected amount of destination gas to be sent.",children:(0,e.jsx)(t.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(A,{value:"none",onSelect:function(){},children:[(0,e.jsx)(A.Item,{value:"none",children:"None"}),(0,e.jsx)(A.Item,{value:"default",children:"Default"})]}),(0,e.jsx)(X.Z,{style:{marginTop:"20px"},placeholder:"0.0",prefix:(0,e.jsx)("span",{children:(0,e.jsx)("img",{src:"/eth.svg",style:{marginRight:"5px",width:"20px"}})}),suffix:(0,e.jsx)("span",{children:"Max"})}),(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginTop:"30px"},children:[(0,e.jsx)("span",{children:" Slippage tolerance"}),(0,e.jsx)(Y.Z,{title:"Your transaction will revert if the price changes unfavorably by more than this percentage",children:(0,e.jsx)(t.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(A,{value:"0.1",onSelect:function(){},children:[(0,e.jsx)(A.Item,{value:"0.1",children:"0.1%"}),(0,e.jsx)(A.Item,{value:"0.5",children:"0.5%"}),(0,e.jsx)(A.Item,{value:"1.0",children:"1.0%"})]}),(0,e.jsx)(X.Z,{style:{marginTop:"20px"},placeholder:"0.0",suffix:(0,e.jsx)("span",{children:"%"})})]})})]})})},ie=(0,f.connect)(function(i){var c=i.count;return{count:c}})(le)},88677:function(){},62808:function(){}}]);
