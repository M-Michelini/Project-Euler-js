function longestCollatzSequence(limit){
  const collatzLengths = {1:1}

  let count = 0;
  let collatz;
  for (let i=2;i<=limit;i++){
    count = 0;
    collatz = i;
    while(!collatzLengths[i]){
      if(collatzLengths.hasOwnProperty(collatz)){
        count+=collatzLengths[collatz];
        collatzLengths[i] = count;
      }else{
        collatz = nextCollatz(collatz);
        count++;
      }
    }
  }
  return keyOfMaxVal(collatzLengths)
}

const keyOfMaxVal = dict => Object.keys(dict).reduce((acc,v)=>dict[v]>dict[acc]?v:acc)

const nextCollatz = v => v%2===0 ? v/2 : 3*v+1;

console.log(longestCollatzSequence(1000000));
