module.exports = function(input) {
    let arcadeIsNeeded = 1;
    let lastPlay;
    Object.keys(input).forEach((time) => {
        if (lastPlay) {
            if (time < lastPlay) {
                arcadeIsNeeded++;
            }
        }
        lastPlay = input[time];
    });

    return arcadeIsNeeded;
}