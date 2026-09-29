/**
 * PandEverywhere
 * Angy
 * 
 * wowie! so many pandas spawn
 */

"use strict";
// panda array
let pandas = [];

/**
 * makes a pretty big canvas and creates random x and y values for each panda in the array until theres 10
*/
function setup() {
    createCanvas(900, 900)

    for (let i = 0; i < 10; i++) {
        pandas.push({
            x: random(70, width - 70),
            y: random(110, height)
        });
    }
}


/**
 * summons many pandas and randomizes their locations and colours the background
*/
function draw() {
    background('#435021')

    for (const panda of pandas) {
        makePanda(panda.x, panda.y);
    }

}

function makePanda(x,y){
    //temp variables for location later
    push()
    translate(x, y)
    // ears
    noStroke();
    fill('#000000');
    circle(-40, -80, 60);
    circle(40, -80, 60);
    // head
    fill('#ffffff');
    circle(0, -50, 100);
    // eyes
    fill('#000000');
    circle(-25, -55, 40);
    circle(25, -55, 40);
    // snout
    fill('#ffffff');
    ellipse(0, -30, 50);

    
    pop()

}