(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},o={app:0},n=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"32ca22c3"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",c.name="ChunkLoadError",c.type=r,c.request=n,a[1](c)}o[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/lead-it-test/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-spacer"),a("v-card-title",[t._v("Telegram bots")]),a("v-spacer")],1),a("v-main",[a("TelegramTable")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mx-auto"},[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[a("v-card-title",[t._v("Telegram table")])],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("div",{staticClass:"pb-4"},[a("add-bot-dialog")],1),a("v-card",[a("v-simple-table",{attrs:{"fixed-header":"",height:"500px"}},[[a("thead",[a("tr",[a("th",{staticClass:"text-center title black--text"},[t._v("Name")]),a("th",{staticClass:"text-center title black--text"},[t._v("Actions")])])]),a("tbody",t._l(t.tableData,(function(e){return a("tr",{key:e.id,staticClass:"text-center"},[a("td",[a("update-bot-dialog",{attrs:{bot:e}})],1),a("td",[a("v-btn",{attrs:{color:"error",dark:"",rounded:"",fab:"",small:"",icon:""},on:{click:function(a){return t.deleteBot(e.id)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1)])})),0)]],2)],1)],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"600","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"text-uppercase",attrs:{color:"teal",dark:""}},r),[t._v("Add new bot")])]}}]),model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[a("v-toolbar",{staticClass:"teal",attrs:{flat:"",dark:""}},[a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{fab:"",dark:"",icon:""},on:{click:function(e){t.isDialogOpen=!1}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-close")])],1)],1)],1),a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.isValidOrder,callback:function(e){t.isValidOrder=e},expression:"isValidOrder"}},[a("v-container",[a("div",{staticClass:"justify-center text-center title py-4"},[t._v("Add Telegram Bot")]),a("v-divider"),a("v-row",{staticClass:"mx-0"},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name",rules:t.rules,required:"",color:"teal"},model:{value:t.botData.name,callback:function(e){t.$set(t.botData,"name",e)},expression:"botData.name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Description",rules:t.rules,required:"",color:"teal",outlined:"",filled:""},model:{value:t.botData.description,callback:function(e){t.$set(t.botData,"description",e)},expression:"botData.description"}})],1)],1),a("v-row",{staticClass:"mx-0"},[a("v-col",{attrs:{cols:"12"}},[a("drop-an-image",{attrs:{"image-data":t.botData.image},on:{"image-dropped":t.setImage}})],1)],1),a("v-row",{staticClass:"mx-0"},[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[a("v-date-picker",{attrs:{color:"teal"},model:{value:t.botData.date,callback:function(e){t.$set(t.botData,"date",e)},expression:"botData.date"}})],1)],1),a("div",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"my-4 white--text",attrs:{color:"teal",depressed:"",disabled:!t.isValidOrder},on:{click:t.saveBot}},[t._v("Save")])],1)],1)],1)],1)],1)},c=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drop",class:t.getClasses,on:{dragover:function(e){return e.preventDefault(),t.dragOver(e)},dragleave:function(e){return e.preventDefault(),t.dragLeave(e)},drop:function(e){return e.preventDefault(),t.drop(e)}}},[t.imageSource?a("img",{attrs:{src:t.imageSource}}):t._e(),t.wrongFile?a("h2",[t._v("Wrong file type")]):t._e(),t.imageSource||t.isDragging||t.wrongFile?t._e():a("h1",[t._v("Drop an image")])])},u=[],f=(a("c975"),{name:"DropAnImage",props:["imageData"],data:function(){return{isDragging:!1,wrongFile:!1,imageSource:null}},computed:{getClasses:function(){return{isDragging:this.isDragging}}},methods:{dragOver:function(){this.isDragging=!0},dragLeave:function(){this.isDragging=!1},drop:function(t){var e=this,a=t.dataTransfer.files;if(this.wrongFile=!1,1===a.length){var r=a[0];if(r.type.indexOf("image/")>=0){var o=new FileReader;o.onload=function(t){e.imageSource=t.target.result,e.isDragging=!1},o.readAsDataURL(r),this.$emit("image-dropped",r)}else this.wrongFile=!0,this.imageSource=null,this.isDragging=!1}}},watch:{imageData:{handler:function(){var t=this;if(this.imageData instanceof File){this.wrongFile=!1;var e=this.imageData,a=new FileReader;a.onload=function(e){t.imageSource=e.target.result},a.readAsDataURL(e)}else this.imageSource=null},immediate:!0}}}),p=f,m=(a("fb89"),a("0c7c")),v=Object(m["a"])(p,d,u,!1,null,"505f89b7",null),b=v.exports,g={name:"AddBotDialog",components:{DropAnImage:b},data:function(){return{isDialogOpen:!1,rules:[function(t){return!!t||"Required Field"}],botData:{id:null,name:null,description:null,image:null,date:(new Date).toISOString().substr(0,10)},isValidOrder:!1}},methods:{dateChange:function(t){this.botData.date=t},reset:function(){this.$refs.form.reset(),this.botData={id:null,name:null,description:null,image:null,date:(new Date).toISOString().substr(0,10)}},setImage:function(t){this.botData.image=t},saveBot:function(){this.$refs.form.validate()&&(this.isDialogOpen=!1,this.$store.commit("increment"),this.botData.id=this.$store.state.botsId,this.$store.commit("addBot",this.botData),this.reset())}}},h=g,D=a("6544"),x=a.n(D),V=a("8336"),O=a("b0af"),y=a("62ad"),C=a("a523"),w=a("2e4b"),_=a("169a"),k=a("ce7e"),T=a("4bd4"),j=a("132d"),S=a("0fd9"),$=a("2fa4"),B=a("8654"),I=a("a844"),A=a("71d9"),F=a("2a7f"),P=Object(m["a"])(h,l,c,!1,null,"5677ea14",null),E=P.exports;x()(P,{VBtn:V["a"],VCard:O["a"],VCol:y["a"],VContainer:C["a"],VDatePicker:w["a"],VDialog:_["a"],VDivider:k["a"],VForm:T["a"],VIcon:j["a"],VRow:S["a"],VSpacer:$["a"],VTextField:B["a"],VTextarea:I["a"],VToolbar:A["a"],VToolbarItems:F["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"600","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"text-uppercase",attrs:{color:"teal",dark:"",text:""}},r),[t._v(t._s(t.botName))])]}}]),model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[a("v-toolbar",{staticClass:"teal",attrs:{flat:"",dark:""}},[a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{fab:"",dark:"",icon:""},on:{click:function(e){t.isDialogOpen=!1}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-close")])],1)],1)],1),a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.isValidOrder,callback:function(e){t.isValidOrder=e},expression:"isValidOrder"}},[a("v-container",[a("div",{staticClass:"justify-center text-center title py-4"},[t._v("Update Telegram Bot")]),a("v-divider"),a("v-row",{staticClass:"mx-0"},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name",rules:t.rules,required:"",color:"teal"},model:{value:t.botData.name,callback:function(e){t.$set(t.botData,"name",e)},expression:"botData.name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Description",rules:t.rules,required:"",color:"teal",outlined:"",filled:""},model:{value:t.botData.description,callback:function(e){t.$set(t.botData,"description",e)},expression:"botData.description"}})],1)],1),a("v-row",{staticClass:"mx-0"},[a("v-col",{attrs:{cols:"12"}},[a("drop-an-image",{attrs:{"image-data":t.botData.image},on:{"image-dropped":t.setImage}})],1)],1),a("v-row",{staticClass:"mx-0"},[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[a("v-date-picker",{attrs:{color:"teal"},model:{value:t.botData.date,callback:function(e){t.$set(t.botData,"date",e)},expression:"botData.date"}})],1)],1),a("div",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"my-4 white--text",attrs:{color:"teal",depressed:"",disabled:!t.isValidOrder},on:{click:t.saveBot}},[t._v("Save")])],1)],1)],1)],1)],1)},q=[],L=(a("b0c0"),{name:"UpdateBotDialog",components:{DropAnImage:b},props:["bot"],data:function(){return{isDialogOpen:!1,rules:[function(t){return!!t||"Required Field"}],botData:{id:null,name:null,description:null,image:null,date:(new Date).toISOString().substr(0,10)},isValidOrder:!1}},computed:{botName:function(){return this.bot?this.bot.name:null}},methods:{dateChange:function(t){this.botData.date=t},setImage:function(t){this.botData.image=t},saveBot:function(){if(this.$refs.form.validate()){var t=Object.assign({},this.botData);this.$store.commit("updateBot",t)}},getData:function(){this.botData=Object.assign({},this.bot)}},created:function(){this.getData()}}),H=L,M=Object(m["a"])(H,R,q,!1,null,"7d21e2d0",null),N=M.exports;x()(M,{VBtn:V["a"],VCard:O["a"],VCol:y["a"],VContainer:C["a"],VDatePicker:w["a"],VDialog:_["a"],VDivider:k["a"],VForm:T["a"],VIcon:j["a"],VRow:S["a"],VSpacer:$["a"],VTextField:B["a"],VTextarea:I["a"],VToolbar:A["a"],VToolbarItems:F["a"]});var U={name:"TelegramTable",components:{AddBotDialog:E,UpdateBotDialog:N},computed:{tableData:function(){return this.$store.state.botsTableData}},methods:{deleteBot:function(t){this.$store.commit("deleteBot",t)}}},W=U,z=a("99d9"),J=a("1f4f"),Y=Object(m["a"])(W,i,s,!1,null,"6cca9988",null),G=Y.exports;x()(Y,{VBtn:V["a"],VCard:O["a"],VCardTitle:z["a"],VCol:y["a"],VContainer:C["a"],VIcon:j["a"],VRow:S["a"],VSimpleTable:J["a"]});var K={name:"App",components:{TelegramTable:G},data:function(){return{}}},Q=K,X=a("7496"),Z=a("40dc"),tt=a("f6c4"),et=Object(m["a"])(Q,o,n,!1,null,null,null),at=et.exports;x()(et,{VApp:X["a"],VAppBar:Z["a"],VCardTitle:z["a"],VMain:tt["a"],VSpacer:$["a"]});a("d3b7");var rt=a("8c4f"),ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},nt=[],it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container")},st=[],lt={name:"HelloWorld"},ct=lt,dt=Object(m["a"])(ct,it,st,!1,null,"8d76f230",null),ut=dt.exports;x()(dt,{VContainer:C["a"]});var ft={name:"Home",components:{HelloWorld:ut}},pt=ft,mt=Object(m["a"])(pt,ot,nt,!1,null,null,null),vt=mt.exports;r["a"].use(rt["a"]);var bt=[{path:"/",name:"Home",component:vt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],gt=new rt["a"]({mode:"history",base:"/lead-it-test/",routes:bt}),ht=gt,Dt=a("f309");r["a"].use(Dt["a"]);var xt=new Dt["a"]({}),Vt=(a("c740"),a("a434"),a("5530")),Ot=a("2f62");r["a"].use(Ot["a"]);var yt=new Ot["a"].Store({state:{botsId:0,botsTableData:[]},mutations:{increment:function(t){t.botsId++},addBot:function(t,e){t.botsTableData.push(Object(Vt["a"])({},e))},deleteBot:function(t,e){var a=t.botsTableData.findIndex((function(t){return t.id===e}));t.botsTableData.splice(a,1)},updateBot:function(t,e){var a=t.botsTableData.findIndex((function(t){return t.id===e.id}));t.botsTableData.splice(a,1,e)}}});r["a"].config.productionTip=!1,new r["a"]({router:ht,vuetify:xt,store:yt,render:function(t){return t(at)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},f75a:function(t,e,a){},fb89:function(t,e,a){"use strict";var r=a("f75a"),o=a.n(r);o.a}});
//# sourceMappingURL=app.4b374234.js.map