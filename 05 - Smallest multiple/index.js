const PrimeGenerator = require('../_Helpers/PrimeGenerator');

const union = (list1,list2) =>{
  let union = [...list1];
  list2.forEach(val=>list1.includes(val) ?
    list1.splice(list1.findIndex(v=>v===val),1) :
    union.push(val)
  );
  return union;
}
//returns the smallest number that is a multiple of all numbers less than and including n.
const smallestMult = (n) => {
  const gen = new PrimeGenerator();
   return(
     new Array(n-1)
        .fill().map((_,i)=>i+2) //fills array with numbers 2 to n in order.
        .map(gen.getPrimeFactors) // maps numbers to a list of unique prime factors.
        .reduce((acc,next)=>union(acc,next)) // reduces to the union of all the previos lists
        .reduce((acc,n)=>acc*n) //multiplies all the factors to get smallest common multiple
   )
}

console.log(smallestMult(100));
