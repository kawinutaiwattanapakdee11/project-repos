const router = require('express').Router()

const contactsController = require('../controllers/contacts')

router.post('/add', contactsController.addContact)

router.get('/getMany', contactsController.getManyContacts)

router.put('/update', contactsController.updateContact)

router.delete('/delete', contactsController.deleteContact)

module.exports = router