import React from 'react';


const Task = ({ key, userId, task, handleStatusChange }) => {
  const { _id, title, description, status, dueDate } = task;

  const handleDeleteTask = async (taskId) => {
    try {
      // Send API Delete Request
      const response = await fetch(`http://localhost:5000/task/${userId}/tasks/${taskId}`, {
	method: 'DELETE',
      });
      if (response.ok) {
        alert('Task is deleted Successfully');
      } else {
	const data = await response.json()

          alert(`Task failed to delete: ${data.error}`);
        }

    } catch (error) {
	alert('Error deleting task');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-blue-500">{status}</p>
      <p className="text-gray-500">{dueDate}</p>
      <div className="mt-4">
        <button onClick={() => handleStatusChange(task)} className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
          Edit
        </button>
        <button onClick={() => handleDeleteTask(_id)} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 ml-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
