function ShowResults(){
  var sides=[]
  sides.push(document.getElementById('hypotenuse').value);
  sides.push(document.getElementById('opposite').value);
  sides.push(document.getElementById('adjacent').value);

  var hypotenuse = parseInt(sides[0]);
  var opposite = parseInt(sides[1]);
  var adjacent = parseInt(sides[2]);

if((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (opposite + adjacent) <= hypotenuse) {
  output.innerHTML=("Not a Definite Triangle")
}

else if(hypotenuse === opposite && hypotenuse === adjacent && opposite === adjacent){
output.innerHTML=("Equilateral Triangle")
}

else if(hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent){
output.innerHTML=("Isoceles Triangle")
}

else if(hypotenuse!==opposite && hypotenuse!==adjacent && opposite!==adjacent){
alert("Scalene");
}
}
