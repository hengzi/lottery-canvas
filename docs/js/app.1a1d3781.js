(function(t){function i(i){for(var a,o,r=i[0],c=i[1],h=i[2],u=0,d=[];u<r.length;u++)o=r[u],n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(i);while(d.length)d.shift()();return s.push.apply(s,h||[]),e()}function e(){for(var t,i=0;i<s.length;i++){for(var e=s[i],a=!0,r=1;r<e.length;r++){var c=e[r];0!==n[c]&&(a=!1)}a&&(s.splice(i--,1),t=o(o.s=e[0]))}return t}var a={},n={app:0},s=[];function o(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)o.d(e,a,function(i){return t[i]}.bind(null,a));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/lottery-canvas/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=i,r=r.slice();for(var h=0;h<r.length;h++)i(r[h]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"557b":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("Home")],1)},s=[],o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home",attrs:{autofocus:""},on:{keydown:function(i){return"button"in i||!t._k(i.keyCode,"enter",13,i.key,"Enter")?t.onPress(i):null}}},[e("canvas",{ref:"canvas",attrs:{width:t.canvasWidth,height:t.canvasHeight}})])},r=[],c=(e("f576"),e("6b54"),e("ac6a"),e("6c7b"),e("d4ec")),h=e("bee2"),l=function(){function t(){Object(c["a"])(this,t),this.name="",this.radius=50,this.scale=1,this.x=0,this.y=0,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.ax=0,this.ay=0,this.az=0,this.posX=0,this.posY=0,this.color0="#000000",this.color1="#000000"}return Object(h["a"])(t,[{key:"draw",value:function(t){t.save(),t.translate(this.posX,this.posY),t.scale(this.scale,this.scale);var i=t.createLinearGradient(0,this.radius*this.scale,this.radius*this.scale,0);i.addColorStop(0,this.color0),i.addColorStop(1,this.color1),t.fillStyle=i,t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI),t.closePath(),t.fill(),t.restore()}},{key:"drawImg",value:function(t){this.img.width&&(t.save(),t.translate(this.posX,this.posY),t.scale(this.scale,this.scale),t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI),t.closePath(),t.clip(),t.drawImage(this.img,-this.radius,-this.radius,2*this.radius,2*this.radius),t.lineWidth=10,t.strokeStyle=t.createLinearGradient(0,this.radius*this.scale,this.radius*this.scale,0),t.strokeStyle.addColorStop(0,this.color0),t.strokeStyle.addColorStop(1,this.color1),t.stroke(),t.restore())}}]),t}(),u={name:"home",data:function(){return{canvasCtx:null,canvasWidth:1920,canvasHeight:1080,animationTimer:null,ballList:[],NUM:30,RADIUS:80,D0:1e3,D1:200,AZ:.1,VZ:5,R:0}},computed:{centerX:function(){return this.canvasWidth/2},centerY:function(){return this.canvasHeight/2},D:function(){return this.D0+this.D1},T:function(){return this.AZ<1e-4?this.D/this.VZ:(Math.sqrt(2*this.AZ*this.D+Math.pow(this.VZ,2))-this.VZ)/this.AZ}},methods:{startAnimation:function(){for(var t=this.NUM;t>0;t--){var i=(t-1)/this.NUM*this.T;this.addBall(i)}cancelAnimationFrame(this.animationTimer),this.animationTimer=requestAnimationFrame(this.update)},stopAnimation:function(){this.ballList=[],this.canvasCtx.clearRect(0,0,this.canvasWidth,this.canvasHeight),cancelAnimationFrame(this.animationTimer)},update:function(){var t=this,i=this.ballList[this.ballList.length-1];while(i&&i.z+i.vz+i.az>=this.D)this.ballList.pop(),this.addBall(),i=this.ballList[this.ballList.length-1];this.canvasCtx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.ballList.forEach(function(i){i.vz+=i.az,i.z+=i.vz,i.scale=t.D1/(t.D-i.z),i.posX=t.centerX+i.x*i.scale,i.posY=t.centerY+i.y*i.scale,i.drawImg(t.canvasCtx)}),this.animationTimer=requestAnimationFrame(this.update)},addBall:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=new l;i.radius=this.RADIUS,i.az=this.AZ,i.vz=this.VZ+this.AZ*t,i.z=(this.VZ+i.vz)*t/2,i.x=(Math.random()-.5)*this.canvasWidth,i.y=(Math.random()-.5)*this.canvasHeight,i.color0=this.getColor(),i.color1=this.getColor();var e=new Image;e.src="https://api.uomg.com/api/rand.avatar?r="+Math.random(),i.img=e,this.ballList.unshift(i)},getColor:function(){this.R+=Math.PI/12;var t=(127*Math.cos(this.R)+128<<16|127*Math.cos(this.R+2*Math.PI/3)+128<<8|127*Math.cos(this.R+4*Math.PI/3)+128).toString(16);return t.padStart(7,"#000")}},mounted:function(){this.canvasCtx=this.$refs["canvas"].getContext("2d"),this.startAnimation()},beforeDestroy:function(){this.stopAnimation()}},d=u,p=(e("724a"),e("2877")),f=Object(p["a"])(d,o,r,!1,null,"68cd3e24",null);f.options.__file="Home.vue";var v=f.exports,m={name:"App",components:{Home:v}},g=m,b=Object(p["a"])(g,n,s,!1,null,null,null);b.options.__file="App.vue";var y=b.exports;function x(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1920",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1080",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"padding",n=t.parentElement,s=n.offsetWidth,o=n.offsetHeight,r=0,c=0,h=(s/i).toFixed(6),l=(o/e).toFixed(6);"padding"===a?h<l?(l=h,r=(o-e*h)/2):h>l&&(h=l,c=(s-i*h)/2):"width"===a?l=h:"height"===a&&(h=l),t.style.width="".concat(i,"px"),t.style.height="".concat(e,"px"),t.style.webkitTransformOrigin="left top 0px",t.style.MozTransformOrigin="left top 0px",t.style.transformOrigin="left top 0px",t.style.webkitTransform="translate(".concat(c,"px, ").concat(r,"px) scale(").concat(h,", ").concat(l,")"),t.style.MozTransform="translate(".concat(c,"px, ").concat(r,"px) scale(").concat(h,", ").concat(l,")"),t.style.transform="translate(".concat(c,"px, ").concat(r,"px) scale(").concat(h,", ").concat(l,")")}function w(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];x.apply(void 0,[document.body].concat(Array.prototype.slice.call(arguments)))}e("557b");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(y)}}).$mount("#app");var M=0;window.addEventListener("resize",function(){clearTimeout(M),M=setTimeout(function(){w(1920,1080)},200)}),w(1920,1080)},"724a":function(t,i,e){"use strict";var a=e("aa7d"),n=e.n(a);n.a},aa7d:function(t,i,e){}});
//# sourceMappingURL=app.1a1d3781.js.map