webpackJsonp([3],{a0Z0:function(t,e,a){var n=a("n1Fe");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("07ecc8d5",n,!0)},aWlS:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.index-warp h2[data-v-6b5b34d4] {\n  color: red;\n}\n.index-warp .title[data-v-6b5b34d4] {\n  text-align: left;\n  font-size: 20px;\n}\n.index-warp .menu[data-v-6b5b34d4] {\n  float: left;\n  margin: 10px 0 0 40px;\n}\n.index-warp .pagination[data-v-6b5b34d4] {\n  text-align: right;\n  margin-top: 20px;\n}\n.index-warp .InventoryTable[data-v-6b5b34d4] {\n  margin-top: 100px;\n}\n.index-warp .ul-l[data-v-6b5b34d4], .index-warp .pname[data-v-6b5b34d4] {\n  display: inline-block;\n  text-align: left;\n}\n.index-warp .ul-r[data-v-6b5b34d4], .index-warp .pnum[data-v-6b5b34d4] {\n  display: inline-block;\n  text-align: right;\n}\n","",{version:3,sources:["D:/food_master/src/components/page/NewInventory.vue"],names:[],mappings:";AACA;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,kBAAkB;CACnB",file:"NewInventory.vue",sourcesContent:["\n.index-warp h2[data-v-6b5b34d4] {\n  color: red;\n}\n.index-warp .title[data-v-6b5b34d4] {\n  text-align: left;\n  font-size: 20px;\n}\n.index-warp .menu[data-v-6b5b34d4] {\n  float: left;\n  margin: 10px 0 0 40px;\n}\n.index-warp .pagination[data-v-6b5b34d4] {\n  text-align: right;\n  margin-top: 20px;\n}\n.index-warp .InventoryTable[data-v-6b5b34d4] {\n  margin-top: 100px;\n}\n.index-warp .ul-l[data-v-6b5b34d4], .index-warp .pname[data-v-6b5b34d4] {\n  display: inline-block;\n  text-align: left;\n}\n.index-warp .ul-r[data-v-6b5b34d4], .index-warp .pnum[data-v-6b5b34d4] {\n  display: inline-block;\n  text-align: right;\n}\n"],sourceRoot:""}])},f5eD:function(t,e,a){"use strict";function n(t){a("a0Z0")}function i(t){a("xhYW")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("uWBr"),o={data:function(){return{formLabelWidth:"120px",qname:null,num:"",zjdata:{qname:null,num:null},rules1:{qname:[{type:"number",required:!0,message:"请选择产品",trigger:"change"}],num:[{required:!0,message:"请输入原料数量",trigger:"blur"},{min:1,max:10,message:"长度在 1到 10 个字符",trigger:"blur"}]}}},props:["optionsAll"],methods:{atQname:function(){zjdata.qname=this.qname},atNum:function(){zjdata.num=this.num},emitData:function(){this.$emit("at-qname",zjdata)}}},l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{rules:t.rules1}},[a("el-form-item",{staticClass:"qname",attrs:{prop:"qname",label:"原料","label-width":t.formLabelWidth}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择原料"},on:{change:t.atQname},model:{value:t.qname,callback:function(e){t.qname=e},expression:"qname"}},t._l(t.optionsAll,function(t){return a("el-option",{key:t.index,attrs:{label:t.goodsName,value:t.id}})}))],1),t._v(" "),a("el-form-item",{staticClass:"num",attrs:{prop:"num",label:"数量","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",clearable:""},on:{blur:t.atNum},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1)],1)},s=[],d={render:l,staticRenderFns:s},u=d,m=a("VU/8"),c=n,p=m(o,u,!1,c,"data-v-c5563e76",null),f=p.exports,v=new r.a,b={data:function(){return{inventoryData:[],cur_page:1,select_word:"",listNum:null,newInventorySwitch:!1,finishedProductSwitch:!1,formNewInventory:{name:"",unit:""},optionsAll:[],optionsMaterial:[],formFinishedProduct:{name:"",pnum:"",material:[{id:"",materialQuantity:""}]},formLabelWidth:"120px",rules1:{name:[{required:!0,message:"请输入产品名称",trigger:"blur"},{min:2,max:10,message:"长度在 2到 8 个字符",trigger:"blur"}],unit:[{required:!0,message:"请输入产品单位",trigger:"blur"},{min:1,max:4,message:"长度在 1 到 4 个字符",trigger:"blur"}]}}},beforeMount:function(){this.getList(),this.getListAll(),this.getMaterialAll()},methods:{handleCurrentChange:function(t){this.cur_page=t;var e=this,a={api:"/product/goods/query",param:{pagesNum:e.cur_page}};v.post(a).then(function(t){e.inventoryData=t.data.data.goodsStocks})},newInventory:function(){this.newInventorySwitch=!0,this.formNewInventory.name=this.formNewInventory.unit=""},finishedProduct:function(){this.finishedProductSwitch=!0},submitNewInventory:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a=e,n={api:"/product/goods/save",param:{goodsName:a.formNewInventory.name,materialUnit:a.formNewInventory.unit}};v.postJson(n).then(function(t){"1"!==t.data.code?a.$alert(t.data.message,"信息提示"):(a.$notify({title:"新增成品成功",message:t.data.message,type:"success"}),a.newInventorySwitch=!1,a.getList())})})},submitFormFinishedProduct:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a=e,n={api:"/product/goods/make",param:{id:a.formFinishedProduct.name,makeQuantity:a.formFinishedProduct.pnum,materialStocks:a.formFinishedProduct.material}};v.postJson(n).then(function(t){"1"!==t.data.code?a.$alert(t.data.message,"信息提示"):(a.$notify({title:"成品添加成功",message:t.data.message,type:"success"}),a.finishedProductSwitch=!1,a.getList())})})},getList:function(){var t=this,e={api:"/product/goods/query",param:{pagesNum:t.cur_page}};v.post(e).then(function(e){"1"!==e.data.code?t.$alert(e.data.message,"信息提示"):(t.inventoryData=e.data.data.goodsStocks,t.listNum=e.data.data.listNum)})},getListAll:function(){var t=this,e={api:"/product/goods/queryAll"};v.post(e).then(function(e){"1"!==e.data.code?t.$alert(e.data.message,"信息提示"):t.optionsAll=e.data.data.goodsStocks})},getMaterialAll:function(){var t=this,e={api:"/product/material/queryAll"};v.post(e).then(function(e){"1"!==e.data.code?t.$alert(e.data.message,"信息提示"):t.optionsMaterial=e.data.data.materialStock})},delMaterial:function(t){console.log(t,this.formFinishedProduct.material);var e=this.formFinishedProduct.material.indexOf(t);console.log(e),-1!==e&&this.formFinishedProduct.material.splice(e,1)},addMaterial:function(){this.formFinishedProduct.material.push({id:"",materialQuantity:""})}},computed:{indexData:function(){var t=this;return t.tableData.filter(function(e){if(e.goodsName.indexOf(t.select_word)>-1)return e})}},components:{vIselect:f}},h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-warp"},[a("p",{staticClass:"title"},[t._v("成品库存")]),t._v(" "),a("div",{staticClass:"menu"},[a("el-button",{attrs:{type:"primary"},on:{click:t.newInventory}},[t._v("添加成品")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.finishedProduct}},[t._v("制作成品")])],1),t._v(" "),a("el-dialog",{attrs:{title:"添加成品",visible:t.newInventorySwitch,width:"30%"},on:{"update:visible":function(e){t.newInventorySwitch=e}}},[a("el-form",{ref:"formNewInventory",attrs:{model:t.formNewInventory,rules:t.rules1}},[a("el-form-item",{attrs:{prop:"name",label:"成品名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.formNewInventory.name,callback:function(e){t.$set(t.formNewInventory,"name",e)},expression:"formNewInventory.name"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"unit",label:"单位","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.formNewInventory.unit,callback:function(e){t.$set(t.formNewInventory,"unit",e)},expression:"formNewInventory.unit"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.newInventorySwitch=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitNewInventory("formNewInventory")}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"成品制作页面",visible:t.finishedProductSwitch,width:"40%"},on:{"update:visible":function(e){t.finishedProductSwitch=e}}},[a("el-form",{ref:"formFinishedProduct",staticClass:"demo-form-inline",attrs:{model:t.formFinishedProduct}},[a("el-form-item",{staticClass:"pname",attrs:{prop:"name",label:"产品名称","label-width":t.formLabelWidth,rules:[{type:"number",required:!0,message:"请选择产品",trigger:"change"}]}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择产品"},model:{value:t.formFinishedProduct.name,callback:function(e){t.$set(t.formFinishedProduct,"name",e)},expression:"formFinishedProduct.name"}},t._l(t.optionsAll,function(t){return a("el-option",{key:t.index,attrs:{label:t.goodsName,value:t.id}})}))],1),t._v(" "),a("el-form-item",{staticClass:"pnum",attrs:{prop:"pnum",label:"数量","label-width":t.formLabelWidth,rules:[{required:!0,message:"请输入产品数量",trigger:"blur"},{min:1,max:10,message:"长度在 1到 10 个字符",trigger:"blur"}]}},[a("el-input",{attrs:{"auto-complete":"off",clearable:""},model:{value:t.formFinishedProduct.pnum,callback:function(e){t.$set(t.formFinishedProduct,"pnum",e)},expression:"formFinishedProduct.pnum"}})],1),t._v(" "),a("div",[a("div",{staticClass:"ul-l"},t._l(t.formFinishedProduct.material,function(e,n){return a("el-form-item",{key:e.key,staticClass:"material",attrs:{label:"原料名称","label-width":t.formLabelWidth,prop:"material."+n+".id",rules:{type:"number",required:!0,message:"请选择原料",trigger:"change"},width:"50%"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择产品"},model:{value:e.id,callback:function(a){t.$set(e,"id",a)},expression:"name.id"}},t._l(t.optionsMaterial,function(t){return a("el-option",{key:t.value,attrs:{label:t.materialName,value:t.id}})}))],1)})),t._v(" "),a("div",{staticClass:"ul-r"},t._l(t.formFinishedProduct.material,function(e,n){return a("el-form-item",{key:e.key,staticClass:"materialNum",attrs:{label:"原料数量","label-width":t.formLabelWidth,prop:"material."+n+".materialQuantity",rules:[{required:!0,message:"请输入原料数量",trigger:"blur"},{min:1,max:10,message:"长度在 1到 10 个字符",trigger:"blur"}]}},[a("el-input",{attrs:{"auto-complete":"off",clearable:""},model:{value:e.materialQuantity,callback:function(a){t.$set(e,"materialQuantity",a)},expression:"num.materialQuantity"}})],1)})),t._v(" "),a("div",{staticClass:"ul-r"},t._l(t.formFinishedProduct.material,function(e,n){return a("el-form-item",[a("el-button",{attrs:{type:"danger"},on:{click:function(a){t.delMaterial(e)}}},[t._v("删除原料")])],1)}))])],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addMaterial}},[t._v("添加原料")]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.finishedProductSwitch=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitFormFinishedProduct("formFinishedProduct")}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-table",{ref:"indexTable",staticClass:"InventoryTable",staticStyle:{width:"100%"},attrs:{data:t.inventoryData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsName",label:"成品名称",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsQuantity",label:"库存量",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialUnit",label:"单位",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialPrice",label:"单价",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.row.id,e.row.materialName,e.row.materialQuantity,e.row.materialPrice)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.listNum},on:{"current-change":t.handleCurrentChange}})],1)],1)},g=[],y={render:h,staticRenderFns:g},w=y,A=a("VU/8"),x=i,C=A(b,w,!1,x,"data-v-6b5b34d4",null);e.default=C.exports},n1Fe:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.qname[data-v-c5563e76], .num[data-v-c5563e76] {\n  text-align: left;\n  display: inline-block;\n}\n","",{version:3,sources:["D:/food_master/src/components/common/Inventoryselect.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,sBAAsB;CACvB",file:"Inventoryselect.vue",sourcesContent:["\n.qname[data-v-c5563e76], .num[data-v-c5563e76] {\n  text-align: left;\n  display: inline-block;\n}\n"],sourceRoot:""}])},xhYW:function(t,e,a){var n=a("aWlS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("fd3b17f6",n,!0)}});
//# sourceMappingURL=3.6c2076f89bc30c97bbde.js.map