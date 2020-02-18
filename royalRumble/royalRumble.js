const myMap = new Map();
myMap.set('I', 1);
myMap.set('V', 5);
myMap.set('X', 10);
myMap.set('L', 50);
myMap.set('C', 100);
myMap.set('D', 500);
myMap.set('M', 1000);

function romanToNumber(roman) {
    var result = 0;
    if (roman) {
        romanAsArray = roman.split('');
        romanAsArray.forEach(function(e, i) {
            result += myMap.get(e) < myMap.get(romanAsArray[i + 1]) ? -myMap.get(e) : myMap.get(e);
        });
    }
    return result;
}

function lastWord(words) {
    let n = words.split(/[\s,]+/);
    return n[n.length - 1];
}


module.exports = function(input) {
    input = input.replace(/\s*,\s*/g, ",");
    let object = [];

    //convert string into array
    input.split(",").forEach(function(nameUnSplit) {
        let roman = lastWord(nameUnSplit);
        let name = nameUnSplit.replace(roman, "");
        object.push({
            name: name.trim(),
            romanNumber: roman
        });
    });

    //sort alphabetically
    object.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    //sort by roman number
    let result = [];

    object.forEach(function(data, index) {
        object[index] = {
            name: data.name.trim(),
            romanNumber: data.romanNumber
        };
        try {
            if (data.name === object[index + 1].name) {
                if (romanToNumber(data.romanNumber) > romanToNumber(object[index + 1].romanNumber)) {
                    let firstData = {
                        name: data.name.trim(),
                        romanNumber: data.romanNumber
                    };
                    let secondData = {
                        name: object[index + 1].name.trim(),
                        romanNumber: object[index + 1].romanNumber
                    };
                    object[index] = secondData;
                    object[index + 1] = firstData;
                }
            }
        } catch (err) {

        }
    });
    let names = "";
    object.forEach(function(finalResult) {
        if (!names) {
            names = finalResult.name + " " + finalResult.romanNumber;
        } else {
            names = names + "," + finalResult.name + " " + finalResult.romanNumber;
        }
    });
    return names;
};