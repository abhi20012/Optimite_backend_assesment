const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newTask = (task) => {
    console.log('inside newComment Mailer', task);
    let htmlString = nodeMailer.renderTemplate({task: task}, '/mailers/taskMails.ejs');

    nodeMailer.transporter.sendMail({
        from: 'kashyapabhinav777@gmail.com',
        to: 'kashyapabhinav777@gmail.com',
        subject: "New Comment Published",
        // html: '<h1>Yup, your comment is now published</h1>'
        html: htmlString
    }, (err, info) => {
        if(err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}