import{r as e,j as r}from"./index.b68e0123.js";import{u as a}from"./use-scroll.94149445.js";import{u as l}from"./use-transform.c4c3ccc7.js";import{m as t}from"./motion.aea366d8.js";import"./resolve-element.91f3f3fa.js";const w=()=>{const n={initial:{y:0,opacity:0},animate:{y:10,opacity:1,transition:{duration:1.5,repeat:1/0}}},o=e.exports.useRef(null),{scrollYProgress:s}=a({target:o,offset:["start end","end start"]}),i=l(s,[0,1],["0%","150%"]);return r(t.div,{className:"downArrow",ref:o,style:{y:i},children:r(t.span,{variants:n,initial:"initial",animate:"animate",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"})})})})};export{w as default};