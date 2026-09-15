/**
 * Title: birds, where do they come from?
 * By Angy, Sydney, and ?konstantinos
 * 
 * Description
 * imagine yourself in a landscape. 
 * you see rolling hills and a setting sun. 
 * suddendly, you hear a CAW CAW CAW CAW CAW CAW. 
 * where did that come from? 
 * who knows

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(900, 900);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(110,120,210)

    for (let size = 800; size > 10; size -= 40){
        circle(width/2, height/2-75,size)
        fill(210,120,90,20)
        noStroke();
    }
push()
fill(90,50,140)
    triangle(0, 600, 300, 400, 500, 500)
    triangle(450, 450, 750, 300, 950, 500)
    triangle(-300, 700, 90, 200, 300, 500)
    quad(700, 450, 450, 900, 900, 900, 900, 475);
pop()
}