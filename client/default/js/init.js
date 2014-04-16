/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  document.getElementById('submit_button').onclick = function() {

    $fh.send({
    to: 'brian.dooley@gmail.com',
    subject: 'Hi There',
    body: 'This is a message.'
  }, function() {
    alert("message sent.")
  }, function(msg, err) {
    alert("Send failed. Error is " + msg)
  })
};
});