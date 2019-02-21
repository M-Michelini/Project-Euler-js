//returns a list of n-digit numbers from lowest to highest
const getAllNDigitNumbers = n =>(
  new Array(10 ** n - 10 ** (n - 1))
    .fill()
    .map((_, i) => i + 10 ** (n - 1))
);

// returns a number that is the concatination of number and the number reversed
const constructPalindrome = number => Number(
  [...number.toString().split(''),...number.toString().split('').reverse()].join('')
);

function largestPalindromeProduct(n) {
  let allDigitNumbers = getAllNDigitNumbers(n).reverse();
  let palInt = allDigitNumbers[0];// eg. 99 or 999 or 9999

  /*We can now construct every palindrome of length 2n in decending order.
  Concatinate palInt with the reverse of palInt to get the largest palindrome,
  To get the next largest, decrease palInt by 1 and repeat the concatination.*/

  let palindrome, testPal;
  while (!palindrome) {
    testPal = constructPalindrome(palInt);
    let i = 0;
    /*divide current palindrome by every element in allDigitNumbers,
    if the result is also in allDigitNumbers, the palindrome has 2 n-digit products*/
    while(!palindrome && i<allDigitNumbers.length){
      if (
        testPal % allDigitNumbers[i] === 0 &&
        allDigitNumbers.includes(testPal/allDigitNumbers[i])
      ) {
        palindrome = testPal;
        i = allDigitNumbers.length;
      }
      i++;
    }
    if (!palindrome) {
      palInt--;
    };
  }
  return palindrome;
}
console.log(largestPalindromeProduct(5));
