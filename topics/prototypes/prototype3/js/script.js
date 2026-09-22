/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let circleX
let circleY
let center
let circleSpeed

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
  createCanvas(900, 900);
  background(150,200,180)
  circleX = 300
  circleY = 300
  circleSpeed = 2
  center = width/2
  noStroke()
  fill(130,230,230);
//  circle(random(0,width),random(0,width),300,12);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
  //background(220);
  noStroke();
  fill(200,170,180,5);
  circle(random(0,width),mouseY,300);
  fill(180,170,200,5);
  circle(mouseX,random(0,height),300);
  fill(130,230,230,50);
  circle(circleX,circleY,random(100,300));
//  circleX = circleX+1
  
  if (circleX > mouseX) {
    circleX = circleX+random(-1,circleSpeed)
  } else {
      circleX = circleX-random(-1,circleSpeed)
  }
    if (circleY > mouseY) {
    circleY = circleY+random(-1,circleSpeed)
  } else {
      circleY = circleY-random(-1,circleSpeed)
  }
}

function mousePressed (){
  if ((mouseX < circleX+50) && (mouseX > circleX-50) && (mouseY > circleY-50) && (mouseY < circleY+50)) {
    print('it works');
    circleX = random(0,width)
    circleY = random(0,height)
  } else {
    print('not worky');
  }
  // circleX = random(50,width-50);
  // circleY = random(50,height-50);
}
function keyTyped(){
  if(key === 'z'){
    circleSpeed = circleSpeed+1
  }
  if(key === 'x'){
    circleSpeed = circleSpeed-1
  }
}