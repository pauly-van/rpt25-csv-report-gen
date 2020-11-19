const express = require('express');
const bodyParse = require('body-parser');
const convert = require('./middleware/conversion');
const app = express();
const port = 3000;

app.use(express.static('./client'));
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.get('/', (req, res)=>{
  res.status(200).res.render('/index');
});

app.post('/', (req, res)=>{
    res.status(200);
    convert.conversion(req);
});

app.listen(port, ()=>{
  console.log('Server is listening on http://localhost:3000');
});