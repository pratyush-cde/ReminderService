const sender = require("../config/email-config");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    console.log("Error while sending email:", error);
  }
};

module.exports = {
  sendBasicEmail,
};
