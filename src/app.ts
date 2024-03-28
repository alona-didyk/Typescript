type Admin = {
  name: string;
  priviledge: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "max",
  priviledge: ["create server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// type guard
type Universal = Combinable & Numeric;

// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);

//optional chaining
const fetchUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};
console.log(fetchUserData?.job?.title);

// nullish coalescing
const userInput = null;

const storedData = userInput ?? "Default";

// type UnknownEmployee = Admin | Employee;

// function printemployeeInformation(emp: UnknownEmployee) {
//   console.log("Name" + emp.name);
//   if ("priviledge" in emp) {
//     console.log("Priviledge" + emp.priviledge);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date" + emp.startDate);
//   }
// }

// printemployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a cargo...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo" + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// discriminated unions
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed" + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// userInputElement.value = "Hi there";

// index properties
// interface ErrorContainer {
// {email: 'Not a valid email, username: 'Must start with a character}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a capital character",
// };
