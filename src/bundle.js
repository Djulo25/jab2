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
/***/ 



	(function(module, exports) {
		
	var suits, numbers, suitsBottom, i; 
	var card = {
		suits: ["&#9830", "&#9829", "&#9824", "&#9827"],
		numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
	};
	
//Apeller les actions en fonction du nombre tiré

	var actions = {
		"A": function() { return "Donne 1 Cul Sec"; },
		"2": function() { return "Bois 2 gorgers"; },
		"3": function() { return "Donne 3 gorgers"; },
		"4": function() { return "Bois 4 gorgers"; },
		"5": function() { return "Donne 5 gorgers"; },
		"6": function() { return "Bois 6 gorgers"; },
		"7": function() { return "Je n'ai jamais"; },
		"8": function() { return "Recoit un défi des joueurs sinon cul sec"; },
		"9": function() { return "Invente une régle !"; },
		"10": function() { return "Chifumi en 1 manche! Le perdant boit 6 gorgers, si égalité Cul Sec."; },
		"J": function() { return "Bois pour le Roi"; },
		"Q": function() { return "Toutes personnes qui répond a tes questions boivent "; },
		"K": function() { return "Roi des pouces: posse ton pouce sur la table le dernier a suivre bois Cul Sec"; },
	};
	
	function pullNumber() {
		var theNumber = Math.floor(Math.random() * (card.numbers.length));
		var pulledNumber = card.numbers[theNumber];
		document.getElementById('randomNumber').innerHTML = pulledNumber;
	
		// Call the action associated with the pulled number
		if (actions[pulledNumber]) {
			// Set the text of the action element to the action
			document.getElementById('action').innerHTML = actions[pulledNumber]();
		}
	}
	
	function pullBothSuits(){
		var allSuits = Math.floor(Math.random() * (card.suits.length));
		document.getElementById('topSuit').innerHTML = card.suits[allSuits];
		document.getElementById('bottomSuit').innerHTML = card.suits[allSuits];
		
		if (card.suits[allSuits]==="&#9830" || card.suits[allSuits]==="&#9829"){
			document.getElementById("theCard").classList.add("redSuit");
		}else if (card.suits[allSuits]==="&#9827" || card.suits[allSuits]==="&#9824"){
				document.getElementById("theCard").classList.remove("redSuit");
		}
	}
	
	window.wholeCard = function(){
		pullNumber();
		pullBothSuits();
	};

// 	if (card.suits==="&#9830" || "&#9829"){
// 		document.getElementById('topSuit').classList.add("redSuit");
// }	else {
// 	document.getElementById('topSuit').classList.add("blackSuit");
// }


/***/ })
/******/ ]);