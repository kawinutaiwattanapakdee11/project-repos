const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
  contactId: String,
  firstName: String,
  middleName: String,
  lastName: String,
  gender: String,
  mobile: String,
  email: String,
  facebook: String,
  imageUrl: String
});

module.exports = mongoose.model('Contact', contactSchema);
