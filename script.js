function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        var li = document.createElement('li');
        li.innerHTML = taskText + ' <button onclick="completeTask(this)">Complete</button> <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
        document.getElementById('pending-tasks').appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(element) {
    var li = element.parentNode;
    li.classList.toggle('completed');
    var taskText = li.textContent.trim();
    li.innerHTML = taskText + ' <button onclick="uncompleteTask(this)">Undo</button>';
    document.getElementById('completed-tasks').appendChild(li);
}

function uncompleteTask(element) {
    var li = element.parentNode;
    li.classList.remove('completed');
    var taskText = li.textContent.trim().replace('Undo', '');
    li.innerHTML = taskText + ' <button onclick="completeTask(this)">Complete</button> <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
    document.getElementById('pending-tasks').appendChild(li);
}

function editTask(element) {
    var li = element.parentNode;
    var taskText = li.textContent.trim().replace('EditDeleteCompleteUndo', '');
    var newText = prompt('Edit task:', taskText);
    if (newText !== null && newText.trim() !== '') {
        li.textContent = newText.trim() + ' <button onclick="completeTask(this)">Complete</button> <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
    }
}

function deleteTask(element) {
    var li = element.parentNode;
    li.parentNode.removeChild(li);
}