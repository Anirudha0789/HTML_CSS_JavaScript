const express = require("express");
const { fstat } = require("fs");
const path = require("path");
const app = express();
const port = 80;
const fs = require("fs")

// EXPRESS SPECIFIC STUFF
// for serving static file
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
//set the template engine pug
app.set("view engine", "pug");

// set the view directory
app.set("views", path.join(__dirname, "views"));

// ENDPOINT
app.get("/", (req, res)=>{
    const con = "CONTENT";
    const params = {"title" : "PUG", "content": con};
    res.status(200).render("index.pug", params);
});

app.post("/", (req, res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let outputToWrite = `The Client name is ${name}, \n${age} year old, \nGender : ${gender}, \nResiding at ${address}. \nMore about him/her : ${more} \n`;
    fs.writeFileSync("Output.txt", outputToWrite);
    const params = {"title" : "PUG",};
    res.status(200).render("index.pug", params);
});

app.listen(port, ()=>{
    console.log(`Started Successfully on port ${port}`);
});



// // our pug demo endpoint
// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' });
// });

// app.get("/", (req, res)=>{
//     res.send("HomePage of First Express App");
// });

// app.get("/", (req, res)=>{
//     res.status(200).send("HomePage of First Express App");
// });

// app.get("/about", (req, res)=>{
//     res.send("AboutPage of First Express App");
// });

// app.post("/about", (req, res)=>{
//     res.send("AboutPage of First Express App -> Post request");
// });

// app.get("/this", (req, res)=>{
//     res.status(404).send("404 Not Found");
// });
