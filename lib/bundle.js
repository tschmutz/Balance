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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Platform = __webpack_require__(1)

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('Canvas');
  const ctx = canvas.getContext('2d');
  var background = new Image();
background.src = "../brick.jpg";



  let x = 400;
  let y = 400;
  let ballx = x + 50;
  let bally = y - 10;
  let test = 0;
  let points = 0;

  let rando = () => {
    return Math.floor(Math.random() * Math.floor(300));
  }
  let limit = rando();
  let colorRando = () => {
    return Math.floor(Math.random() * Math.floor(300));
  }


  let right = true;
  let nextColor
  function draw() {

    document.getElementById('score').innerHTML = `SCORE: ${points}`
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle   = `rgb( ${colorRando()}, 0, ${colorRando()})`;
    ctx.strokeStyle = '#000000';

    var img = new Image();
    img.src = 'http://www.wpclipart.com/toys/balls/red_snooker_ball.png';
    img.width = 10;
    img.height = 10;
    ctx.drawImage(img, 150, 150, 10, 10);
    ctx.fill();

    ctx.fillRect(x, y, 150, 10)
    ctx.beginPath();
    ctx.arc(ballx, bally, 10, 0, Math.PI*2);
    ctx.fillStyle = `rgb(0, ${colorRando()}, ${colorRando()})`;
    ctx.fill();
    ctx.closePath();


    if((ballx < x ) || (ballx > x + 150) ){
      bally += 5
    }
    if((bally > y)) {
      bally += 5
    }

    if( points % 2 === 0 && bally < 20) {
      points += rando();
    } else if (points % 2 === 1 && bally > 630 && y >= bally) {
      points += rando();
    } else if (bally < y - 10){
      alert(`You lose! You got ${points} points`);
    }
    console.log();

     if(test < limit && right && ballx < 1000){
       ballx += 1;
       test += 1;
     } else if(test < limit && !right && ballx > 0) {
       ballx -= 1;
       test += 1;
     } else {
       test = 0;
       limit = rando();
       right = !right
     }
  }



  key('w', function() { y -= 20; bally -= 20});
  key('s', function() { y += 20; bally += 20});
  key('a', function() { x -= 20; ballx -= 5});
  key('d', function() { x += 20; ballx += 5});

  setInterval(draw, 15);

} )


/***/ }),
/* 1 */
/***/ (function(module, exports) {


class Platform {

  constructor(x, y, width, height) {
    this.x = x;
    this.right = x + 100;
    this.y = y;
    this.ctx = ctx
  }

    draw(ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle   = '#FF0000';
      ctx.strokeStyle = '#000000';
      ctx.fillRect(this.x, this.y, 100, 10)
    }


    start() {
      setInterval(this.draw, 20)
    }


}


module.exports = Platform;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map