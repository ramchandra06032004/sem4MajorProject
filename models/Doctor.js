const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  education: {
    type: String,
    required: true,
  },

  fees_per_session: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  image_url: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
