var twilio = require('twilio');

var accountSid = 'ACd07fa19be220015c1f623bc38c1785e7';
var authToken = '78b4e06ced50c8cc150dbccbf0880ab9';
var client = new twilio.RestClient(accountSid, authToken);

// Pass in parameters to the REST API using an object literal notation. The
// REST client will handle authentication and response serialzation for you.
client.sms.messages.create({
    to:'+19162218736',
    from:'+12097819195',
    body:'Testing text message capabilities for app!'
}, function(error, message) {
    // The HTTP request to Twilio will run asynchronously. This callback
    // function will be called when a response is received from Twilio
    // The "error" variable will contain error information, if any.
    // If the request was successful, this value will be "false"
    if (!error) {
        // The second argument to the callback will contain the information
        // sent back by Twilio for the request. In this case, it is the
        // information about the text messsage you just sent:
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
 
        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('Oops! There was an error.');
    }
});