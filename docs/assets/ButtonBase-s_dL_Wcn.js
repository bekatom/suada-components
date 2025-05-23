import{a as A,_ as ee}from"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import{r as a,R as W}from"./index-P7RG-sTI.js";import{c as C,a as me,u as be,s as te,g as Ie,b as Ue}from"./DefaultPropsProvider-Bw6qbxfz.js";import{j as N}from"./jsx-runtime-BMn0QxmW.js";import{a as _e,u as ue,b as H}from"./useTimeout-C7Z447pM.js";import{_ as ze}from"./assertThisInitialized-B9jnkVVz.js";import{_ as Oe,T as ce}from"./TransitionGroupContext-BzHhXwHW.js";import{k as ne}from"./emotion-react.browser.esm-uhHxmO8j.js";import{u as Ke}from"./useIsFocusVisible-iU9pYnBM.js";function oe(e,s){var r=function(t){return s&&a.isValidElement(t)?s(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function Ae(e,s){e=e||{},s=s||{};function r(d){return d in s?s[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in s?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in s){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function F(e,s,r){return r[s]!=null?r[s]:e.props[s]}function Xe(e,s){return oe(e.children,function(r){return a.cloneElement(r,{onExited:s.bind(null,r),in:!0,appear:F(r,"appear",e),enter:F(r,"enter",e),exit:F(r,"exit",e)})})}function Ye(e,s,r){var l=oe(e.children),n=Ae(s,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in s,u=t in l,p=s[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(s){return e[s]})},He={component:"div",childFactory:function(s){return s}},ie=function(e){Oe(s,e);function s(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(ze(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var r=s.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},s.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Xe(n,c):Ye(n,o,c),firstRender:!1}},r.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ce.Provider,{value:u},p):W.createElement(ce.Provider,{value:u},W.createElement(t,c,p))},s}(W.Component);ie.propTypes={};ie.defaultProps=He;function Ge(e){const{className:s,classes:r,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=C(s,r.ripple,r.rippleVisible,l&&r.ripplePulsate),E={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=C(r.child,d&&r.childLeaving,l&&r.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),N.jsx("span",{className:b,style:E,children:N.jsx("span",{className:h})})}const m=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),qe=["center","classes","className"];let G=e=>e,pe,fe,de,he;const Z=550,Je=80,Qe=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ze=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),et=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),tt=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),nt=te(Ge,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Qe,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,Ze,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,et,({theme:e})=>e.transitions.easing.easeInOut),ot=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,qe),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),E=_e(),h=a.useRef(null),R=a.useRef(null),U=a.useCallback(f=>{const{pulsate:M,rippleX:x,rippleY:S,rippleSize:I,cb:z}=f;p(y=>[...y,N.jsx(nt,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:x,rippleY:S,rippleSize:I},d.current)]),d.current+=1,g.current=z},[t]),$=a.useCallback((f={},M={},x=()=>{})=>{const{pulsate:S=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=z?null:R.current,B=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,D,L;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),D=Math.round(B.height/2);else{const{clientX:k,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(k-B.left),D=Math.round(V-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((y?y.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((y?y.clientHeight:0)-D),D)*2+2;L=Math.sqrt(k**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:S,rippleX:v,rippleY:D,rippleSize:L,cb:x})},E.start(Je,()=>{h.current&&(h.current(),h.current=null)})):U({pulsate:S,rippleX:v,rippleY:D,rippleSize:L,cb:x})},[n,U,E]),_=a.useCallback(()=>{$({},{pulsate:!0})},[$]),j=a.useCallback((f,M)=>{if(E.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,E.start(0,()=>{j(f,M)});return}h.current=null,p(x=>x.length>0?x.slice(1):x),g.current=M},[E]);return a.useImperativeHandle(r,()=>({pulsate:_,start:$,stop:j}),[_,$,j]),N.jsx(tt,A({className:C(m.root,t.root,o),ref:R},c,{children:N.jsx(ie,{component:null,exit:!0,children:u})}))});function it(e){return Ie("MuiButtonBase",e)}const st=me("MuiButtonBase",["root","disabled","focusVisible"]),rt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],at=e=>{const{disabled:s,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=Ue({root:["root",s&&"disabled",r&&"focusVisible"]},it,n);return r&&l&&(o.root+=` ${l}`),o},lt=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${st.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Mt=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:E="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:$,onFocus:_,onFocusVisible:j,onKeyDown:f,onKeyUp:M,onMouseDown:x,onMouseLeave:S,onMouseUp:I,onTouchEnd:z,onTouchMove:y,onTouchStart:B,tabIndex:v=0,TouchRippleProps:D,touchRippleRef:L,type:k}=l,V=ee(l,rt),O=a.useRef(null),T=a.useRef(null),ge=ue(T,L),{isFocusVisibleRef:se,onFocus:Re,onBlur:Me,ref:xe}=Ke(),[w,X]=a.useState(!1);p&&w&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[q,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Te=q&&!d&&!p;a.useEffect(()=>{w&&b&&!d&&q&&T.current.pulsate()},[d,b,w,q]);function P(i,ae,je=g){return H(le=>(ae&&ae(le),!je&&T.current&&T.current[i](le),!0))}const Ce=P("start",x),Ee=P("stop",U),ve=P("stop",$),Ve=P("stop",I),Pe=P("stop",i=>{w&&i.preventDefault(),S&&S(i)}),Be=P("start",B),De=P("stop",z),Le=P("stop",y),Se=P("stop",i=>{Me(i),se.current===!1&&X(!1),h&&h(i)},!1),ke=H(i=>{O.current||(O.current=i.currentTarget),Re(i),se.current===!0&&(X(!0),j&&j(i)),_&&_(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),we=H(i=>{b&&!Q.current&&w&&T.current&&i.key===" "&&(Q.current=!0,T.current.stop(i,()=>{T.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),f&&f(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),Fe=H(i=>{b&&i.key===" "&&T.current&&w&&!i.defaultPrevented&&(Q.current=!1,T.current.stop(i,()=>{T.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let Y=u;Y==="button"&&(V.href||V.to)&&(Y=E);const K={};Y==="button"?(K.type=k===void 0?"button":k,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Ne=ue(r,xe,O),re=A({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:w}),$e=at(re);return N.jsxs(lt,A({as:Y,className:C($e.root,c),ownerState:re,onBlur:Se,onClick:R,onContextMenu:Ee,onFocus:ke,onKeyDown:we,onKeyUp:Fe,onMouseDown:Ce,onMouseLeave:Pe,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:De,onTouchMove:Le,onTouchStart:Be,ref:Ne,tabIndex:p?-1:v,type:k},K,V,{children:[o,Te?N.jsx(ot,A({ref:ge,center:t},D)):null]}))});export{Mt as B,ie as T};
