const Contact = require('../models/contact')

exports.addContact = async (req, res, next) => {
  const payload = req.body
  const contact = new Contact(payload)
  await contact.save()
  res.end()
}

exports.getManyContacts = async (req, res, next) => {
  const contacts = await Contact.find({})
  res.send(contacts)
}

exports.updateContact = async (req, res, next) => {
  const payload = req.body
  const contactId = req.body.contactId
  await Contact.findOneAndUpdate({ contactId: contactId }, payload)
  res.end()
}

exports.deleteContact = async (req, res, next) => {
  const firstName = req.body.firstName
  await Contact.findOneAndDelete({firstName: firstName})
  res.end()
}