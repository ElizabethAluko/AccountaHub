const User = require('../models/user');
const Task = require('../models/task');
const { io } = require('../server');
// const io = server.io;

// Create a new task for a specific user
exports.createTaskForUser = async (req, res) => {
    const userId = req.params.userId;
    try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newTaskData = req.body;
    const newTask = new Task(newTaskData);

    // Save the new task
    await newTask.save();

    // Add the new task's ObjectId to the user's tasks array
    user.tasks.push(newTask._id);

    // Save the user with the updated tasks array
    await user.save();

    // Emit a 'taskUpdate' event to notify clients about the task creation
    // io.emit('taskUpdate', { taskId: newTask._id, action: 'create', newTask: newTask });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: `${error}: Error creating a task for the user` });
  }
};

// Get all tasks for a specific user
exports.getTasksForUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Populate the tasks array with actual task data
    await user.populate('tasks').execPopulate();

    // Extract the populated tasks from the user
    const userTasks = user.tasks;

    res.status(200).json(userTasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks for the user' });
  }
};

exports.updateTaskForUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const taskId = req.params.taskId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const task = user.tasks.id(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update task properties
    task.set(req.body);

    await user.save();

    // For real life client side update
    io.emit('taskUpdate', { taskId: newTask._id, action: 'update' });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error updating task for the user' });
  }
};

// taskController.js
exports.deleteTaskForUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const taskId = req.params.taskId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const task = user.tasks.id(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Remove the task
    task.remove();

    await user.save();
    // Emit a 'taskUpdate' event to notify clients about the task deletion
    io.emit('taskUpdate', { action: 'delete', taskId: newTask._id });

    res.status(204).end(); // No content
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task for the user' });
  }
};
