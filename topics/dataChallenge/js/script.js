/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";
let langList = ["en", "es", "fr", "de", "it", "pt", "ru", "zh", "ja", "ko", "ar", "hi"];

// Starts with the instruction
let carName = "Click to generate a car name.";
let dinosaurName = "Click to generate a dinosaur name.";

/**
 * Load the car and dinosaur data
 */
async function preload() {
    carData = await loadJSON("assets/datas/cars.json");
    dinosaurData = await loadJSON("assets/datas/dinosaurs.json");
    langData = await loadJSON("assets/datas/language.json");
}

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);
    await preload();
    lang = random(langList);

    if (lang === "en") {
        carName = langData.carText.en
        dinosaurName = langData.dinoText.en;
    }
    if (lang === "es") {
        carName = langData.carText.es
        dinosaurName = langData.dinoText.es;
    }
    if (lang === "fr") {
        carName = langData.carText.fr
        dinosaurName = langData.dinoText.fr;
    }
    if (lang === "de") {
        carName = langData.carText.de
        dinosaurName = langData.dinoText.de;
    }
    if (lang === "it") {
        carName = langData.carText.it
        dinosaurName = langData.dinoText.it;
    }
    if (lang === "pt") {
        carName = langData.carText.pt
        dinosaurName = langData.dinoText.pt;
    }
    if (lang === "ru") {
        carName = langData.carText.ru
        dinosaurName = langData.dinoText.ru;
    }
    if (lang === "zh") {
        carName = langData.carText.zh
        dinosaurName = langData.dinoText.zh;
    }
    if (lang === "ja") {
        carName = langData.carText.ja
        dinosaurName = langData.dinoText.ja;
    }
    if (lang === "ko") {
        carName = langData.carText.ko
        dinosaurName = langData.dinoText.ko;
    }
    if (lang === "ar") {
        carName = langData.carText.ar
        dinosaurName = langData.dinoText.ar;
    }
    if (lang === "hi") {
        carName = langData.carText.hi
        dinosaurName = langData.dinoText.hi;
    }
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2 - 25);
    text(dinosaurName, width / 2, height / 2 + 25);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
    carName = random(carData.cars)
    dinosaurName = random(dinosaurData.dinosaurs)
    print(carName);
    print(dinosaurName);
}