(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-400a8aff"],{"0045":function(e,t,i){"use strict";i("7279")},"02d9":function(e,t,i){},"0a9c":function(e,t,i){"use strict";i("8d49")},"0b28":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"myload"},[n("home-header",{attrs:{pathName:""}}),n("div",{staticClass:"login-main"},[n("div",{staticClass:"login-container"},[n("div",{staticClass:"login_left"},[n("img",{staticClass:"svg",attrs:{src:i("9efb")}}),e.title?n("div",[e._v("Welcome To "+e._s(e.title))]):e._e()]),n("div",{staticClass:"login_right"},[n("div",{staticClass:"box",attrs:{"data-aos":"fade-left","data-aos-easing":"ease","data-aos-duration":"350","data-aos-once":"false"}},[n("div",{staticClass:"login_box"},[n("div",{staticClass:"title"},[e._v(e._s(e.$t("reg1")))]),n("el-form",{ref:"myForm",class:e.email_whitelist_suffix.length?"":"myfrom",attrs:{size:"large",model:e.myForm,rules:e.myRules,"label-position":"right"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handlReg(t)}}},[n("el-form-item",{attrs:{prop:"email"}},[n("el-input",{class:e.email_whitelist_suffix.length?"myinput":"",attrs:{placeholder:e.$t("inputEmail"),maxlength:"128",clearable:0==e.email_whitelist_enable,"prefix-icon":"el-icon-message"},model:{value:e.myForm.email,callback:function(t){e.$set(e.myForm,"email",t)},expression:"myForm.email"}},[e.email_whitelist_suffix.length?n("el-select",{ref:"selectRef",staticClass:"mysel",staticStyle:{"min-width":"122px"},attrs:{slot:"append",placeholder:"Select"},on:{change:e.handleSelectChange},slot:"append",model:{value:e.suffix,callback:function(t){e.suffix=t},expression:"suffix"}},e._l(e.email_whitelist_suffix,(function(e,t){return n("el-option",{key:t,attrs:{label:"@"+e,value:""+e}})})),1):e._e()],1)],1),1==e.is_email_verify?n("el-form-item",{attrs:{prop:"email_code"}},[n("el-input",{attrs:{type:"text","prefix-icon":"el-icon-position",maxlength:"8",placeholder:e.$t("inputCode")},model:{value:e.myForm.email_code,callback:function(t){e.$set(e.myForm,"email_code",t)},expression:"myForm.email_code"}},[n("el-button",{staticStyle:{"margin-top":"8px","border-radius":"4px"},attrs:{slot:"suffix",type:e.disabled?"info":"primary",loading:e.loadingEmailCode,disabled:e.disabled||!e.email_test,size:"mini"},on:{click:e.handleEmailCode},slot:"suffix"},[e._v(" "+e._s(e.btn_code)+" ")])],1)],1):e._e(),0==e.is_email_verify&&e.VerificationImg?n("el-form-item",{attrs:{prop:"email_code"}},[n("el-row",{attrs:{gutter:5}},[n("el-col",{attrs:{span:13}},[n("el-input",{attrs:{"prefix-icon":"el-icon-position",placeholder:e.$t("inputCode"),clearable:"",maxlength:"8"},model:{value:e.myForm.email_code,callback:function(t){e.$set(e.myForm,"email_code",t)},expression:"myForm.email_code"}})],1),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"loadMask"},[n("img",{attrs:{src:e.VerificationImg},on:{click:e.init}}),e.loadingPage?n("div",{staticClass:"md"},[n("i",{staticClass:"el-icon el-icon-loading",staticStyle:{"font-size":"16px"}}),e._v(" Loading")]):e._e()])])],1)],1):e._e(),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{"prefix-icon":"el-icon-lock","show-password":"",placeholder:e.$t("inputPwd")},model:{value:e.myForm.password,callback:function(t){e.$set(e.myForm,"password",t)},expression:"myForm.password"}})],1),n("el-form-item",{attrs:{prop:"passwordRe"}},[n("el-input",{attrs:{"prefix-icon":"el-icon-lock","show-password":"",placeholder:e.$t("inputPwd2"),maxlength:"32",clearable:""},model:{value:e.myForm.passwordRe,callback:function(t){e.$set(e.myForm,"passwordRe",t)},expression:"myForm.passwordRe"}})],1),1==e.is_invite_force?n("el-form-item",{attrs:{prop:"invite_code"}},[n("el-input",{attrs:{placeholder:e.$t("inviteCode")+"（"+(1==e.is_invite_force?e.$t("need"):e.$t("need_no"))+"）",maxlength:"32"},model:{value:e.myForm.invite_code,callback:function(t){e.$set(e.myForm,"invite_code",t)},expression:"myForm.invite_code"}})],1):e._e()],1),n("el-button",{staticStyle:{width:"100%",margin:"12px 0 0 0"},attrs:{disabled:1==e.stop_register,loading:e.loading,type:1==e.stop_register?"info":"primary",size:"large",round:""},nativeOn:{click:function(t){return t.preventDefault(),e.handlReg(t)}}},[e._v(" "+e._s(1==e.stop_register?e.$t("stop_register"):e.$t("reg2"))+" ")]),e.sysconfig1.show_reg_tos?n("div",{staticStyle:{"margin-top":"20px","text-align":"center"}},[n("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v(" "+e._s(e.$t("yuedu"))+" "),n("a",{on:{click:function(t){return e.$router.push("/tos")}}},[e._v(" "+e._s(e.$t("ServiceAgreement"))+" ")]),e._v(" &"),n("a",{on:{click:function(t){return e.$router.push("/privacy")}}},[e._v(" "+e._s(e.$t("PrivacyPolicy"))+" ")])])],1):e._e(),n("div",{staticStyle:{"margin-top":"20px","text-align":"center","font-size":"15px"}},[e._v(" "+e._s(e.$t("accountYes"))+" "),n("a",{on:{click:function(t){return e.$router.push("login")}}},[e._v(e._s(e.$t("login1")))])])],1)])])])]),n("home-footer"),n("el-dialog",{staticClass:"xdialog",attrs:{visible:e.showCF,"close-on-click-modal":!1,width:"380px","modal-append-to-body":"","append-to-body":""},on:{"update:visible":function(t){e.showCF=t},close:e.closeCF}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingCF,expression:"loadingCF"}],staticStyle:{width:"100%","text-align":"center",padding:"32px 0 0 0"}},[n("div",{ref:"turnstile",attrs:{id:"cf-turnstile"}})])])],1)},s=[],o=i("1da1"),a=(i("96cf"),i("99af"),i("c24f")),r={components:{},data:function(){var e=this,t=function(t,i,n){var s=e.suffix?"".concat(e.myForm.email,"@").concat(e.suffix):e.myForm.email,o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);if(!o)return e.email_test=!1,n(new Error(e.$t("enterEmail")));e.email_test=!0,n()},i=function(t,i,n){(i.length<8||e.myForm.password.length>32)&&n(new Error(e.$t("enterPwd"))),n()},n=function(t,i,n){i===e.myForm.password&&i||n(new Error(e.$t("twoPwd"))),n()},s=function(t,i,n){i.length<4&&n(new Error(e.$t("enterCode"))),n()},o=function(t,i,n){i.length<1&&1==e.is_invite_force&&n(new Error(e.$t("ecnterInvite"))),n()};return{siteKey:window.config.cloudflare.siteKey||"",cftoken:"",showCF:!1,loadingCF:!1,timer2:"",cf_loaded:!1,timer:"",title:window.config.title||"",VerificationImg:"",myForm:{email:"",password:"",email_code:"",invite_code:this.$store.state.app.invite_code,rsfxToken:""},stop_register:0,is_invite_force:0,is_email_verify:0,email_whitelist_enable:0,email_whitelist_suffix:[],btn_code:this.$t("getCode"),loading:!1,percent:0,pColor:"#f00",checked:!0,loadingPage:!0,disabled:!1,loadingEmailCode:!1,crisp:!1,email_test:!1,suffix:"",myRules:{email:[{trigger:"change",validator:t}],email_code:[{trigger:"blur",validator:s}],password:[{trigger:"change",validator:i}],passwordRe:[{trigger:"blur",validator:n}],invite_code:[{trigger:"blur",validator:o}]},sysconfig1:window.config}},computed:{sysconfig:function(){return this.$store.state.app.sysconfig}},mounted:function(){this.is_invite_force=window.config.is_invite_force||0,this.is_email_verify=window.config.is_email_verify||0,this.stop_register=window.config.stop_register||0,this.email_whitelist_enable=window.config.email_whitelist_enable||0,this.email_whitelist_suffix=window.config.email_whitelist_suffix||[],this.email_whitelist_suffix.length&&(this.suffix=this.email_whitelist_suffix[0]),this.$message.closeAll(),this.$notify.closeAll(),this.$route.query.code&&(this.myForm.invite_code=this.$route.query.code,this.$store.dispatch("app/setInvite_code",this.myForm.invite_code)),this.init2()},beforeDestroy:function(){this.timer2&&clearInterval(this.timer2),this.timer&&clearInterval(this.timer)},watch:{cf_loaded:function(e){this.loadingCF=!1}},methods:{is_load_cf:function(){var e=this;if(!this.cf_loaded){this.loadingCF=!0;var t=document.getElementById("cf-turnstile");t&&t.innerHTML.length&&(console.log("testDiv1.length:",t.innerHTML.length),this.cf_loaded=!0,this.loadingCF=!1),this.timer2=setInterval((function(){e.$nextTick((function(){var t=document.getElementById("cf-turnstile");console.log("testDiv2.length:",t.innerHTML.length),t&&t.innerHTML.length&&(console.log("testDiv2222.length:",t.innerHTML.length),e.cf_loaded=!0,e.loadingCF=!1,e.timer2&&clearInterval(e.timer2))}))}),1e3)}},handleEmailCode:function(){return this.siteKey?this.loadTurnstile():this.getCode()},loadTurnstile:function(){var e=this;this.showCF=!0;var t=document.createElement("script");t.src="https://challenges.cloudflare.com/turnstile/v0/api.js",t.async=!0,t.onload=function(){window.turnstile.render(e.$refs.turnstile,{sitekey:e.siteKey,callback:e.onTokenReceived})},document.body.appendChild(t)},onTokenReceived:function(e){var t=this;this.cftoken=e,setTimeout((function(){return t.showCF=!1,t.getCode()}),1e3)},renderCF:function(){this.is_load_cf(),this.showCF=!0},closeCF:function(){console.log(window.turnstile),this.timer2&&clearInterval(this.timer2),window.turnstile&&window.turnstile.remove(),this.loadingCF=!1,this.cf_loaded=!1,this.showCF=!1},verified:function(e){console.log("verifiedeee:",e)},init2:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingPage=!0,t.next=3,Object(a["k"])().then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.is_invite_force=i.data.is_invite_force||0,e.is_email_verify=i.data.is_email_verify||0,e.email_whitelist_suffix=i.data.email_whitelist_suffix||[],window.config.is_invite_force=e.is_invite_force,window.config.is_email_verify=e.is_email_verify,window.config.is_invite_force=e.is_invite_force,window.config.email_whitelist_suffix=e.email_whitelist_suffix,e.email_whitelist_suffix.length&&(e.suffix=e.email_whitelist_suffix[0]),e.loadingPage=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loadingPage=!1}));case 3:case"end":return t.stop()}}),t)})))()},init:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingPage=!0,t.next=3,Object(a["b"])("register").then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.VerificationImg=i.data.data.captcha,e.stop_register=i.data.sets.stop_register||0,e.is_invite_force=i.data.sets.is_invite_force||0,e.is_email_verify=i.data.sets.is_email_verify||0,e.email_whitelist_enable=i.data.sets.email_whitelist_enable||0,e.email_whitelist_suffix=i.data.sets.email_whitelist_suffix||[],window.config.is_invite_force=e.is_invite_force,window.config.is_email_verify=e.is_email_verify,window.config.stop_register=e.stop_register,window.config.email_whitelist_suffix=e.email_whitelist_suffix,window.config.email_whitelist_enable=e.email_whitelist_enable,e.email_whitelist_suffix.length&&e.email_whitelist_enable&&(e.suffix=e.email_whitelist_suffix[0]),e.myForm.rsfxToken=i.data.data.token,1==e.stop_register&&e.$notify({title:e.$t("sysNotice"),message:e.$t("stop_register"),type:"warning"}),e.loadingPage=!1;case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loadingPage=!1}));case 3:case"end":return t.stop()}}),t)})))()},handleSelectChange:function(){var e=10*this.suffix.length;this.$refs.selectRef.$el.style.width="".concat(e+20,"px")},handlReg:function(){var e=this,t=this.suffix?"".concat(this.myForm.email,"@").concat(this.suffix):this.myForm.email,i=Object.assign({},this.myForm);i.email=t,this.$refs.myForm.validate((function(t){t&&(e.loading=!0,Object(a["y"])(i).then((function(t){if(e.loading=!1,t.status&&"success"!=t.status)return e.$notify({title:e.$t("sysNotice"),message:t.message||e.$t("regNo"),type:"error"});e.$store.dispatch("user/register",t.data),e.$store.dispatch("app/setInvite_code",""),e.$notify({title:e.$t("sysNotice"),message:e.$t("regYes"),type:"success"}),e.$router.push({path:"/user/center"})})).catch((function(t){console.log(t),0==e.is_email_verify&&e.init(),e.loading=!1})))}))},percentFormat:function(e){return e>=50?"OK":e>=25?"不安全":"不符"},getCode:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.suffix?"".concat(e.myForm.email,"@").concat(e.suffix):e.myForm.email,e.loadingEmailCode=!0,t.next=4,Object(a["A"])({email:i,type:"reg",cftoken:e.cftoken}).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.tackBtn(),!i.status||"success"!=i.status){t.next=4;break}return e.loadingEmailCode=!1,t.abrupt("return",e.$notify({title:e.$t("sysNotice"),message:e.$t("sendOk"),type:"success"}));case 4:return t.abrupt("return",e.$notify({title:e.$t("sysNotice"),message:i.message,type:"error"}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),e.loadingEmailCode=!1}));case 4:case"end":return t.stop()}}),t)})))()},tackBtn:function(){var e=this,t=60;this.loadingEmailCode=!1,this.disabled=!0,this.timer=setInterval((function(){0==t?(e.btn_code=e.$t("getCode"),e.disabled=!1,e.timer&&clearInterval(e.timer)):(e.disabled=!0,e.btn_code=t+e.$t("S"),t--)}),1e3)}}},l=r,c=(i("0045"),i("a102"),i("0a9c"),i("2877")),d=Object(c["a"])(l,n,s,!1,null,"02ae2d01",null);t["default"]=d.exports},7279:function(e,t,i){},"8d49":function(e,t,i){},"9efb":function(e,t,i){e.exports=i.p+"static/img/login1.567fa83f.png"},a102:function(e,t,i){"use strict";i("02d9")}}]);