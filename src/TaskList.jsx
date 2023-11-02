import React, { useEffect, useState } from 'react';

function TaskList(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
          if (message && message.tasks) {
            const receivedTasks = message.tasks;
            setTasks(receivedTasks);
          }
        });
      }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );

}

export default TaskList
