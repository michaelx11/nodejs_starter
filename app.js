var express = require('express')

var app = express();
app.set('port', 8080);

var router = express.Router();

router.get('/', function(req, res) {
  res.send('<html><h1>HELLO</h1></html>');
});

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
