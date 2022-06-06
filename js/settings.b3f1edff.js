"use strict";(self["webpackChunkcopan_sizing_tool"]=self["webpackChunkcopan_sizing_tool"]||[]).push([[571],{2436:function(e,l,s){s.r(l),s.d(l,{default:function(){return Ge}});var t=s(9269);const n=(0,t._)("div",{class:"text-h5 q-mt-sm"},"Settings",-1),a={class:"row"},u={class:"col-6"},i={class:"col-4"},r={class:"col-2"},o={class:"row"},d={class:"col"},m={class:"row"},c={class:"col-10"},p={class:"col-2"},g={class:"row"},b={class:"col"};function v(e,l,s,v,f,P){const y=(0,t.up)("PlatesSettingsVue"),V=(0,t.up)("SlidesSettingsVue"),S=(0,t.up)("BrothSettingsVue"),_=(0,t.up)("IncubatorSettingsVue"),I=(0,t.up)("ColibriSettingsVue"),h=(0,t.up)("FlowSettingsVue"),q=(0,t.up)("FteSettingsVue");return(0,t.wg)(),(0,t.iD)(t.HY,null,[n,(0,t._)("div",a,[(0,t._)("div",u,[(0,t.Wm)(y)]),(0,t._)("div",i,[(0,t.Wm)(V)]),(0,t._)("div",r,[(0,t.Wm)(S)])]),(0,t._)("div",o,[(0,t._)("div",d,[(0,t.Wm)(_)])]),(0,t._)("div",m,[(0,t._)("div",c,[(0,t.Wm)(I)]),(0,t._)("div",p,[(0,t.Wm)(h)])]),(0,t._)("div",g,[(0,t._)("div",b,[(0,t.Wm)(q)])])],64)}const f=(0,t.Uk)("Plates"),P={class:"row q-gutter-xs"},y={class:"col"},V={class:"col"},S={class:"col"},_={class:"col"};function I(e,l,s,n,a,u){const i=(0,t.up)("q-item-label"),r=(0,t.up)("q-input"),o=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(o,{class:"q-pa-sm q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,t.w5)((()=>[f])),_:1}),(0,t._)("div",P,[(0,t._)("div",y,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.plates.streakingPatterns[0].timeInSeconds,"onUpdate:modelValue":l[0]||(l[0]=l=>e.settings.plates.streakingPatterns[0].timeInSeconds=l),modelModifiers:{number:!0},label:"Pattern 1 (radian)",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",V,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.plates.streakingPatterns[1].timeInSeconds,"onUpdate:modelValue":l[1]||(l[1]=l=>e.settings.plates.streakingPatterns[1].timeInSeconds=l),modelModifiers:{number:!0},label:"Pattern 2",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",S,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.plates.streakingPatterns[2].timeInSeconds,"onUpdate:modelValue":l[2]||(l[2]=l=>e.settings.plates.streakingPatterns[2].timeInSeconds=l),modelModifiers:{number:!0},label:"Pattern 3",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",_,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.plates.streakingPatterns[3].timeInSeconds,"onUpdate:modelValue":l[3]||(l[3]=l=>e.settings.plates.streakingPatterns[3].timeInSeconds=l),modelModifiers:{number:!0},label:"Pattern 4",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])])])])),_:1})}var h=s(3961),q=(0,t.aZ)({name:"PlatesSettings",setup(){const{settings:e}=(0,h.Z)();return{settings:e}}}),w=s(7617),W=s(8055),M=s(3712),Z=s(6931),U=s(1410),k=s.n(U);const z=(0,w.Z)(q,[["render",I]]);var T=z;k()(q,"components",{QCard:W.Z,QItemLabel:M.Z,QInput:Z.Z});const Q=(0,t.Uk)("Slides"),D={class:"row q-gutter-xs"},H={class:"col"},C={class:"col"};function x(e,l,s,n,a,u){const i=(0,t.up)("q-item-label"),r=(0,t.up)("q-input"),o=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(o,{class:"q-pa-sm q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,t.w5)((()=>[Q])),_:1}),(0,t._)("div",D,[(0,t._)("div",H,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.slides.streakingPatterns[0].timeInSeconds,"onUpdate:modelValue":l[0]||(l[0]=l=>e.settings.slides.streakingPatterns[0].timeInSeconds=l),modelModifiers:{number:!0},label:"Slide only",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",C,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.slides.streakingPatterns[1].timeInSeconds,"onUpdate:modelValue":l[1]||(l[1]=l=>e.settings.slides.streakingPatterns[1].timeInSeconds=l),modelModifiers:{number:!0},label:"Slide and other",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])])])])),_:1})}var A=(0,t.aZ)({name:"SlidesSettings",setup(){const{settings:e}=(0,h.Z)();return{settings:e}}});const F=(0,w.Z)(A,[["render",x]]);var L=F;k()(A,"components",{QCard:W.Z,QItemLabel:M.Z,QInput:Z.Z});const j=(0,t.Uk)("Broths"),B={class:"row q-gutter-xs"},R={class:"col"};function E(e,l,s,n,a,u){const i=(0,t.up)("q-item-label"),r=(0,t.up)("q-input"),o=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(o,{class:"q-pa-sm q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,t.w5)((()=>[j])),_:1}),(0,t._)("div",B,[(0,t._)("div",R,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.broths.timeInSeconds,"onUpdate:modelValue":l[0]||(l[0]=l=>e.settings.broths.timeInSeconds=l),modelModifiers:{number:!0},label:"Time",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])])])])),_:1})}var Y=(0,t.aZ)({name:"BrothSettings",setup(){const{settings:e}=(0,h.Z)();return{settings:e}}});const G=(0,w.Z)(Y,[["render",E]]);var J=G;k()(Y,"components",{QCard:W.Z,QItemLabel:M.Z,QInput:Z.Z});const K=(0,t.Uk)("Incubator"),N={class:"row q-gutter-xs"},O={class:"col"},X={class:"col"},$={class:"col"},ee={class:"col"},le={class:"col"};function se(e,l,s,n,a,u){const i=(0,t.up)("q-item-label"),r=(0,t.up)("q-input"),o=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(o,{class:"q-pa-sm q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,t.w5)((()=>[K])),_:1}),(0,t._)("div",N,[(0,t._)("div",O,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.incubator.loadingPlatesPerHour,"onUpdate:modelValue":l[0]||(l[0]=l=>e.settings.incubator.loadingPlatesPerHour=l),modelModifiers:{number:!0},label:"Loading",hint:"plates/hour","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",X,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.incubator.recordingPlatesPerHour,"onUpdate:modelValue":l[1]||(l[1]=l=>e.settings.incubator.recordingPlatesPerHour=l),modelModifiers:{number:!0},label:"Recording",hint:"plates/hour","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",$,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.incubator.unloadingSinglePlatesPerHour,"onUpdate:modelValue":l[2]||(l[2]=l=>e.settings.incubator.unloadingSinglePlatesPerHour=l),modelModifiers:{number:!0},label:"Unloading (1)",hint:"plates/hour","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",ee,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.incubator.unloadingMultiplePlatesPerHour,"onUpdate:modelValue":l[3]||(l[3]=l=>e.settings.incubator.unloadingMultiplePlatesPerHour=l),modelModifiers:{number:!0},label:"Unloading (1+)",hint:"plates/hour","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",le,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.incubator.incubatorSafetyMargin,"onUpdate:modelValue":l[4]||(l[4]=l=>e.settings.incubator.incubatorSafetyMargin=l),modelModifiers:{number:!0},label:"Safety margin",hint:"%","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])])])])),_:1})}var te=(0,t.aZ)({name:"IncubatorSettings",setup(){const{settings:e}=(0,h.Z)();return{settings:e}}});const ne=(0,w.Z)(te,[["render",se]]);var ae=ne;k()(te,"components",{QCard:W.Z,QItemLabel:M.Z,QInput:Z.Z});const ue=(0,t.Uk)("Colibrì"),ie={class:"row q-gutter-xs"},re={class:"col"},oe={class:"col"},de={class:"col"},me={class:"col"},ce={class:"col"};function pe(e,l,s,n,a,u){const i=(0,t.up)("q-item-label"),r=(0,t.up)("q-input"),o=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(o,{class:"q-pa-sm q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,t.w5)((()=>[ue])),_:1}),(0,t._)("div",ie,[(0,t._)("div",re,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.colibri.IDTimeInSeconds,"onUpdate:modelValue":l[0]||(l[0]=l=>e.settings.colibri.IDTimeInSeconds=l),modelModifiers:{number:!0},label:"ID",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",oe,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.colibri.ASTTimeInSeconds,"onUpdate:modelValue":l[1]||(l[1]=l=>e.settings.colibri.ASTTimeInSeconds=l),modelModifiers:{number:!0},label:"AST",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",de,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.colibri.ASTIDTimeInSeconds,"onUpdate:modelValue":l[2]||(l[2]=l=>e.settings.colibri.ASTIDTimeInSeconds=l),modelModifiers:{number:!0},label:"AST + ID",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",me,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.colibri.ASTIDPurityTimeInSeconds,"onUpdate:modelValue":l[3]||(l[3]=l=>e.settings.colibri.ASTIDPurityTimeInSeconds=l),modelModifiers:{number:!0},label:"AST + ID + Purity plates",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",ce,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.colibri.ASTPurityTimeInSeconds,"onUpdate:modelValue":l[4]||(l[4]=l=>e.settings.colibri.ASTPurityTimeInSeconds=l),modelModifiers:{number:!0},label:"AST + Purity plates",hint:"seconds","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])])])])),_:1})}var ge=(0,t.aZ)({name:"ColibriSettings",setup(){const{settings:e}=(0,h.Z)();return{settings:e}}});const be=(0,w.Z)(ge,[["render",pe]]);var ve=be;k()(ge,"components",{QCard:W.Z,QItemLabel:M.Z,QInput:Z.Z});const fe=(0,t.Uk)("Flow"),Pe={class:"row q-gutter-xs"},ye={class:"col"};function Ve(e,l,s,n,a,u){const i=(0,t.up)("q-item-label"),r=(0,t.up)("q-input"),o=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(o,{class:"q-pa-sm q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,t.w5)((()=>[fe])),_:1}),(0,t._)("div",Pe,[(0,t._)("div",ye,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.flow.platesPerHour,"onUpdate:modelValue":l[0]||(l[0]=l=>e.settings.flow.platesPerHour=l),modelModifiers:{number:!0},label:"Plates/hour",hint:"plates/hour","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])])])])),_:1})}var Se=(0,t.aZ)({name:"FlowSettings",setup(){const{settings:e}=(0,h.Z)();return{settings:e}}});const _e=(0,w.Z)(Se,[["render",Ve]]);var Ie=_e;k()(Se,"components",{QCard:W.Z,QItemLabel:M.Z,QInput:Z.Z});const he=(0,t.Uk)("FTE"),qe={class:"row q-gutter-xs"},we={class:"col"},We={class:"col"},Me={class:"col"},Ze={class:"col"},Ue=(0,t._)("div",{class:"col"},null,-1),ke=(0,t._)("div",{class:"col"},null,-1),ze=(0,t._)("div",{class:"col"},null,-1),Te={class:"row q-gutter-xs q-mt-sm"},Qe={class:"col"},De={class:"col"},He={class:"col"},Ce={class:"col"},xe={class:"col"},Ae={class:"col"},Fe={class:"col"};function Le(e,l,s,n,a,u){const i=(0,t.up)("q-item-label"),r=(0,t.up)("q-input"),o=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(o,{class:"q-pa-sm q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"q-mb-sm",overline:""},{default:(0,t.w5)((()=>[he])),_:1}),(0,t._)("div",qe,[(0,t._)("div",we,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.manualStreakingSecondsPerPlate,"onUpdate:modelValue":l[0]||(l[0]=l=>e.settings.fte.manualStreakingSecondsPerPlate=l),modelModifiers:{number:!0},label:"Manual streaking",hint:"sec/plate","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",We,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.screeningSecondsPerPlate,"onUpdate:modelValue":l[1]||(l[1]=l=>e.settings.fte.screeningSecondsPerPlate=l),modelModifiers:{number:!0},label:"Screening",hint:"sec/plate","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",Me,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.readingSecondsPerPlate,"onUpdate:modelValue":l[2]||(l[2]=l=>e.settings.fte.readingSecondsPerPlate=l),modelModifiers:{number:!0},label:"Reading",hint:"sec/plate","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",Ze,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.pickingSecondsPerPlate,"onUpdate:modelValue":l[3]||(l[3]=l=>e.settings.fte.pickingSecondsPerPlate=l),modelModifiers:{number:!0},label:"Picking",hint:"sec/plate","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),Ue,ke,ze]),(0,t._)("div",Te,[(0,t._)("div",Qe,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.productivitySecondsPerPlate,"onUpdate:modelValue":l[4]||(l[4]=l=>e.settings.fte.productivitySecondsPerPlate=l),modelModifiers:{number:!0},label:"Productivity",hint:"sec/plate","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",De,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.phenomatrixSecondsPer30Plates,"onUpdate:modelValue":l[5]||(l[5]=l=>e.settings.fte.phenomatrixSecondsPer30Plates=l),modelModifiers:{number:!0},label:"Phenomatrix",hint:"sec/30 plates","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",He,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.waspMinutesPerHour,"onUpdate:modelValue":l[6]||(l[6]=l=>e.settings.fte.waspMinutesPerHour=l),modelModifiers:{number:!0},label:"Wasp",hint:"minutes/hours","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",Ce,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.wasplabMinutesPerIncubatorPerDay,"onUpdate:modelValue":l[7]||(l[7]=l=>e.settings.fte.wasplabMinutesPerIncubatorPerDay=l),modelModifiers:{number:!0},label:"Wasplab",hint:"minutes/hours","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",xe,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.radianMinutesPerDay,"onUpdate:modelValue":l[8]||(l[8]=l=>e.settings.fte.radianMinutesPerDay=l),modelModifiers:{number:!0},label:"Radian",hint:"minutes/day","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",Ae,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.colibriMinutesPerDay,"onUpdate:modelValue":l[9]||(l[9]=l=>e.settings.fte.colibriMinutesPerDay=l),modelModifiers:{number:!0},label:"Colibrì",hint:"minutes/day","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])]),(0,t._)("div",Fe,[(0,t.Wm)(r,{dense:"",filled:"",type:"number",modelValue:e.settings.fte.flowMinutesPerWorkingHour,"onUpdate:modelValue":l[10]||(l[10]=l=>e.settings.fte.flowMinutesPerWorkingHour=l),modelModifiers:{number:!0},label:"Flow",hint:"minutes/hour","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type a valid numeric value"]},null,8,["modelValue","rules"])])])])),_:1})}var je=(0,t.aZ)({name:"FteSettings",setup(){const{settings:e}=(0,h.Z)();return{settings:e}}});const Be=(0,w.Z)(je,[["render",Le]]);var Re=Be;k()(je,"components",{QCard:W.Z,QItemLabel:M.Z,QInput:Z.Z});var Ee=(0,t.aZ)({name:"SettingsView",components:{PlatesSettingsVue:T,SlidesSettingsVue:L,BrothSettingsVue:J,IncubatorSettingsVue:ae,ColibriSettingsVue:ve,FlowSettingsVue:Ie,FteSettingsVue:Re}});const Ye=(0,w.Z)(Ee,[["render",v]]);var Ge=Ye}}]);
//# sourceMappingURL=settings.b3f1edff.js.map