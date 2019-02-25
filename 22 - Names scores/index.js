const names = require('./names')
const sum = (acc,v)=>acc+v;

const getAlphanumericValue = str => str.split('').map(v=>v.charCodeAt(0)-64).reduce(sum);

const namesScores = arr => arr.sort().map((name,i)=>(i+1)*getAlphanumericValue(name)).reduce(sum);

console.log(namesScores(names));
