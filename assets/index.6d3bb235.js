function Ba(n,t){for(var e=0;e<t.length;e++){const o=t[e];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in n)){const r=Object.getOwnPropertyDescriptor(o,s);r&&Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const he={};function La(n){he.context=n}let ho=mo;const ve=1,dn=2,po={owned:null,cleanups:null,context:null,owner:null};var wt=null;let Oe=null,Dt=null,Lt=null,us=0;function Wa(n,t){const e=wt,o=n.length===0,s=o?po:{owned:null,cleanups:null,context:null,owner:t||e},r=o?n:()=>n(()=>sn(()=>ds(s)));wt=s;try{return Nn(r,!0)}finally{wt=e}}function hn(n,t,e){const o=go(n,t,!1,ve);fs(o)}function _a(n,t,e){ho=Io;const o=go(n,t,!1,ve);o.user=!0,Lt?Lt.push(o):fs(o)}function sn(n){let t;return t=n(),t}function Ha(n){_a(()=>sn(n))}function za(n){return wt===null||(wt.cleanups===null?wt.cleanups=[n]:wt.cleanups.push(n)),n}function Ga(n,t,e){let o=n.value;return(!n.comparator||!n.comparator(o,t))&&(n.value=t,n.observers&&n.observers.length&&Nn(()=>{for(let s=0;s<n.observers.length;s+=1){const r=n.observers[s],a=Oe&&Oe.running;a&&Oe.disposed.has(r),(a&&!r.tState||!a&&!r.state)&&(r.pure?Dt.push(r):Lt.push(r),r.observers&&yo(r)),a||(r.state=ve)}if(Dt.length>1e6)throw Dt=[],new Error},!1)),t}function fs(n){if(!n.fn)return;ds(n);const t=wt,e=us;wt=n,Ua(n,n.value,e),wt=t}function Ua(n,t,e){let o;try{o=n.fn(t)}catch(s){n.pure&&(n.state=ve),wo(s)}(!n.updatedAt||n.updatedAt<=e)&&(n.updatedAt!=null&&"observers"in n?Ga(n,o):n.value=o,n.updatedAt=e)}function go(n,t,e,o=ve,s){const r={fn:n,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:wt,context:null,pure:e};return wt===null||wt!==po&&(wt.owned?wt.owned.push(r):wt.owned=[r]),r}function pn(n){const t=Oe;if(n.state===0||t)return;if(n.state===dn||t)return jn(n);if(n.suspense&&sn(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<us);)(n.state||t)&&e.push(n);for(let o=e.length-1;o>=0;o--)if(n=e[o],n.state===ve||t)fs(n);else if(n.state===dn||t){const s=Dt;Dt=null,Nn(()=>jn(n,e[0]),!1),Dt=s}}function Nn(n,t){if(Dt)return n();let e=!1;t||(Dt=[]),Lt?e=!0:Lt=[],us++;try{const o=n();return qa(e),o}catch(o){Dt||(Lt=null),wo(o)}}function qa(n){if(Dt&&(mo(Dt),Dt=null),n)return;const t=Lt;Lt=null,t.length&&Nn(()=>ho(t),!1)}function mo(n){for(let t=0;t<n.length;t++)pn(n[t])}function Io(n){let t,e=0;for(t=0;t<n.length;t++){const o=n[t];o.user?n[e++]=o:pn(o)}for(he.context&&La(),Lt=[],t=0;t<e;t++)pn(n[t]);Lt.length&&Io(Lt)}function jn(n,t){const e=Oe;n.state=0;for(let o=0;o<n.sources.length;o+=1){const s=n.sources[o];s.sources&&(s.state===ve||e?s!==t&&pn(s):(s.state===dn||e)&&jn(s,t))}}function yo(n){const t=Oe;for(let e=0;e<n.observers.length;e+=1){const o=n.observers[e];(!o.state||t)&&(o.state=dn,o.pure?Dt.push(o):Lt.push(o),o.observers&&yo(o))}}function ds(n){let t;if(n.sources)for(;n.sources.length;){const e=n.sources.pop(),o=n.sourceSlots.pop(),s=e.observers;if(s&&s.length){const r=s.pop(),a=e.observerSlots.pop();o<s.length&&(r.sourceSlots[a]=o,s[o]=r,e.observerSlots[o]=a)}}if(n.owned){for(t=0;t<n.owned.length;t++)ds(n.owned[t]);n.owned=null}if(n.cleanups){for(t=0;t<n.cleanups.length;t++)n.cleanups[t]();n.cleanups=null}n.state=0,n.context=null}function ja(n){return n instanceof Error||typeof n=="string"?n:new Error("Unknown error")}function wo(n){throw n=ja(n),n}function Ka(n,t){return sn(()=>n(t||{}))}function Xa(n,t,e){let o=e.length,s=t.length,r=o,a=0,c=0,i=t[s-1].nextSibling,l=null;for(;a<s||c<r;){if(t[a]===e[c]){a++,c++;continue}for(;t[s-1]===e[r-1];)s--,r--;if(s===a){const u=r<o?c?e[c-1].nextSibling:e[r-c]:i;for(;c<r;)n.insertBefore(e[c++],u)}else if(r===c)for(;a<s;)(!l||!l.has(t[a]))&&t[a].remove(),a++;else if(t[a]===e[r-1]&&e[c]===t[s-1]){const u=t[--s].nextSibling;n.insertBefore(e[c++],t[a++].nextSibling),n.insertBefore(e[--r],u),t[s]=e[r]}else{if(!l){l=new Map;let f=c;for(;f<r;)l.set(e[f],f++)}const u=l.get(t[a]);if(u!=null)if(c<u&&u<r){let f=a,d=1,h;for(;++f<s&&f<r&&!((h=l.get(t[f]))==null||h!==u+d);)d++;if(d>u-c){const p=t[a];for(;c<u;)n.insertBefore(e[c++],p)}else n.replaceChild(e[c++],t[a++])}else a++;else t[a++].remove()}}}function Za(n,t,e){let o;return Wa(s=>{o=s,t===document?n():Qa(t,n(),t.firstChild?null:void 0,e)}),()=>{o(),t.textContent=""}}function Ya(n,t,e){const o=document.createElement("template");o.innerHTML=n;let s=o.content.firstChild;return e&&(s=s.firstChild),s}function Rs(n,t,e){e==null?n.removeAttribute(t):n.setAttribute(t,e)}function Ja(n,t,e){return sn(()=>n(t,e))}function Qa(n,t,e,o){if(e!==void 0&&!o&&(o=[]),typeof t!="function")return gn(n,t,o,e);hn(s=>gn(n,t(),s,e),o)}function gn(n,t,e,o,s){for(he.context&&!e&&(e=[...n.childNodes]);typeof e=="function";)e=e();if(t===e)return e;const r=typeof t,a=o!==void 0;if(n=a&&e[0]&&e[0].parentNode||n,r==="string"||r==="number"){if(he.context)return e;if(r==="number"&&(t=t.toString()),a){let c=e[0];c&&c.nodeType===3?c.data=t:c=document.createTextNode(t),e=Re(n,e,o,c)}else e!==""&&typeof e=="string"?e=n.firstChild.data=t:e=n.textContent=t}else if(t==null||r==="boolean"){if(he.context)return e;e=Re(n,e,o)}else{if(r==="function")return hn(()=>{let c=t();for(;typeof c=="function";)c=c();e=gn(n,c,e,o)}),()=>e;if(Array.isArray(t)){const c=[],i=e&&Array.isArray(e);if(Kn(c,t,e,s))return hn(()=>e=gn(n,c,e,o,!0)),()=>e;if(he.context){if(!c.length)return e;for(let l=0;l<c.length;l++)if(c[l].parentNode)return e=c}if(c.length===0){if(e=Re(n,e,o),a)return e}else i?e.length===0?Ds(n,c,o):Xa(n,e,c):(e&&Re(n),Ds(n,c));e=c}else if(t instanceof Node){if(he.context&&t.parentNode)return e=a?[t]:t;if(Array.isArray(e)){if(a)return e=Re(n,e,o,t);Re(n,e,null,t)}else e==null||e===""||!n.firstChild?n.appendChild(t):n.replaceChild(t,n.firstChild);e=t}}return e}function Kn(n,t,e,o){let s=!1;for(let r=0,a=t.length;r<a;r++){let c=t[r],i=e&&e[r];if(c instanceof Node)n.push(c);else if(!(c==null||c===!0||c===!1))if(Array.isArray(c))s=Kn(n,c,i)||s;else if(typeof c=="function")if(o){for(;typeof c=="function";)c=c();s=Kn(n,Array.isArray(c)?c:[c],i)||s}else n.push(c),s=!0;else{const l=String(c);i&&i.nodeType===3&&i.data===l?n.push(i):n.push(document.createTextNode(l))}}return s}function Ds(n,t,e){for(let o=0,s=t.length;o<s;o++)n.insertBefore(t[o],e)}function Re(n,t,e,o){if(e===void 0)return n.textContent="";const s=o||document.createTextNode("");if(t.length){let r=!1;for(let a=t.length-1;a>=0;a--){const c=t[a];if(s!==c){const i=c.parentNode===n;!r&&!a?i?n.replaceChild(s,c):n.insertBefore(s,e):i&&c.remove()}else r=!0}}else n.insertBefore(s,e);return[s]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ti=1e-7,ei=1e-4;class ni{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class ko{refCount(t){return Rt("refCount")}incRef(t){return Rt("incRef")}timerAvailable(){return!0}time(t){return Rt("time")}read(t){return Rt("read")}readSync(t){return Rt("readSync")}readToGPU(t,e){return Rt("readToGPU")}numDataIds(){return Rt("numDataIds")}disposeData(t,e){return Rt("disposeData")}write(t,e,o){return Rt("write")}move(t,e,o,s,r){return Rt("move")}memory(){return Rt("memory")}floatPrecision(){return Rt("floatPrecision")}epsilon(){return this.floatPrecision()===32?ti:ei}dispose(){return Rt("dispose")}}function Rt(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hs(n,t,e){return Math.max(n,Math.min(t,e))}function Xe(n,t,e){const o=n[t];n[t]=n[e],n[e]=o}function j(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function si(n,t,e=""){j(Ge(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Cn(n,t=[],e=!1){if(t==null&&(t=[]),Array.isArray(n)||ie(n)&&!e)for(let o=0;o<n.length;++o)Cn(n[o],t,e);else t.push(n);return t}function W(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Ge(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function oi(n){return n%1===0}function un(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function ri(n,t){let e=1,o=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)e*=n[r];else if(n[r]===-1){if(o!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${o} and dim ${r}`);o=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(o===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const s=n.slice();return s[o]=t/e,s}function Nt(n,t){const e=t.length;return n=n==null?t.map((o,s)=>s):[].concat(n),j(n.every(o=>o>=-e&&o<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),j(n.every(o=>oi(o)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(o=>o<0?e+o:o)}function bt(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${n}`);return e}function xt(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function ai(n,t){for(let e=0;e<n.length;e++){const o=n[e];if(isNaN(o)||!isFinite(o))throw Error(`A tensor of type ${t} being uploaded contains ${o}.`)}}function ii(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function ci(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function ie(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function $s(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function li(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Fn(n){return typeof n=="string"||n instanceof String}function ui(n){return typeof n=="boolean"}function fi(n){return typeof n=="number"}function Mn(n){return Array.isArray(n)?Mn(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":fi(n)?"float32":Fn(n)?"string":ui(n)?"bool":"float32"}function As(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Z(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let o=t-3;o>=0;--o)e[o]=e[o+1]*n[o+1];return e}function xo(n,t,e,o=!1){const s=new Array;if(t.length===1){const r=t[0]*(o?2:1);for(let a=0;a<r;a++)s[a]=e[n+a]}else{const r=t[0],a=t.slice(1),c=a.reduce((i,l)=>i*l)*(o?2:1);for(let i=0;i<r;i++)s[i]=xo(n+i*c,a,e,o)}return s}function Ht(n,t,e=!1){if(n.length===0)return t[0];const o=n.reduce((s,r)=>s*r)*(e?2:1);if(o===0)return[];if(o!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return xo(0,n,t,e)}function bo(n,t){const e=St(n,t);for(let o=0;o<e.length;o++)e[o]=1;return e}function St(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function So(n,t){const e=n.reduce((o,s)=>o*s,1);if(t==null||t==="float32")return Ht(n,new Float32Array(e));if(t==="int32")return Ht(n,new Int32Array(e));if(t==="bool")return Ht(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function vo(n){n.forEach(t=>{j(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function qt(n,t,e){if(t===0)return 0;if(t===1)return n[0];let o=n[n.length-1];for(let s=0;s<n.length-1;++s)o+=e[s]*n[s];return o}function on(n,t,e){if(t===0)return[];if(t===1)return[n];const o=new Array(t);for(let s=0;s<o.length-1;++s)o[s]=Math.floor(n/e[s]),n-=o[s]*e[s];return o[o.length-1]=n,o}function To(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Os="tfjsflags";class di{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=hi,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(it().getBool("IS_TEST")||it().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,o){if(this.flagRegistry[t]={evaluationFn:e,setHook:o},this.urlFlags[t]!=null){const s=this.urlFlags[t];it().getBool("IS_TEST")||it().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(To(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);Os in t&&t[Os].split(",").forEach(o=>{const[s,r]=o.split(":");this.urlFlags[s]=gi(s,r)})}}function hi(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...o)=>(pi(t,o[0],o[1]),o.join("="))),t}function pi(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function gi(n,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}function it(){return No}let No=null;function mi(n){No=n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Wn;function Co(){if(Wn==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Wn=n}return Wn}function Ii(){const n=Co();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function ps(n,t){const e=Ii();if(e.has(n))return e.get(n);{const o=t();return e.set(n,o),e.get(n)}}const yi="Abs",Fo="Acos",Mo="Acosh",En="Add",wi="AddN",ki="All",xi="Any",bi="ArgMax",Si="ArgMin",Eo="Asin",Ro="Asinh",Do="Atan",$o="Atanh",Ao="Atan2",vi="AvgPool",Ti="AvgPoolGrad",Ni="AvgPool3D",Ci="AvgPool3DGrad",Fi="BatchMatMul",Mi="BatchToSpaceND",Ei="Bincount",Ri="BroadcastArgs",gs="Cast",Oo="Ceil",Vo="ClipByValue",Di="Complex",$i="ComplexAbs",Ai="Concat",Oi="Conv2D",Vi="Conv2DBackpropFilter",Pi="Conv2DBackpropInput",Bi="Conv3D",Li="Conv3DBackpropFilterV2",Wi="Conv3DBackpropInputV2",Po="Cos",Bo="Cosh",_i="Cumprod",Hi="Cumsum",zi="CropAndResize",Gi="DenseBincount",Ui="DepthToSpace",qi="DepthwiseConv2dNative",ji="DepthwiseConv2dNativeBackpropFilter",Ki="DepthwiseConv2dNativeBackpropInput",Xi="Diag",Zi="Dilation2D",Vs="Dilation2DBackpropInput",Ps="Dilation2DBackpropFilter",Lo="RealDiv",Yi="Einsum",Wo="Elu",Ji="EluGrad",_o="Erf",Ho="Equal",zo="Exp",Qi="ExpandDims",Go="Expm1",tc="FFT",ec="Fill",nc="FlipLeftRight",Uo="Floor",qo="FloorDiv",sc="FusedBatchNorm",oc="GatherV2",rc="GatherNd",jo="Greater",Ko="GreaterEqual",ms="Identity",ac="IFFT",ic="Imag",Xo="IsFinite",Zo="IsInf",Yo="IsNan",cc="LeakyRelu",Jo="Less",Qo="LessEqual",lc="LinSpace",tr="Log",er="Log1p",nr="LogicalAnd",sr="LogicalNot",or="LogicalOr",uc="LRN",fc="LRNGrad",dc="Max",rr="Maximum",hc="MaxPool",pc="MaxPoolGrad",gc="MaxPool3D",mc="MaxPool3DGrad",Ic="MaxPoolWithArgmax",yc="Mean",wc="Min",ar="Minimum",kc="MirrorPad",ir="Mod",xc="Multinomial",Is="Multiply",bc="Neg",cr="NotEqual",Sc="NonMaxSuppressionV3",vc="NonMaxSuppressionV4",Tc="NonMaxSuppressionV5",Nc="OnesLike",Cc="OneHot",Fc="Pack",Mc="PadV2",lr="Pow",Ec="Prelu",Rc="Prod",Dc="RaggedTensorToTensor",$c="Range",Ac="Real",ur="Reciprocal",fr="Relu",dr="Reshape",Oc="ResizeNearestNeighbor",Vc="ResizeNearestNeighborGrad",Pc="ResizeBilinear",Bc="ResizeBilinearGrad",hr="Relu6",Lc="Reverse",pr="Round",gr="Rsqrt",Wc="ScatterNd",_c="SearchSorted",Hc="Select",mr="Selu",zc="Slice",Ir="Sin",yr="Sinh",wr="Sign",kr="Sigmoid",xr="Softplus",br="Sqrt",Gc="Sum",Uc="SpaceToBatchND",qc="SplitV",jc="Softmax",Kc="SparseFillEmptyRows",Xc="SparseReshape",Zc="SparseSegmentMean",Yc="SparseSegmentSum",Jc="SparseToDense",Sr="SquaredDifference",Qc="Square",tl="StridedSlice",el="StringNGrams",nl="StringSplit",sl="StringToHashBucketFast",ys="Sub",vr="Tan",Tr="Tanh",Nr="Tile",ol="TopK",rl="Transform",al="Transpose",il="Unique",cl="Unpack",ll="UnsortedSegmentSum",ul="ZerosLike",Cr="Step",fl="RotateWithOffset",dl="_FusedMatMul",hl="FusedConv2D",pl="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pe(...n){it().getBool("IS_TEST")||it().getBool("PROD")||console.warn(...n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mn=ps("kernelRegistry",()=>new Map),gl=ps("gradRegistry",()=>new Map);function Bs(n,t){const e=Fr(n,t);return mn.get(e)}function Ls(n){return gl.get(n)}function Ws(n){const t=mn.entries(),e=[];for(;;){const{done:o,value:s}=t.next();if(o)break;const[r,a]=s,[c]=r.split("_");c===n&&e.push(a)}return e}function ml(n){const{kernelName:t,backendName:e}=n,o=Fr(t,e);mn.has(o)&&pe(`The kernel '${t}' for backend '${e}' is already registered`),mn.set(o,n)}function Fr(n,t){return`${t}_${n}`}var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Il(n){var t=n.default;if(typeof t=="function"){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(o){var s=Object.getOwnPropertyDescriptor(n,o);Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:function(){return n[o]}})}),e}var Xn=ct,Vt=null;try{Vt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function ct(n,t,e){this.low=n|0,this.high=t|0,this.unsigned=!!e}ct.prototype.__isLong__;Object.defineProperty(ct.prototype,"__isLong__",{value:!0});function Mt(n){return(n&&n.__isLong__)===!0}ct.isLong=Mt;var _s={},Hs={};function Ne(n,t){var e,o,s;return t?(n>>>=0,(s=0<=n&&n<256)&&(o=Hs[n],o)?o:(e=lt(n,(n|0)<0?-1:0,!0),s&&(Hs[n]=e),e)):(n|=0,(s=-128<=n&&n<128)&&(o=_s[n],o)?o:(e=lt(n,n<0?-1:0,!1),s&&(_s[n]=e),e))}ct.fromInt=Ne;function Pt(n,t){if(isNaN(n))return t?me:Bt;if(t){if(n<0)return me;if(n>=Mr)return Dr}else{if(n<=-Gs)return Ft;if(n+1>=Gs)return Rr}return n<0?Pt(-n,t).neg():lt(n%Pe|0,n/Pe|0,t)}ct.fromNumber=Pt;function lt(n,t,e){return new ct(n,t,e)}ct.fromBits=lt;var In=Math.pow;function ws(n,t,e){if(n.length===0)throw Error("empty string");if(n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return Bt;if(typeof t=="number"?(e=t,t=!1):t=!!t,e=e||10,e<2||36<e)throw RangeError("radix");var o;if((o=n.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return ws(n.substring(1),t,e).neg();for(var s=Pt(In(e,8)),r=Bt,a=0;a<n.length;a+=8){var c=Math.min(8,n.length-a),i=parseInt(n.substring(a,a+c),e);if(c<8){var l=Pt(In(e,c));r=r.mul(l).add(Pt(i))}else r=r.mul(s),r=r.add(Pt(i))}return r.unsigned=t,r}ct.fromString=ws;function zt(n,t){return typeof n=="number"?Pt(n,t):typeof n=="string"?ws(n,t):lt(n.low,n.high,typeof t=="boolean"?t:n.unsigned)}ct.fromValue=zt;var zs=1<<16,yl=1<<24,Pe=zs*zs,Mr=Pe*Pe,Gs=Mr/2,Us=Ne(yl),Bt=Ne(0);ct.ZERO=Bt;var me=Ne(0,!0);ct.UZERO=me;var Ae=Ne(1);ct.ONE=Ae;var Er=Ne(1,!0);ct.UONE=Er;var Zn=Ne(-1);ct.NEG_ONE=Zn;var Rr=lt(-1,2147483647,!1);ct.MAX_VALUE=Rr;var Dr=lt(-1,-1,!0);ct.MAX_UNSIGNED_VALUE=Dr;var Ft=lt(0,-2147483648,!1);ct.MIN_VALUE=Ft;var _=ct.prototype;_.toInt=function(){return this.unsigned?this.low>>>0:this.low};_.toNumber=function(){return this.unsigned?(this.high>>>0)*Pe+(this.low>>>0):this.high*Pe+(this.low>>>0)};_.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Ft)){var e=Pt(t),o=this.div(e),s=o.mul(e).sub(this);return o.toString(t)+s.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var r=Pt(In(t,6),this.unsigned),a=this,c="";;){var i=a.div(r),l=a.sub(i.mul(r)).toInt()>>>0,u=l.toString(t);if(a=i,a.isZero())return u+c;for(;u.length<6;)u="0"+u;c=""+u+c}};_.getHighBits=function(){return this.high};_.getHighBitsUnsigned=function(){return this.high>>>0};_.getLowBits=function(){return this.low};_.getLowBitsUnsigned=function(){return this.low>>>0};_.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Ft)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,e=31;e>0&&(t&1<<e)==0;e--);return this.high!=0?e+33:e+1};_.isZero=function(){return this.high===0&&this.low===0};_.eqz=_.isZero;_.isNegative=function(){return!this.unsigned&&this.high<0};_.isPositive=function(){return this.unsigned||this.high>=0};_.isOdd=function(){return(this.low&1)===1};_.isEven=function(){return(this.low&1)===0};_.equals=function(t){return Mt(t)||(t=zt(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};_.eq=_.equals;_.notEquals=function(t){return!this.eq(t)};_.neq=_.notEquals;_.ne=_.notEquals;_.lessThan=function(t){return this.comp(t)<0};_.lt=_.lessThan;_.lessThanOrEqual=function(t){return this.comp(t)<=0};_.lte=_.lessThanOrEqual;_.le=_.lessThanOrEqual;_.greaterThan=function(t){return this.comp(t)>0};_.gt=_.greaterThan;_.greaterThanOrEqual=function(t){return this.comp(t)>=0};_.gte=_.greaterThanOrEqual;_.ge=_.greaterThanOrEqual;_.compare=function(t){if(Mt(t)||(t=zt(t)),this.eq(t))return 0;var e=this.isNegative(),o=t.isNegative();return e&&!o?-1:!e&&o?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};_.comp=_.compare;_.negate=function(){return!this.unsigned&&this.eq(Ft)?Ft:this.not().add(Ae)};_.neg=_.negate;_.add=function(t){Mt(t)||(t=zt(t));var e=this.high>>>16,o=this.high&65535,s=this.low>>>16,r=this.low&65535,a=t.high>>>16,c=t.high&65535,i=t.low>>>16,l=t.low&65535,u=0,f=0,d=0,h=0;return h+=r+l,d+=h>>>16,h&=65535,d+=s+i,f+=d>>>16,d&=65535,f+=o+c,u+=f>>>16,f&=65535,u+=e+a,u&=65535,lt(d<<16|h,u<<16|f,this.unsigned)};_.subtract=function(t){return Mt(t)||(t=zt(t)),this.add(t.neg())};_.sub=_.subtract;_.multiply=function(t){if(this.isZero())return Bt;if(Mt(t)||(t=zt(t)),Vt){var e=Vt.mul(this.low,this.high,t.low,t.high);return lt(e,Vt.get_high(),this.unsigned)}if(t.isZero())return Bt;if(this.eq(Ft))return t.isOdd()?Ft:Bt;if(t.eq(Ft))return this.isOdd()?Ft:Bt;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(Us)&&t.lt(Us))return Pt(this.toNumber()*t.toNumber(),this.unsigned);var o=this.high>>>16,s=this.high&65535,r=this.low>>>16,a=this.low&65535,c=t.high>>>16,i=t.high&65535,l=t.low>>>16,u=t.low&65535,f=0,d=0,h=0,p=0;return p+=a*u,h+=p>>>16,p&=65535,h+=r*u,d+=h>>>16,h&=65535,h+=a*l,d+=h>>>16,h&=65535,d+=s*u,f+=d>>>16,d&=65535,d+=r*l,f+=d>>>16,d&=65535,d+=a*i,f+=d>>>16,d&=65535,f+=o*u+s*l+r*i+a*c,f&=65535,lt(h<<16|p,f<<16|d,this.unsigned)};_.mul=_.multiply;_.divide=function(t){if(Mt(t)||(t=zt(t)),t.isZero())throw Error("division by zero");if(Vt){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var e=(this.unsigned?Vt.div_u:Vt.div_s)(this.low,this.high,t.low,t.high);return lt(e,Vt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?me:Bt;var o,s,r;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return me;if(t.gt(this.shru(1)))return Er;r=me}else{if(this.eq(Ft)){if(t.eq(Ae)||t.eq(Zn))return Ft;if(t.eq(Ft))return Ae;var a=this.shr(1);return o=a.div(t).shl(1),o.eq(Bt)?t.isNegative()?Ae:Zn:(s=this.sub(t.mul(o)),r=o.add(s.div(t)),r)}else if(t.eq(Ft))return this.unsigned?me:Bt;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();r=Bt}for(s=this;s.gte(t);){o=Math.max(1,Math.floor(s.toNumber()/t.toNumber()));for(var c=Math.ceil(Math.log(o)/Math.LN2),i=c<=48?1:In(2,c-48),l=Pt(o),u=l.mul(t);u.isNegative()||u.gt(s);)o-=i,l=Pt(o,this.unsigned),u=l.mul(t);l.isZero()&&(l=Ae),r=r.add(l),s=s.sub(u)}return r};_.div=_.divide;_.modulo=function(t){if(Mt(t)||(t=zt(t)),Vt){var e=(this.unsigned?Vt.rem_u:Vt.rem_s)(this.low,this.high,t.low,t.high);return lt(e,Vt.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};_.mod=_.modulo;_.rem=_.modulo;_.not=function(){return lt(~this.low,~this.high,this.unsigned)};_.and=function(t){return Mt(t)||(t=zt(t)),lt(this.low&t.low,this.high&t.high,this.unsigned)};_.or=function(t){return Mt(t)||(t=zt(t)),lt(this.low|t.low,this.high|t.high,this.unsigned)};_.xor=function(t){return Mt(t)||(t=zt(t)),lt(this.low^t.low,this.high^t.high,this.unsigned)};_.shiftLeft=function(t){return Mt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?lt(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):lt(0,this.low<<t-32,this.unsigned)};_.shl=_.shiftLeft;_.shiftRight=function(t){return Mt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?lt(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):lt(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};_.shr=_.shiftRight;_.shiftRightUnsigned=function(t){if(Mt(t)&&(t=t.toInt()),t&=63,t===0)return this;var e=this.high;if(t<32){var o=this.low;return lt(o>>>t|e<<32-t,e>>>t,this.unsigned)}else return t===32?lt(e,0,this.unsigned):lt(e>>>t-32,0,this.unsigned)};_.shru=_.shiftRightUnsigned;_.shr_u=_.shiftRightUnsigned;_.toSigned=function(){return this.unsigned?lt(this.low,this.high,!1):this};_.toUnsigned=function(){return this.unsigned?this:lt(this.low,this.high,!0)};_.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};_.toBytesLE=function(){var t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};_.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]};ct.fromBytes=function(t,e,o){return o?ct.fromBytesLE(t,e):ct.fromBytesBE(t,e)};ct.fromBytesLE=function(t,e){return new ct(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)};ct.fromBytesBE=function(t,e){return new ct(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)};const wl=Ba({__proto__:null,default:Xn},[Xn]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ge=Xn||wl;function Rn(n){return ge.fromString(n,!0,16)}const $r=Rn("c3a5c85c97cb3127"),de=Rn("b492b66fbe98f273"),kt=Rn("9ae16a3b2f90404f");function Yn(n){return n.xor(n.shru(47))}function Ar(n,t,e){const o=n.slice(t,t+e);return ge.fromBytes(Array.from(o),!0,!0)}function ot(n,t){return Ar(n,t,8)}function qs(n,t){return Ar(n,t,4)}function pt(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function ae(n,t,e=Rn("9ddfea08eb382d69")){let o=n.xor(t).mul(e);o=o.xor(o.shru(47));let s=t.xor(o).mul(e);return s=s.xor(s.shru(47)),s=s.mul(e),s}function kl(n,t,e,o,s,r){s=s.add(n),r=pt(r.add(s).add(o),21);const a=s;return s=s.add(t),s=s.add(e),r=r.add(pt(s,44)),[s.add(o),r.add(a)]}function ln(n,t,e,o){return kl(ot(n,t),ot(n,t+8),ot(n,t+16),ot(n,t+24),e,o)}function xl(n,t=n.length){if(t>=8){const e=kt.add(t*2),o=ot(n,0).add(kt),s=ot(n,t-8),r=pt(s,37).mul(e).add(o),a=pt(o,25).add(s).mul(e);return ae(r,a,e)}if(t>=4){const e=kt.add(t*2),o=qs(n,0);return ae(o.shl(3).add(t),qs(n,t-4),e)}if(t>0){const e=n[0],o=n[t>>1],s=n[t-1],r=e+(o<<8),a=t+(s<<2);return Yn(kt.mul(r).xor($r.mul(a))).mul(kt)}return kt}function bl(n,t=n.length){const e=kt.add(t*2),o=ot(n,0).mul(de),s=ot(n,8),r=ot(n,t-8).mul(e),a=ot(n,t-16).mul(kt);return ae(pt(o.add(s),43).add(pt(r,30)).add(a),o.add(pt(s.add(kt),18)).add(r),e)}function Sl(n,t=n.length){const e=kt.add(t*2),o=ot(n,0).mul(kt),s=ot(n,8),r=ot(n,t-8).mul(e),a=ot(n,t-16).mul(kt),c=pt(o.add(s),43).add(pt(r,30)).add(a),i=ae(c,o.add(pt(s.add(kt),18)).add(r),e),l=ot(n,16).mul(e),u=ot(n,24),f=c.add(ot(n,t-32)).mul(e),d=i.add(ot(n,t-24)).mul(e);return ae(pt(l.add(u),43).add(pt(f,30)).add(d),l.add(pt(u.add(o),18)).add(f),e)}function vl(n,t=n.length){const e=ge.fromNumber(81,!0);if(t<=32)return t<=16?xl(n,t):bl(n,t);if(t<=64)return Sl(n,t);let o=e,s=e.mul(de).add(113),r=Yn(s.mul(kt).add(113)).mul(kt),a=[ge.UZERO,ge.UZERO],c=[ge.UZERO,ge.UZERO];o=o.mul(kt).add(ot(n,0));let i=0;const l=(t-1>>6)*64,u=l+(t-1&63)-63;do o=pt(o.add(s).add(a[0]).add(ot(n,i+8)),37).mul(de),s=pt(s.add(a[1]).add(ot(n,i+48)),42).mul(de),o=o.xor(c[1]),s=s.add(a[0]).add(ot(n,i+40)),r=pt(r.add(c[0]),33).mul(de),a=ln(n,i,a[1].mul(de),o.add(c[0])),c=ln(n,i+32,r.add(c[1]),s.add(ot(n,i+16))),[r,o]=[o,r],i+=64;while(i!==l);const f=de.add(r.and(255).shl(1));return i=u,c[0]=c[0].add(t-1&63),a[0]=a[0].add(c[0]),c[0]=c[0].add(a[0]),o=pt(o.add(s).add(a[0]).add(ot(n,i+8)),37).mul(f),s=pt(s.add(a[1]).add(ot(n,i+48)),42).mul(f),o=o.xor(c[1].mul(9)),s=s.add(a[0].mul(9).add(ot(n,i+40))),r=pt(r.add(c[0]),33).mul(f),a=ln(n,i,a[1].mul(f),o.add(c[0])),c=ln(n,i+32,r.add(c[1]),s.add(ot(n,i+16))),[r,o]=[o,r],ae(ae(a[0],c[0],f).add(Yn(s).mul($r)).add(r),ae(a[1],c[1],f).add(o),f)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ks(n,t){return t==="string"?ye(n):Ce([n],t)}function Tl(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function Ce(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Cn(n)),it().getBool("DEBUG")&&ai(n,t),Tl(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let o=0;o<e.length;++o)Math.round(n[o])!==0&&(e[o]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Be(){return it().platform.now()}function ye(n,t="utf-8"){return t=t||"utf-8",it().platform.encode(n,t)}function nn(n,t="utf-8"){return t=t||"utf-8",it().platform.decode(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Nl{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Fl)}profileKernel(t,e,o){let s;const r=()=>{s=o()};let a;const c=Be();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(r);else{r();for(const l of s)l.dataSync();a=Promise.resolve({kernelMs:Be()-c})}if(it().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<s.length;l++){const u=s[l];u.data().then(f=>{Cl(f,u.dtype,t)})}return{kernelName:t,outputs:s,inputs:e,timeMs:a.then(l=>l.kernelMs),extraInfo:a.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:o,timeMs:s,inputs:r,extraInfo:a}=t;o.forEach(c=>{Promise.all([c.data(),s,a]).then(i=>{this.logger.logKernelProfile(e,c,i[0],i[1],r,i[2])})})}}function Cl(n,t,e){if(t!=="float32")return!1;for(let o=0;o<n.length;o++){const s=n[o];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${e}'`),!0}return!1}class Fl{logKernelProfile(t,e,o,s,r,a){const c=typeof s=="number"?un(`${s}ms`,9):s.error,i=un(t,25),l=e.rank,u=e.size,f=un(e.shape.toString(),14);let d="";for(const h in r){const p=r[h];if(p!=null){const m=p.shape||e.shape,g=m.length;d+=`${h}: ${g}D ${g>0?m:""} `}}console.log(`%c${i}	%c${c}	%c${l}D ${f}	%c${u}	%c${d}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ml(n,t,e){const o={},s={};for(let i=0;i<t.length;i++)o[t[i].id]=!0;for(let i=0;i<n.length;i++){const l=n[i],u=l.inputs;for(const f in u){const d=u[f];let h=!1;for(let p=0;p<t.length;p++)if(o[d.id]){l.outputs.forEach(m=>o[m.id]=!0),h=!0,s[l.id]=!0;break}if(h)break}}const r={};r[e.id]=!0;const a={};for(let i=n.length-1;i>=0;i--){const l=n[i],u=l.inputs;for(let f=0;f<l.outputs.length;f++)if(r[l.outputs[f].id]){for(const d in u)r[u[d].id]=!0,a[l.id]=!0;break}}const c=[];for(let i=0;i<n.length;i++){const l=n[i];if(s[l.id]&&a[l.id]){const u={};for(const d in l.inputs){const h=l.inputs[d];o[h.id]&&(u[d]=h)}const f=Object.assign({},l);f.inputs=u,f.outputs=l.outputs,c.push(f)}}return c}function El(n,t,e,o){for(let s=t.length-1;s>=0;s--){const r=t[s],a=[];if(r.outputs.forEach(i=>{const l=n[i.id];l!=null?a.push(l):a.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const c=r.gradient(a);for(const i in r.inputs){if(!(i in c))throw new Error(`Cannot backprop through input ${i}. Available gradients found: ${Object.keys(c)}.`);const l=e(()=>c[i]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${i} must have 'float32' dtype, but has '${l.dtype}'`);const u=r.inputs[i];if(!Ge(l.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${i}' has shape '${l.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=l;else{const f=n[u.id];n[u.id]=o(f,l),f.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const js=20,Ze=3,_n=7;function Rl(n,t,e,o){const s=Z(t),r=Dl(n,t,e,s),a=t.length,c=fn(n,t,e,s,r),i=["Tensor"];return o&&(i.push(`  dtype: ${e}`),i.push(`  rank: ${a}`),i.push(`  shape: [${t}]`),i.push("  values:")),i.push(c.map(l=>"    "+l).join(`
`)),i.join(`
`)}function Dl(n,t,e,o){const s=W(t),r=o[o.length-1],a=new Array(r).fill(0),c=t.length,i=e==="complex64"?Je(n):n;if(c>1)for(let l=0;l<s/r;l++){const u=l*r;for(let f=0;f<r;f++)a[f]=Math.max(a[f],Ye(i[u+f],0,e).length)}return a}function Ye(n,t,e){let o;return Array.isArray(n)?o=`${parseFloat(n[0].toFixed(_n))} + ${parseFloat(n[1].toFixed(_n))}j`:Fn(n)?o=`'${n}'`:e==="bool"?o=Or(n):o=parseFloat(n.toFixed(_n)).toString(),un(o,t)}function Or(n){return n===0?"false":"true"}function fn(n,t,e,o,s,r=!0){const a=e==="complex64"?2:1,c=t[0],i=t.length;if(i===0){if(e==="complex64"){const m=Je(n);return[Ye(m[0],0,e)]}return e==="bool"?[Or(n[0])]:[n[0].toString()]}if(i===1){if(c>js){const g=Ze*a;let I=Array.from(n.slice(0,g)),y=Array.from(n.slice((c-Ze)*a,c*a));return e==="complex64"&&(I=Je(I),y=Je(y)),["["+I.map((k,w)=>Ye(k,s[w],e)).join(", ")+", ..., "+y.map((k,w)=>Ye(k,s[c-Ze+w],e)).join(", ")+"]"]}const m=e==="complex64"?Je(n):Array.from(n);return["["+m.map((g,I)=>Ye(g,s[I],e)).join(", ")+"]"]}const l=t.slice(1),u=o.slice(1),f=o[0]*a,d=[];if(c>js){for(let m=0;m<Ze;m++){const g=m*f,I=g+f;d.push(...fn(n.slice(g,I),l,e,u,s,!1))}d.push("...");for(let m=c-Ze;m<c;m++){const g=m*f,I=g+f;d.push(...fn(n.slice(g,I),l,e,u,s,m===c-1))}}else for(let m=0;m<c;m++){const g=m*f,I=g+f;d.push(...fn(n.slice(g,I),l,e,u,s,m===c-1))}const h=i===2?",":"";d[0]="["+d[0]+h;for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+h;let p=`,
`;for(let m=2;m<i;m++)p+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(r?"":p),d}function Je(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yt{constructor(t,e,o){if(this.dtype=e,this.shape=t.slice(),this.size=W(t),o!=null){const s=o.length;j(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=o||xt(e,this.size),this.strides=Z(t)}set(t,...e){e.length===0&&(e=[0]),j(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const o=this.locToIndex(e);this.values[o]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const s of t){if(s<0||s>=this.shape[e]){const r=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(r)}e++}let o=t[t.length-1];for(let s=0;s<t.length-1;++s)o+=this.strides[s]*t[s];return this.values[o]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let o=0;o<t.length-1;++o)e+=this.strides[o]*t[o];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let o=0;o<e.length-1;++o)e[o]=Math.floor(t/this.strides[o]),t-=e[o]*this.strides[o];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return _t().makeTensor(this.values,this.shape,this.dtype)}}let _t=null,De=null;function $l(n){_t=n}function Al(n){De=n}class Ot{constructor(t,e,o,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=W(t),this.strides=Z(t),this.dataId=o,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return De.buffer(this.shape,this.dtype,t)}bufferSync(){return De.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return Ht(this.shape,t,this.dtype==="complex64")}arraySync(){return Ht(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=_t().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(o=>nn(o))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),_t().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=_t().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>nn(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await _t().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(_t().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return De.print(this,t)}clone(){return this.throwIfDisposed(),De.clone(this)}toString(t=!1){const e=this.dataSync();return Rl(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),De.cast(this,t)}variable(t=!0,e,o){return this.throwIfDisposed(),_t().makeVariable(this,t,e,o)}}Object.defineProperty(Ot,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Ol(){return ps("Tensor",()=>Ot)}Ol();class Jn extends Ot{constructor(t,e,o,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=e,this.name=o}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Ge(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);_t().disposeTensor(this),this.dataId=t.dataId,_t().incRef(this,null)}dispose(){_t().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Jn,Symbol.hasInstance,{value:n=>n instanceof Ot&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ks;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Ks||(Ks={}));var Qn;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Qn||(Qn={}));var ts;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(ts||(ts={}));var es;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(es||(es={}));var ns;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(ns||(ns={}));const Vl={float32:es,int32:Qn,bool:ts,complex64:ns};function Ue(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return Vl[n][t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xs(n,t){if(n.dtype===t.dtype)return[n,t];const e=Ue(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Pl(n){const t=[];return Vr(n,t,new Set),t}function Vr(n,t,e){if(n==null)return;if(n instanceof Ot){t.push(n);return}if(!Bl(n))return;const o=n;for(const s in o){const r=o[s];e.has(r)||(e.add(r),Vr(r,t,e))}}function Bl(n){return Array.isArray(n)||typeof n=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hn(n){return n.kernelName!=null}class Xs{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Le{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Xs}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const o=t[e];if(await this.initializeBackend(o).success){await this.setBackend(o);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,o=1){return t in this.registryFactory?(pe(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:o},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:o}=this.initializeBackend(t);if(!(o?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Nl(this.backendInstance),!0}setupRegisteredKernels(){Ws(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Ws(t).forEach(o=>{o.disposeFunc!=null&&o.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const o=e.factory();if(o&&!(o instanceof ko)&&typeof o.then=="function"){const s=++this.pendingBackendInitId,r=o.then(a=>s<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,pe(`Initialization of backend ${t} failed`),pe(a.stack||a.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(o){return pe(`Initialization of backend ${t} failed`),pe(o.stack||o.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const o=t[e],{success:s,asyncInit:r}=this.initializeBackend(o);if(r||s)return{name:o,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const o=this.state.tensorInfo.get(e),s=o.backend,r=this.readSync(e),a=s.refCount(e);s.disposeData(e,!0),o.backend=t,t.move(e,r,o.shape,o.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let o=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}let s;return this.scopedRun(()=>this.startScope(o),()=>this.endScope(s),()=>(s=e(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,e,o){t();try{const s=o();return e(),s}catch(s){throw e(),s}}nextTensorId(){return Le.nextTensorId++}nextVariableId(){return Le.nextVariableId++}clone(t){const e=gt.runKernel(ms,{x:t}),o={x:t},s=a=>({x:()=>{const c="float32",i={x:a},l={dtype:c};return gt.runKernel(gs,i,l)}}),r=[];return this.addTapeNode(this.state.activeScope.name,o,[e],s,r,{}),e}runKernel(t,e,o){if(this.backendName==null&&this.backend,!(Bs(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:o})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,o){const s=this.backend.numDataIds();let r=0;o.forEach(i=>{r+=i.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],c=s-e-r-a;if(c>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${c} data ids) after running '${t}'`)}runKernelFunc(t){let e,o=[];const s=this.isTapeOn(),r=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let c;this.backendName==null&&this.backend;let i;const l=Hn(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Hn(t)){const{kernelName:p,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const I=Bs(p,this.backendName);j(I!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),c=()=>{const y=this.backend.numDataIds();i=I.kernelFunc({inputs:m,attrs:g,backend:this.backend});const k=Array.isArray(i)?i:[i];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,y,k);const w=k.map(x=>x.rank!=null?x:this.makeTensorFromTensorInfo(x));if(s){const x=this.getTensorsForGradient(p,m,w);o=this.saveTensorsForBackwardMode(x)}return w}}else{const{forwardFunc:p}=t,m=g=>{!s||(o=g.map(I=>this.keep(this.clone(I))))};c=()=>{const g=this.backend.numDataIds();i=this.tidy(()=>p(this.backend,m));const I=Array.isArray(i)?i:[i];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,g,I),I}}const{inputs:u,attrs:f}=t,d=Hn(t)?null:t.backwardsFunc;let h;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=c():(h=this.profiler.profileKernel(l,u,()=>c()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),e=h.outputs)}),s&&this.addTapeNode(l,u,e,d,o,f),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:e.map(p=>p.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(i)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(o=>this.keep(this.clone(o)))}getTensorsForGradient(t,e,o){const s=Ls(t);if(s!=null){const r=s.inputsToSave||[],a=s.outputsToSave||[];let c;s.saveAllInputs?(j(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),c=Object.keys(e).map(l=>e[l])):c=r.map(l=>e[l]);const i=o.filter((l,u)=>a[u]);return c.concat(i)}return[]}makeTensor(t,e,o,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");o=o||"float32",s=s||this.backend;let r=t;o==="string"&&Fn(t[0])&&(r=t.map(i=>ye(i)));const a=s.write(r,e,o),c=new Ot(e,o,a,this.nextTensorId());if(this.trackTensor(c,s),o==="string"){const i=this.state.tensorInfo.get(a),l=li(r);this.state.numBytes+=l-i.bytes,i.bytes=l}return c}makeTensorFromDataId(t,e,o,s){o=o||"float32";const r={dataId:t,shape:e,dtype:o};return this.makeTensorFromTensorInfo(r,s)}makeTensorFromTensorInfo(t,e){const{dataId:o,shape:s,dtype:r}=t,a=new Ot(s,r,o,this.nextTensorId());return this.trackTensor(a,e),a}makeVariable(t,e=!0,o,s){o=o||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const r=new Jn(t,e,o,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*$s(t.dtype)),this.state.numBytes+=o,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o})),t instanceof Jn||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const o=t.size*$s(t.dtype);this.state.numBytes-=o}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,o=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-o;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,o,s,r,a){const c={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:o,saved:r},i=Ls(t);i!=null&&(s=i.gradFunc),s!=null&&(c.gradient=l=>(l=l.map((u,f)=>{if(u==null){const d=o[f],h=St(d.size,d.dtype);return this.makeTensor(h,d.shape,d.dtype)}return u}),s(l.length>1?l:l[0],r,a))),this.state.activeTape.push(c)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=Pl(t),o=new Set(e.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const a=this.state.activeScope.track[r];!a.kept&&!o.has(a.id)&&a.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(r=>{!r.kept&&r.scopeId===s.id&&this.track(r)})}gradients(t,e,o,s=!1){if(j(e.length>0,()=>"gradients() received an empty list of xs."),o!=null&&o.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${o.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));j(r instanceof Ot,()=>"The result y returned by f() must be a tensor.");const a=Ml(this.state.activeTape,e,r);if(!s&&a.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const c={};c[r.id]=o??Ll(r.shape),El(c,a,l=>this.tidy(l),Wl);const i=e.map(l=>c[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const u of l.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:i}})}customGrad(t){return j(As(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{j(e.every(c=>c instanceof Ot),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let o;const s={};e.forEach((c,i)=>{s[i]=c});const r=(c,i)=>(o=t(...e,i),j(o.value instanceof Ot,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),j(As(o.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),o.value),a=(c,i)=>{const l=o.gradFunc(c,i),u=Array.isArray(l)?l:[l];j(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),j(u.every(d=>d instanceof Ot),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const f={};return u.forEach((d,h)=>{f[h]=()=>d}),f};return this.runKernelFunc({forwardFunc:r,backwardsFunc:a,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=Be(),o=await this.backend.time(t);return o.wallMs=Be()-e,o}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Xs;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Le.nextTensorId=0;Le.nextVariableId=0;function Ll(n){const t=bo(W(n),"float32");return gt.makeTensor(t,n,"float32")}function Pr(){const n=Co();if(n._tfengine==null){const t=new di(n);n._tfengine=new Le(t)}return mi(n._tfengine.ENV),$l(()=>n._tfengine),n._tfengine}const gt=Pr();function Wl(n,t){const e={a:n,b:t};return gt.runKernel(En,e)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _l(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $t=it();$t.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});$t.registerFlag("IS_BROWSER",()=>_l());$t.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");$t.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));$t.registerFlag("PROD",()=>!1);$t.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>$t.getBool("DEBUG"));$t.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);$t.registerFlag("IS_TEST",()=>!1);$t.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);$t.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);$t.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);$t.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Br(n,t){let e=n;if(ie(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];const o=[];for(;Array.isArray(e)||ie(e)&&t!=="string";)o.push(e.length),e=e[0];return Array.isArray(n)&&it().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Lr(n,o,[]),o}function Lr(n,t,e){if(e=e||[],!Array.isArray(n)&&!ie(n)){j(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}j(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),j(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const o=t.slice(1);for(let s=0;s<n.length;++s)Lr(n[s],o,e.concat(s))}function Zs(n,t,e,o){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${o}' must be ${n} tensor, but got ${t} tensor`)}}function jt(n,t,e,o="numeric"){if(n instanceof Ot)return Zs(o,n.dtype,t,e),n;let s=Mn(n);if(s!=="string"&&["bool","int32","float32"].indexOf(o)>=0&&(s=o),Zs(o,s,t,e),n==null||!ie(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const i=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${i}'`)}const r=Br(n,s);!ie(n)&&!Array.isArray(n)&&(n=[n]);const c=s!=="string"?Ce(n,s):Cn(n,[],!0);return gt.makeTensor(c,r,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hl="__op";function le(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const o=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+Hl;const s=(...r)=>{gt.startScope(e);try{const a=o(...r);return To(a)&&console.error("Cannot return a Promise inside of tidy."),gt.endScope(a),a}catch(a){throw gt.endScope(null),a}};return Object.defineProperty(s,"name",{value:e,configurable:!0}),s}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zl(n,t,e,o){if(o==null&&(o=Mn(n)),o==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!ie(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){vo(t);const s=W(t),r=W(e);j(s===r,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${r}`);for(let a=0;a<e.length;++a){const c=e[a],i=a===e.length-1?c!==W(t.slice(a)):!0;j(e[a]===t[a]||!i,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!ie(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=o!=="string"?Ce(n,o):Cn(n,[],!0),gt.makeTensor(n,t,o)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gl(n,t,e){const o=Br(n,e);return zl(n,t,o,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bs=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Ys(n){return bs?Buffer.byteLength(n):new Blob([n]).size}function Ul(n){if(bs)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let o=0,s=t.length;o<s;o++)e+=String.fromCharCode(t[o]);return btoa(e)}function ql(n){if(bs){const o=Buffer.from(n,"base64");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let o=0;o<t.length;++o)e.set([t.charCodeAt(o)],o);return e.buffer}function Wr(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Ys(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Ys(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vt{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return vt.instance==null&&(vt.instance=new vt),vt.instance}static registerSaveRouter(t){vt.getInstance().saveRouters.push(t)}static registerLoadRouter(t){vt.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return vt.getHandlers(t,"save")}static getLoadHandlers(t,e){return vt.getHandlers(t,"load",e)}static getHandlers(t,e,o){const s=[];return(e==="load"?vt.getInstance().loadRouters:vt.getInstance().saveRouters).forEach(a=>{const c=a(t,o);c!==null&&s.push(c)}),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ss="tensorflowjs",os=1,Ie="models_store",re="model_info_store";function _r(){if(!it().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function rs(n){const t=n.result;t.createObjectStore(Ie,{keyPath:"modelPath"}),t.createObjectStore(re,{keyPath:"modelPath"})}class ke{constructor(t){if(this.indexedDB=_r(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((o,s)=>{const r=this.indexedDB.open(ss,os);r.onupgradeneeded=()=>rs(r),r.onsuccess=()=>{const a=r.result;if(e==null){const c=a.transaction(Ie,"readonly"),l=c.objectStore(Ie).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return a.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));o(l.result.modelArtifacts)},l.onerror=u=>(a.close(),s(l.error)),c.oncomplete=()=>a.close()}else{const c=Wr(e),i=a.transaction(re,"readwrite");let l=i.objectStore(re);const u=l.put({modelPath:this.modelPath,modelArtifactsInfo:c});let f;u.onsuccess=()=>{f=a.transaction(Ie,"readwrite");const h=f.objectStore(Ie).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:c});h.onsuccess=()=>o({modelArtifactsInfo:c}),h.onerror=p=>{l=i.objectStore(re);const m=l.delete(this.modelPath);m.onsuccess=()=>(a.close(),s(h.error)),m.onerror=g=>(a.close(),s(h.error))}},u.onerror=d=>(a.close(),s(u.error)),i.oncomplete=()=>{f==null?a.close():f.oncomplete=()=>a.close()}}},r.onerror=a=>s(r.error)})}}ke.URL_SCHEME="indexeddb://";const Hr=n=>it().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ke.URL_SCHEME)?jl(n.slice(ke.URL_SCHEME.length)):null;vt.registerSaveRouter(Hr);vt.registerLoadRouter(Hr);function jl(n){return new ke(n)}function Kl(n){return n.startsWith(ke.URL_SCHEME)?n.slice(ke.URL_SCHEME.length):n}class Xl{constructor(){this.indexedDB=_r()}async listModels(){return new Promise((t,e)=>{const o=this.indexedDB.open(ss,os);o.onupgradeneeded=()=>rs(o),o.onsuccess=()=>{const s=o.result,r=s.transaction(re,"readonly"),c=r.objectStore(re).getAll();c.onsuccess=()=>{const i={};for(const l of c.result)i[l.modelPath]=l.modelArtifactsInfo;t(i)},c.onerror=i=>(s.close(),e(c.error)),r.oncomplete=()=>s.close()},o.onerror=s=>e(o.error)})}async removeModel(t){return t=Kl(t),new Promise((e,o)=>{const s=this.indexedDB.open(ss,os);s.onupgradeneeded=()=>rs(s),s.onsuccess=()=>{const r=s.result,a=r.transaction(re,"readwrite"),c=a.objectStore(re),i=c.get(t);let l;i.onsuccess=()=>{if(i.result==null)return r.close(),o(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=c.delete(t),f=()=>{l=r.transaction(Ie,"readwrite");const h=l.objectStore(Ie).delete(t);h.onsuccess=()=>e(i.result.modelArtifactsInfo),h.onerror=p=>o(i.error)};u.onsuccess=f,u.onerror=d=>(f(),r.close(),o(i.error))}},i.onerror=u=>(r.close(),o(i.error)),a.oncomplete=()=>{l==null?r.close():l.oncomplete=()=>r.close()}},s.onerror=r=>o(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qt="/",$e="tensorflowjs_models",zr="info",Zl="model_topology",Yl="weight_specs",Jl="weight_data",Ql="model_metadata";function Gr(n){return{info:[$e,n,zr].join(Qt),topology:[$e,n,Zl].join(Qt),weightSpecs:[$e,n,Yl].join(Qt),weightData:[$e,n,Jl].join(Qt),modelMetadata:[$e,n,Ql].join(Qt)}}function Ur(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function tu(n){const t=n.split(Qt);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(Qt)}function eu(n){return n.startsWith(xe.URL_SCHEME)?n.slice(xe.URL_SCHEME.length):n}class xe{constructor(t){if(!it().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Gr(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),o=JSON.stringify(t.weightSpecs),s=Wr(t);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,o),this.LS.setItem(this.keys.weightData,Ul(t.weightData));const r={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(r)),{modelArtifactsInfo:s}}catch{throw Ur(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},o=JSON.parse(this.LS.getItem(this.keys.topology));if(o==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=o;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=s;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const c=JSON.parse(r);e.format=c.format,e.generatedBy=c.generatedBy,e.convertedBy=c.convertedBy,c.signature!=null&&(e.signature=c.signature),c.userDefinedMetadata!=null&&(e.userDefinedMetadata=c.userDefinedMetadata),c.modelInitializer!=null&&(e.modelInitializer=c.modelInitializer),c.trainingConfig!=null&&(e.trainingConfig=c.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=ql(a),e}}xe.URL_SCHEME="localstorage://";const qr=n=>it().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(xe.URL_SCHEME)?nu(n.slice(xe.URL_SCHEME.length)):null;vt.registerSaveRouter(qr);vt.registerLoadRouter(qr);function nu(n){return new xe(n)}class su{constructor(){j(it().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),j(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=$e+Qt,o=Qt+zr;for(let s=0;s<this.LS.length;++s){const r=this.LS.key(s);if(r.startsWith(e)&&r.endsWith(o)){const a=tu(r);t[a]=JSON.parse(this.LS.getItem(r))}}return t}async removeModel(t){t=eu(t);const e=Gr(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const o=JSON.parse(this.LS.getItem(e.info));return Ur(e),o}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Js="://";class Gt{constructor(){this.managers={}}static getInstance(){return Gt.instance==null&&(Gt.instance=new Gt),Gt.instance}static registerManager(t,e){j(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Js)&&(t=t.slice(0,t.indexOf(Js))),j(t.length>0,()=>"scheme must not be an empty string.");const o=Gt.getInstance();j(o.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),o.managers[t]=e}static getManager(t){const e=Gt.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(Gt.getInstance().managers)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ou{fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}}if(it().get("IS_BROWSER")){it().setPlatform("browser",new ou);try{Gt.registerManager(xe.URL_SCHEME,new su)}catch{}try{Gt.registerManager(ke.URL_SCHEME,new Xl)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ru={importFetch:()=>require("node-fetch")};let zn;class au{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return it().global.fetch!=null?it().global.fetch(t,e):(zn==null&&(zn=ru.importFetch()),zn(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}}it().get("IS_NODE")&&!it().get("IS_BROWSER")&&it().setPlatform("node",new au);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q(n,t="float32",e){return t=t||"float32",vo(n),new yt(n,t,e)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iu(n,t){const e=jt(n,"x","cast");if(!ii(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const o={x:e},s={dtype:t};return gt.runKernel(gs,o,s)}const cu=le({cast_:iu});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lu(n){const e={x:jt(n,"x","clone","string_or_numeric")};return gt.runKernel(ms,e)}const jr=le({clone_:lu});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uu(n,t=!1){console.log(n.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Pr();const fu={buffer:Q,cast:cu,clone:jr,print:uu};Al(fu);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qs(){return gt}function du(n,t){return gt.tidy(n,t)}function hu(n,t,e=1){return gt.registerBackend(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yn(n,t){const e=n.length,o=[];for(let s=0;s<e;s++){const r=e-1-s,a=n[r]||1;(t[t.length-1-s]||1)>1&&a===1&&o.unshift(r)}return o}function Dn(n,t){const e=[],o=Math.max(n.length,t.length);for(let s=0;s<o;s++){let r=n[n.length-s-1];r==null&&(r=1);let a=t[t.length-s-1];if(a==null&&(a=1),r===1)e.unshift(a);else if(a===1)e.unshift(r);else if(r!==a){const c=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(c)}else e.unshift(r)}return e}function pu(n,t){const e=n.shape.length,o=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(o<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${o}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[o-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[o-1]} vs. ${e}`);if(W(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const s=t.shape,r=s[s.length-1];let a=1;for(let f=0;f<s.length-1;++f)a*=s[f];const c=n.shape,i=s.slice();i.pop();let l=1;for(let f=r;f<e;++f)l*=c[f],i.push(c[f]);const u=[...Z(n.shape).map(f=>f/l),1].slice(0,r);return[i,a,l,u]}function Kr(n,t,e){const o=t.shape.length,s=o>1?t.shape[o-1]:1,r=e.length;let a=1;for(let f=s;f<r;++f)a*=e[f];const c=s<1?1:s,i=W(t.shape)/c,l=[...Z(e.slice(0,s)),1],u=W(e);return{sliceRank:s,numUpdates:i,sliceSize:a,strides:l,outputSize:u}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const as=-2,gu=-1;function mu(n,t,e){const o=n.shape.length;j(o===t.length,()=>`Error in slice${o}D: Length of begin ${t} must match the rank of the array (${o}).`),j(o===e.length,()=>`Error in slice${o}D: Length of size ${e} must match the rank of the array (${o}).`);for(let s=0;s<o;++s)j(t[s]+e[s]<=n.shape[s],()=>`Error in slice${o}D: begin[${s}] + size[${s}] (${t[s]+e[s]}) would overflow input.shape[${s}] (${n.shape[s]})`)}function Iu(n,t,e){const o=[];for(let s=0;s<n.length;s++)o[s]=Math.ceil((t[s]-n[s])/e[s]);return o}function yu(n,t,e){let o=e.length;for(let s=0;s<e.length;s++)if(e[s]>1){o=s;break}for(let s=o+1;s<e.length;s++)if(t[s]>0||e[s]!==n[s])return!1;return!0}function wu(n,t){let e=n.length>0?n[n.length-1]:1;for(let o=0;o<n.length-1;o++)e+=n[o]*t[o];return e}function ku(n,t,e){let o;const s=n.shape.length;typeof t=="number"?o=[t,...new Array(s-1).fill(0)]:t.length<s?o=t.concat(new Array(s-t.length).fill(0)):o=t.slice(),o.forEach(a=>{j(a!==-1,()=>"slice() does not support negative begin indexing.")});let r;return e==null?r=new Array(s).fill(-1):typeof e=="number"?r=[e,...new Array(s-1).fill(-1)]:e.length<s?r=e.concat(new Array(s-e.length).fill(-1)):r=e,r=r.map((a,c)=>a>=0?a:(j(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${c}.`),n.shape[c]-o[c])),[o,r]}function xu(n,t,e,o,s,r,a,c,i){let l;if(o==null?(l=new Array(t.length),l.fill(1)):l=o,a!=null&&(a&a-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const f={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:l.slice(),beginMask:s,endMask:r,ellipsisMask:a,newAxisMask:c,shrinkAxisMask:i};for(let k=0;k<f.dims;k++)u&&(1<<k&c)!==0&&f.numAddAxisAfterEllipsis++,1<<k&a&&(u=!0);u||(f.ellipsisMask|=1<<f.dims,f.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};bu(f,d);let h=!0,p=!0,m=!0;const g=[],I=[];for(let k=0;k<n.length;++k){if(d.strides[k]===0)throw Error(`strides[${k}] must be non-zero`);const w=!!(d.shrinkAxisMask&1<<k),x=n[k];if(x===-1){g.push(w?1:-1);continue}const b=[d.beginMask&1<<k,d.endMask&1<<k],S=[d.strides[k]>0?0:-1,d.strides[k]>0?x:x-1];if(w&&d.strides[k]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[k]===1;const v=!!(d.beginMask&1<<k&&d.endMask&1<<k);if(d.beginValid&&d.endValid){if(w){const D=d.begin[k]<0?x+d.begin[k]:d.begin[k];if(d.begin[k]=D,d.end[k]=d.begin[k]+1,D<0||D>=x)throw Error(`slice index ${d.begin[k]} of dimension ${k} out of bounds.`)}else d.begin[k]=to(d.begin[k],0,d.strides[k],x,b,S),d.end[k]=to(d.end[k],1,d.strides[k],x,b,S);const F=d.strides[k]===1&&d.begin[k]===0&&d.end[k]===x;h=h&&F,p=p&&(k===0&&d.strides[k]===1||F)}else h=h&&d.strides[k]===1&&v,p=p&&(k===0&&d.strides[k]===1||v);let T,N=!1;if(d.beginValid&&d.endValid?(T=d.end[k]-d.begin[k],N=!0):w?(T=1,N=!0):v&&x>=0&&(d.strides[k]<0?T=-x:T=x,N=!0),N){let F;T===0||T<0!=d.strides[k]<0?F=0:F=Math.trunc(T/d.strides[k])+(T%d.strides[k]!==0?1:0),g.push(F)}else g.push(-1)}for(let k=0;k<d.finalShapeGatherIndices.length;++k){const w=d.finalShapeGatherIndices[k];w>=0?I.push(g[w]):w===as&&I.push(1)}return{finalShapeSparse:I.filter((k,w)=>d.finalShapeGatherIndices[w]!==as),finalShape:I,isIdentity:h,sliceDim0:p,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function bu(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let o=0;o<n.dims;o++)if(1<<o&n.ellipsisMask){const s=Math.min(t.dims-(n.dims-o)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<s;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=o}else if(1<<o&n.newAxisMask)t.finalShapeGatherIndices.push(as),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[o]),n.end!=null&&(t.end[e]=n.end[o]),t.strides[e]=n.strides[o],n.beginMask&1<<o&&(t.beginMask|=1<<e),n.endMask&1<<o&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<o?(t.finalShapeGatherIndices.push(gu),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(o)),t.inputShapeGatherIndicesSparse[e]=o,e++}}function to(n,t,e,o,s,r){if(s[t])return e>0?r[t]:r[t+1&1];{const a=n<0?o+n:n;return a<r[0]?r[0]:a>r[1]?r[1]:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Su(n,t){let e=jt(n,"a","add"),o=jt(t,"b","add");[e,o]=xs(e,o);const s={a:e,b:o};return gt.runKernel(En,s)}const Gn=le({add_:Su});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vu(n,t){let e=jt(n,"a","mul"),o=jt(t,"b","mul");[e,o]=xs(e,o);const s={a:e,b:o};return gt.runKernel(Is,s)}const eo=le({mul_:vu});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ss(n,t,e,o,s="NHWC",r){const a=n[3],c=[...t,a],i=On(s);return ue(n,c,e,r,o,null,null,i)}function rn(n,t,e,o,s,r,a="channelsLast"){const[c,i]=wn(t);let l;if(a==="channelsLast")l=[c,i,n[3],n[3]];else if(a==="channelsFirst")l=[c,i,n[1],n[1]];else throw new Error(`Unknown dataFormat ${a}`);return ue(n,l,e,o,s,r,!1,a)}function $n(n,t,e,o,s,r,a="NDHWC"){const[c,i,l]=is(t);let u,f;if(a==="NDHWC")f="channelsLast",u=[c,i,l,n[4],n[4]];else if(a==="NCDHW")f="channelsFirst",u=[c,i,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${a}`);return An(n,u,e,o,s,!1,f,r)}function ue(n,t,e,o,s,r,a=!1,c="channelsLast"){let[i,l,u,f]=[-1,-1,-1,-1];if(c==="channelsLast")[i,l,u,f]=n;else if(c==="channelsFirst")[i,f,l,u]=n;else throw new Error(`Unknown dataFormat ${c}`);const[d,h,,p]=t,[m,g]=wn(e),[I,y]=wn(o),k=Ve(d,I),w=Ve(h,y),{padInfo:x,outHeight:b,outWidth:S}=Cu(s,l,u,m,g,k,w,r,c),v=a?p*f:p;let T;return c==="channelsFirst"?T=[i,v,b,S]:c==="channelsLast"&&(T=[i,b,S,v]),{batchSize:i,dataFormat:c,inHeight:l,inWidth:u,inChannels:f,outHeight:b,outWidth:S,outChannels:v,padInfo:x,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:h,effectiveFilterHeight:k,effectiveFilterWidth:w,dilationHeight:I,dilationWidth:y,inShape:n,outShape:T,filterShape:t}}function An(n,t,e,o,s,r=!1,a="channelsLast",c){let[i,l,u,f,d]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[i,l,u,f,d]=n;else if(a==="channelsFirst")[i,d,l,u,f]=n;else throw new Error(`Unknown dataFormat ${a}`);const[h,p,m,,g]=t,[I,y,k]=is(e),[w,x,b]=is(o),S=Ve(h,w),v=Ve(p,x),T=Ve(m,b),{padInfo:N,outDepth:F,outHeight:D,outWidth:C}=Fu(s,l,u,f,I,y,k,S,v,T,c),M=r?g*d:g;let E;return a==="channelsFirst"?E=[i,M,F,D,C]:a==="channelsLast"&&(E=[i,F,D,C,M]),{batchSize:i,dataFormat:a,inDepth:l,inHeight:u,inWidth:f,inChannels:d,outDepth:F,outHeight:D,outWidth:C,outChannels:M,padInfo:N,strideDepth:I,strideHeight:y,strideWidth:k,filterDepth:h,filterHeight:p,filterWidth:m,effectiveFilterDepth:S,effectiveFilterHeight:v,effectiveFilterWidth:T,dilationDepth:w,dilationHeight:x,dilationWidth:b,inShape:n,outShape:E,filterShape:t}}function Tu(n,t,e,o,s){o==null&&(o=Xr(n,t,e));const r=n[0],a=n[1],c=we((r-t+2*o)/e+1,s),i=we((a-t+2*o)/e+1,s);return[c,i]}function Nu(n,t,e,o,s,r){s==null&&(s=Xr(n,t,o));const a=n[0],c=n[1],i=n[2],l=we((a-t+2*s)/o+1,r),u=we((c-t+2*s)/o+1,r),f=we((i-t+2*s)/o+1,r);return[l,u,f,e]}function Xr(n,t,e,o=1){const s=Ve(t,o);return Math.floor((n[0]*(e-1)-e+s)/2)}function wn(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function is(n){return typeof n=="number"?[n,n,n]:n}function Ve(n,t){return t<=1?n:n+(n-1)*(t-1)}function Cu(n,t,e,o,s,r,a,c,i){let l,u,f;if(typeof n=="number"){l={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const h=Tu([t,e],r,o,n,c);u=h[0],f=h[1]}else if(n==="same"){u=Math.ceil(t/o),f=Math.ceil(e/s);const d=Math.max(0,(u-1)*o+r-t),h=Math.max(0,(f-1)*s+a-e),p=Math.floor(d/2),m=d-p,g=Math.floor(h/2),I=h-g;l={top:p,bottom:m,left:g,right:I,type:"SAME"}}else if(n==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-r+1)/o),f=Math.ceil((e-a+1)/s);else if(typeof n=="object"){const d=i==="channelsLast"?n[1][0]:n[2][0],h=i==="channelsLast"?n[1][1]:n[2][1],p=i==="channelsLast"?n[2][0]:n[3][0],m=i==="channelsLast"?n[2][1]:n[3][1];l={top:d,bottom:h,left:p,right:m,type:d===0&&h===0&&p===0&&m===0?"VALID":"EXPLICIT"},u=we((t-r+d+h)/o+1,c),f=we((e-a+p+m)/s+1,c)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:l,outHeight:u,outWidth:f}}function Fu(n,t,e,o,s,r,a,c,i,l,u){let f,d,h,p;if(typeof n=="number"){f={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=Nu([t,e,o,1],c,1,s,n,u);d=g[0],h=g[1],p=g[2]}else if(n==="same"){d=Math.ceil(t/s),h=Math.ceil(e/r),p=Math.ceil(o/a);const m=(d-1)*s+c-t,g=(h-1)*r+i-e,I=(p-1)*a+l-o,y=Math.floor(m/2),k=m-y,w=Math.floor(g/2),x=g-w,b=Math.floor(I/2),S=I-b;f={top:w,bottom:x,left:b,right:S,front:y,back:k,type:"SAME"}}else if(n==="valid")f={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},d=Math.ceil((t-c+1)/s),h=Math.ceil((e-i+1)/r),p=Math.ceil((o-l+1)/a);else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:f,outDepth:d,outHeight:h,outWidth:p}}function we(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function no(n){const[t,e,o]=wn(n);return t===1&&e===1&&o===1}function vs(n,t){return no(n)||no(t)}function On(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mu(n,t){const o={x:jt(n,"x","reshape","string_or_numeric")},s={shape:t};return gt.runKernel(dr,o,s)}const Zr=le({reshape_:Mu});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eu(n,t){let e=jt(n,"broadcastTo","x");const o=e.shape;if(t.some(l=>!(l>0)||l%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const l=e.shape.slice();for(;l.length<t.length;)l.unshift(1);e=Zr(e,l)}const s=e.shape,r=Array.from(t);for(let l=t.length-1;l>=0;l--)if(s[l]===t[l])r[l]=1;else if(e.shape[l]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${t}].`);if(r.map((l,u)=>l>1?u:-1).filter(l=>l>=0).length===0)return jr(e);const c={x:e},i={reps:r};return gt.runKernel(Nr,c,i)}const Ru=le({broadcastTo_:Eu});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yr(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function Du(n,t,e){const o=n.length+t.length,s=[];let r=0,a=0;for(let c=0;c<o;c++)e.indexOf(c)===-1?s.push(n[r++]):s.push(t[a++]);return s}function te(n,t){const e=[],o=n.length;for(let r=0;r<o;r++)t.indexOf(r)===-1&&e.push(n[r]);const s=t.map(r=>n[r]);return[e,s]}function Fe(n,t){const e=t.map(o=>1);return Du(n,e,t)}function Me(n,t,e){j(Yr(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function Xt(n,t){if(Yr(n,t))return null;const e=[];for(let o=0;o<t;++o)n.indexOf(o)===-1&&e.push(o);return n.forEach(o=>e.push(o)),e}function Jr(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function Zt(n,t){const e=[];for(let o=t-n;o<t;++o)e.push(o);return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $u(n,t){let e=jt(n,"a","sub"),o=jt(t,"b","sub");[e,o]=xs(e,o);const s={a:e,b:o};return gt.runKernel(ys,s)}const Au=le({sub_:$u});var Qr={exports:{}};(function(n){(function(t,e,o){function s(i){var l=this,u=c();l.next=function(){var f=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=f-(l.c=f|0)},l.c=1,l.s0=u(" "),l.s1=u(" "),l.s2=u(" "),l.s0-=u(i),l.s0<0&&(l.s0+=1),l.s1-=u(i),l.s1<0&&(l.s1+=1),l.s2-=u(i),l.s2<0&&(l.s2+=1),u=null}function r(i,l){return l.c=i.c,l.s0=i.s0,l.s1=i.s1,l.s2=i.s2,l}function a(i,l){var u=new s(i),f=l&&l.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,f&&(typeof f=="object"&&r(f,u),d.state=function(){return r(u,{})}),d}function c(){var i=4022871197,l=function(u){u=String(u);for(var f=0;f<u.length;f++){i+=u.charCodeAt(f);var d=.02519603282416938*i;i=d>>>0,d-=i,d*=i,i=d>>>0,d-=i,i+=d*4294967296}return(i>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=a:o&&o.amd?o(function(){return a}):this.alea=a})(Te,n,!1)})(Qr);var ta={exports:{}};(function(n){(function(t,e,o){function s(c){var i=this,l="";i.x=0,i.y=0,i.z=0,i.w=0,i.next=function(){var f=i.x^i.x<<11;return i.x=i.y,i.y=i.z,i.z=i.w,i.w^=i.w>>>19^f^f>>>8},c===(c|0)?i.x=c:l+=c;for(var u=0;u<l.length+64;u++)i.x^=l.charCodeAt(u)|0,i.next()}function r(c,i){return i.x=c.x,i.y=c.y,i.z=c.z,i.w=c.w,i}function a(c,i){var l=new s(c),u=i&&i.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(d+h)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(typeof u=="object"&&r(u,l),f.state=function(){return r(l,{})}),f}e&&e.exports?e.exports=a:o&&o.amd?o(function(){return a}):this.xor128=a})(Te,n,!1)})(ta);var ea={exports:{}};(function(n){(function(t,e,o){function s(c){var i=this,l="";i.next=function(){var f=i.x^i.x>>>2;return i.x=i.y,i.y=i.z,i.z=i.w,i.w=i.v,(i.d=i.d+362437|0)+(i.v=i.v^i.v<<4^(f^f<<1))|0},i.x=0,i.y=0,i.z=0,i.w=0,i.v=0,c===(c|0)?i.x=c:l+=c;for(var u=0;u<l.length+64;u++)i.x^=l.charCodeAt(u)|0,u==l.length&&(i.d=i.x<<10^i.x>>>4),i.next()}function r(c,i){return i.x=c.x,i.y=c.y,i.z=c.z,i.w=c.w,i.v=c.v,i.d=c.d,i}function a(c,i){var l=new s(c),u=i&&i.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(d+h)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(typeof u=="object"&&r(u,l),f.state=function(){return r(l,{})}),f}e&&e.exports?e.exports=a:o&&o.amd?o(function(){return a}):this.xorwow=a})(Te,n,!1)})(ea);var na={exports:{}};(function(n){(function(t,e,o){function s(c){var i=this;i.next=function(){var u=i.x,f=i.i,d,h;return d=u[f],d^=d>>>7,h=d^d<<24,d=u[f+1&7],h^=d^d>>>10,d=u[f+3&7],h^=d^d>>>3,d=u[f+4&7],h^=d^d<<7,d=u[f+7&7],d=d^d<<13,h^=d^d<<9,u[f]=h,i.i=f+1&7,h};function l(u,f){var d,h=[];if(f===(f|0))h[0]=f;else for(f=""+f,d=0;d<f.length;++d)h[d&7]=h[d&7]<<15^f.charCodeAt(d)+h[d+1&7]<<13;for(;h.length<8;)h.push(0);for(d=0;d<8&&h[d]===0;++d);for(d==8?h[7]=-1:h[d],u.x=h,u.i=0,d=256;d>0;--d)u.next()}l(i,c)}function r(c,i){return i.x=c.x.slice(),i.i=c.i,i}function a(c,i){c==null&&(c=+new Date);var l=new s(c),u=i&&i.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(d+h)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(u.x&&r(u,l),f.state=function(){return r(l,{})}),f}e&&e.exports?e.exports=a:o&&o.amd?o(function(){return a}):this.xorshift7=a})(Te,n,!1)})(na);var sa={exports:{}};(function(n){(function(t,e,o){function s(c){var i=this;i.next=function(){var u=i.w,f=i.X,d=i.i,h,p;return i.w=u=u+1640531527|0,p=f[d+34&127],h=f[d=d+1&127],p^=p<<13,h^=h<<17,p^=p>>>15,h^=h>>>12,p=f[d]=p^h,i.i=d,p+(u^u>>>16)|0};function l(u,f){var d,h,p,m,g,I=[],y=128;for(f===(f|0)?(h=f,f=null):(f=f+"\0",h=0,y=Math.max(y,f.length)),p=0,m=-32;m<y;++m)f&&(h^=f.charCodeAt((m+32)%f.length)),m===0&&(g=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,m>=0&&(g=g+1640531527|0,d=I[m&127]^=h+g,p=d==0?p+1:0);for(p>=128&&(I[(f&&f.length||0)&127]=-1),p=127,m=4*128;m>0;--m)h=I[p+34&127],d=I[p=p+1&127],h^=h<<13,d^=d<<17,h^=h>>>15,d^=d>>>12,I[p]=h^d;u.w=g,u.X=I,u.i=p}l(i,c)}function r(c,i){return i.i=c.i,i.w=c.w,i.X=c.X.slice(),i}function a(c,i){c==null&&(c=+new Date);var l=new s(c),u=i&&i.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(d+h)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(u.X&&r(u,l),f.state=function(){return r(l,{})}),f}e&&e.exports?e.exports=a:o&&o.amd?o(function(){return a}):this.xor4096=a})(Te,n,!1)})(sa);var oa={exports:{}};(function(n){(function(t,e,o){function s(c){var i=this,l="";i.next=function(){var f=i.b,d=i.c,h=i.d,p=i.a;return f=f<<25^f>>>7^d,d=d-h|0,h=h<<24^h>>>8^p,p=p-f|0,i.b=f=f<<20^f>>>12^d,i.c=d=d-h|0,i.d=h<<16^d>>>16^p,i.a=p-f|0},i.a=0,i.b=0,i.c=-1640531527,i.d=1367130551,c===Math.floor(c)?(i.a=c/4294967296|0,i.b=c|0):l+=c;for(var u=0;u<l.length+20;u++)i.b^=l.charCodeAt(u)|0,i.next()}function r(c,i){return i.a=c.a,i.b=c.b,i.c=c.c,i.d=c.d,i}function a(c,i){var l=new s(c),u=i&&i.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(d+h)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(typeof u=="object"&&r(u,l),f.state=function(){return r(l,{})}),f}e&&e.exports?e.exports=a:o&&o.amd?o(function(){return a}):this.tychei=a})(Te,n,!1)})(oa);var ra={exports:{}};const Ou={},Vu=Object.freeze(Object.defineProperty({__proto__:null,default:Ou},Symbol.toStringTag,{value:"Module"})),Pu=Il(Vu);(function(n){(function(t,e,o){var s=256,r=6,a=52,c="random",i=o.pow(s,r),l=o.pow(2,a),u=l*2,f=s-1,d;function h(w,x,b){var S=[];x=x==!0?{entropy:!0}:x||{};var v=I(g(x.entropy?[w,k(e)]:w??y(),3),S),T=new p(S),N=function(){for(var F=T.g(r),D=i,C=0;F<l;)F=(F+C)*s,D*=s,C=T.g(1);for(;F>=u;)F/=2,D/=2,C>>>=1;return(F+C)/D};return N.int32=function(){return T.g(4)|0},N.quick=function(){return T.g(4)/4294967296},N.double=N,I(k(T.S),e),(x.pass||b||function(F,D,C,M){return M&&(M.S&&m(M,T),F.state=function(){return m(T,{})}),C?(o[c]=F,D):F})(N,v,"global"in x?x.global:this==o,x.state)}function p(w){var x,b=w.length,S=this,v=0,T=S.i=S.j=0,N=S.S=[];for(b||(w=[b++]);v<s;)N[v]=v++;for(v=0;v<s;v++)N[v]=N[T=f&T+w[v%b]+(x=N[v])],N[T]=x;(S.g=function(F){for(var D,C=0,M=S.i,E=S.j,R=S.S;F--;)D=R[M=f&M+1],C=C*s+R[f&(R[M]=R[E=f&E+D])+(R[E]=D)];return S.i=M,S.j=E,C})(s)}function m(w,x){return x.i=w.i,x.j=w.j,x.S=w.S.slice(),x}function g(w,x){var b=[],S=typeof w,v;if(x&&S=="object")for(v in w)try{b.push(g(w[v],x-1))}catch{}return b.length?b:S=="string"?w:w+"\0"}function I(w,x){for(var b=w+"",S,v=0;v<b.length;)x[f&v]=f&(S^=x[f&v]*19)+b.charCodeAt(v++);return k(x)}function y(){try{var w;return d&&(w=d.randomBytes)?w=w(s):(w=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(w)),k(w)}catch{var x=t.navigator,b=x&&x.plugins;return[+new Date,t,b,t.screen,k(e)]}}function k(w){return String.fromCharCode.apply(0,w)}if(I(o.random(),e),n.exports){n.exports=h;try{d=Pu}catch{}}else o["seed"+c]=h})(typeof self<"u"?self:Te,[],Math)})(ra);var Bu=Qr.exports,Lu=ta.exports,Wu=ea.exports,_u=na.exports,Hu=sa.exports,zu=oa.exports,Ee=ra.exports;Ee.alea=Bu;Ee.xor128=Lu;Ee.xorwow=Wu;Ee.xorshift7=_u;Ee.xor4096=Hu;Ee.tychei=zu;var aa=Ee;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gu{constructor(t=0,e=1,o,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=o,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=aa.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uu(n,t=0,e=1,o="float32",s){const r=Q(n,o),a=new Gu(t,e,null,s);for(let c=0;c<r.values.length;c++)r.values[c]=a.nextValue();return r.toTensor()}const so=le({randomUniform_:Uu});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qu(n,t){const e=[];for(let r=0;r<t.length;r++)t[r]&&e.push(r);const o=Q(n,"int32"),s=Q([e.length,n.length],"int32");for(let r=0;r<e.length;r++){const a=o.indexToLoc(e[r]),c=r*n.length;s.values.set(a,c)}return s.toTensor()}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ju(n,t,e){const o=Ku(n,t,e),s=o<0?-(o+1):o;n.splice(s,0,t)}function Ku(n,t,e){return Zu(n,t,e||Xu)}function Xu(n,t){return n>t?1:n<t?-1:0}function Zu(n,t,e){let o=0,s=n.length,r=0,a=!1;for(;o<s;){r=o+(s-o>>>1);const c=e(t,n[r]);c>0?o=r+1:(s=r,a=!c)}return a?o:-o-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yu(n,t,e,o,s){return Ts(n,t,e,o,s,0)}function Ju(n,t,e,o,s,r){return Ts(n,t,e,o,s,0,!1,r,!0)}function Qu(n,t,e,o,s,r){return Ts(n,t,e,o,s,r,!0)}function Ts(n,t,e,o,s,r,a=!1,c=!1,i=!1){const l=[];for(let g=0;g<t.length;g++)t[g]>s&&l.push({score:t[g],boxIndex:g,suppressBeginIndex:0});l.sort(oo);const u=r>0?-.5/r:0,f=[],d=[];for(;f.length<e&&l.length>0;){const g=l.pop(),{score:I,boxIndex:y,suppressBeginIndex:k}=g;if(I<s)break;let w=!1;for(let x=f.length-1;x>=k;--x){const b=tf(n,y,f[x]);if(b>=o){w=!0;break}if(g.score=g.score*ef(o,u,b),g.score<=s)break}g.suppressBeginIndex=f.length,w||(g.score===I?(f.push(y),d.push(g.score)):g.score>s&&ju(l,g,oo))}const h=f.length,p=e-h;c&&p>0&&(f.push(...new Array(p).fill(0)),d.push(...new Array(p).fill(0)));const m={selectedIndices:f};return a&&(m.selectedScores=d),i&&(m.validOutputs=h),m}function tf(n,t,e){const o=n.subarray(t*4,t*4+4),s=n.subarray(e*4,e*4+4),r=Math.min(o[0],o[2]),a=Math.min(o[1],o[3]),c=Math.max(o[0],o[2]),i=Math.max(o[1],o[3]),l=Math.min(s[0],s[2]),u=Math.min(s[1],s[3]),f=Math.max(s[0],s[2]),d=Math.max(s[1],s[3]),h=(c-r)*(i-a),p=(f-l)*(d-u);if(h<=0||p<=0)return 0;const m=Math.max(r,l),g=Math.max(a,u),I=Math.min(c,f),y=Math.min(i,d),k=Math.max(I-m,0)*Math.max(y-g,0);return k/(h+p-k)}function ef(n,t,e){const o=Math.exp(t*e*e);return e<=n?o:0}function oo(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nf(n,t){const e=n[0].length;n.forEach((s,r)=>{j(s.length===e,()=>`Error in concat${e}D: rank of tensors[${r}] must be the same as the rank of the rest (${e})`)}),j(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const o=n[0];n.forEach((s,r)=>{for(let a=0;a<e;a++)j(a===t||s[a]===o[a],()=>`Error in concat${e}D: Shape of tensors[${r}] (${s}) does not match the shape of the rest (${o}) along the non-concatenated axis ${r}.`)})}function Un(n,t){const e=n[0].slice();for(let o=1;o<n.length;o++)e[t]+=n[o][t];return e}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ut;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(Ut||(Ut={}));function sf(n,t,e){let o=new Array;if(e==null&&t==null)return o;if(t==null)for(;o.length<n+e.length;)o.push(-1);else o=t.slice();if(e==null)return o;if(n+e.length!==o.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${o.length}`);for(let s=1;s<e.length;++s){const r=e[s],a=o[o.length-e.length+s],c=o[a];if(r>=0)if(c>=0){if(c!==r)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${s+n}] = ${r} but shape[${s+n}] = ${c}`)}else o[a]=r}return o}function of(n){const t={FIRST_DIM_SIZE:Ut.FIRST_DIM_SIZE,VALUE_ROWIDS:Ut.VALUE_ROWIDS,ROW_LENGTHS:Ut.ROW_LENGTHS,ROW_SPLITS:Ut.ROW_SPLITS,ROW_LIMITS:Ut.ROW_LIMITS,ROW_STARTS:Ut.ROW_STARTS},e=[];for(const o of n)if(o in t)e.push(t[o]);else break;return e}function rf(n){return n.length===0?0:n[0]===Ut.FIRST_DIM_SIZE?n.length-1:n.length}function af(n,t){if(n==null||t==null)return;const e=n.length,o=t.length;if(e>=o)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${o})`);for(let s=0;s<Math.min(e,o-1);++s){const r=n[s],a=t[s+1];if(r>=0&&a>=0&&r!==1&&r!==a)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${s-n.length}] = ${r} but ragged tensor input.flatValues.shape[${s-n.length}] = ${a}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cf(n,t,e){const o=e*(typeof n=="number"?n:n[0]),s=t*(typeof n=="number"?n:n[1]);return[o,s]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ia(n,t,e,o=!0){let s=[];if(o)s=s.concat(t.slice(0)),s.push(n[0]/e),s=s.concat(n.slice(1));else{s=s.concat(n[0]);const r=t.length;for(let a=0;a<r;++a)s=s.concat([n[a+1]/t[a],t[a]]);s=s.concat(n.slice(r+1))}return s}function ca(n,t,e=!0){const o=[];if(e){o.push(t);for(let s=t+1;s<n;++s)s<=2*t?(o.push(s),o.push(s-(t+1))):o.push(s)}else{const s=[],r=[];for(let a=1;a<n;++a)a>=t*2+1||a%2===1?r.push(a):s.push(a);o.push(...s),o.push(0),o.push(...r)}return o}function la(n,t,e,o=!0){const s=[];o?s.push(n[0]/e):s.push(n[0]*e);for(let r=1;r<n.length;++r)r<=t.length?o?s.push(t[r-1]*n[r]):s.push(n[r]/t[r-1]):s.push(n[r]);return s}function lf(n,t){const e=[0];for(let o=0;o<t;++o)e.push(n[o][0]);return e}function uf(n,t,e){const o=n.slice(0,1);for(let s=0;s<e;++s)o.push(n[s+1]-t[s][0]-t[s][1]);return o}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ff=1.7580993408473768,df=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hf=.3275911,pf=.254829592,gf=-.284496736,mf=1.421413741,If=-1.453152027,yf=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function We(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let o=0;o<e.length;o+=2)e[o]=n[o/2],e[o+1]=t[o/2];return e}function wf(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let o=0;o<n.length;o+=2)t[o/2]=n[o],e[o/2]=n[o+1];return{real:t,imag:e}}function kf(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),o=new Float32Array(t);for(let s=0;s<n.length;s+=4)e[Math.floor(s/4)]=n[s],o[Math.floor(s/4)]=n[s+1];return{real:e,imag:o}}function xf(n){const t=Math.floor(n.length/4),e=new Float32Array(t),o=new Float32Array(t);for(let s=2;s<n.length;s+=4)e[Math.floor(s/4)]=n[s],o[Math.floor(s/4)]=n[s+1];return{real:e,imag:o}}function ua(n,t){const e=n[t*2],o=n[t*2+1];return{real:e,imag:o}}function bf(n,t,e,o){n[o*2]=t,n[o*2+1]=e}function Sf(n,t){const e=new Float32Array(n/2),o=new Float32Array(n/2);for(let s=0;s<Math.ceil(n/2);s++){const r=(t?2:-2)*Math.PI*(s/n);e[s]=Math.cos(r),o[s]=Math.sin(r)}return{real:e,imag:o}}function vf(n,t,e){const o=(e?2:-2)*Math.PI*(n/t),s=Math.cos(o),r=Math.sin(o);return{real:s,imag:r}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qn="->",Tf=/->/g,ro=",",ao="...";function Nf(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(Tf,"").length)/qn.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${qn}").`);const[o,s]=n.split(qn);j(o.indexOf(ao)===-1,()=>`The ellipsis notation ("${ao}") is not supported yet.`);const r=o.split(ro),a=r.length;if(t!==a)throw new Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const c=[];for(let d=0;d<s.length;++d){const h=s[d];if(!r.some(p=>p.indexOf(h)!==-1))throw new Error(`Output subscripts contain the label ${h} not present in the input subscripts.`);c.indexOf(h)===-1&&c.push(h)}for(let d=0;d<o.length;++d){const h=o[d];c.indexOf(h)===-1&&h!==ro&&c.push(h)}const i=new Array(r.length);for(let d=0;d<a;++d){if(new Set(r[d].split("")).size!==r[d].length)throw new Error(`Found duplicate axes in input component ${r[d]}. Support for duplicate axes in input is not implemented yet.`);i[d]=[];for(let h=0;h<r[d].length;++h)i[d].push(c.indexOf(r[d][h]))}const l=c.length,u=s.length,f=[];for(let d=u;d<l;++d)f.push(d);return{allDims:c,summedDims:f,idDims:i}}function Cf(n,t){let e=new Array(n);e.fill(-1);for(let s=0;s<t.length;++s)e[t[s]]=s;const o=[];for(let s=0;s<n;++s)e[s]===-1&&o.push(s);return e=e.filter(s=>s!==-1),{permutationIndices:e,expandDims:o}}function Ff(n,t,e){const o=new Array(n);for(let s=0;s<e.length;++s){const r=e[s].shape;for(let a=0;a<t[s].length;++a)o[t[s][a]]===void 0?o[t[s][a]]=r[a]:j(o[t[s][a]]===r[a],()=>`Expected dimension ${o[t[s][a]]} at axis ${a} of input shaped ${JSON.stringify(r)}, but got dimension ${r[a]}`)}}function Mf(n,t){const e=n,o=[];let s=0;n.length===0&&e.push(-1),s=n.length+1;for(let a=0;a<s;++a)o.push([]);const r=[];for(let a=0;a<e.length;++a){const c=e[a],i=Rf(t,c);for(const l of i)r.indexOf(l)===-1&&(o[a].push(l),r.push(l))}return{path:e,steps:o}}function Ef(n){return n.every((t,e)=>t===e)}function Rf(n,t){const e=[];for(let o=0;o<n.length;++o)(n[o].length===0||n[o].indexOf(t)!==-1||t===-1)&&e.push(o);return e}function Df(n,t,e=0){let o=[];if(typeof t=="number")j(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),o=new Array(t).fill(n.shape[e]/t);else{const s=t.reduce((a,c)=>(c===-1&&(a+=1),a),0);j(s<=1,()=>"There should be only one negative value in split array.");const r=t.indexOf(-1);if(r!==-1){const a=t.reduce((c,i)=>i>0?c+i:c);t[r]=n.shape[e]-a}j(n.shape[e]===t.reduce((a,c)=>a+c),()=>"The sum of sizes must match the size of the axis dimension."),o=t}return o}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $f(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function Af(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function Of(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function Pf(n,t){return`size ${n} must be non-negative, not ${t}`}function Bf(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Lf(n,t){const e=W(n),o=W(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${o}. inputShape=${n} outputShape= ${t}`}function Wf(n,t){const e=W(n),o=W(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${o}. inputShape=${n} outputShape=${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function io(){return"segment ids must be >= 0"}function _f(){return"segment ids are not increasing"}function Hf(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function zf(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gf(n,t,e,o){const s=t.shape.length,r=n.shape.length;if(o!==0&&(o<-s||o>s))throw new Error(`Expect batchDims in the range of [-${s}, ${s}], but got ${o}`);if(o<0&&(o+=s),o>r)throw new Error(`batchDims (${o}) must be less than rank(x) (
    ${r}).`);if(e<o)throw new Error(`batchDims (${o}) must be less than or equal to axis (${e}).`);for(let f=0;f<o;++f)if(n.shape[f]!==t.shape[f])throw new Error(`x.shape[${f}]: ${n.shape[f]} should be equal to indices.shape[${f}]: ${t.shape[f]}.`);const a=n.shape[e],c=[];let i=1,l=1,u=1;for(let f=0;f<o;++f)c.push(n.shape[f]),i*=n.shape[f];for(let f=o;f<e;f++)c.push(n.shape[f]),l*=n.shape[f];for(let f=o;f<s;f++)c.push(t.shape[f]);for(let f=e+1;f<r;f++)c.push(n.shape[f]),u*=n.shape[f];return{batchSize:i,sliceSize:u,outerSize:l,dimSize:a,outputShape:c}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kn(n){try{return n.map(t=>nn(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function Uf(n){return n.map(t=>ye(t))}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&j(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qf=qu;class Vn extends ko{constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new ni(this,Qs())}nextDataId(){return Vn.nextDataId++}write(t,e,o){this.firstUse&&(this.firstUse=!1,it().get("IS_NODE")&&pe(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const s={id:this.nextDataId()};return this.data.set(s,{values:t,dtype:o,refCount:1}),s}makeTensorInfo(t,e,o){let s;if(e==="string"&&o!=null&&o.length>0&&Fn(o[0])){const r=o.map(a=>ye(a));s=this.write(r,t,e)}else s=this.write(o,t,e);return{dataId:s,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,o,s,r){this.data.set(t,{values:e,dtype:s,refCount:r})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){const{dtype:e,complexTensorInfos:o}=this.data.get(t);if(e==="complex64"){const s=this.readSync(o.real.dataId),r=this.readSync(o.imag.dataId);return We(s,r)}return this.data.get(t).values}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const o=e.map(s=>nn(s));return Q(t.shape,t.dtype,o)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Q(t.shape,t.dtype,e)}makeOutput(t,e,o){return Qs().makeTensorFromTensorInfo(this.makeTensorInfo(e,o,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:o}=this.data.get(t);o!=null&&(this.disposeData(o.real.dataId,!0),this.disposeData(o.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){const e=Be();return t(),{kernelMs:Be()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){U([t],"where");const e=this.readSync(t.dataId);return qf(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}Vn.nextDataId=0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jf(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const Kf=n=>{const{x:t}=n.inputs,e=n.backend;U(t,"abs");let o=new Float32Array(W(t.shape));const s=e.data.get(t.dataId).values;return o=jf(s),e.makeOutput(o,t.shape,t.dtype)},Xf={kernelName:yi,backendName:"cpu",kernelFunc:Kf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ht(n){return(t,e,o,s,r)=>{const a=Dn(t,e),c=a.length,i=Z(a),l=W(a),u=bt(r,l),f=t.length,d=e.length,h=Z(t),p=Z(e),m=yn(t,a),g=yn(e,a);if(m.length+g.length===0)for(let I=0;I<u.length;++I)u[I]=n(o[I%o.length],s[I%s.length]);else for(let I=0;I<u.length;++I){const y=on(I,c,i),k=y.slice(-f);m.forEach(S=>k[S]=0);const w=qt(k,f,h),x=y.slice(-d);g.forEach(S=>x[S]=0);const b=qt(x,d,p);u[I]=n(o[w],s[b])}return[u,a]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ct(n){const{inputs:t,backend:e}=n,{real:o,imag:s}=t,r=e.data.get(o.dataId).values,a=e.data.get(s.dataId).values,c=e.makeTensorInfo(o.shape,"complex64"),i=e.data.get(c.dataId);return i.complexTensorInfos={real:e.makeTensorInfo(o.shape,"float32",r),imag:e.makeTensorInfo(s.shape,"float32",a)},c}const Zf={kernelName:Di,backendName:"cpu",kernelFunc:Ct};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xn(n,t,e="float32"){if(e==="complex64"){const s=xn(n,t,"float32"),r=xn(n,t,"float32");return Ct({inputs:{real:s,imag:r},backend:n})}const o=St(W(t),e);return n.makeTensorInfo(t,e,o)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kt(n){const{inputs:t,backend:e}=n,{x:o}=t;return e.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}const Yf={kernelName:ms,backendName:"cpu",kernelFunc:Kt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function be(n){const{inputs:t,backend:e}=n,{input:o}=t,s=e.data.get(o.dataId).complexTensorInfos.real,r=e.data.get(s.dataId).values;return e.makeTensorInfo(s.shape,s.dtype,r)}const Jf={kernelName:Ac,backendName:"cpu",kernelFunc:be};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qf(n,t,e,o){if(o==="int32"){const s=Int32Array.from(n);return[t,"int32",s]}if(o==="bool"){const s=Ce([0],e),[r,a]=ht((c,i)=>c!==i?1:0)(t,[],n,s,"bool");return[a,"bool",r]}throw new Error(`Error in Cast: failed to cast ${e} to ${o}`)}function ce(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{dtype:r}=o;if(r==="complex64"){if(s.dtype==="complex64")return Kt({inputs:{x:s},backend:e});const u=xn(e,s.shape,s.dtype),f=ce({inputs:{x:s},backend:e,attrs:{dtype:"float32"}}),d=Ct({inputs:{real:f,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(f),d}if(s.dtype==="complex64"){const u=be({inputs:{input:s},backend:e}),f=ce({inputs:{x:u},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(u),f}if(!ci(s.dtype,r)){const u=Kt({inputs:{x:s},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:r}}const a=e.data.get(s.dataId).values,[c,i,l]=Qf(a,s.shape,s.dtype,r);return e.makeTensorInfo(c,i,l)}const td={kernelName:gs,backendName:"cpu",kernelFunc:ce};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mt(n,t,e,o){return e==null?({inputs:s,backend:r})=>{const{a,b:c}=s,i=r;U([a,c],n);const l=i.data.get(a.dataId).values,u=i.data.get(c.dataId).values,f=a.dtype==="string"?kn(l):l,d=a.dtype==="string"?kn(u):u,h=o||a.dtype,[p,m]=t(a.shape,c.shape,f,d,h);return i.makeTensorInfo(m,h,p)}:({inputs:s,backend:r})=>{const{a,b:c}=s,i=r;if(a.dtype==="complex64"||c.dtype==="complex64"){const l=ce({inputs:{x:a},backend:i,attrs:{dtype:"complex64"}}),u=i.data.get(l.dataId),f=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,h=i.data.get(f.dataId).values,p=i.data.get(d.dataId).values,m=ce({inputs:{x:c},backend:i,attrs:{dtype:"complex64"}}),g=i.data.get(m.dataId),I=g.complexTensorInfos.real,y=g.complexTensorInfos.imag,k=i.data.get(I.dataId).values,w=i.data.get(y.dataId).values,[x,b,S]=e(a.shape,c.shape,h,p,k,w),v=i.makeTensorInfo(S,"float32",x),T=i.makeTensorInfo(S,"float32",b),N=Ct({inputs:{real:v,imag:T},backend:i});return i.disposeIntermediateTensorInfo(l),i.disposeIntermediateTensorInfo(m),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(T),N}else{const l=i.data.get(a.dataId).values,u=i.data.get(c.dataId).values,f=o||a.dtype,[d,h]=t(a.shape,c.shape,l,u,f);return i.makeTensorInfo(h,f,d)}}}function Ns(n){return(t,e,o,s,r,a)=>{const c=Dn(t,e),i=W(c),l=c.length,u=Z(c),f=bt("float32",i),d=bt("float32",i),h=yn(t,c),p=yn(e,c),m=We(o,s),g=We(r,a),I=t.length,y=Z(t),k=e.length,w=Z(e);if(h.length+p.length===0)for(let x=0;x<f.length;x++){const b=x%m.length,S=x%g.length,v=n(m[b*2],m[b*2+1],g[S*2],g[S*2+1]);f[x]=v.real,d[x]=v.imag}else for(let x=0;x<f.length;x++){const b=on(x,l,u),S=b.slice(-I);h.forEach(D=>S[D]=0);const v=qt(S,I,y),T=b.slice(-k);p.forEach(D=>T[D]=0);const N=qt(T,k,w),F=n(m[v*2],m[v*2+1],g[N*2],g[N*2+1]);f[x]=F.real,d[x]=F.imag}return[f,d,c]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ed=ht((n,t)=>n+t),nd=Ns((n,t,e,o)=>({real:n+e,imag:t+o})),_e=mt(En,ed,nd),sd={kernelName:En,backendName:"cpu",kernelFunc:_e};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fa(n,t,e,o,s){const r=W(o),a=St(s,e);for(let c=0;c<n.length;c++){const i=n[c];if(i<0)throw new Error("Input x must be non-negative!");i>=s||(r>0?a[i]+=t[c]:a[i]+=1)}return a}function od(n,t,e,o=!1){const s=n.shape[0],r=n.shape[1],a=Q([s,e],t.dtype);for(let c=0;c<s;c++)for(let i=0;i<r;i++){const l=n.get(c,i);if(l<0)throw new Error("Input x must be non-negative!");l>=e||(o?a.set(1,c,l):t.size>0?a.set(a.get(c,l)+t.get(c,i),c,l):a.set(a.get(c,l)+1,c,l))}return a}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qe(n){return(t,e,o)=>{const s=bt(e,t.length);for(let r=0;r<t.length;++r)s[r]=n(t[r],o);return s}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function et(n,t,e){return({inputs:o,attrs:s,backend:r})=>{const{x:a}=o;if(U(a,n),a.dtype==="string"||e==="string")throw new Error("unaryKernelFunc does not support string input/output");const c=r,i=c.data.get(a.dataId).values,l=W(a.shape),u=e||a.dtype,f=xt(u,l);for(let d=0;d<l;++d)f[d]=t(i[d],s);return c.makeTensorInfo(a.shape,u,f)}}function je(n,t,e){return({inputs:o,attrs:s,backend:r})=>{const{x:a}=o;if(U(a,n),a.dtype==="string"||e==="string")throw new Error("unaryKernelFunc does not support string input/output");const c=r,i=c.data.get(a.dataId).values,l=e||a.dtype,u=t(i,l,s);return c.makeTensorInfo(a.shape,l,u)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rd=qe(n=>Math.ceil(n)),ad=je(Oo,rd),id={kernelName:Oo,backendName:"cpu",kernelFunc:ad};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(n,t,e,o){const s=xt(e,W(t));if(o&&e!=="string"){let r=0;n.forEach(a=>{const c=W(a.shape);s.set(a.vals,r),r+=c})}else{let r=0;n.forEach(a=>{const c=e==="string"?kn(a.vals):a.vals;let i=0;for(let l=0;l<a.shape[0];++l){const u=l*t[1]+r;for(let f=0;f<a.shape[1];++f)s[u+f]=c[i++]}r+=a.shape[1]})}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ld=ht((n,t)=>n===t?1:0),da=mt(Ho,ld,null,"bool"),ud={kernelName:Ho,backendName:"cpu",kernelFunc:da};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fd=qe(n=>Math.exp(n)),ha=je(zo,fd,"float32"),dd={kernelName:zo,backendName:"cpu",kernelFunc:ha};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hd=qe(n=>Math.expm1(n)),pd=je(Go,hd),gd={kernelName:Go,backendName:"cpu",kernelFunc:pd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const md=qe(n=>Math.floor(n)),Id=je(Uo,md),yd={kernelName:Uo,backendName:"cpu",kernelFunc:Id};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wd(n,t,e,o,s,r,a,c,i){const l=Q([o,r],e);for(let u=0;u<o;u++){const f=[];let d=0;for(let h=0;h<s;h++){const p=n[u*s+h];d+=p*a[h],f.push(p)}if(d<0||d>=i/r)throw new Error(`Invalid indices: ${f} does not index into ${c}`);for(let h=0;h<r;h++)l.values[u*r+h]=t.get(...t.indexToLoc(d*r+h))}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(n,t,e){const o=Q(e,n.dtype);for(let s=0;s<o.size;++s){const a=o.indexToLoc(s).slice(),c=a[0],i=a[2],l=t.locToIndex([c,i]);a[2]=t.values[l];const u=n.locToIndex(a);0<=u&&u<n.values.length&&(o.values[s]=n.values[u])}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xd=ht((n,t)=>n>t?1:0),bd=mt(jo,xd,null,"bool"),Sd={kernelName:jo,backendName:"cpu",kernelFunc:bd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vd=ht((n,t)=>n>=t?1:0),Td=mt(Ko,vd,null,"bool"),Nd={kernelName:Ko,backendName:"cpu",kernelFunc:Td};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cd=ht((n,t)=>n<t?1:0),Fd=mt(Jo,Cd,null,"bool"),Md={kernelName:Jo,backendName:"cpu",kernelFunc:Fd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ed=ht((n,t)=>n<=t?1:0),Rd=mt(Qo,Ed,null,"bool"),Dd={kernelName:Qo,backendName:"cpu",kernelFunc:Rd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $d(n,t,e){const o=(t-n)/(e-1),s=St(e,"float32");s[0]=n;for(let r=1;r<s.length;r++)s[r]=s[r-1]+o;return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ad=qe(n=>Math.log(n)),Od=je(tr,Ad),Vd={kernelName:tr,backendName:"cpu",kernelFunc:Od};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(n,t,e,o){const s=bt(o,W(e));for(let r=0;r<s.length;++r){const a=r*t;let c=n[a];for(let i=0;i<t;++i){const l=n[a+i];(Number.isNaN(l)||l>c)&&(c=l)}s[r]=c}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bd=ht((n,t)=>Math.max(n,t)),Ld=mt(rr,Bd),Wd={kernelName:rr,backendName:"cpu",kernelFunc:Ld};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _d=ht((n,t)=>Math.min(n,t)),Hd=mt(ar,_d),zd={kernelName:ar,backendName:"cpu",kernelFunc:Hd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pa=ht((n,t)=>n*t),Gd=Ns((n,t,e,o)=>({real:n*e-t*o,imag:n*o+t*e})),Pn=mt(Is,pa,Gd),Ud={kernelName:Is,backendName:"cpu",kernelFunc:Pn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qd(n,t,e){const o=ks(-1,e);return pa([],t,o,n,e)}function jd(n){const{inputs:t,backend:e}=n,{x:o}=t;U(o,"neg");const s=e.data.get(o.dataId).values,[r,a]=qd(s,o.shape,o.dtype);return e.makeTensorInfo(a,o.dtype,r)}const Kd={kernelName:bc,backendName:"cpu",kernelFunc:jd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xd=ht((n,t)=>n!==t?1:0),Zd=mt(cr,Xd,null,"bool"),Yd={kernelName:cr,backendName:"cpu",kernelFunc:Zd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ga(n,t,e,o,s){const r=t.length,a=W(t),c=Z(t),i=Z(s),l=bt(e,W(s));for(let u=0;u<a;++u){const f=on(u,r,c),d=new Array(f.length);for(let p=0;p<d.length;p++)d[p]=f[o[p]];const h=qt(d,r,i);l[h]=n[u]}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tt(n){const{inputs:t,attrs:e,backend:o}=n,{x:s}=t,{perm:r}=e;U(s,"transpose");const a=s.shape.length,c=new Array(a);for(let f=0;f<c.length;f++)c[f]=s.shape[r[f]];const i=o.data.get(s.dataId).values,l=ga(i,s.shape,s.dtype,r,c);return{dataId:o.write(l,c,s.dtype),shape:c,dtype:s.dtype}}const Jd={kernelName:al,backendName:"cpu",kernelFunc:Tt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(n,t,e,o){const[s,r]=te(n,o),a=Ue(t,"int32"),c=St(W(s),a),i=W(r);for(let l=0;l<c.length;++l){const u=l*i;let f=1;for(let d=0;d<i;++d)f*=e[u+d];c[l]=f}return{outVals:c,outShape:s,outDtype:a}}function th(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r,keepDims:a}=o;U(s,"prod");const c=s.shape.length,i=Nt(r,s.shape),l=Xt(i,c);let u=i,f=s;const d=[];l!=null&&(f=Tt({inputs:{x:s},backend:e,attrs:{perm:l}}),d.push(f),u=Zt(u.length,c));const h=e.data.get(f.dataId).values,{outVals:p,outShape:m,outDtype:g}=Qd(f.shape,f.dtype,h,u);let I=m;return a&&(I=Fe(m,i)),d.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.makeTensorInfo(I,g,p)}const eh={kernelName:Rc,backendName:"cpu",kernelFunc:th};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var At=Ut;class bn{constructor(t,e,o,s,r,a,c,i,l,u){this.shape=t,this.shapeShape=e,this.values=o,this.valuesShape=s,this.valuesDType=r,this.defaultValue=a,this.defaultValueShape=c,this.rowPartitionValues=i,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=of(u),this.raggedRank=rf(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===At.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===At.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case At.VALUE_ROWIDS:return bn.getMaxWidthValueRowID(e);case At.ROW_SPLITS:return bn.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${At[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let o=0;for(let s=0;s<e-1;++s){const r=t[s+1]-t[s];r>o&&(o=r)}return o}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let o=0,s=t[0],r=0;for(let a=1;a<e;++a){const c=t[a];c!==s&&(s=c,r=Math.max(a-o,r),o=a)}return Math.max(e-o,r)}tensorShapeFromTensor(t,e,o=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return lo(t,o)}calculateOutputSize(t){const e=this.valuesShape,o=this.defaultValueShape;af(o,e);const s=this.tensorShapeFromTensor(this.shape,this.shapeShape),a=sf(this.raggedRank,s,e);a[0]<0&&(a[0]=t);for(let c=1;c<=this.raggedRank;++c)a[c]<0&&(a[c]=this.getMaxWidth(c));return a}calculateFirstParentOutputIndex(t,e,o){const s=Math.min(t,o),r=[];let a=0;for(let c=0;c<s;++c,a+=e)r.push(a);for(let c=s;c<t;++c)r.push(-1);return j(r.length===t,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(t,e,o,s){const r=t.length,a=[];for(let c=0;c<r-1;++c){const i=t[c+1]-t[c];let l=Math.min(s,i),u=e[c];u===-1&&(l=0);for(let f=0;f<l;++f)a.push(u),u+=o;for(let f=0;f<i-l;++f)a.push(-1)}if(r>0&&a.length!==t[r-1])throw new Error("Invalid row split size.");return a}calculateOutputIndexValueRowID(t,e,o,s){const r=t.length,a=[];if(r===0)return[];let c=0,i=t[0];if(i>=e.length)throw new Error(`Got currentValueRowId=${i}, which is not less than ${e.length}`);let l=e[i];a.push(l);for(let u=1;u<r;++u){const f=t[u];if(f===i)l>=0&&(++c,c<s?l+=o:l=-1);else{if(c=0,i=f,f>=e.length)throw new Error(`Got nextValueRowId=${f} which is not less than ${e.length}`);l=e[f]}a.push(l)}if(a.length!==t.length)throw new Error("Invalid row ids.");return a}calculateOutputIndex(t,e,o,s){const r=this.getRowPartitionTensor(t),a=this.getRowPartitionTypeByDimension(t);switch(a){case At.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,e,o,s);case At.ROW_SPLITS:if(r.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(r,e,o,s);default:throw new Error(`Unsupported partition type: ${At[a]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case At.FIRST_DIM_SIZE:return t[0];case At.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case At.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${At[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),o=this.calculateOutputSize(e),s=new Array(this.raggedRank+1);s[s.length-1]=1;for(let i=s.length-2;i>=0;--i)s[i]=s[i+1]*o[i+1];const r=lo(o,!1),a=xt(this.valuesDType,W(r));if(s[0]*o[0]>0){let i=this.calculateFirstParentOutputIndex(e,s[0],o[0]);for(let l=1;l<=this.raggedRank;++l)i=this.calculateOutputIndex(l-1,i,s[l],o[l]);this.setOutput(this.raggedRank,i,a,r)}return[r,a]}setOutput(t,e,o,s){if(o.length===0)return;const r=this.values,a=o;let c=s.slice();c=c.slice(t+1);const i=W(c),l=e.length;let u=this.defaultValue;if(u.length!==i&&u.length!==1){const p=this.defaultValueShape;du(()=>{const m=Zr(u,p);u=Ru(m,c).dataSync()})}let f=0,d=0,h=0;for(let p=0;p<=l;++p){let m=p<l?e[p]:-1;if(m===h){++h;continue}if(d<h){const g=r.subarray(f*i),I=a.subarray(d*i),y=(h-d)*i;co(I,g,y)}if(p>=l){const g=o.length;m=Math.floor(g/i)}if(m>h)if(this.defaultValue.length===1)a.subarray(h*i,m*i).fill(this.defaultValue[0]),h=m;else for(;m>h;){const g=a.slice(h*i);co(g,u,i),++h}m<0?(f=p+1,d=h):(f=p,d=h,h=d+1)}}}function co(n,t,e){for(let o=0;o<e;o++)n[o]=t[o]}function lo(n,t){const e=[];for(let o of n){if(o<0){if(!t)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}e.push(o)}return e}function nh(n,t,e,o,s,r,a,c,i,l){return new bn(n,t,e,o,s,r,a,c,i,l).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sh(n,t,e,o){const s=n===t,r=n<t&&e<0,a=t<n&&e>1;if(s||r||a)return St(0,o);const c=Math.abs(Math.ceil((t-n)/e)),i=St(c,o);t<n&&e===1&&(e=-1),i[0]=n;for(let l=1;l<i.length;l++)i[l]=i[l-1]+e;return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oh=qe(n=>1/Math.sqrt(n)),rh=je(gr,oh),ah={kernelName:gr,backendName:"cpu",kernelFunc:rh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qe(n,t,e,o,s,r,a,c,i,l){const u=[o/s,s],f=n.values,d=t.values;if(o===0)return Q(e,t.dtype);const h=Q(u,t.dtype);typeof i=="string"||typeof i=="number"?h.values.fill(i):typeof i=="boolean"&&h.values.fill(+i);for(let p=0;p<r;p++){const m=[];let g=0;for(let I=0;I<a;I++){const y=f[p*a+I];m.push(y),g+=y*c[I]}if(g<0||g>=o/s)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let I=0;I<s;I++)l?h.values[g*s+I]+=d[p*s+I]:h.values[g*s+I]=t.rank===0?d[0]:d[p*s+I]}return h}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ma=et(kr,n=>1/(1+Math.exp(-n))),ih={kernelName:kr,backendName:"cpu",kernelFunc:ma};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ch(n,t,e,o,s){const r=yu(o,t,e),a=W(e),c=Z(o);if(r){const f=wu(t,c);return s==="string"?n.slice(f,f+a):n.subarray(f,f+a)}const i=s==="string"?kn(n):n,l=Q(o,s,i),u=Q(e,s);for(let f=0;f<u.size;++f){const d=u.indexToLoc(f),h=d.map((p,m)=>p+t[m]);u.set(l.get(...h),...d)}return s==="string"?Uf(u.values):u.values}function Se(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{begin:r,size:a}=o;U(s,"slice");const[c,i]=ku(s,r,a);mu(s,c,i);const l=e.data.get(s.dataId).values,u=ch(l,c,i,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,u)}const lh={kernelName:zc,backendName:"cpu",kernelFunc:Se};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uh(n,t,e,o,s,r,a){const c=t[0],i=r[0],l=new Array(i),u=new Array(c),f=t[1];if(i===0){if(c!==0)throw new Error($f(c));const g=xt(e,0),I=xt(s,0);return[g,[0,f],I,l,u]}let d=!0,h=0;const p=new Array(i).fill(0);for(let g=0;g<c;++g){const I=n[g*f];if(I<0)throw new Error(Af(g,I));if(I>=i)throw new Error(Of(g,I,i));++p[I],d=d&&I>=h,h=I}let m=!0;for(let g=0;g<i;++g){const I=p[g]===0;l[g]=I,m=m&&!I,p[g]=Math.max(p[g],1),g>0&&(p[g]+=p[g-1])}if(m&&d){const g=n,I=o;for(let y=0;y<c;++y)u[y]=y;return[g,[c,f],I,l,u]}else{const g=p[i-1],I=xt(e,g*f),y=xt(s,g),k=new Array(i).fill(0);for(let w=0;w<c;++w){const x=n[w*f],b=k[x],S=(x===0?0:p[x-1])+b;k[x]++;for(let v=0;v<f;++v)I[S*f+v]=n[w*f+v];y[S]=o[w],u[w]=S}for(let w=0;w<i;++w)if(k[w]===0){const b=w===0?0:p[w-1];I[b*f+0]=w;for(let S=1;S<f;++S)I[b*f+S]=0;y[b]=a}return[I,[g,f],y,l,u]}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fh(n,t,e,o,s){const r=W(o),a=t[0],c=s.length,i=[];let l=1,u=-1;for(let g=0;g<c;++g){const I=s[g];if(I===-1){if(u!==-1)throw new Error(Vf(u,g));u=g,i.push(1)}else{if(I<0)throw new Error(Pf(g,I));l*=I,i.push(I)}}if(u!==-1){if(l<=0)throw new Error(Bf());const g=Math.trunc(r/l);if(l*g!==r)throw new Error(Lf(o,i));i[u]=g}if(W(i)!==r)throw new Error(Wf(o,i));const d=o.length,h=[];if(d>0){h[d-1]=1;for(let g=d-2;g>=0;--g)h[g]=h[g+1]*o[g+1]}const p=[];if(c>0){p[c-1]=1;for(let g=c-2;g>=0;--g)p[g]=p[g+1]*i[g+1]}const m=xt(e,a*c);for(let g=0;g<a;++g){let I=0;for(let y=0;y<d;++y)I+=n[g*d+y]*h[y];for(let y=0;y<c;++y)m[g*c+y]=Math.trunc(I/p[y]),I%=p[y]}return[m,[a,c],i]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ia(n,t,e,o,s,r=!1,a=0){const c=o.length,i=[t[0],n.length/t[0]],l=i[1],f=c>0?s[c-1]+1:0;if(f<0)throw new Error(io());const d=t.slice();d[0]=f;const h=d.reduce((k,w)=>k*w,1),p=xt(e,h);if(c===0)return f>0&&p.fill(a),[p,d];if(f<=0)throw new Error(io());let m=0,g=1,I=0,y=s[m];for(;;){let k=0;if(g<c){if(k=s[g],y===k){++g;continue}if(y>=k)throw new Error(_f())}if(y<0||y>=f)throw new Error(Hf(y,f));y>I&&p.fill(a,I*l,y*l);for(let w=m;w<g;++w){const x=o[w];if(x<0||x>=i[0])throw new Error(zf(w,o[w],i[0]));for(let b=0;b<l;b++)p[y*l+b]+=n[x*l+b]}if(r)for(let w=0;w<l;w++)p[y*l+w]/=g-m;if(m=g,++g,I=y+1,y=k,g>c)break}return I<f&&p.fill(a,I*l,f*l),[p,d]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dh=et(br,n=>Math.sqrt(n)),hh={kernelName:br,backendName:"cpu",kernelFunc:dh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ph=ht((n,t)=>{const e=n-t;return e*e}),gh=mt(Sr,ph),mh={kernelName:Sr,backendName:"cpu",kernelFunc:gh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ih(n,t,e,o){const s=Q(n,t.dtype);for(let r=0;r<s.size;r++){const a=s.indexToLoc(r),c=new Array(a.length);for(let i=0;i<c.length;i++)c[i]=a[i]*e[i]+o[i];s.set(t.get(...c),...a)}return s}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yh{constructor(t,e,o,s,r,a){this.separator=ye(t),this.nGramWidths=e,this.leftPad=ye(o),this.rightPad=ye(s),this.padWidth=r,this.preserveShort=a}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const o=this.getPadWidth(e);return Math.max(0,t+2*o-e+1)}createNGrams(t,e,o,s,r,a){for(let c=0;c<r;++c){const i=this.getPadWidth(a),l=Math.max(0,i-c),u=Math.max(0,i-(r-(c+1))),f=a-(l+u),d=e+(l>0?0:c-i);let h=0;h+=l*this.leftPad.length;for(let y=0;y<f;++y)h+=t[d+y].length;h+=u*this.rightPad.length,h+=(l+u+f-1)*this.separator.length,o[s+c]=new Uint8Array(h);const m=o[s+c];let g=0;const I=y=>y.forEach(k=>m[g++]=k);for(let y=0;y<l;++y)I(this.leftPad),I(this.separator);for(let y=0;y<f-1;++y)I(t[d+y]),I(this.separator);if(f>0){I(t[d+f-1]);for(let y=0;y<u;++y)I(this.separator),I(this.rightPad)}else{for(let y=0;y<u-1;++y)I(this.rightPad),I(this.separator);I(this.rightPad)}}}compute(t,e){const o=t.length,s=e.length;if(s>0){let i=e[0];if(i!==0)throw new Error(`First split value must be 0, got ${i}`);for(let l=1;l<s;++l){let u=e[l]>=i;if(u=u&&e[l]<=o,!u)throw new Error(`Invalid split value ${e[l]}, must be in [${i}, ${o}]`);i=e[l]}if(i!==o)throw new Error(`Last split value must be data size. Expected ${o}, got ${i}`)}const r=s-1,a=xt("int32",s);if(o===0||s===0){const i=new Array(o);for(let l=0;l<=r;++l)a[l]=0;return[i,a]}a[0]=0;for(let i=1;i<=r;++i){const l=e[i]-e[i-1];let u=0;this.nGramWidths.forEach(f=>{u+=this.getNumNGrams(l,f)}),this.preserveShort&&l>0&&u===0&&(u=1),a[i]=a[i-1]+u}const c=new Array(a[r]);for(let i=0;i<r;++i){const l=e[i];let u=a[i];if(this.nGramWidths.forEach(f=>{const d=e[i+1]-e[i],h=this.getNumNGrams(d,f);this.createNGrams(t,l,c,u,h,f),u+=h}),this.preserveShort&&u===a[i]){const f=e[i+1]-e[i];if(f===0)continue;const d=f+2*this.padWidth,h=1;this.createNGrams(t,l,c,u,h,d)}}return[c,a]}}function wh(n,t,e,o,s,r,a,c){return new yh(e,o,s,r,a,c).compute(n,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kh(n,t,e,o){if(!n.length)return;if(t.length===0){for(let r=0;r<n.length;++r)o.push(n.subarray(r,r+1));return}if(t.length===1){const r=t[0];let a=n.indexOf(r);for(;a!==-1;){const c=n.subarray(0,a);(!e||c.length!==0)&&o.push(c),n=n.subarray(a+1),a=n.indexOf(r)}(!e||n.length!==0)&&o.push(n);return}let s=0;for(let r=0;r<n.length+1;r++)if(r===n.length||t.indexOf(n[r])!==-1){const a=n.subarray(s,r);(!e||a.length!==0)&&o.push(a),s=r+1}}function xh(n,t,e){const o=n.length,s=[];let r=0,a=0;const c=new Array(o);for(let d=0;d<o;++d){const h=s.length;kh(n[d],t,e,s);const p=s.length-h;c[d]=p,r+=p,a=Math.max(a,p)}const i=xt("int32",r*2),l=new Array(r),u=[o,a];let f=0;for(let d=0;d<o;++d)for(let h=0;h<c[d];++h)i[f*2]=d,i[f*2+1]=h,l[f]=s[f],++f;return[i,l,u]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bh(n,t){const e=xt("int32",n.length);for(let o=0;o<n.length;++o)e[o]=vl(n[o]).modulo(t).getLowBitsUnsigned();return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sh=ht((n,t)=>n-t),vh=Ns((n,t,e,o)=>({real:n-e,imag:t-o})),Cs=mt(ys,Sh,vh),Th={kernelName:ys,backendName:"cpu",kernelFunc:Cs};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nh(n,t){const e=new Array(n.rank);for(let s=0;s<e.length;s++)e[s]=n.shape[s]*t[s];const o=Q(e,n.dtype);for(let s=0;s<o.values.length;++s){const r=o.indexToLoc(s),a=new Array(n.rank);for(let i=0;i<a.length;i++)a[i]=r[i]%n.shape[i];const c=n.locToIndex(a);o.values[s]=n.values[c]}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tn=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function ya(n,t,e=0,o=n.length-1){for(;o>e;){if(o-e>600){const c=o-e+1,i=t-e+1,l=Math.log(c),u=.5*Math.exp(2*l/3),f=.5*Math.sqrt(l*u*(c-u)/c)*Math.sign(i-c/2),d=Math.max(e,Math.floor(t-i*u/c+f)),h=Math.min(o,Math.floor(t+(c-i)*u/c+f));ya(n,t,d,h)}const s=n[t];let r=e,a=o;for(Xe(n,e,t),tn(n[o],s)>0&&Xe(n,e,o);r<a;){for(Xe(n,r,a),r++,a--;tn(n[r],s)<0;)r=r+1;for(;tn(n[a],s)>0;)a=a-1}tn(n[e],s)===0?Xe(n,e,a):(a=a+1,Xe(n,a,o)),a<=t&&(e=a+1),t<=a&&(o=a-1)}}function Ch(n,t,e,o,s){const r=t[t.length-1],[a,c]=[n.length/r,r],i=bt(e,a*o),l=bt("int32",a*o);for(let f=0;f<a;f++){const d=f*c,h=n.subarray(d,d+c);let p=new Array(h.length);h.forEach((y,k)=>p[k]={value:y,index:k}),o<p.length&&(ya(p,o),p=p.slice(0,o)),s&&p.sort(tn);const m=f*o,g=i.subarray(m,m+o),I=l.subarray(m,m+o);for(let y=0;y<o;y++)g[y]=p[y].value,I[y]=p[y].index}const u=t.slice();return u[u.length-1]=o,[Q(u,e,i),Q(u,"int32",l)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fh(n,t,e,o){const s=Nt(t,e)[0],r=[1,e[0],1];for(let p=0;p<s;p++)r[0]*=e[p];r[1]=e[s];for(let p=s+1;p<e.length;p++)r[2]*=e[p];const a={},c=new Int32Array(e[s]),i=new yt(r,o,n),l=[],u=r[0]===1&&r[2]===1;for(let p=0;p<e[s];p++){let m;if(u)m=n[p].toString();else{const g=[];for(let I=0;I<r[0];I++)for(let y=0;y<r[2];y++)g.push(i.get(I,p,y));m=g.join(",")}if(a[m]!==void 0)c[p]=a[m];else{const g=Object.keys(a).length;a[m]=g,c[p]=g,l.push(p)}}const f=r.slice();f[1]=Object.keys(a).length;const d=new yt(f,o);l.forEach((p,m)=>{for(let g=0;g<r[0];g++)for(let I=0;I<r[2];I++)d.set(i.get(g,p,I),g,m,I)});const h=e.slice();return h[s]=f[1],{outputValues:d.values,outputShape:h,indices:c}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */hu("cpu",()=>new Vn,1);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wa=et(Wo,n=>n>=0?n:Math.exp(n)-1),Mh={kernelName:Wo,backendName:"cpu",kernelFunc:wa};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ka(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{alpha:r}=o;U([s],"leakyRelu");const a=W(s.shape),c=e.data.get(s.dataId).values,i=bt("float32",a);for(let l=0;l<c.length;l++)i[l]=c[l]<0?r*c[l]:c[l];return e.makeTensorInfo(s.shape,"float32",i)}const Eh={kernelName:cc,backendName:"cpu",kernelFunc:ka};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rh=ht((n,t)=>n<0?t*n:n);function xa(n){const{inputs:t,backend:e}=n,{x:o,alpha:s}=t;U([o,s],"prelu");const r=e.data.get(o.dataId).values,a=e.data.get(s.dataId).values,[c,i]=Rh(o.shape,s.shape,r,a,"float32");return e.makeTensorInfo(i,"float32",c)}const Dh={kernelName:Ec,backendName:"cpu",kernelFunc:xa};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ba=et(fr,n=>Math.max(0,n)),$h={kernelName:fr,backendName:"cpu",kernelFunc:ba};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sa=et(hr,n=>Math.min(Math.max(0,n),6)),Ah={kernelName:hr,backendName:"cpu",kernelFunc:Sa};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sn(n,t,e,o,s){if(e==="linear")return Kt({inputs:{x:t},backend:n});if(e==="relu")return ba({inputs:{x:t},backend:n});if(e==="elu")return wa({inputs:{x:t},backend:n});if(e==="relu6")return Sa({inputs:{x:t},backend:n});if(e==="prelu")return xa({inputs:{x:t,alpha:o},backend:n});if(e==="leakyrelu")return ka({inputs:{x:t},backend:n,attrs:{alpha:s}});if(e==="sigmoid")return ma({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rt(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{shape:r}=o,a=W(s.shape),c=ri(r,a),i=W(c);j(a===i,()=>`The new shape (${c}) has ${i} elements and the old shape (${s.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`),e.incRef(s.dataId);const l=e.data.get(s.dataId);if(l.complexTensorInfos!=null){const u=l.complexTensorInfos.real,f=l.complexTensorInfos.imag;u.shape=c,f.shape=c}return{dataId:s.dataId,shape:c,dtype:s.dtype}}const Oh={kernelName:dr,backendName:"cpu",kernelFunc:rt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function va(n){const{inputs:t,backend:e,attrs:o}=n,{a:s,b:r}=t,{transposeA:a,transposeB:c}=o;U([s,r],"matMul");const i=s.shape.length,l=r.shape.length,u=a?s.shape[i-2]:s.shape[i-1],f=c?r.shape[l-1]:r.shape[l-2],d=a?s.shape[i-1]:s.shape[i-2],h=c?r.shape[l-2]:r.shape[l-1],p=s.shape.slice(0,-2),m=r.shape.slice(0,-2),g=W(p),I=W(m),k=Dn(s.shape.slice(0,-2),r.shape.slice(0,-2)).concat([d,h]);j(u===f,()=>`Error in matMul: inner shapes (${u}) and (${f}) of Tensors with shapes ${s.shape} and ${r.shape} and transposeA=${a} and transposeB=${c} must match.`);const w=a?[g,u,d]:[g,d,u],x=c?[I,h,f]:[I,f,h],b=rt({inputs:{x:s},backend:e,attrs:{shape:w}}),S=rt({inputs:{x:r},backend:e,attrs:{shape:x}}),v=a?b.shape[1]:b.shape[2],T=a?b.shape[2]:b.shape[1],N=c?S.shape[1]:S.shape[2],F=Math.max(g,I),D=e.data.get(b.dataId).values,C=e.data.get(S.dataId).values,M=Z(b.shape),E=Z(S.shape),[R,O,$]=a?[M[0],1,M[1]]:[M[0],M[1],1],[A,B,V]=c?[1,E[1],E[0]]:[E[1],1,E[0]],H=T*N,P=Q([F,T,N],b.dtype),z=P.values,L=e.blockSize;for(let G=0;G<F;G++)for(let q=0;q<T;q+=L)for(let K=0;K<N;K+=L)for(let X=0;X<v;X+=L){const Y=Math.min(q+L,T),J=Math.min(K+L,N),tt=Math.min(X+L,v);for(let st=q;st<Y;st++)for(let at=K;at<J;at++){let ut=0;for(let nt=X;nt<tt;nt++){const ft=Math.min(G,g-1)*R,dt=Math.min(G,I-1)*V,Yt=D[ft+st*O+nt*$],It=C[nt*A+at*B+dt];ut+=Yt*It}z[G*H+(st*N+at)]+=ut}}return e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(S),e.makeTensorInfo(k,P.dtype,P.values)}const Vh={kernelName:Fi,backendName:"cpu",kernelFunc:va};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ph(n){const{inputs:t,backend:e,attrs:o}=n,{a:s,b:r,bias:a,preluActivationWeights:c}=t,{transposeA:i,transposeB:l,activation:u,leakyreluAlpha:f}=o;let d,h,p;const m=[];d=va({inputs:{a:s,b:r},attrs:{transposeA:i,transposeB:l},backend:e}),a&&(h=_e({inputs:{a:d,b:a},backend:e}),m.push(d),d=h),u&&(p=Sn(e,d,u,c,f),m.push(d),d=p);for(const I of m)e.disposeIntermediateTensorInfo(I);return d}const Bh={kernelName:dl,backendName:"cpu",kernelFunc:Ph};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lh=et(Fo,n=>Math.acos(n)),Wh={kernelName:Fo,backendName:"cpu",kernelFunc:Lh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _h=et(Mo,n=>Math.acosh(n)),Hh={kernelName:Mo,backendName:"cpu",kernelFunc:_h};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zh(n){const{inputs:t,backend:e}=n,o=t;U(t,"addN");const s=o.map(c=>e.data.get(c.dataId).values),r=Q(o[0].shape,o[0].dtype),a=r.values;for(let c=0;c<o.length;c++){const i=s[c];for(let l=0;l<a.length;l++)a[l]+=i[l]}return e.makeTensorInfo(r.shape,r.dtype,r.values)}const Gh={kernelName:wi,backendName:"cpu",kernelFunc:zh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uh(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r,keepDims:a}=o;U(s,"all");const c=Nt(r,s.shape);let i=c;const l=Xt(i,s.shape.length);let u=s;l!=null&&(u=Tt({inputs:{x:s},backend:e,attrs:{perm:l}}),i=Zt(i.length,s.shape.length)),Me("all",i,u.shape.length);const[f,d]=te(u.shape,i),h=W(d),p=St(W(f),u.dtype),m=e.data.get(u.dataId).values;for(let I=0;I<p.length;++I){const y=I*h;let k=m[y];for(let w=0;w<h;++w){const x=m[y+w];k=k&&x}p[I]=k}l!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(f,u.dtype,p);if(a){const I=Fe(f,c),y=rt({inputs:{x:g},backend:e,attrs:{shape:I}});return e.disposeIntermediateTensorInfo(g),y}return g}const qh={kernelName:ki,backendName:"cpu",kernelFunc:Uh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jh(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r,keepDims:a}=o;U(s,"any");const c=Nt(r,s.shape);let i=c;const l=Xt(i,s.shape.length);let u=s;l!=null&&(u=Tt({inputs:{x:s},backend:e,attrs:{perm:l}}),i=Zt(i.length,s.shape.length)),Me("any",i,u.shape.length);const[f,d]=te(u.shape,i),h=W(d),p=St(W(f),u.dtype),m=e.data.get(u.dataId).values;for(let I=0;I<p.length;++I){const y=I*h;let k=m[y];for(let w=0;w<h;++w){const x=m[y+w];k=k||x}p[I]=k}l!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(f,u.dtype,p);if(a){const I=Fe(f,c),y=rt({inputs:{x:g},backend:e,attrs:{shape:I}});return e.disposeIntermediateTensorInfo(g),y}return g}const Kh={kernelName:xi,backendName:"cpu",kernelFunc:jh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xh(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r}=o;U(s,"argMax");let a=Nt(r,s.shape);const c=Xt(a,s.shape.length);let i=s;const l=[];c!=null&&(i=Tt({inputs:{x:s},backend:e,attrs:{perm:c}}),l.push(i),a=Zt(a.length,i.shape.length)),a=[a[0]],Me("argMax",a,i.shape.length);const[u,f]=te(i.shape,a),d=W(u),h=St(d,"int32"),p=W(f),m=e.data.get(i.dataId).values;for(let g=0;g<h.length;++g){const I=g*p;let y=m[I],k=0;for(let w=0;w<p;++w){const x=m[I+w];x>y&&(y=x,k=w)}h[g]=k}return l.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",h)}const Zh={kernelName:bi,backendName:"cpu",kernelFunc:Xh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yh(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r}=o;U(s,"argMin");let a=Nt(r,s.shape);const c=Xt(a,s.shape.length);let i=s;const l=[];c!=null&&(i=Tt({inputs:{x:s},backend:e,attrs:{perm:c}}),l.push(i),a=Zt(a.length,i.shape.length)),a=[a[0]],Me("argMin",a,i.shape.length);const[u,f]=te(i.shape,a),d=W(u),h=St(d,"int32"),p=W(f),m=e.data.get(i.dataId).values;for(let g=0;g<h.length;++g){const I=g*p;let y=m[I],k=0;for(let w=0;w<p;++w){const x=m[I+w];x<y&&(y=x,k=w)}h[g]=k}return l.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",h)}const Jh={kernelName:Si,backendName:"cpu",kernelFunc:Yh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qh=et(Eo,n=>Math.asin(n)),tp={kernelName:Eo,backendName:"cpu",kernelFunc:Qh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ep=et(Ro,n=>Math.asinh(n)),np={kernelName:Ro,backendName:"cpu",kernelFunc:ep};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sp=et(Do,n=>Math.atan(n)),op={kernelName:Do,backendName:"cpu",kernelFunc:sp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rp=ht((n,t)=>Math.atan2(n,t)),ap=mt(Ao,rp),ip={kernelName:Ao,backendName:"cpu",kernelFunc:ap};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cp=et($o,n=>Math.atanh(n)),lp={kernelName:$o,backendName:"cpu",kernelFunc:cp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fs(n,t,e,o,s,r){const a=s.strideHeight,c=s.strideWidth,i=s.dilationHeight,l=s.dilationWidth,u=s.effectiveFilterHeight,f=s.effectiveFilterWidth,d=s.padInfo.top,h=s.padInfo.left,p=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=Q(s.outShape,e),g=m.values,I=s.outShape[1]*s.outShape[2]*s.outShape[3],y=s.outShape[2]*s.outShape[3],k=s.outShape[3];for(let w=0;w<s.batchSize;++w){const x=w*I,b=w*o[0];for(let S=0;S<s.inChannels;++S)for(let v=0;v<s.outHeight;++v){const T=v*a-d,N=Math.max(0,T),F=Math.min(s.inHeight,u+T),D=x+v*y;for(let C=0;C<s.outWidth;++C){const M=C*c-h,E=Math.max(0,M),R=Math.min(s.inWidth,f+M);let O=p,$=0,A=0;for(let V=N;V<F;V+=i){const H=b+V*o[1];for(let P=E;P<R;P+=l){const z=H+P*o[2],L=n[z+S];r==="max"&&L>O?O=L:r==="avg"&&($+=L,A++)}if(isNaN(O))break}const B=D+C*k+S;g[B]=r==="avg"?$/A:O}}}return m}function Ta(n,t,e,o,s=!1,r=!1){const a=Q(o.outShape,"int32"),c=o.strideHeight,i=o.strideWidth,l=o.dilationHeight,u=o.dilationWidth,f=o.effectiveFilterHeight,d=o.effectiveFilterWidth,h=o.padInfo.top,p=o.padInfo.left,m=Q(t,e,n);for(let g=0;g<o.batchSize;++g)for(let I=0;I<o.inChannels;++I)for(let y=0;y<o.outHeight;++y){const k=y*c-h;let w=k;for(;w<0;)w+=l;const x=Math.min(o.inHeight,f+k);for(let b=0;b<o.outWidth;++b){const S=b*i-p;let v=S;for(;v<0;)v+=u;const T=Math.min(o.inWidth,d+S);let N=Number.NEGATIVE_INFINITY,F=-1;for(let D=w;D<x;D+=l){const C=D-k;for(let M=v;M<T;M+=u){const E=M-S,R=m.get(g,D,M,I);R>N&&(N=R,s?F=r?((g*o.inHeight+D)*o.inWidth+M)*o.inChannels+I:(D*o.inWidth+M)*o.inChannels+I:F=C*d+E)}}a.set(F,g,y,b,I)}}return a}function Na(n,t,e,o,s,r){const a=s.strideDepth,c=s.strideHeight,i=s.strideWidth,l=s.dilationDepth,u=s.dilationHeight,f=s.dilationWidth,d=s.effectiveFilterDepth,h=s.effectiveFilterHeight,p=s.effectiveFilterWidth,m=s.padInfo.front,g=s.padInfo.top,I=s.padInfo.left,y=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,k=Q(s.outShape,e),w=k.values,x=s.outShape[1]*s.outShape[2]*s.outShape[3]*s.outShape[4],b=s.outShape[2]*s.outShape[3]*s.outShape[4],S=s.outShape[3]*s.outShape[4],v=s.outShape[4];for(let T=0;T<s.batchSize;++T){const N=T*x,F=T*o[0];for(let D=0;D<s.inChannels;++D)for(let C=0;C<s.outDepth;++C){const M=C*a-m;let E=M;for(;E<0;)E+=l;const R=Math.min(s.inDepth,d+M),O=N+C*b;for(let $=0;$<s.outHeight;++$){const A=$*c-g;let B=A;for(;B<0;)B+=u;const V=Math.min(s.inHeight,h+A),H=O+$*S;for(let P=0;P<s.outWidth;++P){const z=P*i-I;let L=z;for(;L<0;)L+=f;const G=Math.min(s.inWidth,p+z),q=H+P*v;let K=y,X=0,Y=0;for(let tt=E;tt<R;tt+=l){const st=F+tt*o[1];for(let at=B;at<V;at+=u){const ut=st+at*o[2];for(let nt=L;nt<G;nt+=f){const ft=ut+nt*o[3],dt=n[ft+D];if(r==="max"&&dt>K?K=dt:r==="avg"&&(X+=dt,Y++),isNaN(K))break}if(isNaN(K))break}if(isNaN(K))break}const J=q+D;w[J]=r==="avg"?X/Y:K}}}}return k}function up(n,t){const e=Q(t.outShape,"int32"),o=t.strideDepth,s=t.strideHeight,r=t.strideWidth,a=t.dilationDepth,c=t.dilationHeight,i=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,f=t.effectiveFilterWidth,d=t.padInfo.front,h=t.padInfo.top,p=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let I=0;I<t.outDepth;++I){const y=I*o-d;let k=y;for(;k<0;)k+=a;const w=Math.min(t.inDepth,l+y);for(let x=0;x<t.outHeight;++x){const b=x*s-h;let S=b;for(;S<0;)S+=c;const v=Math.min(t.inHeight,u+b);for(let T=0;T<t.outWidth;++T){const N=T*r-p;let F=N;for(;F<0;)F+=i;const D=Math.min(t.inWidth,f+N);let C=Number.NEGATIVE_INFINITY,M=-1;for(let E=k;E<w;E+=a){const R=E-y;for(let O=S;O<v;O+=c){const $=O-b;for(let A=F;A<D;A+=i){const B=A-N,V=n.get(m,E,O,A,g);V>=C&&(C=V,M=R*u*f+$*u+B)}}}e.set(M,m,I,x,T,g)}}}return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t;U(s,"avgPool");const{filterSize:r,strides:a,pad:c,dimRoundingMode:i}=o,l=1;j(vs(a,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);const u=rn(s.shape,r,a,l,c,i);let f;if(u.filterWidth===1&&u.filterHeight===1&&Ge(u.inShape,u.outShape))f=Kt({inputs:{x:s},backend:e});else{const d=e.data.get(s.dataId).values,h=Z(s.shape),p=Fs(d,s.shape,s.dtype,h,u,"avg");f=e.makeTensorInfo(u.outShape,s.dtype,p.values)}return f}const dp={kernelName:vi,backendName:"cpu",kernelFunc:fp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{filterSize:r,strides:a,pad:c,dimRoundingMode:i,dataFormat:l}=o;U(s,"avgPool3d");const u=$n(s.shape,r,a,1,c,i,l),f=e.data.get(s.dataId).values,d=Na(f,s.shape,s.dtype,Z(s.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const pp={kernelName:Ni,backendName:"cpu",kernelFunc:hp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gp(n){const{inputs:t,backend:e,attrs:o}=n,{dy:s,input:r}=t,{filterSize:a,strides:c,pad:i,dimRoundingMode:l}=o;U([s,r],"avgPool3DGrad");const u=$n(r.shape,a,c,1,i,l),f=u.strideDepth,d=u.strideHeight,h=u.strideWidth,p=u.filterDepth,m=u.filterHeight,g=u.filterWidth,I=u.dilationDepth,y=u.dilationHeight,k=u.dilationWidth,w=u.effectiveFilterDepth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,S=w-1-u.padInfo.front,v=b-1-u.padInfo.left,T=x-1-u.padInfo.top,N=Q(r.shape,"float32"),F=1/(p*m*g),D=e.bufferSync(s);for(let C=0;C<u.batchSize;++C)for(let M=0;M<u.inChannels;++M)for(let E=0;E<u.inDepth;++E)for(let R=0;R<u.inHeight;++R)for(let O=0;O<u.inWidth;++O){const $=E-S,A=R-T,B=O-v;let V=0;for(let H=0;H<w;H+=I){const P=($+H)/f;if(!(P<0||P>=u.outDepth||Math.floor(P)!==P))for(let z=0;z<x;z+=y){const L=(A+z)/d;if(!(L<0||L>=u.outHeight||Math.floor(L)!==L))for(let G=0;G<b;G+=k){const q=(B+G)/h;if(q<0||q>=u.outWidth||Math.floor(q)!==q)continue;V+=D.get(C,P,L,q,M)}}}N.set(V*F,C,E,R,O,M)}return e.makeTensorInfo(N.shape,N.dtype,N.values)}const mp={kernelName:Ci,backendName:"cpu",kernelFunc:gp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ip(n){const{inputs:t,backend:e,attrs:o}=n,{dy:s,input:r}=t,a=r;U([s,r],"avgPoolGrad");const{filterSize:c,strides:i,pad:l}=o,u=rn(a.shape,c,i,1,l),f=u.strideHeight,d=u.strideWidth,h=u.filterHeight,p=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,I=u.effectiveFilterHeight,y=u.effectiveFilterWidth,k=y-1-u.padInfo.left,w=I-1-u.padInfo.top,x=Q(a.shape,"float32"),b=1/(h*p),S=e.data.get(s.dataId).values,v=Q(s.shape,"float32",S);for(let T=0;T<u.batchSize;++T)for(let N=0;N<u.inChannels;++N)for(let F=0;F<u.inHeight;++F)for(let D=0;D<u.inWidth;++D){const C=F-w,M=D-k;let E=0;for(let R=0;R<I;R+=m){const O=(C+R)/f;if(!(O<0||O>=u.outHeight||Math.floor(O)!==O))for(let $=0;$<y;$+=g){const A=(M+$)/d;if(A<0||A>=u.outWidth||Math.floor(A)!==A)continue;E+=v.get(T,O,A,N)}}x.set(E*b,T,F,D,N)}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const yp={kernelName:Ti,backendName:"cpu",kernelFunc:Ip};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,scale:r,offset:a,mean:c,variance:i}=t;j(c.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),j(a==null||c.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),j(r==null||c.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),U([s,c,i,r,a],"batchNorm");let{varianceEpsilon:l}=o;l==null&&(l=.001);const u=e.data.get(s.dataId).values,f=e.data.get(c.dataId).values,d=e.data.get(i.dataId).values,h=r?e.data.get(r.dataId).values:new Float32Array([1]),p=a?e.data.get(a.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=p.length,I=h.length,y=d.length,k=f.length;let w=0,x=0,b=0,S=0;for(let v=0;v<u.length;++v)m[v]=p[w++]+(u[v]-f[x++])*h[b++]/Math.sqrt(d[S++]+l),w>=g&&(w=0),x>=k&&(x=0),b>=I&&(b=0),S>=y&&(S=0);return e.makeTensorInfo(s.shape,s.dtype,m)}const kp={kernelName:sc,backendName:"cpu",kernelFunc:wp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{blockShape:r,crops:a}=o;U([s],"batchToSpaceND");const c=r.reduce((I,y)=>I*y),i=ia(s.shape,r,c),l=ca(i.length,r.length),u=la(s.shape,r,c),f=lf(a,r.length),d=uf(u,a,r.length),h=rt({inputs:{x:s},backend:e,attrs:{shape:i}}),p=Tt({inputs:{x:h},backend:e,attrs:{perm:l}}),m=rt({inputs:{x:p},backend:e,attrs:{shape:u}}),g=Se({inputs:{x:m},backend:e,attrs:{begin:f,size:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const bp={kernelName:Mi,backendName:"cpu",kernelFunc:xp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,weights:r}=t,{size:a}=o,c=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,l=fa(c,i,r.dtype,r.shape,a);return e.makeTensorInfo([a],r.dtype,l)}const vp={kernelName:Ei,backendName:"cpu",kernelFunc:Sp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tp(n){const{inputs:t,backend:e}=n,{s0:o,s1:s}=t,r=e.data.get(o.dataId).values,a=e.data.get(s.dataId).values,c=Dn(Array.from(r),Array.from(a));return e.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const Np={kernelName:Ri,backendName:"cpu",kernelFunc:Tp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cp=et(Vo,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),Fp={kernelName:Vo,backendName:"cpu",kernelFunc:Cp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mp=n=>{const{x:t}=n.inputs,e=n.backend,o=new Float32Array(W(t.shape)),s=e.data.get(t.dataId),r=s.complexTensorInfos.real,a=s.complexTensorInfos.imag,c=e.data.get(r.dataId).values,i=e.data.get(a.dataId).values;for(let l=0;l<c.length;l++){const u=c[l],f=i[l];o[l]=Math.hypot(u,f)}return e.makeOutput(o,t.shape,"float32")},Ep={kernelName:$i,backendName:"cpu",kernelFunc:Mp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function He(n){const{inputs:t,backend:e}=n,{input:o}=t,s=e.data.get(o.dataId).complexTensorInfos.imag,r=e.data.get(s.dataId).values;return e.makeTensorInfo(s.shape,s.dtype,r)}const Rp={kernelName:ic,backendName:"cpu",kernelFunc:He};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ze(n){const{inputs:t,backend:e,attrs:o}=n,{axis:s}=o,r=Nt(s,t[0].shape)[0];let a=Un(t.map(m=>m.shape),r);if(W(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const c=t.filter(m=>W(m.shape)>0);if(c.length===1)return Kt({inputs:{x:c[0]},backend:e});const i=c.map(m=>m.shape);if(nf(i,r),c[0].dtype==="complex64"){const m=c.map(w=>be({inputs:{input:w},backend:e})),g=c.map(w=>He({inputs:{input:w},backend:e})),I=ze({inputs:m,backend:e,attrs:{axis:r}}),y=ze({inputs:g,backend:e,attrs:{axis:r}}),k=Ct({inputs:{real:I,imag:y},backend:e});return m.forEach(w=>e.disposeIntermediateTensorInfo(w)),g.forEach(w=>e.disposeIntermediateTensorInfo(w)),e.disposeIntermediateTensorInfo(I),e.disposeIntermediateTensorInfo(y),k}const l=c.map(m=>{const g=W(m.shape.slice(r));return rt({inputs:{x:m},backend:e,attrs:{shape:[-1,g]}})}),u=l.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=Un(l.map(m=>m.shape),1);const f=l[0].shape[0]===1,d=cd(u,a,t[0].dtype,f),h=Un(c.map(m=>m.shape),r),p=e.makeTensorInfo(h,t[0].dtype,d);return l.forEach(m=>e.disposeIntermediateTensorInfo(m)),p}const Dp={kernelName:Ai,backendName:"cpu",kernelFunc:ze};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ca(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,filter:r}=t,{strides:a,pad:c,dataFormat:i,dilations:l,dimRoundingMode:u}=o;U([s,r],"conv2d");const f=On(i),d=ue(s.shape,r.shape,a,l,c,u,!1,f),h=d.filterHeight,p=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,I=d.padInfo.left,y=d.padInfo.top,k=d.dataFormat==="channelsLast",w=new yt(d.outShape,s.dtype),x=Z(s.shape),b=Z(r.shape),S=x[0],v=k?x[1]:x[2],T=k?x[2]:1,N=k?1:x[1],F=w.strides[0],D=k?w.strides[1]:w.strides[2],C=k?w.strides[2]:1,M=k?1:w.strides[1],E=e.data.get(s.dataId).values,R=e.data.get(r.dataId).values,O=w.values;for(let $=0;$<d.batchSize;++$){const A=$*S,B=$*F;for(let V=0;V<d.outHeight;++V){const H=B+V*D,P=V*d.strideHeight-y;for(let z=0;z<h;++z){const L=P+z*m;if(L<0||L>=d.inHeight)continue;const G=z*b[0],q=A+L*v;for(let K=0;K<d.outWidth;++K){const X=H+K*C,Y=K*d.strideWidth-I;for(let J=0;J<p;++J){const tt=Y+J*g;if(tt<0||tt>=d.inWidth)continue;const st=G+J*b[1],at=q+tt*T;let ut=st;for(let nt=0;nt<d.inChannels;++nt){const ft=E[at+nt*N];for(let dt=0;dt<d.outChannels;++dt)O[X+dt*M]+=ft*R[ut+dt];ut+=d.outChannels}}}}}}return e.makeTensorInfo(w.shape,w.dtype,O)}const $p={kernelName:Oi,backendName:"cpu",kernelFunc:Ca};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ap(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,dy:r}=t,{strides:a,pad:c,dataFormat:i,dimRoundingMode:l,filterShape:u}=o;U([s,r],"conv2dBackpropFilter");const f=On(i),d=ue(s.shape,u,a,1,c,l,!1,f),{strideHeight:h,strideWidth:p,filterHeight:m,filterWidth:g}=d,I=d.dataFormat==="channelsLast",y=new yt(d.filterShape,"float32"),k=d.padInfo.left,w=d.padInfo.top,x=e.data.get(s.dataId).values,b=e.data.get(r.dataId).values,S=new yt(s.shape,s.dtype,x),v=new yt(r.shape,r.dtype,b);for(let T=0;T<m;++T){const N=Math.max(0,Math.ceil((w-T)/h)),F=Math.min(d.outHeight,(d.inHeight+w-T)/h);for(let D=0;D<g;++D){const C=Math.max(0,Math.ceil((k-D)/p)),M=Math.min(d.outWidth,(d.inWidth+k-D)/p);for(let E=0;E<d.inChannels;++E)for(let R=0;R<d.outChannels;++R){let O=0;for(let $=0;$<d.batchSize;++$)for(let A=N;A<F;++A){const B=T+A*h-w;for(let V=C;V<M;++V){const H=D+V*p-k;I?O+=S.get($,B,H,E)*v.get($,A,V,R):O+=S.get($,E,B,H)*v.get($,R,A,V)}}y.set(O,T,D,E,R)}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const Op={kernelName:Vi,backendName:"cpu",kernelFunc:Ap};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(n){const{inputs:t,backend:e,attrs:o}=n,{dy:s,filter:r}=t,{inputShape:a,strides:c,pad:i,dataFormat:l,dimRoundingMode:u}=o;U([s,r],"conv2dBackpropInput");const f=Z(r.shape),d=Z(s.shape);let h=On(l);const p=ue(a,r.shape,c,1,i,u,!1,h),m=new yt(p.inShape,"float32"),g=m.values,I=e.data.get(s.dataId).values,y=e.data.get(r.dataId).values,[k,w,x]=f,{batchSize:b,filterHeight:S,filterWidth:v,inChannels:T,inHeight:N,inWidth:F,outChannels:D,outHeight:C,outWidth:M,strideHeight:E,strideWidth:R}=p;h=p.dataFormat;const O=S-1-p.padInfo.top,$=v-1-p.padInfo.left,A=h==="channelsLast",B=m.strides[0],V=A?m.strides[1]:m.strides[2],H=A?m.strides[2]:1,P=A?1:m.strides[1],z=d[0],L=A?d[1]:d[2],G=A?d[2]:1,q=A?1:d[1];for(let K=0;K<b;++K)for(let X=0;X<T;++X)for(let Y=0;Y<N;++Y){const J=Y-O,tt=Math.max(0,Math.ceil(J/E)),st=Math.min(C,(S+J)/E);for(let at=0;at<F;++at){const ut=at-$,nt=Math.max(0,Math.ceil(ut/R)),ft=Math.min(M,(v+ut)/R);let dt=0;for(let It=tt;It<st;++It){const ee=It*E-J;for(let Et=nt;Et<ft;++Et){const fe=Et*R-ut,Wt=z*K+L*It+G*Et,Jt=k*(S-1-ee)+w*(v-1-fe)+x*X;for(let ne=0;ne<D;++ne){const se=I[Wt+q*ne],oe=y[Jt+ne];dt+=se*oe}}}const Yt=B*K+V*Y+H*at+P*X;g[Yt]=dt}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const Pp={kernelName:Pi,backendName:"cpu",kernelFunc:Vp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,filter:r}=t,{strides:a,pad:c,dilations:i}=o;U([s,r],"conv3d");const l=An(s.shape,r.shape,a,i,c),{filterDepth:u,filterHeight:f,filterWidth:d,dilationDepth:h,dilationHeight:p,dilationWidth:m,padInfo:g}=l,I=g.front,y=g.left,k=g.top,w=new yt(l.outShape,s.dtype),x=e.data.get(s.dataId).values,b=e.data.get(r.dataId).values,S=w.values,v=Z(s.shape),T=Z(r.shape);for(let N=0;N<l.batchSize;++N){const F=N*v[0],D=N*w.strides[0];for(let C=0;C<l.outDepth;++C){const M=D+C*w.strides[1],E=C*l.strideDepth-I;for(let R=0;R<u;++R){const O=E+R*h;if(O<0||O>=l.inDepth)continue;const $=R*T[0],A=F+O*v[1];for(let B=0;B<l.outHeight;++B){const V=M+B*w.strides[2],H=B*l.strideHeight-k;for(let P=0;P<f;++P){const z=H+P*p;if(z<0||z>=l.inHeight)continue;const L=$+P*T[1],G=A+z*v[2];for(let q=0;q<l.outWidth;++q){const K=V+q*l.outChannels,X=q*l.strideWidth-y;for(let Y=0;Y<d;++Y){const J=X+Y*m;if(J<0||J>=l.inWidth)continue;const tt=L+Y*T[2],st=G+J*l.inChannels;let at=tt;for(let ut=0;ut<l.inChannels;++ut){const nt=x[st+ut];for(let ft=0;ft<l.outChannels;++ft)S[K+ft]+=nt*b[at+ft];at+=l.outChannels}}}}}}}}return e.makeTensorInfo(w.shape,w.dtype,w.values)}const Lp={kernelName:Bi,backendName:"cpu",kernelFunc:Bp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,dy:r}=t,{strides:a,pad:c,filterShape:i}=o;U([s,r],"conv3dBackpropFilterV2");const l=Z(s.shape),u=Z(r.shape),f=An(s.shape,i,a,1,c),d=f.strideDepth,h=f.strideHeight,p=f.strideWidth,m=f.filterDepth,g=f.filterHeight,I=f.filterWidth,y=new yt(f.filterShape,"float32"),k=y.values,[w,x,b,S]=y.strides,v=e.data.get(r.dataId).values,[T,N,F,D]=u,C=e.data.get(s.dataId).values,[M,E,R,O]=l,$=f.padInfo.front,A=f.padInfo.left,B=f.padInfo.top;for(let V=0;V<m;++V){const H=Math.max(0,Math.ceil(($-V)/d)),P=Math.min(f.outDepth,(f.inDepth+$-V)/d),z=V*w;for(let L=0;L<g;++L){const G=Math.max(0,Math.ceil((B-L)/h)),q=Math.min(f.outHeight,(f.inHeight+B-L)/h),K=L*x+z;for(let X=0;X<I;++X){const Y=Math.max(0,Math.ceil((A-X)/p)),J=Math.min(f.outWidth,(f.inWidth+A-X)/p),tt=X*b+K;for(let st=0;st<f.inChannels;++st){const at=st*S+tt;for(let ut=0;ut<f.outChannels;++ut){let nt=0;for(let ft=0;ft<f.batchSize;++ft){const dt=ft*M,Yt=ft*T;for(let It=H;It<P;++It){const Et=(V+It*d-$)*E+dt,fe=It*N+Yt;for(let Wt=G;Wt<q;++Wt){const ne=(L+Wt*h-B)*R+Et,se=Wt*F+fe;for(let oe=Y;oe<J;++oe){const Bn=(X+oe*p-A)*O+ne,Ln=oe*D+se;nt+=C[Bn+st]*v[Ln+ut]}}}}k[at+ut]=nt}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const _p={kernelName:Li,backendName:"cpu",kernelFunc:Wp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(n){const{inputs:t,backend:e,attrs:o}=n,{dy:s,filter:r}=t,{pad:a,strides:c,inputShape:i}=o;U([s],"conv3dBackpropInputV2");const l=Z(s.shape),u=Z(r.shape),f=An(i,r.shape,c,1,a),d=new yt(f.inShape,"float32"),h=d.values,[p,m,g,I]=d.strides,y=e.data.get(s.dataId).values,[k,w,x,b]=l,S=e.data.get(r.dataId).values,[v,T,N,F]=u,{batchSize:D,filterDepth:C,filterHeight:M,filterWidth:E,inChannels:R,inDepth:O,inHeight:$,inWidth:A,outChannels:B,outDepth:V,outHeight:H,outWidth:P,strideDepth:z,strideHeight:L,strideWidth:G}=f,q=C-1-f.padInfo.front,K=M-1-f.padInfo.top,X=E-1-f.padInfo.left;for(let Y=0;Y<D;++Y)for(let J=0;J<R;++J)for(let tt=0;tt<O;++tt){const st=tt-q,at=Math.max(0,Math.ceil(st/z)),ut=Math.min(V,(C+st)/z);for(let nt=0;nt<$;++nt){const ft=nt-K,dt=Math.max(0,Math.ceil(ft/L)),Yt=Math.min(H,(M+ft)/L);for(let It=0;It<A;++It){const ee=It-X,Et=Math.max(0,Math.ceil(ee/G)),fe=Math.min(P,(E+ee)/G);let Wt=0;for(let Jt=at;Jt<ut;++Jt){const ne=Jt*z-st;for(let se=dt;se<Yt;++se){const oe=se*L-ft;for(let Ke=Et;Ke<fe;++Ke){const Bn=Ke*G-ee,Ln=k*Y+w*Jt+x*se+b*Ke,Oa=v*(C-1-ne)+T*(M-1-oe)+N*(E-1-Bn)+F*J;for(let cn=0;cn<B;++cn){const Va=y[Ln+cn],Pa=S[Oa+cn];Wt+=Va*Pa}}}}h[p*Y+m*tt+g*nt+I*It+J]=Wt}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const zp={kernelName:Wi,backendName:"cpu",kernelFunc:Hp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gp=et(Po,n=>Math.cos(n)),Up={kernelName:Po,backendName:"cpu",kernelFunc:Gp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qp=et(Bo,n=>Math.cosh(n)),jp={kernelName:Bo,backendName:"cpu",kernelFunc:qp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kp(n){const{inputs:t,backend:e,attrs:o}=n,{image:s,boxes:r,boxInd:a}=t,{cropSize:c,method:i,extrapolationValue:l}=o,[u,f,d,h]=s.shape,p=r.shape[0],[m,g]=c,I=Q([p,m,g,h],"float32"),y=e.data.get(r.dataId).values,k=e.data.get(a.dataId).values,w=e.data.get(s.dataId).values,x=Z(s.shape),b=Z(I.shape);for(let S=0;S<p;S++){const v=S*4,T=y[v],N=y[v+1],F=y[v+2],D=y[v+3],C=k[S];if(C>=u)continue;const M=m>1?(F-T)*(f-1)/(m-1):0,E=g>1?(D-N)*(d-1)/(g-1):0;for(let R=0;R<m;R++){const O=m>1?T*(f-1)+R*M:.5*(T+F)*(f-1);if(O<0||O>f-1){for(let $=0;$<g;$++)for(let A=0;A<h;A++){const B=A+$*b[2]+R*b[1]+S*b[0];I.values[B]=l}continue}if(i==="bilinear"){const $=Math.floor(O),A=Math.ceil(O),B=O-$;for(let V=0;V<g;V++){const H=g>1?N*(d-1)+V*E:.5*(N+D)*(d-1);if(H<0||H>d-1){for(let G=0;G<h;G++){const q=G+V*b[2]+R*b[1]+S*b[0];I.values[q]=l}continue}const P=Math.floor(H),z=Math.ceil(H),L=H-P;for(let G=0;G<h;G++){let q=G+P*x[2]+$*x[1]+C*x[0];const K=w[q];q=G+z*x[2]+$*x[1]+C*x[0];const X=w[q];q=G+P*x[2]+A*x[1]+C*x[0];const Y=w[q];q=G+z*x[2]+A*x[1]+C*x[0];const J=w[q],tt=K+(X-K)*L,st=Y+(J-Y)*L;q=G+V*b[2]+R*b[1]+S*b[0],I.values[q]=tt+(st-tt)*B}}}else for(let $=0;$<g;++$){const A=g>1?N*(d-1)+$*E:.5*(N+D)*(d-1);if(A<0||A>d-1){for(let H=0;H<h;H++){const P=H+$*b[2]+R*b[1]+S*b[0];I.values[P]=l}continue}const B=Math.round(A),V=Math.round(O);for(let H=0;H<h;H++){const P=H+B*x[2]+V*x[1]+C*x[0],z=H+$*b[2]+R*b[1]+S*b[0];I.values[z]=w[P]}}}}return e.makeTensorInfo(I.shape,I.dtype,I.values)}const Xp={kernelName:zi,backendName:"cpu",kernelFunc:Kp};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r,exclusive:a,reverse:c}=o;U(s,"cumprod");const i=Xt([r],s.shape.length);let l=s;i!=null&&(l=Tt({inputs:{x:s},backend:e,attrs:{perm:i}}));const u=Zt(1,s.shape.length)[0];if(u!==l.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);const f=Ue(l.dtype,"int32"),d=bo(W(l.shape),f),h=e.data.get(l.dataId).values,p=l.shape[l.shape.length-1],m=c?(I,y)=>I+p-y-1:(I,y)=>I+y;for(let I=0;I<h.length;I+=p)for(let y=0;y<p;y++){const k=m(I,y);if(y===0)d[k]=a?1:h[k];else{const w=m(I,y-1);d[k]=a?h[w]*d[w]:h[k]*d[w]}}const g=e.makeTensorInfo(l.shape,f,d);if(i!=null){const I=Jr(i),y=Tt({inputs:{x:g},backend:e,attrs:{perm:I}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(l),y}return g}const Yp={kernelName:_i,backendName:"cpu",kernelFunc:Zp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jp(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r,exclusive:a,reverse:c}=o;U(s,"cumsum");const i=Xt([r],s.shape.length);let l=s;i!=null&&(l=Tt({inputs:{x:s},backend:e,attrs:{perm:i}}));const u=Zt(1,s.shape.length)[0];if(u!==l.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);const f=Ue(l.dtype,"int32"),d=St(W(l.shape),f),h=e.data.get(l.dataId).values,p=l.shape[l.shape.length-1],m=c?(I,y)=>I+p-y-1:(I,y)=>I+y;for(let I=0;I<h.length;I+=p)for(let y=0;y<p;y++){const k=m(I,y);if(y===0)d[k]=a?0:h[k];else{const w=m(I,y-1);d[k]=a?h[w]+d[w]:h[k]+d[w]}}const g=e.makeTensorInfo(l.shape,f,d);if(i!=null){const I=Jr(i),y=Tt({inputs:{x:g},backend:e,attrs:{perm:I}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(l),y}return g}const Qp={kernelName:Hi,backendName:"cpu",kernelFunc:Jp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tg(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,weights:r}=t,{size:a,binaryOutput:c}=o;if(s.shape.length===1){const i=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,u=fa(i,l,r.dtype,r.shape,a);return e.makeTensorInfo([a],r.dtype,u)}else if(s.shape.length===2){const i=e.bufferSync(s),l=e.bufferSync(r),u=od(i,l,a,c);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${s.shape.length}.`)}const eg={kernelName:Gi,backendName:"cpu",kernelFunc:tg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{blockSize:r,dataFormat:a}=o;j(a==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${a}`);const c=s.shape[0],i=s.shape[1],l=s.shape[2],u=s.shape[3],f=i*r,d=l*r,h=u/(r*r),p=e.data.get(s.dataId).values,m=new Float32Array(c*f*d*h);let g=0;for(let I=0;I<c;++I)for(let y=0;y<f;++y){const k=Math.floor(y/r),w=y%r;for(let x=0;x<d;++x){const b=Math.floor(x/r),S=x%r,v=(w*r+S)*h;for(let T=0;T<h;++T){const F=T+v+u*(b+l*(k+i*I));m[g++]=p[F]}}}return e.makeTensorInfo([c,f,d,h],s.dtype,m)}const sg={kernelName:Ui,backendName:"cpu",kernelFunc:ng};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fa(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,filter:r}=t,{strides:a,pad:c,dilations:i,dimRoundingMode:l}=o;U([s,r],"depthwiseConv2DNative");const u=Z(s.shape),f=Z(r.shape);let d=i;d==null&&(d=[1,1]),j(vs(a,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${a} and dilations '${d}'`);const h=ue(s.shape,r.shape,a,d,c,l,!0),{filterHeight:p,filterWidth:m,dilationHeight:g,dilationWidth:I,padInfo:y}=h,k=y.left,w=y.top,x=h.outChannels/h.inChannels,b=new yt(h.outShape,s.dtype),S=e.data.get(s.dataId).values,v=e.data.get(r.dataId).values,T=b.values;for(let N=0;N<h.batchSize;++N){const F=N*u[0],D=N*b.strides[0];for(let C=0;C<h.outHeight;++C){const M=D+C*b.strides[1],E=C*h.strideHeight-w;for(let R=0;R<p;++R){const O=E+R*g;if(O<0||O>=h.inHeight)continue;const $=R*f[0],A=F+O*u[1];for(let B=0;B<h.outWidth;++B){const V=M+B*b.strides[2],H=B*h.strideWidth-k;for(let P=0;P<m;++P){const z=H+P*I;if(z<0||z>=h.inWidth)continue;const L=$+P*f[1],G=A+z*h.inChannels;let q=V,K=L;for(let X=0;X<h.inChannels;++X){const Y=S[G+X];for(let J=0;J<x;++J)T[q+J]+=Y*v[K+J];q+=x,K+=x}}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const og={kernelName:qi,backendName:"cpu",kernelFunc:Fa};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,dy:r}=t,{strides:a,dilations:c,pad:i,dimRoundingMode:l,filterShape:u}=o;U([s,r],"depthwiseConv2dNativeBackpropFilter");const f=ue(s.shape,u,a,c,i,l,!0),{strideHeight:d,strideWidth:h,filterHeight:p,filterWidth:m}=f,g=new yt(f.filterShape,"float32"),I=f.padInfo.left,y=f.padInfo.top,k=f.outChannels/f.inChannels,w=e.data.get(s.dataId).values,x=new yt(s.shape,s.dtype,w),b=e.data.get(r.dataId).values,S=new yt(r.shape,r.dtype,b);for(let v=0;v<p;++v){const T=Math.max(0,Math.ceil((y-v)/d)),N=Math.min(f.outHeight,(f.inHeight+y-v)/d);for(let F=0;F<m;++F){const D=Math.max(0,Math.ceil((I-F)/h)),C=Math.min(f.outWidth,(f.inWidth+I-F)/h);for(let M=0;M<f.outChannels;++M){const E=Math.trunc(M/k),R=M%k;let O=0;for(let $=0;$<f.batchSize;++$)for(let A=T;A<N;++A){const B=v+A*d-y;for(let V=D;V<C;++V){const H=F+V*h-I;O+=x.get($,B,H,E)*S.get($,A,V,M)}}g.set(O,v,F,E,R)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const ag={kernelName:ji,backendName:"cpu",kernelFunc:rg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ig(n){const{inputs:t,backend:e,attrs:o}=n,{dy:s,filter:r}=t,{strides:a,dilations:c,pad:i,dimRoundingMode:l,inputShape:u}=o;U([s,r],"depthwiseConv2DNativeBackpropInput");const f=Z(s.shape),d=Z(r.shape),h=ue(u,r.shape,a,c,i,l,!0),p=new yt(h.inShape,"float32"),m=p.values,[g,I,y]=p.strides,k=e.data.get(s.dataId).values,[w,x,b]=f,S=e.data.get(r.dataId).values,[v,T,N]=d,{batchSize:F,filterHeight:D,filterWidth:C,inChannels:M,inHeight:E,inWidth:R,outChannels:O,outHeight:$,outWidth:A,strideHeight:B,strideWidth:V}=h,H=D-1-h.padInfo.top,P=C-1-h.padInfo.left,z=O/M;for(let L=0;L<F;++L)for(let G=0;G<M;++G)for(let q=0;q<E;++q){const K=q-H,X=Math.max(0,Math.ceil(K/B)),Y=Math.min($,(D+K)/B);for(let J=0;J<R;++J){const tt=J-P,st=Math.max(0,Math.ceil(tt/V)),at=Math.min(A,(C+tt)/V);let ut=0;for(let nt=X;nt<Y;++nt){const ft=nt*B-K;for(let dt=st;dt<at;++dt){const Yt=dt*V-tt,It=w*L+x*nt+b*dt,ee=v*(D-1-ft)+T*(C-1-Yt)+N*G;for(let Et=0;Et<z;++Et){const fe=G*z+Et,Wt=k[It+fe],Jt=S[ee+Et];ut+=Wt*Jt}}}m[g*L+I*q+y*J+G]=ut}}return e.makeTensorInfo(p.shape,p.dtype,p.values)}const cg={kernelName:Ki,backendName:"cpu",kernelFunc:ig};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lg(n){const{inputs:t,backend:e}=n,{x:o}=t,s=W(o.shape),r=e.data.get(o.dataId).values,a=Q([s,s],o.dtype),c=a.values;for(let l=0;l<r.length;l++)c[l*s+l]=r[l];const i=[...o.shape,...o.shape];return e.makeTensorInfo(i,a.dtype,a.values)}const ug={kernelName:Xi,backendName:"cpu",kernelFunc:lg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fg={kernelName:Zi,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:o,filter:s}=n,{strides:r,pad:a,dilations:c}=e,i=t,l=i.data.get(o.dataId).values,u=o.shape.length,f=i.data.get(s.dataId).values,d=s.shape.length,{batchSize:h,inHeight:p,inWidth:m,inChannels:g,outHeight:I,outWidth:y,padInfo:k,strideHeight:w,strideWidth:x,filterHeight:b,filterWidth:S,dilationHeight:v,dilationWidth:T,outShape:N}=Ss(o.shape,s.shape,r,a,"NHWC",c),F=W(N),D=N.length,C=xt(o.dtype,F);for(let E=0;E<h;++E)for(let R=0;R<I;++R){const O=R*w-k.top;for(let $=0;$<y;++$){const A=$*x-k.left;for(let B=0;B<g;++B){let V=Number.MIN_SAFE_INTEGER;for(let P=0;P<b;++P){const z=O+P*v;if(z>=0&&z<p)for(let L=0;L<S;++L){const G=A+L*T;if(G>=0&&G<m){const q=qt([E,z,G,B],u,Z(o.shape)),K=qt([P,L,B],d,Z(s.shape)),X=l[q]+f[K];X>V&&(V=X)}}}const H=qt([E,R,$,B],D,Z(N));C[H]=V}}}return{dataId:i.write(Ce(C,o.dtype),N,o.dtype),shape:N,dtype:o.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dg={kernelName:Ps,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:o,filter:s,dy:r}=n,{strides:a,pad:c,dilations:i}=e,l=t,u=Ht(o.shape,l.data.get(o.dataId).values),f=Ht(s.shape,l.data.get(s.dataId).values),{batchSize:d,inHeight:h,inWidth:p,inChannels:m,outHeight:g,outWidth:I,padInfo:y,strideHeight:k,strideWidth:w,filterHeight:x,filterWidth:b,dilationHeight:S,dilationWidth:v,outShape:T}=Ss(o.shape,s.shape,a,c,"NHWC",i);j(r.rank===T.length,()=>`Error in ${Ps}, dy must have the same rank as output ${T.length}, but got ${r.rank}`);const N=Ht(T,l.data.get(r.dataId).values),F=So(s.shape,s.dtype);for(let C=0;C<d;++C)for(let M=0;M<g;++M){const E=M*k-y.top;for(let R=0;R<I;++R){const O=R*w-y.left;for(let $=0;$<m;++$){let A=Number.MIN_SAFE_INTEGER,B=0,V=0;for(let H=0;H<x;++H){const P=E+H*S;if(P>=0&&P<h)for(let z=0;z<b;++z){const L=O+z*v;if(L>=0&&L<p){const G=u[C][P][L][$]+f[H][z][$];G>A&&(A=G,B=H,V=z)}}}F[B][V][$]+=N[C][M][R][$]}}}return{dataId:l.write(Ce(F,o.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hg={kernelName:Vs,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:o,filter:s,dy:r}=n,{strides:a,pad:c,dilations:i}=e,l=t,u=Ht(o.shape,l.data.get(o.dataId).values),f=Ht(s.shape,l.data.get(s.dataId).values),{batchSize:d,inHeight:h,inWidth:p,inChannels:m,outHeight:g,outWidth:I,padInfo:y,strideHeight:k,strideWidth:w,filterHeight:x,filterWidth:b,dilationHeight:S,dilationWidth:v,outShape:T}=Ss(o.shape,s.shape,a,c,"NHWC",i);j(r.rank===T.length,()=>`Error in ${Vs}, dy must have the same rank as output ${T.length}, but got ${r.rank}`);const N=Ht(T,l.data.get(r.dataId).values),F=So(o.shape,o.dtype);for(let C=0;C<d;++C)for(let M=0;M<g;++M){const E=M*k-y.top;for(let R=0;R<I;++R){const O=R*w-y.left;for(let $=0;$<m;++$){let A=Number.MIN_SAFE_INTEGER,B=E<0?0:E,V=O<0?0:O;for(let H=0;H<x;++H){const P=E+H*S;if(P>=0&&P<h)for(let z=0;z<b;++z){const L=O+z*v;if(L>=0&&L<p){const G=u[C][P][L][$]+f[H][z][$];G>A&&(A=G,B=P,V=L)}}}F[C][B][V][$]+=N[C][M][R][$]}}}return{dataId:l.write(Ce(F,o.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function an(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r,keepDims:a}=o;U(s,"sum");let c;s.dtype==="bool"?c=ce({inputs:{x:s},backend:e,attrs:{dtype:"int32"}}):c=Kt({inputs:{x:s},backend:e});const i=c.shape.length,l=Nt(r,c.shape),u=Xt(l,i);let f=l,d=c;u!=null&&(d=Tt({inputs:{x:c},backend:e,attrs:{perm:u}}),f=Zt(f.length,i)),Me("sum",f,d.shape.length);const[h,p]=te(d.shape,f),m=Ue(d.dtype,"int32");let g=xn(e,h,m);const I=W(p),y=e.data.get(g.dataId).values,k=e.data.get(d.dataId).values;for(let w=0;w<y.length;++w){const x=w*I;let b=0;for(let S=0;S<I;++S)b+=k[x+S];y[w]=b}if(a){const w=Fe(g.shape,l),x=g;g=rt({inputs:{x:g},backend:e,attrs:{shape:w}}),e.disposeIntermediateTensorInfo(x)}return e.disposeIntermediateTensorInfo(c),u!=null&&e.disposeIntermediateTensorInfo(d),g}const pg={kernelName:Gc,backendName:"cpu",kernelFunc:an};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gg(n){const{inputs:t,backend:e,attrs:o}=n,{equation:s}=o,r=t,{allDims:a,summedDims:c,idDims:i}=Nf(s,r.length);Ff(a.length,i,r);const{path:l,steps:u}=Mf(c,i),f=u.length;let d=null,h=a.length;const p=[];for(let m=0;m<f;++m){for(const g of u[m]){const{permutationIndices:I,expandDims:y}=Cf(h,i[g]);let k;Ef(I)?k=r[g]:(k=Tt({inputs:{x:r[g]},backend:e,attrs:{perm:I}}),p.push(k));const w=k.shape.slice();for(let x=0;x<y.length;++x)w.splice(y[x],0,1);Ge(k.shape,w)||(k=rt({inputs:{x:k},backend:e,attrs:{shape:w}}),p.push(k)),d===null?d=k:(d=Pn({inputs:{a:k,b:d},backend:e}),p.push(d))}m<f-1&&(l[m]>=0&&(d=an({inputs:{x:d},backend:e,attrs:{axis:l[m]-(a.length-h),keepDims:!1}}),p.push(d)),h--)}for(const m of p)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const mg={kernelName:Yi,backendName:"cpu",kernelFunc:gg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(n){const{inputs:t,backend:e}=n,{dy:o,y:s}=t;U([o,s],"eluGrad");const r=new Float32Array(W(s.shape)),a=e.data.get(s.dataId).values,c=e.data.get(o.dataId).values;for(let i=0;i<a.length;++i){const l=a[i];l>=1?r[i]=c[i]:r[i]=c[i]*(l+1)}return e.makeTensorInfo(s.shape,"float32",r)}const yg={kernelName:Ji,backendName:"cpu",kernelFunc:Ig};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wg=hf,kg=pf,xg=gf,bg=mf,Sg=If,vg=yf,Tg=et(_o,n=>{const t=Math.sign(n),e=Math.abs(n),o=1/(1+wg*e);return t*(1-((((vg*o+Sg)*o+bg)*o+xg)*o+kg)*o*Math.exp(-e*e))}),Ng={kernelName:_o,backendName:"cpu",kernelFunc:Tg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vn(n){const{inputs:t,backend:e,attrs:o}=n,{input:s}=t,{dim:r}=o,a=s.shape.length,c=s.shape.slice();let i=r;return r<0&&(j(-(a+1)<=r,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),i=a+r+1),c.splice(i,0,1),rt({inputs:{x:s},backend:e,attrs:{shape:c}})}const Cg={kernelName:Qi,backendName:"cpu",kernelFunc:vn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fg=ht((n,t)=>n/t),Ms=mt(Lo,Fg),cs={kernelName:Lo,backendName:"cpu",kernelFunc:Ms};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ma(n,t,e){const o=n.shape,s=o[0],r=o[1],a=e.data.get(n.dataId),c=a.complexTensorInfos.real,i=a.complexTensorInfos.imag,l=[s,r],u=W(l),f=bt("float32",u),d=bt("float32",u);for(let g=0;g<s;g++){const I=Se({inputs:{x:c},backend:e,attrs:{begin:[g,0],size:[1,r]}}),y=Se({inputs:{x:i},backend:e,attrs:{begin:[g,0],size:[1,r]}}),k=Ct({inputs:{real:I,imag:y},backend:e}),{real:w,imag:x}=Mg(k,t,e),b=We(w,x);for(let S=0;S<r;S++){const v=ua(b,S);f[g*r+S]=v.real,d[g*r+S]=v.imag}e.disposeIntermediateTensorInfo(I),e.disposeIntermediateTensorInfo(y),e.disposeIntermediateTensorInfo(k)}const h=e.makeTensorInfo(l,"float32",f),p=e.makeTensorInfo(l,"float32",d),m=Ct({inputs:{real:h,imag:p},backend:e});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(p),m}function Mg(n,t,e){const o=W(n.shape),s=e.data.get(n.dataId),r=e.data.get(s.complexTensorInfos.real.dataId).values,a=e.data.get(s.complexTensorInfos.imag.dataId).values;if(Eg(o)){const c=ls(r,a,o,t,e),i=[n.shape[0],n.shape[1]];if(t){const l=e.makeTensorInfo(i,"float32",c.real),u=e.makeTensorInfo(i,"float32",c.imag),f=e.makeTensorInfo([],"float32",ks(o,"float32")),d=Kt({inputs:{x:f},backend:e}),h=cs.kernelFunc({inputs:{a:l,b:f},backend:e}),p=cs.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(h.dataId).values,g=e.data.get(p.dataId).values;return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(p),{real:m,imag:g}}return c}else{const c=We(r,a),i=Rg(c,o,t);return wf(i)}}function Eg(n){return(n&n-1)===0}function ls(n,t,e,o,s){if(e===1)return{real:n,imag:t};const r=We(n,t),a=e/2,c=kf(r),i=c.real,l=c.imag,u=[i.length],f=s.makeTensorInfo(u,"float32",i),d=s.makeTensorInfo(u,"float32",l),h=Ct({inputs:{real:f,imag:d},backend:s}),p=xf(r),m=p.real,g=p.imag,I=[m.length],y=s.makeTensorInfo(I,"float32",m),k=s.makeTensorInfo(I,"float32",g),w=Ct({inputs:{real:y,imag:k},backend:s}),x=ls(i,l,a,o,s),b=x.real,S=x.imag,v=[b.length],T=s.makeTensorInfo(v,"float32",b),N=s.makeTensorInfo(v,"float32",S),F=Ct({inputs:{real:T,imag:N},backend:s}),D=ls(m,g,a,o,s),C=D.real,M=D.imag,E=[C.length],R=s.makeTensorInfo(E,"float32",C),O=s.makeTensorInfo(E,"float32",M),$=Ct({inputs:{real:R,imag:O},backend:s}),A=Sf(e,o),B=[A.real.length],V=s.makeTensorInfo(B,"float32",A.real),H=s.makeTensorInfo(B,"float32",A.imag),P=Ct({inputs:{real:V,imag:H},backend:s}),z=Pn({inputs:{a:P,b:$},backend:s}),L=_e({inputs:{a:F,b:z},backend:s}),G=Cs({inputs:{a:F,b:z},backend:s}),q=be({inputs:{input:L},backend:s}),K=be({inputs:{input:G},backend:s}),X=He({inputs:{input:L},backend:s}),Y=He({inputs:{input:G},backend:s}),J=ze({inputs:[q,K],backend:s,attrs:{axis:0}}),tt=ze({inputs:[X,Y],backend:s,attrs:{axis:0}}),st=s.data.get(J.dataId).values,at=s.data.get(tt.dataId).values;return s.disposeIntermediateTensorInfo(f),s.disposeIntermediateTensorInfo(d),s.disposeIntermediateTensorInfo(h),s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo(k),s.disposeIntermediateTensorInfo(w),s.disposeIntermediateTensorInfo(T),s.disposeIntermediateTensorInfo(N),s.disposeIntermediateTensorInfo(F),s.disposeIntermediateTensorInfo(R),s.disposeIntermediateTensorInfo(O),s.disposeIntermediateTensorInfo($),s.disposeIntermediateTensorInfo(V),s.disposeIntermediateTensorInfo(H),s.disposeIntermediateTensorInfo(P),s.disposeIntermediateTensorInfo(z),s.disposeIntermediateTensorInfo(L),s.disposeIntermediateTensorInfo(G),s.disposeIntermediateTensorInfo(q),s.disposeIntermediateTensorInfo(X),s.disposeIntermediateTensorInfo(K),s.disposeIntermediateTensorInfo(Y),s.disposeIntermediateTensorInfo(J),s.disposeIntermediateTensorInfo(tt),{real:st,imag:at}}function Rg(n,t,e){const o=new Float32Array(t*2);for(let s=0;s<t;s++){let r=0,a=0;for(let c=0;c<t;c++){const i=vf(s*c,t,e),l=ua(n,c);r+=l.real*i.real-l.imag*i.imag,a+=l.real*i.imag+l.imag*i.real}e&&(r/=t,a/=t),bf(o,r,a,s)}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(n){const{inputs:t,backend:e}=n,{input:o}=t,s=W(o.shape),r=o.shape[o.shape.length-1],a=s/r,c=rt({inputs:{x:o},backend:e,attrs:{shape:[a,r]}}),i=Ma(c,!1,e),l=rt({inputs:{x:i},backend:e,attrs:{shape:o.shape}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(i),l}const $g={kernelName:tc,backendName:"cpu",kernelFunc:Dg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Es(n){const{backend:t,attrs:e}=n,{shape:o,value:s,dtype:r}=e,a=r||Mn(s),c=xt(a,W(o));return Og(c,s,a),t.makeTensorInfo(o,a,c)}const Ag={kernelName:ec,backendName:"cpu",kernelFunc:Es};function Og(n,t,e){n.fill(t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vg={kernelName:nc,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:o}=n,s=e,r=bt(o.dtype,W(o.shape)),[a,c,i,l]=o.shape,u=s.data.get(o.dataId).values;for(let d=0;d<a;d++){const h=d*i*c*l;for(let p=0;p<c;p++){const m=p*(i*l);for(let g=0;g<i;g++){const I=g*l;for(let y=0;y<l;y++){const k=Math.round(i-g-1),w=h+m+I+y;let x=u[w];if(k>=0&&k<i){const b=k*l,S=h+m+b+y;x=u[S]}r[w]=x}}}}return{dataId:s.write(r,o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pg=ht((n,t)=>Math.floor(n/t)),Bg=mt(qo,Pg,null,"int32"),Lg={kernelName:qo,backendName:"cpu",kernelFunc:Bg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,filter:r,bias:a,preluActivationWeights:c}=t,{strides:i,pad:l,dataFormat:u,dilations:f,dimRoundingMode:d,activation:h,leakyreluAlpha:p}=o;let m=Ca({inputs:{x:s,filter:r},backend:e,attrs:{strides:i,pad:l,dataFormat:u,dilations:f,dimRoundingMode:d}});if(a){const g=m;if(u==="NCHW"&&a.shape.length===1&&a.shape[0]!==1){const I=rt({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=_e({inputs:{a:m,b:I},backend:e}),e.disposeIntermediateTensorInfo(I)}else m=_e({inputs:{a:m,b:a},backend:e});e.disposeIntermediateTensorInfo(g)}if(h){const g=m;if(u==="NCHW"&&h==="prelu"&&c.shape.length===1&&c.shape[0]!==1){const I=rt({inputs:{x:c},backend:e,attrs:{shape:[c.shape[0],1,1]}});m=Sn(e,m,h,I,p),e.disposeIntermediateTensorInfo(I)}else m=Sn(e,m,h,c,p);e.disposeIntermediateTensorInfo(g)}return m}const _g={kernelName:hl,backendName:"cpu",kernelFunc:Wg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hg(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,filter:r,bias:a,preluActivationWeights:c}=t,{strides:i,pad:l,dataFormat:u,dilations:f,dimRoundingMode:d,activation:h,leakyreluAlpha:p}=o;let m=Fa({inputs:{x:s,filter:r},backend:e,attrs:{strides:i,pad:l,dataFormat:u,dilations:f,dimRoundingMode:d}});if(a){const g=m;m=_e({inputs:{a:m,b:a},backend:e}),e.disposeIntermediateTensorInfo(g)}if(h){const g=m;m=Sn(e,m,h,c,p),e.disposeIntermediateTensorInfo(g)}return m}const zg={kernelName:pl,backendName:"cpu",kernelFunc:Hg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gg(n){const{inputs:t,backend:e}=n,{params:o,indices:s}=t,r=W(o.shape),a=s.shape,c=a[a.length-1],[i,l,u,f]=pu(o,s);if(l===0)return e.makeTensorInfo(i,o.dtype,[]);const d=e.data.get(s.dataId).values,h=e.bufferSync(o),p=wd(d,h,o.dtype,l,c,u,f,o.shape,r);return e.makeTensorInfo(i,o.dtype,p.values)}const Ug={kernelName:rc,backendName:"cpu",kernelFunc:Gg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,indices:r}=t,{axis:a,batchDims:c}=o;U([s,r],"gatherV2");const i=Nt(a,s.shape)[0],l=e.data.get(r.dataId).values,u=s.shape[i];for(let w=0;w<l.length;++w){const x=l[w];j(x<=u-1&&x>=0,()=>`GatherV2: the index value ${x} is not in [0, ${u-1}]`)}let f=c;c==null&&(f=0);const d=W(r.shape),h=Gf(s,r,i,f),p=rt({inputs:{x:s},backend:e,attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]}}),m=rt({inputs:{x:r},backend:e,attrs:{shape:[h.batchSize,d/h.batchSize]}}),g=[h.batchSize,h.outerSize,d/h.batchSize,h.sliceSize],I=e.bufferSync(m),y=e.bufferSync(p),k=kd(y,I,g);return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(h.outputShape,k.dtype,k.values)}const jg={kernelName:oc,backendName:"cpu",kernelFunc:qg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kg(n){const{inputs:t,backend:e}=n,{input:o}=t,s=W(o.shape),r=o.shape[o.shape.length-1],a=s/r,c=rt({inputs:{x:o},backend:e,attrs:{shape:[a,r]}}),i=Ma(c,!0,e),l=rt({inputs:{x:i},backend:e,attrs:{shape:o.shape}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(i),l}const Xg={kernelName:ac,backendName:"cpu",kernelFunc:Kg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zg=et(Xo,n=>Number.isFinite(n)?1:0,"bool"),Yg={kernelName:Xo,backendName:"cpu",kernelFunc:Zg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jg=et(Zo,n=>Math.abs(n)===1/0?1:0,"bool"),Qg={kernelName:Zo,backendName:"cpu",kernelFunc:Jg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tm=et(Yo,n=>Number.isNaN(n)?1:0,"bool"),em={kernelName:Yo,backendName:"cpu",kernelFunc:tm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(n){const{backend:t,attrs:e}=n,{start:o,stop:s,num:r}=e,a=$d(o,s,r);return t.makeTensorInfo([a.length],"float32",a)}const sm={kernelName:lc,backendName:"cpu",kernelFunc:nm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const om=et(er,n=>Math.log1p(n)),rm={kernelName:er,backendName:"cpu",kernelFunc:om};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const am=ht((n,t)=>n&&t),im=mt(nr,am,null,"bool"),cm={kernelName:nr,backendName:"cpu",kernelFunc:im};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lm=et(sr,n=>n?0:1,"bool"),um={kernelName:sr,backendName:"cpu",kernelFunc:lm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fm=ht((n,t)=>n||t),dm=mt(or,fm,null,"bool"),hm={kernelName:or,backendName:"cpu",kernelFunc:dm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pm(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{depthRadius:r,bias:a,alpha:c,beta:i}=o;U(s,"LRN");const l=s.shape[3],u=l-1,f=e.data.get(s.dataId).values,d=W(s.shape),h=new Float32Array(d);function p(m){const g=m%l;let I=m-g+Math.max(0,g-r);const y=m-g+Math.min(g+r,u);let k=0;for(;I<=y;I++){const w=f[I];k+=w*w}return k}for(let m=0;m<d;m++){const g=p(m),I=f[m]*Math.pow(a+c*g,-i);h[m]=I}return e.makeTensorInfo(s.shape,s.dtype,h)}const gm={kernelName:uc,backendName:"cpu",kernelFunc:pm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mm(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,y:r,dy:a}=t,{depthRadius:c,bias:i,alpha:l,beta:u}=o;U(a,"LRNGrad");const f=W(a.shape),d=a.shape[3],h=e.data.get(a.dataId).values,p=e.data.get(s.dataId).values,m=e.data.get(r.dataId).values,g=new Float32Array(f),I=f;for(let y=0;y<I;y++){const k=y%d,w=y-k+Math.max(0,k-c),x=y-k+Math.min(d,k+c+1);let b=0;for(let S=w;S<x;S++)b+=Math.pow(p[S],2);b=l*b+i;for(let S=w;S<x;S++){let v=-2*l*u*p[S]*m[y]/b;y===S&&(v+=Math.pow(b,-u)),v*=h[y],g[S]+=v}}return e.makeTensorInfo(a.shape,s.dtype,g)}const Im={kernelName:fc,backendName:"cpu",kernelFunc:mm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ea(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{reductionIndices:r,keepDims:a}=o,c=e;let i=s.shape;const l=i.length,u=Nt(r,i);let f=u;const d=Xt(f,l);let h=c.data.get(s.dataId).values;if(d!=null){const w=new Array(l);for(let x=0;x<w.length;x++)w[x]=i[d[x]];h=ga(h,i,s.dtype,d,w),f=Zt(f.length,l),i=w}U(s,"max"),Me("max",f,l);const[p,m]=te(i,f),g=W(m),I=Pd(h,g,p,s.dtype),y=c.write(I,p,s.dtype);let k=p;return a&&(k=Fe(p,u)),{dataId:y,shape:k,dtype:s.dtype}}const ym={kernelName:dc,backendName:"cpu",kernelFunc:Ea};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wm(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t;U(s,"maxPool");const{filterSize:r,strides:a,pad:c,dimRoundingMode:i}=o,l=1;j(vs(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);const u=rn(s.shape,r,a,l,c,i);let f;if(u.filterWidth===1&&u.filterHeight===1&&Ge(u.inShape,u.outShape))f=Kt({inputs:{x:s},backend:e});else{const d=e.data.get(s.dataId).values,h=Z(s.shape),p=Fs(d,s.shape,s.dtype,h,u,"max");f=e.makeTensorInfo(u.outShape,s.dtype,p.values)}return f}const km={kernelName:hc,backendName:"cpu",kernelFunc:wm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{filterSize:r,strides:a,pad:c,dimRoundingMode:i,dataFormat:l}=o;U(s,"maxPool3d");const u=$n(s.shape,r,a,1,c,i,l),f=e.data.get(s.dataId).values,d=Na(f,s.shape,s.dtype,Z(s.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const bm={kernelName:gc,backendName:"cpu",kernelFunc:xm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sm(n){const{inputs:t,backend:e,attrs:o}=n,{dy:s,input:r}=t,{filterSize:a,strides:c,pad:i,dimRoundingMode:l}=o;U([s,r],"maxPool3DGrad");const u=$n(r.shape,a,c,1,i,l),f=e.bufferSync(r),d=up(f,u),h=u.strideDepth,p=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,I=u.dilationHeight,y=u.dilationWidth,k=u.effectiveFilterDepth,w=u.effectiveFilterHeight,x=u.effectiveFilterWidth,b=k-1-u.padInfo.front,S=x-1-u.padInfo.left,v=w-1-u.padInfo.top,T=Q(r.shape,"float32"),N=e.bufferSync(s);for(let F=0;F<u.batchSize;++F)for(let D=0;D<u.inChannels;++D)for(let C=0;C<u.inDepth;++C)for(let M=0;M<u.inHeight;++M)for(let E=0;E<u.inWidth;++E){const R=C-b,O=M-v,$=E-S;let A=0;for(let B=0;B<k;B+=g){const V=(R+B)/h;if(!(V<0||V>=u.outDepth||Math.floor(V)!==V))for(let H=0;H<w;H+=I){const P=(O+H)/p;if(!(P<0||P>=u.outHeight||Math.floor(P)!==P))for(let z=0;z<x;z+=y){const L=($+z)/m;if(L<0||L>=u.outWidth||Math.floor(L)!==L)continue;const G=k*w*x-1-d.get(F,V,P,L,D),q=B*w*x+H*x+z,K=G===q?1:0;if(K===0)continue;A+=N.get(F,V,P,L,D)*K}}}T.set(A,F,C,M,E,D)}return e.makeTensorInfo(T.shape,T.dtype,T.values)}const vm={kernelName:mc,backendName:"cpu",kernelFunc:Sm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tm(n){const{inputs:t,backend:e,attrs:o}=n,{dy:s,input:r,output:a}=t,c=r;U([r,a],"maxPoolGrad");const{filterSize:i,strides:l,pad:u,dimRoundingMode:f}=o,d=rn(c.shape,i,l,1,u,f),h=e.data.get(c.dataId).values,p=Q(d.outShape,c.dtype,Ta(h,c.shape,c.dtype,d).values),m=d.strideHeight,g=d.strideWidth,I=d.dilationHeight,y=d.dilationWidth,k=d.effectiveFilterHeight,w=d.effectiveFilterWidth,x=w-1-d.padInfo.left,b=k-1-d.padInfo.top,S=Q(c.shape,"float32"),v=e.data.get(s.dataId).values,T=Q(s.shape,"float32",v);for(let N=0;N<d.batchSize;++N)for(let F=0;F<d.inChannels;++F)for(let D=0;D<d.inHeight;++D)for(let C=0;C<d.inWidth;++C){const M=D-b,E=C-x;let R=0;for(let O=0;O<k;O+=I){const $=(M+O)/m;if(!($<0||$>=d.outHeight||Math.floor($)!==$))for(let A=0;A<w;A+=y){const B=(E+A)/g;if(B<0||B>=d.outWidth||Math.floor(B)!==B)continue;const V=k*w-1-p.get(N,$,B,F),H=O*w+A,P=V===H?1:0;if(P===0)continue;R+=T.get(N,$,B,F)*P}}S.set(R,N,D,C,F)}return e.makeTensorInfo(S.shape,S.dtype,S.values)}const Nm={kernelName:pc,backendName:"cpu",kernelFunc:Tm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cm(n,t,e,o,s){const r=Z(t),a=Fs(n,t,e,r,s,"max"),c=Ta(n,t,e,s,!0,o);return[a.values,c.values]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fm={kernelName:Ic,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:o}=n,{filterSize:s,strides:r,pad:a,includeBatchInIndex:c}=t,i=e;U(o,"MaxPoolWithArgmax");const l=i.data.get(o.dataId).values,u=rn(o.shape,s,r,[1,1],a),[f,d]=Cm(l,o.shape,o.dtype,c,u),h=i.write(f,u.outShape,o.dtype),p=i.write(d,u.outShape,o.dtype);return[{dataId:h,shape:u.outShape,dtype:o.dtype},{dataId:p,shape:u.outShape,dtype:"int32"}]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mm(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r,keepDims:a}=o,c=Nt(r,s.shape),l=te(s.shape,c)[1],u=W(l),f=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));f.push(d);const h=ce({inputs:{x:s},backend:e,attrs:{dtype:"float32"}});f.push(h);const p=Ms({inputs:{a:h,b:d},backend:e});f.push(p);const m=an({inputs:{x:p},backend:e,attrs:{axis:r,keepDims:a}});return f.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const Em={kernelName:yc,backendName:"cpu",kernelFunc:Mm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rm(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{axis:r,keepDims:a}=o;U(s,"min");const c=Nt(r,s.shape);let i=c;const l=Xt(i,s.shape.length);let u=s;l!=null&&(u=Tt({inputs:{x:s},backend:e,attrs:{perm:l}}),i=Zt(i.length,s.shape.length)),Me("min",i,u.shape.length);const[f,d]=te(u.shape,i),h=W(d),p=St(W(f),u.dtype),m=e.data.get(u.dataId).values;for(let I=0;I<p.length;++I){const y=I*h;let k=m[y];for(let w=0;w<h;++w){const x=m[y+w];(Number.isNaN(x)||x<k)&&(k=x)}p[I]=k}l!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(f,u.dtype,p);if(a){const I=Fe(f,c),y=rt({inputs:{x:g},backend:e,attrs:{shape:I}});return e.disposeIntermediateTensorInfo(g),y}return g}const Dm={kernelName:wc,backendName:"cpu",kernelFunc:Rm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $m(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{paddings:r,mode:a}=o;U(s,"mirrorPad");const c=r.map((k,w)=>k[0]+s.shape[w]+k[1]),i=r.map(k=>k[0]),l=r.map((k,w)=>k[0]+s.shape[w]),u=a==="reflect"?0:1,f=e.data.get(s.dataId).values,d=s.shape.length,h=Z(s.shape),p=W(c),m=c.length,g=Z(c),I=bt(s.dtype,p);for(let k=0;k<p;k++){let w=on(k,m,g);for(let b=0;b<m;b++)w[b]<i[b]?w[b]=i[b]*2-w[b]-u:w[b]>=l[b]&&(w[b]=(l[b]-1)*2-w[b]+u);w=w.map((b,S)=>b-i[S]);const x=qt(w,d,h);I[k]=f[x]}return{dataId:e.write(I,c,s.dtype),shape:c,dtype:s.dtype}}const Am={kernelName:kc,backendName:"cpu",kernelFunc:$m};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Om=ht((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t}),Vm=mt(ir,Om),Pm={kernelName:ir,backendName:"cpu",kernelFunc:Vm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ra(n){const{inputs:t,backend:e,attrs:o}=n,{logits:s}=t,{dim:r}=o,a=s.shape.length;let c=r;if(c===-1&&(c=a-1),c!==a-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${a} and dim was ${c}`);const i=Nt([c],s.shape),l=Ea({inputs:{x:s},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),u=Fe(l.shape,i),f=rt({inputs:{x:l},backend:e,attrs:{shape:u}}),d=Cs({inputs:{a:s,b:f},backend:e}),h=ha({inputs:{x:d},backend:e}),p=an({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),m=rt({inputs:{x:p},backend:e,attrs:{shape:u}}),g=Ms({inputs:{a:h,b:m},backend:e});return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const Bm={kernelName:jc,backendName:"cpu",kernelFunc:Ra};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lm(n){const{inputs:t,backend:e,attrs:o}=n,{logits:s}=t,{numSamples:r,seed:a,normalized:c}=o;U(s,"multinomial");const i=c?s:Ra({inputs:{logits:s},backend:e,attrs:{dim:-1}}),l=i.shape[0],u=i.shape[1],f=e.data.get(i.dataId).values,d=[l,r],h=St(W(d),"int32");for(let p=0;p<l;++p){const m=p*u,g=new Float32Array(u-1);g[0]=f[m];for(let k=1;k<g.length;++k)g[k]=g[k-1]+f[m+k];const I=aa.alea(a.toString()),y=p*r;for(let k=0;k<r;++k){const w=I();h[y+k]=g.length;for(let x=0;x<g.length;x++)if(w<g[x]){h[y+k]=x;break}}}return c||e.disposeIntermediateTensorInfo(i),e.makeTensorInfo(d,"int32",h)}const Wm={kernelName:xc,backendName:"cpu",kernelFunc:Lm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _m=Yu;function Hm(n){const{inputs:t,backend:e,attrs:o}=n,{boxes:s,scores:r}=t,{maxOutputSize:a,iouThreshold:c,scoreThreshold:i}=o;U(s,"NonMaxSuppression");const l=e.data.get(s.dataId).values,u=e.data.get(r.dataId).values,{selectedIndices:f}=_m(l,u,a,c,i);return e.makeTensorInfo([f.length],"int32",new Int32Array(f))}const zm={kernelName:Sc,backendName:"cpu",kernelFunc:Hm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gm=Ju;function Um(n){const{inputs:t,backend:e,attrs:o}=n,{boxes:s,scores:r}=t,{maxOutputSize:a,iouThreshold:c,scoreThreshold:i,padToMaxOutputSize:l}=o;U(s,"NonMaxSuppressionPadded");const u=e.data.get(s.dataId).values,f=e.data.get(r.dataId).values,{selectedIndices:d,validOutputs:h}=Gm(u,f,a,c,i,l);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([h]))]}const qm={kernelName:vc,backendName:"cpu",kernelFunc:Um};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jm=Qu;function Km(n){const{inputs:t,backend:e,attrs:o}=n,{boxes:s,scores:r}=t,{maxOutputSize:a,iouThreshold:c,scoreThreshold:i,softNmsSigma:l}=o;U(s,"NonMaxSuppressionWithScore");const u=e.data.get(s.dataId).values,f=e.data.get(r.dataId).values,d=a,h=c,p=i,m=l,{selectedIndices:g,selectedScores:I}=jm(u,f,d,h,p,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([I.length],"float32",new Float32Array(I))]}const Xm={kernelName:Tc,backendName:"cpu",kernelFunc:Km};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zm(n){const{inputs:t,backend:e,attrs:o}=n,{indices:s}=t,{dtype:r,depth:a,onValue:c,offValue:i}=o;U(s,"oneHot");const l=W(s.shape),u=new Float32Array(l*a);u.fill(i);const f=e.data.get(s.dataId).values;for(let d=0;d<l;++d)f[d]>=0&&f[d]<a&&(u[d*a+f[d]]=c);return e.makeTensorInfo([...s.shape,a],r,u)}const Ym={kernelName:Cc,backendName:"cpu",kernelFunc:Zm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tn(n){const{inputs:t,backend:e}=n,{x:o}=t;if(o.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(o.dtype==="complex64"){const s=be({inputs:{input:o},backend:e}),r=Tn({inputs:{x:s},backend:e}),a=He({inputs:{input:o},backend:e}),c=Tn({inputs:{x:a},backend:e}),i=Ct({inputs:{real:r,imag:c},backend:e});return e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),i}else return Es({backend:e,attrs:{shape:o.shape,value:0,dtype:o.dtype}})}const Jm={kernelName:ul,backendName:"cpu",kernelFunc:Tn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Da(n){const{inputs:t,backend:e}=n,{x:o}=t;if(o.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(o.dtype==="complex64"){const s=be({inputs:{input:o},backend:e}),r=Da({inputs:{x:s},backend:e}),a=He({inputs:{input:o},backend:e}),c=Tn({inputs:{x:a},backend:e}),i=Ct({inputs:{real:r,imag:c},backend:e});return e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),i}else return Es({backend:e,attrs:{shape:o.shape,value:1,dtype:o.dtype}})}const Qm={kernelName:Nc,backendName:"cpu",kernelFunc:Da};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $a(n){const{inputs:t,backend:e,attrs:o}=n,{axis:s}=o;if(t.length===1)return vn({inputs:{input:t[0]},backend:e,attrs:{dim:s}});const r=t[0].shape,a=t[0].dtype;t.forEach(u=>{si(r,u.shape,"All tensors passed to stack must have matching shapes"),j(a===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],i=t.map(u=>{const f=vn({inputs:{input:u},backend:e,attrs:{dim:s}});return c.push(f),f}),l=ze({inputs:i,backend:e,attrs:{axis:s}});return c.forEach(u=>e.disposeIntermediateTensorInfo(u)),l}const t0={kernelName:Fc,backendName:"cpu",kernelFunc:$a};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e0(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{paddings:r,constantValue:a}=o;U(s,"pad");const c=r.map((y,k)=>y[0]+s.shape[k]+y[1]),i=r.map(y=>y[0]),l=e.data.get(s.dataId).values,u=W(s.shape),f=s.shape.length,d=Z(s.shape),h=W(c),p=c.length,m=Z(c),g=bt(s.dtype,h);a!==0&&g.fill(a);for(let y=0;y<u;y++){const w=on(y,f,d).map((b,S)=>b+i[S]),x=qt(w,p,m);g[x]=l[y]}return{dataId:e.write(g,c,s.dtype),shape:c,dtype:s.dtype}}const Aa={kernelName:Mc,backendName:"cpu",kernelFunc:e0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n0=ht((n,t)=>Math.pow(n,t)),s0=mt(lr,n0),o0={kernelName:lr,backendName:"cpu",kernelFunc:s0};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r0(n){const{inputs:t,backend:e,attrs:o}=n,{shape:s,values:r,defaultValue:a,rowPartitionTensors:c}=t,{rowPartitionTypes:i}=o,l=e.data.get(s.dataId).values,u=e.data.get(r.dataId).values,f=e.data.get(a.dataId).values,d=c.map(g=>e.data.get(g.dataId).values),h=c.map(g=>g.shape),[p,m]=nh(l,s.shape,u,r.shape,r.dtype,f,a.shape,d,h,i);return e.makeTensorInfo(p,r.dtype,m)}const a0={kernelName:Dc,backendName:"cpu",kernelFunc:r0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i0(n){const{backend:t,attrs:e}=n,{start:o,stop:s,dtype:r,step:a}=e,c=sh(o,s,a,r);return t.makeTensorInfo([c.length],r,c)}const c0={kernelName:$c,backendName:"cpu",kernelFunc:i0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l0=et(ur,n=>1/n),u0={kernelName:ur,backendName:"cpu",kernelFunc:l0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(n){const{inputs:t,backend:e,attrs:o}=n,{images:s}=t,{alignCorners:r,halfPixelCenters:a,size:c}=o;U(s,"resizeBilinear");const i=Z(s.shape),[l,u]=c,[f,d,h,p]=s.shape,m=e.data.get(s.dataId).values,g=new Float32Array(W([f,l,u,p])),I=[r&&l>1?d-1:d,r&&u>1?h-1:h],y=[r&&l>1?l-1:l,r&&u>1?u-1:u];let k=0;const w=I[0]/y[0],x=I[1]/y[1];for(let b=0;b<f;b++)for(let S=0;S<l;S++){let v;a?v=w*(S+.5)-.5:v=w*S;const T=Math.max(0,Math.floor(v)),N=v-T,F=Math.min(d-1,Math.ceil(v)),D=b*i[0]+T*i[1],C=b*i[0]+F*i[1];for(let M=0;M<u;M++){let E;a?E=x*(M+.5)-.5:E=x*M;const R=Math.max(0,Math.floor(E)),O=E-R,$=Math.min(h-1,Math.ceil(E)),A=D+R*i[2],B=C+R*i[2],V=D+$*i[2],H=C+$*i[2];for(let P=0;P<p;P++){const z=m[A+P],L=m[B+P],G=m[V+P],q=m[H+P],K=z+(G-z)*O,X=L+(q-L)*O,Y=K+(X-K)*N;g[k++]=Y}}}return e.makeTensorInfo([f,l,u,p],"float32",g)}const d0={kernelName:Pc,backendName:"cpu",kernelFunc:f0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h0(n){const{inputs:t,backend:e,attrs:o}=n,{images:s,dy:r}=t,{alignCorners:a}=o;U([r,s],"resizeBilinearGrad");const c=Z(s.shape),[i,l,u,f]=s.shape,[,d,h]=r.shape,p=new Float32Array(i*l*u*f),m=[a&&d>1?l-1:l,a&&h>1?u-1:u],g=[a&&d>1?d-1:d,a&&h>1?h-1:h],I=m[0]/g[0],y=m[1]/g[1],k=e.data.get(r.dataId).values;let w=0;for(let x=0;x<i;x++){const b=x*c[0];for(let S=0;S<d;S++){const v=S*I,T=Math.floor(v),N=Math.min(Math.ceil(v),l-1),F=b+T*c[1],D=b+N*c[1],C=v-T,M=1-C;for(let E=0;E<h;E++){const R=E*y,O=Math.floor(R),$=Math.min(Math.ceil(R),u-1),A=R-O,B=1-A,V=F+O*c[2],H=F+$*c[2],P=D+O*c[2],z=D+$*c[2],L=M*B,G=M*A,q=C*B,K=C*A;for(let X=0;X<f;X++){const Y=k[w++];p[V+X]+=Y*L,p[H+X]+=Y*G,p[P+X]+=Y*q,p[z+X]+=Y*K}}}}return e.makeTensorInfo([i,u,l,f],"float32",p)}const p0={kernelName:Bc,backendName:"cpu",kernelFunc:h0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g0(n){const{inputs:t,backend:e,attrs:o}=n,{images:s}=t,{alignCorners:r,halfPixelCenters:a,size:c}=o;U(s,"resizeNearestNeighbor");const i=Z(s.shape),[l,u]=c,[f,d,h,p]=s.shape,m=e.data.get(s.dataId).values,g=new Float32Array(f*l*u*p),I=[r&&l>1?d-1:d,r&&u>1?h-1:h],y=[r&&l>1?l-1:l,r&&u>1?u-1:u],k=I[0]/y[0],w=I[1]/y[1];let x=0;for(let b=0;b<f;b++){const S=b*i[0];for(let v=0;v<l;v++){const T=a?k*(v+.5):k*v;let N=Math.min(d-1,r?Math.round(T):Math.floor(T));a&&(N=Math.max(0,N));const F=S+N*i[1];for(let D=0;D<u;D++){const C=a?w*(D+.5):w*D;let M=Math.min(h-1,r?Math.round(C):Math.floor(C));a&&(M=Math.max(0,M));const E=F+M*i[2];for(let R=0;R<p;R++){const O=m[E+R];g[x++]=O}}}}return e.makeTensorInfo([f,l,u,p],s.dtype,g)}const m0={kernelName:Oc,backendName:"cpu",kernelFunc:g0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I0(n){const{inputs:t,backend:e,attrs:o}=n,{images:s,dy:r}=t,{alignCorners:a}=o;U([r,s],"resizeNearestNeighborGrad");const c=Z(s.shape),i=Z(r.shape),[l,u,f,d]=s.shape,[,h,p]=r.shape,m=new Float32Array(l*u*f*d),g=e.data.get(r.dataId).values,I=[a&&h>1?u-1:u,a&&p>1?f-1:f],y=[a&&h>1?h-1:h,a&&p>1?p-1:p],k=I[0]/y[0],w=I[1]/y[1],x=1/k,b=1/w,S=Math.ceil(x)*2+2,v=Math.ceil(b)*2+2;for(let T=0;T<l;T++){const N=T*c[0];for(let F=0;F<u;F++){const D=N+F*c[1],C=Math.floor(F*x),M=Math.floor(C-S/2);for(let E=0;E<f;E++){const R=D+E*c[2],O=Math.floor(E*b),$=Math.floor(O-v/2);for(let A=0;A<d;A++){let B=0;for(let V=0;V<S;V++){const H=V+M;if(H<0||H>=h)continue;const P=N+H*i[1],z=H*k,L=Math.min(u-1,a?Math.round(z):Math.floor(z));if(F===L)for(let G=0;G<v;G++){const q=G+$;if(q<0||q>=p)continue;const K=P+q*i[2],X=q*w,Y=Math.min(f-1,a?Math.round(X):Math.floor(X));E===Y&&(B+=g[K+A])}}m[R+A]=B}}}}return e.makeTensorInfo(s.shape,s.dtype,m)}const y0={kernelName:Vc,backendName:"cpu",kernelFunc:I0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w0(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{dims:r}=o;U(s,"reverse");const a=s.shape.length,c=Nt(r,s.shape);if(a===0)return Kt({inputs:{x:s},backend:e});const i=new yt(s.shape,s.dtype),l=e.bufferSync(s);for(let u=0;u<i.size;u++){const f=i.indexToLoc(u),d=f.slice();c.forEach(h=>d[h]=s.shape[h]-1-d[h]),i.set(l.get(...d),...f)}return e.makeTensorInfo(i.shape,i.dtype,i.values)}const k0={kernelName:Lc,backendName:"cpu",kernelFunc:w0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x0={kernelName:fl,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:o}=n,{radians:s,fillValue:r,center:a}=t,c=e,i=bt(o.dtype,W(o.shape)),[l,u,f,d]=o.shape,[h,p]=cf(a,u,f),m=255,g=Math.sin(s),I=Math.cos(s),y=c.data.get(o.dataId).values;for(let w=0;w<l;w++){const x=w*f*u*d;for(let b=0;b<u;b++){const S=b*(f*d);for(let v=0;v<f;v++){const T=v*d;for(let N=0;N<d;N++){const F=[l,b,v,N],D=F[2],C=F[1];let M=(D-h)*I-(C-p)*g,E=(D-h)*g+(C-p)*I;M=Math.round(M+h),E=Math.round(E+p);let R=r;if(typeof r!="number"&&(N===3?R=m:R=r[N]),M>=0&&M<f&&E>=0&&E<u){const $=E*(f*d),A=M*d,B=x+$+A+N;R=y[B]}const O=x+S+T+N;i[O]=R}}}}return{dataId:c.write(i,o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const b0=et(pr,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),S0={kernelName:pr,backendName:"cpu",kernelFunc:b0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v0(n){const{inputs:t,backend:e,attrs:o}=n,{indices:s,updates:r}=t,{shape:a}=o,{sliceRank:c,numUpdates:i,sliceSize:l,strides:u,outputSize:f}=Kr(r,s,a),d=!0,h=e.bufferSync(s),p=e.bufferSync(r),m=Qe(h,p,a,f,l,i,c,u,0,d);return e.makeTensorInfo(a,m.dtype,m.values)}const T0={kernelName:Wc,backendName:"cpu",kernelFunc:v0};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N0(n,t){let e=0,o=n.length,s=0;for(;e<o;)s=Math.floor((e+o)/2),n[s]<t?e=s+1:o=s;return o}function C0(n,t){let e=0,o=n.length,s=0;for(;e<o;)s=Math.floor((e+o)/2),n[s]<=t?e=s+1:o=s;return o}function F0(n,t,e,o,s,r){const a=xt("int32",e*s);for(let c=0;c<e;++c){const i=n.slice(c*o,(c+1)*o),l=c*s;for(let u=0;u<s;++u)a[l+u]=r==="left"?N0(i,t[u+l]):C0(i,t[u+l])}return a}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M0(n){const{inputs:t,backend:e,attrs:o}=n,{sortedSequence:s,values:r}=t,{side:a}=o,c=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,l=F0(c,i,s.shape[0],s.shape[1],r.shape[1],a);return e.makeTensorInfo(r.shape,"int32",l)}const E0={kernelName:_c,backendName:"cpu",kernelFunc:M0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R0(n){const{inputs:t,backend:e}=n,{condition:o,t:s,e:r}=t;U([o,s,r],"select");const a=o.shape.length,c=e.data.get(o.dataId).values,i=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,u=Ue(s.dtype,r.dtype),f=St(W(s.shape),u);let d=0;const h=a===0||a>1||s.shape.length===1?1:W(s.shape.slice(1));for(let p=0;p<c.length;p++)for(let m=0;m<h;m++)c[p]===1?f[d++]=i[p]:f[d++]=l[p];return e.makeTensorInfo(s.shape,u,f)}const D0={kernelName:Hc,backendName:"cpu",kernelFunc:R0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $0=ff,A0=df,O0=et(mr,n=>n>=0?A0*n:$0*(Math.exp(n)-1)),V0={kernelName:mr,backendName:"cpu",kernelFunc:O0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P0=et(wr,n=>n<0?-1:n>0?1:0),B0={kernelName:wr,backendName:"cpu",kernelFunc:P0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L0=et(Ir,n=>Math.sin(n)),W0={kernelName:Ir,backendName:"cpu",kernelFunc:L0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _0=et(yr,n=>Math.sinh(n)),H0={kernelName:yr,backendName:"cpu",kernelFunc:_0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z0=11920928955078125e-23,uo=Math.log(z0)+2,G0=et(xr,n=>{const t=n>-uo,e=n<uo,o=Math.exp(n);let s;return e?s=o:t?s=n:s=Math.log(1+o),s}),U0={kernelName:xr,backendName:"cpu",kernelFunc:G0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q0(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{blockShape:r,paddings:a}=o;U([s],"spaceToBatchND");const c=W(r),i=[[0,0]];i.push(...a);for(let b=1+r.length;b<s.shape.length;++b)i.push([0,0]);const l=Aa.kernelFunc({inputs:{x:s},backend:e,attrs:{paddings:i,constantValue:0}}),u=ia(l.shape,r,c,!1),f=ca(u.length,r.length,!1),d=la(l.shape,r,c,!1),m=rt({inputs:{x:l},backend:e,attrs:{shape:u}}),y=Tt({inputs:{x:m},backend:e,attrs:{perm:f}}),x=rt({inputs:{x:y},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(y),x}const j0={kernelName:Uc,backendName:"cpu",kernelFunc:q0};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K0(n){const{inputs:t,backend:e}=n,{indices:o,values:s,denseShape:r,defaultValue:a}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${r.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${o.shape}`);if(s.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${s.shape}`);if(a.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${a.shape}`);const c=e.data.get(o.dataId).values,i=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,u=e.data.get(a.dataId).values[0],[f,d,h,p,m]=uh(c,o.shape,o.dtype,i,s.dtype,l,u);return[e.makeTensorInfo(d,o.dtype,f),e.makeTensorInfo([d[0]],s.dtype,h),e.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),e.makeTensorInfo([m.length],o.dtype,new Int32Array(m))]}const X0={kernelName:Kc,backendName:"cpu",kernelFunc:K0};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z0(n){const{inputs:t,backend:e}=n,{inputIndices:o,inputShape:s,newShape:r}=t;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${o.shape}`);if(s.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const a=Array.from(e.data.get(s.dataId).values),c=e.data.get(o.dataId).values,i=Array.from(e.data.get(r.dataId).values),[l,u,f]=fh(c,o.shape,o.dtype,a,i);return[e.makeTensorInfo(u,o.dtype,l),e.makeTensorInfo([f.length],r.dtype,new Int32Array(f))]}const Y0={kernelName:Xc,backendName:"cpu",kernelFunc:Z0};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J0(n){const{inputs:t,backend:e}=n,{data:o,indices:s,segmentIds:r}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${s.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${r.shape}`);if(s.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const a=e.data.get(o.dataId).values,c=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,[l,u]=Ia(a,o.shape,o.dtype,c,i,!0);return e.makeTensorInfo(u,o.dtype,l)}const Q0={kernelName:Zc,backendName:"cpu",kernelFunc:J0};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tI(n){const{inputs:t,backend:e}=n,{data:o,indices:s,segmentIds:r}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${s.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${r.shape}`);if(s.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const a=e.data.get(o.dataId).values,c=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,[l,u]=Ia(a,o.shape,o.dtype,c,i);return e.makeTensorInfo(u,o.dtype,l)}const eI={kernelName:Yc,backendName:"cpu",kernelFunc:tI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nI(n){const{inputs:t,backend:e,attrs:o}=n,{sparseIndices:s,sparseValues:r,defaultValue:a}=t,{outputShape:c}=o,{sliceRank:i,numUpdates:l,sliceSize:u,strides:f,outputSize:d}=Kr(r,s,c),h=!1,p=e.bufferSync(s);let m;switch(r.dtype){case"bool":{const g=e.bufferSync(r),I=Boolean(e.data.get(a.dataId).values[0]);m=Qe(p,g,c,d,u,l,i,f,I,h);break}case"float32":{const g=e.bufferSync(r),I=e.data.get(a.dataId).values[0];m=Qe(p,g,c,d,u,l,i,f,I,h);break}case"int32":{const g=e.bufferSync(r),I=e.data.get(a.dataId).values[0];m=Qe(p,g,c,d,u,l,i,f,I,h);break}case"string":{const g=e.bufferSync(r),I=nn(e.data.get(a.dataId).values[0]);m=Qe(p,g,c,d,u,l,i,f,I,h);break}default:throw new Error(`Unsupported type ${r.dtype}`)}return e.makeTensorInfo(c,m.dtype,m.values)}const sI={kernelName:Jc,backendName:"cpu",kernelFunc:nI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oI(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{numOrSizeSplits:r,axis:a}=o,c=Nt(a,s.shape)[0],i=Df(s,r,c),l=new Array(s.shape.length).fill(0),u=s.shape.slice();return i.map(f=>{const d=[...u];d[c]=f;const h=Se({inputs:{x:s},backend:e,attrs:{begin:l,size:d}});return l[c]+=f,h})}const rI={kernelName:qc,backendName:"cpu",kernelFunc:oI};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aI={kernelName:Qc,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,o=t;U(e,"square");const s=o.data.get(e.dataId).values,r=new Float32Array(s.length);for(let c=0;c<s.length;++c){const i=s[c];r[c]=i*i}return{dataId:o.write(r,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iI=et(Cr,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),cI={kernelName:Cr,backendName:"cpu",kernelFunc:iI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lI(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{begin:r,end:a,strides:c,beginMask:i,endMask:l,ellipsisMask:u,newAxisMask:f,shrinkAxisMask:d}=o;U(s,"stridedSlice");const{finalShapeSparse:h,finalShape:p,isIdentity:m,sliceDim0:g,isSimpleSlice:I,begin:y,end:k,strides:w}=xu(s.shape,r,a,c,i,l,u,f,d);let x;if(m)x=rt({inputs:{x:s},backend:e,attrs:{shape:p}});else if(g||I){j(s.shape.length>=1,()=>`Input must have rank at least 1, got: ${s.shape.length}`);const b=Iu(y,k,w),S=Se({inputs:{x:s},backend:e,attrs:{begin:y,size:b}});x=rt({inputs:{x:S},backend:e,attrs:{shape:p}}),e.disposeIntermediateTensorInfo(S)}else{const b=e.bufferSync(s),S=Ih(h,b,w,y);x=e.makeTensorInfo(p,S.dtype,S.values)}return x}const uI={kernelName:tl,backendName:"cpu",kernelFunc:lI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fI(n){const{inputs:t,backend:e,attrs:o}=n,{separator:s,nGramWidths:r,leftPad:a,rightPad:c,padWidth:i,preserveShortSequences:l}=o,{data:u,dataSplits:f}=t,d=e.data.get(u.dataId).values,h=e.data.get(f.dataId).values,[p,m]=wh(d,h,s,r,a,c,i,l);return[e.makeTensorInfo([p.length],"string",p),e.makeTensorInfo(f.shape,"int32",m)]}const dI={kernelName:el,backendName:"cpu",kernelFunc:fI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hI(n){const{inputs:t,backend:e,attrs:o}=n,{skipEmpty:s}=o,{input:r,delimiter:a}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(a.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${a.shape}`);const c=e.data.get(r.dataId).values,i=e.data.get(a.dataId).values[0],[l,u,f]=xh(c,i,s),d=u.length;return[e.makeTensorInfo([d,2],"int32",l),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(f))]}const pI={kernelName:nl,backendName:"cpu",kernelFunc:hI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gI(n){const{inputs:t,backend:e,attrs:o}=n,{numBuckets:s}=o,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(s<=0)throw new Error("Number of buckets must be at least 1");const a=e.data.get(r.dataId).values,c=bh(a,s);return e.makeTensorInfo(r.shape,"int32",c)}const mI={kernelName:sl,backendName:"cpu",kernelFunc:gI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const II=et(vr,n=>Math.tan(n)),yI={kernelName:vr,backendName:"cpu",kernelFunc:II};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wI=et(Tr,n=>Math.tanh(n)),kI={kernelName:Tr,backendName:"cpu",kernelFunc:wI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xI(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{reps:r}=o;U(s,"tile");const a=Nh(e.bufferSync(s),r);return e.makeTensorInfo(a.shape,a.dtype,a.values)}const bI={kernelName:Nr,backendName:"cpu",kernelFunc:xI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SI(n){const{inputs:t,backend:e,attrs:o}=n,{x:s}=t,{k:r,sorted:a}=o;U(s,"topk");const c=e.data.get(s.dataId).values,[i,l]=Ch(c,s.shape,s.dtype,r,a);return[e.makeTensorInfo(i.shape,i.dtype,i.values),e.makeTensorInfo(l.shape,l.dtype,l.values)]}const vI={kernelName:ol,backendName:"cpu",kernelFunc:SI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TI(n){const{inputs:t,attrs:e,backend:o}=n,{image:s,transforms:r}=t,{interpolation:a,fillMode:c,fillValue:i,outputShape:l}=e,[u,f,d,h]=s.shape,[p,m]=l??[f,d],g=[u,p,m,h],I=Z(s.shape),y=I[0],k=I[1],w=I[2],x=Z(g),b=x[0],S=x[1],v=x[2],T=bt(s.dtype,W(g));T.fill(i);const N=o.data.get(s.dataId).values,F=o.data.get(r.dataId).values;for(let C=0;C<u;++C){const M=r.shape[0]===1?F:F.subarray(C*8,C*8+8);for(let E=0;E<p;++E)for(let R=0;R<m;++R)for(let O=0;O<h;++O){let $;const A=M[6]*R+M[7]*E+1;if(A===0)continue;const B=(M[0]*R+M[1]*E+M[2])/A,V=(M[3]*R+M[4]*E+M[5])/A,H=fo(B,d,c),P=fo(V,f,c);switch(a){case"nearest":$=RI(N,f,d,y,k,w,C,P,H,O,i);break;case"bilinear":$=DI(N,f,d,y,k,w,C,P,H,O,i);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${a}`)}const z=C*b+E*S+R*v+O;T[z]=$}return o.makeTensorInfo(g,s.dtype,T)}return{dataId:o.write(T,g,s.dtype),shape:s.shape,dtype:s.dtype}}const NI={kernelName:rl,backendName:"cpu",kernelFunc:TI};function fo(n,t,e){switch(e){case"reflect":return CI(n,t);case"wrap":return FI(n,t);case"nearest":return EI(n,t);case"constant":default:return MI(n)}}function CI(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const o=2*t;e<o&&(e=o*Math.trunc(-e/o)+e),e=e<-t?e+o:-e-1}else if(e>t-1)if(t<=1)e=0;else{const o=2*t;e-=o*Math.trunc(e/o),e>=t&&(e=o-e-1)}return hs(0,e,t-1)}function FI(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const o=t-1;e+=t*(Math.trunc(-e/o)+1)}else if(e>t-1)if(t<=1)e=0;else{const o=t-1;e-=t*Math.trunc(e/o)}return hs(0,e,t-1)}function MI(n,t){return n}function EI(n,t){return hs(0,n,t-1)}function en(n,t,e,o,s,r,a,c,i,l,u){const f=a*o+c*s+i*r+l;return 0<=c&&c<t&&0<=i&&i<e?n[f]:u}function RI(n,t,e,o,s,r,a,c,i,l,u){const f=Math.round(c),d=Math.round(i);return en(n,t,e,o,s,r,a,f,d,l,u)}function DI(n,t,e,o,s,r,a,c,i,l,u){const f=Math.floor(c),d=Math.floor(i),h=f+1,p=d+1,m=(p-i)*en(n,t,e,o,s,r,a,f,d,l,u)+(i-d)*en(n,t,e,o,s,r,a,f,p,l,u),g=(p-i)*en(n,t,e,o,s,r,a,h,d,l,u)+(i-d)*en(n,t,e,o,s,r,a,h,p,l,u);return(h-c)*m+(c-f)*g}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $I(n){const{inputs:t,attrs:e,backend:o}=n,{axis:s}=e,{x:r}=t;U(r,"unique");const a=o.data.get(r.dataId).values,{outputValues:c,outputShape:i,indices:l}=Fh(a,s,r.shape,r.dtype);return[o.makeTensorInfo(i,r.dtype,c),o.makeTensorInfo([l.length],"int32",l)]}const AI={kernelName:il,backendName:"cpu",kernelFunc:$I};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OI(n){const{inputs:t,backend:e,attrs:o}=n,{value:s}=t;let{axis:r}=o;r<0&&(r+=s.shape.length);const a=s.shape.length,c=s.shape[r],i=new Array(a-1);let l=0;for(let h=0;h<a;h++)h!==r&&(i[l++]=s.shape[h]);const u=new Array(a).fill(0),f=s.shape.slice();f[r]=1;const d=new Array(c);for(let h=0;h<d.length;h++){u[r]=h;const p=Se({inputs:{x:s},backend:e,attrs:{begin:u,size:f}});d[h]=rt({inputs:{x:p},backend:e,attrs:{shape:i}}),e.disposeIntermediateTensorInfo(p)}return d}const VI={kernelName:cl,backendName:"cpu",kernelFunc:OI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PI(n){const{inputs:t,backend:e,attrs:o}=n,{x:s,segmentIds:r}=t,{numSegments:a}=o;U(s,"unsortedSegmentSum");const c=s.shape.length,i=r.shape.length,l=[],u=[],f=c-i;let d=r;for(let p=0;p<f;++p){const m=vn({inputs:{input:d},backend:e,attrs:{dim:p+1}});d=m,u.push(m)}for(let p=0;p<a;++p){const m=ks(p,"int32"),g=e.makeTensorInfo([],"int32",m),I=da({inputs:{a:g,b:d},backend:e}),y=ce({inputs:{x:I},backend:e,attrs:{dtype:"float32"}}),k=Pn({inputs:{a:y,b:s},backend:e}),w=an({inputs:{x:k},backend:e,attrs:{axis:0,keepDims:!1}});l.push(w),u.push(g),u.push(I),u.push(y),u.push(k),u.push(w)}const h=$a({inputs:l,backend:e,attrs:{axis:0}});return u.forEach(p=>e.disposeIntermediateTensorInfo(p)),h}const BI={kernelName:ll,backendName:"cpu",kernelFunc:PI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const LI=[Bh,Xf,Wh,Hh,sd,Gh,qh,Kh,Zh,Jh,tp,np,op,ip,lp,dp,pp,mp,yp,Vh,kp,bp,vp,Np,td,id,Fp,Zf,Ep,Dp,$p,Op,Pp,Lp,_p,zp,Up,jp,Xp,Yp,Qp,eg,sg,og,ag,cg,ug,fg,dg,hg,mg,Mh,yg,ud,Ng,dd,Cg,gd,$g,Ag,Vg,yd,Lg,_g,zg,Ug,jg,Sd,Nd,Yf,Xg,Rp,Yg,Qg,em,Eh,Md,Dd,sm,Vd,rm,cm,um,hm,gm,Im,ym,Wd,km,bm,vm,Nm,Fm,Em,Dm,zd,Am,Pm,Wm,Ud,Kd,zm,qm,Xm,Yd,Ym,Qm,t0,Aa,o0,Dh,eh,a0,c0,Jf,cs,u0,$h,Ah,Oh,d0,p0,m0,y0,k0,x0,S0,ah,T0,E0,D0,V0,ih,B0,W0,H0,lh,Bm,U0,j0,X0,Y0,Q0,eI,sI,rI,hh,aI,mh,cI,uI,dI,pI,mI,Th,pg,yI,kI,bI,vI,NI,Jd,AI,VI,BI,Jm];for(const n of LI)ml(n);const WI=Ya("<div><canvas></canvas></div>"),_I=()=>{let n,t,e=0;const o=30,s=10,r=1e3/o;let a=[500,500],c;const i=()=>{let f=so([s,2],a[0]*.1,a[0]*.9),d=so([s,2],-5,5);c={pos:f,vel:d,size:10}};function l(){let f=Gl([[a[0]/2,a[1]/2]]),d=Au(f,c.pos),h=eo(d,.001);c.vel=Gn(c.vel,h)}const u=f=>{const d=n?.getContext("2d")??null;if(d&&f>e+r){e=f,d.clearRect(0,0,a[0],a[1]),d.strokeRect(0,0,a[0],a[1]),l();let p=c.pos.bufferSync(),m=Gn(c.pos,eo(c.vel,15)).bufferSync();for(var h=0;h<s;++h)d.beginPath(),d.arc(p.get(h,0),p.get(h,1),c.size,0,2*Math.PI),d.moveTo(p.get(h,0),p.get(h,1)),d.lineTo(m.get(h,0),m.get(h,1)),d.stroke();c.pos=Gn(c.pos,c.vel)}t=requestAnimationFrame(u)};return Ha(()=>{console.log("start"),i(),t=requestAnimationFrame(u),console.log(t),za(()=>cancelAnimationFrame(t))}),(()=>{const f=WI.cloneNode(!0),d=f.firstChild,h=n;return typeof h=="function"?Ja(h,d):n=d,hn(p=>{const m=a[0],g=a[1];return m!==p._v$&&Rs(d,"width",p._v$=m),g!==p._v$2&&Rs(d,"height",p._v$2=g),p},{_v$:void 0,_v$2:void 0}),f})()};Za(()=>Ka(_I,{}),document.getElementById("root"));
