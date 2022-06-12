import {Employee} from './employee';

class List {
  employeeArray: Array<Employee>;
  constructor() {
    this.employeeArray = [];
  }

  addEmployee(employee: Employee): void {
    this.employeeArray.push(employee);
  }

  deleteEmployee(employee: Employee) {
    if (typeof employee === null || typeof employee === undefined) {
      console.log('List of employees has no that vlaue');
    }
    delete this.employeeArray[this.employeeArray.indexOf(employee)];
  }

  promoteEmployeeById(
      id: number, newPosition: string, newAdditionalInfo: object): void {
    let employee: Employee = this.findEmployeeById(id);
    if (employee != undefined) {
      employee.position = newPosition;
      employee.additionalInfo = newAdditionalInfo;
    }
  }


  findEmployee() {}

  deleteEmployeeById(id: number): void {
    delete this.employeeArray[id];
  }

  // returns undefined if has no that value
  findEmployeeById(id: number): Employee {
    let employee = this.employeeArray[id];
    return this.employeeArray[id];
  }

  getEmployeeId(employee: Employee): number {
    if (typeof employee === null || typeof employee === undefined) {
      console.log('List of employees has no that vlaue');
    }
    const empl = this.employeeArray[this.employeeArray.indexOf(employee)];
    return empl.id;
  }

  employeesList(): void {  // limit: number|null|undefined) {
    for (let employee of this.employeeArray) {
      if (employee != undefined) {
        console.log(employee.personInfo(), '\n');
      }
    }
  }
}

export {List};