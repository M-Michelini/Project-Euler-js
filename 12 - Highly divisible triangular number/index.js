function divisibleTriangleNumber(n) {
  let i = 0;
  let triNumI=0;

  let factors = [];

  while(factors.length<=n){
    factors = [];
    i++;
    triNumI+=i;
    for (let j=1; j<=Math.sqrt(triNumI); j++){
      if (triNumI%j === 0){
        if (triNumI/j == j) factors.push(triNumI);
        else{
          factors.push(j,triNumI/j);
        }
      }
    }
  }
  return triNumI;
}

console.log(divisibleTriangleNumber(500));
