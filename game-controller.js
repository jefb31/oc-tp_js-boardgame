// JavaScript Document
var gameBoard;

function startNewGame() {
	"use strict";
	gameBoard = new Board(10,10,0.9);
	displayBoard(gameBoard);	
}

$(document).ready("button[name='newGame']").click(startNewGame);