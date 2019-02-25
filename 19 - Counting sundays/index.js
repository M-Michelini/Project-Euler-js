const months = [31,28,31,30,31,30,31,31,30,31,30,31];

const isLeapYear = year => year%4===0 && (year%100!==0 || year%400===0);
function countingSundays(firstYear, lastYear) {
  let offset  = 1 + (firstYear-1900)*365 + Math.floor((firstYear-1900)/4);

  let firstSunCount = 0
  for(let i = 0; i<12*(lastYear-firstYear+1); i++){
    offset %= 7;
    if(offset===0){
      firstSunCount++;
    }
    if(i%12===1){
      offset+=isLeapYear(Math.floor(i/12)+firstYear) ? 1 : 0;
    }
    offset+=months[i%12];
  }
  return firstSunCount;
}

console.log(countingSundays(1901, 2000));
