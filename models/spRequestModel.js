const mongoose = require('mongoose');

const spRequestSchema = new mongoose.Schema({
  // car data
  brand: {
    type: String,
    require: false,
  },
  model_name: {
    type: String,
    // require: true,
    require: [true, 'Duhet modeli!'],
  },
  year: {
    type: String,
    // max: 3000,
    // min: 1900,
  },
  //vesrioni ka nen te dhena
  version: {
    type: String,
    require: true,
  },
  // card data
  cards: [
    {
      description: {
        type: String,
        // require: true,
      },
      imageUrl: String,
      //  {
      //   data: Buffer,
      //   contentType: String,
      // },
      fotoTitle: {
        type: String,
        require: true,
      },
      codeOEM: {
        type: String,
        // maxlength: [6],
        // minlength: [6],
      },
    },
  ],

  //  driving license data

  driveTitle: String,
  driveUrl: String,
  // {
  //   data: Buffer,
  //   contentType: String,
  // },

  // User data
  user: {
    _id: String,
    name: String,
    surname: String,
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      max: 9999999999,
      min: 0000000000,
    },
    address: String,
  },
  message: {
    type: String,
    require: true,
  },
});

const SPRequest = mongoose.model(
  'SPRequest',
  spRequestSchema
);
module.exports = SPRequest;
