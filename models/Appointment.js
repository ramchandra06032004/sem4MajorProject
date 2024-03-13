const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Pending",
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
