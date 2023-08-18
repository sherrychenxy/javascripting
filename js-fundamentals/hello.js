//different between console.log and retrun

const sayHello = function(name){
  console.log("Hello, " + name);
}
sayHello("xing");

const returnSayhello = function(name){
  return "Hello, " + name;
}
const greeting = returnSayhello("wu");
console.log(greeting);
