'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

function listAllTasks(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

function createTask(req, res) {
  var newTask = new Task(req.body);
  newTask.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

function readTask(req, res) {
  Task.findById({_id: req.params.taskId}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

function updateTask(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

function removeTask(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully removed' });
  });
};

module.exports {
	listAllTasks: listAllTasks,
	createTask: createTask,
	readTask: readTask,
	updateTask: updateTask,
	removeTask: removeTask
};
