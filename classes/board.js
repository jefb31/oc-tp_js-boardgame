// JavaScript Document
function Board(width, height, probAccessibility) {
	"use strict";
	this.grid = new Array(new Array());
	
	for(var i = 0; i < width; i++) {
		for(var j = 0;j < height; j++) {
			this.grid[i][j] = new Cell(i, j, true);
		}
	}
}