// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({accessKeyId: "AKIARHTPA6FQUYPXZI5I",
    secretAccessKey: "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", region: 'us-east-1'});

// Create sendEmail params 
var params = {
  Destination: { /* required */
    CcAddresses: [
      'superpannah@gmail.com',
      /* more items */
    ],
    ToAddresses: [
      'superpannah@gmail.com',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 'alex_day64@yahoo.com', /* required */
  ReplyToAddresses: [
     'alex_day64@yahoo.com',
    /* more items */
  ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });