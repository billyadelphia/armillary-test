const royalRumble = require("./royalRumble");
const fs = require('fs');
const assert = require('assert');
let shouldBe = "David II,Louis VIII,Louis IX";
describe('royalRumble()', function() {
    it(`should return ${shouldBe}`, function(done) {
        fs.readFile(process.cwd() + "/royalRumble/input.txt", 'utf8', function(err, data) {
            if (err) throw err;
            let input = data.replace(/\n/g, ",");
            assert.equal(royalRumble(input), shouldBe);
            done();
        });
    });
});