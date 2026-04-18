/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let n = functions.length;
    let result = new Array(n);
    let completed = 0;

    if (n === 0) return resolve([]);

    for (let i = 0; i < n; i++) {
      Promise.resolve()
        .then(() => functions[i]())
        .then((res) => {
          result[i] = res;
          completed++;

          if (completed === n) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
