class Department {
  // private id: string
  //   private name: string;
  // private - accessible only inside the class
  // protected - still not accessible from outside but accessible to childs
  protected employees: string[] = [];

  // shortcut
  // readonly - can not change
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  // static - to access without instantiating class
  // you can not access this from a non static parts
  // to access console.log(Department.fiscalYear)
  static createEmployee(name: string) {
    return { name: name };
  }

  // this should always reffer to an instance that in based in this class
  // to overwrite this method
  // all classess can share this method
  // abstract describe(this: Department): void;

  // console.log(`Department ${this.id}: ${this.name}`);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("Accounting Department" + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  // it will store an accounting department instance
  // private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  // to have only one instance of that class
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  // will check if we haave an instance
  // static getInstance() {
  //   if (AccountingDepartment.instance) {
  //     return this.instance;
  //   }
  //   this.instance = new AccountingDepartment("d2", []);
  // }

  describe() {
    console.log("Accounting Department" + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department("d1", "Accounting");

// accounting.addEmployee("Max");
// accounting.addEmployee("Anna");

// accounting.employees[2] = "John"; // error because of private

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();

// const accounting = new AccountingDepartment("d2", []);
// accounting.addReport("Something went wrong");
// accounting.printReports();

// const accounting = new AccountingDepartment.getInstance();
