/ Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope
Note - Variable initializations are not hoisted, only variable declarations are hoisted: