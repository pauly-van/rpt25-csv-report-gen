const postURL = 'http://localhost:3000/';
const ajaxData = $('#jsonPost').val();

$('submit').on('click', ()=>{
  $.ajax({
    type: "POST",
    url: postURL,
    data: data,
  })
});