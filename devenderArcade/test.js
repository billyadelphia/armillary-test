const devenderArcade = require("./devenderArcade");
let input = {
    900: 910,
    940: 1200,
    950: 1120,
    1100: 1130,
    1300: 1400,
    1350: 1420
};
let string = JSON.stringify(input);
describe('#devenderArcade()', function() {
    it("should return 3", function() {
        devenderArcade(input);
    });
});