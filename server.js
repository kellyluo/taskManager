var express = require('express'),
app = express(),
port = process.env.PORT || 3030,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Taskdb', {useMongoClient: true});

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

require('./api/taskManagerRoutes.js')(app)
app.listen(port);

console.log('task manager API server started on: ' + port);
