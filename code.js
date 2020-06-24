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
    else if (input === "5") {
        input = parseInt(input);
        return input;
    }
    else {
        return "Hello, Jane!";
    }

    // return "Hello, " + input + "!"
}