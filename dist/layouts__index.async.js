(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[717],{59749:function(z,g,r){"use strict";r.d(g,{RP:function(){return T},ns:function(){return p},zG:function(){return x}});var m=r(97857),L=r.n(m),c={name:"BNB",symbol:"BNB",decimals:18},A={name:"ETH",symbol:"ETH",decimals:18},o={name:"Matic",symbol:"MATIC",decimals:18},h={name:"Celo",symbol:"CELO",decimals:18};function e(j){return!!j.nativeCurrency}function T(j){var M=x[j];return e(M)?{chainId:j,chainName:M.name,nativeCurrency:M.nativeCurrency,rpcUrls:M.urls,blockExplorerUrls:M.blockExplorerUrls}:j}var v=function(M){return{NODE_ENV:"production",PUBLIC_PATH:"/"}.infuraKey?"https://".concat(M,".infura.io/v3/").concat({NODE_ENV:"production",PUBLIC_PATH:"/"}.infuraKey):void 0},O=function(M){return{NODE_ENV:"production",PUBLIC_PATH:"/"}.alchemyKey?"https://".concat(M,".alchemyapi.io/v2/").concat({NODE_ENV:"production",PUBLIC_PATH:"/"}.alchemyKey):void 0},C={56:{urls:["https://bsc-dataseed.binance.org"],name:"BNB Chain",nativeCurrency:c,blockExplorerUrls:["https://arbiscan.io"],icon:"/bnb.svg",id:56},42161:{id:42161,icon:"/arb.svg",urls:["https://endpoints.omniatech.io/v1/arbitrum/one/public"],name:"Arbitrum",nativeCurrency:A,blockExplorerUrls:["https://arbiscan.io"]}},w={5:{urls:[v("goerli")].filter(Boolean),name:"G\xF6rli"},420:{urls:[v("optimism-goerli"),"https://goerli.optimism.io"].filter(Boolean),name:"Optimism Goerli",nativeCurrency:A,blockExplorerUrls:["https://goerli-explorer.optimism.io"]},421613:{urls:[v("arbitrum-goerli"),"https://goerli-rollup.arbitrum.io/rpc"].filter(Boolean),name:"Arbitrum Goerli",nativeCurrency:A,blockExplorerUrls:["https://testnet.arbiscan.io"]},80001:{urls:[v("polygon-mumbai")].filter(Boolean),name:"Polygon Mumbai",nativeCurrency:o,blockExplorerUrls:["https://mumbai.polygonscan.com"]},44787:{urls:["https://alfajores-forno.celo-testnet.org"],name:"Celo Alfajores",nativeCurrency:h,blockExplorerUrls:["https://alfajores-blockscout.celo-testnet.org"]}},x=L()({},C),p=Object.keys(x).reduce(function(j,M){var b=x[Number(M)].urls;return b.length&&(j[Number(M)]=b),j},{})},20825:function(z,g,r){"use strict";r.d(g,{O:function(){return v},P:function(){return O}});var m=r(5574),L=r.n(m),c=r(77985),A=r.n(c),o=r(94299),h=r.n(o),e=(0,c.initializeConnector)(function(C){return new o.MetaMask({actions:C})}),T=L()(e,2),v=T[0],O=T[1]},25543:function(z,g,r){"use strict";var m=r(67294),L=(0,m.createContext)(null);g.Z=L},67946:function(z,g,r){"use strict";r.r(g),r.d(g,{default:function(){return Le}});var m=r(5574),L=r.n(m),c=r(67294),A=r(77985),o=r(20825),h={footer:"footer___bfQhA",footerTop:"footerTop___ElUoU",footerBot:"footerBot___YjRQH"},e=r(85893);function T(){return(0,e.jsxs)("footer",{className:h.footer,children:[(0,e.jsx)("div",{className:h.footerTop,children:(0,e.jsx)("span",{children:"Powered by Way Network"})}),(0,e.jsxs)("div",{className:h.footerBot,children:[(0,e.jsx)("a",{target:"_blank",href:"https://send-finance.gitbook.io/untitled/",children:"Gitbook"}),(0,e.jsx)("a",{target:"_blank",href:"https://github.com/Send-Labs",style:{marginLeft:"24px"},children:"Github"}),(0,e.jsx)("a",{target:"_blank",href:"https://twitter.com/Send_Finance_",style:{marginLeft:"24px"},children:"Twitter"}),(0,e.jsx)("a",{target:"_blank",href:"https://t.me/Send_Finance",style:{marginLeft:"24px"},children:"Telegram"})]})]})}var v=r(99709),O=Object.defineProperty,C=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,p=(t,a,n)=>a in t?O(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,j=(t,a)=>{for(var n in a||(a={}))w.call(a,n)&&p(t,n,a[n]);if(C)for(var n of C(a))x.call(a,n)&&p(t,n,a[n]);return t};const M=t=>React.createElement("svg",j({id:"Send-Logo_svg___\\u56FE\\u5C42_1","data-name":"\\u56FE\\u5C42 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 433 120",role:"img"},t),React.createElement("defs",null,React.createElement("style",null,".Send-Logo_svg__cls-2{fill:#fff}")),React.createElement("path",{d:"M17.35 0 4.45 7.44l70.44 40.67 3.44 1.99-3.44 1.99-40.13 23.15v13.52l67.76-39.12v-.38L17.35 0ZM.36 10.38v100.13L14 118.39V31.52l3.44 1.99 40.21 23.22 11.5-6.63L.36 10.38ZM18.6 39.47V120l83.91-48.45V54.94l-68.9 39.79-3.45 1.99v-3.98l.02-46.57-11.58-6.69Z",style:{fill:"#fff"}}),React.createElement("path",{className:"Send-Logo_svg__cls-2",d:"M162.65 103.5c-5.74 0-11.09-.42-16.04-1.25-4.95-.83-9.24-2.04-12.85-3.61V82.11c4.07 1.67 8.47 3.01 13.19 4.03 4.72 1.02 9.35 1.53 13.89 1.53 6.48 0 11.25-.6 14.31-1.81 3.06-1.2 4.58-3.93 4.58-8.19 0-2.68-.65-4.81-1.94-6.39-1.3-1.57-3.54-2.99-6.74-4.24s-7.71-2.66-13.54-4.24c-9.35-2.59-15.93-5.83-19.72-9.72-3.8-3.89-5.69-9.26-5.69-16.11 0-8.24 3.01-14.58 9.03-19.03 6.02-4.44 14.77-6.67 26.25-6.67 5.37 0 10.37.37 15 1.11 4.63.74 8.38 1.62 11.25 2.64v16.54c-7.59-2.87-15.51-4.31-23.75-4.31-5.83 0-10.42.62-13.75 1.88-3.33 1.25-5 3.87-5 7.85 0 2.32.6 4.17 1.81 5.56 1.2 1.39 3.26 2.64 6.18 3.75 2.92 1.11 7.01 2.36 12.29 3.75 7.31 1.94 12.96 4.26 16.94 6.94 3.98 2.69 6.74 5.74 8.26 9.17 1.53 3.43 2.29 7.27 2.29 11.53 0 7.78-2.96 14.03-8.89 18.75-5.93 4.72-15.05 7.08-27.36 7.08ZM246.26 103.5c-11.39 0-20.42-2.85-27.08-8.54-6.67-5.69-10-14.33-10-25.9 0-10.46 2.8-18.77 8.4-24.93 5.6-6.16 13.96-9.24 25.07-9.24 10.18 0 17.99 2.66 23.4 7.99 5.42 5.33 8.13 12.29 8.13 20.9v11.94h-47.64c1.02 5.28 3.45 8.89 7.29 10.83 3.84 1.94 9.28 2.92 16.32 2.92 3.52 0 7.1-.32 10.76-.97 3.66-.65 6.78-1.48 9.38-2.5v13.33c-3.06 1.39-6.62 2.43-10.69 3.13-4.08.69-8.52 1.04-13.33 1.04Zm-19.72-39.31h31.25v-3.61c0-3.8-1.11-6.78-3.33-8.96-2.22-2.17-5.97-3.26-11.25-3.26-6.2 0-10.53 1.25-12.99 3.75-2.45 2.5-3.68 6.53-3.68 12.08ZM287.23 102.11V36.28h17.36l.69 6.25c2.68-2.04 6.09-3.82 10.21-5.35 4.12-1.53 8.45-2.29 12.99-2.29 8.7 0 15.05 2.04 19.03 6.11 3.98 4.08 5.97 10.37 5.97 18.89v42.22h-18.75V60.86c0-4.44-.9-7.59-2.71-9.44-1.81-1.85-5.16-2.78-10.07-2.78-2.87 0-5.76.65-8.68 1.94-2.92 1.3-5.35 2.92-7.29 4.86v46.67h-18.75ZM394.04 103.5c-5.83 0-11.04-1.04-15.63-3.13-4.58-2.08-8.17-5.51-10.76-10.28s-3.89-11.09-3.89-18.96 1.43-14.49 4.31-19.86c2.87-5.37 6.71-9.44 11.53-12.22 4.81-2.78 10.09-4.17 15.83-4.17 7.22 0 13.38 1.67 18.47 5V8.5h18.75v93.61h-16.11L415.43 96c-2.87 2.5-6 4.37-9.38 5.62-3.38 1.25-7.38 1.88-12.01 1.88Zm5.14-13.75c5.83 0 10.74-1.99 14.72-5.97v-30c-3.89-3.42-8.43-5.14-13.61-5.14-11.67 0-17.5 7.5-17.5 22.5 0 7.04 1.43 11.9 4.31 14.58 2.87 2.69 6.9 4.03 12.08 4.03Z"}));var b="data:image/svg+xml;base64,PHN2ZyBpZD0iX+WbvuWxgl8xIiBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzMgMTIwIj48ZGVmcz48c3R5bGU+LmNscy0ye2ZpbGw6I2ZmZn08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTcuMzUgMCA0LjQ1IDcuNDRsNzAuNDQgNDAuNjcgMy40NCAxLjk5LTMuNDQgMS45OS00MC4xMyAyMy4xNXYxMy41Mmw2Ny43Ni0zOS4xMnYtLjM4TDE3LjM1IDBaTS4zNiAxMC4zOHYxMDAuMTNMMTQgMTE4LjM5VjMxLjUybDMuNDQgMS45OSA0MC4yMSAyMy4yMiAxMS41LTYuNjNMLjM2IDEwLjM4Wk0xOC42IDM5LjQ3VjEyMGw4My45MS00OC40NVY1NC45NGwtNjguOSAzOS43OS0zLjQ1IDEuOTl2LTMuOThsLjAyLTQ2LjU3LTExLjU4LTYuNjlaIiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTYyLjY1IDEwMy41Yy01Ljc0IDAtMTEuMDktLjQyLTE2LjA0LTEuMjUtNC45NS0uODMtOS4yNC0yLjA0LTEyLjg1LTMuNjFWODIuMTFjNC4wNyAxLjY3IDguNDcgMy4wMSAxMy4xOSA0LjAzIDQuNzIgMS4wMiA5LjM1IDEuNTMgMTMuODkgMS41MyA2LjQ4IDAgMTEuMjUtLjYgMTQuMzEtMS44MSAzLjA2LTEuMiA0LjU4LTMuOTMgNC41OC04LjE5IDAtMi42OC0uNjUtNC44MS0xLjk0LTYuMzktMS4zLTEuNTctMy41NC0yLjk5LTYuNzQtNC4yNHMtNy43MS0yLjY2LTEzLjU0LTQuMjRjLTkuMzUtMi41OS0xNS45My01LjgzLTE5LjcyLTkuNzItMy44LTMuODktNS42OS05LjI2LTUuNjktMTYuMTEgMC04LjI0IDMuMDEtMTQuNTggOS4wMy0xOS4wMyA2LjAyLTQuNDQgMTQuNzctNi42NyAyNi4yNS02LjY3IDUuMzcgMCAxMC4zNy4zNyAxNSAxLjExIDQuNjMuNzQgOC4zOCAxLjYyIDExLjI1IDIuNjR2MTYuNTRjLTcuNTktMi44Ny0xNS41MS00LjMxLTIzLjc1LTQuMzEtNS44MyAwLTEwLjQyLjYyLTEzLjc1IDEuODgtMy4zMyAxLjI1LTUgMy44Ny01IDcuODUgMCAyLjMyLjYgNC4xNyAxLjgxIDUuNTYgMS4yIDEuMzkgMy4yNiAyLjY0IDYuMTggMy43NSAyLjkyIDEuMTEgNy4wMSAyLjM2IDEyLjI5IDMuNzUgNy4zMSAxLjk0IDEyLjk2IDQuMjYgMTYuOTQgNi45NCAzLjk4IDIuNjkgNi43NCA1Ljc0IDguMjYgOS4xNyAxLjUzIDMuNDMgMi4yOSA3LjI3IDIuMjkgMTEuNTMgMCA3Ljc4LTIuOTYgMTQuMDMtOC44OSAxOC43NS01LjkzIDQuNzItMTUuMDUgNy4wOC0yNy4zNiA3LjA4Wk0yNDYuMjYgMTAzLjVjLTExLjM5IDAtMjAuNDItMi44NS0yNy4wOC04LjU0LTYuNjctNS42OS0xMC0xNC4zMy0xMC0yNS45IDAtMTAuNDYgMi44LTE4Ljc3IDguNC0yNC45MyA1LjYtNi4xNiAxMy45Ni05LjI0IDI1LjA3LTkuMjQgMTAuMTggMCAxNy45OSAyLjY2IDIzLjQgNy45OSA1LjQyIDUuMzMgOC4xMyAxMi4yOSA4LjEzIDIwLjl2MTEuOTRoLTQ3LjY0YzEuMDIgNS4yOCAzLjQ1IDguODkgNy4yOSAxMC44MyAzLjg0IDEuOTQgOS4yOCAyLjkyIDE2LjMyIDIuOTIgMy41MiAwIDcuMS0uMzIgMTAuNzYtLjk3IDMuNjYtLjY1IDYuNzgtMS40OCA5LjM4LTIuNXYxMy4zM2MtMy4wNiAxLjM5LTYuNjIgMi40My0xMC42OSAzLjEzLTQuMDguNjktOC41MiAxLjA0LTEzLjMzIDEuMDRabS0xOS43Mi0zOS4zMWgzMS4yNXYtMy42MWMwLTMuOC0xLjExLTYuNzgtMy4zMy04Ljk2LTIuMjItMi4xNy01Ljk3LTMuMjYtMTEuMjUtMy4yNi02LjIgMC0xMC41MyAxLjI1LTEyLjk5IDMuNzUtMi40NSAyLjUtMy42OCA2LjUzLTMuNjggMTIuMDhaTTI4Ny4yMyAxMDIuMTFWMzYuMjhoMTcuMzZsLjY5IDYuMjVjMi42OC0yLjA0IDYuMDktMy44MiAxMC4yMS01LjM1IDQuMTItMS41MyA4LjQ1LTIuMjkgMTIuOTktMi4yOSA4LjcgMCAxNS4wNSAyLjA0IDE5LjAzIDYuMTEgMy45OCA0LjA4IDUuOTcgMTAuMzcgNS45NyAxOC44OXY0Mi4yMmgtMTguNzVWNjAuODZjMC00LjQ0LS45LTcuNTktMi43MS05LjQ0LTEuODEtMS44NS01LjE2LTIuNzgtMTAuMDctMi43OC0yLjg3IDAtNS43Ni42NS04LjY4IDEuOTQtMi45MiAxLjMtNS4zNSAyLjkyLTcuMjkgNC44NnY0Ni42N2gtMTguNzVaTTM5NC4wNCAxMDMuNWMtNS44MyAwLTExLjA0LTEuMDQtMTUuNjMtMy4xMy00LjU4LTIuMDgtOC4xNy01LjUxLTEwLjc2LTEwLjI4cy0zLjg5LTExLjA5LTMuODktMTguOTYgMS40My0xNC40OSA0LjMxLTE5Ljg2YzIuODctNS4zNyA2LjcxLTkuNDQgMTEuNTMtMTIuMjIgNC44MS0yLjc4IDEwLjA5LTQuMTcgMTUuODMtNC4xNyA3LjIyIDAgMTMuMzggMS42NyAxOC40NyA1VjguNWgxOC43NXY5My42MWgtMTYuMTFMNDE1LjQzIDk2Yy0yLjg3IDIuNS02IDQuMzctOS4zOCA1LjYyLTMuMzggMS4yNS03LjM4IDEuODgtMTIuMDEgMS44OFptNS4xNC0xMy43NWM1LjgzIDAgMTAuNzQtMS45OSAxNC43Mi01Ljk3di0zMGMtMy44OS0zLjQyLTguNDMtNS4xNC0xMy42MS01LjE0LTExLjY3IDAtMTcuNSA3LjUtMTcuNSAyMi41IDAgNy4wNCAxLjQzIDExLjkgNC4zMSAxNC41OCAyLjg3IDIuNjkgNi45IDQuMDMgMTIuMDggNC4wM1oiLz48L3N2Zz4=",U=r(22974),P=r(39711);function F(){var t=(0,c.useState)(!1),a=L()(t,2),n=a[0],s=a[1],u=o.P.useAccounts,i=u();(0,c.useEffect)(function(){var l=["0x07298580CB2E76180965eF147be67e71883AeAc6","0x08bf2999C67a807FD1708670E4C48Ada46aABAc5"];s((i==null?void 0:i.length)>0&&l.indexOf(i[0])>-1)},[i]),c.useLayoutEffect(function(){U.history.location.pathname.indexOf("pool")>-1&&n&&d()});var y=function(){var E=document.getElementsByClassName("glider");E[0].style.transform="translateX(0)"},d=function(){var E=document.getElementsByClassName("glider");E[0].style.transform="translateX(100%)"};return(0,e.jsxs)("div",{className:"tabs",children:[(0,e.jsx)("input",{type:"radio",id:"radio-1",name:"tabs",checked:!0}),(0,e.jsx)(P.rU,{to:"/transfer",children:(0,e.jsx)("label",{onClick:y,className:"tab",htmlFor:"radio-1",children:"Transfer"})}),n&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{type:"radio",id:"radio-3",name:"tabs"}),(0,e.jsx)(P.rU,{to:"/pool",children:(0,e.jsx)("label",{onClick:d,className:"tab",htmlFor:"radio-3",children:"Pools"})})]}),(0,e.jsx)("span",{className:"glider"})]})}var H=r(28043),D=r(59749),V=(0,A.initializeConnector)(function(t){return new H.Network({actions:t,urlMap:D.ns})}),Y=L()(V,2),G=Y[0],K=Y[1],X=r(15009),Q=r.n(X),$=r(99289),J=r.n($),q=r(86401),ee=r(71577),B=r(25543);function te(t){var a=t.activeChainId,n=t.switchChain,s=t.chainIds;return(0,e.jsx)(e.Fragment,{children:s.map(function(u){var i,y,d;return(0,e.jsxs)("div",{className:"network",onClick:function(){n(Number(u))},children:[(0,e.jsx)("img",{src:(i=D.zG[u])===null||i===void 0?void 0:i.icon,style:{marginRight:"15px",width:"30px"}}),(y=(d=D.zG[u])===null||d===void 0?void 0:d.name)!==null&&y!==void 0?y:u]},u)})})}function re(t){var a=t.connector,n=t.activeChainId,s=t.chainIds,u=s===void 0?Object.keys(D.zG).map(Number):s,i=t.isActivating,y=t.isActive,d=t.error,l=t.switchChain;return(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"rgb(28, 27, 27)",border:" 1px solid rgb(47, 52, 62)",borderRadius:"5px"},children:(0,e.jsx)(te,{activeChainId:n,switchChain:l,chainIds:u})})}function ne(t){var a,n=t.connector,s=t.activeChainId,u=t.chainIds,i=t.isActivating,y=t.isActive,d=t.error,l=t.setError,E=t.ENSNames,S=t.accounts,ye=t.provider,ge=function(I){if(I.length<=10)return I;var f=I.slice(0,6),Z=I.slice(-4);return"".concat(f,"...").concat(Z)},ve=(0,c.useState)(-1),R=L()(ve,2),Ie=R[0],me=R[1],Ae=(0,c.useContext)(B.Z),_=Ae.currentChain,W=(0,c.useCallback)(function(){var k=J()(Q()().mark(function I(f){return Q()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(me(f),N.prev=1,!(f===s||f===-1&&s!==void 0)){N.next=5;break}return l(void 0),N.abrupt("return");case 5:return N.next=7,n.activate((0,D.RP)(f));case 7:l(void 0),N.next=13;break;case 10:N.prev=10,N.t0=N.catch(1),l(N.t0);case 13:case"end":return N.stop()}},I,null,[[1,10]])}));return function(I){return k.apply(this,arguments)}}(),[n,s,l]);return(0,c.useEffect)(function(){_!=-1&&W(_)},[_]),(0,e.jsx)("div",{style:{zIndex:1},children:(0,e.jsx)(q.Z,{trigger:["click"],placement:"bottomRight",dropdownRender:function(){return(0,e.jsx)(re,{connector:n,activeChainId:s,chainIds:u,isActivating:i,isActive:y,error:d,switchChain:W})},children:(0,e.jsx)(ee.Z,{style:{overflow:"hidden",textOverflow:"ellipsis"},type:"primary",className:"topConnect",children:(S==null?void 0:S.length)>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("img",{src:(a=D.zG[s])===null||a===void 0?void 0:a.icon,style:{marginRight:"10px",width:"25px"}}),ge(S[0])]})||"Connect Wallet"})})})}var ae=o.P.useChainId,ie=o.P.useAccounts,oe=o.P.useIsActivating,se=o.P.useIsActive,ce=o.P.useProvider,ue=o.P.useENSNames;function le(){var t=ae(),a=K.useChainId(),n=ie(),s=oe(),u=se(),i=ce(),y=ue(i),d=(0,c.useState)(void 0),l=L()(d,2),E=l[0],S=l[1];return(0,c.useEffect)(function(){o.O.connectEagerly().catch(function(){console.debug("Failed to connect eagerly to metamask")}),G.activate().catch(function(){console.debug("Failed to connect to network")});debugger;var ye=i==null?void 0:i.getSigner("0xebaD00B2BaD5a981658706d0373B893ed1DA89e1").connectUnchecked();console.log(a,"chainId2")},[]),(0,e.jsx)(ne,{connector:o.O,activeChainId:t,isActivating:s,isActive:u,error:E,setError:S,accounts:n,provider:i,ENSNames:y})}function Me(){var t=(0,e.jsx)(v.Z,{items:[{label:(0,e.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"",style:{color:"white"},children:"Docs"})},{label:(0,e.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"",style:{color:"white"},children:"FAQ"})},{label:(0,e.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"",style:{color:"white"},children:"3rd menu item"})}],className:"menu",style:{textAlign:"center",backgroundColor:"rgb(35, 37, 48)",borderRadius:"12px"}});return(0,e.jsxs)("header",{style:{padding:"0 30px"},children:[(0,e.jsx)("div",{className:"left",style:{display:"flex",alignItems:"center",width:"200px"},children:(0,e.jsx)("img",{src:b,className:"topImage"})}),(0,e.jsx)("div",{className:"mid",style:{display:"flex",alignItems:"center"},children:(0,e.jsx)(F,{})}),(0,e.jsx)("div",{className:"right",children:(0,e.jsx)(le,{})})]})}var de={main:"main___v6QZW",network:"network___Nxblk"},je=[[o.O,o.P]],Ne=function(){var a=(0,c.useState)(-1),n=L()(a,2),s=n[0],u=n[1],i=function(d){u(d)};return(0,e.jsx)(A.Web3ReactProvider,{connectors:je,children:(0,e.jsx)(B.Z.Provider,{value:{currentChain:s,switchChain:i},children:(0,e.jsxs)("div",{className:de.main,children:[(0,e.jsx)(Me,{}),(0,e.jsx)("div",{style:{flex:"1 1 auto"},children:(0,e.jsx)(U.Outlet,{})}),(0,e.jsx)(T,{})]})})})},Le=Ne},88677:function(){},62808:function(){}}]);
