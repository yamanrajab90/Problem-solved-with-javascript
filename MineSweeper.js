// this function takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighbouring mines.
const example = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];
const neighbourElementsCoordinates = (x, y, grid) => {
  const coordinates = [];
 

  if (x - 1 >= 0 && y - 1 >= 0) {
    coordinates.push([x - 1, y - 1]);
  }
  if (x - 1 >= 0) {
    coordinates.push([x - 1, y]);
  }
  if (x - 1 >= 0 && y + 1 < grid[0].length) {
    coordinates.push([x - 1, y + 1]);
  }
  if (y - 1 >= 0) {
    coordinates.push([x, y - 1]);
  }
  if (y + 1 < grid[0].length) {
    coordinates.push([x, y + 1]);
  }
  if (x + 1 < grid.length && y - 1 >= 0) {
    coordinates.push([x + 1, y - 1]);
  }
  if (x + 1 < grid.length) {
    coordinates.push([x + 1, y]);
  }
  if (x + 1 < grid.length && y + 1 < grid[0].length) {
    coordinates.push([x + 1, y + 1]);
  }
  return coordinates;
};

let numberOfMines = (i, j, grid) => {
  let counter = 0;
  let arr = [];
  arr = neighbourElementsCoordinates(i, j, grid);
  for (let n = 0; n < arr.length; n++) {
    if (grid[arr[n][0]][arr[n][1]] === 1) {
      counter++;
    }
  }
  return counter;
};

const minesweeeper = (grid) => {
  let sweeperResult = [];
  for (let m = 0; m < grid.length; m++) {
    sweeperResult.push([...grid[m]]);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) sweeperResult[i][j] = 9;
      else sweeperResult[i][j] = numberOfMines(i, j, grid);
    }
  }
  console.log(sweeperResult);
};
minesweeeper(example);
