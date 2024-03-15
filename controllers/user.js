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

      return res
        .status(200)
        .json({ msg: "user logged in", token, userId: foundUser._id });
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
  const { id } = req.body;

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
};
