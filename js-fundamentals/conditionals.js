const raining = true;
const cold = false;
if(raining){
  console.log("Don't forget your umbrella!");
}
if(cold){
  console.log("Make sure you pick out a scarf!");
}

const weather = false;
if(weather){
  console.log("1");
} else {
  console.log("2");
}

const temperature = 13;
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
// && - logical AND
// || - logical OR
// ! - logical NOT