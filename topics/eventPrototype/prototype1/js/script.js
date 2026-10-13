/**
 * pet the hugo
 * angy
 * 
 * hugo the clown will give you a flower if you pet him (mouse dragging)
 */

"use strict";

let hugo;    
let shakeX = 0;
let shakeY = 0;

// petting variables
let isPetting = false;
let petDuration = 0;

// flower variables
let flower;
let flowerVisible = false;
let flowerHue = 120;

// loads the images for hugo and the flower
async function preload() {
    hugo = await loadImage("../images/hugo.png");
    flower = await loadImage("../images/hugosflower.png");
}

// sets up the canvas and initializes the color mode
async function setup() {
    await preload();
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);
}

function draw() {

    let petSeconds = petDuration / 60;

// increases the petting duration while the mouse is being dragged
    if (isPetting) {
        petDuration++;
    }
// changes the background color based on how long the petting has lasted
    if (isPetting) {
        let backgroundHue = (5 * petSeconds + 0.6 * petSeconds ** 2) % 360;
        background(backgroundHue, 45, 100);
    } else {
        background(0, 0, 100);
    }
// makes hugo shake when petting
    if (isPetting) {
        let shakeAmount = min(2 + petSeconds * 0.5, 18);
        shakeX = random(-shakeAmount, shakeAmount);
        shakeY = random(-shakeAmount, shakeAmount);
    }
// summos hugo
    push();
    translate(width / 2 + shakeX, height / 2 + shakeY);
    imageMode(CENTER);
    image(hugo, 0, 0, width, height);
    pop();
// summons the flower
    if (flowerVisible) {
        tint(flowerHue, 85, 100);
        image(flower, 265, 235, 110, 140);
        noTint();
    }
}

// trigger the petting when the mouse is dragged, and reset the petting duration and hide the flower
function mouseDragged() {
    if (!isPetting) {
        isPetting = true;
        petDuration = 0;
        flowerVisible = false;
    }
}
// stops the petting when the mouse is released, and shows the flower with a color based on how long the petting lasted
function mouseReleased() {
    isPetting = false;
    flowerVisible = true;    
    let petSeconds = petDuration / 60;    
    
    if (!isPetting) {
        return;
    }

    if (petSeconds >= 25) {
        flowerHue = 220;
    } else if (petSeconds >= 20) {
        flowerHue = 280;
    } else if (petSeconds >= 15) {
        flowerHue = 0;
    } else if (petSeconds >= 10) {
        flowerHue = 30;
    } else if (petSeconds >= 5) {
        flowerHue = 60;
    } else {
        flowerHue = 120;
    }
}
