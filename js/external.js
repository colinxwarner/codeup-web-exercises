console.log ("Hello from external JavaScript");
alert ("Welcome to my website");
var response = prompt ("What is your favorite color?");
alert ("Great! " + response + " is my favorite too!");
alert ("Now, we need to talk about your rental history...");
var movRented = prompt ("TELL ME WHAT YOU RENTED RIGHT NOW!!!");
alert ("It figures you would rent " + movRented);
var alsoRented = prompt ("What else did you rent?");
var alsoAlsoRented = prompt ("I'm an all knowing AI!!! I know you rented one other movie. What was it?")
var numOfDays = prompt ("How many days, TOTAL, did you keep my movies?");
alert ("So, you had " + movRented + ", " + alsoRented + ", " + alsoAlsoRented + "," + " for " + numOfDays + " days ");
alert ("Well there, looks like you owe me " + ( 3 * numOfDays ) + " dollars, or else!");
alert ("I hope you're working to pay for all of these movies!");
alert ("Since I'm a super AI I'll just search private IRS servers to see where you work");
var googleHours = prompt ("How many hours did you work at Google this week?");
var amazonHours = prompt ("And, how many hours at Amazon?");
var facebookHours = prompt ("So, how many hours at Facebook?");
var weeklyPay = ((googleHours * 400) + (amazonHours * 380) + (facebookHours * 350));
alert ("By my calculations, you made " + weeklyPay + " dollars");

