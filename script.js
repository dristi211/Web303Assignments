/*
	WEB 303 Assignment 1 - jQuery
	Dristi Khondkar, ID:0811195....
*/

//$(document).ready(function(){ // This is the function that checks the doucment is ready to work with
$(function() {
    // Handler for .ready() called.
  
   $("#yearly-salary, #percent").on('change',function(){  // I used change() event instead of keyup() is because if a user inputs a value using autofill, it will not fire the keyup() event.
      amountCalculation() ;
   });

});

function amountCalculation() {
    var salary = parseFloat($("#yearly-salary").val() ); //for validity 
    var percent = parseFloat($("#percent").val());
    var result = (salary * percent)/100;

    $('#amount').html("$" + result.toFixed(2));

};
