/**
 * unintuitive colour picker
 * Angy
 * 
 * hover the colour buttons to add or substract from the total colour. click the middle button to reveal the colour
*/
"use strict";

let theColouur = {
    red: 0,
    green: 0,
    blue: 0,
}

/**
 *create canvas
*/
function setup() {
    createCanvas(400,300)
}


/**
 * makes the bg grey, summons the colour buttons, and checks if the mouse is hovering over a button to add or substract from the total colour
*/
function draw() {
    background('#aaaaaa')
    makeRedButtons(25)
    makeGreenButtons(150)
    makeBlueButtons(275)

    makeBlackButton();

    if (mouseX >= 25 && mouseX <= 125 && mouseY >= 25 && mouseY <= 75 && theColouur.red < 255) {
        theColouur.red++
    }
    if (mouseX >= 25 && mouseX <= 125 && mouseY >= 225 && mouseY <= 275 && theColouur.red > 0) {
        theColouur.red--
    }
    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 25 && mouseY <= 75 && theColouur.green < 255) {
        theColouur.green++
    }
    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 225 && mouseY <= 275 && theColouur.green > 0) {
        theColouur.green--
    }
    if (mouseX >= 275 && mouseX <= 375 && mouseY >= 25 && mouseY <= 75 && theColouur.blue < 255) {
        theColouur.blue++
    }
    if (mouseX >= 275 && mouseX <= 375 && mouseY >= 225 && mouseY <= 275 && theColouur.blue > 0) {
        theColouur.blue--
    }

    print(theColouur.red, theColouur.green, theColouur.blue)

    if (mouseIsPressed && mouseX >= 25 && mouseX <= 375 && mouseY >= 100 && mouseY <= 200){
        fillColour();
    }

}

// make red, green, and blue buttons with arrows to add or substract from the total colour
function makeRedButtons(x){
    fill(255,0,0)
    rect(x, 25, 100, 50)
    rect(x, 225, 100, 50)
    textSize(20)
    noStroke();
    fill('black')
    text("^^", x+40, 60)
    text("vv", x+40, 260)
}

function makeGreenButtons(x){
    fill(0,255,0)
    rect(x, 25, 100, 50)
    rect(x, 225, 100, 50)
    textSize(20)
    noStroke();
    fill('black')
    text("^^", x+40, 60)
    text("vv", x+40, 260)
}

function makeBlueButtons(x){
    fill(0,0,255)
    rect(x, 25, 100, 50)
    rect(x, 225, 100, 50)
    textSize(20)
    noStroke();
    fill('black')
    text("^^", x+40, 60)
    text("vv", x+40, 260)
}

function makeBlackButton(){
    fill(0,0,0)
    rect(25, 100, 350, 100)
    textSize(20)
    noStroke();
    fill('white')
    text("click me", 165, 155)
}
// when the black button is clicked, the background changes to the total colour
function fillColour(){
    fill(theColouur.red, theColouur.green, theColouur.blue)
    rect(0,0,width,height)
}