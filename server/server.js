var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(express.static(__dirname + '/../dist/bootstrap-portfolio'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 7100;

app.listen(port, function () {
    console.log("Now listening to port number:", port);
})