(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg sync recursive":
/*!*******************!*\
  !*** ../pkg sync ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"../pkg sync recursive\";\n\n//# sourceURL=webpack:///../pkg_sync?");

/***/ }),

/***/ "../pkg/rust_js_asteroids.js":
/*!***********************************!*\
  !*** ../pkg/rust_js_asteroids.js ***!
  \***********************************/
/*! exports provided: Game, Movement, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_width_08cc4daa32b5c0f6, __wbg_setstrokeStyle_85466ccf97d1f753, __wbg_setfillStyle_52278f0fc6e7e85f, __wbg_setfont_6c5ec82b67576b60, __wbg_beginPath_3df6024a7bd75a4b, __wbg_stroke_5daa066a78bd6915, __wbg_closePath_987355f619d8ec72, __wbg_lineTo_0b31c4f7ffcde044, __wbg_moveTo_46b9ca6ae533ed02, __wbg_fillRect_8c22b56874211a38, __wbg_restore_a595d0d680c7393c, __wbg_save_ffbc979fe70b5415, __wbg_fillText_b69a403f9ef5dfef, __wbg_measureText_59f3617ea3c27d2f, __wbg_rotate_82b98a46bc5e44d9, __wbg_translate_7353a876d037e772, __wbindgen_is_undefined, __wbg_self_1b7a39e3a92c949c, __wbg_require_604837428532a733, __wbg_crypto_968f1772287e2df0, __wbg_getRandomValues_a3d34b4fee3c2869, __wbg_getRandomValues_f5e14ab7ac8e995d, __wbg_randomFillSync_d5bd2d655fdf256a, __wbindgen_debug_string, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_js_asteroids_bg.wasm */ \"../pkg/rust_js_asteroids_bg.wasm\");\n/* harmony import */ var _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rust_js_asteroids_bg.js */ \"../pkg/rust_js_asteroids_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Game\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Movement\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Movement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_width_08cc4daa32b5c0f6\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_width_08cc4daa32b5c0f6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setstrokeStyle_85466ccf97d1f753\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setstrokeStyle_85466ccf97d1f753\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setfillStyle_52278f0fc6e7e85f\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setfillStyle_52278f0fc6e7e85f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setfont_6c5ec82b67576b60\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setfont_6c5ec82b67576b60\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_beginPath_3df6024a7bd75a4b\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_beginPath_3df6024a7bd75a4b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stroke_5daa066a78bd6915\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stroke_5daa066a78bd6915\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_closePath_987355f619d8ec72\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_closePath_987355f619d8ec72\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_lineTo_0b31c4f7ffcde044\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_lineTo_0b31c4f7ffcde044\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_moveTo_46b9ca6ae533ed02\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_moveTo_46b9ca6ae533ed02\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillRect_8c22b56874211a38\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_fillRect_8c22b56874211a38\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_restore_a595d0d680c7393c\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_restore_a595d0d680c7393c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_save_ffbc979fe70b5415\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_save_ffbc979fe70b5415\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillText_b69a403f9ef5dfef\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_fillText_b69a403f9ef5dfef\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_measureText_59f3617ea3c27d2f\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_measureText_59f3617ea3c27d2f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_rotate_82b98a46bc5e44d9\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_rotate_82b98a46bc5e44d9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_translate_7353a876d037e772\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_translate_7353a876d037e772\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_1b7a39e3a92c949c\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_1b7a39e3a92c949c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_604837428532a733\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_require_604837428532a733\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_968f1772287e2df0\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_968f1772287e2df0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_a3d34b4fee3c2869\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_a3d34b4fee3c2869\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_f5e14ab7ac8e995d\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_f5e14ab7ac8e995d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_d5bd2d655fdf256a\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_d5bd2d655fdf256a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _rust_js_asteroids_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/rust_js_asteroids.js?");

/***/ }),

/***/ "../pkg/rust_js_asteroids_bg.js":
/*!**************************************!*\
  !*** ../pkg/rust_js_asteroids_bg.js ***!
  \**************************************/
