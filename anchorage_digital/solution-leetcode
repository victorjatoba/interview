/**
* https://leetcode.com/problems/number-of-islands/
*/
interface Cell {
  x: number
  y: number
}

function numIslands(grid: string[][]): number {
  let islandCounter = 0

  /**
   * Iterates through each cell in the grid to identify and count islands.
   */
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        islandCounter++;
        checkNearby(grid, { x: i, y: j });
      }
    }
  }

  return islandCounter
}

/**
 * Recursively marks all connected land cells (1s) as visited (-1) to prevent re-counting.
 */
function checkNearby(grid: string[][], cell: Cell) {
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

function markTheVisited(grid: string[][], cell: Cell) {
  grid[cell.x][cell.y] = "-1"
}

function isOutOfBound(grid: string[][], cell: Cell): boolean {
  const numRows = grid.length;
  const numCols = grid[0].length;
  return cell.x < 0 || cell.x >= numRows || cell.y < 0 || cell.y >= numCols;
}

function isLand(grid: string[][], cell: Cell): boolean {
  return grid[cell.x][cell.y] == "1"
}
