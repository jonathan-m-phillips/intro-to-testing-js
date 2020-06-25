// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return null', function(){
        expect(sayHello()).not.toBe(null);
    });
    it('should return a number when called', function(){
        expect(typeof sayHello(2.3)).toBe('number');
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should not be undefined', function(){
        expect(isFive()).not.toBe(undefined);
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return "true" when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return "true" when passed "5"', function () {
        expect(isFive("5")).toBe(true);
    });
})

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should not be undefined', function(){
        expect(isEven()).not.toBe(undefined);
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return a true when executed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return a true when executed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return a false when executed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return a false when executed', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return a true when executed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return a false when executed', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with boolean input true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called with boolean input false', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when no input', function () {
        expect(isEven()).toBe(false);
    });
})



describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should not be undefined', function(){
        expect(isVowel()).not.toBe(undefined);
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when executed', function () {
        expect(isVowel("a" || "A" || "e" || "E" || "i" || "I" || "o" || "O" || "u" || "U")).toBe(true);
    });
    it('should return false when executed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when called with boolean input', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when called with boolean input', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when no input', function () {
        expect(isVowel()).toBe(false);
    });
})

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should not be undefined', function(){
        expect(add()).not.toBe(undefined);
    });
    it('should return a number', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return a number', function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return a number', function () {
        expect(add("5",6)).toBe(11);
    });
    it('should return a number', function () {
        expect(add("-4","10")).toBe(6);
    });
    it('should return NaN when executed, banana split', function () {
        expect(add("banana","split")).toBe('NaN');
    });
    it('should return NaN when executed, 2 and apples', function () {
        expect(add(2,"apples")).toBe('NaN');
    });
    it('should return NaN when executed with no argument', function () {
        expect(add()).toBe('NaN');
    });
})