/**
 * rainbow hugo
 * angy
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let hugo;
let hugoHue;
let isShifting = false;

//
const hugoX = 50;
const hugoY = 50;
const hugoWidth = 800;
const hugoHeight = 800;
//
let mouseSpeed;

let flower;

async function preload() {
    hugo = await loadImage("../images/hugo.png");
    hugo.loadPixels();
    flower = await loadImage("../images/hugosflower.png");
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    await preload();
    
    createCanvas(900,900)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#000000')
    image(hugo, hugoX, hugoY, hugoWidth, hugoHeight)

    mouseSpeed = abs(mouseX - pmouseX)

    let r = map(mouseX,0,width, 0,255)
    let b = map(mouseY,0,height,0,255)
    let g = map(mouseSpeed, 0, 75,0,255)
    hugoHue = color(r,b,g)

    print(g)
    
}

function mouseMoved() {
// it check wether its  on the image
    if (mouseX < hugoX || mouseX >= hugoX + hugoWidth ||
        mouseY < hugoY || mouseY >= hugoY + hugoHeight) {
        return;
    }
// this calculates the transparency of a pixel
// this was ai'd, i couldn't figure it out at all
    const imageX = Math.floor((mouseX - hugoX) * hugo.width / hugoWidth);
    const imageY = Math.floor((mouseY - hugoY) * hugo.height / hugoHeight);
    const alphaIndex = 4 * (imageY * hugo.width + imageX) + 3;
// if the transparency is anothing above 0, then it triggers.
    if (hugo.pixels[alphaIndex] > 0) {
         tint(hugoHue)
    } else {
        noTint()
    }
}

function colourHonk () {
    isShifting = true;
    hugoHue = "#782390"
}