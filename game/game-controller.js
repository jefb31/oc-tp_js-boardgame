// JavaScript Document
var currentGame;

function startNewGame() {
	"use strict";
	currentGame = new Game(10,10,0.9);
	displayBoard(currentGame.board);
	displayPlayer(currentGame.player1);
	displayPlayer(currentGame.player2);	
}

$(document).ready("button[name='newGame']").click(startNewGame);