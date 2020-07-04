/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/rust_js_asteroids_bg.wasm": function() {
/******/ 			return {
/******/ 				"./rust_js_asteroids_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_width_08cc4daa32b5c0f6": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_width_08cc4daa32b5c0f6"](p0i32);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_85466ccf97d1f753": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_setstrokeStyle_85466ccf97d1f753"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_52278f0fc6e7e85f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_setfillStyle_52278f0fc6e7e85f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfont_6c5ec82b67576b60": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_setfont_6c5ec82b67576b60"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_beginPath_3df6024a7bd75a4b": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_beginPath_3df6024a7bd75a4b"](p0i32);
/******/ 					},
/******/ 					"__wbg_stroke_5daa066a78bd6915": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_stroke_5daa066a78bd6915"](p0i32);
/******/ 					},
/******/ 					"__wbg_closePath_987355f619d8ec72": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_closePath_987355f619d8ec72"](p0i32);
/******/ 					},
/******/ 					"__wbg_lineTo_0b31c4f7ffcde044": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_lineTo_0b31c4f7ffcde044"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_moveTo_46b9ca6ae533ed02": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_moveTo_46b9ca6ae533ed02"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_fillRect_8c22b56874211a38": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_fillRect_8c22b56874211a38"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_restore_a595d0d680c7393c": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_restore_a595d0d680c7393c"](p0i32);
/******/ 					},
/******/ 					"__wbg_save_ffbc979fe70b5415": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_save_ffbc979fe70b5415"](p0i32);
/******/ 					},
/******/ 					"__wbg_fillText_b69a403f9ef5dfef": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_fillText_b69a403f9ef5dfef"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_measureText_59f3617ea3c27d2f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_measureText_59f3617ea3c27d2f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_rotate_82b98a46bc5e44d9": function(p0i32,p1f64) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_rotate_82b98a46bc5e44d9"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_translate_7353a876d037e772": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_translate_7353a876d037e772"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_self_1b7a39e3a92c949c": function() {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_self_1b7a39e3a92c949c"]();
/******/ 					},
/******/ 					"__wbg_require_604837428532a733": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_require_604837428532a733"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_crypto_968f1772287e2df0": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_crypto_968f1772287e2df0"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_a3d34b4fee3c2869": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_getRandomValues_a3d34b4fee3c2869"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_f5e14ab7ac8e995d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_getRandomValues_f5e14ab7ac8e995d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_d5bd2d655fdf256a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbg_randomFillSync_d5bd2d655fdf256a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_js_asteroids_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/rust_js_asteroids_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/rust_js_asteroids_bg.wasm":"cdce6d20e488d54aa43e"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\r\n// asynchronously. This `bootstrap.js` file does the single async import, so\r\n// that no one else needs to worry about it again.\r\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\r\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\r\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });