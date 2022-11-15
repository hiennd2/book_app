
const UserAction = require('../actions/UserActions.js')

exports.sendMail = (req, res) => {
    UserAction.userSendMail()
}