import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'inprogress', 'completed', 'pending'

  const fetchTasks = async () => {
    // Make an asynchronous request to fetch user tasks and update the 'tasks' state.
    // You'll need to replace this with your actual API request.
    try {
      const response = await fetch('http://localhost:5000/user/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks: ', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []); // Fetch tasks when the component mounts

  const handleStatusChange = async (taskId, newStatus) => {
    // Handle changing the status of a task and update the 'tasks' state.
    // You'll need to implement this functionality.
  };

  const handleDeleteTask = async (taskId) => {
    // Handle deleting a task and update the 'tasks' state.
    // You'll need to implement this functionality.
  };

  return (
    <div>
      <div className="bg-blue-200 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold mb-4">Task List</h2>
        <div className="mb-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="all">All</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        {filter === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              // Map tasks to components or cards for display
        
	{tasks.map((task) => (
  <div
    key={task._id} // Use a unique identifier as the key
    className="bg-white p-4 rounded-lg shadow-md mb-4"
  >
    <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
    <p className="text-gray-600 mb-2">{task.description}</p>
    <p className="text-gray-700 mb-2">Due Date: {task.dueDate}</p>
    <div className="mb-2">
      <strong>Status: {task.status}</strong>
      <select
        value={task.status}
        onChange={(e) => handleStatusChange(task._id, e.target.value)}
        className="ml-2 p-1 border rounded-md"
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
    <button
      onClick={() => handleDeleteTask(task._id)}
      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
    >
      Delete Task
    </button>
   </div>
  ))}
  </div>
)}
	{/* You can add similar conditional rendering for other filter options */}
      </div>
     <AddTask />
    </div>
  );
};

export default TaskList;
