import {EmployeesList, Position} from './employeeList';
import {Controller, Director, Manager, Worker} from './employees';

const {prompt} = require('inquirer');

const lookAtEmployeeList = 'Look at the list if employees';
const addEmployee = 'Add new Employee';
const deleteEmployee = 'Delete employee';
const editEmployee = 'Edit employee info';
const promoteEmployee = 'Promote employee';
const employeesSelection = 'Make a selection of employees';

const list = new EmployeesList();

const createNewPerson = (ans: {
  position: Position; fullName: string; age: number; sex: string;
  additionalInfo: string;
}) => {
  if (ans.position === Position.Manager) {
    return new Manager(ans.fullName, ans.age, ans.sex, ans.additionalInfo);
  }
  if (ans.position === Position.Director) {
    return new Director(ans.fullName, ans.age, ans.sex, ans.additionalInfo);
  }
  if (ans.position === Position.Worker) {
    return new Worker(ans.fullName, ans.age, ans.sex, ans.additionalInfo);
  }
  if (ans.position === Position.Controller) {
    return new Controller(ans.fullName, ans.age, ans.sex, ans.additionalInfo);
  }
};

const collectInfoAboutEmployee = async () => {
  return await prompt([
    {
      name: 'fullName',
      message: 'Enter info about employee.\nFull name: ',
      default: 'James Louis Johnson',
    },
    {type: 'number', name: 'age', message: 'Age: ', default: 23},
    {
      type: 'list',
      name: 'sex',
      message: 'Sex: ',
      choices: ['male', 'female'],
    },
    {
      type: 'list',
      name: 'position',
      message: 'Position: ',
      choices: [
        Position.Worker,
        Position.Manager,
        Position.Controller,
        Position.Director,
      ],
    },
    {
      name: 'additionalInfo',
      message: 'Additional info: ',
    },
  ]);
};


const promptForPromote = async () => {
  return await prompt([
    {
      type: 'rawlist',
      name: 'position',
      message: 'Choose new position for employee: ',
      choices: [
        Position.Worker,
        Position.Manager,
        Position.Controller,
        Position.Director,
      ],
    },
    {
      name: 'additionalInfo',
      message: 'Enter new additional info: ',
    },
  ]);
};

const promptForEdit = async () => {
  return await prompt([
    {
      type: 'rawlist',
      name: 'key',
      message: 'What paramrter do you want to edit?',
      choices: ['fullName', 'age', 'sex', 'additionalInfo'],
    },
    {
      name: 'value',
      message: 'Enter new value: ',
    },
  ]);
};

const promptForId = async () => {
  return await prompt([{
    type: 'number',
    name: 'empoyeeId',
    message: 'Enter ID of employee: ',
  }]);
};

const promptIsIDKnown = async () => {
  return await prompt([{
    type: 'confirm',
    name: 'isIdKnown',
    message: 'Do you know employee\'s ID?',
    default: true,
  }]);
};

const promptStart = async () => {
  return await prompt([{
    loop: 'false',
    type: 'list',
    name: 'whatToDo',
    message: 'What do you want: ',
    choices: [
      lookAtEmployeeList,
      addEmployee,
      deleteEmployee,
      editEmployee,
      promoteEmployee,
      employeesSelection,
    ],
  }]);
};


const byPos = 'By position';
const byPropAndValue = 'By property and value';

const promptForSelectionType = async () => {
  return await prompt([{
    type: 'list',
    name: 'typeOfSelection',
    message: 'How to select?',
    choices: [
      'By position',
      'By property and value',
    ],
  }]);
};

const promptPositionForSelect = async () => {
  return await prompt([{
    type: 'list',
    name: 'position',
    message: 'Choose position for select: ',
    choices: [
      Position.Worker,
      Position.Controller,
      Position.Manager,
      Position.Director,
    ],
  }]);
};

const promptPropAndValueForSelect = async () => {
  return await prompt([
    {
      type: 'list',
      name: 'property',
      message: 'By what property do you want to select?',
      choices: [
        'fullName',
        'age',
        'sex',
        'position',
        'additionalInfo',
      ],
    },
    {
      name: 'value',
      message: 'What value thats property has?',
    },
  ]);
};


const main = async () => {
  const startPromise = await promptStart();
  const opType: string = startPromise.whatToDo;

  if (opType === lookAtEmployeeList) {
    for (const idEmpl of list.employeesMap) {
      console.log(idEmpl);
    }
  }

  let employeeId;
  if (opType === deleteEmployee || opType === editEmployee ||
      opType === promoteEmployee) {
    const isIDKnownPromise = await promptIsIDKnown();
    const isIdKnown = isIDKnownPromise.isIdKnown;
    if (isIdKnown) {
      const forIdPromise = await promptForId();
      employeeId = forIdPromise.empoyeeId;
    } else {
      const collectedInfoAboutEmployee = await collectInfoAboutEmployee();
      const person = createNewPerson(collectedInfoAboutEmployee);
      if (person) {
        employeeId = list.getEmployeeId(person);
      }
    }
  }

  if (opType === deleteEmployee) {
    list.deleteEmployeeById(employeeId);
  }

  if (opType === editEmployee) {
    const forEditPromise = await promptForEdit();
    list.editEmployeeById(employeeId, forEditPromise.key, forEditPromise.value);
  }

  if (opType === promoteEmployee) {
    const forPromotePromise = await promptForPromote();
    list.promoteEmployeeById(
        employeeId, forPromotePromise.position,
        forPromotePromise.additionalInfo);
  }

  if (opType === addEmployee) {
    const infoAboutEmployee = await collectInfoAboutEmployee();
    const person = createNewPerson(infoAboutEmployee);
    if (person) {
      list.addEmployee(person);
    }
  }

  if (opType === employeesSelection) {
    let personsList;
    const selectionType = await promptForSelectionType();
    const typeOfSelection = selectionType.typeOfSelection;
    if (typeOfSelection === byPos) {
      const positionForSelect = await promptPositionForSelect();
      const position = positionForSelect.position;
      personsList = list.getEmployeesByPosition(position);
    }
    if (typeOfSelection === byPropAndValue) {
      const propAndValueForSelect = await promptPropAndValueForSelect();
      const {property, value} = propAndValueForSelect;
      personsList = list.getEmployeesByProperty(property, value);
    }

    if (personsList) {
      for (const person of personsList) {
        console.log(person);
      }
    }
  }
  main();
};


export {main, createNewPerson, collectInfoAboutEmployee};
