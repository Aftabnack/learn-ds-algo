// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let currStep = 1;
  while (currStep <= n) {
    let stair = "";
    for (let i = 1; i <= n; i++) {
      stair += i > currStep ? " " : "#";
    }
    currStep++;
    console.log(stair);
  }
}

function steps2(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    return steps2(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  steps2(n, row, stair + add);
}

module.exports = steps2;
