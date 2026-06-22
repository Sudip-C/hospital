const express = require("express");
const router = express.Router();

const controller = require("./appointment.controller");

const authMiddleware = require("../../middlewares/auth.middleware");
const roleMiddleware = require("../../middlewares/role.middleware");

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware(
    "ADMIN",
    "RECEPTIONIST"
  ),
  controller.createAppointment
);

router.get(
  "/",
  roleMiddleware(
    "ADMIN",
    "RECEPTIONIST",
    "DOCTOR"
  ),
  controller.getAppointments
);

router.get(
  "/:id",
  roleMiddleware(
    "ADMIN",
    "RECEPTIONIST",
    "DOCTOR"
  ),
  controller.getAppointmentById
);

router.patch(
  "/:id",
  roleMiddleware(
    "ADMIN",
    "RECEPTIONIST"
  ),
  controller.updateAppointment
);

router.patch(
  "/:id/status",
  roleMiddleware(
    "ADMIN",
    "RECEPTIONIST",
    "DOCTOR"
  ),
  controller.updateStatus
);

router.delete(
  "/:id",
  roleMiddleware("ADMIN"),
  controller.deleteAppointment
);

module.exports = router;