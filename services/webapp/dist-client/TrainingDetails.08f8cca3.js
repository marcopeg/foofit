parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"u89K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=a(require("prop-types")),r=require("react-redux"),n=u(require("../../../lib/MobilePage")),o=require("../programs.service"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e,t){var r=t.match,n=e.programs.items.find(function(e){return e.id===r.params.programId}),o=n?n.trainings.find(function(e){return e.id===r.params.trainingId}):null,u=o?n.exercises.reduce(function(e,t){return i({},e,b({},t.id,t))},{}):null,a=o?o.progression.map(function(e){return i({},e,u[e.id],{duration:"".concat(e.value).concat("duration"===u[e.id].type?"s":" reps")})}):null;return{training:o,exercises:a,isNotFound:Boolean(!n&&e.programs.items.length)||Boolean(!o&&n)}},v=function(e,t){var r=t.history,n=t.match;return{loadPrograms:function(){return e((0,o.updatePrograms)())},startTraining:function(){return r.push("".concat(n.url,"/play"))}}},O=function(t){function r(){return s(this,r),p(this,y(r).apply(this,arguments))}return g(r,e.default.PureComponent),f(r,[{key:"componentDidMount",value:function(){this.props.training||this.props.loadPrograms()}},{key:"renderBody",value:function(){return this.props.isNotFound?e.default.createElement(n.Text,{onClick:this.props.goBack},"training not found, click here to go to the list"):this.props.training?e.default.createElement("div",null,e.default.createElement("div",{style:{marginBottom:10}},e.default.createElement(n.Button,{block:!0,onClick:this.props.startTraining},"start training")),e.default.createElement(n.List,{items:this.props.exercises,subtitleProp:"duration"})):e.default.createElement(n.Text,null,"loading...")}},{key:"render",value:function(){return e.default.createElement(n.default,null,e.default.createElement(n.default.Header,null,this.props.training?this.props.training.title:"..."),e.default.createElement(n.default.Body,null,e.default.createElement(n.Padding,null,this.renderBody())))}}]),r}(),P=t.default.shape({id:t.default.string.isRequired,title:t.default.string.isRequired}),j=t.default.shape({id:t.default.string.isRequired,title:t.default.string.isRequired,duration:t.default.string.isRequired});O.propTypes={loadPrograms:t.default.func.isRequired,startTraining:t.default.func.isRequired,training:P,exercises:t.default.arrayOf(j),isNotFound:t.default.bool.isRequired},O.defaultProps={training:null,exercises:null};var _=(0,r.connect)(h,v)(O);exports.default=_;
},{"react":"HdMw","prop-types":"Iix9","react-redux":"sYSi","../../../lib/MobilePage":"wVtb","../programs.service":"oo3b"}]},{},[], null)
//# sourceMappingURL=/TrainingDetails.08f8cca3.map