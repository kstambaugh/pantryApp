const express = require('express');
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const sequelize = require('./database')
dotenv.config()

sequelize.sync({ alter: true })
    .then((res) => {
        console.log('models synced with database', res)
    })
    .catch(err => {
        console.error('error syncing models', err)
    })




app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(process.env.PORT, () => console.log("Server is listening on port 5000"))