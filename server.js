import express from 'express'
import dotenv from 'dotenv'
import sendMail from './controllers/sendMail.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.get('/', (_, res) => {
  res.send('Email Service Running 🚀')
})

app.get('/mail', sendMail)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
