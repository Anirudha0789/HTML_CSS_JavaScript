// Synchronous or Blocking -> Line by Line Execution
// Asynchronous or Non Blocking -> callback will fire


// This is example of Asynchronous or Non blocking.
const fs = require("fs");
let text = fs.readFile("newfile.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});
console.log("This is coming before the data..");