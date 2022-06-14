import {Controller, Director, Manager, Person, Worker} from './employees';

enum Position {
  Controller = 'controller',
  Director = 'director',
  Manager = 'manager',
  Worker = 'worker'
}


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

  promoteEmployeeById(
      id: number, newPosition: Position, additionalInfo: string): void {
    const empl = this.getEmployeeById(id);

    if (!empl) return;

    this.deleteEmployeeById(id);

    if (newPosition === Position.Manager) {
      this._employeesMap.set(
          id, new Manager(empl.fullName, empl.age, empl.sex, additionalInfo));
    }
    if (newPosition === Position.Director) {
      this._employeesMap.set(
          id, new Director(empl.fullName, empl.age, empl.sex, additionalInfo));
    }
    if (newPosition === Position.Worker) {
      this._employeesMap.set(
          id, new Worker(empl.fullName, empl.age, empl.sex, additionalInfo));
    }
    if (newPosition === Position.Controller) {
      this._employeesMap.set(
          id,
          new Controller(empl.fullName, empl.age, empl.sex, additionalInfo));
    }
  }

  getEmployeesByPosition(pos: Position): Array<Person> {
    const emplsArr: Array<Person> = [];
    for (const empl of this._employeesMap.values()) {
      if (pos === empl.position) {
        emplsArr.push(empl);
      }
    }
    return emplsArr;
  }
}

export {EmployeesList, Position};