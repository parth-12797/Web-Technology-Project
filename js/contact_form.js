function myFuction() {
       var form = document.getElementById("form");
       var email = document.getElementById("email").value;
      var text = document.getElementById("text");
       var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        if(email.match(pattern))
            {
                form.classList.add("valid");
                form.classList.remove("valid");
                text.innerHTML = "valid email";
                text.style.color ="green";
            }
          else{
              
                form.classList.remove("valid");
                form.classList.add("valid");
                text.innerHTML = "invalid email";
                text.style.color ="red";
              }
  }    
