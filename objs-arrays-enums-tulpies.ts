// object-type, not like object in js; we do not have key-value pairs

// tuple
// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sport", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin"); // push allows in tupils
// person.role[1] = 10; // error

// let favouriteActivities: string[];
// favouriteActivities = ["sport"];

// enum

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

// const person = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sport", "Cooking"],
//   role: Role.ADMIN,
// };

// console.log(person);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase()); // because ts knows there are type string in []
//   console.log(hobby.map) // Property 'map' does not exist on type 'string'. !!!ERROR!!!
// }

// if (person.role === Role.AUTHOR) {
//   console.log("is author");
// }
