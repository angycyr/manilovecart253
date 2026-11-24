/**
 * wheel
 * angy
 * 
 * spin a wheel
 */

"use strict";

let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let angle = 0;
let targetAngle = 0;

let spinning = false;

let speed = 0;
let deceleration = 0.98; // Slow down factor

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(900, 900);
    background('#f5f5f5');
    textAlign(CENTER, CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    translate(width / 2, height / 2);

    drawWheel();


}

function drawWheel() {

    for (let i = 0; i < letters.length; i++) {

        let startAngle = i * sliceAngle + angle;
        let endAngle = (i + 1) * sliceAngle + angle;
        fill((i % 2 === 0) ? 255 : 200);
        stroke(0);
        strokeWeight(2);
        arc(0, 0, 300, 300, startAngle, endAngle, PIE);

        // Draw the letters
        fill(0);

        let midAngle = (startAngle + endAngle) / 2;
        let nameX = cos(midAngle) * 110; // Moved closer to the center
        let nameY = sin(midAngle) * 110; // Moved closer to the center
        push();
        translate(nameX, nameY);
        rotate(midAngle + HALF_PI); // Rotate 90 degrees to align with the segment

        // Adjust text size to fit within the arc
        textSize(20); // Use a fixed size for larger text
        let textToShow = letters[i];
        // Ensure the text fits within the segment
        while (textWidth(textToShow) > 70) {
        textSize(textSize() - 1);
        }
        text(textToShow, 0, 0);
        pop();


    }


}
