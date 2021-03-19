/**
 * 
 * @param {number} arg1, передаем любое положительное или отрицательное число 
 * @param {number} arg2, передаем любое положительное или отрицательное число 
 * @param {string} operation, передаем строку. 
 *                            "addition" - операция сложения
 *                            "subtraction" - операция вычитания
 *                            "multiplication" - операция умножения
 *                            "division" - операция деления
 * @returns {number}, возвращает число, результат одной из вышеперечисленных операций
 */

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "addition":
            return addition(arg1, arg2);
        case "subtraction":
            return subtraction(arg1, arg2);
        case "multiplication":
            return multiplication(arg1, arg2);
        case "division":
            return division(arg1, arg2);
        default:
            throw new Error("Неизвестная математическая операция, передайте в параметр 'operation', одну из строк: 'addition', 'subtraction', 'multiplication', 'division'");
    }
}

console.log(mathOperation(10, 6, 'subtraction'));

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}
