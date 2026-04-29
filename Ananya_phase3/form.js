document.getElementById("myForm").addEventListener("submit",function(event) {
    event.preventDefault();

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let message=document.getElementById("message");

    let valid=true;

    document.getElementById("nameError").innerHTML="";
    document.getElementById("passError").innerHTML="";


    message.innerHTML="";

    if(username=== "") {
        document.getElementById("nameError").innerHTML="Name is required";
        valid=false;
    }

    if(password==="") {
        document.getElementById("passError").innerHTML="Password is required";
        valid=false;
    } else if(password.length<6) {
        document.getElementById("passError").innerHTML="Minimum 6 characters";
        valid=false;
    }

    if(valid) {
        document.getElementById("message").innerHTML="login successful!";
        document.getElementById("message").style.color="green";
    }
});