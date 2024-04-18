function substraction(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function split(num1, num2) {
    return num1 / num2;
}

function power(num1, num2) {
    return Math.pow(num1, num2);
}

function greetsName(name) {
    return 'Hola ' + name;
}

module.exports = { substraction, multiply, split, power, greetsName };