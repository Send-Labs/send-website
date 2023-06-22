(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[170],{59749:function(G,h,n){"use strict";n.d(h,{RP:function(){return e},ns:function(){return R},zG:function(){return y}});var v=n(97857),r=n.n(v),f={name:"Ether",symbol:"ETH",decimals:18},a={name:"Matic",symbol:"MATIC",decimals:18},j={name:"Celo",symbol:"CELO",decimals:18};function E(s){return!!s.nativeCurrency}function e(s){var t=y[s];return E(t)?{chainId:s,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:t.urls,blockExplorerUrls:t.blockExplorerUrls}:s}var d=function(t){return{NODE_ENV:"production",PUBLIC_PATH:"/"}.infuraKey?"https://".concat(t,".infura.io/v3/").concat({NODE_ENV:"production",PUBLIC_PATH:"/"}.infuraKey):void 0},T=function(t){return{NODE_ENV:"production",PUBLIC_PATH:"/"}.alchemyKey?"https://".concat(t,".alchemyapi.io/v2/").concat({NODE_ENV:"production",PUBLIC_PATH:"/"}.alchemyKey):void 0},k={56:{urls:["https://bsc-dataseed.binance.org"],name:"BNB Chain",nativeCurrency:f,blockExplorerUrls:["https://arbiscan.io"],icon:"/bnb.svg"},42161:{icon:"/arbitrum.svg",urls:[d("arbitrum-goerli"),"https://endpoints.omniatech.io/v1/arbitrum/one/public"].filter(Boolean),name:"Arbitrum",nativeCurrency:f,blockExplorerUrls:["https://testnet.arbiscan.io"]}},_={5:{urls:[d("goerli")].filter(Boolean),name:"G\xF6rli"},420:{urls:[d("optimism-goerli"),"https://goerli.optimism.io"].filter(Boolean),name:"Optimism Goerli",nativeCurrency:f,blockExplorerUrls:["https://goerli-explorer.optimism.io"]},421613:{urls:[d("arbitrum-goerli"),"https://goerli-rollup.arbitrum.io/rpc"].filter(Boolean),name:"Arbitrum Goerli",nativeCurrency:f,blockExplorerUrls:["https://testnet.arbiscan.io"]},80001:{urls:[d("polygon-mumbai")].filter(Boolean),name:"Polygon Mumbai",nativeCurrency:a,blockExplorerUrls:["https://mumbai.polygonscan.com"]},44787:{urls:["https://alfajores-forno.celo-testnet.org"],name:"Celo Alfajores",nativeCurrency:j,blockExplorerUrls:["https://alfajores-blockscout.celo-testnet.org"]}},y=r()({},k),R=Object.keys(y).reduce(function(s,t){var x=y[Number(t)].urls;return x.length&&(s[Number(t)]=x),s},{})},20825:function(G,h,n){"use strict";n.d(h,{O:function(){return T},P:function(){return k}});var v=n(5574),r=n.n(v),f=n(77985),a=n.n(f),j=n(94299),E=n.n(j),e=(0,f.initializeConnector)(function(_){return new j.MetaMask({actions:_})}),d=r()(e,2),T=d[0],k=d[1]},78764:function(G,h,n){"use strict";n.d(h,{e:function(){return r}});var v={deployer:"0x0754f7fc90f842a6ace8b6ec89e4edadeb2a9ba5",usdc:"0xf7d7eaf3d6d3ab5a81514309f16395a37af6e6bc",eth:"0xb2b07ac6e3513d4e94b1c9c32057eadce1381bf0",matic:"0xe927ab3a717b5f4b17cae4a7879904f9de728161",oracle:"0xc94777b9a10cebe85c2f91972deb176cde86e027",swap:"0xec4eeebd0b2ea356ae30b0d613b16eaa8ac01c27",addressProvider:"0xe44278ace07452e45373d93e458a00aded87ad8a",mainPool:"0x07b18069e6d06ed9f3e6dd604ef63fecda2865fc",ethUsdcPool:"0xe7ac4b2f2def09d5b64a4b20c43c3f4b8b67d87d",usdcStrategy:"0x1ca45e58a067b770ff0f03dcb7f4c3d075d1c814",ethStrategy:"0x4853f4cf2274def143d58a2068f62c52c8aa59a2",maticStrategy:"0xfa3e8a1f76429e5e1ba107dfe95ca66a8fd53c92",mainPoolConfigurator:"0xcd2b058bf079ce75a1deaa6f5e7eb6d3cd66802c",flashLoanReceiver:"0x0997205e3415fd3b3694650f1bfb2a9804c409ef",dataProvider:"0x131bbaaa298ba663a507c283a3817f0aa9c4a76a"},r=function(a){return v[a]}},67937:function(G,h,n){"use strict";n.d(h,{AR:function(){return e},Gm:function(){return E},HJ:function(){return _},LP:function(){return y}});var v=n(78764),r=[{name:"Polygon",img:"/polygon.svg",id:80001,checked:!1},{name:"Arbitrum",img:"/art.png",id:69,checked:!1},{name:"HardHat",img:"/polygon.svg",id:31337,checked:!1},{name:"Ganache",img:"/polygon.svg",id:1337,checked:!1}],f=80001,a=function(){return r},j=function(){return r.find(function(t){return t.id==f})},E={"main pool":{id:1,address:(0,v.e)("mainPool")},"eth-usdc pool":{id:2,address:(0,v.e)("ethUsdcPool")}},e=function(t){return E[t].address},d=[{key:"5",name:"USDT",address:(0,v.e)("usdc"),decimals:6,icon:"/usdt.svg",pools:["main pool"]}],T=[{key:"2",name:"MATIC",address:"0x1Df2FAa18c6D0EAa5CE77feEC82AF5e7ae03D56e",decimals:18,pools:["main pool","eth-usdc pool"],icon:"/matic.svg"},{key:"3",name:"ETH",address:"0x632e32C4003B6e71DA94eD5D05ED15044F97Bf7a",decimals:18,icon:"/eth.svg",pools:["main pool","eth-usdc pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],k=[{key:"3",name:"ETH",icon:"/eth.svg",pools:["main pool"]},{key:"4",name:"USDC",icon:"/usdc.svg",pools:["main pool"]}],_=function(t){return{69:k,80001:d,31337:d,1337:T}[t||f]},y=function(t,x){var w=_(t);return w.find(function(A){return A.name==x})},R=function(t,x){var w=_(t);return w.find(function(A){return A.address==x})}},21912:function(G,h,n){"use strict";n.r(h),n.d(h,{default:function(){return de}});var v=n(5574),r=n.n(v),f=n(22974),a=n(67294),j=n(80882),E={input:"input___nfMJ_",tokenlist:"tokenlist___ArGAq",item:"item___QVP7y"},e=n(85893);function d(i){var c=i.title,p=i.choose,g=i.selectToken,N=i.selectChain,l=i.currentToken,u=i.currentChain,M=i.max,S=i.chooseToken,D=i.onMax,C=i.defaultValue,I=i.onChange,W=(0,a.useState)(!1),Z=r()(W,2),H=Z[0],V=Z[1],z=(0,a.useState)(C),K=r()(z,2),J=K[0],U=K[1],Q=function(){D&&D(),U("0.9506")};return(0,a.useEffect)(function(){U(C)},[C]),(0,e.jsxs)("div",{className:"text-gray-4 flex flex-column gap-2",children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("div",{children:c}),(0,e.jsxs)("div",{className:"flex flex-align-center gap-2 fw-bold ".concat(p&&"token-hover"),children:[(0,e.jsx)("img",{src:u==null?void 0:u.icon,width:"16"}),p&&(0,e.jsxs)("div",{onClick:N,children:[u==null?void 0:u.name," ",(0,e.jsx)(j.Z,{})]})||(0,e.jsxs)("div",{children:[u==null?void 0:u.name," "]})]})]}),(0,e.jsxs)("div",{className:"".concat(E.input," flex flex-column gap-2"),style:{border:H&&"1px solid #ff5c28"||"1px solid rgba(0,0,0,0)"},children:[(0,e.jsxs)("div",{className:" flex flex-between  gap-2",children:[(0,e.jsxs)("div",{style:{padding:"1px 8px"},className:"flex flex-align-center gap-2 fw-bold ".concat(S&&"token-hover"),onClick:S&&g,children:[(0,e.jsx)("img",{src:l==null?void 0:l.icon,width:"25"}),(0,e.jsx)("span",{children:l==null?void 0:l.name}),S&&(0,e.jsx)(j.Z,{})]}),(0,e.jsx)("input",{value:J,onChange:function(F){U(F.target.value),I(F.target.value)},onFocus:function(){return V(!0)},onBlur:function(){return V(!1)},placeholder:"0.0",className:"flex-auto",style:{fontSize:"20px",width:"100%",color:"#fff",fontWeight:"bold"}})]}),(0,e.jsxs)("div",{className:"flex flex-between  gap-2",children:[(0,e.jsxs)("div",{children:["Expect to receive: 0.9506 ",l==null?void 0:l.name]}),M&&(0,e.jsx)("span",{className:"max",onClick:Q,children:"Max"})]})]})]})}var T=n(1413),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},_=k,y=n(42135),R=function(c,p){return a.createElement(y.Z,(0,T.Z)((0,T.Z)({},c),{},{ref:p,icon:_}))};R.displayName="ArrowDownOutlined";var s=a.forwardRef(R),t=n(45605),x=n(67937),w=n(71577),A=n(63463),$=n(77939),q=n(37620),ee=function(c){var p=c.children,g=c.onSelect,N=c.value,l=(0,a.useState)(N||null),u=r()(l,2),M=u[0],S=u[1],D=function(I){S(I),g&&g(I)};return(0,e.jsx)("div",{children:a.Children.map(p,function(C){return a.cloneElement(C,{onSelect:D,selected:C.props.value===M})})})},re=function(c){var p=c.children,g=c.onSelect,N=c.selected,l=c.value;return(0,e.jsx)(w.Z,{onClick:function(){return g&&g(l)},type:N?"primary":"default",style:{marginRight:"10px"},children:p})};ee.Item=re;var P=ee,B=n(20825),se=n(59749),b={h100:"h100___hE_b0",title:"title___wSlJR",tokenlist:"tokenlist___NSozx",item:"item___ruSGv"},le=B.P.useChainId,ie=B.P.useAccounts,Se=B.P.useIsActivating,Ee=B.P.useIsActive,ce=B.P.useProvider,Te=B.P.useENSNames,ue=function(c){var p=(0,a.useState)(!1),g=r()(p,2),N=g[0],l=g[1],u=(0,a.useState)(2),M=r()(u,2),S=M[0],D=M[1],C=(0,a.useState)(!1),I=r()(C,2),W=I[0],Z=I[1],H=le(),V=function(){l(!1)},z=function(m){l(!1),Ce(m),ve(m)},K=function(m){O(!1),pe(m)},J=(0,a.useState)(!1),U=r()(J,2),Q=U[0],O=U[1],F=[{name:"BNB Chain",icon:"/bnb.svg"},{name:"Arbitrum",icon:"/arb.svg"}],fe=(0,a.useState)((0,x.HJ)(null)[0]),ne=r()(fe,2),me=ne[0],ve=ne[1],he=(0,a.useState)(F[0]),te=r()(he,2),xe=te[0],pe=te[1],ge=(0,a.useState)((0,x.HJ)(null)[0]),ae=r()(ge,2),be=ae[0],Ce=ae[1],je=(0,a.useState)({}),oe=r()(je,2),_e=oe[0],ye=oe[1],L=ie(),Y=ce();(0,a.useEffect)(function(){ye(se.zG[H]),console.log("accounts",L)},[H]),(0,a.useEffect)(function(){if(Y&&L!==null&&L!==void 0&&L.length){var o=!1;return Promise.all(L.map(function(m){return Y.getBalance(m)})).then(function(m){if(!o)debugger}),function(){o=!0}}},[Y,L]);var X=function(){};return(0,e.jsx)("div",{style:{padding:"50px 0"},className:"flex flex-center",children:(0,e.jsxs)("div",{className:"flex flex-column gap-5",style:{width:"375px",backgroundColor:"#1c1b1b",padding:"1.25rem",border:"1px solid #2f343e",borderRadius:"1rem",position:"relative",overflow:"hidden"},children:[(0,e.jsx)("div",{className:"flex flex-between gap-2",children:(0,e.jsx)("span",{children:"Transfer"})}),(0,e.jsx)(d,{defaultValue:S,onChange:function(m){return D(m)},chooseToken:!0,max:!0,currentChain:_e,currentToken:be,selectToken:function(){l(!0),X(!0)},title:"From"}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)("div",{className:"swap-hover",children:(0,e.jsx)(s,{style:{color:"#ffffff"}})})}),(0,e.jsx)(d,{defaultValue:S,onChange:function(m){return D(m)},currentChain:xe,currentToken:me,selectToken:function(){l(!0),X(!1)},selectChain:function(){O(!0),X(!1)},title:"To",choose:!0}),(0,e.jsx)(w.Z,{style:{overflow:"hidden",textOverflow:"ellipsis"},type:"primary",className:"topConnect",children:H&&"Confirm"||"Connect Wallet"}),(0,e.jsxs)(A.Z,{title:"Select Token",className:b.h100,placement:"bottom",onClose:V,visible:N,getContainer:!1,maskClosable:!1,style:{position:"absolute"},children:[(0,e.jsxs)("div",{className:b.title,children:[(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Token Name"})}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Balance"})})]}),(0,e.jsx)("hr",{}),(0,e.jsx)("div",{className:b.tokenlist,children:(0,x.HJ)(null).map(function(o){return(0,e.jsxs)("div",{className:b.item,onClick:function(){return z(o)},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:o.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:o.name})]}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"0"})})]})})})]}),(0,e.jsx)(A.Z,{title:"Select  Chain",className:b.h100,placement:"bottom",onClose:function(){return O(!1)},visible:Q,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsx)("div",{className:b.tokenlist,children:F.map(function(o){return(0,e.jsx)("div",{className:b.item,onClick:function(){return K(o)},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:o.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:o.name})]})})})})}),(0,e.jsx)(A.Z,{title:"Advanced Settings",className:b.h100,placement:"bottom",onClose:function(){return Z(!1)},visible:W,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsxs)("div",{className:b.tokenlist,children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("span",{children:" Gas on destination chain"}),(0,e.jsx)($.Z,{title:"The default amount allows you to perform a couple of transactions (e.g. Approve and Swap). Once you approve the transfer in your wallet, the transaction gas amount will be higher than a regular transaction as this includes the selected amount of destination gas to be sent.",children:(0,e.jsx)(t.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(P,{value:"none",onSelect:function(){},children:[(0,e.jsx)(P.Item,{value:"none",children:"None"}),(0,e.jsx)(P.Item,{value:"default",children:"Default"})]}),(0,e.jsx)(q.Z,{style:{marginTop:"20px"},placeholder:"0.0",prefix:(0,e.jsx)("span",{children:(0,e.jsx)("img",{src:"/eth.svg",style:{marginRight:"5px",width:"20px"}})}),suffix:(0,e.jsx)("span",{children:"Max"})}),(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginTop:"30px"},children:[(0,e.jsx)("span",{children:" Slippage tolerance"}),(0,e.jsx)($.Z,{title:"Your transaction will revert if the price changes unfavorably by more than this percentage",children:(0,e.jsx)(t.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(P,{value:"0.1",onSelect:function(){},children:[(0,e.jsx)(P.Item,{value:"0.1",children:"0.1%"}),(0,e.jsx)(P.Item,{value:"0.5",children:"0.5%"}),(0,e.jsx)(P.Item,{value:"1.0",children:"1.0%"})]}),(0,e.jsx)(q.Z,{style:{marginTop:"20px"},placeholder:"0.0",suffix:(0,e.jsx)("span",{children:"%"})})]})})]})})},de=(0,f.connect)(function(i){var c=i.count;return{count:c}})(ue)},88677:function(){},62808:function(){}}]);
