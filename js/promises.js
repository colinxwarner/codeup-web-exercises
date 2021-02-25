"use strict";
console.log("Promises JS");

{

// EXERCISES
// Create Your Own Promise
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//     SAMPLE CODE:
//     wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//     wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// BONUS
// As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

//     const wait = (miliseconds) => {
//         return new Promise((resolve, reject)) => {
//             setTimeout(()) => {
//                 resolve();
//         },  miliseconds);
//     });
// };
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}