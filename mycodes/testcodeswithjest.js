const concatStrings = require("./testcode"); // Import function

test("Concatenates two strings correctly", () => {
    expect(concatStrings("abc", "def")).toBe("abcdef");
});

test("Concatenates numbers as strings", () => {
    expect(concatStrings(1, 2)).toBe("12");
});
