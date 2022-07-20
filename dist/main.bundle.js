/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar config = {\n\ttype: Phaser.AUTO,\n        width: 800,\n        height: 600,\n        physics: {\n            default: 'arcade',\n            arcade: {\n                gravity: { y: 0 }\n            }\n        },\n        scene: {\n            preload: preload,\n            create: create,\n\t\t\t\t\t\tupdate: update\n        }\n    };\n\nvar game = new Phaser.Game(config);\nvar cursors;\n\n\nfunction preload () {\n\tconsole.log(this)\n\t_player__WEBPACK_IMPORTED_MODULE_0___default().preload(this);\n}\n\nfunction create () {\n\t_player__WEBPACK_IMPORTED_MODULE_0___default().create();\n\t//this.add.image(400, 300, 'sky');\n\n\n\t//var particles = this.add.particles('red');\n\n\t//var emitter = particles.createEmitter({\n\t//speed: 200,\n\t//scale: { start: 1, end: 0 },\n\t//blendMode: 'ADD'\n\t//});\n\n\t//logo = this.physics.add.image(400, 100, 'logo');\n\n\t//logo.setVelocity(0, 200);\n\t//logo.setBounce(1, 1);\n\t//logo.setCollideWorldBounds(true);\n\n\t//emitter.startFollow(logo);\n}\n\nfunction update(time, delta){\n\t_player__WEBPACK_IMPORTED_MODULE_0___default().update(time, delta);\n}\n\n\n\n\n//# sourceURL=webpack://1942-gamejam-demo/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("var context = \"Helloj\";\nvar cursors;\nvar plane;\n\n\nfunction preload(scene){\n\tcontext = scene;\n\n\tcontext.load.spritesheet('plane', './assets/plane.png',\n\t\t{\n\t\t\tframeWidth:64,\n\t\t\tframeHeight:66,\n\t\t\tstartFrame:0,\n\t\t\tendFrame:2\n\t\t});\n}\n\nfunction create(){\n\tsetupPlayerSprite();\n\ts275564716110etupFlyingAnimation();\n\n\tcursors = context.input.keyboard.createCursorKeys();\n}\n\n\nfunction update(time, delta){\n\tvar speed = 200 * (delta/1000);\n\tapplyScreenTouchMovement(speed);\n\tapplyKeyboardMovement(speed);\n}\n\n\n//**** HELPER METHODS **//\nfunction setupPlayerSprite(){\n\tconsole.log(this.context);\n\tplane = context.physics.add.sprite(400,300, 'plane');\n\tplane.setCollideWorldBounds(true);\n}\nfunction setupFlyingAnimation(){\n\tcontext.anims.create({\n\t\tkey: \"fly\",\n\t\tframeRate: 30,\n\t\tframes: context.anims.generateFrameNumbers(\"plane\", {start: 0, end: 2}),\n\t\trepeat: -1\n\t});\n\n\tplane.play(\"fly\");\n}\n\n\n\nvar touchTarget = {x:0, y:0};\nfunction applyScreenTouchMovement(speed){\n\t//Touch support\n\tpointer = context.input.activePointer;\n\tif(pointer.isDown){\n\t\ttouchTarget = {x: pointer.x, y: pointer.y}\n\t\tcontext.physics.moveToObject(plane, touchTarget, 200);\n\t}\n\n\tvar distance = Phaser.Math.Distance.Between(plane.x, plane.y, touchTarget.x, touchTarget.y);\n\tif(distance < 4){\n\t\tplane.body.stop();\n\t}\n}\n\nfunction applyKeyboardMovement(speed){\n\tif(cursors.left.isDown){\n\t\tplane.x -= speed;\n\t}\n\n\tif(cursors.right.isDown){\n\t\tplane.x += speed;\n\t}\n\n\tif(cursors.up.isDown){\n\t\tplane.y -= speed;\n\t}\n\n\tif(cursors.down.isDown){\n\t\tplane.y += speed;\n\t}\n}\n\nmodule.exports = {\n\tpreload: preload,\n\tcreate: create,\n\tupdate: update\n}\n\n\n//# sourceURL=webpack://1942-gamejam-demo/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;