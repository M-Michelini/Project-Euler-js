/*
  This is equivalent to asking how many unique ways can we order a list of
  length=2*gridSize such that right and down appear the same amount of times.
  This is the same as nCr(2gridSize,gridSize)
*/
const prodFromNtoM = (n, m = 1) => Array(n - m + 1).fill().map((_, i) => i + m).reduce((acc, v) => acc * v);

function latticePaths(gridSize) {
  return prodFromNtoM(gridSize * 2, gridSize + 1) / prodFromNtoM(gridSize);
}
console.log(latticePaths(4));
