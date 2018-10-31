const path = require("path")

const port = 3000
const staticRoot = path.join(__dirname, '../view')

module.exports = {
    port,
    staticRoot
}