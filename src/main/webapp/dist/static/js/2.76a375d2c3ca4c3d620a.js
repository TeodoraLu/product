webpackJsonp([2],{H9kW:function(t,e,a){var r=a("fz4G");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("742ac31f",r,!0)},fz4G:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.index-warp h2[data-v-b99fdf40] {\n  color: red;\n}\n.index-warp .title[data-v-b99fdf40] {\n  text-align: left;\n  font-size: 20px;\n}\n.index-warp .menu[data-v-b99fdf40] {\n  float: left;\n  margin: 10px 0 0 40px;\n}\n.index-warp .pagination[data-v-b99fdf40] {\n  text-align: right;\n  margin-top: 20px;\n}\n.index-warp .el-input[data-v-b99fdf40] {\n  max-width: 350px;\n}\n.index-warp .formProcurementMaterialsOtinon[data-v-b99fdf40], .index-warp .formEditMaterialsOtinon[data-v-b99fdf40] {\n  margin-bottom: 22px;\n  padding-left: 17%;\n  width: 50%;\n  max-width: 350px;\n}\n.index-warp .MaterialsTable[data-v-b99fdf40] {\n  margin-top: 120px;\n}\n","",{version:3,sources:["D:/food_master/src/components/page/Materials.vue"],names:[],mappings:";AACA;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB",file:"Materials.vue",sourcesContent:["\n.index-warp h2[data-v-b99fdf40] {\n  color: red;\n}\n.index-warp .title[data-v-b99fdf40] {\n  text-align: left;\n  font-size: 20px;\n}\n.index-warp .menu[data-v-b99fdf40] {\n  float: left;\n  margin: 10px 0 0 40px;\n}\n.index-warp .pagination[data-v-b99fdf40] {\n  text-align: right;\n  margin-top: 20px;\n}\n.index-warp .el-input[data-v-b99fdf40] {\n  max-width: 350px;\n}\n.index-warp .formProcurementMaterialsOtinon[data-v-b99fdf40], .index-warp .formEditMaterialsOtinon[data-v-b99fdf40] {\n  margin-bottom: 22px;\n  padding-left: 17%;\n  width: 50%;\n  max-width: 350px;\n}\n.index-warp .MaterialsTable[data-v-b99fdf40] {\n  margin-top: 120px;\n}\n"],sourceRoot:""}])},"j/9f":function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.el-form-item__error{\n\t\tleft: 40px;\n}\n","",{version:3,sources:["D:/food_master/src/components/page/Materials.vue"],names:[],mappings:";AACA;EACE,WAAW;CACZ",file:"Materials.vue",sourcesContent:["\n.el-form-item__error{\n\t\tleft: 40px;\n}\n"],sourceRoot:""}])},mhyl:function(t,e,a){"use strict";function r(t){a("H9kW"),a("zEhw")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("uWBr"),n=new i.a,l={data:function(){return{newMaterialsSwitch:!1,procurementMaterialsSwitch:!1,editMaterialsSwitch:!1,cur_page:1,formNewMaterials:{name:"",region:""},formProcurementMaterialsOtinon:"",formEditMaterialsOtinon:"",formProcurementMaterials:{num:"",total:""},formEditMaterials:{id:"",oldNum:"",price:"",name:"",num:""},options:[],formLabelWidth:"120px",rules:{name:[{required:!0,message:"请输入产品名称",trigger:"blur"},{min:2,max:10,message:"长度在 2到 8 个字符",trigger:"blur"}],region:[{required:!0,message:"请输入产品单位",trigger:"blur"},{min:1,max:4,message:"长度在 1 到 4 个字符",trigger:"blur"}]},rules1:{num:[{required:!0,message:"请输入产品采购数量",trigger:"blur"},{min:1,max:10,message:"长度在 1到 10 个字符",trigger:"blur"}],total:[{required:!0,message:"请输入总价",trigger:"blur"},{min:1,max:8,message:"长度在 1 到 8 个字符",trigger:"blur"}]},rules2:{num:[{required:!0,message:"请输入产品数量",trigger:"blur"},{min:1,max:10,message:"长度在 1到 10 个字符",trigger:"blur"}]}}},beforeMount:function(){this.getList()},methods:{newMaterials:function(){this.newMaterialsSwitch=!0,this.formNewMaterials.name=this.formNewMaterials.region=""},procurementMaterials:function(){this.procurementMaterialsSwitch=!0,this.formProcurementMaterialsOtinon="",this.formProcurementMaterials.num=this.formProcurementMaterials.total=""},handleEdit:function(t,e,a,r){this.editMaterialsSwitch=!0,this.formEditMaterials.id=t,this.formEditMaterials.name=e,this.formEditMaterials.oldNum=a,this.formEditMaterials.price=r,this.formEditMaterials.num=null},handleDelete:function(t){var e=this,a={api:"/product/material/delete",param:{id:t}};n.post(a).then(function(t){"1"!==t.data.code?e.$alert(t.data.message,"信息提示"):(e.$notify({title:"删除成功",message:t.data.message,type:"success"}),e.editMaterialsSwitch=!1,e.getList())})},submitNewMaterials:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a=e,r={api:"/product/material/save",param:{materialName:a.formNewMaterials.name,materialUnit:a.formNewMaterials.region}};n.postJson(r).then(function(t){"1"!==t.data.code?a.$alert(t.data.message,"信息提示"):(a.$notify({title:"新增原料成功",message:t.data.message,type:"success"}),a.newMaterialsSwitch=!1,a.getList())})})},submitProcurementMaterials:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a=e,r={api:"/product/material/BuyMaterialStock",param:{id:a.formProcurementMaterialsOtinon,materialQuantity:a.formProcurementMaterials.num,price:a.formProcurementMaterials.total}};n.postJson(r).then(function(t){"1"!==t.data.code?a.$alert(t.data.message,"信息提示"):(a.$notify({title:"购买原材料添加成功",message:t.data.message,type:"success"}),a.procurementMaterialsSwitch=!1,a.getList())})})},submitEditMaterials:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a=e,r={api:"/product/material/update",param:{id:a.formEditMaterials.id,materialOldQuantity:a.formEditMaterials.oldNum,price:a.formEditMaterials.price,materialQuantity:a.formEditMaterials.num}};n.postJson(r).then(function(t){"1"!==t.data.code?a.$alert(t.data.message,"信息提示"):(a.$notify({title:"修改原材料成功",message:t.data.message,type:"success"}),a.editMaterialsSwitch=!1,a.getList())})})},getList:function(){var t=this,e={api:"/product/material/query",param:{pagesNum:t.cur_page}};n.post(e).then(function(e){"1"!==e.data.code?t.$alert(e.data.message,"信息提示"):t.options=e.data.data.materialStock})}},computed:{}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-warp"},[a("h2",[t._v("大魔王的料理店")]),t._v(" "),a("p",{staticClass:"title"},[t._v("原料管理")]),t._v(" "),a("div",{staticClass:"menu"},[a("el-button",{attrs:{type:"primary"},on:{click:t.newMaterials}},[t._v("新增原料")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.procurementMaterials}},[t._v("采购原料")])],1),t._v(" "),a("el-dialog",{attrs:{title:"添加原材料",visible:t.newMaterialsSwitch,width:"30%"},on:{"update:visible":function(e){t.newMaterialsSwitch=e}}},[a("el-form",{ref:"formNewMaterials",attrs:{model:t.formNewMaterials,rules:t.rules}},[a("el-form-item",{attrs:{prop:"name",label:"原材料名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.formNewMaterials.name,callback:function(e){t.$set(t.formNewMaterials,"name",e)},expression:"formNewMaterials.name"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"region",label:"单位","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.formNewMaterials.region,callback:function(e){t.$set(t.formNewMaterials,"region",e)},expression:"formNewMaterials.region"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.newMaterialsSwitch=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitNewMaterials("formNewMaterials")}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"采购原材料",visible:t.procurementMaterialsSwitch,width:"30%"},on:{"update:visible":function(e){t.procurementMaterialsSwitch=e}}},[a("el-form",{ref:"formProcurementMaterials",attrs:{model:t.formProcurementMaterials,rules:t.rules1}},[a("el-select",{staticClass:"formProcurementMaterialsOtinon",attrs:{clearable:"",placeholder:"请选择原料"},model:{value:t.formProcurementMaterialsOtinon,callback:function(e){t.formProcurementMaterialsOtinon=e},expression:"formProcurementMaterialsOtinon"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.materialName,value:t.id}})})),t._v(" "),a("el-form-item",{attrs:{label:"数量","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.formProcurementMaterials.num,callback:function(e){t.$set(t.formProcurementMaterials,"num",e)},expression:"formProcurementMaterials.num"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"总价","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.formProcurementMaterials.total,callback:function(e){t.$set(t.formProcurementMaterials,"total",e)},expression:"formProcurementMaterials.total"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.procurementMaterialsSwitch=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitProcurementMaterials("formProcurementMaterials")}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-table",{ref:"options",staticClass:"MaterialsTable",staticStyle:{width:"100%"},attrs:{data:t.options,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialName",label:"原材料名称",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialQuantity",label:"库存量",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialUnit",label:"单位",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialPrice",label:"单价",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.row.id,e.row.materialName,e.row.materialQuantity,e.row.materialPrice)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑原材料",visible:t.editMaterialsSwitch,width:"30%"},on:{"update:visible":function(e){t.editMaterialsSwitch=e}}},[a("el-form",{ref:"formEditMaterials",attrs:{model:t.formEditMaterials,rules:t.rules2}},[a("el-form-item",{attrs:{label:"原材料名称","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.formEditMaterials.name))])]),t._v(" "),a("el-form-item",{attrs:{prop:"num",label:"数量","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.formEditMaterials.num,callback:function(e){t.$set(t.formEditMaterials,"num",e)},expression:"formEditMaterials.num"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editMaterialsSwitch=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitEditMaterials("formEditMaterials")}}},[t._v("确 定")])],1)],1)],1)},s=[],m={render:o,staticRenderFns:s},f=m,u=a("VU/8"),d=r,c=u(l,f,!1,d,"data-v-b99fdf40",null);e.default=c.exports},zEhw:function(t,e,a){var r=a("j/9f");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("2f021b4f",r,!0)}});
//# sourceMappingURL=2.76a375d2c3ca4c3d620a.js.map