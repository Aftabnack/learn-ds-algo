// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  if (str === "") {
    return str;
  }
  const strMap = {};
  for (let char of str) {
    strMap[char] = strMap[char] + 1 || 1;
  }
  let max = { val: 0, char: undefined };
  for (let entry in strMap) {
    if (strMap[entry] > max.val) {
      max.val = strMap[entry];
      max.char = entry;
    }
  }
  return max.char;
}

module.exports = maxChar;
