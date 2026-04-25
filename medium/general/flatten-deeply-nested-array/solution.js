/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let res = [];

  function dfs(curr, depth) {
    for (let val of curr) {
      if (Array.isArray(val) && depth < n) {
        dfs(val, depth + 1);
      } else {
        res.push(val);
      }
    }
  }

  dfs(arr, 0);
  return res;
};
