/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * modifed by angy and syd
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
let ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: undefined,
        y: 2,
        round: 1,
    }
};

let ball2 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: undefined,
        y: 0.1,
        round: 1,
    }
};

// Our paddle
let paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10,
    velocity: 20,
};

// my paddle
let paddle2 = {
    x: 300,
    y: 280,
    width: 80,
    height: 10,
    velocity: 20,
};

let score = 0;
/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
    /**
     * Moves the paddle
    */
    document.addEventListener("keydown", (event) => {
        if (event.key === "a") {
            paddle2.x = paddle2.x - paddle2.velocity
        } else if (event.key === "d") {
            paddle2.x = paddle2.x + paddle2.velocity
        } else if (event.key === 'ArrowLeft') {
            paddle.x = paddle.x - paddle.velocity
        } else if (event.key === 'ArrowRight') {
            paddle.x = paddle.x + paddle.velocity
        }
    });

    ball.velocity.x = random(-5, 5);
    ball2.velocity.x = random(-0.5, 0.5);

}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    // movePaddle(paddle);
    drawPaddle(paddle);
    drawPaddle(paddle2);

    drawBall(ball);
    drawBall(ball2);

    moveBall(ball2);
    moveBall(ball);

    handleBounce(ball, paddle);
    handleBounce(ball2, paddle);
    handleBounce(ball, paddle2);
    handleBounce(ball2, paddle2);


    gameOver(ball2);
    gameOver(ball);
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.x = ball.x + (ball.velocity.x * ball.velocity.round)
    ball.y = ball.y + (ball.velocity.y * ball.velocity.round)

    //Bounce the ball off the left + right 
    if (ball.x - ball.width / 2 < 0 ||
        ball.x + ball.width / 2 > width) {
        ball.velocity.x *= -1;

    }

    //Bounce the ball off the top 
    if (ball.y - ball.height / 2 < 0) {
        ball.velocity.y *= -1;
    }

}

function gameOver(ball) {
    if (ball.y + ball.height / 2 > height) {
        push();
        textAlign(CENTER);
        background('black')
        fill('white')
        text('L loser', width / 2, height / 2 - 25)
        text(score, width / 2, height / 2 + 25)
        noLoop();
        pop()
    }
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    if (checkOverlap(ball, paddle)) {
        ball.velocity.y *= -1;
        ball.velocity.round = ball.velocity.round + 0.05
        score++
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}