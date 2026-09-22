/**
 * The weird one
 * by angy
 * 
 * theres a grid, and parts of an image appears in squares that are hovered
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    ehe = await loadImage('/assets/images/Illustration12(nerdy).png');
    createCanvas(300, 300);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200);
    image(ehe, 0, 0, 300, 300);
}