/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _timeline = __webpack_require__(1);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _body = __webpack_require__(2);

	var _body2 = _interopRequireDefault(_body);

	var _title = __webpack_require__(3);

	var _title2 = _interopRequireDefault(_title);

	var _completeSequence = __webpack_require__(4);

	var _completeSequence2 = _interopRequireDefault(_completeSequence);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var NOOP = function NOOP() {};

	var timeLineItems = document.querySelectorAll('.timeline__list__item');
	var titles = document.querySelectorAll('.main_article__title');
	var descriptionBoxes = document.querySelectorAll('.description_box');
	var imageBoxes = document.querySelectorAll('.image_box');
	var detailsBoxes = document.querySelectorAll('.details_box');

	var playSequence = function playSequence(sequence) {
	  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NOOP;

	  var animation = new Animation(new SequenceEffect(sequence), document.timeline);

	  animation.onfinish = cb;

	  animation.play();

	  return animation;
	};

	var activeIndex = 0;
	var completeAnimation = void 0;

	var goTo = function goTo(newIndex) {
	  var sequence = [].concat(_toConsumableArray((0, _timeline2.default)({
	    toActivate: timeLineItems[newIndex],
	    toDeactivate: timeLineItems[activeIndex]
	  })), _toConsumableArray((0, _title2.default)({
	    toFadeIn: titles[newIndex],
	    toFadeOut: titles[activeIndex]
	  })), _toConsumableArray((0, _body2.default)({
	    inDescriptionBox: descriptionBoxes[newIndex],
	    inImageBox: imageBoxes[newIndex],
	    inDetailsBox: detailsBoxes[newIndex],
	    outDescriptionBox: descriptionBoxes[activeIndex],
	    outImageBox: imageBoxes[activeIndex],
	    outDetailsBox: detailsBoxes[activeIndex]
	  })));

	  playSequence(sequence, function () {
	    activeIndex = newIndex;
	  });
	};

	var next = function next() {
	  if (activeIndex < timeLineItems.length - 1) {
	    goTo(activeIndex + 1);
	  }
	};

	var previous = function previous() {
	  if (activeIndex > 0) {
	    goTo(activeIndex - 1);
	  }
	};

	document.querySelector('[data-next]').addEventListener('click', next, false);
	document.querySelector('[data-previous]').addEventListener('click', previous, false);
	timeLineItems.forEach(function (node, index) {
	  node.addEventListener('mouseenter', function () {
	    if (index !== activeIndex) {
	      var sequence = [].concat(_toConsumableArray((0, _timeline2.default)({
	        toActivate: node
	      })));

	      playSequence(sequence);
	    }
	  }, false);

	  node.addEventListener('mouseleave', function () {
	    if (index !== activeIndex) {
	      var sequence = [].concat(_toConsumableArray((0, _timeline2.default)({
	        toDeactivate: node
	      })));

	      playSequence(sequence);
	    }
	  }, false);

	  node.addEventListener('click', function () {
	    if (index !== activeIndex) {
	      var sequence = [].concat(_toConsumableArray((0, _timeline2.default)({
	        toDeactivate: timeLineItems[activeIndex]
	      })), _toConsumableArray((0, _title2.default)({
	        toFadeIn: titles[index],
	        toFadeOut: titles[activeIndex]
	      })), _toConsumableArray((0, _body2.default)({
	        inDescriptionBox: descriptionBoxes[index],
	        inImageBox: imageBoxes[index],
	        inDetailsBox: detailsBoxes[index],
	        outDescriptionBox: descriptionBoxes[activeIndex],
	        outImageBox: imageBoxes[activeIndex],
	        outDetailsBox: detailsBoxes[activeIndex]
	      })));

	      playSequence(sequence, function () {
	        activeIndex = index;
	      });
	    }
	  }, false);
	});
	document.querySelector('[data-start-sequece]').addEventListener('click', function () {
	  completeAnimation = (0, _completeSequence2.default)({
	    timeLineItems: timeLineItems,
	    titles: titles,
	    descriptionBoxes: descriptionBoxes,
	    imageBoxes: imageBoxes,
	    detailsBoxes: detailsBoxes
	  });

	  completeAnimation.play();
	}, false);

	document.querySelector('[data-pause-sequece]').addEventListener('click', function () {
	  if (completeAnimation) {
	    completeAnimation.pause();
	  }
	}, false);

	document.querySelector('[data-flow-control]').addEventListener('input', function (event) {
	  if (completeAnimation && completeAnimation.playState === 'paused') {
	    completeAnimation.currentTime = event.target.value;
	  }
	}, false);

	var init = function init() {
	  var sequence = [].concat(_toConsumableArray((0, _timeline2.default)({
	    toActivate: timeLineItems[0]
	  })), _toConsumableArray((0, _title2.default)({
	    toFadeIn: titles[0]
	  })), _toConsumableArray((0, _body2.default)({
	    inDescriptionBox: descriptionBoxes[0],
	    inImageBox: imageBoxes[0],
	    inDetailsBox: detailsBoxes[0]
	  })));

	  playSequence(sequence);
	};

	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DURATION = 100;

	var TIMING = {
	  duration: DURATION,
	  fill: 'forwards',
	  ease: 'ease-out'
	};

	var toDeactivateKeyframes = [{
	  top: '-11px'
	}, {
	  top: '-25px'
	}];

	var toDeactivateTextKeyframes = [{
	  fontSize: '36px'
	}, {
	  fontSize: '24px'
	}];

	var toDeactivateEmKeyframes = [{
	  backgroundColor: '#FA5A5A'
	}, {
	  backgroundColor: '#E8F1FF'
	}];

	var toActivateKeyframes = [].concat(toDeactivateKeyframes).reverse();
	var toActivateTextKeyframes = [].concat(toDeactivateTextKeyframes).reverse();
	var toActivateEmKeyframes = [].concat(toDeactivateEmKeyframes).reverse();

	var createActivateEffects = function createActivateEffects(toActivate) {
	  var toActivateSpan = toActivate.querySelector('span');
	  var toActivateEm = toActivate.querySelector('em');

	  var effects = [new KeyframeEffect(toActivate, toActivateKeyframes, TIMING), new KeyframeEffect(toActivateSpan, toActivateTextKeyframes, TIMING), new KeyframeEffect(toActivateEm, toActivateEmKeyframes, TIMING)];

	  return new GroupEffect(effects);
	};

	var createDeactivateEffects = function createDeactivateEffects(toDeactivate) {
	  var toDeactivateSpan = toDeactivate.querySelector('span');
	  var toDeactivateEm = toDeactivate.querySelector('em');

	  var effects = [new KeyframeEffect(toDeactivate, toDeactivateKeyframes, TIMING), new KeyframeEffect(toDeactivateSpan, toDeactivateTextKeyframes, TIMING), new KeyframeEffect(toDeactivateEm, toDeactivateEmKeyframes, TIMING)];

	  return new GroupEffect(effects);
	};

	exports.default = function (_ref) {
	  var toActivate = _ref.toActivate,
	      toDeactivate = _ref.toDeactivate;

	  var effects = [];

	  if (toDeactivate) {
	    effects.push(createDeactivateEffects(toDeactivate));
	  }

	  if (toActivate) {
	    effects.push(createActivateEffects(toActivate));
	  }

	  return effects;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DURATION = 250;

	var TIMING = {
	  duration: DURATION,
	  fill: 'forwards',
	  ease: 'ease-out'
	};

	var descriptionBoxSwipeInKeyframes = [{
	  left: '-370px',
	  opacity: 0
	}, {
	  left: 0,
	  opacity: 1
	}];

	var descriptionBoxSwipeOutKeyframes = [].concat(descriptionBoxSwipeInKeyframes).reverse();

	var imageBoxSwipeInKeyframes = [{
	  top: '370px',
	  opacity: 0
	}, {
	  top: 0,
	  opacity: 1
	}];

	var imageBoxSwipeOutKeyframes = [].concat(imageBoxSwipeInKeyframes).reverse();

	var detailsBoxSwipeInKeyframes = [{
	  right: '-370px',
	  opacity: 0
	}, {
	  right: 0,
	  opacity: 1
	}];

	var detailsBoxSwipeOutKeyframes = [].concat(detailsBoxSwipeInKeyframes).reverse();

	exports.default = function (_ref) {
	  var inDescriptionBox = _ref.inDescriptionBox,
	      inImageBox = _ref.inImageBox,
	      inDetailsBox = _ref.inDetailsBox,
	      outDescriptionBox = _ref.outDescriptionBox,
	      outImageBox = _ref.outImageBox,
	      outDetailsBox = _ref.outDetailsBox;

	  var effects = [];
	  if (outDescriptionBox) {
	    effects.push(new KeyframeEffect(outDescriptionBox, descriptionBoxSwipeOutKeyframes, TIMING));
	  }

	  if (outImageBox) {
	    effects.push(new KeyframeEffect(outImageBox, imageBoxSwipeOutKeyframes, TIMING));
	  }

	  if (outDetailsBox) {
	    effects.push(new KeyframeEffect(outDetailsBox, detailsBoxSwipeOutKeyframes, TIMING));
	  }

	  if (inDescriptionBox) {
	    effects.push(new KeyframeEffect(inDescriptionBox, descriptionBoxSwipeInKeyframes, TIMING));
	  }

	  if (inImageBox) {
	    effects.push(new KeyframeEffect(inImageBox, imageBoxSwipeInKeyframes, TIMING));
	  }

	  if (inDetailsBox) {
	    effects.push(new KeyframeEffect(inDetailsBox, detailsBoxSwipeInKeyframes, TIMING));
	  }

	  return effects;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DURATION = 250;

	var TIMING = {
	  duration: DURATION,
	  fill: 'forwards',
	  ease: 'ease-out'
	};

	var fadeInKeyframes = [{
	  opacity: 0
	}, {
	  opacity: 1
	}];

	var fadeOutKeyframes = [].concat(fadeInKeyframes).reverse();

	exports.default = function (_ref) {
	  var toFadeIn = _ref.toFadeIn,
	      toFadeOut = _ref.toFadeOut;

	  var effects = [];

	  if (toFadeOut) {
	    effects.push(new KeyframeEffect(toFadeOut, fadeOutKeyframes, TIMING));
	  }

	  if (toFadeIn) {
	    effects.push(new KeyframeEffect(toFadeIn, fadeInKeyframes, TIMING));
	  }

	  return effects;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _timeline = __webpack_require__(1);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _body = __webpack_require__(2);

	var _body2 = _interopRequireDefault(_body);

	var _title = __webpack_require__(3);

	var _title2 = _interopRequireDefault(_title);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var NOOP = function NOOP() {};

	exports.default = function (_ref) {
	  var timeLineItems = _ref.timeLineItems,
	      titles = _ref.titles,
	      descriptionBoxes = _ref.descriptionBoxes,
	      imageBoxes = _ref.imageBoxes,
	      detailsBoxes = _ref.detailsBoxes,
	      _ref$onFinish = _ref.onFinish,
	      onFinish = _ref$onFinish === undefined ? NOOP : _ref$onFinish;

	  var items = timeLineItems.length;

	  var effects = [];

	  var generateSequenceStep = function generateSequenceStep(activeIndex, newIndex) {
	    return [].concat(_toConsumableArray((0, _timeline2.default)({
	      toActivate: timeLineItems[newIndex],
	      toDeactivate: timeLineItems[activeIndex]
	    })), _toConsumableArray((0, _title2.default)({
	      toFadeIn: titles[newIndex],
	      toFadeOut: titles[activeIndex]
	    })), _toConsumableArray((0, _body2.default)({
	      inDescriptionBox: descriptionBoxes[newIndex],
	      inImageBox: imageBoxes[newIndex],
	      inDetailsBox: detailsBoxes[newIndex],
	      outDescriptionBox: descriptionBoxes[activeIndex],
	      outImageBox: imageBoxes[activeIndex],
	      outDetailsBox: detailsBoxes[activeIndex]
	    })));
	  };

	  for (var index = 0; index < items - 1; index++) {
	    effects = effects.concat(generateSequenceStep(index, index + 1));
	  }

	  var animation = new Animation(new SequenceEffect(effects), document.timeline);

	  animation.onfinish = onFinish;

	  return animation;
	};

/***/ }
/******/ ]);