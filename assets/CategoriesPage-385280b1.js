import{u as c,U as l,j as e,O as o,D as d,L as m}from"./index-55f2c36b.js";const x=()=>{const s=async()=>l("/api/v1/categories"),{data:t,isLoading:a}=c("categories",s);return[t,a]},u=()=>{var a,r;const[s,t]=x();return document.title="Categories",e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(d,{})}),t?e.jsx(m,{}):e.jsx("div",{className:"container-fluid p-5 my-2",children:e.jsx("div",{className:"row",children:(r=(a=s==null?void 0:s.data)==null?void 0:a.data)==null?void 0:r.map((i,n)=>e.jsx("div",{className:"col-md-3 col-lg-2",children:e.jsxs("div",{className:"text-center",children:[e.jsx("img",{src:i.image,alt:i.name,style:{cursor:"default"},className:"w-100",height:350}),e.jsx("p",{className:"my-2 text-main",children:i.name})]})},n))})})]})};export{u as default};
