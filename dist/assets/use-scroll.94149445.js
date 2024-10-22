import{r as m}from"./index.b68e0123.js";import{u as A,a as g,M,p as P,v as C,i as T,d as k,f as v,c as I,b as R,e as N,w as V}from"./motion.aea366d8.js";import{r as X}from"./resolve-element.91f3f3fa.js";function he(e){const t=A(()=>g(e)),{isStatic:o}=m.exports.useContext(M);if(o){const[,s]=m.exports.useState(e);m.exports.useEffect(()=>t.on("change",s),[])}return t}const w=new WeakMap;let d;function Y(e,t){if(t){const{inlineSize:o,blockSize:s}=t[0];return{width:o,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function D({target:e,contentRect:t,borderBoxSize:o}){var s;(s=w.get(e))===null||s===void 0||s.forEach(n=>{n({target:e,contentSize:t,get size(){return Y(e,o)}})})}function G(e){e.forEach(D)}function F(){typeof ResizeObserver>"u"||(d=new ResizeObserver(G))}function _(e,t){d||F();const o=X(e);return o.forEach(s=>{let n=w.get(s);n||(n=new Set,w.set(s,n)),n.add(t),d==null||d.observe(s)}),()=>{o.forEach(s=>{const n=w.get(s);n==null||n.delete(t),n!=null&&n.size||d==null||d.unobserve(s)})}}const y=new Set;let p;function J(){p=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};y.forEach(o=>o(t))},window.addEventListener("resize",p)}function $(e){return y.add(e),p||J(),()=>{y.delete(e),!y.size&&p&&(p=void 0)}}function j(e,t){return typeof e=="function"?$(e):_(e,t)}const q=50,S=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),K=()=>({time:0,x:S(),y:S()}),Q={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function H(e,t,o,s){const n=o[t],{length:r,position:i}=Q[t],l=n.current,u=o.time;n.current=e["scroll"+i],n.scrollLength=e["scroll"+r]-e["client"+r],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=P(0,n.scrollLength,n.current);const f=s-u;n.velocity=f>q?0:C(n.current-l,f)}function U(e,t,o){H(e,"x",t,o),H(e,"y",t,o),t.time=o}function Z(e,t){const o={x:0,y:0};let s=e;for(;s&&s!==t;)if(s instanceof HTMLElement)o.x+=s.offsetLeft,o.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const n=s.getBoundingClientRect();s=s.parentElement;const r=s.getBoundingClientRect();o.x+=n.left-r.left,o.y+=n.top-r.top}else if(s instanceof SVGGraphicsElement){const{x:n,y:r}=s.getBBox();o.x+=n,o.y+=r;let i=null,l=s.parentNode;for(;!i;)l.tagName==="svg"&&(i=l),l=s.parentNode;s=i}else break;return o}const ee={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},L={start:0,center:.5,end:1};function W(e,t,o=0){let s=0;if(L[e]!==void 0&&(e=L[e]),typeof e=="string"){const n=parseFloat(e);e.endsWith("px")?s=n:e.endsWith("%")?e=n/100:e.endsWith("vw")?s=n/100*document.documentElement.clientWidth:e.endsWith("vh")?s=n/100*document.documentElement.clientHeight:e=n}return typeof e=="number"&&(s=t*e),o+s}const te=[0,0];function se(e,t,o,s){let n=Array.isArray(e)?e:te,r=0,i=0;return typeof e=="number"?n=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?n=e.split(" "):n=[e,L[e]?e:"0"]),r=W(n[0],o,s),i=W(n[1],t),r-i}const ne={x:0,y:0};function oe(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function re(e,t,o){let{offset:s=ee.All}=o;const{target:n=e,axis:r="y"}=o,i=r==="y"?"height":"width",l=n!==e?Z(n,e):ne,u=n===e?{width:e.scrollWidth,height:e.scrollHeight}:oe(n),f={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let a=!t[r].interpolate;const E=s.length;for(let c=0;c<E;c++){const z=se(s[c],f[i],u[i],l[r]);!a&&z!==t[r].interpolatorOffsets[c]&&(a=!0),t[r].offset[c]=z}a&&(t[r].interpolate=T(t[r].offset,k(s)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}function ie(e,t=e,o){if(o.x.targetOffset=0,o.y.targetOffset=0,t!==e){let s=t;for(;s&&s!==e;)o.x.targetOffset+=s.offsetLeft,o.y.targetOffset+=s.offsetTop,s=s.offsetParent}o.x.targetLength=t===e?t.scrollWidth:t.clientWidth,o.y.targetLength=t===e?t.scrollHeight:t.clientHeight,o.x.containerLength=e.clientWidth,o.y.containerLength=e.clientHeight}function le(e,t,o,s={}){return{measure:()=>ie(e,s.target,o),update:n=>{U(e,o,n),(s.offset||s.target)&&re(e,o,s)},notify:()=>t(o)}}const h=new WeakMap,O=new WeakMap,x=new WeakMap,B=e=>e===document.documentElement?window:e;function ce(e,{container:t=document.documentElement,...o}={}){let s=x.get(t);s||(s=new Set,x.set(t,s));const n=K(),r=le(t,e,n,o);if(s.add(r),!h.has(t)){const l=()=>{for(const c of s)c.measure()},u=()=>{for(const c of s)c.update(R.timestamp)},f=()=>{for(const c of s)c.notify()},a=()=>{v.read(l,!1,!0),v.read(u,!1,!0),v.update(f,!1,!0)};h.set(t,a);const E=B(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&O.set(t,j(t,a)),E.addEventListener("scroll",a,{passive:!0})}const i=h.get(t);return v.read(i,!1,!0),()=>{var l;I(i);const u=x.get(t);if(!u||(u.delete(r),u.size))return;const f=h.get(t);h.delete(t),f&&(B(t).removeEventListener("scroll",f),(l=O.get(t))===null||l===void 0||l(),window.removeEventListener("resize",f))}}function b(e,t){V(Boolean(!t||t.current))}const fe=()=>({scrollX:g(0),scrollY:g(0),scrollXProgress:g(0),scrollYProgress:g(0)});function ge({container:e,target:t,layoutEffect:o=!0,...s}={}){const n=A(fe);return(o?N:m.exports.useEffect)(()=>(b("target",t),b("container",e),ce(({x:i,y:l})=>{n.scrollX.set(i.current),n.scrollXProgress.set(i.progress),n.scrollY.set(l.current),n.scrollYProgress.set(l.progress)},{...s,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(s.offset)]),n}export{he as a,ge as u};