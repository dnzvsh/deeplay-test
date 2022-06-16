abstract class Person {
  fullName: string;
  age: number;
  sex: string;
  position: string;

  constructor(fullName: string, age: number, sex: string) {
    this.fullName = fullName;
    this.age = age;
    this.sex = sex;

    this.position = '';
  }

  getInfo(): string {
    const infoString: string = `full name: ${this.fullName}\nage: ${
        this.age}\nsex: ${this.sex}\nposition: ${this.position}\n`;

    return infoString;
  }
}


class Manager extends Person {
  subdivision: string;

  constructor(fullName: string, age: number, sex: string, subdivision: string) {
    super(fullName, age, sex);
    this.position = 'manager';
    this.subdivision = subdivision;
  }

  getInfo(): string {
    const employeeBaseInfo: string = super.getInfo();
    return employeeBaseInfo + `subdivision: ${this.subdivision}`;
  }
}

class Director extends Person {
  company: string;

  constructor(fullName: string, age: number, sex: string, company: string) {
    super(fullName, age, sex);
    this.position = 'director';
    this.company = company;
  }

  getInfo(): string {
    const employeeBaseInfo: string = super.getInfo();
    return employeeBaseInfo + `company: ${this.company}`;
  }
}

class Worker extends Person {
  managersFullName: string;

  constructor(
      fullName: string, age: number, sex: string, managersFullName: string) {
    super(fullName, age, sex);
    this.position = 'worker';
    this.managersFullName = managersFullName;
  }

  getInfo(): string {
    const employeeBaseInfo: string = super.getInfo();
    return employeeBaseInfo + `manager's full name: ${this.managersFullName}`;
  }
}


class Controller extends Person {
  responsibility: string;

  constructor(
      fullName: string, age: number, sex: string, responsibility: string) {
    super(fullName, age, sex);
    this.position = 'controller';
    this.responsibility = responsibility;
  }

  getInfo(): string {
    const employeeBaseInfo: string = super.getInfo();
    return employeeBaseInfo + `responsibility: ${this.responsibility}`;
  }
}

export {Manager, Director, Worker, Controller, Person};
