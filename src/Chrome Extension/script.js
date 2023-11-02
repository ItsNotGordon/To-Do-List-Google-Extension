document.addEventListener('DOMContentLoaded', function() {

    const addTaskButton = document.getElementById('addTaskButton')
    const taskInput = document.getElementById('taskInput')
    const taskList = document.getElementById('taskList')

    //create an item
    //have it appear under taskList

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim(); //trims spaces at beginning and end of string

        if (taskText !== '') { //if they actually entered text
            const taskItem = document.createElement('li')
            taskItem.textContent = taskText
            //taskItem = HTML object
            //taskText = string
            //textContent access's taskItem's string portion
            taskList.appendChild(taskItem)
            taskInput.value = '' //reset the input

            chrome.storage.sync.get({tasks : []}, function(data){
                let storedTasks = data.tasks
                storedTasks.push(taskText)
                chrome.storage.sync.set({tasks: storedTasks})
                chrome.runtime.sendMessage({ tasks: storedTasks }, function(response) {
                    console.log('Tasks sent to the React app');
                });
            })

        }
    })

    chrome.storage.sync.get({ tasks: [] }, function(data) {
        const storedTasks = data.tasks;
        storedTasks.forEach(function(taskText) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
        });
    });
})
