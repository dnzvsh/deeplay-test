import {EmployeesList, Position} from '../src/employeeList';
import {Controller, Director, Manager, Worker} from '../src/employees';

const managerMac = new Manager('John Grey', 67, 'male', 'MacDonalds');

const directorAmazon = new Director('Jeffrey Preston', 68, 'male', 'Amazon');

const worker = new Worker('Alice Smith', 25, 'female', 'Chief Keef');

const controllerFinance = new Controller('Adam Douglas', 35, 'male', 'Finance');

const managerInfo: string = managerMac.getInfo();
test('Manager getInfo', () => {
  expect(managerInfo).toBe(`full name: John Grey
age: 67
sex: male
position: manager
subdivision: MacDonalds`);
});

const directorInfo: string = directorAmazon.getInfo();
test('Director getInfo', () => {
  expect(directorInfo).toBe(`full name: Jeffrey Preston
age: 68
sex: male
position: director
company: Amazon`);
});

const workerInfo: string = worker.getInfo();
test('Worker getInfo', () => {
  expect(workerInfo).toBe(`full name: Alice Smith
age: 25
sex: female
position: worker
manager's full name: Chief Keef`);
});

const controllerInfo: string = controllerFinance.getInfo();
test('Controller getInfo', () => {
  expect(controllerInfo).toBe(`full name: Adam Douglas
age: 35
sex: male
position: controller
responsibility: Finance`);
});


const list = new EmployeesList();
const workerId = list.addEmployee(worker);
list.addEmployee(directorAmazon);
const managerId = list.addEmployee(managerMac);
list.addEmployee(controllerFinance);

const listSizeAdd = list.size;
test('EmployeesList add', () => {
  expect(listSizeAdd).toEqual(4);
});

const receivedWorkerId = list.getEmployeeId(worker);

test('EmployeesList getEmployeeId', () => {
  expect(receivedWorkerId).toBe(workerId);
});

list.deleteEmployeeById(managerId);

const listSizeDelete = list.size;
test('EmployeesList delete', () => {
  expect(listSizeDelete).toEqual(3);
});

list.editEmployeeById(workerId, 'managersFullName', 'Peter Parker');

const workerNewInfo = list.getEmployeeById(workerId)?.getInfo();
test('EditEmployeeById', () => {
  expect(workerNewInfo).toBe(`full name: Alice Smith
age: 25
sex: female
position: worker
manager's full name: Peter Parker`);
});


list.promoteEmployeeById(workerId, Position.Manager, 'Photographers');
const PromotedWorkerToManagerInfo = list.getEmployeeById(workerId)?.getInfo();

test('PromoteEmployeeById', () => {
  expect(PromotedWorkerToManagerInfo).toBe(`full name: Alice Smith
age: 25
sex: female
position: manager
subdivision: Photographers`);
});

list.addEmployee(new Manager('Timothy Burton', 63, 'male', 'Photographers'));
const managersArr = list.getEmployeesByPosition(Position.Manager);
const numberOfManagers = managersArr.length;

test('getEmployeesByPosition', () => {
  expect(numberOfManagers).toBe(2);
});

const photographersArr =
    list.getEmployeesByProperty('subdivision', 'Photographers');
const numberOfPhotographers = photographersArr.length;

test('getEmployeesByProperty', () => {
  expect(numberOfPhotographers).toBe(2);
});
