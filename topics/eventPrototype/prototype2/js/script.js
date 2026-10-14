/**flipping hugo
 * angy
 * 
 * use ''a'' and ''d'' to move hugo left and right
 * use ''w'' and ''s'' to make hugo do a front flip or back flip
 */

"use strict";
// hugo variables
let hugo = {
    honkself: undefined,
    x: 600,
    y: 200,
    angle: 0,
    isFlipping: false,
    orientation: 'front',
    flipCount: 0,
};

let flower;


// loads the images for hugo and the flower
async function preload() {
    hugo.honkself = await loadImage("../images/hugo.png");
    flower = await loadImage("../images/hugosflower.png");
}

async function setup() {
    await preload();
// inputs
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
 * summons hugo, does flipping animation, and summons flower
*/
function draw() {
    background(0, 0, 100);
    imageMode(CENTER);
// summons hugo
    push()
    translate(hugo.x, hugo.y);
    rotate(hugo.angle);
    image(hugo.honkself, 0, 0, 200, 200);
    pop();

// flipping animation
    if (hugo.isFlipping) {
        if (hugo.orientation === 'front') {
            hugo.angle += 0.1;
            if (hugo.angle >= TWO_PI) {
                hugo.angle = 0;
                hugo.isFlipping = false;
                hugo.flipCount++;
            }
        } else if (hugo.orientation === 'back') {
            hugo.angle -= 0.1;
            if (hugo.angle <= -TWO_PI) {
                hugo.angle = 0;
                hugo.isFlipping = false;
                hugo.flipCount++;
            }
        }
    }

// gives flower based on amount of flips
    if (hugo.flipCount >= 5) {
        push();
        image(flower, 600, 200, 100, 100);
        pop();
    }
}
// mouvement triggers
function goRight() {
    hugo.x = hugo.x + 5;
}

function goLeft() {
    hugo.x -= 5;
}

// flip triggers
function doFrontFlip() {
    hugo.isFlipping = true;
    hugo.orientation = 'front';
}

function doBackFlip() {
    hugo.isFlipping = true;
    hugo.orientation = 'back';
}