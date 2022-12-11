const http = require('http')
const { readFileSync } = require('fs')
const { resolve } = require('path')

// get all files
const homePage = readFileSync(resolve(__dirname, '../navbar-app/index.html'))
const homeStyles = readFileSync(resolve(__dirname, '../navbar-app/styles.css'))
const homeImage = readFileSync(resolve(__dirname, '../navbar-app/logo.svg'))
const homeLogic = readFileSync(resolve(__dirname, '../navbar-app/browser-app.js'))

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
    // styles
    else if (url === '/styles.css') {
      res.writeHead(200, { 'content-type': 'text/css' })
      res.write(homeStyles)
      res.end()
    }
    // image/logo
    else if (url === '/logo.svg') {
      res.writeHead(200, { 'content-type': 'image/svg+xml' })
      res.write(homeImage)
      res.end()
    }
    // logic
    else if (url === '/browser-app.js') {
      res.writeHead(200, { 'content-type': 'text/javascript' })
      res.write(homeLogic)
      res.end()
    }
    // 404
    else {
      res.writeHead(404, { 'content-type': 'text/html' })
      res.write('<h1>page not found</h1>')
      res.end()
    }
})

server.listen(5000)
