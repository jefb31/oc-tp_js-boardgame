// JavaScript Document
function Game(boardWidth, boardHeight, boardAccessibility) {
	"use strict";
	this.board = new Board(10,10,0.9);
	this.players = [new Player(1, this.board), new Player(2, this.board)];
};