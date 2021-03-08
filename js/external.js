// console.log ("Hello from external JavaScript");
// alert ("Welcome to my website");
// var response = prompt ("What is your favorite color?");
// alert ("Great! " + response + " is my favorite too!");
// alert ("Now, we need to talk about your rental history...");
// var movRented = prompt ("TELL ME WHAT YOU RENTED RIGHT NOW!!!");
// alert ("It figures you would rent " + movRented);
// var alsoRented = prompt ("What else did you rent?");
// var alsoAlsoRented = prompt ("I'm an all knowing AI!!! I know you rented one other movie. What was it?")
// var numOfDays = prompt ("How many days, TOTAL, did you keep my movies?");
// alert ("So, you had " + movRented + ", " + alsoRented + ", " + alsoAlsoRented + "," + " for " + numOfDays + " days ");
// alert ("Well there, looks like you owe me " + ( 3 * numOfDays ) + " dollars, or else!");
// alert ("I hope you're working to pay for all of these movies!");
// alert ("Since I'm a super AI I'll just search private IRS servers to see where you work");
// var googleHours = prompt ("How many hours did you work at Google this week?");
// var amazonHours = prompt ("And, how many hours at Amazon?");
// var facebookHours = prompt ("So, how many hours at Facebook?");
// var weeklyPay = ((googleHours * 400) + (amazonHours * 380) + (facebookHours * 350));
// alert ("By my calculations, you made " + weeklyPay + " dollars");
//
// if (true) {
//     let x = 5;
// }
// console.log(typeof x);
// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3);
// console.log(numbers)
// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);
// const p = new Promise((resolve, reject) => {
//     resolve (3)
// });
//
// p.then(result => console.log(result));
// p.catch(error => console.log('An error occured!'));

"use strict";

// ============================= First Part of Exercise

// console.log('Hello from external JS');
//
// alert('Welcome to my Website!');
//
// var favColor = prompt('What is your favorite color?');
//
// alert(favColor + ' is my favorite too!');
//



// ============================= Movie Rental
// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules
// (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

// var rentalPerDayDollars = Number(prompt("What is the the daily rental rate in dollars?"));
// var littleMermaidDays = Number(prompt("How many days will The Little Mermaid be rented?"));
// var brotherBearDays = Number(prompt("How many days will Brother Bear be rented?"));
// var herculesDays = Number(prompt("How many days will Hercules be rented?"));
//
// var totalRentalCost = (littleMermaidDays + brotherBearDays + herculesDays) * rentalPerDayDollars;
//
// alert("The total will be $" + totalRentalCost.toFixed(2));


// ============================= Contractor
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//
// var googleHourlyRateDollars = parseFloat(prompt("What is your Google hourly rate?"));
// var amazonHourlyRateDollars = parseFloat(prompt("What is your Amazon hourly rate?"));
// var facebookHourlyRateDollars = parseFloat(prompt("What is your Facebook hourly rate?"));
//
// var googleHours = parseFloat(prompt("How many hours this week at Google?"));
// var amazonHours = parseFloat(prompt("How many hours this week at Amazon?"));
// var facebookHours = parseFloat(prompt("How many hours this week at Facebook?"));
//
// var totalPayment = googleHours * googleHourlyRateDollars;
// totalPayment += amazonHours * amazonHourlyRateDollars;
// totalPayment += facebookHours * facebookHourlyRateDollars;
//
// alert("Total payment is $" + totalPayment.toFixed(2));


// ============================= Student Enrollment
// A student can be enrolled to a class only if the class is
// not full and the class schedule does not conflict with her current schedule.

// var classIsNotFull = confirm("Confirm that the class is not full"); // boolean
// var classSchedulesCheck = confirm("Confirm that the schedules check"); // boolean
//
// var studentEnrolled = classIsNotFull && classSchedulesCheck;
// alert("Student enrollment status: " + studentEnrolled);



// ============================= Product Offer
// A product offer can be applied only if people buy more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount of products.
// Use the following code to follow the instructions below:

// var discountBreakPoint = 2;
// var numberOfItems = Number(prompt("How many items were bought?"));
// var offerIsNotExpired = confirm("Confirm offer has not expired.");
// var isPremiumMember = confirm("Customer is a premium member");
//
// var productDiscountIsApplied = offerIsNotExpired && (isPremiumMember || numberOfItems >= discountBreakPoint);
//
// alert("Product discount applied: " + productDiscountIsApplied);