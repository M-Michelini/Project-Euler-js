/*
  We want the union of 'the set of multiples of 3' and 'the set of multiples of 5' below n=1000.
  If we add sumMultiplesOfXunderY for x = 3 and x = 5 that will count every multiple of (3*5=)15 twice.
  so subtract sumMultiplesOfXunderY for x=15 and we now have the sum of all the multiples of 3 or 5 below n=1000
*/
const multiplesOf3and5 = n => sumMultiplesOfXunderY(3,n) + sumMultiplesOfXunderY(5,n) - sumMultiplesOfXunderY(15,n);

/*
  This function returns the sum of all the multples of x, up to but not including y.
   Eg. sumMultiplesOfXunderY(2,10) => 2+4+6+8 = 20;
*/
const sumMultiplesOfXunderY = (x,y) =>(
  (y%x!==0 ? new Array( Math.floor(y/x) ) : new Array( y/x - 1 ))
    .fill()
    .map((_,i)=>(i+1)*x) // returns a list of multiples of x under y
    .reduce((acc,v)=>acc+v); // adds all the elements in the list
)

console.log(multiplesOf3and5(1000));
