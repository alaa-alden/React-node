require("babel-register")({
	presets:['react']
});
var express = require('express');
  var app = express();
app.use(express.static("public"));
app.use(require("./routes/index.jsx"));



var port=3000;
app.listen(port,function(){
	console.log("http://localhost:" + port)
});
