"use strict";var w=Object.create;var A=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var j=(e,t)=>{for(var n in t)A(e,n,{get:t[n],enumerable:!0})},F=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of J(t))!T.call(e,o)&&o!==n&&A(e,o,{get:()=>t[o],enumerable:!(i=z(t,o))||i.enumerable});return e};var X=(e,t,n)=>(n=e!=null?w(D(e)):{},F(t||!e||!e.__esModule?A(n,"default",{value:e,enumerable:!0}):n,e)),K=e=>F(A({},"__esModule",{value:!0}),e);var et={};j(et,{default:()=>v,framify:()=>y});module.exports=K(et);var U=X(require("lottie-web"),1);var Z=require("howler"),p=class extends Z.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var W=`/* prevent zoom */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUVBOztBQUVBO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwcmV2ZW50IHpvb20gKi9cblxuc3ZnLmxvdHRpZS1jb250cm9sbGVyIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIFxuICA+ICoge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG5cbiAgPiBnW2NsaXAtcGF0aF0sXG4gIC5vdmVyZmxvdyB7XG4gICAgY2xpcC1wYXRoOiB1bnNldDtcbiAgfVxuXG4gICoge1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAubm9jbGljayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAuY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */`;var S=X(require("tinycolor2"),1);function L(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}var N=()=>{};function G(e,t=document){return t.querySelector(e)}function R(e,t=document){return Array.from(t.querySelectorAll(e))}function h(e,t){return Math.random()*(t-e)+e}function I(e,t=1){return`${e/t*100}%`}function f(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function k(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function Q(...e){let{name:t,color:n="lightgray",as:i="log"}=this;if(!t)return console[i](...e);let o=(0,S.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${t}`,`color: ${o}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function C(e,t=""){let n="data-type",i=document.querySelector(`style[${n}="${e}]`);i||(i=document.createElement("style"),i.setAttribute(n,e),document.head.appendChild(i)),i.innerHTML=t}function P(e,t){return e.markers.find(n=>n.payload.name===t)||null}function B(e,t=null){let{totalFrames:n,currentFrame:i}=e,o=n-1;if(t===null)return[i>=o?0:i,o];if(typeof t=="number")return[t,o];if(typeof t!="string")return t;let r=!e.loop,l=[];return t.split(",").filter(Boolean).slice(0,2).forEach((c,g)=>{c=c.trim();let u=P(e,c);u!==null&&l.push(_(u,r?g:0))}),l}function _(e,t=0){return e.time+(t>0?1:0)}function M(e,t,n=!0){let i;Array.isArray(t)?i=t.map(o=>B(e,o)):i=B(e,t),e.playSegments(i,n)}function $(e,t=0){let[n,i]=e;return n+(i-n)*t}function H(e,t,n=1,i=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),l=Math.round(r*(t.length-1));t=t[l]}let o=B(e,t);e.goToAndStop($(o,n),i)}var q={0:"lightblue",1:"orange",2:"lightgray",3:"red"},tt={3:"error",2:"log"},b=class e{animation=null;container=null;player;debug=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:o=0,rateVariation:r=0,filterSpread:l=.5,howlerOptions:c={},...g}=t;this.debug=n,this.volumeVariation=o,this.rateVariation=r,i&&C("lottie-controller",W),this.container=typeof t.container=="string"?(()=>{let m=G(t.container);if(!m)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return m})():t.container||document.body,this.player=U.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(l)},audioFactory(m){return new p({src:m,html5:!!L(),...c})},...g,container:this.container}),this.player.addEventListener("DOMLoaded",()=>{let m=e.getName(this.player);document.title=f(m),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let s=this.getElem();s&&(s.dataset.filename=m,s.classList.add("lottie-controller"),s.addEventListener("contextmenu",a=>(a.preventDefault(),a.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.log("complete",0)(this.animation)}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)(this.animation)});let u=1/0;this.player.addEventListener("enterFrame",m=>{if(m.direction!==1||this.player.isPaused)return;let{audios:s}=this.player.audioController||{audios:[]},a=this.player.firstFrame+this.player.currentFrame;s.forEach(({audio:d,data:x})=>{let{st:O}=x;if(O<=a&&O>u){let V=this.rateVariation*.5;d.manualRate(h(1-V,1+V)),d.manualVolume(h(1-this.volumeVariation,1));let E={audios:s,audio:d,data:x,willPlay:!0};this.player.triggerEvent("audio",E),E.willPlay&&d.manualPlay()}}),u=a})}onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?G(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),R(t,n||void 0));isPlaying=(...t)=>{let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;seek=(t,{position:n=0,isFrame:i=!0}={})=>(this.player.loop=!1,this.setAnimation(t),this.log("seek",1)(this.animation,n),H(this.player,t,n,i));getAnimation=()=>this.animation;setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t);let n=this.getElem();if(n){if(this.animation===null){n.removeAttribute("data-animation");return}n.setAttribute("data-animation",this.animation)}};log=(t,n)=>{if(!this.debug)return N;let i=tt[n||2],o=q[n||2];return(...r)=>Q.call({name:t,color:o,as:i},...r)};play=(t,{isFrame:n=!0,loop:i=!1,smooth:o=!1}={})=>{let r=!o;if(this.player.loop=i,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),this.log("play",1)(this.animation),M(this.player,t,r)};destroy=()=>{this.player.destroy()};static getName(t){let{fileName:n,path:i=""}=t;return!n||n==="data"?i.split("/").filter(Boolean).pop()||"untitled":n}static getAnimationKey(t=null){return t==null?null:typeof t=="string"?t:JSON.stringify(t)}static buildFilterSize(t){let[n,i,o,r]=k(t);return{x:I(-r),y:I(-n),width:I(1+i+r),height:I(1+o+n)}}};var Y=`.framify {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFLRTtFQUNBO0VBQ0E7RUFDQSxTQVBNO0VBUU4sS0FSTTtFQVNOOztBQXJCQTtFQVdGO0lBYUk7SUFDQTtJQUNBOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBLGVBckJJO0VBc0JKOztBQTVCRjtFQW9DSTtJQUxBO0lBQ0E7OztBQVNGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFNBekNFO0VBMENGO0VBQ0E7RUFDQTtFQUVBO0VBQ0Esa0JBOUNXO0VBK0NYO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBMURKO0VBb0VNO0lBQ0Usa0JBN0RLOztFQWdFUDtJQVhBO0lBQ0E7SUFDQTs7O0FBckVOO0VBK0NFO0lBb0JJO0lBQ0E7SUFDQTs7O0FBbUJKO0VBbkRFO0VBQ0E7O0FBc0RGO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBLEtBdEZFO0VBdUZGLE1BdkZFO0VBd0ZGO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXNtb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi5mcmFtaWZ5IHtcbiAgJGdhcDogMXJlbTtcbiAgJGNvbG9yLXNoYWRvdzogcmdiYSgxNTgsIDE2MCwgMTYyLCAwLjI1KTtcbiAgJGNvbG9yLWxpbms6IGhzbCgyMTIsIDEwMCUsIDc2JSk7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2cmVtLCAxZnIpKTtcbiAgcGFkZGluZzogJGdhcDtcbiAgZ2FwOiAkZ2FwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9fY2VsbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGdhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgQG1peGluIHNoYWRvdyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkY29sb3Itc2hhZG93O1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICByaWdodDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogJGdhcDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2hhZG93O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgQG1peGluIGxpbmstdmlzaWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGlzbW91c2Uge1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saW5rO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvdmVyID4gJiB7XG4gICAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIEBpbmNsdWRlIGxpbmstdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgIC5mdWxsc2NyZWVuIH4gJiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6ICRnYXA7XG4gICAgICBsZWZ0OiAkZ2FwO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAjeyRnYXB9KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDBkdmggLSAyICogI3skZ2FwfSk7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgID4gaWZyYW1lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;function y(e,{parent:t=document.body}={}){let n=document.createElement("div");n.classList.add("framify"),C("framify",Y),e.forEach(r=>{let l=document.createElement("div"),c=r.replace(/\/index\.html?$/,"").split("/").pop();l.innerHTML=`
      <a href="${r}" class="framify__cell-link" title="${f(c)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${r}"></iframe>
    `,l.classList.add("framify__cell");let g=l.querySelector("iframe");g&&(g.onload=function(){o(l,!1);let u=!1;function m(a){if(!a.view)return;let{style:d}=a.view.document.body;d.cursor=i(a.target)?"":"var(--cursor)"}let s=g.contentWindow;s&&(s.onpointerover=function(a){m(a)},s.onpointermove=function(a){m(a)},s.onpointerdown=function(a){u=i(a.target)},s.onclick=function(){u||o(l)},s.onblur=function(){u=!1},s.onkeydown=function(a){a.key==="Escape"&&o(l,!1)})},n.appendChild(l))});function i(r){return r?!!r.closest("svg > *"):!1}function o(r,l){var g;if(!r||window.matchMedia("(max-width: 768px)").matches)return;l=r.classList.toggle("fullscreen",l);let c=(g=r.querySelector("iframe"))==null?void 0:g.contentWindow;c==null||c.document.documentElement.style.setProperty("--cursor",l?"zoom-out":"zoom-in")}t.appendChild(n)}function v(e){return new b(e)}globalThis.useLottie=v;globalThis.framify=y;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
