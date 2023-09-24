  /*
	WEB 303 Assignment 2 - jQuery
	Dristi Khondkar, ID:0811195....
*/

  
  
  $(function() {                                     // shorthand function for .ready() call
  $("#prospect").on(click, function() {  
   console.log("Prospect link was clicked");
  request(); 
                            
  });

  $("#convert").on(click, function() {  
    console.log("convert link was clicked");
   request1(); 
  });

  $("#retain").on(click, function() {  
    console.log("Retain link was clicked");
   request2(); 
  });
});

function request() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'prospect.html', true);

  xhr.onload = function() {
    if (xhr.status ===200) {
       $('#content').fadeOut('fast', function() {
       $('#content').html(xhr.responseText);
       $('#content').fadeIn('fast');
       });

    }
 }
   xhr.send();
  };

function request1(){
  var xhr1 = new XMLHttpRequest();
  xhr1.open('GET', 'convert.html', true);

  xhr1.onload = function() {
    if (xhr1.status ===200) {
       $('#content').fadeOut('fast', function() {
       $('#content').html(xhr1.responseText);
       $('#content').fadeIn('fast');
       });

    }
 }
   xhr1.send();
  };
 
  function request2(){
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'retain.html', true);
  
    xhr2.onload = function() {
      if (xhr2.status ===200) {
         $('#content').fadeOut('fast', function() {
         $('#content').html(xhr2.responseText);
         $('#content').fadeIn('fast');
         });
  
      }
   }
     xhr2.send();
    };


