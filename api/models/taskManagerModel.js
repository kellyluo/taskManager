'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// task table will contain a name and the date it was created
// also contains the status of the task (default value is pending for every task created)
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the task'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);