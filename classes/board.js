// JavaScript Document
function Board(width, height, probAccessibility) {
	"use strict";
	this.width = width;
	this.height = height;
	this.grid = new Array(new Array());
	
	for(var i = 1; i <= this.width; i++) {
		this.grid[i - 1] = [];
		for(var j = 1;j <= this.height; j++) {
			this.grid[i - 1][j - 1] = new Cell(i - 1, j - 1, probAccessibility);
		}
	}
}