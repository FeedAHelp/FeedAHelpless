import * as nodemailer from 'nodemailer';
import { emit } from 'process';


// Create a nodemailer transporter with your email service settings
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const sendVerificationEmail = async (toEmail : string , verificationToken: string) => {
  try {
    const mailOptions = {
      from: 'feedahelp@gmail.com',
      to: toEmail,
      subject: 'Account Verification',
      text: `Click the following link to verify your account: ${process.env.LOCAL_BACKEND_BASE_URL}auth/verify?email=${toEmail}&passcode=${verificationToken}`,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Verification email sent to ${toEmail}`);
  } catch (error : any) {
    console.error(`Error sending verification email: ${error.message}`);
    throw new Error('Error sending verification email');
  }
};

export default sendVerificationEmail;
