const User = require('../models/user');

// Create a new task for a specific user
exports.createTaskForUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newTask = req.body;
    user.tasks.push(newTask);
    await user.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error creating a task for the user' });
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

    const tasks = user.tasks;
    res.status(200).json(tasks);
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
    res.status(204).end(); // No content
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task for the user' });
  }
};
