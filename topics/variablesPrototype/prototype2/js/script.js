/**
 * spinning
 * angy
 * 
 * spinning music recordm click the screen to make it spin and play music
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let nerdy;
let shape;
let tunes;

let iCantThinkOfAnyOtherSynOfCircle={
    x: 0,
    y: 0,
    size: 500,
    angle: 0,
    spinning: false
}
async function preload(){
    nerdy = await loadImage('./assets/images/Illustration12(nerdy).png')
    shape = await loadImage('./assets/images/vecteezy_circle_1192290.png')
    tunes = await loadSound('./assets/sounds/CynicalINSTRUMENTALMaster.wav')

}
async function setup() {
    createCanvas(900,900);
    await preload();
    background("#444444")
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    translate(width/2,height/2)

    if(mouseIsPressed){
        iCantThinkOfAnyOtherSynOfCircle.angle += 0.05;
    }

    theRecord();
    push()
    clip(disk)
    rotate(iCantThinkOfAnyOtherSynOfCircle.angle)
    image(nerdy, -iCantThinkOfAnyOtherSynOfCircle.size/2,-iCantThinkOfAnyOtherSynOfCircle.size/2,iCantThinkOfAnyOtherSynOfCircle.size,iCantThinkOfAnyOtherSynOfCircle.size)
    pop()
}

function theRecord(){
    fill("#ffffff");
    noStroke();
    circle(0,0,800)

    push();
    for (let i = 0 ; i < 800; i += 50){
        stroke("#dddddd")
        noFill();
        circle(0,0,i + random(0,50))
    }
    pop();
}

function disk(){
    circle(iCantThinkOfAnyOtherSynOfCircle.x,iCantThinkOfAnyOtherSynOfCircle.y,iCantThinkOfAnyOtherSynOfCircle.size)
}

function mousePressed() {
    if (tunes && !tunes.isPlaying()) {
        tunes.play();
    }
}

function mouseReleased() {
    if (tunes && tunes.isPlaying()) {
        tunes.pause();
    }
}
