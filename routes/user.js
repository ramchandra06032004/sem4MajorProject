const express = require("express");
const router = express.Router();

const {
  login,
  register,
  dashboard,
  getAllUsers,
  getAllDoctors,
  getDoctorById,
  createAppointment,
} = require("../controllers/user");
const authMiddleware = require("../middleware/auth");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);
router.route("/doctors").get(getAllDoctors);
router.route("/doctors/:id").get(getDoctorById);
router.route("/appointments").post(createAppointment);

module.exports = router;
