import{j as i}from"./jsx-runtime-BMn0QxmW.js";import{r as x,R as g}from"./index-P7RG-sTI.js";import{d as t}from"./styled-components.browser.esm-DJTJMFhR.js";import{M as f,E as m,D as h,b as u,P as y,G as b,a as v}from"./PlayButton-C-8aCi6g.js";import{P as w}from"./Popover-CSFG0R5Q.js";import{T as c}from"./Typography-B_7tvCdw.js";t.span``;const _=t.header`
  display: flex;
  justify-content: space-between;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,D=t.h3`
  font-size: 18px;
  font-weight: 500;

  transition: color 0.3s ease;
`,j=t.span`
  color: #ea382a;
`,C=t(c)`
  color: #7a7a7a;
  opacity: 0.7;
`,d=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  transition: 0.3s ease;
  gap: 6px;
  border-radius: 5px;
  &:hover {
    /* background: ${({hoverBackground:e})=>e||"rgba(0, 0, 0, 0.1)"}; */
    ${({$hoverColor:e})=>e&&`svg path {
          fill: ${e};
           }`}
  }
  svg {
    font-size: 1rem;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;t.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  width: 100%;
  box-sizing: border-box;
  padding-right: 20px;
  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;t.div`
  margin-top: 30px;

  ${({$isGrid:e})=>e?`
      .card {
        display: grid;
        grid-template-columns: repeat(4, 1fr);


        @media (max-width: 1450px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `:`
      .card {
          grid-template-columns:none
      }
    `}
`;const P=t.div`
  width: 100%;
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
  padding: 6px;
  ${({$switched:e})=>e?`
    top: 0px;
    left: 0px;
    grid-template-columns: 1fr 35px;
  `:`
    bottom: 0px;
    right: 0px;
    justify-content: end;
    grid-template-columns: 35px 35px;
  `}
  .action_block {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`,q=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({$canOpen:e})=>e?"pointer":"default"};
  height: 100%;
  border-radius: 12px !important;
  &:hover {
    .action_block {
      background: rgba(255, 255, 255, 0.59) !important;
    }
  }
`,M=t.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgb(0 0 0 / 23%);
`;t.div`
  position: relative;
  cursor: pointer;
  .icon_button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;const N=t.div`
  color: #fff;
  height: 32px;
  padding: 4px 12px;
  text-transform: capitalize;
  border-radius: 4px;
  background: ${({$status:e})=>e?"#00905E":"#EA382A"};
  display: flex;
  align-items: center;
  justify-content: center;
`;t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-size: 13px;
  }
`;const R=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :first-child {
    font-size: 14px;
    margin-bottom: 5px;
  }
  div {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .tooltip-text {
      font-size: 12px;
      margin-top: 5px;
      text-align: center;
    }
  }
`,W=t.div`
  display: flex;
  width: 100%;
  flex-direction: column !important;
  align-self: flex-end;
  gap: 10px;
  padding-bottom: 10px;
`,J=t.div`
  display: flex;
  flex-direction: row !important;
  width: 100%;
`,O=t.span`
  display: flex;
  align-items: center;
  height: 14px;
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  color: ${({disabled:e})=>e?"#ccc":"#68707a"};
  font-size: 14px;
  padding-bottom: 10px;
  width: 100%;
  justify-content: center;
  gap: 8px;
  padding: 12px 4px;
  svg path {
    fill: ${({disabled:e})=>e?"#ccc":"#68707a"};
    width: 16px;
    height: 16px;
  }
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: ${({disabled:e,color:o="#68707a"})=>e?"#ccc":o};
    svg path {
      fill: ${({disabled:e,color:o="#68707a"})=>e?"#ccc":o};
    }
  }
`;t.span`
  color: #20a8c6;
  font-size: 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #edf8fa;
`;const V=t.div`
  text-transform: capitalize;
`,X=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`,F=t.span`
  color: #20a8c6;
  font-size: 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #edf8fa;
`,H=t.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  flex-direction: row !important;
  padding-left: 16px;

  // when card is checked
  span {
    background: ${e=>e.checked?"none":"#edf8fa"};
    color: ${e=>e.checked?"#333333":"#20a8c6"};
  }
  > div {
    font-size: 12px;
    position: relative;
    padding-left: 12px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
    }

    :not(:last-child) {
      margin-right: 10px;
    }
  }
`,L=t.div`
  width: 100%;
`;t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
  transition: 0.3s ease;
  border-radius: 5px;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  svg {
    font-size: 1rem;
    margin-right: 6px;
    width: 20px;
    height: 20px;
  }
  svg path {
    width: 20px;
    height: 20px;
    fill: #717882;
  }
  /* .MuiTypography-body1 {
    font-size: 0.875rem;
  } */
