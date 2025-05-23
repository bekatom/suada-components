import{_ as N,a}from"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import{r as U}from"./index-P7RG-sTI.js";import{g as w,a as z,u as E,s as v,c as I,b as F}from"./DefaultPropsProvider-Bw6qbxfz.js";import{j as g}from"./jsx-runtime-BMn0QxmW.js";import{c as n}from"./capitalize-DkmCX2yr.js";import{c as D,k as _}from"./emotion-react.browser.esm-uhHxmO8j.js";function K(r){return w("MuiCircularProgress",r)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,b,S,$;const t=44,B=_(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=_(b||(b=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=r=>{const{classes:e,variant:s,color:o,disableShrink:m}=r,d={root:["root",s,`color${n(o)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,m&&"circleDisableShrink"]};return F(d,K,e)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${n(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(S||(S=l`
      animation: ${0} 1.4s linear infinite;
    `),B)),Z=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),q=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${n(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),X=U.forwardRef(function(e,s){const o=E({props:e,name:"MuiCircularProgress"}),{className:m,color:d="primary",disableShrink:M=!1,size:u=40,style:R,thickness:i=3.6,value:p=0,variant:k="indeterminate"}=o,j=N(o,W),c=a({},o,{color:d,disableShrink:M,size:u,thickness:i,value:p,variant:k}),f=L(c),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(p),h.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(V,a({className:I(f.root,m),style:a({width:u,height:u},x,R),ownerState:c,ref:s,role:"progressbar"},y,j,{children:g.jsx(Z,{className:f.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(q,{className:f.circle,style:h,ownerState:c,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});export{X as C};
