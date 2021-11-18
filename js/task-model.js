import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

// создаём хранилище задач и объект с методами для управления этим хранилищем
export const createModel = () => {

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

  const add = (title) => (tasks.push({
    id: nanoid(),
    title,
    isDone: false,
  }));

  const clear = () => { // можно было записать в одну строку как: (tasks = []);
    tasks = [];
  }

  const complete = (id) => {
    const existTask = tasks.find((task) => task.id === id);
    existTask.isDone = !existTask.isDone;
  }

  const getItems = () => tasks;

  return { // возвращает объект с методами
    add,
    clear,
    complete,
    getItems,
  };
};
