const { readFileSync, writeFileSync } = require("fs"); //const fs = require('fs'); fs.readFileSync();

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync(
  "./content/result-sync",
  `Here is the result : ${first} and ${second}`,
  { flag: "a" }
);
