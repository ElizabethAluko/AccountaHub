import React from 'react';


const Task = ({ task, handleStatusChange, handleDeleteTask }) => {
  const { title, description, status, dueDate } = task;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-blue-500">{status}</p>
      <p className="text-gray-500">{dueDate}</p>
      <div className="mt-4">
        <button onClick={() => handleStatusChange(task)} className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
          Mark as Completed
        </button>
        <button onClick={() => handleDeleteTask(task)} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 ml-2">
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default Task;
