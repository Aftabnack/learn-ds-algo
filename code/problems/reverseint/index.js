// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let res = 0;
  let absVal = Math.abs(n);
  while (absVal > 0) {
    res = res * 10 + (absVal % 10);
    absVal = Math.floor(absVal / 10);
  }
  return Math.sign(n) * res;
}

module.exports = reverseInt;
