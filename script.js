var app = angular.module('randomApp', []);

app.controller('wordController', function($scope) {
	$scope.wordPool = ["mommy", "daddy", "potty", "toys", "candy", "cake", "ice cream", "nana boo boo", "ouch", "wahhh", "woops", "wowza"];
	
	$scope.phrasePool = [
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

	$scope.styles = ["red", "blue", "green", "purple", "gold", "brown", "orange", "dotted", "solid", "bold", "underline"];

	$scope.words = [];

	$scope.addWord = function() {
		var randomWord = $scope.wordPool[Math.floor(Math.random() * (10-0 + 1) + 0)];
		var randomWordObj = {name: randomWord, style: "nostyle"}
		$scope.words.push(randomWordObj);
	};

	$scope.addPrettyWord = function() {
		var randomWord = $scope.wordPool[Math.floor(Math.random() * (10-0 + 1) + 0)];
		var randomStyle = $scope.styles[Math.floor(Math.random() * (10-0 + 1) + 0)];
		var randomWordObj = {name: randomWord, style: randomStyle};
		$scope.words.push(randomWordObj);
	};

	$scope.addPhrase = function () {
		var randomPhrase = $scope.phrasePool[Math.floor(Math.random() * (10-0 + 1) + 0)];
		var randomPhraseObj = {name: randomPhrase, style: "nostyle"}
		$scope.words.push(randomPhraseObj);
	};

	$scope.addPrettyPhrase = function() {
		var randomPhrase = $scope.phrasePool[Math.floor(Math.random() * (10-0 + 1) + 0)];
		var randomStyle = $scope.styles[Math.floor(Math.random() * (10-0 + 1) + 0)];
		var randomPhraseObj = {name: randomPhrase, style: randomStyle};
		$scope.words.push(randomPhraseObj);
	};

});