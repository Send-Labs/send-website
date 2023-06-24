(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[170],{59749:function(U,h,n){"use strict";n.d(h,{RP:function(){return e},ns:function(){return R},zG:function(){return E}});var f=n(97857),l=n.n(f),m={name:"Ether",symbol:"ETH",decimals:18},a={name:"Matic",symbol:"MATIC",decimals:18},y={name:"Celo",symbol:"CELO",decimals:18};function N(c){return!!c.nativeCurrency}function e(c){var o=E[c];return N(o)?{chainId:c,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:o.urls,blockExplorerUrls:o.blockExplorerUrls}:c}var u=function(o){return{NODE_ENV:"production",PUBLIC_PATH:"/"}.infuraKey?"https://".concat(o,".infura.io/v3/").concat({NODE_ENV:"production",PUBLIC_PATH:"/"}.infuraKey):void 0},D=function(o){return{NODE_ENV:"production",PUBLIC_PATH:"/"}.alchemyKey?"https://".concat(o,".alchemyapi.io/v2/").concat({NODE_ENV:"production",PUBLIC_PATH:"/"}.alchemyKey):void 0},I={56:{urls:["https://bsc-dataseed.binance.org"],name:"BNB Chain",nativeCurrency:m,blockExplorerUrls:["https://arbiscan.io"],icon:"/bnb.svg"},42161:{icon:"/arb.svg",urls:[u("arbitrum-goerli"),"https://endpoints.omniatech.io/v1/arbitrum/one/public"].filter(Boolean),name:"Arbitrum",nativeCurrency:m,blockExplorerUrls:["https://testnet.arbiscan.io"]}},S={5:{urls:[u("goerli")].filter(Boolean),name:"G\xF6rli"},420:{urls:[u("optimism-goerli"),"https://goerli.optimism.io"].filter(Boolean),name:"Optimism Goerli",nativeCurrency:m,blockExplorerUrls:["https://goerli-explorer.optimism.io"]},421613:{urls:[u("arbitrum-goerli"),"https://goerli-rollup.arbitrum.io/rpc"].filter(Boolean),name:"Arbitrum Goerli",nativeCurrency:m,blockExplorerUrls:["https://testnet.arbiscan.io"]},80001:{urls:[u("polygon-mumbai")].filter(Boolean),name:"Polygon Mumbai",nativeCurrency:a,blockExplorerUrls:["https://mumbai.polygonscan.com"]},44787:{urls:["https://alfajores-forno.celo-testnet.org"],name:"Celo Alfajores",nativeCurrency:y,blockExplorerUrls:["https://alfajores-blockscout.celo-testnet.org"]}},E=l()({},I),R=Object.keys(E).reduce(function(c,o){var g=E[Number(o)].urls;return g.length&&(c[Number(o)]=g),c},{})},20825:function(U,h,n){"use strict";n.d(h,{O:function(){return D},P:function(){return I}});var f=n(5574),l=n.n(f),m=n(77985),a=n.n(m),y=n(94299),N=n.n(y),e=(0,m.initializeConnector)(function(S){return new y.MetaMask({actions:S})}),u=l()(e,2),D=u[0],I=u[1]},78764:function(U,h,n){"use strict";n.d(h,{e:function(){return l}});var f={deployer:"0x0754f7fc90f842a6ace8b6ec89e4edadeb2a9ba5",usdc:"0xf7d7eaf3d6d3ab5a81514309f16395a37af6e6bc",eth:"0xb2b07ac6e3513d4e94b1c9c32057eadce1381bf0",matic:"0xe927ab3a717b5f4b17cae4a7879904f9de728161",oracle:"0xc94777b9a10cebe85c2f91972deb176cde86e027",swap:"0xec4eeebd0b2ea356ae30b0d613b16eaa8ac01c27",addressProvider:"0xe44278ace07452e45373d93e458a00aded87ad8a",mainPool:"0x07b18069e6d06ed9f3e6dd604ef63fecda2865fc",ethUsdcPool:"0xe7ac4b2f2def09d5b64a4b20c43c3f4b8b67d87d",usdcStrategy:"0x1ca45e58a067b770ff0f03dcb7f4c3d075d1c814",ethStrategy:"0x4853f4cf2274def143d58a2068f62c52c8aa59a2",maticStrategy:"0xfa3e8a1f76429e5e1ba107dfe95ca66a8fd53c92",mainPoolConfigurator:"0xcd2b058bf079ce75a1deaa6f5e7eb6d3cd66802c",flashLoanReceiver:"0x0997205e3415fd3b3694650f1bfb2a9804c409ef",dataProvider:"0x131bbaaa298ba663a507c283a3817f0aa9c4a76a"},l=function(a){return f[a]}},67937:function(U,h,n){"use strict";n.d(h,{AR:function(){return e},Gm:function(){return N},HJ:function(){return S},LP:function(){return E}});var f=n(78764),l=[{name:"Polygon",img:"/polygon.svg",id:80001,checked:!1},{name:"Arbitrum",img:"/art.png",id:69,checked:!1},{name:"HardHat",img:"/polygon.svg",id:31337,checked:!1},{name:"Ganache",img:"/polygon.svg",id:1337,checked:!1}],m=80001,a=function(){return l},y=function(){return l.find(function(o){return o.id==m})},N={"main pool":{id:1,address:(0,f.e)("mainPool")},"eth-usdc pool":{id:2,address:(0,f.e)("ethUsdcPool")}},e=function(o){return N[o].address},u=[{key:"5",name:"USDT",address:(0,f.e)("usdc"),decimals:6,icon:"/usdt.svg",pools:["main pool"]}],D=[{key:"2",name:"MATIC",address:"0x1Df2FAa18c6D0EAa5CE77feEC82AF5e7ae03D56e",decimals:18,pools:["main pool","eth-usdc pool"],icon:"/matic.svg"},{key:"3",name:"ETH",address:"0x632e32C4003B6e71DA94eD5D05ED15044F97Bf7a",decimals:18,icon:"/eth.svg",pools:["main pool","eth-usdc pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],I=[{key:"3",name:"ETH",icon:"/eth.svg",pools:["main pool"]},{key:"4",name:"USDC",icon:"/usdc.svg",pools:["main pool"]}],S=function(o){return{69:I,80001:u,31337:u,1337:D}[o||m]},E=function(o,g){var z=S(o);return z.find(function(w){return w.name==g})},R=function(o,g){var z=S(o);return z.find(function(w){return w.address==g})}},25543:function(U,h,n){"use strict";var f=n(67294),l=(0,f.createContext)(null);h.Z=l},17155:function(U,h,n){"use strict";n.r(h),n.d(h,{default:function(){return ye}});var f=n(5574),l=n.n(f),m=n(22974),a=n(67294),y=n(80882),N={input:"input___nfMJ_",tokenlist:"tokenlist___ArGAq",item:"item___QVP7y"},e=n(85893);function u(t){var r=t.title,i=t.desc,p=t.choose,T=t.selectToken,C=t.selectChain,x=t.currentToken,d=t.currentChain,k=t.max,A=t.chooseToken,P=t.onMax,j=t.defaultValue,Z=t.onChange,Q=(0,a.useState)(!1),B=l()(Q,2),G=B[0],J=B[1],Y=(0,a.useState)(j),F=l()(Y,2),X=F[0],H=F[1],$=function(){P&&P(),H("0.9506"),Z("0.9506")};return(0,a.useEffect)(function(){H(j)},[j]),(0,e.jsxs)("div",{className:"text-gray-4 flex flex-column gap-2",children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("div",{children:r}),(0,e.jsxs)("div",{className:"flex flex-align-center gap-2 fw-bold ".concat(p&&"token-hover"),children:[(0,e.jsx)("img",{src:d==null?void 0:d.icon,width:"16"}),p&&(0,e.jsxs)("div",{onClick:C,style:{fontSize:"14px"},children:[d==null?void 0:d.name," ",(0,e.jsx)(y.Z,{style:{fontSize:"12px"}})]})||(0,e.jsxs)("div",{children:[d==null?void 0:d.name," "]})]})]}),(0,e.jsxs)("div",{className:"".concat(N.input," flex flex-column gap-2"),style:{border:G&&"1px solid #ff5c28"||"1px solid rgba(0,0,0,0)"},children:[(0,e.jsxs)("div",{className:" flex flex-between  gap-2",children:[(0,e.jsxs)("div",{style:{padding:"1px 8px"},className:"flex flex-align-center gap-2 fw-bold ".concat(A&&"token-hover"),onClick:A&&T,children:[(0,e.jsx)("img",{src:x==null?void 0:x.icon,width:"25"}),(0,e.jsx)("span",{children:x==null?void 0:x.name}),A&&(0,e.jsx)(y.Z,{})]}),(0,e.jsx)("input",{value:X,onChange:function(V){H(V.target.value),Z(V.target.value)},onFocus:function(){return J(!0)},onBlur:function(){return J(!1)},placeholder:"0.0",className:"flex-auto",style:{fontSize:"20px",width:"100%",color:"#fff",fontWeight:"bold"}})]}),i&&(0,e.jsxs)("div",{className:"flex flex-between  gap-2",children:[(0,e.jsx)("div",{children:i}),k&&(0,e.jsx)("span",{className:"max",onClick:$,children:"Max"})]})]})]})}var D=n(1413),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},S=I,E=n(42135),R=function(r,i){return a.createElement(E.Z,(0,D.Z)((0,D.Z)({},r),{},{ref:i,icon:S}))};R.displayName="ArrowDownOutlined";var c=a.forwardRef(R),o=n(45605),g=n(67937),z=n(71577),w=n(63463),ne=n(77939),te=n(37620),de=Object.defineProperty,ae=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,re=(t,r,i)=>r in t?de(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,ve=(t,r)=>{for(var i in r||(r={}))fe.call(r,i)&&re(t,i,r[i]);if(ae)for(var i of ae(r))me.call(r,i)&&re(t,i,r[i]);return t};const he=t=>a.createElement("svg",ve({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48,role:"img"},t),a.createElement("path",{d:"M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"}));var Me="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0zNzgtMjQ2IDE1NC00NzBsNDMtNDMgMTgxIDE4MSAzODQtMzg0IDQzIDQzLTQyNyA0MjdaIi8+PC9zdmc+",oe={button:"button___VhKC6",primary:"primary___EjeYI"},se=function(r){var i=r.children,p=r.onSelect,T=r.value,C=(0,a.useState)(T||null),x=l()(C,2),d=x[0],k=x[1],A=function(j){k(j),p&&p(j)};return(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:a.Children.map(i,function(P){return a.cloneElement(P,{onSelect:A,selected:P.props.value===d})})})},xe=function(r){var i=r.children,p=r.onSelect,T=r.selected,C=r.value;return(0,e.jsx)("div",{onClick:function(){return p&&p(C)},className:"".concat(oe.button," ").concat(T&&oe.primary),style:{marginRight:"10px"},children:(0,e.jsxs)("div",{children:[T&&(0,e.jsx)(he,{}),"  ",i]})})};se.Item=xe;var b=se,O=n(20825),pe=n(25543),ge=n(59749),_={h100:"h100___hE_b0",title:"title___wSlJR",tokenlist:"tokenlist___NSozx",item:"item___ruSGv"},be=O.P.useChainId,Ce=O.P.useAccounts,Le=O.P.useIsActivating,Ue=O.P.useIsActive,_e=O.P.useProvider,Re=O.P.useENSNames,je=function(r){var i=(0,a.useState)(!1),p=l()(i,2),T=p[0],C=p[1],x=(0,a.useState)(),d=l()(x,2),k=d[0],A=d[1],P=(0,a.useState)(!1),j=l()(P,2),Z=j[0],Q=j[1],B=be(),G=(0,a.useContext)(pe.Z),J=G.currentChain,Y=G.switchChain,F=function(){C(!1)},X=function(v){C(!1),De(v),Ee(v)},H=function(v){W(!1),Ae(v)},$=(0,a.useState)(!1),M=l()($,2),V=M[0],W=M[1],q=[{name:"BNB Chain",icon:"/bnb.svg"},{name:"Arbitrum",icon:"/arb.svg"}],Se=(0,a.useState)((0,g.HJ)(null)[0]),le=l()(Se,2),K=le[0],Ee=le[1],Te=(0,a.useState)(q[1]),ie=l()(Te,2),ke=ie[0],Ae=ie[1],Pe=(0,a.useState)((0,g.HJ)(null)[0]),ce=l()(Pe,2),Ne=ce[0],De=ce[1],Ie=(0,a.useState)(q[1]),ue=l()(Ie,2),we=ue[0],Oe=ue[1],L=Ce(),ee=_e();(0,a.useEffect)(function(){Oe(ge.zG[B||56]),console.log("accounts",L)},[B]),(0,a.useEffect)(function(){if(ee&&L!==null&&L!==void 0&&L.length){var s=!1;return Promise.all(L.map(function(v){return ee.getBalance(v)})).then(function(v){if(!s)debugger}),function(){s=!0}}},[ee,L]);var Be=function(){Y(56)};return(0,e.jsx)("div",{style:{padding:"50px 0"},className:"flex flex-center",children:(0,e.jsxs)("div",{className:"flex flex-column gap-5",style:{width:"375px",backgroundColor:"#1c1b1b",padding:"1.25rem",border:"1px solid #2f343e",borderRadius:"1rem",position:"relative",overflow:"hidden"},children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginBottom:"15px"},children:[(0,e.jsx)("span",{children:"Mode"}),(0,e.jsxs)(b,{value:"FlashBridge",onSelect:function(){},children:[(0,e.jsx)(b.Item,{value:"FlashBridge",children:"FlashBridge"}),(0,e.jsx)(b.Item,{value:"zkBridge",children:"zkBridge"})]})]}),(0,e.jsx)(u,{defaultValue:k,onChange:function(v){return A(v)},max:!0,currentChain:we,currentToken:Ne,selectToken:function(){C(!0)},selectChain:function(){W(!0)},title:"From",choose:!0,chooseToken:!0},"ti1"),(0,e.jsx)("div",{onClick:Be,style:{textAlign:"center"},children:(0,e.jsx)("div",{className:"swap-hover",children:(0,e.jsx)(c,{style:{color:"#ffffff"}})})}),(0,e.jsx)(u,{defaultValue:k,onChange:function(v){return A(v)},currentChain:ke,currentToken:K,selectToken:function(){C(!0)},selectChain:function(){W(!0)},title:"To",desc:k&&"Expect to receive:".concat(k," ").concat(K==null?void 0:K.name),choose:!0},"ti2"),(0,e.jsx)(z.Z,{style:{overflow:"hidden",textOverflow:"ellipsis"},type:"primary",className:"topConnect",children:B&&"Confirm"||"Connect Wallet"}),(0,e.jsxs)(w.Z,{title:"Select Token",className:_.h100,placement:"bottom",onClose:F,visible:T,getContainer:!1,maskClosable:!1,style:{position:"absolute"},children:[(0,e.jsxs)("div",{className:_.title,children:[(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Token Name"})}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"Balance"})})]}),(0,e.jsx)("hr",{}),(0,e.jsx)("div",{className:_.tokenlist,children:(0,g.HJ)(null).map(function(s){return(0,e.jsxs)("div",{className:_.item,onClick:function(){return X(s)},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:s.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:s.name})]}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:"0"})})]})})})]}),(0,e.jsx)(w.Z,{title:"Select  Chain",className:_.h100,placement:"bottom",onClose:function(){return W(!1)},visible:V,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsx)("div",{className:_.tokenlist,children:q.map(function(s){return(0,e.jsx)("div",{className:_.item,onClick:function(){return H(s)},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:s.icon,style:{marginRight:"15px"}}),(0,e.jsx)("p",{children:s.name})]})})})})}),(0,e.jsx)(w.Z,{title:"Advanced Settings",className:_.h100,placement:"bottom",onClose:function(){return Q(!1)},visible:Z,getContainer:!1,maskClosable:!1,style:{position:"absolute"},bodyStyle:{paddingTop:"0"},children:(0,e.jsxs)("div",{className:_.tokenlist,children:[(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",children:[(0,e.jsx)("span",{children:" Gas on destination chain"}),(0,e.jsx)(ne.Z,{title:"The default amount allows you to perform a couple of transactions (e.g. Approve and Swap). Once you approve the transfer in your wallet, the transaction gas amount will be higher than a regular transaction as this includes the selected amount of destination gas to be sent.",children:(0,e.jsx)(o.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(b,{value:"none",onSelect:function(){},children:[(0,e.jsx)(b.Item,{value:"none",children:"None"}),(0,e.jsx)(b.Item,{value:"default",children:"Default"})]}),(0,e.jsx)(te.Z,{style:{marginTop:"20px"},placeholder:"0.0",prefix:(0,e.jsx)("span",{children:(0,e.jsx)("img",{src:"/eth.svg",style:{marginRight:"5px",width:"20px"}})}),suffix:(0,e.jsx)("span",{children:"Max"})}),(0,e.jsxs)("div",{className:"flex flex-between flex-align-center",style:{marginTop:"30px"},children:[(0,e.jsx)("span",{children:" Slippage tolerance"}),(0,e.jsx)(ne.Z,{title:"Your transaction will revert if the price changes unfavorably by more than this percentage",children:(0,e.jsx)(o.Z,{})})]}),(0,e.jsx)("hr",{style:{background:"#323232",margin:"10px 0px 20px 0px"}}),(0,e.jsxs)(b,{value:"0.1",onSelect:function(){},children:[(0,e.jsx)(b.Item,{value:"0.1",children:"0.1%"}),(0,e.jsx)(b.Item,{value:"0.5",children:"0.5%"}),(0,e.jsx)(b.Item,{value:"1.0",children:"1.0%"})]}),(0,e.jsx)(te.Z,{style:{marginTop:"20px"},placeholder:"0.0",suffix:(0,e.jsx)("span",{children:"%"})})]})})]})})},ye=(0,m.connect)(function(t){var r=t.count;return{count:r}})(je)},88677:function(){},62808:function(){}}]);
