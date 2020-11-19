var xhr = new XMLHttpRequest();

$('#submit').on('click', ()=>{
  let jsonData = document.getElementById('jsonD').value;
  console.log(jsonData);
  xhr.open('POST',
  'http://localhost:3000', true);
  xhr.getResponseHeader('Content-type', 'application/json');
  xhr.send(jsonData);
});