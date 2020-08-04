//const { json } =  require("body-parser");
//var requirejs = require('requirejs');
//const { json } = require("body-parser");




$('#submit').on('click', function(e) {
    e.preventDefault(); 

    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    
    var $form = $( this ),
    url = $form.attr( "action", "/contact");

    const data = {
        name: name, 
        email: email,
        message: message
    };
    
    $.ajax({
        type: "POST", // HTTP method POST or GET
        url: "/contact", //Where to make Ajax calls
        dataType: "json", // Data type, HTML, json etc.
        data: JSON.stringify(data), //Form variables
        success: function() {
            return alert("Your Email has been sent");
        },
        error: function() {
            alert("Your Email has not sent. Try Again. ");
        }
    
    })

    
}); 