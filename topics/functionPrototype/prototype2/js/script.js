/**
 * uncover colours
 * angy
 * 
 * discover different foliage colours and press shift to drag it along with you
 */

"use strict";

let currentColour;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

// creates a big canvas and sets the colour node to HSB
function setup() {
    createCanvas(windowWidth,windowHeight)
    colorMode(HSB, 360, 100, 100)
}



// sets background to white and gives it a bit recovers it with white a little bit eaach tick
function draw() {
    background(255,0.05)

    // console.log(
    //     mouseX,mouseY,
    //     pmouseX,pmouseY
    // )

// birth of a flower
    let flower = createFlower()
    drawFlower(flower)

}
// creates flower and controls its parameters
function createFlower(){
    let speed = dist(pmouseX, pmouseY, mouseX, mouseY)
//  sets the colour of the flower to something different depending on mouse location and moucement
    if (!keyIsDown(SHIFT) || currentColour === undefined) {
        currentColour = {
            hue: map(mouseX, 0, width, 0, 360),
            saturation: map(mouseY, 0, height, 55, 100),
            brightness: constrain(map(speed, 0, 20, 60, 100), 60, 100),
        }
    }
// if shift is down, retain the same colour.
    return {
        x: mouseX,
        y: mouseY,
        size: random(0.1,2),
        colour: currentColour
    }
}

// draws flower 
function drawFlower(flower){
    push()
    translate(flower.x,flower.y)
    scale(flower.size)
    noStroke();
    // fill('#ddb3ca')
    fill(
        flower.colour.hue,
        flower.colour.saturation,
        flower.colour.brightness
    )

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