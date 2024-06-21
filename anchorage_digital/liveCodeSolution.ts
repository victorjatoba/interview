/**
Input: a grid with zeros and one
Output: 

matrix = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,1],
  [0,0,0,0,1]
]

In: matrix numbers with zeros and ones
Out: number of islands
Restrictions:
  - every lines are equals
  - no limit for arrays
**/

interface Cell {
  x: number
  y: number
}

function init() {
  let gridA: number[][];
  
  gridA = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,1],
    [0,0,0,0,1]
  ]

  let islandCounter = 0

  /**
   * Iterates through each cell in the grid to identify and count islands.
   */
  for (let i = 0; i < gridA.length; i++) {
    for (let j = 0; j < gridA[i].length; j++) {
      if (gridA[i][j] === 1) {
        islandCounter++;
        checkNearby(gridA, { x: i, y: j });
      }
    }
  }

  console.log(islandCounter);
}

/**
 * Recursively marks all connected land cells (1s) as visited (-1) to prevent re-counting.
 */
function checkNearby(grid: number[][], cell: Cell) {
  // Stopping condition
  if (isOutOfBound(grid, cell) || !isLand(grid, cell)) {
    return
  }

  markTheVisited(grid, cell);

  // goToRight
  checkNearby(grid, { x: cell.x, y: cell.y + 1 })

  // goToLeft
  checkNearby(grid, { x: cell.x, y: cell.y - 1 })

  // goToUp
  checkNearby(grid, { x: cell.x - 1, y: cell.y })

  // goToDown
  checkNearby(grid, { x: cell.x + 1, y: cell.y })
}

function markTheVisited(grid: number[][], cell: Cell) {
  grid[cell.x][cell.y] = -1
}

function isOutOfBound(grid: number[][], cell: Cell): boolean {
  const numRows = grid.length;
  const numCols = grid[0].length;
  return cell.x < 0 || cell.x >= numRows || cell.y < 0 || cell.y >= numCols;
}

function isLand(grid: number[][], cell: Cell): boolean {
  return grid[cell.x][cell.y] == 1
}

init()