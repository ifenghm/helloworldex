import express from 'express'
const app = express()
app.use(express.json())

app.post('/', function (req, res) {
  console.log(req.body.day);
  res.send('Hello World POST' + req.body['day'])
})
app.get('/index', function (req, res) {
  res.send('Hello World')
})

app.listen(4000, () => {
  console.log('Example app listening on port 4000!')
})