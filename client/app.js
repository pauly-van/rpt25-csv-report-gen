const postURL = 'http://localhost:3000/';
const ajaxData = {};

$('#submit').on('click', (event)=>{
  event.preventDefault();
  ajaxData.json = $('#jsonPost').val();
  $.ajax({
    type: "POST",
    url: postURL,
    data: ajaxData,
    dataType: "json",
    success: ()=>console.log('Yippeee!')
  })
});