(function(t){function e(e){for(var n,o,i=e[0],l=e[1],u=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-main",[a("HelloWorld")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-img",{attrs:{src:"https://www.symph.co/static/img/banner-illus.svg"}})],1)],1),a("v-layout",{attrs:{"text-xs-center":"","mt-5":"","px-3":"","py-3":"",id:"about"}},[a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"display-2 font-weight-bold"},[t._v("About Me")])])],1),a("v-layout",{staticClass:"text-xs-center",attrs:{"mt-3":"","px-5":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-avatar",{attrs:{size:"250",color:"grey lighten-4"}},[a("img",{attrs:{src:"https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/50988163_10213734001079444_2817855097181044736_n.jpg?_nc_cat=104&_nc_ht=scontent-nrt1-1.xx&oh=d558e14acbf714985470fb4b740c35a8&oe=5D357E65",alt:"avatar"}})]),a("p",{staticClass:"headline font-weight mt-2"},[t._v("Gwen Danielle Merida")]),a("p",{staticClass:"title font-weight-thin mt-3"},[t._v("Hello I'm a Full Stack Web Developer and iOS Developer from Philippines. Have 5 years work experience in IT Industry.")])],1)],1)],1)},i=[],l={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},u=l,c=a("2877"),p=a("6544"),f=a.n(p),v=a("8212"),h=a("a523"),d=a("0e8f"),m=a("adda"),y=a("a722"),g=Object(c["a"])(u,o,i,!1,null,null,null),x=g.exports;f()(g,{VAvatar:v["a"],VContainer:h["a"],VFlex:d["a"],VImg:m["a"],VLayout:y["a"]});var b={name:"App",components:{HelloWorld:x},data:function(){return{}}},w=b,j=a("7496"),_=a("40dc"),V=a("8336"),k=a("132d"),O=a("f6c4"),C=a("2fa4"),S=Object(c["a"])(w,r,s,!1,null,null,null),M=S.exports;f()(S,{VApp:j["a"],VAppBar:_["a"],VBtn:V["a"],VIcon:k["a"],VImg:m["a"],VMain:O["a"],VSpacer:C["a"]});var P=a("f309");n["a"].use(P["a"]);var A=new P["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:A,render:function(t){return t(M)}}).$mount("#app")}});
//# sourceMappingURL=app.a4fbb506.js.map