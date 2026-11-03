/**
 * GrowaPanda
 * Angy
 * 
 * CLick the screen to grow a panda
 */

"use strict";
// panda parameters
let  panda = {
    x: 200,
    y: 800,
    size: 100,
    height: 100, // i was gonna make it grow oblong, but i couldn't figure out a clean way to scale the other features
    multiplier: 1
}
/**
 * create tallll canvas
*/
function setup() {
    createCanvas(400, 900);
}


/**
 * makes the bg green and summons panda
*/
function draw() {
    background('#63806b');
    makePanda();

}
// recyled panda drawing from last weeks assignment
function makePanda(){
    push()
    //centers panda and allows it to grow
    translate(panda.x, panda.y+50)
    scale (panda.multiplier)
    // ears
    noStroke();
    fill('#000000');
    circle(-40, -80, 60);
    circle(40, -80, 60);
    // head
    fill('#ffffff');
    ellipse(0, -50, panda.size, panda.height);
    // eyes
    fill('#000000');
    circle(-25, -55, 40);
    circle(25, -55, 40);
    // snout
    fill('#ffffff');
    ellipse(0, -30, panda.size - 50);

    
    pop()

}
// inceases multiplier when mouse is clicked
function mousePressed() {
   panda.multiplier += 1;
   
}