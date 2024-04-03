var L_=Object.defineProperty;var D_=(t,e,n)=>e in t?L_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var se=(t,e,n)=>(D_(t,typeof e!="symbol"?e+"":e,n),n);function F_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function B_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yf={exports:{}},Do={},wf={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=Symbol.for("react.element"),z_=Symbol.for("react.portal"),U_=Symbol.for("react.fragment"),W_=Symbol.for("react.strict_mode"),V_=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),Y_=Symbol.for("react.forward_ref"),G_=Symbol.for("react.suspense"),K_=Symbol.for("react.memo"),Q_=Symbol.for("react.lazy"),nd=Symbol.iterator;function q_(t){return t===null||typeof t!="object"?null:(t=nd&&t[nd]||t["@@iterator"],typeof t=="function"?t:null)}var Ef={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sf=Object.assign,Cf={};function Mr(t,e,n){this.props=t,this.context=e,this.refs=Cf,this.updater=n||Ef}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xf(){}xf.prototype=Mr.prototype;function yu(t,e,n){this.props=t,this.context=e,this.refs=Cf,this.updater=n||Ef}var wu=yu.prototype=new xf;wu.constructor=yu;Sf(wu,Mr.prototype);wu.isPureReactComponent=!0;var rd=Array.isArray,kf=Object.prototype.hasOwnProperty,Eu={current:null},Nf={key:!0,ref:!0,__self:!0,__source:!0};function Tf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kf.call(e,r)&&!Nf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ki,type:t,key:s,ref:o,props:i,_owner:Eu.current}}function J_(t,e){return{$$typeof:Ki,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Su(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ki}function X_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var id=/\/+/g;function _l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X_(""+t.key):e.toString(36)}function Rs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ki:case z_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_l(o,0):r,rd(i)?(n="",t!=null&&(n=t.replace(id,"$&/")+"/"),Rs(i,e,n,"",function(c){return c})):i!=null&&(Su(i)&&(i=J_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(id,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+_l(s,l);o+=Rs(s,e,n,a,i)}else if(a=q_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+_l(s,l++),o+=Rs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function us(t,e,n){if(t==null)return t;var r=[],i=0;return Rs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Z_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},As={transition:null},ev={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:As,ReactCurrentOwner:Eu};D.Children={map:us,forEach:function(t,e,n){us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return us(t,function(){e++}),e},toArray:function(t){return us(t,function(e){return e})||[]},only:function(t){if(!Su(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=Mr;D.Fragment=U_;D.Profiler=V_;D.PureComponent=yu;D.StrictMode=W_;D.Suspense=G_;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Eu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)kf.call(e,a)&&!Nf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ki,type:t.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(t){return t={$$typeof:$_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H_,_context:t},t.Consumer=t};D.createElement=Tf;D.createFactory=function(t){var e=Tf.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:Y_,render:t}};D.isValidElement=Su;D.lazy=function(t){return{$$typeof:Q_,_payload:{_status:-1,_result:t},_init:Z_}};D.memo=function(t,e){return{$$typeof:K_,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=As.transition;As.transition={};try{t()}finally{As.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return Ae.current.useCallback(t,e)};D.useContext=function(t){return Ae.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};D.useEffect=function(t,e){return Ae.current.useEffect(t,e)};D.useId=function(){return Ae.current.useId()};D.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return Ae.current.useMemo(t,e)};D.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};D.useRef=function(t){return Ae.current.useRef(t)};D.useState=function(t){return Ae.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return Ae.current.useTransition()};D.version="18.2.0";wf.exports=D;var x=wf.exports;const If=B_(x),tv=F_({__proto__:null,default:If},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=x,rv=Symbol.for("react.element"),iv=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,ov=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lv={key:!0,ref:!0,__self:!0,__source:!0};function jf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sv.call(e,r)&&!lv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rv,type:t,key:s,ref:o,props:i,_owner:ov.current}}Do.Fragment=iv;Do.jsx=jf;Do.jsxs=jf;yf.exports=Do;var u=yf.exports,na={},Pf={exports:{}},Ge={},Rf={exports:{}},Af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,A){var O=T.length;T.push(A);e:for(;0<O;){var ne=O-1>>>1,he=T[ne];if(0<i(he,A))T[ne]=A,T[O]=he,O=ne;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],O=T.pop();if(O!==A){T[0]=O;e:for(var ne=0,he=T.length,ls=he>>>1;ne<ls;){var mn=2*(ne+1)-1,gl=T[mn],gn=mn+1,as=T[gn];if(0>i(gl,O))gn<he&&0>i(as,gl)?(T[ne]=as,T[gn]=O,ne=gn):(T[ne]=gl,T[mn]=O,ne=mn);else if(gn<he&&0>i(as,O))T[ne]=as,T[gn]=O,ne=gn;else break e}}return A}function i(T,A){var O=T.sortIndex-A.sortIndex;return O!==0?O:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],h=1,d=null,f=3,_=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=T)r(c),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(c)}}function w(T){if(y=!1,g(T),!v)if(n(a)!==null)v=!0,pl(k);else{var A=n(c);A!==null&&ml(w,A.startTime-T)}}function k(T,A){v=!1,y&&(y=!1,m(P),P=-1),_=!0;var O=f;try{for(g(A),d=n(a);d!==null&&(!(d.expirationTime>A)||T&&!nt());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var he=ne(d.expirationTime<=A);A=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(a)&&r(a),g(A)}else r(a);d=n(a)}if(d!==null)var ls=!0;else{var mn=n(c);mn!==null&&ml(w,mn.startTime-A),ls=!1}return ls}finally{d=null,f=O,_=!1}}var I=!1,j=null,P=-1,te=5,F=-1;function nt(){return!(t.unstable_now()-F<te)}function Ur(){if(j!==null){var T=t.unstable_now();F=T;var A=!0;try{A=j(!0,T)}finally{A?Wr():(I=!1,j=null)}}else I=!1}var Wr;if(typeof p=="function")Wr=function(){p(Ur)};else if(typeof MessageChannel<"u"){var td=new MessageChannel,b_=td.port2;td.port1.onmessage=Ur,Wr=function(){b_.postMessage(null)}}else Wr=function(){S(Ur,0)};function pl(T){j=T,I||(I=!0,Wr())}function ml(T,A){P=S(function(){T(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,pl(k))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var O=f;f=A;try{return T()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=f;f=T;try{return A()}finally{f=O}},t.unstable_scheduleCallback=function(T,A,O){var ne=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?ne+O:ne):O=ne,T){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=O+he,T={id:h++,callback:A,priorityLevel:T,startTime:O,expirationTime:he,sortIndex:-1},O>ne?(T.sortIndex=O,e(c,T),n(a)===null&&T===n(c)&&(y?(m(P),P=-1):y=!0,ml(w,O-ne))):(T.sortIndex=he,e(a,T),v||_||(v=!0,pl(k))),T},t.unstable_shouldYield=nt,t.unstable_wrapCallback=function(T){var A=f;return function(){var O=f;f=A;try{return T.apply(this,arguments)}finally{f=O}}}})(Af);Rf.exports=Af;var av=Rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of=x,Ye=av;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mf=new Set,yi={};function Un(t,e){Cr(t,e),Cr(t+"Capture",e)}function Cr(t,e){for(yi[t]=e,t=0;t<e.length;t++)Mf.add(e[t])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sd={},od={};function cv(t){return ra.call(od,t)?!0:ra.call(sd,t)?!1:uv.test(t)?od[t]=!0:(sd[t]=!0,!1)}function dv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hv(t,e,n,r){if(e===null||typeof e>"u"||dv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cu=/[\-:]([a-z])/g;function xu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cu,xu);Ce[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cu,xu);Ce[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cu,xu);Ce[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function ku(t,e,n,r){var i=Ce.hasOwnProperty(e)?Ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hv(e,n,i,r)&&(n=null),r||i===null?cv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dt=Of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cs=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Nu=Symbol.for("react.strict_mode"),ia=Symbol.for("react.profiler"),bf=Symbol.for("react.provider"),Lf=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),Iu=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Df=Symbol.for("react.offscreen"),ld=Symbol.iterator;function Vr(t){return t===null||typeof t!="object"?null:(t=ld&&t[ld]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,vl;function ti(t){if(vl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vl=e&&e[1]||""}return`
`+vl+t}var yl=!1;function wl(t,e){if(!t||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ti(t):""}function fv(t){switch(t.tag){case 5:return ti(t.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return t=wl(t.type,!1),t;case 11:return t=wl(t.type.render,!1),t;case 1:return t=wl(t.type,!0),t;default:return""}}function la(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jn:return"Fragment";case qn:return"Portal";case ia:return"Profiler";case Nu:return"StrictMode";case sa:return"Suspense";case oa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lf:return(t.displayName||"Context")+".Consumer";case bf:return(t._context.displayName||"Context")+".Provider";case Tu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Iu:return e=t.displayName||null,e!==null?e:la(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return la(t(e))}catch{}}return null}function pv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(e);case 8:return e===Nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ff(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mv(t){var e=Ff(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ds(t){t._valueTracker||(t._valueTracker=mv(t))}function Bf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ff(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $s(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function aa(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ad(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zf(t,e){e=e.checked,e!=null&&ku(t,"checked",e,!1)}function ua(t,e){zf(t,e);var n=ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ca(t,e.type,n):e.hasOwnProperty("defaultValue")&&ca(t,e.type,ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ud(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ca(t,e,n){(e!=="number"||$s(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ni=Array.isArray;function cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function da(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ni(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ln(n)}}function Uf(t,e){var n=ln(e.value),r=ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ha(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hs,Vf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hs=hs||document.createElement("div"),hs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gv=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(t){gv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oi[e]=oi[t]})});function Hf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oi.hasOwnProperty(t)&&oi[t]?(""+e).trim():e+"px"}function $f(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _v=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(t,e){if(e){if(_v[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function pa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ga=null,dr=null,hr=null;function hd(t){if(t=Ji(t)){if(typeof ga!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Wo(e),ga(t.stateNode,t.type,e))}}function Yf(t){dr?hr?hr.push(t):hr=[t]:dr=t}function Gf(){if(dr){var t=dr,e=hr;if(hr=dr=null,hd(t),e)for(t=0;t<e.length;t++)hd(e[t])}}function Kf(t,e){return t(e)}function Qf(){}var El=!1;function qf(t,e,n){if(El)return t(e,n);El=!0;try{return Kf(t,e,n)}finally{El=!1,(dr!==null||hr!==null)&&(Qf(),Gf())}}function Ei(t,e){var n=t.stateNode;if(n===null)return null;var r=Wo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var _a=!1;if(Rt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){_a=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{_a=!1}function vv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var li=!1,Ys=null,Gs=!1,va=null,yv={onError:function(t){li=!0,Ys=t}};function wv(t,e,n,r,i,s,o,l,a){li=!1,Ys=null,vv.apply(yv,arguments)}function Ev(t,e,n,r,i,s,o,l,a){if(wv.apply(this,arguments),li){if(li){var c=Ys;li=!1,Ys=null}else throw Error(E(198));Gs||(Gs=!0,va=c)}}function Wn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fd(t){if(Wn(t)!==t)throw Error(E(188))}function Sv(t){var e=t.alternate;if(!e){if(e=Wn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fd(i),t;if(s===r)return fd(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Xf(t){return t=Sv(t),t!==null?Zf(t):null}function Zf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zf(t);if(e!==null)return e;t=t.sibling}return null}var ep=Ye.unstable_scheduleCallback,pd=Ye.unstable_cancelCallback,Cv=Ye.unstable_shouldYield,xv=Ye.unstable_requestPaint,ie=Ye.unstable_now,kv=Ye.unstable_getCurrentPriorityLevel,Pu=Ye.unstable_ImmediatePriority,tp=Ye.unstable_UserBlockingPriority,Ks=Ye.unstable_NormalPriority,Nv=Ye.unstable_LowPriority,np=Ye.unstable_IdlePriority,Fo=null,wt=null;function Tv(t){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Fo,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Pv,Iv=Math.log,jv=Math.LN2;function Pv(t){return t>>>=0,t===0?32:31-(Iv(t)/jv|0)|0}var fs=64,ps=4194304;function ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ri(l):(s&=o,s!==0&&(r=ri(s)))}else o=n&~i,o!==0?r=ri(o):s!==0&&(r=ri(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function Rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Av(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Rv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ya(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rp(){var t=fs;return fs<<=1,!(fs&4194240)&&(fs=64),t}function Sl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function Ov(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ru(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function ip(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sp,Au,op,lp,ap,wa=!1,ms=[],Qt=null,qt=null,Jt=null,Si=new Map,Ci=new Map,Ht=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(t,e){switch(t){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(e.pointerId)}}function $r(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ji(e),e!==null&&Au(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bv(t,e,n,r,i){switch(e){case"focusin":return Qt=$r(Qt,t,e,n,r,i),!0;case"dragenter":return qt=$r(qt,t,e,n,r,i),!0;case"mouseover":return Jt=$r(Jt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Si.set(s,$r(Si.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ci.set(s,$r(Ci.get(s)||null,t,e,n,r,i)),!0}return!1}function up(t){var e=Sn(t.target);if(e!==null){var n=Wn(e);if(n!==null){if(e=n.tag,e===13){if(e=Jf(n),e!==null){t.blockedOn=e,ap(t.priority,function(){op(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Os(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ea(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ma=r,n.target.dispatchEvent(r),ma=null}else return e=Ji(n),e!==null&&Au(e),t.blockedOn=n,!1;e.shift()}return!0}function gd(t,e,n){Os(t)&&n.delete(e)}function Lv(){wa=!1,Qt!==null&&Os(Qt)&&(Qt=null),qt!==null&&Os(qt)&&(qt=null),Jt!==null&&Os(Jt)&&(Jt=null),Si.forEach(gd),Ci.forEach(gd)}function Yr(t,e){t.blockedOn===e&&(t.blockedOn=null,wa||(wa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Lv)))}function xi(t){function e(i){return Yr(i,t)}if(0<ms.length){Yr(ms[0],t);for(var n=1;n<ms.length;n++){var r=ms[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qt!==null&&Yr(Qt,t),qt!==null&&Yr(qt,t),Jt!==null&&Yr(Jt,t),Si.forEach(e),Ci.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)up(n),n.blockedOn===null&&Ht.shift()}var fr=Dt.ReactCurrentBatchConfig,qs=!0;function Dv(t,e,n,r){var i=U,s=fr.transition;fr.transition=null;try{U=1,Ou(t,e,n,r)}finally{U=i,fr.transition=s}}function Fv(t,e,n,r){var i=U,s=fr.transition;fr.transition=null;try{U=4,Ou(t,e,n,r)}finally{U=i,fr.transition=s}}function Ou(t,e,n,r){if(qs){var i=Ea(t,e,n,r);if(i===null)Al(t,e,r,Js,n),md(t,r);else if(bv(i,t,e,n,r))r.stopPropagation();else if(md(t,r),e&4&&-1<Mv.indexOf(t)){for(;i!==null;){var s=Ji(i);if(s!==null&&sp(s),s=Ea(t,e,n,r),s===null&&Al(t,e,r,Js,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Al(t,e,r,null,n)}}var Js=null;function Ea(t,e,n,r){if(Js=null,t=ju(r),t=Sn(t),t!==null)if(e=Wn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Js=t,null}function cp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kv()){case Pu:return 1;case tp:return 4;case Ks:case Nv:return 16;case np:return 536870912;default:return 16}default:return 16}}var Yt=null,Mu=null,Ms=null;function dp(){if(Ms)return Ms;var t,e=Mu,n=e.length,r,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ms=i.slice(t,1<r?1-r:void 0)}function bs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gs(){return!0}function _d(){return!1}function Ke(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gs:_d,this.isPropagationStopped=_d,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),e}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=Ke(br),qi=X({},br,{view:0,detail:0}),Bv=Ke(qi),Cl,xl,Gr,Bo=X({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gr&&(Gr&&t.type==="mousemove"?(Cl=t.screenX-Gr.screenX,xl=t.screenY-Gr.screenY):xl=Cl=0,Gr=t),Cl)},movementY:function(t){return"movementY"in t?t.movementY:xl}}),vd=Ke(Bo),zv=X({},Bo,{dataTransfer:0}),Uv=Ke(zv),Wv=X({},qi,{relatedTarget:0}),kl=Ke(Wv),Vv=X({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=Ke(Vv),$v=X({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=Ke($v),Gv=X({},br,{data:0}),yd=Ke(Gv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qv[t])?!!e[t]:!1}function Lu(){return Jv}var Xv=X({},qi,{key:function(t){if(t.key){var e=Kv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(t){return t.type==="keypress"?bs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zv=Ke(Xv),ey=X({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Ke(ey),ty=X({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),ny=Ke(ty),ry=X({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=Ke(ry),sy=X({},Bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=Ke(sy),ly=[9,13,27,32],Du=Rt&&"CompositionEvent"in window,ai=null;Rt&&"documentMode"in document&&(ai=document.documentMode);var ay=Rt&&"TextEvent"in window&&!ai,hp=Rt&&(!Du||ai&&8<ai&&11>=ai),Ed=" ",Sd=!1;function fp(t,e){switch(t){case"keyup":return ly.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xn=!1;function uy(t,e){switch(t){case"compositionend":return pp(e);case"keypress":return e.which!==32?null:(Sd=!0,Ed);case"textInput":return t=e.data,t===Ed&&Sd?null:t;default:return null}}function cy(t,e){if(Xn)return t==="compositionend"||!Du&&fp(t,e)?(t=dp(),Ms=Mu=Yt=null,Xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hp&&e.locale!=="ko"?null:e.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dy[t.type]:e==="textarea"}function mp(t,e,n,r){Yf(r),e=Xs(e,"onChange"),0<e.length&&(n=new bu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ui=null,ki=null;function hy(t){Np(t,0)}function zo(t){var e=tr(t);if(Bf(e))return t}function fy(t,e){if(t==="change")return e}var gp=!1;if(Rt){var Nl;if(Rt){var Tl="oninput"in document;if(!Tl){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),Tl=typeof xd.oninput=="function"}Nl=Tl}else Nl=!1;gp=Nl&&(!document.documentMode||9<document.documentMode)}function kd(){ui&&(ui.detachEvent("onpropertychange",_p),ki=ui=null)}function _p(t){if(t.propertyName==="value"&&zo(ki)){var e=[];mp(e,ki,t,ju(t)),qf(hy,e)}}function py(t,e,n){t==="focusin"?(kd(),ui=e,ki=n,ui.attachEvent("onpropertychange",_p)):t==="focusout"&&kd()}function my(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zo(ki)}function gy(t,e){if(t==="click")return zo(e)}function _y(t,e){if(t==="input"||t==="change")return zo(e)}function vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:vy;function Ni(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ra.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function Nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,e){var n=Nd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nd(n)}}function vp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yp(){for(var t=window,e=$s();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$s(t.document)}return e}function Fu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yy(t){var e=yp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vp(n.ownerDocument.documentElement,n)){if(r!==null&&Fu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Td(n,s);var o=Td(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wy=Rt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Sa=null,ci=null,Ca=!1;function Id(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ca||Zn==null||Zn!==$s(r)||(r=Zn,"selectionStart"in r&&Fu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&Ni(ci,r)||(ci=r,r=Xs(Sa,"onSelect"),0<r.length&&(e=new bu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zn)))}function _s(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var er={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionend:_s("Transition","TransitionEnd")},Il={},wp={};Rt&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Uo(t){if(Il[t])return Il[t];if(!er[t])return t;var e=er[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wp)return Il[t]=e[n];return t}var Ep=Uo("animationend"),Sp=Uo("animationiteration"),Cp=Uo("animationstart"),xp=Uo("transitionend"),kp=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(t,e){kp.set(t,e),Un(e,[t])}for(var jl=0;jl<jd.length;jl++){var Pl=jd[jl],Ey=Pl.toLowerCase(),Sy=Pl[0].toUpperCase()+Pl.slice(1);dn(Ey,"on"+Sy)}dn(Ep,"onAnimationEnd");dn(Sp,"onAnimationIteration");dn(Cp,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(xp,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Pd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ev(r,e,void 0,t),t.currentTarget=null}function Np(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Pd(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Pd(i,l,c),s=a}}}if(Gs)throw t=va,Gs=!1,va=null,t}function Y(t,e){var n=e[Ia];n===void 0&&(n=e[Ia]=new Set);var r=t+"__bubble";n.has(r)||(Tp(e,t,2,!1),n.add(r))}function Rl(t,e,n){var r=0;e&&(r|=4),Tp(n,t,r,e)}var vs="_reactListening"+Math.random().toString(36).slice(2);function Ti(t){if(!t[vs]){t[vs]=!0,Mf.forEach(function(n){n!=="selectionchange"&&(Cy.has(n)||Rl(n,!1,t),Rl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vs]||(e[vs]=!0,Rl("selectionchange",!1,e))}}function Tp(t,e,n,r){switch(cp(e)){case 1:var i=Dv;break;case 4:i=Fv;break;default:i=Ou}n=i.bind(null,e,n,t),i=void 0,!_a||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Al(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Sn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}qf(function(){var c=s,h=ju(n),d=[];e:{var f=kp.get(t);if(f!==void 0){var _=bu,v=t;switch(t){case"keypress":if(bs(n)===0)break e;case"keydown":case"keyup":_=Zv;break;case"focusin":v="focus",_=kl;break;case"focusout":v="blur",_=kl;break;case"beforeblur":case"afterblur":_=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=ny;break;case Ep:case Sp:case Cp:_=Hv;break;case xp:_=iy;break;case"scroll":_=Bv;break;case"wheel":_=oy;break;case"copy":case"cut":case"paste":_=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=wd}var y=(e&4)!==0,S=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ei(p,m),w!=null&&y.push(Ii(p,w,g)))),S)break;p=p.return}0<y.length&&(f=new _(f,v,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==ma&&(v=n.relatedTarget||n.fromElement)&&(Sn(v)||v[At]))break e;if((_||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?Sn(v):null,v!==null&&(S=Wn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(y=vd,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=wd,w="onPointerLeave",m="onPointerEnter",p="pointer"),S=_==null?f:tr(_),g=v==null?f:tr(v),f=new y(w,p+"leave",_,n,h),f.target=S,f.relatedTarget=g,w=null,Sn(h)===c&&(y=new y(m,p+"enter",v,n,h),y.target=g,y.relatedTarget=S,w=y),S=w,_&&v)t:{for(y=_,m=v,p=0,g=y;g;g=$n(g))p++;for(g=0,w=m;w;w=$n(w))g++;for(;0<p-g;)y=$n(y),p--;for(;0<g-p;)m=$n(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=$n(y),m=$n(m)}y=null}else y=null;_!==null&&Rd(d,f,_,y,!1),v!==null&&S!==null&&Rd(d,S,v,y,!0)}}e:{if(f=c?tr(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var k=fy;else if(Cd(f))if(gp)k=_y;else{k=my;var I=py}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=gy);if(k&&(k=k(t,c))){mp(d,k,n,h);break e}I&&I(t,f,c),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&ca(f,"number",f.value)}switch(I=c?tr(c):window,t){case"focusin":(Cd(I)||I.contentEditable==="true")&&(Zn=I,Sa=c,ci=null);break;case"focusout":ci=Sa=Zn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,Id(d,n,h);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":Id(d,n,h)}var j;if(Du)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xn?fp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(hp&&n.locale!=="ko"&&(Xn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xn&&(j=dp()):(Yt=h,Mu="value"in Yt?Yt.value:Yt.textContent,Xn=!0)),I=Xs(c,P),0<I.length&&(P=new yd(P,t,null,n,h),d.push({event:P,listeners:I}),j?P.data=j:(j=pp(n),j!==null&&(P.data=j)))),(j=ay?uy(t,n):cy(t,n))&&(c=Xs(c,"onBeforeInput"),0<c.length&&(h=new yd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=j))}Np(d,e)})}function Ii(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ei(t,n),s!=null&&r.unshift(Ii(t,s,i)),s=Ei(t,e),s!=null&&r.push(Ii(t,s,i))),t=t.return}return r}function $n(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Ei(n,s),a!=null&&o.unshift(Ii(n,a,l))):i||(a=Ei(n,s),a!=null&&o.push(Ii(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xy=/\r\n?/g,ky=/\u0000|\uFFFD/g;function Ad(t){return(typeof t=="string"?t:""+t).replace(xy,`
`).replace(ky,"")}function ys(t,e,n){if(e=Ad(e),Ad(t)!==e&&n)throw Error(E(425))}function Zs(){}var xa=null,ka=null;function Na(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(t){return Od.resolve(null).then(t).catch(Iy)}:Ta;function Iy(t){setTimeout(function(){throw t})}function Ol(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xi(e)}function Xt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Md(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Lr,ji="__reactProps$"+Lr,At="__reactContainer$"+Lr,Ia="__reactEvents$"+Lr,jy="__reactListeners$"+Lr,Py="__reactHandles$"+Lr;function Sn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[At]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Md(t);t!==null;){if(n=t[_t])return n;t=Md(t)}return e}t=n,n=t.parentNode}return null}function Ji(t){return t=t[_t]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function tr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Wo(t){return t[ji]||null}var ja=[],nr=-1;function hn(t){return{current:t}}function K(t){0>nr||(t.current=ja[nr],ja[nr]=null,nr--)}function $(t,e){nr++,ja[nr]=t.current,t.current=e}var an={},Ie=hn(an),Fe=hn(!1),Rn=an;function xr(t,e){var n=t.type.contextTypes;if(!n)return an;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function eo(){K(Fe),K(Ie)}function bd(t,e,n){if(Ie.current!==an)throw Error(E(168));$(Ie,e),$(Fe,n)}function Ip(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,pv(t)||"Unknown",i));return X({},n,r)}function to(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||an,Rn=Ie.current,$(Ie,t),$(Fe,Fe.current),!0}function Ld(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Ip(t,e,Rn),r.__reactInternalMemoizedMergedChildContext=t,K(Fe),K(Ie),$(Ie,t)):K(Fe),$(Fe,n)}var xt=null,Vo=!1,Ml=!1;function jp(t){xt===null?xt=[t]:xt.push(t)}function Ry(t){Vo=!0,jp(t)}function fn(){if(!Ml&&xt!==null){Ml=!0;var t=0,e=U;try{var n=xt;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xt=null,Vo=!1}catch(i){throw xt!==null&&(xt=xt.slice(t+1)),ep(Pu,fn),i}finally{U=e,Ml=!1}}return null}var rr=[],ir=0,no=null,ro=0,Qe=[],qe=0,An=null,Nt=1,Tt="";function _n(t,e){rr[ir++]=ro,rr[ir++]=no,no=t,ro=e}function Pp(t,e,n){Qe[qe++]=Nt,Qe[qe++]=Tt,Qe[qe++]=An,An=t;var r=Nt;t=Tt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nt=1<<32-dt(e)+i|n<<i|r,Tt=s+t}else Nt=1<<s|n<<i|r,Tt=t}function Bu(t){t.return!==null&&(_n(t,1),Pp(t,1,0))}function zu(t){for(;t===no;)no=rr[--ir],rr[ir]=null,ro=rr[--ir],rr[ir]=null;for(;t===An;)An=Qe[--qe],Qe[qe]=null,Tt=Qe[--qe],Qe[qe]=null,Nt=Qe[--qe],Qe[qe]=null}var $e=null,He=null,Q=!1,ot=null;function Rp(t,e){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,He=Xt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=An!==null?{id:Nt,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,He=null,!0):!1;default:return!1}}function Pa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ra(t){if(Q){var e=He;if(e){var n=e;if(!Dd(t,e)){if(Pa(t))throw Error(E(418));e=Xt(n.nextSibling);var r=$e;e&&Dd(t,e)?Rp(r,n):(t.flags=t.flags&-4097|2,Q=!1,$e=t)}}else{if(Pa(t))throw Error(E(418));t.flags=t.flags&-4097|2,Q=!1,$e=t}}}function Fd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function ws(t){if(t!==$e)return!1;if(!Q)return Fd(t),Q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Na(t.type,t.memoizedProps)),e&&(e=He)){if(Pa(t))throw Ap(),Error(E(418));for(;e;)Rp(t,e),e=Xt(e.nextSibling)}if(Fd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){He=Xt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}He=null}}else He=$e?Xt(t.stateNode.nextSibling):null;return!0}function Ap(){for(var t=He;t;)t=Xt(t.nextSibling)}function kr(){He=$e=null,Q=!1}function Uu(t){ot===null?ot=[t]:ot.push(t)}var Ay=Dt.ReactCurrentBatchConfig;function it(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var io=hn(null),so=null,sr=null,Wu=null;function Vu(){Wu=sr=so=null}function Hu(t){var e=io.current;K(io),t._currentValue=e}function Aa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pr(t,e){so=t,Wu=sr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(be=!0),t.firstContext=null)}function et(t){var e=t._currentValue;if(Wu!==t)if(t={context:t,memoizedValue:e,next:null},sr===null){if(so===null)throw Error(E(308));sr=t,so.dependencies={lanes:0,firstContext:t}}else sr=sr.next=t;return e}var Cn=null;function $u(t){Cn===null?Cn=[t]:Cn.push(t)}function Op(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$u(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ot(t,r)}function Ot(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ot(t,n)}return i=r.interleaved,i===null?(e.next=e,$u(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ot(t,n)}function Ls(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ru(t,n)}}function Bd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oo(t,e,n,r){var i=t.updateQueue;Vt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,h=c=a=null,l=s;do{var f=l.lane,_=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(_,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(_,d,f):v,f==null)break e;d=X({},d,f);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=_,a=d):h=h.next=_,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mn|=o,t.lanes=o,t.memoizedState=d}}function zd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var bp=new Of.Component().refs;function Oa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ho={isMounted:function(t){return(t=t._reactInternals)?Wn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=tn(t),s=jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(ht(e,t,i,r),Ls(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=tn(t),s=jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(ht(e,t,i,r),Ls(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=tn(t),i=jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zt(t,i,r),e!==null&&(ht(e,t,r,n),Ls(e,t,r))}};function Ud(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,s):!0}function Lp(t,e,n){var r=!1,i=an,s=e.contextType;return typeof s=="object"&&s!==null?s=et(s):(i=Be(e)?Rn:Ie.current,r=e.contextTypes,s=(r=r!=null)?xr(t,i):an),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ho,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ho.enqueueReplaceState(e,e.state,null)}function Ma(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=bp,Yu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=et(s):(s=Be(e)?Rn:Ie.current,i.context=xr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ho.enqueueReplaceState(i,i.state,null),oo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Kr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===bp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Es(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vd(t){var e=t._init;return e(t._payload)}function Dp(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=nn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=Ul(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,w){var k=g.type;return k===Jn?h(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Wt&&Vd(k)===p.type)?(w=i(p,g.props),w.ref=Kr(m,p,g),w.return=m,w):(w=Ws(g.type,g.key,g.props,null,m.mode,w),w.ref=Kr(m,p,g),w.return=m,w)}function c(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Wl(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function h(m,p,g,w,k){return p===null||p.tag!==7?(p=In(g,m.mode,w,k),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ul(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case cs:return g=Ws(p.type,p.key,p.props,null,m.mode,g),g.ref=Kr(m,null,p),g.return=m,g;case qn:return p=Wl(p,m.mode,g),p.return=m,p;case Wt:var w=p._init;return d(m,w(p._payload),g)}if(ni(p)||Vr(p))return p=In(p,m.mode,g,null),p.return=m,p;Es(m,p)}return null}function f(m,p,g,w){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case cs:return g.key===k?a(m,p,g,w):null;case qn:return g.key===k?c(m,p,g,w):null;case Wt:return k=g._init,f(m,p,k(g._payload),w)}if(ni(g)||Vr(g))return k!==null?null:h(m,p,g,w,null);Es(m,g)}return null}function _(m,p,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case cs:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,k);case qn:return m=m.get(w.key===null?g:w.key)||null,c(p,m,w,k);case Wt:var I=w._init;return _(m,p,g,I(w._payload),k)}if(ni(w)||Vr(w))return m=m.get(g)||null,h(p,m,w,k,null);Es(p,w)}return null}function v(m,p,g,w){for(var k=null,I=null,j=p,P=p=0,te=null;j!==null&&P<g.length;P++){j.index>P?(te=j,j=null):te=j.sibling;var F=f(m,j,g[P],w);if(F===null){j===null&&(j=te);break}t&&j&&F.alternate===null&&e(m,j),p=s(F,p,P),I===null?k=F:I.sibling=F,I=F,j=te}if(P===g.length)return n(m,j),Q&&_n(m,P),k;if(j===null){for(;P<g.length;P++)j=d(m,g[P],w),j!==null&&(p=s(j,p,P),I===null?k=j:I.sibling=j,I=j);return Q&&_n(m,P),k}for(j=r(m,j);P<g.length;P++)te=_(j,m,P,g[P],w),te!==null&&(t&&te.alternate!==null&&j.delete(te.key===null?P:te.key),p=s(te,p,P),I===null?k=te:I.sibling=te,I=te);return t&&j.forEach(function(nt){return e(m,nt)}),Q&&_n(m,P),k}function y(m,p,g,w){var k=Vr(g);if(typeof k!="function")throw Error(E(150));if(g=k.call(g),g==null)throw Error(E(151));for(var I=k=null,j=p,P=p=0,te=null,F=g.next();j!==null&&!F.done;P++,F=g.next()){j.index>P?(te=j,j=null):te=j.sibling;var nt=f(m,j,F.value,w);if(nt===null){j===null&&(j=te);break}t&&j&&nt.alternate===null&&e(m,j),p=s(nt,p,P),I===null?k=nt:I.sibling=nt,I=nt,j=te}if(F.done)return n(m,j),Q&&_n(m,P),k;if(j===null){for(;!F.done;P++,F=g.next())F=d(m,F.value,w),F!==null&&(p=s(F,p,P),I===null?k=F:I.sibling=F,I=F);return Q&&_n(m,P),k}for(j=r(m,j);!F.done;P++,F=g.next())F=_(j,m,P,F.value,w),F!==null&&(t&&F.alternate!==null&&j.delete(F.key===null?P:F.key),p=s(F,p,P),I===null?k=F:I.sibling=F,I=F);return t&&j.forEach(function(Ur){return e(m,Ur)}),Q&&_n(m,P),k}function S(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Jn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case cs:e:{for(var k=g.key,I=p;I!==null;){if(I.key===k){if(k=g.type,k===Jn){if(I.tag===7){n(m,I.sibling),p=i(I,g.props.children),p.return=m,m=p;break e}}else if(I.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Wt&&Vd(k)===I.type){n(m,I.sibling),p=i(I,g.props),p.ref=Kr(m,I,g),p.return=m,m=p;break e}n(m,I);break}else e(m,I);I=I.sibling}g.type===Jn?(p=In(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=Ws(g.type,g.key,g.props,null,m.mode,w),w.ref=Kr(m,p,g),w.return=m,m=w)}return o(m);case qn:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Wl(g,m.mode,w),p.return=m,m=p}return o(m);case Wt:return I=g._init,S(m,p,I(g._payload),w)}if(ni(g))return v(m,p,g,w);if(Vr(g))return y(m,p,g,w);Es(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Ul(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return S}var Nr=Dp(!0),Fp=Dp(!1),Xi={},Et=hn(Xi),Pi=hn(Xi),Ri=hn(Xi);function xn(t){if(t===Xi)throw Error(E(174));return t}function Gu(t,e){switch($(Ri,e),$(Pi,t),$(Et,Xi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ha(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ha(e,t)}K(Et),$(Et,e)}function Tr(){K(Et),K(Pi),K(Ri)}function Bp(t){xn(Ri.current);var e=xn(Et.current),n=ha(e,t.type);e!==n&&($(Pi,t),$(Et,n))}function Ku(t){Pi.current===t&&(K(Et),K(Pi))}var q=hn(0);function lo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bl=[];function Qu(){for(var t=0;t<bl.length;t++)bl[t]._workInProgressVersionPrimary=null;bl.length=0}var Ds=Dt.ReactCurrentDispatcher,Ll=Dt.ReactCurrentBatchConfig,On=0,J=null,ae=null,pe=null,ao=!1,di=!1,Ai=0,Oy=0;function xe(){throw Error(E(321))}function qu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Ju(t,e,n,r,i,s){if(On=s,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ds.current=t===null||t.memoizedState===null?Dy:Fy,t=n(r,i),di){s=0;do{if(di=!1,Ai=0,25<=s)throw Error(E(301));s+=1,pe=ae=null,e.updateQueue=null,Ds.current=By,t=n(r,i)}while(di)}if(Ds.current=uo,e=ae!==null&&ae.next!==null,On=0,pe=ae=J=null,ao=!1,e)throw Error(E(300));return t}function Xu(){var t=Ai!==0;return Ai=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?J.memoizedState=pe=t:pe=pe.next=t,pe}function tt(){if(ae===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=pe===null?J.memoizedState:pe.next;if(e!==null)pe=e,ae=t;else{if(t===null)throw Error(E(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},pe===null?J.memoizedState=pe=t:pe=pe.next=t}return pe}function Oi(t,e){return typeof e=="function"?e(t):e}function Dl(t){var e=tt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var h=c.lane;if((On&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,J.lanes|=h,Mn|=h}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,J.lanes|=s,Mn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fl(t){var e=tt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(be=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function zp(){}function Up(t,e){var n=J,r=tt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,be=!0),r=r.queue,Zu(Hp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Mi(9,Vp.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(E(349));On&30||Wp(n,e,i)}return i}function Wp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vp(t,e,n,r){e.value=n,e.getSnapshot=r,$p(e)&&Yp(t)}function Hp(t,e,n){return n(function(){$p(e)&&Yp(t)})}function $p(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function Yp(t){var e=Ot(t,1);e!==null&&ht(e,t,1,-1)}function Hd(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},e.queue=t,t=t.dispatch=Ly.bind(null,J,t),[e.memoizedState,t]}function Mi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gp(){return tt().memoizedState}function Fs(t,e,n,r){var i=gt();J.flags|=t,i.memoizedState=Mi(1|e,n,void 0,r===void 0?null:r)}function $o(t,e,n,r){var i=tt();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&qu(r,o.deps)){i.memoizedState=Mi(e,n,s,r);return}}J.flags|=t,i.memoizedState=Mi(1|e,n,s,r)}function $d(t,e){return Fs(8390656,8,t,e)}function Zu(t,e){return $o(2048,8,t,e)}function Kp(t,e){return $o(4,2,t,e)}function Qp(t,e){return $o(4,4,t,e)}function qp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jp(t,e,n){return n=n!=null?n.concat([t]):null,$o(4,4,qp.bind(null,e,t),n)}function ec(){}function Xp(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Zp(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function em(t,e,n){return On&21?(pt(n,e)||(n=rp(),J.lanes|=n,Mn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,be=!0),t.memoizedState=n)}function My(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=Ll.transition;Ll.transition={};try{t(!1),e()}finally{U=n,Ll.transition=r}}function tm(){return tt().memoizedState}function by(t,e,n){var r=tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nm(t))rm(e,n);else if(n=Op(t,e,n,r),n!==null){var i=Re();ht(n,t,r,i),im(n,e,r)}}function Ly(t,e,n){var r=tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nm(t))rm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,$u(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Op(t,e,i,r),n!==null&&(i=Re(),ht(n,t,r,i),im(n,e,r))}}function nm(t){var e=t.alternate;return t===J||e!==null&&e===J}function rm(t,e){di=ao=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function im(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ru(t,n)}}var uo={readContext:et,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Dy={readContext:et,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:et,useEffect:$d,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fs(4194308,4,qp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fs(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=by.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:Hd,useDebugValue:ec,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=Hd(!1),e=t[0];return t=My.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=J,i=gt();if(Q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),_e===null)throw Error(E(349));On&30||Wp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$d(Hp.bind(null,r,s,t),[t]),r.flags|=2048,Mi(9,Vp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=_e.identifierPrefix;if(Q){var n=Tt,r=Nt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ai++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Oy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fy={readContext:et,useCallback:Xp,useContext:et,useEffect:Zu,useImperativeHandle:Jp,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:Zp,useReducer:Dl,useRef:Gp,useState:function(){return Dl(Oi)},useDebugValue:ec,useDeferredValue:function(t){var e=tt();return em(e,ae.memoizedState,t)},useTransition:function(){var t=Dl(Oi)[0],e=tt().memoizedState;return[t,e]},useMutableSource:zp,useSyncExternalStore:Up,useId:tm,unstable_isNewReconciler:!1},By={readContext:et,useCallback:Xp,useContext:et,useEffect:Zu,useImperativeHandle:Jp,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:Zp,useReducer:Fl,useRef:Gp,useState:function(){return Fl(Oi)},useDebugValue:ec,useDeferredValue:function(t){var e=tt();return ae===null?e.memoizedState=t:em(e,ae.memoizedState,t)},useTransition:function(){var t=Fl(Oi)[0],e=tt().memoizedState;return[t,e]},useMutableSource:zp,useSyncExternalStore:Up,useId:tm,unstable_isNewReconciler:!1};function Ir(t,e){try{var n="",r=e;do n+=fv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ba(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function sm(t,e,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ho||(ho=!0,$a=r),ba(t,e)},n}function om(t,e,n){n=jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ba(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ba(t,e),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=e0.bind(null,t,e,n),e.then(t,t))}function Gd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jt(-1,1),e.tag=2,Zt(n,e,1))),n.lanes|=1),t)}var Uy=Dt.ReactCurrentOwner,be=!1;function je(t,e,n,r){e.child=t===null?Fp(e,null,n,r):Nr(e,t.child,n,r)}function Qd(t,e,n,r,i){n=n.render;var s=e.ref;return pr(e,i),r=Ju(t,e,n,r,s,i),n=Xu(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mt(t,e,i)):(Q&&n&&Bu(e),e.flags|=1,je(t,e,r,i),e.child)}function qd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ac(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lm(t,e,s,r,i)):(t=Ws(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(o,r)&&t.ref===e.ref)return Mt(t,e,i)}return e.flags|=1,t=nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function lm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ni(s,r)&&t.ref===e.ref)if(be=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(be=!0);else return e.lanes=t.lanes,Mt(t,e,i)}return La(t,e,n,r,i)}function am(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(lr,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(lr,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(lr,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(lr,Ve),Ve|=r;return je(t,e,i,n),e.child}function um(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function La(t,e,n,r,i){var s=Be(n)?Rn:Ie.current;return s=xr(e,s),pr(e,i),n=Ju(t,e,n,r,s,i),r=Xu(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mt(t,e,i)):(Q&&r&&Bu(e),e.flags|=1,je(t,e,n,i),e.child)}function Jd(t,e,n,r,i){if(Be(n)){var s=!0;to(e)}else s=!1;if(pr(e,i),e.stateNode===null)Bs(t,e),Lp(e,n,r),Ma(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=et(c):(c=Be(n)?Rn:Ie.current,c=xr(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Wd(e,o,r,c),Vt=!1;var f=e.memoizedState;o.state=f,oo(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Fe.current||Vt?(typeof h=="function"&&(Oa(e,n,h,r),a=e.memoizedState),(l=Vt||Ud(e,n,l,r,f,a,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mp(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:it(e.type,l),o.props=c,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=et(a):(a=Be(n)?Rn:Ie.current,a=xr(e,a));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Wd(e,o,r,a),Vt=!1,f=e.memoizedState,o.state=f,oo(e,r,o,i);var v=e.memoizedState;l!==d||f!==v||Fe.current||Vt?(typeof _=="function"&&(Oa(e,n,_,r),v=e.memoizedState),(c=Vt||Ud(e,n,c,r,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Da(t,e,n,r,s,i)}function Da(t,e,n,r,i,s){um(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ld(e,n,!1),Mt(t,e,s);r=e.stateNode,Uy.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Nr(e,t.child,null,s),e.child=Nr(e,null,l,s)):je(t,e,l,s),e.memoizedState=r.state,i&&Ld(e,n,!0),e.child}function cm(t){var e=t.stateNode;e.pendingContext?bd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bd(t,e.context,!1),Gu(t,e.containerInfo)}function Xd(t,e,n,r,i){return kr(),Uu(i),e.flags|=256,je(t,e,n,r),e.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ba(t){return{baseLanes:t,cachePool:null,transitions:null}}function dm(t,e,n){var r=e.pendingProps,i=q.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(q,i&1),t===null)return Ra(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ko(o,r,0,null),t=In(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ba(n),e.memoizedState=Fa,t):tc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Wy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=nn(l,s):(s=In(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ba(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fa,r}return s=t.child,t=s.sibling,r=nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tc(t,e){return e=Ko({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ss(t,e,n,r){return r!==null&&Uu(r),Nr(e,t.child,null,n),t=tc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bl(Error(E(422))),Ss(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ko({mode:"visible",children:r.children},i,0,null),s=In(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Nr(e,t.child,null,o),e.child.memoizedState=Ba(o),e.memoizedState=Fa,s);if(!(e.mode&1))return Ss(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Bl(s,r,void 0),Ss(t,e,o,r)}if(l=(o&t.childLanes)!==0,be||l){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(t,i),ht(r,t,i,-1))}return lc(),r=Bl(Error(E(421))),Ss(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=t0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,He=Xt(i.nextSibling),$e=e,Q=!0,ot=null,t!==null&&(Qe[qe++]=Nt,Qe[qe++]=Tt,Qe[qe++]=An,Nt=t.id,Tt=t.overflow,An=e),e=tc(e,r.children),e.flags|=4096,e)}function Zd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Aa(t.return,e,n)}function zl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zd(t,n,e);else if(t.tag===19)Zd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&lo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zl(e,!0,n,null,s);break;case"together":zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vy(t,e,n){switch(e.tag){case 3:cm(e),kr();break;case 5:Bp(e);break;case 1:Be(e.type)&&to(e);break;case 4:Gu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(io,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(q,q.current&1),e.flags|=128,null):n&e.child.childLanes?dm(t,e,n):($(q,q.current&1),t=Mt(t,e,n),t!==null?t.sibling:null);$(q,q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(q,q.current),r)break;return null;case 22:case 23:return e.lanes=0,am(t,e,n)}return Mt(t,e,n)}var fm,za,pm,mm;fm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};za=function(){};pm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xn(Et.current);var s=null;switch(n){case"input":i=aa(t,i),r=aa(t,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=da(t,i),r=da(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zs)}fa(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yi.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Y("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};mm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qr(t,e){if(!Q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Hy(t,e,n){var r=e.pendingProps;switch(zu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return Be(e.type)&&eo(),ke(e),null;case 3:return r=e.stateNode,Tr(),K(Fe),K(Ie),Qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ws(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ot!==null&&(Ka(ot),ot=null))),za(t,e),ke(e),null;case 5:Ku(e);var i=xn(Ri.current);if(n=e.type,t!==null&&e.stateNode!=null)pm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return ke(e),null}if(t=xn(Et.current),ws(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[ji]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)Y(ii[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":ad(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":cd(r,s),Y("invalid",r)}fa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ys(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ys(r.textContent,l,t),i=["children",""+l]):yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":ds(r),ud(r,s,!0);break;case"textarea":ds(r),dd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[ji]=r,fm(t,e,!1,!1),e.stateNode=t;e:{switch(o=pa(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)Y(ii[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":ad(t,r),i=aa(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),Y("invalid",t);break;case"textarea":cd(t,r),i=da(t,r),Y("invalid",t);break;default:i=r}fa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?$f(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Vf(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&wi(t,a):typeof a=="number"&&wi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Y("scroll",t):a!=null&&ku(t,s,a,o))}switch(n){case"input":ds(t),ud(t,r,!1);break;case"textarea":ds(t),dd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ln(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ke(e),null;case 6:if(t&&e.stateNode!=null)mm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=xn(Ri.current),xn(Et.current),ws(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:ys(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ys(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return ke(e),null;case 13:if(K(q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Q&&He!==null&&e.mode&1&&!(e.flags&128))Ap(),kr(),e.flags|=98560,s=!1;else if(s=ws(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[_t]=e}else kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),s=!1}else ot!==null&&(Ka(ot),ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||q.current&1?ce===0&&(ce=3):lc())),e.updateQueue!==null&&(e.flags|=4),ke(e),null);case 4:return Tr(),za(t,e),t===null&&Ti(e.stateNode.containerInfo),ke(e),null;case 10:return Hu(e.type._context),ke(e),null;case 17:return Be(e.type)&&eo(),ke(e),null;case 19:if(K(q),s=e.memoizedState,s===null)return ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qr(s,!1);else{if(ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lo(t),o!==null){for(e.flags|=128,Qr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(q,q.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>jr&&(e.flags|=128,r=!0,Qr(s,!1),e.lanes=4194304)}else{if(!r)if(t=lo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Q)return ke(e),null}else 2*ie()-s.renderingStartTime>jr&&n!==1073741824&&(e.flags|=128,r=!0,Qr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=q.current,$(q,r?n&1|2:n&1),e):(ke(e),null);case 22:case 23:return oc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function $y(t,e){switch(zu(e),e.tag){case 1:return Be(e.type)&&eo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Tr(),K(Fe),K(Ie),Qu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ku(e),null;case 13:if(K(q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(q),null;case 4:return Tr(),null;case 10:return Hu(e.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var Cs=!1,Ne=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,N=null;function or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(t,e,r)}else n.current=null}function Ua(t,e,n){try{n()}catch(r){Z(t,e,r)}}var eh=!1;function Gy(t,e){if(xa=qs,t=yp(),Fu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)f=d,d=_;for(;;){if(d===t)break t;if(f===n&&++c===i&&(l=o),f===s&&++h===r&&(a=o),(_=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ka={focusedElem:t,selectionRange:n},qs=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:it(e.type,y),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){Z(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return v=eh,eh=!1,v}function hi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ua(e,n,s)}i=i.next}while(i!==r)}}function Yo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gm(t){var e=t.alternate;e!==null&&(t.alternate=null,gm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[ji],delete e[Ia],delete e[jy],delete e[Py])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _m(t){return t.tag===5||t.tag===3||t.tag===4}function th(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Va(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zs));else if(r!==4&&(t=t.child,t!==null))for(Va(t,e,n),t=t.sibling;t!==null;)Va(t,e,n),t=t.sibling}function Ha(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ha(t,e,n),t=t.sibling;t!==null;)Ha(t,e,n),t=t.sibling}var ye=null,st=!1;function zt(t,e,n){for(n=n.child;n!==null;)vm(t,e,n),n=n.sibling}function vm(t,e,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 5:Ne||or(n,e);case 6:var r=ye,i=st;ye=null,zt(t,e,n),ye=r,st=i,ye!==null&&(st?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(st?(t=ye,n=n.stateNode,t.nodeType===8?Ol(t.parentNode,n):t.nodeType===1&&Ol(t,n),xi(t)):Ol(ye,n.stateNode));break;case 4:r=ye,i=st,ye=n.stateNode.containerInfo,st=!0,zt(t,e,n),ye=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ua(n,e,o),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!Ne&&(or(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,e,l)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,zt(t,e,n),Ne=r):zt(t,e,n);break;default:zt(t,e,n)}}function nh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yy),e.forEach(function(r){var i=n0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,st=!1;break e;case 3:ye=l.stateNode.containerInfo,st=!0;break e;case 4:ye=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(ye===null)throw Error(E(160));vm(s,o,i),ye=null,st=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){Z(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ym(e,t),e=e.sibling}function ym(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),mt(t),r&4){try{hi(3,t,t.return),Yo(3,t)}catch(y){Z(t,t.return,y)}try{hi(5,t,t.return)}catch(y){Z(t,t.return,y)}}break;case 1:rt(e,t),mt(t),r&512&&n!==null&&or(n,n.return);break;case 5:if(rt(e,t),mt(t),r&512&&n!==null&&or(n,n.return),t.flags&32){var i=t.stateNode;try{wi(i,"")}catch(y){Z(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&zf(i,s),pa(l,o);var c=pa(l,s);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?$f(i,d):h==="dangerouslySetInnerHTML"?Vf(i,d):h==="children"?wi(i,d):ku(i,h,d,c)}switch(l){case"input":ua(i,s);break;case"textarea":Uf(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?cr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?cr(i,!!s.multiple,s.defaultValue,!0):cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ji]=s}catch(y){Z(t,t.return,y)}}break;case 6:if(rt(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Z(t,t.return,y)}}break;case 3:if(rt(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(e.containerInfo)}catch(y){Z(t,t.return,y)}break;case 4:rt(e,t),mt(t);break;case 13:rt(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ic=ie())),r&4&&nh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(c=Ne)||h,rt(e,t),Ne=c):rt(e,t),mt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(N=t,h=t.child;h!==null;){for(d=N=h;N!==null;){switch(f=N,_=f.child,f.tag){case 0:case 11:case 14:case 15:hi(4,f,f.return);break;case 1:or(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Z(r,n,y)}}break;case 5:or(f,f.return);break;case 22:if(f.memoizedState!==null){ih(d);continue}}_!==null?(_.return=f,N=_):ih(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Hf("display",o))}catch(y){Z(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Z(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rt(e,t),mt(t),r&4&&nh(t);break;case 21:break;default:rt(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_m(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var s=th(t);Ha(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=th(t);Va(t,l,o);break;default:throw Error(E(161))}}catch(a){Z(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ky(t,e,n){N=t,wm(t)}function wm(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Cs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=Cs;var c=Ne;if(Cs=o,(Ne=a)&&!c)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?sh(i):a!==null?(a.return=o,N=a):sh(i);for(;s!==null;)N=s,wm(s),s=s.sibling;N=i,Cs=l,Ne=c}rh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):rh(t)}}function rh(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||Yo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&xi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ne||e.flags&512&&Wa(e)}catch(f){Z(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function ih(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function sh(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yo(4,e)}catch(a){Z(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){Z(e,i,a)}}var s=e.return;try{Wa(e)}catch(a){Z(e,s,a)}break;case 5:var o=e.return;try{Wa(e)}catch(a){Z(e,o,a)}}}catch(a){Z(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var Qy=Math.ceil,co=Dt.ReactCurrentDispatcher,nc=Dt.ReactCurrentOwner,Ze=Dt.ReactCurrentBatchConfig,B=0,_e=null,oe=null,Se=0,Ve=0,lr=hn(0),ce=0,bi=null,Mn=0,Go=0,rc=0,fi=null,Me=null,ic=0,jr=1/0,Ct=null,ho=!1,$a=null,en=null,xs=!1,Gt=null,fo=0,pi=0,Ya=null,zs=-1,Us=0;function Re(){return B&6?ie():zs!==-1?zs:zs=ie()}function tn(t){return t.mode&1?B&2&&Se!==0?Se&-Se:Ay.transition!==null?(Us===0&&(Us=rp()),Us):(t=U,t!==0||(t=window.event,t=t===void 0?16:cp(t.type)),t):1}function ht(t,e,n,r){if(50<pi)throw pi=0,Ya=null,Error(E(185));Qi(t,n,r),(!(B&2)||t!==_e)&&(t===_e&&(!(B&2)&&(Go|=n),ce===4&&$t(t,Se)),ze(t,r),n===1&&B===0&&!(e.mode&1)&&(jr=ie()+500,Vo&&fn()))}function ze(t,e){var n=t.callbackNode;Av(t,e);var r=Qs(t,t===_e?Se:0);if(r===0)n!==null&&pd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pd(n),e===1)t.tag===0?Ry(oh.bind(null,t)):jp(oh.bind(null,t)),Ty(function(){!(B&6)&&fn()}),n=null;else{switch(ip(r)){case 1:n=Pu;break;case 4:n=tp;break;case 16:n=Ks;break;case 536870912:n=np;break;default:n=Ks}n=Im(n,Em.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Em(t,e){if(zs=-1,Us=0,B&6)throw Error(E(327));var n=t.callbackNode;if(mr()&&t.callbackNode!==n)return null;var r=Qs(t,t===_e?Se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=po(t,r);else{e=r;var i=B;B|=2;var s=Cm();(_e!==t||Se!==e)&&(Ct=null,jr=ie()+500,Tn(t,e));do try{Xy();break}catch(l){Sm(t,l)}while(!0);Vu(),co.current=s,B=i,oe!==null?e=0:(_e=null,Se=0,e=ce)}if(e!==0){if(e===2&&(i=ya(t),i!==0&&(r=i,e=Ga(t,i))),e===1)throw n=bi,Tn(t,0),$t(t,r),ze(t,ie()),n;if(e===6)$t(t,r);else{if(i=t.current.alternate,!(r&30)&&!qy(i)&&(e=po(t,r),e===2&&(s=ya(t),s!==0&&(r=s,e=Ga(t,s))),e===1))throw n=bi,Tn(t,0),$t(t,r),ze(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:vn(t,Me,Ct);break;case 3:if($t(t,r),(r&130023424)===r&&(e=ic+500-ie(),10<e)){if(Qs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ta(vn.bind(null,t,Me,Ct),e);break}vn(t,Me,Ct);break;case 4:if($t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qy(r/1960))-r,10<r){t.timeoutHandle=Ta(vn.bind(null,t,Me,Ct),r);break}vn(t,Me,Ct);break;case 5:vn(t,Me,Ct);break;default:throw Error(E(329))}}}return ze(t,ie()),t.callbackNode===n?Em.bind(null,t):null}function Ga(t,e){var n=fi;return t.current.memoizedState.isDehydrated&&(Tn(t,e).flags|=256),t=po(t,e),t!==2&&(e=Me,Me=n,e!==null&&Ka(e)),t}function Ka(t){Me===null?Me=t:Me.push.apply(Me,t)}function qy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $t(t,e){for(e&=~rc,e&=~Go,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function oh(t){if(B&6)throw Error(E(327));mr();var e=Qs(t,0);if(!(e&1))return ze(t,ie()),null;var n=po(t,e);if(t.tag!==0&&n===2){var r=ya(t);r!==0&&(e=r,n=Ga(t,r))}if(n===1)throw n=bi,Tn(t,0),$t(t,e),ze(t,ie()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vn(t,Me,Ct),ze(t,ie()),null}function sc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(jr=ie()+500,Vo&&fn())}}function bn(t){Gt!==null&&Gt.tag===0&&!(B&6)&&mr();var e=B;B|=1;var n=Ze.transition,r=U;try{if(Ze.transition=null,U=1,t)return t()}finally{U=r,Ze.transition=n,B=e,!(B&6)&&fn()}}function oc(){Ve=lr.current,K(lr)}function Tn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ny(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:Tr(),K(Fe),K(Ie),Qu();break;case 5:Ku(r);break;case 4:Tr();break;case 13:K(q);break;case 19:K(q);break;case 10:Hu(r.type._context);break;case 22:case 23:oc()}n=n.return}if(_e=t,oe=t=nn(t.current,null),Se=Ve=e,ce=0,bi=null,rc=Go=Mn=0,Me=fi=null,Cn!==null){for(e=0;e<Cn.length;e++)if(n=Cn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cn=null}return t}function Sm(t,e){do{var n=oe;try{if(Vu(),Ds.current=uo,ao){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ao=!1}if(On=0,pe=ae=J=null,di=!1,Ai=0,nc.current=null,n===null||n.return===null){ce=1,bi=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Gd(o);if(_!==null){_.flags&=-257,Kd(_,o,l,s,e),_.mode&1&&Yd(s,c,e),e=_,a=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){Yd(s,c,e),lc();break e}a=Error(E(426))}}else if(Q&&l.mode&1){var S=Gd(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Kd(S,o,l,s,e),Uu(Ir(a,l));break e}}s=a=Ir(a,l),ce!==4&&(ce=2),fi===null?fi=[s]:fi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=sm(s,a,e);Bd(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(en===null||!en.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=om(s,l,e);Bd(s,w);break e}}s=s.return}while(s!==null)}km(n)}catch(k){e=k,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Cm(){var t=co.current;return co.current=uo,t===null?uo:t}function lc(){(ce===0||ce===3||ce===2)&&(ce=4),_e===null||!(Mn&268435455)&&!(Go&268435455)||$t(_e,Se)}function po(t,e){var n=B;B|=2;var r=Cm();(_e!==t||Se!==e)&&(Ct=null,Tn(t,e));do try{Jy();break}catch(i){Sm(t,i)}while(!0);if(Vu(),B=n,co.current=r,oe!==null)throw Error(E(261));return _e=null,Se=0,ce}function Jy(){for(;oe!==null;)xm(oe)}function Xy(){for(;oe!==null&&!Cv();)xm(oe)}function xm(t){var e=Tm(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?km(t):oe=e,nc.current=null}function km(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$y(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ce=6,oe=null;return}}else if(n=Hy(n,e,Ve),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ce===0&&(ce=5)}function vn(t,e,n){var r=U,i=Ze.transition;try{Ze.transition=null,U=1,Zy(t,e,n,r)}finally{Ze.transition=i,U=r}return null}function Zy(t,e,n,r){do mr();while(Gt!==null);if(B&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ov(t,s),t===_e&&(oe=_e=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xs||(xs=!0,Im(Ks,function(){return mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ze.transition,Ze.transition=null;var o=U;U=1;var l=B;B|=4,nc.current=null,Gy(t,n),ym(n,t),yy(ka),qs=!!xa,ka=xa=null,t.current=n,Ky(n),xv(),B=l,U=o,Ze.transition=s}else t.current=n;if(xs&&(xs=!1,Gt=t,fo=i),s=t.pendingLanes,s===0&&(en=null),Tv(n.stateNode),ze(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ho)throw ho=!1,t=$a,$a=null,t;return fo&1&&t.tag!==0&&mr(),s=t.pendingLanes,s&1?t===Ya?pi++:(pi=0,Ya=t):pi=0,fn(),null}function mr(){if(Gt!==null){var t=ip(fo),e=Ze.transition,n=U;try{if(Ze.transition=null,U=16>t?16:t,Gt===null)var r=!1;else{if(t=Gt,Gt=null,fo=0,B&6)throw Error(E(331));var i=B;for(B|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:hi(8,h,s)}var d=h.child;if(d!==null)d.return=h,N=d;else for(;N!==null;){h=N;var f=h.sibling,_=h.return;if(gm(h),h===c){N=null;break}if(f!==null){f.return=_,N=f;break}N=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:hi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var p=t.current;for(N=p;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=p;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yo(9,l)}}catch(k){Z(l,l.return,k)}if(l===o){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if(B=i,fn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Fo,t)}catch{}r=!0}return r}finally{U=n,Ze.transition=e}}return!1}function lh(t,e,n){e=Ir(n,e),e=sm(t,e,1),t=Zt(t,e,1),e=Re(),t!==null&&(Qi(t,1,e),ze(t,e))}function Z(t,e,n){if(t.tag===3)lh(t,t,n);else for(;e!==null;){if(e.tag===3){lh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){t=Ir(n,t),t=om(e,t,1),e=Zt(e,t,1),t=Re(),e!==null&&(Qi(e,1,t),ze(e,t));break}}e=e.return}}function e0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(Se&n)===n&&(ce===4||ce===3&&(Se&130023424)===Se&&500>ie()-ic?Tn(t,0):rc|=n),ze(t,e)}function Nm(t,e){e===0&&(t.mode&1?(e=ps,ps<<=1,!(ps&130023424)&&(ps=4194304)):e=1);var n=Re();t=Ot(t,e),t!==null&&(Qi(t,e,n),ze(t,n))}function t0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nm(t,n)}function n0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Nm(t,n)}var Tm;Tm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return be=!1,Vy(t,e,n);be=!!(t.flags&131072)}else be=!1,Q&&e.flags&1048576&&Pp(e,ro,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bs(t,e),t=e.pendingProps;var i=xr(e,Ie.current);pr(e,n),i=Ju(null,e,r,t,i,n);var s=Xu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(s=!0,to(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yu(e),i.updater=Ho,e.stateNode=i,i._reactInternals=e,Ma(e,r,t,n),e=Da(null,e,r,!0,s,n)):(e.tag=0,Q&&s&&Bu(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=i0(r),t=it(r,t),i){case 0:e=La(null,e,r,t,n);break e;case 1:e=Jd(null,e,r,t,n);break e;case 11:e=Qd(null,e,r,t,n);break e;case 14:e=qd(null,e,r,it(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),La(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Jd(t,e,r,i,n);case 3:e:{if(cm(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mp(t,e),oo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ir(Error(E(423)),e),e=Xd(t,e,r,n,i);break e}else if(r!==i){i=Ir(Error(E(424)),e),e=Xd(t,e,r,n,i);break e}else for(He=Xt(e.stateNode.containerInfo.firstChild),$e=e,Q=!0,ot=null,n=Fp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){e=Mt(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return Bp(e),t===null&&Ra(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Na(r,i)?o=null:s!==null&&Na(r,s)&&(e.flags|=32),um(t,e),je(t,e,o,n),e.child;case 6:return t===null&&Ra(e),null;case 13:return dm(t,e,n);case 4:return Gu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Nr(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Qd(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(io,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Fe.current){e=Mt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=jt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Aa(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Aa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pr(e,n),i=et(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=it(r,e.pendingProps),i=it(r.type,i),qd(t,e,r,i,n);case 15:return lm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Bs(t,e),e.tag=1,Be(r)?(t=!0,to(e)):t=!1,pr(e,n),Lp(e,r,i),Ma(e,r,i,n),Da(null,e,r,!0,t,n);case 19:return hm(t,e,n);case 22:return am(t,e,n)}throw Error(E(156,e.tag))};function Im(t,e){return ep(t,e)}function r0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(t,e,n,r){return new r0(t,e,n,r)}function ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i0(t){if(typeof t=="function")return ac(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tu)return 11;if(t===Iu)return 14}return 2}function nn(t,e){var n=t.alternate;return n===null?(n=Je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ws(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ac(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jn:return In(n.children,i,s,e);case Nu:o=8,i|=8;break;case ia:return t=Je(12,n,e,i|2),t.elementType=ia,t.lanes=s,t;case sa:return t=Je(13,n,e,i),t.elementType=sa,t.lanes=s,t;case oa:return t=Je(19,n,e,i),t.elementType=oa,t.lanes=s,t;case Df:return Ko(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bf:o=10;break e;case Lf:o=9;break e;case Tu:o=11;break e;case Iu:o=14;break e;case Wt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function In(t,e,n,r){return t=Je(7,t,r,e),t.lanes=n,t}function Ko(t,e,n,r){return t=Je(22,t,r,e),t.elementType=Df,t.lanes=n,t.stateNode={isHidden:!1},t}function Ul(t,e,n){return t=Je(6,t,null,e),t.lanes=n,t}function Wl(t,e,n){return e=Je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function s0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uc(t,e,n,r,i,s,o,l,a){return t=new s0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Je(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(s),t}function o0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jm(t){if(!t)return an;t=t._reactInternals;e:{if(Wn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Be(n))return Ip(t,n,e)}return e}function Pm(t,e,n,r,i,s,o,l,a){return t=uc(n,r,!0,t,i,s,o,l,a),t.context=jm(null),n=t.current,r=Re(),i=tn(n),s=jt(r,i),s.callback=e??null,Zt(n,s,i),t.current.lanes=i,Qi(t,i,r),ze(t,r),t}function Qo(t,e,n,r){var i=e.current,s=Re(),o=tn(i);return n=jm(n),e.context===null?e.context=n:e.pendingContext=n,e=jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zt(i,e,o),t!==null&&(ht(t,i,o,s),Ls(t,i,o)),o}function mo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cc(t,e){ah(t,e),(t=t.alternate)&&ah(t,e)}function l0(){return null}var Rm=typeof reportError=="function"?reportError:function(t){console.error(t)};function dc(t){this._internalRoot=t}qo.prototype.render=dc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Qo(t,e,null,null)};qo.prototype.unmount=dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bn(function(){Qo(null,t,null,null)}),e[At]=null}};function qo(t){this._internalRoot=t}qo.prototype.unstable_scheduleHydration=function(t){if(t){var e=lp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&up(t)}};function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uh(){}function a0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=mo(o);s.call(c)}}var o=Pm(e,r,t,0,null,!1,!1,"",uh);return t._reactRootContainer=o,t[At]=o.current,Ti(t.nodeType===8?t.parentNode:t),bn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=mo(a);l.call(c)}}var a=uc(t,0,!1,null,null,!1,!1,"",uh);return t._reactRootContainer=a,t[At]=a.current,Ti(t.nodeType===8?t.parentNode:t),bn(function(){Qo(e,a,n,r)}),a}function Xo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=mo(o);l.call(a)}}Qo(e,o,t,i)}else o=a0(n,e,t,i,r);return mo(o)}sp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ri(e.pendingLanes);n!==0&&(Ru(e,n|1),ze(e,ie()),!(B&6)&&(jr=ie()+500,fn()))}break;case 13:bn(function(){var r=Ot(t,1);if(r!==null){var i=Re();ht(r,t,1,i)}}),cc(t,1)}};Au=function(t){if(t.tag===13){var e=Ot(t,134217728);if(e!==null){var n=Re();ht(e,t,134217728,n)}cc(t,134217728)}};op=function(t){if(t.tag===13){var e=tn(t),n=Ot(t,e);if(n!==null){var r=Re();ht(n,t,e,r)}cc(t,e)}};lp=function(){return U};ap=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};ga=function(t,e,n){switch(e){case"input":if(ua(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wo(r);if(!i)throw Error(E(90));Bf(r),ua(r,i)}}}break;case"textarea":Uf(t,n);break;case"select":e=n.value,e!=null&&cr(t,!!n.multiple,e,!1)}};Kf=sc;Qf=bn;var u0={usingClientEntryPoint:!1,Events:[Ji,tr,Wo,Yf,Gf,sc]},qr={findFiberByHostInstance:Sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},c0={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xf(t),t===null?null:t.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||l0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{Fo=ks.inject(c0),wt=ks}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(e))throw Error(E(200));return o0(t,e,null,n)};Ge.createRoot=function(t,e){if(!hc(t))throw Error(E(299));var n=!1,r="",i=Rm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=uc(t,1,!1,null,null,n,!1,r,i),t[At]=e.current,Ti(t.nodeType===8?t.parentNode:t),new dc(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Xf(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return bn(t)};Ge.hydrate=function(t,e,n){if(!Jo(e))throw Error(E(200));return Xo(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!hc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Rm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pm(e,null,t,1,n??null,i,!1,s,o),t[At]=e.current,Ti(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qo(e)};Ge.render=function(t,e,n){if(!Jo(e))throw Error(E(200));return Xo(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(E(40));return t._reactRootContainer?(bn(function(){Xo(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};Ge.unstable_batchedUpdates=sc;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jo(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Xo(t,e,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function Am(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Am)}catch(t){console.error(t)}}Am(),Pf.exports=Ge;var d0=Pf.exports,ch=d0;na.createRoot=ch.createRoot,na.hydrateRoot=ch.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Li(){return Li=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Li.apply(this,arguments)}var Kt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kt||(Kt={}));const dh="popstate";function h0(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=Vn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Qa("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,c=a.indexOf("#");l=c===-1?a:a.slice(0,c)}return l+"#"+(typeof s=="string"?s:Om(s))}function r(i,s){fc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return p0(e,n,r,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function f0(){return Math.random().toString(36).substr(2,8)}function hh(t,e){return{usr:t.state,key:t.key,idx:e}}function Qa(t,e,n,r){return n===void 0&&(n=null),Li({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vn(e):e,{state:n,key:e&&e.key||r||f0()})}function Om(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function p0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Kt.Pop,a=null,c=h();c==null&&(c=0,o.replaceState(Li({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){l=Kt.Pop;let S=h(),m=S==null?null:S-c;c=S,a&&a({action:l,location:y.location,delta:m})}function f(S,m){l=Kt.Push;let p=Qa(y.location,S,m);n&&n(p,S),c=h()+1;let g=hh(p,c),w=y.createHref(p);try{o.pushState(g,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function _(S,m){l=Kt.Replace;let p=Qa(y.location,S,m);n&&n(p,S),c=h();let g=hh(p,c),w=y.createHref(p);o.replaceState(g,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function v(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Om(S);return p=p.replace(/ $/,"%20"),de(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(dh,d),a=S,()=>{i.removeEventListener(dh,d),a=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let m=v(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:_,go(S){return o.go(S)}};return y}var fh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fh||(fh={}));function m0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Vn(e):e,i=Lm(r.pathname||"/",n);if(i==null)return null;let s=Mm(t);g0(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let a=I0(i);o=k0(s[l],a)}return o}function Mm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(de(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=jn([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Mm(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:C0(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of bm(s.path))i(s,o,a)}),e}function bm(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bm(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function g0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:x0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _0=/^:[\w-]+$/,v0=3,y0=2,w0=1,E0=10,S0=-2,ph=t=>t==="*";function C0(t,e){let n=t.split("/"),r=n.length;return n.some(ph)&&(r+=S0),e&&(r+=y0),n.filter(i=>!ph(i)).reduce((i,s)=>i+(_0.test(s)?v0:s===""?w0:E0),r)}function x0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function k0(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=N0({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},c);if(!h)return null;Object.assign(r,h.params);let d=l.route;s.push({params:r,pathname:jn([i,h.pathname]),pathnameBase:M0(jn([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=jn([i,h.pathnameBase]))}return s}function N0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=T0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:f,isOptional:_}=h;if(f==="*"){let y=l[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[d];return _&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function T0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function I0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Lm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function j0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vn(t):t;return{pathname:n?n.startsWith("/")?n:P0(n,e):e,search:b0(r),hash:L0(i)}}function P0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function R0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function A0(t,e){let n=R0(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function O0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vn(t):(i=Li({},t),de(!i.pathname||!i.pathname.includes("?"),Vl("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Vl("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Vl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=j0(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||h)&&(a.pathname+="/"),a}const jn=t=>t.join("/").replace(/\/\/+/g,"/"),M0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),b0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,L0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function D0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Dm=["post","put","patch","delete"];new Set(Dm);const F0=["get",...Dm];new Set(F0);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Di.apply(this,arguments)}const pc=x.createContext(null),B0=x.createContext(null),Zo=x.createContext(null),el=x.createContext(null),pn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Fm=x.createContext(null);function tl(){return x.useContext(el)!=null}function mc(){return tl()||de(!1),x.useContext(el).location}function Bm(t){x.useContext(Zo).static||x.useLayoutEffect(t)}function z0(){let{isDataRoute:t}=x.useContext(pn);return t?t1():U0()}function U0(){tl()||de(!1);let t=x.useContext(pc),{basename:e,future:n,navigator:r}=x.useContext(Zo),{matches:i}=x.useContext(pn),{pathname:s}=mc(),o=JSON.stringify(A0(i,n.v7_relativeSplatPath)),l=x.useRef(!1);return Bm(()=>{l.current=!0}),x.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let d=O0(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:jn([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}const W0=x.createContext(null);function V0(t){let e=x.useContext(pn).outlet;return e&&x.createElement(W0.Provider,{value:t},e)}function zm(){let{matches:t}=x.useContext(pn),e=t[t.length-1];return e?e.params:{}}function H0(t,e){return $0(t,e)}function $0(t,e,n,r){tl()||de(!1);let{navigator:i}=x.useContext(Zo),{matches:s}=x.useContext(pn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=mc(),h;if(e){var d;let S=typeof e=="string"?Vn(e):e;a==="/"||(d=S.pathname)!=null&&d.startsWith(a)||de(!1),h=S}else h=c;let f=h.pathname||"/",_=f;if(a!=="/"){let S=a.replace(/^\//,"").split("/");_="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=m0(t,{pathname:_}),y=q0(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:jn([a,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:jn([a,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&y?x.createElement(el.Provider,{value:{location:Di({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Kt.Pop}},y):y}function Y0(){let t=e1(),e=D0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,null)}const G0=x.createElement(Y0,null);class K0 extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(pn.Provider,{value:this.props.routeContext},x.createElement(Fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q0(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(pc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(pn.Provider,{value:e},r)}function q0(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id]));h>=0||de(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:f,errors:_}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!_||_[d.route.id]===void 0);if(d.route.lazy||v){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,d,f)=>{let _,v=!1,y=null,S=null;n&&(_=l&&d.route.id?l[d.route.id]:void 0,y=d.route.errorElement||G0,a&&(c<0&&f===0?(n1("route-fallback",!1),v=!0,S=null):c===f&&(v=!0,S=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let g;return _?g=y:v?g=S:d.route.Component?g=x.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=h,x.createElement(Q0,{match:d,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?x.createElement(K0,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Um=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Um||{}),go=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(go||{});function J0(t){let e=x.useContext(pc);return e||de(!1),e}function X0(t){let e=x.useContext(B0);return e||de(!1),e}function Z0(t){let e=x.useContext(pn);return e||de(!1),e}function Wm(t){let e=Z0(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function e1(){var t;let e=x.useContext(Fm),n=X0(go.UseRouteError),r=Wm(go.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function t1(){let{router:t}=J0(Um.UseNavigateStable),e=Wm(go.UseNavigateStable),n=x.useRef(!1);return Bm(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Di({fromRouteId:e},s)))},[t,e])}const mh={};function n1(t,e,n){!e&&!mh[t]&&(mh[t]=!0)}function r1(t){return V0(t.context)}function le(t){de(!1)}function i1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kt.Pop,navigator:s,static:o=!1,future:l}=t;tl()&&de(!1);let a=e.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:a,navigator:s,static:o,future:Di({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Vn(r));let{pathname:h="/",search:d="",hash:f="",state:_=null,key:v="default"}=r,y=x.useMemo(()=>{let S=Lm(h,a);return S==null?null:{location:{pathname:S,search:d,hash:f,state:_,key:v},navigationType:i}},[a,h,d,f,_,v,i]);return y==null?null:x.createElement(Zo.Provider,{value:c},x.createElement(el.Provider,{children:n,value:y}))}function s1(t){let{children:e,location:n}=t;return H0(qa(e),n)}new Promise(()=>{});function qa(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,qa(r.props.children,s));return}r.type!==le&&de(!1),!r.props.index||!r.props.children||de(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=qa(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const o1="6";try{window.__reactRouterVersion=o1}catch{}const l1="startTransition",gh=tv[l1];function a1(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=h0({window:i,v5Compat:!0}));let o=s.current,[l,a]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=x.useCallback(d=>{c&&gh?gh(()=>a(d)):a(d)},[a,c]);return x.useLayoutEffect(()=>o.listen(h),[o,h]),x.createElement(i1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var _h;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_h||(_h={}));var vh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vh||(vh={}));function u1(){const[t,e]=x.useState(!1),n=()=>{e(!t),t?document.documentElement.classList.remove("nav-open"):document.documentElement.classList.add("nav-open")},r=`nav ${t?"nav-open":""}`;return u.jsx("nav",{className:r,children:u.jsxs("div",{children:[u.jsx("button",{onClick:n,className:"nav__toggle","aria-expanded":t,"aria-controls":"menu",children:u.jsx("span",{children:"Toggle menu"})}),u.jsxs("ul",{id:"menu",children:[u.jsx("li",{children:u.jsxs("a",{href:"/#/",onClick:n,children:[u.jsx("strong",{children:"Home"}),u.jsx("span",{children:"is where the Jäger is"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"/#/get-info",onClick:n,children:[u.jsx("strong",{children:"Get info"}),u.jsx("span",{children:"about the event"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"/#/history/2017",onClick:n,children:[u.jsx("strong",{children:"History"}),u.jsx("span",{children:"of this ski event"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"/#/game",onClick:n,children:[u.jsx("strong",{children:"Play"}),u.jsx("span",{children:"the game"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"/#/sign-up",onClick:n,children:[u.jsx("strong",{children:"Sign up"}),u.jsx("span",{children:"for the next MiraSki"})]})})]})]})})}function c1(){const t=mc().pathname==="/";return x.useEffect(()=>{t?document.body.classList.add("homepage"):document.body.classList.remove("homepage")},[t]),u.jsxs(u.Fragment,{children:[t?null:u.jsx(u1,{}),u.jsx(r1,{})]})}function d1(){return u.jsx("figure",{className:"splash-screen",children:u.jsx("div",{children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"759",height:"311",viewBox:"0 0 759 311",children:u.jsxs("g",{fill:"none",fillRule:"evenodd",children:[u.jsx("path",{d:"M.096.048h758.16v310.81H.095z"}),u.jsx("path",{fill:"#55C271",d:"M129.867 99.573l180.704-28.62c17.193-2.724 34.718 2.22 47.954 13.523 3.54 3.024 6.677 6.422 9.375 10.112L379.38 60.24 451.67 48.83l10.228 28.175c8.477-19.55 26.48-34.21 48.663-37.724C597.32 25.536 758.253.047 758.253.047v190.727L.096 310.855V120.126l82.552-13.075 23.63 49.667 23.59-57.147z"}),u.jsx("path",{fill:"#FFF",d:"M28.482 282.257c-.46.073-.93-.06-1.283-.36-.355-.303-.558-.746-.558-1.21V144.294c0-.984.718-1.824 1.69-1.978 6.668-1.056 31.122-4.923 38.223-6.047 1.155-.182 2.292.416 2.794 1.473l37.607 79.05c.106.223.335.364.582.36.25-.01.468-.163.564-.392 4.28-10.435 32.8-79.967 37.535-91.518.412-1.01 1.323-1.727 2.4-1.9l38.15-6.05c.418-.066.842.053 1.162.326.322.274.507.674.507 1.098V255.3c0 .986-.72 1.827-1.692 1.98-6.09.968-26.887 4.268-33.272 5.28-.47.075-.95-.06-1.312-.37-.362-.307-.57-.76-.57-1.236-.002-10.06-.023-56.995-.028-67.577 0-.203-.143-.377-.344-.42-.198-.038-.398.07-.476.256-4.62 11.064-27.35 65.527-30.774 73.73-.268.644-.85 1.1-1.54 1.21-3.628.563-15.18 2.367-19.823 3.093-1.164.182-2.312-.417-2.83-1.476-4.587-9.365-25.895-52.894-30.633-62.574-.102-.205-.33-.315-.552-.263-.22.053-.38.25-.377.48l.21 67.522c.003.99-.715 1.832-1.69 1.986l-33.676 5.337zm171.357-27.09c-.485.08-.982-.06-1.36-.38-.374-.317-.59-.785-.59-1.277V117.186c0-.983.716-1.824 1.69-1.98 6.205-.99 27.742-4.434 34.226-5.472.466-.073.94.06 1.298.365.357.306.565.753.565 1.224v136.313c0 .984-.714 1.822-1.684 1.98-6.172 1.002-27.553 4.478-34.147 5.55zm278.27-64.293l3.762-17.057c.23-1.038 1.207-1.733 2.263-1.605 5.993.72 24.85 2.872 32.383 2.34 9.013-.64 21.597-2.75 23.91-9.08 2.31-6.328-2.09-11.27-9.432-12.952-5.332-1.22-27.788-3.51-36.627-9.688-8.837-6.18-16.96-14.855-15.738-36.88 1.22-22.025 25.974-41.938 55.24-45.96 23.698-3.26 36.823.886 40.96 2.583.838.43 1.278 1.37 1.072 2.287-1.19 5.37-5.027 22.497-6.31 28.232-.242 1.064-1.262 1.767-2.342 1.608-4.975-.705-18.604-2.456-28.625-1.977-12.47.593-22.874 2.688-22.333 11.2.54 8.515 10.465 10.24 30.826 13.97 21.556 3.944 33.15 19.436 30.845 42.134-2.308 22.697-22.154 40.547-53.7 45.95-18.572 3.178-32.23 1.734-40.327.006l.538 1.395c.23.592.177 1.253-.14 1.802-.315.55-.864.923-1.49 1.022-7.144 1.13-27.174 4.288-33.274 5.25-1.033.162-2.037-.433-2.388-1.422-1.525-4.283-5.5-15.46-6.99-19.648-.332-.934-1.285-1.5-2.263-1.343-7.527 1.206-37.95 6.07-45.202 7.23-.955.153-1.743.83-2.037 1.753l-7.095 22.3c-.354 1.114-1.306 1.928-2.46 2.11-9.285 1.465-50.19 7.91-59.362 9.357-1.1.172-2.196-.35-2.755-1.317l-24.158-41.85c-.52-.9-1.54-1.382-2.565-1.213-1.99.328-5.267.866-7.257 1.197-.984.16-1.707 1.012-1.707 2.008v45.312c0 1.01-.73 1.87-1.724 2.03-6.227 1.012-27.507 4.473-34.095 5.542-.486.08-.985-.06-1.362-.38-.378-.32-.596-.792-.596-1.286V109.52c0-.985.715-1.823 1.688-1.98l36.09-5.768 30.096-4.62s23.718-5.096 36.808 16.83c13.69 22.93-.645 50.02-13.517 59.976-2.13 1.65-4.002 3.052-5.712 4.26-.69.486-.887 1.423-.45 2.143 3.843 6.366 20.62 34.143 20.62 34.143l44.418-128.87c.32-.93 1.127-1.61 2.1-1.766 6.23-1.004 29.067-4.68 35.29-5.685.915-.146 1.81.367 2.146 1.236 5.13 13.31 42.98 111.456 42.98 111.456zm140.226-89.235c0 .192.13.36.317.413.187.052.385-.03.484-.198l33.61-57.304c.45-.77 1.226-1.298 2.108-1.44 5.746-.922 27.657-4.443 35.375-5.684.494-.078.99.135 1.27.547.28.413.3.952.044 1.38-6.864 11.622-36.928 62.515-42.486 71.924-.54.91-.487 2.053.13 2.912 6.136 8.526 38.154 53.03 44.178 61.4.208.29.252.668.114.998-.138.328-.437.563-.79.617l-35.636 5.524c-1.176.184-2.355-.313-3.05-1.28-5.513-7.703-29.548-41.27-34.695-48.456-.14-.19-.38-.268-.602-.198-.22.07-.372.28-.372.51v53.76c0 .982-.713 1.82-1.684 1.978l-34.232 5.566c-.463.076-.94-.057-1.3-.36-.355-.31-.563-.753-.563-1.224V56.614c0-.984.715-1.824 1.688-1.978l34.366-5.495c.43-.067.87.055 1.203.34.33.282.523.696.523 1.133v51.026zm77.723 75.03c-.423.067-.852-.053-1.178-.33-.325-.277-.512-.683-.512-1.11l-.026-136.578c0-.986.715-1.824 1.69-1.98 6.243-1 28.012-4.48 34.346-5.49.437-.07.88.054 1.215.34.333.286.528.703.528 1.145v136.435c0 .984-.713 1.822-1.684 1.978-6.253 1.017-28.113 4.57-34.38 5.59zm-286.814-4.21c-.17.25-.432.42-.73.473-.295.052-.6-.02-.844-.196l-8.25-5.995c-.243-.177-.405-.445-.446-.74-.042-.298.04-.6.224-.84 1.878-2.41 6.96-8.935 8.396-10.774.086-.112.11-.255.068-.388-.044-.133-.15-.234-.284-.273l-13.098-3.716c-.29-.08-.534-.277-.674-.543-.143-.265-.17-.577-.078-.866.736-2.263 2.417-7.433 3.15-9.694.094-.287.3-.523.57-.656.27-.13.584-.148.865-.044 2.87 1.043 10.613 3.866 12.802 4.663.132.045.278.025.39-.056.112-.083.177-.213.172-.354L411 128.84c-.01-.298.102-.59.313-.808.208-.216.494-.338.796-.338h10.2c.303 0 .59.122.8.338.208.218.32.51.31.81-.105 3.043-.388 11.245-.47 13.56-.004.14.06.27.173.355.112.08.257.1.387.054 2.186-.787 9.932-3.576 12.8-4.61.28-.1.593-.085.86.047.272.133.477.367.568.654.734 2.262 2.418 7.44 3.154 9.704.094.286.065.598-.075.863-.143.266-.385.464-.677.544l-13.083 3.727c-.133.037-.24.14-.284.27-.04.134-.018.28.068.39 1.435 1.838 6.51 8.356 8.385 10.766.182.24.263.54.22.838-.04.297-.202.565-.444.742-1.922 1.398-6.324 4.596-8.25 5.995-.245.177-.55.248-.846.196-.296-.052-.56-.224-.728-.474l-7.616-11.354c-.078-.117-.21-.187-.35-.187-.14 0-.27.07-.348.186-1.3 1.94-5.912 8.81-7.616 11.353zm-125.915-9.605c0 .34.152.663.412.882.26.22.604.315.94.258l13.553-2.327s12.636-.81 17.26-9.466c4.665-8.732 1.436-16.796-3.362-19.632-3.97-2.347-7.322-1.86-15.347-.502-4.72.8-9.17 1.51-12.035 1.96-.816.126-1.42.832-1.42 1.66v27.167z"})]})})})})}function h1(){return u.jsx("nav",{className:"top-tasks",children:u.jsxs("ul",{children:[u.jsx("li",{children:u.jsxs("a",{href:"/#/get-info",children:[u.jsx("strong",{children:"Get info"}),u.jsx("span",{children:"about the event"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"/#/history/2017",children:[u.jsx("strong",{children:"History"}),u.jsx("span",{children:"of this ski event"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"/#/game",children:[u.jsx("strong",{children:"Play"}),u.jsx("span",{children:"the game"})]})})]})})}function f1(){return u.jsxs(u.Fragment,{children:[u.jsx(d1,{}),u.jsx(h1,{})]})}var yh={};/**
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
 */const Vm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Dr(e)},Dr=function(t){return new Error("Firebase Database ("+Vm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Hm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},p1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),r.push(n[h],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):p1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||d==null)throw new m1;const f=s<<2|l>>4;if(r.push(f),c!==64){const _=l<<4&240|c>>2;if(r.push(_),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class m1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $m=function(t){const e=Hm(t);return gc.encodeByteArray(e,!0)},_o=function(t){return $m(t).replace(/\./g,"")},Ja=function(t){try{return gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function g1(t){return Ym(void 0,t)}function Ym(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_1(n)||(t[n]=Ym(t[n],e[n]));return t}function _1(t){return t!=="__proto__"}/**
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
 */function v1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const y1=()=>v1().__FIREBASE_DEFAULTS__,w1=()=>{if(typeof process>"u"||typeof yh>"u")return;const t=yh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ja(t[1]);return e&&JSON.parse(e)},Gm=()=>{try{return y1()||w1()||E1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},S1=t=>{var e,n;return(n=(e=Gm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},C1=t=>{const e=S1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Km=()=>{var t;return(t=Gm())===null||t===void 0?void 0:t.config};/**
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
 */class nl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function x1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_o(JSON.stringify(n)),_o(JSON.stringify(o)),""].join(".")}/**
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
 */function k1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k1())}function N1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qm(){return Vm.NODE_ADMIN===!0}function T1(){try{return typeof indexedDB=="object"}catch{return!1}}function I1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const j1="FirebaseError";class Zi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=j1,Object.setPrototypeOf(this,Zi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jm.prototype.create)}}class Jm{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?P1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Zi(i,l,r)}}function P1(t,e){return t.replace(R1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const R1=/\{\$([^}]+)}/g;/**
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
 */function Fi(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
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
 */const Xm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Fi(Ja(s[0])||""),n=Fi(Ja(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},A1=function(t){const e=Xm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},O1=function(t){const e=Xm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function wh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Eh(s)&&Eh(o)){if(!Xa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Eh(t){return t!==null&&typeof t=="object"}/**
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
 */function M1(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class b1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=l^s&(o^l),h=1518500249):(c=s^o^l,h=1859775393):d<60?(c=s&o|l&(s|o),h=2400959708):(c=s^o^l,h=3395469782);const f=(i<<5|i>>>27)+c+a+h+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function _c(t,e){return`${t} failed: ${e} argument `}/**
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
 */const L1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function es(t){return t&&t._delegate?t._delegate:t}class Bi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class D1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B1(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:F1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F1(t){return t===yn?void 0:t}function B1(t){return t.instantiationMode==="EAGER"}/**
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
 */class z1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new D1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const U1={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},W1=V.INFO,V1={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},H1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=V1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zm{constructor(e){this.name=e,this._logLevel=W1,this._logHandler=H1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const $1=(t,e)=>e.some(n=>t instanceof n);let Sh,Ch;function Y1(){return Sh||(Sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G1(){return Ch||(Ch=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eg=new WeakMap,Za=new WeakMap,tg=new WeakMap,Hl=new WeakMap,vc=new WeakMap;function K1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eg.set(n,t)}).catch(()=>{}),vc.set(e,t),e}function Q1(t){if(Za.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Za.set(t,e)}let eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Za.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function q1(t){eu=t(eu)}function J1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($l(this),e,...n);return tg.set(r,e.sort?e.sort():[e]),rn(r)}:G1().includes(t)?function(...e){return t.apply($l(this),e),rn(eg.get(this))}:function(...e){return rn(t.apply($l(this),e))}}function X1(t){return typeof t=="function"?J1(t):(t instanceof IDBTransaction&&Q1(t),$1(t,Y1())?new Proxy(t,eu):t)}function rn(t){if(t instanceof IDBRequest)return K1(t);if(Hl.has(t))return Hl.get(t);const e=X1(t);return e!==t&&(Hl.set(t,e),vc.set(e,t)),e}const $l=t=>vc.get(t);function Z1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(rn(o.result),a.oldVersion,a.newVersion,rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const ew=["get","getKey","getAll","getAllKeys","count"],tw=["put","add","delete","clear"],Yl=new Map;function xh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yl.get(e))return Yl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ew.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Yl.set(e,s),s}q1(t=>({...t,get:(e,n,r)=>xh(e,n)||t.get(e,n,r),has:(e,n)=>!!xh(e,n)||t.has(e,n)}));/**
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
 */class nw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tu="@firebase/app",kh="0.9.29";/**
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
 */const Ln=new Zm("@firebase/app"),iw="@firebase/app-compat",sw="@firebase/analytics-compat",ow="@firebase/analytics",lw="@firebase/app-check-compat",aw="@firebase/app-check",uw="@firebase/auth",cw="@firebase/auth-compat",dw="@firebase/database",hw="@firebase/database-compat",fw="@firebase/functions",pw="@firebase/functions-compat",mw="@firebase/installations",gw="@firebase/installations-compat",_w="@firebase/messaging",vw="@firebase/messaging-compat",yw="@firebase/performance",ww="@firebase/performance-compat",Ew="@firebase/remote-config",Sw="@firebase/remote-config-compat",Cw="@firebase/storage",xw="@firebase/storage-compat",kw="@firebase/firestore",Nw="@firebase/firestore-compat",Tw="firebase",Iw="10.9.0";/**
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
 */const nu="[DEFAULT]",jw={[tu]:"fire-core",[iw]:"fire-core-compat",[ow]:"fire-analytics",[sw]:"fire-analytics-compat",[aw]:"fire-app-check",[lw]:"fire-app-check-compat",[uw]:"fire-auth",[cw]:"fire-auth-compat",[dw]:"fire-rtdb",[hw]:"fire-rtdb-compat",[fw]:"fire-fn",[pw]:"fire-fn-compat",[mw]:"fire-iid",[gw]:"fire-iid-compat",[_w]:"fire-fcm",[vw]:"fire-fcm-compat",[yw]:"fire-perf",[ww]:"fire-perf-compat",[Ew]:"fire-rc",[Sw]:"fire-rc-compat",[Cw]:"fire-gcs",[xw]:"fire-gcs-compat",[kw]:"fire-fst",[Nw]:"fire-fst-compat","fire-js":"fire-js",[Tw]:"fire-js-all"};/**
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
 */const yo=new Map,ru=new Map;function Pw(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wo(t){const e=t.name;if(ru.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;ru.set(e,t);for(const n of yo.values())Pw(n,t);return!0}function Rw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Aw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sn=new Jm("app","Firebase",Aw);/**
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
 */class Ow{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Mw=Iw;function ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=Km()),!n)throw sn.create("no-options");const s=yo.get(i);if(s){if(Xa(n,s.options)&&Xa(r,s.config))return s;throw sn.create("duplicate-app",{appName:i})}const o=new z1(i);for(const a of ru.values())o.addComponent(a);const l=new Ow(n,r,o);return yo.set(i,l),l}function bw(t=nu){const e=yo.get(t);if(!e&&t===nu&&Km())return ng();if(!e)throw sn.create("no-app",{appName:t});return e}function gr(t,e,n){var r;let i=(r=jw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}wo(new Bi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Lw="firebase-heartbeat-database",Dw=1,zi="firebase-heartbeat-store";let Gl=null;function rg(){return Gl||(Gl=Z1(Lw,Dw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw sn.create("idb-open",{originalErrorMessage:t.message})})),Gl}async function Fw(t){try{const n=(await rg()).transaction(zi),r=await n.objectStore(zi).get(ig(t));return await n.done,r}catch(e){if(e instanceof Zi)Ln.warn(e.message);else{const n=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Nh(t,e){try{const r=(await rg()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,ig(t)),await r.done}catch(n){if(n instanceof Zi)Ln.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function ig(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bw=1024,zw=30*24*60*60*1e3;class Uw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Th();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Th(),{heartbeatsToSend:r,unsentEntries:i}=Ww(this._heartbeatsCache.heartbeats),s=_o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Th(){return new Date().toISOString().substring(0,10)}function Ww(t,e=Bw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ih(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ih(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T1()?I1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ih(t){return _o(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hw(t){wo(new Bi("platform-logger",e=>new nw(e),"PRIVATE")),wo(new Bi("heartbeat",e=>new Uw(e),"PRIVATE")),gr(tu,kh,t),gr(tu,kh,"esm2017"),gr("fire-js","")}Hw("");var jh={};const Ph="@firebase/database",Rh="1.0.3";/**
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
 */let sg="";function $w(t){sg=t}/**
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
 */class Yw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Gw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const og=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Yw(e)}}catch{}return new Gw},kn=og("localStorage"),iu=og("sessionStorage");/**
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
 */const _r=new Zm("@firebase/database"),Kw=function(){let t=1;return function(){return t++}}(),lg=function(t){const e=L1(t),n=new b1;n.update(e);const r=n.digest();return gc.encodeByteArray(r)},ts=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ts.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Pn=null,Ah=!0;const Qw=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_r.logLevel=V.VERBOSE,Pn=_r.log.bind(_r),e&&iu.set("logging_enabled",!0)):typeof t=="function"?Pn=t:(Pn=null,iu.remove("logging_enabled"))},Te=function(...t){if(Ah===!0&&(Ah=!1,Pn===null&&iu.get("logging_enabled")===!0&&Qw(!0)),Pn){const e=ts.apply(null,t);Pn(e)}},ns=function(t){return function(...e){Te(t,...e)}},su=function(...t){const e="FIREBASE INTERNAL ERROR: "+ts(...t);_r.error(e)},bt=function(...t){const e=`FIREBASE FATAL ERROR: ${ts(...t)}`;throw _r.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+ts(...t);_r.warn(e)},qw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ag=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Jw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rr="[MIN_NAME]",Dn="[MAX_NAME]",Fr=function(t,e){if(t===e)return 0;if(t===Rr||e===Dn)return-1;if(e===Rr||t===Dn)return 1;{const n=Oh(t),r=Oh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Xw=function(t,e){return t===e?0:t<e?-1:1},Jr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},yc=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=yc(t[e[r]]);return n+="}",n},ug=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cg=function(t){C(!ag(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Zw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const nE=new RegExp("^-?(0*)\\d{1,10}$"),rE=-2147483648,iE=2147483647,Oh=function(t){if(nE.test(t)){const e=Number(t);if(e>=rE&&e<=iE)return e}return null},Br=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},sE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class lE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class vr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vr.OWNER="owner";/**
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
 */const wc="5",dg="v",hg="s",fg="r",pg="f",mg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gg="ls",_g="p",ou="ac",vg="websocket",yg="long_polling";/**
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
 */class wg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Eg(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===vg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aE(t)&&(n.ns=t.namespace);const i=[];return We(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class uE{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return g1(this.counters_)}}/**
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
 */const Kl={},Ql={};function Ec(t){const e=t.toString();return Kl[e]||(Kl[e]=new uE),Kl[e]}function cE(t,e){const n=t.toString();return Ql[n]||(Ql[n]=e()),Ql[n]}/**
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
 */class dE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Br(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Mh="start",hE="close",fE="pLPCommand",pE="pRTLPCB",Sg="id",Cg="pw",xg="ser",mE="cb",gE="seg",_E="ts",vE="d",yE="dframe",kg=1870,Ng=30,wE=kg-Ng,EE=25e3,SE=3e4;class ar{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ns(e),this.stats_=Ec(n),this.urlFn=a=>(this.appCheckToken&&(a[ou]=this.appCheckToken),Eg(n,yg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SE)),Jw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sc((...s)=>{const[o,l,a,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mh)this.id=l,this.password=a;else if(o===hE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mh]="t",r[xg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[dg]=wc,this.transportSessionId&&(r[hg]=this.transportSessionId),this.lastSessionId&&(r[gg]=this.lastSessionId),this.applicationId&&(r[_g]=this.applicationId),this.appCheckToken&&(r[ou]=this.appCheckToken),typeof location<"u"&&location.hostname&&mg.test(location.hostname)&&(r[fg]=pg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ar.forceAllow_=!0}static forceDisallow(){ar.forceDisallow_=!0}static isAvailable(){return ar.forceAllow_?!0:!ar.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zw()&&!eE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$m(n),i=ug(r,wE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[yE]="t",r[Sg]=e,r[Cg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Kw(),window[fE+this.uniqueCallbackIdentifier]=e,window[pE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sg]=this.myID,e[Cg]=this.myPW,e[xg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ng+r.length<=kg;){const o=this.pendingSegs.shift();r=r+"&"+gE+i+"="+o.seg+"&"+_E+i+"="+o.ts+"&"+vE+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(EE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const CE=16384,xE=45e3;let Eo=null;typeof MozWebSocket<"u"?Eo=MozWebSocket:typeof WebSocket<"u"&&(Eo=WebSocket);class lt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ns(this.connId),this.stats_=Ec(n),this.connURL=lt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[dg]=wc,typeof location<"u"&&location.hostname&&mg.test(location.hostname)&&(o[fg]=pg),n&&(o[hg]=n),r&&(o[gg]=r),i&&(o[ou]=i),s&&(o[_g]=s),Eg(e,vg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kn.set("previous_websocket_failure",!0);try{let r;qm(),this.mySock=new Eo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Eo!==null&&!lt.forceDisallow_}static previouslyFailed(){return kn.isInMemoryStorage||kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Fi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ug(n,CE);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
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
 */class Ui{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ar,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=lt&&lt.isAvailable();let r=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[lt];else{const i=this.transports_=[];for(const s of Ui.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ui.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ui.globalTransportInitialized_=!1;/**
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
 */const kE=6e4,NE=5e3,TE=10*1024,IE=100*1024,ql="t",bh="d",jE="s",Lh="r",PE="e",Dh="o",Fh="a",Bh="n",zh="p",RE="h";class AE{constructor(e,n,r,i,s,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ns("c:"+this.id+":"),this.transportManager_=new Ui(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=mi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ql in e){const n=e[ql];n===Fh?this.upgradeIfSecondaryHealthy_():n===Lh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jr("t",e),r=Jr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jr("t",e),r=Jr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jr(ql,e);if(bh in e){const r=e[bh];if(n===RE){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jE?this.onConnectionShutdown_(r):n===Lh?this.onReset_(r):n===PE?su("Server Error: "+r):n===Dh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):su("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wc!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),mi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(NE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Tg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ig{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class So extends Ig{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new So}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Uh=32,Wh=768;class W{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new W("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function un(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new W(t.pieces_,e)}function jg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function OE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Pg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Rg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new W(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof W)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new W(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Le(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Cc(t,e){if(un(t)!==un(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(un(t)>un(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ME{constructor(e,n){this.errorPrefix_=n,this.parts_=Pg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=rl(this.parts_[r]);Ag(this)}}function bE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=rl(e),Ag(t)}function LE(t){const e=t.parts_.pop();t.byteLength_-=rl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ag(t){if(t.byteLength_>Wh)throw new Error(t.errorPrefix_+"has a key path longer than "+Wh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Uh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Uh+") or object contains a cycle "+wn(t))}function wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class xc extends Ig{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xc}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xr=1e3,DE=60*5*1e3,Vh=30*1e3,FE=1.3,BE=3e4,zE="server_kill",Hh=3;class Pt extends Tg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Pt.nextPersistentConnectionId_++,this.log_=ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xr,this.maxReconnectDelay_=DE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!qm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&So.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new nl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;Pt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const r=Pr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||O1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=A1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):su("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BE&&(this.reconnectDelay_=Xr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(d){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new AE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ue(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(zE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ue(d),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wh(this.interruptReasons_)&&(this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>yc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new W(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hh&&(this.reconnectDelay_=Vh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sg.replace(/\./g,"-")]=1,Qm()?e["framework.cordova"]=1:N1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=So.getInstance().currentlyOnline();return wh(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
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
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
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
 */class il{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(Rr,e),i=new b(Rr,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
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
 */let Ns;class Og extends il{static get __EMPTY_NODE(){return Ns}static set __EMPTY_NODE(e){Ns=e}compare(e,n){return Fr(e.name,n.name)}isDefinedOn(e){throw Dr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Dn,Ns)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,Ns)}toString(){return".key"}}const yr=new Og;/**
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
 */class Ts{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??me.RED,this.left=i??De.EMPTY_NODE,this.right=s??De.EMPTY_NODE}copy(e,n,r,i,s){return new me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class UE{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ts(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ts(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ts(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ts(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new UE;/**
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
 */function WE(t,e){return Fr(t.name,e.name)}function kc(t,e){return Fr(t,e)}/**
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
 */let lu;function VE(t){lu=t}const Mg=function(t){return typeof t=="number"?"number:"+cg(t):"string:"+t},bg=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else C(t===lu||t.isEmpty(),"priority of unexpected type.");C(t===lu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $h;class fe{constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bg(this.priorityNode_)}static set __childrenNodeConstructor(e){$h=e}static get __childrenNodeConstructor(){return $h}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:M(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cg(this.value_):e+=this.value_,this.lazyHash_=lg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Lg,Dg;function HE(t){Lg=t}function $E(t){Dg=t}class YE extends il{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Dn,new fe("[PRIORITY-POST]",Dg))}makePost(e,n){const r=Lg(e);return new b(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ee=new YE;/**
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
 */const GE=Math.log(2);class KE{constructor(e){const n=s=>parseInt(Math.log(s)/GE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Co=function(t,e,n,r){t.sort(e);const i=function(a,c){const h=c-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new me(f,d.node,me.BLACK,null,null);{const _=parseInt(h/2,10)+a,v=i(a,_),y=i(_+1,c);return d=t[_],f=n?n(d):d,new me(f,d.node,me.BLACK,v,y)}},s=function(a){let c=null,h=null,d=t.length;const f=function(v,y){const S=d-v,m=d;d-=v;const p=i(S+1,m),g=t[S],w=n?n(g):g;_(new me(w,g.node,y,null,p))},_=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),S=Math.pow(2,a.count-(v+1));y?f(S,me.BLACK):(f(S,me.BLACK),f(S,me.RED))}return h},o=new KE(t.length),l=s(o);return new De(r||e,l)};/**
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
 */let Jl;const Yn={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Yn&&ee,"ChildrenNode.ts has not been loaded"),Jl=Jl||new It({".priority":Yn},{".priority":ee}),Jl}get(e){const n=Pr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){C(e!==yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Co(r,e.getCompare()):l=Yn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new It(h,c)}addToIndexes(e,n){const r=vo(this.indexes_,(i,s)=>{const o=Pr(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Yn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Co(l,o.getCompare())}else return Yn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new It(r,this.indexSet_)}removeFromIndexes(e,n){const r=vo(this.indexes_,i=>{if(i===Yn)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new It(r,this.indexSet_)}}/**
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
 */let Zr;class R{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&bg(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zr||(Zr=new R(new De(kc),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zr}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zr:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Zr:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{C(M(e)!==".priority"||un(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(H(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ee,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mg(this.getPriority().val())+":"),this.forEachChild(ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":lg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rs?-1:0}withIndex(e){if(e===yr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ee),i=n.getIterator(ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yr?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QE extends R{constructor(){super(new De(kc),R.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const rs=new QE;Object.defineProperties(b,{MIN:{value:new b(Rr,R.EMPTY_NODE)},MAX:{value:new b(Dn,rs)}});Og.__EMPTY_NODE=R.EMPTY_NODE;fe.__childrenNodeConstructor=R;VE(rs);$E(rs);/**
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
 */const qE=!0;function Ee(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,Ee(e))}if(!(t instanceof Array)&&qE){const n=[];let r=!1;if(We(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ee(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=Co(n,WE,o=>o.name,kc);if(r){const o=Co(n,ee.getCompare());return new R(s,Ee(e),new It({".priority":o},{".priority":ee}))}else return new R(s,Ee(e),It.Default)}else{let n=R.EMPTY_NODE;return We(t,(r,i)=>{if(Ft(t,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(e))}}HE(Ee);/**
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
 */class JE extends il{constructor(e){super(),this.indexPath_=e,C(!L(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fr(e.name,n.name):s}makePost(e,n){const r=Ee(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,rs);return new b(Dn,e)}toString(){return Pg(this.indexPath_,0).join("/")}}/**
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
 */class XE extends il{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=Ee(e);return new b(n,r)}toString(){return".value"}}const ZE=new XE;/**
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
 */function Fg(t){return{type:"value",snapshotNode:t}}function Ar(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Wi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function eS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Nc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Wi(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ar(n,r)):o.trackChildChange(Vi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Wi(i,s))}),n.isLeafNode()||n.forEachChild(ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Vi(i,s,o))}else r.trackChildChange(Ar(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Hi{constructor(e){this.indexedFilter_=new Nc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hi.getStartPost_(e),this.endPost_=Hi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(ee,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class tS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Hi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new b(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Vi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Wi(n,d));const y=l.updateImmediateChild(n,R.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ar(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:h&&o(c,a)>=0?(s!=null&&(s.trackChildChange(Wi(c.name,c.node)),s.trackChildChange(Ar(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,R.EMPTY_NODE)):e}}/**
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
 */class Tc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new Tc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nS(t){return t.loadsAllData()?new Nc(t.getIndex()):t.hasLimit()?new tS(t):new Hi(t)}function Yh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ee?n="$priority":t.index_===ZE?n="$value":t.index_===yr?n="$key":(C(t.index_ instanceof JE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
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
 */class xo extends Tg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ns("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=xo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Yh(e._queryParams);this.restRequest_(s+".json",a,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Pr(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=xo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Yh(e._queryParams),r=e._path.toString(),i=new nl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+M1(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Fi(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class rS{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ko(){return{value:null,children:new Map}}function Bg(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,ko());const i=t.children.get(r);e=H(e),Bg(i,e,n)}}function au(t,e,n){t.value!==null?n(e,t.value):iS(t,(r,i)=>{const s=new W(e.toString()+"/"+r);au(i,s,n)})}function iS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class sS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Kh=10*1e3,oS=30*1e3,lS=5*60*1e3;class aS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sS(e);const r=Kh+(oS-Kh)*Math.random();mi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;We(e,(i,s)=>{s>0&&Ft(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),mi(this.reportStats_.bind(this),Math.floor(Math.random()*2*lS))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function zg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ic(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class No{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=zg()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new W(e));return new No(z(),n,this.revert)}}else return C(M(this.path)===e,"operationForChild called for unrelated child."),new No(H(this.path),this.affectedTree,this.revert)}}/**
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
 */class $i{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new $i(this.source,z()):new $i(this.source,H(this.path))}}/**
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
 */class Fn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return L(this.path)?new Fn(this.source,z(),this.snap.getImmediateChild(e)):new Fn(this.source,H(this.path),this.snap)}}/**
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
 */class Yi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new W(e));return n.isEmpty()?null:n.value?new Fn(this.source,z(),n.value):new Yi(this.source,z(),n)}else return C(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yi(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Bn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class uS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(eS(o.childName,o.snapshotNode))}),ei(t,i,"child_removed",e,r,n),ei(t,i,"child_added",e,r,n),ei(t,i,"child_moved",s,r,n),ei(t,i,"child_changed",e,r,n),ei(t,i,"value",e,r,n),i}function ei(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>hS(t,l,a)),o.forEach(l=>{const a=dS(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function dS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hS(t,e,n){if(e.childName==null||n.childName==null)throw Dr("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function sl(t,e){return{eventCache:t,serverCache:e}}function gi(t,e,n,r){return sl(new Bn(e,n,r),t.serverCache)}function Ug(t,e,n,r){return sl(t.eventCache,new Bn(e,n,r))}function uu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xl;const fS=()=>(Xl||(Xl=new De(Xw)),Xl);class G{constructor(e,n=fS()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return We(e,(r,i)=>{n=n.set(new W(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(L(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(H(e),n);return s!=null?{path:ue(new W(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(H(e)):new G(null)}}set(e,n){if(L(e))return new G(n,this.children);{const r=M(e),s=(this.children.get(r)||new G(null)).set(H(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(H(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(L(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(H(e)):null}}setTree(e,n){if(L(e))return n;{const r=M(e),s=(this.children.get(r)||new G(null)).setTree(H(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(L(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(H(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(L(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(H(e),ue(n,i),r):new G(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new G(null))}}function _i(t,e,n){if(L(e))return new ft(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function Qh(t,e,n){let r=t;return We(n,(i,s)=>{r=_i(r,ue(e,i),s)}),r}function qh(t,e){if(L(e))return ft.empty();{const n=t.writeTree_.setTree(e,new G(null));return new ft(n)}}function cu(t,e){return Hn(t,e)!=null}function Hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function Jh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function on(t,e){if(L(e))return t;{const n=Hn(t,e);return n!=null?new ft(new G(n)):new ft(t.writeTree_.subtree(e))}}function du(t){return t.writeTree_.isEmpty()}function Or(t,e){return Wg(z(),t.writeTree_,e)}function Wg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Wg(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
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
 */function Pc(t,e){return Yg(e,t)}function pS(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=_i(t.visibleWrites,e,n)),t.lastWriteId=r}function mS(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function gS(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&_S(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return vS(t),!0;if(r.snap)t.visibleWrites=qh(t.visibleWrites,r.path);else{const l=r.children;We(l,a=>{t.visibleWrites=qh(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function _S(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(ue(t.path,n),e))return!0;return!1}function vS(t){t.visibleWrites=Vg(t.allWrites,yS,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yS(t){return t.visible}function Vg(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=Le(n,o),r=_i(r,l,s.snap)):ut(o,n)&&(l=Le(o,n),r=_i(r,z(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=Le(n,o),r=Qh(r,l,s.children);else if(ut(o,n))if(l=Le(o,n),L(l))r=Qh(r,z(),s.children);else{const a=Pr(s.children,M(l));if(a){const c=a.getChild(H(l));r=_i(r,z(),c)}}}else throw Dr("WriteRecord should have .snap or .children")}}return r}function Hg(t,e,n,r,i){if(!r&&!i){const s=Hn(t.visibleWrites,e);if(s!=null)return s;{const o=on(t.visibleWrites,e);if(du(o))return n;if(n==null&&!cu(o,z()))return null;{const l=n||R.EMPTY_NODE;return Or(o,l)}}}else{const s=on(t.visibleWrites,e);if(!i&&du(s))return n;if(!i&&n==null&&!cu(s,z()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},l=Vg(t.allWrites,o,e),a=n||R.EMPTY_NODE;return Or(l,a)}}}function wS(t,e,n){let r=R.EMPTY_NODE;const i=Hn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=on(t.visibleWrites,e);return n.forEachChild(ee,(o,l)=>{const a=Or(on(s,new W(o)),l);r=r.updateImmediateChild(o,a)}),Jh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=on(t.visibleWrites,e);return Jh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ES(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(cu(t.visibleWrites,s))return null;{const o=on(t.visibleWrites,s);return du(o)?i.getChild(n):Or(o,i.getChild(n))}}function SS(t,e,n,r){const i=ue(e,n),s=Hn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=on(t.visibleWrites,i);return Or(o,r.getNode().getImmediateChild(n))}else return null}function CS(t,e){return Hn(t.visibleWrites,e)}function xS(t,e,n,r,i,s,o){let l;const a=on(t.visibleWrites,e),c=Hn(a,z());if(c!=null)l=c;else if(n!=null)l=Or(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&h.length<i;)d(_,r)!==0&&h.push(_),_=f.getNext();return h}else return[]}function kS(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function To(t,e,n,r){return Hg(t.writeTree,t.treePath,e,n,r)}function Rc(t,e){return wS(t.writeTree,t.treePath,e)}function Xh(t,e,n,r){return ES(t.writeTree,t.treePath,e,n,r)}function Io(t,e){return CS(t.writeTree,ue(t.treePath,e))}function NS(t,e,n,r,i,s){return xS(t.writeTree,t.treePath,e,n,r,i,s)}function Ac(t,e,n){return SS(t.writeTree,t.treePath,e,n)}function $g(t,e){return Yg(ue(t.treePath,e),t.writeTree)}function Yg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class TS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Vi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Wi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ar(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Vi(r,e.snapshotNode,i.oldSnap));else throw Dr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class IS{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Gg=new IS;class Oc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Bn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ac(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zn(this.viewCache_),s=NS(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function jS(t){return{filter:t}}function PS(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function RS(t,e,n,r,i){const s=new TS;let o,l;if(n.type===ct.OVERWRITE){const c=n;c.source.fromUser?o=hu(t,e,c.path,c.snap,r,i,s):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=jo(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===ct.MERGE){const c=n;c.source.fromUser?o=OS(t,e,c.path,c.children,r,i,s):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=fu(t,e,c.path,c.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const c=n;c.revert?o=LS(t,e,c.path,r,i,s):o=MS(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=bS(t,e,n.path,r,s);else throw Dr("Unknown operation type: "+n.type);const a=s.getChanges();return AS(e,o,a),{viewCache:o,changes:a}}function AS(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=uu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Fg(uu(e)))}}function Kg(t,e,n,r,i,s){const o=e.eventCache;if(Io(r,n)!=null)return e;{let l,a;if(L(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zn(e),h=c instanceof R?c:R.EMPTY_NODE,d=Rc(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=To(r,zn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=M(n);if(c===".priority"){C(un(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=Xh(r,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=H(n);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Xh(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(c).updateChild(h,f):d=o.getNode().getImmediateChild(c)}else d=Ac(r,c,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),c,d,h,i,s):l=o.getNode()}}return gi(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function jo(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);c=h.updateFullNode(a.getNode(),_,null)}else{const _=M(n);if(!a.isCompleteForPath(n)&&un(n)>1)return e;const v=H(n),S=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=h.updatePriority(a.getNode(),S):c=h.updateChild(a.getNode(),_,S,v,Gg,null)}const d=Ug(e,c,a.isFullyInitialized()||L(n),h.filtersNodes()),f=new Oc(i,d,s);return Kg(t,d,n,i,f,l)}function hu(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const h=new Oc(i,e,s);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=gi(e,c,!0,t.filter.filtersNodes());else{const d=M(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=gi(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=H(n),_=l.getNode().getImmediateChild(d);let v;if(L(f))v=r;else{const y=h.getCompleteChild(d);y!=null?jg(f)===".priority"&&y.getChild(Rg(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=R.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,f,h,o);a=gi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Zh(t,e){return t.eventCache.isCompleteForChild(e)}function OS(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const h=ue(n,a);Zh(e,M(h))&&(l=hu(t,l,h,c,i,s,o))}),r.foreach((a,c)=>{const h=ue(n,a);Zh(e,M(h))||(l=hu(t,l,h,c,i,s,o))}),l}function ef(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function fu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=r:c=new G(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=ef(t,_,f);a=jo(t,a,new W(d),v,i,s,o,l)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),y=ef(t,v,f);a=jo(t,a,new W(d),y,i,s,o,l)}}),a}function MS(t,e,n,r,i,s,o){if(Io(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return jo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(L(n)){let c=new G(null);return a.getNode().forEachChild(yr,(h,d)=>{c=c.set(new W(h),d)}),fu(t,e,n,c,i,s,l,o)}else return e}else{let c=new G(null);return r.foreach((h,d)=>{const f=ue(n,h);a.isCompleteForPath(f)&&(c=c.set(h,a.getNode().getChild(f)))}),fu(t,e,n,c,i,s,l,o)}}function bS(t,e,n,r,i){const s=e.serverCache,o=Ug(e,s.getNode(),s.isFullyInitialized()||L(n),s.isFiltered());return Kg(t,o,n,r,Gg,i)}function LS(t,e,n,r,i,s){let o;if(Io(r,n)!=null)return e;{const l=new Oc(r,e,i),a=e.eventCache.getNode();let c;if(L(n)||M(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=To(r,zn(e));else{const d=e.serverCache.getNode();C(d instanceof R,"serverChildren would be complete if leaf node"),h=Rc(r,d)}h=h,c=t.filter.updateFullNode(a,h,s)}else{const h=M(n);let d=Ac(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?c=t.filter.updateChild(a,h,d,H(n),l,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,R.EMPTY_NODE,H(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=To(r,zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Io(r,z())!=null,gi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class DS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Nc(r.getIndex()),s=nS(r);this.processor_=jS(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),h=new Bn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Bn(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=sl(d,h),this.eventGenerator_=new uS(this.query_)}get query(){return this.query_}}function FS(t){return t.viewCache_.serverCache.getNode()}function BS(t,e){const n=zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function tf(t){return t.eventRegistrations_.length===0}function zS(t,e){t.eventRegistrations_.push(e)}function nf(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function rf(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(C(zn(t.viewCache_),"We should always have a full cache before handling merges"),C(uu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=RS(t.processor_,i,e,n,r);return PS(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Qg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function US(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(s,o)=>{r.push(Ar(s,o))}),n.isFullyInitialized()&&r.push(Fg(n.getNode())),Qg(t,r,n.getNode(),e)}function Qg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return cS(t.eventGenerator_,e,n,i)}/**
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
 */let Po;class WS{constructor(){this.views=new Map}}function VS(t){C(!Po,"__referenceConstructor has already been defined"),Po=t}function HS(){return C(Po,"Reference.ts has not been loaded"),Po}function $S(t){return t.views.size===0}function Mc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),rf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(rf(o,e,n,r));return s}}function YS(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=To(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=Rc(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const c=sl(new Bn(l,a,!1),new Bn(r,i,!1));return new DS(e,c)}return o}function GS(t,e,n,r,i,s){const o=YS(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zS(o,n),US(o,n)}function KS(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=cn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(nf(c,n,r)),tf(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(nf(a,n,r)),tf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!cn(t)&&s.push(new(HS())(e._repo,e._path)),{removed:s,events:o}}function qg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wr(t,e){let n=null;for(const r of t.views.values())n=n||BS(r,e);return n}function Jg(t,e){if(e._queryParams.loadsAllData())return ol(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Xg(t,e){return Jg(t,e)!=null}function cn(t){return ol(t)!=null}function ol(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ro;function QS(t){C(!Ro,"__referenceConstructor has already been defined"),Ro=t}function qS(){return C(Ro,"Reference.ts has not been loaded"),Ro}let JS=1;class sf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=kS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zg(t,e,n,r,i){return pS(t.pendingWriteTree_,e,n,r,i),i?is(t,new Fn(zg(),e,n)):[]}function Nn(t,e,n=!1){const r=mS(t.pendingWriteTree_,e);if(gS(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(z(),!0):We(r.children,o=>{s=s.set(new W(o),!0)}),is(t,new No(r.path,s,n))}else return[]}function ll(t,e,n){return is(t,new Fn(Ic(),e,n))}function XS(t,e,n){const r=G.fromObject(n);return is(t,new Yi(Ic(),e,r))}function ZS(t,e){return is(t,new $i(Ic(),e))}function eC(t,e,n){const r=Lc(t,n);if(r){const i=Dc(r),s=i.path,o=i.queryId,l=Le(s,e),a=new $i(jc(o),l);return Fc(t,s,a)}else return[]}function pu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Xg(o,e))){const a=KS(o,e,n,r);$S(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,_)=>cn(_));if(h&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=rC(f);for(let v=0;v<_.length;++v){const y=_[v],S=y.query,m=n_(t,y);t.listenProvider_.startListening(vi(S),Ao(t,S),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(vi(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(al(f));t.listenProvider_.stopListening(vi(f),_)}))}iC(t,c)}return l}function tC(t,e,n,r){const i=Lc(t,r);if(i!=null){const s=Dc(i),o=s.path,l=s.queryId,a=Le(o,e),c=new Fn(jc(l),a,n);return Fc(t,o,c)}else return[]}function nC(t,e,n,r){const i=Lc(t,r);if(i){const s=Dc(i),o=s.path,l=s.queryId,a=Le(o,e),c=G.fromObject(n),h=new Yi(jc(l),a,c);return Fc(t,o,h)}else return[]}function of(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=Le(f,i);s=s||wr(_,v),o=o||cn(_)});let l=t.syncPointTree_.get(i);l?(o=o||cn(l),s=s||wr(l,z())):(l=new WS,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=wr(v,z());y&&(s=s.updateImmediateChild(_,y))}));const c=Xg(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=al(e);C(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=sC();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const h=Pc(t.pendingWriteTree_,i);let d=GS(l,e,n,h,s,a);if(!c&&!o&&!r){const f=Jg(l,e);d=d.concat(oC(t,e,f))}return d}function bc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),c=wr(l,a);if(c)return c});return Hg(i,e,s,n,!0)}function is(t,e){return e_(e,t.syncPointTree_,null,Pc(t.pendingWriteTree_,z()))}function e_(t,e,n,r){if(L(t.path))return t_(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=wr(i,z()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=$g(r,o);s=s.concat(e_(l,a,c,h))}return i&&(s=s.concat(Mc(i,t,r,n))),s}}function t_(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=wr(i,z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=$g(r,o),h=t.operationForChild(o);h&&(s=s.concat(t_(h,l,a,c)))}),i&&(s=s.concat(Mc(i,t,r,n))),s}function n_(t,e){const n=e.query,r=Ao(t,n);return{hashFn:()=>(FS(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?eC(t,n._path,r):ZS(t,n._path);{const s=tE(i,n);return pu(t,n,null,s)}}}}function Ao(t,e){const n=al(e);return t.queryToTagMap.get(n)}function al(t){return t._path.toString()+"$"+t._queryIdentifier}function Lc(t,e){return t.tagToQueryMap.get(e)}function Dc(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new W(t.substr(0,e))}}function Fc(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=Pc(t.pendingWriteTree_,e);return Mc(r,n,i,null)}function rC(t){return t.fold((e,n,r)=>{if(n&&cn(n))return[ol(n)];{let i=[];return n&&(i=qg(n)),We(r,(s,o)=>{i=i.concat(o)}),i}})}function vi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(qS())(t._repo,t._path):t}function iC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function sC(){return JS++}function oC(t,e,n){const r=e._path,i=Ao(t,e),s=n_(t,n),o=t.listenProvider_.startListening(vi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!cn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,d)=>{if(!L(c)&&h&&cn(h))return[ol(h).query];{let f=[];return h&&(f=f.concat(qg(h).map(_=>_.query))),We(d,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(vi(h),Ao(t,h))}}return o}/**
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
 */class Bc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bc(n)}node(){return this.node_}}class zc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new zc(this.syncTree_,n)}node(){return bc(this.syncTree_,this.path_)}}const lC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lf=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uC(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},uC=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},cC=function(t,e,n,r){return Uc(e,new zc(n,t),r)},r_=function(t,e,n){return Uc(t,new Bc(e),n)};function Uc(t,e,n){const r=t.getPriority().val(),i=lf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=lf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,Ee(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(ee,(l,a)=>{const c=Uc(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class Wc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Vc(t,e){let n=e instanceof W?e:new W(e),r=t,i=M(n);for(;i!==null;){const s=Pr(r.node.children,i)||{children:{},childCount:0};r=new Wc(i,r,s),n=H(n),i=M(n)}return r}function zr(t){return t.node.value}function i_(t,e){t.node.value=e,mu(t)}function s_(t){return t.node.childCount>0}function dC(t){return zr(t)===void 0&&!s_(t)}function ul(t,e){We(t.node.children,(n,r)=>{e(new Wc(n,t,r))})}function o_(t,e,n,r){n&&!r&&e(t),ul(t,i=>{o_(i,e,!0,r)}),n&&r&&e(t)}function hC(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ss(t){return new W(t.parent===null?t.name:ss(t.parent)+"/"+t.name)}function mu(t){t.parent!==null&&fC(t.parent,t.name,t)}function fC(t,e,n){const r=dC(n),i=Ft(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,mu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,mu(t))}/**
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
 */const pC=/[\[\].#$\/\u0000-\u001F\u007F]/,mC=/[\[\].#$\u0000-\u001F\u007F]/,Zl=10*1024*1024,l_=function(t){return typeof t=="string"&&t.length!==0&&!pC.test(t)},a_=function(t){return typeof t=="string"&&t.length!==0&&!mC.test(t)},gC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),a_(t)},_C=function(t,e,n,r){r&&e===void 0||Hc(_c(t,"value"),e,n)},Hc=function(t,e,n){const r=n instanceof W?new ME(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+wn(r));if(typeof e=="function")throw new Error(t+"contains a function "+wn(r)+" with contents = "+e.toString());if(ag(e))throw new Error(t+"contains "+e.toString()+" "+wn(r));if(typeof e=="string"&&e.length>Zl/3&&rl(e)>Zl)throw new Error(t+"contains a string greater than "+Zl+" utf8 bytes "+wn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(We(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!l_(o)))throw new Error(t+" contains an invalid key ("+o+") "+wn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bE(r,o),Hc(t,l,r),LE(r)}),i&&s)throw new Error(t+' contains ".value" child '+wn(r)+" in addition to actual children.")}},u_=function(t,e,n,r){if(!(r&&n===void 0)&&!a_(n))throw new Error(_c(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),u_(t,e,n,r)},yC=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},wC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!l_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gC(n))throw new Error(_c(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class EC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $c(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Cc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function c_(t,e,n){$c(t,n),d_(t,r=>Cc(r,e))}function Lt(t,e,n){$c(t,n),d_(t,r=>ut(r,e)||ut(e,r))}function d_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(SC(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function SC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Pn&&Te("event: "+n.toString()),Br(r)}}}/**
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
 */const CC="repo_interrupt",xC=25;class kC{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ko(),this.transactionQueueTree_=new Wc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NC(t,e,n){if(t.stats_=Ec(t.repoInfo_),t.forceRestClient_||sE())t.server_=new xo(t.repoInfo_,(r,i,s,o)=>{af(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>uf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pt(t.repoInfo_,e,(r,i,s,o)=>{af(t,r,i,s,o)},r=>{uf(t,r)},r=>{IC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=cE(t.repoInfo_,()=>new aS(t.stats_,t.server_)),t.infoData_=new rS,t.infoSyncTree_=new sf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ll(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Gc(t,"connected",!1),t.serverSyncTree_=new sf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);Lt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function TC(t){const n=t.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yc(t){return lC({timestamp:TC(t)})}function af(t,e,n,r,i){t.dataUpdateCount++;const s=new W(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=vo(n,c=>Ee(c));o=nC(t.serverSyncTree_,s,a,i)}else{const a=Ee(n);o=tC(t.serverSyncTree_,s,a,i)}else if(r){const a=vo(n,c=>Ee(c));o=XS(t.serverSyncTree_,s,a)}else{const a=Ee(n);o=ll(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=cl(t,s)),Lt(t.eventQueue_,l,o)}function uf(t,e){Gc(t,"connected",e),e===!1&&PC(t)}function IC(t,e){We(e,(n,r)=>{Gc(t,n,r)})}function Gc(t,e,n){const r=new W("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(r,i);const s=ll(t.infoSyncTree_,r,i);Lt(t.eventQueue_,r,s)}function h_(t){return t.nextWriteId_++}function jC(t,e,n,r,i){Kc(t,"set",{path:e.toString(),value:n,priority:r});const s=Yc(t),o=Ee(n,r),l=bc(t.serverSyncTree_,e),a=r_(o,l,s),c=h_(t),h=Zg(t.serverSyncTree_,e,a,c,!0);$c(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Ue("set at "+e+" failed: "+f);const y=Nn(t.serverSyncTree_,c,!v);Lt(t.eventQueue_,e,y),OC(t,i,f,_)});const d=__(t,e);cl(t,d),Lt(t.eventQueue_,d,[])}function PC(t){Kc(t,"onDisconnectEvents");const e=Yc(t),n=ko();au(t.onDisconnect_,z(),(i,s)=>{const o=cC(i,s,t.serverSyncTree_,e);Bg(n,i,o)});let r=[];au(n,z(),(i,s)=>{r=r.concat(ll(t.serverSyncTree_,i,s));const o=__(t,i);cl(t,o)}),t.onDisconnect_=ko(),Lt(t.eventQueue_,z(),r)}function RC(t,e,n){let r;M(e._path)===".info"?r=of(t.infoSyncTree_,e,n):r=of(t.serverSyncTree_,e,n),c_(t.eventQueue_,e._path,r)}function gu(t,e,n){let r;M(e._path)===".info"?r=pu(t.infoSyncTree_,e,n):r=pu(t.serverSyncTree_,e,n),c_(t.eventQueue_,e._path,r)}function AC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(CC)}function Kc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function OC(t,e,n,r){e&&Br(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function f_(t,e,n){return bc(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function Qc(t,e=t.transactionQueueTree_){if(e||dl(t,e),zr(e)){const n=m_(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&MC(t,ss(e),n)}else s_(e)&&ul(e,n=>{Qc(t,n)})}function MC(t,e,n){const r=n.map(c=>c.currentWriteId),i=f_(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];C(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Le(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Kc(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Nn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();dl(t,Vc(t.transactionQueueTree_,e)),Qc(t,t.transactionQueueTree_),Lt(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)Br(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ue("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}cl(t,e)}},o)}function cl(t,e){const n=p_(t,e),r=ss(n),i=m_(t,n);return bC(t,i,r),r}function bC(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Le(n,a.path);let h=!1,d;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=xC)h=!0,d="maxretry",i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=f_(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Hc("transaction failed: Data returned ",_,a.path);let v=Ee(_);typeof _=="object"&&_!=null&&Ft(_,".priority")||(v=v.updatePriority(f.getPriority()));const S=a.currentWriteId,m=Yc(t),p=r_(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=h_(t),o.splice(o.indexOf(S),1),i=i.concat(Zg(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,S,!0))}else h=!0,d="nodata",i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0))}Lt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}dl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Br(r[l]);Qc(t,t.transactionQueueTree_)}function p_(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&zr(r)===void 0;)r=Vc(r,n),e=H(e),n=M(e);return r}function m_(t,e){const n=[];return g_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function g_(t,e,n){const r=zr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ul(e,i=>{g_(t,i,n)})}function dl(t,e){const n=zr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,i_(e,n.length>0?n:void 0)}ul(e,r=>{dl(t,r)})}function __(t,e){const n=ss(p_(t,e)),r=Vc(t.transactionQueueTree_,e);return hC(r,i=>{ea(t,i)}),ea(t,r),o_(r,i=>{ea(t,i)}),n}function ea(t,e){const n=zr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?i_(e,void 0):n.length=s+1,Lt(t.eventQueue_,ss(e),i);for(let o=0;o<r.length;o++)Br(r[o])}}/**
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
 */function LC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function DC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const cf=function(t,e){const n=FC(t),r=n.namespace;n.domain==="firebase.com"&&bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||qw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new W(n.pathString)}},FC=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=LC(t.substring(h,d)));const f=DC(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class v_{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class y_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class w_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class qc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return L(this._path)?null:jg(this._path)}get ref(){return new Bt(this._repo,this._path)}get _queryIdentifier(){const e=Gh(this._queryParams),n=yc(e);return n==="{}"?"default":n}get _queryObject(){return Gh(this._queryParams)}isEqual(e){if(e=es(e),!(e instanceof qc))return!1;const n=this._repo===e._repo,r=Cc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OE(this._path)}}class Bt extends qc{constructor(e,n){super(e,n,new Tc,!1)}get parent(){const e=Rg(this._path);return e===null?null:new Bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new W(e),r=Oo(this.ref,e);return new Gi(this._node.getChild(n),r,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Gi(i,Oo(this.ref,r),ee)))}hasChild(e){const n=new W(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Er(t,e){return t=es(t),t._checkNotDeleted("ref"),e!==void 0?Oo(t._root,e):t._root}function Oo(t,e){return t=es(t),M(t._path)===null?vC("child","path",e,!1):u_("child","path",e,!1),new Bt(t._repo,ue(t._path,e))}function E_(t,e){t=es(t),yC("set",t._path),_C("set",e,t._path,!1);const n=new nl;return jC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class hl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new v_("value",this,new Gi(e.snapshotNode,new Bt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new y_(this,e,n):null}matches(e){return e instanceof hl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class fl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new y_(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const r=Oo(new Bt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new v_(e.type,this,new Gi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof fl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function os(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,c=(h,d)=>{gu(t._repo,t,l),a(h,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new w_(n,s||void 0),l=e==="value"?new hl(o):new fl(e,o);return RC(t._repo,t,l),()=>gu(t._repo,t,l)}function S_(t,e,n,r){return os(t,"value",e,n,r)}function df(t,e,n,r){return os(t,"child_added",e,n,r)}function BC(t,e,n,r){return os(t,"child_changed",e,n,r)}function zC(t,e,n,r){return os(t,"child_moved",e,n,r)}function UC(t,e,n,r){return os(t,"child_removed",e,n,r)}function si(t,e,n){let r=null;const i=n?new w_(n):null;e==="value"?r=new hl(i):e&&(r=new fl(e,i)),gu(t._repo,t,r)}VS(Bt);QS(Bt);/**
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
 */const WC="FIREBASE_DATABASE_EMULATOR_HOST",_u={};let VC=!1;function HC(t,e,n,r){t.repoInfo_=new wg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function $C(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cf(s,i),l=o.repoInfo,a,c;typeof process<"u"&&jh&&(c=jh[WC]),c?(a=!0,s=`http://${c}?ns=${l.namespace}`,o=cf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new vr(vr.OWNER):new lE(t.name,t.options,e);wC("Invalid Firebase Database URL",o),L(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=GC(l,t,h,new oE(t.name,n));return new KC(d,t)}function YC(t,e){const n=_u[e];(!n||n[t.key]!==t)&&bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),AC(t),delete n[t.key]}function GC(t,e,n,r){let i=_u[e.name];i||(i={},_u[e.name]=i);let s=i[t.toURLString()];return s&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new kC(t,VC,n,r),i[t.toURLString()]=s,s}class KC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function QC(t=bw(),e){const n=Rw(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=C1("database");r&&qC(n,...r)}return n}function qC(t,e,n,r={}){t=es(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&bt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new vr(vr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:x1(r.mockUserToken,t.app.options.projectId);s=new vr(o)}HC(i,e,n,s)}/**
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
 */function JC(t){$w(Mw),wo(new Bi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $C(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gr(Ph,Rh,t),gr(Ph,Rh,"esm2017")}Pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};JC();var XC="firebase",ZC="10.9.0";/**
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
 */gr(XC,ZC,"app");const ex={apiKey:"AIzaSyDCPOAHKo7f-9HXgJ9iXIx_kOQuAldTg0A",authDomain:"miraski2025.firebaseapp.com",projectId:"miraski2025",storageBucket:"miraski2025.appspot.com",databaseURL:"https://miraski2025-default-rtdb.europe-west1.firebasedatabase.app/",messagingSenderId:"945379362319",appId:"1:945379362319:web:13c9693c2b7e95e4c2857a"},tx=ng(ex),Sr=QC(tx);/*! *****************************************************************************
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
***************************************************************************** */var ur=function(){return ur=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ur.apply(this,arguments)},C_=function(t){return{loading:t==null,value:t}},nx=function(){return function(t,e){switch(e.type){case"error":return ur(ur({},t),{error:e.error,loading:!1,value:void 0});case"reset":return C_(e.defaultValue);case"value":return ur(ur({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},rx=function(t){var e=t?t():void 0,n=x.useReducer(nx(),C_(e)),r=n[0],i=n[1],s=x.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=x.useCallback(function(a){i({type:"error",error:a})},[]),l=x.useCallback(function(a){i({type:"value",value:a})},[]);return x.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},ix=function(t,e,n){var r=x.useRef(t);return x.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},sx=function(t,e){var n=!t&&!e,r=!!t&&!!e&&t.isEqual(e);return n||r},x_=function(t,e){return ix(t,sx,e)};/*! *****************************************************************************
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
***************************************************************************** */var re=function(){return re=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},re.apply(this,arguments)};function Pe(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ox=function(t){return t!=null&&typeof t=="object"&&Array.isArray(t)===!1},k_=function(t,e,n,r){var i,s;if(t.exists){var o=t.val();return ox(o)?re(re(re({},r?r(o):o),e?(i={},i[e]=t.key,i):null),n?(s={},s[n]=t.ref,s):null):r?r(o):o}},N_={loading:!0,value:{keys:[],values:[]}},lx=function(t,e){switch(e.type){case"add":return e.snapshot?re(re({},t),{error:void 0,value:T_(t.value,e.snapshot,e.previousKey)}):t;case"change":return e.snapshot?re(re({},t),{error:void 0,value:ux(t.value,e.snapshot)}):t;case"error":return re(re({},t),{error:e.error,loading:!1,value:{keys:void 0,values:void 0}});case"move":return e.snapshot?re(re({},t),{error:void 0,value:cx(t.value,e.snapshot,e.previousKey)}):t;case"remove":return e.snapshot?re(re({},t),{error:void 0,value:I_(t.value,e.snapshot)}):t;case"reset":return N_;case"value":return re(re({},t),{error:void 0,loading:!1,value:ax(e.snapshots)});case"empty":return re(re({},t),{loading:!1,value:{keys:void 0,values:void 0}});default:return t}},ax=function(t){if(!t)return{keys:[],values:[]};var e=[],n=[];return t.forEach(function(r){r.key&&(e.push(r.key),n.push(r))}),{keys:e,values:n}},T_=function(t,e,n){if(!e.key)return t;var r=t.keys,i=t.values;if(!n)return{keys:r?Pe([e.key],r,!0):[e.key],values:i?Pe([e],i,!0):[e]};var s=r?r.indexOf(n):0;return{keys:r?Pe(Pe(Pe([],r.slice(0,s+1),!0),[e.key],!1),r.slice(s+1),!0):[e.key],values:i?Pe(Pe(Pe([],i.slice(0,s+1),!0),[e],!1),i.slice(s+1),!0):[e]}},ux=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return re(re({},t),{values:r?Pe(Pe(Pe([],r.slice(0,i),!0),[e],!1),r.slice(i+1),!0):[e]})},I_=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return{keys:n?Pe(Pe([],n.slice(0,i),!0),n.slice(i+1),!0):[],values:r?Pe(Pe([],r.slice(0,i),!0),r.slice(i+1),!0):[]}},cx=function(t,e,n){var r=I_(t,e);return T_(r,e,n)},dx=function(){return x.useReducer(lx,N_)},hx=function(t){var e=dx(),n=e[0],r=e[1],i=x_(t,function(){return r({type:"reset"})}),s=i.current;return x.useEffect(function(){if(!s){r({type:"empty"});return}var o=function(m,p){r({type:"add",previousKey:p,snapshot:m})},l=function(m){r({type:"change",snapshot:m})},a=function(m,p){r({type:"move",previousKey:p,snapshot:m})},c=function(m){r({type:"remove",snapshot:m})},h=function(m){r({type:"error",error:m})},d=function(m){r({type:"value",snapshots:m})},f,_=function(m){var p=m.val(),g=p?Object.keys(m.val()).length:0;if(g===0)f=df(s,o,h),d([]);else{var w=[],k=function(I,j){if(g>0){g--,w.push(I),g===0&&d(w);return}o(I,j)};f=df(s,k,h)}};S_(s,_,h,{onlyOnce:!0});var v=BC(s,l,h),y=zC(s,a,h),S=UC(s,c,h);return function(){si(s,"child_added",f),si(s,"child_changed",v),si(s,"child_moved",y),si(s,"child_removed",S)}},[r,s]),[n.value.values,n.loading,n.error]},Jc=function(t,e){var n=e??{},r=n.keyField,i=n.refField,s=n.transform,o=hx(t),l=o[0],a=o[1],c=o[2],h=x.useMemo(function(){return l?l.map(function(d){return k_(d,r,i,s)}):void 0},[l,r,i,s]);return[h,a,c]},fx=function(t){var e=rx(),n=e.error,r=e.loading,i=e.reset,s=e.setError,o=e.setValue,l=e.value,a=x_(t,i);return x.useEffect(function(){var c=a.current;if(!c){o(void 0);return}return S_(c,o,s),function(){si(c,"value",o)}},[a.current]),[l,r,n]},px=function(t,e){var n=e??{},r=n.keyField,i=n.refField,s=n.transform,o=fx(t),l=o[0],a=o[1],c=o[2],h=x.useMemo(function(){return l?k_(l,r,i,s):void 0},[l,r,i,s]);return[h,a,c]};function mx(t){const e=(n,r)=>!n.datetime||!r.datetime?0:n.datetime>r.datetime?1:n.datetime<r.datetime?-1:0;return t.slice().sort(e)}function vu({name:t,shortname:e}){const n=e==="null"?"null.svg":`${e}.jpg`;return u.jsx("figure",{className:"avatar",children:u.jsx("a",{href:`/#/profile/${e}`,children:u.jsx("img",{src:`/img/avatars/${n}`,className:"avatar__image",width:"100",height:"100",alt:`Avatar of ${t}`})})})}function j_({attendees:t}){return u.jsxs(u.Fragment,{children:[u.jsx("input",{type:"checkbox",id:"attendee-list-toggle",className:"attendee-list-toggle"}),u.jsx("ol",{className:"attendee-list",children:mx(t).map(e=>u.jsxs("li",{className:"attendee-list__attendee",children:[u.jsx(vu,{name:e.name,shortname:e.id}),u.jsx("strong",{className:"attendee-list__name",children:e.name}),u.jsx("span",{className:"attendee-list__activities",children:e.activities})]},e.id))}),u.jsx("div",{className:"cta-container",children:u.jsx("label",{className:"btn btn--secondary",htmlFor:"attendee-list-toggle",children:"Show me the complete list"})})]})}function gx(){const t=Er(Sr,"attendees"),[e,n,r]=Jc(t);return u.jsxs("article",{children:[u.jsx("h1",{children:"Get info"}),u.jsx("p",{className:"introduction",children:"Join us for the ultimate skiing & snowboarding event and 4 days of skiing, partying, and having real fun!"}),u.jsxs("p",{children:["A select few Mirabeau veterans are organising a ski event for other Mirabeau veterans and this year the event takes place in the ski resort"," ",u.jsx("a",{href:"/#/get-info/location",children:"Sankt Anton"}),", in the west of Austria, surrounded by beautiful mountains."]}),u.jsxs("p",{children:["We’ll stay at the catered ",u.jsx("a",{href:"/#/get-info/chalet",children:"chalet Alber"})," ","where we’ve been before! Again hosted by Wens Chalets."]}),u.jsx("p",{children:"The chalet is 600 meters away from the Nassereinbahn."}),u.jsxs("div",{className:"extra-info",children:[u.jsxs("section",{className:"extra-info__item",children:[u.jsx("h2",{children:"What’s included?"}),u.jsxs("ul",{children:[u.jsx("li",{children:"4 nights in a luxury chalet"}),u.jsxs("li",{children:["4 days Breakfast",u.jsx("br",{}),u.jsx("small",{children:"(Sunday, Monday, Tuesday, Wednesday)"})]}),u.jsxs("li",{children:["3 days Dinner",u.jsx("br",{}),u.jsx("small",{children:"(Saturday, Sunday, Monday, all 3 course meals)"})]}),u.jsx("li",{children:"Fresh linnen and towels"}),u.jsx("li",{children:"All drinks are included (including beer & wine)"})]}),u.jsx("p",{children:"Travel costs and lunch are not included."})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("h2",{children:"Optional:"}),u.jsx("p",{children:"We can provide you with a skipass at a 5-10% discount that will give you access to over 340 km of ski runs."}),u.jsx("p",{children:"Skiing and boarding equipment can be rented at destination, prices starting at €100 for a 3 days depending on quality of the gear. Alternatively, equipment can be rented via the chalet company at a discount, we’ll contact you for that."})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("h2",{children:"Price"}),u.jsxs("p",{children:["The price will be €530,- for the chalet. The cost of your skipass,"," ","rental gear, and drinks/food outside of the chalet will be yours."]})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("h2",{children:"When"}),u.jsx("p",{children:"We’ll leave on Friday afternoon 10 January 2025 or early Saturday morning 11 January 2025. We’ll head home on the early morning of Wednesday 15 January 2025."})]})]}),u.jsx("div",{className:"cta-container",children:u.jsx("p",{children:u.jsxs("a",{className:"btn",href:"/#/get-info/location",children:[u.jsx("span",{className:"extra-text extra-text--480",children:"tell me "}),"about St. Anton"]})})}),!n&&!r&&e&&u.jsxs(u.Fragment,{children:[u.jsx("h2",{className:"alt",children:"So, who’s joining?"}),u.jsx(j_,{attendees:e})]})]})}function _x(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Après-ski"}),u.jsx("p",{className:"introduction",children:"St. Anton is widely recognised as the après-ski capital of the Alps and attracts flocks of young skiers who embrace the nightlife wholeheartedly."}),u.jsx("h2",{children:"Mooserwirt"}),u.jsxs("p",{children:[u.jsx("a",{href:"http://www.mooserwirt.at",children:"The Mooserwirt"})," is the most famous après-ski bar in St. Anton. The self-proclaimed “world’s baddest” après bar, is the essence of Austrian party. Table-top dancing from 3pm onwards, fuelled by vast quantities of beer and Jägermeister and cheesy music, provided by the legendary 64-year-old DJ Gerhard."]}),u.jsx("h2",{children:"Krazy Kanguruh"}),u.jsxs("p",{children:["Since 1965 there has been a party at"," ",u.jsx("a",{href:"http://www.krazykanguruh.com",children:"the Krazy Kanguruh"}),". They know how to do it properly. By the way – the bar is owned by a world champion skier."]}),u.jsxs("p",{children:["Chances are you want to exerience some night life as well;"," ",u.jsx("a",{href:"/#/get-info/partytime",children:"check the most famous clubs in St. Anton"}),"."]})]})}function vx(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Chalet Alber"}),u.jsx("p",{className:"introduction",children:"This year we’ll stay at the catered Chalet Alber in Sankt Anton."}),u.jsx("p",{children:"The chalet is situated on a beautiful location just off the piste (number 24) leading to the Nasserein skilift. You can ski back to the chalet, something that is rare for Sankt Anton accommodations. The ski lift is only 600 meters away, and at the end of the day it’s only a 250m walk from the Gampen slopes. Several hiking trails start directly on the doorstep. A toboggan run can be accessed in the immediate vicinity."}),u.jsx("p",{children:"We’ll stay in the chalet for 4 nights (half pension), and breakfast and dinner is served here by the lovely people of Wens Chalets. Bed linen and towels are taken care of and all the snacks and drinks in the chalet are included (including beer & wine). All of the rooms feature a private bathroom, which is fitted with a bath tub or a shower and optionally a balcony. There is a ski storage room and free private parking is possible on site."}),u.jsx("p",{children:"Be sure to join the “Looping Louie”-competition right after dinner, but after some beers or jägers you can visit some great bars nearby. Main town is only a short bus ride away - you can easily walk or get a taxi back at night too!"}),u.jsxs("figure",{className:"scrapbook",children:[u.jsx("img",{src:"/img/info/2025/chalet/1.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/2.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/3.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/4.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/5.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/info/2025/chalet/6.jpg",className:"scrapbook__image"})]})]})}function yx(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Sankt Anton"}),u.jsx("p",{className:"introduction",children:"More than 340 kilometres of virgin powder is available at the superbly prepared slopes at Sankt Anton ski area."}),u.jsxs("p",{children:["Nasserein ski lift, next to chalet Alber, puts you in the middle of the Ski Arlberg ski area, which can compete with the best skiing in Europe. They don’t call it the “Cradle of Alpine skiing” for nothing. It’s a snowy paradise of the highest calibre and at the same time a very cool place to enjoy some great ",u.jsx("a",{href:"/#/get-info/apres-ski",children:"après-ski"})," ","parties!"]}),u.jsx("p",{children:"In total, the ski area offers 340 kilometres of groomed slopes and an additionally approximately 180 kilometres of off-piste opportunities and is varied and challenging for advanced skiers but also very suitable for beginners. The likelihood of snow is very high in this area, so valley runs are possible until late in the season."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Highest point: 2811 meter"}),u.jsx("li",{children:"Lowest point: 1304 meter"})]}),u.jsxs("section",{children:[u.jsx("h2",{children:"Chalet alber"}),u.jsx("p",{children:"This year we’ll stay at the catered chalet “Alber” in Sankt Anton. This is situated on a beautiful location just off the piste (number 24) leading to the Nasserein skilift. You can ski back to the chalet, something that is rare for Sankt Anton accommodations. The ski lift is only 600 meters away, and at the end of the day it’s only a 250m walk from the Gampen slopes. Several hiking trails start directly on the doorstep. A toboggan run can be accessed in the immediate vicinity."}),u.jsx("p",{children:u.jsx("a",{href:"/#/get-info/chalet",className:"btn btn--secondary",children:"Tell me err’thing"})})]}),u.jsxs("section",{children:[u.jsx("h2",{children:"Après-ski & nightlife"}),u.jsx("p",{children:"St Anton is widely recognised as the après-ski capital of the Alps and attracts flocks of young skiers who embrace the nightlife wholeheartedly."}),u.jsx("p",{children:"St Anton is almost as famous for its après as it is for its skiing, so be prepared to party when you come here. The nightlife start from 23.00."}),u.jsx("p",{children:u.jsx("a",{href:"/#/get-info/partytime",className:"btn btn--secondary",children:"I need examples!"})})]})]})}function wx(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Partytime"}),u.jsx("p",{className:"introduction",children:"This MiraSki edition, chances are you’ll find yourself dancing on the table with a Jägerbomb in your hand; St. Anton has that effect on people. ‘Ski hard, play hard’; these are the party-places you should be checking:"}),u.jsx("h2",{children:"Après-ski"}),u.jsxs("div",{className:"extra-info",children:[u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/mooserwirt.jpg",alt:"Impression of Mooserwirt"}),u.jsx("h3",{children:"Mooserwirt"}),u.jsxs("p",{children:[u.jsx("a",{href:"http://www.mooserwirt.at",rel:"noopener",children:"The Mooserwirt"})," ","is the most famous après-ski bar in St. Anton. The self-proclaimed “world’s baddest” après bar, is the essence of Austrian party. Table-top dancing from 3pm onwards, fuelled by vast quantities of beer and Jägermeister and cheesy music, provided by the legendary 64-year-old DJ Gerhard."]})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/krazy-kanguruh.jpg",alt:"Impression of Krazy Kanguruh"}),u.jsx("h3",{children:"Krazy Kanguruh"}),u.jsxs("p",{children:["Since 1965 there has been a party at"," ",u.jsx("a",{href:"http://www.krazykanguruh.com",rel:"noopener",children:"the Krazy Kanguruh"}),". They know how to do it properly. By the way – the bar is owned by a world champion skier."]})]})]}),u.jsx("h2",{children:"Nightlife"}),u.jsxs("div",{className:"extra-info",children:[u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/horny-bull.jpg",alt:"Impression of Horny Bull"}),u.jsx("h3",{children:"Horny Bull"}),u.jsx("p",{children:"Horny Bull is open until the early hours and probably works best as a niteclub when they offer Deep & Vocal House music with international DJ’s from 11pm – 3am"})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/piccadilly.jpg",alt:"Impression of Piccadilly / Postkeller"}),u.jsx("h3",{children:"Piccadilly / Postkeller"}),u.jsxs("p",{children:["The legendary"," ",u.jsx("a",{href:"http://hotel-post.co.at/hotel-post/postkeller-piccadilly.html",rel:"noopener",children:"Piccadilly bar"})," ","with the best live music of St. Anton! Celebrate as if there were no tomorrow: You don’t know what partying is until you have been here. Let the fun begin!"]})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/hells-club.jpg",alt:"Impression of Hells Club"}),u.jsx("h3",{children:"Hells Club"}),u.jsxs("p",{children:["A new favourite in town is the"," ",u.jsx("a",{href:"http://www.hellsclub.at",rel:"noopener",children:"Hells Club"})," ","(open from 8pm Wednesday to Sunday), located in the Hotel Tyrol, a late-night bar and disco with quirky interiors."]})]}),u.jsxs("section",{className:"extra-info__item",children:[u.jsx("img",{src:"/img/info/2017/nightlife/murrmel.jpg",alt:"Impression of Murrmel"}),u.jsx("h3",{children:"Murrmel"}),u.jsxs("p",{children:[u.jsx("a",{href:"http://www.murrmel.at",rel:"noopener",children:"The Murrmel bar"})," ","is a very clean and compact place which really gets a good vibe and atmosphere. The guy playing rocksongs, Gunar, is a great entertainer!"]})]})]})]})}function Ex({active:t}){return u.jsx("nav",{className:"history-nav-container",children:u.jsxs("ul",{className:"history-nav",children:[u.jsx("li",{children:u.jsx("a",{href:"/#/history/2017",className:"history-nav__link","aria-selected":t===2017,children:"2017"})}),u.jsx("li",{children:u.jsx("a",{href:"/#/history/2016",className:"history-nav__link","aria-selected":t===2016,children:"2016"})}),u.jsx("li",{children:u.jsx("a",{href:"/#/history/2015",className:"history-nav__link","aria-selected":t===2015,children:"2015"})})]})})}function Xc({year:t,HistoryText:e,attendees:n}){return u.jsxs("article",{children:[u.jsxs("section",{children:[u.jsx("h1",{children:t}),u.jsx(e,{}),u.jsx(j_,{attendees:n})]}),u.jsx(Ex,{active:t})]})}function Sx(){return u.jsx(Xc,{year:2017,HistoryText:xx,attendees:Cx})}const Cx=[{id:"sdijkman",name:"Simon Dijkman"},{id:"evegt",name:"Emar Vegt"},{id:"klaumen",name:"Kevin Laumen"},{id:"mvigelandzoon",name:"Meredith Vigelandzoon"},{id:"rbuiten",name:"Rick Buiten"},{id:"nyasuda",name:"Naomi Yasuda"},{id:"mplatvoet",name:"Mark Platvoet"},{id:"vrademaker",name:"Vera Rademaker"},{id:"rhenneman",name:"Robbert Henneman"},{id:"jvanstaveren",name:"Jasper van Staveren"},{id:"kliefhebber",name:"Kim Liefhebber"},{id:"adiepeveen",name:"Andre Diepeveen"},{id:"bbarten",name:"Bas Barten"},{id:"crentier",name:"Cyrille Rentier"},{id:"gbranje",name:"Geert Branje"},{id:"aoliya",name:"Armin Oliya"},{id:"svandenakker",name:"Saskia van den Akker"},{id:"mterhorst",name:"Marco ter Horst"},{id:"dmansell",name:"Dennis Mansell"},{id:"tmastik",name:"Tim Mastik"},{id:"mbonne",name:"Mark Bonne"},{id:"sveenstra",name:"Sieger Veenstra"},{id:"rkilarciyan",name:"Rita Kilarciyan"},{id:"mwarnaar",name:"Merette Warnaar"},{id:"tkuijper",name:"Thalita Kuijper"},{id:"dkelly",name:"Daniel Kelly"},{id:"erik",name:"Erik Hamoen"},{id:"spals",name:"Sjors Pals"},{id:"cvanantwerpen",name:"Catelijne van Antwerpen"},{id:"heiniw",name:"Heini Withagen"},{id:"jbruseker",name:"Jeroen Bruseker"},{id:"bvaneck",name:"Bas van Eck"},{id:"mgroeneweg",name:"Maarten Groeneweg"},{id:"swartna",name:"Sybren Wartna"},{id:"bvandermeer",name:"Bran van der Meer"},{id:"knederkoorn",name:"Kees Nederkoorn"},{id:"pversteeg",name:"Paul Versteeg"}];function xx(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"Looking back on the MiraSki 2017 event, we can only conclude that the Austrian mountain village Anton is indeed a Holy place. Our visit there left us with memories of fresh snow, Jäger, presidents, Johnny Däpp, Willy shots, beer, more Johnny Däpp and great ski runs."}),u.jsx("p",{children:"The trip started of on Friday with some road tripping, but simply hopping on a plane was also an popular option this year. Eventually everyone arrived smoothly at our new home for the next couple of days, the lovely “Chalet Alber”. As soon as everybody got hold of a Ski pass we immediately attacked the slopes for instant snow appreciation. Because of the recently opened “Flexenbahn”-lift, the ski area instantly doubled in size and offered us 305 km of skiing fun. Especially interesting are all the ski-routes options in this area, which offered some extra adventure, without the risk of triggering an avalanche. After each day a lot of Ski Track data was uploaded into our own game database. All these wintersport skills unlocked new digital abilities in the game and stirred up the leaderboard. It was live testing at its finest."}),u.jsx("p",{children:"After the last ski-run of the day we often found ourselves at the MooserWirt enjoying some Jäger refreshments and shouting multiple iterations of “Johnny Däpp”. The après ski temple was big, loud and crowded, but also gave us a lot of laughter. Afterwards, a special dose of determination was needed to finish the last 100 meters to the end of the piste, which in some cases resulted in an involuntary village exploration. Luckily everybody made it home in one piece. The Wens Chalet - crew cooked us a nice meal and after a much needed shower, we improved our gaming skills in the chalet. The Looping Louie game showcased some mad skills and the Presidents card game celebrated some appropriate name-calling. The challenges were of course accompanies by some small alcoholic beverages which triggered some much needed dancing and singing. Some furniture was stress-tested during these activities and a certain individual gained a temporary M.I.A.-status due to his bar-localisation efforts. In short; all ended well and we had a good laugh."}),u.jsx("p",{children:"The weather during our trip was pretty OK. We did experience some heavy fog, but that proved to be an excellent opportunity to order a plate-sized schnitzel somewhere on a remote mountain top. By the time we finished devouring our lunch, the sun had already fixed this cloud-impediment and created some beautiful kodak moments. While most MiraSki team members were rutching down the slopes, others took on the challenge of steering an Audi Quattro round some slippery corners and over a number of big obstacles. For some this might feel like riding an very expensive sled, but feeling the power and control in these circumstances made it a very cool experience."}),u.jsx("p",{children:"No MiraSki is complete without a Jäger train; that’s why a staircase performance in the chalet was orchestrated to facilitate this user need. The finesse of dominos mixed with a german digestive plunging into a fluid sugar drug, is always a succes! Right after this beverage-ritual, the party continued at the “Postkeller” a lively club in the city centre. There was live music and singing and even though snowboard boots were not accepted as suitable party attire, some serious dance moves were put into effect."}),u.jsx("p",{children:"The 2017 MiraSki event was a big success and to celebrate this, every team member received a MiraSki 2017-flask. Cheers to MiraSki 2017 and we’ll see you in 2018!"}),u.jsx("h2",{children:"They enjoyed “Johnny Däpp”"})]})}function kx(){return u.jsx(Xc,{year:2016,HistoryText:Tx,attendees:Nx})}const Nx=[{id:"bvandermeer",name:"Bran van der Meer"},{id:"swartna",name:"Sybren Wartna"},{id:"pvree",name:"Pascal Vree"},{id:"knederkoorn",name:"Kees Nederkoorn"},{id:"mgroeneweg",name:"Maarten Groeneweg"},{id:"kliefhebber",name:"Kim Liefhebber"},{id:"pversteeg",name:"Paul Versteeg"},{id:"lhalff",name:"Lisette Halff"},{id:"bvaneck",name:"Bas van Eck"},{id:"jbruseker",name:"Jeroen Bruseker"},{id:"spals",name:"Sjors Pals"},{id:"bbarten",name:"Bas Barten"},{id:"tdevries",name:"Thijs de Vries"},{id:"sveenstra",name:"Sieger Veenstra"},{id:"dtimmers",name:"Dennis Timmers"},{id:"jtuitjer",name:"Jeroen Tuitjer"},{id:"mheijboer",name:"Marigo Heijboer"},{id:"cwiltink",name:"Céryl Wiltink"},{id:"heiniw",name:"Heini Withagen"},{id:"apoppe",name:"Aukje Poppe"},{id:"svandenakker",name:"Suzan van Rooijen"},{id:"phalenbeek",name:"Pieter Halenbeek"},{id:"mplatvoet",name:"Mark Platvoet"},{id:"rhenneman",name:"Robbert Henneman"},{id:"crentier",name:"Cyrille Rentier"},{id:"gbranje",name:"Geert Branje"},{id:"wkroes",name:"Wouter Kroes"},{id:"nvanderlinde",name:"Nick van der Linde"},{id:"mooms",name:"Michiel Ooms"},{id:"llaan",name:"Lotte-Sara Laan"},{id:"mwarnaar",name:"Merette Warnaar"},{id:"lvanwieringen",name:"Lieven van Wieringen"},{id:"dlangdon",name:"Dickon Langdon"},{id:"dvdveen",name:"Desirée van der Veen"}];function Tx(){return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"embed-container",children:u.jsx("iframe",{src:"http://www.youtube.com/embed/arMfjouGDhY?rel=0",frameBorder:"0",allowfullscreen:!0})}),u.jsx("p",{className:"introduction",children:"“Hoch die Hande”"}),u.jsx("p",{children:"In 2016 the MiraSki event landed in Fieberbrunn, part of the Saalbach skiing area in Austria. The “Sonnefeld” chalet suited all of the Mirabeau’ers perfectly and there was plenty room for serious Looping Louie challenges and some occasional table dancing. The pistes were great but due to extensive snowing and some closed pistes, the Enzianhütte, our favourite meet-up place, was pretty crowded early in the afternoon with digital natives. Next to the Après-ski classics we all sang this years’ favorite party song “Hoch die Hande”."}),u.jsx("p",{children:"Fieberbrunn, you were real."}),u.jsxs("figure",{className:"scrapbook",children:[u.jsx("img",{src:"/img/history/2016/1.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2016/2.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2016/3.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2016/4.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2016/5.jpg",className:"scrapbook__image"})]}),u.jsx("h2",{children:"These brave souls where there"})]})}function Ix(){return u.jsx(Xc,{year:2015,HistoryText:Px,attendees:jx})}const jx=[{id:"bvaneck",name:"Bas van Eck"},{id:"bvandermeer",name:"Bran van der Meer"},{id:"cvanantwerpen",name:"Catelijne van Antwerpen"},{id:"chille",name:"Christine Hille"},{id:"crentier",name:"Cyrille Rentier"},{id:"gbranje",name:"Geert Branje"},{id:"heiniw",name:"Heini Withagen"},{id:"iversluis",name:"Iris Versluis"},{id:"jberkelaar",name:"Jantine Berkelaar"},{id:"jbruseker",name:"Jeroen Bruseker"},{id:"jtuitjer",name:"Jeroen Tuitjer"},{id:"knederkoorn",name:"Kees Nederkoorn"},{id:"kliefhebber",name:"Kim Liefhebber"},{id:"lhalff",name:"Lisette Halff"},{id:"mvanhalm",name:"Maaike van Halm - Vos"},{id:"mgroeneweg",name:"Maarten Groeneweg"},{id:"mpanman",name:"Maarten Panman"},{id:"mterhorst",name:"Marco ter Horst"},{id:"mheijboer",name:"Marigo Heijboer"},{id:"mwarnaar",name:"Merette Warnaar"},{id:"mooms",name:"Michiel Ooms"},{id:"nyasuda",name:"Naomi Yasuda"},{id:"nvanderlinde",name:"Nick van der Linde"},{id:"nevers",name:"Niels Evers"},{id:"pversteeg",name:"Paul Versteeg"},{id:"pappelman",name:"Pieter Appelman"},{id:"phalenbeek",name:"Pieter Halenbeek"},{id:"rkonings",name:"Raymond Konings"},{id:"rschmieman",name:"Remco Schmieman"},{id:"rhenneman",name:"Robbert Henneman"},{id:"rvanderark",name:"Roel van der Ark"},{id:"spals",name:"Sjors Pals"},{id:"swartna",name:"Sybren Wartna"},{id:"tdevries",name:"Thijs de Vries"},{id:"wkroes",name:"Wouter Kroes"}];function Px(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"introduction",children:"The stage for the 9th edition of MiraSki was set in Ischgl and introduced the Digital natives to the Kuhstall, and the caftmanship of building a Jäger Train."}),u.jsx("p",{children:"The Ischgl trip started with some small beers near the Austrian border. An embalmed-animal-filled hotel gave us a good night rest and we were ready to attack the slopes of Ischgl in the morning. There was loads of fresh snow, but the weather sometimes forced us to spend some extra time in the “Schatzi bar”; this was no problem."}),u.jsx("p",{children:"MiraSki 2015 edition will go down in the history books for having the first Mirabeau Jäger Train. This seemingly never-ending line of mini Jägermeister bottles was balanced on a row of energy drinks, making one big alcoholic dominos. Of course the execution method was totally agile, complete with iteration and tests; we’re still evaluating the proces…"}),u.jsx("p",{children:"The people from Wens Chalets catered our Chalet Sylvia and they were excellent. At the end of each wonderful day of skiing, the food & wine was great and we had some great laughs! After some drinks in the chalet we often went clubbing, and the Kuhstall-bar in the city centre was our favourite; an honourable mention goes to the ShowArena, with it’s Russian casino atmosphere."}),u.jsx("p",{children:"“Relax., If you can…” is the tagline of this Austrian ski area and this turned out be an accurate description."}),u.jsxs("figure",{className:"scrapbook",children:[u.jsx("img",{src:"/img/history/2015/1.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2015/5.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2015/3.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2015/4.jpg",className:"scrapbook__image"}),u.jsx("img",{src:"/img/history/2015/2.jpg",className:"scrapbook__image"})]}),u.jsx("h2",{className:"alt",children:"These digital heroes weren’t square"})]})}const Rx=[{name:"player",folder:"player",filename:"player.obj"},{name:"jagermeister",folder:"jagermeister",filename:"jagermeister.obj"},{name:"pinetree",folder:"pinetree",filename:"pinetree.obj"},{name:"stone",folder:"stone",filename:"stone.obj"}],Ax={learColor:new window.BABYLON.Color3(.8,-1,.9),ambientColor:new window.BABYLON.Color3(.5,.5,.5),collisionsEnabled:!0,forceWireframe:!1},Ox={options:Ax},En={lanes:[-4,0,4],modifiers:{jagers:0,agility:0,boost:0},moveLength:4},Mx="../../../../..",bx=(t,{name:e,loadedMeshes:n})=>(t[e]=n,t);class Lx{load(e,n){return this._loader=new window.BABYLON.AssetsManager(e),this._loader.useDefaultLoadingScreen=!1,this._addModels(n),this._loadModels()}_loadModels(){return new Promise((e,n)=>{this._loader.onFinish=r=>{const i=r.reduce(bx,{});setTimeout(()=>e(i),1e3)},this._loader.onError=r=>n(r),this._loader.load()})}_addModels(e){e.forEach(n=>{this._loader.addMeshTask(n.name,"",`${Mx}/img/models/${n.folder}/`,n.filename)})}}const Dx=new Lx,Mo={fog:{fogMode:window.BABYLON.Scene.FOGMODE_LINEAR,fogStart:40,fogEnd:250,fogColor:new window.BABYLON.Color4(.75,.9,1,.2)},mountains:{size:400},sky:{backFaceCulling:!1,turbidity:40,luminance:1,azimuth:.25,useSunPosition:!0,sunPosition:new window.BABYLON.Vector3(0,100,0),rayleigh:1,mieDirectionalG:1.2,mieCoefficient:.005},snow:{color1:new window.BABYLON.Color4(.9,.9,1,1),color2:new window.BABYLON.Color4(.9,.8,1,1),colorDead:new window.BABYLON.Color4(0,0,.2,0),minSize:.1,maxSize:.1,minLifeTime:.3,maxLifeTime:2.5,blendMode:window.BABYLON.ParticleSystem.BLENDMODE_ONEONE,gravity:new window.BABYLON.Vector3(0,-9.81,0),direction1:new window.BABYLON.Vector3(-7,30,3),direction2:new window.BABYLON.Vector3(7,15,-3),minAngularSpeed:0,maxAngularSpeed:Math.PI,minEmitPower:1,maxEmitPower:3,updateSpeed:.005}},Gn="../../../../..",hf=[{name:"moveLeft",file:`${Gn}/audio/snowboard_move_left.mp3`,settings:{volume:.1,spatialSound:!0},follow:!0},{name:"moveRight",file:`${Gn}/audio/snowboard_move_right.mp3`,settings:{volume:.1,spatialSound:!0},follow:!0},{name:"background",file:`${Gn}/audio/wind_background_loop.mp3`,settings:{loop:!0,volume:1}},{name:"scream",file:`${Gn}/audio/wilhelm-scream.mp3`,settings:{volume:.2}},{name:"jager",file:`${Gn}/audio/jagermeister.mp3`,settings:{volume:.4}},{name:"boost",file:`${Gn}/audio/turboboost.mp3`,settings:{volume:.2,spatialSound:!0},follow:!0}],Vs={createMesh(t,e,n){let r=window.BABYLON.Mesh.CreateBox(n.name,n.size,t);return r.visibility=0,r.position=new window.BABYLON.Vector3(0,-500,-500),e.forEach(i=>i.parent=r),r.scaling=new window.BABYLON.Vector3(n.scale,n.scale,n.scale),r},cloneMesh(t,e){const n=t.clone();return n.position=e,n}};class Zc{constructor(e,n,r){se(this,"_collider",!1);se(this,"type",null);this._scene=r,this._mesh=Vs.cloneMesh(e,n),this._name=e.name,this._position=n}resetPosition(){this._mesh.position=new window.BABYLON.Vector3(-100,-100,-100),this._collider&&(this._collider.position=this._mesh.position)}dispose(){this._mesh.dispose(),this._collider&&this._collider.dispose()}getMesh(){return this._mesh}}const ed={_velocity:1,_active:!1,move(t){this._mesh.position.z-=t*this._velocity,this._collider&&(this._collider.position.z=this._mesh.position.z)},setPosition(t){this._mesh.position=t,this._collider&&(this._collider.position=t)},shouldDeactivate(){return this._mesh.position.z<-18},activate(t){this._active=!0,t&&this.setPosition(t)},deactivate(){this._active=!1},isActive(){return this._active}};class Fx{constructor(){se(this,"_playCount",0);se(this,"_clock",0);se(this,"_gameOver",!1)}reset(){this._gameOver=!1,this._clock=0}updateClock(){this._clock++}updatePlaycount(){this._playCount++}get playCount(){return this._playCount}get gameIsOver(){return this._gameOver}get clock(){return this._clock}set gameIsOver(e){this._gameOver=e}}const we=new Fx,P_={registerActions(){const t=this._collider?this._collider:this._mesh,e=St.getPlayer()._mesh,n=new window.BABYLON.SwitchBooleanAction({trigger:window.BABYLON.ActionManager.OnIntersectionEnterTrigger,parameter:e},we,"_gameOver");t.actionManager=new window.BABYLON.ActionManager(this._scene),t.actionManager.registerAction(n)}};class R_ extends Zc{constructor(e,n,r){super(e,n,r),this.addCollider(),this.registerActions(),this.type="tree"}addCollider(){this._collider=window.BABYLON.Mesh.CreateBox("collider",2,this._scene),this._collider.position=this._position,this._collider.scaling.y=4,this._collider.visibility=0}scale(){this._mesh.scaling.x=1.1,this._mesh.scaling.z=1.1,this._mesh.scaling.y=5.5}}Object.assign(R_.prototype,ed,P_);let Is;const Bx=new Uint8Array(16);function zx(){if(!Is&&(Is=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Is))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Is(Bx)}const ve=[];for(let t=0;t<256;++t)ve.push((t+256).toString(16).slice(1));function Ux(t,e=0){return ve[t[e+0]]+ve[t[e+1]]+ve[t[e+2]]+ve[t[e+3]]+"-"+ve[t[e+4]]+ve[t[e+5]]+"-"+ve[t[e+6]]+ve[t[e+7]]+"-"+ve[t[e+8]]+ve[t[e+9]]+"-"+ve[t[e+10]]+ve[t[e+11]]+ve[t[e+12]]+ve[t[e+13]]+ve[t[e+14]]+ve[t[e+15]]}const Wx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ff={randomUUID:Wx};function A_(t,e,n){if(ff.randomUUID&&!e&&!t)return ff.randomUUID();t=t||{};const r=t.random||(t.rng||zx)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return Ux(r)}const Vx={obstacles:{amount:0,multiplier:1},points:{amount:0,multiplier:.1},sections:{amount:0,multiplier:5},jagers:{amount:0,multiplier:50}},Hx={options:{jagers:{0:10,2:20,4:35,6:50},agility:{0:1.2,1:1.1,2:1,3:.9,4:.8,5:.75,6:.7},boost:{0:120,1:150,2:180,3:210,4:240,5:270,6:300}}},$x=t=>Object.entries(t).reduce((e,[n,r])=>(e[n]=Hx.options[n][r],e),{});class Yx{constructor(){se(this,"_modifiers",null)}load(e){this._modifiers=$x(e)}get modifiers(){return this._modifiers}}const at=new Yx;class Gx{constructor(){se(this,"_score",{})}reset(){this._score=Object.entries(Vx).reduce((e,[n,r])=>(e[n]={...r},n==="jagers"&&(e[n].multiplier=at.modifiers[n]),e),{})}getTotal(){const e=Object.entries(this.score).map(([n,r])=>r.amount*r.multiplier).reduce((n,r)=>n+=r,0);return Math.floor(e)}updateScore(e){we.gameIsOver||(e==="jagers"&&yt.jagerScore(),this._score[e].amount++)}save(e){if(e){const n={name:yt.getName(),score:this.getTotal()};return E_(Er(Sr,"leaderboard/"+A_()),n)}}get score(){return this._score}}const vt=new Gx;class O_ extends Zc{constructor(e,n,r,i){super(e,n,r),this._position=n,this._game=i,this.collected=!1,this.load(),this.type="jagermeister"}load(){this.setupAnimations(),this.registerActions()}registerActions(){const e=St.getPlayer(),n=new window.BABYLON.ExecuteCodeAction({trigger:window.BABYLON.ActionManager.OnIntersectionEnterTrigger,parameter:e._mesh},()=>this.beginCollectAnimation());this._mesh.actionManager=new window.BABYLON.ActionManager(this._scene),this._mesh.actionManager.registerAction(n)}beginCollectAnimation(){if(this.collected)return;this.collected=!0,vt.updateScore("jagers"),this.addToBoostMeter();let e=new window.BABYLON.Animation("position","position.y",60,window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);const n=[];n.push({frame:0,value:this._mesh.position.y}),n.push({frame:60,value:this._mesh.position.y+40}),e.setKeys(n),Xe.playSound("jager"),this._scene.beginDirectAnimation(this._mesh,[e],0,60,!1,1)}setupAnimations(){this.setupRotateAnimation()}setupRotateAnimation(){let e=new window.BABYLON.Animation("rotate","rotation.y",60,window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,window.BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);const n=[{frame:0,value:0},{frame:100,value:Math.PI}];e.setKeys(n),this._mesh.animations.push(e),this._scene.beginAnimation(this._mesh,0,100,!0)}move(e){this.collected&&(e/=4),this._mesh.position.z-=e}resetPosition(){super.resetPosition(),this.collected=!1}addToBoostMeter(){kt.boostTime<100&&(kt.boostTime=kt.boostTime+10)}}Object.assign(O_.prototype,ed);class M_ extends Zc{constructor(e,n,r){super(e,n,r),this.registerActions(),this.type="stone"}}Object.assign(M_.prototype,ed,P_);const pf="moveLeft",mf="moveRight";class Kx{constructor(e,n){this._model=e,this._scene=n,this._currentPosition=0,this._animations=[],this.load()}load(){this._createMesh(),this._loadModel()}showIntroAnimation(){const e=[{frame:0,value:this._mesh.position.z},{frame:60,value:-10}],n=new window.BABYLON.Animation("Intro","position.z",60,window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);n.setKeys(e),this._scene.beginDirectAnimation(this._mesh,[n],0,60)}moveLeft(){const e=this._getMoveTo(pf);e!==!1&&!we.gameIsOver&&(Xe.playSound("moveLeft"),this._moveToLane(e))}moveRight(){const e=this._getMoveTo(mf);e!==!1&&!we.gameIsOver&&(Xe.playSound("moveRight"),this._moveToLane(e))}reset(){this._mesh.position.x=0,this._mesh.position.z=-25,this._currentPosition=0}getMesh(){return this._mesh}get position(){return this._mesh.position}_createMesh(){this._mesh=window.BABYLON.Mesh.CreateBox("player",2,this._scene),this._mesh.scaling.y=3,this._mesh.scaling.x=.4,this._mesh.scaling.z=.5,this._mesh.position.y=3,this._mesh.visibility=0,this._mesh.bakeCurrentTransformIntoVertices(),this._mesh.position.z=-25}_loadModel(){this._model.forEach(e=>{e.parent=this._mesh,e.rotation.y=Math.PI/2}),this._mesh.scaling=new window.BABYLON.Vector3(.8,.8,.8)}_moveToLane(e){const n=e>this._currentPosition?10:-10;this._currentPosition=e,this._stopAnimations(),this._setMoveAnimations([{name:"Move",value:"position.x",keyframes:[{frame:0,value:this._mesh.position.x},{frame:20*at.modifiers.agility,value:e}],duration:20*at.modifiers.agility,blend:!1},{name:"Turn",value:"rotation.y",keyframes:[{frame:0,value:0},{frame:15,value:Math.PI/n},{frame:30*at.modifiers.agility,value:0}],duration:30*at.modifiers.agility,blend:!0}])}_setMoveAnimations(e){const n=new window.BABYLON.ExponentialEase;n.setEasingMode(window.BABYLON.EasingFunction.EASINGMODE_EASEINOUT),e.forEach(r=>{const i=new window.BABYLON.Animation(r.name,r.value,60,window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);i.setKeys(r.keyframes),i.enableBlending=r.blend,i.blendingSpeed=.05,i.setEasingFunction(n),this._animations.push(this._scene.beginDirectAnimation(this._mesh,[i],0,r.duration))})}_stopAnimations(){this._animations.forEach(e=>e.stop()),this._animations=[]}_getMoveTo(e){const n=Math.round(this._currentPosition);if(e===pf)return n>En.lanes[0]?n-En.moveLength:!1;if(e===mf)return n<En.lanes[En.lanes.length-1]?n+En.moveLength:!1}}const ta={jagermeister:{name:"jagermeister",size:1,scale:2},tree:{name:"tree",size:3,scale:1.2},stone:{name:"stone",size:.4,scale:4}};class Qx{load(e,n){return this._createMeshes(e,n),this._renderMeshes(e,n),!0}getMoveables(){return this._moveables}getPlayer(){return this._player}_createMeshes(e,{stone:n,pinetree:r,jagermeister:i,player:s}){this._jagermeister=Vs.createMesh(e,i,ta.jagermeister),this._tree=Vs.createMesh(e,r,ta.tree),this._stone=Vs.createMesh(e,n,ta.stone),this._player=s}_renderMeshes(e){this._player=new Kx(this._player,e);const n=new window.BABYLON.Vector3(-100,-100,-100),r=[...new Array(50).keys()].map(()=>new R_(this._tree,n,e)),i=[...new Array(50).keys()].map(()=>new M_(this._stone,n,e)),s=[...new Array(15).keys()].map(()=>new O_(this._jagermeister,n,e,e._game));this._moveables=[...r,...i,...s]}}const St=new Qx;class qx{load(e){this._scene=e,this._mute=localStorage.getItem("sound"),this.sounds=hf.map(this._loadSound.bind(this)),this._mute&&this._mute==="mute"&&this.mute()}playSound(e){const n=this.sounds.find(({name:r})=>r===e);n&&n.play()}stopBackgroundSound(){this.sounds.find(({name:e})=>e==="background").stop()}stopBoostSound(){this.sounds.find(e=>e.name==="boost").stop()}mute(){this.sounds.forEach(e=>e.setVolume(0)),localStorage.setItem("sound","mute")}unmute(){this.sounds.forEach(e=>{const n=hf.find(r=>r.name===e.name);n&&e.setVolume(n.settings.volume)}),localStorage.setItem("sound","unmute")}_loadSound(e){let n=new window.BABYLON.Sound(e.name,e.file,this._scene,null,e.settings);return e.follow&&n.attachToMesh(St.getPlayer().getMesh()),n}}const Xe=new qx;class Jx{load(e,n){this._element=e,this._game=n,this._cacheSelectors(),this._addEventListeners(),this._initSoundToggle()}_cacheSelectors(){this._menu=this._element.querySelector(".game__menu"),this._scoreContainer=this._element.querySelector(".game__score-container"),this._score=this._element.querySelector(".game__score"),this._finalScore=this._element.querySelector("[data-final-score]"),this._nameInput=this._element.querySelector("[data-name]"),this._saveForm=this._element.querySelector("[data-save-score]"),this._sound=this._element.querySelector("[data-sound]"),this._boost=this._element.querySelector("[data-boost]"),this._gameOver=this._element.querySelector(".gameover")}_addEventListeners(){this._menu.addEventListener("click",e=>this._handleClick(e)),this._saveForm.addEventListener("submit",e=>this._saveGame(e)),this._nameInput&&this._nameInput.setAttribute("required",!0),this._sound.addEventListener("change",e=>this._toggleSound(e.target.checked))}_handleClick(e){const n=typeof e.target.dataset.start<"u",r=typeof e.target.dataset.rules<"u";n&&!we.playCount&&this._game.startGame(),r&&this._showRules(e)}_saveGame(e){e.preventDefault(),vt.save(e.target.action).then(()=>this._game.startGame()).catch(()=>this._game.startGame())}_initSoundToggle(){const e=localStorage.getItem("sound");e&&(this._sound.checked=e&&e!=="mute")}_showRules(){this._menu.classList.add("game__menu--rules")}_toggleSound(e){e?Xe.unmute():Xe.mute()}hideMenu(){this._menu.classList.remove("game__menu--hidden")}onGameStart(){this._nameInput&&this._nameInput.blur(),this._menu.classList.add("game__menu--hidden"),this._gameOver.classList.add("gameover--disabled"),this._menu.classList.remove("game__menu--rules"),this._scoreContainer.classList.add("game__score-container--visible"),this._sound.parentNode.classList.add("game__sound--visible"),this._boost.parentNode.parentNode.classList.add("game__boost--visible")}onGameStop(e){this._nameInput&&setTimeout(()=>{this._nameInput.focus()},250),this._scoreContainer.classList.remove("game__score-container--visible"),this._gameOver.classList.remove("gameover--disabled"),this._sound.parentNode.classList.remove("game__sound--visible"),this._boost.parentNode.parentNode.classList.remove("game__boost--visible"),this._finalScore.innerHTML=`${e}`}displayScore(e){this._score.innerHTML=`${e}`}jagerScore(){this._score.classList.add("game__score--jager"),setTimeout(()=>this._score.classList.remove("game__score--jager"),200)}getName(){return this._nameInput?this._nameInput.value:null}setBoostValue(e){this._boost.style.width=`${e}%`}}const yt=new Jx,Kn=(t,e)=>e.find(n=>n===t),Xx=[33,37,65],Zx=[34,39,68],gf=[38,87,190],ek=[32],tk=[27];class nk{constructor(){se(this,"_game",null);se(this,"_keydown",!1);se(this,"_boostIsActive",!1)}load(e){this._game=e,this._addEventListeners()}get boostIsActive(){return this._boostIsActive}set boostIsActive(e){this._boostIsActive=e}_addEventListeners(){document.addEventListener("keydown",e=>this._movePlayerLeft(e)),document.addEventListener("keydown",e=>this._movePlayerRight(e)),document.addEventListener("keydown",e=>this._startBoost(e)),document.addEventListener("keyup",e=>this._stopBoost(e)),document.addEventListener("keydown",e=>this._startGame(e)),window.addEventListener("resize",()=>this._onResize(),!1),window.dispatchEvent(new Event("resize"))}_movePlayerLeft({keyCode:e}){Kn(e,Xx)&&St.getPlayer().moveLeft()}_movePlayerRight({keyCode:e}){Kn(e,Zx)&&St.getPlayer().moveRight()}_startBoost({keyCode:e}){Kn(e,gf)&&(this._keydown=!0,this._boostIsActive=!0,Xe.playSound("boost"))}_stopBoost({keyCode:e}){Kn(e,gf)&&(this._keydown=!1,this._boostIsActive=!1,Xe.stopBoostSound())}_startGame({keyCode:e}){(Kn(e,ek)&&!we.playCount||Kn(e,tk))&&this._game.startGame()}_onResize(){this._game._element.width=document.body.offsetWidth,this._game._element.height=document.body.offsetWidth/2}}const Qn=new nk,Ut={speed:1.8,agility:1.25,acceleration:.015,accelerationTime:2,speedIncrement:0,maxSpeed:3,boostSpeed:1,boost:120,boostRestoreAmount:.05};class rk{constructor(){se(this,"_boostTime",Ut.boost);se(this,"_speed",Ut.speed);se(this,"_speedIncrement",Ut.speedIncrement)}load(){this._boostTime=at.modifiers.boost}update(){const e=Qn.boostIsActive&&this._boostTime>0,n=this._boostTime<at.modifiers.boost,r=we.clock%(60*Ut.accelerationTime)===0&&we.clock!==0;e?this._boost():n&&this._rechargeBoost(),r&&this._incrementSpeed()}reset(){this._boostTime=at.modifiers.boost,yt.setBoostValue(at.modifiers.boost)}get speed(){return this._speed+this._speedIncrement+this.boostSpeed}get boostSpeed(){return Qn.boostIsActive?Ut.boostSpeed:0}get boostTime(){return this._boostTime}set boostTime(e){this._boostTime=e}_boost(){this._boostTime--,yt.setBoostValue(Math.floor(this._mapBoostTime(this._boostTime)))}_rechargeBoost(){this._boostTime+=Ut.boostRestoreAmount,yt.setBoostValue(this._mapBoostTime(this._boostTime)),Qn.boostIsActive&&(Xe.stopBoostSound(),Qn.boostIsActive=!1)}_incrementSpeed(){Math.ceil(this.speed)<=Ut.maxSpeed&&!Qn.boostIsActive&&(this._speedIncrement+=Ut.acceleration)}_mapBoostTime(e){return e/at.modifiers.boost*100}}const kt=new rk,ik="../../../../..";class sk{load(e){this._emitRate=500,this._scene=e,this.createMesh(),this.createParticleSystem(),this.position(),this.rotation()}createMesh(){this._mesh=window.BABYLON.Mesh.CreateBox("foutain",.1,this._scene)}createParticleSystem(){this._particleSystem=new window.BABYLON.ParticleSystem("particle",3500,this._scene),this._particleSystem.particleTexture=new window.BABYLON.Texture(`${ik}/img/textures/driehoek.svg`,this._scene),this._particleSystem.emitter=this._mesh,this._particleSystem.minEmitBox=new window.BABYLON.Vector3(-30,0,0),this._particleSystem.maxEmitBox=new window.BABYLON.Vector3(30,0,0),Object.assign(this._particleSystem,Mo.snow),this._particleSystem.emitRate=this._emitRate*kt.speed,this._particleSystem.start()}position(){this._mesh.position.y=20,this._mesh.position.z=15}rotation(){this._mesh.rotation.x=Math.PI/3,this._mesh.rotation.z=Math.PI}setUpdateSpeed(e){const n=Mo.snow.updateSpeed*e;this._particleSystem.updateSpeed!==n&&(this._particleSystem.updateSpeed=n)}getMesh(){return this._mesh}}const ok=new sk,lk={load(t){this._scene=t,this._drawSky(),this._drawFog(),this._drawSnow(),this._setupLights()},_drawSky(){const t=new window.BABYLON.SkyMaterial("skyMaterial",this._scene),e=window.BABYLON.Mesh.CreateBox("skyBox",1e3,this._scene);Object.assign(t,Mo.sky),e.material=t,e.position.y=500},_drawFog(){Object.assign(this._scene,Mo.fog)},_drawSnow(){ok.load(this._scene)},_setupLights(){this._light=new window.BABYLON.HemisphericLight("1",new window.BABYLON.Vector3(0,400,20),this._scene),this._light.diffuse=new window.BABYLON.Color4(.88,.94,1,.5),this._light.specular=new window.BABYLON.Color3(0,0,0),this._light.intensity=1,this._pointLights=[new window.BABYLON.PointLight("1",new window.BABYLON.Vector3(-40,900,10),this._scene),new window.BABYLON.PointLight("1",new window.BABYLON.Vector3(40,900,10),this._scene)];for(const t of this._pointLights)t.intensity=.015,t.diffuse=new window.BABYLON.Color3(1,1,1)}};class ak{constructor(){se(this,"_length",500);se(this,"_width",200);se(this,"_stepSize",10);se(this,"_fieldSize",10)}renderGround(e){const n=new window.BABYLON.Mesh.CreateRibbon("ground",this._getPaths(),!1,!1,null,e);return n.convertToFlatShadedMesh(),n}get length(){return this._length}_getPaths(){let e=[];for(let n=-this._width;n<=this._width;n+=this._stepSize)e.push(this._createPath(n));return e}_createPoints(e,n,r){let i={x:e,y:Math.random()+.5,z:n};if(e<-this._fieldSize||e>this._fieldSize){let s=e<0?e*-1:e;s*=s*.001;const o=n===0||n===500?4:i.y*4;i.y=s+o}else i.y=n===0||n===500?0:i.y;r.push(new window.BABYLON.Vector3(i.x,i.y,i.z))}_createPath(e){let n=[];for(let r=0;r<=this._length;r+=10)this._createPoints(e,r,n);return n}}const js=new ak,_f={map:{t:{list:"trees",mesh:"tree"},j:{list:"jagermeisters",mesh:"jagermeister"},r:{list:"stones",mesh:"stone"}},active:{tree:[],stone:[],jagermeister:[]},modes:[{mode:"insane",value:3e3},{mode:"brutal",value:2e3},{mode:"hard",value:1e3},{mode:"medium",value:400},{mode:"easy",value:0}]},uk=[`-|-|-
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
    -|-|-`],ck=[`-|-|-
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
    -|-|-`],dk=[`r|-|r
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
    -|-|-`],hk=[`-|-|-
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
    -|-|-`],fk=[`-|-|-
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
    -|-|-`],pk={easy:uk,medium:ck,hard:dk,brutal:hk,insane:fk};class bo{static parsePattern(e){return e.split(/\n/).reverse().reduce(bo.parseRow,[])}static parseRow(e,n,r){const i=r*25+500;return n.split("|").map(s=>s.replace(/^\s+|\s+$/g,"")).forEach((s,o)=>{s.length&&s!=="-"&&e.push({type:_f.map[s].mesh,position:new window.BABYLON.Vector3(En.lanes[o],2,i)})}),e}load(){this._index=0,this._nodes=St.getMoveables()}create(){this._setMode(),this._setDifficulty(this._mode),this._setIndex(),this._createPattern(bo.parsePattern(this._activePattern[this._index]))}update(e){this._getActiveNodes().forEach(n=>{n.move(e),n.shouldDeactivate()&&(n.deactivate(),n.resetPosition(),vt.updateScore("obstacles"))})}reset(){this._index=0,this._getActiveNodes().forEach(e=>{e.deactivate(),e.resetPosition()}),this._setMode(),this._setDifficulty(this._mode)}_getActiveNodes(){return this._nodes.filter(e=>e.isActive())}_setMode(){const e=vt.getTotal();this._mode=_f.modes.find(({value:n})=>e>=n).mode}_setDifficulty(e){this._activePattern=pk[e]}_setIndex(){const n=this._activePattern.map((i,s)=>s!==this._index?s:!1).filter(i=>i!==!1),r=Math.floor(Math.random()*n.length);this._index=n[r]}_createPattern(e){e.forEach(({position:n,type:r})=>{this._nodes.find(s=>s.type===r&&!s.isActive()).activate(n)})}}const Hs=new bo;class Lo{constructor(){se(this,"_grounds",[])}static resetGround(e,n){e.position.z=js.length-20-n}static moveGround(e,n){e.position.z-=n}load(e){this._scene=e}update(e){this._grounds.forEach(n=>Lo.moveGround(n,e)),this.shouldChangeOrder(e)&&this._changeOrder(e)}render(){this._grounds=[this._scene,this._scene].map(js.renderGround.bind(js)),this.reset()}reset(){const[e,n]=this._grounds;e.position.z=-10,n.position.z=js.length-20}shouldChangeOrder(e){const[n]=this._grounds,r=n.position.z;return r<-500&&r>-501-e}_changeOrder(e){const[n]=this._grounds;Lo.resetGround(n,e),this._grounds.reverse(),Hs.create(),vt.updateScore("sections")}}const Ps=new Lo;class mk{constructor(){se(this,"_camera",null)}load(e){this._camera=new window.BABYLON.FreeCamera("camera",new window.BABYLON.Vector3(0,7,-20),e),e.activeCamera=this._camera,e.activeCamera.rotation.x=Math.PI/25}update(){this._camera.position.x=.65*St.getPlayer().position.x}}const vf=new mk;class gk{constructor(e,n){this._element=e,this._canvas=this._element.querySelector("canvas"),this._options=Object.assign({},En.modifiers,n),this._startEngine(),this._createScene(),this._load()}startGame(){!we.gameIsOver&&we.playCount||(we.playCount&&this._reset(),yt.onGameStart(),St.getPlayer().showIntroAnimation(),Xe.stopBackgroundSound(),Xe.playSound("background"),this._render())}stopGame(){this._engine.stopRenderLoop(),we.updatePlaycount(),we.gameIsOver=!0,Xe.playSound("scream"),we.playCount&&yt.onGameStop(vt.getTotal())}_startEngine(){this._engine=new window.window.BABYLON.Engine(this._canvas,!0),this._engine.enableOfflineSupport=!1,this._engine.setHardwareScalingLevel(1)}_createScene(){this._scene=new window.window.BABYLON.Scene(this._engine),Object.assign(this._scene,Ox.options)}_load(){yt.load(this._element,this),at.load(this._options.modifiers),vt.reset(),Qn.load(this),Dx.load(this._scene,Rx).then(e=>{St.load(this._scene,e),lk.load(this._scene),Hs.load(),Ps.load(this._scene),Xe.load(this._scene),kt.load(),vf.load(this._scene),yt.hideMenu(),Ps.render(),this._setupBeforeRender()})}_setupBeforeRender(){this._scene.render(),this._scene.registerBeforeRender(()=>{this._update()})}_reset(){vt.reset(),Hs.reset(),kt.reset(),we.reset(),St.getPlayer().reset(),Ps.reset()}_render(){this._engine.runRenderLoop(()=>{this._scene.render(),vt.updateScore("points"),yt.displayScore(vt.getTotal()),we.updateClock()})}_update(){Ps.update(kt.speed),Hs.update(kt.speed),kt.update(),we.gameIsOver?this.stopGame():vf.update()}}function _k({user:t}){const e=x.useRef();x.useEffect(()=>{window.MIRASKI_GAME||(window.MIRASKI_GAME=new gk(e.current,{modifiers:t.modifiers}))},[]);const n=[t.modifiers.jagers,t.modifiers.agility,t.modifiers.boost];return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"game__mobile-text",children:u.jsx("div",{className:"wrapper",children:u.jsxs("article",{children:[u.jsx("h1",{children:"Sorry"}),u.jsx("p",{className:"introduction",children:"Unfortunately, the game works only on a device with at least 1024px of screen width and a keyboard."})]})})}),u.jsxs("section",{ref:e,className:"game",children:[u.jsx("canvas",{}),u.jsxs("div",{className:"game__score-container",children:["score:",u.jsx("span",{className:"game__score"})]}),u.jsxs("span",{className:"game__sound game__sound--disabled",children:[u.jsx("input",{type:"checkbox",className:"game__sound-toggle",name:"sound","data-sound":!0,id:"sound",defaultChecked:!0}),u.jsx("label",{className:"game__sound-state",htmlFor:"sound"})]}),u.jsxs("div",{className:"game__boost",children:[u.jsx(vu,{name:t.name,shortname:t.shortname}),u.jsx("p",{className:"game__boost-text",children:"t-t-turboboost"}),u.jsx("div",{className:"game__boost-bar",children:u.jsx("span",{className:"game__boost-fill","data-boost":!0})})]}),u.jsxs("div",{className:"gameover gameover--disabled",children:[u.jsx("div",{className:"gameover__background"}),u.jsxs("div",{className:"gameover__text",children:[u.jsx("h2",{className:"gameover__heading",children:"Game over!"}),u.jsx("p",{className:"gameover__finalscoretext",children:"your final score:"}),u.jsx("p",{className:"gameover__finalscore","data-final-score":!0,children:"0"})]}),u.jsx("form",{className:"gameover__form",action:"/game/save","data-save-score":!0,children:u.jsxs("ol",{className:"form-fields",children:[u.jsxs("li",{className:"form-field",children:[u.jsx("label",{htmlFor:"game__username",children:"Name"}),u.jsx("input",{type:"text","data-name":!0,id:"game__username",className:"game__username game__username--hidden",pattern:"^[a-zA-Z0-9]{2,15}$",placeholder:"Bruseker"})]}),u.jsx("li",{className:"form-field",children:u.jsx("button",{className:"btn",type:"submit",children:"Save score"})}),u.jsx("li",{className:"form-field",children:u.jsx("a",{href:"/#/game/leaderboard",children:"Check out the leaderboard"})})]})})]}),u.jsxs("div",{className:"game__menu game__menu--hidden",children:[u.jsxs("div",{className:"game__user-info",children:[u.jsx(vu,{name:t.name,shortname:t.shortname}),u.jsxs("div",{className:"game__stats",children:[u.jsx("h3",{children:t.name}),u.jsxs("div",{className:"game__modifiers",children:[u.jsxs("div",{className:"game__modifier",children:[u.jsx("svg",{width:"42px",height:"42px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("g",{fill:"none",transform:"translate(4.000000, 3.000000)",children:u.jsx("g",{transform:"translate(-777.000000, -355.000000)",children:u.jsx("g",{transform:"translate(541.000000, 296.000000)",children:u.jsxs("g",{children:[u.jsx("polygon",{stroke:"#A8E0FB",strokeWidth:"5",points:"239.303847 62.4269713 252.812475 60 269.191257 67.2828118 267.780095 85.8368906 247.49637 95.5442063 236 82.1767894"}),u.jsx("polygon",{className:"game__stats-value",stroke:"#1F94CA",strokeWidth:"5",strokeDashoffset:110-n[0]/6*110,points:"239.303847 62.4269713 252.812475 60 269.191257 67.2828118 267.780095 85.8368906 247.49637 95.5442063 236 82.1767894"})]})})})})}),u.jsx("p",{children:"Jäger"})]}),u.jsxs("div",{className:"game__modifier",children:[u.jsx("svg",{width:"42px",height:"42px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("g",{fill:"none",transform:"translate(4.000000, 3.000000)",children:u.jsx("g",{transform:"translate(-680.000000, -355.000000)",children:u.jsx("g",{transform:"translate(541.000000, 296.000000)",children:u.jsx("g",{children:u.jsxs("g",{transform:"translate(131.000000, 50.000000)",children:[u.jsx("polygon",{stroke:"#A8E0FB",strokeWidth:"5",points:"25.1735314 9.38220229 41.928762 19.3144939 40.7923905 34.4660643 22.0530551 44.8630813 10.2266467 34.4278822 8.44841462 16.0409104"}),u.jsx("polygon",{className:"game__stats-value",stroke:"#1F94CA",strokeWidth:"5",strokeDashoffset:110-n[1]/6*110,points:"25.1735314 9.38220229 41.928762 19.3144939 40.7923905 34.4660643 22.0530551 44.8630813 10.2266467 34.4278822 8.44841462 16.0409104"})]})})})})})}),u.jsx("p",{children:"Agility"})]}),u.jsxs("div",{className:"game__modifier",children:[u.jsx("svg",{width:"42px",height:"42px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("g",{fill:"none",transform:"translate(-872.000000, -353.000000)",children:u.jsx("g",{transform:"translate(541.000000, 296.000000)",children:u.jsx("g",{transform:"translate(326.300781, 50.444231)",children:u.jsxs("g",{children:[u.jsx("polygon",{stroke:"#A8E0FB",strokeWidth:"5",points:"19.9690017 9.69910387 39.4902793 16.9736928 39.626149 34.5614267 29.3881426 44.2964417 10.5323527 34.5233102 9.01571914 21.6237177"}),u.jsx("polygon",{className:"game__stats-value",stroke:"#1F94CA",strokeWidth:"5",strokeDashoffset:110-n[2]/6*110,points:"19.9690017 9.69910387 39.4902793 16.9736928 39.626149 34.5614267 29.3881426 44.2964417 10.5323527 34.5233102 9.01571914 21.6237177"})]})})})})}),u.jsx("p",{children:"Boost"})]})]})]})]}),u.jsxs("div",{className:"game__buttons",children:[u.jsx("button",{className:"btn",type:"button","data-start":!0,children:"Spielen!"}),u.jsx("button",{className:"btn btn--secondary",type:"button","data-rules":!0,children:"About this game"})]}),u.jsx("div",{className:"game__about-game",children:u.jsxs("div",{className:"content",children:[u.jsx("h1",{children:"About"}),u.jsx("p",{children:"Carve your way through the digital MiraSki slopes as you collect the Jäger shots for extra points. Weave past trees, rocks and snow storms in this 3rd person slalom adventure."}),u.jsx("p",{children:"The objective is to get as far as possible without dying, the game is infinite. You play as a snowboarder and must navigate between the obstacles on the piste which cause immediate death. You automatically slide down down the mountain, but you can go left or right to any avoid collision with the trees and earn points. Use the arrow keys ([→] [←]) on your keyboard to guide your character down the mountain."}),u.jsx("p",{children:"Use the up arrow key ([↑]) to activate your turbo-boost, which is the bar at the top of the screen. The bar refills slowly by itself, but fills quicker when you collect Jäger shots."}),u.jsx("p",{children:"At the end you can add your score to the leaderboard with the other players that have played the MiraSki game."}),u.jsx("p",{children:u.jsx("a",{href:"/#/game/leaderboard",children:"Check out the leaderboard"})}),u.jsx("button",{className:"btn game__start",type:"button","data-start":!0,children:"Spielen!"})]})})]})]})]})}function vk(){const t={name:"Tennis Dimmers",shortname:"swartna",modifiers:{jagers:6,agility:3,boost:2}};return u.jsx(_k,{user:t})}function yk(t){const e=(r,i)=>r.score<i.score?1:r.score>i.score?-1:0,n=(r,i)=>(r.find(s=>s.name===i.name)===void 0&&r.push(i),r);return t.slice().sort(e).reduce(n,[])}function wk(){const t=Er(Sr,"leaderboard"),[e,n,r]=Jc(t);return u.jsxs("article",{children:[u.jsx("h1",{children:"Scores"}),u.jsx("p",{children:"Who’s ruling their offline winter-skills and is making it count in the digital world? Check out who’s on top of the MiraSki Game Leaderboard."}),u.jsxs("p",{children:["Beat the others, ",u.jsx("a",{href:"/#/game",children:"play the game"}),"."]}),u.jsx("div",{className:"leaderboard-container",children:!n&&!r&&u.jsx("ol",{className:"leaderboard leaderboard--part1",children:yk(e).map((i,s)=>u.jsxs("li",{className:"leaderboard__record",children:[u.jsx("mark",{className:"leaderboard__name",children:i.name}),u.jsx("small",{className:"leaderboard__score",children:i.score})]},s))})})]})}const Ek=({elements:t})=>({code:t.code.value,name:t.name.value,email:t.email.value,phone:t.phone.value,activity:[t["activity-skiing"].checked,t["activity-snowboarding"].checked,t["activity-apres-ski"].checked],dateOfBirth:t["date-of-birth"].value,acknowledgements:[t["acknowledge-paid"].checked,t["acknowledge-norefund"].checked,t["acknowledge-cancellation"].checked]}),Sk=t=>{const e=[];return[["code",Ck],["name",xk],["email",Nk],["phone",Tk],["activity",Ik],["dateOfBirth",Pk],["acknowledgements",Rk]].forEach(([n,r])=>{r(t[n])||e.push(n)}),e},Ck=t=>t.length===4,xk=t=>t.length<6?!1:!/\s{2,}/.test(t),kk=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,Nk=t=>t.length>3&&kk.test(t),Tk=t=>t.length<10||t.length>13?!1:/^((0031)|(\+31)|0)6\d{8}$/.test(t),Ik=t=>t[0]===!0||t[1]===!0||t[2]===!0,jk=/^[0-3]\d-[01]\d-[12]\d{3}$/,Pk=t=>jk.test(t),Rk=t=>t[0]===!0&&t[1]===!0&&t[2]===!0;function Ak(){const{code:t}=zm(),e=z0(),[n]=px(Er(Sr,"attendeesLimit")),[r]=Jc(Er(Sr,"attendees"));if(n&&r&&r.length>=n)return window.location.hash="/sign-up/full";const[i,s]=x.useState([]),o=c=>i.includes(c),l=async c=>{c.preventDefault();const h=Ek(c.currentTarget),d=Sk(h);if(d.length>0)return s(d),scroll(0,0),!1;const f=A_(),_={datetime:+new Date,...h};try{await E_(Er(Sr,"orders/"+f),_)}catch(v){return console.error(v),e("/error/create-order"),!1}e(`/pay/${f}`)},a={code:"Invite code is invalid",name:"Name is invalid",email:"Email is invalid",phone:"Phone is invalid",activity:"Pick at least one activity",dateOfBirth:"Date of birth is invalid",acknowledgements:"You must agree with all conditions"};return u.jsxs("article",{children:[u.jsx("h1",{children:"Sign up"}),u.jsx("p",{children:"Awesome that you’re joining the MiraSki event!"}),i.length>0&&u.jsxs("div",{className:"form-field form-field--error",children:[u.jsx("p",{className:"notification notification--error",children:"The following errors were found:"}),u.jsx("ol",{className:"notification__errorlist",children:i.map(c=>u.jsx("li",{className:"form--error",children:a[c]},c))})]}),u.jsxs("form",{onSubmit:l,children:[u.jsxs("ol",{className:"form-fields",children:[u.jsxs("li",{className:`form-field ${o("code")?"form-field--error":""}`,children:[u.jsx("label",{htmlFor:"code",children:"Your unique invite code"}),u.jsx("input",{id:"code",name:"code",type:"text",value:t,disabled:!0})]}),u.jsxs("li",{className:`form-field ${o("name")?"form-field--error":""}`,children:[u.jsx("label",{htmlFor:"name",children:"Full Name"}),u.jsx("input",{id:"name",name:"name",type:"text"})]}),u.jsxs("li",{className:`form-field ${o("email")?"form-field--error":""}`,children:[u.jsx("label",{htmlFor:"email",children:"Email address"}),u.jsx("input",{type:"email",id:"email",name:"email"})]}),u.jsxs("li",{className:`form-field ${o("phone")?"form-field--error":""}`,children:[u.jsx("label",{htmlFor:"phone",children:"Mobile phone"}),u.jsx("input",{id:"phone",name:"phone",type:"tel"}),u.jsx("p",{children:u.jsx("small",{children:"Enter a phone number which has a WhatsApp account"})})]}),u.jsxs("li",{className:"form-field",children:[u.jsx("label",{children:"I’ll be mostly:"}),u.jsxs("ol",{className:"form-fields",children:[u.jsx("li",{children:u.jsxs("label",{htmlFor:"activity-skiing",children:[u.jsx("input",{id:"activity-skiing",name:"activity-skiing",type:"checkbox"})," ","Skiing"]})}),u.jsx("li",{children:u.jsxs("label",{htmlFor:"activity-snowboarding",children:[u.jsx("input",{id:"activity-snowboarding",name:"activity-snowboarding",type:"checkbox"})," ","Snowboarding"]})}),u.jsx("li",{children:u.jsxs("label",{htmlFor:"activity-apres-ski",children:[u.jsx("input",{id:"activity-apres-ski",name:"activity-apres-ski",type:"checkbox"})," ","Après-skiing"]})})]}),o("activity")?u.jsx("p",{className:"notification notification--error",children:"Please check at least one box"}):null]}),u.jsxs("li",{className:`form-field ${o("dateOfBirth")?"form-field--error":""}`,children:[u.jsxs("label",{htmlFor:"date-of-birth",children:["Date of birth ",u.jsx("small",{children:"(format: 31-12-1970)"})]}),u.jsx("input",{type:"text",id:"date-of-birth",name:"date-of-birth"})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"Price: €530."}),u.jsx("p",{children:"You will be asked to pay immediately."})]}),u.jsxs("li",{className:"form-field",children:[u.jsx("label",{children:"I understand that:"}),u.jsxs("ol",{className:"form-fields form-fields--payment",children:[u.jsx("li",{children:u.jsxs("label",{htmlFor:"acknowledge-paid",children:[u.jsx("input",{id:"acknowledge-paid",name:"acknowledge-paid",type:"checkbox",required:!0})," ","My registration is not valid until I have paid"]})}),u.jsx("li",{children:u.jsxs("label",{htmlFor:"acknowledge-norefund",children:[u.jsx("input",{id:"acknowledge-norefund",name:"acknowledge-norefund",type:"checkbox",required:!0})," ","I have no right to a refund, since the organisers have an obligation to pay for chalet reservation"]})}),u.jsx("li",{children:u.jsxs("label",{htmlFor:"acknowledge-cancellation",children:[u.jsx("input",{id:"acknowledge-cancellation",name:"acknowledge-cancellation",type:"checkbox",required:!0})," ","I might get a partial refund when the entire event is cancelled months before the planned date due to too little attendees"]})})]})]})]}),u.jsx("button",{className:"btn",type:"submit",children:"Ich bin dabei"})]})]})}function Ok(){return u.jsxs("article",{children:[u.jsx("h1",{children:"We’re full"}),u.jsx("p",{className:"introduction",children:"OH NO!"}),u.jsx("p",{children:"We’re full for this year! Only 18 people can fit in the chalet, so the registration is now closed."}),u.jsxs("p",{children:["Send an email to"," ",u.jsx("a",{href:"mailto:miraski2025@proton.me",children:"miraski2025@proton.me"})," to claim a spot on the waiting list. We’ll get in touch when a spot opens up."]})]})}function Mk(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Invite"}),u.jsx("p",{className:"introduction",children:"OH NO!"}),u.jsx("p",{children:"The MiraSki is an exclusive event, and you need a unique sign-up link."}),u.jsx("p",{children:"If you think you deserve one, contact the right people."})]})}function bk(){return u.jsxs("article",{children:[u.jsx("h1",{children:"Payment"}),u.jsxs("p",{className:"introduction",children:["Pay ",u.jsx("em",{children:"€530,-"})," via this link"]}),u.jsx("p",{children:u.jsx("a",{href:"https://tikkie.me/pay/kpbd90kiscmgumo3i99e",target:"_blank",rel:"noreferrer",children:"https://tikkie.me/pay/kpbd90kiscmgumo3i99e"})})]})}function Lk(){const{errorid:t}=zm(),e={unknown:{title:"Unknown error",desc:"There was an unknown error."},"create-order":{title:"Could not create order",desc:"There was an error when trying to save your data, so could not result to payment."},db:{title:"Could not connect to database",desc:"There was an error when trying to connect to the database."}},{title:n,desc:r}=e[t]?e[t]:e.unknown;return u.jsxs("article",{children:[u.jsx("h2",{children:n}),u.jsx("p",{children:r}),u.jsxs("p",{children:["Please contact"," ",u.jsx("a",{href:"mailto:miraski2025@proton.me",children:"miraski2025@proton.me"})," if the error keeps showing up."]})]})}function Dk(){return document.body.classList.remove("homepage"),u.jsxs("article",{children:[u.jsx("h1",{children:"404"}),u.jsx("h2",{children:"Noes!"}),u.jsxs("p",{children:["Where is the page?! It is not here.",u.jsx("br",{}),"Bran has hidden it from everybody!"]}),u.jsx("p",{children:"Except for you."}),u.jsx("p",{children:"Just kidding. Also from you."}),u.jsxs("p",{children:["You can not see it.",u.jsx("br",{}),"But everybody else can!"]}),u.jsx("p",{children:"Everybody can see the 404 error of the MiraSki website!"}),u.jsxs("p",{children:[u.jsx("a",{href:"/#/",children:"Go home"}),"."]})]})}na.createRoot(document.getElementById("root")).render(u.jsx(If.StrictMode,{children:u.jsx(a1,{children:u.jsxs(s1,{children:[u.jsxs(le,{path:"/",element:u.jsx(c1,{}),children:[u.jsx(le,{index:!0,element:u.jsx(f1,{})}),u.jsx(le,{path:"get-info",element:u.jsx(gx,{})}),u.jsx(le,{path:"get-info/apres-ski",element:u.jsx(_x,{})}),u.jsx(le,{path:"get-info/chalet",element:u.jsx(vx,{})}),u.jsx(le,{path:"get-info/location",element:u.jsx(yx,{})}),u.jsx(le,{path:"get-info/partytime",element:u.jsx(wx,{})}),u.jsx(le,{path:"history/2017",element:u.jsx(Sx,{})}),u.jsx(le,{path:"history/2016",element:u.jsx(kx,{})}),u.jsx(le,{path:"history/2015",element:u.jsx(Ix,{})}),u.jsx(le,{path:"game",element:u.jsx(vk,{})}),u.jsx(le,{path:"game/leaderboard",element:u.jsx(wk,{})}),u.jsx(le,{path:"sign-up",element:u.jsx(Mk,{})}),u.jsx(le,{path:"sign-up/full",element:u.jsx(Ok,{})}),u.jsx(le,{path:"sign-up/:code",element:u.jsx(Ak,{})}),u.jsx(le,{path:"pay/:orderid",element:u.jsx(bk,{})}),u.jsx(le,{path:"error/:errorid",element:u.jsx(Lk,{})})]}),u.jsx(le,{path:"/*",element:u.jsx(Dk,{})})]})})}));
