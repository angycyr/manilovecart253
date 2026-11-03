/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let cards = [];

/**
 * creates canvas and sets rectMode to center
*/
function setup() {
    createCanvas(900,1600);
    rectMode(CENTER);
    for (let i = 0; i < 5; i++) {
        cards.push(createCard());
    }  

}

/**
 *summons cards
*/
function draw() {
    background('#f5f5f5');

    for (let i = 0; i < cards.length; i++) {
        drawCard(cards[i], i);
    }
}

function createCard(){
    let card = {
        x: width/2,
        y: height/2,
        width: 400,
        height: 600,
        colour: {
            r: random(0,255),
            g: random(0,255),
            b: random(0,255),
        }
    };
    return card;
}

// draws individual cards

function drawCard(card, index){
// paper
    push()    
    stroke('#635f5f')
    strokeWeight(5)
    rect(card.x, card.y - index*15, card.width, card.height, 20)
    fill('#k1k1k1')

    pop()
// attricbute
    push()
    noStroke();
    fill(color(card.colour.r, card.colour.g, card.colour.b))
    circle(card.x, card.y - index*15, 200)
    pop()
}

// removes the top card 

function mousePressed(){
    if(cards.length > 0){
        cards.pop();
    }
}