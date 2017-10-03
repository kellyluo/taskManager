var Task = require('./models/taskManagerModel');

function getTasks(res) {
    Task.find({}, function (err, tasks) {
        if (err)
            res.send(err);
        res.json(tasks);
    });
};

module.exports = function (app) {
    //list all tasks
    app.get('/tasks', function (req, res) {
        // get tasks from database
        getTasks(res);
    });

    //create task from AJAX request from Angular
    app.post('/tasks', function (req, res) {

        Task.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // list all tasks
            getTasks(res);
        });

    });

    // delete task
    app.delete('/tasks/:taskId', function (req, res) {
        Task.remove({
            _id: req.params.taskId
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTasks(res);
        });
    });


    app.get('*', function (req, res) {
        res.sendFile(__dirname + './../../public/index.html'); 
    });
};
