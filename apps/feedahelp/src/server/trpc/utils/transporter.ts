import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: 'mohianmostofa@gmail.com',
        pass: 'fexchpnwrlikmpog',
    }
})

export default transporter
