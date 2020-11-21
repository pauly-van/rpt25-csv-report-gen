const express = require('express');
const bodyParse = require('body-parser');
const convert = require('./middleware/conversion');
const fs = require('fs');
const { json } = require('body-parser');
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
    let jsonData = JSON.stringify(req.body.json).replace(/\\n|\\r\\n|\\r|\\/g, '');
<<<<<<< HEAD
    let jsonParseCut = jsonData.slice(1,jsonData.length-2);
    fs.writeFile('./client/people.csv', convert.conversion(jsonParseCut), (err)=>{
=======
    let cut = jsonData.slice(1,jsonData.length-2);
    fs.writeFile('./client/people.csv', convert.conversion(cut), (err)=>{
>>>>>>> b6b959d1df0777b4d70f1d4489ff6c352449962d
      if(err){
        res.status(500).send('Something Went Wrong');
      }
    });
});

app.listen(port, ()=>{
  console.log('Server is listening on http://localhost:3000');
});