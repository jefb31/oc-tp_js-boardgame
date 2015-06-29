// JavaScript Document
function Game(boardWidth, boardHeight, boardAccessibility, weaponAvailability, maxBonusWeapons) {
	"use strict";
	this.board = new Board(boardWidth, boardHeight, boardAccessibility);
	
	var baseWeapons = [new Weapon(1, "Red Blaster", 10),
						new Weapon(2, "Blue Laser", 10)]
	var bonusWeapons = [new Weapon(3, "Petite Aiguille", 5),
						new Weapon(4, "Grande Martha", 50),
						new Weapon(5, "Double Laser", 20),
						new Weapon(6, "Calibre 35", 35)];
	
	this.players = [new Player(1, baseWeapons[0], this.board), new Player(2, baseWeapons[1], this.board)];
			
	for (var weapon in baseWeapons) {
		baseWeapons[weapon].initializePositionOnPlayer(this.players[weapon]);
	}
	
	for (var weapon in bonusWeapons) {
		var nbBonusWeapons = 0;
		if ((Math.random() < weaponAvailability) && (nbBonusWeapons <= maxBonusWeapons)) {
			bonusWeapons[weapon].initializePositionOnBoard(this.board);
			nbBonusWeapons += 1;	
		}
	}
	
	this.weapons = baseWeapons.concat(bonusWeapons);
	
	
	
	

};