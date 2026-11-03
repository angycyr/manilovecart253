/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";
let movement = {
    x: undefined,
    y: undefined,
    speed: {
        x: 1,
        y: 1,
    },
    bob: false,
}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);

}



/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {

    if (movement.bob) {
        movement.x = mouseX;
        movement.y = mouseY;
    } else {
        movement.x += movement.speed.x;
        movement.y += movement.speed.y;

        if (movement.x > width || movement.x < 0) {
            movement.speed.x *= -1;
        }
        if (movement.y > height || movement.y < 0) {
            movement.speed.y *= -1;
        }
    }

    // background("pink");

    colorMode(HSB);

    let i = 0;
    let k = 0;
    for (let j = 0; j < width; j += 10) {

        fill(k, i, i)
        noStroke();
        // noFill(); 
        // console.log(i, j)
        rect(j, 0, j + 20, height)
        i += sin(0.01 * movement.y * 0.01 * movement.x) * 10;
        k += 8

    }


    let x = 0;
    while (x < width) {
        stroke(x / 2);
        // strokeWeight(x / 50);
        line(x, 0, movement.x, movement.y);
        x += 50;
    }

    let y = 0;
    while (y < height) {
        stroke(y / 2);
        // strokeWeight(y / 50);
        line(0, y, movement.x, movement.y);
        y += 50;
    }

    let a = 0;
    while (a < width) {
        stroke(a / 2);
        // strokeWeight(a / 50);
        line(a, height, movement.x, movement.y);
        a += 50;
    }

    let b = 0;
    while (b < height) {
        stroke(b / 2);
        // strokeWeight(b / 50);
        line(width, b, movement.x, movement.y);
        b += 50;
    }


}

function mousePressed() {
    movement.bob = true
}

function mouseReleased() {
    movement.bob = false
}