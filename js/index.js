import { createModel } from './task-model.js';
import { createView } from './views/task-view.js';

const mainElement = document.querySelector('.main');
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const clearTaskButtonElement = mainElement.querySelector('.clear-task-button');
const tasksListElement = mainElement.querySelector('.tasks');

const taskModel = createModel();

const addTaskButtonHandler = () => {
  const {value: newTaskTitle} = newTaskElement;

  if (newTaskTitle.trim() === '') {
    return;
  }

  taskModel.add(newTaskTitle);
  render(taskModel.getItems());
  newTaskElement.value = '';
  newTaskElement.focus();
}

const clearTaskButtonHandler = () => {
  taskModel.clear();
  render(taskModel.getItems());
};

const render = (tasks) => {
  const newFragment = document.createDocumentFragment();
  tasksListElement.innerHTML = '';

  tasks.forEach((task) => {
    const newTaskView = createView(); // на каждой итерации создаём отдельный компонент.
    const newElement = newTaskView.getElement(task);

    newTaskView.bindListeners(({target}) => {
      taskModel.complete(target.id);
      newTaskView.removeElement();
      render(taskModel.getItems());
    });

    newFragment.append(newElement);
  })

  tasksListElement.append(newFragment);
}

addTaskButtonElement.addEventListener('click', addTaskButtonHandler);
clearTaskButtonElement.addEventListener('click', clearTaskButtonHandler);

render(taskModel.getItems());
