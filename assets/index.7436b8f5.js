var a0=Object.defineProperty,r0=Object.defineProperties;var s0=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var I=(e,t,f)=>t in e?a0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:f}):e[t]=f,p=(e,t)=>{for(var f in t||(t={}))V.call(t,f)&&I(e,f,t[f]);if(N)for(var f of N(t))K.call(t,f)&&I(e,f,t[f]);return e},m=(e,t)=>r0(e,s0(t));var J=(e,t)=>{var f={};for(var o in e)V.call(e,o)&&t.indexOf(o)<0&&(f[o]=e[o]);if(e!=null&&N)for(var o of N(e))t.indexOf(o)<0&&K.call(e,o)&&(f[o]=e[o]);return f};var O=(e,t,f)=>(I(e,typeof t!="symbol"?t+"":t,f),f);import{I as l0,W as c0,u as v,r as s,C as M,p as d0,s as l,j as n,a as b0,R as Q,b as u0,c as p0,d as g0,e as m0,F as h0,f as d,g as y0,h as x0,i as h,L as w0,O as v0,k as T0,t as x,l as S0,m as C0,n as P0,o as E0,q as k0,v as N0,w as Z,x as M0,y as A0,T as $0,B as D0,z as W0,A,D as B0,E as R0,G as I0}from"./vendor.db049a92.js";const O0=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function f(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=f(i);fetch(i.href,a)}};O0();const L={POLYGON_MAINNET:137,POLYGON_TESTNET:80001,DAPPTOOLS:99},L0={[L.POLYGON_MAINNET]:"https://polygon.g.alchemy.com/v2/VMBpFqjMYv2w-MWnc9df92w3R2TpMvSG",[L.POLYGON_TESTNET]:"https://polygon-mumbai.g.alchemy.com/v2/VMBpFqjMYv2w-MWnc9df92w3R2TpMvSG",[L.DAPPTOOLS]:"http://localhost:8545"},S=new l0({}),z0=new c0({rpc:L0,qrcode:!0,clientMeta:{name:"Multisig Interface",description:"Clipto",url:"",icons:[]}});function F0(){const{activate:e,active:t}=v(),[f,o]=s.exports.useState(!1);return s.exports.useEffect(()=>{S.isAuthorized().then(i=>{i?e(S,void 0,!0).catch(()=>{o(!0)}):o(!0)})},[]),s.exports.useEffect(()=>{!f&&t&&o(!0)},[f,t]),f}const _0=()=>{const{account:e,library:t}=v(),f=s.exports.useCallback(async a=>{if(!!t)try{return await(t==null?void 0:t.lookupAddress(a))||null}catch{return null}},[t]),[o,i]=s.exports.useState(void 0);return s.exports.useEffect(()=>{if(!e){i(void 0);return}(async()=>{const r=await f(e);if(r){i(r);return}else{i(null);return}})()},[e,f]),o};function H0(e=!1){const{active:t,error:f,activate:o}=v();s.exports.useEffect(()=>{const{ethereum:i}=window;if(i&&i.on&&!t&&!f&&!e){const a=()=>{console.log("Handling 'connect' event"),o(S)},r=c=>{console.log("Handling 'chainChanged' event with payload",c),o(S)},g=c=>{console.log("Handling 'accountsChanged' event with payload",c),c.length>0&&o(S)},u=c=>{console.log("Handling 'networkChanged' event with payload",c),o(S)};return i.on("connect",a),i.on("chainChanged",r),i.on("accountsChanged",g),i.on("networkChanged",u),()=>{i.removeListener&&(i.removeListener("connect",a),i.removeListener("chainChanged",r),i.removeListener("accountsChanged",g),i.removeListener("networkChanged",u))}}},[t,f,e,o])}const q0=1130,e0=`${q0}px`,z={upToExtraSmall:500,upToSmall:720,upToMedium:960,upToLarge:1280,upToExtraLarge:1500},j0=Object.keys(z).reduce((e,t)=>(e[t]=(f,o,i)=>M`
    @media (max-width: ${z[t]}px) {
      ${M(f,o,i)}
    }
  `,e),{}),t0="#FFFFFF",G0="#000000",X0="#040404",Y0={white:t0,black:X0,blackPure:G0,lightGray:"#B3B3B3",gray:"#686868",darkGray:"0E0E0E",twitterBlue:"#1DA1F2",green:"#1DB954",yellow:"#EDE641",red:"#FF6868",primary:t0,secondary:"#888F96",border:"#2A2A2A"},U0=m(p({},Y0),{grids:{sm:8,md:12,lg:24},mediaWidth:j0,breakpoints:z,flexColumnNoWrap:M`
    display: flex;
    flex-flow: column nowrap;
  `,flexRowNoWrap:M`
    display: flex;
    flex-flow: row nowrap;
  `}),V0=(e,t=6,f=4)=>`${e.slice(0,t)}...${e.slice(-1*f)}`,K0=e=>(t,f,o)=>e((i,a)=>{const r=typeof i=="function"?d0(i):i;return t(r,a)},f,o),F=l.div`
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  border-radius: 100%;
  background: linear-gradient(134.17deg, #ff9900 0%, #fff627 86.27%);
`,J0=e=>{const t=f=>{const o=f.substring(2,10),i=parseInt(o.substring(0,2),16),a=parseInt(o.substring(2,4),16),r=parseInt(o.substring(4,6),16);return`rgb(${i}, ${a}, ${r})`};return e.url?n(F,{style:{background:`url(${e.url})`}}):e.address?n(F,{style:{background:`linear-gradient(134.17deg, ${t(e.address.substring(2,10))} 0%, ${t(e.address.substring(10,18))} 86.27%)`}}):n(F,{})},Q0=l.button`
  font-family: 'Scto Grotesk A';
  font-style: normal;
  font-weight: bold;

  padding: 0 20px;
  font-size: ${e=>e.size==="small"?"14px":"16px"};
  line-height: ${e=>e.size==="small"?"17px":"20px"};
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  border-radius: ${e=>e.size==="small"?"40px":"50px"};
  height: ${e=>e.size==="small"?"40px":"48px"};
  width: 100%;

  transition: all 0.15s ease;
  will-change: transform, background-color, box-shadow;
  transform: ${e=>e.isPressed?"scale(0.985)":"translate3d(0,0,0)"};

  background: ${e=>e.variant==="secondary"?e.theme.blackPure:e.theme.green};
  color: ${e=>e.variant==="secondary"?e.theme.white:e.theme.blackPure};
  border: ${e=>e.variant==="secondary"?`1px solid ${e.theme.border}`:"none"};
  :hover,
  :active {
    border: ${e=>e.variant==="secondary"?`1px solid ${e.theme.green}`:"none"};
  }
  ${e=>e.disabled&&`
    color: ${e.theme.blackPure};
    cursor: not-allowed;
    background: ${e.theme.gray};
  `}
`,T=e=>{var i,a;const t=s.exports.useRef(null),{buttonProps:f,isPressed:o}=b0(e,t);return n(Q0,m(p({variant:(i=e.variant)!=null?i:"primary",size:(a=e.size)!=null?a:"large",isDisabled:e.isDisabled},f),{isPressed:o,ref:t,style:e.style,children:e.children}),e.key)},Z0=e=>{const{title:t,children:f,containerStyles:o}=e,i=Q.useRef(null),{overlayProps:a,underlayProps:r}=u0(e,i);p0();const{modalProps:g}=g0(),{dialogProps:u,titleProps:c}=m0(e,i);return n("div",m(p({style:{position:"fixed",zIndex:100,top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center"}},r),{children:n(h0,{contain:!0,restoreFocus:!0,autoFocus:!0,children:d(y0.div,m(p(p(p({},a),u),g),{ref:i,style:p({background:"#000000",color:"#ffffff",padding:"40px 16px",marginBottom:64,borderRadius:16,boxShadow:`0.3px 0.3px 2.2px rgba(0, 0, 0, 0.02), 0.7px 0.8px 5.3px rgba(0, 0, 0, 0.028),
            1.3px 1.5px 10px rgba(0, 0, 0, 0.035), 2.2px 2.7px 17.9px rgba(0, 0, 0, 0.042),
            4.2px 5px 33.4px rgba(0, 0, 0, 0.05), 10px 12px 80px rgba(0, 0, 0, 0.07)`},o),children:[n("h3",m(p({},c),{style:{marginTop:0},children:t})),f]}))})}))},ee=l.div`
  font-family: 'Scto Grotesk A';
  font-style: bold;
  font-weight: 900;
  font-size: 24px;
  line-height: 125%;

  display: flex;
  align-items: center;
  padding: 4px;
  margin-left: -4px;

  color: #ffffff;
`,te=e=>n(ee,m(p({},e),{children:"Multisig Interface"})),ne=e0,P="64px",fe=l.div`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${P};
  max-height: ${P};
  min-height: ${P};
  background: ${e=>e.theme.black};
  z-index: 100;

  padding: 0 32px;
  ${({theme:e})=>e.mediaWidth.upToSmall`
    padding: 0 16px;
  `}

  position: absolute;
  left: 0;
  right: 0;
`,oe=l.div`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: space-between;
  max-width: ${ne};

  color: #ffffff;
  margin: 0 auto 0 auto;
`,ie=l.div`
  display: flex;
  text-decoration: inherit;
  justify-content: flex-start;
  align-items: center;
`,n0=l.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`,ae=l.span`
  display: block;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #cccccc;
  transition: color 0.15s ease;
  :hover {
    color: #ffffff;
  }
`,_=x0(K0(e=>({showDialog:!1,hasTriedEagerConnecting:!1,setShowDialog:t=>{e(f=>{f.showDialog=t})},setHasTriedEagerConnecting:t=>{e(f=>{f.hasTriedEagerConnecting=t})}}))),re=()=>{const{activate:e,account:t,deactivate:f}=v(),o=_(b=>b.showDialog),i=_(b=>b.setShowDialog),a=_(b=>b.setHasTriedEagerConnecting),r=_0(),g=F0(),[u,c]=s.exports.useState(null);s.exports.useEffect(()=>{a(g)},[g,a]);const[C,w]=s.exports.useState(void 0),B=s.exports.useCallback(async()=>{var b,k;c(null),w("metamask");try{await e(S,void 0,!0)}catch(y){console.log(y.name),y.name==="NoEthereumProviderError"||((b=y.message)==null?void 0:b.includes("No Ethereum provider was found"))?c("No MetaMask detected."):y.message.includes("Already processing eth_requestAccounts")||y.message.includes("Request of type 'wallet_requestPermissions'")?c("Check MetaMask for an existing login request"):y.message.includes("The user rejected the request")?c("The MetaMask login was closed, try connecting again"):(c((k=y.message)!=null?k:"Something went wrong logging in"),console.log(y,Object.keys(y))),w(void 0);return}i(!1),setTimeout(()=>{w(void 0)},1500)},[e,i]),R=s.exports.useCallback(async()=>{var b;c(null),w("wc");try{await e(z0,void 0,!0)}catch(k){w(void 0),c((b=k.message)!=null?b:"Something went wrong logging in with WalletConnect"),console.log(k);return}i(!1),setTimeout(()=>{w(void 0)},1500)},[e,i]),U=s.exports.useCallback(async()=>{f()},[f]);return H0(!g),d(h,{children:[n(fe,{children:d(oe,{children:[n(ie,{children:n(w0,{to:"/",children:n(te,{})})}),g&&d(h,{children:[!t&&n(n0,{children:n(T,{size:"small",variant:"secondary",onPress:()=>i(!0),children:"Connect Wallet"})}),t&&n(h,{children:d(n0,{onClick:U,children:[n(ae,{style:{marginRight:16},children:r!=null?r:V0(t,6,4)}),n(J0,{address:t})]})})]})]})}),o&&n(v0,{children:n(Z0,{containerStyles:{},isOpen:!0,onClose:()=>i(!1),isDismissable:!0,children:d(h,{children:[n("div",{style:{marginBottom:16,fontWeight:700,fontSize:18,textAlign:"left"},children:"Connect a wallet"}),u&&n("div",{style:{marginBottom:12,color:"#FF6868",textAlign:"left"},children:u}),n(T,{variant:"secondary",style:{marginBottom:16,minWidth:310},isDisabled:C==="metamask",onPress:B,children:n("div",{style:{display:"flex",verticalAlign:"middle"},children:C==="metamask"?n(h,{children:"Confirm in your wallet"}):"Continue with Metamask"})}),n(T,{variant:"secondary",style:{marginBottom:16,minWidth:310},isDisabled:C==="wc",onPress:R,children:n("div",{style:{display:"flex",verticalAlign:"middle"},children:C==="wc"?n(h,{children:"Confirm in your wallet"}):"Continue with mobile wallet"})})]})})})]})},H=l.div`
  height: ${P};
  width: 100%;
  min-height: ${P};
  max-height: ${P};
`,q="88px";l.div`
  height: ${q};
  width: 100%;
  min-height: ${q};
  max-height: ${q};
`;const j=l.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,G=l.div`
  padding: 0 32px;
  ${({theme:e})=>e.mediaWidth.upToSmall`
    padding: 0 16px;
  `}
  width: 100%;
  display: flex;
  justify-content: center;
`,X=l.div`
  width: 100%;
  max-width: ${e0};
`;l.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;const $=l.div`
  border: 1px solid ${({theme:e})=>e.border};
  max-width: 512px;
  padding: 20px;
  border-radius: 16px;
`,f0=l.hr`
  margin-left: -20px;
  width: calc(100% + 40px);
  height: 1px;
  border: none;
  background-color: ${({theme:e})=>e.border};
  margin-top: 10px;
  margin-bottom: 10px;
`,se=l($)`
  display: block;
  margin: auto;
  margin-top: 0px;
  max-width: 95%;
  margin-bottom: 25px;
`,le=e=>{const{account:t,library:f}=v(),[o,i]=s.exports.useState(void 0),[a,r]=s.exports.useState();s.exports.useEffect(()=>{(async()=>{const c=await e.multisig.proposals(e.proposalNumber);i(c)})()},[a]),s.exports.useEffect(()=>{f&&f.on("block",u=>{r(u)})},[f]);const g=async()=>{if(!!o)if(o.sigs.toNumber()>=e.sigsRequired){const u=await e.multisig.execute(e.proposalNumber);x.info("Awaiting TX confirmation..."),await u.wait(),x.success("Proposal executed!")}else{const u=await e.multisig.sign(e.proposalNumber);x.info("Awaiting TX confirmation..."),await u.wait(),x.success("Proposal signed!")}};return n(se,{children:o&&d(h,{children:[d("p",{style:{fontWeight:"bold"},children:["Proposal #",e.proposalNumber]}),d("p",{children:["To: ",o.target]}),d("p",{children:["Value: ",T0(o.value)," ether"]}),d("p",{children:["Payload: ",o.payload]}),d("p",{children:["Signatures: ",o.sigs.toString()]}),n(T,{style:{marginTop:"16px",maxWidth:"100px"},size:"small",onPress:()=>g(),children:o.sigs.toNumber()>=e.sigsRequired?"Execute":"Sign"})]})})},ce=e=>{const t=[];for(let f=0;f<e.proposalCounter;f++)t.push(n(le,{multisig:e.multisig,proposalNumber:f,sigsRequired:e.sigsRequired},f.toString()));return n(h,{children:t})},Y=l.span`
  display: block;
  font-family: 'Scto Grotesk A';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: ${e=>e.theme.lightGray};
`,de=l.span`
  display: block;
  font-family: 'Scto Grotesk A';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${e=>e.theme.white};
`,be=l.div`
  font-family: 'Scto Grotesk A';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${e=>e.theme.lightGray};
`,ue=l.input`
  font-family: 'Scto Grotesk A';
  background: transparent;
  border: 1px solid ${e=>e.theme.border};
  box-sizing: border-box;
  border-radius: 8px;
  min-height: 48px;
  outline: none;
  padding-left: 16px;
  padding-right: 12px;
  min-width: 0;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`,pe=l.textarea`
  border: none;
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none; /*remove the resize handle on the bottom right*/
  font-family: 'Scto Grotesk A';
  background: transparent;
  border: 1px solid ${e=>e.theme.border};
  box-sizing: border-box;
  border-radius: 8px;
  min-height: 48px;
  outline: none;
  padding-left: 16px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 8px;
  min-width: 0;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  min-height: 182px;
`,ge=l.p`
  position: absolute;
  right: 0;
  padding-right: 18px;
  margin-left: 100%;
  transform: translateY(14px);
  font-weight: bold;
`;function E(e){const t=s.exports.useRef(null),f=J(e,[]),{labelProps:o,inputProps:i,descriptionProps:a,errorMessageProps:r}=S0(f,t),g=p(p({},i.style),e.inputStyles);return d("div",{style:{display:"flex",flexDirection:"column"},children:[d("div",{style:{marginBottom:16},children:[e.label&&n(de,m(p({style:{marginBottom:e.description?7:0},as:"label"},o),{children:e.label})),e.description&&n(be,m(p({},a),{children:e.description}))]}),d("div",{style:{display:"flex",flexDirection:"row"},children:[e.inputElementType==="textarea"?n(pe,m(p({},i),{style:g})):n(ue,m(p({},i),{ref:t,style:g})),e.endText&&n("div",{style:{position:"relative"},children:n(ge,{children:e.endText})})]}),e.errorMessage&&n("div",m(p({},r),{style:{color:"red",fontSize:12},children:e.errorMessage}))]})}const D=[{inputs:[{internalType:"address[]",name:"signers_",type:"address[]"},{internalType:"uint256",name:"sigsRequired_",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ExecuteFailed",type:"error"},{inputs:[],name:"InsufficientSigs",type:"error"},{inputs:[],name:"NotSigner",type:"error"},{inputs:[],name:"Signed",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"proposal",type:"uint256"}],name:"Execute",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"proposer",type:"address"},{indexed:!0,internalType:"uint256",name:"proposal",type:"uint256"}],name:"Propose",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"signer",type:"address"},{indexed:!0,internalType:"uint256",name:"proposal",type:"uint256"}],name:"Sign",type:"event"},{inputs:[{internalType:"uint256",name:"proposal",type:"uint256"}],name:"execute",outputs:[{internalType:"bool",name:"success",type:"bool"},{internalType:"bytes",name:"result",type:"bytes"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"proposalCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"proposals",outputs:[{internalType:"address",name:"target",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"payload",type:"bytes"},{internalType:"uint256",name:"sigs",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"target",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"payload",type:"bytes"}],name:"propose",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"proposal",type:"uint256"}],name:"sign",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"signed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"signer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"sigsRequired",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],o0="0x60806040523480156200001157600080fd5b506040516200106f3803806200106f8339818101604052810190620000379190620001cb565b60005b8251811015620000eb5760016002600085848151811062000084577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806001019150506200003a565b5080600081905550505062000365565b6000620001126200010c846200024e565b62000225565b905080838252602082019050828560208602820111156200013257600080fd5b60005b858110156200016657816200014b888262000170565b84526020840193506020830192505060018101905062000135565b5050509392505050565b600081519050620001818162000331565b92915050565b600082601f8301126200019957600080fd5b8151620001ab848260208601620000fb565b91505092915050565b600081519050620001c5816200034b565b92915050565b60008060408385031215620001df57600080fd5b600083015167ffffffffffffffff811115620001fa57600080fd5b620002088582860162000187565b92505060206200021b85828601620001b4565b9150509250929050565b60006200023162000244565b90506200023f8282620002bb565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026c576200026b620002f1565b5b602082029050602081019050919050565b60006200028a8262000291565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b620002c68262000320565b810181811067ffffffffffffffff82111715620002e857620002e7620002f1565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200033c816200027d565b81146200034857600080fd5b50565b6200035681620002b1565b81146200036257600080fd5b50565b610cfa80620003756000396000f3fe60806040526004361061007f5760003560e01c806393ba3f151161004e57806393ba3f151461015c578063bdaa455314610185578063d3b73159146101c2578063fe0d94c1146101ed57610086565b8063013cf08b1461008b5780630536b723146100cb5780630c0512e9146101085780632fb1b25f1461013357610086565b3661008657005b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad919061095a565b61022b565b6040516100c29493929190610abb565b60405180910390f35b3480156100d757600080fd5b506100f260048036038101906100ed91906108c5565b610303565b6040516100ff9190610b07565b60405180910390f35b34801561011457600080fd5b5061011d610323565b60405161012a9190610b52565b60405180910390f35b34801561013f57600080fd5b5061015a6004803603810190610155919061095a565b610329565b005b34801561016857600080fd5b50610183600480360381019061017e91906108ee565b6104ae565b005b34801561019157600080fd5b506101ac60048036038101906101a79190610983565b610618565b6040516101b99190610b07565b60405180910390f35b3480156101ce57600080fd5b506101d7610647565b6040516101e49190610b52565b60405180910390f35b3480156101f957600080fd5b50610214600480360381019061020f919061095a565b61064d565b604051610222929190610b22565b60405180910390f35b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201805461027a90610c24565b80601f01602080910402602001604051908101604052809291908181526020018280546102a690610c24565b80156102f35780601f106102c8576101008083540402835291602001916102f3565b820191906000526020600020905b8154815290600101906020018083116102d657829003601f168201915b5050505050908060030154905084565b60026020528060005260406000206000915054906101000a900460ff1681565b60015481565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103ac576040517fa1b035c800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6004600082815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610441576040517f1da2cec500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003600082815260200190815260200160002060030160008154809291906001019190505550803373ffffffffffffffffffffffffffffffffffffffff167f9a10b6124411386407c4a174729b856d293832181c352e98b5cb316b96cd305960405160405180910390a350565b60006001600081548092919060010191905055905060405180608001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200160008152506003600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020190805190602001906105bf9291906107ae565b5060608201518160030155905050803373ffffffffffffffffffffffffffffffffffffffff167f42681fc159c671d489c99c06f4693d03a705a21df2fbb2b84eedda79e0db4cff60405160405180910390a35050505050565b60046020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60005481565b600060606000600360008581526020019081526020016000209050600054816003015410156106a8576040517f8cf9936100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168160010154826002016040516106f99190610aa4565b60006040518083038185875af1925050503d8060008114610736576040519150601f19603f3d011682016040523d82523d6000602084013e61073b565b606091505b5080935081945050508261077b576040517fd6bed87300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b837fddb556f1d2c1ec821e910b019d3685b229db152a0ecd517ca7e24b8bd713928960405160405180910390a250915091565b8280546107ba90610c24565b90600052602060002090601f0160209004810192826107dc5760008555610823565b82601f106107f557805160ff1916838001178555610823565b82800160010185558215610823579182015b82811115610822578251825591602001919060010190610807565b5b5090506108309190610834565b5090565b5b8082111561084d576000816000905550600101610835565b5090565b60008135905061086081610c96565b92915050565b60008083601f84011261087857600080fd5b8235905067ffffffffffffffff81111561089157600080fd5b6020830191508360018202830111156108a957600080fd5b9250929050565b6000813590506108bf81610cad565b92915050565b6000602082840312156108d757600080fd5b60006108e584828501610851565b91505092915050565b6000806000806060858703121561090457600080fd5b600061091287828801610851565b9450506020610923878288016108b0565b935050604085013567ffffffffffffffff81111561094057600080fd5b61094c87828801610866565b925092505092959194509250565b60006020828403121561096c57600080fd5b600061097a848285016108b0565b91505092915050565b6000806040838503121561099657600080fd5b60006109a4858286016108b0565b92505060206109b585828601610851565b9150509250929050565b6109c881610ba9565b82525050565b6109d781610bbb565b82525050565b60006109e882610b82565b6109f28185610b8d565b9350610a02818560208601610bf1565b610a0b81610c85565b840191505092915050565b60008154610a2381610c24565b610a2d8186610b9e565b94506001821660008114610a485760018114610a5957610a8c565b60ff19831686528186019350610a8c565b610a6285610b6d565b60005b83811015610a8457815481890152600182019150602081019050610a65565b838801955050505b50505092915050565b610a9e81610be7565b82525050565b6000610ab08284610a16565b915081905092915050565b6000608082019050610ad060008301876109bf565b610add6020830186610a95565b8181036040830152610aef81856109dd565b9050610afe6060830184610a95565b95945050505050565b6000602082019050610b1c60008301846109ce565b92915050565b6000604082019050610b3760008301856109ce565b8181036020830152610b4981846109dd565b90509392505050565b6000602082019050610b676000830184610a95565b92915050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000610bb482610bc7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610c0f578082015181840152602081019050610bf4565b83811115610c1e576000848401525b50505050565b60006002820490506001821680610c3c57607f821691505b60208210811415610c5057610c4f610c56565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b610c9f81610ba9565b8114610caa57600080fd5b50565b610cb681610be7565b8114610cc157600080fd5b5056fea26469706673582212200719b60be41f2a11d9f657094737f500227dac89d48305d1ae69f5b111790e4764736f6c63430008040033",me=e=>e.length>1;class W extends C0{constructor(...t){me(t)?super(...t):super(D,o0,t[0])}deploy(t,f,o){return super.deploy(t,f,o||{})}getDeployTransaction(t,f,o){return super.getDeployTransaction(t,f,o||{})}attach(t){return super.attach(t)}connect(t){return super.connect(t)}static createInterface(){return new P0(D)}static connect(t,f){return new E0(t,D,f)}}O(W,"bytecode",o0),O(W,"abi",D);const he=l($)`
  display: block;
  margin: auto;
  margin-top: 45px;
  max-width: 80%;
`,ye=()=>{const{account:e,library:t}=v(),{contract:f}=k0(),[o,i]=s.exports.useState(),[a,r]=s.exports.useState({}),[g,u]=s.exports.useState(),[c,C]=s.exports.useState(),[w,B]=s.exports.useState();s.exports.useEffect(()=>{(async()=>{o&&(u((await o.proposalCounter()).toNumber()),C((await o.sigsRequired()).toNumber()))})()},[o,w]),s.exports.useEffect(()=>{e&&t&&f&&i(W.connect(f,t.getSigner(e)))},[e,t,f]),s.exports.useEffect(()=>{t&&t.on("block",b=>{B(b)})},[t]);const R=async()=>{if(o){const b=await o.propose(a.to,N0(a.value),a.bytecode);x.info("Awaiting TX confirmation..."),await b.wait(),x.success("Proposal created!")}};return n(h,{children:d(j,{children:[n(H,{}),n(G,{children:n(X,{children:d(he,{children:[d(Y,{style:{fontWeight:"bold",fontSize:"18px",marginBottom:"24px"},children:["Multisig at ",f]}),o&&g&&c&&n(ce,{multisig:o,proposalCounter:g,sigsRequired:c}),n(f0,{}),n(Y,{style:{fontWeight:"bold",fontSize:"18px",marginTop:"20px"},children:"Propose a new transaction"}),n("div",{style:{marginBottom:18,marginTop:24},children:n(E,{onChange:b=>r(m(p({},a),{to:b})),label:"To",placeholder:"0x34cfac646f301356faa8b21e94227e3583fe3f5f"})}),n("div",{style:{marginBottom:18,marginTop:24},children:n(E,{onChange:b=>r(m(p({},a),{value:b})),label:"Value (in ether)",placeholder:"0.420"})}),n("div",{style:{marginBottom:24,marginTop:24},children:n(E,{onChange:b=>r(m(p({},a),{bytecode:b})),label:"Data",placeholder:"0x"})}),n(T,{isDisabled:!(()=>Object.keys(a).length===3)(),onPress:()=>R(),style:{marginBottom:"16px",maxWidth:"180px"},children:"Propose"})]})})})]})})},xe=l($)`
  display: block;
  margin: auto;
  margin-top: 45px;
`,we=()=>{const e=Z(),{account:t,library:f}=v(),[o,i]=s.exports.useState([]),[a,r]=s.exports.useState(""),g=async()=>{if(f&&t){const c=await new W(f.getSigner(t)).deploy(o,a);console.log(c),x.info("Awaiting TX confirmation..."),await c.deployed(),x.success("Multisig created!"),e(`/multisig-gui/multisig/${c.address}`)}else x.error("Something went wrong")};return n(h,{children:d(j,{children:[n(H,{}),n(G,{children:n(X,{children:d(xe,{children:[n("div",{style:{marginBottom:24,marginTop:24},children:n(E,{label:"Signers (comma delimited)",placeholder:"0xd8da6bf26964af9d7eed9e03e53415d37aa96045,0x34cfac646f301356faa8b21e94227e3583fe3f5f",onChange:u=>i(u.split(","))})}),n("div",{style:{marginBottom:24},children:n(E,{label:"Signatures required",placeholder:"2",onChange:u=>r(u)})}),n(T,{style:{marginBottom:"16px",maxWidth:"180px"},isDisabled:!t||o===[]||a===""||isNaN(parseInt(a)),onPress:()=>g(),children:"Deploy"})]})})})]})})},ve=l($)`
  display: block;
  margin: auto;
  margin-top: 45px;
`,Te=l(Y)`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
`,i0=()=>{const e=Z();v();const[t,f]=s.exports.useState("");return n(h,{children:d(j,{children:[n(H,{}),n(G,{children:n(X,{children:d(ve,{children:[n(Te,{children:"Deploy a new multisig"}),n(T,{onPress:()=>{e("/multisig-gui/deploy")},style:{maxWidth:"180px",marginTop:"30px",marginBottom:"30px"},children:"Deploy"}),n(f0,{}),n("div",{style:{marginBottom:24,marginTop:24},children:n(E,{onChange:o=>f(o),label:"Or use an existing one",placeholder:"0x34cfac646f301356faa8b21e94227e3583fe3f5f"})}),n(T,{onPress:()=>e(`/multisig-gui/multisig/${t}`),style:{marginBottom:"16px",maxWidth:"180px"},children:"Use"})]})})})]})})};function Se(e){const t=new B0(e);return t.pollingInterval=12e3,t}function Ce(){return n(M0,{getLibrary:Se,children:d(A0,{theme:U0,children:[n($0,{}),d(D0,{children:[n(re,{}),d(W0,{children:[n(A,{path:"/multisig-gui/",element:n(i0,{})}),n(A,{path:"/multisig-gui/deploy",element:n(we,{})}),n(A,{path:"/multisig-gui/multisig/:contract",element:n(ye,{})}),n(A,{index:!0,element:n(i0,{})})]})]})]})})}window.global=window;window.Buffer=window.Buffer||R0.Buffer;I0.render(n(Q.StrictMode,{children:n(Ce,{})}),document.getElementById("root"));
