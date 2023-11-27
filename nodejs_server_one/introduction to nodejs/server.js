console.log("Hello World")
//Globla object instead of Window object
// console.log(global)
 const os = require("os")
//  const path = require("path")
// console.log(`OS version: ${os.version()}`)
// console.log(`OS type :${os.type()}`)
// console.log(`OS Home directory :${os.homedir()}`)

// console.log(`Dir name :${__dirname}`)
// console.log(`File name :${__filename}`)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

const {add,div,mul,sub} = require("./math")

console.log(div(3,4))