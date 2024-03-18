let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput; // error Type 'unknown' is not assignable to type 'string'
}

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };

  //   while (true) {}
}
generateError("Error occured", 500);
