import express from 'express'

// Creating the express app.
const app = express()

// Routing
app.get('/', function(req, res) {
    res.send('Express Initial config, check URL localhost:3000')
})

// Defining app port, and starting app.
const port = 3000

app.listen(port, () => {
    console.log(`== Server is running on port ${port} ==`)
})
