const express = require('express')
const router = express.Router()

const { pool } = require('./database.js')

router.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

router.get('/bebida-energetica', (req, res) => res.sendFile(__dirname + "/index.html"))

router.get('/pisco', (req, res) => res.sendFile(__dirname + "/index.html"))

router.get('/ron', (req, res) => res.sendFile(__dirname + "/index.html"))

router.get('/bebida', (req, res) => res.sendFile(__dirname + "/index.html"))

router.get('/snack', (req, res) => res.sendFile(__dirname + "/index.html"))

router.get('/cerveza', (req, res) => res.sendFile(__dirname + "/index.html"))

router.get('/vodka', (req, res) => res.sendFile(__dirname + "/index.html"))

router.get('/search/shows?=:query', (req, res) => res.sendFile(__dirname + "/index.html"))

router.get('/data/', (req, res) => {
  pool.query('SELECT * FROM product', (err, rows, fields) => {
    if(!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
})

router.get('/data/:producto', async (req, res) => {
  const { producto } = req.params
  const productoFormateado = producto.replace(/-/g, " ")
  pool.query(`SELECT * from product WHERE category IN (SELECT id FROM category WHERE name = "${productoFormateado}")`, (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
})

router.get('/search', (req, res) => {
  const { producto } = req.query
  pool.query(`SELECT * FROM product WHERE name LIKE "%${producto}%"`, (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
})

module.exports = router