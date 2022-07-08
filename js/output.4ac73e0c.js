"use strict";(self["webpackChunkcopan_sizing_tool"]=self["webpackChunkcopan_sizing_tool"]||[]).push([[467],{2716:function(e,a,t){t.r(a),t.d(a,{default:function(){return X}});var l=t(9269);const o={class:"row"},s={class:"col"},n={class:"col"},r={class:"row"},i={class:"col"},u={class:"row"},p={key:0,class:"col"},d={key:1,class:"col"},c={class:"row"},m={class:"col"};function g(e,a,t,g,f,b){const v=(0,l.up)("TotalHardware"),h=(0,l.up)("OutputLine"),w=(0,l.up)("WaspChart"),P=(0,l.up)("WasplabChart"),S=(0,l.up)("ColibriChart");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",o,[(0,l._)("div",s,[(0,l.Wm)(v)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.lines,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"row"},[(0,l._)("div",n,[(0,l._)("div",r,[(0,l._)("div",i,[(0,l.Wm)(h,{"line-id":e.id,title:e.name},null,8,["line-id","title"])])]),(0,l._)("div",u,[e.numberOfWasp>=1?((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Wm)(w,{lineId:e.id,wasp:1},null,8,["lineId"])])):(0,l.kq)("",!0),2==e.numberOfWasp?((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)(w,{lineId:e.id,wasp:2},null,8,["lineId"])])):(0,l.kq)("",!0)]),(0,l._)("div",c,[(0,l._)("div",m,[(0,l.Wm)(P,{lineId:e.id,title:e.name},null,8,["lineId","title"])])])])])))),128)),e.configuratorAdditionalItems.colibri>0?((0,l.wg)(),(0,l.j4)(S,{key:0})):(0,l.kq)("",!0)],64)}const f=(0,l.Uk)("Total hardware"),b={class:"row q-gutter-sm"},v={class:"col"},h={class:"col"},w={class:"col"};function P(e,a,t,o,s,n){const r=(0,l.up)("q-item-label"),i=(0,l.up)("q-table"),u=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(u,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"q-mb-sm",overline:""},{default:(0,l.w5)((()=>[f])),_:1}),(0,l._)("div",b,[(0,l._)("div",v,[(0,l.Wm)(i,{columns:e.outputColumns,rows:e.outputRowsT1,"row-key":"id",dense:"",flat:"",bordered:"",separator:"cell","hide-bottom":"","hide-header":"",pagination:{rowsPerPage:0}},null,8,["columns","rows"])]),(0,l._)("div",h,[(0,l.Wm)(i,{columns:e.outputColumns,rows:e.outputRowsT2,"row-key":"id",dense:"",flat:"",bordered:"",separator:"cell","hide-bottom":"","hide-header":"",pagination:{rowsPerPage:0}},null,8,["columns","rows"])]),(0,l._)("div",w,[(0,l.Wm)(i,{columns:e.outputColumns,rows:e.outputRowsT3,"row-key":"id",dense:"",flat:"",bordered:"",separator:"cell","hide-bottom":"","hide-header":"",pagination:{rowsPerPage:0}},null,8,["columns","rows"])])])])),_:1})}var S=t(3961),O=(0,l.aZ)({name:"TotalHardware",setup(){const{lines:e,configuratorAdditionalItems:a}=(0,S.Z)(),t=[{name:"label",required:!0,label:"",align:"left",field:e=>e.label,sortable:!1},{name:"value",required:!0,label:"",align:"left",field:e=>e.value,sortable:!1}],l=[{label:"Number of WASPLAB",value:e.value.length},{label:"Number of WASP",value:e.value.length>0?e.value.map((e=>e.numberOfWasp)).reduce(((e,a)=>e+a)):0},{label:"Number of air incubators",value:e.value.length>0?e.value.map((e=>e.numberOfO2Incubator)).reduce(((e,a)=>e+a)):0},{label:"Number of CO2 incubators",value:e.value.length>0?e.value.map((e=>e.numberOfCO2Incubator)).reduce(((e,a)=>e+a)):0}],o=[{label:"Number of FLO",value:a.value.flo},{label:"Number of Radian",value:e.value.length>0?e.value.filter((e=>1==e.radian)).length:0},{label:"Number of Phenomatrix",value:e.value.length>0?e.value.filter((e=>1==e.phenomatrix)).length:0},{label:"Number of Colibrì",value:a.value.colibri}],s=[{label:"Number of Collaborative stations",value:e.value.length>0?e.value.filter((e=>1==e.collaborativeStation)).length:0},{label:"Number of Manual stations",value:a.value.manualStation},{label:"Number of Reading stations",value:a.value.readingStation},{label:"Number of Picking stations",value:a.value.pickingStation}];return{outputColumns:t,outputRowsT1:l,outputRowsT2:o,outputRowsT3:s}}}),k=t(7617),y=t(8055),I=t(3712),W=t(7794),D=t(1410),H=t.n(D);const x=(0,k.Z)(O,[["render",P]]);var _=x;H()(O,"components",{QCard:y.Z,QItemLabel:I.Z,QTable:W.Z});var C=t(3201);function N(e,a,t,o,s,n){const r=(0,l.up)("q-item-label"),i=(0,l.up)("q-td"),u=(0,l.up)("q-checkbox"),p=(0,l.up)("q-tr"),d=(0,l.up)("q-table"),c=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(c,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"q-mb-sm",overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,C.zw)(e.title),1)])),_:1}),(0,l.Wm)(d,{columns:e.tableColumns,rows:e.line,"row-key":"id",dense:"","hide-bottom":"",pagination:{rowsPerPage:0},separator:"cell"},{body:(0,l.w5)((e=>[(0,l.Wm)(p,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{key:"numberOfWasp",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,C.zw)(e.row.numberOfWasp),1)])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"numberOfO2Incubator",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,C.zw)(e.row.numberOfO2Incubator),1)])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"numberOfCO2Incubator",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,C.zw)(e.row.numberOfCO2Incubator),1)])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"collaborativeStation",props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{readonly:"",dense:"",modelValue:e.row.collaborativeStation,"onUpdate:modelValue":a=>e.row.collaborativeStation=a,disable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"radian",props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{readonly:"",dense:"",modelValue:e.row.radian,"onUpdate:modelValue":a=>e.row.radian=a,disable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"phenomatrix",props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{readonly:"",dense:"",modelValue:e.row.phenomatrix,"onUpdate:modelValue":a=>e.row.phenomatrix=a,disable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"waspOccupancyRate",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,C.zw)(e.row.waspOccupancyRate.toFixed(2))+" % ",1)])),_:2},1032,["props"]),(0,l.Wm)(i,{key:"wasplabOccupancyRate",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,C.zw)(isFinite(e.row.wasplabOccupancyRate)?e.row.wasplabOccupancyRate.toFixed(2)+" %":"N/A"),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])])),_:1})}var T=(0,l.aZ)({name:"ConfigLines",props:["title","lineId"],setup(e){const a=[{name:"numberOfWasp",label:"WASP",align:"left",field:e=>e.numberOfWasp},{name:"numberOfO2Incubator",label:"Air incubator",align:"left",field:e=>e.numberOfO2Incubator},{name:"numberOfCO2Incubator",label:"CO2 incubator",align:"left",field:e=>e.numberOfCO2Incubator},{name:"collaborativeStation",label:"Collaborative station",align:"left",field:e=>e.collaborativeStation},{name:"radian",label:"Radian",align:"left",field:e=>e.radian},{name:"phenomatrix",label:"Phenomatrix",align:"left",field:e=>e.phenomatrix},{name:"waspOccupancyRate",label:"WASP Occupancy rate",align:"left",field:e=>e.waspOccupancyRate},{name:"wasplabOccupancyRate",label:"WASPLAB Occupancy rate",align:"left",field:e=>e.wasplabOccupancyRate}],{lines:t}=(0,S.Z)(),l=t.value.filter((a=>a.id==e.lineId));return{tableColumns:a,line:l}}}),q=t(8231),Z=t(7282),E=t(9109);const R=(0,k.Z)(T,[["render",N]]);var U=R;function A(e,a,t,o,s,n){const r=(0,l.up)("apexchart"),i=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(i,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"bar",height:"350",options:e.chartOptions,series:e.series},null,8,["options","series"])])),_:1})}H()(T,"components",{QCard:y.Z,QItemLabel:I.Z,QTable:W.Z,QTr:q.Z,QTd:Z.Z,QCheckbox:E.Z});var F=(0,l.aZ)({name:"ColibriChart",setup(){const{primaryProtocols:e,lines:a,colibriTime:t,settings:l}=(0,S.Z)(),o=a.value.map((e=>e.numberOfCO2Incubator)).reduce(((e,a)=>e+a))+a.value.map((e=>e.numberOfO2Incubator)).reduce(((e,a)=>e+a)),s=[],n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];e.value.forEach((e=>{for(let t=0;t<e.volumes.length;t++){const o=a.value.map((a=>a.protocols.find((a=>a.id==e.id))?.wasp1Plates||0)).reduce(((e,a)=>e+a))+a.value.map((a=>a.protocols.find((a=>a.id==e.id))?.wasp2Plates||0)).reduce(((e,a)=>e+a)),s=o*(e.volumes[t]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0);let r=a.value.map((a=>a.protocols.find((a=>a.id==e.id))?.wasp1Slides||0)).reduce(((e,a)=>e+a))+a.value.map((a=>a.protocols.find((a=>a.id==e.id))?.wasp2Slides||0)).reduce(((e,a)=>e+a)),i=l.value.slides.streakingPatterns.find((e=>"slide_and_other"==e.pattern))?.timeInSeconds||0;0==e.waspData.platesPerSample&&(i=l.value.slides.streakingPatterns.find((e=>"slide_only"==e.pattern))?.timeInSeconds||0);const u=r*(e.volumes[t]||0)/100*i;let p=a.value.map((a=>a.protocols.find((a=>a.id==e.id))?.wasp1Broths||0)).reduce(((e,a)=>e+a))+a.value.map((a=>a.protocols.find((a=>a.id==e.id))?.wasp2Broths||0)).reduce(((e,a)=>e+a));const d=p*(e.volumes[t]||0)/100*l.value.broths.timeInSeconds,c=o*(e.radianPercentage/100),m=a.value.some((e=>e.radian))?c*(e.volumes[t]||0)/100*l.value.radian.timeInSeconds:0;if(n[t]+=s+u+d+m,n[t]>3600*(a.value.map((e=>e.numberOfWasp)).reduce(((e,a)=>e+a))||1)){let e=t+1;e>n.length-1&&(e=0),n[e]+=n[t]-3600*(a.value.map((e=>e.numberOfWasp)).reduce(((e,a)=>e+a))||1),n[t]=3600*(a.value.map((e=>e.numberOfWasp)).reduce(((e,a)=>e+a))||1)}}})),e.value.forEach((e=>{s.push({protocol:e,platesPerHour:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],platesTimePerHour:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],plates:0,totalPlatesTime:0});for(let t=0;t<s[s.length-1].platesPerHour.length;t++){const o=a.value.map((a=>a.protocols.find((a=>a.id==e.id))?.wasp1Plates||0)).reduce(((e,a)=>e+a))+a.value.map((a=>a.protocols.find((a=>a.id==e.id))?.wasp2Plates||0)).reduce(((e,a)=>e+a));s[s.length-1].platesPerHour[t]+=o*(e.volumes[t]||0)/100,s[s.length-1].platesTimePerHour[t]+=o*(e.volumes[t]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0),s[s.length-1].plates+=o*(e.volumes[t]||0)/100,s[s.length-1].totalPlatesTime+=o*(e.volumes[t]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0)}}));const r=n.reduce(((e,a)=>e+a));let i=0,u=0;s.forEach((e=>{u+=e.totalPlatesTime,i+=e.plates}));const p=u/r,d=u/i,c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],m=[];for(let S=0;S<n.length;S++)c[S]=n[S]*p/d;e.value.forEach((e=>{m.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});for(let a=0;a<c.length;a++){const t=s.map((e=>e.plates)).reduce(((e,a)=>e+a)),l=s.find((a=>a.protocol?.id==e.id))?.plates||0,o=0==l?0:l/t;m[m.length-1].plates[a]=c[a]*o}}));const g=[],f=[],b=[],v=[];e.value.forEach((e=>{const a=e.wasplabData.air.platesPerSample/(e.wasplabData.air.platesPerSample+e.wasplabData.co2.platesPerSample),t=e.wasplabData.co2.platesPerSample/(e.wasplabData.air.platesPerSample+e.wasplabData.co2.platesPerSample),l=m.find((a=>a.protocol.id==e.id)),o=e.wasplabData.air.readHours?.split(",").map((e=>Number(e)))||[],s=Math.max(...o),n=e.wasplabData.co2.readHours.split(",").map((e=>Number(e)))||[],r=Math.max(...n);if(g.push({protocol:e,positivePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],negativePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),f.push({protocol:e,positivePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],negativePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),b.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),v.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),l)for(let i=0;i<l.plates.length;i++){const u=new Date(Date.UTC(2017,0,1,i,0,0,0)),p=new Date(u.getTime()+60*(s-1)*60*1e3);g[g.length-1].positivePlates[p.getHours()]=l.plates[i]*a*(1-e.negativityRate/100),g[g.length-1].negativePlates[p.getHours()]=l.plates[i]*a*(e.negativityRate/100),o.forEach((e=>{const t=new Date(u.getTime()+60*(e-1)*60*1e3);b[b.length-1].plates[t.getHours()]+=l.plates[i]*a}));const d=new Date(u.getTime()+60*(r-1)*60*1e3);f[f.length-1].positivePlates[d.getHours()]=l.plates[i]*t*(1-e.negativityRate/100),f[f.length-1].negativePlates[d.getHours()]=l.plates[i]*t*(e.negativityRate/100),n.forEach((e=>{const a=new Date(u.getTime()+60*(e-1)*60*1e3);v[v.length-1].plates[a.getHours()]+=l.plates[i]*t}))}}));const h=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];g.forEach((e=>{for(let a=0;a<h.length;a++)h[a]+=e.positivePlates[a]})),f.forEach((e=>{for(let a=0;a<h.length;a++)h[a]+=e.positivePlates[a]}));const w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];g.forEach((e=>{for(let a=0;a<h.length;a++)w[a]+=e.negativePlates[a]})),f.forEach((e=>{for(let a=0;a<h.length;a++)w[a]+=e.negativePlates[a]}));const P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];b.forEach((e=>{for(let a=0;a<P.length;a++)P[a]+=e.plates[a]})),v.forEach((e=>{for(let a=0;a<P.length;a++)P[a]+=e.plates[a]}));const O=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(let S=0;S<n.length;S++)O[S]=Number(n[S]*p/d/l.value.incubator.loadingPlatesPerHour),O[S]=Number((100*O[S]).toFixed(2)),k[S]=Number(h[S]/(o>=1?l.value.incubator.unloadingMultiplePlatesPerHour:l.value.incubator.unloadingSinglePlatesPerHour)),k[S]=Number((100*k[S]).toFixed(2)),y[S]=Number(w[S]/(o>=1?l.value.incubator.unloadingMultiplePlatesPerHour:l.value.incubator.unloadingSinglePlatesPerHour)),y[S]=Number((100*y[S]).toFixed(2)),I[S]=Number(P[S]/l.value.incubator.recordingPlatesPerHour),I[S]=Number((100*I[S]).toFixed(2));for(let S=0;S<k.length-1;S++){const e=new Date(Date.UTC(2017,0,1,S,0,0,0)),a=new Date(e.getTime()+36e5);let t=a.getHours()-1;k[S]>=100&&(k[t]+=k[S]-100,k[S]=100,O[t]+=O[S],O[S]=0,I[t]+=I[S],I[S]=0,y[t]+=y[S],y[S]=0),k[S]+O[S]>=100&&(k[t]+=0,O[t]+=O[S]-(100-k[S]),O[S]=100-k[S],I[t]+=I[S],I[S]=0,y[t]+=y[S],y[S]=0),k[S]+O[S]+I[S]>=100&&(k[t]+=0,O[t]+=0,I[t]+=I[S]-(100-(k[S]+O[S])),I[S]=100-(k[S]+O[S]),y[t]+=y[S],y[S]=0),k[S]+O[S]+I[S]+y[S]>=100&&(k[t]+=0,O[t]+=0,I[t]+=0,y[t]+=y[S]-(100-(k[S]+O[S]+I[S])),y[S]=100-(k[S]+O[S]+I[S]))}let W=0;a.value.forEach((a=>{a.protocols.forEach((a=>{const t=e.value.find((e=>e.id==a.id));if(t){const e=t.idPercentage+t.astPercentage+t.astIdPercentage;W+=(a.co2Unloading+a.o2Unloading)*(e/100)}}))}));const D=t.value/W;for(let S=0;S<k.length;S++)if(k[S]=Number((3600*k[S]/100/3600*(o>=1?l.value.incubator.unloadingMultiplePlatesPerHour:l.value.incubator.unloadingSinglePlatesPerHour)*D/3600*100).toFixed(2)),k[S]>3600){let e=S+1;e>k.length-1&&(e=0),k[e]+=k[S]-3600,k[S]=3600}const H=[{name:"Unloading positive plates",data:k.map((e=>Number(e.toFixed(2)))),color:"#022A55"}],x=[];for(let S=1;S<25;S++)x.push(`${(S-1).toString().padStart(2,"0")}-${S.toString().padStart(2,"0")}`);const _={chart:{type:"bar",height:350,stacked:!0},xaxis:{categories:x},yaxis:{max:100}};return{chartOptions:_,series:H}}});const Q=(0,k.Z)(F,[["render",A]]);var V=Q;function L(e,a,t,o,s,n){const r=(0,l.up)("q-item-label"),i=(0,l.up)("apexchart"),u=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(u,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"q-mb-sm",overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("WASP "+(0,C.zw)(e.wasp),1)])),_:1}),(0,l.Wm)(i,{type:"bar",height:"350",options:e.chartOptions,series:e.series},null,8,["options","series"])])),_:1})}H()(F,"components",{QCard:y.Z});var z=(0,l.aZ)({name:"WaspChart",props:["wasp","lineId"],setup(e){const{primaryProtocols:a,lines:t,settings:l}=(0,S.Z)(),o=t.value.find((a=>a.id==e.lineId)),s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a.value.forEach((a=>{for(let t=0;t<a.volumes.length;t++){let n=o?.protocols.find((e=>e.id==a.id))?.wasp1Plates||0;2==e.wasp&&(n=o?.protocols.find((e=>e.id==a.id))?.wasp2Plates||0);const r=n*(a.volumes[t]||0)/100*(l.value.plates.streakingPatterns.find((e=>e.pattern==a.waspData.streakingPattern))?.timeInSeconds||0);let i=o?.protocols.find((e=>e.id==a.id))?.wasp1Slides||0;2==e.wasp&&(i=o?.protocols.find((e=>e.id==a.id))?.wasp2Slides||0);let u=l.value.slides.streakingPatterns.find((e=>"slide_and_other"==e.pattern))?.timeInSeconds||0;0==a.waspData.platesPerSample&&(u=l.value.slides.streakingPatterns.find((e=>"slide_only"==e.pattern))?.timeInSeconds||0);const p=i*(a.volumes[t]||0)/100*u;let d=o?.protocols.find((e=>e.id==a.id))?.wasp1Broths||0;2==e.wasp&&(d=o?.protocols.find((e=>e.id==a.id))?.wasp2Broths||0);const c=d*(a.volumes[t]||0)/100*l.value.broths.timeInSeconds,m=n*(a.radianPercentage/100),g=o?.radian?m*(a.volumes[t]||0)/100*l.value.radian.timeInSeconds:0;if(s[t]+=r+p+c+g,s[t]>3600){let e=t+1;e>s.length-1&&(e=0),s[e]+=s[t]-3600,s[t]=3600}}}));const n=[{name:"occupancy rate",data:s.map((e=>Number((e/3600*100).toFixed(2))))}],r=[];for(let u=1;u<25;u++)r.push(`${(u-1).toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`);const i={chart:{id:"vuechart-dailydata"},xaxis:{categories:r},yaxis:{max:100},colors:[function(){return"#022A55"}]};return{chartOptions:i,series:n}}});const M=(0,k.Z)(z,[["render",L]]);var B=M;function j(e,a,t,o,s,n){const r=(0,l.up)("q-item-label"),i=(0,l.up)("apexchart"),u=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(u,{class:"q-pa-sm q-mt-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"q-mb-sm",overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,C.zw)(e.title),1)])),_:1}),(0,l.Wm)(i,{type:"bar",height:"350",options:e.chartOptions,series:e.series},null,8,["options","series"])])),_:1})}H()(z,"components",{QCard:y.Z,QItemLabel:I.Z});var $=(0,l.aZ)({name:"WasplabChart",props:["lineId","title"],setup(e){const{primaryProtocols:a,lines:t,settings:l}=(0,S.Z)(),o=t.value.find((a=>a.id==e.lineId)),s=(o?.numberOfCO2Incubator||0)+(o?.numberOfO2Incubator||0),n=[],r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a.value.forEach((e=>{for(let a=0;a<e.volumes.length;a++){const t=(o?.protocols.find((a=>a.id==e.id))?.wasp1Plates||0)+(o?.protocols.find((a=>a.id==e.id))?.wasp2Plates||0),s=t*(e.volumes[a]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0);let n=(o?.protocols.find((a=>a.id==e.id))?.wasp1Slides||0)+(o?.protocols.find((a=>a.id==e.id))?.wasp2Slides||0),i=l.value.slides.streakingPatterns.find((e=>"slide_and_other"==e.pattern))?.timeInSeconds||0;0==e.waspData.platesPerSample&&(i=l.value.slides.streakingPatterns.find((e=>"slide_only"==e.pattern))?.timeInSeconds||0);const u=n*(e.volumes[a]||0)/100*i;let p=(o?.protocols.find((a=>a.id==e.id))?.wasp1Broths||0)+(o?.protocols.find((a=>a.id==e.id))?.wasp2Broths||0);const d=p*(e.volumes[a]||0)/100*l.value.broths.timeInSeconds,c=t*(e.radianPercentage/100),m=o?.radian?c*(e.volumes[a]||0)/100*l.value.radian.timeInSeconds:0;if(r[a]+=s+u+d+m,r[a]>3600*(o?.numberOfWasp||1)){let e=a+1;e>r.length-1&&(e=0),r[e]+=r[a]-3600*(o?.numberOfWasp||1),r[a]=3600*(o?.numberOfWasp||1)}}})),a.value.forEach((e=>{n.push({protocol:e,platesPerHour:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],platesTimePerHour:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],plates:0,totalPlatesTime:0});for(let a=0;a<n[n.length-1].platesPerHour.length;a++){const t=(o?.protocols.find((a=>a.id==e.id))?.wasp1Plates||0)+(o?.protocols.find((a=>a.id==e.id))?.wasp2Plates||0);n[n.length-1].platesPerHour[a]+=t*(e.volumes[a]||0)/100,n[n.length-1].platesTimePerHour[a]+=t*(e.volumes[a]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0),n[n.length-1].plates+=t*(e.volumes[a]||0)/100,n[n.length-1].totalPlatesTime+=t*(e.volumes[a]||0)/100*(l.value.plates.streakingPatterns.find((a=>a.pattern==e.waspData.streakingPattern))?.timeInSeconds||0)}}));const i=r.reduce(((e,a)=>e+a));let u=0,p=0;n.forEach((e=>{p+=e.totalPlatesTime,u+=e.plates}));const d=p/i,c=p/u,m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],g=[];for(let S=0;S<r.length;S++)m[S]=r[S]*d/c;a.value.forEach((e=>{g.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});for(let a=0;a<m.length;a++){const t=n.map((e=>e.plates)).reduce(((e,a)=>e+a)),l=n.find((a=>a.protocol?.id==e.id))?.plates||0,o=0==l?0:l/t;g[g.length-1].plates[a]=m[a]*o}}));const f=[],b=[],v=[],h=[];a.value.forEach((e=>{const a=e.wasplabData.air.platesPerSample/(e.wasplabData.air.platesPerSample+e.wasplabData.co2.platesPerSample),t=e.wasplabData.co2.platesPerSample/(e.wasplabData.air.platesPerSample+e.wasplabData.co2.platesPerSample),l=g.find((a=>a.protocol.id==e.id)),o=e.wasplabData.air.readHours?.split(",").map((e=>Number(e)))||[],s=Math.max(...o),n=e.wasplabData.co2.readHours.split(",").map((e=>Number(e)))||[],r=Math.max(...n);if(f.push({protocol:e,positivePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],negativePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),b.push({protocol:e,positivePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],negativePlates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),v.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),h.push({protocol:e,plates:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),l)for(let i=0;i<l.plates.length;i++){const u=new Date(Date.UTC(2017,0,1,i,0,0,0)),p=new Date(u.getTime()+60*(s-1)*60*1e3);f[f.length-1].positivePlates[p.getHours()]=l.plates[i]*a*(1-e.negativityRate/100),f[f.length-1].negativePlates[p.getHours()]=l.plates[i]*a*(e.negativityRate/100),o.forEach((e=>{const t=new Date(u.getTime()+60*(e-1)*60*1e3);v[v.length-1].plates[t.getHours()]+=l.plates[i]*a}));const d=new Date(u.getTime()+60*(r-1)*60*1e3);b[b.length-1].positivePlates[d.getHours()]=l.plates[i]*t*(1-e.negativityRate/100),b[b.length-1].negativePlates[d.getHours()]=l.plates[i]*t*(e.negativityRate/100),n.forEach((e=>{const a=new Date(u.getTime()+60*(e-1)*60*1e3);h[h.length-1].plates[a.getHours()]+=l.plates[i]*t}))}}));const w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];f.forEach((e=>{for(let a=0;a<w.length;a++)w[a]+=e.positivePlates[a]})),b.forEach((e=>{for(let a=0;a<w.length;a++)w[a]+=e.positivePlates[a]}));const P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];f.forEach((e=>{for(let a=0;a<w.length;a++)P[a]+=e.negativePlates[a]})),b.forEach((e=>{for(let a=0;a<w.length;a++)P[a]+=e.negativePlates[a]}));const O=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];v.forEach((e=>{for(let a=0;a<O.length;a++)O[a]+=e.plates[a]})),h.forEach((e=>{for(let a=0;a<O.length;a++)O[a]+=e.plates[a]}));const k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],W=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(let S=0;S<r.length;S++)k[S]=Number(r[S]*d/c)/l.value.incubator.loadingPlatesPerHour,k[S]=Number((100*k[S]).toFixed(2)),y[S]=Number(w[S]/(s>=1?l.value.incubator.unloadingMultiplePlatesPerHour:l.value.incubator.unloadingSinglePlatesPerHour)),y[S]=Number((100*y[S]).toFixed(2)),I[S]=Number(P[S]/(s>=1?l.value.incubator.unloadingMultiplePlatesPerHour:l.value.incubator.unloadingSinglePlatesPerHour)),I[S]=Number((100*I[S]).toFixed(2)),W[S]=Number(O[S]/l.value.incubator.recordingPlatesPerHour),W[S]=Number((100*W[S]).toFixed(2));for(let S=0;S<y.length-1;S++){const e=new Date(Date.UTC(2017,0,1,S,0,0,0)),a=new Date(e.getTime()+36e5);let t=a.getHours()-1;y[S]>=100&&(y[t]+=y[S]-100,y[S]=100,k[t]+=k[S],k[S]=0,W[t]+=W[S],W[S]=0,I[t]+=I[S],I[S]=0),y[S]+k[S]>=100&&(y[t]+=0,k[t]+=k[S]-(100-y[S]),k[S]=100-y[S],W[t]+=W[S],W[S]=0,I[t]+=I[S],I[S]=0),y[S]+k[S]+W[S]>=100&&(y[t]+=0,k[t]+=0,W[t]+=W[S]-(100-(y[S]+k[S])),W[S]=100-(y[S]+k[S]),I[t]+=I[S],I[S]=0),y[S]+k[S]+W[S]+I[S]>=100&&(y[t]+=0,k[t]+=0,W[t]+=0,I[t]+=I[S]-(100-(y[S]+k[S]+W[S])),I[S]=100-(y[S]+k[S]+W[S]))}const D=[{name:"Unloading positive plates",data:y.map((e=>Number(e.toFixed(2)))),color:"#022A55"},{name:"Loading",data:k.map((e=>Number(e.toFixed(2)))),color:"#7794FB"},{name:"Recording",data:W.map((e=>Number(e.toFixed(2)))),color:"#bede19"},{name:"Unloading negative plates",data:I.map((e=>Number(e.toFixed(2)))),color:"#A9A9A9"}],H=[];for(let S=1;S<25;S++)H.push(`${(S-1).toString().padStart(2,"0")}-${S.toString().padStart(2,"0")}`);const x={chart:{type:"bar",height:350,stacked:!0},xaxis:{categories:H},yaxis:{max:100}};return{chartOptions:x,series:D}}});const Y=(0,k.Z)($,[["render",j]]);var K=Y;H()($,"components",{QCard:y.Z,QItemLabel:I.Z});var G=(0,l.aZ)({name:"OutputView",components:{TotalHardware:_,OutputLine:U,ColibriChart:V,WaspChart:B,WasplabChart:K},setup(){const{lines:e,configuratorAdditionalItems:a}=(0,S.Z)();return{lines:e,configuratorAdditionalItems:a}}});const J=(0,k.Z)(G,[["render",g]]);var X=J}}]);
//# sourceMappingURL=output.4ac73e0c.js.map