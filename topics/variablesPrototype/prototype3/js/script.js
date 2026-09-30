/**
 * colours colours
 * Angy
 * 
 * circle bounces around and changes colours when it touches a wall
 */

"use strict";
// creates circle parameters
let circlee ={
    x:0,
    y:0,
    size:100,
    R:undefined,
    G:undefined,
    B:undefined,
    SDX: undefined,
    SDY: undefined,
}

/**
 * creates canvas, sets circles undefined variables to random. and sets the background to grey
*/
function setup() {
    createCanvas(400,550);

  circlee.x = width / 2;
  circlee.y = height / 2;

    circlee.R = random(255);
    circlee.G = random(255);
    circlee.B = random(255);
    circlee.SDX = random(-6,6);
    circlee.SDY = random(-6,6);

    background ("#bbbbbb");
}


/**
 * creates circle movement and allows it to change colours when it bounces
*/
function draw() {
    background("#bbbbbb");
    push()
    fill("#444444")
    rect (circlee.size/2, circlee.size/2, 400 - circlee.size, 550 - circlee.size)
    pop()
    circlee.x = circlee.x + circlee.SDX;
    circlee.y = circlee.y + circlee.SDY;

  if (circlee.x <= circlee.size / 2 + 50 || circlee.x >= width - circlee.size / 2 - 50) {
    circlee.SDX = - circlee.SDX;
    circlee.R = random(255);
    circlee.G = random(255);
    circlee.B = random(255);
  }   
    if (circlee.y >= height - circlee.size / 2 - 50 || circlee.y <= circlee.size / 2 + 50) {
    circlee.SDY = -circlee.SDY;
    circlee.R = random(255);
    circlee.G = random(255);
    circlee.B = random(255);
  }

    noStroke();
    fill(circlee.R, circlee.G, circlee.B);
    ellipse(circlee.x, circlee.y, circlee.size);
}