import {List} from '../src//list';
import {Employee} from '../src/employee';

const john = new Employee(
    'John Grey', 67, 'male', 'Consultant', {subdivision: 'Relationship'});

const joanne = new Employee(
    'J.K. Rowling', 45, 'female', 'Writer', {subdivision: 'Fantasy'});

const roma = new Employee(
    'Roman Yaroshev', 23, 'male', 'Student',
    {subdivision: 'SibSUTIS', department: 'EVM'});

test('Add employees to the list', () => {
  const factory = new List([]);

  factory.addEmployee(john);
  factory.addEmployee(joanne);
  factory.addEmployee(roma);

  expect(factory.employeeArray.length).toBe(3);
});