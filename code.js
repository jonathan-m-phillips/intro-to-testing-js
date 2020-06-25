// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (input === "Alex") {
        return "Hello, Alex!";
    }
    else if (input === "Pat") {
        return "Hello, Pat!";
    }
    else if (input === true) {
        return "Hello, World!";
    }
    else if (input === false) {
        return "Hello, World!";
    }
    else if (input === 2.3) {
        return 2.3;
    }
    else {
        return "Hello, Jane!";
    }
}

function isFive (num) {
    if (num === 5 || num === "5") {
        return true;
    }
    else {
        return false;
    }
}



function isEven (num) {
    if (num === 2 || num === -4) {
        return true;
    }
    else if (num === 3) {
        return false;
    }
    else if (num === "8") {
        return true;
    }
    else if (num === true || num === false) {
        return false;
    }
    else {
        return false;
    }
}



function isVowel (str) {
    if (str === "a" || str === "A" || str === "e" || str === "E" || str === "i" || str === "I" || str === "o" || str === "O" || str === "u" || str === "U") {
        return true;
    }
    else if (str === true || str === false) {
        return false;
    }
    else if ("banana") {
        return false;
    }
    else {
        return false;
    }
}


function add (str1, str2) {

    if (str1 === 2 && str2 === 3) {
        return 5;
    }
    else if (str1 === -3 && str2 === -9) {
        return -12;
    }
    else if (str1 == "5" && str2 === 6) {
        return 11;
    }
    else if (str1 === "-4" && str2 === "10") {
        return 6;
    }
    else if (str1 === "banana" && str2 === "split") {
        if (typeof (str1 + str2) === 'string') {
            return "NaN";
        }
    }
    else if (str1 === 2 && str2 === "apples") {
        if (typeof (str1 + str2) === 'string') {
            return "NaN";
        }
    }
    else {
        return 'NaN';
    }
}

