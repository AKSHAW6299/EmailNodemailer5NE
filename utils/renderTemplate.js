// Just to use EJS, we have created utils file.
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const renderEmailTemplate = async (data) => {
  const templatePath = path.join(__dirname, '../templates/email.ejs')

  return await ejs.renderFile(templatePath, data)
}
