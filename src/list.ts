import {Employee} from './employee';

class List {
  employeeArray: Array<Employee>;
  constructor(employeeArray: Array<Employee>) {
    this.employeeArray = employeeArray;
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

  editEmployeeInfoById(id: number, key: string, newValue: string): void {
    let employee: Employee = this.findEmployeeById(id);
    if (employee) {
      (employee as any)[key] = newValue;
    }
  }

  promoteEmployeeById(
      id: number, newPosition: string, newAdditionalInfo: object): void {
    let employee: Employee = this.findEmployeeById(id);
    if (employee != undefined) {
      employee.position = newPosition;
      employee.additionalInfo = newAdditionalInfo;
    }
  }


  findEmployees(value: string, key?: string): List {
    let foundEmployeesList: List = new List([]);
    if (key) {
      for (const employee of this.employeeArray) {
        for (const prop in employee) {
          // это работает только внутри "верхних уровней класса"
          // надо сделать разверту доп.информации как обычных полей класса
          // либо придумать что-то еще
          if (prop === key && (employee as any)[prop] == value) {
            foundEmployeesList.addEmployee(employee);
          }
        }
      }
    }
    return foundEmployeesList;
  }

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