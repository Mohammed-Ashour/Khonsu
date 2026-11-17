/*! Three.js 0.186.1
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Land outlines: Natural Earth v5.1.2, public domain. */
(()=>{function Eh(n=globalThis.fetch?.bind(globalThis)){let e=new Map;async function t(r,a={},o=null){let c=new URLSearchParams;for(let[f,h]of Object.entries(a))h!=null&&c.set(f,h);let l=c.size?`${r}?${c}`:r,u=new AbortController;o&&(e.get(o)?.abort(),e.set(o,u));try{let f=await n(l,{signal:u.signal}),h=await f.text(),p=null;try{p=JSON.parse(h)}catch{}if(!f.ok){let x=h.trim(),b=x.length<200&&!x.startsWith("<")?x:"";throw new Cr(p?.error?.message||b||`Request failed (${f.status}).`,f.status)}if(p===null)throw new Cr("The server returned an unreadable response.",f.status);return p}finally{o&&e.get(o)===u&&e.delete(o)}}let i=r=>new Date(r).toISOString().replace(/\.\d+Z$/,"Z"),s=r=>r?{lat:r.lat,lon:r.lon,alt:r.alt}:{};return{groups:()=>t("/api/satellite-groups"),satellites:r=>t("/api/satellites",{group:r},"satellites"),search:r=>t("/api/v1/search",{q:r},"satellites"),track:(r,a,o)=>t("/api/v1/track",{norad_id:r,start:i(a),duration:"25h",step:"60s",...s(o)},`track:${r}`),report:r=>t("/api/v1/report",{norad_id:r},"report"),passes:(r,a,o)=>t("/api/v1/passes",{norad_id:r,start:i(o),duration:"48h",step:"30s",...s(a)},"passes"),tonight:(r,a,o)=>t("/api/v1/tonight",{norad_id:r,time:typeof o=="number"?i(o):o,...s(a)},"tonight"),sources:()=>t("/api/v1/sources",{},"sources"),spaceWeather:()=>t("/api/v1/space-weather",{},"space-weather"),launches:()=>t("/api/v1/launches",{},"launches"),satelliteDetails:r=>t("/api/v1/satellite-details",{norad_id:r},"satellite-details"),transmitters:r=>t("/api/v1/transmitters",{norad_id:r},"transmitters"),spaceWeatherHistory:()=>t("/api/v1/space-weather-history",{},"space-weather-history"),spaceEvents:()=>t("/api/v1/space-events",{},"space-events"),catalogRecord:r=>t("/api/v1/catalog-record",{norad_id:r},"catalog-record"),spaceTrack:r=>t("/api/v1/space-track",{norad_id:r},"space-track"),seaIce:(r,a)=>t("/api/v1/sea-ice",{hemisphere:r,month:a},`sea-ice:${r}:${a}`),seaLevel:()=>t("/api/v1/sea-level",{},"sea-level"),learn:()=>t("/api/v1/learn",{},"learn"),lessons:()=>t("/api/v1/lessons",{},"lessons"),satelliteData:r=>t("/api/v1/satellite-data",{norad_id:r},"satellite-data"),recentScenes:r=>t("/api/v1/recent-scenes",{norad_id:r},"recent-scenes"),cloudCover:r=>t("/api/v1/cloud-cover",{lat:r.lat,lon:r.lon},"cloud-cover"),look:(r,a,o,c)=>t("/api/v1/look",{norad_id:r,start:o,end:c,samples:64,...s(a)},"look")}}var Cr=class extends Error{constructor(e,t){super(e),this.status=t}},cn=n=>n?.name==="AbortError";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nu=0,Pl=1,iu=2;var or=1,su=2,ps=3,mi=0,Ut=1,Cn=2,Rn=0,ms=1,Il=2,Ll=3,Dl=4,ru=5;var Pi=100,au=101,ou=102,lu=103,cu=104,hu=200,uu=201,du=202,fu=203,Nl=204,Fl=205,pu=206,mu=207,gu=208,_u=209,xu=210,yu=211,vu=212,bu=213,Su=214,ea=0,ta=1,na=2,ri=3,ia=4,sa=5,ra=6,aa=7,Na=0,Mu=1,wu=2,_n=0,Ul=1,Ol=2,Bl=3,kl=4,zl=5,Vl=6,Gl=7;var Hl=300,gi=301,Ii=302,Fa=303,Ua=304,lr=306,oa=1e3,En=1001,la=1002,It=1003,Eu=1004;var cr=1005;var Dt=1006,Oa=1007;var _i=1008;var Yt=1009,Wl=1010,Xl=1011,gs=1012,Ba=1013,xn=1014,yn=1015,vn=1016,ka=1017,za=1018,_s=1020,$l=35902,ql=35899,Yl=1021,Zl=1022,an=1023,Tn=1026,xi=1027,Kl=1028,Va=1029,yi=1030,Ga=1031;var Ha=1033,hr=33776,ur=33777,dr=33778,fr=33779,Wa=35840,Xa=35841,$a=35842,qa=35843,Ya=36196,Za=37492,Ka=37496,Ja=37488,ja=37489,pr=37490,Qa=37491,eo=37808,to=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,_o=36495,xo=36283,yo=36284,mr=36285,vo=36286;var Bs=2300,ca=2301,jr=2302,bl=2303,Sl=2400,Ml=2401,wl=2402;var Tu=3200;var bo=0,Au=1,Hn="",Xt="srgb",ks="srgb-linear",zs="linear",ht="srgb";var Qr=7680;var Cu=519,Ru=512,Pu=513,Iu=514,So=515,Lu=516,Du=517,Mo=518,Nu=519,Fu=35044;var Jl="300 es",fn=2e3,is=2001;function n1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function i1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uu(){let n=Vs("canvas");return n.style.display="block",n}var Th={},ss=null;function jl(...n){let e="THREE."+n.shift();ss?ss("log",e,...n):console.log(e,...n)}function Ou(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=Ou(n);let e="THREE."+n.shift();if(ss)ss("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=Ou(n);let e="THREE."+n.shift();if(ss)ss("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ri(...n){let e=n.join(" ");e in Th||(Th[e]=!0,He(...n))}function Bu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ku={[ea]:ta,[na]:ra,[ia]:aa,[ri]:sa,[ta]:ea,[ra]:na,[aa]:ia,[sa]:ri},pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,Us=Math.PI/180,rs=180/Math.PI;function xs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Ql(n,e){return(n%e+e)%e}function s1(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function r1(n,e,t){return n!==e?(t-n)/(e-n):0}function Os(n,e,t){return(1-t)*n+t*e}function a1(n,e,t,i){return Os(n,e,1-Math.exp(-t*i))}function o1(n,e=1){return e-Math.abs(Ql(n,e*2)-e)}function l1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function c1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function h1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function u1(n,e){return n+Math.random()*(e-n)}function d1(n){return n*(.5-Math.random())}function f1(n){n!==void 0&&(Ah=n);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p1(n){return n*Us}function m1(n){return n*rs}function g1(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function _1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function x1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function y1(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),u=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),p=r((i-e)/2),x=a((i-e)/2);switch(s){case"XYX":n.set(o*u,c*f,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*x,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*x,o*l);break;case"ZYZ":n.set(c*x,c*p,o*u,o*l);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ts(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ec={DEG2RAD:Us,RAD2DEG:rs,generateUUID:xs,clamp:et,euclideanModulo:Ql,mapLinear:s1,inverseLerp:r1,lerp:Os,damp:a1,pingpong:o1,smoothstep:l1,smootherstep:c1,randInt:h1,randFloat:u1,randFloatSpread:d1,seededRandom:f1,degToRad:p1,radToDeg:m1,isPowerOfTwo:g1,ceilPowerOfTwo:_1,floorPowerOfTwo:x1,setQuaternionFromProperEuler:y1,normalize:Wt,denormalize:ts},rc=class rc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rc.prototype.isVector2=!0;var qe=rc,en=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],p=r[a+1],x=r[a+2],b=r[a+3];if(f!==b||c!==h||l!==p||u!==x){let m=c*h+l*p+u*x+f*b;m<0&&(h=-h,p=-p,x=-x,b=-b,m=-m);let d=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);d=Math.sin(d*M)/A,o=Math.sin(o*M)/A,c=c*d+h*o,l=l*d+p*o,u=u*d+x*o,f=f*d+b*o}else{c=c*d+h*o,l=l*d+p*o,u=u*d+x*o,f=f*d+b*o;let M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+u*f+c*p-l*h,e[t+1]=c*x+u*h+l*f-o*p,e[t+2]=l*x+u*p+o*h-c*f,e[t+3]=u*x-o*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),f=o(r/2),h=c(i/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*p*x,this._y=l*p*f-h*u*x,this._z=l*u*x+h*p*f,this._w=l*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+l*p*x,this._y=l*p*f-h*u*x,this._z=l*u*x-h*p*f,this._w=l*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-l*p*x,this._y=l*p*f+h*u*x,this._z=l*u*x+h*p*f,this._w=l*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-l*p*x,this._y=l*p*f+h*u*x,this._z=l*u*x-h*p*f,this._w=l*u*f+h*p*x;break;case"YZX":this._x=h*u*f+l*p*x,this._y=l*p*f+h*u*x,this._z=l*u*x-h*p*f,this._w=l*u*f-h*p*x;break;case"XZY":this._x=h*u*f-l*p*x,this._y=l*p*f-h*u*x,this._z=l*u*x+h*p*f,this._w=l*u*f+h*p*x;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ac=class ac{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ac.prototype.isVector3=!0;var q=ac,Qo=new q,Ch=new en,oc=class oc{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],x=i[8],b=s[0],m=s[3],d=s[6],M=s[1],A=s[4],y=s[7],w=s[2],S=s[5],T=s[8];return r[0]=a*b+o*M+c*w,r[3]=a*m+o*A+c*S,r[6]=a*d+o*y+c*T,r[1]=l*b+u*M+f*w,r[4]=l*m+u*A+f*S,r[7]=l*d+u*y+f*T,r[2]=h*b+p*M+x*w,r[5]=h*m+p*A+x*S,r[8]=h*d+p*y+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*r,p=l*r-a*c,x=t*f+i*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=f*b,e[1]=(s*l-u*i)*b,e[2]=(o*i-s*a)*b,e[3]=h*b,e[4]=(u*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(i*c-l*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(e,t)),this}rotate(e){return Ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-e)),this}translate(e,t){return Ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oc.prototype.isMatrix3=!0;var Ze=oc,el=new Ze,Rh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function v1(){let n={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ri("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ri("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ks]:{primaries:e,whitePoint:i,transfer:zs,toXYZ:Rh,fromXYZ:Ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Rh,fromXYZ:Ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}var it=v1();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gi,ha=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gi===void 0&&(Gi=Vs("canvas")),Gi.width=e.width,Gi.height=e.height;let s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Gi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},b1=0,as=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ha.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var S1=0,nl=new q,Nt=class n extends pn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=En,s=En,r=Dt,a=_i,o=an,c=Yt,l=n.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=xs(),this.name="",this.source=new as(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oa:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oa:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Hl;Nt.DEFAULT_ANISOTROPY=1;var lc=class lc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],x=c[9],b=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,y=(p+1)/2,w=(d+1)/2,S=(u+h)/4,T=(f+b)/4,_=(x+m)/4;return A>y&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=S/i,r=T/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=T/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(f-b)/M,this.z=(h-u)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lc.prototype.isVector4=!0;var yt=lc,ua=class extends pn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Nt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new as(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends ua{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Gs=class extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var da=class extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Da=class Da{constructor(e,t,i,s,r,a,o,c,l,u,f,h,p,x,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,f,h,p,x,b,m)}set(e,t,i,s,r,a,o,c,l,u,f,h,p,x,b,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Hi.setFromMatrixColumn(e,0).length(),r=1/Hi.setFromMatrixColumn(e,1).length(),a=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*f,x=o*u,b=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+x*l,t[5]=h-b*l,t[9]=-o*c,t[2]=b-h*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,p=c*f,x=l*u,b=l*f;t[0]=h+b*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=b+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,p=c*f,x=l*u,b=l*f;t[0]=h-b*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,p=a*f,x=o*u,b=o*f;t[0]=c*u,t[4]=x*l-p,t[8]=h*l+b,t[1]=c*f,t[5]=b*l+h,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,p=a*l,x=o*c,b=o*l;t[0]=c*u,t[4]=b-h*f,t[8]=x*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+x,t[10]=h-b*f}else if(e.order==="XZY"){let h=a*c,p=a*l,x=o*c,b=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+b,t[5]=a*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M1,e,w1)}lookAt(e,t,i){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Qn.crossVectors(i,Jt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Qn.crossVectors(i,Jt)),Qn.normalize(),Rr.crossVectors(Jt,Qn),s[0]=Qn.x,s[4]=Rr.x,s[8]=Jt.x,s[1]=Qn.y,s[5]=Rr.y,s[9]=Jt.y,s[2]=Qn.z,s[6]=Rr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],x=i[2],b=i[6],m=i[10],d=i[14],M=i[3],A=i[7],y=i[11],w=i[15],S=s[0],T=s[4],_=s[8],E=s[12],I=s[1],B=s[5],$=s[9],X=s[13],N=s[2],D=s[6],H=s[10],V=s[14],ee=s[3],R=s[7],O=s[11],W=s[15];return r[0]=a*S+o*I+c*N+l*ee,r[4]=a*T+o*B+c*D+l*R,r[8]=a*_+o*$+c*H+l*O,r[12]=a*E+o*X+c*V+l*W,r[1]=u*S+f*I+h*N+p*ee,r[5]=u*T+f*B+h*D+p*R,r[9]=u*_+f*$+h*H+p*O,r[13]=u*E+f*X+h*V+p*W,r[2]=x*S+b*I+m*N+d*ee,r[6]=x*T+b*B+m*D+d*R,r[10]=x*_+b*$+m*H+d*O,r[14]=x*E+b*X+m*V+d*W,r[3]=M*S+A*I+y*N+w*ee,r[7]=M*T+A*B+y*D+w*R,r[11]=M*_+A*$+y*H+w*O,r[15]=M*E+A*X+y*V+w*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],b=e[7],m=e[11],d=e[15],M=c*p-l*h,A=o*p-l*f,y=o*h-c*f,w=a*p-l*u,S=a*h-c*u,T=a*f-o*u;return t*(b*M-m*A+d*y)-i*(x*M-m*w+d*S)+s*(x*A-b*w+d*T)-r*(x*y-b*S+m*T)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],b=e[13],m=e[14],d=e[15],M=t*o-i*a,A=t*c-s*a,y=t*l-r*a,w=i*c-s*o,S=i*l-r*o,T=s*l-r*c,_=u*b-f*x,E=u*m-h*x,I=u*d-p*x,B=f*m-h*b,$=f*d-p*b,X=h*d-p*m,N=M*X-A*$+y*B+w*I-S*E+T*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/N;return e[0]=(o*X-c*$+l*B)*D,e[1]=(s*$-i*X-r*B)*D,e[2]=(b*T-m*S+d*w)*D,e[3]=(h*S-f*T-p*w)*D,e[4]=(c*I-a*X-l*E)*D,e[5]=(t*X-s*I+r*E)*D,e[6]=(m*y-x*T-d*A)*D,e[7]=(u*T-h*y+p*A)*D,e[8]=(a*$-o*I+l*_)*D,e[9]=(i*I-t*$-r*_)*D,e[10]=(x*S-b*y+d*M)*D,e[11]=(f*y-u*S-p*M)*D,e[12]=(o*E-a*B-c*_)*D,e[13]=(t*B-i*E+s*_)*D,e[14]=(b*A-x*w-m*M)*D,e[15]=(u*w-f*A+h*M)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,h=r*l,p=r*u,x=r*f,b=a*u,m=a*f,d=o*f,M=c*l,A=c*u,y=c*f,w=i.x,S=i.y,T=i.z;return s[0]=(1-(b+d))*w,s[1]=(p+y)*w,s[2]=(x-A)*w,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(h+d))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(x+A)*T,s[9]=(m-M)*T,s[10]=(1-(h+b))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Hi.set(s[0],s[1],s[2]).length(),o=Hi.set(s[4],s[5],s[6]).length(),c=Hi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hn.copy(this);let l=1/a,u=1/o,f=1/c;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=fn,c=!1){let l=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),x,b;if(c)x=r/(a-r),b=a*r/(a-r);else if(o===fn)x=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===is)x=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=fn,c=!1){let l=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),x,b;if(c)x=1/(a-r),b=a/(a-r);else if(o===fn)x=-2/(a-r),b=-(a+r)/(a-r);else if(o===is)x=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Da.prototype.isMatrix4=!0;var gt=Da,Hi=new q,hn=new gt,M1=new q(0,0,0),w1=new q(1,1,1),Qn=new q,Rr=new q,Jt=new q,Ih=new gt,Lh=new en,zn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},E1=0,Dh=new q,Wi=new en,Dn=new gt,Pr=new q,Is=new q,T1=new q,A1=new en,Nh=new q(1,0,0),Fh=new q(0,1,0),Uh=new q(0,0,1),Oh={type:"added"},C1={type:"removed"},Xi={type:"childadded",child:null},il={type:"childremoved",child:null},Ft=class n extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new q,t=new zn,i=new en,s=new q(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Dh.copy(e).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Is,Pr,this.up):Dn.lookAt(Pr,Is,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(C1),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,T1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,A1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new q(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},R1={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,i),d=this._getHandJoint(l,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;l.inputState.pinching&&h>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=Ql(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=sl(a,r,e+1/3),this.g=sl(a,r,e),this.b=sl(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=zu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return it.workingToColorSpace(zt.copy(this),e),Math.round(et(zt.r*255,0,255))*65536+Math.round(et(zt.g*255,0,255))*256+Math.round(et(zt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Xt){it.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Ir);let i=Os(ei.h,Ir.h,t),s=Os(ei.s,Ir.s,t),r=Os(ei.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Qe;Qe.NAMES=zu;var Hs=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},un=new q,Nn=new q,rl=new q,Fn=new q,$i=new q,qi=new q,Bh=new q,al=new q,ol=new q,ll=new q,cl=new yt,hl=new yt,ul=new yt,si=class n{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){un.subVectors(s,t),Nn.subVectors(i,t),rl.subVectors(e,t);let a=un.dot(un),o=un.dot(Nn),c=un.dot(rl),l=Nn.dot(Nn),u=Nn.dot(rl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(l*c-o*u)*h,x=(a*u-o*c)*h;return r.set(1-p-x,x,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,i),ul.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cl,r.x),a.addScaledVector(hl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(e,t,i,s){return un.subVectors(i,t),Nn.subVectors(e,t),un.cross(Nn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;$i.subVectors(s,i),qi.subVectors(r,i),al.subVectors(e,i);let c=$i.dot(al),l=qi.dot(al);if(c<=0&&l<=0)return t.copy(i);ol.subVectors(e,s);let u=$i.dot(ol),f=qi.dot(ol);if(u>=0&&f<=u)return t.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector($i,a);ll.subVectors(e,r);let p=$i.dot(ll),x=qi.dot(ll);if(x>=0&&p<=x)return t.copy(r);let b=p*l-c*x;if(b<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(qi,o);let m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return Bh.subVectors(r,s),o=(f-u)/(f-u+(p-x)),t.copy(s).addScaledVector(Bh,o);let d=1/(m+b+h);return a=b*d,o=h*d,t.copy(i).addScaledVector($i,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ai=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Dr.subVectors(this.max,Ls),Yi.subVectors(e.a,Ls),Zi.subVectors(e.b,Ls),Ki.subVectors(e.c,Ls),ti.subVectors(Zi,Yi),ni.subVectors(Ki,Zi),Ei.subVectors(Yi,Ki);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Ei.z,Ei.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Ei.z,0,-Ei.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Ei.y,Ei.x,0];return!dl(t,Yi,Zi,Ki,Dr)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Yi,Zi,Ki,Dr))?!1:(Nr.crossVectors(ti,ni),t=[Nr.x,Nr.y,Nr.z],dl(t,Yi,Zi,Ki,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Un=[new q,new q,new q,new q,new q,new q,new q,new q],dn=new q,Lr=new ai,Yi=new q,Zi=new q,Ki=new q,ti=new q,ni=new q,Ei=new q,Ls=new q,Dr=new q,Nr=new q,Ti=new q;function dl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ti.fromArray(n,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Mt=new q,Fr=new qe,P1=0,$t=class extends pn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fu,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ws=class extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xs=class extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var wt=class extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}},I1=new ai,Ds=new q,fl=new q,oi=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):I1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);let t=Ds.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ds,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(fl)),this.expandByPoint(Ds.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},L1=0,rn=new gt,pl=new Ft,Ji=new q,jt=new ai,Ns=new ai,Pt=new q,Et=class n extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n1(e)?Xs:Ws)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(jt.min,Ns.min),jt.expandByPoint(Pt),Pt.addVectors(jt.max,Ns.max),jt.expandByPoint(Pt)):(jt.expandByPoint(Ns.min),jt.expandByPoint(Ns.max))}jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Pt.fromBufferAttribute(o,l),c&&(Ji.fromBufferAttribute(e,l),Pt.add(Ji)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $t(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new q,c[_]=new q;let l=new q,u=new q,f=new q,h=new qe,p=new qe,x=new qe,b=new q,m=new q;function d(_,E,I){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,I),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,I),u.sub(l),f.sub(l),p.sub(h),x.sub(h);let B=1/(p.x*x.y-x.x*p.y);isFinite(B)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(B),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(B),o[_].add(b),o[E].add(b),o[I].add(b),c[_].add(m),c[E].add(m),c[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){let I=M[_],B=I.start,$=I.count;for(let X=B,N=B+$;X<N;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let A=new q,y=new q,w=new q,S=new q;function T(_){w.fromBufferAttribute(s,_),S.copy(w);let E=o[_];A.copy(E),A.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(S,E);let B=y.dot(c[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,B)}for(let _=0,E=M.length;_<E;++_){let I=M[_],B=I.start,$=I.count;for(let X=B,N=B+$;X<N;X+=3)T(e.getX(X+0)),T(e.getX(X+1)),T(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new q,r=new q,a=new q,o=new q,c=new q,l=new q,u=new q,f=new q;if(e)for(let h=0,p=e.count;h<p;h+=3){let x=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),p=0,x=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*u;for(let d=0;d<u;d++)h[x++]=l[p++]}return new $t(h,u,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ml=new q,D1=new q,N1=new Ze,Qt=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ml.subVectors(i,t).cross(D1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||N1.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},F1=0,An=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=ms,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Fl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Qt().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var On=new q,gl=new q,Ur=new q,Or=new q,Vn=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gl.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(gl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Or.dot(this.direction),c=-Or.dot(Ur),l=Or.lengthSq(),u=Math.abs(1-a*a),f,h,p,x;if(u>0)if(f=a*c-o,h=a*o-c,x=r*u,f>=0)if(h>=-x)if(h<=x){let b=1/u;f*=b,h*=b,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(gl).addScaledVector(Ur,h),p}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);let i=On.dot(this.direction),s=On.dot(On)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,x=t.x-a.x,b=t.y-a.y,m=t.z-a.z,d=i.x-a.x,M=i.y-a.y,A=i.z-a.z,y=Math.abs(c),w=Math.abs(l),S=Math.abs(u),T,_,E,I,B,$,X,N,D,H,V,ee;if(y>=w&&y>=S?(E=c,$=f,D=x,ee=d,c>=0?(T=l,_=u,I=h,B=p,X=b,N=m,H=M,V=A):(T=u,_=l,I=p,B=h,X=m,N=b,H=A,V=M)):w>=S?(E=l,$=h,D=b,ee=M,l>=0?(T=u,_=c,I=p,B=f,X=m,N=x,H=A,V=d):(T=c,_=u,I=f,B=p,X=x,N=m,H=d,V=A)):(E=u,$=p,D=m,ee=A,u>=0?(T=c,_=l,I=f,B=h,X=x,N=b,H=d,V=M):(T=l,_=c,I=h,B=f,X=b,N=x,H=M,V=d)),E===0)return null;let R=T/E,O=_/E,W=1/E,te=I-R*$,he=B-O*$,Ie=X-R*D,Fe=N-O*D,ke=H-R*ee,j=V-O*ee,ae=ke*Fe-j*Ie,ge=te*j-he*ke,ze=Ie*he-Fe*te;if(s){if(ae<0||ge<0||ze<0)return null}else if((ae<0||ge<0||ze<0)&&(ae>0||ge>0||ze>0))return null;let _e=ae+ge+ze;if(_e===0)return null;let Ge=W*(ae*$+ge*D+ze*ee);return(_e>0?Ge<0:Ge>0)?null:this.at(Ge/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kh=new gt,Ai=new Vn,Br=new oi,zh=new q,kr=new q,zr=new q,Vr=new q,_l=new q,Gr=new q,Vh=new q,Hr=new q,Tt=class extends Ft{constructor(e=new Et,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],f=r[c];u!==0&&(_l.fromBufferAttribute(f,e),a?Gr.addScaledVector(_l,u):Gr.addScaledVector(_l.sub(t),u))}t.add(Gr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(Br.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Br,zh)===null||Ai.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(kh.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(kh),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=h.length;x<b;x++){let m=h[x],d=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,w=A;y<w;y+=3){let S=o.getX(y),T=o.getX(y+1),_=o.getX(y+2);s=Wr(this,d,e,i,l,u,f,S,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=x,d=b;m<d;m+=3){let M=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=Wr(this,a,e,i,l,u,f,M,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,b=h.length;x<b;x++){let m=h[x],d=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,w=A;y<w;y+=3){let S=y,T=y+1,_=y+2;s=Wr(this,d,e,i,l,u,f,S,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=x,d=b;m<d;m+=3){let M=m,A=m+1,y=m+2;s=Wr(this,a,e,i,l,u,f,M,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function U1(n,e,t,i,s,r,a,o){let c;if(e.side===Ut?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===mi,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:n}}function Wr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,kr),n.getVertexPosition(c,zr),n.getVertexPosition(l,Vr);let u=U1(n,e,t,i,kr,zr,Vr,Vh);if(u){let f=new q;si.getBarycoord(Vh,kr,zr,Vr,f),s&&(u.uv=si.getInterpolatedAttribute(s,o,c,l,f,new qe)),r&&(u.uv1=si.getInterpolatedAttribute(r,o,c,l,f,new qe)),a&&(u.normal=si.getInterpolatedAttribute(a,o,c,l,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new q,materialIndex:0};si.getNormal(kr,zr,Vr,h.normal),u.face=h,u.barycoord=f}return u}var fa=class extends Nt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=It,u=It,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=new oi,O1=new qe(.5,.5),Xr=new q,cs=class{constructor(e=new Qt,t=new Qt,i=new Qt,s=new Qt,r=new Qt,a=new Qt){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],x=r[8],b=r[9],m=r[10],d=r[11],M=r[12],A=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-a,p-u,d-x,w-M).normalize(),s[1].setComponents(l+a,p+u,d+x,w+M).normalize(),s[2].setComponents(l+o,p+f,d+b,w+A).normalize(),s[3].setComponents(l-o,p-f,d-b,w-A).normalize(),i)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,p-h,d-m,w-y).normalize();else if(s[4].setComponents(l-c,p-h,d-m,w-y).normalize(),t===fn)s[5].setComponents(l+c,p+h,d+m,w+y).normalize();else if(t===is)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);let t=O1.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Xr.x=s.normal.x>0?e.max.x:e.min.x,Xr.y=s.normal.y>0?e.max.y:e.min.y,Xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gn=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pa=new q,ma=new q,Gh=new gt,Fs=new Vn,$r=new oi,xl=new q,Hh=new q,li=class extends Ft{constructor(e=new Et,t=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)pa.fromBufferAttribute(t,s-1),ma.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=pa.distanceTo(ma);e.setAttribute("lineDistance",new wt(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;Gh.copy(s).invert(),Fs.copy(e.ray).applyMatrix4(Gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let b=p,m=x-1;b<m;b+=l){let d=u.getX(b),M=u.getX(b+1),A=qr(this,e,Fs,c,d,M,b);A&&t.push(A)}if(this.isLineLoop){let b=u.getX(x-1),m=u.getX(p),d=qr(this,e,Fs,c,b,m,x-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let b=p,m=x-1;b<m;b+=l){let d=qr(this,e,Fs,c,b,b+1,b);d&&t.push(d)}if(this.isLineLoop){let b=qr(this,e,Fs,c,x-1,p,x-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qr(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(pa.fromBufferAttribute(o,s),ma.fromBufferAttribute(o,r),t.distanceSqToSegment(pa,ma,xl,Hh)>i)return;xl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(xl);if(!(l<e.near||l>e.far))return{distance:l,point:Hh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Wh=new q,Xh=new q,$s=class extends li{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wh.distanceTo(Xh);e.setAttribute("lineDistance",new wt(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hs=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$h=new gt,El=new Vn,Yr=new oi,Zr=new q,qs=class extends Ft{constructor(e=new Et,t=new hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;$h.copy(s).invert(),El.copy(e.ray).applyMatrix4($h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){let h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=h,b=p;x<b;x++){let m=l.getX(x);Zr.fromBufferAttribute(f,m),qh(Zr,m,c,s,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=h,b=p;x<b;x++)Zr.fromBufferAttribute(f,x),qh(Zr,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qh(n,e,t,i,s,r,a){let o=El.distanceSqToPoint(n);if(o<t){let c=new q;El.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ys=class extends Nt{constructor(e=[],t=gi,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zs=class extends Nt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Nt{constructor(e,t,i=xn,s,r,a,o=It,c=It,l,u=Tn,f=1){if(u!==Tn&&u!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ga=class extends ci{constructor(e,t=xn,i=gi,s,r,a=It,o=It,c,l=Tn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ks=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},us=class n extends Et{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,p=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(f,2));function x(b,m,d,M,A,y,w,S,T,_,E){let I=y/T,B=w/_,$=y/2,X=w/2,N=S/2,D=T+1,H=_+1,V=0,ee=0,R=new q;for(let O=0;O<H;O++){let W=O*B-X;for(let te=0;te<D;te++){let he=te*I-$;R[b]=he*M,R[m]=W*A,R[d]=N,l.push(R.x,R.y,R.z),R[b]=0,R[m]=0,R[d]=S>0?1:-1,u.push(R.x,R.y,R.z),f.push(te/T),f.push(1-O/_),V+=1}}for(let O=0;O<_;O++)for(let W=0;W<T;W++){let te=h+W+D*O,he=h+W+D*(O+1),Ie=h+(W+1)+D*(O+1),Fe=h+(W+1)+D*O;c.push(te,he,Fe),c.push(he,Ie,Fe),ee+=6}o.addGroup(p,ee,E),p+=ee,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Js=class n extends Et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,f=e/o,h=t/c,p=[],x=[],b=[],m=[];for(let d=0;d<u;d++){let M=d*h-a;for(let A=0;A<l;A++){let y=A*f-r;x.push(y,-M,0),b.push(0,0,1),m.push(A/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){let A=M+l*d,y=M+l*(d+1),w=M+1+l*(d+1),S=M+1+l*d;p.push(A,y,S),p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new wt(x,3)),this.setAttribute("normal",new wt(b,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var gn=class n extends Et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new q,h=new q,p=[],x=[],b=[],m=[];for(let d=0;d<=i;d++){let M=[],A=d/i,y=a+A*o,w=e*Math.cos(y),S=Math.sqrt(e*e-w*w),T=0;d===0&&a===0?T=.5/t:d===i&&c===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let E=_/t,I=s+E*r;f.x=-S*Math.cos(I),f.y=w,f.z=S*Math.sin(I),x.push(f.x,f.y,f.z),h.copy(f).normalize(),b.push(h.x,h.y,h.z),m.push(E+T,1-A),M.push(l++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let A=u[d][M+1],y=u[d][M],w=u[d+1][M],S=u[d+1][M+1];(d!==0||a>0)&&p.push(A,y,S),(d!==i-1||c<Math.PI)&&p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new wt(x,3)),this.setAttribute("normal",new wt(b,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Li(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Yh(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Yh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=Li(n[t]);for(let s in i)e[s]=i[s]}return e}function Yh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function B1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Vu={clone:Li,merge:Gt},k1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k1,this.fragmentShader=z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=B1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_a=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var js=class extends An{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var xa=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ya=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Qs=class extends Gn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ji(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function yl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var hi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends hi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ml:r=e,o=2*t-i;break;case wl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ml:a=e,c=2*i-t;break;case wl:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(i-t)/(s-t),b=x*x,m=b*x,d=-h*m+2*h*b-h*x,M=(1+h)*m+(-1.5-2*h)*b+(-.5+h)*x+1,A=(-1-p)*m+(1.5+p)*b+.5*x,y=p*m-p*b;for(let w=0;w!==o;++w)r[w]=d*a[u+w]+M*a[l+w]+A*a[c+w]+y*a[f+w];return r}},ba=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}},Sa=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends hi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let x=(i-t)/(s-t),b=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*b+a[c+m]*x;return r}let h=o*2,p=e-1;for(let x=0;x!==o;++x){let b=a[l+x],m=a[c+x],d=p*h+x*2,M=f[d],A=f[d+1],y=e*h+x*2,w=u[y],S=u[y+1],T=G1(i,t,M,w,s);r[x]=Gu(T,b,A,S,m)}return r}};function Gu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function V1(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function G1(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Gu(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=V1(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var nn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),yl(e.settings)&&(i.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case jr:t=this.InterpolantFactoryMethodSmooth;break;case bl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return jr;case this.InterpolantFactoryMethodBezier:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;yl(this.settings)&&(Zh(this.settings.inTangents,e),Zh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&i1(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*i,h=f-i,p=f+i;for(let x=0;x!==i;++x){let b=t[f+x];if(b!==t[h+x]||b!==t[p+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,yl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=ca;var ui=class extends nn{constructor(e,t,i){super(e,t,i)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Bs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends nn{constructor(e,t,i,s){super(e,t,i,s)}};wa.prototype.ValueTypeName="color";var Ea=class extends nn{constructor(e,t,i,s){super(e,t,i,s)}};Ea.prototype.ValueTypeName="number";var Ta=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)en.slerpFlat(r,0,a,l-o,a,l,c);return r}},er=class extends nn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}};er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends nn{constructor(e,t,i){super(e,t,i)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Bs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends nn{constructor(e,t,i,s){super(e,t,i,s)}};Aa.prototype.ValueTypeName="vector";var Ca=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let p=l[f],x=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hu=new Ca,Ra=class{constructor(e){this.manager=e!==void 0?e:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var vl=new gt,Kh=new q,Jh=new q,Pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(vl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===is||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kr=new q,Jr=new en,wn=new q,nr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kr,Jr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,Jr,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Kr,Jr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,Jr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new q,jh=new qe,Qh=new qe,Vt=class extends nr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Qh),t.subVectors(Qh,jh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Us*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ds=class extends nr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tl=class extends Pa{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ir=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Tl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},sr=class extends tr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qi=-90,es=1,Ia=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Qi,es,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Qi,es,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Qi,es,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Qi,es,e,t);o.layers=this.layers,this.add(o);let c=new Vt(Qi,es,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Qi,es,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===is)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},La=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nc="\\[\\]\\.:\\/",H1=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",W1="[^"+nc.replace("\\.","")+"]",X1=/((?:WC+[\/:])*)/.source.replace("WC",ic),$1=/(WCOD+)?/.source.replace("WCOD",W1),q1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Y1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),Z1=new RegExp("^"+X1+$1+q1+Y1+"$"),K1=["material","materials","bones","map"],Al=class{constructor(e,t,i){let s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H1,"")}static parseTrackName(e){let t=Z1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);K1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Al;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E8=new Float32Array(1);var eu=new gt,rr=class{constructor(e,t,i=0,s=1/0){this.ray=new Vn(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(e,t=!0,i=[]){return Cl(e,this,i,t),i.sort(tu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Cl(e[s],this,i,t);return i.sort(tu),i}};function tu(n,e){return n.distance-e.distance}function Cl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Cl(r[a],e,t,!0)}}var fs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var cc=class cc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};cc.prototype.isMatrix2=!0;var Rl=cc;var ar=class extends pn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sc(n,e,t,i){let s=J1(i);switch(t){case Yl:return n*e;case Kl:return n*e/s.components*s.byteLength;case Va:return n*e/s.components*s.byteLength;case yi:return n*e*2/s.components*s.byteLength;case Ga:return n*e*2/s.components*s.byteLength;case Zl:return n*e*3/s.components*s.byteLength;case an:return n*e*4/s.components*s.byteLength;case Ha:return n*e*4/s.components*s.byteLength;case hr:case ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dr:case fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:case qa:return Math.max(n,16)*Math.max(e,8)/4;case Wa:case $a:return Math.max(n,8)*Math.max(e,8)/2;case Ya:case Za:case Ja:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case pr:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mo:case go:case _o:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xo:case yo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case mr:case vo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J1(n){switch(n){case Yt:case Wl:return{byteLength:1,components:1};case gs:case Xl:case vn:return{byteLength:2,components:1};case ka:case za:return{byteLength:2,components:4};case xn:case Ba:case yn:return{byteLength:4,components:1};case $l:case ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ud(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Q1(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){let x=f[h],b=f[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){let b=f[p];n.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,om=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ym=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:ep,alphahash_pars_fragment:tp,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:ap,aomap_pars_fragment:op,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:xp,color_fragment:yp,color_pars_fragment:vp,color_pars_vertex:bp,color_vertex:Sp,common:Mp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Tp,displacementmap_vertex:Ap,emissivemap_fragment:Cp,emissivemap_pars_fragment:Rp,colorspace_fragment:Pp,colorspace_pars_fragment:Ip,envmap_fragment:Lp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Np,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:$p,envmap_vertex:Up,fog_vertex:Op,fog_pars_vertex:Bp,fog_fragment:kp,fog_pars_fragment:zp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Xp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Kp,lights_physical_fragment:Jp,lights_physical_pars_fragment:jp,lights_fragment_begin:Qp,lights_fragment_maps:e0,lights_fragment_end:t0,lightprobes_pars_fragment:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:a0,map_fragment:o0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:d0,morphinstance_vertex:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:_0,normal_fragment_begin:x0,normal_fragment_maps:y0,normal_pars_fragment:v0,normal_pars_vertex:b0,normal_vertex:S0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:C0,packing:R0,premultiplied_alpha_fragment:P0,project_vertex:I0,dithering_fragment:L0,dithering_pars_fragment:D0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:O0,shadowmap_vertex:B0,shadowmask_pars_fragment:k0,skinbase_vertex:z0,skinning_pars_vertex:V0,skinning_vertex:G0,skinnormal_vertex:H0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:$0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:Z0,uv_pars_fragment:K0,uv_pars_vertex:J0,uv_vertex:j0,worldpos_vertex:Q0,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:am,depth_frag:om,distance_vert:lm,distance_frag:cm,equirect_vert:hm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:_m,meshmatcap_vert:xm,meshmatcap_frag:ym,meshnormal_vert:vm,meshnormal_frag:bm,meshphong_vert:Sm,meshphong_frag:Mm,meshphysical_vert:wm,meshphysical_frag:Em,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Cm,points_frag:Rm,shadow_vert:Pm,shadow_frag:Im,sprite_vert:Lm,sprite_frag:Dm},we={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},In={basic:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Gt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Gt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Gt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Gt([we.points,we.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Gt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Gt([we.common,we.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Gt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Gt([we.sprite,we.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Gt([we.common,we.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Gt([we.lights,we.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};In.physical={uniforms:Gt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var wo={r:0,b:0,g:0},Nm=new gt,dd=new Ze;dd.set(-1,0,0,0,1,0,0,0,1);function Fm(n,e,t,i,s,r){let a=new Qe(0),o=s===!0?0:1,c,l,u=null,f=0,h=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function x(M){let A=!1,y=p(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(M,A){let y=p(A);y&&(y.isCubeTexture||y.mapping===lr)?(l===void 0&&(l=new Tt(new us(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Li(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dd),l.material.toneMapped=it.getTransfer(y.colorSpace)!==ht,(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Tt(new Js(2,2),new tn({name:"BackgroundMaterial",uniforms:Li(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(wo,tc(n)),t.buffers.color.setClear(wo.r,wo.g,wo.b,A,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:x,addToRenderList:b,dispose:d}}function Um(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(B,$,X,N,D){let H=!1,V=f(B,N,X,$);r!==V&&(r=V,l(r.object)),H=p(B,N,X,D),H&&x(B,N,X,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(B,$,X,N),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(B){return n.bindVertexArray(B)}function u(B){return n.deleteVertexArray(B)}function f(B,$,X,N){let D=N.wireframe===!0,H=i[$.id];H===void 0&&(H={},i[$.id]=H);let V=B.isInstancedMesh===!0?B.id:0,ee=H[V];ee===void 0&&(ee={},H[V]=ee);let R=ee[X.id];R===void 0&&(R={},ee[X.id]=R);let O=R[D];return O===void 0&&(O=h(c()),R[D]=O),O}function h(B){let $=[],X=[],N=[];for(let D=0;D<t;D++)$[D]=0,X[D]=0,N[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:X,attributeDivisors:N,object:B,attributes:{},index:null}}function p(B,$,X,N){let D=r.attributes,H=$.attributes,V=0,ee=X.getAttributes();for(let R in ee)if(ee[R].location>=0){let W=D[R],te=H[R];if(te===void 0&&(R==="instanceMatrix"&&B.instanceMatrix&&(te=B.instanceMatrix),R==="instanceColor"&&B.instanceColor&&(te=B.instanceColor)),W===void 0||W.attribute!==te||te&&W.data!==te.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function x(B,$,X,N){let D={},H=$.attributes,V=0,ee=X.getAttributes();for(let R in ee)if(ee[R].location>=0){let W=H[R];W===void 0&&(R==="instanceMatrix"&&B.instanceMatrix&&(W=B.instanceMatrix),R==="instanceColor"&&B.instanceColor&&(W=B.instanceColor));let te={};te.attribute=W,W&&W.data&&(te.data=W.data),D[R]=te,V++}r.attributes=D,r.attributesNum=V,r.index=N}function b(){let B=r.newAttributes;for(let $=0,X=B.length;$<X;$++)B[$]=0}function m(B){d(B,0)}function d(B,$){let X=r.newAttributes,N=r.enabledAttributes,D=r.attributeDivisors;X[B]=1,N[B]===0&&(n.enableVertexAttribArray(B),N[B]=1),D[B]!==$&&(n.vertexAttribDivisor(B,$),D[B]=$)}function M(){let B=r.newAttributes,$=r.enabledAttributes;for(let X=0,N=$.length;X<N;X++)$[X]!==B[X]&&(n.disableVertexAttribArray(X),$[X]=0)}function A(B,$,X,N,D,H,V){V===!0?n.vertexAttribIPointer(B,$,X,D,H):n.vertexAttribPointer(B,$,X,N,D,H)}function y(B,$,X,N){b();let D=N.attributes,H=X.getAttributes(),V=$.defaultAttributeValues;for(let ee in H){let R=H[ee];if(R.location>=0){let O=D[ee];if(O===void 0&&(ee==="instanceMatrix"&&B.instanceMatrix&&(O=B.instanceMatrix),ee==="instanceColor"&&B.instanceColor&&(O=B.instanceColor)),O!==void 0){let W=O.normalized,te=O.itemSize,he=e.get(O);if(he===void 0)continue;let Ie=he.buffer,Fe=he.type,ke=he.bytesPerElement,j=Fe===n.INT||Fe===n.UNSIGNED_INT||O.gpuType===Ba;if(O.isInterleavedBufferAttribute){let ae=O.data,ge=ae.stride,ze=O.offset;if(ae.isInstancedInterleavedBuffer){for(let _e=0;_e<R.locationSize;_e++)d(R.location+_e,ae.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<R.locationSize;_e++)m(R.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let _e=0;_e<R.locationSize;_e++)A(R.location+_e,te/R.locationSize,Fe,W,ge*ke,(ze+te/R.locationSize*_e)*ke,j)}else{if(O.isInstancedBufferAttribute){for(let ae=0;ae<R.locationSize;ae++)d(R.location+ae,O.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ae=0;ae<R.locationSize;ae++)m(R.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ae=0;ae<R.locationSize;ae++)A(R.location+ae,te/R.locationSize,Fe,W,te*ke,te/R.locationSize*ae*ke,j)}}else if(V!==void 0){let W=V[ee];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(R.location,W);break;case 3:n.vertexAttrib3fv(R.location,W);break;case 4:n.vertexAttrib4fv(R.location,W);break;default:n.vertexAttrib1fv(R.location,W)}}}}M()}function w(){E();for(let B in i){let $=i[B];for(let X in $){let N=$[X];for(let D in N){let H=N[D];for(let V in H)u(H[V].object),delete H[V];delete N[D]}}delete i[B]}}function S(B){if(i[B.id]===void 0)return;let $=i[B.id];for(let X in $){let N=$[X];for(let D in N){let H=N[D];for(let V in H)u(H[V].object),delete H[V];delete N[D]}}delete i[B.id]}function T(B){for(let $ in i){let X=i[$];for(let N in X){let D=X[N];if(D[B.id]===void 0)continue;let H=D[B.id];for(let V in H)u(H[V].object),delete H[V];delete D[B.id]}}}function _(B){for(let $ in i){let X=i[$],N=B.isInstancedMesh===!0?B.id:0,D=X[N];if(D!==void 0){for(let H in D){let V=D[H];for(let ee in V)u(V[ee].object),delete V[ee];delete D[H]}delete X[N],Object.keys(X).length===0&&delete i[$]}}}function E(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:M}}function Om(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==an&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Yt&&T!==yn&&!_&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(He("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:w,samples:S}}function km(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Qt,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let x=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||x===null||x.length===0||r&&!m)r?u(null):l();else{let M=r?0:i,A=M*4,y=d.clippingState||null;c.value=y,y=u(x,h,A,p);for(let w=0;w!==A;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,x){let b=f!==null?f.length:0,m=null;if(b!==0){if(m=c.value,x!==!0||m===null){let d=p+b*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,y=p;A!==b;++A,y+=4)a.copy(f[A]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var vs=4,zm=6,Vm=20,Gm=256,gr=new ds,Wu=new Qe,hc=null,uc=0,dc=0,fc=!1,Hm=new q,Di=new q,To=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Hm}=r;hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,uc,dc),this._renderer.xr.enabled=fc,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:vn,format:an,colorSpace:ks,depthBuffer:!1},s=Xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wm(r)),this._blurMaterial=$m(r,e,t),this._ggxMaterial=Xm(r,e,t)}return s}_compileMaterial(e){let t=new Tt(new Et,e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,i,s,r){let c=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Wu),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new us,new mn({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,d=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(Wu),d=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):y===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let w=this._cubeSize;ys(s,y*w,A>2?w:0,w,w),f.setRenderTarget(s),d&&f.render(b,c),f.render(e,c)}f.toneMapping=p,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===gi||e.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ys(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,gr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,p=f*h,{_lodMax:x}=this,b=this._sizeLods[i],m=3*b*(i>x-vs?i-x+vs:0),d=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,ys(r,m,d,3*b,2*b),s.setRenderTarget(r),s.render(o,gr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,ys(e,m,d,3*b,2*b),s.setRenderTarget(e),s.render(o,gr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-vs?s-this._lodMax+vs:0),h=4*(this._cubeSize-u);ys(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(c,gr)}};function Wm(n){let e=[],t=[],i=n,s=n-vs+1+zm;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,p=3,x=new Float32Array(p*h*f),b=new Float32Array(p*h*f);for(let d=0;d<f;d++){let M=d%3*2/3-1,A=d>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];x.set(y,p*h*d);for(let w=0;w<h;w++){let S=u[w*2]*2-1,T=u[w*2+1]*2-1;d===0?Di.set(1,T,S):d===1?Di.set(-S,1,-T):d===2?Di.set(-S,T,1):d===3?Di.set(-1,T,-S):d===4?Di.set(-S,-1,T):Di.set(S,T,-1),Di.toArray(b,(d*h+w)*p)}}let m=new Et;m.setAttribute("position",new $t(x,p)),m.setAttribute("outputDirection",new $t(b,p)),t.push(new Tt(m,null)),i>vs&&i--}return{lodMeshes:t,sizeLods:e}}function Xu(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Xm(n,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function $m(n,e,t){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:Vm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function $u(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function qu(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ao=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ys(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new us(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Li(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Rn});r.uniforms.tEquirect.value=t;let a=new Tt(s,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=Dt),new Ia(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function qm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Fa||p===Ua)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let b=new Ao(x.height);return b.fromEquirectangularTexture(n,h),e.set(h,b),h.addEventListener("dispose",l),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,x=p===Fa||p===Ua,b=p===gi||p===Ii;if(x||b){let m=t.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new To(n)),m=x?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return x&&M&&M.height>0||b&&M&&c(M)?(i===null&&(i=new To(n)),m=x?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Fa?h.mapping=gi:p===Ua&&(h.mapping=Ii),h}function c(h){let p=0,x=6;for(let b=0;b<x;b++)h[b]!==void 0&&p++;return p===x}function l(h){let p=h.target;p.removeEventListener("dispose",l);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Ym(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ri("WebGLRenderer: "+i+" extension not supported."),s}}}function Zm(n,e,t,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(f){let h=[],p=f.index,x=f.attributes.position,b=0;if(x===void 0)return;if(p!==null){let M=p.array;b=p.version;for(let A=0,y=M.length;A<y;A+=3){let w=M[A+0],S=M[A+1],T=M[A+2];h.push(w,S,S,T,T,w)}}else{let M=x.array;b=x.version;for(let A=0,y=M.length/3-1;A<y;A+=3){let w=A+0,S=A+1,T=A+2;h.push(w,S,S,T,T,w)}}let m=new(x.count>=65535?Xs:Ws)(h,1);m.version=b;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Km(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function l(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*a,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let b=0;for(let m=0;m<p;m++)b+=h[m];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function jm(n,e,t){let i=new WeakMap,s=new yt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let E=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;p===!0&&(A=1),x===!0&&(A=2),b===!0&&(A=3);let y=o.attributes.position.count*A,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*w*4*f),T=new Gs(S,y,w,f);T.type=yn,T.needsUpdate=!0;let _=A*4;for(let I=0;I<f;I++){let B=m[I],$=d[I],X=M[I],N=y*w*4*I;for(let D=0;D<B.count;D++){let H=D*_;p===!0&&(s.fromBufferAttribute(B,D),S[N+H+0]=s.x,S[N+H+1]=s.y,S[N+H+2]=s.z,S[N+H+3]=0),x===!0&&(s.fromBufferAttribute($,D),S[N+H+4]=s.x,S[N+H+5]=s.y,S[N+H+6]=s.z,S[N+H+7]=0),b===!0&&(s.fromBufferAttribute(X,D),S[N+H+8]=s.x,S[N+H+9]=s.y,S[N+H+10]=s.z,S[N+H+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:T,size:new qe(y,w)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];let x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Qm(n,e,t,i,s){let r=new WeakMap;function a(l){let u=s.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var e2={[Ul]:"LINEAR_TONE_MAPPING",[Ol]:"REINHARD_TONE_MAPPING",[Bl]:"CINEON_TONE_MAPPING",[kl]:"ACES_FILMIC_TONE_MAPPING",[Vl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[zl]:"CUSTOM_TONE_MAPPING"};function t2(n,e,t,i,s,r){let a=new qt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Et;l.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new wt([0,2,0,0,2,0],2));let u=new _a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Tt(l,u),h=new ds(-1,1,1,-1,0,1),p=null,x=null,b=!1,m,d=null,M=[],A=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),c!==null&&c.setSize(y,w);for(let S=0;S<M.length;S++){let T=M[S];T.setSize&&T.setSize(y,w)}},this.setEffects=function(y){M=y,A=M.length>0&&M[0].isRenderPass===!0;let w=a.width,S=a.height;M.length>0&&o===null&&(o=new qt(w,S,{type:vn,depthBuffer:!1,stencilBuffer:!1}),c=new qt(w,S,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){let _=M[T];_.setSize&&_.setSize(w,S)}},this.begin=function(y,w){if(b||y.toneMapping===_n&&M.length===0)return!1;if(d=w,w!==null){let S=w.width,T=w.height;(a.width!==S||a.height!==T)&&this.setSize(S,T)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=_n,!0},this.hasRenderPass=function(){return A},this.end=function(y,w){y.toneMapping=m,b=!0;let S=a,T=o;for(let _=0;_<M.length;_++){let E=M[_];E.enabled!==!1&&(E.render(y,T,S,w),E.needsSwap!==!1&&(S=T,T=T===o?c:o))}if(p!==y.outputColorSpace||x!==y.toneMapping){p=y.outputColorSpace,x=y.toneMapping,u.defines={},it.getTransfer(p)===ht&&(u.defines.SRGB_TRANSFER="");let _=e2[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(d),y.render(f,h),d=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var fd=new Nt,gc=new ci(1,1),pd=new Gs,md=new da,gd=new Ys,Yu=[],Zu=[],Ku=new Float32Array(16),Ju=new Float32Array(9),ju=new Float32Array(4);function Ss(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Po(n,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function s2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function r2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function a2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;ju.set(i),n.uniformMatrix2fv(this.addr,!1,ju),Ct(t,i)}}function o2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Ju.set(i),n.uniformMatrix3fv(this.addr,!1,Ju),Ct(t,i)}}function l2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Ku.set(i),n.uniformMatrix4fv(this.addr,!1,Ku),Ct(t,i)}}function c2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function u2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function d2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function f2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function m2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function g2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function _2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gc.compareFunction=t.isReversedDepthBuffer()?Mo:So,r=gc):r=fd,t.setTexture2D(e||r,s)}function x2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||md,s)}function y2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||gd,s)}function v2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pd,s)}function b2(n){switch(n){case 5126:return n2;case 35664:return i2;case 35665:return s2;case 35666:return r2;case 35674:return a2;case 35675:return o2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return h2;case 35668:case 35672:return u2;case 35669:case 35673:return d2;case 5125:return f2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return _2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return v2}}function S2(n,e){n.uniform1fv(this.addr,e)}function M2(n,e){let t=Ss(e,this.size,2);n.uniform2fv(this.addr,t)}function w2(n,e){let t=Ss(e,this.size,3);n.uniform3fv(this.addr,t)}function E2(n,e){let t=Ss(e,this.size,4);n.uniform4fv(this.addr,t)}function T2(n,e){let t=Ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A2(n,e){let t=Ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function C2(n,e){let t=Ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function R2(n,e){n.uniform1iv(this.addr,e)}function P2(n,e){n.uniform2iv(this.addr,e)}function I2(n,e){n.uniform3iv(this.addr,e)}function L2(n,e){n.uniform4iv(this.addr,e)}function D2(n,e){n.uniform1uiv(this.addr,e)}function N2(n,e){n.uniform2uiv(this.addr,e)}function F2(n,e){n.uniform3uiv(this.addr,e)}function U2(n,e){n.uniform4uiv(this.addr,e)}function O2(n,e,t){let i=this.cache,s=e.length,r=Po(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=gc:a=fd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function B2(n,e,t){let i=this.cache,s=e.length,r=Po(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||md,r[a])}function k2(n,e,t){let i=this.cache,s=e.length,r=Po(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||gd,r[a])}function z2(n,e,t){let i=this.cache,s=e.length,r=Po(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pd,r[a])}function V2(n){switch(n){case 5126:return S2;case 35664:return M2;case 35665:return w2;case 35666:return E2;case 35674:return T2;case 35675:return A2;case 35676:return C2;case 5124:case 35670:return R2;case 35667:case 35671:return P2;case 35668:case 35672:return I2;case 35669:case 35673:return L2;case 5125:return D2;case 36294:return N2;case 36295:return F2;case 36296:return U2;case 35678:case 36198:case 36298:case 36306:case 35682:return O2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return k2;case 36289:case 36303:case 36311:case 36292:return z2}}var _c=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=b2(t.type)}},xc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V2(t.type)}},yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},pc=/(\w+)(\])?(\[|\.)?/g;function Qu(n,e){n.seq.push(e),n.map[e.id]=e}function G2(n,e,t){let i=n.name,s=i.length;for(pc.lastIndex=0;;){let r=pc.exec(i),a=pc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Qu(t,l===void 0?new _c(o,n,e):new xc(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new yc(o),Qu(t,f)),t=f}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);G2(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function ed(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var H2=37297,W2=0;function X2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var td=new Ze;function $2(n){it._getMatrix(td,it.workingColorSpace,n);let e=`mat3( ${td.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case zs:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+X2(n.getShaderSource(e),o)}else return r}function q2(n,e){let t=$2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Y2={[Ul]:"Linear",[Ol]:"Reinhard",[Bl]:"Cineon",[kl]:"ACESFilmic",[Vl]:"AgX",[Gl]:"Neutral",[zl]:"Custom"};function Z2(n,e){let t=Y2[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eo=new q;function K2(){it.getLuminanceCoefficients(Eo);let n=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function j2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Q2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xr(n){return n!==""}function id(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e3=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(e3,n3)}var t3=new Map;function n3(n,e){let t=je[e];if(t===void 0){let i=t3.get(e);if(i!==void 0)t=je[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vc(t)}var i3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(n){return n.replace(i3,s3)}function s3(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ad(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var r3={[or]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function a3(n){return r3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var o3={[gi]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE_UV"};function l3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":o3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var c3={[Ii]:"ENVMAP_MODE_REFRACTION"};function h3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":c3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var u3={[Na]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function d3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":u3[n.combine]||"ENVMAP_BLENDING_NONE"}function f3(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function p3(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=a3(t),l=l3(t),u=h3(t),f=d3(t),h=f3(t),p=J2(t),x=j2(r),b=s.createProgram(),m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xr).join(`
`),d.length>0&&(d+=`
`)):(m=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),d=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?je.tonemapping_pars_fragment:"",t.toneMapping!==_n?Z2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,q2("linearToOutputTexel",t.outputColorSpace),K2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=vc(a),a=id(a,t),a=sd(a,t),o=vc(o),o=id(o,t),o=sd(o,t),a=rd(a),o=rd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=M+m+a,y=M+d+o,w=ed(s,s.VERTEX_SHADER,A),S=ed(s,s.FRAGMENT_SHADER,y);s.attachShader(b,w),s.attachShader(b,S),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function T(B){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(b)||"",X=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(S)||"",D=$.trim(),H=X.trim(),V=N.trim(),ee=!0,R=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,w,S);else{let O=nd(s,w,"vertex"),W=nd(s,S,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+D+`
`+O+`
`+W)}else D!==""?He("WebGLProgram: Program Info Log:",D):(H===""||V==="")&&(R=!1);R&&(B.diagnostics={runnable:ee,programLog:D,vertexShader:{log:H,prefix:m},fragmentShader:{log:V,prefix:d}})}s.deleteShader(w),s.deleteShader(S),_=new bs(s,b),E=Q2(s,b)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(b,H2)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=S,this}var m3=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sc(e),t.set(e,i)),i}},Sc=class{constructor(e){this.id=m3++,this.code=e,this.usedTimes=0}};function g3(n){return n===yi||n===pr||n===mr}function _3(n,e,t,i,s,r){let a=new os,o=new bc,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function b(_,E,I,B,$,X){let N=B.fog,D=$.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?B.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ee=e.get(_.envMap||H,V),R=ee&&ee.mapping===lr?ee.image.height:null,O=p[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let W=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=W!==void 0?W.length:0,he=0;D.morphAttributes.position!==void 0&&(he=1),D.morphAttributes.normal!==void 0&&(he=2),D.morphAttributes.color!==void 0&&(he=3);let Ie,Fe,ke,j;if(O){let pt=In[O];Ie=pt.vertexShader,Fe=pt.fragmentShader}else{Ie=_.vertexShader,Fe=_.fragmentShader;let pt=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,pt,lt),ke=pt.id,j=lt.id}let ae=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),ze=$.isInstancedMesh===!0,_e=$.isBatchedMesh===!0,Ge=!!_.map,ot=!!_.matcap,Xe=!!ee,Q=!!_.aoMap,P=!!_.lightMap,F=!!_.bumpMap&&_.wireframe===!1,J=!!_.normalMap,se=!!_.displacementMap,pe=!!_.emissiveMap,fe=!!_.metalnessMap,Ce=!!_.roughnessMap,U=_.anisotropy>0,tt=_.clearcoat>0,Ye=_.dispersion>0,C=_.retroreflectivity>0,g=_.iridescence>0,z=_.sheen>0,Y=_.transmission>0,ie=U&&!!_.anisotropyMap,me=tt&&!!_.clearcoatMap,xe=tt&&!!_.clearcoatNormalMap,re=tt&&!!_.clearcoatRoughnessMap,le=g&&!!_.iridescenceMap,ye=g&&!!_.iridescenceThicknessMap,Oe=z&&!!_.sheenColorMap,Me=z&&!!_.sheenRoughnessMap,ve=!!_.specularMap,Be=!!_.specularColorMap,We=!!_.specularIntensityMap,Ke=Y&&!!_.transmissionMap,G=Y&&!!_.thicknessMap,be=!!_.gradientMap,oe=!!_.alphaMap,Se=_.alphaTest>0,Ae=!!_.alphaHash,ue=!!_.extensions,Ve=_n;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ve=n.toneMapping);let Ne={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:Ie,fragmentShader:Fe,defines:_.defines,customVertexShaderID:ke,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:_e,batchingColor:_e&&$._colorsTexture!==null,instancing:ze,instancingColor:ze&&$.instanceColor!==null,instancingMorph:ze&&$.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:ot,envMap:Xe,envMapMode:Xe&&ee.mapping,envMapCubeUVHeight:R,aoMap:Q,lightMap:P,bumpMap:F,normalMap:J,displacementMap:se,emissiveMap:pe,normalMapObjectSpace:J&&_.normalMapType===Au,normalMapTangentSpace:J&&_.normalMapType===bo,packedNormalMap:J&&_.normalMapType===bo&&g3(_.normalMap.format),metalnessMap:fe,roughnessMap:Ce,anisotropy:U,anisotropyMap:ie,clearcoat:tt,clearcoatMap:me,clearcoatNormalMap:xe,clearcoatRoughnessMap:re,dispersion:Ye,retroreflection:C,iridescence:g,iridescenceMap:le,iridescenceThicknessMap:ye,sheen:z,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:ve,specularColorMap:Be,specularIntensityMap:We,transmission:Y,transmissionMap:Ke,thicknessMap:G,gradientMap:be,opaque:_.transparent===!1&&_.blending===ms&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:Se,alphaHash:Ae,combine:_.combine,mapUv:Ge&&x(_.map.channel),aoMapUv:Q&&x(_.aoMap.channel),lightMapUv:P&&x(_.lightMap.channel),bumpMapUv:F&&x(_.bumpMap.channel),normalMapUv:J&&x(_.normalMap.channel),displacementMapUv:se&&x(_.displacementMap.channel),emissiveMapUv:pe&&x(_.emissiveMap.channel),metalnessMapUv:fe&&x(_.metalnessMap.channel),roughnessMapUv:Ce&&x(_.roughnessMap.channel),anisotropyMapUv:ie&&x(_.anisotropyMap.channel),clearcoatMapUv:me&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(_.sheenRoughnessMap.channel),specularMapUv:ve&&x(_.specularMap.channel),specularColorMapUv:Be&&x(_.specularColorMap.channel),specularIntensityMapUv:We&&x(_.specularIntensityMap.channel),transmissionMapUv:Ke&&x(_.transmissionMap.channel),thicknessMapUv:G&&x(_.thicknessMap.channel),alphaMapUv:oe&&x(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(J||U),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!D.attributes.uv&&(Ge||oe),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&J===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:pe&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===Ut,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)E.push(I),E.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(d(E,_),M(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function d(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let E=p[_.type],I;if(E){let B=In[E];I=Vu.clone(B.uniforms)}else I=_.uniforms;return I}function y(_,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new p3(n,E,_,s),l.push(I),u.set(E,I)),I}function w(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function T(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:w,releaseShaderCache:S,programs:l,dispose:T}}function x3(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function y3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function od(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ld(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,b,m,d){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:d},n[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=x,M.materialVariant=a(h),M.groupOrder=b,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function c(h,p,x,b,m,d,M){M.reversedDepth===!0&&(m=-m);let A=o(h,p,x,b,m,d);x.transmission>0?i.push(A):x.transparent===!0?s.push(A):t.push(A)}function l(h,p,x,b,m,d){let M=o(h,p,x,b,m,d);x.transmission>0?i.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||y3),i.length>1&&i.sort(p||od),s.length>1&&s.sort(p||od)}function f(){for(let h=e,p=n.length;h<p;h++){let x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function v3(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ld,n.set(i,[a])):s>=r.length?(a=new ld,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function b3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new Qe};break;case"SpotLight":t={position:new q,direction:new q,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function S3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var M3=0;function w3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function E3(n){let e=new b3,t=S3(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new q);let s=new q,r=new gt,a=new gt;function o(l){let u=0,f=0,h=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let p=0,x=0,b=0,m=0,d=0,M=0,A=0,y=0,w=0,S=0,T=0,_=0,E=0,I=0;l.sort(w3);for(let $=0,X=l.length;$<X;$++){let N=l[$],D=N.color,H=N.intensity,V=N.distance,ee=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===yi?ee=N.shadow.map.texture:ee=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=D.r*H,f+=D.g*H,h+=D.b*H;else if(N.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(N.sh.coefficients[R],H);I++}else if(N.isSunLight){let R=e.get(N);if(R.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let O=N.shadow,W=t.get(N);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),i.sunShadow[x]=W,i.sunShadowMap[x]=ee;let te=O.getViewportCount();for(let he=0;he<te;he++)i.sunShadowMatrix[b+he]=O.getMatrix(he),i.sunShadowCascade[b+he]=O._cascadeData[he];b+=te,x++}i.sun[p]=R,p++}else if(N.isDirectionalLight){let R=e.get(N);if(R.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let O=N.shadow,W=t.get(N);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=N.shadow.matrix,w++}i.directional[m]=R,m++}else if(N.isSpotLight){let R=e.get(N);R.position.setFromMatrixPosition(N.matrixWorld),R.color.copy(D).multiplyScalar(H),R.distance=V,R.coneCos=Math.cos(N.angle),R.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),R.decay=N.decay,i.spot[M]=R;let O=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,O.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[M]=O.matrix,N.castShadow){let W=t.get(N);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=ee,T++}M++}else if(N.isRectAreaLight){let R=e.get(N);R.color.copy(D).multiplyScalar(H),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),i.rectArea[A]=R,A++}else if(N.isPointLight){let R=e.get(N);if(R.color.copy(N.color).multiplyScalar(N.intensity),R.distance=N.distance,R.decay=N.decay,N.castShadow){let O=N.shadow,W=t.get(N);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,W.shadowCameraNear=O.camera.near,W.shadowCameraFar=O.camera.far,i.pointShadow[d]=W,i.pointShadowMap[d]=ee,i.pointShadowMatrix[d]=N.shadow.matrix,S++}i.point[d]=R,d++}else if(N.isHemisphereLight){let R=e.get(N);R.skyColor.copy(N.color).multiplyScalar(H),R.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[y]=R,y++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let B=i.hash;(B.sunLength!==p||B.directionalLength!==m||B.pointLength!==d||B.spotLength!==M||B.rectAreaLength!==A||B.hemiLength!==y||B.numSunShadows!==x||B.numDirectionalShadows!==w||B.numPointShadows!==S||B.numSpotShadows!==T||B.numSpotMaps!==_||B.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=A,i.point.length=d,i.hemi.length=y,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=I,B.sunLength=p,B.directionalLength=m,B.pointLength=d,B.spotLength=M,B.rectAreaLength=A,B.hemiLength=y,B.numSunShadows=x,B.numDirectionalShadows=w,B.numPointShadows=S,B.numSpotShadows=T,B.numSpotMaps=_,B.numLightProbes=I,i.version=M3++)}function c(l,u){let f=0,h=0,p=0,x=0,b=0,m=0,d=u.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let y=l[M];if(y.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(y.isSpotLight){let w=i.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),x++}else if(y.isRectAreaLight){let w=i.rectArea[b];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:i}}function cd(n){let e=new E3(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function T3(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new cd(n),e.set(s,[o])):r>=a.length?(o=new cd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var A3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R3=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],P3=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],hd=new gt,_r=new q,mc=new q;function I3(n,e,t){let i=new cs,s=new qe,r=new qe,a=new yt,o=new xa,c=new ya,l={},u=t.maxTextureSize,f={[mi]:Ut,[Ut]:mi,[Cn]:Cn},h=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:A3,fragmentShader:C3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new Et;x.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Tt(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let d=this.type;this.render=function(S,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===su&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);let E=n.getRenderTarget(),I=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Rn),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let X=d!==this.type;X&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(D=>D.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,D=S.length;N<D;N++){let H=S[N],V=H.shadow;if(V===void 0){He("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ee=V.getFrameExtents();s.multiply(ee),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,V.mapSize.y=r.y));let R=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=R,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ps){if(H.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new qt(s.x,s.y,{format:yi,type:vn,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new ci(s.x,s.y,yn),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=Tn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It}else H.isPointLight?(V.map=new Ao(s.x),V.map.depthTexture=new ga(s.x,xn)):(V.map=new qt(s.x,s.y),V.map.depthTexture=new ci(s.x,s.y,xn)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=Tn,this.type===or?(V.map.depthTexture.compareFunction=R?Mo:So,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let O=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();H.isPointLight!==!0&&V.updateMatrices(H,_);for(let W=0;W<O;W++){let te=V.getCamera(W);if(H.isPointLight){let he=V.camera,Ie=V.matrix,Fe=H.distance||he.far;Fe!==he.far&&(he.far=Fe,he.updateProjectionMatrix()),_r.setFromMatrixPosition(H.matrixWorld),he.position.copy(_r),mc.copy(he.position),mc.add(R3[W]),he.up.copy(P3[W]),he.lookAt(mc),he.updateMatrixWorld(),Ie.makeTranslation(-_r.x,-_r.y,-_r.z),hd.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),V._frustum.setFromProjectionMatrix(hd,he.coordinateSystem,he.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,W),n.clear();else{W===0&&(n.setRenderTarget(V.map),n.clear());let he=V.getViewport(W);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),$.viewport(a)}i=V.getFrustum(W),y(T,_,te,H,this.type)}V.isPointLightShadow!==!0&&this.type===ps&&M(V,_),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,I,B)};function M(S,T){let _=e.update(b);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new qt(s.x,s.y,{format:yi,type:vn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,_,h,b,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,_,p,b,null)}function A(S,T,_,E){let I=null,B=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(B!==void 0)I=B;else if(I=_.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let $=I.uuid,X=T.uuid,N=l[$];N===void 0&&(N={},l[$]=N);let D=N[X];D===void 0&&(D=I.clone(),N[X]=D,T.addEventListener("dispose",w)),I=D}if(I.visible=T.visible,I.wireframe=T.wireframe,E===ps?I.side=T.shadowSide!==null?T.shadowSide:T.side:I.side=T.shadowSide!==null?T.shadowSide:f[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,I.map=T.map,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let $=n.properties.get(I);$.light=_}return I}function y(S,T,_,E,I){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===ps)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let X=e.update(S),N=S.material;if(Array.isArray(N)){let D=X.groups;for(let H=0,V=D.length;H<V;H++){let ee=D[H],R=N[ee.materialIndex];if(R&&R.visible){let O=A(S,R,E,I);S.onBeforeShadow(n,S,T,_,X,O,ee),n.renderBufferDirect(_,null,X,O,S,ee),S.onAfterShadow(n,S,T,_,X,O,ee)}}}else if(N.visible){let D=A(S,N,E,I);S.onBeforeShadow(n,S,T,_,X,D,null),n.renderBufferDirect(_,null,X,D,S,null),S.onAfterShadow(n,S,T,_,X,D,null)}}let $=S.children;for(let X=0,N=$.length;X<N;X++)y($[X],T,_,E,I)}function w(S){S.target.removeEventListener("dispose",w);for(let _ in l){let E=l[_],I=S.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function L3(n,e){function t(){let G=!1,be=new yt,oe=null,Se=new yt(0,0,0,0);return{setMask:function(Ae){oe!==Ae&&!G&&(n.colorMask(Ae,Ae,Ae,Ae),oe=Ae)},setLocked:function(Ae){G=Ae},setClear:function(Ae,ue,Ve,Ne,pt){pt===!0&&(Ae*=Ne,ue*=Ne,Ve*=Ne),be.set(Ae,ue,Ve,Ne),Se.equals(be)===!1&&(n.clearColor(Ae,ue,Ve,Ne),Se.copy(be))},reset:function(){G=!1,oe=null,Se.set(-1,0,0,0)}}}function i(){let G=!1,be=!1,oe=null,Se=null,Ae=null;return{setReversed:function(ue){if(be!==ue){let Ve=e.get("EXT_clip_control");ue?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),be=ue;let Ne=Ae;Ae=null,this.setClear(Ne)}},getReversed:function(){return be},setTest:function(ue){ue?ae(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(ue){oe!==ue&&!G&&(n.depthMask(ue),oe=ue)},setFunc:function(ue){if(be&&(ue=ku[ue]),Se!==ue){switch(ue){case ea:n.depthFunc(n.NEVER);break;case ta:n.depthFunc(n.ALWAYS);break;case na:n.depthFunc(n.LESS);break;case ri:n.depthFunc(n.LEQUAL);break;case ia:n.depthFunc(n.EQUAL);break;case sa:n.depthFunc(n.GEQUAL);break;case ra:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ue}},setLocked:function(ue){G=ue},setClear:function(ue){Ae!==ue&&(Ae=ue,be&&(ue=1-ue),n.clearDepth(ue))},reset:function(){G=!1,oe=null,Se=null,Ae=null,be=!1}}}function s(){let G=!1,be=null,oe=null,Se=null,Ae=null,ue=null,Ve=null,Ne=null,pt=null;return{setTest:function(lt){G||(lt?ae(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(lt){be!==lt&&!G&&(n.stencilMask(lt),be=lt)},setFunc:function(lt,ln,Sn){(oe!==lt||Se!==ln||Ae!==Sn)&&(n.stencilFunc(lt,ln,Sn),oe=lt,Se=ln,Ae=Sn)},setOp:function(lt,ln,Sn){(ue!==lt||Ve!==ln||Ne!==Sn)&&(n.stencilOp(lt,ln,Sn),ue=lt,Ve=ln,Ne=Sn)},setLocked:function(lt){G=lt},setClear:function(lt){pt!==lt&&(n.clearStencil(lt),pt=lt)},reset:function(){G=!1,be=null,oe=null,Se=null,Ae=null,ue=null,Ve=null,Ne=null,pt=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},p=new WeakMap,x=[],b=null,m=!1,d=null,M=null,A=null,y=null,w=null,S=null,T=null,_=new Qe(0,0,0),E=0,I=!1,B=null,$=null,X=null,N=null,D=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(R)[1]),V=ee>=1):R.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),V=ee>=2);let O=null,W={},te=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Ie=new yt().fromArray(te),Fe=new yt().fromArray(he);function ke(G,be,oe,Se){let Ae=new Uint8Array(4),ue=n.createTexture();n.bindTexture(G,ue),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<oe;Ve++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(be+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return ue}let j={};j[n.TEXTURE_2D]=ke(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(ri),F(!1),J(Pl),ae(n.CULL_FACE),Q(Rn);function ae(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function ge(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function ze(G,be){return h[G]!==be?(n.bindFramebuffer(G,be),h[G]=be,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=be),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=be),!0):!1}function _e(G,be){let oe=x,Se=!1;if(G){oe=p.get(be),oe===void 0&&(oe=[],p.set(be,oe));let Ae=G.textures;if(oe.length!==Ae.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Ve=Ae.length;ue<Ve;ue++)oe[ue]=n.COLOR_ATTACHMENT0+ue;oe.length=Ae.length,Se=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Se=!0);Se&&n.drawBuffers(oe)}function Ge(G){return b!==G?(n.useProgram(G),b=G,!0):!1}let ot={[Pi]:n.FUNC_ADD,[au]:n.FUNC_SUBTRACT,[ou]:n.FUNC_REVERSE_SUBTRACT};ot[lu]=n.MIN,ot[cu]=n.MAX;let Xe={[hu]:n.ZERO,[uu]:n.ONE,[du]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[xu]:n.SRC_ALPHA_SATURATE,[gu]:n.DST_COLOR,[pu]:n.DST_ALPHA,[fu]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[_u]:n.ONE_MINUS_DST_COLOR,[mu]:n.ONE_MINUS_DST_ALPHA,[yu]:n.CONSTANT_COLOR,[vu]:n.ONE_MINUS_CONSTANT_COLOR,[bu]:n.CONSTANT_ALPHA,[Su]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(G,be,oe,Se,Ae,ue,Ve,Ne,pt,lt){if(G===Rn){m===!0&&(ge(n.BLEND),m=!1);return}if(m===!1&&(ae(n.BLEND),m=!0),G!==ru){if(G!==d||lt!==I){if((M!==Pi||w!==Pi)&&(n.blendEquation(n.FUNC_ADD),M=Pi,w=Pi),lt)switch(G){case ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Il:n.blendFunc(n.ONE,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",G);break}else switch(G){case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Il:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ll:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",G);break}A=null,y=null,S=null,T=null,_.set(0,0,0),E=0,d=G,I=lt}return}Ae=Ae||be,ue=ue||oe,Ve=Ve||Se,(be!==M||Ae!==w)&&(n.blendEquationSeparate(ot[be],ot[Ae]),M=be,w=Ae),(oe!==A||Se!==y||ue!==S||Ve!==T)&&(n.blendFuncSeparate(Xe[oe],Xe[Se],Xe[ue],Xe[Ve]),A=oe,y=Se,S=ue,T=Ve),(Ne.equals(_)===!1||pt!==E)&&(n.blendColor(Ne.r,Ne.g,Ne.b,pt),_.copy(Ne),E=pt),d=G,I=!1}function P(G,be){G.side===Cn?ge(n.CULL_FACE):ae(n.CULL_FACE);let oe=G.side===Ut;be&&(oe=!oe),F(oe),G.blending===ms&&G.transparent===!1?Q(Rn):Q(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let Se=G.stencilWrite;o.setTest(Se),Se&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(G){B!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),B=G)}function J(G){G!==nu?(ae(n.CULL_FACE),G!==$&&(G===Pl?n.cullFace(n.BACK):G===iu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),$=G}function se(G){G!==X&&(V&&n.lineWidth(G),X=G)}function pe(G,be,oe){G?(ae(n.POLYGON_OFFSET_FILL),(N!==be||D!==oe)&&(N=be,D=oe,a.getReversed()&&(be=-be),n.polygonOffset(be,oe))):ge(n.POLYGON_OFFSET_FILL)}function fe(G){G?ae(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Ce(G){G===void 0&&(G=n.TEXTURE0+H-1),O!==G&&(n.activeTexture(G),O=G)}function U(G,be,oe){oe===void 0&&(O===null?oe=n.TEXTURE0+H-1:oe=O);let Se=W[oe];Se===void 0&&(Se={type:void 0,texture:void 0},W[oe]=Se),(Se.type!==G||Se.texture!==be)&&(O!==oe&&(n.activeTexture(oe),O=oe),n.bindTexture(G,be||j[G]),Se.type=G,Se.texture=be)}function tt(){let G=W[O];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ye(){try{n.compressedTexImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function g(){try{n.texSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function z(){try{n.texSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function me(){try{n.texStorage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function xe(){try{n.texStorage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function re(){try{n.texImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function le(){try{n.texImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function ye(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function Oe(G,be){f[G]!==be&&(n.pixelStorei(G,be),f[G]=be)}function Me(G){Ie.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function ve(G){Fe.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Fe.copy(G))}function Be(G,be){let oe=l.get(be);oe===void 0&&(oe=new WeakMap,l.set(be,oe));let Se=oe.get(G);Se===void 0&&(Se=n.getUniformBlockIndex(be,G.name),oe.set(G,Se))}function We(G,be){let Se=l.get(be).get(G);c.get(be)!==Se&&(n.uniformBlockBinding(be,Se,G.__bindingPointIndex),c.set(be,Se))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},O=null,W={},h={},p=new WeakMap,x=[],b=null,m=!1,d=null,M=null,A=null,y=null,w=null,S=null,T=null,_=new Qe(0,0,0),E=0,I=!1,B=null,$=null,X=null,N=null,D=null,Ie.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:ge,bindFramebuffer:ze,drawBuffers:_e,useProgram:Ge,setBlending:Q,setMaterial:P,setFlipSided:F,setCullFace:J,setLineWidth:se,setPolygonOffset:pe,setScissorTest:fe,activeTexture:Ce,bindTexture:U,unbindTexture:tt,compressedTexImage2D:Ye,compressedTexImage3D:C,texImage2D:re,texImage3D:le,pixelStorei:Oe,getParameter:ye,updateUBOMapping:Be,uniformBlockBinding:We,texStorage2D:me,texStorage3D:xe,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:ie,scissor:Me,viewport:ve,reset:Ke}}function D3(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,u=new WeakMap,f=new Set,h,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,g){return x?new OffscreenCanvas(C,g):Vs("canvas")}function m(C,g,z){let Y=1,ie=Ye(C);if((ie.width>z||ie.height>z)&&(Y=z/Math.max(ie.width,ie.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let me=Math.floor(Y*ie.width),xe=Math.floor(Y*ie.height);h===void 0&&(h=b(me,xe));let re=g?b(me,xe):h;return re.width=me,re.height=xe,re.getContext("2d").drawImage(C,0,0,me,xe),He("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+me+"x"+xe+")."),re}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function d(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,g,z,Y,ie,me=!1){if(C!==null){if(n[C]!==void 0)return n[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;Y&&(xe=e.get("EXT_texture_norm16"),xe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=g;if(g===n.RED&&(z===n.FLOAT&&(re=n.R32F),z===n.HALF_FLOAT&&(re=n.R16F),z===n.UNSIGNED_BYTE&&(re=n.R8),z===n.UNSIGNED_SHORT&&xe&&(re=xe.R16_EXT),z===n.SHORT&&xe&&(re=xe.R16_SNORM_EXT)),g===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(re=n.R8UI),z===n.UNSIGNED_SHORT&&(re=n.R16UI),z===n.UNSIGNED_INT&&(re=n.R32UI),z===n.BYTE&&(re=n.R8I),z===n.SHORT&&(re=n.R16I),z===n.INT&&(re=n.R32I)),g===n.RG&&(z===n.FLOAT&&(re=n.RG32F),z===n.HALF_FLOAT&&(re=n.RG16F),z===n.UNSIGNED_BYTE&&(re=n.RG8),z===n.UNSIGNED_SHORT&&xe&&(re=xe.RG16_EXT),z===n.SHORT&&xe&&(re=xe.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(re=n.RG8UI),z===n.UNSIGNED_SHORT&&(re=n.RG16UI),z===n.UNSIGNED_INT&&(re=n.RG32UI),z===n.BYTE&&(re=n.RG8I),z===n.SHORT&&(re=n.RG16I),z===n.INT&&(re=n.RG32I)),g===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(re=n.RGB8UI),z===n.UNSIGNED_SHORT&&(re=n.RGB16UI),z===n.UNSIGNED_INT&&(re=n.RGB32UI),z===n.BYTE&&(re=n.RGB8I),z===n.SHORT&&(re=n.RGB16I),z===n.INT&&(re=n.RGB32I)),g===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),z===n.UNSIGNED_INT&&(re=n.RGBA32UI),z===n.BYTE&&(re=n.RGBA8I),z===n.SHORT&&(re=n.RGBA16I),z===n.INT&&(re=n.RGBA32I)),g===n.RGB&&(z===n.UNSIGNED_SHORT&&xe&&(re=xe.RGB16_EXT),z===n.SHORT&&xe&&(re=xe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(re=n.R11F_G11F_B10F)),g===n.RGBA){let le=me?zs:it.getTransfer(ie);z===n.FLOAT&&(re=n.RGBA32F),z===n.HALF_FLOAT&&(re=n.RGBA16F),z===n.UNSIGNED_BYTE&&(re=le===ht?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&xe&&(re=xe.RGBA16_EXT),z===n.SHORT&&xe&&(re=xe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function w(C,g){let z;return C?g===null||g===xn||g===_s?z=n.DEPTH24_STENCIL8:g===yn?z=n.DEPTH32F_STENCIL8:g===gs&&(z=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xn||g===_s?z=n.DEPTH_COMPONENT24:g===yn?z=n.DEPTH_COMPONENT32F:g===gs&&(z=n.DEPTH_COMPONENT16),z}function S(C,g){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==Dt?Math.log2(Math.max(g.width,g.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?g.mipmaps.length:1}function T(C){let g=C.target;g.removeEventListener("dispose",T),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function _(C){let g=C.target;g.removeEventListener("dispose",_),B(g)}function E(C){let g=i.get(C);if(g.__webglInit===void 0)return;let z=C.source,Y=p.get(z);if(Y){let ie=Y[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(C),Object.keys(Y).length===0&&p.delete(z)}i.remove(C)}function I(C){let g=i.get(C);n.deleteTexture(g.__webglTexture);let z=C.source,Y=p.get(z);delete Y[g.__cacheKey],a.memory.textures--}function B(C){let g=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let ie=0;ie<g.__webglFramebuffer[Y].length;ie++)n.deleteFramebuffer(g.__webglFramebuffer[Y][ie]);else n.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[Y]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let z=C.textures;for(let Y=0,ie=z.length;Y<ie;Y++){let me=i.get(z[Y]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(z[Y])}i.remove(C)}let $=0;function X(){$=0}function N(){return $}function D(C){$=C}function H(){let C=$;return C>=s.maxTextures&&He("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,C}function V(C){let g=[];return g.push(C.wrapS),g.push(C.wrapT),g.push(C.wrapR||0),g.push(C.magFilter),g.push(C.minFilter),g.push(C.anisotropy),g.push(C.internalFormat),g.push(C.format),g.push(C.type),g.push(C.generateMipmaps),g.push(C.premultiplyAlpha),g.push(C.flipY),g.push(C.unpackAlignment),g.push(C.colorSpace),g.join()}function ee(C,g){let z=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let Y=C.image;if(Y===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(z,C,g);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+g)}function R(C,g){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ge(z,C,g);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+g)}function O(C,g){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ge(z,C,g);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+g)}function W(C,g){let z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){ze(z,C,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+g)}let te={[oa]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[la]:n.MIRRORED_REPEAT},he={[It]:n.NEAREST,[Eu]:n.NEAREST_MIPMAP_NEAREST,[cr]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},Ie={[Ru]:n.NEVER,[Nu]:n.ALWAYS,[Pu]:n.LESS,[So]:n.LEQUAL,[Iu]:n.EQUAL,[Mo]:n.GEQUAL,[Lu]:n.GREATER,[Du]:n.NOTEQUAL};function Fe(C,g){if(g.type===yn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dt||g.magFilter===Oa||g.magFilter===cr||g.magFilter===_i||g.minFilter===Dt||g.minFilter===Oa||g.minFilter===cr||g.minFilter===_i)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,te[g.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,te[g.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,te[g.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,he[g.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ie[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===It||g.minFilter!==cr&&g.minFilter!==_i||g.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ke(C,g){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,g.addEventListener("dispose",T));let Y=g.source,ie=p.get(Y);ie===void 0&&(ie={},p.set(Y,ie));let me=V(g);if(me!==C.__cacheKey){ie[me]===void 0&&(ie[me]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[me].usedTimes++;let xe=ie[C.__cacheKey];xe!==void 0&&(ie[C.__cacheKey].usedTimes--,xe.usedTimes===0&&I(g)),C.__cacheKey=me,C.__webglTexture=ie[me].texture}return z}function j(C,g,z){return Math.floor(Math.floor(C/z)/g)}function ae(C,g,z,Y){let me=C.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,z,Y,g.data);else{me.sort((Oe,Me)=>Oe.start-Me.start);let xe=0;for(let Oe=1;Oe<me.length;Oe++){let Me=me[xe],ve=me[Oe],Be=Me.start+Me.count,We=j(ve.start,g.width,4),Ke=j(Me.start,g.width,4);ve.start<=Be+1&&We===Ke&&j(ve.start+ve.count-1,g.width,4)===We?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++xe,me[xe]=ve)}me.length=xe+1;let re=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Oe=0,Me=me.length;Oe<Me;Oe++){let ve=me[Oe],Be=Math.floor(ve.start/4),We=Math.ceil(ve.count/4),Ke=Be%g.width,G=Math.floor(Be/g.width),be=We,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Ke,G,be,oe,z,Y,g.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,re),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function ge(C,g,z){let Y=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=n.TEXTURE_3D);let ie=ke(C,g),me=g.source;t.bindTexture(Y,C.__webglTexture,n.TEXTURE0+z);let xe=i.get(me);if(me.version!==xe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let oe=it.getPrimaries(it.workingColorSpace),Se=g.colorSpace===Hn?null:it.getPrimaries(g.colorSpace),Ae=g.colorSpace===Hn||oe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let le=m(g.image,!1,s.maxTextureSize);le=tt(g,le);let ye=r.convert(g.format,g.colorSpace),Oe=r.convert(g.type),Me=y(g.internalFormat,ye,Oe,g.normalized,g.colorSpace,g.isVideoTexture);Fe(Y,g);let ve,Be=g.mipmaps,We=g.isVideoTexture!==!0,Ke=xe.__version===void 0||ie===!0,G=me.dataReady,be=S(g,le);if(g.isDepthTexture)Me=w(g.format===xi,g.type),Ke&&(We?t.texStorage2D(n.TEXTURE_2D,1,Me,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Me,le.width,le.height,0,ye,Oe,null));else if(g.isDataTexture)if(Be.length>0){We&&Ke&&t.texStorage2D(n.TEXTURE_2D,be,Me,Be[0].width,Be[0].height);for(let oe=0,Se=Be.length;oe<Se;oe++)ve=Be[oe],We?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ve.width,ve.height,ye,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,oe,Me,ve.width,ve.height,0,ye,Oe,ve.data);g.generateMipmaps=!1}else We?(Ke&&t.texStorage2D(n.TEXTURE_2D,be,Me,le.width,le.height),G&&ae(g,le,ye,Oe)):t.texImage2D(n.TEXTURE_2D,0,Me,le.width,le.height,0,ye,Oe,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){We&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Me,Be[0].width,Be[0].height,le.depth);for(let oe=0,Se=Be.length;oe<Se;oe++)if(ve=Be[oe],g.format!==an)if(ye!==null)if(We){if(G)if(g.layerUpdates.size>0){let Ae=sc(ve.width,ve.height,g.format,g.type);for(let ue of g.layerUpdates){let Ve=ve.data.subarray(ue*Ae/ve.data.BYTES_PER_ELEMENT,(ue+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,ue,ve.width,ve.height,1,ye,Ve)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,le.depth,ye,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Me,ve.width,ve.height,le.depth,0,ve.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,le.depth,ye,Oe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Me,ve.width,ve.height,le.depth,0,ye,Oe,ve.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{We&&Ke&&t.texStorage2D(n.TEXTURE_2D,be,Me,Be[0].width,Be[0].height);for(let oe=0,Se=Be.length;oe<Se;oe++)ve=Be[oe],g.format!==an?ye!==null?We?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Me,ve.width,ve.height,0,ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ve.width,ve.height,ye,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,oe,Me,ve.width,ve.height,0,ye,Oe,ve.data)}else if(g.isDataArrayTexture)if(We){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Me,le.width,le.height,le.depth),G)if(g.layerUpdates.size>0){let oe=sc(le.width,le.height,g.format,g.type);for(let Se of g.layerUpdates){let Ae=le.data.subarray(Se*oe/le.data.BYTES_PER_ELEMENT,(Se+1)*oe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,le.width,le.height,1,ye,Oe,Ae)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,Oe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,le.width,le.height,le.depth,0,ye,Oe,le.data);else if(g.isData3DTexture)We?(Ke&&t.texStorage3D(n.TEXTURE_3D,be,Me,le.width,le.height,le.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,Oe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Me,le.width,le.height,le.depth,0,ye,Oe,le.data);else if(g.isFramebufferTexture){if(Ke)if(We)t.texStorage2D(n.TEXTURE_2D,be,Me,le.width,le.height);else{let oe=le.width,Se=le.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Me,oe,Se,0,ye,Oe,null),oe>>=1,Se>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),le.parentNode!==oe){oe.appendChild(le),f.add(g),oe.onpaint=Se=>{let Ae=Se.changedElements;for(let ue of f)Ae.includes(ue.image)&&(ue.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{let Ae=n.RGBA,ue=n.RGBA,Ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ae,ue,Ve,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(We&&Ke){let oe=Ye(Be[0]);t.texStorage2D(n.TEXTURE_2D,be,Me,oe.width,oe.height)}for(let oe=0,Se=Be.length;oe<Se;oe++)ve=Be[oe],We?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ye,Oe,ve):t.texImage2D(n.TEXTURE_2D,oe,Me,ye,Oe,ve);g.generateMipmaps=!1}else if(We){if(Ke){let oe=Ye(le);t.texStorage2D(n.TEXTURE_2D,be,Me,oe.width,oe.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Oe,le)}else t.texImage2D(n.TEXTURE_2D,0,Me,ye,Oe,le);d(g)&&M(Y),xe.__version=me.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function ze(C,g,z){if(g.image.length!==6)return;let Y=ke(C,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let me=i.get(ie);if(ie.version!==me.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);let xe=it.getPrimaries(it.workingColorSpace),re=g.colorSpace===Hn?null:it.getPrimaries(g.colorSpace),le=g.colorSpace===Hn||xe===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ye=g.isCompressedTexture||g.image[0].isCompressedTexture,Oe=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let ue=0;ue<6;ue++)!ye&&!Oe?Me[ue]=m(g.image[ue],!0,s.maxCubemapSize):Me[ue]=Oe?g.image[ue].image:g.image[ue],Me[ue]=tt(g,Me[ue]);let ve=Me[0],Be=r.convert(g.format,g.colorSpace),We=r.convert(g.type),Ke=y(g.internalFormat,Be,We,g.normalized,g.colorSpace),G=g.isVideoTexture!==!0,be=me.__version===void 0||Y===!0,oe=ie.dataReady,Se=S(g,ve);Fe(n.TEXTURE_CUBE_MAP,g);let Ae;if(ye){G&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ke,ve.width,ve.height);for(let ue=0;ue<6;ue++){Ae=Me[ue].mipmaps;for(let Ve=0;Ve<Ae.length;Ve++){let Ne=Ae[Ve];g.format!==an?Be!==null?G?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve,0,0,Ne.width,Ne.height,Be,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve,Ke,Ne.width,Ne.height,0,Ne.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve,0,0,Ne.width,Ne.height,Be,We,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve,Ke,Ne.width,Ne.height,0,Be,We,Ne.data)}}}else{if(Ae=g.mipmaps,G&&be){Ae.length>0&&Se++;let ue=Ye(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Oe){G?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Me[ue].width,Me[ue].height,Be,We,Me[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Me[ue].width,Me[ue].height,0,Be,We,Me[ue].data);for(let Ve=0;Ve<Ae.length;Ve++){let pt=Ae[Ve].image[ue].image;G?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve+1,0,0,pt.width,pt.height,Be,We,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve+1,Ke,pt.width,pt.height,0,Be,We,pt.data)}}else{G?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Be,We,Me[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Be,We,Me[ue]);for(let Ve=0;Ve<Ae.length;Ve++){let Ne=Ae[Ve];G?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve+1,0,0,Be,We,Ne.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve+1,Ke,Be,We,Ne.image[ue])}}}d(g)&&M(n.TEXTURE_CUBE_MAP),me.__version=ie.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function _e(C,g,z,Y,ie,me){let xe=r.convert(z.format,z.colorSpace),re=r.convert(z.type),le=y(z.internalFormat,xe,re,z.normalized,z.colorSpace),ye=i.get(g),Oe=i.get(z);if(Oe.__renderTarget=g,!ye.__hasExternalTextures){let Me=Math.max(1,g.width>>me),ve=Math.max(1,g.height>>me);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,me,le,Me,ve,g.depth,0,xe,re,null):t.texImage2D(ie,me,le,Me,ve,0,xe,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ce(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ie,Oe.__webglTexture,0,fe(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ie,Oe.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(C,g,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),g.depthBuffer){let Y=g.depthTexture,ie=Y&&Y.isDepthTexture?Y.type:null,me=w(g.stencilBuffer,ie),xe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ce(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(g),me,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(g),me,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,me,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,C)}else{let Y=g.textures;for(let ie=0;ie<Y.length;ie++){let me=Y[ie],xe=r.convert(me.format,me.colorSpace),re=r.convert(me.type),le=y(me.internalFormat,xe,re,me.normalized,me.colorSpace);Ce(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(g),le,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(g),le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ot(C,g,z){let Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",T)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g.depthTexture);let ye=r.convert(g.depthTexture.format),Oe=r.convert(g.depthTexture.type),Me;g.depthTexture.format===Tn?Me=n.DEPTH_COMPONENT24:g.depthTexture.format===xi&&(Me=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,g.width,g.height,0,ye,Oe,null)}}else ee(g.depthTexture,0);let me=ie.__webglTexture,xe=fe(g),re=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,le=g.depthTexture.format===xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Tn)Ce(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,re,me,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,le,re,me,0);else if(g.depthTexture.format===xi)Ce(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,re,me,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,le,re,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(C){let g=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){let ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",ie)};Y.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=Y}if(C.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)ot(g.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?ot(g.__webglFramebuffer[0],C,0):ot(g.__webglFramebuffer,C,0)}else if(z){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ge(g.__webglDepthbuffer[Y],C,!1);else{let ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=g.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,me)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ge(g.__webglDepthbuffer,C,!1);else{let ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(C,g,z){let Y=i.get(C);g!==void 0&&_e(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Xe(C)}function P(C){let g=C.texture,z=i.get(C),Y=i.get(g);C.addEventListener("dispose",_);let ie=C.textures,me=C.isWebGLCubeRenderTarget===!0,xe=ie.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=g.version,a.memory.textures++),me){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let le=0;le<g.mipmaps.length;le++)z.__webglFramebuffer[re][le]=n.createFramebuffer()}else z.__webglFramebuffer[re]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)z.__webglFramebuffer[re]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(xe)for(let re=0,le=ie.length;re<le;re++){let ye=i.get(ie[re]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ce(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<ie.length;re++){let le=ie[re];z.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[re]);let ye=r.convert(le.format,le.colorSpace),Oe=r.convert(le.type),Me=y(le.internalFormat,ye,Oe,le.normalized,le.colorSpace,C.isXRRenderTarget===!0),ve=fe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,z.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g);for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)_e(z.__webglFramebuffer[re][le],C,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else _e(z.__webglFramebuffer[re],C,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);d(g)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let re=0,le=ie.length;re<le;re++){let ye=ie[re],Oe=i.get(ye),Me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,Oe.__webglTexture),Fe(Me,ye),_e(z.__webglFramebuffer,C,ye,n.COLOR_ATTACHMENT0+re,Me,0),d(ye)&&M(Me)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),Fe(re,g),g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)_e(z.__webglFramebuffer[le],C,g,n.COLOR_ATTACHMENT0,re,le);else _e(z.__webglFramebuffer,C,g,n.COLOR_ATTACHMENT0,re,0);d(g)&&M(re),t.unbindTexture()}C.depthBuffer&&Xe(C)}function F(C){let g=C.textures;for(let z=0,Y=g.length;z<Y;z++){let ie=g[z];if(d(ie)){let me=A(C),xe=i.get(ie).__webglTexture;t.bindTexture(me,xe),M(me),t.unbindTexture()}}}let J=[],se=[];function pe(C){if(C.samples>0){if(Ce(C)===!1){let g=C.textures,z=C.width,Y=C.height,ie=n.COLOR_BUFFER_BIT,me=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),re=g.length>1;if(re)for(let ye=0;ye<g.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let le=C.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<g.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let Oe=i.get(g[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,z,Y,0,0,z,Y,ie,n.NEAREST),c===!0&&(J.length=0,se.length=0,J.push(n.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(J.push(me),se.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ye=0;ye<g.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let Oe=i.get(g[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let g=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function fe(C){return Math.min(s.maxSamples,C.samples)}function Ce(C){let g=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(C){let g=a.render.frame;u.get(C)!==g&&(u.set(C,g),C.update())}function tt(C,g){let z=C.colorSpace,Y=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ks&&z!==Hn&&(it.getTransfer(z)===ht?(Y!==an||ie!==Yt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",z)),g}function Ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.getTextureUnits=N,this.setTextureUnits=D,this.setTexture2D=ee,this.setTexture2DArray=R,this.setTexture3D=O,this.setTextureCube=W,this.rebindTextures=Q,this.setupRenderTarget=P,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function N3(n,e){function t(i,s=Hn){let r,a=it.getTransfer(s);if(i===Yt)return n.UNSIGNED_BYTE;if(i===ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$l)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ql)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wl)return n.BYTE;if(i===Xl)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===Ba)return n.INT;if(i===xn)return n.UNSIGNED_INT;if(i===yn)return n.FLOAT;if(i===vn)return n.HALF_FLOAT;if(i===Yl)return n.ALPHA;if(i===Zl)return n.RGB;if(i===an)return n.RGBA;if(i===Tn)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===Kl)return n.RED;if(i===Va)return n.RED_INTEGER;if(i===yi)return n.RG;if(i===Ga)return n.RG_INTEGER;if(i===Ha)return n.RGBA_INTEGER;if(i===hr||i===ur||i===dr||i===fr)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===$a||i===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===Za||i===Ka||i===Ja||i===ja||i===pr||i===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ya||i===Za)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ka)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ja)return r.COMPRESSED_R11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pr)return r.COMPRESSED_RG11_EAC;if(i===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===eo||i===to||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===eo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===to)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===no)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===so)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ro)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ho)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===go||i===_o)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mo)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xo||i===yo||i===mr||i===vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var F3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ks(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new tn({vertexShader:F3,fragmentShader:U3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends pn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,x=null,b=typeof XRWebGLBinding<"u",m=new Mc,d={},M=t.getContextAttributes(),A=null,y=null,w=[],S=[],T=new qe,_=null,E=null,I=new Vt;I.viewport=new yt;let B=new Vt;B.viewport=new yt;let $=[I,B],X=new La,N=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=w[j];return ae===void 0&&(ae=new ls,w[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=w[j];return ae===void 0&&(ae=new ls,w[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=w[j];return ae===void 0&&(ae=new ls,w[j]=ae),ae.getHandSpace()};function H(j){let ae=S.indexOf(j.inputSource);if(ae===-1)return;let ge=w[ae];ge!==void 0&&(ge.update(j.inputSource,j.frame,l||a),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ee);for(let j=0;j<w.length;j++){let ae=S[j];ae!==null&&(S[j]=null,w[j].disconnect(ae))}N=null,D=null,m.reset();for(let j in d)delete d[j];if(e.setRenderTarget(A),p=null,h=null,f=null,s=null,y=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),E!==null){let j=E.camera;j.fov=E.fov,j.zoom=E.zoom,j.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ze=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=M.stencil?xi:Tn,ze=M.stencil?_s:xn);let Ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ge),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new qt(h.textureWidth,h.textureHeight,{format:an,type:Yt,depthTexture:new ci(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ge={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new qt(p.framebufferWidth,p.framebufferHeight,{format:an,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(j){for(let ae=0;ae<j.removed.length;ae++){let ge=j.removed[ae],ze=S.indexOf(ge);ze>=0&&(S[ze]=null,w[ze].disconnect(ge))}for(let ae=0;ae<j.added.length;ae++){let ge=j.added[ae],ze=S.indexOf(ge);if(ze===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=S.length){S.push(ge),ze=Ge;break}else if(S[Ge]===null){S[Ge]=ge,ze=Ge;break}if(ze===-1)break}let _e=w[ze];_e&&_e.connect(ge)}}let R=new q,O=new q;function W(j,ae,ge){R.setFromMatrixPosition(ae.matrixWorld),O.setFromMatrixPosition(ge.matrixWorld);let ze=R.distanceTo(O),_e=ae.projectionMatrix.elements,Ge=ge.projectionMatrix.elements,ot=_e[14]/(_e[10]-1),Xe=_e[14]/(_e[10]+1),Q=(_e[9]+1)/_e[5],P=(_e[9]-1)/_e[5],F=(_e[8]-1)/_e[0],J=(Ge[8]+1)/Ge[0],se=ot*F,pe=ot*J,fe=ze/(-F+J),Ce=fe*-F;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ce),j.translateZ(fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),_e[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let U=ot+fe,tt=Xe+fe,Ye=se-Ce,C=pe+(ze-Ce),g=Q*Xe/tt*U,z=P*Xe/tt*U;j.projectionMatrix.makePerspective(Ye,C,g,z,U,tt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function te(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ae=j.near,ge=j.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),X.near=B.near=I.near=ae,X.far=B.far=I.far=ge,(N!==X.near||D!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),N=X.near,D=X.far),X.layers.mask=j.layers.mask|6,I.layers.mask=X.layers.mask&-5,B.layers.mask=X.layers.mask&-3;let ze=j.parent,_e=X.cameras;te(X,ze);for(let Ge=0;Ge<_e.length;Ge++)te(_e[Ge],ze);_e.length===2?W(X,I,B):X.projectionMatrix.copy(I.projectionMatrix),E===null&&j.isPerspectiveCamera&&(E={camera:j,fov:j.fov,zoom:j.zoom}),he(j,X,ze)};function he(j,ae,ge){ge===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=rs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(j){return d[j]};let Ie=null;function Fe(j,ae){if(u=ae.getViewerPose(l||a),x=ae,u!==null){let ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ze=!1;ge.length!==X.cameras.length&&(X.cameras.length=0,ze=!0);for(let Xe=0;Xe<ge.length;Xe++){let Q=ge[Xe],P=null;if(p!==null)P=p.getViewport(Q);else{let J=f.getViewSubImage(h,Q);P=J.viewport,Xe===0&&(e.setRenderTargetTextures(y,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(y))}let F=$[Xe];F===void 0&&(F=new Vt,F.layers.enable(Xe),F.viewport=new yt,$[Xe]=F),F.matrix.fromArray(Q.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Q.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(P.x,P.y,P.width,P.height),Xe===0&&(X.matrix.copy(F.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ze===!0&&X.cameras.push(F)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=i.getBinding();let Xe=f.getDepthInformation(ge[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,s.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let Xe=0;Xe<ge.length;Xe++){let Q=ge[Xe].camera;if(Q){let P=d[Q];P||(P=new Ks,d[Q]=P);let F=f.getCameraImage(Q);P.sourceTexture=F}}}}for(let ge=0;ge<w.length;ge++){let ze=S[ge],_e=w[ge];ze!==null&&_e!==void 0&&_e.update(ze,ae,l||a)}Ie&&Ie(j,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}let ke=new ud;ke.setAnimationLoop(Fe),this.setAnimationLoop=function(j){Ie=j},this.dispose=function(){}}},O3=new gt,_d=new Ze;_d.set(-1,0,0,0,1,0,0,0,1);function B3(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,tc(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,A,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),b(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,M,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ut&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ut&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d),A=M.envMap,y=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(O3.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_d),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k3(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let S=w.program;i.uniformBlockBinding(y,S)}function l(y,w){let S=s[y.id];S===void 0&&(m(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",M));let T=w.program;i.updateUBOMapping(y,T);let _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let w=f();y.__bindingPointIndex=w;let S=n.createBuffer(),T=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let w=s[y.id],S=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,E=S.length;_<E;_++){let I=S[_];if(Array.isArray(I))for(let B=0,$=I.length;B<$;B++)p(I[B],_,B,T);else p(I,_,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,w,S,T){if(b(y,w,S,T)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let I=0;for(let B=0;B<E.length;B++){let $=E[B],X=d($);x($,y.__data,I),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function x(y,w,S){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,S)}function b(y,w,S,T){let _=y.value,E=w+"_"+S;if(T[E]===void 0)return typeof _=="number"||typeof _=="boolean"?T[E]=_:ArrayBuffer.isView(_)?T[E]=_.slice():T[E]=_.clone(),!0;{let I=T[E];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return T[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(y){let w=y.uniforms,S=0,T=16;for(let E=0,I=w.length;E<I;E++){let B=Array.isArray(w[E])?w[E]:[w[E]];for(let $=0,X=B.length;$<X;$++){let N=B[$],D=Array.isArray(N.value)?N.value:[N.value];for(let H=0,V=D.length;H<V;H++){let ee=D[H],R=d(ee),O=S%T,W=O%R.boundary,te=O+W;S+=W,te!==0&&T-te<R.storage&&(S+=T-te),N.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=R.storage}}}let _=S%T;return _>0&&(S+=T-_),y.__size=S,y.__cache={},this}function d(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):He("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){let w=y.target;w.removeEventListener("dispose",M);let S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var z3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function V3(){return Pn===null&&(Pn=new fa(z3,16,16,yi,vn),Pn.name="DFG_LUT",Pn.minFilter=Dt,Pn.magFilter=Dt,Pn.wrapS=En,Pn.wrapT=En,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var Co=class{constructor(e={}){let{canvas:t=Uu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Yt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let b=p,m=new Set([Ha,Ga,Va]),d=new Set([Yt,xn,gs,_s,ka,za]),M=new Uint32Array(4),A=new Int32Array(4),y=new q,w=null,S=null,T=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,B=!1,$=null,X=null,N=null,D=null;this._outputColorSpace=Xt;let H=0,V=0,ee=null,R=-1,O=null,W=new yt,te=new yt,he=null,Ie=new Qe(0),Fe=0,ke=t.width,j=t.height,ae=1,ge=null,ze=null,_e=new yt(0,0,ke,j),Ge=new yt(0,0,ke,j),ot=!1,Xe=new cs,Q=!1,P=!1,F=new gt,J=new q,se=new yt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Ce(){return ee===null?ae:1}let U=i;function tt(v,k){return t.getContext(v,k)}let Ye,C,g,z,Y,ie,me,xe,re,le,ye,Oe,Me,ve,Be,We,Ke,G,be,oe,Se,Ae,ue;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",ln,!1),U===null){let k="webgl2";if(U=tt(k,v),U===null)throw tt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(v){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),$e("WebGLRenderer: "+v.message),v}function Ve(){Ye=new Ym(U),Ye.init(),Se=new N3(U,Ye),C=new Bm(U,Ye,e,Se),g=new L3(U,Ye),C.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),X=U.createFramebuffer(),N=U.createFramebuffer(),D=U.createFramebuffer(),z=new Jm(U),Y=new x3,ie=new D3(U,Ye,g,Y,C,Se,z),me=new qm(I),xe=new Q1(U),Ae=new Um(U,xe),re=new Zm(U,xe,z,Ae),le=new Qm(U,re,xe,Ae,z),G=new jm(U,C,ie),Be=new km(Y),ye=new _3(I,me,Ye,C,Ae,Be),Oe=new B3(I,Y),Me=new v3,ve=new T3(Ye),Ke=new Fm(I,me,g,le,x,c),We=new I3(I,le,C),ue=new k3(U,z,C,g),be=new Om(U,Ye,z),oe=new Km(U,Ye,z),z.programs=ye.programs,I.capabilities=C,I.extensions=Ye,I.properties=Y,I.renderLists=Me,I.shadowMap=We,I.state=g,I.info=z}b!==Yt&&(E=new t2(b,t.width,t.height,o,s,r));let Ne=new wc(I,U);this.xr=Ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=Ye.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ye.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(v){v!==void 0&&(ae=v,this.setSize(ke,j,!1))},this.getSize=function(v){return v.set(ke,j)},this.setSize=function(v,k,ne=!0){if(Ne.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=v,j=k,t.width=Math.floor(v*ae),t.height=Math.floor(k*ae),ne===!0&&(t.style.width=v+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,v,k)},this.getDrawingBufferSize=function(v){return v.set(ke*ae,j*ae).floor()},this.setDrawingBufferSize=function(v,k,ne){ke=v,j=k,ae=ne,t.width=Math.floor(v*ne),t.height=Math.floor(k*ne),this.setViewport(0,0,v,k)},this.setEffects=function(v){if(b===Yt){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let k=0;k<v.length;k++)if(v[k].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(W)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,k,ne,Z){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,k,ne,Z),g.viewport(W.copy(_e).multiplyScalar(ae).round())},this.getScissor=function(v){return v.copy(Ge)},this.setScissor=function(v,k,ne,Z){v.isVector4?Ge.set(v.x,v.y,v.z,v.w):Ge.set(v,k,ne,Z),g.scissor(te.copy(Ge).multiplyScalar(ae).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(v){g.setScissorTest(ot=v)},this.setOpaqueSort=function(v){ge=v},this.setTransparentSort=function(v){ze=v},this.getClearColor=function(v){return v.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(v=!0,k=!0,ne=!0){let Z=0;if(v){let K=!1;if(ee!==null){let Te=ee.texture.format;K=m.has(Te)}if(K){let Te=ee.texture.type,Pe=d.has(Te),Ee=Ke.getClearColor(),Le=Ke.getClearAlpha(),Ue=Ee.r,Je=Ee.g,nt=Ee.b;Pe?(M[0]=Ue,M[1]=Je,M[2]=nt,M[3]=Le,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Ue,A[1]=Je,A[2]=nt,A[3]=Le,U.clearBufferiv(U.COLOR,0,A))}else Z|=U.COLOR_BUFFER_BIT}k&&(Z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),$=v},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),Ke.dispose(),Me.dispose(),ve.dispose(),Y.dispose(),me.dispose(),le.dispose(),Ae.dispose(),ue.dispose(),ye.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",gh),Ne.removeEventListener("sessionend",_h),wi.stop()};function pt(v){v.preventDefault(),jl("WebGLRenderer: Context Lost."),B=!0}function lt(){jl("WebGLRenderer: Context Restored."),B=!1;let v=z.autoReset,k=We.enabled,ne=We.autoUpdate,Z=We.needsUpdate,K=We.type;Ve(),z.autoReset=v,We.enabled=k,We.autoUpdate=ne,We.needsUpdate=Z,We.type=K}function ln(v){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Sn(v){let k=v.target;k.removeEventListener("dispose",Sn),Zf(k)}function Zf(v){Kf(v),Y.remove(v)}function Kf(v){let k=Y.get(v).programs;k!==void 0&&(k.forEach(function(ne){ye.releaseProgram(ne)}),v.isShaderMaterial&&ye.releaseShaderCache(v))}this.renderBufferDirect=function(v,k,ne,Z,K,Te){k===null&&(k=pe);let Pe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ee=Qf(v,k,ne,Z,K);g.setMaterial(Z,Pe);let Le=ne.index,Ue=1;if(Z.wireframe===!0){if(Le=re.getWireframeAttribute(ne),Le===void 0)return;Ue=2}let Je=ne.drawRange,nt=ne.attributes.position,De=Je.start*Ue,ct=(Je.start+Je.count)*Ue;Te!==null&&(De=Math.max(De,Te.start*Ue),ct=Math.min(ct,(Te.start+Te.count)*Ue)),Le!==null?(De=Math.max(De,0),ct=Math.min(ct,Le.count)):nt!=null&&(De=Math.max(De,0),ct=Math.min(ct,nt.count));let St=ct-De;if(St<0||St===1/0)return;Ae.setup(K,Z,Ee,ne,Le);let _t,ft=be;if(Le!==null&&(_t=xe.get(Le),ft=oe,ft.setIndex(_t)),K.isMesh)Z.wireframe===!0?(g.setLineWidth(Z.wireframeLinewidth*Ce()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(K.isLine){let Bt=Z.linewidth;Bt===void 0&&(Bt=1),g.setLineWidth(Bt*Ce()),K.isLineSegments?ft.setMode(U.LINES):K.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else K.isPoints?ft.setMode(U.POINTS):K.isSprite&&ft.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ft.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Bt=K._multiDrawStarts,Re=K._multiDrawCounts,Ht=K._multiDrawCount,st=Le?xe.get(Le).bytesPerElement:1,sn=Y.get(Z).currentProgram.getUniforms();for(let Mn=0;Mn<Ht;Mn++)sn.setValue(U,"_gl_DrawID",Mn),ft.render(Bt[Mn]/st,Re[Mn])}else if(K.isInstancedMesh)ft.renderInstances(De,St,K.count);else if(ne.isInstancedBufferGeometry){let Bt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Re=Math.min(ne.instanceCount,Bt);ft.renderInstances(De,St,Re)}else ft.render(De,St)};function mh(v,k,ne,Z){$!==null&&v.isNodeMaterial&&$.setObject(Z,v),Q===!0&&Be.setState(v,ne,!1),v.transparent===!0&&v.side===Cn&&v.forceSinglePass===!1?(v.side=Ut,v.needsUpdate=!0,Ar(v,k,Z),v.side=mi,v.needsUpdate=!0,Ar(v,k,Z),v.side=Cn):Ar(v,k,Z)}this.compile=function(v,k,ne=null){ne===null&&(ne=v),$!==null&&$.renderStart(v,k,ne),S=ve.get(ne),S.init(k),_.push(S),ne.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),v!==ne&&v.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),$!==null&&$.updateLights(S.state.lightsArray),P=this.localClippingEnabled,Q=Be.init(this.clippingPlanes,P),Q===!0&&Be.setGlobalState(this.clippingPlanes,k),$!==null&&We.render(S.state.shadowsArray,ne,k);let Z=new Set;return v.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Te=K.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){let Ee=Te[Pe];mh(Ee,ne,k,K),Z.add(Ee)}else mh(Te,ne,k,K),Z.add(Te)}),S=_.pop(),$!==null&&$.renderEnd(),Z},this.compileAsync=function(v,k,ne=null){let Z=this.compile(v,k,ne);return new Promise(K=>{function Te(){if(Z.forEach(function(Pe){let Le=Y.get(Pe).currentProgram;(Le===void 0||Le.isReady())&&Z.delete(Pe)}),Z.size===0){K(v);return}setTimeout(Te,10)}Ye.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Jo=null;function Jf(v){Jo&&Jo(v)}function gh(){wi.stop()}function _h(){wi.start()}let wi=new ud;wi.setAnimationLoop(Jf),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(v){Jo=v,Ne.setAnimationLoop(v),v===null?wi.stop():wi.start()},Ne.addEventListener("sessionstart",gh),Ne.addEventListener("sessionend",_h),this.render=function(v,k){if(k!==void 0&&k.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;$!==null&&$.renderStart(v,k);let ne=Ne.enabled===!0&&Ne.isPresenting===!0,Z=E!==null&&(ee===null||ne)&&E.begin(I,ee);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(k),k=Ne.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,k,ee),S=ve.get(v,_.length),S.init(k),S.state.textureUnits=ie.getTextureUnits(),_.push(S),F.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xe.setFromProjectionMatrix(F,fn,k.reversedDepth),P=this.localClippingEnabled,Q=Be.init(this.clippingPlanes,P),w=Me.get(v,T.length),w.init(),T.push(w),Ne.enabled===!0&&Ne.isPresenting===!0){let Pe=I.xr.getDepthSensingMesh();Pe!==null&&jo(Pe,k,-1/0,I.sortObjects)}jo(v,k,0,I.sortObjects),w.finish(),$!==null&&$.updateLights(S.state.lightsArray),I.sortObjects===!0&&w.sort(ge,ze),fe=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,fe&&Ke.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Be.beginShadows();let K=S.state.shadowsArray;if(We.render(K,v,k),Q===!0&&Be.endShadows(),(Z&&E.hasRenderPass())===!1){let Pe=w.opaque,Ee=w.transmissive;if(S.setupLights(),k.isArrayCamera){let Le=k.cameras;if(Ee.length>0)for(let Ue=0,Je=Le.length;Ue<Je;Ue++){let nt=Le[Ue];yh(Pe,Ee,v,nt)}fe&&Ke.render(v);for(let Ue=0,Je=Le.length;Ue<Je;Ue++){let nt=Le[Ue];xh(w,v,nt,nt.viewport)}}else Ee.length>0&&yh(Pe,Ee,v,k),fe&&Ke.render(v),xh(w,v,k)}ee!==null&&V===0&&(ie.updateMultisampleRenderTarget(ee),ie.updateRenderTargetMipmap(ee)),Z&&E.end(I),v.isScene===!0&&v.onAfterRender(I,v,k),Ae.resetDefaultState(),R=-1,O=null,_.pop(),_.length>0?(S=_[_.length-1],ie.setTextureUnits(S.state.textureUnits),Q===!0&&Be.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,$!==null&&$.renderEnd()};function jo(v,k,ne,Z){if(v.visible===!1)return;if(v.layers.test(k.layers)){if(v.isGroup)ne=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(k);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Xe)){Z&&se.setFromMatrixPosition(v.matrixWorld).applyMatrix4(F);let Pe=le.update(v),Ee=v.material;Ee.visible&&w.push(v,Pe,Ee,ne,se.z,null,k)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Xe))){let Pe=le.update(v),Ee=v.material;if(Z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),se.copy(v.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),se.copy(Pe.boundingSphere.center)),se.applyMatrix4(v.matrixWorld).applyMatrix4(F)),Array.isArray(Ee)){let Le=Pe.groups;for(let Ue=0,Je=Le.length;Ue<Je;Ue++){let nt=Le[Ue],De=Ee[nt.materialIndex];De&&De.visible&&w.push(v,Pe,De,ne,se.z,nt,k)}}else Ee.visible&&w.push(v,Pe,Ee,ne,se.z,null,k)}}let Te=v.children;for(let Pe=0,Ee=Te.length;Pe<Ee;Pe++)jo(Te[Pe],k,ne,Z)}function xh(v,k,ne,Z){let{opaque:K,transmissive:Te,transparent:Pe}=v;S.setupLightsView(ne),Q===!0&&Be.setGlobalState(I.clippingPlanes,ne),Z&&g.viewport(W.copy(Z)),K.length>0&&Tr(K,k,ne),Te.length>0&&Tr(Te,k,ne),Pe.length>0&&Tr(Pe,k,ne),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function yh(v,k,ne,Z){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let De=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new qt(1,1,{generateMipmaps:!0,type:De?vn:Yt,minFilter:_i,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Te=S.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||W;Te.setSize(Pe.z*I.transmissionResolutionScale,Pe.w*I.transmissionResolutionScale);let Ee=I.getRenderTarget(),Le=I.getActiveCubeFace(),Ue=I.getActiveMipmapLevel();I.setRenderTarget(Te),I.getClearColor(Ie),Fe=I.getClearAlpha(),Fe<1&&I.setClearColor(16777215,.5),I.clear(),fe&&Ke.render(ne);let Je=I.toneMapping;I.toneMapping=_n;let nt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),Q===!0&&Be.setGlobalState(I.clippingPlanes,Z),Tr(v,ne,Z),ie.updateMultisampleRenderTarget(Te),ie.updateRenderTargetMipmap(Te),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ct=0,St=k.length;ct<St;ct++){let _t=k[ct],{object:ft,geometry:Bt,material:Re,group:Ht}=_t;if(Re.side===Cn&&ft.layers.test(Z.layers)){let st=Re.side;Re.side=Ut,Re.needsUpdate=!0,vh(ft,ne,Z,Bt,Re,Ht),Re.side=st,Re.needsUpdate=!0,De=!0}}De===!0&&(ie.updateMultisampleRenderTarget(Te),ie.updateRenderTargetMipmap(Te))}I.setRenderTarget(Ee,Le,Ue),I.setClearColor(Ie,Fe),nt!==void 0&&(Z.viewport=nt),I.toneMapping=Je}function Tr(v,k,ne){let Z=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Te=v.length;K<Te;K++){let Pe=v[K],{object:Ee,geometry:Le,group:Ue}=Pe,Je=Pe.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Ee.layers.test(ne.layers)&&vh(Ee,k,ne,Le,Je,Ue)}}function vh(v,k,ne,Z,K,Te){$!==null&&K.isNodeMaterial&&$.setObject(v,K),v.onBeforeRender(I,k,ne,Z,K,Te),v.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),K.onBeforeRender(I,k,ne,Z,v,Te),K.transparent===!0&&K.side===Cn&&K.forceSinglePass===!1?(K.side=Ut,K.needsUpdate=!0,I.renderBufferDirect(ne,k,Z,K,v,Te),K.side=mi,K.needsUpdate=!0,I.renderBufferDirect(ne,k,Z,K,v,Te),K.side=Cn):I.renderBufferDirect(ne,k,Z,K,v,Te),v.onAfterRender(I,k,ne,Z,K,Te)}function Ar(v,k,ne){k.isScene!==!0&&(k=pe);let Z=Y.get(v),K=S.state.lights,Te=S.state.shadowsArray,Pe=K.state.version,Ee=ye.getParameters(v,K.state,Te,k,ne,S.state.lightProbeGridArray),Le=ye.getProgramCacheKey(Ee),Ue=Z.programs;Z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,Z.fog=k.fog;let Je=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;Z.envMap=me.get(v.envMap||Z.environment,Je),Z.envMapRotation=Z.environment!==null&&v.envMap===null?k.environmentRotation:v.envMapRotation,Ue===void 0&&(v.addEventListener("dispose",Sn),Ue=new Map,Z.programs=Ue);let nt=Ue.get(Le);if(nt!==void 0){if(Z.currentProgram===nt&&Z.lightsStateVersion===Pe)return Sh(v,Ee),nt}else Ee.uniforms=ye.getUniforms(v),$!==null&&v.isNodeMaterial&&$.build(v,ne,Ee),v.onBeforeCompile(Ee,I),nt=ye.acquireProgram(Ee,Le),Ue.set(Le,nt),Z.uniforms=Ee.uniforms;let De=Z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(De.clippingPlanes=Be.uniform),Sh(v,Ee),Z.needsLights=t1(v),Z.lightsStateVersion=Pe,Z.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.sunLights.value=K.state.sun,De.sunLightShadows.value=K.state.sunShadow,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.sunShadowMatrix.value=K.state.sunShadowMatrix,De.sunShadowCascade.value=K.state.sunShadowCascade,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=nt,Z.uniformsList=null,nt}function bh(v){if(v.uniformsList===null){let k=v.currentProgram.getUniforms();v.uniformsList=bs.seqWithValue(k.seq,v.uniforms)}return v.uniformsList}function Sh(v,k){let ne=Y.get(v);ne.outputColorSpace=k.outputColorSpace,ne.batching=k.batching,ne.batchingColor=k.batchingColor,ne.instancing=k.instancing,ne.instancingColor=k.instancingColor,ne.instancingMorph=k.instancingMorph,ne.skinning=k.skinning,ne.morphTargets=k.morphTargets,ne.morphNormals=k.morphNormals,ne.morphColors=k.morphColors,ne.morphTargetsCount=k.morphTargetsCount,ne.numClippingPlanes=k.numClippingPlanes,ne.numIntersection=k.numClipIntersection,ne.vertexAlphas=k.vertexAlphas,ne.vertexTangents=k.vertexTangents,ne.toneMapping=k.toneMapping}function jf(v,k){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let ne=0,Z=v.length;ne<Z;ne++){let K=v[ne];if(K.texture!==null&&K.boundingBox.containsPoint(y))return K}return null}function Qf(v,k,ne,Z,K){k.isScene!==!0&&(k=pe),ie.resetTextureUnits();let Te=k.fog,Pe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?k.environment:null,Ee=ee===null?I.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:it.workingColorSpace,Le=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ue=me.get(Z.envMap||Pe,Le),Je=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),De=!!ne.morphAttributes.position,ct=!!ne.morphAttributes.normal,St=!!ne.morphAttributes.color,_t=_n;Z.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(_t=I.toneMapping);let ft=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Bt=ft!==void 0?ft.length:0,Re=Y.get(Z),Ht=S.state.lights;if(Q===!0&&(P===!0||v!==O)){let mt=v===O&&Z.id===R;Be.setState(Z,v,mt)}let st=!1;Z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ht.state.version||Re.outputColorSpace!==Ee||K.isBatchedMesh&&Re.batching===!1||!K.isBatchedMesh&&Re.batching===!0||K.isBatchedMesh&&Re.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Re.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Re.instancing===!1||!K.isInstancedMesh&&Re.instancing===!0||K.isSkinnedMesh&&Re.skinning===!1||!K.isSkinnedMesh&&Re.skinning===!0||K.isInstancedMesh&&Re.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Re.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Re.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Re.instancingMorph===!1&&K.morphTexture!==null||Re.envMap!==Ue||Z.fog===!0&&Re.fog!==Te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Be.numPlanes||Re.numIntersection!==Be.numIntersection)||Re.vertexAlphas!==Je||Re.vertexTangents!==nt||Re.morphTargets!==De||Re.morphNormals!==ct||Re.morphColors!==St||Re.toneMapping!==_t||Re.morphTargetsCount!==Bt||!!Re.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Re.__version=Z.version);let sn=Re.currentProgram;st===!0&&(sn=Ar(Z,k,K),$&&Z.isNodeMaterial&&$.onUpdateProgram(Z,sn,Re));let Mn=!1,Kn=!1,zi=!1,dt=sn.getUniforms(),vt=Re.uniforms;if(g.useProgram(sn.program)&&(Mn=!0,Kn=!0,zi=!0),Z.id!==R&&(R=Z.id,Kn=!0),Re.needsLights){let mt=jf(S.state.lightProbeGridArray,K);Re.lightProbeGrid!==mt&&(Re.lightProbeGrid=mt,Kn=!0)}if(Mn||O!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",v.projectionMatrix),dt.setValue(U,"viewMatrix",v.matrixWorldInverse);let jn=dt.map.cameraPosition;jn!==void 0&&jn.setValue(U,J.setFromMatrixPosition(v.matrixWorld)),C.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),O!==v&&(O=v,Kn=!0,zi=!0)}if(Re.needsLights&&(Ht.state.sunShadowMap.length>0&&dt.setValue(U,"sunShadowMap",Ht.state.sunShadowMap,ie),Ht.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",Ht.state.directionalShadowMap,ie),Ht.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",Ht.state.spotShadowMap,ie),Ht.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",Ht.state.pointShadowMap,ie)),K.isSkinnedMesh){dt.setOptional(U,K,"bindMatrix"),dt.setOptional(U,K,"bindMatrixInverse");let mt=K.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),dt.setValue(U,"boneTexture",mt.boneTexture,ie))}K.isBatchedMesh&&(dt.setOptional(U,K,"batchingTexture"),dt.setValue(U,"batchingTexture",K._matricesTexture,ie),dt.setOptional(U,K,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",K._indirectTexture,ie),dt.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",K._colorsTexture,ie));let Jn=ne.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&G.update(K,ne,sn),(Kn||Re.receiveShadow!==K.receiveShadow)&&(Re.receiveShadow=K.receiveShadow,dt.setValue(U,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&k.environment!==null&&(vt.envMapIntensity.value=k.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=V3()),Kn){if(dt.setValue(U,"toneMappingExposure",I.toneMappingExposure),Re.needsLights&&e1(vt,zi),Te&&Z.fog===!0&&Oe.refreshFogUniforms(vt,Te),Oe.refreshMaterialUniforms(vt,Z,ae,j,S.state.transmissionRenderTarget[v.id]),Re.needsLights&&Re.lightProbeGrid){let mt=Re.lightProbeGrid;vt.probesSH.value=mt.texture,vt.probesMin.value.copy(mt.boundingBox.min),vt.probesMax.value.copy(mt.boundingBox.max),vt.probesResolution.value.copy(mt.resolution)}bs.upload(U,bh(Re),vt,ie)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(bs.upload(U,bh(Re),vt,ie),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(U,"center",K.center),dt.setValue(U,"modelViewMatrix",K.modelViewMatrix),dt.setValue(U,"normalMatrix",K.normalMatrix),dt.setValue(U,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let mt=Z.uniformsGroups;for(let jn=0,Vi=mt.length;jn<Vi;jn++){let wh=mt[jn];ue.update(wh,sn),ue.bind(wh,sn)}}return sn}function e1(v,k){v.ambientLightColor.needsUpdate=k,v.lightProbe.needsUpdate=k,v.sunLights.needsUpdate=k,v.sunLightShadows.needsUpdate=k,v.directionalLights.needsUpdate=k,v.directionalLightShadows.needsUpdate=k,v.pointLights.needsUpdate=k,v.pointLightShadows.needsUpdate=k,v.spotLights.needsUpdate=k,v.spotLightShadows.needsUpdate=k,v.rectAreaLights.needsUpdate=k,v.hemisphereLights.needsUpdate=k}function t1(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(v,k,ne){let Z=Y.get(v);Z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=k,Y.get(v.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ne,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,k){let ne=Y.get(v);ne.__webglFramebuffer=k,ne.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(v,k=0,ne=0){ee=v,H=k,V=ne;let Z=null,K=!1,Te=!1;if(v){let Ee=Y.get(v);if(Ee.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,Ee.__webglFramebuffer),W.copy(v.viewport),te.copy(v.scissor),he=v.scissorTest,g.viewport(W),g.scissor(te),g.setScissorTest(he),R=-1;return}else if(Ee.__webglFramebuffer===void 0)ie.setupRenderTarget(v);else if(Ee.__hasExternalTextures)ie.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Je=v.depthTexture;if(Ee.__boundDepthTexture!==Je){if(Je!==null&&Y.has(Je)&&(v.width!==Je.image.width||v.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(v)}}let Le=v.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Te=!0);let Ue=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?Z=Ue[k][ne]:Z=Ue[k],K=!0):v.samples>0&&ie.useMultisampledRTT(v)===!1?Z=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?Z=Ue[ne]:Z=Ue,W.copy(v.viewport),te.copy(v.scissor),he=v.scissorTest}else W.copy(_e).multiplyScalar(ae).floor(),te.copy(Ge).multiplyScalar(ae).floor(),he=ot;if(ne!==0&&(Z=X),g.bindFramebuffer(U.FRAMEBUFFER,Z)&&g.drawBuffers(v,Z),g.viewport(W),g.scissor(te),g.setScissorTest(he),K){let Ee=Y.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,ne)}else if(Te){let Ee=k;for(let Le=0;Le<v.textures.length;Le++){let Ue=Y.get(v.textures[Le]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,ne,Ee)}}else if(v!==null&&ne!==0){let Ee=Y.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,ne)}R=-1};function Mh(v){let k=Y.get(v);return(k.__readFormat!==v.format||k.__readType!==v.type)&&(k.__readFormat=v.format,k.__readType=v.type,k.__formatReadable=C.textureFormatReadable(v.format),k.__typeReadable=C.textureTypeReadable(v.type)),k}this.readRenderTargetPixels=function(v,k,ne,Z,K,Te,Pe,Ee=0){if(!(v&&v.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le){g.bindFramebuffer(U.FRAMEBUFFER,Le);try{let Ue=v.textures[Ee],Je=Ue.format,nt=Ue.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);let De=Mh(Ue);if(De.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=v.width-Z&&ne>=0&&ne<=v.height-K&&U.readPixels(k,ne,Z,K,Se.convert(Je),Se.convert(nt),Te)}finally{let Ue=ee!==null?Y.get(ee).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(v,k,ne,Z,K,Te,Pe,Ee=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le)if(k>=0&&k<=v.width-Z&&ne>=0&&ne<=v.height-K){g.bindFramebuffer(U.FRAMEBUFFER,Le);let Ue=v.textures[Ee],Je=Ue.format,nt=Ue.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);let De=Mh(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.bufferData(U.PIXEL_PACK_BUFFER,Te.byteLength,U.STREAM_READ),U.readPixels(k,ne,Z,K,Se.convert(Je),Se.convert(nt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let St=ee!==null?Y.get(ee).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,St);let _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Bu(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Te),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ct),U.deleteSync(_t),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,k=null,ne=0){let Z=Math.pow(2,-ne),K=Math.floor(v.image.width*Z),Te=Math.floor(v.image.height*Z),Pe=k!==null?k.x:0,Ee=k!==null?k.y:0;ie.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,ne,0,0,Pe,Ee,K,Te),g.unbindTexture()},this.copyTextureToTexture=function(v,k,ne=null,Z=null,K=0,Te=0){let Pe,Ee,Le,Ue,Je,nt,De,ct,St,_t=v.isCompressedTexture?v.mipmaps[Te]:v.image;if(ne!==null)Pe=ne.max.x-ne.min.x,Ee=ne.max.y-ne.min.y,Le=ne.isBox3?ne.max.z-ne.min.z:1,Ue=ne.min.x,Je=ne.min.y,nt=ne.isBox3?ne.min.z:0;else{let vt=Math.pow(2,-K);Pe=Math.floor(_t.width*vt),Ee=Math.floor(_t.height*vt),v.isDataArrayTexture?Le=_t.depth:v.isData3DTexture?Le=Math.floor(_t.depth*vt):Le=1,Ue=0,Je=0,nt=0}Z!==null?(De=Z.x,ct=Z.y,St=Z.z):(De=0,ct=0,St=0);let ft=Se.convert(k.format),Bt=Se.convert(k.type),Re;k.isData3DTexture?(ie.setTexture3D(k,0),Re=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ie.setTexture2DArray(k,0),Re=U.TEXTURE_2D_ARRAY):(ie.setTexture2D(k,0),Re=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Ht=g.getParameter(U.UNPACK_ROW_LENGTH),st=g.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=g.getParameter(U.UNPACK_SKIP_PIXELS),Mn=g.getParameter(U.UNPACK_SKIP_ROWS),Kn=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),g.pixelStorei(U.UNPACK_SKIP_ROWS,Je),g.pixelStorei(U.UNPACK_SKIP_IMAGES,nt);let zi=v.isDataArrayTexture||v.isData3DTexture,dt=k.isDataArrayTexture||k.isData3DTexture;if(v.isDepthTexture){let vt=Y.get(v),Jn=Y.get(k),mt=Y.get(vt.__renderTarget),jn=Y.get(Jn.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Vi=0;Vi<Le;Vi++)zi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,K,nt+Vi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(k).__webglTexture,Te,St+Vi)),U.blitFramebuffer(Ue,Je,Pe,Ee,De,ct,Pe,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||v.isRenderTargetTexture||Y.has(v)){let vt=Y.get(v),Jn=Y.get(k);g.bindFramebuffer(U.READ_FRAMEBUFFER,N),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,D);for(let mt=0;mt<Le;mt++)zi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.__webglTexture,K,nt+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vt.__webglTexture,K),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jn.__webglTexture,Te,St+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Jn.__webglTexture,Te),K!==0?U.blitFramebuffer(Ue,Je,Pe,Ee,De,ct,Pe,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(Re,Te,De,ct,St+mt,Ue,Je,Pe,Ee):U.copyTexSubImage2D(Re,Te,De,ct,Ue,Je,Pe,Ee);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(Re,Te,De,ct,St,Pe,Ee,Le,ft,Bt,_t.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,Te,De,ct,St,Pe,Ee,Le,ft,_t.data):U.texSubImage3D(Re,Te,De,ct,St,Pe,Ee,Le,ft,Bt,_t):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Te,De,ct,Pe,Ee,ft,Bt,_t.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Te,De,ct,_t.width,_t.height,ft,_t.data):U.texSubImage2D(U.TEXTURE_2D,Te,De,ct,Pe,Ee,ft,Bt,_t);g.pixelStorei(U.UNPACK_ROW_LENGTH,Ht),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),g.pixelStorei(U.UNPACK_SKIP_ROWS,Mn),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Kn),Te===0&&k.generateMipmaps&&U.generateMipmap(Re),g.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&ie.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ie.setTextureCube(v,0):v.isData3DTexture?ie.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ie.setTexture2DArray(v,0):ie.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){H=0,V=0,ee=null,g.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var xd={type:"change"},Tc={type:"start"},vd={type:"end"},Io=new Vn,yd=new Qt,G3=Math.cos(70*ec.DEG2RAD),Rt=new q,Zt=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ec=1e-6,Lo=class extends ar{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new en,this._lastTargetPosition=new q,this._quat=new en().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fs,this._sphericalDelta=new fs,this._scale=1,this._panOffset=new q,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new q,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=W3.bind(this),this._onPointerDown=H3.bind(this),this._onPointerUp=X3.bind(this),this._onContextMenu=j3.bind(this),this._onMouseWheel=Y3.bind(this),this._onKeyDown=Z3.bind(this),this._onTouchStart=K3.bind(this),this._onTouchMove=J3.bind(this),this._onMouseDown=$3.bind(this),this._onMouseMove=q3.bind(this),this._interceptControlDown=Q3.bind(this),this._interceptControlUp=e7.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ut.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xd),this.update(),this.state=ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Zt:i>Math.PI&&(i-=Zt),s<-Math.PI?s+=Zt:s>Math.PI&&(s-=Zt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Rt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new q(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Io.origin.copy(this.object.position),Io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Io.direction))<G3?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Io.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ec||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ec||this._lastTargetPosition.distanceToSquared(this.target)>Ec?(this.dispatchEvent(xd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Rt.copy(s).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function H3(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function W3(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function X3(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vd),this.state=ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $3(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ut.DOLLY;break;case fi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}break;case fi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Tc)}function q3(n){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Y3(n){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(n.preventDefault(),this.dispatchEvent(Tc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(vd))}function Z3(n){this.enabled!==!1&&this._handleKeyDown(n)}function K3(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ut.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ut.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Tc)}function J3(n){switch(this._trackPointer(n),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ut.NONE}}function j3(n){this.enabled!==!1&&n.preventDefault()}function Q3(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e7(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var bd={type:"FeatureCollection",name:"ne_110m_land",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-66.290031,-81.000327,-59.572095,-79.628679],geometry:{type:"Polygon",coordinates:[[[-59.572095,-80.040179],[-59.865849,-80.549657],[-60.159656,-81.000327],[-62.255393,-80.863178],[-64.488125,-80.921934],[-65.741666,-80.588827],[-65.741666,-80.549657],[-66.290031,-80.255773],[-64.037688,-80.294944],[-61.883246,-80.39287],[-61.138976,-79.981371],[-60.610119,-79.628679],[-59.572095,-80.040179]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-163.712896,-79.634209,-159.208184,-78.223338],geometry:{type:"Polygon",coordinates:[[[-159.208184,-79.497059],[-161.127601,-79.634209],[-162.439847,-79.281465],[-163.027408,-78.928774],[-163.066604,-78.869966],[-163.712896,-78.595667],[-163.712896,-78.595667],[-163.105801,-78.223338],[-161.245113,-78.380176],[-160.246208,-78.693645],[-159.482405,-79.046338],[-159.208184,-79.497059]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:0},bbox:[-54.164259,-81.025442,-43.333267,-77.831476],geometry:{type:"Polygon",coordinates:[[[-45.154758,-78.04707],[-43.920828,-78.478103],[-43.48995,-79.08556],[-43.372438,-79.516645],[-43.333267,-80.026123],[-44.880537,-80.339644],[-46.506174,-80.594357],[-48.386421,-80.829485],[-50.482107,-81.025442],[-52.851988,-80.966685],[-54.164259,-80.633528],[-53.987991,-80.222028],[-51.853134,-79.94773],[-50.991326,-79.614623],[-50.364595,-79.183487],[-49.914131,-78.811209],[-49.306959,-78.458569],[-48.660616,-78.047018],[-48.660616,-78.047019],[-48.151396,-78.04707],[-46.662857,-77.831476],[-45.154758,-78.04707]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-122.621735,-74.08881,-118.724143,-73.324619],geometry:{type:"Polygon",coordinates:[[[-121.211511,-73.50099],[-119.918851,-73.657725],[-118.724143,-73.481353],[-119.292119,-73.834097],[-120.232217,-74.08881],[-121.62283,-74.010468],[-122.621735,-73.657778],[-122.621735,-73.657777],[-122.406245,-73.324619],[-121.211511,-73.50099]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-127.28313,-73.873268,-124.031882,-73.246226],geometry:{type:"Polygon",coordinates:[[[-125.559566,-73.481353],[-124.031882,-73.873268],[-124.619469,-73.834097],[-125.912181,-73.736118],[-127.28313,-73.461769],[-127.28313,-73.461768],[-126.558472,-73.246226],[-125.559566,-73.481353]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-102.330725,-72.521205,-96.20035,-71.717792],geometry:{type:"Polygon",coordinates:[[[-98.98155,-71.933334],[-97.884743,-72.070535],[-96.787937,-71.952971],[-96.20035,-72.521205],[-96.983765,-72.442864],[-98.198083,-72.482035],[-99.432013,-72.442864],[-100.783455,-72.50162],[-101.801868,-72.305663],[-102.330725,-71.894164],[-102.330725,-71.894164],[-101.703967,-71.717792],[-100.430919,-71.854993],[-98.98155,-71.933334]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-75.012625,-72.503842,-68.333834,-68.87874],geometry:{type:"Polygon",coordinates:[[[-68.451346,-70.955823],[-68.333834,-71.406493],[-68.510128,-71.798407],[-68.784297,-72.170736],[-69.959471,-72.307885],[-71.075889,-72.503842],[-72.388134,-72.484257],[-71.8985,-72.092343],[-73.073622,-72.229492],[-74.19004,-72.366693],[-74.953895,-72.072757],[-75.012625,-71.661258],[-73.915819,-71.269345],[-73.915819,-71.269344],[-73.230331,-71.15178],[-72.074717,-71.190951],[-71.780962,-70.681473],[-71.72218,-70.309196],[-71.741791,-69.505782],[-71.173815,-69.035475],[-70.253252,-68.87874],[-69.724447,-69.251017],[-69.489422,-69.623346],[-69.058518,-70.074016],[-68.725541,-70.505153],[-68.451346,-70.955823]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,-90,180,-63.27066],geometry:{type:"Polygon",coordinates:[[[-58.614143,-64.152467],[-59.045073,-64.36801],[-59.789342,-64.211223],[-60.611928,-64.309202],[-61.297416,-64.54433],[-62.0221,-64.799094],[-62.51176,-65.09303],[-62.648858,-65.484942],[-62.590128,-65.857219],[-62.120079,-66.190326],[-62.805567,-66.425505],[-63.74569,-66.503847],[-64.294106,-66.837004],[-64.881693,-67.150474],[-65.508425,-67.58161],[-65.665082,-67.953887],[-65.312545,-68.365335],[-64.783715,-68.678908],[-63.961103,-68.913984],[-63.1973,-69.227556],[-62.785955,-69.619419],[-62.570516,-69.991747],[-62.276736,-70.383661],[-61.806661,-70.716768],[-61.512906,-71.089045],[-61.375809,-72.010074],[-61.081977,-72.382351],[-61.003661,-72.774265],[-60.690269,-73.166179],[-60.827367,-73.695242],[-61.375809,-74.106742],[-61.96337,-74.439848],[-63.295201,-74.576997],[-63.74569,-74.92974],[-64.352836,-75.262847],[-65.860987,-75.635124],[-67.192818,-75.79191],[-68.446282,-76.007452],[-69.797724,-76.222995],[-70.600724,-76.634494],[-72.206776,-76.673665],[-73.969536,-76.634494],[-75.555977,-76.712887],[-77.24037,-76.712887],[-76.926979,-77.104802],[-75.399294,-77.28107],[-74.282876,-77.55542],[-73.656119,-77.908112],[-74.772536,-78.221633],[-76.4961,-78.123654],[-77.925858,-78.378419],[-77.984666,-78.789918],[-78.023785,-79.181833],[-76.848637,-79.514939],[-76.633224,-79.887216],[-75.360097,-80.259545],[-73.244852,-80.416331],[-71.442946,-80.69063],[-70.013163,-81.004151],[-68.191646,-81.317672],[-65.704279,-81.474458],[-63.25603,-81.748757],[-61.552026,-82.042692],[-59.691416,-82.37585],[-58.712121,-82.846106],[-58.222487,-83.218434],[-57.008117,-82.865691],[-55.362894,-82.571755],[-53.619771,-82.258235],[-51.543644,-82.003521],[-49.76135,-81.729171],[-47.273931,-81.709586],[-44.825708,-81.846735],[-42.808363,-82.081915],[-42.16202,-81.65083],[-40.771433,-81.356894],[-38.244818,-81.337309],[-36.26667,-81.121715],[-34.386397,-80.906172],[-32.310296,-80.769023],[-30.097098,-80.592651],[-28.549802,-80.337938],[-29.254901,-79.985195],[-29.685805,-79.632503],[-29.685805,-79.260226],[-31.624808,-79.299397],[-33.681324,-79.456132],[-35.639912,-79.456132],[-35.914107,-79.083855],[-35.77701,-78.339248],[-35.326546,-78.123654],[-33.896763,-77.888526],[-32.212369,-77.65345],[-30.998051,-77.359515],[-29.783732,-77.065579],[-28.882779,-76.673665],[-27.511752,-76.497345],[-26.160336,-76.360144],[-25.474822,-76.281803],[-23.927552,-76.24258],[-22.458598,-76.105431],[-21.224694,-75.909474],[-20.010375,-75.674346],[-18.913543,-75.439218],[-17.522982,-75.125698],[-16.641589,-74.79254],[-15.701491,-74.498604],[-15.40771,-74.106742],[-16.46532,-73.871614],[-16.112784,-73.460114],[-15.446855,-73.146542],[-14.408805,-72.950585],[-13.311973,-72.715457],[-12.293508,-72.401936],[-11.510067,-72.010074],[-11.020433,-71.539767],[-10.295774,-71.265416],[-9.101015,-71.324224],[-8.611381,-71.65733],[-7.416622,-71.696501],[-7.377451,-71.324224],[-6.868232,-70.93231],[-5.790985,-71.030289],[-5.536375,-71.402617],[-4.341667,-71.461373],[-3.048981,-71.285053],[-1.795492,-71.167438],[-.659489,-71.226246],[-.228637,-71.637745],[.868195,-71.304639],[1.886686,-71.128267],[3.022638,-70.991118],[4.139055,-70.853917],[5.157546,-70.618789],[6.273912,-70.462055],[7.13572,-70.246512],[7.742866,-69.893769],[8.48711,-70.148534],[9.525135,-70.011333],[10.249845,-70.48164],[10.817821,-70.834332],[11.953824,-70.638375],[12.404287,-70.246512],[13.422778,-69.972162],[14.734998,-70.030918],[15.126757,-70.403247],[15.949342,-70.030918],[17.026589,-69.913354],[18.201711,-69.874183],[19.259373,-69.893769],[20.375739,-70.011333],[21.452985,-70.07014],[21.923034,-70.403247],[22.569403,-70.697182],[23.666184,-70.520811],[24.841357,-70.48164],[25.977309,-70.48164],[27.093726,-70.462055],[28.09258,-70.324854],[29.150242,-70.20729],[30.031583,-69.93294],[30.971733,-69.75662],[31.990172,-69.658641],[32.754053,-69.384291],[33.302443,-68.835642],[33.870419,-68.502588],[34.908495,-68.659271],[35.300202,-69.012014],[36.16201,-69.247142],[37.200035,-69.168748],[37.905108,-69.52144],[38.649404,-69.776205],[39.667894,-69.541077],[40.020431,-69.109941],[40.921358,-68.933621],[41.959434,-68.600514],[42.938702,-68.463313],[44.113876,-68.267408],[44.897291,-68.051866],[45.719928,-67.816738],[46.503343,-67.601196],[47.44344,-67.718759],[48.344419,-67.366068],[48.990736,-67.091718],[49.930885,-67.111303],[50.753471,-66.876175],[50.949325,-66.523484],[51.791547,-66.249133],[52.614133,-66.053176],[53.613038,-65.89639],[54.53355,-65.818049],[55.414943,-65.876805],[56.355041,-65.974783],[57.158093,-66.249133],[57.255968,-66.680218],[58.137361,-67.013324],[58.744508,-67.287675],[59.939318,-67.405239],[60.605221,-67.679589],[61.427806,-67.953887],[62.387489,-68.012695],[63.19049,-67.816738],[64.052349,-67.405239],[64.992447,-67.620729],[65.971715,-67.738345],[66.911864,-67.855909],[67.891133,-67.934302],[68.890038,-67.934302],[69.712624,-68.972791],[69.673453,-69.227556],[69.555941,-69.678226],[68.596258,-69.93294],[67.81274,-70.305268],[67.949889,-70.697182],[69.066307,-70.677545],[68.929157,-71.069459],[68.419989,-71.441788],[67.949889,-71.853287],[68.71377,-72.166808],[69.869307,-72.264787],[71.024895,-72.088415],[71.573285,-71.696501],[71.906288,-71.324224],[72.454627,-71.010703],[73.08141,-70.716768],[73.33602,-70.364024],[73.864877,-69.874183],[74.491557,-69.776205],[75.62756,-69.737034],[76.626465,-69.619419],[77.644904,-69.462684],[78.134539,-69.07077],[78.428371,-68.698441],[79.113859,-68.326216],[80.093127,-68.071503],[80.93535,-67.875546],[81.483792,-67.542388],[82.051767,-67.366068],[82.776426,-67.209282],[83.775331,-67.30726],[84.676206,-67.209282],[85.655527,-67.091718],[86.752359,-67.150474],[87.477017,-66.876175],[87.986289,-66.209911],[88.358411,-66.484261],[88.828408,-66.954568],[89.67063,-67.150474],[90.630365,-67.228867],[91.5901,-67.111303],[92.608539,-67.189696],[93.548637,-67.209282],[94.17542,-67.111303],[95.017591,-67.170111],[95.781472,-67.385653],[96.682399,-67.248504],[97.759646,-67.248504],[98.68021,-67.111303],[99.718182,-67.248504],[100.384188,-66.915346],[100.893356,-66.58224],[101.578896,-66.30789],[102.832411,-65.563284],[103.478676,-65.700485],[104.242557,-65.974783],[104.90846,-66.327527],[106.181561,-66.934931],[107.160881,-66.954568],[108.081393,-66.954568],[109.15864,-66.837004],[110.235835,-66.699804],[111.058472,-66.425505],[111.74396,-66.13157],[112.860378,-66.092347],[113.604673,-65.876805],[114.388088,-66.072762],[114.897308,-66.386283],[115.602381,-66.699804],[116.699161,-66.660633],[117.384701,-66.915346],[118.57946,-67.170111],[119.832924,-67.268089],[120.871,-67.189696],[121.654415,-66.876175],[122.320369,-66.562654],[123.221296,-66.484261],[124.122274,-66.621462],[125.160247,-66.719389],[126.100396,-66.562654],[127.001427,-66.562654],[127.882768,-66.660633],[128.80328,-66.758611],[129.704259,-66.58224],[130.781454,-66.425505],[131.799945,-66.386283],[132.935896,-66.386283],[133.85646,-66.288304],[134.757387,-66.209963],[135.031582,-65.72007],[135.070753,-65.308571],[135.697485,-65.582869],[135.873805,-66.033591],[136.206705,-66.44509],[136.618049,-66.778197],[137.460271,-66.954568],[138.596223,-66.895761],[139.908442,-66.876175],[140.809421,-66.817367],[142.121692,-66.817367],[143.061842,-66.797782],[144.374061,-66.837004],[145.490427,-66.915346],[146.195552,-67.228867],[145.999699,-67.601196],[146.646067,-67.895131],[147.723263,-68.130259],[148.839629,-68.385024],[150.132314,-68.561292],[151.483705,-68.71813],[152.502247,-68.874813],[153.638199,-68.894502],[154.284567,-68.561292],[155.165857,-68.835642],[155.92979,-69.149215],[156.811132,-69.384291],[158.025528,-69.482269],[159.181013,-69.599833],[159.670699,-69.991747],[160.80665,-70.226875],[161.570479,-70.579618],[162.686897,-70.736353],[163.842434,-70.716768],[164.919681,-70.775524],[166.11444,-70.755938],[167.309095,-70.834332],[168.425616,-70.971481],[169.463589,-71.20666],[170.501665,-71.402617],[171.20679,-71.696501],[171.089227,-72.088415],[170.560422,-72.441159],[170.109958,-72.891829],[169.75737,-73.24452],[169.287321,-73.65602],[167.975101,-73.812806],[167.387489,-74.165498],[166.094803,-74.38104],[165.644391,-74.772954],[164.958851,-75.145283],[164.234193,-75.458804],[163.822797,-75.870303],[163.568239,-76.24258],[163.47026,-76.693302],[163.489897,-77.065579],[164.057873,-77.457442],[164.273363,-77.82977],[164.743464,-78.182514],[166.604126,-78.319611],[166.995781,-78.750748],[165.193876,-78.907483],[163.666217,-79.123025],[161.766385,-79.162248],[160.924162,-79.730482],[160.747894,-80.200737],[160.316964,-80.573066],[159.788211,-80.945395],[161.120016,-81.278501],[161.629287,-81.690001],[162.490992,-82.062278],[163.705336,-82.395435],[165.095949,-82.708956],[166.604126,-83.022477],[168.895665,-83.335998],[169.404782,-83.825891],[172.283934,-84.041433],[172.477049,-84.117914],[173.224083,-84.41371],[175.985672,-84.158997],[178.277212,-84.472518],[180,-84.71338],[180,-90],[-180,-90],[-180,-84.71338],[-179.942499,-84.721443],[-179.058677,-84.139412],[-177.256772,-84.452933],[-177.140807,-84.417941],[-176.861993,-84.333812],[-176.523952,-84.231811],[-176.230303,-84.143203],[-176.084673,-84.099259],[-175.934101,-84.101591],[-175.829882,-84.117914],[-174.382503,-84.534323],[-173.116559,-84.117914],[-172.889106,-84.061019],[-169.951223,-83.884647],[-168.999989,-84.117914],[-168.530199,-84.23739],[-167.022099,-84.570497],[-164.182144,-84.82521],[-161.929775,-85.138731],[-158.07138,-85.37391],[-155.192253,-85.09956],[-150.942099,-85.295517],[-148.533073,-85.609038],[-145.888918,-85.315102],[-143.107718,-85.040752],[-142.892279,-84.570497],[-146.829068,-84.531274],[-150.060732,-84.296146],[-150.902928,-83.904232],[-153.586201,-83.68869],[-153.409907,-83.23802],[-153.037759,-82.82652],[-152.665637,-82.454192],[-152.861517,-82.042692],[-154.526299,-81.768394],[-155.29018,-81.41565],[-156.83745,-81.102129],[-154.408787,-81.160937],[-152.097662,-81.004151],[-150.648293,-81.337309],[-148.865998,-81.043373],[-147.22075,-80.671045],[-146.417749,-80.337938],[-146.770286,-79.926439],[-148.062947,-79.652089],[-149.531901,-79.358205],[-151.588416,-79.299397],[-153.390322,-79.162248],[-155.329376,-79.064269],[-155.975668,-78.69194],[-157.268302,-78.378419],[-158.051768,-78.025676],[-158.365134,-76.889207],[-157.875474,-76.987238],[-156.974573,-77.300759],[-155.329376,-77.202728],[-153.742832,-77.065579],[-152.920247,-77.496664],[-151.33378,-77.398737],[-150.00195,-77.183143],[-148.748486,-76.908845],[-147.612483,-76.575738],[-146.104409,-76.47776],[-146.143528,-76.105431],[-146.496091,-75.733154],[-146.20231,-75.380411],[-144.909624,-75.204039],[-144.322037,-75.537197],[-142.794353,-75.34124],[-141.638764,-75.086475],[-140.209007,-75.06689],[-138.85759,-74.968911],[-137.5062,-74.733783],[-136.428901,-74.518241],[-135.214583,-74.302699],[-134.431194,-74.361455],[-133.745654,-74.439848],[-132.257168,-74.302699],[-130.925311,-74.479019],[-129.554284,-74.459433],[-128.242038,-74.322284],[-126.890622,-74.420263],[-125.402082,-74.518241],[-124.011496,-74.479019],[-122.562152,-74.498604],[-121.073613,-74.518241],[-119.70256,-74.479019],[-118.684145,-74.185083],[-117.469801,-74.028348],[-116.216312,-74.243891],[-115.021552,-74.067519],[-113.944331,-73.714828],[-113.297988,-74.028348],[-112.945452,-74.38104],[-112.299083,-74.714198],[-111.261059,-74.420263],[-110.066325,-74.79254],[-108.714909,-74.910103],[-107.559346,-75.184454],[-106.149148,-75.125698],[-104.876074,-74.949326],[-103.367949,-74.988497],[-102.016507,-75.125698],[-100.645531,-75.302018],[-100.1167,-74.870933],[-100.763043,-74.537826],[-101.252703,-74.185083],[-102.545337,-74.106742],[-103.113313,-73.734413],[-103.328752,-73.362084],[-103.681289,-72.61753],[-102.917485,-72.754679],[-101.60524,-72.813436],[-100.312528,-72.754679],[-99.13738,-72.911414],[-98.118889,-73.20535],[-97.688037,-73.558041],[-96.336595,-73.616849],[-95.043961,-73.4797],[-93.672907,-73.283743],[-92.439003,-73.166179],[-91.420564,-73.401307],[-90.088733,-73.322914],[-89.226951,-72.558722],[-88.423951,-73.009393],[-87.268337,-73.185764],[-86.014822,-73.087786],[-85.192236,-73.4797],[-83.879991,-73.518871],[-82.665646,-73.636434],[-81.470913,-73.851977],[-80.687447,-73.4797],[-80.295791,-73.126956],[-79.296886,-73.518871],[-77.925858,-73.420892],[-76.907367,-73.636434],[-76.221879,-73.969541],[-74.890049,-73.871614],[-73.852024,-73.65602],[-72.833533,-73.401307],[-71.619215,-73.264157],[-70.209042,-73.146542],[-68.935916,-73.009393],[-67.956622,-72.79385],[-67.369061,-72.480329],[-67.134036,-72.049244],[-67.251548,-71.637745],[-67.56494,-71.245831],[-67.917477,-70.853917],[-68.230843,-70.462055],[-68.485452,-70.109311],[-68.544209,-69.717397],[-68.446282,-69.325535],[-67.976233,-68.953206],[-67.5845,-68.541707],[-67.427843,-68.149844],[-67.62367,-67.718759],[-67.741183,-67.326845],[-67.251548,-66.876175],[-66.703184,-66.58224],[-66.056815,-66.209963],[-65.371327,-65.89639],[-64.568276,-65.602506],[-64.176542,-65.171423],[-63.628152,-64.897073],[-63.001394,-64.642308],[-62.041686,-64.583552],[-61.414928,-64.270031],[-60.709855,-64.074074],[-59.887269,-63.95651],[-59.162585,-63.701745],[-58.594557,-63.388224],[-57.811143,-63.27066],[-57.223582,-63.525425],[-57.59573,-63.858532],[-58.614143,-64.152467]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-74.66253,-55.61183,-65.05,-52.5183],geometry:{type:"Polygon",coordinates:[[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.95992,-54.89681],[-67.29103,-55.30124],[-68.14863,-55.61183],[-69.2321,-55.49906],[-69.95809,-55.19843],[-71.00568,-55.05383],[-72.2639,-54.49514],[-73.2852,-53.95752],[-74.66253,-52.83749],[-73.8381,-53.04743],[-72.43418,-53.7154],[-71.10773,-54.07433],[-70.59178,-53.61583],[-70.26748,-52.93123],[-69.34565,-52.5183],[-68.63411,-52.63625],[-68.63401,-52.63637],[-68.25,-53.1],[-67.75,-53.85]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-61.2,-52.3,-57.75,-51.1],geometry:{type:"Polygon",coordinates:[[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[68.72,-49.775,70.56,-48.625],geometry:{type:"Polygon",coordinates:[[[70.28,-49.71],[68.745,-49.775],[68.72,-49.2425],[68.8675,-48.83],[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[144.718071,-43.634597,148.359865,-40.703975],geometry:{type:"Polygon",coordinates:[[[145.397978,-40.792549],[146.364121,-41.137695],[146.908584,-41.000546],[147.689259,-40.808258],[148.289068,-40.875438],[148.359865,-42.062445],[148.017301,-42.407024],[147.914052,-43.211522],[147.564564,-42.937689],[146.870343,-43.634597],[146.663327,-43.580854],[146.048378,-43.549745],[145.43193,-42.693776],[145.29509,-42.03361],[144.718071,-41.162552],[144.743755,-40.703975],[145.397978,-40.792549]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[166.509144,-46.641235,174.248517,-40.493962],geometry:{type:"Polygon",coordinates:[[[173.020375,-40.919052],[173.247234,-41.331999],[173.958405,-40.926701],[174.247587,-41.349155],[174.248517,-41.770008],[173.876447,-42.233184],[173.22274,-42.970038],[172.711246,-43.372288],[173.080113,-43.853344],[172.308584,-43.865694],[171.452925,-44.242519],[171.185138,-44.897104],[170.616697,-45.908929],[169.831422,-46.355775],[169.332331,-46.641235],[168.411354,-46.619945],[167.763745,-46.290197],[166.676886,-46.219917],[166.509144,-45.852705],[167.046424,-45.110941],[168.303763,-44.123973],[168.949409,-43.935819],[169.667815,-43.555326],[170.52492,-43.031688],[171.12509,-42.512754],[171.569714,-41.767424],[171.948709,-41.514417],[172.097227,-40.956104],[172.79858,-40.493962],[173.020375,-40.919052]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[172.636005,-41.688308,178.517094,-34.450662],geometry:{type:"Polygon",coordinates:[[[174.612009,-36.156397],[175.336616,-37.209098],[175.357596,-36.526194],[175.808887,-36.798942],[175.95849,-37.555382],[176.763195,-37.881253],[177.438813,-37.961248],[178.010354,-37.579825],[178.517094,-37.695373],[178.274731,-38.582813],[177.97046,-39.166343],[177.206993,-39.145776],[176.939981,-39.449736],[177.032946,-39.879943],[176.885824,-40.065978],[176.508017,-40.604808],[176.01244,-41.289624],[175.239567,-41.688308],[175.067898,-41.425895],[174.650973,-41.281821],[175.22763,-40.459236],[174.900157,-39.908933],[173.824047,-39.508854],[173.852262,-39.146602],[174.574802,-38.797683],[174.743474,-38.027808],[174.697017,-37.381129],[174.292028,-36.711092],[174.319004,-36.534824],[173.840997,-36.121981],[173.054171,-35.237125],[172.636005,-34.529107],[173.007042,-34.450662],[173.551298,-35.006183],[174.32939,-35.265496],[174.612009,-36.156397]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[164.029606,-22.399976,167.120011,-20.105646],geometry:{type:"Polygon",coordinates:[[[167.120011,-22.159991],[166.740035,-22.399976],[166.189732,-22.129708],[165.474375,-21.679607],[164.829815,-21.14982],[164.167995,-20.444747],[164.029606,-20.105646],[164.459967,-20.120012],[165.020036,-20.459991],[165.460009,-20.800022],[165.77999,-21.080005],[166.599991,-21.700019],[167.120011,-22.159991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[177.28504,-18.28799,178.71806,-17.33992],geometry:{type:"Polygon",coordinates:[[[178.3736,-17.33992],[178.71806,-17.62846],[178.55271,-18.15059],[177.93266,-18.28799],[177.38146,-18.16432],[177.28504,-17.72465],[177.67087,-17.38114],[178.12557,-17.50481],[178.3736,-17.33992]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[178.596839,-17.012042,180,-16.067133],geometry:{type:"Polygon",coordinates:[[[179.364143,-16.801354],[178.725059,-17.012042],[178.596839,-16.63915],[179.096609,-16.433984],[179.413509,-16.379054],[180,-16.067133],[180,-16.555217],[179.364143,-16.801354]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-180,-16.555217,-179.79332,-16.020882],geometry:{type:"Polygon",coordinates:[[[-179.917369,-16.501783],[-180,-16.555217],[-180,-16.067133],[-179.79332,-16.020882],[-179.917369,-16.501783]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[167.180008,-16.59785,167.844877,-15.891846],geometry:{type:"Polygon",coordinates:[[[167.844877,-16.466333],[167.515181,-16.59785],[167.180008,-16.159995],[167.216801,-15.891846],[167.844877,-16.466333]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[166.629137,-15.740021,167.270028,-14.626497],geometry:{type:"Polygon",coordinates:[[[167.107712,-14.93392],[167.270028,-15.740021],[167.001207,-15.614602],[166.793158,-15.668811],[166.649859,-15.392704],[166.629137,-14.626497],[167.107712,-14.93392]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[43.254187,-25.601434,50.476537,-12.040557],geometry:{type:"Polygon",coordinates:[[[50.056511,-13.555761],[50.217431,-14.758789],[50.476537,-15.226512],[50.377111,-15.706069],[50.200275,-16.000263],[49.860606,-15.414253],[49.672607,-15.710204],[49.863344,-16.451037],[49.774564,-16.875042],[49.498612,-17.106036],[49.435619,-17.953064],[49.041792,-19.118781],[48.548541,-20.496888],[47.930749,-22.391501],[47.547723,-23.781959],[47.095761,-24.94163],[46.282478,-25.178463],[45.409508,-25.601434],[44.833574,-25.346101],[44.03972,-24.988345],[43.763768,-24.460677],[43.697778,-23.574116],[43.345654,-22.776904],[43.254187,-22.057413],[43.433298,-21.336475],[43.893683,-21.163307],[43.89637,-20.830459],[44.374325,-20.072366],[44.464397,-19.435454],[44.232422,-18.961995],[44.042976,-18.331387],[43.963084,-17.409945],[44.312469,-16.850496],[44.446517,-16.216219],[44.944937,-16.179374],[45.502732,-15.974373],[45.872994,-15.793454],[46.312243,-15.780018],[46.882183,-15.210182],[47.70513,-14.594303],[48.005215,-14.091233],[47.869047,-13.663869],[48.293828,-13.784068],[48.84506,-13.089175],[48.863509,-12.487868],[49.194651,-12.040557],[49.543519,-12.469833],[49.808981,-12.895285],[50.056511,-13.555761]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[113.338953,-39.035757,153.569469,-10.668186],geometry:{type:"Polygon",coordinates:[[[143.561811,-13.763656],[143.922099,-14.548311],[144.563714,-14.171176],[144.894908,-14.594458],[145.374724,-14.984976],[145.271991,-15.428205],[145.48526,-16.285672],[145.637033,-16.784918],[145.888904,-16.906926],[146.160309,-17.761655],[146.063674,-18.280073],[146.387478,-18.958274],[147.471082,-19.480723],[148.177602,-19.955939],[148.848414,-20.39121],[148.717465,-20.633469],[149.28942,-21.260511],[149.678337,-22.342512],[150.077382,-22.122784],[150.482939,-22.556142],[150.727265,-22.402405],[150.899554,-23.462237],[151.609175,-24.076256],[152.07354,-24.457887],[152.855197,-25.267501],[153.136162,-26.071173],[153.161949,-26.641319],[153.092909,-27.2603],[153.569469,-28.110067],[153.512108,-28.995077],[153.339095,-29.458202],[153.069241,-30.35024],[153.089602,-30.923642],[152.891578,-31.640446],[152.450002,-32.550003],[151.709117,-33.041342],[151.343972,-33.816023],[151.010555,-34.31036],[150.714139,-35.17346],[150.32822,-35.671879],[150.075212,-36.420206],[149.946124,-37.109052],[149.997284,-37.425261],[149.423882,-37.772681],[148.304622,-37.809061],[147.381733,-38.219217],[146.922123,-38.606532],[146.317922,-39.035757],[145.489652,-38.593768],[144.876976,-38.417448],[145.032212,-37.896188],[144.485682,-38.085324],[143.609974,-38.809465],[142.745427,-38.538268],[142.17833,-38.380034],[141.606582,-38.308514],[140.638579,-38.019333],[139.992158,-37.402936],[139.806588,-36.643603],[139.574148,-36.138362],[139.082808,-35.732754],[138.120748,-35.612296],[138.449462,-35.127261],[138.207564,-34.384723],[137.71917,-35.076825],[136.829406,-35.260535],[137.352371,-34.707339],[137.503886,-34.130268],[137.890116,-33.640479],[137.810328,-32.900007],[136.996837,-33.752771],[136.372069,-34.094766],[135.989043,-34.890118],[135.208213,-34.47867],[135.239218,-33.947953],[134.613417,-33.222778],[134.085904,-32.848072],[134.273903,-32.617234],[132.990777,-32.011224],[132.288081,-31.982647],[131.326331,-31.495803],[129.535794,-31.590423],[128.240938,-31.948489],[127.102867,-32.282267],[126.148714,-32.215966],[125.088623,-32.728751],[124.221648,-32.959487],[124.028947,-33.483847],[123.659667,-33.890179],[122.811036,-33.914467],[122.183064,-34.003402],[121.299191,-33.821036],[120.580268,-33.930177],[119.893695,-33.976065],[119.298899,-34.509366],[119.007341,-34.464149],[118.505718,-34.746819],[118.024972,-35.064733],[117.295507,-35.025459],[116.625109,-35.025097],[115.564347,-34.386428],[115.026809,-34.196517],[115.048616,-33.623425],[115.545123,-33.487258],[115.714674,-33.259572],[115.679379,-32.900369],[115.801645,-32.205062],[115.689611,-31.612437],[115.160909,-30.601594],[114.997043,-30.030725],[115.040038,-29.461095],[114.641974,-28.810231],[114.616498,-28.516399],[114.173579,-28.118077],[114.048884,-27.334765],[113.477498,-26.543134],[113.338953,-26.116545],[113.778358,-26.549025],[113.440962,-25.621278],[113.936901,-25.911235],[114.232852,-26.298446],[114.216161,-25.786281],[113.721255,-24.998939],[113.625344,-24.683971],[113.393523,-24.384764],[113.502044,-23.80635],[113.706993,-23.560215],[113.843418,-23.059987],[113.736552,-22.475475],[114.149756,-21.755881],[114.225307,-22.517488],[114.647762,-21.82952],[115.460167,-21.495173],[115.947373,-21.068688],[116.711615,-20.701682],[117.166316,-20.623599],[117.441545,-20.746899],[118.229559,-20.374208],[118.836085,-20.263311],[118.987807,-20.044203],[119.252494,-19.952942],[119.805225,-19.976506],[120.85622,-19.683708],[121.399856,-19.239756],[121.655138,-18.705318],[122.241665,-18.197649],[122.286624,-17.798603],[122.312772,-17.254967],[123.012574,-16.4052],[123.433789,-17.268558],[123.859345,-17.069035],[123.503242,-16.596506],[123.817073,-16.111316],[124.258287,-16.327944],[124.379726,-15.56706],[124.926153,-15.0751],[125.167275,-14.680396],[125.670087,-14.51007],[125.685796,-14.230656],[126.125149,-14.347341],[126.142823,-14.095987],[126.582589,-13.952791],[127.065867,-13.817968],[127.804633,-14.276906],[128.35969,-14.86917],[128.985543,-14.875991],[129.621473,-14.969784],[129.4096,-14.42067],[129.888641,-13.618703],[130.339466,-13.357376],[130.183506,-13.10752],[130.617795,-12.536392],[131.223495,-12.183649],[131.735091,-12.302453],[132.575298,-12.114041],[132.557212,-11.603012],[131.824698,-11.273782],[132.357224,-11.128519],[133.019561,-11.376411],[133.550846,-11.786515],[134.393068,-12.042365],[134.678632,-11.941183],[135.298491,-12.248606],[135.882693,-11.962267],[136.258381,-12.049342],[136.492475,-11.857209],[136.95162,-12.351959],[136.685125,-12.887223],[136.305407,-13.29123],[135.961758,-13.324509],[136.077617,-13.724278],[135.783836,-14.223989],[135.428664,-14.715432],[135.500184,-14.997741],[136.295175,-15.550265],[137.06536,-15.870762],[137.580471,-16.215082],[138.303217,-16.807604],[138.585164,-16.806622],[139.108543,-17.062679],[139.260575,-17.371601],[140.215245,-17.710805],[140.875463,-17.369069],[141.07111,-16.832047],[141.274095,-16.38887],[141.398222,-15.840532],[141.702183,-15.044921],[141.56338,-14.561333],[141.63552,-14.270395],[141.519869,-13.698078],[141.65092,-12.944688],[141.842691,-12.741548],[141.68699,-12.407614],[141.928629,-11.877466],[142.118488,-11.328042],[142.143706,-11.042737],[142.51526,-10.668186],[142.79731,-11.157355],[142.866763,-11.784707],[143.115947,-11.90563],[143.158632,-12.325656],[143.522124,-12.834358],[143.597158,-13.400422],[143.561811,-13.763656]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[161.319797,-10.826367,162.398646,-10.204751],geometry:{type:"Polygon",coordinates:[[[162.119025,-10.482719],[162.398646,-10.826367],[161.700032,-10.820011],[161.319797,-10.204751],[161.917383,-10.446701],[162.119025,-10.482719]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[118.967808,-10.25865,120.775502,-9.36134],geometry:{type:"Polygon",coordinates:[[[120.715609,-10.239581],[120.295014,-10.25865],[118.967808,-9.557969],[119.90031,-9.36134],[120.425756,-9.665921],[120.775502,-9.969675],[120.715609,-10.239581]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[159.640003,-9.89521,160.852229,-9.24295],geometry:{type:"Polygon",coordinates:[[[160.852229,-9.872937],[160.462588,-9.89521],[159.849447,-9.794027],[159.640003,-9.63998],[159.702945,-9.24295],[160.362956,-9.400304],[160.688518,-9.610162],[160.852229,-9.872937]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[160.579997,-9.784312,161.679982,-8.320009],geometry:{type:"Polygon",coordinates:[[[161.679982,-9.599982],[161.529397,-9.784312],[160.788253,-8.917543],[160.579997,-8.320009],[160.920028,-8.320009],[161.280006,-9.120011],[161.679982,-9.599982]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[123.459989,-10.359987,127.335928,-8.273345],geometry:{type:"Polygon",coordinates:[[[124.43595,-10.140001],[123.579982,-10.359987],[123.459989,-10.239995],[123.550009,-9.900016],[123.980009,-9.290027],[124.968682,-8.89279],[125.086246,-8.656887],[125.947072,-8.432095],[126.644704,-8.398247],[126.957243,-8.273345],[127.335928,-8.397317],[126.967992,-8.668256],[125.925885,-9.106007],[125.08852,-9.393173],[124.43595,-10.140001]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[116.740141,-9.040895,119.126507,-8.095681],geometry:{type:"Polygon",coordinates:[[[117.900018,-8.095681],[118.260616,-8.362383],[118.87846,-8.280683],[119.126507,-8.705825],[117.970402,-8.906639],[117.277731,-9.040895],[116.740141,-9.032937],[117.083737,-8.457158],[117.632024,-8.449303],[117.900018,-8.095681]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[119.920929,-8.933666,122.903537,-8.094234],geometry:{type:"Polygon",coordinates:[[[122.903537,-8.094234],[122.756983,-8.649808],[121.254491,-8.933666],[119.924391,-8.810418],[119.920929,-8.444859],[120.715092,-8.236965],[121.341669,-8.53674],[122.007365,-8.46062],[122.903537,-8.094234]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[158.21115,-8.53829,159.917402,-7.320018],geometry:{type:"Polygon",coordinates:[[[159.875027,-8.33732],[159.917402,-8.53829],[159.133677,-8.114181],[158.586114,-7.754824],[158.21115,-7.421872],[158.359978,-7.320018],[158.820001,-7.560003],[159.640003,-8.020027],[159.875027,-8.33732]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[156.491358,-7.404767,157.538426,-6.599338],geometry:{type:"Polygon",coordinates:[[[157.538426,-7.34782],[157.33942,-7.404767],[156.90203,-7.176874],[156.491358,-6.765943],[156.542828,-6.599338],[157.14,-7.021638],[157.538426,-7.34782]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[105.365486,-8.751817,115.705527,-5.895919],geometry:{type:"Polygon",coordinates:[[[108.623479,-6.777674],[110.539227,-6.877358],[110.759576,-6.465186],[112.614811,-6.946036],[112.978768,-7.594213],[114.478935,-7.776528],[115.705527,-8.370807],[114.564511,-8.751817],[113.464734,-8.348947],[112.559672,-8.376181],[111.522061,-8.302129],[110.58615,-8.122605],[109.427667,-7.740664],[108.693655,-7.6416],[108.277763,-7.766657],[106.454102,-7.3549],[106.280624,-6.9249],[105.365486,-6.851416],[106.051646,-5.895919],[107.265009,-5.954985],[108.072091,-6.345762],[108.486846,-6.421985],[108.623479,-6.777674]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[134.112776,-6.895238,134.727002,-5.445042],geometry:{type:"Polygon",coordinates:[[[134.724624,-6.214401],[134.210134,-6.895238],[134.112776,-6.142467],[134.290336,-5.783058],[134.499625,-5.445042],[134.727002,-5.737582],[134.724624,-6.214401]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[154.514114,-6.919991,156.019965,-5.042431],geometry:{type:"Polygon",coordinates:[[[155.880026,-6.819997],[155.599991,-6.919991],[155.166994,-6.535931],[154.729192,-5.900828],[154.514114,-5.139118],[154.652504,-5.042431],[154.759991,-5.339984],[155.062918,-5.566792],[155.547746,-6.200655],[156.019965,-6.540014],[155.880026,-6.819997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[148.318937,-6.317754,152.338743,-4.14879],geometry:{type:"Polygon",coordinates:[[[151.982796,-5.478063],[151.459107,-5.56028],[151.30139,-5.840728],[150.754447,-6.083763],[150.241197,-6.317754],[149.709963,-6.316513],[148.890065,-6.02604],[148.318937,-5.747142],[148.401826,-5.437756],[149.298412,-5.583742],[149.845562,-5.505503],[149.99625,-5.026101],[150.139756,-5.001348],[150.236908,-5.53222],[150.807467,-5.455842],[151.089672,-5.113693],[151.647881,-4.757074],[151.537862,-4.167807],[152.136792,-4.14879],[152.338743,-4.312966],[152.318693,-4.867661],[151.982796,-5.478063]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[125.989034,-3.790983,127.249215,-3.129318],geometry:{type:"Polygon",coordinates:[[[127.249215,-3.459065],[126.874923,-3.790983],[126.183802,-3.607376],[125.989034,-3.177273],[127.000651,-3.129318],[127.249215,-3.459065]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[127.898891,-3.858472,130.834836,-2.802154],geometry:{type:"Polygon",coordinates:[[[130.471344,-3.093764],[130.834836,-3.858472],[129.990547,-3.446301],[129.155249,-3.362637],[128.590684,-3.428679],[127.898891,-3.393436],[128.135879,-2.84365],[129.370998,-2.802154],[130.471344,-3.093764]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[150.66205,-4.766427,153.140038,-2.500002],geometry:{type:"Polygon",coordinates:[[[153.140038,-4.499983],[152.827292,-4.766427],[152.638673,-4.176127],[152.406026,-3.789743],[151.953237,-3.462062],[151.384279,-3.035422],[150.66205,-2.741486],[150.939965,-2.500002],[151.479984,-2.779985],[151.820015,-2.999972],[152.239989,-3.240009],[152.640017,-3.659983],[153.019994,-3.980015],[153.140038,-4.499983]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[130.519558,-10.652476,150.801628,-.369538],geometry:{type:"Polygon",coordinates:[[[134.143368,-1.151867],[134.422627,-2.769185],[135.457603,-3.367753],[136.293314,-2.307042],[137.440738,-1.703513],[138.329727,-1.702686],[139.184921,-2.051296],[139.926684,-2.409052],[141.00021,-2.600151],[142.735247,-3.289153],[144.583971,-3.861418],[145.27318,-4.373738],[145.829786,-4.876498],[145.981922,-5.465609],[147.648073,-6.083659],[147.891108,-6.614015],[146.970905,-6.721657],[147.191874,-7.388024],[148.084636,-8.044108],[148.734105,-9.104664],[149.306835,-9.071436],[149.266631,-9.514406],[150.038728,-9.684318],[149.738798,-9.872937],[150.801628,-10.293687],[150.690575,-10.582713],[150.028393,-10.652476],[149.78231,-10.393267],[148.923138,-10.280923],[147.913018,-10.130441],[147.135443,-9.492444],[146.567881,-8.942555],[146.048481,-8.067414],[144.744168,-7.630128],[143.897088,-7.91533],[143.286376,-8.245491],[143.413913,-8.983069],[142.628431,-9.326821],[142.068259,-9.159596],[141.033852,-9.117893],[140.143415,-8.297168],[139.127767,-8.096043],[138.881477,-8.380935],[137.614474,-8.411683],[138.039099,-7.597882],[138.668621,-7.320225],[138.407914,-6.232849],[137.92784,-5.393366],[135.98925,-4.546544],[135.164598,-4.462931],[133.66288,-3.538853],[133.367705,-4.024819],[132.983956,-4.112979],[132.756941,-3.746283],[132.753789,-3.311787],[131.989804,-2.820551],[133.066845,-2.460418],[133.780031,-2.479848],[133.696212,-2.214542],[132.232373,-2.212526],[131.836222,-1.617162],[130.94284,-1.432522],[130.519558,-.93772],[131.867538,-.695461],[132.380116,-.369538],[133.985548,-.78021],[134.143368,-1.151867]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[118.767769,-5.6734,125.240501,1.643259],geometry:{type:"Polygon",coordinates:[[[125.240501,1.419836],[124.437035,.427881],[123.685505,.235593],[122.723083,.431137],[121.056725,.381217],[120.183083,.237247],[120.04087,-.519658],[120.935905,-1.408906],[121.475821,-.955962],[123.340565,-.615673],[123.258399,-1.076213],[122.822715,-.930951],[122.38853,-1.516858],[121.508274,-1.904483],[122.454572,-3.186058],[122.271896,-3.5295],[123.170963,-4.683693],[123.162333,-5.340604],[122.628515,-5.634591],[122.236394,-5.282933],[122.719569,-4.464172],[121.738234,-4.851331],[121.489463,-4.574553],[121.619171,-4.188478],[120.898182,-3.602105],[120.972389,-2.627643],[120.305453,-2.931604],[120.390047,-4.097579],[120.430717,-5.528241],[119.796543,-5.6734],[119.366906,-5.379878],[119.653606,-4.459417],[119.498835,-3.494412],[119.078344,-3.487022],[118.767769,-2.801999],[119.180974,-2.147104],[119.323394,-1.353147],[119.825999,.154254],[120.035702,.566477],[120.885779,1.309223],[121.666817,1.013944],[122.927567,.875192],[124.077522,.917102],[125.065989,1.643259],[125.240501,1.419836]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[127.39949,-.899996,128.688249,2.174596],geometry:{type:"Polygon",coordinates:[[[128.688249,1.132386],[128.635952,.258486],[128.12017,.356413],[127.968034,-.252077],[128.379999,-.780004],[128.100016,-.899996],[127.696475,-.266598],[127.39949,1.011722],[127.600512,1.810691],[127.932378,2.174596],[128.004156,1.628531],[128.594559,1.540811],[128.688249,1.132386]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[95.293026,-5.873285,106.108593,5.479821],geometry:{type:"Polygon",coordinates:[[[105.817655,-5.852356],[104.710384,-5.873285],[103.868213,-5.037315],[102.584261,-4.220259],[102.156173,-3.614146],[101.399113,-2.799777],[100.902503,-2.050262],[100.141981,-.650348],[99.26374,.183142],[98.970011,1.042882],[98.601351,1.823507],[97.699598,2.453184],[97.176942,3.308791],[96.424017,3.86886],[95.380876,4.970782],[95.293026,5.479821],[95.936863,5.439513],[97.484882,5.246321],[98.369169,4.26837],[99.142559,3.59035],[99.693998,3.174329],[100.641434,2.099381],[101.658012,2.083697],[102.498271,1.3987],[103.07684,.561361],[103.838396,.104542],[103.437645,-.711946],[104.010789,-1.059212],[104.369991,-1.084843],[104.53949,-1.782372],[104.887893,-2.340425],[105.622111,-2.428844],[106.108593,-3.061777],[105.857446,-4.305525],[105.817655,-5.852356]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[108.952658,-4.106984,119.181904,6.928053],geometry:{type:"Polygon",coordinates:[[[117.875627,1.827641],[118.996747,.902219],[117.811858,.784242],[117.478339,.102475],[117.521644,-.803723],[116.560048,-1.487661],[116.533797,-2.483517],[116.148084,-4.012726],[116.000858,-3.657037],[114.864803,-4.106984],[114.468652,-3.495704],[113.755672,-3.43917],[113.256994,-3.118776],[112.068126,-3.478392],[111.703291,-2.994442],[111.04824,-3.049426],[110.223846,-2.934032],[110.070936,-1.592874],[109.571948,-1.314907],[109.091874,-.459507],[108.952658,.415375],[109.069136,1.341934],[109.66326,2.006467],[110.396135,1.663775],[111.168853,1.850637],[111.370081,2.697303],[111.796928,2.885897],[112.995615,3.102395],[113.712935,3.893509],[114.204017,4.525874],[114.599961,4.900011],[115.45071,5.44773],[116.220741,6.143191],[116.725103,6.924771],[117.129626,6.928053],[117.643393,6.422166],[117.689075,5.98749],[118.347691,5.708696],[119.181904,5.407836],[119.110694,5.016128],[118.439727,4.966519],[118.618321,4.478202],[117.882035,4.137551],[117.313232,3.234428],[118.04833,2.28769],[117.875627,1.827641]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[121.919928,5.581003,126.537424,9.760335],geometry:{type:"Polygon",coordinates:[[[126.376814,8.414706],[126.478513,7.750354],[126.537424,7.189381],[126.196773,6.274294],[125.831421,7.293715],[125.363852,6.786485],[125.683161,6.049657],[125.396512,5.581003],[124.219788,6.161355],[123.93872,6.885136],[124.243662,7.36061],[123.610212,7.833527],[123.296071,7.418876],[122.825506,7.457375],[122.085499,6.899424],[121.919928,7.192119],[122.312359,8.034962],[122.942398,8.316237],[123.487688,8.69301],[123.841154,8.240324],[124.60147,8.514158],[124.764612,8.960409],[125.471391,8.986997],[125.412118,9.760335],[126.222714,9.286074],[126.306637,8.782487],[126.376814,8.414706]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[79.695167,5.96837,81.787959,9.824078],geometry:{type:"Polygon",coordinates:[[[81.21802,6.197141],[80.348357,5.96837],[79.872469,6.763463],[79.695167,8.200843],[80.147801,9.824078],[80.838818,9.268427],[81.304319,8.564206],[81.787959,7.523055],[81.637322,6.481775],[81.21802,6.197141]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-61.95,10,-60.895,10.89],geometry:{type:"Polygon",coordinates:[[[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[122.380055,9.022189,124.077936,11.232726],geometry:{type:"Polygon",coordinates:[[[123.982438,10.278779],[123.623183,9.950091],[123.309921,9.318269],[122.995883,9.022189],[122.380055,9.713361],[122.586089,9.981045],[122.837081,10.261157],[122.947411,10.881868],[123.49885,10.940624],[123.337774,10.267384],[124.077936,11.232726],[123.982438,10.278779]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[117.174275,8.3675,119.689677,11.369668],geometry:{type:"Polygon",coordinates:[[[118.504581,9.316383],[117.174275,8.3675],[117.664477,9.066889],[118.386914,9.6845],[118.987342,10.376292],[119.511496,11.369668],[119.689677,10.554291],[119.029458,10.003653],[118.504581,9.316383]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[121.883548,10.441017,123.120217,11.891755],geometry:{type:"Polygon",coordinates:[[[121.883548,11.891755],[122.483821,11.582187],[123.120217,11.58366],[123.100838,11.165934],[122.637714,10.741308],[122.00261,10.441017],[121.967367,10.905691],[122.03837,11.415841],[121.883548,11.891755]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[124.266762,10.134679,125.783465,12.557761],geometry:{type:"Polygon",coordinates:[[[125.502552,12.162695],[125.783465,11.046122],[125.011884,11.311455],[125.032761,10.975816],[125.277449,10.358722],[124.801819,10.134679],[124.760168,10.837995],[124.459101,10.88993],[124.302522,11.495371],[124.891013,11.415583],[124.87799,11.79419],[124.266762,12.557761],[125.227116,12.535721],[125.502552,12.162695]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[120.323436,12.20556,121.527394,13.466413],geometry:{type:"Polygon",coordinates:[[[121.527394,13.06959],[121.26219,12.20556],[120.833896,12.704496],[120.323436,13.466413],[121.180128,13.429697],[121.527394,13.06959]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[119.883773,12.536677,124.181289,18.505227],geometry:{type:"Polygon",coordinates:[[[121.321308,18.504065],[121.937601,18.218552],[122.246006,18.47895],[122.336957,18.224883],[122.174279,17.810283],[122.515654,17.093505],[122.252311,16.262444],[121.662786,15.931018],[121.50507,15.124814],[121.728829,14.328376],[122.258925,14.218202],[122.701276,14.336541],[123.950295,13.782131],[123.855107,13.237771],[124.181289,12.997527],[124.077419,12.536677],[123.298035,13.027526],[122.928652,13.55292],[122.671355,13.185836],[122.03465,13.784482],[121.126385,13.636687],[120.628637,13.857656],[120.679384,14.271016],[120.991819,14.525393],[120.693336,14.756671],[120.564145,14.396279],[120.070429,14.970869],[119.920929,15.406347],[119.883773,16.363704],[120.286488,16.034629],[120.390047,17.599081],[120.715867,18.505227],[121.321308,18.504065]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-67.242428,17.946553,-65.591004,18.520601],geometry:{type:"Polygon",coordinates:[[[-65.591004,18.228035],[-65.847164,17.975906],[-66.599934,17.981823],[-67.184162,17.946553],[-67.242428,18.37446],[-67.100679,18.520601],[-66.282434,18.514762],[-65.771303,18.426679],[-65.591004,18.228035]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-78.337719,17.701116,-76.199659,18.524218],geometry:{type:"Polygon",coordinates:[[[-76.902561,17.868238],[-77.206341,17.701116],[-77.766023,17.861597],[-78.337719,18.225968],[-78.217727,18.454533],[-77.797365,18.524218],[-77.569601,18.490525],[-76.896619,18.400867],[-76.365359,18.160701],[-76.199659,17.886867],[-76.902561,17.868238]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-74.458034,17.598564,-68.317943,19.915684],geometry:{type:"Polygon",coordinates:[[[-72.579673,19.871501],[-71.712361,19.714456],[-71.587304,19.884911],[-70.806706,19.880286],[-70.214365,19.622885],[-69.950815,19.648],[-69.76925,19.293267],[-69.222126,19.313214],[-69.254346,19.015196],[-68.809412,18.979074],[-68.317943,18.612198],[-68.689316,18.205142],[-69.164946,18.422648],[-69.623988,18.380713],[-69.952934,18.428307],[-70.133233,18.245915],[-70.517137,18.184291],[-70.669298,18.426886],[-70.99995,18.283329],[-71.40021,17.598564],[-71.657662,17.757573],[-71.708305,18.044997],[-72.372476,18.214961],[-72.844411,18.145611],[-73.454555,18.217906],[-73.922433,18.030993],[-74.458034,18.34255],[-74.369925,18.664908],[-73.449542,18.526053],[-72.694937,18.445799],[-72.334882,18.668422],[-72.79165,19.101625],[-72.784105,19.483591],[-73.415022,19.639551],[-73.189791,19.915684],[-72.579673,19.871501]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[108.626217,18.197701,111.010051,20.101254],geometry:{type:"Polygon",coordinates:[[[110.339188,18.678395],[109.47521,18.197701],[108.655208,18.507682],[108.626217,19.367888],[109.119056,19.821039],[110.211599,20.101254],[110.786551,20.077534],[111.010051,19.69593],[110.570647,19.255879],[110.339188,18.678395]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-156.07347,18.91619,-154.80741,20.26721],geometry:{type:"Polygon",coordinates:[[[-155.54211,19.08348],[-155.68817,18.91619],[-155.93665,19.05939],[-155.90806,19.33888],[-156.07347,19.70294],[-156.02368,19.81422],[-155.85008,19.97729],[-155.91907,20.17395],[-155.86108,20.26721],[-155.78505,20.2487],[-155.40214,20.07975],[-155.22452,19.99302],[-155.06226,19.8591],[-154.80741,19.50871],[-154.83147,19.45328],[-155.22217,19.23972],[-155.54211,19.08348]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-156.71055,20.57241,-155.99566,21.01249],geometry:{type:"Polygon",coordinates:[[[-156.07926,20.64397],[-156.41445,20.57241],[-156.58673,20.783],[-156.70167,20.8643],[-156.71055,20.92676],[-156.61258,21.01249],[-156.25711,20.91745],[-155.99566,20.76404],[-156.07926,20.64397]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-157.32521,21.06873,-156.75824,21.21958],geometry:{type:"Polygon",coordinates:[[[-156.75824,21.17684],[-156.78933,21.06873],[-157.32521,21.09777],[-157.25027,21.21958],[-156.75824,21.17684]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-158.29265,21.26442,-157.65283,21.71696],geometry:{type:"Polygon",coordinates:[[[-157.65283,21.32217],[-157.70703,21.26442],[-157.7786,21.27729],[-158.12667,21.31244],[-158.2538,21.53919],[-158.29265,21.57912],[-158.0252,21.71696],[-157.94161,21.65272],[-157.65283,21.32217]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-159.80051,21.88299,-159.34512,22.23618],geometry:{type:"Polygon",coordinates:[[[-159.34512,21.982],[-159.46372,21.88299],[-159.80051,22.06533],[-159.74877,22.1382],[-159.5962,22.23618],[-159.36569,22.21494],[-159.34512,21.982]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-84.974911,19.855481,-74.178025,23.188611],geometry:{type:"Polygon",coordinates:[[[-79.679524,22.765303],[-79.281486,22.399202],[-78.347434,22.512166],[-77.993296,22.277194],[-77.146422,21.657851],[-76.523825,21.20682],[-76.19462,21.220565],[-75.598222,21.016624],[-75.67106,20.735091],[-74.933896,20.693905],[-74.178025,20.284628],[-74.296648,20.050379],[-74.961595,19.923435],[-75.63468,19.873774],[-76.323656,19.952891],[-77.755481,19.855481],[-77.085108,20.413354],[-77.492655,20.673105],[-78.137292,20.739949],[-78.482827,21.028613],[-78.719867,21.598114],[-79.285,21.559175],[-80.217475,21.827324],[-80.517535,22.037079],[-81.820943,22.192057],[-82.169992,22.387109],[-81.795002,22.636965],[-82.775898,22.68815],[-83.494459,22.168518],[-83.9088,22.154565],[-84.052151,21.910575],[-84.54703,21.801228],[-84.974911,21.896028],[-84.447062,22.20495],[-84.230357,22.565755],[-83.77824,22.788118],[-83.267548,22.983042],[-82.510436,23.078747],[-82.268151,23.188611],[-81.404457,23.117271],[-80.618769,23.10598],[-79.679524,22.765303]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-78.40848,23.71,-77.53466,25.2103],geometry:{type:"Polygon",coordinates:[[[-77.53466,23.75975],[-77.78,23.71],[-78.03405,24.28615],[-78.40848,24.57564],[-78.19087,25.2103],[-77.89,25.17],[-77.54,24.34],[-77.53466,23.75975]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[120.106189,21.970571,121.951244,25.295459],geometry:{type:"Polygon",coordinates:[[[121.175632,22.790857],[120.74708,21.970571],[120.220083,22.814861],[120.106189,23.556263],[120.69468,24.538451],[121.495044,25.295459],[121.951244,24.997596],[121.777818,24.394274],[121.175632,22.790857]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-78.98,26.42,-77.82,26.87],geometry:{type:"Polygon",coordinates:[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-77.79,25.87918,-77,27.04],geometry:{type:"Polygon",coordinates:[[[-77,26.59],[-77.17255,25.87918],[-77.35641,26.00735],[-77.34,26.53],[-77.78802,26.92516],[-77.79,27.04],[-77,26.59]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[132.363115,32.704567,134.766379,34.364931],geometry:{type:"Polygon",coordinates:[[[134.638428,34.149234],[134.766379,33.806335],[134.203416,33.201178],[133.79295,33.521985],[133.280268,33.28957],[133.014858,32.704567],[132.363115,32.989382],[132.371176,33.463642],[132.924373,34.060299],[133.492968,33.944621],[133.904106,34.364931],[134.638428,34.149234]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[32.256667,34.571869,34.576474,35.671596],geometry:{type:"Polygon",coordinates:[[[34.576474,35.671596],[33.900804,35.245756],[33.973617,35.058506],[34.004881,34.978098],[32.979827,34.571869],[32.490296,34.701655],[32.256667,35.103232],[32.73178,35.140026],[32.802474,35.145504],[32.946961,35.386703],[33.667227,35.373216],[34.576474,35.671596]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[23.514978,34.919988,26.290003,35.705004],geometry:{type:"Polygon",coordinates:[[[23.69998,35.705004],[24.246665,35.368022],[25.025015,35.424996],[25.769208,35.354018],[25.745023,35.179998],[26.290003,35.29999],[26.164998,35.004995],[24.724982,34.919988],[24.735007,35.084991],[23.514978,35.279992],[23.69998,35.705004]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[12.431004,36.619987,15.520376,38.231155],geometry:{type:"Polygon",coordinates:[[[15.520376,38.231155],[15.160243,37.444046],[15.309898,37.134219],[15.099988,36.619987],[14.335229,36.996631],[13.826733,37.104531],[12.431004,37.61295],[12.570944,38.126381],[13.741156,38.034966],[14.761249,38.143874],[15.520376,38.231155]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[8.159998,38.906618,9.809975,41.209991],geometry:{type:"Polygon",coordinates:[[[9.210012,41.209991],[9.809975,40.500009],[9.669519,39.177376],[9.214818,39.240473],[8.806936,38.906618],[8.428302,39.171847],[8.388253,40.378311],[8.159998,40.950007],[8.709991,40.899984],[9.210012,41.209991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[129.408463,31.029579,141.914263,41.37856],geometry:{type:"Polygon",coordinates:[[[140.976388,37.142074],[140.59977,36.343983],[140.774074,35.842877],[140.253279,35.138114],[138.975528,34.6676],[137.217599,34.606286],[135.792983,33.464805],[135.120983,33.849071],[135.079435,34.596545],[133.340316,34.375938],[132.156771,33.904933],[130.986145,33.885761],[132.000036,33.149992],[131.33279,31.450355],[130.686318,31.029579],[130.20242,31.418238],[130.447676,32.319475],[129.814692,32.61031],[129.408463,33.296056],[130.353935,33.604151],[130.878451,34.232743],[131.884229,34.749714],[132.617673,35.433393],[134.608301,35.731618],[135.677538,35.527134],[136.723831,37.304984],[137.390612,36.827391],[138.857602,37.827485],[139.426405,38.215962],[140.05479,39.438807],[139.883379,40.563312],[140.305783,41.195005],[141.368973,41.37856],[141.914263,39.991616],[141.884601,39.180865],[140.959489,38.174001],[140.976388,37.142074]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[8.544213,41.380007,9.560016,43.009985],geometry:{type:"Polygon",coordinates:[[[9.560016,42.152492],[9.229752,41.380007],[8.775723,41.583612],[8.544213,42.256517],[8.746009,42.628122],[9.390001,43.009985],[9.560016,42.152492]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[139.817544,41.569556,145.543137,45.551483],geometry:{type:"Polygon",coordinates:[[[143.910162,44.1741],[144.613427,43.960883],[145.320825,44.384733],[145.543137,43.262088],[144.059662,42.988358],[143.18385,41.995215],[141.611491,42.678791],[141.067286,41.584594],[139.955106,41.569556],[139.817544,42.563759],[140.312087,43.333273],[141.380549,43.388825],[141.671952,44.772125],[141.967645,45.551483],[143.14287,44.510358],[143.910162,44.1741]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-64.39261,45.96818,-62.01208,47.03601],geometry:{type:"Polygon",coordinates:[[[-63.6645,46.55001],[-62.9393,46.41587],[-62.01208,46.44314],[-62.50391,46.03339],[-62.87433,45.96818],[-64.1428,46.39265],[-64.39261,46.72747],[-64.01486,47.03601],[-63.6645,46.55001]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-64.51912,49.08717,-61.806305,49.95718],geometry:{type:"Polygon",coordinates:[[[-61.806305,49.10506],[-62.29318,49.08717],[-63.58926,49.40069],[-64.51912,49.87304],[-64.17322,49.95718],[-62.85829,49.70641],[-61.835585,49.28855],[-61.806305,49.10506]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-128.444584,48.370846,-123.510002,50.770648],geometry:{type:"Polygon",coordinates:[[[-123.510002,48.510011],[-124.012891,48.370846],[-125.655013,48.825005],[-125.954994,49.179996],[-126.850004,49.53],[-127.029993,49.814996],[-128.059336,49.994959],[-128.444584,50.539138],[-128.358414,50.770648],[-127.308581,50.552574],[-126.695001,50.400903],[-125.755007,50.295018],[-125.415002,49.950001],[-124.920768,49.475275],[-123.922509,49.062484],[-123.510002,48.510011]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-59.419494,46.618292,-52.648099,51.632094],geometry:{type:"Polygon",coordinates:[[[-56.134036,50.68701],[-56.795882,49.812309],[-56.143105,50.150117],[-55.471492,49.935815],[-55.822401,49.587129],[-54.935143,49.313011],[-54.473775,49.556691],[-53.476549,49.249139],[-53.786014,48.516781],[-53.086134,48.687804],[-52.958648,48.157164],[-52.648099,47.535548],[-53.069158,46.655499],[-53.521456,46.618292],[-54.178936,46.807066],[-53.961869,47.625207],[-54.240482,47.752279],[-55.400773,46.884994],[-55.997481,46.91972],[-55.291219,47.389562],[-56.250799,47.632545],[-57.325229,47.572807],[-59.266015,47.603348],[-59.419494,47.899454],[-58.796586,48.251525],[-59.231625,48.523188],[-58.391805,49.125581],[-57.35869,50.718274],[-56.73865,51.287438],[-55.870977,51.632094],[-55.406974,51.588273],[-55.600218,51.317075],[-56.134036,50.68701]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-133.239664,52.180433,-131.179043,54.169975],geometry:{type:"Polygon",coordinates:[[[-132.710008,54.040009],[-132.710009,54.040009],[-132.710008,54.040009],[-132.710008,54.040009],[-131.74999,54.120004],[-132.04948,52.984621],[-131.179043,52.180433],[-131.57783,52.182371],[-132.180428,52.639707],[-132.549992,53.100015],[-133.054611,53.411469],[-133.239664,53.85108],[-133.180004,54.169975],[-132.710008,54.040009]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[141.594076,45.966755,144.654148,54.365881],geometry:{type:"Polygon",coordinates:[[[143.648007,50.7476],[144.654148,48.976391],[143.173928,49.306551],[142.558668,47.861575],[143.533492,46.836728],[143.505277,46.137908],[142.747701,46.740765],[142.09203,45.966755],[141.906925,46.805929],[142.018443,47.780133],[141.904445,48.859189],[142.1358,49.615163],[142.179983,50.952342],[141.594076,51.935435],[141.682546,53.301966],[142.606934,53.762145],[142.209749,54.225476],[142.654786,54.365881],[142.914616,53.704578],[143.260848,52.74076],[143.235268,51.75666],[143.648007,50.7476]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-9.977086,51.669301,-5.661949,55.17286],geometry:{type:"Polygon",coordinates:[[[-6.788857,52.260118],[-8.561617,51.669301],[-9.977086,51.820455],[-9.166283,52.864629],[-9.688525,53.881363],[-8.327987,54.664519],[-7.572168,55.131622],[-6.733847,55.17286],[-5.661949,54.554603],[-6.197885,53.867565],[-6.032985,53.153164],[-6.788857,52.260118]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[10.903914,54.800015,12.690006,56.111407],geometry:{type:"Polygon",coordinates:[[[12.690006,55.609991],[12.089991,54.800015],[11.043543,55.364864],[10.903914,55.779955],[12.370904,56.111407],[12.690006,55.609991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-154.670993,56.734677,-152.141147,57.968968],geometry:{type:"Polygon",coordinates:[[[-153.006314,57.115842],[-154.00509,56.734677],[-154.516403,56.992749],[-154.670993,57.461196],[-153.76278,57.816575],[-153.228729,57.968968],[-152.564791,57.901427],[-152.141147,57.591059],[-153.006314,57.115842]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-6.149981,49.96,1.681531,58.635],geometry:{type:"Polygon",coordinates:[[[-3.005005,58.635],[-4.073828,57.553025],[-3.055002,57.690019],[-1.959281,57.6848],[-2.219988,56.870017],[-3.119003,55.973793],[-2.085009,55.909998],[-1.114991,54.624986],[-.430485,54.464376],[.184981,53.325014],[.469977,52.929999],[1.681531,52.73952],[1.559988,52.099998],[1.050562,51.806761],[1.449865,51.289428],[.550334,50.765739],[-.787517,50.774989],[-2.489998,50.500019],[-2.956274,50.69688],[-3.617448,50.228356],[-4.542508,50.341837],[-5.245023,49.96],[-5.776567,50.159678],[-4.30999,51.210001],[-3.414851,51.426009],[-4.984367,51.593466],[-5.267296,51.9914],[-4.222347,52.301356],[-4.770013,52.840005],[-4.579999,53.495004],[-3.09208,53.404441],[-2.945009,53.985],[-3.630005,54.615013],[-4.844169,54.790971],[-5.082527,55.061601],[-4.719112,55.508473],[-5.047981,55.783986],[-5.586398,55.311146],[-5.644999,56.275015],[-6.149981,56.78501],[-5.786825,57.818848],[-5.009999,58.630013],[-4.211495,58.550845],[-3.005005,58.635]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-167.455277,59.754441,-165.579164,60.38417],geometry:{type:"Polygon",coordinates:[[[-165.579164,59.909987],[-166.19277,59.754441],[-166.848337,59.941406],[-167.455277,60.213069],[-166.467792,60.38417],[-165.67443,60.293607],[-165.579164,59.909987]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-80.36215,61.63308,-79.26582,62.3856],geometry:{type:"Polygon",coordinates:[[[-79.26582,62.158675],[-79.65752,61.63308],[-80.09956,61.7181],[-80.36215,62.01649],[-80.315395,62.085565],[-79.92939,62.3856],[-79.52002,62.36371],[-79.26582,62.158675]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-83.99367,62.15922,-81.87699,62.91409],geometry:{type:"Polygon",coordinates:[[[-81.89825,62.7108],[-83.06857,62.15922],[-83.77462,62.18231],[-83.99367,62.4528],[-83.25048,62.91409],[-81.87699,62.90458],[-81.89825,62.7108]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-171.791111,62.976931,-168.689439,63.782515],geometry:{type:"Polygon",coordinates:[[[-171.731657,63.782515],[-171.114434,63.592191],[-170.491112,63.694975],[-169.682505,63.431116],[-168.689439,63.297506],[-168.771941,63.188598],[-169.52944,62.976931],[-170.290556,63.194438],[-170.671386,63.375822],[-171.553063,63.317789],[-171.791111,63.405846],[-171.731657,63.782515]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-87.221983,63.052379,-80.103451,65.738778],geometry:{type:"Polygon",coordinates:[[[-85.161308,65.657285],[-84.975764,65.217518],[-84.464012,65.371772],[-83.882626,65.109618],[-82.787577,64.766693],[-81.642014,64.455136],[-81.55344,63.979609],[-80.817361,64.057486],[-80.103451,63.725981],[-80.99102,63.411246],[-82.547178,63.651722],[-83.108798,64.101876],[-84.100417,63.569712],[-85.523405,63.052379],[-85.866769,63.637253],[-87.221983,63.541238],[-86.35276,64.035833],[-86.224886,64.822917],[-85.883848,65.738778],[-85.161308,65.657285]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-24.326184,63.496383,-13.609732,66.526792],geometry:{type:"Polygon",coordinates:[[[-14.508695,66.455892],[-14.739637,65.808748],[-13.609732,65.126671],[-14.909834,64.364082],[-17.794438,63.678749],[-18.656246,63.496383],[-19.972755,63.643635],[-22.762972,63.960179],[-21.778484,64.402116],[-23.955044,64.89113],[-22.184403,65.084968],[-22.227423,65.378594],[-24.326184,65.611189],[-23.650515,66.262519],[-22.134922,66.410469],[-20.576284,65.732112],[-19.056842,66.276601],[-17.798624,65.993853],[-16.167819,66.526792],[-14.508695,66.455892]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-77.2364,67.09873,-75.10333,68.28721],geometry:{type:"Polygon",coordinates:[[[-75.86588,67.14886],[-76.98687,67.09873],[-77.2364,67.58809],[-76.81166,68.14856],[-75.89521,68.28721],[-75.1145,68.01036],[-75.10333,67.58202],[-75.21597,67.44425],[-75.86588,67.14886]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,64.25269,-169.89958,68.963636],geometry:{type:"Polygon",coordinates:[[[-175.01425,66.58435],[-174.33983,66.33556],[-174.57182,67.06219],[-171.85731,66.91308],[-169.89958,65.97724],[-170.89107,65.54139],[-172.53025,65.43791],[-172.555,64.46079],[-172.95533,64.25269],[-173.89184,64.2826],[-174.65392,64.63125],[-175.98353,64.92288],[-176.20716,65.35667],[-177.22266,65.52024],[-178.35993,65.39052],[-178.90332,65.74044],[-178.68611,66.11211],[-179.88377,65.87456],[-179.43268,65.40411],[-180,64.979709],[-180,68.963636],[-177.55,68.2],[-174.92825,67.20589],[-175.01425,66.58435]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-99.797401,68.75704,-95.647681,70.14354],geometry:{type:"Polygon",coordinates:[[[-95.647681,69.10769],[-96.269521,68.75704],[-97.617401,69.06003],[-98.431801,68.9507],[-99.797401,69.40003],[-98.917401,69.71003],[-98.218261,70.14354],[-97.157401,69.86003],[-96.557401,69.68003],[-96.257401,69.49003],[-95.647681,69.10769]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[178.7253,70.78114,180,71.515714],geometry:{type:"Polygon",coordinates:[[[180,70.832199],[178.903425,70.78114],[178.7253,71.0988],[180,71.515714],[180,70.832199]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,70.832199,-177.577945,71.55762],geometry:{type:"Polygon",coordinates:[[[-178.69378,70.89302],[-180,70.832199],[-180,71.515714],[-179.871875,71.55762],[-179.02433,71.55553],[-177.577945,71.26948],[-177.663575,71.13277],[-178.69378,70.89302]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-168.110474,-53.856384,-34.72998,71.920471],geometry:{type:"Polygon",coordinates:[[[-90.547119,69.497681],[-90.551514,68.475098],[-89.215088,69.258728],[-88.019592,68.615112],[-88.317505,67.873474],[-87.350098,67.19873],[-86.306091,67.921509],[-85.576599,68.784485],[-85.521912,69.88208],[-84.100769,69.805481],[-82.622498,69.658325],[-81.280396,69.162109],[-81.220215,68.66571],[-81.964294,68.132507],[-81.259277,67.59729],[-81.386475,67.110901],[-83.344482,66.411682],[-84.735413,66.257324],[-85.769409,66.558289],[-86.067627,66.056274],[-87.031372,65.213074],[-87.323181,64.775696],[-88.48291,64.099121],[-89.914429,64.032715],[-90.703979,63.610291],[-90.77002,62.960327],[-91.933411,62.835083],[-93.156982,62.024719],[-94.241516,60.898682],[-94.629272,60.110291],[-94.684509,58.948914],[-93.215027,58.782104],[-92.764587,57.845703],[-92.296997,57.087097],[-90.897705,57.284729],[-89.03949,56.851685],[-88.039795,56.47168],[-87.324219,55.999084],[-86.071228,55.723877],[-85.01178,55.302673],[-83.360474,55.244873],[-82.272827,55.148315],[-82.436218,54.282288],[-82.125,53.2771],[-81.400696,52.157898],[-79.912903,51.208496],[-79.143005,51.533875],[-78.601929,52.562073],[-79.124207,54.141479],[-79.82959,54.667725],[-78.228699,55.136475],[-77.095581,55.837524],[-76.541382,56.534302],[-76.623108,57.202698],[-77.302185,58.052124],[-78.516907,58.804688],[-77.33667,59.852722],[-77.772705,60.757874],[-78.106812,62.319702],[-77.410583,62.550476],[-75.696228,62.278503],[-74.668213,62.181091],[-73.839905,62.443909],[-72.908508,62.105103],[-71.677002,61.52533],[-71.373718,61.137085],[-69.590393,61.061523],[-69.6203,60.221313],[-69.287903,58.957275],[-68.374512,58.801086],[-67.64978,58.212097],[-66.201782,58.767273],[-65.245178,59.870728],[-64.583496,60.335693],[-63.804687,59.442688],[-62.50238,58.167114],[-61.396484,56.967529],[-61.798584,56.339478],[-60.468506,55.775513],[-59.56958,55.204102],[-57.975098,54.945496],[-57.333191,54.626526],[-56.93689,53.780273],[-56.158081,53.647522],[-55.756287,53.270508],[-55.683289,52.146729],[-56.40918,51.770691],[-57.126892,51.419678],[-58.77478,51.06427],[-60.033081,50.24292],[-61.723572,50.080505],[-63.862488,50.291077],[-65.363281,50.298279],[-66.398987,50.228882],[-67.236328,49.511475],[-68.511108,49.068481],[-69.953613,47.744873],[-71.104492,46.821716],[-70.255188,46.986084],[-68.650024,48.30011],[-66.552429,49.133118],[-65.056213,49.23291],[-64.171021,48.742493],[-65.115479,48.070923],[-64.798523,46.993103],[-64.472107,46.238525],[-63.173279,45.739075],[-61.520691,45.883911],[-60.518127,47.007874],[-60.448608,46.282715],[-59.802795,45.920471],[-61.039795,45.26532],[-63.2547,44.670288],[-64.246582,44.265503],[-65.364075,43.545288],[-66.123413,43.618713],[-66.161682,44.465088],[-64.425476,45.292114],[-66.026001,45.259277],[-67.13739,45.137512],[-66.9646,44.809692],[-68.032471,44.325317],[-69.059998,43.980103],[-70.116089,43.684082],[-70.690002,43.03009],[-70.81488,42.865295],[-70.825012,42.335083],[-70.494995,41.805115],[-70.080017,41.78009],[-70.184998,42.145081],[-69.884888,41.922913],[-69.965027,41.637085],[-70.640015,41.475098],[-71.1203,41.494507],[-71.859985,41.320129],[-72.294983,41.270081],[-72.876404,41.220703],[-73.710022,40.931091],[-72.241211,41.119507],[-71.945007,40.930115],[-73.34491,40.630127],[-73.981995,40.628113],[-73.952271,40.750671],[-74.256714,40.473511],[-73.962402,40.427673],[-74.178406,39.70929],[-74.906006,38.939514],[-74.980408,39.196472],[-75.200012,39.248474],[-75.528076,39.498474],[-75.320007,38.960083],[-75.083496,38.781311],[-75.056702,38.404114],[-75.37738,38.015503],[-75.940186,37.216919],[-76.031189,37.256714],[-75.721985,37.937073],[-76.232788,38.319275],[-76.349976,39.150085],[-76.542725,38.717712],[-76.329285,38.083313],[-76.960022,38.23291],[-76.301575,37.918091],[-76.258728,36.966492],[-75.971802,36.897278],[-75.867981,36.551331],[-75.727478,35.55072],[-76.363098,34.808472],[-77.397583,34.512085],[-78.054871,33.925476],[-78.554321,33.861328],[-79.060608,33.49408],[-79.203491,33.158508],[-80.30127,32.509277],[-80.86499,32.033325],[-81.336304,31.440491],[-81.490417,30.730103],[-81.313721,30.035522],[-80.97998,29.180115],[-80.535583,28.472107],[-80.530029,28.0401],[-80.056519,26.880127],[-80.088013,26.205688],[-80.13147,25.816895],[-80.380981,25.206299],[-80.679993,25.080078],[-81.172119,25.201294],[-81.330017,25.640076],[-81.710022,25.870117],[-82.23999,26.730103],[-82.705078,27.495117],[-82.855286,27.886292],[-82.650024,28.55011],[-82.929993,29.100098],[-83.709595,29.936707],[-84.099976,30.090088],[-85.108826,29.636292],[-85.287781,29.686096],[-85.77301,30.15271],[-86.400024,30.400085],[-87.530273,30.274475],[-88.417786,30.384888],[-89.180481,30.316101],[-89.604919,30.176331],[-89.413696,29.894287],[-89.429993,29.488708],[-89.21759,29.291077],[-89.408203,29.159729],[-89.779297,29.307129],[-90.154602,29.117493],[-90.880188,29.148682],[-91.626709,29.677124],[-92.499084,29.552307],[-93.226379,29.783875],[-93.848389,29.713684],[-94.690002,29.480103],[-95.600281,28.738708],[-96.593994,28.307495],[-97.140015,27.830078],[-97.369995,27.380127],[-97.380005,26.690125],[-97.330017,26.210083],[-97.140198,25.869507],[-97.138611,25.86792],[-97.141785,25.865906],[-97.528076,24.992126],[-97.702881,24.272278],[-97.776001,22.932678],[-97.872375,22.444275],[-97.698975,21.898682],[-97.388977,21.411072],[-97.18927,20.635498],[-96.525513,19.89093],[-96.292114,19.320496],[-95.900879,18.828125],[-94.838989,18.562683],[-94.42572,18.144287],[-93.548584,18.423889],[-92.786072,18.524902],[-92.037292,18.704712],[-91.407898,18.876099],[-90.77179,19.284119],[-90.533508,19.867493],[-90.451477,20.70752],[-90.278625,20.999878],[-89.601318,21.261719],[-88.543884,21.493713],[-87.658386,21.458923],[-87.05188,21.543518],[-86.812012,21.331482],[-86.845886,20.849915],[-87.383301,20.255493],[-87.620972,19.646484],[-87.436707,19.472473],[-87.586487,19.0401],[-87.837219,18.259888],[-88.090576,18.516724],[-88.299988,18.500122],[-88.296326,18.353271],[-88.106812,18.348694],[-88.123413,18.076721],[-88.285278,17.644287],[-88.197876,17.489502],[-88.302612,17.131714],[-88.239502,17.036072],[-88.355408,16.530884],[-88.551819,16.265503],[-88.732422,16.233704],[-88.930603,15.887329],[-88.604614,15.706482],[-88.518311,15.85553],[-88.224976,15.727722],[-88.121094,15.688721],[-87.901794,15.864502],[-87.615601,15.878906],[-87.522888,15.797302],[-87.367676,15.846924],[-86.903198,15.756714],[-86.440918,15.782898],[-86.119202,15.893494],[-86.001892,16.005493],[-85.683289,15.953674],[-85.44397,15.885681],[-85.182373,15.909302],[-84.983704,15.995911],[-84.526978,15.8573],[-84.368225,15.835083],[-84.062988,15.648315],[-83.773987,15.424072],[-83.4104,15.270874],[-83.147217,14.995911],[-83.233215,14.899902],[-83.28418,14.676697],[-83.182129,14.31073],[-83.412476,13.970093],[-83.519775,13.567688],[-83.552185,13.127075],[-83.498474,12.869324],[-83.473328,12.419128],[-83.626099,12.320923],[-83.719604,11.893127],[-83.650879,11.629089],[-83.855408,11.373291],[-83.808899,11.103088],[-83.655579,10.938904],[-83.402283,10.395508],[-83.015686,9.993103],[-82.546204,9.566284],[-82.187073,9.20752],[-82.207581,8.995728],[-81.808594,8.950684],[-81.714111,9.032104],[-81.439209,8.786316],[-80.947327,8.858521],[-80.521912,9.111084],[-79.914612,9.312683],[-79.573303,9.611694],[-79.021179,9.552917],[-79.058411,9.454712],[-78.500916,9.420471],[-78.055908,9.247681],[-77.729492,8.946899],[-77.353271,8.670471],[-76.836609,8.638672],[-76.086304,9.336914],[-75.674622,9.443298],[-75.664673,9.774109],[-75.480408,10.61908],[-74.906921,11.08313],[-74.276672,11.102112],[-74.197205,11.310486],[-73.414673,11.227112],[-72.627808,11.732117],[-72.23822,11.955688],[-71.754089,12.437317],[-71.39978,12.376099],[-71.13739,12.113098],[-71.331604,11.776306],[-71.359985,11.5401],[-71.947021,11.423279],[-71.620789,10.969482],[-71.632996,10.446472],[-72.074097,9.865723],[-71.695618,9.072327],[-71.264587,9.137329],[-71.039978,9.860107],[-71.350098,10.211914],[-71.400574,10.969116],[-70.155212,11.375488],[-70.293823,11.846924],[-69.943176,12.162292],[-69.58429,11.459717],[-68.882996,11.443481],[-68.233276,10.885681],[-68.194092,10.554688],[-67.296204,10.545898],[-66.227783,10.648682],[-65.655212,10.200928],[-64.890381,10.077271],[-64.329407,10.389709],[-64.317993,10.641479],[-63.079285,10.701721],[-61.88092,10.715698],[-62.730103,10.420288],[-62.388489,9.948303],[-61.588684,9.873108],[-60.830505,9.381287],[-60.671204,8.580322],[-60.150085,8.602905],[-59.758301,8.367126],[-59.101685,7.999329],[-58.48291,7.347717],[-58.454895,6.832886],[-58.078125,6.809082],[-57.542175,6.321289],[-57.1474,5.973083],[-55.94928,5.772888],[-55.841797,5.953125],[-55.033203,6.02533],[-53.958008,5.756531],[-53.618408,5.646484],[-52.88208,5.409912],[-51.823303,4.565918],[-51.657776,4.156311],[-51.317078,4.203491],[-51.069702,3.650513],[-50.508789,1.901489],[-49.973999,1.736511],[-49.947083,1.046326],[-50.69928,.223083],[-50.388184,-.078369],[-48.620483,-.235413],[-48.584412,-1.237793],[-47.82489,-.581604],[-46.566589,-.940979],[-44.905701,-1.551697],[-44.417603,-2.137695],[-44.581604,-2.691284],[-43.418701,-2.383118],[-41.472595,-2.911987],[-39.978577,-2.872986],[-38.500305,-3.700623],[-37.223206,-4.820923],[-36.452881,-5.109375],[-35.597778,-5.149475],[-35.235413,-5.464905],[-34.895996,-6.73822],[-34.72998,-7.343201],[-35.128174,-8.996399],[-35.636902,-9.649292],[-37.046509,-11.04071],[-37.683594,-12.171204],[-38.423889,-13.038086],[-38.673889,-13.057678],[-38.953186,-13.793396],[-38.882324,-15.666992],[-39.161011,-17.208374],[-39.267273,-17.867676],[-39.583496,-18.262207],[-39.760803,-19.599121],[-40.774719,-20.90448],[-40.944702,-21.937317],[-41.754089,-22.370605],[-41.988281,-22.970093],[-43.074707,-22.967712],[-44.647827,-23.35199],[-45.352112,-23.796814],[-46.472107,-24.088989],[-47.648987,-24.885193],[-48.495483,-25.877014],[-48.640991,-26.623718],[-48.47467,-27.175903],[-48.661499,-28.186096],[-48.888428,-28.674072],[-49.58728,-29.224487],[-50.696899,-30.984375],[-51.576172,-31.77771],[-52.256104,-32.2453],[-52.712097,-33.196594],[-53.373596,-33.768311],[-53.806396,-34.39679],[-54.935791,-34.952576],[-55.674011,-34.752686],[-56.21521,-34.859802],[-57.139709,-34.430481],[-57.81781,-34.462524],[-58.427002,-33.909485],[-58.495422,-34.431519],[-57.225769,-35.288025],[-57.362305,-35.977417],[-56.737488,-36.413086],[-56.788208,-36.901489],[-57.749084,-38.183899],[-59.231812,-38.720215],[-61.237427,-38.928406],[-62.335876,-38.827698],[-62.125793,-39.424072],[-62.330505,-40.172607],[-62.145996,-40.67688],[-62.745789,-41.028687],[-63.770508,-41.166809],[-64.732117,-40.802612],[-65.117981,-41.06427],[-64.978577,-42.057983],[-64.303406,-42.359009],[-63.75592,-42.043701],[-63.458008,-42.56311],[-64.378784,-42.873474],[-65.181824,-43.4953],[-65.328796,-44.501282],[-65.565186,-45.036804],[-66.509888,-45.039612],[-67.293823,-45.55188],[-67.580505,-46.301697],[-66.596985,-47.033875],[-65.640991,-47.236084],[-65.985107,-48.133301],[-67.166199,-48.697327],[-67.816101,-49.86969],[-68.728699,-50.264221],[-69.138489,-50.732483],[-68.815491,-51.771118],[-68.150024,-52.349976],[-68.571472,-52.299377],[-69.461304,-52.29187],[-69.942688,-52.537903],[-70.845093,-52.89917],[-71.006287,-53.833191],[-71.42981,-53.856384],[-72.557922,-53.531372],[-73.702698,-52.835083],[-74.946777,-52.262695],[-75.26001,-51.629272],[-74.976624,-51.043396],[-75.479675,-50.378296],[-75.607971,-48.673706],[-75.182678,-47.711914],[-74.126587,-46.939209],[-75.644409,-46.647583],[-74.692078,-45.763977],[-74.351685,-44.103027],[-73.240295,-44.454895],[-72.717712,-42.383301],[-73.388916,-42.117493],[-73.701294,-43.365784],[-74.331909,-43.224976],[-74.017883,-41.7948],[-73.677124,-39.9422],[-73.21759,-39.258606],[-73.505493,-38.282898],[-73.588013,-37.156311],[-73.166687,-37.123779],[-72.553101,-35.508789],[-71.861694,-33.909119],[-71.438477,-32.418884],[-71.668701,-30.920593],[-71.369995,-30.095703],[-71.489807,-28.861389],[-70.90509,-27.640381],[-70.724976,-25.705872],[-70.403992,-23.628906],[-70.091187,-21.393311],[-70.164429,-19.756409],[-70.372498,-18.3479],[-71.375183,-17.773804],[-71.461975,-17.363403],[-73.444519,-16.359375],[-75.237793,-15.265686],[-76.009216,-14.649292],[-76.423401,-13.823181],[-76.259216,-13.534973],[-77.106201,-12.222717],[-78.092102,-10.377686],[-79.036926,-8.386597],[-79.445923,-7.930786],[-79.760498,-7.194275],[-80.537476,-6.541687],[-81.25,-6.13678],[-80.92627,-5.690491],[-81.410889,-4.736694],[-81.099609,-4.036377],[-80.30249,-3.404785],[-79.770203,-2.657471],[-79.986511,-2.220703],[-80.368713,-2.685181],[-80.967712,-2.246887],[-80.764771,-1.965027],[-80.933594,-1.057373],[-80.583313,-.906677],[-80.399292,-.283691],[-80.020813,.360474],[-80.090576,.768494],[-79.542786,.98291],[-78.855286,1.38092],[-78.990906,1.691284],[-78.617798,1.766479],[-78.662109,2.267273],[-78.427612,2.6297],[-77.931519,2.696716],[-77.510376,3.325073],[-77.127686,3.84967],[-77.496277,4.087708],[-77.307617,4.668091],[-77.533203,5.582886],[-77.318787,5.845276],[-77.476685,6.691101],[-77.881592,7.223877],[-78.214905,7.512329],[-78.429077,8.052124],[-78.182007,8.319275],[-78.435486,8.387695],[-78.62207,8.718079],[-79.1203,8.996094],[-79.5578,8.932495],[-79.760498,8.584473],[-80.16449,8.333313],[-80.382629,8.298523],[-80.480713,8.090271],[-80.003601,7.547485],[-80.276611,7.419678],[-80.421082,7.271484],[-80.886414,7.22052],[-81.059509,7.817871],[-81.189697,7.647888],[-81.51947,7.706726],[-81.721313,8.108887],[-82.131409,8.175476],[-82.390869,8.29248],[-82.820007,8.290894],[-82.850891,8.073914],[-82.965698,8.225098],[-83.508423,8.446899],[-83.711487,8.656921],[-83.596313,8.830505],[-83.632629,9.051514],[-83.909912,9.290894],[-84.303406,9.487488],[-84.647583,9.615479],[-84.713379,9.908081],[-84.975586,10.086731],[-84.911377,9.796082],[-85.110901,9.557129],[-85.339478,9.834473],[-85.660706,9.933289],[-85.797424,10.134888],[-85.791687,10.43927],[-85.659302,10.754272],[-85.941711,10.895325],[-85.712524,11.088501],[-86.058411,11.403503],[-86.525879,11.806885],[-86.745911,12.144104],[-87.16748,12.458313],[-87.668518,12.909912],[-87.557495,13.064697],[-87.392395,12.914124],[-87.316589,12.98468],[-87.48938,13.297485],[-87.793091,13.384521],[-87.904114,13.149109],[-88.483276,13.163879],[-88.843201,13.259705],[-89.256714,13.458679],[-89.812378,13.520691],[-90.095581,13.735474],[-90.608582,13.909912],[-91.232422,13.927917],[-91.689697,14.126282],[-92.227722,14.538879],[-93.359375,15.615479],[-93.875183,15.940308],[-94.691589,16.201111],[-95.250183,16.128296],[-96.053406,15.752075],[-96.557373,15.653503],[-97.263611,15.917114],[-98.013,16.1073],[-98.947693,16.566101],[-99.697388,16.706299],[-100.829529,17.171082],[-101.666077,17.649109],[-101.918518,17.916077],[-102.478088,17.975891],[-103.500977,18.292297],[-103.91748,18.748718],[-104.992004,19.316284],[-105.492981,19.946899],[-105.731384,20.434082],[-105.397705,20.531677],[-105.50061,20.816895],[-105.270691,21.076294],[-105.265808,21.422119],[-105.603088,21.871277],[-105.69342,22.269104],[-106.028687,22.773682],[-106.909912,23.767883],[-107.915405,24.548889],[-108.401917,25.172302],[-109.260193,25.580688],[-109.444092,25.82489],[-109.291626,26.442871],[-109.801392,26.676086],[-110.391724,27.162109],[-110.640991,27.859924],[-111.178894,27.941284],[-111.759583,28.468079],[-112.22821,28.954529],[-112.27179,29.266907],[-112.809509,30.021118],[-113.163818,30.786926],[-113.148682,31.171082],[-113.871887,31.567688],[-114.205688,31.524109],[-114.776428,31.799683],[-114.936707,31.393494],[-114.771179,30.913696],[-114.673889,30.16272],[-114.330994,29.750488],[-113.588806,29.061707],[-113.424011,28.826294],[-113.271912,28.754883],[-113.140015,28.411316],[-112.96228,28.425293],[-112.761597,27.780273],[-112.457886,27.525879],[-112.244873,27.171875],[-111.616516,26.662903],[-111.284607,25.732727],[-110.987793,25.294678],[-110.710022,24.826111],[-110.655029,24.298706],[-110.172791,24.265686],[-109.77179,23.811279],[-109.409119,23.364685],[-109.433411,23.18573],[-109.854187,22.818298],[-110.031311,22.82312],[-110.294983,23.431091],[-110.949524,24.001099],[-111.670593,24.484497],[-112.182007,24.738525],[-112.148987,25.470276],[-112.30072,26.012085],[-112.777283,26.322083],[-113.4646,26.768311],[-113.59668,26.639526],[-113.848877,26.900085],[-114.465698,27.14209],[-115.055115,27.722717],[-114.982178,27.798279],[-114.570312,27.741516],[-114.19928,28.115112],[-114.161987,28.566101],[-114.931824,29.27948],[-115.518677,29.556274],[-115.88739,30.180908],[-116.258301,30.836487],[-116.721497,31.635681],[-117.127686,32.535278],[-117.295898,33.046326],[-117.943909,33.621277],[-118.410583,33.740906],[-118.519897,34.027893],[-119.080994,34.078125],[-119.438782,34.348511],[-120.367798,34.447083],[-120.622803,34.608521],[-120.744324,35.156921],[-121.7146,36.161682],[-122.547485,37.55188],[-122.512024,37.783508],[-122.953186,38.113708],[-123.727112,38.951721],[-123.865112,39.76709],[-124.39801,40.313293],[-124.178772,41.14209],[-124.213684,41.999695],[-124.532776,42.766113],[-124.14209,43.708496],[-123.898926,45.523499],[-124.07959,46.864685],[-124.395691,47.720276],[-124.687195,48.184509],[-124.566101,48.3797],[-123.119995,48.0401],[-122.58728,47.09613],[-122.340027,47.360107],[-122.5,48.180115],[-122.840027,49.000122],[-122.974182,49.002686],[-124.910217,49.98468],[-125.624573,50.416687],[-127.435608,50.830688],[-127.992676,51.715881],[-127.850281,52.329712],[-129.1297,52.755493],[-129.305176,53.561707],[-130.514893,54.28772],[-130.536072,54.802673],[-131.085815,55.178894],[-131.967224,55.497925],[-132.25,56.370117],[-133.539185,57.178894],[-134.078003,58.123108],[-135.038208,58.187683],[-136.627991,58.21228],[-137.799988,58.500122],[-139.867798,59.537903],[-140.825195,59.727478],[-142.574402,60.084473],[-143.958801,59.999329],[-145.925476,60.458679],[-147.11438,60.884705],[-148.224304,60.673096],[-148.018005,59.978271],[-148.570801,59.914307],[-149.727783,59.705688],[-150.608215,59.368286],[-151.716309,59.155884],[-151.859375,59.745117],[-151.409729,60.725891],[-150.346924,61.033691],[-150.621094,61.284485],[-151.895813,60.727295],[-152.578308,60.061707],[-154.019104,59.350281],[-153.287476,58.864685],[-154.232483,58.146484],[-155.307495,57.727905],[-156.308289,57.422913],[-156.556091,56.980103],[-158.117187,56.463684],[-158.433289,55.99408],[-159.603271,55.566711],[-160.289673,55.643677],[-161.223022,55.364685],[-162.237793,55.024292],[-163.069397,54.68988],[-164.785583,54.404297],[-164.9422,54.572327],[-163.848328,55.03949],[-162.869995,55.348083],[-161.804199,55.895081],[-160.563599,56.008118],[-160.070496,56.418091],[-158.684387,57.016724],[-158.461121,57.216919],[-157.722778,57.570129],[-157.550293,58.328308],[-157.041687,58.918884],[-158.194702,58.615906],[-158.517212,58.787903],[-159.058594,58.424316],[-159.711609,58.931519],[-159.981201,58.572693],[-160.355286,59.071106],[-161.35498,58.670898],[-161.968811,58.671692],[-162.054993,59.266907],[-161.874084,59.633728],[-162.518005,59.989685],[-163.818298,59.798096],[-164.66217,60.267517],[-165.346375,60.507507],[-165.350769,61.073914],[-166.121399,61.500122],[-165.734375,62.075073],[-164.919189,62.633118],[-164.5625,63.146484],[-163.753296,63.219482],[-163.0672,63.059509],[-162.260498,63.54187],[-161.534424,63.455872],[-160.772522,63.766113],[-160.958313,64.2229],[-161.518005,64.402893],[-160.77771,64.788696],[-161.391907,64.777283],[-162.453003,64.559509],[-162.757813,64.338684],[-163.546387,64.559082],[-164.960815,64.447083],[-166.425293,64.686707],[-166.844971,65.088928],[-168.110474,65.670105],[-166.7052,66.088318],[-164.47467,66.576721],[-163.652527,66.576721],[-163.788513,66.077271],[-161.677795,66.116089],[-162.489685,66.735474],[-163.719727,67.116516],[-164.430908,67.616272],[-165.390198,68.042908],[-166.764404,68.358887],[-166.204712,68.883118],[-164.430786,68.915527],[-163.168579,69.371094],[-162.930481,69.858093],[-161.908875,70.333313],[-160.934814,70.447693],[-159.039185,70.891724],[-158.11969,70.824707],[-156.580811,71.35791],[-155.06781,71.147888],[-154.344177,70.696472],[-153.900024,70.890076],[-152.210022,70.830078],[-152.27002,70.600098],[-150.73999,70.430115],[-149.719971,70.53009],[-147.613281,70.214111],[-145.690002,70.120117],[-144.919983,69.990112],[-143.589417,70.152527],[-142.07251,69.851929],[-140.985901,69.712097],[-139.120483,69.47113],[-137.546387,68.990112],[-136.503601,68.898071],[-135.625671,69.315125],[-134.414612,69.627502],[-132.929199,69.50531],[-131.431274,69.944519],[-129.794678,70.193726],[-129.107727,69.779297],[-128.361511,70.012878],[-128.138184,70.483887],[-127.447083,70.377319],[-125.756287,69.480713],[-124.424805,70.158508],[-124.289612,69.399719],[-123.061096,69.563721],[-122.683411,69.85553],[-121.47229,69.797913],[-119.94281,69.37793],[-117.6026,69.011292],[-116.226379,68.841492],[-115.246887,68.905884],[-113.897888,68.398926],[-115.30481,67.90271],[-113.497192,67.688293],[-110.797913,67.806091],[-109.946106,67.981079],[-108.880188,67.381531],[-107.792419,67.887512],[-108.812988,68.311707],[-108.167175,68.653931],[-106.950012,68.700073],[-106.150024,68.80011],[-105.342773,68.561279],[-104.337891,68.018127],[-103.221069,68.0979],[-101.454285,67.646912],[-99.901978,67.805725],[-98.443176,67.781677],[-98.558594,68.403931],[-97.669495,68.578674],[-96.119873,68.239502],[-96.125793,67.293518],[-95.48938,68.090698],[-94.684998,68.063904],[-94.232788,69.069092],[-95.304077,69.68573],[-96.471313,70.089905],[-96.391113,71.194885],[-95.208801,71.920471],[-93.889893,71.760071],[-92.878113,71.318726],[-91.519592,70.191284],[-92.406921,69.700073],[-90.547119,69.497681]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-119.40199,68.53554,-100.98078,73.31459],geometry:{type:"Polygon",coordinates:[[[-114.16717,73.12145],[-114.66634,72.65277],[-112.44102,72.9554],[-111.05039,72.4504],[-109.92035,72.96113],[-109.00654,72.63335],[-108.18835,71.65089],[-107.68599,72.06548],[-108.39639,73.08953],[-107.51645,73.23598],[-106.52259,73.07601],[-105.40246,72.67259],[-104.77484,71.6984],[-104.46476,70.99297],[-102.78537,70.49776],[-100.98078,70.02432],[-101.08929,69.58447],[-102.73116,69.50402],[-102.09329,69.11962],[-102.43024,68.75282],[-104.24,68.91],[-105.96,69.18],[-107.12254,69.11922],[-109,68.78],[-111.9668,68.60446],[-113.3132,68.53554],[-113.85496,69.00744],[-115.22,69.28],[-116.10794,69.16821],[-117.34,69.96],[-116.67473,70.06655],[-115.13112,70.2373],[-113.72141,70.19237],[-112.4161,70.36638],[-114.35,70.6],[-116.48684,70.52045],[-117.9048,70.54056],[-118.43238,70.9092],[-116.11311,71.30918],[-117.65568,71.2952],[-119.40199,71.55859],[-118.56267,72.30785],[-117.86642,72.70594],[-115.18909,73.31459],[-114.16717,73.12145]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-106.94,72.76,-104.5,73.64],geometry:{type:"Polygon",coordinates:[[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-80.876099,72.742203,-76.251404,73.75972],geometry:{type:"Polygon",coordinates:[[[-76.34,73.102685],[-76.251404,72.826385],[-77.314438,72.855545],[-78.39167,72.876656],[-79.486252,72.742203],[-79.775833,72.802902],[-80.876099,73.333183],[-80.833885,73.693184],[-80.353058,73.75972],[-78.064438,73.651932],[-76.34,73.102685]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-90.20516,61.930897,-61.851981,73.803816],geometry:{type:"Polygon",coordinates:[[[-86.562179,73.157447],[-85.774371,72.534126],[-84.850112,73.340278],[-82.31559,73.750951],[-80.600088,72.716544],[-80.748942,72.061907],[-78.770639,72.352173],[-77.824624,72.749617],[-75.605845,72.243678],[-74.228616,71.767144],[-74.099141,71.33084],[-72.242226,71.556925],[-71.200015,70.920013],[-68.786054,70.525024],[-67.91497,70.121948],[-66.969033,69.186087],[-68.805123,68.720198],[-66.449866,68.067163],[-64.862314,67.847539],[-63.424934,66.928473],[-61.851981,66.862121],[-62.163177,66.160251],[-63.918444,64.998669],[-65.14886,65.426033],[-66.721219,66.388041],[-68.015016,66.262726],[-68.141287,65.689789],[-67.089646,65.108455],[-65.73208,64.648406],[-65.320168,64.382737],[-64.669406,63.392927],[-65.013804,62.674185],[-66.275045,62.945099],[-68.783186,63.74567],[-67.369681,62.883966],[-66.328297,62.280075],[-66.165568,61.930897],[-68.877367,62.330149],[-71.023437,62.910708],[-72.235379,63.397836],[-71.886278,63.679989],[-73.378306,64.193963],[-74.834419,64.679076],[-74.818503,64.389093],[-77.70998,64.229542],[-78.555949,64.572906],[-77.897281,65.309192],[-76.018274,65.326969],[-73.959795,65.454765],[-74.293883,65.811771],[-73.944912,66.310578],[-72.651167,67.284576],[-72.92606,67.726926],[-73.311618,68.069437],[-74.843307,68.554627],[-76.869101,68.894736],[-76.228649,69.147769],[-77.28737,69.76954],[-78.168634,69.826488],[-78.957242,70.16688],[-79.492455,69.871808],[-81.305471,69.743185],[-84.944706,69.966634],[-87.060003,70.260001],[-88.681713,70.410741],[-89.51342,70.762038],[-88.467721,71.218186],[-89.888151,71.222552],[-90.20516,72.235074],[-89.436577,73.129464],[-88.408242,73.537889],[-85.826151,73.803816],[-86.562179,73.157447]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-102.5,71.27285,-96.54,73.84389],geometry:{type:"Polygon",coordinates:[[[-100.35642,73.84389],[-99.16387,73.63339],[-97.38,73.76],[-97.12,73.47],[-98.05359,72.99052],[-96.54,72.56],[-96.72,71.66],[-98.35966,71.27285],[-99.32286,71.35639],[-100.01482,71.73827],[-102.5,72.51],[-102.48,72.83],[-100.43836,72.70588],[-101.54,73.36],[-100.35642,73.84389]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[139.86312,73.20544,143.60385,73.85758],geometry:{type:"Polygon",coordinates:[[[143.60385,73.21244],[142.08763,73.20544],[140.038155,73.31692],[139.86312,73.36983],[140.81171,73.76506],[142.06207,73.85758],[143.48283,73.47525],[143.60385,73.21244]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-96.033745,72.024596,-90.509793,74.134907],geometry:{type:"Polygon",coordinates:[[[-93.196296,72.771992],[-94.269047,72.024596],[-95.409856,72.061881],[-96.033745,72.940277],[-96.018268,73.43743],[-95.495793,73.862417],[-94.503658,74.134907],[-92.420012,74.100025],[-90.509793,73.856732],[-92.003965,72.966244],[-93.196296,72.771992]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-125.92896,70.90164,-115.51081,74.44893],geometry:{type:"Polygon",coordinates:[[[-120.46,71.4],[-123.09219,70.90164],[-123.62,71.34],[-125.92896,71.86868],[-125.59271,72.19452],[-124.80729,73.02256],[-123.94,73.68],[-124.91775,74.29275],[-121.53788,74.44893],[-120.10978,74.24135],[-117.55564,74.18577],[-116.58442,73.89607],[-115.51081,73.47519],[-116.76794,73.22292],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[146.11919,74.68892,150.73167,75.49682],geometry:{type:"Polygon",coordinates:[[[150.73167,75.08406],[149.575925,74.68892],[147.977465,74.778355],[146.11919,75.17298],[146.358485,75.49682],[148.22223,75.345845],[150.73167,75.08406]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-96.820932,74.592347,-93.612756,75.647218],geometry:{type:"Polygon",coordinates:[[[-93.612756,74.979997],[-94.156909,74.592347],[-95.608681,74.666864],[-96.820932,74.927623],[-96.288587,75.377828],[-94.85082,75.647218],[-93.977747,75.29649],[-93.612756,74.979997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[136.97439,74.61148,145.086285,76.13676],geometry:{type:"Polygon",coordinates:[[[145.086285,75.562625],[144.3,74.82],[140.61381,74.84768],[138.95544,74.61148],[136.97439,75.26167],[137.51176,75.94917],[138.831075,76.13676],[141.471615,76.09289],[145.086285,75.562625]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-102.56552,74.89744,-97.704415,76.72],geometry:{type:"Polygon",coordinates:[[[-98.5,76.72],[-97.735585,76.25656],[-97.704415,75.74344],[-98.16,75],[-99.80874,74.89744],[-100.88366,75.05736],[-100.86292,75.64075],[-102.50209,75.5638],[-102.56552,76.3366],[-101.48973,76.30537],[-99.98349,76.64634],[-98.57699,76.58859],[-98.5,76.72]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-117.7104,74.39427,-105.70498,76.79417],geometry:{type:"Polygon",coordinates:[[[-108.21141,76.20168],[-107.81943,75.84552],[-106.92893,76.01282],[-105.881,75.9694],[-105.70498,75.47951],[-106.31347,75.00527],[-109.7,74.85],[-112.22307,74.41696],[-113.74381,74.39427],[-113.87135,74.72029],[-111.79421,75.1625],[-116.31221,75.04343],[-117.7104,75.2222],[-116.34602,76.19903],[-115.40487,76.47887],[-112.59056,76.14134],[-110.81422,75.54919],[-109.0671,75.47321],[-110.49726,76.42982],[-109.5811,76.79417],[-108.54859,76.67832],[-108.21141,76.20168]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[51.455754,70.632743,68.852211,76.939697],geometry:{type:"Polygon",coordinates:[[[57.535693,70.720464],[56.944979,70.632743],[53.677375,70.762658],[53.412017,71.206662],[51.601895,71.474759],[51.455754,72.014881],[52.478275,72.229442],[52.444169,72.774731],[54.427614,73.627548],[53.50829,73.749814],[55.902459,74.627486],[55.631933,75.081412],[57.868644,75.60939],[61.170044,76.251883],[64.498368,76.439055],[66.210977,76.809782],[68.15706,76.939697],[68.852211,76.544811],[68.180573,76.233642],[64.637326,75.737755],[61.583508,75.260885],[58.477082,74.309056],[56.986786,73.333044],[55.419336,72.371268],[55.622838,71.540595],[57.535693,70.720464]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-97.121379,74.392307,-79.833933,77.161389],geometry:{type:"Polygon",coordinates:[[[-94.684086,77.097878],[-93.573921,76.776296],[-91.605023,76.778518],[-90.741846,76.449597],[-90.969661,76.074013],[-89.822238,75.847774],[-89.187083,75.610166],[-87.838276,75.566189],[-86.379192,75.482421],[-84.789625,75.699204],[-82.753445,75.784315],[-81.128531,75.713983],[-80.057511,75.336849],[-79.833933,74.923127],[-80.457771,74.657304],[-81.948843,74.442459],[-83.228894,74.564028],[-86.097452,74.410032],[-88.15035,74.392307],[-89.764722,74.515555],[-92.422441,74.837758],[-92.768285,75.38682],[-92.889906,75.882655],[-93.893824,76.319244],[-95.962457,76.441381],[-97.121379,76.751078],[-96.745123,77.161389],[-94.684086,77.097878]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-122.854925,75.900019,-116.198587,77.645287],geometry:{type:"Polygon",coordinates:[[[-116.198587,77.645287],[-116.335813,76.876962],[-117.106051,76.530032],[-118.040412,76.481172],[-119.899318,76.053213],[-121.499995,75.900019],[-122.854924,76.116543],[-122.854925,76.116543],[-121.157535,76.864508],[-119.103939,77.51222],[-117.570131,77.498319],[-116.198587,77.645287]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-17.625,-34.819092,180,77.697876],geometry:{type:"Polygon",coordinates:[[[106.970276,76.974304],[107.240112,76.480103],[108.153931,76.723328],[111.077271,76.710083],[113.331482,76.22229],[114.134277,75.847717],[113.885498,75.327881],[112.779297,75.031921],[110.151306,74.476685],[109.400085,74.180115],[110.640076,74.0401],[112.119324,73.78772],[113.01947,73.976929],[113.529724,73.335083],[113.968872,73.59491],[115.567871,73.75293],[118.776306,73.587708],[119.020081,73.120117],[123.200684,72.971313],[123.257874,73.735107],[125.380127,73.56012],[126.976501,73.565491],[128.591309,73.038696],[129.051697,72.398682],[128.460083,71.980103],[129.716125,71.193115],[131.288696,70.787109],[132.253479,71.836304],[133.857727,71.386475],[135.562073,71.655273],[137.497681,71.347717],[138.234131,71.628113],[139.869873,71.487915],[139.147888,72.416321],[140.468079,72.849487],[149.500122,72.200073],[150.351318,71.606506],[152.968872,70.842285],[157.006897,71.031494],[158.997925,70.866699],[159.830322,70.453308],[159.708679,69.722107],[160.940674,69.437317],[162.279114,69.64209],[164.05249,69.668274],[165.940491,69.472107],[167.835693,69.582703],[169.577698,68.693909],[170.816895,69.013672],[170.008301,69.652893],[170.453491,70.097107],[173.643921,69.817505],[175.724121,69.877319],[178.600098,69.400085],[180,68.963722],[180,64.979584],[179.99292,64.974304],[178.707275,64.534912],[177.411316,64.608276],[178.31311,64.075928],[178.908325,63.252075],[179.370483,62.982727],[179.486511,62.569092],[179.228271,62.304077],[177.364319,62.521912],[174.569275,61.769287],[173.680115,61.65271],[172.150085,60.950073],[170.698486,60.336304],[170.330872,59.881897],[168.900513,60.573486],[166.295105,59.788696],[165.840088,60.160095],[164.876892,59.731689],[163.539307,59.868713],[163.217102,59.211121],[162.017273,58.243286],[162.053101,57.839111],[163.191895,57.615112],[163.057922,56.159302],[162.1297,56.122314],[161.701477,55.285706],[162.117493,54.855286],[160.368896,54.344482],[160.021729,53.202698],[158.530884,52.958679],[158.231323,51.942688],[156.789917,51.011108],[156.420105,51.700073],[155.991882,53.158875],[155.433716,55.381104],[155.91449,56.767883],[156.758301,57.364685],[156.810486,57.832092],[158.364319,58.055725],[160.150696,59.31488],[161.87207,60.343079],[163.669678,61.14093],[164.473694,62.55072],[163.258484,62.466309],[162.657898,61.642517],[160.121521,60.544312],[159.302307,61.774109],[156.720703,61.434509],[154.218079,59.758301],[155.043884,59.145081],[152.81189,58.883911],[151.265686,58.780884],[151.338074,59.504089],[149.783691,59.655701],[148.544922,59.16449],[145.487305,59.336487],[142.197876,59.0401],[138.958496,57.088074],[135.126282,54.729675],[136.701721,54.603699],[137.193481,53.977295],[138.164673,53.755127],[138.804688,54.2547],[139.901489,54.189697],[141.345276,53.089722],[141.379272,52.238892],[140.597473,51.239685],[140.513123,50.045471],[140.062073,48.446716],[138.554688,46.999695],[138.219727,46.307922],[136.862305,45.143494],[135.51532,43.989075],[134.869507,43.398315],[133.536926,42.811523],[132.906311,42.798523],[132.278076,43.284485],[130.935913,42.552673],[130.78009,42.220093],[130.400085,42.28009],[129.965881,41.941284],[129.66748,41.601074],[129.705322,40.882874],[129.18811,40.661926],[129.010498,40.485474],[128.633484,40.18988],[127.967529,40.025513],[127.533508,39.756897],[127.502075,39.323914],[127.385498,39.213501],[127.783325,39.050903],[128.34967,38.612305],[129.212891,37.432495],[129.46051,36.784302],[129.468323,35.63208],[129.091492,35.08252],[128.185913,34.890503],[127.386475,34.475708],[126.485718,34.390076],[126.373901,34.934692],[126.559326,35.684692],[126.117493,36.725525],[126.860291,36.893921],[126.174683,37.749695],[125.689087,37.940125],[125.568481,37.752075],[125.27533,37.669128],[125.240112,37.8573],[124.981079,37.948914],[124.71228,38.108276],[124.986084,38.548523],[125.221924,38.665894],[125.132874,38.848694],[125.386719,39.387878],[125.321106,39.551514],[124.737488,39.660278],[124.265686,39.928528],[122.867676,39.637878],[122.131531,39.170471],[121.054688,38.897522],[121.586121,39.360901],[121.376892,39.750305],[122.168701,40.422485],[121.640503,40.946472],[120.768677,40.593506],[119.639709,39.898071],[119.023499,39.252319],[118.042725,39.204285],[117.532715,38.737671],[118.059692,38.061523],[118.878296,37.897278],[118.911682,37.448486],[119.702881,37.156494],[120.823486,37.870483],[121.711304,37.481079],[122.35791,37.454529],[122.520081,36.930725],[121.104309,36.651306],[120.637085,36.111511],[119.664673,35.609924],[119.151306,34.909912],[120.227478,34.360474],[120.620483,33.376709],[121.229126,32.460327],[121.908081,31.692322],[121.891907,30.94928],[121.264282,30.676331],[121.503479,30.142883],[122.092102,29.83252],[121.938477,29.018127],[121.684509,28.225525],[121.125671,28.135681],[120.395508,27.053284],[119.58551,25.740906],[118.656921,24.547485],[117.281677,23.624512],[115.890686,22.782898],[114.763916,22.668091],[114.152527,22.223877],[113.806885,22.548279],[113.241089,22.051514],[111.843689,21.550476],[110.785522,21.397278],[110.444092,20.341125],[109.889893,20.282471],[109.627686,21.008301],[109.864502,21.395081],[108.522888,21.715271],[108.050293,21.55249],[106.715088,20.696899],[105.881714,19.752075],[105.662109,19.058289],[106.42688,18.004089],[107.361877,16.69751],[108.26947,16.079712],[108.877075,15.276672],[109.335327,13.426086],[109.200073,11.66687],[108.366089,11.008301],[107.220886,10.364502],[106.40509,9.530884],[105.158325,8.59967],[104.795288,9.241089],[105.076294,9.918518],[104.334473,10.486694],[103.497314,10.63269],[103.090698,11.153687],[102.585083,12.186707],[101.687073,12.645874],[100.831909,12.627075],[100.978516,13.41272],[100.0979,13.406921],[100.018677,12.307129],[99.478882,10.846497],[99.153687,9.963074],[99.222473,9.239319],[99.873901,9.207886],[100.279724,8.295288],[100.45929,7.429687],[101.017273,6.856873],[101.623108,6.740723],[102.141296,6.22168],[102.371277,6.128296],[102.961731,5.524475],[103.381287,4.855103],[103.438721,4.181702],[103.332092,3.726685],[103.429504,3.382874],[103.502502,2.791077],[103.854675,2.515503],[104.247925,1.631287],[104.228882,1.293091],[103.519714,1.226318],[102.57373,1.967102],[101.390686,2.760925],[101.273682,3.270325],[100.695496,3.939087],[100.557495,4.767273],[100.196716,5.3125],[100.306274,6.04071],[100.085876,6.464478],[99.690674,6.848328],[99.519714,7.343506],[98.988281,7.908081],[98.503906,8.382324],[98.339722,7.794495],[98.150085,8.350098],[98.259277,8.973877],[98.553528,9.933105],[98.457275,10.675293],[98.764526,11.441284],[98.428284,12.033081],[98.509705,13.122498],[98.103699,13.640503],[97.77771,14.83728],[97.597107,16.100708],[97.164673,16.928711],[96.50592,16.427307],[95.369324,15.714478],[94.808472,15.803528],[94.188904,16.038086],[94.533508,17.277283],[94.32489,18.213501],[93.541077,19.366516],[93.66333,19.727112],[93.078308,19.855286],[92.36853,20.670898],[92.082886,21.192322],[92.02533,21.701721],[91.8349,22.182922],[91.417114,22.765076],[90.496094,22.805115],[90.587097,22.392883],[90.272888,21.836487],[89.847473,22.039124],[89.702087,21.857117],[89.418884,21.966309],[89.032104,22.055725],[88.888916,21.690674],[88.208496,21.703308],[86.975708,21.495483],[87.033081,20.743286],[86.499329,20.151672],[85.060303,19.478699],[83.941101,18.302124],[83.18927,17.671326],[82.192871,17.016724],[82.191284,16.556702],[81.692688,16.310303],[80.792114,15.952087],[80.32489,15.899292],[80.025085,15.136475],[80.233276,13.835876],[80.286316,13.006287],[79.862488,12.056274],[79.858093,10.3573],[79.340515,10.308899],[78.885498,9.546082],[79.189697,9.216675],[78.278076,8.933105],[77.941284,8.25293],[77.539917,7.965515],[76.593079,8.899292],[76.130127,10.299683],[75.746521,11.308289],[75.396118,11.781311],[74.864929,12.741882],[74.616699,13.992676],[74.443909,14.61731],[73.534302,15.990723],[73.119873,17.928711],[72.820923,19.208313],[72.824524,20.419495],[72.630676,21.356079],[71.175293,20.757507],[70.47052,20.877319],[69.164124,22.089294],[69.644897,22.450684],[69.34967,22.843323],[68.176697,23.692078],[67.443726,23.944885],[67.145508,24.663696],[66.372925,25.425293],[64.530518,25.237122],[62.905701,25.218506],[61.497498,25.078308],[59.616089,25.380127],[58.525879,25.610107],[57.397278,25.739929],[56.970886,26.966125],[56.492126,27.143311],[55.723694,26.964722],[54.715088,26.480713],[53.493103,26.8125],[52.483704,27.580872],[51.520874,27.865723],[50.853088,28.814514],[50.115112,30.147888],[49.576904,29.985718],[48.941284,30.317078],[48.568115,29.92688],[47.974487,29.975891],[48.183289,29.534485],[48.093872,29.306274],[48.416077,28.552124],[48.807678,27.689697],[49.299683,27.461304],[49.470886,27.110107],[50.152527,26.689697],[50.213074,26.2771],[50.113281,25.944092],[50.239929,25.608093],[50.527527,25.327881],[50.660706,24.999878],[50.81012,24.754883],[50.743896,25.482483],[51.013489,26.00708],[51.286499,26.114685],[51.589111,25.801086],[51.606689,25.215698],[51.389709,24.627502],[51.579529,24.245483],[51.757507,24.294128],[51.794495,24.019897],[52.577087,24.17749],[53.404114,24.151306],[54.008118,24.121887],[54.693115,24.797913],[55.439087,25.439087],[56.070923,26.055481],[56.362122,26.395874],[56.485718,26.309082],[56.391479,25.896118],[56.261108,25.714722],[56.396912,24.924683],[56.845276,24.241699],[57.403503,23.878723],[58.137085,23.747925],[58.729309,23.565674],[59.180481,22.992493],[59.450073,22.660278],[59.808105,22.533691],[59.806274,22.310486],[59.442322,21.714478],[59.282471,21.433899],[58.861084,21.114075],[58.488098,20.429077],[58.034302,20.481506],[57.826477,20.243103],[57.665894,19.736084],[57.788696,19.067688],[57.694519,18.944702],[57.234314,18.94812],[56.60968,18.57428],[56.512329,18.087097],[56.283508,17.876099],[55.661499,17.884277],[55.270081,17.632324],[55.274902,17.228271],[54.791077,16.950684],[54.239319,17.045105],[53.570496,16.707703],[53.108704,16.651123],[52.385315,16.382507],[52.191711,15.938477],[52.168274,15.597473],[51.172485,15.175293],[49.574707,14.708679],[48.679321,14.003296],[48.239075,13.94812],[47.938904,14.007324],[47.354492,13.592285],[46.717102,13.399719],[45.877686,13.3479],[45.625122,13.291077],[45.406494,13.026917],[45.144287,12.953918],[44.989685,12.699707],[44.49469,12.72168],[44.17511,12.585876],[43.483093,12.636902],[43.2229,13.220886],[43.251526,13.7677],[43.088074,14.062683],[42.892273,14.802307],[42.604919,15.213318],[42.805115,15.262085],[42.702515,15.718872],[42.82373,15.911682],[42.77948,16.3479],[42.649719,16.774719],[42.348083,17.075928],[42.270874,17.47467],[41.754517,17.83313],[41.221497,18.671692],[40.93927,19.486511],[40.247681,20.174683],[39.801697,20.338928],[39.139526,21.29187],[39.023682,21.986877],[39.066284,22.579712],[38.49292,23.688477],[38.023926,24.078674],[37.483704,24.285522],[37.154907,24.858521],[37.209473,25.084473],[36.931702,25.603088],[36.639709,25.826294],[36.249084,26.570129],[35.64032,27.376526],[35.13031,28.063477],[34.632324,28.058472],[34.787903,28.607483],[34.832275,28.95752],[34.956116,29.356689],[34.922729,29.501282],[34.641724,29.099487],[34.426697,28.344116],[34.15448,27.823303],[33.921509,27.648682],[33.588074,27.971497],[33.136902,28.417725],[32.423279,29.851074],[32.320496,29.760498],[32.734924,28.705322],[33.348877,27.69989],[34.104675,26.142273],[34.473877,25.598694],[34.795105,25.033875],[35.692505,23.926697],[35.493713,23.752502],[35.526123,23.102478],[36.690674,22.204895],[36.866272,22.000122],[37.188721,21.018921],[36.969482,20.837524],[37.114685,19.808105],[37.481873,18.614075],[37.862671,18.36792],[38.410095,17.998291],[38.990723,16.840698],[39.266113,15.922729],[39.81427,15.43573],[41.179321,14.491089],[41.734924,13.921082],[42.276917,13.344116],[42.589722,13.000488],[43.081299,12.699707],[43.317871,12.390076],[43.286499,11.974915],[42.715881,11.735718],[43.145325,11.462097],[43.470703,11.27771],[43.666687,10.864319],[44.11792,10.445679],[44.614319,10.442322],[45.556885,10.69812],[46.645508,10.816528],[47.525696,11.127319],[48.021729,11.193115],[48.378906,11.375488],[48.948303,11.410706],[49.267883,11.430481],[49.728699,11.578918],[50.258911,11.679688],[50.732117,12.021912],[51.111328,12.024719],[51.133911,11.748291],[51.041504,11.166504],[51.045288,10.64093],[50.83429,10.279724],[50.55249,9.19873],[50.070923,8.081726],[49.452698,6.804688],[48.594482,5.339111],[47.740906,4.219482],[46.56488,2.855286],[45.564087,2.045898],[44.068298,1.052917],[43.136108,.292297],[42.041687,-.919189],[41.811096,-1.446411],[41.585083,-1.683228],[40.884888,-2.08252],[40.637878,-2.499817],[40.263123,-2.57312],[40.121277,-3.27771],[39.80011,-3.681091],[39.604919,-4.346497],[39.202271,-4.676697],[38.740479,-5.908875],[38.799683,-6.475586],[39.440125,-6.840027],[39.470093,-7.099976],[39.194702,-7.703918],[39.252075,-8.007812],[39.186523,-8.485474],[39.535889,-9.112305],[39.949707,-10.098389],[40.316711,-10.317078],[40.478516,-10.765381],[40.437317,-11.761719],[40.560913,-12.639099],[40.59967,-14.201904],[40.775513,-14.691711],[40.477295,-15.406311],[40.089294,-16.100708],[39.452698,-16.720886],[38.53833,-17.101013],[37.411072,-17.586304],[36.281311,-18.659607],[35.896484,-18.842285],[35.198486,-19.552795],[34.786499,-19.783997],[34.701904,-20.497009],[35.176086,-21.254272],[35.373474,-21.84082],[35.385925,-22.140015],[35.562683,-22.090027],[35.533875,-23.070801],[35.371887,-23.535278],[35.607483,-23.706482],[35.458679,-24.12262],[35.04071,-24.478271],[34.215881,-24.816284],[33.013306,-25.357483],[32.574707,-25.727295],[32.660278,-26.148499],[32.916077,-26.215881],[32.830078,-26.742188],[32.580322,-27.470093],[32.46228,-28.301025],[32.203491,-28.75238],[31.521118,-29.257385],[31.325684,-29.401978],[30.901672,-29.909912],[30.622925,-30.423706],[30.055725,-31.140198],[28.925476,-32.171997],[28.219727,-32.771912],[27.464722,-33.22699],[26.419495,-33.614929],[25.909729,-33.666992],[25.780701,-33.94458],[25.172913,-33.796875],[24.677917,-33.987183],[23.594116,-33.794495],[22.988281,-33.916382],[22.57428,-33.864075],[21.542908,-34.258789],[20.689087,-34.417175],[20.071289,-34.795105],[19.616516,-34.819092],[19.193298,-34.462585],[18.855286,-34.444275],[18.424683,-33.997803],[18.377502,-34.136475],[18.244507,-33.867676],[18.250122,-33.281372],[17.925293,-32.611206],[18.247925,-32.429077],[18.22168,-31.661621],[17.566895,-30.725708],[17.064514,-29.878601],[17.062927,-29.875977],[16.345093,-28.576721],[15.601929,-27.821228],[15.21051,-27.090881],[14.989685,-26.11731],[14.743286,-25.392883],[14.408081,-23.853027],[14.385681,-22.656677],[14.25769,-22.111206],[13.868713,-21.698975],[13.352478,-20.872803],[12.826904,-19.673096],[12.608704,-19.045288],[11.794922,-18.069092],[11.734314,-17.30188],[11.640076,-16.673096],[11.778687,-15.793823],[12.123718,-14.878296],[12.17572,-14.449097],[12.500122,-13.547729],[12.738525,-13.137878],[13.312927,-12.483582],[13.633728,-12.038574],[13.738708,-11.297791],[13.686523,-10.731079],[13.387329,-10.373596],[13.121094,-9.766907],[12.875488,-9.16687],[12.929077,-8.959106],[13.236511,-8.562622],[12.933105,-7.596497],[12.728271,-6.927124],[12.227478,-6.294373],[12.32251,-6.100098],[12.182312,-5.789917],[11.9151,-5.037903],[11.093689,-3.978821],[10.066284,-2.969482],[9.405273,-2.144287],[8.798096,-1.111328],[8.830078,-.778992],[9.048523,-.45929],[9.291321,.268677],[9.49292,1.010071],[9.305725,1.160889],[9.649292,2.283875],[9.795288,3.073486],[9.40448,3.734497],[8.94812,3.904114],[8.744873,4.352295],[8.488892,4.495728],[8.500305,4.772095],[7.462097,4.412109],[7.082703,4.464722],[6.69812,4.240723],[5.898315,4.262512],[5.362915,4.888123],[5.033691,5.611877],[4.325684,6.270691],[3.57428,6.258301],[2.691711,6.258911],[1.865295,6.142273],[1.06012,5.928894],[-.507629,5.343506],[-1.063599,5.000488],[-1.964722,4.71051],[-2.856079,4.994507],[-3.311096,4.984314],[-4.008789,5.179871],[-4.649902,5.168274],[-5.834412,4.993713],[-6.528687,4.705078],[-7.518921,4.338318],[-7.712097,4.364685],[-7.974121,4.355896],[-9.004822,4.83252],[-9.913391,5.593689],[-10.765381,6.140686],[-11.438782,6.785889],[-11.708191,6.860107],[-12.428101,7.262878],[-12.948975,7.798706],[-13.124023,8.163879],[-13.246521,8.903076],[-13.685181,9.494873],[-14.073975,9.886292],[-14.330078,10.015686],[-14.579712,10.214478],[-14.693176,10.656311],[-14.839478,10.876709],[-15.13031,11.040527],[-15.664185,11.458496],[-16.085205,11.524719],[-16.314697,11.806519],[-16.308899,11.958679],[-16.61377,12.170898],[-16.677429,12.384888],[-16.841492,13.151489],[-16.713684,13.595093],[-17.126099,14.373474],[-17.625,14.729675],[-17.185181,14.919495],[-16.700684,15.621521],[-16.463013,16.135071],[-16.549683,16.673889],[-16.270508,17.167114],[-16.146301,18.108521],[-16.256897,19.09668],[-16.377625,19.593872],[-16.277771,20.092529],[-16.536316,20.567871],[-17.063416,20.999878],[-17.020386,21.422302],[-16.973206,21.885681],[-16.589111,22.158325],[-16.261902,22.679321],[-16.326416,23.017883],[-15.982605,23.723511],[-15.426025,24.359131],[-15.089294,24.520325],[-14.824585,25.103516],[-14.800903,25.636292],[-14.43988,26.254517],[-13.773804,26.618896],[-13.139893,27.640076],[-12.618774,28.03833],[-11.688904,28.148682],[-10.900879,28.832275],[-10.399597,29.098694],[-9.564819,29.933716],[-9.814697,31.177673],[-9.434814,32.038086],[-9.30072,32.564697],[-8.65741,33.240295],[-7.654175,33.697083],[-6.912476,34.110474],[-6.244324,35.145874],[-5.929993,35.760071],[-5.193787,35.75531],[-4.591003,35.330688],[-3.640076,35.399902],[-2.604309,35.179077],[-2.169922,35.168518],[-1.208618,35.714905],[-.12738,35.888672],[.503906,36.301331],[1.466919,36.605713],[3.161682,36.783875],[4.815674,36.865112],[5.320129,36.716492],[6.261902,37.110718],[7.330505,37.11853],[7.737122,36.885681],[8.421082,36.946472],[9.510071,37.350098],[10.210083,37.230103],[10.180725,36.724121],[11.028931,37.092102],[11.100098,36.900085],[10.600098,36.410095],[10.593323,35.94751],[10.939514,35.699097],[10.807922,34.833496],[10.149719,34.330688],[10.339722,33.785889],[10.856873,33.768677],[11.108521,33.293274],[11.488892,33.137085],[12.66333,32.792908],[13.083313,32.878906],[13.918701,32.712097],[15.245728,32.265076],[15.713928,31.376282],[16.611694,31.182312],[18.021118,30.763489],[19.086487,30.266479],[19.574097,30.525879],[20.053284,30.985901],[19.820312,31.751892],[20.134094,32.238281],[20.854492,32.706909],[21.543091,32.843323],[22.895874,32.638489],[23.236877,32.191528],[23.609131,32.187317],[23.92749,32.016724],[24.921082,31.899475],[25.164917,31.569275],[26.4953,31.585693],[27.457703,31.321289],[28.4505,31.025879],[28.913513,30.870117],[29.683472,31.18689],[30.095093,31.473511],[30.976929,31.555908],[31.68811,31.429688],[31.96051,30.933716],[32.192505,31.260315],[32.993896,31.024109],[33.773499,30.967529],[34.265503,31.219482],[34.556519,31.548889],[34.488098,31.60553],[34.752686,32.072876],[34.955505,32.827515],[35.098511,33.080688],[35.126099,33.090881],[35.4823,33.905518],[35.979675,34.610107],[35.998474,34.644897],[35.90509,35.410095],[36.149902,35.821472],[35.782104,36.275085],[36.160889,36.650696],[35.551086,36.565491],[34.714478,36.795471],[34.026917,36.220093],[32.509277,36.107483],[31.699707,36.644287],[30.621704,36.677917],[30.391113,36.263123],[29.700073,36.144287],[28.73291,36.67688],[27.641296,36.658875],[27.048889,37.653503],[26.318298,38.20813],[26.804688,38.985901],[26.170898,39.463684],[27.28009,40.420105],[28.820129,40.460083],[29.240112,41.220093],[31.145874,41.087708],[32.348083,41.736328],[33.513306,42.019104],[35.167725,42.040283],[36.913086,41.33551],[38.347717,40.94873],[39.512695,41.102905],[40.373474,41.013672],[41.554077,41.535706],[41.703308,41.963074],[41.453491,42.645081],[40.875488,43.013672],[40.321472,43.128723],[39.955078,43.43512],[38.680115,44.28009],[37.539124,44.657288],[36.675476,45.24469],[37.40332,45.40448],[38.233093,46.240906],[37.673706,46.636719],[39.147705,47.044678],[39.121277,47.263489],[38.223694,47.102295],[37.42511,47.022278],[36.759888,46.69873],[35.82373,46.645874],[34.96228,46.273315],[35.020874,45.651306],[35.510071,45.410095],[36.53009,45.470093],[36.334717,45.113281],[35.240112,44.940125],[33.882507,44.361511],[33.326477,44.56488],[33.546875,45.034912],[32.454285,45.327515],[32.63092,45.519287],[33.588074,45.851685],[33.298706,46.080688],[31.74408,46.333496],[31.675293,46.706299],[30.748901,46.58313],[30.377686,46.032471],[29.603271,45.293274],[29.626526,45.035522],[29.141724,44.820312],[28.837891,44.913879],[28.558105,43.70752],[28.039124,43.293274],[27.673889,42.577881],[27.996704,42.007507],[28.115479,41.622925],[28.988525,41.299927],[28.806519,41.054871],[27.61908,40.999878],[27.192505,40.690674],[26.358093,40.1521],[26.043274,40.617676],[26.056885,40.824097],[25.447693,40.852478],[24.925903,40.947083],[23.714905,40.687073],[24.408081,40.125122],[23.900085,39.962097],[23.343079,39.961121],[22.814087,40.476074],[22.626282,40.256531],[22.84967,39.659302],[23.350098,39.190125],[22.973083,38.970886],[23.53009,38.510071],[24.025085,38.220093],[24.0401,37.65509],[23.115112,37.920105],[23.410095,37.410095],[22.775085,37.305115],[23.154297,36.422485],[22.490112,36.410095],[21.670105,36.845093],[21.295105,37.645081],[21.120117,38.310303],[20.730103,38.770081],[20.217712,39.340271],[20.150085,39.625122],[19.980103,39.695129],[19.960083,39.9151],[19.406128,40.250916],[19.319092,40.727295],[19.403687,41.409485],[19.5401,41.720093],[19.371887,41.877686],[19.162476,41.955078],[18.88208,42.281494],[18.450073,42.480103],[17.509888,42.850098],[16.930115,43.210083],[16.015503,43.507324],[15.1745,44.243286],[15.376282,44.317871],[14.920288,44.738525],[14.901672,45.076111],[14.258728,45.233887],[13.952271,44.802124],[13.657104,45.137085],[13.679504,45.484131],[13.715088,45.500305],[13.937683,45.591125],[13.141724,45.736694],[12.328674,45.381897],[12.383911,44.885498],[12.261475,44.600525],[12.589294,44.091492],[13.526917,43.587708],[14.029907,42.761108],[15.1427,41.955078],[15.926331,41.961304],[16.169922,41.740295],[15.889282,41.541077],[16.785095,41.179688],[17.519287,40.877075],[18.376709,40.355713],[18.480286,40.168884],[18.293518,39.810913],[17.738525,40.27771],[16.86969,40.442322],[16.44873,39.795471],[17.171509,39.424683],[17.052917,38.902893],[16.635071,38.843689],[16.101074,37.985901],[15.684082,37.908875],[15.68811,38.214722],[15.89209,38.750916],[16.109314,38.964478],[15.718872,39.544128],[15.413696,40.048279],[14.998474,40.173096],[14.703308,40.604675],[14.06073,40.786499],[13.628113,41.188293],[12.888123,41.253113],[12.106689,41.704529],[11.191895,42.35553],[10.512085,42.931519],[10.200073,43.920105],[9.702515,44.036316],[8.888916,44.366272],[8.428711,44.231323],[7.850891,43.767273],[7.435303,43.693909],[6.529297,43.128906],[4.556885,43.399719],[3.100525,43.075317],[2.986084,42.473083],[3.03949,41.89209],[2.091919,41.226074],[.810486,41.014709],[.721313,40.678284],[.106689,40.124084],[-.278687,39.31012],[.111328,38.738525],[-.467102,38.29248],[-.683411,37.642273],[-1.438293,37.443115],[-2.146423,36.674072],[-3.41571,36.658875],[-4.368896,36.677917],[-4.995178,36.324707],[-5.377075,35.946899],[-5.866394,36.029907],[-6.236694,36.367676],[-6.520203,36.942871],[-7.453674,37.0979],[-7.855591,36.838318],[-8.382812,36.978882],[-8.898804,36.868896],[-8.746094,37.651489],[-8.840027,38.266296],[-9.287476,38.358521],[-9.526489,38.737488],[-9.446899,39.39209],[-9.048279,39.755127],[-8.977295,40.159302],[-8.768677,40.760681],[-8.790771,41.184326],[-8.990784,41.543518],[-9.03479,41.880676],[-8.984375,42.592896],[-9.392883,43.026672],[-7.97821,43.748474],[-6.754517,43.567871],[-5.411804,43.57428],[-4.347778,43.403503],[-3.517517,43.455872],[-1.901306,43.422913],[-1.384216,44.022705],[-1.193787,46.014893],[-2.225708,47.064514],[-2.963196,47.570312],[-4.491577,47.955078],[-4.592285,48.684082],[-3.295776,48.901672],[-1.616516,48.64447],[-1.933411,49.776489],[-.98938,49.347473],[1.338684,50.127319],[1.639099,50.946716],[2.513489,51.148499],[3.315125,51.345886],[3.830322,51.620483],[4.706116,53.091919],[6.07428,53.510498],[6.905273,53.4823],[7.100525,53.693909],[7.936279,53.748291],[8.121704,53.527893],[8.80072,54.020874],[8.572083,54.395691],[8.526306,54.962891],[8.1203,55.5177],[8.090088,56.5401],[8.256714,56.81012],[8.543518,57.110107],[9.4245,57.172119],[9.775696,57.447876],[10.580078,57.730103],[10.546082,57.215881],[10.250122,56.890076],[10.370117,56.610107],[10.912292,56.458679],[10.667908,56.081482],[10.370117,56.190125],[9.650085,55.470093],[9.921875,54.983093],[9.939697,54.59668],[10.950073,54.363708],[10.939514,54.008728],[11.956299,54.196472],[12.518494,54.47052],[13.647522,54.0755],[14.11969,53.75708],[14.802917,54.05072],[16.363525,54.513306],[17.622925,54.851685],[18.620911,54.682678],[18.696289,54.438721],[19.660706,54.426086],[19.888489,54.866089],[21.268494,55.190491],[21.055908,56.031128],[21.090515,56.783875],[21.581909,57.411926],[22.524475,57.753479],[23.318481,57.006287],[24.120728,57.025696],[24.312927,57.793518],[24.429077,58.383484],[24.061279,58.257507],[23.426697,58.612671],[23.339905,59.187317],[24.604309,59.465881],[25.864319,59.611084],[26.94928,59.445923],[27.981079,59.475525],[29.117676,60.028076],[28.070129,60.503479],[26.25531,60.423889],[24.496704,60.057312],[22.86969,59.846497],[22.290894,60.391907],[21.322327,60.720276],[21.544922,61.705322],[21.059326,62.607483],[21.536072,63.18988],[22.442688,63.817871],[24.73053,64.902283],[25.398071,65.111511],[25.294128,65.534485],[23.903503,66.006897],[22.183289,65.723877],[21.213501,65.026123],[21.36969,64.413696],[19.778931,63.60968],[17.8479,62.749512],[17.11969,61.341309],[17.831482,60.636719],[18.78772,60.081909],[17.869324,58.953918],[16.829285,58.71991],[16.447693,57.041077],[15.879883,56.104309],[14.666687,56.200928],[14.100708,55.407898],[12.942871,55.361877],[12.625122,56.307129],[11.788086,57.441895],[11.027283,58.856079],[10.356689,59.46991],[8.38208,58.313293],[7.048889,58.078918],[5.665894,58.588074],[5.308289,59.66333],[4.992126,61.97113],[5.912903,62.614502],[8.553528,63.454102],[10.52771,64.486084],[12.358276,65.8797],[14.761292,67.81073],[16.435913,68.563293],[19.184082,69.817505],[21.378479,70.25531],[23.023682,70.202087],[24.546692,71.030518],[26.370117,70.986328],[28.165527,71.185486],[31.293518,70.453918],[30.005493,70.186279],[31.101074,69.558105],[32.13269,69.905884],[33.775513,69.301514],[36.514099,69.063477],[40.29248,67.932495],[41.059875,67.457275],[41.126099,66.791687],[40.01593,66.266296],[38.382874,65.999512],[33.918701,66.759705],[33.184509,66.632507],[34.81488,65.900085],[34.943909,64.41449],[36.231323,64.109497],[37.012878,63.849915],[37.14209,64.334717],[36.5177,64.780273],[37.176086,65.143311],[39.593506,64.520874],[40.43573,64.764526],[39.762695,65.496887],[42.093079,66.476318],[43.016113,66.418701],[43.94989,66.069092],[44.532288,66.756287],[43.698486,67.352478],[44.187927,67.9505],[43.452881,68.570923],[46.250122,68.250122],[46.821289,67.68988],[45.555298,67.566528],[45.562073,67.010071],[46.349121,66.667725],[47.894287,66.884521],[48.138672,67.522522],[50.227722,67.998718],[53.717529,68.857483],[54.47168,68.808289],[53.485901,68.201294],[54.726318,68.097107],[55.442688,68.438721],[57.317078,68.466309],[58.802124,68.88092],[59.941528,68.278503],[61.077881,68.940674],[60.03009,69.520081],[60.55011,69.850098],[63.504089,69.547485],[64.888123,69.234924],[68.512085,68.092285],[69.180725,68.615723],[68.16449,69.144287],[68.135315,69.356506],[66.930115,69.454712],[67.259888,69.928711],[66.724915,70.708923],[66.694702,71.029114],[68.5401,71.934509],[69.196289,72.843506],[69.940125,73.0401],[72.587524,72.776306],[72.796082,72.220093],[71.848083,71.409119],[72.470093,71.090271],[72.79187,70.391113],[72.564697,69.020874],[73.667908,68.407898],[73.238708,67.740479],[71.28009,66.320129],[72.423096,66.172729],[72.820679,66.532715],[73.921082,66.78949],[74.186523,67.284302],[75.052124,67.760498],[74.469299,68.329102],[74.935913,68.989319],[73.842285,69.071472],[73.601929,69.627686],[74.399902,70.631897],[73.101074,71.447083],[74.89093,72.121277],[74.659302,72.832275],[75.158081,72.855103],[75.683472,72.300476],[75.289124,71.335693],[76.359131,71.152893],[75.903076,71.874084],[77.576721,72.267273],[79.6521,72.320129],[81.500122,71.750122],[80.610718,72.582886],[80.511108,73.648315],[82.250122,73.850098],[84.655273,73.805908],[86.822327,73.93689],[86.009705,74.459717],[87.16687,75.116516],[88.315674,75.143921],[90.260071,75.640076],[92.900696,75.773315],[93.234314,76.047302],[95.860107,76.140076],[96.678284,75.915527],[98.922485,76.446899],[100.759705,76.430298],[101.035278,76.861877],[101.990906,77.287476],[104.351685,77.697876],[106.066711,77.373901],[104.705078,77.127502],[106.970276,76.974304]],[[49.110291,41.282288],[49.618896,40.572876],[50.0849,40.526306],[50.392883,40.256531],[49.569275,40.176086],[49.395325,39.399475],[49.223328,39.049316],[48.856506,38.815491],[48.883301,38.320313],[49.199707,37.582886],[50.147888,37.374695],[50.842285,36.872925],[52.264099,36.7005],[53.825928,36.965088],[53.921692,37.198914],[53.735474,37.906128],[53.88092,38.952087],[53.101074,39.29071],[53.35791,39.975281],[52.694092,40.033691],[52.915283,40.876526],[53.858276,40.631104],[54.736877,40.951111],[54.008301,41.551331],[53.72168,42.123291],[52.916687,41.868103],[52.814697,41.135498],[52.502502,41.783325],[52.446289,42.027283],[52.692078,42.443909],[52.501526,42.792297],[51.342529,43.133118],[50.891296,44.031128],[50.339111,44.284119],[50.305725,44.609924],[51.278503,44.514893],[51.316895,45.246094],[52.16748,45.408508],[53.040894,45.259094],[53.220886,46.23468],[53.042725,46.853088],[52.042114,46.804687],[51.192078,47.048706],[50.034119,46.609131],[49.101318,46.399475],[48.645508,45.806274],[47.675903,45.641479],[46.682129,44.609314],[47.590881,43.660278],[47.492493,42.986694],[48.584473,41.808899],[49.110291,41.282288]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-96.436304,77.491343,-93.720656,77.834629],geometry:{type:"Polygon",coordinates:[[[-93.840003,77.519997],[-94.295608,77.491343],[-96.169654,77.555111],[-96.436304,77.834629],[-94.422577,77.820005],[-93.720656,77.634331],[-93.840003,77.519997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-113.534279,77.409229,-109.854452,78.152956],geometry:{type:"Polygon",coordinates:[[[-110.186938,77.697015],[-112.051191,77.409229],[-113.534279,77.732207],[-112.724587,78.05105],[-111.264443,78.152956],[-109.854452,77.996325],[-110.186938,77.697015]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[20.72601,77.44493,24.72412,78.45494],geometry:{type:"Polygon",coordinates:[[[24.72412,77.85385],[22.49032,77.44493],[20.72601,77.67704],[21.41611,77.93504],[20.8119,78.25463],[22.88426,78.45494],[23.28134,78.07954],[24.72412,77.85385]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-112.542091,78.40692,-109.663146,78.849994],geometry:{type:"Polygon",coordinates:[[[-109.663146,78.601973],[-110.881314,78.40692],[-112.542091,78.407902],[-112.525891,78.550555],[-111.50001,78.849994],[-110.963661,78.804441],[-109.663146,78.601973]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-98.631984,77.850597,-95.559278,78.87193],geometry:{type:"Polygon",coordinates:[[[-95.830295,78.056941],[-97.309843,77.850597],[-98.124289,78.082857],[-98.552868,78.458105],[-98.631984,78.87193],[-97.337231,78.831984],[-96.754399,78.765813],[-95.559278,78.418315],[-95.830295,78.056941]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-105.492289,77.907545,-99.670939,79.301594],geometry:{type:"Polygon",coordinates:[[[-100.060192,78.324754],[-99.670939,77.907545],[-101.30394,78.018985],[-102.949809,78.343229],[-105.176133,78.380332],[-104.210429,78.67742],[-105.41958,78.918336],[-105.492289,79.301594],[-103.529282,79.165349],[-100.825158,78.800462],[-100.060192,78.324754]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[99.43814,77.921,105.37243,79.34641],geometry:{type:"Polygon",coordinates:[[[105.07547,78.30689],[99.43814,77.921],[101.2649,79.23399],[102.08635,79.34641],[102.837815,79.28129],[105.37243,78.71334],[105.07547,78.30689]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[10.44453,76.77045,21.54383,80.05086],geometry:{type:"Polygon",coordinates:[[[18.25183,79.70175],[21.54383,78.95611],[19.02737,78.5626],[18.47172,77.82669],[17.59441,77.63796],[17.1182,76.80941],[15.91315,76.77045],[13.76259,77.38035],[14.66956,77.73565],[13.1706,78.02493],[11.22231,78.8693],[10.44453,79.65239],[13.17077,80.01046],[13.71852,79.66039],[15.14282,79.67431],[15.52255,80.01608],[16.99085,80.05086],[18.25183,79.70175]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[17.368015,79.400012,27.407506,80.657144],geometry:{type:"Polygon",coordinates:[[[25.447625,80.40734],[27.407506,80.056406],[25.924651,79.517834],[23.024466,79.400012],[20.075188,79.566823],[19.897266,79.842362],[18.462264,79.85988],[17.368015,80.318896],[20.455992,80.598156],[21.907945,80.357679],[22.919253,80.657144],[25.447625,80.40734]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[44.846958,80.010181,51.522933,80.918885],geometry:{type:"Polygon",coordinates:[[[51.136187,80.54728],[49.793685,80.415428],[48.894411,80.339567],[48.754937,80.175468],[47.586119,80.010181],[46.502826,80.247247],[47.072455,80.559424],[44.846958,80.58981],[46.799139,80.771918],[48.318477,80.78401],[48.522806,80.514569],[49.09719,80.753986],[50.039768,80.918885],[51.522933,80.699726],[51.136187,80.54728]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[91.18107,78.7562,100.186655,81.2504],geometry:{type:"Polygon",coordinates:[[[99.93976,78.88094],[97.75794,78.7562],[94.97259,79.044745],[93.31288,79.4265],[92.5454,80.14379],[91.18107,80.34146],[93.77766,81.0246],[95.940895,81.2504],[97.88385,80.746975],[100.186655,79.780135],[99.93976,78.88094]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-96.70972,78.21533,-85.81435,81.25739],geometry:{type:"Polygon",coordinates:[[[-87.02,79.66],[-85.81435,79.3369],[-87.18756,79.0393],[-89.03535,78.28723],[-90.80436,78.21533],[-92.87669,78.34333],[-93.95116,78.75099],[-93.93574,79.11373],[-93.14524,79.3801],[-94.974,79.37248],[-96.07614,79.70502],[-96.70972,80.15777],[-96.01644,80.60233],[-95.32345,80.90729],[-94.29843,80.97727],[-94.73542,81.20646],[-92.40984,81.25739],[-91.13289,80.72345],[-89.45,80.509322],[-87.81,80.32],[-87.02,79.66]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-91.58702,76.17812,-61.85,83.23324],geometry:{type:"Polygon",coordinates:[[[-68.5,83.106322],[-65.82735,83.02801],[-63.68,82.9],[-61.85,82.6286],[-61.89388,82.36165],[-64.334,81.92775],[-66.75342,81.72527],[-67.65755,81.50141],[-65.48031,81.50657],[-67.84,80.9],[-69.4697,80.61683],[-71.18,79.8],[-73.2428,79.63415],[-73.88,79.430162],[-76.90773,79.32309],[-75.52924,79.19766],[-76.22046,79.01907],[-75.39345,78.52581],[-76.34354,78.18296],[-77.88851,77.89991],[-78.36269,77.50859],[-79.75951,77.20968],[-79.61965,76.98336],[-77.91089,77.022045],[-77.88911,76.777955],[-80.56125,76.17812],[-83.17439,76.45403],[-86.11184,76.29901],[-87.6,76.42],[-89.49068,76.47239],[-89.6161,76.95213],[-87.76739,77.17833],[-88.26,77.9],[-87.65,77.970222],[-84.97634,77.53873],[-86.34,78.18],[-87.96192,78.37181],[-87.15198,78.75867],[-85.37868,78.9969],[-85.09495,79.34543],[-86.50734,79.73624],[-86.93179,80.25145],[-84.19844,80.20836],[-83.408696,80.1],[-81.84823,80.46442],[-84.1,80.58],[-87.59895,80.51627],[-89.36663,80.85569],[-90.2,81.26],[-91.36786,81.5531],[-91.58702,81.89429],[-90.1,82.085],[-88.93227,82.11751],[-86.97024,82.27961],[-85.5,82.652273],[-84.260005,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.30664,83.13056],[-76.25,83.172059],[-75.71878,83.06404],[-72.83153,83.23324],[-70.665765,83.169781],[-68.5,83.106322]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-73.297,60.03676,-12.20855,83.64513],geometry:{type:"Polygon",coordinates:[[[-27.10046,83.51966],[-20.84539,82.72669],[-22.69182,82.34165],[-26.51753,82.29765],[-31.9,82.2],[-31.39646,82.02154],[-27.85666,82.13178],[-24.84448,81.78697],[-22.90328,82.09317],[-22.07175,81.73449],[-23.16961,81.15271],[-20.62363,81.52462],[-15.76818,81.91245],[-12.77018,81.71885],[-12.20855,81.29154],[-16.28533,80.58004],[-16.85,80.35],[-20.04624,80.17708],[-17.73035,80.12912],[-18.9,79.4],[-19.70499,78.75128],[-19.67353,77.63859],[-18.47285,76.98565],[-20.03503,76.94434],[-21.67944,76.62795],[-19.83407,76.09808],[-19.59896,75.24838],[-20.66818,75.15585],[-19.37281,74.29561],[-21.59422,74.22382],[-20.43454,73.81713],[-20.76234,73.46436],[-22.17221,73.30955],[-23.56593,73.30663],[-22.31311,72.62928],[-22.29954,72.18409],[-24.27834,72.59788],[-24.79296,72.3302],[-23.44296,72.08016],[-22.13281,71.46898],[-21.75356,70.66369],[-23.53603,70.471],[-24.30702,70.85649],[-25.54341,71.43094],[-25.20135,70.75226],[-26.36276,70.22646],[-23.72742,70.18401],[-22.34902,70.12946],[-25.02927,69.2588],[-27.74737,68.47046],[-30.67371,68.12503],[-31.77665,68.12078],[-32.81105,67.73547],[-34.20196,66.67974],[-36.35284,65.9789],[-37.04378,65.93768],[-38.37505,65.69213],[-39.81222,65.45848],[-40.66899,64.83997],[-40.68281,64.13902],[-41.1887,63.48246],[-42.81938,62.68233],[-42.41666,61.90093],[-42.86619,61.07404],[-43.3784,60.09772],[-44.7875,60.03676],[-46.26364,60.85328],[-48.26294,60.85843],[-49.23308,61.40681],[-49.90039,62.38336],[-51.63325,63.62691],[-52.14014,64.27842],[-52.27659,65.1767],[-53.66166,66.09957],[-53.30161,66.8365],[-53.96911,67.18899],[-52.9804,68.35759],[-51.47536,68.72958],[-51.08041,69.14781],[-50.87122,69.9291],[-52.013585,69.574925],[-52.55792,69.42616],[-53.45629,69.283625],[-54.68336,69.61003],[-54.75001,70.28932],[-54.35884,70.821315],[-53.431315,70.835755],[-51.39014,70.56978],[-53.10937,71.20485],[-54.00422,71.54719],[-55,71.406537],[-55.83468,71.65444],[-54.71819,72.58625],[-55.32634,72.95861],[-56.12003,73.64977],[-57.32363,74.71026],[-58.59679,75.09861],[-58.58516,75.51727],[-61.26861,76.10238],[-63.39165,76.1752],[-66.06427,76.13486],[-68.50438,76.06141],[-69.66485,76.37975],[-71.40257,77.00857],[-68.77671,77.32312],[-66.76397,77.37595],[-71.04293,77.63595],[-73.297,78.04419],[-73.15938,78.43271],[-69.37345,78.91388],[-65.7107,79.39436],[-65.3239,79.75814],[-68.02298,80.11721],[-67.15129,80.51582],[-63.68925,81.21396],[-62.23444,81.3211],[-62.65116,81.77042],[-60.28249,82.03363],[-57.20744,82.19074],[-54.13442,82.19962],[-53.04328,81.88833],[-50.39061,82.43883],[-48.00386,82.06481],[-46.59984,81.985945],[-44.523,81.6607],[-46.9007,82.19979],[-46.76379,82.62796],[-43.40644,83.22516],[-39.89753,83.18018],[-38.62214,83.54905],[-35.08787,83.64513],[-27.10046,83.51966]]]}}],bbox:[-180,-90,180,83.64513]};function Ni(n,e){return(n%e+e)%e}function n7(n,e,t,i){return n+(Ni(e-n+i/2,i)-i/2)*t}function Ac(n){let e=(n/864e5+24405875e-1-2451545)/36525,t=-62e-7*e**3+.093104*e**2+(876600*3600+8640184812866e-6)*e+67310.54841;return Ni(t*Math.PI/180/240,Math.PI*2)}function Do(n,e){let t=0,i=n.length-1;for(;i-t>1;){let u=t+i>>1;Date.parse(n[u].time)<=e?t=u:i=u}let s=n[t],r=n[i],a=Date.parse(s.time),o=Date.parse(r.time),c=Math.max(0,Math.min(1,(e-a)/(o-a))),l={};for(let u of["x","y","z","latitude_deg","altitude_km","speed_km_s"])l[u]=s[u]+(r[u]-s[u])*c;return l.longitude_deg=Ni(n7(s.longitude_deg,r.longitude_deg,c,360)+180,360)-180,l.gmst_rad=Ac(a+(o-a)*c),l}var vi=8,Cc=["#66ccff","#ff8066","#9be564","#d69cff","#ffd166","#72e0c1","#f28cb1","#b8c0ff"],Sd=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Xn(n){return Sd[Math.floor(Ni(n,360)/22.5+.5)%Sd.length]}function $n(n){if(/\b403\b/.test(n))return"CelesTrak is limiting downloads of this data for now. Try again later.";if(/Failed to fetch|NetworkError|Load failed/.test(n))return"The Khonsu server could not be reached.";let e=/deadline exceeded|Timeout exceeded|i\/o timeout|connection refused|connection reset|no such host|\b50[234]\b/i.test(n);return e&&/celestrak/i.test(n)?"CelesTrak isn't answering right now. Try again in a few minutes. Anything you've loaded before still works from its saved copy.":e?"The data provider isn't answering right now. Try again in a few minutes.":n}function wd(n){let e=(t,i)=>{try{return t(n())}catch{return i}};return{getItem:t=>e(i=>i.getItem(t),null),setItem:(t,i)=>e(s=>s.setItem(t,i)),removeItem:t=>e(i=>i.removeItem(t))}}function Pc(n){return/^\d{1,9}$/.test(n)&&Number(n)>=1}function Wn(n){return String(n).replace(/^0+(?=\d)/,"")}function Ed(n){let e=new URLSearchParams(n),t=new Set,i=[];for(let r of(e.get("sats")||"").split(",")){let a=Wn(r.trim());Pc(a)&&!t.has(a)&&i.length<vi&&(t.add(a),i.push(a))}let s=Wn(e.get("selected")||"");return{ids:i,selected:t.has(s)?s:i[0]??null}}function Td(n,e){if(!n.length)return"";let t=new URLSearchParams;return t.set("sats",n.join(",")),e&&e!==n[0]&&t.set("selected",e),`?${t.toString().replaceAll("%2C",",")}`}function Ad(n){return Cc.find(e=>!n.includes(e))??Cc[n.length%Cc.length]}function Ic({lat:n,lon:e,alt:t}){let i=Number(n),s=Number(e),r=t===""||t===void 0||t===null?0:Number(t);return String(n).trim()===""||!Number.isFinite(i)||i<-90||i>90?{error:"Latitude must be between -90 and 90 degrees."}:String(e).trim()===""||!Number.isFinite(s)||s<-180||s>180?{error:"Longitude must be between -180 and 180 degrees."}:!Number.isFinite(r)||r<-1||r>100?{error:"Altitude must be between -1 and 100 km."}:{observer:{lat:i,lon:s,alt:r}}}function Cd(n){for(let e of["observer","utc"]){let t=n.getItem(`tlego.${e}`);t!==null&&(n.getItem(`khonsu.${e}`)===null&&n.setItem(`khonsu.${e}`,t),n.removeItem(`tlego.${e}`))}}function Rd(n){try{let e=JSON.parse(n.getItem("khonsu.observer"));return typeof e?.lat!="number"||typeof e?.lon!="number"?null:Ic(e).observer??null}catch{return null}}function Pd(n,e){let t=e.trim().toLowerCase();return t?n.filter(i=>i.name.toLowerCase().includes(t)||i.norad_id.includes(t)):n}function Lc(n,e){if(!n.length||n[0].elevation_deg===void 0)return null;let t=0,i=n.length-1;for(;i-t>1;){let l=t+i>>1;Date.parse(n[l].time)<=e?t=l:i=l}let s=n[t],r=n[i],a=Date.parse(r.time)-Date.parse(s.time),o=a>0?Math.max(0,Math.min(1,(e-Date.parse(s.time))/a)):0;return{azimuth:Ni(s.azimuth_deg+(Ni(r.azimuth_deg-s.azimuth_deg+180,360)-180)*o,360),elevation:s.elevation_deg+(r.elevation_deg-s.elevation_deg)*o}}function Id(n,e){let t=n[0]?.sunlit??!0;for(let i of n){if(Date.parse(i.time)>e)break;t=i.sunlit}return t}function Ld(n,e,t){if(!n.length)return{first:0,count:0};let i=t*6e4,s=Date.parse(n[0].time),r=Date.parse(n[n.length-1].time);if(!(i>0)||r-s<=i)return{first:0,count:n.length};let a=Dc(e-i/2,s,r-i),o=a+i,c=n.length,l=-1;return n.forEach((u,f)=>{let h=Date.parse(u.time);h>=a&&h<=o&&(c=Math.min(c,f),l=f)}),l<c?{first:0,count:n.length}:(c=Math.max(0,c-1),l=Math.min(n.length-1,l+1),{first:c,count:l-c+1})}function Dc(n,e,t){return Math.min(t,Math.max(e,n))}var i7=new Set(["sampled_passes","estimated_visibility"]);function Dd(n){let e=new Map;for(let t of n)for(let i of t?.warnings??[])!i7.has(i.code)&&!e.has(i.code)&&e.set(i.code,i);return[...e.values()]}function Nd(n,e){return n.map(t=>({...t,visible:e.find(i=>Date.parse(i.start.at)<=Date.parse(t.end)&&Date.parse(i.end.at)>=Date.parse(t.start))??null}))}function Fd(n){let e=Math.max(0,Math.round(n/1e3)),t=Math.floor(e/3600),i=Math.floor(e%3600/60);return t>=48?`${Math.round(t/24)} days`:t>0?`${t} h ${i} min`:i>0?`${i} min ${e%60} s`:`${e} s`}function Nc(n,e){let t=n-e;if(t<=0)return"now";if(t<6e4)return"in under a minute";let i=Math.round(t/6e4);return i<60?`in ${i} min`:`in ${Math.floor(i/60)} h ${i%60} min`}function No(n,e){return Date.parse(n.start)<=Date.parse(e.end)&&Date.parse(n.end)>=Date.parse(e.start)}function Fc(n,e,t){let i=Math.abs(n).toFixed(1);return`${i}\xB0 ${n>=0||Number(i)===0?e:t}`}function Ms(n,e){return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:e?"UTC":void 0}).format(n)}function ws(n,e){return new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"numeric",month:"short",timeZone:e?"UTC":void 0}).format(n)}function Ud(n){return n>=5?"Geomagnetic storm":n>=4?"Active":"Quiet"}function Od(n){return!Number.isFinite(n)||n<=0?null:n>=1e9?`${(n/1e9).toFixed(3)} GHz`:`${(n/1e6).toFixed(3)} MHz`}function Bd(n){if(!n.length)return null;let e=n.reduce((i,s)=>s.kp_max>i.kp_max?s:i),t=n.reduce((i,s)=>i+s.f107,0)/n.length;return{strongest:e,meanFlux:t}}function Uc(n,e){let t=Math.max(0,Math.round((e-new Date(n).getTime())/6e4));if(t<1)return"just now";if(t<60)return`${t} min ago`;let i=Math.round(t/60);return i<48?`${i} h ago`:`${Math.round(i/24)} days ago`}function Oc(n){return n?"UTC":"local"}function kd(n,e){return(e-Date.parse(n))/864e5}function Bc(n,e,t){return`${Math.abs(n).toFixed(3)}\xB0 ${n>=0?e:t}`}var s7=36e5,r7=25*36e5;function kc(n){let e=Math.floor((n-s7)/1e3)*1e3;return{start:e,end:e+r7}}function zc(n,e){return e<n.start||e>n.end-2*36e5}function Vc(n){let e=n?.kp;return e?.length?e[e.length-1].kp??null:null}function zd(n){return(n??[]).filter(e=>e.alive===!0&&e.status==="active")}function Md(n){return String(n??"").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"")}function Vd(n,e){let t=Md(n),i=Md(e);return!t||!i?!1:t.includes(i)||i.includes(t)}function Gd(n,e=3e5){if(!n?.length)return[];let t=[...n].sort((r,a)=>Date.parse(a.time)-Date.parse(r.time)),i=[],s=null;for(let r of t){let a=Date.parse(r.time);(!i.length||s-a>e)&&i.push([]),i[i.length-1].push(r),s=a}return i.map(r=>{let a=r[0],o=r.map(c=>c.cloud_cover).filter(c=>typeof c=="number");return{time:Date.parse(a.time),scenes:r,lat:a.center_lat,lon:a.center_lon,minCloud:o.length?Math.min(...o):null,maxCloud:o.length?Math.max(...o):null}})}function Hd(n,e){if(!n?.length)return null;let t=null,i=1/0;for(let s of n){let r=Math.abs(Date.parse(s.time)-e);r<i&&(t=s,i=r)}return i<=36e5?t.percent:null}function Wd(n,e){let t=null,i=1/0;for(let s of n??[]){let r=Date.parse(s.net);Number.isNaN(r)||r<e||r<i&&(t=s,i=r)}return t}function Xd(n,e){let t=Date.parse(n.net)-e,i=String(n.precision??"").toLowerCase(),s=i!==""&&!["second","minute","hour"].includes(i),r=s?"in about":"in",a=Math.round(t/36e5);if(t<36e5)return s?`${r} ${Math.max(1,a)} h`:`${r} ${Math.max(1,Math.round(t/6e4))} min`;if(t<36*36e5)return`${r} ${a} h`;let o=Math.round(t/864e5);return`${r} ${o} ${o===1?"day":"days"}`}var a7={sun_synchronous:"Sun-synchronous",dawn_dusk:"Dawn-dusk",molniya:"Molniya",tundra:"Tundra",polar:"Polar",near_equatorial:"Near-equatorial",retrograde:"Retrograde"};function o7(n){return(Array.isArray(n)?n:[]).filter(e=>typeof e?.url=="string"&&/^https:\/\//.test(e.url)).map(e=>({label:String(e.label||"Source"),title:String(e.title||e.label||"Source"),url:e.url}))}function Rc(n){return(Array.isArray(n)?n:[]).filter(e=>typeof e?.text=="string"&&e.text.trim()).map(e=>({text:e.text,sources:o7(e.sources)}))}function $d(n,e=[]){let t=n?.described?n.profile:null;if(!t||!Array.isArray(t.instruments)||t.instruments.length===0)return null;let i=new Map(e.map(a=>[a.id,a])),s=(Array.isArray(t.kinds)?t.kinds:[]).filter(a=>a?.id&&a?.name),r=new Map(s.map(a=>[a.id,a.name]));return{name:String(t.name||""),chips:s.map(a=>a.name),items:Rc(t.statements),instruments:t.instruments.map(a=>({name:String(a.name||""),kinds:(a.kinds??[]).map(o=>r.get(o)).filter(Boolean),items:Rc(a.statements)})),kinds:s.map(a=>({id:a.id,name:a.name,items:Rc(a.statements),views:(a.layers??[]).filter(o=>i.has(o)).map(o=>({id:o,name:i.get(o).name})),lessons:(Array.isArray(a.lessons)?a.lessons:[]).filter(o=>o?.id&&o?.title).map(o=>({id:String(o.id),title:String(o.title)}))}))}}function qd(n){if(!n||!Array.isArray(n.statements)||n.statements.length===0)return null;let e=[n.regime_name||n.regime,...(n.patterns??[]).map(i=>a7[i])].filter(Boolean),t=n.statements.filter(i=>typeof i?.text=="string"&&i.text.trim()).map(i=>({text:i.text,estimate:i.basis!=="derived",sources:(Array.isArray(i.sources)?i.sources:[]).filter(s=>typeof s?.url=="string"&&/^https:\/\//.test(s.url)).map(s=>({label:String(s.label||"Source"),title:String(s.title||s.label||"Source"),url:s.url}))}));return t.length?{chips:e,items:t}:null}var l7={lat:80.8,lon:-72.8},c7={lat:-80.8,lon:107.2};function h7(n){return 66.5-2*Math.min(9,Math.max(0,n))}function Yd(n,e,t=120){let i=Math.PI/180,s=n.lat*i,r=n.lon*i,a=e*i,o=[];for(let c=0;c<t;c+=1){let l=2*Math.PI*c/t,u=Math.asin(Math.sin(s)*Math.cos(a)+Math.cos(s)*Math.sin(a)*Math.cos(l)),f=r+Math.atan2(Math.sin(l)*Math.sin(a)*Math.cos(s),Math.cos(a)-Math.sin(s)*Math.sin(u));o.push({lat:u/i,lon:((f/i+180)%360+360)%360-180})}return o.push({...o[0]}),o}function Zd(n){let e=90-h7(n);return[Yd(l7,e),Yd(c7,e)]}var Gc=6378.137,Hc=n=>new q(n.x/Gc,n.z/Gc,-n.y/Gc);function bi(n,e,t=1.002){let i=e*Math.PI/180,s=n*Math.PI/180;return new q(t*Math.cos(s)*Math.cos(i),t*Math.sin(s),-t*Math.cos(s)*Math.sin(i))}function Kd(n,e,t){let i=[];for(let r of n)for(let a=0;a<r.length-1;a+=1)i.push(r[a].x,r[a].y,r[a].z,r[a+1].x,r[a+1].y,r[a+1].z);let s=new Et;return s.setAttribute("position",new wt(i,3)),new $s(s,new Gn({color:e,transparent:!0,opacity:t}))}var u7=1;function d7(){let n=new Bn;n.add(new Tt(new gn(1,96,64),new js({color:1195868,specular:2381422,shininess:14})));let e=[];for(let i=-60;i<=60;i+=30){let s=[];for(let r=-180;r<=180;r+=3)s.push(bi(i,r));e.push(s)}for(let i=0;i<360;i+=30){let s=[];for(let r=-90;r<=90;r+=3)s.push(bi(r,i));e.push(s)}n.add(Kd(e,7910597,.1));let t=[];for(let i of bd.features){let s=i.geometry.type==="Polygon"?[i.geometry.coordinates]:i.geometry.coordinates;for(let r of s)for(let a of r)t.push(a.map(([o,c])=>bi(c,o)))}return n.add(Kd(t,14278378,.8)),n}function f7(){let n=[],e=7,t=()=>(e=e*16807%2147483647,e/2147483647);for(let s=0;s<1600;s+=1){let r=t()*2-1,a=t()*Math.PI*2,o=Math.sqrt(1-r*r)*400;n.push(o*Math.cos(a),o*Math.sin(a),r*400)}let i=new Et;return i.setAttribute("position",new wt(n,3)),new qs(i,new hs({color:11452364,size:1.1,sizeAttenuation:!1,transparent:!0,opacity:.6}))}function Jd(n,{onPick:e,onSelect:t}){let i=new Hs,s=new Vt(40,1,.01,2e3),r=new Co({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.append(r.domElement);let a=r.domElement;a.setAttribute("role","img"),a.setAttribute("aria-label","Earth with the tracked satellites. Drag to rotate and scroll to zoom. The readouts beside the globe give the same information as text.");let o=new Lo(s,a);o.enableDamping=!0,o.enablePan=!1,o.minDistance=1.02;let c=null;o.addEventListener("start",()=>{c=null}),o.maxDistance=60,i.add(f7());let l=d7();i.add(l);let u=new Tt(new gn(1.025,64,48),new mn({color:4892888,transparent:!0,opacity:.09,side:Ut}));i.add(u),i.add(new sr(12111840,.55));let f=new ir(16774368,2.6);f.position.set(4,3,5),i.add(f);let h=new Tt(new gn(.012,12,10),new mn({color:16777215}));h.visible=!1,l.add(h);let p=new Tt(new gn(.014,12,10),new mn({color:5088255}));p.visible=!1,l.add(p);let x=new Et;x.setAttribute("position",new $t(new Float32Array(6),3));let b=new li(x,new Gn({color:16777215,transparent:!0,opacity:.55}));b.visible=!1,b.frustumCulled=!1,i.add(b);let m=new Map,d=null,M=!1,A=!1,y=0,w=[],S=0;function T(){w.forEach((P,F)=>{P.mesh&&(P.mesh.renderOrder=u7+F)})}function _(P){P.mesh&&(l.remove(P.mesh),P.mesh.geometry.dispose(),P.mesh.material.dispose(),P.texture.dispose(),P.mesh=null)}async function E(P){let F=await fetch(P);if(!F.ok)throw new Error(`The image request failed (${F.status}).`);let J=await F.blob(),se=URL.createObjectURL(J);return new Promise((pe,fe)=>{let Ce=new Image;Ce.onload=()=>{URL.revokeObjectURL(se),Ce.imageryMeta={pictureDate:F.headers.get("X-Khonsu-Picture-Date")||"",fetchedAt:F.headers.get("X-Khonsu-Fetched-At")||"",stale:F.headers.get("X-Khonsu-Stale")==="true"},pe(Ce)},Ce.onerror=()=>{URL.revokeObjectURL(se),fe(new Error("The image could not be loaded."))},Ce.src=se})}function I(P){let{naturalWidth:F,naturalHeight:J}=P,se=document.createElement("canvas");se.width=F,se.height=J;let pe=se.getContext("2d");pe.drawImage(P,0,0);let fe=document.createElement("canvas");fe.width=F,fe.height=J;let Ce=fe.getContext("2d");return Ce.filter="blur(10px)",Ce.drawImage(P,0,0),pe.globalCompositeOperation="destination-in",pe.drawImage(fe,0,0),pe.drawImage(fe,0,0),se}async function B(P,F){let J=await E(P),se=F?new Zs(I(J)):new Nt(J);return se.colorSpace=Xt,se.userData.imageryMeta=J.imageryMeta,se.needsUpdate=!0,se}let $=1.001;function X(P){if(!P)return new gn(1,96,64);let F=Math.PI/180,J=Math.max(8,Math.ceil((P.maxLon-P.minLon)/.5)),se=Math.max(8,Math.ceil((P.maxLat-P.minLat)/.5));return new gn(1,Math.min(256,J),Math.min(256,se),(P.minLon+180)*F,(P.maxLon-P.minLon)*F,(90-P.maxLat)*F,(P.maxLat-P.minLat)*F)}function N(P,F){let J={id:P.id,url:P.url,transparent:P.transparent,box:P.box??null,request:F,status:null,texture:null,mesh:null};return J.status=B(P.url,P.transparent).then(se=>J.request!==S?(se.dispose(),new Error("This layer was replaced before it loaded.")):(J.texture=se,J.meta=se.userData.imageryMeta,J.mesh=new Tt(X(J.box),new mn({map:se,transparent:P.transparent,depthWrite:!1,depthFunc:ri,toneMapped:!1})),J.box&&J.mesh.scale.setScalar($),l.add(J.mesh),T(),"ok"),se=>se),J}function D(P){let F=++S,J=w,se=new Set,pe=[];for(let fe of P){if(se.has(fe.id))continue;se.add(fe.id);let Ce=!!fe.transparent,U=J.find(tt=>tt.id===fe.id&&tt.url===fe.url&&tt.transparent===Ce);U?(U.request=F,pe.push(U)):pe.push(N({id:fe.id,url:fe.url,transparent:Ce,box:fe.box},F))}for(let fe of J)pe.includes(fe)||_(fe);return w=pe,T(),Promise.all(pe.map(fe=>fe.status.then(Ce=>[fe.id,Ce==="ok"&&fe.meta?{status:Ce,meta:fe.meta}:Ce]))).then(Object.fromEntries)}let H=[];function V(P){for(let F of H)l.remove(F),F.geometry.dispose(),F.material.dispose();if(H=[],!!Number.isFinite(P))for(let F of Zd(P)){let J=new Et().setFromPoints(F.map(({lat:fe,lon:Ce})=>bi(fe,Ce,1.004))),se=new Qs({color:10476718,transparent:!0,opacity:.8,dashSize:.03,gapSize:.02}),pe=new li(J,se);pe.computeLineDistances(),l.add(pe),H.push(pe)}}function ee(P,F=null){c=null;let J=s.fov*Math.PI/360,se=Math.min(J,Math.atan(Math.tan(J)*s.aspect)),pe=F==null?0:F/Math.sin(se)*1.1,fe=Math.min(o.maxDistance,Math.max(3.6,(F??P.length())*2.6,pe));s.position.copy(P.normalize().add(new q(0,.35,0)).normalize().multiplyScalar(fe)),o.target.set(0,0,0),o.update()}function R(P=d){let F=m.get(P),J=F?F.marker.position.clone():new q(.68,.42,.76);J.lengthSq()<1e-6&&J.set(.68,.42,.76);let se=F?.line.geometry.getAttribute("position"),pe=Math.max(1,J.length());for(let fe=0;fe<(se?.count??0);fe+=1)pe=Math.max(pe,Math.hypot(se.getX(fe),se.getY(fe),se.getZ(fe)));ee(J,pe)}function O(P){M=P,o.enableRotate=!P}function W(P,F){p.position.copy(bi(P,F,1.003)),p.visible=!0,O(!1),l.updateMatrixWorld(!0),ee(p.getWorldPosition(new q))}function te(P,F,J=null){O(!1),l.updateMatrixWorld(!0);let se=bi(P,F,1).applyMatrix4(l.matrixWorld);if(!Number.isFinite(J)){ee(se);return}s.position.copy(se.normalize().multiplyScalar(Math.max(o.minDistance,Math.min(o.maxDistance,J)))),o.target.set(0,0,0),o.update(),c={lat:P,lon:F}}function he(){p.visible=!1}function Ie(P,F,J){Fe(P);let se=new Float32Array(F.samples.length*3);F.samples.forEach((tt,Ye)=>{let C=Hc(tt);se.set([C.x,C.y,C.z],Ye*3)});let pe=new Et;pe.setAttribute("position",new $t(se,3));let fe=new li(pe,new Gn({color:J,transparent:!0,opacity:.4}));fe.frustumCulled=!1;let Ce=new Tt(new gn(.014,16,12),new mn({color:J}));i.add(fe,Ce),m.set(P,{line:fe,marker:Ce,track:F});let U=Hc(F.sun_km);f.position.copy(U.normalize().multiplyScalar(10)),j(y)}function Fe(P){let F=m.get(P);F&&(i.remove(F.line,F.marker),F.line.geometry.dispose(),F.line.material.dispose(),F.marker.geometry.dispose(),F.marker.material.dispose(),m.delete(P))}function ke(){for(let[P,F]of m){let J=P===d;F.line.material.opacity=J?.95:.3,F.marker.scale.setScalar(J?1.5:1)}}function j(P){y=P,l.rotation.y=Ac(P);for(let F of m.values()){let{samples:J}=F.track;if(F.marker.position.copy(Hc(Do(J,P))),F.rangeAt===void 0||Math.abs(P-F.rangeAt)>15e3){let se=Ld(J,P,F.track.period_minutes);F.line.geometry.setDrawRange(se.first,se.count),F.rangeAt=P}}if(c){l.updateMatrixWorld(!0);let F=bi(c.lat,c.lon,1).applyMatrix4(l.matrixWorld);s.position.copy(F.normalize().multiplyScalar(s.position.length()))}if(M&&m.has(d)){let F=m.get(d).marker.position,J=Math.max(s.position.length(),F.length()*1.3);s.position.copy(F.clone().normalize().multiplyScalar(J))}ke()}function ae(P){h.visible=!!P,P&&h.position.copy(bi(P.lat,P.lon,1.003))}function ge(P){let F=m.get(d);if(b.visible=!!(P&&F&&h.visible),!b.visible)return;l.updateMatrixWorld();let J=h.getWorldPosition(new q);x.attributes.position.setXYZ(0,J.x,J.y,J.z),x.attributes.position.setXYZ(1,F.marker.position.x,F.marker.position.y,F.marker.position.z),x.attributes.position.needsUpdate=!0}function ze(P){let F=a.getBoundingClientRect(),J=P.clone().project(s);return J.z>1?null:{x:(J.x+1)/2*F.width,y:(1-J.y)/2*F.height}}function _e(P){let F=P.clone().sub(s.position),J=F.length(),se=F.normalize(),pe=s.position.dot(se),fe=pe*pe-s.position.lengthSq()+1;if(fe<0)return!1;let Ce=-pe-Math.sqrt(fe);return Ce>0&&Ce<J}function Ge(){let P=m.get(d);return!P||_e(P.marker.position)?null:ze(P.marker.position)}function ot(P){let F=a.getBoundingClientRect(),J=new qe((P.clientX-F.left)/F.width*2-1,1-(P.clientY-F.top)/F.height*2),se=new rr;se.setFromCamera(J,s);let{origin:pe,direction:fe}=se.ray,Ce=pe.dot(fe),U=Ce*Ce-pe.lengthSq()+1;if(U<0)return null;let tt=pe.clone().add(fe.clone().multiplyScalar(-Ce-Math.sqrt(U))),Ye=l.worldToLocal(tt),C=Math.asin(Math.max(-1,Math.min(1,Ye.y/Ye.length())))*180/Math.PI,g=Math.atan2(-Ye.z,Ye.x)*180/Math.PI;return g>=180&&(g-=360),{lat:C,lon:g}}function Xe(P){let F=a.getBoundingClientRect(),J=P.clientX-F.left,se=P.clientY-F.top,pe=null,fe=18;for(let[Ce,U]of m){if(_e(U.marker.position))continue;let tt=ze(U.marker.position);if(!tt)continue;let Ye=Math.hypot(tt.x-J,tt.y-se);Ye<fe&&(pe=Ce,fe=Ye)}return pe}let Q=null;return a.addEventListener("pointerdown",P=>{Q={x:P.clientX,y:P.clientY}}),a.addEventListener("pointerup",P=>{if(!Q||Math.hypot(P.clientX-Q.x,P.clientY-Q.y)>5)return;if(A){let J=ot(P);J&&e(J);return}let F=Xe(P);F&&t(F)}),new ResizeObserver(()=>{let P=n.getBoundingClientRect();!P.width||!P.height||(s.aspect=P.width/P.height,s.updateProjectionMatrix(),r.setSize(P.width,P.height))}).observe(n),s.position.set(2.4,1.2,2.8),o.update(),{setLayers:D,setAurora:V,setTrack:Ie,removeTrack:Fe,update:j,setObserver:ae,setSightLine:ge,selectedScreenPosition:Ge,home:R,showPoint:W,face:te,clearPoint:he,select(P){d=P,ke()},setFollowing:O,setPicking(P){A=P,a.classList.toggle("is-picking",P)},zoom(P){s.position.multiplyScalar(P);let F=s.position.length();s.position.setLength(Math.max(o.minDistance,Math.min(o.maxDistance,F))),o.update()},render(P){o.update(P),r.render(i,s)},onContextChange(P,F){a.addEventListener("webglcontextlost",J=>{J.preventDefault(),P()}),a.addEventListener("webglcontextrestored",F)}}}function jd(n,e){let t=e?.legend;if(!t||!/^\/api\/v1\/imagery-legend\?layer=[a-z0-9-]+$/.test(t.url??""))return null;let i=n("details","imagery-legend"),s=n("summary","",`${e.name} scale${t.unit?` (${t.unit})`:""}`),r=n("img","imagery-legend-image");r.src=t.url,r.alt=String(t.description||`${e.name} provider colour scale`);let a=n("p","note",t.description);if(i.append(s,r,a),/^https:\/\/gibs\.earthdata\.nasa\.gov\/legends\/[A-Za-z0-9_-]+\.png$/.test(t.source_url??"")){let o=n("a","","NASA GIBS original legend");o.href=t.source_url,o.target="_blank",o.rel="noopener noreferrer",i.append(o)}return i}var Qd="khonsu.layers",ef="true-color",tf="story-true-color",nf="story-true-color-npp",p7="2012-02-01",m7="Loading\u2026",g7="The globe is unavailable, so layers are turned off.",_7="Live data is off while serving a local file, so pictures and the aurora are unavailable.",x7="Could not load the list of pictures.",y7="Could not load this picture.",v7="A rough boundary from NOAA's Kp index, not a forecast.",b7="Aurora estimated from NOAA SWPC Kp";function sf({element:n,panel:e,credit:t,catalog:i,storage:s,globe:r,fetchHead:a=l=>fetch(l,{method:"HEAD"}),dataAge:o,now:c=Date.now}){let l={base:"",overlays:[],view:"",viewDate:"",viewBox:null,viewPlain:!1,aurora:!1,live:null,tried:null},u=new Map,f=new Map,h=new Map,p=new Map,x=new Map,b={},m=[],d=new Map,M=!1,A=0,y=Q=>[Q.minLat,Q.minLon,Q.maxLat,Q.maxLon].join(","),w=(Q,P="",F=null)=>"/api/v1/imagery?layer="+encodeURIComponent(Q)+(P?"&date="+encodeURIComponent(P):"")+(F?"&bbox="+encodeURIComponent(y(F)):""),S=()=>m.filter(Q=>!Q.topic&&!Q.story),T=()=>m.filter(Q=>Q.topic&&!Q.story),_=()=>S().filter(Q=>Q.transparent===!0).map(Q=>Q.id),E=Q=>d.has(Q)&&!d.get(Q).topic&&d.get(Q).transparent!==!0,I=Q=>d.has(Q)&&!!(d.get(Q).topic||d.get(Q).story),B=()=>E(ef)?ef:"",$=()=>l.tried??l.live;function X(){let Q=l.view?d.get(l.view):null,P=[...l.base?[l.base]:[],...l.overlays];Q&&(P=Q.transparent===!0||l.viewBox?[...l.base?[l.base]:[],Q.id]:[Q.id]);let F=l.viewDate>=p7?nf:tf;return Q&&Q.story&&Q.transparent===!0&&l.viewBox&&!l.viewPlain&&d.has(F)&&P.splice(P.indexOf(Q.id),0,F),P.filter(J=>d.has(J)).map(J=>{let se=J===l.view||(J===tf||J===nf)&&!!l.viewBox,pe=se?l.viewBox:null;return{id:J,url:w(J,se?l.viewDate:"",pe),transparent:d.get(J).transparent===!0,...pe?{box:pe}:{}}})}function N(){try{let Q=l.viewDate?"":l.view;s.setItem(Qd,JSON.stringify({base:l.base,overlays:l.overlays,view:Q,aurora:l.aurora}))}catch{}}function D(){let Q=null;try{Q=JSON.parse(s.getItem(Qd))}catch{Q=null}if(!Q||typeof Q!="object")return;l.base=typeof Q.base=="string"&&(Q.base===""||E(Q.base))?Q.base:"";let P=new Set(Array.isArray(Q.overlays)?Q.overlays:[]);l.overlays=_().filter(F=>P.has(F)),l.view=typeof Q.view=="string"&&I(Q.view)&&!d.get(Q.view).story?Q.view:"",l.aurora=Q.aurora===!0}function H(Q,P){let F=new Set(l.overlays);P?F.add(Q):F.delete(Q),l.overlays=_().filter(J=>F.has(J))}function V(Q){t.replaceChildren(...Q.map(P=>n("span","credit-line",P))),t.hidden=Q.length===0}function ee(Q){let P=Q.map(F=>{let J=u.get(F.url),se=J?.pictureDate||new URLSearchParams(F.url.split("?")[1]).get("date");return[F.name,se?`picture from ${se}`:"",F.credit,J?.fetchedAt?`retrieved ${o(J.fetchedAt,c())}`:"",J?.stale?"saved copy":""].filter(Boolean).join(" \xB7 ")});l.aurora&&P.push(b7),V(P);for(let F of Q){let J=jd(n,F);J&&t.append(J)}}async function R(Q){try{let P=await a(Q.url);if(P.ok===!1)return null;let F=P.headers,J=F.get("X-Khonsu-Fetched-At"),se=F.get("X-Khonsu-Picture-Date");return{pictureDate:/^\d{4}-\d{2}-\d{2}$/.test(se??"")?se:"",fetchedAt:J&&!Number.isNaN(Date.parse(J))?J:"",stale:F.get("X-Khonsu-Stale")==="true"}}catch{return null}}function O(Q,P){let F=f.get(Q);F&&(F.hidden=!P,F.textContent=P?y7:"")}function W(Q,P,F){if(Q!==A)return;let J=pe=>F[pe.id]==="ok"||F[pe.id]?.status==="ok";for(let pe of P)O(pe.id,!J(pe)),J(pe)&&F[pe.id]?.meta&&u.set(pe.url,F[pe.id].meta);let se=P.filter(J).map(pe=>({...d.get(pe.id),...pe}));ee(se),Promise.all(se.filter(pe=>!F[pe.id]?.meta).map(async pe=>{let fe=await R(pe);Q===A&&u.set(pe.url,fe)})).then(()=>{Q===A&&ee(se)})}function te(){let Q=X(),P=++A,F=new Set(Q.map(se=>se.id));for(let se of f.keys())F.has(se)||O(se,!1);u.clear(),V([m7]),r.setAurora(l.aurora?$():null);let J;try{J=Promise.resolve(r.setLayers(Q))}catch(se){J=Promise.reject(se)}J.then(se=>W(P,Q,se??{}),()=>W(P,Q,{}))}function he(){N(),Fe(),te()}function Ie(){return l.tried!==null?`Kp ${l.tried.toFixed(1)}, trying a value`:l.live!==null?`Kp ${l.live.toFixed(1)}, now`:"Kp is not available yet"}function Fe(){if(M){for(let[Q,P]of h)P.checked=Q===l.base;for(let[Q,P]of p)P.checked=l.overlays.includes(Q);for(let[Q,P]of x)P.checked=Q===l.view;b.aurora.checked=l.aurora,b.controls.hidden=!l.aurora,b.slider.value=String($()??0),b.kpNote.textContent=Ie(),b.back.hidden=l.tried===null}}function ke({type:Q,name:P,value:F,title:J,note:se=null,warn:pe=!1}){let fe=n("input",null,null);fe.setAttribute("type",Q),fe.setAttribute("name",P),fe.value=F;let Ce=n("label","layer-row",null);Ce.append(fe,n("span",null,J)),se&&Ce.append(n("span","note",se));let U=null;return pe&&(U=n("span","note is-warning",null),U.hidden=!0,Ce.append(U)),{label:Ce,input:fe,warning:U}}let j=[["Clouds now",()=>{l.base=B(),l.overlays=_(),l.view="",l.viewDate="",l.viewBox=null}],["Recent daily Earth",()=>{l.base=B(),l.overlays=[],l.view="",l.viewDate="",l.viewBox=null}],["Plain",()=>{l.base="",l.overlays=[],l.view="",l.viewDate="",l.viewBox=null,l.aurora=!1,l.tried=null}]];function ae(){h.clear(),p.clear(),x.clear(),f.clear();let Q=n("fieldset","layer-group",null);Q.append(n("legend",null,"Base picture"));let P=ke({type:"radio",name:"layer-base",value:"",title:"Plain globe"});P.input.addEventListener("change",()=>{P.input.checked&&(l.base="",he())}),h.set("",P.input),Q.append(P.label);for(let z of S().filter(Y=>Y.transparent!==!0)){let Y=ke({type:"radio",name:"layer-base",value:z.id,title:z.name,note:z.description,warn:!0});Y.input.addEventListener("change",()=>{Y.input.checked&&(l.base=z.id,he())}),h.set(z.id,Y.input),f.set(z.id,Y.warning),Q.append(Y.label)}let F=n("fieldset","layer-group",null);F.append(n("legend",null,"Near-live clouds"));for(let z of S().filter(Y=>Y.transparent===!0)){let Y=ke({type:"checkbox",name:"layer-overlay",value:z.id,title:z.name,note:z.description,warn:!0});Y.input.addEventListener("change",()=>{H(z.id,Y.input.checked),he()}),p.set(z.id,Y.input),f.set(z.id,Y.warning),F.append(Y.label)}let J=n("fieldset","layer-group",null);J.append(n("legend",null,"What satellites measure"));let se=ke({type:"radio",name:"layer-view",value:"",title:"None"});se.input.addEventListener("change",()=>{se.input.checked&&(l.view="",l.viewDate="",l.viewBox=null,he())}),x.set("",se.input),J.append(se.label);for(let z of T()){let Y=ke({type:"radio",name:"layer-view",value:z.id,title:z.name,note:z.description,warn:!0});Y.input.addEventListener("change",()=>{Y.input.checked&&(l.view=z.id,l.viewDate="",l.viewBox=null,he())}),x.set(z.id,Y.input),f.set(z.id,Y.warning),J.append(Y.label)}let pe=n("fieldset","layer-group",null);pe.append(n("legend",null,"Overlays"));let fe=ke({type:"checkbox",name:"layer-aurora",value:"aurora",title:"Aurora, estimated from Kp"});fe.input.addEventListener("change",()=>{l.aurora=fe.input.checked,l.aurora||(l.tried=null),he()}),pe.append(fe.label,n("p","note",v7));let Ce=n("input",null,null);Ce.setAttribute("type","range"),Ce.setAttribute("min","0"),Ce.setAttribute("max","9"),Ce.setAttribute("step","0.33"),Ce.setAttribute("aria-label","Try a Kp value");let U=n("p","note",null),tt=n("button",null,"Back to now");tt.setAttribute("type","button"),tt.hidden=!0;let Ye=n("div","aurora-controls",null);Ye.append(Ce,U,tt),Ye.hidden=!0,pe.append(Ye),Ce.addEventListener("input",()=>{let z=Number(Ce.value);Number.isFinite(z)&&(l.tried=z,Fe(),r.setAurora($()))}),tt.addEventListener("click",()=>{l.tried=null,Fe(),r.setAurora($())});let C=n("div","layer-presets",null);C.append(...j.map(([z,Y])=>{let ie=n("button",null,z);return ie.setAttribute("type","button"),ie.addEventListener("click",()=>{Y(),he()}),ie})),b.aurora=fe.input,b.slider=Ce,b.kpNote=U,b.back=tt,b.controls=Ye;let g=[Q,F];T().length&&g.push(J),e.replaceChildren(n("h2","eyebrow","Layers"),...g,pe,C)}async function ge(){if(!r){e.replaceChildren(n("p","note",g7)),t.hidden=!0;return}let Q=null;try{Q=await i}catch{Q=null}let P=n("h2","eyebrow","Layers");if(!Q){e.replaceChildren(P,n("p","note",x7)),t.hidden=!0;return}if(!Q.liveData){e.replaceChildren(P,n("p","note",_7)),t.hidden=!0;return}m=Array.isArray(Q.layers)?Q.layers:[],d=new Map(m.map(F=>[F.id,F])),D(),ae(),M=!0,Fe(),l.base||l.overlays.length||l.view||l.aurora?te():V([])}function ze(Q){l.live=Number.isFinite(Q)?Q:null,M&&(l.aurora&&l.tried===null&&r.setAurora(l.live),Fe())}function _e(){return{base:l.base,overlays:[...l.overlays],view:l.view,aurora:l.aurora}}function Ge(Q,P="",F=null,{plain:J=!1,base:se}={}){return!M||Q!==""&&!I(Q)||Q&&d.get(Q).story&&!P?!1:(typeof se=="string"&&(se===""||E(se))&&(l.base=se),l.view=Q,l.viewDate=Q?P:"",l.viewBox=Q&&F?F:null,l.viewPlain=!!J,se===void 0&&Q&&(d.get(Q).transparent===!0||F)&&!l.base&&(l.base=B()),he(),!0)}function ot(Q){return!M||Q!==""&&!E(Q)?!1:(l.base=Q,he(),!0)}function Xe(){return M?(Object.assign(l,{base:"",overlays:[],view:"",viewDate:"",viewBox:null,viewPlain:!1,aurora:!1,tried:null}),he(),!0):!1}return{start:ge,setKp:ze,selection:_e,show:Ge,setBase:ot,beginLesson:Xe,views:()=>T().map(Q=>({...Q})),viewOn:()=>l.view}}var S7="http://www.w3.org/2000/svg",yr=220,Lt=yr/2,Fi=92;function Ln(n,e,t){let i=document.createElementNS(S7,n);for(let[s,r]of Object.entries(e))i.setAttribute(s,r);return t?.append(i),i}function Wc(n,e){let t=Fi*(90-Math.max(0,Math.min(90,e)))/90,i=n*Math.PI/180;return[Lt+t*Math.sin(i),Lt-t*Math.cos(i)]}function rf(n,e,t,i){n.replaceChildren();let s=Ln("svg",{viewBox:`0 0 ${yr} ${yr}`,class:"sky-plot",role:"img"},n),r=e.filter(l=>l.elevation_deg>=0),a=r.reduce((l,u)=>!l||u.elevation_deg>l.elevation_deg?u:l,null);Ln("title",{},s).textContent=a?`Sky path peaking at ${Math.round(a.elevation_deg)} degrees in the ${Xn(a.azimuth_deg)}`:"Sky plot";for(let l of[0,30,60])Ln("circle",{cx:Lt,cy:Lt,r:Fi*(90-l)/90,class:l===0?"sky-horizon":"sky-ring"},s);Ln("line",{x1:Lt,y1:Lt-Fi,x2:Lt,y2:Lt+Fi,class:"sky-ring"},s),Ln("line",{x1:Lt-Fi,y1:Lt,x2:Lt+Fi,y2:Lt,class:"sky-ring"},s);for(let[l,u,f]of[["N",Lt,12],["E",yr-8,Lt+4],["S",Lt,yr-4],["W",8,Lt+4]])Ln("text",{x:u,y:f,class:"sky-label"},s).textContent=l;for(let[l,u]of[[30,"30\xB0"],[60,"60\xB0"]])Ln("text",{x:Lt+3,y:Lt-Fi*(90-l)/90-2,class:"sky-scale"},s).textContent=u;if(!r.length)return;let o=r.map(l=>Wc(l.azimuth_deg,l.elevation_deg).map(u=>u.toFixed(1)).join(",")).join(" ");if(Ln("polyline",{points:o,fill:"none",stroke:t,"stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},s),i){let l=r.filter(u=>{let f=Date.parse(u.at);return f>=Date.parse(i.start.at)&&f<=Date.parse(i.end.at)});l.length>1&&Ln("polyline",{points:l.map(u=>Wc(u.azimuth_deg,u.elevation_deg).map(f=>f.toFixed(1)).join(",")).join(" "),fill:"none",class:"sky-visible"},s)}let c=(l,u,f)=>{let[h,p]=Wc(l.azimuth_deg,l.elevation_deg);Ln("circle",{cx:h,cy:p,r:u,class:f,fill:t},s)};c(r[0],3,"sky-start"),c(a,4.5,"sky-peak")}var Xc=["identity","radio","sees"],$c=8,M7="Add a satellite to see its details here.",w7="Live data is off while serving a local file.",qc="Loading\u2026",af="Loading\u2026 The first time, Khonsu downloads the whole catalog, which can take a couple of minutes.",E7="Run khonsu setup to connect your own free Space-Track account, then restart Khonsu.";function of({api:n,element:e,feedCredit:t,dataFailure:i,dataTime:s,selectedEntry:r,catalog:a,panels:o,focusScene:c,clearScene:l}){let u=new Map,f=new Map,h={identity:0,radio:0,sees:0},p=Promise.resolve(a).then(D=>({liveData:D?.liveData??!0,spaceTrackReady:D?.spaceTrackReady??!1,imagingIds:D?.imagingIds??new Set}),()=>({liveData:!0,spaceTrackReady:!1,imagingIds:new Set})),x={satelliteDetails:D=>n.satelliteDetails(D),catalogRecord:D=>n.catalogRecord(D),spaceTrack:D=>n.spaceTrack(D),transmitters:D=>n.transmitters(D),recentScenes:D=>n.recentScenes(D)};function b(D,H){let V=`${D}:${H}`;if(u.has(V))return Promise.resolve(u.get(V));if(f.has(V))return f.get(V);let ee=new Promise(R=>R(x[D](H))).then(R=>(u.set(V,R),R)).finally(()=>f.delete(V));return f.set(V,ee),ee}function m(D,H,V,ee){return D.then(R=>{H()&&V(R)},R=>{H()&&R?.name!=="AbortError"&&ee(R)})}let d=D=>e("p","note",D);function M(D){let H=e("ul");return H.append(...D.filter(([,V])=>V).map(([V,ee])=>e("li",null,`${V}: ${ee}`))),H}function A(D){let[H,...V]=D.data;if(!H)return[d("Wikidata has no entry for this satellite."),...t(D)];let ee=[M([["Name",H.name],["Description",H.description],["Types",(H.types??[]).join(", ")],["Operators",(H.operators??[]).join(", ")],["Countries",(H.countries??[]).join(", ")],["Launch date",H.launch_date]])];return V.length&&ee.push(d(`Also matched: ${V.map(R=>R.name).join(", ")}`)),[...ee,...t(D)]}function y(D,H){let V=D.data;if(!V)return[d("GCAT has no entry for this satellite."),...t(D)];let ee=[e("h3","dossier-heading",`Catalog object: ${V.name}`)];return H&&!Vd(H.name,V.name)&&ee.push(d(`GCAT lists this object as ${V.name}, so these figures describe that entry alone.`)),ee.push(M([["Kind",V.kind],["Bus",V.bus],["Mass",V.mass_kg?`${V.mass_kg.toLocaleString("en-GB")} kg`:null],["Launched",V.launch_date],["Owner code",V.owner],["Manufacturer code",V.manufacturer],["Orbit class",V.orbit_class]])),[...ee,...t(D)]}function w(D){let[H]=D.data;return H?[e("h3","dossier-heading","Space-Track record"),M([["Name",H.name],["Object type",H.object_type],["Radar size",H.rcs_size],["Country code",H.country],["Launched",H.launch_date],["Decayed",H.decay_date],["Element epoch",H.epoch]]),...t(D)]:[d("Space-Track has no record for this satellite."),...t(D)]}function S(D){let H=zd(D.data);if(!H.length)return[d("SatNOGS lists no active transmitters for this satellite."),...t(D)];let V=e("ul");V.append(...H.slice(0,$c).map(O=>{let W=[Od(O.downlink_hz),O.mode].filter(Boolean).join(" \xB7 ");return e("li",null,W?`${O.description}: ${W}`:O.description)}));let ee=H.length,R=[d(`${ee} active transmitter${ee===1?"":"s"}`),V];return ee>$c&&R.push(d(`+ ${ee-$c} more`)),[...R,...t(D)]}function T(D){let H=[D.minCloud,D.maxCloud].filter(R=>R!=null).map(R=>Math.round(R));if(!H.length)return null;let V=Math.min(...H),ee=Math.max(...H);return V===ee?`${V}% cloud`:`${V}\u2013${ee}% cloud`}function _(D){let H=[`near ${D.lat.toFixed(1)}\xB0, ${D.lon.toFixed(1)}\xB0`];D.scenes.length>1&&H.push(`${D.scenes.length} tiles`);let V=T(D);return V&&H.push(V),H.join(" \xB7 ")}function E(D){let H=Gd(D.data);if(!H.length)return[d("Earth Search lists scenes from Sentinel-2 and Landsat satellites. This satellite is not one of them.")];let V=H.map(R=>{let O=e("button","scene-row");return O.type="button",O.dataset.focus=`scene:${R.time}`,O.setAttribute("aria-pressed","false"),O.append(e("strong",null,s(new Date(R.time).toISOString())),e("span",null,_(R))),O.addEventListener("click",()=>{for(let W of V)W.setAttribute("aria-pressed",String(W===O));c({lat:R.lat,lon:R.lon})}),O}),ee=e("div","scene-list");return ee.append(...V),[d("Recent scenes and where their centres are. Choose one to mark it on the globe. These are acquisition locations, not the pictures themselves."),ee,...t(D)]}function I(D,H,V){let ee=e("div","dossier-block"),R=e("div","dossier-block"),O=e("div","dossier-block");ee.append(d(qc)),R.append(d(af)),O.append(d(V.spaceTrackReady?qc:E7)),o.identity.replaceChildren(ee,R,O);let W=null,te=null,he=()=>{H()&&(te?te.error?R.replaceChildren(i(te.error)):R.replaceChildren(...y(te.feed,W?.feed?.data?.[0])):R.replaceChildren(d(af)))},Ie=m(b("satelliteDetails",D.id),H,j=>{W={feed:j},ee.replaceChildren(...A(j)),he()},j=>{W={error:j},ee.replaceChildren(i(j)),he()}),Fe=m(b("catalogRecord",D.id),H,j=>{te={feed:j},he()},j=>{te={error:j},he()}),ke=V.spaceTrackReady?m(b("spaceTrack",D.id),H,j=>O.replaceChildren(...w(j)),j=>O.replaceChildren(i(j))):null;return Promise.all([Ie,Fe,ke])}function B(D,H,V,ee,R){return D.replaceChildren(d(qc)),m(b(V,ee.id),H,O=>D.replaceChildren(...R(O)),O=>D.replaceChildren(i(O)))}async function $(D){if(!Xc.includes(D))return;let H=o[D],V=++h[D],ee=r();if(!ee){H.replaceChildren(d(M7));return}let R=await p,O=()=>h[D]===V&&r()?.id===ee.id;if(O()){if(!R.liveData){H.replaceChildren(d(w7));return}return D==="identity"?I(ee,O,R):D==="radio"?B(H,O,"transmitters",ee,S):B(H,O,"recentScenes",ee,E)}}function X(D=[]){for(let V of Xc)h[V]+=1;l();let H=[].concat(D).filter(V=>Xc.includes(V));return Promise.all(H.map(V=>$(V)))}async function N(){let D=r();return D?(await p).imagingIds.has(D.id):!1}return{open:$,selectionChanged:X,hasSees:N}}var T7="Add a satellite to see what it measures.",A7="Loading\u2026",C7="Khonsu doesn't describe this satellite's instruments yet. Each description is written by hand, with a source for every sentence, so only some satellites have one.",R7="Views on the globe need live data and WebGL.";function Ui(n,e,t){for(let i of t){let s=n("a","why-source",i.label);s.href=i.url,s.target="_blank",s.rel="noopener noreferrer",s.title=i.title,s.setAttribute("aria-label",`Source: ${i.title} (${i.label}, opens in a new tab)`),e.append(" ",s)}}function lf({api:n,element:e,panel:t,selectedEntry:i,dataFailure:s,layers:r,startLesson:a=null}){let o=new Map,c=new Set,l=0,u=d=>e("p","note",d);function f(d){let M=e("ul","why-list");return M.append(...d.map(A=>{let y=e("li","",A.text);return Ui(e,y,A.sources),y})),M}function h(d,M=null){let A=r()?.viewOn()===d.id,y=e("button","text-button data-view",A?`Showing ${d.name} \xB7 Hide`:`Show on the globe: ${d.name}`);return y.type="button",y.dataset.focus=`view:${d.id}`,y.setAttribute("aria-pressed",String(A)),y.addEventListener("click",()=>{M&&c.add(M),r()?.show(A?"":d.id)&&m()}),y}function p(d){let M=[e("h3","why-title","What it measures")],A=e("ul","why-chips data-chips");A.setAttribute("aria-label","Kinds of data"),A.append(...d.chips.map(w=>e("li","why-chip",w))),M.push(A),d.items.length&&M.push(f(d.items));for(let w of d.instruments)M.push(e("h4","data-instrument",w.name)),w.kinds.length&&M.push(u(w.kinds.join(" \xB7 "))),w.items.length&&M.push(f(w.items));M.push(e("h3","why-title data-kinds-title","About these kinds of data"));let y=r()?.views().length>0;for(let w of d.kinds){let S=e("details","data-kind");if(S.open=c.has(w.id),S.addEventListener("toggle",()=>{S.open?c.add(w.id):c.delete(w.id)}),S.append(e("summary","",w.name),f(w.items)),w.views.length||a&&w.lessons.length){let T=e("div","link-row");T.append(...w.views.map(_=>h(_,w.id))),a&&T.append(...w.lessons.map(_=>{let E=e("button","text-button data-view data-lesson",`Lesson: ${_.title}`);return E.type="button",E.addEventListener("click",()=>a(_.id)),E})),S.append(T)}M.push(S)}return y||M.push(u(R7)),M}function x(){let d=[u(C7)],M=r()?.views()??[];if(M.length){d.push(e("h3","why-title","What satellites measure"));let A=e("div","link-row");A.append(...M.map(y=>h(y))),d.push(A)}return d}function b(d,M){if(M.error){t.replaceChildren(s(M.error));return}let A=$d(M.response,r()?.views()??[]);t.replaceChildren(...A?p(A):x())}async function m(){let d=++l,M=i();if(!M){t.replaceChildren(u(T7));return}if(o.has(M.id)){b(M,o.get(M.id));return}t.replaceChildren(u(A7));let A;try{A={response:await n.satelliteData(M.id)},o.set(M.id,A)}catch(y){if(y?.name==="AbortError")return;A={error:y}}d===l&&i()?.id===M.id&&b(M,A)}return{render:m}}var cf="khonsu.panels",Oi={catalog:{variable:"--catalog-width",initial:268,min:200,max:480,label:"Resize the satellite list"},inspector:{variable:"--inspector-width",initial:320,min:280,max:640,label:"Resize the satellite details"}},P7=360,I7=16,L7=64;function D7(n,e,t,i){let{min:s,max:r}=Oi[n],a=Math.max(s,t-i-P7);return Math.round(Math.min(Math.max(e,s),r,a))}function N7(n){let e=null;try{e=JSON.parse(n.getItem(cf))}catch{e=null}let t={};for(let i of Object.keys(Oi)){let s=e?.[i];t[i]=Number.isFinite(s)?s:Oi[i].initial}return t}function F7(n,e,t,i){let s=t?L7:I7,r=n==="catalog"?"ArrowRight":"ArrowLeft",a=n==="catalog"?"ArrowLeft":"ArrowRight";return e===r?i+s:e===a?i-s:e==="Home"?Oi[n].min:e==="End"?Oi[n].max:null}function hf({root:n,handles:e,storage:t,windowWidth:i=()=>window.innerWidth}){let s=N7(t),r=c=>c==="catalog"?"inspector":"catalog";function a(c,l,u=!0){if(s[c]=D7(c,l,i(),s[r(c)]),n.style.setProperty(Oi[c].variable,`${s[c]}px`),e[c].setAttribute("aria-valuenow",String(s[c])),u)try{t.setItem(cf,JSON.stringify(s))}catch{}}for(let[c,l]of Object.entries(e)){let u=Oi[c];l.setAttribute("role","separator"),l.setAttribute("aria-orientation","vertical"),l.setAttribute("aria-label",u.label),l.setAttribute("aria-valuemin",String(u.min)),l.setAttribute("aria-valuemax",String(u.max)),l.tabIndex=0,l.title="Drag to resize. Double-click to reset.",l.addEventListener("pointerdown",f=>{if(f.button!==0)return;f.preventDefault(),l.setPointerCapture?.(f.pointerId),l.classList.add("is-dragging");let h=x=>{let b=c==="catalog"?x.clientX:i()-x.clientX;a(c,b,!1)},p=()=>{l.classList.remove("is-dragging"),l.removeEventListener("pointermove",h),l.removeEventListener("pointerup",p),l.removeEventListener("pointercancel",p),a(c,s[c])};l.addEventListener("pointermove",h),l.addEventListener("pointerup",p),l.addEventListener("pointercancel",p)}),l.addEventListener("keydown",f=>{let h=F7(c,f.key,f.shiftKey,s[c]);h!==null&&(f.preventDefault(),a(c,h))}),l.addEventListener("dblclick",()=>a(c,u.initial))}let o=()=>{for(let c of Object.keys(e))a(c,s[c],!1)};return o(),{fit:o,widths:()=>({...s})}}function U7(n,e){let t=e.trim().toLowerCase().split(/\s+/).filter(Boolean);if(!t.length)return[...n];let i=n.filter(r=>{let a=r.toLowerCase();return t.every(o=>a.includes(o))}),s=e.trim().toLowerCase();return[...i.filter(r=>r.toLowerCase().startsWith(s)),...i.filter(r=>!r.toLowerCase().startsWith(s))]}function uf({element:n,button:e,popover:t,input:i,list:s,onChoose:r,document:a=globalThis.document}){let o=[],c="",l=[],u=0;function f(M){return`group-option-${M}`}function h(){e.textContent=c||(o.length?"Choose a group":"Loading groups\u2026"),e.disabled=o.length===0}function p(){if(l=U7(o,i.value),u=Math.min(u,Math.max(0,l.length-1)),!l.length){s.replaceChildren(n("li","note group-empty","No group matches.")),i.removeAttribute("aria-activedescendant");return}s.replaceChildren(...l.map((M,A)=>{let y=n("li",`group-option${A===u?" is-active":""}`,M);return y.id=f(A),y.setAttribute("role","option"),y.setAttribute("aria-selected",String(M===c)),y.addEventListener("mousedown",w=>{w.preventDefault(),d(M)}),y})),i.setAttribute("aria-activedescendant",f(u)),s.children[u]?.scrollIntoView?.({block:"nearest"})}function x(){return!t.hidden}function b(){o.length&&(t.hidden=!1,e.setAttribute("aria-expanded","true"),i.value="",u=Math.max(0,o.indexOf(c)),p(),i.focus())}function m(M=!0){x()&&(t.hidden=!0,e.setAttribute("aria-expanded","false"),M&&e.focus())}function d(M){m(),M!==c&&(c=M,h(),r(M))}return e.addEventListener("click",()=>x()?m():b()),i.addEventListener("input",()=>{u=0,p()}),i.addEventListener("keydown",M=>{if(M.key==="ArrowDown"||M.key==="ArrowUp"){if(M.preventDefault(),!l.length)return;u=(u+(M.key==="ArrowDown"?1:l.length-1))%l.length,p()}else M.key==="Enter"?(M.preventDefault(),l[u]&&d(l[u])):M.key==="Escape"&&(M.preventDefault(),m())}),a?.addEventListener?.("mousedown",M=>{x()&&!t.contains(M.target)&&!e.contains(M.target)&&m(!1)}),h(),{setGroups(M){o=[...M],h()},setCurrent(M){c=M,h()},current:()=>c,open:b,close:m}}var rt={top:14,right:12,bottom:34,left:46};function bt(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function df(n,e,t=5){if(!(Number.isFinite(n)&&Number.isFinite(e))||e<=n)return[n];let i=(e-n)/t,s=10**Math.floor(Math.log10(i)),r=[1,2,5,10].map(o=>o*s).find(o=>o>=i),a=[];for(let o=Math.ceil(n/r)*r;o<=e+r*1e-9;o+=r)a.push(Number(o.toPrecision(12)));return a}function Yc(n,e){let t=[];for(let i=Math.floor(Math.log10(n));i<=Math.ceil(Math.log10(e));i+=1){let s=10**i;s>=n*.999&&s<=e*1.001&&t.push(s)}return t}function Zc(n,e,t,i){let s=e-n||1;return r=>t+(r-n)/s*(i-t)}function Kc(n,e,t,i){let s=Math.log10(n),r=Math.log10(e)-s||1;return a=>t+(Math.log10(a)-s)/r*(i-t)}var Kt=n=>Math.abs(n)>=1e3?n.toLocaleString("en-GB"):String(Number(n.toPrecision(4)));function ff(n,e){return`<svg class="chart" viewBox="0 0 360 200" role="img" aria-label="${bt(n)}" xmlns="http://www.w3.org/2000/svg">${e}</svg>`}function Uo(n,e,t){let i=e.map(r=>`<th scope="col">${bt(r)}</th>`).join(""),s=t.map(r=>`<tr>${r.map(a=>`<td>${bt(a)}</td>`).join("")}</tr>`).join("");return`<details class="chart-table"><summary>Show the numbers</summary><table><caption>${bt(n)}</caption><thead><tr>${i}</tr></thead><tbody>${s}</tbody></table></details>`}var Fo=(n,e,t)=>n-e<24?"start":t-n<24?"end":"middle";function pf(n,e,t=360-rt.right){return`<text class="chart-axis-label" x="${(rt.left+t)/2}" y="196" text-anchor="middle">${bt(n)}</text><text class="chart-axis-label" x="6" y="${(rt.top+200-rt.bottom)/2}" text-anchor="middle" transform="rotate(-90 6 ${(rt.top+200-rt.bottom)/2})">${bt(e)}</text>`}function Jc({title:n,xLabel:e,yLabel:t,points:i,highlight:s=[]}){let r=i.filter(A=>Number.isFinite(A.x)&&Number.isFinite(A.y)).sort((A,y)=>A.x-y.x);if(r.length<2)return"";let a=r.map(A=>A.x),o=r.map(A=>A.y),c=df(Math.min(...o),Math.max(...o)),l=Math.min(c[0],...o),u=Math.max(c.at(-1),...o),f=Zc(Math.min(...a),Math.max(...a),rt.left,360-rt.right),h=Zc(l,u,200-rt.bottom,rt.top),p=c.map(A=>`<line class="chart-grid" x1="${rt.left}" x2="${360-rt.right}" y1="${h(A).toFixed(1)}" y2="${h(A).toFixed(1)}"/><text class="chart-tick" x="${rt.left-5}" y="${(h(A)+3).toFixed(1)}" text-anchor="end">${bt(Kt(A))}</text>`).join(""),b=df(Math.min(...a),Math.max(...a),5).filter(A=>A>=a[0]&&A<=a.at(-1)).map(A=>`<text class="chart-tick" x="${f(A).toFixed(1)}" y="${200-rt.bottom+13}" text-anchor="${Fo(f(A),rt.left,360-rt.right)}">${bt(A)}</text>`).join(""),m=r.map((A,y)=>`${y?"L":"M"}${f(A.x).toFixed(1)},${h(A.y).toFixed(1)}`).join(""),d=s.map(A=>r.find(y=>y.x===A.x)&&{...A,point:r.find(y=>y.x===A.x)}).filter(Boolean).map(({point:A,label:y})=>`<circle class="chart-mark" cx="${f(A.x).toFixed(1)}" cy="${h(A.y).toFixed(1)}" r="3.5"/><text class="chart-note" x="${f(A.x).toFixed(1)}" y="${(h(A.y)-7).toFixed(1)}" text-anchor="${Fo(f(A.x),rt.left,360-rt.right)}">${bt(y)}</text>`).join("");return ff(n,`${p}${b}<path class="chart-line" d="${m}"/>${d}${pf(e,t)}`)+Uo(n,[e,t],r.map(A=>[A.x,Kt(A.y)]))}function mf({title:n,xLabel:e,yLabel:t,points:i}){let s=i.filter(S=>Number.isFinite(S?.x)&&Number.isFinite(S?.y)&&S.x>0&&S.y>0);if(!s.length)return"";let r=s.map(S=>S.x),a=s.map(S=>S.y),o=10**Math.floor(Math.log10(Math.min(...r))),c=Math.max(o*10,10**Math.ceil(Math.log10(Math.max(...r)))),l=10**Math.floor(Math.log10(Math.min(...a))),u=Math.max(l*10,10**Math.ceil(Math.log10(Math.max(...a)))),f=312,h=Kc(o,c,rt.left+4,f),p=Kc(l,u,200-rt.bottom,rt.top),x=Yc(l,u).map(S=>`<line class="chart-grid" x1="${rt.left}" x2="${f}" y1="${p(S).toFixed(1)}" y2="${p(S).toFixed(1)}"/><text class="chart-tick" x="${rt.left-5}" y="${(p(S)+3).toFixed(1)}" text-anchor="end">${bt(Kt(S))}</text>`).join("")+Yc(o,c).map(S=>`<text class="chart-tick" x="${h(S).toFixed(1)}" y="${200-rt.bottom+13}" text-anchor="${Fo(h(S),rt.left+4,f)}">${bt(S>=1e3?`${Kt(S/1e3)}k`:Kt(S))}</text>`).join(""),b=new Map;for(let S of s){let T=`${S.x},${S.y}`;b.has(T)||b.set(T,[]),b.get(T).push(S)}let m=[...b.values()].sort((S,T)=>T[0].y-S[0].y||S[0].x-T[0].x),d=m.map((S,T)=>{let _=S[0],E=rt.top+6+T*(200-rt.bottom-rt.top-12)/Math.max(1,m.length-1);return{group:S,number:T+1,cx:h(_.x).toFixed(1),cy:p(_.y).toFixed(1),labelY:E.toFixed(1)}}),M=d.map(({cx:S,cy:T,labelY:_})=>`<line class="chart-leader" x1="${S}" y1="${T}" x2="335" y2="${_}" stroke="var(--muted)" stroke-width="0.5"/>`).join(""),A=d.map(({group:S,number:T,cx:_,cy:E,labelY:I})=>`<g class="chart-point"><title>${bt(`${T}: ${S.map(B=>B.label).join(", ")}`)}</title><circle cx="${_}" cy="${E}" r="2.5"/><text class="chart-note" x="340" y="${Number(I)+3}" text-anchor="middle">${T}</text></g>`).join(""),y=ff(n,`${x}${M}${A}${pf(`${e} (log)`,`${t} (log)`,f)}`),w=`<p class="note">Numbers link dots to the key. Instruments at identical coordinates share a number. Each axis tick is ten times the previous one; k means thousand.</p><ol class="note">${m.map(S=>`<li>${S.map(T=>bt(T.label)).join(", ")}</li>`).join("")}</ol>`;return y+w+Uo(n,["Key","Instrument",e,t],d.flatMap(({group:S,number:T})=>S.map(_=>[T,_.label,Kt(_.x),Kt(_.y)])))}function gf({title:n,regions:e,rows:t,min:i=.3,max:s=3e5}){if(!(Number.isFinite(i)&&Number.isFinite(s)&&i>0&&s>i))return"";let r=y=>Number.isFinite(y?.from)&&Number.isFinite(y?.to)&&y.from>0&&y.to>=y.from&&y.to>=i&&y.from<=s,a=t.map(y=>({...y,bands:y.bands.filter(r)})).filter(y=>y.bands.length);if(!a.length)return"";let o=18,c=36,l=c+a.length*o+30,u=rt.left+40,f=360-rt.right,h=Kc(i,s,u,f),p=e.filter(y=>r(y)&&y.to>i&&y.from<s).map((y,w)=>{let S=h(Math.max(i,y.from)),T=h(Math.min(s,y.to));return`<rect class="chart-region chart-region-${w%6}" x="${S.toFixed(1)}" y="${c-4}" width="${(T-S).toFixed(1)}" height="${a.length*o+8}"/><text class="chart-note" x="${((S+T)/2).toFixed(1)}" y="${c-8-w%2*9}" text-anchor="middle">${bt(y.label)}</text>`}).join(""),x=y=>y.from===y.to?`Centre: ${Kt(y.from)} \xB5m`:`${Kt(y.from)}\u2013${Kt(y.to)} \xB5m (range)`,b=a.map((y,w)=>{let S=c+w*o,T=`<text class="chart-tick" x="${rt.left+34}" y="${S+11}" text-anchor="end">${bt(y.label)}</text>`,_=y.bands.map(E=>{let I=h(Math.max(i,E.from)),B=h(Math.min(s,E.to)),$=`<title>${bt(`${y.label} ${E.name}: ${x(E)}`)}</title>`;return E.from===E.to?`<line class="chart-centre" x1="${I.toFixed(1)}" x2="${I.toFixed(1)}" y1="${S+2}" y2="${S+o-2}" stroke="var(--accent)" stroke-width="2">${$}</line>`:`<rect class="chart-band" x="${I.toFixed(1)}" y="${S+3}" width="${(B-I).toFixed(1)}" height="${o-6}">${$}</rect>`}).join("");return T+_}).join(""),m=Yc(i,s).map(y=>`<text class="chart-tick" x="${h(y).toFixed(1)}" y="${l-14}" text-anchor="${Fo(h(y),u,f)}">${bt(y>=1e3?`${Kt(y/1e4)} cm`:`${Kt(y)} \xB5m`)}</text>`).join(""),d=`<svg class="chart" viewBox="0 0 360 ${l}" role="img" aria-label="${bt(n)}" xmlns="http://www.w3.org/2000/svg">${p}${b}${m}</svg>`,M='<p class="note">Lines mark centre wavelengths, not bandwidths. Bars show reported wavelength ranges. Ranges stop at the panel edges; the table keeps their full endpoints.</p>',A=a.flatMap(y=>y.bands.map(w=>[y.label,w.name,x(w)]));return d+M+Uo(n,["Instrument","Band","Wavelength"],A)}function _f({title:n,unit:e="",bars:t,approximate:i=e==="%"}){if(t.some(h=>!Number.isFinite(h?.value)||h.value<0))throw new RangeError("Bar values must be finite and nonnegative");let s=t;if(!s.length)return"";let r=22,a=s.length*r+16,o=Math.max(...s.map(h=>h.value),0)||1,c=Zc(0,o,90,320),l=s.map((h,p)=>{let x=8+p*r;return`<text class="chart-tick" x="84" y="${x+13}" text-anchor="end">${bt(h.label)}</text><rect class="chart-band" x="90" y="${x+3}" width="${(c(h.value)-90).toFixed(1)}" height="${r-8}"/><text class="chart-note" x="${(c(h.value)+4).toFixed(1)}" y="${x+13}">${bt(`${i?"\u2248":""}${Kt(h.value)}${e}`)}</text>`}).join("");return`<svg class="chart" viewBox="0 0 360 ${a}" role="img" aria-label="${bt(n)}" xmlns="http://www.w3.org/2000/svg"><line class="chart-grid" x1="90" x2="90" y1="0" y2="${a}"/>${l}</svg>`+(i?'<p class="note">\u2248 means approximately. See the accompanying source for the comparison period and uncertainty.</p>':"")+Uo(n,["",e?`Value (${e})`:"Value"],s.map(h=>[h.label,`${i?"\u2248":""}${Kt(h.value)}`]))}function xf(n){let e=new Map,t=null;for(let r of n??[]){if(!Number.isFinite(r?.x)||!Number.isFinite(r?.y))continue;let a=Math.floor(r.x),o=e.get(a)??{sum:0,count:0,first:r.x,last:r.x};o.sum+=r.y,o.count+=1,o.first=Math.min(o.first,r.x),o.last=Math.max(o.last,r.x),t=t===null?r.x:Math.max(t,r.x),e.set(a,o)}let i=[...e.entries()].sort((r,a)=>r[0]-a[0]),s=i.filter(([r,{first:a,last:o}])=>{let c=r%4===0&&(r%100!==0||r%400===0)?366:365;return a-r>31/c||r+1-o>31/c}).map(([r])=>r);return{points:i.map(([r,{sum:a,count:o}])=>({x:r,y:Number((a/o).toFixed(1))})),partialYears:s,through:t}}function yf(n){let e=new URLSearchParams(n),t=e.get("lesson");if(!t||!/^[a-z0-9-]{1,64}$/.test(t))return null;let i=Number.parseInt(e.get("step")??"1",10);return{id:t,step:Number.isFinite(i)&&i>=1?i-1:0}}function vf(n,e){if(!e)return n;let t=n.includes("?")?"&":"?";return`${n}${t}lesson=${encodeURIComponent(e.id)}&step=${e.step+1}`}function jc(n){return{text:String(n?.text??""),sources:(Array.isArray(n?.sources)?n.sources:[]).filter(e=>typeof e?.url=="string"&&/^https:\/\//.test(e.url)).map(e=>({label:String(e.label||"Source"),title:String(e.title||e.label||"Source"),url:e.url}))}}function O7(n,e){if(!e)return[];let t=new Set([e.regime,...e.patterns??[]].filter(Boolean));return(n??[]).filter(i=>(i.orbits??[]).some(s=>t.has(s)))}function bf({api:n,element:e,card:t,list:i,layers:s,showSatellite:r,face:a,openTab:o=()=>{},play:c=()=>{},onChange:l}){let u=null,f=null,h=null;function p(){return f??(f=n.lessons().then(R=>(u=Array.isArray(R?.lessons)?R.lessons:[],u),R=>{throw f=null,R})),f}let x=R=>s()?.views().find(O=>O.id===R)?.name??R,b=R=>R?{minLat:R.min_lat,minLon:R.min_lon,maxLat:R.max_lat,maxLon:R.max_lon}:null,m=(R,O)=>s()?.show(R.layer,R.date,b(R.box),{plain:!!R.plain,base:O}),d=R=>Array.isArray(R.pictures)&&R.pictures.length>=2?R.pictures:null;function M(R,O){let W={base:"",view:""};for(let te of R.steps.slice(0,O+1))te.satellite&&(W.satellite=te.satellite),te.camera&&(W.camera=te.camera),te.tab&&(W.tab=te.tab),te.play&&(W.play=te.play),typeof te.base=="string"&&(W.base=te.base),(d(te)||te.picture||te.compare?.length===2||typeof te.view=="string")&&(delete W.pictures,delete W.picture,delete W.compare,delete W.view,d(te)?W.pictures=te.pictures:te.picture?W.picture=te.picture:te.compare?.length===2?W.compare=te.compare:W.view=te.view);return W}function A(R,O=!1){if(R.satellite&&r(R.satellite,{frame:!R.camera})===!1)return!1;let W=s();return O&&W?.beginLesson(),W&&(d(R)?m(R.pictures[0],R.base):R.picture?m(R.picture,R.base):W.show(R.compare?.[0]??R.view,"",null,{base:R.base})),R.camera&&a(R.camera.lat,R.camera.lon,R.camera.distance||null),R.tab&&o(R.tab),!0}let y=new Map;function w(R){let O=R.dataset==="sea-ice"?`sea-ice:${R.hemisphere}:${R.month}`:R.dataset;if(!y.has(O)){let W=R.dataset==="sea-ice"?n.seaIce(R.hemisphere,R.month):n.seaLevel();y.set(O,W.catch(te=>{throw y.delete(O),te}))}return y.get(O)}async function S(R){if(R.dataset==="bars")return{markup:_f({title:R.title,unit:R.unit,bars:R.bars.map(Ge=>({label:Ge.label,value:Ge.value}))})};let O=await w(R);if(R.dataset==="sea-ice"){let Ge=(O.data??[]).map(Xe=>({x:Xe.year,y:Xe.extent_million_km2})),ot=(R.highlight??[]).map(Xe=>({x:Xe,label:String(Xe)}));return{markup:Jc({title:R.title,xLabel:"Year",yLabel:`Extent (${R.unit})`,points:Ge,highlight:ot}),feed:O,note:"Computed by Khonsu from NSIDC's monthly values."}}let W=O.data??{},{points:te,partialYears:he,through:Ie}=xf((W.points??[]).map(Ge=>({x:Ge.year,y:Ge.level_mm}))),Fe=Ie===null?null:Math.floor(Ie),ke=Fe===null?null:new Date(Date.UTC(Fe,0,1)+Math.round((Ie-Fe)*(Date.UTC(Fe+1,0,1)-Date.UTC(Fe,0,1)))),j=ke?` Latest observation: ${ke.toISOString().slice(0,10)} UTC, converted from NOAA's decimal year.`:"",ae=W.trend?` NOAA's stated trend: ${W.trend}.`:"",ge=Array.isArray(W.notes)?W.notes.join(" "):W.notes??"",ze=he.map(Ge=>({x:Ge,label:`${Ge} partial`})),_e=he.length?` Partial years: ${he.join(", ")}. These means cover only the available observations.`:"";return{markup:Jc({title:R.title,xLabel:"Year",yLabel:"Sea-level anomaly (mm)",points:te,highlight:ze}),feed:O,note:`Annual means of NOAA's sea-level anomalies, computed by Khonsu.${_e}${j} The seasonal cycle is removed. No glacial-isostatic adjustment is applied.${ae} ${ge}`.trim()}}function T(R,O){let W=e("div","lesson-chart");return W.append(e("p","note","Loading the record\u2026")),S(R).then(({markup:te,feed:he,note:Ie})=>{if(O!==X)return;let Fe=e("div","learn-chart");Fe.innerHTML=te;let ke=[e("p","lesson-chart-title",R.title),Fe];Ie&&ke.push(e("p","note",Ie)),he?.source?.credit&&ke.push(e("p","note lesson-credit",he.source.credit)),R.source&&ke.push(_([jc(R.source)])),W.replaceChildren(...ke)},te=>{O===X&&W.replaceChildren(e("p","note is-error",`Could not load this record: ${te.message}`))}),W}function _(R){let O=e("ul","why-list");return O.append(...R.map(W=>{let te=e("li","",W.text);return Ui(e,te,W.sources),te})),O}function E(R,O,W){let te=e("button",O,R);return te.type="button",te.dataset.lessonFocus=R,te.addEventListener("click",W),te}function I(R){let O=e("div","lesson-compare");return O.setAttribute("role","group"),O.setAttribute("aria-label","Compare pictures"),O.append(...R.pictures.map((W,te)=>{let he=E(W.label||W.date,"text-button",()=>{h.compareOn=te,m(W,R.base),N()});return he.setAttribute("aria-pressed",String(h.compareOn===te)),he})),O}function B(R){let O=e("div","lesson-compare");return O.setAttribute("role","group"),O.setAttribute("aria-label","Compare two views"),O.append(...R.compare.map((W,te)=>{let he=E(x(W),"text-button",()=>{h.compareOn=te,s()?.show(W,"",null,{base:R.base}),N()});return he.setAttribute("aria-pressed",String(h.compareOn===te)),he})),O}function $(R){let O=e("div","lesson-question");O.append(e("p","lesson-prompt",R.prompt));let W=e("div","lesson-choices");if(W.append(...R.choices.map((te,he)=>{let Ie=E(te,"text-button lesson-choice",()=>{h.answer=he,N()});return Ie.setAttribute("aria-pressed",String(h.answer===he)),h.answer!==null&&(Ie.disabled=!0,he===R.answer&&Ie.classList.add("is-right")),Ie})),O.append(W),h.answer!==null){let te=h.answer===R.answer?"Yes.":`Not quite: it's "${R.choices[R.answer]}".`,he=e("div","lesson-feedback");he.setAttribute("role","status"),he.append(e("p","lesson-verdict",te),_([jc(R.explain)])),O.append(he)}return O}let X=0;function N(){if(X+=1,!h){t.hidden=!0,t.replaceChildren();return}let R=t.ownerDocument?.activeElement,O=t.contains?.(R)?R?.dataset?.lessonFocus:null,{lesson:W}=h;t.classList?.toggle?.("is-story",!!W.story);let te={...W.steps[h.step],...M(W,h.step)},he=W.steps.length,Ie=[e("p","eyebrow",h.applied?`${W.story?"Story":"Lesson"} \xB7 step ${h.step+1} of ${he}`:"Scene not applied"),e("h2","lesson-title",W.title)];if(h.error){let ge=e("p","note is-error",h.error);ge.setAttribute("role","alert"),Ie.push(ge,E("Retry scene","text-button",()=>D(h.pendingStep,h.pendingLesson)))}if(h.applied){let ge=(te.text??[]).map(jc).filter(ze=>ze.text);ge.length&&Ie.push(_(ge)),d(te)?Ie.push(I(te)):Array.isArray(te.compare)&&te.compare.length===2&&Ie.push(B(te)),te.chart&&Ie.push(T(te.chart,X)),te.hint&&Ie.push(e("p","note lesson-hint",te.hint)),te.question&&Ie.push($(te.question)),!s()?.views().length&&(te.view||te.compare||te.base||te.picture||te.pictures)&&Ie.push(e("p","note","The pictures in this lesson need live data and WebGL, so the globe stays as it is."))}let Fe=e("div","lesson-actions"),ke=E("Back","text-button",()=>D(h.step-1));ke.disabled=!h.applied||h.step===0;let j=h.step===he-1,ae=E(j?"Finish":"Next","primary-button",()=>j?V():D(h.step+1));if(ae.disabled=!h.applied,Fe.append(ke,ae,E("Close","text-button lesson-close",V)),Ie.push(Fe),t.replaceChildren(...Ie),t.hidden=!1,O){let ge=[...t.querySelectorAll?.("button")??[]];(ge.find(_e=>_e.dataset.lessonFocus===O&&!_e.disabled)??ge.find(_e=>_e.textContent==="Retry scene")??ae).focus?.()}}function D(R,O=h?.lesson,W=!1){if(!O)return!1;let te=Math.max(0,Math.min(O.steps.length-1,R)),he=M(O,te),Ie=A(he,W||!h?.applied||h.lesson!==O);return Ie&&c(he.play??null),Ie?h={lesson:O,step:te,answer:null,compareOn:0,applied:!0}:(h??(h={lesson:O,step:te,answer:null,compareOn:0,applied:!1}),h.error=`This scene needs another satellite, but all tracking slots are full. Remove a satellite from Tracked, then retry, or close the lesson. ${h.applied?"Your current scene has not changed.":"No lesson scene has been applied."}`,h.pendingStep=te,h.pendingLesson=O),N(),l(),Ie}async function H(R,O=0){let te=(await p()).find(he=>he.id===R);return!te||!Array.isArray(te.steps)||!te.steps.length?!1:D(O,te,!0)}function V(){c(null),h=null,N(),l()}async function ee(R){i.replaceChildren(e("p","note","Loading\u2026"));let O;try{O=await p()}catch(W){i.replaceChildren(e("p","note is-error",`Could not load the lessons: ${W.message}`));return}i.replaceChildren(...O.map(W=>{let te=e("div","lesson-item");return te.append(e("h3","lesson-item-title",W.title),e("p","note",W.summary)),te.append(E("Start","text-button",()=>{R?.(),H(W.id)})),te}))}return{start:H,stop:V,renderList:ee,forOrbit:R=>p().then(O=>O7(O,R),()=>[]),current:()=>h?.applied?{id:h.lesson.id,step:h.step}:null,holdsCamera:()=>!!(h?.applied&&M(h.lesson,h.step).camera)}}var Sf=[{id:"kinds",title:"Kinds of data"},{id:"sharp",title:"Sharp or often"},{id:"stories",title:"Stories"},{id:"lessons",title:"Lessons"}];function vr(n){return(Array.isArray(n)?n:[]).filter(e=>typeof e?.text=="string"&&e.text.trim()).map(e=>({text:e.text,sources:(Array.isArray(e.sources)?e.sources:[]).filter(t=>typeof t?.url=="string"&&/^https:\/\//.test(t.url)).map(t=>({label:String(t.label||"Source"),title:String(t.title||t.label||"Source"),url:t.url}))}))}function B7(n){return(n??[]).filter(e=>Array.isArray(e.bands)&&e.bands.length).map(e=>({label:e.short||e.id.toUpperCase(),bands:e.bands.filter(t=>Number.isFinite(t?.from_um)&&Number.isFinite(t?.to_um)&&t.from_um>0&&t.to_um>=t.from_um).map(t=>({name:t.name,from:t.from_um,to:t.to_um}))})).filter(e=>e.bands.length)}function k7(n){return(n??[]).filter(e=>Number.isFinite(e.resolution_m)&&Number.isFinite(e.revisit_days)&&e.resolution_m>0&&e.revisit_days>0).map(e=>({label:e.short||e.id.toUpperCase(),x:e.resolution_m,y:e.revisit_days}))}function z7(n){let e=(n??[]).filter(t=>(t.orbits??[]).length);return[["How orbits work",e],["Reading the data",(n??[]).filter(t=>!e.includes(t))]]}function Mf({api:n,element:e,panel:t,layers:i,showSatellite:s,startLesson:r,startStory:a,onClose:o}){let c=null,l=null,u="kinds",f=0;function h(){return l??(l=n.learn().then(T=>(c=T??{},c),T=>{throw l=null,T})),l}let p=(T,_="note")=>e("p",_,T);function x(T,_,E){let I=e("button",_,T);return I.type="button",I.addEventListener("click",E),I}function b(T){let _=e("ul","why-list");return _.append(...T.map(E=>{let I=e("li","",E.text);return Ui(e,I,E.sources),I})),_}function m(T){let _=e("div","learn-chart");return _.innerHTML=T,_}function d(T){let _=e("details","learn-card");_.append(e("summary","learn-card-title",T.name));let E=(T.conditions??[]).filter(X=>X?.label);if(E.length){let X=e("ul","learn-conditions");X.append(...E.map(N=>e("li",`learn-condition ${N.value?"is-yes":"is-no"}`,N.label))),_.append(X)}_.append(b(vr([...T.statements??[],...E])));let I=vr(T.uses);if(I.length&&_.append(e("h4","learn-subtitle","Used today for"),b(I)),(T.satellites??[]).length){_.append(e("h4","learn-subtitle","Collected by"));let X=e("div","learn-chips");X.append(...T.satellites.map(N=>x(N.name,"learn-chip",()=>s(N.norad_id)))),_.append(X)}let B=(T.layers??[]).map(X=>i()?.views().find(N=>N.id===X)).filter(Boolean),$=e("div","link-row");return $.append(...B.map(X=>x(`Show on the globe: ${X.name}`,"text-button data-view",()=>i()?.show(X.id)))),$.append(...(T.lessons??[]).map(X=>{let N=(c.stories??[]).some(D=>D.id===X.id);return x(`${N?"Story":"Lesson"}: ${X.title}`,"text-button data-view",()=>(N?a:r)(X.id))})),(B.length||(T.lessons??[]).length)&&_.append($),_}function M(){let T=[p("What can satellites measure? Open a kind of data to see how it works, what people use it for, and which satellites collect it.","learn-intro")],_=B7(c.instruments);if(_.length&&Array.isArray(c.regions)&&c.regions.length){T.push(e("h3","why-title","Where each instrument looks"));let E=c.regions.map(I=>({label:I.label,from:I.from_um,to:I.to_um}));for(let[I,B,$]of[["Light: visible and infrared",.3,20],["Radio: radar and microwave",1e4,3e5]]){let X=_.map(N=>({...N,bands:N.bands.filter(D=>D.to>=B&&D.from<=$)})).filter(N=>N.bands.length);X.length&&(T.push(e("p","lesson-chart-title",I)),T.push(m(gf({title:`${I}: bands of instruments Khonsu describes`,regions:E.filter(N=>N.to>B&&N.from<$),rows:X,min:B,max:$}))))}c.regions_sources&&T.push(b(vr(c.regions_sources)))}return T.push(...(c.kinds??[]).map(d)),T}function A(){let T=k7(c.instruments),_=[p("Compare the finest spatial resolution of the listed bands and modes with their stated time between observations.","learn-intro")];if(_.push(p("Resolution depends on the band and operating mode. For a non-square measurement, this chart uses the shorter side; the specifications below give both dimensions. These are instrument figures, not the detail shown by this globe.")),_.push(p("The times below include repeat cycles, revisit times and coverage intervals. Some assume one satellite, others a two-satellite fleet. Read each specification before comparing them. A scheduled look does not guarantee a cloud-free picture.")),_.push(b(vr(c.sharp_statements))),T.length){_.push(m(mf({title:"Finest spatial resolution against observation interval",xLabel:"Finest resolution (m)",yLabel:"Days between looks",points:T})));let E=(c.instruments??[]).filter(I=>I.specs);E.length&&(_.push(e("h4","learn-subtitle","Where the numbers come from")),_.push(b(vr(E.map(I=>I.specs)))))}else _.push(p("The numbers for this chart are not available."));return _}function y(){let T=c.stories??[];return T.length?[p("See how satellites help explain fires, floods and other changes on Earth. Stories use dated pictures, charts or published findings. Each one explains what its evidence can and cannot show.","learn-intro"),...T.map(_=>{let E=e("div","learn-story");return E.append(e("h3","learn-story-title",_.title),p(_.summary)),(_.when||_.where)&&E.append(p([_.when,_.where].filter(Boolean).join(" \xB7 "),"note learn-story-meta")),E.append(x("Open the story","text-button",()=>a(_.id))),E})]:[p("No stories yet.")]}function w(){let T=c.lessons??[],_=I=>{let B=e("div","learn-story");return B.append(e("h3","learn-story-title",I.title),p(I.summary),x("Start","text-button",()=>r(I.id))),B},E=[p("Try a short guided tour. Look at the globe, make a prediction, then check the explanation and its sources.","learn-intro")];for(let[I,B]of z7(T))B.length&&E.push(e("h3","why-title",I),...B.map(_));return E}async function S(){let T=++f,_=u,E=e("div","learn-header");E.append(e("h2","eyebrow","Learn"),x("Close","text-button",()=>{f+=1,o()}));let I=e("div","learn-tabs");I.setAttribute("role","tablist"),I.setAttribute("aria-label","Learn chapters"),I.append(...Sf.map(X=>{let N=x(X.title,"learn-tab",()=>(u=X.id,S()));return N.setAttribute("role","tab"),N.setAttribute("aria-selected",String(X.id===u)),N}));let B=e("div","learn-body");B.append(p("Loading\u2026")),t.replaceChildren(E,I,B);try{await h()}catch(X){if(T!==f)return;B.replaceChildren(p(`Could not load Learn: ${X.message}`,"note is-error"),x("Try again","text-button",S));return}if(T!==f)return;let $={kinds:M,sharp:A,stories:y,lessons:w};B.replaceChildren(...$[_]())}return{render:S,show(T){return Sf.some(_=>_.id===T)&&(u=T),S()},chapter:()=>u}}var V7="Loading\u2026",wf="Live data is off while serving a local file.";function Ef({api:n,element:e,feedCredit:t,dataFailure:i,dataTime:s,catalog:r,chips:a,popover:o,onKp:c=()=>{},now:l=Date.now}){let u=S(),f=S(),h=S(),p=S(),x=!1,b=!0,m=null,d=0,M=null,A=null,y=null,w=null;function S(){return{feed:null,error:null,pending:null}}function T(P,F){if(!P.pending){let J;try{J=Promise.resolve(F())}catch(se){J=Promise.reject(se)}P.pending=J.then(se=>{P.feed=se,P.error=null},se=>{cn(se)||(P.error=se)}).then(()=>{P.pending=null,I()})}return P.pending}function _(){if(!b)return"off";if(u.feed){let P=Vc(u.feed.data);return P===null?"unavailable":P.toFixed(1)}return u.error&&!u.pending?"unavailable":"\u2026"}function E(){if(!b)return"off";if(f.feed){let P=l(),F=Wd(f.feed.data,P);return F?Xd(F,P):"none listed"}return f.error&&!f.pending?"unavailable":"\u2026"}function I(){y&&(y.textContent=_(),w.textContent=E())}function B(){M?.setAttribute("aria-expanded",String(m==="weather")),A?.setAttribute("aria-expanded",String(m==="launch"))}function $(P,F,J){let se=e("button","sky-chip",null);return se.setAttribute("type","button"),se.setAttribute("aria-haspopup","dialog"),se.setAttribute("aria-expanded","false"),se.append(P,F),se.addEventListener("click",()=>Ge(J)),se}function X(P){let F=e("div","data-values");for(let[J,se]of P){let pe=e("span",null,`${J} `);pe.append(e("strong",null,se)),F.append(pe)}return F}function N(P,F){if(P.feed){let J=F(P.feed);return P.error&&J.push(i(P.error)),J}return P.error&&!P.pending?[i(P.error)]:[e("p","note",V7)]}function D(P,F){let J=e("div","sky-block");return J.append(...N(P,F)),J}function H(P){let{kp:F=[],flux:J=[],scales:se,alerts:pe=[]}=P.data,fe=[],Ce=F.at(-1),U=Ce?[["Kp",`${Ce.kp.toFixed(1)} ${Ud(Ce.kp)}`]]:[];if(J.length&&U.push(["F10.7",String(Math.round(J.at(-1).flux))]),se&&U.push(["Scales",`G${se.geomagnetic.level} S${se.solar.level} R${se.radio.level}`]),U.length&&fe.push(X(U)),pe.length){let tt=e("ul");tt.append(...pe.slice(0,3).map(Ye=>e("li",null,`${s(Ye.issued_at)}: ${Ye.headline}`))),fe.push(tt)}return[...fe,...t(P)]}function V(P){let F=Bd(P.data);return F?[X([["Past year, strongest Kp",`${F.strongest.kp_max.toFixed(1)} on ${F.strongest.date}`],["Average F10.7",String(Math.round(F.meanFlux))]]),...t(P)]:[e("p","note","No observed days are available.")]}function ee(P){if(!P.data.length)return[e("p","note","No events in the past two weeks."),...t(P)];let F=e("ul");return F.append(...P.data.slice(0,4).map(J=>e("li",null,`${s(J.time)}: ${J.kind}${J.detail?` (${J.detail})`:""}`))),[F,...t(P)]}function R(P){if(!P.data.length)return[e("p","note","No upcoming launches are listed."),...t(P)];let F=e("ul");return F.append(...P.data.slice(0,5).map(J=>{let se=e("li","sky-launch",J.name);return se.append(e("span","sky-meta",` ${s(J.net)} \xB7 ${J.status}`)),se})),[F,...t(P)]}function O(){let P=e("h3","sky-title","Space weather");return b?[P,...N(u,H),D(h,V),D(p,ee)]:[P,e("p","note",wf)]}function W(){let P=e("h3","sky-title","Next launches");return b?[P,...N(f,R)]:[P,e("p","note",wf)]}function te(){m&&o.replaceChildren(...m==="weather"?O():W())}function he(P,F){P.then(()=>{F===d&&te()})}function Ie(){return Promise.resolve(n.spaceWeather()).then(P=>(c(Vc(P.data)),P),P=>{throw cn(P)||c(null),P})}function Fe(P){b&&(he(T(u,Ie),P),h.feed||he(T(h,()=>n.spaceWeatherHistory()),P),p.feed||he(T(p,()=>n.spaceEvents()),P))}function ke(P){b&&he(T(f,()=>n.launches()),P)}function j(P){o.contains(P.target)||M.contains(P.target)||A.contains(P.target)||ot()}function ae(P){if(P.key!=="Escape"||!m)return;let F=m==="weather"?M:A;ot(),F.focus()}function ge(){globalThis.document.addEventListener("pointerdown",j),globalThis.document.addEventListener("keydown",ae)}function ze(){globalThis.document.removeEventListener("pointerdown",j),globalThis.document.removeEventListener("keydown",ae)}function _e(P){m||ge(),m=P,d+=1;let F=d;B(),o.hidden=!1,te(),P==="weather"?Fe(F):ke(F)}function Ge(P){m===P?ot():_e(P)}function ot(){m&&(m=null,d+=1,ze(),B(),o.hidden=!0,o.replaceChildren())}async function Xe(){if(x)return;if(x=!0,y=e("strong",null,"\u2026"),w=e("strong",null,"\u2026"),M=$("Kp ",y,"weather"),A=$("Launch ",w,"launch"),a.append(M,A),o.hidden=!0,b=(await Promise.resolve(r).catch(()=>null))?.liveData!==!1,!b){I(),c(null);return}await Promise.all([T(u,Ie),T(f,()=>n.launches())])}function Q(){w&&(w.textContent=E())}return{start:Xe,tick:Q,close:ot}}var Qc=200,G7=10*6e4,H7="25544",W7=6e4,X7=15e3,Yo=48,$7=1500,ce=n=>document.getElementById(n),Ot=Eh(),Mi=wd(()=>window.localStorage);Cd(Mi);var L={tracked:new Map,selected:null,observer:Rd(Mi),utc:Mi.getItem("khonsu.utc")==="1",window:kc(Date.now()),time:Date.now(),live:!0,playing:!1,groups:[],items:[],isSearchResult:!1,catalogLoading:!1,tab:"now",report:null,plan:null,planError:null,planLoading:!1,planFor:null,planAt:0,activePass:null,clouds:null},at=null,Tf=0,Af=0,Cf=!1,Bf=!0,Es=null,Oo=null,Rf=null,Rs=null,Wo=null,on=null,Xo=null,kf=null,eh=new Map,Pf="",If=null,Bo=yf(location.search),ko=null,th=null,Lf=0,nh=["now","orbit","data","passes"],zf={identity:"now",radio:"now",sees:"data"};function oh(){return Object.entries(zf).filter(([n,e])=>e===L.tab&&ce(`section-${n}`).open&&!ce(`section-${n}`).hidden).map(([n])=>n)}function lh(n,e,t){let i=document.activeElement,s=i&&n.contains(i)?i.dataset.focus:null;if(e(),!s)return;([...n.querySelectorAll("[data-focus]")].find(a=>a.dataset.focus===s)??t)?.focus({preventScroll:!0})}function de(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function ch(){return[...L.tracked.keys()]}function bn(){return L.tracked.get(L.selected)??null}function hh(){history.replaceState(null,"",vf(Td(ch(),L.selected)||location.pathname,on?.current()))}function ki(n){return`${ws(n,L.utc)} ${Ms(n,L.utc)}`}async function Zo(n){n.error=null,n.loading=!0,clearTimeout(n.retryTimer),n.request=(n.request??0)+1;let e=n.request;br();try{let t=await Ot.track(n.id,L.window.start,L.observer);if(L.tracked.get(n.id)!==n)return;n.track=t.data,n.name=t.data.name||n.name,n.provenance=t.provenance,n.warnings=t.warnings,n.lookStale=!1,at?.setTrack(n.id,t.data,n.color),at?.select(L.selected),n.framePending&&(n.framePending=!1,n.id===L.selected&&!on?.holdsCamera()&&at?.home(n.id))}catch(t){if(cn(t))return;n.error=$n(t.message),n.retryTimer=setTimeout(()=>{L.tracked.get(n.id)===n&&n.error&&Zo(n)},W7)}finally{n.request===e&&(n.loading=!1),L.tracked.get(n.id)===n&&n.request===e&&(br(),Zn(),Er(),Ko())}}function Ts(n,e,{selectIt:t=!0,frame:i=!0}={}){let s=Wn(n);if(L.tracked.has(s))return t&&Ps(s),!0;if(L.tracked.size>=vi)return qn(`You can track up to ${vi} satellites. Remove one to add another.`,"is-warning"),!1;let r={id:s,name:e||`NORAD ${s}`,color:Ad([...L.tracked.values()].map(a=>a.color)),track:null,error:null,loading:!0,framePending:i};return L.tracked.set(s,r),t&&Ps(s),Zo(r),!0}function Vf(n){clearTimeout(L.tracked.get(n)?.retryTimer),L.tracked.delete(n),at?.removeTrack(n),L.selected===n?Ps(ch()[0]??null):(hh(),br(),Zn(),Ko())}function Ps(n){let e=L.selected!==n;L.selected=n,at?.select(n),e&&(L.report=null,L.plan=null,L.planFor=null,L.planError=null,L.activePass=null,n&&L.tracked.get(n)?.track&&!on?.holdsCamera()&&at?.home(n)),hh(),br(),Zn(),Er(),Ko(),wr(),Xf(),e&&q7()}function q7(){let n=++Lf;L.tab==="data"&&Wo.render(),Rs.hasSees().then(e=>{if(n!==Lf)return;let t=ce("section-sees");t.hidden=!e,e||(t.open=!1),Rs.selectionChanged(oh())})}function Gf(){for(let n of L.tracked.values())Zo(n)}function uh(n){L.window=kc(n),fh(),Gf()}function qn(n,e=""){let t=ce("catalog-status");t.textContent=n,t.className=`note ${e}`}async function Y7(){try{if(L.groups=await Ot.groups(),!Array.isArray(L.groups))throw new Error("The server returned an unexpected response.")}catch(e){L.groups=[],cn(e)||qn(`Could not load satellite groups: ${$n(e.message)}`,"is-error");return}Xo.setGroups(L.groups);let n=L.groups.find(e=>e==="Space Stations")??L.groups[0];n&&(Xo.setCurrent(n),await ih(n))}var As=0;async function ih(n){let e=++As;if(L.isSearchResult=!1,eh.has(n)){L.items=eh.get(n),L.catalogLoading=!1,qn(""),Zn();return}L.items=[],L.catalogLoading=!0,Zn(),qn(`Loading ${n}\u2026 The first time can take a few seconds.`);try{let t=await Ot.satellites(n);if(e!==As)return;L.items=Array.isArray(t)?t:[],eh.set(n,L.items),qn("")}catch(t){if(e!==As)return;cn(t)||qn(`Could not load ${n}: ${$n(t.message)}`,"is-error")}L.catalogLoading=!1,Zn()}async function Z7(n){let e=++As;L.items=[],L.isSearchResult=!0,L.catalogLoading=!0,Zn(),qn("Searching every group. The first search can take up to a minute.");try{let t=await Ot.search(n);if(e!==As)return;L.items=t.satellites??[];let i=t.groups_covered<t.groups_total;qn(i?`Searched ${t.groups_covered} of ${t.groups_total} groups, so more matches may exist.`:`${t.satellites.length} matches across all groups.`,i?"is-warning":"")}catch(t){if(e!==As)return;cn(t)||qn(`Search failed: ${$n(t.message)}`,"is-error")}L.catalogLoading=!1,Zn()}function Zn(){let n=ce("filter-input").value,e=L.tracked.size>=vi,t=[L.items.length,L.items[0]?.norad_id,L.isSearchResult,L.catalogLoading,n,ch().join(",")].join("|");if(t===Pf&&If===L.items)return;Pf=t,If=L.items;let i=L.isSearchResult?L.items:Pd(L.items,n),s=ce("catalog-list");if(L.catalogLoading&&!L.items.length){s.replaceChildren(...Array.from({length:12},()=>de("li","catalog-skeleton"))),s.setAttribute("aria-busy","true"),Df(n);return}s.removeAttribute("aria-busy"),lh(s,()=>{s.replaceChildren(...i.slice(0,Qc).map(r=>{let a=Wn(r.norad_id),o=L.tracked.has(a),c=de("li"),l=de("button","catalog-row");l.type="button",l.setAttribute("aria-pressed",String(o)),l.disabled=!o&&e,l.dataset.focus=`catalog:${a}`,l.title=o?`Stop tracking ${r.name}`:e?`You can track up to ${vi} satellites`:`Track ${r.name}`;let u=de("span","catalog-mark",o?"\u2713":"+");return u.setAttribute("aria-hidden","true"),l.append(u,de("span","catalog-name",r.name),de("span","catalog-id",r.norad_id)),l.addEventListener("click",()=>o?Vf(a):Ts(a,r.name)),c.append(l),c})),i.length>Qc&&s.append(de("li","note",`Showing ${Qc} of ${i.length}. Filter to narrow the list.`)),e&&s.prepend(de("li","note",`You can track up to ${vi} satellites. Remove one to add another.`))},ce("filter-input")),Df(n)}function Df(n){let e=ce("catalog-actions");e.replaceChildren();let t=n.trim();if(Pc(t)&&!L.tracked.has(Wn(t))){let i=de("button","text-button",`Track NORAD ${Wn(t)}`);i.type="button",i.disabled=L.tracked.size>=vi,i.addEventListener("click",()=>Ts(t)),e.append(i)}if(t&&!L.isSearchResult){let i=de("button","text-button","Search all groups");i.type="button",i.addEventListener("click",()=>Z7(t)),e.append(i)}}function br(){let n=ce("tracked-list");if(!L.tracked.size){n.replaceChildren(de("li","note","Nothing yet. Pick a satellite below."));return}lh(n,()=>n.replaceChildren(...[...L.tracked.values()].map(e=>{let t=de("li",`tracked-row${e.id===L.selected?" is-selected":""}`),i=de("button","tracked-select");i.type="button",i.setAttribute("aria-current",String(e.id===L.selected)),i.dataset.focus=`tracked:${e.id}`;let s=de("span","dot");s.style.setProperty("--color",e.color),i.append(s,de("span","tracked-name",e.loading&&!e.track?`${e.name} \xB7 loading`:e.name)),e.error&&i.append(de("span","tracked-error",e.error)),i.addEventListener("click",()=>Ps(e.id));let r=de("button","row-action","\xD7");if(r.type="button",r.setAttribute("aria-label",`Stop tracking ${e.name}`),r.dataset.focus=`remove:${e.id}`,r.title=`Stop tracking ${e.name}`,r.addEventListener("click",()=>Vf(e.id)),t.append(i,r),e.error){let a=de("button","text-button tracked-retry","Try again");a.type="button",a.dataset.focus=`retry:${e.id}`,a.setAttribute("aria-label",`Try loading ${e.name} again`),a.addEventListener("click",()=>Zo(e)),t.append(a)}return t})),ce("filter-input"))}function Bi(n,e){for(;n.children.length>e.length;)n.lastElementChild.remove();e.forEach(([t,i,s],r)=>{let a=n.children[r];a||(a=de("div"),a.append(de("dt"),de("dd")),n.append(a)),a.children[0].textContent=t,a.children[1].textContent=i,a.children[1].className=s||""})}function dh(){let n=bn(),e=ce("now-note"),t=n?.track?.samples;if(!t?.length){Bi(ce("now-readouts"),[]),e.textContent=n?.error??(n?"Loading\u2026":"Add a satellite to see its position."),e.className=`note${n?.error?" is-error":""}`;return}let i=Date.parse(t.at(-1).time);if(L.time>i+6e4&&n.warnings?.some(u=>u.code==="propagation_stopped")){Bi(ce("now-readouts"),[]),e.textContent=`This orbit cannot be predicted past ${ki(i)}. The satellite may have decayed.`,e.className="note is-warning";return}let s=Dc(L.time,Date.parse(t[0].time),i),r=Do(t,s),a=[["Latitude",Bc(r.latitude_deg,"N","S")],["Longitude",Bc(r.longitude_deg,"E","W")],["Altitude",`${r.altitude_km.toFixed(1)} km`],["Speed",`${r.speed_km_s.toFixed(3)} km/s`],["Sunlight",Id(t,s)?"Sunlit":"In Earth\u2019s shadow"]],o=n.lookStale?null:Lc(t,s);o&&(a.push(["Direction",`${Xn(o.azimuth)} (${o.azimuth.toFixed(1)}\xB0)`]),a.push(["Elevation",`${o.elevation.toFixed(1)}\xB0`,o.elevation>0?"is-good":""])),Bi(ce("now-readouts"),a);let c=n.provenance?kd(n.provenance.element_epoch,s):0,l=[];L.observer||l.push("Set your location to see where to look."),Math.abs(c)>3&&l.push(`These elements are ${Math.abs(c).toFixed(0)} days from the displayed time, so positions may be well off.`);for(let u of n.warnings??[])l.push(u.message);e.textContent=l.join(" "),e.className=`note${Math.abs(c)>3||n.warnings?.length?" is-warning":""}`}function K7(){let n=bn(),e=n?.track?.samples,t=e?.length&&!n.lookStale&&L.time<=Date.parse(e.at(-1).time)?Lc(e,L.time):null;at?.setSightLine(!!(t&&t.elevation>0))}function J7(n){let e=de("div","pass-summary");e.append(de("strong","","Where are you?"),de("span","","Set your location to see when this satellite passes overhead.")),n.append(e);let t=de("button","text-button","Set location");t.type="button",t.style.marginTop="10px",t.addEventListener("click",Mr),n.append(t)}var sh="Brightness, weather and obstructions may prevent a sighting.";function Hf(){return(L.plan?.visible??[]).find(e=>Date.parse(e.end.at)>Date.now())??null}function Wf(){let{tonight:n}=L.plan,e=Hf(),t=de("div",`pass-summary${e?" is-visible":""}`);if(t.id="pass-summary",e){let i=Date.parse(e.start.at);t.append(de("strong","",Date.now()>=i?"Viewing window now":`Viewing window ${Nc(i,Date.now())}`),de("span","",`${ki(i)}, up to ${Math.round(e.peak.elevation_deg)}\xB0 in the ${Xn(e.peak.azimuth_deg)}.`),de("span","pass-caveat",sh))}else n.dark_start?t.append(de("strong","",`No viewing windows in the next ${Yo} hours`),de("span","",`The next dark sky starts ${ki(Date.parse(n.dark_start))}.`)):t.append(de("strong","","No dark sky soon"),de("span","","The Sun stays too high for the next 24 hours."));return t}function Yn(){let n=ce("passes-content");lh(n,()=>j7(n))}function j7(n){if(n.replaceChildren(),!bn()){n.append(de("p","note","Add a satellite to see its passes."));return}if(!L.observer){J7(n);return}if(L.planError&&!L.plan){n.append(de("p","note is-error",L.planError));let a=de("button","text-button","Try again");a.type="button",a.addEventListener("click",()=>wr(!0)),n.append(a);return}if(!L.plan){n.append(de("p","note","Calculating passes\u2026"));return}let{visible:t,passes:i}=L.plan;L.planError&&n.append(de("p","note is-warning",`Could not update this list: ${L.planError}`));for(let a of L.plan.warnings??[])n.append(de("p","note is-warning plan-warning",a.message));if(n.append(Wf(),de("h2","eyebrow section-title",`Next ${Yo} hours \xB7 ${Oc(L.utc)} time`)),!i.length){n.append(de("p","note","No passes above your horizon in this period."));return}let s=Nd(i,t),r=L.clouds?.feed?.data??null;for(let a of s.slice(0,40)){let o=!!(L.activePass&&No(L.activePass.pass,a)),c=de("button","pass-row");c.type="button",c.dataset.focus=`pass:${a.maximum_at}`,c.setAttribute("aria-pressed",String(o));let l=Date.parse(a.start),u=Date.parse(a.end),f=r?Hd(r,Date.parse(a.maximum_at)):null,h=f===null?"":` \xB7 ${Math.round(f)}% cloud`;c.append(de("span","pass-time",`${ws(l,L.utc)} ${Ms(l,L.utc).slice(0,5)}`),de("span","pass-elevation",`${Math.round(a.maximum_elevation_deg)}\xB0`),de("span","pass-detail",`${Xn(a.start_azimuth_deg)} to ${Xn(a.end_azimuth_deg)} \xB7 ${Fd(u-l)}${h}`)),a.visible&&c.append(de("span","badge","Window")),c.addEventListener("click",()=>n8(a)),n.append(c),o&&n.append(t8())}n.append(de("p","note",r?"A viewing window means the satellite is sunlit, your sky is dark and it is at least 10\xB0 high. Brightness is not considered, so a faint satellite may not be seen.":"A viewing window means the satellite is sunlit, your sky is dark and it is at least 10\xB0 high. Weather and brightness are not considered, so a faint satellite may not be seen.")),Bf&&n.append(Q7())}function Q7(){let{clouds:n}=L,e=de("div","cloud-check"),t=de("button","text-button",n?.loading?"Loading\u2026":n?.feed?"Check again":"Check clouds near me");return t.type="button",t.dataset.focus="check-clouds",t.addEventListener("click",e8),e.append(t,de("p","note","Sends your location, rounded to about 10 km, to Open-Meteo.")),n?.error&&e.append(Go(n.error)),n?.feed&&e.append(...ah(n.feed)),e}async function e8(){let n=L.observer;if(!n||L.clouds?.loading)return;let e={observer:n,loading:!0};L.clouds=e,Yn();try{let t=await Ot.cloudCover(n);if(L.clouds!==e)return;L.clouds={observer:n,feed:t}}catch(t){if(L.clouds!==e)return;L.clouds={observer:n,error:t}}Yn()}function t8(){let n=de("div","sky"),{pass:e,points:t,error:i}=L.activePass;if(i)return n.append(de("p","note is-error",i)),n;if(!t)return n.append(de("p","note","Loading sky path\u2026")),n;let s=de("div");rf(s,t,bn()?.color??"#ebd193",e.visible);let r=de("div","sky-actions"),a=de("button","text-button","Show on globe");return a.type="button",a.dataset.focus="show-on-globe",a.addEventListener("click",()=>{a8(Date.parse(e.maximum_at)),document.querySelector(".viewport").scrollIntoView({block:"nearest"})}),r.append(a),n.append(s,r),n}async function n8(n){if(L.activePass&&No(L.activePass.pass,n)){L.activePass=null,Yn();return}L.activePass={pass:n,points:null},Yn();let e=L.selected;try{let t=await Ot.look(e,L.observer,n.start,n.end);L.activePass?.pass===n&&L.selected===e&&(L.activePass.points=t.data.points,Yn())}catch(t){if(cn(t)||L.activePass?.pass!==n)return;L.activePass.error=$n(t.message),Yn()}}async function wr(n=!1){let e=L.selected;if(!e||!L.observer){$o();return}let t=`${e}|${L.observer.lat}|${L.observer.lon}|${L.observer.alt}`;if(!(!n&&L.planFor===t&&Date.now()-L.planAt<G7)){L.planFor=t,L.planAt=Date.now(),L.planError=null;try{let i=Ot.passes(e,L.observer,Date.now());i.catch(()=>{});let s=await Ot.tonight(e,L.observer,Date.now()),r=[...s.data.passes],a=[s],o=s.data,c=Date.now()+Yo*36e5;for(;o.dark_end&&!o.dark_end_clipped&&Date.parse(o.dark_end)<c;){let u=await Ot.tonight(e,L.observer,o.dark_end);if(L.planFor!==t)return;r.push(...u.data.passes),a.push(u),o=u.data}let l=await i;if(L.planFor!==t)return;L.plan={tonight:s.data,visible:r,passes:l.data.passes,warnings:Dd([l,...a])},L.activePass&&!L.plan.passes.some(u=>No(L.activePass.pass,u))&&(L.activePass=null)}catch(i){if(cn(i)||L.planFor!==t)return;L.planError=$n(i.message)}Yn(),$o()}}async function Xf(){let n=L.selected;if(!n){rh();return}try{let e=await Ot.report(n);if(L.selected!==n)return;L.report=e}catch(e){if(cn(e)||L.selected!==n)return;L.report={error:$n(e.message)}}rh()}var Nf=0;function i8(n){let e=ce("orbit-why-lessons"),t=++Nf;e.replaceChildren(),e.hidden=!0,!(!n||!on)&&on.forOrbit(n).then(i=>{t!==Nf||!i.length||(e.replaceChildren(...i.map(s=>{let r=de("button","text-button data-view",`Lesson: ${s.title}`);return r.type="button",r.addEventListener("click",()=>on.start(s.id)),r})),e.hidden=!1)})}function s8(n){let e=ce("orbit-why"),t=qd(n);e.hidden=!t,i8(t?n:null),t&&(ce("orbit-why-chips").replaceChildren(...t.chips.map(i=>de("li","why-chip",i))),ce("orbit-why-list").replaceChildren(...t.items.map(i=>{let s=de("li","",i.text);if(i.estimate){let r=de("span","why-estimate","estimate");r.setAttribute("aria-describedby","orbit-why-legend"),s.append(" ",r)}return Ui(de,s,i.sources),s})))}function rh(){let n=ce("orbit-readouts"),e=ce("orbit-note"),t=ce("orbit-links");if(t.replaceChildren(),e.textContent="",e.className="note",s8(L.report?.data?.orbit?.explanation),!L.selected){Bi(n,[]),e.textContent="Add a satellite to see its orbit.";return}if(L.report?.error){Bi(n,[]),e.textContent=L.report.error,e.className="note is-error";return}if(!L.report){Bi(n,[]),e.textContent="Loading\u2026";return}let{data:i,provenance:s}=L.report,r=i.orbit;Bi(n,[["Class (estimate)",r.orbit_class_estimate],["Period",`${r.period_minutes.toFixed(1)} min`],["Inclination",`${r.inclination_deg.toFixed(2)}\xB0`],["Apogee",`${r.apogee_km.toFixed(0)} km`],["Perigee",`${r.perigee_km.toFixed(0)} km`],["Eccentricity",r.eccentricity.toFixed(5)],["Element epoch",ki(Date.parse(s.element_epoch))],["Data source",`${s.source} (${s.cache_status})`]]),e.textContent="Apogee and perigee are two-body estimates.";let a=de("a","","Download JSON report");if(a.href=`/api/v1/report?norad_id=${encodeURIComponent(L.selected)}`,a.download=`khonsu-${L.selected}.json`,t.append(a),i.map_url){let o=de("a","","Current position on a map");o.href=i.map_url,o.target="_blank",o.rel="noopener noreferrer",t.append(o)}}function Er(){let n=bn();ce("selected-name").textContent=n?.name??"No satellite",ce("selected-id").textContent=n?`NORAD ${n.id}`:"",ce("selected-swatch").style.setProperty("--color",n?.color??"transparent"),document.title=n?`${n.name} \xB7 Khonsu`:"Khonsu",dh(),Yn(),rh(),$o()}function $o(){let n=ce("headline");n.replaceChildren();let e=bn();if(!e)return;if(e.loading&&!e.track){n.append(de("p","headline-title",e.name),de("p","headline-main","Fetching its orbit\u2026"),de("p","headline-sub","The first request can take a few seconds. After that it is saved."));return}if(!L.observer){n.append(de("p","headline-title","See it yourself"),de("p","headline-main","When can you see it?"));let i=de("button","text-button","Set your location");i.type="button",i.dataset.focus="headline-location",i.addEventListener("click",Mr),n.append(i);return}if(!L.plan)return;let t=Hf();if(t){let i=Date.parse(t.start.at),s=Date.now()>=i;n.append(de("p","headline-title",`${s?"Viewing window now":"Next viewing window"} \xB7 ${e.name}`),de("p","headline-main",`${ki(i).slice(0,-3)}${s?"":` \xB7 ${Nc(i,Date.now())}`}`),de("p","headline-sub",`Up to ${Math.round(t.peak.elevation_deg)}\xB0 in the ${Xn(t.peak.azimuth_deg)}, starting in the ${Xn(t.start.azimuth_deg)}.`),de("p","headline-sub plan-warning",[sh,...(L.plan.warnings??[]).map(r=>r.message)].join(" ")));return}n.append(de("p","headline-title",e.name),de("p","headline-main",L.plan.tonight.dark_start?`No viewing windows in the next ${Yo} hours`:"No dark sky soon")),n.append(de("p","headline-sub plan-warning",[sh,...(L.plan.warnings??[]).map(i=>i.message)].join(" ")))}function Ko(){let n=ce("data-status"),e=bn();if(n.classList.remove("is-warning"),!e?.provenance){n.textContent="";return}let{provenance:t}=e;if(t.cache_status==="stale"){n.textContent=e.warnings?.[0]?.message??"Showing saved elements.",n.classList.add("is-warning");return}n.textContent=t.source==="file"?"Using elements from a local file. No provider requests are made.":`Satellite data from CelesTrak, epoch ${ki(Date.parse(t.element_epoch))}.`}function $f(){ce("observer-open").classList.toggle("is-set",!!L.observer),ce("observer-label").textContent=L.observer?`${Fc(L.observer.lat,"N","S")}, ${Fc(L.observer.lon,"E","W")}`:"Set location"}function fh(){let n=ce("time-slider");n.max=String(Math.round((L.window.end-L.window.start)/1e3)),ce("time-start").textContent=`${ws(L.window.start,L.utc)} ${Ms(L.window.start,L.utc).slice(0,5)}`,ce("time-end").textContent=`${ws(L.window.end,L.utc)} ${Ms(L.window.end,L.utc).slice(0,5)}`}function Cs(n){L.live=n;let e=ce("live-button");e.classList.toggle("is-live",n),e.setAttribute("aria-pressed",String(n)),n&&(Si(!1),zc(L.window,Date.now())&&uh(Date.now()))}function Si(n){L.playing=n;let e=ce("play-button");e.textContent=n?"\u275A\u275A":"\u25B6";let t=n?"Pause timeline":"Play timeline";e.setAttribute("aria-label",t),e.title=t}var zo=null;function r8(n){let e=ce("speed-select");if(n==null){if(zo){let t=zo;zo=null,e.value=t.speed,Cs(t.live),Si(t.playing)}return}zo??(zo={live:L.live,playing:L.playing,speed:e.value}),[...e.options].some(t=>Number(t.value)===n)&&(e.value=String(n)),Cs(!1),L.time>=L.window.end&&(L.time=L.window.start),Si(!0)}function a8(n){if(Cs(!1),Si(!1),L.time=n,n<L.window.start||n>L.window.end){let e=bn();e&&(e.framePending=!0),uh(n)}else at?.update(L.time),at?.home();Sr()}function Sr(){let n=ce("time-slider"),e=Math.round((L.time-L.window.start)/1e3);(document.activeElement!==n||L.live||L.playing)&&(n.value=String(e));let t=`${ki(L.time)} ${L.utc?"UTC":""}`.trim();n.setAttribute("aria-valuetext",t),ce("time-current").textContent=t}function o8(){let n=ce("sat-label"),e=at?.selectedScreenPosition(),t=bn();if(!e||!t?.track){n.hidden=!0;return}n.hidden=!1,n.textContent=t.name,n.style.left=`${e.x}px`,n.style.top=`${e.y}px`}function l8(){if(th.tick(),!L.plan)return;ce("headline").contains(document.activeElement)||$o(),ce("pass-summary")?.replaceWith(Wf())}function qf(n,e){let t=e?Math.min(n-e,1e3):0;L.live?(L.time=Date.now(),zc(L.window,L.time)&&uh(L.time)):L.playing&&(L.time+=t*Number(ce("speed-select").value),L.time>=L.window.end&&(L.time=L.window.end,Si(!1)));try{at&&(at.update(L.time),K7(),at.render(t/1e3),o8()),n-Tf>250&&(Tf=n,Sr(),L.tab==="now"&&dh()),n-Af>X7&&(Af=n,l8())}catch(i){Cf||console.error(i),Cf=!0}requestAnimationFrame(i=>qf(i,n))}function Ff(n){L.observer=n,n?Mi.setItem("khonsu.observer",JSON.stringify(n)):Mi.removeItem("khonsu.observer"),at?.setObserver(n);for(let e of L.tracked.values())e.lookStale=!0;L.plan=null,L.planFor=null,L.planError=null,L.activePass=null,L.clouds=null,$f(),Gf(),Er(),wr(!0)}function Mr(){qo(!1),ce("observer-lat").value=L.observer?.lat??"",ce("observer-lon").value=L.observer?.lon??"",ce("observer-alt").value=L.observer?.alt||"",ce("observer-error").textContent="",ce("observer-dialog").showModal()}function qo(n){ce("pick-hint").hidden=!n,at?.setPicking(n)}var Vo=0;function ah(n){let e=[n.source.credit,n.source.nature,`updated ${Uc(n.fetched_at,Date.now())}`];n.stale&&e.push("saved copy");let t=de("p","data-credit",e.join(" \xB7 "));return n.warning?[t,de("p","note is-warning",n.warning)]:[t]}function Go(n){return de("p","note is-warning",$n(n.message||"")||"This source could not be reached.")}function Uf(n){let e=Date.parse(n);return`${ws(e,L.utc)} ${Ms(e,L.utc).slice(0,5)} ${Oc(L.utc)}`}function c8(n){ce("data-categories").replaceChildren(...n.map(e=>{let t=de("section","data-category");t.append(de("h3",null,e.title),de("p","note",e.description)),e.id==="earth-imagery"&&t.append(de("p","note","Choose pictures with the Layers button on the globe."));for(let i of e.sources){let s=de("div","data-source"),r=de("a",null,i.name);r.href=i.url,r.target="_blank",r.rel="noreferrer";let a=i.status==="live";s.append(r,de("span",`data-status${a?" is-live":""}`,a?"Live":"Needs account"),de("p","note",`${i.summary} ${i.refresh}.`)),t.append(s)}return t}))}async function h8(){try{return await Es}catch{return Es=Ot.sources(),Es}}async function u8(){let n=++Vo,e=ce("data-status-note");e.textContent="",e.classList.remove("is-warning"),ce("data-dialog").showModal();let t;try{t=await h8()}catch(i){n===Vo&&i.name!=="AbortError"&&(e.textContent=i.message,e.classList.add("is-warning"));return}n===Vo&&(c8(t.categories),t.live_data||(e.textContent="Live data is off while serving a local file, so no provider requests are made."))}function d8(){let n=ce("layers-open"),e=ce("layers-panel"),t=i=>{e.hidden=!i,n.setAttribute("aria-expanded",String(i))};n.addEventListener("click",()=>t(e.hidden)),e.addEventListener("keydown",i=>{i.key==="Escape"&&(i.preventDefault(),t(!1),n.focus())})}function f8(n,{frame:e=!1}={}){let t=Wn(n),i=Ts(t,void 0,{frame:e});if(i&&e){let s=L.tracked.get(t);s.track?at?.home(t):s.framePending=!0}return i}function p8(n,e,t=null){at&&(at.face(n,e,t),ph(!1))}function Yf(n){ce("learn-panel").hidden=!n,document.querySelector(".catalog").hidden=n,ce("learn-open").setAttribute("aria-pressed",String(n)),n&&kf.render()}function m8(){ce("learn-open").addEventListener("click",()=>Yf(ce("learn-panel").hidden))}function g8(){let n=ce("data-dialog");ce("data-open").addEventListener("click",u8),ce("data-close").addEventListener("click",()=>n.close()),n.addEventListener("close",()=>{Vo+=1,ce("data-open").focus()})}function _8(){let n=ce("observer-dialog");ce("observer-open").addEventListener("click",Mr),ce("observer-cancel").addEventListener("click",()=>n.close()),n.addEventListener("close",()=>{(!document.activeElement||document.activeElement===document.body)&&ce("observer-open").focus()}),ce("observer-clear").addEventListener("click",()=>{Ff(null),n.close()}),ce("observer-form").addEventListener("submit",t=>{t.preventDefault();let i=Ic({lat:ce("observer-lat").value,lon:ce("observer-lon").value,alt:ce("observer-alt").value});if(i.error){ce("observer-error").textContent=i.error;return}Ff(i.observer),n.close()}),ce("observer-locate").addEventListener("click",()=>{let t=ce("observer-error");if(!navigator.geolocation){t.textContent="This browser cannot share a location. Enter it instead.";return}t.textContent="",navigator.geolocation.getCurrentPosition(({coords:i})=>{ce("observer-lat").value=i.latitude.toFixed(4),ce("observer-lon").value=i.longitude.toFixed(4)},()=>{t.textContent="The browser did not share a location. Enter it instead."},{timeout:1e4})});let e=ce("observer-pick");e.addEventListener("click",()=>{n.close(),qo(!0)}),at||(e.disabled=!0),document.addEventListener("keydown",t=>{t.key==="Escape"&&!ce("pick-hint").hidden&&(t.preventDefault(),qo(!1),setTimeout(Mr))})}function Ho(n,e=!1){L.tab=n;for(let t of nh){let i=ce(`tab-${t}`),s=t===n;i.setAttribute("aria-selected",String(s)),i.tabIndex=s?0:-1,ce(`panel-${t}`).hidden=!s,s&&e&&i.focus()}n==="passes"&&wr(),n==="orbit"&&Xf(),n==="data"&&Wo.render();for(let t of oh())Rs.open(t)}function x8(){for(let n of nh){let e=ce(`tab-${n}`);e.addEventListener("click",()=>Ho(n)),e.addEventListener("keydown",t=>{let i=nh.filter(r=>!ce(`tab-${r}`).hidden),s=i.indexOf(n);t.key==="ArrowRight"&&Ho(i[(s+1)%i.length],!0),t.key==="ArrowLeft"&&Ho(i[(s+i.length-1)%i.length],!0)})}}function y8(){ce("live-button").addEventListener("click",()=>Cs(!0)),ce("play-button").addEventListener("click",()=>{if(L.playing){Si(!1);return}L.live&&Cs(!1),L.time>=L.window.end&&(L.time=L.window.start),Si(!0)}),ce("time-slider").addEventListener("input",i=>{Cs(!1),Si(!1),L.time=L.window.start+Number(i.target.value)*1e3,Sr(),dh()});let n=ce("zone-toggle"),e=()=>{n.textContent=L.utc?"UTC":"Local time",n.setAttribute("aria-pressed",String(L.utc))};e(),n.addEventListener("click",()=>{L.utc=!L.utc,Mi.setItem("khonsu.utc",L.utc?"1":"0"),e(),fh(),Sr(),Er(),Ko(),oh().includes("sees")&&Rs.open("sees")}),Xo=uf({element:de,button:ce("group-button"),popover:ce("group-popover"),input:ce("group-search"),list:ce("group-options"),onChoose(i){ce("filter-input").value="",ih(i)}}),ce("filter-input").addEventListener("input",()=>{if(L.isSearchResult){ih(Xo.current());return}Zn()}),ce("camera-home").addEventListener("click",()=>at?.home()),ce("zoom-in").addEventListener("click",()=>at?.zoom(.8)),ce("zoom-out").addEventListener("click",()=>at?.zoom(1.25));let t=ce("camera-follow");t.addEventListener("click",()=>ph(t.getAttribute("aria-pressed")!=="true"))}function ph(n){ce("camera-follow").setAttribute("aria-pressed",String(n)),at?.setFollowing(n)}function v8(n){at&&(at.showPoint(n.lat,n.lon),ph(!1))}function b8(){at?.clearPoint()}function Of(n){let e=ce("scene-error");e.hidden=!1,e.textContent=n}function S8(n){let e=n.categories.flatMap(t=>t.sources);return{liveData:n.live_data,spaceTrackReady:e.some(t=>t.id==="space-track"&&t.status==="live"),imagingIds:new Set(n.imaging_satellites??[])}}async function M8(){Es=Ot.sources(),Oo=Es.then(S8).catch(()=>null),Rf=Es.then(s=>({liveData:s.live_data,layers:s.imagery_layers})).catch(()=>null),Oo.then(s=>{Bf=s?.liveData!==!1,Yn()}),Rs=of({api:Ot,element:de,feedCredit:ah,dataFailure:Go,dataTime:Uf,selectedEntry:bn,catalog:Oo,panels:{identity:ce("panel-identity"),radio:ce("panel-radio"),sees:ce("panel-sees")},focusScene:v8,clearScene:b8});for(let s of Object.keys(zf))ce(`section-${s}`).addEventListener("toggle",r=>{r.target.open&&Rs.open(s)});let n=hf({root:document.querySelector(".app"),handles:{catalog:ce("resize-catalog"),inspector:ce("resize-inspector")},storage:Mi});window.addEventListener("resize",()=>n.fit()),on=bf({api:Ot,element:de,card:ce("lesson-card"),list:de("div"),layers:()=>ko,showSatellite:f8,face:p8,openTab:s=>{L.tab!==s&&Ho(s)},play:r8,onChange(){ce("headline").hidden=!!on.current(),hh()}}),kf=Mf({api:Ot,element:de,panel:ce("learn-panel"),layers:()=>ko,showSatellite:s=>Ts(s),startLesson:s=>on.start(s),startStory:s=>on.start(s),onClose:()=>{Yf(!1),ce("learn-open").focus()}}),Wo=lf({api:Ot,element:de,panel:ce("data-measures"),selectedEntry:bn,dataFailure:Go,layers:()=>ko,startLesson:s=>on.start(s)});try{at=Jd(ce("scene"),{onPick(s){qo(!1),Mr(),ce("observer-lat").value=s.lat.toFixed(4),ce("observer-lon").value=s.lon.toFixed(4)},onSelect:s=>Ps(s)}),at.setObserver(L.observer),at.onContextChange(()=>Of("The graphics context was lost. The globe will return if the browser restores it. Reload if it does not. The readouts still work."),()=>{ce("scene-error").hidden=!0})}catch(s){at=null,console.error(s),Of("3D rendering is unavailable, so the globe is hidden. Enable WebGL in your browser and reload. Satellite details and passes still work.");for(let r of["camera-follow","camera-home","zoom-in","zoom-out"])ce(r).disabled=!0}let e=sf({element:de,panel:ce("layers-panel"),credit:ce("imagery-credit"),catalog:Rf,storage:Mi,globe:at,dataAge:Uc});ko=e,e.start().then(()=>{L.tab==="data"&&Wo.render(),Bo&&on.start(Bo.id,Bo.step)}),th=Ef({api:Ot,element:de,feedCredit:ah,dataFailure:Go,dataTime:Uf,catalog:Oo,chips:ce("sky-chips"),popover:ce("sky-popover"),onKp:s=>e.setKp(s)}),th.start(),x8(),y8(),_8(),g8(),m8(),d8(),$f(),fh(),br(),Er(),Sr(),requestAnimationFrame(s=>qf(s,0)),setInterval(()=>wr(),6e4);let t=Ed(location.search),i=Y7();if(t.ids.length){await Promise.race([i,new Promise(s=>setTimeout(s,$7))]);for(let s of t.ids)Ts(s,void 0,{selectIt:!1});Ps(t.selected)}if(await i,!t.ids.length&&!L.tracked.size&&!Bo){let s=L.items.find(r=>Wn(r.norad_id)===H7)??L.items[0];s&&Ts(s.norad_id,s.name)}}M8();})();
