const doctorService = require("./doctor.service");

const createDoctor = async (req, res) => {
  try {
    const doctor = await doctorService.createDoctor(
      req.body,
      req.tenantId
    );

    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const getDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getDoctors(req.tenantId);

    res.status(200).json(doctors);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  createDoctor,
  getDoctors
};