const express = require("express");
var app = express();

//Custom middleware to let us get the whole post body
app.use(function(req, res, next) {
  req.rawBody = '';
  req.setEncoding('utf8');

  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function() {
    next();
  });
});


app.get("/", (req, res) => {
	res.end("POST please");
});
app.post("/", (req, res) => {
	console.log("POST / - " + req.rawBody);
	res.end('{"actionResponse":"Hello World"}');
});

app.listen(8080, function() {
	console.log("Now listening on 8080")
	});
