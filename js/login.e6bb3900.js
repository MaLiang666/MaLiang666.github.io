(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"4ffd":function(e,t,s){e.exports=s.p+"img/logo.3f28d335.png"},"8d4a":function(e,t,s){"use strict";s("c17f")},c17f:function(e,t,s){},d5d1:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-wrap"},[t("div",{staticClass:"login-box"},[e._m(0),t("div",{staticClass:"box-right"},[t("img",{attrs:{src:s("4ffd"),alt:""}}),t("el-form",{ref:"login",staticClass:"login-form",attrs:{model:e.param,rules:e.rules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lx-people",placeholder:"请输入工号"},model:{value:e.param.username,callback:function(t){e.$set(e.param,"username",t)},expression:"param.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lx-lock","show-password":"",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()}},model:{value:e.param.password,callback:function(t){e.$set(e.param,"password",t)},expression:"param.password"}})],1),t("div",{staticClass:"login-btn"},[t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.submitForm()}}},[e._v("登 录")])],1)],1)],1)])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"box-left"},[t("div",{staticClass:"title"},[e._v("预先设想 · 洞烛未来666hash")])])}],o=(s("c24f"),{data:function(){return{loading:!1,param:{username:"",password:""},rules:{username:[{required:!0,message:"请输入工号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.$refs.login.validate((function(t){if(!t)return e.$message.error("请输入账号和密码"),!1;e.loading=!0;e.param.username,e.param.password;e.$message.success("登录成功"),localStorage.setItem("aihuaUserInfo",JSON.stringify({})),localStorage.setItem("aihuaToken","token"),e.$store.commit("setToken","token"),e.$store.commit("setUserId",1),e.$store.commit("setUserRole",1),e.$store.commit("setUserSite",1),e.$store.commit("setUserName","马梁");var s=[{icon:"el-icon-s-cooperation",index:1,title:"一级菜单",children:[{index:"customtags",title:"自定义标签"},{index:"schedule",title:"拖拽日程"}]}],r=["customtags","schedule"],a=[].concat(r,["403","404"]);localStorage.setItem("aihuaMenu",JSON.stringify(s)),e.$store.commit("setMenuList",s),localStorage.setItem("aihuaAuth",JSON.stringify(a)),e.$store.commit("setAuthList",a),e.$router.push({name:s[0].children[0].index})}))}}}),i=o,n=(s("8d4a"),s("2877")),l=Object(n["a"])(i,r,a,!1,null,"8c7d7536",null);t["default"]=l.exports}}]);