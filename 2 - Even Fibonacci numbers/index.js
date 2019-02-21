function fiboEvenSum(n) {
  let term = 2; //even number at 3n+1 for n>=0
  let prev2 = 1;
  let prev1 = 2;
  let evenSum = 2;
  while (term <= n) {
    [prev2, prev1] = [prev1, prev1 + prev2];
    evenSum += (prev1 % 2 === 0) ? prev1 : 0;
    term++;
  }
  return evenSum;
}
console.log(fiboEvenSum(43));