`;t.div`
  box-sizing: border-box;
  padding: 0 20px 0 0;
  text-transform: capitalize;
`;const K=t.section`
  position: relative;
  z-index: 100;
  font-size: 16px;
  color: #333;
  padding: 16px;
`,Q=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;t.div`
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
  margin-top: 20px;
  padding: 16px;

  th:last-child {
    width: 10px;
  }
`;t.div`
  justify-content: flex-end;
  display: flex;
  margin-right: 40px;
  margin-left: 16px;
  margin-bottom: 16px;
  margin-top: 20px;
`;const U=t.figure`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    transition: transform 0.3s ease;
  }
`,Y=t.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;

  &:hover {
    img {
      transform: scale(1.2);
    }

    h3 {
      color: #06c68f;
    }
  }

  ${({$isFromUser:e})=>e&&`
  figure {
    position: relative;
    &:after {
      content: 'View Analytics';
      position: absolute;
      top: 0;
      opacity: 0;
      color: #06c68f;
      left: 0;
      font-size: 24px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      width: 100%;
      height: 100%;
      transition: opacity 0.3s ease;
      z-index: 10;
    }
  }

  &:hover {
    figure {
      &:after {
        opacity: 1;
      }
    }
  }
  `||""}
`,k=t.div``,z=t.div`
  padding: 5px;
`,I=t.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: transparent !important;
  }
`;t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  transition: 0.3s ease;
  gap: 6px;
  border-radius: 5px;
  &:hover {
    /* background: ${({hoverBackground:e})=>e||"rgba(0, 0, 0, 0.1)"}; */
    ${({$hoverColor:e})=>e&&`svg path {
          fill: ${e};
           }`}
  }
  svg {
    font-size: 1rem;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;const T=e=>{var s;const[o,r]=x.useState(null),n=a=>{r(a.currentTarget)};return i.jsx("div",{children:e.actionConfig&&e.actionConfig.length>0&&i.jsxs(k,{onClick:a=>a.stopPropagation(),children:[i.jsx("div",{onClick:n,children:e.button??i.jsx(I,{className:"more",children:e.icon??i.jsx(f,{})})}),i.jsx(w,{open:!!o,anchorEl:o,onClose:()=>{r(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:i.jsx(z,{children:(s=e==null?void 0:e.actionConfig)==null?void 0:s.map((a,p)=>i.jsx("div",{onClick:()=>r(null),children:a.render(e.row)},p))})})]})})};T.__docgenInfo={description:"",methods:[],displayName:"GridActionMenu",props:{actionConfig:{required:!1,tsType:{name:"Array",elements:[{name:"IAction"}],raw:"IAction[]"},description:""},row:{required:!1,tsType:{name:"any"},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},button:{required:!1,tsType:{name:"JSX.Element"},description:""}}};const l=(e,o,r)=>({TypographyComponent:e?c:C,IconComponent:e?o:r}),Z=(e,o,r)=>[{render:n=>n.isBought?i.jsx(g.Fragment,{}):i.jsxs(d,{className:"edit",onClick:()=>e("editCourse",n),children:[i.jsx(m,{}),i.jsx(c,{children:r("actions.edit")})]})},{render:()=>{const{TypographyComponent:n,IconComponent:s}=l(!1,v,b);return i.jsxs(d,{children:[i.jsx(s,{}),i.jsx(n,{children:r("actions.download_syllabus")})]})}},{render:n=>{const{TypographyComponent:s,IconComponent:a}=l(!!n.video,y,u);return i.jsxs(d,{onClick:()=>e("playIntro",n),disabled:!n.video,children:[i.jsx(a,{}),i.jsx(s,{children:r("actions.play_intro")})]})}},{hide:!o.deleteCourse,render:n=>i.jsxs(d,{className:"delete",onClick:()=>e("deleteCourse",n.id),children:[i.jsx(h,{}),i.jsx(j,{children:r("actions.delete")})]})}];export{k as C,T as G,V as I,q as S,R as T,Z as a,M as b,P as c,N as d,Y as e,U as f,K as g,Q as h,_ as i,D as j,X as k,W as l,H as m,F as n,J as o,O as p,L as q};
