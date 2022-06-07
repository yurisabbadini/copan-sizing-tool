"use strict";(self["webpackChunkcopan_sizing_tool"]=self["webpackChunkcopan_sizing_tool"]||[]).push([[480],{8312:function(e,a,l){l.r(a),l.d(a,{default:function(){return A}});var n=l(9269);const o={class:"row"},t={class:"col"},r={class:"col"};function i(e,a,l,i,d,u){const m=(0,n.up)("Lines"),s=(0,n.up)("Protocols");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,[(0,n._)("div",t,[(0,n.Wm)(m)])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.lines,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:"row"},[(0,n._)("div",r,[(0,n.Wm)(s,{title:e.name,lineId:e.id},null,8,["title","lineId"])])])))),128))],64)}var d=l(3961),u=l(3201),m=l(5102);const s=(0,n.Uk)("Lines");function c(e,a,l,o,t,r){const i=(0,n.up)("q-item-label"),d=(0,n.up)("q-input"),c=(0,n.up)("q-popup-edit"),p=(0,n.up)("q-td"),f=(0,n.up)("q-select"),b=(0,n.up)("q-checkbox"),g=(0,n.up)("q-btn"),w=(0,n.up)("q-tr"),P=(0,n.up)("q-table"),I=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(I,{class:"q-pa-sm q-mt-sm"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(P,{columns:e.tableColumns,rows:e.lines,"row-key":"id",dense:""},{body:(0,n.w5)((a=>[(0,n.Wm)(w,{props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{key:"name",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(a.row.name)+" ",1),(0,n.Wm)(c,{modelValue:a.row.name,"onUpdate:modelValue":e=>a.row.name=e,"auto-save":""},{default:(0,n.w5)((e=>[(0,n.Wm)(d,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,dense:"",autofocus:"",onKeyup:(0,m.D2)(e.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,n.Wm)(p,{key:"numberOfWasp",props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{dense:"",modelValue:a.row.numberOfWasp,"onUpdate:modelValue":e=>a.row.numberOfWasp=e,modelModifiers:{number:!0},options:[1,2]},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,n.Wm)(p,{key:"numberOfO2Incubator",props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{dense:"",modelValue:a.row.numberOfO2Incubator,"onUpdate:modelValue":e=>a.row.numberOfO2Incubator=e,modelModifiers:{number:!0},options:[1,2,4]},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,n.Wm)(p,{key:"numberOfCO2Incubator",props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{dense:"",modelValue:a.row.numberOfCO2Incubator,"onUpdate:modelValue":e=>a.row.numberOfCO2Incubator=e,modelModifiers:{number:!0},options:[1,2,3]},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,n.Wm)(p,{key:"collaborativeStation",props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{dense:"",modelValue:a.row.collaborativeStation,"onUpdate:modelValue":e=>a.row.collaborativeStation=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,n.Wm)(p,{key:"radian",props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{dense:"",modelValue:a.row.radian,"onUpdate:modelValue":e=>a.row.radian=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,n.Wm)(p,{key:"phenomatrix",props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{dense:"",modelValue:a.row.phenomatrix,"onUpdate:modelValue":e=>a.row.phenomatrix=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,n.Wm)(p,{key:"actions",props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{flat:"",round:"",color:"red",icon:"remove_circleoutline",size:"xs",onClick:l=>e.removeLine(a.row.id)},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"]),(0,n.Wm)(g,{class:"q-mt-md",label:"Add",type:"button",color:"secondary",onClick:e.addLine},null,8,["onClick"])])),_:1})}var p=l(6830),f=(0,n.aZ)({name:"ConfigLines",setup(){const e=[{name:"name",label:"Name",align:"left",field:e=>e.name},{name:"numberOfWasp",label:"WASP",align:"left",field:e=>e.numberOfWasp},{name:"numberOfO2Incubator",label:"Air incubator",align:"left",field:e=>e.numberOfO2Incubator},{name:"numberOfCO2Incubator",label:"CO2 incubator",align:"left",field:e=>e.numberOfCO2Incubator},{name:"collaborativeStation",label:"Collaborative station",align:"left",field:e=>e.collaborativeStation},{name:"radian",label:"Radian",align:"left",field:e=>e.radian},{name:"phenomatrix",label:"Phenomatrix",align:"left",field:e=>e.phenomatrix},{name:"waspOccupancyRate",label:"WASP Occupancy rate",align:"left",field:e=>e.phenomatrix},{name:"wasplabOccupancyRate",label:"WASPLAB Occupancy rate",align:"left",field:e=>e.phenomatrix},{name:"actions",label:"",align:"left",field:e=>e.id}],{lines:a}=(0,d.Z)();return{tableColumns:e,lines:a}},methods:{addLine(){this.lines.push({id:(0,p.Z)(),collaborativeStation:!1,name:"wasplab "+(this.lines.length+1),numberOfCO2Incubator:0,numberOfO2Incubator:0,numberOfWasp:1,phenomatrix:!1,protocols:[],radian:!1})},removeLine(e){const a=this.lines.findIndex((a=>a.id==e));a>-1&&this.lines.splice(a,1)}}}),b=l(7617),g=l(8055),w=l(3712),P=l(7794),I=l(8231),W=l(7282),O=l(4487),V=l(6931),k=l(1903),v=l(9109),U=l(570),C=l(1410),_=l.n(C);const y=(0,b.Z)(f,[["render",c]]);var h=y;function Z(e,a,l,o,t,r){const i=(0,n.up)("q-item-label"),d=(0,n.up)("q-td"),s=(0,n.up)("q-input"),c=(0,n.up)("q-popup-edit"),p=(0,n.up)("q-tr"),f=(0,n.up)("q-table"),b=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(b,{class:"q-pa-sm q-mt-sm"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.title),1)])),_:1}),(0,n.Wm)(f,{columns:1==e.line?.numberOfWasp?e.tableColumns1:e.tableColumns2,rows:e.line?.protocols,"row-key":"id",dense:""},{body:(0,n.w5)((e=>[(0,n.Wm)(p,{props:e},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{key:"name",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.row.name),1)])),_:2},1032,["props"]),(0,n.Wm)(d,{key:"samples",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.row.samples)+" ",1),(0,n.Wm)(c,{modelValue:e.row.samples,"onUpdate:modelValue":a=>e.row.samples=a,modelModifiers:{number:!0},"auto-save":""},{default:(0,n.w5)((e=>[(0,n.Wm)(s,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:(0,m.D2)(e.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,n.Wm)(d,{key:"wasp1Percentage",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.row.wasp1Percentage),1)])),_:2},1032,["props"]),(0,n.Wm)(d,{key:"wasp2Percentage",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.row.wasp2Percentage),1)])),_:2},1032,["props"]),(0,n.Wm)(d,{key:"o2IncubatorPercentage",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.row.wasp2Percentage),1)])),_:2},1032,["props"]),(0,n.Wm)(d,{key:"co2IncubatorPercentage",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.row.wasp2Percentage),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])])),_:1})}_()(f,"components",{QCard:g.Z,QItemLabel:w.Z,QTable:P.Z,QTr:I.Z,QTd:W.Z,QPopupEdit:O.Z,QInput:V.Z,QSelect:k.Z,QCheckbox:v.Z,QBtn:U.Z});var L=(0,n.aZ)({name:"LineProtocols",props:{title:String,lineId:String},setup(e){const{lines:a,primaryProtocols:l,secondaryProtocols:n}=(0,d.Z)(),o=a.value.find((a=>a.id==e.lineId));o&&(l.value.forEach((e=>{o.protocols.push({co2IncubatorPercentage:0,name:e.name,o2IncubatorPercentage:0,wasp1Percentage:0,wasp2Percentage:0,samples:0})})),n.value.forEach((e=>{o.protocols.push({co2IncubatorPercentage:0,name:e.name+" "+e.from,o2IncubatorPercentage:0,wasp1Percentage:0,wasp2Percentage:0,samples:0})})));const t=[{name:"name",label:"Name",align:"left",field:e=>e.name},{name:"samples",label:"Samples",align:"left",field:e=>e.samples},{name:"wasp1Percentage",label:"WASP 1",align:"left",field:e=>e.wasp1Percentage},{name:"o2Loading",label:"Plates",align:"left",field:e=>e.o2IncubatorPercentage},{name:"o2Loading",label:"Slides",align:"left",field:e=>e.o2IncubatorPercentage},{name:"o2Loading",label:"Broths",align:"left",field:e=>e.o2IncubatorPercentage},{name:"o2Loading",label:"Air loading",align:"left",field:e=>e.o2IncubatorPercentage},{name:"co2Loading",label:"CO2 loading",align:"left",field:e=>e.co2IncubatorPercentage},{name:"o2Recording",label:"Air recording",align:"left",field:e=>e.o2IncubatorPercentage},{name:"co2Recording",label:"CO2 recording",align:"left",field:e=>e.co2IncubatorPercentage},{name:"o2Unloading",label:"CO2 unloading",align:"left",field:e=>e.co2IncubatorPercentage},{name:"co2Unloading",label:"CO2 unloading",align:"left",field:e=>e.co2IncubatorPercentage}],r=[{name:"name",label:"Name",align:"left",field:e=>e.name},{name:"samples",label:"Samples",align:"left",field:e=>e.samples},{name:"wasp1Percentage",label:"WASP 1",align:"left",field:e=>e.wasp1Percentage},{name:"o2Loading",label:"Plates",align:"left",field:e=>e.o2IncubatorPercentage},{name:"o2Loading",label:"Slides",align:"left",field:e=>e.o2IncubatorPercentage},{name:"o2Loading",label:"Broths",align:"left",field:e=>e.o2IncubatorPercentage},{name:"wasp1Percentage",label:"WASP 2",align:"left",field:e=>e.wasp1Percentage},{name:"o2Loading",label:"Plates",align:"left",field:e=>e.o2IncubatorPercentage},{name:"o2Loading",label:"Slides",align:"left",field:e=>e.o2IncubatorPercentage},{name:"o2Loading",label:"Broths",align:"left",field:e=>e.o2IncubatorPercentage},{name:"o2Loading",label:"Air loading",align:"left",field:e=>e.o2IncubatorPercentage},{name:"co2Loading",label:"CO2 loading",align:"left",field:e=>e.co2IncubatorPercentage},{name:"o2Recording",label:"Air recording",align:"left",field:e=>e.o2IncubatorPercentage},{name:"co2Recording",label:"CO2 recording",align:"left",field:e=>e.co2IncubatorPercentage},{name:"o2Unloading",label:"CO2 unloading",align:"left",field:e=>e.co2IncubatorPercentage},{name:"co2Unloading",label:"CO2 unloading",align:"left",field:e=>e.co2IncubatorPercentage}];return{tableColumns1:t,tableColumns2:r,line:o}},methods:{}});const q=(0,b.Z)(L,[["render",Z]]);var S=q;_()(L,"components",{QCard:g.Z,QItemLabel:w.Z,QTable:P.Z,QTr:I.Z,QTd:W.Z,QPopupEdit:O.Z,QInput:V.Z});var Q=(0,n.aZ)({name:"HomeView",components:{Lines:h,Protocols:S},setup(){const{lines:e}=(0,d.Z)();return{lines:e}}});const x=(0,b.Z)(Q,[["render",i]]);var A=x}}]);
//# sourceMappingURL=configurator.3d4ef2c7.js.map