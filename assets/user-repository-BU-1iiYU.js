import{c as r,j as s,B as l}from"./index-D69FPv1E.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],n=r("GitFork",i);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],o=r("SquareTerminal",t);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],m=r("Star",x),h=({data:e,onClone:c})=>s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-6 gap-4 text-sm py-2 max-w-full","data-testid":"user-repository",children:[s.jsx("div",{className:"line-clamp-1 col-span-3 max-h-5 self-center text-primary hover:underline",children:s.jsx("a",{href:e==null?void 0:e.html_url,target:"_blank",children:e==null?void 0:e.name})}),s.jsxs("div",{className:"flex items-center gap-4 md:justify-end col-span-3",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx(n,{className:"w-4 h-4"}),s.jsx("span",{"data-testid":"forks-count",children:e==null?void 0:e.forks_count})]}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx(m,{className:"w-4 h-4"}),s.jsx("span",{"data-testid":"stars-count",children:e==null?void 0:e.stargazers_count})]}),s.jsx("div",{className:"flex-auto md:flex-none text-right",children:s.jsxs(l,{variant:"secondary",onClick:()=>c==null?void 0:c((e==null?void 0:e.clone_url)||""),children:[s.jsx(o,{className:"w-3 h-3"}),s.jsx("span",{className:"text-xs",children:"Clone"})]})})]})]});export{h as UserRepository,h as default};
