const data = require('./tree');

function maximumPathSumI(triangle) {
  for(let i = triangle.length-1;i>0;i--){
    for(let j = 0;j<i;j++){
      triangle[i-1][j] += Math.max(triangle[i][j],triangle[i][j+1]);
    }
    triangle.pop();
  }
  return triangle[0][0];
}

console.log(maximumPathSumI(data))
