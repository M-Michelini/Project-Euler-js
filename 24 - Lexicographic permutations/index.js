/*
  For the sorted list of all lexicographic permutations of str='0123456789'.split('');

  To find the first char (d1) of the nth permutation, see how many times you can
  cycle through the other 9 characters in n permutations.
  eg. d1 = str.splice(Math.floor(n/9!)-1,1); remPerms = n%9!;

  To find the 2nd char, given remPerms from finding d1;
  d2 = str.splice(Math.floor(remPerms/9!),1); remPerms %= 8!

  To find the Nth char, given remPerms from finding all previous chars;
  dn = str.splice(Math.floor(remPerms/((10-n)!))); remPerms %= (10-n);

*/

const factorial = n => Array.from({length:n},(_,i)=>i+1).reduce((acc,v)=>v*acc,1);

function lexicographicPermutations(n) {
  const original = '0123456789'.split('');
  const perm = [];

  let remPerms = n;

  while(original.length>0){
    perm.push(original.splice(Math.floor(remPerms/factorial(original.length-1)),1)[0]);
    remPerms%=factorial(original.length);
  }
  return perm.join('')
}

console.log(lexicographicPermutations(999999));
