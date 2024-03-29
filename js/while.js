"use strict";

// While Loops
// 1. Create a file named while.js in the js directory.
//
// 2. Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var num = 2;
// while (num <= 65536) {
//     console.log(num);
//     num *= 2;
// }

// Do While Loop
// 1. An ice cream seller can't go home until she sells all of her cones.
//    First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell
//    before you start your loop.
//    Inside of the loop your code should generate another random number between 1 and 5,
//    simulating the amount of cones being bought by her clients.
//    Use a do-while loop to log to the console the amount of cones sold to each person.
//    This is a way get the random numbers for this exercise.
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;

// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

// The output should be similar to the following:

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

//======================================ICE CREAM EXERCISE



function pluralOrSingularCones(numOfCones) {
    return (numOfCones > 1) ? "cones" : "cone";
}

function createRandomIceCreamOrder(allCones) {
    var conesToSell;

    // create random (var conesToSell) number of cones to sell
    conesToSell = Math.floor(Math.random() * 5) + 1;

    // if random (var conesToSell) is <= cones left decrease allCones by random (var conesToSell)
    if (conesToSell <= allCones) {
        console.log(conesToSell + ' ' + pluralOrSingularCones(conesToSell) + " sold..."); //log random (var conesToSell) cones sold
        allCones -= conesToSell; //subtract conesToSell from allCones
    } else { //otherwise
        console.log("Cannot sell you " + conesToSell + ' ' + pluralOrSingularCones(conesToSell) + " I only have " + allCones + " ..."); //log cannot sell message
    }
    console.log(allCones + " are left");
    return allCones;
}


function runIceCreamStore() {

    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("We have " + allCones + " to sell");

    do {
        allCones = createRandomIceCreamOrder(allCones);
    } while (allCones > 0);

    console.log("Yay! I sold them all");
}


runIceCreamStore();