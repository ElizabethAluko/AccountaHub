import React, { useState } from 'react';
import Task from './Task';
import Modal from './Modal';
import AddTask from './AddTask';
import mockTasks from './mockTasks';

const TaskList = ({ tasks, handleStatusChange, handleDeleteTask, handleAddTask }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-4 bg-blue-200 rounded-lg shadow-lg">
      <button onClick={() => setModalOpen(true)} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Add Task
      </button>

      <div className="mt-4">
        {mockTasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              handleStatusChange={handleStatusChange}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} handleAddTask={handleAddTask}>
	<AddTask />
      </Modal>
    </div>
  );
};

export default TaskList;
