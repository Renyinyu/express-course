const express = require('express')
const { resolve } = require('path')

const app = express()

// 设置静态资源路径和中间件
app.use(express.static(resolve(__dirname, '../navbar-app')))

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, '../navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
