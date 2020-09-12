(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"002a":function(e,t,n){},"07bb":function(e,t,n){},3286:function(e,t,n){},"3b0c":function(e,t,n){"use strict";n.r(t),function(e){var t,a=n("bd86"),r=(n("cadf"),n("551c"),n("097d"),t={Au:{name:"Gold",color:"hsl(60,100%,60%)",show:!0},Cu:{name:"Copper",color:"hsl(180,80%,50%)",show:!0},Fe:{name:"Iron",color:"hsl(30,50%,50%)",show:!0},Zn:{name:"Zinc",color:"hsl(0,30%,70%)",show:!0},Ag:{name:"Silver",color:"hsl(0,0%,100%)",show:!0},Co:{name:"Cobalt",color:"hsl(260,80%,40%)",show:!0},U:{name:"Uranium",color:"hsl(120,80%,60%)",show:!0},Ni:{name:"Nickel",color:"hsl(220,50%,30%)",show:!0},Mn:{name:"Manganese",color:"hsl(70,80%,30%)",show:!0},Pt:{name:"Platinum",color:"hsl(280,60%,80%)",show:!0},REE:{name:"Rare-earth elements",match:"rare earths",color:"hsl(340,90%,60%)",show:!0},Cr:{name:"chromium",show:!1},Pd:{name:"palladium",show:!1}},Object(a["a"])(t,"Pt",{name:"platinum",show:!1}),Object(a["a"])(t,"W",{name:"tungsten",show:!1}),Object(a["a"])(t,"Bi",{name:"bismuth",show:!1}),Object(a["a"])(t,"Po",{name:"polonium",show:!1}),Object(a["a"])(t,"Be",{name:"beryllium",show:!1}),Object(a["a"])(t,"Sn",{name:"tin",show:!1}),Object(a["a"])(t,"Mo",{name:"molybdenum",show:!1}),Object(a["a"])(t,"V",{name:"vanadium",show:!1}),Object(a["a"])(t,"Th",{name:"thorium",show:!1}),Object(a["a"])(t,"other",{name:"Other",color:"hsl(35,100%,60%)",show:!0}),Object(a["a"])(t,"unknown",{name:"Unknown",color:"hsl(25,90%,40%)",show:!0}),t);"undefined"!==typeof window?window.minerals=r:e.exports.minerals=r}.call(this,n("dd40")(e))},"4b41":function(e,t,n){"use strict";var a=n("002a"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[n("div",{staticClass:"br b--light-gray overflow-auto pa2-ns",class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[n("div",{staticClass:"container overflow-auto"},[e.sidebarOpen?n("div",{staticClass:"only-mobile absolute right-0 pa3",staticStyle:{background:"#222"},on:{click:function(t){e.sidebarOpen=!1}}},[e._v("Show map")]):e._e(),e._m(1),n("FeatureInfo"),n("h3",[e._v("Filter by mineral")]),n("MineralFilter",{attrs:{minerals:e.minerals}}),n("h3",[e._v("Filter by team")]),n("TeamFilter")],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br bg-dark-gray b--gray bw2",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),n("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[n("Map",{attrs:{minerals:e.minerals}}),n("div",{staticClass:"absolute bg-dark-gray f3 br bt bb br--right br-100 b--gray bw1 pa1 pointer grow fw8",attrs:{id:"sidebarToggle"},on:{click:function(t){e.sidebarOpen=!e.sidebarOpen}}},[e.sidebarOpen?e._e():n("span",[e._v("→")]),e.sidebarOpen?n("span",[e._v("←")]):e._e()]),n("div",{staticClass:"absolute h-100 w-100",attrs:{id:"overlay"}})],1)]),n("div",{staticClass:"bt b--light-gray flex-none",attrs:{id:"bottom"}})])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bb b--gray bg-gray",staticStyle:{height:"70px"},attrs:{id:"top"}},[a("img",{staticClass:"ma3",staticStyle:{"vertical-align":"middle",height:"30px"},attrs:{src:n("98e2")}}),a("img",{staticClass:"mt2 mr3 absolute right-0",staticStyle:{"vertical-align":"middle",height:"50px"},attrs:{src:n("f3da")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("← "),n("a",{attrs:{href:"https://unearthed.solutions/explorersa-winners"}},[e._v("Back to winners list")])])}],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},l=[],s=(n("ac6a"),n("6762"),n("2fdb"),n("db0c")),c=n.n(s),u=n("5d73"),d=n.n(u),p=n("a4bb"),h=n.n(p),f=n("75fc"),m=(n("4917"),n("96cf"),n("3b8d")),v=(n("28a5"),n("e192")),b=n.n(v),_=n("ef12"),y=n.n(_),g=new a["a"],w=n("b012");n("ac6d");var k={10:"Ag,Au,Co,Cu,Fe,Mn,Ni,U,Zn".split(","),41:"Ag,Au,Co,Fe,Mn,Ni,U,Zn".split(","),30:["Au","U","Cu"]},A={data:function(){return{teamFilter:!0,selectedMinerals:{},selectedId:void 0,mapLoaded:!1,checkedTeams:{}}},props:["minerals"],mounted:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){var t,n,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:b.a.accessToken=window.location.hash.match(/accessToken=(pk.*4w)/)[1],t=new b.a.Map({container:"map",center:[134,-30],zoom:6,style:"mapbox://styles/stevagewp/ckevc03wp0f0m19sbl00x9fuy",hash:"loc",minZoom:5}),y.a.init(t,b.a),t.U.onLoad(function(){return a.mapLoaded=!0}),window.map=t,window.app.Map=this,this.map=t,n={local:{points:"http://localhost:4010/points/index.json",polygons:"http://localhost:4010/polygons/index.json",raster:function(e){return"http://localhost:4010/".concat(e,"/index.json")}},mapbox:{points:"mapbox://stevagewp.points",polygons:"mapbox://stevagewp.polygons",raster:function(e){return"mapbox://stevagewp.".concat(e)}}}[window.location.hash.match(/mapbox/)||"localhost"!==window.location.hostname?"mapbox":"local"],t.U.onLoad(function(){g.$emit("map-loaded"),t.U.addVector("points",n.points),t.U.addVector("polygons",n.polygons);var e=["interpolate",["linear"],["zoom"],5,1.5,7,3,13,6],r=!0,i=!1,o=void 0;try{for(var l,s=d()(a.shownMinerals);!(r=(l=s.next()).done);r=!0){var c=l.value;t.U.addFill("polygons-".concat(c),"polygons",{sourceLayer:"polygons",fillColor:a.minerals[c].color,filter:a.polygonFilter(c),fillOpacity:.4,fillOutlineColor:["case",["to-boolean",["feature-state","hover"]],"blue","transparent"],visibility:a.selectedMinerals[c]?"visible":"none"},"waterway-label"),t.U.addCircle("points-".concat(c),"points",{sourceLayer:"points",circleColor:a.minerals[c].color,circleRadius:e,filter:a.pointFilter(c),circleOpacity:["interpolate",["linear"],["zoom"],5,.8,8,1],circleBlur:["interpolate",["linear"],["zoom"],5,0,8,1],visibility:a.selectedMinerals[c]?"visible":"none"},"waterway-label")}}catch(F){i=!0,o=F}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}var u=["points-other"].concat(Object(f["a"])(a.shownMinerals.map(function(e){return"points-".concat(e)})),Object(f["a"])(a.shownMinerals.map(function(e){return"polygons-".concat(e)}))),p="hsl(30,100%,50%)";t.U.addLine("selected-line-blur","polygons",{sourceLayer:"polygons",lineColor:["case",["to-boolean",["feature-state","selected"]],p,["to-boolean",["feature-state","hover"]],p,"transparent"],lineWidth:["case",["to-boolean",["feature-state","selected"]],7,["to-boolean",["feature-state","hover"]],5,0],lineBlur:3,lineJoin:"round",lineCap:"round"}),t.U.addLine("selected-line","polygons",{sourceLayer:"polygons",lineColor:["case",["to-boolean",["feature-state","selected"]],"white","transparent"],lineWidth:2,lineJoin:"round",lineCap:"round"}),t.U.addCircle("selected-circle-blur","points",{sourceLayer:"points",circleColor:"transparent",circleRadius:12,circleStrokeColor:["case",["to-boolean",["feature-state","selected"]],p,"transparent"],circleStrokeOpacity:.7,circleStrokeWidth:7}),t.U.addCircle("selected-circle","points",{sourceLayer:"points",circleColor:"transparent",circleRadius:14,circleStrokeColor:["case",["to-boolean",["feature-state","selected"]],"white","transparent"],circleStrokeWidth:3});for(var m=h()(k),v=0;v<m.length;v++){var b=m[v],_=!0,y=!1,w=void 0;try{for(var A,C=d()(k[b]);!(_=(A=C.next()).done);_=!0){var x=A.value,O="".concat(b,"-").concat(x);t.addSource(O,{type:"raster",url:n.raster(O.toLowerCase())}),t.U.addLayer(O,O,{type:"raster",rasterOpacity:1})}}catch(F){y=!0,w=F}finally{try{_||null==C.return||C.return()}finally{if(y)throw w}}}t.U.hoverPointer(u),t.U.clickOneLayer(Object(f["a"])(u),function(e){console.log(e.feature.properties),g.$emit("select-feature",e.features[0]),t.removeFeatureState({source:"polygons",sourceLayer:"polygons"}),t.removeFeatureState({source:"points",sourceLayer:"points"}),t.setFeatureState(e.feature,{selected:!0})}),t.U.hoverFeatureState(u)}),g.$on("team-filter",function(e,t){a.checkedTeams=t;var n=["in",["get","team"],["literal",h()(t).filter(function(e){return t[e]}).map(function(e){return+e})]];console.log(n),a.teamFilter=n}),g.$on("mineral-filter",function(e){a.selectedMinerals=e});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{shownMinerals:function(){var e=this;return h()(this.minerals).filter(function(t){return e.minerals[t].show})}},methods:{clearSelection:function(){this.map.removeFeatureState({source:"points",sourceLayer:"points"}),this.map.removeFeatureState({source:"polygons",sourceLayer:"polygons"}),g.$emit("select-feature")},filter:function(e){var t=this,n=function(e){return["all",t.teamFilter,e]};return"other"===e?n(["match",["to-string",["get","commodity"]],[""].concat(Object(f["a"])(h()(this.minerals))),!1,!0]):"unknown"===e?n.apply(void 0,[["!",["has","commodity"]]].concat(Object(f["a"])(h()(this.minerals).map(function(e){return["!",["has",e]]})))):n(["any",["==",["get","commodity"],e],["get",e]])},pointFilter:function(e){return this.filter(e,"Point")},polygonFilter:function(e){return this.filter(e,"Polygon")},toggleLayers:function(){var e=this,t=function(t){for(var n=1===c()(e.selectedMinerals).filter(Boolean).length,a=h()(k),r=0;r<a.length;r++){var i=a[r];k[i].includes(t)&&e.map.U.toggle("".concat(i,"-").concat(t),n&&e.selectedMinerals[t]&&e.checkedTeams[i])}},n=function(){e.shownMinerals.forEach(function(n){e.map.U.toggle(["points-".concat(n),"polygons-".concat(n)],e.selectedMinerals[n]),console.log("toggle",["points-".concat(n),"polygons-".concat(n)],e.selectedMinerals[n]),t(n)})};Object(w["debounce"])(function(){e.mapLoaded?n():e.map.U.onLoad(n)},500)()},updateCommodityFilters:function(){for(var e=["other"].concat(Object(f["a"])(this.shownMinerals)),t=0;t<e.length;t++){var n=e[t];this.map.U.setFilter(["points-".concat(n),"polygons-".concat(n)],this.filter(n))}}},watch:{teamFilter:function(){this.updateCommodityFilters()},checkedTeams:{deep:!0,handler:function(){this.toggleLayers(),this.clearSelection()}},selectedMinerals:{deep:!0,handler:function(){this.toggleLayers(),this.updateCommodityFilters(),this.clearSelection()}}}},C=A,x=n("2877"),O=Object(x["a"])(C,o,l,!1,null,"d67b323e",null);O.options.__file="Map.vue";var F=O.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.feature?n("div",[n("h3",[e._v("Selected site")]),n("p",[e._v("Team "+e._s(e.p.team))]),n("h3",[e._v("Predicted mineral presence")]),n("table",[e._l(e.minerals,function(t){return n("tr",{staticClass:"gc-orange"},[n("th",[e._v(e._s(t.name))])])}),e.minerals.length?e._e():n("tr",[n("th",[e._v(e._s(e.p.commodity||e.Unknown))])])],2),Object.keys(e.extraAttributes).length?n("div",[n("h3",[e._v("Other attributes")]),e.feature?n("table",{staticClass:"white ma1",attrs:{id:"FeatureInfo"}},e._l(e.extraAttributes,function(t){var a=t[0],r=t[1];return n("tr",[-1===e.ignoreProps.indexOf(a)?[n("th",{staticClass:"f6"},[e._v(e._s(a))]),n("td",{staticClass:"f6"},[e._v(e._s("number"===typeof r?Math.round(1e3*r)/1e3:r))])]:e._e()],2)}),0):e._e()]):e._e()]):e._e()},S=[],j=(n("7f7f"),{name:"FeatureInfo",data:function(){return{feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"]}},computed:{p:function(){return this.feature&&this.feature.properties},pp:function(){return this.p||{}},imageUrl:function(){return this.p&&this.p.image_url},extraAttributes:function(){var e=this;return h()(this.pp).filter(function(t){return!window.app.App.minerals[t]&&!["team"].includes(t)&&!(t.length<=2&&!e.pp[t])}).map(function(t){return[t,e.pp[t]]})},minerals:function(){var e=this;return h()(window.app.App.minerals).filter(function(t){return e.pp[t]||(e.pp.commodity||"").match("\\b".concat(t,"\\d*\\b"))}).map(function(e){return{id:e,name:window.app.App.minerals[e].name,color:window.app.App.minerals[e].color}})}},created:function(){var e=this;window.app.FeatureInfo=this,g.$on("select-feature",function(t){return e.feature=t})}}),U=j,L=(n("62ac"),Object(x["a"])(U,M,S,!1,null,"7bc2a480",null));L.options.__file="FeatureInfo.vue";var $=L.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative h-100",attrs:{id:"Legend"}},[n("div",{staticClass:"bg-white b--gray ba shadow-1 pa2 ma2 bottom absolute bottom-2"},[n("h3",[e._v("Legend")])])])}],E={name:"Legend",data:function(){return{}},created:function(){window.Legend=this}},I=E,R=Object(x["a"])(I,T,P,!1,null,"59b14d88",null);R.options.__file="Legend.vue";var N=R.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"TeamFilter"}},[n("div",{staticClass:"options h5 scroll-y"},e._l(e.options,function(t){return n("div",{staticClass:"mb2"},[t.value?n("div",{staticClass:"pretty p-default p-smooth"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked[t.value],expression:"checked[option.value]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked[t.value])?e._i(e.checked[t.value],null)>-1:e.checked[t.value]},on:{change:function(n){var a=e.checked[t.value],r=n.target,i=!!r.checked;if(Array.isArray(a)){var o=null,l=e._i(a,o);r.checked?l<0&&e.$set(e.checked,t.value,a.concat([o])):l>-1&&e.$set(e.checked,t.value,a.slice(0,l).concat(a.slice(l+1)))}else e.$set(e.checked,t.value,i)}}}),n("div",{staticClass:"state"},[t.value?n("label",[e._v(e._s(t.text))]):e._e()])]):e._e()])}),0),n("div",{staticClass:"pretty p-default p-smooth mt4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{change:function(t){var n=e.selectAll,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&(e.selectAll=n.concat([i])):o>-1&&(e.selectAll=n.slice(0,o).concat(n.slice(o+1)))}else e.selectAll=r}}}),n("div",{staticClass:"state"},[n("label",[e._v(e._s(e.selectAll?"Unselect all":"Select all"))])])])])},B=[],z=(n("a481"),{1:"1_Geochemistry_Department_of_Lomonosov_MSU",2:"2_IncertoData",3:"3_IGT",4:"4_Abrax",8:"8_Incaic_Exploration",9:"9_Avant_Data_Solutions",10:"10_TerraNibble",11:"11_Jack_Maughan",12:"12_Deakin_University__Data_Analytics_Minor_Thesis",13:"13_Eureka_Maps",17:"17_Federal_Fluminense_University_(UFF)",19:"19_Sam_Bost__SIG_Machine_Learning",22:"22_Team_Campbell",23:"23_LanXiang",26:"26_GeoAnalysis_AbhishekS",30:"30_Caldera_Analytics",33:"33_Sparveon",36:"36_Minefield",37:"37_Grizzly_Bear",38:"38_DeMIST",41:"41_DeepSightX",46:"46_Depex",50:"50_UniLaSalle_Fr",51:"51_EnerZai",52:"52_Omega_Key",53:"53_Austrike",54:"54_Per-Oz",56:"56_I-PURWA",57:"57_Team_Jupiter",59:"59_Archimedes_Consortium"});window.teamNames=z;var G={name:"TeamFilter",data:function(){for(var e={selected:"",checked:{},selectAll:!0},t=h()(z),n=0;n<t.length;n++){var a=t[n];e.checked[a]=!0}return e},created:function(){var e=this;window.TeamFilter=this,g.$on("map-loaded",function(){console.log("here it comes"),e.sendUpdate()})},computed:{options:function(){return[{text:"All teams",value:""}].concat(Object(f["a"])(h()(z).map(function(e){return{value:+e,text:"".concat(z[e].replace(/\d+_/,"").replace(/_/g," ")," (").concat(e,")")}})))}},methods:{sendUpdate:function(){g.$emit("team-filter",this.selected,this.checked)}},watch:{selected:function(){this.sendUpdate()},checked:{deep:!0,handler:function(){this.sendUpdate()}},selectAll:{immediate:!0,handler:function(){var e=!0,t=!1,n=void 0;try{for(var a,r=d()(this.options);!(e=(a=r.next()).done);e=!0){var i=a.value;this.checked[i.value]=this.selectAll}}catch(o){t=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}}}},J=G,W=(n("9e0f"),Object(x["a"])(J,D,B,!1,null,"dc10a84c",null));W.options.__file="TeamFilter.vue";var Z=W.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"MineralFilter"}},[e._l(e.minerals,function(t,a){return n("div",{staticClass:"mb1"},[t.show?n("div",{staticClass:"pretty p-default p-smooth"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected[a],expression:"selected[id]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selected[a])?e._i(e.selected[a],null)>-1:e.selected[a]},on:{change:function(t){var n=e.selected[a],r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,l=e._i(n,o);r.checked?l<0&&e.$set(e.selected,a,n.concat([o])):l>-1&&e.$set(e.selected,a,n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.selected,a,i)}}}),n("div",{staticClass:"state"},[n("label",[n("div",{staticClass:"pill ml1",style:{backgroundColor:t.color}}),e._v(e._s(t.name))])])]):e._e()])}),n("div",{staticClass:"pretty p-default p-smooth mt3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{change:function(t){var n=e.selectAll,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&(e.selectAll=n.concat([i])):o>-1&&(e.selectAll=n.slice(0,o).concat(n.slice(o+1)))}else e.selectAll=r}}}),n("div",{staticClass:"state"},[n("label",[e._v(e._s(e.selectAll?"Unselect all":"Select all"))])])]),n("p",{staticClass:"note",class:{noteRelevant:e.noteRelevant}},[n("span",{staticClass:"dib fl pt2"},[e._v("⚠️")]),n("span",{staticClass:"dib w5 v-bottom ml2"},[e._v("Raster layers hidden. Choose a single mineral layer to show.")])])],2)},H=[],X={name:"MineralFilter",data:function(){var e=this,t={selected:{},selectAll:!1},n=!0,a=!1,r=void 0;try{for(var i,o=d()(h()(this.minerals).filter(function(t){return e.minerals[t].show}));!(n=(i=o.next()).done);n=!0){var l=i.value;t.selected[l]=!0}}catch(s){a=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return t.selected.other=!1,t.selected.unknown=!1,t},props:["minerals"],created:function(){window.MineralFilter=this},computed:{noteRelevant:function(){return 1!==c()(this.selected).filter(Boolean).length}},watch:{selected:{deep:!0,handler:function(){g.$emit("mineral-filter",this.selected)}},selectAll:function(){var e=this,t=!0,n=!1,a=void 0;try{for(var r,i=d()(h()(this.minerals).filter(function(t){return e.minerals[t].show}));!(t=(r=i.next()).done);t=!0){var o=r.value;this.selected[o]=this.selectAll}}catch(l){n=!0,a=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}},mounted:function(){var e=this;this.$nextTick(function(){return g.$emit("mineral-filter",e.selected)})}},K=X,q=(n("ab42"),Object(x["a"])(K,V,H,!1,null,"26899bc9",null));q.options.__file="MineralFilter.vue";var Q=q.exports;n("3b0c"),window.app={};var Y={name:"app",components:{Map:F,FeatureInfo:$,Legend:N,TeamFilter:Z,MineralFilter:Q},data:function(){return{sidebarOpen:!0,minerals:window.minerals}},created:function(){var e=this;window.app.App=this,g.$on("select-feature",function(){return e.sidebarOpen=!0})},watch:{sidebarOpen:function(){this.$nextTick(function(){return window.map.resize()})}}};n("948e");var ee=Y,te=(n("825c"),n("b0a0"),n("6964"),n("4b41"),Object(x["a"])(ee,r,i,!1,null,"3226acf0",null));te.options.__file="App.vue";var ne=te.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ne)}}).$mount("#app")},"62ac":function(e,t,n){"use strict";var a=n("3286"),r=n.n(a);r.a},6964:function(e,t,n){"use strict";var a=n("ff0f"),r=n.n(a);r.a},7289:function(e,t,n){},"825c":function(e,t,n){"use strict";var a=n("7289"),r=n.n(a);r.a},"98e2":function(e,t,n){e.exports=n.p+"img/Logo-HORI-3-crop.476e338a.png"},"9e0f":function(e,t,n){"use strict";var a=n("b5ef"),r=n.n(a);r.a},ab42:function(e,t,n){"use strict";var a=n("b429"),r=n.n(a);r.a},b0a0:function(e,t,n){"use strict";var a=n("07bb"),r=n.n(a);r.a},b429:function(e,t,n){},b5ef:function(e,t,n){},f3da:function(e,t,n){e.exports=n.p+"img/DEM_Door_REV_H.533733c9.png"},ff0f:function(e,t,n){}});
//# sourceMappingURL=app.a41bd280.js.map