$(document).ready(function(){

var path = "assets/images/";

var wins = 0;
var losses = 0;
var gameover = false;
var userValue = 0;
var crystalOption = ["ruby", "diamond", "citrine", "jade"];
var targetNumber =0;

//Generate a random number	
var generateANumber = function(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

var targetNumber = generateANumber(19,120);

//Generate a random number and draw each crystal.
var drawImages = function(){
	var crystalValues = [];
	for (i = 0; i < crystalOption.length; i++) {
		var imageCrystal = $("<img>");
		imageCrystal.addClass("crystal-image");
		imageCrystal.attr("src", path+crystalOption[i]+".png");
		imageCrystal.attr("data-crystalvalue", generateANumber(1,12));
		$("#crystals").append(imageCrystal);
	}

}

//Initialize the game.
function init(){
	
	drawImages();
	userValue = 0;	
	targetNumber = generateANumber(19,120);
	$("#targetNumber").text(targetNumber);
	$("#wins").text(wins);
	$("#losses").text(losses.toString());
	$("#guessValue").text(userValue);

}

//Start the game.
game();

function game(){
	init();

//Set up click functions for crystals.
	$(".crystal-image").on("click", function() {
		var guessedValue = $(this).attr("data-crystalvalue");
		userValue = userValue + parseInt(guessedValue);
		$("#guessValue").text(userValue);
		if(targetNumber == userValue){
			++wins;
			gameover = true;


		}else if(targetNumber < userValue){
			++losses;
			gameover = true;
		}
		if(gameover){
			$("#crystals").empty();
			gameover = false;
			return game();
		}
	});
}

});

