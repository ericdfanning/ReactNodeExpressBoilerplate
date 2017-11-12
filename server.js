var express = require('express');
var app = express();
var browserify = require('browserify-middleware');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var port = 8000
app.set('port', port);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', port)
});


app.use(bodyParser.json());
app.use(cors());

// app.get('/bundle.js', function(req, res) {
// 	console.log('GOT HERE')
// })

app.get('/bundle.js', browserify('./react-client/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static(path.join(__dirname, './react-client')));

app.get('/', function(req, res) {
	console.log('******inside home get request*****')
})
