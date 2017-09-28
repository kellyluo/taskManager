'use strict';
module.exports = function(app) {
  var taskManager = require('../controllers/taskManagerController');

  // todoList Routes
  app.route('/tasks')
    .get(taskManager.listAllTasks)
    .post(taskManager.createTask);


  app.route('/tasks/:taskId')
    .get(taskManager.readTask)
    .put(taskManager.updateTask)
    .delete(taskManager.removeTask);
};