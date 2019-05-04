//define functions here
function getIt() {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', () => {
    $('.tasty').css({ borderColor: 'red'})
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
