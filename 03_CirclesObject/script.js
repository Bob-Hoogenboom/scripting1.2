// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

  //context.beginPath();
  //context.lineWidth = "5";
  //context.fillStyle = "RGBA(0,255,0,0.5)";
  //context.strokeStyle = "RGBA(255,0,0,0.5)";
  //context.arc(300,400,60,0,Math.PI*2);
  //context.closePath();
  //context.stroke();
  //context.fill();

let circleObject = {};
circleObject.x = 300;
circleObject.y = 300;
circleObject.radius = 50;
circleObject.sAngle = 0;
circleObject.eAngle = Math.PI*2;
circleObject.color = "RGBA(0,255,0,0.5)";

circleObject.draw = function(){
  context.beginPath();
  context.arc(circleObject.x , circleObject.y , circleObject.radius,0,2*Math.PI);
  context.closePath();
  context.stroke();
  context.fillStyle
}

function animate(){
  context.clearRec
  circleObject.x = circleObject.x+2;
  circleObject.draw();
}
