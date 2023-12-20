const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1) CREATE A TRANSPORTER (service sending the email (not node js) like gmail)
  const transporter = nodemailer.createTransport({
    // service: 'Gmail',     if we don"t use a known service we use host and port
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "ibnbadisschool1@gmail.com",
      pass: "lkte exdi zjwm fkqk",
    },

    //activate in Gmail 'less secure app' option
  });

  // const obj = JSON.parse(options.message);
  // let message = `الإسم : ${obj.firstName}
  // اللقب : ${obj.lastName}
  // تاريخ الميلاد : ${obj.birthDay}
  // الجنس : ${obj.sexe}
  // الشارع : ${obj.street}
  // الرمز البريدي : ${obj.codePostal}
  // المكان : ${obj.city}
  // البريد الإلكتروني : ${obj.email}
  // رقم الهاتف : ${obj.phone}
  // إسم المدرسة : ${obj.school}
  // مكان المدرسة : ${obj.schoolPlace}
  // المرحلة : ${obj.schoolType}
  // المستوى : ${obj.level}

  // `;

  // 2) DEFINE EMAIL OPTIONS
  const mailOptions = {
    from: '"Ibn Badis" <ibnbadisschool1@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // 3) SENDING THE EMAIL
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
