import{a as r,j as e,r as n}from"./index.11d7c5b9.js";import{m as s}from"./motion.f9526850.js";const i={open:{transition:{staggerChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},o={open:{y:0,opacity:1},closed:{y:50,opacity:0}},c=()=>{const a=["aboutMe","projects","skills","contact"];return r(s.div,{className:"links",variants:i,children:[a.map(t=>e(s.a,{href:`#${t}`,variants:o,whileHover:{scale:1.1},whileTap:{scale:.95},children:t},t)),e(s.a,{href:"/resume/Resume.pdf",download:!0,className:"resumeMobile",variants:o,whileHover:{scale:1.1},whileTap:{scale:.95},children:"Resume"})]})},l=({setOpen:a})=>e("button",{onClick:()=>a(t=>!t),children:r("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[e(s.path,{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),e(s.path,{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}}}),e(s.path,{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})}),p={open:{clipPath:"circle(1200px at 50px 50px)",transition:{type:"spring",stiffness:20}},closed:{clipPath:"circle(30px at 50px 50px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},u=()=>{const[a,t]=n.exports.useState(!1);return r(s.div,{className:"sidebar",animate:a?"open":"closed",children:[e(s.div,{className:"bg",variants:p,children:e(c,{})}),e(l,{setOpen:t})]})};export{u as default};
