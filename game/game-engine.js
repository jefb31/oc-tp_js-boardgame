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
	
	this.currentPlayer = this.players[0];
	this.continueMovementPhase = true;
	this.nextMovementTurn = function() {
		if (this.continueMovementPhase === true) {
			var movementOptions = this.board.checkPlayerMovementOptions(this.currentPlayer.position, this.currentPlayer.movement);
			if (movementOptions.length > 0) {
				setupMovementOptions(movementOptions);
			} else {
				// Game Over	
			}
		} else {
			// Combat Phase
		}
	};
	
	this.makeMovementTurn = function (event) {
		var pos = [event.data.row, event.data.col];
		currentGame.currentPlayer.makeMovement(pos, currentGame.board);
		unsetMovementOptions();
		
		if (currentGame.board.grid[currentGame.currentPlayer.position[0]][currentGame.currentPlayer.position[1]].triggerCombat === true) {
			currentGame.continueMovementPhase = false;	
		} else {
			currentGame.continueMovementPhase = true;
		}
		
		if(currentGame.currentPlayer.id === currentGame.players.length) {
			currentGame.currentPlayer = currentGame.players[0];
		} else {
			currentGame.currentPlayer = currentGame.players[currentGame.currentPlayer.id];
		}
		
		currentGame.nextMovementTurn();
	};
};