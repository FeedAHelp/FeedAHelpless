import * as nodemailer from 'nodemailer'
import { emit } from 'process'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD
  }
})

const sendVerificationEmail = async (
  toEmail: string,
  verificationToken: string,
  subject: string = 'No Subject'
  ) => {
  try {
    const mailOptions = {
      from: 'feedahelp@gmail.com',
      to: toEmail,
      subject: subject,
      text: `Use this Code within 5 minutes. \n${verificationToken}\n You can also click the following link to verify your account: \n${process.env.PRODUCTION_BACKEND_BASE_URL}auth/verify?email=${toEmail}&passcode=${verificationToken}`
    }

    await transporter.sendMail(mailOptions)

    console.log(`Verification email sent to ${toEmail}`)
  } catch (error: any) {
    console.error(`Error sending verification email: ${error.message}`)
    throw new Error('Error sending verification email')
  }
}

export default sendVerificationEmail
