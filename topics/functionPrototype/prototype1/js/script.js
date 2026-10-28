/**
 * floger
 * angy
 * 
 * draw flower
 */

"use strict";

let score = 0;

/**
 * create big canvas
 * set background to greem
*/
function setup() {
    createCanvas(windowWidth,windowHeight)
    angleMode(RADIANS)
    // textAlign(CENTER,CENTER)
    rectMode(CENTER)

    background('#939341')

}


/**
 * shows text depending on how many flower user has planted
*/
function draw() {
    // drawFlower(width/2,height/2)

    if (score === 10){
        push()
        fill(0)
        textAlign(CENTER, CENTER)
        textSize(40)
        text('mother nature is upset', width / 2, height / 2 - 100)
    } else if (score === 20){
        text('mother nature is suprised by your efforts', width / 2, height / 2 - 60)
    } else if (score === 30) {
        text('mother nature is somewhat content', width / 2, height / 2 - 20)
    } else if (score === 40) {
        text('mother nature is grinning', width / 2, height / 2 + 20)
    } else if (score === 60) {
        text('mother nature is smilling', width / 2, height / 2 + 60)
    } else if (score === 80) {
        text('mother nature is happy', width / 2, height / 2 + 100)
    }

}
// draws flower
function drawFlower(x,y){
    push()
    translate(x,y)
    noStroke();
    fill('#ddb3ca')

    // im too lazy to do a for loop
    ellipse(0, 35, 25, 90)
    rotate(TAU / 8);
    ellipse(0, 35, 25, 90)
    rotate(TAU / 8);
    ellipse(0, 35, 25, 90)
    rotate(TAU / 8);
    ellipse(0, 35, 25, 90)
    rotate(TAU / 8);
    ellipse(0, 35, 25, 90)
    rotate(TAU / 8);
    ellipse(0, 35, 25, 90)
    rotate(TAU / 8);
    ellipse(0, 35, 25, 90)
    rotate(TAU / 8);
    ellipse(0, 35, 25, 90)
    rotate(TAU / 8);
    pop()

}

// summons flower at mouse coords
function mousePressed(){
    drawFlower(mouseX,mouseY)
    score++
    print(score)

}