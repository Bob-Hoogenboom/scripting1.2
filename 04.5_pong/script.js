// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let score = {};
score.left = 0
score.right = 0

// make left paddle object named: padLeft
let padLeft = {};

padLeft.width = 20;
padLeft.height = 200;
padLeft.X = 20
padLeft.Y = canvas.height/2
padLeft.speedY = 50

padLeft.update = function(){
  padLeft.Y += padLeft.speedY;
}

//make right paddle object named: padRight
let padRight = {};

padRight.width = 20;
padRight.height = 200;
padRight.X = canvas.width-35
padRight.Y = canvas.height/2
padRight.speedY = 50

padRight.update = function(){
  padRight.Y += padRight.speedY;
}

//make ball object named: ball
let ball = {};

ball.X = 300;
ball.Y = 350;
ball.speedX = 4;
ball.speedY = 5;
ball.width = 20;
ball.height = 20;

ball.update = function(){
  ball.X += ball.speedX;
  ball.Y += ball.speedY;

//bottom of the screen: bounce
  if(ball.Y > canvas.height){
    ball.speedY = -ball.speedY
  }
//top of the screen: bounce
  else if(ball.Y < 0 ){
    ball.speedY = -ball.speedY
  }
//right of the screen: teleport to the middle of the field
  else if(ball.X > canvas.width){
    ball.X = canvas.width/2;
  }
//left of the screen: teleport to middle of the screen
  else if(ball.X <0){
    ball.X = canvas.width/2;
  }
//ball/padright collision
  else if (ball.X < padRight.X + padRight.width &&
   ball.X + ball.width > padRight.X &&
   ball.Y < padRight.Y + padRight.height &&
   ball.Y + ball.height > padRight.Y) {
     console.log("Right paddle hit");
     ball.speedX = -ball.speedX;
   }
//ball/padLeft collision
   else if (ball.X < padLeft.X + padLeft.width &&
    ball.X + ball.width > padLeft.X &&
    ball.Y < padLeft.Y + padLeft.height &&
    ball.Y + ball.height > padLeft.Y) {
      console.log("Left paddle hit");
      ball.speedX = -ball.speedX;
    }
}
//show the ball
ball.draw = function(){
  context.fillRect(ball.X,ball.Y,ball.width,ball.height)
}
//show left paddle
padLeft.draw = function(){
  context.fillRect(padLeft.X,padLeft.Y,padLeft.width,padLeft.height)
}

//show right paddle
padRight.draw = function(){
  context.fillRect(padRight.X,padRight.Y,padRight.width,padRight.height)
}
window.addEventListener('keydown', keyDownHandler);

function keyDownHandler(event){
  if(event.key == "s"){
    padLeft.Y += 12;
  }
  if(event.key == "w"){
    padLeft.Y += -12;
  }

  if(event.key == "ArrowDown"){
    padRight.Y += 12;
  }
  if(event.key == "ArrowUp"){
    padRight.Y += -12;
  }
}


function anime(){
  context.clearRect(0,0,canvas.width,canvas.height)
  ball.update()
  ball.draw()
  padLeft.draw()
  padRight.draw()
  context.font = "30px Arial";
  context.fillText(score.left+":"+score.right, canvas.width/2, 50);
}

setInterval(anime,12)
