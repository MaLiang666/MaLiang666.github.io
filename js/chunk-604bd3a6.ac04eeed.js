(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-604bd3a6"],{"9f3a":function(t,a,s){"use strict";s.r(a);s("7f7f");var e=function(){var t=this,a=t._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-avator",attrs:{src:s("7159"),alt:""}}),a("div",{staticClass:"user-info-cont"},[a("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),a("div",[t._v(t._s(t.role))])])]),a("div",{staticClass:"user-info-list"},[t._v("\n          上次登录时间：\n          "),a("span",[t._v("2019-11-01")])]),a("div",{staticClass:"user-info-list"},[t._v("\n          上次登录地点：\n          "),a("span",[t._v("东莞")])])]),a("el-card",{staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("语言详情")])]),t._v("Vue\n        "),a("el-progress",{attrs:{percentage:71.3,color:"#42b983"}}),t._v("JavaScript\n        "),a("el-progress",{attrs:{percentage:24.1,color:"#f1e05a"}}),t._v("CSS\n        "),a("el-progress",{attrs:{percentage:13.7}}),t._v("HTML\n        "),a("el-progress",{attrs:{percentage:5.9,color:"#f56c6c"}})],1)],1),a("el-col",{attrs:{span:16}},[a("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-1"},[a("i",{staticClass:"el-icon-lx-people grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("1234")]),a("div",[t._v("用户访问量")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-2"},[a("i",{staticClass:"el-icon-lx-notice grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("321")]),a("div",[t._v("系统消息")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-3"},[a("i",{staticClass:"el-icon-lx-goods grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("5000")]),a("div",[t._v("数量")])])])])],1)],1),a("el-card",{staticStyle:{height:"403px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("待办事项")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("添加")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:t.todoList}},[a("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("el-checkbox",{model:{value:s.row.status,callback:function(a){t.$set(s.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"todo-item",class:{"todo-item-del":s.row.status}},[t._v(t._s(s.row.title))])]}}])}),a("el-table-column",{attrs:{width:"60"}},[[a("i",{staticClass:"el-icon-edit"}),a("i",{staticClass:"el-icon-delete"})]],2)],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"hover"}},[a("schart",{ref:"bar",staticClass:"schart",attrs:{canvasId:"bar",options:t.options}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"hover"}},[a("schart",{ref:"line",staticClass:"schart",attrs:{canvasId:"line",options:t.options2}})],1)],1)],1)],1)},l=[],i=(s("ac6a"),{name:"dashboard",data:function(){return{name:localStorage.getItem("ms_username"),todoList:[{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}],data:[{name:"2018/09/04",value:1083},{name:"2018/09/05",value:941},{name:"2018/09/06",value:1139},{name:"2018/09/07",value:816},{name:"2018/09/08",value:327},{name:"2018/09/09",value:228},{name:"2018/09/10",value:1065}],options:{type:"bar",title:{text:"最近一周各品类销售图"},xRorate:25,labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},options2:{type:"line",title:{text:"最近几个月各品类销售趋势图"},labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[74,118,200,235,90]}]}}},computed:{role:function(){return"admin"===this.name?"超级管理员":"普通用户"}},methods:{changeDate:function(){var t=(new Date).getTime();this.data.forEach((function(a,s){var e=new Date(t-864e5*(6-s));a.name="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate())}))}}}),r=i,o=(s("f4d6"),s("2877")),n=Object(o["a"])(r,e,l,!1,null,"a57021ca",null);a["default"]=n.exports},b66a:function(t,a,s){},f4d6:function(t,a,s){"use strict";s("b66a")}}]);