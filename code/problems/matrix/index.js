// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }

  let rowStart = 0,
    rowEnd = n - 1,
    colStart = 0,
    colEnd = n - 1;
  let curr = 0;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      res[rowStart][col] = ++curr;
    }
    rowStart++;
    for (let row = rowStart; row <= rowEnd; row++) {
      res[row][colEnd] = ++curr;
    }
    colEnd--;
    for (let col = colEnd; col >= colStart; col--) {
      res[rowEnd][col] = ++curr;
    }
    rowEnd--;
    for (let row = rowEnd; row >= rowStart; row--) {
      res[row][colStart] = ++curr;
    }
    colStart++;
  }
  return res;
}

module.exports = matrix;
