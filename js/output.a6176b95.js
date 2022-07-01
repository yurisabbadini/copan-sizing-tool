"use strict";(self["webpackChunkcopan_sizing_tool"]=self["webpackChunkcopan_sizing_tool"]||[]).push([[467],{902:function(e,a,t){t.r(a),t.d(a,{default:function(){return Y}});var l=t(9269);const o={class:"row"},n={class:"col"},s={class:"col"},r={class:"row"},i={class:"col"},u={class:"row"},p={key:0,class:"col"},d={key:1,class:"col"},c={class:"row"},m={class:"col"};function b(e,a,t,b,f,g){const w=(0,l.up)("TotalHardware"),h=(0,l.up)("OutputLine"),v=(0,l.up)("WaspChart"),P=(0,l.up)("WasplabChart");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",o,[(0,l._)("div",n,[(0,l.Wm)(w)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.lines,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"row"},[(0,l._)("div",s,[(0,l._)("div",r,[(0,l._)("div",i,[(0,l.Wm)(h,{"line-id":e.id,title:e.name},null,8,["line-id","title"])])]),(0,l._)("div",u,[e.numberOfWasp>=1?((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Wm)(v,{lineId:e.id,wasp:1},null,8,["lineId"])])):(0,l.kq)("",!0),2==e.numberOfWasp?((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)(v,{lineId:e.id,wasp:2},null,8,["lineId"])])):(0,l.kq)("",!0)]),(0,l._)("div",c,[(0,l._)("div",m,[(0,l.Wm)(P,{lineId:e.id},null,8,["lineId"])])])])])))),128))],64)}const f=(0,l.Uk)("Total hardware"),g={class:"row q-gutter-sm"},w={class:"col"},h={class:"col"},v={class:"col"};function P(e,a,t,o,n,s){const r=(0,l.up)("q-item-label"),i=(0,l.up)("q-table"),u=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(u,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"q-mb-sm",overline:""},{default:(0,l.w5)((()=>[f])),_:1}),(0,l._)("div",g,[(0,l._)("div",w,[(0,l.Wm)(i,{columns:e.outputColumns,rows:e.outputRowsT1,"row-key":"id",dense:"",flat:"",bordered:"",separator:"cell","hide-bottom":"","hide-header":"",pagination:{rowsPerPage:0}},null,8,["columns","rows"])]),(0,l._)("div",h,[(0,l.Wm)(i,{columns:e.outputColumns,rows:e.outputRowsT2,"row-key":"id",dense:"",flat:"",bordered:"",separator:"cell","hide-bottom":"","hide-header":"",pagination:{rowsPerPage:0}},null,8,["columns","rows"])]),(0,l._)("div",v,[(0,l.Wm)(i,{columns:e.outputColumns,rows:e.outputRowsT3,"row-key":"id",dense:"",flat:"",bordered:"",separator:"cell","hide-bottom":"","hide-header":"",pagination:{rowsPerPage:0}},null,8,["columns","rows"])])])])),_:1})}var O=t(3961),y=(0,l.aZ)({name:"TotalHardware",setup(){const{lines:e,configuratorAdditionalItems:a}=(0,O.Z)(),t=[{name:"label",required:!0,label:"",align:"left",field:e=>e.label,sortable:!1},{name:"value",required:!0,label:"",align:"left",field:e=>e.value,sortable:!1}],l=[{label:"Number of WASPLAB",value:e.value.length},{label:"Number of WASP",value:e.value.length>0?e.value.map((e=>e.numberOfWasp)).reduce(((e,a)=>e+a)):0},{label:"Number of air incubators",value:e.value.length>0?e.value.map((e=>e.numberOfO2Incubator)).reduce(((e,a)=>e+a)):0},{label:"Number of CO2 incubators",value:e.value.length>0?e.value.map((e=>e.numberOfCO2Incubator)).reduce(((e,a)=>e+a)):0}],o=[{label:"Number of FLO",value:a.value.flo},{label:"Number of Radian",value:e.value.length>0?e.value.filter((e=>1==e.radian)).length:0},{label:"Number of Phenomatrix",value:e.value.length>0?e.value.filter((e=>1==e.phenomatrix)).length:0},{label:"Number of Colibrì",value:a.value.colibri}],n=[{label:"Number of Collaborative stations",value:e.value.length>0?e.value.filter((e=>1==e.collaborativeStation)).length:0},{label:"Number of Manual stations",value:a.value.manualStation},{label:"Number of Reading stations",value:a.value.readingStation},{label:"Number of Picking stations",value:a.value.pickingStation}];return{outputColumns:t,outputRowsT1:l,outputRowsT2:o,outputRowsT3:n}}}),S=t(7617),W=t(8055),k=t(3712),_=t(7794),I=t(1410),x=t.n(I);const C=(0,S.Z)(y,[["render",P]]);var q=C;x()(y,"components",{QCard:W.Z,QItemLabel:k.Z,QTable:_.Z});var D=t(3201);function N(e,a,t,o,n,s){const r=(0,l.up)("q-item-label"),i=(0,l.up)("q-td"),u=(0,l.up)("q-checkbox"),p=(0,l.up)("q-tr"),d=(0,l.up)("q-table"),c=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(c,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"q-mb-sm",overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,D.zw)(e.title),1)])),_:1}),(0,l.Wm)(d,{columns:e.tableColumns,rows:e.line,"row-key":"id",dense:"","hide-bottom":"",pagination:{rowsPerPage:0},separator:"cell"},{body:(0,l.w5)((e=>[(0,l.Wm)(p,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{key:"numberOfWasp",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,D.zw)(e.row.numberOfWasp),1)])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"numberOfO2Incubator",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,D.zw)(e.row.numberOfO2Incubator),1)])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"numberOfCO2Incubator",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,D.zw)(e.row.numberOfCO2Incubator),1)])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"collaborativeStation",props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{readonly:"",dense:"",modelValue:e.row.collaborativeStation,"onUpdate:modelValue":a=>e.row.collaborativeStation=a,disable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"radian",props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{readonly:"",dense:"",modelValue:e.row.radian,"onUpdate:modelValue":a=>e.row.radian=a,disable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"phenomatrix",props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{readonly:"",dense:"",modelValue:e.row.phenomatrix,"onUpdate:modelValue":a=>e.row.phenomatrix=a,disable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"waspOccupancyRate",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,D.zw)(e.row.waspOccupancyRate.toFixed(2))+" % ",1)])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"wasplabOccupancyRate",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,D.zw)(isFinite(e.row.wasplabOccupancyRate)?e.row.wasplabOccupancyRate.toFixed(2)+" %":"N/A"),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])])),_:1})}var T=(0,l.aZ)({name:"ConfigLines",props:["title","lineId"],setup(e){const a=[{name:"numberOfWasp",label:"WASP",align:"left",field:e=>e.numberOfWasp},{name:"numberOfO2Incubator",label:"Air incubator",align:"left",field:e=>e.numberOfO2Incubator},{name:"numberOfCO2Incubator",label:"CO2 incubator",align:"left",field:e=>e.numberOfCO2Incubator},{name:"collaborativeStation",label:"Collaborative station",align:"left",field:e=>e.collaborativeStation},{name:"radian",label:"Radian",align:"left",field:e=>e.radian},{name:"phenomatrix",label:"Phenomatrix",align:"left",field:e=>e.phenomatrix},{name:"waspOccupancyRate",label:"WASP Occupancy rate",align:"left",field:e=>e.waspOccupancyRate},{name:"wasplabOccupancyRate",label:"WASPLAB Occupancy rate",align:"left",field:e=>e.wasplabOccupancyRate}],{lines:t}=(0,O.Z)(),l=t.value.filter((a=>a.id==e.lineId));return{tableColumns:a,line:l}}}),Z=t(8231),H=t(7282),R=t(9109);const U=(0,S.Z)(T,[["render",N]]);var M=U;function A(e,a,t,o,n,s){const r=(0,l.up)("apexchart"),i=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(i,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"bar",height:"350",options:e.chartOptions,series:e.series},null,8,["options","series"])])),_:1})}x()(T,"components",{QCard:W.Z,QItemLabel:k.Z,QTable:_.Z,QTr:Z.Z,QTd:H.Z,QCheckbox:R.Z});var E=(0,l.aZ)({name:"WaspChart",props:{lineId:{type:Object,required:!0},wasp:{type:Object,required:!0}},setup(e){const{primaryProtocols:a,lines:t,settings:l}=(0,O.Z)(),o=t.value.find((a=>a.id==e.lineId)),n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a.value.forEach((a=>{for(let t=0;t<a.volumes.length;t++){let s=o?.protocols.find((e=>e.id==a.id))?.wasp1Plates||0;2==e.wasp&&(s=o?.protocols.find((e=>e.id==a.id))?.wasp2Plates||0);const r=s*(a.volumes[t]||0)/100*(l.value.plates.streakingPatterns.find((e=>e.pattern==a.waspData.streakingPattern))?.timeInSeconds||0);let i=o?.protocols.find((e=>e.id==a.id))?.wasp1Slides||0;2==e.wasp&&(i=o?.protocols.find((e=>e.id==a.id))?.wasp2Slides||0);let u=l.value.slides.streakingPatterns.find((e=>"slide_and_other"==e.pattern))?.timeInSeconds||0;0==a.waspData.platesPerSample&&(u=l.value.slides.streakingPatterns.find((e=>"slide_only"==e.pattern))?.timeInSeconds||0);const p=i*(a.volumes[t]||0)/100*u;let d=o?.protocols.find((e=>e.id==a.id))?.wasp1Broths||0;2==e.wasp&&(d=o?.protocols.find((e=>e.id==a.id))?.wasp2Broths||0);const c=d*(a.volumes[t]||0)/100*l.value.broths.timeInSeconds;if(n[t]+=r+p+c,n[t]>3600){let e=t+1;e>n.length-1&&(e=0),n[e]+=n[t]-3600,n[t]=3600}}}));const s=[{name:"occupancy rate",data:n.map((e=>Number((e/3600*100).toFixed(2))))}],r=[];for(let u=1;u<25;u++)r.push(`${(u-1).toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`);const i={chart:{id:"vuechart-dailydata"},xaxis:{categories:r},yaxis:{max:100},colors:[function(){return"#022A55"}]};return{chartOptions:i,series:s}}});const F=(0,S.Z)(E,[["render",A]]);var V=F;function Q(e,a,t,o,n,s){const r=(0,l.up)("apexchart"),i=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(i,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"bar",height:"350",options:e.chartOptions,series:e.series},null,8,["options","series"])])),_:1})}x()(E,"components",{QCard:W.Z});var L=(0,l.aZ)({name:"WasplabChart",props:{lineId:{type:Object,required:!0}},setup(e){const{primaryProtocols:a,lines:t,settings:l}=(0,O.Z)(),o=t.value.find((a=>a.id==e.lineId)),n=(o?.numberOfCO2Incubator||0)+(o?.numberOfO2Incubator||0),s=[],r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a.value.forEach((e=>{for(let a=0;a<e.volumes.length;a++){const t=(o?.protocols.find((a=>a.id==e.id))?.wasp1Plates||0)+(o?.protocols.find((a=>a.id==e.id))?.wasp2Plates||0),n=t*(e.volumes[a]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0);let s=(o?.protocols.find((a=>a.id==e.id))?.wasp1Slides||0)+(o?.protocols.find((a=>a.id==e.id))?.wasp2Slides||0),i=l.value.slides.streakingPatterns.find((e=>"slide_and_other"==e.pattern))?.timeInSeconds||0;0==e.waspData.platesPerSample&&(i=l.value.slides.streakingPatterns.find((e=>"slide_only"==e.pattern))?.timeInSeconds||0);const u=s*(e.volumes[a]||0)/100*i;let p=(o?.protocols.find((a=>a.id==e.id))?.wasp1Broths||0)+(o?.protocols.find((a=>a.id==e.id))?.wasp2Broths||0);const d=p*(e.volumes[a]||0)/100*l.value.broths.timeInSeconds;if(r[a]+=n+u+d,r[a]>3600*(o?.numberOfWasp||1)){let e=a+1;e>r.length-1&&(e=0),r[e]+=r[a]-3600*(o?.numberOfWasp||1),r[a]=3600*(o?.numberOfWasp||1)}}})),a.value.forEach((e=>{s.push({protocol:e,platesPerHour:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],platesTimePerHour:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],plates:0,totalPlatesTime:0});for(let a=0;a<s[s.length-1].platesPerHour.length;a++){const t=(o?.protocols.find((a=>a.id==e.id))?.wasp1Plates||0)+(o?.protocols.find((a=>a.id==e.id))?.wasp2Plates||0);s[s.length-1].platesPerHour[a]+=Math.ceil(t*(e.volumes[a]||0)/100),s[s.length-1].platesTimePerHour[a]+=t*(e.volumes[a]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0),s[s.length-1].plates+=Math.ceil(t*(e.volumes[a]||0)/100),s[s.length-1].totalPlatesTime+=t*(e.volumes[a]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0)}}));const i=r.reduce(((e,a)=>e+a));let u=0,p=0;s.forEach((e=>{p+=e.totalPlatesTime,u+=e.plates}));const d=p/i,c=p/u,m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],b=[];for(let O=0;O<r.length;O++)m[O]=Math.ceil(r[O]*d/c);a.value.forEach((e=>{b.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});for(let a=0;a<m.length;a++){const t=s.map((e=>e.plates)).reduce(((e,a)=>e+a)),l=s.find((a=>a.protocol?.id==e.id))?.plates||0,o=0==l?0:l/t;b[b.length-1].plates[a]=Math.ceil(m[a]*o)}}));const f=[],g=[],w=[],h=[];a.value.forEach((e=>{const a=e.wasplabData.air.platesPerSample/(e.wasplabData.air.platesPerSample+e.wasplabData.co2.platesPerSample),t=e.wasplabData.co2.platesPerSample/(e.wasplabData.air.platesPerSample+e.wasplabData.co2.platesPerSample),l=b.find((a=>a.protocol.id==e.id)),o=e.wasplabData.air.readHours?.split(",").map((e=>Number(e)))||[],n=Math.max(...o),s=e.wasplabData.co2.readHours.split(",").map((e=>Number(e)))||[],r=Math.max(...s);if(f.push({protocol:e,positivePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],negativePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),g.push({protocol:e,positivePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],negativePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),w.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),h.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),l)for(let i=0;i<l.plates.length;i++){const u=new Date(Date.UTC(2017,0,1,i,0,0,0)),p=new Date(u.getTime()+60*(n-1)*60*1e3);f[f.length-1].positivePlates[p.getHours()]=Math.ceil(l.plates[i]*a*(1-e.negativityRate/100)),f[f.length-1].negativePlates[p.getHours()]=Math.ceil(l.plates[i]*a*(e.negativityRate/100)),o.forEach((e=>{const t=new Date(u.getTime()+60*(e-1)*60*1e3);w[w.length-1].plates[t.getHours()]+=Math.ceil(l.plates[i]*a)}));const d=new Date(u.getTime()+60*(r-1)*60*1e3);g[g.length-1].positivePlates[d.getHours()]=Math.ceil(l.plates[i]*t*(1-e.negativityRate/100)),g[g.length-1].negativePlates[d.getHours()]=Math.ceil(l.plates[i]*t*(e.negativityRate/100)),s.forEach((e=>{const a=new Date(u.getTime()+60*(e-1)*60*1e3);h[h.length-1].plates[a.getHours()]+=Math.ceil(l.plates[i]*t)}))}}));const v=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];f.forEach((e=>{for(let a=0;a<v.length;a++)v[a]+=e.positivePlates[a]})),g.forEach((e=>{for(let a=0;a<v.length;a++)v[a]+=e.positivePlates[a]}));const P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];f.forEach((e=>{for(let a=0;a<v.length;a++)P[a]+=e.negativePlates[a]})),g.forEach((e=>{for(let a=0;a<v.length;a++)P[a]+=e.negativePlates[a]}));const y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];w.forEach((e=>{for(let a=0;a<y.length;a++)y[a]+=e.plates[a]})),h.forEach((e=>{for(let a=0;a<y.length;a++)y[a]+=e.plates[a]}));const S=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],W=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(let O=0;O<r.length;O++)S[O]=Number(Math.ceil(r[O]*d/c)/l.value.incubator.loadingPlatesPerHour),S[O]=Number((100*S[O]).toFixed(2)),W[O]=Number(v[O]/(n>=1?l.value.incubator.unloadingMultiplePlatesPerHour:l.value.incubator.unloadingSinglePlatesPerHour)),W[O]=Number((100*W[O]).toFixed(2)),k[O]=Number(P[O]/(n>=1?l.value.incubator.unloadingMultiplePlatesPerHour:l.value.incubator.unloadingSinglePlatesPerHour)),k[O]=Number((100*k[O]).toFixed(2)),_[O]=Number(y[O]/l.value.incubator.recordingPlatesPerHour),_[O]=Number((100*_[O]).toFixed(2));for(let O=0;O<W.length-1;O++){const e=new Date(Date.UTC(2017,0,1,O,0,0,0)),a=new Date(e.getTime()+36e5);let t=a.getHours()-1;W[O]>=100&&(W[t]+=W[O]-100,W[O]=100,S[t]+=S[O],S[O]=0,_[t]+=_[O],_[O]=0,k[t]+=k[O],k[O]=0),W[O]+S[O]>=100&&(W[t]+=0,S[t]+=S[O]-(100-W[O]),S[O]=100-W[O],_[t]+=_[O],_[O]=0,k[t]+=k[O],k[O]=0),W[O]+S[O]+_[O]>=100&&(W[t]+=0,S[t]+=0,_[t]+=_[O]-(100-(W[O]+S[O])),_[O]=100-(W[O]+S[O]),k[t]+=k[O],k[O]=0),W[O]+S[O]+_[O]+k[O]>=100&&(W[t]+=0,S[t]+=0,_[t]+=0,k[t]+=k[O]-(100-(W[O]+S[O]+_[O])),k[O]=100-(W[O]+S[O]+_[O]))}const I=[{name:"Unloading positive plates",data:W.map((e=>Number(e.toFixed(2)))),color:"#022A55"},{name:"Loading",data:S.map((e=>Number(e.toFixed(2)))),color:"#7794FB"},{name:"Recording",data:_.map((e=>Number(e.toFixed(2)))),color:"#bede19"},{name:"Unloading negative plates",data:k.map((e=>Number(e.toFixed(2)))),color:"#A9A9A9"}],x=[];for(let O=1;O<25;O++)x.push(`${(O-1).toString().padStart(2,"0")}-${O.toString().padStart(2,"0")}`);const C={chart:{type:"bar",height:350,stacked:!0},xaxis:{categories:x},yaxis:{max:100}};return{chartOptions:C,series:I}}});const z=(0,S.Z)(L,[["render",Q]]);var j=z;x()(L,"components",{QCard:W.Z});var B=(0,l.aZ)({name:"OutputView",components:{TotalHardware:q,OutputLine:M,WaspChart:V,WasplabChart:j},setup(){const{lines:e}=(0,O.Z)();return{lines:e}}});const $=(0,S.Z)(B,[["render",b]]);var Y=$}}]);
//# sourceMappingURL=output.a6176b95.js.map