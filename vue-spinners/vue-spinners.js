(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSpinners"] = factory();
	else
		root["VueSpinners"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _CircleLoader = __webpack_require__(1);
	
	var _CircleLoader2 = _interopRequireDefault(_CircleLoader);
	
	var _RainbowCircleLoader = __webpack_require__(8);
	
	var _RainbowCircleLoader2 = _interopRequireDefault(_RainbowCircleLoader);
	
	var _TilesLoader = __webpack_require__(13);
	
	var _TilesLoader2 = _interopRequireDefault(_TilesLoader);
	
	var _TraingleLoader = __webpack_require__(18);
	
	var _TraingleLoader2 = _interopRequireDefault(_TraingleLoader);
	
	var _DottedLoader = __webpack_require__(23);
	
	var _DottedLoader2 = _interopRequireDefault(_DottedLoader);
	
	var _SpinLoader = __webpack_require__(28);
	
	var _SpinLoader2 = _interopRequireDefault(_SpinLoader);
	
	var _HourLoader = __webpack_require__(33);
	
	var _HourLoader2 = _interopRequireDefault(_HourLoader);
	
	var _LineLoader = __webpack_require__(38);
	
	var _LineLoader2 = _interopRequireDefault(_LineLoader);
	
	var _PacLoader = __webpack_require__(43);
	
	var _PacLoader2 = _interopRequireDefault(_PacLoader);
	
	var _ProgressLoader = __webpack_require__(48);
	
	var _ProgressLoader2 = _interopRequireDefault(_ProgressLoader);
	
	var _MultidotLoader = __webpack_require__(53);
	
	var _MultidotLoader2 = _interopRequireDefault(_MultidotLoader);
	
	var _DominoLoader = __webpack_require__(58);
	
	var _DominoLoader2 = _interopRequireDefault(_DominoLoader);
	
	var _BoxLoader = __webpack_require__(63);
	
	var _BoxLoader2 = _interopRequireDefault(_BoxLoader);
	
	var _SphericalLoader = __webpack_require__(68);
	
	var _SphericalLoader2 = _interopRequireDefault(_SphericalLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueSpinners = {
	  CircleLoader: _CircleLoader2.default,
	  RainbowCircleLoader: _RainbowCircleLoader2.default,
	  TilesLoader: _TilesLoader2.default,
	  TraingleLoader: _TraingleLoader2.default,
	  DottedLoader: _DottedLoader2.default,
	  SpinLoader: _SpinLoader2.default,
	  HourLoader: _HourLoader2.default,
	  LineLoader: _LineLoader2.default,
	  PacLoader: _PacLoader2.default,
	  ProgressLoader: _ProgressLoader2.default,
	  MultidotLoader: _MultidotLoader2.default,
	  DominoLoader: _DominoLoader2.default,
	  BoxLoader: _BoxLoader2.default,
	  SphericalLoader: _SphericalLoader2.default
	};
	
	module.exports = VueSpinners;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/CircleLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e1767cce&file=CircleLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CircleLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e1767cce&file=CircleLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CircleLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-spinner {\n    text-align: center;\n}\n.v-circle {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    border-top: 3px solid #28B463;\n    animation: spin 1s linear infinite;\n}\n.v-spinner .v-circle\n{\n    animation: v-anim 0.75s 0s infinite linear;\n\t   animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@keyframes v-anim\n{\n    0%\n    {\n        transform: rotate(0deg);\n    }\n    100%\n    {\n        transform: rotate(360deg);\n    }\n}\n", "", {"version":3,"sources":["/./src/CircleLoader.vue.style"],"names":[],"mappings":";AAmDA;IACA,mBAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;IACA,8BAAA;IACA,mCAAA;CACA;AACA;;IAGA,2CAAA;IAEA,0BAAA;;IAEA,sBAAA;CACA;;AAgBA;;IAEA;;QAGA,wBAAA;KACA;IACA;;QAGA,0BAAA;KACA;CACA","file":"CircleLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\" :show=\"loading\">\n        <div class=\"v-circle\" :style=\"spinnerStyle\">\n\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'CircleLoader',\n    props: {\n        loading: {\n            type: Boolean,\n            default: true\n        },\n        color: {\n            type: String,\n            default: '#28B463'\n        },\n        size: {\n            type: String,\n            default: '35px'\n        },\n        radius: {\n            type: String,\n            default: '100%'\n        },\n        noborder: {\n            type: Boolean,\n            default: false\n        }\n    },\n    computed: {\n        spinnerStyle () {\n            let style = {\n                height: this.size,\n                width: this.size,\n                borderWidth: '2px',\n                borderStyle: !this.noborder ? 'solid' : '',\n                borderColor: !this.noborder ? this.color + ' ' + this.color + ' transparent' : '',\n                borderRadius: this.radius,\n                background: 'transparent'\n            }\n            return style;\n        }\n    }\n}\n</script>\n\n<style>\n.v-spinner {\n    text-align: center;\n}\n.v-circle {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    border-top: 3px solid #28B463;\n    animation: spin 1s linear infinite;\n}\n.v-spinner .v-circle\n{\n    -webkit-animation: v-anim 0.75s 0s infinite linear;\n            animation: v-anim 0.75s 0s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@-webkit-keyframes v-anim\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-anim\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner" :show="loading">
	//         <div class="v-circle" :style="spinnerStyle">
	//
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'CircleLoader',
	    props: {
	        loading: {
	            type: Boolean,
	            default: true
	        },
	        color: {
	            type: String,
	            default: '#28B463'
	        },
	        size: {
	            type: String,
	            default: '35px'
	        },
	        radius: {
	            type: String,
	            default: '100%'
	        },
	        noborder: {
	            type: Boolean,
	            default: false
	        }
	    },
	    computed: {
	        spinnerStyle: function spinnerStyle() {
	            var style = {
	                height: this.size,
	                width: this.size,
	                borderWidth: '2px',
	                borderStyle: !this.noborder ? 'solid' : '',
	                borderColor: !this.noborder ? this.color + ' ' + this.color + ' transparent' : '',
	                borderRadius: this.radius,
	                background: 'transparent'
	            };
	            return style;
	        }
	    }
	    // </script>
	    //
	    // <style>
	    // .v-spinner {
	    //     text-align: center;
	    // }
	    // .v-circle {
	    //     height: 50px;
	    //     width: 50px;
	    //     border-radius: 50%;
	    //     border-top: 3px solid #28B463;
	    //     animation: spin 1s linear infinite;
	    // }
	    // .v-spinner .v-circle
	    // {
	    //     -webkit-animation: v-anim 0.75s 0s infinite linear;
	    //             animation: v-anim 0.75s 0s infinite linear;
	    //     -webkit-animation-fill-mode: both;
	    // 	          animation-fill-mode: both;
	    //
	    //     display: inline-block;
	    // }
	    //
	    // @-webkit-keyframes v-anim
	    // {
	    //     0%
	    //     {
	    //         -webkit-transform: rotate(0deg);
	    //                 transform: rotate(0deg);
	    //     }
	    //     100%
	    //     {
	    //         -webkit-transform: rotate(360deg);
	    //                 transform: rotate(360deg);
	    //     }
	    // }
	    //
	    // @keyframes v-anim
	    // {
	    //     0%
	    //     {
	    //         -webkit-transform: rotate(0deg);
	    //                 transform: rotate(0deg);
	    //     }
	    //     100%
	    //     {
	    //         -webkit-transform: rotate(360deg);
	    //                 transform: rotate(360deg);
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\" :show=\"loading\">\n        <div class=\"v-circle\" :style=\"spinnerStyle\">\n\n        </div>\n    </div>\n";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/RainbowCircleLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9a48da9a&file=RainbowCircleLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RainbowCircleLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9a48da9a&file=RainbowCircleLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RainbowCircleLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-spinner {\n    \n}\n.v-rainbow {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    border-top: 3px solid #28B463;\n    border-bottom: 3px solid #28B463;\n    animation: spin 1s linear infinite;\n}\n.v-spinner .v-rainbow\n{\n    animation: v-anim 0.75s 0s infinite linear;\n\t   animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@keyframes v-anim\n{\n    0%\n    {\n        transform: rotate(0deg);\n    }\n    100%\n    {\n        transform: rotate(360deg);\n    }\n}\n", "", {"version":3,"sources":["/./src/RainbowCircleLoader.vue.style"],"names":[],"mappings":";AAiDA;;CAEA;AACA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;IACA,8BAAA;IACA,iCAAA;IACA,mCAAA;CACA;AACA;;IAGA,2CAAA;IAEA,0BAAA;;IAEA,sBAAA;CACA;;AAgBA;;IAEA;;QAGA,wBAAA;KACA;IACA;;QAGA,0BAAA;KACA;CACA","file":"RainbowCircleLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\" :show=\"loading\">\n        <div class=\"v-rainbow\" :style=\"spinnerStyle\">\n\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'RainbowCircleLoader',\n    props: {\n        loading: {\n            type: Boolean,\n            default: true\n        },\n        color: {\n            type: String,\n            default: '#28B463'\n        },\n        size: {\n            type: String,\n            default: '35px'\n        },\n        radius: {\n            type: String,\n            default: '100%'\n        },\n        noborder: {\n            type: Boolean,\n            default: false\n        }\n    },\n    computed: {\n        spinnerStyle () {\n            let style = {\n                height: this.size,\n                width: this.size,\n                borderWidth: '2px',\n                borderRadius: this.radius,\n                background: 'transparent'\n            }\n            return style;\n        }\n    }\n}\n</script>\n\n<style>\n.v-spinner {\n    \n}\n.v-rainbow {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    border-top: 3px solid #28B463;\n    border-bottom: 3px solid #28B463;\n    animation: spin 1s linear infinite;\n}\n.v-spinner .v-rainbow\n{\n    -webkit-animation: v-anim 0.75s 0s infinite linear;\n            animation: v-anim 0.75s 0s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@-webkit-keyframes v-anim\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-anim\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner" :show="loading">
	//         <div class="v-rainbow" :style="spinnerStyle">
	//
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'RainbowCircleLoader',
	    props: {
	        loading: {
	            type: Boolean,
	            default: true
	        },
	        color: {
	            type: String,
	            default: '#28B463'
	        },
	        size: {
	            type: String,
	            default: '35px'
	        },
	        radius: {
	            type: String,
	            default: '100%'
	        },
	        noborder: {
	            type: Boolean,
	            default: false
	        }
	    },
	    computed: {
	        spinnerStyle: function spinnerStyle() {
	            var style = {
	                height: this.size,
	                width: this.size,
	                borderWidth: '2px',
	                borderRadius: this.radius,
	                background: 'transparent'
	            };
	            return style;
	        }
	    }
	    // </script>
	    //
	    // <style>
	    // .v-spinner {
	    //
	    // }
	    // .v-rainbow {
	    //     height: 50px;
	    //     width: 50px;
	    //     border-radius: 50%;
	    //     border-top: 3px solid #28B463;
	    //     border-bottom: 3px solid #28B463;
	    //     animation: spin 1s linear infinite;
	    // }
	    // .v-spinner .v-rainbow
	    // {
	    //     -webkit-animation: v-anim 0.75s 0s infinite linear;
	    //             animation: v-anim 0.75s 0s infinite linear;
	    //     -webkit-animation-fill-mode: both;
	    // 	          animation-fill-mode: both;
	    //
	    //     display: inline-block;
	    // }
	    //
	    // @-webkit-keyframes v-anim
	    // {
	    //     0%
	    //     {
	    //         -webkit-transform: rotate(0deg);
	    //                 transform: rotate(0deg);
	    //     }
	    //     100%
	    //     {
	    //         -webkit-transform: rotate(360deg);
	    //                 transform: rotate(360deg);
	    //     }
	    // }
	    //
	    // @keyframes v-anim
	    // {
	    //     0%
	    //     {
	    //         -webkit-transform: rotate(0deg);
	    //                 transform: rotate(0deg);
	    //     }
	    //     100%
	    //     {
	    //         -webkit-transform: rotate(360deg);
	    //                 transform: rotate(360deg);
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\" :show=\"loading\">\n        <div class=\"v-rainbow\" :style=\"spinnerStyle\">\n\n        </div>\n    </div>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(14)
	__vue_script__ = __webpack_require__(16)
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/TilesLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7847eb52&file=TilesLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TilesLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7847eb52&file=TilesLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TilesLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-spinner {\n\n}\n\n.v-spinner .v-tiles\n{\n    animation: v-anim 2s 0s infinite linear;\n\t   animation-fill-mode: both;\n    display: inline-block;\n}\n\n@keyframes v-anim\n{\n    0%\n    {\n        transform: rotate(0deg);\n    }\n    50%\n    {\n        transform: rotate(180deg);\n    }\n    100%\n    {\n        transform: rotate(360deg);\n    }\n}\n", "", {"version":3,"sources":["/./src/TilesLoader.vue.style"],"names":[],"mappings":";AAuCA;;CAEA;;AAEA;;IAGA,wCAAA;IAEA,0BAAA;IACA,sBAAA;CACA;;AAqBA;;IAEA;;QAGA,wBAAA;KACA;IACA;;QAGA,0BAAA;KACA;IACA;;QAGA,0BAAA;KACA;CACA","file":"TilesLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\" :show=\"loading\">\n        <div class=\"v-tiles\" :style=\"spinnerStyle\">\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'TilesLoader',\n    props: {\n        loading: {\n            type: Boolean,\n            default: true\n        },\n        color: {\n            type: String,\n            default: '#28B463'\n        },\n        size: {\n            type: String,\n            default: '50px'\n        }\n    },\n    computed: {\n        spinnerStyle () {\n            let style = {\n                height: this.size,\n                width: this.size,\n                borderWidth: '2px',\n                background: this.color\n            }\n            return style;\n        }\n    }\n}\n</script>\n\n<style>\n.v-spinner {\n\n}\n\n.v-spinner .v-tiles\n{\n    -webkit-animation: v-anim 2s 0s infinite linear;\n            animation: v-anim 2s 0s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;\n}\n\n@-webkit-keyframes v-anim\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-anim\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner" :show="loading">
	//         <div class="v-tiles" :style="spinnerStyle">
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'TilesLoader',
	    props: {
	        loading: {
	            type: Boolean,
	            default: true
	        },
	        color: {
	            type: String,
	            default: '#28B463'
	        },
	        size: {
	            type: String,
	            default: '50px'
	        }
	    },
	    computed: {
	        spinnerStyle: function spinnerStyle() {
	            var style = {
	                height: this.size,
	                width: this.size,
	                borderWidth: '2px',
	                background: this.color
	            };
	            return style;
	        }
	    }
	    // </script>
	    //
	    // <style>
	    // .v-spinner {
	    //
	    // }
	    //
	    // .v-spinner .v-tiles
	    // {
	    //     -webkit-animation: v-anim 2s 0s infinite linear;
	    //             animation: v-anim 2s 0s infinite linear;
	    //     -webkit-animation-fill-mode: both;
	    // 	          animation-fill-mode: both;
	    //     display: inline-block;
	    // }
	    //
	    // @-webkit-keyframes v-anim
	    // {
	    //     0%
	    //     {
	    //         -webkit-transform: rotate(0deg);
	    //                 transform: rotate(0deg);
	    //     }
	    //     50%
	    //     {
	    //         -webkit-transform: rotate(180deg);
	    //                 transform: rotate(180deg);
	    //     }
	    //     100%
	    //     {
	    //         -webkit-transform: rotate(360deg);
	    //                 transform: rotate(360deg);
	    //     }
	    // }
	    //
	    // @keyframes v-anim
	    // {
	    //     0%
	    //     {
	    //         -webkit-transform: rotate(0deg);
	    //                 transform: rotate(0deg);
	    //     }
	    //     50%
	    //     {
	    //         -webkit-transform: rotate(180deg);
	    //                 transform: rotate(180deg);
	    //     }
	    //     100%
	    //     {
	    //         -webkit-transform: rotate(360deg);
	    //                 transform: rotate(360deg);
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\" :show=\"loading\">\n        <div class=\"v-tiles\" :style=\"spinnerStyle\">\n        </div>\n    </div>\n";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(19)
	__vue_script__ = __webpack_require__(21)
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/TraingleLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6cdf373e&file=TraingleLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TraingleLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6cdf373e&file=TraingleLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TraingleLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-traingle {\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n    border-bottom: 25px solid #28B463;\n}\n.v-spinner .v-traingle {\n    animation: anim 2s 0s infinite cubic-bezier(.09, .47, .47, .9);\n}\n@keyframes anim {\n    0% {\n        transform: perspective(100px) rotateX(180deg) rotateY(0deg);\n    }\n    50% {\n        transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    }\n    75% {\n        transform: perspective(100px) rotateX(0deg) rotateY(180deg);\n    }\n    100% {\n        transform: perspective(100px) rotateX(0deg) rotateY(0deg);\n    }\n}\n", "", {"version":3,"sources":["/./src/TraingleLoader.vue.style"],"names":[],"mappings":";AAkBA;IACA,oCAAA;IACA,qCAAA;IACA,kCAAA;CACA;AACA;IACA,+DAAA;CACA;AAmBA;IACA;QAEA,4DAAA;KACA;IACA;QAEA,8DAAA;KACA;IACA;QAEA,4DAAA;KACA;IACA;QAEA,0DAAA;KACA;CACA","file":"TraingleLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-traingle\">\n\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'TraingleLoader',\n    props: {\n\n    }\n}\n</script>\n\n<style>\n.v-traingle {\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n    border-bottom: 25px solid #28B463;\n}\n.v-spinner .v-traingle {\n    animation: anim 2s 0s infinite cubic-bezier(.09, .47, .47, .9);\n}\n@-webkit-keyframes anim {\n    0% {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0deg);\n        transform: perspective(100px) rotateX(180deg) rotateY(0deg);\n    }\n    50% {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n        transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    }\n    75% {\n        -webkit-transform: perspective(100px) rotateX(0deg) rotateY(180deg);\n        transform: perspective(100px) rotateX(0deg) rotateY(180deg);\n    }\n    100% {\n        -webkit-transform: perspective(100px) rotateX(0deg) rotateY(0deg);\n        transform: perspective(100px) rotateX(0deg) rotateY(0deg);\n    }\n}\n@keyframes anim {\n    0% {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0deg);\n        transform: perspective(100px) rotateX(180deg) rotateY(0deg);\n    }\n    50% {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n        transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    }\n    75% {\n        -webkit-transform: perspective(100px) rotateX(0deg) rotateY(180deg);\n        transform: perspective(100px) rotateX(0deg) rotateY(180deg);\n    }\n    100% {\n        -webkit-transform: perspective(100px) rotateX(0deg) rotateY(0deg);\n        transform: perspective(100px) rotateX(0deg) rotateY(0deg);\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-traingle">
	//
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'TraingleLoader',
	    props: {}
	    // </script>
	    //
	    // <style>
	    // .v-traingle {
	    //     border-left: 25px solid transparent;
	    //     border-right: 25px solid transparent;
	    //     border-bottom: 25px solid #28B463;
	    // }
	    // .v-spinner .v-traingle {
	    //     animation: anim 2s 0s infinite cubic-bezier(.09, .47, .47, .9);
	    // }
	    // @-webkit-keyframes anim {
	    //     0% {
	    //         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0deg);
	    //         transform: perspective(100px) rotateX(180deg) rotateY(0deg);
	    //     }
	    //     50% {
	    //         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	    //         transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	    //     }
	    //     75% {
	    //         -webkit-transform: perspective(100px) rotateX(0deg) rotateY(180deg);
	    //         transform: perspective(100px) rotateX(0deg) rotateY(180deg);
	    //     }
	    //     100% {
	    //         -webkit-transform: perspective(100px) rotateX(0deg) rotateY(0deg);
	    //         transform: perspective(100px) rotateX(0deg) rotateY(0deg);
	    //     }
	    // }
	    // @keyframes anim {
	    //     0% {
	    //         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0deg);
	    //         transform: perspective(100px) rotateX(180deg) rotateY(0deg);
	    //     }
	    //     50% {
	    //         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	    //         transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	    //     }
	    //     75% {
	    //         -webkit-transform: perspective(100px) rotateX(0deg) rotateY(180deg);
	    //         transform: perspective(100px) rotateX(0deg) rotateY(180deg);
	    //     }
	    //     100% {
	    //         -webkit-transform: perspective(100px) rotateX(0deg) rotateY(0deg);
	    //         transform: perspective(100px) rotateX(0deg) rotateY(0deg);
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-traingle\">\n\n        </div>\n    </div>\n";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(24)
	__vue_script__ = __webpack_require__(26)
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/DottedLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5ba9e673&file=DottedLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DottedLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5ba9e673&file=DottedLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DottedLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-dotted {\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.dot1, .dot2, .dot3 {\n    height: 20px;\n    width: 20px;\n    background-color: #28B463;\n    border-radius: 50%;\n    animation-iteration-count: infinite;\n    animation-duration: 0.75s;\n    padding-right: 3px;\n    animation-name: dottedanim;\n}\n.dot1 {\n    animation-delay: 0.12s;\n}\n.dot2 {\n    animation-delay: 0.24s;\n}\n.dot3 {\n    animation-delay: 0.36s;\n}\n@keyframes dottedanim {\n    0%{\n        transform: scale(1);\n    }\n    40% {\n        transform: scale(0);\n        opacity: 0;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n", "", {"version":3,"sources":["/./src/DottedLoader.vue.style"],"names":[],"mappings":";AAoBA;IACA,4BAAA;IAAA,qBAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,0BAAA;IACA,mBAAA;IACA,oCAAA;IACA,0BAAA;IACA,mBAAA;IACA,2BAAA;CACA;AACA;IACA,uBAAA;CACA;AACA;IACA,uBAAA;CACA;AACA;IACA,uBAAA;CACA;AACA;IACA;QACA,oBAAA;KACA;IACA;QACA,oBAAA;QACA,WAAA;KACA;IACA;QACA,oBAAA;QACA,WAAA;KACA;CACA","file":"DottedLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-dotted\">\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot3\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'DottedLoader',\n    props: {\n\n    }\n}\n</script>\n\n<style>\n.v-dotted {\n    display: inline-flex;\n}\n.dot1, .dot2, .dot3 {\n    height: 20px;\n    width: 20px;\n    background-color: #28B463;\n    border-radius: 50%;\n    animation-iteration-count: infinite;\n    animation-duration: 0.75s;\n    padding-right: 3px;\n    animation-name: dottedanim;\n}\n.dot1 {\n    animation-delay: 0.12s;\n}\n.dot2 {\n    animation-delay: 0.24s;\n}\n.dot3 {\n    animation-delay: 0.36s;\n}\n@keyframes dottedanim {\n    0%{\n        transform: scale(1);\n    }\n    40% {\n        transform: scale(0);\n        opacity: 0;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-dotted">
	//             <div class="dot1"></div>
	//             <div class="dot2"></div>
	//             <div class="dot3"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'DottedLoader',
	    props: {}
	    // </script>
	    //
	    // <style>
	    // .v-dotted {
	    //     display: inline-flex;
	    // }
	    // .dot1, .dot2, .dot3 {
	    //     height: 20px;
	    //     width: 20px;
	    //     background-color: #28B463;
	    //     border-radius: 50%;
	    //     animation-iteration-count: infinite;
	    //     animation-duration: 0.75s;
	    //     padding-right: 3px;
	    //     animation-name: dottedanim;
	    // }
	    // .dot1 {
	    //     animation-delay: 0.12s;
	    // }
	    // .dot2 {
	    //     animation-delay: 0.24s;
	    // }
	    // .dot3 {
	    //     animation-delay: 0.36s;
	    // }
	    // @keyframes dottedanim {
	    //     0%{
	    //         transform: scale(1);
	    //     }
	    //     40% {
	    //         transform: scale(0);
	    //         opacity: 0;
	    //     }
	    //     100% {
	    //         transform: scale(1);
	    //         opacity: 1;
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-dotted\">\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot3\"></div>\n        </div>\n    </div>\n";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(29)
	__vue_script__ = __webpack_require__(31)
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/SpinLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6a509e0b&file=SpinLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SpinLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6a509e0b&file=SpinLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SpinLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-spin {\n    height: 50px;\n    width: 50px;\n    border: 6px solid gainsboro;\n    border-radius: 50%;\n    animation: spin 1s infinite linear;\n    animation-iteration-count: infinite\n}\n.v-spin-circle {\n    border-radius: 50%;\n    height: 7px;\n    width: 7px;\n    background-color: #28B463;\n}\n@keyframes spin {\n    0%{\n        transform: perspective(180px) rotate(0deg)\n    }\n    50%{\n        transform: perspective(180px) rotate(180deg)\n    }\n    100%{\n        transform: perspective(180px) rotate(360deg)\n    }\n}\n", "", {"version":3,"sources":["/./src/SpinLoader.vue.style"],"names":[],"mappings":";AAeA;IACA,aAAA;IACA,YAAA;IACA,4BAAA;IACA,mBAAA;IACA,mCAAA;IACA,mCAAA;CACA;AACA;IACA,mBAAA;IACA,YAAA;IACA,WAAA;IACA,0BAAA;CACA;AACA;IACA;QACA,0CAAA;KACA;IACA;QACA,4CAAA;KACA;IACA;QACA,4CAAA;KACA;CACA","file":"SpinLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-spin\">\n            <div class=\"v-spin-circle\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'SpinLoader'\n}\n</script>\n\n<style>\n.v-spin {\n    height: 50px;\n    width: 50px;\n    border: 6px solid gainsboro;\n    border-radius: 50%;\n    animation: spin 1s infinite linear;\n    animation-iteration-count: infinite\n}\n.v-spin-circle {\n    border-radius: 50%;\n    height: 7px;\n    width: 7px;\n    background-color: #28B463;\n}\n@keyframes spin {\n    0%{\n        transform: perspective(180px) rotate(0deg)\n    }\n    50%{\n        transform: perspective(180px) rotate(180deg)\n    }\n    100%{\n        transform: perspective(180px) rotate(360deg)\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-spin">
	//             <div class="v-spin-circle"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'SpinLoader'
	    // </script>
	    //
	    // <style>
	    // .v-spin {
	    //     height: 50px;
	    //     width: 50px;
	    //     border: 6px solid gainsboro;
	    //     border-radius: 50%;
	    //     animation: spin 1s infinite linear;
	    //     animation-iteration-count: infinite
	    // }
	    // .v-spin-circle {
	    //     border-radius: 50%;
	    //     height: 7px;
	    //     width: 7px;
	    //     background-color: #28B463;
	    // }
	    // @keyframes spin {
	    //     0%{
	    //         transform: perspective(180px) rotate(0deg)
	    //     }
	    //     50%{
	    //         transform: perspective(180px) rotate(180deg)
	    //     }
	    //     100%{
	    //         transform: perspective(180px) rotate(360deg)
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-spin\">\n            <div class=\"v-spin-circle\"></div>\n        </div>\n    </div>\n";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(34)
	__vue_script__ = __webpack_require__(36)
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/HourLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-772c792d&file=HourLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HourLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-772c792d&file=HourLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HourLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.hr {\n    border-top: 25px solid #28B463;\n    border-right: 25px solid transparent;\n    border-bottom: 25px solid #28B463;\n    border-left: 25px solid transparent;\n    border-radius: 50%;\n    animation: v-anim 2s infinite linear;\n}\n", "", {"version":3,"sources":["/./src/HourLoader.vue.style"],"names":[],"mappings":";AAeA;IACA,+BAAA;IACA,qCAAA;IACA,kCAAA;IACA,oCAAA;IACA,mBAAA;IACA,qCAAA;CACA","file":"HourLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-hour\">\n            <div class=\"hr\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'HourLoader',\n}\n</script>\n\n<style>\n.hr {\n    border-top: 25px solid #28B463;\n    border-right: 25px solid transparent;\n    border-bottom: 25px solid #28B463;\n    border-left: 25px solid transparent;\n    border-radius: 50%;\n    animation: v-anim 2s infinite linear;\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-hour">
	//             <div class="hr"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'HourLoader'
	    // </script>
	    //
	    // <style>
	    // .hr {
	    //     border-top: 25px solid #28B463;
	    //     border-right: 25px solid transparent;
	    //     border-bottom: 25px solid #28B463;
	    //     border-left: 25px solid transparent;
	    //     border-radius: 50%;
	    //     animation: v-anim 2s infinite linear;
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-hour\">\n            <div class=\"hr\"></div>\n        </div>\n    </div>\n";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(39)
	__vue_script__ = __webpack_require__(41)
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/LineLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-bbce4186&file=LineLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./LineLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-bbce4186&file=LineLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./LineLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-line {\n    height: 50px;\n    width: 50px;\n}\n.line1, .line2, .line3, .line4, .line5 {\n    height: 35px;\n    width: 5px;\n    border-radius: 2px;\n    background: #28B463;\n    animation: grow 1s infinite;\n    animation-iteration-count: infinite;\n    display: inline-block;\n}\n.line1 {\n    animation-delay: 0.1s\n}\n.line2 {\n    animation-delay: 0.2s\n}\n.line3 {\n    animation-delay: 0.3s\n}\n.line4 {\n    animation-delay: 0.4s\n}\n.line5 {\n    animation-delay: 0.5s\n}\n@keyframes grow {\n    0%{\n        transform: scaleY(1);\n    }\n    50%{\n        transform: scaleY(0.4);\n    }\n    100% {\n        transform: scaleY(1);\n    }\n}\n", "", {"version":3,"sources":["/./src/LineLoader.vue.style"],"names":[],"mappings":";AAmBA;IACA,aAAA;IACA,YAAA;CACA;AACA;IACA,aAAA;IACA,WAAA;IACA,mBAAA;IACA,oBAAA;IACA,4BAAA;IACA,oCAAA;IACA,sBAAA;CACA;AACA;IACA,qBAAA;CACA;AACA;IACA,qBAAA;CACA;AACA;IACA,qBAAA;CACA;AACA;IACA,qBAAA;CACA;AACA;IACA,qBAAA;CACA;AACA;IACA;QACA,qBAAA;KACA;IACA;QACA,uBAAA;KACA;IACA;QACA,qBAAA;KACA;CACA","file":"LineLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-line\">\n            <div class=\"line1\"></div>\n            <div class=\"line2\"></div>\n            <div class=\"line3\"></div>\n            <div class=\"line4\"></div>\n            <div class=\"line5\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'LineLoader'\n}\n</script>\n\n<style>\n.v-line {\n    height: 50px;\n    width: 50px;\n}\n.line1, .line2, .line3, .line4, .line5 {\n    height: 35px;\n    width: 5px;\n    border-radius: 2px;\n    background: #28B463;\n    animation: grow 1s infinite;\n    animation-iteration-count: infinite;\n    display: inline-block;\n}\n.line1 {\n    animation-delay: 0.1s\n}\n.line2 {\n    animation-delay: 0.2s\n}\n.line3 {\n    animation-delay: 0.3s\n}\n.line4 {\n    animation-delay: 0.4s\n}\n.line5 {\n    animation-delay: 0.5s\n}\n@keyframes grow {\n    0%{\n        transform: scaleY(1);\n    }\n    50%{\n        transform: scaleY(0.4);\n    }\n    100% {\n        transform: scaleY(1);\n    }\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-line">
	//             <div class="line1"></div>
	//             <div class="line2"></div>
	//             <div class="line3"></div>
	//             <div class="line4"></div>
	//             <div class="line5"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'LineLoader'
	    // </script>
	    //
	    // <style>
	    // .v-line {
	    //     height: 50px;
	    //     width: 50px;
	    // }
	    // .line1, .line2, .line3, .line4, .line5 {
	    //     height: 35px;
	    //     width: 5px;
	    //     border-radius: 2px;
	    //     background: #28B463;
	    //     animation: grow 1s infinite;
	    //     animation-iteration-count: infinite;
	    //     display: inline-block;
	    // }
	    // .line1 {
	    //     animation-delay: 0.1s
	    // }
	    // .line2 {
	    //     animation-delay: 0.2s
	    // }
	    // .line3 {
	    //     animation-delay: 0.3s
	    // }
	    // .line4 {
	    //     animation-delay: 0.4s
	    // }
	    // .line5 {
	    //     animation-delay: 0.5s
	    // }
	    // @keyframes grow {
	    //     0%{
	    //         transform: scaleY(1);
	    //     }
	    //     50%{
	    //         transform: scaleY(0.4);
	    //     }
	    //     100% {
	    //         transform: scaleY(1);
	    //     }
	    // }
	    // </style>
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-line\">\n            <div class=\"line1\"></div>\n            <div class=\"line2\"></div>\n            <div class=\"line3\"></div>\n            <div class=\"line4\"></div>\n            <div class=\"line5\"></div>\n        </div>\n    </div>\n";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(44)
	__vue_script__ = __webpack_require__(46)
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/PacLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1deeb49f&file=PacLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./PacLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1deeb49f&file=PacLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./PacLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-center {\n    display: block;\n    text-align: center;\n    position: relative;\n}\n.v-pac-man {\n    height: 50px;\n    width: 50px;\n    border-right: 25px solid transparent;\n    border-top: 25px solid #28B463;\n    border-bottom: 25px solid #28B463;\n    border-left: 25px solid #28B463;\n    border-radius: 50%;\n    position: relative;\n    float: left;\n}\n.obstacle1, .obstacle2, .obstacle3, .obstacle4, .obstacle5 {\n    height: 10px;\n    width: 10px;\n    background-color: #28B463;\n    border-radius: 50%;\n    display: inline-block;\n    margin-top: 21px;\n    padding-right: 5px;\n    animation: move 1s infinite linear;\n    transform: translate(0px, -1.25px);\n    position: absolute;\n    left: 100px;\n}\n.obstacle1 {\n    animation-delay: 0.25s;\n}\n.obstacle2 {\n    animation-delay: 0.5s;\n}\n.obstacle3 {\n    animation-delay: 0.75s;\n}\n.obstacle4 {\n    animation-delay: 1s;\n}\n\n@keyframes move {\n    100% {\n        transform: translate(-100px, -1.25px)\n    }\n}\n", "", {"version":3,"sources":["/./src/PacLoader.vue.style"],"names":[],"mappings":";AAiBA;IACA,eAAA;IACA,mBAAA;IACA,mBAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,qCAAA;IACA,+BAAA;IACA,kCAAA;IACA,gCAAA;IACA,mBAAA;IACA,mBAAA;IACA,YAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,0BAAA;IACA,mBAAA;IACA,sBAAA;IACA,iBAAA;IACA,mBAAA;IACA,mCAAA;IACA,mCAAA;IACA,mBAAA;IACA,YAAA;CACA;AACA;IACA,uBAAA;CACA;AACA;IACA,sBAAA;CACA;AACA;IACA,uBAAA;CACA;AACA;IACA,oBAAA;CACA;;AAEA;IACA;QACA,qCAAA;KACA;CACA","file":"PacLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner v-center\">\n        <div class=\"v-pac-man\"></div>\n        <div class=\"obstacle1\"></div>\n        <div class=\"obstacle2\"></div>\n        <div class=\"obstacle3\"></div>\n        <div class=\"obstacle4\"></div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'PacLoader'\n}\n</script>\n\n<style>\n.v-center {\n    display: block;\n    text-align: center;\n    position: relative;\n}\n.v-pac-man {\n    height: 50px;\n    width: 50px;\n    border-right: 25px solid transparent;\n    border-top: 25px solid #28B463;\n    border-bottom: 25px solid #28B463;\n    border-left: 25px solid #28B463;\n    border-radius: 50%;\n    position: relative;\n    float: left;\n}\n.obstacle1, .obstacle2, .obstacle3, .obstacle4, .obstacle5 {\n    height: 10px;\n    width: 10px;\n    background-color: #28B463;\n    border-radius: 50%;\n    display: inline-block;\n    margin-top: 21px;\n    padding-right: 5px;\n    animation: move 1s infinite linear;\n    transform: translate(0px, -1.25px);\n    position: absolute;\n    left: 100px;\n}\n.obstacle1 {\n    animation-delay: 0.25s;\n}\n.obstacle2 {\n    animation-delay: 0.5s;\n}\n.obstacle3 {\n    animation-delay: 0.75s;\n}\n.obstacle4 {\n    animation-delay: 1s;\n}\n\n@keyframes move {\n    100% {\n        transform: translate(-100px, -1.25px)\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner v-center">
	//         <div class="v-pac-man"></div>
	//         <div class="obstacle1"></div>
	//         <div class="obstacle2"></div>
	//         <div class="obstacle3"></div>
	//         <div class="obstacle4"></div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'PacLoader'
	    // </script>
	    //
	    // <style>
	    // .v-center {
	    //     display: block;
	    //     text-align: center;
	    //     position: relative;
	    // }
	    // .v-pac-man {
	    //     height: 50px;
	    //     width: 50px;
	    //     border-right: 25px solid transparent;
	    //     border-top: 25px solid #28B463;
	    //     border-bottom: 25px solid #28B463;
	    //     border-left: 25px solid #28B463;
	    //     border-radius: 50%;
	    //     position: relative;
	    //     float: left;
	    // }
	    // .obstacle1, .obstacle2, .obstacle3, .obstacle4, .obstacle5 {
	    //     height: 10px;
	    //     width: 10px;
	    //     background-color: #28B463;
	    //     border-radius: 50%;
	    //     display: inline-block;
	    //     margin-top: 21px;
	    //     padding-right: 5px;
	    //     animation: move 1s infinite linear;
	    //     transform: translate(0px, -1.25px);
	    //     position: absolute;
	    //     left: 100px;
	    // }
	    // .obstacle1 {
	    //     animation-delay: 0.25s;
	    // }
	    // .obstacle2 {
	    //     animation-delay: 0.5s;
	    // }
	    // .obstacle3 {
	    //     animation-delay: 0.75s;
	    // }
	    // .obstacle4 {
	    //     animation-delay: 1s;
	    // }
	    //
	    // @keyframes move {
	    //     100% {
	    //         transform: translate(-100px, -1.25px)
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner v-center\">\n        <div class=\"v-pac-man\"></div>\n        <div class=\"obstacle1\"></div>\n        <div class=\"obstacle2\"></div>\n        <div class=\"obstacle3\"></div>\n        <div class=\"obstacle4\"></div>\n    </div>\n";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(49)
	__vue_script__ = __webpack_require__(51)
	__vue_template__ = __webpack_require__(52)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/ProgressLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5e5a8f36&file=ProgressLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ProgressLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5e5a8f36&file=ProgressLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ProgressLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-progress {\n    height: 5px;\n    background-color: #28B463;\n    border-radius: 5px;\n}\n.progress {\n    height: 5px;\n    background-color: #28B463;\n    border-radius: 5px;\n    animation: load 1s infinite linear;\n}\n@keyframes load {\n    0% {\n        width: 0px;\n    }\n    25% {\n        width: 25px;\n    }\n    50% {\n        width: 75px;\n    }\n    100% {\n        width: 100px;\n    }\n}\n", "", {"version":3,"sources":["/./src/ProgressLoader.vue.style"],"names":[],"mappings":";AAeA;IACA,YAAA;IACA,0BAAA;IACA,mBAAA;CACA;AACA;IACA,YAAA;IACA,0BAAA;IACA,mBAAA;IACA,mCAAA;CACA;AACA;IACA;QACA,WAAA;KACA;IACA;QACA,YAAA;KACA;IACA;QACA,YAAA;KACA;IACA;QACA,aAAA;KACA;CACA","file":"ProgressLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-progress\">\n            <div class=\"progress\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'ProgressLoader'\n}\n</script>\n\n<style>\n.v-progress {\n    height: 5px;\n    background-color: #28B463;\n    border-radius: 5px;\n}\n.progress {\n    height: 5px;\n    background-color: #28B463;\n    border-radius: 5px;\n    animation: load 1s infinite linear;\n}\n@keyframes load {\n    0% {\n        width: 0px;\n    }\n    25% {\n        width: 25px;\n    }\n    50% {\n        width: 75px;\n    }\n    100% {\n        width: 100px;\n    }\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-progress">
	//             <div class="progress"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'ProgressLoader'
	    // </script>
	    //
	    // <style>
	    // .v-progress {
	    //     height: 5px;
	    //     background-color: #28B463;
	    //     border-radius: 5px;
	    // }
	    // .progress {
	    //     height: 5px;
	    //     background-color: #28B463;
	    //     border-radius: 5px;
	    //     animation: load 1s infinite linear;
	    // }
	    // @keyframes load {
	    //     0% {
	    //         width: 0px;
	    //     }
	    //     25% {
	    //         width: 25px;
	    //     }
	    //     50% {
	    //         width: 75px;
	    //     }
	    //     100% {
	    //         width: 100px;
	    //     }
	    // }
	    // </style>
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-progress\">\n            <div class=\"progress\"></div>\n        </div>\n    </div>\n";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(54)
	__vue_script__ = __webpack_require__(56)
	__vue_template__ = __webpack_require__(57)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/MultidotLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f63f628e&file=MultidotLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MultidotLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f63f628e&file=MultidotLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MultidotLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-multidot {\n    width: 100px;\n    height: 100px;\n}\n.property {\n    height: 10px;\n    width: 10px;\n    background-color: #28B463;\n    bottom: 0px;\n    /* left: -2px; */\n    position: absolute;\n    /* transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -64px); */\n    animation: climb 3s infinite linear;\n}\n.ladder {\n    height: 5px;\n    width: 100px;\n    background-color: #28B463;\n    transform: rotate3d(0.5, 0, 1, -50deg);\n}\n@keyframes climb{\n    0%{\n        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, 0px) rotate(0deg);\n    }\n    25% {\n        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -25px) rotate(180deg);\n    }\n    50%{\n        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -50px) rotate(360deg);\n    }\n    75%{\n        transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -75px) rotate(0deg);\n    }\n    100%{\n        transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -105px) rotate(180deg);\n    }\n}\n", "", {"version":3,"sources":["/./src/MultidotLoader.vue.style"],"names":[],"mappings":";AAgBA;IACA,aAAA;IACA,cAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,0BAAA;IACA,YAAA;IACA,iBAAA;IACA,mBAAA;IACA,kEAAA;IACA,oCAAA;CACA;AACA;IACA,YAAA;IACA,aAAA;IACA,0BAAA;IACA,uCAAA;CACA;AACA;IACA;QACA,uEAAA;KACA;IACA;QACA,2EAAA;KACA;IACA;QACA,2EAAA;KACA;IACA;QACA,0EAAA;KACA;IACA;QACA,6EAAA;KACA;CACA","file":"MultidotLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-multidot\">\n            <div class=\"property\"></div>\n            <div class=\"ladder\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'MultidotLoader'\n}\n</script>\n\n<style>\n.v-multidot {\n    width: 100px;\n    height: 100px;\n}\n.property {\n    height: 10px;\n    width: 10px;\n    background-color: #28B463;\n    bottom: 0px;\n    /* left: -2px; */\n    position: absolute;\n    /* transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -64px); */\n    animation: climb 3s infinite linear;\n}\n.ladder {\n    height: 5px;\n    width: 100px;\n    background-color: #28B463;\n    transform: rotate3d(0.5, 0, 1, -50deg);\n}\n@keyframes climb{\n    0%{\n        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, 0px) rotate(0deg);\n    }\n    25% {\n        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -25px) rotate(180deg);\n    }\n    50%{\n        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -50px) rotate(360deg);\n    }\n    75%{\n        transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -75px) rotate(0deg);\n    }\n    100%{\n        transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -105px) rotate(180deg);\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-multidot">
	//             <div class="property"></div>
	//             <div class="ladder"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'MultidotLoader'
	    // </script>
	    //
	    // <style>
	    // .v-multidot {
	    //     width: 100px;
	    //     height: 100px;
	    // }
	    // .property {
	    //     height: 10px;
	    //     width: 10px;
	    //     background-color: #28B463;
	    //     bottom: 0px;
	    //     /* left: -2px; */
	    //     position: absolute;
	    //     /* transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -64px); */
	    //     animation: climb 3s infinite linear;
	    // }
	    // .ladder {
	    //     height: 5px;
	    //     width: 100px;
	    //     background-color: #28B463;
	    //     transform: rotate3d(0.5, 0, 1, -50deg);
	    // }
	    // @keyframes climb{
	    //     0%{
	    //         transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, 0px) rotate(0deg);
	    //     }
	    //     25% {
	    //         transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -25px) rotate(180deg);
	    //     }
	    //     50%{
	    //         transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -50px) rotate(360deg);
	    //     }
	    //     75%{
	    //         transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -75px) rotate(0deg);
	    //     }
	    //     100%{
	    //         transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -105px) rotate(180deg);
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-multidot\">\n            <div class=\"property\"></div>\n            <div class=\"ladder\"></div>\n        </div>\n    </div>\n";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(59)
	__vue_script__ = __webpack_require__(61)
	__vue_template__ = __webpack_require__(62)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/DominoLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-cbeacb9e&file=DominoLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DominoLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-cbeacb9e&file=DominoLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DominoLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.domino1, .domino2, .domino3, .domino4, .domino5 {\n    height: 20px;\n    width: 5px;\n    display: inline-block;\n    border-radius: 2px;\n    padding-right: 5px;\n    background-color: #28B463;\n    animation: dangle 2s infinite linear;\n}\n.domino1{\n    animation-delay: 0.1s;\n}\n.domino2{\n    animation-delay: 0.2s;\n}\n.domino3{\n    animation-delay: 0.3s;\n}\n.domino4{\n    animation-delay: 0.4s;\n}\n.domino5{\n    animation-delay: 0.5s;\n}\n@keyframes dangle {\n    0%{\n        transform: perspective(50px) rotate(45deg);\n    }\n    50% {\n        transform: perspective(50px) rotate(75deg);\n    }\n    75% {\n        transform: perspective(50px) rotate(-45deg);\n    }\n    100% {\n        transform: perspective(50px) rotate(0deg);\n    }\n}\n", "", {"version":3,"sources":["/./src/DominoLoader.vue.style"],"names":[],"mappings":";AAmBA;IACA,aAAA;IACA,WAAA;IACA,sBAAA;IACA,mBAAA;IACA,mBAAA;IACA,0BAAA;IACA,qCAAA;CACA;AACA;IACA,sBAAA;CACA;AACA;IACA,sBAAA;CACA;AACA;IACA,sBAAA;CACA;AACA;IACA,sBAAA;CACA;AACA;IACA,sBAAA;CACA;AACA;IACA;QACA,2CAAA;KACA;IACA;QACA,2CAAA;KACA;IACA;QACA,4CAAA;KACA;IACA;QACA,0CAAA;KACA;CACA","file":"DominoLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-domino\">\n            <div class=\"domino1\"></div>\n            <div class=\"domino2\"></div>\n            <div class=\"domino3\"></div>\n            <div class=\"domino4\"></div>\n            <div class=\"domino5\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'DominoLoader'\n}\n</script>\n\n<style>\n.domino1, .domino2, .domino3, .domino4, .domino5 {\n    height: 20px;\n    width: 5px;\n    display: inline-block;\n    border-radius: 2px;\n    padding-right: 5px;\n    background-color: #28B463;\n    animation: dangle 2s infinite linear;\n}\n.domino1{\n    animation-delay: 0.1s;\n}\n.domino2{\n    animation-delay: 0.2s;\n}\n.domino3{\n    animation-delay: 0.3s;\n}\n.domino4{\n    animation-delay: 0.4s;\n}\n.domino5{\n    animation-delay: 0.5s;\n}\n@keyframes dangle {\n    0%{\n        transform: perspective(50px) rotate(45deg);\n    }\n    50% {\n        transform: perspective(50px) rotate(75deg);\n    }\n    75% {\n        transform: perspective(50px) rotate(-45deg);\n    }\n    100% {\n        transform: perspective(50px) rotate(0deg);\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-domino">
	//             <div class="domino1"></div>
	//             <div class="domino2"></div>
	//             <div class="domino3"></div>
	//             <div class="domino4"></div>
	//             <div class="domino5"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'DominoLoader'
	    // </script>
	    //
	    // <style>
	    // .domino1, .domino2, .domino3, .domino4, .domino5 {
	    //     height: 20px;
	    //     width: 5px;
	    //     display: inline-block;
	    //     border-radius: 2px;
	    //     padding-right: 5px;
	    //     background-color: #28B463;
	    //     animation: dangle 2s infinite linear;
	    // }
	    // .domino1{
	    //     animation-delay: 0.1s;
	    // }
	    // .domino2{
	    //     animation-delay: 0.2s;
	    // }
	    // .domino3{
	    //     animation-delay: 0.3s;
	    // }
	    // .domino4{
	    //     animation-delay: 0.4s;
	    // }
	    // .domino5{
	    //     animation-delay: 0.5s;
	    // }
	    // @keyframes dangle {
	    //     0%{
	    //         transform: perspective(50px) rotate(45deg);
	    //     }
	    //     50% {
	    //         transform: perspective(50px) rotate(75deg);
	    //     }
	    //     75% {
	    //         transform: perspective(50px) rotate(-45deg);
	    //     }
	    //     100% {
	    //         transform: perspective(50px) rotate(0deg);
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-domino\">\n            <div class=\"domino1\"></div>\n            <div class=\"domino2\"></div>\n            <div class=\"domino3\"></div>\n            <div class=\"domino4\"></div>\n            <div class=\"domino5\"></div>\n        </div>\n    </div>\n";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(64)
	__vue_script__ = __webpack_require__(66)
	__vue_template__ = __webpack_require__(67)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/BoxLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9583e2d0&file=BoxLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BoxLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9583e2d0&file=BoxLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BoxLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.box1, .box2, .box3, .box4 {\n    height: 15px;\n    width: 15px;\n    display: inline-block;\n    animation: fade 2s infinite;\n}\n.box1 {\n    background-color: #28B463;\n    animation-delay: 0.1s;\n}\n.box2 {\n    background-color: #28B463;\n    animation-delay: 0.3s;\n}\n.box3 {\n    background-color: #28B463;\n    animation-delay: 0.5s;\n}\n.box4 {\n    background-color:#28B463;\n    animation-delay: 0.7s;\n}\n@keyframes fade {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n", "", {"version":3,"sources":["/./src/BoxLoader.vue.style"],"names":[],"mappings":";AAsBA;IACA,aAAA;IACA,YAAA;IACA,sBAAA;IACA,4BAAA;CACA;AACA;IACA,0BAAA;IACA,sBAAA;CACA;AACA;IACA,0BAAA;IACA,sBAAA;CACA;AACA;IACA,0BAAA;IACA,sBAAA;CACA;AACA;IACA,yBAAA;IACA,sBAAA;CACA;AACA;IACA;QACA,WAAA;KACA;IACA;QACA,WAAA;KACA;IACA;QACA,WAAA;KACA;CACA","file":"BoxLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spiner\">\n        <div class=\"v-box\">\n            <div>\n                <div class=\"box1\"></div>\n                <div class=\"box2\"></div>\n            </div>\n            <div>\n                <div class=\"box3\"></div>\n                <div class=\"box4\"></div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'BoxLoader'\n}\n</script>\n\n<style>\n.box1, .box2, .box3, .box4 {\n    height: 15px;\n    width: 15px;\n    display: inline-block;\n    animation: fade 2s infinite;\n}\n.box1 {\n    background-color: #28B463;\n    animation-delay: 0.1s;\n}\n.box2 {\n    background-color: #28B463;\n    animation-delay: 0.3s;\n}\n.box3 {\n    background-color: #28B463;\n    animation-delay: 0.5s;\n}\n.box4 {\n    background-color:#28B463;\n    animation-delay: 0.7s;\n}\n@keyframes fade {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 66 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spiner">
	//         <div class="v-box">
	//             <div>
	//                 <div class="box1"></div>
	//                 <div class="box2"></div>
	//             </div>
	//             <div>
	//                 <div class="box3"></div>
	//                 <div class="box4"></div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'BoxLoader'
	    // </script>
	    //
	    // <style>
	    // .box1, .box2, .box3, .box4 {
	    //     height: 15px;
	    //     width: 15px;
	    //     display: inline-block;
	    //     animation: fade 2s infinite;
	    // }
	    // .box1 {
	    //     background-color: #28B463;
	    //     animation-delay: 0.1s;
	    // }
	    // .box2 {
	    //     background-color: #28B463;
	    //     animation-delay: 0.3s;
	    // }
	    // .box3 {
	    //     background-color: #28B463;
	    //     animation-delay: 0.5s;
	    // }
	    // .box4 {
	    //     background-color:#28B463;
	    //     animation-delay: 0.7s;
	    // }
	    // @keyframes fade {
	    //     0% {
	    //         opacity: 1;
	    //     }
	    //     50% {
	    //         opacity: 0;
	    //     }
	    //     100% {
	    //         opacity: 1;
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spiner\">\n        <div class=\"v-box\">\n            <div>\n                <div class=\"box1\"></div>\n                <div class=\"box2\"></div>\n            </div>\n            <div>\n                <div class=\"box3\"></div>\n                <div class=\"box4\"></div>\n            </div>\n        </div>\n    </div>\n";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(69)
	__vue_script__ = __webpack_require__(71)
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/karthik-7847/Documents/npm_packages/new/vue-spinner/src/SphericalLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3d01c32a&file=SphericalLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SphericalLoader.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3d01c32a&file=SphericalLoader.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SphericalLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-spherical {\n    position: relative;\n    /* border-top: 3px solid purple; */\n    border-style: solid;\n    border-color: purple transparent transparent;\n    border-radius: 50%;\n    height: 50px;\n    width: 50px;\n    animation: spin 1s infinite linear;\n}\n.circle1, .circle2 {\n    position: absolute;\n    border-style: solid;\n    border-radius: 50%;\n    height: 100%;\n    width: 100%;\n}\n.circle1 {\n    margin-top: 2px;\n    border-color: red transparent transparent;\n    animation: spin 2s infinite;\n    animation-delay: 0.2s;\n}\n.circle2 {\n    margin-top: 7px;\n    border-color: green transparent transparent;\n    animation: spin 2s infinite;\n    animation-delay: 0.4s;\n}\n@keyframes spin {\n    0%{\n        transform: rotate(0deg)\n    }\n    100%{\n        transform: rotate(360deg)\n    }\n}\n", "", {"version":3,"sources":["/./src/SphericalLoader.vue.style"],"names":[],"mappings":";AAgBA;IACA,mBAAA;IACA,mCAAA;IACA,oBAAA;IACA,6CAAA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;IACA,mCAAA;CACA;AACA;IACA,mBAAA;IACA,oBAAA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;CACA;AACA;IACA,gBAAA;IACA,0CAAA;IACA,4BAAA;IACA,sBAAA;CACA;AACA;IACA,gBAAA;IACA,4CAAA;IACA,4BAAA;IACA,sBAAA;CACA;AACA;IACA;QACA,uBAAA;KACA;IACA;QACA,yBAAA;KACA;CACA","file":"SphericalLoader.vue","sourcesContent":["<template>\n    <div class=\"v-spinner\">\n        <div class=\"v-spherical\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'SphericalLoader'\n}\n</script>\n\n<style>\n.v-spherical {\n    position: relative;\n    /* border-top: 3px solid purple; */\n    border-style: solid;\n    border-color: purple transparent transparent;\n    border-radius: 50%;\n    height: 50px;\n    width: 50px;\n    animation: spin 1s infinite linear;\n}\n.circle1, .circle2 {\n    position: absolute;\n    border-style: solid;\n    border-radius: 50%;\n    height: 100%;\n    width: 100%;\n}\n.circle1 {\n    margin-top: 2px;\n    border-color: red transparent transparent;\n    animation: spin 2s infinite;\n    animation-delay: 0.2s;\n}\n.circle2 {\n    margin-top: 7px;\n    border-color: green transparent transparent;\n    animation: spin 2s infinite;\n    animation-delay: 0.4s;\n}\n@keyframes spin {\n    0%{\n        transform: rotate(0deg)\n    }\n    100%{\n        transform: rotate(360deg)\n    }\n}\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="v-spinner">
	//         <div class="v-spherical">
	//             <div class="circle1"></div>
	//             <div class="circle2"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    name: 'SphericalLoader'
	    // </script>
	    //
	    // <style>
	    // .v-spherical {
	    //     position: relative;
	    //     /* border-top: 3px solid purple; */
	    //     border-style: solid;
	    //     border-color: purple transparent transparent;
	    //     border-radius: 50%;
	    //     height: 50px;
	    //     width: 50px;
	    //     animation: spin 1s infinite linear;
	    // }
	    // .circle1, .circle2 {
	    //     position: absolute;
	    //     border-style: solid;
	    //     border-radius: 50%;
	    //     height: 100%;
	    //     width: 100%;
	    // }
	    // .circle1 {
	    //     margin-top: 2px;
	    //     border-color: red transparent transparent;
	    //     animation: spin 2s infinite;
	    //     animation-delay: 0.2s;
	    // }
	    // .circle2 {
	    //     margin-top: 7px;
	    //     border-color: green transparent transparent;
	    //     animation: spin 2s infinite;
	    //     animation-delay: 0.4s;
	    // }
	    // @keyframes spin {
	    //     0%{
	    //         transform: rotate(0deg)
	    //     }
	    //     100%{
	    //         transform: rotate(360deg)
	    //     }
	    // }
	    // </style>
	    //
	    //
	    /* generated by vue-loader */
	
	};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = "\n    <div class=\"v-spinner\">\n        <div class=\"v-spherical\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n        </div>\n    </div>\n";

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-spinners.js.map