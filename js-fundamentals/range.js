function range (start, end, step){
  var rangeArray = [];
  if (start <= end && step >= 0){
    for (let i = start; i <= end; i += step){
      rangeArray.push(i);
     
    }
    return rangeArray;
  } else if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
