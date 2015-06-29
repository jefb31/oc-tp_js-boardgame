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
			board.grid[i][j].accessible ? $cell.addClass("cell-accessible") : $cell.addClass("cell-inaccessible");
			$cell.appendTo($row);	
		}
		$row.appendTo($board);
	}
}

function displayWeapon(weapon) {
	if (weapon.position === 0) {
	} else if ((typeof weapon.position === "string") && weapon.position.startsWith("player")) {
		$("#" + weapon.position + "-controls .player-weapon-icon").addClass("cell-weapon" + weapon.id);
	} else {
		$("#cell-" + weapon.position[0] + "-" + weapon.position[1]).addClass("cell-weapon" + weapon.id);
	}
}

function displayPlayer(player) {
	"use strict";
	var $board = $("#board");
	if (player.lastPosition !== 0) {
		$("#cell-" + player.lastPosition[0] + "-" + player.lastPosition[1]).removeClass("cell-player" + player.id);	
	}
	$("#cell-" + player.position[0] + "-" + player.position[1]).addClass("cell-player" + player.id);
}