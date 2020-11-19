const express = require('express');
<<<<<<< HEAD
const bodyParse = require('body-parser');
const { appendFile } = require('fs');
=======
>>>>>>> a7b4e0e7828a7e10241b18cbc0da4511bd2f3fe0
const app = express();
const port = 3000;

app.use(express.static('./client'));
<<<<<<< HEAD
app.use(express.urlencoded({extended: true}));
app.use(express.json());
=======
>>>>>>> a7b4e0e7828a7e10241b18cbc0da4511bd2f3fe0

app.get('/', (req, res)=>{
  res.status(200).res.render('/index');
});

app.post('/', (req, res)=>{
<<<<<<< HEAD
    console.log(req.body);
=======
  console.log(req.body);
>>>>>>> a7b4e0e7828a7e10241b18cbc0da4511bd2f3fe0
});

app.listen(port, ()=>{
  console.log('Server is listening on http://localhost:3000');
});