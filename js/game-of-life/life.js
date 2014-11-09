function renderGrid(grid) {
	document.body.innerHTML = '';
	game = document.createElement('div');
	game.className = 'game';
	for (var i = 0; i < grid.length; i++) {
		for (var n = 0; n < grid[i].length; n++) {
			cell = document.createElement('div');
			if (grid[i][n] == 1) {
				cell.className = 'cell alive';
			} else{
				cell.className = 'cell';
			};
			game.appendChild(cell);
		};
		br = document.createElement('br');
		game.appendChild(br);
	};
	document.body.appendChild(game)
}

function gridInit(width, height) {
	grid = [];
	for (var i = 0; i < width; i++) {
		row = [];
		for (var n = 0; n < height; n++) {
			cell = Math.round(Math.random() *.55);
			row.push(cell);
		};
		grid.push(row);
	};
	return grid;
}

function timeStep(oldGrid) {
	newGrid = oldGrid;
	for (var i = 0; i < oldGrid.length; i++) {
		for (var n = 0; n < oldGrid[i].length; n++) {
			newGrid[i][n] = detectIfAlive(i, n, oldGrid);
		};
	};
	return newGrid;
}

function detectIfAlive(x, y, grid) {
	function at (x, y) {
		return (((grid[x] || [])[y]) || 0);
	}
	livingNeighbors = at(x - 1, y)+at(x, y - 1)+at(x - 1, y - 1)+at(x + 1, y)+at(x, y + 1)+at(x + 1, y + 1)+at(x + 1, y - 1)+at(x - 1, y + 1);
	cell = grid[x][y];
	if (cell == 1) {
		return + (livingNeighbors == 2 || livingNeighbors == 3);
	} else{
		return + (livingNeighbors == 3);
	};
}

var grid = gridInit(50,50);

setInterval(function(){
	grid = timeStep(grid);
	renderGrid(grid);
},250);