"use strict";var N=Object.create;var m=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var o=(t,e)=>m(t,"name",{value:e,configurable:!0});var R=(t,e)=>{for(var n in e)m(t,n,{get:e[n],enumerable:!0})},B=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of X(e))!Z.call(t,r)&&r!==n&&m(t,r,{get:()=>e[r],enumerable:!(a=F(e,r))||a.enumerable});return t};var Q=(t,e,n)=>(n=t!=null?N(H(t)):{},B(e||!t||!t.__esModule?m(n,"default",{value:t,enumerable:!0}):n,t)),j=t=>B(m({},"__esModule",{value:!0}),t);var U={};R(U,{default:()=>E});module.exports=j(U);var W=Q(require("lottie-web"),1);var w=require("howler");var v=class v extends w.Howl{constructor(e){super(e)}manualSeek(e){return super.seek(e)}manualPlay(){return super.play()}manualRate(e){return super.rate(e)}manualVolume(e){return super.volume(e)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};o(v,"SustainHowl");var u=v;var V=`/* prevent zoom */
svg.lottie-controller {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  overflow: visible;
}
svg.lottie-controller > g[clip-path] {
  clip-path: unset;
}
svg.lottie-controller * {
  touch-action: none;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyogcHJldmVudCB6b29tICovXG5cbnN2Zy5sb3R0aWUtY29udHJvbGxlciB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICA+IGdbY2xpcC1wYXRoXSB7XG4gICAgY2xpcC1wYXRoOiB1bnNldDtcbiAgfVxuXG4gICoge1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */`;function z(t,e){return t.markers.find(n=>n.payload.name===e)}o(z,"getMarker");function O(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}o(O,"isIOS");function S(t,e,n=!0){let a=t.loop?0:1,r=[];if(e.split(",").filter(Boolean).slice(0,2).map((f,b)=>{let d=z(t,f.trim());if(!d)return;let p=d.time+(b>0?a:0);r.push(p)}),r.length<=1){t.goToAndStop(r[0]||0,!0);return}t.playSegments(r,n)}o(S,"playAnimation");function h(t,e=document){return e.querySelector(t)}o(h,"getElem");function M(t,e=document){return Array.from(e.querySelectorAll(t))}o(M,"getElems");function y(t,e){return Math.random()*(e-t)+t}o(y,"random");function k(t){return t.charAt(0).toUpperCase()+t.slice(1)}o(k,"firstCap");var C=class C{animation=null;container=null;player;debug=!1;volumeVariation;rateVariation;constructor(e={}){let{debug:n=!1,injectCSS:a=!0,volumeVariation:r=0,rateVariation:f=0,howlerOptions:b={},...d}=e;if(this.debug=n,this.volumeVariation=r,this.rateVariation=f,a){let i=document.querySelector("style[data-type=lottie-controller]");i||(i=document.createElement("style"),i.setAttribute("data-type","lottie-controller"),i.innerHTML=V,document.body.appendChild(i))}this.container=typeof e.container=="string"?(()=>{let i=h(e.container);if(!i)throw new Error(`Element not found: ${e.container}`);return i})():e.container||document.body,this.player=W.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,audioFactory(i){return new u({src:i,html5:!!O(),...b})},...d,container:this.container}),this.player.addEventListener("DOMLoaded",()=>{let{fileName:i}=this.player;document.title=k(i);let l=this.getElem();l&&(l.dataset.filename=this.player.fileName,l.classList.add("lottie-controller"),l.addEventListener("contextmenu",s=>(s.preventDefault(),s.stopPropagation(),!1),!0))});let p=1/0;this.player.addEventListener("enterFrame",i=>{if(i.direction!==1||this.player.isPaused)return;let{audios:l}=this.player.audioController||{audios:[]},s=this.player.firstFrame+this.player.currentFrame;l.forEach(({audio:g,data:A})=>{let{st:L}=A;if(L<=s&&L>p){let I=this.rateVariation*.5;g.manualRate(y(1-I,1+I)),g.manualVolume(y(1-this.volumeVariation,1));let x={audios:l,audio:g,data:A,willPlay:!0};this.player.triggerEvent("audio",x),x.willPlay&&g.manualPlay()}}),p=s})}onComplete=o(e=>this.player.addEventListener("complete",e),"onComplete");onLoad=o(e=>this.player.addEventListener("DOMLoaded",e),"onLoad");onAudio=o(e=>this.player.addEventListener("audio",e),"onAudio");getElem=o((e,n)=>(n||(n=this.player.renderer.svgElement),e?h(e,n||void 0):n),"getElem");getElems=o((e,n)=>(n||(n=this.player.renderer.svgElement),M(e,n||void 0)),"getElems");isPlaying=o((...e)=>this.animation!==null&&e.includes(this.animation),"isPlaying");currentAnimation=o(()=>this.animation,"currentAnimation");play=o((e,{loop:n=!1,force:a=!0}={})=>{this.animation=e;let r=this.getElem();r&&(r.dataset.animation=e),this.player.loop=n,this.debug&&console.log("playing:",e),S(this.player,e,a)},"play");destroy=o(()=>{this.player.destroy()},"destroy")};o(C,"LottieController");var c=C;function E(t){return new c(t)}o(E,"useLottie");globalThis.useLottie=E;
//# sourceMappingURL=index.js.map
