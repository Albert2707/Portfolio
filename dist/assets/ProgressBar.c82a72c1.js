import{r as n,j as u}from"./index.11d7c5b9.js";import{a as f,u as g}from"./use-scroll.1af2fd65.js";import{M as d,j as l,k as x,b as m,l as y,e as S,m as M}from"./motion.f9526850.js";import"./resolve-element.29539612.js";function P(t,s={}){const{isStatic:p}=n.exports.useContext(d),r=n.exports.useRef(null),e=f(l(t)?t.get():t),a=()=>{r.current&&r.current.stop()};return n.exports.useInsertionEffect(()=>e.attach((o,i)=>{if(p)return i(o);if(a(),r.current=x({keyframes:[e.get(),o],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:i}),!m.isProcessing){const c=performance.now()-m.timestamp;c<30&&(r.current.time=y(c))}return e.get()},a),[JSON.stringify(s)]),S(()=>{if(l(t))return t.on("change",o=>e.set(parseFloat(o)))},[e]),e}const C=()=>{const{scrollYProgress:t}=g(),s=P(t,{stiffness:150,damping:50,restDelta:.001});return u(M.div,{style:{scaleX:s},className:"progress"})};export{C as default};
