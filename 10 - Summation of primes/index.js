const PrimeGenerator = require('../_Helpers/PrimeGenerator');


function primeSummation(n) {
  const gen = new PrimeGenerator();
  gen.generateUpTo(n-1);
  return gen.primes.reduce((acc,n)=>acc+n);
}
const t1 = Date.now();

console.log(primeSummation(2000000));
const t2 = Date.now()

console.log(t2-t1)
