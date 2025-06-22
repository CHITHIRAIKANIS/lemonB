const express = require('express');
const { body } = require('express-validator');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getTasks);
router.post('/', [
  body('taskName').notEmpty(),
  body('dueDate').notEmpty()
], createTask);

router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
