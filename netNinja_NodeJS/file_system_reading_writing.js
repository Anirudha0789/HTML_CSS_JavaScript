const { Console } = require('console');
const fs = require('fs');

// reading files
fs.readFile('./keyword-901.txt', (err, data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

// // execute first
// console.log('last line');

// writing files
// fs.writeFile('./folder-name/text.txt', 'HELLO|||', ()=>{
//     console.log("Done");
// });

// Directories
// if(!fs.existsSync('./newdir')){
//     fs.mkdir('./newdir', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./newdir', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Deleted");
//     });
// }

// Deleting files
if(fs.existsSync("./newdir/deleteme.txt")){
    fs.unlink('./newdir/deleteme.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log("File Deleted");
    });
}