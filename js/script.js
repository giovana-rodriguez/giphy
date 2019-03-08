// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
$.ajax({
  url: giphy,
method: "GET",
  success: function(response) {
  alert(response);
      
  }
  
});

