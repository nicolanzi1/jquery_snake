/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/apple.js":
/*!*********************!*\
  !*** ./js/apple.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Coord = __webpack_require__(/*! ./coord */ \"./js/coord.js\");\n\nclass Apple {\n    constructor(board) {\n        this.board = board;\n        this.replace();\n    }\n\n    replace() {\n        let x = Math.floor(Math.random() * this.board.dim);\n        let y = Math.floor(Math.random() * this.board.dim);\n\n        while (this.board.snake.isOccupying([x, y])) {\n            x = Math.floor(Math.random() * this.board.dim);\n            y = Math.floor(Math.random() * this.board.dim);\n        }\n\n        this.position = new Coord(x, y);\n    }\n}\n\nmodule.exports = Apple;\n\n//# sourceURL=webpack:///./js/apple.js?");

/***/ }),

/***/ "./js/board.js":
/*!*********************!*\
  !*** ./js/board.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Snake = __webpack_require__(/*! ./snake */ \"./js/snake.js\");\nconst Apple = __webpack_require__(/*! ./apple */ \"./js/apple.js\");\n\nclass Board {\n    constructor(dim) {\n        this.dim = dim;\n\n        this.snake = new Snake(this);\n        this.apple = new Apple(this);\n    }\n\n    static blankGrid(dim) {\n        const grid = [];\n\n        for (let i = 0; i < dim; i++) {\n            const row = [];\n            for (let j = 0; j < dim; j++) {\n                row.push(Board.BLANK_SYMBOL);\n            }\n            grid.push(row);\n        }\n\n        return grid;\n    }\n\n    render() {\n        const grid = Board.blankGrid(this.dim);\n\n        this.snake.segments.forEach( segment => {\n            grid[segment.i][segment.j] = Snake.SYMBOL;\n        });\n\n        grid[this.apple.position.i][this.apple.position.j] = Apple.SYMBOL;\n\n        const rowStrs = [];\n        grid.map( row => row.join(\"\") ).join(\"\\n\");\n    }\n\n    validPosition(coord) {\n        return (coord.i >= 0) && (coord.i < this.dim) &&\n        (coord.j >= 0) && (coord.j < this.dim);\n    }\n}\n\nBoard.BLANK_SYMBOL = \".\";\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./js/board.js?");

/***/ }),

/***/ "./js/coord.js":
/*!*********************!*\
  !*** ./js/coord.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Coord {\n    constructor(i, j) {\n        this.i = i;\n        this.j = j;\n    }\n\n    equals(coord2) {\n        return (this.i == coord2.i) && (this.j == coord2.j);\n    }\n\n    isOpposite(coord2) {\n        return (this.i == (-1 * coord2.i)) && (this.j == (-1 * coord2.j));\n    }\n\n    plus(coord2) {\n        return new Coord(this.i + coord2.i, this.j + coord2.j);\n    }\n}\n\nmodule.exports = Coord;\n\n//# sourceURL=webpack:///./js/coord.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SnakeView = __webpack_require__(/*! ./snake-view */ \"./js/snake-view.js\");\n\n$(function () {\n    const rootEl = $('.snake-game');\n    new SnakeView(rootEl);\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/snake-view.js":
/*!**************************!*\
  !*** ./js/snake-view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./js/board.js\");\n\nclass View {\n    constructor($el) {\n        this.$el = $el;\n\n    this.board = new Board(20);\n    this.setupGrid();\n\n    this.intervalId = window.setInterval(\n        this.step.bind(this),\n        View.STEP_MILLIS\n    );\n\n    $(window).on(\"keydown\", this.handleKeyEvent.bind(this));\n    }\n\n    handleKeyEvent(event) {\n        if (View.KEYS[event.keyCode]) {\n            this.board.snake.turn(View.KEYS[event.keyCode]);\n        }\n    }\n\n    render() {\n        this.updateClasses(this.board.snake.segments, \"snake\");\n        this.updateClasses([this.board.apple.position], \"apple\");\n    }\n\n    updateClasses(coords, className) {\n        this.$li.filter(`.${className}`).removeClass();\n\n        coords.forEach( coord => {\n            const flatCoord = (coord.i * this.board.dim) + coord.j;\n            this.$li.eq(flatCoord).addClass(className);\n        });\n    }\n\n    setupGrid() {\n        let html = \"\";\n\n        for (let i = 0; i < this.board.dim; i++) {\n            html += \"<ul>\";\n            for (let j = 0; j < this.board.dim; j++) {\n                html += \"<li></li>\";\n            }\n            html += \"</ul>\";\n        }\n\n        this.$el.html(html);\n        this.$li = this.$el.find(\"li\");\n    }\n\n    step() {\n        if (this.board.snake.segments.length > 0) {\n            this.board.snake.move();\n            this.render();\n        } else {\n            alert(\"You lose!\");\n            window.clearInterval(this.intervalId);\n        }\n    }\n}\n\nView.KEYS = {\n    38: \"N\",\n    39: \"E\",\n    40: \"S\",\n    37: \"W\"\n};\n\nView.STEP_MILLIS = 100;\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./js/snake-view.js?");

/***/ }),

/***/ "./js/snake.js":
/*!*********************!*\
  !*** ./js/snake.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Coord = __webpack_require__(/*! ./coord */ \"./js/coord.js\");\n\nclass Snake {\n    constructor(board) {\n        this.dir = \"N\";\n        this.turning = false;\n        this.board = board;\n\n        const center = new Coord(Math.floor(board.dim/2), Math.floor(board.dim/2));\n        this.segments = [center];\n\n        this.growTurns = 0;\n    }\n\n    eatApple() {\n        if (this.head().equals(this.board.apple.position)) {\n            this.growTurns += 3;\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    isOccupying(array) {\n        let result = false;\n        this.segments.forEach( segment => {\n            if (segment.i === array[0] && segment.j === array[1]) {\n                result = true;\n                return result;\n            }\n        });\n        return result;\n    }\n\n    head() {\n        return this.segments.slice(-1)[0];\n    }\n\n    isValid() {\n        const head = this.head();\n\n        if (!this.board.validPosition(this.head())) {\n            return false;\n        }\n\n        for (let i = 0; i < this.segments.length - 1; i++) {\n            if (this.segments[i].equals(head)) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n\n    move() {\n        this.segments.push(this.head().plus(Snake.DIFFS[this.dir]));\n\n        this.turning = false;\n\n        if (this.eatApple()) {\n            this.board.apple.replace();\n        }\n\n        if (this.growTurns > 0) {\n            this.growTurns -= 3;\n        } else {\n            this.segments.shift();\n        }\n\n        if (!this.isValid()) {\n            this.segments = [];\n        }\n    }\n\n    turn(dir) {\n        if (Snake.DIFFS[this.dir].isOpposite(Snake.DIFFS[dir]) ||\n        this.turning) {\n            return;\n        } else {\n            this.turning = true;\n            this.dir = dir;\n\n        }\n    }\n}\n\nSnake.DIFFS = {\n    \"N\": new Coord(-1, 0),\n    \"E\": new Coord(0, 1),\n    \"S\": new Coord(1, 0),\n    \"W\": new Coord(0, -1)\n};\n\nSnake.SYMBOL = \"S\";\nSnake.GROW_TURNS = 3;\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./js/snake.js?");

/***/ })

/******/ });