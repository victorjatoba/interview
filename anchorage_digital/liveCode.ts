/**
grid = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,1]
  ]
  
  
  In: matrix numbers from 0 - 1
  Out: number of islands
  Restrictions:
    - every lines are equals
    - 
**/
  
  interface Cell {
    x: number
    y: number
  }
  
  
  function problemStatement() {
    let gridA: number[][];
    gridA = [
      [1,1,1,1,0],
      [1,1,0,1,0],
      [1,1,0,0,0],
      [0,0,0,0,1]
    ]
    
    // isGridEmpty() {
    //   return 0;
    // }
  
    let startingPosition: Cell = {x: 0, y: 0}
    checkNearby(gridA, startingPosition);
  }
  
  function checkNearby(grid: number[][], cell: Cell) {
    if (isItWater(grid, cell)) {
      // stop the recorrence
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
  
  function isItWater(grid: number[][], cell: Cell): boolean {
    return grid[cell.x][cell.y] !== 1
  }
  
  function isLand(place: number): boolean {
    return place == 1
  }