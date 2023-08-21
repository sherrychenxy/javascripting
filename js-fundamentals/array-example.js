// For Loop Array
//the variable `i` is used to step through each element in the array
var newDonuts = ["jelly donut", "chocolate donut", "glazed donut"];
for (var i = 0; i < newDonuts.length; i++) {
  newDonuts[i] += " hole";
  newDonuts[i] = newDonuts[i].toUpperCase();
}
console.log(newDonuts);
// ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

//forEach()
var secDonuts = ["jelly donut", "chocolate donut", "glazed donut"];
secDonuts.forEach(function(donut){
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
})
//JELLY DONUT HOLE
//CHOCOLATE DONUT HOLE
//GLAZED DONUT HOLE

//map()
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
console.log(improvedDonuts);
//["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

//Arrays in Arrays
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}