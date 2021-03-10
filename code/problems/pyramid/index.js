// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let level = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        if (j === 0) {
          level += "#";
        } else {
          level = `#${level}#`;
        }
      } else {
        level = ` ${level} `;
      }
    }
    console.log(level);
  }
}

function pyramid2(n, row = 0, level = "") {
  if (n === row) {
    return;
  }
  const expectedLength = 2 * n - 1;
  if (expectedLength === level.length) {
    console.log(level);
    return pyramid2(n, row + 1);
  }
  let updated;
  if (level === "") {
    updated = "#";
  } else {
    const add = Math.floor(level.length / 2) + 1 <= row ? "#" : " ";
    updated = add + level + add;
  }
  pyramid2(n, row, updated);
}

module.exports = pyramid2;
