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
context.beginPath();
context.fillStyle = "cyan";
context.lineWidth = 3;
context.moveTo(200,100);
context.lineTo(600,200);
context.lineTo(500,400);
context.lineTo(100,300);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "lightGrey";
context.lineWidth = 3;
context.moveTo(100,300);
context.lineTo(500,400);
context.lineTo(500,600);
context.lineTo(100,500);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "grey";
context.lineWidth = 3;
context.moveTo(600,200);
context.lineTo(500,400);
context.lineTo(700,300);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "grey";
context.lineWidth = 3;
context.moveTo(500,400);
context.lineTo(700,300);
context.lineTo(700,500);
context.lineTo(500,600);
context.closePath();
context.stroke();
context.fill();

//deur
context.beginPath();
context.fillStyle = "black";
context.lineWidth = 3;
context.moveTo(580,560);
context.lineTo(580,450);
context.lineTo(620,430);
context.lineTo(620,540);
context.closePath();
context.stroke();
context.fill();
