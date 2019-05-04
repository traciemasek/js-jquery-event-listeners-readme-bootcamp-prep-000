//define functions here
function getIt() {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

function frameIt() {
  $('.tasty').on('load', () => {
    $('.tasty').css({ borderColor: 'red'})
  })
}

$(document).ready(function(){

// call functions here
  getIt();
});
