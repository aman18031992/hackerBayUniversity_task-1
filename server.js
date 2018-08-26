let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080;
let data;

app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({    
  extended: true
}));

app.get('/', function (req, res) {
   return res.status(200).json({status: 'success'})
});

app.get('/data', function (req, res) {
    return res.status(200).json({data});
});

app.post('/data', function (req, res) {
    data = req.body.data;
    return res.status(200).json({data});
});

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
});