(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7bd4996"],{"307d":function(e,t,r){"use strict";(function(t){function r(e){return(e+"===".slice((e.length+3)%4)).replace(/-/g,"+").replace(/_/g,"/")}function a(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function n(e,r){return a(t.from(e,r||"utf8").toString("base64"))}function s(e,a){return t.from(r(e),"base64").toString(a||"utf8")}e.exports={unescape:r,escape:a,encode:n,decode:s}}).call(this,r("b639").Buffer)},5211:function(e,t,r){},"56b6":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box"},[t("page-title"),t("div",{staticClass:"search-form"},[t("div",{staticClass:"search-item"},[t("div",{staticClass:"search-title"},[e._v("工艺路线：")]),t("el-input",{attrs:{size:"small",placeholder:"请输入工艺路线"},model:{value:e.queryData.processNumber,callback:function(t){e.$set(e.queryData,"processNumber",t)},expression:"queryData.processNumber"}})],1),t("div",{staticClass:"search-item"},[t("div",{staticClass:"search-title"},[e._v("工艺路线名称：")]),t("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"请输入工艺路线名称"},model:{value:e.queryData.processName,callback:function(t){e.$set(e.queryData,"processName",t)},expression:"queryData.processName"}})],1),t("div",{staticClass:"search-item"},[t("div",{staticClass:"search-title"}),t("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.save}},[e._v("保 存")])],1)]),t("div",{staticClass:"btn-box"},[t("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.addItem}},[e._v("添 加")]),t("el-upload",{staticClass:"upload-demo",attrs:{"http-request":e.importExcel,"show-file-list":!1,action:"#",accept:".xls, .xlsx",multiple:!1}},[t("el-button",{attrs:{type:"primary",size:"small"}},[e._v("导 入")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.queryData.associationCraftProducts,"tooltip-effect":"dark","element-loading-text":"拼命加载中..."}},[t("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),t("el-table-column",{attrs:{align:"center",prop:"product",label:"制程"}}),t("el-table-column",{attrs:{align:"center",prop:"whetherMachineNumber",label:"机号"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-checkbox",{model:{value:r.row.whetherMachineNumber,callback:function(t){e.$set(r.row,"whetherMachineNumber",t)},expression:"scope.row.whetherMachineNumber"}},[e._v("必填")])]}}])}),t("el-table-column",{attrs:{align:"center",prop:"whetherGoodNumber",label:"良品/不良品"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-checkbox",{model:{value:r.row.whetherGoodNumber,callback:function(t){e.$set(r.row,"whetherGoodNumber",t)},expression:"scope.row.whetherGoodNumber"}},[e._v("必填")])]}}])}),t("el-table-column",{attrs:{align:"center",prop:"whetherSupplierBatch",label:"供应商/产品批号"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-checkbox",{model:{value:r.row.whetherSupplierBatch,callback:function(t){e.$set(r.row,"whetherSupplierBatch",t)},expression:"scope.row.whetherSupplierBatch"}},[e._v("必填")])]}}])}),t("el-table-column",{attrs:{align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:function(t){return e.deletItem(r.$index)}}},[e._v("删 除")])]}}])})],1),t("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加",visible:e.dialogVisible,width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("span",[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"制程",prop:"product"}},[t("el-input",{attrs:{placeholder:"请输入制程"},model:{value:e.form.product,callback:function(t){e.$set(e.form,"product",t)},expression:"form.product"}})],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)])],1)},n=[],s=(r("96cf"),r("1da1")),o=r("307d"),u=r.n(o),i=r("e60d"),c={data:function(){return{loading:!1,queryData:null,dialogVisible:!1,form:{process:""},rules:{product:[{required:!0,message:"请输入制程",trigger:"blur"}]}}},created:function(){try{this.queryData=JSON.parse(u.a.decode(this.$route.query.data)),this.getDetail()}catch(e){console.log(e),this.$router.push({name:"process"})}},methods:{getDetail:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["j"])({id:this.queryData.id});case 2:if(t=e.sent,200==t.status){e.next=5;break}return e.abrupt("return",this.$message.error(t.message));case 5:this.queryData.associationCraftProducts=t.result,this.$forceUpdate();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.$router.go(-1)},save:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["l"])(this.queryData);case 2:if(t=e.sent,200==t.status){e.next=5;break}return e.abrupt("return",this.$message.error(t.message));case 5:this.$message.success("保存成功"),this.getDetail();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),addItem:function(){var e=this;this.dialogVisible=!0,this.form={process:""},this.$nextTick((function(){e.$refs["form"].clearValidate()}))},confirm:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate().catch((function(e){return e}));case 2:if(t=e.sent,!0===t){e.next=5;break}return e.abrupt("return");case 5:this.dialogVisible=!1,this.queryData.associationCraftProducts.push({craftId:this.queryData.id,product:this.form.product,whetherMachineNumber:!1,whetherGoodNumber:!1,whetherSupplierBatch:!1});case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),importExcel:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,r=new FormData,r.append("multipartFile",t.file),r.append("craftId",this.queryData.id),e.next=6,Object(i["a"])(r);case 6:a=e.sent,this.loading=!1,200==a.status?(this.$message.success("上传成功"),t.onSuccess(),this.queryData.associationCraftProducts=a.result):this.$message.error(a.message);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deletItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("是否删除?","提示",{type:"warning"});case 2:this.queryData.associationCraftProducts.splice(t,1);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},l=c,d=(r("7e9b"),r("2877")),p=Object(d["a"])(l,a,n,!1,null,"0fde5ad6",null);t["default"]=p.exports},"7e9b":function(e,t,r){"use strict";r("5211")},e60d:function(e,t,r){"use strict";r.d(t,"i",(function(){return n})),r.d(t,"h",(function(){return s})),r.d(t,"k",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"f",(function(){return i})),r.d(t,"j",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"l",(function(){return d})),r.d(t,"d",(function(){return p})),r.d(t,"c",(function(){return h})),r.d(t,"g",(function(){return f})),r.d(t,"e",(function(){return m}));var a=r("b775"),n=function(e){return a["a"].request({url:"processManagement/query",method:"post",data:e})},s=function(e){return a["a"].request({url:"processManagement/".concat(e),method:"get"})},o=function(e){return a["a"].request({url:"productProcessManagement/query",method:"post",data:e})},u=function(e){return a["a"].request({url:"productProcessManagement",method:"post",data:e})},i=function(e){return a["a"].request({url:"productProcessManagement",method:"put",data:e})},c=function(e){return a["a"].request({url:"productProcessManagement/".concat(e),method:"get",data:data})},l=function(e){return a["a"].request({url:"routingAndProduct/addAssociationCraftProductByExcel",method:"post",data:e})},d=function(e){return a["a"].request({url:"routingAndProduct/updateAssociationCraftProduct",method:"put",data:e})},p=function(e){return a["a"].request({url:"cmsenPn/query",method:"post",data:e})},h=function(e){return a["a"].request({url:"cmsenPn",method:"post",data:e})},f=function(e){return a["a"].request({url:"cmsenPn",method:"put",data:e})},m=function(e){return a["a"].request({url:"cmsenPn/".concat(e),method:"delete"})}}}]);