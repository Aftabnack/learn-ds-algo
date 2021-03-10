// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My attempt
function chunk1(array, size) {
  const res = [];
  if (size === 0) {
    return res;
  }
  let localCounter = size;
  let localAr = [];
  array.forEach((el) => {
    localAr.push(el);
    localCounter--;
    if (localCounter === 0) {
      res.push(localAr);
      localCounter = size;
      localAr = [];
    }
  });
  if (localAr.length) {
    res.push(localAr);
  }
  return res;
}

//1st solution
function chunk(array, size) {
  if (size === 0) {
    return [];
  }
  const chunked = [];
  for (let el of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }
  return chunked;
}

//2nd solution
function chunk2(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
