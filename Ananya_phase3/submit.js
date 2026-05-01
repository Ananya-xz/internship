document.getElementById("myForm").addEventListener("submit",function(event) {
    event.preventDefault();
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message");

    if(username==="" || email==="") {
        message.innerHTML="please fill all fields";
        message.style.color="orange";
    } else {
        message.innerHTML="Form submitted successfully!";
        message.style.color="green";
    }
});