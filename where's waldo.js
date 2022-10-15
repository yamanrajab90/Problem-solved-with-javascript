// Return the coordinates ([row, col]) of the element that differs from the rest.
const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"],
];

const example1 = [["A"], ["A"], ["B"]];
const example2 = [["A", "A", "B"]];
//

const whereIsWaldo = (matrix) => {
  let repeatative = "";
  if (
    matrix[0][0] === matrix[matrix.length - 1][matrix[0].length - 1] &&
    (matrix.length > 1 || matrix[0].length > 1)
  ) {
    repeatative = matrix[0][0];
  } else if (
    matrix[matrix.length - 1][0] === matrix[0][matrix[0].length - 1] &&
    (matrix.length > 1 || matrix[0].length > 1)
  ) {
    repeatative = matrix[matrix.length - 1][0];
  } else if (matrix.length > 1 && matrix[0].length == 1) {
    if (matrix[0][0] === matrix[1][0]) {
      repeatative = matrix[0][0];
    } else if (matrix[1][0] === matrix[2][0]) {
      repeatative = matrix[1][0];
    }
  } else if (matrix.length == 1 && matrix[0].length > 1) {
    if (matrix[0][0] === matrix[0][1]) {
      repeatative = matrix[0][0];
    } else if (matrix[0][1] === matrix[0][2]) {
      repeatative = matrix[0][1];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== repeatative) {
        console.log([i + 1, j + 1]);
      }
    }
  }
};

whereIsWaldo(example);
