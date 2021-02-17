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

    $("#pwd").keyup(function(){
  	if($("#pwd").val()=="")
  	{
  		$("#conf_pwd").val('');
  		$("#CheckPasswordMatch").html("");
  	}
      var password = /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@])(?!.*[iIoO])\S{6,12}$/;
      var passwordval = $("#pwd").val();
  if(!password.test(passwordval)) {
  	//alert("parth");
    $("#pass_val").html("Must contain at least one number and one uppercase and lowercase letter,special character and  at least 8 or more characters");
  }
  else{
$("#pass_val").html("");
     
     }
  });

$("#conf_pwd").keyup(function(){
        var password = $("#pwd").val();
        var confirmPassword = $("#conf_pwd").val();
        if (password != confirmPassword)
            {
            	$("#CheckPasswordMatch").css({
            	"color": "red",
            });
            $("#CheckPasswordMatch").html("Passwords does not match!");
            }
        else
        {
            $("#CheckPasswordMatch").html("Passwords match.");
            $("#CheckPasswordMatch").css({
            	"color": "green",
            });
            

        }

  });

   });
