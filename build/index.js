"use strict";var j=Object.create;var f=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var q=(e,t)=>{for(var n in t)f(e,n,{get:t[n],enumerable:!0})},Z=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of K(t))!$.call(e,o)&&o!==n&&f(e,o,{get:()=>t[o],enumerable:!(i=_(t,o))||i.enumerable});return e};var h=(e,t,n)=>(n=e!=null?j(P(e)):{},Z(t||!e||!e.__esModule?f(n,"default",{value:e,enumerable:!0}):n,e)),tt=e=>Z(f({},"__esModule",{value:!0}),e);var lt={};q(lt,{default:()=>F,framify:()=>y});module.exports=tt(lt);var M=h(require("lottie-web"),1);var L=require("howler"),p=class extends L.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var U=`/* prevent zoom */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7QUFFQTtFQUNFOztBQUdGO0FBQUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOztBQUlBO0VBQ0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwcmV2ZW50IHpvb20gKi9cblxuc3ZnLmxvdHRpZS1jb250cm9sbGVyIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gID4gKiB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICA+IGdbY2xpcC1wYXRoXSxcbiAgLm92ZXJmbG93IHtcbiAgICBjbGlwLXBhdGg6IHVuc2V0O1xuICB9XG5cbiAgKiB7XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247IC8vIG5vbmU/XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLm5vY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNsaWNrLFxuICAuaGl0Ym94IHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGl0Ym94ICoge1xuICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubm9zY2FsZSB7XG4gICAgW3N0cm9rZV0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG59Il19 */`;var N=h(require("tinycolor2"),1);function Y(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}var k=()=>{};function x(e,t=document){return t.querySelector(e)}function z(e,t=document){return Array.from(t.querySelectorAll(e))}function B(e,t){return Math.random()*(t-e)+e}function I(e,t=1){return`${e/t*100}%`}function C(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function S(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function H(...e){let{name:t,color:n="lightgray",as:i="log"}=this;if(!t)return console[i](...e);let o=(0,N.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${t}`,`color: ${o}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function G(e,t=""){let n="data-type",i=document.querySelector(`style[${n}="${e}]`);i||(i=document.createElement("style"),i.setAttribute(n,e),document.head.appendChild(i)),i.innerHTML=t}function et(e,t){return e.markers.find(n=>n.payload.name===t)||null}function v(e,t=null){let{totalFrames:n,currentFrame:i}=e,o=n-1;if(t===null)return[i>=o?0:i,o];if(typeof t=="number")return[t,o];if(typeof t!="string")return t;let r=!e.loop,a=[];return t.split(",").filter(Boolean).slice(0,2).forEach((c,g)=>{c=c.trim();let u=et(e,c);u!==null&&a.push(nt(u,r?g:0))}),a}function nt(e,t=0){return e.time+(t>0?1:0)}function J(e,t,n=!0){let i;Array.isArray(t)?i=t.map(o=>v(e,o)):i=v(e,t),e.playSegments(i,n)}function it(e,t=0){let[n,i]=e;return n+(i-n)*t}function w(e,t,n=1,i=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),a=Math.round(r*(t.length-1));t=t[a]}else t===null&&(t=0);let o=v(e,t);e.goToAndStop(it(o,n),i)}var D=h(require("lottie-api"),1);var ot={0:"lightblue",1:"orange",2:"lightgray",3:"red"},rt={3:"error",2:"log"},A=class e{animation=null;container=null;api=null;name="";player;debug=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:o=0,name:r="",rateVariation:a=0,filterSpread:c=.5,howlerOptions:g={},...u}=t;this.debug=n,this.volumeVariation=o,this.rateVariation=a,this.name=r,i&&G("lottie-controller",U),this.container=typeof t.container=="string"?(()=>{let l=x(t.container);if(!l)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return l})():t.container||document.body,this.player=M.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(c)},audioFactory(l){return new p({src:l,html5:!!Y(),...g})},...u,container:this.container}),this.api=D.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=C(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let l=this.getElem();l&&(l.dataset.filename=this.name,l.classList.add("lottie-controller"),l.addEventListener("contextmenu",s=>(s.preventDefault(),s.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let d=1/0;this.player.addEventListener("enterFrame",l=>{if(l.direction!==1||this.player.isPaused)return;let{audios:s}=this.player.audioController||{audios:[]},b=this.player.firstFrame+this.player.currentFrame;s.forEach(({audio:m,data:X})=>{var O,V,W;let{st:E}=X;if(E<=b&&E>d){let Q=this.rateVariation*.5;(O=m.manualRate)==null||O.call(m,B(1-Q,1+Q)),(V=m.manualVolume)==null||V.call(m,B(1-this.volumeVariation,1));let R={audios:s,audio:m,data:X,prevent:!1};this.player.triggerEvent("audio",R),R.prevent!==!0&&((W=m.manualPlay)==null||W.call(m))}}),d=b})}onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?x(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),z(t,n||void 0));isPlaying=(...t)=>{let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;seek=(t,{position:n=0,isFrame:i=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(t);let o=w(this.player,t,n,i);return this.log("seek",1)({position:n}),o};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t);let n=this.getElem();if(n){if(this.animation===null){n.removeAttribute("data-animation");return}n.setAttribute("data-animation",this.animation)}};log=(t,n)=>{if(!this.debug)return k;let i=rt[n||2],o=ot[n||2];return(...r)=>{H.call({name:t,color:o,as:i},...r,{...this.getInfos()})}};play=(t,{isFrame:n=!0,loop:i=!1,smooth:o=!1}={})=>{let r=!o;if(this.player.loop=i,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),this.log("play",1)(),J(this.player,t,r)};getName=()=>{let{fileName:t,path:n=""}=this.player;return this.name?this.name:!t||t==="data"?n.split("/").filter(Boolean).pop()||"untitled":t};destroy=()=>{this.player.destroy()};static getAnimationKey(t=null){return t==null?null:typeof t=="string"?t:JSON.stringify(t)}static buildFilterSize(t){let[n,i,o,r]=S(t);return{x:I(-r),y:I(-n),width:I(1+i+r),height:I(1+o+n)}}};var T=`.framify {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZS9mcmFtaWZ5Iiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQUtFO0VBQ0E7RUFDQTtFQUNBLFNBUE07RUFRTixLQVJNO0VBU047O0FBdkNBO0VBNkJGO0lBYUk7SUFDQTtJQUNBOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBLGVBckJJO0VBc0JKOztBQTlDRjtFQXNESTtJQUxBO0lBQ0E7OztBQVNGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFNBekNFO0VBMENGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBLGtCQWhEVztFQWlEWDtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQTlFSjtFQWFFO0lBMEVJLGtCQTdETzs7O0FBUmI7RUFxRU0sa0JBN0RPOztBQWdFVDtFQVRFO0VBQ0E7RUFDQTs7QUE3RU47RUFxREU7SUFzQkk7SUFDQTtJQUNBOzs7QUE3RU47RUFtQ0E7SUFRSTtJQUNBOzs7QUFxREY7RUF0REU7RUFDQTs7QUF5REY7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQSxLQTFGRTtFQTJGRixNQTNGRTtFQTRGRjtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbW9iaWxlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGlzbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXN0b3VjaCB7XG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGhvdmVyIHtcbiAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgJjpob3ZlciB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLmZyYW1pZnkge1xuICAkZ2FwOiAxcmVtO1xuICAkY29sb3Itc2hhZG93OiByZ2JhKDE1OCwgMTYwLCAxNjIsIDAuMjUpO1xuICAkY29sb3ItbGluazogaHNsKDIxMiwgMTAwJSwgNzYlKTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTZyZW0sIDFmcikpO1xuICBwYWRkaW5nOiAkZ2FwO1xuICBnYXA6ICRnYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX19jZWxsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXItcmFkaXVzOiAkZ2FwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWl4aW4gc2hhZG93IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICRjb2xvci1zaGFkb3c7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGlzbW91c2Uge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nOiAkZ2FwO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zaGFkb3c7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0sIHZpc2liaWxpdHksIG9wYWNpdHksIGJhY2tncm91bmQtY29sb3I7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICBAbWl4aW4gbGluay12aXNpYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgaG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGluaztcbiAgICAgIH1cblxuICAgICAgOmhvdmVyID4gJiB7XG4gICAgICAgIEBpbmNsdWRlIGxpbmstdmlzaWJsZTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgaXN0b3VjaCB7XG4gICAgICAgIEBpbmNsdWRlIGxpbmstdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSBpc3RvdWNoIHtcbiAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgIDpoYXMoLmZ1bGxzY3JlZW4pID4gJjpub3QoLmZ1bGxzY3JlZW4pIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogJGdhcDtcbiAgICAgIGxlZnQ6ICRnYXA7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMiAqICN7JGdhcH0pO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDIgKiAjeyRnYXB9KTtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgfVxuXG4gICAgPiBpZnJhbWUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */`;function y(e,{parent:t=document.body}={}){let n=document.createElement("div");n.classList.add("framify"),G("framify",T),e.forEach(r=>{let a=document.createElement("div"),c=r.replace(/\/index\.html?$/,"").split("/").pop();a.innerHTML=`
      <a href="${r}" class="framify__cell-link" title="${C(c)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${r}"></iframe>
    `,a.classList.add("framify__cell");let g=a.querySelector("iframe");g&&(g.onload=function(){o(a,!1);let u=!1;function d(s){if(!s.view)return;let{style:b}=s.view.document.body;b.cursor=i(s.target)?"":"var(--cursor)"}let l=g.contentWindow;l&&(l.onpointerover=function(s){d(s)},l.onpointermove=function(s){d(s)},l.onpointerdown=function(s){u=i(s.target)},l.onclick=function(){u||o(a)},l.onblur=function(){u=!1},l.onkeydown=function(s){s.key==="Escape"&&o(a,!1)})},n.appendChild(a))});function i(r){return r?!!r.closest("svg > *"):!1}function o(r,a){var g;if(!r||window.matchMedia("(pointer:coarse)").matches)return;a=r.classList.toggle("fullscreen",a);let c=(g=r.querySelector("iframe"))==null?void 0:g.contentWindow;c==null||c.document.documentElement.style.setProperty("--cursor",a?"zoom-out":"zoom-in")}t.appendChild(n)}function F(e){return new A(e)}globalThis.useLottie=F;globalThis.framify=y;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
