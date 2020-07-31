

$('submit').on('click', function(e) {
    e.preventDefault(); 

    const $name = $("#name").val();
    const $email = $("#email").val();
    const $message = $("#message").val();
    
    var $form = $( this ),
    url = $form.attr( "action" );

    const data = {
        name: $name, 
        email: $email,
        message: $message
    };
    
 $.post(url, {data} );





});

