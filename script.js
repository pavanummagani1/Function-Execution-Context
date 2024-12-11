//MCQ-1
function getMessage() {
    return "Hello, World!";
}
console.log(getMessage());

//MCQ-2
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(3, 5));

//MCQ-3
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));

//MCQ-4
function checkSign(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkSign(0));
console.log(checkSign(5));

//MCQ-5
function findFirstEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            return numbers[i];
        }
    }
    return null;
}

console.log(findFirstEven([1, 3, 5, 8]));
console.log(findFirstEven([1, 3, 5]));

//MCQ-6
function getOddNumbers(n) {
    let odds = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            odds.push(i);
        }
    }
    return odds;
}

console.log(getOddNumbers(5));
console.log(getOddNumbers(10));

//MCQ-7
function square(num) {
    return num * num;
}

function sumOfSquares(a, b) {
    return square(a) + square(b);
}

console.log(sumOfSquares(3, 4));


//MCQ-8
function numberCategory(num) {
    if (num > 0) {
        if (num % 2 === 0) {
            return "Positive Even";
        } else {
            return "Positive Odd";
        }
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(numberCategory(2));
console.log(numberCategory(-5));

//MCQ-9
function isAdult(age) {
    return age >= 18 ? "Adult" : "Minor";
}

console.log(isAdult(20));
console.log(isAdult(15));


//MCQ-10

//MCQ-11
function createPerson(name, age) {
    return {name: name, age: age};
}

console.log(createPerson("Alice", 25));

//MCQ-12
function greet(name = "Guest") {
    return "Hello, " + name;
}

console.log(greet());
console.log(greet("John"));

//MCQ-13
function doNothing() {
    return;
}

console.log(doNothing());

//MCQ-14
function getEvenNumbers(n) {
    let evens = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        evens.push(i);
    }
    return evens;
}

console.log(getEvenNumbers(6));

//MCQ-15
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log(calculator.add(4, 6));

//MCQ-16
function getFirstPositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            return numbers[i];
        }
    }
    return -1;
}

console.log(getFirstPositive([-3, -2, 1, 2]));

//MCQ-17
let multiply = (a, b) => a * b;

console.log(multiply(3, 4));

//MCQ-18
function logMessage() {
    console.log("Hello!");
}

logMessage();
//MCQ-19
function findFirstDivisibleBy3(numbers) {
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 3 === 0) {
            return numbers[i];
        }
        i++;
    }
    return -1;
}

console.log(findFirstDivisibleBy3([1, 2, 9, 4]));

//MCQ-20
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

//MCQ-21
let divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));

//MCQ-22
function isNegative(num) {
    return num < 0;
}

console.log(isNegative(-5));

//MCQ-23
let array = [function() { return 1 }, function() { return 2 }];

console.log(array[1]());

//MCQ-24
function square(num) {
    return num * num;
}

console.log(typeof square(4));

//MCQ-25


//MCQ-26
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(8));
console.log(checkEvenOrOdd(7));

//MCQ-27
function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNumbers(5));
console.log(sumNumbers(3));
//MCQ-28

//MCQ-29
function countDown(n) {
    let result = "";
    while (n > 0) {
        result += n + " ";
        n--;
    }
    return result;
}

console.log(countDown(5));
console.log(countDown(3));

//MCQ-30
function printNumbers(n) {
    let i = 1;
    let result = "";
    do {
        result += i + " ";
        i++;
    } while (i <= n);
    return result;
}

console.log(printNumbers(4));
console.log(printNumbers(2));
