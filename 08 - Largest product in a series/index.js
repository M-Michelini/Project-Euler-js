const series = require('./series');

function largestProductinSeries(n) {
  let largestProd = 0;
  for(let i=0;i<=series.length-n;i++){
    const prod = series.slice(i,i+n).reduce((acc,n)=>acc*n)
    if(prod>largestProd){
      largestProd = prod;
    }
  }return largestProd;
}

console.log(largestProductinSeries(13))
