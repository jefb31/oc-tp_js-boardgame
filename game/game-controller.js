// JavaScript Document
var currentGame;

function playGame() {
	"use strict";
	currentGame = new Game(10,10,0.9,0.75,4);
	displayGame(currentGame);
}

$(document).ready("button[name='playGame']").click(playGame);