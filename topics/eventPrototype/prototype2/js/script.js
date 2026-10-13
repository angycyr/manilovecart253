/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let hugo = {
    honkself: undefined,
    x: 600,
    y: 240,
};
let flower;

// loads the images for hugo and the flower
async function preload() {
    hugo.honkself = await loadImage("../images/hugo.png");
    flower = await loadImage("../images/hugosflower.png");
}

async function setup() {
    await preload();

    createCanvas(1200, 300);
    document.addEventListener("keydown", (event) => {
        if (event.key === "a") {
            goRight();
        } else if (event.key === "d") {
            goLeft();
        } else if (event.key === "w") {
            doFrontFlip();
        } else if (event.key === "s") {
            doBackFlip();
        }
    });
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 0, 100);
    imageMode(CENTER);
    image(hugo.honkself, hugo.x, hugo.y, 100, 100);
}

function goRight() {
    hugo.x += 5;
}

function goLeft() {
    hugo.x -= 5;
}

function doFrontFlip() {
    hugo.y -= 5;
}

function doBackFlip() {
    hugo.y += 5;
}