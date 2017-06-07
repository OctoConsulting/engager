const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'Client/layouts'))
app.get('/', (request, response) => {
  response.render('home', {
  })
})
app.listen(3000)

console.log('listening on port 3000')
