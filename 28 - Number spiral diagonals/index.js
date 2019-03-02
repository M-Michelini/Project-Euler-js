/*
  by looking at the spiral, you can see that moving diagonally and upwards gives you n^2
  furthermore, you can see that moving diagonally and downwards gives you n^2 - 6n;

  from this, we can get the formula for the sum of the corners of an n*n spiral;

  f(n) = 4(4n^2 + n + 1) for n>=1 and f(0) = 1;
*/

const sumSpiralCorners = n => n===0 ? 1 : 4*(4*n**2+n+1);

const spiralDiagonals = n => {
  let sum = 0;
  if(n%2===0)n-=1;

  while(n>0){
    console.log(n,sumSpiralCorners(Math.floor(n/2)));
    sum+=sumSpiralCorners(Math.floor(n/2));
    n-=2;
  }return sum;
}

console.log(spiralDiagonals(1001))
