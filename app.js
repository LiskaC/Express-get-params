const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/search', function (req, res) {
  if (req.query.city === "Berlin") {
    res.send("Yay Berlin!")
  } else {
    res.send("Oh alright")
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))