const sumProperDivisors = n => {
  const divisorsToSum = [n<=1 ?0:1];
  const upper = Math.sqrt(n);
  if(upper%1===0){
    divisorsToSum.push(upper)
  }
  for(let i = 2;i<Math.sqrt(n);i++){
    if(n%i===0){
      divisorsToSum.push(i,n/i);
    }
  }
  return divisorsToSum.reduce((acc,val)=>acc+val)
}

const sumNaturalNumbers = n => n*(n+1)/2;

// find sum of all numbers which CAN be written as a sum of abundant numbers,
const sumOfNonAbundantNumbers = n => {
  const abundants = [];
  const added = {}
  let sum = 0;
  for(let i=12;i<=n-12;i++){
    if(sumProperDivisors(i) > i){
      abundants.push(i);
      for(let j = 0;abundants[j]+i<=n;j++){
        if(!added[abundants[j]+i]){
          added[abundants[j]+i] = true;
          sum+=abundants[j]+i;
        }
      }
    }
  }
  return sumNaturalNumbers(n)-sum
}
let t1 = Date.now();
console.log(sumOfNonAbundantNumbers(28123))
console.log(Date.now() - t1)
