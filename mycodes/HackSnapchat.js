var username = "chatgp";
var password = "buddyassistant";

try {
    if (username !== "chatgpt") {
        throw "Invalid username";
    }
    else if (password !== "buddyassistant") {
        throw "Invalid password";
    }
    else {
        console.log("Welcome, " + username);
    }
}

catch (err) {
    console.log("Error!", err);
}