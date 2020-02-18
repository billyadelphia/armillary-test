const royalRumble = require("./royalRumble");
const fs = require('fs');
fs.readFile(process.cwd() + "/royalRumble/input.txt", 'utf8', function(err, data) {
    if (err) throw err;
    let input = data.replace(/\n/g, ",");
    let names = royalRumble(input);
    console.log("input :", input);
    console.log("output :", names);
});