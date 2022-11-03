const express = require('express')
const cors = require('cors')
require('dotenv').config()
const path = require('path')


const app = express()


app.use(express.json())
// app.use(cors())
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('THIS IS A ROLLBACK!')


try {
    thisFunctionDoesNotExist()
} catch {
    rollbar.critical(`Whoops looks like someone cant code properly, you should fire the dummy who made this!`)
}


try {
    anotherNonExistentFunction()
} catch {
    rollbar.warning('wow again? really? what a dummy!')
}

app.get

const { home, styles, script } = require("./controllers/controller.js")

app.get("/", home)
app.get("/css", styles)
app.get("/js", script)

const { PORT } = process.env

console.log(__dirname)

app.listen(PORT, () => console.log( `server listening at port ${PORT}`))