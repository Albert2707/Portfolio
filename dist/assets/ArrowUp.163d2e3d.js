import{r as s,j as o}from"./index.5b5d5580.js";import{u as a}from"./use-scroll.bc144ba0.js";import{u as c}from"./use-transform.634cc8eb.js";import{m as t}from"./motion.83c89bb0.js";import"./resolve-element.8d469026.js";const w=()=>{const e=s.exports.useCallback(()=>{window.scrollTo(0,0)},[]),r=s.exports.useRef(null),{scrollYProgress:n}=a({target:r,offset:["100% 100%","0% 0%"]}),l=c(n,[0,1],["200%","0%"]);return o(t.button,{"aria-label":"Scroll to top",className:"downUp",ref:r,style:{y:l},onClick:e,children:o(t.span,{children:o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"})})})})};export{w as default};
