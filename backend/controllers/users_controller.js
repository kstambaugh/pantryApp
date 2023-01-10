const express = require('express')
const users = express.Router()
const db = require('../sequelize/models')
const { Users } = db

users.get('/', async (req, res) => {
    const users = await Users.findAll()
    res.json(users)
})

module.exports = users