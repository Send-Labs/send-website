(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[369],{21625:function(c,i,e){"use strict";e.d(i,{R:function(){return a}});var a=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]},64622:function(c,i,e){"use strict";e.d(i,{A:function(){return a}});var a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"sourceChainId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"targetChainId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"transferId",type:"uint256"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"CrosschainTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"DebtRecorded",type:"event"},{anonymous:!1,inputs:[],name:"FeeChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"depositor",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenDeposited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!0,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensWithdrawn",type:"event"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"_transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"chainIds",type:"uint256[]"},{internalType:"uint256[]",name:"fees",type:"uint256[]"}],name:"batchSetChainFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"chainFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"chainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"feeDenominator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeNumerator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"address",name:"token",type:"address"}],name:"getDebt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"receiveCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"sendCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"targetChainId",type:"uint256"},{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"sendToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"numerator",type:"uint256"},{internalType:"uint256",name:"denominator",type:"uint256"}],name:"setSendFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"sourceChainId",type:"uint256"},{internalType:"uint256",name:"transferId",type:"uint256"},{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"withdrawAllTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"withdrawDebt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawNative",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]},20825:function(c,i,e){"use strict";e.d(i,{O:function(){return T},P:function(){return _}});var a=e(5574),u=e.n(a),o=e(77985),b=e.n(o),p=e(94299),t=e.n(p),n=(0,o.initializeConnector)(function(m){return new p.MetaMask({actions:m})}),s=u()(n,2),T=s[0],_=s[1]},78764:function(c,i,e){"use strict";e.d(i,{M$:function(){return p},ei:function(){return u}});var a={deployer:"0x0754f7fc90f842a6ace8b6ec89e4edadeb2a9ba5",usdc:"0xf7d7eaf3d6d3ab5a81514309f16395a37af6e6bc",eth:"0xb2b07ac6e3513d4e94b1c9c32057eadce1381bf0",matic:"0xe927ab3a717b5f4b17cae4a7879904f9de728161",oracle:"0xc94777b9a10cebe85c2f91972deb176cde86e027",swap:"0xec4eeebd0b2ea356ae30b0d613b16eaa8ac01c27",addressProvider:"0xe44278ace07452e45373d93e458a00aded87ad8a",mainPool:"0x07b18069e6d06ed9f3e6dd604ef63fecda2865fc",ethUsdcPool:"0xe7ac4b2f2def09d5b64a4b20c43c3f4b8b67d87d",usdcStrategy:"0x1ca45e58a067b770ff0f03dcb7f4c3d075d1c814",ethStrategy:"0x4853f4cf2274def143d58a2068f62c52c8aa59a2",maticStrategy:"0xfa3e8a1f76429e5e1ba107dfe95ca66a8fd53c92",mainPoolConfigurator:"0xcd2b058bf079ce75a1deaa6f5e7eb6d3cd66802c",flashLoanReceiver:"0x0997205e3415fd3b3694650f1bfb2a9804c409ef",dataProvider:"0x131bbaaa298ba663a507c283a3817f0aa9c4a76a"},u=function(n){return a[n]},o=function(n){var s={56:"0x55d398326f99059fF775485246999027B3197955",42161:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"};return s[n]},b=function(n){var s={56:"0x04fEfd2cCAD9782174Bc2aD81ba76432e06e3B5a",42161:"0x6Bc39f8de47fE6aBFB05f55E0F6b216c5F3cbd00"};return s[n]},p=function(n){var s={56:"https://bscscan.com/",42161:"https://arbiscan.io/",1:"https://etherscan.io/",8453:"https://basescan.org/",10:"https://optimistic.etherscan.io/"};return s[n]}},67937:function(c,i,e){"use strict";e.d(i,{AR:function(){return n},Gm:function(){return t},HJ:function(){return m},LP:function(){return C},YB:function(){return f}});var a=e(78764),u=[{name:"Polygon",img:"/polygon.svg",id:80001,checked:!1},{name:"Arbitrum",img:"/art.png",id:69,checked:!1},{name:"HardHat",img:"/polygon.svg",id:31337,checked:!1},{name:"Ganache",img:"/polygon.svg",id:1337,checked:!1}],o=80001,b=function(){return u},p=function(){return u.find(function(r){return r.id==o})},t={"main pool":{id:1,address:(0,a.ei)("mainPool")},"eth-usdc pool":{id:2,address:(0,a.ei)("ethUsdcPool")}},n=function(r){return t[r].address},s=[{key:"5",name:"USDT",address:(0,a.ei)("usdc"),decimals:6,icon:"/usdt.svg",pools:["main pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],T=[{key:"2",name:"MATIC",address:"0x1Df2FAa18c6D0EAa5CE77feEC82AF5e7ae03D56e",decimals:18,pools:["main pool","eth-usdc pool"],icon:"/matic.svg"},{key:"3",name:"ETH",address:"0x632e32C4003B6e71DA94eD5D05ED15044F97Bf7a",decimals:18,icon:"/eth.svg",pools:["main pool","eth-usdc pool"]},{key:"4",name:"USDC",address:"0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63",decimals:6,icon:"/usdc.svg",pools:["main pool"]}],_=[{key:"3",name:"ETH",icon:"/eth.svg",pools:["main pool"]},{key:"4",name:"USDC",icon:"/usdc.svg",pools:["main pool"]}],m=function(r){return{69:_,80001:s,31337:s,1337:T}[r||o]},C=function(r,l){var y=m(r);return y.find(function(v){return v.name==l})},k=function(r,l){var y=m(r);return y.find(function(v){return v.address==l})},f={1:{chain_name:"ETH-Mainnet",provider_url:"https://eth-mainnet.public.blastapi.io",send_contract:"0x268EdDd8B4C9ec7E0e45300514e6946b3f6B7f97",start_block:17985423,token:{USDT:{name:"USDT",address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",decimals:6},USDC:{name:"USDC",address:"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",decimals:6}}},56:{chain_name:"BSC",provider_url:"https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3",send_contract:"0x6bc39f8de47fe6abfb05f55e0f6b216c5f3cbd00",start_block:30908806,token:{USDT:{name:"USDT",address:"0x55d398326f99059fF775485246999027B3197955",decimals:18},USDC:{name:"USDC",address:"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",decimals:18}}},42161:{chain_name:"Arbitrum",provider_url:"https://arb-mainnet.g.alchemy.com/v2/L6XIuVuTl40vV1R9gcNoNo7j5g3jrI2T",send_contract:"0xd27c1Ea2086065dB1b8c609321B9EfBABE6E7369",start_block:122014987,token:{USDT:{name:"USDT",address:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",decimals:6},USDC:{name:"USDC",address:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",decimals:6}}},8453:{chain_name:"Base",provider_url:"https://base.meowrpc.com",send_contract:"0x83859561036110d6a31d018bb51ca012f8f48d5c",start_block:2710396,token:{USDC:{name:"USDC",address:"0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",decimals:6}}},10:{chain_name:"Optimism",provider_url:"https://opt-mainnet.g.alchemy.com/v2/84rJNCR4ZalEvn2_kGw8mJtFYUTdbMX7",send_contract:"0xbbac4d9d25835596dcf3978e1193454705eb16a6",start_block:108304677,token:{USDT:{name:"USDT",address:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",decimals:6},USDC:{name:"USDC",address:"0x7F5c764cBc14f9669B88837ca1490cCa17c31607",decimals:6}}}};function D(d,r){if(!f[d])throw new Error("chain id not in constants");var l;for(var y in f[d].token)if(f[d].token[y].address==r){l=f[d].token[y];break}return l}},19515:function(c,i,e){"use strict";e.d(i,{f_:function(){return u},vL:function(){return b}});var a=e(35553),u=function(t,n){if(t!=null)return a.formatUnits(t,n)},o=function(t,n){return ethers.utils.parseUnits("".concat(t),n)},b=function(t){if(!t||t.length<=10)return t;var n=t.slice(0,6),s=t.slice(-4);return"".concat(n,"...").concat(s)}},88677:function(){},62808:function(){}}]);
