const getRoots = (num, upto=10) => Array.from({length:upto},(_,i)=>(num**(1/(i+2)))%1===0?i+2:false).filter(v=>v)

const distinctPowers = n => {
  const distinctPowersDict = {};
  let sum = 0;
  for(let base=2;base<=n;base++){
    const repeats = getRoots(base).reduce((acc,rootIndex)=>{
      for(let test=2;test<=n;test++){
        if(!acc.includes(test)){
          for(let subI=rootIndex-1;subI>0;subI--){
            if(test*rootIndex/subI<=n && (test*rootIndex/subI)%1===0){
              console.log(test, subI)
              subI=0;
              acc.push(test);
            }
          }
        }
      }
      return acc;
    },[]);
    distinctPowersDict[base] = n - 1 - repeats.length;
    sum += n - 1 - repeats.length;
  }
  console.log(distinctPowersDict)
  return sum;
}

console.log(distinctPowers(100));
