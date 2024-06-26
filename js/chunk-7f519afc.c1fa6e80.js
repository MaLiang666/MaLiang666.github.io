(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f519afc"],{"027f":function(t,e,a){"use strict";a.r(e);a("386d");var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("page-title"),e("div",{staticClass:"btn-box"},[e("div",{staticClass:"left"},[e("el-input",{attrs:{size:"small",placeholder:"请输入料号查询"},model:{value:t.queryInfo.partNo,callback:function(e){t.$set(t.queryInfo,"partNo",e)},expression:"queryInfo.partNo"}}),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("查 询")]),e("el-button",{attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")])],1)]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"auto"},attrs:{border:"",data:t.tableData,"tooltip-effect":"dark","element-loading-text":"拼命加载中..."}},[e("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),e("el-table-column",{attrs:{align:"center",prop:"partNo",label:"料号"}}),e("el-table-column",{attrs:{align:"center",prop:"productName",label:"品名"}}),e("el-table-column",{attrs:{align:"center",prop:"specification",label:"规格"}}),e("el-table-column",{attrs:{align:"center",prop:"routingNumber",label:"工艺路线编号"}}),e("el-table-column",{attrs:{align:"center",prop:"packSpecifications",label:"包装规格（PSC/盒）"}}),e("el-table-column",{attrs:{align:"center",prop:"packingSpecifications",label:"装箱规格（盒/箱）"}}),e("el-table-column",{attrs:{align:"center",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.getDetail(a.row.id)}}},[t._v("详 情")])]}}])})],1),e("el-pagination",{attrs:{background:"","page-sizes":[10,20,30,50],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),e("el-dialog",{attrs:{"close-on-click-modal":!1,title:"流程详情",visible:t.dialogVisible,width:"800px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("span",{staticClass:"dialog-form"},[e("div",[e("span",{staticClass:"dialog-title"},[t._v("基本信息")]),e("el-form",{ref:"form",attrs:{model:t.baseForm,"label-width":"160px"}},[e("el-form-item",{attrs:{label:"料号："}},[t._v(t._s(t.baseForm.partNo))]),e("el-form-item",{attrs:{label:"规格："}},[t._v(t._s(t.baseForm.specification))]),e("el-form-item",{attrs:{label:"品名："}},[t._v(t._s(t.baseForm.productName))]),e("el-form-item",{attrs:{label:"工艺路线编号："}},[t._v(t._s(t.baseForm.routingNumber))]),e("el-form-item",{attrs:{label:"包装规格(PSC/盒)："}},[t._v(t._s(t.baseForm.packSpecifications))]),e("el-form-item",{attrs:{label:"装箱规格(盒/箱)："}},[t._v(t._s(t.baseForm.packingSpecifications))])],1),e("el-divider"),e("span",{staticClass:"dialog-title",staticStyle:{display:"inline-block","margin-bottom":"15px"}},[t._v("制程清单")]),e("el-table",{attrs:{border:"",data:t.baseForm.productProcessManagementList,"tooltip-effect":"dark"}},[e("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),e("el-table-column",{attrs:{align:"center",prop:"process",label:"制程"}}),e("el-table-column",{attrs:{align:"center",prop:"processParameters",label:"制程参数"}})],1)],1)])])],1)},n=[],i=(a("96cf"),a("1da1")),o=a("e60d"),s={data:function(){return{loading:!1,queryInfo:{pageNum:1,pageSize:10},total:0,tableData:[],dialogVisible:!1,baseForm:{}}},created:function(){this.getList()},methods:{getList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Object(o["i"])(this.queryInfo);case 3:if(e=t.sent,this.loading=!1,200==e.status){t.next=7;break}return t.abrupt("return",this.$message.error(e.message));case 7:this.tableData=e.result.list,this.total=e.result.total;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(t){this.queryInfo.pageSize=t,this.getList()},handleCurrentChange:function(t){this.queryInfo.pageNum=t,this.getList()},search:function(){this.queryInfo.pageNum=1,this.getList()},reset:function(){this.queryInfo={pageNum:1,pageSize:10},this.getList()},getDetail:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["h"])(e);case 2:if(a=t.sent,200==a.status){t.next=5;break}return t.abrupt("return",this.$message.error(a.message));case 5:this.baseForm=a.result,this.dialogVisible=!0;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addTemplate:function(){this.$router.push({name:"flowDetail"})}}},l=s,u=(a("b1f1"),a("2877")),c=Object(u["a"])(l,r,n,!1,null,"cb578844",null);e["default"]=c.exports},"18e2":function(t,e,a){},b1f1:function(t,e,a){"use strict";a("18e2")},e60d:function(t,e,a){"use strict";a.d(e,"i",(function(){return n})),a.d(e,"h",(function(){return i})),a.d(e,"k",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"j",(function(){return u})),a.d(e,"a",(function(){return c})),a.d(e,"l",(function(){return d})),a.d(e,"d",(function(){return p})),a.d(e,"c",(function(){return m})),a.d(e,"g",(function(){return f})),a.d(e,"e",(function(){return b}));var r=a("b775"),n=function(t){return r["a"].request({url:"processManagement/query",method:"post",data:t})},i=function(t){return r["a"].request({url:"processManagement/".concat(t),method:"get"})},o=function(t){return r["a"].request({url:"productProcessManagement/query",method:"post",data:t})},s=function(t){return r["a"].request({url:"productProcessManagement",method:"post",data:t})},l=function(t){return r["a"].request({url:"productProcessManagement",method:"put",data:t})},u=function(t){return r["a"].request({url:"productProcessManagement/".concat(t),method:"get",data:data})},c=function(t){return r["a"].request({url:"routingAndProduct/addAssociationCraftProductByExcel",method:"post",data:t})},d=function(t){return r["a"].request({url:"routingAndProduct/updateAssociationCraftProduct",method:"put",data:t})},p=function(t){return r["a"].request({url:"cmsenPn/query",method:"post",data:t})},m=function(t){return r["a"].request({url:"cmsenPn",method:"post",data:t})},f=function(t){return r["a"].request({url:"cmsenPn",method:"put",data:t})},b=function(t){return r["a"].request({url:"cmsenPn/".concat(t),method:"delete"})}}}]);