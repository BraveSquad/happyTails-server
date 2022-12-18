//An example index.js for Vonage file
import dotenv from 'dotenv'
import Vonage from '@vonage/server-sdk'
// import SMS from '@vonage/server-sdk/lib/Messages/SMS.js'

dotenv.config()
const vonage = new Vonage({
  applicationId: process.env.VONAGE_APPLICATION_ID,
  privateKey: process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH,
//   apiKey: process.env.VONAGE_API_KEY,
//   apiSecret: process.env.VONAGE_API_SECRET
});

const text = "👋Hello, this is a confirmation. Your appointment has been booked with Happy Tails. See you soon!";
const toNumber = process.env.TO_NUMBER;

// vonage.messages.send(
//   new SMS(text, process.env.TO_NUMBER, "Vonage"),
//   (err, data) => {
//     if (err) {
//       console.error("Message failed with error:", err);
//     } else {
//       console.log(`Message ${data.message_uuid} sent successfully.`);
//     }
//     // function throwSomeObj() {
//     //     throw {statusCode: 500};
//     // }
    
//     // try {
//     //   throwSomeObj();
//     // } catch(err) {
//     //   console.log(err);
//     //   console.log(err.stack);
//     // }
//   }
// );
vonage.channel.send(
  { type: "sms", "number": toNumber },
  { type: "sms", "number": "Vonage" },
  {
    content: {
      type: "text",
      text: text
    }
  },
  (err, responseData) => {
    if (err) {
      console.log("Message failed with error:", err);
    } else {
      console.log(`Message ${responseData.message_uuid} sent successfully.`);
    }
  }
);