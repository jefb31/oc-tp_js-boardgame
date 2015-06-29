// JavaScript Document
var currentGame;

function startNewGame() {
	"use strict";
	currentGame = new Game(10,10,0.9);
	displayBoard(currentGame.board);	
}

$(document).ready("button[name='newGame']").click(startNewGame);