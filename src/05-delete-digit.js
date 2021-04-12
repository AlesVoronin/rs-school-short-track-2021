/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const temp = String(n).split('');
  let min = Infinity;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] < min) {
      min = Number(temp[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (Number(temp[i]) == min) {
      temp.splice(i, 1);
      break;
    }
  }
  // eslint-disable-next-line no-param-reassign
  n = Number(temp.join(''));
  return n;
}

module.exports = deleteDigit;
