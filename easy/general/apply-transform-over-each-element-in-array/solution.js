/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const len = arr.length;
  const returnedArray = new Array(len);

  for (let i = 0; i < len; ++i) {
    returnedArray[i] = fn(arr[i], i);
  }

  return returnedArray;
};
