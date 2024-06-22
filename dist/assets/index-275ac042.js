(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="148",Fr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pp=0,cu=1,mp=2,od=1,gp=2,Gs=3,yr=0,Gn=1,Ac=2,Ca=3,Gi=0,os=1,So=2,uu=3,hu=4,_p=5,es=100,xp=101,vp=102,du=103,fu=104,yp=200,bp=201,Mp=202,Sp=203,ld=204,cd=205,wp=206,Tp=207,Ep=208,Ap=209,Cp=210,Pp=0,Lp=1,Dp=2,Wl=3,Rp=4,Ip=5,Op=6,Fp=7,ud=0,zp=1,Np=2,Mi=0,kp=1,Up=2,Bp=3,Gp=4,Vp=5,hd=300,ms=301,gs=302,Xl=303,ql=304,ko=306,Yl=1e3,jn=1001,$l=1002,en=1003,pu=1004,Yo=1005,Fn=1006,Hp=1007,ca=1008,br=1009,Wp=1010,Xp=1011,dd=1012,qp=1013,ar=1014,or=1015,ua=1016,Yp=1017,$p=1018,ls=1020,jp=1021,Zp=1022,Zn=1023,Kp=1024,Jp=1025,ur=1026,_s=1027,Qp=1028,em=1029,tm=1030,nm=1031,im=1033,$o=33776,jo=33777,Zo=33778,Ko=33779,mu=35840,gu=35841,_u=35842,xu=35843,rm=36196,vu=37492,yu=37496,bu=37808,Mu=37809,Su=37810,wu=37811,Tu=37812,Eu=37813,Au=37814,Cu=37815,Pu=37816,Lu=37817,Du=37818,Ru=37819,Iu=37820,Ou=37821,Fu=36492,Mr=3e3,ht=3001,sm=3200,am=3201,om=0,lm=1,Jn="srgb",ha="srgb-linear",Jo=7680,cm=519,zu=35044,Nu="300 es",jl=1035;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qo=Math.PI/180,ku=180/Math.PI;function Sa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[o&255]+Gt[o>>8&255]+Gt[o>>16&255]+Gt[o>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function on(o,e,t){return Math.max(e,Math.min(t,o))}function um(o,e){return(o%e+e)%e}function el(o,e,t){return(1-t)*o+t*e}function Uu(o){return(o&o-1)===0&&o!==0}function Zl(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Pa(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(){Cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],f=i[0],m=i[3],_=i[6],b=i[1],y=i[4],M=i[7],v=i[2],A=i[5],E=i[8];return r[0]=a*f+s*b+l*v,r[3]=a*m+s*y+l*A,r[6]=a*_+s*M+l*E,r[1]=c*f+u*b+h*v,r[4]=c*m+u*y+h*A,r[7]=c*_+u*M+h*E,r[2]=d*f+p*b+g*v,r[5]=d*m+p*y+g*A,r[8]=d*_+p*M+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*a-s*c,d=s*l-u*r,p=c*r-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=h*f,e[1]=(i*c-u*n)*f,e[2]=(s*n-i*a)*f,e[3]=d*f,e[4]=(u*t-i*l)*f,e[5]=(i*r-s*t)*f,e[6]=p*f,e[7]=(n*l-c*t)*f,e[8]=(a*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new Cn;function fd(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function da(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const nl={[Jn]:{[ha]:hr},[ha]:{[Jn]:uo}},Yt={legacyMode:!0,get workingColorSpace(){return ha},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(nl[e]&&nl[e][t]!==void 0){const n=nl[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={r:0,g:0,b:0},Wn={h:0,s:0,l:0},La={h:0,s:0,l:0};function il(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Da(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Yt.workingColorSpace){if(e=um(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=il(a,r,e+1/3),this.g=il(a,r,e),this.b=il(a,r,e-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Jn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Yt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Yt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Yt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Jn){const n=pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Yt.fromWorkingColorSpace(Da(this,Et),e),on(Et.r*255,0,255)<<16^on(Et.g*255,0,255)<<8^on(Et.b*255,0,255)<<0}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Da(this,Et),t);const n=Et.r,i=Et.g,r=Et.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Da(this,Et),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Jn){return Yt.fromWorkingColorSpace(Da(this,Et),e),e!==Jn?`color(${e} ${Et.r} ${Et.g} ${Et.b})`:`rgb(${Et.r*255|0},${Et.g*255|0},${Et.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Wn),Wn.h+=e,Wn.s+=t,Wn.l+=n,this.setHSL(Wn.h,Wn.s,Wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(La);const n=el(Wn.h,La.h,t),i=el(Wn.s,La.s,t),r=el(Wn.l,La.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}at.NAMES=pd;let Nr;class md{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nr===void 0&&(Nr=da("canvas")),Nr.width=e.width,Nr.height=e.height;const n=Nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hr(t[n]/255)*255):t[n]=hr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class gd{constructor(e=null){this.isSource=!0,this.uuid=Sa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(rl(i[a].image)):r.push(rl(i[a]))}else r=rl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function rl(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?md.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hm=0;class ln extends Ir{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=jn,i=jn,r=Fn,a=ca,s=Zn,l=br,c=ln.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Sa(),this.name="",this.source=new gd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yl:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yl:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=hd;ln.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,i=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],f=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(p+1)/2,v=(_+1)/2,A=(u+d)/4,E=(h+f)/4,x=(g+m)/4;return y>M&&y>v?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=E/n):M>v?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=E/r,i=x/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-f)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sr extends Ir{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _d extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dm extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],f=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=f;return}if(h!==f||l!==d||c!==p||u!==g){let m=1-s;const _=l*d+c*p+u*g+h*f,b=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const v=Math.sqrt(y),A=Math.atan2(v,_*b);m=Math.sin(m*A)/v,s=Math.sin(s*A)/v}const M=s*b;if(l=l*m+d*M,c=c*m+p*M,u=u*m+g*M,h=h*m+f*M,m===1-s){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=s*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-s*p,e[t+2]=c*g+u*p+s*d-l*h,e[t+3]=u*g-s*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+s+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>s&&n>h){const p=2*Math.sqrt(1+n-s-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(s>h){const p=2*Math.sqrt(1+s-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-s);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,h=l*i+r*n-a*t,d=-r*t-a*n-s*i;return this.x=c*l+d*-r+u*-s-h*-a,this.y=u*l+d*-a+h*-r-c*-s,this.z=h*l+d*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new W,Bu=new wr;class wa{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)ji.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ji)}else n.boundingBox===null&&n.computeBoundingBox(),al.copy(n.boundingBox),al.applyMatrix4(e.matrixWorld),this.union(al);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Ra.subVectors(this.max,Ls),kr.subVectors(e.a,Ls),Ur.subVectors(e.b,Ls),Br.subVectors(e.c,Ls),Pi.subVectors(Ur,kr),Li.subVectors(Br,Ur),Zi.subVectors(kr,Br);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Zi.z,Zi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Zi.z,0,-Zi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Zi.y,Zi.x,0];return!ol(t,kr,Ur,Br,Ra)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,kr,Ur,Br,Ra))?!1:(Ia.crossVectors(Pi,Li),t=[Ia.x,Ia.y,Ia.z],ol(t,kr,Ur,Br,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new W,new W,new W,new W,new W,new W,new W,new W],ji=new W,al=new wa,kr=new W,Ur=new W,Br=new W,Pi=new W,Li=new W,Zi=new W,Ls=new W,Ra=new W,Ia=new W,Ki=new W;function ol(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Ki.fromArray(o,r);const s=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const fm=new wa,Ds=new W,ll=new W;class Uo{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(ll)),this.expandByPoint(Ds.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new W,cl=new W,Oa=new W,Di=new W,ul=new W,Fa=new W,hl=new W;class xd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.direction).multiplyScalar(t).add(this.origin),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cl.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(cl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),s=Di.dot(this.direction),l=-Di.dot(Oa),c=Di.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-s,d=a*s-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const f=1/u;h*=f,d*=f,p=h*(h+a*d+2*s)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+s)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+s)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+s)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+s)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+s)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Oa).multiplyScalar(d).add(cl),p}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,r){ul.subVectors(t,e),Fa.subVectors(n,e),hl.crossVectors(ul,Fa);let a=this.direction.dot(hl),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Di.subVectors(this.origin,e);const l=s*this.direction.dot(Fa.crossVectors(Di,Fa));if(l<0)return null;const c=s*this.direction.dot(ul.cross(Di));if(c<0||l+c>a)return null;const u=-s*Di.dot(hl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,h,d,p,g,f,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=p,_[7]=g,_[11]=f,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gr.setFromMatrixColumn(e,0).length(),r=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=s*u,f=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-f*c,t[9]=-s*l,t[2]=f-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,f=c*h;t[0]=d+f*s,t[4]=g*s-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=p*s-g,t[6]=f+d*s,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,f=c*h;t[0]=d-f*s,t[4]=-a*h,t[8]=g+p*s,t[1]=p+g*s,t[5]=a*u,t[9]=f-d*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=s*u,f=s*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+f,t[1]=l*h,t[5]=f*c+d,t[9]=p*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=s*l,f=s*c;t[0]=l*u,t[4]=f-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-f*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=s*l,f=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+f,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=s*u,t[10]=f*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,mm)}lookAt(e,t,n){const i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ri.crossVectors(n,yn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ri.crossVectors(n,yn)),Ri.normalize(),za.crossVectors(yn,Ri),i[0]=Ri.x,i[4]=za.x,i[8]=yn.x,i[1]=Ri.y,i[5]=za.y,i[9]=yn.y,i[2]=Ri.z,i[6]=za.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],f=n[6],m=n[10],_=n[14],b=n[3],y=n[7],M=n[11],v=n[15],A=i[0],E=i[4],x=i[8],w=i[12],D=i[1],U=i[5],k=i[9],O=i[13],I=i[2],G=i[6],J=i[10],Y=i[14],V=i[3],Q=i[7],C=i[11],B=i[15];return r[0]=a*A+s*D+l*I+c*V,r[4]=a*E+s*U+l*G+c*Q,r[8]=a*x+s*k+l*J+c*C,r[12]=a*w+s*O+l*Y+c*B,r[1]=u*A+h*D+d*I+p*V,r[5]=u*E+h*U+d*G+p*Q,r[9]=u*x+h*k+d*J+p*C,r[13]=u*w+h*O+d*Y+p*B,r[2]=g*A+f*D+m*I+_*V,r[6]=g*E+f*U+m*G+_*Q,r[10]=g*x+f*k+m*J+_*C,r[14]=g*w+f*O+m*Y+_*B,r[3]=b*A+y*D+M*I+v*V,r[7]=b*E+y*U+M*G+v*Q,r[11]=b*x+y*k+M*J+v*C,r[15]=b*w+y*O+M*Y+v*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],f=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*s*d+n*c*d+i*s*p-n*l*p)+f*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*u-r*l*u)+m*(+t*c*h-t*s*p-r*a*h+n*a*p+r*s*u-n*c*u)+_*(-i*s*u-t*l*h+t*s*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],f=e[13],m=e[14],_=e[15],b=h*m*c-f*d*c+f*l*p-s*m*p-h*l*_+s*d*_,y=g*d*c-u*m*c-g*l*p+a*m*p+u*l*_-a*d*_,M=u*f*c-g*h*c+g*s*p-a*f*p-u*s*_+a*h*_,v=g*h*l-u*f*l-g*s*d+a*f*d+u*s*m-a*h*m,A=t*b+n*y+i*M+r*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=b*E,e[1]=(f*d*r-h*m*r-f*i*p+n*m*p+h*i*_-n*d*_)*E,e[2]=(s*m*r-f*l*r+f*i*c-n*m*c-s*i*_+n*l*_)*E,e[3]=(h*l*r-s*d*r-h*i*c+n*d*c+s*i*p-n*l*p)*E,e[4]=y*E,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*_+t*d*_)*E,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*_-t*l*_)*E,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*p+t*l*p)*E,e[8]=M*E,e[9]=(g*h*r-u*f*r-g*n*p+t*f*p+u*n*_-t*h*_)*E,e[10]=(a*f*r-g*s*r+g*n*c-t*f*c-a*n*_+t*s*_)*E,e[11]=(u*s*r-a*h*r-u*n*c+t*h*c+a*n*p-t*s*p)*E,e[12]=v*E,e[13]=(u*f*i-g*h*i+g*n*d-t*f*d-u*n*m+t*h*m)*E,e[14]=(g*s*i-a*f*i-g*n*l+t*f*l+a*n*m-t*s*m)*E,e[15]=(a*h*i-u*s*i+u*n*l-t*h*l-a*n*d+t*s*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,h=s+s,d=r*c,p=r*u,g=r*h,f=a*u,m=a*h,_=s*h,b=l*c,y=l*u,M=l*h,v=n.x,A=n.y,E=n.z;return i[0]=(1-(f+_))*v,i[1]=(p+M)*v,i[2]=(g-y)*v,i[3]=0,i[4]=(p-M)*A,i[5]=(1-(d+_))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+y)*E,i[9]=(m-b)*E,i[10]=(1-(d+f))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Gr.set(i[0],i[1],i[2]).length();const a=Gr.set(i[4],i[5],i[6]).length(),s=Gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Xn.copy(this);const c=1/r,u=1/a,h=1/s;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+r)/(a-r),p=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,d=(n+i)*c,p=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gr=new W,Xn=new Ft,pm=new W(0,0,0),mm=new W(1,1,1),Ri=new W,za=new W,yn=new W,Gu=new Ft,Vu=new wr;class Ta{constructor(e=0,t=0,n=0,i=Ta.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(on(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ta.DefaultOrder="XYZ";Ta.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gm=0;const Hu=new W,Vr=new wr,pi=new Ft,Na=new W,Rs=new W,_m=new W,xm=new wr,Wu=new W(1,0,0),Xu=new W(0,1,0),qu=new W(0,0,1),vm={type:"added"},Yu={type:"removed"};class cn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DefaultUp.clone();const e=new W,t=new Ta,n=new wr,i=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Cn}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=cn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=cn.DefaultMatrixWorldAutoUpdate,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Na.copy(e):Na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Rs,Na,this.up):pi.lookAt(Na,Rs,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(pi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,_m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}cn.DefaultUp=new W(0,1,0);cn.DefaultMatrixAutoUpdate=!0;cn.DefaultMatrixWorldAutoUpdate=!0;const qn=new W,mi=new W,dl=new W,gi=new W,Hr=new W,Wr=new W,$u=new W,fl=new W,pl=new W,ml=new W;class vi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qn.subVectors(i,t),mi.subVectors(n,t),dl.subVectors(e,t);const a=qn.dot(qn),s=qn.dot(mi),l=qn.dot(dl),c=mi.dot(mi),u=mi.dot(dl),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-s*u)*d,g=(a*u-s*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,gi),l.set(0,0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(s,gi.z),l}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),mi.subVectors(e,t),qn.cross(mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),qn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return vi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Hr.subVectors(i,n),Wr.subVectors(r,n),fl.subVectors(e,n);const l=Hr.dot(fl),c=Wr.dot(fl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,i);const u=Hr.dot(pl),h=Wr.dot(pl);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Hr,a);ml.subVectors(e,r);const p=Hr.dot(ml),g=Wr.dot(ml);if(g>=0&&p<=g)return t.copy(r);const f=p*c-l*g;if(f<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Wr,s);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return $u.subVectors(r,i),s=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector($u,s);const _=1/(m+f+d);return a=f*_,s=d*_,t.copy(n).addScaledVector(Hr,a).addScaledVector(Wr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ym=0;class Ea extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=os,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yd extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new W,ka=new Ze;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bd extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Md extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dr extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bm=0;const In=new Ft,gl=new cn,Xr=new W,bn=new wa,Is=new wa,Dt=new W;class Ai extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fd(e)?Md:bd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Cn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];Is.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(bn.min,Is.min),bn.expandByPoint(Dt),Dt.addVectors(bn.max,Is.max),bn.expandByPoint(Dt)):(bn.expandByPoint(Is.min),bn.expandByPoint(Is.max))}bn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Dt.fromBufferAttribute(s,c),l&&(Xr.fromBufferAttribute(e,c),Dt.add(Xr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<s;D++)c[D]=new W,u[D]=new W;const h=new W,d=new W,p=new W,g=new Ze,f=new Ze,m=new Ze,_=new W,b=new W;function y(D,U,k){h.fromArray(i,D*3),d.fromArray(i,U*3),p.fromArray(i,k*3),g.fromArray(a,D*2),f.fromArray(a,U*2),m.fromArray(a,k*2),d.sub(h),p.sub(h),f.sub(g),m.sub(g);const O=1/(f.x*m.y-m.x*f.y);isFinite(O)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(p,-f.y).multiplyScalar(O),b.copy(p).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(O),c[D].add(_),c[U].add(_),c[k].add(_),u[D].add(b),u[U].add(b),u[k].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,U=M.length;D<U;++D){const k=M[D],O=k.start,I=k.count;for(let G=O,J=O+I;G<J;G+=3)y(n[G+0],n[G+1],n[G+2])}const v=new W,A=new W,E=new W,x=new W;function w(D){E.fromArray(r,D*3),x.copy(E);const U=c[D];v.copy(U),v.sub(E.multiplyScalar(E.dot(U))).normalize(),A.crossVectors(x,U);const O=A.dot(u[D])<0?-1:1;l[D*4]=v.x,l[D*4+1]=v.y,l[D*4+2]=v.z,l[D*4+3]=O}for(let D=0,U=M.length;D<U;++D){const k=M[D],O=k.start,I=k.count;for(let G=O,J=O+I;G<J;G+=3)w(n[G+0]),w(n[G+1]),w(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new W,r=new W,a=new W,s=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),f=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,m),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let f=0,m=l.length;f<m;f++){s.isInterleavedBufferAttribute?p=l[f]*s.data.stride+s.offset:p=l[f]*u;for(let _=0;_<u;_++)d[g++]=c[p++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ju=new Ft,qr=new xd,_l=new Uo,Os=new W,Fs=new W,zs=new W,xl=new W,Ua=new W,Ba=new Ze,Ga=new Ze,Va=new Ze,vl=new W,Ha=new W;class Fi extends cn{constructor(e=new Ai,t=new yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],h=r[l];u!==0&&(xl.fromBufferAttribute(h,e),a?Ua.addScaledVector(xl,u):Ua.addScaledVector(xl.sub(t),u))}t.add(Ua)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(r),e.ray.intersectsSphere(_l)===!1)||(ju.copy(r).invert(),qr.copy(e.ray).applyMatrix4(ju),n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const f=h[p],m=i[f.materialIndex],_=Math.max(f.start,d.start),b=Math.min(s.count,Math.min(f.start+f.count,d.start+d.count));for(let y=_,M=b;y<M;y+=3){const v=s.getX(y),A=s.getX(y+1),E=s.getX(y+2);a=Wa(this,m,e,qr,c,u,v,A,E),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const p=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let f=p,m=g;f<m;f+=3){const _=s.getX(f),b=s.getX(f+1),y=s.getX(f+2);a=Wa(this,i,e,qr,c,u,_,b,y),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const f=h[p],m=i[f.materialIndex],_=Math.max(f.start,d.start),b=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let y=_,M=b;y<M;y+=3){const v=y,A=y+1,E=y+2;a=Wa(this,m,e,qr,c,u,v,A,E),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let f=p,m=g;f<m;f+=3){const _=f,b=f+1,y=f+2;a=Wa(this,i,e,qr,c,u,_,b,y),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}}function Mm(o,e,t,n,i,r,a,s){let l;if(e.side===Gn?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===yr,s),l===null)return null;Ha.copy(s),Ha.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:o}}function Wa(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,Os),o.getVertexPosition(s,Fs),o.getVertexPosition(l,zs);const c=Mm(o,e,t,n,Os,Fs,zs,vl);if(c){i&&(Ba.fromBufferAttribute(i,a),Ga.fromBufferAttribute(i,s),Va.fromBufferAttribute(i,l),c.uv=vi.getUV(vl,Os,Fs,zs,Ba,Ga,Va,new Ze)),r&&(Ba.fromBufferAttribute(r,a),Ga.fromBufferAttribute(r,s),Va.fromBufferAttribute(r,l),c.uv2=vi.getUV(vl,Os,Fs,zs,Ba,Ga,Va,new Ze));const u={a,b:s,c:l,normal:new W,materialIndex:0};vi.getNormal(Os,Fs,zs,u.normal),c.face=u}return c}class Ts extends Ai{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(u,3)),this.setAttribute("uv",new dr(h,2));function g(f,m,_,b,y,M,v,A,E,x,w){const D=M/E,U=v/x,k=M/2,O=v/2,I=A/2,G=E+1,J=x+1;let Y=0,V=0;const Q=new W;for(let C=0;C<J;C++){const B=C*U-O;for(let $=0;$<G;$++){const ie=$*D-k;Q[f]=ie*b,Q[m]=B*y,Q[_]=I,c.push(Q.x,Q.y,Q.z),Q[f]=0,Q[m]=0,Q[_]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push($/E),h.push(1-C/x),Y+=1}}for(let C=0;C<x;C++)for(let B=0;B<E;B++){const $=d+B+G*C,ie=d+B+G*(C+1),te=d+(B+1)+G*(C+1),ae=d+(B+1)+G*C;l.push($,ie,ae),l.push(ie,te,ae),V+=6}s.addGroup(p,V,w),p+=V,d+=Y}}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(o){const e={};for(let t=0;t<o.length;t++){const n=xs(o[t]);for(const i in n)e[i]=n[i]}return e}function Sm(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Sd(o){return o.getRenderTarget()===null&&o.outputEncoding===ht?Jn:ha}const wm={clone:xs,merge:Zt};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wd extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends wd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ku*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ku*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yr=-90,$r=1;class Am extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Tn(Yr,$r,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Tn(Yr,$r,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Tn(Yr,$r,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Tn(Yr,$r,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Tn(Yr,$r,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Tn(Yr,$r,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Mi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Td extends ln{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cm extends Sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Td(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ts(5,5,5),r=new Tr({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Gi});r.uniforms.tEquirect.value=t;const a=new Fi(i,r),s=t.minFilter;return t.minFilter===ca&&(t.minFilter=Fn),new Am(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const yl=new W,Pm=new W,Lm=new Cn;class er{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yl.subVectors(n,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(yl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lm.getNormalMatrix(e),i=this.coplanarPoint(yl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Uo,Xa=new W;class Ed{constructor(e=new er,t=new er,n=new er,i=new er,r=new er,a=new er){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],f=n[11],m=n[12],_=n[13],b=n[14],y=n[15];return t[0].setComponents(s-i,h-l,f-d,y-m).normalize(),t[1].setComponents(s+i,h+l,f+d,y+m).normalize(),t[2].setComponents(s+r,h+c,f+p,y+_).normalize(),t[3].setComponents(s-r,h-c,f-p,y-_).normalize(),t[4].setComponents(s-a,h-u,f-g,y-b).normalize(),t[5].setComponents(s+a,h+u,f+g,y+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xa.x=i.normal.x>0?e.max.x:e.min.x,Xa.y=i.normal.y>0?e.max.y:e.min.y,Xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Dm(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=o.createBuffer();o.bindBuffer(u,p),o.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;o.bindBuffer(h,c),p.count===-1?o.bufferSubData(h,0,d):(t?o.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):o.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class Cc extends Ai{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=e/s,d=t/l,p=[],g=[],f=[],m=[];for(let _=0;_<u;_++){const b=_*d-a;for(let y=0;y<c;y++){const M=y*h-r;g.push(M,-b,0),f.push(0,0,1),m.push(y/s),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<s;b++){const y=b+c*_,M=b+c*(_+1),v=b+1+c*(_+1),A=b+1+c*_;p.push(y,M,A),p.push(M,v,A)}this.setIndex(p),this.setAttribute("position",new dr(g,3)),this.setAttribute("normal",new dr(f,3)),this.setAttribute("uv",new dr(m,2))}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km="vec3 transformed = vec3( position );",Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Gm=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Vm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Km=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Qm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
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
}`,gg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,bg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,i_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h_=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,d_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,M_=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,S_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,w_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,T_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,E_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,A_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,C_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,P_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D_=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,N_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,k_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,U_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,V_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,j_=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Q_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,i0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,l0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:Rm,alphamap_pars_fragment:Im,alphatest_fragment:Om,alphatest_pars_fragment:Fm,aomap_fragment:zm,aomap_pars_fragment:Nm,begin_vertex:km,beginnormal_vertex:Um,bsdfs:Bm,iridescence_fragment:Gm,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:qm,color_fragment:Ym,color_pars_fragment:$m,color_pars_vertex:jm,color_vertex:Zm,common:Km,cube_uv_reflection_fragment:Jm,defaultnormal_vertex:Qm,displacementmap_pars_vertex:eg,displacementmap_vertex:tg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,encodings_fragment:rg,encodings_pars_fragment:sg,envmap_fragment:ag,envmap_common_pars_fragment:og,envmap_pars_fragment:lg,envmap_pars_vertex:cg,envmap_physical_pars_fragment:bg,envmap_vertex:ug,fog_vertex:hg,fog_pars_vertex:dg,fog_fragment:fg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_fragment:gg,lightmap_pars_fragment:_g,lights_lambert_fragment:xg,lights_lambert_pars_fragment:vg,lights_pars_begin:yg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:wg,lights_phong_pars_fragment:Tg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Cg,lights_fragment_maps:Pg,lights_fragment_end:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Og,map_fragment:Fg,map_pars_fragment:zg,map_particle_fragment:Ng,map_particle_pars_fragment:kg,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Bg,morphcolor_vertex:Gg,morphnormal_vertex:Vg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:qg,normal_pars_fragment:Yg,normal_pars_vertex:$g,normal_vertex:jg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:e_,output_fragment:t_,packing:n_,premultiplied_alpha_fragment:i_,project_vertex:r_,dithering_fragment:s_,dithering_pars_fragment:a_,roughnessmap_fragment:o_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:u_,shadowmap_vertex:h_,shadowmask_pars_fragment:d_,skinbase_vertex:f_,skinning_pars_vertex:p_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:__,specularmap_pars_fragment:x_,tonemapping_fragment:v_,tonemapping_pars_fragment:y_,transmission_fragment:b_,transmission_pars_fragment:M_,uv_pars_fragment:S_,uv_pars_vertex:w_,uv_vertex:T_,uv2_pars_fragment:E_,uv2_pars_vertex:A_,uv2_vertex:C_,worldpos_vertex:P_,background_vert:L_,background_frag:D_,backgroundCube_vert:R_,backgroundCube_frag:I_,cube_vert:O_,cube_frag:F_,depth_vert:z_,depth_frag:N_,distanceRGBA_vert:k_,distanceRGBA_frag:U_,equirect_vert:B_,equirect_frag:G_,linedashed_vert:V_,linedashed_frag:H_,meshbasic_vert:W_,meshbasic_frag:X_,meshlambert_vert:q_,meshlambert_frag:Y_,meshmatcap_vert:$_,meshmatcap_frag:j_,meshnormal_vert:Z_,meshnormal_frag:K_,meshphong_vert:J_,meshphong_frag:Q_,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:r0,points_frag:s0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},ue={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Cn},uv2Transform:{value:new Cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}}},ti={basic:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new at(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new at(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Zt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Zt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Zt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Zt([ue.common,ue.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Zt([ue.lights,ue.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ti.physical={uniforms:Zt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const qa={r:0,b:0,g:0};function u0(o,e,t,n,i,r,a){const s=new at(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,_){let b=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const M=o.xr,v=M.getSession&&M.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?f(s,l):y&&y.isColor&&(f(y,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ko)?(u===void 0&&(u=new Fi(new Ts(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:xs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==ht,(h!==y||d!==y.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fi(new Cc(2,2),new Tr({name:"BackgroundMaterial",uniforms:xs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==o.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function f(m,_){m.getRGB(qa,Sd(o)),n.buffers.color.setClear(qa.r,qa.g,qa.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(m,_=1){s.set(m),l=_,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(s,l)},render:g}}function h0(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=m(null);let c=l,u=!1;function h(I,G,J,Y,V){let Q=!1;if(a){const C=f(Y,J,G);c!==C&&(c=C,p(c.object)),Q=_(I,Y,J,V),Q&&b(I,Y,J,V)}else{const C=G.wireframe===!0;(c.geometry!==Y.id||c.program!==J.id||c.wireframe!==C)&&(c.geometry=Y.id,c.program=J.id,c.wireframe=C,Q=!0)}V!==null&&t.update(V,34963),(Q||u)&&(u=!1,x(I,G,J,Y),V!==null&&o.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?o.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?o.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function f(I,G,J){const Y=J.wireframe===!0;let V=s[I.id];V===void 0&&(V={},s[I.id]=V);let Q=V[G.id];Q===void 0&&(Q={},V[G.id]=Q);let C=Q[Y];return C===void 0&&(C=m(d()),Q[Y]=C),C}function m(I){const G=[],J=[],Y=[];for(let V=0;V<i;V++)G[V]=0,J[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:Y,object:I,attributes:{},index:null}}function _(I,G,J,Y){const V=c.attributes,Q=G.attributes;let C=0;const B=J.getAttributes();for(const $ in B)if(B[$].location>=0){const te=V[$];let ae=Q[$];if(ae===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;C++}return c.attributesNum!==C||c.index!==Y}function b(I,G,J,Y){const V={},Q=G.attributes;let C=0;const B=J.getAttributes();for(const $ in B)if(B[$].location>=0){let te=Q[$];te===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),V[$]=ae,C++}c.attributes=V,c.attributesNum=C,c.index=Y}function y(){const I=c.newAttributes;for(let G=0,J=I.length;G<J;G++)I[G]=0}function M(I){v(I,0)}function v(I,G){const J=c.newAttributes,Y=c.enabledAttributes,V=c.attributeDivisors;J[I]=1,Y[I]===0&&(o.enableVertexAttribArray(I),Y[I]=1),V[I]!==G&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),V[I]=G)}function A(){const I=c.newAttributes,G=c.enabledAttributes;for(let J=0,Y=G.length;J<Y;J++)G[J]!==I[J]&&(o.disableVertexAttribArray(J),G[J]=0)}function E(I,G,J,Y,V,Q){n.isWebGL2===!0&&(J===5124||J===5125)?o.vertexAttribIPointer(I,G,J,V,Q):o.vertexAttribPointer(I,G,J,Y,V,Q)}function x(I,G,J,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=Y.attributes,Q=J.getAttributes(),C=G.defaultAttributeValues;for(const B in Q){const $=Q[B];if($.location>=0){let ie=V[B];if(ie===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){const te=ie.normalized,ae=ie.itemSize,j=t.get(ie);if(j===void 0)continue;const Ae=j.buffer,fe=j.type,Me=j.bytesPerElement;if(ie.isInterleavedBufferAttribute){const ge=ie.data,Ie=ge.stride,Le=ie.offset;if(ge.isInstancedInterleavedBuffer){for(let le=0;le<$.locationSize;le++)v($.location+le,ge.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let le=0;le<$.locationSize;le++)M($.location+le);o.bindBuffer(34962,Ae);for(let le=0;le<$.locationSize;le++)E($.location+le,ae/$.locationSize,fe,te,Ie*Me,(Le+ae/$.locationSize*le)*Me)}else{if(ie.isInstancedBufferAttribute){for(let ge=0;ge<$.locationSize;ge++)v($.location+ge,ie.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ge=0;ge<$.locationSize;ge++)M($.location+ge);o.bindBuffer(34962,Ae);for(let ge=0;ge<$.locationSize;ge++)E($.location+ge,ae/$.locationSize,fe,te,ae*Me,ae/$.locationSize*ge*Me)}}else if(C!==void 0){const te=C[B];if(te!==void 0)switch(te.length){case 2:o.vertexAttrib2fv($.location,te);break;case 3:o.vertexAttrib3fv($.location,te);break;case 4:o.vertexAttrib4fv($.location,te);break;default:o.vertexAttrib1fv($.location,te)}}}}A()}function w(){k();for(const I in s){const G=s[I];for(const J in G){const Y=G[J];for(const V in Y)g(Y[V].object),delete Y[V];delete G[J]}delete s[I]}}function D(I){if(s[I.id]===void 0)return;const G=s[I.id];for(const J in G){const Y=G[J];for(const V in Y)g(Y[V].object),delete Y[V];delete G[J]}delete s[I.id]}function U(I){for(const G in s){const J=s[G];if(J[I.id]===void 0)continue;const Y=J[I.id];for(const V in Y)g(Y[V].object),delete Y[V];delete J[I.id]}}function k(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:M,disableUnusedAttributes:A}}function d0(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=o,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function f0(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),p=o.getParameter(3379),g=o.getParameter(34076),f=o.getParameter(34921),m=o.getParameter(36347),_=o.getParameter(36348),b=o.getParameter(36349),y=d>0,M=a||e.has("OES_texture_float"),v=y&&M,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:A}}function p0(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new er,s=new Cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,y=b*4;let M=_.clippingState||null;l.value=M,M=u(g,d,y,p);for(let v=0;v!==y;++v)M[v]=t[v];_.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const f=h!==null?h.length:0;let m=null;if(f!==0){if(m=l.value,g!==!0||m===null){const _=p+f*4,b=d.matrixWorldInverse;s.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,M=p;y!==f;++y,M+=4)a.copy(h[y]).applyMatrix4(b,s),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}}function m0(o){let e=new WeakMap;function t(a,s){return s===Xl?a.mapping=ms:s===ql&&(a.mapping=gs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Xl||s===ql)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cm(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class g0 extends wd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,Zu=[.125,.215,.35,.446,.526,.582],sr=20,bl=new g0,Ku=new at;let Ml=null;const tr=(1+Math.sqrt(5))/2,Zr=1/tr,Ju=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,tr,Zr),new W(0,tr,-Zr),new W(Zr,0,tr),new W(-Zr,0,tr),new W(tr,Zr,0),new W(-tr,Zr,0)];class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ml=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ua,format:Zn,encoding:Mr,depthBuffer:!1},i=eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(r)),this._blurMaterial=x0(r,e,t)}return i}_compileMaterial(e){const t=new Fi(this._lodPlanes[0],e);this._renderer.compile(t,bl)}_sceneToCubeUV(e,t,n,i){const s=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ku),u.toneMapping=Mi,u.autoClear=!1;const p=new yd({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new Fi(new Ts,p);let f=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(Ku),f=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):b===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const y=this._cubeSize;Ya(i,b*y,_>2?y:0,y,y),u.setRenderTarget(i),f&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ms||e.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Fi(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Ya(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ju[(i-1)%Ju.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Fi(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*sr-1),f=r/g,m=isFinite(r)?1+Math.floor(u*f):sr;m>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const _=[];let b=0;for(let E=0;E<sr;++E){const x=E/f,w=Math.exp(-x*x/2);_.push(w),E===0?b+=w:E<m&&(b+=2*w)}for(let E=0;E<_.length;E++)_[E]=_[E]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const M=this._sizeLods[i],v=3*M*(i>y-is?i-y+is:0),A=4*(this._cubeSize-M);Ya(t,v,A,3*M,2*M),l.setRenderTarget(t),l.render(h,bl)}}function _0(o){const e=[],t=[],n=[];let i=o;const r=o-is+1+Zu.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-is?l=Zu[a-o+is-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,f=3,m=2,_=1,b=new Float32Array(f*g*p),y=new Float32Array(m*g*p),M=new Float32Array(_*g*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,x=A>2?0:-1,w=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];b.set(w,f*g*A),y.set(d,m*g*A);const D=[A,A,A,A,A,A];M.set(D,_*g*A)}const v=new Ai;v.setAttribute("position",new un(b,f)),v.setAttribute("uv",new un(y,m)),v.setAttribute("faceIndex",new un(M,_)),e.push(v),i>is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eh(o,e,t){const n=new Sr(o,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function x0(o,e,t){const n=new Float32Array(sr),i=new W(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function th(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function nh(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v0(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Xl||l===ql,u=l===ms||l===gs;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Qu(o)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Qu(o));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",r),d.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function y0(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function b0(o,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const f=p[g];for(let m=0,_=f.length;m<_;m++)e.update(f[m],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let f=0;if(p!==null){const b=p.array;f=p.version;for(let y=0,M=b.length;y<M;y+=3){const v=b[y+0],A=b[y+1],E=b[y+2];d.push(v,A,A,E,E,v)}}else{const b=g.array;f=g.version;for(let y=0,M=b.length/3-1;y<M;y+=3){const v=y+0,A=y+1,E=y+2;d.push(v,A,A,E,E,v)}}const m=new(fd(d)?Md:bd)(d,1);m.version=f;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function M0(o,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,p){o.drawElements(r,p,s,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let f,m;if(i)f=o,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,p,s,d*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function S0(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w0(o,e){return o[0]-e[0]}function T0(o,e){return Math.abs(e[1])-Math.abs(o[1])}function E0(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new kt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let J=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;M===!0&&(D=1),v===!0&&(D=2),A===!0&&(D=3);let U=u.attributes.position.count*D,k=1;U>e.maxTextureSize&&(k=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*k*4*m),I=new _d(O,U,k,m);I.type=or,I.needsUpdate=!0;const G=D*4;for(let Y=0;Y<m;Y++){const V=E[Y],Q=x[Y],C=w[Y],B=U*k*4*Y;for(let $=0;$<V.count;$++){const ie=$*G;M===!0&&(a.fromBufferAttribute(V,$),O[B+ie+0]=a.x,O[B+ie+1]=a.y,O[B+ie+2]=a.z,O[B+ie+3]=0),v===!0&&(a.fromBufferAttribute(Q,$),O[B+ie+4]=a.x,O[B+ie+5]=a.y,O[B+ie+6]=a.z,O[B+ie+7]=0),A===!0&&(a.fromBufferAttribute(C,$),O[B+ie+8]=a.x,O[B+ie+9]=a.y,O[B+ie+10]=a.z,O[B+ie+11]=C.itemSize===4?a.w:1)}}_={count:m,texture:I,size:new Ze(U,k)},r.set(u,_),u.addEventListener("dispose",J)}let b=0;for(let M=0;M<p.length;M++)b+=p[M];const y=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",y),d.getUniforms().setValue(o,"morphTargetInfluences",p),d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const f=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<f;v++){const A=m[v];A[0]=v,A[1]=p[v]}m.sort(T0);for(let v=0;v<8;v++)v<f&&m[v][1]?(s[v][0]=m[v][0],s[v][1]=m[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(w0);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const A=s[v],E=A[0],x=A[1];E!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[E]&&u.setAttribute("morphTarget"+v,_[E]),b&&u.getAttribute("morphNormal"+v)!==b[E]&&u.setAttribute("morphNormal"+v,b[E]),i[v]=x,y+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),b&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const M=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function A0(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Cd=new ln,Pd=new _d,Ld=new dm,Dd=new Td,ih=[],rh=[],sh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function Es(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=ih[i];if(r===void 0&&(r=new Float32Array(i),ih[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function Pt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Lt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Bo(o,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function C0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function P0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2fv(this.addr,e),Lt(t,e)}}function L0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;o.uniform3fv(this.addr,e),Lt(t,e)}}function D0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4fv(this.addr,e),Lt(t,e)}}function R0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;oh.set(n),o.uniformMatrix2fv(this.addr,!1,oh),Lt(t,n)}}function I0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ah.set(n),o.uniformMatrix3fv(this.addr,!1,ah),Lt(t,n)}}function O0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;sh.set(n),o.uniformMatrix4fv(this.addr,!1,sh),Lt(t,n)}}function F0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function z0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2iv(this.addr,e),Lt(t,e)}}function N0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;o.uniform3iv(this.addr,e),Lt(t,e)}}function k0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4iv(this.addr,e),Lt(t,e)}}function U0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function B0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2uiv(this.addr,e),Lt(t,e)}}function G0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;o.uniform3uiv(this.addr,e),Lt(t,e)}}function V0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4uiv(this.addr,e),Lt(t,e)}}function H0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Cd,i)}function W0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ld,i)}function X0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dd,i)}function q0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pd,i)}function Y0(o){switch(o){case 5126:return C0;case 35664:return P0;case 35665:return L0;case 35666:return D0;case 35674:return R0;case 35675:return I0;case 35676:return O0;case 5124:case 35670:return F0;case 35667:case 35671:return z0;case 35668:case 35672:return N0;case 35669:case 35673:return k0;case 5125:return U0;case 36294:return B0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function $0(o,e){o.uniform1fv(this.addr,e)}function j0(o,e){const t=Es(e,this.size,2);o.uniform2fv(this.addr,t)}function Z0(o,e){const t=Es(e,this.size,3);o.uniform3fv(this.addr,t)}function K0(o,e){const t=Es(e,this.size,4);o.uniform4fv(this.addr,t)}function J0(o,e){const t=Es(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Q0(o,e){const t=Es(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function ex(o,e){const t=Es(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function tx(o,e){o.uniform1iv(this.addr,e)}function nx(o,e){o.uniform2iv(this.addr,e)}function ix(o,e){o.uniform3iv(this.addr,e)}function rx(o,e){o.uniform4iv(this.addr,e)}function sx(o,e){o.uniform1uiv(this.addr,e)}function ax(o,e){o.uniform2uiv(this.addr,e)}function ox(o,e){o.uniform3uiv(this.addr,e)}function lx(o,e){o.uniform4uiv(this.addr,e)}function cx(o,e,t){const n=this.cache,i=e.length,r=Bo(t,i);Pt(n,r)||(o.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Cd,r[a])}function ux(o,e,t){const n=this.cache,i=e.length,r=Bo(t,i);Pt(n,r)||(o.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ld,r[a])}function hx(o,e,t){const n=this.cache,i=e.length,r=Bo(t,i);Pt(n,r)||(o.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Dd,r[a])}function dx(o,e,t){const n=this.cache,i=e.length,r=Bo(t,i);Pt(n,r)||(o.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Pd,r[a])}function fx(o){switch(o){case 5126:return $0;case 35664:return j0;case 35665:return Z0;case 35666:return K0;case 35674:return J0;case 35675:return Q0;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return rx;case 5125:return sx;case 36294:return ax;case 36295:return ox;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return dx}}class px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Y0(t.type)}}class mx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=fx(t.type)}}class gx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function lh(o,e){o.seq.push(e),o.map[e.id]=e}function _x(o,e,t){const n=o.name,i=n.length;for(Sl.lastIndex=0;;){const r=Sl.exec(n),a=Sl.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){lh(t,c===void 0?new px(s,o,e):new mx(s,o,e));break}else{let h=t.map[s];h===void 0&&(h=new gx(s),lh(t,h)),t=h}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);_x(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ch(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let xx=0;function vx(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function yx(o){switch(o){case Mr:return["Linear","( value )"];case ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function uh(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+vx(o.getShaderSource(e),a)}else return i}function bx(o,e){const t=yx(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Mx(o,e){let t;switch(e){case kp:t="Linear";break;case Up:t="Reinhard";break;case Bp:t="OptimizedCineon";break;case Gp:t="ACESFilmic";break;case Vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sx(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function wx(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tx(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function Vs(o){return o!==""}function hh(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(o){return o.replace(Ex,Ax)}function Ax(o,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Kl(t)}const Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(o){return o.replace(Cx,Px)}function Px(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ph(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lx(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===od?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===gp?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Gs&&(e="SHADOWMAP_TYPE_VSM"),e}function Dx(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rx(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ix(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case zp:e="ENVMAP_BLENDING_MIX";break;case Np:e="ENVMAP_BLENDING_ADD";break}return e}function Ox(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fx(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Lx(t),c=Dx(t),u=Rx(t),h=Ix(t),d=Ox(t),p=t.isWebGL2?"":Sx(t),g=wx(r),f=i.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Vs).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Vs).join(`
`),_.length>0&&(_+=`
`)):(m=[ph(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),_=[p,ph(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?He.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,bx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),a=Kl(a),a=hh(a,t),a=dh(a,t),s=Kl(s),s=hh(s,t),s=dh(s,t),a=fh(a),s=fh(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=b+m+a,M=b+_+s,v=ch(i,35633,y),A=ch(i,35632,M);if(i.attachShader(f,v),i.attachShader(f,A),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),D=i.getShaderInfoLog(v).trim(),U=i.getShaderInfoLog(A).trim();let k=!0,O=!0;if(i.getProgramParameter(f,35714)===!1){k=!1;const I=uh(i,v,"vertex"),G=uh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+I+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||U==="")&&(O=!1);O&&(this.diagnostics={runnable:k,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:_}})}i.deleteShader(v),i.deleteShader(A);let E;this.getUniforms=function(){return E===void 0&&(E=new ho(i,f)),E};let x;return this.getAttributes=function(){return x===void 0&&(x=Tx(i,f)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=xx++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=v,this.fragmentShader=A,this}let zx=0;class Nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kx(e),t.set(e,n)),n}}class kx{constructor(e){this.id=zx++,this.code=e,this.usedTimes=0}}function Ux(o,e,t,n,i,r,a){const s=new vd,l=new Nx,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x,w,D,U,k){const O=U.fog,I=k.geometry,G=x.isMeshStandardMaterial?U.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),Y=J&&J.mapping===ko?J.image.height:null,V=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,C=Q!==void 0?Q.length:0;let B=0;I.morphAttributes.position!==void 0&&(B=1),I.morphAttributes.normal!==void 0&&(B=2),I.morphAttributes.color!==void 0&&(B=3);let $,ie,te,ae;if(V){const Ie=ti[V];$=Ie.vertexShader,ie=Ie.fragmentShader}else $=x.vertexShader,ie=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),ae=l.getFragmentShaderID(x);const j=o.getRenderTarget(),Ae=x.alphaTest>0,fe=x.clearcoat>0,Me=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:$,fragmentShader:ie,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:d,outputEncoding:j===null?o.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:Mr,map:!!x.map,matcap:!!x.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Y,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===lm,tangentSpaceNormalMap:x.normalMapType===om,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===ht,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!x.iridescenceMap,iridescenceThicknessMap:Me&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===os,alphaMap:!!x.alphaMap,alphaTest:Ae,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:B,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Mi,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ac,flipSided:x.side===Gn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)w.push(D),w.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(_(w,x),b(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function y(x){const w=g[x.type];let D;if(w){const U=ti[w];D=wm.clone(U.uniforms)}else D=x.uniforms;return D}function M(x,w){let D;for(let U=0,k=c.length;U<k;U++){const O=c[U];if(O.cacheKey===w){D=O,++D.usedTimes;break}}return D===void 0&&(D=new Fx(o,w,x,r),c.push(D)),D}function v(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function E(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:E}}function Bx(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Gx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function mh(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function gh(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,f,m){let _=o[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:f,group:m},o[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=f,_.group=m),e++,_}function s(h,d,p,g,f,m){const _=a(h,d,p,g,f,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,d,p,g,f,m){const _=a(h,d,p,g,f,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||Gx),n.length>1&&n.sort(d||mh),i.length>1&&i.sort(d||mh)}function u(){for(let h=e,d=o.length;h<d;h++){const p=o[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Vx(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new gh,o.set(n,[a])):i>=r.length?(a=new gh,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function Hx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new at};break;case"SpotLight":t={position:new W,direction:new W,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new W,halfWidth:new W,halfHeight:new W};break}return o[e.id]=t,t}}}function Wx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Xx=0;function qx(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Yx(o,e){const t=new Hx,n=Wx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,a=new Ft,s=new Ft;function l(u,h){let d=0,p=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,m=0,_=0,b=0,y=0,M=0,v=0,A=0,E=0,x=0;u.sort(qx);const w=h!==!0?Math.PI:1;for(let U=0,k=u.length;U<k;U++){const O=u[U],I=O.color,G=O.intensity,J=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=I.r*G*w,p+=I.g*G*w,g+=I.b*G*w;else if(O.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(O.sh.coefficients[V],G);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const Q=O.shadow,C=n.get(O);C.shadowBias=Q.bias,C.shadowNormalBias=Q.normalBias,C.shadowRadius=Q.radius,C.shadowMapSize=Q.mapSize,i.directionalShadow[f]=C,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=O.shadow.matrix,M++}i.directional[f]=V,f++}else if(O.isSpotLight){const V=t.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(I).multiplyScalar(G*w),V.distance=J,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,i.spot[_]=V;const Q=O.shadow;if(O.map&&(i.spotLightMap[E]=O.map,E++,Q.updateMatrices(O),O.castShadow&&x++),i.spotLightMatrix[_]=Q.matrix,O.castShadow){const C=n.get(O);C.shadowBias=Q.bias,C.shadowNormalBias=Q.normalBias,C.shadowRadius=Q.radius,C.shadowMapSize=Q.mapSize,i.spotShadow[_]=C,i.spotShadowMap[_]=Y,A++}_++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(I).multiplyScalar(G),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),i.rectArea[b]=V,b++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),V.distance=O.distance,V.decay=O.decay,O.castShadow){const Q=O.shadow,C=n.get(O);C.shadowBias=Q.bias,C.shadowNormalBias=Q.normalBias,C.shadowRadius=Q.radius,C.shadowMapSize=Q.mapSize,C.shadowCameraNear=Q.camera.near,C.shadowCameraFar=Q.camera.far,i.pointShadow[m]=C,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=O.shadow.matrix,v++}i.point[m]=V,m++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(G*w),V.groundColor.copy(O.groundColor).multiplyScalar(G*w),i.hemi[y]=V,y++}}b>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==y||D.numDirectionalShadows!==M||D.numPointShadows!==v||D.numSpotShadows!==A||D.numSpotMaps!==E)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=A+E-x,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=x,D.directionalLength=f,D.pointLength=m,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=y,D.numDirectionalShadows=M,D.numPointShadows=v,D.numSpotShadows=A,D.numSpotMaps=E,i.version=Xx++)}function c(u,h){let d=0,p=0,g=0,f=0,m=0;const _=h.matrixWorldInverse;for(let b=0,y=u.length;b<y;b++){const M=u[b];if(M.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),d++}else if(M.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const v=i.rectArea[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),s.identity(),a.copy(M.matrixWorld),a.premultiply(_),s.extractRotation(a),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),f++}else if(M.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),p++}else if(M.isHemisphereLight){const v=i.hemi[m];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function _h(o,e){const t=new Yx(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function $x(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new _h(o,e),t.set(r,[l])):a>=s.length?(l=new _h(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class jx extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zx extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qx(o,e,t){let n=new Ed;const i=new Ze,r=new Ze,a=new kt,s=new jx({depthPacking:am}),l=new Zx,c={},u=t.maxTextureSize,h={0:Gn,1:yr,2:Ac},d=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Kx,fragmentShader:Jx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Fi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od,this.render=function(M,v,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),D=o.state;D.setBlending(Gi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let U=0,k=M.length;U<k;U++){const O=M[U],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const G=I.getFrameExtents();if(i.multiply(G),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/G.x),i.x=r.x*G.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/G.y),i.y=r.y*G.y,I.mapSize.y=r.y)),I.map===null){const Y=this.type!==Gs?{minFilter:en,magFilter:en}:{};I.map=new Sr(i.x,i.y,Y),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const J=I.getViewportCount();for(let Y=0;Y<J;Y++){const V=I.getViewport(Y);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),D.viewport(a),I.updateMatrices(O,Y),n=I.getFrustum(),y(v,A,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Gs&&_(I,A),I.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(E,x,w)};function _(M,v){const A=e.update(f);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Sr(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(v,null,A,d,f,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(v,null,A,p,f,null)}function b(M,v,A,E,x,w){let D=null;const U=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)D=U;else if(D=A.isPointLight===!0?l:s,o.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const k=D.uuid,O=v.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let G=I[O];G===void 0&&(G=D.clone(),I[O]=G),D=G}return D.visible=v.visible,D.wireframe=v.wireframe,w===Gs?D.side=v.shadowSide!==null?v.shadowSide:v.side:D.side=v.shadowSide!==null?v.shadowSide:h[v.side],D.alphaMap=v.alphaMap,D.alphaTest=v.alphaTest,D.map=v.map,D.clipShadows=v.clipShadows,D.clippingPlanes=v.clippingPlanes,D.clipIntersection=v.clipIntersection,D.displacementMap=v.displacementMap,D.displacementScale=v.displacementScale,D.displacementBias=v.displacementBias,D.wireframeLinewidth=v.wireframeLinewidth,D.linewidth=v.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=E,D.farDistance=x),D}function y(M,v,A,E,x){if(M.visible===!1)return;if(M.layers.test(v.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Gs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const U=e.update(M),k=M.material;if(Array.isArray(k)){const O=U.groups;for(let I=0,G=O.length;I<G;I++){const J=O[I],Y=k[J.materialIndex];if(Y&&Y.visible){const V=b(M,Y,E,A.near,A.far,x);o.renderBufferDirect(A,null,U,V,M,J)}}}else if(k.visible){const O=b(M,k,E,A.near,A.far,x);o.renderBufferDirect(A,null,U,O,M,null)}}const D=M.children;for(let U=0,k=D.length;U<k;U++)y(D[U],v,A,E,x)}}function ev(o,e,t){const n=t.isWebGL2;function i(){let R=!1;const K=new kt;let ne=null;const ce=new kt(0,0,0,0);return{setMask:function(xe){ne!==xe&&!R&&(o.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){R=xe},setClear:function(xe,We,ut,lt,gn){gn===!0&&(xe*=lt,We*=lt,ut*=lt),K.set(xe,We,ut,lt),ce.equals(K)===!1&&(o.clearColor(xe,We,ut,lt),ce.copy(K))},reset:function(){R=!1,ne=null,ce.set(-1,0,0,0)}}}function r(){let R=!1,K=null,ne=null,ce=null;return{setTest:function(xe){xe?Ae(2929):fe(2929)},setMask:function(xe){K!==xe&&!R&&(o.depthMask(xe),K=xe)},setFunc:function(xe){if(ne!==xe){switch(xe){case Pp:o.depthFunc(512);break;case Lp:o.depthFunc(519);break;case Dp:o.depthFunc(513);break;case Wl:o.depthFunc(515);break;case Rp:o.depthFunc(514);break;case Ip:o.depthFunc(518);break;case Op:o.depthFunc(516);break;case Fp:o.depthFunc(517);break;default:o.depthFunc(515)}ne=xe}},setLocked:function(xe){R=xe},setClear:function(xe){ce!==xe&&(o.clearDepth(xe),ce=xe)},reset:function(){R=!1,K=null,ne=null,ce=null}}}function a(){let R=!1,K=null,ne=null,ce=null,xe=null,We=null,ut=null,lt=null,gn=null;return{setTest:function(ve){R||(ve?Ae(2960):fe(2960))},setMask:function(ve){K!==ve&&!R&&(o.stencilMask(ve),K=ve)},setFunc:function(ve,Ee,Ne){(ne!==ve||ce!==Ee||xe!==Ne)&&(o.stencilFunc(ve,Ee,Ne),ne=ve,ce=Ee,xe=Ne)},setOp:function(ve,Ee,Ne){(We!==ve||ut!==Ee||lt!==Ne)&&(o.stencilOp(ve,Ee,Ne),We=ve,ut=Ee,lt=Ne)},setLocked:function(ve){R=ve},setClear:function(ve){gn!==ve&&(o.clearStencil(ve),gn=ve)},reset:function(){R=!1,K=null,ne=null,ce=null,xe=null,We=null,ut=null,lt=null,gn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,f=[],m=null,_=!1,b=null,y=null,M=null,v=null,A=null,E=null,x=null,w=!1,D=null,U=null,k=null,O=null,I=null;const G=o.getParameter(35661);let J=!1,Y=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),J=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),J=Y>=2);let Q=null,C={};const B=o.getParameter(3088),$=o.getParameter(2978),ie=new kt().fromArray(B),te=new kt().fromArray($);function ae(R,K,ne){const ce=new Uint8Array(4),xe=o.createTexture();o.bindTexture(R,xe),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let We=0;We<ne;We++)o.texImage2D(K+We,0,6408,1,1,0,6408,5121,ce);return xe}const j={};j[3553]=ae(3553,3553,1),j[34067]=ae(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(Wl),it(!1),H(cu),Ae(2884),Ge(Gi);function Ae(R){d[R]!==!0&&(o.enable(R),d[R]=!0)}function fe(R){d[R]!==!1&&(o.disable(R),d[R]=!1)}function Me(R,K){return p[R]!==K?(o.bindFramebuffer(R,K),p[R]=K,n&&(R===36009&&(p[36160]=K),R===36160&&(p[36009]=K)),!0):!1}function ge(R,K){let ne=f,ce=!1;if(R)if(ne=g.get(K),ne===void 0&&(ne=[],g.set(K,ne)),R.isWebGLMultipleRenderTargets){const xe=R.texture;if(ne.length!==xe.length||ne[0]!==36064){for(let We=0,ut=xe.length;We<ut;We++)ne[We]=36064+We;ne.length=xe.length,ce=!0}}else ne[0]!==36064&&(ne[0]=36064,ce=!0);else ne[0]!==1029&&(ne[0]=1029,ce=!0);ce&&(t.isWebGL2?o.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Ie(R){return m!==R?(o.useProgram(R),m=R,!0):!1}const Le={[es]:32774,[xp]:32778,[vp]:32779};if(n)Le[du]=32775,Le[fu]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Le[du]=R.MIN_EXT,Le[fu]=R.MAX_EXT)}const le={[yp]:0,[bp]:1,[Mp]:768,[ld]:770,[Cp]:776,[Ep]:774,[wp]:772,[Sp]:769,[cd]:771,[Ap]:775,[Tp]:773};function Ge(R,K,ne,ce,xe,We,ut,lt){if(R===Gi){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Ae(3042),_=!0),R!==_p){if(R!==b||lt!==w){if((y!==es||A!==es)&&(o.blendEquation(32774),y=es,A=es),lt)switch(R){case os:o.blendFuncSeparate(1,771,1,771);break;case So:o.blendFunc(1,1);break;case uu:o.blendFuncSeparate(0,769,0,1);break;case hu:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case os:o.blendFuncSeparate(770,771,1,771);break;case So:o.blendFunc(770,1);break;case uu:o.blendFuncSeparate(0,769,0,1);break;case hu:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,v=null,E=null,x=null,b=R,w=lt}return}xe=xe||K,We=We||ne,ut=ut||ce,(K!==y||xe!==A)&&(o.blendEquationSeparate(Le[K],Le[xe]),y=K,A=xe),(ne!==M||ce!==v||We!==E||ut!==x)&&(o.blendFuncSeparate(le[ne],le[ce],le[We],le[ut]),M=ne,v=ce,E=We,x=ut),b=R,w=!1}function nt(R,K){R.side===Ac?fe(2884):Ae(2884);let ne=R.side===Gn;K&&(ne=!ne),it(ne),R.blending===os&&R.transparent===!1?Ge(Gi):Ge(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),s.setMask(R.colorWrite);const ce=R.stencilWrite;c.setTest(ce),ce&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ve(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ae(32926):fe(32926)}function it(R){D!==R&&(R?o.frontFace(2304):o.frontFace(2305),D=R)}function H(R){R!==pp?(Ae(2884),R!==U&&(R===cu?o.cullFace(1029):R===mp?o.cullFace(1028):o.cullFace(1032))):fe(2884),U=R}function Je(R){R!==k&&(J&&o.lineWidth(R),k=R)}function Ve(R,K,ne){R?(Ae(32823),(O!==K||I!==ne)&&(o.polygonOffset(K,ne),O=K,I=ne)):fe(32823)}function vt(R){R?Ae(3089):fe(3089)}function Qe(R){R===void 0&&(R=33984+G-1),Q!==R&&(o.activeTexture(R),Q=R)}function P(R,K,ne){ne===void 0&&(Q===null?ne=33984+G-1:ne=Q);let ce=C[ne];ce===void 0&&(ce={type:void 0,texture:void 0},C[ne]=ce),(ce.type!==R||ce.texture!==K)&&(Q!==ne&&(o.activeTexture(ne),Q=ne),o.bindTexture(R,K||j[R]),ce.type=R,ce.texture=K)}function S(){const R=C[Q];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function L(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function N(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(R){ie.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),ie.copy(R))}function Se(R){te.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),te.copy(R))}function Be(R,K){let ne=h.get(K);ne===void 0&&(ne=new WeakMap,h.set(K,ne));let ce=ne.get(R);ce===void 0&&(ce=o.getUniformBlockIndex(K,R.name),ne.set(R,ce))}function Ue(R,K){const ce=h.get(K).get(R);u.get(K)!==ce&&(o.uniformBlockBinding(K,ce,R.__bindingPointIndex),u.set(K,ce))}function je(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},Q=null,C={},p={},g=new WeakMap,f=[],m=null,_=!1,b=null,y=null,M=null,v=null,A=null,E=null,x=null,w=!1,D=null,U=null,k=null,O=null,I=null,ie.set(0,0,o.canvas.width,o.canvas.height),te.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ae,disable:fe,bindFramebuffer:Me,drawBuffers:ge,useProgram:Ie,setBlending:Ge,setMaterial:nt,setFlipSided:it,setCullFace:H,setLineWidth:Je,setPolygonOffset:Ve,setScissorTest:vt,activeTexture:Qe,bindTexture:P,unbindTexture:S,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:oe,texImage3D:me,updateUBOMapping:Be,uniformBlockBinding:Ue,texStorage2D:N,texStorage3D:pe,texSubImage2D:se,texSubImage3D:re,compressedTexSubImage2D:Te,compressedTexSubImage3D:L,scissor:ye,viewport:Se,reset:je}}function tv(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,S){return _?new OffscreenCanvas(P,S):da("canvas")}function y(P,S,Z,ee){let se=1;if((P.width>ee||P.height>ee)&&(se=ee/Math.max(P.width,P.height)),se<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const re=S?Zl:Math.floor,Te=re(se*P.width),L=re(se*P.height);f===void 0&&(f=b(Te,L));const N=Z?b(Te,L):f;return N.width=Te,N.height=L,N.getContext("2d").drawImage(P,0,0,Te,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Te+"x"+L+")."),N}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return Uu(P.width)&&Uu(P.height)}function v(P){return s?!1:P.wrapS!==jn||P.wrapT!==jn||P.minFilter!==en&&P.minFilter!==Fn}function A(P,S){return P.generateMipmaps&&S&&P.minFilter!==en&&P.minFilter!==Fn}function E(P){o.generateMipmap(P)}function x(P,S,Z,ee,se=!1){if(s===!1)return S;if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=S;return S===6403&&(Z===5126&&(re=33326),Z===5131&&(re=33325),Z===5121&&(re=33321)),S===33319&&(Z===5126&&(re=33328),Z===5131&&(re=33327),Z===5121&&(re=33323)),S===6408&&(Z===5126&&(re=34836),Z===5131&&(re=34842),Z===5121&&(re=ee===ht&&se===!1?35907:32856),Z===32819&&(re=32854),Z===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function w(P,S,Z){return A(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function D(P){return P===en||P===pu||P===Yo?9728:9729}function U(P){const S=P.target;S.removeEventListener("dispose",U),O(S),S.isVideoTexture&&g.delete(S)}function k(P){const S=P.target;S.removeEventListener("dispose",k),G(S)}function O(P){const S=n.get(P);if(S.__webglInit===void 0)return;const Z=P.source,ee=m.get(Z);if(ee){const se=ee[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&I(P),Object.keys(ee).length===0&&m.delete(Z)}n.remove(P)}function I(P){const S=n.get(P);o.deleteTexture(S.__webglTexture);const Z=P.source,ee=m.get(Z);delete ee[S.__cacheKey],a.memory.textures--}function G(P){const S=P.texture,Z=n.get(P),ee=n.get(S);if(ee.__webglTexture!==void 0&&(o.deleteTexture(ee.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)o.deleteFramebuffer(Z.__webglFramebuffer[se]),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer[se]);else{if(o.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let se=0;se<Z.__webglColorRenderbuffer.length;se++)Z.__webglColorRenderbuffer[se]&&o.deleteRenderbuffer(Z.__webglColorRenderbuffer[se]);Z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let se=0,re=S.length;se<re;se++){const Te=n.get(S[se]);Te.__webglTexture&&(o.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(S[se])}n.remove(S),n.remove(P)}let J=0;function Y(){J=0}function V(){const P=J;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),J+=1,P}function Q(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.encoding),S.join()}function C(P,S){const Z=n.get(P);if(P.isVideoTexture&&vt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(Z,P,S);return}}t.bindTexture(3553,Z.__webglTexture,33984+S)}function B(P,S){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){fe(Z,P,S);return}t.bindTexture(35866,Z.__webglTexture,33984+S)}function $(P,S){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){fe(Z,P,S);return}t.bindTexture(32879,Z.__webglTexture,33984+S)}function ie(P,S){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){Me(Z,P,S);return}t.bindTexture(34067,Z.__webglTexture,33984+S)}const te={[Yl]:10497,[jn]:33071,[$l]:33648},ae={[en]:9728,[pu]:9984,[Yo]:9986,[Fn]:9729,[Hp]:9985,[ca]:9987};function j(P,S,Z){if(Z?(o.texParameteri(P,10242,te[S.wrapS]),o.texParameteri(P,10243,te[S.wrapT]),(P===32879||P===35866)&&o.texParameteri(P,32882,te[S.wrapR]),o.texParameteri(P,10240,ae[S.magFilter]),o.texParameteri(P,10241,ae[S.minFilter])):(o.texParameteri(P,10242,33071),o.texParameteri(P,10243,33071),(P===32879||P===35866)&&o.texParameteri(P,32882,33071),(S.wrapS!==jn||S.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(P,10240,D(S.magFilter)),o.texParameteri(P,10241,D(S.minFilter)),S.minFilter!==en&&S.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===en||S.minFilter!==Yo&&S.minFilter!==ca||S.type===or&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===ua&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ae(P,S){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",U));const ee=S.source;let se=m.get(ee);se===void 0&&(se={},m.set(ee,se));const re=Q(S);if(re!==P.__cacheKey){se[re]===void 0&&(se[re]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),se[re].usedTimes++;const Te=se[P.__cacheKey];Te!==void 0&&(se[P.__cacheKey].usedTimes--,Te.usedTimes===0&&I(S)),P.__cacheKey=re,P.__webglTexture=se[re].texture}return Z}function fe(P,S,Z){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);const se=Ae(P,S),re=S.source;t.bindTexture(ee,P.__webglTexture,33984+Z);const Te=n.get(re);if(re.version!==Te.__version||se===!0){t.activeTexture(33984+Z),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const L=v(S)&&M(S.image)===!1;let N=y(S.image,L,!1,u);N=Qe(S,N);const pe=M(N)||s,oe=r.convert(S.format,S.encoding);let me=r.convert(S.type),ye=x(S.internalFormat,oe,me,S.encoding,S.isVideoTexture);j(ee,S,pe);let Se;const Be=S.mipmaps,Ue=s&&S.isVideoTexture!==!0,je=Te.__version===void 0||se===!0,R=w(S,N,pe);if(S.isDepthTexture)ye=6402,s?S.type===or?ye=36012:S.type===ar?ye=33190:S.type===ls?ye=35056:ye=33189:S.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ur&&ye===6402&&S.type!==dd&&S.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ar,me=r.convert(S.type)),S.format===_s&&ye===6402&&(ye=34041,S.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ls,me=r.convert(S.type))),je&&(Ue?t.texStorage2D(3553,1,ye,N.width,N.height):t.texImage2D(3553,0,ye,N.width,N.height,0,oe,me,null));else if(S.isDataTexture)if(Be.length>0&&pe){Ue&&je&&t.texStorage2D(3553,R,ye,Be[0].width,Be[0].height);for(let K=0,ne=Be.length;K<ne;K++)Se=Be[K],Ue?t.texSubImage2D(3553,K,0,0,Se.width,Se.height,oe,me,Se.data):t.texImage2D(3553,K,ye,Se.width,Se.height,0,oe,me,Se.data);S.generateMipmaps=!1}else Ue?(je&&t.texStorage2D(3553,R,ye,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,oe,me,N.data)):t.texImage2D(3553,0,ye,N.width,N.height,0,oe,me,N.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&je&&t.texStorage3D(35866,R,ye,Be[0].width,Be[0].height,N.depth);for(let K=0,ne=Be.length;K<ne;K++)Se=Be[K],S.format!==Zn?oe!==null?Ue?t.compressedTexSubImage3D(35866,K,0,0,0,Se.width,Se.height,N.depth,oe,Se.data,0,0):t.compressedTexImage3D(35866,K,ye,Se.width,Se.height,N.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,K,0,0,0,Se.width,Se.height,N.depth,oe,me,Se.data):t.texImage3D(35866,K,ye,Se.width,Se.height,N.depth,0,oe,me,Se.data)}else{Ue&&je&&t.texStorage2D(3553,R,ye,Be[0].width,Be[0].height);for(let K=0,ne=Be.length;K<ne;K++)Se=Be[K],S.format!==Zn?oe!==null?Ue?t.compressedTexSubImage2D(3553,K,0,0,Se.width,Se.height,oe,Se.data):t.compressedTexImage2D(3553,K,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,K,0,0,Se.width,Se.height,oe,me,Se.data):t.texImage2D(3553,K,ye,Se.width,Se.height,0,oe,me,Se.data)}else if(S.isDataArrayTexture)Ue?(je&&t.texStorage3D(35866,R,ye,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,oe,me,N.data)):t.texImage3D(35866,0,ye,N.width,N.height,N.depth,0,oe,me,N.data);else if(S.isData3DTexture)Ue?(je&&t.texStorage3D(32879,R,ye,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,oe,me,N.data)):t.texImage3D(32879,0,ye,N.width,N.height,N.depth,0,oe,me,N.data);else if(S.isFramebufferTexture){if(je)if(Ue)t.texStorage2D(3553,R,ye,N.width,N.height);else{let K=N.width,ne=N.height;for(let ce=0;ce<R;ce++)t.texImage2D(3553,ce,ye,K,ne,0,oe,me,null),K>>=1,ne>>=1}}else if(Be.length>0&&pe){Ue&&je&&t.texStorage2D(3553,R,ye,Be[0].width,Be[0].height);for(let K=0,ne=Be.length;K<ne;K++)Se=Be[K],Ue?t.texSubImage2D(3553,K,0,0,oe,me,Se):t.texImage2D(3553,K,ye,oe,me,Se);S.generateMipmaps=!1}else Ue?(je&&t.texStorage2D(3553,R,ye,N.width,N.height),t.texSubImage2D(3553,0,0,0,oe,me,N)):t.texImage2D(3553,0,ye,oe,me,N);A(S,pe)&&E(ee),Te.__version=re.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Me(P,S,Z){if(S.image.length!==6)return;const ee=Ae(P,S),se=S.source;t.bindTexture(34067,P.__webglTexture,33984+Z);const re=n.get(se);if(se.version!==re.__version||ee===!0){t.activeTexture(33984+Z),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,N=[];for(let K=0;K<6;K++)!Te&&!L?N[K]=y(S.image[K],!1,!0,c):N[K]=L?S.image[K].image:S.image[K],N[K]=Qe(S,N[K]);const pe=N[0],oe=M(pe)||s,me=r.convert(S.format,S.encoding),ye=r.convert(S.type),Se=x(S.internalFormat,me,ye,S.encoding),Be=s&&S.isVideoTexture!==!0,Ue=re.__version===void 0||ee===!0;let je=w(S,pe,oe);j(34067,S,oe);let R;if(Te){Be&&Ue&&t.texStorage2D(34067,je,Se,pe.width,pe.height);for(let K=0;K<6;K++){R=N[K].mipmaps;for(let ne=0;ne<R.length;ne++){const ce=R[ne];S.format!==Zn?me!==null?Be?t.compressedTexSubImage2D(34069+K,ne,0,0,ce.width,ce.height,me,ce.data):t.compressedTexImage2D(34069+K,ne,Se,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+K,ne,0,0,ce.width,ce.height,me,ye,ce.data):t.texImage2D(34069+K,ne,Se,ce.width,ce.height,0,me,ye,ce.data)}}}else{R=S.mipmaps,Be&&Ue&&(R.length>0&&je++,t.texStorage2D(34067,je,Se,N[0].width,N[0].height));for(let K=0;K<6;K++)if(L){Be?t.texSubImage2D(34069+K,0,0,0,N[K].width,N[K].height,me,ye,N[K].data):t.texImage2D(34069+K,0,Se,N[K].width,N[K].height,0,me,ye,N[K].data);for(let ne=0;ne<R.length;ne++){const xe=R[ne].image[K].image;Be?t.texSubImage2D(34069+K,ne+1,0,0,xe.width,xe.height,me,ye,xe.data):t.texImage2D(34069+K,ne+1,Se,xe.width,xe.height,0,me,ye,xe.data)}}else{Be?t.texSubImage2D(34069+K,0,0,0,me,ye,N[K]):t.texImage2D(34069+K,0,Se,me,ye,N[K]);for(let ne=0;ne<R.length;ne++){const ce=R[ne];Be?t.texSubImage2D(34069+K,ne+1,0,0,me,ye,ce.image[K]):t.texImage2D(34069+K,ne+1,Se,me,ye,ce.image[K])}}}A(S,oe)&&E(34067),re.__version=se.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ge(P,S,Z,ee,se){const re=r.convert(Z.format,Z.encoding),Te=r.convert(Z.type),L=x(Z.internalFormat,re,Te,Z.encoding);n.get(S).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,L,S.width,S.height,S.depth,0,re,Te,null):t.texImage2D(se,0,L,S.width,S.height,0,re,Te,null)),t.bindFramebuffer(36160,P),Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,ee,se,n.get(Z).__webglTexture,0,Je(S)):(se===3553||se>=34069&&se<=34074)&&o.framebufferTexture2D(36160,ee,se,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(P,S,Z){if(o.bindRenderbuffer(36161,P),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(Z||Ve(S)){const se=S.depthTexture;se&&se.isDepthTexture&&(se.type===or?ee=36012:se.type===ar&&(ee=33190));const re=Je(S);Ve(S)?d.renderbufferStorageMultisampleEXT(36161,re,ee,S.width,S.height):o.renderbufferStorageMultisample(36161,re,ee,S.width,S.height)}else o.renderbufferStorage(36161,ee,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,P)}else if(S.depthBuffer&&S.stencilBuffer){const ee=Je(S);Z&&Ve(S)===!1?o.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):Ve(S)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,P)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let se=0;se<ee.length;se++){const re=ee[se],Te=r.convert(re.format,re.encoding),L=r.convert(re.type),N=x(re.internalFormat,Te,L,re.encoding),pe=Je(S);Z&&Ve(S)===!1?o.renderbufferStorageMultisample(36161,pe,N,S.width,S.height):Ve(S)?d.renderbufferStorageMultisampleEXT(36161,pe,N,S.width,S.height):o.renderbufferStorage(36161,N,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function Le(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),C(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,se=Je(S);if(S.depthTexture.format===ur)Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,se):o.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===_s)Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,se):o.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function le(P){const S=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Le(S.__webglFramebuffer,P)}else if(Z){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=o.createRenderbuffer(),Ie(S.__webglDepthbuffer[ee],P,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ie(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function Ge(P,S,Z){const ee=n.get(P);S!==void 0&&ge(ee.__webglFramebuffer,P,P.texture,36064,3553),Z!==void 0&&le(P)}function nt(P){const S=P.texture,Z=n.get(P),ee=n.get(S);P.addEventListener("dispose",k),P.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture()),ee.__version=S.version,a.memory.textures++);const se=P.isWebGLCubeRenderTarget===!0,re=P.isWebGLMultipleRenderTargets===!0,Te=M(P)||s;if(se){Z.__webglFramebuffer=[];for(let L=0;L<6;L++)Z.__webglFramebuffer[L]=o.createFramebuffer()}else{if(Z.__webglFramebuffer=o.createFramebuffer(),re)if(i.drawBuffers){const L=P.texture;for(let N=0,pe=L.length;N<pe;N++){const oe=n.get(L[N]);oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&P.samples>0&&Ve(P)===!1){const L=re?S:[S];Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let N=0;N<L.length;N++){const pe=L[N];Z.__webglColorRenderbuffer[N]=o.createRenderbuffer(),o.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[N]);const oe=r.convert(pe.format,pe.encoding),me=r.convert(pe.type),ye=x(pe.internalFormat,oe,me,pe.encoding,P.isXRRenderTarget===!0),Se=Je(P);o.renderbufferStorageMultisample(36161,Se,ye,P.width,P.height),o.framebufferRenderbuffer(36160,36064+N,36161,Z.__webglColorRenderbuffer[N])}o.bindRenderbuffer(36161,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ie(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ee.__webglTexture),j(34067,S,Te);for(let L=0;L<6;L++)ge(Z.__webglFramebuffer[L],P,S,36064,34069+L);A(S,Te)&&E(34067),t.unbindTexture()}else if(re){const L=P.texture;for(let N=0,pe=L.length;N<pe;N++){const oe=L[N],me=n.get(oe);t.bindTexture(3553,me.__webglTexture),j(3553,oe,Te),ge(Z.__webglFramebuffer,P,oe,36064+N,3553),A(oe,Te)&&E(3553)}t.unbindTexture()}else{let L=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(s?L=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ee.__webglTexture),j(L,S,Te),ge(Z.__webglFramebuffer,P,S,36064,L),A(S,Te)&&E(L),t.unbindTexture()}P.depthBuffer&&le(P)}function it(P){const S=M(P)||s,Z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ee=0,se=Z.length;ee<se;ee++){const re=Z[ee];if(A(re,S)){const Te=P.isWebGLCubeRenderTarget?34067:3553,L=n.get(re).__webglTexture;t.bindTexture(Te,L),E(Te),t.unbindTexture()}}}function H(P){if(s&&P.samples>0&&Ve(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Z=P.width,ee=P.height;let se=16384;const re=[],Te=P.stencilBuffer?33306:36096,L=n.get(P),N=P.isWebGLMultipleRenderTargets===!0;if(N)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){re.push(36064+pe),P.depthBuffer&&re.push(Te);const oe=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(oe===!1&&(P.depthBuffer&&(se|=256),P.stencilBuffer&&(se|=1024)),N&&o.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[pe]),oe===!0&&(o.invalidateFramebuffer(36008,[Te]),o.invalidateFramebuffer(36009,[Te])),N){const me=n.get(S[pe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,me,0)}o.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,se,9728),p&&o.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),N)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pe,36161,L.__webglColorRenderbuffer[pe]);const oe=n.get(S[pe]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pe,3553,oe,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Je(P){return Math.min(h,P.samples)}function Ve(P){const S=n.get(P);return s&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function vt(P){const S=a.render.frame;g.get(P)!==S&&(g.set(P,S),P.update())}function Qe(P,S){const Z=P.encoding,ee=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===jl||Z!==Mr&&(Z===ht?s===!1?e.has("EXT_sRGB")===!0&&ee===Zn?(P.format=jl,P.minFilter=Fn,P.generateMipmaps=!1):S=md.sRGBToLinear(S):(ee!==Zn||se!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),S}this.allocateTextureUnit=V,this.resetTextureUnits=Y,this.setTexture2D=C,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=Ge,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ve}function nv(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===br)return 5121;if(r===Yp)return 32819;if(r===$p)return 32820;if(r===Wp)return 5120;if(r===Xp)return 5122;if(r===dd)return 5123;if(r===qp)return 5124;if(r===ar)return 5125;if(r===or)return 5126;if(r===ua)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===jp)return 6406;if(r===Zn)return 6408;if(r===Kp)return 6409;if(r===Jp)return 6410;if(r===ur)return 6402;if(r===_s)return 34041;if(r===Zp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===jl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Qp)return 6403;if(r===em)return 36244;if(r===tm)return 33319;if(r===nm)return 33320;if(r===im)return 36249;if(r===$o||r===jo||r===Zo||r===Ko)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mu||r===gu||r===_u||r===xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_u)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rm)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vu||r===yu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===vu)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===yu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bu||r===Mu||r===Su||r===wu||r===Tu||r===Eu||r===Au||r===Cu||r===Pu||r===Lu||r===Du||r===Ru||r===Iu||r===Ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===bu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Su)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Eu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Au)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Du)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ru)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Iu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ou)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Fu)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ls?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class iv extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $a extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const f of e.hand.values()){const m=t.getJointPose(f,n),_=this._getHandJoint(c,f);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $a;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sv extends ln{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:ur,u!==ur&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ur&&(n=ar),n===void 0&&u===_s&&(n=ls),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1}}class av extends Ir{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,h=null,d=null,p=null;const g=t.getContextAttributes();let f=null,m=null;const _=[],b=[],y=new Set,M=new Map,v=new Tn;v.layers.enable(1),v.viewport=new kt;const A=new Tn;A.layers.enable(2),A.viewport=new kt;const E=[v,A],x=new iv;x.layers.enable(1),x.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let $=_[B];return $===void 0&&($=new wl,_[B]=$),$.getTargetRaySpace()},this.getControllerGrip=function(B){let $=_[B];return $===void 0&&($=new wl,_[B]=$),$.getGripSpace()},this.getHand=function(B){let $=_[B];return $===void 0&&($=new wl,_[B]=$),$.getHandSpace()};function U(B){const $=b.indexOf(B.inputSource);if($===-1)return;const ie=_[$];ie!==void 0&&ie.dispatchEvent({type:B.type,data:B.inputSource})}function k(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",O);for(let B=0;B<_.length;B++){const $=b[B];$!==null&&(b[B]=null,_[B].disconnect($))}w=null,D=null,e.setRenderTarget(f),d=null,h=null,u=null,i=null,m=null,C.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",k),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),m=new Sr(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:br,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let $=null,ie=null,te=null;g.depth&&(te=g.stencil?35056:33190,$=g.stencil?_s:ur,ie=g.stencil?ls:ar);const ae={colorFormat:32856,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ae),i.updateRenderState({layers:[h]}),m=new Sr(h.textureWidth,h.textureHeight,{format:Zn,type:br,depthTexture:new sv(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const j=e.properties.get(m);j.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),C.setContext(i),C.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(B){for(let $=0;$<B.removed.length;$++){const ie=B.removed[$],te=b.indexOf(ie);te>=0&&(b[te]=null,_[te].disconnect(ie))}for(let $=0;$<B.added.length;$++){const ie=B.added[$];let te=b.indexOf(ie);if(te===-1){for(let j=0;j<_.length;j++)if(j>=b.length){b.push(ie),te=j;break}else if(b[j]===null){b[j]=ie,te=j;break}if(te===-1)break}const ae=_[te];ae&&ae.connect(ie)}}const I=new W,G=new W;function J(B,$,ie){I.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(ie.matrixWorld);const te=I.distanceTo(G),ae=$.projectionMatrix.elements,j=ie.projectionMatrix.elements,Ae=ae[14]/(ae[10]-1),fe=ae[14]/(ae[10]+1),Me=(ae[9]+1)/ae[5],ge=(ae[9]-1)/ae[5],Ie=(ae[8]-1)/ae[0],Le=(j[8]+1)/j[0],le=Ae*Ie,Ge=Ae*Le,nt=te/(-Ie+Le),it=nt*-Ie;$.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(it),B.translateZ(nt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const H=Ae+nt,Je=fe+nt,Ve=le-it,vt=Ge+(te-it),Qe=Me*fe/Je*H,P=ge*fe/Je*H;B.projectionMatrix.makePerspective(Ve,vt,Qe,P,H,Je)}function Y(B,$){$===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices($.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;x.near=A.near=v.near=B.near,x.far=A.far=v.far=B.far,(w!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,D=x.far);const $=B.parent,ie=x.cameras;Y(x,$);for(let ae=0;ae<ie.length;ae++)Y(ie[ae],$);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),B.matrix.copy(x.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const te=B.children;for(let ae=0,j=te.length;ae<j;ae++)te[ae].updateMatrixWorld(!0);ie.length===2?J(x,v,A):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(B){h!==null&&(h.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.getPlanes=function(){return y};let V=null;function Q(B,$){if(c=$.getViewerPose(l||a),p=$,c!==null){const ie=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let te=!1;ie.length!==x.cameras.length&&(x.cameras.length=0,te=!0);for(let ae=0;ae<ie.length;ae++){const j=ie[ae];let Ae=null;if(d!==null)Ae=d.getViewport(j);else{const Me=u.getViewSubImage(h,j);Ae=Me.viewport,ae===0&&(e.setRenderTargetTextures(m,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(m))}let fe=E[ae];fe===void 0&&(fe=new Tn,fe.layers.enable(ae),fe.viewport=new kt,E[ae]=fe),fe.matrix.fromArray(j.transform.matrix),fe.projectionMatrix.fromArray(j.projectionMatrix),fe.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ae===0&&x.matrix.copy(fe.matrix),te===!0&&x.cameras.push(fe)}}for(let ie=0;ie<_.length;ie++){const te=b[ie],ae=_[ie];te!==null&&ae!==void 0&&ae.update(te,$,l||a)}if(V&&V(B,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ie=null;for(const te of y)$.detectedPlanes.has(te)||(ie===null&&(ie=[]),ie.push(te));if(ie!==null)for(const te of ie)y.delete(te),M.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of $.detectedPlanes)if(!y.has(te))y.add(te),M.set(te,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const ae=M.get(te);te.lastChangedTime>ae&&(M.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}p=null}const C=new Ad;C.setAnimationLoop(Q),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}function ov(o,e){function t(f,m){m.color.getRGB(f.fogColor.value,Sd(o)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function n(f,m,_,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(f,m):m.isMeshToonMaterial?(i(f,m),u(f,m)):m.isMeshPhongMaterial?(i(f,m),c(f,m)):m.isMeshStandardMaterial?(i(f,m),h(f,m),m.isMeshPhysicalMaterial&&d(f,m,y)):m.isMeshMatcapMaterial?(i(f,m),p(f,m)):m.isMeshDepthMaterial?i(f,m):m.isMeshDistanceMaterial?(i(f,m),g(f,m)):m.isMeshNormalMaterial?i(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?s(f,m,_,b):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Gn&&(f.bumpScale.value*=-1)),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Gn&&f.normalScale.value.negate()),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*M}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uv2Transform.value.copy(y.matrix))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function s(f,m,_,b){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=b*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,_){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Gn&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function lv(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(b,y){const M=y.program;n.uniformBlockBinding(b,M)}function c(b,y){let M=i[b.id];M===void 0&&(g(b),M=u(b),i[b.id]=M,b.addEventListener("dispose",m));const v=y.program;n.updateUBOMapping(b,v);const A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function u(b){const y=h();b.__bindingPointIndex=y;const M=o.createBuffer(),v=b.__size,A=b.usage;return o.bindBuffer(35345,M),o.bufferData(35345,v,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,M),M}function h(){for(let b=0;b<s;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=i[b.id],M=b.uniforms,v=b.__cache;o.bindBuffer(35345,y);for(let A=0,E=M.length;A<E;A++){const x=M[A];if(p(x,A,v)===!0){const w=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let U=0;for(let k=0;k<D.length;k++){const O=D[k],I=f(O);typeof O=="number"?(x.__data[0]=O,o.bufferSubData(35345,w+U,x.__data)):O.isMatrix3?(x.__data[0]=O.elements[0],x.__data[1]=O.elements[1],x.__data[2]=O.elements[2],x.__data[3]=O.elements[0],x.__data[4]=O.elements[3],x.__data[5]=O.elements[4],x.__data[6]=O.elements[5],x.__data[7]=O.elements[0],x.__data[8]=O.elements[6],x.__data[9]=O.elements[7],x.__data[10]=O.elements[8],x.__data[11]=O.elements[0]):(O.toArray(x.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,x.__data)}}o.bindBuffer(35345,null)}function p(b,y,M){const v=b.value;if(M[y]===void 0){if(typeof v=="number")M[y]=v;else{const A=Array.isArray(v)?v:[v],E=[];for(let x=0;x<A.length;x++)E.push(A[x].clone());M[y]=E}return!0}else if(typeof v=="number"){if(M[y]!==v)return M[y]=v,!0}else{const A=Array.isArray(M[y])?M[y]:[M[y]],E=Array.isArray(v)?v:[v];for(let x=0;x<A.length;x++){const w=A[x];if(w.equals(E[x])===!1)return w.copy(E[x]),!0}}return!1}function g(b){const y=b.uniforms;let M=0;const v=16;let A=0;for(let E=0,x=y.length;E<x;E++){const w=y[E],D={boundary:0,storage:0},U=Array.isArray(w.value)?w.value:[w.value];for(let k=0,O=U.length;k<O;k++){const I=U[k],G=f(I);D.boundary+=G.boundary,D.storage+=G.storage}if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,E>0){A=M%v;const k=v-A;A!==0&&k-D.boundary<0&&(M+=v-A,w.__offset=M)}M+=D.storage}return A=M%v,A>0&&(M+=v-A),b.__size=M,b.__cache={},this}function f(b){const y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const b in i)o.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function cv(){const o=da("canvas");return o.style.display="block",o}function Lc(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:cv(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mr,this.physicallyCorrectLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const f=this;let m=!1,_=0,b=0,y=null,M=-1,v=null;const A=new kt,E=new kt;let x=null,w=e.width,D=e.height,U=1,k=null,O=null;const I=new kt(0,0,w,D),G=new kt(0,0,w,D);let J=!1;const Y=new Ed;let V=!1,Q=!1,C=null;const B=new Ft,$=new Ze,ie=new W,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return y===null?U:1}let j=t;function Ae(T,F){for(let X=0;X<T.length;X++){const z=T[X],q=e.getContext(z,F);if(q!==null)return q}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",Be,!1),j===null){const F=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&F.shift(),j=Ae(F,T),j===null)throw Ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,Me,ge,Ie,Le,le,Ge,nt,it,H,Je,Ve,vt,Qe,P,S,Z,ee,se,re,Te,L,N,pe;function oe(){fe=new y0(j),Me=new f0(j,fe,o),fe.init(Me),L=new nv(j,fe,Me),ge=new ev(j,fe,Me),Ie=new S0,Le=new Bx,le=new tv(j,fe,ge,Le,Me,L,Ie),Ge=new m0(f),nt=new v0(f),it=new Dm(j,Me),N=new h0(j,fe,it,Me),H=new b0(j,it,Ie,N),Je=new A0(j,H,it,Ie),se=new E0(j,Me,le),S=new p0(Le),Ve=new Ux(f,Ge,nt,fe,Me,N,S),vt=new ov(f,Le),Qe=new Vx,P=new $x(fe,Me),ee=new u0(f,Ge,nt,ge,Je,u,a),Z=new Qx(f,Je,Me),pe=new lv(j,Ie,Me,ge),re=new d0(j,fe,Ie,Me),Te=new M0(j,fe,Ie,Me),Ie.programs=Ve.programs,f.capabilities=Me,f.extensions=fe,f.properties=Le,f.renderLists=Qe,f.shadowMap=Z,f.state=ge,f.info=Ie}oe();const me=new av(f,j);this.xr=me,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(w,D,!1))},this.getSize=function(T){return T.set(w,D)},this.setSize=function(T,F,X){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,D=F,e.width=Math.floor(T*U),e.height=Math.floor(F*U),X!==!1&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(w*U,D*U).floor()},this.setDrawingBufferSize=function(T,F,X){w=T,D=F,U=X,e.width=Math.floor(T*X),e.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,F,X,z){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,F,X,z),ge.viewport(A.copy(I).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(G)},this.setScissor=function(T,F,X,z){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,F,X,z),ge.scissor(E.copy(G).multiplyScalar(U).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){ge.setScissorTest(J=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,F=!0,X=!0){let z=0;T&&(z|=16384),F&&(z|=256),X&&(z|=1024),j.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Be,!1),Qe.dispose(),P.dispose(),Le.dispose(),Ge.dispose(),nt.dispose(),Je.dispose(),N.dispose(),pe.dispose(),Ve.dispose(),me.dispose(),me.removeEventListener("sessionstart",ce),me.removeEventListener("sessionend",xe),C&&(C.dispose(),C=null),We.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=Ie.autoReset,F=Z.enabled,X=Z.autoUpdate,z=Z.needsUpdate,q=Z.type;oe(),Ie.autoReset=T,Z.enabled=F,Z.autoUpdate=X,Z.needsUpdate=z,Z.type=q}function Be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const F=T.target;F.removeEventListener("dispose",Ue),je(F)}function je(T){R(T),Le.remove(T)}function R(T){const F=Le.get(T).programs;F!==void 0&&(F.forEach(function(X){Ve.releaseProgram(X)}),T.isShaderMaterial&&Ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,z,q,de){F===null&&(F=te);const _e=q.isMesh&&q.matrixWorld.determinant()<0,Re=ke(T,F,X,z,q);ge.setMaterial(z,_e);let we=X.index,Oe=1;z.wireframe===!0&&(we=H.getWireframeAttribute(X),Oe=2);const ze=X.drawRange,De=X.attributes.position;let Xe=ze.start*Oe,st=(ze.start+ze.count)*Oe;de!==null&&(Xe=Math.max(Xe,de.start*Oe),st=Math.min(st,(de.start+de.count)*Oe)),we!==null?(Xe=Math.max(Xe,0),st=Math.min(st,we.count)):De!=null&&(Xe=Math.max(Xe,0),st=Math.min(st,De.count));const Nt=st-Xe;if(Nt<0||Nt===1/0)return;N.setup(q,z,Re,X,we);let Rn,Ye=re;if(we!==null&&(Rn=it.get(we),Ye=Te,Ye.setIndex(Rn)),q.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*ae()),Ye.setMode(1)):Ye.setMode(4);else if(q.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),ge.setLineWidth(Ce*ae()),q.isLineSegments?Ye.setMode(1):q.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else q.isPoints?Ye.setMode(0):q.isSprite&&Ye.setMode(4);if(q.isInstancedMesh)Ye.renderInstances(Xe,Nt,q.count);else if(X.isInstancedBufferGeometry){const Ce=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,sn=Math.min(X.instanceCount,Ce);Ye.renderInstances(Xe,Nt,sn)}else Ye.render(Xe,Nt)},this.compile=function(T,F){function X(z,q,de){z.transparent===!0&&z.side===Ca?(z.side=Gn,z.needsUpdate=!0,Ne(z,q,de),z.side=yr,z.needsUpdate=!0,Ne(z,q,de),z.side=Ca):Ne(z,q,de)}d=P.get(T),d.init(),g.push(d),T.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(f.physicallyCorrectLights),T.traverse(function(z){const q=z.material;if(q)if(Array.isArray(q))for(let de=0;de<q.length;de++){const _e=q[de];X(_e,T,z)}else X(q,T,z)}),g.pop(),d=null};let K=null;function ne(T){K&&K(T)}function ce(){We.stop()}function xe(){We.start()}const We=new Ad;We.setAnimationLoop(ne),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(T){K=T,me.setAnimationLoop(T),T===null?We.stop():We.start()},me.addEventListener("sessionstart",ce),me.addEventListener("sessionend",xe),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,F,y),d=P.get(T,g.length),d.init(),g.push(d),B.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(B),Q=this.localClippingEnabled,V=S.init(this.clippingPlanes,Q,F),h=Qe.get(T,p.length),h.init(),p.push(h),ut(T,F,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(k,O),V===!0&&S.beginShadows();const X=d.state.shadowsArray;if(Z.render(X,T,F),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,T),d.setupLights(f.physicallyCorrectLights),F.isArrayCamera){const z=F.cameras;for(let q=0,de=z.length;q<de;q++){const _e=z[q];lt(h,T,_e,_e.viewport)}}else lt(h,T,F);y!==null&&(le.updateMultisampleRenderTarget(y),le.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(f,T,F),N.resetDefaultState(),M=-1,v=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function ut(T,F,X,z){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){z&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const _e=Je.update(T),Re=T.material;Re.visible&&h.push(T,_e,Re,X,ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ie.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ie.render.frame),!T.frustumCulled||Y.intersectsObject(T))){z&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const _e=Je.update(T),Re=T.material;if(Array.isArray(Re)){const we=_e.groups;for(let Oe=0,ze=we.length;Oe<ze;Oe++){const De=we[Oe],Xe=Re[De.materialIndex];Xe&&Xe.visible&&h.push(T,_e,Xe,X,ie.z,De)}}else Re.visible&&h.push(T,_e,Re,X,ie.z,null)}}const de=T.children;for(let _e=0,Re=de.length;_e<Re;_e++)ut(de[_e],F,X,z)}function lt(T,F,X,z){const q=T.opaque,de=T.transmissive,_e=T.transparent;d.setupLightsView(X),de.length>0&&gn(q,F,X),z&&ge.viewport(A.copy(z)),q.length>0&&ve(q,F,X),de.length>0&&ve(de,F,X),_e.length>0&&ve(_e,F,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function gn(T,F,X){const z=Me.isWebGL2;C===null&&(C=new Sr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?ua:br,minFilter:ca,samples:z&&r===!0?4:0})),f.getDrawingBufferSize($),z?C.setSize($.x,$.y):C.setSize(Zl($.x),Zl($.y));const q=f.getRenderTarget();f.setRenderTarget(C),f.clear();const de=f.toneMapping;f.toneMapping=Mi,ve(T,F,X),f.toneMapping=de,le.updateMultisampleRenderTarget(C),le.updateRenderTargetMipmap(C),f.setRenderTarget(q)}function ve(T,F,X){const z=F.isScene===!0?F.overrideMaterial:null;for(let q=0,de=T.length;q<de;q++){const _e=T[q],Re=_e.object,we=_e.geometry,Oe=z===null?_e.material:z,ze=_e.group;Re.layers.test(X.layers)&&Ee(Re,F,X,we,Oe,ze)}}function Ee(T,F,X,z,q,de){T.onBeforeRender(f,F,X,z,q,de),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(f,F,X,z,T,de),q.transparent===!0&&q.side===Ca?(q.side=Gn,q.needsUpdate=!0,f.renderBufferDirect(X,F,z,q,T,de),q.side=yr,q.needsUpdate=!0,f.renderBufferDirect(X,F,z,q,T,de),q.side=Ca):f.renderBufferDirect(X,F,z,q,T,de),T.onAfterRender(f,F,X,z,q,de)}function Ne(T,F,X){F.isScene!==!0&&(F=te);const z=Le.get(T),q=d.state.lights,de=d.state.shadowsArray,_e=q.state.version,Re=Ve.getParameters(T,q.state,de,F,X),we=Ve.getProgramCacheKey(Re);let Oe=z.programs;z.environment=T.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(T.isMeshStandardMaterial?nt:Ge).get(T.envMap||z.environment),Oe===void 0&&(T.addEventListener("dispose",Ue),Oe=new Map,z.programs=Oe);let ze=Oe.get(we);if(ze!==void 0){if(z.currentProgram===ze&&z.lightsStateVersion===_e)return he(T,Re),ze}else Re.uniforms=Ve.getUniforms(T),T.onBuild(X,Re,f),T.onBeforeCompile(Re,f),ze=Ve.acquireProgram(Re,we),Oe.set(we,ze),z.uniforms=Re.uniforms;const De=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=S.uniform),he(T,Re),z.needsLights=Fe(T),z.lightsStateVersion=_e,z.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMap.value=q.state.directionalShadowMap,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotShadowMap.value=q.state.spotShadowMap,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMap.value=q.state.pointShadowMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix);const Xe=ze.getUniforms(),st=ho.seqWithValue(Xe.seq,De);return z.currentProgram=ze,z.uniformsList=st,ze}function he(T,F){const X=Le.get(T);X.outputEncoding=F.outputEncoding,X.instancing=F.instancing,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function ke(T,F,X,z,q){F.isScene!==!0&&(F=te),le.resetTextureUnits();const de=F.fog,_e=z.isMeshStandardMaterial?F.environment:null,Re=y===null?f.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Mr,we=(z.isMeshStandardMaterial?nt:Ge).get(z.envMap||_e),Oe=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!z.normalMap&&!!X.attributes.tangent,De=!!X.morphAttributes.position,Xe=!!X.morphAttributes.normal,st=!!X.morphAttributes.color,Nt=z.toneMapped?f.toneMapping:Mi,Rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ye=Rn!==void 0?Rn.length:0,Ce=Le.get(z),sn=d.state.lights;if(V===!0&&(Q===!0||T!==v)){const xn=T===v&&z.id===M;S.setState(z,T,xn)}let _t=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==sn.state.version||Ce.outputEncoding!==Re||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==we||z.fog===!0&&Ce.fog!==de||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==S.numPlanes||Ce.numIntersection!==S.numIntersection)||Ce.vertexAlphas!==Oe||Ce.vertexTangents!==ze||Ce.morphTargets!==De||Ce.morphNormals!==Xe||Ce.morphColors!==st||Ce.toneMapping!==Nt||Me.isWebGL2===!0&&Ce.morphTargetsCount!==Ye)&&(_t=!0):(_t=!0,Ce.__version=z.version);let Kn=Ce.currentProgram;_t===!0&&(Kn=Ne(z,F,q));let Ci=!1,Bt=!1,hi=!1;const Mt=Kn.getUniforms(),_n=Ce.uniforms;if(ge.useProgram(Kn.program)&&(Ci=!0,Bt=!0,hi=!0),z.id!==M&&(M=z.id,Bt=!0),Ci||v!==T){if(Mt.setValue(j,"projectionMatrix",T.projectionMatrix),Me.logarithmicDepthBuffer&&Mt.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),v!==T&&(v=T,Bt=!0,hi=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const xn=Mt.map.cameraPosition;xn!==void 0&&xn.setValue(j,ie.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||q.isSkinnedMesh)&&Mt.setValue(j,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Mt.setOptional(j,q,"bindMatrix"),Mt.setOptional(j,q,"bindMatrixInverse");const xn=q.skeleton;xn&&(Me.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Mt.setValue(j,"boneTexture",xn.boneTexture,le),Mt.setValue(j,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xo=X.morphAttributes;if((Xo.position!==void 0||Xo.normal!==void 0||Xo.color!==void 0&&Me.isWebGL2===!0)&&se.update(q,X,z,Kn),(Bt||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,Mt.setValue(j,"receiveShadow",q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(_n.envMap.value=we,_n.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Bt&&(Mt.setValue(j,"toneMappingExposure",f.toneMappingExposure),Ce.needsLights&&Pe(_n,hi),de&&z.fog===!0&&vt.refreshFogUniforms(_n,de),vt.refreshMaterialUniforms(_n,z,U,D,C),ho.upload(j,Ce.uniformsList,_n,le)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ho.upload(j,Ce.uniformsList,_n,le),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(j,"center",q.center),Mt.setValue(j,"modelViewMatrix",q.modelViewMatrix),Mt.setValue(j,"normalMatrix",q.normalMatrix),Mt.setValue(j,"modelMatrix",q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xn=z.uniformsGroups;for(let qo=0,fp=xn.length;qo<fp;qo++)if(Me.isWebGL2){const lu=xn[qo];pe.update(lu,Kn),pe.bind(lu,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function Pe(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Fe(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,F,X){Le.get(T.texture).__webglTexture=F,Le.get(T.depthTexture).__webglTexture=X;const z=Le.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const X=Le.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,X=0){y=T,_=F,b=X;let z=!0,q=null,de=!1,_e=!1;if(T){const we=Le.get(T);we.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),z=!1):we.__webglFramebuffer===void 0?le.setupRenderTarget(T):we.__hasExternalTextures&&le.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const ze=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=ze[F],de=!0):Me.isWebGL2&&T.samples>0&&le.useMultisampledRTT(T)===!1?q=Le.get(T).__webglMultisampledFramebuffer:q=ze,A.copy(T.viewport),E.copy(T.scissor),x=T.scissorTest}else A.copy(I).multiplyScalar(U).floor(),E.copy(G).multiplyScalar(U).floor(),x=J;if(ge.bindFramebuffer(36160,q)&&Me.drawBuffers&&z&&ge.drawBuffers(T,q),ge.viewport(A),ge.scissor(E),ge.setScissorTest(x),de){const we=Le.get(T.texture);j.framebufferTexture2D(36160,36064,34069+F,we.__webglTexture,X)}else if(_e){const we=Le.get(T.texture),Oe=F||0;j.framebufferTextureLayer(36160,36064,we.__webglTexture,X||0,Oe)}M=-1},this.readRenderTargetPixels=function(T,F,X,z,q,de,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Re=Re[_e]),Re){ge.bindFramebuffer(36160,Re);try{const we=T.texture,Oe=we.format,ze=we.type;if(Oe!==Zn&&L.convert(Oe)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=ze===ua&&(fe.has("EXT_color_buffer_half_float")||Me.isWebGL2&&fe.has("EXT_color_buffer_float"));if(ze!==br&&L.convert(ze)!==j.getParameter(35738)&&!(ze===or&&(Me.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-z&&X>=0&&X<=T.height-q&&j.readPixels(F,X,z,q,L.convert(Oe),L.convert(ze),de)}finally{const we=y!==null?Le.get(y).__webglFramebuffer:null;ge.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(T,F,X=0){const z=Math.pow(2,-X),q=Math.floor(F.image.width*z),de=Math.floor(F.image.height*z);le.setTexture2D(F,0),j.copyTexSubImage2D(3553,X,0,0,T.x,T.y,q,de),ge.unbindTexture()},this.copyTextureToTexture=function(T,F,X,z=0){const q=F.image.width,de=F.image.height,_e=L.convert(X.format),Re=L.convert(X.type);le.setTexture2D(X,0),j.pixelStorei(37440,X.flipY),j.pixelStorei(37441,X.premultiplyAlpha),j.pixelStorei(3317,X.unpackAlignment),F.isDataTexture?j.texSubImage2D(3553,z,T.x,T.y,q,de,_e,Re,F.image.data):F.isCompressedTexture?j.compressedTexSubImage2D(3553,z,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,_e,F.mipmaps[0].data):j.texSubImage2D(3553,z,T.x,T.y,_e,Re,F.image),z===0&&X.generateMipmaps&&j.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,F,X,z,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=T.max.x-T.min.x+1,_e=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,we=L.convert(z.format),Oe=L.convert(z.type);let ze;if(z.isData3DTexture)le.setTexture3D(z,0),ze=32879;else if(z.isDataArrayTexture)le.setTexture2DArray(z,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,z.flipY),j.pixelStorei(37441,z.premultiplyAlpha),j.pixelStorei(3317,z.unpackAlignment);const De=j.getParameter(3314),Xe=j.getParameter(32878),st=j.getParameter(3316),Nt=j.getParameter(3315),Rn=j.getParameter(32877),Ye=X.isCompressedTexture?X.mipmaps[0]:X.image;j.pixelStorei(3314,Ye.width),j.pixelStorei(32878,Ye.height),j.pixelStorei(3316,T.min.x),j.pixelStorei(3315,T.min.y),j.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?j.texSubImage3D(ze,q,F.x,F.y,F.z,de,_e,Re,we,Oe,Ye.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(ze,q,F.x,F.y,F.z,de,_e,Re,we,Ye.data)):j.texSubImage3D(ze,q,F.x,F.y,F.z,de,_e,Re,we,Oe,Ye),j.pixelStorei(3314,De),j.pixelStorei(32878,Xe),j.pixelStorei(3316,st),j.pixelStorei(3315,Nt),j.pixelStorei(32877,Rn),q===0&&z.generateMipmaps&&j.generateMipmap(ze),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?le.setTextureCube(T,0):T.isData3DTexture?le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?le.setTexture2DArray(T,0):le.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){_=0,b=0,y=null,ge.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class uv extends Lc{}uv.prototype.isWebGL1Renderer=!0;class Rd extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Dc extends Ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xh=new Ft,Jl=new xd,ja=new Uo,Za=new W;class Id extends cn{constructor(e=new Ai,t=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;xh.copy(i).invert(),Jl.copy(e.ray).applyMatrix4(xh);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,f=p;g<f;g++){const m=c.getX(g);Za.fromBufferAttribute(h,m),vh(Za,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,f=p;g<f;g++)Za.fromBufferAttribute(h,g),vh(Za,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function vh(o,e,t,n,i,r,a){const s=Jl.distanceSqToPoint(o);if(s<t){const l=new W;Jl.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}const yh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class hv{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const dv=new hv;class Od{constructor(e){this.manager=e!==void 0?e:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class fv extends Od{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=yh.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=da("img");function l(){u(),yh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class Fd extends Od{constructor(e){super(e)}load(e,t,n,i){const r=new ln,a=new fv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bh(){return(typeof performance>"u"?Date:performance).now()}class Mh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(on(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);const Sh={type:"change"},Tl={type:"start"},wh={type:"end"};class Nd extends Ir{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fr.ROTATE,MIDDLE:Fr.DOLLY,RIGHT:Fr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Qe),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Sh),n.update(),r=i.NONE},this.update=function(){const L=new W,N=new wr().setFromUnitVectors(e.up,new W(0,1,0)),pe=N.clone().invert(),oe=new W,me=new wr,ye=2*Math.PI;return function(){const Be=n.object.position;L.copy(Be).sub(n.target),L.applyQuaternion(N),s.setFromVector3(L),n.autoRotate&&r===i.NONE&&w(E()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Ue=n.minAzimuthAngle,je=n.maxAzimuthAngle;return isFinite(Ue)&&isFinite(je)&&(Ue<-Math.PI?Ue+=ye:Ue>Math.PI&&(Ue-=ye),je<-Math.PI?je+=ye:je>Math.PI&&(je-=ye),Ue<=je?s.theta=Math.max(Ue,Math.min(je,s.theta)):s.theta=s.theta>(Ue+je)/2?Math.max(Ue,s.theta):Math.min(je,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(s),L.applyQuaternion(pe),Be.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||oe.distanceToSquared(n.object.position)>a||8*(1-me.dot(n.object.quaternion))>a?(n.dispatchEvent(Sh),oe.copy(n.object.position),me.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Z),n.domElement.removeEventListener("pointerdown",Ge),n.domElement.removeEventListener("pointercancel",H),n.domElement.removeEventListener("wheel",vt),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",it),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Qe)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Mh,l=new Mh;let c=1;const u=new W;let h=!1;const d=new Ze,p=new Ze,g=new Ze,f=new Ze,m=new Ze,_=new Ze,b=new Ze,y=new Ze,M=new Ze,v=[],A={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function w(L){l.theta-=L}function D(L){l.phi-=L}const U=function(){const L=new W;return function(pe,oe){L.setFromMatrixColumn(oe,0),L.multiplyScalar(-pe),u.add(L)}}(),k=function(){const L=new W;return function(pe,oe){n.screenSpacePanning===!0?L.setFromMatrixColumn(oe,1):(L.setFromMatrixColumn(oe,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(pe),u.add(L)}}(),O=function(){const L=new W;return function(pe,oe){const me=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;L.copy(ye).sub(n.target);let Se=L.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),U(2*pe*Se/me.clientHeight,n.object.matrix),k(2*oe*Se/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(pe*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),k(oe*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L){d.set(L.clientX,L.clientY)}function Y(L){b.set(L.clientX,L.clientY)}function V(L){f.set(L.clientX,L.clientY)}function Q(L){p.set(L.clientX,L.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const N=n.domElement;w(2*Math.PI*g.x/N.clientHeight),D(2*Math.PI*g.y/N.clientHeight),d.copy(p),n.update()}function C(L){y.set(L.clientX,L.clientY),M.subVectors(y,b),M.y>0?I(x()):M.y<0&&G(x()),b.copy(y),n.update()}function B(L){m.set(L.clientX,L.clientY),_.subVectors(m,f).multiplyScalar(n.panSpeed),O(_.x,_.y),f.copy(m),n.update()}function $(L){L.deltaY<0?G(x()):L.deltaY>0&&I(x()),n.update()}function ie(L){let N=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),N=!0;break}N&&(L.preventDefault(),n.update())}function te(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),N=.5*(v[0].pageY+v[1].pageY);d.set(L,N)}}function ae(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),N=.5*(v[0].pageY+v[1].pageY);f.set(L,N)}}function j(){const L=v[0].pageX-v[1].pageX,N=v[0].pageY-v[1].pageY,pe=Math.sqrt(L*L+N*N);b.set(0,pe)}function Ae(){n.enableZoom&&j(),n.enablePan&&ae()}function fe(){n.enableZoom&&j(),n.enableRotate&&te()}function Me(L){if(v.length==1)p.set(L.pageX,L.pageY);else{const pe=Te(L),oe=.5*(L.pageX+pe.x),me=.5*(L.pageY+pe.y);p.set(oe,me)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const N=n.domElement;w(2*Math.PI*g.x/N.clientHeight),D(2*Math.PI*g.y/N.clientHeight),d.copy(p)}function ge(L){if(v.length===1)m.set(L.pageX,L.pageY);else{const N=Te(L),pe=.5*(L.pageX+N.x),oe=.5*(L.pageY+N.y);m.set(pe,oe)}_.subVectors(m,f).multiplyScalar(n.panSpeed),O(_.x,_.y),f.copy(m)}function Ie(L){const N=Te(L),pe=L.pageX-N.x,oe=L.pageY-N.y,me=Math.sqrt(pe*pe+oe*oe);y.set(0,me),M.set(0,Math.pow(y.y/b.y,n.zoomSpeed)),I(M.y),b.copy(y)}function Le(L){n.enableZoom&&Ie(L),n.enablePan&&ge(L)}function le(L){n.enableZoom&&Ie(L),n.enableRotate&&Me(L)}function Ge(L){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",nt),n.domElement.addEventListener("pointerup",it)),ee(L),L.pointerType==="touch"?P(L):Je(L))}function nt(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):Ve(L))}function it(L){se(L),v.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",it)),n.dispatchEvent(wh),r=i.NONE}function H(L){se(L)}function Je(L){let N;switch(L.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case Fr.DOLLY:if(n.enableZoom===!1)return;Y(L),r=i.DOLLY;break;case Fr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;V(L),r=i.PAN}else{if(n.enableRotate===!1)return;J(L),r=i.ROTATE}break;case Fr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;J(L),r=i.ROTATE}else{if(n.enablePan===!1)return;V(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Tl)}function Ve(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(L);break;case i.DOLLY:if(n.enableZoom===!1)return;C(L);break;case i.PAN:if(n.enablePan===!1)return;B(L);break}}function vt(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(Tl),$(L),n.dispatchEvent(wh))}function Qe(L){n.enabled===!1||n.enablePan===!1||ie(L)}function P(L){switch(re(L),v.length){case 1:switch(n.touches.ONE){case zr.ROTATE:if(n.enableRotate===!1)return;te(),r=i.TOUCH_ROTATE;break;case zr.PAN:if(n.enablePan===!1)return;ae(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case zr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),r=i.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Tl)}function S(L){switch(re(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ge(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;le(L),n.update();break;default:r=i.NONE}}function Z(L){n.enabled!==!1&&L.preventDefault()}function ee(L){v.push(L)}function se(L){delete A[L.pointerId];for(let N=0;N<v.length;N++)if(v[N].pointerId==L.pointerId){v.splice(N,1);return}}function re(L){let N=A[L.pointerId];N===void 0&&(N=new Ze,A[L.pointerId]=N),N.set(L.pageX,L.pageY)}function Te(L){const N=L.pointerId===v[0].pointerId?v[1]:v[0];return A[N.pointerId]}n.domElement.addEventListener("contextmenu",Z),n.domElement.addEventListener("pointerdown",Ge),n.domElement.addEventListener("pointercancel",H),n.domElement.addEventListener("wheel",vt,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class si{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),si.nextNameID=si.nextNameID||0,this.$name.id=`lil-gui-name-${++si.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class pv extends si{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ql(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const mv={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Ql,toHexString:Ql},fa={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},gv={isPrimitive:!1,match:Array.isArray,fromHexString(o,e,t=1){const n=fa.fromHexString(o);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([o,e,t],n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return fa.toHexString(i)}},_v={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const n=fa.fromHexString(o);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:o,g:e,b:t},n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return fa.toHexString(i)}},xv=[mv,fa,gv,_v];function vv(o){return xv.find(e=>e.match(o))}class yv extends si{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=vv(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ql(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class El extends si{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class bv extends si{constructor(e,t,n,i,r,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},t=_=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+_),this.$input.value=this.getValue())},n=_=>{_.code==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),t(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),t(this._step*this._arrowKeyMultiplier(_)*-1))},i=_=>{this._inputFocused&&(_.preventDefault(),t(this._step*this._normalizeMouseWheel(_)))};let r=!1,a,s,l,c,u;const h=5,d=_=>{a=_.clientX,s=l=_.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=_=>{if(r){const b=_.clientX-a,y=_.clientY-s;Math.abs(y)>h?(_.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>h&&g()}if(!r){const b=_.clientY-l;u-=b*this._step*this._arrowKeyMultiplier(_),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},f=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,b,y,M,v)=>(_-b)/(y-b)*(v-M)+M,t=_=>{const b=this.$slider.getBoundingClientRect();let y=e(_,b.left,b.right,this._min,this._max);this._snapClampSetValue(y)},n=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=_=>{t(_.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,s,l;const c=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),a=!1},u=_=>{_.touches.length>1||(this._hasScrollBar?(s=_.touches[0].clientX,l=_.touches[0].clientY,a=!0):c(_),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=_=>{if(a){const b=_.touches[0].clientX-s,y=_.touches[0].clientY-l;Math.abs(b)>Math.abs(y)?c(_):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else _.preventDefault(),t(_.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let f;const m=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const y=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Mv extends si{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Sv extends si{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const wv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Tv(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Th=!1;class Rc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:a=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),s&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Th&&a&&(Tv(wv),Th=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new Mv(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new bv(this,e,t,n,i,r);case"boolean":return new pv(this,e,t);case"string":return new Sv(this,e,t);case"function":return new El(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new yv(this,e,t,n)}addFolder(e){return new Rc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof El||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof El)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function _i(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function kd(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},Ic,Xt,ft,Un=1e8,ct=1/Un,ec=Math.PI*2,Ev=ec/4,Av=0,Ud=Math.sqrt,Cv=Math.cos,Pv=Math.sin,zt=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},Oc=function(e){return typeof e>"u"},li=function(e){return typeof e=="object"},hn=function(e){return e!==!1},Fc=function(){return typeof window<"u"},Ka=function(e){return xt(e)||zt(e)},Bd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qt=Array.isArray,tc=/(?:-?\.?\d|\.)+/gi,Gd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vd=/[+-]=-?[.\d]+/,Hd=/[^,'"\[\]\s]+/gi,Lv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Qn,nc,zc,Dn={},wo={},Wd,Xd=function(e){return(wo=Er(e,Dn))&&mn},Nc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pa=function(e,t){return!t&&console.warn(e)},qd=function(e,t){return e&&(Dn[e]=t)&&wo&&(wo[e]=t)||Dn},ma=function(){return 0},Dv={suppressEvents:!0,isStart:!0,kill:!1},fo={suppressEvents:!0,kill:!1},Rv={suppressEvents:!0},kc={},Vi=[],ic={},Yd,wn={},Cl={},Eh=30,po=[],Uc="",Bc=function(e){var t=e[0],n,i;if(li(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=po.length;i--&&!po[i].targetTest(t););n=po[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xf(e[i],n)))||e.splice(i,1);return e},fr=function(e){return e._gsap||Bc(Bn(e))[0]._gsap},$d=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():Oc(n)&&e.getAttribute&&e.getAttribute(t)||n},dn=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Iv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},To=function(){var e=Vi.length,t=Vi.slice(0),n,i;for(ic={},Vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},jd=function(e,t,n,i){Vi.length&&!Xt&&To(),e.render(t,n,i||Xt&&t<0&&(e._initted||e._startAt)),Vi.length&&!Xt&&To()},Zd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hd).length<2?t:zt(e)?e.trim():e},Kd=function(e){return e},Hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ov=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Er=function(e,t){for(var n in t)e[n]=t[n];return e},Ah=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=li(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Eo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ks=function(e){var t=e.parent||mt,n=e.keyframes?Ov(qt(e.keyframes)):Hn;if(hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Fv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jd=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Go=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Xi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rc=function(e,t,n,i){return e._startAt&&(Xt?e._startAt.revert(fo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Nv=function o(e){return!e||e._ts&&o(e.parent)},Ch=function(e){return e._repeat?ys(e._tTime,e=e.duration()+e._rDelay)*e:0},ys=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ao=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vo=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Ho=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vo(e),n._dirty||pr(n,e)),e},Qd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ao(e.rawTime(),t),(!t._dur||Aa(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},ni=function(e,t,n,i){return t.parent&&Xi(t),t._start=Ot((wi(n)?n:n||e!==mt?On(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jd(e,t,"_first","_last",e._sort?"_start":0),sc(t)||(e._recent=t),i||Qd(e,t),e._ts<0&&Ho(e,e._tTime),e},ef=function(e,t){return(Dn.ScrollTrigger||Nc("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},tf=function(e,t,n,i,r){if(Vc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Xt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yd!==En.frame)return Vi.push(e),e._lazy=[r,i],1},kv=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},sc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Uv=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&kv(e)&&!(!e._initted&&sc(e))||(e._ts<0||e._dp._ts<0)&&!sc(e))?0:1,s=e._rDelay,l=0,c,u,h;if(s&&e._repeat&&(l=Aa(0,e._tDur,t),u=ys(l,s),e._yoyo&&u&1&&(a=1-a),u!==ys(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Xt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&tf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&rc(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Xi(e,1),!n&&!Xt&&(Pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Bv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},bs=function(e,t,n,i){var r=e._repeat,a=Ot(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ot(a*(r+1)+e._rDelay*r):a,s>0&&!i&&Ho(e,e._tTime=e._tDur*s),e.parent&&Vo(e),n||pr(e.parent,e),e},Ph=function(e){return e instanceof tn?pr(e):bs(e,e._dur)},Gv={_start:0,endTime:ma,totalDuration:ma},On=function o(e,t,n){var i=e.labels,r=e._recent||Gv,a=e.duration()>=Un?r.endTime(!1):e._dur,s,l,c;return zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(qt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},Js=function(e,t,n){var i=wi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=hn(l.vars.inherit)&&l.parent;a.immediateRender=hn(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Tt(t[0],a,t[r+1])},$i=function(e,t){return e||e===0?t(e):t},Aa=function(e,t,n){return n<e?e:n>t?t:n},Wt=function(e,t){return!zt(e)||!(t=Lv.exec(e))?"":t[1]},Vv=function(e,t,n){return $i(n,function(i){return Aa(e,t,i)})},ac=[].slice,nf=function(e,t){return e&&li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&li(e[0]))&&!e.nodeType&&e!==Qn},Hv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return zt(i)&&!t||nf(i,1)?(r=n).push.apply(r,Bn(i)):n.push(i)})||n},Bn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):zt(e)&&!n&&(nc||!Ms())?ac.call((t||zc).querySelectorAll(e),0):qt(e)?Hv(e,n):nf(e)?ac.call(e,0):e?[e]:[]},oc=function(e){return e=Bn(e)[0]||pa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Bn(t,n.querySelectorAll?n:n===e?pa("Invalid scope")||zc.createElement("div"):e)}},rf=function(e){return e.sort(function(){return .5-Math.random()})},sf=function(e){if(xt(e))return e;var t=li(e)?e:{each:e},n=mr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,h=i;return zt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(d,p,g){var f=(g||t).length,m=a[f],_,b,y,M,v,A,E,x,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,Un])[1],!w){for(E=-Un;E<(E=g[w++].getBoundingClientRect().left)&&w<f;);w<f&&w--}for(m=a[f]=[],_=l?Math.min(w,f)*u-.5:i%w,b=w===Un?0:l?f*h/w-.5:i/w|0,E=0,x=Un,A=0;A<f;A++)y=A%w-_,M=b-(A/w|0),m[A]=v=c?Math.abs(c==="y"?M:y):Ud(y*y+M*M),v>E&&(E=v),v<x&&(x=v);i==="random"&&rf(m),m.max=E-x,m.min=x,m.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(w>f?f-1:c?c==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),m.b=f<0?r-f:r,m.u=Wt(t.amount||t.each)||0,n=n&&f<0?mf(n):n}return f=(m[d]-m.min)/m.max||0,Ot(m.b+(n?n(f):f)*m.v)+m.u}},lc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wi(n)?0:Wt(n))}},af=function(e,t){var n=qt(e),i,r;return!n&&li(e)&&(i=n=e.radius||Un,e.values?(e=Bn(e.values),(r=!wi(e[0]))&&(i*=i)):e=lc(e.increment)),$i(t,n?xt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Un,u=0,h=e.length,d,p;h--;)r?(d=e[h].x-s,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-s),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,r||u===a||wi(a)?u:u+Wt(a)}:lc(e))},of=function(e,t,n,i){return $i(qt(e)?!t:n===!0?!!(n=0):!i,function(){return qt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Wv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Xv=function(e,t){return function(n){return e(parseFloat(n))+(t||Wt(n))}},qv=function(e,t,n){return cf(e,t,0,1,n)},lf=function(e,t,n){return $i(n,function(i){return e[~~t(i)]})},Yv=function o(e,t,n){var i=t-e;return qt(e)?lf(e,o(0,e.length),t):$i(n,function(r){return(i+(r-e)%i)%i+e})},$v=function o(e,t,n){var i=t-e,r=i*2;return qt(e)?lf(e,o(0,e.length-1),t):$i(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},ga=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Hd:tc),n+=e.substr(t,i-t)+of(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},cf=function(e,t,n,i,r){var a=t-e,s=i-n;return $i(r,function(l){return n+((l-e)/a*s||0)})},jv=function o(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=zt(e),s={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(qt(e)&&!qt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,r=function(g){g*=h;var f=Math.min(d,~~g);return u[f](g-f)},n=t}else i||(e=Er(qt(e)?[]:{},e));if(!u){for(l in t)Gc.call(s,e,l,"get",t[l]);r=function(g){return Xc(g,s)||(a?e.p:e)}}}return $i(n,r)},Lh=function(e,t,n){var i=e.labels,r=Un,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Pn=function(e,t,n){var i=e.vars,r=i[t],a=ft,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vi.length&&To(),s&&(ft=s),u=l?r.apply(c,l):r.call(c),ft=a,u},Hs=function(e){return Xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Xt),e.progress()<1&&Pn(e,"onInterrupt"),e},ss,uf=[],hf=function(e){if(e)if(e=!e.name&&e.default||e,Fc()||e.headless){var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ma,render:Xc,add:Gc,kill:hy,modifier:uy,rawVars:0},a={targetTest:0,get:0,getSetter:Wc,aliases:{},register:0};if(Ms(),e!==i){if(wn[t])return;Hn(i,Hn(Eo(e,r),a)),Er(i.prototype,Er(r,Eo(e,a))),wn[i.prop=t]=i,e.targetTest&&(po.push(i),kc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qd(t,i),e.register&&e.register(mn,i,fn)}else uf.push(e)},ot=255,Ws={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Pl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},df=function(e,t,n){var i=e?wi(e)?[e>>16,e>>8&ot,e&ot]:0:Ws.black,r,a,s,l,c,u,h,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ws[e])i=Ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(tc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Pl(l+1/3,r,a),i[1]=Pl(l,r,a),i[2]=Pl(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Gd),n&&i.length<4&&(i[3]=1),i}else i=e.match(tc)||Ws.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/ot,a=i[1]/ot,s=i[2]/ot,h=Math.max(r,a,s),d=Math.min(r,a,s),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===r?(a-s)/p+(a<s?6:0):h===a?(s-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ff=function(e){var t=[],n=[],i=-1;return e.split(Hi).forEach(function(r){var a=r.match(rs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Dh=function(e,t,n){var i="",r=(e+i).match(Hi),a=t?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=df(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=ff(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Hi,"1").split(rs),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Hi),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},Hi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ws)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Zv=/hsl[a]?\(/,pf=function(e){var t=e.join(" "),n;if(Hi.lastIndex=0,Hi.test(t))return n=Zv.test(t),e[1]=Dh(e[1],n),e[0]=Dh(e[0],n,ff(e[1])),!0},_a,En=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,d,p,g=function f(m){var _=o()-i,b=m===!0,y,M,v,A;if((_>e||_<0)&&(n+=_-t),i+=_,v=i-n,y=v-a,(y>0||b)&&(A=++h.frame,d=v-h.time*1e3,h.time=v=v/1e3,a+=y+(y>=r?4:r-y),M=1),b||(l=c(f)),M)for(p=0;p<s.length;p++)s[p](v,d,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Wd&&(!nc&&Fc()&&(Qn=nc=window,zc=Qn.document||{},Dn.gsap=mn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(mn.version),Xd(wo||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),uf.forEach(hf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},_a=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),_a=0,c=ma},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,_,b){var y=_?function(M,v,A,E){m(M,v,A,E),h.remove(y)}:m;return h.remove(m),s[b?"unshift":"push"](y),Ms(),y},remove:function(m,_){~(_=s.indexOf(m))&&s.splice(_,1)&&p>=_&&p--},_listeners:s},h}(),Ms=function(){return!_a&&En.wake()},tt={},Kv=/^[\d.\-M][\d.\-,\s]/,Jv=/["']/g,Qv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(Jv,"").trim():+c,i=l.substr(s+1).trim();return t},ey=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ty=function(e){var t=(e+"").split("("),n=tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Qv(t[1])]:ey(e).split(",").map(Zd)):tt._CE&&Kv.test(e)?tt._CE("",e):n},mf=function(e){return function(t){return 1-e(1-t)}},gf=function o(e,t){for(var n=e._first,i;n;)n instanceof tn?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mr=function(e,t){return e&&(xt(e)?e:tt[e]||ty(e))||t},Or=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return dn(e,function(s){tt[s]=Dn[s]=r,tt[a=s.toLowerCase()]=n;for(var l in r)tt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=tt[s+"."+l]=r[l]}),r},_f=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ll=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/ec*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Pv((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:_f(s);return r=ec/r,l.config=function(c,u){return o(e,c,u)},l},Dl=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:_f(n);return i.config=function(r){return o(e,r)},i};dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Or(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;Or("Elastic",Ll("in"),Ll("out"),Ll());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Or("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Or("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Or("Circ",function(o){return-(Ud(1-o*o)-1)});Or("Sine",function(o){return o===1?1:-Cv(o*Ev)+1});Or("Back",Dl("in"),Dl("out"),Dl());tt.SteppedEase=tt.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ct;return function(s){return((i*Aa(0,a,s)|0)+r)*n}}};vs.ease=tt["quad.out"];dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Uc+=o+","+o+"Params,"});var xf=function(e,t){this.id=Av++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$d,this.set=t?t.getSetter:Wc},xa=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),_a||En.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ms(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ho(this,n),!r._dp||r.parent||Qd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ch(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ch(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ys(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ao(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(Aa(-Math.abs(this._delay),this._tDur,r),i!==!1),Vo(this),zv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ao(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Rv);var i=Xt;return Xt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Xt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ph(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ph(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(On(this,n),hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,hn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ct)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=xt(n)?n:Kd,s=function(){var c=i.then;i.then=null,xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Hs(this)},o}();Hn(xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var tn=function(o){kd(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=hn(n.sortChildren),mt&&ni(n.parent||mt,_i(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ef(_i(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Js(0,arguments,this),this},t.from=function(i,r,a){return Js(1,arguments,this),this},t.fromTo=function(i,r,a,s){return Js(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Ks(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Tt(i,r,On(this,a),1),this},t.call=function(i,r,a){return ni(this,Tt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Tt(i,a,On(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,Ks(a).immediateRender=hn(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,Ks(s).immediateRender=hn(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ot(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,f,m,_,b,y,M,v,A,E;if(this!==mt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),d=u,M=this._start,y=this._ts,_=!y,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(d=Ot(u%m),u===l?(f=this._repeat,d=c):(f=~~(u/m),f&&f===u/m&&(d=c,f--),d>c&&(d=c)),v=ys(this._tTime,m),!s&&this._tTime&&v!==f&&this._tTime-v*m-this._dur<=0&&(v=f),A&&f&1&&(d=c-d,E=1),f!==v&&!this._lock){var x=A&&v&1,w=x===(A&&f&1);if(f<v&&(x=!x),s=x?0:u%c?c:u,this._lock=1,this.render(s||(E?0:Ot(f*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;gf(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Bv(this,Ot(s),Ot(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&!r&&!f&&(Pn(this,"onStart"),this._tTime!==u))return this;if(d>=s&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,a),d!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-ct);break}}p=g}else{p=this._last;for(var D=i<0?i:d;p;){if(g=p._prev,(p._act||D<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(D-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(D-p._start)*p._ts,r,a||Xt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=D?-ct:ct);break}}p=g}}if(b&&!r&&(this.pause(),b.render(d>=s?0:-ct)._zTime=d>=s?1:-1,this._ts))return this._start=M,Vo(this),this.render(i,r,a);this._onUpdate&&!r&&Pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xi(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Pn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(wi(r)||(r=On(this,r,i)),!(i instanceof xa)){if(qt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(zt(i))return this.addLabel(i,r);if(xt(i))i=Tt.delayedCall(0,i);else return this}return this!==i?ni(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Un);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Tt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return zt(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(Go(this,i),i===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(En.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=On(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=Tt.delayedCall(0,r||ma,a);return s.data="isPause",this._hasPause=1,ni(this,s,On(this,i))},t.removePause=function(i){var r=this._first;for(i=On(this,i);r;)r._start===i&&r.data==="isPause"&&Xi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)zi!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Bn(i),l=this._first,c=wi(r),u;l;)l instanceof Tt?Iv(l._targets,s)&&(c?(!zi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=On(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=Tt.to(a,Hn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&bs(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Hn({startAt:{time:On(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Lh(this,On(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Lh(this,On(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return pr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=Un,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,ni(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;bs(a,a===mt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(mt._ts&&(jd(mt,Ao(i,mt)),Yd=En.frame),En.frame>=Eh){Eh+=Ln.autoSleep||120;var r=mt._first;if((!r||!r._ts)&&Ln.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},e}(xa);Hn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ny=function(e,t,n,i,r,a,s){var l=new fn(this._pt,e,t,0,1,wf,null,r),c=0,u=0,h,d,p,g,f,m,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=ga(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),d=n.match(Al)||[];h=Al.exec(i);)g=h[0],f=i.substring(c,h.index),p?p=(p+1)%5:f.substr(-5)==="rgba("&&(p=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:m,c:g.charAt(1)==="="?cs(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Al.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Vd.test(i)||_)&&(l.e=0),this._pt=l,l},Gc=function(e,t,n,i,r,a,s,l,c,u){xt(i)&&(i=i(r||0,e,a));var h=e[t],d=n!=="get"?n:xt(h)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=xt(h)?c?oy:Mf:Hc,g;if(zt(i)&&(~i.indexOf("random(")&&(i=ga(i)),i.charAt(1)==="="&&(g=cs(d,i)+(Wt(d)||0),(g||g===0)&&(i=g))),!u||d!==i||cc)return!isNaN(d*i)&&i!==""?(g=new fn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?cy:Sf,0,p),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&Nc(t,i),ny.call(this,e,t,d,i,p,l||Ln.stringFilter,c))},iy=function(e,t,n,i,r){if(xt(e)&&(e=Qs(e,r,t,n,i)),!li(e)||e.style&&e.nodeType||qt(e)||Bd(e))return zt(e)?Qs(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=Qs(e[s],r,t,n,i);return a},vf=function(e,t,n,i,r,a){var s,l,c,u;if(wn[e]&&(s=new wn[e]).init(r,s.rawVars?t[e]:iy(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new fn(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==ss))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},zi,cc,Vc=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,p=i.autoRevert,g=e._dur,f=e._startAt,m=e._targets,_=e.parent,b=_&&_.data==="nested"?_.vars.targets:m,y=e._overwrite==="auto"&&!Ic,M=e.timeline,v,A,E,x,w,D,U,k,O,I,G,J,Y;if(M&&(!d||!r)&&(r="none"),e._ease=mr(r,vs.ease),e._yEase=h?mf(mr(h===!0?r:h,vs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(k=m[0]?fr(m[0]).harness:0,J=k&&i[k.prop],v=Eo(i,kc),f&&(f._zTime<0&&f.progress(1),t<0&&u&&s&&!p?f.render(-1,!0):f.revert(u&&g?fo:Dv),f._lazy=0),a){if(Xi(e._startAt=Tt.set(m,Hn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!f&&hn(l),startAt:null,delay:0,onUpdate:c&&function(){return Pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xt||!s&&!p)&&e._startAt.revert(fo),s&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!f){if(t&&(s=!1),E=Hn({overwrite:!1,data:"isFromStart",lazy:s&&!f&&hn(l),immediateRender:s,stagger:0,parent:_},v),J&&(E[k.prop]=J),Xi(e._startAt=Tt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xt?e._startAt.revert(fo):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&hn(l)||l&&!g,A=0;A<m.length;A++){if(w=m[A],U=w._gsap||Bc(m)[A]._gsap,e._ptLookup[A]=I={},ic[U.id]&&Vi.length&&To(),G=b===m?A:b.indexOf(w),k&&(O=new k).init(w,J||v,e,G,b)!==!1&&(e._pt=x=new fn(e._pt,w,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(V){I[V]=x}),O.priority&&(D=1)),!k||J)for(E in v)wn[E]&&(O=vf(E,v,e,G,w,b))?O.priority&&(D=1):I[E]=x=Gc.call(e,w,E,"get",v[E],G,b,0,i.stringFilter);e._op&&e._op[A]&&e.kill(w,e._op[A]),y&&e._pt&&(zi=e,mt.killTweensOf(w,I,e.globalTime(t)),Y=!e.parent,zi=0),e._pt&&l&&(ic[U.id]=1)}D&&Tf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&M.render(Un,!0,!0)},ry=function(e,t,n,i,r,a,s,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(u=d[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return cc=1,e.vars[t]="+=0",Vc(e,s),cc=0,l?pa(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=yt(n)+Wt(h.e)),h.b&&(h.b=u.s+Wt(h.b))},sy=function(e,t){var n=e[0]?fr(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=Er({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},ay=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(qt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},Qs=function(e,t,n,i,r){return xt(e)?e.call(t,n,i,r):zt(e)&&~e.indexOf("random(")?ga(e):e},yf=Uc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bf={};dn(yf+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return bf[o]=1});var Tt=function(o){kd(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Ks(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,f=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=i.parent||mt,y=(qt(n)||Bd(n)?wi(n[0]):"length"in i)?[n]:Bn(n),M,v,A,E,x,w,D,U;if(s._targets=y.length?Bc(y):pa("GSAP target "+n+" not found. https://gsap.com",!Ln.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,g||d||Ka(c)||Ka(u)){if(i=s.vars,M=s.timeline=new tn({data:"nested",defaults:f||{},targets:b&&b.data==="nested"?b.vars.targets:y}),M.kill(),M.parent=M._dp=_i(s),M._start=0,d||Ka(c)||Ka(u)){if(E=y.length,D=d&&sf(d),li(d))for(x in d)~yf.indexOf(x)&&(U||(U={}),U[x]=d[x]);for(v=0;v<E;v++)A=Eo(i,bf),A.stagger=0,_&&(A.yoyoEase=_),U&&Er(A,U),w=y[v],A.duration=+Qs(c,_i(s),v,w,y),A.delay=(+Qs(u,_i(s),v,w,y)||0)-s._delay,!d&&E===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),M.to(w,A,D?D(v,w,y):0),M._ease=tt.none;M.duration()?c=u=0:s.timeline=0}else if(g){Ks(Hn(M.vars.defaults,{ease:"none"})),M._ease=mr(g.ease||i.ease||"none");var k=0,O,I,G;if(qt(g))g.forEach(function(J){return M.to(y,J,">")}),M.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||ay(x,g[x],A,g.easeEach);for(x in A)for(O=A[x].sort(function(J,Y){return J.t-Y.t}),k=0,v=0;v<O.length;v++)I=O[v],G={ease:I.e,duration:(I.t-(v?O[v-1].t:0))/100*c},G[x]=I.v,M.to(y,G,k),k+=G.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||s.duration(c=M.duration())}else s.timeline=0;return p===!0&&!Ic&&(zi=_i(s),mt.killTweensOf(y),zi=0),ni(b,_i(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===Ot(b._time)&&hn(h)&&Nv(_i(s))&&b.data!=="nested")&&(s._tTime=-ct,s.render(Math.max(0,-u)||0)),m&&ef(_i(s),m),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ct&&!u?l:i<ct?0:i,d,p,g,f,m,_,b,y,M;if(!c)Uv(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,y=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,a);if(d=Ot(h%f),h===l?(g=this._repeat,d=c):(g=~~(h/f),g&&g===Ot(h/f)&&(d=c,g--),d>c&&(d=c)),_=this._yoyo&&g&1,_&&(M=this._yEase,d=c-d),m=ys(this._tTime,f),d===s&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(y&&this._yEase&&gf(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==f&&this._initted&&(this._lock=a=1,this.render(Ot(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(tf(this,u?i:d,a,r,h))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(M||this._ease)(d/c),this._from&&(this.ratio=b=1-b),d&&!s&&!r&&!g&&(Pn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&rc(this,i,r,a),Pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Pn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&rc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xi(this,1),!r&&!(u&&!s)&&(h||s||_)&&(Pn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s,l){_a||En.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Vc(this,c),u=this._ease(c/this._dur),ry(this,i,r,a,s,u,c,l)?this.resetTo(i,r,a,s,1):(Ho(this,0),this.parent||Jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,zi&&zi.vars.overwrite!==!0)._first||Hs(this),this.parent&&a!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Bn(i):s,c=this._ptLookup,u=this._pt,h,d,p,g,f,m,_;if((!r||r==="all")&&Fv(s,l))return r==="all"&&(this._pt=0),Hs(this);for(h=this._op=this._op||[],r!=="all"&&(zt(r)&&(f={},dn(r,function(b){return f[b]=1}),r=f),r=sy(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){d=c[_],r==="all"?(h[_]=r,g=d,p={}):(p=h[_]=h[_]||{},g=r);for(f in g)m=d&&d[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&Go(this,m,"_pt"),delete d[f]),p!=="all"&&(p[f]=1)}return this._initted&&!this._pt&&u&&Hs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Js(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return Js(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return mt.killTweensOf(i,r,a)},e}(xa);Hn(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});dn("staggerTo,staggerFrom,staggerFromTo",function(o){Tt[o]=function(){var e=new tn,t=ac.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Hc=function(e,t,n){return e[t]=n},Mf=function(e,t,n){return e[t](n)},oy=function(e,t,n,i){return e[t](i.fp,n)},ly=function(e,t,n){return e.setAttribute(t,n)},Wc=function(e,t){return xt(e[t])?Mf:Oc(e[t])&&e.setAttribute?ly:Hc},Sf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Xc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},uy=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},hy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Go(this,t,"_pt"):t.dep||(n=1),t=i;return!n},dy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Tf=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},fn=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Sf,this.d=l||this,this.set=c||Hc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=dy,this.m=n,this.mt=r,this.tween=i},o}();dn(Uc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return kc[o]=1});Dn.TweenMax=Dn.TweenLite=Tt;Dn.TimelineLite=Dn.TimelineMax=tn;mt=new tn({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=pf;var gr=[],mo={},fy=[],Rh=0,py=0,Rl=function(e){return(mo[e]||fy).map(function(t){return t()})},uc=function(){var e=Date.now(),t=[];e-Rh>2&&(Rl("matchMediaInit"),gr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Qn.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Rl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rh=e,Rl("matchMedia"))},Ef=function(){function o(t,n){this.selector=n&&oc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=py++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){xt(n)&&(r=i,i=n,n=xt);var a=this,s=function(){var c=ft,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=oc(r)),ft=a,h=i.apply(a,arguments),xt(h)&&a._r.push(h),ft=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===xt?s(a,function(l){return a.add(null,l)}):n?a[n]=s:s},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Tt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var s=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return s.splice(s.indexOf(u),1)}));for(s.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Tt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var a=gr.length;a--;)gr[a].id===this.id&&gr.splice(a,1)},e.revert=function(n){this.kill(n||{})},o}(),my=function(){function o(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=o.prototype;return e.add=function(n,i,r){li(n)||(n={matches:n});var a=new Ef(0,r||this.scope),s=a.conditions={},l,c,u;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Qn.matchMedia(n[c]),l&&(gr.indexOf(a)<0&&gr.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(uc):l.addEventListener("change",uc)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Co={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hf(i)})},timeline:function(e){return new tn(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){zt(e)&&(e=Bn(e)[0]);var r=fr(e||{}).get,a=n?Kd:Zd;return n==="native"&&(n=""),e&&(t?a((wn[t]&&wn[t].get||r)(e,t,n,i)):function(s,l,c){return a((wn[s]&&wn[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=Bn(e),e.length>1){var i=e.map(function(u){return mn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=wn[t],s=fr(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ss._pt=0,h.init(e,n?u+n:u,ss,0,[e]),h.render(1,h),ss._pt&&Xc(1,ss)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=mn.to(e,Er((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,vs.ease)),Ah(vs,e||{})},config:function(e){return Ah(Ln,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!wn[s]&&!Dn[s]&&pa(t+" effect requires "+s+" plugin.")}),Cl[t]=function(s,l,c){return n(Bn(s),Hn(l||{},r),c)},a&&(tn.prototype[t]=function(s,l,c){return this.add(Cl[t](s,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){tt[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):tt},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new tn(e),i,r;for(n.smoothChildTiming=hn(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Tt&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=r;return ni(mt,n,0),n},context:function(e,t){return e?new Ef(e,t):ft},matchMedia:function(e){return new my(e)},matchMediaRefresh:function(){return gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||uc()},addEventListener:function(e,t){var n=mo[e]||(mo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=mo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Yv,wrapYoyo:$v,distribute:sf,random:of,snap:af,normalize:qv,getUnit:Wt,clamp:Vv,splitColor:df,toArray:Bn,selector:oc,mapRange:cf,pipe:Wv,unitize:Xv,interpolate:jv,shuffle:rf},install:Xd,effects:Cl,ticker:En,updateRoot:tn.updateRoot,plugins:wn,globalTimeline:mt,core:{PropTween:fn,globals:qd,Tween:Tt,Timeline:tn,Animation:xa,getCache:fr,_removeLinkedListItem:Go,reverting:function(){return Xt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Ic=e}}};dn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Co[o]=Tt[o]});En.add(tn.updateRoot);ss=Co.to({},{duration:0});var gy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_y=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=gy(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Il=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(zt(r)&&(l={},dn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}_y(s,r)}}}},mn=Co.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Xt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Il("roundProps",lc),Il("modifiers"),Il("snap",af))||Co;Tt.version=tn.version=mn.version="3.12.5";Wd=1;Fc()&&Ms();tt.Power0;tt.Power1;tt.Power2;tt.Power3;tt.Power4;tt.Linear;tt.Quad;tt.Cubic;tt.Quart;tt.Quint;tt.Strong;tt.Elastic;tt.Back;tt.SteppedEase;tt.Bounce;tt.Sine;tt.Expo;tt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ih,Ni,us,qc,lr,Oh,Yc,xy=function(){return typeof window<"u"},Ti={},nr=180/Math.PI,hs=Math.PI/180,Kr=Math.atan2,Fh=1e8,$c=/([A-Z])/g,vy=/(left|right|width|margin|padding|x)/i,yy=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},by=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},My=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Af=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wy=function(e,t,n){return e.style[t]=n},Ty=function(e,t,n){return e.style.setProperty(t,n)},Ey=function(e,t,n){return e._gsap[t]=n},Ay=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cy=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Py=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},gt="transform",pn=gt+"Origin",Ly=function o(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Ti&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=xi(i,s)}):this.tfm[e]=a.x?a[e]:xi(i,e),e===pn&&(this.tfm.zOrigin=a.zOrigin);else return ii.transform.split(",").forEach(function(s){return o.call(n,s,t)});if(this.props.indexOf(gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,t,"")),e=gt}(r||t)&&this.props.push(e,t,r[e])},Pf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Dy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace($c,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Yc(),(!r||!r.isStart)&&!n[gt]&&(Pf(n),i.zOrigin&&n[pn]&&(n[pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lf=function(e,t){var n={target:e,props:[],revert:Dy,save:Ly};return e._gsap||mn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Df,dc=function(e,t){var n=Ni.createElementNS?Ni.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ni.createElement(e);return n&&n.style?n:Ni.createElement(e)},ai=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace($c,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Ss(t)||t,1)||""},zh="O,Moz,ms,Ms,Webkit".split(","),Ss=function(e,t,n){var i=t||lr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(zh[a]+e in r););return a<0?null:(a===3?"ms":a>=0?zh[a]:"")+e},fc=function(){xy()&&window.document&&(Ih=window,Ni=Ih.document,us=Ni.documentElement,lr=dc("div")||{style:{}},dc("div"),gt=Ss(gt),pn=gt+"Origin",lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Df=!!Ss("perspective"),Yc=mn.core.reverting,qc=1)},Ol=function o(e){var t=dc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(us.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),us.removeChild(t),this.style.cssText=r,a},Nh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rf=function(e){var t;try{t=e.getBBox()}catch{t=Ol.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ol||(t=Ol.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Nh(e,["x","cx","x1"])||0,y:+Nh(e,["y","cy","y1"])||0,width:0,height:0}:t},If=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rf(e))},Ar=function(e,t){if(t){var n=e.style,i;t in Ti&&t!==pn&&(t=gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace($c,"-$1").toLowerCase())):n.removeAttribute(t)}},ki=function(e,t,n,i,r,a){var s=new fn(e._pt,t,n,0,1,a?Cf:Af);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},kh={deg:1,rad:1,turn:1},Ry={grid:1,flex:1},qi=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=lr.style,l=vy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",g,f,m,_;if(i===a||!r||kh[i]||kh[a])return r;if(a!=="px"&&!d&&(r=o(e,t,n,"px")),_=e.getCTM&&If(e),(p||a==="%")&&(Ti[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],yt(p?r/g*h:r/100*g);if(s[l?"width":"height"]=h+(d?a:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Ni||!f.appendChild)&&(f=Ni.body),m=f._gsap,m&&p&&m.width&&l&&m.time===En.time&&!m.uncache)return yt(r/m.width*h);if(p&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+i,g=e[u],b?e.style[t]=b:Ar(e,t)}else(p||a==="%")&&!Ry[ai(f,"display")]&&(s.position=ai(e,"position")),f===e&&(s.position="static"),f.appendChild(lr),g=lr[u],f.removeChild(lr),s.position="absolute";return l&&p&&(m=fr(f),m.time=En.time,m.width=f[u]),yt(d?g*r/h:g&&r?h/g*r:0)},xi=function(e,t,n,i){var r;return qc||fc(),t in ii&&t!=="transform"&&(t=ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ti[t]&&t!=="transform"?(r=ya(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Lo(ai(e,pn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Po[t]&&Po[t](e,t,n)||ai(e,t)||$d(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qi(e,t,r,n)+n:r},Iy=function(e,t,n,i){if(!n||n==="none"){var r=Ss(t,e,1),a=r&&ai(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=ai(e,"borderTopColor"))}var s=new fn(this._pt,e.style,t,0,1,wf),l=0,c=0,u,h,d,p,g,f,m,_,b,y,M,v;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(f=e.style[t],e.style[t]=i,i=ai(e,t)||i,f?e.style[t]=f:Ar(e,t)),u=[n,i],pf(u),n=u[0],i=u[1],d=n.match(rs)||[],v=i.match(rs)||[],v.length){for(;h=rs.exec(i);)m=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(f=d[c++]||"")&&(p=parseFloat(f)||0,M=f.substr((p+"").length),m.charAt(1)==="="&&(m=cs(p,m)+M),_=parseFloat(m),y=m.substr((_+"").length),l=rs.lastIndex-y.length,y||(y=y||Ln.units[t]||M,l===i.length&&(i+=y,s.e+=y)),M!==y&&(p=qi(e,t,f,y)||0),s._pt={_next:s._pt,p:b||c===1?b:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Cf:Af;return Vd.test(i)&&(s.e=0),this._pt=s,s},Uh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Oy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Uh[n]||n,t[1]=Uh[i]||i,t.join(" ")},Fy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Ti[s]&&(l=1,s=s==="transformOrigin"?pn:gt),Ar(n,s);l&&(Ar(n,gt),a&&(a.svg&&n.removeAttribute("transform"),ya(n,1),a.uncache=1,Pf(i)))}},Po={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new fn(e._pt,t,n,0,0,Fy);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},va=[1,0,0,1,0,0],Of={},Ff=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bh=function(e){var t=ai(e,gt);return Ff(t)?va:t.substr(7).match(Gd).map(yt)},jc=function(e,t){var n=e._gsap||fr(e),i=e.style,r=Bh(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?va:r):(r===va&&!e.offsetParent&&e!==us&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,us.appendChild(e)),r=Bh(e),l?i.display=l:Ar(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):us.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},pc=function(e,t,n,i,r,a){var s=e._gsap,l=r||jc(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,d=s.yOffset||0,p=l[0],g=l[1],f=l[2],m=l[3],_=l[4],b=l[5],y=t.split(" "),M=parseFloat(y[0])||0,v=parseFloat(y[1])||0,A,E,x,w;n?l!==va&&(E=p*m-g*f)&&(x=M*(m/E)+v*(-f/E)+(f*b-m*_)/E,w=M*(-g/E)+v*(p/E)-(p*b-g*_)/E,M=x,v=w):(A=Rf(e),M=A.x+(~y[0].indexOf("%")?M/100*A.width:M),v=A.y+(~(y[1]||y[0]).indexOf("%")?v/100*A.height:v)),i||i!==!1&&s.smooth?(_=M-c,b=v-u,s.xOffset=h+(_*p+b*f)-_,s.yOffset=d+(_*g+b*m)-b):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=v,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[pn]="0px 0px",a&&(ki(a,s,"xOrigin",c,M),ki(a,s,"yOrigin",u,v),ki(a,s,"xOffset",h,s.xOffset),ki(a,s,"yOffset",d,s.yOffset)),e.setAttribute("data-svg-origin",M+" "+v)},ya=function(e,t){var n=e._gsap||new xf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=ai(e,pn)||"0",u,h,d,p,g,f,m,_,b,y,M,v,A,E,x,w,D,U,k,O,I,G,J,Y,V,Q,C,B,$,ie,te,ae;return u=h=d=f=m=_=b=y=M=0,p=g=1,n.svg=!!(e.getCTM&&If(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),E=jc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),pc(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),v=n.xOrigin||0,A=n.yOrigin||0,E!==va&&(U=E[0],k=E[1],O=E[2],I=E[3],u=G=E[4],h=J=E[5],E.length===6?(p=Math.sqrt(U*U+k*k),g=Math.sqrt(I*I+O*O),f=U||k?Kr(k,U)*nr:0,b=O||I?Kr(O,I)*nr+f:0,b&&(g*=Math.abs(Math.cos(b*hs))),n.svg&&(u-=v-(v*U+A*O),h-=A-(v*k+A*I))):(ae=E[6],ie=E[7],C=E[8],B=E[9],$=E[10],te=E[11],u=E[12],h=E[13],d=E[14],x=Kr(ae,$),m=x*nr,x&&(w=Math.cos(-x),D=Math.sin(-x),Y=G*w+C*D,V=J*w+B*D,Q=ae*w+$*D,C=G*-D+C*w,B=J*-D+B*w,$=ae*-D+$*w,te=ie*-D+te*w,G=Y,J=V,ae=Q),x=Kr(-O,$),_=x*nr,x&&(w=Math.cos(-x),D=Math.sin(-x),Y=U*w-C*D,V=k*w-B*D,Q=O*w-$*D,te=I*D+te*w,U=Y,k=V,O=Q),x=Kr(k,U),f=x*nr,x&&(w=Math.cos(x),D=Math.sin(x),Y=U*w+k*D,V=G*w+J*D,k=k*w-U*D,J=J*w-G*D,U=Y,G=V),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,_=180-_),p=yt(Math.sqrt(U*U+k*k+O*O)),g=yt(Math.sqrt(J*J+ae*ae)),x=Kr(G,J),b=Math.abs(x)>2e-4?x*nr:0,M=te?1/(te<0?-te:te):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ff(ai(e,gt)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(p*=-1,b+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=yt(p),n.scaleY=yt(g),n.rotation=yt(f)+s,n.rotationX=yt(m)+s,n.rotationY=yt(_)+s,n.skewX=b+s,n.skewY=y+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[pn]=Lo(c)),n.xOffset=n.yOffset=0,n.force3D=Ln.force3D,n.renderTransform=n.svg?Ny:Df?zf:zy,n.uncache=0,n},Lo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fl=function(e,t,n){var i=Wt(t);return yt(parseFloat(t)+parseFloat(qi(e,"x",n+"px",i)))+i},zy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zf(e,t)},Ji="0deg",Ns="0px",Qi=") ",zf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,f=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,y=n.zOrigin,M="",v=_==="auto"&&e&&e!==1||_===!0;if(y&&(h!==Ji||u!==Ji)){var A=parseFloat(u)*hs,E=Math.sin(A),x=Math.cos(A),w;A=parseFloat(h)*hs,w=Math.cos(A),a=Fl(b,a,E*w*-y),s=Fl(b,s,-Math.sin(A)*-y),l=Fl(b,l,x*w*-y+y)}m!==Ns&&(M+="perspective("+m+Qi),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(v||a!==Ns||s!==Ns||l!==Ns)&&(M+=l!==Ns||v?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Qi),c!==Ji&&(M+="rotate("+c+Qi),u!==Ji&&(M+="rotateY("+u+Qi),h!==Ji&&(M+="rotateX("+h+Qi),(d!==Ji||p!==Ji)&&(M+="skew("+d+", "+p+Qi),(g!==1||f!==1)&&(M+="scale("+g+", "+f+Qi),b.style[gt]=M||"translate(0, 0)"},Ny=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,f=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,y=parseFloat(a),M=parseFloat(s),v,A,E,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=hs,c*=hs,v=Math.cos(l)*h,A=Math.sin(l)*h,E=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=hs,w=Math.tan(c-u),w=Math.sqrt(1+w*w),E*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),v*=w,A*=w)),v=yt(v),A=yt(A),E=yt(E),x=yt(x)):(v=h,x=d,A=E=0),(y&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(y=qi(p,"x",a,"px"),M=qi(p,"y",s,"px")),(g||f||m||_)&&(y=yt(y+g-(g*v+f*E)+m),M=yt(M+f-(g*A+f*x)+_)),(i||r)&&(w=p.getBBox(),y=yt(y+i/100*w.width),M=yt(M+r/100*w.height)),w="matrix("+v+","+A+","+E+","+x+","+y+","+M+")",p.setAttribute("transform",w),b&&(p.style[gt]=w)},ky=function(e,t,n,i,r){var a=360,s=zt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?nr:1),c=l-i,u=i+c+"deg",h,d;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Fh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Fh)%a-~~(c/a)*a)),e._pt=d=new fn(e._pt,t,n,i,c,by),d.e=u,d.u="deg",e._props.push(n),d},Gh=function(e,t){for(var n in t)e[n]=t[n];return e},Uy=function(e,t,n){var i=Gh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,d,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,s=ya(n,1),Ar(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,s=ya(n,1),a[gt]=c);for(l in Ti)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(p=Wt(c),g=Wt(u),h=p!==g?qi(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new fn(e._pt,s,l,h,d-h,hc),e._pt.u=g||0,e._props.push(l));Gh(s,i)};dn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});Po[e>1?"border"+o:o]=function(s,l,c,u,h){var d,p;if(arguments.length<4)return d=a.map(function(g){return xi(s,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},a.forEach(function(g,f){return p[g]=d[f]=d[f]||d[(f-1)/2|0]}),s.init(l,p,h)}});var Nf={name:"css",register:fc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,h,d,p,g,f,m,_,b,y,M,v,A,E,x;qc||fc(),this.styles=this.styles||Lf(e),x=this.styles.props,this.tween=n;for(f in t)if(f!=="autoRound"&&(u=t[f],!(wn[f]&&vf(f,t,n,i,e,r)))){if(p=typeof u,g=Po[f],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ga(u)),g)g(this,e,f,u,n)&&(E=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Hi.lastIndex=0,Hi.test(c)||(m=Wt(c),_=Wt(u)),_?m!==_&&(c=qi(e,f,c,_)+_):m&&(u+=m),this.add(s,"setProperty",c,u,i,r,0,0,f),a.push(f),x.push(f,0,s[f]);else if(p!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,r):l[f],zt(c)&&~c.indexOf("random(")&&(c=ga(c)),Wt(c+"")||c==="auto"||(c+=Ln.units[f]||Wt(xi(e,f))||""),(c+"").charAt(1)==="="&&(c=xi(e,f))):c=xi(e,f),d=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),f in ii&&(f==="autoAlpha"&&(d===1&&xi(e,"visibility")==="hidden"&&h&&(d=0),x.push("visibility",0,s.visibility),ki(this,s,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=ii[f],~f.indexOf(",")&&(f=f.split(",")[0]))),y=f in Ti,y){if(this.styles.save(f),M||(v=e._gsap,v.renderTransform&&!t.parseTransform||ya(e,t.parseTransform),A=t.smoothOrigin!==!1&&v.smooth,M=this._pt=new fn(this._pt,s,gt,0,1,v.renderTransform,v,0,-1),M.dep=1),f==="scale")this._pt=new fn(this._pt,v,"scaleY",v.scaleY,(b?cs(v.scaleY,b+h):h)-v.scaleY||0,hc),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){x.push(pn,0,s[pn]),u=Oy(u),v.svg?pc(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&ki(this,v,"zOrigin",v.zOrigin,_),ki(this,s,f,Lo(c),Lo(u)));continue}else if(f==="svgOrigin"){pc(e,u,1,A,0,this);continue}else if(f in Of){ky(this,v,f,d,b?cs(d,b+u):u);continue}else if(f==="smoothOrigin"){ki(this,v,"smooth",v.smooth,u);continue}else if(f==="force3D"){v[f]=u;continue}else if(f==="transform"){Uy(this,u,e);continue}}else f in s||(f=Ss(f)||f);if(y||(h||h===0)&&(d||d===0)&&!yy.test(u)&&f in s)m=(c+"").substr((d+"").length),h||(h=0),_=Wt(u)||(f in Ln.units?Ln.units[f]:m),m!==_&&(d=qi(e,f,c,_)),this._pt=new fn(this._pt,y?v:s,f,d,(b?cs(d,b+h):h)-d,!y&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?Sy:hc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=My);else if(f in s)Iy.call(this,e,f,c,b?b+u:u);else if(f in e)this.add(e,f,c||e[f],b?b+u:u,i,r);else if(f!=="parseTransform"){Nc(f,u);continue}y||(f in s?x.push(f,0,s[f]):x.push(f,1,c||e[f])),a.push(f)}}E&&Tf(this)},render:function(e,t){if(t.tween._time||!Yc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xi,aliases:ii,getSetter:function(e,t,n){var i=ii[t];return i&&i.indexOf(",")<0&&(t=i),t in Ti&&t!==pn&&(e._gsap.x||xi(e,"x"))?n&&Oh===n?t==="scale"?Ay:Ey:(Oh=n||{})&&(t==="scale"?Cy:Py):e.style&&!Oc(e.style[t])?wy:~t.indexOf("-")?Ty:Wc(e,t)},core:{_removeProperty:Ar,_getMatrix:jc}};mn.utils.checkPrefix=Ss;mn.core.getStyleSaver=Lf;(function(o,e,t,n){var i=dn(o+","+e+","+t,function(r){Ti[r]=1});dn(e,function(r){Ln.units[r]="deg",Of[r]=1}),ii[i[13]]=o+","+e,dn(n,function(r){var a=r.split(":");ii[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ln.units[o]="px"});mn.registerPlugin(Nf);var As=mn.registerPlugin(Nf)||mn;As.core.Tween;function Vh(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function By(o,e,t){return e&&Vh(o.prototype,e),t&&Vh(o,t),o}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ut,go,An,Ui,Bi,ds,kf,ir,ea,Uf,bi,Yn,Bf,Gf=function(){return Ut||typeof window<"u"&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},Vf=1,as=[],$e=[],oi=[],ta=Date.now,mc=function(e,t){return t},Gy=function(){var e=ea.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,$e),i.push.apply(i,oi),$e=n,oi=i,mc=function(a,s){return t[a](s)}},Wi=function(e,t){return~oi.indexOf(e)&&oi[oi.indexOf(e)+1][t]},na=function(e){return!!~Uf.indexOf(e)},jt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},$t=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ja="scrollLeft",Qa="scrollTop",gc=function(){return bi&&bi.isPressed||$e.cache++},Do=function(e,t){var n=function i(r){if(r||r===0){Vf&&(An.history.scrollRestoration="manual");var a=bi&&bi.isPressed;r=i.v=Math.round(r)||(bi&&bi.iOS?1:0),e(r),i.cacheID=$e.cache,a&&mc("ss",r)}else(t||$e.cache!==i.cacheID||mc("ref"))&&(i.cacheID=$e.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},nn={s:Ja,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Do(function(o){return arguments.length?An.scrollTo(o,Ct.sc()):An.pageXOffset||Ui[Ja]||Bi[Ja]||ds[Ja]||0})},Ct={s:Qa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:nn,sc:Do(function(o){return arguments.length?An.scrollTo(nn.sc(),o):An.pageYOffset||Ui[Qa]||Bi[Qa]||ds[Qa]||0})},an=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ut.utils.toArray)(e)[0]||(typeof e=="string"&&Ut.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Yi=function(e,t){var n=t.s,i=t.sc;na(e)&&(e=Ui.scrollingElement||Bi);var r=$e.indexOf(e),a=i===Ct.sc?1:2;!~r&&(r=$e.push(e)-1),$e[r+a]||jt(e,"scroll",gc);var s=$e[r+a],l=s||($e[r+a]=Do(Wi(e,n),!0)||(na(e)?i:Do(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,s||(l.smooth=Ut.getProperty(e,"scrollBehavior")==="smooth"),l},_c=function(e,t,n){var i=e,r=e,a=ta(),s=a,l=t||50,c=Math.max(500,l*3),u=function(g,f){var m=ta();f||m-a>l?(r=i,i=g,s=a,a=m):n?i+=g:i=r+(g-r)/(m-s)*(a-s)},h=function(){r=i=n?0:i,s=a=0},d=function(g){var f=s,m=r,_=ta();return(g||g===0)&&g!==i&&u(g),a===s||_-s>c?0:(i+(n?m:-m))/((n?_:a)-f)*1e3};return{update:u,reset:h,getVelocity:d}},ks=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Hh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Hf=function(){ea=Ut.core.globals().ScrollTrigger,ea&&ea.core&&Gy()},Wf=function(e){return Ut=e||Gf(),!go&&Ut&&typeof document<"u"&&document.body&&(An=window,Ui=document,Bi=Ui.documentElement,ds=Ui.body,Uf=[An,Ui,Bi,ds],Ut.utils.clamp,Bf=Ut.core.context||function(){},ir="onpointerenter"in ds?"pointer":"mouse",kf=bt.isTouch=An.matchMedia&&An.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in An||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yn=bt.eventTypes=("ontouchstart"in Bi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Vf=0},500),Hf(),go=1),go};nn.op=Ct;$e.cache=0;var bt=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){go||Wf(Ut)||console.warn("Please gsap.registerPlugin(Observer)"),ea||Hf();var i=n.tolerance,r=n.dragMinimum,a=n.type,s=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,f=n.event,m=n.onDragStart,_=n.onDragEnd,b=n.onDrag,y=n.onPress,M=n.onRelease,v=n.onRight,A=n.onLeft,E=n.onUp,x=n.onDown,w=n.onChangeX,D=n.onChangeY,U=n.onChange,k=n.onToggleX,O=n.onToggleY,I=n.onHover,G=n.onHoverEnd,J=n.onMove,Y=n.ignoreCheck,V=n.isNormalizer,Q=n.onGestureStart,C=n.onGestureEnd,B=n.onWheel,$=n.onEnable,ie=n.onDisable,te=n.onClick,ae=n.scrollSpeed,j=n.capture,Ae=n.allowClicks,fe=n.lockAxis,Me=n.onLockAxis;this.target=s=an(s)||Bi,this.vars=n,p&&(p=Ut.utils.toArray(p)),i=i||1e-9,r=r||0,g=g||1,ae=ae||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(An.getComputedStyle(ds).lineHeight)||22);var ge,Ie,Le,le,Ge,nt,it,H=this,Je=0,Ve=0,vt=n.passive||!u,Qe=Yi(s,nn),P=Yi(s,Ct),S=Qe(),Z=P(),ee=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Yn[0]==="pointerdown",se=na(s),re=s.ownerDocument||Ui,Te=[0,0,0],L=[0,0,0],N=0,pe=function(){return N=ta()},oe=function(Ee,Ne){return(H.event=Ee)&&p&&~p.indexOf(Ee.target)||Ne&&ee&&Ee.pointerType!=="touch"||Y&&Y(Ee,Ne)},me=function(){H._vx.reset(),H._vy.reset(),Ie.pause(),h&&h(H)},ye=function(){var Ee=H.deltaX=Hh(Te),Ne=H.deltaY=Hh(L),he=Math.abs(Ee)>=i,ke=Math.abs(Ne)>=i;U&&(he||ke)&&U(H,Ee,Ne,Te,L),he&&(v&&H.deltaX>0&&v(H),A&&H.deltaX<0&&A(H),w&&w(H),k&&H.deltaX<0!=Je<0&&k(H),Je=H.deltaX,Te[0]=Te[1]=Te[2]=0),ke&&(x&&H.deltaY>0&&x(H),E&&H.deltaY<0&&E(H),D&&D(H),O&&H.deltaY<0!=Ve<0&&O(H),Ve=H.deltaY,L[0]=L[1]=L[2]=0),(le||Le)&&(J&&J(H),Le&&(b(H),Le=!1),le=!1),nt&&!(nt=!1)&&Me&&Me(H),Ge&&(B(H),Ge=!1),ge=0},Se=function(Ee,Ne,he){Te[he]+=Ee,L[he]+=Ne,H._vx.update(Ee),H._vy.update(Ne),c?ge||(ge=requestAnimationFrame(ye)):ye()},Be=function(Ee,Ne){fe&&!it&&(H.axis=it=Math.abs(Ee)>Math.abs(Ne)?"x":"y",nt=!0),it!=="y"&&(Te[2]+=Ee,H._vx.update(Ee,!0)),it!=="x"&&(L[2]+=Ne,H._vy.update(Ne,!0)),c?ge||(ge=requestAnimationFrame(ye)):ye()},Ue=function(Ee){if(!oe(Ee,1)){Ee=ks(Ee,u);var Ne=Ee.clientX,he=Ee.clientY,ke=Ne-H.x,Pe=he-H.y,Fe=H.isDragging;H.x=Ne,H.y=he,(Fe||Math.abs(H.startX-Ne)>=r||Math.abs(H.startY-he)>=r)&&(b&&(Le=!0),Fe||(H.isDragging=!0),Be(ke,Pe),Fe||m&&m(H))}},je=H.onPress=function(ve){oe(ve,1)||ve&&ve.button||(H.axis=it=null,Ie.pause(),H.isPressed=!0,ve=ks(ve),Je=Ve=0,H.startX=H.x=ve.clientX,H.startY=H.y=ve.clientY,H._vx.reset(),H._vy.reset(),jt(V?s:re,Yn[1],Ue,vt,!0),H.deltaX=H.deltaY=0,y&&y(H))},R=H.onRelease=function(ve){if(!oe(ve,1)){$t(V?s:re,Yn[1],Ue,!0);var Ee=!isNaN(H.y-H.startY),Ne=H.isDragging,he=Ne&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),ke=ks(ve);!he&&Ee&&(H._vx.reset(),H._vy.reset(),u&&Ae&&Ut.delayedCall(.08,function(){if(ta()-N>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(re.createEvent){var Pe=re.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,An,1,ke.screenX,ke.screenY,ke.clientX,ke.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Pe)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&Ne&&!V&&Ie.restart(!0),_&&Ne&&_(H),M&&M(H,he)}},K=function(Ee){return Ee.touches&&Ee.touches.length>1&&(H.isGesturing=!0)&&Q(Ee,H.isDragging)},ne=function(){return(H.isGesturing=!1)||C(H)},ce=function(Ee){if(!oe(Ee)){var Ne=Qe(),he=P();Se((Ne-S)*ae,(he-Z)*ae,1),S=Ne,Z=he,h&&Ie.restart(!0)}},xe=function(Ee){if(!oe(Ee)){Ee=ks(Ee,u),B&&(Ge=!0);var Ne=(Ee.deltaMode===1?l:Ee.deltaMode===2?An.innerHeight:1)*g;Se(Ee.deltaX*Ne,Ee.deltaY*Ne,0),h&&!V&&Ie.restart(!0)}},We=function(Ee){if(!oe(Ee)){var Ne=Ee.clientX,he=Ee.clientY,ke=Ne-H.x,Pe=he-H.y;H.x=Ne,H.y=he,le=!0,h&&Ie.restart(!0),(ke||Pe)&&Be(ke,Pe)}},ut=function(Ee){H.event=Ee,I(H)},lt=function(Ee){H.event=Ee,G(H)},gn=function(Ee){return oe(Ee)||ks(Ee,u)&&te(H)};Ie=H._dc=Ut.delayedCall(d||.25,me).pause(),H.deltaX=H.deltaY=0,H._vx=_c(0,50,!0),H._vy=_c(0,50,!0),H.scrollX=Qe,H.scrollY=P,H.isDragging=H.isGesturing=H.isPressed=!1,Bf(this),H.enable=function(ve){return H.isEnabled||(jt(se?re:s,"scroll",gc),a.indexOf("scroll")>=0&&jt(se?re:s,"scroll",ce,vt,j),a.indexOf("wheel")>=0&&jt(s,"wheel",xe,vt,j),(a.indexOf("touch")>=0&&kf||a.indexOf("pointer")>=0)&&(jt(s,Yn[0],je,vt,j),jt(re,Yn[2],R),jt(re,Yn[3],R),Ae&&jt(s,"click",pe,!0,!0),te&&jt(s,"click",gn),Q&&jt(re,"gesturestart",K),C&&jt(re,"gestureend",ne),I&&jt(s,ir+"enter",ut),G&&jt(s,ir+"leave",lt),J&&jt(s,ir+"move",We)),H.isEnabled=!0,ve&&ve.type&&je(ve),$&&$(H)),H},H.disable=function(){H.isEnabled&&(as.filter(function(ve){return ve!==H&&na(ve.target)}).length||$t(se?re:s,"scroll",gc),H.isPressed&&(H._vx.reset(),H._vy.reset(),$t(V?s:re,Yn[1],Ue,!0)),$t(se?re:s,"scroll",ce,j),$t(s,"wheel",xe,j),$t(s,Yn[0],je,j),$t(re,Yn[2],R),$t(re,Yn[3],R),$t(s,"click",pe,!0),$t(s,"click",gn),$t(re,"gesturestart",K),$t(re,"gestureend",ne),$t(s,ir+"enter",ut),$t(s,ir+"leave",lt),$t(s,ir+"move",We),H.isEnabled=H.isPressed=H.isDragging=!1,ie&&ie(H))},H.kill=H.revert=function(){H.disable();var ve=as.indexOf(H);ve>=0&&as.splice(ve,1),bi===H&&(bi=0)},as.push(H),V&&na(s)&&(bi=H),H.enable(f)},By(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();bt.version="3.12.5";bt.create=function(o){return new bt(o)};bt.register=Wf;bt.getAll=function(){return as.slice()};bt.getById=function(o){return as.filter(function(e){return e.vars.id===o})[0]};Gf()&&Ut.registerPlugin(bt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var be,ts,et,pt,$n,dt,Xf,Ro,ba,ia,Xs,eo,Vt,Wo,xc,Jt,Wh,Xh,ns,qf,zl,Yf,Kt,vc,$f,jf,Ii,yc,Zc,fs,Kc,Io,bc,Nl,to=1,Ht=Date.now,kl=Ht(),Vn=0,qs=0,qh=function(e,t,n){var i=Sn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Yh=function(e,t){return t&&(!Sn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Vy=function o(){return qs&&requestAnimationFrame(o)},$h=function(){return Wo=1},jh=function(){return Wo=0},ei=function(e){return e},Ys=function(e){return Math.round(e*1e5)/1e5||0},Zf=function(){return typeof window<"u"},Kf=function(){return be||Zf()&&(be=window.gsap)&&be.registerPlugin&&be},Cr=function(e){return!!~Xf.indexOf(e)},Jf=function(e){return(e==="Height"?Kc:et["inner"+e])||$n["client"+e]||dt["client"+e]},Qf=function(e){return Wi(e,"getBoundingClientRect")||(Cr(e)?function(){return bo.width=et.innerWidth,bo.height=Kc,bo}:function(){return yi(e)})},Hy=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Wi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Jf(r):e["client"+r])||0}},Wy=function(e,t){return!t||~oi.indexOf(e)?Qf(e):function(){return bo}},ri=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Wi(e,n))?a()-Qf(e)()[r]:Cr(e)?($n[n]||dt[n])-Jf(i):e[n]-e["offset"+i])},no=function(e,t){for(var n=0;n<ns.length;n+=3)(!t||~t.indexOf(ns[n+1]))&&e(ns[n],ns[n+1],ns[n+2])},Sn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},$s=function(e){return typeof e=="number"},rr=function(e){return typeof e=="object"},Us=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ul=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Jr=Math.abs,ep="left",tp="top",Jc="right",Qc="bottom",_r="width",xr="height",ra="Right",sa="Left",aa="Top",oa="Bottom",wt="padding",zn="margin",ws="Width",eu="Height",At="px",Nn=function(e){return et.getComputedStyle(e)},Xy=function(e){var t=Nn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Zh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yi=function(e,t){var n=t&&Nn(e)[xc]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Oo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},np=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},qy=function(e){return function(t){return be.utils.snap(np(e),t)}},tu=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var s;if(!r)return t(i);if(r>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var s=t(i);return!r||Math.abs(s-i)<a||s-i<0==r<0?s:t(r<0?i-e:i+e)}},Yy=function(e){return function(t,n){return tu(np(e))(t,n.direction)}},io=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},It=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Rt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ro=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},so={toggleActions:"play",anticipatePin:0},Fo={top:0,left:0,center:.5,bottom:1,right:1},_o=function(e,t){if(Sn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Fo?Fo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ao=function(e,t,n,i,r,a,s,l){var c=r.startColor,u=r.endColor,h=r.fontSize,d=r.indent,p=r.fontWeight,g=pt.createElement("div"),f=Cr(n)||Wi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=f?dt:n,b=e.indexOf("start")!==-1,y=b?c:u,M="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&f?"fixed;":"absolute;"),(m||l||!f)&&(M+=(i===Ct?Jc:Qc)+":"+(a+parseFloat(d))+"px;"),s&&(M+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],xo(g,0,i,b),g},xo=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+ws]=1,r["border"+s+ws]=0,r[n.p]=t+"px",be.set(e,r)},qe=[],Mc={},Ma,Jh=function(){return Ht()-Vn>34&&(Ma||(Ma=requestAnimationFrame(Si)))},Qr=function(){(!Kt||!Kt.isPressed||Kt.startX>dt.clientWidth)&&($e.cache++,Kt?Ma||(Ma=requestAnimationFrame(Si)):Si(),Vn||Lr("scrollStart"),Vn=Ht())},Bl=function(){jf=et.innerWidth,$f=et.innerHeight},js=function(){$e.cache++,!Vt&&!Yf&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!vc||jf!==et.innerWidth||Math.abs(et.innerHeight-$f)>et.innerHeight*.25)&&Ro.restart(!0)},Pr={},$y=[],ip=function o(){return Rt(Ke,"scrollEnd",o)||cr(!0)},Lr=function(e){return Pr[e]&&Pr[e].map(function(t){return t()})||$y},Mn=[],rp=function(e){for(var t=0;t<Mn.length;t+=5)(!e||Mn[t+4]&&Mn[t+4].query===e)&&(Mn[t].style.cssText=Mn[t+1],Mn[t].getBBox&&Mn[t].setAttribute("transform",Mn[t+2]||""),Mn[t+3].uncache=1)},nu=function(e,t){var n;for(Jt=0;Jt<qe.length;Jt++)n=qe[Jt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Io=!0,t&&rp(t),t||Lr("revert")},sp=function(e,t){$e.cache++,(t||!Qt)&&$e.forEach(function(n){return rn(n)&&n.cacheID++&&(n.rec=0)}),Sn(e)&&(et.history.scrollRestoration=Zc=e)},Qt,vr=0,Qh,jy=function(){if(Qh!==vr){var e=Qh=vr;requestAnimationFrame(function(){return e===vr&&cr(!0)})}},ap=function(){dt.appendChild(fs),Kc=!Kt&&fs.offsetHeight||et.innerHeight,dt.removeChild(fs)},ed=function(e){return ba(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},cr=function(e,t){if(Vn&&!e&&!Io){It(Ke,"scrollEnd",ip);return}ap(),Qt=Ke.isRefreshing=!0,$e.forEach(function(i){return rn(i)&&++i.cacheID&&(i.rec=i())});var n=Lr("refreshInit");qf&&Ke.sort(),t||nu(),$e.forEach(function(i){rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),qe.slice(0).forEach(function(i){return i.refresh()}),Io=!1,qe.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),bc=1,ed(!0),qe.forEach(function(i){var r=ri(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,s=i._startClamp&&i.start>=r;(a||s)&&i.setPositions(s?r-1:i.start,a?Math.max(s?r:i.start+1,r):i.end,!0)}),ed(!1),bc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),$e.forEach(function(i){rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),sp(Zc,1),Ro.pause(),vr++,Qt=2,Si(2),qe.forEach(function(i){return rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Qt=Ke.isRefreshing=!1,Lr("refresh")},Sc=0,vo=1,la,Si=function(e){if(e===2||!Qt&&!Io){Ke.isUpdating=!0,la&&la.update(0);var t=qe.length,n=Ht(),i=n-kl>=50,r=t&&qe[0].scroll();if(vo=Sc>r?-1:1,Qt||(Sc=r),i&&(Vn&&!Wo&&n-Vn>200&&(Vn=0,Lr("scrollEnd")),Xs=kl,kl=n),vo<0){for(Jt=t;Jt-- >0;)qe[Jt]&&qe[Jt].update(0,i);vo=1}else for(Jt=0;Jt<t;Jt++)qe[Jt]&&qe[Jt].update(0,i);Ke.isUpdating=!1}Ma=0},wc=[ep,tp,Qc,Jc,zn+oa,zn+ra,zn+aa,zn+sa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yo=wc.concat([_r,xr,"boxSizing","max"+ws,"max"+eu,"position",zn,wt,wt+aa,wt+ra,wt+oa,wt+sa]),Zy=function(e,t,n){ps(n);var i=e._gsap;if(i.spacerIsNative)ps(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Gl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=wc.length,a=t.style,s=e.style,l;r--;)l=wc[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[Qc]=s[Jc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[_r]=Oo(e,nn)+At,a[xr]=Oo(e,Ct)+At,a[wt]=s[zn]=s[tp]=s[ep]="0",ps(i),s[_r]=s["max"+ws]=n[_r],s[xr]=s["max"+eu]=n[xr],s[wt]=n[wt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ky=/([A-Z])/g,ps=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(Ky,"-$1").toLowerCase())}},oo=function(e){for(var t=yo.length,n=e.style,i=[],r=0;r<t;r++)i.push(yo[r],n[yo[r]]);return i.t=e,i},Jy=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,s;a<r;a+=2)s=e[a],i.push(s,s in t?t[s]:e[a+1]);return i.t=e.t,i},bo={left:0,top:0},td=function(e,t,n,i,r,a,s,l,c,u,h,d,p,g){rn(e)&&(e=e(l)),Sn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?_o("0"+e.substr(3),n):0));var f=p?p.time():0,m,_,b;if(p&&p.seek(0),isNaN(e)||(e=+e),$s(e))p&&(e=be.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),s&&xo(s,n,i,!0);else{rn(t)&&(t=t(l));var y=(e||"0").split(" "),M,v,A,E;b=an(t,l)||dt,M=yi(b)||{},(!M||!M.left&&!M.top)&&Nn(b).display==="none"&&(E=b.style.display,b.style.display="block",M=yi(b),E?b.style.display=E:b.style.removeProperty("display")),v=_o(y[0],M[i.d]),A=_o(y[1]||"0",n),e=M[i.p]-c[i.p]-u+v+r-A,s&&xo(s,A,i,n-A<20||s._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var x=e+n,w=a._isStart;m="scroll"+i.d2,xo(a,x,i,w&&x>20||!w&&(h?Math.max(dt[m],$n[m]):a.parentNode[m])<=x+1),h&&(c=yi(s),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+At))}return p&&b&&(m=yi(b),p.seek(d),_=yi(b),p._caScrollDist=m[i.p]-_[i.p],e=e/p._caScrollDist*d),p&&p.seek(f),p?e:Math.round(e)},Qy=/(webkit|moz|length|cssText|inset)/i,nd=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,s;if(t===dt){e._stOrig=r.cssText,s=Nn(e);for(a in s)!+a&&!Qy.test(a)&&s[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=s[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},op=function(e,t,n){var i=t,r=i;return function(a){var s=Math.round(e());return s!==i&&s!==r&&Math.abs(s-i)>3&&Math.abs(s-r)>3&&(a=s,n&&n()),r=i,i=a,a}},lo=function(e,t,n){var i={};i[t.p]="+="+n,be.set(e,i)},id=function(e,t){var n=Yi(e,t),i="_scroll"+t.p2,r=function a(s,l,c,u,h){var d=a.tween,p=l.onComplete,g={};c=c||n();var f=op(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||s-c,d&&d.kill(),l[i]=s,l.inherit=!1,l.modifiers=g,g[i]=function(){return f(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){$e.cache++,a.tween&&Si()},l.onComplete=function(){a.tween=0,p&&p.call(d)},d=a.tween=be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},It(e,"wheel",n.wheelHandler),Ke.isTouch&&It(e,"touchmove",n.wheelHandler),r},Ke=function(){function o(t,n){ts||o.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yc(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!qs){this.update=this.refresh=this.kill=ei;return}n=Zh(Sn(n)||$s(n)||n.nodeType?{trigger:n}:n,so);var r=n,a=r.onUpdate,s=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,d=r.trigger,p=r.pin,g=r.pinSpacing,f=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,b=r.onSnapComplete,y=r.once,M=r.snap,v=r.pinReparent,A=r.pinSpacer,E=r.containerAnimation,x=r.fastScrollEnd,w=r.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?nn:Ct,U=!h&&h!==0,k=an(n.scroller||et),O=be.core.getCache(k),I=Cr(k),G=("pinType"in n?n.pinType:Wi(k,"pinType")||I&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=U&&n.toggleActions.split(" "),V="markers"in n?n.markers:so.markers,Q=I?0:parseFloat(Nn(k)["border"+D.p2+ws])||0,C=this,B=n.onRefreshInit&&function(){return n.onRefreshInit(C)},$=Hy(k,I,D),ie=Wy(k,I),te=0,ae=0,j=0,Ae=Yi(k,D),fe,Me,ge,Ie,Le,le,Ge,nt,it,H,Je,Ve,vt,Qe,P,S,Z,ee,se,re,Te,L,N,pe,oe,me,ye,Se,Be,Ue,je,R,K,ne,ce,xe,We,ut,lt;if(C._startClamp=C._endClamp=!1,C._dir=D,m*=45,C.scroller=k,C.scroll=E?E.time.bind(E):Ae,Ie=Ae(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(qf=1,n.refreshPriority===-9999&&(la=C)),O.tweenScroll=O.tweenScroll||{top:id(k,Ct),left:id(k,nn)},C.tweenTo=fe=O.tweenScroll[D.p],C.scrubDuration=function(he){K=$s(he)&&he,K?R?R.duration(he):R=be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return _&&_(C)}}):(R&&R.progress(1).kill(),R=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Ue=0,l||(l=i.vars.id)),M&&((!rr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in dt.style&&be.set(I?[dt,$n]:k,{scrollBehavior:"auto"}),$e.forEach(function(he){return rn(he)&&he.target===(I?pt.scrollingElement||$n:k)&&(he.smooth=!1)}),ge=rn(M.snapTo)?M.snapTo:M.snapTo==="labels"?qy(i):M.snapTo==="labelsDirectional"?Yy(i):M.directional!==!1?function(he,ke){return tu(M.snapTo)(he,Ht()-ae<500?0:ke.direction)}:be.utils.snap(M.snapTo),ne=M.duration||{min:.1,max:2},ne=rr(ne)?ia(ne.min,ne.max):ia(ne,ne),ce=be.delayedCall(M.delay||K/2||.1,function(){var he=Ae(),ke=Ht()-ae<500,Pe=fe.tween;if((ke||Math.abs(C.getVelocity())<10)&&!Pe&&!Wo&&te!==he){var Fe=(he-le)/Qe,T=i&&!U?i.totalProgress():Fe,F=ke?0:(T-je)/(Ht()-Xs)*1e3||0,X=be.utils.clamp(-Fe,1-Fe,Jr(F/2)*F/.185),z=Fe+(M.inertia===!1?0:X),q,de,_e=M,Re=_e.onStart,we=_e.onInterrupt,Oe=_e.onComplete;if(q=ge(z,C),$s(q)||(q=z),de=Math.round(le+q*Qe),he<=Ge&&he>=le&&de!==he){if(Pe&&!Pe._initted&&Pe.data<=Jr(de-he))return;M.inertia===!1&&(X=q-Fe),fe(de,{duration:ne(Jr(Math.max(Jr(z-T),Jr(q-T))*.185/F/.05||0)),ease:M.ease||"power3",data:Jr(de-he),onInterrupt:function(){return ce.restart(!0)&&we&&we(C)},onComplete:function(){C.update(),te=Ae(),i&&(R?R.resetTo("totalProgress",q,i._tTime/i._tDur):i.progress(q)),Ue=je=i&&!U?i.totalProgress():C.progress,b&&b(C),Oe&&Oe(C)}},he,X*Qe,de-he-X*Qe),Re&&Re(C,fe.tween)}}else C.isActive&&te!==he&&ce.restart(!0)}).pause()),l&&(Mc[l]=C),d=C.trigger=an(d||p!==!0&&p),lt=d&&d._gsap&&d._gsap.stRevert,lt&&(lt=lt(C)),p=p===!0?d:an(p),Sn(s)&&(s={targets:d,className:s}),p&&(g===!1||g===zn||(g=!g&&p.parentNode&&p.parentNode.style&&Nn(p.parentNode).display==="flex"?!1:wt),C.pin=p,Me=be.core.getCache(p),Me.spacer?P=Me.pinState:(A&&(A=an(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Me.spacerIsNative=!!A,A&&(Me.spacerState=oo(A))),Me.spacer=ee=A||pt.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),Me.pinState=P=oo(p)),n.force3D!==!1&&be.set(p,{force3D:!0}),C.spacer=ee=Me.spacer,Be=Nn(p),pe=Be[g+D.os2],re=be.getProperty(p),Te=be.quickSetter(p,D.a,At),Gl(p,ee,Be),Z=oo(p)),V){Ve=rr(V)?Zh(V,Kh):Kh,H=ao("scroller-start",l,k,D,Ve,0),Je=ao("scroller-end",l,k,D,Ve,0,H),se=H["offset"+D.op.d2];var gn=an(Wi(k,"content")||k);nt=this.markerStart=ao("start",l,gn,D,Ve,se,0,E),it=this.markerEnd=ao("end",l,gn,D,Ve,se,0,E),E&&(ut=be.quickSetter([nt,it],D.a,At)),!G&&!(oi.length&&Wi(k,"fixedMarkers")===!0)&&(Xy(I?dt:k),be.set([H,Je],{force3D:!0}),me=be.quickSetter(H,D.a,At),Se=be.quickSetter(Je,D.a,At))}if(E){var ve=E.vars.onUpdate,Ee=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),ve&&ve.apply(E,Ee||[])})}if(C.previous=function(){return qe[qe.indexOf(C)-1]},C.next=function(){return qe[qe.indexOf(C)+1]},C.revert=function(he,ke){if(!ke)return C.kill(!0);var Pe=he!==!1||!C.enabled,Fe=Vt;Pe!==C.isReverted&&(Pe&&(xe=Math.max(Ae(),C.scroll.rec||0),j=C.progress,We=i&&i.progress()),nt&&[nt,it,H,Je].forEach(function(T){return T.style.display=Pe?"none":"block"}),Pe&&(Vt=C,C.update(Pe)),p&&(!v||!C.isActive)&&(Pe?Zy(p,ee,P):Gl(p,ee,Nn(p),oe)),Pe||C.update(Pe),Vt=Fe,C.isReverted=Pe)},C.refresh=function(he,ke,Pe,Fe){if(!((Vt||!C.enabled)&&!ke)){if(p&&he&&Vn){It(o,"scrollEnd",ip);return}!Qt&&B&&B(C),Vt=C,fe.tween&&!Pe&&(fe.tween.kill(),fe.tween=0),R&&R.pause(),f&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var T=$(),F=ie(),X=E?E.duration():ri(k,D),z=Qe<=.01,q=0,de=Fe||0,_e=rr(Pe)?Pe.end:n.end,Re=n.endTrigger||d,we=rr(Pe)?Pe.start:n.start||(n.start===0||!d?0:p?"0 0":"0 100%"),Oe=C.pinnedContainer=n.pinnedContainer&&an(n.pinnedContainer,C),ze=d&&Math.max(0,qe.indexOf(C))||0,De=ze,Xe,st,Nt,Rn,Ye,Ce,sn,_t,Kn,Ci,Bt,hi,Mt;for(V&&rr(Pe)&&(hi=be.getProperty(H,D.p),Mt=be.getProperty(Je,D.p));De--;)Ce=qe[De],Ce.end||Ce.refresh(0,1)||(Vt=C),sn=Ce.pin,sn&&(sn===d||sn===p||sn===Oe)&&!Ce.isReverted&&(Ci||(Ci=[]),Ci.unshift(Ce),Ce.revert(!0,!0)),Ce!==qe[De]&&(ze--,De--);for(rn(we)&&(we=we(C)),we=qh(we,"start",C),le=td(we,d,T,D,Ae(),nt,H,C,F,Q,G,X,E,C._startClamp&&"_startClamp")||(p?-.001:0),rn(_e)&&(_e=_e(C)),Sn(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(Sn(we)?we.split(" ")[0]:"")+_e:(q=_o(_e.substr(2),T),_e=Sn(we)?we:(E?be.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,le):le)+q,Re=d)),_e=qh(_e,"end",C),Ge=Math.max(le,td(_e||(Re?"100% 0":X),Re,T,D,Ae()+q,it,Je,C,F,Q,G,X,E,C._endClamp&&"_endClamp"))||-.001,q=0,De=ze;De--;)Ce=qe[De],sn=Ce.pin,sn&&Ce.start-Ce._pinPush<=le&&!E&&Ce.end>0&&(Xe=Ce.end-(C._startClamp?Math.max(0,Ce.start):Ce.start),(sn===d&&Ce.start-Ce._pinPush<le||sn===Oe)&&isNaN(we)&&(q+=Xe*(1-Ce.progress)),sn===p&&(de+=Xe));if(le+=q,Ge+=q,C._startClamp&&(C._startClamp+=q),C._endClamp&&!Qt&&(C._endClamp=Ge||-.001,Ge=Math.min(Ge,ri(k,D))),Qe=Ge-le||(le-=.01)&&.001,z&&(j=be.utils.clamp(0,1,be.utils.normalize(le,Ge,xe))),C._pinPush=de,nt&&q&&(Xe={},Xe[D.a]="+="+q,Oe&&(Xe[D.p]="-="+Ae()),be.set([nt,it],Xe)),p&&!(bc&&C.end>=ri(k,D)))Xe=Nn(p),Rn=D===Ct,Nt=Ae(),L=parseFloat(re(D.a))+de,!X&&Ge>1&&(Bt=(I?pt.scrollingElement||$n:k).style,Bt={style:Bt,value:Bt["overflow"+D.a.toUpperCase()]},I&&Nn(dt)["overflow"+D.a.toUpperCase()]!=="scroll"&&(Bt.style["overflow"+D.a.toUpperCase()]="scroll")),Gl(p,ee,Xe),Z=oo(p),st=yi(p,!0),_t=G&&Yi(k,Rn?nn:Ct)(),g?(oe=[g+D.os2,Qe+de+At],oe.t=ee,De=g===wt?Oo(p,D)+Qe+de:0,De&&(oe.push(D.d,De+At),ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=De+At)),ps(oe),Oe&&qe.forEach(function(_n){_n.pin===Oe&&_n.vars.pinSpacing!==!1&&(_n._subPinOffset=!0)}),G&&Ae(xe)):(De=Oo(p,D),De&&ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=De+At)),G&&(Ye={top:st.top+(Rn?Nt-le:_t)+At,left:st.left+(Rn?_t:Nt-le)+At,boxSizing:"border-box",position:"fixed"},Ye[_r]=Ye["max"+ws]=Math.ceil(st.width)+At,Ye[xr]=Ye["max"+eu]=Math.ceil(st.height)+At,Ye[zn]=Ye[zn+aa]=Ye[zn+ra]=Ye[zn+oa]=Ye[zn+sa]="0",Ye[wt]=Xe[wt],Ye[wt+aa]=Xe[wt+aa],Ye[wt+ra]=Xe[wt+ra],Ye[wt+oa]=Xe[wt+oa],Ye[wt+sa]=Xe[wt+sa],S=Jy(P,Ye,v),Qt&&Ae(0)),i?(Kn=i._initted,zl(1),i.render(i.duration(),!0,!0),N=re(D.a)-L+Qe+de,ye=Math.abs(Qe-N)>1,G&&ye&&S.splice(S.length-2,2),i.render(0,!0,!0),Kn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zl(0)):N=Qe,Bt&&(Bt.value?Bt.style["overflow"+D.a.toUpperCase()]=Bt.value:Bt.style.removeProperty("overflow-"+D.a));else if(d&&Ae()&&!E)for(st=d.parentNode;st&&st!==dt;)st._pinOffset&&(le-=st._pinOffset,Ge-=st._pinOffset),st=st.parentNode;Ci&&Ci.forEach(function(_n){return _n.revert(!1,!0)}),C.start=le,C.end=Ge,Ie=Le=Qt?xe:Ae(),!E&&!Qt&&(Ie<xe&&Ae(xe),C.scroll.rec=0),C.revert(!1,!0),ae=Ht(),ce&&(te=-1,ce.restart(!0)),Vt=0,i&&U&&(i._initted||We)&&i.progress()!==We&&i.progress(We||0,!0).render(i.time(),!0,!0),(z||j!==C.progress||E||f)&&(i&&!U&&i.totalProgress(E&&le<-.001&&!j?be.utils.normalize(le,Ge,0):j,!0),C.progress=z||(Ie-le)/Qe===j?0:j),p&&g&&(ee._pinOffset=Math.round(C.progress*N)),R&&R.invalidate(),isNaN(hi)||(hi-=be.getProperty(H,D.p),Mt-=be.getProperty(Je,D.p),lo(H,D,hi),lo(nt,D,hi-(Fe||0)),lo(Je,D,Mt),lo(it,D,Mt-(Fe||0))),z&&!Qt&&C.update(),u&&!Qt&&!vt&&(vt=!0,u(C),vt=!1)}},C.getVelocity=function(){return(Ae()-Le)/(Ht()-Xs)*1e3||0},C.endAnimation=function(){Us(C.callbackAnimation),i&&(R?R.progress(1):i.paused()?U||Us(i,C.direction<0,1):Us(i,i.reversed()))},C.labelToScroll=function(he){return i&&i.labels&&(le||C.refresh()||le)+i.labels[he]/i.duration()*Qe||0},C.getTrailing=function(he){var ke=qe.indexOf(C),Pe=C.direction>0?qe.slice(0,ke).reverse():qe.slice(ke+1);return(Sn(he)?Pe.filter(function(Fe){return Fe.vars.preventOverlaps===he}):Pe).filter(function(Fe){return C.direction>0?Fe.end<=le:Fe.start>=Ge})},C.update=function(he,ke,Pe){if(!(E&&!Pe&&!he)){var Fe=Qt===!0?xe:C.scroll(),T=he?0:(Fe-le)/Qe,F=T<0?0:T>1?1:T||0,X=C.progress,z,q,de,_e,Re,we,Oe,ze;if(ke&&(Le=Ie,Ie=E?Ae():Fe,M&&(je=Ue,Ue=i&&!U?i.totalProgress():F)),m&&p&&!Vt&&!to&&Vn&&(!F&&le<Fe+(Fe-Le)/(Ht()-Xs)*m?F=1e-4:F===1&&Ge>Fe+(Fe-Le)/(Ht()-Xs)*m&&(F=.9999)),F!==X&&C.enabled){if(z=C.isActive=!!F&&F<1,q=!!X&&X<1,we=z!==q,Re=we||!!F!=!!X,C.direction=F>X?1:-1,C.progress=F,Re&&!Vt&&(de=F&&!X?0:F===1?1:X===1?2:3,U&&(_e=!we&&Y[de+1]!=="none"&&Y[de+1]||Y[de],ze=i&&(_e==="complete"||_e==="reset"||_e in i))),w&&(we||ze)&&(ze||h||!i)&&(rn(w)?w(C):C.getTrailing(w).forEach(function(Nt){return Nt.endAnimation()})),U||(R&&!Vt&&!to?(R._dp._time-R._start!==R._time&&R.render(R._dp._time-R._start),R.resetTo?R.resetTo("totalProgress",F,i._tTime/i._tDur):(R.vars.totalProgress=F,R.invalidate().restart())):i&&i.totalProgress(F,!!(Vt&&(ae||he)))),p){if(he&&g&&(ee.style[g+D.os2]=pe),!G)Te(Ys(L+N*F));else if(Re){if(Oe=!he&&F>X&&Ge+1>Fe&&Fe+1>=ri(k,D),v)if(!he&&(z||Oe)){var De=yi(p,!0),Xe=Fe-le;nd(p,dt,De.top+(D===Ct?Xe:0)+At,De.left+(D===Ct?0:Xe)+At)}else nd(p,ee);ps(z||Oe?S:Z),ye&&F<1&&z||Te(L+(F===1&&!Oe?N:0))}}M&&!fe.tween&&!Vt&&!to&&ce.restart(!0),s&&(we||y&&F&&(F<1||!Nl))&&ba(s.targets).forEach(function(Nt){return Nt.classList[z||y?"add":"remove"](s.className)}),a&&!U&&!he&&a(C),Re&&!Vt?(U&&(ze&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),a&&a(C)),(we||!Nl)&&(c&&we&&Ul(C,c),J[de]&&Ul(C,J[de]),y&&(F===1?C.kill(!1,1):J[de]=0),we||(de=F===1?1:3,J[de]&&Ul(C,J[de]))),x&&!z&&Math.abs(C.getVelocity())>($s(x)?x:2500)&&(Us(C.callbackAnimation),R?R.progress(1):Us(i,_e==="reverse"?1:!F,1))):U&&a&&!Vt&&a(C)}if(Se){var st=E?Fe/E.duration()*(E._caScrollDist||0):Fe;me(st+(H._isFlipped?1:0)),Se(st)}ut&&ut(-Fe/E.duration()*(E._caScrollDist||0))}},C.enable=function(he,ke){C.enabled||(C.enabled=!0,It(k,"resize",js),I||It(k,"scroll",Qr),B&&It(o,"refreshInit",B),he!==!1&&(C.progress=j=0,Ie=Le=te=Ae()),ke!==!1&&C.refresh())},C.getTween=function(he){return he&&fe?fe.tween:R},C.setPositions=function(he,ke,Pe,Fe){if(E){var T=E.scrollTrigger,F=E.duration(),X=T.end-T.start;he=T.start+X*he/F,ke=T.start+X*ke/F}C.refresh(!1,!1,{start:Yh(he,Pe&&!!C._startClamp),end:Yh(ke,Pe&&!!C._endClamp)},Fe),C.update()},C.adjustPinSpacing=function(he){if(oe&&he){var ke=oe.indexOf(D.d)+1;oe[ke]=parseFloat(oe[ke])+he+At,oe[1]=parseFloat(oe[1])+he+At,ps(oe)}},C.disable=function(he,ke){if(C.enabled&&(he!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,ke||R&&R.pause(),xe=0,Me&&(Me.uncache=1),B&&Rt(o,"refreshInit",B),ce&&(ce.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!I)){for(var Pe=qe.length;Pe--;)if(qe[Pe].scroller===k&&qe[Pe]!==C)return;Rt(k,"resize",js),I||Rt(k,"scroll",Qr)}},C.kill=function(he,ke){C.disable(he,ke),R&&!ke&&R.kill(),l&&delete Mc[l];var Pe=qe.indexOf(C);Pe>=0&&qe.splice(Pe,1),Pe===Jt&&vo>0&&Jt--,Pe=0,qe.forEach(function(Fe){return Fe.scroller===C.scroller&&(Pe=1)}),Pe||Qt||(C.scroll.rec=0),i&&(i.scrollTrigger=null,he&&i.revert({kill:!1}),ke||i.kill()),nt&&[nt,it,H,Je].forEach(function(Fe){return Fe.parentNode&&Fe.parentNode.removeChild(Fe)}),la===C&&(la=0),p&&(Me&&(Me.uncache=1),Pe=0,qe.forEach(function(Fe){return Fe.pin===p&&Pe++}),Pe||(Me.spacer=0)),n.onKill&&n.onKill(C)},qe.push(C),C.enable(!1,!1),lt&&lt(C),i&&i.add&&!Qe){var Ne=C.update;C.update=function(){C.update=Ne,le||Ge||C.refresh()},be.delayedCall(.01,C.update),Qe=.01,le=Ge=0}else C.refresh();p&&jy()},o.register=function(n){return ts||(be=n||Kf(),Zf()&&window.document&&o.enable(),ts=qs),ts},o.defaults=function(n){if(n)for(var i in n)so[i]=n[i];return so},o.disable=function(n,i){qs=0,qe.forEach(function(a){return a[i?"kill":"disable"](n)}),Rt(et,"wheel",Qr),Rt(pt,"scroll",Qr),clearInterval(eo),Rt(pt,"touchcancel",ei),Rt(dt,"touchstart",ei),io(Rt,pt,"pointerdown,touchstart,mousedown",$h),io(Rt,pt,"pointerup,touchend,mouseup",jh),Ro.kill(),no(Rt);for(var r=0;r<$e.length;r+=3)ro(Rt,$e[r],$e[r+1]),ro(Rt,$e[r],$e[r+2])},o.enable=function(){if(et=window,pt=document,$n=pt.documentElement,dt=pt.body,be&&(ba=be.utils.toArray,ia=be.utils.clamp,yc=be.core.context||ei,zl=be.core.suppressOverwrites||ei,Zc=et.history.scrollRestoration||"auto",Sc=et.pageYOffset,be.core.globals("ScrollTrigger",o),dt)){qs=1,fs=document.createElement("div"),fs.style.height="100vh",fs.style.position="absolute",ap(),Vy(),bt.register(be),o.isTouch=bt.isTouch,Ii=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vc=bt.isTouch===1,It(et,"wheel",Qr),Xf=[et,pt,$n,dt],be.matchMedia?(o.matchMedia=function(l){var c=be.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},be.addEventListener("matchMediaInit",function(){return nu()}),be.addEventListener("matchMediaRevert",function(){return rp()}),be.addEventListener("matchMedia",function(){cr(0,1),Lr("matchMedia")}),be.matchMedia("(orientation: portrait)",function(){return Bl(),Bl})):console.warn("Requires GSAP 3.11.0 or later"),Bl(),It(pt,"scroll",Qr);var n=dt.style,i=n.borderTopStyle,r=be.core.Animation.prototype,a,s;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=yi(dt),Ct.m=Math.round(a.top+Ct.sc())||0,nn.m=Math.round(a.left+nn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),eo=setInterval(Jh,250),be.delayedCall(.5,function(){return to=0}),It(pt,"touchcancel",ei),It(dt,"touchstart",ei),io(It,pt,"pointerdown,touchstart,mousedown",$h),io(It,pt,"pointerup,touchend,mouseup",jh),xc=be.utils.checkPrefix("transform"),yo.push(xc),ts=Ht(),Ro=be.delayedCall(.2,cr).pause(),ns=[pt,"visibilitychange",function(){var l=et.innerWidth,c=et.innerHeight;pt.hidden?(Wh=l,Xh=c):(Wh!==l||Xh!==c)&&js()},pt,"DOMContentLoaded",cr,et,"load",cr,et,"resize",js],no(It),qe.forEach(function(l){return l.enable(0,1)}),s=0;s<$e.length;s+=3)ro(Rt,$e[s],$e[s+1]),ro(Rt,$e[s],$e[s+2])}},o.config=function(n){"limitCallbacks"in n&&(Nl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(eo)||(eo=i)&&setInterval(Jh,i),"ignoreMobileResize"in n&&(vc=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(no(Rt)||no(It,n.autoRefreshEvents||"none"),Yf=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var r=an(n),a=$e.indexOf(r),s=Cr(r);~a&&$e.splice(a,s?6:2),i&&(s?oi.unshift(et,i,dt,i,$n,i):oi.unshift(r,i))},o.clearMatchMedia=function(n){qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},o.isInViewport=function(n,i,r){var a=(Sn(n)?an(n):n).getBoundingClientRect(),s=a[r?_r:xr]*i||0;return r?a.right-s>0&&a.left+s<et.innerWidth:a.bottom-s>0&&a.top+s<et.innerHeight},o.positionInViewport=function(n,i,r){Sn(n)&&(n=an(n));var a=n.getBoundingClientRect(),s=a[r?_r:xr],l=i==null?s/2:i in Fo?Fo[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return r?(a.left+l)/et.innerWidth:(a.top+l)/et.innerHeight},o.killAll=function(n){if(qe.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Pr.killAll||[];Pr={},i.forEach(function(r){return r()})}},o}();Ke.version="3.12.5";Ke.saveStyles=function(o){return o?ba(o).forEach(function(e){if(e&&e.style){var t=Mn.indexOf(e);t>=0&&Mn.splice(t,5),Mn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),yc())}}):Mn};Ke.revert=function(o,e){return nu(!o,e)};Ke.create=function(o,e){return new Ke(o,e)};Ke.refresh=function(o){return o?js():(ts||Ke.register())&&cr(!0)};Ke.update=function(o){return++$e.cache&&Si(o===!0?2:0)};Ke.clearScrollMemory=sp;Ke.maxScroll=function(o,e){return ri(o,e?nn:Ct)};Ke.getScrollFunc=function(o,e){return Yi(an(o),e?nn:Ct)};Ke.getById=function(o){return Mc[o]};Ke.getAll=function(){return qe.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!Vn};Ke.snapDirectional=tu;Ke.addEventListener=function(o,e){var t=Pr[o]||(Pr[o]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(o,e){var t=Pr[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(o,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var h=[],d=[],p=be.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),d.push(g),r<=h.length&&p.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&rn(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return rn(r)&&(r=r(),It(Ke,"refresh",function(){return r=e.batchMax()})),ba(o).forEach(function(l){var c={};for(s in n)c[s]=n[s];c.trigger=l,t.push(Ke.create(c))}),t};var rd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Vl=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===$n&&o(dt,t)},co={auto:1,scroll:1},eb=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||be.core.getCache(r),s=Ht(),l;if(!a._isScrollT||s-a._isScrollT>2e3){for(;r&&r!==dt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(co[(l=Nn(r)).overflowY]||co[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Cr(r)&&(co[(l=Nn(r)).overflowY]||co[l.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},lp=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&eb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&It(pt,bt.eventTypes[0],ad,!1,!0)},onDisable:function(){return Rt(pt,bt.eventTypes[0],ad,!0)}})},tb=/(input|label|select|textarea)/i,sd,ad=function(e){var t=tb.test(e.target.tagName);(t||sd)&&(e._gsapAllow=!0,sd=t)},nb=function(e){rr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,s,l,c=an(e.target)||$n,u=be.core.globals().ScrollSmoother,h=u&&u.get(),d=Ii&&(e.content&&an(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=Yi(c,Ct),g=Yi(c,nn),f=1,m=(bt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,_=0,b=rn(i)?function(){return i(s)}:function(){return i||2.8},y,M,v=lp(c,e.type,!0,r),A=function(){return M=!1},E=ei,x=ei,w=function(){l=ri(c,Ct),x=ia(Ii?1:0,l),n&&(E=ia(0,ri(c,nn))),y=vr},D=function(){d._gsap.y=Ys(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},U=function(){if(M){requestAnimationFrame(A);var V=Ys(s.deltaY/2),Q=x(p.v-V);if(d&&Q!==p.v+p.offset){p.offset=Q-p.v;var C=Ys((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",p.cacheID=$e.cache,Si()}return!0}p.offset&&D(),M=!0},k,O,I,G,J=function(){w(),k.isActive()&&k.vars.scrollY>l&&(p()>l?k.progress(1)&&p(l):k.resetTo("scrollY",l))};return d&&be.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return Ii&&Y.type==="touchmove"&&U()||f>1.05&&Y.type!=="touchstart"||s.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){M=!1;var Y=f;f=Ys((et.visualViewport&&et.visualViewport.scale||1)/m),k.pause(),Y!==f&&Vl(c,f>1.01?!0:n?!1:"x"),O=g(),I=p(),w(),y=vr},e.onRelease=e.onGestureStart=function(Y,V){if(p.offset&&D(),!V)G.restart(!0);else{$e.cache++;var Q=b(),C,B;n&&(C=g(),B=C+Q*.05*-Y.velocityX/.227,Q*=rd(g,C,B,ri(c,nn)),k.vars.scrollX=E(B)),C=p(),B=C+Q*.05*-Y.velocityY/.227,Q*=rd(p,C,B,ri(c,Ct)),k.vars.scrollY=x(B),k.invalidate().duration(Q).play(.01),(Ii&&k.vars.scrollY>=l||C>=l-1)&&be.to({},{onUpdate:J,duration:Q})}a&&a(Y)},e.onWheel=function(){k._ts&&k.pause(),Ht()-_>1e3&&(y=0,_=Ht())},e.onChange=function(Y,V,Q,C,B){if(vr!==y&&w(),V&&n&&g(E(C[2]===V?O+(Y.startX-Y.x):g()+V-C[1])),Q){p.offset&&D();var $=B[2]===Q,ie=$?I+Y.startY-Y.y:p()+Q-B[1],te=x(ie);$&&ie!==te&&(I+=te-ie),p(te)}(Q||V)&&Si()},e.onEnable=function(){Vl(c,n?!1:"x"),Ke.addEventListener("refresh",J),It(et,"resize",J),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),v.enable()},e.onDisable=function(){Vl(c,!0),Rt(et,"resize",J),Ke.removeEventListener("refresh",J),v.kill()},e.lockAxis=e.lockAxis!==!1,s=new bt(e),s.iOS=Ii,Ii&&!p()&&p(1),Ii&&be.ticker.add(ei),G=s._dc,k=be.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:op(p,p(),function(){return k.pause()})},onUpdate:Si,onComplete:G.vars.onComplete}),s};Ke.sort=function(o){return qe.sort(o||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(o){return new bt(o)};Ke.normalizeScroll=function(o){if(typeof o>"u")return Kt;if(o===!0&&Kt)return Kt.enable();if(o===!1){Kt&&Kt.kill(),Kt=o;return}var e=o instanceof bt?o:nb(o);return Kt&&Kt.target===e.target&&Kt.kill(),Cr(e.target)&&(Kt=e),e};Ke.core={_getVelocityProp:_c,_inputObserver:lp,_scrollers:$e,_proxies:oi,bridge:{ss:function(){Vn||Lr("scrollStart"),Vn=Ht()},ref:function(){return Vt}}};Kf()&&be.registerPlugin(Ke);As.registerPlugin(Ke);const ci=new Rc;ci.hide();const cp=document.querySelector("canvas.webgl"),zo=new Rd;new Fd;const rt={};rt.count=1e5;rt.size=.01;rt.radius=5;rt.branches=3;rt.spin=4;rt.randomness=.2;rt.randomnessPower=4.5;rt.insideColor="#ff6030";rt.outsideColor="#ba5ce6";let Bs=null,Hl=null,Zs=null;const ui=()=>{Zs!==null&&(Bs.dispose(),Hl.dispose(),zo.remove(Zs)),Bs=new Ai;const o=new Float32Array(rt.count*3),e=new Float32Array(rt.count*3),t=new at(rt.insideColor),n=new at(rt.outsideColor);for(let i=0;i<rt.count;i++){const r=i*3,a=i%rt.branches/rt.branches*Math.PI*2,s=Math.random()*rt.radius,l=s*rt.spin,c=Math.pow(Math.random(),rt.randomnessPower)*(Math.random()<.5?1:-1),u=Math.pow(Math.random(),rt.randomnessPower)*(Math.random()<.5?1:-1),h=Math.pow(Math.random(),rt.randomnessPower)*(Math.random()<.5?1:-1);o[r+0]=Math.cos(a+l)*s+c,o[r+1]=u,o[r+2]=Math.sin(a+l)*s+h;const d=t.clone();d.lerp(n,s/rt.radius),e[r+0]=d.r,e[r+1]=d.g,e[r+2]=d.b}Bs.setAttribute("position",new un(o,3)),Bs.setAttribute("color",new un(e,3)),Hl=new Dc({size:rt.size,sizeAttenuation:!0,depthWrite:!1,blending:So,vertexColors:!0}),Zs=new Id(Bs,Hl),zo.add(Zs)};ui();ci.add(rt,"count").min(100).max(1e6).step(100).onFinishChange(ui);ci.add(rt,"size").min(.001).max(.1).step(.001).onFinishChange(ui);ci.add(rt,"radius").min(.001).max(20).step(.001).onFinishChange(ui);ci.add(rt,"branches").min(2).max(20).step(1).onFinishChange(ui);ci.add(rt,"spin").min(-5).max(5).step(.001).onFinishChange(ui);ci.add(rt,"randomness").min(0).max(2).step(.001).onFinishChange(ui);ci.add(rt,"randomnessPower").min(1).max(10).step(.001).onFinishChange(ui);ci.addColor(rt,"insideColor").onFinishChange(ui);ci.addColor(rt,"outsideColor").onFinishChange(ui);const kn={width:window.innerWidth*.9,height:window.innerHeight+10};window.addEventListener("resize",()=>{kn.width=window.innerWidth*.9,kn.height=window.innerHeight+10,Ei.aspect=kn.width/kn.height,Ei.updateProjectionMatrix(),Dr.setSize(kn.width,kn.height),Dr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Ei=new Tn(75,kn.width/kn.height,.1,100);Ei.position.x=3;Ei.position.y=3;Ei.position.z=6.3;zo.add(Ei);const iu=new Nd(Ei,cp);iu.enableDamping=!0;iu.enableZoom=!1;const Dr=new Lc({canvas:cp});Dr.setSize(kn.width,kn.height);Dr.setPixelRatio(Math.min(window.devicePixelRatio,2));const ib=new zd,up=()=>{const o=ib.getElapsedTime();Zs.rotation.y=o*.2,iu.update(),Dr.render(zo,Ei),window.requestAnimationFrame(up)};up();const hp=document.querySelector("canvas.webgl2"),ru=new Rd,Cs=new Fd;Cs.load("/textures/1/1_basecolor.jpg");Cs.load("/textures/1/1_ambientOcclusion.jpg");Cs.load("/textures/1/1_height.png");Cs.load("/textures/1/1_metallic.jpg");Cs.load("/textures/1/1_normal.jpg");Cs.load("/textures/1/1_roughness.jpg");const No=new Ts(2.5,2.5,2.5,15,15,15),Ps=new Dc,Tc=new Id(No,Ps);Ps.size=.02;Ps.sizeAttenuation=!0;Ps.depthWrite=!1;Ps.blending=So;Ps.vertexColors=!0;No.setAttribute("uv2",new un(No.attributes.uv.array,2));const Mo=new Float32Array(15*15*15*15),rb=new at("purple"),sb=new at("blue");for(let o=0;o<15*15*15*15;o++){const e=o*3,t=rb.clone();t.lerp(sb,Math.random()),Mo[e+0]=t.r,Mo[e+1]=t.g,Mo[e+2]=t.b}No.setAttribute("color",new un(Mo,3));ru.add(Tc);const Oi={width:window.innerWidth*.9,height:window.innerHeight};window.addEventListener("resize",()=>{Oi.width=window.innerWidth*.9,Oi.height=window.innerHeight,Rr.aspect=Oi.width/Oi.height,Rr.updateProjectionMatrix(),Dr.setSize(Oi.width,Oi.height),Dr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Rr=new Tn(75,kn.width/kn.height,.1,100);Rr.position.x=3;Rr.position.y=3;Rr.position.z=3;ru.add(Ei);const su=new Nd(Rr,hp);su.enableDamping=!0;su.enableZoom=!1;const au=new Lc({canvas:hp});au.setSize(Oi.width,Oi.height);au.setPixelRatio(Math.min(window.devicePixelRatio,2));const ab=new zd,dp=()=>{const o=ab.getElapsedTime();Tc.rotation.z=o*.5,Tc.rotation.x=o*.5,su.update(),au.render(ru,Rr),window.requestAnimationFrame(dp)};dp();const ou=As.timeline();ou.from("nav",{opacity:0,y:-200,duration:1,stagger:!0});ou.from(".p1h, .p1d, .readMore",{opacity:0,y:-100,duration:1,stagger:.3});ou.from(".p1r",{opacity:0,y:200,duration:1});As.from(".p2h",{opacity:0,y:200,scrollTrigger:{trigger:".readMore",scroller:"body",start:"-100% top",end:"400% top",scrub:1}});As.from(".p3h, .p3d, .p3h2",{opacity:0,y:100,scrollTrigger:{trigger:".webgl",scroller:"body",start:"70% top",end:"100% top",scrub:1}});As.from(".p3ibox",{scale:.5,y:300,scrollTrigger:{trigger:".webgl",scroller:"body",start:"70% top",end:"100% top",scrub:1}});
//# sourceMappingURL=index-275ac042.js.map
