const express = require("express");

const router = express.Router();

const doctorController = require("./doctor.controller");

const authMiddleware = require("../../middlewares/auth.middleware");

const roleMiddleware = require("../../middlewares/role.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  doctorController.createDoctor
);

router.get(
  "/",
  authMiddleware,
  doctorController.getDoctors
);

module.exports = router;