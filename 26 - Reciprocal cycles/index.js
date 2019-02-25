//think long division

const reciprocalCycles = n => {
  let max = 1;
  let length = 1;

  for(let i = 2;i<=n;i++){
    const path = [];
    let rem = 10;

    while(rem!=0){
      if(path.includes(rem)){
        const thisLength = path.length - path.indexOf(rem)-1;
        if(length<thisLength){
          length=thisLength;
          max = i;
        }
        rem=0;
      }else{
        if(rem){path.push(rem)}
        rem%=i;
        rem*=10;
      }
    }
  }
  return max;
}

console.log(reciprocalCycles(1000));
