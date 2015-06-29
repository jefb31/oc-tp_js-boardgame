// JavaScript Document
function Cell(rowIndex, colIndex, probAccessibility) {
	"use strict";
	this.row = rowIndex;
	this.col = colIndex;
	this.triggerCombat = false;
	this.accessible = Math.random() < probAccessibility ? true : false;
}