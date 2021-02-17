$(document).ready(function(){
  $("#email").keyup(function(){
    var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     var emailaddressVal = $("#email").val();
  if(!regex.test(emailaddressVal)) {
  	//alert("parth");
    $("#email_val").html("enter proper email id");
  }else{

$("#email_val").html("");
     
     }
  });
  
  $("#phone").keyup(function(){
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      var phoneVal = $("#phone").val();
  if(!phoneno.test(phoneVal)) {
  	//alert("parth");
    $("#phone_val").html("enter valid phone number");
  }else{

$("#phone_val").html("");
     
     }
  });


   });
