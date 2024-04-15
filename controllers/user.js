const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Bad request. Please add email and password in the request body",
    });
  }

  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    const isMatch = await foundUser.comparePassword(password);

    if (isMatch) {
      const token = jwt.sign(
        { id: foundUser._id, name: foundUser.name },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      return res.status(200).json({
        msg: "user logged in",
        token,
        userId: foundUser._id,
        isDoctor: foundUser.isDoctor,
        name: foundUser.name,
      });
    } else {
      return res.status(400).json({ msg: "Bad password" });
    }
  } else {
    return res.status(400).json({ msg: "Bad credentails" });
  }
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.name}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

const getAllUsers = async (req, res) => {
  let users = await User.find({});

  return res.status(200).json({ users });
};

const register = async (req, res) => {
  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser === null) {
    let { username, email, password } = req.body;
    if (username.length && email.length && password.length) {
      const person = new User({
        name: username,
        email: email,
        password: password,
      });
      await person.save();
      return res.status(201).json({ person });
    } else {
      return res
        .status(400)
        .json({ msg: "Please add all values in the request body" });
    }
  } else {
    return res.status(400).json({ msg: "Email already in use" });
  }
};
const getAllDoctors = async (req, res) => {
  let doctors = await Doctor.find({});

  return res.status(200).json({ doctors });
};

const createAppointment = async (req, res) => {
  const { doctor, userId, mobile, problem, email } = req.body;
  console.log(doctor, userId, mobile, problem, email);
  try {
    const newAppointment = new Appointment({
      doctor: doctor,
      patient: userId,
      mobile: mobile,
      problem: problem,
      email: email,
    });

    await newAppointment.save();

    res.status(201).json({
      message: "Appointment created successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: "user Not Found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

const getAAppointment = async (req, res) => {
  const { id } = req.body;

  try {
    const appointments = await Appointment.find({
      patient: id,
    });
    if (!appointments) {
      return res
        .status(404)
        .json({ msg: "No appointments found for this user" });
    }
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
const getADoctor = async (req, res) => {
  const { id } = req.body;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

//edit apoinment
const updateAppointmentStatus = async (req, res) => {
  const { id, status } = req.body;

  try {
    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({ msg: "Appointment not found" });
    }

    appointment.status = status;
    appointment.markModified("status");
    console.log("Saving appointment...");
    await appointment.save();
    console.log("Appointment saved.");
    console.log(appointment);

    res.status(200).json({
      message: "Appointment status updated successfully",
      appointment: appointment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get doc by name
const getDoctorByName = async (req, res) => {
  let { name } = req.params;
  name = name.trim().replace(/\s+/g, " ");
  const fName = `Dr. ${name}`;

  try {
    const doctor = await Doctor.findOne({ name: fName });

    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//get doc apoinment
const getDoctorAppointments = async (req, res) => {
  const { doctorId } = req.params;

  try {
    const appointments = await Appointment.find({ doctor: doctorId });
    console.log(appointments);
    if (!appointments) {
      return res
        .status(404)
        .json({ msg: "No appointments found for this doctor" });
    }
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
module.exports = {
  login,
  register,
  dashboard,
  getAllUsers,
  getAllDoctors,

  createAppointment,
  getAUser,
  getADoctor,
  getAAppointment,
  updateAppointmentStatus,
  getDoctorByName,
  getDoctorAppointments,
};
