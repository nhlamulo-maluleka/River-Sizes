var matrix = [
  [1, 0, 0, 1, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0],
];

let riversize = (function riverSizes(matrix) {
  const stack = [];
  const checked = [];
  const riversizes = [];
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        if (!checked.includes(`(${i},${j})`)) {
          stack.push([i, j]);
          checked.push(`(${i},${j})`);
          count += 1;

          while (stack.length > 0) {
            const row = stack[0][0];
            const column = stack[0][1];

            //   Check Left
            if (column - 1 >= 0) {
              if (matrix[row][column - 1] === 1) {
                if (!checked.includes(`(${row},${column - 1})`)) {
                  checked.push(`(${row},${column - 1})`);
                  stack.push([row, column - 1]);
                  count += 1;
                }
              }
            }

            //   Check Right
            if (column + 1 < matrix[row].length) {
              if (matrix[row][column + 1] === 1) {
                if (!checked.includes(`(${row},${column + 1})`)) {
                  checked.push(`(${row},${column + 1})`);
                  stack.push([row, column + 1]);
                  count += 1;
                }
              }
            }

            //   Check Down
            if (row + 1 < matrix.length) {
              if (matrix[row + 1][column] === 1) {
                if (!checked.includes(`(${row + 1},${column})`)) {
                  checked.push(`(${row + 1},${column})`);
                  stack.push([row + 1, column]);
                  count += 1;
                }
              }
            }

            //   Check Up
            if (row - 1 >= 0) {
              if (matrix[row - 1][column] === 1) {
                if (!checked.includes(`(${row - 1},${column})`)) {
                  checked.push(`(${row - 1},${column})`);
                  stack.push([row - 1, column]);
                  count += 1;
                }
              }
            }

            // Pop the stack!
            stack.splice(0, 1);
          }
          riversizes.push(count);
          count = 0;
        }
      }
    }
  }

  return riversizes;
})(matrix);

console.log(riversize);
