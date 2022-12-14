const { resolve } = require('path')
const express = require('express')
const app = express()
let { people } = require('./data')

// 静态资源
app.use(express.static(resolve(__dirname, './methods-public')))
// 解析表单数据
app.use(express.urlencoded({ extended: false }))
// 解析json
app.use(express.json())



app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