/*! exports provided: Game, Movement, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_width_08cc4daa32b5c0f6, __wbg_setstrokeStyle_85466ccf97d1f753, __wbg_setfillStyle_52278f0fc6e7e85f, __wbg_setfont_6c5ec82b67576b60, __wbg_beginPath_3df6024a7bd75a4b, __wbg_stroke_5daa066a78bd6915, __wbg_closePath_987355f619d8ec72, __wbg_lineTo_0b31c4f7ffcde044, __wbg_moveTo_46b9ca6ae533ed02, __wbg_fillRect_8c22b56874211a38, __wbg_restore_a595d0d680c7393c, __wbg_save_ffbc979fe70b5415, __wbg_fillText_b69a403f9ef5dfef, __wbg_measureText_59f3617ea3c27d2f, __wbg_rotate_82b98a46bc5e44d9, __wbg_translate_7353a876d037e772, __wbindgen_is_undefined, __wbg_self_1b7a39e3a92c949c, __wbg_require_604837428532a733, __wbg_crypto_968f1772287e2df0, __wbg_getRandomValues_a3d34b4fee3c2869, __wbg_getRandomValues_f5e14ab7ac8e995d, __wbg_randomFillSync_d5bd2d655fdf256a, __wbindgen_debug_string, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Movement\", function() { return Movement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_width_08cc4daa32b5c0f6\", function() { return __wbg_width_08cc4daa32b5c0f6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setstrokeStyle_85466ccf97d1f753\", function() { return __wbg_setstrokeStyle_85466ccf97d1f753; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setfillStyle_52278f0fc6e7e85f\", function() { return __wbg_setfillStyle_52278f0fc6e7e85f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setfont_6c5ec82b67576b60\", function() { return __wbg_setfont_6c5ec82b67576b60; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_beginPath_3df6024a7bd75a4b\", function() { return __wbg_beginPath_3df6024a7bd75a4b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stroke_5daa066a78bd6915\", function() { return __wbg_stroke_5daa066a78bd6915; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_closePath_987355f619d8ec72\", function() { return __wbg_closePath_987355f619d8ec72; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_lineTo_0b31c4f7ffcde044\", function() { return __wbg_lineTo_0b31c4f7ffcde044; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_moveTo_46b9ca6ae533ed02\", function() { return __wbg_moveTo_46b9ca6ae533ed02; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillRect_8c22b56874211a38\", function() { return __wbg_fillRect_8c22b56874211a38; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_restore_a595d0d680c7393c\", function() { return __wbg_restore_a595d0d680c7393c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_save_ffbc979fe70b5415\", function() { return __wbg_save_ffbc979fe70b5415; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillText_b69a403f9ef5dfef\", function() { return __wbg_fillText_b69a403f9ef5dfef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_measureText_59f3617ea3c27d2f\", function() { return __wbg_measureText_59f3617ea3c27d2f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_rotate_82b98a46bc5e44d9\", function() { return __wbg_rotate_82b98a46bc5e44d9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_translate_7353a876d037e772\", function() { return __wbg_translate_7353a876d037e772; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_1b7a39e3a92c949c\", function() { return __wbg_self_1b7a39e3a92c949c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_604837428532a733\", function() { return __wbg_require_604837428532a733; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_968f1772287e2df0\", function() { return __wbg_crypto_968f1772287e2df0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_a3d34b4fee3c2869\", function() { return __wbg_getRandomValues_a3d34b4fee3c2869; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_f5e14ab7ac8e995d\", function() { return __wbg_getRandomValues_f5e14ab7ac8e995d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_d5bd2d655fdf256a\", function() { return __wbg_randomFillSync_d5bd2d655fdf256a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_js_asteroids_bg.wasm */ \"../pkg/rust_js_asteroids_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n\nlet stack_pointer = 32;\n\nfunction addBorrowedObject(obj) {\n    if (stack_pointer == 1) throw new Error('out of js stack');\n    heap[--stack_pointer] = obj;\n    return stack_pointer;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass Game {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Game.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_game_free\"](ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get width() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_game_width\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set width(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_game_width\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get height() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_game_height\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set height(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_game_height\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get score() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_game_score\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set score(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_game_score\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get lives() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_game_lives\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set lives(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_game_lives\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get is_boosting() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_game_is_boosting\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set is_boosting(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_game_is_boosting\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} screen_width\n    * @param {number} screen_height\n    */\n    constructor(screen_width, screen_height) {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"game_new\"](screen_width, screen_height);\n        return Game.__wrap(ret);\n    }\n    /**\n    * @param {Movement} movement\n    */\n    update(movement) {\n        _assertClass(movement, Movement);\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"game_update\"](this.ptr, movement.ptr);\n    }\n    /**\n    * @param {CanvasRenderingContext2D} ctx\n    */\n    render(ctx) {\n        try {\n            _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"game_render\"](this.ptr, addBorrowedObject(ctx));\n        } finally {\n            heap[stack_pointer++] = undefined;\n        }\n    }\n}\n/**\n*/\nclass Movement {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Movement.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_movement_free\"](ptr);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get left() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_movement_left\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set left(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_movement_left\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get right() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_movement_right\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set right(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_movement_right\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get boost() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_movement_boost\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set boost(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_movement_boost\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get shoot() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_movement_shoot\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set shoot(arg0) {\n        _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_movement_shoot\"](this.ptr, arg0);\n    }\n    /**\n    */\n    constructor() {\n        var ret = _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"movement_new\"]();\n        return Movement.__wrap(ret);\n    }\n}\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_width_08cc4daa32b5c0f6 = function(arg0) {\n    var ret = getObject(arg0).width;\n    return ret;\n};\n\nconst __wbg_setstrokeStyle_85466ccf97d1f753 = function(arg0, arg1) {\n    getObject(arg0).strokeStyle = getObject(arg1);\n};\n\nconst __wbg_setfillStyle_52278f0fc6e7e85f = function(arg0, arg1) {\n    getObject(arg0).fillStyle = getObject(arg1);\n};\n\nconst __wbg_setfont_6c5ec82b67576b60 = function(arg0, arg1, arg2) {\n    getObject(arg0).font = getStringFromWasm0(arg1, arg2);\n};\n\nconst __wbg_beginPath_3df6024a7bd75a4b = function(arg0) {\n    getObject(arg0).beginPath();\n};\n\nconst __wbg_stroke_5daa066a78bd6915 = function(arg0) {\n    getObject(arg0).stroke();\n};\n\nconst __wbg_closePath_987355f619d8ec72 = function(arg0) {\n    getObject(arg0).closePath();\n};\n\nconst __wbg_lineTo_0b31c4f7ffcde044 = function(arg0, arg1, arg2) {\n    getObject(arg0).lineTo(arg1, arg2);\n};\n\nconst __wbg_moveTo_46b9ca6ae533ed02 = function(arg0, arg1, arg2) {\n    getObject(arg0).moveTo(arg1, arg2);\n};\n\nconst __wbg_fillRect_8c22b56874211a38 = function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillRect(arg1, arg2, arg3, arg4);\n};\n\nconst __wbg_restore_a595d0d680c7393c = function(arg0) {\n    getObject(arg0).restore();\n};\n\nconst __wbg_save_ffbc979fe70b5415 = function(arg0) {\n    getObject(arg0).save();\n};\n\nconst __wbg_fillText_b69a403f9ef5dfef = handleError(function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);\n});\n\nconst __wbg_measureText_59f3617ea3c27d2f = handleError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).measureText(getStringFromWasm0(arg1, arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_rotate_82b98a46bc5e44d9 = handleError(function(arg0, arg1) {\n    getObject(arg0).rotate(arg1);\n});\n\nconst __wbg_translate_7353a876d037e772 = handleError(function(arg0, arg1, arg2) {\n    getObject(arg0).translate(arg1, arg2);\n});\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nconst __wbg_self_1b7a39e3a92c949c = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_require_604837428532a733 = function(arg0, arg1) {\n    var ret = __webpack_require__(\"../pkg sync recursive\")(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbg_crypto_968f1772287e2df0 = function(arg0) {\n    var ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nconst __wbg_getRandomValues_a3d34b4fee3c2869 = function(arg0) {\n    var ret = getObject(arg0).getRandomValues;\n    return addHeapObject(ret);\n};\n\nconst __wbg_getRandomValues_f5e14ab7ac8e995d = function(arg0, arg1, arg2) {\n    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));\n};\n\nconst __wbg_randomFillSync_d5bd2d655fdf256a = function(arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n};\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _rust_js_asteroids_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/rust_js_asteroids_bg.js?");

