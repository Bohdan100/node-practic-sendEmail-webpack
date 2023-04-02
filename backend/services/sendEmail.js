const nodemailer = require("nodemailer");

async function sendEmail(data) {
  const { userName, userEmail, userMessage } = data;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bohdan_goit_56@outlook.com", // generated ethereal user
      pass: "history_goit", // generated ethereal password
    },
  });

  const letter = `<h1 style="color: aquamarine; text-decoration: underline">
      Ви отримали листа від ${userName}
    </h1>
    <p style="font-size: 25; color: blue">
      Його контактна електронна пошта: ${userEmail}
    </p>
    <p style="font-size: 20; color: green">
      Він відправив Вам наступне повідомлення: ${userMessage}
    </p>`;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "bohdan_goit_56@outlook.com", // sender address
    to: "b.orlovskiy@gmail.com", // list of receivers
    subject:
      "April 2, 2023. Odessa, the first intergalactic conference of the Jedi. Odessa House of Culture, 19.00", // Subject line
    text: userMessage, // plain text body
    html: letter,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendEmail;
