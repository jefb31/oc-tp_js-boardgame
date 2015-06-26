// JavaScript Document
function displayBoard(board) {
	"use strict";
	var $board = $("#board");
	var $row, $cell;
	
	$board.html("");
	for(var i = 0; i < board.grid.length; i++) {
		$row = $("<div class='row'></div>");
		for(var j=0; j < board.grid[i].length; j++) {
			$cell = $("<div class='cell'></div>");
			$cell.attr("id", "cell-" + board.grid[i][j].row + "-" + board.grid[i][j].col);
			$cell.appendTo($row);	
		}
		$row.appendTo($board);
	}
}