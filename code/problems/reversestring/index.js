// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let res = "";
//   for (let i = 1; i <= str.length; i++) {
//     res += str[str.length - i];
//   }
//   return res;
// }

function reverse(str) {
  let res = "";
  for (let char of str) {
    res = char + res;
  }
  return res;
}

module.exports = reverse;
