console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString("Zane"));
let filteredArray = _.uniq(['Zane', 1, 'Zane', 1, 2, 3, 4])
console.log(filteredArray);

// let res = notes.add(9, -2);
// console.log(res);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });