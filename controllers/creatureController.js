const express = require('express')
const router = express.Router()

const { Creature } = require('../models/CreatureModel')

router.get('/', async (req, res) => {
    try {
      const creatures = await Creature.find({})
      res.json(creatures)
    } catch (err) {
      console.log(err)
    }
  })

  module.exports = router

