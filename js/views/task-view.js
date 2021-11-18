// код, который работает с компонентами (отрисовка шаблонов)

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

// функция, которая создаём отдельное представление
export const createView = () => {
  let element = null;
  let callback = {};

  // функция, которая возвращает разметку компонента
  const getTemplate = ({id, title, isDone}) => {
    return `
    <li class="task ${isDone ? 'task--complete' : ''}">
      <label for=${id}>${title}</label>
      <input id="${id}" type="checkbox" ${isDone ? 'checked' : ''}>
    </li>`;
  }

  // функция для удаления элемента
  const removeElement = () => {
    const taskElement = getElement();

    taskElement.querySelector('input')
      .removeEventListener('click', callback.completeButtonClick);

    element = null;
    callback = {};
  }

  // функция для возвращения элемента; нужна будет, чтобы сохранять ссылку на элемент
  const getElement = (task) => {
    if (!element) {
      element = createElement(getTemplate(task));
    }

    return element;
  };

  // функция, которая подвязывает обработчики
  const bindListeners = (completeButtonHandler) => {
    const taskElement = getElement();
    taskElement.querySelector('input')
      .addEventListener('click', completeButtonHandler);

    callback.completeButtonClick = completeButtonHandler;
  }

  return {
    removeElement,
    bindListeners,
    getElement,
  };
};
