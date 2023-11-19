const mongoose = require('mongoose');
const {Schema} = mongoose;
const imageSchema = new mongoose.Schema({
    name: String,
    imageFileName: String,
  });

  const ImageModel = mongoose.model('Image',imageSchema);
  module.exports = ImageModel;