const API_KEY = process.env.SENDGRID_API_KEY;
const authorizationSecret = process.env.SECRET;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(API_KEY);

module.exports = (req, res, next) => {
    const from = 'support@vighnesh153.com';
    const to = req.body.to;
    const subject = req.body.subject;
    const text = req.body.text;
    const html = req.body.html;
    const providedSecret = req.body.secret;

    if (providedSecret !== authorizationSecret) {
        res.status(401).json({
            message: "Unauthorized"
        });
        return;
    }

    const message = {to, from, subject, text, html};

    sgMail.send(message)
        .then(_ => {
                res.status(200).json({
                    message: "SUCCESS"
                });
            }
        );
};
