webpackJsonp([4],{"+EGC":function(e,t,r){"use strict";function a(e){r("QZfv")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("uWBr"),l=new o.a,d={data:function(){return{tableData:[],cur_page:1,select_word:"",listNum:null,newOrderSwitch:!1,editOrderSwitch:!1,formNewOrder:{name:"",phone:"",address:"",pname:"",gname:"",num:"",data:"",logistics:"",pricetotal:"",state:""},formEditOrder:{id:"",name:"",phone:"",address:"",pname:"",gname:"",num:"",data:"",pricetotal:"",logistics:"",state:"",goodsId:""},optionsp:[],optionss:[{value:"0",label:"未支付，未发货"},{value:"1",label:"已支付，未发货"},{value:"2",label:"未支付，已发货"},{value:"3",label:"已支付，已发货"}],optionsss:[{value:"0",label:"未支付，未发货"},{value:"1",label:"已支付，未发货"},{value:"2",label:"未支付，已发货"}],formLabelWidth:"120px",rules:{name:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:2,max:10,message:"长度在 2到 8 个字符",trigger:"blur"}],pname:[{type:"number",required:!0,message:"请选择产品",trigger:"change"}],num:[{required:!0,message:"请输入数量",trigger:"blur"},{min:2,max:10,message:"长度在 2到 8 个字符",trigger:"blur"}],data:[{message:"请选择日期",required:1},{pattern:null,type:"string",message:null}],pricetotal:[{required:!0,message:"请输入总价",trigger:"blur"},{min:2,max:10,message:"长度在 2到 8 个字符",trigger:"blur"}],state:[{required:!0,message:"请选择状态",trigger:"change"}]}}},beforeMount:function(){this.getList(),this.getListP()},methods:{handleCurrentChange:function(e){this.cur_page=e;var t=this,r={api:"/product/index/orderInfo",param:{type:"0",pagesNum:t.cur_page}};l.post(r).then(function(e){t.tableData=e.data.data.order,t.listNum=e.data.data.listNum,t.changeType(t.tableData)})},changeType:function(e){e.map(function(e,t,r){switch(e.type){case"0":r[t].typech="未支付，未发货";break;case"1":r[t].typech="已支付，未发货";break;case"2":r[t].typech="未支付，已发货";break;case"3":r[t].typech="已支付，已发货"}})},newOrder:function(){this.formNewOrder.name=this.formNewOrder.phone=this.formNewOrder.address=this.formNewOrder.pname=this.formNewOrder.gname=this.formNewOrder.num=this.formNewOrder.data=this.formNewOrder.pricetotal=this.formNewOrder.state="",this.newOrderSwitch=!0},submitnewOrder:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var r=t,a={api:"/product/order/save",param:{customer:r.formNewOrder.name,readydate:r.formNewOrder.data,goodsName:r.formNewOrder.gname,goodsQuantity:r.formNewOrder.num,goodsPrice:r.formNewOrder.pricetotal,type:r.formNewOrder.state,phone:r.formNewOrder.phone,address:r.formNewOrder.address,logistics:"",goodsId:r.formNewOrder.pname}};l.postJson(a).then(function(e){"1"!==e.data.code?r.$alert(e.data.message,"信息提示"):(r.$notify({title:"新增原料成功",message:e.data.message,type:"success"}),r.newOrderSwitch=!1,r.getList())})})},handleEdit:function(e,t,r,a,o,l,d,i,n,s,m){this.editOrderSwitch=!0,this.formEditOrder.id=e,this.formEditOrder.name=t,this.formEditOrder.phone=d,this.formEditOrder.address=i,this.formEditOrder.pname=r,this.formEditOrder.gname=m,this.formEditOrder.num=a,this.formEditOrder.data=l,this.formEditOrder.pricetotal=o,this.formEditOrder.state=s,this.formEditOrder.logistics=n},submitEditOrder:function(){var e=this,t={api:"/product/order/update",param:{id:e.formEditOrder.id,customer:e.formEditOrder.name,readydate:e.formEditOrder.data,goodsName:e.formEditOrder.pname,goodsQuantity:e.formEditOrder.num,goodsPrice:e.formEditOrder.pricetotal,type:e.formEditOrder.state,phone:e.formEditOrder.phone,address:e.formEditOrder.address,logistics:e.formEditOrder.logistics,goodsId:e.formEditOrder.gname}};l.postJson(t).then(function(t){"1"!==t.data.code?e.$alert(t.data.message,"信息提示"):(e.$notify({title:"新增原料成功",message:t.data.message,type:"success"}),e.editOrderSwitch=!1,e.getList())})},handleDone:function(e,t,r,a){var o=this,d={api:"/product/order/complete",param:{id:e,goodsQuantity:r,goodsPrice:a,goodsId:t}};l.postJson(d).then(function(e){"1"!==e.data.code?o.$alert(e.data.message,"信息提示"):(o.$notify({title:"订单完成",message:e.data.message,type:"success"}),o.getList())})},handleDelete:function(e){var t=this,r={api:"/product/order/delete",param:{id:e}};l.post(r).then(function(e){"1"!==e.data.code?t.$alert(e.data.message,"信息提示"):(t.$notify({title:"订单删除成功",message:e.data.message,type:"success"}),t.getList())})},getListP:function(){var e=this,t={api:"/product/goods/queryAll"};l.post(t).then(function(t){"1"!==t.data.code?e.$alert(t.data.message,"信息提示"):e.optionsp=t.data.data.goodsStocks})},getList:function(){var e=this,t={api:"/product/index/orderInfo",param:{type:"0",pagesNum:e.cur_page}};l.post(t).then(function(t){e.tableData=t.data.data.order,e.listNum=t.data.data.listNum,e.changeType(e.tableData)})},changeGoodName:function(e){var t={};t=this.optionsp.find(function(t){return t.id===e}),this.formNewOrder.gname=t.goodsName}},computed:{indexData:function(){var e=this;return e.tableData.filter(function(t){if(t.goodsName.indexOf(e.select_word)>-1)return t})}}},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"index-warp"},[r("h2",[e._v("大魔王的料理店")]),e._v(" "),r("div",{staticClass:"menu"},[r("el-button",{attrs:{type:"primary"},on:{click:e.newOrder}},[e._v("新增订单")])],1),e._v(" "),r("el-dialog",{attrs:{title:"新增订单",visible:e.newOrderSwitch,width:"30%"},on:{"update:visible":function(t){e.newOrderSwitch=t}}},[r("el-form",{ref:"formNewOrder",attrs:{model:e.formNewOrder,rules:e.rules}},[r("el-form-item",{attrs:{prop:"name",label:"客户姓名","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formNewOrder.name,callback:function(t){e.$set(e.formNewOrder,"name",t)},expression:"formNewOrder.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"phone",label:"手机号","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formNewOrder.phone,callback:function(t){e.$set(e.formNewOrder,"phone",t)},expression:"formNewOrder.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"address",label:"收货地址","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formNewOrder.address,callback:function(t){e.$set(e.formNewOrder,"address",t)},expression:"formNewOrder.address"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"pname",label:"产品名称","label-width":e.formLabelWidth}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择产品"},on:{change:e.changeGoodName},model:{value:e.formNewOrder.pname,callback:function(t){e.$set(e.formNewOrder,"pname",t)},expression:"formNewOrder.pname"}},e._l(e.optionsp,function(e){return r("el-option",{key:e.goodsName,attrs:{label:e.goodsName,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{prop:"num",label:"数量","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formNewOrder.num,callback:function(t){e.$set(e.formNewOrder,"num",t)},expression:"formNewOrder.num"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"pricetotal",label:"总价","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formNewOrder.pricetotal,callback:function(t){e.$set(e.formNewOrder,"pricetotal",t)},expression:"formNewOrder.pricetotal"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"data",label:"交付日期","label-width":e.formLabelWidth}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.formNewOrder.data,callback:function(t){e.$set(e.formNewOrder,"data",t)},expression:"formNewOrder.data"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"state",label:"状态","label-width":e.formLabelWidth}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择状态"},model:{value:e.formNewOrder.state,callback:function(t){e.$set(e.formNewOrder,"state",t)},expression:"formNewOrder.state"}},e._l(e.optionss,function(e){return r("el-option",{key:e.index,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.newOrderSwitch=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitnewOrder("formNewOrder")}}},[e._v("确 定")])],1)],1),e._v(" "),r("p",{staticClass:"title"},[e._v("未完成订单")]),e._v(" "),r("el-input",{staticClass:"search",attrs:{placeholder:"筛选产品关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),r("el-table",{ref:"indexTable",staticStyle:{width:"100%"},attrs:{data:e.indexData,border:""}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{prop:"customer",label:"客户名称",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"createdate",label:"订单日期",width:"150"}}),e._v(" "),r("el-table-column",{attrs:{prop:"goodsName",label:"产品名称",width:"150"}}),e._v(" "),r("el-table-column",{attrs:{prop:"goodsQuantity",label:"数量",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{prop:"goodsPrice",label:"总价",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"readydate",label:"交付日期",width:"150"}}),e._v(" "),r("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"address",label:"收货地址",width:"200"}}),e._v(" "),r("el-table-column",{attrs:{prop:"logistics",label:"物流单号",width:"150"}}),e._v(" "),r("el-table-column",{attrs:{prop:"typech",label:"状态"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"small"},on:{click:function(r){e.handleEdit(t.row.id,t.row.customer,t.row.goodsName,t.row.goodsQuantity,t.row.goodsPrice,t.row.readydate,t.row.phone,t.row.address,t.row.logistics,t.row.type,t.row.goodsId)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{size:"small",type:"success"},on:{click:function(r){e.handleDone(t.row.id,t.row.goodsId,t.row.goodsQuantity,t.row.goodsPrice)}}},[e._v("完成")]),e._v(" "),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(r){e.handleDelete(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{layout:"prev, pager, next",total:e.listNum},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),r("el-dialog",{attrs:{title:"编辑订单",visible:e.editOrderSwitch,width:"30%"},on:{"update:visible":function(t){e.editOrderSwitch=t}}},[r("el-form",{ref:"formEditOrder",attrs:{model:e.formEditOrder}},[r("el-form-item",{attrs:{prop:"name",label:"客户姓名","label-width":e.formLabelWidth}},[r("span",[e._v(e._s(e.formEditOrder.name))])]),e._v(" "),r("el-form-item",{attrs:{prop:"phone",label:"手机号","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formEditOrder.phone,callback:function(t){e.$set(e.formEditOrder,"phone",t)},expression:"formEditOrder.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"address",label:"收货地址","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formEditOrder.address,callback:function(t){e.$set(e.formEditOrder,"address",t)},expression:"formEditOrder.address"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"pname",label:"产品名称","label-width":e.formLabelWidth}},[r("span",[e._v(e._s(e.formEditOrder.pname))])]),e._v(" "),r("el-form-item",{attrs:{prop:"num",label:"数量","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formEditOrder.num,callback:function(t){e.$set(e.formEditOrder,"num",t)},expression:"formEditOrder.num"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"pricetotal",label:"总价","label-width":e.formLabelWidth}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formEditOrder.pricetotal,callback:function(t){e.$set(e.formEditOrder,"pricetotal",t)},expression:"formEditOrder.pricetotal"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"data",label:"交付日期","label-width":e.formLabelWidth}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.formEditOrder.data,callback:function(t){e.$set(e.formEditOrder,"data",t)},expression:"formEditOrder.data"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"state",label:"状态","label-width":e.formLabelWidth}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择状态"},model:{value:e.formEditOrder.state,callback:function(t){e.$set(e.formEditOrder,"state",t)},expression:"formEditOrder.state"}},e._l(e.optionss,function(e){return r("el-option",{key:e.index,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editOrderSwitch=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitEditOrder("formNewOrder")}}},[e._v("确 定")])],1)],1)],1)},n=[],s={render:i,staticRenderFns:n},m=s,p=r("VU/8"),f=a,c=p(d,m,!1,f,"data-v-43b741f0",null);t.default=c.exports},QZfv:function(e,t,r){var a=r("gBPb");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("55092151",a,!0)},gBPb:function(e,t,r){t=e.exports=r("FZ+f")(!0),t.push([e.i,"\n.index-warp h2[data-v-43b741f0] {\n  color: red;\n}\n.index-warp .menu[data-v-43b741f0] {\n  text-align: left;\n}\n.index-warp .title[data-v-43b741f0] {\n  text-align: left;\n  font-size: 20px;\n  display: inline-block;\n  float: left;\n}\n.index-warp .search[data-v-43b741f0] {\n  width: 300px;\n  float: left;\n  margin: 10px 0 0 40px;\n}\n.index-warp .pagination[data-v-43b741f0] {\n  text-align: right;\n  margin-top: 20px;\n}\n.el-button--small[data-v-43b741f0] {\n  padding: 9px 10px;\n}\n","",{version:3,sources:["D:/food_master/src/components/page/UnfilledOrder.vue"],names:[],mappings:";AACA;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;CACb;AACD;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB",file:"UnfilledOrder.vue",sourcesContent:["\n.index-warp h2[data-v-43b741f0] {\n  color: red;\n}\n.index-warp .menu[data-v-43b741f0] {\n  text-align: left;\n}\n.index-warp .title[data-v-43b741f0] {\n  text-align: left;\n  font-size: 20px;\n  display: inline-block;\n  float: left;\n}\n.index-warp .search[data-v-43b741f0] {\n  width: 300px;\n  float: left;\n  margin: 10px 0 0 40px;\n}\n.index-warp .pagination[data-v-43b741f0] {\n  text-align: right;\n  margin-top: 20px;\n}\n.el-button--small[data-v-43b741f0] {\n  padding: 9px 10px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=4.7761e4edd4c0130ec51f.js.map