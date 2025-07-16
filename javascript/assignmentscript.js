const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', (e) => {
    console.log(e);
    alert('alert');
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.background = 'green';
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.background = 'orange';
});

const form = document.getElementById('todo-form');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const keyInput = document.getElementById('keyInput');

form.addEventListener('submit', e => {
    e.preventDefault();
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = '';
});
const keyLog = document.getElementById('keyLog');
document.addEventListener("keypress", (e) => {
    keyLog.textContent = "You pressed: " + e.key;
});
