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

   });
