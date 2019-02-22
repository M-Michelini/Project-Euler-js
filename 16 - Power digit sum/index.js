function powerDigitSum(exponent) {
  // Good luck!
  let digits = [2];

  for(let i = 2;i<=exponent;i++){
    let rem = 0;
    digits.forEach((v,i)=>{
      digits[i] = 2*v + rem;
      rem = Math.floor(digits[i]/10);
      digits[i] %= 10;
    })
    while(rem){
      digits.push(rem%10)
      rem = Math.floor(digits[i]/10);
    }
  }
  return digits.reduce((acc,n)=>acc+n);
}

console.log(powerDigitSum(1000));
