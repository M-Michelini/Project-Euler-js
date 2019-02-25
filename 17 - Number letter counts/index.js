const numberLetterLengths = {0:0,1:3,2:3,3:5,4:4,5:4,6:3,7:5,8:5,9:4,10:3}

for(let i = 11;i < 100;i++){
  switch(Math.floor(i/10)){
    case 1:
      numberLetterLengths[i] = numberLetterLengths[i%10] + 'teen'.length;
      if([1,2,3,5,8].includes(i%10)){
        numberLetterLengths[i] -= 1;
      }
      break;
    case 2:
    case 3:
    case 8:
    case 9:
      numberLetterLengths[i] = 6 + numberLetterLengths[i%10]
      break;
    case 4:
    case 5:
    case 6:
      numberLetterLengths[i] = 5 + numberLetterLengths[i%10]
      break;
    case 7:
      numberLetterLengths[i] = 7 + numberLetterLengths[i%10]
      break;
  }
}

const tripletTypes = ['','thousand','million','billion','trillion','quadrilion']
function getTripletWordLength(n){
  if(n<100){
    return numberLetterLengths[n];
  }else{
    return numberLetterLengths[Math.floor(n/100)] + 'hundred'.length + (n%100===0 ? 0 : numberLetterLengths[n%100] + 'and'.length);
  }
}

function getNumberWordLength(n) {
  // Good luck!
  n = new Array(Math.floor((n.toString().length-1)/3)+1).fill().map((_,i)=>n.toString().substring(n.toString().length-i*3, n.toString().length-i*3-3));

  let length = 0;
  n.forEach((triplet,i)=>{
    length += tripletTypes[i].length + getTripletWordLength(Number(triplet));
  })

  return length;
}

function numberLetterCounts(limit){
  let count = 0;
  for(let i =1; i<=limit;i++){
    count+=getNumberWordLength(i);
  }
  return count;
}

console.log(numberLetterCounts(1000));
