'use strict';

sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Incorrect parameter type');
    }
    return a + b;
}

subtract = async (a, b) => {
    return a - b;
}

multiply = (a, b) => {
    return a * b;
}

divide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;