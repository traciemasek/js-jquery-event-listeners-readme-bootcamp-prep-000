//define functions here
function getIt() {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function() {
    if(keydown.value)
  })
}


$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
