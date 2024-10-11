"use strict";var ue=Object.create;var v=Object.defineProperty;var ge=Object.getOwnPropertyDescriptor;var me=Object.getOwnPropertyNames;var de=Object.getPrototypeOf,pe=Object.prototype.hasOwnProperty;var be=(t,e)=>{for(var n in e)v(t,n,{get:e[n],enumerable:!0})},M=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of me(e))!pe.call(t,r)&&r!==n&&v(t,r,{get:()=>e[r],enumerable:!(i=ge(e,r))||i.enumerable});return t};var R=(t,e,n)=>(n=t!=null?ue(de(t)):{},M(e||!t||!t.__esModule?v(n,"default",{value:t,enumerable:!0}):n,t)),fe=t=>M(v({},"__esModule",{value:!0}),t);var Ee={};be(Ee,{default:()=>S,framify:()=>E});module.exports=fe(Ee);var ie=R(require("lottie-web"),1);var T=require("howler"),A=class extends T.Howl{constructor(e){super(e)}manualSeek(e){return super.seek(e)}manualPlay(){return super.play()}manualRate(e){return super.rate(e)}manualVolume(e){return super.volume(e)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var D=`/* prevent zoom */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQWdCQTtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBRUE7O0FBRUE7RUFDRTs7QUFHRjtBQUFBO0VBRUU7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFOztBQUdGO0FBQUE7RUFFRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7QUFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBc0RJOztBQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUE2REkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwcmV2ZW50IHpvb20gKi9cblxuQG1peGluIHN2Z0VsZW0ge1xuICBbc3Ryb2tlXSxcbiAgcGF0aCxcbiAgY2lyY2xlLFxuICBlbGxpcHNlLFxuICByZWN0LFxuICBwb2x5Z29uLFxuICBsaW5lLFxuICB0ZXh0LFxuICBwb2x5bGluZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuc3ZnLmxvdHRpZS1jb250cm9sbGVyIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gID4gKiB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICA+IGdbY2xpcC1wYXRoXSxcbiAgLm92ZXJmbG93IHtcbiAgICBjbGlwLXBhdGg6IHVuc2V0O1xuICB9XG5cbiAgKiB7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lOyAvLyBub25lP1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5ub2NsaWNrIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5jbGljayxcbiAgLmhpdGJveCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmhpdGJveCAqIHtcbiAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm5vc2NhbGUge1xuICAgIEBpbmNsdWRlIHN2Z0VsZW0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG5cbiAgLnNjYWxlIHtcbiAgICBAaW5jbHVkZSBzdmdFbGVtIHtcbiAgICAgIHZlY3Rvci1lZmZlY3Q6IHVuc2V0O1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG59XG4iXX0= */`;var J=R(require("tinycolor2"),1);function _(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function b(){return window.matchMedia("(pointer: coarse)").matches}var K=()=>{};function Z(t,e=document){return e.querySelector(t)}function P(t,e=document){return Array.from(e.querySelectorAll(t))}function f(t,e,n,i=window){return i.addEventListener(t,e,n),()=>{i.removeEventListener(t,e,n)}}function q(){try{return window.self!==window.top}catch{return!0}}function Ie(t){return!(isNaN(t)||t===null)}function C(t){return new Promise(e=>{setTimeout(e,t)})}function m(t,e){if(arguments.length===1)if(Array.isArray(t)){let n=Math.floor(m(t.length));return t[n]}else{if(typeof t=="object")return m(Object.values(t));if(Ie(t))return Math.random()*t}else if(arguments.length===0)return Math.random();return Math.random()*(e-t)+t}function V(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function y(t,e=1){return`${t/e*100}%`}function F(t=""){return t.charAt(0).toUpperCase()+t.slice(1)}function $(t){return typeof t=="number"?[t,t,t,t]:t.length===2?[t[0],t[1],t[0],t[1]]:t.length===3?[t[0],t[1],t[2],t[1]]:t.slice(0,4)}function ee(...t){let{name:e,color:n="lightgray",as:i="log"}=this;if(!e)return console[i](...t);let r=(0,J.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${e}`,`color: ${r}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...t)}function G(t,e=""){let n="data-type",i=document.querySelector(`style[${n}="${t}]`);i||(i=document.createElement("style"),i.setAttribute(n,t),document.head.appendChild(i)),i.innerHTML=e}function Q(t){return typeof t=="string"?t:JSON.stringify(t)}var h=null,X=new Set;function Ae(){function t(r){X.forEach(o=>o(r))}function e(r){r.touches.length>0||t(!1)}function n(){t(!0)}function i(){b()||t(!0)}b()||t(!0),h||(window.addEventListener("touchstart",n),window.addEventListener("mousemove",i),window.addEventListener("touchend",e),h=()=>{window.removeEventListener("touchstart",n),window.removeEventListener("mousemove",i),window.removeEventListener("touchend",e),b()&&t(!1),h=null})}function L(t){return t&&X.add(t),Ae(),function(){t&&(X.delete(t),b()&&t(!1)),X.size===0&&h&&h()}}var re=require("referentiel");function Ce(t,e){return t.markers.find(n=>n.payload.name===e)||null}function U(t,e=null){let{totalFrames:n,currentFrame:i}=t,r=n-1;if(e===null)return[i>=r?0:i,r];if(typeof e=="number")return[e,r];if(typeof e!="string")return e;let o=!t.loop,l=[];return e.split(",").filter(Boolean).slice(0,2).forEach((a,u)=>{a=a.trim();let c=Ce(t,a);c!==null&&l.push(ye(c,o?u:0))}),l}function ye(t,e=0){return t.time+(e>0?1:0)}function te(t,e,n=!0){let i;Array.isArray(e)?i=e.map(r=>U(t,r)):i=U(t,e),t.playSegments(i,n)}function Ge(t,e=0){let[n,i]=t;return n+(i-n)*e}function ne(t,e,n=1,i=!0){if(Array.isArray(e)&&Array.isArray(e[0])){let o=Math.min(1,Math.max(0,n)),l=Math.round(o*(e.length-1));e=e[l]}else e===null&&(e=0);let r=U(t,e);t.goToAndStop(Ge(r,n),i)}var oe=R(require("lottie-api"),1),he=re.Referentiel.convertPointFromPageToNode;var Be={0:"lightblue",1:"orange",2:"lightgray",3:"red"},xe={3:"error",2:"log"},B=class t{animation=null;container=null;api=null;name="";stopHover;player;debug=!1;animVariation=!1;volumeVariation;rateVariation;constructor(e={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:r=0,name:o="",rateVariation:l=0,filterSpread:a=.5,howlerOptions:u={},...c}=e;this.debug=n,this.volumeVariation=r,this.rateVariation=l,this.name=o,i&&G("lottie-controller",D),this.container=typeof e.container=="string"?(()=>{let s=Z(e.container);if(!s)throw this.log("Element not found",3)(e.container),new Error("Element not found:"+e.container);return s})():e.container||document.body,this.player=ie.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:t.buildFilterSize(a)},audioFactory(s){return new A({src:s,html5:!!_(),...u})},...c,container:this.container}),this.api=oe.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=F(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let s=this.getElem();s&&(this.stopHover=L(g=>{this.setAttr("can-hover",g,!0)}),s.dataset.filename=this.name,s.classList.add("lottie-controller"),s.addEventListener("contextmenu",g=>(g.preventDefault(),g.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.setAttr("data-playing",!1),this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let p=1/0;this.player.addEventListener("enterFrame",s=>{if(s.direction!==1)return;let g=this.isPlaying();if(this.setAttr("data-playing",g),!g)return;let{audios:I}=this.player.audioController||{audios:[]},O=this.player.firstFrame+this.player.currentFrame;I.forEach(({audio:d,data:w})=>{var H,k,z;let{st:N}=w;if(N<=O&&N>p){let Y=this.rateVariation*.5;(H=d.manualRate)==null||H.call(d,m(1-Y,1+Y)),(k=d.manualVolume)==null||k.call(d,m(1-this.volumeVariation,1));let j={audios:I,audio:d,data:w,prevent:!1};this.player.triggerEvent("audio",j),j.prevent!==!0&&((z=d.manualPlay)==null||z.call(d))}}),p=O})}random=m;setAnimVariation=(e=!1)=>this.animVariation=e;onComplete=e=>this.player.addEventListener("complete",e);onLoad=e=>this.player.addEventListener("DOMLoaded",e);onLoopComplete=e=>this.player.addEventListener("loopComplete",e);onAudio=e=>this.player.addEventListener("audio",e);getElem=(e,n)=>(n||(n=this.player.renderer.svgElement),e?Z(e,n||void 0):n);getElems=(e,n)=>(n||(n=this.player.renderer.svgElement),P(e,n||void 0));isPlaying=(...e)=>{if(e.length===0)return!this.player.isPaused;let n=e.map(t.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;handleAnimVariation=e=>!e||!Array.isArray(e)||this.animVariation===!1?e:e[V(Number(this.animVariation),0,e.length)];seek=(e,{position:n=0,isFrame:i=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(e),e=this.handleAnimVariation(e);let r=ne(this.player,e,n,i);return this.log("seek",1)({position:n}),r};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(e=null)=>{this.animation=t.getAnimationKey(e),this.setAttr("data-animation",this.animation)};getPoint=(e,n,{viewbox:i=!1,selector:r=null,normalize:o=!0,clamp:l=!1}={})=>{let a=this.getElem(r);if(!a)return null;let u,c,p,s,g,I;return"getBBox"in a&&i?({x:s,y:p,width:u,height:c}=a.getBBox(),g=s+u,I=p+c):{top:p,left:s,width:u,height:c,right:g,bottom:I}=a.getBoundingClientRect(),i?[e,n]=he(a,[e,n]):(e-=s,n-=p),l&&(e=V(e,0,u),n=V(n,0,c)),o&&(e/=u,n/=c),{top:p,left:s,width:u,height:c,right:g,bottom:I,x:e,y:n}};setAttr=(e,n="",i=!1)=>{let r=this.getElem();if(r){if(i&&(n=n?"":null),n===null){r.removeAttribute(e);return}r.setAttribute(e,Q(n))}};log=(e,n)=>{if(!this.debug)return K;let i=xe[n||2],r=Be[n||2];return(...o)=>{ee.call({name:e,color:r,as:i},...o,{...this.getInfos()})}};loop=e=>{let{player:n}=this;if(n.loop===!0&&n.loop!==e&&!n.isPaused){let{firstFrame:i,totalFrames:r,currentFrame:o}=n;n.adjustSegment([i,r+i+1],o)}return n.loop=e};play=(e=0,{isFrame:n=!0,loop:i=!1,smooth:r=!1}={})=>{let o=!r;if(this.player.loop=i,typeof e=="number"){this.setAnimation(),this.player.goToAndPlay(e,n);return}return this.setAnimation(e),e=this.handleAnimVariation(e),this.log("play",1)(),te(this.player,e,o)};getName=()=>{let{fileName:e,path:n=""}=this.player;return this.name?this.name:!e||e==="data"?n.split("/").filter(Boolean).pop()||"untitled":e};destroy=()=>{var e;this.player.destroy(),(e=this.stopHover)==null||e.call(this)};static getAnimationKey(e=null){return e==null?null:Q(e)}static buildFilterSize(e){let[n,i,r,o]=$(e);return{x:y(-o),y:y(-n),width:y(1+i+o),height:y(1+r+n)}}};var le=`.framify {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZS9mcmFtaWZ5Iiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQUtFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBLFNBWkk7RUFhSixLQWJJO0VBY0o7RUFDQTtFQUNBOztBQTlDRjtFQXNDQTtJQWNJO0lBQ0E7OztBQUlKO0VBQ0U7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBLGVBbENJO0VBbUNKOztBQWpFRjtFQXlEQTtJQVdJOzs7QUE5REo7RUF1RUk7SUFMQTtJQUNBOzs7QUFTRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxTQTFERTtFQTJERjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQSxrQkFqRVc7RUFrRVg7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUEvRko7RUFhRTtJQTJGSSxrQkE5RU87OztBQVJiO0VBc0ZNLGtCQTlFTzs7QUFpRlQ7RUFURTtFQUNBO0VBQ0E7O0FBOUZOO0VBc0VFO0lBc0JJO0lBQ0E7SUFDQTs7O0FBOUZOO0VBNkNBO0lBZUk7SUFDQTs7O0FBcURGO0VBdERFO0VBQ0E7O0FBeURGO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0EsS0EzR0U7RUE0R0YsTUE1R0U7RUE2R0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXNtb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc3RvdWNoIHtcbiAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXIge1xuICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4uZnJhbWlmeSB7XG4gICRnYXA6IDFyZW07XG4gICRjb2xvci1zaGFkb3c6IHJnYmEoMTU4LCAxNjAsIDE2MiwgMC4yNSk7XG4gICRjb2xvci1saW5rOiBoc2woMjEyLCAxMDAlLCA3NiUpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgJl9fcm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogJGdhcDtcbiAgICBnYXA6ICRnYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC8vIGFsaWduIGNlbGxzXG5cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJl9fY2VsbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTZyZW07XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXItcmFkaXVzOiAkZ2FwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtaXhpbiBzaGFkb3cge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLXNoYWRvdztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6ICRnYXA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNoYWRvdztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIEBtaXhpbiBsaW5rLXZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saW5rO1xuICAgICAgfVxuXG4gICAgICA6aG92ZXIgPiAmIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBpc3RvdWNoIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgLmZyYW1pZnk6aGFzKC5mdWxsc2NyZWVuKSAmOm5vdCguZnVsbHNjcmVlbikge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAkZ2FwO1xuICAgICAgbGVmdDogJGdhcDtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogI3skZ2FwfSk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMiAqICN7JGdhcH0pO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICA+IGlmcmFtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */`;var ae=`:root {
  --cursor: zoom-in;
}

.is-fullscreen {
  --cursor: zoom-out;
}

body:has(svg:not(:hover)) {
  cursor: var(--cursor);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZS9mcmFtaWZ5Iiwic291cmNlcyI6WyJmcmFtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7OztBQUdGO0VBQ0U7OztBQUdGO0VBQ0UiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tY3Vyc29yOiB6b29tLWluO1xufVxuXG4uaXMtZnVsbHNjcmVlbiB7XG4gIC0tY3Vyc29yOiB6b29tLW91dDtcbn1cblxuYm9keTpoYXMoc3ZnOm5vdCg6aG92ZXIpKSB7XG4gIGN1cnNvcjogdmFyKC0tY3Vyc29yKTtcbn1cbiJdfQ== */`;function E(t,{parent:e=document.body}={}){G("framify",le);let n=document.createElement("div");n.classList.add("framify");let i=[],r=[i];t.forEach(l=>{if(l===null){i=[],r.push(i);return}typeof l=="string"&&i.push(l)});let o=document.createDocumentFragment();r.forEach(l=>{let a=document.createElement("div");a.classList.add("framify__row"),Ve(a,l),o.appendChild(a)}),n.appendChild(o),e.appendChild(n),ce()}async function ce(){var n;let t=document.querySelectorAll("iframe");(n=m(t).contentWindow)==null||n.postMessage({type:"animate"},"*"),await C(m(1e3,2e3)),ce()}function ve(t){return t?!!t.closest("svg"):!1}function W(t){var e;b()||(e=window.top)==null||e.postMessage({type:"fullscreen:request",isFullscreen:t},"*")}function Ve(t,e){e.forEach(n=>{let i=document.createElement("div");if(t.appendChild(i),!n)return;let r=n.replace(/\/index\.html?$/,"").split("/").pop();i.innerHTML=`
      <a href="${n}" class="framify__cell-link" title="${F(r)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${n}"></iframe>
    `,i.classList.add("framify__cell");let o=i.querySelector("iframe");o&&f("message",l=>{var u,c;if(l.source!==o.contentWindow||((u=l.data)==null?void 0:u.type)!=="fullscreen:request")return;let{isFullscreen:a}=l.data;a=i.classList.toggle("fullscreen",a),(c=l.source)==null||c.postMessage({type:"fullscreen:confirm",isFullscreen:a},l.origin)},!1)})}q()&&(Fe(),G("framify-cell",ae));function Fe(){W(!1);let t=!1;f("message",e=>{var n,i;if(((n=e.data)==null?void 0:n.type)==="animate")Xe();else if(((i=e.data)==null?void 0:i.type)==="fullscreen:confirm"){let r=e.data.isFullscreen;document.body.classList.toggle("is-fullscreen",r)}},!0),f("pointerdown",e=>{t=ve(e.target)},!0),f("click",e=>{e.isTrusted&&(t||W())},!0),f("blur",()=>{t=!1},!0),f("keydown",e=>{e.key==="Escape"&&W(!1)},!0)}function x(t,e){document.hasFocus()||t==null||t.dispatchEvent(new MouseEvent(e,{bubbles:!0}))}async function Xe(){if(document.body.classList.contains("is-fullscreen"))return;let e=document.querySelector("svg path");await se(e),await C(m(2e3,4e3)),await se(e)}async function se(t){t&&(x(t,"pointerdown"),x(t,"mousedown"),await C(m(400,1e3)),x(t,"pointerup"),x(t,"mouseup"),await C(m(800,1e3)),x(t,"click"))}function S(t){return new B(t)}globalThis.useLottie=S;globalThis.framify=E;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
