document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = ''; // Clear the input after adding the task
        }
    });
});
