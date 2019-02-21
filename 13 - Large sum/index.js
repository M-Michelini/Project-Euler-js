const numbers = require('./numbers');

function largeSum(arr) {
  let digits = [];
  let num = 0;
  let digit
  for(let i = arr[0].length-1;i>=0;i--){
    for(let j = 0; j < arr.length; j++){
      num += Number(arr[j].substring(i,i+1))
    }
    digit = num%10;
    num-=digit
    num/=10;
    digits.push(digit);
  }
  while(num>0){
    digit = num%10;
    num-=digit
    num/=10;
    digits.push(digit);
  }
  return digits.splice(digits.length-10).reverse().join('');
}

console.log(largeSum(numbers))
