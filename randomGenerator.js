function gen (matrix) {
  let row = matrix.length;
  let rowNum = Math.floor(Math.random() * 20) % row;
  return matrix[rowNum];
}
