class Employee {
  static id_: number;

  id: number;
  fullName: string;
  age: number;
  sex: string;

  position: string;
  additionalInfo: any;


  constructor(
      fullName: string, age: number, sex: string, position: string,
      additionalInfo: object) {
    this.fullName = fullName;
    this.age = age;
    this.sex = sex;
    this.position = position;
    this.additionalInfo = additionalInfo;
    this.id = Employee.id_;
    Employee.id_ += 1;
  }

  personInfo(): string {
    let infoString: string =
        `Employee ID: ${this.id}\nFull name: ${this.fullName}\nAge: ${
            this.age}\nSex: ${this.sex}\nPosition: ${this.position}\n`;

    for (const key of Object.keys(this.additionalInfo)) {
      infoString = infoString + key + ': ' + this.additionalInfo[key] + '\n';
    }

    return infoString;
  }
}

Employee.id_ = 0;


export {Employee};