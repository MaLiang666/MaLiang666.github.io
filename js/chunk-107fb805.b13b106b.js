(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-107fb805"],{2934:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"e",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return o}));var s=r("b775"),n=function(){return s["a"].request({url:"productProcessManagement/queryAll",method:"get"})},a=function(){return s["a"].request({url:"siteManagement/queryAll",method:"get"})},i=function(){return s["a"].request({url:"sysRole/queryAllRoles",method:"get"})},u=function(){return s["a"].request({url:"template/queryAllTemplates",method:"get"})},l=function(){return s["a"].request({url:"workOrder/printerList",method:"get"})},o=function(e){return s["a"].request({url:"upload",method:"post",data:e})}},"78f1":function(e,t,r){},b6a2:function(e,t,r){"use strict";r("78f1")},f9eb:function(e,t,r){"use strict";r.r(t);r("7f7f"),r("7514"),r("386d");var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box"},[t("page-title"),t("div",{staticClass:"search-form"},[t("div",{staticClass:"search-item"},[t("div",{staticClass:"search-title"},[e._v("工号：")]),t("el-input",{attrs:{size:"small",placeholder:"请输入工号"},model:{value:e.queryInfo.workNumber,callback:function(t){e.$set(e.queryInfo,"workNumber",t)},expression:"queryInfo.workNumber"}})],1),t("div",{staticClass:"search-item"},[t("div",{staticClass:"search-title"},[e._v("部门：")]),t("el-input",{attrs:{size:"small",placeholder:"请输入部门"},model:{value:e.queryInfo.department,callback:function(t){e.$set(e.queryInfo,"department",t)},expression:"queryInfo.department"}})],1),t("div",{staticClass:"search-item"},[t("div",{staticClass:"search-title"},[e._v("站点：")]),t("el-select",{attrs:{size:"small",placeholder:"请选择站点"},model:{value:e.queryInfo.userSite,callback:function(t){e.$set(e.queryInfo,"userSite",t)},expression:"queryInfo.userSite"}},e._l(e.siteList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.site,value:e.id}})})),1)],1),t("div",{staticClass:"search-item"},[t("div",{staticClass:"search-title"},[e._v("姓名：")]),t("el-input",{attrs:{size:"small",placeholder:"请输入姓名"},model:{value:e.queryInfo.userName,callback:function(t){e.$set(e.queryInfo,"userName",t)},expression:"queryInfo.userName"}})],1),t("div",{staticClass:"search-item"},[t("div",{staticClass:"search-title"}),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.search}},[e._v("查 询")]),t("el-button",{attrs:{size:"small"},on:{click:e.reset}},[e._v("重 置")])],1)]),t("div",{staticClass:"btn-box"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addItem}},[e._v("新 建")])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",attrs:{border:"",data:e.tableData,"tooltip-effect":"dark","element-loading-text":"拼命加载中..."}},[t("el-table-column",{attrs:{align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.editItem(r.row)}}},[e._v("编 辑")]),t("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:function(t){return e.deletItem(r.row.id)}}},[e._v("删 除")]),t("el-button",{attrs:{type:"info",plain:"",size:"small"},on:{click:function(t){return e.resetItem(r.row)}}},[e._v("重 置")])]}}])}),t("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),t("el-table-column",{attrs:{align:"center",prop:"workNumber",label:"工号"}}),t("el-table-column",{attrs:{align:"center",prop:"userName",label:"姓名"}}),t("el-table-column",{attrs:{align:"center",prop:"department",label:"部门 "}}),t("el-table-column",{attrs:{align:"center",prop:"userRole",label:"角色类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.rolesList.find((function(e){return e.id==t.row.userRole}))?e.rolesList.find((function(e){return e.id==t.row.userRole})).name:"")+"\n      ")]}}])}),t("el-table-column",{attrs:{align:"center",prop:"userType",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0===t.row.userType?"启用":"禁用"))]}}])}),t("el-table-column",{attrs:{align:"center",prop:"userSite",label:"站点"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.siteList.find((function(e){return e.id==t.row.userSite}))?e.siteList.find((function(e){return e.id==t.row.userSite})).site:"")+"\n      ")]}}])})],1),t("el-pagination",{attrs:{background:"","page-sizes":[10,20,30,50],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),t("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.editType,visible:e.dialogVisible,width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("span",[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"工号",prop:"workNumber"}},[t("el-input",{attrs:{placeholder:"请输入工号"},model:{value:e.form.workNumber,callback:function(t){e.$set(e.form,"workNumber",t)},expression:"form.workNumber"}})],1),t("el-form-item",{attrs:{label:"姓名",prop:"userName"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),t("el-form-item",{attrs:{label:"部门",prop:"department"}},[t("el-input",{attrs:{placeholder:"请输入部门"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),t("el-form-item",{attrs:{label:"角色类型",prop:"userRole"}},[t("el-select",{attrs:{placeholder:"请选择角色类型"},model:{value:e.form.userRole,callback:function(t){e.$set(e.form,"userRole",t)},expression:"form.userRole"}},e._l(e.rolesList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"状态",prop:"userType"}},[t("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}},[t("el-option",{attrs:{label:"启用",value:0}}),t("el-option",{attrs:{label:"禁用",value:1}})],1)],1),t("el-form-item",{attrs:{label:"站点",prop:"userSite"}},[t("el-select",{attrs:{placeholder:"请选择站点"},model:{value:e.form.userSite,callback:function(t){e.$set(e.form,"userSite",t)},expression:"form.userSite"}},e._l(e.siteList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.site,value:e.id}})})),1)],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)])],1)},n=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("1da1")),i=r("ade3"),u=r("2f62"),l=r("c24f"),o=r("2934");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={data:function(){return{loading:!0,queryInfo:{pageNum:1,pageSize:10},total:0,tableData:[],siteList:[],rolesList:[],dialogVisible:!1,editType:"新建",form:{workNumber:"",userName:"",department:"",userRole:"",userType:"",userSite:""},rules:{workNumber:[{required:!0,message:"请输入工号",trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],department:[{required:!0,message:"请输入部门",trigger:"blur"}],userRole:[{required:!0,message:"请选择角色类型",trigger:"change"}],userType:[{required:!0,message:"请选择状态",trigger:"blur"}],userSite:[{required:!0,message:"请输入站点",trigger:"blur"}]}}},computed:f({},Object(u["b"])(["nameInfo"])),created:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getSelectList();case 2:return e.next=4,this.queryAllRoles();case 4:return e.next=6,this.getList();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getSelectList:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["e"])();case 2:if(t=e.sent,200==t.status){e.next=5;break}return e.abrupt("return",this.$message.error(t.message));case 5:this.siteList=t.result;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),queryAllRoles:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["c"])();case 2:if(t=e.sent,200==t.status){e.next=5;break}return e.abrupt("return",this.$message.error(t.message));case 5:this.rolesList=t.result;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,Object(l["s"])(this.queryInfo);case 3:if(t=e.sent,this.loading=!1,200==t.status){e.next=7;break}return e.abrupt("return",this.$message.error(t.message));case 7:this.tableData=t.result.list,this.total=t.result.total;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSizeChange:function(e){this.queryInfo.pageSize=e,this.getList()},handleCurrentChange:function(e){this.queryInfo.pageNum=e,this.getList()},search:function(){this.queryInfo.pageNum=1,this.getList()},reset:function(){this.queryInfo={pageNum:1,pageSize:10},this.getList()},addItem:function(){var e=this;this.editType="新建",this.dialogVisible=!0,this.form={workNumber:"",userName:"",department:"",userRole:"",userType:"",userSite:""},this.$nextTick((function(){e.$refs["form"].clearValidate()}))},editItem:function(e){var t=this;this.editType="编辑",this.dialogVisible=!0,this.form=JSON.parse(JSON.stringify(e)),this.$nextTick((function(){t.$refs["form"].clearValidate()}))},confirm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate().catch((function(e){return e}));case 2:if(t=e.sent,!0===t){e.next=5;break}return e.abrupt("return");case 5:if("新建"!==this.editType){e.next=15;break}return e.next=8,Object(l["c"])(this.form);case 8:if(r=e.sent,200==r.status){e.next=11;break}return e.abrupt("return",this.$message.error(r.message));case 11:this.dialogVisible=!1,this.$message.success("新建成功"),e.next=22;break;case 15:return e.next=17,Object(l["r"])(this.form);case 17:if(s=e.sent,200==s.status){e.next=20;break}return e.abrupt("return",this.$message.error(s.message));case 20:this.dialogVisible=!1,this.$message.success("修改成功");case 22:this.getList();case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deletItem:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("是否删除?","提示",{type:"warning"});case 2:return e.next=4,Object(l["g"])(t);case 4:if(r=e.sent,200==r.status){e.next=7;break}return e.abrupt("return",this.$message.error(r.message));case 7:this.$message.success("删除成功"),this.getList();case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),resetItem:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("是否重置密码?","提示",{type:"warning"});case 2:return e.next=4,Object(l["n"])(id);case 4:if(t=e.sent,200==t.status){e.next=7;break}return e.abrupt("return",this.$message.error(t.message));case 7:this.$message.success("重置成功");case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},p=m,d=(r("b6a2"),r("2877")),b=Object(d["a"])(p,s,n,!1,null,"6f152a47",null);t["default"]=b.exports}}]);