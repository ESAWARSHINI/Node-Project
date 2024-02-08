//INBUILT PACKAGE IN NODE

//OS

const os = require("os");
const freeMemory = os.freemem();
const totalmemory = os.totalmem();
const version = os.version();
const Processor = os.cpus();

function convertToGb(val) {
  console.log(`${(val / (1024 * 1024 * 1024)).toFixed(2)} GB`);
}
convertToGb(freeMemory);

// fs -> To access file System

// CREATING AND WRITING ON A FILE
var quote = `The Magic you are looking for is in the work you are avoiding`;
const fs = require("fs");
fs.writeFile("quote.txt", quote, (msg) => console.log("completed"));
//"quote.txt" ---> Path of the file
// quote ---> contents to  e written in a file
// (msg) => console.log("completed") ---> Callback Function

// CREATING 10 FILES INSIDE A FOLDER
var quote1 = "Live More Worry Less";
const fs = require("fs");
for (var i = 1; i <= 10; i++) {
  fs.writeFile(`backup/txt-${i}.html`, quote1, (msg) =>
    console.log("completed")
  );
}

//CREATING N FILES INSIDE A FOLDER
var quote1 = "Live More Worry Less";
const fs = require("fs");
const [, , arg1] = process.argv;
if (arg1 <= 50) {
  //  To restrict the no.of files to be created
  for (var i = 1; i <= arg1; i++) {
    fs.writeFile(`backup/txt-${i}.html`, quote1, (msg) =>
      console.log("completed")
    );
  }
} else {
  console.log("Reduce No of Files");
}

//READING A FILE
const fs = require("fs");
fs.readFile("quote.txt", "utf-8", (err, data) => {
  // utf-8 ---> File Encoding
  if (err) {
    console.log("Error is : " + err);
  } else {
    console.log(data);
  }
});

//APPENDING CONTENTS IN THE FILE
const fs = require("fs");
var quote = "Add a line";
fs.appendFile("quote.txt", "\n" + quote, (msg) => console.log("completed"));

// DELETING A FILE
const fs = require("fs");
fs.unlink("quote.txt", (msg) => console.log("deleted"));

//DELETING ALL THE FILES IN THE FOLDER
const fs = require("fs");
fs.readdir("./backup", (err, files) => {
  if (err) {
    console.log("error");
    return;
  }

  for (var file of files) {
    fs.unlink(`./backup/${file}`, (err) => {
      if (err) console.log(err);
      else {
        console.log("deleted successfully");
      }
    });
  }
});
