module.exports = function(input) {

    let isArcadeUsed = false;
    let arcadeUsedUntil;
    let howManyArcadeIsRequired = 0;

    for (let i = 900; i <= 1700; i += 10) { // loop from 9am to 5pm, increase 10 minutes each loop
        if (arcadeUsedUntil == i) { //check if arcade is being used until
            isArcadeUsed = false; //if someone stop using the arcade, it will set as false
            arcadeUsedUntil = null;
        }
        if (input[i]) {
            if (isArcadeUsed) {
                howManyArcadeIsRequired++; //increase arcade requirement if arcade is being used and someone still play it
            }
            if (!arcadeUsedUntil) {
                arcadeUsedUntil = input[i];
                isArcadeUsed = true;
            }
        }
    }
    return howManyArcadeIsRequired;
};