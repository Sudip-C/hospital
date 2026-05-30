const express = require("express");

const router = express.Router();

const patientController = require("./patient.controller");

const authMiddleware = require("../../middlewares/auth.middleware");
const roleMiddleware = require("../../middlewares/role.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN", "RECEPTIONIST"),
  patientController.createPatient
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware(
    "ADMIN",
    "RECEPTIONIST",
    "DOCTOR"
  ),
  patientController.getPatients
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware(
    "ADMIN",
    "RECEPTIONIST",
    "DOCTOR"
  ),
  patientController.getPatientById
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN", "RECEPTIONIST"),
  patientController.updatePatient
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  patientController.deletePatient
);

module.exports = router;