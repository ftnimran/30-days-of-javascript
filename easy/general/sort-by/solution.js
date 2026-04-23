/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  function merge(left, right) {
    let res = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (fn(left[i]) <= fn(right[j])) {
        res.push(left[i++]);
      } else {
        res.push(right[j++]);
      }
    }

    return res.concat(left.slice(i)).concat(right.slice(j));
  }

  return mergeSort(arr);
};
