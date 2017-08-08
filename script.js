var app = angular.module('randomApp', []);

app.controller('wordController', function($scope) {
	var wordPool = ["mommy", "daddy", "potty", "toys", "candy", "cake", "ice cream", "nana boo boo", "ouch", "wahhh", "woops", "wowza"];
	
	var phrasePool = [
	"wubba lubba dub dub",
	"rubber baby buggy bumpers",
	"i want ice cream",
	"i don't wanna go to bed",
	"i had an accident",
	"dinner is icky",
	"school is stinky",
	"tiny rick",
	"no kitty this is my pot pie",
	"no kitty that's a bad kitty",
	"move it football head"
	];

	var styles = ["red", "blue", "green", "purple", "gold", "brown", "orange", "dotted", "solid", "bold", "underline"];

	$scope.words = [];

	$scope.addWord = function() {
		var randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
		var randomWordObj = {name: randomWord};
		$scope.words.push(randomWordObj);
	};

	$scope.addPrettyWord = function() {
		var randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
		var randomStyle = styles[Math.floor(Math.random() * styles.length)];
		var randomWordObj = {name: randomWord, style: randomStyle};
		$scope.words.push(randomWordObj);
	};

	$scope.addPhrase = function () {
		var randomPhrase = phrasePool[Math.floor(Math.random() * phrasePool.length)];
		var randomPhraseObj = {name: randomPhrase};
		$scope.words.push(randomPhraseObj);
	};

	$scope.addPrettyPhrase = function() {
		var randomPhrase = phrasePool[Math.floor(Math.random() * phrasePool.length)];
		var randomStyle = styles[Math.floor(Math.random() * styles.length)];
		var randomPhraseObj = {name: randomPhrase, style: randomStyle};
		$scope.words.push(randomPhraseObj);
	};

});