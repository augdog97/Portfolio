/*
Jquery Ajax walk through
1. on click of submit button
2. take ids of inputs and save value to variables
3. put variables in object for easy access
4. make an ajax post request 
*/




$('#submit').on('click', function(e) {
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

    
}); 