const { readFile, writeFile } = require('fs').promises
const { resolve } = require('path')

const start = async () => {
  try {
    const first = await readFile(resolve(__dirname, '../content/first.txt'), 'utf8')
    const second = await readFile(resolve(__dirname, '../content/second.txt'), 'utf8')
    await writeFile(
      resolve(__dirname, '../content/result-mind-grenade.txt'),
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()
