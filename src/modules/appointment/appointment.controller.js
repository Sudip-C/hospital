const appointmentService = require("./appointment.service");

exports.createAppointment = async (req, res) => {
  try {
    const appointment =
      await appointmentService.createAppointment(
        req.body,
        req.tenantId
      );

    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments =
      await appointmentService.getAppointments(
        req.tenantId
      );

    res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAppointmentById = async (
  req,
  res
) => {
  try {
    const appointment =
      await appointmentService.getAppointmentById(
        req.params.id,
        req.tenantId
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateAppointment = async (
  req,
  res
) => {
  try {
    const appointment =
      await appointmentService.updateAppointment(
        req.params.id,
        req.body,
        req.tenantId
      );

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteAppointment = async (
  req,
  res
) => {
  try {
    await appointmentService.deleteAppointment(
      req.params.id,
      req.tenantId
    );

    res.status(200).json({
      success: true,
      message:
        "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateStatus = async (
  req,
  res
) => {
  try {
    const appointment =
      await appointmentService.updateStatus(
        req.params.id,
        req.body.status,
        req.tenantId
      );

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};