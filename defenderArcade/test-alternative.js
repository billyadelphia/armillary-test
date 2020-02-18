const defenderArcadeAlternative = require("./alternative");
const fs = require('fs');
const assert = require('assert');
describe('defenderArcadeAlternative()', function() {
    it("should return 3", function(done) {
        fs.readFile(process.cwd() + "/defenderArcade/input.txt", 'utf8', function(err, data) {
            if (err) throw err;
            let input = data.replace(/\n/g, ",");
            let json = {};
            input.split(",").forEach(function(data2) {
                let array = data2.split(" ");
                json[array[0]] = array[1];
            });
            assert.equal(defenderArcadeAlternative(json), 3);
            done();
        });
    });
});