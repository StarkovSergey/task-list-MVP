import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

let tasks = [
  {
    id: nanoid(),
    title: 'take out the trash',
    isDone: false,
  },
  {
    id: nanoid(),
    title: 'study Git',
    isDone: true,
  },
];

const taskTemplateElement = //;

const mainElement = document.querySelector('.main');
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const clearTaskButtonElement = mainElement.querySelector('.clear-task-button');
const tasksListElement = mainElement.querySelector('.tasks');
