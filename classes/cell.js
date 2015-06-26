// JavaScript Document
function Cell(rowIndex, colIndex, isAccessible) {
	"use strict";
	this.row = rowIndex;
	this.col = colIndex;
	this.accessible = isAccessible;
}