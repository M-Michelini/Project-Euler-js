const bigNum = require('bignumber.js');

const digitFibonacci = n => {
  let prev1 = prev2 = bigNum(1);
  let i = 2;
  while(prev2.toFixed().length<n){
    [prev1,prev2] = [prev2,prev2.plus(prev1)];
    i++;
  }
  return i;
}

console.log(digitFibonacci(1000))
