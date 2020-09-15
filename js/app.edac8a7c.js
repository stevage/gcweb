(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"002a":function(e,t,n){},"0349":function(e,t,n){"use strict";var a=n("7307"),r=n.n(a);r.a},"07bb":function(e,t,n){},"2f02":function(e,t,n){"use strict";var a=n("c0ef"),r=n.n(a);r.a},3286:function(e,t,n){},"3b0c":function(e,t,n){"use strict";n.r(t),function(e){var t,a=n("bd86"),r=(n("cadf"),n("551c"),n("097d"),t={Au:{name:"Gold",color:"hsl(60,100%,60%)",show:!0},Cu:{name:"Copper",color:"hsl(180,80%,50%)",show:!0},Fe:{name:"Iron",color:"hsl(30,50%,50%)",show:!0},Zn:{name:"Zinc",color:"hsl(270,100%,70%)",show:!0},Ag:{name:"Silver",color:"hsl(0,0%,100%)",show:!0},Co:{name:"Cobalt",color:"hsl(260,80%,40%)",show:!0},U:{name:"Uranium",color:"hsl(120,80%,60%)",show:!0},Ni:{name:"Nickel",color:"hsl(220,50%,30%)",show:!0},Mn:{name:"Manganese",color:"hsl(70,80%,30%)",show:!0},Pt:{name:"Platinum",color:"hsl(280,60%,80%)",show:!0},REE:{name:"Rare-earth elements",match:"rare earths",color:"hsl(340,90%,60%)",show:!0},Cr:{name:"chromium",show:!1},Pd:{name:"palladium",show:!1}},Object(a["a"])(t,"Pt",{name:"platinum",show:!1}),Object(a["a"])(t,"W",{name:"tungsten",show:!1}),Object(a["a"])(t,"Bi",{name:"bismuth",show:!1}),Object(a["a"])(t,"Po",{name:"polonium",show:!1}),Object(a["a"])(t,"Be",{name:"beryllium",show:!1}),Object(a["a"])(t,"Sn",{name:"tin",show:!1}),Object(a["a"])(t,"Mo",{name:"molybdenum",show:!1}),Object(a["a"])(t,"V",{name:"vanadium",show:!1}),Object(a["a"])(t,"Th",{name:"thorium",show:!1}),Object(a["a"])(t,"other",{name:"Other",color:"hsl(35,100%,60%)",show:!0}),Object(a["a"])(t,"unknown",{name:"Unknown",color:"hsl(25,90%,40%)",show:!0}),t);"undefined"!==typeof window?window.minerals=r:e.exports.minerals=r}.call(this,n("dd40")(e))},"4b41":function(e,t,n){"use strict";var a=n("002a"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[n("div",{staticClass:"br b--light-gray overflow-auto pa2-ns",class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[n("div",{staticClass:"container overflow-auto"},[e.sidebarOpen?n("div",{staticClass:"only-mobile absolute right-0 pa3",staticStyle:{background:"#222"},on:{click:function(t){e.sidebarOpen=!1}}},[e._v("Show map")]):e._e(),e._m(1),n("FeatureInfo"),n("h3",[e._v("Filter by mineral")]),n("MineralFilter",{attrs:{minerals:e.minerals}}),n("h3",[e._v("Filter by team")]),n("TeamFilter")],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br bg-dark-gray b--gray bw2",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),n("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[n("Map",{attrs:{minerals:e.minerals}}),n("div",{staticClass:"absolute bg-dark-gray f3 br bt bb br--right br-100 b--gray bw1 pa1 pointer grow fw8",attrs:{id:"sidebarToggle"},on:{click:function(t){e.sidebarOpen=!e.sidebarOpen}}},[e.sidebarOpen?e._e():n("span",[e._v("→")]),e.sidebarOpen?n("span",[e._v("←")]):e._e()]),n("div",{staticClass:"absolute h-100 w-100",attrs:{id:"overlay"}})],1)]),n("div",{staticClass:"bt b--light-gray flex-none",attrs:{id:"bottom"}})])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bb b--gray bg-gray",staticStyle:{height:"70px"},attrs:{id:"top"}},[a("img",{staticClass:"ma3",staticStyle:{"vertical-align":"middle",height:"30px"},attrs:{src:n("98e2")}}),a("img",{staticClass:"mt2 mr3 absolute right-0",staticStyle:{"vertical-align":"middle",height:"50px"},attrs:{src:n("f3da")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("← "),n("a",{attrs:{href:"https://unearthed.solutions/explorersa-winners"}},[e._v("Back to winners list")])])}],o=(n("4917"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})}),l=[],s=(n("ac6a"),n("6762"),n("2fdb"),n("db0c")),c=n.n(s),u=n("a4bb"),d=n.n(u),p=n("5d73"),h=n.n(p),f=n("75fc"),m=(n("96cf"),n("3b8d")),v=(n("28a5"),n("e192")),b=n.n(v),_=n("ef12"),y=n.n(_),w=new a["a"],g=n("b012");n("ac6d");var k={10:"Ag,Au,Co,Cu,Fe,Mn,Ni,U,Zn".split(","),41:"Ag,Au,Co,Fe,Mn,Ni,U,Zn".split(","),30:["Au","U","Cu"]},A={local:{points:"http://localhost:4010/points/index.json",polygons:"http://localhost:4010/polygons/index.json",raster:function(e){return"http://localhost:4010/".concat(e,"/index.json")}},mapbox:{points:"mapbox://unearthed-solutions.points",polygons:"mapbox://unearthed-solutions.polygons",raster:function(e){return"mapbox://unearthed-solutions.".concat(e)}}}[(window.location.hash||"").match(/mapbox/)||"localhost"!==window.location.hostname?"mapbox":"local"],C={data:function(){return{teamFilter:!0,selectedMinerals:{},selectedId:void 0,mapLoaded:!1,checkedTeams:{}}},props:["minerals"],mounted:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:b.a.accessToken="pk.eyJ1IjoidW5lYXJ0aGVkLXNvbHV0aW9ucyIsImEiOiJja2YzY3h4dXcwMXpuMnZsc3VlNWdpM3I1In0.Oe0WSGV5FNoIMVQyGEljUw",t=new b.a.Map({container:"map",center:[134,-30],zoom:6,style:"mapbox://styles/unearthed-solutions/ckf3ctwen0k0919s3td1b3b4v",hash:"loc",minZoom:5}),y.a.init(t,b.a),t.U.onLoad(function(){return n.mapLoaded=!0}),window.map=t,window.app.Map=this,this.map=t,t.U.onLoad(function(){w.$emit("map-loaded"),n.addRasterLayers(),t.U.addVector("points",A.points),t.U.addVector("polygons",A.polygons);var e=["interpolate",["linear"],["zoom"],5,1.5,7,3,13,6],a=!0,r=!1,i=void 0;try{for(var o,l=h()(n.shownMinerals);!(a=(o=l.next()).done);a=!0){var s=o.value;t.U.addFill("polygons-".concat(s),"polygons",{sourceLayer:"polygons",fillColor:n.minerals[s].color,filter:n.polygonFilter(s),fillOpacity:.4,fillOutlineColor:["case",["to-boolean",["feature-state","hover"]],"blue","transparent"],visibility:n.selectedMinerals[s]?"visible":"none"},"waterway-label"),t.U.addCircle("points-".concat(s),"points",{sourceLayer:"points",circleColor:n.minerals[s].color,circleRadius:e,filter:n.pointFilter(s),circleOpacity:["interpolate",["linear"],["zoom"],5,.8,8,1],circleBlur:["interpolate",["linear"],["zoom"],5,0,8,1],visibility:n.selectedMinerals[s]?"visible":"none"},"waterway-label")}}catch(d){r=!0,i=d}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}var c=["points-other"].concat(Object(f["a"])(n.shownMinerals.map(function(e){return"points-".concat(e)})),Object(f["a"])(n.shownMinerals.map(function(e){return"polygons-".concat(e)}))),u="hsl(30,100%,50%)";t.U.addLine("selected-line-blur","polygons",{sourceLayer:"polygons",lineColor:["case",["to-boolean",["feature-state","selected"]],u,["to-boolean",["feature-state","hover"]],u,"transparent"],lineWidth:["case",["to-boolean",["feature-state","selected"]],7,["to-boolean",["feature-state","hover"]],5,0],lineBlur:3,lineJoin:"round",lineCap:"round"}),t.U.addLine("selected-line","polygons",{sourceLayer:"polygons",lineColor:["case",["to-boolean",["feature-state","selected"]],"white","transparent"],lineWidth:2,lineJoin:"round",lineCap:"round"}),t.U.addCircle("selected-circle-blur","points",{sourceLayer:"points",circleColor:"transparent",circleRadius:12,circleStrokeColor:["case",["to-boolean",["feature-state","selected"]],u,"transparent"],circleStrokeOpacity:.7,circleStrokeWidth:7}),t.U.addCircle("selected-circle","points",{sourceLayer:"points",circleColor:"transparent",circleRadius:14,circleStrokeColor:["case",["to-boolean",["feature-state","selected"]],"white","transparent"],circleStrokeWidth:3}),t.U.hoverPointer(c),t.U.clickOneLayer(Object(f["a"])(c),function(e){window.log(e.feature.properties),n.clearSelection(),w.$emit("select-feature",e.features[0]),t.setFeatureState(e.feature,{selected:!0})}),t.U.hoverFeatureState(c)}),w.$on("team-filter",function(e,t){n.checkedTeams=t;var a=["in",["get","team"],["literal",d()(t).filter(function(e){return t[e]}).map(function(e){return+e})]];window.log(a),n.teamFilter=a}),w.$on("mineral-filter",function(e){n.selectedMinerals=e});case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{shownMinerals:function(){var e=this;return d()(this.minerals).filter(function(t){return e.minerals[t].show})}},methods:{addRasterLayers:function(){for(var e=d()(k),t=0;t<e.length;t++){var n=e[t],a=!0,r=!1,i=void 0;try{for(var o,l=h()(k[n]);!(a=(o=l.next()).done);a=!0){var s=o.value,c="".concat(n,"-").concat(s);this.map.addSource(c,{type:"raster",url:A.raster(c.toLowerCase())}),this.map.U.addLayer(c,c,{type:"raster",rasterOpacity:1})}}catch(u){r=!0,i=u}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}}},clearSelection:function(){this.mapLoaded&&(this.map.removeFeatureState({source:"points",sourceLayer:"points"}),this.map.removeFeatureState({source:"polygons",sourceLayer:"polygons"})),w.$emit("select-feature")},filter:function(e){var t=this,n=function(e){return["all",t.teamFilter,e]};return"other"===e?n(["match",["to-string",["get","commodity"]],[""].concat(Object(f["a"])(d()(this.minerals))),!1,!0]):"unknown"===e?n.apply(void 0,[["!",["has","commodity"]]].concat(Object(f["a"])(d()(this.minerals).map(function(e){return["!",["has",e]]})))):n(["any",["==",["get","commodity"],e],["get",e]])},pointFilter:function(e){return this.filter(e,"Point")},polygonFilter:function(e){return this.filter(e,"Polygon")},toggleLayers:function(){var e=this,t=function(t){for(var n=1===c()(e.selectedMinerals).filter(Boolean).length,a=d()(k),r=0;r<a.length;r++){var i=a[r];k[i].includes(t)&&e.map.U.toggle("".concat(i,"-").concat(t),n&&e.selectedMinerals[t]&&e.checkedTeams[i])}},n=function(){e.shownMinerals.forEach(function(n){e.map.U.toggle(["points-".concat(n),"polygons-".concat(n)],e.selectedMinerals[n]),window.log("toggle",["points-".concat(n),"polygons-".concat(n)],e.selectedMinerals[n]),t(n)})};Object(g["debounce"])(function(){e.mapLoaded?n():e.map.U.onLoad(n)},500)()},updateCommodityFilters:function(){if(this.mapLoaded)for(var e=["other"].concat(Object(f["a"])(this.shownMinerals)),t=0;t<e.length;t++){var n=e[t];this.map.U.setFilter(["points-".concat(n),"polygons-".concat(n)],this.filter(n))}}},watch:{teamFilter:function(){this.updateCommodityFilters()},checkedTeams:{deep:!0,handler:function(){this.toggleLayers(),this.clearSelection()}},selectedMinerals:{deep:!0,handler:function(){this.toggleLayers(),this.updateCommodityFilters(),this.clearSelection()}}}},x=C,O=n("2877"),M=Object(O["a"])(x,o,l,!1,null,"0c82cd6e",null);M.options.__file="Map.vue";var F=M.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.feature?n("div",[n("h3",[e._v("Selected site")]),n("p",[e._v("Team "+e._s(e.p.team))]),n("h3",[e._v("Predicted mineral presence")]),n("table",[e._l(e.minerals,function(t){return n("tr",{staticClass:"gc-orange"},[n("th",[e._v(e._s(t.name))])])}),e.minerals.length?e._e():n("tr",[n("th",[e._v(e._s(e.p.commodity||e.Unknown))])])],2),Object.keys(e.extraAttributes).length?n("div",[n("h3",[e._v("Other attributes")]),e.feature?n("table",{staticClass:"white ma1",attrs:{id:"FeatureInfo"}},e._l(e.extraAttributes,function(t){var a=t[0],r=t[1];return n("tr",[-1===e.ignoreProps.indexOf(a)?[n("th",{staticClass:"f6"},[e._v(e._s(a))]),n("td",{staticClass:"f6"},[e._v(e._s("number"===typeof r?Math.round(1e3*r)/1e3:r))])]:e._e()],2)}),0):e._e()]):e._e()]):e._e()},S=[],L=(n("7f7f"),{name:"FeatureInfo",data:function(){return{feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"]}},computed:{p:function(){return this.feature&&this.feature.properties},pp:function(){return this.p||{}},imageUrl:function(){return this.p&&this.p.image_url},extraAttributes:function(){var e=this;return d()(this.pp).filter(function(t){return!window.app.App.minerals[t]&&!["team"].includes(t)&&!(t.length<=2&&!e.pp[t])}).map(function(t){return[t,e.pp[t]]})},minerals:function(){var e=this;return d()(window.app.App.minerals).filter(function(t){return e.pp[t]||(e.pp.commodity||"").match("\\b".concat(t,"\\d*\\b"))}).map(function(e){return{id:e,name:window.app.App.minerals[e].name,color:window.app.App.minerals[e].color}})}},created:function(){var e=this;window.app.FeatureInfo=this,w.$on("select-feature",function(t){return e.feature=t})}}),U=L,$=(n("62ac"),Object(O["a"])(U,j,S,!1,null,"7bc2a480",null));$.options.__file="FeatureInfo.vue";var T=$.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative h-100",attrs:{id:"Legend"}},[n("div",{staticClass:"bg-white b--gray ba shadow-1 pa2 ma2 bottom absolute bottom-2"},[n("h3",[e._v("Legend")])])])}],E={name:"Legend",data:function(){return{}},created:function(){window.Legend=this}},R=E,N=Object(O["a"])(R,P,I,!1,null,"59b14d88",null);N.options.__file="Legend.vue";var D=N.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"TeamFilter"}},[n("div",{staticClass:"options h5 scroll-y"},e._l(e.options,function(t){return n("div",{staticClass:"mb2"},[t.value?n("div",{staticClass:"pretty p-default p-smooth"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked[t.value],expression:"checked[option.value]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked[t.value])?e._i(e.checked[t.value],null)>-1:e.checked[t.value]},on:{change:function(n){var a=e.checked[t.value],r=n.target,i=!!r.checked;if(Array.isArray(a)){var o=null,l=e._i(a,o);r.checked?l<0&&e.$set(e.checked,t.value,a.concat([o])):l>-1&&e.$set(e.checked,t.value,a.slice(0,l).concat(a.slice(l+1)))}else e.$set(e.checked,t.value,i)}}}),n("div",{staticClass:"state"},[t.value?n("label",[e._v(e._s(t.text))]):e._e()])]):e._e()])}),0),n("div",{staticClass:"pretty p-default p-smooth mt4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{change:function(t){var n=e.selectAll,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&(e.selectAll=n.concat([i])):o>-1&&(e.selectAll=n.slice(0,o).concat(n.slice(o+1)))}else e.selectAll=r}}}),n("div",{staticClass:"state"},[n("label",[e._v(e._s(e.selectAll?"Unselect all":"Select all"))])])])])},z=[],B=(n("a481"),{1:"1_Geochemistry_Department_of_Lomonosov_MSU",2:"2_IncertoData",3:"3_IGT",4:"4_Abrax",8:"8_Incaic_Exploration",9:"9_Avant_Data_Solutions",10:"10_TerraNibble",11:"11_Jack_Maughan",12:"12_Deakin_University__Data_Analytics_Minor_Thesis",13:"13_Eureka_Maps",17:"17_Federal_Fluminense_University_(UFF)",19:"19_Sam_Bost__SIG_Machine_Learning",22:"22_Team_Campbell",23:"23_LanXiang",26:"26_GeoAnalysis_AbhishekS",30:"30_Caldera_Analytics",33:"33_Sparveon",36:"36_Minefield",37:"37_Grizzly_Bear",38:"38_DeMIST",41:"41_DeepSightX",46:"46_Depex",50:"50_UniLaSalle_Fr",51:"51_EnerZai",52:"52_Omega_Key",53:"53_Austrike",54:"54_Per-Oz",56:"56_I-PURWA",57:"57_Team_Jupiter",59:"59_Archimedes_Consortium"});window.teamNames=B;var G={name:"TeamFilter",data:function(){for(var e={selected:"",checked:{},selectAll:!0},t=d()(B),n=0;n<t.length;n++){var a=t[n];e.checked[a]=!0}return e},created:function(){var e=this;window.TeamFilter=this,w.$on("map-loaded",function(){window.log("here it comes"),e.sendUpdate()})},computed:{options:function(){return[{text:"All teams",value:""}].concat(Object(f["a"])(d()(B).map(function(e){return{value:+e,text:"".concat(B[e].replace(/\d+_/,"").replace(/_/g," ")," (").concat(e,")")}})))}},methods:{sendUpdate:function(){w.$emit("team-filter",this.selected,this.checked)}},watch:{selected:function(){this.sendUpdate()},checked:{deep:!0,handler:function(){this.sendUpdate()}},selectAll:{immediate:!0,handler:function(){var e=!0,t=!1,n=void 0;try{for(var a,r=h()(this.options);!(e=(a=r.next()).done);e=!0){var i=a.value;this.checked[i.value]=this.selectAll}}catch(o){t=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}}}},J=G,V=(n("2f02"),Object(O["a"])(J,W,z,!1,null,"65cd1ac1",null));V.options.__file="TeamFilter.vue";var Z=V.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"MineralFilter"}},[e._l(e.minerals,function(t,a){return n("div",{staticClass:"mb1"},[t.show?n("div",{staticClass:"pretty p-default p-smooth"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected[a],expression:"selected[id]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selected[a])?e._i(e.selected[a],null)>-1:e.selected[a]},on:{change:function(t){var n=e.selected[a],r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,l=e._i(n,o);r.checked?l<0&&e.$set(e.selected,a,n.concat([o])):l>-1&&e.$set(e.selected,a,n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.selected,a,i)}}}),n("div",{staticClass:"state"},[n("label",[n("div",{staticClass:"pill ml1",style:{backgroundColor:t.color}}),e._v(e._s(t.name))])])]):e._e()])}),n("div",{staticClass:"pretty p-default p-smooth mt3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{change:function(t){var n=e.selectAll,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&(e.selectAll=n.concat([i])):o>-1&&(e.selectAll=n.slice(0,o).concat(n.slice(o+1)))}else e.selectAll=r}}}),n("div",{staticClass:"state"},[n("label",[e._v(e._s(e.selectAll?"Unselect all":"Select all"))])])]),n("p",{staticClass:"note",class:{noteRelevant:e.noteRelevant}},[n("span",{staticClass:"dib fl pt2"},[e._v("⚠️")]),n("span",{staticClass:"dib v-bottom ml2",staticStyle:{width:"320px"}},[e._v("Raster layers hidden. Choose a single mineral type to show rasters.")])])],2)},H=[],Y={name:"MineralFilter",data:function(){var e=this,t={selected:{},selectAll:!1},n=!0,a=!1,r=void 0;try{for(var i,o=h()(d()(this.minerals).filter(function(t){return e.minerals[t].show}));!(n=(i=o.next()).done);n=!0){var l=i.value;t.selected[l]=!0}}catch(s){a=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return t.selected.other=!1,t.selected.unknown=!1,t},props:["minerals"],created:function(){window.MineralFilter=this},computed:{noteRelevant:function(){return c()(this.selected).filter(Boolean).length>1}},watch:{selected:{deep:!0,handler:function(){w.$emit("mineral-filter",this.selected)}},selectAll:function(){var e=this,t=!0,n=!1,a=void 0;try{for(var r,i=h()(d()(this.minerals).filter(function(t){return e.minerals[t].show}));!(t=(r=i.next()).done);t=!0){var o=r.value;this.selected[o]=this.selectAll}}catch(l){n=!0,a=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}},mounted:function(){var e=this;this.$nextTick(function(){return w.$emit("mineral-filter",e.selected)})}},K=Y,Q=(n("0349"),Object(O["a"])(K,X,H,!1,null,"67b1973b",null));Q.options.__file="MineralFilter.vue";var q=Q.exports;n("3b0c"),window.app={},window.log=function(){var e;(window.location.hash||"").match(/debug/)&&(e=console).log.apply(e,arguments)};var ee={name:"app",components:{Map:F,FeatureInfo:T,Legend:D,TeamFilter:Z,MineralFilter:q},data:function(){return{sidebarOpen:!0,minerals:window.minerals}},created:function(){var e=this;window.app.App=this,w.$on("select-feature",function(){return e.sidebarOpen=!0})},watch:{sidebarOpen:function(){this.$nextTick(function(){return window.map.resize()})}}};n("948e");var te=ee,ne=(n("9268"),n("b0a0"),n("6964"),n("4b41"),Object(O["a"])(te,r,i,!1,null,"738d5748",null));ne.options.__file="App.vue";var ae=ne.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ae)}}).$mount("#app")},"62ac":function(e,t,n){"use strict";var a=n("3286"),r=n.n(a);r.a},6964:function(e,t,n){"use strict";var a=n("ff0f"),r=n.n(a);r.a},7307:function(e,t,n){},"84f3":function(e,t,n){},9268:function(e,t,n){"use strict";var a=n("84f3"),r=n.n(a);r.a},"98e2":function(e,t,n){e.exports=n.p+"img/Logo-HORI-3-crop.476e338a.png"},b0a0:function(e,t,n){"use strict";var a=n("07bb"),r=n.n(a);r.a},c0ef:function(e,t,n){},f3da:function(e,t,n){e.exports=n.p+"img/DEM_Door_REV_H.533733c9.png"},ff0f:function(e,t,n){}});
//# sourceMappingURL=app.edac8a7c.js.map