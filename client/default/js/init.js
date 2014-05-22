/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  document.getElementById('submit_button').onclick = function() {

  alert('Saving...');
  
  $fh.data({
      act: "save",
      key: "draft_21756_INS20140521144704",
      val: '{"id":"INS20140521144704","validate":false,"uuid":"F63E6923D8FF4EAB8302AB3FF48A9AD1","username":"m1crawley","userid":"21756","creationdate":"2014-05-21T13:47:04.126","completedate":"2014-05-21T13:47:04.126","DivisionId":0,"inspectionCategory":"1","inspectionType":0,"inspectionSource":0,"inspectionContract":"","gang":0,"people":[],"localArea":0,"Location":{"Label":"","Latitude":0,"Longitude":0,"MapVisible":true,"LatLongSet":false,"OSGridReference":"","HouseNumber":"","Road":"","Town":"","County":"","Country":null,"PostCode":""},"job":{"ordernumber":"","clientreference":"","noticereference":"","vehiclereference":"","worksdescription":"","highwayauthority":"","reinstatement":null,"jobtype":"","supervisor":""},"checkSheets":[]}'
    }, function() {
      alert('Success');
    }, function(msg, err) {
      alert('Fail: ' + JSON.stringify(err) + "/" + msg);
    });

/*
    alert("About to send.");

    $fh.send({
    to: 'brian.dooley@feedhenry.com',
    cc: 'donal.mcgee@gmail.com',
    subject: 'Hi There',
    body: 'This is a message.'
  }, function() {
    alert("message sent.");
  }, function(msg, err) {
    alert("Send failed. Error is " + msg);
  });
*/

};
});