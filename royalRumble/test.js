const royalRumble = require("./royalRumble");
let input = "Louis IX,Louis VIII,David II";
describe("Louis IX,Louis VIII,David II", function() {
    describe('#royalRumble()', function() {
        it("should return David II,Louis VIII,Louis IX", function() {
            royalRumble(input);
        });
    });
});