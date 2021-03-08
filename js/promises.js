"use strict";
console.log("Promises JS");

{
    "use strict";

    {

        // const wait = (milliseconds) => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve();
        //         }, milliseconds);
        //     });
        // };
        //
        // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
        // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


        const GITHUB_API_URL = 'https://api.github.com';

        function getDateOfLastCommit(username) {
            const ENDPOINT = `/users/${username}/events/public`;
            const CONFIG = {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            }
            return fetch(GITHUB_API_URL + ENDPOINT, CONFIG)
                .then(response => response.json())
                .then(events => {
                    let mostRecentEvent = events.find((event) => event.type === 'PushEvent');
                    let dateOfMostRecentPush = new Date(mostRecentEvent['created_at']).toDateString();
                    return dateOfMostRecentPush;
                });
        }

        getDateOfLastCommit('jreich5')
            .then(console.log)
            .catch(console.error);

    }

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
//     function wait(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms))
//     }
// }
//     EXERCISES:
//     Handle An API Promise
//
//     1. Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
//
//     2. Generate a Personal Access Token for the GitHub API.
//        We will use this so that we don't get rate limited when talking to the GitHub API.
//        You can add the token to your requests like this:
//
//     fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//
//     3. Create a function that accepts a GitHub username, and returns a promise
//        that resolves returning just the date of the last commit that user made.
//        Reference the github api documentation to achieve this.
//        https://docs.github.com/en/rest/reference/activity#events

    // function getLastCommit
    //
    // fetch('https://api.github.com/users/', {headers: {'Authorization': 'const GITHUB_TOKEN'}})
    // // const githubAPIRequest = "https://api.github.com/events";

    // fetch(githubAPIRequest)
    // .then(response => response.json())
    //     .then(data => {
    //         console.log(data.text);
    //     })
    //     .catch(console.error);








}