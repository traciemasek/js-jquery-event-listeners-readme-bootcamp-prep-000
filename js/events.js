//define functions here
function getIt() {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    console.log("Did it load?");
    $('img').addClass('tasty')
  })
}

function pressIt() {
  
}


$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
