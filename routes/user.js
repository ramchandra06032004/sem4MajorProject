const express = require("express");
const router = express.Router();

const {
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
} = require("../controllers/user");
const authMiddleware = require("../middleware/auth");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);
router.route("/doctors").get(getAllDoctors);
router.route("/appointments").post(createAppointment);
router.route("/user/:id").get(getAUser);
router.route("/doctor/").post(getADoctor);
router.route("/appointment").post(getAAppointment);
router.route("/appointment/status").patch(updateAppointmentStatus);
router.route("/doctor/:name").get(getDoctorByName);
router.route("/appointments/:doctorId").get(getDoctorAppointments);
module.exports = router;
