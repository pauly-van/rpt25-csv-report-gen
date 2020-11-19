const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client'));

app.get('/', (req, res)=>{
  res.status(200).res.render('/index');
});

app.post('/', (req, res)=>{
  console.log(req.body);
});

app.listen(port, ()=>{
  console.log('Server is listening on http://localhost:3000');
});