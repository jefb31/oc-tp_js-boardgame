// JavaScript Document
var currentGame;

function startNewGame() {
	"use strict";
	currentGame = new Game(10,10,0.9,0.75,4);
	
	displayBoard(currentGame.board);
	
	for (var player in currentGame.players) {
		displayPlayer(currentGame.players[player]);	
	}
	
	for (var weapon in currentGame.weapons) {
		displayWeapon(currentGame.weapons[weapon]);
	}
}

$(document).ready("button[name='newGame']").click(startNewGame);