const { connectToDialogFlow } = require('./dialogflow.service');

module.exports = {
    dialogflowController: (req,res) => {
        const msg = req.body.msg
       connectToDialogFlow(msg).then((data) => {
           res.send({'res': data});
       }).catch(err => {
           res.send({'err': 'An error occured please try again after some time'});
       })
    }
}