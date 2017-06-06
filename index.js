const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'Client/layouts'))
app.get('/home', (request, response) => {
  response.render('home', {
    name: 'John'
  })
})
app.get('/tester', (request, response) => {
  response.render('tester', {
    name: 'John Doe'
  })
})
app.listen(3000)

console.log('listening on port 3000')
