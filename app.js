var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput; // error Type 'unknown' is not assignable to type 'string'
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code,
    };
    //   while (true) {}
}
generateError("Error occured", 500);
