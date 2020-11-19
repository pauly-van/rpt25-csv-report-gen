<<<<<<< HEAD
var xhr = new XMLHttpRequest();

$('#submit').on('click', ()=>{
  let jsonData = document.getElementById('jsonD').value;
  console.log(jsonData);
  xhr.open('POST',
  'http://localhost:3000', true);
  xhr.getResponseHeader('Content-type', 'application/json');
  xhr.send(jsonData);
});
=======
$('#submit').on('click', ()=>{
    console.log('submitted');
});
>>>>>>> a7b4e0e7828a7e10241b18cbc0da4511bd2f3fe0
