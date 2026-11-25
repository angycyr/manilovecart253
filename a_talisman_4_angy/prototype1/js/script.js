/**
 * An Attempt in Warding of Illness
 * Angy
 * 
 * In this pro- 
 */

"use strict";

let ink = {
    x: 0,
    y: 0,
    px: 0,
    py: 0,
    size: 20,
    color: '#ca0505',
}

/**
 * create a canvas and draw a parchment
*/
function setup() {
    createCanvas(720, 1280);
    rectMode(CENTER);

    background('#85ccc6');
    drawParchment();
}


/**
 * nothing so far!
*/
function draw() {
    inkPos();
}


// makeds the parchment
function drawParchment(){
    push();
    fill('#f0df80');
    stroke('#b9956b');
    strokeWeight(4);
    rect(width/2, height/2, 600, 1000);
    pop();
}

function mouseDragged() {
  if (mouseButton.left) {
   drawInkDuo();
  } else if (mmouseButton.right) {
    drawInkSolo();
  }
}


// connects the mouse coords to the ink coords
function inkPos() {
    ink.x = mouseX;
    ink.y = mouseY;
    ink.px = pmouseX;
    ink.py = pmouseY;
}

function drawInkSolo(){
    // only draws within the talisman (include previous position)
    if (ink.x > width/2 - 300 && ink.x < width/2 + 300 && ink.y > height/2 - 500 && ink.y < height/2 + 500) {
        if (ink.px > width/2 - 300 && ink.px < width/2 + 300 && ink.py > height/2 - 500 && ink.py < height/2 + 500) {   
            stroke(ink.color);
            strokeWeight(ink.size)
            line(ink.x, ink.y, ink.px, ink.py);
        }
    }
    stroke(ink.color);
    strokeWeight(ink.size);
    // circle(ink.x, ink.y, ink.size);
    // hmm not continuous enough
}

function drawInkDuo(){
    // only draws within the talisman (include previous position)
        if (ink.x > width/2 - 300 && ink.x < width/2 + 300 && ink.y > height/2 - 500 && ink.y < height/2 + 500) {
        if (ink.px > width/2 - 300 && ink.px < width/2 + 300 && ink.py > height/2 - 500 && ink.py < height/2 + 500) {   
            stroke(ink.color);
            strokeWeight(ink.size)
            // regular lines
            line(ink.x, ink.y, ink.px, ink.py);
            // inverted line on the y axis
            line(width - ink.x, ink.y, width -  ink.px, ink.py);

        }
    }
}