function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// let someValue: undefined

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult; // error because its void
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  // if we return value, the callback function will not do anything with it because we used void so it will be ignored
  //   return result
});
