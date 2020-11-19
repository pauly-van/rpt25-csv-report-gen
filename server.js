const express = require('express');
const bodyParse = require('body-parser');
const { appendFile } = require('fs');
const app = express();
const port = 3000;

app.use(express.static('./client'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
  res.status(200).res.render('/index');
});

app.post('/', (req, res)=>{
    console.log(req.body);
});

app.listen(port, ()=>{
  console.log('Server is listening on http://localhost:3000');
});