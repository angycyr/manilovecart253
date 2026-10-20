/**
 * population control.
 * Angy
 * 
 * make circle by clicking, if theres too many circle, clicking will remove circles
 */

"use strict";

let circles = [];
let maxCircles = 10;

/**
 * create canvas
*/
function setup() {
	createCanvas(400, 400);
}


/**
 * makes the bg grey, summons and removes the circles
*/
function draw() {
	background(255);

    noCursor();
    noStroke();

    let wahwah = map(mouseX, 0, width, 0, 255);
    let wehweh = map(mouseY, 0, height, 0, 255);

	for (let item of circles) {
        fill(wahwah, wehweh, random(0, 255));
		circle(item.x, item.y, item.radius * 2);
	}
}

function mousePressed() {
	if (circles.length >= maxCircles) {
		circles.shift();    
		return;
	}

	let radius = random(15, 35);
	circles.push({
		x: random(0, width),
		y: random(0, height),
		radius
	});
}