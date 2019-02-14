 // function ShowResults(){
 //   // var hypotenuse = parseFloat(prompt("Enter hypotenuse side"));
 //   // var opposite = parseFloat(prompt("Enter opposite side"));
 //   // var adjacent = parseFloat(prompt("Enter adjacent side"));
 //
function ShowResults(){
  var sides=[]
  sides.push(document.getElementById('hypotenuse').value);
  sides.push(document.getElementById('opposite').value);
  sides.push(document.getElementById('adjacent').value);

  var hypotenuse=sides[0]
  var opposite=sides[1]
  var adjacent=sides[2]


 if(hypotenuse === opposite && hypotenuse === adjacent && opposite === adjacent){
alert("Equilateral");
}
else if(hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent){
alert("Isosceles");
}
else if((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (opposite + adjacent) <= hypotenuse) {
alert("Not a triangle");
}
else if (hypotenuse!==opposite && hypotenuse!==adjacent && opposite!==adjacent){
alert("Scalene");
}
}
