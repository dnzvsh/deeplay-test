abstract class Person {
  static id_: number;

  id: number;
  fullName: string;
  age: number;
  sex: string;
  position: string;

  constructor(fullName: string, age: number, sex: string) {
    this.fullName = fullName;
    this.age = age;
    this.sex = sex;

    this.position = '';

    this.id = Person.id_;
    Person.id_ += 1;
  }

  getInfo(): string {
    let infoString: string =
        `id: ${this.id}\nfullName: ${this.fullName}\nage: ${this.age}\nsex: ${
            this.sex}\nposition: ${this.position}\n`;

    return infoString;
  }
}

Person.id_ = 0;


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

export {Manager};