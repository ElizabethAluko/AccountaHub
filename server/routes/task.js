const express = require('express');
const router = express.Router();

const { requireAuth } = require('../middlewares/authMiddleware');
const taskController = require('../controllers/taskController');

// Route to get all tasks
router.post('/:userId/tasks', requireAuth, taskController.createTaskForUser);

// Route to create a new task
router.get('/:userId/tasks', requireAuth, taskController.getTasksForUser);

// Route to get a task by ID
//router.get('/tasks/:taskId', requireAuth, taskController.getTaskById);

// Route to update a task by ID
router.put('/:userId/tasks/:taskId', requireAuth, taskController.updateTaskForUser);

// Route to delete a task by ID
router.delete('/:userId/tasks/:taskId', requireAuth, taskController.deleteTaskForUser);

// Route to get tasks by status
// router.get('/tasks/status/:status', requireAuth, taskController.getTasksByStatus);

module.exports = router;
