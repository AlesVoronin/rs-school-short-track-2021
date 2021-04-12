/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    // eslint-disable-next-line no-mixed-operators
    if ((sum + temp % 10) < 10) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    } else break;
  }
  return sum;
}

module.exports = getSumOfDigits;
