const PrimeGenerator = require('../_Helpers/PrimeGenerator');

const largestPrimeFactor = n => {
  const factors = new PrimeGenerator().getPrimeFactors(n);
  return factors[factors.length - 1];
};

console.log(largestPrimeFactor(600851475143))
