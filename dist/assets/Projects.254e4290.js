import{r as i,j as e,a as s}from"./index.b68e0123.js";import{u as n}from"./use-scroll.94149445.js";import{u as o}from"./use-transform.c4c3ccc7.js";import{m as r}from"./motion.aea366d8.js";import"./resolve-element.91f3f3fa.js";const R=()=>{const a=i.exports.useRef(null),l=i.exports.useRef(null),c=i.exports.useRef(null),h=i.exports.useRef(null),g=i.exports.useRef(null),t={rest:{opacity:0,ease:"easeOut",duration:.2,type:"tween"},hover:{opacity:1,transition:{duration:.2,type:"tween",ease:"easeIn",delayChildren:.1,staggerChildren:.2}}},{scrollYProgress:d}=n({target:a,offset:["0.3 1","1 1"]}),{scrollYProgress:p}=n({target:l,offset:["0.3 1","1 1"]}),{scrollYProgress:v}=n({target:c,offset:["0.3 1","1 1"]}),{scrollYProgress:m}=n({target:h,offset:["0.3 1","1 1"]}),f=o(d,[0,1],[.6,1]),u=o(d,[0,1],[.4,1]),w=o(p,[0,1],[.6,1]),y=o(p,[0,1],[.4,1]),b=o(v,[0,1],[.6,1]),k=o(v,[0,1],[.4,1]),x=o(m,[0,1],[.6,1]),P=o(m,[0,1],[.4,1]);return n({target:g,offset:["0 1","1.1 1"]}),e("div",{className:"projectsContainer",children:s("div",{className:"wrapper",children:[s(r.div,{className:"item",initial:"rest",whileHover:"hover",animate:"rest",ref:a,style:{scale:f,opacity:u},children:[e("img",{src:"/images/biblos.webp",alt:"biblos",loading:"lazy"}),e(r.div,{variants:t,className:"hover-info",children:s(r.button,{variants:t,whileTap:{scale:.9},transition:{type:"spring",duration:.2},children:["View on GitHub",e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})]})})]}),s(r.div,{style:{scale:w,opacity:y},ref:l,className:"item",initial:"rest",whileHover:"hover",animate:"rest",children:[e("img",{src:"/images/multas.webp",alt:"multas",loading:"lazy"}),e(r.div,{variants:t,className:"hover-info",children:s(r.button,{variants:t,whileTap:{scale:.9},transition:{type:"spring",duration:.2},children:["View on GitHub",e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})]})})]}),s(r.div,{className:"item",initial:"rest",whileHover:"hover",animate:"rest",style:{scale:b,opacity:k},ref:c,children:[e("img",{src:"/images/fiverrClone.webp",alt:"fiver clone",loading:"lazy"}),e(r.div,{variants:t,className:"hover-info",children:s(r.button,{variants:t,whileTap:{scale:.9},transition:{type:"spring",duration:.2},children:["View on GitHub",e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})]})})]}),s(r.div,{className:"item",initial:"rest",whileHover:"hover",animate:"rest",style:{scale:x,opacity:P},ref:h,children:[e("img",{src:"/images/energy.webp",alt:"Social",loading:"lazy"}),e(r.div,{variants:t,className:"hover-info",children:s(r.a,{variants:t,href:"https://energy-project-seven.vercel.app/",target:"_blank",whileTap:{scale:.9},transition:{type:"spring",duration:.2},children:["View",e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})]})})]})]})})};export{R as default};