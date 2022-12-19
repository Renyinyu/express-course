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

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

app.listen(5000, () => {
  console.log('')
})
