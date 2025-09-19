const express = require('express')
require('dotenv').config();
const app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next()   
})

app.get('/', (req, res) => res.send('Try to go to /hello'));

app.get('/hello', (req, res) => {
    const n = req.query.n

    if (!n){
        return res.send('You need to inform the n, like this /hello?n=NUMBER')
    }
    const result = 1 + Number(n)
    res.send('1 + ' + n + ' = ' + result)
});

app.get('/facts', async (req, res) => {
    const name = req.query.name
    const country = req.query.country

    const API_KEY = process.env.API_KEY
    const url = "https://api.groq.com/openai/v1/chat/completions"

    if (!name || !country) {
        return res.send("Youl should call it right, like: /facts?name=NAME&country=COUNTRY-NAME")
    }

    const data = {
        model: "openai/gpt-oss-20b",
        messages: [{
        role: "user",
        content: `give me 2 fun facts about ${country} in two sentences`
        }]
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify(data)
    })

    const json = await response.json()
    const facts = json.choices[0].message.content

    res.send('Hello ' + name + ' you are from ' + country + ' and...: ' + facts)
})

const port = 3000;
app.listen(port, () => console.log('Listening on ' + port))
