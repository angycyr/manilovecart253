/**
 * GrowaPanda
 * Angy
 * 
 * CLick the screen to grow a panda
 */

"use strict";

let panda;
let score = 0;

/**
 * create big canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    panda = makePanda();
}


/**
 * makes the bg green and summons panda
*/
function draw() {
    background('#63806b');
    drawPanda(panda);
    movePanda(panda);
    fill('#000000');
    textSize(24);
    text(`Score: ${score}`, 20, 35);
}

function makePanda(){
// panda parameters

    return {
        x: width / 2,
        y: height / 2,
        size: 100,
        speed:{
            x: random([-3, 3]),
            y: random([-3, 3]),
            acceleration: 4
        }
    };
}
// recyled panda drawing from last weeks assignment
function drawPanda(panda){
    push()
    //centers panda and allows it to grow
    translate(panda.x, panda.y)
   
    // ears
    noStroke();
    fill('#000000');
    circle(-40, -80, 60);
    circle(40, -80, 60);
    // head
    fill('#ffffff');
    ellipse(0, -50, panda.size, panda.size);
    // eyes
    fill('#000000');
    circle(-25, -55, 40);
    circle(25, -55, 40);
    // snout
    fill('#ffffff');
    ellipse(0, -30, panda.size - 50);
    
    pop()

}
// moves panda
function movePanda(panda){
    panda.x += panda.speed.x;
    panda.y += panda.speed.y;
// contrains the panda like an animal in a zoo. 
    let wall1 = (panda.x > width - 60);
    let wall2 = (panda.x <60)
    let wall3 = (panda.y <60)
    let wall4 = (panda.y > height);
  
    if (wall1 || wall2 ) {
        panda.speed.x *= -1;
    }
    if (wall3 || wall4) {
        panda.speed.y *= -1;
    }
}

function mousePressed(){
    if (isPointInPanda(mouseX, mouseY, panda)) {
        score++;
    }
}

function isPointInPanda(x, y, panda) {
    const headX = panda.x;
    const headY = panda.y - 50;
    const headRadius = panda.size / 2;
    return ((x - headX) / headRadius) ** 2
        + ((y - headY) / headRadius) ** 2 <= 1;
}