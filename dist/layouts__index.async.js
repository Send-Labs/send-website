(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[717],{59749:function(E,x,t){"use strict";t.d(x,{RP:function(){return s},ns:function(){return S},zG:function(){return d}});var f=t(97857),l=t.n(f),u={name:"BNB",symbol:"BNB",decimals:18},m={name:"ETH",symbol:"ETH",decimals:18};function a(o){return!!o.nativeCurrency}function s(o){var c=d[o];return a(c)?{chainId:o,chainName:c.name,nativeCurrency:c.nativeCurrency,rpcUrls:c.urls,blockExplorerUrls:c.blockExplorerUrls}:o}var e={56:{urls:["https://bsc-dataseed.binance.org"],name:"BNB Chain",nativeCurrency:u,blockExplorerUrls:["https://bscscan.com/"],icon:"/bnb.svg",id:56},42161:{id:42161,icon:"/arb.svg",urls:["https://arb1.arbitrum.io/rpc"],name:"Arbitrum One",nativeCurrency:m,blockExplorerUrls:["https://arbiscan.io/"]},1:{id:1,icon:"/eth.svg",urls:["https://mainnet.infura.io/v3/"],name:"Ethereum",nativeCurrency:m,blockExplorerUrls:["https://etherscan.io/"]},8453:{id:8453,icon:"/base.svg",urls:["https://mainnet.base.org"],name:"Base",nativeCurrency:m,blockExplorerUrls:["https://basescan.org/"]},10:{id:10,icon:"/optimism.png",urls:["https://mainnet.optimism.io"],name:"Optimism",nativeCurrency:m,blockExplorerUrls:["https://optimistic.etherscan.io/"]}},d=l()({},e),S=Object.keys(d).reduce(function(o,c){var v=d[Number(c)].urls;return v.length&&(o[Number(c)]=v),o},{})},20825:function(E,x,t){"use strict";t.d(x,{O:function(){return S},P:function(){return o}});var f=t(5574),l=t.n(f),u=t(77985),m=t.n(u),a=t(94299),s=t.n(a),e=(0,u.initializeConnector)(function(c){return new a.MetaMask({actions:c})}),d=l()(e,2),S=d[0],o=d[1]},78764:function(E,x,t){"use strict";t.d(x,{M$:function(){return a},ei:function(){return l}});var f={deployer:"0x0754f7fc90f842a6ace8b6ec89e4edadeb2a9ba5",usdc:"0xf7d7eaf3d6d3ab5a81514309f16395a37af6e6bc",eth:"0xb2b07ac6e3513d4e94b1c9c32057eadce1381bf0",matic:"0xe927ab3a717b5f4b17cae4a7879904f9de728161",oracle:"0xc94777b9a10cebe85c2f91972deb176cde86e027",swap:"0xec4eeebd0b2ea356ae30b0d613b16eaa8ac01c27",addressProvider:"0xe44278ace07452e45373d93e458a00aded87ad8a",mainPool:"0x07b18069e6d06ed9f3e6dd604ef63fecda2865fc",ethUsdcPool:"0xe7ac4b2f2def09d5b64a4b20c43c3f4b8b67d87d",usdcStrategy:"0x1ca45e58a067b770ff0f03dcb7f4c3d075d1c814",ethStrategy:"0x4853f4cf2274def143d58a2068f62c52c8aa59a2",maticStrategy:"0xfa3e8a1f76429e5e1ba107dfe95ca66a8fd53c92",mainPoolConfigurator:"0xcd2b058bf079ce75a1deaa6f5e7eb6d3cd66802c",flashLoanReceiver:"0x0997205e3415fd3b3694650f1bfb2a9804c409ef",dataProvider:"0x131bbaaa298ba663a507c283a3817f0aa9c4a76a"},l=function(e){return f[e]},u=function(e){var d={56:"0x55d398326f99059fF775485246999027B3197955",42161:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"};return d[e]},m=function(e){var d={56:"0x04fEfd2cCAD9782174Bc2aD81ba76432e06e3B5a",42161:"0x6Bc39f8de47fE6aBFB05f55E0F6b216c5F3cbd00"};return d[e]},a=function(e){var d={56:"https://bscscan.com/",42161:"https://arbiscan.io/"};return d[e]}},25543:function(E,x,t){"use strict";var f=t(67294),l=(0,f.createContext)(null);x.Z=l},67946:function(E,x,t){"use strict";t.r(x),t.d(x,{default:function(){return Ce}});var f=t(5574),l=t.n(f),u=t(67294),m=t(77985),a=t(20825),s={footer:"footer___bfQhA",footerTop:"footerTop___ElUoU",footerBot:"footerBot___YjRQH"},e=t(85893);function d(){return(0,e.jsxs)("footer",{className:s.footer,children:[(0,e.jsx)("div",{className:s.footerTop,children:(0,e.jsx)("span",{children:"Powered by Way Network"})}),(0,e.jsxs)("div",{className:s.footerBot,children:[(0,e.jsx)("a",{target:"_blank",href:"https://send-finance.gitbook.io/untitled/",children:"Gitbook"}),(0,e.jsx)("a",{target:"_blank",href:"https://github.com/Send-Labs",style:{marginLeft:"24px"},children:"Github"}),(0,e.jsx)("a",{target:"_blank",href:"https://twitter.com/Send_Finance_",style:{marginLeft:"24px"},children:"Twitter"}),(0,e.jsx)("a",{target:"_blank",href:"https://t.me/Send_Finance",style:{marginLeft:"24px"},children:"Telegram"})]})]})}var S=t(99709),o=t(71577),c=t(67040),v=t(16963),G=t(13923),X=t(97937),K=t(27484),$=t.n(K),J=Object.defineProperty,w=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,k=(r,n,i)=>n in r?J(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i,te=(r,n)=>{for(var i in n||(n={}))q.call(n,i)&&k(r,i,n[i]);if(w)for(var i of w(n))ee.call(n,i)&&k(r,i,n[i]);return r};const Ee=r=>React.createElement("svg",te({id:"Send-Logo_svg___\\u56FE\\u5C42_1","data-name":"\\u56FE\\u5C42 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 433 120",role:"img"},r),React.createElement("defs",null,React.createElement("style",null,".Send-Logo_svg__cls-2{fill:#fff}")),React.createElement("path",{d:"M17.35 0 4.45 7.44l70.44 40.67 3.44 1.99-3.44 1.99-40.13 23.15v13.52l67.76-39.12v-.38L17.35 0ZM.36 10.38v100.13L14 118.39V31.52l3.44 1.99 40.21 23.22 11.5-6.63L.36 10.38ZM18.6 39.47V120l83.91-48.45V54.94l-68.9 39.79-3.45 1.99v-3.98l.02-46.57-11.58-6.69Z",style:{fill:"#fff"}}),React.createElement("path",{className:"Send-Logo_svg__cls-2",d:"M162.65 103.5c-5.74 0-11.09-.42-16.04-1.25-4.95-.83-9.24-2.04-12.85-3.61V82.11c4.07 1.67 8.47 3.01 13.19 4.03 4.72 1.02 9.35 1.53 13.89 1.53 6.48 0 11.25-.6 14.31-1.81 3.06-1.2 4.58-3.93 4.58-8.19 0-2.68-.65-4.81-1.94-6.39-1.3-1.57-3.54-2.99-6.74-4.24s-7.71-2.66-13.54-4.24c-9.35-2.59-15.93-5.83-19.72-9.72-3.8-3.89-5.69-9.26-5.69-16.11 0-8.24 3.01-14.58 9.03-19.03 6.02-4.44 14.77-6.67 26.25-6.67 5.37 0 10.37.37 15 1.11 4.63.74 8.38 1.62 11.25 2.64v16.54c-7.59-2.87-15.51-4.31-23.75-4.31-5.83 0-10.42.62-13.75 1.88-3.33 1.25-5 3.87-5 7.85 0 2.32.6 4.17 1.81 5.56 1.2 1.39 3.26 2.64 6.18 3.75 2.92 1.11 7.01 2.36 12.29 3.75 7.31 1.94 12.96 4.26 16.94 6.94 3.98 2.69 6.74 5.74 8.26 9.17 1.53 3.43 2.29 7.27 2.29 11.53 0 7.78-2.96 14.03-8.89 18.75-5.93 4.72-15.05 7.08-27.36 7.08ZM246.26 103.5c-11.39 0-20.42-2.85-27.08-8.54-6.67-5.69-10-14.33-10-25.9 0-10.46 2.8-18.77 8.4-24.93 5.6-6.16 13.96-9.24 25.07-9.24 10.18 0 17.99 2.66 23.4 7.99 5.42 5.33 8.13 12.29 8.13 20.9v11.94h-47.64c1.02 5.28 3.45 8.89 7.29 10.83 3.84 1.94 9.28 2.92 16.32 2.92 3.52 0 7.1-.32 10.76-.97 3.66-.65 6.78-1.48 9.38-2.5v13.33c-3.06 1.39-6.62 2.43-10.69 3.13-4.08.69-8.52 1.04-13.33 1.04Zm-19.72-39.31h31.25v-3.61c0-3.8-1.11-6.78-3.33-8.96-2.22-2.17-5.97-3.26-11.25-3.26-6.2 0-10.53 1.25-12.99 3.75-2.45 2.5-3.68 6.53-3.68 12.08ZM287.23 102.11V36.28h17.36l.69 6.25c2.68-2.04 6.09-3.82 10.21-5.35 4.12-1.53 8.45-2.29 12.99-2.29 8.7 0 15.05 2.04 19.03 6.11 3.98 4.08 5.97 10.37 5.97 18.89v42.22h-18.75V60.86c0-4.44-.9-7.59-2.71-9.44-1.81-1.85-5.16-2.78-10.07-2.78-2.87 0-5.76.65-8.68 1.94-2.92 1.3-5.35 2.92-7.29 4.86v46.67h-18.75ZM394.04 103.5c-5.83 0-11.04-1.04-15.63-3.13-4.58-2.08-8.17-5.51-10.76-10.28s-3.89-11.09-3.89-18.96 1.43-14.49 4.31-19.86c2.87-5.37 6.71-9.44 11.53-12.22 4.81-2.78 10.09-4.17 15.83-4.17 7.22 0 13.38 1.67 18.47 5V8.5h18.75v93.61h-16.11L415.43 96c-2.87 2.5-6 4.37-9.38 5.62-3.38 1.25-7.38 1.88-12.01 1.88Zm5.14-13.75c5.83 0 10.74-1.99 14.72-5.97v-30c-3.89-3.42-8.43-5.14-13.61-5.14-11.67 0-17.5 7.5-17.5 22.5 0 7.04 1.43 11.9 4.31 14.58 2.87 2.69 6.9 4.03 12.08 4.03Z"}));var re="data:image/svg+xml;base64,PHN2ZyBpZD0iX+WbvuWxgl8xIiBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzMgMTIwIj48ZGVmcz48c3R5bGU+LmNscy0ye2ZpbGw6I2ZmZn08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTcuMzUgMCA0LjQ1IDcuNDRsNzAuNDQgNDAuNjcgMy40NCAxLjk5LTMuNDQgMS45OS00MC4xMyAyMy4xNXYxMy41Mmw2Ny43Ni0zOS4xMnYtLjM4TDE3LjM1IDBaTS4zNiAxMC4zOHYxMDAuMTNMMTQgMTE4LjM5VjMxLjUybDMuNDQgMS45OSA0MC4yMSAyMy4yMiAxMS41LTYuNjNMLjM2IDEwLjM4Wk0xOC42IDM5LjQ3VjEyMGw4My45MS00OC40NVY1NC45NGwtNjguOSAzOS43OS0zLjQ1IDEuOTl2LTMuOThsLjAyLTQ2LjU3LTExLjU4LTYuNjlaIiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTYyLjY1IDEwMy41Yy01Ljc0IDAtMTEuMDktLjQyLTE2LjA0LTEuMjUtNC45NS0uODMtOS4yNC0yLjA0LTEyLjg1LTMuNjFWODIuMTFjNC4wNyAxLjY3IDguNDcgMy4wMSAxMy4xOSA0LjAzIDQuNzIgMS4wMiA5LjM1IDEuNTMgMTMuODkgMS41MyA2LjQ4IDAgMTEuMjUtLjYgMTQuMzEtMS44MSAzLjA2LTEuMiA0LjU4LTMuOTMgNC41OC04LjE5IDAtMi42OC0uNjUtNC44MS0xLjk0LTYuMzktMS4zLTEuNTctMy41NC0yLjk5LTYuNzQtNC4yNHMtNy43MS0yLjY2LTEzLjU0LTQuMjRjLTkuMzUtMi41OS0xNS45My01LjgzLTE5LjcyLTkuNzItMy44LTMuODktNS42OS05LjI2LTUuNjktMTYuMTEgMC04LjI0IDMuMDEtMTQuNTggOS4wMy0xOS4wMyA2LjAyLTQuNDQgMTQuNzctNi42NyAyNi4yNS02LjY3IDUuMzcgMCAxMC4zNy4zNyAxNSAxLjExIDQuNjMuNzQgOC4zOCAxLjYyIDExLjI1IDIuNjR2MTYuNTRjLTcuNTktMi44Ny0xNS41MS00LjMxLTIzLjc1LTQuMzEtNS44MyAwLTEwLjQyLjYyLTEzLjc1IDEuODgtMy4zMyAxLjI1LTUgMy44Ny01IDcuODUgMCAyLjMyLjYgNC4xNyAxLjgxIDUuNTYgMS4yIDEuMzkgMy4yNiAyLjY0IDYuMTggMy43NSAyLjkyIDEuMTEgNy4wMSAyLjM2IDEyLjI5IDMuNzUgNy4zMSAxLjk0IDEyLjk2IDQuMjYgMTYuOTQgNi45NCAzLjk4IDIuNjkgNi43NCA1Ljc0IDguMjYgOS4xNyAxLjUzIDMuNDMgMi4yOSA3LjI3IDIuMjkgMTEuNTMgMCA3Ljc4LTIuOTYgMTQuMDMtOC44OSAxOC43NS01LjkzIDQuNzItMTUuMDUgNy4wOC0yNy4zNiA3LjA4Wk0yNDYuMjYgMTAzLjVjLTExLjM5IDAtMjAuNDItMi44NS0yNy4wOC04LjU0LTYuNjctNS42OS0xMC0xNC4zMy0xMC0yNS45IDAtMTAuNDYgMi44LTE4Ljc3IDguNC0yNC45MyA1LjYtNi4xNiAxMy45Ni05LjI0IDI1LjA3LTkuMjQgMTAuMTggMCAxNy45OSAyLjY2IDIzLjQgNy45OSA1LjQyIDUuMzMgOC4xMyAxMi4yOSA4LjEzIDIwLjl2MTEuOTRoLTQ3LjY0YzEuMDIgNS4yOCAzLjQ1IDguODkgNy4yOSAxMC44MyAzLjg0IDEuOTQgOS4yOCAyLjkyIDE2LjMyIDIuOTIgMy41MiAwIDcuMS0uMzIgMTAuNzYtLjk3IDMuNjYtLjY1IDYuNzgtMS40OCA5LjM4LTIuNXYxMy4zM2MtMy4wNiAxLjM5LTYuNjIgMi40My0xMC42OSAzLjEzLTQuMDguNjktOC41MiAxLjA0LTEzLjMzIDEuMDRabS0xOS43Mi0zOS4zMWgzMS4yNXYtMy42MWMwLTMuOC0xLjExLTYuNzgtMy4zMy04Ljk2LTIuMjItMi4xNy01Ljk3LTMuMjYtMTEuMjUtMy4yNi02LjIgMC0xMC41MyAxLjI1LTEyLjk5IDMuNzUtMi40NSAyLjUtMy42OCA2LjUzLTMuNjggMTIuMDhaTTI4Ny4yMyAxMDIuMTFWMzYuMjhoMTcuMzZsLjY5IDYuMjVjMi42OC0yLjA0IDYuMDktMy44MiAxMC4yMS01LjM1IDQuMTItMS41MyA4LjQ1LTIuMjkgMTIuOTktMi4yOSA4LjcgMCAxNS4wNSAyLjA0IDE5LjAzIDYuMTEgMy45OCA0LjA4IDUuOTcgMTAuMzcgNS45NyAxOC44OXY0Mi4yMmgtMTguNzVWNjAuODZjMC00LjQ0LS45LTcuNTktMi43MS05LjQ0LTEuODEtMS44NS01LjE2LTIuNzgtMTAuMDctMi43OC0yLjg3IDAtNS43Ni42NS04LjY4IDEuOTQtMi45MiAxLjMtNS4zNSAyLjkyLTcuMjkgNC44NnY0Ni42N2gtMTguNzVaTTM5NC4wNCAxMDMuNWMtNS44MyAwLTExLjA0LTEuMDQtMTUuNjMtMy4xMy00LjU4LTIuMDgtOC4xNy01LjUxLTEwLjc2LTEwLjI4cy0zLjg5LTExLjA5LTMuODktMTguOTYgMS40My0xNC40OSA0LjMxLTE5Ljg2YzIuODctNS4zNyA2LjcxLTkuNDQgMTEuNTMtMTIuMjIgNC44MS0yLjc4IDEwLjA5LTQuMTcgMTUuODMtNC4xNyA3LjIyIDAgMTMuMzggMS42NyAxOC40NyA1VjguNWgxOC43NXY5My42MWgtMTYuMTFMNDE1LjQzIDk2Yy0yLjg3IDIuNS02IDQuMzctOS4zOCA1LjYyLTMuMzggMS4yNS03LjM4IDEuODgtMTIuMDEgMS44OFptNS4xNC0xMy43NWM1LjgzIDAgMTAuNzQtMS45OSAxNC43Mi01Ljk3di0zMGMtMy44OS0zLjQyLTguNDMtNS4xNC0xMy42MS01LjE0LTExLjY3IDAtMTcuNSA3LjUtMTcuNSAyMi41IDAgNy4wNCAxLjQzIDExLjkgNC4zMSAxNC41OCAyLjg3IDIuNjkgNi45IDQuMDMgMTIuMDggNC4wM1oiLz48L3N2Zz4=",P=t(34339),p=t(22974),Y=t(39711);function ne(){var r=(0,u.useState)(!1),n=l()(r,2),i=n[0],j=n[1],N=a.P.useAccounts,M=N();(0,u.useEffect)(function(){var L=["0xebaD00B2BaD5a981658706d0373B893ed1DA89e1","0x08bf2999C67a807FD1708670E4C48Ada46aABAc5","0x0f355a70d27eF1376e77C6Df9d9D8d661bCDf339"];j((M==null?void 0:M.length)>0&&L.indexOf(M[0])>-1)},[M]),u.useLayoutEffect(function(){p.history.location.pathname.indexOf("pool")>-1&&i&&I()});var y=function(){var C=document.getElementsByClassName("glider");C[0].style.transform="translateX(0)"},I=function(){var C=document.getElementsByClassName("glider");C[0].style.transform="translateX(100%)"};return(0,e.jsxs)("div",{className:"tabs",children:[(0,e.jsx)("input",{type:"radio",id:"radio-1",name:"tabs",checked:!0}),(0,e.jsx)(Y.rU,{to:"/transfer",children:(0,e.jsx)("label",{onClick:y,className:"tab",htmlFor:"radio-1",children:"Transfer"})}),i&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{type:"radio",id:"radio-3",name:"tabs"}),(0,e.jsx)(Y.rU,{to:"/pool",children:(0,e.jsx)("label",{onClick:I,className:"tab",htmlFor:"radio-3",children:"Pools"})})]}),(0,e.jsx)("span",{className:"glider"})]})}var ae=t(28043),O=t(59749),ie=(0,m.initializeConnector)(function(r){return new ae.Network({actions:r,urlMap:O.ns})}),_=l()(ie,2),Se=_[0],se=_[1],ce=t(15009),U=t.n(ce),oe=t(99289),ue=t.n(oe),Me=t(86401),B=t(25543);function de(r){var n=r.activeChainId,i=r.switchChain,j=r.chainIds;return(0,e.jsx)(e.Fragment,{children:j.map(function(N){var M,y,I;return(0,e.jsxs)("div",{className:"network",onClick:function(){i(Number(N))},children:[(0,e.jsx)("img",{src:(M=O.zG[N])===null||M===void 0?void 0:M.icon,style:{marginRight:"15px",width:"30px"}}),(y=(I=O.zG[N])===null||I===void 0?void 0:I.name)!==null&&y!==void 0?y:N]},N)})})}function le(r){var n=r.connector,i=r.activeChainId,j=r.chainIds,N=j===void 0?Object.keys(O.zG).map(Number):j,M=r.isActivating,y=r.isActive,I=r.error,L=r.switchChain;return(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"rgb(28, 27, 27)",border:" 1px solid rgb(47, 52, 62)",borderRadius:"5px"},children:(0,e.jsx)(de,{activeChainId:i,switchChain:L,chainIds:N})})}var Q=t(19515);function je(r){var n,i=r.connector,j=r.activeChainId,N=r.chainIds,M=r.isActivating,y=r.isActive,I=r.error,L=r.setError,C=r.ENSNames,D=r.accounts,De=r.provider,Z=(0,u.useState)(-1),z=l()(Z,2),W=z[0],A=z[1],g=(0,u.useContext)(B.Z),T=g.currentChain,H=(0,u.useCallback)(function(){var F=ue()(U()().mark(function V(b){return U()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(A(b),h.prev=1,!(b===j||b===-1&&j!==void 0)){h.next=5;break}return L(void 0),h.abrupt("return");case 5:return h.next=7,i.activate((0,O.RP)(b));case 7:localStorage.setItem("chainId",b+""),L(void 0),h.next=14;break;case 11:h.prev=11,h.t0=h.catch(1),L(h.t0);case 14:case"end":return h.stop()}},V,null,[[1,11]])}));return function(V){return F.apply(this,arguments)}}(),[i,j,L]);return(0,u.useEffect)(function(){T!=-1&&H(T)},[T]),(0,e.jsx)("div",{style:{zIndex:1},children:(0,e.jsx)(Me.Z,{trigger:["click"],placement:"bottomRight",dropdownRender:function(){return(0,e.jsx)(le,{connector:i,activeChainId:j,chainIds:N,isActivating:M,isActive:y,error:I,switchChain:H})},children:(0,e.jsx)(o.Z,{style:{overflow:"hidden",textOverflow:"ellipsis"},type:"primary",className:"topConnect",children:(D==null?void 0:D.length)>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("img",{src:(n=O.zG[j])===null||n===void 0?void 0:n.icon,style:{marginRight:"10px",width:"25px"}}),(0,Q.vL)(D[0])]})||"Connect Wallet"})})})}var Ne=a.P.useChainId,ye=a.P.useAccounts,ge=a.P.useIsActivating,Le=a.P.useIsActive,ve=a.P.useProvider,Ie=a.P.useENSNames;function xe(){var r=Ne(),n=se.useChainId(),i=ye(),j=ge(),N=Le(),M=ve(),y=Ie(M),I=(0,u.useState)(void 0),L=l()(I,2),C=L[0],D=L[1];return(0,e.jsx)(je,{connector:a.O,activeChainId:r,isActivating:j,isActive:N,error:C,setError:D,accounts:i,provider:M,ENSNames:y})}var R=t(78764);function fe(r){var n,i=(0,e.jsx)(S.Z,{items:[{label:(0,e.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"",style:{color:"white"},children:"Docs"})},{label:(0,e.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"",style:{color:"white"},children:"FAQ"})},{label:(0,e.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"",style:{color:"white"},children:"3rd menu item"})}],className:"menu",style:{textAlign:"center",backgroundColor:"rgb(35, 37, 48)",borderRadius:"12px"}}),j=(0,u.useState)(!1),N=l()(j,2),M=N[0],y=N[1],I=[{title:"Recipient Address",dataIndex:"toScan",key:"address",render:function(g){return(0,e.jsx)("a",{children:(0,Q.vL)(g)})}},{title:"From",dataIndex:"from",key:"from",render:function(g,T){return(0,e.jsxs)("a",{target:"_black",href:(0,R.M$)(g)+"tx/"+T.fromScan,style:{display:"flex",alignItems:"center",gap:"5px"},children:[(0,e.jsx)("img",{width:16,src:g=="56"&&"/bnb.svg"||"/arb.svg"}),g=="56"&&"BNB Chain"||"Arbitrum One",(0,e.jsx)(P.r,{width:16,height:16,fill:"#fff"})]})}},{title:"To",dataIndex:"to",key:"to",render:function(g,T){return(0,e.jsxs)("a",{target:"_black",href:"".concat((0,R.M$)(g),"address/").concat(T.toScan,"#tokentxns"),style:{display:"flex",alignItems:"center",gap:"5px"},children:[(0,e.jsx)("img",{width:16,src:g=="56"&&"/bnb.svg"||"/arb.svg"}),g=="56"&&"BNB Chain"||"Arbitrum One",(0,e.jsx)(P.r,{width:16,height:16,fill:"#fff"})]})}},{title:"Value",dataIndex:"amount",key:"amount",render:function(g,T){return(0,e.jsxs)("span",{children:[(0,e.jsx)("strong",{children:g}),"\xA0",T.token]})}},{title:"Mode",dataIndex:"mode",key:"mode",render:function(){return"FlashBridge"}},{title:"Time",dataIndex:"cratetime",key:"time",render:function(g){return $()(g).format("YYYY-MM-DD HH:ss:mm")}}],L=a.P.useChainId,C=a.P.useAccounts,D=a.P.useIsActivating,De=a.P.useIsActive,Z=a.P.useProvider,z=a.P.useENSNames,W=L();return(0,e.jsxs)("header",{style:{padding:"0 30px"},children:[(0,e.jsx)("div",{className:"left",style:{display:"flex",alignItems:"center",width:"200px"},children:(0,e.jsx)("img",{src:re,className:"topImage"})}),(0,e.jsx)("div",{className:"mid",style:{display:"flex",alignItems:"center"},children:(0,e.jsx)(ne,{})}),(0,e.jsxs)("div",{className:"right",style:{display:"flex",alignItems:"center",gap:"10px"},children:[W&&(0,e.jsxs)(o.Z,{onClick:function(){return y(!0)},style:{overflow:"hidden",textOverflow:"ellipsis"},type:"primary",className:"topConnect",children:[(0,e.jsx)(G.Z,{})," History"]}),(0,e.jsx)(xe,{})]}),(0,e.jsx)(c.Z,{width:1e3,open:M,onCancel:function(){return y(!1)},footer:null,closeIcon:(0,e.jsx)(X.Z,{style:{color:"#fff"}}),children:(0,e.jsx)(v.Z,{pagination:!1,columns:I,dataSource:(n=r.history.data)===null||n===void 0?void 0:n.sort(function(A,g){return g.id-A.id})})})]})}var me=(0,p.connect)(function(r){var n=r.history;return{history:n}})(fe),he={main:"main___v6QZW",network:"network___Nxblk"},Ae=[[a.O,a.P]],Te=function(){var n=(0,u.useState)(-1),i=l()(n,2),j=i[0],N=i[1],M=function(I){N(I)};return(0,u.useEffect)(function(){var y=localStorage.getItem("chainId");y&&M(y*1)},[]),(0,e.jsx)(m.Web3ReactProvider,{connectors:Ae,children:(0,e.jsx)(B.Z.Provider,{value:{currentChain:j,switchChain:M},children:(0,e.jsxs)("div",{className:he.main,children:[(0,e.jsx)(me,{}),(0,e.jsx)("div",{style:{flex:"1 1 auto"},children:(0,e.jsx)(p.Outlet,{})}),(0,e.jsx)(d,{})]})})})},Ce=Te},19515:function(E,x,t){"use strict";t.d(x,{f_:function(){return l},vL:function(){return m}});var f=t(35553),l=function(s,e){if(s!=null)return f.formatUnits(s,e)},u=function(s,e){return ethers.utils.parseUnits("".concat(s),e)},m=function(s){if(!s||s.length<=10)return s;var e=s.slice(0,6),d=s.slice(-4);return"".concat(e,"...").concat(d)}},34339:function(E,x,t){"use strict";t.d(x,{r:function(){return d}});var f=t(67294),l=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(o,c,v)=>c in o?l(o,c,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[c]=v,e=(o,c)=>{for(var v in c||(c={}))m.call(c,v)&&s(o,v,c[v]);if(u)for(var v of u(c))a.call(c,v)&&s(o,v,c[v]);return o};const d=o=>f.createElement("svg",e({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48,role:"img"},o),f.createElement("path",{d:"M215.384-160q-23.057 0-39.221-16.163Q160-192.327 160-215.384v-529.232q0-23.057 16.163-39.221Q192.327-800 215.384-800h224.385v30.769H215.384q-9.23 0-16.923 7.692-7.692 7.693-7.692 16.923v529.232q0 9.23 7.692 16.923 7.693 7.692 16.923 7.692h529.232q9.23 0 16.923-7.692 7.692-7.693 7.692-16.923v-224.385H800v224.385q0 23.057-16.163 39.221Q767.673-160 744.616-160H215.384Zm171.231-204.384-22-22.231 382.616-382.616H541.308V-800H800v258.692h-30.769V-747L386.615-364.384Z"}));var S="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0yMTUuMzg0LTE2MHEtMjMuMDU3IDAtMzkuMjIxLTE2LjE2M1ExNjAtMTkyLjMyNyAxNjAtMjE1LjM4NHYtNTI5LjIzMnEwLTIzLjA1NyAxNi4xNjMtMzkuMjIxUTE5Mi4zMjctODAwIDIxNS4zODQtODAwaDIyNC4zODV2MzAuNzY5SDIxNS4zODRxLTkuMjMgMC0xNi45MjMgNy42OTItNy42OTIgNy42OTMtNy42OTIgMTYuOTIzdjUyOS4yMzJxMCA5LjIzIDcuNjkyIDE2LjkyMyA3LjY5MyA3LjY5MiAxNi45MjMgNy42OTJoNTI5LjIzMnE5LjIzIDAgMTYuOTIzLTcuNjkyIDcuNjkyLTcuNjkzIDcuNjkyLTE2LjkyM3YtMjI0LjM4NUg4MDB2MjI0LjM4NXEwIDIzLjA1Ny0xNi4xNjMgMzkuMjIxUTc2Ny42NzMtMTYwIDc0NC42MTYtMTYwSDIxNS4zODRabTE3MS4yMzEtMjA0LjM4NC0yMi0yMi4yMzEgMzgyLjYxNi0zODIuNjE2SDU0MS4zMDhWLTgwMEg4MDB2MjU4LjY5MmgtMzAuNzY5Vi03NDdMMzg2LjYxNS0zNjQuMzg0WiIvPjwvc3ZnPg=="},88677:function(){},62808:function(){}}]);
