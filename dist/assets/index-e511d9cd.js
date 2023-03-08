function _v(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ti={},yv={get exports(){return Ti},set exports(t){Ti=t}},Wo={},I={},wv={get exports(){return I},set exports(t){I=t}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),Ev=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),Cv=Symbol.for("react.strict_mode"),Iv=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),Rv=Symbol.for("react.suspense"),Pv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),md=Symbol.iterator;function xv(t){return t===null||typeof t!="object"?null:(t=md&&t[md]||t["@@iterator"],typeof t=="function"?t:null)}var Bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jf=Object.assign,Wf={};function zr(t,e,n){this.props=t,this.context=e,this.refs=Wf,this.updater=n||Bf}zr.prototype.isReactComponent={};zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hf(){}Hf.prototype=zr.prototype;function Du(t,e,n){this.props=t,this.context=e,this.refs=Wf,this.updater=n||Bf}var Ou=Du.prototype=new Hf;Ou.constructor=Du;jf(Ou,zr.prototype);Ou.isPureReactComponent=!0;var gd=Array.isArray,$f=Object.prototype.hasOwnProperty,bu={current:null},Vf={key:!0,ref:!0,__self:!0,__source:!0};function qf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$f.call(e,r)&&!Vf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:t,key:s,ref:o,props:i,_owner:bu.current}}function Dv(t,e){return{$$typeof:Xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xi}function Ov(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _d=/\/+/g;function Il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ov(""+t.key):e.toString(36)}function Ms(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xi:case Ev:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Il(o,0):r,gd(i)?(n="",t!=null&&(n=t.replace(_d,"$&/")+"/"),Ms(i,e,n,"",function(u){return u})):i!=null&&(Mu(i)&&(i=Dv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_d,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Il(s,l);o+=Ms(s,e,n,a,i)}else if(a=xv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Il(s,l++),o+=Ms(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ms(t,e,n){if(t==null)return t;var r=[],i=0;return Ms(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},Ls={transition:null},Mv={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:bu};F.Children={map:ms,forEach:function(t,e,n){ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ms(t,function(){e++}),e},toArray:function(t){return ms(t,function(e){return e})||[]},only:function(t){if(!Mu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=zr;F.Fragment=Sv;F.Profiler=Iv;F.PureComponent=Du;F.StrictMode=Cv;F.Suspense=Rv;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)$f.call(e,a)&&!Vf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xi,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:Tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kv,_context:t},t.Consumer=t};F.createElement=qf;F.createFactory=function(t){var e=qf.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:Nv,render:t}};F.isValidElement=Mu;F.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:bv}};F.memo=function(t,e){return{$$typeof:Pv,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=Ls.transition;Ls.transition={};try{t()}finally{Ls.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return Pe.current.useCallback(t,e)};F.useContext=function(t){return Pe.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};F.useEffect=function(t,e){return Pe.current.useEffect(t,e)};F.useId=function(){return Pe.current.useId()};F.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return Pe.current.useMemo(t,e)};F.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};F.useRef=function(t){return Pe.current.useRef(t)};F.useState=function(t){return Pe.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return Pe.current.useTransition()};F.version="18.2.0";(function(t){t.exports=F})(wv);const Nt=vv(I),ha=_v({__proto__:null,default:Nt},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=I,Fv=Symbol.for("react.element"),Uv=Symbol.for("react.fragment"),zv=Object.prototype.hasOwnProperty,Bv=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jv={key:!0,ref:!0,__self:!0,__source:!0};function Gf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zv.call(e,r)&&!jv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Fv,type:t,key:s,ref:o,props:i,_owner:Bv.current}}Wo.Fragment=Uv;Wo.jsx=Gf;Wo.jsxs=Gf;(function(t){t.exports=Wo})(yv);const Ho=Ti.Fragment,p=Ti.jsx,S=Ti.jsxs;/**
 * @remix-run/router v1.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ni(){return Ni=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ni.apply(this,arguments)}var Xt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xt||(Xt={}));const vd="popstate";function Wv(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return fa("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xs(i)}return Vv(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $v(){return Math.random().toString(36).substr(2,8)}function yd(t,e){return{usr:t.state,key:t.key,idx:e}}function fa(t,e,n,r){return n===void 0&&(n=null),Ni({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Br(e):e,{state:n,key:e&&e.key||r||$v()})}function Xs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Br(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Vv(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Xt.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(Ni({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){let T=Xt.Pop,m=d();if(m!=null){let f=m-u;l=T,u=m,a&&a({action:l,location:y.location,delta:f})}else Hv(!1,"You are trying to block a POP navigation to a location that was not created by @remix-run/router. The block will fail silently in production, but in general you should do all navigation with the router (instead of using window.history.pushState directly) to avoid this situation.")}function h(T,m){l=Xt.Push;let f=fa(y.location,T,m);n&&n(f,T),u=d()+1;let g=yd(f,u),w=y.createHref(f);try{o.pushState(g,"",w)}catch{i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function _(T,m){l=Xt.Replace;let f=fa(y.location,T,m);n&&n(f,T),u=d();let g=yd(f,u),w=y.createHref(f);o.replaceState(g,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function v(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:Xs(T);return ue(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return l},get location(){return t(i,o)},listen(T){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(vd,c),a=T,()=>{i.removeEventListener(vd,c),a=null}},createHref(T){return e(i,T)},createURL:v,encodeLocation(T){let m=v(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:_,go(T){return o.go(T)}};return y}var wd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wd||(wd={}));function qv(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Br(e):e,i=Yf(r.pathname||"/",n);if(i==null)return null;let s=Kf(t);Gv(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=ny(s[l],sy(i));return o}function Kf(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(ue(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=en([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kf(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ey(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Qf(s.path))i(s,o,a)}),e}function Qf(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Qf(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Gv(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ty(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kv=/^:\w+$/,Qv=3,Yv=2,Xv=1,Jv=10,Zv=-2,Ed=t=>t==="*";function ey(t,e){let n=t.split("/"),r=n.length;return n.some(Ed)&&(r+=Zv),e&&(r+=Yv),n.filter(i=>!Ed(i)).reduce((i,s)=>i+(Kv.test(s)?Qv:s===""?Xv:Jv),r)}function ty(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ny(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=ry({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:en([i,d.pathname]),pathnameBase:uy(en([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=en([i,d.pathnameBase]))}return s}function ry(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let h=l[c]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=oy(l[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function iy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Lu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sy(t){try{return decodeURI(t)}catch(e){return Lu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function oy(t,e){try{return decodeURIComponent(t)}catch(n){return Lu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Yf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Lu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ly(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Br(t):t;return{pathname:n?n.startsWith("/")?n:ay(n,e):e,search:cy(r),hash:dy(i)}}function ay(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Br(t):(i=Ni({},t),ue(!i.pathname||!i.pathname.includes("?"),kl("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),kl("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),kl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let c=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=ly(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const en=t=>t.join("/").replace(/\/\/+/g,"/"),uy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class hy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function fy(t){return t instanceof hy}const py=["post","put","patch","delete"];[...py];/**
 * React Router v6.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}function my(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const gy=typeof Object.is=="function"?Object.is:my,{useState:_y,useEffect:vy,useLayoutEffect:yy,useDebugValue:wy}=ha;function Ey(t,e,n){const r=e(),[{inst:i},s]=_y({inst:{value:r,getSnapshot:e}});return yy(()=>{i.value=r,i.getSnapshot=e,Tl(i)&&s({inst:i})},[t,r,e]),vy(()=>(Tl(i)&&s({inst:i}),t(()=>{Tl(i)&&s({inst:i})})),[t]),wy(r),r}function Tl(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!gy(n,r)}catch{return!0}}function Sy(t,e,n){return e()}const Cy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Iy=!Cy,ky=Iy?Sy:Ey;"useSyncExternalStore"in ha&&(t=>t.useSyncExternalStore)(ha);const Zf=I.createContext(null),Fu=I.createContext(null),Ji=I.createContext(null),$o=I.createContext(null),Yn=I.createContext({outlet:null,matches:[]}),ep=I.createContext(null);function Ty(t,e){let{relative:n}=e===void 0?{}:e;Zi()||ue(!1);let{basename:r,navigator:i}=I.useContext(Ji),{hash:s,pathname:o,search:l}=Uu(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:en([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Zi(){return I.useContext($o)!=null}function jr(){return Zi()||ue(!1),I.useContext($o).location}function tp(){Zi()||ue(!1);let{basename:t,navigator:e}=I.useContext(Ji),{matches:n}=I.useContext(Yn),{pathname:r}=jr(),i=JSON.stringify(Xf(n).map(l=>l.pathnameBase)),s=I.useRef(!1);return I.useEffect(()=>{s.current=!0}),I.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=Jf(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:en([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}const Ny=I.createContext(null);function Ry(t){let e=I.useContext(Yn).outlet;return e&&I.createElement(Ny.Provider,{value:t},e)}function Uu(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(Yn),{pathname:i}=jr(),s=JSON.stringify(Xf(r).map(o=>o.pathnameBase));return I.useMemo(()=>Jf(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Py(t,e){Zi()||ue(!1);let{navigator:n}=I.useContext(Ji),r=I.useContext(Fu),{matches:i}=I.useContext(Yn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=jr(),u;if(e){var d;let y=typeof e=="string"?Br(e):e;l==="/"||(d=y.pathname)!=null&&d.startsWith(l)||ue(!1),u=y}else u=a;let c=u.pathname||"/",h=l==="/"?c:c.slice(l.length)||"/",_=qv(t,{pathname:h}),v=Oy(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:en([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:en([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&v?I.createElement($o.Provider,{value:{location:pa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xt.Pop}},v):v}function Ay(){let t=Fy(),e=fy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unhandled Thrown Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:s},"errorElement")," props on ",I.createElement("code",{style:s},"<Route>")))}class xy extends I.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(Yn.Provider,{value:this.props.routeContext},I.createElement(ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dy(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Zf);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Yn.Provider,{value:e},r)}function Oy(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ue(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||I.createElement(Ay,null):null,d=e.concat(r.slice(0,l+1)),c=()=>I.createElement(Dy,{match:o,routeContext:{outlet:s,matches:d}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?I.createElement(xy,{location:n.location,component:u,error:a,children:c(),routeContext:{outlet:null,matches:d}}):c()},null)}var Sd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Sd||(Sd={}));var Js;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Js||(Js={}));function by(t){let e=I.useContext(Fu);return e||ue(!1),e}function My(t){let e=I.useContext(Yn);return e||ue(!1),e}function Ly(t){let e=My(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function Fy(){var t;let e=I.useContext(ep),n=by(Js.UseRouteError),r=Ly(Js.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Uy(t){return Ry(t.context)}function nt(t){ue(!1)}function zy(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:s,static:o=!1}=t;Zi()&&ue(!1);let l=e.replace(/^\/*/,"/"),a=I.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Br(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:_="default"}=r,v=I.useMemo(()=>{let y=Yf(u,l);return y==null?null:{pathname:y,search:d,hash:c,state:h,key:_}},[l,u,d,c,h,_]);return v==null?null:I.createElement(Ji.Provider,{value:a},I.createElement($o.Provider,{children:n,value:{location:v,navigationType:i}}))}function By(t){let{children:e,location:n}=t,r=I.useContext(Zf),i=r&&!e?r.router.routes:ma(e);return Py(i,n)}var Cd;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Cd||(Cd={}));new Promise(()=>{});function ma(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,ma(r.props.children,e));return}r.type!==nt&&ue(!1),!r.props.index||!r.props.children||ue(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=ma(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zs(){return Zs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zs.apply(this,arguments)}function np(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Wy(t,e){return t.button===0&&(!e||e==="_self")&&!jy(t)}const Hy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],$y=["aria-current","caseSensitive","className","end","style","to","children"];function Vy(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=Wv({window:r,v5Compat:!0}));let s=i.current,[o,l]=I.useState({action:s.action,location:s.location});return I.useLayoutEffect(()=>s.listen(l),[s]),I.createElement(zy,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Wt=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d}=e,c=np(e,Hy),h=Ty(u,{relative:i}),_=qy(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i});function v(y){r&&r(y),y.defaultPrevented||_(y)}return I.createElement("a",Zs({},c,{href:h,onClick:s?r:v,ref:n,target:a}))}),$e=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,children:u}=e,d=np(e,$y),c=Uu(a,{relative:d.relative}),h=jr(),_=I.useContext(Fu),{navigator:v}=I.useContext(Ji),y=v.encodeLocation?v.encodeLocation(c).pathname:c.pathname,T=h.pathname,m=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(T=T.toLowerCase(),m=m?m.toLowerCase():null,y=y.toLowerCase());let f=T===y||!o&&T.startsWith(y)&&T.charAt(y.length)==="/",g=m!=null&&(m===y||!o&&m.startsWith(y)&&m.charAt(y.length)==="/"),w=f?r:void 0,k;typeof s=="function"?k=s({isActive:f,isPending:g}):k=[s,f?"active":null,g?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:f,isPending:g}):l;return I.createElement(Wt,Zs({},d,{"aria-current":w,className:k,ref:n,style:P,to:a}),typeof u=="function"?u({isActive:f,isPending:g}):u)});var Id;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Id||(Id={}));var kd;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kd||(kd={}));function qy(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=tp(),a=jr(),u=Uu(t,{relative:o});return I.useCallback(d=>{if(Wy(d,n)){d.preventDefault();let c=r!==void 0?r:Xs(a)===Xs(u);l(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}var ga={},_a={},Gy={get exports(){return _a},set exports(t){_a=t}},We={},va={},Ky={get exports(){return va},set exports(t){va=t}},rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,O){var b=R.length;R.push(O);e:for(;0<b;){var re=b-1>>>1,ce=R[re];if(0<i(ce,O))R[re]=O,R[b]=ce,b=re;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var O=R[0],b=R.pop();if(b!==O){R[0]=b;e:for(var re=0,ce=R.length,fs=ce>>>1;re<fs;){var Cn=2*(re+1)-1,Cl=R[Cn],In=Cn+1,ps=R[In];if(0>i(Cl,b))In<ce&&0>i(ps,Cl)?(R[re]=ps,R[In]=b,re=In):(R[re]=Cl,R[Cn]=b,re=Cn);else if(In<ce&&0>i(ps,b))R[re]=ps,R[In]=b,re=In;else break e}}return O}function i(R,O){var b=R.sortIndex-O.sortIndex;return b!==0?b:R.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,_=!1,v=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=R)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function w(R){if(y=!1,g(R),!v)if(n(a)!==null)v=!0,El(k);else{var O=n(u);O!==null&&Sl(w,O.startTime-R)}}function k(R,O){v=!1,y&&(y=!1,m(x),x=-1),_=!0;var b=h;try{for(g(O),c=n(a);c!==null&&(!(c.expirationTime>O)||R&&!et());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var ce=re(c.expirationTime<=O);O=t.unstable_now(),typeof ce=="function"?c.callback=ce:c===n(a)&&r(a),g(O)}else r(a);c=n(a)}if(c!==null)var fs=!0;else{var Cn=n(u);Cn!==null&&Sl(w,Cn.startTime-O),fs=!1}return fs}finally{c=null,h=b,_=!1}}var P=!1,A=null,x=-1,q=5,M=-1;function et(){return!(t.unstable_now()-M<q)}function Qr(){if(A!==null){var R=t.unstable_now();M=R;var O=!0;try{O=A(!0,R)}finally{O?Yr():(P=!1,A=null)}}else P=!1}var Yr;if(typeof f=="function")Yr=function(){f(Qr)};else if(typeof MessageChannel<"u"){var pd=new MessageChannel,gv=pd.port2;pd.port1.onmessage=Qr,Yr=function(){gv.postMessage(null)}}else Yr=function(){T(Qr,0)};function El(R){A=R,P||(P=!0,Yr())}function Sl(R,O){x=T(function(){R(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,El(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var b=h;h=O;try{return R()}finally{h=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,O){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var b=h;h=R;try{return O()}finally{h=b}},t.unstable_scheduleCallback=function(R,O,b){var re=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?re+b:re):b=re,R){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=b+ce,R={id:d++,callback:O,priorityLevel:R,startTime:b,expirationTime:ce,sortIndex:-1},b>re?(R.sortIndex=b,e(u,R),n(a)===null&&R===n(u)&&(y?(m(x),x=-1):y=!0,Sl(w,b-re))):(R.sortIndex=ce,e(a,R),v||_||(v=!0,El(k))),R},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(R){var O=h;return function(){var b=h;h=O;try{return R.apply(this,arguments)}finally{h=b}}}})(rp);(function(t){t.exports=rp})(Ky);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip=I,je=va;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sp=new Set,Ri={};function Xn(t,e){Rr(t,e),Rr(t+"Capture",e)}function Rr(t,e){for(Ri[t]=e,t=0;t<e.length;t++)sp.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ya=Object.prototype.hasOwnProperty,Qy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Td={},Nd={};function Yy(t){return ya.call(Nd,t)?!0:ya.call(Td,t)?!1:Qy.test(t)?Nd[t]=!0:(Td[t]=!0,!1)}function Xy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jy(t,e,n,r){if(e===null||typeof e>"u"||Xy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var zu=/[\-:]([a-z])/g;function Bu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zu,Bu);ye[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zu,Bu);ye[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zu,Bu);ye[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function ju(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jy(e,n,i,r)&&(n=null),r||i===null?Yy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gs=Symbol.for("react.element"),rr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),wa=Symbol.for("react.profiler"),op=Symbol.for("react.provider"),lp=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Sa=Symbol.for("react.suspense_list"),$u=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),ap=Symbol.for("react.offscreen"),Rd=Symbol.iterator;function Xr(t){return t===null||typeof t!="object"?null:(t=Rd&&t[Rd]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,Nl;function ui(t){if(Nl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nl=e&&e[1]||""}return`
`+Nl+t}var Rl=!1;function Pl(t,e){if(!t||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ui(t):""}function Zy(t){switch(t.tag){case 5:return ui(t.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return t=Pl(t.type,!1),t;case 11:return t=Pl(t.type.render,!1),t;case 1:return t=Pl(t.type,!0),t;default:return""}}function Ca(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ir:return"Fragment";case rr:return"Portal";case wa:return"Profiler";case Wu:return"StrictMode";case Ea:return"Suspense";case Sa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lp:return(t.displayName||"Context")+".Consumer";case op:return(t._context.displayName||"Context")+".Provider";case Hu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $u:return e=t.displayName||null,e!==null?e:Ca(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return Ca(t(e))}catch{}}return null}function e0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(e);case 8:return e===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function up(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t0(t){var e=up(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _s(t){t._valueTracker||(t._valueTracker=t0(t))}function cp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=up(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ia(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dp(t,e){e=e.checked,e!=null&&ju(t,"checked",e,!1)}function ka(t,e){dp(t,e);var n=mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ta(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ta(t,e.type,mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ad(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ta(t,e,n){(e!=="number"||eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ci=Array.isArray;function _r(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Na(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ci(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mn(n)}}function hp(t,e){var n=mn(e.value),r=mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vs,pp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vs=vs||document.createElement("div"),vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n0=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(t){n0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fi[e]=fi[t]})});function mp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fi.hasOwnProperty(t)&&fi[t]?(""+e).trim():e+"px"}function gp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var r0=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pa(t,e){if(e){if(r0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Aa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Da=null,vr=null,yr=null;function Od(t){if(t=ns(t)){if(typeof Da!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Qo(e),Da(t.stateNode,t.type,e))}}function _p(t){vr?yr?yr.push(t):yr=[t]:vr=t}function vp(){if(vr){var t=vr,e=yr;if(yr=vr=null,Od(t),e)for(t=0;t<e.length;t++)Od(e[t])}}function yp(t,e){return t(e)}function wp(){}var Al=!1;function Ep(t,e,n){if(Al)return t(e,n);Al=!0;try{return yp(t,e,n)}finally{Al=!1,(vr!==null||yr!==null)&&(wp(),vp())}}function Ai(t,e){var n=t.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Oa=!1;if(At)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Oa=!1}function i0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var pi=!1,to=null,no=!1,ba=null,s0={onError:function(t){pi=!0,to=t}};function o0(t,e,n,r,i,s,o,l,a){pi=!1,to=null,i0.apply(s0,arguments)}function l0(t,e,n,r,i,s,o,l,a){if(o0.apply(this,arguments),pi){if(pi){var u=to;pi=!1,to=null}else throw Error(E(198));no||(no=!0,ba=u)}}function Jn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bd(t){if(Jn(t)!==t)throw Error(E(188))}function a0(t){var e=t.alternate;if(!e){if(e=Jn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bd(i),t;if(s===r)return bd(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Cp(t){return t=a0(t),t!==null?Ip(t):null}function Ip(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ip(t);if(e!==null)return e;t=t.sibling}return null}var kp=je.unstable_scheduleCallback,Md=je.unstable_cancelCallback,u0=je.unstable_shouldYield,c0=je.unstable_requestPaint,ie=je.unstable_now,d0=je.unstable_getCurrentPriorityLevel,qu=je.unstable_ImmediatePriority,Tp=je.unstable_UserBlockingPriority,ro=je.unstable_NormalPriority,h0=je.unstable_LowPriority,Np=je.unstable_IdlePriority,Vo=null,gt=null;function f0(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Vo,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:g0,p0=Math.log,m0=Math.LN2;function g0(t){return t>>>=0,t===0?32:31-(p0(t)/m0|0)|0}var ys=64,ws=4194304;function di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function io(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=di(l):(s&=o,s!==0&&(r=di(s)))}else o=n&~i,o!==0?r=di(o):s!==0&&(r=di(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-at(e),i=1<<n,r|=t[n],e&=~i;return r}function _0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-at(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=_0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rp(){var t=ys;return ys<<=1,!(ys&4194240)&&(ys=64),t}function xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-at(e),t[e]=n}function y0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-at(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-at(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Pp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ap,Ku,xp,Dp,Op,La=!1,Es=[],tn=null,nn=null,rn=null,xi=new Map,Di=new Map,Vt=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(t,e){switch(t){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(e.pointerId)}}function Zr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ns(e),e!==null&&Ku(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function E0(t,e,n,r,i){switch(e){case"focusin":return tn=Zr(tn,t,e,n,r,i),!0;case"dragenter":return nn=Zr(nn,t,e,n,r,i),!0;case"mouseover":return rn=Zr(rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xi.set(s,Zr(xi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Di.set(s,Zr(Di.get(s)||null,t,e,n,r,i)),!0}return!1}function bp(t){var e=Pn(t.target);if(e!==null){var n=Jn(e);if(n!==null){if(e=n.tag,e===13){if(e=Sp(n),e!==null){t.blockedOn=e,Op(t.priority,function(){xp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return e=ns(n),e!==null&&Ku(e),t.blockedOn=n,!1;e.shift()}return!0}function Fd(t,e,n){Fs(t)&&n.delete(e)}function S0(){La=!1,tn!==null&&Fs(tn)&&(tn=null),nn!==null&&Fs(nn)&&(nn=null),rn!==null&&Fs(rn)&&(rn=null),xi.forEach(Fd),Di.forEach(Fd)}function ei(t,e){t.blockedOn===e&&(t.blockedOn=null,La||(La=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,S0)))}function Oi(t){function e(i){return ei(i,t)}if(0<Es.length){ei(Es[0],t);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tn!==null&&ei(tn,t),nn!==null&&ei(nn,t),rn!==null&&ei(rn,t),xi.forEach(e),Di.forEach(e),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)bp(n),n.blockedOn===null&&Vt.shift()}var wr=Ut.ReactCurrentBatchConfig,so=!0;function C0(t,e,n,r){var i=W,s=wr.transition;wr.transition=null;try{W=1,Qu(t,e,n,r)}finally{W=i,wr.transition=s}}function I0(t,e,n,r){var i=W,s=wr.transition;wr.transition=null;try{W=4,Qu(t,e,n,r)}finally{W=i,wr.transition=s}}function Qu(t,e,n,r){if(so){var i=Fa(t,e,n,r);if(i===null)jl(t,e,r,oo,n),Ld(t,r);else if(E0(i,t,e,n,r))r.stopPropagation();else if(Ld(t,r),e&4&&-1<w0.indexOf(t)){for(;i!==null;){var s=ns(i);if(s!==null&&Ap(s),s=Fa(t,e,n,r),s===null&&jl(t,e,r,oo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jl(t,e,r,null,n)}}var oo=null;function Fa(t,e,n,r){if(oo=null,t=Vu(r),t=Pn(t),t!==null)if(e=Jn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oo=t,null}function Mp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d0()){case qu:return 1;case Tp:return 4;case ro:case h0:return 16;case Np:return 536870912;default:return 16}default:return 16}}var Jt=null,Yu=null,Us=null;function Lp(){if(Us)return Us;var t,e=Yu,n=e.length,r,i="value"in Jt?Jt.value:Jt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Us=i.slice(t,1<r?1-r:void 0)}function zs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ss(){return!0}function Ud(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ss:Ud,this.isPropagationStopped=Ud,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),e}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=He(Wr),ts=te({},Wr,{view:0,detail:0}),k0=He(ts),Dl,Ol,ti,qo=te({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ti&&(ti&&t.type==="mousemove"?(Dl=t.screenX-ti.screenX,Ol=t.screenY-ti.screenY):Ol=Dl=0,ti=t),Dl)},movementY:function(t){return"movementY"in t?t.movementY:Ol}}),zd=He(qo),T0=te({},qo,{dataTransfer:0}),N0=He(T0),R0=te({},ts,{relatedTarget:0}),bl=He(R0),P0=te({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=He(P0),x0=te({},Wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D0=He(x0),O0=te({},Wr,{data:0}),Bd=He(O0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=L0[t])?!!e[t]:!1}function Ju(){return F0}var U0=te({},ts,{key:function(t){if(t.key){var e=b0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z0=He(U0),B0=te({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=He(B0),j0=te({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),W0=He(j0),H0=te({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=He(H0),V0=te({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=He(V0),G0=[9,13,27,32],Zu=At&&"CompositionEvent"in window,mi=null;At&&"documentMode"in document&&(mi=document.documentMode);var K0=At&&"TextEvent"in window&&!mi,Fp=At&&(!Zu||mi&&8<mi&&11>=mi),Wd=String.fromCharCode(32),Hd=!1;function Up(t,e){switch(t){case"keyup":return G0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sr=!1;function Q0(t,e){switch(t){case"compositionend":return zp(e);case"keypress":return e.which!==32?null:(Hd=!0,Wd);case"textInput":return t=e.data,t===Wd&&Hd?null:t;default:return null}}function Y0(t,e){if(sr)return t==="compositionend"||!Zu&&Up(t,e)?(t=Lp(),Us=Yu=Jt=null,sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fp&&e.locale!=="ko"?null:e.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X0[t.type]:e==="textarea"}function Bp(t,e,n,r){_p(r),e=lo(e,"onChange"),0<e.length&&(n=new Xu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gi=null,bi=null;function J0(t){Xp(t,0)}function Go(t){var e=ar(t);if(cp(e))return t}function Z0(t,e){if(t==="change")return e}var jp=!1;if(At){var Ml;if(At){var Ll="oninput"in document;if(!Ll){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Ll=typeof Vd.oninput=="function"}Ml=Ll}else Ml=!1;jp=Ml&&(!document.documentMode||9<document.documentMode)}function qd(){gi&&(gi.detachEvent("onpropertychange",Wp),bi=gi=null)}function Wp(t){if(t.propertyName==="value"&&Go(bi)){var e=[];Bp(e,bi,t,Vu(t)),Ep(J0,e)}}function ew(t,e,n){t==="focusin"?(qd(),gi=e,bi=n,gi.attachEvent("onpropertychange",Wp)):t==="focusout"&&qd()}function tw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(bi)}function nw(t,e){if(t==="click")return Go(e)}function rw(t,e){if(t==="input"||t==="change")return Go(e)}function iw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:iw;function Mi(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ya.call(e,i)||!dt(t[i],e[i]))return!1}return!0}function Gd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kd(t,e){var n=Gd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gd(n)}}function Hp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $p(){for(var t=window,e=eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eo(t.document)}return e}function ec(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sw(t){var e=$p(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hp(n.ownerDocument.documentElement,n)){if(r!==null&&ec(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kd(n,s);var o=Kd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ow=At&&"documentMode"in document&&11>=document.documentMode,or=null,Ua=null,_i=null,za=!1;function Qd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;za||or==null||or!==eo(r)||(r=or,"selectionStart"in r&&ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_i&&Mi(_i,r)||(_i=r,r=lo(Ua,"onSelect"),0<r.length&&(e=new Xu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=or)))}function Cs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var lr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Fl={},Vp={};At&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Ko(t){if(Fl[t])return Fl[t];if(!lr[t])return t;var e=lr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vp)return Fl[t]=e[n];return t}var qp=Ko("animationend"),Gp=Ko("animationiteration"),Kp=Ko("animationstart"),Qp=Ko("transitionend"),Yp=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(t,e){Yp.set(t,e),Xn(e,[t])}for(var Ul=0;Ul<Yd.length;Ul++){var zl=Yd[Ul],lw=zl.toLowerCase(),aw=zl[0].toUpperCase()+zl.slice(1);vn(lw,"on"+aw)}vn(qp,"onAnimationEnd");vn(Gp,"onAnimationIteration");vn(Kp,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Qp,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function Xd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,l0(r,e,void 0,t),t.currentTarget=null}function Xp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Xd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Xd(i,l,u),s=a}}}if(no)throw t=ba,no=!1,ba=null,t}function G(t,e){var n=e[$a];n===void 0&&(n=e[$a]=new Set);var r=t+"__bubble";n.has(r)||(Jp(e,t,2,!1),n.add(r))}function Bl(t,e,n){var r=0;e&&(r|=4),Jp(n,t,r,e)}var Is="_reactListening"+Math.random().toString(36).slice(2);function Li(t){if(!t[Is]){t[Is]=!0,sp.forEach(function(n){n!=="selectionchange"&&(uw.has(n)||Bl(n,!1,t),Bl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Is]||(e[Is]=!0,Bl("selectionchange",!1,e))}}function Jp(t,e,n,r){switch(Mp(e)){case 1:var i=C0;break;case 4:i=I0;break;default:i=Qu}n=i.bind(null,e,n,t),i=void 0,!Oa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ep(function(){var u=s,d=Vu(n),c=[];e:{var h=Yp.get(t);if(h!==void 0){var _=Xu,v=t;switch(t){case"keypress":if(zs(n)===0)break e;case"keydown":case"keyup":_=z0;break;case"focusin":v="focus",_=bl;break;case"focusout":v="blur",_=bl;break;case"beforeblur":case"afterblur":_=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=W0;break;case qp:case Gp:case Kp:_=A0;break;case Qp:_=$0;break;case"scroll":_=k0;break;case"wheel":_=q0;break;case"copy":case"cut":case"paste":_=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=jd}var y=(e&4)!==0,T=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ai(f,m),w!=null&&y.push(Fi(f,w,g)))),T)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==xa&&(v=n.relatedTarget||n.fromElement)&&(Pn(v)||v[xt]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?Pn(v):null,v!==null&&(T=Jn(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=zd,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=jd,w="onPointerLeave",m="onPointerEnter",f="pointer"),T=_==null?h:ar(_),g=v==null?h:ar(v),h=new y(w,f+"leave",_,n,d),h.target=T,h.relatedTarget=g,w=null,Pn(d)===u&&(y=new y(m,f+"enter",v,n,d),y.target=g,y.relatedTarget=T,w=y),T=w,_&&v)t:{for(y=_,m=v,f=0,g=y;g;g=tr(g))f++;for(g=0,w=m;w;w=tr(w))g++;for(;0<f-g;)y=tr(y),f--;for(;0<g-f;)m=tr(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=tr(y),m=tr(m)}y=null}else y=null;_!==null&&Jd(c,h,_,y,!1),v!==null&&T!==null&&Jd(c,T,v,y,!0)}}e:{if(h=u?ar(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var k=Z0;else if($d(h))if(jp)k=rw;else{k=tw;var P=ew}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=nw);if(k&&(k=k(t,u))){Bp(c,k,n,d);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ta(h,"number",h.value)}switch(P=u?ar(u):window,t){case"focusin":($d(P)||P.contentEditable==="true")&&(or=P,Ua=u,_i=null);break;case"focusout":_i=Ua=or=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Qd(c,n,d);break;case"selectionchange":if(ow)break;case"keydown":case"keyup":Qd(c,n,d)}var A;if(Zu)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else sr?Up(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Fp&&n.locale!=="ko"&&(sr||x!=="onCompositionStart"?x==="onCompositionEnd"&&sr&&(A=Lp()):(Jt=d,Yu="value"in Jt?Jt.value:Jt.textContent,sr=!0)),P=lo(u,x),0<P.length&&(x=new Bd(x,t,null,n,d),c.push({event:x,listeners:P}),A?x.data=A:(A=zp(n),A!==null&&(x.data=A)))),(A=K0?Q0(t,n):Y0(t,n))&&(u=lo(u,"onBeforeInput"),0<u.length&&(d=new Bd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=A))}Xp(c,e)})}function Fi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ai(t,n),s!=null&&r.unshift(Fi(t,s,i)),s=Ai(t,e),s!=null&&r.push(Fi(t,s,i))),t=t.return}return r}function tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ai(n,s),a!=null&&o.unshift(Fi(n,a,l))):i||(a=Ai(n,s),a!=null&&o.push(Fi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cw=/\r\n?/g,dw=/\u0000|\uFFFD/g;function Zd(t){return(typeof t=="string"?t:""+t).replace(cw,`
`).replace(dw,"")}function ks(t,e,n){if(e=Zd(e),Zd(t)!==e&&n)throw Error(E(425))}function ao(){}var Ba=null,ja=null;function Wa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ha=typeof setTimeout=="function"?setTimeout:void 0,hw=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,fw=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(pw)}:Ha;function pw(t){setTimeout(function(){throw t})}function Wl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Oi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(e)}function sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),pt="__reactFiber$"+Hr,Ui="__reactProps$"+Hr,xt="__reactContainer$"+Hr,$a="__reactEvents$"+Hr,mw="__reactListeners$"+Hr,gw="__reactHandles$"+Hr;function Pn(t){var e=t[pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xt]||n[pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=th(t);t!==null;){if(n=t[pt])return n;t=th(t)}return e}t=n,n=t.parentNode}return null}function ns(t){return t=t[pt]||t[xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ar(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Qo(t){return t[Ui]||null}var Va=[],ur=-1;function yn(t){return{current:t}}function Y(t){0>ur||(t.current=Va[ur],Va[ur]=null,ur--)}function V(t,e){ur++,Va[ur]=t.current,t.current=e}var gn={},ke=yn(gn),be=yn(!1),Un=gn;function Pr(t,e){var n=t.type.contextTypes;if(!n)return gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Me(t){return t=t.childContextTypes,t!=null}function uo(){Y(be),Y(ke)}function nh(t,e,n){if(ke.current!==gn)throw Error(E(168));V(ke,e),V(be,n)}function Zp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,e0(t)||"Unknown",i));return te({},n,r)}function co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gn,Un=ke.current,V(ke,t),V(be,be.current),!0}function rh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Zp(t,e,Un),r.__reactInternalMemoizedMergedChildContext=t,Y(be),Y(ke),V(ke,t)):Y(be),V(be,n)}var Et=null,Yo=!1,Hl=!1;function em(t){Et===null?Et=[t]:Et.push(t)}function _w(t){Yo=!0,em(t)}function wn(){if(!Hl&&Et!==null){Hl=!0;var t=0,e=W;try{var n=Et;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Et=null,Yo=!1}catch(i){throw Et!==null&&(Et=Et.slice(t+1)),kp(qu,wn),i}finally{W=e,Hl=!1}}return null}var cr=[],dr=0,ho=null,fo=0,Ve=[],qe=0,zn=null,St=1,Ct="";function kn(t,e){cr[dr++]=fo,cr[dr++]=ho,ho=t,fo=e}function tm(t,e,n){Ve[qe++]=St,Ve[qe++]=Ct,Ve[qe++]=zn,zn=t;var r=St;t=Ct;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,St=1<<32-at(e)+i|n<<i|r,Ct=s+t}else St=1<<s|n<<i|r,Ct=t}function tc(t){t.return!==null&&(kn(t,1),tm(t,1,0))}function nc(t){for(;t===ho;)ho=cr[--dr],cr[dr]=null,fo=cr[--dr],cr[dr]=null;for(;t===zn;)zn=Ve[--qe],Ve[qe]=null,Ct=Ve[--qe],Ve[qe]=null,St=Ve[--qe],Ve[qe]=null}var Be=null,ze=null,J=!1,st=null;function nm(t,e){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ih(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,ze=sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zn!==null?{id:St,overflow:Ct}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,ze=null,!0):!1;default:return!1}}function qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ga(t){if(J){var e=ze;if(e){var n=e;if(!ih(t,e)){if(qa(t))throw Error(E(418));e=sn(n.nextSibling);var r=Be;e&&ih(t,e)?nm(r,n):(t.flags=t.flags&-4097|2,J=!1,Be=t)}}else{if(qa(t))throw Error(E(418));t.flags=t.flags&-4097|2,J=!1,Be=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Ts(t){if(t!==Be)return!1;if(!J)return sh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wa(t.type,t.memoizedProps)),e&&(e=ze)){if(qa(t))throw rm(),Error(E(418));for(;e;)nm(t,e),e=sn(e.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ze=sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ze=null}}else ze=Be?sn(t.stateNode.nextSibling):null;return!0}function rm(){for(var t=ze;t;)t=sn(t.nextSibling)}function Ar(){ze=Be=null,J=!1}function rc(t){st===null?st=[t]:st.push(t)}var vw=Ut.ReactCurrentBatchConfig;function rt(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var po=yn(null),mo=null,hr=null,ic=null;function sc(){ic=hr=mo=null}function oc(t){var e=po.current;Y(po),t._currentValue=e}function Ka(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Er(t,e){mo=t,ic=hr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(ic!==t)if(t={context:t,memoizedValue:e,next:null},hr===null){if(mo===null)throw Error(E(308));hr=t,mo.dependencies={lanes:0,firstContext:t}}else hr=hr.next=t;return e}var An=null;function lc(t){An===null?An=[t]:An.push(t)}function im(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function on(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,lc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function Bs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}function oh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function go(t,e,n,r){var i=t.updateQueue;$t=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(_,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,c,h):v,h==null)break e;c=te({},c,h);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=c):d=d.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jn|=o,t.lanes=o,t.memoizedState=c}}function lh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var om=new ip.Component().refs;function Qa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xo={isMounted:function(t){return(t=t._reactInternals)?Jn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=an(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=on(t,s,i),e!==null&&(ut(e,t,i,r),Bs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=an(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=on(t,s,i),e!==null&&(ut(e,t,i,r),Bs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=an(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=on(t,i,r),e!==null&&(ut(e,t,r,n),Bs(e,t,r))}};function ah(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mi(n,r)||!Mi(i,s):!0}function lm(t,e,n){var r=!1,i=gn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=Me(e)?Un:ke.current,r=e.contextTypes,s=(r=r!=null)?Pr(t,i):gn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function uh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xo.enqueueReplaceState(e,e.state,null)}function Ya(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=om,ac(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=Me(e)?Un:ke.current,i.context=Pr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xo.enqueueReplaceState(i,i.state,null),go(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===om&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Ns(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ch(t){var e=t._init;return e(t._payload)}function am(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=un(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,w){return f===null||f.tag!==6?(f=Yl(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,w){var k=g.type;return k===ir?d(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&ch(k)===f.type)?(w=i(f,g.props),w.ref=ni(m,f,g),w.return=m,w):(w=qs(g.type,g.key,g.props,null,m.mode,w),w.ref=ni(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Xl(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function d(m,f,g,w,k){return f===null||f.tag!==7?(f=Mn(g,m.mode,w,k),f.return=m,f):(f=i(f,g),f.return=m,f)}function c(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Yl(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case gs:return g=qs(f.type,f.key,f.props,null,m.mode,g),g.ref=ni(m,null,f),g.return=m,g;case rr:return f=Xl(f,m.mode,g),f.return=m,f;case Ht:var w=f._init;return c(m,w(f._payload),g)}if(ci(f)||Xr(f))return f=Mn(f,m.mode,g,null),f.return=m,f;Ns(m,f)}return null}function h(m,f,g,w){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case gs:return g.key===k?a(m,f,g,w):null;case rr:return g.key===k?u(m,f,g,w):null;case Ht:return k=g._init,h(m,f,k(g._payload),w)}if(ci(g)||Xr(g))return k!==null?null:d(m,f,g,w,null);Ns(m,g)}return null}function _(m,f,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(f,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case gs:return m=m.get(w.key===null?g:w.key)||null,a(f,m,w,k);case rr:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,k);case Ht:var P=w._init;return _(m,f,g,P(w._payload),k)}if(ci(w)||Xr(w))return m=m.get(g)||null,d(f,m,w,k,null);Ns(f,w)}return null}function v(m,f,g,w){for(var k=null,P=null,A=f,x=f=0,q=null;A!==null&&x<g.length;x++){A.index>x?(q=A,A=null):q=A.sibling;var M=h(m,A,g[x],w);if(M===null){A===null&&(A=q);break}t&&A&&M.alternate===null&&e(m,A),f=s(M,f,x),P===null?k=M:P.sibling=M,P=M,A=q}if(x===g.length)return n(m,A),J&&kn(m,x),k;if(A===null){for(;x<g.length;x++)A=c(m,g[x],w),A!==null&&(f=s(A,f,x),P===null?k=A:P.sibling=A,P=A);return J&&kn(m,x),k}for(A=r(m,A);x<g.length;x++)q=_(A,m,x,g[x],w),q!==null&&(t&&q.alternate!==null&&A.delete(q.key===null?x:q.key),f=s(q,f,x),P===null?k=q:P.sibling=q,P=q);return t&&A.forEach(function(et){return e(m,et)}),J&&kn(m,x),k}function y(m,f,g,w){var k=Xr(g);if(typeof k!="function")throw Error(E(150));if(g=k.call(g),g==null)throw Error(E(151));for(var P=k=null,A=f,x=f=0,q=null,M=g.next();A!==null&&!M.done;x++,M=g.next()){A.index>x?(q=A,A=null):q=A.sibling;var et=h(m,A,M.value,w);if(et===null){A===null&&(A=q);break}t&&A&&et.alternate===null&&e(m,A),f=s(et,f,x),P===null?k=et:P.sibling=et,P=et,A=q}if(M.done)return n(m,A),J&&kn(m,x),k;if(A===null){for(;!M.done;x++,M=g.next())M=c(m,M.value,w),M!==null&&(f=s(M,f,x),P===null?k=M:P.sibling=M,P=M);return J&&kn(m,x),k}for(A=r(m,A);!M.done;x++,M=g.next())M=_(A,m,x,M.value,w),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?x:M.key),f=s(M,f,x),P===null?k=M:P.sibling=M,P=M);return t&&A.forEach(function(Qr){return e(m,Qr)}),J&&kn(m,x),k}function T(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===ir&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case gs:e:{for(var k=g.key,P=f;P!==null;){if(P.key===k){if(k=g.type,k===ir){if(P.tag===7){n(m,P.sibling),f=i(P,g.props.children),f.return=m,m=f;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&ch(k)===P.type){n(m,P.sibling),f=i(P,g.props),f.ref=ni(m,P,g),f.return=m,m=f;break e}n(m,P);break}else e(m,P);P=P.sibling}g.type===ir?(f=Mn(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=qs(g.type,g.key,g.props,null,m.mode,w),w.ref=ni(m,f,g),w.return=m,m=w)}return o(m);case rr:e:{for(P=g.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Xl(g,m.mode,w),f.return=m,m=f}return o(m);case Ht:return P=g._init,T(m,f,P(g._payload),w)}if(ci(g))return v(m,f,g,w);if(Xr(g))return y(m,f,g,w);Ns(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Yl(g,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return T}var xr=am(!0),um=am(!1),rs={},_t=yn(rs),zi=yn(rs),Bi=yn(rs);function xn(t){if(t===rs)throw Error(E(174));return t}function uc(t,e){switch(V(Bi,e),V(zi,t),V(_t,rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ra(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ra(e,t)}Y(_t),V(_t,e)}function Dr(){Y(_t),Y(zi),Y(Bi)}function cm(t){xn(Bi.current);var e=xn(_t.current),n=Ra(e,t.type);e!==n&&(V(zi,t),V(_t,n))}function cc(t){zi.current===t&&(Y(_t),Y(zi))}var Z=yn(0);function _o(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $l=[];function dc(){for(var t=0;t<$l.length;t++)$l[t]._workInProgressVersionPrimary=null;$l.length=0}var js=Ut.ReactCurrentDispatcher,Vl=Ut.ReactCurrentBatchConfig,Bn=0,ee=null,oe=null,he=null,vo=!1,vi=!1,ji=0,yw=0;function we(){throw Error(E(321))}function hc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function fc(t,e,n,r,i,s){if(Bn=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,js.current=t===null||t.memoizedState===null?Cw:Iw,t=n(r,i),vi){s=0;do{if(vi=!1,ji=0,25<=s)throw Error(E(301));s+=1,he=oe=null,e.updateQueue=null,js.current=kw,t=n(r,i)}while(vi)}if(js.current=yo,e=oe!==null&&oe.next!==null,Bn=0,he=oe=ee=null,vo=!1,e)throw Error(E(300));return t}function pc(){var t=ji!==0;return ji=0,t}function ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=t:he=he.next=t,he}function Xe(){if(oe===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=he===null?ee.memoizedState:he.next;if(e!==null)he=e,oe=t;else{if(t===null)throw Error(E(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},he===null?ee.memoizedState=he=t:he=he.next=t}return he}function Wi(t,e){return typeof e=="function"?e(t):e}function ql(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Bn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ee.lanes|=d,jn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,dt(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,jn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dt(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dm(){}function hm(t,e){var n=ee,r=Xe(),i=e(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,mc(mm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Hi(9,pm.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(E(349));Bn&30||fm(n,e,i)}return i}function fm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pm(t,e,n,r){e.value=n,e.getSnapshot=r,gm(e)&&_m(t)}function mm(t,e,n){return n(function(){gm(e)&&_m(t)})}function gm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function _m(t){var e=Dt(t,1);e!==null&&ut(e,t,1,-1)}function dh(t){var e=ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},e.queue=t,t=t.dispatch=Sw.bind(null,ee,t),[e.memoizedState,t]}function Hi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vm(){return Xe().memoizedState}function Ws(t,e,n,r){var i=ft();ee.flags|=t,i.memoizedState=Hi(1|e,n,void 0,r===void 0?null:r)}function Jo(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&hc(r,o.deps)){i.memoizedState=Hi(e,n,s,r);return}}ee.flags|=t,i.memoizedState=Hi(1|e,n,s,r)}function hh(t,e){return Ws(8390656,8,t,e)}function mc(t,e){return Jo(2048,8,t,e)}function ym(t,e){return Jo(4,2,t,e)}function wm(t,e){return Jo(4,4,t,e)}function Em(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sm(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4,4,Em.bind(null,e,t),n)}function gc(){}function Cm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Im(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function km(t,e,n){return Bn&21?(dt(n,e)||(n=Rp(),ee.lanes|=n,jn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function ww(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Vl.transition;Vl.transition={};try{t(!1),e()}finally{W=n,Vl.transition=r}}function Tm(){return Xe().memoizedState}function Ew(t,e,n){var r=an(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nm(t))Rm(e,n);else if(n=im(t,e,n,r),n!==null){var i=Re();ut(n,t,r,i),Pm(n,e,r)}}function Sw(t,e,n){var r=an(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nm(t))Rm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dt(l,o)){var a=e.interleaved;a===null?(i.next=i,lc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=im(t,e,i,r),n!==null&&(i=Re(),ut(n,t,r,i),Pm(n,e,r))}}function Nm(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function Rm(t,e){vi=vo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}var yo={readContext:Ye,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Cw={readContext:Ye,useCallback:function(t,e){return ft().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ws(4194308,4,Em.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ws(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ws(4,2,t,e)},useMemo:function(t,e){var n=ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ew.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=ft();return t={current:t},e.memoizedState=t},useState:dh,useDebugValue:gc,useDeferredValue:function(t){return ft().memoizedState=t},useTransition:function(){var t=dh(!1),e=t[0];return t=ww.bind(null,t[1]),ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=ft();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),pe===null)throw Error(E(349));Bn&30||fm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hh(mm.bind(null,r,s,t),[t]),r.flags|=2048,Hi(9,pm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ft(),e=pe.identifierPrefix;if(J){var n=Ct,r=St;n=(r&~(1<<32-at(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ji++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Iw={readContext:Ye,useCallback:Cm,useContext:Ye,useEffect:mc,useImperativeHandle:Sm,useInsertionEffect:ym,useLayoutEffect:wm,useMemo:Im,useReducer:ql,useRef:vm,useState:function(){return ql(Wi)},useDebugValue:gc,useDeferredValue:function(t){var e=Xe();return km(e,oe.memoizedState,t)},useTransition:function(){var t=ql(Wi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:dm,useSyncExternalStore:hm,useId:Tm,unstable_isNewReconciler:!1},kw={readContext:Ye,useCallback:Cm,useContext:Ye,useEffect:mc,useImperativeHandle:Sm,useInsertionEffect:ym,useLayoutEffect:wm,useMemo:Im,useReducer:Gl,useRef:vm,useState:function(){return Gl(Wi)},useDebugValue:gc,useDeferredValue:function(t){var e=Xe();return oe===null?e.memoizedState=t:km(e,oe.memoizedState,t)},useTransition:function(){var t=Gl(Wi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:dm,useSyncExternalStore:hm,useId:Tm,unstable_isNewReconciler:!1};function Or(t,e){try{var n="",r=e;do n+=Zy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tw=typeof WeakMap=="function"?WeakMap:Map;function Am(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Eo||(Eo=!0,lu=r),Xa(t,e)},n}function xm(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xa(t,e),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Tw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Bw.bind(null,t,e,n),e.then(t,t))}function ph(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,on(n,e,1))),n.lanes|=1),t)}var Nw=Ut.ReactCurrentOwner,De=!1;function Ne(t,e,n,r){e.child=t===null?um(e,null,n,r):xr(e,t.child,n,r)}function gh(t,e,n,r,i){n=n.render;var s=e.ref;return Er(e,i),r=fc(t,e,n,r,s,i),n=pc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ot(t,e,i)):(J&&n&&tc(e),e.flags|=1,Ne(t,e,r,i),e.child)}function _h(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ic(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dm(t,e,s,r,i)):(t=qs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(o,r)&&t.ref===e.ref)return Ot(t,e,i)}return e.flags|=1,t=un(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Mi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Ot(t,e,i)}return Ja(t,e,n,r,i)}function Om(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(pr,Ue),Ue|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(pr,Ue),Ue|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(pr,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,V(pr,Ue),Ue|=r;return Ne(t,e,i,n),e.child}function bm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ja(t,e,n,r,i){var s=Me(n)?Un:ke.current;return s=Pr(e,s),Er(e,i),n=fc(t,e,n,r,s,i),r=pc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ot(t,e,i)):(J&&r&&tc(e),e.flags|=1,Ne(t,e,n,i),e.child)}function vh(t,e,n,r,i){if(Me(n)){var s=!0;co(e)}else s=!1;if(Er(e,i),e.stateNode===null)Hs(t,e),lm(e,n,r),Ya(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Me(n)?Un:ke.current,u=Pr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&uh(e,o,r,u),$t=!1;var h=e.memoizedState;o.state=h,go(e,r,o,i),a=e.memoizedState,l!==r||h!==a||be.current||$t?(typeof d=="function"&&(Qa(e,n,d,r),a=e.memoizedState),(l=$t||ah(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:rt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=Me(n)?Un:ke.current,a=Pr(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&uh(e,o,r,a),$t=!1,h=e.memoizedState,o.state=h,go(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||be.current||$t?(typeof _=="function"&&(Qa(e,n,_,r),v=e.memoizedState),(u=$t||ah(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Za(t,e,n,r,s,i)}function Za(t,e,n,r,i,s){bm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rh(e,n,!1),Ot(t,e,s);r=e.stateNode,Nw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xr(e,t.child,null,s),e.child=xr(e,null,l,s)):Ne(t,e,l,s),e.memoizedState=r.state,i&&rh(e,n,!0),e.child}function Mm(t){var e=t.stateNode;e.pendingContext?nh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nh(t,e.context,!1),uc(t,e.containerInfo)}function yh(t,e,n,r,i){return Ar(),rc(i),e.flags|=256,Ne(t,e,n,r),e.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lm(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(Z,i&1),t===null)return Ga(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tl(o,r,0,null),t=Mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tu(n),e.memoizedState=eu,t):_c(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Rw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=un(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=un(l,s):(s=Mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=eu,r}return s=t.child,t=s.sibling,r=un(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _c(t,e){return e=tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rs(t,e,n,r){return r!==null&&rc(r),xr(e,t.child,null,n),t=_c(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Rw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kl(Error(E(422))),Rs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=tl({mode:"visible",children:r.children},i,0,null),s=Mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xr(e,t.child,null,o),e.child.memoizedState=tu(o),e.memoizedState=eu,s);if(!(e.mode&1))return Rs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Kl(s,r,void 0),Rs(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),ut(r,t,i,-1))}return Cc(),r=Kl(Error(E(421))),Rs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=jw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ze=sn(i.nextSibling),Be=e,J=!0,st=null,t!==null&&(Ve[qe++]=St,Ve[qe++]=Ct,Ve[qe++]=zn,St=t.id,Ct=t.overflow,zn=e),e=_c(e,r.children),e.flags|=4096,e)}function wh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ka(t.return,e,n)}function Ql(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ne(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wh(t,n,e);else if(t.tag===19)wh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_o(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ql(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_o(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ql(e,!0,n,null,s);break;case"together":Ql(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ot(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=un(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=un(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pw(t,e,n){switch(e.tag){case 3:Mm(e),Ar();break;case 5:cm(e);break;case 1:Me(e.type)&&co(e);break;case 4:uc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(po,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?Lm(t,e,n):(V(Z,Z.current&1),t=Ot(t,e,n),t!==null?t.sibling:null);V(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,Om(t,e,n)}return Ot(t,e,n)}var Um,nu,zm,Bm;Um=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nu=function(){};zm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xn(_t.current);var s=null;switch(n){case"input":i=Ia(t,i),r=Ia(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=Na(t,i),r=Na(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ao)}Pa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&G("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ri(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Aw(t,e,n){var r=e.pendingProps;switch(nc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Me(e.type)&&uo(),Ee(e),null;case 3:return r=e.stateNode,Dr(),Y(be),Y(ke),dc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ts(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,st!==null&&(cu(st),st=null))),nu(t,e),Ee(e),null;case 5:cc(e);var i=xn(Bi.current);if(n=e.type,t!==null&&e.stateNode!=null)zm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ee(e),null}if(t=xn(_t.current),Ts(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pt]=e,r[Ui]=s,t=(e.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)G(hi[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Pd(r,s),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},G("invalid",r);break;case"textarea":xd(r,s),G("invalid",r)}Pa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,l,t),i=["children",""+l]):Ri.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":_s(r),Ad(r,s,!0);break;case"textarea":_s(r),Dd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ao)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pt]=e,t[Ui]=r,Um(t,e,!1,!1),e.stateNode=t;e:{switch(o=Aa(n,r),n){case"dialog":G("cancel",t),G("close",t),i=r;break;case"iframe":case"object":case"embed":G("load",t),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)G(hi[i],t);i=r;break;case"source":G("error",t),i=r;break;case"img":case"image":case"link":G("error",t),G("load",t),i=r;break;case"details":G("toggle",t),i=r;break;case"input":Pd(t,r),i=Ia(t,r),G("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),G("invalid",t);break;case"textarea":xd(t,r),i=Na(t,r),G("invalid",t);break;default:i=r}Pa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?gp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Pi(t,a):typeof a=="number"&&Pi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ri.hasOwnProperty(s)?a!=null&&s==="onScroll"&&G("scroll",t):a!=null&&ju(t,s,a,o))}switch(n){case"input":_s(t),Ad(t,r,!1);break;case"textarea":_s(t),Dd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_r(t,!!r.multiple,s,!1):r.defaultValue!=null&&_r(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)Bm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=xn(Bi.current),xn(_t.current),Ts(e)){if(r=e.stateNode,n=e.memoizedProps,r[pt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=e,e.stateNode=r}return Ee(e),null;case 13:if(Y(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&ze!==null&&e.mode&1&&!(e.flags&128))rm(),Ar(),e.flags|=98560,s=!1;else if(s=Ts(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[pt]=e}else Ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else st!==null&&(cu(st),st=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?ae===0&&(ae=3):Cc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Dr(),nu(t,e),t===null&&Li(e.stateNode.containerInfo),Ee(e),null;case 10:return oc(e.type._context),Ee(e),null;case 17:return Me(e.type)&&uo(),Ee(e),null;case 19:if(Y(Z),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ri(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_o(t),o!==null){for(e.flags|=128,ri(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>br&&(e.flags|=128,r=!0,ri(s,!1),e.lanes=4194304)}else{if(!r)if(t=_o(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ee(e),null}else 2*ie()-s.renderingStartTime>br&&n!==1073741824&&(e.flags|=128,r=!0,ri(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=Z.current,V(Z,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Sc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ue&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function xw(t,e){switch(nc(e),e.tag){case 1:return Me(e.type)&&uo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Dr(),Y(be),Y(ke),dc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cc(e),null;case 13:if(Y(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(Z),null;case 4:return Dr(),null;case 10:return oc(e.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var Ps=!1,Se=!1,Dw=typeof WeakSet=="function"?WeakSet:Set,N=null;function fr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function ru(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Eh=!1;function Ow(t,e){if(Ba=so,t=$p(),ec(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)h=c,c=_;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(_=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ja={focusedElem:t,selectionRange:n},so=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,T=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:rt(e.type,y),T);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return v=Eh,Eh=!1,v}function yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ru(e,n,s)}i=i.next}while(i!==r)}}function Zo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function iu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jm(t){var e=t.alternate;e!==null&&(t.alternate=null,jm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pt],delete e[Ui],delete e[$a],delete e[mw],delete e[gw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wm(t){return t.tag===5||t.tag===3||t.tag===4}function Sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ao));else if(r!==4&&(t=t.child,t!==null))for(su(t,e,n),t=t.sibling;t!==null;)su(t,e,n),t=t.sibling}function ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ou(t,e,n),t=t.sibling;t!==null;)ou(t,e,n),t=t.sibling}var me=null,it=!1;function Bt(t,e,n){for(n=n.child;n!==null;)Hm(t,e,n),n=n.sibling}function Hm(t,e,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:Se||fr(n,e);case 6:var r=me,i=it;me=null,Bt(t,e,n),me=r,it=i,me!==null&&(it?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(it?(t=me,n=n.stateNode,t.nodeType===8?Wl(t.parentNode,n):t.nodeType===1&&Wl(t,n),Oi(t)):Wl(me,n.stateNode));break;case 4:r=me,i=it,me=n.stateNode.containerInfo,it=!0,Bt(t,e,n),me=r,it=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ru(n,e,o),i=i.next}while(i!==r)}Bt(t,e,n);break;case 1:if(!Se&&(fr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}Bt(t,e,n);break;case 21:Bt(t,e,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Bt(t,e,n),Se=r):Bt(t,e,n);break;default:Bt(t,e,n)}}function Ch(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dw),e.forEach(function(r){var i=Ww.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,it=!1;break e;case 3:me=l.stateNode.containerInfo,it=!0;break e;case 4:me=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(me===null)throw Error(E(160));Hm(s,o,i),me=null,it=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$m(e,t),e=e.sibling}function $m(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),ht(t),r&4){try{yi(3,t,t.return),Zo(3,t)}catch(y){ne(t,t.return,y)}try{yi(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:tt(e,t),ht(t),r&512&&n!==null&&fr(n,n.return);break;case 5:if(tt(e,t),ht(t),r&512&&n!==null&&fr(n,n.return),t.flags&32){var i=t.stateNode;try{Pi(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&dp(i,s),Aa(l,o);var u=Aa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?gp(i,c):d==="dangerouslySetInnerHTML"?pp(i,c):d==="children"?Pi(i,c):ju(i,d,c,u)}switch(l){case"input":ka(i,s);break;case"textarea":hp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?_r(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?_r(i,!!s.multiple,s.defaultValue,!0):_r(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ui]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(tt(e,t),ht(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(tt(e,t),ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:tt(e,t),ht(t);break;case 13:tt(e,t),ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wc=ie())),r&4&&Ch(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Se=(u=Se)||d,tt(e,t),Se=u):tt(e,t),ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(N=t,d=t.child;d!==null;){for(c=N=d;N!==null;){switch(h=N,_=h.child,h.tag){case 0:case 11:case 14:case 15:yi(4,h,h.return);break;case 1:fr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:fr(h,h.return);break;case 22:if(h.memoizedState!==null){kh(c);continue}}_!==null?(_.return=h,N=_):kh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=mp("display",o))}catch(y){ne(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ne(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:tt(e,t),ht(t),r&4&&Ch(t);break;case 21:break;default:tt(e,t),ht(t)}}function ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var s=Sh(t);ou(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sh(t);su(t,l,o);break;default:throw Error(E(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bw(t,e,n){N=t,Vm(t)}function Vm(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ps;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Se;l=Ps;var u=Se;if(Ps=o,(Se=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?Th(i):a!==null?(a.return=o,N=a):Th(i);for(;s!==null;)N=s,Vm(s),s=s.sibling;N=i,Ps=l,Se=u}Ih(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Ih(t)}}function Ih(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Se||Zo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Oi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Se||e.flags&512&&iu(e)}catch(h){ne(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function kh(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Th(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zo(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{iu(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{iu(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var Mw=Math.ceil,wo=Ut.ReactCurrentDispatcher,vc=Ut.ReactCurrentOwner,Qe=Ut.ReactCurrentBatchConfig,B=0,pe=null,se=null,ve=0,Ue=0,pr=yn(0),ae=0,$i=null,jn=0,el=0,yc=0,wi=null,xe=null,wc=0,br=1/0,wt=null,Eo=!1,lu=null,ln=null,As=!1,Zt=null,So=0,Ei=0,au=null,$s=-1,Vs=0;function Re(){return B&6?ie():$s!==-1?$s:$s=ie()}function an(t){return t.mode&1?B&2&&ve!==0?ve&-ve:vw.transition!==null?(Vs===0&&(Vs=Rp()),Vs):(t=W,t!==0||(t=window.event,t=t===void 0?16:Mp(t.type)),t):1}function ut(t,e,n,r){if(50<Ei)throw Ei=0,au=null,Error(E(185));es(t,n,r),(!(B&2)||t!==pe)&&(t===pe&&(!(B&2)&&(el|=n),ae===4&&qt(t,ve)),Le(t,r),n===1&&B===0&&!(e.mode&1)&&(br=ie()+500,Yo&&wn()))}function Le(t,e){var n=t.callbackNode;v0(t,e);var r=io(t,t===pe?ve:0);if(r===0)n!==null&&Md(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Md(n),e===1)t.tag===0?_w(Nh.bind(null,t)):em(Nh.bind(null,t)),fw(function(){!(B&6)&&wn()}),n=null;else{switch(Pp(r)){case 1:n=qu;break;case 4:n=Tp;break;case 16:n=ro;break;case 536870912:n=Np;break;default:n=ro}n=Zm(n,qm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qm(t,e){if($s=-1,Vs=0,B&6)throw Error(E(327));var n=t.callbackNode;if(Sr()&&t.callbackNode!==n)return null;var r=io(t,t===pe?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Co(t,r);else{e=r;var i=B;B|=2;var s=Km();(pe!==t||ve!==e)&&(wt=null,br=ie()+500,bn(t,e));do try{Uw();break}catch(l){Gm(t,l)}while(1);sc(),wo.current=s,B=i,se!==null?e=0:(pe=null,ve=0,e=ae)}if(e!==0){if(e===2&&(i=Ma(t),i!==0&&(r=i,e=uu(t,i))),e===1)throw n=$i,bn(t,0),qt(t,r),Le(t,ie()),n;if(e===6)qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Lw(i)&&(e=Co(t,r),e===2&&(s=Ma(t),s!==0&&(r=s,e=uu(t,s))),e===1))throw n=$i,bn(t,0),qt(t,r),Le(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Tn(t,xe,wt);break;case 3:if(qt(t,r),(r&130023424)===r&&(e=wc+500-ie(),10<e)){if(io(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ha(Tn.bind(null,t,xe,wt),e);break}Tn(t,xe,wt);break;case 4:if(qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mw(r/1960))-r,10<r){t.timeoutHandle=Ha(Tn.bind(null,t,xe,wt),r);break}Tn(t,xe,wt);break;case 5:Tn(t,xe,wt);break;default:throw Error(E(329))}}}return Le(t,ie()),t.callbackNode===n?qm.bind(null,t):null}function uu(t,e){var n=wi;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=Co(t,e),t!==2&&(e=xe,xe=n,e!==null&&cu(e)),t}function cu(t){xe===null?xe=t:xe.push.apply(xe,t)}function Lw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qt(t,e){for(e&=~yc,e&=~el,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-at(e),r=1<<n;t[n]=-1,e&=~r}}function Nh(t){if(B&6)throw Error(E(327));Sr();var e=io(t,0);if(!(e&1))return Le(t,ie()),null;var n=Co(t,e);if(t.tag!==0&&n===2){var r=Ma(t);r!==0&&(e=r,n=uu(t,r))}if(n===1)throw n=$i,bn(t,0),qt(t,e),Le(t,ie()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tn(t,xe,wt),Le(t,ie()),null}function Ec(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(br=ie()+500,Yo&&wn())}}function Wn(t){Zt!==null&&Zt.tag===0&&!(B&6)&&Sr();var e=B;B|=1;var n=Qe.transition,r=W;try{if(Qe.transition=null,W=1,t)return t()}finally{W=r,Qe.transition=n,B=e,!(B&6)&&wn()}}function Sc(){Ue=pr.current,Y(pr)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hw(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:Dr(),Y(be),Y(ke),dc();break;case 5:cc(r);break;case 4:Dr();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:oc(r.type._context);break;case 22:case 23:Sc()}n=n.return}if(pe=t,se=t=un(t.current,null),ve=Ue=e,ae=0,$i=null,yc=el=jn=0,xe=wi=null,An!==null){for(e=0;e<An.length;e++)if(n=An[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}An=null}return t}function Gm(t,e){do{var n=se;try{if(sc(),js.current=yo,vo){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vo=!1}if(Bn=0,he=oe=ee=null,vi=!1,ji=0,vc.current=null,n===null||n.return===null){ae=1,$i=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=ph(o);if(_!==null){_.flags&=-257,mh(_,o,l,s,e),_.mode&1&&fh(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){fh(s,u,e),Cc();break e}a=Error(E(426))}}else if(J&&l.mode&1){var T=ph(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),mh(T,o,l,s,e),rc(Or(a,l));break e}}s=a=Or(a,l),ae!==4&&(ae=2),wi===null?wi=[s]:wi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Am(s,a,e);oh(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ln===null||!ln.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=xm(s,l,e);oh(s,w);break e}}s=s.return}while(s!==null)}Ym(n)}catch(k){e=k,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function Km(){var t=wo.current;return wo.current=yo,t===null?yo:t}function Cc(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(jn&268435455)&&!(el&268435455)||qt(pe,ve)}function Co(t,e){var n=B;B|=2;var r=Km();(pe!==t||ve!==e)&&(wt=null,bn(t,e));do try{Fw();break}catch(i){Gm(t,i)}while(1);if(sc(),B=n,wo.current=r,se!==null)throw Error(E(261));return pe=null,ve=0,ae}function Fw(){for(;se!==null;)Qm(se)}function Uw(){for(;se!==null&&!u0();)Qm(se)}function Qm(t){var e=Jm(t.alternate,t,Ue);t.memoizedProps=t.pendingProps,e===null?Ym(t):se=e,vc.current=null}function Ym(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xw(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,se=null;return}}else if(n=Aw(n,e,Ue),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ae===0&&(ae=5)}function Tn(t,e,n){var r=W,i=Qe.transition;try{Qe.transition=null,W=1,zw(t,e,n,r)}finally{Qe.transition=i,W=r}return null}function zw(t,e,n,r){do Sr();while(Zt!==null);if(B&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(y0(t,s),t===pe&&(se=pe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||As||(As=!0,Zm(ro,function(){return Sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qe.transition,Qe.transition=null;var o=W;W=1;var l=B;B|=4,vc.current=null,Ow(t,n),$m(n,t),sw(ja),so=!!Ba,ja=Ba=null,t.current=n,bw(n),c0(),B=l,W=o,Qe.transition=s}else t.current=n;if(As&&(As=!1,Zt=t,So=i),s=t.pendingLanes,s===0&&(ln=null),f0(n.stateNode),Le(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,t=lu,lu=null,t;return So&1&&t.tag!==0&&Sr(),s=t.pendingLanes,s&1?t===au?Ei++:(Ei=0,au=t):Ei=0,wn(),null}function Sr(){if(Zt!==null){var t=Pp(So),e=Qe.transition,n=W;try{if(Qe.transition=null,W=16>t?16:t,Zt===null)var r=!1;else{if(t=Zt,Zt=null,So=0,B&6)throw Error(E(331));var i=B;for(B|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:yi(8,d,s)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var h=d.sibling,_=d.return;if(jm(d),d===u){N=null;break}if(h!==null){h.return=_,N=h;break}N=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zo(9,l)}}catch(k){ne(l,l.return,k)}if(l===o){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if(B=i,wn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Vo,t)}catch{}r=!0}return r}finally{W=n,Qe.transition=e}}return!1}function Rh(t,e,n){e=Or(n,e),e=Am(t,e,1),t=on(t,e,1),e=Re(),t!==null&&(es(t,1,e),Le(t,e))}function ne(t,e,n){if(t.tag===3)Rh(t,t,n);else for(;e!==null;){if(e.tag===3){Rh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){t=Or(n,t),t=xm(e,t,1),e=on(e,t,1),t=Re(),e!==null&&(es(e,1,t),Le(e,t));break}}e=e.return}}function Bw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(ve&n)===n&&(ae===4||ae===3&&(ve&130023424)===ve&&500>ie()-wc?bn(t,0):yc|=n),Le(t,e)}function Xm(t,e){e===0&&(t.mode&1?(e=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):e=1);var n=Re();t=Dt(t,e),t!==null&&(es(t,e,n),Le(t,n))}function jw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xm(t,n)}function Ww(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Xm(t,n)}var Jm;Jm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,Pw(t,e,n);De=!!(t.flags&131072)}else De=!1,J&&e.flags&1048576&&tm(e,fo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hs(t,e),t=e.pendingProps;var i=Pr(e,ke.current);Er(e,n),i=fc(null,e,r,t,i,n);var s=pc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Me(r)?(s=!0,co(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ac(e),i.updater=Xo,e.stateNode=i,i._reactInternals=e,Ya(e,r,t,n),e=Za(null,e,r,!0,s,n)):(e.tag=0,J&&s&&tc(e),Ne(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$w(r),t=rt(r,t),i){case 0:e=Ja(null,e,r,t,n);break e;case 1:e=vh(null,e,r,t,n);break e;case 11:e=gh(null,e,r,t,n);break e;case 14:e=_h(null,e,r,rt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Ja(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),vh(t,e,r,i,n);case 3:e:{if(Mm(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sm(t,e),go(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Or(Error(E(423)),e),e=yh(t,e,r,n,i);break e}else if(r!==i){i=Or(Error(E(424)),e),e=yh(t,e,r,n,i);break e}else for(ze=sn(e.stateNode.containerInfo.firstChild),Be=e,J=!0,st=null,n=um(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){e=Ot(t,e,n);break e}Ne(t,e,r,n)}e=e.child}return e;case 5:return cm(e),t===null&&Ga(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wa(r,i)?o=null:s!==null&&Wa(r,s)&&(e.flags|=32),bm(t,e),Ne(t,e,o,n),e.child;case 6:return t===null&&Ga(e),null;case 13:return Lm(t,e,n);case 4:return uc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xr(e,null,r,n):Ne(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),gh(t,e,r,i,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,V(po,r._currentValue),r._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!be.current){e=Ot(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ka(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ka(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ne(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Er(e,n),i=Ye(i),r=r(i),e.flags|=1,Ne(t,e,r,n),e.child;case 14:return r=e.type,i=rt(r,e.pendingProps),i=rt(r.type,i),_h(t,e,r,i,n);case 15:return Dm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Hs(t,e),e.tag=1,Me(r)?(t=!0,co(e)):t=!1,Er(e,n),lm(e,r,i),Ya(e,r,i,n),Za(null,e,r,!0,t,n);case 19:return Fm(t,e,n);case 22:return Om(t,e,n)}throw Error(E(156,e.tag))};function Zm(t,e){return kp(t,e)}function Hw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,n,r){return new Hw(t,e,n,r)}function Ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $w(t){if(typeof t=="function")return Ic(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hu)return 11;if(t===$u)return 14}return 2}function un(t,e){var n=t.alternate;return n===null?(n=Ge(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ic(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ir:return Mn(n.children,i,s,e);case Wu:o=8,i|=8;break;case wa:return t=Ge(12,n,e,i|2),t.elementType=wa,t.lanes=s,t;case Ea:return t=Ge(13,n,e,i),t.elementType=Ea,t.lanes=s,t;case Sa:return t=Ge(19,n,e,i),t.elementType=Sa,t.lanes=s,t;case ap:return tl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case op:o=10;break e;case lp:o=9;break e;case Hu:o=11;break e;case $u:o=14;break e;case Ht:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ge(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mn(t,e,n,r){return t=Ge(7,t,r,e),t.lanes=n,t}function tl(t,e,n,r){return t=Ge(22,t,r,e),t.elementType=ap,t.lanes=n,t.stateNode={isHidden:!1},t}function Yl(t,e,n){return t=Ge(6,t,null,e),t.lanes=n,t}function Xl(t,e,n){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kc(t,e,n,r,i,s,o,l,a){return t=new Vw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ge(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(s),t}function qw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function eg(t){if(!t)return gn;t=t._reactInternals;e:{if(Jn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Me(n))return Zp(t,n,e)}return e}function tg(t,e,n,r,i,s,o,l,a){return t=kc(n,r,!0,t,i,s,o,l,a),t.context=eg(null),n=t.current,r=Re(),i=an(n),s=Rt(r,i),s.callback=e??null,on(n,s,i),t.current.lanes=i,es(t,i,r),Le(t,r),t}function nl(t,e,n,r){var i=e.current,s=Re(),o=an(i);return n=eg(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=on(i,e,o),t!==null&&(ut(t,i,o,s),Bs(t,i,o)),o}function Io(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ph(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tc(t,e){Ph(t,e),(t=t.alternate)&&Ph(t,e)}function Gw(){return null}var ng=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nc(t){this._internalRoot=t}rl.prototype.render=Nc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));nl(t,e,null,null)};rl.prototype.unmount=Nc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wn(function(){nl(null,t,null,null)}),e[xt]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vt.length&&e!==0&&e<Vt[n].priority;n++);Vt.splice(n,0,t),n===0&&bp(t)}};function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ah(){}function Kw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Io(o);s.call(u)}}var o=tg(e,r,t,0,null,!1,!1,"",Ah);return t._reactRootContainer=o,t[xt]=o.current,Li(t.nodeType===8?t.parentNode:t),Wn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Io(a);l.call(u)}}var a=kc(t,0,!1,null,null,!1,!1,"",Ah);return t._reactRootContainer=a,t[xt]=a.current,Li(t.nodeType===8?t.parentNode:t),Wn(function(){nl(e,a,n,r)}),a}function sl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Io(o);l.call(a)}}nl(e,o,t,i)}else o=Kw(n,e,t,i,r);return Io(o)}Ap=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=di(e.pendingLanes);n!==0&&(Gu(e,n|1),Le(e,ie()),!(B&6)&&(br=ie()+500,wn()))}break;case 13:Wn(function(){var r=Dt(t,1);if(r!==null){var i=Re();ut(r,t,1,i)}}),Tc(t,1)}};Ku=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=Re();ut(e,t,134217728,n)}Tc(t,134217728)}};xp=function(t){if(t.tag===13){var e=an(t),n=Dt(t,e);if(n!==null){var r=Re();ut(n,t,e,r)}Tc(t,e)}};Dp=function(){return W};Op=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};Da=function(t,e,n){switch(e){case"input":if(ka(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Qo(r);if(!i)throw Error(E(90));cp(r),ka(r,i)}}}break;case"textarea":hp(t,n);break;case"select":e=n.value,e!=null&&_r(t,!!n.multiple,e,!1)}};yp=Ec;wp=Wn;var Qw={usingClientEntryPoint:!1,Events:[ns,ar,Qo,_p,vp,Ec]},ii={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yw={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cp(t),t===null?null:t.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||Gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Vo=xs.inject(Yw),gt=xs}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qw;We.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(e))throw Error(E(200));return qw(t,e,null,n)};We.createRoot=function(t,e){if(!Rc(t))throw Error(E(299));var n=!1,r="",i=ng;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kc(t,1,!1,null,null,n,!1,r,i),t[xt]=e.current,Li(t.nodeType===8?t.parentNode:t),new Nc(e)};We.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Cp(e),t=t===null?null:t.stateNode,t};We.flushSync=function(t){return Wn(t)};We.hydrate=function(t,e,n){if(!il(e))throw Error(E(200));return sl(null,t,e,!0,n)};We.hydrateRoot=function(t,e,n){if(!Rc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ng;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tg(e,null,t,1,n??null,i,!1,s,o),t[xt]=e.current,Li(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rl(e)};We.render=function(t,e,n){if(!il(e))throw Error(E(200));return sl(null,t,e,!1,n)};We.unmountComponentAtNode=function(t){if(!il(t))throw Error(E(40));return t._reactRootContainer?(Wn(function(){sl(null,null,t,!1,function(){t._reactRootContainer=null,t[xt]=null})}),!0):!1};We.unstable_batchedUpdates=Ec;We.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!il(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return sl(t,e,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=We})(Gy);var xh=_a;ga.createRoot=xh.createRoot,ga.hydrateRoot=xh.hydrateRoot;const rg="/assets/logo-psurveys-f975a848.png";const ol=()=>{function t(){document.getElementById("mobile-menu").style.width="100%",document.getElementById("header").style.backdropFilter="none"}function e(){document.getElementById("mobile-menu").style.width="0%",document.getElementById("header").style.backdropFilter="blur(10px)"}return S("header",{id:"header",children:[S("div",{className:"logo",children:[p(Wt,{to:"/",children:p("img",{src:rg,alt:"Logo de Psurveys"})}),p(Wt,{to:"/",className:"text-logo",children:"Psurveys"})]}),p("nav",{children:S("ul",{className:"nav-links",children:[p("li",{children:p($e,{to:"/",children:"Inicio"})}),p("li",{children:p($e,{to:"/acerca",children:"Acerca"})}),p("li",{children:p($e,{to:"/ayuda",children:"Ayuda"})}),p("li",{children:p($e,{to:"/contacto",children:"Contacto"})})]})}),S("div",{children:[p(Wt,{to:"/login",className:"btn btn-login",children:p("button",{title:"Iniciar sesión",children:"Iniciar Sesión"})}),p(Wt,{to:"/register",className:"btn btn-register",children:p("button",{title:"Registrarse",children:"Registrarse"})})]}),p("a",{onClick:t,className:"menu",href:"#",children:S("button",{title:"Abrir Navegación",children:[p("div",{}),p("div",{}),p("div",{})]})}),S("div",{className:"overlay",id:"mobile-menu",children:[p("a",{onClick:e,href:"#",className:"close",children:"×"}),S("div",{className:"overlay-content",children:[p($e,{to:"/",children:"Inicio"}),p($e,{to:"/acerca",children:"Acerca"}),p($e,{to:"/ayuda",children:"Ayuda"}),p($e,{to:"/contacto",children:"Contacto"}),p(Wt,{to:"/login",className:"btn btn-login",children:p("button",{title:"Iniciar sesión",children:"Iniciar Sesión"})}),p(Wt,{to:"/register",className:"btn btn-register",children:p("button",{title:"Registrarse",children:"Registrarse"})})]})]})]})},Xw="/assets/bienvenida-c9595b90.svg";const Jw=()=>S("section",{className:"bienvenida",children:[S("div",{className:"bienvenida-text",children:[p("h1",{className:"bienvenida-titulo",children:"Encuestas Psicológicas"}),p("p",{className:"bienvenida-subtitulo",children:"Descubre y prueba estos nuevos test para medir tus habilidades cognitivas"}),p("a",{href:"#",className:"bienvenida-btn-1",children:p("button",{children:"Empezar"})}),p("a",{href:"#",className:"bienvenida-btn-2",children:"Ver Encuestas"})]}),p("figure",{className:"bienvenida-img",children:p("img",{src:Xw,alt:"Imagen de Bienvenida"})})]}),Zw="/assets/bienvenida-two-2a8ec447.svg";const e1=()=>S("section",{className:"bienvenida-two",children:[p("figure",{className:"bienvenida-img-two",children:p("img",{src:Zw,alt:"Imagen de Bienvenida"})}),S("div",{className:"bienvenida-text-two",children:[p("h1",{className:"bienvenida-titulo-two",children:"Test con respaldo profesional"}),p("p",{className:"bienvenida-subtitulo-two",children:"Todos los test de esta plataforma son agregados solo por profesionales en el área de psicología"})]})]});const ll=()=>S("footer",{className:"footer",children:[S("div",{className:"footer__addr",children:[p("h1",{className:"footer__logo",children:"Psurveys"}),p("h2",{children:"Contacto"}),S("address",{children:["5534 Somewhere In. The World 22193-10212",p("br",{}),p("a",{className:"footer__btn",href:"mailto:example@gmail.com",children:"Enviar Correo"})]})]}),S("ul",{className:"footer__nav",children:[S("li",{className:"nav__item",children:[p("h2",{className:"nav__title",children:"Media"}),S("ul",{className:"nav__ul",children:[p("li",{children:p("a",{href:"#",children:"Online"})}),p("li",{children:p("a",{href:"#",children:"Print"})}),p("li",{children:p("a",{href:"#",children:"Alternative Ads"})})]})]}),S("li",{className:"nav__item nav__item--extra",children:[p("h2",{className:"nav__title",children:"Tecnología"}),S("ul",{className:"nav__ul nav__ul--extra",children:[p("li",{children:p("a",{href:"#",children:"Hardware Design"})}),p("li",{children:p("a",{href:"#",children:"Software Design"})}),p("li",{children:p("a",{href:"#",children:"Digital Signage"})}),p("li",{children:p("a",{href:"#",children:"Automation"})}),p("li",{children:p("a",{href:"#",children:"Artificial Intelligence"})}),p("li",{children:p("a",{href:"#",children:"IoT"})})]})]}),S("li",{className:"nav__item",children:[p("h2",{className:"nav__title",children:"Legal"}),S("ul",{className:"nav__ul",children:[p("li",{children:p("a",{href:"#",children:"Politica de Privacidad"})}),p("li",{children:p("a",{href:"#",children:"Terminos de uso"})}),p("li",{children:p("a",{href:"#",children:"Sitemap"})})]})]})]}),S("div",{className:"legal",children:[p("p",{children:"© 2023 Psurveys. All rights reserved."}),p("div",{className:"legal__links",children:p("span",{children:"Desarrollado por: "})})]})]}),t1=()=>S("div",{className:"Home",children:[p(ol,{}),p(Jw,{}),p("p",{className:"bienvenida-text-center",children:"Obten tus resultados al instante de responder el test"}),p(e1,{}),p(ll,{})]});const Pc=()=>{const t=jr();let e="";const n=t.pathname.split("/").filter(r=>r!=="").map(r=>(e=+`/${r}`,p("div",{className:"crumb",children:p(Wt,{to:e,children:r})},r)));return p("div",{className:"breadcrumbs",children:n})},n1=()=>S("div",{className:"Acerca",children:[p(ol,{}),S("section",{className:"section-acerca",children:[p(Pc,{}),p("h1",{children:"Acerca"}),p("p",{children:"Pagina de acerca"})]}),p(ll,{})]});const r1=()=>S(Ho,{children:[p(ol,{}),S("section",{className:"section-padding",children:[p(Pc,{}),S("div",{className:"form-container login",children:[p("div",{className:"register-title",children:p("h1",{children:"Inicia Sesión"})}),S("form",{className:"formulario",children:[S("p",{className:"full",children:[p("label",{children:"Correo electrónico"}),p("input",{type:"email",name:"correo",required:!0,placeholder:"Introduce tu correo electrónico",autoComplete:"off"})]}),S("p",{className:"full",children:[p("label",{children:"Contraseña"}),p("input",{type:"password",name:"password",required:!0,placeholder:"Crea una contraseña",autoComplete:"off"})]}),p("p",{className:"full",children:p("input",{className:"submit",type:"submit",name:"submit",required:!0,value:"Iniciar sesión"})})]})]})]}),p(ll,{})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw $r(e)},$r=function(t){return new Error("Firebase Database ("+ig.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},i1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[d],n[c],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},og=function(t){const e=sg(t);return Ac.encodeByteArray(e,!0)},ko=function(t){return og(t).replace(/\./g,"")},To=function(t){try{return Ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){return lg(void 0,t)}function lg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!o1(n)||(t[n]=lg(t[n],e[n]));return t}function o1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=()=>l1().__FIREBASE_DEFAULTS__,u1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&To(t[1]);return e&&JSON.parse(e)},xc=()=>{try{return a1()||u1()||c1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ag=t=>{var e,n;return(n=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},d1=t=>{const e=ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h1=()=>{var t;return(t=xc())===null||t===void 0?void 0:t.config},ug=t=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function p1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function m1(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dg(){return ig.NODE_ADMIN===!0}function g1(){try{return typeof indexedDB=="object"}catch{return!1}}function _1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=v1,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?y1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,r)}}function y1(t,e){return t.replace(w1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const w1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Vi(To(s[0])||""),n=Vi(To(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},E1=function(t){const e=hg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},S1=function(t){const e=hg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Mr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dh(s)&&Dh(o)){if(!Ro(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function I1(t,e){const n=new k1(t,e);return n.subscribe.bind(n)}class k1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");T1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jl),i.error===void 0&&(i.error=Jl),i.complete===void 0&&(i.complete=Jl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jl(){}function Oc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new al;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(A1(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:P1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P1(t){return t===Nn?void 0:t}function A1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new R1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const D1={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},O1=$.INFO,b1={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},M1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=b1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=O1,this._logHandler=M1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const L1=(t,e)=>e.some(n=>t instanceof n);let Oh,bh;function F1(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function U1(){return bh||(bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,hu=new WeakMap,pg=new WeakMap,Zl=new WeakMap,Mc=new WeakMap;function z1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),Mc.set(e,t),e}function B1(t){if(hu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hu.set(t,e)}let fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function j1(t){fu=t(fu)}function W1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ea(this),e,...n);return pg.set(r,e.sort?e.sort():[e]),cn(r)}:U1().includes(t)?function(...e){return t.apply(ea(this),e),cn(fg.get(this))}:function(...e){return cn(t.apply(ea(this),e))}}function H1(t){return typeof t=="function"?W1(t):(t instanceof IDBTransaction&&B1(t),L1(t,F1())?new Proxy(t,fu):t)}function cn(t){if(t instanceof IDBRequest)return z1(t);if(Zl.has(t))return Zl.get(t);const e=H1(t);return e!==t&&(Zl.set(t,e),Mc.set(e,t)),e}const ea=t=>Mc.get(t);function $1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(cn(o.result),a.oldVersion,a.newVersion,cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const V1=["get","getKey","getAll","getAllKeys","count"],q1=["put","add","delete","clear"],ta=new Map;function Mh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ta.get(e))return ta.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=q1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V1.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ta.set(e,s),s}j1(t=>({...t,get:(e,n,r)=>Mh(e,n)||t.get(e,n,r),has:(e,n)=>!!Mh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(K1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function K1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pu="@firebase/app",Lh="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new bc("@firebase/app"),Q1="@firebase/app-compat",Y1="@firebase/analytics-compat",X1="@firebase/analytics",J1="@firebase/app-check-compat",Z1="@firebase/app-check",eE="@firebase/auth",tE="@firebase/auth-compat",nE="@firebase/database",rE="@firebase/database-compat",iE="@firebase/functions",sE="@firebase/functions-compat",oE="@firebase/installations",lE="@firebase/installations-compat",aE="@firebase/messaging",uE="@firebase/messaging-compat",cE="@firebase/performance",dE="@firebase/performance-compat",hE="@firebase/remote-config",fE="@firebase/remote-config-compat",pE="@firebase/storage",mE="@firebase/storage-compat",gE="@firebase/firestore",_E="@firebase/firestore-compat",vE="firebase",yE="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="[DEFAULT]",wE={[pu]:"fire-core",[Q1]:"fire-core-compat",[X1]:"fire-analytics",[Y1]:"fire-analytics-compat",[Z1]:"fire-app-check",[J1]:"fire-app-check-compat",[eE]:"fire-auth",[tE]:"fire-auth-compat",[nE]:"fire-rtdb",[rE]:"fire-rtdb-compat",[iE]:"fire-fn",[sE]:"fire-fn-compat",[oE]:"fire-iid",[lE]:"fire-iid-compat",[aE]:"fire-fcm",[uE]:"fire-fcm-compat",[cE]:"fire-perf",[dE]:"fire-perf-compat",[hE]:"fire-rc",[fE]:"fire-rc-compat",[pE]:"fire-gcs",[mE]:"fire-gcs-compat",[gE]:"fire-fst",[_E]:"fire-fst-compat","fire-js":"fire-js",[vE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,gu=new Map;function EE(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lr(t){const e=t.name;if(gu.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Po.values())EE(n,t);return!0}function Lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dn=new is("app","Firebase",SE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=yE;function mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=h1()),!n)throw dn.create("no-options");const s=Po.get(i);if(s){if(Ro(n,s.options)&&Ro(r,s.config))return s;throw dn.create("duplicate-app",{appName:i})}const o=new x1(i);for(const a of gu.values())o.addComponent(a);const l=new CE(n,r,o);return Po.set(i,l),l}function gg(t=mu){const e=Po.get(t);if(!e&&t===mu)return mg();if(!e)throw dn.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let i=(r=wE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}Lr(new Hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="firebase-heartbeat-database",kE=1,qi="firebase-heartbeat-store";let na=null;function _g(){return na||(na=$1(IE,kE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qi)}}}).catch(t=>{throw dn.create("idb-open",{originalErrorMessage:t.message})})),na}async function TE(t){try{return(await _g()).transaction(qi).objectStore(qi).get(vg(t))}catch(e){if(e instanceof En)$n.warn(e.message);else{const n=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Fh(t,e){try{const r=(await _g()).transaction(qi,"readwrite");return await r.objectStore(qi).put(e,vg(t)),r.done}catch(n){if(n instanceof En)$n.warn(n.message);else{const r=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=1024,RE=30*24*60*60*1e3;class PE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=RE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uh(),{heartbeatsToSend:n,unsentEntries:r}=AE(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uh(){return new Date().toISOString().substring(0,10)}function AE(t,e=NE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return g1()?_1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zh(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){Lr(new Hn("platform-logger",e=>new G1(e),"PRIVATE")),Lr(new Hn("heartbeat",e=>new PE(e),"PRIVATE")),hn(pu,Lh,t),hn(pu,Lh,"esm2017"),hn("fire-js","")}DE("");function Fc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OE=yg,wg=new is("auth","Firebase",yg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new bc("@firebase/auth");function Gs(t,...e){Bh.logLevel<=$.ERROR&&Bh.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Uc(t,...e)}function vt(t,...e){return Uc(t,...e)}function bE(t,e,n){const r=Object.assign(Object.assign({},OE()),{[e]:n});return new is("auth","Firebase",r).create(e,{appName:t.name})}function Uc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wg.create(t,...e)}function D(t,e,...n){if(!t)throw Uc(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gs(e),new Error(e)}function Mt(t,e){t||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Map;function kt(t){Mt(t instanceof Function,"Expected a class definition");let e=jh.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t,e){const n=Lc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ro(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function LE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FE(){return Wh()==="http:"||Wh()==="https:"}function Wh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FE()||p1()||"connection"in navigator)?navigator.onLine:!0}function zE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Dc()||cg()}get(){return UE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=new os(3e4,6e4);function Sg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cl(t,e,n,r,i={}){return Cg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Vr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Eg.fetch()(kg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Cg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BE),e);try{const i=new WE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ds(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ds(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ds(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ds(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bE(t,d,u);bt(t,d)}}catch(i){if(i instanceof En)throw i;bt(t,"network-request-failed")}}async function Ig(t,e,n,r,i={}){const s=await cl(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zc(t.config,i):`${t.config.apiScheme}://${i}`}class WE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),jE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ds(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(t,e){return cl(t,"POST","/v1/accounts:delete",e)}async function $E(t,e){return cl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VE(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=Bc(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Si(ra(i.auth_time)),issuedAtTime:Si(ra(i.iat)),expirationTime:Si(ra(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ra(t){return Number(t)*1e3}function Bc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{const i=To(n);return i?JSON.parse(i):(Gs("Failed to decode base64 JWT payload"),null)}catch(i){return Gs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qE(t){const e=Bc(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&GE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gi(t,$E(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?XE(s.providerUserInfo):[],l=YE(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Tg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function QE(t){const e=Ze(t);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function XE(t){return t.map(e=>{var{providerId:n}=e,r=Fc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(t,e){const n=await Cg(t,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Eg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gi(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VE(this,e)}reload(){return QE(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gi(this,HE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:P,stsTokenManager:A}=n;D(g&&A,e,"internal-error");const x=Ki.fromJSON(this.name,A);D(typeof g=="string",e,"internal-error"),jt(c,e.name),jt(h,e.name),D(typeof w=="boolean",e,"internal-error"),D(typeof k=="boolean",e,"internal-error"),jt(_,e.name),jt(v,e.name),jt(y,e.name),jt(T,e.name),jt(m,e.name),jt(f,e.name);const q=new Ln({uid:g,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:x,createdAt:m,lastLoginAt:f});return P&&Array.isArray(P)&&(q.providerData=P.map(M=>Object.assign({},M))),T&&(q._redirectEventId=T),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ao(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ng.type="NONE";const Hh=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ks(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ks("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(kt(Hh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kt(Hh);const o=Ks(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Ln._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Cr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Cr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dg(e))return"Blackberry";if(Og(e))return"Webos";if(jc(e))return"Safari";if((e.includes("chrome/")||Pg(e))&&!e.includes("edge/"))return"Chrome";if(xg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rg(t=Te()){return/firefox\//i.test(t)}function jc(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pg(t=Te()){return/crios\//i.test(t)}function Ag(t=Te()){return/iemobile/i.test(t)}function xg(t=Te()){return/android/i.test(t)}function Dg(t=Te()){return/blackberry/i.test(t)}function Og(t=Te()){return/webos/i.test(t)}function dl(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZE(t=Te()){var e;return dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eS(){return m1()&&document.documentMode===10}function bg(t=Te()){return dl(t)||xg(t)||Og(t)||Dg(t)||/windows phone/i.test(t)||Ag(t)}function tS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e=[]){let n;switch(t){case"Browser":n=$h(Te());break;case"Worker":n=`${$h(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vh(this),this.idTokenSubscription=new Vh(this),this.beforeStateQueue=new nS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function hl(t){return Ze(t)}class Vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=I1(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iS(t,e,n){const r=hl(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Lg(e),{host:o,port:l}=sS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oS()}function Lg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sS(t){const e=Lg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qh(o)}}}function qh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,e){return Ig(t,"POST","/v1/accounts:signInWithIdp",Sg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="http://localhost";class Vn extends Fg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:lS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ls{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ls{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ls{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e){return Ig(t,"POST","/v1/accounts:signUp",Sg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=Gh(r);return new qn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gh(r);return new qn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends En{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xo(e,n,r,i)}}function zg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,s,e,r):s})}async function uS(t,e,n=!1){const r=await Gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Gi(t,zg(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Bc(s.idToken);D(o,r,"internal-error");const{sub:l}=o;return D(t.uid===l,r,"user-mismatch"),qn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(t,e,n=!1){const r="signIn",i=await zg(t,r,e),s=await qn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hS(t,e,n){const r=hl(t),i=await aS(r,{returnSecureToken:!0,email:e,password:n}),s=await qn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function fS(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function pS(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function mS(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}const Do="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(){const t=Te();return jc(t)||dl(t)}const _S=1e3,vS=10;class jg extends Bg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gS()&&tS(),this.fallbackToPolling=bg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jg.type="LOCAL";const yS=jg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Bg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wg.type="SESSION";const Hg=Wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await wS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Wc("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return window}function SS(t){yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function CS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kS(){return $g()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="firebaseLocalStorageDb",TS=1,Oo="firebaseLocalStorage",qg="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pl(t,e){return t.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function NS(){const t=indexedDB.deleteDatabase(Vg);return new as(t).toPromise()}function vu(){const t=indexedDB.open(Vg,TS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oo,{keyPath:qg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await NS(),e(await vu()))})})}async function Kh(t,e,n){const r=pl(t,!0).put({[qg]:e,value:n});return new as(r).toPromise()}async function RS(t,e){const n=pl(t,!1).get(e),r=await new as(n).toPromise();return r===void 0?null:r.value}function Qh(t,e){const n=pl(t,!0).delete(e);return new as(n).toPromise()}const PS=800,AS=3;class Gg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fl._getInstance(kS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CS(),!this.activeServiceWorker)return;this.sender=new ES(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vu();return await Kh(e,Do,"1"),await Qh(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pl(i,!1).getAll();return new as(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gg.type="LOCAL";const xS=Gg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function OS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DS().appendChild(r)})}function bS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t,e){return e?kt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends Fg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LS(t){return dS(t.auth,new Hc(t),t.bypassAuthState)}function FS(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),cS(n,new Hc(t),t.bypassAuthState)}async function US(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),uS(n,new Hc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LS;case"linkViaPopup":case"linkViaRedirect":return US;case"reauthViaPopup":case"reauthViaRedirect":return FS;default:bt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new os(2e3,1e4);class mr extends Kg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,zS.get())};e()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="pendingRedirect",Qs=new Map;class jS extends Kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qs.get(this.auth._key());if(!e){try{const r=await WS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qs.set(this.auth._key(),e)}return this.bypassAuthState||Qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WS(t,e){const n=VS(e),r=$S(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HS(t,e){Qs.set(t._key(),e)}function $S(t){return kt(t._redirectPersistence)}function VS(t){return Ks(BS,t.config.apiKey,t.name)}async function qS(t,e,n=!1){const r=hl(t),i=MS(r,e),o=await new jS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=10*60*1e3;class KS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yh(e))}saveEventToCache(e){this.cachedEventUids.add(Yh(e)),this.lastProcessedEventTime=Date.now()}}function Yh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e={}){return cl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JS=/^https?/;async function ZS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YS(t);for(const n of e)try{if(eC(n))return}catch{}bt(t,"unauthorized-domain")}function eC(t){const e=_u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JS.test(n))return!1;if(XS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=new os(3e4,6e4);function Xh(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nC(t){return new Promise((e,n)=>{var r,i,s;function o(){Xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xh(),n(vt(t,"network-request-failed"))},timeout:tC.get()})}if(!((i=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yt().gapi)===null||s===void 0)&&s.load)o();else{const l=bS("iframefcb");return yt()[l]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},OS(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Ys=null,e})}let Ys=null;function rC(t){return Ys=Ys||nC(t),Ys}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new os(5e3,15e3),sC="__/auth/iframe",oC="emulator/auth/iframe",lC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uC(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zc(e,oC):`https://${t.config.authDomain}/${sC}`,r={apiKey:e.apiKey,appName:t.name,v:ss},i=aC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vr(r).slice(1)}`}async function cC(t){const e=await rC(t),n=yt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:uC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),l=yt().setTimeout(()=>{s(o)},iC.get());function a(){yt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hC=500,fC=600,pC="_blank",mC="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gC(t,e,n,r=hC,i=fC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},dC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(l=Pg(u)?pC:n),Rg(u)&&(e=e||mC,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(ZE(u)&&l!=="_self")return _C(e||"",l),new Jh(null);const c=window.open(e||"",l,d);D(c,t,"popup-blocked");try{c.focus()}catch{}return new Jh(c)}function _C(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="__/auth/handler",yC="emulator/auth/handler";function Zh(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:i};if(e instanceof Ug){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof ls){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${wC(t)}?${Vr(l).slice(1)}`}function wC({config:t}){return t.emulator?zc(t,yC):`https://${t.authDomain}/${vC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="webStorageSupport";class EC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hg,this._completeRedirectFn=qS,this._overrideRedirectResult=HS}async _openPopup(e,n,r,i){var s;Mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Zh(e,n,r,_u(),i);return gC(e,o,Wc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),SS(Zh(e,n,r,_u(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cC(e),r=new KS(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ia,{type:ia},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ia];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bg()||jc()||dl()}}const SC=EC;var ef="@firebase/auth",tf="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kC(t){Lr(new Hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(t)},d=new rS(l,a,u);return LE(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Lr(new Hn("auth-internal",e=>{const n=hl(e.getProvider("auth").getImmediate());return(r=>new CC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(ef,tf,IC(t)),hn(ef,tf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=5*60,NC=ug("authIdTokenMaxAge")||TC;let nf=null;const RC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NC)return;const i=n==null?void 0:n.token;nf!==i&&(nf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PC(t=gg()){const e=Lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ME(t,{popupRedirectResolver:SC,persistence:[xS,yS,Hg]}),r=ug("authTokenSyncURL");if(r){const s=RC(r);pS(n,s,()=>s(n.currentUser)),fS(n,o=>s(o))}const i=ag("auth");return i&&iS(n,`http://${i}`),n}kC("Browser");var AC="firebase",xC="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(AC,xC,"app");const rf="@firebase/database",sf="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg="";function DC(t){Yg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OC(e)}}catch{}return new bC},Dn=Xg("localStorage"),yu=Xg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new bc("@firebase/database"),MC=function(){let t=1;return function(){return t++}}(),Jg=function(t){const e=N1(t),n=new C1;n.update(e);const r=n.digest();return Ac.encodeByteArray(r)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=us.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let Fn=null,of=!0;const LC=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(kr.logLevel=$.VERBOSE,Fn=kr.log.bind(kr),e&&yu.set("logging_enabled",!0)):typeof t=="function"?Fn=t:(Fn=null,yu.remove("logging_enabled"))},Ce=function(...t){if(of===!0&&(of=!1,Fn===null&&yu.get("logging_enabled")===!0&&LC(!0)),Fn){const e=us.apply(null,t);Fn(e)}},cs=function(t){return function(...e){Ce(t,...e)}},wu=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);kr.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw kr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+us(...t);kr.warn(e)},FC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fr="[MIN_NAME]",Gn="[MAX_NAME]",qr=function(t,e){if(t===e)return 0;if(t===Fr||e===Gn)return-1;if(e===Fr||t===Gn)return 1;{const n=lf(t),r=lf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zC=function(t,e){return t===e?0:t<e?-1:1},si=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},$c=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=$c(t[e[r]]);return n+="}",n},e_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const t_=function(t){C(!Zg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},BC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},WC=new RegExp("^-?(0*)\\d{1,10}$"),HC=-2147483648,$C=2147483647,lf=function(t){if(WC.test(t)){const e=Number(t);if(e>=HC&&e<=$C)return e}return null},Gr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},VC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ci=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Tr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="5",n_="v",r_="s",i_="r",s_="f",o_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,l_="ls",a_="p",Eu="ac",u_="websocket",c_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function KC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function h_(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===u_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===c_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);KC(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return s1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa={},oa={};function qc(t){const e=t.toString();return sa[e]||(sa[e]=new QC),sa[e]}function YC(t,e){const n=t.toString();return oa[n]||(oa[n]=e()),oa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Gr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="start",JC="close",ZC="pLPCommand",eI="pRTLPCB",f_="id",p_="pw",m_="ser",tI="cb",nI="seg",rI="ts",iI="d",sI="dframe",g_=1870,__=30,oI=g_-__,lI=25e3,aI=3e4;class gr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=cs(e),this.stats_=qc(n),this.urlFn=a=>(this.appCheckToken&&(a[Eu]=this.appCheckToken),h_(n,c_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aI)),UC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===af)this.id=l,this.password=a;else if(o===JC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[af]="t",r[m_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[tI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[n_]=Vc,this.transportSessionId&&(r[r_]=this.transportSessionId),this.lastSessionId&&(r[l_]=this.lastSessionId),this.applicationId&&(r[a_]=this.applicationId),this.appCheckToken&&(r[Eu]=this.appCheckToken),typeof location<"u"&&location.hostname&&o_.test(location.hostname)&&(r[i_]=s_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gr.forceAllow_=!0}static forceDisallow(){gr.forceDisallow_=!0}static isAvailable(){return gr.forceAllow_?!0:!gr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BC()&&!jC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=og(n),i=e_(r,oI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[sI]="t",r[f_]=e,r[p_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MC(),window[ZC+this.uniqueCallbackIdentifier]=e,window[eI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[f_]=this.myID,e[p_]=this.myPW,e[m_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+__+r.length<=g_;){const o=this.pendingSegs.shift();r=r+"&"+nI+i+"="+o.seg+"&"+rI+i+"="+o.ts+"&"+iI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(lI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=16384,cI=45e3;let bo=null;typeof MozWebSocket<"u"?bo=MozWebSocket:typeof WebSocket<"u"&&(bo=WebSocket);class ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=cs(this.connId),this.stats_=qc(n),this.connURL=ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[n_]=Vc,typeof location<"u"&&location.hostname&&o_.test(location.hostname)&&(o[i_]=s_),n&&(o[r_]=n),r&&(o[l_]=r),i&&(o[Eu]=i),s&&(o[a_]=s),h_(e,u_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dn.set("previous_websocket_failure",!0);try{let r;dg(),this.mySock=new bo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bo!==null&&!ot.forceDisallow_}static previouslyFailed(){return Dn.isInMemoryStorage||Dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Vi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=e_(n,uI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gr,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let r=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const i=this.transports_=[];for(const s of Qi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=6e4,hI=5e3,fI=10*1024,pI=100*1024,la="t",uf="d",mI="s",cf="r",gI="e",df="o",hf="a",ff="n",pf="p",_I="h";class vI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=cs("c:"+this.id+":"),this.transportManager_=new Qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(la in e){const n=e[la];n===hf?this.upgradeIfSecondaryHealthy_():n===cf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===df&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=si("t",e),r=si("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ff,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=si("t",e),r=si("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=si(la,e);if(uf in e){const r=e[uf];if(n===_I)this.onHandshake_(r);else if(n===ff){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mI?this.onConnectionShutdown_(r):n===cf?this.onReset_(r):n===gI?wu("Server Error: "+r):n===df?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vc!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends y_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mo}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=32,gf=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new X("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _n(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function w_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function E_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function S_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new X(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return Ke(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function C_(t,e){if(_n(t)!==_n(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(_n(t)>_n(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class wI{constructor(e,n){this.errorPrefix_=n,this.parts_=E_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ul(this.parts_[r]);I_(this)}}function EI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ul(e),I_(t)}function SI(t){const e=t.parts_.pop();t.byteLength_-=ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function I_(t){if(t.byteLength_>gf)throw new Error(t.errorPrefix_+"has a key path longer than "+gf+" bytes ("+t.byteLength_+").");if(t.parts_.length>mf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mf+") or object contains a cycle "+Rn(t))}function Rn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends y_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Kc}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=1e3,CI=60*5*1e3,_f=30*1e3,II=1.3,kI=3e4,TI="server_kill",vf=3;class Pt extends v_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Pt.nextPersistentConnectionId_++,this.log_=cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=CI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!dg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(_e(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new al,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Pt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=Mr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||S1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_f)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=E1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wu("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kI&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*II)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new vI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(TI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Fe(c),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],du(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$c(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vf&&(this.reconnectDelay_=_f,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yg.replace(/\./g,"-")]=1,Dc()?e["framework.cordova"]=1:cg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mo.getInstance().currentlyOnline();return du(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Fr,e),i=new z(Fr,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class k_ extends ml{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return qr(e.name,n.name)}isDefinedOn(e){throw $r("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Gn,Os)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Os)}toString(){return".key"}}const Nr=new k_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Oe.EMPTY_NODE,this.right=s??Oe.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Oe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class NI{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bs(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new NI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e){return qr(t.name,e.name)}function Qc(t,e){return qr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su;function PI(t){Su=t}const T_=function(t){return typeof t=="number"?"number:"+t_(t):"string:"+t},N_=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else C(t===Su||t.isEmpty(),"priority of unexpected type.");C(t===Su||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),N_(this.priorityNode_)}static set __childrenNodeConstructor(e){yf=e}static get __childrenNodeConstructor(){return yf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:L(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||_n(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+T_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=t_(this.value_):e+=this.value_,this.lazyHash_=Jg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R_,P_;function AI(t){R_=t}function xI(t){P_=t}class DI extends ml{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?qr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Gn,new de("[PRIORITY-POST]",P_))}makePost(e,n){const r=R_(e);return new z(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ie=new DI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=Math.log(2);class bI{constructor(e){const n=s=>parseInt(Math.log(s)/OI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new fe(h,c.node,fe.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=i(a,_),y=i(_+1,u);return c=t[_],h=n?n(c):c,new fe(h,c.node,fe.BLACK,v,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,y){const T=c-v,m=c;c-=v;const f=i(T+1,m),g=t[T],w=n?n(g):g;_(new fe(w,g.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),T=Math.pow(2,a.count-(v+1));y?h(T,fe.BLACK):(h(T,fe.BLACK),h(T,fe.RED))}return d},o=new bI(t.length),l=s(o);return new Oe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa;const nr={};class Tt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(nr&&Ie,"ChildrenNode.ts has not been loaded"),aa=aa||new Tt({".priority":nr},{".priority":Ie}),aa}get(e){const n=Mr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Nr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Lo(r,e.getCompare()):l=nr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Tt(d,u)}addToIndexes(e,n){const r=No(this.indexes_,(i,s)=>{const o=Mr(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===nr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Lo(l,o.getCompare())}else return nr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Tt(r,this.indexSet_)}removeFromIndexes(e,n){const r=No(this.indexes_,i=>{if(i===nr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Tt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&N_(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return li||(li=new j(new Oe(Qc),null,Tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||li}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?li:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?li:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{C(L(e)!==".priority"||_n(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ie,(o,l)=>{n[o]=l.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+T_(this.getPriority().val())+":"),this.forEachChild(Ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Jg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ds?-1:0}withIndex(e){if(e===Nr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ie),i=n.getIterator(Ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nr?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MI extends j{constructor(){super(new Oe(Qc),j.EMPTY_NODE,Tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const ds=new MI;Object.defineProperties(z,{MIN:{value:new z(Fr,j.EMPTY_NODE)},MAX:{value:new z(Gn,ds)}});k_.__EMPTY_NODE=j.EMPTY_NODE;de.__childrenNodeConstructor=j;PI(ds);xI(ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=!0;function ge(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ge(e))}if(!(t instanceof Array)&&LI){const n=[];let r=!1;if(Je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return j.EMPTY_NODE;const s=Lo(n,RI,o=>o.name,Qc);if(r){const o=Lo(n,Ie.getCompare());return new j(s,ge(e),new Tt({".priority":o},{".priority":Ie}))}else return new j(s,ge(e),Tt.Default)}else{let n=j.EMPTY_NODE;return Je(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ge(e))}}AI(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI extends ml{constructor(e){super(),this.indexPath_=e,C(!U(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?qr(e.name,n.name):s}makePost(e,n){const r=ge(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,ds);return new z(Gn,e)}toString(){return E_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends ml{compare(e,n){const r=e.node.compareTo(n.node);return r===0?qr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ge(e);return new z(n,r)}toString(){return".value"}}const zI=new UI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){return{type:"value",snapshotNode:t}}function jI(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function WI(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Yc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ef(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===zI?n="$value":t.index_===Nr?n="$key":(C(t.index_ instanceof FI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=_e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+_e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=_e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends v_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Ef(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Mr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Fo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ef(e._queryParams),r=e._path.toString(),i=new al;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Vi(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(){return{value:null,children:new Map}}function A_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,Uo());const i=t.children.get(r);e=Q(e),A_(i,e,n)}}function Cu(t,e,n){t.value!==null?n(e,t.value):VI(t,(r,i)=>{const s=new X(e.toString()+"/"+r);Cu(i,s,n)})}function VI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=10*1e3,GI=30*1e3,KI=5*60*1e3;class QI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qI(e);const r=Cf+(GI-Cf)*Math.random();Ci(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*KI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function x_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function D_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function O_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mt.ACK_USER_WRITE,this.source=x_()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new zo(H(),n,this.revert)}}else return C(L(this.path)===e,"operationForChild called for unrelated child."),new zo(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mt.OVERWRITE}operationForChild(e){return U(this.path)?new Kn(this.source,H(),this.snap.getImmediateChild(e)):new Kn(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Kn(this.source,H(),n.value):new Yi(this.source,H(),n)}else return C(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yi(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function YI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(HI(o.childName,o.snapshotNode))}),ai(t,i,"child_removed",e,r,n),ai(t,i,"child_added",e,r,n),ai(t,i,"child_moved",s,r,n),ai(t,i,"child_changed",e,r,n),ai(t,i,"value",e,r,n),i}function ai(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>JI(t,l,a)),o.forEach(l=>{const a=XI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function XI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JI(t,e,n){if(e.childName==null||n.childName==null)throw $r("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t,e){return{eventCache:t,serverCache:e}}function Ii(t,e,n,r){return b_(new Xc(e,n,r),t.serverCache)}function M_(t,e,n,r){return b_(t.eventCache,new Xc(e,n,r))}function Iu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;const ZI=()=>(ua||(ua=new Oe(zC)),ua);class K{constructor(e,n=ZI()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return Je(e,(r,i)=>{n=n.set(new X(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(U(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:le(new X(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new K(null)}}set(e,n){if(U(e))return new K(n,this.children);{const r=L(e),s=(this.children.get(r)||new K(null)).set(Q(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(U(e))return n;{const r=L(e),s=(this.children.get(r)||new K(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),le(n,i),r):new K(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new K(null))}}function ki(t,e,n){if(U(e))return new ct(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ke(i,e);return s=s.updateChild(o,n),new ct(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new ct(s)}}}function If(t,e,n){let r=t;return Je(n,(i,s)=>{r=ki(r,le(e,i),s)}),r}function kf(t,e){if(U(e))return ct.empty();{const n=t.writeTree_.setTree(e,new K(null));return new ct(n)}}function ku(t,e){return Zn(t,e)!=null}function Zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function Tf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function fn(t,e){if(U(e))return t;{const n=Zn(t,e);return n!=null?new ct(new K(n)):new ct(t.writeTree_.subtree(e))}}function Tu(t){return t.writeTree_.isEmpty()}function Ur(t,e){return L_(H(),t.writeTree_,e)}function L_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=L_(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t,e){return W_(e,t)}function ek(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ki(t.visibleWrites,e,n)),t.lastWriteId=r}function tk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&rk(l,r.path)?i=!1:lt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return ik(t),!0;if(r.snap)t.visibleWrites=kf(t.visibleWrites,r.path);else{const l=r.children;Je(l,a=>{t.visibleWrites=kf(t.visibleWrites,le(r.path,a))})}return!0}else return!1}function rk(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(le(t.path,n),e))return!0;return!1}function ik(t){t.visibleWrites=U_(t.allWrites,sk,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sk(t){return t.visible}function U_(t,e,n){let r=ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)lt(n,o)?(l=Ke(n,o),r=ki(r,l,s.snap)):lt(o,n)&&(l=Ke(o,n),r=ki(r,H(),s.snap.getChild(l)));else if(s.children){if(lt(n,o))l=Ke(n,o),r=If(r,l,s.children);else if(lt(o,n))if(l=Ke(o,n),U(l))r=If(r,H(),s.children);else{const a=Mr(s.children,L(l));if(a){const u=a.getChild(Q(l));r=ki(r,H(),u)}}}else throw $r("WriteRecord should have .snap or .children")}}return r}function z_(t,e,n,r,i){if(!r&&!i){const s=Zn(t.visibleWrites,e);if(s!=null)return s;{const o=fn(t.visibleWrites,e);if(Tu(o))return n;if(n==null&&!ku(o,H()))return null;{const l=n||j.EMPTY_NODE;return Ur(o,l)}}}else{const s=fn(t.visibleWrites,e);if(!i&&Tu(s))return n;if(!i&&n==null&&!ku(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},l=U_(t.allWrites,o,e),a=n||j.EMPTY_NODE;return Ur(l,a)}}}function ok(t,e,n){let r=j.EMPTY_NODE;const i=Zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fn(t.visibleWrites,e);return n.forEachChild(Ie,(o,l)=>{const a=Ur(fn(s,new X(o)),l);r=r.updateImmediateChild(o,a)}),Tf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fn(t.visibleWrites,e);return Tf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function lk(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(ku(t.visibleWrites,s))return null;{const o=fn(t.visibleWrites,s);return Tu(o)?i.getChild(n):Ur(o,i.getChild(n))}}function ak(t,e,n,r){const i=le(e,n),s=Zn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fn(t.visibleWrites,i);return Ur(o,r.getNode().getImmediateChild(n))}else return null}function uk(t,e){return Zn(t.visibleWrites,e)}function ck(t,e,n,r,i,s,o){let l;const a=fn(t.visibleWrites,e),u=Zn(a,H());if(u!=null)l=u;else if(n!=null)l=Ur(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function dk(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function Nu(t,e,n,r){return z_(t.writeTree,t.treePath,e,n,r)}function B_(t,e){return ok(t.writeTree,t.treePath,e)}function Nf(t,e,n,r){return lk(t.writeTree,t.treePath,e,n,r)}function Bo(t,e){return uk(t.writeTree,le(t.treePath,e))}function hk(t,e,n,r,i,s){return ck(t.writeTree,t.treePath,e,n,r,i,s)}function Jc(t,e,n){return ak(t.writeTree,t.treePath,e,n)}function j_(t,e){return W_(le(t.treePath,e),t.writeTree)}function W_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,wf(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,WI(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,jI(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,wf(r,e.snapshotNode,i.oldSnap));else throw $r("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const H_=new pk;class Zc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qn(this.viewCache_),s=hk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function mk(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gk(t,e,n,r,i){const s=new fk;let o,l;if(n.type===mt.OVERWRITE){const u=n;u.source.fromUser?o=Ru(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=jo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===mt.MERGE){const u=n;u.source.fromUser?o=vk(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Pu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===mt.ACK_USER_WRITE){const u=n;u.revert?o=Ek(t,e,u.path,r,i,s):o=yk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===mt.LISTEN_COMPLETE)o=wk(t,e,n.path,r,s);else throw $r("Unknown operation type: "+n.type);const a=s.getChanges();return _k(e,o,a),{viewCache:o,changes:a}}function _k(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Iu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(BI(Iu(e)))}}function $_(t,e,n,r,i,s){const o=e.eventCache;if(Bo(r,n)!=null)return e;{let l,a;if(U(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Qn(e),d=u instanceof j?u:j.EMPTY_NODE,c=B_(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Nu(r,Qn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){C(_n(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Nf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Nf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Jc(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ii(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function jo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=L(n);if(!a.isCompleteForPath(n)&&_n(n)>1)return e;const v=Q(n),T=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(a.getNode(),T):u=d.updateChild(a.getNode(),_,T,v,H_,null)}const c=M_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new Zc(i,c,s);return $_(t,c,n,i,h,l)}function Ru(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Zc(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ii(e,u,!0,t.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ii(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Q(n),_=l.getNode().getImmediateChild(c);let v;if(U(h))v=r;else{const y=d.getCompleteChild(c);y!=null?w_(h)===".priority"&&y.getChild(S_(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=j.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=Ii(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Rf(t,e){return t.eventCache.isCompleteForChild(e)}function vk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=le(n,a);Rf(e,L(d))&&(l=Ru(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=le(n,a);Rf(e,L(d))||(l=Ru(t,l,d,u,i,s,o))}),l}function Pf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Pu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new K(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=Pf(t,_,h);a=jo(t,a,new X(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const _=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),y=Pf(t,v,h);a=jo(t,a,new X(c),y,i,s,o,l)}}),a}function yk(t,e,n,r,i,s,o){if(Bo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return jo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new K(null);return a.getNode().forEachChild(Nr,(d,c)=>{u=u.set(new X(d),c)}),Pu(t,e,n,u,i,s,l,o)}else return e}else{let u=new K(null);return r.foreach((d,c)=>{const h=le(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Pu(t,e,n,u,i,s,l,o)}}function wk(t,e,n,r,i){const s=e.serverCache,o=M_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return $_(t,o,n,r,H_,i)}function Ek(t,e,n,r,i,s){let o;if(Bo(r,n)!=null)return e;{const l=new Zc(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||L(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Nu(r,Qn(e));else{const c=e.serverCache.getNode();C(c instanceof j,"serverChildren would be complete if leaf node"),d=B_(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=L(n);let c=Jc(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Q(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,j.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nu(r,Qn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Bo(r,H())!=null,Ii(e,u,o,t.filter.filtersNodes())}}function Sk(t,e){const n=Qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function Af(t,e,n,r){e.type===mt.MERGE&&e.source.queryId!==null&&(C(Qn(t.viewCache_),"We should always have a full cache before handling merges"),C(Iu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=gk(t.processor_,i,e,n,r);return mk(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ck(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ck(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return YI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf;function Ik(t){C(!xf,"__referenceConstructor has already been defined"),xf=t}function ed(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),Af(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Af(o,e,n,r));return s}}function td(t,e){let n=null;for(const r of t.views.values())n=n||Sk(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;function kk(t){C(!Df,"__referenceConstructor has already been defined"),Df=t}class Of{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=dk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function V_(t,e,n,r,i){return ek(t.pendingWriteTree_,e,n,r,i),i?_l(t,new Kn(x_(),e,n)):[]}function On(t,e,n=!1){const r=tk(t.pendingWriteTree_,e);if(nk(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set(H(),!0):Je(r.children,o=>{s=s.set(new X(o),!0)}),_l(t,new zo(r.path,s,n))}else return[]}function gl(t,e,n){return _l(t,new Kn(D_(),e,n))}function Tk(t,e,n){const r=K.fromObject(n);return _l(t,new Yi(D_(),e,r))}function Nk(t,e,n,r){const i=K_(t,r);if(i!=null){const s=Q_(i),o=s.path,l=s.queryId,a=Ke(o,e),u=new Kn(O_(l),a,n);return Y_(t,o,u)}else return[]}function Rk(t,e,n,r){const i=K_(t,r);if(i){const s=Q_(i),o=s.path,l=s.queryId,a=Ke(o,e),u=K.fromObject(n),d=new Yi(O_(l),a,u);return Y_(t,o,d)}else return[]}function nd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ke(o,e),u=td(l,a);if(u)return u});return z_(i,e,s,n,!0)}function _l(t,e){return q_(e,t.syncPointTree_,null,F_(t.pendingWriteTree_,H()))}function q_(t,e,n,r){if(U(t.path))return G_(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=td(i,H()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=j_(r,o);s=s.concat(q_(l,a,u,d))}return i&&(s=s.concat(ed(i,t,r,n))),s}}function G_(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=td(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=j_(r,o),d=t.operationForChild(o);d&&(s=s.concat(G_(d,l,a,u)))}),i&&(s=s.concat(ed(i,t,r,n))),s}function K_(t,e){return t.tagToQueryMap.get(e)}function Q_(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function Y_(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=F_(t.pendingWriteTree_,e);return ed(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rd(n)}node(){return this.node_}}class id{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new id(this.syncTree_,n)}node(){return nd(this.syncTree_,this.path_)}}const Pk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bf=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ak(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xk(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ak=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},xk=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Dk=function(t,e,n,r){return sd(e,new id(n,t),r)},X_=function(t,e,n){return sd(t,new rd(e),n)};function sd(t,e,n){const r=t.getPriority().val(),i=bf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=bf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(Ie,(l,a)=>{const u=sd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ld(t,e){let n=e instanceof X?e:new X(e),r=t,i=L(n);for(;i!==null;){const s=Mr(r.node.children,i)||{children:{},childCount:0};r=new od(i,r,s),n=Q(n),i=L(n)}return r}function Kr(t){return t.node.value}function J_(t,e){t.node.value=e,Au(t)}function Z_(t){return t.node.childCount>0}function Ok(t){return Kr(t)===void 0&&!Z_(t)}function vl(t,e){Je(t.node.children,(n,r)=>{e(new od(n,t,r))})}function ev(t,e,n,r){n&&!r&&e(t),vl(t,i=>{ev(i,e,!0,r)}),n&&r&&e(t)}function bk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function hs(t){return new X(t.parent===null?t.name:hs(t.parent)+"/"+t.name)}function Au(t){t.parent!==null&&Mk(t.parent,t.name,t)}function Mk(t,e,n){const r=Ok(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Au(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Au(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=/[\[\].#$\/\u0000-\u001F\u007F]/,Fk=/[\[\].#$\u0000-\u001F\u007F]/,ca=10*1024*1024,tv=function(t){return typeof t=="string"&&t.length!==0&&!Lk.test(t)},nv=function(t){return typeof t=="string"&&t.length!==0&&!Fk.test(t)},Uk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nv(t)},zk=function(t,e,n,r){r&&e===void 0||ad(Oc(t,"value"),e,n)},ad=function(t,e,n){const r=n instanceof X?new wI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Rn(r)+" with contents = "+e.toString());if(Zg(e))throw new Error(t+"contains "+e.toString()+" "+Rn(r));if(typeof e=="string"&&e.length>ca/3&&ul(e)>ca)throw new Error(t+"contains a string greater than "+ca+" utf8 bytes "+Rn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EI(r,o),ad(t,l,r),SI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Rn(r)+" in addition to actual children.")}},rv=function(t,e,n,r){if(!(r&&n===void 0)&&!nv(n))throw new Error(Oc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Bk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rv(t,e,n,r)},jk=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Wk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Uk(n))throw new Error(Oc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iv(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!C_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ft(t,e,n){iv(t,n),$k(t,r=>lt(r,e)||lt(e,r))}function $k(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Vk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Vk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Fn&&Ce("event: "+n.toString()),Gr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="repo_interrupt",Gk=25;class Kk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uo(),this.transactionQueueTree_=new od,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qk(t,e,n){if(t.stats_=qc(t.repoInfo_),t.forceRestClient_||VC())t.server_=new Fo(t.repoInfo_,(r,i,s,o)=>{Mf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Lf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pt(t.repoInfo_,e,(r,i,s,o)=>{Mf(t,r,i,s,o)},r=>{Lf(t,r)},r=>{Xk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=YC(t.repoInfo_,()=>new QI(t.stats_,t.server_)),t.infoData_=new $I,t.infoSyncTree_=new Of({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=gl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),cd(t,"connected",!1),t.serverSyncTree_=new Of({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ft(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Yk(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ud(t){return Pk({timestamp:Yk(t)})}function Mf(t,e,n,r,i){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=No(n,u=>ge(u));o=Rk(t.serverSyncTree_,s,a,i)}else{const a=ge(n);o=Nk(t.serverSyncTree_,s,a,i)}else if(r){const a=No(n,u=>ge(u));o=Tk(t.serverSyncTree_,s,a)}else{const a=ge(n);o=gl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=yl(t,s)),Ft(t.eventQueue_,l,o)}function Lf(t,e){cd(t,"connected",e),e===!1&&Zk(t)}function Xk(t,e){Je(e,(n,r)=>{cd(t,n,r)})}function cd(t,e,n){const r=new X("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(r,i);const s=gl(t.infoSyncTree_,r,i);Ft(t.eventQueue_,r,s)}function sv(t){return t.nextWriteId_++}function Jk(t,e,n,r,i){dd(t,"set",{path:e.toString(),value:n,priority:r});const s=ud(t),o=ge(n,r),l=nd(t.serverSyncTree_,e),a=X_(o,l,s),u=sv(t),d=V_(t.serverSyncTree_,e,a,u,!0);iv(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||Fe("set at "+e+" failed: "+h);const y=On(t.serverSyncTree_,u,!v);Ft(t.eventQueue_,e,y),tT(t,i,h,_)});const c=cv(t,e);yl(t,c),Ft(t.eventQueue_,c,[])}function Zk(t){dd(t,"onDisconnectEvents");const e=ud(t),n=Uo();Cu(t.onDisconnect_,H(),(i,s)=>{const o=Dk(i,s,t.serverSyncTree_,e);A_(n,i,o)});let r=[];Cu(n,H(),(i,s)=>{r=r.concat(gl(t.serverSyncTree_,i,s));const o=cv(t,i);yl(t,o)}),t.onDisconnect_=Uo(),Ft(t.eventQueue_,H(),r)}function eT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qk)}function dd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function tT(t,e,n,r){e&&Gr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ov(t,e,n){return nd(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function hd(t,e=t.transactionQueueTree_){if(e||wl(t,e),Kr(e)){const n=av(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nT(t,hs(e),n)}else Z_(e)&&vl(e,n=>{hd(t,n)})}function nT(t,e,n){const r=n.map(u=>u.currentWriteId),i=ov(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ke(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{dd(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(On(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();wl(t,ld(t.transactionQueueTree_,e)),hd(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Gr(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Fe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}yl(t,e)}},o)}function yl(t,e){const n=lv(t,e),r=hs(n),i=av(t,n);return rT(t,i,r),r}function rT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ke(n,a.path);let d=!1,c;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Gk)d=!0,c="maxretry",i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0));else{const h=ov(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){ad("transaction failed: Data returned ",_,a.path);let v=ge(_);typeof _=="object"&&_!=null&&zt(_,".priority")||(v=v.updatePriority(h.getPriority()));const T=a.currentWriteId,m=ud(t),f=X_(v,h,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=sv(t),o.splice(o.indexOf(T),1),i=i.concat(V_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(On(t.serverSyncTree_,T,!0))}else d=!0,c="nodata",i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}wl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Gr(r[l]);hd(t,t.transactionQueueTree_)}function lv(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&Kr(r)===void 0;)r=ld(r,n),e=Q(e),n=L(e);return r}function av(t,e){const n=[];return uv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function uv(t,e,n){const r=Kr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);vl(e,i=>{uv(t,i,n)})}function wl(t,e){const n=Kr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,J_(e,n.length>0?n:void 0)}vl(e,r=>{wl(t,r)})}function cv(t,e){const n=hs(lv(t,e)),r=ld(t.transactionQueueTree_,e);return bk(r,i=>{da(t,i)}),da(t,r),ev(r,i=>{da(t,i)}),n}function da(t,e){const n=Kr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(On(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?J_(e,void 0):n.length=s+1,Ft(t.eventQueue_,hs(e),i);for(let o=0;o<r.length;o++)Gr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ff=function(t,e){const n=oT(t),r=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new d_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new X(n.pathString)}},oT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=iT(t.substring(d,c)));const h=sT(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:w_(this._path)}get ref(){return new er(this._repo,this._path)}get _queryIdentifier(){const e=Sf(this._queryParams),n=$c(e);return n==="{}"?"default":n}get _queryObject(){return Sf(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof fd))return!1;const n=this._repo===e._repo,r=C_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yI(this._path)}}class er extends fd{constructor(e,n){super(e,n,new Yc,!1)}get parent(){const e=S_(this._path);return e===null?null:new er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function lT(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?aT(t._root,e):t._root}function aT(t,e){return t=Ze(t),L(t._path)===null?Bk("child","path",e,!1):rv("child","path",e,!1),new er(t._repo,le(t._path,e))}function uT(t,e){t=Ze(t),jk("set",t._path),zk("set",e,t._path,!1);const n=new al;return Jk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}Ik(er);kk(er);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="FIREBASE_DATABASE_EMULATOR_HOST",xu={};let dT=!1;function hT(t,e,n,r){t.repoInfo_=new d_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function fT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ff(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[cT]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Ff(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Tr(Tr.OWNER):new GC(t.name,t.options,e);Wk("Invalid Firebase Database URL",o),U(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=mT(l,t,d,new qC(t.name,n));return new gT(c,t)}function pT(t,e){const n=xu[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eT(t),delete n[t.key]}function mT(t,e,n,r){let i=xu[e.name];i||(i={},xu[e.name]=i);let s=i[t.toURLString()];return s&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Kk(t,dT,n,r),i[t.toURLString()]=s,s}class gT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new er(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function _T(t=gg(),e){const n=Lc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=d1("database");r&&vT(n,...r)}return n}function vT(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Tr(Tr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:f1(r.mockUserToken,t.app.options.projectId);s=new Tr(o)}hT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t){DC(ss),Lr(new Hn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return fT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),hn(rf,sf,t),hn(rf,sf,"esm2017")}Pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yT();const wT={apiKey:"AIzaSyBla8kpxl-RSy3bx96wP3sdj5zyyAnvFhg",authDomain:"psurveys-web.firebaseapp.com",projectId:"psurveys-web",storageBucket:"psurveys-web.appspot.com",messagingSenderId:"382207510424",appId:"1:382207510424:web:27a4be1d7ab609deb98ded",databaseURL:"https://psurveys-web-default-rtdb.firebaseio.com/"},dv=mg(wT),hv=PC(dv),ET=_T(dv),ST=()=>{const[t,e]=I.useState({nombre:"",apellidos:"",correo:"",matricula:"",escuela:"",carrera:"",genero:"",password:"",passwordrepeat:"",rol:"estudiante"}),n=({target:{name:a,value:u}})=>{e({...t,[a]:u})},r=tp(),[i,s]=I.useState();function o(a,u,d,c,h,_,v,y,T){uT(lT(ET,"users/"+a),{nombre:u,apellidos:d,correo:c,matricula:h,escuela:_,carrera:v,genero:y,rol:T})}async function l(a){a.preventDefault(),s(""),await hS(hv,t.correo,t.password).then(u=>{const d=u.user;console.log(d),o(d.uid,t.nombre,t.apellidos,t.correo,t.matricula,t.escuela,t.carrera,t.genero,t.rol),alert("¡Registro exitoso!"),r("/estudiante")}).catch(u=>{s(u.message),console.error(u)})}return S(Ho,{children:[p(ol,{}),S("section",{className:"section-padding",children:[p(Pc,{}),S("div",{className:"form-container",children:[S("div",{className:"register-title",children:[p("h1",{children:"Regístrate"}),p("p",{children:"como estudiante"})]}),S("form",{className:"formulario",onSubmit:l,children:[S("p",{children:[p("label",{children:"Nombre"}),p("input",{type:"text",name:"nombre",required:!0,placeholder:"Introduce tu nombre",autoComplete:"off",onChange:n})]}),S("p",{children:[p("label",{children:"Apellidos"}),p("input",{type:"text",name:"apellidos",required:!0,placeholder:"Introduce tus apellidos",autoComplete:"off",onChange:n})]}),S("p",{children:[p("label",{children:"Correo electrónico"}),p("input",{type:"email",name:"correo",required:!0,placeholder:"Introduce tu correo electrónico",autoComplete:"off",onChange:n})]}),S("p",{children:[p("label",{children:"Matrícula"}),p("input",{type:"number",name:"matricula",required:!0,placeholder:"Introduce tu matrícula",autoComplete:"off",onChange:n})]}),S("p",{className:"full",children:[p("label",{children:"Escuela"}),p("input",{type:"text",name:"escuela",required:!0,placeholder:"Introduce el nombre de tu escuela",autoComplete:"off",onChange:n})]}),S("p",{className:"full",children:[p("label",{children:"Carrera"}),p("input",{type:"text",name:"carrera",required:!0,placeholder:"Introduce el nombre de tu carrera",autoComplete:"off",onChange:n})]}),S("p",{className:"full",children:[p("label",{children:"Género"}),p("input",{type:"text",name:"genero",required:!0,placeholder:"Seleccione su género",autoComplete:"off",onChange:n})]}),S("p",{children:[p("label",{children:"Contraseña"}),p("input",{type:"password",name:"password",required:!0,placeholder:"Crea una contraseña",autoComplete:"off",onChange:n})]}),S("p",{children:[p("label",{children:"Confirmar contraseña"}),p("input",{type:"password",name:"passwordrepeat",required:!0,placeholder:"Vuelve a escribir tu contraseña",autoComplete:"off",onChange:n})]}),p("p",{className:"error full",children:i}),p("p",{className:"full",children:p("input",{className:"submit",type:"submit",name:"submit",required:!0,value:"Registrarse"})})]})]})]}),p(ll,{})]})};const CT=()=>p("section",{className:"body-404 disable-selection",children:S("div",{className:"stars",children:[S("div",{className:"central-body",children:[p("h1",{className:"text-404",children:"404"}),p("p",{className:"text-404-child",children:"Página no encontrada"}),p("br",{}),p("br",{}),p($e,{to:"/",className:"btn-regresar",children:"Regresar al Inicio"})]}),S("div",{className:"objects",children:[p("img",{className:"object_rocket",src:"http://salehriaz.com/404Page/img/rocket.svg",width:"40px"}),S("div",{className:"earth-moon",children:[p("img",{className:"object_earth",src:"http://salehriaz.com/404Page/img/earth.svg",width:"100px"}),p("img",{className:"object_moon",src:"http://salehriaz.com/404Page/img/moon.svg",width:"80px"})]}),p("div",{className:"box_astronaut",children:p("img",{className:"object_astronaut",src:"http://salehriaz.com/404Page/img/astronaut.svg",width:"140px"})})]}),S("div",{className:"glowing_stars",children:[p("div",{className:"star"}),p("div",{className:"star"}),p("div",{className:"star"}),p("div",{className:"star"})]})]})});var fv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Uf=Nt.createContext&&Nt.createContext(fv),pn=globalThis&&globalThis.__assign||function(){return pn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},pn.apply(this,arguments)},IT=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function pv(t){return t&&t.map(function(e,n){return Nt.createElement(e.tag,pn({key:n},e.attr),pv(e.child))})}function Sn(t){return function(e){return Nt.createElement(kT,pn({attr:pn({},t.attr)},e),pv(t.child))}}function kT(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=IT(t,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),t.className&&(a=(a?a+" ":"")+t.className),Nt.createElement("svg",pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:pn(pn({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Nt.createElement("title",null,s),t.children)};return Uf!==void 0?Nt.createElement(Uf.Consumer,null,function(n){return e(n)}):e(fv)}function TT(t){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"}}]})(t)}function NT(t){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"}}]})(t)}function RT(t){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792-6.223-16.89 1.877-.692 6.223 16.89z"}}]})(t)}function PT(t){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13v-2H7V8l-5 4 5 4v-3z"}},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}}]})(t)}function AT(t){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"}}]})(t)}function xT(t){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"}}]})(t)}function DT(t){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(t)}function OT(t){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(t)}const bT=t=>(Nt.useEffect(()=>{const e=document.querySelector("body"),n=e.querySelector(".sidebar"),r=e.querySelector(".toggle"),i=e.querySelector(".search-box"),s=e.querySelector(".mode"),o=e.querySelector(".mode-text");r.addEventListener("click",()=>{n.classList.toggle("close")}),i.addEventListener("click",()=>{n.classList.remove("close")}),s.addEventListener("click",()=>{e.classList.toggle("dark"),e.classList.contains("dark")?o.innerText="Light Mode":o.innerText="Dark Mode"})},[]),S(Ho,{children:[S("nav",{className:"sidebar",children:[S("div",{className:"header",children:[S("div",{className:"image-text",children:[p("span",{className:"image",children:p("img",{src:rg,alt:"Logo de Psurveys"})}),S("div",{className:"text header-text",children:[p("span",{className:"name",children:t.name}),p("span",{className:"profession",children:"Estudiante"})]})]}),p(TT,{className:"toggle"})]}),p("div",{className:"menu-bar",children:p("div",{className:"menu-side",children:S("ul",{className:"menu-links",children:[S("li",{className:"search-box",children:[p(DT,{className:"icon"}),p("input",{type:"search",placeholder:"Buscar"})]}),p("li",{className:"nav-link",children:S($e,{to:"inicio",children:[p(NT,{className:"icon"}),p("span",{className:"text nav-text",children:"Inicio"})]})}),p("li",{className:"nav-link",children:S($e,{to:"Encuestas",children:[p(RT,{className:"icon"}),p("span",{className:"text nav-text",children:"Encuestas"})]})}),S("div",{className:"bottom-content",children:[p("li",{className:"",children:S($e,{to:"#",children:[p(PT,{className:"icon"}),p("span",{className:"text nav-text",children:"Cerrar Sesión"})]})}),S("li",{className:"mode",children:[S("div",{className:"moon-sun",children:[p(AT,{className:"icon moon"}),p(OT,{className:"icon sun"})]}),p("span",{className:"mode-text text",children:"Dark Mode"}),p("div",{className:"toggle-switch",children:p("span",{className:"switch"})})]})]})]})})})]}),p("div",{className:"home",children:p("section",{className:"text",children:p(Uy,{})})})]}));const MT="/assets/svg-student-3523e34a.svg",zf=()=>S("div",{className:"section-estudiante",children:[p("picture",{className:"imagen-inicio",children:p("img",{src:MT})}),p("h1",{children:"Tablero de Estudiante"})]});const LT="/assets/svg-card-92c2485f.svg",FT=t=>S("div",{className:"card",children:[p("img",{src:LT}),p("p",{children:t.title}),p("br",{}),S("button",{children:[p(xT,{}),"Responder"]})]}),UT={1:{name:"Cuestionario Honey – Alonso de Estilos de Aprendizaje",numberOfQuestions:80,time:"1hr"},2:{name:"Canal de Aprendizaje (Visual, Auditivo, Kinestésico)",numberOfQuestions:27,time:"30min"},3:{name:"Otro test cualquiera (prueba)",numberOfQuestions:30,time:"35min"}};function mv(t){return Object.values(t)}const zT=()=>{const t=mv(UT);return S("div",{className:"section-estudiante-encuestas",children:[p("h1",{children:"Encuestas Estudiante"}),p("div",{className:"container-cards",children:t.map((e,n)=>p(FT,{title:e.name},n))})]})};function BT(t){const[e,n]=I.useState(t.test),[r,i]=I.useState(1);function s(){return e.slice(5*(r-1),5*r)}function o(){const a=s();return S("div",{className:"container-quetions",children:[S("div",{className:"instrucciones",children:[p("h3",{children:"INSTRUCCIONES:"}),p("p",{children:"No hay respuestas correctas o erróneas. Será útil en la medida que seas sincero/a en tus respuestas."}),p("p",{children:"Si estás más de acuerdo que en desacuerdo con la sentencia pon un signo más (+),"}),p("p",{children:"Si, por el contrario, estás más en desacuerdo que de acuerdo, pon un signo menos (-)."})]}),a.map((u,d)=>S("div",{className:"pregunta",children:[p("h2",{children:u.number+".- "+u.pregunta}),p("input",{className:"check option-input radio",type:"radio",name:d}),p("label",{htmlFor:d,children:u.respuestas.r1}),p("input",{className:"option-input radio",type:"radio",name:d}),p("label",{htmlFor:d,children:u.respuestas.r2})]},u.number))]})}function l(){return S("div",{className:"botones-paginacion",children:[p("button",{onClick:()=>i(r-1),disabled:r===1,children:"Anterior"}),p("button",{onClick:()=>i(r+1),disabled:r===Math.ceil(e.length/5),children:"Siguiente"})]})}return S("div",{children:[p(o,{}),p(l,{})]})}const jT={1:{number:1,pregunta:"Tengo fama de decir lo que pienso claramente y sin rodeos.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},2:{number:2,pregunta:"Estoy seguro/a de lo que es bueno y lo que es malo, lo que está bien y lo que está mal.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},3:{number:3,pregunta:"Muchas veces actúo sin mirar las consecuencias.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},4:{number:4,pregunta:"Normalmente trato de resolver los problemas metódicamente y paso a paso.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},5:{number:5,pregunta:" Creo que los formalismos coartan y limitan la actuación libre de las personas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},6:{number:6,pregunta:"Me interesa saber cuáles son los sistemas de valores de los demás y con qué criterios actúan.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},7:{number:7,pregunta:"Pienso que el actuar intuitivamente puede ser siempre tan válido como actuar reflexivamente.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},8:{number:8,pregunta:"Creo que lo más importante es que las cosas funcionen.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},9:{number:9,pregunta:"Procuro estar al tanto de lo que ocurre aquí y ahora.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},10:{number:10,pregunta:"Disfruto cuando tengo tiempo para preparar mi trabajo y realizarlo a conciencia.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},11:{number:11,pregunta:"Estoy a gusto siguiendo un orden en las comidas, en el estudio, haciendo ejercicio regularmente.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},12:{number:12,pregunta:"Cuando escucho una nueva idea enseguida comienzo a pensar cómo ponerla en práctica.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},13:{number:13,pregunta:"Prefiero las ideas originales y novedosas aunque no sean prácticas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},14:{number:14,pregunta:"Admito y me ajusto a las normas sólo si me sirven para lograr mis objetivos.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},15:{number:15,pregunta:"Normalmente encajo bien con personas reflexivas, y me cuesta sintonizar con personas demasiado espontáneas, imprevisibles.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},16:{number:16,pregunta:"Escucho con más frecuencia que hablo.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},17:{number:17,pregunta:"Prefiero las cosas estructuradas a las desordenadas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},18:{number:18,pregunta:"Cuando poseo cualquier información, trato de interpretarla bien antes de manifestar alguna conclusión.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},19:{number:19,pregunta:"Antes de hacer algo estudio con cuidado sus ventajas e inconvenientes.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},20:{number:20,pregunta:"Me entusiasmo con el reto de hacer algo nuevo y diferente.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},21:{number:21,pregunta:"Casi siempre procuro ser coherente con mis criterios y sistemas de valores. Tengo principios y los sigo.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},22:{number:22,pregunta:"Cuando hay una discusión no me gusta ir con rodeos.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},23:{number:23,pregunta:"Me disgusta implicarme afectivamente en el ambiente de la escuela. Prefiero mantener relaciones distantes.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},24:{number:24,pregunta:"Me gustan más las personas realistas y concretas que las teóricas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},25:{number:25,pregunta:"Me cuesta ser creativo/a, romper estructuras.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},26:{number:26,pregunta:"Me siento a gusto con personas espontáneas y divertidas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},27:{number:27,pregunta:"La mayoría de las veces expreso abiertamente cómo me siento.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},28:{number:28,pregunta:"Me gusta analizar y dar vueltas a las cosas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},29:{number:29,pregunta:"Me molesta que la gente no se tome en serio las cosas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},30:{number:30,pregunta:"Me atrae experimentar y practicar las últimas técnicas y novedades.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},31:{number:31,pregunta:"Soy cauteloso/a a la hora de sacar conclusiones.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},32:{number:32,pregunta:"Prefiero contar con el mayor número de fuentes de información. Cuantos más datos reúna para reflexionar, mejor.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},33:{number:33,pregunta:"Tiendo a ser perfeccionista.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},34:{number:34,pregunta:"Prefiero oír las opiniones de los demás antes de exponer la mía.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},35:{number:35,pregunta:"Me gusta afrontar la vida espontáneamente y no tener que planificar todo previamente.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},36:{number:36,pregunta:"En las discusiones me gusta observar cómo actúan los demás participantes.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},37:{number:37,pregunta:"Me siento incómodo/a con las personas calladas y demasiado analíticas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},38:{number:38,pregunta:"Juzgo con frecuencia las ideas de los demás por su valor práctico.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},39:{number:39,pregunta:"Me agobio si me obligan a acelerar mucho el trabajo para cumplir un plazo.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},40:{number:40,pregunta:"En las reuniones apoyo las ideas prácticas y realistas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},41:{number:41,pregunta:"Es mejor gozar del momento presente que deleitarse pensando en el pasado o en el futuro.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},42:{number:42,pregunta:"Me molestan las personas que siempre desean apresurar las cosas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},43:{number:43,pregunta:"Aporto ideas nuevas y espontáneas en los grupos de discusión.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},44:{number:44,pregunta:"Pienso que son más consistentes las decisiones fundamentadas en un minucioso análisis que las basadas en la intuición.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},45:{number:45,pregunta:"Detecto frecuentemente la inconsistencia y puntos débiles en las argumentaciones de los demás.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},46:{number:46,pregunta:"Creo que es preciso saltarse las normas muchas más veces que cumplirlas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},47:{number:47,pregunta:"A menudo caigo en la cuenta de otras formas mejores y más prácticas de hacer las cosas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},48:{number:48,pregunta:"En conjunto hablo más que escucho.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},49:{number:49,pregunta:"Prefiero distanciarme de los hechos y observarlos desde otras perspectivas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},50:{number:50,pregunta:"Estoy convencido/a que debe imponerse la lógica y el razonamiento.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},51:{number:51,pregunta:"Me gusta buscar nuevas experiencias.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},52:{number:52,pregunta:"Me gusta experimentar y aplicar las cosas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},53:{number:53,pregunta:"Pienso que debemos llegar pronto al grano, al meollo de los temas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},54:{number:54,pregunta:"Siempre trato de conseguir conclusiones e ideas claras.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},55:{number:55,pregunta:"Prefiero discutir cuestiones concretas y no perder el tiempo con pláticas superficiales.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},56:{number:56,pregunta:"Me impaciento cuando me dan explicaciones irrelevantes e incoherentes.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},57:{number:57,pregunta:"Compruebo antes si las cosas funcionan realmente.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},58:{number:58,pregunta:"Hago varios borradores antes de la redacción definitiva de un trabajo.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},59:{number:59,pregunta:"Soy consciente de que en las discusiones ayudo a mantener a los demás centrados en el tema, evitando divagaciones.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},60:{number:60,pregunta:"Observo que, con frecuencia, soy uno/a de los/as más objetivos/as y desapasionados/as en las discusiones.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},61:{number:61,pregunta:"Cuando algo va mal, le quito importancia y trato de hacerlo mejor.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},62:{number:62,pregunta:"Rechazo ideas originales y espontáneas si no las veo prácticas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},63:{number:63,pregunta:"Me gusta sopesar diversas alternativas antes de tomar una decisión.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},64:{number:64,pregunta:"Con frecuencia miro hacia delante para prever el futuro.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},65:{number:65,pregunta:"En los debates y discusiones prefiero desempeñar un papel secundario antes que ser el/la líder o el/la que más participa.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},66:{number:66,pregunta:"Me molestan las personas que no actúan con lógica.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},67:{number:67,pregunta:"Me resulta incómodo tener que planificar y prever las cosas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},68:{number:68,pregunta:"Creo que el fin justifica los medios en muchos casos.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},69:{number:69,pregunta:"Suelo reflexionar sobre los asuntos y problemas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},70:{number:70,pregunta:"El trabajar a conciencia me llena de satisfacción y orgullo.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},71:{number:71,pregunta:"Ante los acontecimientos trato de descubrir los principios y teorías en que se basan.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},72:{number:72,pregunta:"Con tal de conseguir el objetivo que pretendo soy capaz de herir sentimientos ajenos.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},73:{number:73,pregunta:"No me importa hacer todo lo necesario para que sea efectivo mi trabajo.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},74:{number:74,pregunta:"Con frecuencia soy una de las personas que más anima las fiestas.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},75:{number:75,pregunta:"Me aburro enseguida con el trabajo metódico y minucioso.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},76:{number:76,pregunta:"La gente con frecuencia cree que soy poco sensible a sus sentimientos.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},77:{number:77,pregunta:"Suelo dejarme llevar por mis intuiciones.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},78:{number:78,pregunta:"Si trabajo en grupo procuro que se siga un método y un orden.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},79:{number:79,pregunta:"Con frecuencia me interesa averiguar lo que piensa la gente.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}},80:{number:80,pregunta:"Esquivo los temas subjetivos, ambiguos y poco claros.",respuestas:{r1:"Acuerdo",r2:"Desacuerdo"}}};function WT(){const t=mv(jT);return S(Ho,{children:[p("h1",{className:"title",children:"Cuestionario Honey – Alonso de Estilos de Aprendizaje"}),p(BT,{test:t})]})}function HT(){const[t,e]=I.useState(null);return mS(hv,n=>{e(n||null)}),p("div",{className:"App",children:S(By,{children:[p(nt,{path:"/",element:p(t1,{})}),p(nt,{path:"/acerca",element:p(n1,{})}),p(nt,{path:"/login",element:p(r1,{})}),p(nt,{path:"/register",element:p(ST,{})}),p(nt,{path:"*",element:p(CT,{})}),S(nt,{path:"/estudiante",element:p(bT,{name:"Nombre Apellido"}),children:[p(nt,{index:!0,element:p(zf,{})}),p(nt,{path:"inicio",element:p(zf,{})}),p(nt,{path:"encuestas",element:p(zT,{})}),p(nt,{path:"psurvey",element:p(WT,{})})]})]})})}ga.createRoot(document.getElementById("root")).render(p(Vy,{children:p(HT,{})}));