/***/ }),

/***/ "../pkg/rust_js_asteroids_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/rust_js_asteroids_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_movement_free, __wbg_get_movement_left, __wbg_set_movement_left, __wbg_get_movement_right, __wbg_set_movement_right, __wbg_get_movement_boost, __wbg_set_movement_boost, __wbg_get_movement_shoot, __wbg_set_movement_shoot, movement_new, __wbg_game_free, __wbg_get_game_width, __wbg_set_game_width, __wbg_get_game_height, __wbg_set_game_height, __wbg_get_game_score, __wbg_set_game_score, __wbg_get_game_lives, __wbg_set_game_lives, __wbg_get_game_is_boosting, __wbg_set_game_is_boosting, game_new, game_update, game_render, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rust_js_asteroids_bg.js */ \"../pkg/rust_js_asteroids_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/rust_js_asteroids_bg.wasm?");

/***/ }),

/***/ "./controller.js":
/*!***********************!*\
  !*** ./controller.js ***!
  \***********************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\n/* harmony import */ var wasm_asteroids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-asteroids */ \"../pkg/rust_js_asteroids.js\");\n\r\n\r\nclass Controller {\r\n\tconstructor() {\r\n\t\tthis.movement = new wasm_asteroids__WEBPACK_IMPORTED_MODULE_0__[\"Movement\"]();\r\n\t\tconsole.log(this.movement);\r\n\r\n\t\twindow.addEventListener(\"keydown\", ({ key }) => {\r\n\t\t\tif (key === 'W' || key === 'w' || key === 'ArrowUp') {\r\n\t\t\t\tthis.movement.boost = true;\r\n\t\t\t}\r\n\t\t\tif (key === 'A' || key === 'a' || key === 'ArrowLeft') {\r\n\t\t\t\tthis.movement.left = true;\r\n\t\t\t}\r\n\t\t\tif (key === 'D' || key === 'd' || key === 'ArrowRight') {\r\n\t\t\t\tthis.movement.right = true;\r\n\t\t\t}\r\n\t\t\tif (key.match(/ /)) {\r\n\t\t\t\tthis.movement.shoot = true;\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t\twindow.addEventListener(\"keyup\", ({ key }) => {\r\n\t\t\tif (key === 'W' || key === 'w' || key === 'ArrowUp') {\r\n\t\t\t\tthis.movement.boost = false;\r\n\t\t\t}\r\n\t\t\tif (key === 'A' || key === 'a' || key === 'ArrowLeft') {\r\n\t\t\t\tthis.movement.left = false;\r\n\t\t\t}\r\n\t\t\tif (key === 'D' || key === 'd' || key === 'ArrowRight') {\r\n\t\t\t\tthis.movement.right = false;\r\n\t\t\t}\r\n\t\t\tif (key.match(/ /)) {\r\n\t\t\t\tthis.movement.shoot = false;\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./controller.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_asteroids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-asteroids */ \"../pkg/rust_js_asteroids.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ \"./controller.js\");\n\r\n\r\n\r\n\r\nconst game = new wasm_asteroids__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](window.innerWidth, window.innerHeight + 4);\r\nconst controller = new _controller_js__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"]();\r\n\r\nconst canvas = document.getElementById('asteroids');\r\nconst ctx = canvas.getContext('2d');\r\n\r\nctx.canvas.width = window.innerWidth;\r\nctx.canvas.height = window.innerHeight + 4;\r\n\r\nwindow.setInterval(() => {\r\n\tgame.render(ctx);\r\n\tgame.update(controller.movement);\r\n}, 25);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);