import {Director, Manager, Worker} from '../src/employees';

const managerMac = new Manager('John Grey', 67, 'male', 'MacDonalds');

const directorAmazon = new Director('Jeffrey Preston', 68, 'male', 'Amazon');

const worker = new Worker('Alice Smith', 25, 'female', 'Chief Keef');

test('Manager getInfo', () => {
  const managerInfo: string = managerMac.getInfo();

  expect(managerInfo).toBe(`full name: John Grey
age: 67
sex: male
position: manager
subdivision: MacDonalds`);
});

test('Director getInfo', () => {
  const directorInfo: string = directorAmazon.getInfo();

  expect(directorInfo).toBe(`full name: Jeffrey Preston
age: 68
sex: male
position: director
company: Amazon`);
});

test('Worker getInfo', () => {
  const workerInfo: string = worker.getInfo();

  expect(workerInfo).toBe(`full name: Alice Smith
age: 25
sex: female
position: worker
manager's full name: Chief Keef`);
});
