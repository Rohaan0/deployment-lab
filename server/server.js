const express = require('express')
const cors = require('cors')
require('dotenv').config()
const path = require('path')


const app = express()


app.use(express.json())
// app.use(cors())
// include and initialize the rollbar library with your access token



app.get

const { home, styles, script } = require("./controllers/controller.js")


var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('THIS IS A ROLLBACK!')


app.get("/", home)
app.get("/css", styles)
app.get("/js", script)

app.get('/api/students', (req, res) => {
    res.status(200).send(students)
})


app.post('/api/students', (req, res) => {
    let {name} = req.body

    rollbar.info('student named' + name + ' is being added!')

    const index = student.findIndex(student => {
        return student === name
    })

    try {
        safjdslf()
       } catch {
        rollbar.critical('caught a backend error')
       }
    
       try {
           if (index === -1 && name !== '') {
               students.push(name)
               res.status(200).send(students)
           } else if (name === ''){
               res.status(400).send('You must enter a name.')
           } else {
               res.status(400).send('That student already exists.')
           }
       } catch (err) {
           console.log(err)
       }


})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})

const { PORT } = process.env || 4000

console.log(__dirname)

app.listen(PORT, () => console.log( `server listening at port ${PORT}`))