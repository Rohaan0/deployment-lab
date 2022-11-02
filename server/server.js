const express = require('express')
const cors = require('cors')
require('dotenv').config()
const path = require('path')


const app = express()


app.use(express.json())
// app.use(cors())

app.get

const { home, styles, script } = require("./controllers/controller.js")

app.get("/", home)
app.get("/css", styles)
app.get("/js", script)

const { PORT } = process.env

console.log(__dirname)

app.listen(PORT, () => console.log( `server listening at port ${PORT}`))