const coinSums = n => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  const solutionsUpToN = Array.from({length:n + 1},(_,i)=>i===0?1:0);
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= n; j++) {
      solutionsUpToN[j]+= solutionsUpToN[j - coins[i]];
    }
  }
  return solutionsUpToN[n];
}

console.log(coinSums(200))
