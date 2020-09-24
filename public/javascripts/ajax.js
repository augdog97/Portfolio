/*
Jquery Ajax walk through
1. on click of submit button
2. take ids of inputs and save value to variables
3. put variables in object for easy access
4. make an ajax post request 
*/




$('#contact').on('submit', function(e) {
    e.preventDefault(); 

    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    
    

    const data = {
        name: name, 
        email: email,
        message: message
    };
    
    $.ajax({
        type: "POST", // HTTP method POST or GET
        url: "/contact", //Where to make Ajax calls
        dataType: "json", // Data type, HTML, json etc.
        contentType: "application/json", // Need this to send proper data to server
        data: JSON.stringify(data), //Form variables
        success: function(sucess) {
            alert("Email has sent");
           
        }
    });
    /* redirects user to link after the form submits */ 
    window.location.assign('/contact:success');
}); 


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();