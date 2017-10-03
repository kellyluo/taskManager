var express = require('express'),
app = express(),
port = process.env.PORT || 3030,
mongoose = require('mongoose'),
//Task = require('./api/models/taskManagerModel'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Taskdb', {useMongoClient: true});

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json

require('./api/taskManagerRoutes.js')(app)
app.listen(port);

console.log('task manager API server started on: ' + port);
