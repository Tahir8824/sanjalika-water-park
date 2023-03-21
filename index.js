function registration(){
    var username = document.getElementById("username").value;
    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;
    var userCpassword = document.getElementById("userCpassword").value;


   
  
        console.log(username);
        console.log(useremail);
        console.log(userpassword);
        console.log(userCpassword);
        // console.log(userImage);

    if(username.length >3){
        if(useremail.length >3){
            if(userpassword.length >3){
                if(userCpassword.length >3){
                    if(userpassword == userCpassword){
                        localStorage.setItem("username",username);
                        localStorage.setItem("useremail",useremail);
                        localStorage.setItem("userpassword",userpassword);
                        localStorage.setItem("userpassword",userCpassword);
                       
                        
                        alert("account created")
                        window.location.href = "lloggin.html";

                    }else{
                        alert("password not matched");
                    }
                }else{
                    alert("Confirm password field is empty");

                }
            }else{
                alert("password field is empty")
            }
        }else{
            alert(" email must be fill ")

        }
    }else{
        alert("username is not fill correctly")
    }



    


}

function login(){
    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;
    

    var localEmail = localStorage.getItem("useremail");
    var localpassword = localStorage.getItem("userpassword");


    

    if(useremail.length>3){
        if(userpassword.length >3){
            if(useremail == localEmail && userpassword == localpassword){
               
                window.location.href = "booking.html";
            }else{
                alert("crediential is wrong")
            }
        }else{
            alert("password is not fill correctly");
        }
    }else{
        alert("email is not fill correctly");

    }
    
}

function book(){
    var useremail = document.getElementById("useremail").value;
    var userpassword = document.getElementById("userpassword").value;
    

    var localEmail = localStorage.getItem("useremail");
    var localpassword = localStorage.getItem("userpassword");
}