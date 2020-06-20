const express = require('express')
const db = require('./data/dbConfig')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const accounts = await db
      .select('*')
      .from('accounts')
      .where('id', req.params.id)
      .limit(1)
    res.json(accounts)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      budget: req.body.budget,
    }
    const [id] = await db.insert(payload).into('accounts')
    const newAccount = await db('accounts')
      .where('id', id)
      .first()
    res.json(newAccount)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      budget: req.body.budget,
    }
    await db('accounts')
      .where('id', req.params.id)
      .update(payload)
    const updateAccount = await db('accounts')
      .where('id', req.params.id)
      .first()
    res.status(updateAccount)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})
