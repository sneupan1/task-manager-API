const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=> {
    sgMail.send({
        to: email,
        from: 'taskmanagerteam@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail = (email, name)=> {
    sgMail.send({
        to: email,
        from: 'taskmanagerteam@gmail.com',
        subject: 'Confirmation of Account Cancellation!',
        text: `Your account has been deleted, ${name}. Thank you for using our application, please provide us with some feedback and hope to see you soon!`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}