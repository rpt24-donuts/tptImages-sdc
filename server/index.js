const express = require('express')
const app = express()
const port = 3003
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//   res.send('Hello World! server')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})