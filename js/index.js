import { createModel } from './models/task-model.js';
import { createPresenter } from './presenters/task-presenter.js';

const mainElement = document.querySelector('.main');
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const clearTaskButtonElement = mainElement.querySelector('.clear-task-button');
const tasksListElement = mainElement.querySelector('.tasks');

const taskModel = createModel();
const taskPresenter = createPresenter(tasksListElement, taskModel)


const addTaskButtonHandler = () => {
  const {value: newTaskTitle} = newTaskElement;
  newTaskElement.value = '';
  newTaskElement.focus();

  taskPresenter.addTask(newTaskTitle);
}

const clearTaskButtonHandler = () => {
  taskPresenter.clearTasks();
};

addTaskButtonElement.addEventListener('click', addTaskButtonHandler);
clearTaskButtonElement.addEventListener('click', clearTaskButtonHandler);

taskPresenter.render()
