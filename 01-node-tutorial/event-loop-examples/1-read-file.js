const { readFile } = require('fs').promises
const { resolve } = require('path')


console.log('started a first task');

(async function() {
  try {
    const result = await readFile(resolve(__dirname, '../content/first.txt'), 'utf8')
    console.log(result)
    console.log('completed first task')
  } catch (error) {
    console.log(error)
  }
})()
console.log('starting next task')
