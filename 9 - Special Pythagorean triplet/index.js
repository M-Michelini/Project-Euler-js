function specialPythagoreanTriplet(sum) {
  for(let n = 1;n<sum;n++){
    for(let m=n+1;m<sum;m++){
      /* Use euclideans theorom to generate Pythag triplets.
      a = m^2 - n^2; b = 2mn; c = m^2 + n^2;
      a+b+c = 2m(m+n); abc = 2mn(m^4 - n^4);*/
      if(2*m*(m+n)===sum){
        return 2*m*n*(m**4 - n**4);
      }
    }
  }
 return false;
}

console.log(specialPythagoreanTriplet(1000));
