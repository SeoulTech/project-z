// email subscriptions (google spreadsheets)
$('#subscribe').submit(function(event) {

  event.preventDefault();

  // i use the always function because the post request is failing due to cross scripting browser blocks
  // the data still arrives magically in the google spreadsheet though

  $.post('https://docs.google.com/forms/d/1p4Hk3LKLK6NqPSrxlSXbQdoo-ndSJZ0MmWFpgiHbMNY/formResponse', {

    'entry.1929687656': $('#email').val()

  }).always(function() {

    alert('Thanks! We will keep you up to date.');
    $('#subscribe')[0].reset();

  });

});