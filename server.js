const express = require('express')
const app = express()

const port = 3001


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('blog/all-posts', (req, res) => {

})