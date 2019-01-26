console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.add(9, -2);
console.log(res);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });