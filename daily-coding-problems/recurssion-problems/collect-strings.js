function collectStrings(obj, res = []) {
    for (let key in obj) {
        if (typeof obj[key] == "string") {
            res.push(obj[key]);
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            collectStrings(obj[key], res);
        }
    }
    return res;
}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
