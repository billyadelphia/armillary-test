const defenderArcade = require('./defenderArcade');
const fs = require('fs');
fs.readFile(process.cwd() + "/defenderArcade/input.txt", 'utf8', function(err, data) {
    if (err) throw err;
    let input = data.replace(/\n/g, ",");
    let json = {};
    input.split(",").forEach(function(data2) {
        let array = data2.split(" ");
        json[array[0]] = array[1];
    });
    console.log("input :", input);
    console.log("output :", defenderArcade(json));
});