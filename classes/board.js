// JavaScript Document
function Board(width, height, probAccessibility) {
	"use strict";
	this.grid = new Array(new Array());
	
	for(var i = 1; i <= width; i++) {
		this.grid[i - 1] = [];
		for(var j = 1;j <= height; j++) {
			this.grid[i - 1][j - 1] = new Cell(i, j, true);
		}
	}
}