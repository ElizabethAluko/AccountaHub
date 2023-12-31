import React, { useState } from 'react';

const AddTask = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Started');
  const [dueDate, setDueDate] = useState('');

    // Handle adding a task here (e.g., send the data to the server)
  const handleAddTask = async (event) => {
    event.preventDefault();
    // Create an object to hold the task data
    const newTask = {
      title,
      description,
      status,
      dueDate,
    };

  try {
    const response = await fetch(`http://localhost:5000/task/${userId}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
   if (response.ok) {
     // Task added successfully
     alert('Task added successfully');
     // Reset form fields
     setTitle('');
     setDescription('');
     setStatus('Not Started');
     setDueDate('');
   } else {
     // Handle errors, e.g., display an error message
       const data = await response.json();
       alert(`Task add error ${data.error}`);
    }

    } catch (error) {
    // Handle network errors or other issues
    alert(`Task add failed:, ${error}`);
    }
   };

  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 border rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="date"
          className="w-full p-2 border rounded-md"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Save Task
      </button>
    </div>
  );
};

export default AddTask;
