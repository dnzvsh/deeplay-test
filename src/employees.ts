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
    let infoString: string = `fullName: ${this.fullName}\nage: ${
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
    let employeeBaseInfo: string = super.getInfo();
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
    let employeeBaseInfo: string = super.getInfo();
    return employeeBaseInfo + `company: ${this.company}`;
  }
}

export {Manager, Director};