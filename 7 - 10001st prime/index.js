const PrimeGenerator = require('../_Helpers/PrimeGenerator');

function nthPrime(n){
  let gen = new PrimeGenerator();
  while(gen.primes.length < n){
    gen.generateNextPrime();
  }
  return gen.primes[n-1]
}
console.log(nthPrime(10001));
