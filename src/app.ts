import {Employee} from './employee.js'
import {List} from './list.js'

const john = new Employee(
    'John Grey', 67, 'male', 'Consultant', {subdivision: 'Relationship'});

const joanne = new Employee(
    'J.K. Rowling', 45, 'female', 'Writer', {subdivision: 'Fantasy'});

const roma = new Employee(
    'Roman Yaroshev', 23, 'male', 'Student',
    {subdivision: 'SibSUTIS', department: 'EVM'});

const factory = new List([]);

factory.addEmployee(john);
factory.addEmployee(joanne);
factory.addEmployee(roma);

const foundEmployeesList = factory.findEmployees('male', 'sex');

console.log('\nOnly male employees:\n')
foundEmployeesList.employeesList();


console.log('\nEmployee List:\n')
factory.employeesList();
factory.deleteEmployee(roma);

const johnId = factory.getEmployeeId(john);

factory.promoteEmployeeById(
    johnId, 'Programmer', {company: 'Yandex', department: 'Backend'});

console.log('\nList after delete employee:\n')
factory.employeesList();