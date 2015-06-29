// JavaScript Document
var currentGame;
var currentMovements;

function playGame() {
	"use strict";
	currentGame = new Game(10,10,0.9,0.75,4);
	displayGame(currentGame);

	currentGame.nextTurn();	
}

function setupMovementOptions(movementOptions) {
	currentMovements = movementOptions;
	for (option in currentMovements) {
		toggleMovement(currentMovements[option]);	
	}
}

$(document).ready("button[name='playGame']").click(playGame);