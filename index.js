const accountSid = 'ACCOUNT SID';
const authToken = 'AUTH TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Node.js & Twilio API is very easy to use.',
     from: "Your Trail/Premium Twilio's Phone Number",
     to: 'The Phone Number You Intend To Send Message Body To'
   })
  .then(message => console.log(message.sid));