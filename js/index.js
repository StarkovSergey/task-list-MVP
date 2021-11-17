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

const taskTemplateElement =document.querySelector('#task-template').content;

const mainElement = document.querySelector('.main');
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const clearTaskButtonElement = mainElement.querySelector('.clear-task-button');
const tasksListElement = mainElement.querySelector('.tasks');

const addNewTask = (title) => (tasks.push({
  id: nanoid(),
  title,
  isDone: false,
}));

const clearTasks = () => { // можно было записать в одну строку как: (tasks = []);
  tasks = [];
}

const completeTask = (id) => {
  const existTask = task.find((task) => task.id === id);
  existTask.isDone = !existTask.isDone;
}
