const grid = require('./grid.json');

function largestGridProduct(grid, prodLength=4){
  let largestProd = 0;
  for(let row=0;row<=grid.length-prodLength;row++){
    for(let col=0;col<=grid.length-prodLength;col++){
      const horiz = grid[row][col]*grid[row+1][col]*grid[row+2][col]*grid[row+3][col];
      const vert = grid[row][col]*grid[row][col+1]*grid[row][col+2]*grid[row][col+3];
      const diag1 = grid[row][col]*grid[row+1][col+1]*grid[row+2][col+2]*grid[row+3][col+3];
      const diag2 = grid[row+3][col]*grid[row+2][col+1]*grid[row+1][col+2]*grid[row][col+3];
      largestProd = Math.max(largestProd,horiz,vert,diag1,diag2);
    }
  }return largestProd;
}

console.log(largestGridProduct(grid))
