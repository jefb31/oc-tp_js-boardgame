// JavaScript Document
function Board(width, height, probAccessibility) {
	"use strict";
	this.width = width;
	this.height = height;
	this.grid = (function(width, height) {
		var grid = new Array(new Array());
		for(var i = 1; i <= width; i++) {
			grid[i - 1] = [];
			for(var j = 1;j <= height; j++) {
				grid[i - 1][j - 1] = new Cell(i - 1, j - 1, probAccessibility);
			}
		}
		return grid;
	})(width, height);
}