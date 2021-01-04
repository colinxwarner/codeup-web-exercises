"use strict";


    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['Joe', 'Jim', 'John', 'Jake'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length); //4
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var i = 0; i < names.length; i++) {
    console.log('The name at index ' + i + ' is: ' + names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    //EXAMPLE : arr.forEach(function(item, index, array) {
    //   // ... do something with item
    // });
// loop through the array and log the values
names.forEach(function(name) {
    console.log('The name at this index is: ' + name + '.');
});
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    // EXAMPLE
        // var shapes = ['square', 'rectangle', 'circle', 'triangle'];

        // shapes.forEach(function(shape) {
        //     console.log('Here is a lovely shape: ' + shape + '.');
        // });

    var num = [1, 2, 3, 4, 5];

//console.log(num.length); //5?
//console.log(num[0]); //1
function first(array) {
    return(array[0]);
}
console.log(first(num)); //1

function second(array) {
    return( array[1]);
}
console.log(second(num)); //2

function last(array) {
    return( array[4]);   //  ALT SOLUTION - return array[array.length -1]
}
console.log(last(num)); //5