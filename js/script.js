 function ShowResults(){
   var hypotenuse = parseFloat(prompt("Feed side one"));
   var opposite = parseFloat(prompt("Feed side Two"));
   var adjacent = parseFloat(prompt("Feed side Three"));
 }

 if(hypotenuse === opposite && hypotenuse === adjacent && opposite === adjacent){
alert("Equilateral");
}
else if(hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent){
alert("Isosceles");
}
else if((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (opposite + adjacent) <= hypotenuse) {
alert("Not a definite triangle");
}
else{
alert("Scalene");
}
