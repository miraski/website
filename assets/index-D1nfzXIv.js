var H_=Object.defineProperty;var V_=(t,e,n)=>e in t?H_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var le=(t,e,n)=>(V_(t,typeof e!="symbol"?e+"":e,n),n);function $_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sf={exports:{}},Ho={},Cf={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),G_=Symbol.for("react.portal"),K_=Symbol.for("react.fragment"),Q_=Symbol.for("react.strict_mode"),q_=Symbol.for("react.profiler"),J_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),Z_=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),tv=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),od=Symbol.iterator;function rv(t){return t===null||typeof t!="object"?null:(t=od&&t[od]||t["@@iterator"],typeof t=="function"?t:null)}var kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nf=Object.assign,Tf={};function Dr(t,e,n){this.props=t,this.context=e,this.refs=Tf,this.updater=n||kf}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Dr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function If(){}If.prototype=Dr.prototype;function Cu(t,e,n){this.props=t,this.context=e,this.refs=Tf,this.updater=n||kf}var ku=Cu.prototype=new If;ku.constructor=Cu;Nf(ku,Dr.prototype);ku.isPureReactComponent=!0;var ld=Array.isArray,jf=Object.prototype.hasOwnProperty,Nu={current:null},Pf={key:!0,ref:!0,__self:!0,__source:!0};function Rf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jf.call(e,r)&&!Pf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:t,key:s,ref:o,props:i,_owner:Nu.current}}function iv(t,e){return{$$typeof:Xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xi}function sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ad=/\/+/g;function xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sv(""+t.key):e.toString(36)}function Ls(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xi:case G_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xl(o,0):r,ld(i)?(n="",t!=null&&(n=t.replace(ad,"$&/")+"/"),Ls(i,e,n,"",function(c){return c})):i!=null&&(Tu(i)&&(i=iv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ad,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ld(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+xl(s,l);o+=Ls(s,e,n,a,i)}else if(a=rv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+xl(s,l++),o+=Ls(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ps(t,e,n){if(t==null)return t;var r=[],i=0;return Ls(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ov(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var be={current:null},Ds={transition:null},lv={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Ds,ReactCurrentOwner:Nu};D.Children={map:ps,forEach:function(t,e,n){ps(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ps(t,function(){e++}),e},toArray:function(t){return ps(t,function(e){return e})||[]},only:function(t){if(!Tu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=Dr;D.Fragment=K_;D.Profiler=q_;D.PureComponent=Cu;D.StrictMode=Q_;D.Suspense=ev;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)jf.call(e,a)&&!Pf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Xi,type:t.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(t){return t={$$typeof:X_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J_,_context:t},t.Consumer=t};D.createElement=Rf;D.createFactory=function(t){var e=Rf.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:Z_,render:t}};D.isValidElement=Tu;D.lazy=function(t){return{$$typeof:nv,_payload:{_status:-1,_result:t},_init:ov}};D.memo=function(t,e){return{$$typeof:tv,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=Ds.transition;Ds.transition={};try{t()}finally{Ds.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return be.current.useCallback(t,e)};D.useContext=function(t){return be.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return be.current.useDeferredValue(t)};D.useEffect=function(t,e){return be.current.useEffect(t,e)};D.useId=function(){return be.current.useId()};D.useImperativeHandle=function(t,e,n){return be.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return be.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return be.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return be.current.useMemo(t,e)};D.useReducer=function(t,e,n){return be.current.useReducer(t,e,n)};D.useRef=function(t){return be.current.useRef(t)};D.useState=function(t){return be.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return be.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return be.current.useTransition()};D.version="18.2.0";Cf.exports=D;var C=Cf.exports;const Af=Y_(C),av=$_({__proto__:null,default:Af},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=C,cv=Symbol.for("react.element"),dv=Symbol.for("react.fragment"),hv=Object.prototype.hasOwnProperty,fv=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pv={key:!0,ref:!0,__self:!0,__source:!0};function bf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hv.call(e,r)&&!pv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cv,type:t,key:s,ref:o,props:i,_owner:fv.current}}Ho.Fragment=dv;Ho.jsx=bf;Ho.jsxs=bf;Sf.exports=Ho;var u=Sf.exports,oa={},Of={exports:{}},Ke={},Mf={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,A){var b=T.length;T.push(A);e:for(;0<b;){var re=b-1>>>1,fe=T[re];if(0<i(fe,A))T[re]=A,T[b]=fe,b=re;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],b=T.pop();if(b!==A){T[0]=b;e:for(var re=0,fe=T.length,hs=fe>>>1;re<hs;){var vn=2*(re+1)-1,wl=T[vn],yn=vn+1,fs=T[yn];if(0>i(wl,b))yn<fe&&0>i(fs,wl)?(T[re]=fs,T[yn]=b,re=yn):(T[re]=wl,T[vn]=b,re=vn);else if(yn<fe&&0>i(fs,b))T[re]=fs,T[yn]=b,re=yn;else break e}}return A}function i(T,A){var b=T.sortIndex-A.sortIndex;return b!==0?b:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],h=1,d=null,f=3,_=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=T)r(c),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(c)}}function w(T){if(y=!1,g(T),!v)if(n(a)!==null)v=!0,vl(k);else{var A=n(c);A!==null&&yl(w,A.startTime-T)}}function k(T,A){v=!1,y&&(y=!1,m(P),P=-1),_=!0;var b=f;try{for(g(A),d=n(a);d!==null&&(!(d.expirationTime>A)||T&&!rt());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var fe=re(d.expirationTime<=A);A=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(a)&&r(a),g(A)}else r(a);d=n(a)}if(d!==null)var hs=!0;else{var vn=n(c);vn!==null&&yl(w,vn.startTime-A),hs=!1}return hs}finally{d=null,f=b,_=!1}}var I=!1,j=null,P=-1,ne=5,F=-1;function rt(){return!(t.unstable_now()-F<ne)}function $r(){if(j!==null){var T=t.unstable_now();F=T;var A=!0;try{A=j(!0,T)}finally{A?Yr():(I=!1,j=null)}}else I=!1}var Yr;if(typeof p=="function")Yr=function(){p($r)};else if(typeof MessageChannel<"u"){var sd=new MessageChannel,W_=sd.port2;sd.port1.onmessage=$r,Yr=function(){W_.postMessage(null)}}else Yr=function(){E($r,0)};function vl(T){j=T,I||(I=!0,Yr())}function yl(T,A){P=E(function(){T(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,vl(k))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var b=f;f=A;try{return T()}finally{f=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=f;f=T;try{return A()}finally{f=b}},t.unstable_scheduleCallback=function(T,A,b){var re=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?re+b:re):b=re,T){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=b+fe,T={id:h++,callback:A,priorityLevel:T,startTime:b,expirationTime:fe,sortIndex:-1},b>re?(T.sortIndex=b,e(c,T),n(a)===null&&T===n(c)&&(y?(m(P),P=-1):y=!0,yl(w,b-re))):(T.sortIndex=fe,e(a,T),v||_||(v=!0,vl(k))),T},t.unstable_shouldYield=rt,t.unstable_wrapCallback=function(T){var A=f;return function(){var b=f;f=A;try{return T.apply(this,arguments)}finally{f=b}}}})(Lf);Mf.exports=Lf;var mv=Mf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=C,Ge=mv;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ff=new Set,Si={};function $n(t,e){Nr(t,e),Nr(t+"Capture",e)}function Nr(t,e){for(Si[t]=e,t=0;t<e.length;t++)Ff.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ud={},cd={};function _v(t){return la.call(cd,t)?!0:la.call(ud,t)?!1:gv.test(t)?cd[t]=!0:(ud[t]=!0,!1)}function vv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yv(t,e,n,r){if(e===null||typeof e>"u"||vv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function ju(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Iu,ju);Ce[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Iu,ju);Ce[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Iu,ju);Ce[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pu(t,e,n,r){var i=Ce.hasOwnProperty(e)?Ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yv(e,n,i,r)&&(n=null),r||i===null?_v(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ft=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ms=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Ru=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),Bf=Symbol.for("react.provider"),zf=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),ua=Symbol.for("react.suspense"),ca=Symbol.for("react.suspense_list"),bu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Uf=Symbol.for("react.offscreen"),dd=Symbol.iterator;function Gr(t){return t===null||typeof t!="object"?null:(t=dd&&t[dd]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,El;function si(t){if(El===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);El=e&&e[1]||""}return`
`+El+t}var Sl=!1;function Cl(t,e){if(!t||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?si(t):""}function wv(t){switch(t.tag){case 5:return si(t.type);case 16:return si("Lazy");case 13:return si("Suspense");case 19:return si("SuspenseList");case 0:case 2:case 15:return t=Cl(t.type,!1),t;case 11:return t=Cl(t.type.render,!1),t;case 1:return t=Cl(t.type,!0),t;default:return""}}function da(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case nr:return"Fragment";case tr:return"Portal";case aa:return"Profiler";case Ru:return"StrictMode";case ua:return"Suspense";case ca:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zf:return(t.displayName||"Context")+".Consumer";case Bf:return(t._context.displayName||"Context")+".Provider";case Au:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bu:return e=t.displayName||null,e!==null?e:da(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return da(t(e))}catch{}}return null}function xv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return da(e);case 8:return e===Ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ev(t){var e=Wf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gs(t){t._valueTracker||(t._valueTracker=Ev(t))}function Hf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ha(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vf(t,e){e=e.checked,e!=null&&Pu(t,"checked",e,!1)}function fa(t,e){Vf(t,e);var n=cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pa(t,e.type,n):e.hasOwnProperty("defaultValue")&&pa(t,e.type,cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pa(t,e,n){(e!=="number"||qs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oi=Array.isArray;function mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ma(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(oi(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cn(n)}}function $f(t,e){var n=cn(e.value),r=cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function md(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ga(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _s,Gf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ci(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sv=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(t){Sv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ci[e]=ci[t]})});function Kf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ci.hasOwnProperty(t)&&ci[t]?(""+e).trim():e+"px"}function Qf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Cv=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _a(t,e){if(e){if(Cv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function va(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ya=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wa=null,gr=null,_r=null;function gd(t){if(t=ts(t)){if(typeof wa!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Ko(e),wa(t.stateNode,t.type,e))}}function qf(t){gr?_r?_r.push(t):_r=[t]:gr=t}function Jf(){if(gr){var t=gr,e=_r;if(_r=gr=null,gd(t),e)for(t=0;t<e.length;t++)gd(e[t])}}function Xf(t,e){return t(e)}function Zf(){}var kl=!1;function ep(t,e,n){if(kl)return t(e,n);kl=!0;try{return Xf(t,e,n)}finally{kl=!1,(gr!==null||_r!==null)&&(Zf(),Jf())}}function ki(t,e){var n=t.stateNode;if(n===null)return null;var r=Ko(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var xa=!1;if(At)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){xa=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{xa=!1}function kv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var di=!1,Js=null,Xs=!1,Ea=null,Nv={onError:function(t){di=!0,Js=t}};function Tv(t,e,n,r,i,s,o,l,a){di=!1,Js=null,kv.apply(Nv,arguments)}function Iv(t,e,n,r,i,s,o,l,a){if(Tv.apply(this,arguments),di){if(di){var c=Js;di=!1,Js=null}else throw Error(x(198));Xs||(Xs=!0,Ea=c)}}function Yn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _d(t){if(Yn(t)!==t)throw Error(x(188))}function jv(t){var e=t.alternate;if(!e){if(e=Yn(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _d(i),t;if(s===r)return _d(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function np(t){return t=jv(t),t!==null?rp(t):null}function rp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rp(t);if(e!==null)return e;t=t.sibling}return null}var ip=Ge.unstable_scheduleCallback,vd=Ge.unstable_cancelCallback,Pv=Ge.unstable_shouldYield,Rv=Ge.unstable_requestPaint,se=Ge.unstable_now,Av=Ge.unstable_getCurrentPriorityLevel,Mu=Ge.unstable_ImmediatePriority,sp=Ge.unstable_UserBlockingPriority,Zs=Ge.unstable_NormalPriority,bv=Ge.unstable_LowPriority,op=Ge.unstable_IdlePriority,Vo=null,xt=null;function Ov(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Vo,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Dv,Mv=Math.log,Lv=Math.LN2;function Dv(t){return t>>>=0,t===0?32:31-(Mv(t)/Lv|0)|0}var vs=64,ys=4194304;function li(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=li(l):(s&=o,s!==0&&(r=li(s)))}else o=n&~i,o!==0?r=li(o):s!==0&&(r=li(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ht(e),i=1<<n,r|=t[n],e&=~i;return r}function Fv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ht(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Fv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Sa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lp(){var t=vs;return vs<<=1,!(vs&4194240)&&(vs=64),t}function Nl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ht(e),t[e]=n}function zv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function ap(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var up,Du,cp,dp,hp,Ca=!1,ws=[],Jt=null,Xt=null,Zt=null,Ni=new Map,Ti=new Map,Yt=[],Uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(t,e){switch(t){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Ni.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(e.pointerId)}}function Qr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ts(e),e!==null&&Du(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Wv(t,e,n,r,i){switch(e){case"focusin":return Jt=Qr(Jt,t,e,n,r,i),!0;case"dragenter":return Xt=Qr(Xt,t,e,n,r,i),!0;case"mouseover":return Zt=Qr(Zt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ni.set(s,Qr(Ni.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ti.set(s,Qr(Ti.get(s)||null,t,e,n,r,i)),!0}return!1}function fp(t){var e=kn(t.target);if(e!==null){var n=Yn(e);if(n!==null){if(e=n.tag,e===13){if(e=tp(n),e!==null){t.blockedOn=e,hp(t.priority,function(){cp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ka(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ya=r,n.target.dispatchEvent(r),ya=null}else return e=ts(n),e!==null&&Du(e),t.blockedOn=n,!1;e.shift()}return!0}function wd(t,e,n){Fs(t)&&n.delete(e)}function Hv(){Ca=!1,Jt!==null&&Fs(Jt)&&(Jt=null),Xt!==null&&Fs(Xt)&&(Xt=null),Zt!==null&&Fs(Zt)&&(Zt=null),Ni.forEach(wd),Ti.forEach(wd)}function qr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ca||(Ca=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Hv)))}function Ii(t){function e(i){return qr(i,t)}if(0<ws.length){qr(ws[0],t);for(var n=1;n<ws.length;n++){var r=ws[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jt!==null&&qr(Jt,t),Xt!==null&&qr(Xt,t),Zt!==null&&qr(Zt,t),Ni.forEach(e),Ti.forEach(e),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)fp(n),n.blockedOn===null&&Yt.shift()}var vr=Ft.ReactCurrentBatchConfig,to=!0;function Vv(t,e,n,r){var i=U,s=vr.transition;vr.transition=null;try{U=1,Fu(t,e,n,r)}finally{U=i,vr.transition=s}}function $v(t,e,n,r){var i=U,s=vr.transition;vr.transition=null;try{U=4,Fu(t,e,n,r)}finally{U=i,vr.transition=s}}function Fu(t,e,n,r){if(to){var i=ka(t,e,n,r);if(i===null)Ll(t,e,r,no,n),yd(t,r);else if(Wv(i,t,e,n,r))r.stopPropagation();else if(yd(t,r),e&4&&-1<Uv.indexOf(t)){for(;i!==null;){var s=ts(i);if(s!==null&&up(s),s=ka(t,e,n,r),s===null&&Ll(t,e,r,no,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ll(t,e,r,null,n)}}var no=null;function ka(t,e,n,r){if(no=null,t=Ou(r),t=kn(t),t!==null)if(e=Yn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return no=t,null}function pp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case Mu:return 1;case sp:return 4;case Zs:case bv:return 16;case op:return 536870912;default:return 16}default:return 16}}var Kt=null,Bu=null,Bs=null;function mp(){if(Bs)return Bs;var t,e=Bu,n=e.length,r,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bs=i.slice(t,1<r?1-r:void 0)}function zs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xs(){return!0}function xd(){return!1}function Qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xs:xd,this.isPropagationStopped=xd,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xs)},persist:function(){},isPersistent:xs}),e}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Qe(Fr),es=Z({},Fr,{view:0,detail:0}),Yv=Qe(es),Tl,Il,Jr,$o=Z({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jr&&(Jr&&t.type==="mousemove"?(Tl=t.screenX-Jr.screenX,Il=t.screenY-Jr.screenY):Il=Tl=0,Jr=t),Tl)},movementY:function(t){return"movementY"in t?t.movementY:Il}}),Ed=Qe($o),Gv=Z({},$o,{dataTransfer:0}),Kv=Qe(Gv),Qv=Z({},es,{relatedTarget:0}),jl=Qe(Qv),qv=Z({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=Qe(qv),Xv=Z({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zv=Qe(Xv),ey=Z({},Fr,{data:0}),Sd=Qe(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ry[t])?!!e[t]:!1}function Uu(){return iy}var sy=Z({},es,{key:function(t){if(t.key){var e=ty[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(t){return t.type==="keypress"?zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oy=Qe(sy),ly=Z({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Qe(ly),ay=Z({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),uy=Qe(ay),cy=Z({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dy=Qe(cy),hy=Z({},$o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fy=Qe(hy),py=[9,13,27,32],Wu=At&&"CompositionEvent"in window,hi=null;At&&"documentMode"in document&&(hi=document.documentMode);var my=At&&"TextEvent"in window&&!hi,gp=At&&(!Wu||hi&&8<hi&&11>=hi),kd=" ",Nd=!1;function _p(t,e){switch(t){case"keyup":return py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function gy(t,e){switch(t){case"compositionend":return vp(e);case"keypress":return e.which!==32?null:(Nd=!0,kd);case"textInput":return t=e.data,t===kd&&Nd?null:t;default:return null}}function _y(t,e){if(rr)return t==="compositionend"||!Wu&&_p(t,e)?(t=mp(),Bs=Bu=Kt=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gp&&e.locale!=="ko"?null:e.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vy[t.type]:e==="textarea"}function yp(t,e,n,r){qf(r),e=ro(e,"onChange"),0<e.length&&(n=new zu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fi=null,ji=null;function yy(t){Pp(t,0)}function Yo(t){var e=or(t);if(Hf(e))return t}function wy(t,e){if(t==="change")return e}var wp=!1;if(At){var Pl;if(At){var Rl="oninput"in document;if(!Rl){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Rl=typeof Id.oninput=="function"}Pl=Rl}else Pl=!1;wp=Pl&&(!document.documentMode||9<document.documentMode)}function jd(){fi&&(fi.detachEvent("onpropertychange",xp),ji=fi=null)}function xp(t){if(t.propertyName==="value"&&Yo(ji)){var e=[];yp(e,ji,t,Ou(t)),ep(yy,e)}}function xy(t,e,n){t==="focusin"?(jd(),fi=e,ji=n,fi.attachEvent("onpropertychange",xp)):t==="focusout"&&jd()}function Ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(ji)}function Sy(t,e){if(t==="click")return Yo(e)}function Cy(t,e){if(t==="input"||t==="change")return Yo(e)}function ky(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mt=typeof Object.is=="function"?Object.is:ky;function Pi(t,e){if(mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!la.call(e,i)||!mt(t[i],e[i]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rd(t,e){var n=Pd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pd(n)}}function Ep(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ep(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sp(){for(var t=window,e=qs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qs(t.document)}return e}function Hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ny(t){var e=Sp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ep(n.ownerDocument.documentElement,n)){if(r!==null&&Hu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rd(n,s);var o=Rd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ty=At&&"documentMode"in document&&11>=document.documentMode,ir=null,Na=null,pi=null,Ta=!1;function Ad(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ta||ir==null||ir!==qs(r)||(r=ir,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Pi(pi,r)||(pi=r,r=ro(Na,"onSelect"),0<r.length&&(e=new zu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ir)))}function Es(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sr={animationend:Es("Animation","AnimationEnd"),animationiteration:Es("Animation","AnimationIteration"),animationstart:Es("Animation","AnimationStart"),transitionend:Es("Transition","TransitionEnd")},Al={},Cp={};At&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Go(t){if(Al[t])return Al[t];if(!sr[t])return t;var e=sr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cp)return Al[t]=e[n];return t}var kp=Go("animationend"),Np=Go("animationiteration"),Tp=Go("animationstart"),Ip=Go("transitionend"),jp=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(t,e){jp.set(t,e),$n(e,[t])}for(var bl=0;bl<bd.length;bl++){var Ol=bd[bl],Iy=Ol.toLowerCase(),jy=Ol[0].toUpperCase()+Ol.slice(1);pn(Iy,"on"+jy)}pn(kp,"onAnimationEnd");pn(Np,"onAnimationIteration");pn(Tp,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Ip,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function Od(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Iv(r,e,void 0,t),t.currentTarget=null}function Pp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Od(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Od(i,l,c),s=a}}}if(Xs)throw t=Ea,Xs=!1,Ea=null,t}function Y(t,e){var n=e[Aa];n===void 0&&(n=e[Aa]=new Set);var r=t+"__bubble";n.has(r)||(Rp(e,t,2,!1),n.add(r))}function Ml(t,e,n){var r=0;e&&(r|=4),Rp(n,t,r,e)}var Ss="_reactListening"+Math.random().toString(36).slice(2);function Ri(t){if(!t[Ss]){t[Ss]=!0,Ff.forEach(function(n){n!=="selectionchange"&&(Py.has(n)||Ml(n,!1,t),Ml(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ss]||(e[Ss]=!0,Ml("selectionchange",!1,e))}}function Rp(t,e,n,r){switch(pp(e)){case 1:var i=Vv;break;case 4:i=$v;break;default:i=Fu}n=i.bind(null,e,n,t),i=void 0,!xa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ll(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ep(function(){var c=s,h=Ou(n),d=[];e:{var f=jp.get(t);if(f!==void 0){var _=zu,v=t;switch(t){case"keypress":if(zs(n)===0)break e;case"keydown":case"keyup":_=oy;break;case"focusin":v="focus",_=jl;break;case"focusout":v="blur",_=jl;break;case"beforeblur":case"afterblur":_=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=uy;break;case kp:case Np:case Tp:_=Jv;break;case Ip:_=dy;break;case"scroll":_=Yv;break;case"wheel":_=fy;break;case"copy":case"cut":case"paste":_=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Cd}var y=(e&4)!==0,E=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=ki(p,m),w!=null&&y.push(Ai(p,w,g)))),E)break;p=p.return}0<y.length&&(f=new _(f,v,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==ya&&(v=n.relatedTarget||n.fromElement)&&(kn(v)||v[bt]))break e;if((_||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?kn(v):null,v!==null&&(E=Yn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(y=Ed,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Cd,w="onPointerLeave",m="onPointerEnter",p="pointer"),E=_==null?f:or(_),g=v==null?f:or(v),f=new y(w,p+"leave",_,n,h),f.target=E,f.relatedTarget=g,w=null,kn(h)===c&&(y=new y(m,p+"enter",v,n,h),y.target=g,y.relatedTarget=E,w=y),E=w,_&&v)t:{for(y=_,m=v,p=0,g=y;g;g=qn(g))p++;for(g=0,w=m;w;w=qn(w))g++;for(;0<p-g;)y=qn(y),p--;for(;0<g-p;)m=qn(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=qn(y),m=qn(m)}y=null}else y=null;_!==null&&Md(d,f,_,y,!1),v!==null&&E!==null&&Md(d,E,v,y,!0)}}e:{if(f=c?or(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var k=wy;else if(Td(f))if(wp)k=Cy;else{k=Ey;var I=xy}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Sy);if(k&&(k=k(t,c))){yp(d,k,n,h);break e}I&&I(t,f,c),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&pa(f,"number",f.value)}switch(I=c?or(c):window,t){case"focusin":(Td(I)||I.contentEditable==="true")&&(ir=I,Na=c,pi=null);break;case"focusout":pi=Na=ir=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,Ad(d,n,h);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":Ad(d,n,h)}var j;if(Wu)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else rr?_p(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(gp&&n.locale!=="ko"&&(rr||P!=="onCompositionStart"?P==="onCompositionEnd"&&rr&&(j=mp()):(Kt=h,Bu="value"in Kt?Kt.value:Kt.textContent,rr=!0)),I=ro(c,P),0<I.length&&(P=new Sd(P,t,null,n,h),d.push({event:P,listeners:I}),j?P.data=j:(j=vp(n),j!==null&&(P.data=j)))),(j=my?gy(t,n):_y(t,n))&&(c=ro(c,"onBeforeInput"),0<c.length&&(h=new Sd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=j))}Pp(d,e)})}function Ai(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ki(t,n),s!=null&&r.unshift(Ai(t,s,i)),s=ki(t,e),s!=null&&r.push(Ai(t,s,i))),t=t.return}return r}function qn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Md(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=ki(n,s),a!=null&&o.unshift(Ai(n,a,l))):i||(a=ki(n,s),a!=null&&o.push(Ai(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ry=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function Ld(t){return(typeof t=="string"?t:""+t).replace(Ry,`
`).replace(Ay,"")}function Cs(t,e,n){if(e=Ld(e),Ld(t)!==e&&n)throw Error(x(425))}function io(){}var Ia=null,ja=null;function Pa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ra=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(t){return Dd.resolve(null).then(t).catch(My)}:Ra;function My(t){setTimeout(function(){throw t})}function Dl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ii(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ii(e)}function en(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),vt="__reactFiber$"+Br,bi="__reactProps$"+Br,bt="__reactContainer$"+Br,Aa="__reactEvents$"+Br,Ly="__reactListeners$"+Br,Dy="__reactHandles$"+Br;function kn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bt]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fd(t);t!==null;){if(n=t[vt])return n;t=Fd(t)}return e}t=n,n=t.parentNode}return null}function ts(t){return t=t[vt]||t[bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Ko(t){return t[bi]||null}var ba=[],lr=-1;function mn(t){return{current:t}}function K(t){0>lr||(t.current=ba[lr],ba[lr]=null,lr--)}function $(t,e){lr++,ba[lr]=t.current,t.current=e}var dn={},je=mn(dn),Be=mn(!1),Mn=dn;function Tr(t,e){var n=t.type.contextTypes;if(!n)return dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function so(){K(Be),K(je)}function Bd(t,e,n){if(je.current!==dn)throw Error(x(168));$(je,e),$(Be,n)}function Ap(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,xv(t)||"Unknown",i));return Z({},n,r)}function oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dn,Mn=je.current,$(je,t),$(Be,Be.current),!0}function zd(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Ap(t,e,Mn),r.__reactInternalMemoizedMergedChildContext=t,K(Be),K(je),$(je,t)):K(Be),$(Be,n)}var kt=null,Qo=!1,Fl=!1;function bp(t){kt===null?kt=[t]:kt.push(t)}function Fy(t){Qo=!0,bp(t)}function gn(){if(!Fl&&kt!==null){Fl=!0;var t=0,e=U;try{var n=kt;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kt=null,Qo=!1}catch(i){throw kt!==null&&(kt=kt.slice(t+1)),ip(Mu,gn),i}finally{U=e,Fl=!1}}return null}var ar=[],ur=0,lo=null,ao=0,qe=[],Je=0,Ln=null,Tt=1,It="";function wn(t,e){ar[ur++]=ao,ar[ur++]=lo,lo=t,ao=e}function Op(t,e,n){qe[Je++]=Tt,qe[Je++]=It,qe[Je++]=Ln,Ln=t;var r=Tt;t=It;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var s=32-ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-ht(e)+i|n<<i|r,It=s+t}else Tt=1<<s|n<<i|r,It=t}function Vu(t){t.return!==null&&(wn(t,1),Op(t,1,0))}function $u(t){for(;t===lo;)lo=ar[--ur],ar[ur]=null,ao=ar[--ur],ar[ur]=null;for(;t===Ln;)Ln=qe[--Je],qe[Je]=null,It=qe[--Je],qe[Je]=null,Tt=qe[--Je],qe[Je]=null}var Ye=null,$e=null,q=!1,lt=null;function Mp(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ud(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,$e=en(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,$e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ln!==null?{id:Tt,overflow:It}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ye=t,$e=null,!0):!1;default:return!1}}function Oa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ma(t){if(q){var e=$e;if(e){var n=e;if(!Ud(t,e)){if(Oa(t))throw Error(x(418));e=en(n.nextSibling);var r=Ye;e&&Ud(t,e)?Mp(r,n):(t.flags=t.flags&-4097|2,q=!1,Ye=t)}}else{if(Oa(t))throw Error(x(418));t.flags=t.flags&-4097|2,q=!1,Ye=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function ks(t){if(t!==Ye)return!1;if(!q)return Wd(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pa(t.type,t.memoizedProps)),e&&(e=$e)){if(Oa(t))throw Lp(),Error(x(418));for(;e;)Mp(t,e),e=en(e.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$e=en(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$e=null}}else $e=Ye?en(t.stateNode.nextSibling):null;return!0}function Lp(){for(var t=$e;t;)t=en(t.nextSibling)}function Ir(){$e=Ye=null,q=!1}function Yu(t){lt===null?lt=[t]:lt.push(t)}var By=Ft.ReactCurrentBatchConfig;function st(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var uo=mn(null),co=null,cr=null,Gu=null;function Ku(){Gu=cr=co=null}function Qu(t){var e=uo.current;K(uo),t._currentValue=e}function La(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yr(t,e){co=t,Gu=cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Le=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(Gu!==t)if(t={context:t,memoizedValue:e,next:null},cr===null){if(co===null)throw Error(x(308));cr=t,co.dependencies={lanes:0,firstContext:t}}else cr=cr.next=t;return e}var Nn=null;function qu(t){Nn===null?Nn=[t]:Nn.push(t)}function Dp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ot(t,r)}function Ot(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ot(t,n)}return i=r.interleaved,i===null?(e.next=e,qu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ot(t,n)}function Us(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lu(t,n)}}function Hd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ho(t,e,n,r){var i=t.updateQueue;$t=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,h=c=a=null,l=s;do{var f=l.lane,_=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(_,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(_,d,f):v,f==null)break e;d=Z({},d,f);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=_,a=d):h=h.next=_,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fn|=o,t.lanes=o,t.memoizedState=d}}function Vd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Bp=new Df.Component().refs;function Da(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qo={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=rn(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(ft(e,t,i,r),Us(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=rn(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(ft(e,t,i,r),Us(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=rn(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=tn(t,i,r),e!==null&&(ft(e,t,r,n),Us(e,t,r))}};function $d(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,s):!0}function zp(t,e,n){var r=!1,i=dn,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=ze(e)?Mn:je.current,r=e.contextTypes,s=(r=r!=null)?Tr(t,i):dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qo.enqueueReplaceState(e,e.state,null)}function Fa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Bp,Ju(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=ze(e)?Mn:je.current,i.context=Tr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Da(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qo.enqueueReplaceState(i,i.state,null),ho(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Bp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Ns(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gd(t){var e=t._init;return e(t._payload)}function Up(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=sn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=$l(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,w){var k=g.type;return k===nr?h(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Vt&&Gd(k)===p.type)?(w=i(p,g.props),w.ref=Xr(m,p,g),w.return=m,w):(w=Gs(g.type,g.key,g.props,null,m.mode,w),w.ref=Xr(m,p,g),w.return=m,w)}function c(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Yl(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function h(m,p,g,w,k){return p===null||p.tag!==7?(p=Rn(g,m.mode,w,k),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$l(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ms:return g=Gs(p.type,p.key,p.props,null,m.mode,g),g.ref=Xr(m,null,p),g.return=m,g;case tr:return p=Yl(p,m.mode,g),p.return=m,p;case Vt:var w=p._init;return d(m,w(p._payload),g)}if(oi(p)||Gr(p))return p=Rn(p,m.mode,g,null),p.return=m,p;Ns(m,p)}return null}function f(m,p,g,w){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ms:return g.key===k?a(m,p,g,w):null;case tr:return g.key===k?c(m,p,g,w):null;case Vt:return k=g._init,f(m,p,k(g._payload),w)}if(oi(g)||Gr(g))return k!==null?null:h(m,p,g,w,null);Ns(m,g)}return null}function _(m,p,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ms:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,k);case tr:return m=m.get(w.key===null?g:w.key)||null,c(p,m,w,k);case Vt:var I=w._init;return _(m,p,g,I(w._payload),k)}if(oi(w)||Gr(w))return m=m.get(g)||null,h(p,m,w,k,null);Ns(p,w)}return null}function v(m,p,g,w){for(var k=null,I=null,j=p,P=p=0,ne=null;j!==null&&P<g.length;P++){j.index>P?(ne=j,j=null):ne=j.sibling;var F=f(m,j,g[P],w);if(F===null){j===null&&(j=ne);break}t&&j&&F.alternate===null&&e(m,j),p=s(F,p,P),I===null?k=F:I.sibling=F,I=F,j=ne}if(P===g.length)return n(m,j),q&&wn(m,P),k;if(j===null){for(;P<g.length;P++)j=d(m,g[P],w),j!==null&&(p=s(j,p,P),I===null?k=j:I.sibling=j,I=j);return q&&wn(m,P),k}for(j=r(m,j);P<g.length;P++)ne=_(j,m,P,g[P],w),ne!==null&&(t&&ne.alternate!==null&&j.delete(ne.key===null?P:ne.key),p=s(ne,p,P),I===null?k=ne:I.sibling=ne,I=ne);return t&&j.forEach(function(rt){return e(m,rt)}),q&&wn(m,P),k}function y(m,p,g,w){var k=Gr(g);if(typeof k!="function")throw Error(x(150));if(g=k.call(g),g==null)throw Error(x(151));for(var I=k=null,j=p,P=p=0,ne=null,F=g.next();j!==null&&!F.done;P++,F=g.next()){j.index>P?(ne=j,j=null):ne=j.sibling;var rt=f(m,j,F.value,w);if(rt===null){j===null&&(j=ne);break}t&&j&&rt.alternate===null&&e(m,j),p=s(rt,p,P),I===null?k=rt:I.sibling=rt,I=rt,j=ne}if(F.done)return n(m,j),q&&wn(m,P),k;if(j===null){for(;!F.done;P++,F=g.next())F=d(m,F.value,w),F!==null&&(p=s(F,p,P),I===null?k=F:I.sibling=F,I=F);return q&&wn(m,P),k}for(j=r(m,j);!F.done;P++,F=g.next())F=_(j,m,P,F.value,w),F!==null&&(t&&F.alternate!==null&&j.delete(F.key===null?P:F.key),p=s(F,p,P),I===null?k=F:I.sibling=F,I=F);return t&&j.forEach(function($r){return e(m,$r)}),q&&wn(m,P),k}function E(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===nr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ms:e:{for(var k=g.key,I=p;I!==null;){if(I.key===k){if(k=g.type,k===nr){if(I.tag===7){n(m,I.sibling),p=i(I,g.props.children),p.return=m,m=p;break e}}else if(I.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Vt&&Gd(k)===I.type){n(m,I.sibling),p=i(I,g.props),p.ref=Xr(m,I,g),p.return=m,m=p;break e}n(m,I);break}else e(m,I);I=I.sibling}g.type===nr?(p=Rn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=Gs(g.type,g.key,g.props,null,m.mode,w),w.ref=Xr(m,p,g),w.return=m,m=w)}return o(m);case tr:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Yl(g,m.mode,w),p.return=m,m=p}return o(m);case Vt:return I=g._init,E(m,p,I(g._payload),w)}if(oi(g))return v(m,p,g,w);if(Gr(g))return y(m,p,g,w);Ns(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=$l(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return E}var jr=Up(!0),Wp=Up(!1),ns={},Et=mn(ns),Oi=mn(ns),Mi=mn(ns);function Tn(t){if(t===ns)throw Error(x(174));return t}function Xu(t,e){switch($(Mi,e),$(Oi,t),$(Et,ns),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ga(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ga(e,t)}K(Et),$(Et,e)}function Pr(){K(Et),K(Oi),K(Mi)}function Hp(t){Tn(Mi.current);var e=Tn(Et.current),n=ga(e,t.type);e!==n&&($(Oi,t),$(Et,n))}function Zu(t){Oi.current===t&&(K(Et),K(Oi))}var J=mn(0);function fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bl=[];function ec(){for(var t=0;t<Bl.length;t++)Bl[t]._workInProgressVersionPrimary=null;Bl.length=0}var Ws=Ft.ReactCurrentDispatcher,zl=Ft.ReactCurrentBatchConfig,Dn=0,X=null,ce=null,me=null,po=!1,mi=!1,Li=0,zy=0;function ke(){throw Error(x(321))}function tc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mt(t[n],e[n]))return!1;return!0}function nc(t,e,n,r,i,s){if(Dn=s,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ws.current=t===null||t.memoizedState===null?Vy:$y,t=n(r,i),mi){s=0;do{if(mi=!1,Li=0,25<=s)throw Error(x(301));s+=1,me=ce=null,e.updateQueue=null,Ws.current=Yy,t=n(r,i)}while(mi)}if(Ws.current=mo,e=ce!==null&&ce.next!==null,Dn=0,me=ce=X=null,po=!1,e)throw Error(x(300));return t}function rc(){var t=Li!==0;return Li=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?X.memoizedState=me=t:me=me.next=t,me}function nt(){if(ce===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=me===null?X.memoizedState:me.next;if(e!==null)me=e,ce=t;else{if(t===null)throw Error(x(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},me===null?X.memoizedState=me=t:me=me.next=t}return me}function Di(t,e){return typeof e=="function"?e(t):e}function Ul(t){var e=nt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var h=c.lane;if((Dn&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,X.lanes|=h,Fn|=h}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,mt(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,X.lanes|=s,Fn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wl(t){var e=nt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mt(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Vp(){}function $p(t,e){var n=X,r=nt(),i=e(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,ic(Kp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Fi(9,Gp.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(x(349));Dn&30||Yp(n,e,i)}return i}function Yp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gp(t,e,n,r){e.value=n,e.getSnapshot=r,Qp(e)&&qp(t)}function Kp(t,e,n){return n(function(){Qp(e)&&qp(t)})}function Qp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mt(t,n)}catch{return!0}}function qp(t){var e=Ot(t,1);e!==null&&ft(e,t,1,-1)}function Kd(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:t},e.queue=t,t=t.dispatch=Hy.bind(null,X,t),[e.memoizedState,t]}function Fi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jp(){return nt().memoizedState}function Hs(t,e,n,r){var i=_t();X.flags|=t,i.memoizedState=Fi(1|e,n,void 0,r===void 0?null:r)}function Jo(t,e,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&tc(r,o.deps)){i.memoizedState=Fi(e,n,s,r);return}}X.flags|=t,i.memoizedState=Fi(1|e,n,s,r)}function Qd(t,e){return Hs(8390656,8,t,e)}function ic(t,e){return Jo(2048,8,t,e)}function Xp(t,e){return Jo(4,2,t,e)}function Zp(t,e){return Jo(4,4,t,e)}function em(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tm(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4,4,em.bind(null,e,t),n)}function sc(){}function nm(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rm(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function im(t,e,n){return Dn&21?(mt(n,e)||(n=lp(),X.lanes|=n,Fn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n)}function Uy(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=zl.transition;zl.transition={};try{t(!1),e()}finally{U=n,zl.transition=r}}function sm(){return nt().memoizedState}function Wy(t,e,n){var r=rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},om(t))lm(e,n);else if(n=Dp(t,e,n,r),n!==null){var i=Ae();ft(n,t,r,i),am(n,e,r)}}function Hy(t,e,n){var r=rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(om(t))lm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,mt(l,o)){var a=e.interleaved;a===null?(i.next=i,qu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Dp(t,e,i,r),n!==null&&(i=Ae(),ft(n,t,r,i),am(n,e,r))}}function om(t){var e=t.alternate;return t===X||e!==null&&e===X}function lm(t,e){mi=po=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function am(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lu(t,n)}}var mo={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Vy={readContext:tt,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:Qd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hs(4194308,4,em.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hs(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Wy.bind(null,X,t),[r.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:Kd,useDebugValue:sc,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=Kd(!1),e=t[0];return t=Uy.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=X,i=_t();if(q){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ve===null)throw Error(x(349));Dn&30||Yp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qd(Kp.bind(null,r,s,t),[t]),r.flags|=2048,Fi(9,Gp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_t(),e=ve.identifierPrefix;if(q){var n=It,r=Tt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Li++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$y={readContext:tt,useCallback:nm,useContext:tt,useEffect:ic,useImperativeHandle:tm,useInsertionEffect:Xp,useLayoutEffect:Zp,useMemo:rm,useReducer:Ul,useRef:Jp,useState:function(){return Ul(Di)},useDebugValue:sc,useDeferredValue:function(t){var e=nt();return im(e,ce.memoizedState,t)},useTransition:function(){var t=Ul(Di)[0],e=nt().memoizedState;return[t,e]},useMutableSource:Vp,useSyncExternalStore:$p,useId:sm,unstable_isNewReconciler:!1},Yy={readContext:tt,useCallback:nm,useContext:tt,useEffect:ic,useImperativeHandle:tm,useInsertionEffect:Xp,useLayoutEffect:Zp,useMemo:rm,useReducer:Wl,useRef:Jp,useState:function(){return Wl(Di)},useDebugValue:sc,useDeferredValue:function(t){var e=nt();return ce===null?e.memoizedState=t:im(e,ce.memoizedState,t)},useTransition:function(){var t=Wl(Di)[0],e=nt().memoizedState;return[t,e]},useMutableSource:Vp,useSyncExternalStore:$p,useId:sm,unstable_isNewReconciler:!1};function Rr(t,e){try{var n="",r=e;do n+=wv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ba(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function um(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_o||(_o=!0,Qa=r),Ba(t,e)},n}function cm(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ba(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ba(t,e),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Gy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=l0.bind(null,t,e,n),e.then(t,t))}function Jd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,tn(n,e,1))),n.lanes|=1),t)}var Ky=Ft.ReactCurrentOwner,Le=!1;function Pe(t,e,n,r){e.child=t===null?Wp(e,null,n,r):jr(e,t.child,n,r)}function Zd(t,e,n,r,i){n=n.render;var s=e.ref;return yr(e,i),r=nc(t,e,n,r,s,i),n=rc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mt(t,e,i)):(q&&n&&Vu(e),e.flags|=1,Pe(t,e,r,i),e.child)}function eh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!fc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dm(t,e,s,r,i)):(t=Gs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(o,r)&&t.ref===e.ref)return Mt(t,e,i)}return e.flags|=1,t=sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function dm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pi(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Le=!0);else return e.lanes=t.lanes,Mt(t,e,i)}return za(t,e,n,r,i)}function hm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(hr,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(hr,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(hr,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(hr,Ve),Ve|=r;return Pe(t,e,i,n),e.child}function fm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function za(t,e,n,r,i){var s=ze(n)?Mn:je.current;return s=Tr(e,s),yr(e,i),n=nc(t,e,n,r,s,i),r=rc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mt(t,e,i)):(q&&r&&Vu(e),e.flags|=1,Pe(t,e,n,i),e.child)}function th(t,e,n,r,i){if(ze(n)){var s=!0;oo(e)}else s=!1;if(yr(e,i),e.stateNode===null)Vs(t,e),zp(e,n,r),Fa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tt(c):(c=ze(n)?Mn:je.current,c=Tr(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Yd(e,o,r,c),$t=!1;var f=e.memoizedState;o.state=f,ho(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Be.current||$t?(typeof h=="function"&&(Da(e,n,h,r),a=e.memoizedState),(l=$t||$d(e,n,l,r,f,a,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fp(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:st(e.type,l),o.props=c,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=ze(n)?Mn:je.current,a=Tr(e,a));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Yd(e,o,r,a),$t=!1,f=e.memoizedState,o.state=f,ho(e,r,o,i);var v=e.memoizedState;l!==d||f!==v||Be.current||$t?(typeof _=="function"&&(Da(e,n,_,r),v=e.memoizedState),(c=$t||$d(e,n,c,r,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ua(t,e,n,r,s,i)}function Ua(t,e,n,r,i,s){fm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zd(e,n,!1),Mt(t,e,s);r=e.stateNode,Ky.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jr(e,t.child,null,s),e.child=jr(e,null,l,s)):Pe(t,e,l,s),e.memoizedState=r.state,i&&zd(e,n,!0),e.child}function pm(t){var e=t.stateNode;e.pendingContext?Bd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bd(t,e.context,!1),Xu(t,e.containerInfo)}function nh(t,e,n,r,i){return Ir(),Yu(i),e.flags|=256,Pe(t,e,n,r),e.child}var Wa={dehydrated:null,treeContext:null,retryLane:0};function Ha(t){return{baseLanes:t,cachePool:null,transitions:null}}function mm(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(J,i&1),t===null)return Ma(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=el(o,r,0,null),t=Rn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ha(n),e.memoizedState=Wa,t):oc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Qy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=sn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=sn(l,s):(s=Rn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ha(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wa,r}return s=t.child,t=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function oc(t,e){return e=el({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ts(t,e,n,r){return r!==null&&Yu(r),jr(e,t.child,null,n),t=oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hl(Error(x(422))),Ts(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=el({mode:"visible",children:r.children},i,0,null),s=Rn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&jr(e,t.child,null,o),e.child.memoizedState=Ha(o),e.memoizedState=Wa,s);if(!(e.mode&1))return Ts(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(x(419)),r=Hl(s,r,void 0),Ts(t,e,o,r)}if(l=(o&t.childLanes)!==0,Le||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(t,i),ft(r,t,i,-1))}return hc(),r=Hl(Error(x(421))),Ts(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=a0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$e=en(i.nextSibling),Ye=e,q=!0,lt=null,t!==null&&(qe[Je++]=Tt,qe[Je++]=It,qe[Je++]=Ln,Tt=t.id,It=t.overflow,Ln=e),e=oc(e,r.children),e.flags|=4096,e)}function rh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),La(t.return,e,n)}function Vl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pe(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rh(t,n,e);else if(t.tag===19)rh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vl(e,!0,n,null,s);break;case"together":Vl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qy(t,e,n){switch(e.tag){case 3:pm(e),Ir();break;case 5:Hp(e);break;case 1:ze(e.type)&&oo(e);break;case 4:Xu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(uo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?mm(t,e,n):($(J,J.current&1),t=Mt(t,e,n),t!==null?t.sibling:null);$(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,hm(t,e,n)}return Mt(t,e,n)}var _m,Va,vm,ym;_m=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};vm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tn(Et.current);var s=null;switch(n){case"input":i=ha(t,i),r=ha(t,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=ma(t,i),r=ma(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=io)}_a(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Si.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Si.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Y("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ym=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ne(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Jy(t,e,n){var r=e.pendingProps;switch($u(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(e),null;case 1:return ze(e.type)&&so(),Ne(e),null;case 3:return r=e.stateNode,Pr(),K(Be),K(je),ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ks(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(Xa(lt),lt=null))),Va(t,e),Ne(e),null;case 5:Zu(e);var i=Tn(Mi.current);if(n=e.type,t!==null&&e.stateNode!=null)vm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Ne(e),null}if(t=Tn(Et.current),ks(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vt]=e,r[bi]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<ai.length;i++)Y(ai[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":hd(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":pd(r,s),Y("invalid",r)}_a(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,l,t),i=["children",""+l]):Si.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":gs(r),fd(r,s,!0);break;case"textarea":gs(r),md(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=io)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vt]=e,t[bi]=r,_m(t,e,!1,!1),e.stateNode=t;e:{switch(o=va(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<ai.length;i++)Y(ai[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":hd(t,r),i=ha(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),Y("invalid",t);break;case"textarea":pd(t,r),i=ma(t,r),Y("invalid",t);break;default:i=r}_a(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Qf(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Gf(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ci(t,a):typeof a=="number"&&Ci(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Si.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Y("scroll",t):a!=null&&Pu(t,s,a,o))}switch(n){case"input":gs(t),fd(t,r,!1);break;case"textarea":gs(t),md(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ne(e),null;case 6:if(t&&e.stateNode!=null)ym(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Tn(Mi.current),Tn(Et.current),ks(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(s=r.nodeValue!==n)&&(t=Ye,t!==null))switch(t.tag){case 3:Cs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return Ne(e),null;case 13:if(K(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&$e!==null&&e.mode&1&&!(e.flags&128))Lp(),Ir(),e.flags|=98560,s=!1;else if(s=ks(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[vt]=e}else Ir(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ne(e),s=!1}else lt!==null&&(Xa(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?he===0&&(he=3):hc())),e.updateQueue!==null&&(e.flags|=4),Ne(e),null);case 4:return Pr(),Va(t,e),t===null&&Ri(e.stateNode.containerInfo),Ne(e),null;case 10:return Qu(e.type._context),Ne(e),null;case 17:return ze(e.type)&&so(),Ne(e),null;case 19:if(K(J),s=e.memoizedState,s===null)return Ne(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zr(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fo(t),o!==null){for(e.flags|=128,Zr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Ar&&(e.flags|=128,r=!0,Zr(s,!1),e.lanes=4194304)}else{if(!r)if(t=fo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return Ne(e),null}else 2*se()-s.renderingStartTime>Ar&&n!==1073741824&&(e.flags|=128,r=!0,Zr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=J.current,$(J,r?n&1|2:n&1),e):(Ne(e),null);case 22:case 23:return dc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(Ne(e),e.subtreeFlags&6&&(e.flags|=8192)):Ne(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function Xy(t,e){switch($u(e),e.tag){case 1:return ze(e.type)&&so(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pr(),K(Be),K(je),ec(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zu(e),null;case 13:if(K(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Ir()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(J),null;case 4:return Pr(),null;case 10:return Qu(e.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var Is=!1,Te=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,N=null;function dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(t,e,r)}else n.current=null}function $a(t,e,n){try{n()}catch(r){ee(t,e,r)}}var ih=!1;function e0(t,e){if(Ia=to,t=Sp(),Hu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)f=d,d=_;for(;;){if(d===t)break t;if(f===n&&++c===i&&(l=o),f===s&&++h===r&&(a=o),(_=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ja={focusedElem:t,selectionRange:n},to=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:st(e.type,y),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){ee(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return v=ih,ih=!1,v}function gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$a(e,n,s)}i=i.next}while(i!==r)}}function Xo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ya(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wm(t){var e=t.alternate;e!==null&&(t.alternate=null,wm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[bi],delete e[Aa],delete e[Ly],delete e[Dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xm(t){return t.tag===5||t.tag===3||t.tag===4}function sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ga(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=io));else if(r!==4&&(t=t.child,t!==null))for(Ga(t,e,n),t=t.sibling;t!==null;)Ga(t,e,n),t=t.sibling}function Ka(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ka(t,e,n),t=t.sibling;t!==null;)Ka(t,e,n),t=t.sibling}var we=null,ot=!1;function Wt(t,e,n){for(n=n.child;n!==null;)Em(t,e,n),n=n.sibling}function Em(t,e,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:Te||dr(n,e);case 6:var r=we,i=ot;we=null,Wt(t,e,n),we=r,ot=i,we!==null&&(ot?(t=we,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(ot?(t=we,n=n.stateNode,t.nodeType===8?Dl(t.parentNode,n):t.nodeType===1&&Dl(t,n),Ii(t)):Dl(we,n.stateNode));break;case 4:r=we,i=ot,we=n.stateNode.containerInfo,ot=!0,Wt(t,e,n),we=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$a(n,e,o),i=i.next}while(i!==r)}Wt(t,e,n);break;case 1:if(!Te&&(dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,e,l)}Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Wt(t,e,n),Te=r):Wt(t,e,n);break;default:Wt(t,e,n)}}function oh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zy),e.forEach(function(r){var i=u0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:we=l.stateNode,ot=!1;break e;case 3:we=l.stateNode.containerInfo,ot=!0;break e;case 4:we=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(we===null)throw Error(x(160));Em(s,o,i),we=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){ee(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sm(e,t),e=e.sibling}function Sm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),gt(t),r&4){try{gi(3,t,t.return),Xo(3,t)}catch(y){ee(t,t.return,y)}try{gi(5,t,t.return)}catch(y){ee(t,t.return,y)}}break;case 1:it(e,t),gt(t),r&512&&n!==null&&dr(n,n.return);break;case 5:if(it(e,t),gt(t),r&512&&n!==null&&dr(n,n.return),t.flags&32){var i=t.stateNode;try{Ci(i,"")}catch(y){ee(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Vf(i,s),va(l,o);var c=va(l,s);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?Qf(i,d):h==="dangerouslySetInnerHTML"?Gf(i,d):h==="children"?Ci(i,d):Pu(i,h,d,c)}switch(l){case"input":fa(i,s);break;case"textarea":$f(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?mr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?mr(i,!!s.multiple,s.defaultValue,!0):mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[bi]=s}catch(y){ee(t,t.return,y)}}break;case 6:if(it(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ee(t,t.return,y)}}break;case 3:if(it(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(e.containerInfo)}catch(y){ee(t,t.return,y)}break;case 4:it(e,t),gt(t);break;case 13:it(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=se())),r&4&&oh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Te=(c=Te)||h,it(e,t),Te=c):it(e,t),gt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(N=t,h=t.child;h!==null;){for(d=N=h;N!==null;){switch(f=N,_=f.child,f.tag){case 0:case 11:case 14:case 15:gi(4,f,f.return);break;case 1:dr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:dr(f,f.return);break;case 22:if(f.memoizedState!==null){ah(d);continue}}_!==null?(_.return=f,N=_):ah(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Kf("display",o))}catch(y){ee(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){ee(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(e,t),gt(t),r&4&&oh(t);break;case 21:break;default:it(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xm(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ci(i,""),r.flags&=-33);var s=sh(t);Ka(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sh(t);Ga(t,l,o);break;default:throw Error(x(161))}}catch(a){ee(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function t0(t,e,n){N=t,Cm(t)}function Cm(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Is;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Te;l=Is;var c=Te;if(Is=o,(Te=a)&&!c)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?uh(i):a!==null?(a.return=o,N=a):uh(i);for(;s!==null;)N=s,Cm(s),s=s.sibling;N=i,Is=l,Te=c}lh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):lh(t)}}function lh(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Te||Xo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ii(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Te||e.flags&512&&Ya(e)}catch(f){ee(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function ah(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function uh(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xo(4,e)}catch(a){ee(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ee(e,i,a)}}var s=e.return;try{Ya(e)}catch(a){ee(e,s,a)}break;case 5:var o=e.return;try{Ya(e)}catch(a){ee(e,o,a)}}}catch(a){ee(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var n0=Math.ceil,go=Ft.ReactCurrentDispatcher,lc=Ft.ReactCurrentOwner,et=Ft.ReactCurrentBatchConfig,B=0,ve=null,ae=null,Se=0,Ve=0,hr=mn(0),he=0,Bi=null,Fn=0,Zo=0,ac=0,_i=null,Me=null,uc=0,Ar=1/0,Ct=null,_o=!1,Qa=null,nn=null,js=!1,Qt=null,vo=0,vi=0,qa=null,$s=-1,Ys=0;function Ae(){return B&6?se():$s!==-1?$s:$s=se()}function rn(t){return t.mode&1?B&2&&Se!==0?Se&-Se:By.transition!==null?(Ys===0&&(Ys=lp()),Ys):(t=U,t!==0||(t=window.event,t=t===void 0?16:pp(t.type)),t):1}function ft(t,e,n,r){if(50<vi)throw vi=0,qa=null,Error(x(185));Zi(t,n,r),(!(B&2)||t!==ve)&&(t===ve&&(!(B&2)&&(Zo|=n),he===4&&Gt(t,Se)),Ue(t,r),n===1&&B===0&&!(e.mode&1)&&(Ar=se()+500,Qo&&gn()))}function Ue(t,e){var n=t.callbackNode;Bv(t,e);var r=eo(t,t===ve?Se:0);if(r===0)n!==null&&vd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vd(n),e===1)t.tag===0?Fy(ch.bind(null,t)):bp(ch.bind(null,t)),Oy(function(){!(B&6)&&gn()}),n=null;else{switch(ap(r)){case 1:n=Mu;break;case 4:n=sp;break;case 16:n=Zs;break;case 536870912:n=op;break;default:n=Zs}n=Am(n,km.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function km(t,e){if($s=-1,Ys=0,B&6)throw Error(x(327));var n=t.callbackNode;if(wr()&&t.callbackNode!==n)return null;var r=eo(t,t===ve?Se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yo(t,r);else{e=r;var i=B;B|=2;var s=Tm();(ve!==t||Se!==e)&&(Ct=null,Ar=se()+500,Pn(t,e));do try{s0();break}catch(l){Nm(t,l)}while(!0);Ku(),go.current=s,B=i,ae!==null?e=0:(ve=null,Se=0,e=he)}if(e!==0){if(e===2&&(i=Sa(t),i!==0&&(r=i,e=Ja(t,i))),e===1)throw n=Bi,Pn(t,0),Gt(t,r),Ue(t,se()),n;if(e===6)Gt(t,r);else{if(i=t.current.alternate,!(r&30)&&!r0(i)&&(e=yo(t,r),e===2&&(s=Sa(t),s!==0&&(r=s,e=Ja(t,s))),e===1))throw n=Bi,Pn(t,0),Gt(t,r),Ue(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:xn(t,Me,Ct);break;case 3:if(Gt(t,r),(r&130023424)===r&&(e=uc+500-se(),10<e)){if(eo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ra(xn.bind(null,t,Me,Ct),e);break}xn(t,Me,Ct);break;case 4:if(Gt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*n0(r/1960))-r,10<r){t.timeoutHandle=Ra(xn.bind(null,t,Me,Ct),r);break}xn(t,Me,Ct);break;case 5:xn(t,Me,Ct);break;default:throw Error(x(329))}}}return Ue(t,se()),t.callbackNode===n?km.bind(null,t):null}function Ja(t,e){var n=_i;return t.current.memoizedState.isDehydrated&&(Pn(t,e).flags|=256),t=yo(t,e),t!==2&&(e=Me,Me=n,e!==null&&Xa(e)),t}function Xa(t){Me===null?Me=t:Me.push.apply(Me,t)}function r0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gt(t,e){for(e&=~ac,e&=~Zo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ht(e),r=1<<n;t[n]=-1,e&=~r}}function ch(t){if(B&6)throw Error(x(327));wr();var e=eo(t,0);if(!(e&1))return Ue(t,se()),null;var n=yo(t,e);if(t.tag!==0&&n===2){var r=Sa(t);r!==0&&(e=r,n=Ja(t,r))}if(n===1)throw n=Bi,Pn(t,0),Gt(t,e),Ue(t,se()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xn(t,Me,Ct),Ue(t,se()),null}function cc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Ar=se()+500,Qo&&gn())}}function Bn(t){Qt!==null&&Qt.tag===0&&!(B&6)&&wr();var e=B;B|=1;var n=et.transition,r=U;try{if(et.transition=null,U=1,t)return t()}finally{U=r,et.transition=n,B=e,!(B&6)&&gn()}}function dc(){Ve=hr.current,K(hr)}function Pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,by(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch($u(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:Pr(),K(Be),K(je),ec();break;case 5:Zu(r);break;case 4:Pr();break;case 13:K(J);break;case 19:K(J);break;case 10:Qu(r.type._context);break;case 22:case 23:dc()}n=n.return}if(ve=t,ae=t=sn(t.current,null),Se=Ve=e,he=0,Bi=null,ac=Zo=Fn=0,Me=_i=null,Nn!==null){for(e=0;e<Nn.length;e++)if(n=Nn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nn=null}return t}function Nm(t,e){do{var n=ae;try{if(Ku(),Ws.current=mo,po){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}po=!1}if(Dn=0,me=ce=X=null,mi=!1,Li=0,lc.current=null,n===null||n.return===null){he=1,Bi=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Jd(o);if(_!==null){_.flags&=-257,Xd(_,o,l,s,e),_.mode&1&&qd(s,c,e),e=_,a=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){qd(s,c,e),hc();break e}a=Error(x(426))}}else if(q&&l.mode&1){var E=Jd(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Xd(E,o,l,s,e),Yu(Rr(a,l));break e}}s=a=Rr(a,l),he!==4&&(he=2),_i===null?_i=[s]:_i.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=um(s,a,e);Hd(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=cm(s,l,e);Hd(s,w);break e}}s=s.return}while(s!==null)}jm(n)}catch(k){e=k,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Tm(){var t=go.current;return go.current=mo,t===null?mo:t}function hc(){(he===0||he===3||he===2)&&(he=4),ve===null||!(Fn&268435455)&&!(Zo&268435455)||Gt(ve,Se)}function yo(t,e){var n=B;B|=2;var r=Tm();(ve!==t||Se!==e)&&(Ct=null,Pn(t,e));do try{i0();break}catch(i){Nm(t,i)}while(!0);if(Ku(),B=n,go.current=r,ae!==null)throw Error(x(261));return ve=null,Se=0,he}function i0(){for(;ae!==null;)Im(ae)}function s0(){for(;ae!==null&&!Pv();)Im(ae)}function Im(t){var e=Rm(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?jm(t):ae=e,lc.current=null}function jm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xy(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ae=null;return}}else if(n=Jy(n,e,Ve),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);he===0&&(he=5)}function xn(t,e,n){var r=U,i=et.transition;try{et.transition=null,U=1,o0(t,e,n,r)}finally{et.transition=i,U=r}return null}function o0(t,e,n,r){do wr();while(Qt!==null);if(B&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zv(t,s),t===ve&&(ae=ve=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||js||(js=!0,Am(Zs,function(){return wr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=U;U=1;var l=B;B|=4,lc.current=null,e0(t,n),Sm(n,t),Ny(ja),to=!!Ia,ja=Ia=null,t.current=n,t0(n),Rv(),B=l,U=o,et.transition=s}else t.current=n;if(js&&(js=!1,Qt=t,vo=i),s=t.pendingLanes,s===0&&(nn=null),Ov(n.stateNode),Ue(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,t=Qa,Qa=null,t;return vo&1&&t.tag!==0&&wr(),s=t.pendingLanes,s&1?t===qa?vi++:(vi=0,qa=t):vi=0,gn(),null}function wr(){if(Qt!==null){var t=ap(vo),e=et.transition,n=U;try{if(et.transition=null,U=16>t?16:t,Qt===null)var r=!1;else{if(t=Qt,Qt=null,vo=0,B&6)throw Error(x(331));var i=B;for(B|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:gi(8,h,s)}var d=h.child;if(d!==null)d.return=h,N=d;else for(;N!==null;){h=N;var f=h.sibling,_=h.return;if(wm(h),h===c){N=null;break}if(f!==null){f.return=_,N=f;break}N=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var p=t.current;for(N=p;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=p;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xo(9,l)}}catch(k){ee(l,l.return,k)}if(l===o){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if(B=i,gn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Vo,t)}catch{}r=!0}return r}finally{U=n,et.transition=e}}return!1}function dh(t,e,n){e=Rr(n,e),e=um(t,e,1),t=tn(t,e,1),e=Ae(),t!==null&&(Zi(t,1,e),Ue(t,e))}function ee(t,e,n){if(t.tag===3)dh(t,t,n);else for(;e!==null;){if(e.tag===3){dh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=Rr(n,t),t=cm(e,t,1),e=tn(e,t,1),t=Ae(),e!==null&&(Zi(e,1,t),Ue(e,t));break}}e=e.return}}function l0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(Se&n)===n&&(he===4||he===3&&(Se&130023424)===Se&&500>se()-uc?Pn(t,0):ac|=n),Ue(t,e)}function Pm(t,e){e===0&&(t.mode&1?(e=ys,ys<<=1,!(ys&130023424)&&(ys=4194304)):e=1);var n=Ae();t=Ot(t,e),t!==null&&(Zi(t,e,n),Ue(t,n))}function a0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pm(t,n)}function u0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Pm(t,n)}var Rm;Rm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)Le=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Le=!1,qy(t,e,n);Le=!!(t.flags&131072)}else Le=!1,q&&e.flags&1048576&&Op(e,ao,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vs(t,e),t=e.pendingProps;var i=Tr(e,je.current);yr(e,n),i=nc(null,e,r,t,i,n);var s=rc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(s=!0,oo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ju(e),i.updater=qo,e.stateNode=i,i._reactInternals=e,Fa(e,r,t,n),e=Ua(null,e,r,!0,s,n)):(e.tag=0,q&&s&&Vu(e),Pe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=d0(r),t=st(r,t),i){case 0:e=za(null,e,r,t,n);break e;case 1:e=th(null,e,r,t,n);break e;case 11:e=Zd(null,e,r,t,n);break e;case 14:e=eh(null,e,r,st(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),za(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),th(t,e,r,i,n);case 3:e:{if(pm(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fp(t,e),ho(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Rr(Error(x(423)),e),e=nh(t,e,r,n,i);break e}else if(r!==i){i=Rr(Error(x(424)),e),e=nh(t,e,r,n,i);break e}else for($e=en(e.stateNode.containerInfo.firstChild),Ye=e,q=!0,lt=null,n=Wp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){e=Mt(t,e,n);break e}Pe(t,e,r,n)}e=e.child}return e;case 5:return Hp(e),t===null&&Ma(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pa(r,i)?o=null:s!==null&&Pa(r,s)&&(e.flags|=32),fm(t,e),Pe(t,e,o,n),e.child;case 6:return t===null&&Ma(e),null;case 13:return mm(t,e,n);case 4:return Xu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jr(e,null,r,n):Pe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Zd(t,e,r,i,n);case 7:return Pe(t,e,e.pendingProps,n),e.child;case 8:return Pe(t,e,e.pendingProps.children,n),e.child;case 12:return Pe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(uo,r._currentValue),r._currentValue=o,s!==null)if(mt(s.value,o)){if(s.children===i.children&&!Be.current){e=Mt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),La(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),La(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yr(e,n),i=tt(i),r=r(i),e.flags|=1,Pe(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),eh(t,e,r,i,n);case 15:return dm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Vs(t,e),e.tag=1,ze(r)?(t=!0,oo(e)):t=!1,yr(e,n),zp(e,r,i),Fa(e,r,i,n),Ua(null,e,r,!0,t,n);case 19:return gm(t,e,n);case 22:return hm(t,e,n)}throw Error(x(156,e.tag))};function Am(t,e){return ip(t,e)}function c0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new c0(t,e,n,r)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function d0(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Au)return 11;if(t===bu)return 14}return 2}function sn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")fc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case nr:return Rn(n.children,i,s,e);case Ru:o=8,i|=8;break;case aa:return t=Xe(12,n,e,i|2),t.elementType=aa,t.lanes=s,t;case ua:return t=Xe(13,n,e,i),t.elementType=ua,t.lanes=s,t;case ca:return t=Xe(19,n,e,i),t.elementType=ca,t.lanes=s,t;case Uf:return el(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bf:o=10;break e;case zf:o=9;break e;case Au:o=11;break e;case bu:o=14;break e;case Vt:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function el(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=Uf,t.lanes=n,t.stateNode={isHidden:!1},t}function $l(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Yl(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function h0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(t,e,n,r,i,s,o,l,a){return t=new h0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ju(s),t}function f0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bm(t){if(!t)return dn;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(ze(n))return Ap(t,n,e)}return e}function Om(t,e,n,r,i,s,o,l,a){return t=pc(n,r,!0,t,i,s,o,l,a),t.context=bm(null),n=t.current,r=Ae(),i=rn(n),s=Pt(r,i),s.callback=e??null,tn(n,s,i),t.current.lanes=i,Zi(t,i,r),Ue(t,r),t}function tl(t,e,n,r){var i=e.current,s=Ae(),o=rn(i);return n=bm(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tn(i,e,o),t!==null&&(ft(t,i,o,s),Us(t,i,o)),o}function wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mc(t,e){hh(t,e),(t=t.alternate)&&hh(t,e)}function p0(){return null}var Mm=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}nl.prototype.render=gc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));tl(t,e,null,null)};nl.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bn(function(){tl(null,t,null,null)}),e[bt]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=dp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yt.length&&e!==0&&e<Yt[n].priority;n++);Yt.splice(n,0,t),n===0&&fp(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fh(){}function m0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=wo(o);s.call(c)}}var o=Om(e,r,t,0,null,!1,!1,"",fh);return t._reactRootContainer=o,t[bt]=o.current,Ri(t.nodeType===8?t.parentNode:t),Bn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=wo(a);l.call(c)}}var a=pc(t,0,!1,null,null,!1,!1,"",fh);return t._reactRootContainer=a,t[bt]=a.current,Ri(t.nodeType===8?t.parentNode:t),Bn(function(){tl(e,a,n,r)}),a}function il(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=wo(o);l.call(a)}}tl(e,o,t,i)}else o=m0(n,e,t,i,r);return wo(o)}up=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=li(e.pendingLanes);n!==0&&(Lu(e,n|1),Ue(e,se()),!(B&6)&&(Ar=se()+500,gn()))}break;case 13:Bn(function(){var r=Ot(t,1);if(r!==null){var i=Ae();ft(r,t,1,i)}}),mc(t,1)}};Du=function(t){if(t.tag===13){var e=Ot(t,134217728);if(e!==null){var n=Ae();ft(e,t,134217728,n)}mc(t,134217728)}};cp=function(t){if(t.tag===13){var e=rn(t),n=Ot(t,e);if(n!==null){var r=Ae();ft(n,t,e,r)}mc(t,e)}};dp=function(){return U};hp=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};wa=function(t,e,n){switch(e){case"input":if(fa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ko(r);if(!i)throw Error(x(90));Hf(r),fa(r,i)}}}break;case"textarea":$f(t,n);break;case"select":e=n.value,e!=null&&mr(t,!!n.multiple,e,!1)}};Xf=cc;Zf=Bn;var g0={usingClientEntryPoint:!1,Events:[ts,or,Ko,qf,Jf,cc]},ei={findFiberByHostInstance:kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_0={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=np(t),t===null?null:t.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||p0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{Vo=Ps.inject(_0),xt=Ps}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(e))throw Error(x(200));return f0(t,e,null,n)};Ke.createRoot=function(t,e){if(!_c(t))throw Error(x(299));var n=!1,r="",i=Mm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pc(t,1,!1,null,null,n,!1,r,i),t[bt]=e.current,Ri(t.nodeType===8?t.parentNode:t),new gc(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=np(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Bn(t)};Ke.hydrate=function(t,e,n){if(!rl(e))throw Error(x(200));return il(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!_c(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Om(e,null,t,1,n??null,i,!1,s,o),t[bt]=e.current,Ri(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nl(e)};Ke.render=function(t,e,n){if(!rl(e))throw Error(x(200));return il(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!rl(t))throw Error(x(40));return t._reactRootContainer?(Bn(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[bt]=null})}),!0):!1};Ke.unstable_batchedUpdates=cc;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rl(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return il(t,e,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm)}catch(t){console.error(t)}}Lm(),Of.exports=Ke;var v0=Of.exports,ph=v0;oa.createRoot=ph.createRoot,oa.hydrateRoot=ph.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zi.apply(this,arguments)}var qt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qt||(qt={}));const mh="popstate";function y0(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=Gn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Za("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,c=a.indexOf("#");l=c===-1?a:a.slice(0,c)}return l+"#"+(typeof s=="string"?s:xo(s))}function r(i,s){vc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return x0(e,n,r,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function w0(){return Math.random().toString(36).substr(2,8)}function gh(t,e){return{usr:t.state,key:t.key,idx:e}}function Za(t,e,n,r){return n===void 0&&(n=null),zi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gn(e):e,{state:n,key:e&&e.key||r||w0()})}function xo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function x0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=qt.Pop,a=null,c=h();c==null&&(c=0,o.replaceState(zi({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){l=qt.Pop;let E=h(),m=E==null?null:E-c;c=E,a&&a({action:l,location:y.location,delta:m})}function f(E,m){l=qt.Push;let p=Za(y.location,E,m);n&&n(p,E),c=h()+1;let g=gh(p,c),w=y.createHref(p);try{o.pushState(g,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function _(E,m){l=qt.Replace;let p=Za(y.location,E,m);n&&n(p,E),c=h();let g=gh(p,c),w=y.createHref(p);o.replaceState(g,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function v(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:xo(E);return p=p.replace(/ $/,"%20"),ue(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return l},get location(){return t(i,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(mh,d),a=E,()=>{i.removeEventListener(mh,d),a=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:_,go(E){return o.go(E)}};return y}var _h;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_h||(_h={}));function E0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gn(e):e,i=yc(r.pathname||"/",n);if(i==null)return null;let s=Dm(t);S0(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let a=M0(i);o=A0(s[l],a)}return o}function Dm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(ue(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=on([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dm(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:P0(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Fm(s.path))i(s,o,a)}),e}function Fm(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fm(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function S0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:R0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const C0=/^:[\w-]+$/,k0=3,N0=2,T0=1,I0=10,j0=-2,vh=t=>t==="*";function P0(t,e){let n=t.split("/"),r=n.length;return n.some(vh)&&(r+=j0),e&&(r+=N0),n.filter(i=>!vh(i)).reduce((i,s)=>i+(C0.test(s)?k0:s===""?T0:I0),r)}function R0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function A0(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=b0({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},c);if(!h)return null;Object.assign(r,h.params);let d=l.route;s.push({params:r,pathname:on([i,h.pathname]),pathnameBase:B0(on([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=on([i,h.pathnameBase]))}return s}function b0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=O0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:f,isOptional:_}=h;if(f==="*"){let y=l[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[d];return _&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function O0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function M0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function L0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gn(t):t;return{pathname:n?n.startsWith("/")?n:D0(n,e):e,search:z0(r),hash:U0(i)}}function D0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function F0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bm(t,e){let n=F0(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gn(t):(i=zi({},t),ue(!i.pathname||!i.pathname.includes("?"),Gl("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Gl("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Gl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=L0(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||h)&&(a.pathname+="/"),a}const on=t=>t.join("/").replace(/\/\/+/g,"/"),B0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),z0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,U0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function W0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Um=["post","put","patch","delete"];new Set(Um);const H0=["get",...Um];new Set(H0);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ui.apply(this,arguments)}const wc=C.createContext(null),V0=C.createContext(null),Kn=C.createContext(null),sl=C.createContext(null),Bt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Wm=C.createContext(null);function $0(t,e){let{relative:n}=e===void 0?{}:e;rs()||ue(!1);let{basename:r,navigator:i}=C.useContext(Kn),{hash:s,pathname:o,search:l}=Ym(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:on([r,o])),i.createHref({pathname:a,search:l,hash:s})}function rs(){return C.useContext(sl)!=null}function zr(){return rs()||ue(!1),C.useContext(sl).location}function Hm(t){C.useContext(Kn).static||C.useLayoutEffect(t)}function Vm(){let{isDataRoute:t}=C.useContext(Bt);return t?o1():Y0()}function Y0(){rs()||ue(!1);let t=C.useContext(wc),{basename:e,future:n,navigator:r}=C.useContext(Kn),{matches:i}=C.useContext(Bt),{pathname:s}=zr(),o=JSON.stringify(Bm(i,n.v7_relativeSplatPath)),l=C.useRef(!1);return Hm(()=>{l.current=!0}),C.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let d=zm(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:on([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}const G0=C.createContext(null);function K0(t){let e=C.useContext(Bt).outlet;return e&&C.createElement(G0.Provider,{value:t},e)}function $m(){let{matches:t}=C.useContext(Bt),e=t[t.length-1];return e?e.params:{}}function Ym(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Kn),{matches:i}=C.useContext(Bt),{pathname:s}=zr(),o=JSON.stringify(Bm(i,r.v7_relativeSplatPath));return C.useMemo(()=>zm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Q0(t,e){return q0(t,e)}function q0(t,e,n,r){rs()||ue(!1);let{navigator:i}=C.useContext(Kn),{matches:s}=C.useContext(Bt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=zr(),h;if(e){var d;let E=typeof e=="string"?Gn(e):e;a==="/"||(d=E.pathname)!=null&&d.startsWith(a)||ue(!1),h=E}else h=c;let f=h.pathname||"/",_=f;if(a!=="/"){let E=a.replace(/^\//,"").split("/");_="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=E0(t,{pathname:_}),y=t1(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:on([a,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:on([a,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?C.createElement(sl.Provider,{value:{location:Ui({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:qt.Pop}},y):y}function J0(){let t=s1(),e=W0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const X0=C.createElement(J0,null);class Z0 extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(Bt.Provider,{value:this.props.routeContext},C.createElement(Wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e1(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(wc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Bt.Provider,{value:e},r)}function t1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id]));h>=0||ue(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:f,errors:_}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!_||_[d.route.id]===void 0);if(d.route.lazy||v){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,d,f)=>{let _,v=!1,y=null,E=null;n&&(_=l&&d.route.id?l[d.route.id]:void 0,y=d.route.errorElement||X0,a&&(c<0&&f===0?(l1("route-fallback",!1),v=!0,E=null):c===f&&(v=!0,E=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let g;return _?g=y:v?g=E:d.route.Component?g=C.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=h,C.createElement(e1,{match:d,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?C.createElement(Z0,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Gm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Gm||{}),Eo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Eo||{});function n1(t){let e=C.useContext(wc);return e||ue(!1),e}function r1(t){let e=C.useContext(V0);return e||ue(!1),e}function i1(t){let e=C.useContext(Bt);return e||ue(!1),e}function Km(t){let e=i1(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function s1(){var t;let e=C.useContext(Wm),n=r1(Eo.UseRouteError),r=Km(Eo.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function o1(){let{router:t}=n1(Gm.UseNavigateStable),e=Km(Eo.UseNavigateStable),n=C.useRef(!1);return Hm(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ui({fromRouteId:e},s)))},[t,e])}const yh={};function l1(t,e,n){!e&&!yh[t]&&(yh[t]=!0)}function a1(t){return K0(t.context)}function Q(t){ue(!1)}function u1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qt.Pop,navigator:s,static:o=!1,future:l}=t;rs()&&ue(!1);let a=e.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:a,navigator:s,static:o,future:Ui({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Gn(r));let{pathname:h="/",search:d="",hash:f="",state:_=null,key:v="default"}=r,y=C.useMemo(()=>{let E=yc(h,a);return E==null?null:{location:{pathname:E,search:d,hash:f,state:_,key:v},navigationType:i}},[a,h,d,f,_,v,i]);return y==null?null:C.createElement(Kn.Provider,{value:c},C.createElement(sl.Provider,{children:n,value:y}))}function c1(t){let{children:e,location:n}=t;return Q0(eu(e),n)}new Promise(()=>{});function eu(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,eu(r.props.children,s));return}r.type!==Q&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=eu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tu.apply(this,arguments)}function d1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function h1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function f1(t,e){return t.button===0&&(!e||e==="_self")&&!h1(t)}const p1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],m1="6";try{window.__reactRouterVersion=m1}catch{}const g1="startTransition",wh=av[g1];function _1(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=y0({window:i,v5Compat:!0}));let o=s.current,[l,a]=C.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=C.useCallback(d=>{c&&wh?wh(()=>a(d)):a(d)},[a,c]);return C.useLayoutEffect(()=>o.listen(h),[o,h]),C.createElement(u1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const v1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",y1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oe=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:c,preventScrollReset:h,unstable_viewTransition:d}=e,f=d1(e,p1),{basename:_}=C.useContext(Kn),v,y=!1;if(typeof c=="string"&&y1.test(c)&&(v=c,v1))try{let g=new URL(window.location.href),w=c.startsWith("//")?new URL(g.protocol+c):new URL(c),k=yc(w.pathname,_);w.origin===g.origin&&k!=null?c=k+w.search+w.hash:y=!0}catch{}let E=$0(c,{relative:i}),m=w1(c,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,unstable_viewTransition:d});function p(g){r&&r(g),g.defaultPrevented||m(g)}return C.createElement("a",tu({},f,{href:v||E,onClick:y||s?r:p,ref:n,target:a}))});var xh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xh||(xh={}));var Eh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Eh||(Eh={}));function w1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=Vm(),c=zr(),h=Ym(t,{relative:o});return C.useCallback(d=>{if(f1(d,n)){d.preventDefault();let f=r!==void 0?r:xo(c)===xo(h);a(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,a,h,r,i,n,t,s,o,l])}function x1(){const{pathname:t}=zr();return C.useEffect(()=>{window.scrollTo(0,0)},[t]),null}function E1(){const t=document.getElementById("menu"),[e,n]=C.useState(!1),r=i=>{n(!e),e?(document.documentElement.classList.remove("nav-open"),t.hidden=!0):(document.documentElement.classList.add("nav-open"),t.hidden=!1,t.querySelector(":not([disabled])").focus())};return u.jsx("nav",{className:"nav",children:u.jsxs("div",{children:[u.jsx("button",{onClick:r,className:"nav__toggle","aria-haspopup":"true","aria-expanded":e,"aria-controls":"menu",children:u.jsx("span",{children:"Toggle menu"})}),u.jsxs("ul",{id:"menu",children:[u.jsx("li",{children:u.jsxs(oe,{to:"/",onClick:r,children:[u.jsx("strong",{children:"Home"}),u.jsx("span",{children:"is where the Jäger is"})]})}),u.jsx("li",{children:u.jsxs(oe,{to:"/get-info",onClick:r,children:[u.jsx("strong",{children:"Get info"}),u.jsx("span",{children:"about the event"})]})}),u.jsx("li",{children:u.jsxs(oe,{to:"/history/2017",onClick:r,children:[u.jsx("strong",{children:"History"}),u.jsx("span",{children:"of this ski event"})]})}),u.jsx("li",{children:u.jsxs(oe,{to:"/game",onClick:r,children:[u.jsx("strong",{children:"Play"}),u.jsx("span",{children:"the game"})]})}),u.jsx("li",{children:u.jsxs(oe,{to:"/sign-up",onClick:r,children:[u.jsx("strong",{children:"Sign up"}),u.jsx("span",{children:"for the next MiraSki"})]})})]})]})})}function S1(){const t=zr().pathname==="/";return C.useEffect(()=>{t?document.body.classList.add("homepage"):document.body.classList.remove("homepage")},[t]),u.jsxs(u.Fragment,{children:[t?null:u.jsx(E1,{}),u.jsx(a1,{})]})}function C1(){return u.jsx("figure",{className:"splash-screen",children:u.jsx("div",{children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"759",height:"311",viewBox:"0 0 759 311",children:u.jsxs("g",{fill:"none",fillRule:"evenodd",children:[u.jsx("path",{d:"M.096.048h758.16v310.81H.095z"}),u.jsx("path",{fill:"#55C271",d:"M129.867 99.573l180.704-28.62c17.193-2.724 34.718 2.22 47.954 13.523 3.54 3.024 6.677 6.422 9.375 10.112L379.38 60.24 451.67 48.83l10.228 28.175c8.477-19.55 26.48-34.21 48.663-37.724C597.32 25.536 758.253.047 758.253.047v190.727L.096 310.855V120.126l82.552-13.075 23.63 49.667 23.59-57.147z"}),u.jsx("path",{fill:"#FFF",d:"M28.482 282.257c-.46.073-.93-.06-1.283-.36-.355-.303-.558-.746-.558-1.21V144.294c0-.984.718-1.824 1.69-1.978 6.668-1.056 31.122-4.923 38.223-6.047 1.155-.182 2.292.416 2.794 1.473l37.607 79.05c.106.223.335.364.582.36.25-.01.468-.163.564-.392 4.28-10.435 32.8-79.967 37.535-91.518.412-1.01 1.323-1.727 2.4-1.9l38.15-6.05c.418-.066.842.053 1.162.326.322.274.507.674.507 1.098V255.3c0 .986-.72 1.827-1.692 1.98-6.09.968-26.887 4.268-33.272 5.28-.47.075-.95-.06-1.312-.37-.362-.307-.57-.76-.57-1.236-.002-10.06-.023-56.995-.028-67.577 0-.203-.143-.377-.344-.42-.198-.038-.398.07-.476.256-4.62 11.064-27.35 65.527-30.774 73.73-.268.644-.85 1.1-1.54 1.21-3.628.563-15.18 2.367-19.823 3.093-1.164.182-2.312-.417-2.83-1.476-4.587-9.365-25.895-52.894-30.633-62.574-.102-.205-.33-.315-.552-.263-.22.053-.38.25-.377.48l.21 67.522c.003.99-.715 1.832-1.69 1.986l-33.676 5.337zm171.357-27.09c-.485.08-.982-.06-1.36-.38-.374-.317-.59-.785-.59-1.277V117.186c0-.983.716-1.824 1.69-1.98 6.205-.99 27.742-4.434 34.226-5.472.466-.073.94.06 1.298.365.357.306.565.753.565 1.224v136.313c0 .984-.714 1.822-1.684 1.98-6.172 1.002-27.553 4.478-34.147 5.55zm278.27-64.293l3.762-17.057c.23-1.038 1.207-1.733 2.263-1.605 5.993.72 24.85 2.872 32.383 2.34 9.013-.64 21.597-2.75 23.91-9.08 2.31-6.328-2.09-11.27-9.432-12.952-5.332-1.22-27.788-3.51-36.627-9.688-8.837-6.18-16.96-14.855-15.738-36.88 1.22-22.025 25.974-41.938 55.24-45.96 23.698-3.26 36.823.886 40.96 2.583.838.43 1.278 1.37 1.072 2.287-1.19 5.37-5.027 22.497-6.31 28.232-.242 1.064-1.262 1.767-2.342 1.608-4.975-.705-18.604-2.456-28.625-1.977-12.47.593-22.874 2.688-22.333 11.2.54 8.515 10.465 10.24 30.826 13.97 21.556 3.944 33.15 19.436 30.845 42.134-2.308 22.697-22.154 40.547-53.7 45.95-18.572 3.178-32.23 1.734-40.327.006l.538 1.395c.23.592.177 1.253-.14 1.802-.315.55-.864.923-1.49 1.022-7.144 1.13-27.174 4.288-33.274 5.25-1.033.162-2.037-.433-2.388-1.422-1.525-4.283-5.5-15.46-6.99-19.648-.332-.934-1.285-1.5-2.263-1.343-7.527 1.206-37.95 6.07-45.202 7.23-.955.153-1.743.83-2.037 1.753l-7.095 22.3c-.354 1.114-1.306 1.928-2.46 2.11-9.285 1.465-50.19 7.91-59.362 9.357-1.1.172-2.196-.35-2.755-1.317l-24.158-41.85c-.52-.9-1.54-1.382-2.565-1.213-1.99.328-5.267.866-7.257 1.197-.984.16-1.707 1.012-1.707 2.008v45.312c0 1.01-.73 1.87-1.724 2.03-6.227 1.012-27.507 4.473-34.095 5.542-.486.08-.985-.06-1.362-.38-.378-.32-.596-.792-.596-1.286V109.52c0-.985.715-1.823 1.688-1.98l36.09-5.768 30.096-4.62s23.718-5.096 36.808 16.83c13.69 22.93-.645 50.02-13.517 59.976-2.13 1.65-4.002 3.052-5.712 4.26-.69.486-.887 1.423-.45 2.143 3.843 6.366 20.62 34.143 20.62 34.143l44.418-128.87c.32-.93 1.127-1.61 2.1-1.766 6.23-1.004 29.067-4.68 35.29-5.685.915-.146 1.81.367 2.146 1.236 5.13 13.31 42.98 111.456 42.98 111.456zm140.226-89.235c0 .192.13.36.317.413.187.052.385-.03.484-.198l33.61-57.304c.45-.77 1.226-1.298 2.108-1.44 5.746-.922 27.657-4.443 35.375-5.684.494-.078.99.135 1.27.547.28.413.3.952.044 1.38-6.864 11.622-36.928 62.515-42.486 71.924-.54.91-.487 2.053.13 2.912 6.136 8.526 38.154 53.03 44.178 61.4.208.29.252.668.114.998-.138.328-.437.563-.79.617l-35.636 5.524c-1.176.184-2.355-.313-3.05-1.28-5.513-7.703-29.548-41.27-34.695-48.456-.14-.19-.38-.268-.602-.198-.22.07-.372.28-.372.51v53.76c0 .982-.713 1.82-1.684 1.978l-34.232 5.566c-.463.076-.94-.057-1.3-.36-.355-.31-.563-.753-.563-1.224V56.614c0-.984.715-1.824 1.688-1.978l34.366-5.495c.43-.067.87.055 1.203.34.33.282.523.696.523 1.133v51.026zm77.723 75.03c-.423.067-.852-.053-1.178-.33-.325-.277-.512-.683-.512-1.11l-.026-136.578c0-.986.715-1.824 1.69-1.98 6.243-1 28.012-4.48 34.346-5.49.437-.07.88.054 1.215.34.333.286.528.703.528 1.145v136.435c0 .984-.713 1.822-1.684 1.978-6.253 1.017-28.113 4.57-34.38 5.59zm-286.814-4.21c-.17.25-.432.42-.73.473-.295.052-.6-.02-.844-.196l-8.25-5.995c-.243-.177-.405-.445-.446-.74-.042-.298.04-.6.224-.84 1.878-2.41 6.96-8.935 8.396-10.774.086-.112.11-.255.068-.388-.044-.133-.15-.234-.284-.273l-13.098-3.716c-.29-.08-.534-.277-.674-.543-.143-.265-.17-.577-.078-.866.736-2.263 2.417-7.433 3.15-9.694.094-.287.3-.523.57-.656.27-.13.584-.148.865-.044 2.87 1.043 10.613 3.866 12.802 4.663.132.045.278.025.39-.056.112-.083.177-.213.172-.354L411 128.84c-.01-.298.102-.59.313-.808.208-.216.494-.338.796-.338h10.2c.303 0 .59.122.8.338.208.218.32.51.31.81-.105 3.043-.388 11.245-.47 13.56-.004.14.06.27.173.355.112.08.257.1.387.054 2.186-.787 9.932-3.576 12.8-4.61.28-.1.593-.085.86.047.272.133.477.367.568.654.734 2.262 2.418 7.44 3.154 9.704.094.286.065.598-.075.863-.143.266-.385.464-.677.544l-13.083 3.727c-.133.037-.24.14-.284.27-.04.134-.018.28.068.39 1.435 1.838 6.51 8.356 8.385 10.766.182.24.263.54.22.838-.04.297-.202.565-.444.742-1.922 1.398-6.324 4.596-8.25 5.995-.245.177-.55.248-.846.196-.296-.052-.56-.224-.728-.474l-7.616-11.354c-.078-.117-.21-.187-.35-.187-.14 0-.27.07-.348.186-1.3 1.94-5.912 8.81-7.616 11.353zm-125.915-9.605c0 .34.152.663.412.882.26.22.604.315.94.258l13.553-2.327s12.636-.81 17.26-9.466c4.665-8.732 1.436-16.796-3.362-19.632-3.97-2.347-7.322-1.86-15.347-.502-4.72.8-9.17 1.51-12.035 1.96-.816.126-1.42.832-1.42 1.66v27.167z"})]})})})})}function k1(){return u.jsx("nav",{className:"top-tasks",children:u.jsxs("ul",{children:[u.jsx("li",{children:u.jsxs(oe,{to:"/get-info",children:[u.jsx("strong",{children:"Get info"}),u.jsx("span",{children:"about the event"})]})}),u.jsx("li",{children:u.jsxs(oe,{to:"/history/2017",children:[u.jsx("strong",{children:"History"}),u.jsx("span",{children:"of this ski event"})]})}),u.jsx("li",{children:u.jsxs(oe,{to:"/game",children:[u.jsx("strong",{children:"Play"}),u.jsx("span",{children:"the game"})]})})]})})}function N1(){return u.jsxs(u.Fragment,{children:[u.jsx(C1,{}),u.jsx(k1,{})]})}var Sh={};/**
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
 */const Qm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw Ur(e)},Ur=function(t){return new Error("Firebase Database ("+Qm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const qm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},T1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),r.push(n[h],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):T1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||d==null)throw new I1;const f=s<<2|l>>4;if(r.push(f),c!==64){const _=l<<4&240|c>>2;if(r.push(_),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class I1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jm=function(t){const e=qm(t);return xc.encodeByteArray(e,!0)},So=function(t){return Jm(t).replace(/\./g,"")},nu=function(t){try{return xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function j1(t){return Xm(void 0,t)}function Xm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!P1(n)||(t[n]=Xm(t[n],e[n]));return t}function P1(t){return t!=="__proto__"}/**
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
 */function R1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A1=()=>R1().__FIREBASE_DEFAULTS__,b1=()=>{if(typeof process>"u"||typeof Sh>"u")return;const t=Sh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nu(t[1]);return e&&JSON.parse(e)},Zm=()=>{try{return A1()||b1()||O1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M1=t=>{var e,n;return(n=(e=Zm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},L1=t=>{const e=M1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eg=()=>{var t;return(t=Zm())===null||t===void 0?void 0:t.config};/**
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
 */class ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function D1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[So(JSON.stringify(n)),So(JSON.stringify(o)),""].join(".")}/**
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
 */function F1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(F1())}function B1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ng(){return Qm.NODE_ADMIN===!0}function z1(){try{return typeof indexedDB=="object"}catch{return!1}}function U1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const W1="FirebaseError";class is extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W1,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rg.prototype.create)}}class rg{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?H1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new is(i,l,r)}}function H1(t,e){return t.replace(V1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const V1=/\{\$([^}]+)}/g;/**
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
 */function Wi(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
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
 */const ig=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Wi(nu(s[0])||""),n=Wi(nu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},$1=function(t){const e=ig(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Y1=function(t){const e=ig(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ch(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ru(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(kh(s)&&kh(o)){if(!ru(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kh(t){return t!==null&&typeof t=="object"}/**
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
 */function G1(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class K1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=l^s&(o^l),h=1518500249):(c=s^o^l,h=1859775393):d<60?(c=s&o|l&(s|o),h=2400959708):(c=s^o^l,h=3395469782);const f=(i<<5|i>>>27)+c+a+h+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ec(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Q1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ll=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ss(t){return t&&t._delegate?t._delegate:t}class Hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const En="[DEFAULT]";/**
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
 */class q1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ol;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X1(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J1(t){return t===En?void 0:t}function X1(t){return t.instantiationMode==="EAGER"}/**
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
 */class Z1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new q1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const ew={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},tw=H.INFO,nw={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},rw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sg{constructor(e){this.name=e,this._logLevel=tw,this._logHandler=rw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ew[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const iw=(t,e)=>e.some(n=>t instanceof n);let Nh,Th;function sw(){return Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ow(){return Th||(Th=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const og=new WeakMap,iu=new WeakMap,lg=new WeakMap,Kl=new WeakMap,Sc=new WeakMap;function lw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&og.set(n,t)}).catch(()=>{}),Sc.set(e,t),e}function aw(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uw(t){su=t(su)}function cw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ql(this),e,...n);return lg.set(r,e.sort?e.sort():[e]),ln(r)}:ow().includes(t)?function(...e){return t.apply(Ql(this),e),ln(og.get(this))}:function(...e){return ln(t.apply(Ql(this),e))}}function dw(t){return typeof t=="function"?cw(t):(t instanceof IDBTransaction&&aw(t),iw(t,sw())?new Proxy(t,su):t)}function ln(t){if(t instanceof IDBRequest)return lw(t);if(Kl.has(t))return Kl.get(t);const e=dw(t);return e!==t&&(Kl.set(t,e),Sc.set(e,t)),e}const Ql=t=>Sc.get(t);function hw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ln(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ln(o.result),a.oldVersion,a.newVersion,ln(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const fw=["get","getKey","getAll","getAllKeys","count"],pw=["put","add","delete","clear"],ql=new Map;function Ih(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ql.get(e))return ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return ql.set(e,s),s}uw(t=>({...t,get:(e,n,r)=>Ih(e,n)||t.get(e,n,r),has:(e,n)=>!!Ih(e,n)||t.has(e,n)}));/**
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
 */class mw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",jh="0.9.29";/**
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
 */const zn=new sg("@firebase/app"),_w="@firebase/app-compat",vw="@firebase/analytics-compat",yw="@firebase/analytics",ww="@firebase/app-check-compat",xw="@firebase/app-check",Ew="@firebase/auth",Sw="@firebase/auth-compat",Cw="@firebase/database",kw="@firebase/database-compat",Nw="@firebase/functions",Tw="@firebase/functions-compat",Iw="@firebase/installations",jw="@firebase/installations-compat",Pw="@firebase/messaging",Rw="@firebase/messaging-compat",Aw="@firebase/performance",bw="@firebase/performance-compat",Ow="@firebase/remote-config",Mw="@firebase/remote-config-compat",Lw="@firebase/storage",Dw="@firebase/storage-compat",Fw="@firebase/firestore",Bw="@firebase/firestore-compat",zw="firebase",Uw="10.9.0";/**
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
 */const lu="[DEFAULT]",Ww={[ou]:"fire-core",[_w]:"fire-core-compat",[yw]:"fire-analytics",[vw]:"fire-analytics-compat",[xw]:"fire-app-check",[ww]:"fire-app-check-compat",[Ew]:"fire-auth",[Sw]:"fire-auth-compat",[Cw]:"fire-rtdb",[kw]:"fire-rtdb-compat",[Nw]:"fire-fn",[Tw]:"fire-fn-compat",[Iw]:"fire-iid",[jw]:"fire-iid-compat",[Pw]:"fire-fcm",[Rw]:"fire-fcm-compat",[Aw]:"fire-perf",[bw]:"fire-perf-compat",[Ow]:"fire-rc",[Mw]:"fire-rc-compat",[Lw]:"fire-gcs",[Dw]:"fire-gcs-compat",[Fw]:"fire-fst",[Bw]:"fire-fst-compat","fire-js":"fire-js",[zw]:"fire-js-all"};/**
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
 */const ko=new Map,au=new Map;function Hw(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function No(t){const e=t.name;if(au.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,t);for(const n of ko.values())Hw(n,t);return!0}function Vw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new rg("app","Firebase",$w);/**
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
 */class Yw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Gw=Uw;function ag(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=eg()),!n)throw an.create("no-options");const s=ko.get(i);if(s){if(ru(n,s.options)&&ru(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new Z1(i);for(const a of au.values())o.addComponent(a);const l=new Yw(n,r,o);return ko.set(i,l),l}function Kw(t=lu){const e=ko.get(t);if(!e&&t===lu&&eg())return ag();if(!e)throw an.create("no-app",{appName:t});return e}function xr(t,e,n){var r;let i=(r=Ww[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}No(new Hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Qw="firebase-heartbeat-database",qw=1,Vi="firebase-heartbeat-store";let Jl=null;function ug(){return Jl||(Jl=hw(Qw,qw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vi)}catch(n){console.warn(n)}}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function Jw(t){try{const n=(await ug()).transaction(Vi),r=await n.objectStore(Vi).get(cg(t));return await n.done,r}catch(e){if(e instanceof is)zn.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Ph(t,e){try{const r=(await ug()).transaction(Vi,"readwrite");await r.objectStore(Vi).put(e,cg(t)),await r.done}catch(n){if(n instanceof is)zn.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function cg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xw=1024,Zw=30*24*60*60*1e3;class ex{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Zw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rh(),{heartbeatsToSend:r,unsentEntries:i}=tx(this._heartbeatsCache.heartbeats),s=So(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Rh(){return new Date().toISOString().substring(0,10)}function tx(t,e=Xw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ah(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ah(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z1()?U1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ah(t){return So(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rx(t){No(new Hi("platform-logger",e=>new mw(e),"PRIVATE")),No(new Hi("heartbeat",e=>new ex(e),"PRIVATE")),xr(ou,jh,t),xr(ou,jh,"esm2017"),xr("fire-js","")}rx("");var bh={};const Oh="@firebase/database",Mh="1.0.3";/**
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
 */let dg="";function ix(t){dg=t}/**
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
 */class sx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ox{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const hg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sx(e)}}catch{}return new ox},In=hg("localStorage"),uu=hg("sessionStorage");/**
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
 */const Er=new sg("@firebase/database"),lx=function(){let t=1;return function(){return t++}}(),fg=function(t){const e=Q1(t),n=new K1;n.update(e);const r=n.digest();return xc.encodeByteArray(r)},os=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=os.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let An=null,Lh=!0;const ax=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Er.logLevel=H.VERBOSE,An=Er.log.bind(Er),e&&uu.set("logging_enabled",!0)):typeof t=="function"?An=t:(An=null,uu.remove("logging_enabled"))},Ie=function(...t){if(Lh===!0&&(Lh=!1,An===null&&uu.get("logging_enabled")===!0&&ax(!0)),An){const e=os.apply(null,t);An(e)}},ls=function(t){return function(...e){Ie(t,...e)}},cu=function(...t){const e="FIREBASE INTERNAL ERROR: "+os(...t);Er.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${os(...t)}`;throw Er.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+os(...t);Er.warn(e)},ux=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Or="[MIN_NAME]",Un="[MAX_NAME]",Wr=function(t,e){if(t===e)return 0;if(t===Or||e===Un)return-1;if(e===Or||t===Un)return 1;{const n=Dh(t),r=Dh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dx=function(t,e){return t===e?0:t<e?-1:1},ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Cc=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=Cc(t[e[r]]);return n+="}",n},mg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gg=function(t){S(!pg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},hx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function px(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const mx=new RegExp("^-?(0*)\\d{1,10}$"),gx=-2147483648,_x=2147483647,Dh=function(t){if(mx.test(t)){const e=Number(t);if(e>=gx&&e<=_x)return e}return null},Hr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},vx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wx{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class Sr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sr.OWNER="owner";/**
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
 */const kc="5",_g="v",vg="s",yg="r",wg="f",xg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Eg="ls",Sg="p",du="ac",Cg="websocket",kg="long_polling";/**
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
 */class Ng{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Tg(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Cg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xx(t)&&(n.ns=t.namespace);const i=[];return He(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Ex{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return j1(this.counters_)}}/**
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
 */const Xl={},Zl={};function Nc(t){const e=t.toString();return Xl[e]||(Xl[e]=new Ex),Xl[e]}function Sx(t,e){const n=t.toString();return Zl[n]||(Zl[n]=e()),Zl[n]}/**
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
 */class Cx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Hr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fh="start",kx="close",Nx="pLPCommand",Tx="pRTLPCB",Ig="id",jg="pw",Pg="ser",Ix="cb",jx="seg",Px="ts",Rx="d",Ax="dframe",Rg=1870,Ag=30,bx=Rg-Ag,Ox=25e3,Mx=3e4;class fr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ls(e),this.stats_=Nc(n),this.urlFn=a=>(this.appCheckToken&&(a[du]=this.appCheckToken),Tg(n,kg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Cx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mx)),cx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tc((...s)=>{const[o,l,a,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fh)this.id=l,this.password=a;else if(o===kx)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Fh]="t",r[Pg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Ix]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_g]=kc,this.transportSessionId&&(r[vg]=this.transportSessionId),this.lastSessionId&&(r[Eg]=this.lastSessionId),this.applicationId&&(r[Sg]=this.applicationId),this.appCheckToken&&(r[du]=this.appCheckToken),typeof location<"u"&&location.hostname&&xg.test(location.hostname)&&(r[yg]=wg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fr.forceAllow_=!0}static forceDisallow(){fr.forceDisallow_=!0}static isAvailable(){return fr.forceAllow_?!0:!fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hx()&&!fx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Jm(n),i=mg(r,bx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ax]="t",r[Ig]=e,r[jg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lx(),window[Nx+this.uniqueCallbackIdentifier]=e,window[Tx+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ig]=this.myID,e[jg]=this.myPW,e[Pg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ag+r.length<=Rg;){const o=this.pendingSegs.shift();r=r+"&"+jx+i+"="+o.seg+"&"+Px+i+"="+o.ts+"&"+Rx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Ox)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Lx=16384,Dx=45e3;let To=null;typeof MozWebSocket<"u"?To=MozWebSocket:typeof WebSocket<"u"&&(To=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ls(this.connId),this.stats_=Nc(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[_g]=kc,typeof location<"u"&&location.hostname&&xg.test(location.hostname)&&(o[yg]=wg),n&&(o[vg]=n),r&&(o[Eg]=r),i&&(o[du]=i),s&&(o[Sg]=s),Tg(e,Cg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let r;ng(),this.mySock=new To(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&To!==null&&!at.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Wi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mg(n,Lx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Dx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class $i{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of $i.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);$i.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$i.globalTransportInitialized_=!1;/**
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
 */const Fx=6e4,Bx=5e3,zx=10*1024,Ux=100*1024,ea="t",Bh="d",Wx="s",zh="r",Hx="e",Uh="o",Wh="a",Hh="n",Vh="p",Vx="h";class $x{constructor(e,n,r,i,s,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ls("c:"+this.id+":"),this.transportManager_=new $i(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ux?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ea in e){const n=e[ea];n===Wh?this.upgradeIfSecondaryHealthy_():n===zh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Uh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ti("t",e),r=ti("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ti("t",e),r=ti("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ti(ea,e);if(Bh in e){const r=e[Bh];if(n===Vx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Hh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Wx?this.onConnectionShutdown_(r):n===zh?this.onReset_(r):n===Hx?cu("Server Error: "+r):n===Uh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),kc!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),yi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Fx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class bg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Og{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Io extends Og{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Io}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $h=32,Yh=768;class W{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new W("")}function O(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hn(t){return t.pieces_.length-t.pieceNum_}function V(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new W(t.pieces_,e)}function Mg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Yx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Lg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new W(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof W)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new W(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=O(t),r=O(e);if(n===null)return e;if(n===r)return De(V(t),V(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ic(t,e){if(hn(t)!==hn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ct(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(hn(t)>hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Gx{constructor(e,n){this.errorPrefix_=n,this.parts_=Lg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ll(this.parts_[r]);Fg(this)}}function Kx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ll(e),Fg(t)}function Qx(t){const e=t.parts_.pop();t.byteLength_-=ll(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fg(t){if(t.byteLength_>Yh)throw new Error(t.errorPrefix_+"has a key path longer than "+Yh+" bytes ("+t.byteLength_+").");if(t.parts_.length>$h)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$h+") or object contains a cycle "+Sn(t))}function Sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class jc extends Og{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ni=1e3,qx=60*5*1e3,Gh=30*1e3,Jx=1.3,Xx=3e4,Zx="server_kill",Kh=3;class Rt extends bg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Rt.nextPersistentConnectionId_++,this.log_=ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ni,this.maxReconnectDelay_=qx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ng())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Io.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(_e(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ol,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;Rt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=br(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Y1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cu("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xx&&(this.reconnectDelay_=ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new $x(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{We(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Zx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&We(d),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ch(this.interruptReasons_)&&(this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Cc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new W(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kh&&(this.reconnectDelay_=Gh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dg.replace(/\./g,"-")]=1,tg()?e["framework.cordova"]=1:B1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Io.getInstance().currentlyOnline();return Ch(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0;Rt.nextConnectionId_=0;/**
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
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
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
 */class al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(Or,e),i=new M(Or,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
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
 */let Rs;class Bg extends al{static get __EMPTY_NODE(){return Rs}static set __EMPTY_NODE(e){Rs=e}compare(e,n){return Wr(e.name,n.name)}isDefinedOn(e){throw Ur("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(Un,Rs)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Rs)}toString(){return".key"}}const Cr=new Bg;/**
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
 */class As{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??Fe.EMPTY_NODE,this.right=s??Fe.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class eE{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new As(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new As(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new As(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new As(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new eE;/**
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
 */function tE(t,e){return Wr(t.name,e.name)}function Pc(t,e){return Wr(t,e)}/**
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
 */let hu;function nE(t){hu=t}const zg=function(t){return typeof t=="number"?"number:"+gg(t):"string:"+t},Ug=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else S(t===hu||t.isEmpty(),"priority of unexpected type.");S(t===hu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Qh;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ug(this.priorityNode_)}static set __childrenNodeConstructor(e){Qh=e}static get __childrenNodeConstructor(){return Qh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:O(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=O(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(V(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gg(this.value_):e+=this.value_,this.lazyHash_=fg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),s=pe.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Wg,Hg;function rE(t){Wg=t}function iE(t){Hg=t}class sE extends al{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Wr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Un,new pe("[PRIORITY-POST]",Hg))}makePost(e,n){const r=Wg(e);return new M(n,new pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const te=new sE;/**
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
 */const oE=Math.log(2);class lE{constructor(e){const n=s=>parseInt(Math.log(s)/oE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jo=function(t,e,n,r){t.sort(e);const i=function(a,c){const h=c-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new ge(f,d.node,ge.BLACK,null,null);{const _=parseInt(h/2,10)+a,v=i(a,_),y=i(_+1,c);return d=t[_],f=n?n(d):d,new ge(f,d.node,ge.BLACK,v,y)}},s=function(a){let c=null,h=null,d=t.length;const f=function(v,y){const E=d-v,m=d;d-=v;const p=i(E+1,m),g=t[E],w=n?n(g):g;_(new ge(w,g.node,y,null,p))},_=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),E=Math.pow(2,a.count-(v+1));y?f(E,ge.BLACK):(f(E,ge.BLACK),f(E,ge.RED))}return h},o=new lE(t.length),l=s(o);return new Fe(r||e,l)};/**
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
 */let ta;const Jn={};class jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Jn&&te,"ChildrenNode.ts has not been loaded"),ta=ta||new jt({".priority":Jn},{".priority":te}),ta}get(e){const n=br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=jo(r,e.getCompare()):l=Jn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new jt(h,c)}addToIndexes(e,n){const r=Co(this.indexes_,(i,s)=>{const o=br(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Jn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),jo(l,o.getCompare())}else return Jn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Co(this.indexes_,i=>{if(i===Jn)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new jt(r,this.indexSet_)}}/**
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
 */let ri;class R{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ug(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ri||(ri=new R(new Fe(Pc),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ri}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ri:n}}getChild(e){const n=O(e);return n===null?this:this.getImmediateChild(n).getChild(V(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ri:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=O(e);if(r===null)return n;{S(O(e)!==".priority"||hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(V(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(te,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zg(this.getPriority().val())+":"),this.forEachChild(te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===as?-1:0}withIndex(e){if(e===Cr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(te),i=n.getIterator(te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cr?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aE extends R{constructor(){super(new Fe(Pc),R.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const as=new aE;Object.defineProperties(M,{MIN:{value:new M(Or,R.EMPTY_NODE)},MAX:{value:new M(Un,as)}});Bg.__EMPTY_NODE=R.EMPTY_NODE;pe.__childrenNodeConstructor=R;nE(as);iE(as);/**
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
 */const uE=!0;function Ee(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,Ee(e))}if(!(t instanceof Array)&&uE){const n=[];let r=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ee(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=jo(n,tE,o=>o.name,Pc);if(r){const o=jo(n,te.getCompare());return new R(s,Ee(e),new jt({".priority":o},{".priority":te}))}else return new R(s,Ee(e),jt.Default)}else{let n=R.EMPTY_NODE;return He(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(e))}}rE(Ee);/**
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
 */class cE extends al{constructor(e){super(),this.indexPath_=e,S(!L(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Wr(e.name,n.name):s}makePost(e,n){const r=Ee(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,as);return new M(Un,e)}toString(){return Lg(this.indexPath_,0).join("/")}}/**
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
 */class dE extends al{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Wr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=Ee(e);return new M(n,r)}toString(){return".value"}}const hE=new dE;/**
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
 */function Vg(t){return{type:"value",snapshotNode:t}}function Mr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Yi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Gi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Rc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Yi(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Mr(n,r)):o.trackChildChange(Gi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(te,(i,s)=>{n.hasChild(i)||r.trackChildChange(Yi(i,s))}),n.isLeafNode()||n.forEachChild(te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Gi(i,s,o))}else r.trackChildChange(Mr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ki{constructor(e){this.indexedFilter_=new Rc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ki.getStartPost_(e),this.endPost_=Ki.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(te,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class pE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ki(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new M(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Gi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Yi(n,d));const y=l.updateImmediateChild(n,R.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Mr(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:h&&o(c,a)>=0?(s!=null&&(s.trackChildChange(Yi(c.name,c.node)),s.trackChildChange(Mr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,R.EMPTY_NODE)):e}}/**
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
 */class Ac{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Or}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new Ac;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mE(t){return t.loadsAllData()?new Rc(t.getIndex()):t.hasLimit()?new pE(t):new Ki(t)}function qh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===hE?n="$value":t.index_===Cr?n="$key":(S(t.index_ instanceof cE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=_e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+_e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=_e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
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
 */class Po extends bg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ls("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Po.getListenId_(e,r),l={};this.listens_[o]=l;const a=qh(e._queryParams);this.restRequest_(s+".json",a,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),br(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Po.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qh(e._queryParams),r=e._path.toString(),i=new ol;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+G1(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Wi(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class gE{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ro(){return{value:null,children:new Map}}function $g(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=O(e);t.children.has(r)||t.children.set(r,Ro());const i=t.children.get(r);e=V(e),$g(i,e,n)}}function fu(t,e,n){t.value!==null?n(e,t.value):_E(t,(r,i)=>{const s=new W(e.toString()+"/"+r);fu(i,s,n)})}function _E(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class vE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Xh=10*1e3,yE=30*1e3,wE=5*60*1e3;class xE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vE(e);const r=Xh+(yE-Xh)*Math.random();yi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;He(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),yi(this.reportStats_.bind(this),Math.floor(Math.random()*2*wE))}}/**
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
 */var dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function Yg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Oc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ao{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=dt.ACK_USER_WRITE,this.source=Yg()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new W(e));return new Ao(z(),n,this.revert)}}else return S(O(this.path)===e,"operationForChild called for unrelated child."),new Ao(V(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qi{constructor(e,n){this.source=e,this.path=n,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new Qi(this.source,z()):new Qi(this.source,V(this.path))}}/**
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
 */class Wn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=dt.OVERWRITE}operationForChild(e){return L(this.path)?new Wn(this.source,z(),this.snap.getImmediateChild(e)):new Wn(this.source,V(this.path),this.snap)}}/**
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
 */class qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=dt.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new W(e));return n.isEmpty()?null:n.value?new Wn(this.source,z(),n.value):new qi(this.source,z(),n)}else return S(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,V(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Hn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=O(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class EE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function SE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(fE(o.childName,o.snapshotNode))}),ii(t,i,"child_removed",e,r,n),ii(t,i,"child_added",e,r,n),ii(t,i,"child_moved",s,r,n),ii(t,i,"child_changed",e,r,n),ii(t,i,"value",e,r,n),i}function ii(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>kE(t,l,a)),o.forEach(l=>{const a=CE(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function CE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function kE(t,e,n){if(e.childName==null||n.childName==null)throw Ur("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ul(t,e){return{eventCache:t,serverCache:e}}function wi(t,e,n,r){return ul(new Hn(e,n,r),t.serverCache)}function Gg(t,e,n,r){return ul(t.eventCache,new Hn(e,n,r))}function pu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let na;const NE=()=>(na||(na=new Fe(dx)),na);class G{constructor(e,n=NE()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return He(e,(r,i)=>{n=n.set(new W(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(L(e))return null;{const r=O(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(V(e),n);return s!=null?{path:de(new W(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=O(e),r=this.children.get(n);return r!==null?r.subtree(V(e)):new G(null)}}set(e,n){if(L(e))return new G(n,this.children);{const r=O(e),s=(this.children.get(r)||new G(null)).set(V(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=O(e),r=this.children.get(n);if(r){const i=r.remove(V(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(L(e))return this.value;{const n=O(e),r=this.children.get(n);return r?r.get(V(e)):null}}setTree(e,n){if(L(e))return n;{const r=O(e),s=(this.children.get(r)||new G(null)).setTree(V(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(L(e))return null;{const s=O(e),o=this.children.get(s);return o?o.findOnPath_(V(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(L(e))return this;{this.value&&r(n,this.value);const i=O(e),s=this.children.get(i);return s?s.foreachOnPath_(V(e),de(n,i),r):new G(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new G(null))}}function xi(t,e,n){if(L(e))return new pt(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=De(i,e);return s=s.updateChild(o,n),new pt(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new pt(s)}}}function Zh(t,e,n){let r=t;return He(n,(i,s)=>{r=xi(r,de(e,i),s)}),r}function ef(t,e){if(L(e))return pt.empty();{const n=t.writeTree_.setTree(e,new G(null));return new pt(n)}}function mu(t,e){return Qn(t,e)!=null}function Qn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function tf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function un(t,e){if(L(e))return t;{const n=Qn(t,e);return n!=null?new pt(new G(n)):new pt(t.writeTree_.subtree(e))}}function gu(t){return t.writeTree_.isEmpty()}function Lr(t,e){return Kg(z(),t.writeTree_,e)}function Kg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Kg(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
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
 */function Mc(t,e){return Xg(e,t)}function TE(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xi(t.visibleWrites,e,n)),t.lastWriteId=r}function IE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function jE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&PE(l,r.path)?i=!1:ct(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return RE(t),!0;if(r.snap)t.visibleWrites=ef(t.visibleWrites,r.path);else{const l=r.children;He(l,a=>{t.visibleWrites=ef(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function PE(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(de(t.path,n),e))return!0;return!1}function RE(t){t.visibleWrites=Qg(t.allWrites,AE,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AE(t){return t.visible}function Qg(t,e,n){let r=pt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ct(n,o)?(l=De(n,o),r=xi(r,l,s.snap)):ct(o,n)&&(l=De(o,n),r=xi(r,z(),s.snap.getChild(l)));else if(s.children){if(ct(n,o))l=De(n,o),r=Zh(r,l,s.children);else if(ct(o,n))if(l=De(o,n),L(l))r=Zh(r,z(),s.children);else{const a=br(s.children,O(l));if(a){const c=a.getChild(V(l));r=xi(r,z(),c)}}}else throw Ur("WriteRecord should have .snap or .children")}}return r}function qg(t,e,n,r,i){if(!r&&!i){const s=Qn(t.visibleWrites,e);if(s!=null)return s;{const o=un(t.visibleWrites,e);if(gu(o))return n;if(n==null&&!mu(o,z()))return null;{const l=n||R.EMPTY_NODE;return Lr(o,l)}}}else{const s=un(t.visibleWrites,e);if(!i&&gu(s))return n;if(!i&&n==null&&!mu(s,z()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},l=Qg(t.allWrites,o,e),a=n||R.EMPTY_NODE;return Lr(l,a)}}}function bE(t,e,n){let r=R.EMPTY_NODE;const i=Qn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=un(t.visibleWrites,e);return n.forEachChild(te,(o,l)=>{const a=Lr(un(s,new W(o)),l);r=r.updateImmediateChild(o,a)}),tf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=un(t.visibleWrites,e);return tf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function OE(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(mu(t.visibleWrites,s))return null;{const o=un(t.visibleWrites,s);return gu(o)?i.getChild(n):Lr(o,i.getChild(n))}}function ME(t,e,n,r){const i=de(e,n),s=Qn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=un(t.visibleWrites,i);return Lr(o,r.getNode().getImmediateChild(n))}else return null}function LE(t,e){return Qn(t.visibleWrites,e)}function DE(t,e,n,r,i,s,o){let l;const a=un(t.visibleWrites,e),c=Qn(a,z());if(c!=null)l=c;else if(n!=null)l=Lr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&h.length<i;)d(_,r)!==0&&h.push(_),_=f.getNext();return h}else return[]}function FE(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function bo(t,e,n,r){return qg(t.writeTree,t.treePath,e,n,r)}function Lc(t,e){return bE(t.writeTree,t.treePath,e)}function nf(t,e,n,r){return OE(t.writeTree,t.treePath,e,n,r)}function Oo(t,e){return LE(t.writeTree,de(t.treePath,e))}function BE(t,e,n,r,i,s){return DE(t.writeTree,t.treePath,e,n,r,i,s)}function Dc(t,e,n){return ME(t.writeTree,t.treePath,e,n)}function Jg(t,e){return Xg(de(t.treePath,e),t.writeTree)}function Xg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class zE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Gi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Yi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Mr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Gi(r,e.snapshotNode,i.oldSnap));else throw Ur("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class UE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Zg=new UE;class Fc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vn(this.viewCache_),s=BE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function WE(t){return{filter:t}}function HE(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function VE(t,e,n,r,i){const s=new zE;let o,l;if(n.type===dt.OVERWRITE){const c=n;c.source.fromUser?o=_u(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Mo(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===dt.MERGE){const c=n;c.source.fromUser?o=YE(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=vu(t,e,c.path,c.children,r,i,l,s))}else if(n.type===dt.ACK_USER_WRITE){const c=n;c.revert?o=QE(t,e,c.path,r,i,s):o=GE(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===dt.LISTEN_COMPLETE)o=KE(t,e,n.path,r,s);else throw Ur("Unknown operation type: "+n.type);const a=s.getChanges();return $E(e,o,a),{viewCache:o,changes:a}}function $E(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=pu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Vg(pu(e)))}}function e_(t,e,n,r,i,s){const o=e.eventCache;if(Oo(r,n)!=null)return e;{let l,a;if(L(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Vn(e),h=c instanceof R?c:R.EMPTY_NODE,d=Lc(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=bo(r,Vn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=O(n);if(c===".priority"){S(hn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=nf(r,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=V(n);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=nf(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(c).updateChild(h,f):d=o.getNode().getImmediateChild(c)}else d=Dc(r,c,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),c,d,h,i,s):l=o.getNode()}}return wi(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Mo(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);c=h.updateFullNode(a.getNode(),_,null)}else{const _=O(n);if(!a.isCompleteForPath(n)&&hn(n)>1)return e;const v=V(n),E=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=h.updatePriority(a.getNode(),E):c=h.updateChild(a.getNode(),_,E,v,Zg,null)}const d=Gg(e,c,a.isFullyInitialized()||L(n),h.filtersNodes()),f=new Fc(i,d,s);return e_(t,d,n,i,f,l)}function _u(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const h=new Fc(i,e,s);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=wi(e,c,!0,t.filter.filtersNodes());else{const d=O(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=wi(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=V(n),_=l.getNode().getImmediateChild(d);let v;if(L(f))v=r;else{const y=h.getCompleteChild(d);y!=null?Mg(f)===".priority"&&y.getChild(Dg(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=R.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,f,h,o);a=wi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function rf(t,e){return t.eventCache.isCompleteForChild(e)}function YE(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const h=de(n,a);rf(e,O(h))&&(l=_u(t,l,h,c,i,s,o))}),r.foreach((a,c)=>{const h=de(n,a);rf(e,O(h))||(l=_u(t,l,h,c,i,s,o))}),l}function sf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function vu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=r:c=new G(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=sf(t,_,f);a=Mo(t,a,new W(d),v,i,s,o,l)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),y=sf(t,v,f);a=Mo(t,a,new W(d),y,i,s,o,l)}}),a}function GE(t,e,n,r,i,s,o){if(Oo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Mo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(L(n)){let c=new G(null);return a.getNode().forEachChild(Cr,(h,d)=>{c=c.set(new W(h),d)}),vu(t,e,n,c,i,s,l,o)}else return e}else{let c=new G(null);return r.foreach((h,d)=>{const f=de(n,h);a.isCompleteForPath(f)&&(c=c.set(h,a.getNode().getChild(f)))}),vu(t,e,n,c,i,s,l,o)}}function KE(t,e,n,r,i){const s=e.serverCache,o=Gg(e,s.getNode(),s.isFullyInitialized()||L(n),s.isFiltered());return e_(t,o,n,r,Zg,i)}function QE(t,e,n,r,i,s){let o;if(Oo(r,n)!=null)return e;{const l=new Fc(r,e,i),a=e.eventCache.getNode();let c;if(L(n)||O(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=bo(r,Vn(e));else{const d=e.serverCache.getNode();S(d instanceof R,"serverChildren would be complete if leaf node"),h=Lc(r,d)}h=h,c=t.filter.updateFullNode(a,h,s)}else{const h=O(n);let d=Dc(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?c=t.filter.updateChild(a,h,d,V(n),l,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,R.EMPTY_NODE,V(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bo(r,Vn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Oo(r,z())!=null,wi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class qE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Rc(r.getIndex()),s=mE(r);this.processor_=WE(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),h=new Hn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Hn(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ul(d,h),this.eventGenerator_=new EE(this.query_)}get query(){return this.query_}}function JE(t){return t.viewCache_.serverCache.getNode()}function XE(t,e){const n=Vn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(O(e)).isEmpty())?n.getChild(e):null}function of(t){return t.eventRegistrations_.length===0}function ZE(t,e){t.eventRegistrations_.push(e)}function lf(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function af(t,e,n,r){e.type===dt.MERGE&&e.source.queryId!==null&&(S(Vn(t.viewCache_),"We should always have a full cache before handling merges"),S(pu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=VE(t.processor_,i,e,n,r);return HE(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,t_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function eS(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(s,o)=>{r.push(Mr(s,o))}),n.isFullyInitialized()&&r.push(Vg(n.getNode())),t_(t,r,n.getNode(),e)}function t_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return SE(t.eventGenerator_,e,n,i)}/**
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
 */let Lo;class tS{constructor(){this.views=new Map}}function nS(t){S(!Lo,"__referenceConstructor has already been defined"),Lo=t}function rS(){return S(Lo,"Reference.ts has not been loaded"),Lo}function iS(t){return t.views.size===0}function Bc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),af(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(af(o,e,n,r));return s}}function sS(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=bo(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=Lc(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const c=ul(new Hn(l,a,!1),new Hn(r,i,!1));return new qE(e,c)}return o}function oS(t,e,n,r,i,s){const o=sS(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ZE(o,n),eS(o,n)}function lS(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=fn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(lf(c,n,r)),of(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(lf(a,n,r)),of(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!fn(t)&&s.push(new(rS())(e._repo,e._path)),{removed:s,events:o}}function n_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function kr(t,e){let n=null;for(const r of t.views.values())n=n||XE(r,e);return n}function r_(t,e){if(e._queryParams.loadsAllData())return cl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function i_(t,e){return r_(t,e)!=null}function fn(t){return cl(t)!=null}function cl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Do;function aS(t){S(!Do,"__referenceConstructor has already been defined"),Do=t}function uS(){return S(Do,"Reference.ts has not been loaded"),Do}let cS=1;class uf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=FE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function s_(t,e,n,r,i){return TE(t.pendingWriteTree_,e,n,r,i),i?us(t,new Wn(Yg(),e,n)):[]}function jn(t,e,n=!1){const r=IE(t.pendingWriteTree_,e);if(jE(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(z(),!0):He(r.children,o=>{s=s.set(new W(o),!0)}),us(t,new Ao(r.path,s,n))}else return[]}function dl(t,e,n){return us(t,new Wn(bc(),e,n))}function dS(t,e,n){const r=G.fromObject(n);return us(t,new qi(bc(),e,r))}function hS(t,e){return us(t,new Qi(bc(),e))}function fS(t,e,n){const r=Uc(t,n);if(r){const i=Wc(r),s=i.path,o=i.queryId,l=De(s,e),a=new Qi(Oc(o),l);return Hc(t,s,a)}else return[]}function yu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||i_(o,e))){const a=lS(o,e,n,r);iS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,_)=>fn(_));if(h&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=gS(f);for(let v=0;v<_.length;++v){const y=_[v],E=y.query,m=a_(t,y);t.listenProvider_.startListening(Ei(E),Fo(t,E),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Ei(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(hl(f));t.listenProvider_.stopListening(Ei(f),_)}))}_S(t,c)}return l}function pS(t,e,n,r){const i=Uc(t,r);if(i!=null){const s=Wc(i),o=s.path,l=s.queryId,a=De(o,e),c=new Wn(Oc(l),a,n);return Hc(t,o,c)}else return[]}function mS(t,e,n,r){const i=Uc(t,r);if(i){const s=Wc(i),o=s.path,l=s.queryId,a=De(o,e),c=G.fromObject(n),h=new qi(Oc(l),a,c);return Hc(t,o,h)}else return[]}function cf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=De(f,i);s=s||kr(_,v),o=o||fn(_)});let l=t.syncPointTree_.get(i);l?(o=o||fn(l),s=s||kr(l,z())):(l=new tS,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=kr(v,z());y&&(s=s.updateImmediateChild(_,y))}));const c=i_(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=hl(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=vS();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const h=Mc(t.pendingWriteTree_,i);let d=oS(l,e,n,h,s,a);if(!c&&!o&&!r){const f=r_(l,e);d=d.concat(yS(t,e,f))}return d}function zc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),c=kr(l,a);if(c)return c});return qg(i,e,s,n,!0)}function us(t,e){return o_(e,t.syncPointTree_,null,Mc(t.pendingWriteTree_,z()))}function o_(t,e,n,r){if(L(t.path))return l_(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=kr(i,z()));let s=[];const o=O(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=Jg(r,o);s=s.concat(o_(l,a,c,h))}return i&&(s=s.concat(Bc(i,t,r,n))),s}}function l_(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=kr(i,z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Jg(r,o),h=t.operationForChild(o);h&&(s=s.concat(l_(h,l,a,c)))}),i&&(s=s.concat(Bc(i,t,r,n))),s}function a_(t,e){const n=e.query,r=Fo(t,n);return{hashFn:()=>(JE(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?fS(t,n._path,r):hS(t,n._path);{const s=px(i,n);return yu(t,n,null,s)}}}}function Fo(t,e){const n=hl(e);return t.queryToTagMap.get(n)}function hl(t){return t._path.toString()+"$"+t._queryIdentifier}function Uc(t,e){return t.tagToQueryMap.get(e)}function Wc(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new W(t.substr(0,e))}}function Hc(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=Mc(t.pendingWriteTree_,e);return Bc(r,n,i,null)}function gS(t){return t.fold((e,n,r)=>{if(n&&fn(n))return[cl(n)];{let i=[];return n&&(i=n_(n)),He(r,(s,o)=>{i=i.concat(o)}),i}})}function Ei(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(uS())(t._repo,t._path):t}function _S(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=hl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function vS(){return cS++}function yS(t,e,n){const r=e._path,i=Fo(t,e),s=a_(t,n),o=t.listenProvider_.startListening(Ei(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,d)=>{if(!L(c)&&h&&fn(h))return[cl(h).query];{let f=[];return h&&(f=f.concat(n_(h).map(_=>_.query))),He(d,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(Ei(h),Fo(t,h))}}return o}/**
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
 */class Vc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vc(n)}node(){return this.node_}}class $c{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new $c(this.syncTree_,n)}node(){return zc(this.syncTree_,this.path_)}}const wS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},df=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ES(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},ES=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},SS=function(t,e,n,r){return Yc(e,new $c(n,t),r)},u_=function(t,e,n){return Yc(t,new Vc(e),n)};function Yc(t,e,n){const r=t.getPriority().val(),i=df(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=df(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,Ee(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pe(i))),o.forEachChild(te,(l,a)=>{const c=Yc(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class Gc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Kc(t,e){let n=e instanceof W?e:new W(e),r=t,i=O(n);for(;i!==null;){const s=br(r.node.children,i)||{children:{},childCount:0};r=new Gc(i,r,s),n=V(n),i=O(n)}return r}function Vr(t){return t.node.value}function c_(t,e){t.node.value=e,wu(t)}function d_(t){return t.node.childCount>0}function CS(t){return Vr(t)===void 0&&!d_(t)}function fl(t,e){He(t.node.children,(n,r)=>{e(new Gc(n,t,r))})}function h_(t,e,n,r){n&&!r&&e(t),fl(t,i=>{h_(i,e,!0,r)}),n&&r&&e(t)}function kS(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function cs(t){return new W(t.parent===null?t.name:cs(t.parent)+"/"+t.name)}function wu(t){t.parent!==null&&NS(t.parent,t.name,t)}function NS(t,e,n){const r=CS(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,wu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wu(t))}/**
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
 */const TS=/[\[\].#$\/\u0000-\u001F\u007F]/,IS=/[\[\].#$\u0000-\u001F\u007F]/,ra=10*1024*1024,f_=function(t){return typeof t=="string"&&t.length!==0&&!TS.test(t)},p_=function(t){return typeof t=="string"&&t.length!==0&&!IS.test(t)},jS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),p_(t)},PS=function(t,e,n,r){r&&e===void 0||Qc(Ec(t,"value"),e,n)},Qc=function(t,e,n){const r=n instanceof W?new Gx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Sn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Sn(r)+" with contents = "+e.toString());if(pg(e))throw new Error(t+"contains "+e.toString()+" "+Sn(r));if(typeof e=="string"&&e.length>ra/3&&ll(e)>ra)throw new Error(t+"contains a string greater than "+ra+" utf8 bytes "+Sn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(He(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!f_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Sn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Kx(r,o),Qc(t,l,r),Qx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Sn(r)+" in addition to actual children.")}},m_=function(t,e,n,r){if(!(r&&n===void 0)&&!p_(n))throw new Error(Ec(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},RS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),m_(t,e,n,r)},AS=function(t,e){if(O(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},bS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!f_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!jS(n))throw new Error(Ec(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class OS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ic(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function g_(t,e,n){qc(t,n),__(t,r=>Ic(r,e))}function Dt(t,e,n){qc(t,n),__(t,r=>ct(r,e)||ct(e,r))}function __(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(MS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function MS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();An&&Ie("event: "+n.toString()),Hr(r)}}}/**
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
 */const LS="repo_interrupt",DS=25;class FS{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new OS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ro(),this.transactionQueueTree_=new Gc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BS(t,e,n){if(t.stats_=Nc(t.repoInfo_),t.forceRestClient_||vx())t.server_=new Po(t.repoInfo_,(r,i,s,o)=>{hf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ff(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Rt(t.repoInfo_,e,(r,i,s,o)=>{hf(t,r,i,s,o)},r=>{ff(t,r)},r=>{US(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Sx(t.repoInfo_,()=>new xE(t.stats_,t.server_)),t.infoData_=new gE,t.infoSyncTree_=new uf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=dl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Xc(t,"connected",!1),t.serverSyncTree_=new uf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);Dt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function zS(t){const n=t.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jc(t){return wS({timestamp:zS(t)})}function hf(t,e,n,r,i){t.dataUpdateCount++;const s=new W(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Co(n,c=>Ee(c));o=mS(t.serverSyncTree_,s,a,i)}else{const a=Ee(n);o=pS(t.serverSyncTree_,s,a,i)}else if(r){const a=Co(n,c=>Ee(c));o=dS(t.serverSyncTree_,s,a)}else{const a=Ee(n);o=dl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=pl(t,s)),Dt(t.eventQueue_,l,o)}function ff(t,e){Xc(t,"connected",e),e===!1&&HS(t)}function US(t,e){He(e,(n,r)=>{Xc(t,n,r)})}function Xc(t,e,n){const r=new W("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(r,i);const s=dl(t.infoSyncTree_,r,i);Dt(t.eventQueue_,r,s)}function v_(t){return t.nextWriteId_++}function WS(t,e,n,r,i){Zc(t,"set",{path:e.toString(),value:n,priority:r});const s=Jc(t),o=Ee(n,r),l=zc(t.serverSyncTree_,e),a=u_(o,l,s),c=v_(t),h=s_(t.serverSyncTree_,e,a,c,!0);qc(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||We("set at "+e+" failed: "+f);const y=jn(t.serverSyncTree_,c,!v);Dt(t.eventQueue_,e,y),YS(t,i,f,_)});const d=S_(t,e);pl(t,d),Dt(t.eventQueue_,d,[])}function HS(t){Zc(t,"onDisconnectEvents");const e=Jc(t),n=Ro();fu(t.onDisconnect_,z(),(i,s)=>{const o=SS(i,s,t.serverSyncTree_,e);$g(n,i,o)});let r=[];fu(n,z(),(i,s)=>{r=r.concat(dl(t.serverSyncTree_,i,s));const o=S_(t,i);pl(t,o)}),t.onDisconnect_=Ro(),Dt(t.eventQueue_,z(),r)}function VS(t,e,n){let r;O(e._path)===".info"?r=cf(t.infoSyncTree_,e,n):r=cf(t.serverSyncTree_,e,n),g_(t.eventQueue_,e._path,r)}function xu(t,e,n){let r;O(e._path)===".info"?r=yu(t.infoSyncTree_,e,n):r=yu(t.serverSyncTree_,e,n),g_(t.eventQueue_,e._path,r)}function $S(t){t.persistentConnection_&&t.persistentConnection_.interrupt(LS)}function Zc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function YS(t,e,n,r){e&&Hr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function y_(t,e,n){return zc(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function ed(t,e=t.transactionQueueTree_){if(e||ml(t,e),Vr(e)){const n=x_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&GS(t,cs(e),n)}else d_(e)&&fl(e,n=>{ed(t,n)})}function GS(t,e,n){const r=n.map(c=>c.currentWriteId),i=y_(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];S(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=De(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Zc(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(jn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ml(t,Kc(t.transactionQueueTree_,e)),ed(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)Hr(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{We("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}pl(t,e)}},o)}function pl(t,e){const n=w_(t,e),r=cs(n),i=x_(t,n);return KS(t,i,r),r}function KS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=De(n,a.path);let h=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,i=i.concat(jn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=DS)h=!0,d="maxretry",i=i.concat(jn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=y_(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Qc("transaction failed: Data returned ",_,a.path);let v=Ee(_);typeof _=="object"&&_!=null&&zt(_,".priority")||(v=v.updatePriority(f.getPriority()));const E=a.currentWriteId,m=Jc(t),p=u_(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=v_(t),o.splice(o.indexOf(E),1),i=i.concat(s_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(jn(t.serverSyncTree_,E,!0))}else h=!0,d="nodata",i=i.concat(jn(t.serverSyncTree_,a.currentWriteId,!0))}Dt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}ml(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Hr(r[l]);ed(t,t.transactionQueueTree_)}function w_(t,e){let n,r=t.transactionQueueTree_;for(n=O(e);n!==null&&Vr(r)===void 0;)r=Kc(r,n),e=V(e),n=O(e);return r}function x_(t,e){const n=[];return E_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function E_(t,e,n){const r=Vr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fl(e,i=>{E_(t,i,n)})}function ml(t,e){const n=Vr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,c_(e,n.length>0?n:void 0)}fl(e,r=>{ml(t,r)})}function S_(t,e){const n=cs(w_(t,e)),r=Kc(t.transactionQueueTree_,e);return kS(r,i=>{ia(t,i)}),ia(t,r),h_(r,i=>{ia(t,i)}),n}function ia(t,e){const n=Vr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?c_(e,void 0):n.length=s+1,Dt(t.eventQueue_,cs(e),i);for(let o=0;o<r.length;o++)Hr(r[o])}}/**
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
 */function QS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const pf=function(t,e){const n=JS(t),r=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ux();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ng(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new W(n.pathString)}},JS=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=QS(t.substring(h,d)));const f=qS(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class C_{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class k_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class N_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class td{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return L(this._path)?null:Mg(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=Jh(this._queryParams),n=Cc(e);return n==="{}"?"default":n}get _queryObject(){return Jh(this._queryParams)}isEqual(e){if(e=ss(e),!(e instanceof td))return!1;const n=this._repo===e._repo,r=Ic(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yx(this._path)}}class Ut extends td{constructor(e,n){super(e,n,new Ac,!1)}get parent(){const e=Dg(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ji{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new W(e),r=Bo(this.ref,e);return new Ji(this._node.getChild(n),r,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ji(i,Bo(this.ref,r),te)))}hasChild(e){const n=new W(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bn(t,e){return t=ss(t),t._checkNotDeleted("ref"),e!==void 0?Bo(t._root,e):t._root}function Bo(t,e){return t=ss(t),O(t._path)===null?RS("child","path",e,!1):m_("child","path",e,!1),new Ut(t._repo,de(t._path,e))}function T_(t,e){t=ss(t),AS("set",t._path),PS("set",e,t._path,!1);const n=new ol;return WS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class gl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new C_("value",this,new Ji(e.snapshotNode,new Ut(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new k_(this,e,n):null}matches(e){return e instanceof gl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class _l{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new k_(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=Bo(new Ut(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new C_(e.type,this,new Ji(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof _l?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ds(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,c=(h,d)=>{xu(t._repo,t,l),a(h,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new N_(n,s||void 0),l=e==="value"?new gl(o):new _l(e,o);return VS(t._repo,t,l),()=>xu(t._repo,t,l)}function I_(t,e,n,r){return ds(t,"value",e,n,r)}function mf(t,e,n,r){return ds(t,"child_added",e,n,r)}function XS(t,e,n,r){return ds(t,"child_changed",e,n,r)}function ZS(t,e,n,r){return ds(t,"child_moved",e,n,r)}function eC(t,e,n,r){return ds(t,"child_removed",e,n,r)}function ui(t,e,n){let r=null;const i=n?new N_(n):null;e==="value"?r=new gl(i):e&&(r=new _l(e,i)),xu(t._repo,t,r)}nS(Ut);aS(Ut);/**
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
 */const tC="FIREBASE_DATABASE_EMULATOR_HOST",Eu={};let nC=!1;function rC(t,e,n,r){t.repoInfo_=new Ng(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function iC(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pf(s,i),l=o.repoInfo,a,c;typeof process<"u"&&bh&&(c=bh[tC]),c?(a=!0,s=`http://${c}?ns=${l.namespace}`,o=pf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new Sr(Sr.OWNER):new wx(t.name,t.options,e);bS("Invalid Firebase Database URL",o),L(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=oC(l,t,h,new yx(t.name,n));return new lC(d,t)}function sC(t,e){const n=Eu[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$S(t),delete n[t.key]}function oC(t,e,n,r){let i=Eu[e.name];i||(i={},Eu[e.name]=i);let s=i[t.toURLString()];return s&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new FS(t,nC,n,r),i[t.toURLString()]=s,s}class lC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function aC(t=Kw(),e){const n=Vw(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=L1("database");r&&uC(n,...r)}return n}function uC(t,e,n,r={}){t=ss(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Sr(Sr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:D1(r.mockUserToken,t.app.options.projectId);s=new Sr(o)}rC(i,e,n,s)}/**
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
 */function cC(t){ix(Gw),No(new Hi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return iC(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xr(Oh,Mh,t),xr(Oh,Mh,"esm2017")}Rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};cC();var dC="firebase",hC="10.9.0";/**
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
 */xr(dC,hC,"app");const fC={apiKey:"AIzaSyDCPOAHKo7f-9HXgJ9iXIx_kOQuAldTg0A",authDomain:"miraski2025.firebaseapp.com",projectId:"miraski2025",storageBucket:"miraski2025.appspot.com",databaseURL:"https://miraski2025-default-rtdb.europe-west1.firebasedatabase.app/",messagingSenderId:"945379362319",appId:"1:945379362319:web:13c9693c2b7e95e4c2857a"},pC=ag(fC),On=aC(pC);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pr=function(){return pr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},pr.apply(this,arguments)},j_=function(t){return{loading:t==null,value:t}},mC=function(){return function(t,e){switch(e.type){case"error":return pr(pr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return j_(e.defaultValue);case"value":return pr(pr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},gC=function(t){var e=t?t():void 0,n=C.useReducer(mC(),j_(e)),r=n[0],i=n[1],s=C.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=C.useCallback(function(a){i({type:"error",error:a})},[]),l=C.useCallback(function(a){i({type:"value",value:a})},[]);return C.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},_C=function(t,e,n){var r=C.useRef(t);return C.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},vC=function(t,e){var n=!t&&!e,r=!!t&&!!e&&t.isEqual(e);return n||r},P_=function(t,e){return _C(t,vC,e)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ie=function(){return ie=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ie.apply(this,arguments)};function Re(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var yC=function(t){return t!=null&&typeof t=="object"&&Array.isArray(t)===!1},R_=function(t,e,n,r){var i,s;if(t.exists){var o=t.val();return yC(o)?ie(ie(ie({},r?r(o):o),e?(i={},i[e]=t.key,i):null),n?(s={},s[n]=t.ref,s):null):r?r(o):o}},A_={loading:!0,value:{keys:[],values:[]}},wC=function(t,e){switch(e.type){case"add":return e.snapshot?ie(ie({},t),{error:void 0,value:b_(t.value,e.snapshot,e.previousKey)}):t;case"change":return e.snapshot?ie(ie({},t),{error:void 0,value:EC(t.value,e.snapshot)}):t;case"error":return ie(ie({},t),{error:e.error,loading:!1,value:{keys:void 0,values:void 0}});case"move":return e.snapshot?ie(ie({},t),{error:void 0,value:SC(t.value,e.snapshot,e.previousKey)}):t;case"remove":return e.snapshot?ie(ie({},t),{error:void 0,value:O_(t.value,e.snapshot)}):t;case"reset":return A_;case"value":return ie(ie({},t),{error:void 0,loading:!1,value:xC(e.snapshots)});case"empty":return ie(ie({},t),{loading:!1,value:{keys:void 0,values:void 0}});default:return t}},xC=function(t){if(!t)return{keys:[],values:[]};var e=[],n=[];return t.forEach(function(r){r.key&&(e.push(r.key),n.push(r))}),{keys:e,values:n}},b_=function(t,e,n){if(!e.key)return t;var r=t.keys,i=t.values;if(!n)return{keys:r?Re([e.key],r,!0):[e.key],values:i?Re([e],i,!0):[e]};var s=r?r.indexOf(n):0;return{keys:r?Re(Re(Re([],r.slice(0,s+1),!0),[e.key],!1),r.slice(s+1),!0):[e.key],values:i?Re(Re(Re([],i.slice(0,s+1),!0),[e],!1),i.slice(s+1),!0):[e]}},EC=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return ie(ie({},t),{values:r?Re(Re(Re([],r.slice(0,i),!0),[e],!1),r.slice(i+1),!0):[e]})},O_=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return{keys:n?Re(Re([],n.slice(0,i),!0),n.slice(i+1),!0):[],values:r?Re(Re([],r.slice(0,i),!0),r.slice(i+1),!0):[]}},SC=function(t,e,n){var r=O_(t,e);return b_(r,e,n)},CC=function(){return C.useReducer(wC,A_)},kC=function(t){var e=CC(),n=e[0],r=e[1],i=P_(t,function(){return r({type:"reset"})}),s=i.current;return C.useEffect(function(){if(!s){r({type:"empty"});return}var o=function(m,p){r({type:"add",previousKey:p,snapshot:m})},l=function(m){r({type:"change",snapshot:m})},a=function(m,p){r({type:"move",previousKey:p,snapshot:m})},c=function(m){r({type:"remove",snapshot:m})},h=function(m){r({type:"error",error:m})},d=function(m){r({type:"value",snapshots:m})},f,_=function(m){var p=m.val(),g=p?Object.keys(m.val()).length:0;if(g===0)f=mf(s,o,h),d([]);else{var w=[],k=function(I,j){if(g>0){g--,w.push(I),g===0&&d(w);return}o(I,j)};f=mf(s,k,h)}};I_(s,_,h,{onlyOnce:!0});var v=XS(s,l,h),y=ZS(s,a,h),E=eC(s,c,h);return function(){ui(s,"child_added",f),ui(s,"child_changed",v),ui(s,"child_moved",y),ui(s,"child_removed",E)}},[r,s]),[n.value.values,n.loading,n.error]},nd=function(t,e){var n=e??{},r=n.keyField,i=n.refField,s=n.transform,o=kC(t),l=o[0],a=o[1],c=o[2],h=C.useMemo(function(){return l?l.map(function(d){return R_(d,r,i,s)}):void 0},[l,r,i,s]);return[h,a,c]},NC=function(t){var e=gC(),n=e.error,r=e.loading,i=e.reset,s=e.setError,o=e.setValue,l=e.value,a=P_(t,i);return C.useEffect(function(){var c=a.current;if(!c){o(void 0);return}return I_(c,o,s),function(){ui(c,"value",o)}},[a.current]),[l,r,n]},M_=function(t,e){var n=e??{},r=n.keyField,i=n.refField,s=n.transform,o=NC(t),l=o[0],a=o[1],c=o[2],h=C.useMemo(function(){return l?R_(l,r,i,s):void 0},[l,r,i,s]);return[h,a,c]};function TC(t){const e=(n,r)=>!n.datetime||!r.datetime?0:n.datetime>r.datetime?1:n.datetime<r.datetime?-1:0;return t.slice().sort(e)}function Su({name:t,shortname:e}){const n=e==="null"?"null.svg":`${e}.jpg`;return u.jsx("figure",{className:"avatar",children:u.jsx(oe,{to:`/profile/${e}`,children:u.jsx("img",{src:`/img/avatars/${n}`,className:"avatar__image",width:"100",height:"100",alt:`Avatar of ${t}`})})})}function L_(t){const e=t.attendees,n=typeof t.hasToggle=="boolean"?t.hasToggle:!1;return u.jsxs(u.Fragment,{children:[u.jsx("input",{type:"checkbox",id:"attendee-list-toggle",className:"attendee-list-toggle",defaultChecked:!n}),u.jsx("ol",{className:"attendee-list",children:TC(e).map(r=>u.jsxs("li",{className:"attendee-list__attendee",children:[u.jsx(Su,{name:r.name,shortname:r.id}),u.jsx("strong",{className:"attendee-list__name",children:r.name}),u.jsx("span",{className:"attendee-list__activities",children:r.activities})]},r.id))}),n&&u.jsx("div",{className:"cta-container",children:u.jsx("label",{className:"btn btn--secondary",htmlFor:"attendee-list-toggle",children:"Show me the complete list"})})]})}function IC(){const t=bn(On,"attendees"),[e,n,r]=nd(t);return u.jsxs("article",{children:[u.jsx("h1",{children:"Get info"}),u.jsx("p",{className:"introduction",children:"Join us for the ultimate skiing & snowboarding event and 4 days of skiing, partying, and having real fun!"}),u.jsxs("p",{children:["A select few Mirabeau veterans are organising a ski event for other Mirabeau veterans and this year the event takes place in the ski resort"," ",u.jsx(oe,{to:"/get-info/location",children:"Sankt Anton"}),", in the west of Austria, surrounded by beautiful mountains."]}),u.jsxs("p",{children:["We’ll stay at the catered"," ",u.jsx(oe,{to:"/get-info/chalet",children:"chalet Alber"})," where we’ve been before! Again hosted by Wens Chalets."]}),u.jsx("p",{children:"The chalet is 600 meters away from the Nassereinbahn."}),u.jsxs("div",{className:"extra-info",children:[u.jsxs("section",{className:"extra-info__item",children:[u.jsx("h2",{children:"What’s included?"}),u.jsxs("ul",{children:[u.jsx("li",{children:"4 nights in a luxury chalet"}),u.jsxs("li",{children:["4 days Breakfast",u.jsx("br",{}),u.jsx("small",{children:"(Sunday, Monday, Tuesday, Wednesday)"})]}),u.jsxs("li",{children:["3 days Dinner",u.jsx("br",{}),u.jsx("small",{children:"(Saturday, Sunday, Monday, all 3 course meals)"})]}),u.jsx("li",{children:"Fresh linnen and towels"}),u.jsx("li",{children:"All drinks are included (including beer & wine)"})]}),u.jsx("p",{children:"Travel costs and lunch are not included."})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("h2",{children:"Optional:"}),u.jsx("p",{children:"We can provide you with a skipass at a 5-10% discount that will give you access to over 340 km of ski runs."}),u.jsx("p",{children:"Skiing and boarding equipment can be rented at destination, prices starting at €100 for a 3 days depending on quality of the gear. Alternatively, equipment can be rented via the chalet company at a discount, we’ll contact you for that."})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("h2",{children:"Price"}),u.jsxs("p",{children:["The price will be €530,- for the chalet. The cost of your skipass,"," ","rental gear, and drinks/food outside of the chalet will be yours."]})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("h2",{children:"When"}),u.jsx("p",{children:"We’ll leave on Friday afternoon 10 January 2025 or early Saturday morning 11 January 2025. We’ll head home on the early morning of Wednesday 15 January 2025."})]})]}),u.jsx("div",{className:"cta-container",children:u.jsx("p",{children:u.jsxs(oe,{className:"btn",to:"/get-info/location",children:[u.jsx("span",{className:"extra-text extra-text--480",children:"tell me "}),"about St. Anton"]})})}),!n&&!r&&e&&u.jsxs(u.Fragment,{children:[u.jsx("h2",{className:"alt",children:"So, who’s joining?"}),u.jsx(L_,{attendees:e})]})]})}function jC(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Après-ski"}),u.jsx("p",{className:"introduction",children:"St. Anton is widely recognised as the après-ski capital of the Alps and attracts flocks of young skiers who embrace the nightlife wholeheartedly."}),u.jsx("h2",{children:"Mooserwirt"}),u.jsxs("p",{children:[u.jsx("a",{href:"http://www.mooserwirt.at",children:"The Mooserwirt"})," is the most famous après-ski bar in St. Anton. The self-proclaimed “world’s baddest” après bar, is the essence of Austrian party. Table-top dancing from 3pm onwards, fuelled by vast quantities of beer and Jägermeister and cheesy music, provided by the legendary 64-year-old DJ Gerhard."]}),u.jsx("h2",{children:"Krazy Kanguruh"}),u.jsxs("p",{children:["Since 1965 there has been a party at"," ",u.jsx("a",{href:"http://www.krazykanguruh.com",children:"the Krazy Kanguruh"}),". They know how to do it properly. By the way – the bar is owned by a world champion skier."]}),u.jsxs("p",{children:["Chances are you want to exerience some night life as well;"," ",u.jsx("a",{href:"/#/get-info/partytime",children:"check the most famous clubs in St. Anton"}),"."]})]})}function PC(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Chalet Alber"}),u.jsx("p",{className:"introduction",children:"This year we’ll stay at the catered Chalet Alber in Sankt Anton."}),u.jsx("p",{children:"The chalet is situated on a beautiful location just off the piste (number 24) leading to the Nasserein skilift. You can ski back to the chalet, something that is rare for Sankt Anton accommodations. The ski lift is only 600 meters away, and at the end of the day it’s only a 250m walk from the Gampen slopes. Several hiking trails start directly on the doorstep. A toboggan run can be accessed in the immediate vicinity."}),u.jsx("p",{children:"We’ll stay in the chalet for 4 nights (half pension), and breakfast and dinner is served here by the lovely people of Wens Chalets. Bed linen and towels are taken care of and all the snacks and drinks in the chalet are included (including beer & wine). All of the rooms feature a private bathroom, which is fitted with a bath tub or a shower and optionally a balcony. There is a ski storage room and free private parking is possible on site."}),u.jsx("p",{children:"Be sure to join the “Looping Louie”-competition right after dinner, but after some beers or jägers you can visit some great bars nearby. Main town is only a short bus ride away - you can easily walk or get a taxi back at night too!"}),u.jsxs("figure",{className:"scrapbook",children:[u.jsx("img",{src:"/img/info/2025/chalet/1.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/2.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/3.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/4.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/5.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/6.jpg",className:"scrapbook__image"})]})]})}function RC(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Sankt Anton"}),u.jsx("p",{className:"introduction",children:"More than 340 kilometres of virgin powder is available at the superbly prepared slopes at Sankt Anton ski area."}),u.jsxs("p",{children:["Nasserein ski lift, next to chalet Alber, puts you in the middle of the Ski Arlberg ski area, which can compete with the best skiing in Europe. They don’t call it the “Cradle of Alpine skiing” for nothing. It’s a snowy paradise of the highest calibre and at the same time a very cool place to enjoy some great"," ",u.jsx(oe,{to:"/get-info/apres-ski",children:"après-ski"})," parties!"]}),u.jsx("p",{children:"In total, the ski area offers 340 kilometres of groomed slopes and an additionally approximately 180 kilometres of off-piste opportunities and is varied and challenging for advanced skiers but also very suitable for beginners. The likelihood of snow is very high in this area, so valley runs are possible until late in the season."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Highest point: 2811 meter"}),u.jsx("li",{children:"Lowest point: 1304 meter"})]}),u.jsxs("section",{children:[u.jsx("h2",{children:"Chalet alber"}),u.jsx("p",{children:"This year we’ll stay at the catered chalet “Alber” in Sankt Anton. This is situated on a beautiful location just off the piste (number 24) leading to the Nasserein skilift. You can ski back to the chalet, something that is rare for Sankt Anton accommodations. The ski lift is only 600 meters away, and at the end of the day it’s only a 250m walk from the Gampen slopes. Several hiking trails start directly on the doorstep. A toboggan run can be accessed in the immediate vicinity."}),u.jsx("p",{children:u.jsx(oe,{to:"/get-info/chalet",className:"btn btn--secondary",children:"Tell me err’thing"})})]}),u.jsxs("section",{children:[u.jsx("h2",{children:"Après-ski & nightlife"}),u.jsx("p",{children:"St Anton is widely recognised as the après-ski capital of the Alps and attracts flocks of young skiers who embrace the nightlife wholeheartedly."}),u.jsx("p",{children:"St Anton is almost as famous for its après as it is for its skiing, so be prepared to party when you come here. The nightlife start from 23.00."}),u.jsx("p",{children:u.jsx(oe,{to:"/get-info/partytime",className:"btn btn--secondary",children:"I need examples!"})})]})]})}function AC(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Partytime"}),u.jsx("p",{className:"introduction",children:"This MiraSki edition, chances are you’ll find yourself dancing on the table with a Jägerbomb in your hand; St. Anton has that effect on people. ‘Ski hard, play hard’; these are the party-places you should be checking:"}),u.jsx("h2",{children:"Après-ski"}),u.jsxs("div",{className:"extra-info",children:[u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/mooserwirt.jpg",alt:"Impression of Mooserwirt"}),u.jsx("h3",{children:"Mooserwirt"}),u.jsxs("p",{children:[u.jsx("a",{href:"http://www.mooserwirt.at",rel:"noopener",children:"The Mooserwirt"})," ","is the most famous après-ski bar in St. Anton. The self-proclaimed “world’s baddest” après bar, is the essence of Austrian party. Table-top dancing from 3pm onwards, fuelled by vast quantities of beer and Jägermeister and cheesy music, provided by the legendary 64-year-old DJ Gerhard."]})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/krazy-kanguruh.jpg",alt:"Impression of Krazy Kanguruh"}),u.jsx("h3",{children:"Krazy Kanguruh"}),u.jsxs("p",{children:["Since 1965 there has been a party at"," ",u.jsx("a",{href:"http://www.krazykanguruh.com",rel:"noopener",children:"the Krazy Kanguruh"}),". They know how to do it properly. By the way – the bar is owned by a world champion skier."]})]})]}),u.jsx("h2",{children:"Nightlife"}),u.jsxs("div",{className:"extra-info",children:[u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/horny-bull.jpg",alt:"Impression of Horny Bull"}),u.jsx("h3",{children:"Horny Bull"}),u.jsx("p",{children:"Horny Bull is open until the early hours and probably works best as a niteclub when they offer Deep & Vocal House music with international DJ’s from 11pm – 3am"})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/piccadilly.jpg",alt:"Impression of Piccadilly / Postkeller"}),u.jsx("h3",{children:"Piccadilly / Postkeller"}),u.jsxs("p",{children:["The legendary"," ",u.jsx("a",{href:"http://hotel-post.co.at/hotel-post/postkeller-piccadilly.html",rel:"noopener",children:"Piccadilly bar"})," ","with the best live music of St. Anton! Celebrate as if there were no tomorrow: You don’t know what partying is until you have been here. Let the fun begin!"]})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/hells-club.jpg",alt:"Impression of Hells Club"}),u.jsx("h3",{children:"Hells Club"}),u.jsxs("p",{children:["A new favourite in town is the"," ",u.jsx("a",{href:"http://www.hellsclub.at",rel:"noopener",children:"Hells Club"})," ","(open from 8pm Wednesday to Sunday), located in the Hotel Tyrol, a late-night bar and disco with quirky interiors."]})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/murrmel.jpg",alt:"Impression of Murrmel"}),u.jsx("h3",{children:"Murrmel"}),u.jsxs("p",{children:[u.jsx("a",{href:"http://www.murrmel.at",rel:"noopener",children:"The Murrmel bar"})," ","is a very clean and compact place which really gets a good vibe and atmosphere. The guy playing rocksongs, Gunar, is a great entertainer!"]})]})]})]})}function bC({active:t}){const e=[2017,2016,2015,2014,2013,2012];return u.jsx("nav",{className:"history-nav-container",children:u.jsx("ul",{className:"history-nav",children:e.map(n=>u.jsx("li",{children:u.jsx(oe,{to:`/history/${n}`,className:"history-nav__link","aria-selected":t===n,children:n})},n))})})}function _n({year:t,HistoryText:e,attendees:n}){return u.jsxs("article",{children:[u.jsxs("section",{children:[u.jsx("h1",{children:t}),u.jsx(e,{}),n.length&&u.jsx(L_,{attendees:n})]}),u.jsx(bC,{active:t})]})}function OC(){return u.jsx(_n,{year:2019,HistoryText:LC,attendees:MC})}const MC=[{id:"swartna",name:"Sybren Wartna"}];function LC(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Kitzbühel"}),u.jsx("h2",{className:"alt",children:"These heroes ‘war dabei’"})]})}function DC(){return u.jsx(_n,{year:2018,HistoryText:BC,attendees:FC})}const FC=[{id:"swartna",name:"Sybren Wartna"}];function BC(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Sankt Anton"}),u.jsx("h2",{className:"alt",children:"These heroes ‘war dabei’"})]})}function zC(){return u.jsx(_n,{year:2017,HistoryText:WC,attendees:UC})}const UC=[{id:"sdijkman",name:"Simon Dijkman"},{id:"evegt",name:"Emar Vegt"},{id:"klaumen",name:"Kevin Laumen"},{id:"mvigelandzoon",name:"Meredith Vigelandzoon"},{id:"rbuiten",name:"Rick Buiten"},{id:"nyasuda",name:"Naomi Yasuda"},{id:"mplatvoet",name:"Mark Platvoet"},{id:"vrademaker",name:"Vera Rademaker"},{id:"rhenneman",name:"Robbert Henneman"},{id:"jvanstaveren",name:"Jasper van Staveren"},{id:"kliefhebber",name:"Kim Liefhebber"},{id:"adiepeveen",name:"Andre Diepeveen"},{id:"bbarten",name:"Bas Barten"},{id:"crentier",name:"Cyrille Rentier"},{id:"gbranje",name:"Geert Branje"},{id:"aoliya",name:"Armin Oliya"},{id:"svandenakker",name:"Saskia van den Akker"},{id:"mterhorst",name:"Marco ter Horst"},{id:"dmansell",name:"Dennis Mansell"},{id:"tmastik",name:"Tim Mastik"},{id:"mbonne",name:"Mark Bonne"},{id:"sveenstra",name:"Sieger Veenstra"},{id:"rkilarciyan",name:"Rita Kilarciyan"},{id:"mwarnaar",name:"Merette Warnaar"},{id:"tkuijper",name:"Thalita Kuijper"},{id:"dkelly",name:"Daniel Kelly"},{id:"erik",name:"Erik Hamoen"},{id:"spals",name:"Sjors Pals"},{id:"cvanantwerpen",name:"Catelijne van Antwerpen"},{id:"heiniw",name:"Heini Withagen"},{id:"jbruseker",name:"Jeroen Bruseker"},{id:"bvaneck",name:"Bas van Eck"},{id:"mgroeneweg",name:"Maarten Groeneweg"},{id:"swartna",name:"Sybren Wartna"},{id:"bvandermeer",name:"Bran van der Meer"},{id:"knederkoorn",name:"Kees Nederkoorn"},{id:"pversteeg",name:"Paul Versteeg"}];function WC(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Looking back on the MiraSki 2017 event, we can only conclude that the Austrian mountain village Sankt Anton is indeed a Holy place. Our visit there left us with memories of fresh snow, Jäger, presidents, Johnny Däpp, Willy shots, beer, more Johnny Däpp and great ski runs."}),u.jsx("p",{children:"The trip started of on Friday with some road tripping, but simply hopping on a plane was also an popular option this year. Eventually everyone arrived smoothly at our new home for the next couple of days, the lovely “Chalet Alber”. As soon as everybody got hold of a Ski pass we immediately attacked the slopes for instant snow appreciation. Because of the recently opened “Flexenbahn”-lift, the ski area instantly doubled in size and offered us 305 km of skiing fun. Especially interesting are all the ski-routes options in this area, which offered some extra adventure, without the risk of triggering an avalanche. After each day a lot of Ski Track data was uploaded into our own game database. All these wintersport skills unlocked new digital abilities in the game and stirred up the leaderboard. It was live testing at its finest."}),u.jsx("p",{children:"After the last ski-run of the day we often found ourselves at the MooserWirt enjoying some Jäger refreshments and shouting multiple iterations of “Johnny Däpp”. The après ski temple was big, loud and crowded, but also gave us a lot of laughter. Afterwards, a special dose of determination was needed to finish the last 100 meters to the end of the piste, which in some cases resulted in an involuntary village exploration. Luckily everybody made it home in one piece. The Wens Chalet - crew cooked us a nice meal and after a much needed shower, we improved our gaming skills in the chalet. The Looping Louie game showcased some mad skills and the Presidents card game celebrated some appropriate name-calling. The challenges were of course accompanies by some small alcoholic beverages which triggered some much needed dancing and singing. Some furniture was stress-tested during these activities and a certain individual gained a temporary M.I.A.-status due to his bar-localisation efforts. In short; all ended well and we had a good laugh."}),u.jsx("p",{children:"The weather during our trip was pretty OK. We did experience some heavy fog, but that proved to be an excellent opportunity to order a plate-sized schnitzel somewhere on a remote mountain top. By the time we finished devouring our lunch, the sun had already fixed this cloud-impediment and created some beautiful kodak moments. While most MiraSki team members were rutching down the slopes, others took on the challenge of steering an Audi Quattro round some slippery corners and over a number of big obstacles. For some this might feel like riding an very expensive sled, but feeling the power and control in these circumstances made it a very cool experience."}),u.jsx("p",{children:"No MiraSki is complete without a Jäger train; that’s why a staircase performance in the chalet was orchestrated to facilitate this user need. The finesse of dominos mixed with a german digestive plunging into a fluid sugar drug, is always a succes! Right after this beverage-ritual, the party continued at the “Postkeller” a lively club in the city centre. There was live music and singing and even though snowboard boots were not accepted as suitable party attire, some serious dance moves were put into effect."}),u.jsx("p",{children:"The 2017 MiraSki event was a big success and to celebrate this, every team member received a MiraSki 2017-flask. Cheers to MiraSki 2017 and we’ll see you in 2018!"}),u.jsxs("figure",{className:"scrapbook",children:[u.jsx("img",{src:"/img/history/2017/3.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2017/7.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2017/4.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2017/1.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2017/8.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2017/6.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2017/2.jpg"})]}),u.jsx("h2",{children:"They enjoyed “Johnny Däpp”"})]})}function HC(){return u.jsx(_n,{year:2016,HistoryText:$C,attendees:VC})}const VC=[{id:"bvandermeer",name:"Bran van der Meer"},{id:"swartna",name:"Sybren Wartna"},{id:"pvree",name:"Pascal Vree"},{id:"knederkoorn",name:"Kees Nederkoorn"},{id:"mgroeneweg",name:"Maarten Groeneweg"},{id:"kliefhebber",name:"Kim Liefhebber"},{id:"pversteeg",name:"Paul Versteeg"},{id:"lhalff",name:"Lisette Halff"},{id:"bvaneck",name:"Bas van Eck"},{id:"jbruseker",name:"Jeroen Bruseker"},{id:"spals",name:"Sjors Pals"},{id:"bbarten",name:"Bas Barten"},{id:"tdevries",name:"Thijs de Vries"},{id:"sveenstra",name:"Sieger Veenstra"},{id:"dtimmers",name:"Dennis Timmers"},{id:"jtuitjer",name:"Jeroen Tuitjer"},{id:"mheijboer",name:"Marigo Heijboer"},{id:"cwiltink",name:"Céryl Wiltink"},{id:"heiniw",name:"Heini Withagen"},{id:"apoppe",name:"Aukje Poppe"},{id:"svandenakker",name:"Suzan van Rooijen"},{id:"phalenbeek",name:"Pieter Halenbeek"},{id:"mplatvoet",name:"Mark Platvoet"},{id:"rhenneman",name:"Robbert Henneman"},{id:"crentier",name:"Cyrille Rentier"},{id:"gbranje",name:"Geert Branje"},{id:"wkroes",name:"Wouter Kroes"},{id:"nvanderlinde",name:"Nick van der Linde"},{id:"mooms",name:"Michiel Ooms"},{id:"llaan",name:"Lotte-Sara Laan"},{id:"mwarnaar",name:"Merette Warnaar"},{id:"lvanwieringen",name:"Lieven van Wieringen"},{id:"dlangdon",name:"Dickon Langdon"},{id:"dvdveen",name:"Desirée van der Veen"}];function $C(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Fieberbrunn"}),u.jsx("p",{className:"introduction",children:"“Hoch die Hande”"}),u.jsx("p",{children:"In 2016 the MiraSki event landed in Fieberbrunn, part of the Saalbach skiing area in Austria. The “Sonnefeld” chalet suited all of the Mirabeau’ers perfectly and there was plenty room for serious Looping Louie challenges and some occasional table dancing. The pistes were great but due to extensive snowing and some closed pistes, the Enzianhütte, our favourite meet-up place, was pretty crowded early in the afternoon with digital natives. Next to the Après-ski classics we all sang this years’ favorite party song “Hoch die Hande”."}),u.jsx("p",{children:"Fieberbrunn, you were real."}),u.jsxs("figure",{className:"scrapbook",children:[u.jsx("img",{src:"/img/history/2016/1.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2016/2.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2016/3.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2016/4.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2016/5.jpg",className:"scrapbook__image"})]}),u.jsx("h2",{children:"These brave souls where there"})]})}function YC(){return u.jsx(_n,{year:2015,HistoryText:KC,attendees:GC})}const GC=[{id:"bvaneck",name:"Bas van Eck"},{id:"bvandermeer",name:"Bran van der Meer"},{id:"cvanantwerpen",name:"Catelijne van Antwerpen"},{id:"chille",name:"Christine Hille"},{id:"crentier",name:"Cyrille Rentier"},{id:"gbranje",name:"Geert Branje"},{id:"heiniw",name:"Heini Withagen"},{id:"iversluis",name:"Iris Versluis"},{id:"jberkelaar",name:"Jantine Berkelaar"},{id:"jbruseker",name:"Jeroen Bruseker"},{id:"jtuitjer",name:"Jeroen Tuitjer"},{id:"knederkoorn",name:"Kees Nederkoorn"},{id:"kliefhebber",name:"Kim Liefhebber"},{id:"lhalff",name:"Lisette Halff"},{id:"mvanhalm",name:"Maaike van Halm - Vos"},{id:"mgroeneweg",name:"Maarten Groeneweg"},{id:"mpanman",name:"Maarten Panman"},{id:"mterhorst",name:"Marco ter Horst"},{id:"mheijboer",name:"Marigo Heijboer"},{id:"mwarnaar",name:"Merette Warnaar"},{id:"mooms",name:"Michiel Ooms"},{id:"nyasuda",name:"Naomi Yasuda"},{id:"nvanderlinde",name:"Nick van der Linde"},{id:"nevers",name:"Niels Evers"},{id:"pversteeg",name:"Paul Versteeg"},{id:"pappelman",name:"Pieter Appelman"},{id:"phalenbeek",name:"Pieter Halenbeek"},{id:"rkonings",name:"Raymond Konings"},{id:"rschmieman",name:"Remco Schmieman"},{id:"rhenneman",name:"Robbert Henneman"},{id:"rvanderark",name:"Roel van der Ark"},{id:"spals",name:"Sjors Pals"},{id:"swartna",name:"Sybren Wartna"},{id:"tdevries",name:"Thijs de Vries"},{id:"wkroes",name:"Wouter Kroes"}];function KC(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Ischgl"}),u.jsx("p",{className:"introduction",children:"The stage for the 9th edition of MiraSki was set in Ischgl and introduced the Digital natives to the Kuhstall, and the caftmanship of building a Jäger Train."}),u.jsx("p",{children:"The Ischgl trip started with some small beers near the Austrian border. An embalmed-animal-filled hotel gave us a good night rest and we were ready to attack the slopes of Ischgl in the morning. There was loads of fresh snow, but the weather sometimes forced us to spend some extra time in the “Schatzi bar”; this was no problem."}),u.jsx("p",{children:"MiraSki 2015 edition will go down in the history books for having the first Mirabeau Jäger Train. This seemingly never-ending line of mini Jägermeister bottles was balanced on a row of energy drinks, making one big alcoholic dominos. Of course the execution method was totally agile, complete with iteration and tests; we’re still evaluating the proces…"}),u.jsx("p",{children:"The people from Wens Chalets catered our Chalet Sylvia and they were excellent. At the end of each wonderful day of skiing, the food & wine was great and we had some great laughs! After some drinks in the chalet we often went clubbing, and the Kuhstall-bar in the city centre was our favourite; an honourable mention goes to the ShowArena, with it’s Russian casino atmosphere."}),u.jsx("p",{children:"“Relax. If you can…” is the tagline of this Austrian ski area and this turned out be an accurate description."}),u.jsxs("figure",{className:"scrapbook",children:[u.jsx("img",{src:"/img/history/2015/1.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2015/5.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2015/3.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2015/4.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2015/2.jpg",className:"scrapbook__image"})]}),u.jsx("h2",{className:"alt",children:"These digital heroes weren’t square"})]})}function QC(){return u.jsx(_n,{year:2014,HistoryText:JC,attendees:qC})}const qC=[{id:"bvaneck",name:"Bas van Eck"},{id:"bvandermeer",name:"Bran van der Meer"},{id:"swartna",name:"Sybren Wartna"},{id:"tdevries",name:"Thijs de Vries"}];function JC(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Kirchberg"}),u.jsx("h2",{className:"alt",children:"These heroes ‘war dabei’"})]})}function XC(){return u.jsx(_n,{year:2013,HistoryText:ek,attendees:ZC})}const ZC=[{id:"bvaneck",name:"Bas van Eck"},{id:"bvandermeer",name:"Bran van der Meer"},{id:"swartna",name:"Sybren Wartna"},{id:"tdevries",name:"Thijs de Vries"},{id:"pversteeg",name:"Paul Versteeg"},{id:"null",name:"Jeroen Dill"},{id:"null",name:"Niek Bosch"},{id:"hwithagen",name:"Heini Withagen"},{id:"mooms",name:"Michiel Ooms"},{id:"null",name:"Ragner Teitsma"},{id:"null",name:"Floris Ketel"},{id:"crentier",name:"Cyrille Rentier"},{id:"jbruseker",name:"Jeroen Bruseker"},{id:"nvanderlinde",name:"Nick van der Linde"},{id:"gbranje",name:"Geert Branje"},{id:"tdemooi",name:"Thijs de Mooi"},{id:"btervoort",name:"Babiche Tervoort"},{id:"chille",name:"Christine Hille"}];function ek(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Sölden"}),u.jsx("div",{className:"embed-container",children:u.jsx("iframe",{src:"http://www.youtube.com/embed/1woBNg8jnJw?rel=0",frameBorder:"0",allowFullScreen:!0})}),u.jsx("figure",{className:"scrapbook",children:u.jsx("img",{src:"/img/history/2013/1.jpg",className:"scrapbook__image"})}),u.jsx("h2",{className:"alt",children:"These heroes ‘war dabei’"})]})}function tk(){return u.jsx(_n,{year:2012,HistoryText:rk,attendees:nk})}const nk=[{id:"bvaneck",name:"Bas van Eck"},{id:"bvandermeer",name:"Bran van der Meer"},{id:"swartna",name:"Sybren Wartna"},{id:"tdevries",name:"Thijs de Vries"},{id:"kliefhebber",name:"Kim Liefhebber"},{id:"crentier",name:"Cyrille Rentier"},{id:"null",name:"Yasmine Vo"},{id:"null",name:"Arian Tsai"},{id:"null",name:"Merel Backers"},{id:"mooms",name:"Michel Ooms"},{id:"null",name:"Niek Bosch"},{id:"tdemooi",name:"Thijs de Mooi"},{id:"rdijk",name:"Renske Dijk"},{id:"null",name:"Ragner Teitsma"},{id:"btervoort",name:"Babiche Tervoort"},{id:"gbranje",name:"Geert Branje"},{id:"nvanderlinde",name:"Nick van der Linde"},{id:"chille",name:"Christine Hille"},{id:"bbarten",name:"Bas Barten"},{id:"null",name:"Mara Kok"},{id:"spals",name:"Sjors Pals"}];function rk(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Finkenberg"}),u.jsx("div",{className:"embed-container",children:u.jsx("iframe",{src:"http://www.youtube.com/embed/XaFJIaeixZA?rel=0",frameBorder:"0",allowFullScreen:!0})}),u.jsx("h2",{className:"alt",children:"These heroes ‘war dabei’"})]})}const ik=[{name:"player",folder:"player",filename:"player.obj"},{name:"jagermeister",folder:"jagermeister",filename:"jagermeister.obj"},{name:"pinetree",folder:"pinetree",filename:"pinetree.obj"},{name:"stone",folder:"stone",filename:"stone.obj"}],sk={learColor:new window.BABYLON.Color3(.8,-1,.9),ambientColor:new window.BABYLON.Color3(.5,.5,.5),collisionsEnabled:!0,forceWireframe:!1},ok={options:sk},Cn={lanes:[-4,0,4],modifiers:{jagers:0,agility:0,boost:0},moveLength:4},lk="../../../../..",ak=(t,{name:e,loadedMeshes:n})=>(t[e]=n,t);class uk{load(e,n){return this._loader=new window.BABYLON.AssetsManager(e),this._loader.useDefaultLoadingScreen=!1,this._addModels(n),this._loadModels()}_loadModels(){return new Promise((e,n)=>{this._loader.onFinish=r=>{const i=r.reduce(ak,{});setTimeout(()=>e(i),1e3)},this._loader.onError=r=>n(r),this._loader.load()})}_addModels(e){e.forEach(n=>{this._loader.addMeshTask(n.name,"",`${lk}/img/models/${n.folder}/`,n.filename)})}}const ck=new uk,zo={fog:{fogMode:window.BABYLON.Scene.FOGMODE_LINEAR,fogStart:40,fogEnd:250,fogColor:new window.BABYLON.Color4(.75,.9,1,.2)},mountains:{size:400},sky:{backFaceCulling:!1,turbidity:40,luminance:1,azimuth:.25,useSunPosition:!0,sunPosition:new window.BABYLON.Vector3(0,100,0),rayleigh:1,mieDirectionalG:1.2,mieCoefficient:.005},snow:{color1:new window.BABYLON.Color4(.9,.9,1,1),color2:new window.BABYLON.Color4(.9,.8,1,1),colorDead:new window.BABYLON.Color4(0,0,.2,0),minSize:.1,maxSize:.1,minLifeTime:.3,maxLifeTime:2.5,blendMode:window.BABYLON.ParticleSystem.BLENDMODE_ONEONE,gravity:new window.BABYLON.Vector3(0,-9.81,0),direction1:new window.BABYLON.Vector3(-7,30,3),direction2:new window.BABYLON.Vector3(7,15,-3),minAngularSpeed:0,maxAngularSpeed:Math.PI,minEmitPower:1,maxEmitPower:3,updateSpeed:.005}},Xn="../../../../..",gf=[{name:"moveLeft",file:`${Xn}/audio/snowboard_move_left.mp3`,settings:{volume:.1,spatialSound:!0},follow:!0},{name:"moveRight",file:`${Xn}/audio/snowboard_move_right.mp3`,settings:{volume:.1,spatialSound:!0},follow:!0},{name:"background",file:`${Xn}/audio/wind_background_loop.mp3`,settings:{loop:!0,volume:1}},{name:"scream",file:`${Xn}/audio/wilhelm-scream.mp3`,settings:{volume:.2}},{name:"jager",file:`${Xn}/audio/jagermeister.mp3`,settings:{volume:.4}},{name:"boost",file:`${Xn}/audio/turboboost.mp3`,settings:{volume:.2,spatialSound:!0},follow:!0}],Ks={createMesh(t,e,n){let r=window.BABYLON.Mesh.CreateBox(n.name,n.size,t);return r.visibility=0,r.position=new window.BABYLON.Vector3(0,-500,-500),e.forEach(i=>i.parent=r),r.scaling=new window.BABYLON.Vector3(n.scale,n.scale,n.scale),r},cloneMesh(t,e){const n=t.clone();return n.position=e,n}};class rd{constructor(e,n,r){le(this,"_collider",!1);le(this,"type",null);this._scene=r,this._mesh=Ks.cloneMesh(e,n),this._name=e.name,this._position=n}resetPosition(){this._mesh.position=new window.BABYLON.Vector3(-100,-100,-100),this._collider&&(this._collider.position=this._mesh.position)}dispose(){this._mesh.dispose(),this._collider&&this._collider.dispose()}getMesh(){return this._mesh}}const id={_velocity:1,_active:!1,move(t){this._mesh.position.z-=t*this._velocity,this._collider&&(this._collider.position.z=this._mesh.position.z)},setPosition(t){this._mesh.position=t,this._collider&&(this._collider.position=t)},shouldDeactivate(){return this._mesh.position.z<-18},activate(t){this._active=!0,t&&this.setPosition(t)},deactivate(){this._active=!1},isActive(){return this._active}};class dk{constructor(){le(this,"_playCount",0);le(this,"_clock",0);le(this,"_gameOver",!1)}reset(){this._gameOver=!1,this._clock=0}updateClock(){this._clock++}updatePlaycount(){this._playCount++}get playCount(){return this._playCount}get gameIsOver(){return this._gameOver}get clock(){return this._clock}set gameIsOver(e){this._gameOver=e}}const xe=new dk,D_={registerActions(){const t=this._collider?this._collider:this._mesh,e=St.getPlayer()._mesh,n=new window.BABYLON.SwitchBooleanAction({trigger:window.BABYLON.ActionManager.OnIntersectionEnterTrigger,parameter:e},xe,"_gameOver");t.actionManager=new window.BABYLON.ActionManager(this._scene),t.actionManager.registerAction(n)}};class F_ extends rd{constructor(e,n,r){super(e,n,r),this.addCollider(),this.registerActions(),this.type="tree"}addCollider(){this._collider=window.BABYLON.Mesh.CreateBox("collider",2,this._scene),this._collider.position=this._position,this._collider.scaling.y=4,this._collider.visibility=0}scale(){this._mesh.scaling.x=1.1,this._mesh.scaling.z=1.1,this._mesh.scaling.y=5.5}}Object.assign(F_.prototype,id,D_);let bs;const hk=new Uint8Array(16);function fk(){if(!bs&&(bs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!bs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return bs(hk)}const ye=[];for(let t=0;t<256;++t)ye.push((t+256).toString(16).slice(1));function pk(t,e=0){return ye[t[e+0]]+ye[t[e+1]]+ye[t[e+2]]+ye[t[e+3]]+"-"+ye[t[e+4]]+ye[t[e+5]]+"-"+ye[t[e+6]]+ye[t[e+7]]+"-"+ye[t[e+8]]+ye[t[e+9]]+"-"+ye[t[e+10]]+ye[t[e+11]]+ye[t[e+12]]+ye[t[e+13]]+ye[t[e+14]]+ye[t[e+15]]}const mk=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_f={randomUUID:mk};function B_(t,e,n){if(_f.randomUUID&&!e&&!t)return _f.randomUUID();t=t||{};const r=t.random||(t.rng||fk)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return pk(r)}const gk={obstacles:{amount:0,multiplier:1},points:{amount:0,multiplier:.1},sections:{amount:0,multiplier:5},jagers:{amount:0,multiplier:50}},_k={options:{jagers:{0:10,2:20,4:35,6:50},agility:{0:1.2,1:1.1,2:1,3:.9,4:.8,5:.75,6:.7},boost:{0:120,1:150,2:180,3:210,4:240,5:270,6:300}}},vk=t=>Object.entries(t).reduce((e,[n,r])=>(e[n]=_k.options[n][r],e),{});class yk{constructor(){le(this,"_modifiers",null)}load(e){this._modifiers=vk(e)}get modifiers(){return this._modifiers}}const ut=new yk;class wk{constructor(){le(this,"_score",{})}reset(){this._score=Object.entries(gk).reduce((e,[n,r])=>(e[n]={...r},n==="jagers"&&(e[n].multiplier=ut.modifiers[n]),e),{})}getTotal(){const e=Object.entries(this.score).map(([n,r])=>r.amount*r.multiplier).reduce((n,r)=>n+=r,0);return Math.floor(e)}updateScore(e){xe.gameIsOver||(e==="jagers"&&wt.jagerScore(),this._score[e].amount++)}save(e){if(e){const n={name:wt.getName(),score:this.getTotal()};return T_(bn(On,"leaderboard/"+B_()),n)}}get score(){return this._score}}const yt=new wk;class z_ extends rd{constructor(e,n,r,i){super(e,n,r),this._position=n,this._game=i,this.collected=!1,this.load(),this.type="jagermeister"}load(){this.setupAnimations(),this.registerActions()}registerActions(){const e=St.getPlayer(),n=new window.BABYLON.ExecuteCodeAction({trigger:window.BABYLON.ActionManager.OnIntersectionEnterTrigger,parameter:e._mesh},()=>this.beginCollectAnimation());this._mesh.actionManager=new window.BABYLON.ActionManager(this._scene),this._mesh.actionManager.registerAction(n)}beginCollectAnimation(){if(this.collected)return;this.collected=!0,yt.updateScore("jagers"),this.addToBoostMeter();let e=new window.BABYLON.Animation("position","position.y",60,window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);const n=[];n.push({frame:0,value:this._mesh.position.y}),n.push({frame:60,value:this._mesh.position.y+40}),e.setKeys(n),Ze.playSound("jager"),this._scene.beginDirectAnimation(this._mesh,[e],0,60,!1,1)}setupAnimations(){this.setupRotateAnimation()}setupRotateAnimation(){let e=new window.BABYLON.Animation("rotate","rotation.y",60,window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,window.BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);const n=[{frame:0,value:0},{frame:100,value:Math.PI}];e.setKeys(n),this._mesh.animations.push(e),this._scene.beginAnimation(this._mesh,0,100,!0)}move(e){this.collected&&(e/=4),this._mesh.position.z-=e}resetPosition(){super.resetPosition(),this.collected=!1}addToBoostMeter(){Nt.boostTime<100&&(Nt.boostTime=Nt.boostTime+10)}}Object.assign(z_.prototype,id);class U_ extends rd{constructor(e,n,r){super(e,n,r),this.registerActions(),this.type="stone"}}Object.assign(U_.prototype,id,D_);const vf="moveLeft",yf="moveRight";class xk{constructor(e,n){this._model=e,this._scene=n,this._currentPosition=0,this._animations=[],this.load()}load(){this._createMesh(),this._loadModel()}showIntroAnimation(){const e=[{frame:0,value:this._mesh.position.z},{frame:60,value:-10}],n=new window.BABYLON.Animation("Intro","position.z",60,window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);n.setKeys(e),this._scene.beginDirectAnimation(this._mesh,[n],0,60)}moveLeft(){const e=this._getMoveTo(vf);e!==!1&&!xe.gameIsOver&&(Ze.playSound("moveLeft"),this._moveToLane(e))}moveRight(){const e=this._getMoveTo(yf);e!==!1&&!xe.gameIsOver&&(Ze.playSound("moveRight"),this._moveToLane(e))}reset(){this._mesh.position.x=0,this._mesh.position.z=-25,this._currentPosition=0}getMesh(){return this._mesh}get position(){return this._mesh.position}_createMesh(){this._mesh=window.BABYLON.Mesh.CreateBox("player",2,this._scene),this._mesh.scaling.y=3,this._mesh.scaling.x=.4,this._mesh.scaling.z=.5,this._mesh.position.y=3,this._mesh.visibility=0,this._mesh.bakeCurrentTransformIntoVertices(),this._mesh.position.z=-25}_loadModel(){this._model.forEach(e=>{e.parent=this._mesh,e.rotation.y=Math.PI/2}),this._mesh.scaling=new window.BABYLON.Vector3(.8,.8,.8)}_moveToLane(e){const n=e>this._currentPosition?10:-10;this._currentPosition=e,this._stopAnimations(),this._setMoveAnimations([{name:"Move",value:"position.x",keyframes:[{frame:0,value:this._mesh.position.x},{frame:20*ut.modifiers.agility,value:e}],duration:20*ut.modifiers.agility,blend:!1},{name:"Turn",value:"rotation.y",keyframes:[{frame:0,value:0},{frame:15,value:Math.PI/n},{frame:30*ut.modifiers.agility,value:0}],duration:30*ut.modifiers.agility,blend:!0}])}_setMoveAnimations(e){const n=new window.BABYLON.ExponentialEase;n.setEasingMode(window.BABYLON.EasingFunction.EASINGMODE_EASEINOUT),e.forEach(r=>{const i=new window.BABYLON.Animation(r.name,r.value,60,window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);i.setKeys(r.keyframes),i.enableBlending=r.blend,i.blendingSpeed=.05,i.setEasingFunction(n),this._animations.push(this._scene.beginDirectAnimation(this._mesh,[i],0,r.duration))})}_stopAnimations(){this._animations.forEach(e=>e.stop()),this._animations=[]}_getMoveTo(e){const n=Math.round(this._currentPosition);if(e===vf)return n>Cn.lanes[0]?n-Cn.moveLength:!1;if(e===yf)return n<Cn.lanes[Cn.lanes.length-1]?n+Cn.moveLength:!1}}const sa={jagermeister:{name:"jagermeister",size:1,scale:2},tree:{name:"tree",size:3,scale:1.2},stone:{name:"stone",size:.4,scale:4}};class Ek{load(e,n){return this._createMeshes(e,n),this._renderMeshes(e,n),!0}getMoveables(){return this._moveables}getPlayer(){return this._player}_createMeshes(e,{stone:n,pinetree:r,jagermeister:i,player:s}){this._jagermeister=Ks.createMesh(e,i,sa.jagermeister),this._tree=Ks.createMesh(e,r,sa.tree),this._stone=Ks.createMesh(e,n,sa.stone),this._player=s}_renderMeshes(e){this._player=new xk(this._player,e);const n=new window.BABYLON.Vector3(-100,-100,-100),r=[...new Array(50).keys()].map(()=>new F_(this._tree,n,e)),i=[...new Array(50).keys()].map(()=>new U_(this._stone,n,e)),s=[...new Array(15).keys()].map(()=>new z_(this._jagermeister,n,e,e._game));this._moveables=[...r,...i,...s]}}const St=new Ek;class Sk{load(e){this._scene=e,this._mute=localStorage.getItem("sound"),this.sounds=gf.map(this._loadSound.bind(this)),this._mute&&this._mute==="mute"&&this.mute()}playSound(e){const n=this.sounds.find(({name:r})=>r===e);n&&n.play()}stopBackgroundSound(){this.sounds.find(({name:e})=>e==="background").stop()}stopBoostSound(){this.sounds.find(e=>e.name==="boost").stop()}mute(){this.sounds.forEach(e=>e.setVolume(0)),localStorage.setItem("sound","mute")}unmute(){this.sounds.forEach(e=>{const n=gf.find(r=>r.name===e.name);n&&e.setVolume(n.settings.volume)}),localStorage.setItem("sound","unmute")}_loadSound(e){let n=new window.BABYLON.Sound(e.name,e.file,this._scene,null,e.settings);return e.follow&&n.attachToMesh(St.getPlayer().getMesh()),n}}const Ze=new Sk;class Ck{load(e,n){this._element=e,this._game=n,this._cacheSelectors(),this._addEventListeners(),this._initSoundToggle()}_cacheSelectors(){this._menu=this._element.querySelector(".game__menu"),this._scoreContainer=this._element.querySelector(".game__score-container"),this._score=this._element.querySelector(".game__score"),this._finalScore=this._element.querySelector("[data-final-score]"),this._nameInput=this._element.querySelector("[data-name]"),this._saveForm=this._element.querySelector("[data-save-score]"),this._sound=this._element.querySelector("[data-sound]"),this._boost=this._element.querySelector("[data-boost]"),this._gameOver=this._element.querySelector(".gameover")}_addEventListeners(){this._menu.addEventListener("click",e=>this._handleClick(e)),this._saveForm.addEventListener("submit",e=>this._saveGame(e)),this._nameInput&&this._nameInput.setAttribute("required",!0),this._sound.addEventListener("change",e=>this._toggleSound(e.target.checked))}_handleClick(e){const n=typeof e.target.dataset.start<"u",r=typeof e.target.dataset.rules<"u";n&&!xe.playCount&&this._game.startGame(),r&&this._showRules(e)}_saveGame(e){e.preventDefault(),yt.save(e.target.action).then(()=>this._game.startGame()).catch(()=>this._game.startGame())}_initSoundToggle(){const e=localStorage.getItem("sound");e&&(this._sound.checked=e&&e!=="mute")}_showRules(){this._menu.classList.add("game__menu--rules")}_toggleSound(e){e?Ze.unmute():Ze.mute()}hideMenu(){this._menu.classList.remove("game__menu--hidden")}onGameStart(){this._nameInput&&this._nameInput.blur(),this._menu.classList.add("game__menu--hidden"),this._gameOver.classList.add("gameover--disabled"),this._menu.classList.remove("game__menu--rules"),this._scoreContainer.classList.add("game__score-container--visible"),this._sound.parentNode.classList.add("game__sound--visible"),this._boost.parentNode.parentNode.classList.add("game__boost--visible")}onGameStop(e){this._nameInput&&setTimeout(()=>{this._nameInput.focus()},250),this._scoreContainer.classList.remove("game__score-container--visible"),this._gameOver.classList.remove("gameover--disabled"),this._sound.parentNode.classList.remove("game__sound--visible"),this._boost.parentNode.parentNode.classList.remove("game__boost--visible"),this._finalScore.innerHTML=`${e}`}displayScore(e){this._score.innerHTML=`${e}`}jagerScore(){this._score.classList.add("game__score--jager"),setTimeout(()=>this._score.classList.remove("game__score--jager"),200)}getName(){return this._nameInput?this._nameInput.value:null}setBoostValue(e){this._boost.style.width=`${e}%`}}const wt=new Ck,Zn=(t,e)=>e.find(n=>n===t),kk=[33,37,65],Nk=[34,39,68],wf=[38,87,190],Tk=[32],Ik=[27];class jk{constructor(){le(this,"_game",null);le(this,"_keydown",!1);le(this,"_boostIsActive",!1)}load(e){this._game=e,this._addEventListeners()}get boostIsActive(){return this._boostIsActive}set boostIsActive(e){this._boostIsActive=e}_addEventListeners(){document.addEventListener("keydown",e=>this._movePlayerLeft(e)),document.addEventListener("keydown",e=>this._movePlayerRight(e)),document.addEventListener("keydown",e=>this._startBoost(e)),document.addEventListener("keyup",e=>this._stopBoost(e)),document.addEventListener("keydown",e=>this._startGame(e)),window.addEventListener("resize",()=>this._onResize(),!1),window.dispatchEvent(new Event("resize"))}_movePlayerLeft({keyCode:e}){Zn(e,kk)&&St.getPlayer().moveLeft()}_movePlayerRight({keyCode:e}){Zn(e,Nk)&&St.getPlayer().moveRight()}_startBoost({keyCode:e}){Zn(e,wf)&&(this._keydown=!0,this._boostIsActive=!0,Ze.playSound("boost"))}_stopBoost({keyCode:e}){Zn(e,wf)&&(this._keydown=!1,this._boostIsActive=!1,Ze.stopBoostSound())}_startGame({keyCode:e}){(Zn(e,Tk)&&!xe.playCount||Zn(e,Ik))&&this._game.startGame()}_onResize(){this._game._element.width=document.body.offsetWidth,this._game._element.height=document.body.offsetWidth/2}}const er=new jk,Ht={speed:1.8,agility:1.25,acceleration:.015,accelerationTime:2,speedIncrement:0,maxSpeed:3,boostSpeed:1,boost:120,boostRestoreAmount:.05};class Pk{constructor(){le(this,"_boostTime",Ht.boost);le(this,"_speed",Ht.speed);le(this,"_speedIncrement",Ht.speedIncrement)}load(){this._boostTime=ut.modifiers.boost}update(){const e=er.boostIsActive&&this._boostTime>0,n=this._boostTime<ut.modifiers.boost,r=xe.clock%(60*Ht.accelerationTime)===0&&xe.clock!==0;e?this._boost():n&&this._rechargeBoost(),r&&this._incrementSpeed()}reset(){this._boostTime=ut.modifiers.boost,wt.setBoostValue(ut.modifiers.boost)}get speed(){return this._speed+this._speedIncrement+this.boostSpeed}get boostSpeed(){return er.boostIsActive?Ht.boostSpeed:0}get boostTime(){return this._boostTime}set boostTime(e){this._boostTime=e}_boost(){this._boostTime--,wt.setBoostValue(Math.floor(this._mapBoostTime(this._boostTime)))}_rechargeBoost(){this._boostTime+=Ht.boostRestoreAmount,wt.setBoostValue(this._mapBoostTime(this._boostTime)),er.boostIsActive&&(Ze.stopBoostSound(),er.boostIsActive=!1)}_incrementSpeed(){Math.ceil(this.speed)<=Ht.maxSpeed&&!er.boostIsActive&&(this._speedIncrement+=Ht.acceleration)}_mapBoostTime(e){return e/ut.modifiers.boost*100}}const Nt=new Pk,Rk="../../../../..";class Ak{load(e){this._emitRate=500,this._scene=e,this.createMesh(),this.createParticleSystem(),this.position(),this.rotation()}createMesh(){this._mesh=window.BABYLON.Mesh.CreateBox("foutain",.1,this._scene)}createParticleSystem(){this._particleSystem=new window.BABYLON.ParticleSystem("particle",3500,this._scene),this._particleSystem.particleTexture=new window.BABYLON.Texture(`${Rk}/img/textures/driehoek.svg`,this._scene),this._particleSystem.emitter=this._mesh,this._particleSystem.minEmitBox=new window.BABYLON.Vector3(-30,0,0),this._particleSystem.maxEmitBox=new window.BABYLON.Vector3(30,0,0),Object.assign(this._particleSystem,zo.snow),this._particleSystem.emitRate=this._emitRate*Nt.speed,this._particleSystem.start()}position(){this._mesh.position.y=20,this._mesh.position.z=15}rotation(){this._mesh.rotation.x=Math.PI/3,this._mesh.rotation.z=Math.PI}setUpdateSpeed(e){const n=zo.snow.updateSpeed*e;this._particleSystem.updateSpeed!==n&&(this._particleSystem.updateSpeed=n)}getMesh(){return this._mesh}}const bk=new Ak,Ok={load(t){this._scene=t,this._drawSky(),this._drawFog(),this._drawSnow(),this._setupLights()},_drawSky(){const t=new window.BABYLON.SkyMaterial("skyMaterial",this._scene),e=window.BABYLON.Mesh.CreateBox("skyBox",1e3,this._scene);Object.assign(t,zo.sky),e.material=t,e.position.y=500},_drawFog(){Object.assign(this._scene,zo.fog)},_drawSnow(){bk.load(this._scene)},_setupLights(){this._light=new window.BABYLON.HemisphericLight("1",new window.BABYLON.Vector3(0,400,20),this._scene),this._light.diffuse=new window.BABYLON.Color4(.88,.94,1,.5),this._light.specular=new window.BABYLON.Color3(0,0,0),this._light.intensity=1,this._pointLights=[new window.BABYLON.PointLight("1",new window.BABYLON.Vector3(-40,900,10),this._scene),new window.BABYLON.PointLight("1",new window.BABYLON.Vector3(40,900,10),this._scene)];for(const t of this._pointLights)t.intensity=.015,t.diffuse=new window.BABYLON.Color3(1,1,1)}};class Mk{constructor(){le(this,"_length",500);le(this,"_width",200);le(this,"_stepSize",10);le(this,"_fieldSize",10)}renderGround(e){const n=new window.BABYLON.Mesh.CreateRibbon("ground",this._getPaths(),!1,!1,null,e);return n.convertToFlatShadedMesh(),n}get length(){return this._length}_getPaths(){let e=[];for(let n=-this._width;n<=this._width;n+=this._stepSize)e.push(this._createPath(n));return e}_createPoints(e,n,r){let i={x:e,y:Math.random()+.5,z:n};if(e<-this._fieldSize||e>this._fieldSize){let s=e<0?e*-1:e;s*=s*.001;const o=n===0||n===500?4:i.y*4;i.y=s+o}else i.y=n===0||n===500?0:i.y;r.push(new window.BABYLON.Vector3(i.x,i.y,i.z))}_createPath(e){let n=[];for(let r=0;r<=this._length;r+=10)this._createPoints(e,r,n);return n}}const Os=new Mk,xf={map:{t:{list:"trees",mesh:"tree"},j:{list:"jagermeisters",mesh:"jagermeister"},r:{list:"stones",mesh:"stone"}},active:{tree:[],stone:[],jagermeister:[]},modes:[{mode:"insane",value:3e3},{mode:"brutal",value:2e3},{mode:"hard",value:1e3},{mode:"medium",value:400},{mode:"easy",value:0}]},Lk=[`-|-|-
    -|-|-
    -|-|-
    -|-|-
    r|-|-
    -|r|-
    -|-|-
    -|-|-
    -|-|t
    -|t|-
    -|-|-
    -|-|r
    -|-|-
    -|t|-
    -|-|-
    -|-|-
    -|t|-
    -|-|-
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    t|-|-
    -|-|r
    -|-|-
    -|-|-
    -|r|j
    -|-|-
    -|-|t
    -|-|-
    t|-|t
    -|-|-
    -|-|-
    -|-|-
    -|r|-
    -|-|t
    -|-|-
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    t|-|-
    -|-|t
    -|-|-
    -|-|r
    -|-|-
    -|r|j
    -|-|-
    -|-|r
    -|-|-
    t|-|-
    -|-|-
    -|-|-
    -|-|t
    -|-|-
    -|r|-
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    -|-|t
    -|-|-
    t|-|-
    -|-|-
    r|-|-
    -|j|-
    -|-|r
    -|-|-
    r|-|-
    -|-|-
    t|-|t
    -|-|r
    r|-|-
    -|-|-
    -|-|-
    -|-|j
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    j|-|-
    -|-|-
    -|-|-
    -|j|-
    -|-|-
    -|-|-
    t|-|r
    -|-|-
    -|r|r
    -|-|-
    -|-|t
    -|-|-
    -|-|-
    r|-|-
    -|-|t
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    t|-|-
    -|r|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    t|j|-
    t|-|-
    -|t|-
    -|-|-
    -|-|-
    -|-|-
    -|t|-
    -|r|t
    -|-|r
    -|-|-
    -|-|-
    -|-|-`,`-|-|-
    -|-|r
    -|-|-
    -|-|t
    -|-|t
    -|-|-
    r|-|-
    -|-|-
    -|-|-
    -|r|t
    -|-|t
    -|-|-
    r|-|-
    r|-|-
    -|-|-
    r|-|t
    -|-|t
    -|-|-
    -|j|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    t|-|-
    -|-|r
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|t
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    t|-|-
    -|-|-
    -|-|-
    -|r|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|t|t
    -|-|r
    -|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|-`],Dk=[`-|-|-
    r|-|-
    -|-|t
    -|-|-
    r|-|-
    -|-|-
    t|-|-
    -|-|t
    -|t|-
    -|-|-
    -|-|-
    -|-|j
    -|-|-
    r|-|r
    -|-|-
    -|-|-
    -|t|-
    -|-|-
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    t|-|-
    -|-|r
    -|-|-
    -|-|-
    t|-|-
    -|-|-
    t|-|t
    -|-|-
    -|r|-
    -|-|-
    t|j|-
    -|-|t
    -|-|-
    t|-|-
    -|t|-
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    t|-|-
    -|-|-
    -|-|t
    -|r|-
    -|-|-
    -|r|-
    -|-|-
    t|-|r
    -|-|-
    -|-|-
    -|j|-
    -|-|-
    -|-|t
    -|t|-
    -|-|-
    r|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    -|-|r
    -|-|-
    t|-|-
    -|-|-
    -|-|-
    -|r|r
    -|-|-
    t|-|t
    -|-|-
    -|-|-
    t|t|-
    -|-|-
    -|-|r
    -|-|-
    r|-|r
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    t|-|-
    j|-|-
    -|r|-
    -|-|-
    -|j|-
    -|-|-
    t|-|-
    t|r|-
    t|-|-
    -|-|-
    -|-|-
    t|-|t
    -|-|-
    -|t|-
    r|-|-
    -|-|r
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    -|r|-
    -|-|-
    -|-|r
    r|-|-
    -|-|-
    t|j|-
    t|-|-
    -|-|-
    -|t|-
    -|-|-
    -|-|-
    -|t|-
    -|r|t
    -|-|r
    r|-|-
    -|t|-
    -|-|-`,`-|-|-
    j|-|j
    -|-|-
    -|-|-
    -|-|t
    -|t|-
    -|-|-
    r|-|-
    -|-|-
    -|-|r
    -|t|t
    -|-|-
    r|-|-
    -|r|-
    -|-|-
    -|-|t
    j|t|t
    -|-|-
    -|t|-
    -|-|-`],Fk=[`r|-|r
    t|-|-
    -|r|-
    -|-|-
    -|-|-
    -|t|-
    -|-|-
    r|-|r
    -|-|-
    -|-|-
    -|j|-
    -|-|r
    t|-|-
    -|r|-
    -|-|-
    -|-|-
    -|t|t
    -|-|-
    -|-|t
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    -|-|j
    r|-|-
    j|r|-
    -|-|-
    -|-|r
    -|-|t
    -|t|-
    -|-|-
    -|-|r
    t|-|-
    -|-|-
    -|j|-
    -|-|-
    -|t|-
    -|-|-
    -|-|t
    -|-|-`,`t|-|-
    -|t|-
    -|-|j
    -|-|t
    t|-|t
    -|-|-
    -|t|-
    -|r|r
    -|j|-
    -|t|-
    j|-|-
    -|-|r
    t|-|-
    -|-|-
    -|r|-
    -|j|-
    -|-|t
    -|-|-
    t|-|t
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    -|r|-
    -|-|j
    j|-|t
    -|r|-
    -|-|r
    -|-|-
    r|-|-
    -|-|j
    -|t|-
    t|-|-
    -|-|-
    -|-|t
    -|-|-
    t|-|t
    -|-|-
    -|j|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    -|-|j
    -|-|-
    r|-|-
    -|-|-
    -|t|r
    -|t|-
    -|j|-
    -|t|-
    -|t|-
    j|-|-
    -|-|t
    -|r|-
    -|-|-
    -|t|t
    -|-|-
    t|-|-
    -|-|-`,`-|-|-
    -|-|-
    -|-|-
    -|-|j
    -|-|-
    r|-|-
    -|t|-
    -|-|-
    t|-|t
    t|-|t
    j|-|-
    -|-|-
    r|-|-
    -|-|t
    -|r|-
    j|-|-
    -|-|-
    -|-|-
    t|-|-
    -|-|-`,`-|-|-
    -|r|-
    -|r|-
    -|r|-
    -|r|-
    r|-|j
    -|-|t
    -|-|-
    j|-|t
    -|-|t
    j|-|-
    -|-|-
    r|-|-
    -|-|j
    -|r|-
    r|t|-
    t|-|-
    -|-|t
    t|j|-
    -|-|-`],Bk=[`-|-|-
    t|-|-
    -|t|-
    -|-|-
    -|-|t
    -|t|-
    -|-|-
    t|-|j
    -|t|-
    -|-|-
    -|-|r
    -|-|r
    r|-|-
    -|r|-
    -|-|-
    -|-|t
    t|-|-
    -|t|j
    -|-|-
    -|-|-`,`-|-|-
    -|-|-
    t|-|-
    -|t|-
    -|t|-
    -|t|-
    -|t|-
    -|-|-
    -|-|r
    r|-|-
    t|r|-
    -|-|-
    -|-|j
    j|-|-
    t|-|r
    -|-|-
    -|t|-
    -|-|-
    t|t|-
    -|-|-`,`-|-|-
    -|-|-
    r|-|-
    -|-|-
    -|r|-
    -|-|-
    -|-|r
    -|-|-
    -|r|-
    j|-|-
    r|r|-
    -|-|-
    -|-|-
    -|-|t
    -|t|-
    -|-|-
    r|-|t
    r|-|t
    r|-|t
    j|-|-`,`-|-|-
    -|-|-
    r|-|-
    -|-|-
    -|r|t
    -|-|-
    r|-|-
    -|t|-
    -|-|-
    -|-|-
    -|r|-
    -|r|-
    -|r|-
    j|r|-
    -|-|-
    t|-|t
    -|-|-
    -|r|-
    -|r|-
    -|-|-`,`-|-|-
    -|-|-
    -|t|-
    -|t|-
    -|t|-
    -|t|-
    r|-|-
    -|-|-
    -|t|-
    -|t|-
    -|-|j
    r|-|r
    -|-|-
    -|-|-
    -|r|-
    -|r|-
    -|-|t
    -|-|-
    t|j|t
    t|-|-`,`-|-|-
    -|-|-
    t|-|-
    -|-|-
    -|t|-
    -|-|-
    -|t|-
    -|-|-
    -|-|r
    t|-|-
    -|r|-
    -|-|-
    -|-|t
    -|-|-
    -|t|-
    r|-|-
    -|-|-
    -|-|j
    -|j|-
    j|-|-`,`-|-|-
    -|-|-
    t|-|-
    t|-|-
    t|-|t
    -|-|t
    -|-|t
    r|-|-
    -|r|-
    -|t|-
    -|t|-
    -|-|-
    -|-|r
    -|r|-
    -|-|-
    -|-|-
    j|-|-
    t|-|-
    -|-|t
    -|-|-`],zk=[`-|-|-
    -|-|-
    -|-|-
    -|-|-
    -|-|t
    -|t|-
    -|-|-
    t|-|j
    -|t|-
    -|-|-
    t|t|-
    -|-|-
    -|-|t
    -|t|t
    -|-|-
    t|j|t
    t|-|t
    -|-|j
    -|t|-
    -|-|-`,`-|-|-
    -|-|-
    t|-|-
    -|t|-
    -|-|-
    -|-|t
    -|t|-
    -|-|-
    r|j|r
    -|-|-
    t|r|t
    -|-|-
    -|-|j
    j|-|-
    t|-|r
    -|-|-
    -|t|-
    -|-|-
    t|t|-
    -|-|-`,`-|-|-
    -|-|-
    r|-|-
    -|-|r
    -|r|-
    -|-|-
    t|-|r
    t|-|-
    -|r|-
    j|-|-
    r|r|j
    -|-|-
    -|-|-
    -|-|t
    -|t|-
    -|-|-
    r|j|t
    r|-|t
    r|j|t
    j|-|-`,`-|-|-
    -|-|-
    r|-|-
    -|-|-
    -|r|t
    -|-|t
    r|-|-
    -|t|-
    -|-|-
    -|-|j
    -|r|-
    -|r|-
    -|-|-
    -|r|t
    -|-|-
    t|-|t
    -|-|-
    -|r|-
    -|r|-
    -|-|-`,`-|-|-
    -|-|-
    -|t|-
    -|t|-
    j|-|-
    t|-|t
    t|-|t
    -|-|j
    -|t|-
    -|t|-
    j|-|-
    t|-|t
    t|-|t
    -|-|-
    -|r|-
    -|r|-
    -|t|-
    -|-|-
    t|j|t
    t|-|-`,`-|-|-
    -|-|-
    t|-|-
    -|-|-
    -|t|-
    -|-|-
    -|t|-
    -|-|-
    -|-|r
    t|-|-
    -|r|-
    -|-|-
    -|-|t
    -|-|-
    -|t|-
    r|-|-
    -|-|-
    -|-|j
    -|j|-
    j|-|-`,`-|-|-
    -|-|-
    t|-|-
    t|-|-
    t|-|t
    -|-|t
    -|-|t
    r|-|-
    -|r|-
    -|t|-
    -|t|-
    -|-|-
    -|-|r
    -|r|-
    -|-|-
    -|-|-
    j|-|-
    t|-|-
    -|-|t
    -|-|-`],Uk={easy:Lk,medium:Dk,hard:Fk,brutal:Bk,insane:zk};class Uo{static parsePattern(e){return e.split(/\n/).reverse().reduce(Uo.parseRow,[])}static parseRow(e,n,r){const i=r*25+500;return n.split("|").map(s=>s.replace(/^\s+|\s+$/g,"")).forEach((s,o)=>{s.length&&s!=="-"&&e.push({type:xf.map[s].mesh,position:new window.BABYLON.Vector3(Cn.lanes[o],2,i)})}),e}load(){this._index=0,this._nodes=St.getMoveables()}create(){this._setMode(),this._setDifficulty(this._mode),this._setIndex(),this._createPattern(Uo.parsePattern(this._activePattern[this._index]))}update(e){this._getActiveNodes().forEach(n=>{n.move(e),n.shouldDeactivate()&&(n.deactivate(),n.resetPosition(),yt.updateScore("obstacles"))})}reset(){this._index=0,this._getActiveNodes().forEach(e=>{e.deactivate(),e.resetPosition()}),this._setMode(),this._setDifficulty(this._mode)}_getActiveNodes(){return this._nodes.filter(e=>e.isActive())}_setMode(){const e=yt.getTotal();this._mode=xf.modes.find(({value:n})=>e>=n).mode}_setDifficulty(e){this._activePattern=Uk[e]}_setIndex(){const n=this._activePattern.map((i,s)=>s!==this._index?s:!1).filter(i=>i!==!1),r=Math.floor(Math.random()*n.length);this._index=n[r]}_createPattern(e){e.forEach(({position:n,type:r})=>{this._nodes.find(s=>s.type===r&&!s.isActive()).activate(n)})}}const Qs=new Uo;class Wo{constructor(){le(this,"_grounds",[])}static resetGround(e,n){e.position.z=Os.length-20-n}static moveGround(e,n){e.position.z-=n}load(e){this._scene=e}update(e){this._grounds.forEach(n=>Wo.moveGround(n,e)),this.shouldChangeOrder(e)&&this._changeOrder(e)}render(){this._grounds=[this._scene,this._scene].map(Os.renderGround.bind(Os)),this.reset()}reset(){const[e,n]=this._grounds;e.position.z=-10,n.position.z=Os.length-20}shouldChangeOrder(e){const[n]=this._grounds,r=n.position.z;return r<-500&&r>-501-e}_changeOrder(e){const[n]=this._grounds;Wo.resetGround(n,e),this._grounds.reverse(),Qs.create(),yt.updateScore("sections")}}const Ms=new Wo;class Wk{constructor(){le(this,"_camera",null)}load(e){this._camera=new window.BABYLON.FreeCamera("camera",new window.BABYLON.Vector3(0,7,-20),e),e.activeCamera=this._camera,e.activeCamera.rotation.x=Math.PI/25}update(){this._camera.position.x=.65*St.getPlayer().position.x}}const Ef=new Wk;class Hk{constructor(e,n){this._element=e,this._canvas=this._element.querySelector("canvas"),this._options=Object.assign({},Cn.modifiers,n),this._startEngine(),this._createScene(),this._load()}startGame(){!xe.gameIsOver&&xe.playCount||(xe.playCount&&this._reset(),wt.onGameStart(),St.getPlayer().showIntroAnimation(),Ze.stopBackgroundSound(),Ze.playSound("background"),this._render())}stopGame(){this._engine.stopRenderLoop(),xe.updatePlaycount(),xe.gameIsOver=!0,Ze.playSound("scream"),xe.playCount&&wt.onGameStop(yt.getTotal())}_startEngine(){this._engine=new window.window.BABYLON.Engine(this._canvas,!0),this._engine.enableOfflineSupport=!1,this._engine.setHardwareScalingLevel(1)}_createScene(){this._scene=new window.window.BABYLON.Scene(this._engine),Object.assign(this._scene,ok.options)}_load(){wt.load(this._element,this),ut.load(this._options.modifiers),yt.reset(),er.load(this),ck.load(this._scene,ik).then(e=>{St.load(this._scene,e),Ok.load(this._scene),Qs.load(),Ms.load(this._scene),Ze.load(this._scene),Nt.load(),Ef.load(this._scene),wt.hideMenu(),Ms.render(),this._setupBeforeRender()})}_setupBeforeRender(){this._scene.render(),this._scene.registerBeforeRender(()=>{this._update()})}_reset(){yt.reset(),Qs.reset(),Nt.reset(),xe.reset(),St.getPlayer().reset(),Ms.reset()}_render(){this._engine.runRenderLoop(()=>{this._scene.render(),yt.updateScore("points"),wt.displayScore(yt.getTotal()),xe.updateClock()})}_update(){Ms.update(Nt.speed),Qs.update(Nt.speed),Nt.update(),xe.gameIsOver?this.stopGame():Ef.update()}}function Vk({user:t}){const e=C.useRef();C.useEffect(()=>{window.MIRASKI_GAME||(window.MIRASKI_GAME=new Hk(e.current,{modifiers:t.modifiers}))},[]);const n=[t.modifiers.jagers,t.modifiers.agility,t.modifiers.boost];return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"game__mobile-text",children:u.jsx("div",{className:"wrapper",children:u.jsxs("article",{children:[u.jsx("h1",{children:"Sorry"}),u.jsx("p",{className:"introduction",children:"Unfortunately, the game works only on a device with at least 1024px of screen width and a keyboard."})]})})}),u.jsxs("section",{ref:e,className:"game",children:[u.jsx("canvas",{}),u.jsxs("div",{className:"game__score-container",children:["score:",u.jsx("span",{className:"game__score"})]}),u.jsxs("span",{className:"game__sound game__sound--disabled",children:[u.jsx("input",{type:"checkbox",className:"game__sound-toggle",name:"sound","data-sound":!0,id:"sound",defaultChecked:!0}),u.jsx("label",{className:"game__sound-state",htmlFor:"sound"})]}),u.jsxs("div",{className:"game__boost",children:[u.jsx(Su,{name:t.name,shortname:t.shortname}),u.jsx("p",{className:"game__boost-text",children:"t-t-turboboost"}),u.jsx("div",{className:"game__boost-bar",children:u.jsx("span",{className:"game__boost-fill","data-boost":!0})})]}),u.jsxs("div",{className:"gameover gameover--disabled",children:[u.jsx("div",{className:"gameover__background"}),u.jsxs("div",{className:"gameover__text",children:[u.jsx("h2",{className:"gameover__heading",children:"Game over!"}),u.jsx("p",{className:"gameover__finalscoretext",children:"your final score:"}),u.jsx("p",{className:"gameover__finalscore","data-final-score":!0,children:"0"})]}),u.jsx("form",{className:"gameover__form",action:"/game/save","data-save-score":!0,children:u.jsxs("ol",{className:"form-fields",children:[u.jsxs("li",{className:"form-field",children:[u.jsx("label",{htmlFor:"game__username",children:"Name"}),u.jsx("input",{type:"text","data-name":!0,id:"game__username",className:"game__username game__username--hidden",pattern:"^[a-zA-Z0-9]{2,15}$",placeholder:"Bruseker"})]}),u.jsx("li",{className:"form-field",children:u.jsx("button",{className:"btn",type:"submit",children:"Save score"})}),u.jsx("li",{className:"form-field",children:u.jsx(oe,{to:"/game/leaderboard",children:"Check out the leaderboard"})})]})})]}),u.jsxs("div",{className:"game__menu game__menu--hidden",children:[u.jsxs("div",{className:"game__user-info",children:[u.jsx(Su,{name:t.name,shortname:t.shortname}),u.jsxs("div",{className:"game__stats",children:[u.jsx("h3",{children:t.name}),u.jsxs("div",{className:"game__modifiers",children:[u.jsxs("div",{className:"game__modifier",children:[u.jsx("svg",{width:"42px",height:"42px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("g",{fill:"none",transform:"translate(4.000000, 3.000000)",children:u.jsx("g",{transform:"translate(-777.000000, -355.000000)",children:u.jsx("g",{transform:"translate(541.000000, 296.000000)",children:u.jsxs("g",{children:[u.jsx("polygon",{stroke:"#A8E0FB",strokeWidth:"5",points:"239.303847 62.4269713 252.812475 60 269.191257 67.2828118 267.780095 85.8368906 247.49637 95.5442063 236 82.1767894"}),u.jsx("polygon",{className:"game__stats-value",stroke:"#1F94CA",strokeWidth:"5",strokeDashoffset:110-n[0]/6*110,points:"239.303847 62.4269713 252.812475 60 269.191257 67.2828118 267.780095 85.8368906 247.49637 95.5442063 236 82.1767894"})]})})})})}),u.jsx("p",{children:"Jäger"})]}),u.jsxs("div",{className:"game__modifier",children:[u.jsx("svg",{width:"42px",height:"42px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("g",{fill:"none",transform:"translate(4.000000, 3.000000)",children:u.jsx("g",{transform:"translate(-680.000000, -355.000000)",children:u.jsx("g",{transform:"translate(541.000000, 296.000000)",children:u.jsx("g",{children:u.jsxs("g",{transform:"translate(131.000000, 50.000000)",children:[u.jsx("polygon",{stroke:"#A8E0FB",strokeWidth:"5",points:"25.1735314 9.38220229 41.928762 19.3144939 40.7923905 34.4660643 22.0530551 44.8630813 10.2266467 34.4278822 8.44841462 16.0409104"}),u.jsx("polygon",{className:"game__stats-value",stroke:"#1F94CA",strokeWidth:"5",strokeDashoffset:110-n[1]/6*110,points:"25.1735314 9.38220229 41.928762 19.3144939 40.7923905 34.4660643 22.0530551 44.8630813 10.2266467 34.4278822 8.44841462 16.0409104"})]})})})})})}),u.jsx("p",{children:"Agility"})]}),u.jsxs("div",{className:"game__modifier",children:[u.jsx("svg",{width:"42px",height:"42px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("g",{fill:"none",transform:"translate(-872.000000, -353.000000)",children:u.jsx("g",{transform:"translate(541.000000, 296.000000)",children:u.jsx("g",{transform:"translate(326.300781, 50.444231)",children:u.jsxs("g",{children:[u.jsx("polygon",{stroke:"#A8E0FB",strokeWidth:"5",points:"19.9690017 9.69910387 39.4902793 16.9736928 39.626149 34.5614267 29.3881426 44.2964417 10.5323527 34.5233102 9.01571914 21.6237177"}),u.jsx("polygon",{className:"game__stats-value",stroke:"#1F94CA",strokeWidth:"5",strokeDashoffset:110-n[2]/6*110,points:"19.9690017 9.69910387 39.4902793 16.9736928 39.626149 34.5614267 29.3881426 44.2964417 10.5323527 34.5233102 9.01571914 21.6237177"})]})})})})}),u.jsx("p",{children:"Boost"})]})]})]})]}),u.jsxs("div",{className:"game__buttons",children:[u.jsx("button",{className:"btn",type:"button","data-start":!0,children:"Spielen!"}),u.jsx("button",{className:"btn btn--secondary",type:"button","data-rules":!0,children:"About this game"}),u.jsx(oe,{className:"btn btn--secondary",to:"/game/leaderboard",children:"Check out the leaderboard"})]}),u.jsx("div",{className:"game__about-game",children:u.jsxs("div",{className:"content",children:[u.jsx("h1",{children:"About"}),u.jsx("p",{children:"Carve your way through the digital MiraSki slopes as you collect the Jäger shots for extra points. Weave past trees, rocks and snow storms in this 3rd person slalom adventure."}),u.jsx("p",{children:"The objective is to get as far as possible without dying, the game is infinite. You play as a snowboarder and must navigate between the obstacles on the piste which cause immediate death. You automatically slide down down the mountain, but you can go left or right to any avoid collision with the trees and earn points. Use the arrow keys ([→] [←]) on your keyboard to guide your character down the mountain."}),u.jsx("p",{children:"Use the up arrow key ([↑]) to activate your turbo-boost, which is the bar at the top of the screen. The bar refills slowly by itself, but fills quicker when you collect Jäger shots."}),u.jsx("p",{children:"At the end you can add your score to the leaderboard with the other players that have played the MiraSki game."}),u.jsx("p",{children:u.jsx(oe,{to:"/game/leaderboard",children:"Check out the leaderboard"})}),u.jsx("button",{className:"btn game__start",type:"button","data-start":!0,children:"Spielen!"})]})})]})]})]})}function $k(){const t={name:"Tennis Dimmers",shortname:"swartna",modifiers:{jagers:6,agility:3,boost:2}};return u.jsx(Vk,{user:t})}function Yk(t){const e=(r,i)=>r.score<i.score?1:r.score>i.score?-1:0,n=(r,i)=>(r.find(s=>s.name===i.name)===void 0&&r.push(i),r);return t.slice().sort(e).reduce(n,[])}function Gk(){const t=bn(On,"leaderboard"),[e,n,r]=nd(t);return u.jsxs("article",{children:[u.jsx("h1",{children:"Scores"}),u.jsx("p",{children:"Who’s ruling their offline winter-skills and is making it count in the digital world? Check out who’s on top of the MiraSki Game Leaderboard."}),u.jsxs("p",{children:["Beat the others, ",u.jsx(oe,{to:"/game",children:"play the game"}),"."]}),u.jsx("div",{className:"leaderboard-container",children:!n&&!r&&u.jsx("ol",{className:"leaderboard leaderboard--part1",children:Yk(e).map((i,s)=>u.jsxs("li",{className:"leaderboard__record",children:[u.jsx("mark",{className:"leaderboard__name",children:i.name}),u.jsx("small",{className:"leaderboard__score",children:i.score})]},s))})})]})}const Kk=({elements:t})=>({code:t.code.value,name:t.name.value,email:t.email.value,phone:t.phone.value,activity:[t["activity-skiing"].checked,t["activity-snowboarding"].checked,t["activity-apres-ski"].checked],dateOfBirth:t["date-of-birth"].value,acknowledgements:[t["acknowledge-paid"].checked,t["acknowledge-norefund"].checked,t["acknowledge-cancellation"].checked]}),Qk=t=>{const e=[];return[["code",qk],["name",Jk],["email",Zk],["phone",e2],["activity",t2],["dateOfBirth",r2],["acknowledgements",i2]].forEach(([n,r])=>{r(t[n])||e.push(n)}),e},qk=t=>t.length===4,Jk=t=>t.length<6?!1:!/\s{2,}/.test(t),Xk=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,Zk=t=>t.length>3&&Xk.test(t),e2=t=>t.length<10||t.length>13?!1:/^((0031)|(\+31)|0)6\d{8}$/.test(t),t2=t=>t[0]===!0||t[1]===!0||t[2]===!0,n2=/^[0-3]\d-[01]\d-[12]\d{3}$/,r2=t=>n2.test(t),i2=t=>t[0]===!0&&t[1]===!0&&t[2]===!0;function s2(){const{code:t}=$m(),e=Vm(),[n]=M_(bn(On,"attendeesLimit")),[r]=nd(bn(On,"attendees"));if(n&&r&&r.length>=n)return window.location.hash="/sign-up/full";const[i,s]=C.useState([]),o=c=>i.includes(c),l=async c=>{c.preventDefault();const h=Kk(c.currentTarget),d=Qk(h);if(d.length>0)return s(d),scroll(0,0),!1;const f=B_(),_={datetime:+new Date,...h};try{await T_(bn(On,"orders/"+f),_)}catch(v){return console.error(v),e("/error/create-order"),!1}e(`/pay/${f}`)},a={code:"Invite code is invalid",name:"Name is invalid",email:"Email address is invalid",phone:"Phone is invalid",activity:"Pick at least one activity",dateOfBirth:"Date of birth is invalid",acknowledgements:"You must agree with all conditions"};return u.jsxs("article",{children:[u.jsx("h1",{children:"Sign up"}),u.jsx("p",{children:"Awesome that you’re joining the MiraSki event!"}),i.length>0&&u.jsxs("div",{className:"form-field form-field--error",children:[u.jsx("p",{className:"notification notification--error",children:"The following errors were found:"}),u.jsx("ol",{className:"notification__errorlist",children:i.map(c=>u.jsx("li",{className:"form--error",children:a[c]},c))})]}),u.jsxs("form",{onSubmit:l,children:[u.jsxs("ol",{className:"form-fields",children:[u.jsxs("li",{className:`form-field ${o("code")?"form-field--error":""}`,children:[u.jsx("label",{htmlFor:"code",children:"Your unique invite code"}),u.jsx("input",{id:"code",name:"code",type:"text",value:t,disabled:!0})]}),u.jsxs("li",{className:`form-field ${o("name")?"form-field--error":""}`,children:[u.jsx("label",{htmlFor:"name",children:"Full Name"}),u.jsx("input",{id:"name",name:"name",type:"text",minLength:"6",required:!0})]}),u.jsxs("li",{className:`form-field ${o("email")?"form-field--error":""}`,children:[u.jsx("label",{htmlFor:"email",children:"Email address"}),u.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),u.jsxs("li",{className:`form-field ${o("phone")?"form-field--error":""}`,children:[u.jsx("label",{htmlFor:"phone",children:"Mobile phone"}),u.jsx("input",{id:"phone",name:"phone",type:"tel",required:!0}),u.jsx("p",{children:u.jsx("small",{children:"Enter a phone number which has a WhatsApp account"})})]}),u.jsxs("li",{className:"form-field",children:[u.jsx("label",{children:"I’ll be mostly:"}),u.jsxs("ol",{className:"form-fields",children:[u.jsx("li",{children:u.jsxs("label",{htmlFor:"activity-skiing",children:[u.jsx("input",{id:"activity-skiing",name:"activity-skiing",type:"checkbox"})," ","Skiing"]})}),u.jsx("li",{children:u.jsxs("label",{htmlFor:"activity-snowboarding",children:[u.jsx("input",{id:"activity-snowboarding",name:"activity-snowboarding",type:"checkbox"})," ","Snowboarding"]})}),u.jsx("li",{children:u.jsxs("label",{htmlFor:"activity-apres-ski",children:[u.jsx("input",{id:"activity-apres-ski",name:"activity-apres-ski",type:"checkbox"})," ","Après-skiing"]})})]}),o("activity")?u.jsx("p",{className:"notification notification--error",children:"Please check at least one box"}):null]}),u.jsxs("li",{className:`form-field ${o("dateOfBirth")?"form-field--error":""}`,children:[u.jsxs("label",{htmlFor:"date-of-birth",children:["Date of birth ",u.jsx("small",{children:"(format: 31-12-1970)"})]}),u.jsx("input",{type:"text",id:"date-of-birth",name:"date-of-birth",pattern:"[0-3]\\d-[01]\\d-[12]\\d{3}",required:!0})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"Price: €530."}),u.jsx("p",{children:"You will be asked to pay immediately."})]}),u.jsxs("li",{className:"form-field",children:[u.jsx("label",{children:"I understand that:"}),u.jsxs("ol",{className:"form-fields form-fields--payment",children:[u.jsx("li",{children:u.jsxs("label",{htmlFor:"acknowledge-paid",children:[u.jsx("input",{id:"acknowledge-paid",name:"acknowledge-paid",type:"checkbox",required:!0})," ","My registration is not valid until I have paid"]})}),u.jsx("li",{children:u.jsxs("label",{htmlFor:"acknowledge-norefund",children:[u.jsx("input",{id:"acknowledge-norefund",name:"acknowledge-norefund",type:"checkbox",required:!0})," ","I have no right to a refund, since the organisers have an obligation to pay for chalet reservation"]})}),u.jsx("li",{children:u.jsxs("label",{htmlFor:"acknowledge-cancellation",children:[u.jsx("input",{id:"acknowledge-cancellation",name:"acknowledge-cancellation",type:"checkbox",required:!0})," ","I might get a partial refund when the entire event is cancelled months before the planned date due to too little attendees"]})})]})]})]}),u.jsx("button",{className:"btn",type:"submit",children:"Ich bin dabei"})]})]})}function o2(){const[t]=M_(bn(On,"attendeesLimit"));return u.jsxs("article",{children:[u.jsx("h1",{children:"We’re full"}),u.jsx("p",{className:"introduction",children:"OH NO!"}),u.jsxs("p",{children:["We’re full for this year!"," ",t?u.jsxs(u.Fragment,{children:["Only ",t," people can fit in the chalet, so the registration is now closed."]}):u.jsx(u.Fragment,{children:"Registration is closed."})]}),u.jsx("p",{children:"If you think you really deserve a spot, or you want to be added to the waiting list, contact the right people."})]})}function l2(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Invite"}),u.jsx("p",{className:"introduction",children:"OH NO!"}),u.jsx("p",{children:"The MiraSki is an exclusive event, and you need a unique sign-up link."}),u.jsx("p",{children:"If you think you deserve one, contact the right people."})]})}function a2(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Payment"}),u.jsxs("p",{className:"introduction",children:["Pay ",u.jsx("em",{children:"€530,-"})," via this link"]}),u.jsx("p",{children:u.jsx("a",{href:"https://betaalverzoek.rabobank.nl/betaalverzoek/?id=q-D83_C7TfOr0CWGwbgtLw",target:"_blank",rel:"noreferrer",children:"https://betaalverzoek.rabobank.nl/betaalverzoek/?id=q-D83_C7TfOr0CWGwbgtLw"})}),u.jsx("p",{children:u.jsx("img",{src:"/img/pay-qr.png",alt:"QR Code for €530 payment request"})})]})}function u2(){const{errorid:t}=$m(),e={unknown:{title:"Unknown error",desc:"There was an unknown error."},"create-order":{title:"Could not create order",desc:"There was an error when trying to save your data, so could not result to payment."},db:{title:"Could not connect to database",desc:"There was an error when trying to connect to the database."}},{title:n,desc:r}=e[t]?e[t]:e.unknown;return u.jsxs("article",{children:[u.jsx("h2",{children:n}),u.jsx("p",{children:r}),u.jsxs("p",{children:["Please contact"," ",u.jsx("a",{href:"mailto:miraski2025@proton.me",children:"miraski2025@proton.me"})," if the error keeps showing up."]})]})}function c2(){return document.body.classList.remove("homepage"),u.jsxs("article",{children:[u.jsx("h1",{children:"404"}),u.jsx("h2",{children:"Noes!"}),u.jsxs("p",{children:["Where is the page?! It is not here.",u.jsx("br",{}),"Bran has hidden it from everybody!"]}),u.jsx("p",{children:"Except for you."}),u.jsx("p",{children:"Just kidding. Also from you."}),u.jsxs("p",{children:["You can not see it.",u.jsx("br",{}),"But everybody else can!"]}),u.jsx("p",{children:"Everybody can see the 404 error of the MiraSki website!"}),u.jsxs("p",{children:[u.jsx(oe,{to:"/",children:"Go home"}),"."]})]})}oa.createRoot(document.getElementById("root")).render(u.jsx(Af.StrictMode,{children:u.jsxs(_1,{children:[u.jsx(x1,{}),u.jsxs(c1,{children:[u.jsxs(Q,{path:"/",element:u.jsx(S1,{}),children:[u.jsx(Q,{index:!0,element:u.jsx(N1,{})}),u.jsx(Q,{path:"get-info",element:u.jsx(IC,{})}),u.jsx(Q,{path:"get-info/apres-ski",element:u.jsx(jC,{})}),u.jsx(Q,{path:"get-info/chalet",element:u.jsx(PC,{})}),u.jsx(Q,{path:"get-info/location",element:u.jsx(RC,{})}),u.jsx(Q,{path:"get-info/partytime",element:u.jsx(AC,{})}),u.jsx(Q,{path:"history/2019",element:u.jsx(OC,{})}),u.jsx(Q,{path:"history/2018",element:u.jsx(DC,{})}),u.jsx(Q,{path:"history/2017",element:u.jsx(zC,{})}),u.jsx(Q,{path:"history/2016",element:u.jsx(HC,{})}),u.jsx(Q,{path:"history/2015",element:u.jsx(YC,{})}),u.jsx(Q,{path:"history/2014",element:u.jsx(QC,{})}),u.jsx(Q,{path:"history/2013",element:u.jsx(XC,{})}),u.jsx(Q,{path:"history/2012",element:u.jsx(tk,{})}),u.jsx(Q,{path:"game",element:u.jsx($k,{})}),u.jsx(Q,{path:"game/leaderboard",element:u.jsx(Gk,{})}),u.jsx(Q,{path:"sign-up",element:u.jsx(l2,{})}),u.jsx(Q,{path:"sign-up/full",element:u.jsx(o2,{})}),u.jsx(Q,{path:"sign-up/:code",element:u.jsx(s2,{})}),u.jsx(Q,{path:"pay/:orderid",element:u.jsx(a2,{})}),u.jsx(Q,{path:"error/:errorid",element:u.jsx(u2,{})})]}),u.jsx(Q,{path:"/*",element:u.jsx(c2,{})})]})]})}));
