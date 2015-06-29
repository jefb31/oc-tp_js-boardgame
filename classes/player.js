// JavaScript Document
function Player(id, weapon, board) {
	"use strict";
	this.id = id;
	this.hp = 100;
	this.weapon = weapon;
	this.lastPosition = 0;
	this.position = (function(id, last, board) {
		var rndPos, suitable = false;
		while (suitable === false) {
			rndPos = [Math.floor(Math.random()*board.height), Math.floor(Math.random()*board.width)];
			suitable = board.isSuitableForPlayer(rndPos);	
		}
		board.movePlayerOnBoard(id, last, rndPos);
		return rndPos;
	})(this.id, this.lastPosition, board);
	this.movement = 3;
		
	this.makeMovement = function(newPos, board) {
		this.lastPosition = this.position;
		board.movePlayerOnBoard(this.id, this.lastPosition, newPos);
		this.position = newPos;
	};
}