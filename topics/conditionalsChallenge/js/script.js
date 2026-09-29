/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

let puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000",

    velocity: {
        x: 0,
        y: 0
    }
};

let bird = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 100,
    fill: 40,
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();

    movePuck();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    bird.x = mouseX;
    bird.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(bird.fill);

    //bird wings
    triangle(bird.x + 35, bird.y - 35, bird.x + 90, bird.y - 80, bird.x + 35, bird.y + 20)
    triangle(bird.x + 40, bird.y - 30, bird.x + 120, bird.y - 30, bird.x + 45, bird.y + 10)
    triangle(bird.x + 35, bird.y - 30, bird.x + 90, bird.y + 30, bird.x + 35, bird.y + 20)

    //bird body and eyes
    noStroke();
    fill(255)
    circle(bird.x - 30, bird.y - 20, 50)
    fill(bird.fill)
    circle(bird.x - 40, bird.y - 35, 20)
    fill(bird.fill)
    circle(bird.x, bird.y, bird.size)
    fill(255)
    circle(bird.x + 10, bird.y - 20, 50)
    fill(bird.fill)
    circle(bird.x + 20, bird.y - 30, 25)

    //bird beak
    triangle(bird.x - 20, bird.y - 20, bird.x - 100, bird.y - 50, bird.x - 30, bird.y + 20)
    triangle(bird.x - 30, bird.y - 20, bird.x - 90, bird.y + 50, bird.x - 30, bird.y + 30)

    //bird legs
    stroke(bird.fill)
    strokeWeight(5)
    line(bird.x + 10, bird.y + 20, bird.x - 50, bird.y + 70)
    line(bird.x - 50, bird.y + 70, bird.x - 60, bird.y + 60)
    line(bird.x - 50, bird.y + 70, bird.x - 60, bird.y + 75)
    line(bird.x - 50, bird.y + 70, bird.x - 50, bird.y + 80)
    line(bird.x + 20, bird.y + 20, bird.x + 40, bird.y + 70)
    line(bird.x + 40, bird.y + 70, bird.x + 50, bird.y + 60)
    line(bird.x + 40, bird.y + 70, bird.x + 50, bird.y + 75)
    line(bird.x + 40, bird.y + 70, bird.x + 40, bird.y + 80)
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

function movePuck() {
    let xx = constrain(puck.x, 0, width)
    let yy = constrain(puck.y, 0, height)

    const d = dist(bird.x, bird.y, puck.x, puck.y);
    const overlap = (d < bird.size / 2 + puck.size / 2);

    if (overlap) {
        bird.fill = "#ff00ff"
        puck.velocity.x += (puck.x - mouseX) * 0.0005;
        puck.velocity.y += (puck.y - mouseY) * 0.0005;
    } else {
        bird.fill = "#000000"
    }

    puck.x += puck.velocity.x;
    puck.y += puck.velocity.y;



}