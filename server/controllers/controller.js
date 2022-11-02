const path = require("path")

module.exports = {

    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/index.html"))
        
    },

    script: (req, res) => {
        res.sendFile(path.join(__dirname, './server/server.js'))
    }
}