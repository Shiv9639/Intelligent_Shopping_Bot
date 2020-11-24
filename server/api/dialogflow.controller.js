const { connectToDialogFlow } = require('./dialogflow.service');

module.exports = {
    dialogflowController: (req,res) => {
        const msg = req.body.msg
        const sessionId = req.body.sessionId
       connectToDialogFlow(msg,sessionId).then((data) => {
        
           res.send(data);
       }).catch(err => {
           res.send({'err': 'An error occured please try again after some time'});
       })
    }
}