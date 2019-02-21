module.exports = function PrimeGenerator(){
	this.primes = [2];

	this.generateNextPrime = () => {
	  let check = this.primes[this.primes.length-1]+1;
	  while(!this.primes.reduce((acc,prime)=>acc&&check%prime!==0,true)){
	    check++;
	  }
	  this.primes.push(check);
	}

	this.generateUpTo = (n) => {
		//using Sieve of Eratosthenes
		let arr = new Array(n+1).fill(true)
		for(let i = 2;i <= Math.sqrt(n);i++){
			if(arr[i]){
				for(let j = i**2;j<=n;j+=i){
					arr[j] = false;
				}
			}
		}
		this.primes = arr.slice(2).map((v,i)=>v?i+2:false).filter(v=>v)
	}

  this.getPrimeFactors = (n) => {
    let i = 0;
    let factors = [];
    /*
    loop through primes and divide n by the prime and push the prime to factors
    list if possible, once n = 1 the factorisation will be complete. If the index
    becomes too large for the current number of primes, generate another
    */
    while(n>1){
      const prime = this.primes[i];
      if(n%prime===0){
        factors.push(prime);
        n/=prime;
      }else{
        i++;
        if(i>=this.primes.length){
          this.generateNextPrime();
        }
      }
    }return factors;
  }
}
