const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const sessionId = uuid.v4();

module.exports = {
     connectToDialogFlow:async (msg) => {
        

        

        const sessionClient = new dialogflow.SessionsClient({
            keyFilename: "./credentails.json"
        });

        const sessionPath = sessionClient.projectAgentSessionPath('intelligent-store-9vkx', sessionId);

       
        const request = {
            session: sessionPath,
            queryInput: {
              text: {
                text: msg,
                languageCode: 'en-US',
              },
            },
          };

        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        return result.fulfillmentText


    },
}
