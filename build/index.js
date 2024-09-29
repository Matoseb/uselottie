"use strict";var P=Object.create;var f=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty;var et=(e,t)=>{for(var n in t)f(e,n,{get:t[n],enumerable:!0})},W=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of q(t))!tt.call(e,o)&&o!==n&&f(e,o,{get:()=>t[o],enumerable:!(i=K(t,o))||i.enumerable});return e};var G=(e,t,n)=>(n=e!=null?P($(e)):{},W(t||!e||!e.__esModule?f(n,"default",{value:e,enumerable:!0}):n,e)),nt=e=>W(f({},"__esModule",{value:!0}),e);var st={};et(st,{default:()=>E,framify:()=>h});module.exports=nt(st);var T=G(require("lottie-web"),1);var k=require("howler"),d=class extends k.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var L=`/* prevent zoom */
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
  touch-action: manipulation;
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
svg.lottie-controller .noscale [stroke] {
  vector-effect: non-scaling-stroke;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUVBOztBQUVBO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtBQUFBO0VBRUU7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBSUE7RUFDRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHByZXZlbnQgem9vbSAqL1xuXG5zdmcubG90dGllLWNvbnRyb2xsZXIge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gID4gZ1tjbGlwLXBhdGhdLFxuICAub3ZlcmZsb3cge1xuICAgIGNsaXAtcGF0aDogdW5zZXQ7XG4gIH1cblxuICAqIHtcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjsgLy8gbm9uZT9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAubm9jbGljayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAuY2xpY2ssXG4gIC5oaXRib3gge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5oaXRib3ggKiB7XG4gICAgc3Ryb2tlOiB0cmFuc3BhcmVudDtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5ub3NjYWxlIHtcbiAgICBbc3Ryb2tlXSB7XG4gICAgICB2ZWN0b3ItZWZmZWN0OiBub24tc2NhbGluZy1zdHJva2U7XG4gICAgICAvLyBzdHJva2Utd2lkdGg6IHZhcigtLXN0cm9rZS13aWR0aCwgcmV2ZXJ0LWxheWVyKTtcbiAgICB9XG4gIH1cbn0iXX0= */`;var N=G(require("tinycolor2"),1);function Y(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}var w=()=>{};function B(e,t=document){return t.querySelector(e)}function H(e,t=document){return Array.from(t.querySelectorAll(e))}function x(e,t){return Math.random()*(t-e)+e}function p(e,t=1){return`${e/t*100}%`}function C(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function M(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function j(...e){let{name:t,color:n="lightgray",as:i="log"}=this;if(!t)return console[i](...e);let o=(0,N.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${t}`,`color: ${o}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function y(e,t=""){let n="data-type",i=document.querySelector(`style[${n}="${e}]`);i||(i=document.createElement("style"),i.setAttribute(n,e),document.head.appendChild(i)),i.innerHTML=t}function X(e){return typeof e=="string"?e:JSON.stringify(e)}function it(e,t){return e.markers.find(n=>n.payload.name===t)||null}function v(e,t=null){let{totalFrames:n,currentFrame:i}=e,o=n-1;if(t===null)return[i>=o?0:i,o];if(typeof t=="number")return[t,o];if(typeof t!="string")return t;let r=!e.loop,a=[];return t.split(",").filter(Boolean).slice(0,2).forEach((g,c)=>{g=g.trim();let u=it(e,g);u!==null&&a.push(ot(u,r?c:0))}),a}function ot(e,t=0){return e.time+(t>0?1:0)}function z(e,t,n=!0){let i;Array.isArray(t)?i=t.map(o=>v(e,o)):i=v(e,t),e.playSegments(i,n)}function rt(e,t=0){let[n,i]=e;return n+(i-n)*t}function D(e,t,n=1,i=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),a=Math.round(r*(t.length-1));t=t[a]}else t===null&&(t=0);let o=v(e,t);e.goToAndStop(rt(o,n),i)}var J=G(require("lottie-api"),1);var lt={0:"lightblue",1:"orange",2:"lightgray",3:"red"},at={3:"error",2:"log"},A=class e{animation=null;container=null;api=null;name="";player;debug=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:o=0,name:r="",rateVariation:a=0,filterSpread:g=.5,howlerOptions:c={},...u}=t;this.debug=n,this.volumeVariation=o,this.rateVariation=a,this.name=r,i&&y("lottie-controller",L),this.container=typeof t.container=="string"?(()=>{let l=B(t.container);if(!l)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return l})():t.container||document.body,this.player=T.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(g)},audioFactory(l){return new d({src:l,html5:!!Y(),...c})},...u,container:this.container}),this.api=J.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=C(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let l=this.getElem();l&&(l.dataset.filename=this.name,l.classList.add("lottie-controller"),l.addEventListener("contextmenu",s=>(s.preventDefault(),s.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.setAttr("data-playing",!1),this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let b=1/0;this.player.addEventListener("enterFrame",l=>{if(l.direction!==1)return;let s=this.isPlaying();if(this.setAttr("data-playing",s),!s)return;let{audios:I}=this.player.audioController||{audios:[]},V=this.player.firstFrame+this.player.currentFrame;I.forEach(({audio:m,data:Z})=>{var O,R,Q;let{st:F}=Z;if(F<=V&&F>b){let U=this.rateVariation*.5;(O=m.manualRate)==null||O.call(m,x(1-U,1+U)),(R=m.manualVolume)==null||R.call(m,x(1-this.volumeVariation,1));let S={audios:I,audio:m,data:Z,prevent:!1};this.player.triggerEvent("audio",S),S.prevent!==!0&&((Q=m.manualPlay)==null||Q.call(m))}}),b=V})}onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?B(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),H(t,n||void 0));isPlaying=(...t)=>{if(t.length===0)return!this.player.isPaused;let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;seek=(t,{position:n=0,isFrame:i=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(t);let o=D(this.player,t,n,i);return this.log("seek",1)({position:n}),o};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t),this.setAttr("data-animation",this.animation)};setAttr=(t,n="")=>{let i=this.getElem();if(i){if(n===null){i.removeAttribute(t);return}i.setAttribute(t,X(n))}};log=(t,n)=>{if(!this.debug)return w;let i=at[n||2],o=lt[n||2];return(...r)=>{j.call({name:t,color:o,as:i},...r,{...this.getInfos()})}};play=(t,{isFrame:n=!0,loop:i=!1,smooth:o=!1}={})=>{let r=!o;if(this.player.loop=i,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),this.log("play",1)(),z(this.player,t,r)};getName=()=>{let{fileName:t,path:n=""}=this.player;return this.name?this.name:!t||t==="data"?n.split("/").filter(Boolean).pop()||"untitled":t};destroy=()=>{this.player.destroy()};static getAnimationKey(t=null){return t==null?null:X(t)}static buildFilterSize(t){let[n,i,o,r]=M(t);return{x:p(-r),y:p(-n),width:p(1+i+r),height:p(1+o+n)}}};var _=`.framify {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  padding: 1rem;
  gap: 1rem;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .framify {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
.framify__cell {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  overflow: hidden;
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
:has(.fullscreen) > .framify__cell:not(.fullscreen) {
  visibility: hidden;
  opacity: 0;
}
.framify__cell.fullscreen {
  position: fixed;
  top: 1rem;
  left: 1rem;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBS0U7RUFDQTtFQUNBO0VBQ0EsU0FQTTtFQVFOLEtBUk07RUFTTjs7QUF2Q0E7RUE2QkY7SUFhSTtJQUNBO0lBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0EsZUFyQkk7RUFzQko7O0FBOUNGO0VBc0RJO0lBTEE7SUFDQTs7O0FBU0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsU0F6Q0U7RUEwQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0Esa0JBaERXO0VBaURYO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBOUVKO0VBYUU7SUEwRUksa0JBN0RPOzs7QUFSYjtFQXFFTSxrQkE3RE87O0FBZ0VUO0VBVEU7RUFDQTtFQUNBOztBQTdFTjtFQXFERTtJQXNCSTtJQUNBO0lBQ0E7OztBQTdFTjtFQW1DQTtJQVFJO0lBQ0E7OztBQXFERjtFQXRERTtFQUNBOztBQXlERjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBLEtBMUZFO0VBMkZGLE1BM0ZFO0VBNEZGO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXNtb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc3RvdWNoIHtcbiAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXIge1xuICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4uZnJhbWlmeSB7XG4gICRnYXA6IDFyZW07XG4gICRjb2xvci1zaGFkb3c6IHJnYmEoMTU4LCAxNjAsIDE2MiwgMC4yNSk7XG4gICRjb2xvci1saW5rOiBoc2woMjEyLCAxMDAlLCA3NiUpO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNnJlbSwgMWZyKSk7XG4gIHBhZGRpbmc6ICRnYXA7XG4gIGdhcDogJGdhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2NlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRnYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBtaXhpbiBzaGFkb3cge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLXNoYWRvdztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6ICRnYXA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNoYWRvdztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIEBtaXhpbiBsaW5rLXZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saW5rO1xuICAgICAgfVxuXG4gICAgICA6aG92ZXIgPiAmIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBpc3RvdWNoIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgOmhhcyguZnVsbHNjcmVlbikgPiAmOm5vdCguZnVsbHNjcmVlbikge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAkZ2FwO1xuICAgICAgbGVmdDogJGdhcDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogI3skZ2FwfSk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMiAqICN7JGdhcH0pO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICA+IGlmcmFtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */`;function h(e,{parent:t=document.body}={}){let n=document.createElement("div");n.classList.add("framify"),y("framify",_),e.forEach(r=>{let a=document.createElement("div"),g=r.replace(/\/index\.html?$/,"").split("/").pop();a.innerHTML=`
      <a href="${r}" class="framify__cell-link" title="${C(g)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${r}"></iframe>
    `,a.classList.add("framify__cell");let c=a.querySelector("iframe");c&&(c.onload=function(){o(a,!1);let u=!1;function b(s){if(!s.view)return;let{style:I}=s.view.document.body;I.cursor=i(s.target)?"":"var(--cursor)"}let l=c.contentWindow;l&&(l.onpointerover=function(s){b(s)},l.onpointermove=function(s){b(s)},l.onpointerdown=function(s){u=i(s.target)},l.onclick=function(){u||o(a)},l.onblur=function(){u=!1},l.onkeydown=function(s){s.key==="Escape"&&o(a,!1)})},n.appendChild(a))});function i(r){return r?!!r.closest("svg > *"):!1}function o(r,a){var c;if(!r||window.matchMedia("(pointer:coarse)").matches)return;a=r.classList.toggle("fullscreen",a);let g=(c=r.querySelector("iframe"))==null?void 0:c.contentWindow;g==null||g.document.documentElement.style.setProperty("--cursor",a?"zoom-out":"zoom-in")}t.appendChild(n)}function E(e){return new A(e)}globalThis.useLottie=E;globalThis.framify=h;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
