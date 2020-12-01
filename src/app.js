const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/',(req, res) => {
    res.status(200).send('hello word');
})

app.get('/time',(req, res)=> {
    let timeNow = Date(Date.now());
    res.status(200).send(timeNow.toString());
});

app.post('/logthis', (req, res) => {
    const name = req.body.name;
    const toLog = `\n >>> My name is ${name} <<< \n`
    console.log(toLog)
    res.status(200).send(toLog)
})


const port = 8000;
// app.listen(port, () => {
//     console.log('Listening on 8000');
// })

module.exports = app;