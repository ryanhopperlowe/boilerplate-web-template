const express = require('express')
const path = require('path')
const http = require('http')
const reload = require('reload')

const port = 3000;
const pubDir = path.join(__dirname, 'public')
const srcDir = path.join(__dirname, 'src')

const app = express()

app.use(express.static(path.join(pubDir)))
app.use(express.static(path.join(srcDir)))

app.set('port', process.env.PORT || port)

app.get('/', (req, res) => {
  res.sendFile(path.join(pubDir, 'index.html'))
})

const server = http.createServer(app)
reload(app)
.then(() => {
  server.listen(app.get('port'), () => {
    console.log(`Server Running on http://localhost:${app.get("port")}`);
  })
})
.catch(err => {
  console.error(err.message, err)
})