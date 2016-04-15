var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var useragent = require('express-useragent');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(useragent.express());
var reqHeader = {
  'ipaddress': null,
  'language': null,
  'software': null
};
var timeStampRouter = require('./routes/timeStampRoute')(reqHeader);
app.use(express.static(__dirname + '/public'));
app.use('/', timeStampRouter);

app.listen(PORT, function () {
  console.log('Running on PORT: ' + PORT);
});

module.exports = app;
