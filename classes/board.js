// JavaScript Document
function Board(height, width, probAccessibility) {
	"use strict";
	this.height = height;
	this.width = width;
	this.grid = (function(height, width) {
		var grid = new Array(new Array());
		for(var i = 1; i <= height; i++) {
			grid[i - 1] = [];
			for(var j = 1;j <= width; j++) {
				grid[i - 1][j - 1] = new Cell(i - 1, j - 1, probAccessibility);
			}
		}
		return grid;
	})(height, width);
	
	this.isSuitableForPlayer = function(pos) {
		if((this.grid[pos[0]][pos[1]].triggerCombat === true) || (this.grid[pos[0]][pos[1]].weaponOnCell > 0) || (this.grid[pos[0]][pos[1]].playerOnCell > 0) || (this.grid[pos[0]][pos[1]].accessible === false)) {
			return false;
		} else {
			return true;
		}
	};
	
	this.movePlayerOnBoard = function(id, lastPos, newPos) {
		if (lastPos !== 0) {
			this.grid[lastPos[0]][lastPos[1]].playerOnCell = 0;
			if(lastPos[0] > 0) {
			this.grid[lastPos[0] - 1][lastPos[1]].toggleTrigger();	
			}
			if(lastPos[0] < this.height - 1) {
				this.grid[lastPos[0] + 1][lastPos[1]].toggleTrigger();	
			}
			if(lastPos[1] > 0) {
				this.grid[lastPos[0]][lastPos[1] - 1].toggleTrigger();	
			}
			if(lastPos[1] < this.width - 1) {
				this.grid[lastPos[0]][lastPos[1] + 1].toggleTrigger();	
			}
		}
		this.grid[newPos[0]][newPos[1]].playerOnCell = id;
		if(newPos[0] > 0) {
			this.grid[newPos[0] - 1][newPos[1]].toggleTrigger();	
		}
		if(newPos[0] < this.height - 1) {
			this.grid[newPos[0] + 1][newPos[1]].toggleTrigger();	
		}
		if(newPos[1] > 0) {
			this.grid[newPos[0]][newPos[1] - 1].toggleTrigger();	
		}
		if(newPos[1] < this.width - 1) {
			this.grid[newPos[0]][newPos[1] + 1].toggleTrigger();	
		}
	};
}