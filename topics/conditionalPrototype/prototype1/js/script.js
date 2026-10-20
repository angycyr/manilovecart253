/**
 * Wowie Colours
 * Angy
 * 
 * Changes background colour based on mouse positioning
 */

"use strict";

// panda parameters
let  panda = {
    x: undefined,
    y: undefined,
    size: 100,
    multiplier: 2,
    colour1: '#ffffff',
    colour2: '#000000',
}
/**
 * create canvas
*/
function setup() {
    createCanvas(400, 400);
    panda.x = width/2;
    panda.y = height/2;
}


/**
 * makes the bg lowkey like microsoft colours and summons panda
*/
function draw() {
    if (mouseX > 0 && mouseY > 0 && mouseX < width/2 && mouseY < height/2){
        // top left
        panda.colour2='#bd7873';
    } else if(mouseX > width/2 && mouseY > 0 && mouseX < width && mouseY < height/2){
        // top right
        panda.colour2='#978347';
    } else if(mouseX > 0 && mouseY > height/2 && mouseX < width/2 && mouseY < height){
        // bottom left
        panda.colour2='#5c6ea7';   
    } else if(mouseX > width/2 && mouseY > height/2 && mouseX < width && mouseY < height){
        // bottom right
        panda.colour2='#589167';
    } else{
        panda.colour1 = '#ffffff';
        panda.colour2 = '#000000';
    }
    makeBackground();
    makePanda();
}

// recyled panda drawing 
function makePanda(){
    push()
    //centers panda and allows it to grow
    translate(panda.x, panda.y+100)
    scale (panda.multiplier)
    // ears
    noStroke();
    fill(panda.colour2);
    circle(-40, -80, 60);
    circle(40, -80, 60);
    // head
    fill(panda.colour1);
    ellipse(0, -50, panda.size, panda.height);
    // eyes
    fill(panda.colour2);
    circle(-25, -55, 40);
    circle(25, -55, 40);
    // snout
    fill(panda.colour1);
    ellipse(0, -30, panda.size - 50);
    
    pop()

}

function makeBackground(){
    noStroke
    
    fill('#63806b'); 
    fill('#e09994')
    rect(0,0,width/2,height/2);
    fill('#c2ad6d')
    rect(width/2,0,width/2,height/2);
    fill('#99ace6')
    rect(0,height/2,width/2,height/2);
    fill('#84bf94')
    rect(width/2,height/2,width/2,height/2);
}