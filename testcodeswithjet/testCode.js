// ✅ Define the function directly inside the test file
function concatStrings(a, b) {
    return String(a) + String(b);
}
 

// ✅ Jest test cases
test("Concatenates two strings correctly", () => {
    expect(concatStrings("abc", "def")).toBe("abcdef");
});

test("Concatenates numbers as strings", () => {
    expect(concatStrings(1, 2)).toBe("12");
});
