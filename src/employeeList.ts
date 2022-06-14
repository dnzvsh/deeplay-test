import {Person} from './employees';

class EmployeesList {
  private id: number;
  private _employeesMap: Map<number, Person>;
  constructor() {
    this._employeesMap = new Map();
    this.id = 0;
  }

  get employeesMap(): Map<number, Person> {
    return this._employeesMap;
  }

  get size(): number {
    return this._employeesMap.size;
  }

  addEmployee(employee: Person): number {
    this._employeesMap.set(this.id, employee);
    return this.id++;
  }

  deleteEmployeeById(id: number): void {
    this._employeesMap.delete(id);
  }

  getEmployeeId(employee: Person): number|undefined {
    return [...this._employeesMap.keys()].find(
        (key) => this._employeesMap.get(key) === employee);
  }

  editEmployeeById(id: number, key: string, newValue: string): void {
    if ((this._employeesMap.get(id) as any)[key]) {
      (this._employeesMap.get(id) as any)[key] = newValue;
    }
  }

  getEmployeeById(id: number): Person|undefined {
    return this._employeesMap.get(id);
  }
}

export {EmployeesList};