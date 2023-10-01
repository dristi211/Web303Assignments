/*
	WEB 303 Assignment 3 - jQuery
	Dristi Khondkar, ID:0811195....
*/

 
 
function fetchFromJSON() {     // shorthand function for .ready() call
  $.getJSON("team.json", function(data) {
      console.log( "success" );
    showTeam(data);
  });
} 

function fetchFromAjax() {
  $.ajax({
    url: "team.json",
    type: "GET",
    beforeSend: function() {
      $('#team').text("Loading...");
    },
    success: function(data, text) {
      setTimeout(function() { // This is for bonus part
        showTeam(data);
      }, 3000); // delay of 3 seconds
    },
    error: function(request, status, error) {
     $('#team').text("Error: Content could not be retrieved.");
     alert(request.responseText);
     console.log( "fail to load" );
    }
  });
}
function showTeam(data) {
  $('#team').empty(); // clear the div content

  $.each(data, function(key, value) {
    $('#team').append("<h2>" + value.name + "</h2>");
    $('#team').append("<h5>" + value.position + "</h5>");
    $('#team').append("<p>" + value.bio + "</p>");
  });
}

// call the ready function one of them fetchFromJSON() or fetchFromAjax()
$(document).ready(function() {
  
  //fetchFromJSON();
  
   fetchFromAjax();
});

