const express = require('express');
const bodyParse = require('body-parser');
const convert = require('./middleware/conversion');
const fs = require('fs');
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
    fs.writeFile('./client/people.csv', convert.conversion(req), (err)=>{
      if(err){
        res.status(500).send('Something Went Wrong');
      }
    });
    res.sendFile(__dirname+'/client/people.csv', (err)=>{
      if(err) throw Error;
    })
});

app.listen(port, ()=>{
  console.log('Server is listening on http://localhost:3000');
});