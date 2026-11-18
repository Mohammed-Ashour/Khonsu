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
(()=>{function Uu(n=globalThis.fetch?.bind(globalThis)){let e=new Map;async function t(r,a={},o=null){let c=new URLSearchParams;for(let[f,u]of Object.entries(a))u!=null&&c.set(f,u);let l=c.size?`${r}?${c}`:r,h=new AbortController;o&&(e.get(o)?.abort(),e.set(o,h));try{let f=await n(l,{signal:h.signal}),u=await f.text(),m=null;try{m=JSON.parse(u)}catch{}if(!f.ok){let x=u.trim(),y=x.length<200&&!x.startsWith("<")?x:"";throw new Lr(m?.error?.message||y||`Request failed (${f.status}).`,f.status)}if(m===null)throw new Lr("The server returned an unreadable response.",f.status);return m}finally{o&&e.get(o)===h&&e.delete(o)}}let i=r=>new Date(r).toISOString().replace(/\.\d+Z$/,"Z"),s=r=>r?{lat:r.lat,lon:r.lon,alt:r.alt}:{};return{groups:()=>t("/api/satellite-groups"),satellites:r=>t("/api/satellites",{group:r},"satellites"),search:r=>t("/api/v1/search",{q:r},"satellites"),track:(r,a,o)=>t("/api/v1/track",{norad_id:r,start:i(a),duration:"25h",step:"60s",...s(o)},`track:${r}`),report:r=>t("/api/v1/report",{norad_id:r},"report"),passes:(r,a,o)=>t("/api/v1/passes",{norad_id:r,start:i(o),duration:"48h",step:"30s",...s(a)},"passes"),tonight:(r,a,o)=>t("/api/v1/tonight",{norad_id:r,time:typeof o=="number"?i(o):o,...s(a)},"tonight"),sources:()=>t("/api/v1/sources",{},"sources"),spaceWeather:()=>t("/api/v1/space-weather",{},"space-weather"),launches:()=>t("/api/v1/launches",{},"launches"),satelliteDetails:r=>t("/api/v1/satellite-details",{norad_id:r},"satellite-details"),transmitters:r=>t("/api/v1/transmitters",{norad_id:r},"transmitters"),spaceWeatherHistory:()=>t("/api/v1/space-weather-history",{},"space-weather-history"),spaceEvents:()=>t("/api/v1/space-events",{},"space-events"),catalogRecord:r=>t("/api/v1/catalog-record",{norad_id:r},"catalog-record"),spaceTrack:r=>t("/api/v1/space-track",{norad_id:r},"space-track"),seaIce:(r,a)=>t("/api/v1/sea-ice",{hemisphere:r,month:a},`sea-ice:${r}:${a}`),seaLevel:()=>t("/api/v1/sea-level",{},"sea-level"),learn:()=>t("/api/v1/learn",{},"learn"),lessons:()=>t("/api/v1/lessons",{},"lessons"),satelliteData:r=>t("/api/v1/satellite-data",{norad_id:r},"satellite-data"),recentScenes:r=>t("/api/v1/recent-scenes",{norad_id:r},"recent-scenes"),cloudCover:r=>t("/api/v1/cloud-cover",{lat:r.lat,lon:r.lon},"cloud-cover"),look:(r,a,o,c)=>t("/api/v1/look",{norad_id:r,start:o,end:c,samples:64,...s(a)},"look")}}var Lr=class extends Error{constructor(e,t){super(e),this.status=t}},un=n=>n?.name==="AbortError";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fh=0,Ol=1,ph=2;var ur=1,mh=2,_s=3,xi=0,Ot=1,Rn=2,Pn=0,xs=1,Bl=2,kl=3,zl=4,gh=5;var Ni=100,_h=101,xh=102,yh=103,vh=104,bh=200,Sh=201,Mh=202,wh=203,Vl=204,Gl=205,Th=206,Eh=207,Ah=208,Ch=209,Rh=210,Ph=211,Ih=212,Lh=213,Dh=214,sa=0,ra=1,aa=2,li=3,oa=4,la=5,ca=6,ua=7,Ba=0,Nh=1,Fh=2,xn=0,Hl=1,Wl=2,Xl=3,$l=4,ql=5,Yl=6,Zl=7;var Kl=300,yi=301,Fi=302,ka=303,za=304,hr=306,ha=1e3,En=1001,da=1002,Lt=1003,Uh=1004;var dr=1005;var Nt=1006,Va=1007;var vi=1008;var Kt=1009,Jl=1010,jl=1011,ys=1012,Ga=1013,yn=1014,vn=1015,bn=1016,Ha=1017,Wa=1018,vs=1020,Ql=35902,ec=35899,tc=1021,nc=1022,ln=1023,An=1026,bi=1027,ic=1028,Xa=1029,Si=1030,$a=1031;var qa=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ya=35840,Za=35841,Ka=35842,Ja=35843,ja=36196,Qa=37492,eo=37496,to=37488,no=37489,_r=37490,io=37491,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,uo=37814,ho=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,yo=36492,vo=36494,bo=36495,So=36283,Mo=36284,xr=36285,wo=36286;var Vs=2300,fa=2301,na=2302,Cl=2303,Rl=2400,Pl=2401,Il=2402;var Oh=3200;var To=0,Bh=1,Xn="",$t="srgb",Gs="srgb-linear",Hs="linear",ut="srgb";var ia=7680;var kh=519,zh=512,Vh=513,Gh=514,Eo=515,Hh=516,Wh=517,Ao=518,Xh=519,$h=35044;var sc="300 es",pn=2e3,as=2001;function g1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qh(){let n=Ws("canvas");return n.style.display="block",n}var Ou={},os=null;function rc(...n){let e="THREE."+n.shift();os?os("log",e,...n):console.log(e,...n)}function Yh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=Yh(n);let e="THREE."+n.shift();if(os)os("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=Yh(n);let e="THREE."+n.shift();if(os)os("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Di(...n){let e=n.join(" ");e in Ou||(Ou[e]=!0,Ge(...n))}function Zh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Kh={[sa]:ra,[aa]:ca,[oa]:ua,[li]:la,[ra]:sa,[ca]:aa,[ua]:oa,[la]:li},mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=1234567,ks=Math.PI/180,ls=180/Math.PI;function bs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function ac(n,e){return(n%e+e)%e}function x1(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function y1(n,e,t){return n!==e?(t-n)/(e-n):0}function zs(n,e,t){return(1-t)*n+t*e}function v1(n,e,t,i){return zs(n,e,1-Math.exp(-t*i))}function b1(n,e=1){return e-Math.abs(ac(n,e*2)-e)}function S1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function M1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function w1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function T1(n,e){return n+Math.random()*(e-n)}function E1(n){return n*(.5-Math.random())}function A1(n){n!==void 0&&(Bu=n);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C1(n){return n*ks}function R1(n){return n*ls}function P1(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function I1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function L1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function D1(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),f=r((e-i)/2),u=a((e-i)/2),m=r((i-e)/2),x=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*f,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*x,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*x,o*l);break;case"ZYZ":n.set(c*x,c*m,o*h,o*l);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oc={DEG2RAD:ks,RAD2DEG:ls,generateUUID:bs,clamp:et,euclideanModulo:ac,mapLinear:x1,inverseLerp:y1,lerp:zs,damp:v1,pingpong:b1,smoothstep:S1,smootherstep:M1,randInt:w1,randFloat:T1,randFloatSpread:E1,seededRandom:A1,degToRad:C1,radToDeg:R1,isPowerOfTwo:P1,ceilPowerOfTwo:I1,floorPowerOfTwo:L1,setQuaternionFromProperEuler:D1,normalize:Xt,denormalize:ss},dc=class dc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dc.prototype.isVector2=!0;var qe=dc,nn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],m=r[a+1],x=r[a+2],y=r[a+3];if(f!==y||c!==u||l!==m||h!==x){let p=c*u+l*m+h*x+f*y;p<0&&(u=-u,m=-m,x=-x,y=-y,p=-p);let d=1-o;if(p<.9995){let M=Math.acos(p),E=Math.sin(M);d=Math.sin(d*M)/E,o=Math.sin(o*M)/E,c=c*d+u*o,l=l*d+m*o,h=h*d+x*o,f=f*d+y*o}else{c=c*d+u*o,l=l*d+m*o,h=h*d+x*o,f=f*d+y*o;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*f+c*m-l*u,e[t+1]=c*x+h*u+l*f-o*m,e[t+2]=l*x+h*m+o*u-c*f,e[t+3]=h*x-o*f-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*m*x,this._y=l*m*f-u*h*x,this._z=l*h*x+u*m*f,this._w=l*h*f-u*m*x;break;case"YXZ":this._x=u*h*f+l*m*x,this._y=l*m*f-u*h*x,this._z=l*h*x-u*m*f,this._w=l*h*f+u*m*x;break;case"ZXY":this._x=u*h*f-l*m*x,this._y=l*m*f+u*h*x,this._z=l*h*x+u*m*f,this._w=l*h*f-u*m*x;break;case"ZYX":this._x=u*h*f-l*m*x,this._y=l*m*f+u*h*x,this._z=l*h*x-u*m*f,this._w=l*h*f+u*m*x;break;case"YZX":this._x=u*h*f+l*m*x,this._y=l*m*f+u*h*x,this._z=l*h*x-u*m*f,this._w=l*h*f-u*m*x;break;case"XZY":this._x=u*h*f-l*m*x,this._y=l*m*f-u*h*x,this._z=l*h*x+u*m*f,this._w=l*h*f+u*m*x;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>f){let m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-i-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fc=class fc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fc.prototype.isVector3=!0;var W=fc,al=new W,ku=new nn,pc=class pc{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],m=i[5],x=i[8],y=s[0],p=s[3],d=s[6],M=s[1],E=s[4],v=s[7],T=s[2],S=s[5],R=s[8];return r[0]=a*y+o*M+c*T,r[3]=a*p+o*E+c*S,r[6]=a*d+o*v+c*R,r[1]=l*y+h*M+f*T,r[4]=l*p+h*E+f*S,r[7]=l*d+h*v+f*R,r[2]=u*y+m*M+x*T,r[5]=u*p+m*E+x*S,r[8]=u*d+m*v+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*r,m=l*r-a*c,x=t*f+i*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=f*y,e[1]=(s*l-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(e,t)),this}rotate(e){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pc.prototype.isMatrix3=!0;var Ze=pc,ol=new Ze,zu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N1(){let n={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gs]:{primaries:e,whitePoint:i,transfer:Hs,toXYZ:zu,fromXYZ:Vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:zu,fromXYZ:Vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}var it=N1();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xi,pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=Ws("canvas")),Xi.width=e.width,Xi.height=e.height;let s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F1=0,cs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ll(s[a].image)):r.push(ll(s[a]))}else r=ll(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var U1=0,cl=new W,Ft=class n extends mn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=En,s=En,r=Nt,a=vi,o=ln,c=Kt,l=n.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=bs(),this.name="",this.source=new cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Kl;Ft.DEFAULT_ANISOTROPY=1;var mc=class mc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],x=c[9],y=c[2],p=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,v=(m+1)/2,T=(d+1)/2,S=(h+u)/4,R=(f+y)/4,_=(x+p)/4;return E>v&&E>T?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=S/i,r=R/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-x)*(p-x)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(f-y)/M,this.z=(u-h)/M,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mc.prototype.isVector4=!0;var yt=mc,ma=class extends mn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Ft(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends ma{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Xs=class extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ga=class extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Oa=class Oa{constructor(e,t,i,s,r,a,o,c,l,h,f,u,m,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,f,u,m,x,y,p)}set(e,t,i,s,r,a,o,c,l,h,f,u,m,x,y,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=x,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*f,x=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,m=c*f,x=l*h,y=l*f;t[0]=u+y*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,m=c*f,x=l*h,y=l*f;t[0]=u-y*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,m=a*f,x=o*h,y=o*f;t[0]=c*h,t[4]=x*l-m,t[8]=u*l+y,t[1]=c*f,t[5]=y*l+u,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,m=a*l,x=o*c,y=o*l;t[0]=c*h,t[4]=y-u*f,t[8]=x*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+x,t[10]=u-y*f}else if(e.order==="XZY"){let u=a*c,m=a*l,x=o*c,y=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+y,t[5]=a*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O1,e,B1)}lookAt(e,t,i){let s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ni.crossVectors(i,Qt),ni.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ni.crossVectors(i,Qt)),ni.normalize(),Dr.crossVectors(Qt,ni),s[0]=ni.x,s[4]=Dr.x,s[8]=Qt.x,s[1]=ni.y,s[5]=Dr.y,s[9]=Qt.y,s[2]=ni.z,s[6]=Dr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],m=i[13],x=i[2],y=i[6],p=i[10],d=i[14],M=i[3],E=i[7],v=i[11],T=i[15],S=s[0],R=s[4],_=s[8],w=s[12],D=s[1],N=s[5],H=s[9],Y=s[13],O=s[2],P=s[6],B=s[10],V=s[14],ee=s[3],X=s[7],Q=s[11],oe=s[15];return r[0]=a*S+o*D+c*O+l*ee,r[4]=a*R+o*N+c*P+l*X,r[8]=a*_+o*H+c*B+l*Q,r[12]=a*w+o*Y+c*V+l*oe,r[1]=h*S+f*D+u*O+m*ee,r[5]=h*R+f*N+u*P+m*X,r[9]=h*_+f*H+u*B+m*Q,r[13]=h*w+f*Y+u*V+m*oe,r[2]=x*S+y*D+p*O+d*ee,r[6]=x*R+y*N+p*P+d*X,r[10]=x*_+y*H+p*B+d*Q,r[14]=x*w+y*Y+p*V+d*oe,r[3]=M*S+E*D+v*O+T*ee,r[7]=M*R+E*N+v*P+T*X,r[11]=M*_+E*H+v*B+T*Q,r[15]=M*w+E*Y+v*V+T*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],m=e[14],x=e[3],y=e[7],p=e[11],d=e[15],M=c*m-l*u,E=o*m-l*f,v=o*u-c*f,T=a*m-l*h,S=a*u-c*h,R=a*f-o*h;return t*(y*M-p*E+d*v)-i*(x*M-p*T+d*S)+s*(x*E-y*T+d*R)-r*(x*v-y*S+p*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],m=e[11],x=e[12],y=e[13],p=e[14],d=e[15],M=t*o-i*a,E=t*c-s*a,v=t*l-r*a,T=i*c-s*o,S=i*l-r*o,R=s*l-r*c,_=h*y-f*x,w=h*p-u*x,D=h*d-m*x,N=f*p-u*y,H=f*d-m*y,Y=u*d-m*p,O=M*Y-E*H+v*N+T*D-S*w+R*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/O;return e[0]=(o*Y-c*H+l*N)*P,e[1]=(s*H-i*Y-r*N)*P,e[2]=(y*R-p*S+d*T)*P,e[3]=(u*S-f*R-m*T)*P,e[4]=(c*D-a*Y-l*w)*P,e[5]=(t*Y-s*D+r*w)*P,e[6]=(p*v-x*R-d*E)*P,e[7]=(h*R-u*v+m*E)*P,e[8]=(a*H-o*D+l*_)*P,e[9]=(i*D-t*H-r*_)*P,e[10]=(x*S-y*v+d*M)*P,e[11]=(f*v-h*S-m*M)*P,e[12]=(o*w-a*N-c*_)*P,e[13]=(t*N-i*w+s*_)*P,e[14]=(y*E-x*T-p*M)*P,e[15]=(h*T-f*E+u*M)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,u=r*l,m=r*h,x=r*f,y=a*h,p=a*f,d=o*f,M=c*l,E=c*h,v=c*f,T=i.x,S=i.y,R=i.z;return s[0]=(1-(y+d))*T,s[1]=(m+v)*T,s[2]=(x-E)*T,s[3]=0,s[4]=(m-v)*S,s[5]=(1-(u+d))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(x+E)*R,s[9]=(p-M)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hn.copy(this);let l=1/a,h=1/o,f=1/c;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=pn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),m=(i+s)/(i-s),x,y;if(c)x=r/(a-r),y=a*r/(a-r);else if(o===pn)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===as)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=pn,c=!1){let l=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),m=-(i+s)/(i-s),x,y;if(c)x=1/(a-r),y=a/(a-r);else if(o===pn)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===as)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Oa.prototype.isMatrix4=!0;var gt=Oa,$i=new W,hn=new gt,O1=new W(0,0,0),B1=new W(1,1,1),ni=new W,Dr=new W,Qt=new W,Gu=new gt,Hu=new nn,Gn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},k1=0,Wu=new W,qi=new nn,Fn=new gt,Nr=new W,Ns=new W,z1=new W,V1=new nn,Xu=new W(1,0,0),$u=new W(0,1,0),qu=new W(0,0,1),Yu={type:"added"},G1={type:"removed"},Yi={type:"childadded",child:null},ul={type:"childremoved",child:null},Ut=class n extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new W,t=new Gn,i=new nn,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Nr.copy(e):Nr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ns,Nr,this.up):Fn.lookAt(Nr,Ns,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Fn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G1),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,V1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new W(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},H1={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),d=this._getHandJoint(l,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&u>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=ac(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=hl(a,r,e+1/3),this.g=hl(a,r,e),this.b=hl(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let i=Jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return it.workingToColorSpace(Vt.copy(this),e),Math.round(et(Vt.r*255,0,255))*65536+Math.round(et(Vt.g*255,0,255))*256+Math.round(et(Vt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Vt.copy(this),t);let i=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=$t){it.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,s=Vt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Fr);let i=zs(ii.h,Fr.h,t),s=zs(ii.s,Fr.s,t),r=zs(ii.l,Fr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Qe;Qe.NAMES=Jh;var $s=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},dn=new W,Un=new W,dl=new W,On=new W,Zi=new W,Ki=new W,Zu=new W,fl=new W,pl=new W,ml=new W,gl=new yt,_l=new yt,xl=new yt,oi=class n{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),dn.subVectors(e,t),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){dn.subVectors(s,t),Un.subVectors(i,t),dl.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Un),c=dn.dot(dl),l=Un.dot(Un),h=Un.dot(dl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return gl.setScalar(0),_l.setScalar(0),xl.setScalar(0),gl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,i),xl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(xl,r.z),a}static isFrontFacing(e,t,i,s){return dn.subVectors(i,t),Un.subVectors(e,t),dn.cross(Un).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Zi.subVectors(s,i),Ki.subVectors(r,i),fl.subVectors(e,i);let c=Zi.dot(fl),l=Ki.dot(fl);if(c<=0&&l<=0)return t.copy(i);pl.subVectors(e,s);let h=Zi.dot(pl),f=Ki.dot(pl);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Zi,a);ml.subVectors(e,r);let m=Zi.dot(ml),x=Ki.dot(ml);if(x>=0&&m<=x)return t.copy(r);let y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(Ki,o);let p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return Zu.subVectors(r,s),o=(f-h)/(f-h+(m-x)),t.copy(s).addScaledVector(Zu,o);let d=1/(p+y+u);return a=y*d,o=u*d,t.copy(i).addScaledVector(Zi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ci=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Or.subVectors(this.max,Fs),Ji.subVectors(e.a,Fs),ji.subVectors(e.b,Fs),Qi.subVectors(e.c,Fs),si.subVectors(ji,Ji),ri.subVectors(Qi,ji),Ri.subVectors(Ji,Qi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ri.z,Ri.y,si.z,0,-si.x,ri.z,0,-ri.x,Ri.z,0,-Ri.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ri.y,Ri.x,0];return!yl(t,Ji,ji,Qi,Or)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Ji,ji,Qi,Or))?!1:(Br.crossVectors(si,ri),t=[Br.x,Br.y,Br.z],yl(t,Ji,ji,Qi,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new W,new W,new W,new W,new W,new W,new W,new W],fn=new W,Ur=new ci,Ji=new W,ji=new W,Qi=new W,si=new W,ri=new W,Ri=new W,Fs=new W,Or=new W,Br=new W,Pi=new W;function yl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Pi.fromArray(n,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),h=i.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var wt=new W,kr=new qe,W1=0,qt=class extends mn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$h,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ss(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qs=class extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ys=class extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},X1=new ci,Us=new W,vl=new W,ui=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):X1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(vl)),this.expandByPoint(Us.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$1=0,on=new gt,bl=new Ut,es=new W,en=new ci,Os=new ci,It=new W,Et=class n extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g1(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(en.min,Os.min),en.expandByPoint(It),It.addVectors(en.max,Os.max),en.expandByPoint(It)):(en.expandByPoint(Os.min),en.expandByPoint(Os.max))}en.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)It.fromBufferAttribute(o,l),c&&(es.fromBufferAttribute(e,l),It.add(es)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new W,c[_]=new W;let l=new W,h=new W,f=new W,u=new qe,m=new qe,x=new qe,y=new W,p=new W;function d(_,w,D){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,D),u.fromBufferAttribute(r,_),m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,D),h.sub(l),f.sub(l),m.sub(u),x.sub(u);let N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(N),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(N),o[_].add(y),o[w].add(y),o[D].add(y),c[_].add(p),c[w].add(p),c[D].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,w=M.length;_<w;++_){let D=M[_],N=D.start,H=D.count;for(let Y=N,O=N+H;Y<O;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let E=new W,v=new W,T=new W,S=new W;function R(_){T.fromBufferAttribute(s,_),S.copy(T);let w=o[_];E.copy(w),E.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(S,w);let N=v.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,N)}for(let _=0,w=M.length;_<w;++_){let D=M[_],N=D.start,H=D.count;for(let Y=N,O=N+H;Y<O;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,l=new W,h=new W,f=new W;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),m=0,x=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let d=0;d<h;d++)u[x++]=l[m++]}return new qt(u,h,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],m=e(u,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sl=new W,q1=new W,Y1=new Ze,tn=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Sl.subVectors(i,t).cross(q1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Y1.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Z1=0,Cn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=xs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new tn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var kn=new W,Ml=new W,zr=new W,Vr=new W,Hn=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ml.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Ml);let r=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Vr.dot(this.direction),c=-Vr.dot(zr),l=Vr.lengthSq(),h=Math.abs(1-a*a),f,u,m,x;if(h>0)if(f=a*c-o,u=a*o-c,x=r*h,f>=0)if(u>=-x)if(u<=x){let y=1/h;f*=y,u*=y,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l):u<=x?(f=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ml).addScaledVector(zr,u),m}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);let i=kn.dot(this.direction),s=kn.dot(kn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,m=e.z-a.z,x=t.x-a.x,y=t.y-a.y,p=t.z-a.z,d=i.x-a.x,M=i.y-a.y,E=i.z-a.z,v=Math.abs(c),T=Math.abs(l),S=Math.abs(h),R,_,w,D,N,H,Y,O,P,B,V,ee;if(v>=T&&v>=S?(w=c,H=f,P=x,ee=d,c>=0?(R=l,_=h,D=u,N=m,Y=y,O=p,B=M,V=E):(R=h,_=l,D=m,N=u,Y=p,O=y,B=E,V=M)):T>=S?(w=l,H=u,P=y,ee=M,l>=0?(R=h,_=c,D=m,N=f,Y=p,O=x,B=E,V=d):(R=c,_=h,D=f,N=m,Y=x,O=p,B=d,V=E)):(w=h,H=m,P=p,ee=E,h>=0?(R=c,_=l,D=f,N=u,Y=x,O=y,B=d,V=M):(R=l,_=c,D=u,N=f,Y=y,O=x,B=M,V=d)),w===0)return null;let X=R/w,Q=_/w,oe=1/w,Pe=D-X*H,ye=N-Q*H,se=Y-X*P,ue=O-Q*P,he=B-X*ee,F=V-Q*ee,Z=he*ue-F*se,pe=Pe*F-ye*he,Ce=se*ye-ue*Pe;if(s){if(Z<0||pe<0||Ce<0)return null}else if((Z<0||pe<0||Ce<0)&&(Z>0||pe>0||Ce>0))return null;let _e=Z+pe+Ce;if(_e===0)return null;let We=oe*(Z*H+pe*P+Ce*ee);return(_e>0?We<0:We>0)?null:this.at(We/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ku=new gt,Ii=new Hn,Gr=new ui,Ju=new W,Hr=new W,Wr=new W,Xr=new W,wl=new W,$r=new W,ju=new W,qr=new W,At=class extends Ut{constructor(e=new Et,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(wl.fromBufferAttribute(f,e),a?$r.addScaledVector(wl,h):$r.addScaledVector(wl.sub(t),h))}t.add($r)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(Gr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Gr,Ju)===null||Ii.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Ku.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let p=u[x],d=a[p.materialIndex],M=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,T=E;v<T;v+=3){let S=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);s=Yr(this,d,e,i,l,h,f,S,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=x,d=y;p<d;p+=3){let M=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);s=Yr(this,a,e,i,l,h,f,M,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let p=u[x],d=a[p.materialIndex],M=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,T=E;v<T;v+=3){let S=v,R=v+1,_=v+2;s=Yr(this,d,e,i,l,h,f,S,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=x,d=y;p<d;p+=3){let M=p,E=p+1,v=p+2;s=Yr(this,a,e,i,l,h,f,M,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function K1(n,e,t,i,s,r,a,o){let c;if(e.side===Ot?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===xi,o),c===null)return null;qr.copy(o),qr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(qr);return l<t.near||l>t.far?null:{distance:l,point:qr.clone(),object:n}}function Yr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Hr),n.getVertexPosition(c,Wr),n.getVertexPosition(l,Xr);let h=K1(n,e,t,i,Hr,Wr,Xr,ju);if(h){let f=new W;oi.getBarycoord(ju,Hr,Wr,Xr,f),s&&(h.uv=oi.getInterpolatedAttribute(s,o,c,l,f,new qe)),r&&(h.uv1=oi.getInterpolatedAttribute(r,o,c,l,f,new qe)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,c,l,f,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new W,materialIndex:0};oi.getNormal(Hr,Wr,Xr,u.normal),h.face=u,h.barycoord=f}return h}var _a=class extends Ft{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Lt,h=Lt,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=new ui,J1=new qe(.5,.5),Zr=new W,ds=class{constructor(e=new tn,t=new tn,i=new tn,s=new tn,r=new tn,a=new tn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],m=r[7],x=r[8],y=r[9],p=r[10],d=r[11],M=r[12],E=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-a,m-h,d-x,T-M).normalize(),s[1].setComponents(l+a,m+h,d+x,T+M).normalize(),s[2].setComponents(l+o,m+f,d+y,T+E).normalize(),s[3].setComponents(l-o,m-f,d-y,T-E).normalize(),i)s[4].setComponents(c,u,p,v).normalize(),s[5].setComponents(l-c,m-u,d-p,T-v).normalize();else if(s[4].setComponents(l-c,m-u,d-p,T-v).normalize(),t===pn)s[5].setComponents(l+c,m+u,d+p,T+v).normalize();else if(t===as)s[5].setComponents(c,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=J1.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Zr.x=s.normal.x>0?e.max.x:e.min.x,Zr.y=s.normal.y>0?e.max.y:e.min.y,Zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wn=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xa=new W,ya=new W,Qu=new gt,Bs=new Hn,Kr=new ui,Tl=new W,eh=new W,hi=class extends Ut{constructor(e=new Et,t=new Wn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)xa.fromBufferAttribute(t,s-1),ya.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=xa.distanceTo(ya);e.setAttribute("lineDistance",new Tt(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;Qu.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(Qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=m,p=x-1;y<p;y+=l){let d=h.getX(y),M=h.getX(y+1),E=Jr(this,e,Bs,c,d,M,y);E&&t.push(E)}if(this.isLineLoop){let y=h.getX(x-1),p=h.getX(m),d=Jr(this,e,Bs,c,y,p,x-1);d&&t.push(d)}}else{let m=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let y=m,p=x-1;y<p;y+=l){let d=Jr(this,e,Bs,c,y,y+1,y);d&&t.push(d)}if(this.isLineLoop){let y=Jr(this,e,Bs,c,x-1,m,x-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jr(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(xa.fromBufferAttribute(o,s),ya.fromBufferAttribute(o,r),t.distanceSqToSegment(xa,ya,Tl,eh)>i)return;Tl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Tl);if(!(l<e.near||l>e.far))return{distance:l,point:eh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var th=new W,nh=new W,Zs=class extends hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)th.fromBufferAttribute(t,s),nh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+th.distanceTo(nh);e.setAttribute("lineDistance",new Tt(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fs=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ih=new gt,Ll=new Hn,jr=new ui,Qr=new W,Ks=class extends Ut{constructor(e=new Et,t=new fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;ih.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=u,y=m;x<y;x++){let p=l.getX(x);Qr.fromBufferAttribute(f,p),sh(Qr,p,c,s,e,t,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=u,y=m;x<y;x++)Qr.fromBufferAttribute(f,x),sh(Qr,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sh(n,e,t,i,s,r,a){let o=Ll.distanceSqToPoint(n);if(o<t){let c=new W;Ll.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Js=class extends Ft{constructor(e=[],t=yi,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},js=class extends Ft{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends Ft{constructor(e,t,i=yn,s,r,a,o=Lt,c=Lt,l,h=An,f=1){if(h!==An&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},va=class extends di{constructor(e,t=yn,i=yi,s,r,a=Lt,o=Lt,c,l=An){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qs=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ps=class n extends Et{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2));function x(y,p,d,M,E,v,T,S,R,_,w){let D=v/R,N=T/_,H=v/2,Y=T/2,O=S/2,P=R+1,B=_+1,V=0,ee=0,X=new W;for(let Q=0;Q<B;Q++){let oe=Q*N-Y;for(let Pe=0;Pe<P;Pe++){let ye=Pe*D-H;X[y]=ye*M,X[p]=oe*E,X[d]=O,l.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[d]=S>0?1:-1,h.push(X.x,X.y,X.z),f.push(Pe/R),f.push(1-Q/_),V+=1}}for(let Q=0;Q<_;Q++)for(let oe=0;oe<R;oe++){let Pe=u+oe+P*Q,ye=u+oe+P*(Q+1),se=u+(oe+1)+P*(Q+1),ue=u+(oe+1)+P*Q;c.push(Pe,ye,ue),c.push(ye,se,ue),ee+=6}o.addGroup(m,ee,w),m+=ee,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var er=class n extends Et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=e/o,u=t/c,m=[],x=[],y=[],p=[];for(let d=0;d<h;d++){let M=d*u-a;for(let E=0;E<l;E++){let v=E*f-r;x.push(v,-M,0),y.push(0,0,1),p.push(E/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){let E=M+l*d,v=M+l*(d+1),T=M+1+l*(d+1),S=M+1+l*d;m.push(E,v,S),m.push(v,T,S)}this.setIndex(m),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var _n=class n extends Et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new W,u=new W,m=[],x=[],y=[],p=[];for(let d=0;d<=i;d++){let M=[],E=d/i,v=a+E*o,T=e*Math.cos(v),S=Math.sqrt(e*e-T*T),R=0;d===0&&a===0?R=.5/t:d===i&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let w=_/t,D=s+w*r;f.x=-S*Math.cos(D),f.y=T,f.z=S*Math.sin(D),x.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),p.push(w+R,1-E),M.push(l++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let E=h[d][M+1],v=h[d][M],T=h[d+1][M],S=h[d+1][M+1];(d!==0||a>0)&&m.push(E,v,S),(d!==i-1||c<Math.PI)&&m.push(v,T,S)}this.setIndex(m),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ui(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(rh(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Ht(n){let e={};for(let t=0;t<n.length;t++){let i=Ui(n[t]);for(let s in i)e[s]=i[s]}return e}function rh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function j1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var jh={clone:Ui,merge:Ht},Q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q1,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=j1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var tr=class extends Cn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Sa=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ma=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var nr=class extends Wn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ts(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function El(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var fi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends fi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=e,o=2*t-i;break;case Il:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Pl:a=e,c=2*i-t;break;case Il:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),y=x*x,p=y*x,d=-u*p+2*u*y-u*x,M=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*x+1,E=(-1-m)*p+(1.5+m)*y+.5*x,v=m*p-m*y;for(let T=0;T!==o;++T)r[T]=d*a[h+T]+M*a[l+T]+E*a[c+T]+v*a[f+T];return r}},Ta=class extends fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},Ea=class extends fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Aa=class extends fi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(i-t)/(s-t),y=1-x;for(let p=0;p!==o;++p)r[p]=a[l+p]*y+a[c+p]*x;return r}let u=o*2,m=e-1;for(let x=0;x!==o;++x){let y=a[l+x],p=a[c+x],d=m*u+x*2,M=f[d],E=f[d+1],v=e*u+x*2,T=h[v],S=h[v+1],R=np(i,t,M,T,s);r[x]=Qh(R,y,E,S,p)}return r}};function Qh(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function tp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function np(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Qh(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=tp(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var rn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ts(t,this.TimeBufferType),this.values=ts(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ts(e.times,Array),values:ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),El(e.settings)&&(i.settings={inTangents:ts(e.settings.inTangents,Array),outTangents:ts(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case fa:t=this.InterpolantFactoryMethodLinear;break;case na:t=this.InterpolantFactoryMethodSmooth;break;case Cl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return na;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;El(this.settings)&&(ah(this.settings.inTangents,e),ah(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&_1(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===na,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*i,u=f-i,m=f+i;for(let x=0;x!==i;++x){let y=t[f+x];if(y!==t[u+x]||y!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,El(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ah(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=fa;var pi=class extends rn{constructor(e,t,i){super(e,t,i)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Vs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends rn{constructor(e,t,i,s){super(e,t,i,s)}};Ca.prototype.ValueTypeName="color";var Ra=class extends rn{constructor(e,t,i,s){super(e,t,i,s)}};Ra.prototype.ValueTypeName="number";var Pa=class extends fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)nn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ir=class extends rn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends rn{constructor(e,t,i){super(e,t,i)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Vs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends rn{constructor(e,t,i,s){super(e,t,i,s)}};Ia.prototype.ValueTypeName="vector";var La=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new La,Da=class{constructor(e){this.manager=e!==void 0?e:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Al=new gt,oh=new W,lh=new W,Na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(oh),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===as||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ea=new W,ta=new nn,Tn=new W,rr=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ea,ta,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,ta,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ea,ta,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,ta,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new W,ch=new qe,uh=new qe,Gt=class extends rr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,ch,uh),t.subVectors(uh,ch)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ks*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ms=class extends rr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dl=class extends Na{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Dl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},or=class extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ns=-90,is=1,Fa=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(ns,is,e,t);s.layers=this.layers,this.add(s);let r=new Gt(ns,is,e,t);r.layers=this.layers,this.add(r);let a=new Gt(ns,is,e,t);a.layers=this.layers,this.add(a);let o=new Gt(ns,is,e,t);o.layers=this.layers,this.add(o);let c=new Gt(ns,is,e,t);c.layers=this.layers,this.add(c);let l=new Gt(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===as)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ua=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var cc="\\[\\]\\.:\\/",ip=new RegExp("["+cc+"]","g"),uc="[^"+cc+"]",sp="[^"+cc.replace("\\.","")+"]",rp=/((?:WC+[\/:])*)/.source.replace("WC",uc),ap=/(WCOD+)?/.source.replace("WCOD",sp),op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),cp=new RegExp("^"+rp+ap+op+lp+"$"),up=["material","materials","bones","map"],Nl=class{constructor(e,t,i){let s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ip,"")}static parseTrackName(e){let t=cp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);up.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Nl;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H8=new Float32Array(1);var hh=new gt,lr=class{constructor(e,t,i=0,s=1/0){this.ray=new Hn(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(e,t=!0,i=[]){return Fl(e,this,i,t),i.sort(dh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fl(e[s],this,i,t);return i.sort(dh),i}};function dh(n,e){return n.distance-e.distance}function Fl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Fl(r[a],e,t,!0)}}var gs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var gc=class gc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};gc.prototype.isMatrix2=!0;var Ul=gc;var cr=class extends mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function hc(n,e,t,i){let s=hp(i);switch(t){case tc:return n*e;case ic:return n*e/s.components*s.byteLength;case Xa:return n*e/s.components*s.byteLength;case Si:return n*e*2/s.components*s.byteLength;case $a:return n*e*2/s.components*s.byteLength;case nc:return n*e*3/s.components*s.byteLength;case ln:return n*e*4/s.components*s.byteLength;case qa:return n*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Za:case Ja:return Math.max(n,16)*Math.max(e,8)/4;case Ya:case Ka:return Math.max(n,8)*Math.max(e,8)/2;case ja:case Qa:case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eo:case _r:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case co:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ho:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yo:case vo:case bo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case So:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xr:case wo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hp(n){switch(n){case Kt:case Jl:return{byteLength:1,components:1};case ys:case jl:case bn:return{byteLength:2,components:1};case Ha:case Wa:return{byteLength:2,components:4};case yn:case Ga:case vn:return{byteLength:4,components:1};case Ql:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fp(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<f.length;m++){let x=f[u],y=f[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,f[u]=y)}f.length=u+1;for(let m=0,x=f.length;m<x;m++){let y=f[m];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Cp=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Op=`#define PI 3.141592653589793
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
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
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
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
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
#endif`,d0=`uniform sampler2D dfgLUT;
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
}`,f0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w0=`#if defined( USE_POINTS_UV )
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
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q0=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,Om=`#define PHONG
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
}`,Bm=`#define STANDARD
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
}`,km=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:_p,alphatest_fragment:xp,alphatest_pars_fragment:yp,aomap_fragment:vp,aomap_pars_fragment:bp,batching_pars_vertex:Sp,batching_vertex:Mp,begin_vertex:wp,beginnormal_vertex:Tp,bsdfs:Ep,iridescence_fragment:Ap,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Lp,color_fragment:Dp,color_pars_fragment:Np,color_pars_vertex:Fp,color_vertex:Up,common:Op,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:kp,displacementmap_pars_vertex:zp,displacementmap_vertex:Vp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Hp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:$p,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:a0,envmap_vertex:Kp,fog_vertex:Jp,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:e0,gradientmap_pars_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:u0,lights_physical_fragment:h0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,lightprobes_pars_fragment:g0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:v0,map_fragment:b0,map_pars_fragment:S0,map_particle_fragment:M0,map_particle_pars_fragment:w0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:E0,morphinstance_vertex:A0,morphcolor_vertex:C0,morphnormal_vertex:R0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:N0,normal_pars_vertex:F0,normal_vertex:U0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:H0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:$0,dithering_pars_fragment:q0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:J0,shadowmap_vertex:j0,shadowmask_pars_fragment:Q0,skinbase_vertex:em,skinning_pars_vertex:tm,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:um,uv_pars_vertex:hm,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:xm,cube_frag:ym,depth_vert:vm,depth_frag:bm,distance_vert:Sm,distance_frag:Mm,equirect_vert:wm,equirect_frag:Tm,linedashed_vert:Em,linedashed_frag:Am,meshbasic_vert:Cm,meshbasic_frag:Rm,meshlambert_vert:Pm,meshlambert_frag:Im,meshmatcap_vert:Lm,meshmatcap_frag:Dm,meshnormal_vert:Nm,meshnormal_frag:Fm,meshphong_vert:Um,meshphong_frag:Om,meshphysical_vert:Bm,meshphysical_frag:km,meshtoon_vert:zm,meshtoon_frag:Vm,points_vert:Gm,points_frag:Hm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:$m,sprite_frag:qm},Ee={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ln={basic:{uniforms:Ht([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ht([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ht([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ht([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ht([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ht([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ht([Ee.points,Ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ht([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ht([Ee.common,Ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ht([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ht([Ee.sprite,Ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Ht([Ee.common,Ee.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Ht([Ee.lights,Ee.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ln.physical={uniforms:Ht([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Co={r:0,b:0,g:0},Ym=new gt,Md=new Ze;Md.set(-1,0,0,0,1,0,0,0,1);function Zm(n,e,t,i,s,r){let a=new Qe(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function m(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let v=M.backgroundBlurriness>0;E=e.get(E,v)}return E}function x(M){let E=!1,v=m(M);v===null?p(a,o):v&&v.isColor&&(p(v,1),E=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,E){let v=m(E);v&&(v.isCubeTexture||v.mapping===hr)?(l===void 0&&(l=new At(new ps(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ui(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Md),l.material.toneMapped=it.getTransfer(v.colorSpace)!==ut,(h!==v||f!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new At(new er(2,2),new sn({name:"BackgroundMaterial",uniforms:Ui(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=it.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,E){M.getRGB(Co,lc(n)),t.buffers.color.setClear(Co.r,Co.g,Co.b,E,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:x,addToRenderList:y,dispose:d}}function Km(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,H,Y,O,P){let B=!1,V=f(N,O,Y,H);r!==V&&(r=V,l(r.object)),B=m(N,O,Y,P),B&&x(N,O,Y,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(N,H,Y,O),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,H,Y,O){let P=O.wireframe===!0,B=i[H.id];B===void 0&&(B={},i[H.id]=B);let V=N.isInstancedMesh===!0?N.id:0,ee=B[V];ee===void 0&&(ee={},B[V]=ee);let X=ee[Y.id];X===void 0&&(X={},ee[Y.id]=X);let Q=X[P];return Q===void 0&&(Q=u(c()),X[P]=Q),Q}function u(N){let H=[],Y=[],O=[];for(let P=0;P<t;P++)H[P]=0,Y[P]=0,O[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:O,object:N,attributes:{},index:null}}function m(N,H,Y,O){let P=r.attributes,B=H.attributes,V=0,ee=Y.getAttributes();for(let X in ee)if(ee[X].location>=0){let oe=P[X],Pe=B[X];if(Pe===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Pe=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Pe=N.instanceColor)),oe===void 0||oe.attribute!==Pe||Pe&&oe.data!==Pe.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function x(N,H,Y,O){let P={},B=H.attributes,V=0,ee=Y.getAttributes();for(let X in ee)if(ee[X].location>=0){let oe=B[X];oe===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor));let Pe={};Pe.attribute=oe,oe&&oe.data&&(Pe.data=oe.data),P[X]=Pe,V++}r.attributes=P,r.attributesNum=V,r.index=O}function y(){let N=r.newAttributes;for(let H=0,Y=N.length;H<Y;H++)N[H]=0}function p(N){d(N,0)}function d(N,H){let Y=r.newAttributes,O=r.enabledAttributes,P=r.attributeDivisors;Y[N]=1,O[N]===0&&(n.enableVertexAttribArray(N),O[N]=1),P[N]!==H&&(n.vertexAttribDivisor(N,H),P[N]=H)}function M(){let N=r.newAttributes,H=r.enabledAttributes;for(let Y=0,O=H.length;Y<O;Y++)H[Y]!==N[Y]&&(n.disableVertexAttribArray(Y),H[Y]=0)}function E(N,H,Y,O,P,B,V){V===!0?n.vertexAttribIPointer(N,H,Y,P,B):n.vertexAttribPointer(N,H,Y,O,P,B)}function v(N,H,Y,O){y();let P=O.attributes,B=Y.getAttributes(),V=H.defaultAttributeValues;for(let ee in B){let X=B[ee];if(X.location>=0){let Q=P[ee];if(Q===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let oe=Q.normalized,Pe=Q.itemSize,ye=e.get(Q);if(ye===void 0)continue;let se=ye.buffer,ue=ye.type,he=ye.bytesPerElement,F=ue===n.INT||ue===n.UNSIGNED_INT||Q.gpuType===Ga;if(Q.isInterleavedBufferAttribute){let Z=Q.data,pe=Z.stride,Ce=Q.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)d(X.location+_e,Z.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e);n.bindBuffer(n.ARRAY_BUFFER,se);for(let _e=0;_e<X.locationSize;_e++)E(X.location+_e,Pe/X.locationSize,ue,oe,pe*he,(Ce+Pe/X.locationSize*_e)*he,F)}else{if(Q.isInstancedBufferAttribute){for(let Z=0;Z<X.locationSize;Z++)d(X.location+Z,Q.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Z=0;Z<X.locationSize;Z++)p(X.location+Z);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Z=0;Z<X.locationSize;Z++)E(X.location+Z,Pe/X.locationSize,ue,oe,Pe*he,Pe/X.locationSize*Z*he,F)}}else if(V!==void 0){let oe=V[ee];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(X.location,oe);break;case 3:n.vertexAttrib3fv(X.location,oe);break;case 4:n.vertexAttrib4fv(X.location,oe);break;default:n.vertexAttrib1fv(X.location,oe)}}}}M()}function T(){w();for(let N in i){let H=i[N];for(let Y in H){let O=H[Y];for(let P in O){let B=O[P];for(let V in B)h(B[V].object),delete B[V];delete O[P]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let H=i[N.id];for(let Y in H){let O=H[Y];for(let P in O){let B=O[P];for(let V in B)h(B[V].object),delete B[V];delete O[P]}}delete i[N.id]}function R(N){for(let H in i){let Y=i[H];for(let O in Y){let P=Y[O];if(P[N.id]===void 0)continue;let B=P[N.id];for(let V in B)h(B[V].object),delete B[V];delete P[N.id]}}}function _(N){for(let H in i){let Y=i[H],O=N.isInstancedMesh===!0?N.id:0,P=Y[O];if(P!==void 0){for(let B in P){let V=P[B];for(let ee in V)h(V[ee].object),delete V[ee];delete P[B]}delete Y[O],Object.keys(Y).length===0&&delete i[H]}}}function w(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function Jm(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function jm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kt&&R!==vn&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ge("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:T,samples:S}}function Qm(n){let e=this,t=null,i=0,s=!1,r=!1,a=new tn,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||i!==0||s;return s=u,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){let x=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{let M=r?0:i,E=M*4,v=d.clippingState||null;c.value=v,v=h(x,u,E,m);for(let T=0;T!==E;++T)v[T]=t[T];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,m,x){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=c.value,x!==!0||p===null){let d=m+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,v=m;E!==y;++E,v+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Ms=4,e2=6,t2=20,n2=256,yr=new ms,td=new Qe,_c=null,xc=0,yc=0,vc=!1,i2=new W,Oi=new W,Po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=i2}=r;_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,xc,yc),this._renderer.xr.enabled=vc,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:bn,format:ln,colorSpace:Gs,depthBuffer:!1},s=nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s2(r)),this._blurMaterial=a2(r,e,t),this._ggxMaterial=r2(r,e,t)}return s}_compileMaterial(e){let t=new At(new Et,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,s,r){let c=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(td),f.toneMapping=xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new ps,new gn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,d=!1,M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,d=!0):(p.color.copy(td),d=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let T=this._cubeSize;Ss(s,v*T,E>2?T:0,T,T),f.setRenderTarget(s),d&&f.render(y,c),f.render(e,c)}f.toneMapping=m,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===yi||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ss(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,yr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,m=f*u,{_lodMax:x}=this,y=this._sizeLods[i],p=3*y*(i>x-Ms?i-x+Ms:0),d=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-t,Ss(r,p,d,3*y,2*y),s.setRenderTarget(r),s.render(o,yr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,Ss(e,p,d,3*y,2*y),s.setRenderTarget(e),s.render(o,yr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ms?s-this._lodMax+Ms:0),u=4*(this._cubeSize-h);Ss(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(c,yr)}};function s2(n){let e=[],t=[],i=n,s=n-Ms+1+e2;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,m=3,x=new Float32Array(m*u*f),y=new Float32Array(m*u*f);for(let d=0;d<f;d++){let M=d%3*2/3-1,E=d>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];x.set(v,m*u*d);for(let T=0;T<u;T++){let S=h[T*2]*2-1,R=h[T*2+1]*2-1;d===0?Oi.set(1,R,S):d===1?Oi.set(-S,1,-R):d===2?Oi.set(-S,R,1):d===3?Oi.set(-1,R,-S):d===4?Oi.set(-S,-1,R):Oi.set(S,R,-1),Oi.toArray(y,(d*u+T)*m)}}let p=new Et;p.setAttribute("position",new qt(x,m)),p.setAttribute("outputDirection",new qt(y,m)),t.push(new At(p,null)),i>Ms&&i--}return{lodMeshes:t,sizeLods:e}}function nd(n,e,t){let i=new Zt(n,e,t);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function r2(n,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function a2(n,e,t){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:t2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function id(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function sd(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Io=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ps(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Pn});r.uniforms.tEquirect.value=t;let a=new At(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=Nt),new Fa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function o2(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===ka||m===za)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new Io(x.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,x=m===ka||m===za,y=m===yi||m===Fi;if(x||y){let p=t.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Po(n)),p=x?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return x&&M&&M.height>0||y&&M&&c(M)?(i===null&&(i=new Po(n)),p=x?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===ka?u.mapping=yi:m===za&&(u.mapping=Fi),u}function c(u){let m=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&m++;return m===x}function l(u){let m=u.target;m.removeEventListener("dispose",l);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function l2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Di("WebGLRenderer: "+i+" extension not supported."),s}}}function c2(n,e,t,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let m in u)e.update(u[m],n.ARRAY_BUFFER)}function l(f){let u=[],m=f.index,x=f.attributes.position,y=0;if(x===void 0)return;if(m!==null){let M=m.array;y=m.version;for(let E=0,v=M.length;E<v;E+=3){let T=M[E+0],S=M[E+1],R=M[E+2];u.push(T,S,S,R,R,T)}}else{let M=x.array;y=x.version;for(let E=0,v=M.length/3-1;E<v;E+=3){let T=E+0,S=E+1,R=E+2;u.push(T,S,S,R,R,T)}}let p=new(x.count>=65535?Ys:qs)(u,1);p.version=y;let d=r.get(f);d&&e.remove(d),r.set(f,p)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function u2(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function l(f,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,f*a,m),t.update(u,i,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,m);let y=0;for(let p=0;p<m;p++)y+=u[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function h2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d2(n,e,t){let i=new WeakMap,s=new yt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;m===!0&&(E=1),x===!0&&(E=2),y===!0&&(E=3);let v=o.attributes.position.count*E,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*T*4*f),R=new Xs(S,v,T,f);R.type=vn,R.needsUpdate=!0;let _=E*4;for(let D=0;D<f;D++){let N=p[D],H=d[D],Y=M[D],O=v*T*4*D;for(let P=0;P<N.count;P++){let B=P*_;m===!0&&(s.fromBufferAttribute(N,P),S[O+B+0]=s.x,S[O+B+1]=s.y,S[O+B+2]=s.z,S[O+B+3]=0),x===!0&&(s.fromBufferAttribute(H,P),S[O+B+4]=s.x,S[O+B+5]=s.y,S[O+B+6]=s.z,S[O+B+7]=0),y===!0&&(s.fromBufferAttribute(Y,P),S[O+B+8]=s.x,S[O+B+9]=s.y,S[O+B+10]=s.z,S[O+B+11]=Y.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new qe(v,T)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];let x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function f2(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var p2={[Hl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[$l]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[Zl]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function m2(n,e,t,i,s,r){let a=new Zt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Et;l.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let h=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new At(l,h),u=new ms(-1,1,1,-1,0,1),m=null,x=null,y=!1,p,d=null,M=[],E=!1;this.setSize=function(v,T){a.setSize(v,T),o!==null&&o.setSize(v,T),c!==null&&c.setSize(v,T);for(let S=0;S<M.length;S++){let R=M[S];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;let T=a.width,S=a.height;M.length>0&&o===null&&(o=new Zt(T,S,{type:bn,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(T,S,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let _=M[R];_.setSize&&_.setSize(T,S)}},this.begin=function(v,T){if(y||v.toneMapping===xn&&M.length===0)return!1;if(d=T,T!==null){let S=T.width,R=T.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return E===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=xn,!0},this.hasRenderPass=function(){return E},this.end=function(v,T){v.toneMapping=p,y=!0;let S=a,R=o;for(let _=0;_<M.length;_++){let w=M[_];w.enabled!==!1&&(w.render(v,R,S,T),w.needsSwap!==!1&&(S=R,R=R===o?c:o))}if(m!==v.outputColorSpace||x!==v.toneMapping){m=v.outputColorSpace,x=v.toneMapping,h.defines={},it.getTransfer(m)===ut&&(h.defines.SRGB_TRANSFER="");let _=p2[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(d),v.render(f,u),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var wd=new Ft,Mc=new di(1,1),Td=new Xs,Ed=new ga,Ad=new Js,rd=[],ad=[],od=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function Ts(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function x2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function y2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function v2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;cd.set(i),n.uniformMatrix2fv(this.addr,!1,cd),Rt(t,i)}}function b2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;ld.set(i),n.uniformMatrix3fv(this.addr,!1,ld),Rt(t,i)}}function S2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;od.set(i),n.uniformMatrix4fv(this.addr,!1,od),Rt(t,i)}}function M2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function w2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function T2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function E2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function A2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function R2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function I2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mc.compareFunction=t.isReversedDepthBuffer()?Ao:Eo,r=Mc):r=wd,t.setTexture2D(e||r,s)}function L2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ed,s)}function D2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ad,s)}function N2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Td,s)}function F2(n){switch(n){case 5126:return g2;case 35664:return _2;case 35665:return x2;case 35666:return y2;case 35674:return v2;case 35675:return b2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return w2;case 35668:case 35672:return T2;case 35669:case 35673:return E2;case 5125:return A2;case 36294:return C2;case 36295:return R2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return N2}}function U2(n,e){n.uniform1fv(this.addr,e)}function O2(n,e){let t=Ts(e,this.size,2);n.uniform2fv(this.addr,t)}function B2(n,e){let t=Ts(e,this.size,3);n.uniform3fv(this.addr,t)}function k2(n,e){let t=Ts(e,this.size,4);n.uniform4fv(this.addr,t)}function z2(n,e){let t=Ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V2(n,e){let t=Ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function G2(n,e){let t=Ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H2(n,e){n.uniform1iv(this.addr,e)}function W2(n,e){n.uniform2iv(this.addr,e)}function X2(n,e){n.uniform3iv(this.addr,e)}function $2(n,e){n.uniform4iv(this.addr,e)}function q2(n,e){n.uniform1uiv(this.addr,e)}function Y2(n,e){n.uniform2uiv(this.addr,e)}function Z2(n,e){n.uniform3uiv(this.addr,e)}function K2(n,e){n.uniform4uiv(this.addr,e)}function J2(n,e,t){let i=this.cache,s=e.length,r=No(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Mc:a=wd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function j2(n,e,t){let i=this.cache,s=e.length,r=No(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ed,r[a])}function Q2(n,e,t){let i=this.cache,s=e.length,r=No(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ad,r[a])}function e3(n,e,t){let i=this.cache,s=e.length,r=No(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Td,r[a])}function t3(n){switch(n){case 5126:return U2;case 35664:return O2;case 35665:return B2;case 35666:return k2;case 35674:return z2;case 35675:return V2;case 35676:return G2;case 5124:case 35670:return H2;case 35667:case 35671:return W2;case 35668:case 35672:return X2;case 35669:case 35673:return $2;case 5125:return q2;case 36294:return Y2;case 36295:return Z2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return e3}}var wc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=F2(t.type)}},Tc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t3(t.type)}},Ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},bc=/(\w+)(\])?(\[|\.)?/g;function ud(n,e){n.seq.push(e),n.map[e.id]=e}function n3(n,e,t){let i=n.name,s=i.length;for(bc.lastIndex=0;;){let r=bc.exec(i),a=bc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ud(t,l===void 0?new wc(o,n,e):new Tc(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ec(o),ud(t,f)),t=f}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);n3(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function hd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var i3=37297,s3=0;function r3(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var dd=new Ze;function a3(n){it._getMatrix(dd,it.workingColorSpace,n);let e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Hs:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+r3(n.getShaderSource(e),o)}else return r}function o3(n,e){let t=a3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var l3={[Hl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[$l]:"ACESFilmic",[Yl]:"AgX",[Zl]:"Neutral",[ql]:"Custom"};function c3(n,e){let t=l3[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ro=new W;function u3(){it.getLuminanceCoefficients(Ro);let n=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function d3(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f3(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function br(n){return n!==""}function pd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function md(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var p3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(n){return n.replace(p3,g3)}var m3=new Map;function g3(n,e){let t=je[e];if(t===void 0){let i=m3.get(e);if(i!==void 0)t=je[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ac(t)}var _3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(n){return n.replace(_3,x3)}function x3(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var y3={[ur]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function v3(n){return y3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var b3={[yi]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE_UV"};function S3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":b3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var M3={[Fi]:"ENVMAP_MODE_REFRACTION"};function w3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":M3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var T3={[Ba]:"ENVMAP_BLENDING_MULTIPLY",[Nh]:"ENVMAP_BLENDING_MIX",[Fh]:"ENVMAP_BLENDING_ADD"};function E3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":T3[n.combine]||"ENVMAP_BLENDING_NONE"}function A3(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function C3(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=v3(t),l=S3(t),h=w3(t),f=E3(t),u=A3(t),m=h3(t),x=d3(r),y=s.createProgram(),p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(br).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(br).join(`
`),d.length>0&&(d+=`
`)):(p=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),d=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?je.tonemapping_pars_fragment:"",t.toneMapping!==xn?c3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,o3("linearToOutputTexel",t.outputColorSpace),u3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=Ac(a),a=pd(a,t),a=md(a,t),o=Ac(o),o=pd(o,t),o=md(o,t),a=gd(a),o=gd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=M+p+a,v=M+d+o,T=hd(s,s.VERTEX_SHADER,E),S=hd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,T),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(N){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(y)||"",Y=s.getShaderInfoLog(T)||"",O=s.getShaderInfoLog(S)||"",P=H.trim(),B=Y.trim(),V=O.trim(),ee=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,S);else{let Q=fd(s,T,"vertex"),oe=fd(s,S,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+Q+`
`+oe)}else P!==""?Ge("WebGLProgram: Program Info Log:",P):(B===""||V==="")&&(X=!1);X&&(N.diagnostics={runnable:ee,programLog:P,vertexShader:{log:B,prefix:p},fragmentShader:{log:V,prefix:d}})}s.deleteShader(T),s.deleteShader(S),_=new ws(s,y),w=f3(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,i3)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s3++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=S,this}var R3=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Rc(e),t.set(e,i)),i}},Rc=class{constructor(e){this.id=R3++,this.code=e,this.usedTimes=0}};function P3(n){return n===Si||n===_r||n===xr}function I3(n,e,t,i,s,r){let a=new us,o=new Cc,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,w,D,N,H,Y){let O=N.fog,P=H.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ee=e.get(_.envMap||B,V),X=ee&&ee.mapping===hr?ee.image.height:null,Q=m[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let oe=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Pe=oe!==void 0?oe.length:0,ye=0;P.morphAttributes.position!==void 0&&(ye=1),P.morphAttributes.normal!==void 0&&(ye=2),P.morphAttributes.color!==void 0&&(ye=3);let se,ue,he,F;if(Q){let pt=Ln[Q];se=pt.vertexShader,ue=pt.fragmentShader}else{se=_.vertexShader,ue=_.fragmentShader;let pt=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,pt,lt),he=pt.id,F=lt.id}let Z=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ce=H.isInstancedMesh===!0,_e=H.isBatchedMesh===!0,We=!!_.map,st=!!_.matcap,Xe=!!ee,j=!!_.aoMap,A=!!_.lightMap,L=!!_.bumpMap&&_.wireframe===!1,q=!!_.normalMap,ie=!!_.displacementMap,me=!!_.emissiveMap,ge=!!_.metalnessMap,Le=!!_.roughnessMap,U=_.anisotropy>0,tt=_.clearcoat>0,Ye=_.dispersion>0,C=_.retroreflectivity>0,g=_.iridescence>0,z=_.sheen>0,$=_.transmission>0,re=U&&!!_.anisotropyMap,xe=tt&&!!_.clearcoatMap,ve=tt&&!!_.clearcoatNormalMap,ae=tt&&!!_.clearcoatRoughnessMap,ce=g&&!!_.iridescenceMap,be=g&&!!_.iridescenceThicknessMap,ke=z&&!!_.sheenColorMap,Te=z&&!!_.sheenRoughnessMap,Se=!!_.specularMap,ze=!!_.specularColorMap,He=!!_.specularIntensityMap,Ke=$&&!!_.transmissionMap,G=$&&!!_.thicknessMap,Me=!!_.gradientMap,le=!!_.alphaMap,we=_.alphaTest>0,Ie=!!_.alphaHash,de=!!_.extensions,Ve=xn;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=n.toneMapping);let Oe={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:ue,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:F,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_e,batchingColor:_e&&H._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,instancingMorph:Ce&&H.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:st,envMap:Xe,envMapMode:Xe&&ee.mapping,envMapCubeUVHeight:X,aoMap:j,lightMap:A,bumpMap:L,normalMap:q,displacementMap:ie,emissiveMap:me,normalMapObjectSpace:q&&_.normalMapType===Bh,normalMapTangentSpace:q&&_.normalMapType===To,packedNormalMap:q&&_.normalMapType===To&&P3(_.normalMap.format),metalnessMap:ge,roughnessMap:Le,anisotropy:U,anisotropyMap:re,clearcoat:tt,clearcoatMap:xe,clearcoatNormalMap:ve,clearcoatRoughnessMap:ae,dispersion:Ye,retroreflection:C,iridescence:g,iridescenceMap:ce,iridescenceThicknessMap:be,sheen:z,sheenColorMap:ke,sheenRoughnessMap:Te,specularMap:Se,specularColorMap:ze,specularIntensityMap:He,transmission:$,transmissionMap:Ke,thicknessMap:G,gradientMap:Me,opaque:_.transparent===!1&&_.blending===xs&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:we,alphaHash:Ie,combine:_.combine,mapUv:We&&x(_.map.channel),aoMapUv:j&&x(_.aoMap.channel),lightMapUv:A&&x(_.lightMap.channel),bumpMapUv:L&&x(_.bumpMap.channel),normalMapUv:q&&x(_.normalMap.channel),displacementMapUv:ie&&x(_.displacementMap.channel),emissiveMapUv:me&&x(_.emissiveMap.channel),metalnessMapUv:ge&&x(_.metalnessMap.channel),roughnessMapUv:Le&&x(_.roughnessMap.channel),anisotropyMapUv:re&&x(_.anisotropyMap.channel),clearcoatMapUv:xe&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:be&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(_.sheenRoughnessMap.channel),specularMapUv:Se&&x(_.specularMap.channel),specularColorMapUv:ze&&x(_.specularColorMap.channel),specularIntensityMapUv:He&&x(_.specularIntensityMap.channel),transmissionMapUv:Ke&&x(_.transmissionMap.channel),thicknessMapUv:G&&x(_.thicknessMap.channel),alphaMapUv:le&&x(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(q||U),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!P.attributes.uv&&(We||le),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&q===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ye,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:me&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function p(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(d(w,_),M(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function d(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let w=m[_.type],D;if(w){let N=Ln[w];D=jh.clone(N.uniforms)}else D=_.uniforms;return D}function v(_,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new C3(n,w,_,s),l.push(D),h.set(w,D)),D}function T(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:E,acquireProgram:v,releaseProgram:T,releaseShaderCache:S,programs:l,dispose:R}}function L3(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function D3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function xd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,y,p,d){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:d},n[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=x,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=p,M.group=d),e++,M}function c(u,m,x,y,p,d,M){M.reversedDepth===!0&&(p=-p);let E=o(u,m,x,y,p,d);x.transmission>0?i.push(E):x.transparent===!0?s.push(E):t.push(E)}function l(u,m,x,y,p,d){let M=o(u,m,x,y,p,d);x.transmission>0?i.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,m){t.length>1&&t.sort(u||D3),i.length>1&&i.sort(m||xd),s.length>1&&s.sort(m||xd)}function f(){for(let u=e,m=n.length;u<m;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function N3(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new yd,n.set(i,[a])):s>=r.length?(a=new yd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function F3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Qe};break;case"SpotLight":t={position:new W,direction:new W,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function U3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var O3=0;function B3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function k3(n){let e=new F3,t=U3(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);let s=new W,r=new gt,a=new gt;function o(l){let h=0,f=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,x=0,y=0,p=0,d=0,M=0,E=0,v=0,T=0,S=0,R=0,_=0,w=0,D=0;l.sort(B3);for(let H=0,Y=l.length;H<Y;H++){let O=l[H],P=O.color,B=O.intensity,V=O.distance,ee=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Si?ee=O.shadow.map.texture:ee=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=P.r*B,f+=P.g*B,u+=P.b*B;else if(O.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(O.sh.coefficients[X],B);D++}else if(O.isSunLight){let X=e.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Q=O.shadow,oe=t.get(O);oe.shadowIntensity=Q.intensity,oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[x]=oe,i.sunShadowMap[x]=ee;let Pe=Q.getViewportCount();for(let ye=0;ye<Pe;ye++)i.sunShadowMatrix[y+ye]=Q.getMatrix(ye),i.sunShadowCascade[y+ye]=Q._cascadeData[ye];y+=Pe,x++}i.sun[m]=X,m++}else if(O.isDirectionalLight){let X=e.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Q=O.shadow,oe=t.get(O);oe.shadowIntensity=Q.intensity,oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,i.directionalShadow[p]=oe,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=O.shadow.matrix,T++}i.directional[p]=X,p++}else if(O.isSpotLight){let X=e.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(P).multiplyScalar(B),X.distance=V,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,i.spot[M]=X;let Q=O.shadow;if(O.map&&(i.spotLightMap[_]=O.map,_++,Q.updateMatrices(O),O.castShadow&&w++),i.spotLightMatrix[M]=Q.matrix,O.castShadow){let oe=t.get(O);oe.shadowIntensity=Q.intensity,oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,i.spotShadow[M]=oe,i.spotShadowMap[M]=ee,R++}M++}else if(O.isRectAreaLight){let X=e.get(O);X.color.copy(P).multiplyScalar(B),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),i.rectArea[E]=X,E++}else if(O.isPointLight){let X=e.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),X.distance=O.distance,X.decay=O.decay,O.castShadow){let Q=O.shadow,oe=t.get(O);oe.shadowIntensity=Q.intensity,oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,oe.shadowCameraNear=Q.camera.near,oe.shadowCameraFar=Q.camera.far,i.pointShadow[d]=oe,i.pointShadowMap[d]=ee,i.pointShadowMatrix[d]=O.shadow.matrix,S++}i.point[d]=X,d++}else if(O.isHemisphereLight){let X=e.get(O);X.skyColor.copy(O.color).multiplyScalar(B),X.groundColor.copy(O.groundColor).multiplyScalar(B),i.hemi[v]=X,v++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let N=i.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==M||N.rectAreaLength!==E||N.hemiLength!==v||N.numSunShadows!==x||N.numDirectionalShadows!==T||N.numPointShadows!==S||N.numSpotShadows!==R||N.numSpotMaps!==_||N.numLightProbes!==D)&&(i.sun.length=m,i.directional.length=p,i.spot.length=M,i.rectArea.length=E,i.point.length=d,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=D,N.sunLength=m,N.directionalLength=p,N.pointLength=d,N.spotLength=M,N.rectAreaLength=E,N.hemiLength=v,N.numSunShadows=x,N.numDirectionalShadows=T,N.numPointShadows=S,N.numSpotShadows=R,N.numSpotMaps=_,N.numLightProbes=D,i.version=O3++)}function c(l,h){let f=0,u=0,m=0,x=0,y=0,p=0,d=h.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){let v=l[M];if(v.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),u++}else if(v.isSpotLight){let T=i.spot[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),x++}else if(v.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let T=i.point[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:i}}function vd(n){let e=new k3(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function z3(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vd(n),e.set(s,[o])):r>=a.length?(o=new vd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var V3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G3=`uniform sampler2D shadow_pass;
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
}`,H3=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],W3=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],bd=new gt,vr=new W,Sc=new W;function X3(n,e,t){let i=new ds,s=new qe,r=new qe,a=new yt,o=new Sa,c=new Ma,l={},h=t.maxTextureSize,f={[xi]:Ot,[Ot]:xi,[Rn]:Rn},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:V3,fragmentShader:G3}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new Et;x.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new At(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let d=this.type;this.render=function(S,R,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===mh&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let w=n.getRenderTarget(),D=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Pn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=d!==this.type;Y&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(P=>P.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,P=S.length;O<P;O++){let B=S[O],V=B.shadow;if(V===void 0){Ge("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ee=V.getFrameExtents();s.multiply(ee),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,V.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===_s){if(B.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Zt(s.x,s.y,{format:Si,type:bn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new di(s.x,s.y,vn),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=An,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt}else B.isPointLight?(V.map=new Io(s.x),V.map.depthTexture=new va(s.x,yn)):(V.map=new Zt(s.x,s.y),V.map.depthTexture=new di(s.x,s.y,yn)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=An,this.type===ur?(V.map.depthTexture.compareFunction=X?Ao:Eo,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();B.isPointLight!==!0&&V.updateMatrices(B,_);for(let oe=0;oe<Q;oe++){let Pe=V.getCamera(oe);if(B.isPointLight){let ye=V.camera,se=V.matrix,ue=B.distance||ye.far;ue!==ye.far&&(ye.far=ue,ye.updateProjectionMatrix()),vr.setFromMatrixPosition(B.matrixWorld),ye.position.copy(vr),Sc.copy(ye.position),Sc.add(H3[oe]),ye.up.copy(W3[oe]),ye.lookAt(Sc),ye.updateMatrixWorld(),se.makeTranslation(-vr.x,-vr.y,-vr.z),bd.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),V._frustum.setFromProjectionMatrix(bd,ye.coordinateSystem,ye.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(V.map),n.clear());let ye=V.getViewport(oe);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),H.viewport(a)}i=V.getFrustum(oe),v(R,_,Pe,B,this.type)}V.isPointLightShadow!==!0&&this.type===_s&&M(V,_),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,D,N)};function M(S,R){let _=e.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new Zt(s.x,s.y,{format:Si,type:bn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,y,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,_,m,y,null)}function E(S,R,_,w){let D=null,N=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)D=N;else if(D=_.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let H=D.uuid,Y=R.uuid,O=l[H];O===void 0&&(O={},l[H]=O);let P=O[Y];P===void 0&&(P=D.clone(),O[Y]=P,R.addEventListener("dispose",T)),D=P}if(D.visible=R.visible,D.wireframe=R.wireframe,w===_s?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:f[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let H=n.properties.get(D);H.light=_}return D}function v(S,R,_,w,D){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&D===_s)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let Y=e.update(S),O=S.material;if(Array.isArray(O)){let P=Y.groups;for(let B=0,V=P.length;B<V;B++){let ee=P[B],X=O[ee.materialIndex];if(X&&X.visible){let Q=E(S,X,w,D);S.onBeforeShadow(n,S,R,_,Y,Q,ee),n.renderBufferDirect(_,null,Y,Q,S,ee),S.onAfterShadow(n,S,R,_,Y,Q,ee)}}}else if(O.visible){let P=E(S,O,w,D);S.onBeforeShadow(n,S,R,_,Y,P,null),n.renderBufferDirect(_,null,Y,P,S,null),S.onAfterShadow(n,S,R,_,Y,P,null)}}let H=S.children;for(let Y=0,O=H.length;Y<O;Y++)v(H[Y],R,_,w,D)}function T(S){S.target.removeEventListener("dispose",T);for(let _ in l){let w=l[_],D=S.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function $3(n,e){function t(){let G=!1,Me=new yt,le=null,we=new yt(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!G&&(n.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,de,Ve,Oe,pt){pt===!0&&(Ie*=Oe,de*=Oe,Ve*=Oe),Me.set(Ie,de,Ve,Oe),we.equals(Me)===!1&&(n.clearColor(Ie,de,Ve,Oe),we.copy(Me))},reset:function(){G=!1,le=null,we.set(-1,0,0,0)}}}function i(){let G=!1,Me=!1,le=null,we=null,Ie=null;return{setReversed:function(de){if(Me!==de){let Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Me=de;let Oe=Ie;Ie=null,this.setClear(Oe)}},getReversed:function(){return Me},setTest:function(de){de?Z(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(de){le!==de&&!G&&(n.depthMask(de),le=de)},setFunc:function(de){if(Me&&(de=Kh[de]),we!==de){switch(de){case sa:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case aa:n.depthFunc(n.LESS);break;case li:n.depthFunc(n.LEQUAL);break;case oa:n.depthFunc(n.EQUAL);break;case la:n.depthFunc(n.GEQUAL);break;case ca:n.depthFunc(n.GREATER);break;case ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=de}},setLocked:function(de){G=de},setClear:function(de){Ie!==de&&(Ie=de,Me&&(de=1-de),n.clearDepth(de))},reset:function(){G=!1,le=null,we=null,Ie=null,Me=!1}}}function s(){let G=!1,Me=null,le=null,we=null,Ie=null,de=null,Ve=null,Oe=null,pt=null;return{setTest:function(lt){G||(lt?Z(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!G&&(n.stencilMask(lt),Me=lt)},setFunc:function(lt,cn,Mn){(le!==lt||we!==cn||Ie!==Mn)&&(n.stencilFunc(lt,cn,Mn),le=lt,we=cn,Ie=Mn)},setOp:function(lt,cn,Mn){(de!==lt||Ve!==cn||Oe!==Mn)&&(n.stencilOp(lt,cn,Mn),de=lt,Ve=cn,Oe=Mn)},setLocked:function(lt){G=lt},setClear:function(lt){pt!==lt&&(n.clearStencil(lt),pt=lt)},reset:function(){G=!1,Me=null,le=null,we=null,Ie=null,de=null,Ve=null,Oe=null,pt=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},m=new WeakMap,x=[],y=null,p=!1,d=null,M=null,E=null,v=null,T=null,S=null,R=null,_=new Qe(0,0,0),w=0,D=!1,N=null,H=null,Y=null,O=null,P=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ee>=2);let Q=null,oe={},Pe=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),se=new yt().fromArray(Pe),ue=new yt().fromArray(ye);function he(G,Me,le,we){let Ie=new Uint8Array(4),de=n.createTexture();n.bindTexture(G,de),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<le;Ve++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Me+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return de}let F={};F[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(li),L(!1),q(Ol),Z(n.CULL_FACE),j(Pn);function Z(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function pe(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function Ce(G,Me){return u[G]!==Me?(n.bindFramebuffer(G,Me),u[G]=Me,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Me),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function _e(G,Me){let le=x,we=!1;if(G){le=m.get(Me),le===void 0&&(le=[],m.set(Me,le));let Ie=G.textures;if(le.length!==Ie.length||le[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ve=Ie.length;de<Ve;de++)le[de]=n.COLOR_ATTACHMENT0+de;le.length=Ie.length,we=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,we=!0);we&&n.drawBuffers(le)}function We(G){return y!==G?(n.useProgram(G),y=G,!0):!1}let st={[Ni]:n.FUNC_ADD,[_h]:n.FUNC_SUBTRACT,[xh]:n.FUNC_REVERSE_SUBTRACT};st[yh]=n.MIN,st[vh]=n.MAX;let Xe={[bh]:n.ZERO,[Sh]:n.ONE,[Mh]:n.SRC_COLOR,[Vl]:n.SRC_ALPHA,[Rh]:n.SRC_ALPHA_SATURATE,[Ah]:n.DST_COLOR,[Th]:n.DST_ALPHA,[wh]:n.ONE_MINUS_SRC_COLOR,[Gl]:n.ONE_MINUS_SRC_ALPHA,[Ch]:n.ONE_MINUS_DST_COLOR,[Eh]:n.ONE_MINUS_DST_ALPHA,[Ph]:n.CONSTANT_COLOR,[Ih]:n.ONE_MINUS_CONSTANT_COLOR,[Lh]:n.CONSTANT_ALPHA,[Dh]:n.ONE_MINUS_CONSTANT_ALPHA};function j(G,Me,le,we,Ie,de,Ve,Oe,pt,lt){if(G===Pn){p===!0&&(pe(n.BLEND),p=!1);return}if(p===!1&&(Z(n.BLEND),p=!0),G!==gh){if(G!==d||lt!==D){if((M!==Ni||T!==Ni)&&(n.blendEquation(n.FUNC_ADD),M=Ni,T=Ni),lt)switch(G){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bl:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",G);break}else switch(G){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kl:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",G);break}E=null,v=null,S=null,R=null,_.set(0,0,0),w=0,d=G,D=lt}return}Ie=Ie||Me,de=de||le,Ve=Ve||we,(Me!==M||Ie!==T)&&(n.blendEquationSeparate(st[Me],st[Ie]),M=Me,T=Ie),(le!==E||we!==v||de!==S||Ve!==R)&&(n.blendFuncSeparate(Xe[le],Xe[we],Xe[de],Xe[Ve]),E=le,v=we,S=de,R=Ve),(Oe.equals(_)===!1||pt!==w)&&(n.blendColor(Oe.r,Oe.g,Oe.b,pt),_.copy(Oe),w=pt),d=G,D=!1}function A(G,Me){G.side===Rn?pe(n.CULL_FACE):Z(n.CULL_FACE);let le=G.side===Ot;Me&&(le=!le),L(le),G.blending===xs&&G.transparent===!1?j(Pn):j(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let we=G.stencilWrite;o.setTest(we),we&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),me(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(G){N!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),N=G)}function q(G){G!==fh?(Z(n.CULL_FACE),G!==H&&(G===Ol?n.cullFace(n.BACK):G===ph?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),H=G}function ie(G){G!==Y&&(V&&n.lineWidth(G),Y=G)}function me(G,Me,le){G?(Z(n.POLYGON_OFFSET_FILL),(O!==Me||P!==le)&&(O=Me,P=le,a.getReversed()&&(Me=-Me),n.polygonOffset(Me,le))):pe(n.POLYGON_OFFSET_FILL)}function ge(G){G?Z(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Le(G){G===void 0&&(G=n.TEXTURE0+B-1),Q!==G&&(n.activeTexture(G),Q=G)}function U(G,Me,le){le===void 0&&(Q===null?le=n.TEXTURE0+B-1:le=Q);let we=oe[le];we===void 0&&(we={type:void 0,texture:void 0},oe[le]=we),(we.type!==G||we.texture!==Me)&&(Q!==le&&(n.activeTexture(le),Q=le),n.bindTexture(G,Me||F[G]),we.type=G,we.texture=Me)}function tt(){let G=oe[Q];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ye(){try{n.compressedTexImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function g(){try{n.texSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function z(){try{n.texSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function re(){try{n.compressedTexSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function xe(){try{n.texStorage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function ve(){try{n.texStorage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function ae(){try{n.texImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function ce(){try{n.texImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function be(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function ke(G,Me){f[G]!==Me&&(n.pixelStorei(G,Me),f[G]=Me)}function Te(G){se.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),se.copy(G))}function Se(G){ue.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ue.copy(G))}function ze(G,Me){let le=l.get(Me);le===void 0&&(le=new WeakMap,l.set(Me,le));let we=le.get(G);we===void 0&&(we=n.getUniformBlockIndex(Me,G.name),le.set(G,we))}function He(G,Me){let we=l.get(Me).get(G);c.get(Me)!==we&&(n.uniformBlockBinding(Me,we,G.__bindingPointIndex),c.set(Me,we))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,oe={},u={},m=new WeakMap,x=[],y=null,p=!1,d=null,M=null,E=null,v=null,T=null,S=null,R=null,_=new Qe(0,0,0),w=0,D=!1,N=null,H=null,Y=null,O=null,P=null,se.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pe,bindFramebuffer:Ce,drawBuffers:_e,useProgram:We,setBlending:j,setMaterial:A,setFlipSided:L,setCullFace:q,setLineWidth:ie,setPolygonOffset:me,setScissorTest:ge,activeTexture:Le,bindTexture:U,unbindTexture:tt,compressedTexImage2D:Ye,compressedTexImage3D:C,texImage2D:ae,texImage3D:ce,pixelStorei:ke,getParameter:be,updateUBOMapping:ze,uniformBlockBinding:He,texStorage2D:xe,texStorage3D:ve,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:$,compressedTexSubImage3D:re,scissor:Te,viewport:Se,reset:Ke}}function q3(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,h=new WeakMap,f=new Set,u,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,g){return x?new OffscreenCanvas(C,g):Ws("canvas")}function p(C,g,z){let $=1,re=Ye(C);if((re.width>z||re.height>z)&&($=z/Math.max(re.width,re.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let xe=Math.floor($*re.width),ve=Math.floor($*re.height);u===void 0&&(u=y(xe,ve));let ae=g?y(xe,ve):u;return ae.width=xe,ae.height=ve,ae.getContext("2d").drawImage(C,0,0,xe,ve),Ge("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+xe+"x"+ve+")."),ae}else return"data"in C&&Ge("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function d(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,g,z,$,re,xe=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ve;$&&(ve=e.get("EXT_texture_norm16"),ve||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=g;if(g===n.RED&&(z===n.FLOAT&&(ae=n.R32F),z===n.HALF_FLOAT&&(ae=n.R16F),z===n.UNSIGNED_BYTE&&(ae=n.R8),z===n.UNSIGNED_SHORT&&ve&&(ae=ve.R16_EXT),z===n.SHORT&&ve&&(ae=ve.R16_SNORM_EXT)),g===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ae=n.R8UI),z===n.UNSIGNED_SHORT&&(ae=n.R16UI),z===n.UNSIGNED_INT&&(ae=n.R32UI),z===n.BYTE&&(ae=n.R8I),z===n.SHORT&&(ae=n.R16I),z===n.INT&&(ae=n.R32I)),g===n.RG&&(z===n.FLOAT&&(ae=n.RG32F),z===n.HALF_FLOAT&&(ae=n.RG16F),z===n.UNSIGNED_BYTE&&(ae=n.RG8),z===n.UNSIGNED_SHORT&&ve&&(ae=ve.RG16_EXT),z===n.SHORT&&ve&&(ae=ve.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(ae=n.RG8UI),z===n.UNSIGNED_SHORT&&(ae=n.RG16UI),z===n.UNSIGNED_INT&&(ae=n.RG32UI),z===n.BYTE&&(ae=n.RG8I),z===n.SHORT&&(ae=n.RG16I),z===n.INT&&(ae=n.RG32I)),g===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),z===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),z===n.UNSIGNED_INT&&(ae=n.RGB32UI),z===n.BYTE&&(ae=n.RGB8I),z===n.SHORT&&(ae=n.RGB16I),z===n.INT&&(ae=n.RGB32I)),g===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),z===n.UNSIGNED_INT&&(ae=n.RGBA32UI),z===n.BYTE&&(ae=n.RGBA8I),z===n.SHORT&&(ae=n.RGBA16I),z===n.INT&&(ae=n.RGBA32I)),g===n.RGB&&(z===n.UNSIGNED_SHORT&&ve&&(ae=ve.RGB16_EXT),z===n.SHORT&&ve&&(ae=ve.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),g===n.RGBA){let ce=xe?Hs:it.getTransfer(re);z===n.FLOAT&&(ae=n.RGBA32F),z===n.HALF_FLOAT&&(ae=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ae=ce===ut?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ve&&(ae=ve.RGBA16_EXT),z===n.SHORT&&ve&&(ae=ve.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function T(C,g){let z;return C?g===null||g===yn||g===vs?z=n.DEPTH24_STENCIL8:g===vn?z=n.DEPTH32F_STENCIL8:g===ys&&(z=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yn||g===vs?z=n.DEPTH_COMPONENT24:g===vn?z=n.DEPTH_COMPONENT32F:g===ys&&(z=n.DEPTH_COMPONENT16),z}function S(C,g){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?g.mipmaps.length:1}function R(C){let g=C.target;g.removeEventListener("dispose",R),w(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(C){let g=C.target;g.removeEventListener("dispose",_),N(g)}function w(C){let g=i.get(C);if(g.__webglInit===void 0)return;let z=C.source,$=m.get(z);if($){let re=$[g.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(C),Object.keys($).length===0&&m.delete(z)}i.remove(C)}function D(C){let g=i.get(C);n.deleteTexture(g.__webglTexture);let z=C.source,$=m.get(z);delete $[g.__cacheKey],a.memory.textures--}function N(C){let g=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let re=0;re<g.__webglFramebuffer[$].length;re++)n.deleteFramebuffer(g.__webglFramebuffer[$][re]);else n.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)n.deleteFramebuffer(g.__webglFramebuffer[$]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let z=C.textures;for(let $=0,re=z.length;$<re;$++){let xe=i.get(z[$]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(z[$])}i.remove(C)}let H=0;function Y(){H=0}function O(){return H}function P(C){H=C}function B(){let C=H;return C>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,C}function V(C){let g=[];return g.push(C.wrapS),g.push(C.wrapT),g.push(C.wrapR||0),g.push(C.magFilter),g.push(C.minFilter),g.push(C.anisotropy),g.push(C.internalFormat),g.push(C.format),g.push(C.type),g.push(C.generateMipmaps),g.push(C.premultiplyAlpha),g.push(C.flipY),g.push(C.unpackAlignment),g.push(C.colorSpace),g.join()}function ee(C,g){let z=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let $=C.image;if($===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(z,C,g);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+g)}function X(C,g){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){pe(z,C,g);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+g)}function Q(C,g){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){pe(z,C,g);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+g)}function oe(C,g){let z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Ce(z,C,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+g)}let Pe={[ha]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[da]:n.MIRRORED_REPEAT},ye={[Lt]:n.NEAREST,[Uh]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},se={[zh]:n.NEVER,[Xh]:n.ALWAYS,[Vh]:n.LESS,[Eo]:n.LEQUAL,[Gh]:n.EQUAL,[Ao]:n.GEQUAL,[Hh]:n.GREATER,[Wh]:n.NOTEQUAL};function ue(C,g){if(g.type===vn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===Va||g.magFilter===dr||g.magFilter===vi||g.minFilter===Nt||g.minFilter===Va||g.minFilter===dr||g.minFilter===vi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Pe[g.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Pe[g.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Pe[g.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ye[g.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ye[g.minFilter]),g.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Lt||g.minFilter!==dr&&g.minFilter!==vi||g.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function he(C,g){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,g.addEventListener("dispose",R));let $=g.source,re=m.get($);re===void 0&&(re={},m.set($,re));let xe=V(g);if(xe!==C.__cacheKey){re[xe]===void 0&&(re[xe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),re[xe].usedTimes++;let ve=re[C.__cacheKey];ve!==void 0&&(re[C.__cacheKey].usedTimes--,ve.usedTimes===0&&D(g)),C.__cacheKey=xe,C.__webglTexture=re[xe].texture}return z}function F(C,g,z){return Math.floor(Math.floor(C/z)/g)}function Z(C,g,z,$){let xe=C.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,z,$,g.data);else{xe.sort((ke,Te)=>ke.start-Te.start);let ve=0;for(let ke=1;ke<xe.length;ke++){let Te=xe[ve],Se=xe[ke],ze=Te.start+Te.count,He=F(Se.start,g.width,4),Ke=F(Te.start,g.width,4);Se.start<=ze+1&&He===Ke&&F(Se.start+Se.count-1,g.width,4)===He?Te.count=Math.max(Te.count,Se.start+Se.count-Te.start):(++ve,xe[ve]=Se)}xe.length=ve+1;let ae=t.getParameter(n.UNPACK_ROW_LENGTH),ce=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ke=0,Te=xe.length;ke<Te;ke++){let Se=xe[ke],ze=Math.floor(Se.start/4),He=Math.ceil(Se.count/4),Ke=ze%g.width,G=Math.floor(ze/g.width),Me=He,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Ke,G,Me,le,z,$,g.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ae),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function pe(C,g,z){let $=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=n.TEXTURE_3D);let re=he(C,g),xe=g.source;t.bindTexture($,C.__webglTexture,n.TEXTURE0+z);let ve=i.get(xe);if(xe.version!==ve.__version||re===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let le=it.getPrimaries(it.workingColorSpace),we=g.colorSpace===Xn?null:it.getPrimaries(g.colorSpace),Ie=g.colorSpace===Xn||le===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let ce=p(g.image,!1,s.maxTextureSize);ce=tt(g,ce);let be=r.convert(g.format,g.colorSpace),ke=r.convert(g.type),Te=v(g.internalFormat,be,ke,g.normalized,g.colorSpace,g.isVideoTexture);ue($,g);let Se,ze=g.mipmaps,He=g.isVideoTexture!==!0,Ke=ve.__version===void 0||re===!0,G=xe.dataReady,Me=S(g,ce);if(g.isDepthTexture)Te=T(g.format===bi,g.type),Ke&&(He?t.texStorage2D(n.TEXTURE_2D,1,Te,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Te,ce.width,ce.height,0,be,ke,null));else if(g.isDataTexture)if(ze.length>0){He&&Ke&&t.texStorage2D(n.TEXTURE_2D,Me,Te,ze[0].width,ze[0].height);for(let le=0,we=ze.length;le<we;le++)Se=ze[le],He?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,be,ke,Se.data):t.texImage2D(n.TEXTURE_2D,le,Te,Se.width,Se.height,0,be,ke,Se.data);g.generateMipmaps=!1}else He?(Ke&&t.texStorage2D(n.TEXTURE_2D,Me,Te,ce.width,ce.height),G&&Z(g,ce,be,ke)):t.texImage2D(n.TEXTURE_2D,0,Te,ce.width,ce.height,0,be,ke,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){He&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Te,ze[0].width,ze[0].height,ce.depth);for(let le=0,we=ze.length;le<we;le++)if(Se=ze[le],g.format!==ln)if(be!==null)if(He){if(G)if(g.layerUpdates.size>0){let Ie=hc(Se.width,Se.height,g.format,g.type);for(let de of g.layerUpdates){let Ve=Se.data.subarray(de*Ie/Se.data.BYTES_PER_ELEMENT,(de+1)*Ie/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,de,Se.width,Se.height,1,be,Ve)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,ce.depth,be,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Te,Se.width,Se.height,ce.depth,0,Se.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,ce.depth,be,ke,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Te,Se.width,Se.height,ce.depth,0,be,ke,Se.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{He&&Ke&&t.texStorage2D(n.TEXTURE_2D,Me,Te,ze[0].width,ze[0].height);for(let le=0,we=ze.length;le<we;le++)Se=ze[le],g.format!==ln?be!==null?He?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Te,Se.width,Se.height,0,Se.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,be,ke,Se.data):t.texImage2D(n.TEXTURE_2D,le,Te,Se.width,Se.height,0,be,ke,Se.data)}else if(g.isDataArrayTexture)if(He){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Te,ce.width,ce.height,ce.depth),G)if(g.layerUpdates.size>0){let le=hc(ce.width,ce.height,g.format,g.type);for(let we of g.layerUpdates){let Ie=ce.data.subarray(we*le/ce.data.BYTES_PER_ELEMENT,(we+1)*le/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,we,ce.width,ce.height,1,be,ke,Ie)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,be,ke,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ce.width,ce.height,ce.depth,0,be,ke,ce.data);else if(g.isData3DTexture)He?(Ke&&t.texStorage3D(n.TEXTURE_3D,Me,Te,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,be,ke,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ce.width,ce.height,ce.depth,0,be,ke,ce.data);else if(g.isFramebufferTexture){if(Ke)if(He)t.texStorage2D(n.TEXTURE_2D,Me,Te,ce.width,ce.height);else{let le=ce.width,we=ce.height;for(let Ie=0;Ie<Me;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Te,le,we,0,be,ke,null),le>>=1,we>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ce.parentNode!==le){le.appendChild(ce),f.add(g),le.onpaint=we=>{let Ie=we.changedElements;for(let de of f)Ie.includes(de.image)&&(de.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ce);else{let Ie=n.RGBA,de=n.RGBA,Ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ie,de,Ve,ce)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(He&&Ke){let le=Ye(ze[0]);t.texStorage2D(n.TEXTURE_2D,Me,Te,le.width,le.height)}for(let le=0,we=ze.length;le<we;le++)Se=ze[le],He?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,be,ke,Se):t.texImage2D(n.TEXTURE_2D,le,Te,be,ke,Se);g.generateMipmaps=!1}else if(He){if(Ke){let le=Ye(ce);t.texStorage2D(n.TEXTURE_2D,Me,Te,le.width,le.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,ke,ce)}else t.texImage2D(n.TEXTURE_2D,0,Te,be,ke,ce);d(g)&&M($),ve.__version=xe.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function Ce(C,g,z){if(g.image.length!==6)return;let $=he(C,g),re=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let xe=i.get(re);if(re.version!==xe.__version||$===!0){t.activeTexture(n.TEXTURE0+z);let ve=it.getPrimaries(it.workingColorSpace),ae=g.colorSpace===Xn?null:it.getPrimaries(g.colorSpace),ce=g.colorSpace===Xn||ve===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let be=g.isCompressedTexture||g.image[0].isCompressedTexture,ke=g.image[0]&&g.image[0].isDataTexture,Te=[];for(let de=0;de<6;de++)!be&&!ke?Te[de]=p(g.image[de],!0,s.maxCubemapSize):Te[de]=ke?g.image[de].image:g.image[de],Te[de]=tt(g,Te[de]);let Se=Te[0],ze=r.convert(g.format,g.colorSpace),He=r.convert(g.type),Ke=v(g.internalFormat,ze,He,g.normalized,g.colorSpace),G=g.isVideoTexture!==!0,Me=xe.__version===void 0||$===!0,le=re.dataReady,we=S(g,Se);ue(n.TEXTURE_CUBE_MAP,g);let Ie;if(be){G&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Ke,Se.width,Se.height);for(let de=0;de<6;de++){Ie=Te[de].mipmaps;for(let Ve=0;Ve<Ie.length;Ve++){let Oe=Ie[Ve];g.format!==ln?ze!==null?G?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,Oe.width,Oe.height,ze,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,Ke,Oe.width,Oe.height,0,Oe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,Oe.width,Oe.height,ze,He,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,Ke,Oe.width,Oe.height,0,ze,He,Oe.data)}}}else{if(Ie=g.mipmaps,G&&Me){Ie.length>0&&we++;let de=Ye(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Ke,de.width,de.height)}for(let de=0;de<6;de++)if(ke){G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Te[de].width,Te[de].height,ze,He,Te[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ke,Te[de].width,Te[de].height,0,ze,He,Te[de].data);for(let Ve=0;Ve<Ie.length;Ve++){let pt=Ie[Ve].image[de].image;G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,pt.width,pt.height,ze,He,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,Ke,pt.width,pt.height,0,ze,He,pt.data)}}else{G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ze,He,Te[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ke,ze,He,Te[de]);for(let Ve=0;Ve<Ie.length;Ve++){let Oe=Ie[Ve];G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,ze,He,Oe.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,Ke,ze,He,Oe.image[de])}}}d(g)&&M(n.TEXTURE_CUBE_MAP),xe.__version=re.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function _e(C,g,z,$,re,xe){let ve=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),ce=v(z.internalFormat,ve,ae,z.normalized,z.colorSpace),be=i.get(g),ke=i.get(z);if(ke.__renderTarget=g,!be.__hasExternalTextures){let Te=Math.max(1,g.width>>xe),Se=Math.max(1,g.height>>xe);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,xe,ce,Te,Se,g.depth,0,ve,ae,null):t.texImage2D(re,xe,ce,Te,Se,0,ve,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Le(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,re,ke.__webglTexture,0,ge(g)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,re,ke.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(C,g,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),g.depthBuffer){let $=g.depthTexture,re=$&&$.isDepthTexture?$.type:null,xe=T(g.stencilBuffer,re),ve=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Le(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(g),xe,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(g),xe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,xe,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,C)}else{let $=g.textures;for(let re=0;re<$.length;re++){let xe=$[re],ve=r.convert(xe.format,xe.colorSpace),ae=r.convert(xe.type),ce=v(xe.internalFormat,ve,ae,xe.normalized,xe.colorSpace);Le(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(g),ce,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(g),ce,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ce,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(C,g,z){let $=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=i.get(g.depthTexture);if(re.__renderTarget=g,(!re.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(re.__webglInit===void 0&&(re.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),re.__webglTexture===void 0){re.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ue(n.TEXTURE_CUBE_MAP,g.depthTexture);let be=r.convert(g.depthTexture.format),ke=r.convert(g.depthTexture.type),Te;g.depthTexture.format===An?Te=n.DEPTH_COMPONENT24:g.depthTexture.format===bi&&(Te=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,g.width,g.height,0,be,ke,null)}}else ee(g.depthTexture,0);let xe=re.__webglTexture,ve=ge(g),ae=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ce=g.depthTexture.format===bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===An)Le(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ae,xe,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,ce,ae,xe,0);else if(g.depthTexture.format===bi)Le(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ae,xe,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,ce,ae,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(C){let g=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){let re=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",re)};$.addEventListener("dispose",re),g.__depthDisposeCallback=re}g.__boundDepthTexture=$}if(C.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let $=0;$<6;$++)st(g.__webglFramebuffer[$],C,$);else{let $=C.texture.mipmaps;$&&$.length>0?st(g.__webglFramebuffer[0],C,0):st(g.__webglFramebuffer,C,0)}else if(z){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=n.createRenderbuffer(),We(g.__webglDepthbuffer[$],C,!1);else{let re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=g.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,xe)}}else{let $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),We(g.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,xe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(C,g,z){let $=i.get(C);g!==void 0&&_e($.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Xe(C)}function A(C){let g=C.texture,z=i.get(C),$=i.get(g);C.addEventListener("dispose",_);let re=C.textures,xe=C.isWebGLCubeRenderTarget===!0,ve=re.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=g.version,a.memory.textures++),xe){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let ce=0;ce<g.mipmaps.length;ce++)z.__webglFramebuffer[ae][ce]=n.createFramebuffer()}else z.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)z.__webglFramebuffer[ae]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ae=0,ce=re.length;ae<ce;ae++){let be=i.get(re[ae]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Le(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<re.length;ae++){let ce=re[ae];z.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);let be=r.convert(ce.format,ce.colorSpace),ke=r.convert(ce.type),Te=v(ce.internalFormat,be,ke,ce.normalized,ce.colorSpace,C.isXRRenderTarget===!0),Se=ge(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,Te,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),We(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ue(n.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)_e(z.__webglFramebuffer[ae][ce],C,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else _e(z.__webglFramebuffer[ae],C,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);d(g)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,ce=re.length;ae<ce;ae++){let be=re[ae],ke=i.get(be),Te=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Te=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,ke.__webglTexture),ue(Te,be),_e(z.__webglFramebuffer,C,be,n.COLOR_ATTACHMENT0+ae,Te,0),d(be)&&M(Te)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),ue(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)_e(z.__webglFramebuffer[ce],C,g,n.COLOR_ATTACHMENT0,ae,ce);else _e(z.__webglFramebuffer,C,g,n.COLOR_ATTACHMENT0,ae,0);d(g)&&M(ae),t.unbindTexture()}C.depthBuffer&&Xe(C)}function L(C){let g=C.textures;for(let z=0,$=g.length;z<$;z++){let re=g[z];if(d(re)){let xe=E(C),ve=i.get(re).__webglTexture;t.bindTexture(xe,ve),M(xe),t.unbindTexture()}}}let q=[],ie=[];function me(C){if(C.samples>0){if(Le(C)===!1){let g=C.textures,z=C.width,$=C.height,re=n.COLOR_BUFFER_BIT,xe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(C),ae=g.length>1;if(ae)for(let be=0;be<g.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let ce=C.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let be=0;be<g.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);let ke=i.get(g[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,re,n.NEAREST),c===!0&&(q.length=0,ie.length=0,q.push(n.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(q.push(xe),ie.push(xe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let be=0;be<g.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);let ke=i.get(g[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let g=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ge(C){return Math.min(s.maxSamples,C.samples)}function Le(C){let g=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(C){let g=a.render.frame;h.get(C)!==g&&(h.set(C,g),C.update())}function tt(C,g){let z=C.colorSpace,$=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Gs&&z!==Xn&&(it.getTransfer(z)===ut?($!==ln||re!==Kt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",z)),g}function Ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.getTextureUnits=O,this.setTextureUnits=P,this.setTexture2D=ee,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=oe,this.rebindTextures=j,this.setupRenderTarget=A,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Y3(n,e){function t(i,s=Xn){let r,a=it.getTransfer(s);if(i===Kt)return n.UNSIGNED_BYTE;if(i===Ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ql)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ec)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jl)return n.BYTE;if(i===jl)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===Ga)return n.INT;if(i===yn)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===bn)return n.HALF_FLOAT;if(i===tc)return n.ALPHA;if(i===nc)return n.RGB;if(i===ln)return n.RGBA;if(i===An)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===ic)return n.RED;if(i===Xa)return n.RED_INTEGER;if(i===Si)return n.RG;if(i===$a)return n.RG_INTEGER;if(i===qa)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===Za||i===Ka||i===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===Qa||i===eo||i===to||i===no||i===_r||i===io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ja||i===Qa)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===to)return r.COMPRESSED_R11_EAC;if(i===no)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_r)return r.COMPRESSED_RG11_EAC;if(i===io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===so)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ro)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ao)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===co)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ho)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_o)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===vo||i===bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yo)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===So||i===Mo||i===xr||i===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===So)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K3=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:Z3,fragmentShader:K3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends mn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,m=null,x=null,y=typeof XRWebGLBinding<"u",p=new Pc,d={},M=t.getContextAttributes(),E=null,v=null,T=[],S=[],R=new qe,_=null,w=null,D=new Gt;D.viewport=new yt;let N=new Gt;N.viewport=new yt;let H=[D,N],Y=new Ua,O=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Z=T[F];return Z===void 0&&(Z=new hs,T[F]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(F){let Z=T[F];return Z===void 0&&(Z=new hs,T[F]=Z),Z.getGripSpace()},this.getHand=function(F){let Z=T[F];return Z===void 0&&(Z=new hs,T[F]=Z),Z.getHandSpace()};function B(F){let Z=S.indexOf(F.inputSource);if(Z===-1)return;let pe=T[Z];pe!==void 0&&(pe.update(F.inputSource,F.frame,l||a),pe.dispatchEvent({type:F.type,data:F.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ee);for(let F=0;F<T.length;F++){let Z=S[F];Z!==null&&(S[F]=null,T[F].disconnect(Z))}O=null,P=null,p.reset();for(let F in d)delete d[F];if(e.setRenderTarget(E),m=null,u=null,f=null,s=null,v=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),w!==null){let F=w.camera;F.fov=w.fov,F.zoom=w.zoom,F.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ce=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=M.stencil?bi:An,Ce=M.stencil?vs:yn);let We={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Zt(u.textureWidth,u.textureHeight,{format:ln,type:Kt,depthTexture:new di(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Zt(m.framebufferWidth,m.framebufferHeight,{format:ln,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(F){for(let Z=0;Z<F.removed.length;Z++){let pe=F.removed[Z],Ce=S.indexOf(pe);Ce>=0&&(S[Ce]=null,T[Ce].disconnect(pe))}for(let Z=0;Z<F.added.length;Z++){let pe=F.added[Z],Ce=S.indexOf(pe);if(Ce===-1){for(let We=0;We<T.length;We++)if(We>=S.length){S.push(pe),Ce=We;break}else if(S[We]===null){S[We]=pe,Ce=We;break}if(Ce===-1)break}let _e=T[Ce];_e&&_e.connect(pe)}}let X=new W,Q=new W;function oe(F,Z,pe){X.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);let Ce=X.distanceTo(Q),_e=Z.projectionMatrix.elements,We=pe.projectionMatrix.elements,st=_e[14]/(_e[10]-1),Xe=_e[14]/(_e[10]+1),j=(_e[9]+1)/_e[5],A=(_e[9]-1)/_e[5],L=(_e[8]-1)/_e[0],q=(We[8]+1)/We[0],ie=st*L,me=st*q,ge=Ce/(-L+q),Le=ge*-L;if(Z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Le),F.translateZ(ge),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),_e[10]===-1)F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let U=st+ge,tt=Xe+ge,Ye=ie-Le,C=me+(Ce-Le),g=j*Xe/tt*U,z=A*Xe/tt*U;F.projectionMatrix.makePerspective(Ye,C,g,z,U,tt),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Pe(F,Z){Z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let Z=F.near,pe=F.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),Y.near=N.near=D.near=Z,Y.far=N.far=D.far=pe,(O!==Y.near||P!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),O=Y.near,P=Y.far),Y.layers.mask=F.layers.mask|6,D.layers.mask=Y.layers.mask&-5,N.layers.mask=Y.layers.mask&-3;let Ce=F.parent,_e=Y.cameras;Pe(Y,Ce);for(let We=0;We<_e.length;We++)Pe(_e[We],Ce);_e.length===2?oe(Y,D,N):Y.projectionMatrix.copy(D.projectionMatrix),w===null&&F.isPerspectiveCamera&&(w={camera:F,fov:F.fov,zoom:F.zoom}),ye(F,Y,Ce)};function ye(F,Z,pe){pe===null?F.matrix.copy(Z.matrixWorld):(F.matrix.copy(pe.matrixWorld),F.matrix.invert(),F.matrix.multiply(Z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ls*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(F){c=F,u!==null&&(u.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Y)},this.getCameraTexture=function(F){return d[F]};let se=null;function ue(F,Z){if(h=Z.getViewerPose(l||a),x=Z,h!==null){let pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ce=!1;pe.length!==Y.cameras.length&&(Y.cameras.length=0,Ce=!0);for(let Xe=0;Xe<pe.length;Xe++){let j=pe[Xe],A=null;if(m!==null)A=m.getViewport(j);else{let q=f.getViewSubImage(u,j);A=q.viewport,Xe===0&&(e.setRenderTargetTextures(v,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(v))}let L=H[Xe];L===void 0&&(L=new Gt,L.layers.enable(Xe),L.viewport=new yt,H[Xe]=L),L.matrix.fromArray(j.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(j.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(A.x,A.y,A.width,A.height),Xe===0&&(Y.matrix.copy(L.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ce===!0&&Y.cameras.push(L)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let Xe=f.getDepthInformation(pe[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,s.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Xe=0;Xe<pe.length;Xe++){let j=pe[Xe].camera;if(j){let A=d[j];A||(A=new Qs,d[j]=A);let L=f.getCameraImage(j);A.sourceTexture=L}}}}for(let pe=0;pe<T.length;pe++){let Ce=S[pe],_e=T[pe];Ce!==null&&_e!==void 0&&_e.update(Ce,Z,l||a)}se&&se(F,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}let he=new Sd;he.setAnimationLoop(ue),this.setAnimationLoop=function(F){se=F},this.dispose=function(){}}},J3=new gt,Cd=new Ze;Cd.set(-1,0,0,0,1,0,0,0,1);function j3(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,lc(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,E,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),y(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,M,E):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ot&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ot&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d),E=M.envMap,v=M.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(J3.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Cd),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,M,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=E*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Q3(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){let S=T.program;i.uniformBlockBinding(v,S)}function l(v,T){let S=s[v.id];S===void 0&&(p(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",M));let R=T.program;i.updateUBOMapping(v,R);let _=e.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let T=f();v.__bindingPointIndex=T;let S=n.createBuffer(),R=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],S=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let _=0,w=S.length;_<w;_++){let D=S[_];if(Array.isArray(D))for(let N=0,H=D.length;N<H;N++)m(D[N],_,N,R);else m(D,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,T,S,R){if(y(v,T,S,R)===!0){let _=v.__offset,w=v.value;if(Array.isArray(w)){let D=0;for(let N=0;N<w.length;N++){let H=w[N],Y=d(H);x(H,v.__data,D),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function x(v,T,S){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,S)}function y(v,T,S,R){let _=v.value,w=T+"_"+S;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{let D=R[w];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function p(v){let T=v.uniforms,S=0,R=16;for(let w=0,D=T.length;w<D;w++){let N=Array.isArray(T[w])?T[w]:[T[w]];for(let H=0,Y=N.length;H<Y;H++){let O=N[H],P=Array.isArray(O.value)?O.value:[O.value];for(let B=0,V=P.length;B<V;B++){let ee=P[B],X=d(ee),Q=S%R,oe=Q%X.boundary,Pe=Q+oe;S+=oe,Pe!==0&&R-Pe<X.storage&&(S+=R-Pe),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=X.storage}}}let _=S%R;return _>0&&(S+=R-_),v.__size=S,v.__cache={},this}function d(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",v),T}function M(v){let T=v.target;T.removeEventListener("dispose",M);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function E(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}var e7=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),In=null;function t7(){return In===null&&(In=new _a(e7,16,16,Si,bn),In.name="DFG_LUT",In.minFilter=Nt,In.magFilter=Nt,In.wrapS=En,In.wrapT=En,In.generateMipmaps=!1,In.needsUpdate=!0),In}var Lo=class{constructor(e={}){let{canvas:t=qh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Kt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let y=m,p=new Set([qa,$a,Xa]),d=new Set([Kt,yn,ys,vs,Ha,Wa]),M=new Uint32Array(4),E=new Int32Array(4),v=new W,T=null,S=null,R=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,N=!1,H=null,Y=null,O=null,P=null;this._outputColorSpace=$t;let B=0,V=0,ee=null,X=-1,Q=null,oe=new yt,Pe=new yt,ye=null,se=new Qe(0),ue=0,he=t.width,F=t.height,Z=1,pe=null,Ce=null,_e=new yt(0,0,he,F),We=new yt(0,0,he,F),st=!1,Xe=new ds,j=!1,A=!1,L=new gt,q=new W,ie=new yt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function Le(){return ee===null?Z:1}let U=i;function tt(b,k){return t.getContext(b,k)}let Ye,C,g,z,$,re,xe,ve,ae,ce,be,ke,Te,Se,ze,He,Ke,G,Me,le,we,Ie,de;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",cn,!1),U===null){let k="webgl2";if(U=tt(k,b),U===null)throw tt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(b){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),$e("WebGLRenderer: "+b.message),b}function Ve(){Ye=new l2(U),Ye.init(),we=new Y3(U,Ye),C=new jm(U,Ye,e,we),g=new $3(U,Ye),C.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),Y=U.createFramebuffer(),O=U.createFramebuffer(),P=U.createFramebuffer(),z=new h2(U),$=new L3,re=new q3(U,Ye,g,$,C,we,z),xe=new o2(D),ve=new fp(U),Ie=new Km(U,ve),ae=new c2(U,ve,z,Ie),ce=new f2(U,ae,ve,Ie,z),G=new d2(U,C,re),ze=new Qm($),be=new I3(D,xe,Ye,C,Ie,ze),ke=new j3(D,$),Te=new N3,Se=new z3(Ye),Ke=new Zm(D,xe,g,ce,x,c),He=new X3(D,ce,C),de=new Q3(U,z,C,g),Me=new Jm(U,Ye,z),le=new u2(U,Ye,z),z.programs=be.programs,D.capabilities=C,D.extensions=Ye,D.properties=$,D.renderLists=Te,D.shadowMap=He,D.state=g,D.info=z}y!==Kt&&(w=new m2(y,t.width,t.height,o,s,r));let Oe=new Ic(D,U);this.xr=Oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(he,F,!1))},this.getSize=function(b){return b.set(he,F)},this.setSize=function(b,k,te=!0){if(Oe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}he=b,F=k,t.width=Math.floor(b*Z),t.height=Math.floor(k*Z),te===!0&&(t.style.width=b+"px",t.style.height=k+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(he*Z,F*Z).floor()},this.setDrawingBufferSize=function(b,k,te){he=b,F=k,Z=te,t.width=Math.floor(b*te),t.height=Math.floor(k*te),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(y===Kt){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(oe)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,k,te,K){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,k,te,K),g.viewport(oe.copy(_e).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(We)},this.setScissor=function(b,k,te,K){b.isVector4?We.set(b.x,b.y,b.z,b.w):We.set(b,k,te,K),g.scissor(Pe.copy(We).multiplyScalar(Z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){g.setScissorTest(st=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){Ce=b},this.getClearColor=function(b){return b.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,te=!0){let K=0;if(b){let J=!1;if(ee!==null){let Re=ee.texture.format;J=p.has(Re)}if(J){let Re=ee.texture.type,Ne=d.has(Re),Ae=Ke.getClearColor(),Fe=Ke.getClearAlpha(),Be=Ae.r,Je=Ae.g,nt=Ae.b;Ne?(M[0]=Be,M[1]=Je,M[2]=nt,M[3]=Fe,U.clearBufferuiv(U.COLOR,0,M)):(E[0]=Be,E[1]=Je,E[2]=nt,E[3]=Fe,U.clearBufferiv(U.COLOR,0,E))}else K|=U.COLOR_BUFFER_BIT}k&&(K|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Ke.dispose(),Te.dispose(),Se.dispose(),$.dispose(),xe.dispose(),ce.dispose(),Ie.dispose(),de.dispose(),be.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Au),Oe.removeEventListener("sessionend",Cu),Ci.stop()};function pt(b){b.preventDefault(),rc("WebGLRenderer: Context Lost."),N=!0}function lt(){rc("WebGLRenderer: Context Restored."),N=!1;let b=z.autoReset,k=He.enabled,te=He.autoUpdate,K=He.needsUpdate,J=He.type;Ve(),z.autoReset=b,He.enabled=k,He.autoUpdate=te,He.needsUpdate=K,He.type=J}function cn(b){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Mn(b){let k=b.target;k.removeEventListener("dispose",Mn),c1(k)}function c1(b){u1(b),$.remove(b)}function u1(b){let k=$.get(b).programs;k!==void 0&&(k.forEach(function(te){be.releaseProgram(te)}),b.isShaderMaterial&&be.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,te,K,J,Re){k===null&&(k=me);let Ne=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ae=f1(b,k,te,K,J);g.setMaterial(K,Ne);let Fe=te.index,Be=1;if(K.wireframe===!0){if(Fe=ae.getWireframeAttribute(te),Fe===void 0)return;Be=2}let Je=te.drawRange,nt=te.attributes.position,Ue=Je.start*Be,ct=(Je.start+Je.count)*Be;Re!==null&&(Ue=Math.max(Ue,Re.start*Be),ct=Math.min(ct,(Re.start+Re.count)*Be)),Fe!==null?(Ue=Math.max(Ue,0),ct=Math.min(ct,Fe.count)):nt!=null&&(Ue=Math.max(Ue,0),ct=Math.min(ct,nt.count));let Mt=ct-Ue;if(Mt<0||Mt===1/0)return;Ie.setup(J,K,Ae,te,Fe);let _t,ft=Me;if(Fe!==null&&(_t=ve.get(Fe),ft=le,ft.setIndex(_t)),J.isMesh)K.wireframe===!0?(g.setLineWidth(K.wireframeLinewidth*Le()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(J.isLine){let kt=K.linewidth;kt===void 0&&(kt=1),g.setLineWidth(kt*Le()),J.isLineSegments?ft.setMode(U.LINES):J.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else J.isPoints?ft.setMode(U.POINTS):J.isSprite&&ft.setMode(U.TRIANGLES);if(J.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ft.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let kt=J._multiDrawStarts,De=J._multiDrawCounts,Wt=J._multiDrawCount,rt=Fe?ve.get(Fe).bytesPerElement:1,an=$.get(K).currentProgram.getUniforms();for(let wn=0;wn<Wt;wn++)an.setValue(U,"_gl_DrawID",wn),ft.render(kt[wn]/rt,De[wn])}else if(J.isInstancedMesh)ft.renderInstances(Ue,Mt,J.count);else if(te.isInstancedBufferGeometry){let kt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,De=Math.min(te.instanceCount,kt);ft.renderInstances(Ue,Mt,De)}else ft.render(Ue,Mt)};function Eu(b,k,te,K){H!==null&&b.isNodeMaterial&&H.setObject(K,b),j===!0&&ze.setState(b,te,!1),b.transparent===!0&&b.side===Rn&&b.forceSinglePass===!1?(b.side=Ot,b.needsUpdate=!0,Ir(b,k,K),b.side=xi,b.needsUpdate=!0,Ir(b,k,K),b.side=Rn):Ir(b,k,K)}this.compile=function(b,k,te=null){te===null&&(te=b),H!==null&&H.renderStart(b,k,te),S=Se.get(te),S.init(k),_.push(S),te.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),b!==te&&b.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),H!==null&&H.updateLights(S.state.lightsArray),A=this.localClippingEnabled,j=ze.init(this.clippingPlanes,A),j===!0&&ze.setGlobalState(this.clippingPlanes,k),H!==null&&He.render(S.state.shadowsArray,te,k);let K=new Set;return b.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Re=J.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){let Ae=Re[Ne];Eu(Ae,te,k,J),K.add(Ae)}else Eu(Re,te,k,J),K.add(Re)}),S=_.pop(),H!==null&&H.renderEnd(),K},this.compileAsync=function(b,k,te=null){let K=this.compile(b,k,te);return new Promise(J=>{function Re(){if(K.forEach(function(Ne){let Fe=$.get(Ne).currentProgram;(Fe===void 0||Fe.isReady())&&K.delete(Ne)}),K.size===0){J(b);return}setTimeout(Re,10)}Ye.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let sl=null;function h1(b){sl&&sl(b)}function Au(){Ci.stop()}function Cu(){Ci.start()}let Ci=new Sd;Ci.setAnimationLoop(h1),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){sl=b,Oe.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},Oe.addEventListener("sessionstart",Au),Oe.addEventListener("sessionend",Cu),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;H!==null&&H.renderStart(b,k);let te=Oe.enabled===!0&&Oe.isPresenting===!0,K=w!==null&&(ee===null||te)&&w.begin(D,ee);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(k),k=Oe.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,k,ee),S=Se.get(b,_.length),S.init(k),S.state.textureUnits=re.getTextureUnits(),_.push(S),L.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xe.setFromProjectionMatrix(L,pn,k.reversedDepth),A=this.localClippingEnabled,j=ze.init(this.clippingPlanes,A),T=Te.get(b,R.length),T.init(),R.push(T),Oe.enabled===!0&&Oe.isPresenting===!0){let Ne=D.xr.getDepthSensingMesh();Ne!==null&&rl(Ne,k,-1/0,D.sortObjects)}rl(b,k,0,D.sortObjects),T.finish(),H!==null&&H.updateLights(S.state.lightsArray),D.sortObjects===!0&&T.sort(pe,Ce),ge=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ge&&Ke.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&ze.beginShadows();let J=S.state.shadowsArray;if(He.render(J,b,k),j===!0&&ze.endShadows(),(K&&w.hasRenderPass())===!1){let Ne=T.opaque,Ae=T.transmissive;if(S.setupLights(),k.isArrayCamera){let Fe=k.cameras;if(Ae.length>0)for(let Be=0,Je=Fe.length;Be<Je;Be++){let nt=Fe[Be];Pu(Ne,Ae,b,nt)}ge&&Ke.render(b);for(let Be=0,Je=Fe.length;Be<Je;Be++){let nt=Fe[Be];Ru(T,b,nt,nt.viewport)}}else Ae.length>0&&Pu(Ne,Ae,b,k),ge&&Ke.render(b),Ru(T,b,k)}ee!==null&&V===0&&(re.updateMultisampleRenderTarget(ee),re.updateRenderTargetMipmap(ee)),K&&w.end(D),b.isScene===!0&&b.onAfterRender(D,b,k),Ie.resetDefaultState(),X=-1,Q=null,_.pop(),_.length>0?(S=_[_.length-1],re.setTextureUnits(S.state.textureUnits),j===!0&&ze.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,H!==null&&H.renderEnd()};function rl(b,k,te,K){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Xe)){K&&ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(L);let Ne=ce.update(b),Ae=b.material;Ae.visible&&T.push(b,Ne,Ae,te,ie.z,null,k)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Xe))){let Ne=ce.update(b),Ae=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ie.copy(b.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ie.copy(Ne.boundingSphere.center)),ie.applyMatrix4(b.matrixWorld).applyMatrix4(L)),Array.isArray(Ae)){let Fe=Ne.groups;for(let Be=0,Je=Fe.length;Be<Je;Be++){let nt=Fe[Be],Ue=Ae[nt.materialIndex];Ue&&Ue.visible&&T.push(b,Ne,Ue,te,ie.z,nt,k)}}else Ae.visible&&T.push(b,Ne,Ae,te,ie.z,null,k)}}let Re=b.children;for(let Ne=0,Ae=Re.length;Ne<Ae;Ne++)rl(Re[Ne],k,te,K)}function Ru(b,k,te,K){let{opaque:J,transmissive:Re,transparent:Ne}=b;S.setupLightsView(te),j===!0&&ze.setGlobalState(D.clippingPlanes,te),K&&g.viewport(oe.copy(K)),J.length>0&&Pr(J,k,te),Re.length>0&&Pr(Re,k,te),Ne.length>0&&Pr(Ne,k,te),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Pu(b,k,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let Ue=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Zt(1,1,{generateMipmaps:!0,type:Ue?bn:Kt,minFilter:vi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Re=S.state.transmissionRenderTarget[K.id],Ne=K.viewport||oe;Re.setSize(Ne.z*D.transmissionResolutionScale,Ne.w*D.transmissionResolutionScale);let Ae=D.getRenderTarget(),Fe=D.getActiveCubeFace(),Be=D.getActiveMipmapLevel();D.setRenderTarget(Re),D.getClearColor(se),ue=D.getClearAlpha(),ue<1&&D.setClearColor(16777215,.5),D.clear(),ge&&Ke.render(te);let Je=D.toneMapping;D.toneMapping=xn;let nt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),j===!0&&ze.setGlobalState(D.clippingPlanes,K),Pr(b,te,K),re.updateMultisampleRenderTarget(Re),re.updateRenderTargetMipmap(Re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ct=0,Mt=k.length;ct<Mt;ct++){let _t=k[ct],{object:ft,geometry:kt,material:De,group:Wt}=_t;if(De.side===Rn&&ft.layers.test(K.layers)){let rt=De.side;De.side=Ot,De.needsUpdate=!0,Iu(ft,te,K,kt,De,Wt),De.side=rt,De.needsUpdate=!0,Ue=!0}}Ue===!0&&(re.updateMultisampleRenderTarget(Re),re.updateRenderTargetMipmap(Re))}D.setRenderTarget(Ae,Fe,Be),D.setClearColor(se,ue),nt!==void 0&&(K.viewport=nt),D.toneMapping=Je}function Pr(b,k,te){let K=k.isScene===!0?k.overrideMaterial:null;for(let J=0,Re=b.length;J<Re;J++){let Ne=b[J],{object:Ae,geometry:Fe,group:Be}=Ne,Je=Ne.material;Je.allowOverride===!0&&K!==null&&(Je=K),Ae.layers.test(te.layers)&&Iu(Ae,k,te,Fe,Je,Be)}}function Iu(b,k,te,K,J,Re){H!==null&&J.isNodeMaterial&&H.setObject(b,J),b.onBeforeRender(D,k,te,K,J,Re),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(D,k,te,K,b,Re),J.transparent===!0&&J.side===Rn&&J.forceSinglePass===!1?(J.side=Ot,J.needsUpdate=!0,D.renderBufferDirect(te,k,K,J,b,Re),J.side=xi,J.needsUpdate=!0,D.renderBufferDirect(te,k,K,J,b,Re),J.side=Rn):D.renderBufferDirect(te,k,K,J,b,Re),b.onAfterRender(D,k,te,K,J,Re)}function Ir(b,k,te){k.isScene!==!0&&(k=me);let K=$.get(b),J=S.state.lights,Re=S.state.shadowsArray,Ne=J.state.version,Ae=be.getParameters(b,J.state,Re,k,te,S.state.lightProbeGridArray),Fe=be.getProgramCacheKey(Ae),Be=K.programs;K.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let Je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;K.envMap=xe.get(b.envMap||K.environment,Je),K.envMapRotation=K.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",Mn),Be=new Map,K.programs=Be);let nt=Be.get(Fe);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===Ne)return Du(b,Ae),nt}else Ae.uniforms=be.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,te,Ae),b.onBeforeCompile(Ae,D),nt=be.acquireProgram(Ae,Fe),Be.set(Fe,nt),K.uniforms=Ae.uniforms;let Ue=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Du(b,Ae),K.needsLights=m1(b),K.lightsStateVersion=Ne,K.needsLights&&(Ue.ambientLightColor.value=J.state.ambient,Ue.lightProbe.value=J.state.probe,Ue.sunLights.value=J.state.sun,Ue.sunLightShadows.value=J.state.sunShadow,Ue.directionalLights.value=J.state.directional,Ue.directionalLightShadows.value=J.state.directionalShadow,Ue.spotLights.value=J.state.spot,Ue.spotLightShadows.value=J.state.spotShadow,Ue.rectAreaLights.value=J.state.rectArea,Ue.ltc_1.value=J.state.rectAreaLTC1,Ue.ltc_2.value=J.state.rectAreaLTC2,Ue.pointLights.value=J.state.point,Ue.pointLightShadows.value=J.state.pointShadow,Ue.hemisphereLights.value=J.state.hemi,Ue.sunShadowMatrix.value=J.state.sunShadowMatrix,Ue.sunShadowCascade.value=J.state.sunShadowCascade,Ue.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ue.spotLightMatrix.value=J.state.spotLightMatrix,Ue.spotLightMap.value=J.state.spotLightMap,Ue.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=S.state.lightProbeGridArray.length>0,K.currentProgram=nt,K.uniformsList=null,nt}function Lu(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=ws.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Du(b,k){let te=$.get(b);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}function d1(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let te=0,K=b.length;te<K;te++){let J=b[te];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function f1(b,k,te,K,J){k.isScene!==!0&&(k=me),re.resetTextureUnits();let Re=k.fog,Ne=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?k.environment:null,Ae=ee===null?D.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:it.workingColorSpace,Fe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Be=xe.get(K.envMap||Ne,Fe),Je=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,nt=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ue=!!te.morphAttributes.position,ct=!!te.morphAttributes.normal,Mt=!!te.morphAttributes.color,_t=xn;K.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(_t=D.toneMapping);let ft=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,kt=ft!==void 0?ft.length:0,De=$.get(K),Wt=S.state.lights;if(j===!0&&(A===!0||b!==Q)){let mt=b===Q&&K.id===X;ze.setState(K,b,mt)}let rt=!1;K.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Wt.state.version||De.outputColorSpace!==Ae||J.isBatchedMesh&&De.batching===!1||!J.isBatchedMesh&&De.batching===!0||J.isBatchedMesh&&De.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&De.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&De.instancing===!1||!J.isInstancedMesh&&De.instancing===!0||J.isSkinnedMesh&&De.skinning===!1||!J.isSkinnedMesh&&De.skinning===!0||J.isInstancedMesh&&De.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&De.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&De.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&De.instancingMorph===!1&&J.morphTexture!==null||De.envMap!==Be||K.fog===!0&&De.fog!==Re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ze.numPlanes||De.numIntersection!==ze.numIntersection)||De.vertexAlphas!==Je||De.vertexTangents!==nt||De.morphTargets!==Ue||De.morphNormals!==ct||De.morphColors!==Mt||De.toneMapping!==_t||De.morphTargetsCount!==kt||!!De.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,De.__version=K.version);let an=De.currentProgram;rt===!0&&(an=Ir(K,k,J),H&&K.isNodeMaterial&&H.onUpdateProgram(K,an,De));let wn=!1,Qn=!1,Hi=!1,dt=an.getUniforms(),bt=De.uniforms;if(g.useProgram(an.program)&&(wn=!0,Qn=!0,Hi=!0),K.id!==X&&(X=K.id,Qn=!0),De.needsLights){let mt=d1(S.state.lightProbeGridArray,J);De.lightProbeGrid!==mt&&(De.lightProbeGrid=mt,Qn=!0)}if(wn||Q!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",b.projectionMatrix),dt.setValue(U,"viewMatrix",b.matrixWorldInverse);let ti=dt.map.cameraPosition;ti!==void 0&&ti.setValue(U,q.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&dt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,Qn=!0,Hi=!0)}if(De.needsLights&&(Wt.state.sunShadowMap.length>0&&dt.setValue(U,"sunShadowMap",Wt.state.sunShadowMap,re),Wt.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",Wt.state.directionalShadowMap,re),Wt.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",Wt.state.spotShadowMap,re),Wt.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",Wt.state.pointShadowMap,re)),J.isSkinnedMesh){dt.setOptional(U,J,"bindMatrix"),dt.setOptional(U,J,"bindMatrixInverse");let mt=J.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),dt.setValue(U,"boneTexture",mt.boneTexture,re))}J.isBatchedMesh&&(dt.setOptional(U,J,"batchingTexture"),dt.setValue(U,"batchingTexture",J._matricesTexture,re),dt.setOptional(U,J,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",J._indirectTexture,re),dt.setOptional(U,J,"batchingColorTexture"),J._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",J._colorsTexture,re));let ei=te.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&G.update(J,te,an),(Qn||De.receiveShadow!==J.receiveShadow)&&(De.receiveShadow=J.receiveShadow,dt.setValue(U,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&k.environment!==null&&(bt.envMapIntensity.value=k.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=t7()),Qn){if(dt.setValue(U,"toneMappingExposure",D.toneMappingExposure),De.needsLights&&p1(bt,Hi),Re&&K.fog===!0&&ke.refreshFogUniforms(bt,Re),ke.refreshMaterialUniforms(bt,K,Z,F,S.state.transmissionRenderTarget[b.id]),De.needsLights&&De.lightProbeGrid){let mt=De.lightProbeGrid;bt.probesSH.value=mt.texture,bt.probesMin.value.copy(mt.boundingBox.min),bt.probesMax.value.copy(mt.boundingBox.max),bt.probesResolution.value.copy(mt.resolution)}ws.upload(U,Lu(De),bt,re)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ws.upload(U,Lu(De),bt,re),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&dt.setValue(U,"center",J.center),dt.setValue(U,"modelViewMatrix",J.modelViewMatrix),dt.setValue(U,"normalMatrix",J.normalMatrix),dt.setValue(U,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let mt=K.uniformsGroups;for(let ti=0,Wi=mt.length;ti<Wi;ti++){let Fu=mt[ti];de.update(Fu,an),de.bind(Fu,an)}}return an}function p1(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.sunLights.needsUpdate=k,b.sunLightShadows.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function m1(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(b,k,te){let K=$.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=k,$.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){let te=$.get(b);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,te=0){ee=b,B=k,V=te;let K=null,J=!1,Re=!1;if(b){let Ae=$.get(b);if(Ae.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,Ae.__webglFramebuffer),oe.copy(b.viewport),Pe.copy(b.scissor),ye=b.scissorTest,g.viewport(oe),g.scissor(Pe),g.setScissorTest(ye),X=-1;return}else if(Ae.__webglFramebuffer===void 0)re.setupRenderTarget(b);else if(Ae.__hasExternalTextures)re.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Je=b.depthTexture;if(Ae.__boundDepthTexture!==Je){if(Je!==null&&$.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(b)}}let Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Re=!0);let Be=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?K=Be[k][te]:K=Be[k],J=!0):b.samples>0&&re.useMultisampledRTT(b)===!1?K=$.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?K=Be[te]:K=Be,oe.copy(b.viewport),Pe.copy(b.scissor),ye=b.scissorTest}else oe.copy(_e).multiplyScalar(Z).floor(),Pe.copy(We).multiplyScalar(Z).floor(),ye=st;if(te!==0&&(K=Y),g.bindFramebuffer(U.FRAMEBUFFER,K)&&g.drawBuffers(b,K),g.viewport(oe),g.scissor(Pe),g.setScissorTest(ye),J){let Ae=$.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,te)}else if(Re){let Ae=k;for(let Fe=0;Fe<b.textures.length;Fe++){let Be=$.get(b.textures[Fe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,te,Ae)}}else if(b!==null&&te!==0){let Ae=$.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,te)}X=-1};function Nu(b){let k=$.get(b);return(k.__readFormat!==b.format||k.__readType!==b.type)&&(k.__readFormat=b.format,k.__readType=b.type,k.__formatReadable=C.textureFormatReadable(b.format),k.__typeReadable=C.textureTypeReadable(b.type)),k}this.readRenderTargetPixels=function(b,k,te,K,J,Re,Ne,Ae=0){if(!(b&&b.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){g.bindFramebuffer(U.FRAMEBUFFER,Fe);try{let Be=b.textures[Ae],Je=Be.format,nt=Be.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae);let Ue=Nu(Be);if(Ue.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-K&&te>=0&&te<=b.height-J&&U.readPixels(k,te,K,J,we.convert(Je),we.convert(nt),Re)}finally{let Be=ee!==null?$.get(ee).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,k,te,K,J,Re,Ne,Ae=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(k>=0&&k<=b.width-K&&te>=0&&te<=b.height-J){g.bindFramebuffer(U.FRAMEBUFFER,Fe);let Be=b.textures[Ae],Je=Be.format,nt=Be.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae);let Ue=Nu(Be);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.bufferData(U.PIXEL_PACK_BUFFER,Re.byteLength,U.STREAM_READ),U.readPixels(k,te,K,J,we.convert(Je),we.convert(nt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Mt=ee!==null?$.get(ee).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Mt);let _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zh(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Re),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ct),U.deleteSync(_t),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,te=0){let K=Math.pow(2,-te),J=Math.floor(b.image.width*K),Re=Math.floor(b.image.height*K),Ne=k!==null?k.x:0,Ae=k!==null?k.y:0;re.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,te,0,0,Ne,Ae,J,Re),g.unbindTexture()},this.copyTextureToTexture=function(b,k,te=null,K=null,J=0,Re=0){let Ne,Ae,Fe,Be,Je,nt,Ue,ct,Mt,_t=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(te!==null)Ne=te.max.x-te.min.x,Ae=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,Be=te.min.x,Je=te.min.y,nt=te.isBox3?te.min.z:0;else{let bt=Math.pow(2,-J);Ne=Math.floor(_t.width*bt),Ae=Math.floor(_t.height*bt),b.isDataArrayTexture?Fe=_t.depth:b.isData3DTexture?Fe=Math.floor(_t.depth*bt):Fe=1,Be=0,Je=0,nt=0}K!==null?(Ue=K.x,ct=K.y,Mt=K.z):(Ue=0,ct=0,Mt=0);let ft=we.convert(k.format),kt=we.convert(k.type),De;k.isData3DTexture?(re.setTexture3D(k,0),De=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(re.setTexture2DArray(k,0),De=U.TEXTURE_2D_ARRAY):(re.setTexture2D(k,0),De=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Wt=g.getParameter(U.UNPACK_ROW_LENGTH),rt=g.getParameter(U.UNPACK_IMAGE_HEIGHT),an=g.getParameter(U.UNPACK_SKIP_PIXELS),wn=g.getParameter(U.UNPACK_SKIP_ROWS),Qn=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),g.pixelStorei(U.UNPACK_SKIP_ROWS,Je),g.pixelStorei(U.UNPACK_SKIP_IMAGES,nt);let Hi=b.isDataArrayTexture||b.isData3DTexture,dt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){let bt=$.get(b),ei=$.get(k),mt=$.get(bt.__renderTarget),ti=$.get(ei.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Wi=0;Wi<Fe;Wi++)Hi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.get(b).__webglTexture,J,nt+Wi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.get(k).__webglTexture,Re,Mt+Wi)),U.blitFramebuffer(Be,Je,Ne,Ae,Ue,ct,Ne,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(J!==0||b.isRenderTargetTexture||$.has(b)){let bt=$.get(b),ei=$.get(k);g.bindFramebuffer(U.READ_FRAMEBUFFER,O),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,P);for(let mt=0;mt<Fe;mt++)Hi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,J,nt+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,J),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ei.__webglTexture,Re,Mt+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ei.__webglTexture,Re),J!==0?U.blitFramebuffer(Be,Je,Ne,Ae,Ue,ct,Ne,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(De,Re,Ue,ct,Mt+mt,Be,Je,Ne,Ae):U.copyTexSubImage2D(De,Re,Ue,ct,Be,Je,Ne,Ae);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(De,Re,Ue,ct,Mt,Ne,Ae,Fe,ft,kt,_t.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(De,Re,Ue,ct,Mt,Ne,Ae,Fe,ft,_t.data):U.texSubImage3D(De,Re,Ue,ct,Mt,Ne,Ae,Fe,ft,kt,_t):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Re,Ue,ct,Ne,Ae,ft,kt,_t.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Re,Ue,ct,_t.width,_t.height,ft,_t.data):U.texSubImage2D(U.TEXTURE_2D,Re,Ue,ct,Ne,Ae,ft,kt,_t);g.pixelStorei(U.UNPACK_ROW_LENGTH,Wt),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),g.pixelStorei(U.UNPACK_SKIP_PIXELS,an),g.pixelStorei(U.UNPACK_SKIP_ROWS,wn),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Qn),Re===0&&k.generateMipmaps&&U.generateMipmap(De),g.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&re.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?re.setTextureCube(b,0):b.isData3DTexture?re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?re.setTexture2DArray(b,0):re.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){B=0,V=0,ee=null,g.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Rd={type:"change"},Dc={type:"start"},Id={type:"end"},Fo=new Hn,Pd=new tn,n7=Math.cos(70*oc.DEG2RAD),Pt=new W,Jt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lc=1e-6,Uo=class extends cr{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new nn,this._lastTargetPosition=new W,this._quat=new nn().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gs,this._sphericalDelta=new gs,this._scale=1,this._panOffset=new W,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new W,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=s7.bind(this),this._onPointerDown=i7.bind(this),this._onPointerUp=r7.bind(this),this._onContextMenu=d7.bind(this),this._onMouseWheel=l7.bind(this),this._onKeyDown=c7.bind(this),this._onTouchStart=u7.bind(this),this._onTouchMove=h7.bind(this),this._onMouseDown=a7.bind(this),this._onMouseMove=o7.bind(this),this._interceptControlDown=f7.bind(this),this._interceptControlUp=p7.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ht.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rd),this.update(),this.state=ht.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Jt:i>Math.PI&&(i-=Jt),s<-Math.PI?s+=Jt:s>Math.PI&&(s-=Jt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Pt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new W(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fo.origin.copy(this.object.position),Fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fo.direction))<n7?this.object.lookAt(this.target):(Pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fo.intersectPlane(Pd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lc||this._lastTargetPosition.distanceToSquared(this.target)>Lc?(this.dispatchEvent(Rd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Pt.copy(s).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function i7(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function s7(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function r7(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Id),this.state=ht.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function a7(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ht.DOLLY;break;case gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}break;case gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Dc)}function o7(n){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function l7(n){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(n.preventDefault(),this.dispatchEvent(Dc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Id))}function c7(n){this.enabled!==!1&&this._handleKeyDown(n)}function u7(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ht.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ht.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Dc)}function h7(n){switch(this._trackPointer(n),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ht.NONE}}function d7(n){this.enabled!==!1&&n.preventDefault()}function f7(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p7(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ld={type:"FeatureCollection",name:"ne_110m_land",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-66.290031,-81.000327,-59.572095,-79.628679],geometry:{type:"Polygon",coordinates:[[[-59.572095,-80.040179],[-59.865849,-80.549657],[-60.159656,-81.000327],[-62.255393,-80.863178],[-64.488125,-80.921934],[-65.741666,-80.588827],[-65.741666,-80.549657],[-66.290031,-80.255773],[-64.037688,-80.294944],[-61.883246,-80.39287],[-61.138976,-79.981371],[-60.610119,-79.628679],[-59.572095,-80.040179]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-163.712896,-79.634209,-159.208184,-78.223338],geometry:{type:"Polygon",coordinates:[[[-159.208184,-79.497059],[-161.127601,-79.634209],[-162.439847,-79.281465],[-163.027408,-78.928774],[-163.066604,-78.869966],[-163.712896,-78.595667],[-163.712896,-78.595667],[-163.105801,-78.223338],[-161.245113,-78.380176],[-160.246208,-78.693645],[-159.482405,-79.046338],[-159.208184,-79.497059]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:0},bbox:[-54.164259,-81.025442,-43.333267,-77.831476],geometry:{type:"Polygon",coordinates:[[[-45.154758,-78.04707],[-43.920828,-78.478103],[-43.48995,-79.08556],[-43.372438,-79.516645],[-43.333267,-80.026123],[-44.880537,-80.339644],[-46.506174,-80.594357],[-48.386421,-80.829485],[-50.482107,-81.025442],[-52.851988,-80.966685],[-54.164259,-80.633528],[-53.987991,-80.222028],[-51.853134,-79.94773],[-50.991326,-79.614623],[-50.364595,-79.183487],[-49.914131,-78.811209],[-49.306959,-78.458569],[-48.660616,-78.047018],[-48.660616,-78.047019],[-48.151396,-78.04707],[-46.662857,-77.831476],[-45.154758,-78.04707]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-122.621735,-74.08881,-118.724143,-73.324619],geometry:{type:"Polygon",coordinates:[[[-121.211511,-73.50099],[-119.918851,-73.657725],[-118.724143,-73.481353],[-119.292119,-73.834097],[-120.232217,-74.08881],[-121.62283,-74.010468],[-122.621735,-73.657778],[-122.621735,-73.657777],[-122.406245,-73.324619],[-121.211511,-73.50099]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-127.28313,-73.873268,-124.031882,-73.246226],geometry:{type:"Polygon",coordinates:[[[-125.559566,-73.481353],[-124.031882,-73.873268],[-124.619469,-73.834097],[-125.912181,-73.736118],[-127.28313,-73.461769],[-127.28313,-73.461768],[-126.558472,-73.246226],[-125.559566,-73.481353]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-102.330725,-72.521205,-96.20035,-71.717792],geometry:{type:"Polygon",coordinates:[[[-98.98155,-71.933334],[-97.884743,-72.070535],[-96.787937,-71.952971],[-96.20035,-72.521205],[-96.983765,-72.442864],[-98.198083,-72.482035],[-99.432013,-72.442864],[-100.783455,-72.50162],[-101.801868,-72.305663],[-102.330725,-71.894164],[-102.330725,-71.894164],[-101.703967,-71.717792],[-100.430919,-71.854993],[-98.98155,-71.933334]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-75.012625,-72.503842,-68.333834,-68.87874],geometry:{type:"Polygon",coordinates:[[[-68.451346,-70.955823],[-68.333834,-71.406493],[-68.510128,-71.798407],[-68.784297,-72.170736],[-69.959471,-72.307885],[-71.075889,-72.503842],[-72.388134,-72.484257],[-71.8985,-72.092343],[-73.073622,-72.229492],[-74.19004,-72.366693],[-74.953895,-72.072757],[-75.012625,-71.661258],[-73.915819,-71.269345],[-73.915819,-71.269344],[-73.230331,-71.15178],[-72.074717,-71.190951],[-71.780962,-70.681473],[-71.72218,-70.309196],[-71.741791,-69.505782],[-71.173815,-69.035475],[-70.253252,-68.87874],[-69.724447,-69.251017],[-69.489422,-69.623346],[-69.058518,-70.074016],[-68.725541,-70.505153],[-68.451346,-70.955823]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,-90,180,-63.27066],geometry:{type:"Polygon",coordinates:[[[-58.614143,-64.152467],[-59.045073,-64.36801],[-59.789342,-64.211223],[-60.611928,-64.309202],[-61.297416,-64.54433],[-62.0221,-64.799094],[-62.51176,-65.09303],[-62.648858,-65.484942],[-62.590128,-65.857219],[-62.120079,-66.190326],[-62.805567,-66.425505],[-63.74569,-66.503847],[-64.294106,-66.837004],[-64.881693,-67.150474],[-65.508425,-67.58161],[-65.665082,-67.953887],[-65.312545,-68.365335],[-64.783715,-68.678908],[-63.961103,-68.913984],[-63.1973,-69.227556],[-62.785955,-69.619419],[-62.570516,-69.991747],[-62.276736,-70.383661],[-61.806661,-70.716768],[-61.512906,-71.089045],[-61.375809,-72.010074],[-61.081977,-72.382351],[-61.003661,-72.774265],[-60.690269,-73.166179],[-60.827367,-73.695242],[-61.375809,-74.106742],[-61.96337,-74.439848],[-63.295201,-74.576997],[-63.74569,-74.92974],[-64.352836,-75.262847],[-65.860987,-75.635124],[-67.192818,-75.79191],[-68.446282,-76.007452],[-69.797724,-76.222995],[-70.600724,-76.634494],[-72.206776,-76.673665],[-73.969536,-76.634494],[-75.555977,-76.712887],[-77.24037,-76.712887],[-76.926979,-77.104802],[-75.399294,-77.28107],[-74.282876,-77.55542],[-73.656119,-77.908112],[-74.772536,-78.221633],[-76.4961,-78.123654],[-77.925858,-78.378419],[-77.984666,-78.789918],[-78.023785,-79.181833],[-76.848637,-79.514939],[-76.633224,-79.887216],[-75.360097,-80.259545],[-73.244852,-80.416331],[-71.442946,-80.69063],[-70.013163,-81.004151],[-68.191646,-81.317672],[-65.704279,-81.474458],[-63.25603,-81.748757],[-61.552026,-82.042692],[-59.691416,-82.37585],[-58.712121,-82.846106],[-58.222487,-83.218434],[-57.008117,-82.865691],[-55.362894,-82.571755],[-53.619771,-82.258235],[-51.543644,-82.003521],[-49.76135,-81.729171],[-47.273931,-81.709586],[-44.825708,-81.846735],[-42.808363,-82.081915],[-42.16202,-81.65083],[-40.771433,-81.356894],[-38.244818,-81.337309],[-36.26667,-81.121715],[-34.386397,-80.906172],[-32.310296,-80.769023],[-30.097098,-80.592651],[-28.549802,-80.337938],[-29.254901,-79.985195],[-29.685805,-79.632503],[-29.685805,-79.260226],[-31.624808,-79.299397],[-33.681324,-79.456132],[-35.639912,-79.456132],[-35.914107,-79.083855],[-35.77701,-78.339248],[-35.326546,-78.123654],[-33.896763,-77.888526],[-32.212369,-77.65345],[-30.998051,-77.359515],[-29.783732,-77.065579],[-28.882779,-76.673665],[-27.511752,-76.497345],[-26.160336,-76.360144],[-25.474822,-76.281803],[-23.927552,-76.24258],[-22.458598,-76.105431],[-21.224694,-75.909474],[-20.010375,-75.674346],[-18.913543,-75.439218],[-17.522982,-75.125698],[-16.641589,-74.79254],[-15.701491,-74.498604],[-15.40771,-74.106742],[-16.46532,-73.871614],[-16.112784,-73.460114],[-15.446855,-73.146542],[-14.408805,-72.950585],[-13.311973,-72.715457],[-12.293508,-72.401936],[-11.510067,-72.010074],[-11.020433,-71.539767],[-10.295774,-71.265416],[-9.101015,-71.324224],[-8.611381,-71.65733],[-7.416622,-71.696501],[-7.377451,-71.324224],[-6.868232,-70.93231],[-5.790985,-71.030289],[-5.536375,-71.402617],[-4.341667,-71.461373],[-3.048981,-71.285053],[-1.795492,-71.167438],[-.659489,-71.226246],[-.228637,-71.637745],[.868195,-71.304639],[1.886686,-71.128267],[3.022638,-70.991118],[4.139055,-70.853917],[5.157546,-70.618789],[6.273912,-70.462055],[7.13572,-70.246512],[7.742866,-69.893769],[8.48711,-70.148534],[9.525135,-70.011333],[10.249845,-70.48164],[10.817821,-70.834332],[11.953824,-70.638375],[12.404287,-70.246512],[13.422778,-69.972162],[14.734998,-70.030918],[15.126757,-70.403247],[15.949342,-70.030918],[17.026589,-69.913354],[18.201711,-69.874183],[19.259373,-69.893769],[20.375739,-70.011333],[21.452985,-70.07014],[21.923034,-70.403247],[22.569403,-70.697182],[23.666184,-70.520811],[24.841357,-70.48164],[25.977309,-70.48164],[27.093726,-70.462055],[28.09258,-70.324854],[29.150242,-70.20729],[30.031583,-69.93294],[30.971733,-69.75662],[31.990172,-69.658641],[32.754053,-69.384291],[33.302443,-68.835642],[33.870419,-68.502588],[34.908495,-68.659271],[35.300202,-69.012014],[36.16201,-69.247142],[37.200035,-69.168748],[37.905108,-69.52144],[38.649404,-69.776205],[39.667894,-69.541077],[40.020431,-69.109941],[40.921358,-68.933621],[41.959434,-68.600514],[42.938702,-68.463313],[44.113876,-68.267408],[44.897291,-68.051866],[45.719928,-67.816738],[46.503343,-67.601196],[47.44344,-67.718759],[48.344419,-67.366068],[48.990736,-67.091718],[49.930885,-67.111303],[50.753471,-66.876175],[50.949325,-66.523484],[51.791547,-66.249133],[52.614133,-66.053176],[53.613038,-65.89639],[54.53355,-65.818049],[55.414943,-65.876805],[56.355041,-65.974783],[57.158093,-66.249133],[57.255968,-66.680218],[58.137361,-67.013324],[58.744508,-67.287675],[59.939318,-67.405239],[60.605221,-67.679589],[61.427806,-67.953887],[62.387489,-68.012695],[63.19049,-67.816738],[64.052349,-67.405239],[64.992447,-67.620729],[65.971715,-67.738345],[66.911864,-67.855909],[67.891133,-67.934302],[68.890038,-67.934302],[69.712624,-68.972791],[69.673453,-69.227556],[69.555941,-69.678226],[68.596258,-69.93294],[67.81274,-70.305268],[67.949889,-70.697182],[69.066307,-70.677545],[68.929157,-71.069459],[68.419989,-71.441788],[67.949889,-71.853287],[68.71377,-72.166808],[69.869307,-72.264787],[71.024895,-72.088415],[71.573285,-71.696501],[71.906288,-71.324224],[72.454627,-71.010703],[73.08141,-70.716768],[73.33602,-70.364024],[73.864877,-69.874183],[74.491557,-69.776205],[75.62756,-69.737034],[76.626465,-69.619419],[77.644904,-69.462684],[78.134539,-69.07077],[78.428371,-68.698441],[79.113859,-68.326216],[80.093127,-68.071503],[80.93535,-67.875546],[81.483792,-67.542388],[82.051767,-67.366068],[82.776426,-67.209282],[83.775331,-67.30726],[84.676206,-67.209282],[85.655527,-67.091718],[86.752359,-67.150474],[87.477017,-66.876175],[87.986289,-66.209911],[88.358411,-66.484261],[88.828408,-66.954568],[89.67063,-67.150474],[90.630365,-67.228867],[91.5901,-67.111303],[92.608539,-67.189696],[93.548637,-67.209282],[94.17542,-67.111303],[95.017591,-67.170111],[95.781472,-67.385653],[96.682399,-67.248504],[97.759646,-67.248504],[98.68021,-67.111303],[99.718182,-67.248504],[100.384188,-66.915346],[100.893356,-66.58224],[101.578896,-66.30789],[102.832411,-65.563284],[103.478676,-65.700485],[104.242557,-65.974783],[104.90846,-66.327527],[106.181561,-66.934931],[107.160881,-66.954568],[108.081393,-66.954568],[109.15864,-66.837004],[110.235835,-66.699804],[111.058472,-66.425505],[111.74396,-66.13157],[112.860378,-66.092347],[113.604673,-65.876805],[114.388088,-66.072762],[114.897308,-66.386283],[115.602381,-66.699804],[116.699161,-66.660633],[117.384701,-66.915346],[118.57946,-67.170111],[119.832924,-67.268089],[120.871,-67.189696],[121.654415,-66.876175],[122.320369,-66.562654],[123.221296,-66.484261],[124.122274,-66.621462],[125.160247,-66.719389],[126.100396,-66.562654],[127.001427,-66.562654],[127.882768,-66.660633],[128.80328,-66.758611],[129.704259,-66.58224],[130.781454,-66.425505],[131.799945,-66.386283],[132.935896,-66.386283],[133.85646,-66.288304],[134.757387,-66.209963],[135.031582,-65.72007],[135.070753,-65.308571],[135.697485,-65.582869],[135.873805,-66.033591],[136.206705,-66.44509],[136.618049,-66.778197],[137.460271,-66.954568],[138.596223,-66.895761],[139.908442,-66.876175],[140.809421,-66.817367],[142.121692,-66.817367],[143.061842,-66.797782],[144.374061,-66.837004],[145.490427,-66.915346],[146.195552,-67.228867],[145.999699,-67.601196],[146.646067,-67.895131],[147.723263,-68.130259],[148.839629,-68.385024],[150.132314,-68.561292],[151.483705,-68.71813],[152.502247,-68.874813],[153.638199,-68.894502],[154.284567,-68.561292],[155.165857,-68.835642],[155.92979,-69.149215],[156.811132,-69.384291],[158.025528,-69.482269],[159.181013,-69.599833],[159.670699,-69.991747],[160.80665,-70.226875],[161.570479,-70.579618],[162.686897,-70.736353],[163.842434,-70.716768],[164.919681,-70.775524],[166.11444,-70.755938],[167.309095,-70.834332],[168.425616,-70.971481],[169.463589,-71.20666],[170.501665,-71.402617],[171.20679,-71.696501],[171.089227,-72.088415],[170.560422,-72.441159],[170.109958,-72.891829],[169.75737,-73.24452],[169.287321,-73.65602],[167.975101,-73.812806],[167.387489,-74.165498],[166.094803,-74.38104],[165.644391,-74.772954],[164.958851,-75.145283],[164.234193,-75.458804],[163.822797,-75.870303],[163.568239,-76.24258],[163.47026,-76.693302],[163.489897,-77.065579],[164.057873,-77.457442],[164.273363,-77.82977],[164.743464,-78.182514],[166.604126,-78.319611],[166.995781,-78.750748],[165.193876,-78.907483],[163.666217,-79.123025],[161.766385,-79.162248],[160.924162,-79.730482],[160.747894,-80.200737],[160.316964,-80.573066],[159.788211,-80.945395],[161.120016,-81.278501],[161.629287,-81.690001],[162.490992,-82.062278],[163.705336,-82.395435],[165.095949,-82.708956],[166.604126,-83.022477],[168.895665,-83.335998],[169.404782,-83.825891],[172.283934,-84.041433],[172.477049,-84.117914],[173.224083,-84.41371],[175.985672,-84.158997],[178.277212,-84.472518],[180,-84.71338],[180,-90],[-180,-90],[-180,-84.71338],[-179.942499,-84.721443],[-179.058677,-84.139412],[-177.256772,-84.452933],[-177.140807,-84.417941],[-176.861993,-84.333812],[-176.523952,-84.231811],[-176.230303,-84.143203],[-176.084673,-84.099259],[-175.934101,-84.101591],[-175.829882,-84.117914],[-174.382503,-84.534323],[-173.116559,-84.117914],[-172.889106,-84.061019],[-169.951223,-83.884647],[-168.999989,-84.117914],[-168.530199,-84.23739],[-167.022099,-84.570497],[-164.182144,-84.82521],[-161.929775,-85.138731],[-158.07138,-85.37391],[-155.192253,-85.09956],[-150.942099,-85.295517],[-148.533073,-85.609038],[-145.888918,-85.315102],[-143.107718,-85.040752],[-142.892279,-84.570497],[-146.829068,-84.531274],[-150.060732,-84.296146],[-150.902928,-83.904232],[-153.586201,-83.68869],[-153.409907,-83.23802],[-153.037759,-82.82652],[-152.665637,-82.454192],[-152.861517,-82.042692],[-154.526299,-81.768394],[-155.29018,-81.41565],[-156.83745,-81.102129],[-154.408787,-81.160937],[-152.097662,-81.004151],[-150.648293,-81.337309],[-148.865998,-81.043373],[-147.22075,-80.671045],[-146.417749,-80.337938],[-146.770286,-79.926439],[-148.062947,-79.652089],[-149.531901,-79.358205],[-151.588416,-79.299397],[-153.390322,-79.162248],[-155.329376,-79.064269],[-155.975668,-78.69194],[-157.268302,-78.378419],[-158.051768,-78.025676],[-158.365134,-76.889207],[-157.875474,-76.987238],[-156.974573,-77.300759],[-155.329376,-77.202728],[-153.742832,-77.065579],[-152.920247,-77.496664],[-151.33378,-77.398737],[-150.00195,-77.183143],[-148.748486,-76.908845],[-147.612483,-76.575738],[-146.104409,-76.47776],[-146.143528,-76.105431],[-146.496091,-75.733154],[-146.20231,-75.380411],[-144.909624,-75.204039],[-144.322037,-75.537197],[-142.794353,-75.34124],[-141.638764,-75.086475],[-140.209007,-75.06689],[-138.85759,-74.968911],[-137.5062,-74.733783],[-136.428901,-74.518241],[-135.214583,-74.302699],[-134.431194,-74.361455],[-133.745654,-74.439848],[-132.257168,-74.302699],[-130.925311,-74.479019],[-129.554284,-74.459433],[-128.242038,-74.322284],[-126.890622,-74.420263],[-125.402082,-74.518241],[-124.011496,-74.479019],[-122.562152,-74.498604],[-121.073613,-74.518241],[-119.70256,-74.479019],[-118.684145,-74.185083],[-117.469801,-74.028348],[-116.216312,-74.243891],[-115.021552,-74.067519],[-113.944331,-73.714828],[-113.297988,-74.028348],[-112.945452,-74.38104],[-112.299083,-74.714198],[-111.261059,-74.420263],[-110.066325,-74.79254],[-108.714909,-74.910103],[-107.559346,-75.184454],[-106.149148,-75.125698],[-104.876074,-74.949326],[-103.367949,-74.988497],[-102.016507,-75.125698],[-100.645531,-75.302018],[-100.1167,-74.870933],[-100.763043,-74.537826],[-101.252703,-74.185083],[-102.545337,-74.106742],[-103.113313,-73.734413],[-103.328752,-73.362084],[-103.681289,-72.61753],[-102.917485,-72.754679],[-101.60524,-72.813436],[-100.312528,-72.754679],[-99.13738,-72.911414],[-98.118889,-73.20535],[-97.688037,-73.558041],[-96.336595,-73.616849],[-95.043961,-73.4797],[-93.672907,-73.283743],[-92.439003,-73.166179],[-91.420564,-73.401307],[-90.088733,-73.322914],[-89.226951,-72.558722],[-88.423951,-73.009393],[-87.268337,-73.185764],[-86.014822,-73.087786],[-85.192236,-73.4797],[-83.879991,-73.518871],[-82.665646,-73.636434],[-81.470913,-73.851977],[-80.687447,-73.4797],[-80.295791,-73.126956],[-79.296886,-73.518871],[-77.925858,-73.420892],[-76.907367,-73.636434],[-76.221879,-73.969541],[-74.890049,-73.871614],[-73.852024,-73.65602],[-72.833533,-73.401307],[-71.619215,-73.264157],[-70.209042,-73.146542],[-68.935916,-73.009393],[-67.956622,-72.79385],[-67.369061,-72.480329],[-67.134036,-72.049244],[-67.251548,-71.637745],[-67.56494,-71.245831],[-67.917477,-70.853917],[-68.230843,-70.462055],[-68.485452,-70.109311],[-68.544209,-69.717397],[-68.446282,-69.325535],[-67.976233,-68.953206],[-67.5845,-68.541707],[-67.427843,-68.149844],[-67.62367,-67.718759],[-67.741183,-67.326845],[-67.251548,-66.876175],[-66.703184,-66.58224],[-66.056815,-66.209963],[-65.371327,-65.89639],[-64.568276,-65.602506],[-64.176542,-65.171423],[-63.628152,-64.897073],[-63.001394,-64.642308],[-62.041686,-64.583552],[-61.414928,-64.270031],[-60.709855,-64.074074],[-59.887269,-63.95651],[-59.162585,-63.701745],[-58.594557,-63.388224],[-57.811143,-63.27066],[-57.223582,-63.525425],[-57.59573,-63.858532],[-58.614143,-64.152467]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-74.66253,-55.61183,-65.05,-52.5183],geometry:{type:"Polygon",coordinates:[[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.95992,-54.89681],[-67.29103,-55.30124],[-68.14863,-55.61183],[-69.2321,-55.49906],[-69.95809,-55.19843],[-71.00568,-55.05383],[-72.2639,-54.49514],[-73.2852,-53.95752],[-74.66253,-52.83749],[-73.8381,-53.04743],[-72.43418,-53.7154],[-71.10773,-54.07433],[-70.59178,-53.61583],[-70.26748,-52.93123],[-69.34565,-52.5183],[-68.63411,-52.63625],[-68.63401,-52.63637],[-68.25,-53.1],[-67.75,-53.85]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-61.2,-52.3,-57.75,-51.1],geometry:{type:"Polygon",coordinates:[[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[68.72,-49.775,70.56,-48.625],geometry:{type:"Polygon",coordinates:[[[70.28,-49.71],[68.745,-49.775],[68.72,-49.2425],[68.8675,-48.83],[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[144.718071,-43.634597,148.359865,-40.703975],geometry:{type:"Polygon",coordinates:[[[145.397978,-40.792549],[146.364121,-41.137695],[146.908584,-41.000546],[147.689259,-40.808258],[148.289068,-40.875438],[148.359865,-42.062445],[148.017301,-42.407024],[147.914052,-43.211522],[147.564564,-42.937689],[146.870343,-43.634597],[146.663327,-43.580854],[146.048378,-43.549745],[145.43193,-42.693776],[145.29509,-42.03361],[144.718071,-41.162552],[144.743755,-40.703975],[145.397978,-40.792549]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[166.509144,-46.641235,174.248517,-40.493962],geometry:{type:"Polygon",coordinates:[[[173.020375,-40.919052],[173.247234,-41.331999],[173.958405,-40.926701],[174.247587,-41.349155],[174.248517,-41.770008],[173.876447,-42.233184],[173.22274,-42.970038],[172.711246,-43.372288],[173.080113,-43.853344],[172.308584,-43.865694],[171.452925,-44.242519],[171.185138,-44.897104],[170.616697,-45.908929],[169.831422,-46.355775],[169.332331,-46.641235],[168.411354,-46.619945],[167.763745,-46.290197],[166.676886,-46.219917],[166.509144,-45.852705],[167.046424,-45.110941],[168.303763,-44.123973],[168.949409,-43.935819],[169.667815,-43.555326],[170.52492,-43.031688],[171.12509,-42.512754],[171.569714,-41.767424],[171.948709,-41.514417],[172.097227,-40.956104],[172.79858,-40.493962],[173.020375,-40.919052]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[172.636005,-41.688308,178.517094,-34.450662],geometry:{type:"Polygon",coordinates:[[[174.612009,-36.156397],[175.336616,-37.209098],[175.357596,-36.526194],[175.808887,-36.798942],[175.95849,-37.555382],[176.763195,-37.881253],[177.438813,-37.961248],[178.010354,-37.579825],[178.517094,-37.695373],[178.274731,-38.582813],[177.97046,-39.166343],[177.206993,-39.145776],[176.939981,-39.449736],[177.032946,-39.879943],[176.885824,-40.065978],[176.508017,-40.604808],[176.01244,-41.289624],[175.239567,-41.688308],[175.067898,-41.425895],[174.650973,-41.281821],[175.22763,-40.459236],[174.900157,-39.908933],[173.824047,-39.508854],[173.852262,-39.146602],[174.574802,-38.797683],[174.743474,-38.027808],[174.697017,-37.381129],[174.292028,-36.711092],[174.319004,-36.534824],[173.840997,-36.121981],[173.054171,-35.237125],[172.636005,-34.529107],[173.007042,-34.450662],[173.551298,-35.006183],[174.32939,-35.265496],[174.612009,-36.156397]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[164.029606,-22.399976,167.120011,-20.105646],geometry:{type:"Polygon",coordinates:[[[167.120011,-22.159991],[166.740035,-22.399976],[166.189732,-22.129708],[165.474375,-21.679607],[164.829815,-21.14982],[164.167995,-20.444747],[164.029606,-20.105646],[164.459967,-20.120012],[165.020036,-20.459991],[165.460009,-20.800022],[165.77999,-21.080005],[166.599991,-21.700019],[167.120011,-22.159991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[177.28504,-18.28799,178.71806,-17.33992],geometry:{type:"Polygon",coordinates:[[[178.3736,-17.33992],[178.71806,-17.62846],[178.55271,-18.15059],[177.93266,-18.28799],[177.38146,-18.16432],[177.28504,-17.72465],[177.67087,-17.38114],[178.12557,-17.50481],[178.3736,-17.33992]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[178.596839,-17.012042,180,-16.067133],geometry:{type:"Polygon",coordinates:[[[179.364143,-16.801354],[178.725059,-17.012042],[178.596839,-16.63915],[179.096609,-16.433984],[179.413509,-16.379054],[180,-16.067133],[180,-16.555217],[179.364143,-16.801354]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-180,-16.555217,-179.79332,-16.020882],geometry:{type:"Polygon",coordinates:[[[-179.917369,-16.501783],[-180,-16.555217],[-180,-16.067133],[-179.79332,-16.020882],[-179.917369,-16.501783]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[167.180008,-16.59785,167.844877,-15.891846],geometry:{type:"Polygon",coordinates:[[[167.844877,-16.466333],[167.515181,-16.59785],[167.180008,-16.159995],[167.216801,-15.891846],[167.844877,-16.466333]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[166.629137,-15.740021,167.270028,-14.626497],geometry:{type:"Polygon",coordinates:[[[167.107712,-14.93392],[167.270028,-15.740021],[167.001207,-15.614602],[166.793158,-15.668811],[166.649859,-15.392704],[166.629137,-14.626497],[167.107712,-14.93392]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[43.254187,-25.601434,50.476537,-12.040557],geometry:{type:"Polygon",coordinates:[[[50.056511,-13.555761],[50.217431,-14.758789],[50.476537,-15.226512],[50.377111,-15.706069],[50.200275,-16.000263],[49.860606,-15.414253],[49.672607,-15.710204],[49.863344,-16.451037],[49.774564,-16.875042],[49.498612,-17.106036],[49.435619,-17.953064],[49.041792,-19.118781],[48.548541,-20.496888],[47.930749,-22.391501],[47.547723,-23.781959],[47.095761,-24.94163],[46.282478,-25.178463],[45.409508,-25.601434],[44.833574,-25.346101],[44.03972,-24.988345],[43.763768,-24.460677],[43.697778,-23.574116],[43.345654,-22.776904],[43.254187,-22.057413],[43.433298,-21.336475],[43.893683,-21.163307],[43.89637,-20.830459],[44.374325,-20.072366],[44.464397,-19.435454],[44.232422,-18.961995],[44.042976,-18.331387],[43.963084,-17.409945],[44.312469,-16.850496],[44.446517,-16.216219],[44.944937,-16.179374],[45.502732,-15.974373],[45.872994,-15.793454],[46.312243,-15.780018],[46.882183,-15.210182],[47.70513,-14.594303],[48.005215,-14.091233],[47.869047,-13.663869],[48.293828,-13.784068],[48.84506,-13.089175],[48.863509,-12.487868],[49.194651,-12.040557],[49.543519,-12.469833],[49.808981,-12.895285],[50.056511,-13.555761]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[113.338953,-39.035757,153.569469,-10.668186],geometry:{type:"Polygon",coordinates:[[[143.561811,-13.763656],[143.922099,-14.548311],[144.563714,-14.171176],[144.894908,-14.594458],[145.374724,-14.984976],[145.271991,-15.428205],[145.48526,-16.285672],[145.637033,-16.784918],[145.888904,-16.906926],[146.160309,-17.761655],[146.063674,-18.280073],[146.387478,-18.958274],[147.471082,-19.480723],[148.177602,-19.955939],[148.848414,-20.39121],[148.717465,-20.633469],[149.28942,-21.260511],[149.678337,-22.342512],[150.077382,-22.122784],[150.482939,-22.556142],[150.727265,-22.402405],[150.899554,-23.462237],[151.609175,-24.076256],[152.07354,-24.457887],[152.855197,-25.267501],[153.136162,-26.071173],[153.161949,-26.641319],[153.092909,-27.2603],[153.569469,-28.110067],[153.512108,-28.995077],[153.339095,-29.458202],[153.069241,-30.35024],[153.089602,-30.923642],[152.891578,-31.640446],[152.450002,-32.550003],[151.709117,-33.041342],[151.343972,-33.816023],[151.010555,-34.31036],[150.714139,-35.17346],[150.32822,-35.671879],[150.075212,-36.420206],[149.946124,-37.109052],[149.997284,-37.425261],[149.423882,-37.772681],[148.304622,-37.809061],[147.381733,-38.219217],[146.922123,-38.606532],[146.317922,-39.035757],[145.489652,-38.593768],[144.876976,-38.417448],[145.032212,-37.896188],[144.485682,-38.085324],[143.609974,-38.809465],[142.745427,-38.538268],[142.17833,-38.380034],[141.606582,-38.308514],[140.638579,-38.019333],[139.992158,-37.402936],[139.806588,-36.643603],[139.574148,-36.138362],[139.082808,-35.732754],[138.120748,-35.612296],[138.449462,-35.127261],[138.207564,-34.384723],[137.71917,-35.076825],[136.829406,-35.260535],[137.352371,-34.707339],[137.503886,-34.130268],[137.890116,-33.640479],[137.810328,-32.900007],[136.996837,-33.752771],[136.372069,-34.094766],[135.989043,-34.890118],[135.208213,-34.47867],[135.239218,-33.947953],[134.613417,-33.222778],[134.085904,-32.848072],[134.273903,-32.617234],[132.990777,-32.011224],[132.288081,-31.982647],[131.326331,-31.495803],[129.535794,-31.590423],[128.240938,-31.948489],[127.102867,-32.282267],[126.148714,-32.215966],[125.088623,-32.728751],[124.221648,-32.959487],[124.028947,-33.483847],[123.659667,-33.890179],[122.811036,-33.914467],[122.183064,-34.003402],[121.299191,-33.821036],[120.580268,-33.930177],[119.893695,-33.976065],[119.298899,-34.509366],[119.007341,-34.464149],[118.505718,-34.746819],[118.024972,-35.064733],[117.295507,-35.025459],[116.625109,-35.025097],[115.564347,-34.386428],[115.026809,-34.196517],[115.048616,-33.623425],[115.545123,-33.487258],[115.714674,-33.259572],[115.679379,-32.900369],[115.801645,-32.205062],[115.689611,-31.612437],[115.160909,-30.601594],[114.997043,-30.030725],[115.040038,-29.461095],[114.641974,-28.810231],[114.616498,-28.516399],[114.173579,-28.118077],[114.048884,-27.334765],[113.477498,-26.543134],[113.338953,-26.116545],[113.778358,-26.549025],[113.440962,-25.621278],[113.936901,-25.911235],[114.232852,-26.298446],[114.216161,-25.786281],[113.721255,-24.998939],[113.625344,-24.683971],[113.393523,-24.384764],[113.502044,-23.80635],[113.706993,-23.560215],[113.843418,-23.059987],[113.736552,-22.475475],[114.149756,-21.755881],[114.225307,-22.517488],[114.647762,-21.82952],[115.460167,-21.495173],[115.947373,-21.068688],[116.711615,-20.701682],[117.166316,-20.623599],[117.441545,-20.746899],[118.229559,-20.374208],[118.836085,-20.263311],[118.987807,-20.044203],[119.252494,-19.952942],[119.805225,-19.976506],[120.85622,-19.683708],[121.399856,-19.239756],[121.655138,-18.705318],[122.241665,-18.197649],[122.286624,-17.798603],[122.312772,-17.254967],[123.012574,-16.4052],[123.433789,-17.268558],[123.859345,-17.069035],[123.503242,-16.596506],[123.817073,-16.111316],[124.258287,-16.327944],[124.379726,-15.56706],[124.926153,-15.0751],[125.167275,-14.680396],[125.670087,-14.51007],[125.685796,-14.230656],[126.125149,-14.347341],[126.142823,-14.095987],[126.582589,-13.952791],[127.065867,-13.817968],[127.804633,-14.276906],[128.35969,-14.86917],[128.985543,-14.875991],[129.621473,-14.969784],[129.4096,-14.42067],[129.888641,-13.618703],[130.339466,-13.357376],[130.183506,-13.10752],[130.617795,-12.536392],[131.223495,-12.183649],[131.735091,-12.302453],[132.575298,-12.114041],[132.557212,-11.603012],[131.824698,-11.273782],[132.357224,-11.128519],[133.019561,-11.376411],[133.550846,-11.786515],[134.393068,-12.042365],[134.678632,-11.941183],[135.298491,-12.248606],[135.882693,-11.962267],[136.258381,-12.049342],[136.492475,-11.857209],[136.95162,-12.351959],[136.685125,-12.887223],[136.305407,-13.29123],[135.961758,-13.324509],[136.077617,-13.724278],[135.783836,-14.223989],[135.428664,-14.715432],[135.500184,-14.997741],[136.295175,-15.550265],[137.06536,-15.870762],[137.580471,-16.215082],[138.303217,-16.807604],[138.585164,-16.806622],[139.108543,-17.062679],[139.260575,-17.371601],[140.215245,-17.710805],[140.875463,-17.369069],[141.07111,-16.832047],[141.274095,-16.38887],[141.398222,-15.840532],[141.702183,-15.044921],[141.56338,-14.561333],[141.63552,-14.270395],[141.519869,-13.698078],[141.65092,-12.944688],[141.842691,-12.741548],[141.68699,-12.407614],[141.928629,-11.877466],[142.118488,-11.328042],[142.143706,-11.042737],[142.51526,-10.668186],[142.79731,-11.157355],[142.866763,-11.784707],[143.115947,-11.90563],[143.158632,-12.325656],[143.522124,-12.834358],[143.597158,-13.400422],[143.561811,-13.763656]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[161.319797,-10.826367,162.398646,-10.204751],geometry:{type:"Polygon",coordinates:[[[162.119025,-10.482719],[162.398646,-10.826367],[161.700032,-10.820011],[161.319797,-10.204751],[161.917383,-10.446701],[162.119025,-10.482719]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[118.967808,-10.25865,120.775502,-9.36134],geometry:{type:"Polygon",coordinates:[[[120.715609,-10.239581],[120.295014,-10.25865],[118.967808,-9.557969],[119.90031,-9.36134],[120.425756,-9.665921],[120.775502,-9.969675],[120.715609,-10.239581]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[159.640003,-9.89521,160.852229,-9.24295],geometry:{type:"Polygon",coordinates:[[[160.852229,-9.872937],[160.462588,-9.89521],[159.849447,-9.794027],[159.640003,-9.63998],[159.702945,-9.24295],[160.362956,-9.400304],[160.688518,-9.610162],[160.852229,-9.872937]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[160.579997,-9.784312,161.679982,-8.320009],geometry:{type:"Polygon",coordinates:[[[161.679982,-9.599982],[161.529397,-9.784312],[160.788253,-8.917543],[160.579997,-8.320009],[160.920028,-8.320009],[161.280006,-9.120011],[161.679982,-9.599982]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[123.459989,-10.359987,127.335928,-8.273345],geometry:{type:"Polygon",coordinates:[[[124.43595,-10.140001],[123.579982,-10.359987],[123.459989,-10.239995],[123.550009,-9.900016],[123.980009,-9.290027],[124.968682,-8.89279],[125.086246,-8.656887],[125.947072,-8.432095],[126.644704,-8.398247],[126.957243,-8.273345],[127.335928,-8.397317],[126.967992,-8.668256],[125.925885,-9.106007],[125.08852,-9.393173],[124.43595,-10.140001]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[116.740141,-9.040895,119.126507,-8.095681],geometry:{type:"Polygon",coordinates:[[[117.900018,-8.095681],[118.260616,-8.362383],[118.87846,-8.280683],[119.126507,-8.705825],[117.970402,-8.906639],[117.277731,-9.040895],[116.740141,-9.032937],[117.083737,-8.457158],[117.632024,-8.449303],[117.900018,-8.095681]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[119.920929,-8.933666,122.903537,-8.094234],geometry:{type:"Polygon",coordinates:[[[122.903537,-8.094234],[122.756983,-8.649808],[121.254491,-8.933666],[119.924391,-8.810418],[119.920929,-8.444859],[120.715092,-8.236965],[121.341669,-8.53674],[122.007365,-8.46062],[122.903537,-8.094234]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[158.21115,-8.53829,159.917402,-7.320018],geometry:{type:"Polygon",coordinates:[[[159.875027,-8.33732],[159.917402,-8.53829],[159.133677,-8.114181],[158.586114,-7.754824],[158.21115,-7.421872],[158.359978,-7.320018],[158.820001,-7.560003],[159.640003,-8.020027],[159.875027,-8.33732]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[156.491358,-7.404767,157.538426,-6.599338],geometry:{type:"Polygon",coordinates:[[[157.538426,-7.34782],[157.33942,-7.404767],[156.90203,-7.176874],[156.491358,-6.765943],[156.542828,-6.599338],[157.14,-7.021638],[157.538426,-7.34782]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[105.365486,-8.751817,115.705527,-5.895919],geometry:{type:"Polygon",coordinates:[[[108.623479,-6.777674],[110.539227,-6.877358],[110.759576,-6.465186],[112.614811,-6.946036],[112.978768,-7.594213],[114.478935,-7.776528],[115.705527,-8.370807],[114.564511,-8.751817],[113.464734,-8.348947],[112.559672,-8.376181],[111.522061,-8.302129],[110.58615,-8.122605],[109.427667,-7.740664],[108.693655,-7.6416],[108.277763,-7.766657],[106.454102,-7.3549],[106.280624,-6.9249],[105.365486,-6.851416],[106.051646,-5.895919],[107.265009,-5.954985],[108.072091,-6.345762],[108.486846,-6.421985],[108.623479,-6.777674]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[134.112776,-6.895238,134.727002,-5.445042],geometry:{type:"Polygon",coordinates:[[[134.724624,-6.214401],[134.210134,-6.895238],[134.112776,-6.142467],[134.290336,-5.783058],[134.499625,-5.445042],[134.727002,-5.737582],[134.724624,-6.214401]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[154.514114,-6.919991,156.019965,-5.042431],geometry:{type:"Polygon",coordinates:[[[155.880026,-6.819997],[155.599991,-6.919991],[155.166994,-6.535931],[154.729192,-5.900828],[154.514114,-5.139118],[154.652504,-5.042431],[154.759991,-5.339984],[155.062918,-5.566792],[155.547746,-6.200655],[156.019965,-6.540014],[155.880026,-6.819997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[148.318937,-6.317754,152.338743,-4.14879],geometry:{type:"Polygon",coordinates:[[[151.982796,-5.478063],[151.459107,-5.56028],[151.30139,-5.840728],[150.754447,-6.083763],[150.241197,-6.317754],[149.709963,-6.316513],[148.890065,-6.02604],[148.318937,-5.747142],[148.401826,-5.437756],[149.298412,-5.583742],[149.845562,-5.505503],[149.99625,-5.026101],[150.139756,-5.001348],[150.236908,-5.53222],[150.807467,-5.455842],[151.089672,-5.113693],[151.647881,-4.757074],[151.537862,-4.167807],[152.136792,-4.14879],[152.338743,-4.312966],[152.318693,-4.867661],[151.982796,-5.478063]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[125.989034,-3.790983,127.249215,-3.129318],geometry:{type:"Polygon",coordinates:[[[127.249215,-3.459065],[126.874923,-3.790983],[126.183802,-3.607376],[125.989034,-3.177273],[127.000651,-3.129318],[127.249215,-3.459065]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[127.898891,-3.858472,130.834836,-2.802154],geometry:{type:"Polygon",coordinates:[[[130.471344,-3.093764],[130.834836,-3.858472],[129.990547,-3.446301],[129.155249,-3.362637],[128.590684,-3.428679],[127.898891,-3.393436],[128.135879,-2.84365],[129.370998,-2.802154],[130.471344,-3.093764]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[150.66205,-4.766427,153.140038,-2.500002],geometry:{type:"Polygon",coordinates:[[[153.140038,-4.499983],[152.827292,-4.766427],[152.638673,-4.176127],[152.406026,-3.789743],[151.953237,-3.462062],[151.384279,-3.035422],[150.66205,-2.741486],[150.939965,-2.500002],[151.479984,-2.779985],[151.820015,-2.999972],[152.239989,-3.240009],[152.640017,-3.659983],[153.019994,-3.980015],[153.140038,-4.499983]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[130.519558,-10.652476,150.801628,-.369538],geometry:{type:"Polygon",coordinates:[[[134.143368,-1.151867],[134.422627,-2.769185],[135.457603,-3.367753],[136.293314,-2.307042],[137.440738,-1.703513],[138.329727,-1.702686],[139.184921,-2.051296],[139.926684,-2.409052],[141.00021,-2.600151],[142.735247,-3.289153],[144.583971,-3.861418],[145.27318,-4.373738],[145.829786,-4.876498],[145.981922,-5.465609],[147.648073,-6.083659],[147.891108,-6.614015],[146.970905,-6.721657],[147.191874,-7.388024],[148.084636,-8.044108],[148.734105,-9.104664],[149.306835,-9.071436],[149.266631,-9.514406],[150.038728,-9.684318],[149.738798,-9.872937],[150.801628,-10.293687],[150.690575,-10.582713],[150.028393,-10.652476],[149.78231,-10.393267],[148.923138,-10.280923],[147.913018,-10.130441],[147.135443,-9.492444],[146.567881,-8.942555],[146.048481,-8.067414],[144.744168,-7.630128],[143.897088,-7.91533],[143.286376,-8.245491],[143.413913,-8.983069],[142.628431,-9.326821],[142.068259,-9.159596],[141.033852,-9.117893],[140.143415,-8.297168],[139.127767,-8.096043],[138.881477,-8.380935],[137.614474,-8.411683],[138.039099,-7.597882],[138.668621,-7.320225],[138.407914,-6.232849],[137.92784,-5.393366],[135.98925,-4.546544],[135.164598,-4.462931],[133.66288,-3.538853],[133.367705,-4.024819],[132.983956,-4.112979],[132.756941,-3.746283],[132.753789,-3.311787],[131.989804,-2.820551],[133.066845,-2.460418],[133.780031,-2.479848],[133.696212,-2.214542],[132.232373,-2.212526],[131.836222,-1.617162],[130.94284,-1.432522],[130.519558,-.93772],[131.867538,-.695461],[132.380116,-.369538],[133.985548,-.78021],[134.143368,-1.151867]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[118.767769,-5.6734,125.240501,1.643259],geometry:{type:"Polygon",coordinates:[[[125.240501,1.419836],[124.437035,.427881],[123.685505,.235593],[122.723083,.431137],[121.056725,.381217],[120.183083,.237247],[120.04087,-.519658],[120.935905,-1.408906],[121.475821,-.955962],[123.340565,-.615673],[123.258399,-1.076213],[122.822715,-.930951],[122.38853,-1.516858],[121.508274,-1.904483],[122.454572,-3.186058],[122.271896,-3.5295],[123.170963,-4.683693],[123.162333,-5.340604],[122.628515,-5.634591],[122.236394,-5.282933],[122.719569,-4.464172],[121.738234,-4.851331],[121.489463,-4.574553],[121.619171,-4.188478],[120.898182,-3.602105],[120.972389,-2.627643],[120.305453,-2.931604],[120.390047,-4.097579],[120.430717,-5.528241],[119.796543,-5.6734],[119.366906,-5.379878],[119.653606,-4.459417],[119.498835,-3.494412],[119.078344,-3.487022],[118.767769,-2.801999],[119.180974,-2.147104],[119.323394,-1.353147],[119.825999,.154254],[120.035702,.566477],[120.885779,1.309223],[121.666817,1.013944],[122.927567,.875192],[124.077522,.917102],[125.065989,1.643259],[125.240501,1.419836]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[127.39949,-.899996,128.688249,2.174596],geometry:{type:"Polygon",coordinates:[[[128.688249,1.132386],[128.635952,.258486],[128.12017,.356413],[127.968034,-.252077],[128.379999,-.780004],[128.100016,-.899996],[127.696475,-.266598],[127.39949,1.011722],[127.600512,1.810691],[127.932378,2.174596],[128.004156,1.628531],[128.594559,1.540811],[128.688249,1.132386]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[95.293026,-5.873285,106.108593,5.479821],geometry:{type:"Polygon",coordinates:[[[105.817655,-5.852356],[104.710384,-5.873285],[103.868213,-5.037315],[102.584261,-4.220259],[102.156173,-3.614146],[101.399113,-2.799777],[100.902503,-2.050262],[100.141981,-.650348],[99.26374,.183142],[98.970011,1.042882],[98.601351,1.823507],[97.699598,2.453184],[97.176942,3.308791],[96.424017,3.86886],[95.380876,4.970782],[95.293026,5.479821],[95.936863,5.439513],[97.484882,5.246321],[98.369169,4.26837],[99.142559,3.59035],[99.693998,3.174329],[100.641434,2.099381],[101.658012,2.083697],[102.498271,1.3987],[103.07684,.561361],[103.838396,.104542],[103.437645,-.711946],[104.010789,-1.059212],[104.369991,-1.084843],[104.53949,-1.782372],[104.887893,-2.340425],[105.622111,-2.428844],[106.108593,-3.061777],[105.857446,-4.305525],[105.817655,-5.852356]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[108.952658,-4.106984,119.181904,6.928053],geometry:{type:"Polygon",coordinates:[[[117.875627,1.827641],[118.996747,.902219],[117.811858,.784242],[117.478339,.102475],[117.521644,-.803723],[116.560048,-1.487661],[116.533797,-2.483517],[116.148084,-4.012726],[116.000858,-3.657037],[114.864803,-4.106984],[114.468652,-3.495704],[113.755672,-3.43917],[113.256994,-3.118776],[112.068126,-3.478392],[111.703291,-2.994442],[111.04824,-3.049426],[110.223846,-2.934032],[110.070936,-1.592874],[109.571948,-1.314907],[109.091874,-.459507],[108.952658,.415375],[109.069136,1.341934],[109.66326,2.006467],[110.396135,1.663775],[111.168853,1.850637],[111.370081,2.697303],[111.796928,2.885897],[112.995615,3.102395],[113.712935,3.893509],[114.204017,4.525874],[114.599961,4.900011],[115.45071,5.44773],[116.220741,6.143191],[116.725103,6.924771],[117.129626,6.928053],[117.643393,6.422166],[117.689075,5.98749],[118.347691,5.708696],[119.181904,5.407836],[119.110694,5.016128],[118.439727,4.966519],[118.618321,4.478202],[117.882035,4.137551],[117.313232,3.234428],[118.04833,2.28769],[117.875627,1.827641]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[121.919928,5.581003,126.537424,9.760335],geometry:{type:"Polygon",coordinates:[[[126.376814,8.414706],[126.478513,7.750354],[126.537424,7.189381],[126.196773,6.274294],[125.831421,7.293715],[125.363852,6.786485],[125.683161,6.049657],[125.396512,5.581003],[124.219788,6.161355],[123.93872,6.885136],[124.243662,7.36061],[123.610212,7.833527],[123.296071,7.418876],[122.825506,7.457375],[122.085499,6.899424],[121.919928,7.192119],[122.312359,8.034962],[122.942398,8.316237],[123.487688,8.69301],[123.841154,8.240324],[124.60147,8.514158],[124.764612,8.960409],[125.471391,8.986997],[125.412118,9.760335],[126.222714,9.286074],[126.306637,8.782487],[126.376814,8.414706]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[79.695167,5.96837,81.787959,9.824078],geometry:{type:"Polygon",coordinates:[[[81.21802,6.197141],[80.348357,5.96837],[79.872469,6.763463],[79.695167,8.200843],[80.147801,9.824078],[80.838818,9.268427],[81.304319,8.564206],[81.787959,7.523055],[81.637322,6.481775],[81.21802,6.197141]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-61.95,10,-60.895,10.89],geometry:{type:"Polygon",coordinates:[[[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[122.380055,9.022189,124.077936,11.232726],geometry:{type:"Polygon",coordinates:[[[123.982438,10.278779],[123.623183,9.950091],[123.309921,9.318269],[122.995883,9.022189],[122.380055,9.713361],[122.586089,9.981045],[122.837081,10.261157],[122.947411,10.881868],[123.49885,10.940624],[123.337774,10.267384],[124.077936,11.232726],[123.982438,10.278779]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[117.174275,8.3675,119.689677,11.369668],geometry:{type:"Polygon",coordinates:[[[118.504581,9.316383],[117.174275,8.3675],[117.664477,9.066889],[118.386914,9.6845],[118.987342,10.376292],[119.511496,11.369668],[119.689677,10.554291],[119.029458,10.003653],[118.504581,9.316383]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[121.883548,10.441017,123.120217,11.891755],geometry:{type:"Polygon",coordinates:[[[121.883548,11.891755],[122.483821,11.582187],[123.120217,11.58366],[123.100838,11.165934],[122.637714,10.741308],[122.00261,10.441017],[121.967367,10.905691],[122.03837,11.415841],[121.883548,11.891755]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[124.266762,10.134679,125.783465,12.557761],geometry:{type:"Polygon",coordinates:[[[125.502552,12.162695],[125.783465,11.046122],[125.011884,11.311455],[125.032761,10.975816],[125.277449,10.358722],[124.801819,10.134679],[124.760168,10.837995],[124.459101,10.88993],[124.302522,11.495371],[124.891013,11.415583],[124.87799,11.79419],[124.266762,12.557761],[125.227116,12.535721],[125.502552,12.162695]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[120.323436,12.20556,121.527394,13.466413],geometry:{type:"Polygon",coordinates:[[[121.527394,13.06959],[121.26219,12.20556],[120.833896,12.704496],[120.323436,13.466413],[121.180128,13.429697],[121.527394,13.06959]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[119.883773,12.536677,124.181289,18.505227],geometry:{type:"Polygon",coordinates:[[[121.321308,18.504065],[121.937601,18.218552],[122.246006,18.47895],[122.336957,18.224883],[122.174279,17.810283],[122.515654,17.093505],[122.252311,16.262444],[121.662786,15.931018],[121.50507,15.124814],[121.728829,14.328376],[122.258925,14.218202],[122.701276,14.336541],[123.950295,13.782131],[123.855107,13.237771],[124.181289,12.997527],[124.077419,12.536677],[123.298035,13.027526],[122.928652,13.55292],[122.671355,13.185836],[122.03465,13.784482],[121.126385,13.636687],[120.628637,13.857656],[120.679384,14.271016],[120.991819,14.525393],[120.693336,14.756671],[120.564145,14.396279],[120.070429,14.970869],[119.920929,15.406347],[119.883773,16.363704],[120.286488,16.034629],[120.390047,17.599081],[120.715867,18.505227],[121.321308,18.504065]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-67.242428,17.946553,-65.591004,18.520601],geometry:{type:"Polygon",coordinates:[[[-65.591004,18.228035],[-65.847164,17.975906],[-66.599934,17.981823],[-67.184162,17.946553],[-67.242428,18.37446],[-67.100679,18.520601],[-66.282434,18.514762],[-65.771303,18.426679],[-65.591004,18.228035]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-78.337719,17.701116,-76.199659,18.524218],geometry:{type:"Polygon",coordinates:[[[-76.902561,17.868238],[-77.206341,17.701116],[-77.766023,17.861597],[-78.337719,18.225968],[-78.217727,18.454533],[-77.797365,18.524218],[-77.569601,18.490525],[-76.896619,18.400867],[-76.365359,18.160701],[-76.199659,17.886867],[-76.902561,17.868238]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-74.458034,17.598564,-68.317943,19.915684],geometry:{type:"Polygon",coordinates:[[[-72.579673,19.871501],[-71.712361,19.714456],[-71.587304,19.884911],[-70.806706,19.880286],[-70.214365,19.622885],[-69.950815,19.648],[-69.76925,19.293267],[-69.222126,19.313214],[-69.254346,19.015196],[-68.809412,18.979074],[-68.317943,18.612198],[-68.689316,18.205142],[-69.164946,18.422648],[-69.623988,18.380713],[-69.952934,18.428307],[-70.133233,18.245915],[-70.517137,18.184291],[-70.669298,18.426886],[-70.99995,18.283329],[-71.40021,17.598564],[-71.657662,17.757573],[-71.708305,18.044997],[-72.372476,18.214961],[-72.844411,18.145611],[-73.454555,18.217906],[-73.922433,18.030993],[-74.458034,18.34255],[-74.369925,18.664908],[-73.449542,18.526053],[-72.694937,18.445799],[-72.334882,18.668422],[-72.79165,19.101625],[-72.784105,19.483591],[-73.415022,19.639551],[-73.189791,19.915684],[-72.579673,19.871501]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[108.626217,18.197701,111.010051,20.101254],geometry:{type:"Polygon",coordinates:[[[110.339188,18.678395],[109.47521,18.197701],[108.655208,18.507682],[108.626217,19.367888],[109.119056,19.821039],[110.211599,20.101254],[110.786551,20.077534],[111.010051,19.69593],[110.570647,19.255879],[110.339188,18.678395]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-156.07347,18.91619,-154.80741,20.26721],geometry:{type:"Polygon",coordinates:[[[-155.54211,19.08348],[-155.68817,18.91619],[-155.93665,19.05939],[-155.90806,19.33888],[-156.07347,19.70294],[-156.02368,19.81422],[-155.85008,19.97729],[-155.91907,20.17395],[-155.86108,20.26721],[-155.78505,20.2487],[-155.40214,20.07975],[-155.22452,19.99302],[-155.06226,19.8591],[-154.80741,19.50871],[-154.83147,19.45328],[-155.22217,19.23972],[-155.54211,19.08348]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-156.71055,20.57241,-155.99566,21.01249],geometry:{type:"Polygon",coordinates:[[[-156.07926,20.64397],[-156.41445,20.57241],[-156.58673,20.783],[-156.70167,20.8643],[-156.71055,20.92676],[-156.61258,21.01249],[-156.25711,20.91745],[-155.99566,20.76404],[-156.07926,20.64397]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-157.32521,21.06873,-156.75824,21.21958],geometry:{type:"Polygon",coordinates:[[[-156.75824,21.17684],[-156.78933,21.06873],[-157.32521,21.09777],[-157.25027,21.21958],[-156.75824,21.17684]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-158.29265,21.26442,-157.65283,21.71696],geometry:{type:"Polygon",coordinates:[[[-157.65283,21.32217],[-157.70703,21.26442],[-157.7786,21.27729],[-158.12667,21.31244],[-158.2538,21.53919],[-158.29265,21.57912],[-158.0252,21.71696],[-157.94161,21.65272],[-157.65283,21.32217]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-159.80051,21.88299,-159.34512,22.23618],geometry:{type:"Polygon",coordinates:[[[-159.34512,21.982],[-159.46372,21.88299],[-159.80051,22.06533],[-159.74877,22.1382],[-159.5962,22.23618],[-159.36569,22.21494],[-159.34512,21.982]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-84.974911,19.855481,-74.178025,23.188611],geometry:{type:"Polygon",coordinates:[[[-79.679524,22.765303],[-79.281486,22.399202],[-78.347434,22.512166],[-77.993296,22.277194],[-77.146422,21.657851],[-76.523825,21.20682],[-76.19462,21.220565],[-75.598222,21.016624],[-75.67106,20.735091],[-74.933896,20.693905],[-74.178025,20.284628],[-74.296648,20.050379],[-74.961595,19.923435],[-75.63468,19.873774],[-76.323656,19.952891],[-77.755481,19.855481],[-77.085108,20.413354],[-77.492655,20.673105],[-78.137292,20.739949],[-78.482827,21.028613],[-78.719867,21.598114],[-79.285,21.559175],[-80.217475,21.827324],[-80.517535,22.037079],[-81.820943,22.192057],[-82.169992,22.387109],[-81.795002,22.636965],[-82.775898,22.68815],[-83.494459,22.168518],[-83.9088,22.154565],[-84.052151,21.910575],[-84.54703,21.801228],[-84.974911,21.896028],[-84.447062,22.20495],[-84.230357,22.565755],[-83.77824,22.788118],[-83.267548,22.983042],[-82.510436,23.078747],[-82.268151,23.188611],[-81.404457,23.117271],[-80.618769,23.10598],[-79.679524,22.765303]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-78.40848,23.71,-77.53466,25.2103],geometry:{type:"Polygon",coordinates:[[[-77.53466,23.75975],[-77.78,23.71],[-78.03405,24.28615],[-78.40848,24.57564],[-78.19087,25.2103],[-77.89,25.17],[-77.54,24.34],[-77.53466,23.75975]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[120.106189,21.970571,121.951244,25.295459],geometry:{type:"Polygon",coordinates:[[[121.175632,22.790857],[120.74708,21.970571],[120.220083,22.814861],[120.106189,23.556263],[120.69468,24.538451],[121.495044,25.295459],[121.951244,24.997596],[121.777818,24.394274],[121.175632,22.790857]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-78.98,26.42,-77.82,26.87],geometry:{type:"Polygon",coordinates:[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-77.79,25.87918,-77,27.04],geometry:{type:"Polygon",coordinates:[[[-77,26.59],[-77.17255,25.87918],[-77.35641,26.00735],[-77.34,26.53],[-77.78802,26.92516],[-77.79,27.04],[-77,26.59]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[132.363115,32.704567,134.766379,34.364931],geometry:{type:"Polygon",coordinates:[[[134.638428,34.149234],[134.766379,33.806335],[134.203416,33.201178],[133.79295,33.521985],[133.280268,33.28957],[133.014858,32.704567],[132.363115,32.989382],[132.371176,33.463642],[132.924373,34.060299],[133.492968,33.944621],[133.904106,34.364931],[134.638428,34.149234]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[32.256667,34.571869,34.576474,35.671596],geometry:{type:"Polygon",coordinates:[[[34.576474,35.671596],[33.900804,35.245756],[33.973617,35.058506],[34.004881,34.978098],[32.979827,34.571869],[32.490296,34.701655],[32.256667,35.103232],[32.73178,35.140026],[32.802474,35.145504],[32.946961,35.386703],[33.667227,35.373216],[34.576474,35.671596]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[23.514978,34.919988,26.290003,35.705004],geometry:{type:"Polygon",coordinates:[[[23.69998,35.705004],[24.246665,35.368022],[25.025015,35.424996],[25.769208,35.354018],[25.745023,35.179998],[26.290003,35.29999],[26.164998,35.004995],[24.724982,34.919988],[24.735007,35.084991],[23.514978,35.279992],[23.69998,35.705004]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[12.431004,36.619987,15.520376,38.231155],geometry:{type:"Polygon",coordinates:[[[15.520376,38.231155],[15.160243,37.444046],[15.309898,37.134219],[15.099988,36.619987],[14.335229,36.996631],[13.826733,37.104531],[12.431004,37.61295],[12.570944,38.126381],[13.741156,38.034966],[14.761249,38.143874],[15.520376,38.231155]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[8.159998,38.906618,9.809975,41.209991],geometry:{type:"Polygon",coordinates:[[[9.210012,41.209991],[9.809975,40.500009],[9.669519,39.177376],[9.214818,39.240473],[8.806936,38.906618],[8.428302,39.171847],[8.388253,40.378311],[8.159998,40.950007],[8.709991,40.899984],[9.210012,41.209991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[129.408463,31.029579,141.914263,41.37856],geometry:{type:"Polygon",coordinates:[[[140.976388,37.142074],[140.59977,36.343983],[140.774074,35.842877],[140.253279,35.138114],[138.975528,34.6676],[137.217599,34.606286],[135.792983,33.464805],[135.120983,33.849071],[135.079435,34.596545],[133.340316,34.375938],[132.156771,33.904933],[130.986145,33.885761],[132.000036,33.149992],[131.33279,31.450355],[130.686318,31.029579],[130.20242,31.418238],[130.447676,32.319475],[129.814692,32.61031],[129.408463,33.296056],[130.353935,33.604151],[130.878451,34.232743],[131.884229,34.749714],[132.617673,35.433393],[134.608301,35.731618],[135.677538,35.527134],[136.723831,37.304984],[137.390612,36.827391],[138.857602,37.827485],[139.426405,38.215962],[140.05479,39.438807],[139.883379,40.563312],[140.305783,41.195005],[141.368973,41.37856],[141.914263,39.991616],[141.884601,39.180865],[140.959489,38.174001],[140.976388,37.142074]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[8.544213,41.380007,9.560016,43.009985],geometry:{type:"Polygon",coordinates:[[[9.560016,42.152492],[9.229752,41.380007],[8.775723,41.583612],[8.544213,42.256517],[8.746009,42.628122],[9.390001,43.009985],[9.560016,42.152492]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[139.817544,41.569556,145.543137,45.551483],geometry:{type:"Polygon",coordinates:[[[143.910162,44.1741],[144.613427,43.960883],[145.320825,44.384733],[145.543137,43.262088],[144.059662,42.988358],[143.18385,41.995215],[141.611491,42.678791],[141.067286,41.584594],[139.955106,41.569556],[139.817544,42.563759],[140.312087,43.333273],[141.380549,43.388825],[141.671952,44.772125],[141.967645,45.551483],[143.14287,44.510358],[143.910162,44.1741]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-64.39261,45.96818,-62.01208,47.03601],geometry:{type:"Polygon",coordinates:[[[-63.6645,46.55001],[-62.9393,46.41587],[-62.01208,46.44314],[-62.50391,46.03339],[-62.87433,45.96818],[-64.1428,46.39265],[-64.39261,46.72747],[-64.01486,47.03601],[-63.6645,46.55001]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-64.51912,49.08717,-61.806305,49.95718],geometry:{type:"Polygon",coordinates:[[[-61.806305,49.10506],[-62.29318,49.08717],[-63.58926,49.40069],[-64.51912,49.87304],[-64.17322,49.95718],[-62.85829,49.70641],[-61.835585,49.28855],[-61.806305,49.10506]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-128.444584,48.370846,-123.510002,50.770648],geometry:{type:"Polygon",coordinates:[[[-123.510002,48.510011],[-124.012891,48.370846],[-125.655013,48.825005],[-125.954994,49.179996],[-126.850004,49.53],[-127.029993,49.814996],[-128.059336,49.994959],[-128.444584,50.539138],[-128.358414,50.770648],[-127.308581,50.552574],[-126.695001,50.400903],[-125.755007,50.295018],[-125.415002,49.950001],[-124.920768,49.475275],[-123.922509,49.062484],[-123.510002,48.510011]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-59.419494,46.618292,-52.648099,51.632094],geometry:{type:"Polygon",coordinates:[[[-56.134036,50.68701],[-56.795882,49.812309],[-56.143105,50.150117],[-55.471492,49.935815],[-55.822401,49.587129],[-54.935143,49.313011],[-54.473775,49.556691],[-53.476549,49.249139],[-53.786014,48.516781],[-53.086134,48.687804],[-52.958648,48.157164],[-52.648099,47.535548],[-53.069158,46.655499],[-53.521456,46.618292],[-54.178936,46.807066],[-53.961869,47.625207],[-54.240482,47.752279],[-55.400773,46.884994],[-55.997481,46.91972],[-55.291219,47.389562],[-56.250799,47.632545],[-57.325229,47.572807],[-59.266015,47.603348],[-59.419494,47.899454],[-58.796586,48.251525],[-59.231625,48.523188],[-58.391805,49.125581],[-57.35869,50.718274],[-56.73865,51.287438],[-55.870977,51.632094],[-55.406974,51.588273],[-55.600218,51.317075],[-56.134036,50.68701]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-133.239664,52.180433,-131.179043,54.169975],geometry:{type:"Polygon",coordinates:[[[-132.710008,54.040009],[-132.710009,54.040009],[-132.710008,54.040009],[-132.710008,54.040009],[-131.74999,54.120004],[-132.04948,52.984621],[-131.179043,52.180433],[-131.57783,52.182371],[-132.180428,52.639707],[-132.549992,53.100015],[-133.054611,53.411469],[-133.239664,53.85108],[-133.180004,54.169975],[-132.710008,54.040009]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[141.594076,45.966755,144.654148,54.365881],geometry:{type:"Polygon",coordinates:[[[143.648007,50.7476],[144.654148,48.976391],[143.173928,49.306551],[142.558668,47.861575],[143.533492,46.836728],[143.505277,46.137908],[142.747701,46.740765],[142.09203,45.966755],[141.906925,46.805929],[142.018443,47.780133],[141.904445,48.859189],[142.1358,49.615163],[142.179983,50.952342],[141.594076,51.935435],[141.682546,53.301966],[142.606934,53.762145],[142.209749,54.225476],[142.654786,54.365881],[142.914616,53.704578],[143.260848,52.74076],[143.235268,51.75666],[143.648007,50.7476]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-9.977086,51.669301,-5.661949,55.17286],geometry:{type:"Polygon",coordinates:[[[-6.788857,52.260118],[-8.561617,51.669301],[-9.977086,51.820455],[-9.166283,52.864629],[-9.688525,53.881363],[-8.327987,54.664519],[-7.572168,55.131622],[-6.733847,55.17286],[-5.661949,54.554603],[-6.197885,53.867565],[-6.032985,53.153164],[-6.788857,52.260118]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[10.903914,54.800015,12.690006,56.111407],geometry:{type:"Polygon",coordinates:[[[12.690006,55.609991],[12.089991,54.800015],[11.043543,55.364864],[10.903914,55.779955],[12.370904,56.111407],[12.690006,55.609991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-154.670993,56.734677,-152.141147,57.968968],geometry:{type:"Polygon",coordinates:[[[-153.006314,57.115842],[-154.00509,56.734677],[-154.516403,56.992749],[-154.670993,57.461196],[-153.76278,57.816575],[-153.228729,57.968968],[-152.564791,57.901427],[-152.141147,57.591059],[-153.006314,57.115842]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-6.149981,49.96,1.681531,58.635],geometry:{type:"Polygon",coordinates:[[[-3.005005,58.635],[-4.073828,57.553025],[-3.055002,57.690019],[-1.959281,57.6848],[-2.219988,56.870017],[-3.119003,55.973793],[-2.085009,55.909998],[-1.114991,54.624986],[-.430485,54.464376],[.184981,53.325014],[.469977,52.929999],[1.681531,52.73952],[1.559988,52.099998],[1.050562,51.806761],[1.449865,51.289428],[.550334,50.765739],[-.787517,50.774989],[-2.489998,50.500019],[-2.956274,50.69688],[-3.617448,50.228356],[-4.542508,50.341837],[-5.245023,49.96],[-5.776567,50.159678],[-4.30999,51.210001],[-3.414851,51.426009],[-4.984367,51.593466],[-5.267296,51.9914],[-4.222347,52.301356],[-4.770013,52.840005],[-4.579999,53.495004],[-3.09208,53.404441],[-2.945009,53.985],[-3.630005,54.615013],[-4.844169,54.790971],[-5.082527,55.061601],[-4.719112,55.508473],[-5.047981,55.783986],[-5.586398,55.311146],[-5.644999,56.275015],[-6.149981,56.78501],[-5.786825,57.818848],[-5.009999,58.630013],[-4.211495,58.550845],[-3.005005,58.635]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-167.455277,59.754441,-165.579164,60.38417],geometry:{type:"Polygon",coordinates:[[[-165.579164,59.909987],[-166.19277,59.754441],[-166.848337,59.941406],[-167.455277,60.213069],[-166.467792,60.38417],[-165.67443,60.293607],[-165.579164,59.909987]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-80.36215,61.63308,-79.26582,62.3856],geometry:{type:"Polygon",coordinates:[[[-79.26582,62.158675],[-79.65752,61.63308],[-80.09956,61.7181],[-80.36215,62.01649],[-80.315395,62.085565],[-79.92939,62.3856],[-79.52002,62.36371],[-79.26582,62.158675]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-83.99367,62.15922,-81.87699,62.91409],geometry:{type:"Polygon",coordinates:[[[-81.89825,62.7108],[-83.06857,62.15922],[-83.77462,62.18231],[-83.99367,62.4528],[-83.25048,62.91409],[-81.87699,62.90458],[-81.89825,62.7108]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-171.791111,62.976931,-168.689439,63.782515],geometry:{type:"Polygon",coordinates:[[[-171.731657,63.782515],[-171.114434,63.592191],[-170.491112,63.694975],[-169.682505,63.431116],[-168.689439,63.297506],[-168.771941,63.188598],[-169.52944,62.976931],[-170.290556,63.194438],[-170.671386,63.375822],[-171.553063,63.317789],[-171.791111,63.405846],[-171.731657,63.782515]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-87.221983,63.052379,-80.103451,65.738778],geometry:{type:"Polygon",coordinates:[[[-85.161308,65.657285],[-84.975764,65.217518],[-84.464012,65.371772],[-83.882626,65.109618],[-82.787577,64.766693],[-81.642014,64.455136],[-81.55344,63.979609],[-80.817361,64.057486],[-80.103451,63.725981],[-80.99102,63.411246],[-82.547178,63.651722],[-83.108798,64.101876],[-84.100417,63.569712],[-85.523405,63.052379],[-85.866769,63.637253],[-87.221983,63.541238],[-86.35276,64.035833],[-86.224886,64.822917],[-85.883848,65.738778],[-85.161308,65.657285]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-24.326184,63.496383,-13.609732,66.526792],geometry:{type:"Polygon",coordinates:[[[-14.508695,66.455892],[-14.739637,65.808748],[-13.609732,65.126671],[-14.909834,64.364082],[-17.794438,63.678749],[-18.656246,63.496383],[-19.972755,63.643635],[-22.762972,63.960179],[-21.778484,64.402116],[-23.955044,64.89113],[-22.184403,65.084968],[-22.227423,65.378594],[-24.326184,65.611189],[-23.650515,66.262519],[-22.134922,66.410469],[-20.576284,65.732112],[-19.056842,66.276601],[-17.798624,65.993853],[-16.167819,66.526792],[-14.508695,66.455892]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-77.2364,67.09873,-75.10333,68.28721],geometry:{type:"Polygon",coordinates:[[[-75.86588,67.14886],[-76.98687,67.09873],[-77.2364,67.58809],[-76.81166,68.14856],[-75.89521,68.28721],[-75.1145,68.01036],[-75.10333,67.58202],[-75.21597,67.44425],[-75.86588,67.14886]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,64.25269,-169.89958,68.963636],geometry:{type:"Polygon",coordinates:[[[-175.01425,66.58435],[-174.33983,66.33556],[-174.57182,67.06219],[-171.85731,66.91308],[-169.89958,65.97724],[-170.89107,65.54139],[-172.53025,65.43791],[-172.555,64.46079],[-172.95533,64.25269],[-173.89184,64.2826],[-174.65392,64.63125],[-175.98353,64.92288],[-176.20716,65.35667],[-177.22266,65.52024],[-178.35993,65.39052],[-178.90332,65.74044],[-178.68611,66.11211],[-179.88377,65.87456],[-179.43268,65.40411],[-180,64.979709],[-180,68.963636],[-177.55,68.2],[-174.92825,67.20589],[-175.01425,66.58435]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-99.797401,68.75704,-95.647681,70.14354],geometry:{type:"Polygon",coordinates:[[[-95.647681,69.10769],[-96.269521,68.75704],[-97.617401,69.06003],[-98.431801,68.9507],[-99.797401,69.40003],[-98.917401,69.71003],[-98.218261,70.14354],[-97.157401,69.86003],[-96.557401,69.68003],[-96.257401,69.49003],[-95.647681,69.10769]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[178.7253,70.78114,180,71.515714],geometry:{type:"Polygon",coordinates:[[[180,70.832199],[178.903425,70.78114],[178.7253,71.0988],[180,71.515714],[180,70.832199]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,70.832199,-177.577945,71.55762],geometry:{type:"Polygon",coordinates:[[[-178.69378,70.89302],[-180,70.832199],[-180,71.515714],[-179.871875,71.55762],[-179.02433,71.55553],[-177.577945,71.26948],[-177.663575,71.13277],[-178.69378,70.89302]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-168.110474,-53.856384,-34.72998,71.920471],geometry:{type:"Polygon",coordinates:[[[-90.547119,69.497681],[-90.551514,68.475098],[-89.215088,69.258728],[-88.019592,68.615112],[-88.317505,67.873474],[-87.350098,67.19873],[-86.306091,67.921509],[-85.576599,68.784485],[-85.521912,69.88208],[-84.100769,69.805481],[-82.622498,69.658325],[-81.280396,69.162109],[-81.220215,68.66571],[-81.964294,68.132507],[-81.259277,67.59729],[-81.386475,67.110901],[-83.344482,66.411682],[-84.735413,66.257324],[-85.769409,66.558289],[-86.067627,66.056274],[-87.031372,65.213074],[-87.323181,64.775696],[-88.48291,64.099121],[-89.914429,64.032715],[-90.703979,63.610291],[-90.77002,62.960327],[-91.933411,62.835083],[-93.156982,62.024719],[-94.241516,60.898682],[-94.629272,60.110291],[-94.684509,58.948914],[-93.215027,58.782104],[-92.764587,57.845703],[-92.296997,57.087097],[-90.897705,57.284729],[-89.03949,56.851685],[-88.039795,56.47168],[-87.324219,55.999084],[-86.071228,55.723877],[-85.01178,55.302673],[-83.360474,55.244873],[-82.272827,55.148315],[-82.436218,54.282288],[-82.125,53.2771],[-81.400696,52.157898],[-79.912903,51.208496],[-79.143005,51.533875],[-78.601929,52.562073],[-79.124207,54.141479],[-79.82959,54.667725],[-78.228699,55.136475],[-77.095581,55.837524],[-76.541382,56.534302],[-76.623108,57.202698],[-77.302185,58.052124],[-78.516907,58.804688],[-77.33667,59.852722],[-77.772705,60.757874],[-78.106812,62.319702],[-77.410583,62.550476],[-75.696228,62.278503],[-74.668213,62.181091],[-73.839905,62.443909],[-72.908508,62.105103],[-71.677002,61.52533],[-71.373718,61.137085],[-69.590393,61.061523],[-69.6203,60.221313],[-69.287903,58.957275],[-68.374512,58.801086],[-67.64978,58.212097],[-66.201782,58.767273],[-65.245178,59.870728],[-64.583496,60.335693],[-63.804687,59.442688],[-62.50238,58.167114],[-61.396484,56.967529],[-61.798584,56.339478],[-60.468506,55.775513],[-59.56958,55.204102],[-57.975098,54.945496],[-57.333191,54.626526],[-56.93689,53.780273],[-56.158081,53.647522],[-55.756287,53.270508],[-55.683289,52.146729],[-56.40918,51.770691],[-57.126892,51.419678],[-58.77478,51.06427],[-60.033081,50.24292],[-61.723572,50.080505],[-63.862488,50.291077],[-65.363281,50.298279],[-66.398987,50.228882],[-67.236328,49.511475],[-68.511108,49.068481],[-69.953613,47.744873],[-71.104492,46.821716],[-70.255188,46.986084],[-68.650024,48.30011],[-66.552429,49.133118],[-65.056213,49.23291],[-64.171021,48.742493],[-65.115479,48.070923],[-64.798523,46.993103],[-64.472107,46.238525],[-63.173279,45.739075],[-61.520691,45.883911],[-60.518127,47.007874],[-60.448608,46.282715],[-59.802795,45.920471],[-61.039795,45.26532],[-63.2547,44.670288],[-64.246582,44.265503],[-65.364075,43.545288],[-66.123413,43.618713],[-66.161682,44.465088],[-64.425476,45.292114],[-66.026001,45.259277],[-67.13739,45.137512],[-66.9646,44.809692],[-68.032471,44.325317],[-69.059998,43.980103],[-70.116089,43.684082],[-70.690002,43.03009],[-70.81488,42.865295],[-70.825012,42.335083],[-70.494995,41.805115],[-70.080017,41.78009],[-70.184998,42.145081],[-69.884888,41.922913],[-69.965027,41.637085],[-70.640015,41.475098],[-71.1203,41.494507],[-71.859985,41.320129],[-72.294983,41.270081],[-72.876404,41.220703],[-73.710022,40.931091],[-72.241211,41.119507],[-71.945007,40.930115],[-73.34491,40.630127],[-73.981995,40.628113],[-73.952271,40.750671],[-74.256714,40.473511],[-73.962402,40.427673],[-74.178406,39.70929],[-74.906006,38.939514],[-74.980408,39.196472],[-75.200012,39.248474],[-75.528076,39.498474],[-75.320007,38.960083],[-75.083496,38.781311],[-75.056702,38.404114],[-75.37738,38.015503],[-75.940186,37.216919],[-76.031189,37.256714],[-75.721985,37.937073],[-76.232788,38.319275],[-76.349976,39.150085],[-76.542725,38.717712],[-76.329285,38.083313],[-76.960022,38.23291],[-76.301575,37.918091],[-76.258728,36.966492],[-75.971802,36.897278],[-75.867981,36.551331],[-75.727478,35.55072],[-76.363098,34.808472],[-77.397583,34.512085],[-78.054871,33.925476],[-78.554321,33.861328],[-79.060608,33.49408],[-79.203491,33.158508],[-80.30127,32.509277],[-80.86499,32.033325],[-81.336304,31.440491],[-81.490417,30.730103],[-81.313721,30.035522],[-80.97998,29.180115],[-80.535583,28.472107],[-80.530029,28.0401],[-80.056519,26.880127],[-80.088013,26.205688],[-80.13147,25.816895],[-80.380981,25.206299],[-80.679993,25.080078],[-81.172119,25.201294],[-81.330017,25.640076],[-81.710022,25.870117],[-82.23999,26.730103],[-82.705078,27.495117],[-82.855286,27.886292],[-82.650024,28.55011],[-82.929993,29.100098],[-83.709595,29.936707],[-84.099976,30.090088],[-85.108826,29.636292],[-85.287781,29.686096],[-85.77301,30.15271],[-86.400024,30.400085],[-87.530273,30.274475],[-88.417786,30.384888],[-89.180481,30.316101],[-89.604919,30.176331],[-89.413696,29.894287],[-89.429993,29.488708],[-89.21759,29.291077],[-89.408203,29.159729],[-89.779297,29.307129],[-90.154602,29.117493],[-90.880188,29.148682],[-91.626709,29.677124],[-92.499084,29.552307],[-93.226379,29.783875],[-93.848389,29.713684],[-94.690002,29.480103],[-95.600281,28.738708],[-96.593994,28.307495],[-97.140015,27.830078],[-97.369995,27.380127],[-97.380005,26.690125],[-97.330017,26.210083],[-97.140198,25.869507],[-97.138611,25.86792],[-97.141785,25.865906],[-97.528076,24.992126],[-97.702881,24.272278],[-97.776001,22.932678],[-97.872375,22.444275],[-97.698975,21.898682],[-97.388977,21.411072],[-97.18927,20.635498],[-96.525513,19.89093],[-96.292114,19.320496],[-95.900879,18.828125],[-94.838989,18.562683],[-94.42572,18.144287],[-93.548584,18.423889],[-92.786072,18.524902],[-92.037292,18.704712],[-91.407898,18.876099],[-90.77179,19.284119],[-90.533508,19.867493],[-90.451477,20.70752],[-90.278625,20.999878],[-89.601318,21.261719],[-88.543884,21.493713],[-87.658386,21.458923],[-87.05188,21.543518],[-86.812012,21.331482],[-86.845886,20.849915],[-87.383301,20.255493],[-87.620972,19.646484],[-87.436707,19.472473],[-87.586487,19.0401],[-87.837219,18.259888],[-88.090576,18.516724],[-88.299988,18.500122],[-88.296326,18.353271],[-88.106812,18.348694],[-88.123413,18.076721],[-88.285278,17.644287],[-88.197876,17.489502],[-88.302612,17.131714],[-88.239502,17.036072],[-88.355408,16.530884],[-88.551819,16.265503],[-88.732422,16.233704],[-88.930603,15.887329],[-88.604614,15.706482],[-88.518311,15.85553],[-88.224976,15.727722],[-88.121094,15.688721],[-87.901794,15.864502],[-87.615601,15.878906],[-87.522888,15.797302],[-87.367676,15.846924],[-86.903198,15.756714],[-86.440918,15.782898],[-86.119202,15.893494],[-86.001892,16.005493],[-85.683289,15.953674],[-85.44397,15.885681],[-85.182373,15.909302],[-84.983704,15.995911],[-84.526978,15.8573],[-84.368225,15.835083],[-84.062988,15.648315],[-83.773987,15.424072],[-83.4104,15.270874],[-83.147217,14.995911],[-83.233215,14.899902],[-83.28418,14.676697],[-83.182129,14.31073],[-83.412476,13.970093],[-83.519775,13.567688],[-83.552185,13.127075],[-83.498474,12.869324],[-83.473328,12.419128],[-83.626099,12.320923],[-83.719604,11.893127],[-83.650879,11.629089],[-83.855408,11.373291],[-83.808899,11.103088],[-83.655579,10.938904],[-83.402283,10.395508],[-83.015686,9.993103],[-82.546204,9.566284],[-82.187073,9.20752],[-82.207581,8.995728],[-81.808594,8.950684],[-81.714111,9.032104],[-81.439209,8.786316],[-80.947327,8.858521],[-80.521912,9.111084],[-79.914612,9.312683],[-79.573303,9.611694],[-79.021179,9.552917],[-79.058411,9.454712],[-78.500916,9.420471],[-78.055908,9.247681],[-77.729492,8.946899],[-77.353271,8.670471],[-76.836609,8.638672],[-76.086304,9.336914],[-75.674622,9.443298],[-75.664673,9.774109],[-75.480408,10.61908],[-74.906921,11.08313],[-74.276672,11.102112],[-74.197205,11.310486],[-73.414673,11.227112],[-72.627808,11.732117],[-72.23822,11.955688],[-71.754089,12.437317],[-71.39978,12.376099],[-71.13739,12.113098],[-71.331604,11.776306],[-71.359985,11.5401],[-71.947021,11.423279],[-71.620789,10.969482],[-71.632996,10.446472],[-72.074097,9.865723],[-71.695618,9.072327],[-71.264587,9.137329],[-71.039978,9.860107],[-71.350098,10.211914],[-71.400574,10.969116],[-70.155212,11.375488],[-70.293823,11.846924],[-69.943176,12.162292],[-69.58429,11.459717],[-68.882996,11.443481],[-68.233276,10.885681],[-68.194092,10.554688],[-67.296204,10.545898],[-66.227783,10.648682],[-65.655212,10.200928],[-64.890381,10.077271],[-64.329407,10.389709],[-64.317993,10.641479],[-63.079285,10.701721],[-61.88092,10.715698],[-62.730103,10.420288],[-62.388489,9.948303],[-61.588684,9.873108],[-60.830505,9.381287],[-60.671204,8.580322],[-60.150085,8.602905],[-59.758301,8.367126],[-59.101685,7.999329],[-58.48291,7.347717],[-58.454895,6.832886],[-58.078125,6.809082],[-57.542175,6.321289],[-57.1474,5.973083],[-55.94928,5.772888],[-55.841797,5.953125],[-55.033203,6.02533],[-53.958008,5.756531],[-53.618408,5.646484],[-52.88208,5.409912],[-51.823303,4.565918],[-51.657776,4.156311],[-51.317078,4.203491],[-51.069702,3.650513],[-50.508789,1.901489],[-49.973999,1.736511],[-49.947083,1.046326],[-50.69928,.223083],[-50.388184,-.078369],[-48.620483,-.235413],[-48.584412,-1.237793],[-47.82489,-.581604],[-46.566589,-.940979],[-44.905701,-1.551697],[-44.417603,-2.137695],[-44.581604,-2.691284],[-43.418701,-2.383118],[-41.472595,-2.911987],[-39.978577,-2.872986],[-38.500305,-3.700623],[-37.223206,-4.820923],[-36.452881,-5.109375],[-35.597778,-5.149475],[-35.235413,-5.464905],[-34.895996,-6.73822],[-34.72998,-7.343201],[-35.128174,-8.996399],[-35.636902,-9.649292],[-37.046509,-11.04071],[-37.683594,-12.171204],[-38.423889,-13.038086],[-38.673889,-13.057678],[-38.953186,-13.793396],[-38.882324,-15.666992],[-39.161011,-17.208374],[-39.267273,-17.867676],[-39.583496,-18.262207],[-39.760803,-19.599121],[-40.774719,-20.90448],[-40.944702,-21.937317],[-41.754089,-22.370605],[-41.988281,-22.970093],[-43.074707,-22.967712],[-44.647827,-23.35199],[-45.352112,-23.796814],[-46.472107,-24.088989],[-47.648987,-24.885193],[-48.495483,-25.877014],[-48.640991,-26.623718],[-48.47467,-27.175903],[-48.661499,-28.186096],[-48.888428,-28.674072],[-49.58728,-29.224487],[-50.696899,-30.984375],[-51.576172,-31.77771],[-52.256104,-32.2453],[-52.712097,-33.196594],[-53.373596,-33.768311],[-53.806396,-34.39679],[-54.935791,-34.952576],[-55.674011,-34.752686],[-56.21521,-34.859802],[-57.139709,-34.430481],[-57.81781,-34.462524],[-58.427002,-33.909485],[-58.495422,-34.431519],[-57.225769,-35.288025],[-57.362305,-35.977417],[-56.737488,-36.413086],[-56.788208,-36.901489],[-57.749084,-38.183899],[-59.231812,-38.720215],[-61.237427,-38.928406],[-62.335876,-38.827698],[-62.125793,-39.424072],[-62.330505,-40.172607],[-62.145996,-40.67688],[-62.745789,-41.028687],[-63.770508,-41.166809],[-64.732117,-40.802612],[-65.117981,-41.06427],[-64.978577,-42.057983],[-64.303406,-42.359009],[-63.75592,-42.043701],[-63.458008,-42.56311],[-64.378784,-42.873474],[-65.181824,-43.4953],[-65.328796,-44.501282],[-65.565186,-45.036804],[-66.509888,-45.039612],[-67.293823,-45.55188],[-67.580505,-46.301697],[-66.596985,-47.033875],[-65.640991,-47.236084],[-65.985107,-48.133301],[-67.166199,-48.697327],[-67.816101,-49.86969],[-68.728699,-50.264221],[-69.138489,-50.732483],[-68.815491,-51.771118],[-68.150024,-52.349976],[-68.571472,-52.299377],[-69.461304,-52.29187],[-69.942688,-52.537903],[-70.845093,-52.89917],[-71.006287,-53.833191],[-71.42981,-53.856384],[-72.557922,-53.531372],[-73.702698,-52.835083],[-74.946777,-52.262695],[-75.26001,-51.629272],[-74.976624,-51.043396],[-75.479675,-50.378296],[-75.607971,-48.673706],[-75.182678,-47.711914],[-74.126587,-46.939209],[-75.644409,-46.647583],[-74.692078,-45.763977],[-74.351685,-44.103027],[-73.240295,-44.454895],[-72.717712,-42.383301],[-73.388916,-42.117493],[-73.701294,-43.365784],[-74.331909,-43.224976],[-74.017883,-41.7948],[-73.677124,-39.9422],[-73.21759,-39.258606],[-73.505493,-38.282898],[-73.588013,-37.156311],[-73.166687,-37.123779],[-72.553101,-35.508789],[-71.861694,-33.909119],[-71.438477,-32.418884],[-71.668701,-30.920593],[-71.369995,-30.095703],[-71.489807,-28.861389],[-70.90509,-27.640381],[-70.724976,-25.705872],[-70.403992,-23.628906],[-70.091187,-21.393311],[-70.164429,-19.756409],[-70.372498,-18.3479],[-71.375183,-17.773804],[-71.461975,-17.363403],[-73.444519,-16.359375],[-75.237793,-15.265686],[-76.009216,-14.649292],[-76.423401,-13.823181],[-76.259216,-13.534973],[-77.106201,-12.222717],[-78.092102,-10.377686],[-79.036926,-8.386597],[-79.445923,-7.930786],[-79.760498,-7.194275],[-80.537476,-6.541687],[-81.25,-6.13678],[-80.92627,-5.690491],[-81.410889,-4.736694],[-81.099609,-4.036377],[-80.30249,-3.404785],[-79.770203,-2.657471],[-79.986511,-2.220703],[-80.368713,-2.685181],[-80.967712,-2.246887],[-80.764771,-1.965027],[-80.933594,-1.057373],[-80.583313,-.906677],[-80.399292,-.283691],[-80.020813,.360474],[-80.090576,.768494],[-79.542786,.98291],[-78.855286,1.38092],[-78.990906,1.691284],[-78.617798,1.766479],[-78.662109,2.267273],[-78.427612,2.6297],[-77.931519,2.696716],[-77.510376,3.325073],[-77.127686,3.84967],[-77.496277,4.087708],[-77.307617,4.668091],[-77.533203,5.582886],[-77.318787,5.845276],[-77.476685,6.691101],[-77.881592,7.223877],[-78.214905,7.512329],[-78.429077,8.052124],[-78.182007,8.319275],[-78.435486,8.387695],[-78.62207,8.718079],[-79.1203,8.996094],[-79.5578,8.932495],[-79.760498,8.584473],[-80.16449,8.333313],[-80.382629,8.298523],[-80.480713,8.090271],[-80.003601,7.547485],[-80.276611,7.419678],[-80.421082,7.271484],[-80.886414,7.22052],[-81.059509,7.817871],[-81.189697,7.647888],[-81.51947,7.706726],[-81.721313,8.108887],[-82.131409,8.175476],[-82.390869,8.29248],[-82.820007,8.290894],[-82.850891,8.073914],[-82.965698,8.225098],[-83.508423,8.446899],[-83.711487,8.656921],[-83.596313,8.830505],[-83.632629,9.051514],[-83.909912,9.290894],[-84.303406,9.487488],[-84.647583,9.615479],[-84.713379,9.908081],[-84.975586,10.086731],[-84.911377,9.796082],[-85.110901,9.557129],[-85.339478,9.834473],[-85.660706,9.933289],[-85.797424,10.134888],[-85.791687,10.43927],[-85.659302,10.754272],[-85.941711,10.895325],[-85.712524,11.088501],[-86.058411,11.403503],[-86.525879,11.806885],[-86.745911,12.144104],[-87.16748,12.458313],[-87.668518,12.909912],[-87.557495,13.064697],[-87.392395,12.914124],[-87.316589,12.98468],[-87.48938,13.297485],[-87.793091,13.384521],[-87.904114,13.149109],[-88.483276,13.163879],[-88.843201,13.259705],[-89.256714,13.458679],[-89.812378,13.520691],[-90.095581,13.735474],[-90.608582,13.909912],[-91.232422,13.927917],[-91.689697,14.126282],[-92.227722,14.538879],[-93.359375,15.615479],[-93.875183,15.940308],[-94.691589,16.201111],[-95.250183,16.128296],[-96.053406,15.752075],[-96.557373,15.653503],[-97.263611,15.917114],[-98.013,16.1073],[-98.947693,16.566101],[-99.697388,16.706299],[-100.829529,17.171082],[-101.666077,17.649109],[-101.918518,17.916077],[-102.478088,17.975891],[-103.500977,18.292297],[-103.91748,18.748718],[-104.992004,19.316284],[-105.492981,19.946899],[-105.731384,20.434082],[-105.397705,20.531677],[-105.50061,20.816895],[-105.270691,21.076294],[-105.265808,21.422119],[-105.603088,21.871277],[-105.69342,22.269104],[-106.028687,22.773682],[-106.909912,23.767883],[-107.915405,24.548889],[-108.401917,25.172302],[-109.260193,25.580688],[-109.444092,25.82489],[-109.291626,26.442871],[-109.801392,26.676086],[-110.391724,27.162109],[-110.640991,27.859924],[-111.178894,27.941284],[-111.759583,28.468079],[-112.22821,28.954529],[-112.27179,29.266907],[-112.809509,30.021118],[-113.163818,30.786926],[-113.148682,31.171082],[-113.871887,31.567688],[-114.205688,31.524109],[-114.776428,31.799683],[-114.936707,31.393494],[-114.771179,30.913696],[-114.673889,30.16272],[-114.330994,29.750488],[-113.588806,29.061707],[-113.424011,28.826294],[-113.271912,28.754883],[-113.140015,28.411316],[-112.96228,28.425293],[-112.761597,27.780273],[-112.457886,27.525879],[-112.244873,27.171875],[-111.616516,26.662903],[-111.284607,25.732727],[-110.987793,25.294678],[-110.710022,24.826111],[-110.655029,24.298706],[-110.172791,24.265686],[-109.77179,23.811279],[-109.409119,23.364685],[-109.433411,23.18573],[-109.854187,22.818298],[-110.031311,22.82312],[-110.294983,23.431091],[-110.949524,24.001099],[-111.670593,24.484497],[-112.182007,24.738525],[-112.148987,25.470276],[-112.30072,26.012085],[-112.777283,26.322083],[-113.4646,26.768311],[-113.59668,26.639526],[-113.848877,26.900085],[-114.465698,27.14209],[-115.055115,27.722717],[-114.982178,27.798279],[-114.570312,27.741516],[-114.19928,28.115112],[-114.161987,28.566101],[-114.931824,29.27948],[-115.518677,29.556274],[-115.88739,30.180908],[-116.258301,30.836487],[-116.721497,31.635681],[-117.127686,32.535278],[-117.295898,33.046326],[-117.943909,33.621277],[-118.410583,33.740906],[-118.519897,34.027893],[-119.080994,34.078125],[-119.438782,34.348511],[-120.367798,34.447083],[-120.622803,34.608521],[-120.744324,35.156921],[-121.7146,36.161682],[-122.547485,37.55188],[-122.512024,37.783508],[-122.953186,38.113708],[-123.727112,38.951721],[-123.865112,39.76709],[-124.39801,40.313293],[-124.178772,41.14209],[-124.213684,41.999695],[-124.532776,42.766113],[-124.14209,43.708496],[-123.898926,45.523499],[-124.07959,46.864685],[-124.395691,47.720276],[-124.687195,48.184509],[-124.566101,48.3797],[-123.119995,48.0401],[-122.58728,47.09613],[-122.340027,47.360107],[-122.5,48.180115],[-122.840027,49.000122],[-122.974182,49.002686],[-124.910217,49.98468],[-125.624573,50.416687],[-127.435608,50.830688],[-127.992676,51.715881],[-127.850281,52.329712],[-129.1297,52.755493],[-129.305176,53.561707],[-130.514893,54.28772],[-130.536072,54.802673],[-131.085815,55.178894],[-131.967224,55.497925],[-132.25,56.370117],[-133.539185,57.178894],[-134.078003,58.123108],[-135.038208,58.187683],[-136.627991,58.21228],[-137.799988,58.500122],[-139.867798,59.537903],[-140.825195,59.727478],[-142.574402,60.084473],[-143.958801,59.999329],[-145.925476,60.458679],[-147.11438,60.884705],[-148.224304,60.673096],[-148.018005,59.978271],[-148.570801,59.914307],[-149.727783,59.705688],[-150.608215,59.368286],[-151.716309,59.155884],[-151.859375,59.745117],[-151.409729,60.725891],[-150.346924,61.033691],[-150.621094,61.284485],[-151.895813,60.727295],[-152.578308,60.061707],[-154.019104,59.350281],[-153.287476,58.864685],[-154.232483,58.146484],[-155.307495,57.727905],[-156.308289,57.422913],[-156.556091,56.980103],[-158.117187,56.463684],[-158.433289,55.99408],[-159.603271,55.566711],[-160.289673,55.643677],[-161.223022,55.364685],[-162.237793,55.024292],[-163.069397,54.68988],[-164.785583,54.404297],[-164.9422,54.572327],[-163.848328,55.03949],[-162.869995,55.348083],[-161.804199,55.895081],[-160.563599,56.008118],[-160.070496,56.418091],[-158.684387,57.016724],[-158.461121,57.216919],[-157.722778,57.570129],[-157.550293,58.328308],[-157.041687,58.918884],[-158.194702,58.615906],[-158.517212,58.787903],[-159.058594,58.424316],[-159.711609,58.931519],[-159.981201,58.572693],[-160.355286,59.071106],[-161.35498,58.670898],[-161.968811,58.671692],[-162.054993,59.266907],[-161.874084,59.633728],[-162.518005,59.989685],[-163.818298,59.798096],[-164.66217,60.267517],[-165.346375,60.507507],[-165.350769,61.073914],[-166.121399,61.500122],[-165.734375,62.075073],[-164.919189,62.633118],[-164.5625,63.146484],[-163.753296,63.219482],[-163.0672,63.059509],[-162.260498,63.54187],[-161.534424,63.455872],[-160.772522,63.766113],[-160.958313,64.2229],[-161.518005,64.402893],[-160.77771,64.788696],[-161.391907,64.777283],[-162.453003,64.559509],[-162.757813,64.338684],[-163.546387,64.559082],[-164.960815,64.447083],[-166.425293,64.686707],[-166.844971,65.088928],[-168.110474,65.670105],[-166.7052,66.088318],[-164.47467,66.576721],[-163.652527,66.576721],[-163.788513,66.077271],[-161.677795,66.116089],[-162.489685,66.735474],[-163.719727,67.116516],[-164.430908,67.616272],[-165.390198,68.042908],[-166.764404,68.358887],[-166.204712,68.883118],[-164.430786,68.915527],[-163.168579,69.371094],[-162.930481,69.858093],[-161.908875,70.333313],[-160.934814,70.447693],[-159.039185,70.891724],[-158.11969,70.824707],[-156.580811,71.35791],[-155.06781,71.147888],[-154.344177,70.696472],[-153.900024,70.890076],[-152.210022,70.830078],[-152.27002,70.600098],[-150.73999,70.430115],[-149.719971,70.53009],[-147.613281,70.214111],[-145.690002,70.120117],[-144.919983,69.990112],[-143.589417,70.152527],[-142.07251,69.851929],[-140.985901,69.712097],[-139.120483,69.47113],[-137.546387,68.990112],[-136.503601,68.898071],[-135.625671,69.315125],[-134.414612,69.627502],[-132.929199,69.50531],[-131.431274,69.944519],[-129.794678,70.193726],[-129.107727,69.779297],[-128.361511,70.012878],[-128.138184,70.483887],[-127.447083,70.377319],[-125.756287,69.480713],[-124.424805,70.158508],[-124.289612,69.399719],[-123.061096,69.563721],[-122.683411,69.85553],[-121.47229,69.797913],[-119.94281,69.37793],[-117.6026,69.011292],[-116.226379,68.841492],[-115.246887,68.905884],[-113.897888,68.398926],[-115.30481,67.90271],[-113.497192,67.688293],[-110.797913,67.806091],[-109.946106,67.981079],[-108.880188,67.381531],[-107.792419,67.887512],[-108.812988,68.311707],[-108.167175,68.653931],[-106.950012,68.700073],[-106.150024,68.80011],[-105.342773,68.561279],[-104.337891,68.018127],[-103.221069,68.0979],[-101.454285,67.646912],[-99.901978,67.805725],[-98.443176,67.781677],[-98.558594,68.403931],[-97.669495,68.578674],[-96.119873,68.239502],[-96.125793,67.293518],[-95.48938,68.090698],[-94.684998,68.063904],[-94.232788,69.069092],[-95.304077,69.68573],[-96.471313,70.089905],[-96.391113,71.194885],[-95.208801,71.920471],[-93.889893,71.760071],[-92.878113,71.318726],[-91.519592,70.191284],[-92.406921,69.700073],[-90.547119,69.497681]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-119.40199,68.53554,-100.98078,73.31459],geometry:{type:"Polygon",coordinates:[[[-114.16717,73.12145],[-114.66634,72.65277],[-112.44102,72.9554],[-111.05039,72.4504],[-109.92035,72.96113],[-109.00654,72.63335],[-108.18835,71.65089],[-107.68599,72.06548],[-108.39639,73.08953],[-107.51645,73.23598],[-106.52259,73.07601],[-105.40246,72.67259],[-104.77484,71.6984],[-104.46476,70.99297],[-102.78537,70.49776],[-100.98078,70.02432],[-101.08929,69.58447],[-102.73116,69.50402],[-102.09329,69.11962],[-102.43024,68.75282],[-104.24,68.91],[-105.96,69.18],[-107.12254,69.11922],[-109,68.78],[-111.9668,68.60446],[-113.3132,68.53554],[-113.85496,69.00744],[-115.22,69.28],[-116.10794,69.16821],[-117.34,69.96],[-116.67473,70.06655],[-115.13112,70.2373],[-113.72141,70.19237],[-112.4161,70.36638],[-114.35,70.6],[-116.48684,70.52045],[-117.9048,70.54056],[-118.43238,70.9092],[-116.11311,71.30918],[-117.65568,71.2952],[-119.40199,71.55859],[-118.56267,72.30785],[-117.86642,72.70594],[-115.18909,73.31459],[-114.16717,73.12145]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-106.94,72.76,-104.5,73.64],geometry:{type:"Polygon",coordinates:[[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-80.876099,72.742203,-76.251404,73.75972],geometry:{type:"Polygon",coordinates:[[[-76.34,73.102685],[-76.251404,72.826385],[-77.314438,72.855545],[-78.39167,72.876656],[-79.486252,72.742203],[-79.775833,72.802902],[-80.876099,73.333183],[-80.833885,73.693184],[-80.353058,73.75972],[-78.064438,73.651932],[-76.34,73.102685]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-90.20516,61.930897,-61.851981,73.803816],geometry:{type:"Polygon",coordinates:[[[-86.562179,73.157447],[-85.774371,72.534126],[-84.850112,73.340278],[-82.31559,73.750951],[-80.600088,72.716544],[-80.748942,72.061907],[-78.770639,72.352173],[-77.824624,72.749617],[-75.605845,72.243678],[-74.228616,71.767144],[-74.099141,71.33084],[-72.242226,71.556925],[-71.200015,70.920013],[-68.786054,70.525024],[-67.91497,70.121948],[-66.969033,69.186087],[-68.805123,68.720198],[-66.449866,68.067163],[-64.862314,67.847539],[-63.424934,66.928473],[-61.851981,66.862121],[-62.163177,66.160251],[-63.918444,64.998669],[-65.14886,65.426033],[-66.721219,66.388041],[-68.015016,66.262726],[-68.141287,65.689789],[-67.089646,65.108455],[-65.73208,64.648406],[-65.320168,64.382737],[-64.669406,63.392927],[-65.013804,62.674185],[-66.275045,62.945099],[-68.783186,63.74567],[-67.369681,62.883966],[-66.328297,62.280075],[-66.165568,61.930897],[-68.877367,62.330149],[-71.023437,62.910708],[-72.235379,63.397836],[-71.886278,63.679989],[-73.378306,64.193963],[-74.834419,64.679076],[-74.818503,64.389093],[-77.70998,64.229542],[-78.555949,64.572906],[-77.897281,65.309192],[-76.018274,65.326969],[-73.959795,65.454765],[-74.293883,65.811771],[-73.944912,66.310578],[-72.651167,67.284576],[-72.92606,67.726926],[-73.311618,68.069437],[-74.843307,68.554627],[-76.869101,68.894736],[-76.228649,69.147769],[-77.28737,69.76954],[-78.168634,69.826488],[-78.957242,70.16688],[-79.492455,69.871808],[-81.305471,69.743185],[-84.944706,69.966634],[-87.060003,70.260001],[-88.681713,70.410741],[-89.51342,70.762038],[-88.467721,71.218186],[-89.888151,71.222552],[-90.20516,72.235074],[-89.436577,73.129464],[-88.408242,73.537889],[-85.826151,73.803816],[-86.562179,73.157447]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-102.5,71.27285,-96.54,73.84389],geometry:{type:"Polygon",coordinates:[[[-100.35642,73.84389],[-99.16387,73.63339],[-97.38,73.76],[-97.12,73.47],[-98.05359,72.99052],[-96.54,72.56],[-96.72,71.66],[-98.35966,71.27285],[-99.32286,71.35639],[-100.01482,71.73827],[-102.5,72.51],[-102.48,72.83],[-100.43836,72.70588],[-101.54,73.36],[-100.35642,73.84389]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[139.86312,73.20544,143.60385,73.85758],geometry:{type:"Polygon",coordinates:[[[143.60385,73.21244],[142.08763,73.20544],[140.038155,73.31692],[139.86312,73.36983],[140.81171,73.76506],[142.06207,73.85758],[143.48283,73.47525],[143.60385,73.21244]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-96.033745,72.024596,-90.509793,74.134907],geometry:{type:"Polygon",coordinates:[[[-93.196296,72.771992],[-94.269047,72.024596],[-95.409856,72.061881],[-96.033745,72.940277],[-96.018268,73.43743],[-95.495793,73.862417],[-94.503658,74.134907],[-92.420012,74.100025],[-90.509793,73.856732],[-92.003965,72.966244],[-93.196296,72.771992]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-125.92896,70.90164,-115.51081,74.44893],geometry:{type:"Polygon",coordinates:[[[-120.46,71.4],[-123.09219,70.90164],[-123.62,71.34],[-125.92896,71.86868],[-125.59271,72.19452],[-124.80729,73.02256],[-123.94,73.68],[-124.91775,74.29275],[-121.53788,74.44893],[-120.10978,74.24135],[-117.55564,74.18577],[-116.58442,73.89607],[-115.51081,73.47519],[-116.76794,73.22292],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[146.11919,74.68892,150.73167,75.49682],geometry:{type:"Polygon",coordinates:[[[150.73167,75.08406],[149.575925,74.68892],[147.977465,74.778355],[146.11919,75.17298],[146.358485,75.49682],[148.22223,75.345845],[150.73167,75.08406]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-96.820932,74.592347,-93.612756,75.647218],geometry:{type:"Polygon",coordinates:[[[-93.612756,74.979997],[-94.156909,74.592347],[-95.608681,74.666864],[-96.820932,74.927623],[-96.288587,75.377828],[-94.85082,75.647218],[-93.977747,75.29649],[-93.612756,74.979997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[136.97439,74.61148,145.086285,76.13676],geometry:{type:"Polygon",coordinates:[[[145.086285,75.562625],[144.3,74.82],[140.61381,74.84768],[138.95544,74.61148],[136.97439,75.26167],[137.51176,75.94917],[138.831075,76.13676],[141.471615,76.09289],[145.086285,75.562625]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-102.56552,74.89744,-97.704415,76.72],geometry:{type:"Polygon",coordinates:[[[-98.5,76.72],[-97.735585,76.25656],[-97.704415,75.74344],[-98.16,75],[-99.80874,74.89744],[-100.88366,75.05736],[-100.86292,75.64075],[-102.50209,75.5638],[-102.56552,76.3366],[-101.48973,76.30537],[-99.98349,76.64634],[-98.57699,76.58859],[-98.5,76.72]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-117.7104,74.39427,-105.70498,76.79417],geometry:{type:"Polygon",coordinates:[[[-108.21141,76.20168],[-107.81943,75.84552],[-106.92893,76.01282],[-105.881,75.9694],[-105.70498,75.47951],[-106.31347,75.00527],[-109.7,74.85],[-112.22307,74.41696],[-113.74381,74.39427],[-113.87135,74.72029],[-111.79421,75.1625],[-116.31221,75.04343],[-117.7104,75.2222],[-116.34602,76.19903],[-115.40487,76.47887],[-112.59056,76.14134],[-110.81422,75.54919],[-109.0671,75.47321],[-110.49726,76.42982],[-109.5811,76.79417],[-108.54859,76.67832],[-108.21141,76.20168]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[51.455754,70.632743,68.852211,76.939697],geometry:{type:"Polygon",coordinates:[[[57.535693,70.720464],[56.944979,70.632743],[53.677375,70.762658],[53.412017,71.206662],[51.601895,71.474759],[51.455754,72.014881],[52.478275,72.229442],[52.444169,72.774731],[54.427614,73.627548],[53.50829,73.749814],[55.902459,74.627486],[55.631933,75.081412],[57.868644,75.60939],[61.170044,76.251883],[64.498368,76.439055],[66.210977,76.809782],[68.15706,76.939697],[68.852211,76.544811],[68.180573,76.233642],[64.637326,75.737755],[61.583508,75.260885],[58.477082,74.309056],[56.986786,73.333044],[55.419336,72.371268],[55.622838,71.540595],[57.535693,70.720464]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-97.121379,74.392307,-79.833933,77.161389],geometry:{type:"Polygon",coordinates:[[[-94.684086,77.097878],[-93.573921,76.776296],[-91.605023,76.778518],[-90.741846,76.449597],[-90.969661,76.074013],[-89.822238,75.847774],[-89.187083,75.610166],[-87.838276,75.566189],[-86.379192,75.482421],[-84.789625,75.699204],[-82.753445,75.784315],[-81.128531,75.713983],[-80.057511,75.336849],[-79.833933,74.923127],[-80.457771,74.657304],[-81.948843,74.442459],[-83.228894,74.564028],[-86.097452,74.410032],[-88.15035,74.392307],[-89.764722,74.515555],[-92.422441,74.837758],[-92.768285,75.38682],[-92.889906,75.882655],[-93.893824,76.319244],[-95.962457,76.441381],[-97.121379,76.751078],[-96.745123,77.161389],[-94.684086,77.097878]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-122.854925,75.900019,-116.198587,77.645287],geometry:{type:"Polygon",coordinates:[[[-116.198587,77.645287],[-116.335813,76.876962],[-117.106051,76.530032],[-118.040412,76.481172],[-119.899318,76.053213],[-121.499995,75.900019],[-122.854924,76.116543],[-122.854925,76.116543],[-121.157535,76.864508],[-119.103939,77.51222],[-117.570131,77.498319],[-116.198587,77.645287]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-17.625,-34.819092,180,77.697876],geometry:{type:"Polygon",coordinates:[[[106.970276,76.974304],[107.240112,76.480103],[108.153931,76.723328],[111.077271,76.710083],[113.331482,76.22229],[114.134277,75.847717],[113.885498,75.327881],[112.779297,75.031921],[110.151306,74.476685],[109.400085,74.180115],[110.640076,74.0401],[112.119324,73.78772],[113.01947,73.976929],[113.529724,73.335083],[113.968872,73.59491],[115.567871,73.75293],[118.776306,73.587708],[119.020081,73.120117],[123.200684,72.971313],[123.257874,73.735107],[125.380127,73.56012],[126.976501,73.565491],[128.591309,73.038696],[129.051697,72.398682],[128.460083,71.980103],[129.716125,71.193115],[131.288696,70.787109],[132.253479,71.836304],[133.857727,71.386475],[135.562073,71.655273],[137.497681,71.347717],[138.234131,71.628113],[139.869873,71.487915],[139.147888,72.416321],[140.468079,72.849487],[149.500122,72.200073],[150.351318,71.606506],[152.968872,70.842285],[157.006897,71.031494],[158.997925,70.866699],[159.830322,70.453308],[159.708679,69.722107],[160.940674,69.437317],[162.279114,69.64209],[164.05249,69.668274],[165.940491,69.472107],[167.835693,69.582703],[169.577698,68.693909],[170.816895,69.013672],[170.008301,69.652893],[170.453491,70.097107],[173.643921,69.817505],[175.724121,69.877319],[178.600098,69.400085],[180,68.963722],[180,64.979584],[179.99292,64.974304],[178.707275,64.534912],[177.411316,64.608276],[178.31311,64.075928],[178.908325,63.252075],[179.370483,62.982727],[179.486511,62.569092],[179.228271,62.304077],[177.364319,62.521912],[174.569275,61.769287],[173.680115,61.65271],[172.150085,60.950073],[170.698486,60.336304],[170.330872,59.881897],[168.900513,60.573486],[166.295105,59.788696],[165.840088,60.160095],[164.876892,59.731689],[163.539307,59.868713],[163.217102,59.211121],[162.017273,58.243286],[162.053101,57.839111],[163.191895,57.615112],[163.057922,56.159302],[162.1297,56.122314],[161.701477,55.285706],[162.117493,54.855286],[160.368896,54.344482],[160.021729,53.202698],[158.530884,52.958679],[158.231323,51.942688],[156.789917,51.011108],[156.420105,51.700073],[155.991882,53.158875],[155.433716,55.381104],[155.91449,56.767883],[156.758301,57.364685],[156.810486,57.832092],[158.364319,58.055725],[160.150696,59.31488],[161.87207,60.343079],[163.669678,61.14093],[164.473694,62.55072],[163.258484,62.466309],[162.657898,61.642517],[160.121521,60.544312],[159.302307,61.774109],[156.720703,61.434509],[154.218079,59.758301],[155.043884,59.145081],[152.81189,58.883911],[151.265686,58.780884],[151.338074,59.504089],[149.783691,59.655701],[148.544922,59.16449],[145.487305,59.336487],[142.197876,59.0401],[138.958496,57.088074],[135.126282,54.729675],[136.701721,54.603699],[137.193481,53.977295],[138.164673,53.755127],[138.804688,54.2547],[139.901489,54.189697],[141.345276,53.089722],[141.379272,52.238892],[140.597473,51.239685],[140.513123,50.045471],[140.062073,48.446716],[138.554688,46.999695],[138.219727,46.307922],[136.862305,45.143494],[135.51532,43.989075],[134.869507,43.398315],[133.536926,42.811523],[132.906311,42.798523],[132.278076,43.284485],[130.935913,42.552673],[130.78009,42.220093],[130.400085,42.28009],[129.965881,41.941284],[129.66748,41.601074],[129.705322,40.882874],[129.18811,40.661926],[129.010498,40.485474],[128.633484,40.18988],[127.967529,40.025513],[127.533508,39.756897],[127.502075,39.323914],[127.385498,39.213501],[127.783325,39.050903],[128.34967,38.612305],[129.212891,37.432495],[129.46051,36.784302],[129.468323,35.63208],[129.091492,35.08252],[128.185913,34.890503],[127.386475,34.475708],[126.485718,34.390076],[126.373901,34.934692],[126.559326,35.684692],[126.117493,36.725525],[126.860291,36.893921],[126.174683,37.749695],[125.689087,37.940125],[125.568481,37.752075],[125.27533,37.669128],[125.240112,37.8573],[124.981079,37.948914],[124.71228,38.108276],[124.986084,38.548523],[125.221924,38.665894],[125.132874,38.848694],[125.386719,39.387878],[125.321106,39.551514],[124.737488,39.660278],[124.265686,39.928528],[122.867676,39.637878],[122.131531,39.170471],[121.054688,38.897522],[121.586121,39.360901],[121.376892,39.750305],[122.168701,40.422485],[121.640503,40.946472],[120.768677,40.593506],[119.639709,39.898071],[119.023499,39.252319],[118.042725,39.204285],[117.532715,38.737671],[118.059692,38.061523],[118.878296,37.897278],[118.911682,37.448486],[119.702881,37.156494],[120.823486,37.870483],[121.711304,37.481079],[122.35791,37.454529],[122.520081,36.930725],[121.104309,36.651306],[120.637085,36.111511],[119.664673,35.609924],[119.151306,34.909912],[120.227478,34.360474],[120.620483,33.376709],[121.229126,32.460327],[121.908081,31.692322],[121.891907,30.94928],[121.264282,30.676331],[121.503479,30.142883],[122.092102,29.83252],[121.938477,29.018127],[121.684509,28.225525],[121.125671,28.135681],[120.395508,27.053284],[119.58551,25.740906],[118.656921,24.547485],[117.281677,23.624512],[115.890686,22.782898],[114.763916,22.668091],[114.152527,22.223877],[113.806885,22.548279],[113.241089,22.051514],[111.843689,21.550476],[110.785522,21.397278],[110.444092,20.341125],[109.889893,20.282471],[109.627686,21.008301],[109.864502,21.395081],[108.522888,21.715271],[108.050293,21.55249],[106.715088,20.696899],[105.881714,19.752075],[105.662109,19.058289],[106.42688,18.004089],[107.361877,16.69751],[108.26947,16.079712],[108.877075,15.276672],[109.335327,13.426086],[109.200073,11.66687],[108.366089,11.008301],[107.220886,10.364502],[106.40509,9.530884],[105.158325,8.59967],[104.795288,9.241089],[105.076294,9.918518],[104.334473,10.486694],[103.497314,10.63269],[103.090698,11.153687],[102.585083,12.186707],[101.687073,12.645874],[100.831909,12.627075],[100.978516,13.41272],[100.0979,13.406921],[100.018677,12.307129],[99.478882,10.846497],[99.153687,9.963074],[99.222473,9.239319],[99.873901,9.207886],[100.279724,8.295288],[100.45929,7.429687],[101.017273,6.856873],[101.623108,6.740723],[102.141296,6.22168],[102.371277,6.128296],[102.961731,5.524475],[103.381287,4.855103],[103.438721,4.181702],[103.332092,3.726685],[103.429504,3.382874],[103.502502,2.791077],[103.854675,2.515503],[104.247925,1.631287],[104.228882,1.293091],[103.519714,1.226318],[102.57373,1.967102],[101.390686,2.760925],[101.273682,3.270325],[100.695496,3.939087],[100.557495,4.767273],[100.196716,5.3125],[100.306274,6.04071],[100.085876,6.464478],[99.690674,6.848328],[99.519714,7.343506],[98.988281,7.908081],[98.503906,8.382324],[98.339722,7.794495],[98.150085,8.350098],[98.259277,8.973877],[98.553528,9.933105],[98.457275,10.675293],[98.764526,11.441284],[98.428284,12.033081],[98.509705,13.122498],[98.103699,13.640503],[97.77771,14.83728],[97.597107,16.100708],[97.164673,16.928711],[96.50592,16.427307],[95.369324,15.714478],[94.808472,15.803528],[94.188904,16.038086],[94.533508,17.277283],[94.32489,18.213501],[93.541077,19.366516],[93.66333,19.727112],[93.078308,19.855286],[92.36853,20.670898],[92.082886,21.192322],[92.02533,21.701721],[91.8349,22.182922],[91.417114,22.765076],[90.496094,22.805115],[90.587097,22.392883],[90.272888,21.836487],[89.847473,22.039124],[89.702087,21.857117],[89.418884,21.966309],[89.032104,22.055725],[88.888916,21.690674],[88.208496,21.703308],[86.975708,21.495483],[87.033081,20.743286],[86.499329,20.151672],[85.060303,19.478699],[83.941101,18.302124],[83.18927,17.671326],[82.192871,17.016724],[82.191284,16.556702],[81.692688,16.310303],[80.792114,15.952087],[80.32489,15.899292],[80.025085,15.136475],[80.233276,13.835876],[80.286316,13.006287],[79.862488,12.056274],[79.858093,10.3573],[79.340515,10.308899],[78.885498,9.546082],[79.189697,9.216675],[78.278076,8.933105],[77.941284,8.25293],[77.539917,7.965515],[76.593079,8.899292],[76.130127,10.299683],[75.746521,11.308289],[75.396118,11.781311],[74.864929,12.741882],[74.616699,13.992676],[74.443909,14.61731],[73.534302,15.990723],[73.119873,17.928711],[72.820923,19.208313],[72.824524,20.419495],[72.630676,21.356079],[71.175293,20.757507],[70.47052,20.877319],[69.164124,22.089294],[69.644897,22.450684],[69.34967,22.843323],[68.176697,23.692078],[67.443726,23.944885],[67.145508,24.663696],[66.372925,25.425293],[64.530518,25.237122],[62.905701,25.218506],[61.497498,25.078308],[59.616089,25.380127],[58.525879,25.610107],[57.397278,25.739929],[56.970886,26.966125],[56.492126,27.143311],[55.723694,26.964722],[54.715088,26.480713],[53.493103,26.8125],[52.483704,27.580872],[51.520874,27.865723],[50.853088,28.814514],[50.115112,30.147888],[49.576904,29.985718],[48.941284,30.317078],[48.568115,29.92688],[47.974487,29.975891],[48.183289,29.534485],[48.093872,29.306274],[48.416077,28.552124],[48.807678,27.689697],[49.299683,27.461304],[49.470886,27.110107],[50.152527,26.689697],[50.213074,26.2771],[50.113281,25.944092],[50.239929,25.608093],[50.527527,25.327881],[50.660706,24.999878],[50.81012,24.754883],[50.743896,25.482483],[51.013489,26.00708],[51.286499,26.114685],[51.589111,25.801086],[51.606689,25.215698],[51.389709,24.627502],[51.579529,24.245483],[51.757507,24.294128],[51.794495,24.019897],[52.577087,24.17749],[53.404114,24.151306],[54.008118,24.121887],[54.693115,24.797913],[55.439087,25.439087],[56.070923,26.055481],[56.362122,26.395874],[56.485718,26.309082],[56.391479,25.896118],[56.261108,25.714722],[56.396912,24.924683],[56.845276,24.241699],[57.403503,23.878723],[58.137085,23.747925],[58.729309,23.565674],[59.180481,22.992493],[59.450073,22.660278],[59.808105,22.533691],[59.806274,22.310486],[59.442322,21.714478],[59.282471,21.433899],[58.861084,21.114075],[58.488098,20.429077],[58.034302,20.481506],[57.826477,20.243103],[57.665894,19.736084],[57.788696,19.067688],[57.694519,18.944702],[57.234314,18.94812],[56.60968,18.57428],[56.512329,18.087097],[56.283508,17.876099],[55.661499,17.884277],[55.270081,17.632324],[55.274902,17.228271],[54.791077,16.950684],[54.239319,17.045105],[53.570496,16.707703],[53.108704,16.651123],[52.385315,16.382507],[52.191711,15.938477],[52.168274,15.597473],[51.172485,15.175293],[49.574707,14.708679],[48.679321,14.003296],[48.239075,13.94812],[47.938904,14.007324],[47.354492,13.592285],[46.717102,13.399719],[45.877686,13.3479],[45.625122,13.291077],[45.406494,13.026917],[45.144287,12.953918],[44.989685,12.699707],[44.49469,12.72168],[44.17511,12.585876],[43.483093,12.636902],[43.2229,13.220886],[43.251526,13.7677],[43.088074,14.062683],[42.892273,14.802307],[42.604919,15.213318],[42.805115,15.262085],[42.702515,15.718872],[42.82373,15.911682],[42.77948,16.3479],[42.649719,16.774719],[42.348083,17.075928],[42.270874,17.47467],[41.754517,17.83313],[41.221497,18.671692],[40.93927,19.486511],[40.247681,20.174683],[39.801697,20.338928],[39.139526,21.29187],[39.023682,21.986877],[39.066284,22.579712],[38.49292,23.688477],[38.023926,24.078674],[37.483704,24.285522],[37.154907,24.858521],[37.209473,25.084473],[36.931702,25.603088],[36.639709,25.826294],[36.249084,26.570129],[35.64032,27.376526],[35.13031,28.063477],[34.632324,28.058472],[34.787903,28.607483],[34.832275,28.95752],[34.956116,29.356689],[34.922729,29.501282],[34.641724,29.099487],[34.426697,28.344116],[34.15448,27.823303],[33.921509,27.648682],[33.588074,27.971497],[33.136902,28.417725],[32.423279,29.851074],[32.320496,29.760498],[32.734924,28.705322],[33.348877,27.69989],[34.104675,26.142273],[34.473877,25.598694],[34.795105,25.033875],[35.692505,23.926697],[35.493713,23.752502],[35.526123,23.102478],[36.690674,22.204895],[36.866272,22.000122],[37.188721,21.018921],[36.969482,20.837524],[37.114685,19.808105],[37.481873,18.614075],[37.862671,18.36792],[38.410095,17.998291],[38.990723,16.840698],[39.266113,15.922729],[39.81427,15.43573],[41.179321,14.491089],[41.734924,13.921082],[42.276917,13.344116],[42.589722,13.000488],[43.081299,12.699707],[43.317871,12.390076],[43.286499,11.974915],[42.715881,11.735718],[43.145325,11.462097],[43.470703,11.27771],[43.666687,10.864319],[44.11792,10.445679],[44.614319,10.442322],[45.556885,10.69812],[46.645508,10.816528],[47.525696,11.127319],[48.021729,11.193115],[48.378906,11.375488],[48.948303,11.410706],[49.267883,11.430481],[49.728699,11.578918],[50.258911,11.679688],[50.732117,12.021912],[51.111328,12.024719],[51.133911,11.748291],[51.041504,11.166504],[51.045288,10.64093],[50.83429,10.279724],[50.55249,9.19873],[50.070923,8.081726],[49.452698,6.804688],[48.594482,5.339111],[47.740906,4.219482],[46.56488,2.855286],[45.564087,2.045898],[44.068298,1.052917],[43.136108,.292297],[42.041687,-.919189],[41.811096,-1.446411],[41.585083,-1.683228],[40.884888,-2.08252],[40.637878,-2.499817],[40.263123,-2.57312],[40.121277,-3.27771],[39.80011,-3.681091],[39.604919,-4.346497],[39.202271,-4.676697],[38.740479,-5.908875],[38.799683,-6.475586],[39.440125,-6.840027],[39.470093,-7.099976],[39.194702,-7.703918],[39.252075,-8.007812],[39.186523,-8.485474],[39.535889,-9.112305],[39.949707,-10.098389],[40.316711,-10.317078],[40.478516,-10.765381],[40.437317,-11.761719],[40.560913,-12.639099],[40.59967,-14.201904],[40.775513,-14.691711],[40.477295,-15.406311],[40.089294,-16.100708],[39.452698,-16.720886],[38.53833,-17.101013],[37.411072,-17.586304],[36.281311,-18.659607],[35.896484,-18.842285],[35.198486,-19.552795],[34.786499,-19.783997],[34.701904,-20.497009],[35.176086,-21.254272],[35.373474,-21.84082],[35.385925,-22.140015],[35.562683,-22.090027],[35.533875,-23.070801],[35.371887,-23.535278],[35.607483,-23.706482],[35.458679,-24.12262],[35.04071,-24.478271],[34.215881,-24.816284],[33.013306,-25.357483],[32.574707,-25.727295],[32.660278,-26.148499],[32.916077,-26.215881],[32.830078,-26.742188],[32.580322,-27.470093],[32.46228,-28.301025],[32.203491,-28.75238],[31.521118,-29.257385],[31.325684,-29.401978],[30.901672,-29.909912],[30.622925,-30.423706],[30.055725,-31.140198],[28.925476,-32.171997],[28.219727,-32.771912],[27.464722,-33.22699],[26.419495,-33.614929],[25.909729,-33.666992],[25.780701,-33.94458],[25.172913,-33.796875],[24.677917,-33.987183],[23.594116,-33.794495],[22.988281,-33.916382],[22.57428,-33.864075],[21.542908,-34.258789],[20.689087,-34.417175],[20.071289,-34.795105],[19.616516,-34.819092],[19.193298,-34.462585],[18.855286,-34.444275],[18.424683,-33.997803],[18.377502,-34.136475],[18.244507,-33.867676],[18.250122,-33.281372],[17.925293,-32.611206],[18.247925,-32.429077],[18.22168,-31.661621],[17.566895,-30.725708],[17.064514,-29.878601],[17.062927,-29.875977],[16.345093,-28.576721],[15.601929,-27.821228],[15.21051,-27.090881],[14.989685,-26.11731],[14.743286,-25.392883],[14.408081,-23.853027],[14.385681,-22.656677],[14.25769,-22.111206],[13.868713,-21.698975],[13.352478,-20.872803],[12.826904,-19.673096],[12.608704,-19.045288],[11.794922,-18.069092],[11.734314,-17.30188],[11.640076,-16.673096],[11.778687,-15.793823],[12.123718,-14.878296],[12.17572,-14.449097],[12.500122,-13.547729],[12.738525,-13.137878],[13.312927,-12.483582],[13.633728,-12.038574],[13.738708,-11.297791],[13.686523,-10.731079],[13.387329,-10.373596],[13.121094,-9.766907],[12.875488,-9.16687],[12.929077,-8.959106],[13.236511,-8.562622],[12.933105,-7.596497],[12.728271,-6.927124],[12.227478,-6.294373],[12.32251,-6.100098],[12.182312,-5.789917],[11.9151,-5.037903],[11.093689,-3.978821],[10.066284,-2.969482],[9.405273,-2.144287],[8.798096,-1.111328],[8.830078,-.778992],[9.048523,-.45929],[9.291321,.268677],[9.49292,1.010071],[9.305725,1.160889],[9.649292,2.283875],[9.795288,3.073486],[9.40448,3.734497],[8.94812,3.904114],[8.744873,4.352295],[8.488892,4.495728],[8.500305,4.772095],[7.462097,4.412109],[7.082703,4.464722],[6.69812,4.240723],[5.898315,4.262512],[5.362915,4.888123],[5.033691,5.611877],[4.325684,6.270691],[3.57428,6.258301],[2.691711,6.258911],[1.865295,6.142273],[1.06012,5.928894],[-.507629,5.343506],[-1.063599,5.000488],[-1.964722,4.71051],[-2.856079,4.994507],[-3.311096,4.984314],[-4.008789,5.179871],[-4.649902,5.168274],[-5.834412,4.993713],[-6.528687,4.705078],[-7.518921,4.338318],[-7.712097,4.364685],[-7.974121,4.355896],[-9.004822,4.83252],[-9.913391,5.593689],[-10.765381,6.140686],[-11.438782,6.785889],[-11.708191,6.860107],[-12.428101,7.262878],[-12.948975,7.798706],[-13.124023,8.163879],[-13.246521,8.903076],[-13.685181,9.494873],[-14.073975,9.886292],[-14.330078,10.015686],[-14.579712,10.214478],[-14.693176,10.656311],[-14.839478,10.876709],[-15.13031,11.040527],[-15.664185,11.458496],[-16.085205,11.524719],[-16.314697,11.806519],[-16.308899,11.958679],[-16.61377,12.170898],[-16.677429,12.384888],[-16.841492,13.151489],[-16.713684,13.595093],[-17.126099,14.373474],[-17.625,14.729675],[-17.185181,14.919495],[-16.700684,15.621521],[-16.463013,16.135071],[-16.549683,16.673889],[-16.270508,17.167114],[-16.146301,18.108521],[-16.256897,19.09668],[-16.377625,19.593872],[-16.277771,20.092529],[-16.536316,20.567871],[-17.063416,20.999878],[-17.020386,21.422302],[-16.973206,21.885681],[-16.589111,22.158325],[-16.261902,22.679321],[-16.326416,23.017883],[-15.982605,23.723511],[-15.426025,24.359131],[-15.089294,24.520325],[-14.824585,25.103516],[-14.800903,25.636292],[-14.43988,26.254517],[-13.773804,26.618896],[-13.139893,27.640076],[-12.618774,28.03833],[-11.688904,28.148682],[-10.900879,28.832275],[-10.399597,29.098694],[-9.564819,29.933716],[-9.814697,31.177673],[-9.434814,32.038086],[-9.30072,32.564697],[-8.65741,33.240295],[-7.654175,33.697083],[-6.912476,34.110474],[-6.244324,35.145874],[-5.929993,35.760071],[-5.193787,35.75531],[-4.591003,35.330688],[-3.640076,35.399902],[-2.604309,35.179077],[-2.169922,35.168518],[-1.208618,35.714905],[-.12738,35.888672],[.503906,36.301331],[1.466919,36.605713],[3.161682,36.783875],[4.815674,36.865112],[5.320129,36.716492],[6.261902,37.110718],[7.330505,37.11853],[7.737122,36.885681],[8.421082,36.946472],[9.510071,37.350098],[10.210083,37.230103],[10.180725,36.724121],[11.028931,37.092102],[11.100098,36.900085],[10.600098,36.410095],[10.593323,35.94751],[10.939514,35.699097],[10.807922,34.833496],[10.149719,34.330688],[10.339722,33.785889],[10.856873,33.768677],[11.108521,33.293274],[11.488892,33.137085],[12.66333,32.792908],[13.083313,32.878906],[13.918701,32.712097],[15.245728,32.265076],[15.713928,31.376282],[16.611694,31.182312],[18.021118,30.763489],[19.086487,30.266479],[19.574097,30.525879],[20.053284,30.985901],[19.820312,31.751892],[20.134094,32.238281],[20.854492,32.706909],[21.543091,32.843323],[22.895874,32.638489],[23.236877,32.191528],[23.609131,32.187317],[23.92749,32.016724],[24.921082,31.899475],[25.164917,31.569275],[26.4953,31.585693],[27.457703,31.321289],[28.4505,31.025879],[28.913513,30.870117],[29.683472,31.18689],[30.095093,31.473511],[30.976929,31.555908],[31.68811,31.429688],[31.96051,30.933716],[32.192505,31.260315],[32.993896,31.024109],[33.773499,30.967529],[34.265503,31.219482],[34.556519,31.548889],[34.488098,31.60553],[34.752686,32.072876],[34.955505,32.827515],[35.098511,33.080688],[35.126099,33.090881],[35.4823,33.905518],[35.979675,34.610107],[35.998474,34.644897],[35.90509,35.410095],[36.149902,35.821472],[35.782104,36.275085],[36.160889,36.650696],[35.551086,36.565491],[34.714478,36.795471],[34.026917,36.220093],[32.509277,36.107483],[31.699707,36.644287],[30.621704,36.677917],[30.391113,36.263123],[29.700073,36.144287],[28.73291,36.67688],[27.641296,36.658875],[27.048889,37.653503],[26.318298,38.20813],[26.804688,38.985901],[26.170898,39.463684],[27.28009,40.420105],[28.820129,40.460083],[29.240112,41.220093],[31.145874,41.087708],[32.348083,41.736328],[33.513306,42.019104],[35.167725,42.040283],[36.913086,41.33551],[38.347717,40.94873],[39.512695,41.102905],[40.373474,41.013672],[41.554077,41.535706],[41.703308,41.963074],[41.453491,42.645081],[40.875488,43.013672],[40.321472,43.128723],[39.955078,43.43512],[38.680115,44.28009],[37.539124,44.657288],[36.675476,45.24469],[37.40332,45.40448],[38.233093,46.240906],[37.673706,46.636719],[39.147705,47.044678],[39.121277,47.263489],[38.223694,47.102295],[37.42511,47.022278],[36.759888,46.69873],[35.82373,46.645874],[34.96228,46.273315],[35.020874,45.651306],[35.510071,45.410095],[36.53009,45.470093],[36.334717,45.113281],[35.240112,44.940125],[33.882507,44.361511],[33.326477,44.56488],[33.546875,45.034912],[32.454285,45.327515],[32.63092,45.519287],[33.588074,45.851685],[33.298706,46.080688],[31.74408,46.333496],[31.675293,46.706299],[30.748901,46.58313],[30.377686,46.032471],[29.603271,45.293274],[29.626526,45.035522],[29.141724,44.820312],[28.837891,44.913879],[28.558105,43.70752],[28.039124,43.293274],[27.673889,42.577881],[27.996704,42.007507],[28.115479,41.622925],[28.988525,41.299927],[28.806519,41.054871],[27.61908,40.999878],[27.192505,40.690674],[26.358093,40.1521],[26.043274,40.617676],[26.056885,40.824097],[25.447693,40.852478],[24.925903,40.947083],[23.714905,40.687073],[24.408081,40.125122],[23.900085,39.962097],[23.343079,39.961121],[22.814087,40.476074],[22.626282,40.256531],[22.84967,39.659302],[23.350098,39.190125],[22.973083,38.970886],[23.53009,38.510071],[24.025085,38.220093],[24.0401,37.65509],[23.115112,37.920105],[23.410095,37.410095],[22.775085,37.305115],[23.154297,36.422485],[22.490112,36.410095],[21.670105,36.845093],[21.295105,37.645081],[21.120117,38.310303],[20.730103,38.770081],[20.217712,39.340271],[20.150085,39.625122],[19.980103,39.695129],[19.960083,39.9151],[19.406128,40.250916],[19.319092,40.727295],[19.403687,41.409485],[19.5401,41.720093],[19.371887,41.877686],[19.162476,41.955078],[18.88208,42.281494],[18.450073,42.480103],[17.509888,42.850098],[16.930115,43.210083],[16.015503,43.507324],[15.1745,44.243286],[15.376282,44.317871],[14.920288,44.738525],[14.901672,45.076111],[14.258728,45.233887],[13.952271,44.802124],[13.657104,45.137085],[13.679504,45.484131],[13.715088,45.500305],[13.937683,45.591125],[13.141724,45.736694],[12.328674,45.381897],[12.383911,44.885498],[12.261475,44.600525],[12.589294,44.091492],[13.526917,43.587708],[14.029907,42.761108],[15.1427,41.955078],[15.926331,41.961304],[16.169922,41.740295],[15.889282,41.541077],[16.785095,41.179688],[17.519287,40.877075],[18.376709,40.355713],[18.480286,40.168884],[18.293518,39.810913],[17.738525,40.27771],[16.86969,40.442322],[16.44873,39.795471],[17.171509,39.424683],[17.052917,38.902893],[16.635071,38.843689],[16.101074,37.985901],[15.684082,37.908875],[15.68811,38.214722],[15.89209,38.750916],[16.109314,38.964478],[15.718872,39.544128],[15.413696,40.048279],[14.998474,40.173096],[14.703308,40.604675],[14.06073,40.786499],[13.628113,41.188293],[12.888123,41.253113],[12.106689,41.704529],[11.191895,42.35553],[10.512085,42.931519],[10.200073,43.920105],[9.702515,44.036316],[8.888916,44.366272],[8.428711,44.231323],[7.850891,43.767273],[7.435303,43.693909],[6.529297,43.128906],[4.556885,43.399719],[3.100525,43.075317],[2.986084,42.473083],[3.03949,41.89209],[2.091919,41.226074],[.810486,41.014709],[.721313,40.678284],[.106689,40.124084],[-.278687,39.31012],[.111328,38.738525],[-.467102,38.29248],[-.683411,37.642273],[-1.438293,37.443115],[-2.146423,36.674072],[-3.41571,36.658875],[-4.368896,36.677917],[-4.995178,36.324707],[-5.377075,35.946899],[-5.866394,36.029907],[-6.236694,36.367676],[-6.520203,36.942871],[-7.453674,37.0979],[-7.855591,36.838318],[-8.382812,36.978882],[-8.898804,36.868896],[-8.746094,37.651489],[-8.840027,38.266296],[-9.287476,38.358521],[-9.526489,38.737488],[-9.446899,39.39209],[-9.048279,39.755127],[-8.977295,40.159302],[-8.768677,40.760681],[-8.790771,41.184326],[-8.990784,41.543518],[-9.03479,41.880676],[-8.984375,42.592896],[-9.392883,43.026672],[-7.97821,43.748474],[-6.754517,43.567871],[-5.411804,43.57428],[-4.347778,43.403503],[-3.517517,43.455872],[-1.901306,43.422913],[-1.384216,44.022705],[-1.193787,46.014893],[-2.225708,47.064514],[-2.963196,47.570312],[-4.491577,47.955078],[-4.592285,48.684082],[-3.295776,48.901672],[-1.616516,48.64447],[-1.933411,49.776489],[-.98938,49.347473],[1.338684,50.127319],[1.639099,50.946716],[2.513489,51.148499],[3.315125,51.345886],[3.830322,51.620483],[4.706116,53.091919],[6.07428,53.510498],[6.905273,53.4823],[7.100525,53.693909],[7.936279,53.748291],[8.121704,53.527893],[8.80072,54.020874],[8.572083,54.395691],[8.526306,54.962891],[8.1203,55.5177],[8.090088,56.5401],[8.256714,56.81012],[8.543518,57.110107],[9.4245,57.172119],[9.775696,57.447876],[10.580078,57.730103],[10.546082,57.215881],[10.250122,56.890076],[10.370117,56.610107],[10.912292,56.458679],[10.667908,56.081482],[10.370117,56.190125],[9.650085,55.470093],[9.921875,54.983093],[9.939697,54.59668],[10.950073,54.363708],[10.939514,54.008728],[11.956299,54.196472],[12.518494,54.47052],[13.647522,54.0755],[14.11969,53.75708],[14.802917,54.05072],[16.363525,54.513306],[17.622925,54.851685],[18.620911,54.682678],[18.696289,54.438721],[19.660706,54.426086],[19.888489,54.866089],[21.268494,55.190491],[21.055908,56.031128],[21.090515,56.783875],[21.581909,57.411926],[22.524475,57.753479],[23.318481,57.006287],[24.120728,57.025696],[24.312927,57.793518],[24.429077,58.383484],[24.061279,58.257507],[23.426697,58.612671],[23.339905,59.187317],[24.604309,59.465881],[25.864319,59.611084],[26.94928,59.445923],[27.981079,59.475525],[29.117676,60.028076],[28.070129,60.503479],[26.25531,60.423889],[24.496704,60.057312],[22.86969,59.846497],[22.290894,60.391907],[21.322327,60.720276],[21.544922,61.705322],[21.059326,62.607483],[21.536072,63.18988],[22.442688,63.817871],[24.73053,64.902283],[25.398071,65.111511],[25.294128,65.534485],[23.903503,66.006897],[22.183289,65.723877],[21.213501,65.026123],[21.36969,64.413696],[19.778931,63.60968],[17.8479,62.749512],[17.11969,61.341309],[17.831482,60.636719],[18.78772,60.081909],[17.869324,58.953918],[16.829285,58.71991],[16.447693,57.041077],[15.879883,56.104309],[14.666687,56.200928],[14.100708,55.407898],[12.942871,55.361877],[12.625122,56.307129],[11.788086,57.441895],[11.027283,58.856079],[10.356689,59.46991],[8.38208,58.313293],[7.048889,58.078918],[5.665894,58.588074],[5.308289,59.66333],[4.992126,61.97113],[5.912903,62.614502],[8.553528,63.454102],[10.52771,64.486084],[12.358276,65.8797],[14.761292,67.81073],[16.435913,68.563293],[19.184082,69.817505],[21.378479,70.25531],[23.023682,70.202087],[24.546692,71.030518],[26.370117,70.986328],[28.165527,71.185486],[31.293518,70.453918],[30.005493,70.186279],[31.101074,69.558105],[32.13269,69.905884],[33.775513,69.301514],[36.514099,69.063477],[40.29248,67.932495],[41.059875,67.457275],[41.126099,66.791687],[40.01593,66.266296],[38.382874,65.999512],[33.918701,66.759705],[33.184509,66.632507],[34.81488,65.900085],[34.943909,64.41449],[36.231323,64.109497],[37.012878,63.849915],[37.14209,64.334717],[36.5177,64.780273],[37.176086,65.143311],[39.593506,64.520874],[40.43573,64.764526],[39.762695,65.496887],[42.093079,66.476318],[43.016113,66.418701],[43.94989,66.069092],[44.532288,66.756287],[43.698486,67.352478],[44.187927,67.9505],[43.452881,68.570923],[46.250122,68.250122],[46.821289,67.68988],[45.555298,67.566528],[45.562073,67.010071],[46.349121,66.667725],[47.894287,66.884521],[48.138672,67.522522],[50.227722,67.998718],[53.717529,68.857483],[54.47168,68.808289],[53.485901,68.201294],[54.726318,68.097107],[55.442688,68.438721],[57.317078,68.466309],[58.802124,68.88092],[59.941528,68.278503],[61.077881,68.940674],[60.03009,69.520081],[60.55011,69.850098],[63.504089,69.547485],[64.888123,69.234924],[68.512085,68.092285],[69.180725,68.615723],[68.16449,69.144287],[68.135315,69.356506],[66.930115,69.454712],[67.259888,69.928711],[66.724915,70.708923],[66.694702,71.029114],[68.5401,71.934509],[69.196289,72.843506],[69.940125,73.0401],[72.587524,72.776306],[72.796082,72.220093],[71.848083,71.409119],[72.470093,71.090271],[72.79187,70.391113],[72.564697,69.020874],[73.667908,68.407898],[73.238708,67.740479],[71.28009,66.320129],[72.423096,66.172729],[72.820679,66.532715],[73.921082,66.78949],[74.186523,67.284302],[75.052124,67.760498],[74.469299,68.329102],[74.935913,68.989319],[73.842285,69.071472],[73.601929,69.627686],[74.399902,70.631897],[73.101074,71.447083],[74.89093,72.121277],[74.659302,72.832275],[75.158081,72.855103],[75.683472,72.300476],[75.289124,71.335693],[76.359131,71.152893],[75.903076,71.874084],[77.576721,72.267273],[79.6521,72.320129],[81.500122,71.750122],[80.610718,72.582886],[80.511108,73.648315],[82.250122,73.850098],[84.655273,73.805908],[86.822327,73.93689],[86.009705,74.459717],[87.16687,75.116516],[88.315674,75.143921],[90.260071,75.640076],[92.900696,75.773315],[93.234314,76.047302],[95.860107,76.140076],[96.678284,75.915527],[98.922485,76.446899],[100.759705,76.430298],[101.035278,76.861877],[101.990906,77.287476],[104.351685,77.697876],[106.066711,77.373901],[104.705078,77.127502],[106.970276,76.974304]],[[49.110291,41.282288],[49.618896,40.572876],[50.0849,40.526306],[50.392883,40.256531],[49.569275,40.176086],[49.395325,39.399475],[49.223328,39.049316],[48.856506,38.815491],[48.883301,38.320313],[49.199707,37.582886],[50.147888,37.374695],[50.842285,36.872925],[52.264099,36.7005],[53.825928,36.965088],[53.921692,37.198914],[53.735474,37.906128],[53.88092,38.952087],[53.101074,39.29071],[53.35791,39.975281],[52.694092,40.033691],[52.915283,40.876526],[53.858276,40.631104],[54.736877,40.951111],[54.008301,41.551331],[53.72168,42.123291],[52.916687,41.868103],[52.814697,41.135498],[52.502502,41.783325],[52.446289,42.027283],[52.692078,42.443909],[52.501526,42.792297],[51.342529,43.133118],[50.891296,44.031128],[50.339111,44.284119],[50.305725,44.609924],[51.278503,44.514893],[51.316895,45.246094],[52.16748,45.408508],[53.040894,45.259094],[53.220886,46.23468],[53.042725,46.853088],[52.042114,46.804687],[51.192078,47.048706],[50.034119,46.609131],[49.101318,46.399475],[48.645508,45.806274],[47.675903,45.641479],[46.682129,44.609314],[47.590881,43.660278],[47.492493,42.986694],[48.584473,41.808899],[49.110291,41.282288]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-96.436304,77.491343,-93.720656,77.834629],geometry:{type:"Polygon",coordinates:[[[-93.840003,77.519997],[-94.295608,77.491343],[-96.169654,77.555111],[-96.436304,77.834629],[-94.422577,77.820005],[-93.720656,77.634331],[-93.840003,77.519997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-113.534279,77.409229,-109.854452,78.152956],geometry:{type:"Polygon",coordinates:[[[-110.186938,77.697015],[-112.051191,77.409229],[-113.534279,77.732207],[-112.724587,78.05105],[-111.264443,78.152956],[-109.854452,77.996325],[-110.186938,77.697015]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[20.72601,77.44493,24.72412,78.45494],geometry:{type:"Polygon",coordinates:[[[24.72412,77.85385],[22.49032,77.44493],[20.72601,77.67704],[21.41611,77.93504],[20.8119,78.25463],[22.88426,78.45494],[23.28134,78.07954],[24.72412,77.85385]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-112.542091,78.40692,-109.663146,78.849994],geometry:{type:"Polygon",coordinates:[[[-109.663146,78.601973],[-110.881314,78.40692],[-112.542091,78.407902],[-112.525891,78.550555],[-111.50001,78.849994],[-110.963661,78.804441],[-109.663146,78.601973]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-98.631984,77.850597,-95.559278,78.87193],geometry:{type:"Polygon",coordinates:[[[-95.830295,78.056941],[-97.309843,77.850597],[-98.124289,78.082857],[-98.552868,78.458105],[-98.631984,78.87193],[-97.337231,78.831984],[-96.754399,78.765813],[-95.559278,78.418315],[-95.830295,78.056941]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-105.492289,77.907545,-99.670939,79.301594],geometry:{type:"Polygon",coordinates:[[[-100.060192,78.324754],[-99.670939,77.907545],[-101.30394,78.018985],[-102.949809,78.343229],[-105.176133,78.380332],[-104.210429,78.67742],[-105.41958,78.918336],[-105.492289,79.301594],[-103.529282,79.165349],[-100.825158,78.800462],[-100.060192,78.324754]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[99.43814,77.921,105.37243,79.34641],geometry:{type:"Polygon",coordinates:[[[105.07547,78.30689],[99.43814,77.921],[101.2649,79.23399],[102.08635,79.34641],[102.837815,79.28129],[105.37243,78.71334],[105.07547,78.30689]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[10.44453,76.77045,21.54383,80.05086],geometry:{type:"Polygon",coordinates:[[[18.25183,79.70175],[21.54383,78.95611],[19.02737,78.5626],[18.47172,77.82669],[17.59441,77.63796],[17.1182,76.80941],[15.91315,76.77045],[13.76259,77.38035],[14.66956,77.73565],[13.1706,78.02493],[11.22231,78.8693],[10.44453,79.65239],[13.17077,80.01046],[13.71852,79.66039],[15.14282,79.67431],[15.52255,80.01608],[16.99085,80.05086],[18.25183,79.70175]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[17.368015,79.400012,27.407506,80.657144],geometry:{type:"Polygon",coordinates:[[[25.447625,80.40734],[27.407506,80.056406],[25.924651,79.517834],[23.024466,79.400012],[20.075188,79.566823],[19.897266,79.842362],[18.462264,79.85988],[17.368015,80.318896],[20.455992,80.598156],[21.907945,80.357679],[22.919253,80.657144],[25.447625,80.40734]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[44.846958,80.010181,51.522933,80.918885],geometry:{type:"Polygon",coordinates:[[[51.136187,80.54728],[49.793685,80.415428],[48.894411,80.339567],[48.754937,80.175468],[47.586119,80.010181],[46.502826,80.247247],[47.072455,80.559424],[44.846958,80.58981],[46.799139,80.771918],[48.318477,80.78401],[48.522806,80.514569],[49.09719,80.753986],[50.039768,80.918885],[51.522933,80.699726],[51.136187,80.54728]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[91.18107,78.7562,100.186655,81.2504],geometry:{type:"Polygon",coordinates:[[[99.93976,78.88094],[97.75794,78.7562],[94.97259,79.044745],[93.31288,79.4265],[92.5454,80.14379],[91.18107,80.34146],[93.77766,81.0246],[95.940895,81.2504],[97.88385,80.746975],[100.186655,79.780135],[99.93976,78.88094]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-96.70972,78.21533,-85.81435,81.25739],geometry:{type:"Polygon",coordinates:[[[-87.02,79.66],[-85.81435,79.3369],[-87.18756,79.0393],[-89.03535,78.28723],[-90.80436,78.21533],[-92.87669,78.34333],[-93.95116,78.75099],[-93.93574,79.11373],[-93.14524,79.3801],[-94.974,79.37248],[-96.07614,79.70502],[-96.70972,80.15777],[-96.01644,80.60233],[-95.32345,80.90729],[-94.29843,80.97727],[-94.73542,81.20646],[-92.40984,81.25739],[-91.13289,80.72345],[-89.45,80.509322],[-87.81,80.32],[-87.02,79.66]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-91.58702,76.17812,-61.85,83.23324],geometry:{type:"Polygon",coordinates:[[[-68.5,83.106322],[-65.82735,83.02801],[-63.68,82.9],[-61.85,82.6286],[-61.89388,82.36165],[-64.334,81.92775],[-66.75342,81.72527],[-67.65755,81.50141],[-65.48031,81.50657],[-67.84,80.9],[-69.4697,80.61683],[-71.18,79.8],[-73.2428,79.63415],[-73.88,79.430162],[-76.90773,79.32309],[-75.52924,79.19766],[-76.22046,79.01907],[-75.39345,78.52581],[-76.34354,78.18296],[-77.88851,77.89991],[-78.36269,77.50859],[-79.75951,77.20968],[-79.61965,76.98336],[-77.91089,77.022045],[-77.88911,76.777955],[-80.56125,76.17812],[-83.17439,76.45403],[-86.11184,76.29901],[-87.6,76.42],[-89.49068,76.47239],[-89.6161,76.95213],[-87.76739,77.17833],[-88.26,77.9],[-87.65,77.970222],[-84.97634,77.53873],[-86.34,78.18],[-87.96192,78.37181],[-87.15198,78.75867],[-85.37868,78.9969],[-85.09495,79.34543],[-86.50734,79.73624],[-86.93179,80.25145],[-84.19844,80.20836],[-83.408696,80.1],[-81.84823,80.46442],[-84.1,80.58],[-87.59895,80.51627],[-89.36663,80.85569],[-90.2,81.26],[-91.36786,81.5531],[-91.58702,81.89429],[-90.1,82.085],[-88.93227,82.11751],[-86.97024,82.27961],[-85.5,82.652273],[-84.260005,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.30664,83.13056],[-76.25,83.172059],[-75.71878,83.06404],[-72.83153,83.23324],[-70.665765,83.169781],[-68.5,83.106322]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-73.297,60.03676,-12.20855,83.64513],geometry:{type:"Polygon",coordinates:[[[-27.10046,83.51966],[-20.84539,82.72669],[-22.69182,82.34165],[-26.51753,82.29765],[-31.9,82.2],[-31.39646,82.02154],[-27.85666,82.13178],[-24.84448,81.78697],[-22.90328,82.09317],[-22.07175,81.73449],[-23.16961,81.15271],[-20.62363,81.52462],[-15.76818,81.91245],[-12.77018,81.71885],[-12.20855,81.29154],[-16.28533,80.58004],[-16.85,80.35],[-20.04624,80.17708],[-17.73035,80.12912],[-18.9,79.4],[-19.70499,78.75128],[-19.67353,77.63859],[-18.47285,76.98565],[-20.03503,76.94434],[-21.67944,76.62795],[-19.83407,76.09808],[-19.59896,75.24838],[-20.66818,75.15585],[-19.37281,74.29561],[-21.59422,74.22382],[-20.43454,73.81713],[-20.76234,73.46436],[-22.17221,73.30955],[-23.56593,73.30663],[-22.31311,72.62928],[-22.29954,72.18409],[-24.27834,72.59788],[-24.79296,72.3302],[-23.44296,72.08016],[-22.13281,71.46898],[-21.75356,70.66369],[-23.53603,70.471],[-24.30702,70.85649],[-25.54341,71.43094],[-25.20135,70.75226],[-26.36276,70.22646],[-23.72742,70.18401],[-22.34902,70.12946],[-25.02927,69.2588],[-27.74737,68.47046],[-30.67371,68.12503],[-31.77665,68.12078],[-32.81105,67.73547],[-34.20196,66.67974],[-36.35284,65.9789],[-37.04378,65.93768],[-38.37505,65.69213],[-39.81222,65.45848],[-40.66899,64.83997],[-40.68281,64.13902],[-41.1887,63.48246],[-42.81938,62.68233],[-42.41666,61.90093],[-42.86619,61.07404],[-43.3784,60.09772],[-44.7875,60.03676],[-46.26364,60.85328],[-48.26294,60.85843],[-49.23308,61.40681],[-49.90039,62.38336],[-51.63325,63.62691],[-52.14014,64.27842],[-52.27659,65.1767],[-53.66166,66.09957],[-53.30161,66.8365],[-53.96911,67.18899],[-52.9804,68.35759],[-51.47536,68.72958],[-51.08041,69.14781],[-50.87122,69.9291],[-52.013585,69.574925],[-52.55792,69.42616],[-53.45629,69.283625],[-54.68336,69.61003],[-54.75001,70.28932],[-54.35884,70.821315],[-53.431315,70.835755],[-51.39014,70.56978],[-53.10937,71.20485],[-54.00422,71.54719],[-55,71.406537],[-55.83468,71.65444],[-54.71819,72.58625],[-55.32634,72.95861],[-56.12003,73.64977],[-57.32363,74.71026],[-58.59679,75.09861],[-58.58516,75.51727],[-61.26861,76.10238],[-63.39165,76.1752],[-66.06427,76.13486],[-68.50438,76.06141],[-69.66485,76.37975],[-71.40257,77.00857],[-68.77671,77.32312],[-66.76397,77.37595],[-71.04293,77.63595],[-73.297,78.04419],[-73.15938,78.43271],[-69.37345,78.91388],[-65.7107,79.39436],[-65.3239,79.75814],[-68.02298,80.11721],[-67.15129,80.51582],[-63.68925,81.21396],[-62.23444,81.3211],[-62.65116,81.77042],[-60.28249,82.03363],[-57.20744,82.19074],[-54.13442,82.19962],[-53.04328,81.88833],[-50.39061,82.43883],[-48.00386,82.06481],[-46.59984,81.985945],[-44.523,81.6607],[-46.9007,82.19979],[-46.76379,82.62796],[-43.40644,83.22516],[-39.89753,83.18018],[-38.62214,83.54905],[-35.08787,83.64513],[-27.10046,83.51966]]]}}],bbox:[-180,-90,180,83.64513]};function Bi(n,e){return(n%e+e)%e}function g7(n,e,t,i){return n+(Bi(e-n+i/2,i)-i/2)*t}function Nc(n){let e=(n/864e5+24405875e-1-2451545)/36525,t=-62e-7*e**3+.093104*e**2+(876600*3600+8640184812866e-6)*e+67310.54841;return Bi(t*Math.PI/180/240,Math.PI*2)}function Oo(n,e){let t=0,i=n.length-1;for(;i-t>1;){let h=t+i>>1;Date.parse(n[h].time)<=e?t=h:i=h}let s=n[t],r=n[i],a=Date.parse(s.time),o=Date.parse(r.time),c=Math.max(0,Math.min(1,(e-a)/(o-a))),l={};for(let h of["x","y","z","latitude_deg","altitude_km","speed_km_s"])l[h]=s[h]+(r[h]-s[h])*c;return l.longitude_deg=Bi(g7(s.longitude_deg,r.longitude_deg,c,360)+180,360)-180,l.gmst_rad=Nc(a+(o-a)*c),l}var Mi=8,Fc=["#66ccff","#ff8066","#9be564","#d69cff","#ffd166","#72e0c1","#f28cb1","#b8c0ff"],Dd=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function qn(n){return Dd[Math.floor(Bi(n,360)/22.5+.5)%Dd.length]}function Yn(n){if(/\b403\b/.test(n))return"CelesTrak is limiting downloads of this data for now. Try again later.";if(/Failed to fetch|NetworkError|Load failed/.test(n))return"The Khonsu server could not be reached.";let e=/deadline exceeded|Timeout exceeded|i\/o timeout|connection refused|connection reset|no such host|\b50[234]\b/i.test(n);return e&&/celestrak/i.test(n)?"CelesTrak isn't answering right now. Try again in a few minutes. Anything you've loaded before still works from its saved copy.":e?"The data provider isn't answering right now. Try again in a few minutes.":n}function Fd(n){let e=(t,i)=>{try{return t(n())}catch{return i}};return{getItem:t=>e(i=>i.getItem(t),null),setItem:(t,i)=>e(s=>s.setItem(t,i)),removeItem:t=>e(i=>i.removeItem(t))}}function Oc(n){return/^\d{1,9}$/.test(n)&&Number(n)>=1}function $n(n){return String(n).replace(/^0+(?=\d)/,"")}function Ud(n){let e=new URLSearchParams(n),t=new Set,i=[];for(let r of(e.get("sats")||"").split(",")){let a=$n(r.trim());Oc(a)&&!t.has(a)&&i.length<Mi&&(t.add(a),i.push(a))}let s=$n(e.get("selected")||"");return{ids:i,selected:t.has(s)?s:i[0]??null}}function Od(n,e){if(!n.length)return"";let t=new URLSearchParams;return t.set("sats",n.join(",")),e&&e!==n[0]&&t.set("selected",e),`?${t.toString().replaceAll("%2C",",")}`}function Bd(n){return Fc.find(e=>!n.includes(e))??Fc[n.length%Fc.length]}function Bc({lat:n,lon:e,alt:t}){let i=Number(n),s=Number(e),r=t===""||t===void 0||t===null?0:Number(t);return String(n).trim()===""||!Number.isFinite(i)||i<-90||i>90?{error:"Latitude must be between -90 and 90 degrees."}:String(e).trim()===""||!Number.isFinite(s)||s<-180||s>180?{error:"Longitude must be between -180 and 180 degrees."}:!Number.isFinite(r)||r<-1||r>100?{error:"Altitude must be between -1 and 100 km."}:{observer:{lat:i,lon:s,alt:r}}}function kd(n){for(let e of["observer","utc"]){let t=n.getItem(`tlego.${e}`);t!==null&&(n.getItem(`khonsu.${e}`)===null&&n.setItem(`khonsu.${e}`,t),n.removeItem(`tlego.${e}`))}}function zd(n){try{let e=JSON.parse(n.getItem("khonsu.observer"));return typeof e?.lat!="number"||typeof e?.lon!="number"?null:Bc(e).observer??null}catch{return null}}function Vd(n,e){let t=e.trim().toLowerCase();return t?n.filter(i=>i.name.toLowerCase().includes(t)||i.norad_id.includes(t)):n}function kc(n,e){if(!n.length||n[0].elevation_deg===void 0)return null;let t=0,i=n.length-1;for(;i-t>1;){let l=t+i>>1;Date.parse(n[l].time)<=e?t=l:i=l}let s=n[t],r=n[i],a=Date.parse(r.time)-Date.parse(s.time),o=a>0?Math.max(0,Math.min(1,(e-Date.parse(s.time))/a)):0;return{azimuth:Bi(s.azimuth_deg+(Bi(r.azimuth_deg-s.azimuth_deg+180,360)-180)*o,360),elevation:s.elevation_deg+(r.elevation_deg-s.elevation_deg)*o}}function Gd(n,e){let t=n[0]?.sunlit??!0;for(let i of n){if(Date.parse(i.time)>e)break;t=i.sunlit}return t}function Hd(n,e,t){if(!n.length)return{first:0,count:0};let i=t*6e4,s=Date.parse(n[0].time),r=Date.parse(n[n.length-1].time);if(!(i>0)||r-s<=i)return{first:0,count:n.length};let a=zc(e-i/2,s,r-i),o=a+i,c=n.length,l=-1;return n.forEach((h,f)=>{let u=Date.parse(h.time);u>=a&&u<=o&&(c=Math.min(c,f),l=f)}),l<c?{first:0,count:n.length}:(c=Math.max(0,c-1),l=Math.min(n.length-1,l+1),{first:c,count:l-c+1})}function zc(n,e,t){return Math.min(t,Math.max(e,n))}var _7=new Set(["sampled_passes","estimated_visibility"]);function Wd(n){let e=new Map;for(let t of n)for(let i of t?.warnings??[])!_7.has(i.code)&&!e.has(i.code)&&e.set(i.code,i);return[...e.values()]}function Xd(n,e){return n.map(t=>({...t,visible:e.find(i=>Date.parse(i.start.at)<=Date.parse(t.end)&&Date.parse(i.end.at)>=Date.parse(t.start))??null}))}function $d(n){let e=Math.max(0,Math.round(n/1e3)),t=Math.floor(e/3600),i=Math.floor(e%3600/60);return t>=48?`${Math.round(t/24)} days`:t>0?`${t} h ${i} min`:i>0?`${i} min ${e%60} s`:`${e} s`}function Vc(n,e){let t=n-e;if(t<=0)return"now";if(t<6e4)return"in under a minute";let i=Math.round(t/6e4);return i<60?`in ${i} min`:`in ${Math.floor(i/60)} h ${i%60} min`}function Bo(n,e){return Date.parse(n.start)<=Date.parse(e.end)&&Date.parse(n.end)>=Date.parse(e.start)}function Gc(n,e,t){let i=Math.abs(n).toFixed(1);return`${i}\xB0 ${n>=0||Number(i)===0?e:t}`}function Es(n,e){return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:e?"UTC":void 0}).format(n)}function As(n,e){return new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"numeric",month:"short",timeZone:e?"UTC":void 0}).format(n)}function qd(n){return n>=5?"Geomagnetic storm":n>=4?"Active":"Quiet"}function Yd(n){return!Number.isFinite(n)||n<=0?null:n>=1e9?`${(n/1e9).toFixed(3)} GHz`:`${(n/1e6).toFixed(3)} MHz`}function Zd(n){if(!n.length)return null;let e=n.reduce((i,s)=>s.kp_max>i.kp_max?s:i),t=n.reduce((i,s)=>i+s.f107,0)/n.length;return{strongest:e,meanFlux:t}}function Hc(n,e){let t=Math.max(0,Math.round((e-new Date(n).getTime())/6e4));if(t<1)return"just now";if(t<60)return`${t} min ago`;let i=Math.round(t/60);return i<48?`${i} h ago`:`${Math.round(i/24)} days ago`}function Wc(n){return n?"UTC":"local"}function Kd(n,e){return(e-Date.parse(n))/864e5}function Xc(n,e,t){return`${Math.abs(n).toFixed(3)}\xB0 ${n>=0?e:t}`}var x7=36e5,y7=25*36e5;function $c(n){let e=Math.floor((n-x7)/1e3)*1e3;return{start:e,end:e+y7}}function qc(n,e){return e<n.start||e>n.end-2*36e5}function Yc(n){let e=n?.kp;return e?.length?e[e.length-1].kp??null:null}function Jd(n){return(n??[]).filter(e=>e.alive===!0&&e.status==="active")}function Nd(n){return String(n??"").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"")}function jd(n,e){let t=Nd(n),i=Nd(e);return!t||!i?!1:t.includes(i)||i.includes(t)}function Qd(n,e=3e5){if(!n?.length)return[];let t=[...n].sort((r,a)=>Date.parse(a.time)-Date.parse(r.time)),i=[],s=null;for(let r of t){let a=Date.parse(r.time);(!i.length||s-a>e)&&i.push([]),i[i.length-1].push(r),s=a}return i.map(r=>{let a=r[0],o=r.map(c=>c.cloud_cover).filter(c=>typeof c=="number");return{time:Date.parse(a.time),scenes:r,lat:a.center_lat,lon:a.center_lon,minCloud:o.length?Math.min(...o):null,maxCloud:o.length?Math.max(...o):null}})}function ef(n,e){if(!n?.length)return null;let t=null,i=1/0;for(let s of n){let r=Math.abs(Date.parse(s.time)-e);r<i&&(t=s,i=r)}return i<=36e5?t.percent:null}function tf(n,e){let t=null,i=1/0;for(let s of n??[]){let r=Date.parse(s.net);Number.isNaN(r)||r<e||r<i&&(t=s,i=r)}return t}function nf(n,e){let t=Date.parse(n.net)-e,i=String(n.precision??"").toLowerCase(),s=i!==""&&!["second","minute","hour"].includes(i),r=s?"in about":"in",a=Math.round(t/36e5);if(t<36e5)return s?`${r} ${Math.max(1,a)} h`:`${r} ${Math.max(1,Math.round(t/6e4))} min`;if(t<36*36e5)return`${r} ${a} h`;let o=Math.round(t/864e5);return`${r} ${o} ${o===1?"day":"days"}`}var v7={sun_synchronous:"Sun-synchronous",dawn_dusk:"Dawn-dusk",molniya:"Molniya",tundra:"Tundra",polar:"Polar",near_equatorial:"Near-equatorial",retrograde:"Retrograde"};function b7(n){return(Array.isArray(n)?n:[]).filter(e=>typeof e?.url=="string"&&/^https:\/\//.test(e.url)).map(e=>({label:String(e.label||"Source"),title:String(e.title||e.label||"Source"),url:e.url}))}function Uc(n){return(Array.isArray(n)?n:[]).filter(e=>typeof e?.text=="string"&&e.text.trim()).map(e=>({text:e.text,sources:b7(e.sources)}))}function sf(n,e=[]){let t=n?.described?n.profile:null;if(!t||!Array.isArray(t.instruments)||t.instruments.length===0)return null;let i=new Map(e.map(a=>[a.id,a])),s=(Array.isArray(t.kinds)?t.kinds:[]).filter(a=>a?.id&&a?.name),r=new Map(s.map(a=>[a.id,a.name]));return{name:String(t.name||""),chips:s.map(a=>a.name),items:Uc(t.statements),instruments:t.instruments.map(a=>({name:String(a.name||""),kinds:(a.kinds??[]).map(o=>r.get(o)).filter(Boolean),items:Uc(a.statements)})),kinds:s.map(a=>({id:a.id,name:a.name,items:Uc(a.statements),views:(a.layers??[]).filter(o=>i.has(o)).map(o=>({id:o,name:i.get(o).name})),lessons:(Array.isArray(a.lessons)?a.lessons:[]).filter(o=>o?.id&&o?.title).map(o=>({id:String(o.id),title:String(o.title)}))}))}}function rf(n){if(!n||!Array.isArray(n.statements)||n.statements.length===0)return null;let e=[n.regime_name||n.regime,...(n.patterns??[]).map(i=>v7[i])].filter(Boolean),t=n.statements.filter(i=>typeof i?.text=="string"&&i.text.trim()).map(i=>({text:i.text,estimate:i.basis!=="derived",sources:(Array.isArray(i.sources)?i.sources:[]).filter(s=>typeof s?.url=="string"&&/^https:\/\//.test(s.url)).map(s=>({label:String(s.label||"Source"),title:String(s.title||s.label||"Source"),url:s.url}))}));return t.length?{chips:e,items:t}:null}var S7={lat:80.8,lon:-72.8},M7={lat:-80.8,lon:107.2};function w7(n){return 66.5-2*Math.min(9,Math.max(0,n))}function af(n,e,t=120){let i=Math.PI/180,s=n.lat*i,r=n.lon*i,a=e*i,o=[];for(let c=0;c<t;c+=1){let l=2*Math.PI*c/t,h=Math.asin(Math.sin(s)*Math.cos(a)+Math.cos(s)*Math.sin(a)*Math.cos(l)),f=r+Math.atan2(Math.sin(l)*Math.sin(a)*Math.cos(s),Math.cos(a)-Math.sin(s)*Math.sin(h));o.push({lat:h/i,lon:((f/i+180)%360+360)%360-180})}return o.push({...o[0]}),o}function of(n){let e=90-w7(n);return[af(S7,e),af(M7,e)]}var Zc=6378.137,Kc=n=>new W(n.x/Zc,n.z/Zc,-n.y/Zc);function wi(n,e,t=1.002){let i=e*Math.PI/180,s=n*Math.PI/180;return new W(t*Math.cos(s)*Math.cos(i),t*Math.sin(s),-t*Math.cos(s)*Math.sin(i))}function lf(n,e,t){let i=[];for(let r of n)for(let a=0;a<r.length-1;a+=1)i.push(r[a].x,r[a].y,r[a].z,r[a+1].x,r[a+1].y,r[a+1].z);let s=new Et;return s.setAttribute("position",new Tt(i,3)),new Zs(s,new Wn({color:e,transparent:!0,opacity:t}))}var T7=1;function E7(){let n=new zn;n.add(new At(new _n(1,96,64),new tr({color:1195868,specular:2381422,shininess:14})));let e=[];for(let i=-60;i<=60;i+=30){let s=[];for(let r=-180;r<=180;r+=3)s.push(wi(i,r));e.push(s)}for(let i=0;i<360;i+=30){let s=[];for(let r=-90;r<=90;r+=3)s.push(wi(r,i));e.push(s)}n.add(lf(e,7910597,.1));let t=[];for(let i of Ld.features){let s=i.geometry.type==="Polygon"?[i.geometry.coordinates]:i.geometry.coordinates;for(let r of s)for(let a of r)t.push(a.map(([o,c])=>wi(c,o)))}return n.add(lf(t,14278378,.8)),n}function A7(){let n=[],e=7,t=()=>(e=e*16807%2147483647,e/2147483647);for(let s=0;s<1600;s+=1){let r=t()*2-1,a=t()*Math.PI*2,o=Math.sqrt(1-r*r)*400;n.push(o*Math.cos(a),o*Math.sin(a),r*400)}let i=new Et;return i.setAttribute("position",new Tt(n,3)),new Ks(i,new fs({color:11452364,size:1.1,sizeAttenuation:!1,transparent:!0,opacity:.6}))}function cf(n,{onPick:e,onSelect:t}){let i=new $s,s=new Gt(40,1,.01,2e3),r=new Lo({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.append(r.domElement);let a=r.domElement;a.setAttribute("role","img"),a.setAttribute("aria-label","Earth with the tracked satellites. Drag to rotate and scroll to zoom. The readouts beside the globe give the same information as text.");let o=new Uo(s,a);o.enableDamping=!0,o.enablePan=!1,o.minDistance=1.02;let c=null;o.addEventListener("start",()=>{c=null}),o.maxDistance=60,i.add(A7());let l=E7();i.add(l);let h=new At(new _n(1.025,64,48),new gn({color:4892888,transparent:!0,opacity:.09,side:Ot}));i.add(h),i.add(new or(12111840,.55));let f=new ar(16774368,2.6);f.position.set(4,3,5),i.add(f);let u=new At(new _n(.012,12,10),new gn({color:16777215}));u.visible=!1,l.add(u);let m=new At(new _n(.014,12,10),new gn({color:5088255}));m.visible=!1,l.add(m);let x=new Et;x.setAttribute("position",new qt(new Float32Array(6),3));let y=new hi(x,new Wn({color:16777215,transparent:!0,opacity:.55}));y.visible=!1,y.frustumCulled=!1,i.add(y);let p=new Map,d=null,M=!1,E=!1,v=0,T=[],S=0;function R(){T.forEach((A,L)=>{A.mesh&&(A.mesh.renderOrder=T7+L)})}function _(A){A.mesh&&(l.remove(A.mesh),A.mesh.geometry.dispose(),A.mesh.material.dispose(),A.texture.dispose(),A.mesh=null)}async function w(A){let L=await fetch(A);if(!L.ok)throw new Error(`The image request failed (${L.status}).`);let q=await L.blob(),ie=URL.createObjectURL(q);return new Promise((me,ge)=>{let Le=new Image;Le.onload=()=>{URL.revokeObjectURL(ie),Le.imageryMeta={pictureDate:L.headers.get("X-Khonsu-Picture-Date")||"",fetchedAt:L.headers.get("X-Khonsu-Fetched-At")||"",stale:L.headers.get("X-Khonsu-Stale")==="true"},me(Le)},Le.onerror=()=>{URL.revokeObjectURL(ie),ge(new Error("The image could not be loaded."))},Le.src=ie})}function D(A){let{naturalWidth:L,naturalHeight:q}=A,ie=document.createElement("canvas");ie.width=L,ie.height=q;let me=ie.getContext("2d");me.drawImage(A,0,0);let ge=document.createElement("canvas");ge.width=L,ge.height=q;let Le=ge.getContext("2d");return Le.filter="blur(10px)",Le.drawImage(A,0,0),me.globalCompositeOperation="destination-in",me.drawImage(ge,0,0),me.drawImage(ge,0,0),ie}async function N(A,L){let q=await w(A),ie=L?new js(D(q)):new Ft(q);return ie.colorSpace=$t,ie.userData.imageryMeta=q.imageryMeta,ie.needsUpdate=!0,ie}let H=1.001;function Y(A){if(!A)return new _n(1,96,64);let L=Math.PI/180,q=Math.max(8,Math.ceil((A.maxLon-A.minLon)/.5)),ie=Math.max(8,Math.ceil((A.maxLat-A.minLat)/.5));return new _n(1,Math.min(256,q),Math.min(256,ie),(A.minLon+180)*L,(A.maxLon-A.minLon)*L,(90-A.maxLat)*L,(A.maxLat-A.minLat)*L)}function O(A,L){let q={id:A.id,url:A.url,transparent:A.transparent,box:A.box??null,request:L,status:null,texture:null,mesh:null};return q.status=N(A.url,A.transparent).then(ie=>q.request!==S?(ie.dispose(),new Error("This layer was replaced before it loaded.")):(q.texture=ie,q.meta=ie.userData.imageryMeta,q.mesh=new At(Y(q.box),new gn({map:ie,transparent:A.transparent,depthWrite:!1,depthFunc:li,toneMapped:!1})),q.box&&q.mesh.scale.setScalar(H),l.add(q.mesh),R(),"ok"),ie=>ie),q}function P(A){let L=++S,q=T,ie=new Set,me=[];for(let ge of A){if(ie.has(ge.id))continue;ie.add(ge.id);let Le=!!ge.transparent,U=q.find(tt=>tt.id===ge.id&&tt.url===ge.url&&tt.transparent===Le);U?(U.request=L,me.push(U)):me.push(O({id:ge.id,url:ge.url,transparent:Le,box:ge.box},L))}for(let ge of q)me.includes(ge)||_(ge);return T=me,R(),Promise.all(me.map(ge=>ge.status.then(Le=>[ge.id,Le==="ok"&&ge.meta?{status:Le,meta:ge.meta}:Le]))).then(Object.fromEntries)}let B=[];function V(A){for(let L of B)l.remove(L),L.geometry.dispose(),L.material.dispose();if(B=[],!!Number.isFinite(A))for(let L of of(A)){let q=new Et().setFromPoints(L.map(({lat:ge,lon:Le})=>wi(ge,Le,1.004))),ie=new nr({color:10476718,transparent:!0,opacity:.8,dashSize:.03,gapSize:.02}),me=new hi(q,ie);me.computeLineDistances(),l.add(me),B.push(me)}}function ee(A,L=null){c=null;let q=s.fov*Math.PI/360,ie=Math.min(q,Math.atan(Math.tan(q)*s.aspect)),me=L==null?0:L/Math.sin(ie)*1.1,ge=Math.min(o.maxDistance,Math.max(3.6,(L??A.length())*2.6,me));s.position.copy(A.normalize().add(new W(0,.35,0)).normalize().multiplyScalar(ge)),o.target.set(0,0,0),o.update()}function X(A=d){let L=p.get(A),q=L?L.marker.position.clone():new W(.68,.42,.76);q.lengthSq()<1e-6&&q.set(.68,.42,.76);let ie=L?.line.geometry.getAttribute("position"),me=Math.max(1,q.length());for(let ge=0;ge<(ie?.count??0);ge+=1)me=Math.max(me,Math.hypot(ie.getX(ge),ie.getY(ge),ie.getZ(ge)));ee(q,me)}function Q(A){M=A,o.enableRotate=!A}function oe(A,L){m.position.copy(wi(A,L,1.003)),m.visible=!0,Q(!1),l.updateMatrixWorld(!0),ee(m.getWorldPosition(new W))}function Pe(A,L,q=null){Q(!1),l.updateMatrixWorld(!0);let ie=wi(A,L,1).applyMatrix4(l.matrixWorld);if(!Number.isFinite(q)){ee(ie);return}s.position.copy(ie.normalize().multiplyScalar(Math.max(o.minDistance,Math.min(o.maxDistance,q)))),o.target.set(0,0,0),o.update(),c={lat:A,lon:L}}function ye(){m.visible=!1}function se(A,L,q){ue(A);let ie=new Float32Array(L.samples.length*3);L.samples.forEach((tt,Ye)=>{let C=Kc(tt);ie.set([C.x,C.y,C.z],Ye*3)});let me=new Et;me.setAttribute("position",new qt(ie,3));let ge=new hi(me,new Wn({color:q,transparent:!0,opacity:.4}));ge.frustumCulled=!1;let Le=new At(new _n(.014,16,12),new gn({color:q}));i.add(ge,Le),p.set(A,{line:ge,marker:Le,track:L});let U=Kc(L.sun_km);f.position.copy(U.normalize().multiplyScalar(10)),F(v)}function ue(A){let L=p.get(A);L&&(i.remove(L.line,L.marker),L.line.geometry.dispose(),L.line.material.dispose(),L.marker.geometry.dispose(),L.marker.material.dispose(),p.delete(A))}function he(){for(let[A,L]of p){let q=A===d;L.line.material.opacity=q?.95:.3,L.marker.scale.setScalar(q?1.5:1)}}function F(A){v=A,l.rotation.y=Nc(A);for(let L of p.values()){let{samples:q}=L.track;if(L.marker.position.copy(Kc(Oo(q,A))),L.rangeAt===void 0||Math.abs(A-L.rangeAt)>15e3){let ie=Hd(q,A,L.track.period_minutes);L.line.geometry.setDrawRange(ie.first,ie.count),L.rangeAt=A}}if(c){l.updateMatrixWorld(!0);let L=wi(c.lat,c.lon,1).applyMatrix4(l.matrixWorld);s.position.copy(L.normalize().multiplyScalar(s.position.length()))}if(M&&p.has(d)){let L=p.get(d).marker.position,q=Math.max(s.position.length(),L.length()*1.3);s.position.copy(L.clone().normalize().multiplyScalar(q))}he()}function Z(A){u.visible=!!A,A&&u.position.copy(wi(A.lat,A.lon,1.003))}function pe(A){let L=p.get(d);if(y.visible=!!(A&&L&&u.visible),!y.visible)return;l.updateMatrixWorld();let q=u.getWorldPosition(new W);x.attributes.position.setXYZ(0,q.x,q.y,q.z),x.attributes.position.setXYZ(1,L.marker.position.x,L.marker.position.y,L.marker.position.z),x.attributes.position.needsUpdate=!0}function Ce(A){let L=a.getBoundingClientRect(),q=A.clone().project(s);return q.z>1?null:{x:(q.x+1)/2*L.width,y:(1-q.y)/2*L.height}}function _e(A){let L=A.clone().sub(s.position),q=L.length(),ie=L.normalize(),me=s.position.dot(ie),ge=me*me-s.position.lengthSq()+1;if(ge<0)return!1;let Le=-me-Math.sqrt(ge);return Le>0&&Le<q}function We(){let A=p.get(d);return!A||_e(A.marker.position)?null:Ce(A.marker.position)}function st(A){let L=a.getBoundingClientRect(),q=new qe((A.clientX-L.left)/L.width*2-1,1-(A.clientY-L.top)/L.height*2),ie=new lr;ie.setFromCamera(q,s);let{origin:me,direction:ge}=ie.ray,Le=me.dot(ge),U=Le*Le-me.lengthSq()+1;if(U<0)return null;let tt=me.clone().add(ge.clone().multiplyScalar(-Le-Math.sqrt(U))),Ye=l.worldToLocal(tt),C=Math.asin(Math.max(-1,Math.min(1,Ye.y/Ye.length())))*180/Math.PI,g=Math.atan2(-Ye.z,Ye.x)*180/Math.PI;return g>=180&&(g-=360),{lat:C,lon:g}}function Xe(A){let L=a.getBoundingClientRect(),q=A.clientX-L.left,ie=A.clientY-L.top,me=null,ge=18;for(let[Le,U]of p){if(_e(U.marker.position))continue;let tt=Ce(U.marker.position);if(!tt)continue;let Ye=Math.hypot(tt.x-q,tt.y-ie);Ye<ge&&(me=Le,ge=Ye)}return me}let j=null;return a.addEventListener("pointerdown",A=>{j={x:A.clientX,y:A.clientY}}),a.addEventListener("pointerup",A=>{if(!j||Math.hypot(A.clientX-j.x,A.clientY-j.y)>5)return;if(E){let q=st(A);q&&e(q);return}let L=Xe(A);L&&t(L)}),new ResizeObserver(()=>{let A=n.getBoundingClientRect();!A.width||!A.height||(s.aspect=A.width/A.height,s.updateProjectionMatrix(),r.setSize(A.width,A.height))}).observe(n),s.position.set(2.4,1.2,2.8),o.update(),{setLayers:P,setAurora:V,setTrack:se,removeTrack:ue,update:F,setObserver:Z,setSightLine:pe,selectedScreenPosition:We,home:X,showPoint:oe,face:Pe,clearPoint:ye,select(A){d=A,he()},setFollowing:Q,setPicking(A){E=A,a.classList.toggle("is-picking",A)},zoom(A){s.position.multiplyScalar(A);let L=s.position.length();s.position.setLength(Math.max(o.minDistance,Math.min(o.maxDistance,L))),o.update()},render(A){o.update(A),r.render(i,s)},onContextChange(A,L){a.addEventListener("webglcontextlost",q=>{q.preventDefault(),A()}),a.addEventListener("webglcontextrestored",L)}}}function ko(n,e){let t=e?.legend;if(!t||!/^\/api\/v1\/imagery-legend\?layer=[a-z0-9-]+$/.test(t.url??""))return null;let i=n("details","imagery-legend"),s=n("summary","",`${e.name} scale${t.unit?` (${t.unit})`:""}`),r=n("img","imagery-legend-image");r.src=t.url,r.alt=String(t.description||`${e.name} provider colour scale`);let a=n("p","note",t.description);if(i.append(s,r,a),/^https:\/\/gibs\.earthdata\.nasa\.gov\/legends\/[A-Za-z0-9_-]+\.png$/.test(t.source_url??"")){let o=n("a","","NASA GIBS original legend");o.href=t.source_url,o.target="_blank",o.rel="noopener noreferrer",i.append(o)}return i}var uf="khonsu.layers",hf="true-color",df="story-true-color",ff="story-true-color-npp",C7="2012-02-01",R7="Loading\u2026",P7="The globe is unavailable, so layers are turned off.",I7="Live data is off while serving a local file, so pictures and the aurora are unavailable.",L7="Could not load the list of pictures.",D7="Could not load this picture.",N7="A rough boundary from NOAA's Kp index, not a forecast.",F7="Aurora estimated from NOAA SWPC Kp";function pf({element:n,panel:e,credit:t,catalog:i,storage:s,globe:r,fetchHead:a=l=>fetch(l,{method:"HEAD"}),dataAge:o,now:c=Date.now}){let l={base:"",overlays:[],view:"",viewDate:"",viewBox:null,viewPlain:!1,aurora:!1,live:null,tried:null},h=new Map,f=new Map,u=new Map,m=new Map,x=new Map,y={},p=[],d=new Map,M=!1,E=0,v=j=>[j.minLat,j.minLon,j.maxLat,j.maxLon].join(","),T=(j,A="",L=null)=>"/api/v1/imagery?layer="+encodeURIComponent(j)+(A?"&date="+encodeURIComponent(A):"")+(L?"&bbox="+encodeURIComponent(v(L)):""),S=()=>p.filter(j=>!j.topic&&!j.story),R=()=>p.filter(j=>j.topic&&!j.story),_=()=>S().filter(j=>j.transparent===!0).map(j=>j.id),w=j=>d.has(j)&&!d.get(j).topic&&d.get(j).transparent!==!0,D=j=>d.has(j)&&!!(d.get(j).topic||d.get(j).story),N=()=>w(hf)?hf:"",H=()=>l.tried??l.live;function Y(){let j=l.view?d.get(l.view):null,A=[...l.base?[l.base]:[],...l.overlays];j&&(A=j.transparent===!0||l.viewBox?[...l.base?[l.base]:[],j.id]:[j.id]);let L=l.viewDate>=C7?ff:df;return j&&j.story&&j.transparent===!0&&l.viewBox&&!l.viewPlain&&d.has(L)&&A.splice(A.indexOf(j.id),0,L),A.filter(q=>d.has(q)).map(q=>{let ie=q===l.view||(q===df||q===ff)&&!!l.viewBox,me=ie?l.viewBox:null;return{id:q,url:T(q,ie?l.viewDate:"",me),transparent:d.get(q).transparent===!0,...me?{box:me}:{}}})}function O(){try{let j=l.viewDate?"":l.view;s.setItem(uf,JSON.stringify({base:l.base,overlays:l.overlays,view:j,aurora:l.aurora}))}catch{}}function P(){let j=null;try{j=JSON.parse(s.getItem(uf))}catch{j=null}if(!j||typeof j!="object")return;l.base=typeof j.base=="string"&&(j.base===""||w(j.base))?j.base:"";let A=new Set(Array.isArray(j.overlays)?j.overlays:[]);l.overlays=_().filter(L=>A.has(L)),l.view=typeof j.view=="string"&&D(j.view)&&!d.get(j.view).story?j.view:"",l.aurora=j.aurora===!0}function B(j,A){let L=new Set(l.overlays);A?L.add(j):L.delete(j),l.overlays=_().filter(q=>L.has(q))}function V(j){t.replaceChildren(...j.map(A=>n("span","credit-line",A))),t.hidden=j.length===0}function ee(j){let A=j.map(L=>{let q=h.get(L.url),ie=q?.pictureDate||new URLSearchParams(L.url.split("?")[1]).get("date");return[L.name,ie?`picture from ${ie}`:"",L.credit,q?.fetchedAt?`retrieved ${o(q.fetchedAt,c())}`:"",q?.stale?"saved copy":""].filter(Boolean).join(" \xB7 ")});l.aurora&&A.push(F7),V(A);for(let L of j){let q=ko(n,L);q&&t.append(q)}}async function X(j){try{let A=await a(j.url);if(A.ok===!1)return null;let L=A.headers,q=L.get("X-Khonsu-Fetched-At"),ie=L.get("X-Khonsu-Picture-Date");return{pictureDate:/^\d{4}-\d{2}-\d{2}$/.test(ie??"")?ie:"",fetchedAt:q&&!Number.isNaN(Date.parse(q))?q:"",stale:L.get("X-Khonsu-Stale")==="true"}}catch{return null}}function Q(j,A){let L=f.get(j);L&&(L.hidden=!A,L.textContent=A?D7:"")}function oe(j,A,L){if(j!==E)return;let q=me=>L[me.id]==="ok"||L[me.id]?.status==="ok";for(let me of A)Q(me.id,!q(me)),q(me)&&L[me.id]?.meta&&h.set(me.url,L[me.id].meta);let ie=A.filter(q).map(me=>({...d.get(me.id),...me}));ee(ie),Promise.all(ie.filter(me=>!L[me.id]?.meta).map(async me=>{let ge=await X(me);j===E&&h.set(me.url,ge)})).then(()=>{j===E&&ee(ie)})}function Pe(){let j=Y(),A=++E,L=new Set(j.map(ie=>ie.id));for(let ie of f.keys())L.has(ie)||Q(ie,!1);h.clear(),V([R7]),r.setAurora(l.aurora?H():null);let q;try{q=Promise.resolve(r.setLayers(j))}catch(ie){q=Promise.reject(ie)}q.then(ie=>oe(A,j,ie??{}),()=>oe(A,j,{}))}function ye(){O(),ue(),Pe()}function se(){return l.tried!==null?`Kp ${l.tried.toFixed(1)}, trying a value`:l.live!==null?`Kp ${l.live.toFixed(1)}, now`:"Kp is not available yet"}function ue(){if(M){for(let[j,A]of u)A.checked=j===l.base;for(let[j,A]of m)A.checked=l.overlays.includes(j);for(let[j,A]of x)A.checked=j===l.view;y.aurora.checked=l.aurora,y.controls.hidden=!l.aurora,y.slider.value=String(H()??0),y.kpNote.textContent=se(),y.back.hidden=l.tried===null}}function he({type:j,name:A,value:L,title:q,note:ie=null,warn:me=!1}){let ge=n("input",null,null);ge.setAttribute("type",j),ge.setAttribute("name",A),ge.value=L;let Le=n("label","layer-row",null);Le.append(ge,n("span",null,q)),ie&&Le.append(n("span","note",ie));let U=null;return me&&(U=n("span","note is-warning",null),U.hidden=!0,Le.append(U)),{label:Le,input:ge,warning:U}}let F=[["Clouds now",()=>{l.base=N(),l.overlays=_(),l.view="",l.viewDate="",l.viewBox=null}],["Recent daily Earth",()=>{l.base=N(),l.overlays=[],l.view="",l.viewDate="",l.viewBox=null}],["Plain",()=>{l.base="",l.overlays=[],l.view="",l.viewDate="",l.viewBox=null,l.aurora=!1,l.tried=null}]];function Z(){u.clear(),m.clear(),x.clear(),f.clear();let j=n("fieldset","layer-group",null);j.append(n("legend",null,"Base picture"));let A=he({type:"radio",name:"layer-base",value:"",title:"Plain globe"});A.input.addEventListener("change",()=>{A.input.checked&&(l.base="",ye())}),u.set("",A.input),j.append(A.label);for(let z of S().filter($=>$.transparent!==!0)){let $=he({type:"radio",name:"layer-base",value:z.id,title:z.name,note:z.description,warn:!0});$.input.addEventListener("change",()=>{$.input.checked&&(l.base=z.id,ye())}),u.set(z.id,$.input),f.set(z.id,$.warning),j.append($.label)}let L=n("fieldset","layer-group",null);L.append(n("legend",null,"Near-live clouds"));for(let z of S().filter($=>$.transparent===!0)){let $=he({type:"checkbox",name:"layer-overlay",value:z.id,title:z.name,note:z.description,warn:!0});$.input.addEventListener("change",()=>{B(z.id,$.input.checked),ye()}),m.set(z.id,$.input),f.set(z.id,$.warning),L.append($.label)}let q=n("fieldset","layer-group",null);q.append(n("legend",null,"What satellites measure"));let ie=he({type:"radio",name:"layer-view",value:"",title:"None"});ie.input.addEventListener("change",()=>{ie.input.checked&&(l.view="",l.viewDate="",l.viewBox=null,ye())}),x.set("",ie.input),q.append(ie.label);for(let z of R()){let $=he({type:"radio",name:"layer-view",value:z.id,title:z.name,note:z.description,warn:!0});$.input.addEventListener("change",()=>{$.input.checked&&(l.view=z.id,l.viewDate="",l.viewBox=null,ye())}),x.set(z.id,$.input),f.set(z.id,$.warning),q.append($.label)}let me=n("fieldset","layer-group",null);me.append(n("legend",null,"Overlays"));let ge=he({type:"checkbox",name:"layer-aurora",value:"aurora",title:"Aurora, estimated from Kp"});ge.input.addEventListener("change",()=>{l.aurora=ge.input.checked,l.aurora||(l.tried=null),ye()}),me.append(ge.label,n("p","note",N7));let Le=n("input",null,null);Le.setAttribute("type","range"),Le.setAttribute("min","0"),Le.setAttribute("max","9"),Le.setAttribute("step","0.33"),Le.setAttribute("aria-label","Try a Kp value");let U=n("p","note",null),tt=n("button",null,"Back to now");tt.setAttribute("type","button"),tt.hidden=!0;let Ye=n("div","aurora-controls",null);Ye.append(Le,U,tt),Ye.hidden=!0,me.append(Ye),Le.addEventListener("input",()=>{let z=Number(Le.value);Number.isFinite(z)&&(l.tried=z,ue(),r.setAurora(H()))}),tt.addEventListener("click",()=>{l.tried=null,ue(),r.setAurora(H())});let C=n("div","layer-presets",null);C.append(...F.map(([z,$])=>{let re=n("button",null,z);return re.setAttribute("type","button"),re.addEventListener("click",()=>{$(),ye()}),re})),y.aurora=ge.input,y.slider=Le,y.kpNote=U,y.back=tt,y.controls=Ye;let g=[j,L];R().length&&g.push(q),e.replaceChildren(n("h2","eyebrow","Layers"),...g,me,C)}async function pe(){if(!r){e.replaceChildren(n("p","note",P7)),t.hidden=!0;return}let j=null;try{j=await i}catch{j=null}let A=n("h2","eyebrow","Layers");if(!j){e.replaceChildren(A,n("p","note",L7)),t.hidden=!0;return}if(!j.liveData){e.replaceChildren(A,n("p","note",I7)),t.hidden=!0;return}p=Array.isArray(j.layers)?j.layers:[],d=new Map(p.map(L=>[L.id,L])),P(),Z(),M=!0,ue(),l.base||l.overlays.length||l.view||l.aurora?Pe():V([])}function Ce(j){l.live=Number.isFinite(j)?j:null,M&&(l.aurora&&l.tried===null&&r.setAurora(l.live),ue())}function _e(){return{base:l.base,overlays:[...l.overlays],view:l.view,aurora:l.aurora}}function We(j,A="",L=null,{plain:q=!1,base:ie}={}){return!M||j!==""&&!D(j)||j&&d.get(j).story&&!A?!1:(typeof ie=="string"&&(ie===""||w(ie))&&(l.base=ie),l.view=j,l.viewDate=j?A:"",l.viewBox=j&&L?L:null,l.viewPlain=!!q,ie===void 0&&j&&(d.get(j).transparent===!0||L)&&!l.base&&(l.base=N()),ye(),!0)}function st(j){return!M||j!==""&&!w(j)?!1:(l.base=j,ye(),!0)}function Xe(){return M?(Object.assign(l,{base:"",overlays:[],view:"",viewDate:"",viewBox:null,viewPlain:!1,aurora:!1,tried:null}),ye(),!0):!1}return{start:pe,setKp:Ce,selection:_e,show:We,setBase:st,beginLesson:Xe,views:()=>R().map(j=>({...j})),viewOn:()=>l.view}}var U7="http://www.w3.org/2000/svg",Sr=220,Dt=Sr/2,ki=92;function Dn(n,e,t){let i=document.createElementNS(U7,n);for(let[s,r]of Object.entries(e))i.setAttribute(s,r);return t?.append(i),i}function Jc(n,e){let t=ki*(90-Math.max(0,Math.min(90,e)))/90,i=n*Math.PI/180;return[Dt+t*Math.sin(i),Dt-t*Math.cos(i)]}function mf(n,e,t,i){n.replaceChildren();let s=Dn("svg",{viewBox:`0 0 ${Sr} ${Sr}`,class:"sky-plot",role:"img"},n),r=e.filter(l=>l.elevation_deg>=0),a=r.reduce((l,h)=>!l||h.elevation_deg>l.elevation_deg?h:l,null);Dn("title",{},s).textContent=a?`Sky path peaking at ${Math.round(a.elevation_deg)} degrees in the ${qn(a.azimuth_deg)}`:"Sky plot";for(let l of[0,30,60])Dn("circle",{cx:Dt,cy:Dt,r:ki*(90-l)/90,class:l===0?"sky-horizon":"sky-ring"},s);Dn("line",{x1:Dt,y1:Dt-ki,x2:Dt,y2:Dt+ki,class:"sky-ring"},s),Dn("line",{x1:Dt-ki,y1:Dt,x2:Dt+ki,y2:Dt,class:"sky-ring"},s);for(let[l,h,f]of[["N",Dt,12],["E",Sr-8,Dt+4],["S",Dt,Sr-4],["W",8,Dt+4]])Dn("text",{x:h,y:f,class:"sky-label"},s).textContent=l;for(let[l,h]of[[30,"30\xB0"],[60,"60\xB0"]])Dn("text",{x:Dt+3,y:Dt-ki*(90-l)/90-2,class:"sky-scale"},s).textContent=h;if(!r.length)return;let o=r.map(l=>Jc(l.azimuth_deg,l.elevation_deg).map(h=>h.toFixed(1)).join(",")).join(" ");if(Dn("polyline",{points:o,fill:"none",stroke:t,"stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},s),i){let l=r.filter(h=>{let f=Date.parse(h.at);return f>=Date.parse(i.start.at)&&f<=Date.parse(i.end.at)});l.length>1&&Dn("polyline",{points:l.map(h=>Jc(h.azimuth_deg,h.elevation_deg).map(f=>f.toFixed(1)).join(",")).join(" "),fill:"none",class:"sky-visible"},s)}let c=(l,h,f)=>{let[u,m]=Jc(l.azimuth_deg,l.elevation_deg);Dn("circle",{cx:u,cy:m,r:h,class:f,fill:t},s)};c(r[0],3,"sky-start"),c(a,4.5,"sky-peak")}var jc=["identity","radio","sees"],Qc=8,O7="Add a satellite to see its details here.",B7="Live data is off while serving a local file.",eu="Loading\u2026",gf="Loading\u2026 The first time, Khonsu downloads the whole catalog, which can take a couple of minutes.",k7="Run khonsu setup to connect your own free Space-Track account, then restart Khonsu.";function _f({api:n,element:e,feedCredit:t,dataFailure:i,dataTime:s,selectedEntry:r,catalog:a,panels:o,focusScene:c,clearScene:l}){let h=new Map,f=new Map,u={identity:0,radio:0,sees:0},m=Promise.resolve(a).then(P=>({liveData:P?.liveData??!0,spaceTrackReady:P?.spaceTrackReady??!1,imagingIds:P?.imagingIds??new Set}),()=>({liveData:!0,spaceTrackReady:!1,imagingIds:new Set})),x={satelliteDetails:P=>n.satelliteDetails(P),catalogRecord:P=>n.catalogRecord(P),spaceTrack:P=>n.spaceTrack(P),transmitters:P=>n.transmitters(P),recentScenes:P=>n.recentScenes(P)};function y(P,B){let V=`${P}:${B}`;if(h.has(V))return Promise.resolve(h.get(V));if(f.has(V))return f.get(V);let ee=new Promise(X=>X(x[P](B))).then(X=>(h.set(V,X),X)).finally(()=>f.delete(V));return f.set(V,ee),ee}function p(P,B,V,ee){return P.then(X=>{B()&&V(X)},X=>{B()&&X?.name!=="AbortError"&&ee(X)})}let d=P=>e("p","note",P);function M(P){let B=e("ul");return B.append(...P.filter(([,V])=>V).map(([V,ee])=>e("li",null,`${V}: ${ee}`))),B}function E(P){let[B,...V]=P.data;if(!B)return[d("Wikidata has no entry for this satellite."),...t(P)];let ee=[M([["Name",B.name],["Description",B.description],["Types",(B.types??[]).join(", ")],["Operators",(B.operators??[]).join(", ")],["Countries",(B.countries??[]).join(", ")],["Launch date",B.launch_date]])];return V.length&&ee.push(d(`Also matched: ${V.map(X=>X.name).join(", ")}`)),[...ee,...t(P)]}function v(P,B){let V=P.data;if(!V)return[d("GCAT has no entry for this satellite."),...t(P)];let ee=[e("h3","dossier-heading",`Catalog object: ${V.name}`)];return B&&!jd(B.name,V.name)&&ee.push(d(`GCAT lists this object as ${V.name}, so these figures describe that entry alone.`)),ee.push(M([["Kind",V.kind],["Bus",V.bus],["Mass",V.mass_kg?`${V.mass_kg.toLocaleString("en-GB")} kg`:null],["Launched",V.launch_date],["Owner code",V.owner],["Manufacturer code",V.manufacturer],["Orbit class",V.orbit_class]])),[...ee,...t(P)]}function T(P){let[B]=P.data;return B?[e("h3","dossier-heading","Space-Track record"),M([["Name",B.name],["Object type",B.object_type],["Radar size",B.rcs_size],["Country code",B.country],["Launched",B.launch_date],["Decayed",B.decay_date],["Element epoch",B.epoch]]),...t(P)]:[d("Space-Track has no record for this satellite."),...t(P)]}function S(P){let B=Jd(P.data);if(!B.length)return[d("SatNOGS lists no active transmitters for this satellite."),...t(P)];let V=e("ul");V.append(...B.slice(0,Qc).map(Q=>{let oe=[Yd(Q.downlink_hz),Q.mode].filter(Boolean).join(" \xB7 ");return e("li",null,oe?`${Q.description}: ${oe}`:Q.description)}));let ee=B.length,X=[d(`${ee} active transmitter${ee===1?"":"s"}`),V];return ee>Qc&&X.push(d(`+ ${ee-Qc} more`)),[...X,...t(P)]}function R(P){let B=[P.minCloud,P.maxCloud].filter(X=>X!=null).map(X=>Math.round(X));if(!B.length)return null;let V=Math.min(...B),ee=Math.max(...B);return V===ee?`${V}% cloud`:`${V}\u2013${ee}% cloud`}function _(P){let B=[`near ${P.lat.toFixed(1)}\xB0, ${P.lon.toFixed(1)}\xB0`];P.scenes.length>1&&B.push(`${P.scenes.length} tiles`);let V=R(P);return V&&B.push(V),B.join(" \xB7 ")}function w(P){let B=Qd(P.data);if(!B.length)return[d("Earth Search lists scenes from Sentinel-2 and Landsat satellites. This satellite is not one of them.")];let V=B.map(X=>{let Q=e("button","scene-row");return Q.type="button",Q.dataset.focus=`scene:${X.time}`,Q.setAttribute("aria-pressed","false"),Q.append(e("strong",null,s(new Date(X.time).toISOString())),e("span",null,_(X))),Q.addEventListener("click",()=>{for(let oe of V)oe.setAttribute("aria-pressed",String(oe===Q));c({lat:X.lat,lon:X.lon})}),Q}),ee=e("div","scene-list");return ee.append(...V),[d("Recent scenes and where their centres are. Choose one to mark it on the globe. These are acquisition locations, not the pictures themselves."),ee,...t(P)]}function D(P,B,V){let ee=e("div","dossier-block"),X=e("div","dossier-block"),Q=e("div","dossier-block");ee.append(d(eu)),X.append(d(gf)),Q.append(d(V.spaceTrackReady?eu:k7)),o.identity.replaceChildren(ee,X,Q);let oe=null,Pe=null,ye=()=>{B()&&(Pe?Pe.error?X.replaceChildren(i(Pe.error)):X.replaceChildren(...v(Pe.feed,oe?.feed?.data?.[0])):X.replaceChildren(d(gf)))},se=p(y("satelliteDetails",P.id),B,F=>{oe={feed:F},ee.replaceChildren(...E(F)),ye()},F=>{oe={error:F},ee.replaceChildren(i(F)),ye()}),ue=p(y("catalogRecord",P.id),B,F=>{Pe={feed:F},ye()},F=>{Pe={error:F},ye()}),he=V.spaceTrackReady?p(y("spaceTrack",P.id),B,F=>Q.replaceChildren(...T(F)),F=>Q.replaceChildren(i(F))):null;return Promise.all([se,ue,he])}function N(P,B,V,ee,X){return P.replaceChildren(d(eu)),p(y(V,ee.id),B,Q=>P.replaceChildren(...X(Q)),Q=>P.replaceChildren(i(Q)))}async function H(P){if(!jc.includes(P))return;let B=o[P],V=++u[P],ee=r();if(!ee){B.replaceChildren(d(O7));return}let X=await m,Q=()=>u[P]===V&&r()?.id===ee.id;if(Q()){if(!X.liveData){B.replaceChildren(d(B7));return}return P==="identity"?D(ee,Q,X):P==="radio"?N(B,Q,"transmitters",ee,S):N(B,Q,"recentScenes",ee,w)}}function Y(P=[]){for(let V of jc)u[V]+=1;l();let B=[].concat(P).filter(V=>jc.includes(V));return Promise.all(B.map(V=>H(V)))}async function O(){let P=r();return P?(await m).imagingIds.has(P.id):!1}return{open:H,selectionChanged:Y,hasSees:O}}var z7="Add a satellite to see what it measures.",V7="Loading\u2026",G7="Khonsu doesn't describe this satellite's instruments yet. Each description is written by hand, with a source for every sentence, so only some satellites have one.",H7="Views on the globe need live data and WebGL.";function Zn(n,e,t){for(let i of t){let s=n("a","why-source",i.label);s.href=i.url,s.target="_blank",s.rel="noopener noreferrer",s.title=i.title,s.setAttribute("aria-label",`Source: ${i.title} (${i.label}, opens in a new tab)`),e.append(" ",s)}}function xf({api:n,element:e,panel:t,selectedEntry:i,dataFailure:s,layers:r,startLesson:a=null}){let o=new Map,c=new Set,l=0,h=d=>e("p","note",d);function f(d){let M=e("ul","why-list");return M.append(...d.map(E=>{let v=e("li","",E.text);return Zn(e,v,E.sources),v})),M}function u(d,M=null){let E=r()?.viewOn()===d.id,v=e("button","text-button data-view",E?`Showing ${d.name} \xB7 Hide`:`Show on the globe: ${d.name}`);return v.type="button",v.dataset.focus=`view:${d.id}`,v.setAttribute("aria-pressed",String(E)),v.addEventListener("click",()=>{M&&c.add(M),r()?.show(E?"":d.id)&&p()}),v}function m(d){let M=[e("h3","why-title","What it measures")],E=e("ul","why-chips data-chips");E.setAttribute("aria-label","Kinds of data"),E.append(...d.chips.map(T=>e("li","why-chip",T))),M.push(E),d.items.length&&M.push(f(d.items));for(let T of d.instruments)M.push(e("h4","data-instrument",T.name)),T.kinds.length&&M.push(h(T.kinds.join(" \xB7 "))),T.items.length&&M.push(f(T.items));M.push(e("h3","why-title data-kinds-title","About these kinds of data"));let v=r()?.views().length>0;for(let T of d.kinds){let S=e("details","data-kind");if(S.open=c.has(T.id),S.addEventListener("toggle",()=>{S.open?c.add(T.id):c.delete(T.id)}),S.append(e("summary","",T.name),f(T.items)),T.views.length||a&&T.lessons.length){let R=e("div","link-row");R.append(...T.views.map(_=>u(_,T.id))),a&&R.append(...T.lessons.map(_=>{let w=e("button","text-button data-view data-lesson",`Lesson: ${_.title}`);return w.type="button",w.addEventListener("click",()=>a(_.id)),w})),S.append(R)}M.push(S)}return v||M.push(h(H7)),M}function x(){let d=[h(G7)],M=r()?.views()??[];if(M.length){d.push(e("h3","why-title","What satellites measure"));let E=e("div","link-row");E.append(...M.map(v=>u(v))),d.push(E)}return d}function y(d,M){if(M.error){t.replaceChildren(s(M.error));return}let E=sf(M.response,r()?.views()??[]);t.replaceChildren(...E?m(E):x())}async function p(){let d=++l,M=i();if(!M){t.replaceChildren(h(z7));return}if(o.has(M.id)){y(M,o.get(M.id));return}t.replaceChildren(h(V7));let E;try{E={response:await n.satelliteData(M.id)},o.set(M.id,E)}catch(v){if(v?.name==="AbortError")return;E={error:v}}d===l&&i()?.id===M.id&&y(M,E)}return{render:p}}var yf="khonsu.panels",zi={catalog:{variable:"--catalog-width",initial:268,min:200,max:480,label:"Resize the reading column"},inspector:{variable:"--inspector-width",initial:320,min:280,max:640,label:"Resize the satellite details"}},W7=360,X7=16,$7=64;function q7(n,e,t,i){let{min:s,max:r}=zi[n],a=Math.max(s,t-i-W7);return Math.round(Math.min(Math.max(e,s),r,a))}function Y7(n){let e=null;try{e=JSON.parse(n.getItem(yf))}catch{e=null}let t={};for(let i of Object.keys(zi)){let s=e?.[i];t[i]=Number.isFinite(s)?s:zi[i].initial}return t}function Z7(n,e,t,i){let s=t?$7:X7,r=n==="catalog"?"ArrowRight":"ArrowLeft",a=n==="catalog"?"ArrowLeft":"ArrowRight";return e===r?i+s:e===a?i-s:e==="Home"?zi[n].min:e==="End"?zi[n].max:null}function vf({root:n,handles:e,storage:t,windowWidth:i=()=>window.innerWidth}){let s=Y7(t),r=c=>c==="catalog"?"inspector":"catalog";function a(c,l,h=!0){if(s[c]=q7(c,l,i(),s[r(c)]),n.style.setProperty(zi[c].variable,`${s[c]}px`),e[c].setAttribute("aria-valuenow",String(s[c])),h)try{t.setItem(yf,JSON.stringify(s))}catch{}}for(let[c,l]of Object.entries(e)){let h=zi[c];l.setAttribute("role","separator"),l.setAttribute("aria-orientation","vertical"),l.setAttribute("aria-label",h.label),l.setAttribute("aria-valuemin",String(h.min)),l.setAttribute("aria-valuemax",String(h.max)),l.tabIndex=0,l.title="Drag to resize. Double-click to reset.",l.addEventListener("pointerdown",f=>{if(f.button!==0)return;f.preventDefault(),l.setPointerCapture?.(f.pointerId),l.classList.add("is-dragging");let u=x=>{let y=c==="catalog"?x.clientX:i()-x.clientX;a(c,y,!1)},m=()=>{l.classList.remove("is-dragging"),l.removeEventListener("pointermove",u),l.removeEventListener("pointerup",m),l.removeEventListener("pointercancel",m),a(c,s[c])};l.addEventListener("pointermove",u),l.addEventListener("pointerup",m),l.addEventListener("pointercancel",m)}),l.addEventListener("keydown",f=>{let u=Z7(c,f.key,f.shiftKey,s[c]);u!==null&&(f.preventDefault(),a(c,u))}),l.addEventListener("dblclick",()=>a(c,h.initial))}let o=()=>{for(let c of Object.keys(e))a(c,s[c],!1)};return o(),{fit:o,widths:()=>({...s})}}function K7(n,e){let t=e.trim().toLowerCase().split(/\s+/).filter(Boolean);if(!t.length)return[...n];let i=n.filter(r=>{let a=r.toLowerCase();return t.every(o=>a.includes(o))}),s=e.trim().toLowerCase();return[...i.filter(r=>r.toLowerCase().startsWith(s)),...i.filter(r=>!r.toLowerCase().startsWith(s))]}function bf({element:n,button:e,popover:t,input:i,list:s,onChoose:r,document:a=globalThis.document}){let o=[],c="",l=[],h=0;function f(M){return`group-option-${M}`}function u(){e.textContent=c||(o.length?"Choose a group":"Loading groups\u2026"),e.disabled=o.length===0}function m(){if(l=K7(o,i.value),h=Math.min(h,Math.max(0,l.length-1)),!l.length){s.replaceChildren(n("li","note group-empty","No group matches.")),i.removeAttribute("aria-activedescendant");return}s.replaceChildren(...l.map((M,E)=>{let v=n("li",`group-option${E===h?" is-active":""}`,M);return v.id=f(E),v.setAttribute("role","option"),v.setAttribute("aria-selected",String(M===c)),v.addEventListener("mousedown",T=>{T.preventDefault(),d(M)}),v})),i.setAttribute("aria-activedescendant",f(h)),s.children[h]?.scrollIntoView?.({block:"nearest"})}function x(){return!t.hidden}function y(){o.length&&(t.hidden=!1,e.setAttribute("aria-expanded","true"),i.value="",h=Math.max(0,o.indexOf(c)),m(),i.focus())}function p(M=!0){x()&&(t.hidden=!0,e.setAttribute("aria-expanded","false"),M&&e.focus())}function d(M){p(),M!==c&&(c=M,u(),r(M))}return e.addEventListener("click",()=>x()?p():y()),i.addEventListener("input",()=>{h=0,m()}),i.addEventListener("keydown",M=>{if(M.key==="ArrowDown"||M.key==="ArrowUp"){if(M.preventDefault(),!l.length)return;h=(h+(M.key==="ArrowDown"?1:l.length-1))%l.length,m()}else M.key==="Enter"?(M.preventDefault(),l[h]&&d(l[h])):M.key==="Escape"&&(M.preventDefault(),p())}),a?.addEventListener?.("mousedown",M=>{x()&&!t.contains(M.target)&&!e.contains(M.target)&&p(!1)}),u(),{setGroups(M){o=[...M],u()},setCurrent(M){c=M,u()},current:()=>c,open:y,close:p}}var at={top:14,right:12,bottom:34,left:46};function St(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Sf(n,e,t=5){if(!(Number.isFinite(n)&&Number.isFinite(e))||e<=n)return[n];let i=(e-n)/t,s=10**Math.floor(Math.log10(i)),r=[1,2,5,10].map(o=>o*s).find(o=>o>=i),a=[];for(let o=Math.ceil(n/r)*r;o<=e+r*1e-9;o+=r)a.push(Number(o.toPrecision(12)));return a}function tu(n,e){let t=[];for(let i=Math.floor(Math.log10(n));i<=Math.ceil(Math.log10(e));i+=1){let s=10**i;s>=n*.999&&s<=e*1.001&&t.push(s)}return t}function nu(n,e,t,i){let s=e-n||1;return r=>t+(r-n)/s*(i-t)}function iu(n,e,t,i){let s=Math.log10(n),r=Math.log10(e)-s||1;return a=>t+(Math.log10(a)-s)/r*(i-t)}var jt=n=>Math.abs(n)>=1e3?n.toLocaleString("en-GB"):String(Number(n.toPrecision(4)));function Mf(n,e){return`<svg class="chart" viewBox="0 0 360 200" role="img" aria-label="${St(n)}" xmlns="http://www.w3.org/2000/svg">${e}</svg>`}function Vo(n,e,t){let i=e.map(r=>`<th scope="col">${St(r)}</th>`).join(""),s=t.map(r=>`<tr>${r.map(a=>`<td>${St(a)}</td>`).join("")}</tr>`).join("");return`<details class="chart-table"><summary>Show the numbers</summary><table><caption>${St(n)}</caption><thead><tr>${i}</tr></thead><tbody>${s}</tbody></table></details>`}var zo=(n,e,t)=>n-e<24?"start":t-n<24?"end":"middle";function wf(n,e,t=360-at.right){return`<text class="chart-axis-label" x="${(at.left+t)/2}" y="196" text-anchor="middle">${St(n)}</text><text class="chart-axis-label" x="6" y="${(at.top+200-at.bottom)/2}" text-anchor="middle" transform="rotate(-90 6 ${(at.top+200-at.bottom)/2})">${St(e)}</text>`}function su({title:n,xLabel:e,yLabel:t,points:i,highlight:s=[]}){let r=i.filter(E=>Number.isFinite(E.x)&&Number.isFinite(E.y)).sort((E,v)=>E.x-v.x);if(r.length<2)return"";let a=r.map(E=>E.x),o=r.map(E=>E.y),c=Sf(Math.min(...o),Math.max(...o)),l=Math.min(c[0],...o),h=Math.max(c.at(-1),...o),f=nu(Math.min(...a),Math.max(...a),at.left,360-at.right),u=nu(l,h,200-at.bottom,at.top),m=c.map(E=>`<line class="chart-grid" x1="${at.left}" x2="${360-at.right}" y1="${u(E).toFixed(1)}" y2="${u(E).toFixed(1)}"/><text class="chart-tick" x="${at.left-5}" y="${(u(E)+3).toFixed(1)}" text-anchor="end">${St(jt(E))}</text>`).join(""),y=Sf(Math.min(...a),Math.max(...a),5).filter(E=>E>=a[0]&&E<=a.at(-1)).map(E=>`<text class="chart-tick" x="${f(E).toFixed(1)}" y="${200-at.bottom+13}" text-anchor="${zo(f(E),at.left,360-at.right)}">${St(E)}</text>`).join(""),p=r.map((E,v)=>`${v?"L":"M"}${f(E.x).toFixed(1)},${u(E.y).toFixed(1)}`).join(""),d=s.map(E=>r.find(v=>v.x===E.x)&&{...E,point:r.find(v=>v.x===E.x)}).filter(Boolean).map(({point:E,label:v})=>`<circle class="chart-mark" cx="${f(E.x).toFixed(1)}" cy="${u(E.y).toFixed(1)}" r="3.5"/><text class="chart-note" x="${f(E.x).toFixed(1)}" y="${(u(E.y)-7).toFixed(1)}" text-anchor="${zo(f(E.x),at.left,360-at.right)}">${St(v)}</text>`).join("");return Mf(n,`${m}${y}<path class="chart-line" d="${p}"/>${d}${wf(e,t)}`)+Vo(n,[e,t],r.map(E=>[E.x,jt(E.y)]))}function Tf({title:n,xLabel:e,yLabel:t,points:i}){let s=i.filter(S=>Number.isFinite(S?.x)&&Number.isFinite(S?.y)&&S.x>0&&S.y>0);if(!s.length)return"";let r=s.map(S=>S.x),a=s.map(S=>S.y),o=10**Math.floor(Math.log10(Math.min(...r))),c=Math.max(o*10,10**Math.ceil(Math.log10(Math.max(...r)))),l=10**Math.floor(Math.log10(Math.min(...a))),h=Math.max(l*10,10**Math.ceil(Math.log10(Math.max(...a)))),f=312,u=iu(o,c,at.left+4,f),m=iu(l,h,200-at.bottom,at.top),x=tu(l,h).map(S=>`<line class="chart-grid" x1="${at.left}" x2="${f}" y1="${m(S).toFixed(1)}" y2="${m(S).toFixed(1)}"/><text class="chart-tick" x="${at.left-5}" y="${(m(S)+3).toFixed(1)}" text-anchor="end">${St(jt(S))}</text>`).join("")+tu(o,c).map(S=>`<text class="chart-tick" x="${u(S).toFixed(1)}" y="${200-at.bottom+13}" text-anchor="${zo(u(S),at.left+4,f)}">${St(S>=1e3?`${jt(S/1e3)}k`:jt(S))}</text>`).join(""),y=new Map;for(let S of s){let R=`${S.x},${S.y}`;y.has(R)||y.set(R,[]),y.get(R).push(S)}let p=[...y.values()].sort((S,R)=>R[0].y-S[0].y||S[0].x-R[0].x),d=p.map((S,R)=>{let _=S[0],w=at.top+6+R*(200-at.bottom-at.top-12)/Math.max(1,p.length-1);return{group:S,number:R+1,cx:u(_.x).toFixed(1),cy:m(_.y).toFixed(1),labelY:w.toFixed(1)}}),M=d.map(({cx:S,cy:R,labelY:_})=>`<line class="chart-leader" x1="${S}" y1="${R}" x2="335" y2="${_}" stroke="var(--muted)" stroke-width="0.5"/>`).join(""),E=d.map(({group:S,number:R,cx:_,cy:w,labelY:D})=>`<g class="chart-point"><title>${St(`${R}: ${S.map(N=>N.label).join(", ")}`)}</title><circle cx="${_}" cy="${w}" r="2.5"/><text class="chart-note" x="340" y="${Number(D)+3}" text-anchor="middle">${R}</text></g>`).join(""),v=Mf(n,`${x}${M}${E}${wf(`${e} (log)`,`${t} (log)`,f)}`),T=`<p class="note">Numbers link dots to the key. Instruments at identical coordinates share a number. Each axis tick is ten times the previous one; k means thousand.</p><ol class="note">${p.map(S=>`<li>${S.map(R=>St(R.label)).join(", ")}</li>`).join("")}</ol>`;return v+T+Vo(n,["Key","Instrument",e,t],d.flatMap(({group:S,number:R})=>S.map(_=>[R,_.label,jt(_.x),jt(_.y)])))}function Ef({title:n,regions:e,rows:t,min:i=.3,max:s=3e5}){if(!(Number.isFinite(i)&&Number.isFinite(s)&&i>0&&s>i))return"";let r=v=>Number.isFinite(v?.from)&&Number.isFinite(v?.to)&&v.from>0&&v.to>=v.from&&v.to>=i&&v.from<=s,a=t.map(v=>({...v,bands:v.bands.filter(r)})).filter(v=>v.bands.length);if(!a.length)return"";let o=18,c=36,l=c+a.length*o+30,h=at.left+40,f=360-at.right,u=iu(i,s,h,f),m=e.filter(v=>r(v)&&v.to>i&&v.from<s).map((v,T)=>{let S=u(Math.max(i,v.from)),R=u(Math.min(s,v.to));return`<rect class="chart-region chart-region-${T%6}" x="${S.toFixed(1)}" y="${c-4}" width="${(R-S).toFixed(1)}" height="${a.length*o+8}"/><text class="chart-note" x="${((S+R)/2).toFixed(1)}" y="${c-8-T%2*9}" text-anchor="middle">${St(v.label)}</text>`}).join(""),x=v=>v.from===v.to?`Centre: ${jt(v.from)} \xB5m`:`${jt(v.from)}\u2013${jt(v.to)} \xB5m (range)`,y=a.map((v,T)=>{let S=c+T*o,R=`<text class="chart-tick" x="${at.left+34}" y="${S+11}" text-anchor="end">${St(v.label)}</text>`,_=v.bands.map(w=>{let D=u(Math.max(i,w.from)),N=u(Math.min(s,w.to)),H=`<title>${St(`${v.label} ${w.name}: ${x(w)}`)}</title>`;return w.from===w.to?`<line class="chart-centre" x1="${D.toFixed(1)}" x2="${D.toFixed(1)}" y1="${S+2}" y2="${S+o-2}" stroke="var(--accent)" stroke-width="2">${H}</line>`:`<rect class="chart-band" x="${D.toFixed(1)}" y="${S+3}" width="${(N-D).toFixed(1)}" height="${o-6}">${H}</rect>`}).join("");return R+_}).join(""),p=tu(i,s).map(v=>`<text class="chart-tick" x="${u(v).toFixed(1)}" y="${l-14}" text-anchor="${zo(u(v),h,f)}">${St(v>=1e3?`${jt(v/1e4)} cm`:`${jt(v)} \xB5m`)}</text>`).join(""),d=`<svg class="chart" viewBox="0 0 360 ${l}" role="img" aria-label="${St(n)}" xmlns="http://www.w3.org/2000/svg">${m}${y}${p}</svg>`,M='<p class="note">Lines mark centre wavelengths, not bandwidths. Bars show reported wavelength ranges. Ranges stop at the panel edges; the table keeps their full endpoints.</p>',E=a.flatMap(v=>v.bands.map(T=>[v.label,T.name,x(T)]));return d+M+Vo(n,["Instrument","Band","Wavelength"],E)}function Af({title:n,unit:e="",bars:t,approximate:i=e==="%"}){if(t.some(u=>!Number.isFinite(u?.value)||u.value<0))throw new RangeError("Bar values must be finite and nonnegative");let s=t;if(!s.length)return"";let r=22,a=s.length*r+16,o=Math.max(...s.map(u=>u.value),0)||1,c=nu(0,o,90,320),l=s.map((u,m)=>{let x=8+m*r;return`<text class="chart-tick" x="84" y="${x+13}" text-anchor="end">${St(u.label)}</text><rect class="chart-band" x="90" y="${x+3}" width="${(c(u.value)-90).toFixed(1)}" height="${r-8}"/><text class="chart-note" x="${(c(u.value)+4).toFixed(1)}" y="${x+13}">${St(`${i?"\u2248":""}${jt(u.value)}${e}`)}</text>`}).join("");return`<svg class="chart" viewBox="0 0 360 ${a}" role="img" aria-label="${St(n)}" xmlns="http://www.w3.org/2000/svg"><line class="chart-grid" x1="90" x2="90" y1="0" y2="${a}"/>${l}</svg>`+(i?'<p class="note">\u2248 means approximately. See the accompanying source for the comparison period and uncertainty.</p>':"")+Vo(n,["",e?`Value (${e})`:"Value"],s.map(u=>[u.label,`${i?"\u2248":""}${jt(u.value)}`]))}function Cf(n){let e=new Map,t=null;for(let r of n??[]){if(!Number.isFinite(r?.x)||!Number.isFinite(r?.y))continue;let a=Math.floor(r.x),o=e.get(a)??{sum:0,count:0,first:r.x,last:r.x};o.sum+=r.y,o.count+=1,o.first=Math.min(o.first,r.x),o.last=Math.max(o.last,r.x),t=t===null?r.x:Math.max(t,r.x),e.set(a,o)}let i=[...e.entries()].sort((r,a)=>r[0]-a[0]),s=i.filter(([r,{first:a,last:o}])=>{let c=r%4===0&&(r%100!==0||r%400===0)?366:365;return a-r>31/c||r+1-o>31/c}).map(([r])=>r);return{points:i.map(([r,{sum:a,count:o}])=>({x:r,y:Number((a/o).toFixed(1))})),partialYears:s,through:t}}function Rf(n){let e=new URLSearchParams(n),t=e.get("lesson");if(!t||!/^[a-z0-9-]{1,64}$/.test(t))return null;let i=Number.parseInt(e.get("step")??"1",10);return{id:t,step:Number.isFinite(i)&&i>=1?i-1:0}}function Pf(n,e){if(!e)return n;let t=n.includes("?")?"&":"?";return`${n}${t}lesson=${encodeURIComponent(e.id)}&step=${e.step+1}`}function ru(n){return{text:String(n?.text??""),sources:(Array.isArray(n?.sources)?n.sources:[]).filter(e=>typeof e?.url=="string"&&/^https:\/\//.test(e.url)).map(e=>({label:String(e.label||"Source"),title:String(e.title||e.label||"Source"),url:e.url}))}}function J7(n,e){if(!e)return[];let t=new Set([e.regime,...e.patterns??[]].filter(Boolean));return(n??[]).filter(i=>(i.orbits??[]).some(s=>t.has(s)))}function If({api:n,element:e,card:t,list:i,layers:s,showSatellite:r,face:a,openTab:o=()=>{},play:c=()=>{},status:l,fallbackFocus:h=()=>null,browseSatellites:f,onChange:u}){let m=null,x=null,y=null,p=null,d=null;function M(){return x??(x=n.lessons().then(se=>(m=Array.isArray(se?.lessons)?se.lessons:[],m),se=>{throw x=null,se})),x}let E=se=>s()?.views().find(ue=>ue.id===se)?.name??se,v=se=>se?{minLat:se.min_lat,minLon:se.min_lon,maxLat:se.max_lat,maxLon:se.max_lon}:null,T=(se,ue)=>s()?.show(se.layer,se.date,v(se.box),{plain:!!se.plain,base:ue}),S=se=>Array.isArray(se.pictures)&&se.pictures.length>=2?se.pictures:null;function R(se,ue){let he={base:"",view:""};for(let F of se.steps.slice(0,ue+1))F.satellite&&(he.satellite=F.satellite),F.camera&&(he.camera=F.camera),F.tab&&(he.tab=F.tab),F.play&&(he.play=F.play),typeof F.base=="string"&&(he.base=F.base),(S(F)||F.picture||F.compare?.length===2||typeof F.view=="string")&&(delete he.pictures,delete he.picture,delete he.compare,delete he.view,S(F)?he.pictures=F.pictures:F.picture?he.picture=F.picture:F.compare?.length===2?he.compare=F.compare:he.view=F.view);return he}function _(se,ue=!1){if(se.satellite&&r(se.satellite,{frame:!se.camera})===!1)return!1;let he=s();return ue&&he?.beginLesson(),he&&(S(se)?T(se.pictures[0],se.base):se.picture?T(se.picture,se.base):he.show(se.compare?.[0]??se.view,"",null,{base:se.base})),se.camera&&a(se.camera.lat,se.camera.lon,se.camera.distance||null),se.tab&&o(se.tab),!0}let w=new Map;function D(se){let ue=se.dataset==="sea-ice"?`sea-ice:${se.hemisphere}:${se.month}`:se.dataset;if(!w.has(ue)){let he=se.dataset==="sea-ice"?n.seaIce(se.hemisphere,se.month):n.seaLevel();w.set(ue,he.catch(F=>{throw w.delete(ue),F}))}return w.get(ue)}async function N(se){if(se.dataset==="bars")return{markup:Af({title:se.title,unit:se.unit,bars:se.bars.map(L=>({label:L.label,value:L.value}))})};let ue=await D(se);if(se.dataset==="sea-ice"){let L=(ue.data??[]).map(ie=>({x:ie.year,y:ie.extent_million_km2})),q=(se.highlight??[]).map(ie=>({x:ie,label:String(ie)}));return{markup:su({title:se.title,xLabel:"Year",yLabel:`Extent (${se.unit})`,points:L,highlight:q}),feed:ue,note:"Computed by Khonsu from NSIDC's monthly values."}}let he=ue.data??{},{points:F,partialYears:Z,through:pe}=Cf((he.points??[]).map(L=>({x:L.year,y:L.level_mm}))),Ce=pe===null?null:Math.floor(pe),_e=Ce===null?null:new Date(Date.UTC(Ce,0,1)+Math.round((pe-Ce)*(Date.UTC(Ce+1,0,1)-Date.UTC(Ce,0,1)))),We=_e?` Latest observation: ${_e.toISOString().slice(0,10)} UTC, converted from NOAA's decimal year.`:"",st=he.trend?` NOAA's stated trend: ${he.trend}.`:"",Xe=Array.isArray(he.notes)?he.notes.join(" "):he.notes??"",j=Z.map(L=>({x:L,label:`${L} partial`})),A=Z.length?` Partial years: ${Z.join(", ")}. These means cover only the available observations.`:"";return{markup:su({title:se.title,xLabel:"Year",yLabel:"Sea-level anomaly (mm)",points:F,highlight:j}),feed:ue,note:`Annual means of NOAA's sea-level anomalies, computed by Khonsu.${A}${We} The seasonal cycle is removed. No glacial-isostatic adjustment is applied.${st} ${Xe}`.trim()}}function H(se,ue){let he=e("div","lesson-chart");return he.append(e("p","note","Loading the record\u2026")),N(se).then(({markup:F,feed:Z,note:pe})=>{if(ue!==ee)return;let Ce=e("div","learn-chart");Ce.innerHTML=F;let _e=[e("p","lesson-chart-title",se.title),Ce];pe&&_e.push(e("p","note",pe)),Z?.source?.credit&&_e.push(e("p","note lesson-credit",Z.source.credit)),se.source&&_e.push(Y([ru(se.source)])),he.replaceChildren(..._e)},F=>{ue===ee&&he.replaceChildren(e("p","note is-error",`Could not load this record: ${F.message}`))}),he}function Y(se){let ue=e("ul","why-list");return ue.append(...se.map(he=>{let F=e("li","",he.text);return Zn(e,F,he.sources),F})),ue}function O(se,ue,he){let F=e("button",ue,se);return F.type="button",F.dataset.lessonFocus=se,F.addEventListener("click",he),F}function P(se){let ue=e("div","lesson-compare");return ue.setAttribute("role","group"),ue.setAttribute("aria-label","Compare pictures"),ue.append(...se.pictures.map((he,F)=>{let Z=O(he.label||he.date,"text-button",()=>{y.compareOn=F,T(he,se.base),X()});return Z.setAttribute("aria-pressed",String(y.compareOn===F)),Z})),ue}function B(se){let ue=e("div","lesson-compare");return ue.setAttribute("role","group"),ue.setAttribute("aria-label","Compare two views"),ue.append(...se.compare.map((he,F)=>{let Z=O(E(he),"text-button",()=>{y.compareOn=F,s()?.show(he,"",null,{base:se.base}),X()});return Z.setAttribute("aria-pressed",String(y.compareOn===F)),Z})),ue}function V(se){let ue=e("div","lesson-question");ue.append(e("p","lesson-prompt",se.prompt));let he=e("div","lesson-choices");if(he.append(...se.choices.map((F,Z)=>{let pe=O(F,"text-button lesson-choice",()=>{y.answer=Z,X()});return pe.setAttribute("aria-pressed",String(y.answer===Z)),y.answer!==null&&(pe.disabled=!0,Z===se.answer&&pe.classList.add("is-right")),pe})),ue.append(he),y.answer!==null){let F=y.answer===se.answer?"Yes.":`Not quite: it's "${se.choices[se.answer]}".`,Z=e("div","lesson-feedback");Z.setAttribute("role","status"),Z.append(e("p","lesson-verdict",F),Y([ru(se.explain)])),ue.append(Z)}return ue}let ee=0;function X(){if(ee+=1,!y){t.hidden=!0,t.replaceChildren();return}let se=t.ownerDocument?.activeElement,ue=t.contains?.(se)?se?.dataset?.lessonFocus:null,he=t.querySelector?.(".lesson-body")?.scrollTop??0,{lesson:F}=y;t.classList?.toggle?.("is-story",!!F.story);let Z={...F.steps[y.step],...R(F,y.step)},pe=F.steps.length,Ce=[];if(d=e("h2","lesson-title",F.title),d.id="lesson-title",d.tabIndex=-1,y.error){let q=e("p","note is-error",y.error);q.setAttribute("role","alert"),Ce.push(q,O("Retry scene","text-button",()=>Q(y.pendingStep,y.pendingLesson)))}if(y.applied){let q=(Z.text??[]).map(ru).filter(ie=>ie.text);q.length&&Ce.push(Y(q)),S(Z)?Ce.push(P(Z)):Array.isArray(Z.compare)&&Z.compare.length===2&&Ce.push(B(Z)),Z.chart&&Ce.push(H(Z.chart,ee)),Z.hint&&Ce.push(e("p","note lesson-hint",Z.hint)),Z.question&&Ce.push(V(Z.question)),!s()?.views().length&&(Z.view||Z.compare||Z.base||Z.picture||Z.pictures)&&Ce.push(e("p","note","The pictures in this lesson need live data and WebGL, so the globe stays as it is."))}let _e=e("div","lesson-actions"),We=O("Back","text-button",()=>Q(y.step-1));We.disabled=!y.applied||y.step===0;let st=y.step===pe-1,Xe=O(st?"Finish":"Next","primary-button",()=>st?Pe():Q(y.step+1));Xe.disabled=!y.applied,_e.append(O("Close","text-button lesson-close",Pe),We,Xe);let j=e("header","lesson-header"),A=e("div","lesson-progress");A.append(e("p","",y.applied?`${F.story?"Story":"Lesson"}, step ${y.step+1} of ${pe}`:"Scene not applied")),f&&A.append(O("Satellites","text-button",f)),j.append(_e,A,d);let L=e("div","lesson-body");if(L.append(...Ce),t.replaceChildren(j,L),L.scrollTop=he,t.hidden=!1,ue){let q=[...t.querySelectorAll?.("button")??[]];(q.find(me=>me.dataset.lessonFocus===ue&&!me.disabled)??q.find(me=>me.textContent==="Retry scene")??Xe).focus?.()}}function Q(se,ue=y?.lesson,he=!1){if(!ue)return!1;let F=Math.max(0,Math.min(ue.steps.length-1,se)),Z=R(ue,F),pe=_(Z,he||!y?.applied||y.lesson!==ue);if(pe&&c(Z.play??null),pe?y={lesson:ue,step:F,answer:null,compareOn:0,applied:!0}:(y??(y={lesson:ue,step:F,answer:null,compareOn:0,applied:!1}),y.error=`This scene needs another satellite, but all tracking slots are full. Remove a satellite from Tracked, then retry, or close the lesson. ${y.applied?"Your current scene has not changed.":"No lesson scene has been applied."}`,y.pendingStep=F,y.pendingLesson=ue),X(),u(),pe&&l){let _e=`Step ${F+1} of ${ue.steps.length}. ${ue.title}`;l.textContent!==_e&&(l.textContent=_e)}d?.focus?.({preventScroll:!0});let Ce=t.querySelector?.(".lesson-body");return Ce&&(Ce.scrollTop=0),pe}async function oe(se,ue=0){let he=t.ownerDocument?.activeElement,Z=(await M()).find(pe=>pe.id===se);return!Z||!Array.isArray(Z.steps)||!Z.steps.length?!1:(t.contains?.(he)||(p=he),Q(ue,Z,!0))}function Pe(){c(null),y=null,X(),l&&(l.textContent=""),u();let se=h(),ue=p?.isConnected&&p!==t.ownerDocument?.body&&!p.closest?.("[hidden]")?p:se;ue?.focus?.(),t.ownerDocument?.activeElement!==ue&&se?.focus?.(),p=null}async function ye(se){i.replaceChildren(e("p","note","Loading\u2026"));let ue;try{ue=await M()}catch(he){i.replaceChildren(e("p","note is-error",`Could not load the lessons: ${he.message}`));return}i.replaceChildren(...ue.map(he=>{let F=e("div","lesson-item");return F.append(e("h3","lesson-item-title",he.title),e("p","note",he.summary)),F.append(O("Start","text-button",()=>{se?.(),oe(he.id)})),F}))}return{start:oe,stop:Pe,renderList:ye,forOrbit:se=>M().then(ue=>J7(ue,se),()=>[]),current:()=>y?.applied?{id:y.lesson.id,step:y.step}:null,holdsCamera:()=>!!(y?.applied&&R(y.lesson,y.step).camera)}}var Ff=["visible","near_infrared","shortwave_infrared","thermal_infrared","water_vapour","night_lights","passive_microwave","radar","altimetry","atmospheric_composition","laser_ranging","imaging_spectroscopy"],Go=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),vt=(n,e,t,i="")=>`<text x="${n}" y="${e}" class="${i}">${Go(t)}</text>`;function Nn(n,e,t,i,s=""){let r=Math.atan2(i-e,t-n),a=[[t,i],[t-8*Math.cos(r-.45),i-8*Math.sin(r-.45)],[t-8*Math.cos(r+.45),i-8*Math.sin(r+.45)]];return`<g class="${s}"><path d="M${n} ${e}L${t} ${i}" class="kind-ray"/><polygon points="${a.map(o=>o.join(",")).join(" ")}"/></g>`}var au=(n,e)=>`<g transform="translate(${n} ${e})" class="kind-satellite"><path d="M-30 -8h18v16h-18zM12 -8h18v16H12z"/><rect x="-10" y="-12" width="20" height="24" rx="3"/><path d="M-5 14L0 20l5-6" class="kind-ray"/></g>`,Lf='<path d="M12 169Q65 153 110 170T195 169T288 170V190H12Z" class="kind-ground"/>',Df='<path d="M96 168v-33m-14 12 14-28 14 28Z" class="kind-tree"/>';function j7(n){if(["radar","altimetry","laser_ranging"].includes(n)){let r=n==="radar",a=r?245:160;return n==="laser_ranging"?`<path d="M12 170H288V190H12Z" class="kind-ground"/><g transform="translate(64 0)">${Df}</g>`+au(a,38)+Nn(154,63,154,170,"kind-outgoing")+Nn(160,136,166,63,"kind-return")+Nn(162,170,172,63,"kind-return")+vt(18,101,"Laser pulse")+vt(195,130,"Echoes")+vt(16,212,"Return time gives distance"):Lf+au(a,38)+Nn(a-12,63,r?100:145,160,"kind-outgoing")+Nn(r?116:177,159,a+12,63,"kind-return")+vt(18,101,"Radio pulse")+vt(195,130,"Echo")+vt(16,212,n==="radar"?"Send a pulse, measure the return":"Return time gives distance")}let t=["visible","near_infrared","shortwave_infrared","atmospheric_composition","imaging_spectroscopy"].includes(n),i=Lf+Df+au(245,38);return t?(i+='<circle cx="36" cy="35" r="15" class="kind-sun"/>'+vt(16,69,"Sun")+Nn(52,52,120,154,"kind-outgoing"),i+=Nn(140,154,234,65,"kind-return")+vt(185,148,"Reflected light")):n==="night_lights"?i+='<path d="M117 168v-23h20v23m8 0v-35h22v35" class="kind-city"/>'+Nn(155,130,234,65,"kind-return")+vt(185,148,"Faint light"):n==="water_vapour"?i+=Nn(172,124,232,65,"kind-return")+vt(124,148,"Atmospheric infrared"):i+=Nn(128,157,232,65,"kind-return")+vt(185,148,n==="passive_microwave"?"Microwaves":"Infrared"),["water_vapour","atmospheric_composition","passive_microwave"].includes(n)&&(i+='<path d="M15 115Q65 92 112 114T210 113T286 110" class="kind-atmosphere"/>',i+=vt(16,92,n==="water_vapour"?"Water vapour":n==="atmospheric_composition"?"Atmosphere":"Cloud")),(n==="imaging_spectroscopy"||n==="atmospheric_composition")&&(i+='<path d="M258 55l22 12m-22-12 22 20m-22-20 22 28" class="kind-spectrum-rays"/>'),i+vt(16,212,n==="imaging_spectroscopy"?"Separate wavelengths for each pixel":t?"Receive reflected sunlight":n==="night_lights"?"Receive low-light signals":"Receive naturally emitted energy")}function Q7(n){if(n==="laser_ranging")return`<path d="M23 30V177H284" class="kind-axis"/>${Array.from({length:25},(a,o)=>{let c=30+o*10,l=70+Math.sin(o*.8)*18;return`<circle cx="${c}" cy="${l}" r="2.5" class="kind-sample"/><circle cx="${c}" cy="${155+Math.sin(o*.25)*5}" r="2" class="kind-ground-return"/>`}).join("")}${vt(28,27,"Canopy returns")}${vt(135,143,"Ground returns")}${vt(98,204,"Along the track")}`;if(n==="imaging_spectroscopy")return'<path d="M32 26V176H285" class="kind-axis"/><path d="M35 115Q65 40 96 80T146 113T195 65T240 125L277 70" class="kind-spectrum-a"/><path d="M35 140Q65 115 96 135T146 70T195 120T240 100L277 135" class="kind-spectrum-b"/>'+vt(40,24,"Signal")+vt(90,204,"Wavelength")+vt(177,30,"Pixel A")+vt(177,51,"Pixel B");if(n==="night_lights")return'<path d="M24 155Q43 80 115 98T268 58" class="kind-coast"/>'+Array.from({length:30},(r,a)=>`<circle cx="${40+a*47%225}" cy="${45+a*31%110}" r="${a%4===0?3:1.5}" class="kind-night-dot"/>`).join("")+vt(30,204,"A low-light image, not a heat map");let t={visible:["#527f63","#95a276","#9fb7c1","#e9edf1"],near_infrared:["#276c55","#6cbc63","#c3bd89","#415b89"],shortwave_infrared:["#a95453","#6cbc63","#73bac5","#415b89"],thermal_infrared:["#5477ae","#66afa4","#d3ba67","#d27d59"],water_vapour:["#4b67a0","#799ac1","#77b8ad","#c3cf9d"],passive_microwave:["#34506b","#8eb6c7","#c8dde4","#eef4f5"],radar:["#a7adb4","#f1f0e8","#4589cb","#679c70"],altimetry:["#5477ae","#8eb6c7","#e3c9bc","#b96c66"],atmospheric_composition:["#535990","#5a93a3","#a5bf92","#d3ba67"]}[n];return Array.from({length:96},(r,a)=>{let o=Math.floor(a/12),c=a%12,l=(Math.floor(c/3)+Math.floor(o/2))%t.length,h=["thermal_infrared","atmospheric_composition"].includes(n)&&(o+c)%11===0;return`<rect x="${24+c*21}" y="${24+o*18}" width="20" height="17" fill="${h?"none":t[l]}"/>`}).join("")+vt(16,204,{visible:"Land, water and cloud",near_infrared:"Near infrared displayed as green",shortwave_infrared:"Shortwave infrared displayed as red",thermal_infrared:"Cooler and warmer surfaces",water_vapour:"Lower and higher water content",passive_microwave:"Sea-ice concentration cells",radar:"Processed water classes",altimetry:"Below and above a reference",atmospheric_composition:"A retrieved gas-column map"}[n])}function Nf(n,e){if(!Ff.includes(n?.id)||!["capture","example"].includes(e))return"";let t=n.visual?.[e],i=typeof t?.text=="string"?t.text:n.name;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 230" class="kind-graphic" role="img" aria-label="${Go(i)}"><title>${Go(n.name)}: ${e==="capture"?"how it is captured":"illustrative output"}</title><desc>${Go(i)}</desc>${e==="capture"?j7(n.id):Q7(n.id)}</svg>`}function e8(n,e){let t=(e??[]).find(r=>r.id===n?.layer);if(!t||!/^[a-z0-9-]+$/.test(t.id)||!/^\d{4}-\d{2}-\d{2}$/.test(n.date??""))return null;let i=new Date(`${n.date}T00:00:00Z`);if(!Number.isFinite(i.getTime())||i.toISOString().slice(0,10)!==n.date)return null;let s=new URLSearchParams({layer:t.id,date:n.date});if(n.box){let{min_lat:r,min_lon:a,max_lat:o,max_lon:c}=n.box;if(!t.story||![r,a,o,c].every(Number.isFinite)||r<-90||o>90||a<-180||c>180||r>=o||a>=c)return null;s.set("bbox",[r,a,o,c].join(","))}return`/api/v1/imagery?${s}`}function Uf({element:n,kind:e,catalog:t=Promise.resolve(null)}){if(!Ff.includes(e?.id)||typeof e.visual?.capture?.text!="string"||typeof e.visual?.example?.text!="string")return null;let i=e.visual,s=n("div","kind-visual"),r=n("figure","kind-figure"),a=n("p","kind-example-label","Illustration \xB7 not measured data"),o=n("div","kind-drawing");o.innerHTML=Nf(e,"example");let c=n("img","kind-observation");c.hidden=!0,c.decoding="async";let l=n("figcaption","note"),h=n("div","kind-image-credit"),f=n("p","note kind-load-status"),u=n("button","text-button","Try observation again");u.type="button",u.hidden=!0;let m=(E,v)=>{E.textContent=String(v?.text||""),Zn(n,E,(v?.sources??[]).filter(T=>/^https:\/\//.test(T?.url??"")))};m(l,i.example),r.append(a,o,c,l,h,f,u);let x=n("figure","kind-figure kind-capture"),y=n("div","kind-drawing");y.innerHTML=Nf(e,"capture");let p=n("figcaption","note");m(p,i.capture),x.append(n("p","kind-example-label","Schematic \xB7 not to scale"),y,p),s.append(n("h4","kind-visual-title","What the data looks like"),r,n("h4","kind-visual-title","How it is captured"),x);let d=!1;async function M(E=!1){if(d&&!E||(d=!0,!i.picture))return;u.hidden=!0;let v=await Promise.resolve(t).catch(()=>null);if(!v?.liveData){f.textContent=v?"Observation images are off in local-file mode. The illustration and capture diagram still work.":"The imagery catalog is unavailable. The illustration and capture diagram still work.";return}let T=e8(i.picture,v.layers),S=v.layers?.find(R=>R.id===i.picture.layer);if(!T||!i.observation){f.textContent="No registered observation image is available for this example.";return}f.textContent=`Loading a dated observation from ${S.credit||"NASA GIBS"}\u2026`,c.alt=i.observation.text,c.onload=()=>{o.hidden=!0,c.hidden=!1,a.textContent=`Example observation \xB7 ${i.picture.date}`,m(l,i.observation);let R=[n("p","note",S.credit||"NASA GIBS")],_=ko(n,S);_&&(_.open=!0,R.push(_)),h.replaceChildren(...R),f.textContent=""},c.onerror=()=>{f.textContent="The dated observation could not be loaded. The drawing above is an illustration, not substitute measurements.",u.hidden=!1},c.src=T}return u.addEventListener("click",()=>M(!0)),{node:s,load:M}}var Of=[{id:"kinds",title:"Kinds of data"},{id:"sharp",title:"Sharp or often"},{id:"stories",title:"Stories"},{id:"lessons",title:"Lessons"}];function Mr(n){return(Array.isArray(n)?n:[]).filter(e=>typeof e?.text=="string"&&e.text.trim()).map(e=>({text:e.text,sources:(Array.isArray(e.sources)?e.sources:[]).filter(t=>typeof t?.url=="string"&&/^https:\/\//.test(t.url)).map(t=>({label:String(t.label||"Source"),title:String(t.title||t.label||"Source"),url:t.url}))}))}function t8(n){return(n??[]).filter(e=>Array.isArray(e.bands)&&e.bands.length).map(e=>({label:e.short||e.id.toUpperCase(),bands:e.bands.filter(t=>Number.isFinite(t?.from_um)&&Number.isFinite(t?.to_um)&&t.from_um>0&&t.to_um>=t.from_um).map(t=>({name:t.name,from:t.from_um,to:t.to_um}))})).filter(e=>e.bands.length)}function n8(n){return(n??[]).filter(e=>Number.isFinite(e.resolution_m)&&Number.isFinite(e.revisit_days)&&e.resolution_m>0&&e.revisit_days>0).map(e=>({label:e.short||e.id.toUpperCase(),x:e.resolution_m,y:e.revisit_days}))}function i8(n){let e=(n??[]).filter(t=>(t.orbits??[]).length);return[["How orbits work",e],["Reading the data",(n??[]).filter(t=>!e.includes(t))]]}function Bf({api:n,element:e,panel:t,layers:i,imageryCatalog:s,showSatellite:r,startLesson:a,startStory:o,onClose:c}){let l=null,h=null,f="kinds",u=0;function m(){return h??(h=n.learn().then(_=>(l=_??{},l),_=>{throw h=null,_})),h}let x=(_,w="note")=>e("p",w,_);function y(_,w,D){let N=e("button",w,_);return N.type="button",N.addEventListener("click",D),N}function p(_){let w=e("ul","why-list");return w.append(..._.map(D=>{let N=e("li","",D.text);return Zn(e,N,D.sources),N})),w}function d(_){let w=e("div","learn-chart");return w.innerHTML=_,w}function M(_){let w=e("details","learn-card");w.append(e("summary","learn-card-title",_.name));let D=Uf({element:e,kind:_,catalog:s});D&&(w.append(D.node),w.addEventListener("toggle",()=>{w.open&&D.load()}));let N=(_.conditions??[]).filter(P=>P?.label);if(N.length){let P=e("ul","learn-conditions");P.append(...N.map(B=>e("li",`learn-condition ${B.value?"is-yes":"is-no"}`,B.label))),w.append(P)}w.append(p(Mr([..._.statements??[],...N])));let H=Mr(_.uses);if(H.length&&w.append(e("h4","learn-subtitle","Used today for"),p(H)),(_.satellites??[]).length){w.append(e("h4","learn-subtitle","Collected by"));let P=e("div","learn-chips");P.append(..._.satellites.map(B=>y(B.name,"learn-chip",()=>r(B.norad_id)))),w.append(P)}let Y=(_.layers??[]).map(P=>i()?.views().find(B=>B.id===P)).filter(Boolean),O=e("div","link-row");return O.append(...Y.map(P=>y(`Show on the globe: ${P.name}`,"text-button data-view",()=>i()?.show(P.id)))),O.append(...(_.lessons??[]).map(P=>{let B=(l.stories??[]).some(V=>V.id===P.id);return y(`${B?"Story":"Lesson"}: ${P.title}`,"text-button data-view",()=>(B?o:a)(P.id))})),(Y.length||(_.lessons??[]).length)&&w.append(O),w}function E(){let _=[x("What can satellites measure? Open a kind of data to see how it works, what people use it for, and which satellites collect it.","learn-intro")],w=t8(l.instruments);if(w.length&&Array.isArray(l.regions)&&l.regions.length){_.push(e("h3","why-title","Where each instrument looks"));let D=l.regions.map(N=>({label:N.label,from:N.from_um,to:N.to_um}));for(let[N,H,Y]of[["Light: visible and infrared",.3,20],["Radio: radar and microwave",1e4,3e5]]){let O=w.map(P=>({...P,bands:P.bands.filter(B=>B.to>=H&&B.from<=Y)})).filter(P=>P.bands.length);O.length&&(_.push(e("p","lesson-chart-title",N)),_.push(d(Ef({title:`${N}: bands of instruments Khonsu describes`,regions:D.filter(P=>P.to>H&&P.from<Y),rows:O,min:H,max:Y}))))}l.regions_sources&&_.push(p(Mr(l.regions_sources)))}return _.push(...(l.kinds??[]).map(M)),_}function v(){let _=n8(l.instruments),w=[x("Compare the finest spatial resolution of the listed bands and modes with their stated time between observations.","learn-intro")];if(w.push(x("Resolution depends on the band and operating mode. For a non-square measurement, this chart uses the shorter side; the specifications below give both dimensions. These are instrument figures, not the detail shown by this globe.")),w.push(x("The times below include repeat cycles, revisit times and coverage intervals. Some assume one satellite, others a two-satellite fleet. Read each specification before comparing them. A scheduled look does not guarantee a cloud-free picture.")),w.push(p(Mr(l.sharp_statements))),_.length){w.push(d(Tf({title:"Finest spatial resolution against observation interval",xLabel:"Finest resolution (m)",yLabel:"Days between looks",points:_})));let D=(l.instruments??[]).filter(N=>N.specs);D.length&&(w.push(e("h4","learn-subtitle","Where the numbers come from")),w.push(p(Mr(D.map(N=>N.specs)))))}else w.push(x("The numbers for this chart are not available."));return w}function T(){let _=l.stories??[];return _.length?[x("See how satellites help explain fires, floods and other changes on Earth. Stories use dated pictures, charts or published findings. Each one explains what its evidence can and cannot show.","learn-intro"),..._.map(w=>{let D=e("div","learn-story");return D.append(e("h3","learn-story-title",w.title),x(w.summary)),(w.when||w.where)&&D.append(x([w.when,w.where].filter(Boolean).join(" \xB7 "),"note learn-story-meta")),D.append(y("Open the story","text-button",()=>o(w.id))),D})]:[x("No stories yet.")]}function S(){let _=l.lessons??[],w=N=>{let H=e("div","learn-story");return H.append(e("h3","learn-story-title",N.title),x(N.summary),y("Start","text-button",()=>a(N.id))),H},D=[x("Try a short guided tour. Look at the globe, make a prediction, then check the explanation and its sources.","learn-intro")];for(let[N,H]of i8(_))H.length&&D.push(e("h3","why-title",N),...H.map(w));return D}async function R(){let _=++u,w=f,D=e("div","learn-header"),N=e("h2","eyebrow","Learn");N.id="learn-title",N.tabIndex=-1,D.append(N,y("Close","text-button",()=>{u+=1,c()}));let H=e("div","learn-tabs");H.setAttribute("role","tablist"),H.setAttribute("aria-label","Learn chapters"),H.append(...Of.map(P=>{let B=y(P.title,"learn-tab",()=>(f=P.id,R()));return B.setAttribute("role","tab"),B.setAttribute("aria-selected",String(P.id===f)),B}));let Y=e("div","learn-body");Y.append(x("Loading\u2026")),t.replaceChildren(D,H,Y);try{await m()}catch(P){if(_!==u)return;Y.replaceChildren(x(`Could not load Learn: ${P.message}`,"note is-error"),y("Try again","text-button",R));return}if(_!==u)return;let O={kinds:E,sharp:v,stories:T,lessons:S};Y.replaceChildren(...O[w]())}return{render:R,show(_){return Of.some(w=>w.id===_)&&(f=_),R()},chapter:()=>f}}var s8="Loading\u2026",kf="Live data is off while serving a local file.";function zf({api:n,element:e,feedCredit:t,dataFailure:i,dataTime:s,catalog:r,chips:a,popover:o,onKp:c=()=>{},now:l=Date.now}){let h=S(),f=S(),u=S(),m=S(),x=!1,y=!0,p=null,d=0,M=null,E=null,v=null,T=null;function S(){return{feed:null,error:null,pending:null}}function R(A,L){if(!A.pending){let q;try{q=Promise.resolve(L())}catch(ie){q=Promise.reject(ie)}A.pending=q.then(ie=>{A.feed=ie,A.error=null},ie=>{un(ie)||(A.error=ie)}).then(()=>{A.pending=null,D()})}return A.pending}function _(){if(!y)return"off";if(h.feed){let A=Yc(h.feed.data);return A===null?"unavailable":A.toFixed(1)}return h.error&&!h.pending?"unavailable":"\u2026"}function w(){if(!y)return"off";if(f.feed){let A=l(),L=tf(f.feed.data,A);return L?nf(L,A):"none listed"}return f.error&&!f.pending?"unavailable":"\u2026"}function D(){v&&(v.textContent=_(),T.textContent=w())}function N(){M?.setAttribute("aria-expanded",String(p==="weather")),E?.setAttribute("aria-expanded",String(p==="launch"))}function H(A,L,q){let ie=e("button","sky-chip",null);return ie.setAttribute("type","button"),ie.setAttribute("aria-haspopup","dialog"),ie.setAttribute("aria-expanded","false"),ie.append(A,L),ie.addEventListener("click",()=>We(q)),ie}function Y(A){let L=e("div","data-values");for(let[q,ie]of A){let me=e("span",null,`${q} `);me.append(e("strong",null,ie)),L.append(me)}return L}function O(A,L){if(A.feed){let q=L(A.feed);return A.error&&q.push(i(A.error)),q}return A.error&&!A.pending?[i(A.error)]:[e("p","note",s8)]}function P(A,L){let q=e("div","sky-block");return q.append(...O(A,L)),q}function B(A){let{kp:L=[],flux:q=[],scales:ie,alerts:me=[]}=A.data,ge=[],Le=L.at(-1),U=Le?[["Kp",`${Le.kp.toFixed(1)} ${qd(Le.kp)}`]]:[];if(q.length&&U.push(["F10.7",String(Math.round(q.at(-1).flux))]),ie&&U.push(["Scales",`G${ie.geomagnetic.level} S${ie.solar.level} R${ie.radio.level}`]),U.length&&ge.push(Y(U)),me.length){let tt=e("ul");tt.append(...me.slice(0,3).map(Ye=>e("li",null,`${s(Ye.issued_at)}: ${Ye.headline}`))),ge.push(tt)}return[...ge,...t(A)]}function V(A){let L=Zd(A.data);return L?[Y([["Past year, strongest Kp",`${L.strongest.kp_max.toFixed(1)} on ${L.strongest.date}`],["Average F10.7",String(Math.round(L.meanFlux))]]),...t(A)]:[e("p","note","No observed days are available.")]}function ee(A){if(!A.data.length)return[e("p","note","No events in the past two weeks."),...t(A)];let L=e("ul");return L.append(...A.data.slice(0,4).map(q=>e("li",null,`${s(q.time)}: ${q.kind}${q.detail?` (${q.detail})`:""}`))),[L,...t(A)]}function X(A){if(!A.data.length)return[e("p","note","No upcoming launches are listed."),...t(A)];let L=e("ul");return L.append(...A.data.slice(0,5).map(q=>{let ie=e("li","sky-launch",q.name);return ie.append(e("span","sky-meta",` ${s(q.net)} \xB7 ${q.status}`)),ie})),[L,...t(A)]}function Q(){let A=e("h3","sky-title","Space weather");return y?[A,...O(h,B),P(u,V),P(m,ee)]:[A,e("p","note",kf)]}function oe(){let A=e("h3","sky-title","Next launches");return y?[A,...O(f,X)]:[A,e("p","note",kf)]}function Pe(){p&&o.replaceChildren(...p==="weather"?Q():oe())}function ye(A,L){A.then(()=>{L===d&&Pe()})}function se(){return Promise.resolve(n.spaceWeather()).then(A=>(c(Yc(A.data)),A),A=>{throw un(A)||c(null),A})}function ue(A){y&&(ye(R(h,se),A),u.feed||ye(R(u,()=>n.spaceWeatherHistory()),A),m.feed||ye(R(m,()=>n.spaceEvents()),A))}function he(A){y&&ye(R(f,()=>n.launches()),A)}function F(A){o.contains(A.target)||M.contains(A.target)||E.contains(A.target)||st()}function Z(A){if(A.key!=="Escape"||!p)return;let L=p==="weather"?M:E;st(),L.focus()}function pe(){globalThis.document.addEventListener("pointerdown",F),globalThis.document.addEventListener("keydown",Z)}function Ce(){globalThis.document.removeEventListener("pointerdown",F),globalThis.document.removeEventListener("keydown",Z)}function _e(A){p||pe(),p=A,d+=1;let L=d;N(),o.hidden=!1,Pe(),A==="weather"?ue(L):he(L)}function We(A){p===A?st():_e(A)}function st(){p&&(p=null,d+=1,Ce(),N(),o.hidden=!0,o.replaceChildren())}async function Xe(){if(x)return;if(x=!0,v=e("strong",null,"\u2026"),T=e("strong",null,"\u2026"),M=H("Kp ",v,"weather"),E=H("Launch ",T,"launch"),a.append(M,E),o.hidden=!0,y=(await Promise.resolve(r).catch(()=>null))?.liveData!==!1,!y){D(),c(null);return}await Promise.all([R(h,se),R(f,()=>n.launches())])}function j(){T&&(T.textContent=w())}return{start:Xe,tick:j,close:st}}var ou=200,r8=10*6e4,a8="25544",o8=6e4,l8=15e3,el=48,c8=1500,ne=n=>document.getElementById(n),Bt=Uu(),Ei=Fd(()=>window.localStorage);kd(Ei);var I={tracked:new Map,selected:null,observer:zd(Ei),utc:Ei.getItem("khonsu.utc")==="1",window:$c(Date.now()),time:Date.now(),live:!0,playing:!1,groups:[],items:[],isSearchResult:!1,catalogLoading:!1,tab:"now",report:null,plan:null,planError:null,planLoading:!1,planFor:null,planAt:0,activePass:null,clouds:null},ot=null,Vf=0,Gf=0,Hf=!1,jf=!0,Cs=null,Ho=null,lu=null,Ls=null,Ko=null,Ai=null,Jo=null,_u=null,Yt="catalog",Qf="catalog",cu=new Map,Wf="",Xf=null,Wo=Rf(location.search),Xo=null,uu=null,$f=0,hu=["now","orbit","data","passes"],e1={identity:"now",radio:"now",sees:"data"};function xu(){return Object.entries(e1).filter(([n,e])=>e===I.tab&&ne(`section-${n}`).open&&!ne(`section-${n}`).hidden).map(([n])=>n)}function yu(n,e,t){let i=document.activeElement,s=i&&n.contains(i)?i.dataset.focus:null;if(e(),!s)return;([...n.querySelectorAll("[data-focus]")].find(a=>a.dataset.focus===s)??t)?.focus({preventScroll:!0})}function fe(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function vu(){return[...I.tracked.keys()]}function Sn(){return I.tracked.get(I.selected)??null}function bu(){history.replaceState(null,"",Pf(Od(vu(),I.selected)||location.pathname,Ai?.current()))}function Gi(n){return`${As(n,I.utc)} ${Es(n,I.utc)}`}async function tl(n){n.error=null,n.loading=!0,clearTimeout(n.retryTimer),n.request=(n.request??0)+1;let e=n.request;Tr();try{let t=await Bt.track(n.id,I.window.start,I.observer);if(I.tracked.get(n.id)!==n)return;n.track=t.data,n.name=t.data.name||n.name,n.provenance=t.provenance,n.warnings=t.warnings,n.lookStale=!1,ot?.setTrack(n.id,t.data,n.color),ot?.select(I.selected),n.framePending&&(n.framePending=!1,n.id===I.selected&&!Ai?.holdsCamera()&&ot?.home(n.id))}catch(t){if(un(t))return;n.error=Yn(t.message),n.retryTimer=setTimeout(()=>{I.tracked.get(n.id)===n&&n.error&&tl(n)},o8)}finally{n.request===e&&(n.loading=!1),I.tracked.get(n.id)===n&&n.request===e&&(Tr(),jn(),Rr(),nl())}}function Rs(n,e,{selectIt:t=!0,frame:i=!0}={}){let s=$n(n);if(I.tracked.has(s))return t&&Ds(s),!0;if(I.tracked.size>=Mi)return Kn(`You can track up to ${Mi} satellites. Remove one to add another.`,"is-warning"),!1;let r={id:s,name:e||`NORAD ${s}`,color:Bd([...I.tracked.values()].map(a=>a.color)),track:null,error:null,loading:!0,framePending:i};return I.tracked.set(s,r),t&&Ds(s),tl(r),!0}function t1(n){clearTimeout(I.tracked.get(n)?.retryTimer),I.tracked.delete(n),ot?.removeTrack(n),I.selected===n?Ds(vu()[0]??null):(bu(),Tr(),jn(),nl())}function Ds(n){let e=I.selected!==n;I.selected=n,ot?.select(n),e&&(I.report=null,I.plan=null,I.planFor=null,I.planError=null,I.activePass=null,n&&I.tracked.get(n)?.track&&!Ai?.holdsCamera()&&ot?.home(n)),bu(),Tr(),jn(),Rr(),nl(),Cr(),r1(),e&&u8()}function u8(){let n=++$f;I.tab==="data"&&Ko.render(),Ls.hasSees().then(e=>{if(n!==$f)return;let t=ne("section-sees");t.hidden=!e,e||(t.open=!1),Ls.selectionChanged(xu())})}function n1(){for(let n of I.tracked.values())tl(n)}function Su(n){I.window=$c(n),wu(),n1()}function Kn(n,e=""){let t=ne("catalog-status");t.textContent=n,t.className=`note ${e}`}async function h8(){try{if(I.groups=await Bt.groups(),!Array.isArray(I.groups))throw new Error("The server returned an unexpected response.")}catch(e){I.groups=[],un(e)||Kn(`Could not load satellite groups: ${Yn(e.message)}`,"is-error");return}Jo.setGroups(I.groups);let n=I.groups.find(e=>e==="Space Stations")??I.groups[0];n&&(Jo.setCurrent(n),await du(n))}var Ps=0;async function du(n){let e=++Ps;if(I.isSearchResult=!1,cu.has(n)){I.items=cu.get(n),I.catalogLoading=!1,Kn(""),jn();return}I.items=[],I.catalogLoading=!0,jn(),Kn(`Loading ${n}\u2026 The first time can take a few seconds.`);try{let t=await Bt.satellites(n);if(e!==Ps)return;I.items=Array.isArray(t)?t:[],cu.set(n,I.items),Kn("")}catch(t){if(e!==Ps)return;un(t)||Kn(`Could not load ${n}: ${Yn(t.message)}`,"is-error")}I.catalogLoading=!1,jn()}async function d8(n){let e=++Ps;I.items=[],I.isSearchResult=!0,I.catalogLoading=!0,jn(),Kn("Searching every group. The first search can take up to a minute.");try{let t=await Bt.search(n);if(e!==Ps)return;I.items=t.satellites??[];let i=t.groups_covered<t.groups_total;Kn(i?`Searched ${t.groups_covered} of ${t.groups_total} groups, so more matches may exist.`:`${t.satellites.length} matches across all groups.`,i?"is-warning":"")}catch(t){if(e!==Ps)return;un(t)||Kn(`Search failed: ${Yn(t.message)}`,"is-error")}I.catalogLoading=!1,jn()}function jn(){let n=ne("filter-input").value,e=I.tracked.size>=Mi,t=[I.items.length,I.items[0]?.norad_id,I.isSearchResult,I.catalogLoading,n,vu().join(",")].join("|");if(t===Wf&&Xf===I.items)return;Wf=t,Xf=I.items;let i=I.isSearchResult?I.items:Vd(I.items,n),s=ne("catalog-list");if(I.catalogLoading&&!I.items.length){s.replaceChildren(...Array.from({length:12},()=>fe("li","catalog-skeleton"))),s.setAttribute("aria-busy","true"),qf(n);return}s.removeAttribute("aria-busy"),yu(s,()=>{s.replaceChildren(...i.slice(0,ou).map(r=>{let a=$n(r.norad_id),o=I.tracked.has(a),c=fe("li"),l=fe("button","catalog-row");l.type="button",l.setAttribute("aria-pressed",String(o)),l.disabled=!o&&e,l.dataset.focus=`catalog:${a}`,l.title=o?`Stop tracking ${r.name}`:e?`You can track up to ${Mi} satellites`:`Track ${r.name}`;let h=fe("span","catalog-mark",o?"\u2713":"+");return h.setAttribute("aria-hidden","true"),l.append(h,fe("span","catalog-name",r.name),fe("span","catalog-id",r.norad_id)),l.addEventListener("click",()=>o?t1(a):Rs(a,r.name)),c.append(l),c})),i.length>ou&&s.append(fe("li","note",`Showing ${ou} of ${i.length}. Filter to narrow the list.`)),e&&s.prepend(fe("li","note",`You can track up to ${Mi} satellites. Remove one to add another.`))},ne("filter-input")),qf(n)}function qf(n){let e=ne("catalog-actions");e.replaceChildren();let t=n.trim();if(Oc(t)&&!I.tracked.has($n(t))){let i=fe("button","text-button",`Track NORAD ${$n(t)}`);i.type="button",i.disabled=I.tracked.size>=Mi,i.addEventListener("click",()=>Rs(t)),e.append(i)}if(t&&!I.isSearchResult){let i=fe("button","text-button","Search all groups");i.type="button",i.addEventListener("click",()=>d8(t)),e.append(i)}}function Tr(){let n=ne("tracked-list");if(!I.tracked.size){n.replaceChildren(fe("li","note","Nothing yet. Pick a satellite below."));return}yu(n,()=>n.replaceChildren(...[...I.tracked.values()].map(e=>{let t=fe("li",`tracked-row${e.id===I.selected?" is-selected":""}`),i=fe("button","tracked-select");i.type="button",i.setAttribute("aria-current",String(e.id===I.selected)),i.dataset.focus=`tracked:${e.id}`;let s=fe("span","dot");s.style.setProperty("--color",e.color),i.append(s,fe("span","tracked-name",e.loading&&!e.track?`${e.name} \xB7 loading`:e.name)),e.error&&i.append(fe("span","tracked-error",e.error)),i.addEventListener("click",()=>Ds(e.id));let r=fe("button","row-action","\xD7");if(r.type="button",r.setAttribute("aria-label",`Stop tracking ${e.name}`),r.dataset.focus=`remove:${e.id}`,r.title=`Stop tracking ${e.name}`,r.addEventListener("click",()=>t1(e.id)),t.append(i,r),e.error){let a=fe("button","text-button tracked-retry","Try again");a.type="button",a.dataset.focus=`retry:${e.id}`,a.setAttribute("aria-label",`Try loading ${e.name} again`),a.addEventListener("click",()=>tl(e)),t.append(a)}return t})),ne("filter-input"))}function Vi(n,e){for(;n.children.length>e.length;)n.lastElementChild.remove();e.forEach(([t,i,s],r)=>{let a=n.children[r];a||(a=fe("div"),a.append(fe("dt"),fe("dd")),n.append(a)),a.children[0].textContent=t,a.children[1].textContent=i,a.children[1].className=s||""})}function Mu(){let n=Sn(),e=ne("now-note"),t=n?.track?.samples;if(!t?.length){Vi(ne("now-readouts"),[]),e.textContent=n?.error??(n?"Loading\u2026":"Add a satellite to see its position."),e.className=`note${n?.error?" is-error":""}`;return}let i=Date.parse(t.at(-1).time);if(I.time>i+6e4&&n.warnings?.some(h=>h.code==="propagation_stopped")){Vi(ne("now-readouts"),[]),e.textContent=`This orbit cannot be predicted past ${Gi(i)}. The satellite may have decayed.`,e.className="note is-warning";return}let s=zc(I.time,Date.parse(t[0].time),i),r=Oo(t,s),a=[["Latitude",Xc(r.latitude_deg,"N","S")],["Longitude",Xc(r.longitude_deg,"E","W")],["Altitude",`${r.altitude_km.toFixed(1)} km`],["Speed",`${r.speed_km_s.toFixed(3)} km/s`],["Sunlight",Gd(t,s)?"Sunlit":"In Earth\u2019s shadow"]],o=n.lookStale?null:kc(t,s);o&&(a.push(["Direction",`${qn(o.azimuth)} (${o.azimuth.toFixed(1)}\xB0)`]),a.push(["Elevation",`${o.elevation.toFixed(1)}\xB0`,o.elevation>0?"is-good":""])),Vi(ne("now-readouts"),a);let c=n.provenance?Kd(n.provenance.element_epoch,s):0,l=[];I.observer||l.push("Set your location to see where to look."),Math.abs(c)>3&&l.push(`These elements are ${Math.abs(c).toFixed(0)} days from the displayed time, so positions may be well off.`);for(let h of n.warnings??[])l.push(h.message);e.textContent=l.join(" "),e.className=`note${Math.abs(c)>3||n.warnings?.length?" is-warning":""}`}function f8(){let n=Sn(),e=n?.track?.samples,t=e?.length&&!n.lookStale&&I.time<=Date.parse(e.at(-1).time)?kc(e,I.time):null;ot?.setSightLine(!!(t&&t.elevation>0))}function p8(n){let e=fe("div","pass-summary");e.append(fe("strong","","Where are you?"),fe("span","","Set your location to see when this satellite passes overhead.")),n.append(e);let t=fe("button","text-button","Set location");t.type="button",t.style.marginTop="10px",t.addEventListener("click",Ar),n.append(t)}var fu="Brightness, weather and obstructions may prevent a sighting.";function i1(){return(I.plan?.visible??[]).find(e=>Date.parse(e.end.at)>Date.now())??null}function s1(){let{tonight:n}=I.plan,e=i1(),t=fe("div",`pass-summary${e?" is-visible":""}`);if(t.id="pass-summary",e){let i=Date.parse(e.start.at);t.append(fe("strong","",Date.now()>=i?"Viewing window now":`Viewing window ${Vc(i,Date.now())}`),fe("span","",`${Gi(i)}, up to ${Math.round(e.peak.elevation_deg)}\xB0 in the ${qn(e.peak.azimuth_deg)}.`),fe("span","pass-caveat",fu))}else n.dark_start?t.append(fe("strong","",`No viewing windows in the next ${el} hours`),fe("span","",`The next dark sky starts ${Gi(Date.parse(n.dark_start))}.`)):t.append(fe("strong","","No dark sky soon"),fe("span","","The Sun stays too high for the next 24 hours."));return t}function Jn(){let n=ne("passes-content");yu(n,()=>m8(n))}function m8(n){if(n.replaceChildren(),!Sn()){n.append(fe("p","note","Add a satellite to see its passes."));return}if(!I.observer){p8(n);return}if(I.planError&&!I.plan){n.append(fe("p","note is-error",I.planError));let a=fe("button","text-button","Try again");a.type="button",a.addEventListener("click",()=>Cr(!0)),n.append(a);return}if(!I.plan){n.append(fe("p","note","Calculating passes\u2026"));return}let{visible:t,passes:i}=I.plan;I.planError&&n.append(fe("p","note is-warning",`Could not update this list: ${I.planError}`));for(let a of I.plan.warnings??[])n.append(fe("p","note is-warning plan-warning",a.message));if(n.append(s1(),fe("h2","eyebrow section-title",`Next ${el} hours \xB7 ${Wc(I.utc)} time`)),!i.length){n.append(fe("p","note","No passes above your horizon in this period."));return}let s=Xd(i,t),r=I.clouds?.feed?.data??null;for(let a of s.slice(0,40)){let o=!!(I.activePass&&Bo(I.activePass.pass,a)),c=fe("button","pass-row");c.type="button",c.dataset.focus=`pass:${a.maximum_at}`,c.setAttribute("aria-pressed",String(o));let l=Date.parse(a.start),h=Date.parse(a.end),f=r?ef(r,Date.parse(a.maximum_at)):null,u=f===null?"":` \xB7 ${Math.round(f)}% cloud`;c.append(fe("span","pass-time",`${As(l,I.utc)} ${Es(l,I.utc).slice(0,5)}`),fe("span","pass-elevation",`${Math.round(a.maximum_elevation_deg)}\xB0`),fe("span","pass-detail",`${qn(a.start_azimuth_deg)} to ${qn(a.end_azimuth_deg)} \xB7 ${$d(h-l)}${u}`)),a.visible&&c.append(fe("span","badge","Window")),c.addEventListener("click",()=>y8(a)),n.append(c),o&&n.append(x8())}n.append(fe("p","note",r?"A viewing window means the satellite is sunlit, your sky is dark and it is at least 10\xB0 high. Brightness is not considered, so a faint satellite may not be seen.":"A viewing window means the satellite is sunlit, your sky is dark and it is at least 10\xB0 high. Weather and brightness are not considered, so a faint satellite may not be seen.")),jf&&n.append(g8())}function g8(){let{clouds:n}=I,e=fe("div","cloud-check"),t=fe("button","text-button",n?.loading?"Loading\u2026":n?.feed?"Check again":"Check clouds near me");return t.type="button",t.dataset.focus="check-clouds",t.addEventListener("click",_8),e.append(t,fe("p","note","Sends your location, rounded to about 10 km, to Open-Meteo.")),n?.error&&e.append(Yo(n.error)),n?.feed&&e.append(...mu(n.feed)),e}async function _8(){let n=I.observer;if(!n||I.clouds?.loading)return;let e={observer:n,loading:!0};I.clouds=e,Jn();try{let t=await Bt.cloudCover(n);if(I.clouds!==e)return;I.clouds={observer:n,feed:t}}catch(t){if(I.clouds!==e)return;I.clouds={observer:n,error:t}}Jn()}function x8(){let n=fe("div","sky"),{pass:e,points:t,error:i}=I.activePass;if(i)return n.append(fe("p","note is-error",i)),n;if(!t)return n.append(fe("p","note","Loading sky path\u2026")),n;let s=fe("div");mf(s,t,Sn()?.color??"#ebd193",e.visible);let r=fe("div","sky-actions"),a=fe("button","text-button","Show on globe");return a.type="button",a.dataset.focus="show-on-globe",a.addEventListener("click",()=>{M8(Date.parse(e.maximum_at)),document.querySelector(".viewport").scrollIntoView({block:"nearest"})}),r.append(a),n.append(s,r),n}async function y8(n){if(I.activePass&&Bo(I.activePass.pass,n)){I.activePass=null,Jn();return}I.activePass={pass:n,points:null},Jn();let e=I.selected;try{let t=await Bt.look(e,I.observer,n.start,n.end);I.activePass?.pass===n&&I.selected===e&&(I.activePass.points=t.data.points,Jn())}catch(t){if(un(t)||I.activePass?.pass!==n)return;I.activePass.error=Yn(t.message),Jn()}}async function Cr(n=!1){let e=I.selected;if(!e||!I.observer){jo();return}let t=`${e}|${I.observer.lat}|${I.observer.lon}|${I.observer.alt}`;if(!(!n&&I.planFor===t&&Date.now()-I.planAt<r8)){I.planFor=t,I.planAt=Date.now(),I.planError=null;try{let i=Bt.passes(e,I.observer,Date.now());i.catch(()=>{});let s=await Bt.tonight(e,I.observer,Date.now()),r=[...s.data.passes],a=[s],o=s.data,c=Date.now()+el*36e5;for(;o.dark_end&&!o.dark_end_clipped&&Date.parse(o.dark_end)<c;){let h=await Bt.tonight(e,I.observer,o.dark_end);if(I.planFor!==t)return;r.push(...h.data.passes),a.push(h),o=h.data}let l=await i;if(I.planFor!==t)return;I.plan={tonight:s.data,visible:r,passes:l.data.passes,warnings:Wd([l,...a])},I.activePass&&!I.plan.passes.some(h=>Bo(I.activePass.pass,h))&&(I.activePass=null)}catch(i){if(un(i)||I.planFor!==t)return;I.planError=Yn(i.message)}Jn(),jo()}}async function r1(){let n=I.selected;if(!n){pu();return}try{let e=await Bt.report(n);if(I.selected!==n)return;I.report=e}catch(e){if(un(e)||I.selected!==n)return;I.report={error:Yn(e.message)}}pu()}var Yf=0;function v8(n){let e=ne("orbit-why-lessons"),t=++Yf;e.replaceChildren(),e.hidden=!0,!(!n||!Ai)&&Ai.forOrbit(n).then(i=>{t!==Yf||!i.length||(e.replaceChildren(...i.map(s=>{let r=fe("button","text-button data-view",`Lesson: ${s.title}`);return r.type="button",r.addEventListener("click",()=>wr(s.id)),r})),e.hidden=!1)})}function b8(n){let e=ne("orbit-why"),t=rf(n);e.hidden=!t,v8(t?n:null),t&&(ne("orbit-why-chips").replaceChildren(...t.chips.map(i=>fe("li","why-chip",i))),ne("orbit-why-list").replaceChildren(...t.items.map(i=>{let s=fe("li","",i.text);if(i.estimate){let r=fe("span","why-estimate","estimate");r.setAttribute("aria-describedby","orbit-why-legend"),s.append(" ",r)}return Zn(fe,s,i.sources),s})))}function pu(){let n=ne("orbit-readouts"),e=ne("orbit-note"),t=ne("orbit-links");if(t.replaceChildren(),e.textContent="",e.className="note",b8(I.report?.data?.orbit?.explanation),!I.selected){Vi(n,[]),e.textContent="Add a satellite to see its orbit.";return}if(I.report?.error){Vi(n,[]),e.textContent=I.report.error,e.className="note is-error";return}if(!I.report){Vi(n,[]),e.textContent="Loading\u2026";return}let{data:i,provenance:s}=I.report,r=i.orbit;Vi(n,[["Class (estimate)",r.orbit_class_estimate],["Period",`${r.period_minutes.toFixed(1)} min`],["Inclination",`${r.inclination_deg.toFixed(2)}\xB0`],["Apogee",`${r.apogee_km.toFixed(0)} km`],["Perigee",`${r.perigee_km.toFixed(0)} km`],["Eccentricity",r.eccentricity.toFixed(5)],["Element epoch",Gi(Date.parse(s.element_epoch))],["Data source",`${s.source} (${s.cache_status})`]]),e.textContent="Apogee and perigee are two-body estimates.";let a=fe("a","","Download JSON report");if(a.href=`/api/v1/report?norad_id=${encodeURIComponent(I.selected)}`,a.download=`khonsu-${I.selected}.json`,t.append(a),i.map_url){let o=fe("a","","Current position on a map");o.href=i.map_url,o.target="_blank",o.rel="noopener noreferrer",t.append(o)}}function Rr(){let n=Sn();ne("selected-name").textContent=n?.name??"No satellite",ne("selected-id").textContent=n?`NORAD ${n.id}`:"",ne("selected-swatch").style.setProperty("--color",n?.color??"transparent"),document.title=n?`${n.name} \xB7 Khonsu`:"Khonsu",Mu(),Jn(),pu(),jo()}function jo(){let n=ne("headline");n.replaceChildren();let e=Sn();if(!e)return;if(e.loading&&!e.track){n.append(fe("p","headline-title",e.name),fe("p","headline-main","Fetching its orbit\u2026"),fe("p","headline-sub","The first request can take a few seconds. After that it is saved."));return}if(!I.observer){n.append(fe("p","headline-title","See it yourself"),fe("p","headline-main","When can you see it?"));let i=fe("button","text-button","Set your location");i.type="button",i.dataset.focus="headline-location",i.addEventListener("click",Ar),n.append(i);return}if(!I.plan)return;let t=i1();if(t){let i=Date.parse(t.start.at),s=Date.now()>=i;n.append(fe("p","headline-title",`${s?"Viewing window now":"Next viewing window"} \xB7 ${e.name}`),fe("p","headline-main",`${Gi(i).slice(0,-3)}${s?"":` \xB7 ${Vc(i,Date.now())}`}`),fe("p","headline-sub",`Up to ${Math.round(t.peak.elevation_deg)}\xB0 in the ${qn(t.peak.azimuth_deg)}, starting in the ${qn(t.start.azimuth_deg)}.`),fe("p","headline-sub plan-warning",[fu,...(I.plan.warnings??[]).map(r=>r.message)].join(" ")));return}n.append(fe("p","headline-title",e.name),fe("p","headline-main",I.plan.tonight.dark_start?`No viewing windows in the next ${el} hours`:"No dark sky soon")),n.append(fe("p","headline-sub plan-warning",[fu,...(I.plan.warnings??[]).map(i=>i.message)].join(" ")))}function nl(){let n=ne("data-status"),e=Sn();if(n.classList.remove("is-warning"),!e?.provenance){n.textContent="";return}let{provenance:t}=e;if(t.cache_status==="stale"){n.textContent=e.warnings?.[0]?.message??"Showing saved elements.",n.classList.add("is-warning");return}n.textContent=t.source==="file"?"Using elements from a local file. No provider requests are made.":`Satellite data from CelesTrak, epoch ${Gi(Date.parse(t.element_epoch))}.`}function a1(){ne("observer-open").classList.toggle("is-set",!!I.observer),ne("observer-label").textContent=I.observer?`${Gc(I.observer.lat,"N","S")}, ${Gc(I.observer.lon,"E","W")}`:"Set location"}function wu(){let n=ne("time-slider");n.max=String(Math.round((I.window.end-I.window.start)/1e3)),ne("time-start").textContent=`${As(I.window.start,I.utc)} ${Es(I.window.start,I.utc).slice(0,5)}`,ne("time-end").textContent=`${As(I.window.end,I.utc)} ${Es(I.window.end,I.utc).slice(0,5)}`}function Is(n){I.live=n;let e=ne("live-button");e.classList.toggle("is-live",n),e.setAttribute("aria-pressed",String(n)),n&&(Ti(!1),qc(I.window,Date.now())&&Su(Date.now()))}function Ti(n){I.playing=n;let e=ne("play-button");e.textContent=n?"\u275A\u275A":"\u25B6";let t=n?"Pause timeline":"Play timeline";e.setAttribute("aria-label",t),e.title=t}var $o=null;function S8(n){let e=ne("speed-select");if(n==null){if($o){let t=$o;$o=null,e.value=t.speed,Is(t.live),Ti(t.playing)}return}$o??($o={live:I.live,playing:I.playing,speed:e.value}),[...e.options].some(t=>Number(t.value)===n)&&(e.value=String(n)),Is(!1),I.time>=I.window.end&&(I.time=I.window.start),Ti(!0)}function M8(n){if(Is(!1),Ti(!1),I.time=n,n<I.window.start||n>I.window.end){let e=Sn();e&&(e.framePending=!0),Su(n)}else ot?.update(I.time),ot?.home();Er()}function Er(){let n=ne("time-slider"),e=Math.round((I.time-I.window.start)/1e3);(document.activeElement!==n||I.live||I.playing)&&(n.value=String(e));let t=`${Gi(I.time)} ${I.utc?"UTC":""}`.trim();n.setAttribute("aria-valuetext",t),ne("time-current").textContent=t}function w8(){let n=ne("sat-label"),e=ot?.selectedScreenPosition(),t=Sn();if(!e||!t?.track){n.hidden=!0;return}n.hidden=!1,n.textContent=t.name,n.classList.toggle("is-left",e.x>ne("scene").clientWidth/2),n.style.left=`${e.x}px`,n.style.top=`${e.y}px`}function T8(){if(uu.tick(),!I.plan)return;ne("headline").contains(document.activeElement)||jo(),ne("pass-summary")?.replaceWith(s1())}function o1(n,e){let t=e?Math.min(n-e,1e3):0;I.live?(I.time=Date.now(),qc(I.window,I.time)&&Su(I.time)):I.playing&&(I.time+=t*Number(ne("speed-select").value),I.time>=I.window.end&&(I.time=I.window.end,Ti(!1)));try{ot&&(ot.update(I.time),f8(),ot.render(t/1e3),w8()),n-Vf>250&&(Vf=n,Er(),I.tab==="now"&&Mu()),n-Gf>l8&&(Gf=n,T8())}catch(i){Hf||console.error(i),Hf=!0}requestAnimationFrame(i=>o1(i,n))}function Zf(n){I.observer=n,n?Ei.setItem("khonsu.observer",JSON.stringify(n)):Ei.removeItem("khonsu.observer"),ot?.setObserver(n);for(let e of I.tracked.values())e.lookStale=!0;I.plan=null,I.planFor=null,I.planError=null,I.activePass=null,I.clouds=null,a1(),n1(),Rr(),Cr(!0)}function Ar(){Qo(!1),ne("observer-lat").value=I.observer?.lat??"",ne("observer-lon").value=I.observer?.lon??"",ne("observer-alt").value=I.observer?.alt||"",ne("observer-error").textContent="",ne("observer-dialog").showModal()}function Qo(n){ne("pick-hint").hidden=!n,ne("headline").hidden=n||!ne("lesson-card").hidden,ot?.setPicking(n)}var qo=0;function mu(n){let e=[n.source.credit,n.source.nature,`updated ${Hc(n.fetched_at,Date.now())}`];n.stale&&e.push("saved copy");let t=fe("p","data-credit",e.join(" \xB7 "));return n.warning?[t,fe("p","note is-warning",n.warning)]:[t]}function Yo(n){return fe("p","note is-warning",Yn(n.message||"")||"This source could not be reached.")}function Kf(n){let e=Date.parse(n);return`${As(e,I.utc)} ${Es(e,I.utc).slice(0,5)} ${Wc(I.utc)}`}function E8(n){ne("data-categories").replaceChildren(...n.map(e=>{let t=fe("section","data-category");t.append(fe("h3",null,e.title),fe("p","note",e.description)),e.id==="earth-imagery"&&t.append(fe("p","note","Choose pictures with the Layers button on the globe."));for(let i of e.sources){let s=fe("div","data-source"),r=fe("a",null,i.name);r.href=i.url,r.target="_blank",r.rel="noreferrer";let a=i.status==="live";s.append(r,fe("span",`data-status${a?" is-live":""}`,a?"Live":"Needs account"),fe("p","note",`${i.summary} ${i.refresh}.`)),t.append(s)}return t}))}async function A8(){try{return await Cs}catch{return Cs=Bt.sources(),Cs}}async function C8(){let n=++qo,e=ne("data-status-note");e.textContent="",e.classList.remove("is-warning"),ne("data-dialog").showModal();let t;try{t=await A8()}catch(i){n===qo&&i.name!=="AbortError"&&(e.textContent=i.message,e.classList.add("is-warning"));return}n===qo&&(E8(t.categories),t.live_data||(e.textContent="Live data is off while serving a local file, so no provider requests are made."))}function R8(){let n=ne("layers-open"),e=ne("layers-panel"),t=i=>{e.hidden=!i,n.setAttribute("aria-expanded",String(i))};n.addEventListener("click",()=>t(e.hidden)),document.addEventListener("keydown",i=>{i.key!=="Escape"||i.defaultPrevented||e.hidden||!ne("sky-popover").hidden||document.querySelector("dialog[open]")||(i.preventDefault(),t(!1),n.focus())})}function P8(n,{frame:e=!1}={}){let t=$n(n),i=Rs(t,void 0,{frame:e});if(i&&e){let s=I.tracked.get(t);s.track?ot?.home(t):s.framePending=!0}return i}function I8(n,e,t=null){ot&&(ot.face(n,e,t),Tu(!1))}function il(){let n=!ne("lesson-card").hidden;Yt==="lesson"&&!n&&(Yt="catalog"),ne("catalog-panel").hidden=Yt!=="catalog",ne("learn-panel").hidden=Yt!=="learn",ne("lesson-panel").hidden=Yt!=="lesson",ne("lesson-resume").hidden=!n||Yt==="lesson",ne("learn-open").setAttribute("aria-pressed",String(Yt==="learn"))}function gu(n){Yt=n?"learn":ne("lesson-card").hidden?"catalog":"lesson",il(),n&&(_u.render(),window.matchMedia("(max-width: 1040px)").matches&&(ne("learn-title")?.focus({preventScroll:!0}),ne("learn-panel").scrollIntoView({block:"start",behavior:"instant"})))}function l1(){Yt="lesson",il(),ne("lesson-title")?.focus({preventScroll:!0}),window.matchMedia("(max-width: 1040px)").matches&&document.querySelector(".viewport").scrollIntoView({block:"start",behavior:"instant"})}async function wr(n,e=0){Yt!=="lesson"&&(Qf=Yt),await Ai.start(n,e),ne("lesson-card").hidden||l1()}function L8(){let n=!ne("lesson-card").hidden;ne("headline").hidden=n||!ne("pick-hint").hidden,Yt=n?"lesson":Qf,il(),!n&&Yt==="learn"&&_u.render(),bu()}function D8(){ne("learn-open").addEventListener("click",()=>gu(ne("learn-panel").hidden)),ne("lesson-resume").addEventListener("click",l1),document.addEventListener("keydown",n=>{n.key!=="Escape"||n.defaultPrevented||n.isComposing||document.querySelector("dialog[open]")||["pick-hint","layers-panel","sky-popover","group-popover"].some(e=>!ne(e).hidden&&!ne(e).closest("[hidden]"))||(Yt==="learn"?(n.preventDefault(),gu(!1),ne("learn-open").focus()):ne("lesson-card").hidden||(n.preventDefault(),Ai.stop()))})}function N8(){let n=ne("data-dialog");ne("data-open").addEventListener("click",C8),ne("data-close").addEventListener("click",()=>n.close()),n.addEventListener("close",()=>{qo+=1,ne("data-open").focus()})}function F8(){let n=ne("observer-dialog");ne("observer-open").addEventListener("click",Ar),ne("observer-cancel").addEventListener("click",()=>n.close()),n.addEventListener("close",()=>{(!document.activeElement||document.activeElement===document.body)&&ne("observer-open").focus()}),ne("observer-clear").addEventListener("click",()=>{Zf(null),n.close()}),ne("observer-form").addEventListener("submit",t=>{t.preventDefault();let i=Bc({lat:ne("observer-lat").value,lon:ne("observer-lon").value,alt:ne("observer-alt").value});if(i.error){ne("observer-error").textContent=i.error;return}Zf(i.observer),n.close()}),ne("observer-locate").addEventListener("click",()=>{let t=ne("observer-error");if(!navigator.geolocation){t.textContent="This browser cannot share a location. Enter it instead.";return}t.textContent="",navigator.geolocation.getCurrentPosition(({coords:i})=>{ne("observer-lat").value=i.latitude.toFixed(4),ne("observer-lon").value=i.longitude.toFixed(4)},()=>{t.textContent="The browser did not share a location. Enter it instead."},{timeout:1e4})});let e=ne("observer-pick");e.addEventListener("click",()=>{n.close(),Qo(!0)}),ot||(e.disabled=!0),document.addEventListener("keydown",t=>{t.key==="Escape"&&!ne("pick-hint").hidden&&(t.preventDefault(),Qo(!1),setTimeout(Ar))})}function Zo(n,e=!1){I.tab=n;for(let t of hu){let i=ne(`tab-${t}`),s=t===n;i.setAttribute("aria-selected",String(s)),i.tabIndex=s?0:-1,ne(`panel-${t}`).hidden=!s,s&&e&&i.focus()}n==="passes"&&Cr(),n==="orbit"&&r1(),n==="data"&&Ko.render();for(let t of xu())Ls.open(t)}function U8(){for(let n of hu){let e=ne(`tab-${n}`);e.addEventListener("click",()=>Zo(n)),e.addEventListener("keydown",t=>{let i=hu.filter(r=>!ne(`tab-${r}`).hidden),s=i.indexOf(n);t.key==="ArrowRight"&&Zo(i[(s+1)%i.length],!0),t.key==="ArrowLeft"&&Zo(i[(s+i.length-1)%i.length],!0)})}}function O8(){ne("live-button").addEventListener("click",()=>Is(!0)),ne("play-button").addEventListener("click",()=>{if(I.playing){Ti(!1);return}I.live&&Is(!1),I.time>=I.window.end&&(I.time=I.window.start),Ti(!0)}),ne("time-slider").addEventListener("input",i=>{Is(!1),Ti(!1),I.time=I.window.start+Number(i.target.value)*1e3,Er(),Mu()});let n=ne("zone-toggle"),e=()=>{n.textContent=I.utc?"UTC":"Local time",n.setAttribute("aria-pressed",String(I.utc))};e(),n.addEventListener("click",()=>{I.utc=!I.utc,Ei.setItem("khonsu.utc",I.utc?"1":"0"),e(),wu(),Er(),Rr(),nl(),xu().includes("sees")&&Ls.open("sees")}),Jo=bf({element:fe,button:ne("group-button"),popover:ne("group-popover"),input:ne("group-search"),list:ne("group-options"),onChoose(i){ne("filter-input").value="",du(i)}}),ne("filter-input").addEventListener("input",()=>{if(I.isSearchResult){du(Jo.current());return}jn()}),ne("camera-home").addEventListener("click",()=>ot?.home()),ne("zoom-in").addEventListener("click",()=>ot?.zoom(.8)),ne("zoom-out").addEventListener("click",()=>ot?.zoom(1.25));let t=ne("camera-follow");t.addEventListener("click",()=>Tu(t.getAttribute("aria-pressed")!=="true"))}function Tu(n){ne("camera-follow").setAttribute("aria-pressed",String(n)),ot?.setFollowing(n)}function B8(n){ot&&(ot.showPoint(n.lat,n.lon),Tu(!1))}function k8(){ot?.clearPoint()}function Jf(n){let e=ne("scene-error");e.hidden=!1,e.textContent=n}function z8(n){let e=n.categories.flatMap(t=>t.sources);return{liveData:n.live_data,spaceTrackReady:e.some(t=>t.id==="space-track"&&t.status==="live"),imagingIds:new Set(n.imaging_satellites??[])}}async function V8(){Cs=Bt.sources(),Ho=Cs.then(z8).catch(()=>null),lu=Cs.then(s=>({liveData:s.live_data,layers:s.imagery_layers})).catch(()=>null),Ho.then(s=>{jf=s?.liveData!==!1,Jn()}),Ls=_f({api:Bt,element:fe,feedCredit:mu,dataFailure:Yo,dataTime:Kf,selectedEntry:Sn,catalog:Ho,panels:{identity:ne("panel-identity"),radio:ne("panel-radio"),sees:ne("panel-sees")},focusScene:B8,clearScene:k8});for(let s of Object.keys(e1))ne(`section-${s}`).addEventListener("toggle",r=>{r.target.open&&Ls.open(s)});let n=vf({root:document.querySelector(".app"),handles:{catalog:ne("resize-catalog"),inspector:ne("resize-inspector")},storage:Ei});window.addEventListener("resize",()=>n.fit()),Ai=If({api:Bt,element:fe,card:ne("lesson-card"),list:fe("div"),layers:()=>Xo,showSatellite:P8,face:I8,openTab:s=>{I.tab!==s&&Zo(s)},play:S8,status:ne("lesson-status"),fallbackFocus:()=>ne("learn-open"),browseSatellites(){Yt="catalog",il(),ne("catalog-title").focus()},onChange:L8}),_u=Bf({api:Bt,element:fe,panel:ne("learn-panel"),layers:()=>Xo,imageryCatalog:lu,showSatellite:s=>Rs(s),startLesson:wr,startStory:wr,onClose:()=>{gu(!1),ne("learn-open").focus()}}),Ko=xf({api:Bt,element:fe,panel:ne("data-measures"),selectedEntry:Sn,dataFailure:Yo,layers:()=>Xo,startLesson:wr});try{ot=cf(ne("scene"),{onPick(s){Qo(!1),Ar(),ne("observer-lat").value=s.lat.toFixed(4),ne("observer-lon").value=s.lon.toFixed(4)},onSelect:s=>Ds(s)}),ot.setObserver(I.observer),ot.onContextChange(()=>Jf("The graphics context was lost. The globe will return if the browser restores it. Reload if it does not. The readouts still work."),()=>{ne("scene-error").hidden=!0})}catch(s){ot=null,console.error(s),Jf("3D rendering is unavailable, so the globe is hidden. Enable WebGL in your browser and reload. Satellite details and passes still work.");for(let r of["camera-follow","camera-home","zoom-in","zoom-out"])ne(r).disabled=!0}let e=pf({element:fe,panel:ne("layers-panel"),credit:ne("imagery-credit"),catalog:lu,storage:Ei,globe:ot,dataAge:Hc});Xo=e,e.start().then(()=>{I.tab==="data"&&Ko.render(),Wo&&wr(Wo.id,Wo.step)}),uu=zf({api:Bt,element:fe,feedCredit:mu,dataFailure:Yo,dataTime:Kf,catalog:Ho,chips:ne("sky-chips"),popover:ne("sky-popover"),onKp:s=>e.setKp(s)}),uu.start(),U8(),O8(),F8(),N8(),D8(),R8(),a1(),wu(),Tr(),Rr(),Er(),requestAnimationFrame(s=>o1(s,0)),setInterval(()=>Cr(),6e4);let t=Ud(location.search),i=h8();if(t.ids.length){await Promise.race([i,new Promise(s=>setTimeout(s,c8))]);for(let s of t.ids)Rs(s,void 0,{selectIt:!1});Ds(t.selected)}if(await i,!t.ids.length&&!I.tracked.size&&!Wo){let s=I.items.find(r=>$n(r.norad_id)===a8)??I.items[0];s&&Rs(s.norad_id,s.name)}}V8();})();
