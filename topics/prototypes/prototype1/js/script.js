/**
 * The weird one
 * by angy
 * 
 * theres a grid, and parts of an image appears in squares that are hovered
 */

"use strict";

let ehe;
let meow;

let transparencyyy = 255;
let size = 150;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
describe("loads images and sound, and creates canvas")

async function setup() {
    ehe = await loadImage('./assets/images/Illustration12(nerdy).png');
    meow = await loadSound('./assets/sounds/meeow.mp3');
    createCanvas(900, 900);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
decribe("loads image, create a griod, and when mouse is hovered over a square, the image appears in that square")
function draw() {
    background(100);
    image(ehe, 0, 0, 900, 900);

    for (let x=0;x<width;x+=size){
    for (let y=0;y<height;y+=size){
        if (mouseX >= x && mouseX <= x + size && mouseY >= y && mouseY < y + size ){
            transparencyyy = 0;
        } else{
        transparencyyy = 255;
        }
        fill(0, transparencyyy);
        rect(x,y,size,size); 
    }
  }
}

describe("when mouse is pressed, the meow sound plays")
function mousePressed() {
  meow.play();
}
