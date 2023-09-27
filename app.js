const express = require('express')
const app = express()
const { version } = require('./package.json')
//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
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send(version)
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
