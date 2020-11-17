const express = require('express')
const app = express()
const port = 3003
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/id', function (req, res) {
  console.log('GET')
  let name = req._parsedOriginalUrl.query
  console.log(name)
  res.end()
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})