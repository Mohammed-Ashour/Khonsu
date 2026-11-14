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
(()=>{function Sh(n=globalThis.fetch?.bind(globalThis)){let t=new Map;async function e(r,a={},o=null){let c=new URLSearchParams;for(let[f,u]of Object.entries(a))u!=null&&c.set(f,u);let l=c.size?`${r}?${c}`:r,h=new AbortController;o&&(t.get(o)?.abort(),t.set(o,h));try{let f=await n(l,{signal:h.signal}),u=await f.text(),m=null;try{m=JSON.parse(u)}catch{}if(!f.ok){let _=u.trim(),v=_.length<200&&!_.startsWith("<")?_:"";throw new Tr(m?.error?.message||v||`Request failed (${f.status}).`,f.status)}if(m===null)throw new Tr("The server returned an unreadable response.",f.status);return m}finally{o&&t.get(o)===h&&t.delete(o)}}let i=r=>new Date(r).toISOString().replace(/\.\d+Z$/,"Z"),s=r=>r?{lat:r.lat,lon:r.lon,alt:r.alt}:{};return{groups:()=>e("/api/satellite-groups"),satellites:r=>e("/api/satellites",{group:r},"satellites"),search:r=>e("/api/v1/search",{q:r},"satellites"),track:(r,a,o)=>e("/api/v1/track",{norad_id:r,start:i(a),duration:"25h",step:"60s",...s(o)},`track:${r}`),report:r=>e("/api/v1/report",{norad_id:r},"report"),passes:(r,a,o)=>e("/api/v1/passes",{norad_id:r,start:i(o),duration:"48h",step:"30s",...s(a)},"passes"),tonight:(r,a,o)=>e("/api/v1/tonight",{norad_id:r,time:typeof o=="number"?i(o):o,...s(a)},"tonight"),sources:()=>e("/api/v1/sources",{},"sources"),spaceWeather:()=>e("/api/v1/space-weather",{},"space-weather"),launches:()=>e("/api/v1/launches",{},"launches"),satelliteDetails:r=>e("/api/v1/satellite-details",{norad_id:r},"satellite-details"),transmitters:r=>e("/api/v1/transmitters",{norad_id:r},"transmitters"),spaceWeatherHistory:()=>e("/api/v1/space-weather-history",{},"space-weather-history"),spaceEvents:()=>e("/api/v1/space-events",{},"space-events"),catalogRecord:r=>e("/api/v1/catalog-record",{norad_id:r},"catalog-record"),spaceTrack:r=>e("/api/v1/space-track",{norad_id:r},"space-track"),seaIce:(r,a)=>e("/api/v1/sea-ice",{hemisphere:r,month:a},`sea-ice:${r}:${a}`),seaLevel:()=>e("/api/v1/sea-level",{},"sea-level"),learn:()=>e("/api/v1/learn",{},"learn"),lessons:()=>e("/api/v1/lessons",{},"lessons"),satelliteData:r=>e("/api/v1/satellite-data",{norad_id:r},"satellite-data"),recentScenes:r=>e("/api/v1/recent-scenes",{norad_id:r},"recent-scenes"),cloudCover:r=>e("/api/v1/cloud-cover",{lat:r.lat,lon:r.lon},"cloud-cover"),look:(r,a,o,c)=>e("/api/v1/look",{norad_id:r,start:o,end:c,samples:64,...s(a)},"look")}}var Tr=class extends Error{constructor(t,e){super(t),this.status=e}},ln=n=>n?.name==="AbortError";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qh=0,Tl=1,tu=2;var rr=1,eu=2,ps=3,pi=0,Ue=1,An=2,Cn=0,ms=1,Al=2,Cl=3,Rl=4,nu=5;var Ri=100,iu=101,su=102,ru=103,au=104,ou=200,lu=201,cu=202,hu=203,Pl=204,Il=205,uu=206,du=207,fu=208,pu=209,mu=210,gu=211,_u=212,xu=213,yu=214,jr=0,Qr=1,ta=2,si=3,ea=4,na=5,ia=6,sa=7,La=0,vu=1,bu=2,mn=0,Ll=1,Dl=2,Nl=3,Fl=4,Ul=5,Ol=6,Bl=7;var kl=300,mi=301,Pi=302,Da=303,Na=304,ar=306,ra=1e3,Mn=1001,aa=1002,Ie=1003,Su=1004;var or=1005;var De=1006,Fa=1007;var gi=1008;var Ye=1009,zl=1010,Vl=1011,gs=1012,Ua=1013,gn=1014,_n=1015,xn=1016,Oa=1017,Ba=1018,_s=1020,Gl=35902,Hl=35899,Wl=1021,Xl=1022,an=1023,wn=1026,_i=1027,$l=1028,ka=1029,xi=1030,za=1031;var Va=1033,lr=33776,cr=33777,hr=33778,ur=33779,Ga=35840,Ha=35841,Wa=35842,Xa=35843,$a=36196,qa=37492,Ya=37496,Za=37488,Ka=37489,dr=37490,Ja=37491,ja=37808,Qa=37809,to=37810,eo=37811,no=37812,io=37813,so=37814,ro=37815,ao=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,fo=36492,po=36494,mo=36495,go=36283,_o=36284,fr=36285,xo=36286;var Os=2300,oa=2301,Kr=2302,_l=2303,xl=2400,yl=2401,vl=2402;var Mu=3200;var yo=0,wu=1,Gn="",Xe="srgb",Bs="srgb-linear",ks="linear",oe="srgb";var Jr=7680;var Eu=519,Tu=512,Au=513,Cu=514,vo=515,Ru=516,Pu=517,bo=518,Iu=519,Lu=35044;var ql="300 es",dn=2e3,ns=2001;function Jf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function jf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Du(){let n=zs("canvas");return n.style.display="block",n}var Mh={},is=null;function Yl(...n){let t="THREE."+n.shift();is?is("log",t,...n):console.log(t,...n)}function Nu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Nu(n);let t="THREE."+n.shift();if(is)is("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Xt(...n){n=Nu(n);let t="THREE."+n.shift();if(is)is("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ci(...n){let t=n.join(" ");t in Mh||(Mh[t]=!0,zt(...n))}function Fu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Uu={[jr]:Qr,[ta]:ia,[ea]:sa,[si]:na,[Qr]:jr,[ia]:ta,[sa]:ea,[na]:si},fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=1234567,Fs=Math.PI/180,ss=180/Math.PI;function xs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function Zl(n,t){return(n%t+t)%t}function Qf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function t1(n,t,e){return n!==t?(e-n)/(t-n):0}function Us(n,t,e){return(1-e)*n+e*t}function e1(n,t,e,i){return Us(n,t,1-Math.exp(-e*i))}function n1(n,t=1){return t-Math.abs(Zl(n,t*2)-t)}function i1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function s1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function r1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function a1(n,t){return n+Math.random()*(t-n)}function o1(n){return n*(.5-Math.random())}function l1(n){n!==void 0&&(wh=n);let t=wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function c1(n){return n*Fs}function h1(n){return n*ss}function u1(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function d1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function f1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function p1(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),u=a((t-i)/2),m=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*f,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*m,o*h,o*l);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ts(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function We(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kl={DEG2RAD:Fs,RAD2DEG:ss,generateUUID:xs,clamp:te,euclideanModulo:Zl,mapLinear:Qf,inverseLerp:t1,lerp:Us,damp:e1,pingpong:n1,smoothstep:i1,smootherstep:s1,randInt:r1,randFloat:a1,randFloatSpread:o1,seededRandom:l1,degToRad:c1,radToDeg:h1,isPowerOfTwo:u1,ceilPowerOfTwo:d1,floorPowerOfTwo:f1,setQuaternionFromProperEuler:p1,normalize:We,denormalize:ts},ec=class ec{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ec.prototype.isVector2=!0;var $t=ec,tn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(f!==v||c!==u||l!==m||h!==_){let p=c*u+l*m+h*_+f*v;p<0&&(u=-u,m=-m,_=-_,v=-v,p=-p);let d=1-o;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);d=Math.sin(d*M)/A,o=Math.sin(o*M)/A,c=c*d+u*o,l=l*d+m*o,h=h*d+_*o,f=f*d+v*o}else{c=c*d+u*o,l=l*d+m*o,h=h*d+_*o,f=f*d+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*f+c*m-l*u,t[e+1]=c*_+h*u+l*f-o*m,t[e+2]=l*_+h*m+o*u-c*f,t[e+3]=h*_-o*f-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*m*_,this._y=l*m*f-u*h*_,this._z=l*h*_+u*m*f,this._w=l*h*f-u*m*_;break;case"YXZ":this._x=u*h*f+l*m*_,this._y=l*m*f-u*h*_,this._z=l*h*_-u*m*f,this._w=l*h*f+u*m*_;break;case"ZXY":this._x=u*h*f-l*m*_,this._y=l*m*f+u*h*_,this._z=l*h*_+u*m*f,this._w=l*h*f-u*m*_;break;case"ZYX":this._x=u*h*f-l*m*_,this._y=l*m*f+u*h*_,this._z=l*h*_-u*m*f,this._w=l*h*f+u*m*_;break;case"YZX":this._x=u*h*f+l*m*_,this._y=l*m*f+u*h*_,this._z=l*h*_-u*m*f,this._w=l*h*f-u*m*_;break;case"XZY":this._x=u*h*f-l*m*_,this._y=l*m*f-u*h*_,this._z=l*h*_+u*m*f,this._w=l*h*f+u*m*_;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>f){let m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-i-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nc=class nc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nc.prototype.isVector3=!0;var $=nc,Zo=new $,Eh=new tn,ic=class ic{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],m=i[5],_=i[8],v=s[0],p=s[3],d=s[6],M=s[1],A=s[4],b=s[7],w=s[2],S=s[5],R=s[8];return r[0]=a*v+o*M+c*w,r[3]=a*p+o*A+c*S,r[6]=a*d+o*b+c*R,r[1]=l*v+h*M+f*w,r[4]=l*p+h*A+f*S,r[7]=l*d+h*b+f*R,r[2]=u*v+m*M+_*w,r[5]=u*p+m*A+_*S,r[8]=u*d+m*b+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,m=l*r-a*c,_=e*f+i*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=f*v,t[1]=(s*l-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ic.prototype.isMatrix3=!0;var Yt=ic,Ko=new Yt,Th=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m1(){let n={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bs]:{primaries:t,whitePoint:i,transfer:ks,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}var ie=m1();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vi,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vi===void 0&&(Vi=zs("canvas")),Vi.width=t.width,Vi.height=t.height;let s=Vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Vi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bn(e[i]/255)*255):e[i]=Bn(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},g1=0,rs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jo(s[a].image)):r.push(Jo(s[a]))}else r=Jo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?la.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var _1=0,jo=new $,Ne=class n extends fn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Mn,s=Mn,r=De,a=gi,o=an,c=Ye,l=n.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=xs(),this.name="",this.source=new rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jo).x}get height(){return this.source.getSize(jo).y}get depth(){return this.source.getSize(jo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=kl;Ne.DEFAULT_ANISOTROPY=1;var sc=class sc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],_=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,b=(m+1)/2,w=(d+1)/2,S=(h+u)/4,R=(f+v)/4,x=(_+p)/4;return A>b&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=S/i,r=R/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=x/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-_)*(p-_)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sc.prototype.isVector4=!0;var ye=sc,ca=class extends fn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ne(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends ca{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Vs=class extends Ne{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends Ne{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ia=class Ia{constructor(t,e,i,s,r,a,o,c,l,h,f,u,m,_,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,f,u,m,_,v,p)}set(t,e,i,s,r,a,o,c,l,h,f,u,m,_,v,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*f,_=o*h,v=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+_*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=_+m*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,m=c*f,_=l*h,v=l*f;e[0]=u+v*o,e[4]=_*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,m=c*f,_=l*h,v=l*f;e[0]=u-v*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,m=a*f,_=o*h,v=o*f;e[0]=c*h,e[4]=_*l-m,e[8]=u*l+v,e[1]=c*f,e[5]=v*l+u,e[9]=m*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,m=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=v-u*f,e[8]=_*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*f+_,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*c,m=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+v,e[5]=a*h,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(x1,t,y1)}lookAt(t,e,i){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),jn.crossVectors(i,Je),jn.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),jn.crossVectors(i,Je)),jn.normalize(),Ar.crossVectors(Je,jn),s[0]=jn.x,s[4]=Ar.x,s[8]=Je.x,s[1]=jn.y,s[5]=Ar.y,s[9]=Je.y,s[2]=jn.z,s[6]=Ar.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],M=i[3],A=i[7],b=i[11],w=i[15],S=s[0],R=s[4],x=s[8],E=s[12],N=s[1],O=s[5],X=s[9],q=s[13],k=s[2],I=s[6],W=s[10],T=s[14],D=s[3],F=s[7],z=s[11],j=s[15];return r[0]=a*S+o*N+c*k+l*D,r[4]=a*R+o*O+c*I+l*F,r[8]=a*x+o*X+c*W+l*z,r[12]=a*E+o*q+c*T+l*j,r[1]=h*S+f*N+u*k+m*D,r[5]=h*R+f*O+u*I+m*F,r[9]=h*x+f*X+u*W+m*z,r[13]=h*E+f*q+u*T+m*j,r[2]=_*S+v*N+p*k+d*D,r[6]=_*R+v*O+p*I+d*F,r[10]=_*x+v*X+p*W+d*z,r[14]=_*E+v*q+p*T+d*j,r[3]=M*S+A*N+b*k+w*D,r[7]=M*R+A*O+b*I+w*F,r[11]=M*x+A*X+b*W+w*z,r[15]=M*E+A*q+b*T+w*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],m=t[14],_=t[3],v=t[7],p=t[11],d=t[15],M=c*m-l*u,A=o*m-l*f,b=o*u-c*f,w=a*m-l*h,S=a*u-c*h,R=a*f-o*h;return e*(v*M-p*A+d*b)-i*(_*M-p*w+d*S)+s*(_*A-v*w+d*R)-r*(_*b-v*S+p*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],m=t[11],_=t[12],v=t[13],p=t[14],d=t[15],M=e*o-i*a,A=e*c-s*a,b=e*l-r*a,w=i*c-s*o,S=i*l-r*o,R=s*l-r*c,x=h*v-f*_,E=h*p-u*_,N=h*d-m*_,O=f*p-u*v,X=f*d-m*v,q=u*d-m*p,k=M*q-A*X+b*O+w*N-S*E+R*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/k;return t[0]=(o*q-c*X+l*O)*I,t[1]=(s*X-i*q-r*O)*I,t[2]=(v*R-p*S+d*w)*I,t[3]=(u*S-f*R-m*w)*I,t[4]=(c*N-a*q-l*E)*I,t[5]=(e*q-s*N+r*E)*I,t[6]=(p*b-_*R-d*A)*I,t[7]=(h*R-u*b+m*A)*I,t[8]=(a*X-o*N+l*x)*I,t[9]=(i*N-e*X-r*x)*I,t[10]=(_*S-v*b+d*M)*I,t[11]=(f*b-h*S-m*M)*I,t[12]=(o*E-a*O-c*x)*I,t[13]=(e*O-i*E+s*x)*I,t[14]=(v*A-_*w-p*M)*I,t[15]=(h*w-f*A+u*M)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,m=r*h,_=r*f,v=a*h,p=a*f,d=o*f,M=c*l,A=c*h,b=c*f,w=i.x,S=i.y,R=i.z;return s[0]=(1-(v+d))*w,s[1]=(m+b)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(m-b)*S,s[5]=(1-(u+d))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(_+A)*R,s[9]=(p-M)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length(),o=Gi.set(s[4],s[5],s[6]).length(),c=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),cn.copy(this);let l=1/a,h=1/o,f=1/c;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,e.setFromRotationMatrix(cn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=dn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),m=(i+s)/(i-s),_,v;if(c)_=r/(a-r),v=a*r/(a-r);else if(o===dn)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ns)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=dn,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),m=-(i+s)/(i-s),_,v;if(c)_=1/(a-r),v=a/(a-r);else if(o===dn)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===ns)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ia.prototype.isMatrix4=!0;var me=Ia,Gi=new $,cn=new me,x1=new $(0,0,0),y1=new $(1,1,1),jn=new $,Ar=new $,Je=new $,Ch=new me,Rh=new tn,kn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ch,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},v1=0,Ph=new $,Hi=new tn,Ln=new me,Cr=new $,Ps=new $,b1=new $,S1=new tn,Ih=new $(1,0,0),Lh=new $(0,1,0),Dh=new $(0,0,1),Nh={type:"added"},M1={type:"removed"},Wi={type:"childadded",child:null},Qo={type:"childremoved",child:null},Fe=class n extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new kn,i=new tn,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Yt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Ph.copy(t).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cr.copy(t):Cr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ps,Cr,this.up):Ln.lookAt(Cr,Ps,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(M1),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,b1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,S1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new $(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},w1={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new On;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function tl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=Zl(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=tl(a,r,t+1/3),this.g=tl(a,r,t),this.b=tl(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=Ou[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ie.workingToColorSpace(ze.copy(this),t),Math.round(te(ze.r*255,0,255))*65536+Math.round(te(ze.g*255,0,255))*256+Math.round(te(ze.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(ze.copy(this),e);let i=ze.r,s=ze.g,r=ze.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Xe){ie.workingToColorSpace(ze.copy(this),t);let e=ze.r,i=ze.g,s=ze.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Rr);let i=Us(Qn.h,Rr.h,e),s=Us(Qn.s,Rr.s,e),r=Us(Qn.l,Rr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Qt;Qt.NAMES=Ou;var Gs=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},hn=new $,Dn=new $,el=new $,Nn=new $,Xi=new $,$i=new $,Fh=new $,nl=new $,il=new $,sl=new $,rl=new ye,al=new ye,ol=new ye,ii=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hn.subVectors(s,e),Dn.subVectors(i,e),el.subVectors(t,e);let a=hn.dot(hn),o=hn.dot(Dn),c=hn.dot(el),l=Dn.dot(Dn),h=Dn.dot(el),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return rl.setScalar(0),al.setScalar(0),ol.setScalar(0),rl.fromBufferAttribute(t,e),al.fromBufferAttribute(t,i),ol.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(rl,r.x),a.addScaledVector(al,r.y),a.addScaledVector(ol,r.z),a}static isFrontFacing(t,e,i,s){return hn.subVectors(i,e),Dn.subVectors(t,e),hn.cross(Dn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Xi.subVectors(s,i),$i.subVectors(r,i),nl.subVectors(t,i);let c=Xi.dot(nl),l=$i.dot(nl);if(c<=0&&l<=0)return e.copy(i);il.subVectors(t,s);let h=Xi.dot(il),f=$i.dot(il);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Xi,a);sl.subVectors(t,r);let m=Xi.dot(sl),_=$i.dot(sl);if(_>=0&&m<=_)return e.copy(r);let v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector($i,o);let p=h*_-m*f;if(p<=0&&f-h>=0&&m-_>=0)return Fh.subVectors(r,s),o=(f-h)/(f-h+(m-_)),e.copy(s).addScaledVector(Fh,o);let d=1/(p+v+u);return a=v*d,o=u*d,e.copy(i).addScaledVector(Xi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ri=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Ir.subVectors(this.max,Is),qi.subVectors(t.a,Is),Yi.subVectors(t.b,Is),Zi.subVectors(t.c,Is),ti.subVectors(Yi,qi),ei.subVectors(Zi,Yi),wi.subVectors(qi,Zi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-wi.z,wi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,wi.z,0,-wi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-wi.y,wi.x,0];return!ll(e,qi,Yi,Zi,Ir)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,qi,Yi,Zi,Ir))?!1:(Lr.crossVectors(ti,ei),e=[Lr.x,Lr.y,Lr.z],ll(e,qi,Yi,Zi,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fn=[new $,new $,new $,new $,new $,new $,new $,new $],un=new $,Pr=new ri,qi=new $,Yi=new $,Zi=new $,ti=new $,ei=new $,wi=new $,Is=new $,Ir=new $,Lr=new $,Ei=new $;function ll(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ei.fromArray(n,r);let o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),h=i.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Se=new $,Dr=new $t,E1=0,$e=class extends fn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ts(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hs=class extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ws=class extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Me=class extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}},T1=new ri,Ls=new $,cl=new $,ai=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):T1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(cl)),this.expandByPoint(Ls.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},A1=0,rn=new me,hl=new Fe,Ki=new $,je=new ri,Ds=new ri,Pe=new $,Ee=class n extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?Ws:Hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(je.min,Ds.min),je.expandByPoint(Pe),Pe.addVectors(je.max,Ds.max),je.expandByPoint(Pe)):(je.expandByPoint(Ds.min),je.expandByPoint(Ds.max))}je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(Ki.fromBufferAttribute(t,l),Pe.add(Ki)),s=Math.max(s,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $e(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new $,c[x]=new $;let l=new $,h=new $,f=new $,u=new $t,m=new $t,_=new $t,v=new $,p=new $;function d(x,E,N){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,N),u.fromBufferAttribute(r,x),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,N),h.sub(l),f.sub(l),m.sub(u),_.sub(u);let O=1/(m.x*_.y-_.x*m.y);isFinite(O)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(O),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(O),o[x].add(v),o[E].add(v),o[N].add(v),c[x].add(p),c[E].add(p),c[N].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,E=M.length;x<E;++x){let N=M[x],O=N.start,X=N.count;for(let q=O,k=O+X;q<k;q+=3)d(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let A=new $,b=new $,w=new $,S=new $;function R(x){w.fromBufferAttribute(s,x),S.copy(w);let E=o[x];A.copy(E),A.sub(w.multiplyScalar(w.dot(E))).normalize(),b.crossVectors(S,E);let O=b.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,O)}for(let x=0,E=M.length;x<E;++x){let N=M[x],O=N.start,X=N.count;for(let q=O,k=O+X;q<k;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new $,r=new $,a=new $,o=new $,c=new $,l=new $,h=new $,f=new $;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),m=0,_=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let d=0;d<h;d++)u[_++]=l[m++]}return new $e(u,h,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],m=t(u,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ul=new $,C1=new $,R1=new Yt,Qe=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ul.subVectors(i,e).cross(C1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ul),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||R1.getNormalMatrix(t),s=this.coplanarPoint(ul).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},P1=0,En=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=ms,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Qe().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $t().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Un=new $,dl=new $,Nr=new $,Fr=new $,zn=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),Fr.copy(this.origin).sub(dl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=Fr.dot(this.direction),c=-Fr.dot(Nr),l=Fr.lengthSq(),h=Math.abs(1-a*a),f,u,m,_;if(h>0)if(f=a*c-o,u=a*o-c,_=r*h,f>=0)if(u>=-_)if(u<=_){let v=1/h;f*=v,u*=v,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dl).addScaledVector(Nr,u),m}intersectSphere(t,e){if(t.radius<0)return null;Un.subVectors(t.center,this.origin);let i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,m=t.z-a.z,_=e.x-a.x,v=e.y-a.y,p=e.z-a.z,d=i.x-a.x,M=i.y-a.y,A=i.z-a.z,b=Math.abs(c),w=Math.abs(l),S=Math.abs(h),R,x,E,N,O,X,q,k,I,W,T,D;if(b>=w&&b>=S?(E=c,X=f,I=_,D=d,c>=0?(R=l,x=h,N=u,O=m,q=v,k=p,W=M,T=A):(R=h,x=l,N=m,O=u,q=p,k=v,W=A,T=M)):w>=S?(E=l,X=u,I=v,D=M,l>=0?(R=h,x=c,N=m,O=f,q=p,k=_,W=A,T=d):(R=c,x=h,N=f,O=m,q=_,k=p,W=d,T=A)):(E=h,X=m,I=p,D=A,h>=0?(R=c,x=l,N=f,O=u,q=_,k=v,W=d,T=M):(R=l,x=c,N=u,O=f,q=v,k=_,W=M,T=d)),E===0)return null;let F=R/E,z=x/E,j=1/E,dt=N-F*X,ut=O-z*X,Vt=q-F*I,Gt=k-z*I,kt=W-F*D,Q=T-z*D,rt=kt*Gt-Q*Vt,At=dt*Q-ut*kt,Ht=Vt*ut-Gt*dt;if(s){if(rt<0||At<0||Ht<0)return null}else if((rt<0||At<0||Ht<0)&&(rt>0||At>0||Ht>0))return null;let wt=rt+At+Ht;if(wt===0)return null;let Zt=j*(rt*X+At*I+Ht*D);return(wt>0?Zt<0:Zt>0)?null:this.at(Zt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Uh=new me,Ti=new zn,Ur=new ai,Oh=new $,Or=new $,Br=new $,kr=new $,fl=new $,zr=new $,Bh=new $,Vr=new $,Te=class extends Fe{constructor(t=new Ee,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(fl.fromBufferAttribute(f,t),a?zr.addScaledVector(fl,h):zr.addScaledVector(fl.sub(e),h))}e.add(zr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Ur.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Ur,Oh)===null||Ti.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Uh.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){let p=u[_],d=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,w=A;b<w;b+=3){let S=o.getX(b),R=o.getX(b+1),x=o.getX(b+2);s=Gr(this,d,t,i,l,h,f,S,R,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){let M=o.getX(p),A=o.getX(p+1),b=o.getX(p+2);s=Gr(this,a,t,i,l,h,f,M,A,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){let p=u[_],d=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,w=A;b<w;b+=3){let S=b,R=b+1,x=b+2;s=Gr(this,d,t,i,l,h,f,S,R,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){let M=p,A=p+1,b=p+2;s=Gr(this,a,t,i,l,h,f,M,A,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function I1(n,t,e,i,s,r,a,o){let c;if(t.side===Ue?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===pi,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:n}}function Gr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Or),n.getVertexPosition(c,Br),n.getVertexPosition(l,kr);let h=I1(n,t,e,i,Or,Br,kr,Bh);if(h){let f=new $;ii.getBarycoord(Bh,Or,Br,kr,f),s&&(h.uv=ii.getInterpolatedAttribute(s,o,c,l,f,new $t)),r&&(h.uv1=ii.getInterpolatedAttribute(r,o,c,l,f,new $t)),a&&(h.normal=ii.getInterpolatedAttribute(a,o,c,l,f,new $),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new $,materialIndex:0};ii.getNormal(Or,Br,kr,u.normal),h.face=u,h.barycoord=f}return h}var ua=class extends Ne{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Ie,h=Ie,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=new ai,L1=new $t(.5,.5),Hr=new $,ls=class{constructor(t=new Qe,e=new Qe,i=new Qe,s=new Qe,r=new Qe,a=new Qe){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=dn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],m=r[7],_=r[8],v=r[9],p=r[10],d=r[11],M=r[12],A=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,m-h,d-_,w-M).normalize(),s[1].setComponents(l+a,m+h,d+_,w+M).normalize(),s[2].setComponents(l+o,m+f,d+v,w+A).normalize(),s[3].setComponents(l-o,m-f,d-v,w-A).normalize(),i)s[4].setComponents(c,u,p,b).normalize(),s[5].setComponents(l-c,m-u,d-p,w-b).normalize();else if(s[4].setComponents(l-c,m-u,d-p,w-b).normalize(),e===dn)s[5].setComponents(l+c,m+u,d+p,w+b).normalize();else if(e===ns)s[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);let e=L1.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vn=class extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new $,fa=new $,kh=new me,Ns=new zn,Wr=new ai,pl=new $,zh=new $,oi=class extends Fe{constructor(t=new Ee,e=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new Me(i,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;kh.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=l){let d=h.getX(v),M=h.getX(v+1),A=Xr(this,t,Ns,c,d,M,v);A&&e.push(A)}if(this.isLineLoop){let v=h.getX(_-1),p=h.getX(m),d=Xr(this,t,Ns,c,v,p,_-1);d&&e.push(d)}}else{let m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=l){let d=Xr(this,t,Ns,c,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){let v=Xr(this,t,Ns,c,_-1,m,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xr(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,pl,zh)>i)return;pl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(pl);if(!(l<t.near||l>t.far))return{distance:l,point:zh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Vh=new $,Gh=new $,Xs=class extends oi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vh.fromBufferAttribute(e,s),Gh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vh.distanceTo(Gh);t.setAttribute("lineDistance",new Me(i,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var cs=class extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new me,bl=new zn,$r=new ai,qr=new $,$s=class extends Fe{constructor(t=new Ee,e=new cs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;Hh.copy(s).invert(),bl.copy(t.ray).applyMatrix4(Hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=u,v=m;_<v;_++){let p=l.getX(_);qr.fromBufferAttribute(f,p),Wh(qr,p,c,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=u,v=m;_<v;_++)qr.fromBufferAttribute(f,_),Wh(qr,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wh(n,t,e,i,s,r,a){let o=bl.distanceSqToPoint(n);if(o<e){let c=new $;bl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var qs=class extends Ne{constructor(t=[],e=mi,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ys=class extends Ne{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends Ne{constructor(t,e,i=gn,s,r,a,o=Ie,c=Ie,l,h=wn,f=1){if(h!==wn&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pa=class extends li{constructor(t,e=gn,i=mi,s,r,a=Ie,o=Ie,c,l=wn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zs=class extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hs=class n extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(f,2));function _(v,p,d,M,A,b,w,S,R,x,E){let N=b/R,O=w/x,X=b/2,q=w/2,k=S/2,I=R+1,W=x+1,T=0,D=0,F=new $;for(let z=0;z<W;z++){let j=z*O-q;for(let dt=0;dt<I;dt++){let ut=dt*N-X;F[v]=ut*M,F[p]=j*A,F[d]=k,l.push(F.x,F.y,F.z),F[v]=0,F[p]=0,F[d]=S>0?1:-1,h.push(F.x,F.y,F.z),f.push(dt/R),f.push(1-z/x),T+=1}}for(let z=0;z<x;z++)for(let j=0;j<R;j++){let dt=u+j+I*z,ut=u+j+I*(z+1),Vt=u+(j+1)+I*(z+1),Gt=u+(j+1)+I*z;c.push(dt,ut,Gt),c.push(ut,Vt,Gt),D+=6}o.addGroup(m,D,E),m+=D,u+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ks=class n extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,m=[],_=[],v=[],p=[];for(let d=0;d<h;d++){let M=d*u-a;for(let A=0;A<l;A++){let b=A*f-r;_.push(b,-M,0),v.push(0,0,1),p.push(A/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){let A=M+l*d,b=M+l*(d+1),w=M+1+l*(d+1),S=M+1+l*d;m.push(A,b,S),m.push(b,w,S)}this.setIndex(m),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var pn=class n extends Ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new $,u=new $,m=[],_=[],v=[],p=[];for(let d=0;d<=i;d++){let M=[],A=d/i,b=a+A*o,w=t*Math.cos(b),S=Math.sqrt(t*t-w*w),R=0;d===0&&a===0?R=.5/e:d===i&&c===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){let E=x/e,N=s+E*r;f.x=-S*Math.cos(N),f.y=w,f.z=S*Math.sin(N),_.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(E+R,1-A),M.push(l++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){let A=h[d][M+1],b=h[d][M],w=h[d+1][M],S=h[d+1][M+1];(d!==0||a>0)&&m.push(A,b,S),(d!==i-1||c<Math.PI)&&m.push(b,w,S)}this.setIndex(m),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ii(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Xh(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Xh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ge(n){let t={};for(let e=0;e<n.length;e++){let i=Ii(n[e]);for(let s in i)t[s]=i[s]}return t}function Xh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function D1(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Bu={clone:Ii,merge:Ge},N1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N1,this.fragmentShader=F1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=D1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[i].value=new $().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ma=class extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var us=class extends En{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=La,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ga=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_a=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Js=class extends Vn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ji(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ml(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ci=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xa=class extends ci{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case yl:r=t,o=2*e-i;break;case vl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case yl:a=t,c=2*i-e;break;case vl:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(i-e)/(s-e),v=_*_,p=v*_,d=-u*p+2*u*v-u*_,M=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*_+1,A=(-1-m)*p+(1.5+m)*v+.5*_,b=m*p-m*v;for(let w=0;w!==o;++w)r[w]=d*a[h+w]+M*a[l+w]+A*a[c+w]+b*a[f+w];return r}},ya=class extends ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},va=class extends ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ba=class extends ci{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(i-e)/(s-e),v=1-_;for(let p=0;p!==o;++p)r[p]=a[l+p]*v+a[c+p]*_;return r}let u=o*2,m=t-1;for(let _=0;_!==o;++_){let v=a[l+_],p=a[c+_],d=m*u+_*2,M=f[d],A=f[d+1],b=t*u+_*2,w=h[b],S=h[b+1],R=O1(i,e,M,w,s);r[_]=ku(R,v,A,S,p)}return r}};function ku(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function U1(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function O1(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=ku(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=U1(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var nn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ji(e,this.TimeBufferType),this.values=Ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ji(t.times,Array),values:Ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ml(t.settings)&&(i.settings={inTangents:Ji(t.settings.inTangents,Array),outTangents:Ji(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ba(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case oa:e=this.InterpolantFactoryMethodLinear;break;case Kr:e=this.InterpolantFactoryMethodSmooth;break;case _l:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return Kr;case this.InterpolantFactoryMethodBezier:return _l}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ml(this.settings)&&($h(this.settings.inTangents,t),$h(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Xt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Xt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&jf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Xt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Kr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*i,u=f-i,m=f+i;for(let _=0;_!==i;++_){let v=e[f+_];if(v!==e[u+_]||v!==e[m+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let m=0;m!==i;++m)e[u+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ml(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $h(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=oa;var hi=class extends nn{constructor(t,e,i){super(t,e,i)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Os;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends nn{constructor(t,e,i,s){super(t,e,i,s)}};Sa.prototype.ValueTypeName="color";var Ma=class extends nn{constructor(t,e,i,s){super(t,e,i,s)}};Ma.prototype.ValueTypeName="number";var wa=class extends ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},js=class extends nn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}};js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends nn{constructor(t,e,i){super(t,e,i)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Os;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends nn{constructor(t,e,i,s){super(t,e,i,s)}};Ea.prototype.ValueTypeName="vector";var Ta=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let m=l[f],_=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zu=new Ta,Aa=class{constructor(t){this.manager=t!==void 0?t:zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var gl=new me,qh=new $,Yh=new $,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(gl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ns||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yr=new $,Zr=new tn,Sn=new $,tr=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yr,Zr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Yr,Zr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new $,Zh=new $t,Kh=new $t,Ve=class extends tr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Zh,Kh),e.subVectors(Kh,Zh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ds=class extends tr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sl=class extends Ca{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends Qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Sl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},nr=class extends Qs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ji=-90,Qi=1,Ra=class extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new Ve(ji,Qi,t,e);r.layers=this.layers,this.add(r);let a=new Ve(ji,Qi,t,e);a.layers=this.layers,this.add(a);let o=new Ve(ji,Qi,t,e);o.layers=this.layers,this.add(o);let c=new Ve(ji,Qi,t,e);c.layers=this.layers,this.add(c);let l=new Ve(ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Pa=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var jl="\\[\\]\\.:\\/",B1=new RegExp("["+jl+"]","g"),Ql="[^"+jl+"]",k1="[^"+jl.replace("\\.","")+"]",z1=/((?:WC+[\/:])*)/.source.replace("WC",Ql),V1=/(WCOD+)?/.source.replace("WCOD",k1),G1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),H1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),W1=new RegExp("^"+z1+V1+G1+H1+"$"),X1=["material","materials","bones","map"],Ml=class{constructor(t,e,i){let s=i||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},_e=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(B1,"")}static parseTrackName(t){let e=W1.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);X1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Ml;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g8=new Float32Array(1);var Jh=new me,ir=class{constructor(t,e,i=0,s=1/0){this.ray=new zn(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(t,e=!0,i=[]){return wl(t,this,i,e),i.sort(jh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)wl(t[s],this,i,e);return i.sort(jh),i}};function jh(n,t){return n.distance-t.distance}function wl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)wl(r[a],t,e,!0)}}var fs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rc=class rc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};rc.prototype.isMatrix2=!0;var El=rc;var sr=class extends fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function tc(n,t,e,i){let s=$1(i);switch(e){case Wl:return n*t;case $l:return n*t/s.components*s.byteLength;case ka:return n*t/s.components*s.byteLength;case xi:return n*t*2/s.components*s.byteLength;case za:return n*t*2/s.components*s.byteLength;case Xl:return n*t*3/s.components*s.byteLength;case an:return n*t*4/s.components*s.byteLength;case Va:return n*t*4/s.components*s.byteLength;case lr:case cr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Xa:return Math.max(n,16)*Math.max(t,8)/4;case Ga:case Wa:return Math.max(n,8)*Math.max(t,8)/2;case $a:case qa:case Za:case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ya:case dr:case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case eo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case no:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case io:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case so:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ro:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ao:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fo:case po:case mo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case go:case _o:return Math.ceil(n/4)*Math.ceil(t/4)*8;case fr:case xo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $1(n){switch(n){case Ye:case zl:return{byteLength:1,components:1};case gs:case Vl:case xn:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case gn:case Ua:case _n:return{byteLength:4,components:1};case Gl:case Hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ld(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Y1(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){let _=f[u],v=f[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,f[u]=v)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){let v=f[m];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K1=`#ifdef USE_ALPHAHASH
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
#endif`,J1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
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
#endif`,qp=`uniform sampler2D dfgLUT;
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
}`,Yp=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,ym=`#define STANDARD
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
}`,vm=`#define STANDARD
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
}`,bm=`#define TOON
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
}`,Sm=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,Am=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Z1,alphahash_pars_fragment:K1,alphamap_fragment:J1,alphamap_pars_fragment:j1,alphatest_fragment:Q1,alphatest_pars_fragment:tp,aomap_fragment:ep,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:ap,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:dp,clipping_planes_vertex:fp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:_p,common:xp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:vp,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:Mp,emissivemap_pars_fragment:wp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Rp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Vp,envmap_vertex:Ip,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Op,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:kp,lights_pars_begin:zp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:$p,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:Zp,lights_fragment_end:Kp,lightprobes_pars_fragment:Jp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:_0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:S0,opaque_fragment:M0,packing:w0,premultiplied_alpha_fragment:E0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:C0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:L0,shadowmap_vertex:D0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:U0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:z0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:H0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:$0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:Z0,background_frag:K0,backgroundCube_vert:J0,backgroundCube_frag:j0,cube_vert:Q0,cube_frag:tm,depth_vert:em,depth_frag:nm,distance_vert:im,distance_frag:sm,equirect_vert:rm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:xm,meshphysical_vert:ym,meshphysical_frag:vm,meshtoon_vert:bm,meshtoon_frag:Sm,points_vert:Mm,points_frag:wm,shadow_vert:Em,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Cm},St={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ge([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ge([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ge([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ge([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ge([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ge([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ge([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ge([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ge([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ge([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ge([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Ge([St.common,St.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Ge([St.lights,St.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Pn.physical={uniforms:Ge([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var So={r:0,b:0,g:0},Rm=new me,cd=new Yt;cd.set(-1,0,0,0,1,0,0,0,1);function Pm(n,t,e,i,s,r){let a=new Qt(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=t.get(A,b)}return A}function _(M){let A=!1,b=m(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),A=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,A){let b=m(A);b&&(b.isCubeTexture||b.mapping===ar)?(l===void 0&&(l=new Te(new hs(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ii(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cd),l.material.toneMapped=ie.getTransfer(b.colorSpace)!==oe,(h!==b||f!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Te(new Ks(2,2),new en({name:"BackgroundMaterial",uniforms:Ii(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,A){M.getRGB(So,Jl(n)),e.buffers.color.setClear(So.r,So.g,So.b,A,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:v,dispose:d}}function Im(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(O,X,q,k,I){let W=!1,T=f(O,k,q,X);r!==T&&(r=T,l(r.object)),W=m(O,k,q,I),W&&_(O,k,q,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,b(O,X,q,k),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function f(O,X,q,k){let I=k.wireframe===!0,W=i[X.id];W===void 0&&(W={},i[X.id]=W);let T=O.isInstancedMesh===!0?O.id:0,D=W[T];D===void 0&&(D={},W[T]=D);let F=D[q.id];F===void 0&&(F={},D[q.id]=F);let z=F[I];return z===void 0&&(z=u(c()),F[I]=z),z}function u(O){let X=[],q=[],k=[];for(let I=0;I<e;I++)X[I]=0,q[I]=0,k[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:q,attributeDivisors:k,object:O,attributes:{},index:null}}function m(O,X,q,k){let I=r.attributes,W=X.attributes,T=0,D=q.getAttributes();for(let F in D)if(D[F].location>=0){let j=I[F],dt=W[F];if(dt===void 0&&(F==="instanceMatrix"&&O.instanceMatrix&&(dt=O.instanceMatrix),F==="instanceColor"&&O.instanceColor&&(dt=O.instanceColor)),j===void 0||j.attribute!==dt||dt&&j.data!==dt.data)return!0;T++}return r.attributesNum!==T||r.index!==k}function _(O,X,q,k){let I={},W=X.attributes,T=0,D=q.getAttributes();for(let F in D)if(D[F].location>=0){let j=W[F];j===void 0&&(F==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),F==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));let dt={};dt.attribute=j,j&&j.data&&(dt.data=j.data),I[F]=dt,T++}r.attributes=I,r.attributesNum=T,r.index=k}function v(){let O=r.newAttributes;for(let X=0,q=O.length;X<q;X++)O[X]=0}function p(O){d(O,0)}function d(O,X){let q=r.newAttributes,k=r.enabledAttributes,I=r.attributeDivisors;q[O]=1,k[O]===0&&(n.enableVertexAttribArray(O),k[O]=1),I[O]!==X&&(n.vertexAttribDivisor(O,X),I[O]=X)}function M(){let O=r.newAttributes,X=r.enabledAttributes;for(let q=0,k=X.length;q<k;q++)X[q]!==O[q]&&(n.disableVertexAttribArray(q),X[q]=0)}function A(O,X,q,k,I,W,T){T===!0?n.vertexAttribIPointer(O,X,q,I,W):n.vertexAttribPointer(O,X,q,k,I,W)}function b(O,X,q,k){v();let I=k.attributes,W=q.getAttributes(),T=X.defaultAttributeValues;for(let D in W){let F=W[D];if(F.location>=0){let z=I[D];if(z===void 0&&(D==="instanceMatrix"&&O.instanceMatrix&&(z=O.instanceMatrix),D==="instanceColor"&&O.instanceColor&&(z=O.instanceColor)),z!==void 0){let j=z.normalized,dt=z.itemSize,ut=t.get(z);if(ut===void 0)continue;let Vt=ut.buffer,Gt=ut.type,kt=ut.bytesPerElement,Q=Gt===n.INT||Gt===n.UNSIGNED_INT||z.gpuType===Ua;if(z.isInterleavedBufferAttribute){let rt=z.data,At=rt.stride,Ht=z.offset;if(rt.isInstancedInterleavedBuffer){for(let wt=0;wt<F.locationSize;wt++)d(F.location+wt,rt.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let wt=0;wt<F.locationSize;wt++)p(F.location+wt);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let wt=0;wt<F.locationSize;wt++)A(F.location+wt,dt/F.locationSize,Gt,j,At*kt,(Ht+dt/F.locationSize*wt)*kt,Q)}else{if(z.isInstancedBufferAttribute){for(let rt=0;rt<F.locationSize;rt++)d(F.location+rt,z.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let rt=0;rt<F.locationSize;rt++)p(F.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let rt=0;rt<F.locationSize;rt++)A(F.location+rt,dt/F.locationSize,Gt,j,dt*kt,dt/F.locationSize*rt*kt,Q)}}else if(T!==void 0){let j=T[D];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(F.location,j);break;case 3:n.vertexAttrib3fv(F.location,j);break;case 4:n.vertexAttrib4fv(F.location,j);break;default:n.vertexAttrib1fv(F.location,j)}}}}M()}function w(){E();for(let O in i){let X=i[O];for(let q in X){let k=X[q];for(let I in k){let W=k[I];for(let T in W)h(W[T].object),delete W[T];delete k[I]}}delete i[O]}}function S(O){if(i[O.id]===void 0)return;let X=i[O.id];for(let q in X){let k=X[q];for(let I in k){let W=k[I];for(let T in W)h(W[T].object),delete W[T];delete k[I]}}delete i[O.id]}function R(O){for(let X in i){let q=i[X];for(let k in q){let I=q[k];if(I[O.id]===void 0)continue;let W=I[O.id];for(let T in W)h(W[T].object),delete W[T];delete I[O.id]}}}function x(O){for(let X in i){let q=i[X],k=O.isInstancedMesh===!0?O.id:0,I=q[k];if(I!==void 0){for(let W in I){let T=I[W];for(let D in T)h(T[D].object),delete T[D];delete I[W]}delete q[k],Object.keys(q).length===0&&delete i[X]}}}function E(){N(),a=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Lm(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==an&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ye&&R!==_n&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:S}}function Nm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Qe,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||i!==0||s;return s=u,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){let _=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{let M=r?0:i,A=M*4,b=d.clippingState||null;c.value=b,b=h(_,u,A,m);for(let w=0;w!==A;++w)b[w]=e[w];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,m,_){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=c.value,_!==!0||p===null){let d=m+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,b=m;A!==v;++A,b+=4)a.copy(f[A]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var vs=4,Fm=6,Um=20,Om=256,pr=new ds,Vu=new Qt,ac=null,oc=0,lc=0,cc=!1,Bm=new $,Li=new $,wo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Bm}=r;ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,oc,lc),this._renderer.xr.enabled=cc,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:De,minFilter:De,generateMipmaps:!1,type:xn,format:an,colorSpace:Bs,depthBuffer:!1},s=Gu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=km(r)),this._blurMaterial=Vm(r,t,e),this._ggxMaterial=zm(r,t,e)}return s}_compileMaterial(t){let e=new Te(new Ee,t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,i,s,r){let c=new Ve(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Vu),f.toneMapping=mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new hs,new Tn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,d=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,d=!0):(p.color.copy(Vu),d=!0);for(let A=0;A<6;A++){let b=A%3;b===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):b===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let w=this._cubeSize;ys(s,b*w,A>2?w:0,w,w),f.setRenderTarget(s),d&&f.render(v,c),f.render(t,c)}f.toneMapping=m,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===mi||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ys(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,pr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,m=f*u,{_lodMax:_}=this,v=this._sizeLods[i],p=3*v*(i>_-vs?i-_+vs:0),d=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=_-e,ys(r,p,d,3*v,2*v),s.setRenderTarget(r),s.render(o,pr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,ys(t,p,d,3*v,2*v),s.setRenderTarget(t),s.render(o,pr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-vs?s-this._lodMax+vs:0),u=4*(this._cubeSize-h);ys(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(c,pr)}};function km(n){let t=[],e=[],i=n,s=n-vs+1+Fm;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,m=3,_=new Float32Array(m*u*f),v=new Float32Array(m*u*f);for(let d=0;d<f;d++){let M=d%3*2/3-1,A=d>2?0:-1,b=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];_.set(b,m*u*d);for(let w=0;w<u;w++){let S=h[w*2]*2-1,R=h[w*2+1]*2-1;d===0?Li.set(1,R,S):d===1?Li.set(-S,1,-R):d===2?Li.set(-S,R,1):d===3?Li.set(-1,R,-S):d===4?Li.set(-S,-1,R):Li.set(S,R,-1),Li.toArray(v,(d*u+w)*m)}}let p=new Ee;p.setAttribute("position",new $e(_,m)),p.setAttribute("outputDirection",new $e(v,m)),e.push(new Te(p,null)),i>vs&&i--}return{lodMeshes:e,sizeLods:t}}function Gu(n,t,e){let i=new qe(n,t,e);return i.texture.mapping=ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function zm(n,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Vm(n,t,e){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:Um,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Hu(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Wu(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ao(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Eo=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new qs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hs(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ii(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:Cn});r.uniforms.tEquirect.value=e;let a=new Te(s,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=De),new Ra(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function Gm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Da||m===Na)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let v=new Eo(_.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,_=m===Da||m===Na,v=m===mi||m===Pi;if(_||v){let p=e.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new wo(n)),p=_?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return _&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new wo(n)),p=_?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Da?u.mapping=mi:m===Na&&(u.mapping=Pi),u}function c(u){let m=0,_=6;for(let v=0;v<_;v++)u[v]!==void 0&&m++;return m===_}function l(u){let m=u.target;m.removeEventListener("dispose",l);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Hm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ci("WebGLRenderer: "+i+" extension not supported."),s}}}function Wm(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let m in u)t.update(u[m],n.ARRAY_BUFFER)}function l(f){let u=[],m=f.index,_=f.attributes.position,v=0;if(_===void 0)return;if(m!==null){let M=m.array;v=m.version;for(let A=0,b=M.length;A<b;A+=3){let w=M[A+0],S=M[A+1],R=M[A+2];u.push(w,S,S,R,R,w)}}else{let M=_.array;v=_.version;for(let A=0,b=M.length/3-1;A<b;A+=3){let w=A+0,S=A+1,R=A+2;u.push(w,S,S,R,R,w)}}let p=new(_.count>=65535?Ws:Hs)(u,1);p.version=v;let d=r.get(f);d&&t.remove(d),r.set(f,p)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Xm(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function l(f,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,f*a,m),e.update(u,i,m))}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,m);let v=0;for(let p=0;p<m;p++)v+=u[p];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function $m(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function qm(n,t,e){let i=new WeakMap,s=new ye;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;m===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let b=o.attributes.position.count*A,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let S=new Float32Array(b*w*4*f),R=new Vs(S,b,w,f);R.type=_n,R.needsUpdate=!0;let x=A*4;for(let N=0;N<f;N++){let O=p[N],X=d[N],q=M[N],k=b*w*4*N;for(let I=0;I<O.count;I++){let W=I*x;m===!0&&(s.fromBufferAttribute(O,I),S[k+W+0]=s.x,S[k+W+1]=s.y,S[k+W+2]=s.z,S[k+W+3]=0),_===!0&&(s.fromBufferAttribute(X,I),S[k+W+4]=s.x,S[k+W+5]=s.y,S[k+W+6]=s.z,S[k+W+7]=0),v===!0&&(s.fromBufferAttribute(q,I),S[k+W+8]=s.x,S[k+W+9]=s.y,S[k+W+10]=s.z,S[k+W+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new $t(b,w)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];let _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ym(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Zm={[Ll]:"LINEAR_TONE_MAPPING",[Dl]:"REINHARD_TONE_MAPPING",[Nl]:"CINEON_TONE_MAPPING",[Fl]:"ACES_FILMIC_TONE_MAPPING",[Ol]:"AGX_TONE_MAPPING",[Bl]:"NEUTRAL_TONE_MAPPING",[Ul]:"CUSTOM_TONE_MAPPING"};function Km(n,t,e,i,s,r){let a=new qe(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ee;l.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Me([0,2,0,0,2,0],2));let h=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Te(l,h),u=new ds(-1,1,1,-1,0,1),m=null,_=null,v=!1,p,d=null,M=[],A=!1;this.setSize=function(b,w){a.setSize(b,w),o!==null&&o.setSize(b,w),c!==null&&c.setSize(b,w);for(let S=0;S<M.length;S++){let R=M[S];R.setSize&&R.setSize(b,w)}},this.setEffects=function(b){M=b,A=M.length>0&&M[0].isRenderPass===!0;let w=a.width,S=a.height;M.length>0&&o===null&&(o=new qe(w,S,{type:xn,depthBuffer:!1,stencilBuffer:!1}),c=new qe(w,S,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(w,S)}},this.begin=function(b,w){if(v||b.toneMapping===mn&&M.length===0)return!1;if(d=w,w!==null){let S=w.width,R=w.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return A===!1&&b.setRenderTarget(a),p=b.toneMapping,b.toneMapping=mn,!0},this.hasRenderPass=function(){return A},this.end=function(b,w){b.toneMapping=p,v=!0;let S=a,R=o;for(let x=0;x<M.length;x++){let E=M[x];E.enabled!==!1&&(E.render(b,R,S,w),E.needsSwap!==!1&&(S=R,R=R===o?c:o))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,h.defines={},ie.getTransfer(m)===oe&&(h.defines.SRGB_TRANSFER="");let x=Zm[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(d),b.render(f,u),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var hd=new Ne,dc=new li(1,1),ud=new Vs,dd=new ha,fd=new qs,Xu=[],$u=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function Ss(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Co(n,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function t2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function e2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;Zu.set(i),n.uniformMatrix2fv(this.addr,!1,Zu),Ce(e,i)}}function n2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;Yu.set(i),n.uniformMatrix3fv(this.addr,!1,Yu),Ce(e,i)}}function i2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;qu.set(i),n.uniformMatrix4fv(this.addr,!1,qu),Ce(e,i)}}function s2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function r2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function a2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function o2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function l2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function c2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function h2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function u2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function d2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(dc.compareFunction=e.isReversedDepthBuffer()?bo:vo,r=dc):r=hd,e.setTexture2D(t||r,s)}function f2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||dd,s)}function p2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||fd,s)}function m2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ud,s)}function g2(n){switch(n){case 5126:return Jm;case 35664:return jm;case 35665:return Qm;case 35666:return t2;case 35674:return e2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return s2;case 35667:case 35671:return r2;case 35668:case 35672:return a2;case 35669:case 35673:return o2;case 5125:return l2;case 36294:return c2;case 36295:return h2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}function _2(n,t){n.uniform1fv(this.addr,t)}function x2(n,t){let e=Ss(t,this.size,2);n.uniform2fv(this.addr,e)}function y2(n,t){let e=Ss(t,this.size,3);n.uniform3fv(this.addr,e)}function v2(n,t){let e=Ss(t,this.size,4);n.uniform4fv(this.addr,e)}function b2(n,t){let e=Ss(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function S2(n,t){let e=Ss(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function M2(n,t){let e=Ss(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function w2(n,t){n.uniform1iv(this.addr,t)}function E2(n,t){n.uniform2iv(this.addr,t)}function T2(n,t){n.uniform3iv(this.addr,t)}function A2(n,t){n.uniform4iv(this.addr,t)}function C2(n,t){n.uniform1uiv(this.addr,t)}function R2(n,t){n.uniform2uiv(this.addr,t)}function P2(n,t){n.uniform3uiv(this.addr,t)}function I2(n,t){n.uniform4uiv(this.addr,t)}function L2(n,t,e){let i=this.cache,s=t.length,r=Co(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=dc:a=hd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function D2(n,t,e){let i=this.cache,s=t.length,r=Co(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||dd,r[a])}function N2(n,t,e){let i=this.cache,s=t.length,r=Co(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fd,r[a])}function F2(n,t,e){let i=this.cache,s=t.length,r=Co(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ud,r[a])}function U2(n){switch(n){case 5126:return _2;case 35664:return x2;case 35665:return y2;case 35666:return v2;case 35674:return b2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return w2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return A2;case 5125:return C2;case 36294:return R2;case 36295:return P2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return F2}}var fc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=g2(e.type)}},pc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U2(e.type)}},mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},hc=/(\w+)(\])?(\[|\.)?/g;function Ku(n,t){n.seq.push(t),n.map[t.id]=t}function O2(n,t,e){let i=n.name,s=i.length;for(hc.lastIndex=0;;){let r=hc.exec(i),a=hc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ku(e,l===void 0?new fc(o,n,t):new pc(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new mc(o),Ku(e,f)),e=f}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);O2(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Ju(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var B2=37297,k2=0;function z2(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var ju=new Yt;function V2(n){ie._getMatrix(ju,ie.workingColorSpace,n);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case ks:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Qu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+z2(n.getShaderSource(t),o)}else return r}function G2(n,t){let e=V2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var H2={[Ll]:"Linear",[Dl]:"Reinhard",[Nl]:"Cineon",[Fl]:"ACESFilmic",[Ol]:"AgX",[Bl]:"Neutral",[Ul]:"Custom"};function W2(n,t){let e=H2[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mo=new $;function X2(){ie.getLuminanceCoefficients(Mo);let n=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function q2(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y2(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function gr(n){return n!==""}function td(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ed(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(Z2,J2)}var K2=new Map;function J2(n,t){let e=jt[t];if(e===void 0){let i=K2.get(t);if(i!==void 0)e=jt[i],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gc(e)}var j2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(n){return n.replace(j2,Q2)}function Q2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var t3={[rr]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function e3(n){return t3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n3={[mi]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE_UV"};function i3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":n3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var s3={[Pi]:"ENVMAP_MODE_REFRACTION"};function r3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":s3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a3={[La]:"ENVMAP_BLENDING_MULTIPLY",[vu]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function o3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":a3[n.combine]||"ENVMAP_BLENDING_NONE"}function l3(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function c3(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=e3(e),l=i3(e),h=r3(e),f=o3(e),u=l3(e),m=$2(e),_=q2(r),v=s.createProgram(),p,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gr).join(`
`),d.length>0&&(d+=`
`)):(p=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),d=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?jt.tonemapping_pars_fragment:"",e.toneMapping!==mn?W2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,G2("linearToOutputTexel",e.outputColorSpace),X2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),a=gc(a),a=td(a,e),a=ed(a,e),o=gc(o),o=td(o,e),o=ed(o,e),a=nd(a),o=nd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=M+p+a,b=M+d+o,w=Ju(s,s.VERTEX_SHADER,A),S=Ju(s,s.FRAGMENT_SHADER,b);s.attachShader(v,w),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(O){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(v)||"",q=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(S)||"",I=X.trim(),W=q.trim(),T=k.trim(),D=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,S);else{let z=Qu(s,w,"vertex"),j=Qu(s,S,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+I+`
`+z+`
`+j)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(W===""||T==="")&&(F=!1);F&&(O.diagnostics={runnable:D,programLog:I,vertexShader:{log:W,prefix:p},fragmentShader:{log:T,prefix:d}})}s.deleteShader(w),s.deleteShader(S),x=new bs(s,v),E=Y2(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,B2)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k2++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}var h3=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xc(t),e.set(t,i)),i}},xc=class{constructor(t){this.id=h3++,this.code=t,this.usedTimes=0}};function u3(n){return n===xi||n===dr||n===fr}function d3(n,t,e,i,s,r){let a=new as,o=new _c,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,E,N,O,X,q){let k=O.fog,I=X.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,T=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=t.get(x.envMap||W,T),F=D&&D.mapping===ar?D.image.height:null,z=m[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,dt=j!==void 0?j.length:0,ut=0;I.morphAttributes.position!==void 0&&(ut=1),I.morphAttributes.normal!==void 0&&(ut=2),I.morphAttributes.color!==void 0&&(ut=3);let Vt,Gt,kt,Q;if(z){let fe=Pn[z];Vt=fe.vertexShader,Gt=fe.fragmentShader}else{Vt=x.vertexShader,Gt=x.fragmentShader;let fe=o.getVertexShaderStage(x),re=o.getFragmentShaderStage(x);o.update(x,fe,re),kt=fe.id,Q=re.id}let rt=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Ht=X.isInstancedMesh===!0,wt=X.isBatchedMesh===!0,Zt=!!x.map,he=!!x.matcap,J=!!D,ft=!!x.aoMap,P=!!x.lightMap,H=!!x.bumpMap&&x.wireframe===!1,tt=!!x.normalMap,ct=!!x.displacementMap,Lt=!!x.emissiveMap,mt=!!x.metalnessMap,Bt=!!x.roughnessMap,U=x.anisotropy>0,ne=x.clearcoat>0,qt=x.dispersion>0,C=x.retroreflectivity>0,g=x.iridescence>0,V=x.sheen>0,K=x.transmission>0,nt=U&&!!x.anisotropyMap,pt=ne&&!!x.clearcoatMap,gt=ne&&!!x.clearcoatNormalMap,it=ne&&!!x.clearcoatRoughnessMap,at=g&&!!x.iridescenceMap,_t=g&&!!x.iridescenceThicknessMap,Ft=V&&!!x.sheenColorMap,bt=V&&!!x.sheenRoughnessMap,xt=!!x.specularMap,Ut=!!x.specularColorMap,Wt=!!x.specularIntensityMap,Kt=K&&!!x.transmissionMap,G=K&&!!x.thicknessMap,yt=!!x.gradientMap,st=!!x.alphaMap,vt=x.alphaTest>0,Tt=!!x.alphaHash,lt=!!x.extensions,Ot=mn;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ot=n.toneMapping);let Dt={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:Vt,fragmentShader:Gt,defines:x.defines,customVertexShaderID:kt,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:wt,batchingColor:wt&&X._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&X.instanceColor!==null,instancingMorph:Ht&&X.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Zt,matcap:he,envMap:J,envMapMode:J&&D.mapping,envMapCubeUVHeight:F,aoMap:ft,lightMap:P,bumpMap:H,normalMap:tt,displacementMap:ct,emissiveMap:Lt,normalMapObjectSpace:tt&&x.normalMapType===wu,normalMapTangentSpace:tt&&x.normalMapType===yo,packedNormalMap:tt&&x.normalMapType===yo&&u3(x.normalMap.format),metalnessMap:mt,roughnessMap:Bt,anisotropy:U,anisotropyMap:nt,clearcoat:ne,clearcoatMap:pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:it,dispersion:qt,retroreflection:C,iridescence:g,iridescenceMap:at,iridescenceThicknessMap:_t,sheen:V,sheenColorMap:Ft,sheenRoughnessMap:bt,specularMap:xt,specularColorMap:Ut,specularIntensityMap:Wt,transmission:K,transmissionMap:Kt,thicknessMap:G,gradientMap:yt,opaque:x.transparent===!1&&x.blending===ms&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:vt,alphaHash:Tt,combine:x.combine,mapUv:Zt&&_(x.map.channel),aoMapUv:ft&&_(x.aoMap.channel),lightMapUv:P&&_(x.lightMap.channel),bumpMapUv:H&&_(x.bumpMap.channel),normalMapUv:tt&&_(x.normalMap.channel),displacementMapUv:ct&&_(x.displacementMap.channel),emissiveMapUv:Lt&&_(x.emissiveMap.channel),metalnessMapUv:mt&&_(x.metalnessMap.channel),roughnessMapUv:Bt&&_(x.roughnessMap.channel),anisotropyMapUv:nt&&_(x.anisotropyMap.channel),clearcoatMapUv:pt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(x.sheenRoughnessMap.channel),specularMapUv:xt&&_(x.specularMap.channel),specularColorMapUv:Ut&&_(x.specularColorMap.channel),specularIntensityMapUv:Wt&&_(x.specularIntensityMap.channel),transmissionMapUv:Kt&&_(x.transmissionMap.channel),thicknessMapUv:G&&_(x.thicknessMap.channel),alphaMapUv:st&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(tt||U),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!I.attributes.uv&&(Zt||st),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:At,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:ut,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Zt&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===oe,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===Ue,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:lt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&x.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)E.push(N),E.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(d(E,x),M(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function d(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let E=m[x.type],N;if(E){let O=Pn[E];N=Bu.clone(O.uniforms)}else N=x.uniforms;return N}function b(x,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new c3(n,E,x,s),l.push(N),h.set(E,N)),N}function w(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:A,acquireProgram:b,releaseProgram:w,releaseShaderCache:S,programs:l,dispose:R}}function f3(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function p3(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function rd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,v,p,d){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:d},n[t]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=p,M.group=d),t++,M}function c(u,m,_,v,p,d,M){M.reversedDepth===!0&&(p=-p);let A=o(u,m,_,v,p,d);_.transmission>0?i.push(A):_.transparent===!0?s.push(A):e.push(A)}function l(u,m,_,v,p,d){let M=o(u,m,_,v,p,d);_.transmission>0?i.unshift(M):_.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,m){e.length>1&&e.sort(u||p3),i.length>1&&i.sort(m||sd),s.length>1&&s.sort(m||sd)}function f(){for(let u=t,m=n.length;u<m;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function m3(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new rd,n.set(i,[a])):s>=r.length?(a=new rd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function g3(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new Qt};break;case"SpotLight":e={position:new $,direction:new $,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function _3(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var x3=0;function y3(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function v3(n){let t=new g3,e=_3(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);let s=new $,r=new me,a=new me;function o(l){let h=0,f=0,u=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,M=0,A=0,b=0,w=0,S=0,R=0,x=0,E=0,N=0;l.sort(y3);for(let X=0,q=l.length;X<q;X++){let k=l[X],I=k.color,W=k.intensity,T=k.distance,D=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===xi?D=k.shadow.map.texture:D=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=I.r*W,f+=I.g*W,u+=I.b*W;else if(k.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(k.sh.coefficients[F],W);N++}else if(k.isSunLight){let F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let z=k.shadow,j=e.get(k);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[_]=j,i.sunShadowMap[_]=D;let dt=z.getViewportCount();for(let ut=0;ut<dt;ut++)i.sunShadowMatrix[v+ut]=z.getMatrix(ut),i.sunShadowCascade[v+ut]=z._cascadeData[ut];v+=dt,_++}i.sun[m]=F,m++}else if(k.isDirectionalLight){let F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let z=k.shadow,j=e.get(k);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=k.shadow.matrix,w++}i.directional[p]=F,p++}else if(k.isSpotLight){let F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(I).multiplyScalar(W),F.distance=T,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,i.spot[M]=F;let z=k.shadow;if(k.map&&(i.spotLightMap[x]=k.map,x++,z.updateMatrices(k),k.castShadow&&E++),i.spotLightMatrix[M]=z.matrix,k.castShadow){let j=e.get(k);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=D,R++}M++}else if(k.isRectAreaLight){let F=t.get(k);F.color.copy(I).multiplyScalar(W),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),i.rectArea[A]=F,A++}else if(k.isPointLight){let F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){let z=k.shadow,j=e.get(k);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,i.pointShadow[d]=j,i.pointShadowMap[d]=D,i.pointShadowMatrix[d]=k.shadow.matrix,S++}i.point[d]=F,d++}else if(k.isHemisphereLight){let F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(W),F.groundColor.copy(k.groundColor).multiplyScalar(W),i.hemi[b]=F,b++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let O=i.hash;(O.sunLength!==m||O.directionalLength!==p||O.pointLength!==d||O.spotLength!==M||O.rectAreaLength!==A||O.hemiLength!==b||O.numSunShadows!==_||O.numDirectionalShadows!==w||O.numPointShadows!==S||O.numSpotShadows!==R||O.numSpotMaps!==x||O.numLightProbes!==N)&&(i.sun.length=m,i.directional.length=p,i.spot.length=M,i.rectArea.length=A,i.point.length=d,i.hemi.length=b,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=N,O.sunLength=m,O.directionalLength=p,O.pointLength=d,O.spotLength=M,O.rectAreaLength=A,O.hemiLength=b,O.numSunShadows=_,O.numDirectionalShadows=w,O.numPointShadows=S,O.numSpotShadows=R,O.numSpotMaps=x,O.numLightProbes=N,i.version=x3++)}function c(l,h){let f=0,u=0,m=0,_=0,v=0,p=0,d=h.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let b=l[M];if(b.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(d),f++}else if(b.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(b.isSpotLight){let w=i.spot[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(b.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let w=i.point[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:i}}function ad(n){let t=new v3(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function b3(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ad(n),t.set(s,[o])):r>=a.length?(o=new ad(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var S3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M3=`uniform sampler2D shadow_pass;
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
}`,w3=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],E3=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],od=new me,mr=new $,uc=new $;function T3(n,t,e){let i=new ls,s=new $t,r=new $t,a=new ye,o=new ga,c=new _a,l={},h=e.maxTextureSize,f={[pi]:Ue,[Ue]:pi,[An]:An},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:S3,fragmentShader:M3}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ee;_.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Te(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let d=this.type;this.render=function(S,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===eu&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rr);let E=n.getRenderTarget(),N=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Cn),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let q=d!==this.type;q&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(I=>I.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,I=S.length;k<I;k++){let W=S[k],T=W.shadow;if(T===void 0){zt("WebGLShadowMap:",W,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);let D=T.getFrameExtents();s.multiply(D),r.copy(T.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/D.x),s.x=r.x*D.x,T.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/D.y),s.y=r.y*D.y,T.mapSize.y=r.y));let F=n.state.buffers.depth.getReversed();if(T.camera._reversedDepth=F,T.map===null||q===!0){if(T.map!==null&&(T.map.depthTexture!==null&&(T.map.depthTexture.dispose(),T.map.depthTexture=null),T.map.dispose()),this.type===ps){if(W.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}T.map=new qe(s.x,s.y,{format:xi,type:xn,minFilter:De,magFilter:De,generateMipmaps:!1}),T.map.texture.name=W.name+".shadowMap",T.map.depthTexture=new li(s.x,s.y,_n),T.map.depthTexture.name=W.name+".shadowMapDepth",T.map.depthTexture.format=wn,T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=Ie,T.map.depthTexture.magFilter=Ie}else W.isPointLight?(T.map=new Eo(s.x),T.map.depthTexture=new pa(s.x,gn)):(T.map=new qe(s.x,s.y),T.map.depthTexture=new li(s.x,s.y,gn)),T.map.depthTexture.name=W.name+".shadowMap",T.map.depthTexture.format=wn,this.type===rr?(T.map.depthTexture.compareFunction=F?bo:vo,T.map.depthTexture.minFilter=De,T.map.depthTexture.magFilter=De):(T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=Ie,T.map.depthTexture.magFilter=Ie);T.camera.updateProjectionMatrix()}T.map.isWebGLCubeRenderTarget!==!0&&(T.map.width!==s.x||T.map.height!==s.y)&&T.map.setSize(s.x,s.y);let z=T.map.isWebGLCubeRenderTarget?6:T.getViewportCount();W.isPointLight!==!0&&T.updateMatrices(W,x);for(let j=0;j<z;j++){let dt=T.getCamera(j);if(W.isPointLight){let ut=T.camera,Vt=T.matrix,Gt=W.distance||ut.far;Gt!==ut.far&&(ut.far=Gt,ut.updateProjectionMatrix()),mr.setFromMatrixPosition(W.matrixWorld),ut.position.copy(mr),uc.copy(ut.position),uc.add(w3[j]),ut.up.copy(E3[j]),ut.lookAt(uc),ut.updateMatrixWorld(),Vt.makeTranslation(-mr.x,-mr.y,-mr.z),od.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),T._frustum.setFromProjectionMatrix(od,ut.coordinateSystem,ut.reversedDepth)}if(T.map.isWebGLCubeRenderTarget)n.setRenderTarget(T.map,j),n.clear();else{j===0&&(n.setRenderTarget(T.map),n.clear());let ut=T.getViewport(j);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),X.viewport(a)}i=T.getFrustum(j),b(R,x,dt,W,this.type)}T.isPointLightShadow!==!0&&this.type===ps&&M(T,x),T.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(E,N,O)};function M(S,R){let x=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new qe(s.x,s.y,{format:xi,type:xn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,x,u,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,x,m,v,null)}function A(S,R,x,E){let N=null,O=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)N=O;else if(N=x.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let X=N.uuid,q=R.uuid,k=l[X];k===void 0&&(k={},l[X]=k);let I=k[q];I===void 0&&(I=N.clone(),k[q]=I,R.addEventListener("dispose",w)),N=I}if(N.visible=R.visible,N.wireframe=R.wireframe,E===ps?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:f[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let X=n.properties.get(N);X.light=x}return N}function b(S,R,x,E,N){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===ps)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let q=t.update(S),k=S.material;if(Array.isArray(k)){let I=q.groups;for(let W=0,T=I.length;W<T;W++){let D=I[W],F=k[D.materialIndex];if(F&&F.visible){let z=A(S,F,E,N);S.onBeforeShadow(n,S,R,x,q,z,D),n.renderBufferDirect(x,null,q,z,S,D),S.onAfterShadow(n,S,R,x,q,z,D)}}}else if(k.visible){let I=A(S,k,E,N);S.onBeforeShadow(n,S,R,x,q,I,null),n.renderBufferDirect(x,null,q,I,S,null),S.onAfterShadow(n,S,R,x,q,I,null)}}let X=S.children;for(let q=0,k=X.length;q<k;q++)b(X[q],R,x,E,N)}function w(S){S.target.removeEventListener("dispose",w);for(let x in l){let E=l[x],N=S.target.uuid;N in E&&(E[N].dispose(),delete E[N])}}}function A3(n,t){function e(){let G=!1,yt=new ye,st=null,vt=new ye(0,0,0,0);return{setMask:function(Tt){st!==Tt&&!G&&(n.colorMask(Tt,Tt,Tt,Tt),st=Tt)},setLocked:function(Tt){G=Tt},setClear:function(Tt,lt,Ot,Dt,fe){fe===!0&&(Tt*=Dt,lt*=Dt,Ot*=Dt),yt.set(Tt,lt,Ot,Dt),vt.equals(yt)===!1&&(n.clearColor(Tt,lt,Ot,Dt),vt.copy(yt))},reset:function(){G=!1,st=null,vt.set(-1,0,0,0)}}}function i(){let G=!1,yt=!1,st=null,vt=null,Tt=null;return{setReversed:function(lt){if(yt!==lt){let Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),yt=lt;let Dt=Tt;Tt=null,this.setClear(Dt)}},getReversed:function(){return yt},setTest:function(lt){lt?rt(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(lt){st!==lt&&!G&&(n.depthMask(lt),st=lt)},setFunc:function(lt){if(yt&&(lt=Uu[lt]),vt!==lt){switch(lt){case jr:n.depthFunc(n.NEVER);break;case Qr:n.depthFunc(n.ALWAYS);break;case ta:n.depthFunc(n.LESS);break;case si:n.depthFunc(n.LEQUAL);break;case ea:n.depthFunc(n.EQUAL);break;case na:n.depthFunc(n.GEQUAL);break;case ia:n.depthFunc(n.GREATER);break;case sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=lt}},setLocked:function(lt){G=lt},setClear:function(lt){Tt!==lt&&(Tt=lt,yt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){G=!1,st=null,vt=null,Tt=null,yt=!1}}}function s(){let G=!1,yt=null,st=null,vt=null,Tt=null,lt=null,Ot=null,Dt=null,fe=null;return{setTest:function(re){G||(re?rt(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(re){yt!==re&&!G&&(n.stencilMask(re),yt=re)},setFunc:function(re,on,vn){(st!==re||vt!==on||Tt!==vn)&&(n.stencilFunc(re,on,vn),st=re,vt=on,Tt=vn)},setOp:function(re,on,vn){(lt!==re||Ot!==on||Dt!==vn)&&(n.stencilOp(re,on,vn),lt=re,Ot=on,Dt=vn)},setLocked:function(re){G=re},setClear:function(re){fe!==re&&(n.clearStencil(re),fe=re)},reset:function(){G=!1,yt=null,st=null,vt=null,Tt=null,lt=null,Ot=null,Dt=null,fe=null}}}let r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},m=new WeakMap,_=[],v=null,p=!1,d=null,M=null,A=null,b=null,w=null,S=null,R=null,x=new Qt(0,0,0),E=0,N=!1,O=null,X=null,q=null,k=null,I=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),T=!1,D=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(F)[1]),T=D>=1):F.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),T=D>=2);let z=null,j={},dt=n.getParameter(n.SCISSOR_BOX),ut=n.getParameter(n.VIEWPORT),Vt=new ye().fromArray(dt),Gt=new ye().fromArray(ut);function kt(G,yt,st,vt){let Tt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(G,lt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<st;Ot++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(yt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return lt}let Q={};Q[n.TEXTURE_2D]=kt(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=kt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=kt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=kt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(si),H(!1),tt(Tl),rt(n.CULL_FACE),ft(Cn);function rt(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function At(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function Ht(G,yt){return u[G]!==yt?(n.bindFramebuffer(G,yt),u[G]=yt,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function wt(G,yt){let st=_,vt=!1;if(G){st=m.get(yt),st===void 0&&(st=[],m.set(yt,st));let Tt=G.textures;if(st.length!==Tt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Ot=Tt.length;lt<Ot;lt++)st[lt]=n.COLOR_ATTACHMENT0+lt;st.length=Tt.length,vt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,vt=!0);vt&&n.drawBuffers(st)}function Zt(G){return v!==G?(n.useProgram(G),v=G,!0):!1}let he={[Ri]:n.FUNC_ADD,[iu]:n.FUNC_SUBTRACT,[su]:n.FUNC_REVERSE_SUBTRACT};he[ru]=n.MIN,he[au]=n.MAX;let J={[ou]:n.ZERO,[lu]:n.ONE,[cu]:n.SRC_COLOR,[Pl]:n.SRC_ALPHA,[mu]:n.SRC_ALPHA_SATURATE,[fu]:n.DST_COLOR,[uu]:n.DST_ALPHA,[hu]:n.ONE_MINUS_SRC_COLOR,[Il]:n.ONE_MINUS_SRC_ALPHA,[pu]:n.ONE_MINUS_DST_COLOR,[du]:n.ONE_MINUS_DST_ALPHA,[gu]:n.CONSTANT_COLOR,[_u]:n.ONE_MINUS_CONSTANT_COLOR,[xu]:n.CONSTANT_ALPHA,[yu]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(G,yt,st,vt,Tt,lt,Ot,Dt,fe,re){if(G===Cn){p===!0&&(At(n.BLEND),p=!1);return}if(p===!1&&(rt(n.BLEND),p=!0),G!==nu){if(G!==d||re!==N){if((M!==Ri||w!==Ri)&&(n.blendEquation(n.FUNC_ADD),M=Ri,w=Ri),re)switch(G){case ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.ONE,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xt("WebGLState: Invalid blending: ",G);break}else switch(G){case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cl:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",G);break}A=null,b=null,S=null,R=null,x.set(0,0,0),E=0,d=G,N=re}return}Tt=Tt||yt,lt=lt||st,Ot=Ot||vt,(yt!==M||Tt!==w)&&(n.blendEquationSeparate(he[yt],he[Tt]),M=yt,w=Tt),(st!==A||vt!==b||lt!==S||Ot!==R)&&(n.blendFuncSeparate(J[st],J[vt],J[lt],J[Ot]),A=st,b=vt,S=lt,R=Ot),(Dt.equals(x)===!1||fe!==E)&&(n.blendColor(Dt.r,Dt.g,Dt.b,fe),x.copy(Dt),E=fe),d=G,N=!1}function P(G,yt){G.side===An?At(n.CULL_FACE):rt(n.CULL_FACE);let st=G.side===Ue;yt&&(st=!st),H(st),G.blending===ms&&G.transparent===!1?ft(Cn):ft(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let vt=G.stencilWrite;o.setTest(vt),vt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Lt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(G){O!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),O=G)}function tt(G){G!==Qh?(rt(n.CULL_FACE),G!==X&&(G===Tl?n.cullFace(n.BACK):G===tu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),X=G}function ct(G){G!==q&&(T&&n.lineWidth(G),q=G)}function Lt(G,yt,st){G?(rt(n.POLYGON_OFFSET_FILL),(k!==yt||I!==st)&&(k=yt,I=st,a.getReversed()&&(yt=-yt),n.polygonOffset(yt,st))):At(n.POLYGON_OFFSET_FILL)}function mt(G){G?rt(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function Bt(G){G===void 0&&(G=n.TEXTURE0+W-1),z!==G&&(n.activeTexture(G),z=G)}function U(G,yt,st){st===void 0&&(z===null?st=n.TEXTURE0+W-1:st=z);let vt=j[st];vt===void 0&&(vt={type:void 0,texture:void 0},j[st]=vt),(vt.type!==G||vt.texture!==yt)&&(z!==st&&(n.activeTexture(st),z=st),n.bindTexture(G,yt||Q[G]),vt.type=G,vt.texture=yt)}function ne(){let G=j[z];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function qt(){try{n.compressedTexImage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function g(){try{n.texSubImage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function V(){try{n.texSubImage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function nt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function pt(){try{n.texStorage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function gt(){try{n.texStorage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function it(){try{n.texImage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function at(){try{n.texImage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function _t(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function Ft(G,yt){f[G]!==yt&&(n.pixelStorei(G,yt),f[G]=yt)}function bt(G){Vt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Vt.copy(G))}function xt(G){Gt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Gt.copy(G))}function Ut(G,yt){let st=l.get(yt);st===void 0&&(st=new WeakMap,l.set(yt,st));let vt=st.get(G);vt===void 0&&(vt=n.getUniformBlockIndex(yt,G.name),st.set(G,vt))}function Wt(G,yt){let vt=l.get(yt).get(G);c.get(yt)!==vt&&(n.uniformBlockBinding(yt,vt,G.__bindingPointIndex),c.set(yt,vt))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},z=null,j={},u={},m=new WeakMap,_=[],v=null,p=!1,d=null,M=null,A=null,b=null,w=null,S=null,R=null,x=new Qt(0,0,0),E=0,N=!1,O=null,X=null,q=null,k=null,I=null,Vt.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:At,bindFramebuffer:Ht,drawBuffers:wt,useProgram:Zt,setBlending:ft,setMaterial:P,setFlipSided:H,setCullFace:tt,setLineWidth:ct,setPolygonOffset:Lt,setScissorTest:mt,activeTexture:Bt,bindTexture:U,unbindTexture:ne,compressedTexImage2D:qt,compressedTexImage3D:C,texImage2D:it,texImage3D:at,pixelStorei:Ft,getParameter:_t,updateUBOMapping:Ut,uniformBlockBinding:Wt,texStorage2D:pt,texStorage3D:gt,texSubImage2D:g,texSubImage3D:V,compressedTexSubImage2D:K,compressedTexSubImage3D:nt,scissor:bt,viewport:xt,reset:Kt}}function C3(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,h=new WeakMap,f=new Set,u,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,g){return _?new OffscreenCanvas(C,g):zs("canvas")}function p(C,g,V){let K=1,nt=qt(C);if((nt.width>V||nt.height>V)&&(K=V/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let pt=Math.floor(K*nt.width),gt=Math.floor(K*nt.height);u===void 0&&(u=v(pt,gt));let it=g?v(pt,gt):u;return it.width=pt,it.height=gt,it.getContext("2d").drawImage(C,0,0,pt,gt),zt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+pt+"x"+gt+")."),it}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function d(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,g,V,K,nt,pt=!1){if(C!==null){if(n[C]!==void 0)return n[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let gt;K&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=g;if(g===n.RED&&(V===n.FLOAT&&(it=n.R32F),V===n.HALF_FLOAT&&(it=n.R16F),V===n.UNSIGNED_BYTE&&(it=n.R8),V===n.UNSIGNED_SHORT&&gt&&(it=gt.R16_EXT),V===n.SHORT&&gt&&(it=gt.R16_SNORM_EXT)),g===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(it=n.R8UI),V===n.UNSIGNED_SHORT&&(it=n.R16UI),V===n.UNSIGNED_INT&&(it=n.R32UI),V===n.BYTE&&(it=n.R8I),V===n.SHORT&&(it=n.R16I),V===n.INT&&(it=n.R32I)),g===n.RG&&(V===n.FLOAT&&(it=n.RG32F),V===n.HALF_FLOAT&&(it=n.RG16F),V===n.UNSIGNED_BYTE&&(it=n.RG8),V===n.UNSIGNED_SHORT&&gt&&(it=gt.RG16_EXT),V===n.SHORT&&gt&&(it=gt.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(it=n.RG8UI),V===n.UNSIGNED_SHORT&&(it=n.RG16UI),V===n.UNSIGNED_INT&&(it=n.RG32UI),V===n.BYTE&&(it=n.RG8I),V===n.SHORT&&(it=n.RG16I),V===n.INT&&(it=n.RG32I)),g===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(it=n.RGB8UI),V===n.UNSIGNED_SHORT&&(it=n.RGB16UI),V===n.UNSIGNED_INT&&(it=n.RGB32UI),V===n.BYTE&&(it=n.RGB8I),V===n.SHORT&&(it=n.RGB16I),V===n.INT&&(it=n.RGB32I)),g===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),V===n.UNSIGNED_INT&&(it=n.RGBA32UI),V===n.BYTE&&(it=n.RGBA8I),V===n.SHORT&&(it=n.RGBA16I),V===n.INT&&(it=n.RGBA32I)),g===n.RGB&&(V===n.UNSIGNED_SHORT&&gt&&(it=gt.RGB16_EXT),V===n.SHORT&&gt&&(it=gt.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),g===n.RGBA){let at=pt?ks:ie.getTransfer(nt);V===n.FLOAT&&(it=n.RGBA32F),V===n.HALF_FLOAT&&(it=n.RGBA16F),V===n.UNSIGNED_BYTE&&(it=at===oe?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&gt&&(it=gt.RGBA16_EXT),V===n.SHORT&&gt&&(it=gt.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function w(C,g){let V;return C?g===null||g===gn||g===_s?V=n.DEPTH24_STENCIL8:g===_n?V=n.DEPTH32F_STENCIL8:g===gs&&(V=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===gn||g===_s?V=n.DEPTH_COMPONENT24:g===_n?V=n.DEPTH_COMPONENT32F:g===gs&&(V=n.DEPTH_COMPONENT16),V}function S(C,g){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ie&&C.minFilter!==De?Math.log2(Math.max(g.width,g.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?g.mipmaps.length:1}function R(C){let g=C.target;g.removeEventListener("dispose",R),E(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function x(C){let g=C.target;g.removeEventListener("dispose",x),O(g)}function E(C){let g=i.get(C);if(g.__webglInit===void 0)return;let V=C.source,K=m.get(V);if(K){let nt=K[g.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&N(C),Object.keys(K).length===0&&m.delete(V)}i.remove(C)}function N(C){let g=i.get(C);n.deleteTexture(g.__webglTexture);let V=C.source,K=m.get(V);delete K[g.__cacheKey],a.memory.textures--}function O(C){let g=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let nt=0;nt<g.__webglFramebuffer[K].length;nt++)n.deleteFramebuffer(g.__webglFramebuffer[K][nt]);else n.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)n.deleteFramebuffer(g.__webglFramebuffer[K]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let V=C.textures;for(let K=0,nt=V.length;K<nt;K++){let pt=i.get(V[K]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),a.memory.textures--),i.remove(V[K])}i.remove(C)}let X=0;function q(){X=0}function k(){return X}function I(C){X=C}function W(){let C=X;return C>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,C}function T(C){let g=[];return g.push(C.wrapS),g.push(C.wrapT),g.push(C.wrapR||0),g.push(C.magFilter),g.push(C.minFilter),g.push(C.anisotropy),g.push(C.internalFormat),g.push(C.format),g.push(C.type),g.push(C.generateMipmaps),g.push(C.premultiplyAlpha),g.push(C.flipY),g.push(C.unpackAlignment),g.push(C.colorSpace),g.join()}function D(C,g){let V=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let K=C.image;if(K===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{At(V,C,g);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+g)}function F(C,g){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){At(V,C,g);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+g)}function z(C,g){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){At(V,C,g);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+g)}function j(C,g){let V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Ht(V,C,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+g)}let dt={[ra]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[aa]:n.MIRRORED_REPEAT},ut={[Ie]:n.NEAREST,[Su]:n.NEAREST_MIPMAP_NEAREST,[or]:n.NEAREST_MIPMAP_LINEAR,[De]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},Vt={[Tu]:n.NEVER,[Iu]:n.ALWAYS,[Au]:n.LESS,[vo]:n.LEQUAL,[Cu]:n.EQUAL,[bo]:n.GEQUAL,[Ru]:n.GREATER,[Pu]:n.NOTEQUAL};function Gt(C,g){if(g.type===_n&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===De||g.magFilter===Fa||g.magFilter===or||g.magFilter===gi||g.minFilter===De||g.minFilter===Fa||g.minFilter===or||g.minFilter===gi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,dt[g.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,dt[g.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,dt[g.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ut[g.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ut[g.minFilter]),g.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Vt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ie||g.minFilter!==or&&g.minFilter!==gi||g.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function kt(C,g){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,g.addEventListener("dispose",R));let K=g.source,nt=m.get(K);nt===void 0&&(nt={},m.set(K,nt));let pt=T(g);if(pt!==C.__cacheKey){nt[pt]===void 0&&(nt[pt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[pt].usedTimes++;let gt=nt[C.__cacheKey];gt!==void 0&&(nt[C.__cacheKey].usedTimes--,gt.usedTimes===0&&N(g)),C.__cacheKey=pt,C.__webglTexture=nt[pt].texture}return V}function Q(C,g,V){return Math.floor(Math.floor(C/V)/g)}function rt(C,g,V,K){let pt=C.updateRanges;if(pt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,V,K,g.data);else{pt.sort((Ft,bt)=>Ft.start-bt.start);let gt=0;for(let Ft=1;Ft<pt.length;Ft++){let bt=pt[gt],xt=pt[Ft],Ut=bt.start+bt.count,Wt=Q(xt.start,g.width,4),Kt=Q(bt.start,g.width,4);xt.start<=Ut+1&&Wt===Kt&&Q(xt.start+xt.count-1,g.width,4)===Wt?bt.count=Math.max(bt.count,xt.start+xt.count-bt.start):(++gt,pt[gt]=xt)}pt.length=gt+1;let it=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ft=0,bt=pt.length;Ft<bt;Ft++){let xt=pt[Ft],Ut=Math.floor(xt.start/4),Wt=Math.ceil(xt.count/4),Kt=Ut%g.width,G=Math.floor(Ut/g.width),yt=Wt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,Kt,G,yt,st,V,K,g.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,it),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function At(C,g,V){let K=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=n.TEXTURE_3D);let nt=kt(C,g),pt=g.source;e.bindTexture(K,C.__webglTexture,n.TEXTURE0+V);let gt=i.get(pt);if(pt.version!==gt.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let st=ie.getPrimaries(ie.workingColorSpace),vt=g.colorSpace===Gn?null:ie.getPrimaries(g.colorSpace),Tt=g.colorSpace===Gn||st===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let at=p(g.image,!1,s.maxTextureSize);at=ne(g,at);let _t=r.convert(g.format,g.colorSpace),Ft=r.convert(g.type),bt=b(g.internalFormat,_t,Ft,g.normalized,g.colorSpace,g.isVideoTexture);Gt(K,g);let xt,Ut=g.mipmaps,Wt=g.isVideoTexture!==!0,Kt=gt.__version===void 0||nt===!0,G=pt.dataReady,yt=S(g,at);if(g.isDepthTexture)bt=w(g.format===_i,g.type),Kt&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,bt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,bt,at.width,at.height,0,_t,Ft,null));else if(g.isDataTexture)if(Ut.length>0){Wt&&Kt&&e.texStorage2D(n.TEXTURE_2D,yt,bt,Ut[0].width,Ut[0].height);for(let st=0,vt=Ut.length;st<vt;st++)xt=Ut[st],Wt?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,xt.width,xt.height,_t,Ft,xt.data):e.texImage2D(n.TEXTURE_2D,st,bt,xt.width,xt.height,0,_t,Ft,xt.data);g.generateMipmaps=!1}else Wt?(Kt&&e.texStorage2D(n.TEXTURE_2D,yt,bt,at.width,at.height),G&&rt(g,at,_t,Ft)):e.texImage2D(n.TEXTURE_2D,0,bt,at.width,at.height,0,_t,Ft,at.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Wt&&Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,bt,Ut[0].width,Ut[0].height,at.depth);for(let st=0,vt=Ut.length;st<vt;st++)if(xt=Ut[st],g.format!==an)if(_t!==null)if(Wt){if(G)if(g.layerUpdates.size>0){let Tt=tc(xt.width,xt.height,g.format,g.type);for(let lt of g.layerUpdates){let Ot=xt.data.subarray(lt*Tt/xt.data.BYTES_PER_ELEMENT,(lt+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,lt,xt.width,xt.height,1,_t,Ot)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,xt.width,xt.height,at.depth,_t,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,bt,xt.width,xt.height,at.depth,0,xt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,xt.width,xt.height,at.depth,_t,Ft,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,bt,xt.width,xt.height,at.depth,0,_t,Ft,xt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Wt&&Kt&&e.texStorage2D(n.TEXTURE_2D,yt,bt,Ut[0].width,Ut[0].height);for(let st=0,vt=Ut.length;st<vt;st++)xt=Ut[st],g.format!==an?_t!==null?Wt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,bt,xt.width,xt.height,0,xt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,xt.width,xt.height,_t,Ft,xt.data):e.texImage2D(n.TEXTURE_2D,st,bt,xt.width,xt.height,0,_t,Ft,xt.data)}else if(g.isDataArrayTexture)if(Wt){if(Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,bt,at.width,at.height,at.depth),G)if(g.layerUpdates.size>0){let st=tc(at.width,at.height,g.format,g.type);for(let vt of g.layerUpdates){let Tt=at.data.subarray(vt*st/at.data.BYTES_PER_ELEMENT,(vt+1)*st/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,at.width,at.height,1,_t,Ft,Tt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,Ft,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,at.width,at.height,at.depth,0,_t,Ft,at.data);else if(g.isData3DTexture)Wt?(Kt&&e.texStorage3D(n.TEXTURE_3D,yt,bt,at.width,at.height,at.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,Ft,at.data)):e.texImage3D(n.TEXTURE_3D,0,bt,at.width,at.height,at.depth,0,_t,Ft,at.data);else if(g.isFramebufferTexture){if(Kt)if(Wt)e.texStorage2D(n.TEXTURE_2D,yt,bt,at.width,at.height);else{let st=at.width,vt=at.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,bt,st,vt,0,_t,Ft,null),st>>=1,vt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),at.parentNode!==st){st.appendChild(at),f.add(g),st.onpaint=vt=>{let Tt=vt.changedElements;for(let lt of f)Tt.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{let Tt=n.RGBA,lt=n.RGBA,Ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Tt,lt,Ot,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Wt&&Kt){let st=qt(Ut[0]);e.texStorage2D(n.TEXTURE_2D,yt,bt,st.width,st.height)}for(let st=0,vt=Ut.length;st<vt;st++)xt=Ut[st],Wt?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,_t,Ft,xt):e.texImage2D(n.TEXTURE_2D,st,bt,_t,Ft,xt);g.generateMipmaps=!1}else if(Wt){if(Kt){let st=qt(at);e.texStorage2D(n.TEXTURE_2D,yt,bt,st.width,st.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Ft,at)}else e.texImage2D(n.TEXTURE_2D,0,bt,_t,Ft,at);d(g)&&M(K),gt.__version=pt.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function Ht(C,g,V){if(g.image.length!==6)return;let K=kt(C,g),nt=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);let pt=i.get(nt);if(nt.version!==pt.__version||K===!0){e.activeTexture(n.TEXTURE0+V);let gt=ie.getPrimaries(ie.workingColorSpace),it=g.colorSpace===Gn?null:ie.getPrimaries(g.colorSpace),at=g.colorSpace===Gn||gt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let _t=g.isCompressedTexture||g.image[0].isCompressedTexture,Ft=g.image[0]&&g.image[0].isDataTexture,bt=[];for(let lt=0;lt<6;lt++)!_t&&!Ft?bt[lt]=p(g.image[lt],!0,s.maxCubemapSize):bt[lt]=Ft?g.image[lt].image:g.image[lt],bt[lt]=ne(g,bt[lt]);let xt=bt[0],Ut=r.convert(g.format,g.colorSpace),Wt=r.convert(g.type),Kt=b(g.internalFormat,Ut,Wt,g.normalized,g.colorSpace),G=g.isVideoTexture!==!0,yt=pt.__version===void 0||K===!0,st=nt.dataReady,vt=S(g,xt);Gt(n.TEXTURE_CUBE_MAP,g);let Tt;if(_t){G&&yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Kt,xt.width,xt.height);for(let lt=0;lt<6;lt++){Tt=bt[lt].mipmaps;for(let Ot=0;Ot<Tt.length;Ot++){let Dt=Tt[Ot];g.format!==an?Ut!==null?G?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,0,0,Dt.width,Dt.height,Ut,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,Kt,Dt.width,Dt.height,0,Dt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,0,0,Dt.width,Dt.height,Ut,Wt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,Kt,Dt.width,Dt.height,0,Ut,Wt,Dt.data)}}}else{if(Tt=g.mipmaps,G&&yt){Tt.length>0&&vt++;let lt=qt(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Kt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ft){G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,bt[lt].width,bt[lt].height,Ut,Wt,bt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,bt[lt].width,bt[lt].height,0,Ut,Wt,bt[lt].data);for(let Ot=0;Ot<Tt.length;Ot++){let fe=Tt[Ot].image[lt].image;G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,0,0,fe.width,fe.height,Ut,Wt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,Kt,fe.width,fe.height,0,Ut,Wt,fe.data)}}else{G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ut,Wt,bt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Ut,Wt,bt[lt]);for(let Ot=0;Ot<Tt.length;Ot++){let Dt=Tt[Ot];G?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,0,0,Ut,Wt,Dt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,Kt,Ut,Wt,Dt.image[lt])}}}d(g)&&M(n.TEXTURE_CUBE_MAP),pt.__version=nt.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function wt(C,g,V,K,nt,pt){let gt=r.convert(V.format,V.colorSpace),it=r.convert(V.type),at=b(V.internalFormat,gt,it,V.normalized,V.colorSpace),_t=i.get(g),Ft=i.get(V);if(Ft.__renderTarget=g,!_t.__hasExternalTextures){let bt=Math.max(1,g.width>>pt),xt=Math.max(1,g.height>>pt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,pt,at,bt,xt,g.depth,0,gt,it,null):e.texImage2D(nt,pt,at,bt,xt,0,gt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Bt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,nt,Ft.__webglTexture,0,mt(g)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,nt,Ft.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(C,g,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),g.depthBuffer){let K=g.depthTexture,nt=K&&K.isDepthTexture?K.type:null,pt=w(g.stencilBuffer,nt),gt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Bt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(g),pt,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(g),pt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,pt,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,C)}else{let K=g.textures;for(let nt=0;nt<K.length;nt++){let pt=K[nt],gt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),at=b(pt.internalFormat,gt,it,pt.normalized,pt.colorSpace);Bt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(g),at,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(g),at,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,at,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(C,g,V){let K=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(g.depthTexture);if(nt.__renderTarget=g,(!nt.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),nt.__webglTexture===void 0){nt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,g.depthTexture);let _t=r.convert(g.depthTexture.format),Ft=r.convert(g.depthTexture.type),bt;g.depthTexture.format===wn?bt=n.DEPTH_COMPONENT24:g.depthTexture.format===_i&&(bt=n.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,bt,g.width,g.height,0,_t,Ft,null)}}else D(g.depthTexture,0);let pt=nt.__webglTexture,gt=mt(g),it=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,at=g.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===wn)Bt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,it,pt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,at,it,pt,0);else if(g.depthTexture.format===_i)Bt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,it,pt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,at,it,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J(C){let g=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){let nt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),g.__depthDisposeCallback=nt}g.__boundDepthTexture=K}if(C.depthTexture&&!g.__autoAllocateDepthBuffer)if(V)for(let K=0;K<6;K++)he(g.__webglFramebuffer[K],C,K);else{let K=C.texture.mipmaps;K&&K.length>0?he(g.__webglFramebuffer[0],C,0):he(g.__webglFramebuffer,C,0)}else if(V){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=n.createRenderbuffer(),Zt(g.__webglDepthbuffer[K],C,!1);else{let nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=g.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,pt)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Zt(g.__webglDepthbuffer,C,!1);else{let nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,pt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(C,g,V){let K=i.get(C);g!==void 0&&wt(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&J(C)}function P(C){let g=C.texture,V=i.get(C),K=i.get(g);C.addEventListener("dispose",x);let nt=C.textures,pt=C.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=g.version,a.memory.textures++),pt){V.__webglFramebuffer=[];for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[it]=[];for(let at=0;at<g.mipmaps.length;at++)V.__webglFramebuffer[it][at]=n.createFramebuffer()}else V.__webglFramebuffer[it]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let it=0;it<g.mipmaps.length;it++)V.__webglFramebuffer[it]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(gt)for(let it=0,at=nt.length;it<at;it++){let _t=i.get(nt[it]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Bt(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){let at=nt[it];V.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[it]);let _t=r.convert(at.format,at.colorSpace),Ft=r.convert(at.type),bt=b(at.internalFormat,_t,Ft,at.normalized,at.colorSpace,C.isXRRenderTarget===!0),xt=mt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,bt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,V.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Zt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,g);for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0)for(let at=0;at<g.mipmaps.length;at++)wt(V.__webglFramebuffer[it][at],C,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else wt(V.__webglFramebuffer[it],C,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);d(g)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let it=0,at=nt.length;it<at;it++){let _t=nt[it],Ft=i.get(_t),bt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ft.__webglTexture),Gt(bt,_t),wt(V.__webglFramebuffer,C,_t,n.COLOR_ATTACHMENT0+it,bt,0),d(_t)&&M(bt)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,K.__webglTexture),Gt(it,g),g.mipmaps&&g.mipmaps.length>0)for(let at=0;at<g.mipmaps.length;at++)wt(V.__webglFramebuffer[at],C,g,n.COLOR_ATTACHMENT0,it,at);else wt(V.__webglFramebuffer,C,g,n.COLOR_ATTACHMENT0,it,0);d(g)&&M(it),e.unbindTexture()}C.depthBuffer&&J(C)}function H(C){let g=C.textures;for(let V=0,K=g.length;V<K;V++){let nt=g[V];if(d(nt)){let pt=A(C),gt=i.get(nt).__webglTexture;e.bindTexture(pt,gt),M(pt),e.unbindTexture()}}}let tt=[],ct=[];function Lt(C){if(C.samples>0){if(Bt(C)===!1){let g=C.textures,V=C.width,K=C.height,nt=n.COLOR_BUFFER_BIT,pt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(C),it=g.length>1;if(it)for(let _t=0;_t<g.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let at=C.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let _t=0;_t<g.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[_t]);let Ft=i.get(g[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,V,K,0,0,V,K,nt,n.NEAREST),c===!0&&(tt.length=0,ct.length=0,tt.push(n.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(tt.push(pt),ct.push(pt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ct)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let _t=0;_t<g.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,gt.__webglColorRenderbuffer[_t]);let Ft=i.get(g[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let g=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function mt(C){return Math.min(s.maxSamples,C.samples)}function Bt(C){let g=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(C){let g=a.render.frame;h.get(C)!==g&&(h.set(C,g),C.update())}function ne(C,g){let V=C.colorSpace,K=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Bs&&V!==Gn&&(ie.getTransfer(V)===oe?(K!==an||nt!==Ye)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",V)),g}function qt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.getTextureUnits=k,this.setTextureUnits=I,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=ft,this.setupRenderTarget=P,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R3(n,t){function e(i,s=Gn){let r,a=ie.getTransfer(s);if(i===Ye)return n.UNSIGNED_BYTE;if(i===Oa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ba)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===zl)return n.BYTE;if(i===Vl)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===Ua)return n.INT;if(i===gn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===Wl)return n.ALPHA;if(i===Xl)return n.RGB;if(i===an)return n.RGBA;if(i===wn)return n.DEPTH_COMPONENT;if(i===_i)return n.DEPTH_STENCIL;if(i===$l)return n.RED;if(i===ka)return n.RED_INTEGER;if(i===xi)return n.RG;if(i===za)return n.RG_INTEGER;if(i===Va)return n.RGBA_INTEGER;if(i===lr||i===cr||i===hr||i===ur)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Ha||i===Wa||i===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===qa||i===Ya||i===Za||i===Ka||i===dr||i===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$a||i===qa)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Za)return r.COMPRESSED_R11_EAC;if(i===Ka)return r.COMPRESSED_SIGNED_R11_EAC;if(i===dr)return r.COMPRESSED_RG11_EAC;if(i===Ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ja||i===Qa||i===to||i===eo||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ja)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===to)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===no)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===io)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===so)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ro)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ao)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===co)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ho)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===po||i===mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===fo)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===go||i===_o||i===fr||i===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var P3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I3=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Zs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new en({vertexShader:P3,fragmentShader:I3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends fn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,m=null,_=null,v=typeof XRWebGLBinding<"u",p=new yc,d={},M=e.getContextAttributes(),A=null,b=null,w=[],S=[],R=new $t,x=null,E=null,N=new Ve;N.viewport=new ye;let O=new Ve;O.viewport=new ye;let X=[N,O],q=new Pa,k=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=w[Q];return rt===void 0&&(rt=new os,w[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=w[Q];return rt===void 0&&(rt=new os,w[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=w[Q];return rt===void 0&&(rt=new os,w[Q]=rt),rt.getHandSpace()};function W(Q){let rt=S.indexOf(Q.inputSource);if(rt===-1)return;let At=w[rt];At!==void 0&&(At.update(Q.inputSource,Q.frame,l||a),At.dispatchEvent({type:Q.type,data:Q.inputSource}))}function T(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",T),s.removeEventListener("inputsourceschange",D);for(let Q=0;Q<w.length;Q++){let rt=S[Q];rt!==null&&(S[Q]=null,w[Q].disconnect(rt))}k=null,I=null,p.reset();for(let Q in d)delete d[Q];if(t.setRenderTarget(A),m=null,u=null,f=null,s=null,b=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),E!==null){let Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",T),s.addEventListener("inputsourceschange",D),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ht=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=M.stencil?_i:wn,Ht=M.stencil?_s:gn);let Zt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new qe(u.textureWidth,u.textureHeight,{format:an,type:Ye,depthTexture:new li(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let At={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new qe(m.framebufferWidth,m.framebufferHeight,{format:an,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function D(Q){for(let rt=0;rt<Q.removed.length;rt++){let At=Q.removed[rt],Ht=S.indexOf(At);Ht>=0&&(S[Ht]=null,w[Ht].disconnect(At))}for(let rt=0;rt<Q.added.length;rt++){let At=Q.added[rt],Ht=S.indexOf(At);if(Ht===-1){for(let Zt=0;Zt<w.length;Zt++)if(Zt>=S.length){S.push(At),Ht=Zt;break}else if(S[Zt]===null){S[Zt]=At,Ht=Zt;break}if(Ht===-1)break}let wt=w[Ht];wt&&wt.connect(At)}}let F=new $,z=new $;function j(Q,rt,At){F.setFromMatrixPosition(rt.matrixWorld),z.setFromMatrixPosition(At.matrixWorld);let Ht=F.distanceTo(z),wt=rt.projectionMatrix.elements,Zt=At.projectionMatrix.elements,he=wt[14]/(wt[10]-1),J=wt[14]/(wt[10]+1),ft=(wt[9]+1)/wt[5],P=(wt[9]-1)/wt[5],H=(wt[8]-1)/wt[0],tt=(Zt[8]+1)/Zt[0],ct=he*H,Lt=he*tt,mt=Ht/(-H+tt),Bt=mt*-H;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Bt),Q.translateZ(mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),wt[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let U=he+mt,ne=J+mt,qt=ct-Bt,C=Lt+(Ht-Bt),g=ft*J/ne*U,V=P*J/ne*U;Q.projectionMatrix.makePerspective(qt,C,g,V,U,ne),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function dt(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let rt=Q.near,At=Q.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(At=p.depthFar)),q.near=O.near=N.near=rt,q.far=O.far=N.far=At,(k!==q.near||I!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),k=q.near,I=q.far),q.layers.mask=Q.layers.mask|6,N.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;let Ht=Q.parent,wt=q.cameras;dt(q,Ht);for(let Zt=0;Zt<wt.length;Zt++)dt(wt[Zt],Ht);wt.length===2?j(q,N,O):q.projectionMatrix.copy(N.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),ut(Q,q,Ht)};function ut(Q,rt,At){At===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(At.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ss*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(Q){c=Q,u!==null&&(u.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Q){return d[Q]};let Vt=null;function Gt(Q,rt){if(h=rt.getViewerPose(l||a),_=rt,h!==null){let At=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Ht=!1;At.length!==q.cameras.length&&(q.cameras.length=0,Ht=!0);for(let J=0;J<At.length;J++){let ft=At[J],P=null;if(m!==null)P=m.getViewport(ft);else{let tt=f.getViewSubImage(u,ft);P=tt.viewport,J===0&&(t.setRenderTargetTextures(b,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(b))}let H=X[J];H===void 0&&(H=new Ve,H.layers.enable(J),H.viewport=new ye,X[J]=H),H.matrix.fromArray(ft.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(ft.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(P.x,P.y,P.width,P.height),J===0&&(q.matrix.copy(H.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ht===!0&&q.cameras.push(H)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let J=f.getDepthInformation(At[0]);J&&J.isValid&&J.texture&&p.init(J,s.renderState)}if(wt&&wt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let J=0;J<At.length;J++){let ft=At[J].camera;if(ft){let P=d[ft];P||(P=new Zs,d[ft]=P);let H=f.getCameraImage(ft);P.sourceTexture=H}}}}for(let At=0;At<w.length;At++){let Ht=S[At],wt=w[At];Ht!==null&&wt!==void 0&&wt.update(Ht,rt,l||a)}Vt&&Vt(Q,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),_=null}let kt=new ld;kt.setAnimationLoop(Gt),this.setAnimationLoop=function(Q){Vt=Q},this.dispose=function(){}}},L3=new me,pd=new Yt;pd.set(-1,0,0,0,1,0,0,0,1);function D3(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Jl(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,A,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,M,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ue&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ue&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=t.get(d),A=M.envMap,b=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(L3.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pd),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,M,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=A*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){let M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N3(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){let S=w.program;i.uniformBlockBinding(b,S)}function l(b,w){let S=s[b.id];S===void 0&&(p(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",M));let R=w.program;i.updateUBOMapping(b,R);let x=t.render.frame;r[b.id]!==x&&(u(b),r[b.id]=x)}function h(b){let w=f();b.__bindingPointIndex=w;let S=n.createBuffer(),R=b.__size,x=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let w=s[b.id],S=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,E=S.length;x<E;x++){let N=S[x];if(Array.isArray(N))for(let O=0,X=N.length;O<X;O++)m(N[O],x,O,R);else m(N,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,w,S,R){if(v(b,w,S,R)===!0){let x=b.__offset,E=b.value;if(Array.isArray(E)){let N=0;for(let O=0;O<E.length;O++){let X=E[O],q=d(X);_(X,b.__data,N),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,b.__data)}}function _(b,w,S){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,S)}function v(b,w,S,R){let x=b.value,E=w+"_"+S;if(R[E]===void 0)return typeof x=="number"||typeof x=="boolean"?R[E]=x:ArrayBuffer.isView(x)?R[E]=x.slice():R[E]=x.clone(),!0;{let N=R[E];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return R[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function p(b){let w=b.uniforms,S=0,R=16;for(let E=0,N=w.length;E<N;E++){let O=Array.isArray(w[E])?w[E]:[w[E]];for(let X=0,q=O.length;X<q;X++){let k=O[X],I=Array.isArray(k.value)?k.value:[k.value];for(let W=0,T=I.length;W<T;W++){let D=I[W],F=d(D),z=S%R,j=z%F.boundary,dt=z+j;S+=j,dt!==0&&R-dt<F.storage&&(S+=R-dt),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=F.storage}}}let x=S%R;return x>0&&(S+=R-x),b.__size=S,b.__cache={},this}function d(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",b),w}function M(b){let w=b.target;w.removeEventListener("dispose",M);let S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var F3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function U3(){return Rn===null&&(Rn=new ua(F3,16,16,xi,xn),Rn.name="DFG_LUT",Rn.minFilter=De,Rn.magFilter=De,Rn.wrapS=Mn,Rn.wrapT=Mn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var To=class{constructor(t={}){let{canvas:e=Du(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Ye}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let v=m,p=new Set([Va,za,ka]),d=new Set([Ye,gn,gs,_s,Oa,Ba]),M=new Uint32Array(4),A=new Int32Array(4),b=new $,w=null,S=null,R=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,X=null,q=null,k=null,I=null;this._outputColorSpace=Xe;let W=0,T=0,D=null,F=-1,z=null,j=new ye,dt=new ye,ut=null,Vt=new Qt(0),Gt=0,kt=e.width,Q=e.height,rt=1,At=null,Ht=null,wt=new ye(0,0,kt,Q),Zt=new ye(0,0,kt,Q),he=!1,J=new ls,ft=!1,P=!1,H=new me,tt=new $,ct=new ye,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Bt(){return D===null?rt:1}let U=i;function ne(y,B){return e.getContext(y,B)}let qt,C,g,V,K,nt,pt,gt,it,at,_t,Ft,bt,xt,Ut,Wt,Kt,G,yt,st,vt,Tt,lt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",on,!1),U===null){let B="webgl2";if(U=ne(B,y),U===null)throw ne(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(y){throw e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",on,!1),Xt("WebGLRenderer: "+y.message),y}function Ot(){qt=new Hm(U),qt.init(),vt=new R3(U,qt),C=new Dm(U,qt,t,vt),g=new A3(U,qt),C.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),q=U.createFramebuffer(),k=U.createFramebuffer(),I=U.createFramebuffer(),V=new $m(U),K=new f3,nt=new C3(U,qt,g,K,C,vt,V),pt=new Gm(N),gt=new Y1(U),Tt=new Im(U,gt),it=new Wm(U,gt,V,Tt),at=new Ym(U,it,gt,Tt,V),G=new qm(U,C,nt),Ut=new Nm(K),_t=new d3(N,pt,qt,C,Tt,Ut),Ft=new D3(N,K),bt=new m3,xt=new b3(qt),Kt=new Pm(N,pt,g,at,_,c),Wt=new T3(N,at,C),lt=new N3(U,V,C,g),yt=new Lm(U,qt,V),st=new Xm(U,qt,V),V.programs=_t.programs,N.capabilities=C,N.extensions=qt,N.properties=K,N.renderLists=bt,N.shadowMap=Wt,N.state=g,N.info=V}v!==Ye&&(E=new Km(v,e.width,e.height,o,s,r));let Dt=new vc(N,U);this.xr=Dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=qt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=qt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(y){y!==void 0&&(rt=y,this.setSize(kt,Q,!1))},this.getSize=function(y){return y.set(kt,Q)},this.setSize=function(y,B,et=!0){if(Dt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=y,Q=B,e.width=Math.floor(y*rt),e.height=Math.floor(B*rt),et===!0&&(e.style.width=y+"px",e.style.height=B+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(kt*rt,Q*rt).floor()},this.setDrawingBufferSize=function(y,B,et){kt=y,Q=B,rt=et,e.width=Math.floor(y*et),e.height=Math.floor(B*et),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(v===Ye){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(wt)},this.setViewport=function(y,B,et,Y){y.isVector4?wt.set(y.x,y.y,y.z,y.w):wt.set(y,B,et,Y),g.viewport(j.copy(wt).multiplyScalar(rt).round())},this.getScissor=function(y){return y.copy(Zt)},this.setScissor=function(y,B,et,Y){y.isVector4?Zt.set(y.x,y.y,y.z,y.w):Zt.set(y,B,et,Y),g.scissor(dt.copy(Zt).multiplyScalar(rt).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(y){g.setScissorTest(he=y)},this.setOpaqueSort=function(y){At=y},this.setTransparentSort=function(y){Ht=y},this.getClearColor=function(y){return y.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,et=!0){let Y=0;if(y){let Z=!1;if(D!==null){let Et=D.texture.format;Z=p.has(Et)}if(Z){let Et=D.texture.type,Rt=d.has(Et),Mt=Kt.getClearColor(),Pt=Kt.getClearAlpha(),Nt=Mt.r,Jt=Mt.g,ee=Mt.b;Rt?(M[0]=Nt,M[1]=Jt,M[2]=ee,M[3]=Pt,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Nt,A[1]=Jt,A[2]=ee,A[3]=Pt,U.clearBufferiv(U.COLOR,0,A))}else Y|=U.COLOR_BUFFER_BIT}B&&(Y|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),X=y},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",on,!1),Kt.dispose(),bt.dispose(),xt.dispose(),K.dispose(),pt.dispose(),at.dispose(),Tt.dispose(),lt.dispose(),_t.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",fh),Dt.removeEventListener("sessionend",ph),Mi.stop()};function fe(y){y.preventDefault(),Yl("WebGLRenderer: Context Lost."),O=!0}function re(){Yl("WebGLRenderer: Context Restored."),O=!1;let y=V.autoReset,B=Wt.enabled,et=Wt.autoUpdate,Y=Wt.needsUpdate,Z=Wt.type;Ot(),V.autoReset=y,Wt.enabled=B,Wt.autoUpdate=et,Wt.needsUpdate=Y,Wt.type=Z}function on(y){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function vn(y){let B=y.target;B.removeEventListener("dispose",vn),Wf(B)}function Wf(y){Xf(y),K.remove(y)}function Xf(y){let B=K.get(y).programs;B!==void 0&&(B.forEach(function(et){_t.releaseProgram(et)}),y.isShaderMaterial&&_t.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,et,Y,Z,Et){B===null&&(B=Lt);let Rt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Mt=Yf(y,B,et,Y,Z);g.setMaterial(Y,Rt);let Pt=et.index,Nt=1;if(Y.wireframe===!0){if(Pt=it.getWireframeAttribute(et),Pt===void 0)return;Nt=2}let Jt=et.drawRange,ee=et.attributes.position,It=Jt.start*Nt,ae=(Jt.start+Jt.count)*Nt;Et!==null&&(It=Math.max(It,Et.start*Nt),ae=Math.min(ae,(Et.start+Et.count)*Nt)),Pt!==null?(It=Math.max(It,0),ae=Math.min(ae,Pt.count)):ee!=null&&(It=Math.max(It,0),ae=Math.min(ae,ee.count));let be=ae-It;if(be<0||be===1/0)return;Tt.setup(Z,Y,Mt,et,Pt);let ge,de=yt;if(Pt!==null&&(ge=gt.get(Pt),de=st,de.setIndex(ge)),Z.isMesh)Y.wireframe===!0?(g.setLineWidth(Y.wireframeLinewidth*Bt()),de.setMode(U.LINES)):de.setMode(U.TRIANGLES);else if(Z.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),g.setLineWidth(Be*Bt()),Z.isLineSegments?de.setMode(U.LINES):Z.isLineLoop?de.setMode(U.LINE_LOOP):de.setMode(U.LINE_STRIP)}else Z.isPoints?de.setMode(U.POINTS):Z.isSprite&&de.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))de.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Be=Z._multiDrawStarts,Ct=Z._multiDrawCounts,He=Z._multiDrawCount,se=Pt?gt.get(Pt).bytesPerElement:1,sn=K.get(Y).currentProgram.getUniforms();for(let bn=0;bn<He;bn++)sn.setValue(U,"_gl_DrawID",bn),de.render(Be[bn]/se,Ct[bn])}else if(Z.isInstancedMesh)de.renderInstances(It,be,Z.count);else if(et.isInstancedBufferGeometry){let Be=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ct=Math.min(et.instanceCount,Be);de.renderInstances(It,be,Ct)}else de.render(It,be)};function dh(y,B,et,Y){X!==null&&y.isNodeMaterial&&X.setObject(Y,y),ft===!0&&Ut.setState(y,et,!1),y.transparent===!0&&y.side===An&&y.forceSinglePass===!1?(y.side=Ue,y.needsUpdate=!0,Er(y,B,Y),y.side=pi,y.needsUpdate=!0,Er(y,B,Y),y.side=An):Er(y,B,Y)}this.compile=function(y,B,et=null){et===null&&(et=y),X!==null&&X.renderStart(y,B,et),S=xt.get(et),S.init(B),x.push(S),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),y!==et&&y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),X!==null&&X.updateLights(S.state.lightsArray),P=this.localClippingEnabled,ft=Ut.init(this.clippingPlanes,P),ft===!0&&Ut.setGlobalState(this.clippingPlanes,B),X!==null&&Wt.render(S.state.shadowsArray,et,B);let Y=new Set;return y.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Et=Z.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){let Mt=Et[Rt];dh(Mt,et,B,Z),Y.add(Mt)}else dh(Et,et,B,Z),Y.add(Et)}),S=x.pop(),X!==null&&X.renderEnd(),Y},this.compileAsync=function(y,B,et=null){let Y=this.compile(y,B,et);return new Promise(Z=>{function Et(){if(Y.forEach(function(Rt){let Pt=K.get(Rt).currentProgram;(Pt===void 0||Pt.isReady())&&Y.delete(Rt)}),Y.size===0){Z(y);return}setTimeout(Et,10)}qt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let qo=null;function $f(y){qo&&qo(y)}function fh(){Mi.stop()}function ph(){Mi.start()}let Mi=new ld;Mi.setAnimationLoop($f),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(y){qo=y,Dt.setAnimationLoop(y),y===null?Mi.stop():Mi.start()},Dt.addEventListener("sessionstart",fh),Dt.addEventListener("sessionend",ph),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;X!==null&&X.renderStart(y,B);let et=Dt.enabled===!0&&Dt.isPresenting===!0,Y=E!==null&&(D===null||et)&&E.begin(N,D);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(B),B=Dt.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,B,D),S=xt.get(y,x.length),S.init(B),S.state.textureUnits=nt.getTextureUnits(),x.push(S),H.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(H,dn,B.reversedDepth),P=this.localClippingEnabled,ft=Ut.init(this.clippingPlanes,P),w=bt.get(y,R.length),w.init(),R.push(w),Dt.enabled===!0&&Dt.isPresenting===!0){let Rt=N.xr.getDepthSensingMesh();Rt!==null&&Yo(Rt,B,-1/0,N.sortObjects)}Yo(y,B,0,N.sortObjects),w.finish(),X!==null&&X.updateLights(S.state.lightsArray),N.sortObjects===!0&&w.sort(At,Ht),mt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,mt&&Kt.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Ut.beginShadows();let Z=S.state.shadowsArray;if(Wt.render(Z,y,B),ft===!0&&Ut.endShadows(),(Y&&E.hasRenderPass())===!1){let Rt=w.opaque,Mt=w.transmissive;if(S.setupLights(),B.isArrayCamera){let Pt=B.cameras;if(Mt.length>0)for(let Nt=0,Jt=Pt.length;Nt<Jt;Nt++){let ee=Pt[Nt];gh(Rt,Mt,y,ee)}mt&&Kt.render(y);for(let Nt=0,Jt=Pt.length;Nt<Jt;Nt++){let ee=Pt[Nt];mh(w,y,ee,ee.viewport)}}else Mt.length>0&&gh(Rt,Mt,y,B),mt&&Kt.render(y),mh(w,y,B)}D!==null&&T===0&&(nt.updateMultisampleRenderTarget(D),nt.updateRenderTargetMipmap(D)),Y&&E.end(N),y.isScene===!0&&y.onAfterRender(N,y,B),Tt.resetDefaultState(),F=-1,z=null,x.pop(),x.length>0?(S=x[x.length-1],nt.setTextureUnits(S.state.textureUnits),ft===!0&&Ut.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,X!==null&&X.renderEnd()};function Yo(y,B,et,Y){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)et=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLightProbeGrid)S.pushLightProbeGrid(y);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(J)){Y&&ct.setFromMatrixPosition(y.matrixWorld).applyMatrix4(H);let Rt=at.update(y),Mt=y.material;Mt.visible&&w.push(y,Rt,Mt,et,ct.z,null,B)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(J))){let Rt=at.update(y),Mt=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ct.copy(y.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ct.copy(Rt.boundingSphere.center)),ct.applyMatrix4(y.matrixWorld).applyMatrix4(H)),Array.isArray(Mt)){let Pt=Rt.groups;for(let Nt=0,Jt=Pt.length;Nt<Jt;Nt++){let ee=Pt[Nt],It=Mt[ee.materialIndex];It&&It.visible&&w.push(y,Rt,It,et,ct.z,ee,B)}}else Mt.visible&&w.push(y,Rt,Mt,et,ct.z,null,B)}}let Et=y.children;for(let Rt=0,Mt=Et.length;Rt<Mt;Rt++)Yo(Et[Rt],B,et,Y)}function mh(y,B,et,Y){let{opaque:Z,transmissive:Et,transparent:Rt}=y;S.setupLightsView(et),ft===!0&&Ut.setGlobalState(N.clippingPlanes,et),Y&&g.viewport(j.copy(Y)),Z.length>0&&wr(Z,B,et),Et.length>0&&wr(Et,B,et),Rt.length>0&&wr(Rt,B,et),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function gh(y,B,et,Y){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let It=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new qe(1,1,{generateMipmaps:!0,type:It?xn:Ye,minFilter:gi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let Et=S.state.transmissionRenderTarget[Y.id],Rt=Y.viewport||j;Et.setSize(Rt.z*N.transmissionResolutionScale,Rt.w*N.transmissionResolutionScale);let Mt=N.getRenderTarget(),Pt=N.getActiveCubeFace(),Nt=N.getActiveMipmapLevel();N.setRenderTarget(Et),N.getClearColor(Vt),Gt=N.getClearAlpha(),Gt<1&&N.setClearColor(16777215,.5),N.clear(),mt&&Kt.render(et);let Jt=N.toneMapping;N.toneMapping=mn;let ee=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),ft===!0&&Ut.setGlobalState(N.clippingPlanes,Y),wr(y,et,Y),nt.updateMultisampleRenderTarget(Et),nt.updateRenderTargetMipmap(Et),qt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ae=0,be=B.length;ae<be;ae++){let ge=B[ae],{object:de,geometry:Be,material:Ct,group:He}=ge;if(Ct.side===An&&de.layers.test(Y.layers)){let se=Ct.side;Ct.side=Ue,Ct.needsUpdate=!0,_h(de,et,Y,Be,Ct,He),Ct.side=se,Ct.needsUpdate=!0,It=!0}}It===!0&&(nt.updateMultisampleRenderTarget(Et),nt.updateRenderTargetMipmap(Et))}N.setRenderTarget(Mt,Pt,Nt),N.setClearColor(Vt,Gt),ee!==void 0&&(Y.viewport=ee),N.toneMapping=Jt}function wr(y,B,et){let Y=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Et=y.length;Z<Et;Z++){let Rt=y[Z],{object:Mt,geometry:Pt,group:Nt}=Rt,Jt=Rt.material;Jt.allowOverride===!0&&Y!==null&&(Jt=Y),Mt.layers.test(et.layers)&&_h(Mt,B,et,Pt,Jt,Nt)}}function _h(y,B,et,Y,Z,Et){X!==null&&Z.isNodeMaterial&&X.setObject(y,Z),y.onBeforeRender(N,B,et,Y,Z,Et),y.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Z.onBeforeRender(N,B,et,Y,y,Et),Z.transparent===!0&&Z.side===An&&Z.forceSinglePass===!1?(Z.side=Ue,Z.needsUpdate=!0,N.renderBufferDirect(et,B,Y,Z,y,Et),Z.side=pi,Z.needsUpdate=!0,N.renderBufferDirect(et,B,Y,Z,y,Et),Z.side=An):N.renderBufferDirect(et,B,Y,Z,y,Et),y.onAfterRender(N,B,et,Y,Z,Et)}function Er(y,B,et){B.isScene!==!0&&(B=Lt);let Y=K.get(y),Z=S.state.lights,Et=S.state.shadowsArray,Rt=Z.state.version,Mt=_t.getParameters(y,Z.state,Et,B,et,S.state.lightProbeGridArray),Pt=_t.getProgramCacheKey(Mt),Nt=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let Jt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=pt.get(y.envMap||Y.environment,Jt),Y.envMapRotation=Y.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",vn),Nt=new Map,Y.programs=Nt);let ee=Nt.get(Pt);if(ee!==void 0){if(Y.currentProgram===ee&&Y.lightsStateVersion===Rt)return yh(y,Mt),ee}else Mt.uniforms=_t.getUniforms(y),X!==null&&y.isNodeMaterial&&X.build(y,et,Mt),y.onBeforeCompile(Mt,N),ee=_t.acquireProgram(Mt,Pt),Nt.set(Pt,ee),Y.uniforms=Mt.uniforms;let It=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(It.clippingPlanes=Ut.uniform),yh(y,Mt),Y.needsLights=Kf(y),Y.lightsStateVersion=Rt,Y.needsLights&&(It.ambientLightColor.value=Z.state.ambient,It.lightProbe.value=Z.state.probe,It.sunLights.value=Z.state.sun,It.sunLightShadows.value=Z.state.sunShadow,It.directionalLights.value=Z.state.directional,It.directionalLightShadows.value=Z.state.directionalShadow,It.spotLights.value=Z.state.spot,It.spotLightShadows.value=Z.state.spotShadow,It.rectAreaLights.value=Z.state.rectArea,It.ltc_1.value=Z.state.rectAreaLTC1,It.ltc_2.value=Z.state.rectAreaLTC2,It.pointLights.value=Z.state.point,It.pointLightShadows.value=Z.state.pointShadow,It.hemisphereLights.value=Z.state.hemi,It.sunShadowMatrix.value=Z.state.sunShadowMatrix,It.sunShadowCascade.value=Z.state.sunShadowCascade,It.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,It.spotLightMatrix.value=Z.state.spotLightMatrix,It.spotLightMap.value=Z.state.spotLightMap,It.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=S.state.lightProbeGridArray.length>0,Y.currentProgram=ee,Y.uniformsList=null,ee}function xh(y){if(y.uniformsList===null){let B=y.currentProgram.getUniforms();y.uniformsList=bs.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function yh(y,B){let et=K.get(y);et.outputColorSpace=B.outputColorSpace,et.batching=B.batching,et.batchingColor=B.batchingColor,et.instancing=B.instancing,et.instancingColor=B.instancingColor,et.instancingMorph=B.instancingMorph,et.skinning=B.skinning,et.morphTargets=B.morphTargets,et.morphNormals=B.morphNormals,et.morphColors=B.morphColors,et.morphTargetsCount=B.morphTargetsCount,et.numClippingPlanes=B.numClippingPlanes,et.numIntersection=B.numClipIntersection,et.vertexAlphas=B.vertexAlphas,et.vertexTangents=B.vertexTangents,et.toneMapping=B.toneMapping}function qf(y,B){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(B.matrixWorld);for(let et=0,Y=y.length;et<Y;et++){let Z=y[et];if(Z.texture!==null&&Z.boundingBox.containsPoint(b))return Z}return null}function Yf(y,B,et,Y,Z){B.isScene!==!0&&(B=Lt),nt.resetTextureUnits();let Et=B.fog,Rt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Mt=D===null?N.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ie.workingColorSpace,Pt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Nt=pt.get(Y.envMap||Rt,Pt),Jt=Y.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!et.morphAttributes.position,ae=!!et.morphAttributes.normal,be=!!et.morphAttributes.color,ge=mn;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ge=N.toneMapping);let de=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Be=de!==void 0?de.length:0,Ct=K.get(Y),He=S.state.lights;if(ft===!0&&(P===!0||y!==z)){let pe=y===z&&Y.id===F;Ut.setState(Y,y,pe)}let se=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==He.state.version||Ct.outputColorSpace!==Mt||Z.isBatchedMesh&&Ct.batching===!1||!Z.isBatchedMesh&&Ct.batching===!0||Z.isBatchedMesh&&Ct.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ct.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ct.instancing===!1||!Z.isInstancedMesh&&Ct.instancing===!0||Z.isSkinnedMesh&&Ct.skinning===!1||!Z.isSkinnedMesh&&Ct.skinning===!0||Z.isInstancedMesh&&Ct.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ct.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ct.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ct.instancingMorph===!1&&Z.morphTexture!==null||Ct.envMap!==Nt||Y.fog===!0&&Ct.fog!==Et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Ut.numPlanes||Ct.numIntersection!==Ut.numIntersection)||Ct.vertexAlphas!==Jt||Ct.vertexTangents!==ee||Ct.morphTargets!==It||Ct.morphNormals!==ae||Ct.morphColors!==be||Ct.toneMapping!==ge||Ct.morphTargetsCount!==Be||!!Ct.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Ct.__version=Y.version);let sn=Ct.currentProgram;se===!0&&(sn=Er(Y,B,Z),X&&Y.isNodeMaterial&&X.onUpdateProgram(Y,sn,Ct));let bn=!1,Zn=!1,ki=!1,ue=sn.getUniforms(),ve=Ct.uniforms;if(g.useProgram(sn.program)&&(bn=!0,Zn=!0,ki=!0),Y.id!==F&&(F=Y.id,Zn=!0),Ct.needsLights){let pe=qf(S.state.lightProbeGridArray,Z);Ct.lightProbeGrid!==pe&&(Ct.lightProbeGrid=pe,Zn=!0)}if(bn||z!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ue.setValue(U,"projectionMatrix",y.projectionMatrix),ue.setValue(U,"viewMatrix",y.matrixWorldInverse);let Jn=ue.map.cameraPosition;Jn!==void 0&&Jn.setValue(U,tt.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ue.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),z!==y&&(z=y,Zn=!0,ki=!0)}if(Ct.needsLights&&(He.state.sunShadowMap.length>0&&ue.setValue(U,"sunShadowMap",He.state.sunShadowMap,nt),He.state.directionalShadowMap.length>0&&ue.setValue(U,"directionalShadowMap",He.state.directionalShadowMap,nt),He.state.spotShadowMap.length>0&&ue.setValue(U,"spotShadowMap",He.state.spotShadowMap,nt),He.state.pointShadowMap.length>0&&ue.setValue(U,"pointShadowMap",He.state.pointShadowMap,nt)),Z.isSkinnedMesh){ue.setOptional(U,Z,"bindMatrix"),ue.setOptional(U,Z,"bindMatrixInverse");let pe=Z.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),ue.setValue(U,"boneTexture",pe.boneTexture,nt))}Z.isBatchedMesh&&(ue.setOptional(U,Z,"batchingTexture"),ue.setValue(U,"batchingTexture",Z._matricesTexture,nt),ue.setOptional(U,Z,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",Z._indirectTexture,nt),ue.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",Z._colorsTexture,nt));let Kn=et.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&G.update(Z,et,sn),(Zn||Ct.receiveShadow!==Z.receiveShadow)&&(Ct.receiveShadow=Z.receiveShadow,ue.setValue(U,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(ve.envMapIntensity.value=B.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=U3()),Zn){if(ue.setValue(U,"toneMappingExposure",N.toneMappingExposure),Ct.needsLights&&Zf(ve,ki),Et&&Y.fog===!0&&Ft.refreshFogUniforms(ve,Et),Ft.refreshMaterialUniforms(ve,Y,rt,Q,S.state.transmissionRenderTarget[y.id]),Ct.needsLights&&Ct.lightProbeGrid){let pe=Ct.lightProbeGrid;ve.probesSH.value=pe.texture,ve.probesMin.value.copy(pe.boundingBox.min),ve.probesMax.value.copy(pe.boundingBox.max),ve.probesResolution.value.copy(pe.resolution)}bs.upload(U,xh(Ct),ve,nt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(bs.upload(U,xh(Ct),ve,nt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ue.setValue(U,"center",Z.center),ue.setValue(U,"modelViewMatrix",Z.modelViewMatrix),ue.setValue(U,"normalMatrix",Z.normalMatrix),ue.setValue(U,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let pe=Y.uniformsGroups;for(let Jn=0,zi=pe.length;Jn<zi;Jn++){let bh=pe[Jn];lt.update(bh,sn),lt.bind(bh,sn)}}return sn}function Zf(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.sunLights.needsUpdate=B,y.sunLightShadows.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Kf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,B,et){let Y=K.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(y.texture).__webglTexture=B,K.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:et,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){let et=K.get(y);et.__webglFramebuffer=B,et.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,et=0){D=y,W=B,T=et;let Y=null,Z=!1,Et=!1;if(y){let Mt=K.get(y);if(Mt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,Mt.__webglFramebuffer),j.copy(y.viewport),dt.copy(y.scissor),ut=y.scissorTest,g.viewport(j),g.scissor(dt),g.setScissorTest(ut),F=-1;return}else if(Mt.__webglFramebuffer===void 0)nt.setupRenderTarget(y);else if(Mt.__hasExternalTextures)nt.rebindTextures(y,K.get(y.texture).__webglTexture,K.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Jt=y.depthTexture;if(Mt.__boundDepthTexture!==Jt){if(Jt!==null&&K.has(Jt)&&(y.width!==Jt.image.width||y.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(y)}}let Pt=y.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Et=!0);let Nt=K.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[B])?Y=Nt[B][et]:Y=Nt[B],Z=!0):y.samples>0&&nt.useMultisampledRTT(y)===!1?Y=K.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?Y=Nt[et]:Y=Nt,j.copy(y.viewport),dt.copy(y.scissor),ut=y.scissorTest}else j.copy(wt).multiplyScalar(rt).floor(),dt.copy(Zt).multiplyScalar(rt).floor(),ut=he;if(et!==0&&(Y=q),g.bindFramebuffer(U.FRAMEBUFFER,Y)&&g.drawBuffers(y,Y),g.viewport(j),g.scissor(dt),g.setScissorTest(ut),Z){let Mt=K.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,et)}else if(Et){let Mt=B;for(let Pt=0;Pt<y.textures.length;Pt++){let Nt=K.get(y.textures[Pt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pt,Nt.__webglTexture,et,Mt)}}else if(y!==null&&et!==0){let Mt=K.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,et)}F=-1};function vh(y){let B=K.get(y);return(B.__readFormat!==y.format||B.__readType!==y.type)&&(B.__readFormat=y.format,B.__readType=y.type,B.__formatReadable=C.textureFormatReadable(y.format),B.__typeReadable=C.textureTypeReadable(y.type)),B}this.readRenderTargetPixels=function(y,B,et,Y,Z,Et,Rt,Mt=0){if(!(y&&y.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){g.bindFramebuffer(U.FRAMEBUFFER,Pt);try{let Nt=y.textures[Mt],Jt=Nt.format,ee=Nt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Mt);let It=vh(Nt);if(It.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-Y&&et>=0&&et<=y.height-Z&&U.readPixels(B,et,Y,Z,vt.convert(Jt),vt.convert(ee),Et)}finally{let Nt=D!==null?K.get(D).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(y,B,et,Y,Z,Et,Rt,Mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt)if(B>=0&&B<=y.width-Y&&et>=0&&et<=y.height-Z){g.bindFramebuffer(U.FRAMEBUFFER,Pt);let Nt=y.textures[Mt],Jt=Nt.format,ee=Nt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Mt);let It=vh(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ae),U.bufferData(U.PIXEL_PACK_BUFFER,Et.byteLength,U.STREAM_READ),U.readPixels(B,et,Y,Z,vt.convert(Jt),vt.convert(ee),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let be=D!==null?K.get(D).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,be);let ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Fu(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Et),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ae),U.deleteSync(ge),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,et=0){let Y=Math.pow(2,-et),Z=Math.floor(y.image.width*Y),Et=Math.floor(y.image.height*Y),Rt=B!==null?B.x:0,Mt=B!==null?B.y:0;nt.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,et,0,0,Rt,Mt,Z,Et),g.unbindTexture()},this.copyTextureToTexture=function(y,B,et=null,Y=null,Z=0,Et=0){let Rt,Mt,Pt,Nt,Jt,ee,It,ae,be,ge=y.isCompressedTexture?y.mipmaps[Et]:y.image;if(et!==null)Rt=et.max.x-et.min.x,Mt=et.max.y-et.min.y,Pt=et.isBox3?et.max.z-et.min.z:1,Nt=et.min.x,Jt=et.min.y,ee=et.isBox3?et.min.z:0;else{let ve=Math.pow(2,-Z);Rt=Math.floor(ge.width*ve),Mt=Math.floor(ge.height*ve),y.isDataArrayTexture?Pt=ge.depth:y.isData3DTexture?Pt=Math.floor(ge.depth*ve):Pt=1,Nt=0,Jt=0,ee=0}Y!==null?(It=Y.x,ae=Y.y,be=Y.z):(It=0,ae=0,be=0);let de=vt.convert(B.format),Be=vt.convert(B.type),Ct;B.isData3DTexture?(nt.setTexture3D(B,0),Ct=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(nt.setTexture2DArray(B,0),Ct=U.TEXTURE_2D_ARRAY):(nt.setTexture2D(B,0),Ct=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let He=g.getParameter(U.UNPACK_ROW_LENGTH),se=g.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=g.getParameter(U.UNPACK_SKIP_PIXELS),bn=g.getParameter(U.UNPACK_SKIP_ROWS),Zn=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),g.pixelStorei(U.UNPACK_SKIP_ROWS,Jt),g.pixelStorei(U.UNPACK_SKIP_IMAGES,ee);let ki=y.isDataArrayTexture||y.isData3DTexture,ue=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){let ve=K.get(y),Kn=K.get(B),pe=K.get(ve.__renderTarget),Jn=K.get(Kn.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,pe.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let zi=0;zi<Pt;zi++)ki&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(y).__webglTexture,Z,ee+zi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(B).__webglTexture,Et,be+zi)),U.blitFramebuffer(Nt,Jt,Rt,Mt,It,ae,Rt,Mt,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||y.isRenderTargetTexture||K.has(y)){let ve=K.get(y),Kn=K.get(B);g.bindFramebuffer(U.READ_FRAMEBUFFER,k),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,I);for(let pe=0;pe<Pt;pe++)ki?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.__webglTexture,Z,ee+pe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,Z),ue?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kn.__webglTexture,Et,be+pe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kn.__webglTexture,Et),Z!==0?U.blitFramebuffer(Nt,Jt,Rt,Mt,It,ae,Rt,Mt,U.COLOR_BUFFER_BIT,U.NEAREST):ue?U.copyTexSubImage3D(Ct,Et,It,ae,be+pe,Nt,Jt,Rt,Mt):U.copyTexSubImage2D(Ct,Et,It,ae,Nt,Jt,Rt,Mt);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ue?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Ct,Et,It,ae,be,Rt,Mt,Pt,de,Be,ge.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,Et,It,ae,be,Rt,Mt,Pt,de,ge.data):U.texSubImage3D(Ct,Et,It,ae,be,Rt,Mt,Pt,de,Be,ge):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Et,It,ae,Rt,Mt,de,Be,ge.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Et,It,ae,ge.width,ge.height,de,ge.data):U.texSubImage2D(U.TEXTURE_2D,Et,It,ae,Rt,Mt,de,Be,ge);g.pixelStorei(U.UNPACK_ROW_LENGTH,He),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se),g.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),g.pixelStorei(U.UNPACK_SKIP_ROWS,bn),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Zn),Et===0&&B.generateMipmaps&&U.generateMipmap(Ct),g.unbindTexture()},this.initRenderTarget=function(y){K.get(y).__webglFramebuffer===void 0&&nt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?nt.setTextureCube(y,0):y.isData3DTexture?nt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?nt.setTexture2DArray(y,0):nt.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){W=0,T=0,D=null,g.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var md={type:"change"},Sc={type:"start"},_d={type:"end"},Ro=new zn,gd=new Qe,O3=Math.cos(70*Kl.DEG2RAD),Re=new $,Ze=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6,Po=class extends sr{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new tn,this._lastTargetPosition=new $,this._quat=new tn().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fs,this._sphericalDelta=new fs,this._scale=1,this._panOffset=new $,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new $,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k3.bind(this),this._onPointerDown=B3.bind(this),this._onPointerUp=z3.bind(this),this._onContextMenu=q3.bind(this),this._onMouseWheel=H3.bind(this),this._onKeyDown=W3.bind(this),this._onTouchStart=X3.bind(this),this._onTouchMove=$3.bind(this),this._onMouseDown=V3.bind(this),this._onMouseMove=G3.bind(this),this._interceptControlDown=Y3.bind(this),this._interceptControlUp=Z3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(md),this.update(),this.state=ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Re.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new $(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ro.origin.copy(this.object.position),Ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ro.direction))<O3?this.object.lookAt(this.target):(gd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ro.intersectPlane(gd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(md),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function B3(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function k3(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function z3(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_d),this.state=ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function V3(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ce.DOLLY;break;case di.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}break;case di.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Sc)}function G3(n){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function H3(n){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(n.preventDefault(),this.dispatchEvent(Sc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_d))}function W3(n){this.enabled!==!1&&this._handleKeyDown(n)}function X3(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ce.TOUCH_ROTATE;break;case fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ce.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Sc)}function $3(n){switch(this._trackPointer(n),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ce.NONE}}function q3(n){this.enabled!==!1&&n.preventDefault()}function Y3(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z3(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var xd={type:"FeatureCollection",name:"ne_110m_land",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-66.290031,-81.000327,-59.572095,-79.628679],geometry:{type:"Polygon",coordinates:[[[-59.572095,-80.040179],[-59.865849,-80.549657],[-60.159656,-81.000327],[-62.255393,-80.863178],[-64.488125,-80.921934],[-65.741666,-80.588827],[-65.741666,-80.549657],[-66.290031,-80.255773],[-64.037688,-80.294944],[-61.883246,-80.39287],[-61.138976,-79.981371],[-60.610119,-79.628679],[-59.572095,-80.040179]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-163.712896,-79.634209,-159.208184,-78.223338],geometry:{type:"Polygon",coordinates:[[[-159.208184,-79.497059],[-161.127601,-79.634209],[-162.439847,-79.281465],[-163.027408,-78.928774],[-163.066604,-78.869966],[-163.712896,-78.595667],[-163.712896,-78.595667],[-163.105801,-78.223338],[-161.245113,-78.380176],[-160.246208,-78.693645],[-159.482405,-79.046338],[-159.208184,-79.497059]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:0},bbox:[-54.164259,-81.025442,-43.333267,-77.831476],geometry:{type:"Polygon",coordinates:[[[-45.154758,-78.04707],[-43.920828,-78.478103],[-43.48995,-79.08556],[-43.372438,-79.516645],[-43.333267,-80.026123],[-44.880537,-80.339644],[-46.506174,-80.594357],[-48.386421,-80.829485],[-50.482107,-81.025442],[-52.851988,-80.966685],[-54.164259,-80.633528],[-53.987991,-80.222028],[-51.853134,-79.94773],[-50.991326,-79.614623],[-50.364595,-79.183487],[-49.914131,-78.811209],[-49.306959,-78.458569],[-48.660616,-78.047018],[-48.660616,-78.047019],[-48.151396,-78.04707],[-46.662857,-77.831476],[-45.154758,-78.04707]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-122.621735,-74.08881,-118.724143,-73.324619],geometry:{type:"Polygon",coordinates:[[[-121.211511,-73.50099],[-119.918851,-73.657725],[-118.724143,-73.481353],[-119.292119,-73.834097],[-120.232217,-74.08881],[-121.62283,-74.010468],[-122.621735,-73.657778],[-122.621735,-73.657777],[-122.406245,-73.324619],[-121.211511,-73.50099]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-127.28313,-73.873268,-124.031882,-73.246226],geometry:{type:"Polygon",coordinates:[[[-125.559566,-73.481353],[-124.031882,-73.873268],[-124.619469,-73.834097],[-125.912181,-73.736118],[-127.28313,-73.461769],[-127.28313,-73.461768],[-126.558472,-73.246226],[-125.559566,-73.481353]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-102.330725,-72.521205,-96.20035,-71.717792],geometry:{type:"Polygon",coordinates:[[[-98.98155,-71.933334],[-97.884743,-72.070535],[-96.787937,-71.952971],[-96.20035,-72.521205],[-96.983765,-72.442864],[-98.198083,-72.482035],[-99.432013,-72.442864],[-100.783455,-72.50162],[-101.801868,-72.305663],[-102.330725,-71.894164],[-102.330725,-71.894164],[-101.703967,-71.717792],[-100.430919,-71.854993],[-98.98155,-71.933334]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-75.012625,-72.503842,-68.333834,-68.87874],geometry:{type:"Polygon",coordinates:[[[-68.451346,-70.955823],[-68.333834,-71.406493],[-68.510128,-71.798407],[-68.784297,-72.170736],[-69.959471,-72.307885],[-71.075889,-72.503842],[-72.388134,-72.484257],[-71.8985,-72.092343],[-73.073622,-72.229492],[-74.19004,-72.366693],[-74.953895,-72.072757],[-75.012625,-71.661258],[-73.915819,-71.269345],[-73.915819,-71.269344],[-73.230331,-71.15178],[-72.074717,-71.190951],[-71.780962,-70.681473],[-71.72218,-70.309196],[-71.741791,-69.505782],[-71.173815,-69.035475],[-70.253252,-68.87874],[-69.724447,-69.251017],[-69.489422,-69.623346],[-69.058518,-70.074016],[-68.725541,-70.505153],[-68.451346,-70.955823]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,-90,180,-63.27066],geometry:{type:"Polygon",coordinates:[[[-58.614143,-64.152467],[-59.045073,-64.36801],[-59.789342,-64.211223],[-60.611928,-64.309202],[-61.297416,-64.54433],[-62.0221,-64.799094],[-62.51176,-65.09303],[-62.648858,-65.484942],[-62.590128,-65.857219],[-62.120079,-66.190326],[-62.805567,-66.425505],[-63.74569,-66.503847],[-64.294106,-66.837004],[-64.881693,-67.150474],[-65.508425,-67.58161],[-65.665082,-67.953887],[-65.312545,-68.365335],[-64.783715,-68.678908],[-63.961103,-68.913984],[-63.1973,-69.227556],[-62.785955,-69.619419],[-62.570516,-69.991747],[-62.276736,-70.383661],[-61.806661,-70.716768],[-61.512906,-71.089045],[-61.375809,-72.010074],[-61.081977,-72.382351],[-61.003661,-72.774265],[-60.690269,-73.166179],[-60.827367,-73.695242],[-61.375809,-74.106742],[-61.96337,-74.439848],[-63.295201,-74.576997],[-63.74569,-74.92974],[-64.352836,-75.262847],[-65.860987,-75.635124],[-67.192818,-75.79191],[-68.446282,-76.007452],[-69.797724,-76.222995],[-70.600724,-76.634494],[-72.206776,-76.673665],[-73.969536,-76.634494],[-75.555977,-76.712887],[-77.24037,-76.712887],[-76.926979,-77.104802],[-75.399294,-77.28107],[-74.282876,-77.55542],[-73.656119,-77.908112],[-74.772536,-78.221633],[-76.4961,-78.123654],[-77.925858,-78.378419],[-77.984666,-78.789918],[-78.023785,-79.181833],[-76.848637,-79.514939],[-76.633224,-79.887216],[-75.360097,-80.259545],[-73.244852,-80.416331],[-71.442946,-80.69063],[-70.013163,-81.004151],[-68.191646,-81.317672],[-65.704279,-81.474458],[-63.25603,-81.748757],[-61.552026,-82.042692],[-59.691416,-82.37585],[-58.712121,-82.846106],[-58.222487,-83.218434],[-57.008117,-82.865691],[-55.362894,-82.571755],[-53.619771,-82.258235],[-51.543644,-82.003521],[-49.76135,-81.729171],[-47.273931,-81.709586],[-44.825708,-81.846735],[-42.808363,-82.081915],[-42.16202,-81.65083],[-40.771433,-81.356894],[-38.244818,-81.337309],[-36.26667,-81.121715],[-34.386397,-80.906172],[-32.310296,-80.769023],[-30.097098,-80.592651],[-28.549802,-80.337938],[-29.254901,-79.985195],[-29.685805,-79.632503],[-29.685805,-79.260226],[-31.624808,-79.299397],[-33.681324,-79.456132],[-35.639912,-79.456132],[-35.914107,-79.083855],[-35.77701,-78.339248],[-35.326546,-78.123654],[-33.896763,-77.888526],[-32.212369,-77.65345],[-30.998051,-77.359515],[-29.783732,-77.065579],[-28.882779,-76.673665],[-27.511752,-76.497345],[-26.160336,-76.360144],[-25.474822,-76.281803],[-23.927552,-76.24258],[-22.458598,-76.105431],[-21.224694,-75.909474],[-20.010375,-75.674346],[-18.913543,-75.439218],[-17.522982,-75.125698],[-16.641589,-74.79254],[-15.701491,-74.498604],[-15.40771,-74.106742],[-16.46532,-73.871614],[-16.112784,-73.460114],[-15.446855,-73.146542],[-14.408805,-72.950585],[-13.311973,-72.715457],[-12.293508,-72.401936],[-11.510067,-72.010074],[-11.020433,-71.539767],[-10.295774,-71.265416],[-9.101015,-71.324224],[-8.611381,-71.65733],[-7.416622,-71.696501],[-7.377451,-71.324224],[-6.868232,-70.93231],[-5.790985,-71.030289],[-5.536375,-71.402617],[-4.341667,-71.461373],[-3.048981,-71.285053],[-1.795492,-71.167438],[-.659489,-71.226246],[-.228637,-71.637745],[.868195,-71.304639],[1.886686,-71.128267],[3.022638,-70.991118],[4.139055,-70.853917],[5.157546,-70.618789],[6.273912,-70.462055],[7.13572,-70.246512],[7.742866,-69.893769],[8.48711,-70.148534],[9.525135,-70.011333],[10.249845,-70.48164],[10.817821,-70.834332],[11.953824,-70.638375],[12.404287,-70.246512],[13.422778,-69.972162],[14.734998,-70.030918],[15.126757,-70.403247],[15.949342,-70.030918],[17.026589,-69.913354],[18.201711,-69.874183],[19.259373,-69.893769],[20.375739,-70.011333],[21.452985,-70.07014],[21.923034,-70.403247],[22.569403,-70.697182],[23.666184,-70.520811],[24.841357,-70.48164],[25.977309,-70.48164],[27.093726,-70.462055],[28.09258,-70.324854],[29.150242,-70.20729],[30.031583,-69.93294],[30.971733,-69.75662],[31.990172,-69.658641],[32.754053,-69.384291],[33.302443,-68.835642],[33.870419,-68.502588],[34.908495,-68.659271],[35.300202,-69.012014],[36.16201,-69.247142],[37.200035,-69.168748],[37.905108,-69.52144],[38.649404,-69.776205],[39.667894,-69.541077],[40.020431,-69.109941],[40.921358,-68.933621],[41.959434,-68.600514],[42.938702,-68.463313],[44.113876,-68.267408],[44.897291,-68.051866],[45.719928,-67.816738],[46.503343,-67.601196],[47.44344,-67.718759],[48.344419,-67.366068],[48.990736,-67.091718],[49.930885,-67.111303],[50.753471,-66.876175],[50.949325,-66.523484],[51.791547,-66.249133],[52.614133,-66.053176],[53.613038,-65.89639],[54.53355,-65.818049],[55.414943,-65.876805],[56.355041,-65.974783],[57.158093,-66.249133],[57.255968,-66.680218],[58.137361,-67.013324],[58.744508,-67.287675],[59.939318,-67.405239],[60.605221,-67.679589],[61.427806,-67.953887],[62.387489,-68.012695],[63.19049,-67.816738],[64.052349,-67.405239],[64.992447,-67.620729],[65.971715,-67.738345],[66.911864,-67.855909],[67.891133,-67.934302],[68.890038,-67.934302],[69.712624,-68.972791],[69.673453,-69.227556],[69.555941,-69.678226],[68.596258,-69.93294],[67.81274,-70.305268],[67.949889,-70.697182],[69.066307,-70.677545],[68.929157,-71.069459],[68.419989,-71.441788],[67.949889,-71.853287],[68.71377,-72.166808],[69.869307,-72.264787],[71.024895,-72.088415],[71.573285,-71.696501],[71.906288,-71.324224],[72.454627,-71.010703],[73.08141,-70.716768],[73.33602,-70.364024],[73.864877,-69.874183],[74.491557,-69.776205],[75.62756,-69.737034],[76.626465,-69.619419],[77.644904,-69.462684],[78.134539,-69.07077],[78.428371,-68.698441],[79.113859,-68.326216],[80.093127,-68.071503],[80.93535,-67.875546],[81.483792,-67.542388],[82.051767,-67.366068],[82.776426,-67.209282],[83.775331,-67.30726],[84.676206,-67.209282],[85.655527,-67.091718],[86.752359,-67.150474],[87.477017,-66.876175],[87.986289,-66.209911],[88.358411,-66.484261],[88.828408,-66.954568],[89.67063,-67.150474],[90.630365,-67.228867],[91.5901,-67.111303],[92.608539,-67.189696],[93.548637,-67.209282],[94.17542,-67.111303],[95.017591,-67.170111],[95.781472,-67.385653],[96.682399,-67.248504],[97.759646,-67.248504],[98.68021,-67.111303],[99.718182,-67.248504],[100.384188,-66.915346],[100.893356,-66.58224],[101.578896,-66.30789],[102.832411,-65.563284],[103.478676,-65.700485],[104.242557,-65.974783],[104.90846,-66.327527],[106.181561,-66.934931],[107.160881,-66.954568],[108.081393,-66.954568],[109.15864,-66.837004],[110.235835,-66.699804],[111.058472,-66.425505],[111.74396,-66.13157],[112.860378,-66.092347],[113.604673,-65.876805],[114.388088,-66.072762],[114.897308,-66.386283],[115.602381,-66.699804],[116.699161,-66.660633],[117.384701,-66.915346],[118.57946,-67.170111],[119.832924,-67.268089],[120.871,-67.189696],[121.654415,-66.876175],[122.320369,-66.562654],[123.221296,-66.484261],[124.122274,-66.621462],[125.160247,-66.719389],[126.100396,-66.562654],[127.001427,-66.562654],[127.882768,-66.660633],[128.80328,-66.758611],[129.704259,-66.58224],[130.781454,-66.425505],[131.799945,-66.386283],[132.935896,-66.386283],[133.85646,-66.288304],[134.757387,-66.209963],[135.031582,-65.72007],[135.070753,-65.308571],[135.697485,-65.582869],[135.873805,-66.033591],[136.206705,-66.44509],[136.618049,-66.778197],[137.460271,-66.954568],[138.596223,-66.895761],[139.908442,-66.876175],[140.809421,-66.817367],[142.121692,-66.817367],[143.061842,-66.797782],[144.374061,-66.837004],[145.490427,-66.915346],[146.195552,-67.228867],[145.999699,-67.601196],[146.646067,-67.895131],[147.723263,-68.130259],[148.839629,-68.385024],[150.132314,-68.561292],[151.483705,-68.71813],[152.502247,-68.874813],[153.638199,-68.894502],[154.284567,-68.561292],[155.165857,-68.835642],[155.92979,-69.149215],[156.811132,-69.384291],[158.025528,-69.482269],[159.181013,-69.599833],[159.670699,-69.991747],[160.80665,-70.226875],[161.570479,-70.579618],[162.686897,-70.736353],[163.842434,-70.716768],[164.919681,-70.775524],[166.11444,-70.755938],[167.309095,-70.834332],[168.425616,-70.971481],[169.463589,-71.20666],[170.501665,-71.402617],[171.20679,-71.696501],[171.089227,-72.088415],[170.560422,-72.441159],[170.109958,-72.891829],[169.75737,-73.24452],[169.287321,-73.65602],[167.975101,-73.812806],[167.387489,-74.165498],[166.094803,-74.38104],[165.644391,-74.772954],[164.958851,-75.145283],[164.234193,-75.458804],[163.822797,-75.870303],[163.568239,-76.24258],[163.47026,-76.693302],[163.489897,-77.065579],[164.057873,-77.457442],[164.273363,-77.82977],[164.743464,-78.182514],[166.604126,-78.319611],[166.995781,-78.750748],[165.193876,-78.907483],[163.666217,-79.123025],[161.766385,-79.162248],[160.924162,-79.730482],[160.747894,-80.200737],[160.316964,-80.573066],[159.788211,-80.945395],[161.120016,-81.278501],[161.629287,-81.690001],[162.490992,-82.062278],[163.705336,-82.395435],[165.095949,-82.708956],[166.604126,-83.022477],[168.895665,-83.335998],[169.404782,-83.825891],[172.283934,-84.041433],[172.477049,-84.117914],[173.224083,-84.41371],[175.985672,-84.158997],[178.277212,-84.472518],[180,-84.71338],[180,-90],[-180,-90],[-180,-84.71338],[-179.942499,-84.721443],[-179.058677,-84.139412],[-177.256772,-84.452933],[-177.140807,-84.417941],[-176.861993,-84.333812],[-176.523952,-84.231811],[-176.230303,-84.143203],[-176.084673,-84.099259],[-175.934101,-84.101591],[-175.829882,-84.117914],[-174.382503,-84.534323],[-173.116559,-84.117914],[-172.889106,-84.061019],[-169.951223,-83.884647],[-168.999989,-84.117914],[-168.530199,-84.23739],[-167.022099,-84.570497],[-164.182144,-84.82521],[-161.929775,-85.138731],[-158.07138,-85.37391],[-155.192253,-85.09956],[-150.942099,-85.295517],[-148.533073,-85.609038],[-145.888918,-85.315102],[-143.107718,-85.040752],[-142.892279,-84.570497],[-146.829068,-84.531274],[-150.060732,-84.296146],[-150.902928,-83.904232],[-153.586201,-83.68869],[-153.409907,-83.23802],[-153.037759,-82.82652],[-152.665637,-82.454192],[-152.861517,-82.042692],[-154.526299,-81.768394],[-155.29018,-81.41565],[-156.83745,-81.102129],[-154.408787,-81.160937],[-152.097662,-81.004151],[-150.648293,-81.337309],[-148.865998,-81.043373],[-147.22075,-80.671045],[-146.417749,-80.337938],[-146.770286,-79.926439],[-148.062947,-79.652089],[-149.531901,-79.358205],[-151.588416,-79.299397],[-153.390322,-79.162248],[-155.329376,-79.064269],[-155.975668,-78.69194],[-157.268302,-78.378419],[-158.051768,-78.025676],[-158.365134,-76.889207],[-157.875474,-76.987238],[-156.974573,-77.300759],[-155.329376,-77.202728],[-153.742832,-77.065579],[-152.920247,-77.496664],[-151.33378,-77.398737],[-150.00195,-77.183143],[-148.748486,-76.908845],[-147.612483,-76.575738],[-146.104409,-76.47776],[-146.143528,-76.105431],[-146.496091,-75.733154],[-146.20231,-75.380411],[-144.909624,-75.204039],[-144.322037,-75.537197],[-142.794353,-75.34124],[-141.638764,-75.086475],[-140.209007,-75.06689],[-138.85759,-74.968911],[-137.5062,-74.733783],[-136.428901,-74.518241],[-135.214583,-74.302699],[-134.431194,-74.361455],[-133.745654,-74.439848],[-132.257168,-74.302699],[-130.925311,-74.479019],[-129.554284,-74.459433],[-128.242038,-74.322284],[-126.890622,-74.420263],[-125.402082,-74.518241],[-124.011496,-74.479019],[-122.562152,-74.498604],[-121.073613,-74.518241],[-119.70256,-74.479019],[-118.684145,-74.185083],[-117.469801,-74.028348],[-116.216312,-74.243891],[-115.021552,-74.067519],[-113.944331,-73.714828],[-113.297988,-74.028348],[-112.945452,-74.38104],[-112.299083,-74.714198],[-111.261059,-74.420263],[-110.066325,-74.79254],[-108.714909,-74.910103],[-107.559346,-75.184454],[-106.149148,-75.125698],[-104.876074,-74.949326],[-103.367949,-74.988497],[-102.016507,-75.125698],[-100.645531,-75.302018],[-100.1167,-74.870933],[-100.763043,-74.537826],[-101.252703,-74.185083],[-102.545337,-74.106742],[-103.113313,-73.734413],[-103.328752,-73.362084],[-103.681289,-72.61753],[-102.917485,-72.754679],[-101.60524,-72.813436],[-100.312528,-72.754679],[-99.13738,-72.911414],[-98.118889,-73.20535],[-97.688037,-73.558041],[-96.336595,-73.616849],[-95.043961,-73.4797],[-93.672907,-73.283743],[-92.439003,-73.166179],[-91.420564,-73.401307],[-90.088733,-73.322914],[-89.226951,-72.558722],[-88.423951,-73.009393],[-87.268337,-73.185764],[-86.014822,-73.087786],[-85.192236,-73.4797],[-83.879991,-73.518871],[-82.665646,-73.636434],[-81.470913,-73.851977],[-80.687447,-73.4797],[-80.295791,-73.126956],[-79.296886,-73.518871],[-77.925858,-73.420892],[-76.907367,-73.636434],[-76.221879,-73.969541],[-74.890049,-73.871614],[-73.852024,-73.65602],[-72.833533,-73.401307],[-71.619215,-73.264157],[-70.209042,-73.146542],[-68.935916,-73.009393],[-67.956622,-72.79385],[-67.369061,-72.480329],[-67.134036,-72.049244],[-67.251548,-71.637745],[-67.56494,-71.245831],[-67.917477,-70.853917],[-68.230843,-70.462055],[-68.485452,-70.109311],[-68.544209,-69.717397],[-68.446282,-69.325535],[-67.976233,-68.953206],[-67.5845,-68.541707],[-67.427843,-68.149844],[-67.62367,-67.718759],[-67.741183,-67.326845],[-67.251548,-66.876175],[-66.703184,-66.58224],[-66.056815,-66.209963],[-65.371327,-65.89639],[-64.568276,-65.602506],[-64.176542,-65.171423],[-63.628152,-64.897073],[-63.001394,-64.642308],[-62.041686,-64.583552],[-61.414928,-64.270031],[-60.709855,-64.074074],[-59.887269,-63.95651],[-59.162585,-63.701745],[-58.594557,-63.388224],[-57.811143,-63.27066],[-57.223582,-63.525425],[-57.59573,-63.858532],[-58.614143,-64.152467]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-74.66253,-55.61183,-65.05,-52.5183],geometry:{type:"Polygon",coordinates:[[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.95992,-54.89681],[-67.29103,-55.30124],[-68.14863,-55.61183],[-69.2321,-55.49906],[-69.95809,-55.19843],[-71.00568,-55.05383],[-72.2639,-54.49514],[-73.2852,-53.95752],[-74.66253,-52.83749],[-73.8381,-53.04743],[-72.43418,-53.7154],[-71.10773,-54.07433],[-70.59178,-53.61583],[-70.26748,-52.93123],[-69.34565,-52.5183],[-68.63411,-52.63625],[-68.63401,-52.63637],[-68.25,-53.1],[-67.75,-53.85]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-61.2,-52.3,-57.75,-51.1],geometry:{type:"Polygon",coordinates:[[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[68.72,-49.775,70.56,-48.625],geometry:{type:"Polygon",coordinates:[[[70.28,-49.71],[68.745,-49.775],[68.72,-49.2425],[68.8675,-48.83],[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[144.718071,-43.634597,148.359865,-40.703975],geometry:{type:"Polygon",coordinates:[[[145.397978,-40.792549],[146.364121,-41.137695],[146.908584,-41.000546],[147.689259,-40.808258],[148.289068,-40.875438],[148.359865,-42.062445],[148.017301,-42.407024],[147.914052,-43.211522],[147.564564,-42.937689],[146.870343,-43.634597],[146.663327,-43.580854],[146.048378,-43.549745],[145.43193,-42.693776],[145.29509,-42.03361],[144.718071,-41.162552],[144.743755,-40.703975],[145.397978,-40.792549]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[166.509144,-46.641235,174.248517,-40.493962],geometry:{type:"Polygon",coordinates:[[[173.020375,-40.919052],[173.247234,-41.331999],[173.958405,-40.926701],[174.247587,-41.349155],[174.248517,-41.770008],[173.876447,-42.233184],[173.22274,-42.970038],[172.711246,-43.372288],[173.080113,-43.853344],[172.308584,-43.865694],[171.452925,-44.242519],[171.185138,-44.897104],[170.616697,-45.908929],[169.831422,-46.355775],[169.332331,-46.641235],[168.411354,-46.619945],[167.763745,-46.290197],[166.676886,-46.219917],[166.509144,-45.852705],[167.046424,-45.110941],[168.303763,-44.123973],[168.949409,-43.935819],[169.667815,-43.555326],[170.52492,-43.031688],[171.12509,-42.512754],[171.569714,-41.767424],[171.948709,-41.514417],[172.097227,-40.956104],[172.79858,-40.493962],[173.020375,-40.919052]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[172.636005,-41.688308,178.517094,-34.450662],geometry:{type:"Polygon",coordinates:[[[174.612009,-36.156397],[175.336616,-37.209098],[175.357596,-36.526194],[175.808887,-36.798942],[175.95849,-37.555382],[176.763195,-37.881253],[177.438813,-37.961248],[178.010354,-37.579825],[178.517094,-37.695373],[178.274731,-38.582813],[177.97046,-39.166343],[177.206993,-39.145776],[176.939981,-39.449736],[177.032946,-39.879943],[176.885824,-40.065978],[176.508017,-40.604808],[176.01244,-41.289624],[175.239567,-41.688308],[175.067898,-41.425895],[174.650973,-41.281821],[175.22763,-40.459236],[174.900157,-39.908933],[173.824047,-39.508854],[173.852262,-39.146602],[174.574802,-38.797683],[174.743474,-38.027808],[174.697017,-37.381129],[174.292028,-36.711092],[174.319004,-36.534824],[173.840997,-36.121981],[173.054171,-35.237125],[172.636005,-34.529107],[173.007042,-34.450662],[173.551298,-35.006183],[174.32939,-35.265496],[174.612009,-36.156397]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[164.029606,-22.399976,167.120011,-20.105646],geometry:{type:"Polygon",coordinates:[[[167.120011,-22.159991],[166.740035,-22.399976],[166.189732,-22.129708],[165.474375,-21.679607],[164.829815,-21.14982],[164.167995,-20.444747],[164.029606,-20.105646],[164.459967,-20.120012],[165.020036,-20.459991],[165.460009,-20.800022],[165.77999,-21.080005],[166.599991,-21.700019],[167.120011,-22.159991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[177.28504,-18.28799,178.71806,-17.33992],geometry:{type:"Polygon",coordinates:[[[178.3736,-17.33992],[178.71806,-17.62846],[178.55271,-18.15059],[177.93266,-18.28799],[177.38146,-18.16432],[177.28504,-17.72465],[177.67087,-17.38114],[178.12557,-17.50481],[178.3736,-17.33992]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[178.596839,-17.012042,180,-16.067133],geometry:{type:"Polygon",coordinates:[[[179.364143,-16.801354],[178.725059,-17.012042],[178.596839,-16.63915],[179.096609,-16.433984],[179.413509,-16.379054],[180,-16.067133],[180,-16.555217],[179.364143,-16.801354]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-180,-16.555217,-179.79332,-16.020882],geometry:{type:"Polygon",coordinates:[[[-179.917369,-16.501783],[-180,-16.555217],[-180,-16.067133],[-179.79332,-16.020882],[-179.917369,-16.501783]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[167.180008,-16.59785,167.844877,-15.891846],geometry:{type:"Polygon",coordinates:[[[167.844877,-16.466333],[167.515181,-16.59785],[167.180008,-16.159995],[167.216801,-15.891846],[167.844877,-16.466333]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[166.629137,-15.740021,167.270028,-14.626497],geometry:{type:"Polygon",coordinates:[[[167.107712,-14.93392],[167.270028,-15.740021],[167.001207,-15.614602],[166.793158,-15.668811],[166.649859,-15.392704],[166.629137,-14.626497],[167.107712,-14.93392]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[43.254187,-25.601434,50.476537,-12.040557],geometry:{type:"Polygon",coordinates:[[[50.056511,-13.555761],[50.217431,-14.758789],[50.476537,-15.226512],[50.377111,-15.706069],[50.200275,-16.000263],[49.860606,-15.414253],[49.672607,-15.710204],[49.863344,-16.451037],[49.774564,-16.875042],[49.498612,-17.106036],[49.435619,-17.953064],[49.041792,-19.118781],[48.548541,-20.496888],[47.930749,-22.391501],[47.547723,-23.781959],[47.095761,-24.94163],[46.282478,-25.178463],[45.409508,-25.601434],[44.833574,-25.346101],[44.03972,-24.988345],[43.763768,-24.460677],[43.697778,-23.574116],[43.345654,-22.776904],[43.254187,-22.057413],[43.433298,-21.336475],[43.893683,-21.163307],[43.89637,-20.830459],[44.374325,-20.072366],[44.464397,-19.435454],[44.232422,-18.961995],[44.042976,-18.331387],[43.963084,-17.409945],[44.312469,-16.850496],[44.446517,-16.216219],[44.944937,-16.179374],[45.502732,-15.974373],[45.872994,-15.793454],[46.312243,-15.780018],[46.882183,-15.210182],[47.70513,-14.594303],[48.005215,-14.091233],[47.869047,-13.663869],[48.293828,-13.784068],[48.84506,-13.089175],[48.863509,-12.487868],[49.194651,-12.040557],[49.543519,-12.469833],[49.808981,-12.895285],[50.056511,-13.555761]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[113.338953,-39.035757,153.569469,-10.668186],geometry:{type:"Polygon",coordinates:[[[143.561811,-13.763656],[143.922099,-14.548311],[144.563714,-14.171176],[144.894908,-14.594458],[145.374724,-14.984976],[145.271991,-15.428205],[145.48526,-16.285672],[145.637033,-16.784918],[145.888904,-16.906926],[146.160309,-17.761655],[146.063674,-18.280073],[146.387478,-18.958274],[147.471082,-19.480723],[148.177602,-19.955939],[148.848414,-20.39121],[148.717465,-20.633469],[149.28942,-21.260511],[149.678337,-22.342512],[150.077382,-22.122784],[150.482939,-22.556142],[150.727265,-22.402405],[150.899554,-23.462237],[151.609175,-24.076256],[152.07354,-24.457887],[152.855197,-25.267501],[153.136162,-26.071173],[153.161949,-26.641319],[153.092909,-27.2603],[153.569469,-28.110067],[153.512108,-28.995077],[153.339095,-29.458202],[153.069241,-30.35024],[153.089602,-30.923642],[152.891578,-31.640446],[152.450002,-32.550003],[151.709117,-33.041342],[151.343972,-33.816023],[151.010555,-34.31036],[150.714139,-35.17346],[150.32822,-35.671879],[150.075212,-36.420206],[149.946124,-37.109052],[149.997284,-37.425261],[149.423882,-37.772681],[148.304622,-37.809061],[147.381733,-38.219217],[146.922123,-38.606532],[146.317922,-39.035757],[145.489652,-38.593768],[144.876976,-38.417448],[145.032212,-37.896188],[144.485682,-38.085324],[143.609974,-38.809465],[142.745427,-38.538268],[142.17833,-38.380034],[141.606582,-38.308514],[140.638579,-38.019333],[139.992158,-37.402936],[139.806588,-36.643603],[139.574148,-36.138362],[139.082808,-35.732754],[138.120748,-35.612296],[138.449462,-35.127261],[138.207564,-34.384723],[137.71917,-35.076825],[136.829406,-35.260535],[137.352371,-34.707339],[137.503886,-34.130268],[137.890116,-33.640479],[137.810328,-32.900007],[136.996837,-33.752771],[136.372069,-34.094766],[135.989043,-34.890118],[135.208213,-34.47867],[135.239218,-33.947953],[134.613417,-33.222778],[134.085904,-32.848072],[134.273903,-32.617234],[132.990777,-32.011224],[132.288081,-31.982647],[131.326331,-31.495803],[129.535794,-31.590423],[128.240938,-31.948489],[127.102867,-32.282267],[126.148714,-32.215966],[125.088623,-32.728751],[124.221648,-32.959487],[124.028947,-33.483847],[123.659667,-33.890179],[122.811036,-33.914467],[122.183064,-34.003402],[121.299191,-33.821036],[120.580268,-33.930177],[119.893695,-33.976065],[119.298899,-34.509366],[119.007341,-34.464149],[118.505718,-34.746819],[118.024972,-35.064733],[117.295507,-35.025459],[116.625109,-35.025097],[115.564347,-34.386428],[115.026809,-34.196517],[115.048616,-33.623425],[115.545123,-33.487258],[115.714674,-33.259572],[115.679379,-32.900369],[115.801645,-32.205062],[115.689611,-31.612437],[115.160909,-30.601594],[114.997043,-30.030725],[115.040038,-29.461095],[114.641974,-28.810231],[114.616498,-28.516399],[114.173579,-28.118077],[114.048884,-27.334765],[113.477498,-26.543134],[113.338953,-26.116545],[113.778358,-26.549025],[113.440962,-25.621278],[113.936901,-25.911235],[114.232852,-26.298446],[114.216161,-25.786281],[113.721255,-24.998939],[113.625344,-24.683971],[113.393523,-24.384764],[113.502044,-23.80635],[113.706993,-23.560215],[113.843418,-23.059987],[113.736552,-22.475475],[114.149756,-21.755881],[114.225307,-22.517488],[114.647762,-21.82952],[115.460167,-21.495173],[115.947373,-21.068688],[116.711615,-20.701682],[117.166316,-20.623599],[117.441545,-20.746899],[118.229559,-20.374208],[118.836085,-20.263311],[118.987807,-20.044203],[119.252494,-19.952942],[119.805225,-19.976506],[120.85622,-19.683708],[121.399856,-19.239756],[121.655138,-18.705318],[122.241665,-18.197649],[122.286624,-17.798603],[122.312772,-17.254967],[123.012574,-16.4052],[123.433789,-17.268558],[123.859345,-17.069035],[123.503242,-16.596506],[123.817073,-16.111316],[124.258287,-16.327944],[124.379726,-15.56706],[124.926153,-15.0751],[125.167275,-14.680396],[125.670087,-14.51007],[125.685796,-14.230656],[126.125149,-14.347341],[126.142823,-14.095987],[126.582589,-13.952791],[127.065867,-13.817968],[127.804633,-14.276906],[128.35969,-14.86917],[128.985543,-14.875991],[129.621473,-14.969784],[129.4096,-14.42067],[129.888641,-13.618703],[130.339466,-13.357376],[130.183506,-13.10752],[130.617795,-12.536392],[131.223495,-12.183649],[131.735091,-12.302453],[132.575298,-12.114041],[132.557212,-11.603012],[131.824698,-11.273782],[132.357224,-11.128519],[133.019561,-11.376411],[133.550846,-11.786515],[134.393068,-12.042365],[134.678632,-11.941183],[135.298491,-12.248606],[135.882693,-11.962267],[136.258381,-12.049342],[136.492475,-11.857209],[136.95162,-12.351959],[136.685125,-12.887223],[136.305407,-13.29123],[135.961758,-13.324509],[136.077617,-13.724278],[135.783836,-14.223989],[135.428664,-14.715432],[135.500184,-14.997741],[136.295175,-15.550265],[137.06536,-15.870762],[137.580471,-16.215082],[138.303217,-16.807604],[138.585164,-16.806622],[139.108543,-17.062679],[139.260575,-17.371601],[140.215245,-17.710805],[140.875463,-17.369069],[141.07111,-16.832047],[141.274095,-16.38887],[141.398222,-15.840532],[141.702183,-15.044921],[141.56338,-14.561333],[141.63552,-14.270395],[141.519869,-13.698078],[141.65092,-12.944688],[141.842691,-12.741548],[141.68699,-12.407614],[141.928629,-11.877466],[142.118488,-11.328042],[142.143706,-11.042737],[142.51526,-10.668186],[142.79731,-11.157355],[142.866763,-11.784707],[143.115947,-11.90563],[143.158632,-12.325656],[143.522124,-12.834358],[143.597158,-13.400422],[143.561811,-13.763656]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[161.319797,-10.826367,162.398646,-10.204751],geometry:{type:"Polygon",coordinates:[[[162.119025,-10.482719],[162.398646,-10.826367],[161.700032,-10.820011],[161.319797,-10.204751],[161.917383,-10.446701],[162.119025,-10.482719]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[118.967808,-10.25865,120.775502,-9.36134],geometry:{type:"Polygon",coordinates:[[[120.715609,-10.239581],[120.295014,-10.25865],[118.967808,-9.557969],[119.90031,-9.36134],[120.425756,-9.665921],[120.775502,-9.969675],[120.715609,-10.239581]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[159.640003,-9.89521,160.852229,-9.24295],geometry:{type:"Polygon",coordinates:[[[160.852229,-9.872937],[160.462588,-9.89521],[159.849447,-9.794027],[159.640003,-9.63998],[159.702945,-9.24295],[160.362956,-9.400304],[160.688518,-9.610162],[160.852229,-9.872937]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[160.579997,-9.784312,161.679982,-8.320009],geometry:{type:"Polygon",coordinates:[[[161.679982,-9.599982],[161.529397,-9.784312],[160.788253,-8.917543],[160.579997,-8.320009],[160.920028,-8.320009],[161.280006,-9.120011],[161.679982,-9.599982]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[123.459989,-10.359987,127.335928,-8.273345],geometry:{type:"Polygon",coordinates:[[[124.43595,-10.140001],[123.579982,-10.359987],[123.459989,-10.239995],[123.550009,-9.900016],[123.980009,-9.290027],[124.968682,-8.89279],[125.086246,-8.656887],[125.947072,-8.432095],[126.644704,-8.398247],[126.957243,-8.273345],[127.335928,-8.397317],[126.967992,-8.668256],[125.925885,-9.106007],[125.08852,-9.393173],[124.43595,-10.140001]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[116.740141,-9.040895,119.126507,-8.095681],geometry:{type:"Polygon",coordinates:[[[117.900018,-8.095681],[118.260616,-8.362383],[118.87846,-8.280683],[119.126507,-8.705825],[117.970402,-8.906639],[117.277731,-9.040895],[116.740141,-9.032937],[117.083737,-8.457158],[117.632024,-8.449303],[117.900018,-8.095681]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[119.920929,-8.933666,122.903537,-8.094234],geometry:{type:"Polygon",coordinates:[[[122.903537,-8.094234],[122.756983,-8.649808],[121.254491,-8.933666],[119.924391,-8.810418],[119.920929,-8.444859],[120.715092,-8.236965],[121.341669,-8.53674],[122.007365,-8.46062],[122.903537,-8.094234]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[158.21115,-8.53829,159.917402,-7.320018],geometry:{type:"Polygon",coordinates:[[[159.875027,-8.33732],[159.917402,-8.53829],[159.133677,-8.114181],[158.586114,-7.754824],[158.21115,-7.421872],[158.359978,-7.320018],[158.820001,-7.560003],[159.640003,-8.020027],[159.875027,-8.33732]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[156.491358,-7.404767,157.538426,-6.599338],geometry:{type:"Polygon",coordinates:[[[157.538426,-7.34782],[157.33942,-7.404767],[156.90203,-7.176874],[156.491358,-6.765943],[156.542828,-6.599338],[157.14,-7.021638],[157.538426,-7.34782]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[105.365486,-8.751817,115.705527,-5.895919],geometry:{type:"Polygon",coordinates:[[[108.623479,-6.777674],[110.539227,-6.877358],[110.759576,-6.465186],[112.614811,-6.946036],[112.978768,-7.594213],[114.478935,-7.776528],[115.705527,-8.370807],[114.564511,-8.751817],[113.464734,-8.348947],[112.559672,-8.376181],[111.522061,-8.302129],[110.58615,-8.122605],[109.427667,-7.740664],[108.693655,-7.6416],[108.277763,-7.766657],[106.454102,-7.3549],[106.280624,-6.9249],[105.365486,-6.851416],[106.051646,-5.895919],[107.265009,-5.954985],[108.072091,-6.345762],[108.486846,-6.421985],[108.623479,-6.777674]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[134.112776,-6.895238,134.727002,-5.445042],geometry:{type:"Polygon",coordinates:[[[134.724624,-6.214401],[134.210134,-6.895238],[134.112776,-6.142467],[134.290336,-5.783058],[134.499625,-5.445042],[134.727002,-5.737582],[134.724624,-6.214401]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[154.514114,-6.919991,156.019965,-5.042431],geometry:{type:"Polygon",coordinates:[[[155.880026,-6.819997],[155.599991,-6.919991],[155.166994,-6.535931],[154.729192,-5.900828],[154.514114,-5.139118],[154.652504,-5.042431],[154.759991,-5.339984],[155.062918,-5.566792],[155.547746,-6.200655],[156.019965,-6.540014],[155.880026,-6.819997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[148.318937,-6.317754,152.338743,-4.14879],geometry:{type:"Polygon",coordinates:[[[151.982796,-5.478063],[151.459107,-5.56028],[151.30139,-5.840728],[150.754447,-6.083763],[150.241197,-6.317754],[149.709963,-6.316513],[148.890065,-6.02604],[148.318937,-5.747142],[148.401826,-5.437756],[149.298412,-5.583742],[149.845562,-5.505503],[149.99625,-5.026101],[150.139756,-5.001348],[150.236908,-5.53222],[150.807467,-5.455842],[151.089672,-5.113693],[151.647881,-4.757074],[151.537862,-4.167807],[152.136792,-4.14879],[152.338743,-4.312966],[152.318693,-4.867661],[151.982796,-5.478063]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[125.989034,-3.790983,127.249215,-3.129318],geometry:{type:"Polygon",coordinates:[[[127.249215,-3.459065],[126.874923,-3.790983],[126.183802,-3.607376],[125.989034,-3.177273],[127.000651,-3.129318],[127.249215,-3.459065]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[127.898891,-3.858472,130.834836,-2.802154],geometry:{type:"Polygon",coordinates:[[[130.471344,-3.093764],[130.834836,-3.858472],[129.990547,-3.446301],[129.155249,-3.362637],[128.590684,-3.428679],[127.898891,-3.393436],[128.135879,-2.84365],[129.370998,-2.802154],[130.471344,-3.093764]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[150.66205,-4.766427,153.140038,-2.500002],geometry:{type:"Polygon",coordinates:[[[153.140038,-4.499983],[152.827292,-4.766427],[152.638673,-4.176127],[152.406026,-3.789743],[151.953237,-3.462062],[151.384279,-3.035422],[150.66205,-2.741486],[150.939965,-2.500002],[151.479984,-2.779985],[151.820015,-2.999972],[152.239989,-3.240009],[152.640017,-3.659983],[153.019994,-3.980015],[153.140038,-4.499983]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[130.519558,-10.652476,150.801628,-.369538],geometry:{type:"Polygon",coordinates:[[[134.143368,-1.151867],[134.422627,-2.769185],[135.457603,-3.367753],[136.293314,-2.307042],[137.440738,-1.703513],[138.329727,-1.702686],[139.184921,-2.051296],[139.926684,-2.409052],[141.00021,-2.600151],[142.735247,-3.289153],[144.583971,-3.861418],[145.27318,-4.373738],[145.829786,-4.876498],[145.981922,-5.465609],[147.648073,-6.083659],[147.891108,-6.614015],[146.970905,-6.721657],[147.191874,-7.388024],[148.084636,-8.044108],[148.734105,-9.104664],[149.306835,-9.071436],[149.266631,-9.514406],[150.038728,-9.684318],[149.738798,-9.872937],[150.801628,-10.293687],[150.690575,-10.582713],[150.028393,-10.652476],[149.78231,-10.393267],[148.923138,-10.280923],[147.913018,-10.130441],[147.135443,-9.492444],[146.567881,-8.942555],[146.048481,-8.067414],[144.744168,-7.630128],[143.897088,-7.91533],[143.286376,-8.245491],[143.413913,-8.983069],[142.628431,-9.326821],[142.068259,-9.159596],[141.033852,-9.117893],[140.143415,-8.297168],[139.127767,-8.096043],[138.881477,-8.380935],[137.614474,-8.411683],[138.039099,-7.597882],[138.668621,-7.320225],[138.407914,-6.232849],[137.92784,-5.393366],[135.98925,-4.546544],[135.164598,-4.462931],[133.66288,-3.538853],[133.367705,-4.024819],[132.983956,-4.112979],[132.756941,-3.746283],[132.753789,-3.311787],[131.989804,-2.820551],[133.066845,-2.460418],[133.780031,-2.479848],[133.696212,-2.214542],[132.232373,-2.212526],[131.836222,-1.617162],[130.94284,-1.432522],[130.519558,-.93772],[131.867538,-.695461],[132.380116,-.369538],[133.985548,-.78021],[134.143368,-1.151867]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[118.767769,-5.6734,125.240501,1.643259],geometry:{type:"Polygon",coordinates:[[[125.240501,1.419836],[124.437035,.427881],[123.685505,.235593],[122.723083,.431137],[121.056725,.381217],[120.183083,.237247],[120.04087,-.519658],[120.935905,-1.408906],[121.475821,-.955962],[123.340565,-.615673],[123.258399,-1.076213],[122.822715,-.930951],[122.38853,-1.516858],[121.508274,-1.904483],[122.454572,-3.186058],[122.271896,-3.5295],[123.170963,-4.683693],[123.162333,-5.340604],[122.628515,-5.634591],[122.236394,-5.282933],[122.719569,-4.464172],[121.738234,-4.851331],[121.489463,-4.574553],[121.619171,-4.188478],[120.898182,-3.602105],[120.972389,-2.627643],[120.305453,-2.931604],[120.390047,-4.097579],[120.430717,-5.528241],[119.796543,-5.6734],[119.366906,-5.379878],[119.653606,-4.459417],[119.498835,-3.494412],[119.078344,-3.487022],[118.767769,-2.801999],[119.180974,-2.147104],[119.323394,-1.353147],[119.825999,.154254],[120.035702,.566477],[120.885779,1.309223],[121.666817,1.013944],[122.927567,.875192],[124.077522,.917102],[125.065989,1.643259],[125.240501,1.419836]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[127.39949,-.899996,128.688249,2.174596],geometry:{type:"Polygon",coordinates:[[[128.688249,1.132386],[128.635952,.258486],[128.12017,.356413],[127.968034,-.252077],[128.379999,-.780004],[128.100016,-.899996],[127.696475,-.266598],[127.39949,1.011722],[127.600512,1.810691],[127.932378,2.174596],[128.004156,1.628531],[128.594559,1.540811],[128.688249,1.132386]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[95.293026,-5.873285,106.108593,5.479821],geometry:{type:"Polygon",coordinates:[[[105.817655,-5.852356],[104.710384,-5.873285],[103.868213,-5.037315],[102.584261,-4.220259],[102.156173,-3.614146],[101.399113,-2.799777],[100.902503,-2.050262],[100.141981,-.650348],[99.26374,.183142],[98.970011,1.042882],[98.601351,1.823507],[97.699598,2.453184],[97.176942,3.308791],[96.424017,3.86886],[95.380876,4.970782],[95.293026,5.479821],[95.936863,5.439513],[97.484882,5.246321],[98.369169,4.26837],[99.142559,3.59035],[99.693998,3.174329],[100.641434,2.099381],[101.658012,2.083697],[102.498271,1.3987],[103.07684,.561361],[103.838396,.104542],[103.437645,-.711946],[104.010789,-1.059212],[104.369991,-1.084843],[104.53949,-1.782372],[104.887893,-2.340425],[105.622111,-2.428844],[106.108593,-3.061777],[105.857446,-4.305525],[105.817655,-5.852356]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[108.952658,-4.106984,119.181904,6.928053],geometry:{type:"Polygon",coordinates:[[[117.875627,1.827641],[118.996747,.902219],[117.811858,.784242],[117.478339,.102475],[117.521644,-.803723],[116.560048,-1.487661],[116.533797,-2.483517],[116.148084,-4.012726],[116.000858,-3.657037],[114.864803,-4.106984],[114.468652,-3.495704],[113.755672,-3.43917],[113.256994,-3.118776],[112.068126,-3.478392],[111.703291,-2.994442],[111.04824,-3.049426],[110.223846,-2.934032],[110.070936,-1.592874],[109.571948,-1.314907],[109.091874,-.459507],[108.952658,.415375],[109.069136,1.341934],[109.66326,2.006467],[110.396135,1.663775],[111.168853,1.850637],[111.370081,2.697303],[111.796928,2.885897],[112.995615,3.102395],[113.712935,3.893509],[114.204017,4.525874],[114.599961,4.900011],[115.45071,5.44773],[116.220741,6.143191],[116.725103,6.924771],[117.129626,6.928053],[117.643393,6.422166],[117.689075,5.98749],[118.347691,5.708696],[119.181904,5.407836],[119.110694,5.016128],[118.439727,4.966519],[118.618321,4.478202],[117.882035,4.137551],[117.313232,3.234428],[118.04833,2.28769],[117.875627,1.827641]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[121.919928,5.581003,126.537424,9.760335],geometry:{type:"Polygon",coordinates:[[[126.376814,8.414706],[126.478513,7.750354],[126.537424,7.189381],[126.196773,6.274294],[125.831421,7.293715],[125.363852,6.786485],[125.683161,6.049657],[125.396512,5.581003],[124.219788,6.161355],[123.93872,6.885136],[124.243662,7.36061],[123.610212,7.833527],[123.296071,7.418876],[122.825506,7.457375],[122.085499,6.899424],[121.919928,7.192119],[122.312359,8.034962],[122.942398,8.316237],[123.487688,8.69301],[123.841154,8.240324],[124.60147,8.514158],[124.764612,8.960409],[125.471391,8.986997],[125.412118,9.760335],[126.222714,9.286074],[126.306637,8.782487],[126.376814,8.414706]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[79.695167,5.96837,81.787959,9.824078],geometry:{type:"Polygon",coordinates:[[[81.21802,6.197141],[80.348357,5.96837],[79.872469,6.763463],[79.695167,8.200843],[80.147801,9.824078],[80.838818,9.268427],[81.304319,8.564206],[81.787959,7.523055],[81.637322,6.481775],[81.21802,6.197141]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-61.95,10,-60.895,10.89],geometry:{type:"Polygon",coordinates:[[[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[122.380055,9.022189,124.077936,11.232726],geometry:{type:"Polygon",coordinates:[[[123.982438,10.278779],[123.623183,9.950091],[123.309921,9.318269],[122.995883,9.022189],[122.380055,9.713361],[122.586089,9.981045],[122.837081,10.261157],[122.947411,10.881868],[123.49885,10.940624],[123.337774,10.267384],[124.077936,11.232726],[123.982438,10.278779]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[117.174275,8.3675,119.689677,11.369668],geometry:{type:"Polygon",coordinates:[[[118.504581,9.316383],[117.174275,8.3675],[117.664477,9.066889],[118.386914,9.6845],[118.987342,10.376292],[119.511496,11.369668],[119.689677,10.554291],[119.029458,10.003653],[118.504581,9.316383]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[121.883548,10.441017,123.120217,11.891755],geometry:{type:"Polygon",coordinates:[[[121.883548,11.891755],[122.483821,11.582187],[123.120217,11.58366],[123.100838,11.165934],[122.637714,10.741308],[122.00261,10.441017],[121.967367,10.905691],[122.03837,11.415841],[121.883548,11.891755]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[124.266762,10.134679,125.783465,12.557761],geometry:{type:"Polygon",coordinates:[[[125.502552,12.162695],[125.783465,11.046122],[125.011884,11.311455],[125.032761,10.975816],[125.277449,10.358722],[124.801819,10.134679],[124.760168,10.837995],[124.459101,10.88993],[124.302522,11.495371],[124.891013,11.415583],[124.87799,11.79419],[124.266762,12.557761],[125.227116,12.535721],[125.502552,12.162695]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[120.323436,12.20556,121.527394,13.466413],geometry:{type:"Polygon",coordinates:[[[121.527394,13.06959],[121.26219,12.20556],[120.833896,12.704496],[120.323436,13.466413],[121.180128,13.429697],[121.527394,13.06959]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[119.883773,12.536677,124.181289,18.505227],geometry:{type:"Polygon",coordinates:[[[121.321308,18.504065],[121.937601,18.218552],[122.246006,18.47895],[122.336957,18.224883],[122.174279,17.810283],[122.515654,17.093505],[122.252311,16.262444],[121.662786,15.931018],[121.50507,15.124814],[121.728829,14.328376],[122.258925,14.218202],[122.701276,14.336541],[123.950295,13.782131],[123.855107,13.237771],[124.181289,12.997527],[124.077419,12.536677],[123.298035,13.027526],[122.928652,13.55292],[122.671355,13.185836],[122.03465,13.784482],[121.126385,13.636687],[120.628637,13.857656],[120.679384,14.271016],[120.991819,14.525393],[120.693336,14.756671],[120.564145,14.396279],[120.070429,14.970869],[119.920929,15.406347],[119.883773,16.363704],[120.286488,16.034629],[120.390047,17.599081],[120.715867,18.505227],[121.321308,18.504065]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-67.242428,17.946553,-65.591004,18.520601],geometry:{type:"Polygon",coordinates:[[[-65.591004,18.228035],[-65.847164,17.975906],[-66.599934,17.981823],[-67.184162,17.946553],[-67.242428,18.37446],[-67.100679,18.520601],[-66.282434,18.514762],[-65.771303,18.426679],[-65.591004,18.228035]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-78.337719,17.701116,-76.199659,18.524218],geometry:{type:"Polygon",coordinates:[[[-76.902561,17.868238],[-77.206341,17.701116],[-77.766023,17.861597],[-78.337719,18.225968],[-78.217727,18.454533],[-77.797365,18.524218],[-77.569601,18.490525],[-76.896619,18.400867],[-76.365359,18.160701],[-76.199659,17.886867],[-76.902561,17.868238]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-74.458034,17.598564,-68.317943,19.915684],geometry:{type:"Polygon",coordinates:[[[-72.579673,19.871501],[-71.712361,19.714456],[-71.587304,19.884911],[-70.806706,19.880286],[-70.214365,19.622885],[-69.950815,19.648],[-69.76925,19.293267],[-69.222126,19.313214],[-69.254346,19.015196],[-68.809412,18.979074],[-68.317943,18.612198],[-68.689316,18.205142],[-69.164946,18.422648],[-69.623988,18.380713],[-69.952934,18.428307],[-70.133233,18.245915],[-70.517137,18.184291],[-70.669298,18.426886],[-70.99995,18.283329],[-71.40021,17.598564],[-71.657662,17.757573],[-71.708305,18.044997],[-72.372476,18.214961],[-72.844411,18.145611],[-73.454555,18.217906],[-73.922433,18.030993],[-74.458034,18.34255],[-74.369925,18.664908],[-73.449542,18.526053],[-72.694937,18.445799],[-72.334882,18.668422],[-72.79165,19.101625],[-72.784105,19.483591],[-73.415022,19.639551],[-73.189791,19.915684],[-72.579673,19.871501]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[108.626217,18.197701,111.010051,20.101254],geometry:{type:"Polygon",coordinates:[[[110.339188,18.678395],[109.47521,18.197701],[108.655208,18.507682],[108.626217,19.367888],[109.119056,19.821039],[110.211599,20.101254],[110.786551,20.077534],[111.010051,19.69593],[110.570647,19.255879],[110.339188,18.678395]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-156.07347,18.91619,-154.80741,20.26721],geometry:{type:"Polygon",coordinates:[[[-155.54211,19.08348],[-155.68817,18.91619],[-155.93665,19.05939],[-155.90806,19.33888],[-156.07347,19.70294],[-156.02368,19.81422],[-155.85008,19.97729],[-155.91907,20.17395],[-155.86108,20.26721],[-155.78505,20.2487],[-155.40214,20.07975],[-155.22452,19.99302],[-155.06226,19.8591],[-154.80741,19.50871],[-154.83147,19.45328],[-155.22217,19.23972],[-155.54211,19.08348]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-156.71055,20.57241,-155.99566,21.01249],geometry:{type:"Polygon",coordinates:[[[-156.07926,20.64397],[-156.41445,20.57241],[-156.58673,20.783],[-156.70167,20.8643],[-156.71055,20.92676],[-156.61258,21.01249],[-156.25711,20.91745],[-155.99566,20.76404],[-156.07926,20.64397]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-157.32521,21.06873,-156.75824,21.21958],geometry:{type:"Polygon",coordinates:[[[-156.75824,21.17684],[-156.78933,21.06873],[-157.32521,21.09777],[-157.25027,21.21958],[-156.75824,21.17684]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-158.29265,21.26442,-157.65283,21.71696],geometry:{type:"Polygon",coordinates:[[[-157.65283,21.32217],[-157.70703,21.26442],[-157.7786,21.27729],[-158.12667,21.31244],[-158.2538,21.53919],[-158.29265,21.57912],[-158.0252,21.71696],[-157.94161,21.65272],[-157.65283,21.32217]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-159.80051,21.88299,-159.34512,22.23618],geometry:{type:"Polygon",coordinates:[[[-159.34512,21.982],[-159.46372,21.88299],[-159.80051,22.06533],[-159.74877,22.1382],[-159.5962,22.23618],[-159.36569,22.21494],[-159.34512,21.982]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-84.974911,19.855481,-74.178025,23.188611],geometry:{type:"Polygon",coordinates:[[[-79.679524,22.765303],[-79.281486,22.399202],[-78.347434,22.512166],[-77.993296,22.277194],[-77.146422,21.657851],[-76.523825,21.20682],[-76.19462,21.220565],[-75.598222,21.016624],[-75.67106,20.735091],[-74.933896,20.693905],[-74.178025,20.284628],[-74.296648,20.050379],[-74.961595,19.923435],[-75.63468,19.873774],[-76.323656,19.952891],[-77.755481,19.855481],[-77.085108,20.413354],[-77.492655,20.673105],[-78.137292,20.739949],[-78.482827,21.028613],[-78.719867,21.598114],[-79.285,21.559175],[-80.217475,21.827324],[-80.517535,22.037079],[-81.820943,22.192057],[-82.169992,22.387109],[-81.795002,22.636965],[-82.775898,22.68815],[-83.494459,22.168518],[-83.9088,22.154565],[-84.052151,21.910575],[-84.54703,21.801228],[-84.974911,21.896028],[-84.447062,22.20495],[-84.230357,22.565755],[-83.77824,22.788118],[-83.267548,22.983042],[-82.510436,23.078747],[-82.268151,23.188611],[-81.404457,23.117271],[-80.618769,23.10598],[-79.679524,22.765303]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-78.40848,23.71,-77.53466,25.2103],geometry:{type:"Polygon",coordinates:[[[-77.53466,23.75975],[-77.78,23.71],[-78.03405,24.28615],[-78.40848,24.57564],[-78.19087,25.2103],[-77.89,25.17],[-77.54,24.34],[-77.53466,23.75975]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[120.106189,21.970571,121.951244,25.295459],geometry:{type:"Polygon",coordinates:[[[121.175632,22.790857],[120.74708,21.970571],[120.220083,22.814861],[120.106189,23.556263],[120.69468,24.538451],[121.495044,25.295459],[121.951244,24.997596],[121.777818,24.394274],[121.175632,22.790857]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-78.98,26.42,-77.82,26.87],geometry:{type:"Polygon",coordinates:[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-77.79,25.87918,-77,27.04],geometry:{type:"Polygon",coordinates:[[[-77,26.59],[-77.17255,25.87918],[-77.35641,26.00735],[-77.34,26.53],[-77.78802,26.92516],[-77.79,27.04],[-77,26.59]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[132.363115,32.704567,134.766379,34.364931],geometry:{type:"Polygon",coordinates:[[[134.638428,34.149234],[134.766379,33.806335],[134.203416,33.201178],[133.79295,33.521985],[133.280268,33.28957],[133.014858,32.704567],[132.363115,32.989382],[132.371176,33.463642],[132.924373,34.060299],[133.492968,33.944621],[133.904106,34.364931],[134.638428,34.149234]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[32.256667,34.571869,34.576474,35.671596],geometry:{type:"Polygon",coordinates:[[[34.576474,35.671596],[33.900804,35.245756],[33.973617,35.058506],[34.004881,34.978098],[32.979827,34.571869],[32.490296,34.701655],[32.256667,35.103232],[32.73178,35.140026],[32.802474,35.145504],[32.946961,35.386703],[33.667227,35.373216],[34.576474,35.671596]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[23.514978,34.919988,26.290003,35.705004],geometry:{type:"Polygon",coordinates:[[[23.69998,35.705004],[24.246665,35.368022],[25.025015,35.424996],[25.769208,35.354018],[25.745023,35.179998],[26.290003,35.29999],[26.164998,35.004995],[24.724982,34.919988],[24.735007,35.084991],[23.514978,35.279992],[23.69998,35.705004]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[12.431004,36.619987,15.520376,38.231155],geometry:{type:"Polygon",coordinates:[[[15.520376,38.231155],[15.160243,37.444046],[15.309898,37.134219],[15.099988,36.619987],[14.335229,36.996631],[13.826733,37.104531],[12.431004,37.61295],[12.570944,38.126381],[13.741156,38.034966],[14.761249,38.143874],[15.520376,38.231155]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[8.159998,38.906618,9.809975,41.209991],geometry:{type:"Polygon",coordinates:[[[9.210012,41.209991],[9.809975,40.500009],[9.669519,39.177376],[9.214818,39.240473],[8.806936,38.906618],[8.428302,39.171847],[8.388253,40.378311],[8.159998,40.950007],[8.709991,40.899984],[9.210012,41.209991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[129.408463,31.029579,141.914263,41.37856],geometry:{type:"Polygon",coordinates:[[[140.976388,37.142074],[140.59977,36.343983],[140.774074,35.842877],[140.253279,35.138114],[138.975528,34.6676],[137.217599,34.606286],[135.792983,33.464805],[135.120983,33.849071],[135.079435,34.596545],[133.340316,34.375938],[132.156771,33.904933],[130.986145,33.885761],[132.000036,33.149992],[131.33279,31.450355],[130.686318,31.029579],[130.20242,31.418238],[130.447676,32.319475],[129.814692,32.61031],[129.408463,33.296056],[130.353935,33.604151],[130.878451,34.232743],[131.884229,34.749714],[132.617673,35.433393],[134.608301,35.731618],[135.677538,35.527134],[136.723831,37.304984],[137.390612,36.827391],[138.857602,37.827485],[139.426405,38.215962],[140.05479,39.438807],[139.883379,40.563312],[140.305783,41.195005],[141.368973,41.37856],[141.914263,39.991616],[141.884601,39.180865],[140.959489,38.174001],[140.976388,37.142074]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[8.544213,41.380007,9.560016,43.009985],geometry:{type:"Polygon",coordinates:[[[9.560016,42.152492],[9.229752,41.380007],[8.775723,41.583612],[8.544213,42.256517],[8.746009,42.628122],[9.390001,43.009985],[9.560016,42.152492]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[139.817544,41.569556,145.543137,45.551483],geometry:{type:"Polygon",coordinates:[[[143.910162,44.1741],[144.613427,43.960883],[145.320825,44.384733],[145.543137,43.262088],[144.059662,42.988358],[143.18385,41.995215],[141.611491,42.678791],[141.067286,41.584594],[139.955106,41.569556],[139.817544,42.563759],[140.312087,43.333273],[141.380549,43.388825],[141.671952,44.772125],[141.967645,45.551483],[143.14287,44.510358],[143.910162,44.1741]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-64.39261,45.96818,-62.01208,47.03601],geometry:{type:"Polygon",coordinates:[[[-63.6645,46.55001],[-62.9393,46.41587],[-62.01208,46.44314],[-62.50391,46.03339],[-62.87433,45.96818],[-64.1428,46.39265],[-64.39261,46.72747],[-64.01486,47.03601],[-63.6645,46.55001]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-64.51912,49.08717,-61.806305,49.95718],geometry:{type:"Polygon",coordinates:[[[-61.806305,49.10506],[-62.29318,49.08717],[-63.58926,49.40069],[-64.51912,49.87304],[-64.17322,49.95718],[-62.85829,49.70641],[-61.835585,49.28855],[-61.806305,49.10506]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-128.444584,48.370846,-123.510002,50.770648],geometry:{type:"Polygon",coordinates:[[[-123.510002,48.510011],[-124.012891,48.370846],[-125.655013,48.825005],[-125.954994,49.179996],[-126.850004,49.53],[-127.029993,49.814996],[-128.059336,49.994959],[-128.444584,50.539138],[-128.358414,50.770648],[-127.308581,50.552574],[-126.695001,50.400903],[-125.755007,50.295018],[-125.415002,49.950001],[-124.920768,49.475275],[-123.922509,49.062484],[-123.510002,48.510011]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-59.419494,46.618292,-52.648099,51.632094],geometry:{type:"Polygon",coordinates:[[[-56.134036,50.68701],[-56.795882,49.812309],[-56.143105,50.150117],[-55.471492,49.935815],[-55.822401,49.587129],[-54.935143,49.313011],[-54.473775,49.556691],[-53.476549,49.249139],[-53.786014,48.516781],[-53.086134,48.687804],[-52.958648,48.157164],[-52.648099,47.535548],[-53.069158,46.655499],[-53.521456,46.618292],[-54.178936,46.807066],[-53.961869,47.625207],[-54.240482,47.752279],[-55.400773,46.884994],[-55.997481,46.91972],[-55.291219,47.389562],[-56.250799,47.632545],[-57.325229,47.572807],[-59.266015,47.603348],[-59.419494,47.899454],[-58.796586,48.251525],[-59.231625,48.523188],[-58.391805,49.125581],[-57.35869,50.718274],[-56.73865,51.287438],[-55.870977,51.632094],[-55.406974,51.588273],[-55.600218,51.317075],[-56.134036,50.68701]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-133.239664,52.180433,-131.179043,54.169975],geometry:{type:"Polygon",coordinates:[[[-132.710008,54.040009],[-132.710009,54.040009],[-132.710008,54.040009],[-132.710008,54.040009],[-131.74999,54.120004],[-132.04948,52.984621],[-131.179043,52.180433],[-131.57783,52.182371],[-132.180428,52.639707],[-132.549992,53.100015],[-133.054611,53.411469],[-133.239664,53.85108],[-133.180004,54.169975],[-132.710008,54.040009]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[141.594076,45.966755,144.654148,54.365881],geometry:{type:"Polygon",coordinates:[[[143.648007,50.7476],[144.654148,48.976391],[143.173928,49.306551],[142.558668,47.861575],[143.533492,46.836728],[143.505277,46.137908],[142.747701,46.740765],[142.09203,45.966755],[141.906925,46.805929],[142.018443,47.780133],[141.904445,48.859189],[142.1358,49.615163],[142.179983,50.952342],[141.594076,51.935435],[141.682546,53.301966],[142.606934,53.762145],[142.209749,54.225476],[142.654786,54.365881],[142.914616,53.704578],[143.260848,52.74076],[143.235268,51.75666],[143.648007,50.7476]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-9.977086,51.669301,-5.661949,55.17286],geometry:{type:"Polygon",coordinates:[[[-6.788857,52.260118],[-8.561617,51.669301],[-9.977086,51.820455],[-9.166283,52.864629],[-9.688525,53.881363],[-8.327987,54.664519],[-7.572168,55.131622],[-6.733847,55.17286],[-5.661949,54.554603],[-6.197885,53.867565],[-6.032985,53.153164],[-6.788857,52.260118]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[10.903914,54.800015,12.690006,56.111407],geometry:{type:"Polygon",coordinates:[[[12.690006,55.609991],[12.089991,54.800015],[11.043543,55.364864],[10.903914,55.779955],[12.370904,56.111407],[12.690006,55.609991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-154.670993,56.734677,-152.141147,57.968968],geometry:{type:"Polygon",coordinates:[[[-153.006314,57.115842],[-154.00509,56.734677],[-154.516403,56.992749],[-154.670993,57.461196],[-153.76278,57.816575],[-153.228729,57.968968],[-152.564791,57.901427],[-152.141147,57.591059],[-153.006314,57.115842]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-6.149981,49.96,1.681531,58.635],geometry:{type:"Polygon",coordinates:[[[-3.005005,58.635],[-4.073828,57.553025],[-3.055002,57.690019],[-1.959281,57.6848],[-2.219988,56.870017],[-3.119003,55.973793],[-2.085009,55.909998],[-1.114991,54.624986],[-.430485,54.464376],[.184981,53.325014],[.469977,52.929999],[1.681531,52.73952],[1.559988,52.099998],[1.050562,51.806761],[1.449865,51.289428],[.550334,50.765739],[-.787517,50.774989],[-2.489998,50.500019],[-2.956274,50.69688],[-3.617448,50.228356],[-4.542508,50.341837],[-5.245023,49.96],[-5.776567,50.159678],[-4.30999,51.210001],[-3.414851,51.426009],[-4.984367,51.593466],[-5.267296,51.9914],[-4.222347,52.301356],[-4.770013,52.840005],[-4.579999,53.495004],[-3.09208,53.404441],[-2.945009,53.985],[-3.630005,54.615013],[-4.844169,54.790971],[-5.082527,55.061601],[-4.719112,55.508473],[-5.047981,55.783986],[-5.586398,55.311146],[-5.644999,56.275015],[-6.149981,56.78501],[-5.786825,57.818848],[-5.009999,58.630013],[-4.211495,58.550845],[-3.005005,58.635]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-167.455277,59.754441,-165.579164,60.38417],geometry:{type:"Polygon",coordinates:[[[-165.579164,59.909987],[-166.19277,59.754441],[-166.848337,59.941406],[-167.455277,60.213069],[-166.467792,60.38417],[-165.67443,60.293607],[-165.579164,59.909987]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-80.36215,61.63308,-79.26582,62.3856],geometry:{type:"Polygon",coordinates:[[[-79.26582,62.158675],[-79.65752,61.63308],[-80.09956,61.7181],[-80.36215,62.01649],[-80.315395,62.085565],[-79.92939,62.3856],[-79.52002,62.36371],[-79.26582,62.158675]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-83.99367,62.15922,-81.87699,62.91409],geometry:{type:"Polygon",coordinates:[[[-81.89825,62.7108],[-83.06857,62.15922],[-83.77462,62.18231],[-83.99367,62.4528],[-83.25048,62.91409],[-81.87699,62.90458],[-81.89825,62.7108]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-171.791111,62.976931,-168.689439,63.782515],geometry:{type:"Polygon",coordinates:[[[-171.731657,63.782515],[-171.114434,63.592191],[-170.491112,63.694975],[-169.682505,63.431116],[-168.689439,63.297506],[-168.771941,63.188598],[-169.52944,62.976931],[-170.290556,63.194438],[-170.671386,63.375822],[-171.553063,63.317789],[-171.791111,63.405846],[-171.731657,63.782515]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-87.221983,63.052379,-80.103451,65.738778],geometry:{type:"Polygon",coordinates:[[[-85.161308,65.657285],[-84.975764,65.217518],[-84.464012,65.371772],[-83.882626,65.109618],[-82.787577,64.766693],[-81.642014,64.455136],[-81.55344,63.979609],[-80.817361,64.057486],[-80.103451,63.725981],[-80.99102,63.411246],[-82.547178,63.651722],[-83.108798,64.101876],[-84.100417,63.569712],[-85.523405,63.052379],[-85.866769,63.637253],[-87.221983,63.541238],[-86.35276,64.035833],[-86.224886,64.822917],[-85.883848,65.738778],[-85.161308,65.657285]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-24.326184,63.496383,-13.609732,66.526792],geometry:{type:"Polygon",coordinates:[[[-14.508695,66.455892],[-14.739637,65.808748],[-13.609732,65.126671],[-14.909834,64.364082],[-17.794438,63.678749],[-18.656246,63.496383],[-19.972755,63.643635],[-22.762972,63.960179],[-21.778484,64.402116],[-23.955044,64.89113],[-22.184403,65.084968],[-22.227423,65.378594],[-24.326184,65.611189],[-23.650515,66.262519],[-22.134922,66.410469],[-20.576284,65.732112],[-19.056842,66.276601],[-17.798624,65.993853],[-16.167819,66.526792],[-14.508695,66.455892]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-77.2364,67.09873,-75.10333,68.28721],geometry:{type:"Polygon",coordinates:[[[-75.86588,67.14886],[-76.98687,67.09873],[-77.2364,67.58809],[-76.81166,68.14856],[-75.89521,68.28721],[-75.1145,68.01036],[-75.10333,67.58202],[-75.21597,67.44425],[-75.86588,67.14886]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,64.25269,-169.89958,68.963636],geometry:{type:"Polygon",coordinates:[[[-175.01425,66.58435],[-174.33983,66.33556],[-174.57182,67.06219],[-171.85731,66.91308],[-169.89958,65.97724],[-170.89107,65.54139],[-172.53025,65.43791],[-172.555,64.46079],[-172.95533,64.25269],[-173.89184,64.2826],[-174.65392,64.63125],[-175.98353,64.92288],[-176.20716,65.35667],[-177.22266,65.52024],[-178.35993,65.39052],[-178.90332,65.74044],[-178.68611,66.11211],[-179.88377,65.87456],[-179.43268,65.40411],[-180,64.979709],[-180,68.963636],[-177.55,68.2],[-174.92825,67.20589],[-175.01425,66.58435]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-99.797401,68.75704,-95.647681,70.14354],geometry:{type:"Polygon",coordinates:[[[-95.647681,69.10769],[-96.269521,68.75704],[-97.617401,69.06003],[-98.431801,68.9507],[-99.797401,69.40003],[-98.917401,69.71003],[-98.218261,70.14354],[-97.157401,69.86003],[-96.557401,69.68003],[-96.257401,69.49003],[-95.647681,69.10769]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[178.7253,70.78114,180,71.515714],geometry:{type:"Polygon",coordinates:[[[180,70.832199],[178.903425,70.78114],[178.7253,71.0988],[180,71.515714],[180,70.832199]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,70.832199,-177.577945,71.55762],geometry:{type:"Polygon",coordinates:[[[-178.69378,70.89302],[-180,70.832199],[-180,71.515714],[-179.871875,71.55762],[-179.02433,71.55553],[-177.577945,71.26948],[-177.663575,71.13277],[-178.69378,70.89302]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-168.110474,-53.856384,-34.72998,71.920471],geometry:{type:"Polygon",coordinates:[[[-90.547119,69.497681],[-90.551514,68.475098],[-89.215088,69.258728],[-88.019592,68.615112],[-88.317505,67.873474],[-87.350098,67.19873],[-86.306091,67.921509],[-85.576599,68.784485],[-85.521912,69.88208],[-84.100769,69.805481],[-82.622498,69.658325],[-81.280396,69.162109],[-81.220215,68.66571],[-81.964294,68.132507],[-81.259277,67.59729],[-81.386475,67.110901],[-83.344482,66.411682],[-84.735413,66.257324],[-85.769409,66.558289],[-86.067627,66.056274],[-87.031372,65.213074],[-87.323181,64.775696],[-88.48291,64.099121],[-89.914429,64.032715],[-90.703979,63.610291],[-90.77002,62.960327],[-91.933411,62.835083],[-93.156982,62.024719],[-94.241516,60.898682],[-94.629272,60.110291],[-94.684509,58.948914],[-93.215027,58.782104],[-92.764587,57.845703],[-92.296997,57.087097],[-90.897705,57.284729],[-89.03949,56.851685],[-88.039795,56.47168],[-87.324219,55.999084],[-86.071228,55.723877],[-85.01178,55.302673],[-83.360474,55.244873],[-82.272827,55.148315],[-82.436218,54.282288],[-82.125,53.2771],[-81.400696,52.157898],[-79.912903,51.208496],[-79.143005,51.533875],[-78.601929,52.562073],[-79.124207,54.141479],[-79.82959,54.667725],[-78.228699,55.136475],[-77.095581,55.837524],[-76.541382,56.534302],[-76.623108,57.202698],[-77.302185,58.052124],[-78.516907,58.804688],[-77.33667,59.852722],[-77.772705,60.757874],[-78.106812,62.319702],[-77.410583,62.550476],[-75.696228,62.278503],[-74.668213,62.181091],[-73.839905,62.443909],[-72.908508,62.105103],[-71.677002,61.52533],[-71.373718,61.137085],[-69.590393,61.061523],[-69.6203,60.221313],[-69.287903,58.957275],[-68.374512,58.801086],[-67.64978,58.212097],[-66.201782,58.767273],[-65.245178,59.870728],[-64.583496,60.335693],[-63.804687,59.442688],[-62.50238,58.167114],[-61.396484,56.967529],[-61.798584,56.339478],[-60.468506,55.775513],[-59.56958,55.204102],[-57.975098,54.945496],[-57.333191,54.626526],[-56.93689,53.780273],[-56.158081,53.647522],[-55.756287,53.270508],[-55.683289,52.146729],[-56.40918,51.770691],[-57.126892,51.419678],[-58.77478,51.06427],[-60.033081,50.24292],[-61.723572,50.080505],[-63.862488,50.291077],[-65.363281,50.298279],[-66.398987,50.228882],[-67.236328,49.511475],[-68.511108,49.068481],[-69.953613,47.744873],[-71.104492,46.821716],[-70.255188,46.986084],[-68.650024,48.30011],[-66.552429,49.133118],[-65.056213,49.23291],[-64.171021,48.742493],[-65.115479,48.070923],[-64.798523,46.993103],[-64.472107,46.238525],[-63.173279,45.739075],[-61.520691,45.883911],[-60.518127,47.007874],[-60.448608,46.282715],[-59.802795,45.920471],[-61.039795,45.26532],[-63.2547,44.670288],[-64.246582,44.265503],[-65.364075,43.545288],[-66.123413,43.618713],[-66.161682,44.465088],[-64.425476,45.292114],[-66.026001,45.259277],[-67.13739,45.137512],[-66.9646,44.809692],[-68.032471,44.325317],[-69.059998,43.980103],[-70.116089,43.684082],[-70.690002,43.03009],[-70.81488,42.865295],[-70.825012,42.335083],[-70.494995,41.805115],[-70.080017,41.78009],[-70.184998,42.145081],[-69.884888,41.922913],[-69.965027,41.637085],[-70.640015,41.475098],[-71.1203,41.494507],[-71.859985,41.320129],[-72.294983,41.270081],[-72.876404,41.220703],[-73.710022,40.931091],[-72.241211,41.119507],[-71.945007,40.930115],[-73.34491,40.630127],[-73.981995,40.628113],[-73.952271,40.750671],[-74.256714,40.473511],[-73.962402,40.427673],[-74.178406,39.70929],[-74.906006,38.939514],[-74.980408,39.196472],[-75.200012,39.248474],[-75.528076,39.498474],[-75.320007,38.960083],[-75.083496,38.781311],[-75.056702,38.404114],[-75.37738,38.015503],[-75.940186,37.216919],[-76.031189,37.256714],[-75.721985,37.937073],[-76.232788,38.319275],[-76.349976,39.150085],[-76.542725,38.717712],[-76.329285,38.083313],[-76.960022,38.23291],[-76.301575,37.918091],[-76.258728,36.966492],[-75.971802,36.897278],[-75.867981,36.551331],[-75.727478,35.55072],[-76.363098,34.808472],[-77.397583,34.512085],[-78.054871,33.925476],[-78.554321,33.861328],[-79.060608,33.49408],[-79.203491,33.158508],[-80.30127,32.509277],[-80.86499,32.033325],[-81.336304,31.440491],[-81.490417,30.730103],[-81.313721,30.035522],[-80.97998,29.180115],[-80.535583,28.472107],[-80.530029,28.0401],[-80.056519,26.880127],[-80.088013,26.205688],[-80.13147,25.816895],[-80.380981,25.206299],[-80.679993,25.080078],[-81.172119,25.201294],[-81.330017,25.640076],[-81.710022,25.870117],[-82.23999,26.730103],[-82.705078,27.495117],[-82.855286,27.886292],[-82.650024,28.55011],[-82.929993,29.100098],[-83.709595,29.936707],[-84.099976,30.090088],[-85.108826,29.636292],[-85.287781,29.686096],[-85.77301,30.15271],[-86.400024,30.400085],[-87.530273,30.274475],[-88.417786,30.384888],[-89.180481,30.316101],[-89.604919,30.176331],[-89.413696,29.894287],[-89.429993,29.488708],[-89.21759,29.291077],[-89.408203,29.159729],[-89.779297,29.307129],[-90.154602,29.117493],[-90.880188,29.148682],[-91.626709,29.677124],[-92.499084,29.552307],[-93.226379,29.783875],[-93.848389,29.713684],[-94.690002,29.480103],[-95.600281,28.738708],[-96.593994,28.307495],[-97.140015,27.830078],[-97.369995,27.380127],[-97.380005,26.690125],[-97.330017,26.210083],[-97.140198,25.869507],[-97.138611,25.86792],[-97.141785,25.865906],[-97.528076,24.992126],[-97.702881,24.272278],[-97.776001,22.932678],[-97.872375,22.444275],[-97.698975,21.898682],[-97.388977,21.411072],[-97.18927,20.635498],[-96.525513,19.89093],[-96.292114,19.320496],[-95.900879,18.828125],[-94.838989,18.562683],[-94.42572,18.144287],[-93.548584,18.423889],[-92.786072,18.524902],[-92.037292,18.704712],[-91.407898,18.876099],[-90.77179,19.284119],[-90.533508,19.867493],[-90.451477,20.70752],[-90.278625,20.999878],[-89.601318,21.261719],[-88.543884,21.493713],[-87.658386,21.458923],[-87.05188,21.543518],[-86.812012,21.331482],[-86.845886,20.849915],[-87.383301,20.255493],[-87.620972,19.646484],[-87.436707,19.472473],[-87.586487,19.0401],[-87.837219,18.259888],[-88.090576,18.516724],[-88.299988,18.500122],[-88.296326,18.353271],[-88.106812,18.348694],[-88.123413,18.076721],[-88.285278,17.644287],[-88.197876,17.489502],[-88.302612,17.131714],[-88.239502,17.036072],[-88.355408,16.530884],[-88.551819,16.265503],[-88.732422,16.233704],[-88.930603,15.887329],[-88.604614,15.706482],[-88.518311,15.85553],[-88.224976,15.727722],[-88.121094,15.688721],[-87.901794,15.864502],[-87.615601,15.878906],[-87.522888,15.797302],[-87.367676,15.846924],[-86.903198,15.756714],[-86.440918,15.782898],[-86.119202,15.893494],[-86.001892,16.005493],[-85.683289,15.953674],[-85.44397,15.885681],[-85.182373,15.909302],[-84.983704,15.995911],[-84.526978,15.8573],[-84.368225,15.835083],[-84.062988,15.648315],[-83.773987,15.424072],[-83.4104,15.270874],[-83.147217,14.995911],[-83.233215,14.899902],[-83.28418,14.676697],[-83.182129,14.31073],[-83.412476,13.970093],[-83.519775,13.567688],[-83.552185,13.127075],[-83.498474,12.869324],[-83.473328,12.419128],[-83.626099,12.320923],[-83.719604,11.893127],[-83.650879,11.629089],[-83.855408,11.373291],[-83.808899,11.103088],[-83.655579,10.938904],[-83.402283,10.395508],[-83.015686,9.993103],[-82.546204,9.566284],[-82.187073,9.20752],[-82.207581,8.995728],[-81.808594,8.950684],[-81.714111,9.032104],[-81.439209,8.786316],[-80.947327,8.858521],[-80.521912,9.111084],[-79.914612,9.312683],[-79.573303,9.611694],[-79.021179,9.552917],[-79.058411,9.454712],[-78.500916,9.420471],[-78.055908,9.247681],[-77.729492,8.946899],[-77.353271,8.670471],[-76.836609,8.638672],[-76.086304,9.336914],[-75.674622,9.443298],[-75.664673,9.774109],[-75.480408,10.61908],[-74.906921,11.08313],[-74.276672,11.102112],[-74.197205,11.310486],[-73.414673,11.227112],[-72.627808,11.732117],[-72.23822,11.955688],[-71.754089,12.437317],[-71.39978,12.376099],[-71.13739,12.113098],[-71.331604,11.776306],[-71.359985,11.5401],[-71.947021,11.423279],[-71.620789,10.969482],[-71.632996,10.446472],[-72.074097,9.865723],[-71.695618,9.072327],[-71.264587,9.137329],[-71.039978,9.860107],[-71.350098,10.211914],[-71.400574,10.969116],[-70.155212,11.375488],[-70.293823,11.846924],[-69.943176,12.162292],[-69.58429,11.459717],[-68.882996,11.443481],[-68.233276,10.885681],[-68.194092,10.554688],[-67.296204,10.545898],[-66.227783,10.648682],[-65.655212,10.200928],[-64.890381,10.077271],[-64.329407,10.389709],[-64.317993,10.641479],[-63.079285,10.701721],[-61.88092,10.715698],[-62.730103,10.420288],[-62.388489,9.948303],[-61.588684,9.873108],[-60.830505,9.381287],[-60.671204,8.580322],[-60.150085,8.602905],[-59.758301,8.367126],[-59.101685,7.999329],[-58.48291,7.347717],[-58.454895,6.832886],[-58.078125,6.809082],[-57.542175,6.321289],[-57.1474,5.973083],[-55.94928,5.772888],[-55.841797,5.953125],[-55.033203,6.02533],[-53.958008,5.756531],[-53.618408,5.646484],[-52.88208,5.409912],[-51.823303,4.565918],[-51.657776,4.156311],[-51.317078,4.203491],[-51.069702,3.650513],[-50.508789,1.901489],[-49.973999,1.736511],[-49.947083,1.046326],[-50.69928,.223083],[-50.388184,-.078369],[-48.620483,-.235413],[-48.584412,-1.237793],[-47.82489,-.581604],[-46.566589,-.940979],[-44.905701,-1.551697],[-44.417603,-2.137695],[-44.581604,-2.691284],[-43.418701,-2.383118],[-41.472595,-2.911987],[-39.978577,-2.872986],[-38.500305,-3.700623],[-37.223206,-4.820923],[-36.452881,-5.109375],[-35.597778,-5.149475],[-35.235413,-5.464905],[-34.895996,-6.73822],[-34.72998,-7.343201],[-35.128174,-8.996399],[-35.636902,-9.649292],[-37.046509,-11.04071],[-37.683594,-12.171204],[-38.423889,-13.038086],[-38.673889,-13.057678],[-38.953186,-13.793396],[-38.882324,-15.666992],[-39.161011,-17.208374],[-39.267273,-17.867676],[-39.583496,-18.262207],[-39.760803,-19.599121],[-40.774719,-20.90448],[-40.944702,-21.937317],[-41.754089,-22.370605],[-41.988281,-22.970093],[-43.074707,-22.967712],[-44.647827,-23.35199],[-45.352112,-23.796814],[-46.472107,-24.088989],[-47.648987,-24.885193],[-48.495483,-25.877014],[-48.640991,-26.623718],[-48.47467,-27.175903],[-48.661499,-28.186096],[-48.888428,-28.674072],[-49.58728,-29.224487],[-50.696899,-30.984375],[-51.576172,-31.77771],[-52.256104,-32.2453],[-52.712097,-33.196594],[-53.373596,-33.768311],[-53.806396,-34.39679],[-54.935791,-34.952576],[-55.674011,-34.752686],[-56.21521,-34.859802],[-57.139709,-34.430481],[-57.81781,-34.462524],[-58.427002,-33.909485],[-58.495422,-34.431519],[-57.225769,-35.288025],[-57.362305,-35.977417],[-56.737488,-36.413086],[-56.788208,-36.901489],[-57.749084,-38.183899],[-59.231812,-38.720215],[-61.237427,-38.928406],[-62.335876,-38.827698],[-62.125793,-39.424072],[-62.330505,-40.172607],[-62.145996,-40.67688],[-62.745789,-41.028687],[-63.770508,-41.166809],[-64.732117,-40.802612],[-65.117981,-41.06427],[-64.978577,-42.057983],[-64.303406,-42.359009],[-63.75592,-42.043701],[-63.458008,-42.56311],[-64.378784,-42.873474],[-65.181824,-43.4953],[-65.328796,-44.501282],[-65.565186,-45.036804],[-66.509888,-45.039612],[-67.293823,-45.55188],[-67.580505,-46.301697],[-66.596985,-47.033875],[-65.640991,-47.236084],[-65.985107,-48.133301],[-67.166199,-48.697327],[-67.816101,-49.86969],[-68.728699,-50.264221],[-69.138489,-50.732483],[-68.815491,-51.771118],[-68.150024,-52.349976],[-68.571472,-52.299377],[-69.461304,-52.29187],[-69.942688,-52.537903],[-70.845093,-52.89917],[-71.006287,-53.833191],[-71.42981,-53.856384],[-72.557922,-53.531372],[-73.702698,-52.835083],[-74.946777,-52.262695],[-75.26001,-51.629272],[-74.976624,-51.043396],[-75.479675,-50.378296],[-75.607971,-48.673706],[-75.182678,-47.711914],[-74.126587,-46.939209],[-75.644409,-46.647583],[-74.692078,-45.763977],[-74.351685,-44.103027],[-73.240295,-44.454895],[-72.717712,-42.383301],[-73.388916,-42.117493],[-73.701294,-43.365784],[-74.331909,-43.224976],[-74.017883,-41.7948],[-73.677124,-39.9422],[-73.21759,-39.258606],[-73.505493,-38.282898],[-73.588013,-37.156311],[-73.166687,-37.123779],[-72.553101,-35.508789],[-71.861694,-33.909119],[-71.438477,-32.418884],[-71.668701,-30.920593],[-71.369995,-30.095703],[-71.489807,-28.861389],[-70.90509,-27.640381],[-70.724976,-25.705872],[-70.403992,-23.628906],[-70.091187,-21.393311],[-70.164429,-19.756409],[-70.372498,-18.3479],[-71.375183,-17.773804],[-71.461975,-17.363403],[-73.444519,-16.359375],[-75.237793,-15.265686],[-76.009216,-14.649292],[-76.423401,-13.823181],[-76.259216,-13.534973],[-77.106201,-12.222717],[-78.092102,-10.377686],[-79.036926,-8.386597],[-79.445923,-7.930786],[-79.760498,-7.194275],[-80.537476,-6.541687],[-81.25,-6.13678],[-80.92627,-5.690491],[-81.410889,-4.736694],[-81.099609,-4.036377],[-80.30249,-3.404785],[-79.770203,-2.657471],[-79.986511,-2.220703],[-80.368713,-2.685181],[-80.967712,-2.246887],[-80.764771,-1.965027],[-80.933594,-1.057373],[-80.583313,-.906677],[-80.399292,-.283691],[-80.020813,.360474],[-80.090576,.768494],[-79.542786,.98291],[-78.855286,1.38092],[-78.990906,1.691284],[-78.617798,1.766479],[-78.662109,2.267273],[-78.427612,2.6297],[-77.931519,2.696716],[-77.510376,3.325073],[-77.127686,3.84967],[-77.496277,4.087708],[-77.307617,4.668091],[-77.533203,5.582886],[-77.318787,5.845276],[-77.476685,6.691101],[-77.881592,7.223877],[-78.214905,7.512329],[-78.429077,8.052124],[-78.182007,8.319275],[-78.435486,8.387695],[-78.62207,8.718079],[-79.1203,8.996094],[-79.5578,8.932495],[-79.760498,8.584473],[-80.16449,8.333313],[-80.382629,8.298523],[-80.480713,8.090271],[-80.003601,7.547485],[-80.276611,7.419678],[-80.421082,7.271484],[-80.886414,7.22052],[-81.059509,7.817871],[-81.189697,7.647888],[-81.51947,7.706726],[-81.721313,8.108887],[-82.131409,8.175476],[-82.390869,8.29248],[-82.820007,8.290894],[-82.850891,8.073914],[-82.965698,8.225098],[-83.508423,8.446899],[-83.711487,8.656921],[-83.596313,8.830505],[-83.632629,9.051514],[-83.909912,9.290894],[-84.303406,9.487488],[-84.647583,9.615479],[-84.713379,9.908081],[-84.975586,10.086731],[-84.911377,9.796082],[-85.110901,9.557129],[-85.339478,9.834473],[-85.660706,9.933289],[-85.797424,10.134888],[-85.791687,10.43927],[-85.659302,10.754272],[-85.941711,10.895325],[-85.712524,11.088501],[-86.058411,11.403503],[-86.525879,11.806885],[-86.745911,12.144104],[-87.16748,12.458313],[-87.668518,12.909912],[-87.557495,13.064697],[-87.392395,12.914124],[-87.316589,12.98468],[-87.48938,13.297485],[-87.793091,13.384521],[-87.904114,13.149109],[-88.483276,13.163879],[-88.843201,13.259705],[-89.256714,13.458679],[-89.812378,13.520691],[-90.095581,13.735474],[-90.608582,13.909912],[-91.232422,13.927917],[-91.689697,14.126282],[-92.227722,14.538879],[-93.359375,15.615479],[-93.875183,15.940308],[-94.691589,16.201111],[-95.250183,16.128296],[-96.053406,15.752075],[-96.557373,15.653503],[-97.263611,15.917114],[-98.013,16.1073],[-98.947693,16.566101],[-99.697388,16.706299],[-100.829529,17.171082],[-101.666077,17.649109],[-101.918518,17.916077],[-102.478088,17.975891],[-103.500977,18.292297],[-103.91748,18.748718],[-104.992004,19.316284],[-105.492981,19.946899],[-105.731384,20.434082],[-105.397705,20.531677],[-105.50061,20.816895],[-105.270691,21.076294],[-105.265808,21.422119],[-105.603088,21.871277],[-105.69342,22.269104],[-106.028687,22.773682],[-106.909912,23.767883],[-107.915405,24.548889],[-108.401917,25.172302],[-109.260193,25.580688],[-109.444092,25.82489],[-109.291626,26.442871],[-109.801392,26.676086],[-110.391724,27.162109],[-110.640991,27.859924],[-111.178894,27.941284],[-111.759583,28.468079],[-112.22821,28.954529],[-112.27179,29.266907],[-112.809509,30.021118],[-113.163818,30.786926],[-113.148682,31.171082],[-113.871887,31.567688],[-114.205688,31.524109],[-114.776428,31.799683],[-114.936707,31.393494],[-114.771179,30.913696],[-114.673889,30.16272],[-114.330994,29.750488],[-113.588806,29.061707],[-113.424011,28.826294],[-113.271912,28.754883],[-113.140015,28.411316],[-112.96228,28.425293],[-112.761597,27.780273],[-112.457886,27.525879],[-112.244873,27.171875],[-111.616516,26.662903],[-111.284607,25.732727],[-110.987793,25.294678],[-110.710022,24.826111],[-110.655029,24.298706],[-110.172791,24.265686],[-109.77179,23.811279],[-109.409119,23.364685],[-109.433411,23.18573],[-109.854187,22.818298],[-110.031311,22.82312],[-110.294983,23.431091],[-110.949524,24.001099],[-111.670593,24.484497],[-112.182007,24.738525],[-112.148987,25.470276],[-112.30072,26.012085],[-112.777283,26.322083],[-113.4646,26.768311],[-113.59668,26.639526],[-113.848877,26.900085],[-114.465698,27.14209],[-115.055115,27.722717],[-114.982178,27.798279],[-114.570312,27.741516],[-114.19928,28.115112],[-114.161987,28.566101],[-114.931824,29.27948],[-115.518677,29.556274],[-115.88739,30.180908],[-116.258301,30.836487],[-116.721497,31.635681],[-117.127686,32.535278],[-117.295898,33.046326],[-117.943909,33.621277],[-118.410583,33.740906],[-118.519897,34.027893],[-119.080994,34.078125],[-119.438782,34.348511],[-120.367798,34.447083],[-120.622803,34.608521],[-120.744324,35.156921],[-121.7146,36.161682],[-122.547485,37.55188],[-122.512024,37.783508],[-122.953186,38.113708],[-123.727112,38.951721],[-123.865112,39.76709],[-124.39801,40.313293],[-124.178772,41.14209],[-124.213684,41.999695],[-124.532776,42.766113],[-124.14209,43.708496],[-123.898926,45.523499],[-124.07959,46.864685],[-124.395691,47.720276],[-124.687195,48.184509],[-124.566101,48.3797],[-123.119995,48.0401],[-122.58728,47.09613],[-122.340027,47.360107],[-122.5,48.180115],[-122.840027,49.000122],[-122.974182,49.002686],[-124.910217,49.98468],[-125.624573,50.416687],[-127.435608,50.830688],[-127.992676,51.715881],[-127.850281,52.329712],[-129.1297,52.755493],[-129.305176,53.561707],[-130.514893,54.28772],[-130.536072,54.802673],[-131.085815,55.178894],[-131.967224,55.497925],[-132.25,56.370117],[-133.539185,57.178894],[-134.078003,58.123108],[-135.038208,58.187683],[-136.627991,58.21228],[-137.799988,58.500122],[-139.867798,59.537903],[-140.825195,59.727478],[-142.574402,60.084473],[-143.958801,59.999329],[-145.925476,60.458679],[-147.11438,60.884705],[-148.224304,60.673096],[-148.018005,59.978271],[-148.570801,59.914307],[-149.727783,59.705688],[-150.608215,59.368286],[-151.716309,59.155884],[-151.859375,59.745117],[-151.409729,60.725891],[-150.346924,61.033691],[-150.621094,61.284485],[-151.895813,60.727295],[-152.578308,60.061707],[-154.019104,59.350281],[-153.287476,58.864685],[-154.232483,58.146484],[-155.307495,57.727905],[-156.308289,57.422913],[-156.556091,56.980103],[-158.117187,56.463684],[-158.433289,55.99408],[-159.603271,55.566711],[-160.289673,55.643677],[-161.223022,55.364685],[-162.237793,55.024292],[-163.069397,54.68988],[-164.785583,54.404297],[-164.9422,54.572327],[-163.848328,55.03949],[-162.869995,55.348083],[-161.804199,55.895081],[-160.563599,56.008118],[-160.070496,56.418091],[-158.684387,57.016724],[-158.461121,57.216919],[-157.722778,57.570129],[-157.550293,58.328308],[-157.041687,58.918884],[-158.194702,58.615906],[-158.517212,58.787903],[-159.058594,58.424316],[-159.711609,58.931519],[-159.981201,58.572693],[-160.355286,59.071106],[-161.35498,58.670898],[-161.968811,58.671692],[-162.054993,59.266907],[-161.874084,59.633728],[-162.518005,59.989685],[-163.818298,59.798096],[-164.66217,60.267517],[-165.346375,60.507507],[-165.350769,61.073914],[-166.121399,61.500122],[-165.734375,62.075073],[-164.919189,62.633118],[-164.5625,63.146484],[-163.753296,63.219482],[-163.0672,63.059509],[-162.260498,63.54187],[-161.534424,63.455872],[-160.772522,63.766113],[-160.958313,64.2229],[-161.518005,64.402893],[-160.77771,64.788696],[-161.391907,64.777283],[-162.453003,64.559509],[-162.757813,64.338684],[-163.546387,64.559082],[-164.960815,64.447083],[-166.425293,64.686707],[-166.844971,65.088928],[-168.110474,65.670105],[-166.7052,66.088318],[-164.47467,66.576721],[-163.652527,66.576721],[-163.788513,66.077271],[-161.677795,66.116089],[-162.489685,66.735474],[-163.719727,67.116516],[-164.430908,67.616272],[-165.390198,68.042908],[-166.764404,68.358887],[-166.204712,68.883118],[-164.430786,68.915527],[-163.168579,69.371094],[-162.930481,69.858093],[-161.908875,70.333313],[-160.934814,70.447693],[-159.039185,70.891724],[-158.11969,70.824707],[-156.580811,71.35791],[-155.06781,71.147888],[-154.344177,70.696472],[-153.900024,70.890076],[-152.210022,70.830078],[-152.27002,70.600098],[-150.73999,70.430115],[-149.719971,70.53009],[-147.613281,70.214111],[-145.690002,70.120117],[-144.919983,69.990112],[-143.589417,70.152527],[-142.07251,69.851929],[-140.985901,69.712097],[-139.120483,69.47113],[-137.546387,68.990112],[-136.503601,68.898071],[-135.625671,69.315125],[-134.414612,69.627502],[-132.929199,69.50531],[-131.431274,69.944519],[-129.794678,70.193726],[-129.107727,69.779297],[-128.361511,70.012878],[-128.138184,70.483887],[-127.447083,70.377319],[-125.756287,69.480713],[-124.424805,70.158508],[-124.289612,69.399719],[-123.061096,69.563721],[-122.683411,69.85553],[-121.47229,69.797913],[-119.94281,69.37793],[-117.6026,69.011292],[-116.226379,68.841492],[-115.246887,68.905884],[-113.897888,68.398926],[-115.30481,67.90271],[-113.497192,67.688293],[-110.797913,67.806091],[-109.946106,67.981079],[-108.880188,67.381531],[-107.792419,67.887512],[-108.812988,68.311707],[-108.167175,68.653931],[-106.950012,68.700073],[-106.150024,68.80011],[-105.342773,68.561279],[-104.337891,68.018127],[-103.221069,68.0979],[-101.454285,67.646912],[-99.901978,67.805725],[-98.443176,67.781677],[-98.558594,68.403931],[-97.669495,68.578674],[-96.119873,68.239502],[-96.125793,67.293518],[-95.48938,68.090698],[-94.684998,68.063904],[-94.232788,69.069092],[-95.304077,69.68573],[-96.471313,70.089905],[-96.391113,71.194885],[-95.208801,71.920471],[-93.889893,71.760071],[-92.878113,71.318726],[-91.519592,70.191284],[-92.406921,69.700073],[-90.547119,69.497681]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-119.40199,68.53554,-100.98078,73.31459],geometry:{type:"Polygon",coordinates:[[[-114.16717,73.12145],[-114.66634,72.65277],[-112.44102,72.9554],[-111.05039,72.4504],[-109.92035,72.96113],[-109.00654,72.63335],[-108.18835,71.65089],[-107.68599,72.06548],[-108.39639,73.08953],[-107.51645,73.23598],[-106.52259,73.07601],[-105.40246,72.67259],[-104.77484,71.6984],[-104.46476,70.99297],[-102.78537,70.49776],[-100.98078,70.02432],[-101.08929,69.58447],[-102.73116,69.50402],[-102.09329,69.11962],[-102.43024,68.75282],[-104.24,68.91],[-105.96,69.18],[-107.12254,69.11922],[-109,68.78],[-111.9668,68.60446],[-113.3132,68.53554],[-113.85496,69.00744],[-115.22,69.28],[-116.10794,69.16821],[-117.34,69.96],[-116.67473,70.06655],[-115.13112,70.2373],[-113.72141,70.19237],[-112.4161,70.36638],[-114.35,70.6],[-116.48684,70.52045],[-117.9048,70.54056],[-118.43238,70.9092],[-116.11311,71.30918],[-117.65568,71.2952],[-119.40199,71.55859],[-118.56267,72.30785],[-117.86642,72.70594],[-115.18909,73.31459],[-114.16717,73.12145]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-106.94,72.76,-104.5,73.64],geometry:{type:"Polygon",coordinates:[[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-80.876099,72.742203,-76.251404,73.75972],geometry:{type:"Polygon",coordinates:[[[-76.34,73.102685],[-76.251404,72.826385],[-77.314438,72.855545],[-78.39167,72.876656],[-79.486252,72.742203],[-79.775833,72.802902],[-80.876099,73.333183],[-80.833885,73.693184],[-80.353058,73.75972],[-78.064438,73.651932],[-76.34,73.102685]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-90.20516,61.930897,-61.851981,73.803816],geometry:{type:"Polygon",coordinates:[[[-86.562179,73.157447],[-85.774371,72.534126],[-84.850112,73.340278],[-82.31559,73.750951],[-80.600088,72.716544],[-80.748942,72.061907],[-78.770639,72.352173],[-77.824624,72.749617],[-75.605845,72.243678],[-74.228616,71.767144],[-74.099141,71.33084],[-72.242226,71.556925],[-71.200015,70.920013],[-68.786054,70.525024],[-67.91497,70.121948],[-66.969033,69.186087],[-68.805123,68.720198],[-66.449866,68.067163],[-64.862314,67.847539],[-63.424934,66.928473],[-61.851981,66.862121],[-62.163177,66.160251],[-63.918444,64.998669],[-65.14886,65.426033],[-66.721219,66.388041],[-68.015016,66.262726],[-68.141287,65.689789],[-67.089646,65.108455],[-65.73208,64.648406],[-65.320168,64.382737],[-64.669406,63.392927],[-65.013804,62.674185],[-66.275045,62.945099],[-68.783186,63.74567],[-67.369681,62.883966],[-66.328297,62.280075],[-66.165568,61.930897],[-68.877367,62.330149],[-71.023437,62.910708],[-72.235379,63.397836],[-71.886278,63.679989],[-73.378306,64.193963],[-74.834419,64.679076],[-74.818503,64.389093],[-77.70998,64.229542],[-78.555949,64.572906],[-77.897281,65.309192],[-76.018274,65.326969],[-73.959795,65.454765],[-74.293883,65.811771],[-73.944912,66.310578],[-72.651167,67.284576],[-72.92606,67.726926],[-73.311618,68.069437],[-74.843307,68.554627],[-76.869101,68.894736],[-76.228649,69.147769],[-77.28737,69.76954],[-78.168634,69.826488],[-78.957242,70.16688],[-79.492455,69.871808],[-81.305471,69.743185],[-84.944706,69.966634],[-87.060003,70.260001],[-88.681713,70.410741],[-89.51342,70.762038],[-88.467721,71.218186],[-89.888151,71.222552],[-90.20516,72.235074],[-89.436577,73.129464],[-88.408242,73.537889],[-85.826151,73.803816],[-86.562179,73.157447]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-102.5,71.27285,-96.54,73.84389],geometry:{type:"Polygon",coordinates:[[[-100.35642,73.84389],[-99.16387,73.63339],[-97.38,73.76],[-97.12,73.47],[-98.05359,72.99052],[-96.54,72.56],[-96.72,71.66],[-98.35966,71.27285],[-99.32286,71.35639],[-100.01482,71.73827],[-102.5,72.51],[-102.48,72.83],[-100.43836,72.70588],[-101.54,73.36],[-100.35642,73.84389]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[139.86312,73.20544,143.60385,73.85758],geometry:{type:"Polygon",coordinates:[[[143.60385,73.21244],[142.08763,73.20544],[140.038155,73.31692],[139.86312,73.36983],[140.81171,73.76506],[142.06207,73.85758],[143.48283,73.47525],[143.60385,73.21244]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-96.033745,72.024596,-90.509793,74.134907],geometry:{type:"Polygon",coordinates:[[[-93.196296,72.771992],[-94.269047,72.024596],[-95.409856,72.061881],[-96.033745,72.940277],[-96.018268,73.43743],[-95.495793,73.862417],[-94.503658,74.134907],[-92.420012,74.100025],[-90.509793,73.856732],[-92.003965,72.966244],[-93.196296,72.771992]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-125.92896,70.90164,-115.51081,74.44893],geometry:{type:"Polygon",coordinates:[[[-120.46,71.4],[-123.09219,70.90164],[-123.62,71.34],[-125.92896,71.86868],[-125.59271,72.19452],[-124.80729,73.02256],[-123.94,73.68],[-124.91775,74.29275],[-121.53788,74.44893],[-120.10978,74.24135],[-117.55564,74.18577],[-116.58442,73.89607],[-115.51081,73.47519],[-116.76794,73.22292],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[146.11919,74.68892,150.73167,75.49682],geometry:{type:"Polygon",coordinates:[[[150.73167,75.08406],[149.575925,74.68892],[147.977465,74.778355],[146.11919,75.17298],[146.358485,75.49682],[148.22223,75.345845],[150.73167,75.08406]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-96.820932,74.592347,-93.612756,75.647218],geometry:{type:"Polygon",coordinates:[[[-93.612756,74.979997],[-94.156909,74.592347],[-95.608681,74.666864],[-96.820932,74.927623],[-96.288587,75.377828],[-94.85082,75.647218],[-93.977747,75.29649],[-93.612756,74.979997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[136.97439,74.61148,145.086285,76.13676],geometry:{type:"Polygon",coordinates:[[[145.086285,75.562625],[144.3,74.82],[140.61381,74.84768],[138.95544,74.61148],[136.97439,75.26167],[137.51176,75.94917],[138.831075,76.13676],[141.471615,76.09289],[145.086285,75.562625]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-102.56552,74.89744,-97.704415,76.72],geometry:{type:"Polygon",coordinates:[[[-98.5,76.72],[-97.735585,76.25656],[-97.704415,75.74344],[-98.16,75],[-99.80874,74.89744],[-100.88366,75.05736],[-100.86292,75.64075],[-102.50209,75.5638],[-102.56552,76.3366],[-101.48973,76.30537],[-99.98349,76.64634],[-98.57699,76.58859],[-98.5,76.72]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-117.7104,74.39427,-105.70498,76.79417],geometry:{type:"Polygon",coordinates:[[[-108.21141,76.20168],[-107.81943,75.84552],[-106.92893,76.01282],[-105.881,75.9694],[-105.70498,75.47951],[-106.31347,75.00527],[-109.7,74.85],[-112.22307,74.41696],[-113.74381,74.39427],[-113.87135,74.72029],[-111.79421,75.1625],[-116.31221,75.04343],[-117.7104,75.2222],[-116.34602,76.19903],[-115.40487,76.47887],[-112.59056,76.14134],[-110.81422,75.54919],[-109.0671,75.47321],[-110.49726,76.42982],[-109.5811,76.79417],[-108.54859,76.67832],[-108.21141,76.20168]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[51.455754,70.632743,68.852211,76.939697],geometry:{type:"Polygon",coordinates:[[[57.535693,70.720464],[56.944979,70.632743],[53.677375,70.762658],[53.412017,71.206662],[51.601895,71.474759],[51.455754,72.014881],[52.478275,72.229442],[52.444169,72.774731],[54.427614,73.627548],[53.50829,73.749814],[55.902459,74.627486],[55.631933,75.081412],[57.868644,75.60939],[61.170044,76.251883],[64.498368,76.439055],[66.210977,76.809782],[68.15706,76.939697],[68.852211,76.544811],[68.180573,76.233642],[64.637326,75.737755],[61.583508,75.260885],[58.477082,74.309056],[56.986786,73.333044],[55.419336,72.371268],[55.622838,71.540595],[57.535693,70.720464]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-97.121379,74.392307,-79.833933,77.161389],geometry:{type:"Polygon",coordinates:[[[-94.684086,77.097878],[-93.573921,76.776296],[-91.605023,76.778518],[-90.741846,76.449597],[-90.969661,76.074013],[-89.822238,75.847774],[-89.187083,75.610166],[-87.838276,75.566189],[-86.379192,75.482421],[-84.789625,75.699204],[-82.753445,75.784315],[-81.128531,75.713983],[-80.057511,75.336849],[-79.833933,74.923127],[-80.457771,74.657304],[-81.948843,74.442459],[-83.228894,74.564028],[-86.097452,74.410032],[-88.15035,74.392307],[-89.764722,74.515555],[-92.422441,74.837758],[-92.768285,75.38682],[-92.889906,75.882655],[-93.893824,76.319244],[-95.962457,76.441381],[-97.121379,76.751078],[-96.745123,77.161389],[-94.684086,77.097878]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-122.854925,75.900019,-116.198587,77.645287],geometry:{type:"Polygon",coordinates:[[[-116.198587,77.645287],[-116.335813,76.876962],[-117.106051,76.530032],[-118.040412,76.481172],[-119.899318,76.053213],[-121.499995,75.900019],[-122.854924,76.116543],[-122.854925,76.116543],[-121.157535,76.864508],[-119.103939,77.51222],[-117.570131,77.498319],[-116.198587,77.645287]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-17.625,-34.819092,180,77.697876],geometry:{type:"Polygon",coordinates:[[[106.970276,76.974304],[107.240112,76.480103],[108.153931,76.723328],[111.077271,76.710083],[113.331482,76.22229],[114.134277,75.847717],[113.885498,75.327881],[112.779297,75.031921],[110.151306,74.476685],[109.400085,74.180115],[110.640076,74.0401],[112.119324,73.78772],[113.01947,73.976929],[113.529724,73.335083],[113.968872,73.59491],[115.567871,73.75293],[118.776306,73.587708],[119.020081,73.120117],[123.200684,72.971313],[123.257874,73.735107],[125.380127,73.56012],[126.976501,73.565491],[128.591309,73.038696],[129.051697,72.398682],[128.460083,71.980103],[129.716125,71.193115],[131.288696,70.787109],[132.253479,71.836304],[133.857727,71.386475],[135.562073,71.655273],[137.497681,71.347717],[138.234131,71.628113],[139.869873,71.487915],[139.147888,72.416321],[140.468079,72.849487],[149.500122,72.200073],[150.351318,71.606506],[152.968872,70.842285],[157.006897,71.031494],[158.997925,70.866699],[159.830322,70.453308],[159.708679,69.722107],[160.940674,69.437317],[162.279114,69.64209],[164.05249,69.668274],[165.940491,69.472107],[167.835693,69.582703],[169.577698,68.693909],[170.816895,69.013672],[170.008301,69.652893],[170.453491,70.097107],[173.643921,69.817505],[175.724121,69.877319],[178.600098,69.400085],[180,68.963722],[180,64.979584],[179.99292,64.974304],[178.707275,64.534912],[177.411316,64.608276],[178.31311,64.075928],[178.908325,63.252075],[179.370483,62.982727],[179.486511,62.569092],[179.228271,62.304077],[177.364319,62.521912],[174.569275,61.769287],[173.680115,61.65271],[172.150085,60.950073],[170.698486,60.336304],[170.330872,59.881897],[168.900513,60.573486],[166.295105,59.788696],[165.840088,60.160095],[164.876892,59.731689],[163.539307,59.868713],[163.217102,59.211121],[162.017273,58.243286],[162.053101,57.839111],[163.191895,57.615112],[163.057922,56.159302],[162.1297,56.122314],[161.701477,55.285706],[162.117493,54.855286],[160.368896,54.344482],[160.021729,53.202698],[158.530884,52.958679],[158.231323,51.942688],[156.789917,51.011108],[156.420105,51.700073],[155.991882,53.158875],[155.433716,55.381104],[155.91449,56.767883],[156.758301,57.364685],[156.810486,57.832092],[158.364319,58.055725],[160.150696,59.31488],[161.87207,60.343079],[163.669678,61.14093],[164.473694,62.55072],[163.258484,62.466309],[162.657898,61.642517],[160.121521,60.544312],[159.302307,61.774109],[156.720703,61.434509],[154.218079,59.758301],[155.043884,59.145081],[152.81189,58.883911],[151.265686,58.780884],[151.338074,59.504089],[149.783691,59.655701],[148.544922,59.16449],[145.487305,59.336487],[142.197876,59.0401],[138.958496,57.088074],[135.126282,54.729675],[136.701721,54.603699],[137.193481,53.977295],[138.164673,53.755127],[138.804688,54.2547],[139.901489,54.189697],[141.345276,53.089722],[141.379272,52.238892],[140.597473,51.239685],[140.513123,50.045471],[140.062073,48.446716],[138.554688,46.999695],[138.219727,46.307922],[136.862305,45.143494],[135.51532,43.989075],[134.869507,43.398315],[133.536926,42.811523],[132.906311,42.798523],[132.278076,43.284485],[130.935913,42.552673],[130.78009,42.220093],[130.400085,42.28009],[129.965881,41.941284],[129.66748,41.601074],[129.705322,40.882874],[129.18811,40.661926],[129.010498,40.485474],[128.633484,40.18988],[127.967529,40.025513],[127.533508,39.756897],[127.502075,39.323914],[127.385498,39.213501],[127.783325,39.050903],[128.34967,38.612305],[129.212891,37.432495],[129.46051,36.784302],[129.468323,35.63208],[129.091492,35.08252],[128.185913,34.890503],[127.386475,34.475708],[126.485718,34.390076],[126.373901,34.934692],[126.559326,35.684692],[126.117493,36.725525],[126.860291,36.893921],[126.174683,37.749695],[125.689087,37.940125],[125.568481,37.752075],[125.27533,37.669128],[125.240112,37.8573],[124.981079,37.948914],[124.71228,38.108276],[124.986084,38.548523],[125.221924,38.665894],[125.132874,38.848694],[125.386719,39.387878],[125.321106,39.551514],[124.737488,39.660278],[124.265686,39.928528],[122.867676,39.637878],[122.131531,39.170471],[121.054688,38.897522],[121.586121,39.360901],[121.376892,39.750305],[122.168701,40.422485],[121.640503,40.946472],[120.768677,40.593506],[119.639709,39.898071],[119.023499,39.252319],[118.042725,39.204285],[117.532715,38.737671],[118.059692,38.061523],[118.878296,37.897278],[118.911682,37.448486],[119.702881,37.156494],[120.823486,37.870483],[121.711304,37.481079],[122.35791,37.454529],[122.520081,36.930725],[121.104309,36.651306],[120.637085,36.111511],[119.664673,35.609924],[119.151306,34.909912],[120.227478,34.360474],[120.620483,33.376709],[121.229126,32.460327],[121.908081,31.692322],[121.891907,30.94928],[121.264282,30.676331],[121.503479,30.142883],[122.092102,29.83252],[121.938477,29.018127],[121.684509,28.225525],[121.125671,28.135681],[120.395508,27.053284],[119.58551,25.740906],[118.656921,24.547485],[117.281677,23.624512],[115.890686,22.782898],[114.763916,22.668091],[114.152527,22.223877],[113.806885,22.548279],[113.241089,22.051514],[111.843689,21.550476],[110.785522,21.397278],[110.444092,20.341125],[109.889893,20.282471],[109.627686,21.008301],[109.864502,21.395081],[108.522888,21.715271],[108.050293,21.55249],[106.715088,20.696899],[105.881714,19.752075],[105.662109,19.058289],[106.42688,18.004089],[107.361877,16.69751],[108.26947,16.079712],[108.877075,15.276672],[109.335327,13.426086],[109.200073,11.66687],[108.366089,11.008301],[107.220886,10.364502],[106.40509,9.530884],[105.158325,8.59967],[104.795288,9.241089],[105.076294,9.918518],[104.334473,10.486694],[103.497314,10.63269],[103.090698,11.153687],[102.585083,12.186707],[101.687073,12.645874],[100.831909,12.627075],[100.978516,13.41272],[100.0979,13.406921],[100.018677,12.307129],[99.478882,10.846497],[99.153687,9.963074],[99.222473,9.239319],[99.873901,9.207886],[100.279724,8.295288],[100.45929,7.429687],[101.017273,6.856873],[101.623108,6.740723],[102.141296,6.22168],[102.371277,6.128296],[102.961731,5.524475],[103.381287,4.855103],[103.438721,4.181702],[103.332092,3.726685],[103.429504,3.382874],[103.502502,2.791077],[103.854675,2.515503],[104.247925,1.631287],[104.228882,1.293091],[103.519714,1.226318],[102.57373,1.967102],[101.390686,2.760925],[101.273682,3.270325],[100.695496,3.939087],[100.557495,4.767273],[100.196716,5.3125],[100.306274,6.04071],[100.085876,6.464478],[99.690674,6.848328],[99.519714,7.343506],[98.988281,7.908081],[98.503906,8.382324],[98.339722,7.794495],[98.150085,8.350098],[98.259277,8.973877],[98.553528,9.933105],[98.457275,10.675293],[98.764526,11.441284],[98.428284,12.033081],[98.509705,13.122498],[98.103699,13.640503],[97.77771,14.83728],[97.597107,16.100708],[97.164673,16.928711],[96.50592,16.427307],[95.369324,15.714478],[94.808472,15.803528],[94.188904,16.038086],[94.533508,17.277283],[94.32489,18.213501],[93.541077,19.366516],[93.66333,19.727112],[93.078308,19.855286],[92.36853,20.670898],[92.082886,21.192322],[92.02533,21.701721],[91.8349,22.182922],[91.417114,22.765076],[90.496094,22.805115],[90.587097,22.392883],[90.272888,21.836487],[89.847473,22.039124],[89.702087,21.857117],[89.418884,21.966309],[89.032104,22.055725],[88.888916,21.690674],[88.208496,21.703308],[86.975708,21.495483],[87.033081,20.743286],[86.499329,20.151672],[85.060303,19.478699],[83.941101,18.302124],[83.18927,17.671326],[82.192871,17.016724],[82.191284,16.556702],[81.692688,16.310303],[80.792114,15.952087],[80.32489,15.899292],[80.025085,15.136475],[80.233276,13.835876],[80.286316,13.006287],[79.862488,12.056274],[79.858093,10.3573],[79.340515,10.308899],[78.885498,9.546082],[79.189697,9.216675],[78.278076,8.933105],[77.941284,8.25293],[77.539917,7.965515],[76.593079,8.899292],[76.130127,10.299683],[75.746521,11.308289],[75.396118,11.781311],[74.864929,12.741882],[74.616699,13.992676],[74.443909,14.61731],[73.534302,15.990723],[73.119873,17.928711],[72.820923,19.208313],[72.824524,20.419495],[72.630676,21.356079],[71.175293,20.757507],[70.47052,20.877319],[69.164124,22.089294],[69.644897,22.450684],[69.34967,22.843323],[68.176697,23.692078],[67.443726,23.944885],[67.145508,24.663696],[66.372925,25.425293],[64.530518,25.237122],[62.905701,25.218506],[61.497498,25.078308],[59.616089,25.380127],[58.525879,25.610107],[57.397278,25.739929],[56.970886,26.966125],[56.492126,27.143311],[55.723694,26.964722],[54.715088,26.480713],[53.493103,26.8125],[52.483704,27.580872],[51.520874,27.865723],[50.853088,28.814514],[50.115112,30.147888],[49.576904,29.985718],[48.941284,30.317078],[48.568115,29.92688],[47.974487,29.975891],[48.183289,29.534485],[48.093872,29.306274],[48.416077,28.552124],[48.807678,27.689697],[49.299683,27.461304],[49.470886,27.110107],[50.152527,26.689697],[50.213074,26.2771],[50.113281,25.944092],[50.239929,25.608093],[50.527527,25.327881],[50.660706,24.999878],[50.81012,24.754883],[50.743896,25.482483],[51.013489,26.00708],[51.286499,26.114685],[51.589111,25.801086],[51.606689,25.215698],[51.389709,24.627502],[51.579529,24.245483],[51.757507,24.294128],[51.794495,24.019897],[52.577087,24.17749],[53.404114,24.151306],[54.008118,24.121887],[54.693115,24.797913],[55.439087,25.439087],[56.070923,26.055481],[56.362122,26.395874],[56.485718,26.309082],[56.391479,25.896118],[56.261108,25.714722],[56.396912,24.924683],[56.845276,24.241699],[57.403503,23.878723],[58.137085,23.747925],[58.729309,23.565674],[59.180481,22.992493],[59.450073,22.660278],[59.808105,22.533691],[59.806274,22.310486],[59.442322,21.714478],[59.282471,21.433899],[58.861084,21.114075],[58.488098,20.429077],[58.034302,20.481506],[57.826477,20.243103],[57.665894,19.736084],[57.788696,19.067688],[57.694519,18.944702],[57.234314,18.94812],[56.60968,18.57428],[56.512329,18.087097],[56.283508,17.876099],[55.661499,17.884277],[55.270081,17.632324],[55.274902,17.228271],[54.791077,16.950684],[54.239319,17.045105],[53.570496,16.707703],[53.108704,16.651123],[52.385315,16.382507],[52.191711,15.938477],[52.168274,15.597473],[51.172485,15.175293],[49.574707,14.708679],[48.679321,14.003296],[48.239075,13.94812],[47.938904,14.007324],[47.354492,13.592285],[46.717102,13.399719],[45.877686,13.3479],[45.625122,13.291077],[45.406494,13.026917],[45.144287,12.953918],[44.989685,12.699707],[44.49469,12.72168],[44.17511,12.585876],[43.483093,12.636902],[43.2229,13.220886],[43.251526,13.7677],[43.088074,14.062683],[42.892273,14.802307],[42.604919,15.213318],[42.805115,15.262085],[42.702515,15.718872],[42.82373,15.911682],[42.77948,16.3479],[42.649719,16.774719],[42.348083,17.075928],[42.270874,17.47467],[41.754517,17.83313],[41.221497,18.671692],[40.93927,19.486511],[40.247681,20.174683],[39.801697,20.338928],[39.139526,21.29187],[39.023682,21.986877],[39.066284,22.579712],[38.49292,23.688477],[38.023926,24.078674],[37.483704,24.285522],[37.154907,24.858521],[37.209473,25.084473],[36.931702,25.603088],[36.639709,25.826294],[36.249084,26.570129],[35.64032,27.376526],[35.13031,28.063477],[34.632324,28.058472],[34.787903,28.607483],[34.832275,28.95752],[34.956116,29.356689],[34.922729,29.501282],[34.641724,29.099487],[34.426697,28.344116],[34.15448,27.823303],[33.921509,27.648682],[33.588074,27.971497],[33.136902,28.417725],[32.423279,29.851074],[32.320496,29.760498],[32.734924,28.705322],[33.348877,27.69989],[34.104675,26.142273],[34.473877,25.598694],[34.795105,25.033875],[35.692505,23.926697],[35.493713,23.752502],[35.526123,23.102478],[36.690674,22.204895],[36.866272,22.000122],[37.188721,21.018921],[36.969482,20.837524],[37.114685,19.808105],[37.481873,18.614075],[37.862671,18.36792],[38.410095,17.998291],[38.990723,16.840698],[39.266113,15.922729],[39.81427,15.43573],[41.179321,14.491089],[41.734924,13.921082],[42.276917,13.344116],[42.589722,13.000488],[43.081299,12.699707],[43.317871,12.390076],[43.286499,11.974915],[42.715881,11.735718],[43.145325,11.462097],[43.470703,11.27771],[43.666687,10.864319],[44.11792,10.445679],[44.614319,10.442322],[45.556885,10.69812],[46.645508,10.816528],[47.525696,11.127319],[48.021729,11.193115],[48.378906,11.375488],[48.948303,11.410706],[49.267883,11.430481],[49.728699,11.578918],[50.258911,11.679688],[50.732117,12.021912],[51.111328,12.024719],[51.133911,11.748291],[51.041504,11.166504],[51.045288,10.64093],[50.83429,10.279724],[50.55249,9.19873],[50.070923,8.081726],[49.452698,6.804688],[48.594482,5.339111],[47.740906,4.219482],[46.56488,2.855286],[45.564087,2.045898],[44.068298,1.052917],[43.136108,.292297],[42.041687,-.919189],[41.811096,-1.446411],[41.585083,-1.683228],[40.884888,-2.08252],[40.637878,-2.499817],[40.263123,-2.57312],[40.121277,-3.27771],[39.80011,-3.681091],[39.604919,-4.346497],[39.202271,-4.676697],[38.740479,-5.908875],[38.799683,-6.475586],[39.440125,-6.840027],[39.470093,-7.099976],[39.194702,-7.703918],[39.252075,-8.007812],[39.186523,-8.485474],[39.535889,-9.112305],[39.949707,-10.098389],[40.316711,-10.317078],[40.478516,-10.765381],[40.437317,-11.761719],[40.560913,-12.639099],[40.59967,-14.201904],[40.775513,-14.691711],[40.477295,-15.406311],[40.089294,-16.100708],[39.452698,-16.720886],[38.53833,-17.101013],[37.411072,-17.586304],[36.281311,-18.659607],[35.896484,-18.842285],[35.198486,-19.552795],[34.786499,-19.783997],[34.701904,-20.497009],[35.176086,-21.254272],[35.373474,-21.84082],[35.385925,-22.140015],[35.562683,-22.090027],[35.533875,-23.070801],[35.371887,-23.535278],[35.607483,-23.706482],[35.458679,-24.12262],[35.04071,-24.478271],[34.215881,-24.816284],[33.013306,-25.357483],[32.574707,-25.727295],[32.660278,-26.148499],[32.916077,-26.215881],[32.830078,-26.742188],[32.580322,-27.470093],[32.46228,-28.301025],[32.203491,-28.75238],[31.521118,-29.257385],[31.325684,-29.401978],[30.901672,-29.909912],[30.622925,-30.423706],[30.055725,-31.140198],[28.925476,-32.171997],[28.219727,-32.771912],[27.464722,-33.22699],[26.419495,-33.614929],[25.909729,-33.666992],[25.780701,-33.94458],[25.172913,-33.796875],[24.677917,-33.987183],[23.594116,-33.794495],[22.988281,-33.916382],[22.57428,-33.864075],[21.542908,-34.258789],[20.689087,-34.417175],[20.071289,-34.795105],[19.616516,-34.819092],[19.193298,-34.462585],[18.855286,-34.444275],[18.424683,-33.997803],[18.377502,-34.136475],[18.244507,-33.867676],[18.250122,-33.281372],[17.925293,-32.611206],[18.247925,-32.429077],[18.22168,-31.661621],[17.566895,-30.725708],[17.064514,-29.878601],[17.062927,-29.875977],[16.345093,-28.576721],[15.601929,-27.821228],[15.21051,-27.090881],[14.989685,-26.11731],[14.743286,-25.392883],[14.408081,-23.853027],[14.385681,-22.656677],[14.25769,-22.111206],[13.868713,-21.698975],[13.352478,-20.872803],[12.826904,-19.673096],[12.608704,-19.045288],[11.794922,-18.069092],[11.734314,-17.30188],[11.640076,-16.673096],[11.778687,-15.793823],[12.123718,-14.878296],[12.17572,-14.449097],[12.500122,-13.547729],[12.738525,-13.137878],[13.312927,-12.483582],[13.633728,-12.038574],[13.738708,-11.297791],[13.686523,-10.731079],[13.387329,-10.373596],[13.121094,-9.766907],[12.875488,-9.16687],[12.929077,-8.959106],[13.236511,-8.562622],[12.933105,-7.596497],[12.728271,-6.927124],[12.227478,-6.294373],[12.32251,-6.100098],[12.182312,-5.789917],[11.9151,-5.037903],[11.093689,-3.978821],[10.066284,-2.969482],[9.405273,-2.144287],[8.798096,-1.111328],[8.830078,-.778992],[9.048523,-.45929],[9.291321,.268677],[9.49292,1.010071],[9.305725,1.160889],[9.649292,2.283875],[9.795288,3.073486],[9.40448,3.734497],[8.94812,3.904114],[8.744873,4.352295],[8.488892,4.495728],[8.500305,4.772095],[7.462097,4.412109],[7.082703,4.464722],[6.69812,4.240723],[5.898315,4.262512],[5.362915,4.888123],[5.033691,5.611877],[4.325684,6.270691],[3.57428,6.258301],[2.691711,6.258911],[1.865295,6.142273],[1.06012,5.928894],[-.507629,5.343506],[-1.063599,5.000488],[-1.964722,4.71051],[-2.856079,4.994507],[-3.311096,4.984314],[-4.008789,5.179871],[-4.649902,5.168274],[-5.834412,4.993713],[-6.528687,4.705078],[-7.518921,4.338318],[-7.712097,4.364685],[-7.974121,4.355896],[-9.004822,4.83252],[-9.913391,5.593689],[-10.765381,6.140686],[-11.438782,6.785889],[-11.708191,6.860107],[-12.428101,7.262878],[-12.948975,7.798706],[-13.124023,8.163879],[-13.246521,8.903076],[-13.685181,9.494873],[-14.073975,9.886292],[-14.330078,10.015686],[-14.579712,10.214478],[-14.693176,10.656311],[-14.839478,10.876709],[-15.13031,11.040527],[-15.664185,11.458496],[-16.085205,11.524719],[-16.314697,11.806519],[-16.308899,11.958679],[-16.61377,12.170898],[-16.677429,12.384888],[-16.841492,13.151489],[-16.713684,13.595093],[-17.126099,14.373474],[-17.625,14.729675],[-17.185181,14.919495],[-16.700684,15.621521],[-16.463013,16.135071],[-16.549683,16.673889],[-16.270508,17.167114],[-16.146301,18.108521],[-16.256897,19.09668],[-16.377625,19.593872],[-16.277771,20.092529],[-16.536316,20.567871],[-17.063416,20.999878],[-17.020386,21.422302],[-16.973206,21.885681],[-16.589111,22.158325],[-16.261902,22.679321],[-16.326416,23.017883],[-15.982605,23.723511],[-15.426025,24.359131],[-15.089294,24.520325],[-14.824585,25.103516],[-14.800903,25.636292],[-14.43988,26.254517],[-13.773804,26.618896],[-13.139893,27.640076],[-12.618774,28.03833],[-11.688904,28.148682],[-10.900879,28.832275],[-10.399597,29.098694],[-9.564819,29.933716],[-9.814697,31.177673],[-9.434814,32.038086],[-9.30072,32.564697],[-8.65741,33.240295],[-7.654175,33.697083],[-6.912476,34.110474],[-6.244324,35.145874],[-5.929993,35.760071],[-5.193787,35.75531],[-4.591003,35.330688],[-3.640076,35.399902],[-2.604309,35.179077],[-2.169922,35.168518],[-1.208618,35.714905],[-.12738,35.888672],[.503906,36.301331],[1.466919,36.605713],[3.161682,36.783875],[4.815674,36.865112],[5.320129,36.716492],[6.261902,37.110718],[7.330505,37.11853],[7.737122,36.885681],[8.421082,36.946472],[9.510071,37.350098],[10.210083,37.230103],[10.180725,36.724121],[11.028931,37.092102],[11.100098,36.900085],[10.600098,36.410095],[10.593323,35.94751],[10.939514,35.699097],[10.807922,34.833496],[10.149719,34.330688],[10.339722,33.785889],[10.856873,33.768677],[11.108521,33.293274],[11.488892,33.137085],[12.66333,32.792908],[13.083313,32.878906],[13.918701,32.712097],[15.245728,32.265076],[15.713928,31.376282],[16.611694,31.182312],[18.021118,30.763489],[19.086487,30.266479],[19.574097,30.525879],[20.053284,30.985901],[19.820312,31.751892],[20.134094,32.238281],[20.854492,32.706909],[21.543091,32.843323],[22.895874,32.638489],[23.236877,32.191528],[23.609131,32.187317],[23.92749,32.016724],[24.921082,31.899475],[25.164917,31.569275],[26.4953,31.585693],[27.457703,31.321289],[28.4505,31.025879],[28.913513,30.870117],[29.683472,31.18689],[30.095093,31.473511],[30.976929,31.555908],[31.68811,31.429688],[31.96051,30.933716],[32.192505,31.260315],[32.993896,31.024109],[33.773499,30.967529],[34.265503,31.219482],[34.556519,31.548889],[34.488098,31.60553],[34.752686,32.072876],[34.955505,32.827515],[35.098511,33.080688],[35.126099,33.090881],[35.4823,33.905518],[35.979675,34.610107],[35.998474,34.644897],[35.90509,35.410095],[36.149902,35.821472],[35.782104,36.275085],[36.160889,36.650696],[35.551086,36.565491],[34.714478,36.795471],[34.026917,36.220093],[32.509277,36.107483],[31.699707,36.644287],[30.621704,36.677917],[30.391113,36.263123],[29.700073,36.144287],[28.73291,36.67688],[27.641296,36.658875],[27.048889,37.653503],[26.318298,38.20813],[26.804688,38.985901],[26.170898,39.463684],[27.28009,40.420105],[28.820129,40.460083],[29.240112,41.220093],[31.145874,41.087708],[32.348083,41.736328],[33.513306,42.019104],[35.167725,42.040283],[36.913086,41.33551],[38.347717,40.94873],[39.512695,41.102905],[40.373474,41.013672],[41.554077,41.535706],[41.703308,41.963074],[41.453491,42.645081],[40.875488,43.013672],[40.321472,43.128723],[39.955078,43.43512],[38.680115,44.28009],[37.539124,44.657288],[36.675476,45.24469],[37.40332,45.40448],[38.233093,46.240906],[37.673706,46.636719],[39.147705,47.044678],[39.121277,47.263489],[38.223694,47.102295],[37.42511,47.022278],[36.759888,46.69873],[35.82373,46.645874],[34.96228,46.273315],[35.020874,45.651306],[35.510071,45.410095],[36.53009,45.470093],[36.334717,45.113281],[35.240112,44.940125],[33.882507,44.361511],[33.326477,44.56488],[33.546875,45.034912],[32.454285,45.327515],[32.63092,45.519287],[33.588074,45.851685],[33.298706,46.080688],[31.74408,46.333496],[31.675293,46.706299],[30.748901,46.58313],[30.377686,46.032471],[29.603271,45.293274],[29.626526,45.035522],[29.141724,44.820312],[28.837891,44.913879],[28.558105,43.70752],[28.039124,43.293274],[27.673889,42.577881],[27.996704,42.007507],[28.115479,41.622925],[28.988525,41.299927],[28.806519,41.054871],[27.61908,40.999878],[27.192505,40.690674],[26.358093,40.1521],[26.043274,40.617676],[26.056885,40.824097],[25.447693,40.852478],[24.925903,40.947083],[23.714905,40.687073],[24.408081,40.125122],[23.900085,39.962097],[23.343079,39.961121],[22.814087,40.476074],[22.626282,40.256531],[22.84967,39.659302],[23.350098,39.190125],[22.973083,38.970886],[23.53009,38.510071],[24.025085,38.220093],[24.0401,37.65509],[23.115112,37.920105],[23.410095,37.410095],[22.775085,37.305115],[23.154297,36.422485],[22.490112,36.410095],[21.670105,36.845093],[21.295105,37.645081],[21.120117,38.310303],[20.730103,38.770081],[20.217712,39.340271],[20.150085,39.625122],[19.980103,39.695129],[19.960083,39.9151],[19.406128,40.250916],[19.319092,40.727295],[19.403687,41.409485],[19.5401,41.720093],[19.371887,41.877686],[19.162476,41.955078],[18.88208,42.281494],[18.450073,42.480103],[17.509888,42.850098],[16.930115,43.210083],[16.015503,43.507324],[15.1745,44.243286],[15.376282,44.317871],[14.920288,44.738525],[14.901672,45.076111],[14.258728,45.233887],[13.952271,44.802124],[13.657104,45.137085],[13.679504,45.484131],[13.715088,45.500305],[13.937683,45.591125],[13.141724,45.736694],[12.328674,45.381897],[12.383911,44.885498],[12.261475,44.600525],[12.589294,44.091492],[13.526917,43.587708],[14.029907,42.761108],[15.1427,41.955078],[15.926331,41.961304],[16.169922,41.740295],[15.889282,41.541077],[16.785095,41.179688],[17.519287,40.877075],[18.376709,40.355713],[18.480286,40.168884],[18.293518,39.810913],[17.738525,40.27771],[16.86969,40.442322],[16.44873,39.795471],[17.171509,39.424683],[17.052917,38.902893],[16.635071,38.843689],[16.101074,37.985901],[15.684082,37.908875],[15.68811,38.214722],[15.89209,38.750916],[16.109314,38.964478],[15.718872,39.544128],[15.413696,40.048279],[14.998474,40.173096],[14.703308,40.604675],[14.06073,40.786499],[13.628113,41.188293],[12.888123,41.253113],[12.106689,41.704529],[11.191895,42.35553],[10.512085,42.931519],[10.200073,43.920105],[9.702515,44.036316],[8.888916,44.366272],[8.428711,44.231323],[7.850891,43.767273],[7.435303,43.693909],[6.529297,43.128906],[4.556885,43.399719],[3.100525,43.075317],[2.986084,42.473083],[3.03949,41.89209],[2.091919,41.226074],[.810486,41.014709],[.721313,40.678284],[.106689,40.124084],[-.278687,39.31012],[.111328,38.738525],[-.467102,38.29248],[-.683411,37.642273],[-1.438293,37.443115],[-2.146423,36.674072],[-3.41571,36.658875],[-4.368896,36.677917],[-4.995178,36.324707],[-5.377075,35.946899],[-5.866394,36.029907],[-6.236694,36.367676],[-6.520203,36.942871],[-7.453674,37.0979],[-7.855591,36.838318],[-8.382812,36.978882],[-8.898804,36.868896],[-8.746094,37.651489],[-8.840027,38.266296],[-9.287476,38.358521],[-9.526489,38.737488],[-9.446899,39.39209],[-9.048279,39.755127],[-8.977295,40.159302],[-8.768677,40.760681],[-8.790771,41.184326],[-8.990784,41.543518],[-9.03479,41.880676],[-8.984375,42.592896],[-9.392883,43.026672],[-7.97821,43.748474],[-6.754517,43.567871],[-5.411804,43.57428],[-4.347778,43.403503],[-3.517517,43.455872],[-1.901306,43.422913],[-1.384216,44.022705],[-1.193787,46.014893],[-2.225708,47.064514],[-2.963196,47.570312],[-4.491577,47.955078],[-4.592285,48.684082],[-3.295776,48.901672],[-1.616516,48.64447],[-1.933411,49.776489],[-.98938,49.347473],[1.338684,50.127319],[1.639099,50.946716],[2.513489,51.148499],[3.315125,51.345886],[3.830322,51.620483],[4.706116,53.091919],[6.07428,53.510498],[6.905273,53.4823],[7.100525,53.693909],[7.936279,53.748291],[8.121704,53.527893],[8.80072,54.020874],[8.572083,54.395691],[8.526306,54.962891],[8.1203,55.5177],[8.090088,56.5401],[8.256714,56.81012],[8.543518,57.110107],[9.4245,57.172119],[9.775696,57.447876],[10.580078,57.730103],[10.546082,57.215881],[10.250122,56.890076],[10.370117,56.610107],[10.912292,56.458679],[10.667908,56.081482],[10.370117,56.190125],[9.650085,55.470093],[9.921875,54.983093],[9.939697,54.59668],[10.950073,54.363708],[10.939514,54.008728],[11.956299,54.196472],[12.518494,54.47052],[13.647522,54.0755],[14.11969,53.75708],[14.802917,54.05072],[16.363525,54.513306],[17.622925,54.851685],[18.620911,54.682678],[18.696289,54.438721],[19.660706,54.426086],[19.888489,54.866089],[21.268494,55.190491],[21.055908,56.031128],[21.090515,56.783875],[21.581909,57.411926],[22.524475,57.753479],[23.318481,57.006287],[24.120728,57.025696],[24.312927,57.793518],[24.429077,58.383484],[24.061279,58.257507],[23.426697,58.612671],[23.339905,59.187317],[24.604309,59.465881],[25.864319,59.611084],[26.94928,59.445923],[27.981079,59.475525],[29.117676,60.028076],[28.070129,60.503479],[26.25531,60.423889],[24.496704,60.057312],[22.86969,59.846497],[22.290894,60.391907],[21.322327,60.720276],[21.544922,61.705322],[21.059326,62.607483],[21.536072,63.18988],[22.442688,63.817871],[24.73053,64.902283],[25.398071,65.111511],[25.294128,65.534485],[23.903503,66.006897],[22.183289,65.723877],[21.213501,65.026123],[21.36969,64.413696],[19.778931,63.60968],[17.8479,62.749512],[17.11969,61.341309],[17.831482,60.636719],[18.78772,60.081909],[17.869324,58.953918],[16.829285,58.71991],[16.447693,57.041077],[15.879883,56.104309],[14.666687,56.200928],[14.100708,55.407898],[12.942871,55.361877],[12.625122,56.307129],[11.788086,57.441895],[11.027283,58.856079],[10.356689,59.46991],[8.38208,58.313293],[7.048889,58.078918],[5.665894,58.588074],[5.308289,59.66333],[4.992126,61.97113],[5.912903,62.614502],[8.553528,63.454102],[10.52771,64.486084],[12.358276,65.8797],[14.761292,67.81073],[16.435913,68.563293],[19.184082,69.817505],[21.378479,70.25531],[23.023682,70.202087],[24.546692,71.030518],[26.370117,70.986328],[28.165527,71.185486],[31.293518,70.453918],[30.005493,70.186279],[31.101074,69.558105],[32.13269,69.905884],[33.775513,69.301514],[36.514099,69.063477],[40.29248,67.932495],[41.059875,67.457275],[41.126099,66.791687],[40.01593,66.266296],[38.382874,65.999512],[33.918701,66.759705],[33.184509,66.632507],[34.81488,65.900085],[34.943909,64.41449],[36.231323,64.109497],[37.012878,63.849915],[37.14209,64.334717],[36.5177,64.780273],[37.176086,65.143311],[39.593506,64.520874],[40.43573,64.764526],[39.762695,65.496887],[42.093079,66.476318],[43.016113,66.418701],[43.94989,66.069092],[44.532288,66.756287],[43.698486,67.352478],[44.187927,67.9505],[43.452881,68.570923],[46.250122,68.250122],[46.821289,67.68988],[45.555298,67.566528],[45.562073,67.010071],[46.349121,66.667725],[47.894287,66.884521],[48.138672,67.522522],[50.227722,67.998718],[53.717529,68.857483],[54.47168,68.808289],[53.485901,68.201294],[54.726318,68.097107],[55.442688,68.438721],[57.317078,68.466309],[58.802124,68.88092],[59.941528,68.278503],[61.077881,68.940674],[60.03009,69.520081],[60.55011,69.850098],[63.504089,69.547485],[64.888123,69.234924],[68.512085,68.092285],[69.180725,68.615723],[68.16449,69.144287],[68.135315,69.356506],[66.930115,69.454712],[67.259888,69.928711],[66.724915,70.708923],[66.694702,71.029114],[68.5401,71.934509],[69.196289,72.843506],[69.940125,73.0401],[72.587524,72.776306],[72.796082,72.220093],[71.848083,71.409119],[72.470093,71.090271],[72.79187,70.391113],[72.564697,69.020874],[73.667908,68.407898],[73.238708,67.740479],[71.28009,66.320129],[72.423096,66.172729],[72.820679,66.532715],[73.921082,66.78949],[74.186523,67.284302],[75.052124,67.760498],[74.469299,68.329102],[74.935913,68.989319],[73.842285,69.071472],[73.601929,69.627686],[74.399902,70.631897],[73.101074,71.447083],[74.89093,72.121277],[74.659302,72.832275],[75.158081,72.855103],[75.683472,72.300476],[75.289124,71.335693],[76.359131,71.152893],[75.903076,71.874084],[77.576721,72.267273],[79.6521,72.320129],[81.500122,71.750122],[80.610718,72.582886],[80.511108,73.648315],[82.250122,73.850098],[84.655273,73.805908],[86.822327,73.93689],[86.009705,74.459717],[87.16687,75.116516],[88.315674,75.143921],[90.260071,75.640076],[92.900696,75.773315],[93.234314,76.047302],[95.860107,76.140076],[96.678284,75.915527],[98.922485,76.446899],[100.759705,76.430298],[101.035278,76.861877],[101.990906,77.287476],[104.351685,77.697876],[106.066711,77.373901],[104.705078,77.127502],[106.970276,76.974304]],[[49.110291,41.282288],[49.618896,40.572876],[50.0849,40.526306],[50.392883,40.256531],[49.569275,40.176086],[49.395325,39.399475],[49.223328,39.049316],[48.856506,38.815491],[48.883301,38.320313],[49.199707,37.582886],[50.147888,37.374695],[50.842285,36.872925],[52.264099,36.7005],[53.825928,36.965088],[53.921692,37.198914],[53.735474,37.906128],[53.88092,38.952087],[53.101074,39.29071],[53.35791,39.975281],[52.694092,40.033691],[52.915283,40.876526],[53.858276,40.631104],[54.736877,40.951111],[54.008301,41.551331],[53.72168,42.123291],[52.916687,41.868103],[52.814697,41.135498],[52.502502,41.783325],[52.446289,42.027283],[52.692078,42.443909],[52.501526,42.792297],[51.342529,43.133118],[50.891296,44.031128],[50.339111,44.284119],[50.305725,44.609924],[51.278503,44.514893],[51.316895,45.246094],[52.16748,45.408508],[53.040894,45.259094],[53.220886,46.23468],[53.042725,46.853088],[52.042114,46.804687],[51.192078,47.048706],[50.034119,46.609131],[49.101318,46.399475],[48.645508,45.806274],[47.675903,45.641479],[46.682129,44.609314],[47.590881,43.660278],[47.492493,42.986694],[48.584473,41.808899],[49.110291,41.282288]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-96.436304,77.491343,-93.720656,77.834629],geometry:{type:"Polygon",coordinates:[[[-93.840003,77.519997],[-94.295608,77.491343],[-96.169654,77.555111],[-96.436304,77.834629],[-94.422577,77.820005],[-93.720656,77.634331],[-93.840003,77.519997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-113.534279,77.409229,-109.854452,78.152956],geometry:{type:"Polygon",coordinates:[[[-110.186938,77.697015],[-112.051191,77.409229],[-113.534279,77.732207],[-112.724587,78.05105],[-111.264443,78.152956],[-109.854452,77.996325],[-110.186938,77.697015]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[20.72601,77.44493,24.72412,78.45494],geometry:{type:"Polygon",coordinates:[[[24.72412,77.85385],[22.49032,77.44493],[20.72601,77.67704],[21.41611,77.93504],[20.8119,78.25463],[22.88426,78.45494],[23.28134,78.07954],[24.72412,77.85385]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-112.542091,78.40692,-109.663146,78.849994],geometry:{type:"Polygon",coordinates:[[[-109.663146,78.601973],[-110.881314,78.40692],[-112.542091,78.407902],[-112.525891,78.550555],[-111.50001,78.849994],[-110.963661,78.804441],[-109.663146,78.601973]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-98.631984,77.850597,-95.559278,78.87193],geometry:{type:"Polygon",coordinates:[[[-95.830295,78.056941],[-97.309843,77.850597],[-98.124289,78.082857],[-98.552868,78.458105],[-98.631984,78.87193],[-97.337231,78.831984],[-96.754399,78.765813],[-95.559278,78.418315],[-95.830295,78.056941]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-105.492289,77.907545,-99.670939,79.301594],geometry:{type:"Polygon",coordinates:[[[-100.060192,78.324754],[-99.670939,77.907545],[-101.30394,78.018985],[-102.949809,78.343229],[-105.176133,78.380332],[-104.210429,78.67742],[-105.41958,78.918336],[-105.492289,79.301594],[-103.529282,79.165349],[-100.825158,78.800462],[-100.060192,78.324754]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[99.43814,77.921,105.37243,79.34641],geometry:{type:"Polygon",coordinates:[[[105.07547,78.30689],[99.43814,77.921],[101.2649,79.23399],[102.08635,79.34641],[102.837815,79.28129],[105.37243,78.71334],[105.07547,78.30689]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[10.44453,76.77045,21.54383,80.05086],geometry:{type:"Polygon",coordinates:[[[18.25183,79.70175],[21.54383,78.95611],[19.02737,78.5626],[18.47172,77.82669],[17.59441,77.63796],[17.1182,76.80941],[15.91315,76.77045],[13.76259,77.38035],[14.66956,77.73565],[13.1706,78.02493],[11.22231,78.8693],[10.44453,79.65239],[13.17077,80.01046],[13.71852,79.66039],[15.14282,79.67431],[15.52255,80.01608],[16.99085,80.05086],[18.25183,79.70175]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[17.368015,79.400012,27.407506,80.657144],geometry:{type:"Polygon",coordinates:[[[25.447625,80.40734],[27.407506,80.056406],[25.924651,79.517834],[23.024466,79.400012],[20.075188,79.566823],[19.897266,79.842362],[18.462264,79.85988],[17.368015,80.318896],[20.455992,80.598156],[21.907945,80.357679],[22.919253,80.657144],[25.447625,80.40734]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[44.846958,80.010181,51.522933,80.918885],geometry:{type:"Polygon",coordinates:[[[51.136187,80.54728],[49.793685,80.415428],[48.894411,80.339567],[48.754937,80.175468],[47.586119,80.010181],[46.502826,80.247247],[47.072455,80.559424],[44.846958,80.58981],[46.799139,80.771918],[48.318477,80.78401],[48.522806,80.514569],[49.09719,80.753986],[50.039768,80.918885],[51.522933,80.699726],[51.136187,80.54728]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[91.18107,78.7562,100.186655,81.2504],geometry:{type:"Polygon",coordinates:[[[99.93976,78.88094],[97.75794,78.7562],[94.97259,79.044745],[93.31288,79.4265],[92.5454,80.14379],[91.18107,80.34146],[93.77766,81.0246],[95.940895,81.2504],[97.88385,80.746975],[100.186655,79.780135],[99.93976,78.88094]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-96.70972,78.21533,-85.81435,81.25739],geometry:{type:"Polygon",coordinates:[[[-87.02,79.66],[-85.81435,79.3369],[-87.18756,79.0393],[-89.03535,78.28723],[-90.80436,78.21533],[-92.87669,78.34333],[-93.95116,78.75099],[-93.93574,79.11373],[-93.14524,79.3801],[-94.974,79.37248],[-96.07614,79.70502],[-96.70972,80.15777],[-96.01644,80.60233],[-95.32345,80.90729],[-94.29843,80.97727],[-94.73542,81.20646],[-92.40984,81.25739],[-91.13289,80.72345],[-89.45,80.509322],[-87.81,80.32],[-87.02,79.66]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-91.58702,76.17812,-61.85,83.23324],geometry:{type:"Polygon",coordinates:[[[-68.5,83.106322],[-65.82735,83.02801],[-63.68,82.9],[-61.85,82.6286],[-61.89388,82.36165],[-64.334,81.92775],[-66.75342,81.72527],[-67.65755,81.50141],[-65.48031,81.50657],[-67.84,80.9],[-69.4697,80.61683],[-71.18,79.8],[-73.2428,79.63415],[-73.88,79.430162],[-76.90773,79.32309],[-75.52924,79.19766],[-76.22046,79.01907],[-75.39345,78.52581],[-76.34354,78.18296],[-77.88851,77.89991],[-78.36269,77.50859],[-79.75951,77.20968],[-79.61965,76.98336],[-77.91089,77.022045],[-77.88911,76.777955],[-80.56125,76.17812],[-83.17439,76.45403],[-86.11184,76.29901],[-87.6,76.42],[-89.49068,76.47239],[-89.6161,76.95213],[-87.76739,77.17833],[-88.26,77.9],[-87.65,77.970222],[-84.97634,77.53873],[-86.34,78.18],[-87.96192,78.37181],[-87.15198,78.75867],[-85.37868,78.9969],[-85.09495,79.34543],[-86.50734,79.73624],[-86.93179,80.25145],[-84.19844,80.20836],[-83.408696,80.1],[-81.84823,80.46442],[-84.1,80.58],[-87.59895,80.51627],[-89.36663,80.85569],[-90.2,81.26],[-91.36786,81.5531],[-91.58702,81.89429],[-90.1,82.085],[-88.93227,82.11751],[-86.97024,82.27961],[-85.5,82.652273],[-84.260005,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.30664,83.13056],[-76.25,83.172059],[-75.71878,83.06404],[-72.83153,83.23324],[-70.665765,83.169781],[-68.5,83.106322]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-73.297,60.03676,-12.20855,83.64513],geometry:{type:"Polygon",coordinates:[[[-27.10046,83.51966],[-20.84539,82.72669],[-22.69182,82.34165],[-26.51753,82.29765],[-31.9,82.2],[-31.39646,82.02154],[-27.85666,82.13178],[-24.84448,81.78697],[-22.90328,82.09317],[-22.07175,81.73449],[-23.16961,81.15271],[-20.62363,81.52462],[-15.76818,81.91245],[-12.77018,81.71885],[-12.20855,81.29154],[-16.28533,80.58004],[-16.85,80.35],[-20.04624,80.17708],[-17.73035,80.12912],[-18.9,79.4],[-19.70499,78.75128],[-19.67353,77.63859],[-18.47285,76.98565],[-20.03503,76.94434],[-21.67944,76.62795],[-19.83407,76.09808],[-19.59896,75.24838],[-20.66818,75.15585],[-19.37281,74.29561],[-21.59422,74.22382],[-20.43454,73.81713],[-20.76234,73.46436],[-22.17221,73.30955],[-23.56593,73.30663],[-22.31311,72.62928],[-22.29954,72.18409],[-24.27834,72.59788],[-24.79296,72.3302],[-23.44296,72.08016],[-22.13281,71.46898],[-21.75356,70.66369],[-23.53603,70.471],[-24.30702,70.85649],[-25.54341,71.43094],[-25.20135,70.75226],[-26.36276,70.22646],[-23.72742,70.18401],[-22.34902,70.12946],[-25.02927,69.2588],[-27.74737,68.47046],[-30.67371,68.12503],[-31.77665,68.12078],[-32.81105,67.73547],[-34.20196,66.67974],[-36.35284,65.9789],[-37.04378,65.93768],[-38.37505,65.69213],[-39.81222,65.45848],[-40.66899,64.83997],[-40.68281,64.13902],[-41.1887,63.48246],[-42.81938,62.68233],[-42.41666,61.90093],[-42.86619,61.07404],[-43.3784,60.09772],[-44.7875,60.03676],[-46.26364,60.85328],[-48.26294,60.85843],[-49.23308,61.40681],[-49.90039,62.38336],[-51.63325,63.62691],[-52.14014,64.27842],[-52.27659,65.1767],[-53.66166,66.09957],[-53.30161,66.8365],[-53.96911,67.18899],[-52.9804,68.35759],[-51.47536,68.72958],[-51.08041,69.14781],[-50.87122,69.9291],[-52.013585,69.574925],[-52.55792,69.42616],[-53.45629,69.283625],[-54.68336,69.61003],[-54.75001,70.28932],[-54.35884,70.821315],[-53.431315,70.835755],[-51.39014,70.56978],[-53.10937,71.20485],[-54.00422,71.54719],[-55,71.406537],[-55.83468,71.65444],[-54.71819,72.58625],[-55.32634,72.95861],[-56.12003,73.64977],[-57.32363,74.71026],[-58.59679,75.09861],[-58.58516,75.51727],[-61.26861,76.10238],[-63.39165,76.1752],[-66.06427,76.13486],[-68.50438,76.06141],[-69.66485,76.37975],[-71.40257,77.00857],[-68.77671,77.32312],[-66.76397,77.37595],[-71.04293,77.63595],[-73.297,78.04419],[-73.15938,78.43271],[-69.37345,78.91388],[-65.7107,79.39436],[-65.3239,79.75814],[-68.02298,80.11721],[-67.15129,80.51582],[-63.68925,81.21396],[-62.23444,81.3211],[-62.65116,81.77042],[-60.28249,82.03363],[-57.20744,82.19074],[-54.13442,82.19962],[-53.04328,81.88833],[-50.39061,82.43883],[-48.00386,82.06481],[-46.59984,81.985945],[-44.523,81.6607],[-46.9007,82.19979],[-46.76379,82.62796],[-43.40644,83.22516],[-39.89753,83.18018],[-38.62214,83.54905],[-35.08787,83.64513],[-27.10046,83.51966]]]}}],bbox:[-180,-90,180,83.64513]};function Di(n,t){return(n%t+t)%t}function J3(n,t,e,i){return n+(Di(t-n+i/2,i)-i/2)*e}function Mc(n){let t=(n/864e5+24405875e-1-2451545)/36525,e=-62e-7*t**3+.093104*t**2+(876600*3600+8640184812866e-6)*t+67310.54841;return Di(e*Math.PI/180/240,Math.PI*2)}function Io(n,t){let e=0,i=n.length-1;for(;i-e>1;){let h=e+i>>1;Date.parse(n[h].time)<=t?e=h:i=h}let s=n[e],r=n[i],a=Date.parse(s.time),o=Date.parse(r.time),c=Math.max(0,Math.min(1,(t-a)/(o-a))),l={};for(let h of["x","y","z","latitude_deg","altitude_km","speed_km_s"])l[h]=s[h]+(r[h]-s[h])*c;return l.longitude_deg=Di(J3(s.longitude_deg,r.longitude_deg,c,360)+180,360)-180,l.gmst_rad=Mc(a+(o-a)*c),l}var vi=8,wc=["#66ccff","#ff8066","#9be564","#d69cff","#ffd166","#72e0c1","#f28cb1","#b8c0ff"],yd=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Hn(n){return yd[Math.floor(Di(n,360)/22.5+.5)%yd.length]}function Wn(n){if(/\b403\b/.test(n))return"CelesTrak is limiting downloads of this data for now. Try again later.";if(/Failed to fetch|NetworkError|Load failed/.test(n))return"The Khonsu server could not be reached.";let t=/deadline exceeded|Timeout exceeded|i\/o timeout|connection refused|connection reset|no such host|\b50[234]\b/i.test(n);return t&&/celestrak/i.test(n)?"CelesTrak isn't answering right now. Try again in a few minutes. Anything you've loaded before still works from its saved copy.":t?"The data provider isn't answering right now. Try again in a few minutes.":n}function bd(n){let t=(e,i)=>{try{return e(n())}catch{return i}};return{getItem:e=>t(i=>i.getItem(e),null),setItem:(e,i)=>t(s=>s.setItem(e,i)),removeItem:e=>t(i=>i.removeItem(e))}}function Tc(n){return/^\d{1,9}$/.test(n)&&Number(n)>=1}function yi(n){return String(n).replace(/^0+(?=\d)/,"")}function Sd(n){let t=new URLSearchParams(n),e=new Set,i=[];for(let r of(t.get("sats")||"").split(",")){let a=yi(r.trim());Tc(a)&&!e.has(a)&&i.length<vi&&(e.add(a),i.push(a))}let s=yi(t.get("selected")||"");return{ids:i,selected:e.has(s)?s:i[0]??null}}function Md(n,t){if(!n.length)return"";let e=new URLSearchParams;return e.set("sats",n.join(",")),t&&t!==n[0]&&e.set("selected",t),`?${e.toString().replaceAll("%2C",",")}`}function wd(n){return wc.find(t=>!n.includes(t))??wc[n.length%wc.length]}function Ac({lat:n,lon:t,alt:e}){let i=Number(n),s=Number(t),r=e===""||e===void 0||e===null?0:Number(e);return String(n).trim()===""||!Number.isFinite(i)||i<-90||i>90?{error:"Latitude must be between -90 and 90 degrees."}:String(t).trim()===""||!Number.isFinite(s)||s<-180||s>180?{error:"Longitude must be between -180 and 180 degrees."}:!Number.isFinite(r)||r<-1||r>100?{error:"Altitude must be between -1 and 100 km."}:{observer:{lat:i,lon:s,alt:r}}}function Ed(n){for(let t of["observer","utc"]){let e=n.getItem(`tlego.${t}`);e!==null&&(n.getItem(`khonsu.${t}`)===null&&n.setItem(`khonsu.${t}`,e),n.removeItem(`tlego.${t}`))}}function Td(n){try{let t=JSON.parse(n.getItem("khonsu.observer"));return typeof t?.lat!="number"||typeof t?.lon!="number"?null:Ac(t).observer??null}catch{return null}}function Ad(n,t){let e=t.trim().toLowerCase();return e?n.filter(i=>i.name.toLowerCase().includes(e)||i.norad_id.includes(e)):n}function Cc(n,t){if(!n.length||n[0].elevation_deg===void 0)return null;let e=0,i=n.length-1;for(;i-e>1;){let l=e+i>>1;Date.parse(n[l].time)<=t?e=l:i=l}let s=n[e],r=n[i],a=Date.parse(r.time)-Date.parse(s.time),o=a>0?Math.max(0,Math.min(1,(t-Date.parse(s.time))/a)):0;return{azimuth:Di(s.azimuth_deg+(Di(r.azimuth_deg-s.azimuth_deg+180,360)-180)*o,360),elevation:s.elevation_deg+(r.elevation_deg-s.elevation_deg)*o}}function Cd(n,t){let e=n[0]?.sunlit??!0;for(let i of n){if(Date.parse(i.time)>t)break;e=i.sunlit}return e}function Rd(n,t,e){if(!n.length)return{first:0,count:0};let i=e*6e4,s=Date.parse(n[0].time),r=Date.parse(n[n.length-1].time);if(!(i>0)||r-s<=i)return{first:0,count:n.length};let a=Rc(t-i/2,s,r-i),o=a+i,c=n.length,l=-1;return n.forEach((h,f)=>{let u=Date.parse(h.time);u>=a&&u<=o&&(c=Math.min(c,f),l=f)}),l<c?{first:0,count:n.length}:(c=Math.max(0,c-1),l=Math.min(n.length-1,l+1),{first:c,count:l-c+1})}function Rc(n,t,e){return Math.min(e,Math.max(t,n))}var j3=new Set(["sampled_passes","estimated_visibility"]);function Pd(n){let t=new Map;for(let e of n)for(let i of e?.warnings??[])!j3.has(i.code)&&!t.has(i.code)&&t.set(i.code,i);return[...t.values()]}function Id(n,t){return n.map(e=>({...e,visible:t.find(i=>Date.parse(i.start.at)<=Date.parse(e.end)&&Date.parse(i.end.at)>=Date.parse(e.start))??null}))}function Ld(n){let t=Math.max(0,Math.round(n/1e3)),e=Math.floor(t/3600),i=Math.floor(t%3600/60);return e>=48?`${Math.round(e/24)} days`:e>0?`${e} h ${i} min`:i>0?`${i} min ${t%60} s`:`${t} s`}function Pc(n,t){let e=n-t;if(e<=0)return"now";if(e<6e4)return"in under a minute";let i=Math.round(e/6e4);return i<60?`in ${i} min`:`in ${Math.floor(i/60)} h ${i%60} min`}function Lo(n,t){return Date.parse(n.start)<=Date.parse(t.end)&&Date.parse(n.end)>=Date.parse(t.start)}function Ic(n,t,e){let i=Math.abs(n).toFixed(1);return`${i}\xB0 ${n>=0||Number(i)===0?t:e}`}function Ms(n,t){return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:t?"UTC":void 0}).format(n)}function ws(n,t){return new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"numeric",month:"short",timeZone:t?"UTC":void 0}).format(n)}function Dd(n){return n>=5?"Geomagnetic storm":n>=4?"Active":"Quiet"}function Nd(n){return!Number.isFinite(n)||n<=0?null:n>=1e9?`${(n/1e9).toFixed(3)} GHz`:`${(n/1e6).toFixed(3)} MHz`}function Fd(n){if(!n.length)return null;let t=n.reduce((i,s)=>s.kp_max>i.kp_max?s:i),e=n.reduce((i,s)=>i+s.f107,0)/n.length;return{strongest:t,meanFlux:e}}function Lc(n,t){let e=Math.max(0,Math.round((t-new Date(n).getTime())/6e4));if(e<1)return"just now";if(e<60)return`${e} min ago`;let i=Math.round(e/60);return i<48?`${i} h ago`:`${Math.round(i/24)} days ago`}function Dc(n){return n?"UTC":"local"}function Ud(n,t){return(t-Date.parse(n))/864e5}function Nc(n,t,e){return`${Math.abs(n).toFixed(3)}\xB0 ${n>=0?t:e}`}var Q3=36e5,t7=25*36e5;function Fc(n){let t=Math.floor((n-Q3)/1e3)*1e3;return{start:t,end:t+t7}}function Uc(n,t){return t<n.start||t>n.end-2*36e5}function Oc(n){let t=n?.kp;return t?.length?t[t.length-1].kp??null:null}function Od(n){return(n??[]).filter(t=>t.alive===!0&&t.status==="active")}function vd(n){return String(n??"").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"")}function Bd(n,t){let e=vd(n),i=vd(t);return!e||!i?!1:e.includes(i)||i.includes(e)}function kd(n,t=3e5){if(!n?.length)return[];let e=[...n].sort((r,a)=>Date.parse(a.time)-Date.parse(r.time)),i=[],s=null;for(let r of e){let a=Date.parse(r.time);(!i.length||s-a>t)&&i.push([]),i[i.length-1].push(r),s=a}return i.map(r=>{let a=r[0],o=r.map(c=>c.cloud_cover).filter(c=>typeof c=="number");return{time:Date.parse(a.time),scenes:r,lat:a.center_lat,lon:a.center_lon,minCloud:o.length?Math.min(...o):null,maxCloud:o.length?Math.max(...o):null}})}function zd(n,t){if(!n?.length)return null;let e=null,i=1/0;for(let s of n){let r=Math.abs(Date.parse(s.time)-t);r<i&&(e=s,i=r)}return i<=36e5?e.percent:null}function Vd(n,t){let e=null,i=1/0;for(let s of n??[]){let r=Date.parse(s.net);Number.isNaN(r)||r<t||r<i&&(e=s,i=r)}return e}function Gd(n,t){let e=Date.parse(n.net)-t,i=String(n.precision??"").toLowerCase(),s=i!==""&&!["second","minute","hour"].includes(i),r=s?"in about":"in",a=Math.round(e/36e5);if(e<36e5)return s?`${r} ${Math.max(1,a)} h`:`${r} ${Math.max(1,Math.round(e/6e4))} min`;if(e<36*36e5)return`${r} ${a} h`;let o=Math.round(e/864e5);return`${r} ${o} ${o===1?"day":"days"}`}var e7={sun_synchronous:"Sun-synchronous",dawn_dusk:"Dawn-dusk",molniya:"Molniya",tundra:"Tundra",polar:"Polar",near_equatorial:"Near-equatorial",retrograde:"Retrograde"};function n7(n){return(Array.isArray(n)?n:[]).filter(t=>typeof t?.url=="string"&&/^https:\/\//.test(t.url)).map(t=>({label:String(t.label||"Source"),title:String(t.title||t.label||"Source"),url:t.url}))}function Ec(n){return(Array.isArray(n)?n:[]).filter(t=>typeof t?.text=="string"&&t.text.trim()).map(t=>({text:t.text,sources:n7(t.sources)}))}function Hd(n,t=[]){let e=n?.described?n.profile:null;if(!e||!Array.isArray(e.instruments)||e.instruments.length===0)return null;let i=new Map(t.map(a=>[a.id,a])),s=(Array.isArray(e.kinds)?e.kinds:[]).filter(a=>a?.id&&a?.name),r=new Map(s.map(a=>[a.id,a.name]));return{name:String(e.name||""),chips:s.map(a=>a.name),items:Ec(e.statements),instruments:e.instruments.map(a=>({name:String(a.name||""),kinds:(a.kinds??[]).map(o=>r.get(o)).filter(Boolean),items:Ec(a.statements)})),kinds:s.map(a=>({id:a.id,name:a.name,items:Ec(a.statements),views:(a.layers??[]).filter(o=>i.has(o)).map(o=>({id:o,name:i.get(o).name})),lessons:(Array.isArray(a.lessons)?a.lessons:[]).filter(o=>o?.id&&o?.title).map(o=>({id:String(o.id),title:String(o.title)}))}))}}function Wd(n){if(!n||!Array.isArray(n.statements)||n.statements.length===0)return null;let t=[n.regime_name||n.regime,...(n.patterns??[]).map(i=>e7[i])].filter(Boolean),e=n.statements.filter(i=>typeof i?.text=="string"&&i.text.trim()).map(i=>({text:i.text,estimate:i.basis!=="derived",sources:(Array.isArray(i.sources)?i.sources:[]).filter(s=>typeof s?.url=="string"&&/^https:\/\//.test(s.url)).map(s=>({label:String(s.label||"Source"),title:String(s.title||s.label||"Source"),url:s.url}))}));return e.length?{chips:t,items:e}:null}var i7={lat:80.8,lon:-72.8},s7={lat:-80.8,lon:107.2};function r7(n){return 66.5-2*Math.min(9,Math.max(0,n))}function Xd(n,t,e=120){let i=Math.PI/180,s=n.lat*i,r=n.lon*i,a=t*i,o=[];for(let c=0;c<e;c+=1){let l=2*Math.PI*c/e,h=Math.asin(Math.sin(s)*Math.cos(a)+Math.cos(s)*Math.sin(a)*Math.cos(l)),f=r+Math.atan2(Math.sin(l)*Math.sin(a)*Math.cos(s),Math.cos(a)-Math.sin(s)*Math.sin(h));o.push({lat:h/i,lon:((f/i+180)%360+360)%360-180})}return o.push({...o[0]}),o}function $d(n){let t=90-r7(n);return[Xd(i7,t),Xd(s7,t)]}var Bc=6378.137,kc=n=>new $(n.x/Bc,n.z/Bc,-n.y/Bc);function bi(n,t,e=1.002){let i=t*Math.PI/180,s=n*Math.PI/180;return new $(e*Math.cos(s)*Math.cos(i),e*Math.sin(s),-e*Math.cos(s)*Math.sin(i))}function qd(n,t,e){let i=[];for(let r of n)for(let a=0;a<r.length-1;a+=1)i.push(r[a].x,r[a].y,r[a].z,r[a+1].x,r[a+1].y,r[a+1].z);let s=new Ee;return s.setAttribute("position",new Me(i,3)),new Xs(s,new Vn({color:t,transparent:!0,opacity:e}))}var a7=1;function o7(){let n=new On;n.add(new Te(new pn(1,96,64),new us({color:1195868,specular:2381422,shininess:14})));let t=[];for(let i=-60;i<=60;i+=30){let s=[];for(let r=-180;r<=180;r+=3)s.push(bi(i,r));t.push(s)}for(let i=0;i<360;i+=30){let s=[];for(let r=-90;r<=90;r+=3)s.push(bi(r,i));t.push(s)}n.add(qd(t,7910597,.1));let e=[];for(let i of xd.features){let s=i.geometry.type==="Polygon"?[i.geometry.coordinates]:i.geometry.coordinates;for(let r of s)for(let a of r)e.push(a.map(([o,c])=>bi(c,o)))}return n.add(qd(e,14278378,.8)),n}function l7(){let n=[],t=7,e=()=>(t=t*16807%2147483647,t/2147483647);for(let s=0;s<1600;s+=1){let r=e()*2-1,a=e()*Math.PI*2,o=Math.sqrt(1-r*r)*400;n.push(o*Math.cos(a),o*Math.sin(a),r*400)}let i=new Ee;return i.setAttribute("position",new Me(n,3)),new $s(i,new cs({color:11452364,size:1.1,sizeAttenuation:!1,transparent:!0,opacity:.6}))}function Yd(n,{onPick:t,onSelect:e}){let i=new Gs,s=new Ve(40,1,.01,2e3),r=new To({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.append(r.domElement);let a=r.domElement;a.setAttribute("role","img"),a.setAttribute("aria-label","Earth with the tracked satellites. Drag to rotate and scroll to zoom. The readouts beside the globe give the same information as text.");let o=new Po(s,a);o.enableDamping=!0,o.enablePan=!1,o.minDistance=1.02;let c=null;o.addEventListener("start",()=>{c=null}),o.maxDistance=60,i.add(l7());let l=o7();i.add(l);let h=new Te(new pn(1.025,64,48),new Tn({color:4892888,transparent:!0,opacity:.09,side:Ue}));i.add(h),i.add(new nr(12111840,.55));let f=new er(16774368,2.6);f.position.set(4,3,5),i.add(f);let u=new Te(new pn(.012,12,10),new Tn({color:16777215}));u.visible=!1,l.add(u);let m=new Te(new pn(.014,12,10),new Tn({color:5088255}));m.visible=!1,l.add(m);let _=new Ee;_.setAttribute("position",new $e(new Float32Array(6),3));let v=new oi(_,new Vn({color:16777215,transparent:!0,opacity:.55}));v.visible=!1,v.frustumCulled=!1,i.add(v);let p=new Map,d=null,M=!1,A=!1,b=0,w=[],S=0;function R(){w.forEach((P,H)=>{P.mesh&&(P.mesh.renderOrder=a7+H)})}function x(P){P.mesh&&(l.remove(P.mesh),P.mesh.geometry.dispose(),P.mesh.material.dispose(),P.texture.dispose(),P.mesh=null)}function E(P){return new Promise((H,tt)=>{let ct=new Image;ct.onload=()=>H(ct),ct.onerror=()=>tt(new Error("The image could not be loaded.")),ct.src=P})}function N(P){let{naturalWidth:H,naturalHeight:tt}=P,ct=document.createElement("canvas");ct.width=H,ct.height=tt;let Lt=ct.getContext("2d");Lt.drawImage(P,0,0);let mt=document.createElement("canvas");mt.width=H,mt.height=tt;let Bt=mt.getContext("2d");return Bt.filter="blur(10px)",Bt.drawImage(P,0,0),Lt.globalCompositeOperation="destination-in",Lt.drawImage(mt,0,0),Lt.drawImage(mt,0,0),ct}async function O(P,H){let tt=await E(P),ct=H?new Ys(N(tt)):new Ne(tt);return ct.colorSpace=Xe,ct.needsUpdate=!0,ct}let X=1.001;function q(P){if(!P)return new pn(1,96,64);let H=Math.PI/180,tt=Math.max(8,Math.ceil((P.maxLon-P.minLon)/.5)),ct=Math.max(8,Math.ceil((P.maxLat-P.minLat)/.5));return new pn(1,Math.min(256,tt),Math.min(256,ct),(P.minLon+180)*H,(P.maxLon-P.minLon)*H,(90-P.maxLat)*H,(P.maxLat-P.minLat)*H)}function k(P,H){let tt={id:P.id,url:P.url,transparent:P.transparent,box:P.box??null,request:H,status:null,texture:null,mesh:null};return tt.status=O(P.url,P.transparent).then(ct=>tt.request!==S?(ct.dispose(),new Error("This layer was replaced before it loaded.")):(tt.texture=ct,tt.mesh=new Te(q(tt.box),new us({map:ct,transparent:P.transparent,depthWrite:!1,depthFunc:si,specular:1118481,shininess:6})),tt.box&&tt.mesh.scale.setScalar(X),l.add(tt.mesh),R(),"ok"),ct=>ct),tt}function I(P){let H=++S,tt=w,ct=new Set,Lt=[];for(let mt of P){if(ct.has(mt.id))continue;ct.add(mt.id);let Bt=!!mt.transparent,U=tt.find(ne=>ne.id===mt.id&&ne.url===mt.url&&ne.transparent===Bt);U?(U.request=H,Lt.push(U)):Lt.push(k({id:mt.id,url:mt.url,transparent:Bt,box:mt.box},H))}for(let mt of tt)Lt.includes(mt)||x(mt);return w=Lt,R(),Promise.all(Lt.map(mt=>mt.status.then(Bt=>[mt.id,Bt]))).then(Object.fromEntries)}let W=[];function T(P){for(let H of W)l.remove(H),H.geometry.dispose(),H.material.dispose();if(W=[],!!Number.isFinite(P))for(let H of $d(P)){let tt=new Ee().setFromPoints(H.map(({lat:mt,lon:Bt})=>bi(mt,Bt,1.004))),ct=new Js({color:10476718,transparent:!0,opacity:.8,dashSize:.03,gapSize:.02}),Lt=new oi(tt,ct);Lt.computeLineDistances(),l.add(Lt),W.push(Lt)}}function D(P){c=null;let H=Math.max(3.6,Math.min(o.maxDistance,P.length()*2.6));s.position.copy(P.normalize().add(new $(0,.35,0)).normalize().multiplyScalar(H)),o.target.set(0,0,0),o.update()}function F(P=d){let H=p.get(P),tt=H?H.marker.position.clone():new $(.68,.42,.76);tt.lengthSq()<1e-6&&tt.set(.68,.42,.76),D(tt)}function z(P){M=P,o.enableRotate=!P}function j(P,H){m.position.copy(bi(P,H,1.003)),m.visible=!0,z(!1),l.updateMatrixWorld(!0),D(m.getWorldPosition(new $))}function dt(P,H,tt=null){z(!1),l.updateMatrixWorld(!0);let ct=bi(P,H,1).applyMatrix4(l.matrixWorld);if(!Number.isFinite(tt)){D(ct);return}s.position.copy(ct.normalize().multiplyScalar(Math.max(o.minDistance,Math.min(o.maxDistance,tt)))),o.target.set(0,0,0),o.update(),c={lat:P,lon:H}}function ut(){m.visible=!1}function Vt(P,H,tt){Gt(P);let ct=new Float32Array(H.samples.length*3);H.samples.forEach((ne,qt)=>{let C=kc(ne);ct.set([C.x,C.y,C.z],qt*3)});let Lt=new Ee;Lt.setAttribute("position",new $e(ct,3));let mt=new oi(Lt,new Vn({color:tt,transparent:!0,opacity:.4}));mt.frustumCulled=!1;let Bt=new Te(new pn(.014,16,12),new Tn({color:tt}));i.add(mt,Bt),p.set(P,{line:mt,marker:Bt,track:H});let U=kc(H.sun_km);f.position.copy(U.normalize().multiplyScalar(10)),Q(b)}function Gt(P){let H=p.get(P);H&&(i.remove(H.line,H.marker),H.line.geometry.dispose(),H.line.material.dispose(),H.marker.geometry.dispose(),H.marker.material.dispose(),p.delete(P))}function kt(){for(let[P,H]of p){let tt=P===d;H.line.material.opacity=tt?.95:.3,H.marker.scale.setScalar(tt?1.5:1)}}function Q(P){b=P,l.rotation.y=Mc(P);for(let H of p.values()){let{samples:tt}=H.track;if(H.marker.position.copy(kc(Io(tt,P))),H.rangeAt===void 0||Math.abs(P-H.rangeAt)>15e3){let ct=Rd(tt,P,H.track.period_minutes);H.line.geometry.setDrawRange(ct.first,ct.count),H.rangeAt=P}}if(c){l.updateMatrixWorld(!0);let H=bi(c.lat,c.lon,1).applyMatrix4(l.matrixWorld);s.position.copy(H.normalize().multiplyScalar(s.position.length()))}if(M&&p.has(d)){let H=p.get(d).marker.position,tt=Math.max(s.position.length(),H.length()*1.3);s.position.copy(H.clone().normalize().multiplyScalar(tt))}kt()}function rt(P){u.visible=!!P,P&&u.position.copy(bi(P.lat,P.lon,1.003))}function At(P){let H=p.get(d);if(v.visible=!!(P&&H&&u.visible),!v.visible)return;l.updateMatrixWorld();let tt=u.getWorldPosition(new $);_.attributes.position.setXYZ(0,tt.x,tt.y,tt.z),_.attributes.position.setXYZ(1,H.marker.position.x,H.marker.position.y,H.marker.position.z),_.attributes.position.needsUpdate=!0}function Ht(P){let H=a.getBoundingClientRect(),tt=P.clone().project(s);return tt.z>1?null:{x:(tt.x+1)/2*H.width,y:(1-tt.y)/2*H.height}}function wt(P){let H=P.clone().sub(s.position),tt=H.length(),ct=H.normalize(),Lt=s.position.dot(ct),mt=Lt*Lt-s.position.lengthSq()+1;if(mt<0)return!1;let Bt=-Lt-Math.sqrt(mt);return Bt>0&&Bt<tt}function Zt(){let P=p.get(d);return!P||wt(P.marker.position)?null:Ht(P.marker.position)}function he(P){let H=a.getBoundingClientRect(),tt=new $t((P.clientX-H.left)/H.width*2-1,1-(P.clientY-H.top)/H.height*2),ct=new ir;ct.setFromCamera(tt,s);let{origin:Lt,direction:mt}=ct.ray,Bt=Lt.dot(mt),U=Bt*Bt-Lt.lengthSq()+1;if(U<0)return null;let ne=Lt.clone().add(mt.clone().multiplyScalar(-Bt-Math.sqrt(U))),qt=l.worldToLocal(ne),C=Math.asin(Math.max(-1,Math.min(1,qt.y/qt.length())))*180/Math.PI,g=Math.atan2(-qt.z,qt.x)*180/Math.PI;return g>=180&&(g-=360),{lat:C,lon:g}}function J(P){let H=a.getBoundingClientRect(),tt=P.clientX-H.left,ct=P.clientY-H.top,Lt=null,mt=18;for(let[Bt,U]of p){if(wt(U.marker.position))continue;let ne=Ht(U.marker.position);if(!ne)continue;let qt=Math.hypot(ne.x-tt,ne.y-ct);qt<mt&&(Lt=Bt,mt=qt)}return Lt}let ft=null;return a.addEventListener("pointerdown",P=>{ft={x:P.clientX,y:P.clientY}}),a.addEventListener("pointerup",P=>{if(!ft||Math.hypot(P.clientX-ft.x,P.clientY-ft.y)>5)return;if(A){let tt=he(P);tt&&t(tt);return}let H=J(P);H&&e(H)}),new ResizeObserver(()=>{let P=n.getBoundingClientRect();!P.width||!P.height||(s.aspect=P.width/P.height,s.updateProjectionMatrix(),r.setSize(P.width,P.height))}).observe(n),s.position.set(2.4,1.2,2.8),o.update(),{setLayers:I,setAurora:T,setTrack:Vt,removeTrack:Gt,update:Q,setObserver:rt,setSightLine:At,selectedScreenPosition:Zt,home:F,showPoint:j,face:dt,clearPoint:ut,select(P){d=P,kt()},setFollowing:z,setPicking(P){A=P,a.classList.toggle("is-picking",P)},zoom(P){s.position.multiplyScalar(P);let H=s.position.length();s.position.setLength(Math.max(o.minDistance,Math.min(o.maxDistance,H))),o.update()},render(P){o.update(P),r.render(i,s)},onContextChange(P,H){a.addEventListener("webglcontextlost",tt=>{tt.preventDefault(),P()}),a.addEventListener("webglcontextrestored",H)}}}var Zd="khonsu.layers",Kd="true-color",Jd="story-true-color",jd="story-true-color-npp",c7="2012-02-01",h7="Loading\u2026",u7="The globe is unavailable, so layers are turned off.",d7="Live data is off while serving a local file, so pictures and the aurora are unavailable.",f7="Could not load the list of pictures.",p7="Could not load this picture.",m7="A rough boundary from NOAA's Kp index, not a forecast.",g7="Aurora estimated from NOAA SWPC Kp";function Qd({element:n,panel:t,credit:e,catalog:i,storage:s,globe:r,fetchHead:a=l=>fetch(l,{method:"HEAD"}),dataAge:o,now:c=Date.now}){let l={base:"",overlays:[],view:"",viewDate:"",viewBox:null,viewPlain:!1,aurora:!1,live:null,tried:null},h=new Map,f=new Map,u=new Map,m=new Map,_=new Map,v={},p=[],d=new Map,M=!1,A=0,b=J=>[J.minLat,J.minLon,J.maxLat,J.maxLon].join(","),w=(J,ft="",P=null)=>"/api/v1/imagery?layer="+encodeURIComponent(J)+(ft?"&date="+encodeURIComponent(ft):"")+(P?"&bbox="+encodeURIComponent(b(P)):""),S=()=>p.filter(J=>!J.topic&&!J.story),R=()=>p.filter(J=>J.topic&&!J.story),x=()=>S().filter(J=>J.transparent===!0).map(J=>J.id),E=J=>d.has(J)&&!d.get(J).topic&&d.get(J).transparent!==!0,N=J=>d.has(J)&&!!(d.get(J).topic||d.get(J).story),O=()=>E(Kd)?Kd:"",X=()=>l.tried??l.live;function q(){let J=l.view?d.get(l.view):null,ft=[...l.base?[l.base]:[],...l.overlays];J&&(ft=J.transparent===!0||l.viewBox?[...l.base?[l.base]:[],J.id]:[J.id]);let P=l.viewDate>=c7?jd:Jd;return J&&J.story&&J.transparent===!0&&l.viewBox&&!l.viewPlain&&d.has(P)&&ft.splice(ft.indexOf(J.id),0,P),ft.filter(H=>d.has(H)).map(H=>{let tt=H===l.view||(H===Jd||H===jd)&&!!l.viewBox,ct=tt?l.viewBox:null;return{id:H,url:w(H,tt?l.viewDate:"",ct),transparent:d.get(H).transparent===!0,...ct?{box:ct}:{}}})}function k(){try{let J=l.viewDate?"":l.view;s.setItem(Zd,JSON.stringify({base:l.base,overlays:l.overlays,view:J,aurora:l.aurora}))}catch{}}function I(){let J=null;try{J=JSON.parse(s.getItem(Zd))}catch{J=null}if(!J||typeof J!="object")return;l.base=typeof J.base=="string"&&(J.base===""||E(J.base))?J.base:"";let ft=new Set(Array.isArray(J.overlays)?J.overlays:[]);l.overlays=x().filter(P=>ft.has(P)),l.view=typeof J.view=="string"&&N(J.view)&&!d.get(J.view).story?J.view:"",l.aurora=J.aurora===!0}function W(J,ft){let P=new Set(l.overlays);ft?P.add(J):P.delete(J),l.overlays=x().filter(H=>P.has(H))}function T(J){e.replaceChildren(...J.map(ft=>n("span","credit-line",ft))),e.hidden=J.length===0}function D(J){let ft=J.map(P=>[P.name,P.id===l.view&&l.viewDate?`picture from ${l.viewDate}`:"",P.credit,P.id===l.view&&l.viewDate?"":h.get(P.id)].filter(Boolean).join(" \xB7 "));l.aurora&&ft.push(g7),T(ft)}async function F(J){try{let P=(await a(w(J))).headers,H=[],tt=P.get("X-Khonsu-Fetched-At");return tt&&!Number.isNaN(Date.parse(tt))&&H.push(`updated ${o(tt,c())}`),P.get("X-Khonsu-Stale")==="true"&&H.push("saved copy"),H.join(" \xB7 ")}catch{return""}}function z(J,ft){let P=f.get(J);P&&(P.hidden=!ft,P.textContent=ft?p7:"")}function j(J,ft,P){if(J!==A)return;for(let tt of ft)z(tt.id,P[tt.id]!=="ok");let H=ft.filter(tt=>P[tt.id]==="ok").map(tt=>d.get(tt.id));D(H),Promise.all(H.map(async tt=>{let ct=await F(tt.id);J===A&&h.set(tt.id,ct)})).then(()=>{J===A&&D(H)})}function dt(){let J=q(),ft=++A,P=new Set(J.map(tt=>tt.id));for(let tt of f.keys())P.has(tt)||z(tt,!1);for(let tt of P)h.delete(tt);T([h7]),r.setAurora(l.aurora?X():null);let H;try{H=Promise.resolve(r.setLayers(J))}catch(tt){H=Promise.reject(tt)}H.then(tt=>j(ft,J,tt??{}),()=>j(ft,J,{}))}function ut(){k(),Gt(),dt()}function Vt(){return l.tried!==null?`Kp ${l.tried.toFixed(1)}, trying a value`:l.live!==null?`Kp ${l.live.toFixed(1)}, now`:"Kp is not available yet"}function Gt(){if(M){for(let[J,ft]of u)ft.checked=J===l.base;for(let[J,ft]of m)ft.checked=l.overlays.includes(J);for(let[J,ft]of _)ft.checked=J===l.view;v.aurora.checked=l.aurora,v.controls.hidden=!l.aurora,v.slider.value=String(X()??0),v.kpNote.textContent=Vt(),v.back.hidden=l.tried===null}}function kt({type:J,name:ft,value:P,title:H,note:tt=null,warn:ct=!1}){let Lt=n("input",null,null);Lt.setAttribute("type",J),Lt.setAttribute("name",ft),Lt.value=P;let mt=n("label","layer-row",null);mt.append(Lt,n("span",null,H)),tt&&mt.append(n("span","note",tt));let Bt=null;return ct&&(Bt=n("span","note is-warning",null),Bt.hidden=!0,mt.append(Bt)),{label:mt,input:Lt,warning:Bt}}let Q=[["Clouds now",()=>{l.base=O(),l.overlays=x(),l.view="",l.viewDate="",l.viewBox=null}],["Yesterday's Earth",()=>{l.base=O(),l.overlays=[],l.view="",l.viewDate="",l.viewBox=null}],["Plain",()=>{l.base="",l.overlays=[],l.view="",l.viewDate="",l.viewBox=null,l.aurora=!1,l.tried=null}]];function rt(){u.clear(),m.clear(),_.clear(),f.clear();let J=n("fieldset","layer-group",null);J.append(n("legend",null,"Base picture"));let ft=kt({type:"radio",name:"layer-base",value:"",title:"Plain globe"});ft.input.addEventListener("change",()=>{ft.input.checked&&(l.base="",ut())}),u.set("",ft.input),J.append(ft.label);for(let g of S().filter(V=>V.transparent!==!0)){let V=kt({type:"radio",name:"layer-base",value:g.id,title:g.name,note:g.description,warn:!0});V.input.addEventListener("change",()=>{V.input.checked&&(l.base=g.id,ut())}),u.set(g.id,V.input),f.set(g.id,V.warning),J.append(V.label)}let P=n("fieldset","layer-group",null);P.append(n("legend",null,"Near-live clouds"));for(let g of S().filter(V=>V.transparent===!0)){let V=kt({type:"checkbox",name:"layer-overlay",value:g.id,title:g.name,note:g.description,warn:!0});V.input.addEventListener("change",()=>{W(g.id,V.input.checked),ut()}),m.set(g.id,V.input),f.set(g.id,V.warning),P.append(V.label)}let H=n("fieldset","layer-group",null);H.append(n("legend",null,"What satellites measure"));let tt=kt({type:"radio",name:"layer-view",value:"",title:"None"});tt.input.addEventListener("change",()=>{tt.input.checked&&(l.view="",l.viewDate="",l.viewBox=null,ut())}),_.set("",tt.input),H.append(tt.label);for(let g of R()){let V=kt({type:"radio",name:"layer-view",value:g.id,title:g.name,note:g.description,warn:!0});V.input.addEventListener("change",()=>{V.input.checked&&(l.view=g.id,l.viewDate="",l.viewBox=null,ut())}),_.set(g.id,V.input),f.set(g.id,V.warning),H.append(V.label)}let ct=n("fieldset","layer-group",null);ct.append(n("legend",null,"Overlays"));let Lt=kt({type:"checkbox",name:"layer-aurora",value:"aurora",title:"Aurora, estimated from Kp"});Lt.input.addEventListener("change",()=>{l.aurora=Lt.input.checked,l.aurora||(l.tried=null),ut()}),ct.append(Lt.label,n("p","note",m7));let mt=n("input",null,null);mt.setAttribute("type","range"),mt.setAttribute("min","0"),mt.setAttribute("max","9"),mt.setAttribute("step","0.33"),mt.setAttribute("aria-label","Try a Kp value");let Bt=n("p","note",null),U=n("button",null,"Back to now");U.setAttribute("type","button"),U.hidden=!0;let ne=n("div","aurora-controls",null);ne.append(mt,Bt,U),ne.hidden=!0,ct.append(ne),mt.addEventListener("input",()=>{let g=Number(mt.value);Number.isFinite(g)&&(l.tried=g,Gt(),r.setAurora(X()))}),U.addEventListener("click",()=>{l.tried=null,Gt(),r.setAurora(X())});let qt=n("div","layer-presets",null);qt.append(...Q.map(([g,V])=>{let K=n("button",null,g);return K.setAttribute("type","button"),K.addEventListener("click",()=>{V(),ut()}),K})),v.aurora=Lt.input,v.slider=mt,v.kpNote=Bt,v.back=U,v.controls=ne;let C=[J,P];R().length&&C.push(H),t.replaceChildren(n("h2","eyebrow","Layers"),...C,ct,qt)}async function At(){if(!r){t.replaceChildren(n("p","note",u7)),e.hidden=!0;return}let J=null;try{J=await i}catch{J=null}let ft=n("h2","eyebrow","Layers");if(!J){t.replaceChildren(ft,n("p","note",f7)),e.hidden=!0;return}if(!J.liveData){t.replaceChildren(ft,n("p","note",d7)),e.hidden=!0;return}p=Array.isArray(J.layers)?J.layers:[],d=new Map(p.map(P=>[P.id,P])),I(),rt(),M=!0,Gt(),l.base||l.overlays.length||l.view||l.aurora?dt():T([])}function Ht(J){l.live=Number.isFinite(J)?J:null,M&&(l.aurora&&l.tried===null&&r.setAurora(l.live),Gt())}function wt(){return{base:l.base,overlays:[...l.overlays],view:l.view,aurora:l.aurora}}function Zt(J,ft="",P=null,{plain:H=!1}={}){return!M||J!==""&&!N(J)||J&&d.get(J).story&&!ft?!1:(l.view=J,l.viewDate=J?ft:"",l.viewBox=J&&P?P:null,l.viewPlain=!!H,J&&(d.get(J).transparent===!0||P)&&!l.base&&(l.base=O()),ut(),!0)}function he(J){return!M||J!==""&&!E(J)?!1:(l.base=J,ut(),!0)}return{start:At,setKp:Ht,selection:wt,show:Zt,setBase:he,views:()=>R().map(J=>({...J})),viewOn:()=>l.view}}var _7="http://www.w3.org/2000/svg",_r=220,Le=_r/2,Ni=92;function In(n,t,e){let i=document.createElementNS(_7,n);for(let[s,r]of Object.entries(t))i.setAttribute(s,r);return e?.append(i),i}function zc(n,t){let e=Ni*(90-Math.max(0,Math.min(90,t)))/90,i=n*Math.PI/180;return[Le+e*Math.sin(i),Le-e*Math.cos(i)]}function tf(n,t,e,i){n.replaceChildren();let s=In("svg",{viewBox:`0 0 ${_r} ${_r}`,class:"sky-plot",role:"img"},n),r=t.filter(l=>l.elevation_deg>=0),a=r.reduce((l,h)=>!l||h.elevation_deg>l.elevation_deg?h:l,null);In("title",{},s).textContent=a?`Sky path peaking at ${Math.round(a.elevation_deg)} degrees in the ${Hn(a.azimuth_deg)}`:"Sky plot";for(let l of[0,30,60])In("circle",{cx:Le,cy:Le,r:Ni*(90-l)/90,class:l===0?"sky-horizon":"sky-ring"},s);In("line",{x1:Le,y1:Le-Ni,x2:Le,y2:Le+Ni,class:"sky-ring"},s),In("line",{x1:Le-Ni,y1:Le,x2:Le+Ni,y2:Le,class:"sky-ring"},s);for(let[l,h,f]of[["N",Le,12],["E",_r-8,Le+4],["S",Le,_r-4],["W",8,Le+4]])In("text",{x:h,y:f,class:"sky-label"},s).textContent=l;for(let[l,h]of[[30,"30\xB0"],[60,"60\xB0"]])In("text",{x:Le+3,y:Le-Ni*(90-l)/90-2,class:"sky-scale"},s).textContent=h;if(!r.length)return;let o=r.map(l=>zc(l.azimuth_deg,l.elevation_deg).map(h=>h.toFixed(1)).join(",")).join(" ");if(In("polyline",{points:o,fill:"none",stroke:e,"stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},s),i){let l=r.filter(h=>{let f=Date.parse(h.at);return f>=Date.parse(i.start.at)&&f<=Date.parse(i.end.at)});l.length>1&&In("polyline",{points:l.map(h=>zc(h.azimuth_deg,h.elevation_deg).map(f=>f.toFixed(1)).join(",")).join(" "),fill:"none",class:"sky-visible"},s)}let c=(l,h,f)=>{let[u,m]=zc(l.azimuth_deg,l.elevation_deg);In("circle",{cx:u,cy:m,r:h,class:f,fill:e},s)};c(r[0],3,"sky-start"),c(a,4.5,"sky-peak")}var Vc=["identity","radio","sees"],Gc=8,x7="Add a satellite to see its details here.",y7="Live data is off while serving a local file.",Hc="Loading\u2026",ef="Loading\u2026 The first time, Khonsu downloads the whole catalog, which can take a couple of minutes.",v7="Run khonsu setup to connect your own free Space-Track account, then restart Khonsu.";function nf({api:n,element:t,feedCredit:e,dataFailure:i,dataTime:s,selectedEntry:r,catalog:a,panels:o,focusScene:c,clearScene:l}){let h=new Map,f=new Map,u={identity:0,radio:0,sees:0},m=Promise.resolve(a).then(I=>({liveData:I?.liveData??!0,spaceTrackReady:I?.spaceTrackReady??!1,imagingIds:I?.imagingIds??new Set}),()=>({liveData:!0,spaceTrackReady:!1,imagingIds:new Set})),_={satelliteDetails:I=>n.satelliteDetails(I),catalogRecord:I=>n.catalogRecord(I),spaceTrack:I=>n.spaceTrack(I),transmitters:I=>n.transmitters(I),recentScenes:I=>n.recentScenes(I)};function v(I,W){let T=`${I}:${W}`;if(h.has(T))return Promise.resolve(h.get(T));if(f.has(T))return f.get(T);let D=new Promise(F=>F(_[I](W))).then(F=>(h.set(T,F),F)).finally(()=>f.delete(T));return f.set(T,D),D}function p(I,W,T,D){return I.then(F=>{W()&&T(F)},F=>{W()&&F?.name!=="AbortError"&&D(F)})}let d=I=>t("p","note",I);function M(I){let W=t("ul");return W.append(...I.filter(([,T])=>T).map(([T,D])=>t("li",null,`${T}: ${D}`))),W}function A(I){let[W,...T]=I.data;if(!W)return[d("Wikidata has no entry for this satellite."),...e(I)];let D=[M([["Name",W.name],["Description",W.description],["Types",(W.types??[]).join(", ")],["Operators",(W.operators??[]).join(", ")],["Countries",(W.countries??[]).join(", ")],["Launch date",W.launch_date]])];return T.length&&D.push(d(`Also matched: ${T.map(F=>F.name).join(", ")}`)),[...D,...e(I)]}function b(I,W){let T=I.data;if(!T)return[d("GCAT has no entry for this satellite."),...e(I)];let D=[t("h3","dossier-heading",`Catalog object: ${T.name}`)];return W&&!Bd(W.name,T.name)&&D.push(d(`GCAT lists this object as ${T.name}, so these figures describe that entry alone.`)),D.push(M([["Kind",T.kind],["Bus",T.bus],["Mass",T.mass_kg?`${T.mass_kg.toLocaleString("en-GB")} kg`:null],["Launched",T.launch_date],["Owner code",T.owner],["Manufacturer code",T.manufacturer],["Orbit class",T.orbit_class]])),[...D,...e(I)]}function w(I){let[W]=I.data;return W?[t("h3","dossier-heading","Space-Track record"),M([["Name",W.name],["Object type",W.object_type],["Radar size",W.rcs_size],["Country code",W.country],["Launched",W.launch_date],["Decayed",W.decay_date],["Element epoch",W.epoch]]),...e(I)]:[d("Space-Track has no record for this satellite."),...e(I)]}function S(I){let W=Od(I.data);if(!W.length)return[d("SatNOGS lists no active transmitters for this satellite."),...e(I)];let T=t("ul");T.append(...W.slice(0,Gc).map(z=>{let j=[Nd(z.downlink_hz),z.mode].filter(Boolean).join(" \xB7 ");return t("li",null,j?`${z.description}: ${j}`:z.description)}));let D=W.length,F=[d(`${D} active transmitter${D===1?"":"s"}`),T];return D>Gc&&F.push(d(`+ ${D-Gc} more`)),[...F,...e(I)]}function R(I){let W=[I.minCloud,I.maxCloud].filter(F=>F!=null).map(F=>Math.round(F));if(!W.length)return null;let T=Math.min(...W),D=Math.max(...W);return T===D?`${T}% cloud`:`${T}\u2013${D}% cloud`}function x(I){let W=[`near ${I.lat.toFixed(1)}\xB0, ${I.lon.toFixed(1)}\xB0`];I.scenes.length>1&&W.push(`${I.scenes.length} tiles`);let T=R(I);return T&&W.push(T),W.join(" \xB7 ")}function E(I){let W=kd(I.data);if(!W.length)return[d("Earth Search lists scenes from Sentinel-2 and Landsat satellites. This satellite is not one of them.")];let T=W.map(F=>{let z=t("button","scene-row");return z.type="button",z.dataset.focus=`scene:${F.time}`,z.setAttribute("aria-pressed","false"),z.append(t("strong",null,s(new Date(F.time).toISOString())),t("span",null,x(F))),z.addEventListener("click",()=>{for(let j of T)j.setAttribute("aria-pressed",String(j===z));c({lat:F.lat,lon:F.lon})}),z}),D=t("div","scene-list");return D.append(...T),[d("Recent scenes and where their centres are. Choose one to mark it on the globe. These are acquisition locations, not the pictures themselves."),D,...e(I)]}function N(I,W,T){let D=t("div","dossier-block"),F=t("div","dossier-block"),z=t("div","dossier-block");D.append(d(Hc)),F.append(d(ef)),z.append(d(T.spaceTrackReady?Hc:v7)),o.identity.replaceChildren(D,F,z);let j=null,dt=null,ut=()=>{W()&&(dt?dt.error?F.replaceChildren(i(dt.error)):F.replaceChildren(...b(dt.feed,j?.feed?.data?.[0])):F.replaceChildren(d(ef)))},Vt=p(v("satelliteDetails",I.id),W,Q=>{j={feed:Q},D.replaceChildren(...A(Q)),ut()},Q=>{j={error:Q},D.replaceChildren(i(Q)),ut()}),Gt=p(v("catalogRecord",I.id),W,Q=>{dt={feed:Q},ut()},Q=>{dt={error:Q},ut()}),kt=T.spaceTrackReady?p(v("spaceTrack",I.id),W,Q=>z.replaceChildren(...w(Q)),Q=>z.replaceChildren(i(Q))):null;return Promise.all([Vt,Gt,kt])}function O(I,W,T,D,F){return I.replaceChildren(d(Hc)),p(v(T,D.id),W,z=>I.replaceChildren(...F(z)),z=>I.replaceChildren(i(z)))}async function X(I){if(!Vc.includes(I))return;let W=o[I],T=++u[I],D=r();if(!D){W.replaceChildren(d(x7));return}let F=await m,z=()=>u[I]===T&&r()?.id===D.id;if(z()){if(!F.liveData){W.replaceChildren(d(y7));return}return I==="identity"?N(D,z,F):I==="radio"?O(W,z,"transmitters",D,S):O(W,z,"recentScenes",D,E)}}function q(I=[]){for(let T of Vc)u[T]+=1;l();let W=[].concat(I).filter(T=>Vc.includes(T));return Promise.all(W.map(T=>X(T)))}async function k(){let I=r();return I?(await m).imagingIds.has(I.id):!1}return{open:X,selectionChanged:q,hasSees:k}}var b7="Add a satellite to see what it measures.",S7="Loading\u2026",M7="Khonsu doesn't describe this satellite's instruments yet. Each description is written by hand, with a source for every sentence, so only some satellites have one.",w7="Views on the globe need live data and WebGL.";function Fi(n,t,e){for(let i of e){let s=n("a","why-source",i.label);s.href=i.url,s.target="_blank",s.rel="noopener noreferrer",s.title=i.title,s.setAttribute("aria-label",`Source: ${i.title} (${i.label}, opens in a new tab)`),t.append(" ",s)}}function sf({api:n,element:t,panel:e,selectedEntry:i,dataFailure:s,layers:r,startLesson:a=null}){let o=new Map,c=new Set,l=0,h=d=>t("p","note",d);function f(d){let M=t("ul","why-list");return M.append(...d.map(A=>{let b=t("li","",A.text);return Fi(t,b,A.sources),b})),M}function u(d,M=null){let A=r()?.viewOn()===d.id,b=t("button","text-button data-view",A?`Showing ${d.name} \xB7 Hide`:`Show on the globe: ${d.name}`);return b.type="button",b.dataset.focus=`view:${d.id}`,b.setAttribute("aria-pressed",String(A)),b.addEventListener("click",()=>{M&&c.add(M),r()?.show(A?"":d.id)&&p()}),b}function m(d){let M=[t("h3","why-title","What it measures")],A=t("ul","why-chips data-chips");A.setAttribute("aria-label","Kinds of data"),A.append(...d.chips.map(w=>t("li","why-chip",w))),M.push(A),d.items.length&&M.push(f(d.items));for(let w of d.instruments)M.push(t("h4","data-instrument",w.name)),w.kinds.length&&M.push(h(w.kinds.join(" \xB7 "))),w.items.length&&M.push(f(w.items));M.push(t("h3","why-title data-kinds-title","About these kinds of data"));let b=r()?.views().length>0;for(let w of d.kinds){let S=t("details","data-kind");if(S.open=c.has(w.id),S.addEventListener("toggle",()=>{S.open?c.add(w.id):c.delete(w.id)}),S.append(t("summary","",w.name),f(w.items)),w.views.length||a&&w.lessons.length){let R=t("div","link-row");R.append(...w.views.map(x=>u(x,w.id))),a&&R.append(...w.lessons.map(x=>{let E=t("button","text-button data-view data-lesson",`Lesson: ${x.title}`);return E.type="button",E.addEventListener("click",()=>a(x.id)),E})),S.append(R)}M.push(S)}return b||M.push(h(w7)),M}function _(){let d=[h(M7)],M=r()?.views()??[];if(M.length){d.push(t("h3","why-title","What satellites measure"));let A=t("div","link-row");A.append(...M.map(b=>u(b))),d.push(A)}return d}function v(d,M){if(M.error){e.replaceChildren(s(M.error));return}let A=Hd(M.response,r()?.views()??[]);e.replaceChildren(...A?m(A):_())}async function p(){let d=++l,M=i();if(!M){e.replaceChildren(h(b7));return}if(o.has(M.id)){v(M,o.get(M.id));return}e.replaceChildren(h(S7));let A;try{A={response:await n.satelliteData(M.id)},o.set(M.id,A)}catch(b){if(b?.name==="AbortError")return;A={error:b}}d===l&&i()?.id===M.id&&v(M,A)}return{render:p}}var rf="khonsu.panels",Ui={catalog:{variable:"--catalog-width",initial:268,min:200,max:480,label:"Resize the satellite list"},inspector:{variable:"--inspector-width",initial:320,min:280,max:640,label:"Resize the satellite details"}},E7=360,T7=16,A7=64;function C7(n,t,e,i){let{min:s,max:r}=Ui[n],a=Math.max(s,e-i-E7);return Math.round(Math.min(Math.max(t,s),r,a))}function R7(n){let t=null;try{t=JSON.parse(n.getItem(rf))}catch{t=null}let e={};for(let i of Object.keys(Ui)){let s=t?.[i];e[i]=Number.isFinite(s)?s:Ui[i].initial}return e}function P7(n,t,e,i){let s=e?A7:T7,r=n==="catalog"?"ArrowRight":"ArrowLeft",a=n==="catalog"?"ArrowLeft":"ArrowRight";return t===r?i+s:t===a?i-s:t==="Home"?Ui[n].min:t==="End"?Ui[n].max:null}function af({root:n,handles:t,storage:e,windowWidth:i=()=>window.innerWidth}){let s=R7(e),r=c=>c==="catalog"?"inspector":"catalog";function a(c,l,h=!0){if(s[c]=C7(c,l,i(),s[r(c)]),n.style.setProperty(Ui[c].variable,`${s[c]}px`),t[c].setAttribute("aria-valuenow",String(s[c])),h)try{e.setItem(rf,JSON.stringify(s))}catch{}}for(let[c,l]of Object.entries(t)){let h=Ui[c];l.setAttribute("role","separator"),l.setAttribute("aria-orientation","vertical"),l.setAttribute("aria-label",h.label),l.setAttribute("aria-valuemin",String(h.min)),l.setAttribute("aria-valuemax",String(h.max)),l.tabIndex=0,l.title="Drag to resize. Double-click to reset.",l.addEventListener("pointerdown",f=>{if(f.button!==0)return;f.preventDefault(),l.setPointerCapture?.(f.pointerId),l.classList.add("is-dragging");let u=_=>{let v=c==="catalog"?_.clientX:i()-_.clientX;a(c,v,!1)},m=()=>{l.classList.remove("is-dragging"),l.removeEventListener("pointermove",u),l.removeEventListener("pointerup",m),l.removeEventListener("pointercancel",m),a(c,s[c])};l.addEventListener("pointermove",u),l.addEventListener("pointerup",m),l.addEventListener("pointercancel",m)}),l.addEventListener("keydown",f=>{let u=P7(c,f.key,f.shiftKey,s[c]);u!==null&&(f.preventDefault(),a(c,u))}),l.addEventListener("dblclick",()=>a(c,h.initial))}let o=()=>{for(let c of Object.keys(t))a(c,s[c],!1)};return o(),{fit:o,widths:()=>({...s})}}function I7(n,t){let e=t.trim().toLowerCase().split(/\s+/).filter(Boolean);if(!e.length)return[...n];let i=n.filter(r=>{let a=r.toLowerCase();return e.every(o=>a.includes(o))}),s=t.trim().toLowerCase();return[...i.filter(r=>r.toLowerCase().startsWith(s)),...i.filter(r=>!r.toLowerCase().startsWith(s))]}function of({element:n,button:t,popover:e,input:i,list:s,onChoose:r,document:a=globalThis.document}){let o=[],c="",l=[],h=0;function f(M){return`group-option-${M}`}function u(){t.textContent=c||(o.length?"Choose a group":"Loading groups\u2026"),t.disabled=o.length===0}function m(){if(l=I7(o,i.value),h=Math.min(h,Math.max(0,l.length-1)),!l.length){s.replaceChildren(n("li","note group-empty","No group matches.")),i.removeAttribute("aria-activedescendant");return}s.replaceChildren(...l.map((M,A)=>{let b=n("li",`group-option${A===h?" is-active":""}`,M);return b.id=f(A),b.setAttribute("role","option"),b.setAttribute("aria-selected",String(M===c)),b.addEventListener("mousedown",w=>{w.preventDefault(),d(M)}),b})),i.setAttribute("aria-activedescendant",f(h)),s.children[h]?.scrollIntoView?.({block:"nearest"})}function _(){return!e.hidden}function v(){o.length&&(e.hidden=!1,t.setAttribute("aria-expanded","true"),i.value="",h=Math.max(0,o.indexOf(c)),m(),i.focus())}function p(M=!0){_()&&(e.hidden=!0,t.setAttribute("aria-expanded","false"),M&&t.focus())}function d(M){p(),M!==c&&(c=M,u(),r(M))}return t.addEventListener("click",()=>_()?p():v()),i.addEventListener("input",()=>{h=0,m()}),i.addEventListener("keydown",M=>{if(M.key==="ArrowDown"||M.key==="ArrowUp"){if(M.preventDefault(),!l.length)return;h=(h+(M.key==="ArrowDown"?1:l.length-1))%l.length,m()}else M.key==="Enter"?(M.preventDefault(),l[h]&&d(l[h])):M.key==="Escape"&&(M.preventDefault(),p())}),a?.addEventListener?.("mousedown",M=>{_()&&!e.contains(M.target)&&!t.contains(M.target)&&p(!1)}),u(),{setGroups(M){o=[...M],u()},setCurrent(M){c=M,u()},current:()=>c,open:v,close:p}}var xe={top:14,right:12,bottom:34,left:46};function we(n){return String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function lf(n,t,e=5){if(!(Number.isFinite(n)&&Number.isFinite(t))||t<=n)return[n];let i=(t-n)/e,s=10**Math.floor(Math.log10(i)),r=[1,2,5,10].map(o=>o*s).find(o=>o>=i),a=[];for(let o=Math.ceil(n/r)*r;o<=t+r*1e-9;o+=r)a.push(Number(o.toPrecision(12)));return a}function Wc(n,t){let e=[];for(let i=Math.floor(Math.log10(n));i<=Math.ceil(Math.log10(t));i+=1){let s=10**i;s>=n*.999&&s<=t*1.001&&e.push(s)}return e}function Xc(n,t,e,i){let s=t-n||1;return r=>e+(r-n)/s*(i-e)}function $c(n,t,e,i){let s=Math.log10(n),r=Math.log10(t)-s||1;return a=>e+(Math.log10(a)-s)/r*(i-e)}var Ke=n=>Math.abs(n)>=1e3?n.toLocaleString("en-GB"):String(Number(n.toPrecision(4)));function cf(n,t){return`<svg class="chart" viewBox="0 0 360 200" role="img" aria-label="${we(n)}" xmlns="http://www.w3.org/2000/svg">${t}</svg>`}function Do(n,t,e){let i=t.map(r=>`<th scope="col">${we(r)}</th>`).join(""),s=e.map(r=>`<tr>${r.map(a=>`<td>${we(a)}</td>`).join("")}</tr>`).join("");return`<details class="chart-table"><summary>Show the numbers</summary><table><caption>${we(n)}</caption><thead><tr>${i}</tr></thead><tbody>${s}</tbody></table></details>`}function hf(n,t){return`<text class="chart-axis-label" x="${(xe.left+360-xe.right)/2}" y="196" text-anchor="middle">${we(n)}</text><text class="chart-axis-label" x="10" y="${(xe.top+200-xe.bottom)/2}" text-anchor="middle" transform="rotate(-90 10 ${(xe.top+200-xe.bottom)/2})">${we(t)}</text>`}function qc({title:n,xLabel:t,yLabel:e,points:i,highlight:s=[]}){let r=i.filter(A=>Number.isFinite(A.x)&&Number.isFinite(A.y)).sort((A,b)=>A.x-b.x);if(r.length<2)return"";let a=r.map(A=>A.x),o=r.map(A=>A.y),c=lf(Math.min(...o),Math.max(...o)),l=Math.min(c[0],...o),h=Math.max(c.at(-1),...o),f=Xc(Math.min(...a),Math.max(...a),xe.left,360-xe.right),u=Xc(l,h,200-xe.bottom,xe.top),m=c.map(A=>`<line class="chart-grid" x1="${xe.left}" x2="${360-xe.right}" y1="${u(A).toFixed(1)}" y2="${u(A).toFixed(1)}"/><text class="chart-tick" x="${xe.left-5}" y="${(u(A)+3).toFixed(1)}" text-anchor="end">${we(Ke(A))}</text>`).join(""),v=lf(Math.min(...a),Math.max(...a),5).filter(A=>A>=a[0]&&A<=a.at(-1)).map(A=>`<text class="chart-tick" x="${f(A).toFixed(1)}" y="${200-xe.bottom+13}" text-anchor="middle">${we(A)}</text>`).join(""),p=r.map((A,b)=>`${b?"L":"M"}${f(A.x).toFixed(1)},${u(A.y).toFixed(1)}`).join(""),d=s.map(A=>r.find(b=>b.x===A.x)&&{...A,point:r.find(b=>b.x===A.x)}).filter(Boolean).map(({point:A,label:b})=>`<circle class="chart-mark" cx="${f(A.x).toFixed(1)}" cy="${u(A.y).toFixed(1)}" r="3.5"/><text class="chart-note" x="${f(A.x).toFixed(1)}" y="${(u(A.y)-7).toFixed(1)}" text-anchor="middle">${we(b)}</text>`).join("");return cf(n,`${m}${v}<path class="chart-line" d="${p}"/>${d}${hf(t,e)}`)+Do(n,[t,e],r.map(A=>[A.x,Ke(A.y)]))}function uf({title:n,xLabel:t,yLabel:e,points:i}){let s=i.filter(d=>d.x>0&&d.y>0);if(!s.length)return"";let r=s.map(d=>d.x),a=s.map(d=>d.y),o=10**Math.floor(Math.log10(Math.min(...r))),c=10**Math.ceil(Math.log10(Math.max(...r))),l=10**Math.floor(Math.log10(Math.min(...a))),h=10**Math.ceil(Math.log10(Math.max(...a))),f=$c(o,c,xe.left,360-xe.right),u=$c(l,h,200-xe.bottom,xe.top),m=Wc(l,h).map(d=>`<line class="chart-grid" x1="${xe.left}" x2="${360-xe.right}" y1="${u(d).toFixed(1)}" y2="${u(d).toFixed(1)}"/><text class="chart-tick" x="${xe.left-5}" y="${(u(d)+3).toFixed(1)}" text-anchor="end">${we(Ke(d))}</text>`).join("")+Wc(o,c).map(d=>`<text class="chart-tick" x="${f(d).toFixed(1)}" y="${200-xe.bottom+13}" text-anchor="middle">${we(Ke(d))}</text>`).join(""),_=[],v=s.map(d=>{let M=f(d.x),A=u(d.y),b=A+3;for(;_.some(w=>Math.abs(w.x-M)<34&&Math.abs(w.y-b)<9);)b+=9;return _.push({x:M,y:b}),`<g class="chart-point"><circle cx="${M.toFixed(1)}" cy="${A.toFixed(1)}" r="4"/><text class="chart-note" x="${(M+6).toFixed(1)}" y="${b.toFixed(1)}">${we(d.label)}</text></g>`}).join("");return cf(n,`${m}${v}${hf(t,e)}`)+Do(n,["",t,e],s.map(d=>[d.label,Ke(d.x),Ke(d.y)]))}function df({title:n,regions:t,rows:e,min:i=.3,max:s=3e5}){let o=36+e.length*18+30,c=$c(i,s,xe.left+40,360-xe.right),l=t.map((_,v)=>{let p=c(Math.max(i,_.from)),d=c(Math.min(s,_.to));return`<rect class="chart-region chart-region-${v%6}" x="${p.toFixed(1)}" y="32" width="${Math.max(1,d-p).toFixed(1)}" height="${e.length*18+8}"/><text class="chart-note" x="${((p+d)/2).toFixed(1)}" y="${28-v%2*9}" text-anchor="middle">${we(_.label)}</text>`}).join(""),h=e.map((_,v)=>{let p=36+v*18,d=`<text class="chart-tick" x="${xe.left+34}" y="${p+11}" text-anchor="end">${we(_.label)}</text>`,M=_.bands.map(A=>{let b=c(A.from),w=c(A.to);return`<rect class="chart-band" x="${b.toFixed(1)}" y="${p+3}" width="${Math.max(2,w-b).toFixed(1)}" height="12"><title>${we(`${_.label} ${A.name}: ${Ke(A.from)}\u2013${Ke(A.to)} \xB5m`)}</title></rect>`}).join("");return d+M}).join(""),f=Wc(i,s).map(_=>`<text class="chart-tick" x="${c(_).toFixed(1)}" y="${o-14}" text-anchor="middle">${we(_>=1e3?`${Ke(_/1e4)} cm`:`${Ke(_)} \xB5m`)}</text>`).join(""),u=`<svg class="chart" viewBox="0 0 360 ${o}" role="img" aria-label="${we(n)}" xmlns="http://www.w3.org/2000/svg">${l}${h}${f}</svg>`,m=e.flatMap(_=>_.bands.map(v=>[_.label,v.name,`${Ke(v.from)}\u2013${Ke(v.to)} \xB5m`]));return u+Do(n,["Instrument","Band","Wavelength"],m)}function ff({title:n,unit:t="",bars:e}){let i=e.filter(h=>Number.isFinite(h.value));if(!i.length)return"";let s=22,r=i.length*s+16,a=Math.max(...i.map(h=>h.value),0)||1,o=Xc(0,a,90,320),c=i.map((h,f)=>{let u=8+f*s;return`<text class="chart-tick" x="84" y="${u+13}" text-anchor="end">${we(h.label)}</text><rect class="chart-band" x="90" y="${u+3}" width="${Math.max(1,o(h.value)-90).toFixed(1)}" height="${s-8}"/><text class="chart-note" x="${(o(h.value)+4).toFixed(1)}" y="${u+13}">${we(`${Ke(h.value)}${t}`)}</text>`}).join("");return`<svg class="chart" viewBox="0 0 360 ${r}" role="img" aria-label="${we(n)}" xmlns="http://www.w3.org/2000/svg">${c}</svg>`+Do(n,["",t?`Value (${t})`:"Value"],i.map(h=>[h.label,Ke(h.value)]))}function pf(n){let t=new Map;for(let e of n){if(!Number.isFinite(e.x)||!Number.isFinite(e.y))continue;let i=Math.floor(e.x),s=t.get(i)??{sum:0,count:0};s.sum+=e.y,s.count+=1,t.set(i,s)}return[...t.entries()].sort((e,i)=>e[0]-i[0]).map(([e,{sum:i,count:s}])=>({x:e,y:Number((i/s).toFixed(1))}))}function mf(n){let t=new URLSearchParams(n),e=t.get("lesson");if(!e||!/^[a-z0-9-]{1,64}$/.test(e))return null;let i=Number.parseInt(t.get("step")??"1",10);return{id:e,step:Number.isFinite(i)&&i>=1?i-1:0}}function gf(n,t){if(!t)return n;let e=n.includes("?")?"&":"?";return`${n}${e}lesson=${encodeURIComponent(t.id)}&step=${t.step+1}`}function Yc(n){return{text:String(n?.text??""),sources:(Array.isArray(n?.sources)?n.sources:[]).filter(t=>typeof t?.url=="string"&&/^https:\/\//.test(t.url)).map(t=>({label:String(t.label||"Source"),title:String(t.title||t.label||"Source"),url:t.url}))}}function _f({api:n,element:t,card:e,list:i,layers:s,showSatellite:r,face:a,onChange:o}){let c=null,l=null,h=null;function f(){return l??(l=n.lessons().then(T=>(c=Array.isArray(T?.lessons)?T.lessons:[],c),T=>{throw l=null,T})),l}let u=T=>s()?.views().find(D=>D.id===T)?.name??T,m=T=>T?{minLat:T.min_lat,minLon:T.min_lon,maxLat:T.max_lat,maxLon:T.max_lon}:null,_=T=>s()?.show(T.layer,T.date,m(T.box),{plain:!!T.plain}),v=T=>Array.isArray(T.pictures)&&T.pictures.length>=2?T.pictures:null;function p(T){T.satellite&&r(T.satellite);let D=s();D&&(typeof T.base=="string"&&D.setBase(T.base),v(T)?_(T.pictures[0]):T.picture?_(T.picture):Array.isArray(T.compare)&&T.compare.length===2?D.show(T.compare[0]):typeof T.view=="string"&&D.show(T.view)),T.camera&&a(T.camera.lat,T.camera.lon,T.camera.distance||null)}let d=new Map;function M(T){let D=T.dataset==="sea-ice"?`sea-ice:${T.hemisphere}:${T.month}`:T.dataset;if(!d.has(D)){let F=T.dataset==="sea-ice"?n.seaIce(T.hemisphere,T.month):n.seaLevel();d.set(D,F.catch(z=>{throw d.delete(D),z}))}return d.get(D)}async function A(T){if(T.dataset==="bars")return{markup:ff({title:T.title,unit:T.unit,bars:T.bars.map(Vt=>({label:Vt.label,value:Vt.value}))})};let D=await M(T);if(T.dataset==="sea-ice"){let Vt=(D.data??[]).map(kt=>({x:kt.year,y:kt.extent_million_km2})),Gt=(T.highlight??[]).map(kt=>({x:kt,label:String(kt)}));return{markup:qc({title:T.title,xLabel:"Year",yLabel:`Extent (${T.unit})`,points:Vt,highlight:Gt}),feed:D,note:"Computed by Khonsu from NSIDC's monthly values."}}let F=D.data??{},z=pf((F.points??[]).map(Vt=>({x:Vt.year,y:Vt.level_mm}))),j=(F.points??[]).at(-1),dt=j?` Data through ${Math.floor(j.year)}.`:"",ut=F.trend?` NOAA's stated trend: ${F.trend}.`:"";return{markup:qc({title:T.title,xLabel:"Year",yLabel:"Sea level (mm)",points:z}),feed:D,note:`Yearly averages of NOAA's values, computed by Khonsu.${dt}${ut}`}}function b(T,D){let F=t("div","lesson-chart");return F.append(t("p","note","Loading the record\u2026")),A(T).then(({markup:z,feed:j,note:dt})=>{if(D!==N)return;let ut=t("div","learn-chart");ut.innerHTML=z;let Vt=[t("p","lesson-chart-title",T.title),ut];dt&&Vt.push(t("p","note",dt)),j?.source?.credit&&Vt.push(t("p","note lesson-credit",j.source.credit)),T.source&&Vt.push(w([Yc(T.source)])),F.replaceChildren(...Vt)},z=>{D===N&&F.replaceChildren(t("p","note is-error",`Could not load this record: ${z.message}`))}),F}function w(T){let D=t("ul","why-list");return D.append(...T.map(F=>{let z=t("li","",F.text);return Fi(t,z,F.sources),z})),D}function S(T,D,F){let z=t("button",D,T);return z.type="button",z.addEventListener("click",F),z}function R(T){let D=t("div","lesson-compare");return D.setAttribute("role","group"),D.setAttribute("aria-label","Compare pictures"),D.append(...T.pictures.map((F,z)=>{let j=S(F.label||F.date,"text-button",()=>{h.compareOn=z,_(F),O()});return j.setAttribute("aria-pressed",String(h.compareOn===z)),j})),D}function x(T){let D=t("div","lesson-compare");return D.setAttribute("role","group"),D.setAttribute("aria-label","Compare two views"),D.append(...T.compare.map((F,z)=>{let j=S(u(F),"text-button",()=>{h.compareOn=z,s()?.show(F),O()});return j.setAttribute("aria-pressed",String(h.compareOn===z)),j})),D}function E(T){let D=t("div","lesson-question");D.append(t("p","lesson-prompt",T.prompt));let F=t("div","lesson-choices");if(F.append(...T.choices.map((z,j)=>{let dt=S(z,"text-button lesson-choice",()=>{h.answer=j,O()});return dt.setAttribute("aria-pressed",String(h.answer===j)),h.answer!==null&&(dt.disabled=!0,j===T.answer&&dt.classList.add("is-right")),dt})),D.append(F),h.answer!==null){let z=h.answer===T.answer?"Yes.":`Not quite: it's "${T.choices[T.answer]}".`,j=t("div","lesson-feedback");j.setAttribute("role","status"),j.append(t("p","lesson-verdict",z),w([Yc(T.explain)])),D.append(j)}return D}let N=0;function O(){if(N+=1,!h){e.hidden=!0,e.replaceChildren();return}let{lesson:T}=h;e.classList?.toggle?.("is-story",!!T.story);let D=T.steps[h.step],F=T.steps.length,z=[t("p","eyebrow",`${T.story?"Story":"Lesson"} \xB7 step ${h.step+1} of ${F}`),t("h2","lesson-title",T.title)],j=(D.text??[]).map(Yc).filter(kt=>kt.text);j.length&&z.push(w(j)),v(D)?z.push(R(D)):Array.isArray(D.compare)&&D.compare.length===2&&z.push(x(D)),D.chart&&z.push(b(D.chart,N)),D.hint&&z.push(t("p","note lesson-hint",D.hint)),D.question&&z.push(E(D.question)),!s()?.views().length&&(D.view||D.compare||D.base||D.picture||D.pictures)&&z.push(t("p","note","The pictures in this lesson need live data and WebGL, so the globe stays as it is."));let dt=t("div","lesson-actions"),ut=S("Back","text-button",()=>q(h.step-1));ut.disabled=h.step===0;let Vt=h.step===F-1,Gt=S(Vt?"Finish":"Next","primary-button",()=>Vt?I():q(h.step+1));dt.append(ut,Gt,S("Close","text-button lesson-close",I)),z.push(dt),e.replaceChildren(...z),e.hidden=!1}function X(T,D){for(let F=D;F>=0;F-=1)if(T.steps[F]?.camera)return T.steps[F].camera;return null}function q(T){if(!h)return;let D=Math.max(0,Math.min(h.lesson.steps.length-1,T));h={lesson:h.lesson,step:D,answer:null,compareOn:0},p(h.lesson.steps[D]),O(),o()}async function k(T,D=0){let z=(await f()).find(dt=>dt.id===T);if(!z||!Array.isArray(z.steps)||!z.steps.length)return!1;let j=Math.max(0,Math.min(z.steps.length-1,D));for(let dt of z.steps.slice(0,j))p({...dt,camera:null});return h={lesson:z,step:j,answer:null,compareOn:0},p({...z.steps[j],camera:X(z,j)}),O(),o(),!0}function I(){h=null,O(),o()}async function W(T){i.replaceChildren(t("p","note","Loading\u2026"));let D;try{D=await f()}catch(F){i.replaceChildren(t("p","note is-error",`Could not load the lessons: ${F.message}`));return}i.replaceChildren(...D.map(F=>{let z=t("div","lesson-item");return z.append(t("h3","lesson-item-title",F.title),t("p","note",F.summary)),z.append(S("Start","text-button",()=>{T?.(),k(F.id)})),z}))}return{start:k,stop:I,renderList:W,current:()=>h?{id:h.lesson.id,step:h.step}:null,holdsCamera:()=>!!(h&&X(h.lesson,h.step))}}var xf=[{id:"kinds",title:"Kinds of data"},{id:"sharp",title:"Sharp or often"},{id:"stories",title:"Stories"},{id:"lessons",title:"Lessons"}];function xr(n){return(Array.isArray(n)?n:[]).filter(t=>typeof t?.text=="string"&&t.text.trim()).map(t=>({text:t.text,sources:(Array.isArray(t.sources)?t.sources:[]).filter(e=>typeof e?.url=="string"&&/^https:\/\//.test(e.url)).map(e=>({label:String(e.label||"Source"),title:String(e.title||e.label||"Source"),url:e.url}))}))}function L7(n){return(n??[]).filter(t=>Array.isArray(t.bands)&&t.bands.length).map(t=>({label:t.short||t.id.toUpperCase(),bands:t.bands.filter(e=>e.from_um>0&&e.to_um>=e.from_um).map(e=>({name:e.name,from:e.from_um,to:e.to_um}))})).filter(t=>t.bands.length)}function D7(n){return(n??[]).filter(t=>t.resolution_m>0&&t.revisit_days>0).map(t=>({label:t.short||t.id.toUpperCase(),x:t.resolution_m,y:t.revisit_days}))}function yf({api:n,element:t,panel:e,layers:i,showSatellite:s,startLesson:r,startStory:a,onClose:o}){let c=null,l=null,h="kinds";function f(){return l??(l=n.learn().then(S=>(c=S??{},c),S=>{throw l=null,S})),l}let u=(S,R="note")=>t("p",R,S);function m(S,R,x){let E=t("button",R,S);return E.type="button",E.addEventListener("click",x),E}function _(S){let R=t("ul","why-list");return R.append(...S.map(x=>{let E=t("li","",x.text);return Fi(t,E,x.sources),E})),R}function v(S){let R=t("div","learn-chart");return R.innerHTML=S,R}function p(S){let R=t("details","learn-card");R.append(t("summary","learn-card-title",S.name));let x=(S.conditions??[]).filter(X=>X?.label);if(x.length){let X=t("ul","learn-conditions");X.append(...x.map(q=>t("li",`learn-condition ${q.value?"is-yes":"is-no"}`,q.label))),R.append(X)}R.append(_(xr([...S.statements??[],...x])));let E=xr(S.uses);if(E.length&&R.append(t("h4","learn-subtitle","Used today for"),_(E)),(S.satellites??[]).length){R.append(t("h4","learn-subtitle","Collected by"));let X=t("div","learn-chips");X.append(...S.satellites.map(q=>m(q.name,"learn-chip",()=>s(q.norad_id)))),R.append(X)}let N=(S.layers??[]).map(X=>i()?.views().find(q=>q.id===X)).filter(Boolean),O=t("div","link-row");return O.append(...N.map(X=>m(`Show on the globe: ${X.name}`,"text-button data-view",()=>i()?.show(X.id)))),O.append(...(S.lessons??[]).map(X=>m(`Lesson: ${X.title}`,"text-button data-view",()=>r(X.id)))),(N.length||(S.lessons??[]).length)&&R.append(O),R}function d(){let S=[u("Satellites measure different kinds of light and radio waves. Each kind shows something the others miss. Open one to see what it is, what it is used for, and which satellites collect it.","learn-intro")],R=L7(c.instruments);if(R.length&&Array.isArray(c.regions)&&c.regions.length){S.push(t("h3","why-title","Where each instrument looks"));let x=c.regions.map(E=>({label:E.label,from:E.from_um,to:E.to_um}));for(let[E,N,O]of[["Light: visible and infrared",.3,20],["Radio: radar and microwave",1e4,3e5]]){let X=R.map(q=>({...q,bands:q.bands.filter(k=>k.to>N&&k.from<O)})).filter(q=>q.bands.length);X.length&&(S.push(t("p","lesson-chart-title",E)),S.push(v(df({title:`${E}: bands of instruments Khonsu describes`,regions:x.filter(q=>q.to>N&&q.from<O),rows:X,min:N,max:O}))))}c.regions_sources&&S.push(_(xr(c.regions_sources)))}return S.push(...(c.kinds??[]).map(p)),S}function M(){let S=D7(c.instruments),R=[u("No instrument sees everything sharply and often. A sharper view needs a narrower swath, which means more time between looks.","learn-intro")];if(R.push(_(xr(c.sharp_statements))),S.length){R.push(v(uf({title:"Pixel size against time between looks",xLabel:"Smallest pixel (m)",yLabel:"Days between looks",points:S})));let x=(c.instruments??[]).filter(E=>E.specs);x.length&&(R.push(t("h4","learn-subtitle","Where the numbers come from")),R.push(_(xr(x.map(E=>E.specs)))))}else R.push(u("The numbers for this chart are not available."));return R}function A(){let S=c.stories??[];return S.length?[u("Real events, seen by the satellites in Khonsu. Each story puts the pictures from that day on the globe.","learn-intro"),...S.map(R=>{let x=t("div","learn-story");return x.append(t("h3","learn-story-title",R.title),u(R.summary)),(R.when||R.where)&&x.append(u([R.when,R.where].filter(Boolean).join(" \xB7 "),"note learn-story-meta")),x.append(m("Open the story","text-button",()=>a(R.id))),x})]:[u("No stories yet.")]}function b(){let S=c.lessons??[];return[u("Short tours on the globe. Each step sets up the satellite and the picture, asks you to predict, then explains.","learn-intro"),...S.map(R=>{let x=t("div","learn-story");return x.append(t("h3","learn-story-title",R.title),u(R.summary),m("Start","text-button",()=>r(R.id))),x})]}async function w(){let S=t("div","learn-header");S.append(t("h2","eyebrow","Learn"),m("Close","text-button",o));let R=t("div","learn-tabs");R.setAttribute("role","tablist"),R.setAttribute("aria-label","Learn chapters"),R.append(...xf.map(N=>{let O=m(N.title,"learn-tab",()=>{h=N.id,w()});return O.setAttribute("role","tab"),O.setAttribute("aria-selected",String(N.id===h)),O}));let x=t("div","learn-body");x.append(u("Loading\u2026")),e.replaceChildren(S,R,x);try{await f()}catch(N){x.replaceChildren(u(`Could not load the lessons: ${N.message}`,"note is-error"));return}let E={kinds:d,sharp:M,stories:A,lessons:b};x.replaceChildren(...E[h]())}return{render:w,show(S){return xf.some(R=>R.id===S)&&(h=S),w()},chapter:()=>h}}var N7="Loading\u2026",vf="Live data is off while serving a local file.";function bf({api:n,element:t,feedCredit:e,dataFailure:i,dataTime:s,catalog:r,chips:a,popover:o,onKp:c=()=>{},now:l=Date.now}){let h=S(),f=S(),u=S(),m=S(),_=!1,v=!0,p=null,d=0,M=null,A=null,b=null,w=null;function S(){return{feed:null,error:null,pending:null}}function R(P,H){if(!P.pending){let tt;try{tt=Promise.resolve(H())}catch(ct){tt=Promise.reject(ct)}P.pending=tt.then(ct=>{P.feed=ct,P.error=null},ct=>{ln(ct)||(P.error=ct)}).then(()=>{P.pending=null,N()})}return P.pending}function x(){if(!v)return"off";if(h.feed){let P=Oc(h.feed.data);return P===null?"unavailable":P.toFixed(1)}return h.error&&!h.pending?"unavailable":"\u2026"}function E(){if(!v)return"off";if(f.feed){let P=l(),H=Vd(f.feed.data,P);return H?Gd(H,P):"none listed"}return f.error&&!f.pending?"unavailable":"\u2026"}function N(){b&&(b.textContent=x(),w.textContent=E())}function O(){M?.setAttribute("aria-expanded",String(p==="weather")),A?.setAttribute("aria-expanded",String(p==="launch"))}function X(P,H,tt){let ct=t("button","sky-chip",null);return ct.setAttribute("type","button"),ct.setAttribute("aria-haspopup","dialog"),ct.setAttribute("aria-expanded","false"),ct.append(P,H),ct.addEventListener("click",()=>Zt(tt)),ct}function q(P){let H=t("div","data-values");for(let[tt,ct]of P){let Lt=t("span",null,`${tt} `);Lt.append(t("strong",null,ct)),H.append(Lt)}return H}function k(P,H){if(P.feed){let tt=H(P.feed);return P.error&&tt.push(i(P.error)),tt}return P.error&&!P.pending?[i(P.error)]:[t("p","note",N7)]}function I(P,H){let tt=t("div","sky-block");return tt.append(...k(P,H)),tt}function W(P){let{kp:H=[],flux:tt=[],scales:ct,alerts:Lt=[]}=P.data,mt=[],Bt=H.at(-1),U=Bt?[["Kp",`${Bt.kp.toFixed(1)} ${Dd(Bt.kp)}`]]:[];if(tt.length&&U.push(["F10.7",String(Math.round(tt.at(-1).flux))]),ct&&U.push(["Scales",`G${ct.geomagnetic.level} S${ct.solar.level} R${ct.radio.level}`]),U.length&&mt.push(q(U)),Lt.length){let ne=t("ul");ne.append(...Lt.slice(0,3).map(qt=>t("li",null,`${s(qt.issued_at)}: ${qt.headline}`))),mt.push(ne)}return[...mt,...e(P)]}function T(P){let H=Fd(P.data);return H?[q([["Past year, strongest Kp",`${H.strongest.kp_max.toFixed(1)} on ${H.strongest.date}`],["Average F10.7",String(Math.round(H.meanFlux))]]),...e(P)]:[t("p","note","No observed days are available.")]}function D(P){if(!P.data.length)return[t("p","note","No events in the past two weeks."),...e(P)];let H=t("ul");return H.append(...P.data.slice(0,4).map(tt=>t("li",null,`${s(tt.time)}: ${tt.kind}${tt.detail?` (${tt.detail})`:""}`))),[H,...e(P)]}function F(P){if(!P.data.length)return[t("p","note","No upcoming launches are listed."),...e(P)];let H=t("ul");return H.append(...P.data.slice(0,5).map(tt=>{let ct=t("li","sky-launch",tt.name);return ct.append(t("span","sky-meta",` ${s(tt.net)} \xB7 ${tt.status}`)),ct})),[H,...e(P)]}function z(){let P=t("h3","sky-title","Space weather");return v?[P,...k(h,W),I(u,T),I(m,D)]:[P,t("p","note",vf)]}function j(){let P=t("h3","sky-title","Next launches");return v?[P,...k(f,F)]:[P,t("p","note",vf)]}function dt(){p&&o.replaceChildren(...p==="weather"?z():j())}function ut(P,H){P.then(()=>{H===d&&dt()})}function Vt(){return Promise.resolve(n.spaceWeather()).then(P=>(c(Oc(P.data)),P),P=>{throw ln(P)||c(null),P})}function Gt(P){v&&(ut(R(h,Vt),P),u.feed||ut(R(u,()=>n.spaceWeatherHistory()),P),m.feed||ut(R(m,()=>n.spaceEvents()),P))}function kt(P){v&&ut(R(f,()=>n.launches()),P)}function Q(P){o.contains(P.target)||M.contains(P.target)||A.contains(P.target)||he()}function rt(P){if(P.key!=="Escape"||!p)return;let H=p==="weather"?M:A;he(),H.focus()}function At(){globalThis.document.addEventListener("pointerdown",Q),globalThis.document.addEventListener("keydown",rt)}function Ht(){globalThis.document.removeEventListener("pointerdown",Q),globalThis.document.removeEventListener("keydown",rt)}function wt(P){p||At(),p=P,d+=1;let H=d;O(),o.hidden=!1,dt(),P==="weather"?Gt(H):kt(H)}function Zt(P){p===P?he():wt(P)}function he(){p&&(p=null,d+=1,Ht(),O(),o.hidden=!0,o.replaceChildren())}async function J(){if(_)return;if(_=!0,b=t("strong",null,"\u2026"),w=t("strong",null,"\u2026"),M=X("Kp ",b,"weather"),A=X("Launch ",w,"launch"),a.append(M,A),o.hidden=!0,v=(await Promise.resolve(r).catch(()=>null))?.liveData!==!1,!v){N(),c(null);return}await Promise.all([R(h,Vt),R(f,()=>n.launches())])}function ft(){w&&(w.textContent=E())}return{start:J,tick:ft,close:he}}var Zc=200,F7=10*6e4,U7="25544",O7=6e4,B7=15e3,Wo=48,k7=1500,ot=n=>document.getElementById(n),Oe=Sh(),Si=bd(()=>window.localStorage);Ed(Si);var L={tracked:new Map,selected:null,observer:Td(Si),utc:Si.getItem("khonsu.utc")==="1",window:Fc(Date.now()),time:Date.now(),live:!0,playing:!1,groups:[],items:[],isSearchResult:!1,catalogLoading:!1,tab:"now",report:null,plan:null,planError:null,planLoading:!1,planFor:null,planAt:0,activePass:null,clouds:null},le=null,Sf=0,Mf=0,wf=!1,Df=!0,Es=null,No=null,Ef=null,Cs=null,zo=null,Xn=null,Vo=null,Nf=null,Kc=new Map,Tf="",Af=null,Fo=mf(location.search),Uo=null,jc=null,Cf=0,Qc=["now","orbit","data","passes"],Ff={identity:"now",radio:"now",sees:"data"};function sh(){return Object.entries(Ff).filter(([n,t])=>t===L.tab&&ot(`section-${n}`).open&&!ot(`section-${n}`).hidden).map(([n])=>n)}function rh(n,t,e){let i=document.activeElement,s=i&&n.contains(i)?i.dataset.focus:null;if(t(),!s)return;([...n.querySelectorAll("[data-focus]")].find(a=>a.dataset.focus===s)??e)?.focus({preventScroll:!0})}function ht(n,t,e){let i=document.createElement(n);return t&&(i.className=t),e!==void 0&&(i.textContent=e),i}function ah(){return[...L.tracked.keys()]}function yn(){return L.tracked.get(L.selected)??null}function oh(){history.replaceState(null,"",gf(Md(ah(),L.selected)||location.pathname,Xn?.current()))}function Bi(n){return`${ws(n,L.utc)} ${Ms(n,L.utc)}`}async function Xo(n){n.error=null,n.loading=!0,clearTimeout(n.retryTimer),n.request=(n.request??0)+1;let t=n.request;yr();try{let e=await Oe.track(n.id,L.window.start,L.observer);if(L.tracked.get(n.id)!==n)return;n.track=e.data,n.name=e.data.name||n.name,n.provenance=e.provenance,n.warnings=e.warnings,n.lookStale=!1,le?.setTrack(n.id,e.data,n.color),le?.select(L.selected),n.framePending&&(n.framePending=!1,n.id===L.selected&&!Xn?.holdsCamera()&&le?.home(n.id))}catch(e){if(ln(e))return;n.error=Wn(e.message),n.retryTimer=setTimeout(()=>{L.tracked.get(n.id)===n&&n.error&&Xo(n)},O7)}finally{n.request===t&&(n.loading=!1),L.tracked.get(n.id)===n&&n.request===t&&(yr(),Yn(),Mr(),$o())}}function Ts(n,t,{selectIt:e=!0,frame:i=!0}={}){let s=yi(n);if(L.tracked.has(s)){e&&Rs(s);return}if(L.tracked.size>=vi){$n(`You can track up to ${vi} satellites. Remove one to add another.`,"is-warning");return}let r={id:s,name:t||`NORAD ${s}`,color:wd([...L.tracked.values()].map(a=>a.color)),track:null,error:null,loading:!0,framePending:i};L.tracked.set(s,r),e&&Rs(s),Xo(r)}function Uf(n){clearTimeout(L.tracked.get(n)?.retryTimer),L.tracked.delete(n),le?.removeTrack(n),L.selected===n?Rs(ah()[0]??null):(oh(),yr(),Yn(),$o())}function Rs(n){let t=L.selected!==n;L.selected=n,le?.select(n),t&&(L.report=null,L.plan=null,L.planFor=null,L.planError=null,L.activePass=null,n&&L.tracked.get(n)?.track&&!Xn?.holdsCamera()&&le?.home(n)),oh(),yr(),Yn(),Mr(),$o(),Sr(),zf(),t&&z7()}function z7(){let n=++Cf;L.tab==="data"&&zo.render(),Cs.hasSees().then(t=>{if(n!==Cf)return;let e=ot("section-sees");e.hidden=!t,t||(e.open=!1),Cs.selectionChanged(sh())})}function Of(){for(let n of L.tracked.values())Xo(n)}function lh(n){L.window=Fc(n),hh(),Of()}function $n(n,t=""){let e=ot("catalog-status");e.textContent=n,e.className=`note ${t}`}async function V7(){try{if(L.groups=await Oe.groups(),!Array.isArray(L.groups))throw new Error("The server returned an unexpected response.")}catch(t){L.groups=[],ln(t)||$n(`Could not load satellite groups: ${Wn(t.message)}`,"is-error");return}Vo.setGroups(L.groups);let n=L.groups.find(t=>t==="Space Stations")??L.groups[0];n&&(Vo.setCurrent(n),await th(n))}async function th(n){if(L.isSearchResult=!1,Kc.has(n)){L.items=Kc.get(n),L.catalogLoading=!1,$n(""),Yn();return}L.items=[],L.catalogLoading=!0,Yn(),$n(`Loading ${n}\u2026 The first time can take a few seconds.`);try{let t=await Oe.satellites(n);L.items=Array.isArray(t)?t:[],Kc.set(n,L.items),$n("")}catch(t){if(ln(t))return;$n(`Could not load ${n}: ${Wn(t.message)}`,"is-error")}L.catalogLoading=!1,Yn()}async function G7(n){L.items=[],L.isSearchResult=!0,L.catalogLoading=!0,Yn(),$n("Searching every group. The first search can take up to a minute.");try{let t=await Oe.search(n);L.items=t.satellites??[];let e=t.groups_covered<t.groups_total;$n(e?`Searched ${t.groups_covered} of ${t.groups_total} groups, so more matches may exist.`:`${t.satellites.length} matches across all groups.`,e?"is-warning":"")}catch(t){if(ln(t))return;$n(`Search failed: ${Wn(t.message)}`,"is-error")}L.catalogLoading=!1,Yn()}function Yn(){let n=ot("filter-input").value,t=L.tracked.size>=vi,e=[L.items.length,L.items[0]?.norad_id,L.isSearchResult,L.catalogLoading,n,ah().join(",")].join("|");if(e===Tf&&Af===L.items)return;Tf=e,Af=L.items;let i=L.isSearchResult?L.items:Ad(L.items,n),s=ot("catalog-list");if(L.catalogLoading&&!L.items.length){s.replaceChildren(...Array.from({length:12},()=>ht("li","catalog-skeleton"))),s.setAttribute("aria-busy","true"),Rf(n);return}s.removeAttribute("aria-busy"),rh(s,()=>{s.replaceChildren(...i.slice(0,Zc).map(r=>{let a=yi(r.norad_id),o=L.tracked.has(a),c=ht("li"),l=ht("button","catalog-row");l.type="button",l.setAttribute("aria-pressed",String(o)),l.disabled=!o&&t,l.dataset.focus=`catalog:${a}`,l.title=o?`Stop tracking ${r.name}`:t?`You can track up to ${vi} satellites`:`Track ${r.name}`;let h=ht("span","catalog-mark",o?"\u2713":"+");return h.setAttribute("aria-hidden","true"),l.append(h,ht("span","catalog-name",r.name),ht("span","catalog-id",r.norad_id)),l.addEventListener("click",()=>o?Uf(a):Ts(a,r.name)),c.append(l),c})),i.length>Zc&&s.append(ht("li","note",`Showing ${Zc} of ${i.length}. Filter to narrow the list.`)),t&&s.prepend(ht("li","note",`You can track up to ${vi} satellites. Remove one to add another.`))},ot("filter-input")),Rf(n)}function Rf(n){let t=ot("catalog-actions");t.replaceChildren();let e=n.trim();if(Tc(e)&&!L.tracked.has(yi(e))){let i=ht("button","text-button",`Track NORAD ${yi(e)}`);i.type="button",i.disabled=L.tracked.size>=vi,i.addEventListener("click",()=>Ts(e)),t.append(i)}if(e&&!L.isSearchResult){let i=ht("button","text-button","Search all groups");i.type="button",i.addEventListener("click",()=>G7(e)),t.append(i)}}function yr(){let n=ot("tracked-list");if(!L.tracked.size){n.replaceChildren(ht("li","note","Nothing yet. Pick a satellite below."));return}rh(n,()=>n.replaceChildren(...[...L.tracked.values()].map(t=>{let e=ht("li",`tracked-row${t.id===L.selected?" is-selected":""}`),i=ht("button","tracked-select");i.type="button",i.setAttribute("aria-current",String(t.id===L.selected)),i.dataset.focus=`tracked:${t.id}`;let s=ht("span","dot");s.style.setProperty("--color",t.color),i.append(s,ht("span","tracked-name",t.loading&&!t.track?`${t.name} \xB7 loading`:t.name)),t.error&&i.append(ht("span","tracked-error",t.error)),i.addEventListener("click",()=>Rs(t.id));let r=ht("button","row-action","\xD7");if(r.type="button",r.setAttribute("aria-label",`Stop tracking ${t.name}`),r.dataset.focus=`remove:${t.id}`,r.title=`Stop tracking ${t.name}`,r.addEventListener("click",()=>Uf(t.id)),e.append(i,r),t.error){let a=ht("button","text-button tracked-retry","Try again");a.type="button",a.dataset.focus=`retry:${t.id}`,a.setAttribute("aria-label",`Try loading ${t.name} again`),a.addEventListener("click",()=>Xo(t)),e.append(a)}return e})),ot("filter-input"))}function Oi(n,t){for(;n.children.length>t.length;)n.lastElementChild.remove();t.forEach(([e,i,s],r)=>{let a=n.children[r];a||(a=ht("div"),a.append(ht("dt"),ht("dd")),n.append(a)),a.children[0].textContent=e,a.children[1].textContent=i,a.children[1].className=s||""})}function ch(){let n=yn(),t=ot("now-note"),e=n?.track?.samples;if(!e?.length){Oi(ot("now-readouts"),[]),t.textContent=n?.error??(n?"Loading\u2026":"Add a satellite to see its position."),t.className=`note${n?.error?" is-error":""}`;return}let i=Date.parse(e.at(-1).time);if(L.time>i+6e4&&n.warnings?.some(h=>h.code==="propagation_stopped")){Oi(ot("now-readouts"),[]),t.textContent=`This orbit cannot be predicted past ${Bi(i)}. The satellite may have decayed.`,t.className="note is-warning";return}let s=Rc(L.time,Date.parse(e[0].time),i),r=Io(e,s),a=[["Latitude",Nc(r.latitude_deg,"N","S")],["Longitude",Nc(r.longitude_deg,"E","W")],["Altitude",`${r.altitude_km.toFixed(1)} km`],["Speed",`${r.speed_km_s.toFixed(3)} km/s`],["Sunlight",Cd(e,s)?"Sunlit":"In Earth\u2019s shadow"]],o=n.lookStale?null:Cc(e,s);o&&(a.push(["Direction",`${Hn(o.azimuth)} (${o.azimuth.toFixed(1)}\xB0)`]),a.push(["Elevation",`${o.elevation.toFixed(1)}\xB0`,o.elevation>0?"is-good":""])),Oi(ot("now-readouts"),a);let c=n.provenance?Ud(n.provenance.element_epoch,s):0,l=[];L.observer||l.push("Set your location to see where to look."),Math.abs(c)>3&&l.push(`These elements are ${Math.abs(c).toFixed(0)} days from the displayed time, so positions may be well off.`);for(let h of n.warnings??[])l.push(h.message);t.textContent=l.join(" "),t.className=`note${Math.abs(c)>3||n.warnings?.length?" is-warning":""}`}function H7(){let n=yn(),t=n?.track?.samples,e=t?.length&&!n.lookStale&&L.time<=Date.parse(t.at(-1).time)?Cc(t,L.time):null;le?.setSightLine(!!(e&&e.elevation>0))}function W7(n){let t=ht("div","pass-summary");t.append(ht("strong","","Where are you?"),ht("span","","Set your location to see when this satellite passes overhead.")),n.append(t);let e=ht("button","text-button","Set location");e.type="button",e.style.marginTop="10px",e.addEventListener("click",br),n.append(e)}var eh="Brightness, weather and obstructions may prevent a sighting.";function Bf(){return(L.plan?.visible??[]).find(t=>Date.parse(t.end.at)>Date.now())??null}function kf(){let{tonight:n}=L.plan,t=Bf(),e=ht("div",`pass-summary${t?" is-visible":""}`);if(e.id="pass-summary",t){let i=Date.parse(t.start.at);e.append(ht("strong","",Date.now()>=i?"Viewing window now":`Viewing window ${Pc(i,Date.now())}`),ht("span","",`${Bi(i)}, up to ${Math.round(t.peak.elevation_deg)}\xB0 in the ${Hn(t.peak.azimuth_deg)}.`),ht("span","pass-caveat",eh))}else n.dark_start?e.append(ht("strong","",`No viewing windows in the next ${Wo} hours`),ht("span","",`The next dark sky starts ${Bi(Date.parse(n.dark_start))}.`)):e.append(ht("strong","","No dark sky soon"),ht("span","","The Sun stays too high for the next 24 hours."));return e}function qn(){let n=ot("passes-content");rh(n,()=>X7(n))}function X7(n){if(n.replaceChildren(),!yn()){n.append(ht("p","note","Add a satellite to see its passes."));return}if(!L.observer){W7(n);return}if(L.planError&&!L.plan){n.append(ht("p","note is-error",L.planError));let a=ht("button","text-button","Try again");a.type="button",a.addEventListener("click",()=>Sr(!0)),n.append(a);return}if(!L.plan){n.append(ht("p","note","Calculating passes\u2026"));return}let{visible:e,passes:i}=L.plan;L.planError&&n.append(ht("p","note is-warning",`Could not update this list: ${L.planError}`));for(let a of L.plan.warnings??[])n.append(ht("p","note is-warning plan-warning",a.message));if(n.append(kf(),ht("h2","eyebrow section-title",`Next ${Wo} hours \xB7 ${Dc(L.utc)} time`)),!i.length){n.append(ht("p","note","No passes above your horizon in this period."));return}let s=Id(i,e),r=L.clouds?.feed?.data??null;for(let a of s.slice(0,40)){let o=!!(L.activePass&&Lo(L.activePass.pass,a)),c=ht("button","pass-row");c.type="button",c.dataset.focus=`pass:${a.maximum_at}`,c.setAttribute("aria-pressed",String(o));let l=Date.parse(a.start),h=Date.parse(a.end),f=r?zd(r,Date.parse(a.maximum_at)):null,u=f===null?"":` \xB7 ${Math.round(f)}% cloud`;c.append(ht("span","pass-time",`${ws(l,L.utc)} ${Ms(l,L.utc).slice(0,5)}`),ht("span","pass-elevation",`${Math.round(a.maximum_elevation_deg)}\xB0`),ht("span","pass-detail",`${Hn(a.start_azimuth_deg)} to ${Hn(a.end_azimuth_deg)} \xB7 ${Ld(h-l)}${u}`)),a.visible&&c.append(ht("span","badge","Window")),c.addEventListener("click",()=>Z7(a)),n.append(c),o&&n.append(Y7())}n.append(ht("p","note",r?"A viewing window means the satellite is sunlit, your sky is dark and it is at least 10\xB0 high. Brightness is not considered, so a faint satellite may not be seen.":"A viewing window means the satellite is sunlit, your sky is dark and it is at least 10\xB0 high. Weather and brightness are not considered, so a faint satellite may not be seen.")),Df&&n.append($7())}function $7(){let{clouds:n}=L,t=ht("div","cloud-check"),e=ht("button","text-button",n?.loading?"Loading\u2026":n?.feed?"Check again":"Check clouds near me");return e.type="button",e.dataset.focus="check-clouds",e.addEventListener("click",q7),t.append(e,ht("p","note","Sends your location, rounded to about 10 km, to Open-Meteo.")),n?.error&&t.append(ko(n.error)),n?.feed&&t.append(...ih(n.feed)),t}async function q7(){let n=L.observer;if(!n||L.clouds?.loading)return;let t={observer:n,loading:!0};L.clouds=t,qn();try{let e=await Oe.cloudCover(n);if(L.clouds!==t)return;L.clouds={observer:n,feed:e}}catch(e){if(L.clouds!==t)return;L.clouds={observer:n,error:e}}qn()}function Y7(){let n=ht("div","sky"),{pass:t,points:e,error:i}=L.activePass;if(i)return n.append(ht("p","note is-error",i)),n;if(!e)return n.append(ht("p","note","Loading sky path\u2026")),n;let s=ht("div");tf(s,e,yn()?.color??"#ebd193",t.visible);let r=ht("div","sky-actions"),a=ht("button","text-button","Show on globe");return a.type="button",a.dataset.focus="show-on-globe",a.addEventListener("click",()=>{J7(Date.parse(t.maximum_at)),document.querySelector(".viewport").scrollIntoView({block:"nearest"})}),r.append(a),n.append(s,r),n}async function Z7(n){if(L.activePass&&Lo(L.activePass.pass,n)){L.activePass=null,qn();return}L.activePass={pass:n,points:null},qn();let t=L.selected;try{let e=await Oe.look(t,L.observer,n.start,n.end);L.activePass?.pass===n&&L.selected===t&&(L.activePass.points=e.data.points,qn())}catch(e){if(ln(e)||L.activePass?.pass!==n)return;L.activePass.error=Wn(e.message),qn()}}async function Sr(n=!1){let t=L.selected;if(!t||!L.observer){Go();return}let e=`${t}|${L.observer.lat}|${L.observer.lon}|${L.observer.alt}`;if(!(!n&&L.planFor===e&&Date.now()-L.planAt<F7)){L.planFor=e,L.planAt=Date.now(),L.planError=null;try{let i=Oe.passes(t,L.observer,Date.now());i.catch(()=>{});let s=await Oe.tonight(t,L.observer,Date.now()),r=[...s.data.passes],a=[s],o=s.data,c=Date.now()+Wo*36e5;for(;o.dark_end&&!o.dark_end_clipped&&Date.parse(o.dark_end)<c;){let h=await Oe.tonight(t,L.observer,o.dark_end);if(L.planFor!==e)return;r.push(...h.data.passes),a.push(h),o=h.data}let l=await i;if(L.planFor!==e)return;L.plan={tonight:s.data,visible:r,passes:l.data.passes,warnings:Pd([l,...a])},L.activePass&&!L.plan.passes.some(h=>Lo(L.activePass.pass,h))&&(L.activePass=null)}catch(i){if(ln(i)||L.planFor!==e)return;L.planError=Wn(i.message)}qn(),Go()}}async function zf(){let n=L.selected;if(!n){nh();return}try{let t=await Oe.report(n);if(L.selected!==n)return;L.report=t}catch(t){if(ln(t)||L.selected!==n)return;L.report={error:Wn(t.message)}}nh()}function K7(n){let t=ot("orbit-why"),e=Wd(n);t.hidden=!e,e&&(ot("orbit-why-chips").replaceChildren(...e.chips.map(i=>ht("li","why-chip",i))),ot("orbit-why-list").replaceChildren(...e.items.map(i=>{let s=ht("li","",i.text);if(i.estimate){let r=ht("span","why-estimate","estimate");r.setAttribute("aria-describedby","orbit-why-legend"),s.append(" ",r)}return Fi(ht,s,i.sources),s})))}function nh(){let n=ot("orbit-readouts"),t=ot("orbit-note"),e=ot("orbit-links");if(e.replaceChildren(),t.textContent="",t.className="note",K7(L.report?.data?.orbit?.explanation),!L.selected){Oi(n,[]),t.textContent="Add a satellite to see its orbit.";return}if(L.report?.error){Oi(n,[]),t.textContent=L.report.error,t.className="note is-error";return}if(!L.report){Oi(n,[]),t.textContent="Loading\u2026";return}let{data:i,provenance:s}=L.report,r=i.orbit;Oi(n,[["Class (estimate)",r.orbit_class_estimate],["Period",`${r.period_minutes.toFixed(1)} min`],["Inclination",`${r.inclination_deg.toFixed(2)}\xB0`],["Apogee",`${r.apogee_km.toFixed(0)} km`],["Perigee",`${r.perigee_km.toFixed(0)} km`],["Eccentricity",r.eccentricity.toFixed(5)],["Element epoch",Bi(Date.parse(s.element_epoch))],["Data source",`${s.source} (${s.cache_status})`]]),t.textContent="Apogee and perigee are two-body estimates.";let a=ht("a","","Download JSON report");if(a.href=`/api/v1/report?norad_id=${encodeURIComponent(L.selected)}`,a.download=`khonsu-${L.selected}.json`,e.append(a),i.map_url){let o=ht("a","","Current position on a map");o.href=i.map_url,o.target="_blank",o.rel="noopener noreferrer",e.append(o)}}function Mr(){let n=yn();ot("selected-name").textContent=n?.name??"No satellite",ot("selected-id").textContent=n?`NORAD ${n.id}`:"",ot("selected-swatch").style.setProperty("--color",n?.color??"transparent"),document.title=n?`${n.name} \xB7 Khonsu`:"Khonsu",ch(),qn(),nh(),Go()}function Go(){let n=ot("headline");n.replaceChildren();let t=yn();if(!t)return;if(t.loading&&!t.track){n.append(ht("p","headline-title",t.name),ht("p","headline-main","Fetching its orbit\u2026"),ht("p","headline-sub","The first request can take a few seconds. After that it is saved."));return}if(!L.observer){n.append(ht("p","headline-title","See it yourself"),ht("p","headline-main","When can you see it?"));let i=ht("button","text-button","Set your location");i.type="button",i.dataset.focus="headline-location",i.addEventListener("click",br),n.append(i);return}if(!L.plan)return;let e=Bf();if(e){let i=Date.parse(e.start.at),s=Date.now()>=i;n.append(ht("p","headline-title",`${s?"Viewing window now":"Next viewing window"} \xB7 ${t.name}`),ht("p","headline-main",`${Bi(i).slice(0,-3)}${s?"":` \xB7 ${Pc(i,Date.now())}`}`),ht("p","headline-sub",`Up to ${Math.round(e.peak.elevation_deg)}\xB0 in the ${Hn(e.peak.azimuth_deg)}, starting in the ${Hn(e.start.azimuth_deg)}.`),ht("p","headline-sub",L.plan.warnings?.length?`${eh} ${L.plan.warnings[0].message}`:eh));return}n.append(ht("p","headline-title",t.name),ht("p","headline-main",L.plan.tonight.dark_start?`No viewing windows in the next ${Wo} hours`:"No dark sky soon"))}function $o(){let n=ot("data-status"),t=yn();if(n.classList.remove("is-warning"),!t?.provenance){n.textContent="";return}let{provenance:e}=t;if(e.cache_status==="stale"){n.textContent=t.warnings?.[0]?.message??"Showing saved elements.",n.classList.add("is-warning");return}n.textContent=e.source==="file"?"Using elements from a local file. No provider requests are made.":`Satellite data from CelesTrak, epoch ${Bi(Date.parse(e.element_epoch))}.`}function Vf(){ot("observer-open").classList.toggle("is-set",!!L.observer),ot("observer-label").textContent=L.observer?`${Ic(L.observer.lat,"N","S")}, ${Ic(L.observer.lon,"E","W")}`:"Set location"}function hh(){let n=ot("time-slider");n.max=String(Math.round((L.window.end-L.window.start)/1e3)),ot("time-start").textContent=`${ws(L.window.start,L.utc)} ${Ms(L.window.start,L.utc).slice(0,5)}`,ot("time-end").textContent=`${ws(L.window.end,L.utc)} ${Ms(L.window.end,L.utc).slice(0,5)}`}function Oo(n){L.live=n;let t=ot("live-button");t.classList.toggle("is-live",n),t.setAttribute("aria-pressed",String(n)),n&&(As(!1),Uc(L.window,Date.now())&&lh(Date.now()))}function As(n){L.playing=n;let t=ot("play-button");t.textContent=n?"\u275A\u275A":"\u25B6";let e=n?"Pause timeline":"Play timeline";t.setAttribute("aria-label",e),t.title=e}function J7(n){if(Oo(!1),As(!1),L.time=n,n<L.window.start||n>L.window.end){let t=yn();t&&(t.framePending=!0),lh(n)}else le?.update(L.time),le?.home();vr()}function vr(){let n=ot("time-slider"),t=Math.round((L.time-L.window.start)/1e3);(document.activeElement!==n||L.live||L.playing)&&(n.value=String(t));let e=`${Bi(L.time)} ${L.utc?"UTC":""}`.trim();n.setAttribute("aria-valuetext",e),ot("time-current").textContent=e}function j7(){let n=ot("sat-label"),t=le?.selectedScreenPosition(),e=yn();if(!t||!e?.track){n.hidden=!0;return}n.hidden=!1,n.textContent=e.name,n.style.left=`${t.x}px`,n.style.top=`${t.y}px`}function Q7(){if(jc.tick(),!L.plan)return;ot("headline").contains(document.activeElement)||Go(),ot("pass-summary")?.replaceWith(kf())}function Gf(n,t){let e=t?Math.min(n-t,1e3):0;L.live?(L.time=Date.now(),Uc(L.window,L.time)&&lh(L.time)):L.playing&&(L.time+=e*Number(ot("speed-select").value),L.time>=L.window.end&&(L.time=L.window.end,As(!1)));try{le&&(le.update(L.time),H7(),le.render(e/1e3),j7()),n-Sf>250&&(Sf=n,vr(),L.tab==="now"&&ch()),n-Mf>B7&&(Mf=n,Q7())}catch(i){wf||console.error(i),wf=!0}requestAnimationFrame(i=>Gf(i,n))}function Pf(n){L.observer=n,n?Si.setItem("khonsu.observer",JSON.stringify(n)):Si.removeItem("khonsu.observer"),le?.setObserver(n);for(let t of L.tracked.values())t.lookStale=!0;L.plan=null,L.planFor=null,L.planError=null,L.activePass=null,L.clouds=null,Vf(),Of(),Mr(),Sr(!0)}function br(){Ho(!1),ot("observer-lat").value=L.observer?.lat??"",ot("observer-lon").value=L.observer?.lon??"",ot("observer-alt").value=L.observer?.alt||"",ot("observer-error").textContent="",ot("observer-dialog").showModal()}function Ho(n){ot("pick-hint").hidden=!n,le?.setPicking(n)}var Bo=0;function ih(n){let t=[n.source.credit,n.source.nature,`updated ${Lc(n.fetched_at,Date.now())}`];n.stale&&t.push("saved copy");let e=ht("p","data-credit",t.join(" \xB7 "));return n.warning?[e,ht("p","note is-warning",n.warning)]:[e]}function ko(n){return ht("p","note is-warning",Wn(n.message||"")||"This source could not be reached.")}function If(n){let t=Date.parse(n);return`${ws(t,L.utc)} ${Ms(t,L.utc).slice(0,5)} ${Dc(L.utc)}`}function t8(n){ot("data-categories").replaceChildren(...n.map(t=>{let e=ht("section","data-category");e.append(ht("h3",null,t.title),ht("p","note",t.description)),t.id==="earth-imagery"&&e.append(ht("p","note","Choose pictures with the Layers button on the globe."));for(let i of t.sources){let s=ht("div","data-source"),r=ht("a",null,i.name);r.href=i.url,r.target="_blank",r.rel="noreferrer";let a=i.status==="live";s.append(r,ht("span",`data-status${a?" is-live":""}`,a?"Live":"Needs account"),ht("p","note",`${i.summary} ${i.refresh}.`)),e.append(s)}return e}))}async function e8(){try{return await Es}catch{return Es=Oe.sources(),Es}}async function n8(){let n=++Bo,t=ot("data-status-note");t.textContent="",t.classList.remove("is-warning"),ot("data-dialog").showModal();let e;try{e=await e8()}catch(i){n===Bo&&i.name!=="AbortError"&&(t.textContent=i.message,t.classList.add("is-warning"));return}n===Bo&&(t8(e.categories),e.live_data||(t.textContent="Live data is off while serving a local file, so no provider requests are made."))}function i8(){let n=ot("layers-open"),t=ot("layers-panel"),e=i=>{t.hidden=!i,n.setAttribute("aria-expanded",String(i))};n.addEventListener("click",()=>e(t.hidden)),t.addEventListener("keydown",i=>{i.key==="Escape"&&(i.preventDefault(),e(!1),n.focus())})}function s8(n){Ts(n,void 0,{frame:!1})}function r8(n,t,e=null){le&&(le.face(n,t,e),uh(!1))}function Hf(n){ot("learn-panel").hidden=!n,document.querySelector(".catalog").hidden=n,ot("learn-open").setAttribute("aria-pressed",String(n)),n&&Nf.render()}function a8(){ot("learn-open").addEventListener("click",()=>Hf(ot("learn-panel").hidden))}function o8(){let n=ot("data-dialog");ot("data-open").addEventListener("click",n8),ot("data-close").addEventListener("click",()=>n.close()),n.addEventListener("close",()=>{Bo+=1,ot("data-open").focus()})}function l8(){let n=ot("observer-dialog");ot("observer-open").addEventListener("click",br),ot("observer-cancel").addEventListener("click",()=>n.close()),n.addEventListener("close",()=>{(!document.activeElement||document.activeElement===document.body)&&ot("observer-open").focus()}),ot("observer-clear").addEventListener("click",()=>{Pf(null),n.close()}),ot("observer-form").addEventListener("submit",e=>{e.preventDefault();let i=Ac({lat:ot("observer-lat").value,lon:ot("observer-lon").value,alt:ot("observer-alt").value});if(i.error){ot("observer-error").textContent=i.error;return}Pf(i.observer),n.close()}),ot("observer-locate").addEventListener("click",()=>{let e=ot("observer-error");if(!navigator.geolocation){e.textContent="This browser cannot share a location. Enter it instead.";return}e.textContent="",navigator.geolocation.getCurrentPosition(({coords:i})=>{ot("observer-lat").value=i.latitude.toFixed(4),ot("observer-lon").value=i.longitude.toFixed(4)},()=>{e.textContent="The browser did not share a location. Enter it instead."},{timeout:1e4})});let t=ot("observer-pick");t.addEventListener("click",()=>{n.close(),Ho(!0)}),le||(t.disabled=!0),document.addEventListener("keydown",e=>{e.key==="Escape"&&!ot("pick-hint").hidden&&(e.preventDefault(),Ho(!1),setTimeout(br))})}function Jc(n,t=!1){L.tab=n;for(let e of Qc){let i=ot(`tab-${e}`),s=e===n;i.setAttribute("aria-selected",String(s)),i.tabIndex=s?0:-1,ot(`panel-${e}`).hidden=!s,s&&t&&i.focus()}n==="passes"&&Sr(),n==="orbit"&&zf(),n==="data"&&zo.render();for(let e of sh())Cs.open(e)}function c8(){for(let n of Qc){let t=ot(`tab-${n}`);t.addEventListener("click",()=>Jc(n)),t.addEventListener("keydown",e=>{let i=Qc.filter(r=>!ot(`tab-${r}`).hidden),s=i.indexOf(n);e.key==="ArrowRight"&&Jc(i[(s+1)%i.length],!0),e.key==="ArrowLeft"&&Jc(i[(s+i.length-1)%i.length],!0)})}}function h8(){ot("live-button").addEventListener("click",()=>Oo(!0)),ot("play-button").addEventListener("click",()=>{if(L.playing){As(!1);return}L.live&&Oo(!1),L.time>=L.window.end&&(L.time=L.window.start),As(!0)}),ot("time-slider").addEventListener("input",i=>{Oo(!1),As(!1),L.time=L.window.start+Number(i.target.value)*1e3,vr(),ch()});let n=ot("zone-toggle"),t=()=>{n.textContent=L.utc?"UTC":"Local time",n.setAttribute("aria-pressed",String(L.utc))};t(),n.addEventListener("click",()=>{L.utc=!L.utc,Si.setItem("khonsu.utc",L.utc?"1":"0"),t(),hh(),vr(),Mr(),$o(),sh().includes("sees")&&Cs.open("sees")}),Vo=of({element:ht,button:ot("group-button"),popover:ot("group-popover"),input:ot("group-search"),list:ot("group-options"),onChoose(i){ot("filter-input").value="",th(i)}}),ot("filter-input").addEventListener("input",()=>{if(L.isSearchResult){th(Vo.current());return}Yn()}),ot("camera-home").addEventListener("click",()=>le?.home()),ot("zoom-in").addEventListener("click",()=>le?.zoom(.8)),ot("zoom-out").addEventListener("click",()=>le?.zoom(1.25));let e=ot("camera-follow");e.addEventListener("click",()=>uh(e.getAttribute("aria-pressed")!=="true"))}function uh(n){ot("camera-follow").setAttribute("aria-pressed",String(n)),le?.setFollowing(n)}function u8(n){le&&(le.showPoint(n.lat,n.lon),uh(!1))}function d8(){le?.clearPoint()}function Lf(n){let t=ot("scene-error");t.hidden=!1,t.textContent=n}function f8(n){let t=n.categories.flatMap(e=>e.sources);return{liveData:n.live_data,spaceTrackReady:t.some(e=>e.id==="space-track"&&e.status==="live"),imagingIds:new Set(n.imaging_satellites??[])}}async function p8(){Es=Oe.sources(),No=Es.then(f8).catch(()=>null),Ef=Es.then(s=>({liveData:s.live_data,layers:s.imagery_layers})).catch(()=>null),No.then(s=>{Df=s?.liveData!==!1,qn()}),Cs=nf({api:Oe,element:ht,feedCredit:ih,dataFailure:ko,dataTime:If,selectedEntry:yn,catalog:No,panels:{identity:ot("panel-identity"),radio:ot("panel-radio"),sees:ot("panel-sees")},focusScene:u8,clearScene:d8});for(let s of Object.keys(Ff))ot(`section-${s}`).addEventListener("toggle",r=>{r.target.open&&Cs.open(s)});let n=af({root:document.querySelector(".app"),handles:{catalog:ot("resize-catalog"),inspector:ot("resize-inspector")},storage:Si});window.addEventListener("resize",()=>n.fit()),Xn=_f({api:Oe,element:ht,card:ot("lesson-card"),list:ht("div"),layers:()=>Uo,showSatellite:s8,face:r8,onChange(){ot("headline").hidden=!!Xn.current(),oh()}}),Nf=yf({api:Oe,element:ht,panel:ot("learn-panel"),layers:()=>Uo,showSatellite:s=>Ts(s),startLesson:s=>Xn.start(s),startStory:s=>Xn.start(s),onClose:()=>{Hf(!1),ot("learn-open").focus()}}),zo=sf({api:Oe,element:ht,panel:ot("data-measures"),selectedEntry:yn,dataFailure:ko,layers:()=>Uo,startLesson:s=>Xn.start(s)});try{le=Yd(ot("scene"),{onPick(s){Ho(!1),br(),ot("observer-lat").value=s.lat.toFixed(4),ot("observer-lon").value=s.lon.toFixed(4)},onSelect:s=>Rs(s)}),le.setObserver(L.observer),le.onContextChange(()=>Lf("The graphics context was lost. The globe will return if the browser restores it. Reload if it does not. The readouts still work."),()=>{ot("scene-error").hidden=!0})}catch(s){le=null,console.error(s),Lf("3D rendering is unavailable, so the globe is hidden. Enable WebGL in your browser and reload. Satellite details and passes still work.");for(let r of["camera-follow","camera-home","zoom-in","zoom-out"])ot(r).disabled=!0}let t=Qd({element:ht,panel:ot("layers-panel"),credit:ot("imagery-credit"),catalog:Ef,storage:Si,globe:le,dataAge:Lc});Uo=t,t.start().then(()=>{L.tab==="data"&&zo.render(),Fo&&Xn.start(Fo.id,Fo.step)}),jc=bf({api:Oe,element:ht,feedCredit:ih,dataFailure:ko,dataTime:If,catalog:No,chips:ot("sky-chips"),popover:ot("sky-popover"),onKp:s=>t.setKp(s)}),jc.start(),c8(),h8(),l8(),o8(),a8(),i8(),Vf(),hh(),yr(),Mr(),vr(),requestAnimationFrame(s=>Gf(s,0)),setInterval(()=>Sr(),6e4);let e=Sd(location.search),i=V7();if(e.ids.length){await Promise.race([i,new Promise(s=>setTimeout(s,k7))]);for(let s of e.ids)Ts(s,void 0,{selectIt:!1});Rs(e.selected)}if(await i,!e.ids.length&&!L.tracked.size&&!Fo){let s=L.items.find(r=>yi(r.norad_id)===U7)??L.items[0];s&&Ts(s.norad_id,s.name)}}p8();})();
