function stringifyNumbers(obj, res = {}) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            res[key] = String(obj[key]);
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            res[key] = stringifyNumbers(obj[key]);
        } else {
            res[key] = obj[key];
        }
    }
    return res;
}
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj))




/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}*/
