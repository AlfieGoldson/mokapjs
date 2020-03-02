const { randomValueFromArray, randomString, randomInt } = require('../util/generators');

function mockString(value) {
    if ((typeof value).toString() === "string")
        return value;

    if (Array.isArray(value))
        return () => randomValueFromArray(value);
    
    return () => randomString(
        randomInt(
            value.minLength || value.length || 3,
            value.maxLength || value.length || 32
        ),
        value.filter || null
    );
}

module.exports = mockString;