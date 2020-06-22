function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(email.value)) 
    {
    alert("The email field has an invalid entry");
    }
}

function submitFunction() {
    var fnamevalidate = document.getElementById("fname");
    var lnamevalidate = document.getElementById("lname");
    var emailvalidate = document.getElementById("Email");


    if (fnamevalidate.value == ""||lnamevalidate.value == ""||emailvalidate.value == false)
        {
            alert("A required field is missing");
        }
    else {
            confirm("Are you sure you want to submit?");
        }
    }