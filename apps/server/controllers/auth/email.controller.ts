import * as nodemailer from 'nodemailer'
import { render } from '@react-email/render';
import { Email } from "~/ui/components/elements/Email/emailTemplate";

const transporter = nodemailer.createTransport({
  service: process.env.NEXT_PUBLIC_EMAIL_HOST,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
  }
})

//const emailHtml = render(<Email FahURL="https://example.com" />);

const sendVerificationEmail = async (
  toEmail: string,
  verificationToken: string,
  subject: string = 'No Subject'
  ) => {
  try {
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL,
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
