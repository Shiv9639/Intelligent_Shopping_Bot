const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');



module.exports = {
     connectToDialogFlow:async (msg,sessionId) => {
        
      let response_data;
      
        
        
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
       

        if(result.fulfillmentText == 'Great.Wait while we fetch the info for you..') {
          response_data = {
            'parameters': result.parameters.fields,
            'intent_name': result.intent.displayName,
            'response_text': result.fulfillmentText,
            'conversation_end_flag' : 1
          } 

        } else {
          response_data = {
            'parameters': result.parameters,
            'intent_name': result.intent.displayName,
            'response_text': result.fulfillmentText,
            'conversation_end_flag' : 0
          } 
        }

        return response_data;


    },
}
