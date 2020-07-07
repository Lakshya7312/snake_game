var canvas;

var snake, food;

var grid = 20;
function setup() {
  canvas = createCanvas(600, 600);
  frameRate(8);

  snake = new Snake();

  pickLoc(); 
}

function pickLoc() {
  var cols = floor(width/grid);
  var rows = floor(height/grid);
  
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(grid);
}

function draw() {
  background(36,37,32);  
   
  snake.die();
  snake.update();
  snake.show();

  if(snake.eat(food)) {
    pickLoc();
  }

  fill(245, 145, 26);
  rect(food.x, food.y, grid, grid);

  text("Your snake will reset if you touch the edges or touch yourself", 140, 18);
  text("Refresh the page to play again", 210, 35);
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    snake.dir(0, -1);
  } else if(keyCode === DOWN_ARROW){
    snake.dir(0, 1);
  } else if(keyCode === RIGHT_ARROW){
    snake.dir(1, 0);
  } else if(keyCode === LEFT_ARROW){
    snake.dir(-1, 0);
  }
}

