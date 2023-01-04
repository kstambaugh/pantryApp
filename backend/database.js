const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log('Connection succesfull');
}).catch(err => {
    console.error('Unable to connect', err)
})


module.exports = sequelize