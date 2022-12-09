// commonJS, every file is module

const names = require('./04-names')
const sayHi = require('./05-utils')
const {items, singlePerson} = require('./06-alternative-flavor')
require('./07-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
console.log(items)
console.log(singlePerson)
