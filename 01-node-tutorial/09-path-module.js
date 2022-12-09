const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test2.txt')
console.log(absolute)
const baseAbsolute = path.basename(absolute)
console.log(absolute)
console.log(baseAbsolute)
