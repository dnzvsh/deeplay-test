import {Director, Manager} from '../src/employees';

const managerMac = new Manager('John Grey', 67, 'male', 'MacDonalds');

const directorAmazon = new Director('Jeffrey Preston', 68, 'male', 'Amazon');

test('Manager getInfo', () => {
  const managerInfo: string = managerMac.getInfo();

  expect(managerInfo).toBe(`fullName: John Grey
age: 67
sex: male
position: manager
subdivision: MacDonalds`);
});

test('Director getInfo', () => {
  const directorInfo: string = directorAmazon.getInfo();

  expect(directorInfo).toBe(`fullName: Jeffrey Preston
age: 68
sex: male
position: director
company: Amazon`);
});