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

const taskTemplateElement = document.querySelector('#task-template').content;

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
  const existTask = tasks.find((task) => task.id === id);
  existTask.isDone = !existTask.isDone;
}


const render = () => {
  const newFragment = document.createDocumentFragment();
  tasksListElement.innerHTML = '';

  tasks.forEach(({id, title, isDone}) => {
    const newTask = taskTemplateElement.cloneNode(true);

    if (isDone) {
      newTask.querySelector('li').classList.add('task--complete');
    }

    const labelElement = newTask.querySelector('label');
    labelElement.textContent = title;
    labelElement.htmlFor = id;

    const inputElement = newTask.querySelector('input');
    inputElement.id = id;
    inputElement.checked = isDone;

    inputElement.addEventListener('change', ({target}) => {
      completeTask(target.id);
      render();
    })

    newFragment.append(newTask);
  })

  tasksListElement.append(newFragment);
}

const addTaskButtonHandler = () => {
  const {value: newTaskTitle} = newTaskElement;

  if (newTaskTitle.trim() === '') {
    return;
  }

  addNewTask(newTaskTitle);
  render();
  newTaskElement.value = '';
  newTaskElement.focus();
}

const clearTaskButtonHandler = () => {
  clearTasks();
  render();
};

addTaskButtonElement.addEventListener('click', addTaskButtonHandler);
clearTaskButtonElement.addEventListener('click', clearTaskButtonHandler);

render();
