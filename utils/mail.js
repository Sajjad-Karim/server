const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // 2) Define the email options
  const mailOptions = {
    from: "Fruit Counting <fruitCounting@admin.io>",
    to: options.email,
    subject: options.subject,
    html: options.message,
    // html:
  };
  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
