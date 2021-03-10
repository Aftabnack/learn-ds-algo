// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap(str) {
  const cMap = {};
  for (let char of str) {
    if (/[A-Za-z]/.test(char)) {
      const lowerChar = char.toLowerCase();
      cMap[lowerChar] = cMap[lowerChar] + 1 || 1;
    }
  }
  return cMap;
}

function anagrams(stringA, stringB) {
  const aMap = charMap(stringA);
  const bMap = charMap(stringB);
  const aKeys = Object.keys(aMap);
  const bKeys = Object.keys(bMap);
  return (
    aKeys.length === bKeys.length &&
    aKeys.every((key) => aMap[key] === bMap[key])
  );
}

function anagrams1(stringA, stringB) {
  const strA = stringA.toLowerCase().replace(/[^a-z]/g, "");
  const strB = stringB.toLowerCase().replace(/[^a-z]/g, "");
  return strA.split("").sort().join("") === strB.split("").sort().join("");
}

module.exports = anagrams;
