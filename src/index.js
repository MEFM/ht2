const personRoutes = require('./routes/routes');
var express = require('express')
//const bodyParser = require('body-parser')
var app = express();
const cors = require('cors')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use(personRoutes)

app.listen(port,function(){
    console.log("Listening on port ",port)
})
