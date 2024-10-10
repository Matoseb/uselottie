"use strict";var le=Object.create;var B=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var se=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var ue=(t,e)=>{for(var n in e)B(t,n,{get:e[n],enumerable:!0})},z=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of se(e))!ge.call(t,r)&&r!==n&&B(t,r,{get:()=>e[r],enumerable:!(i=ae(e,r))||i.enumerable});return t};var E=(t,e,n)=>(n=t!=null?le(ce(t)):{},z(e||!t||!t.__esModule?B(n,"default",{value:t,enumerable:!0}):n,t)),me=t=>z(B({},"__esModule",{value:!0}),t);var ve={};ue(ve,{default:()=>U,framify:()=>X});module.exports=me(ve);var te=E(require("lottie-web"),1);var T=require("howler"),A=class extends T.Howl{constructor(e){super(e)}manualSeek(e){return super.seek(e)}manualPlay(){return super.play()}manualRate(e){return super.rate(e)}manualVolume(e){return super.volume(e)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var M=`/* prevent zoom */
svg.lottie-controller {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  overflow: visible;
  pointer-events: none;
}
svg.lottie-controller > * {
  pointer-events: auto;
}
svg.lottie-controller > g[clip-path],
svg.lottie-controller .overflow {
  clip-path: unset;
}
svg.lottie-controller * {
  touch-action: none;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
}
svg.lottie-controller .noclick {
  pointer-events: none;
}
svg.lottie-controller .click,
svg.lottie-controller .hitbox {
  pointer-events: auto;
  cursor: pointer;
}
svg.lottie-controller .hitbox * {
  stroke: transparent;
  fill: transparent;
}
svg.lottie-controller .noscale [stroke],
svg.lottie-controller .noscale path,
svg.lottie-controller .noscale circle,
svg.lottie-controller .noscale ellipse,
svg.lottie-controller .noscale rect,
svg.lottie-controller .noscale polygon,
svg.lottie-controller .noscale line,
svg.lottie-controller .noscale text,
svg.lottie-controller .noscale polyline {
  vector-effect: non-scaling-stroke;
}
svg.lottie-controller .scale [stroke],
svg.lottie-controller .scale path,
svg.lottie-controller .scale circle,
svg.lottie-controller .scale ellipse,
svg.lottie-controller .scale rect,
svg.lottie-controller .scale polygon,
svg.lottie-controller .scale line,
svg.lottie-controller .scale text,
svg.lottie-controller .scale polyline {
  vector-effect: unset;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBZ0JBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7QUFFQTtFQUNFOztBQUdGO0FBQUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOztBQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFzREk7O0FBdERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQTZESSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHByZXZlbnQgem9vbSAqL1xuXG5AbWl4aW4gc3ZnRWxlbSB7XG4gIFtzdHJva2VdLFxuICBwYXRoLFxuICBjaXJjbGUsXG4gIGVsbGlwc2UsXG4gIHJlY3QsXG4gIHBvbHlnb24sXG4gIGxpbmUsXG4gIHRleHQsXG4gIHBvbHlsaW5lIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5zdmcubG90dGllLWNvbnRyb2xsZXIge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gID4gZ1tjbGlwLXBhdGhdLFxuICAub3ZlcmZsb3cge1xuICAgIGNsaXAtcGF0aDogdW5zZXQ7XG4gIH1cblxuICAqIHtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7IC8vIG5vbmU/XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLm5vY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNsaWNrLFxuICAuaGl0Ym94IHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGl0Ym94ICoge1xuICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubm9zY2FsZSB7XG4gICAgQGluY2x1ZGUgc3ZnRWxlbSB7XG4gICAgICB2ZWN0b3ItZWZmZWN0OiBub24tc2NhbGluZy1zdHJva2U7XG4gICAgICAvLyBzdHJva2Utd2lkdGg6IHZhcigtLXN0cm9rZS13aWR0aCwgcmV2ZXJ0LWxheWVyKTtcbiAgICB9XG4gIH1cblxuICAuc2NhbGUge1xuICAgIEBpbmNsdWRlIHN2Z0VsZW0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogdW5zZXQ7XG4gICAgICAvLyBzdHJva2Utd2lkdGg6IHZhcigtLXN0cm9rZS13aWR0aCwgcmV2ZXJ0LWxheWVyKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;var J=E(require("tinycolor2"),1);function j(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function b(){return window.matchMedia("(pointer: coarse)").matches}var D=()=>{};function Z(t,e=document){return e.querySelector(t)}function _(t,e=document){return Array.from(e.querySelectorAll(t))}function I(t,e,n,i=window){return i.addEventListener(t,e,n),()=>{i.removeEventListener(t,e,n)}}function P(){try{return window.self!==window.top}catch{return!0}}function de(t){return!(isNaN(t)||t===null)}function f(t,e){if(arguments.length===1)if(Array.isArray(t)){let n=Math.floor(f(t.length));return t[n]}else{if(typeof t=="object")return f(Object.values(t));if(de(t))return Math.random()*t}else if(arguments.length===0)return Math.random();return Math.random()*(e-t)+t}function v(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function C(t,e=1){return`${t/e*100}%`}function x(t=""){return t.charAt(0).toUpperCase()+t.slice(1)}function K(t){return typeof t=="number"?[t,t,t,t]:t.length===2?[t[0],t[1],t[0],t[1]]:t.length===3?[t[0],t[1],t[2],t[1]]:t.slice(0,4)}function q(...t){let{name:e,color:n="lightgray",as:i="log"}=this;if(!e)return console[i](...t);let r=(0,J.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${e}`,`color: ${r}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...t)}function h(t,e=""){let n="data-type",i=document.querySelector(`style[${n}="${t}]`);i||(i=document.createElement("style"),i.setAttribute(n,t),document.head.appendChild(i)),i.innerHTML=e}function W(t){return typeof t=="string"?t:JSON.stringify(t)}var G=null,F=new Set;function be(){function t(r){F.forEach(o=>o(r))}function e(r){r.touches.length>0||t(!1)}function n(){t(!0)}function i(){b()||t(!0)}b()||t(!0),G||(window.addEventListener("touchstart",n),window.addEventListener("mousemove",i),window.addEventListener("touchend",e),G=()=>{window.removeEventListener("touchstart",n),window.removeEventListener("mousemove",i),window.removeEventListener("touchend",e),b()&&t(!1),G=null})}function Q(t){return t&&F.add(t),be(),function(){t&&(F.delete(t),b()&&t(!1)),F.size===0&&G&&G()}}var ne=require("referentiel");function Ie(t,e){return t.markers.find(n=>n.payload.name===e)||null}function L(t,e=null){let{totalFrames:n,currentFrame:i}=t,r=n-1;if(e===null)return[i>=r?0:i,r];if(typeof e=="number")return[e,r];if(typeof e!="string")return e;let o=!t.loop,l=[];return e.split(",").filter(Boolean).slice(0,2).forEach((a,g)=>{a=a.trim();let c=Ie(t,a);c!==null&&l.push(pe(c,o?g:0))}),l}function pe(t,e=0){return t.time+(e>0?1:0)}function $(t,e,n=!0){let i;Array.isArray(e)?i=e.map(r=>L(t,r)):i=L(t,e),t.playSegments(i,n)}function fe(t,e=0){let[n,i]=t;return n+(i-n)*e}function ee(t,e,n=1,i=!0){if(Array.isArray(e)&&Array.isArray(e[0])){let o=Math.min(1,Math.max(0,n)),l=Math.round(o*(e.length-1));e=e[l]}else e===null&&(e=0);let r=L(t,e);t.goToAndStop(fe(r,n),i)}var ie=E(require("lottie-api"),1),Ae=ne.Referentiel.convertPointFromPageToNode;var Ce={0:"lightblue",1:"orange",2:"lightgray",3:"red"},he={3:"error",2:"log"},y=class t{animation=null;container=null;api=null;name="";stopHover;player;debug=!1;animVariation=!1;volumeVariation;rateVariation;constructor(e={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:r=0,name:o="",rateVariation:l=0,filterSpread:a=.5,howlerOptions:g={},...c}=e;this.debug=n,this.volumeVariation=r,this.rateVariation=l,this.name=o,i&&h("lottie-controller",M),this.container=typeof e.container=="string"?(()=>{let s=Z(e.container);if(!s)throw this.log("Element not found",3)(e.container),new Error("Element not found:"+e.container);return s})():e.container||document.body,this.player=te.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:t.buildFilterSize(a)},audioFactory(s){return new A({src:s,html5:!!j(),...g})},...c,container:this.container}),this.api=ie.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=x(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let s=this.getElem();s&&(this.stopHover=Q(u=>{this.setAttr("can-hover",u,!0)}),s.dataset.filename=this.name,s.classList.add("lottie-controller"),s.addEventListener("contextmenu",u=>(u.preventDefault(),u.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.setAttr("data-playing",!1),this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let d=1/0;this.player.addEventListener("enterFrame",s=>{if(s.direction!==1)return;let u=this.isPlaying();if(this.setAttr("data-playing",u),!u)return;let{audios:p}=this.player.audioController||{audios:[]},V=this.player.firstFrame+this.player.currentFrame;p.forEach(({audio:m,data:O})=>{var S,H,w;let{st:N}=O;if(N<=V&&N>d){let k=this.rateVariation*.5;(S=m.manualRate)==null||S.call(m,f(1-k,1+k)),(H=m.manualVolume)==null||H.call(m,f(1-this.volumeVariation,1));let Y={audios:p,audio:m,data:O,prevent:!1};this.player.triggerEvent("audio",Y),Y.prevent!==!0&&((w=m.manualPlay)==null||w.call(m))}}),d=V})}random=f;setAnimVariation=(e=!1)=>this.animVariation=e;onComplete=e=>this.player.addEventListener("complete",e);onLoad=e=>this.player.addEventListener("DOMLoaded",e);onLoopComplete=e=>this.player.addEventListener("loopComplete",e);onAudio=e=>this.player.addEventListener("audio",e);getElem=(e,n)=>(n||(n=this.player.renderer.svgElement),e?Z(e,n||void 0):n);getElems=(e,n)=>(n||(n=this.player.renderer.svgElement),_(e,n||void 0));isPlaying=(...e)=>{if(e.length===0)return!this.player.isPaused;let n=e.map(t.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;handleAnimVariation=e=>!e||!Array.isArray(e)||this.animVariation===!1?e:e[v(Number(this.animVariation),0,e.length)];seek=(e,{position:n=0,isFrame:i=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(e),e=this.handleAnimVariation(e);let r=ee(this.player,e,n,i);return this.log("seek",1)({position:n}),r};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(e=null)=>{this.animation=t.getAnimationKey(e),this.setAttr("data-animation",this.animation)};getPoint=(e,n,{viewbox:i=!1,selector:r=null,normalize:o=!0,clamp:l=!1}={})=>{let a=this.getElem(r);if(!a)return null;let g,c,d,s,u,p;return"getBBox"in a&&i?({x:s,y:d,width:g,height:c}=a.getBBox(),u=s+g,p=d+c):{top:d,left:s,width:g,height:c,right:u,bottom:p}=a.getBoundingClientRect(),i?[e,n]=Ae(a,[e,n]):(e-=s,n-=d),l&&(e=v(e,0,g),n=v(n,0,c)),o&&(e/=g,n/=c),{top:d,left:s,width:g,height:c,right:u,bottom:p,x:e,y:n}};setAttr=(e,n="",i=!1)=>{let r=this.getElem();if(r){if(i&&(n=n?"":null),n===null){r.removeAttribute(e);return}r.setAttribute(e,W(n))}};log=(e,n)=>{if(!this.debug)return D;let i=he[n||2],r=Ce[n||2];return(...o)=>{q.call({name:e,color:r,as:i},...o,{...this.getInfos()})}};loop=e=>{let{player:n}=this;if(n.loop===!0&&n.loop!==e&&!n.isPaused){let{firstFrame:i,totalFrames:r,currentFrame:o}=n;n.adjustSegment([i,r+i+1],o)}return n.loop=e};play=(e=0,{isFrame:n=!0,loop:i=!1,smooth:r=!1}={})=>{let o=!r;if(this.player.loop=i,typeof e=="number"){this.setAnimation(),this.player.goToAndPlay(e,n);return}return this.setAnimation(e),e=this.handleAnimVariation(e),this.log("play",1)(),$(this.player,e,o)};getName=()=>{let{fileName:e,path:n=""}=this.player;return this.name?this.name:!e||e==="data"?n.split("/").filter(Boolean).pop()||"untitled":e};destroy=()=>{var e;this.player.destroy(),(e=this.stopHover)==null||e.call(this)};static getAnimationKey(e=null){return e==null?null:W(e)}static buildFilterSize(e){let[n,i,r,o]=K(e);return{x:C(-o),y:C(-n),width:C(1+i+o),height:C(1+r+n)}}};var re=`.framify {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.framify__row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}
@media (max-width: 768px) {
  .framify__row {
    flex-direction: column;
    width: 100%;
  }
}
.framify__cell {
  position: relative;
  align-self: center;
  width: 100%;
  max-width: 16rem;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  overflow: hidden;
}
@media (max-width: 768px) {
  .framify__cell {
    max-width: 100%;
  }
}
@media (pointer: fine) {
  .framify__cell:hover {
    box-shadow: 0 0 10px rgba(158, 160, 162, 0.25);
    z-index: 1;
  }
}
.framify__cell-link {
  position: absolute;
  z-index: 2;
  right: 0;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 1rem;
  visibility: hidden;
  aspect-ratio: 1/1;
  width: unset;
  display: flex;
  color: transparent;
  background-clip: text;
  background-color: rgba(158, 160, 162, 0.25);
  transition: transform, visibility, opacity, background-color;
  transition-duration: 0.2s;
  transform: scale(0.8);
  transform-origin: bottom left;
  opacity: 0;
}
@media (pointer: fine) {
  .framify__cell-link:hover {
    background-color: hsl(212, 100%, 76%);
  }
}
.framify__cell-link:active {
  background-color: hsl(212, 100%, 76%);
}
:hover > .framify__cell-link {
  visibility: visible;
  transform: scale(1);
  opacity: 1;
}
@media (pointer: coarse) {
  .framify__cell-link {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
}
@media (pointer: coarse) {
  .framify__cell {
    box-shadow: 0 0 10px rgba(158, 160, 162, 0.25);
    z-index: 1;
  }
}
.framify__cell.fullscreen {
  box-shadow: 0 0 10px rgba(158, 160, 162, 0.25);
  z-index: 1;
}
.framify:has(.fullscreen) .framify__cell:not(.fullscreen) {
  visibility: hidden;
  opacity: 0;
}
.framify__cell.fullscreen {
  position: fixed;
  top: 1rem;
  left: 1rem;
  max-width: unset;
  max-height: unset;
  width: calc(100% - 2 * 1rem);
  height: calc(100dvh - 2 * 1rem);
  z-index: 1000;
}
.framify__cell > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBS0U7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0EsU0FaSTtFQWFKLEtBYkk7RUFjSjtFQUNBO0VBQ0E7O0FBOUNGO0VBc0NBO0lBY0k7SUFDQTs7O0FBSUo7RUFDRTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0EsZUFsQ0k7RUFtQ0o7O0FBakVGO0VBeURBO0lBV0k7OztBQTlESjtFQXVFSTtJQUxBO0lBQ0E7OztBQVNGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFNBMURFO0VBMkRGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBLGtCQWpFVztFQWtFWDtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQS9GSjtFQWFFO0lBMkZJLGtCQTlFTzs7O0FBUmI7RUFzRk0sa0JBOUVPOztBQWlGVDtFQVRFO0VBQ0E7RUFDQTs7QUE5Rk47RUFzRUU7SUFzQkk7SUFDQTtJQUNBOzs7QUE5Rk47RUE2Q0E7SUFlSTtJQUNBOzs7QUFxREY7RUF0REU7RUFDQTs7QUF5REY7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQSxLQTNHRTtFQTRHRixNQTVHRTtFQTZHRjtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIG1vYmlsZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc21vdXNlIHtcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGlzdG91Y2gge1xuICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3ZlciB7XG4gIEBpbmNsdWRlIGlzbW91c2Uge1xuICAgICY6aG92ZXIge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi5mcmFtaWZ5IHtcbiAgJGdhcDogMXJlbTtcbiAgJGNvbG9yLXNoYWRvdzogcmdiYSgxNTgsIDE2MCwgMTYyLCAwLjI1KTtcbiAgJGNvbG9yLWxpbms6IGhzbCgyMTIsIDEwMCUsIDc2JSk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmX19yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAkZ2FwO1xuICAgIGdhcDogJGdhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLy8gYWxpZ24gY2VsbHNcblxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmX19jZWxsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNnJlbTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRnYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgQG1peGluIHNoYWRvdyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkY29sb3Itc2hhZG93O1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICByaWdodDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogJGdhcDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2hhZG93O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgQG1peGluIGxpbmstdmlzaWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpbms7XG4gICAgICB9XG5cbiAgICAgIDpob3ZlciA+ICYge1xuICAgICAgICBAaW5jbHVkZSBsaW5rLXZpc2libGU7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgICBAaW5jbHVkZSBsaW5rLXZpc2libGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXN0b3VjaCB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICB9XG5cbiAgICAuZnJhbWlmeTpoYXMoLmZ1bGxzY3JlZW4pICY6bm90KC5mdWxsc2NyZWVuKSB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6ICRnYXA7XG4gICAgICBsZWZ0OiAkZ2FwO1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAjeyRnYXB9KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDBkdmggLSAyICogI3skZ2FwfSk7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgID4gaWZyYW1lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;var oe=`:root {
  --cursor: zoom-in;
}

.is-fullscreen {
  --cursor: zoom-out;
}

body:has(svg:not(:hover)) {
  cursor: var(--cursor);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImZyYW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7O0FBR0Y7RUFDRTs7O0FBR0Y7RUFDRSIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1jdXJzb3I6IHpvb20taW47XG59XG5cbi5pcy1mdWxsc2NyZWVuIHtcbiAgLS1jdXJzb3I6IHpvb20tb3V0O1xufVxuXG5ib2R5Omhhcyhzdmc6bm90KDpob3ZlcikpIHtcbiAgY3Vyc29yOiB2YXIoLS1jdXJzb3IpO1xufVxuIl19 */`;function X(t,{parent:e=document.body}={}){h("framify",re);let n=document.createElement("div");n.classList.add("framify");let i=[],r=[i];t.forEach(l=>{if(l===null){i=[],r.push(i);return}typeof l=="string"&&i.push(l)});let o=document.createDocumentFragment();r.forEach(l=>{let a=document.createElement("div");a.classList.add("framify__row"),ye(a,l),o.appendChild(a)}),n.appendChild(o),e.appendChild(n)}function Ge(t){return t?!!t.closest("svg"):!1}function R(t){var e;b()||(e=window.top)==null||e.postMessage({type:"fullscreen:request",isFullscreen:t},"*")}function ye(t,e){e.forEach(n=>{let i=document.createElement("div");if(t.appendChild(i),!n)return;let r=n.replace(/\/index\.html?$/,"").split("/").pop();i.innerHTML=`
      <a href="${n}" class="framify__cell-link" title="${x(r)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${n}"></iframe>
    `,i.classList.add("framify__cell");let o=i.querySelector("iframe");o&&I("message",l=>{var g,c;if(l.source!==o.contentWindow||((g=l.data)==null?void 0:g.type)!=="fullscreen:request")return;let{isFullscreen:a}=l.data;a=i.classList.toggle("fullscreen",a),(c=l.source)==null||c.postMessage({type:"fullscreen:confirm",isFullscreen:a},l.origin)},!1)})}P()&&(Be(),h("framify-cell",oe));function Be(){R(!1);let t=!1;I("message",e=>{var n;((n=e.data)==null?void 0:n.type)==="fullscreen:confirm"&&document.body.classList.toggle("is-fullscreen",e.data.isFullscreen)},!0),I("pointerdown",e=>{t=Ge(e.target)},!0),I("click",()=>{t||R()},!0),I("blur",()=>{t=!1},!0),I("keydown",e=>{e.key==="Escape"&&R(!1)},!0)}function U(t){return new y(t)}globalThis.useLottie=U;globalThis.framify=X;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
