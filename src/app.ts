class Department {
  // private id: string
  //   private name: string;
  // accessible only inside the class
  private employees: string[] = [];

  // shortcut
  // readonly - can not change
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  // this should always reffer to an instance that in based in this class
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Anna");

// accounting.employees[2] = "John"; // error because of private

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();
