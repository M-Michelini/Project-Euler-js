//Find the sum of all the numbers that can be written as the sum of n powers of their digits

const isListOfZeros = (arr,upto=arr.length) => arr.reduce((acc,val,i)=>upto<i ? acc : acc&&val===0,true)

Array.prototype.isPerm = function(arr){
  const counts = {};
  if(arr.length!==this.length){
    return false;
  }else{
    for(let i=0;i<this.length;i++){
      if(!counts.hasOwnProperty(this[i])){
        counts[this[i]] = 0;
      }if(!counts.hasOwnProperty(arr[i])){
        counts[arr[i]] = 0;
      }
      counts[arr[i]]++;
      counts[this[i]]--;
    }
    return isListOfZeros(Object.values(counts));
  }
  return true;
}

const getUpperLimit = n => {
  let digits = 1;
  let limit = digits*(9**n);
  while(limit>=10**digits){
    digits++;
    limit = digits*(9**n);
  }
  return limit;
}

const generateCombos = upper => {
  const getPrevCombo = combo =>{
    let prev = [...combo];
    let indexToChange = combo.length-1;
    while(
      indexToChange>0 &&
      prev[indexToChange]===prev[indexToChange-1]
    ){
      prev[indexToChange] = 9;
      indexToChange--;
    }
    prev[indexToChange]--;
    return prev
  }
  let combos = [Array.from({length:upper.toString().length},()=>9)]
  let prev = getPrevCombo(combos[0]);
  while(!isListOfZeros(prev,prev.length-2)){
    combos.unshift(prev);
    prev=getPrevCombo(prev);
  }
  return combos
}

const digitNpowers = n =>{
  let combosToTest = generateCombos(getUpperLimit(n));
  let sum = 0;
  combosToTest.forEach(combo=>{
    let sumOfPowers = combo.reduce((acc,val)=>acc+val**n,0).toString()
    let testPerm = Array(combo.length)
    .fill(0).map((v,i)=>
      i<sumOfPowers.length ?
        Number(sumOfPowers.charAt(i)):v
    )
    if(testPerm.isPerm(combo)){
      sum+=Number(sumOfPowers);
    }
  });
  return sum;
}

digitNpowers(5)
