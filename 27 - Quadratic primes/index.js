const PrimeGenerator = require('../_Helpers/PrimeGenerator')

/*
  Find the product of the coefficients, a and b, for the quadratic expression (n^2+an+b)
  that produces the maximum number of primes for consecutive values of n,
  starting with n=0.
*/

/*
  by looking at n=0, we know that b must prime to satisfy the properties for n=0;
  by looking at n=1, we know that 1 + a + b must be prime for n=1;
*/

const quadraticPrimes = range => {
  //generate primes up to range
  const gen = new PrimeGenerator();
  gen.generateUpTo(3*range);
  let maxN = 0;
  let output = 0

  for(let i=0;gen.primes[i]<=range;i++){
    const b = gen.primes[i];
    const possibleAs = gen.primes.map(val=>val-b-1);
    for(let j=0;possibleAs[j]<=range;j++){
      const a = possibleAs[j];
      let trigger = true;
      let n = 0;
      while(trigger){
        const toTest = n**2 + a*n + b;
        if(!gen.primes.includes(toTest)){
          trigger = false;
        }else{
          n++;
        }
      }
      if(maxN<n){
        maxN=n;
        output=a*b
      }
    }
  }
  return output;
}

console.log(quadraticPrimes(1000));
