import {Manager} from '../src/employees';

const managerMac = new Manager('John Grey', 67, 'male', 'MacDonalds');

test('Manager getInfo', () => {
  const managerInfo: string = managerMac.getInfo();

  expect(managerInfo).toBe(`id: 0
fullName: John Grey
age: 67
sex: male
position: manager
subdivision: MacDonalds`);
});