// email subscriptions (google spreadsheets)
$('#subscribe').submit(function(event) {

  event.preventDefault();

  // i use the always function because the post request is failing due to cross scripting browser blocks
  // the data still arrives magically in the google spreadsheet though

  $.post('https://docs.google.com/forms/d/1Nb6UJxA-JS_k-6kU3gjQjtjfhO1z785k6b9msCR_c44/formResponse', {

    'entry_1469179455': $('#email').val()

  }).always(function() {

    alert('Thanks! We will keep you up to date.');
    $('#subscribe')[0].reset();

  })

});