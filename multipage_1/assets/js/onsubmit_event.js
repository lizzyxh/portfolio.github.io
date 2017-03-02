function sendContact(e) {
 // e.preventDefault();
  var valid;  
  valid = validateContact();
  if(valid) {
    var formData = {
      'name'              : $('input[name=name]').val(),
      'email'             : $('input[name=email]').val(),
      'subject'    : $('input[name=subject]').val(),
      'message'    : $('input[name=message]').val()
    };

    $.ajax({
      type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url         : 'email_form2.php', // the url where we want to POST
      data        : formData, // our data object
      //dataType    : 'json', // what type of data do we expect back from the server
      encode          : true
    })
    .done(function(){
      //fade in/fadeoutmethods $('#contact2').fadeout(); 
     $('#contact2').fadeOut("slow");
     $('#contact2').hide(); 
      //fade in/fadeoutmethods $('#success').fadein(); 
     $('.success').fadeIn(300);
     $('.success').css({"display": "block"}); //Is this format correct?
     //set the fields to clear post submit.
     $('input#name').val('');
     $('input#email').val('');
     $('input#subject').val('');
     $('textarea#message').val('');
     // Clear the form.doublecheck
    $('#name').val('');
    $('#email').val('');
    $('#subject').val('');
    $('#message').val('');
     });
    console.log('Validation Success');
  }
}

$("#contact2").submit(function(e){
  sendContact();
  return false;
   //e.preventDefault;
});

function validateContact() {
  var valid = true; 
  
  if(!$("#name").val()) {
    $("#name-info").html("This is a required field.");
    valid = false;
  }
  if(!$("#email").val()) {
    $("#email-info").html("This is a required field.");
    valid = false;
  }
  if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
    $("#email-info").html("Please enter a valid email address.");
    valid = false;
  }
  if(!$("#subject").val()) {
    $("#subject-info").html("This is a required field.");
    valid = false;
  }
  if(!$("#message").val()) {
    $("#message-info").html("This is a required field.");
    valid = false;
  }
  
  return valid;
}
