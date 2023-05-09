(function(){"use strict";var e={496:function(e,t,i){var s=i(9242),a=i(3396);const n={id:"screen"},o=["disabled"];function l(e,t,i,s,l,r){const c=(0,a.up)("VitalSignCamera"),d=(0,a.up)("bounding-box"),u=(0,a.up)("face-mesh-view"),h=(0,a.up)("status"),v=(0,a.up)("condition-checklist"),f=(0,a.up)("health-result");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(c,{ref:"vscam",device:e.devices[e.cameraIndex].id,class:"camera",isActive:e.isActive,userInfo:e.userInfo,config:e.config,onOnVideoFrameProcessed:e.onVideoFrameProcessed},null,8,["device","isActive","userInfo","config","onOnVideoFrameProcessed"]),void 0!==e.facebox&&e.isActive?((0,a.wg)(),(0,a.j4)(d,{key:0,facebox:e.facebox,cameraIndex:e.cameraIndex},null,8,["facebox","cameraIndex"])):(0,a.kq)("",!0),void 0!==e.facebox&&e.isActive?((0,a.wg)(),(0,a.j4)(u,{key:1,landmarks:e.landmarks,cameraIndex:e.cameraIndex},null,8,["landmarks","cameraIndex"])):(0,a.kq)("",!0),e.healthResult&&3==e.healthResult.stage?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"startButton startText",onClick:t[0]||(t[0]=(...t)=>e.startScanning&&e.startScanning(...t)),disabled:!e.disabled}," Start ",8,o)):(0,a.kq)("",!0),e.healthResult&&3!==e.healthResult.stage?((0,a.wg)(),(0,a.j4)(h,{key:3,healtResult:e.healthResult},null,8,["healtResult"])):(0,a.kq)("",!0),void 0===e.conditions||3!=e.healthResult?.stage||e.showResult?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(v,{key:4,conditions:e.conditions},null,8,["conditions"])),e.healthResult?.health?((0,a.wg)(),(0,a.j4)(f,{key:5,healthResult:e.healthResult?.health,showResult:e.showResult,onHideResult:e.hideResult},null,8,["healthResult","showResult","onHideResult"])):(0,a.kq)("",!0),e.devices.length>1?((0,a.wg)(),(0,a.iD)("button",{key:6,class:"cameraSwitchButton",onClick:t[1]||(t[1]=(...t)=>e.switchCamera&&e.switchCamera(...t))},"Switch Camera")):(0,a.kq)("",!0)])}var r=i(5178),c=i(7139);const d={class:"face-mesh-container",ref:"container"};function u(e,t,i,s,n,o){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("canvas",{ref:"canvas",style:(0,c.j5)(e.style)},null,4)],512)}var h=i(5726),v=i(9880),f=i(7309);const m=(0,a.aZ)({name:"face-mesh-view",props:{landmarks:Object,cameraIndex:Number},setup(){return{style:{}}},data(){return{transform:"scaleX(-1)"}},mounted(){this.changeTransform},watch:{landmarks(){this.updateStyle(),this.redraw()},aspectRatio(){this.updateStyle(),this.redraw()},cameraIndex(){this.changeTransform()}},methods:{changeTransform(){setTimeout((()=>{const e=f.Z.browserDetails.browser;var t;t="firefox"==e?document.getElementsByTagName("video")[0].srcObject?.getVideoTracks()[0].getSettings().facingMode:document.getElementsByTagName("video")[0].srcObject?.getVideoTracks()[0].getCapabilities().facingMode,t&&"environment"===t[0]?this.transform="none":this.transform="scaleX(-1)"}),1e3)},updateStyle(){const e=document.getElementsByTagName("video")[0].srcObject.getVideoTracks()[0];var t=0;if(e){const i=e.getSettings().height,s=e.getSettings().width;t=s&&i?s/i:0}let i={width:void 0,height:void 0,left:"0%",top:"0%",aspectRatio:t};const s=this.$parent?.$refs.vscam.$refs.video;let a=s.clientWidth/s.clientHeight;if(a<t){const e=(a-t)/a/2*100;i.left=`${e}%`,i.width=2*-e+100+"%"}else i.top=(1/a-1/t)*a/2*100+"%",i.width="100%";this.style=i},redraw(){let e=this.$refs.canvas;e.width=640,e.height=480;const t=e.getContext("2d");null!==t&&(t.save(),t.clearRect(0,0,e.width,e.height),(0,h.drawConnectors)(t,this.landmarks,v.FACEMESH_TESSELATION,{color:"lightgreen",lineWidth:.2}),t.restore())}}}),g=()=>{(0,s.sj)((e=>({b8fc0df8:e.transform})))},p=m.setup;m.setup=p?(e,t)=>(g(),p(e,t)):g;var k=m,b=i(89);const w=(0,b.Z)(k,[["render",u],["__scopeId","data-v-ef27425c"]]);var R=w;const y={class:"container"},S={class:"countdown"},x={class:"text"};function _(e,t,i,s,n,o){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("p",S,(0,c.zw)(e.number),1),(0,a._)("p",x,(0,c.zw)(e.text),1)])}var j=(0,a.aZ)({setup(){},props:{healtResult:{type:Object}},computed:{number(){return this.healtResult?this.healtResult.remainingTime.toFixed(0):-1},text(){let e="";switch(this.healtResult?.stage){case r.US.CollectingData:e="Scanning...";break;case r.US.AnalyzingData:e="Analyzing...";break;case r.US.WaitingData:e="Loading...";break}return e}}});const I=(0,b.Z)(j,[["render",_],["__scopeId","data-v-3faf1078"]]);var O=I;const C=e=>((0,a.dD)("data-v-3fd465d6"),e=e(),(0,a.Cn)(),e),D={key:0,class:"container"},T=C((()=>(0,a._)("div",{class:"section"},"Scanning Conditions",-1))),W={class:"condition"},A={class:"condition"},q={class:"condition"},P={class:"condition"},H={class:"condition"},V={class:"condition"};function B(e,t,i,s,n,o){const l=(0,a.up)("condition-icon");return i.conditions?((0,a.wg)(),(0,a.iD)("div",D,[T,(0,a._)("p",W,[(0,a.Wm)(l,{class:"icon",fulfilled:i.conditions.lighting},null,8,["fulfilled"]),(0,a.Uk)(" Lighting ")]),(0,a._)("p",A,[(0,a.Wm)(l,{class:"icon",fulfilled:i.conditions.distance},null,8,["fulfilled"]),(0,a.Uk)(" Distance ")]),(0,a._)("p",q,[(0,a.Wm)(l,{class:"icon",fulfilled:i.conditions.centered},null,8,["fulfilled"]),(0,a.Uk)(" Centered ")]),(0,a._)("p",P,[(0,a.Wm)(l,{class:"icon",fulfilled:i.conditions.movement},null,8,["fulfilled"]),(0,a.Uk)(" Movement ")]),(0,a._)("p",H,[(0,a.Wm)(l,{class:"icon",fulfilled:i.conditions.frameRate},null,8,["fulfilled"]),(0,a.Uk)(" Frame Rate ")]),(0,a._)("p",V,[(0,a.Wm)(l,{class:"icon",fulfilled:i.conditions.serverReady},null,8,["fulfilled"]),(0,a.Uk)(" Server Ready ")])])):(0,a.kq)("",!0)}var F=i.p+"img/checkmark.faaf8c01.svg",M=i.p+"img/crossmark.93784a98.svg";const Z={key:0,src:F},N={key:1,src:M};function E(e,t,i,s,n,o){return i.fulfilled?((0,a.wg)(),(0,a.iD)("img",Z)):((0,a.wg)(),(0,a.iD)("img",N))}var $={name:"condtion-icon",props:{fulfilled:{type:Boolean,default:!1}},setup(){}};const z=(0,b.Z)($,[["render",E],["__scopeId","data-v-3dcaf130"]]);var U=z,L={setup(){},props:{conditions:Object},components:{ConditionIcon:U}};const X=(0,b.Z)(L,[["render",B],["__scopeId","data-v-3fd465d6"]]);var G=X;const Q=e=>((0,a.dD)("data-v-10377171"),e=e(),(0,a.Cn)(),e),K={key:0,class:"container"},Y=Q((()=>(0,a._)("div",{class:"section"},"Vital Signs",-1))),J=Q((()=>(0,a._)("div",{class:"section"},"Holistic Analysis",-1))),ee={key:12,class:"section"},te=Q((()=>(0,a._)("div",{class:"section"},"Cardiovascular Risk",-1))),ie={key:13,class:"section"},se=Q((()=>(0,a._)("div",{class:"sec"},"Covid",-1))),ae={key:14,class:"section"},ne=Q((()=>(0,a._)("div",{class:"sec"},"Scan Parameters",-1)));function oe(e,t,i,s,n,o){const l=(0,a.up)("vital-signs");return e.showResult?((0,a.wg)(),(0,a.iD)("div",K,[(0,a._)("div",{class:"close",onClick:t[0]||(t[0]=(...t)=>e.hideResult&&e.hideResult(...t))},"[x]"),Y,(0,a.Wm)(l,{name:"Heart Rate",value:e.vs?.heartRate},null,8,["value"]),(0,a.Wm)(l,{name:"SPO2",value:e.vs?.spo2},null,8,["value"]),(0,a.Wm)(l,{name:"IBI",value:e.vs?.ibi},null,8,["value"]),e.vs?.stress?((0,a.wg)(),(0,a.j4)(l,{key:0,name:"Stress",value:e.vs.stress},null,8,["value"])):(0,a.kq)("",!0),e.vs?.respiratoryRate?((0,a.wg)(),(0,a.j4)(l,{key:1,name:"Respiratory Rate",value:e.vs.respiratoryRate},null,8,["value"])):(0,a.kq)("",!0),e.vs?.hrvRmssd?((0,a.wg)(),(0,a.j4)(l,{key:2,name:"HRV RMSSD",value:e.vs.hrvRmssd},null,8,["value"])):(0,a.kq)("",!0),e.vs?.hrvSdnn?((0,a.wg)(),(0,a.j4)(l,{key:3,name:"HRV SDNN",value:e.vs.hrvSdnn},null,8,["value"])):(0,a.kq)("",!0),e.vs?.temperature?((0,a.wg)(),(0,a.j4)(l,{key:4,name:"Temperature",value:e.vs.temperature},null,8,["value"])):(0,a.kq)("",!0),e.vs?.bloodPressure?((0,a.wg)(),(0,a.j4)(l,{key:5,name:"BloodPressure",value:e.vs.bloodPressure},null,8,["value"])):(0,a.kq)("",!0),e.vs?.bloodPressureSystolic?((0,a.wg)(),(0,a.j4)(l,{key:6,name:"Blood Pressure Systolic",value:e.vs.bloodPressureSystolic},null,8,["value"])):(0,a.kq)("",!0),e.vs?.bloodPressureDiastolic?((0,a.wg)(),(0,a.j4)(l,{key:7,name:"Blood Pressure Diastolic",value:e.vs.bloodPressureDiastolic},null,8,["value"])):(0,a.kq)("",!0),e.vs?.facialSkinAge?((0,a.wg)(),(0,a.j4)(l,{key:8,name:"Facial Skin Age",value:e.vs.facialSkinAge},null,8,["value"])):(0,a.kq)("",!0),e.vs?.bloodAlcohol?((0,a.wg)(),(0,a.j4)(l,{key:9,name:"Blood Alcohol",value:e.vs.bloodAlcohol},null,8,["value"])):(0,a.kq)("",!0),e.vs?.bloodSugar?((0,a.wg)(),(0,a.j4)(l,{key:10,name:"Blood Sugar",value:e.vs.bloodSugar},null,8,["value"])):(0,a.kq)("",!0),J,(0,a.Wm)(l,{name:"BMI",value:e.holistic?.bmi},null,8,["value"]),e.holistic?.generalWellness?((0,a.wg)(),(0,a.j4)(l,{key:11,name:"General Wellness",value:e.holistic.generalWellness},null,8,["value"])):(0,a.kq)("",!0),e.cardio?((0,a.wg)(),(0,a.iD)("div",ee,[te,(0,a.Wm)(l,{name:"General",value:e.cardio.generalRisk},null,8,["value"]),(0,a.Wm)(l,{name:"Congestive Heart Failure",value:e.cardio.congestiveHeartFailure},null,8,["value"]),(0,a.Wm)(l,{name:"Coronary Heart Disease",value:e.cardio.coronaryHeartDisease},null,8,["value"]),(0,a.Wm)(l,{name:"Intermittent Claudification",value:e.cardio.intermittentClaudication},null,8,["value"]),(0,a.Wm)(l,{name:"Stroke",value:e.cardio.stroke},null,8,["value"])])):(0,a.kq)("",!0),e.covid?((0,a.wg)(),(0,a.iD)("div",ie,[se,(0,a.Wm)(l,{name:"Risk",value:e.covid.covidRisk},null,8,["value"])])):(0,a.kq)("",!0),e.healthResult?.scanParameters?((0,a.wg)(),(0,a.iD)("div",ae,[ne,(0,a.Wm)(l,{name:"Signal Quality",value:e.healthResult.scanParameters.signalQuality},null,8,["value"])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)}const le={class:"vitalSign"},re={class:"vitalSignName"},ce={class:"vitalSignValueView"},de={class:"vitalSignValue"};function ue(e,t,i,s,n,o){return(0,a.wg)(),(0,a.iD)("div",le,[(0,a._)("div",re,(0,c.zw)(i.name),1),(0,a._)("div",ce,[(0,a._)("div",de,(0,c.zw)(i.value),1)])])}var he={setup(){},props:{name:String,value:[Number,String]}};const ve=(0,b.Z)(he,[["render",ue],["__scopeId","data-v-a3fb7d3e"]]);var fe=ve,me=(0,a.aZ)({setup(){},emits:["hideResult"],props:{healthResult:Object,showResult:Boolean},components:{VitalSigns:fe},computed:{vs(){return this.healthResult?.vitalSigns},holistic(){return this.healthResult?.holisticHealth},cardio(){return this.healthResult?.risks?.cardiovascularRisks},covid(){return this.healthResult?.risks?.covidRisk}},methods:{hideResult(){this.$emit("hideResult")}}});const ge=(0,b.Z)(me,[["render",oe],["__scopeId","data-v-10377171"]]);var pe=ge;const ke={class:"container",ref:"container"};function be(e,t,i,s,n,o){return(0,a.wg)(),(0,a.iD)("div",ke,[(0,a._)("div",{style:(0,c.j5)(e.containerStyle)},[(0,a._)("div",{style:(0,c.j5)(e.bboxStyle)},null,4)],4)],512)}var we=(0,a.aZ)({props:{facebox:Object,cameraIndex:Number},setup(){},mounted(){this.changeTransform()},data(){return{width:0,height:0,left:0,top:0,videoWidth:0,videoHeight:0,videoOffsetTop:0,videoOffsetLeft:0,additionalWidth:0,additionalHeight:0,containerAspectRatio:0,aspectRatio:0,transform:"scaleX(-1)"}},watch:{facebox(){const e=document.getElementsByTagName("video")[0].srcObject.getVideoTracks()[0];var t,i;if(e&&(i=e.getSettings().height,t=e.getSettings().width,this.aspectRatio=t&&i?t/i:0),!this.facebox||!this.$parent)return;const s=this.$parent.$refs.vscam.$refs.video;this.containerAspectRatio=s.clientWidth/s.clientHeight,this.containerAspectRatio<this.aspectRatio?(this.videoOffsetLeft=(this.containerAspectRatio-this.aspectRatio)/this.containerAspectRatio/2*100,this.videoWidth=100+2*Math.abs(this.videoOffsetLeft),this.videoOffsetTop=0,this.videoHeight=100):(this.videoOffsetTop=(1/this.containerAspectRatio-1/this.aspectRatio)*this.containerAspectRatio/2*100,this.videoHeight=100+2*Math.abs(this.videoOffsetTop),this.videoOffsetLeft=0,this.videoWidth=100),i&&t&&(this.width=100*this.facebox.width,this.height=100*this.facebox.height,this.left=100*this.facebox.xCenter-this.width/2,this.top=100*this.facebox.yCenter-this.height/2)},cameraIndex(){this.changeTransform()}},methods:{changeTransform(){setTimeout((()=>{const e=f.Z.browserDetails.browser;var t;t="firefox"==e?document.getElementsByTagName("video")[0].srcObject?.getVideoTracks()[0].getSettings().facingMode:document.getElementsByTagName("video")[0].srcObject?.getVideoTracks()[0].getCapabilities().facingMode,t&&"environment"===t[0]?this.transform="none":this.transform="scaleX(-1)"}),1e3)}},computed:{containerStyle(){const e={position:"absolute",left:this.videoOffsetLeft+"%",top:this.videoOffsetTop+"%",width:this.videoWidth+"%",height:this.videoHeight+"%",aspectRatio:this.aspectRatio,transform:this.transform};return e},bboxStyle(){const e={position:"absolute",borderStyle:"solid",borderWidth:"8px",borderColor:"#198754",left:this.left+"%",top:this.top+"%",width:this.width+"%",height:this.height+"%"};return e}}});const Re=(0,b.Z)(we,[["render",be],["__scopeId","data-v-431732f8"]]);var ye=Re,Se=(0,a.aZ)({setup(){},data(){return{isActive:!1,healthResult:void 0,frameSize:void 0,facebox:void 0,conditions:void 0,userInfo:{age:30,gender:r.Y0.Male,userId:"9288f39d-c576-42aa-b9bf-c47c528d7bd0"},showResult:!1,disabled:!1,config:{serverId:r.ag.AwsProdEnterprise,apiKey:"cc86zjHkew5zIFCg8hkkF5TMP3njd2kF1jAhsGHw"},landmarks:void 0,cameraIndex:0,devices:[{text:"",id:"",deviceIndex:0}],checkDevice:void 0}},components:{VitalSignCamera:r.eA,Status:O,ConditionChecklist:G,HealthResult:pe,BoundingBox:ye,FaceMeshView:R},methods:{startScanning(){const e=this.$refs.vscam;e.startScanning(),this.showResult=!0},onVideoFrameProcessed(e){const{videoFrameInfo:t,facebox:i,healthResult:s,scanConditions:a,landmarks:n}=e;this.conditions=a,this.healthResult=s,this.facebox=i,this.frameSize=t,this.landmarks=n,this.disabled=!!this.conditions&&Object.values(this.conditions).every((e=>e))},hideResult(){this.showResult=!1},switchCamera(){this.cameraIndex=(this.cameraIndex+1)%this.devices.length}},async mounted(){this.isActive=!0,this.checkDevice=setInterval((async()=>{let e=await navigator.mediaDevices.enumerateDevices();e=e.filter((e=>"videoinput"===e.kind)),this.devices=e.map(((e,t)=>({text:e.label,id:e.deviceId,deviceIndex:t}))),this.cameraIndex=0}),1e3)},watch:{devices(){""!==this.devices[0].text&&(clearInterval(this.checkDevice),this.checkDevice=void 0)}}});const xe=(0,b.Z)(Se,[["render",l],["__scopeId","data-v-7fb9cda8"]]);var _e=xe;(0,s.ri)(_e).mount("#app")}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,s,a,n){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],n=e[d][2];for(var l=!0,r=0;r<s.length;r++)(!1&n||o>=n)&&Object.keys(i.O).every((function(e){return i.O[e](s[r])}))?s.splice(r--,1):(l=!1,n<o&&(o=n));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,a,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/vue-live-demo/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,o=s[0],l=s[1],r=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in l)i.o(l,a)&&(i.m[a]=l[a]);if(r)var d=r(i)}for(t&&t(s);c<o.length;c++)n=o[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},s=self["webpackChunkvue_vital_sign_app"]=self["webpackChunkvue_vital_sign_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(496)}));s=i.O(s)})();
//# sourceMappingURL=app.98db9042.js.map