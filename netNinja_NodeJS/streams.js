const fs= require('fs');

const readStream = fs.createReadStream("./Keyword-901.txt", {encoding:'utf-8'});

const writeStream = fs.createWriteStream("./Keyword.txt", {encoding:'utf-8'});

// readStream.on('data', (chunk)=>{
//     console.log("\n------New Chunck-------\n");
//     console.log(chunk);
//     writeStream.write('\nNew Chunck\n');
//     writeStream.write(chunk);
// });

// piping

readStream.pipe(writeStream);