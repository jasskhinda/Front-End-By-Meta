var dailyexpenses = 10; // Start with 10 dollars

while (dailyexpenses >= 1) { // Keep running while there's at least 1 dollar left
    console.log("I have left now " + dailyexpenses + " dollars");
    dailyexpenses--; // Spend 1 dollar, decrease the counter
}

console.log("I only have 1 dollar left"); // Loop stops when dailyexpenses is less than 1
