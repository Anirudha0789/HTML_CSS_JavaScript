const fs = require("fs");

let text = fs.readFileSync("read.txt", "utf-8");
text = text.replace("txt", "text");
console.log("The Content of the file is : ", text);

console.log("Creating a new file..");
fs.writeFileSync("newfile.txt", text);