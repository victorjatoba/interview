interface Cell {
  x: number;
  y: number;
}

function init() {
  let gridA: number[][];

  gridA = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ];

  let islandCounter = 0;

  for (let i = 0; i < gridA.length; i++) {
    for (let j = 0; j < gridA[i].length; j++) {
      if (gridA[i][j] === 1) {
        islandCounter++;
        checkNearby(gridA, { x: i, y: j });
      }
    }
  }

  console.log(islandCounter);

  printMatrix(gridA);
}

function checkNearby(grid: number[][], cell: Cell): void {
  // Stopping condition
  if (isOutOfBound(grid, cell) || isWater(grid, cell) || isVisited(grid, cell)) {
    return;
  }

  markTheVisited(grid, cell);

  // Recursively check all directions
  checkNearby(grid, { x: cell.x, y: cell.y + 1 }); // goToRight
  checkNearby(grid, { x: cell.x, y: cell.y - 1 }); // goToLeft
  checkNearby(grid, { x: cell.x - 1, y: cell.y }); // goToUp
  checkNearby(grid, { x: cell.x + 1, y: cell.y }); // goToDown
}

function isVisited(grid: number[][], cell: Cell): boolean {
  return grid[cell.x][cell.y] === -1;
}

function markTheVisited(grid: number[][], cell: Cell) {
  grid[cell.x][cell.y] = -1;
}

function isOutOfBound(grid: number[][], cell: Cell): boolean {
  const numRows = grid.length;
  const numCols = grid[0].length;
  return cell.x < 0 || cell.x >= numRows || cell.y < 0 || cell.y >= numCols;
}

function isWater(grid: number[][], cell: Cell): boolean {
  return grid[cell.x][cell.y] !== 1;
}

function printMatrix(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
      let row = "";
      for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + " ";
      }
      console.log(row.trim());
    }
}

init();
