function sumSquareDifference(n) {
  let numbers = new Array(n).fill().map((_, i) => i + 1);
  const sumOfSquares = numbers.reduce((acc, n) => acc + n ** 2);
  const squareOfSum = numbers.reduce((acc, n) => acc + n) ** 2;
  return Math.abs(sumOfSquares - squareOfSum);
}
console.log(sumSquareDifference(100));
