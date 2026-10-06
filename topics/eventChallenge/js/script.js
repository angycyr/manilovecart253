/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

let timerr = 0;

// SOUND VARIABLES
let caw
let cawing = false

async function preload() {
    caw = await loadSound("./assets/sounds/CARSW.mp3");
}
/**
 * Create the canvas
 */
async function setup() {
    createCanvas(800, 800);

    await preload();
    // MAKES CAW HAPPEN ONLY ONCE
    caw.onended(cawcawing)
    // LOSE WHEN OFFLINE OR SWITCHING TABS
    window.addEventListener("offline", loooose);
    // LOSE WHEN SWITCHING TABS
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            loooose();
        }
    });
    // ALL THE OTHER EVENTS BUT MOUSE MOVE BARELY WORKS
    document.addEventListener("mousewheel", loooose);
    document.addEventListener("mousemove", loooose);
    document.addEventListener("click", loooose);
    document.addEventListener("mousedown", loooose);
    document.addEventListener("mouseup", loooose);
    document.addEventListener("keydown", loooose);
    document.addEventListener("keyup", loooose);

}

/**
 * Update the score and display the UI
 */
function draw() {

    background("#87ceeb");
    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();
    // BOTCH ATTEMPT TO MAKE CAW HAPPEN ONLY ONCE
    if (timerr > 0 && timerr < 2) {
        caw.play();
    }


}
// SETS CAW TO FALSE WHEN DONE PLAYING
function cawcawing() {
    caw.playing = false;
}

/**
 * Show the game over message if needed, and the current score, AND PLAYS CAW
 */
function displayUI() {
    if (gameOver) {
        push();
        bird();
        textSize(48);
        fill(255, 0, 0);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();

        timerr++
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    fill(255, 0, 0);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

// LOSE
function loooose() {
    gameOver = true;
}

// MAKES THE BIRD
function bird() {
    //head
    push()
    fill(20, 30, 70)
    circle(width / 2, height / 2, 750)
    pop()
    //anger
    push()
    fill(5, 10, 30, 130)
    ellipse(360, 340, 250, 130)
    pop()
    // eyes
    push()
    fill(0)
    circle(190, 370, 25)
    circle(560, 370, 25)

    //beak
    triangle(250, 350, 480, 350, 300, 450)

    //eyebrows
    triangle(160, 330, 200, 300, 230, 360)
    triangle(600, 340, 580, 310, 530, 360)
    pop()

    //legs L
    push()
    stroke(0);
    strokeWeight(25)
    line(550, 700, 540, 850)
    line(500, 825, 540, 800)
    line(580, 825, 540, 800)

    //legs R
    line(280, 725, 170, 850)
    line(200, 810, 170, 810)
    line(200, 810, 210, 855)

    pop()

}

// DOES THIS AMOUNT OF COMMENTING MAKE ME LOOK LIKE AN AI?? TYPING IN ALL CAPS TO CONVINCE YOU OTHERWISE