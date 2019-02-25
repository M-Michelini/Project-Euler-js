const carryRemainder = (acc,val,index,arr) => {
  let rem;
  if(arr.length-2 >= index){
    acc.push(val%10);
    arr[index+1]+= Math.floor(val/10);
  }else{
    while(val){
      acc.push(val%10);
      val = Math.floor(val/10);
    }
  }
  return acc;
}

const largeFactorialSum = n =>{
  let rem = 0;

  let factorial = [1];
  for(let i=2;i<=n;i++){
    factorial = factorial
                .map(v=>v*i)
                .reduce(carryRemainder,[])
  }
  return factorial.reduce((acc,val)=>acc+val);
}

console.log(largeFactorialSum(100))
