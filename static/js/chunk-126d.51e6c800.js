(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-126d"],{"+8WO":function(t,e,a){"use strict";a.r(e);var i=a("P2sY"),n=a.n(i),s=a("qgcl"),l={name:"InlineEditTable",filters:{statusFilter:function(t){return{0:"无效",1:"有效"}[t]}},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20},textMap:{update:"Edit",create:"Create"},temp:{},uptemp:{},dialogFormVisible:!1,dialogStatus:""}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(s.c)(this.listQuery).then(function(e){console.log(e.data),t.list=e.data.result,t.total=e.data.result.length,t.listLoading=!1})},cancelEdit:function(t){t.title=t.originalTitle,t.edit=!1,this.$message({message:"The title has been restored to the original value",type:"warning"})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleCreate:function(){this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){this.temp=n()({},t),console.log(this.temp),this.dialogStatus="update",this.dialogFormVisible=!0},handleDelete:function(t){var e=this;this.$confirm("此操作将删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={id:t};Object(s.b)(a).then(function(t){"0000"===t.data.status?(e.getList(),e.$message({type:"success",message:"删除成功"})):e.$message({type:"error",message:t.data.message})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},createData:function(){var t=this;Object(s.a)(this.temp).then(function(e){console.log(e.data),t.getList(),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"分类添加成功",type:"success",duration:2e3})})},updateData:function(){var t=this;this.uptemp.id=this.temp.id,this.uptemp.name=this.temp.name,this.uptemp.voided=this.temp.voided,this.uptemp.xh=this.temp.xh,Object(s.d)(this.uptemp).then(function(e){console.log(e.data),t.getList(),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})},confirmEdit:function(t){t.edit=!1,t.originalTitle=t.title,this.$message({message:"The title has been edited",type:"success"})}}},o=(a("KTNV"),a("KHd+")),r=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("增加分类")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"编号",width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分类名称",width:"220px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分类等级",width:"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.level))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"排序",width:"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.xh))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"最后修改时间",width:"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.updtime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("statusFilter")(e.row.voided)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center",width:"220","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v(t._s(t.$t("table.edit")))]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[a("el-input",{model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排列序号",prop:"name"}},[a("el-input",{model:{value:t.temp.xh,callback:function(e){t.$set(t.temp,"xh",e)},expression:"temp.xh"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},[],!1,null,"537cdc9a",null);r.options.__file="fenlei.vue";e.default=r.exports},KTNV:function(t,e,a){"use strict";var i=a("dwwk");a.n(i).a},dwwk:function(t,e,a){},qgcl:function(t,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"d",function(){return s}),a.d(e,"b",function(){return l}),a.d(e,"a",function(){return o});var i=a("t3Un");function n(t){return Object(i.a)({url:"/bGoodsType/getAllGoodsType",method:"post",params:t})}function s(t){return Object(i.a)({url:"/bGoodsType/updGoodsType",method:"post",params:t})}function l(t){return Object(i.a)({url:"/bGoodsType/deleteGoodsType",method:"post",params:t})}function o(t){return Object(i.a)({url:"/bGoodsType/addGoodsType",method:"post",params:t})}}}]);