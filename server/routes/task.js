const express = require('express');
const router = express.Router();

const { requireAuth } = require('../middlewares/authMiddleware');
const TaskController = require('../controllers/taskController');

// Route to get all tasks
router.get('/tasks', requireAuth, TaskController.getAllTasks);

// Route to create a new task
router.post('/tasks', requireAuth, TaskController.createTask);

// Route to get a task by ID
router.get('/tasks/:taskId', requireAuth, TaskController.getTaskById);

// Route to update a task by ID
router.put('/tasks/:taskId', requireAuth, TaskController.updateTask);

// Route to delete a task by ID
router.delete('/tasks/:taskId', requireAuth, TaskController.deleteTask);

// Route to get tasks by status
router.get('/tasks/status/:status', requireAuth, TaskController.getTasksByStatus);

module.exports = router;
