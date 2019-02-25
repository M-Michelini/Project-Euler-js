const sumProperDivisors = n => {
  const divisorsToSum = [1];
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

function sumAmicableNum(n) {
  const amicableDict = {};
  let amicableSum = 0;
  for(let i = 2;i<n;i++){
    const factorSumi = sumProperDivisors(i);
    if(factorSumi > i && !amicableDict[factorSumi] && i===sumProperDivisors(factorSumi)){
      amicableDict[i] = factorSumi;
      amicableDict[factorSumi] = i;
      amicableSum += i + (factorSumi<n ? factorSumi:0);
    }
  }
  return amicableSum;
}

console.log(sumAmicableNum(10000));
