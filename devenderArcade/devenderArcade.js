module.exports = function(input) {
    let howManyOverlap = 0;
    let lastPlay;
    Object.keys(input).forEach((time) => {
        if (lastPlay) {
            if (time < lastPlay) {
                howManyOverlap++;
            }
        }
        lastPlay = input[time];
    });

    return howManyOverlap;
}