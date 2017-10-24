(function(){'use strict';var g=this;function k(a,b){a=a.split(".");var c=g;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b};function l(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}var m=0;function n(a){this.type=a;this.target=null}n.prototype.preventDefault=n.prototype.stopPropagation=function(){};var p=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function q(a){this.radius=a}function r(a,b){var c=a[1]*Math.PI/180,d=b[1]*Math.PI/180,e=(d-c)/2;a=(b[0]-a[0])*Math.PI/180/2;c=Math.sin(e)*Math.sin(e)+Math.sin(a)*Math.sin(a)*Math.cos(c)*Math.cos(d);return 2*t.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}
q.prototype.offset=function(a,b,c){var d=a[1]*Math.PI/180;b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(a[0]*Math.PI/180+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var t=new q(6370997);var u={};u.degrees=2*Math.PI*t.radius/360;u.ft=.3048;u.m=1;u["us-ft"]=1200/3937;function v(a){this.a=a.code;this.b=a.units;this.g=void 0!==a.f?a.f:this.j;this.c=a.h;var b=w,c=a.code,d=x||window.proj4;if("function"==typeof d&&void 0===b[c]){var e=d.defs(c);if(void 0!==e){void 0===a.h&&(this.c=e.to_meter);void 0===a.units&&(this.b=e.units);var f,h;for(f in b)if(a=d.defs(f),void 0!==a)if(b=y(f),a===e)z([b,this]);else{h=d(f,c);a=h.forward;h=h.inverse;var b=y(b),H=y(this);A(b,H,B(a));A(H,b,B(h))}}}}
v.prototype.j=function(a,b){if("degrees"==this.b)return a;var c=y("EPSG:4326"),d=this.a,c=c.a,e;d in C&&c in C[d]&&(e=C[d][c]);void 0===e&&(e=D);a=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2];a=e(a,a,2);e=(r(a.slice(0,2),a.slice(2,4))+r(a.slice(4,6),a.slice(6,8)))/2;a=this.c||u[this.b];void 0!==a&&(e/=a);return e};v.prototype.f=function(a,b){return this.g(a,b)};var w={},C={},x=null;function z(a){E(a);a.forEach(function(b){a.forEach(function(a){b!==a&&A(b,a,F)})})}
function G(a){w[a.a]=a;A(a,a,F)}function E(a){var b=[];a.forEach(function(a){b.push(G(a))})}function A(a,b,c){a=a.a;b=b.a;a in C||(C[a]={});C[a][b]=c}function B(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,h;for(h=0;h<e;h+=d)for(f=a([b[h],b[h+1]]),c[h]=f[0],c[h+1]=f[1],f=d-1;2<=f;--f)c[h+f]=b[h+f];return c}}
function y(a){var b;if(a instanceof v)b=a;else if("string"===typeof a){b=w[a];var c=x||window.proj4;void 0===b&&"function"==typeof c&&void 0!==c.defs(a)&&(b=new v({code:a}),G(b))}return b||null}function D(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}function F(a,b){if(void 0!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}else a=a.slice();return a};(function(){if(!("HTMLCanvasElement"in window))return!1;try{return document.createElement("CANVAS").getContext("2d")?!0:!1}catch(a){return!1}})();navigator.userAgent.match("CriOS");try{new MouseEvent("click",{buttons:1})}catch(a){};function I(a){v.call(this,{code:a,units:"m",extent:J,global:!0,u:K})}l(I,v);I.prototype.f=function(a,b){return a/p(b[1]/6378137)};var L=6378137*Math.PI,J=[-L,-L,L,L],K=[-180,-85,180,85],M="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new I(a)});
function N(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=L*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>L?f=L:f<-L&&(f=-L);b[e+1]=f}return b}function O(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/L,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var P=new q(6378137);function Q(a,b){v.call(this,{code:a,units:"degrees",extent:R,v:b,global:!0,h:S,u:R})}l(Q,v);Q.prototype.f=function(a){return a};var R=[-180,-90,180,90],S=Math.PI*P.radius/180,T=[new Q("CRS:84"),new Q("EPSG:4326","neu"),new Q("urn:ogc:def:crs:EPSG::4326","neu"),new Q("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new Q("urn:ogc:def:crs:OGC:1.3:CRS84"),new Q("urn:ogc:def:crs:OGC:2:84"),new Q("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Q("urn:x-ogc:def:crs:EPSG:4326","neu")];z(M);z(T);T.forEach(function(a){M.forEach(function(b){A(a,b,N);A(b,a,O)})});var U=angular.module("ngeo",["gettext","ui.date","floatThead"]);k("ngeo.FeatureProperties",{ANGLE:"a",COLOR:"c",IS_CIRCLE:"l",IS_RECTANGLE:"r",IS_TEXT:"t",NAME:"n",OPACITY:"o",AZIMUT:"z",SHOW_MEASURE:"m",SIZE:"s",STROKE:"k"});k("ngeo.GeometryType",{CIRCLE:"Circle",LINE_STRING:"LineString",MULTI_LINE_STRING:"MultiLineString",MULTI_POINT:"MultiPoint",MULTI_POLYGON:"MultiPolygon",POINT:"Point",POLYGON:"Polygon",RECTANGLE:"Rectangle",TEXT:"Text"});k("ngeo.MessageType",{ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"});function V(){}V.prototype.show=function(a){W(this,a).forEach(this.g,this)};V.prototype.show=V.prototype.show;V.prototype.error=function(a){this.show(W(this,a,"error"))};V.prototype.error=V.prototype.error;V.prototype.info=function(a){this.show(W(this,a,"information"))};V.prototype.info=V.prototype.info;V.prototype.success=function(a){this.show(W(this,a,"success"))};V.prototype.success=V.prototype.success;
V.prototype.warn=function(a){this.show(W(this,a,"warning"))};V.prototype.warn=V.prototype.warn;function W(a,b,c){var d=[],e=null;"string"===typeof b?d.push({msg:b,type:void 0!==c?c:"information"}):Array.isArray(b)?b.forEach(function(a){"string"===typeof b?e={msg:a,type:void 0!==c?c:"information"}:(e=a,void 0!==c&&(e.type=c));d.push(e)},a):(e=b,void 0!==c&&(e.type=c),void 0===e.type&&(e.type="information"),d.push(e));return d};function X(a){this.b=a;a=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(a);this.c=a;this.a={}}l(X,V);X.$inject=["$timeout"];X.prototype.notify=function(a){this.show(a)};X.prototype.notify=X.prototype.notify;X.prototype.clear=function(){for(var a in this.a){var b=this.a[parseInt(a,10)],c=b.i,b=b.promise,d=c.a||(c.a=++m);c.alert("close");this.b.cancel(b);delete this.a[d]}};X.prototype.clear=X.prototype.clear;
X.prototype.g=function(a){var b=["alert","fade"];switch(a.type){case "error":b.push("alert-danger");break;case "information":b.push("alert-info");break;case "success":b.push("alert-success");break;case "warning":b.push("alert-warning")}var c=angular.element('<div class="'+b.join(" ")+'"></div>'),d;a.target?d=angular.element(a.target):d=this.c;d.append(c);c.html(a.msg).addClass("in");a=void 0!==a.delay?a.delay:7E3;var b={i:c},e=c.a||(c.a=++m);b.promise=this.b(function(){c.alert("close");delete this.a[e]}.bind(this),
a);this.a[e]=b};U.service("ngeoNotification",X);var Y=angular.module("app",["ngeo"]);function Z(a){this.notification=a;this.a=1;$('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}Z.$inject=["ngeoNotification"];Z.prototype.l=function(){this.notification.notify([{msg:["Error #",this.a++].join(""),type:"error"},{msg:["Warning #",this.a++].join(""),type:"warning"},{msg:["Information #",this.a++].join(""),type:"information"},{msg:["Success #",this.a++].join(""),type:"success"}])};Z.prototype.notifyMulti=Z.prototype.l;
Z.prototype.s=function(){this.notification.notify({msg:"Error in an other target",target:angular.element("#my-messages"),type:"error"})};Z.prototype.notifyTarget=Z.prototype.s;Z.prototype.o=function(){this.notification.notify({delay:1E3,msg:"Lasts one second",type:"success"})};Z.prototype.notifyQuick=Z.prototype.o;Y.controller("MainController",Z);(function(){function a(a){a.put("ngeo/attributes.html",'<fieldset ng-disabled=attrCtrl.disabled> <div class=form-group ng-repeat="attribute in ::attrCtrl.attributes"> <div ng-if="attribute.type !== \'geometry\'"> <label class=control-label>{{ ::attribute.name | translate }} <span class=text-muted>{{::attribute.required ? "*" : ""}}</span></label> <div ng-switch=attribute.type> <select name={{::attribute.name}} ng-required=attribute.required ng-switch-when=select ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <option ng-repeat="attribute in ::attribute.choices" value="{{ ::attribute }}"> {{ ::attribute }} </option> </select> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=date ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=datetime ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-default ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <div ng-show="form.$submitted || form[attribute.name].$touched"> <p class=text-danger ng-show=form[attribute.name].$error.required> {{\'This field is required\' | translate}} </p> </div> </div> </div> </div> </fieldset> ');
a.put("ngeo/popup.html",'<h4 class="popover-title ngeo-popup-title"> <span ng-bind-html=title></span> <button type=button class=close ng-click="open = false"> &times;</button> </h4> <div class=popover-content ng-bind-html=content></div> ');a.put("ngeo/grid.html",'<div class=ngeo-grid-table-container> <table float-thead=ctrl.floatTheadConfig ng-model=ctrl.configuration.data class="table table-bordered table-striped table-hover"> <thead class=table-header> <tr> <th ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-click=ctrl.sort(columnDefs.name)>{{columnDefs.name | translate}} <i ng-show="ctrl.sortedBy !== columnDefs.name" class="fa fa-fw"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === true" class="fa fa-caret-up"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === false" class="fa fa-caret-down"></i> </th> </tr> </thead> <tbody> <tr ng-repeat="attributes in ctrl.configuration.data" ng-class="[\'row-\' + ctrl.configuration.getRowUid(attributes), ctrl.configuration.isRowSelected(attributes) ? \'ngeo-grid-active\': \'\']" ng-click="ctrl.clickRow(attributes, $event)" ng-mousedown=ctrl.preventTextSelection($event)> <td ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-bind-html="attributes[columnDefs.name] | ngeoTrustHtml"></td> </tr> </tbody> </table> </div> ');
a.put("ngeo/scaleselector.html",'<div class="btn-group btn-block" ng-class="::{\'dropup\': scaleselectorCtrl.options.dropup}"> <button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown aria-expanded=false> <span ng-bind-html=scaleselectorCtrl.currentScale|ngeoScalify></span>&nbsp;<i class=caret></i> </button> <ul class="dropdown-menu btn-block" role=menu> <li ng-repeat="zoomLevel in ::scaleselectorCtrl.zoomLevels"> <a href ng-click=scaleselectorCtrl.changeZoom(zoomLevel) ng-bind-html=scaleselectorCtrl.getScale(zoomLevel)|ngeoScalify> </a> </li> </ul> </div> ');
a.put("ngeo/datepicker.html","<div class=ngeo-datepicker> <form name=dateForm class=ngeo-datepicker-form novalidate> <div ng-if=\"::datepickerCtrl.time.widget === 'datepicker'\"> <div class=ngeo-datepicker-start-date> <span ng-if=\"::datepickerCtrl.time.mode === 'range'\" translate>From:</span> <span ng-if=\"::datepickerCtrl.time.mode !== 'range'\" translate>Date:</span> <input name=sdate ui-date=datepickerCtrl.sdateOptions ng-model=datepickerCtrl.sdate required> </div> <div class=ngeo-datepicker-end-date ng-if=\"::datepickerCtrl.time.mode === 'range'\"> <span translate>To:</span> <input name=edate ui-date=datepickerCtrl.edateOptions ng-model=datepickerCtrl.edate required> </div> </div> </form> </div> ");
a.put("ngeo/layertree.html",'<span ng-if=::!layertreeCtrl.isRoot>{{::layertreeCtrl.node.name}}</span> <input type=checkbox ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model=layertreeCtrl.getSetActive ng-model-options="{getterSetter: true}"> <ul ng-if=::layertreeCtrl.node.children> <li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree=::node ngeo-layertree-notroot ngeo-layertree-map=layertreeCtrl.map ngeo-layertree-nodelayerexpr=layertreeCtrl.nodelayerExpr ngeo-layertree-listenersexpr=layertreeCtrl.listenersExpr> </li> </ul> ');
a.put("ngeo/colorpicker.html",'<table class=ngeo-colorpicker-palette> <tr ng-repeat="colors in ::ctrl.colors"> <td ng-repeat="color in ::colors" ng-click=ctrl.setColor(color) ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"> <div ng-style="::{\'background-color\': color}"></div> </td> </tr> </table> ')}a.$inject=["$templateCache"];U.run(a)})();}).call(window);
//# sourceMappingURL=notification.js.map