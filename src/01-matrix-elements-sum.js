/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let sum = 0;
  const n = matrix.length;
  const m = matrix[0].length;
  const temp = new Array(m);
  for (let i = 0; i < temp.length; i++) {
    temp[i] = new Array(matrix.length);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      temp[i][j] = matrix[j][i];
    }
  }

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[0].length; j++) {
      // eslint-disable-next-line eqeqeq
      if (temp[i][j] != 0) {
        sum += temp[i][j];
      } else break;
    }
  }

  return sum;
  // throw new Error('Not implemented');
}

module.exports = getMatrixElementsSum;
