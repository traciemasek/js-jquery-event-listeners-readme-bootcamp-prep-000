//define functions here
function getIt() {
  $('p').on('click', () => {
    console.log("Hey!")
    alert("Hey!")
  })
}

$(document).ready(function(){

// call functions here
  getIt();
});
