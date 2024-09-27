"use strict";var T=Object.create;var C=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var J=(e,t)=>{for(var n in t)C(e,n,{get:t[n],enumerable:!0})},V=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of M(t))!D.call(e,o)&&o!==n&&C(e,o,{get:()=>t[o],enumerable:!(i=j(t,o))||i.enumerable});return e};var Z=(e,t,n)=>(n=e!=null?T(H(e)):{},V(t||!e||!e.__esModule?C(n,"default",{value:e,enumerable:!0}):n,e)),P=e=>V(C({},"__esModule",{value:!0}),e);var et={};J(et,{default:()=>x,framify:()=>y});module.exports=P(et);var k=Z(require("lottie-web"),1);var Q=require("howler"),p=class extends Q.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var W=`/* prevent zoom */
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
svg.lottie-controller .click {
  pointer-events: auto;
  cursor: pointer;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7QUFFQTtFQUNFOztBQUdGO0FBQUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyogcHJldmVudCB6b29tICovXG5cbnN2Zy5sb3R0aWUtY29udHJvbGxlciB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBcbiAgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gID4gZ1tjbGlwLXBhdGhdLFxuICAub3ZlcmZsb3cge1xuICAgIGNsaXAtcGF0aDogdW5zZXQ7XG4gIH1cblxuICAqIHtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLm5vY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNsaWNrIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */`;var S=Z(require("tinycolor2"),1);function L(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}var R=()=>{};function h(e,t=document){return t.querySelector(e)}function O(e,t=document){return Array.from(t.querySelectorAll(e))}function G(e,t){return Math.random()*(t-e)+e}function A(e,t=1){return`${e/t*100}%`}function I(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function N(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function U(...e){let{name:t,color:n="lightgray",as:i="log"}=this;if(!t)return console[i](...e);let o=(0,S.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${t}`,`color: ${o}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function f(e,t=""){let n="data-type",i=document.querySelector(`style[${n}="${e}]`);i||(i=document.createElement("style"),i.setAttribute(n,e),document.head.appendChild(i)),i.innerHTML=t}function _(e,t){return e.markers.find(n=>n.payload.name===t)||null}function B(e,t=null){let{totalFrames:n,currentFrame:i}=e,o=n-1;if(t===null)return[i>=o?0:i,o];if(typeof t=="number")return[t,o];if(typeof t!="string")return t;let r=!e.loop,a=[];return t.split(",").filter(Boolean).slice(0,2).forEach((m,u)=>{m=m.trim();let g=_(e,m);g!==null&&a.push(K(g,r?u:0))}),a}function K(e,t=0){return e.time+(t>0?1:0)}function z(e,t,n=!0){let i;Array.isArray(t)?i=t.map(o=>B(e,o)):i=B(e,t),e.playSegments(i,n)}function $(e,t=0){let[n,i]=e;return n+(i-n)*t}function w(e,t,n=1,i=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),a=Math.round(r*(t.length-1));t=t[a]}let o=B(e,t);e.goToAndStop($(o,n),i)}var q={0:"lightblue",1:"orange",2:"lightgray",3:"red"},tt={3:"error",2:"log"},b=class e{animation=null;container=null;player;debug=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:o=0,rateVariation:r=0,filterSpread:a=.5,howlerOptions:m={},...u}=t;this.debug=n,this.volumeVariation=o,this.rateVariation=r,i&&f("lottie-controller",W),this.container=typeof t.container=="string"?(()=>{let c=h(t.container);if(!c)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return c})():t.container||document.body,this.player=k.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(a)},audioFactory(c){return new p({src:c,html5:!!L(),...m})},...u,container:this.container}),this.player.addEventListener("DOMLoaded",()=>{let c=e.getName(this.player);document.title=I(c),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let s=this.getElem();s&&(s.dataset.filename=c,s.classList.add("lottie-controller"),s.addEventListener("contextmenu",l=>(l.preventDefault(),l.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.log("complete",0)(this.animation)}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)(this.animation)});let g=1/0;this.player.addEventListener("enterFrame",c=>{if(c.direction!==1||this.player.isPaused)return;let{audios:s}=this.player.audioController||{audios:[]},l=this.player.firstFrame+this.player.currentFrame;s.forEach(({audio:d,data:v})=>{let{st:X}=v;if(X<=l&&X>g){let E=this.rateVariation*.5;d.manualRate(G(1-E,1+E)),d.manualVolume(G(1-this.volumeVariation,1));let F={audios:s,audio:d,data:v,willPlay:!0};this.player.triggerEvent("audio",F),F.willPlay&&d.manualPlay()}}),g=l})}onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?h(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),O(t,n||void 0));isPlaying=(...t)=>{let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;seek=(t,{position:n=0,isFrame:i=!0}={})=>(this.player.loop=!1,this.setAnimation(t),this.log("seek",1)(this.animation,n),w(this.player,t,n,i));getAnimation=()=>this.animation;setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t);let n=this.getElem();if(n){if(this.animation===null){n.removeAttribute("data-animation");return}n.setAttribute("data-animation",this.animation)}};log=(t,n)=>{if(!this.debug)return R;let i=tt[n||2],o=q[n||2];return(...r)=>U.call({name:t,color:o,as:i},...r)};play=(t,{isFrame:n=!0,loop:i=!1,smooth:o=!1}={})=>{let r=!o;if(this.player.loop=i,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),this.log("play",1)(this.animation),z(this.player,t,r)};destroy=()=>{this.player.destroy()};static getName(t){let{fileName:n,path:i=""}=t;return!n||n==="data"?i.split("/").filter(Boolean).pop()||"untitled":n}static getAnimationKey(t=null){return t==null?null:typeof t=="string"?t:JSON.stringify(t)}static buildFilterSize(t){let[n,i,o,r]=N(t);return{x:A(-r),y:A(-n),width:A(1+i+r),height:A(1+o+n)}}};var Y=`.framify {
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
  display: block;
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
  :hover > .framify__cell-link {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
}
@media (max-width: 768px) {
  .framify__cell-link {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
}
.framify__cell.fullscreen {
  box-shadow: 0 0 10px rgba(158, 160, 162, 0.25);
  z-index: 1;
}
.fullscreen ~ .framify__cell {
  display: none;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZS9mcmFtaWZ5Iiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBS0U7RUFDQTtFQUNBO0VBQ0EsU0FQTTtFQVFOLEtBUk07RUFTTjs7QUFyQkE7RUFXRjtJQWFJO0lBQ0E7SUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQSxlQXJCSTtFQXNCSjs7QUE1QkY7RUFvQ0k7SUFMQTtJQUNBOzs7QUFTRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxTQXpDRTtFQTBDRjtFQUNBO0VBQ0E7RUFFQTtFQUNBLGtCQTlDVztFQStDWDtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQTFESjtFQW9FTTtJQUNFLGtCQTdESzs7RUFnRVA7SUFYQTtJQUNBO0lBQ0E7OztBQXJFTjtFQStDRTtJQW9CSTtJQUNBO0lBQ0E7OztBQW1CSjtFQW5ERTtFQUNBOztBQXNERjtFQUNFOztBQUdGO0VBQ0U7RUFDQSxLQXRGRTtFQXVGRixNQXZGRTtFQXdGRjtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbW9iaWxlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGlzbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4uZnJhbWlmeSB7XG4gICRnYXA6IDFyZW07XG4gICRjb2xvci1zaGFkb3c6IHJnYmEoMTU4LCAxNjAsIDE2MiwgMC4yNSk7XG4gICRjb2xvci1saW5rOiBoc2woMjEyLCAxMDAlLCA3NiUpO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNnJlbSwgMWZyKSk7XG4gIHBhZGRpbmc6ICRnYXA7XG4gIGdhcDogJGdhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2NlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRnYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBtaXhpbiBzaGFkb3cge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLXNoYWRvdztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6ICRnYXA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNoYWRvdztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIEBtaXhpbiBsaW5rLXZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBpc21vdXNlIHtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGluaztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3ZlciA+ICYge1xuICAgICAgICAgIEBpbmNsdWRlIGxpbmstdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAaW5jbHVkZSBsaW5rLXZpc2libGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICB9XG5cbiAgICAuZnVsbHNjcmVlbiB+ICYge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAkZ2FwO1xuICAgICAgbGVmdDogJGdhcDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogI3skZ2FwfSk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMiAqICN7JGdhcH0pO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICA+IGlmcmFtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */`;function y(e,{parent:t=document.body}={}){let n=document.createElement("div");n.classList.add("framify"),f("framify",Y),e.forEach(r=>{let a=document.createElement("div"),m=r.replace(/\/index\.html?$/,"").split("/").pop();a.innerHTML=`
      <a href="${r}" class="framify__cell-link" title="${I(m)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${r}"></iframe>
    `,a.classList.add("framify__cell");let u=a.querySelector("iframe");u&&(u.onload=function(){o(a,!1);let g=!1;function c(l){if(!l.view)return;let{style:d}=l.view.document.body;d.cursor=i(l.target)?"":"var(--cursor)"}let s=u.contentWindow;s&&(s.onpointerover=function(l){c(l)},s.onpointermove=function(l){c(l)},s.onpointerdown=function(l){g=i(l.target)},s.onclick=function(){g||o(a)},s.onblur=function(){g=!1},s.onkeydown=function(l){l.key==="Escape"&&o(a,!1)})},n.appendChild(a))});function i(r){return r?!!r.closest("svg > *"):!1}function o(r,a){var u;if(!r||window.matchMedia("(max-width: 768px)").matches)return;a=r.classList.toggle("fullscreen",a);let m=(u=r.querySelector("iframe"))==null?void 0:u.contentWindow;m==null||m.document.documentElement.style.setProperty("--cursor",a?"zoom-out":"zoom-in")}t.appendChild(n)}function x(e){return new b(e)}globalThis.useLottie=x;globalThis.framify=y;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
