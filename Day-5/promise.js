const fs = require("fs").promises;

//my own asynchronous function
function anishReadsFile() {
  console.log("Inside Anish's read file");
  return new Promise(function (resolve) {
    console.log("Inside Promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("before resolve");
      resolve(data);
    });
  });
}

//callback function to call
function onDone(data) {
  console.log(data);
}

anishReadsFile().then(onDone);
