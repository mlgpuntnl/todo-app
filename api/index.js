const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    console.log(req);
    res.send('piet')
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})