import nodemailer from 'nodemailer'
import { renderEmailTemplate } from '../utils/renderTemplate.js'

const sendMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // gamail is a 3rd party service like [AWS SES, Mailgun, SendGrid, Sparkpost, etc]
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const html = await renderEmailTemplate({
      title: 'Anand Kumar',
      subtitle: 'Email Notification Service',
      username: 'Developer',
      message: 'Your Nodemailer + EJS email template is working perfectly.',
      buttonText: 'Open Portfolio',
      actionUrl: 'https://ak-info.netlify.app/',
    })

    const info = await transporter.sendMail({
      from: `"Anand Kumar" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'EJS Email Template Working',
      html,
    })

    res.json({ success: true, messageId: info.messageId })

  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export default sendMail
