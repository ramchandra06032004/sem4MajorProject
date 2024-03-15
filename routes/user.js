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
} = require("../controllers/user");
const authMiddleware = require("../middleware/auth");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);
router.route("/doctors").get(getAllDoctors);
router.route("/appointments").post(createAppointment);
router.route("/user").post(getAUser);
router.route("/doctor/").post(getADoctor);
router.route("/appointment").post(getAAppointment);

module.exports = router;
