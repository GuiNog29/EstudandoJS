const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

btnTask.addEventListener('click', function () {
  if (!inputTask.value) return;

  createTask(inputTask.value);
});

inputTask.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

document.addEventListener('click', function (e) {
  const el = e.target;
  if (el.classList.contains('delete')) {
    el.parentElement.remove();
    saveTasks();
  }
});

function createTask(textInput) {
  const li = createLi();
  li.innerText = textInput;
  tasks.appendChild(li);
  createButtonDeleteTask(li);
  clearInput();
  saveTasks();
}

function createLi() {
  const li = document.createElement('li');
  return li;
}

function clearInput() {
  inputTask.value = '';
  inputTask.focus();
}

function createButtonDeleteTask(li) {
  li.innerText += ' ';
  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Delete';
  buttonDelete.setAttribute('class', 'delete');
  li.appendChild(buttonDelete);
}

function saveTasks() {
  const liTasks = tasks.querySelectorAll('li');
  const listTasks = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace('Delete', '').trim();
    listTasks.push(taskText);
  }
  const tasksJSON = JSON.stringify(listTasks);
  localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
  const tasks = localStorage.getItem('tasks');
  const listTasks = JSON.parse(tasks);

  for (let task of listTasks) {
    createTask(task);
  }
}
addSavedTasks();
