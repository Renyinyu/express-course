const authorize = (req, res, next) => {
  console.log('authorize success')
  next()
}

module.exports = authorize
