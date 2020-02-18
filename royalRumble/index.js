const royalRumble = require("./royalRumble");

let input = "Louis IX,Louis VIII,David II";
for (const [index, arg] of process.argv.entries()) {
    if (arg === "--input") {
        input = process.argv[index + 1];
    }
}

let names = royalRumble(input);
console.log("input :", input);
console.log("output :", names);