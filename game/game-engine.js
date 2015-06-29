// JavaScript Document
function Game(boardWidth, boardHeight, boardAccessibility) {
	"use strict";
	this.board = new Board(10,10,0.9);
	this.player1 = new Player(1, this.board);
	this.player2 = new Player(2, this.board);
};