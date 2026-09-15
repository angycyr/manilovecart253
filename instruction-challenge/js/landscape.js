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
let CAW

async function setup() {
    createCanvas(900, 900);
    CAW = await loadSound ('./assets/sounds/CARSW.mp3');
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
// MOUNTAINS WITH TRIANGLES AND 1 QUAD
    push()
fill(90,50,140)
    triangle(0, 600, 300, 400, 500, 500)
    triangle(450, 450, 750, 300, 950, 500)
    triangle(-300, 700, 90, 200, 300, 500)
    quad(700, 450, 450, 900, 900, 900, 900, 475);
pop()

    if(mouseIsPressed){
          bird();
    }
}
function mousePressed(){
    CAW.play();
}

function bird (){
    //head
    push()
    fill(20,30,70)
    circle(width/2, height/2, 750)
    pop()
    //anger
    push()
    fill(5,10,30, 130)
    ellipse(360,340,250,130)
    pop()
    // eyes
    push()
    fill(0)
    circle(190,370,25)
    circle(560,370,25)

    //beak
    triangle(250, 350, 480, 350, 300, 450)

    //eyebrows
    triangle(160, 330, 200, 300, 230, 360)
    triangle(600, 340, 580, 310, 530, 360)
    pop()

    //legs L
    push()
    stroke(0);
    strokeWeight(25)
    line(550,700,540,850)
    line(500,825,540,800)
    line(580,825,540,800)

    //legs R
    line(280,725,170,850)
    line(200,810,170,810)
    line(200,810,210,855)

    pop()

}