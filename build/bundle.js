var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function s(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function d(){return f(" ")}function g(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e,t){t=""+t,e.data!==t&&(e.data=t)}function h(e,t){(null!=t||e.value)&&(e.value=t)}let y;function v(e){y=e}function w(e){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(e)}const b=[],$=[],P=[],E=[],x=Promise.resolve();let k=!1;function L(e){P.push(e)}let R=!1;const S=new Set;function _(){if(!R){R=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];v(t),M(t.$$)}for(b.length=0;$.length;)$.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];S.has(t)||(S.add(t),t())}P.length=0}while(b.length);for(;E.length;)E.pop()();k=!1,R=!1,S.clear()}}function M(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const T=new Set;function C(e,t){e&&e.i&&(T.delete(e),e.i(t))}function F(e,t,n,r){if(e&&e.o){if(T.has(e))return;T.add(e),(void 0).c.push(()=>{T.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function A(e){e&&e.c()}function j(e,n,i){const{fragment:a,on_mount:s,on_destroy:u,after_update:l}=e.$$;a&&a.m(n,i),L(()=>{const n=s.map(t).filter(o);u?u.push(...n):r(n),e.$$.on_mount=[]}),l.forEach(L)}function O(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,t){-1===e.$$.dirty[0]&&(b.push(e),k||(k=!0,x.then(_)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(t,o,i,a,s,u,c=[-1]){const f=y;v(t);const d=o.props||{},g=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:c};let m=!1;if(g.ctx=i?i(t,d,(e,n,...r)=>{const o=r.length?r[0]:n;return g.ctx&&s(g.ctx[e],g.ctx[e]=o)&&(g.bound[e]&&g.bound[e](o),m&&z(t,e)),n}):[],g.update(),m=!0,r(g.before_update),g.fragment=!!a&&a(g.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);g.fragment&&g.fragment.l(e),e.forEach(l)}else g.fragment&&g.fragment.c();o.intro&&C(t.$$.fragment),j(t,o.target,o.anchor),_()}v(f)}class N{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function G(e,t){return e(t={exports:{}},t.exports),t.exports}var B=G((function(e,t){function n(e,t,n){void 0===n&&(n={});var r={type:"Feature"};return(0===n.id||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function r(e,t,r){return void 0===r&&(r={}),n({type:"Point",coordinates:e},t,r)}function o(e,t,r){void 0===r&&(r={});for(var o=0,i=e;o<i.length;o++){var a=i[o];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<a[a.length-1].length;s++)if(a[a.length-1][s]!==a[0][s])throw new Error("First and last Position are not equivalent.")}return n({type:"Polygon",coordinates:e},t,r)}function i(e,t,r){if(void 0===r&&(r={}),e.length<2)throw new Error("coordinates must be an array of two or more positions");return n({type:"LineString",coordinates:e},t,r)}function a(e,t){void 0===t&&(t={});var n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function s(e,t,r){return void 0===r&&(r={}),n({type:"MultiLineString",coordinates:e},t,r)}function u(e,t,r){return void 0===r&&(r={}),n({type:"MultiPoint",coordinates:e},t,r)}function l(e,t,r){return void 0===r&&(r={}),n({type:"MultiPolygon",coordinates:e},t,r)}function c(e,n){void 0===n&&(n="kilometers");var r=t.factors[n];if(!r)throw new Error(n+" units is invalid");return e*r}function f(e,n){void 0===n&&(n="kilometers");var r=t.factors[n];if(!r)throw new Error(n+" units is invalid");return e/r}function d(e){return 180*(e%(2*Math.PI))/Math.PI}function g(e){return!isNaN(e)&&null!==e&&!Array.isArray(e)&&!/^\s*$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.earthRadius=6371008.8,t.factors={centimeters:100*t.earthRadius,centimetres:100*t.earthRadius,degrees:t.earthRadius/111325,feet:3.28084*t.earthRadius,inches:39.37*t.earthRadius,kilometers:t.earthRadius/1e3,kilometres:t.earthRadius/1e3,meters:t.earthRadius,metres:t.earthRadius,miles:t.earthRadius/1609.344,millimeters:1e3*t.earthRadius,millimetres:1e3*t.earthRadius,nauticalmiles:t.earthRadius/1852,radians:1,yards:t.earthRadius/1.0936},t.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/t.earthRadius,yards:1/1.0936},t.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},t.feature=n,t.geometry=function(e,t,n){switch(e){case"Point":return r(t).geometry;case"LineString":return i(t).geometry;case"Polygon":return o(t).geometry;case"MultiPoint":return u(t).geometry;case"MultiLineString":return s(t).geometry;case"MultiPolygon":return l(t).geometry;default:throw new Error(e+" is invalid")}},t.point=r,t.points=function(e,t,n){return void 0===n&&(n={}),a(e.map((function(e){return r(e,t)})),n)},t.polygon=o,t.polygons=function(e,t,n){return void 0===n&&(n={}),a(e.map((function(e){return o(e,t)})),n)},t.lineString=i,t.lineStrings=function(e,t,n){return void 0===n&&(n={}),a(e.map((function(e){return i(e,t)})),n)},t.featureCollection=a,t.multiLineString=s,t.multiPoint=u,t.multiPolygon=l,t.geometryCollection=function(e,t,r){return void 0===r&&(r={}),n({type:"GeometryCollection",geometries:e},t,r)},t.round=function(e,t){if(void 0===t&&(t=0),t&&!(t>=0))throw new Error("precision must be a positive number");var n=Math.pow(10,t||0);return Math.round(e*n)/n},t.radiansToLength=c,t.lengthToRadians=f,t.lengthToDegrees=function(e,t){return d(f(e,t))},t.bearingToAzimuth=function(e){var t=e%360;return t<0&&(t+=360),t},t.radiansToDegrees=d,t.degreesToRadians=function(e){return e%360*Math.PI/180},t.convertLength=function(e,t,n){if(void 0===t&&(t="kilometers"),void 0===n&&(n="kilometers"),!(e>=0))throw new Error("length must be a positive number");return c(f(e,t),n)},t.convertArea=function(e,n,r){if(void 0===n&&(n="meters"),void 0===r&&(r="kilometers"),!(e>=0))throw new Error("area must be a positive number");var o=t.areaFactors[n];if(!o)throw new Error("invalid original units");var i=t.areaFactors[r];if(!i)throw new Error("invalid final units");return e/o*i},t.isNumber=g,t.isObject=function(e){return!!e&&e.constructor===Object},t.validateBBox=function(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(4!==e.length&&6!==e.length)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach((function(e){if(!g(e))throw new Error("bbox must only contain numbers")}))},t.validateId=function(e){if(!e)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof e))throw new Error("id must be a number or a string")},t.radians2degrees=function(){throw new Error("method has been renamed to `radiansToDegrees`")},t.degrees2radians=function(){throw new Error("method has been renamed to `degreesToRadians`")},t.distanceToDegrees=function(){throw new Error("method has been renamed to `lengthToDegrees`")},t.distanceToRadians=function(){throw new Error("method has been renamed to `lengthToRadians`")},t.radiansToDistance=function(){throw new Error("method has been renamed to `radiansToLength`")},t.bearingToAngle=function(){throw new Error("method has been renamed to `bearingToAzimuth`")},t.convertDistance=function(){throw new Error("method has been renamed to `convertLength`")}}));D(B);B.earthRadius,B.factors,B.unitsFactors,B.areaFactors,B.feature,B.geometry,B.point,B.points,B.polygon,B.polygons,B.lineString,B.lineStrings,B.featureCollection,B.multiLineString,B.multiPoint,B.multiPolygon,B.geometryCollection,B.round,B.radiansToLength,B.lengthToRadians,B.lengthToDegrees,B.bearingToAzimuth,B.radiansToDegrees,B.degreesToRadians,B.convertLength,B.convertArea,B.isNumber,B.isObject,B.validateBBox,B.validateId,B.radians2degrees,B.degrees2radians,B.distanceToDegrees,B.distanceToRadians,B.radiansToDistance,B.bearingToAngle,B.convertDistance;var q=G((function(e,t){function n(e,t,r){if(null!==e)for(var o,i,a,s,u,l,c,f,d=0,g=0,m=e.type,p="FeatureCollection"===m,h="Feature"===m,y=p?e.features.length:1,v=0;v<y;v++){u=(f=!!(c=p?e.features[v].geometry:h?e.geometry:e)&&"GeometryCollection"===c.type)?c.geometries.length:1;for(var w=0;w<u;w++){var b=0,$=0;if(null!==(s=f?c.geometries[w]:c)){l=s.coordinates;var P=s.type;switch(d=!r||"Polygon"!==P&&"MultiPolygon"!==P?0:1,P){case null:break;case"Point":if(!1===t(l,g,v,b,$))return!1;g++,b++;break;case"LineString":case"MultiPoint":for(o=0;o<l.length;o++){if(!1===t(l[o],g,v,b,$))return!1;g++,"MultiPoint"===P&&b++}"LineString"===P&&b++;break;case"Polygon":case"MultiLineString":for(o=0;o<l.length;o++){for(i=0;i<l[o].length-d;i++){if(!1===t(l[o][i],g,v,b,$))return!1;g++}"MultiLineString"===P&&b++,"Polygon"===P&&$++}"Polygon"===P&&b++;break;case"MultiPolygon":for(o=0;o<l.length;o++){for($=0,i=0;i<l[o].length;i++){for(a=0;a<l[o][i].length-d;a++){if(!1===t(l[o][i][a],g,v,b,$))return!1;g++}$++}b++}break;case"GeometryCollection":for(o=0;o<s.geometries.length;o++)if(!1===n(s.geometries[o],t,r))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function r(e,t){var n;switch(e.type){case"FeatureCollection":for(n=0;n<e.features.length&&!1!==t(e.features[n].properties,n);n++);break;case"Feature":t(e.properties,0)}}function o(e,t){if("Feature"===e.type)t(e,0);else if("FeatureCollection"===e.type)for(var n=0;n<e.features.length&&!1!==t(e.features[n],n);n++);}function i(e,t){var n,r,o,i,a,s,u,l,c,f,d=0,g="FeatureCollection"===e.type,m="Feature"===e.type,p=g?e.features.length:1;for(n=0;n<p;n++){for(s=g?e.features[n].geometry:m?e.geometry:e,l=g?e.features[n].properties:m?e.properties:{},c=g?e.features[n].bbox:m?e.bbox:void 0,f=g?e.features[n].id:m?e.id:void 0,a=(u=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,o=0;o<a;o++)if(null!==(i=u?s.geometries[o]:s))switch(i.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===t(i,d,l,c,f))return!1;break;case"GeometryCollection":for(r=0;r<i.geometries.length;r++)if(!1===t(i.geometries[r],d,l,c,f))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===t(null,d,l,c,f))return!1;d++}}function a(e,t){i(e,(function(e,n,r,o,i){var a,s=null===e?null:e.type;switch(s){case null:case"Point":case"LineString":case"Polygon":return!1!==t(B.feature(e,r,{bbox:o,id:i}),n,0)&&void 0}switch(s){case"MultiPoint":a="Point";break;case"MultiLineString":a="LineString";break;case"MultiPolygon":a="Polygon"}for(var u=0;u<e.coordinates.length;u++){var l={type:a,coordinates:e.coordinates[u]};if(!1===t(B.feature(l,r),n,u))return!1}}))}function s(e,t){a(e,(function(e,r,o){var i=0;if(e.geometry){var a=e.geometry.type;if("Point"!==a&&"MultiPoint"!==a){var s,u=0,l=0,c=0;return!1!==n(e,(function(n,a,f,d,g){if(void 0===s||r>u||d>l||g>c)return s=n,u=r,l=d,c=g,void(i=0);var m=B.lineString([s,n],e.properties);if(!1===t(m,r,o,g,i))return!1;i++,s=n}))&&void 0}}}))}function u(e,t){if(!e)throw new Error("geojson is required");a(e,(function(e,n,r){if(null!==e.geometry){var o=e.geometry.type,i=e.geometry.coordinates;switch(o){case"LineString":if(!1===t(e,n,r,0,0))return!1;break;case"Polygon":for(var a=0;a<i.length;a++)if(!1===t(B.lineString(i[a],e.properties),n,r,a))return!1}}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.coordEach=n,t.coordReduce=function(e,t,r,o){var i=r;return n(e,(function(e,n,o,a,s){i=0===n&&void 0===r?e:t(i,e,n,o,a,s)}),o),i},t.propEach=r,t.propReduce=function(e,t,n){var o=n;return r(e,(function(e,r){o=0===r&&void 0===n?e:t(o,e,r)})),o},t.featureEach=o,t.featureReduce=function(e,t,n){var r=n;return o(e,(function(e,o){r=0===o&&void 0===n?e:t(r,e,o)})),r},t.coordAll=function(e){var t=[];return n(e,(function(e){t.push(e)})),t},t.geomEach=i,t.geomReduce=function(e,t,n){var r=n;return i(e,(function(e,o,i,a,s){r=0===o&&void 0===n?e:t(r,e,o,i,a,s)})),r},t.flattenEach=a,t.flattenReduce=function(e,t,n){var r=n;return a(e,(function(e,o,i){r=0===o&&0===i&&void 0===n?e:t(r,e,o,i)})),r},t.segmentEach=s,t.segmentReduce=function(e,t,n){var r=n,o=!1;return s(e,(function(e,i,a,s,u){r=!1===o&&void 0===n?e:t(r,e,i,a,s,u),o=!0})),r},t.lineEach=u,t.lineReduce=function(e,t,n){var r=n;return u(e,(function(e,o,i,a){r=0===o&&void 0===n?e:t(r,e,o,i,a)})),r},t.findSegment=function(e,t){if(t=t||{},!B.isObject(t))throw new Error("options is invalid");var n,r=t.featureIndex||0,o=t.multiFeatureIndex||0,i=t.geometryIndex||0,a=t.segmentIndex||0,s=t.properties;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),s=s||e.features[r].properties,n=e.features[r].geometry;break;case"Feature":s=s||e.properties,n=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":n=e;break;default:throw new Error("geojson is invalid")}if(null===n)return null;var u=n.coordinates;switch(n.type){case"Point":case"MultiPoint":return null;case"LineString":return a<0&&(a=u.length+a-1),B.lineString([u[a],u[a+1]],s,t);case"Polygon":return i<0&&(i=u.length+i),a<0&&(a=u[i].length+a-1),B.lineString([u[i][a],u[i][a+1]],s,t);case"MultiLineString":return o<0&&(o=u.length+o),a<0&&(a=u[o].length+a-1),B.lineString([u[o][a],u[o][a+1]],s,t);case"MultiPolygon":return o<0&&(o=u.length+o),i<0&&(i=u[o].length+i),a<0&&(a=u[o][i].length-a-1),B.lineString([u[o][i][a],u[o][i][a+1]],s,t)}throw new Error("geojson is invalid")},t.findPoint=function(e,t){if(t=t||{},!B.isObject(t))throw new Error("options is invalid");var n,r=t.featureIndex||0,o=t.multiFeatureIndex||0,i=t.geometryIndex||0,a=t.coordIndex||0,s=t.properties;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),s=s||e.features[r].properties,n=e.features[r].geometry;break;case"Feature":s=s||e.properties,n=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":n=e;break;default:throw new Error("geojson is invalid")}if(null===n)return null;var u=n.coordinates;switch(n.type){case"Point":return B.point(u,s,t);case"MultiPoint":return o<0&&(o=u.length+o),B.point(u[o],s,t);case"LineString":return a<0&&(a=u.length+a),B.point(u[a],s,t);case"Polygon":return i<0&&(i=u.length+i),a<0&&(a=u[i].length+a),B.point(u[i][a],s,t);case"MultiLineString":return o<0&&(o=u.length+o),a<0&&(a=u[o].length+a),B.point(u[o][a],s,t);case"MultiPolygon":return o<0&&(o=u.length+o),i<0&&(i=u[o].length+i),a<0&&(a=u[o][i].length-a),B.point(u[o][i][a],s,t)}throw new Error("geojson is invalid")}}));D(q);q.coordEach,q.coordReduce,q.propEach,q.propReduce,q.featureEach,q.featureReduce,q.coordAll,q.geomEach,q.geomReduce,q.flattenEach,q.flattenReduce,q.segmentEach,q.segmentReduce,q.lineEach,q.lineReduce,q.findSegment,q.findPoint;var H=D(G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[1/0,1/0,-1/0,-1/0];return q.coordEach(e,(function(e){t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}})));const J=[];function U(t,n=e){let r;const o=[];function a(e){if(i(t,e)&&(t=e,r)){const e=!J.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),J.push(n,t)}if(e){for(let e=0;e<J.length;e+=2)J[e][0](J[e+1]);J.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(i,s=e){const u=[i,s];return o.push(u),1===o.length&&(r=n(a)||e),i(t),()=>{const e=o.indexOf(u);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const V=U(null),W=U(null);function X(e,t,n){const r=e.slice();return r[9]=t[n],r}function Y(e){let t,n,r,o,i,a=e[9].name+"",d=(e[9].system?` | ${e[9].system}`:"")+"";function h(...t){return e[8](e[9],...t)}return{c(){t=c("div"),n=c("strong"),r=f(a),o=f(d),m(t,"class","svelte-11vlo34")},m(e,a,l){u(e,t,a),s(t,n),s(n,r),s(t,o),l&&i(),i=g(t,"click",h)},p(t,n){e=t,2&n&&a!==(a=e[9].name+"")&&p(r,a),2&n&&d!==(d=(e[9].system?` | ${e[9].system}`:"")+"")&&p(o,d)},d(e){e&&l(t),i()}}}function Z(t){let n,o,i,a,f,p=t[1],y=[];for(let e=0;e<p.length;e+=1)y[e]=Y(X(t,p,e));return{c(){n=c("div"),o=c("input"),i=d(),a=c("div");for(let e=0;e<y.length;e+=1)y[e].c();m(o,"class","search svelte-11vlo34"),m(o,"type","text"),m(o,"placeholder","Type here to search by Hospital or System"),m(o,"autocomplete","off"),m(a,"class","autocomplete-items svelte-11vlo34"),m(n,"class","content svelte-11vlo34")},m(e,l,c){u(e,n,l),s(n,o),h(o,t[0]),s(n,i),s(n,a);for(let e=0;e<y.length;e+=1)y[e].m(a,null);c&&r(f),f=[g(o,"input",t[7]),g(o,"keyup",t[3])]},p(e,[t]){if(1&t&&o.value!==e[0]&&h(o,e[0]),6&t){let n;for(p=e[1],n=0;n<p.length;n+=1){const r=X(e,p,n);y[n]?y[n].p(r,t):(y[n]=Y(r),y[n].c(),y[n].m(a,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=p.length}},i:e,o:e,d(e){e&&l(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(y,e),r(f)}}}function K(e,t,n){let r,o;a(e,V,e=>n(5,r=e)),a(e,W,e=>n(6,o=e));let i="",s=[],u=[];function l(e){n(1,s=[]),n(0,i=e.name),o.flyTo({center:e.coords,zoom:13})}return e.$$.update=()=>{32&e.$$.dirty&&r&&(u=r.facility.features.map(e=>{const t=e.properties,{name:n,system:r}=t;return{name:n,system:r,coords:e.geometry.coordinates,text:`${n.toLowerCase()}, ${r.toLowerCase()}`}}))},[i,s,l,function(){i.length>1&&n(1,s=u.filter(e=>e.text.includes(i.toLowerCase())).slice(0,5))},u,r,o,function(){i=this.value,n(0,i)},e=>l(e)]}class Q extends N{constructor(e){super(),I(this,e,K,Z,i,{})}}function ee(t){let n,r;return{c(){n=c("div"),r=c("div"),m(r,"id","map"),m(r,"class","svelte-12j1fpv"),m(n,"class","content svelte-12j1fpv")},m(e,o){u(e,n,o),s(n,r),t[3](r)},p:e,i:e,o:e,d(e){e&&l(n),t[3](null)}}}function te(e,t,n){let r,o,i;return a(e,V,e=>n(2,r=e)),w(()=>{n(1,i=new mapboxgl.Map({container:"map",style:carto.basemaps.voyager,center:[-76.358493,42.650281],zoom:5.3})),W.set(i)}),e.$$.update=()=>{if(6&e.$$.dirty&&i&&r){const e=new carto.source.GeoJSON(r.county),t=new carto.source.GeoJSON(r.facility),n=new carto.Layer("county",e,new carto.Viz("\n                color: ramp(\n                    zoomRange([6,10]),\n                        [opacity(ramp(buckets($lawsuits_per_10000, [0,1,11,51,101,150]),\n                        [#d8d9da, #e2f7fe,#bfe1ec,#91c4db,#69b1ce,#006a92,#003b54]),1)\n                        opacity(ramp(buckets($lawsuits_per_10000, [0,1,11,51,101,150]),\n                        [#d8d9da, #e2f7fe,#bfe1ec,#91c4db,#69b1ce,#006a92,#003b54]),0.2)\n                    ]\n                    )\n                strokeWidth: 1\n                strokeColor: ramp(zoomRange([6,8]),[#f9f9f9,#959595])\n                opacity: 0.7\n            ")),o=new carto.Layer("facility",t,new carto.Viz("\n                @category: ramp($system,prism)\n                @name: $name\n                @system: $system\n                @lawsuits: $lawsuits\n                @link: $link\n                width: ramp(zoomrange([5,6.5,10]),[1.5,4,scaled($lawsuits,16) + 2])\n                strokeColor: ramp(zoomRange([5,7]),[#f9f9f9,#959595])\n                color: ramp(zoomRange([5,7]),[white,opacity(@category,0.8)])\n            "));n.addTo(i),o.addTo(i),new carto.Interactivity(o).on("featureClick",e=>{const t=e.coordinates,n=e.features;if(n.length>0){let e=[];n.forEach(t=>{const{name:n,system:r,lawsuits:o,link:i}=t.variables;e.push(`\n                            <h4><a target="_blank" href="${t.link}">${n.value}</a></h4>\n                            ${r?`<p><strong>System:</strong> ${r.value}</p>`:""}\n                            <p><strong>Amount of Lawsuits:</strong> ${o.value}</p>\n                         `)}),(new mapboxgl.Popup).setLngLat([t.lng,t.lat]).setHTML(e.join("<br/>")).addTo(i)}})}},[o,i,r,function(e){$[e?"unshift":"push"](()=>{n(0,o=e)})}]}class ne extends N{constructor(e){super(),I(this,e,te,ee,i,{})}}function re(t){let n,r,o,i,a,f,g,p;return{c(){var e;n=c("div"),r=c("h4"),r.textContent="Hospital Lawsuits Against Patients by County, 2015–2019",o=d(),i=c("h5"),i.textContent="Rate per  10,000 People",a=d(),e="svg",f=document.createElementNS("http://www.w3.org/2000/svg",e),g=d(),p=c("h6"),p.textContent="Zoom in or search to show lawsuits by hospital facility",m(r,"class","svelte-15aegl3"),m(i,"class","svelte-15aegl3"),m(f,"class","svelte-15aegl3"),m(n,"class","content svelte-15aegl3")},m(e,l){u(e,n,l),s(n,r),s(n,o),s(n,i),s(n,a),s(n,f),t[3](f),s(n,g),s(n,p)},p:e,i:e,o:e,d(e){e&&l(n),t[3](null)}}}function oe(e,t,n){let r,o,i;return a(e,V,e=>n(1,r=e)),a(e,W,e=>n(2,o=e)),e.$$.update=()=>{if(7&e.$$.dirty&&r){const e={top:20,right:20,bottom:100,left:40},t=400-e.left-e.right,n=400-e.top-e.bottom,a=d3.scaleBand().range([0,t]).padding(.1),s=d3.scaleLinear().range([n,0]);const u=d3.select(i).attr("width",t+e.left+e.right).attr("height",n+e.top+e.bottom).append("g").attr("transform","translate("+e.left+","+e.top+")"),l=d3.select("body").append("div").attr("class","tooltip").style("opacity",0),c=r.county.features.map(e=>e.properties).filter(e=>e.lawsuits_per_10000);a.domain(c.map((function(e){return e.name}))),s.domain([0,d3.max(c,(function(e){return e.lawsuits_per_10000}))]),u.selectAll(".bar").data(c).enter().append("rect").attr("class","bar").attr("x",(function(e){return a(e.name)})).attr("width",a.bandwidth()).attr("y",(function(e){return s(e.lawsuits_per_10000)})).attr("height",(function(e){return n-s(e.lawsuits_per_10000)})).attr("fill",(function(e){return(t=e.lawsuits_per_10000)>150?"#003b54":t>101?"#006a92":t>51?"#69b1ce":t>11?"#91c4db":t>1?"#bfe1ec":t>0?"#e2f7fe":"#d8d9da";var t})).on("mouseover",e=>{l.transition().duration(100).style("opacity",.9),l.html(`\n                                <p><strong>${e.name}</strong></p>\n                                <p><strong>Lawsuits:</strong> ${e.lawsuits}</p>\n                                <p><strong>Rate per 10,000:</strong> ${e.lawsuits_per_10000}</p>\n                        `).style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",e=>{l.transition().duration(400).style("opacity",0)}).on("click",e=>{o.fitBounds(e.bounds,{padding:20})}),u.append("g").attr("transform","translate(0,"+n+")").call(d3.axisBottom(a)).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-60)"),u.append("g").call(d3.axisLeft(s))}},[i,r,o,function(e){$[e?"unshift":"push"](()=>{n(0,i=e)})}]}class ie extends N{constructor(e){super(),I(this,e,oe,re,i,{})}}function ae(t){let n,r,o,i,a;const f=new Q({}),g=new ne({}),p=new ie({});return{c(){n=c("main"),A(f.$$.fragment),r=d(),o=c("div"),A(g.$$.fragment),i=d(),A(p.$$.fragment),m(o,"class","vis svelte-1sy78zu")},m(e,t){u(e,n,t),j(f,n,null),s(n,r),s(n,o),j(g,o,null),s(o,i),j(p,o,null),a=!0},p:e,i(e){a||(C(f.$$.fragment,e),C(g.$$.fragment,e),C(p.$$.fragment,e),a=!0)},o(e){F(f.$$.fragment,e),F(g.$$.fragment,e),F(p.$$.fragment,e),a=!1},d(e){e&&l(n),O(f),O(g),O(p)}}}function se(e,t,n){let{name:r}=t;return w(()=>{Promise.all([d3.json("./datasets/new-york-counties.geojson"),d3.csv("./datasets/county-lawsuits-filed-between-2015–2019.csv"),d3.csv("./datasets/facility-lawsuits-filed-between-2015–2019.csv")]).then((function(e){const t=e[0];t.features.forEach(t=>{const n=t.properties.NAME,r=e[1].find(e=>e.County===n);if(r){const e=H(t);t.properties={name:n,lawsuits:+r["Number of Lawsuits"],lawsuits_per_10000:+r["Rate per 10,000 People"],bounds:e}}else t.properties={name:n,lawsuits:null,lawsuits_per_10000:null}});const n={type:"FeatureCollection",features:[]};e[2].forEach(e=>{n.features.push({type:"Feature",properties:{name:e["Standardized Facility Name"].trim(),system:e.System.trim(),lawsuits:+e["Number of Lawsuits"],link:e.Link.trim(),id:e.ID},geometry:{type:"Point",coordinates:[e.Lng,e.Lat]}})}),V.set({county:t,facility:n})})).catch((function(e){console.error(e.message)}))}),e.$set=e=>{"name"in e&&n(0,r=e.name)},[r]}return new class extends N{constructor(e){super(),I(this,e,se,ae,i,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
