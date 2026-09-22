/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 150,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  },
  agitation: 180,
  speed:1
};

let skyColour = {
    r: 160,
    g: 180,
    b: 200
};

let CAW;

let bird = {
    x: 200,
    y: 200,
    constrainX: 180,
    constrainY: 180,
    speed: 1,
    size: 100
}
let maxX;
let maxY;

/**
 * Create the canvas
 */
async function setup() {
  createCanvas(400, 400);
  CAW = await loadSound ('./assets/sounds/CARSW.mp3');

  bird.x = random(50, 350);
  bird.y = random(50, 350);
  bird.speed = random(1, 5);

  angleMode(DEGREES);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(skyColour.r, skyColour.g, skyColour.b);

  mrFurious.x = mrFurious.x + random(-mrFurious.speed, mrFurious.speed);
  maxX= constrain(mrFurious.x, mrFurious.agitation , width- mrFurious.agitation);

  mrFurious.y = mrFurious.y + random(-mrFurious.speed, mrFurious.speed);
  maxY= constrain(mrFurious.y, mrFurious.agitation, height- mrFurious.agitation);

  mrFurious.agitation = mrFurious.agitation - 0.1;
  mrFurious.speed = mrFurious.speed + 0.01;

  sirFurious(maxX, maxY);

  let keepGreen = constrain(mrFurious.fill.g, 50, 255);
  mrFurious.fill.g = keepGreen;

  push();
  let angle =frameCount * 1;
  rotate(angle);
  Bird();
  translate(width/2, height/2);
  pop();

  bird.x = bird.x + random(-1,1) * bird.x + random(-5,10);
  bird.y = bird.y + random(-1,1) * bird.speed;

  bird.constrainX = constrain(bird.x, 50, width-50);
  bird.constrainY = constrain(bird.y, 50, height-50);

}

function mouseMoved(){
    mrFurious.fill.g--;

    mrFurious.fill.b = mrFurious.fill.b - 0.5;
}

function Bird(){
  //bird wings
  fill(40)
  noStroke();
  triangle(bird.x+35, bird.y-35, bird.x+90, bird.y-80, bird.x+35, bird.y+20)
  triangle(bird.x+40, bird.y-30, bird.x+120, bird.y-30, bird.x+45, bird.y+10)
  triangle(bird.x+35, bird.y-30, bird.x+90, bird.y+30, bird.x+35, bird.y+20)

  //bird body and eyes
  noStroke();
  fill(255)
  circle(bird.x-30, bird.y-20, 50)
  fill(40)
  circle(bird.x-40,bird.y-35,20)
  fill(40)
  circle (bird.x, bird.y, bird.size)
  fill(255)
  circle(bird.x+10, bird.y-20, 50)
  fill(40)
  circle(bird.x+20, bird.y-30, 25)

  //bird beak
  triangle(bird.x-20, bird.y-20, bird.x-100, bird.y-50, bird.x-30,bird.y+20)
  triangle(bird.x-30, bird.y-20, bird.x-90, bird.y+50, bird.x-30, bird.y+30)

  //bird legs
  stroke(40)
  strokeWeight(5)
  line(bird.x+10,bird.y+20,bird.x-50, bird.y+70)
  line(bird.x-50, bird.y+70, bird.x-60, bird.y+60)
  line(bird.x-50, bird.y+70, bird.x-60, bird.y+75)
  line(bird.x-50, bird.y+70, bird.x-50, bird.y+80)
  line(bird.x+20,bird.y+20,bird.x+40, bird.y+70)
  line(bird.x+40, bird.y+70, bird.x+50, bird.y+60)
  line(bird.x+40, bird.y+70, bird.x+50, bird.y+75)
  line(bird.x+40, bird.y+70, bird.x+40, bird.y+80) 

}

function sirFurious(x,y){
      // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(x, y, mrFurious.size);
  fill(255);
  circle(x - 50, y, mrFurious.size - 100);
  circle(x + 50, y, mrFurious.size - 100);
  fill(0);
  circle(x - 50, y, mrFurious.size - 125);
  circle(x + 50, y, mrFurious.size - 125);
  pop();

  skyColour.r = skyColour.r - 0.01;
  skyColour.g = skyColour.g - 0.01;
  skyColour.b = skyColour.b - 0.01;
}

function mousePressed(){
    CAW.play();
}