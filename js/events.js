//define functions here
function getIt() {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

function frameIt() {
  $('.tasty').on('load', () => {
    $('.tasty').css({ border: ''})
  })
}

$(document).ready(function(){

// call functions here
  getIt();
});
