// JavaScript Document
var currentGame;

function startNewGame() {
	"use strict";
	currentGame = new Game(10,10,0.9);
	displayBoard(currentGame.board);
	for (var player in currentGame.players) {
		displayPlayer(currentGame.players[player]);	
	}
}

$(document).ready("button[name='newGame']").click(startNewGame);