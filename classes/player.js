// JavaScript Document
function Player(id, board) {
	"use strict";
	this.id = id;
	this.hp = 100;
	this.weapon;
	this.position = (function(id, board) {
		var rndPos, suitable = false;
		while (suitable === false) {
			rndPos = [Math.floor(Math.random()*board.height), Math.floor(Math.random()*board.width)];
			suitable = board.isSuitableForPlayer(rndPos);	
		}
		board.movePlayerOnBoard(id, 0, rndPos);
		return rndPos;
	})(id, board);
	this.movement = 3;
}