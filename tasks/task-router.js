const express = require("express")

const Tasks = require("../helper")

const router = express.Router()

// return a list of all tasks in the database
router.get('/', (req, res) => {
    Tasks.getTasks()
      .then(tasks => {
        tasks.map(task => {
          task.task_completed = task.task_completed ==! false 
        })
        res.status(201).json(tasks);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
  });

  module.exports = router