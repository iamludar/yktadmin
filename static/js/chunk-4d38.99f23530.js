(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4d38"],{"+QXS":function(e,t,a){"use strict";a.r(t);var l=a("t3Un");function i(e){return Object(l.a)({url:"/bOrder/orderDetail",method:"post",params:e})}var s=a("ZySA"),r=a("7Qib"),n=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}].reduce(function(e,t){return e[t.key]=t.display_name,e},{}),o={name:"ComplexTable",directives:{waves:s.a},filters:{statusFilter:function(e){return{"00":"未支付","01":"待审核","02":"已发货",90:"关闭",99:"拒绝"}[e]},typeFilter:function(e){return n[e]}},data:function(){return{pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},updOrderTemp:{id:"",type:"01",expressNo:"",expressCo:""},status:[{value:"00",label:"未付款"},{value:"01",label:"已付款"},{value:"02",label:"已发货"},{value:"90",label:"关闭"},{value:"99",label:"拒绝"}],kuaidiList:["顺丰快递","圆通快递","中通快递"],sheheStatus:[{value:"01",label:"发货"},{value:"02",label:"拒绝"}],detail:[],fapPar:{invoiceId:""},fapiaoData:[],xdDate:[],tableKey:0,list:null,total:null,listLoading:!0,listQuery:{pageStart:1,pageSize:20,title:void 0},temp:{},type:"01",dialogFormVisible:!1,dialogOrderDetail:!1,fapiaoDetail:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],name:[{required:!0,message:"title is required",trigger:"blur"}],expressNo:[{required:!0,message:"发货快递单必须填写",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{kanFapiao:function(e){var t=this;this.fapPar.invoiceId=e,function(e){return Object(l.a)({url:"/bOrder/invoice/detail",method:"post",params:e})}(this.fapPar).then(function(e){console.log(e.data.result),t.fapiaoDetail=!0,t.fapiaoData=e.data.result})},toArray:function(e){var t=[];for(var a in e)t.push(a);return t},tableRowClassName:function(e){var t=e.row;return"00"===t.status?"warning-row":"01"===t.status?"info-row":"02"===t.status?"success-row":"90"===t.status?"guanbi-row":"99"===t.status?"jujue-row":void 0},getList:function(){var e=this;this.listLoading=!0,function(e){return Object(l.a)({url:"/bOrder/getOrderList",method:"post",params:e})}(this.listQuery).then(function(t){console.log(t.data),e.list=t.data.result,e.total=t.data.count,setTimeout(function(){e.listLoading=!1},1500)})},handleFilter:function(){this.xdDate.length>0&&(this.listQuery.addtimeBetweenS=this.xdDate[0],this.listQuery.addtimeBetweenE=this.xdDate[1]),this.listQuery.pageStart=1,this.getList()},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageStart=e,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){console.log(this.temp)},getDetail:function(e){return e.id},chaKan:function(e){var t=this;i(e).then(function(e){t.temp=e.data.result,t.updOrderTemp.customerId=e.data.result.userId}),this.dialogOrderDetail=!0},faHuo:function(e){var t=this;this.updOrderTemp.id=e.id,i(e).then(function(e){t.temp=e.data.result,t.updOrderTemp.customerId=e.data.result.userId}),this.dialogStatus="update",this.dialogFormVisible=!0},updateData:function(){var e=this;"01"===this.updOrderTemp.type?this.updOrderTemp.auditRemark="":(this.updOrderTemp.expressCo="",this.updOrderTemp.expressNo=""),function(e){return Object(l.a)({url:"/bOrder/updOrderStatus",method:"post",params:e})}(this.updOrderTemp).then(function(t){"0000"===t.data.status?e.$message({message:"操作成功",type:"success"}):e.$message({message:t.data.message,type:"warning"}),console.log(t.data),e.getList(),e.dialogFormVisible=!1})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleFetchPv:function(e){},handleDownload:function(){},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(r.d)(t[e]):t[e]})})}}},u=(a("ZgIH"),a("KHd+")),p=Object(u.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"订单编号"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.expendNoLike,callback:function(t){e.$set(e.listQuery,"expendNoLike",t)},expression:"listQuery.expendNoLike"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"手机号"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.mobileLike,callback:function(t){e.$set(e.listQuery,"mobileLike",t)},expression:"listQuery.mobileLike"}}),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请选择"},model:{value:e.listQuery.statusIn,callback:function(t){e.$set(e.listQuery,"statusIn",t)},expression:"listQuery.statusIn"}},e._l(e.status,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-date-picker",{staticClass:"filter-item",attrs:{"picker-options":e.pickerOptions2,"value-format":"yyyyMMddHHmmss",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.xdDate,callback:function(t){e.xdDate=t},expression:"xdDate"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"refOrder",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"订单编号",width:"220px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.expendno))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("statusFilter")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收货人",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.contactname))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",width:"110px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.contactmobile))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"下单时间",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.addtime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单金额(积分)",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.amount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收货地址",align:"center","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.contactaddress))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"备注",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.remark))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"220","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return["01"===t.row.status?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.faHuo(t.row)}}},[e._v("发货")]):a("el-button",{attrs:{disabled:!0,type:"primary",size:"mini"},on:{click:function(a){e.faHuo(t.row)}}},[e._v("发货")]),e._v(" "),"1"===t.row.isNeedInvoice?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.kanFapiao(t.row.invoiceId)}}},[e._v("发票")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.chaKan(t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.pageStart,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{staticClass:"custom_dialog",attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"商品列表"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.temp.goods}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsno",label:"商品编号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"qty",label:"数量"}}),e._v("price\n          "),a("el-table-column",{attrs:{prop:"price",label:"单价"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"用户ID"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.temp.id,callback:function(t){e.$set(e.temp,"id",t)},expression:"temp.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货地址"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.temp.contactAddr,callback:function(t){e.$set(e.temp,"contactAddr",t)},expression:"temp.contactAddr"}})],1),e._v(" "),a("el-form-item",{attrs:{disabled:!0,label:"订单总价"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.temp.amount,callback:function(t){e.$set(e.temp,"amount",t)},expression:"temp.amount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.temp.contactName,callback:function(t){e.$set(e.temp,"contactName",t)},expression:"temp.contactName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.temp.contactMobile,callback:function(t){e.$set(e.temp,"contactMobile",t)},expression:"temp.contactMobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.temp.addTime,callback:function(t){e.$set(e.temp,"addTime",t)},expression:"temp.addTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单备注"}},[a("el-input",{attrs:{disabled:!0,type:"textarea"},model:{value:e.temp.updOrderTemp,callback:function(t){e.$set(e.temp,"updOrderTemp",t)},expression:"temp.updOrderTemp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"审核状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.updOrderTemp.type,callback:function(t){e.$set(e.updOrderTemp,"type",t)},expression:"updOrderTemp.type"}},e._l(e.sheheStatus,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"审核人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.updOrderTemp.remark,callback:function(t){e.$set(e.updOrderTemp,"remark",t)},expression:"updOrderTemp.remark"}})],1),e._v(" "),"01"===e.updOrderTemp.type?a("el-form-item",{attrs:{label:"快递公司"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.updOrderTemp.expressCo,callback:function(t){e.$set(e.updOrderTemp,"expressCo",t)},expression:"updOrderTemp.expressCo"}},e._l(e.kuaidiList,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1):e._e(),e._v(" "),"01"===e.updOrderTemp.type?a("el-form-item",{attrs:{label:"快递单号"}},[a("el-input",{model:{value:e.updOrderTemp.expressNo,callback:function(t){e.$set(e.updOrderTemp,"expressNo",t)},expression:"updOrderTemp.expressNo"}})],1):e._e(),e._v(" "),"02"===e.updOrderTemp.type?a("el-form-item",{attrs:{label:"拒绝理由"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.updOrderTemp.auditRemark,callback:function(t){e.$set(e.updOrderTemp,"auditRemark",t)},expression:"updOrderTemp.auditRemark"}})],1):e._e()],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("确认")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"custom_dialog",attrs:{visible:e.dialogOrderDetail,title:"订单详情"},on:{"update:visible":function(t){e.dialogOrderDetail=t}}},[a("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"商品列表"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.temp.goods}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsno",label:"商品编号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"qty",label:"数量"}}),e._v("price\n          "),a("el-table-column",{attrs:{prop:"price",label:"单价"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"订单编号"}},[a("span",[e._v(e._s(e.temp.id))])]),e._v(" "),a("el-form-item",{attrs:{label:"收货地址"}},[a("span",[e._v(e._s(e.temp.contactAddr))])]),e._v(" "),a("el-form-item",{attrs:{label:"订单总价"}},[a("span",[e._v(e._s(e.temp.amount))])]),e._v(" "),a("el-form-item",{attrs:{label:"联系人"}},[a("span",[e._v(e._s(e.temp.contactName))])]),e._v(" "),a("el-form-item",{attrs:{label:"联系电话"}},[a("span",[e._v(e._s(e.temp.contactMobile))])]),e._v(" "),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[e._v(e._s(e.temp.addTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"订单备注"}},[a("span",[e._v(e._s(e.temp.updOrderTemp))])]),e._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[a("span",[e._v(e._s(e._f("statusFilter")(e.temp.status)))])]),e._v(" "),"02"===e.temp.status?a("el-form-item",{attrs:{label:"快递公司"}},[a("span",[e._v(e._s(e.temp.expressCo))])]):e._e(),e._v(" "),"02"===e.temp.status?a("el-form-item",{attrs:{label:"快递单号"}},[a("span",[e._v(e._s(e.temp.expressNo))])]):e._e(),e._v(" "),"99"===e.temp.status?a("el-form-item",{attrs:{label:"拒绝理由"}},[a("span",[e._v(e._s(e.temp.auditRemark))])]):e._e()],1)],1),e._v(" "),a("el-dialog",{staticClass:"custom_dialog",attrs:{visible:e.fapiaoDetail,title:"发票信息"},on:{"update:visible":function(t){e.fapiaoDetail=t}}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"150px"}},[2==e.fapiaoData.titleType?a("el-form-item",{attrs:{label:"公司名称"}},[a("span",[e._v(e._s(e.fapiaoData.company))])]):e._e(),e._v(" "),2==e.fapiaoData.titleType?a("el-form-item",{attrs:{label:"税号"}},[a("span",[e._v(e._s(e.fapiaoData.taxNumber))])]):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("span",[e._v(e._s(e.fapiaoData.collector))])]),e._v(" "),a("el-form-item",{attrs:{label:"电话"}},[a("span",[e._v(e._s(e.fapiaoData.mobile))])]),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("span",[e._v(e._s(e.fapiaoData.address))])])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},[],!1,null,null,null);p.options.__file="orderList.vue";t.default=p.exports},IWGH:function(e,t,a){},ZgIH:function(e,t,a){"use strict";var l=a("IWGH");a.n(l).a},ZySA:function(e,t,a){"use strict";var l=a("P2sY"),i=a.n(l),s=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var l=i()({},t.value),s=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},l),r=s.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var n=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":((o=document.createElement("span")).className="waves-ripple",o.style.height=o.style.width=Math.max(n.width,n.height)+"px",r.appendChild(o)),s.type){case"center":o.style.top=n.height/2-o.offsetHeight/2+"px",o.style.left=n.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-n.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-n.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=s.color,o.className="waves-ripple z-active",!1}},!1)}}),r=function(e){e.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(r)),s.install=r;t.a=s},jUE0:function(e,t,a){}}]);